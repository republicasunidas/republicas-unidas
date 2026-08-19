const searchInput = document.querySelector("#docs-search");
const sections = [...document.querySelectorAll("[data-doc-section]")];
const navLinks = [...document.querySelectorAll(".docs-nav a")];
const searchStatus = document.querySelector("[data-search-status]");
const noResults = document.querySelector("[data-no-results]");
const navToggle = document.querySelector(".docs-nav-toggle");
const docsNav = document.querySelector(".docs-nav");

const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const filterDocumentation = () => {
  const query = normalize(searchInput.value);
  let matches = 0;

  sections.forEach((section) => {
    const visible = !query || normalize(section.textContent).includes(query);
    section.hidden = !visible;
    if (visible) matches += 1;
  });

  navLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    link.classList.toggle("is-hidden", Boolean(target?.hidden));
  });

  noResults.hidden = matches > 0;
  searchStatus.textContent = query ? `${matches} ${matches === 1 ? "sección encontrada" : "secciones encontradas"}` : "";
};

searchInput.addEventListener("input", filterDocumentation);

navToggle.addEventListener("click", () => {
  const open = docsNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    docsNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting && !entry.target.hidden)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`));
  },
  { rootMargin: "-20% 0px -65%", threshold: [0, .2, .5] }
);

sections.forEach((section) => sectionObserver.observe(section));
