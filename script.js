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
    stage: "abrir",
    status: "En revisión",
    summary: "Un asistente regional que responde con fuentes oficiales, lenguaje sencillo y límites claramente explicados.",
    problem: "La información sobre acuerdos, trámites y derechos está distribuida entre numerosos portales y cambia sin que el ciudadano pueda seguirla fácilmente.",
    milestone: "Construir un prototipo limitado a un tema, con respuestas citadas, fecha de verificación y una ruta de corrección humana.",
    update: "La idea permanece abierta mientras definimos el primer caso de uso y las condiciones de seguridad, privacidad y mantenimiento.",
    contribute: "Buscamos personas con experiencia en IA, diseño de servicios, investigación jurídica, documentación y evaluación de fuentes."
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

let supportedProjects = new Set();
try {
  supportedProjects = new Set(JSON.parse(localStorage.getItem("ru-supported-projects") || "[]"));
} catch {
  supportedProjects = new Set();
}

const supportButtons = () => document.querySelectorAll("[data-support]");
const refreshSupportButtons = () => {
  supportButtons().forEach((button) => {
    const supported = supportedProjects.has(button.dataset.support);
    button.classList.toggle("is-supported", supported);
    button.textContent = supported ? "Prioridad apoyada" : "Apoyar prioridad";
    button.setAttribute("aria-pressed", String(supported));
  });
};

const toggleSupport = (projectId) => {
  if (supportedProjects.has(projectId)) supportedProjects.delete(projectId);
  else supportedProjects.add(projectId);
  try {
    localStorage.setItem("ru-supported-projects", JSON.stringify([...supportedProjects]));
  } catch {
    // The prototype remains usable when local storage is unavailable.
  }
  refreshSupportButtons();
};

supportButtons().forEach((button) => button.addEventListener("click", () => toggleSupport(button.dataset.support)));
refreshSupportButtons();

const drawer = document.querySelector("[data-project-drawer]");
const drawerSupport = document.querySelector("[data-drawer-support]");
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
  drawerSupport.dataset.support = projectId;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  refreshSupportButtons();
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
drawerSupport.addEventListener("click", () => toggleSupport(drawerSupport.dataset.support));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && drawer.classList.contains("is-open")) closeProject();
});

const stageContent = {
  organizar: {
    label: "Etapa 01 · Fundación",
    title: "Crear la comunidad y sus reglas democráticas.",
    copy: "Publicaremos los principios, formaremos un equipo multinacional y abriremos la plataforma de participación interna.",
    gate: "Una comunidad inicial diversa toma su primera decisión abierta y verificable.",
    projects: ["democracy"]
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

const setModalState = (modal, open) => {
  modal.classList.toggle("is-open", open);
  modal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", open);
  if (open) modal.querySelector(".drawer-close").focus();
};

const proposalModal = document.querySelector("[data-proposal-modal]");
const proposalForm = document.querySelector("#proposal-form");
const proposalResult = document.querySelector("[data-proposal-result]");
const githubProposal = document.querySelector("[data-github-proposal]");
let proposalMarkdown = "";

document.querySelectorAll("[data-open-proposal]").forEach((button) => {
  button.addEventListener("click", () => setModalState(proposalModal, true));
});
document.querySelectorAll("[data-close-proposal]").forEach((button) => {
  button.addEventListener("click", () => setModalState(proposalModal, false));
});

proposalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(proposalForm);
  const draft = {
    name: String(formData.get("name") || "").trim(),
    problem: String(formData.get("problem") || "").trim(),
    country: String(formData.get("country") || "").trim()
  };
  if (!draft.name || !draft.problem || !draft.country) return;
  proposalMarkdown = `# ${draft.name}\n\n## Problema regional\n${draft.problem}\n\n## Lugar observado\n${draft.country}\n\n## Evidencia o condición de éxito\n[Completar antes de revisión]\n`;
  try {
    localStorage.setItem("rruu-proposal-draft", JSON.stringify(draft));
  } catch {
    // The proposal can still be copied if browser storage is unavailable.
  }
  githubProposal.href = `https://github.com/miguel033097/republicas-unidas/issues/new?template=project-proposal.yml&title=${encodeURIComponent(`Propuesta: ${draft.name}`)}`;
  proposalForm.hidden = true;
  proposalResult.classList.add("is-visible");
  proposalResult.querySelector("[data-copy-proposal]").focus();
});

document.querySelector("[data-copy-proposal]").addEventListener("click", async (event) => {
  try {
    await navigator.clipboard.writeText(proposalMarkdown);
    event.currentTarget.textContent = "Propuesta copiada";
  } catch {
    event.currentTarget.textContent = "No se pudo copiar";
  }
});

const voteModal = document.querySelector("[data-vote-modal]");
const voteForm = document.querySelector("#vote-form");
const voteResult = document.querySelector("[data-vote-result]");

const showSavedVote = () => {
  let savedVote = "";
  try {
    savedVote = localStorage.getItem("rruu-vote-open-data") || "";
  } catch {
    savedVote = "";
  }
  voteForm.hidden = Boolean(savedVote);
  voteResult.classList.toggle("is-visible", Boolean(savedVote));
  if (savedVote) {
    const input = voteForm.querySelector(`[value="${savedVote}"]`);
    if (input) input.checked = true;
  }
};

document.querySelectorAll("[data-vote-project]").forEach((button) => {
  button.addEventListener("click", () => {
    showSavedVote();
    setModalState(voteModal, true);
  });
});
document.querySelectorAll("[data-close-vote]").forEach((button) => {
  button.addEventListener("click", () => setModalState(voteModal, false));
});

voteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selected = new FormData(voteForm).get("vote");
  if (!selected) return;
  try {
    localStorage.setItem("rruu-vote-open-data", selected);
  } catch {
    // The demonstration remains understandable without browser storage.
  }
  voteForm.hidden = true;
  voteResult.classList.add("is-visible");
  voteResult.querySelector("[data-change-vote]").focus();
});

document.querySelector("[data-change-vote]").addEventListener("click", () => {
  voteResult.classList.remove("is-visible");
  voteForm.hidden = false;
  const checked = voteForm.querySelector("input:checked");
  if (checked) checked.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (proposalModal.classList.contains("is-open")) setModalState(proposalModal, false);
  if (voteModal.classList.contains("is-open")) setModalState(voteModal, false);
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
