#!/usr/bin/env python3
"""Build the canonical RRUU map from Natural Earth country boundaries."""

from __future__ import annotations

import hashlib
import json
import urllib.request
from html import escape
from pathlib import Path


SOURCE_VERSION = "5.1.2"
SOURCE_URL = (
    "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/"
    f"v{SOURCE_VERSION}/geojson/ne_50m_admin_0_countries.geojson"
)

WIDTH = 1200
HEIGHT = 1500
PADDING = 44
BOUNDS = (-119.0, -59.5, -33.0, 34.0)  # west, south, east, north

COUNTRIES = {
    "ARG": "Argentina",
    "BOL": "Bolivia",
    "CHL": "Chile",
    "COL": "Colombia",
    "CRI": "Costa Rica",
    "CUB": "Cuba",
    "DOM": "República Dominicana",
    "ECU": "Ecuador",
    "SLV": "El Salvador",
    "GTM": "Guatemala",
    "HND": "Honduras",
    "MEX": "México",
    "NIC": "Nicaragua",
    "PAN": "Panamá",
    "PRY": "Paraguay",
    "PER": "Perú",
    "URY": "Uruguay",
    "VEN": "Venezuela",
}


def fetch_source() -> tuple[dict, str]:
    request = urllib.request.Request(SOURCE_URL, headers={"User-Agent": "RRUU map builder"})
    with urllib.request.urlopen(request, timeout=60) as response:
        raw = response.read()
    return json.loads(raw), hashlib.sha256(raw).hexdigest()


def iter_points(geometry: dict):
    coordinates = geometry["coordinates"]
    if geometry["type"] == "Polygon":
        polygons = [coordinates]
    elif geometry["type"] == "MultiPolygon":
        polygons = coordinates
    else:
        return
    for polygon in polygons:
        for ring in polygon:
            for point in ring:
                yield point


def intersects_view(geometry: dict) -> bool:
    west, south, east, north = BOUNDS
    return any(west <= lon <= east and south <= lat <= north for lon, lat in iter_points(geometry))


def project(lon: float, lat: float) -> tuple[float, float]:
    west, south, east, north = BOUNDS
    x = PADDING + (lon - west) / (east - west) * (WIDTH - 2 * PADDING)
    y = PADDING + (north - lat) / (north - south) * (HEIGHT - 2 * PADDING)
    return x, y


def geometry_path(geometry: dict) -> str:
    coordinates = geometry["coordinates"]
    polygons = [coordinates] if geometry["type"] == "Polygon" else coordinates
    commands: list[str] = []
    for polygon in polygons:
        for ring in polygon:
            if len(ring) < 3:
                continue
            projected = [project(lon, lat) for lon, lat in ring]
            commands.append(f"M{projected[0][0]:.2f},{projected[0][1]:.2f}")
            commands.extend(f"L{x:.2f},{y:.2f}" for x, y in projected[1:])
            commands.append("Z")
    return " ".join(commands)


def build_svg(features: list[dict]) -> str:
    selected = {feature["properties"]["ISO_A3"]: feature for feature in features if feature["properties"]["ISO_A3"] in COUNTRIES}
    missing = sorted(set(COUNTRIES) - set(selected))
    if missing:
        raise RuntimeError(f"Missing expected countries: {', '.join(missing)}")

    context_paths: list[str] = []
    country_paths: list[str] = []
    for feature in features:
        geometry = feature.get("geometry")
        if not geometry or geometry["type"] not in {"Polygon", "MultiPolygon"} or not intersects_view(geometry):
            continue
        iso = feature["properties"].get("ISO_A3", "")
        path = geometry_path(geometry)
        if iso in COUNTRIES:
            country_paths.append(
                f'    <path id="country-{iso.lower()}" data-country="{iso}" '
                f'aria-label="{escape(COUNTRIES[iso])}" d="{path}"><title>{escape(COUNTRIES[iso])}</title></path>'
            )
        else:
            context_paths.append(f'    <path d="{path}" />')

    return "\n".join(
        [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500" role="img" aria-labelledby="map-title map-desc">',
            '  <title id="map-title">Mapa de las dieciocho repúblicas soberanas de Hispanoamérica</title>',
            '  <desc id="map-desc">México, seis repúblicas de Centroamérica, Cuba, República Dominicana y diez repúblicas de Sudamérica aparecen destacadas en oro. Venezuela está incluida.</desc>',
            '  <rect width="1200" height="1500" rx="42" fill="#220d2f" />',
            '  <g id="geographic-context" fill="#3d2452" stroke="#8f7a9d" stroke-width="1.5" stroke-linejoin="round" fill-rule="evenodd" aria-hidden="true">',
            *context_paths,
            '  </g>',
            '  <g id="hispanoamerica" fill="#f3c34f" stroke="#fff4d0" stroke-width="2.15" stroke-linejoin="round" fill-rule="evenodd">',
            *country_paths,
            '  </g>',
            '</svg>',
            '',
        ]
    )


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    output_dir = root / "assets" / "maps"
    output_dir.mkdir(parents=True, exist_ok=True)
    data, source_sha256 = fetch_source()
    svg = build_svg(data["features"])
    (output_dir / "hispanoamerica.svg").write_text(svg, encoding="utf-8")
    metadata = {
        "title": "Hispanoamérica: 18 repúblicas soberanas hispanohablantes",
        "countries": [{"iso_a3": iso, "name": name} for iso, name in COUNTRIES.items()],
        "country_count": len(COUNTRIES),
        "source": {
            "name": "Natural Earth · Admin 0 Countries · 1:50m",
            "version": SOURCE_VERSION,
            "url": SOURCE_URL,
            "sha256": source_sha256,
            "license": "Public domain",
        },
        "boundary_note": "Natural Earth muestra por defecto fronteras de facto. La representación no implica una posición de RRUU sobre disputas territoriales.",
    }
    (output_dir / "hispanoamerica.json").write_text(
        json.dumps(metadata, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )


if __name__ == "__main__":
    main()
