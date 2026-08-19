const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

const setHeaderState = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const projects = {
  existing: {
    code: "RRUU-001",
    category: "Integración práctica",
    title: "Lo que ya nos une",
    issue: "https://github.com/republicasunidas/republicas-unidas/issues/1",
    stage: "probar",
    status: "En ejecución",
    summary: "Un inventario vivo de acuerdos, derechos y herramientas que ya conectan a Hispanoamérica.",
    problem: "Muchas soluciones regionales existen en documentos institucionales, pero la mayoría de las personas no sabe que existen, quién puede utilizarlas o cómo hacerlo.",
    milestone: "Publicar la primera ficha verificable con fuente oficial, instrucciones claras y un mecanismo para reportar si funcionó en la práctica.",
    update: "Estamos definiendo el formato común de las fichas y los criterios para verificar cada fuente.",
    contribute: "Puedes aportar un acuerdo que ya utilizaste, documentar un obstáculo o revisar que una guía coincida con su fuente oficial."
  },
  "open-data": {
    code: "RRUU-002",
    category: "Datos públicos",
    title: "Repúblicas Abiertas",
    issue: "https://github.com/republicasunidas/republicas-unidas/issues/2",
    stage: "abrir",
    status: "Votación abierta",
    summary: "Datos gubernamentales convertidos en herramientas comprensibles para la vigilancia y participación ciudadana.",
    problem: "Publicar archivos no basta: los datos suelen estar fragmentados, desactualizados o ser difíciles de interpretar sin conocimientos técnicos.",
    milestone: "Elegir un primer conjunto de datos, documentar su calidad y construir una visualización pública con metodología abierta.",
    update: "La etapa de exploración comienza con contratación pública, proyectos regionales y datos que permitan verificar resultados.",
    contribute: "Buscamos analistas, periodistas, desarrolladores y ciudadanos que conozcan portales públicos o problemas que merezcan seguimiento."
  },
  democracy: {
    code: "RRUU-003",
    category: "Democracia",
    title: "Democracia Informada",
    issue: "https://github.com/republicasunidas/republicas-unidas/issues/3",
    stage: "organizar",
    status: "En ejecución",
    summary: "Un sistema interno para proponer, aprender, deliberar, decidir y supervisar colectivamente.",
    problem: "Una votación rápida puede medir preferencias sin producir comprensión, deliberación ni una responsabilidad clara por la ejecución.",
    milestone: "Aprobar una regla provisional de decisiones y completar una primera consulta interna pequeña, reversible y documentada.",
    update: "Estamos comparando un registro sencillo basado en GitHub con plataformas como Decidim y CONSUL Democracy.",
    contribute: "Puedes revisar las reglas, diseñar materiales neutrales, facilitar conversaciones o evaluar herramientas de participación."
  },
  guide: {
    code: "RRUU-004",
    category: "Tecnología cívica",
    title: "Guía RRUU",
    issue: "https://github.com/republicasunidas/republicas-unidas/issues/4",
    stage: "abrir",
    status: "En revisión",
    summary: "Un asistente regional que responde con fuentes oficiales, lenguaje sencillo y límites claramente explicados.",
    problem: "La información sobre acuerdos, trámites y derechos está distribuida entre numerosos portales y cambia sin que el ciudadano pueda seguirla fácilmente.",
    milestone: "Construir un prototipo limitado a un tema, con respuestas citadas, fecha de verificación y una ruta de corrección humana.",
    update: "La idea permanece abierta mientras definimos el primer caso de uso y las condiciones de seguridad, privacidad y mantenimiento.",
    contribute: "Buscamos personas con experiencia en IA, diseño de servicios, investigación jurídica, documentación y evaluación de fuentes."
  },
  landing: {
    code: "RRUU-005",
    category: "Infraestructura abierta",
    title: "Landing pública",
    issue: "https://github.com/republicasunidas/republicas-unidas/issues/5",
    stage: "organizar",
    status: "En ejecución",
    summary: "El punto de entrada público para entender RRUU, seguir sus proyectos y participar en el trabajo abierto.",
    problem: "Sin un lugar común, la visión puede parecer abstracta y el trabajo queda disperso entre documentos, conversaciones y plataformas.",
    milestone: "Publicar el prototipo en republicasunidas.org y conectar la inscripción con un sistema de consentimiento verificable.",
    update: "El registro público ya utiliza GitHub Issues y la hoja de ruta muestra los proyectos vinculados a cada etapa.",
    contribute: "Puedes revisar claridad, accesibilidad, confianza y experiencia móvil, o proponer cambios de código mediante un pull request."
  }
};

const projectFilters = document.querySelectorAll(".project-filter");
const registryCards = document.querySelectorAll(".registry-card");

projectFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    projectFilters.forEach((item) => item.classList.remove("is-active"));
    filter.classList.add("is-active");
    const category = filter.dataset.filter;
    registryCards.forEach((card) => {
      card.classList.toggle("is-hidden", category !== "all" && card.dataset.category !== category);
    });
  });
});

const drawer = document.querySelector("[data-project-drawer]");
const drawerGithub = document.querySelector("[data-drawer-github]");
let lastProjectTrigger = null;

const openProject = (projectId, trigger) => {
  const project = projects[projectId];
  if (!project) return;
  lastProjectTrigger = trigger;
  drawer.querySelector("[data-drawer-code]").textContent = project.code;
  drawer.querySelector("[data-drawer-category]").textContent = project.category;
  drawer.querySelector("[data-drawer-title]").textContent = project.title;
  drawer.querySelector("[data-drawer-summary]").textContent = project.summary;
  drawer.querySelector("[data-drawer-problem]").textContent = project.problem;
  drawer.querySelector("[data-drawer-milestone]").textContent = project.milestone;
  drawer.querySelector("[data-drawer-update]").textContent = project.update;
  drawer.querySelector("[data-drawer-contribute]").textContent = project.contribute;
  drawerGithub.href = project.issue;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  drawer.querySelector(".drawer-close").focus();
};

const closeProject = () => {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  if (lastProjectTrigger) lastProjectTrigger.focus();
};

document.querySelectorAll(".project-open").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project, button));
});
document.querySelectorAll("[data-close-project]").forEach((button) => button.addEventListener("click", closeProject));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && drawer.classList.contains("is-open")) closeProject();
});

const stageContent = {
  organizar: {
    label: "Etapa 01 · Fundación",
    title: "Crear la comunidad y sus reglas democráticas.",
    copy: "Publicaremos los principios, formaremos un equipo multinacional y abriremos la plataforma de participación interna.",
    gate: "Una comunidad inicial diversa toma su primera decisión abierta y verificable.",
    projects: ["democracy", "landing"]
  },
  probar: {
    label: "Etapa 02 · Integración práctica",
    title: "Convertir acuerdos existentes en experiencias que funcionen.",
    copy: "Mapearemos soluciones regionales, publicaremos guías verificables y probaremos su uso con ciudadanos, comunidades y empresas.",
    gate: "Las personas completan procesos que antes no conocían o no podían completar.",
    projects: ["existing"]
  },
  abrir: {
    label: "Etapa 03 · Infraestructura cívica",
    title: "Convertir información pública en herramientas ciudadanas.",
    copy: "Publicaremos el primer observatorio de datos, herramientas explicadas mediante IA y una decisión interna con Democracia Informada.",
    gate: "La información produce verificaciones, correcciones o mejoras reales.",
    projects: ["open-data", "guide"]
  },
  conectar: {
    label: "Etapa 04 · Expansión",
    title: "Extender las soluciones a más repúblicas.",
    copy: "Formaremos equipos locales, nuevos corredores y propuestas que puedan llegar a instituciones regionales y parlamentos nacionales.",
    gate: "Una institución adopta o amplía una solución probada por la red.",
    projects: []
  },
  decidir: {
    label: "Etapa 05 · Horizonte democrático",
    title: "Decidir libremente cuánto queremos compartir.",
    copy: "Los ciudadanos podrán evaluar instituciones comunes y, eventualmente, una comunidad federal limitada por derechos fundamentales.",
    gate: "Cualquier unión es voluntaria, constitucional y ratificada por los ciudadanos de cada república.",
    projects: []
  }
};

const roadmapTabs = document.querySelectorAll(".roadmap-tab");
const stageLabel = document.querySelector("[data-stage-label]");
const stageTitle = document.querySelector("[data-stage-title]");
const stageCopy = document.querySelector("[data-stage-copy]");
const stageGate = document.querySelector("[data-stage-gate]");
const stageProjects = document.querySelector("[data-stage-projects]");

const renderStageProjects = (projectIds) => {
  stageProjects.innerHTML = "";
  if (!projectIds.length) {
    const empty = document.createElement("p");
    empty.className = "stage-projects-empty";
    empty.textContent = "Todavía no asignamos proyectos: esta etapa se abrirá cuando la evidencia anterior lo justifique.";
    stageProjects.appendChild(empty);
    return;
  }
  projectIds.forEach((projectId) => {
    const project = projects[projectId];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stage-project-chip";
    button.innerHTML = `<span>${project.code}</span><strong>${project.title}</strong><small>${project.status}</small>`;
    button.addEventListener("click", () => openProject(projectId, button));
    stageProjects.appendChild(button);
  });
};

renderStageProjects(stageContent.organizar.projects);

roadmapTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const stage = stageContent[tab.dataset.stage];
    roadmapTabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    stageLabel.textContent = stage.label;
    stageTitle.textContent = stage.title;
    stageCopy.textContent = stage.copy;
    stageGate.textContent = stage.gate;
    renderStageProjects(stage.projects);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const form = document.querySelector("#signup-form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const firstStep = document.querySelector('[data-form-step="1"]');
const secondStep = document.querySelector('[data-form-step="2"]');
const successStep = document.querySelector('[data-form-step="success"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!email.checkValidity() || !country.value) {
    email.reportValidity();
    if (!country.value) country.focus();
    return;
  }
  firstStep.classList.remove("is-active");
  secondStep.classList.add("is-active");
});

document.querySelector("[data-finish-signup]").addEventListener("click", () => {
  secondStep.classList.remove("is-active");
  successStep.classList.add("is-active");
});

document.querySelector(".reset-form").addEventListener("click", () => {
  form.reset();
  successStep.classList.remove("is-active");
  firstStep.classList.add("is-active");
  email.focus();
});
