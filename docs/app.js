const levels = [
  {
    id: 'sobre-mi', kicker: '01 / INTRO · PLAYER PROFILE', title: 'Sobre mí',
    intro: 'Una trayectoria que cruza ciencia, ingeniería y ganas de construir cosas nuevas.',
    content: `<div class="intro-grid"><div class="quote-block">Ciencia, ingeniería y proyectos reales en una misma partida.</div><div><div class="mini-stat"><span>CAMPO BASE</span><strong>Física e ingeniería aeroespacial</strong></div><div class="mini-stat"><span>EXPLORANDO</span><strong>Modelización, materiales y producto</strong></div><div class="mini-stat"><span>FORMA DE TRABAJAR</span><strong>Investigar · programar · construir</strong></div></div></div><p class="content-note">Perfil elaborado a partir del CV de noviembre de 2025.</p>`
  },
  {
    id: 'formacion', kicker: '02 / ORIGEN · SKILL TREE', title: 'Formación',
    intro: 'Un recorrido visual desde los fundamentos de la ingeniería hasta la simulación y la investigación avanzada.',
    content: `<div class="skill-map"><article class="skill-stage"><div class="skill-orbit"><span>01</span></div><span class="timeline-meta">2020–2024 · BARCELONA</span><h3>Ingeniería Aeroespacial</h3><div class="organization">UPC · ESEIAAT · CFIS</div><p>Mecánica, dinámica de fluidos, ecuaciones diferenciales y modelización aplicada.</p><div class="tag-row"><span class="tag">FLUIDOS</span><span class="tag">MECÁNICA</span></div></article><article class="skill-stage"><div class="skill-orbit"><span>02</span></div><span class="timeline-meta">2021–2024 · BARCELONA</span><h3>Ingeniería Física</h3><div class="organization">UPC · ETSETB · CFIS</div><p>Electromagnetismo, física cuántica, estado sólido y matemáticas avanzadas.</p><div class="tag-row"><span class="tag">FÍSICA</span><span class="tag">MATEMÁTICAS</span></div></article><article class="skill-stage"><div class="skill-orbit"><span>03</span></div><span class="timeline-meta">DESDE 2025 · LONDRES</span><h3>Advanced Mechanical Engineering</h3><div class="organization">MSc · Imperial College London</div><p>Dinámica de fluidos computacional, modelización estocástica, optimización y métodos numéricos.</p><div class="tag-row"><span class="tag">CFD</span><span class="tag">SIMULACIÓN</span></div></article></div><p class="content-note">Los dos grados se cursaron simultáneamente dentro del programa CFIS de la UPC.</p>`
  },
  {
    id: 'reconocimientos', kicker: '03 / LOGROS · ACHIEVEMENTS', title: 'Reconocimientos',
    intro: 'Algunos hitos que han acompañado el camino.',
    content: `<div class="award-grid"><article class="award-card"><div class="award-icon">✳</div><span class="entry-label">2025</span><h3>Becario de la Fundación «la Caixa»</h3><p>Distinción incluida en el CV para continuar la formación de posgrado.</p></article><article class="award-card"><div class="award-icon">✦</div><span class="entry-label">2020</span><h3>Finalista · mejor trabajo de bachillerato de Cataluña</h3><p>Reconocimiento académico al trabajo de investigación de bachillerato.</p></article><article class="award-card"><div class="award-icon">◆</div><span class="entry-label">2025</span><h3>Oferta de doctorado de la NASA</h3><p>Oferta en el ámbito de la física de plasmas, según el CV.</p></article></div>`
  },
  {
    id: 'experiencia', kicker: '04 / MISIONES · FIELD LOG', title: 'Experiencia',
    intro: 'Investigación, industria y emprendimiento: distintas formas de aplicar la misma curiosidad.',
    content: `<div class="timeline"><article class="timeline-item"><span class="timeline-meta">DESDE SEP 2025 · LONDRES</span><h3>Investigación de máster · materiales aeroespaciales</h3><div class="organization">Rolls-Royce × Imperial College London</div><p>Desarrollo de modelos estocásticos y numéricos para estudiar coeficientes de fricción dependientes de la temperatura en nuevas aleaciones.</p><div class="tag-row"><span class="tag">MATERIALES</span><span class="tag">INFERENCIA ESTADÍSTICA</span></div></article><article class="timeline-item"><span class="timeline-meta">AGO 2024 – JUL 2025 · WASHINGTON, D. C.</span><h3>Investigador · física de plasmas</h3><div class="organization">NASA Goddard Space Flight Center · Heliophysics Division</div><p>Modelos de magnetohidrodinámica computacional para estructuras magnéticas solares y pipelines de datos en Python para predicción del clima espacial.</p><div class="tag-row"><span class="tag">MHD</span><span class="tag">PYTHON</span><span class="tag">CLIMA ESPACIAL</span></div></article><article class="timeline-item"><span class="timeline-meta">DESDE MAR 2024 · BARCELONA</span><h3>Fundador y CEO</h3><div class="organization">Attendirent</div><p>Creación de una plataforma de alquiler con React Native y Supabase, análisis en tiempo real e integraciones de seguros.</p><div class="tag-row"><span class="tag">PRODUCTO</span><span class="tag">SOFTWARE</span><span class="tag">EMPRENDIMIENTO</span></div></article></div><p class="content-note">Las fechas de inicio proceden del CV actualizado en noviembre de 2025; la situación actual de los roles está pendiente de revisión.</p>`
  },
  {
    id: 'proyectos', kicker: '05 / CREACIÓN · BUILT & EXPLORED', title: 'Proyectos',
    intro: 'Trabajo que conecta modelos, software y problemas fuera del aula.',
    content: `<div class="feature-grid"><article class="feature-card"><span class="entry-label">PLATAFORMA DIGITAL</span><h3>Attendirent</h3><p>Marketplace de alquiler construido con React Native y Supabase, con analítica en tiempo real e integración automatizada de seguros.</p><div class="tag-row"><span class="tag">REACT NATIVE</span><span class="tag">SUPABASE</span></div></article><article class="feature-card"><span class="entry-label">INVESTIGACIÓN</span><h3>Modelos de plasma solar</h3><p>Modelización de estructuras magnéticas solares mediante ecuaciones diferenciales y simulación MHD computacional en NASA Goddard.</p><div class="tag-row"><span class="tag">MHD</span><span class="tag">SIMULACIÓN</span></div></article><article class="feature-card"><span class="entry-label">DOCENCIA · 2022–2023</span><h3>Problemas de mecánica de fluidos</h3><p>Coautoría de problemas para un libro de mecánica de fluidos computacional de la UPC, con métodos numéricos y flujos de alta velocidad.</p><div class="tag-row"><span class="tag">MÉTODOS NUMÉRICOS</span><span class="tag">UPC</span></div></article><article class="feature-card"><span class="entry-label">ROBÓTICA · 2016–2019</span><h3>Liga Nacional de Robótica</h3><p>Responsabilidad de hardware y software: algoritmos, programación embebida, control y fusión de sensores.</p><div class="tag-row"><span class="tag">ROBÓTICA</span><span class="tag">CONTROL</span></div></article></div>`
  },
  {
    id: 'reflexiones', kicker: '06 / DIARIO · NEXT UNLOCK', title: 'Reflexiones personales',
    intro: 'Un espacio para escribir con calma sobre lo que aprendo, cuestiono y quiero explorar.',
    content: `<div class="empty-state"><div class="empty-icon">_</div><div><h3>Este nivel está por escribir.</h3><p>Aquí vivirán artículos breves, aprendizajes de proyectos e ideas personales. El espacio ya está preparado para publicar la primera reflexión cuando quieras.</p></div></div><div class="manifesto-line">PRÓXIMAMENTE → UNA IDEA, UN TEMA, UNA NUEVA PARTIDA.</div>`
  }
];

const screen = document.getElementById('screen');
const panel = screen.querySelector('.screen-panel');
const title = document.getElementById('screen-title');
const kicker = document.getElementById('screen-kicker');
const intro = document.getElementById('screen-intro');
const content = document.getElementById('screen-content');
const counter = document.getElementById('screen-counter');
const progress = document.getElementById('screen-progress');
let previousFocus = null;
let currentIndex = -1;

function showLevel(index, updateHash = true) {
  if (index < 0 || index >= levels.length) return;
  if (currentIndex === -1) previousFocus = document.activeElement;
  currentIndex = index;
  const level = levels[index];
  title.textContent = level.title;
  kicker.textContent = level.kicker;
  intro.textContent = level.intro;
  content.innerHTML = level.content;
  counter.textContent = `LEVEL ${String(index + 1).padStart(2, '0')} / 06`;
  progress.innerHTML = levels.map((_, i) => `<i class="${i === index ? 'current' : ''}"></i>`).join('');
  screen.classList.add('active');
  screen.setAttribute('aria-hidden', 'false');
  document.body.classList.add('screen-open');
  screen.querySelector('.screen-scroll').scrollTop = 0;
  if (updateHash) history.replaceState(null, '', `#${level.id}`);
  screen.querySelector('.close-button').focus();
}

function closeLevel(updateHash = true) {
  if (currentIndex === -1) return;
  currentIndex = -1;
  screen.classList.remove('active');
  screen.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('screen-open');
  if (updateHash) history.replaceState(null, '', '#niveles');
  if (previousFocus && previousFocus.isConnected) previousFocus.focus();
}

function syncHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  const index = levels.findIndex(level => level.id === id);
  if (index >= 0) showLevel(index, false);
  else closeLevel(false);
}

document.querySelectorAll('[data-level]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    showLevel(levels.findIndex(level => level.id === link.dataset.level));
  });
});
screen.querySelector('.close-button').addEventListener('click', () => closeLevel());
screen.querySelector('.screen-backdrop').addEventListener('click', () => closeLevel());
document.getElementById('prev-level').addEventListener('click', () => showLevel((currentIndex + levels.length - 1) % levels.length));
document.getElementById('next-level').addEventListener('click', () => showLevel((currentIndex + 1) % levels.length));
document.addEventListener('keydown', event => {
  if (currentIndex === -1) return;
  if (event.key === 'Escape') closeLevel();
  if (event.key === 'ArrowLeft') showLevel((currentIndex + levels.length - 1) % levels.length);
  if (event.key === 'ArrowRight') showLevel((currentIndex + 1) % levels.length);
  if (event.key === 'Tab') {
    const focusable = [...panel.querySelectorAll('button, a[href]')].filter(el => !el.disabled);
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
window.addEventListener('hashchange', syncHash);
syncHash();
