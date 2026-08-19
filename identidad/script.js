const contextContainer = document.querySelector("[data-brand-context]");
const copyButton = document.querySelector("[data-copy-context]");
const copyStatus = document.querySelector("[data-copy-status]");

let brandContext = "";

fetch("contexto-marca.md")
  .then((response) => {
    if (!response.ok) throw new Error("No se pudo cargar el contexto.");
    return response.text();
  })
  .then((text) => {
    brandContext = text;
    contextContainer.textContent = text;
  })
  .catch(() => {
    contextContainer.textContent = "Abre o descarga contexto-marca.md para utilizar la guía con una herramienta generativa.";
  });

copyButton.addEventListener("click", async () => {
  if (!brandContext) {
    copyStatus.textContent = "El contexto todavía no está disponible. Puedes descargar el archivo.";
    return;
  }

  try {
    await navigator.clipboard.writeText(brandContext);
    copyStatus.textContent = "Contexto copiado. Añade ahora el objetivo, audiencia, formato, fuentes y acción de tu pieza.";
  } catch {
    copyStatus.textContent = "No pudimos copiarlo automáticamente. Selecciona el texto o descarga el archivo.";
  }
});
