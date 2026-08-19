# Mapa canónico de Hispanoamérica

`hispanoamerica.svg` es el artefacto cartográfico reutilizable de Repúblicas Unidas. Destaca exactamente dieciocho repúblicas soberanas hispanohablantes de América:

Argentina, Bolivia, Chile, Colombia, Costa Rica, Cuba, Ecuador, El Salvador, Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, República Dominicana, Uruguay y Venezuela.

Puerto Rico y otros territorios hispanohablantes aparecen únicamente como contexto porque este mapa representa repúblicas soberanas. Brasil, Belice, Guyana, Surinam y otros países vecinos también se muestran como contexto geográfico, no como integrantes del ámbito definido.

## Fuente y límites

- Geometría: Natural Earth, `Admin 0 – Countries`, escala 1:50m, versión 5.1.2.
- Licencia: dominio público.
- Perspectiva: Natural Earth muestra por defecto fronteras de facto. La representación no expresa una posición de RRUU sobre disputas territoriales.
- El archivo `hispanoamerica.json` conserva la lista, la versión, la URL y la huella SHA-256 de la fuente.

## Regenerar

Ejecuta `python3 scripts/build_hispanoamerica_map.py` desde la raíz del repositorio. El script descarga una versión fijada de la fuente y vuelve a producir el SVG y sus metadatos de forma determinista.

## Uso

El SVG puede usarse directamente con `<img>`, como imagen social o como base para visualizaciones. Cada república tiene un identificador `country-xxx` y un atributo `data-country` con su código ISO 3166-1 alfa-3.

No deben añadirse rutas, nodos o cifras al archivo canónico. Esas capas pertenecen a piezas editoriales separadas para no confundir identidad territorial con datos o afirmaciones concretas.
