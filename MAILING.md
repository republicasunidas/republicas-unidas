# Lista de correo de Repúblicas Unidas

Este documento define el sistema mínimo de suscripción. Su objetivo es permitir que una persona reciba novedades sin confundir una suscripción informativa con membresía, derecho a voto o afiliación política.

## Estado operativo

Configurado el 20 de agosto de 2026:

- cuenta institucional de MailerLite: `Republicas Unidas`;
- dominio remitente `republicasunidas.org` autenticado mediante DKIM, SPF y verificación de dominio;
- grupo `Comunidad · Sitio web`;
- formulario incrustado `Lista fundadora · Sitio web`, identificador público `46JKiX`;
- consentimiento explícito, reCAPTCHA y doble confirmación activos;
- envío inicial a `/suscripcion/pendiente/` y destino posterior a la confirmación en `/suscripcion/confirmada/`;
- token de API guardado cifrado fuera del repositorio.

La automatización de bienvenida y una prueba completa de alta, confirmación, bienvenida y baja siguen siendo los próximos controles operativos.

## Alcance inicial

- Proveedor operativo: MailerLite.
- Grupo principal: `Comunidad · Sitio web`.
- Dato obligatorio: correo electrónico.
- Consentimiento: casilla explícita y doble confirmación por correo.
- Frecuencia prometida: máximo dos correos al mes, salvo una convocatoria excepcional claramente identificada.
- Estado de una persona: no confirmada, activa, dada de baja, rebotada o eliminada.
- Remitente público: `Repúblicas Unidas <hola@republicasunidas.org>`.
- Respuesta y solicitudes de privacidad: `hola@republicasunidas.org`.

La lista no se compra, alquila, intercambia ni completa con direcciones obtenidas de otras fuentes. Tampoco se importan clientes, contactos o seguidores sin una autorización específica para este proyecto.

## Flujo público

1. La persona escribe su correo y acepta recibir novedades.
2. El formulario aplica protección contra bots y registra la solicitud como no confirmada.
3. MailerLite envía un enlace de confirmación.
4. Solo después de usar ese enlace la dirección queda activa.
5. La persona recibe una bienvenida breve con el propósito de la lista y formas de participar.
6. Cada mensaje incluye un enlace de baja administrado por el proveedor.

Las rutas públicas relacionadas son:

- `/privacidad/`: tratamiento de datos explicado en lenguaje claro.
- `/suscripcion/pendiente/`: instrucción para confirmar el correo.
- `/suscripcion/confirmada/`: confirmación y próximos pasos.

## Configuración mínima en MailerLite

1. Crear la cuenta institucional con `hola@republicasunidas.org`.
2. Autenticar `republicasunidas.org` mediante los registros DNS que indique el proveedor. No crear un segundo registro SPF: combinar los mecanismos cuando sea necesario.
3. Crear el grupo `Comunidad · Sitio web`.
4. Crear un formulario incrustado con:
   - correo obligatorio;
   - casilla de consentimiento obligatoria;
   - enlace a `https://republicasunidas.org/privacidad/`;
   - doble confirmación activa;
   - reCAPTCHA activo;
   - redirección inicial a `https://republicasunidas.org/suscripcion/pendiente/`;
   - redirección posterior a la confirmación a `https://republicasunidas.org/suscripcion/confirmada/`.
5. Crear una automatización activada al entrar al grupo y enviar un único correo de bienvenida.
6. Enviar una prueba, confirmar la dirección, recibir la bienvenida y usar el enlace de baja antes de anunciar la lista.

## Texto base

### Confirmación

**Asunto:** Confirma tu correo para Repúblicas Unidas

Pediste recibir novedades de Repúblicas Unidas. Confirma tu dirección para completar la suscripción. Si no fuiste tú, puedes ignorar este mensaje.

### Bienvenida

**Asunto:** Bienvenido al próximo paso

Gracias por confirmar tu correo. Repúblicas Unidas es una iniciativa ciudadana abierta que convierte la integración de Hispanoamérica en proyectos concretos y verificables.

Puedes empezar de tres maneras:

1. conocer el rumbo en `https://republicasunidas.org/docs/`;
2. seguir los proyectos en `https://github.com/republicasunidas/republicas-unidas/issues`;
3. responder a este correo con una pregunta, una propuesta o una forma de ayudar.

Recibirás como máximo dos correos al mes. Puedes darte de baja desde cualquier mensaje.

## Acceso y continuidad

- Usar la cuenta institucional, no una cuenta personal, como propietaria.
- Mantener al menos dos administradores cuando exista un segundo responsable de confianza.
- Guardar recuperación y segundo factor en el gestor de secretos de la organización.
- No publicar tokens, exportaciones ni direcciones de suscriptores en GitHub.
- Exportar trimestralmente una copia CSV cifrada mientras el proveedor sea externo.
- Registrar en este repositorio solo decisiones, configuración no secreta, métricas agregadas y cambios de proceso.

## Migración futura

MailerLite es una dependencia operativa, no el dueño conceptual de la comunidad. Cuando el volumen, el costo o la gobernanza lo justifiquen, la lista puede migrarse a otra plataforma —incluido software abierto como listmonk— mediante exportación CSV, conservando por separado el estado de baja para evitar reactivar direcciones sin permiso.

## Métricas públicas

Se pueden publicar cifras agregadas como solicitudes, confirmaciones, bajas y tasa de confirmación. Nunca se publican correos, identificadores individuales, aperturas por persona ni perfiles de comportamiento.
