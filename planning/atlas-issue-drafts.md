# Borradores de Issues · Atlas abierto de la integración

Estos diez expedientes forman un programa ordenado. El primero es el proyecto principal; los demás son líneas de trabajo vinculadas. Se publicarán como Issues mediante una identidad institucional para no atribuir el proyecto a una persona fundadora.

## 1. Proyecto principal · Construir el Atlas abierto de la integración

### Problema

La información sobre integración hispanoamericana está distribuida entre tratados, organismos, portales, programas, personas y conjuntos de datos. Es difícil saber qué existe, cómo se relaciona, dónde está vigente y qué resultados produce.

### Resultado buscado

Una base pública y verificable que conecte organizaciones, iniciativas y personas con países, fuentes e indicadores, y que genere fichas, mapas y recorridos de conocimiento.

### Primer hito

Publicar un piloto construido a partir de ALADI, CAN, MERCOSUR, integración económica centroamericana y Alianza del Pacífico.

### Condición de éxito

Una persona nueva puede descubrir qué mecanismos operan en un país o tema, seguir las relaciones y comprobar cada afirmación en su fuente.

### Dependencias

- modelo y reglas de procedencia;
- registro piloto;
- visualizaciones geográficas y de relaciones;
- proceso de aportes y revisión.

---

## 2. Definir el modelo de datos y las reglas de procedencia

### Objetivo

Acordar los campos mínimos de organizaciones, iniciativas y personas; las dimensiones de país, fuente e indicador; y las relaciones permitidas.

### Entregables

- esquema legible por personas y máquinas;
- vocabulario inicial de relaciones;
- estados de verificación;
- reglas para fechas, vigencia, citas, correcciones y conflictos;
- política de privacidad para personas y cargos públicos;
- tres fichas de ejemplo revisadas.

### Aceptación

Cada afirmación y relación puede enlazar su fuente y fecha. El esquema representa cambios de cargo, membresías suspendidas e iniciativas históricas sin confundirlas con el estado actual.

---

## 3. Crear el registro piloto de organizaciones, iniciativas y personas

### Objetivo

Poblar el modelo con las entidades necesarias para sostener y ampliar la primera publicación.

### Alcance inicial

- ALADI;
- Comunidad Andina;
- MERCOSUR;
- SIECA e integración económica centroamericana;
- Alianza del Pacífico;
- tratados fundacionales e iniciativas concretas citadas;
- responsables públicos solo cuando ayuden a entender gobernanza o ejecución.

### Aceptación

Todas las fichas tienen nombre estable, tipo, resumen, alcance, estado de vigencia, fecha de revisión y fuente. Una revisión separada confirma la muestra antes de publicarla.

---

## 4. Añadir geografía e indicadores comparables

### Objetivo

Permitir mapas de cobertura y series por país sin mezclar conceptos o mediciones incompatibles.

### Entregables

- lista canónica de las dieciocho repúblicas con códigos estables;
- campos de sede, cobertura y nivel geográfico;
- modelo temporal de indicadores con pregunta, unidad, población, método y fuente;
- primera capa de cobertura institucional;
- una capa piloto de opinión pública, solo si las mediciones son comparables.

### Aceptación

El mapa tiene alternativa tabular accesible, distingue “sin cobertura” de “sin datos” y muestra año y fuente de cada indicador.

---

## 5. Diseñar el explorador de relaciones

### Objetivo

Navegar del país a la organización, de la organización a sus iniciativas y responsables, y de cada relación a la evidencia que la respalda.

### Entregables

- ficha pública por entidad;
- filtros por país, tema, tipo y vigencia;
- lista explicada de relaciones;
- vista de grafo opcional para explorar redes complejas;
- enlaces permanentes para compartir cada recorrido.

### Aceptación

La información esencial se entiende sin usar la visualización de grafo. El grafo no crea relaciones inferidas como si fueran hechos.

---

## 6. Preparar búsqueda y asistencia de IA con citas

### Objetivo

Permitir preguntas en lenguaje natural solo después de que el registro tenga procedencia y revisión suficientes.

### Entregables

- búsqueda por nombre, alias, tema, país y contenido;
- respuestas que enlazan fichas y fuentes utilizadas;
- mensajes explícitos cuando la evidencia sea insuficiente o contradictoria;
- conjunto público de preguntas de evaluación;
- registro de errores y correcciones.

### Aceptación

La asistencia no responde desde memoria no verificable, no inventa relaciones y permite reproducir la ruta desde la pregunta hasta las fuentes.

---

## 7. Seleccionar y probar la herramienta de grafo

### Objetivo

Comparar Kumu y Graph Commons con el mismo conjunto piloto antes de asumir un costo o dependencia permanente.

### Entregables

- matriz de evaluación: importación, exportación, API, incrustación, accesibilidad, colaboración, marca, costo y portabilidad;
- grafo piloto en Kumu;
- prueba equivalente en Graph Commons si el límite gratuito permite una comparación justa;
- cinco pruebas de uso con preguntas concretas;
- decisión documentada: mantener, pagar, construir o posponer.

### Aceptación

El conjunto se puede exportar y reconstruir fuera de la herramienta. La decisión se basa en tareas que personas reales lograron completar y no en la apariencia del grafo.

---

## 8. Crear el sistema de captura, revisión y exportación

### Objetivo

Permitir que el equipo registre fuentes y proponga entidades sin editar archivos manualmente, preservando revisión e historial.

### Entregables

- base piloto en Baserow con tablas y campos acordados;
- formulario público de sugerencias con estado `sin verificar`;
- vistas de revisión y duplicados;
- tokens con el menor permiso necesario;
- exportación periódica CSV/JSON al repositorio;
- instrucciones de recuperación y migración.

### Aceptación

Una sugerencia pública nunca se publica automáticamente como hecho. El Atlas puede reconstruirse desde los archivos exportados sin depender de una cuenta individual.

---

## 9. Crear el sistema editorial de mapas y visualizaciones

### Objetivo

Convertir datos verificados en piezas claras para redes y en visualizaciones accesibles para el sitio sin rehacer el trabajo en cada canal.

### Entregables

- tres plantillas iniciales en Datawrapper: cobertura, comparación y cambio temporal;
- especificación visual RRUU para colores, tipografía, fuentes y notas;
- formato de página con mapa, hallazgo, tabla, método y fuente;
- formato social `mapa + hallazgo + hasta tres datos + llamada a explorar`;
- texto alternativo y versión tabular para cada mapa;
- tres publicaciones piloto.

### Aceptación

Cada visual puede actualizarse desde datos, se entiende en teléfono, muestra fecha y fuente, y conduce a una página indexada con el contexto completo.

---

## 10. Catalogar sitios, bases y recursos existentes

### Objetivo

Hacer encontrables los buenos recursos que ya producen organismos, gobiernos, universidades y comunidades, sin duplicarlos ni atribuirlos a RRUU.

### Entregables

- ficha de recurso con responsable, URL, cobertura, temas, formato, licencia y última comprobación;
- relaciones entre recursos, organizaciones e iniciativas;
- primera colección de al menos diez recursos oficiales usados en la investigación inicial;
- filtros por país, tema y tipo;
- mecanismo para reportar enlaces rotos o sugerir recursos.

### Aceptación

Cada ficha explica en lenguaje práctico para qué sirve el recurso y quién lo mantiene. Un enlace roto o desactualizado se identifica sin borrar su valor histórico.
