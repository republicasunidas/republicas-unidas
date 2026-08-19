const explorer = document.querySelector("[data-friction-explorer]");

if (explorer) {
  const buttons = [...explorer.querySelectorAll("[data-friction]")];
  const cards = [...explorer.querySelectorAll("[data-friction-card]")];
  const status = explorer.querySelector("[data-friction-status]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.friction;

      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      cards.forEach((card) => {
        card.classList.toggle("is-selected", card.dataset.frictionCard === selected);
      });

      status.textContent = `Seleccionaste: ${button.textContent.replace(/^\d+/, "").trim()}.`;
    });
  });
}
