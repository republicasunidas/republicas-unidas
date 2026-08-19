# Repúblicas Unidas (RRUU) — prototipo público

Prototipo estático y responsive para explorar la primera identidad y narrativa pública de Repúblicas Unidas.

**Sitio público:** https://republicasunidas.org/

**Contacto:** [hola@republicasunidas.org](mailto:hola@republicasunidas.org)

**Instagram:** [@republicasunidas](https://www.instagram.com/republicasunidas)

## Abrir

Abre `index.html` directamente en un navegador o sirve esta carpeta localmente:

```bash
python3 -m http.server 8080 --directory .
```

Después visita `http://localhost:8080`.

## Qué incluye

- Hero y propuesta de valor.
- Primera propuesta de logo y bandera.
- Registro filtrable de proyectos con fichas, actualizaciones, propuestas y votaciones de demostración.
- Centro de documentación buscable en `/docs/` con propósito, gobernanza, procesos y fuentes públicas.
- Método de trabajo.
- Primer laboratorio abierto de integración práctica.
- Hoja de ruta interactiva.
- Repúblicas Abiertas y Democracia Informada.
- Principios y visión federal de largo plazo.
- Flujo de participación en dos pasos.
- Diseño responsive y preferencias de movimiento reducido.

El formulario de inscripción es únicamente demostrativo: no transmite ni almacena información.
Las propuestas y los expedientes de proyecto sí funcionan mediante GitHub Issues. Las reacciones públicas son señales provisionales y no constituyen todavía votos vinculantes.

## Evolución sugerida para el registro de proyectos

1. Mantener cada proyecto como Markdown/YAML en este repositorio público.
2. Utilizar Issues y Discussions para propuestas, evidencia, deliberación, responsables y actualizaciones.
3. Presentar esa información en republicasunidas.org mediante una interfaz accesible para personas no técnicas.
4. Incorporar identidad verificada y votaciones vinculantes solamente cuando existan reglas aprobadas, participantes recurrentes y capacidad de moderación.
5. Evaluar [Decidim](https://decidim.org/) mediante los criterios públicos del [Issue #3](https://github.com/republicasunidas/republicas-unidas/issues/3); no usarlo como sustituto del registro operativo.

## Modelo de participación

Cada proyecto atraviesa seis estados públicos:

`Proponer → Revisar → Deliberar → Votar → Ejecutar → Verificar`

- **Apoyar** ordena prioridades; no aprueba un proyecto.
- **Votar** acepta, devuelve o rechaza una propuesta suficientemente definida.
- **Ejecutar** exige responsable, próximo hito y actualizaciones públicas.
- **Verificar** compara el resultado con la condición de éxito aprobada.

La hoja de ruta no es una lista separada: cada proyecto aceptado declara la etapa estratégica a la que contribuye. Las etapas futuras permanecen abiertas hasta que la evidencia de la etapa anterior justifique proyectos nuevos.

El número del Issue es el identificador público de cada expediente. Una iniciativa entra como proyecto en el tablero únicamente cuando es importante o continua, necesita varios hitos o participantes, o debe figurar de manera visible en la hoja de ruta. El proceso completo se documenta en [Cómo contribuir](CONTRIBUTING.md).

## Participar ahora

- [Proponer un proyecto](https://github.com/republicasunidas/republicas-unidas/issues/new?template=project-proposal.yml)
- [Ver los expedientes abiertos](https://github.com/republicasunidas/republicas-unidas/issues)
- [Abrir la hoja de ruta en GitHub Projects](https://github.com/orgs/republicasunidas/projects/2)
- [Abrir el centro de documentación](docs/)
- [Leer la gobernanza provisional](GOVERNANCE.md)

## Canales y publicaciones

- [Registro y reglas de los canales oficiales](SOCIALS.md)
- [Sistema editorial y archivo de publicaciones](EDITORIAL.md)
- [Guía fuente de identidad](BRAND.md)
- [Página pública de identidad](https://republicasunidas.org/identidad/)
- [Contexto de marca para GPT](identidad/contexto-marca.md)
- [Tablero público de contenido](https://github.com/orgs/republicasunidas/projects/3)
- [Expediente del sistema editorial · Issue #12](https://github.com/republicasunidas/republicas-unidas/issues/12)

## Código abierto

El código y su documentación se publican bajo la [licencia MIT](LICENSE). Las decisiones, propuestas y cambios permanecen visibles para que otras comunidades puedan auditar, reutilizar y mejorar el trabajo.

## Dirección de identidad

**Símbolo provisional:** emblema abierto de dieciocho formas.

- Dieciocho formas: las 18 repúblicas soberanas de Hispanoamérica.
- Centro abierto: espacio compartido y ausencia de un centro absoluto.
- Violeta `#552878`: esperanza, dignidad e imaginación política.
- Oro `#F3C34F`: energía, libertad y futuro.
- Marfil `#FBF7EF`: apertura y humanidad.
- Tinta `#1C1722`: claridad institucional.

La bandera propuesta utiliza un campo violeta completo y el emblema en oro. La identidad pública se explica por su propia geometría, sin depender de la historia de otro símbolo nacional.

## Generación del símbolo

El emblema bitmap fue generado con la herramienta integrada de ImageGen y luego preparado como PNG con transparencia para el prototipo.

Prompt final:

> Use case: logo-brand. Asset type: provisional civic movement symbol for web header and flag exploration. Create one original, vector-friendly emblem called “Sol de las Repúblicas” for Repúblicas Unidas de Hispanoamérica. It should be a clean geometric sun made of exactly 18 equal rays representing 18 sovereign Spanish-speaking American republics. The center is an open circular negative space, expressing a shared civic space rather than a central ruler. Subtly suggest separate paths meeting in a common circle. It may be inspired by the broader American symbolism of sunrise, independence, dignity, and hope, but it must not reproduce the Argentine or Uruguayan Sun of May. Flat 2D modern civic identity, precise geometric construction, bold silhouette, screen-printable and flag-friendly. One centered emblem only, generous padding, no wordmark. Deep democratic violet #552878 and warm solar gold #F3C34F only. Exactly 18 clearly countable rays; open circular center; crisp edges; recognizable at 24px. No text, letters, face, stars, map, shield, laurel, eagle, coat of arms, ribbon, flags, watermark, mockup, gradients, 3D or shadow. Avoid the Argentine 32-ray Sun of May, alternating flame/straight rays, the Uruguayan national sun, religious halos, royal crests and crypto aesthetics.

## Before public launch

1. Test the name and symbol with participants from several countries.
2. Conduct trademark and similarity searches.
3. Redraw the selected mark as a precise professional vector.
4. Audit accessibility and small-size reproduction.
5. Connect the form to a consent-based mailing system.
6. Add legal pages, privacy policy and transparent founder/funding disclosures.
