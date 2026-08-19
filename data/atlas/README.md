# Datos del Atlas

Esta carpeta conserva la versión portable del Atlas abierto. Las interfaces de captura y visualización pueden cambiar; los identificadores, el esquema, las fuentes y las exportaciones permanecen versionados.

## Archivos iniciales

- `entities.csv`: organizaciones, iniciativas, personas, países, recursos, indicadores y publicaciones.
- `relationships.csv`: relaciones verificables entre entidades.
- `initiative-country.csv`: implementación de una iniciativa en un país, dividida por dimensiones.
- `evidence.csv`: fuentes que respaldan entidades, relaciones y estados.

## Identificadores

Los IDs son permanentes, no contienen títulos y no se reutilizan:

- `ORG-0001`, `INI-0001`, `PER-0001`, `CTR-CO`, `RES-0001`, `IND-0001`;
- `REL-0001` para relaciones;
- `IMP-0001` para implementación nacional;
- `EVD-0001` para evidencia;
- `PUB-001` para publicaciones.

Cambiar un nombre no cambia el identificador ni la URL pública.

## Reglas

- Cada afirmación material enlaza evidencia.
- Cada archivo declara fecha de observación y de revisión cuando corresponda.
- `Sin datos`, `no aplica` y `no implementado` son estados diferentes.
- Los aportes públicos entran como `sin_verificar`.
- Los datos personales se limitan a funciones públicas documentadas.
- Baserow puede ser la interfaz de edición, pero estas exportaciones permiten migrar y auditar el sistema.

El modelo de producto está en [`planning/integration-explorer.md`](../../planning/integration-explorer.md).
