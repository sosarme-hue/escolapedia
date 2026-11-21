// Sección PAU (Prueba de Acceso a la Universidad, antigua selectividad / EBAU / EvAU).
// Genera /pau/ con la información de la prueba 2027, la calculadora de notas y una página por materia
// (formato del examen, temas de 2º de Bachillerato enlazados, consejos, modelo de examen con soluciones y test).
const INFO = require("./pau-info");
const COM = require("./pau-comunidades");
// Modelos adicionales por materia: { "Nombre de la materia": [modelo2, modelo3, …] }
const EXTRA = {};
for (const f of require("fs").readdirSync(__dirname).filter((f) => /^pau-modelos-.*\.js$/.test(f)).sort()) for (const [k, v] of Object.entries(require("./" + f))) (EXTRA[k] = EXTRA[k] || []).push(...v);
const MATERIAS = [...require("./pau-materias-1"), ...require("./pau-materias-2"), ...require("./pau-materias-3"), ...require("./pau-materias-4")];

module.exports = function pau({ ETAPAS, page, write, SITE, famColor, slug, esc }) {
  const bach2 = ETAPAS.find((e) => e.slug === "bachillerato").cursos.find((c) => c.slug === "2-bachillerato");
  const ul = (xs) => `<ul>${xs.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  const ol = (xs) => `<ol>${xs.map((x) => `<li>${x}</li>`).join("")}</ol>`;
  const box = (h, inner, cls = "") => `<div class="box${cls ? " " + cls : ""}"><h3>${h}</h3>${inner}</div>`;
  const sec = (id, h, inner) => `<section${id ? ` id="${id}"` : ""} class="rec-sec"><h2>${h}</h2>${inner}</section>`;
  const tabla = (head, rows, cls = "") => `<div class="tscroll"><table class="rec-t${cls ? " " + cls : ""}"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td>${i === 0 ? `<b>${c}</b>` : c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const faq = (xs) => xs.map(([q, a]) => `<details class="rec-faq"><summary>${q}</summary><div>${a}</div></details>`).join("");
  const R = (d) => "../".repeat(d);

  // Materias de la PAU unidas a su materia de 2º de Bachillerato (temas, color, enlaces).
  for (const M of MATERIAS) {
    M.slug = M.slug || slug(M.nombre);
    M.m = bach2.materias.find((x) => x.nombre === M.nombre) || null;
    M.color = M.m ? famColor(M.m) : "var(--bac)";
  }
  const FASES = {
    acceso: ["Fase de acceso", "#1f4fd1"],
    eleccion: ["Fase de acceso (a elegir)", "#1f4fd1"],
    admision: ["Fase de admisión", "#7b3fc4"],
    ambas: ["Acceso o admisión", "#0f8a7a"],
  };
  const faseTag = (M) => { const [t, c] = FASES[M.fase]; return `<span class="pau-tag" style="--c:${c}">${t}</span>`; };

  const wrap = (depth, crumbs, h1, intro, html) => `<main><div class="wrap rec pau" style="padding-bottom:48px">
  <div class="crumbs"><a href="${R(depth)}">Inicio</a> › ${depth > 1 ? `<a href="${R(depth - 1)}">PAU 2027</a> › ` : ""}${crumbs}</div>
  <div class="page-h"><span class="badge" style="background:var(--bac)">PAU 2027 · Selectividad</span><h1>${h1}</h1>${intro ? `<p>${intro}</p>` : ""}</div>
  ${html}
</div></main>`;
  const pagina = (rel, depth, crumbs, h1, intro, html, title, desc, scripts = "") =>
    write(rel, page({ title: `${title} · ${SITE}`, desc, depth, nav: "pau", body: wrap(depth, crumbs, h1, intro, html), scripts }));

  // Menú común de la sección
  const SUB = [
    ["estructura-y-nota", "Estructura y nota", "Qué exámenes hay, cuánto duran y cómo se calcula la nota."],
    ["fechas-2027", "Fechas 2027", "Calendario de la convocatoria ordinaria y extraordinaria."],
    ["calculadora", "Calculadora de nota", "Tu nota de acceso y de admisión (hasta 14)."],
    ["comunidades", "Por comunidades", "Cómo se llama, quién la organiza y qué cambia en cada comunidad."],
    ["cataluna", "PAU en Cataluña", "Selectivitat: catalán, fechas, preinscripción y ponderaciones."],
    ["notas-de-corte-y-ponderaciones", "Notas de corte y ponderaciones", "Qué son, cómo se usan y cómo elegir materias de admisión."],
    ["plan-de-estudio", "Plan de estudio", "De septiembre a junio, mes a mes y semana a semana."],
    ["consejos", "Consejos y día del examen", "Técnica de examen, descanso, alimentación y nervios."],
    ["preguntas-frecuentes", "Preguntas frecuentes", "Revisión, mejorar nota, FP, adaptaciones y más."],
    ["examenes-oficiales", "Exámenes oficiales", "Dónde están los exámenes reales de años anteriores de tu comunidad."],
  ];
  const subnav = (depth, on) => `<nav class="rec-toc pau-nav" aria-label="Sección PAU"><a href="${R(depth - 1)}"${on === "" ? ' class="on"' : ""}>PAU 2027</a>${SUB.map(([s, t]) => `<a href="${R(depth - 1)}${s}/"${on === s ? ' class="on"' : ""}>${t}</a>`).join("")}<a href="${R(depth - 1)}materias/"${on === "materias" ? ' class="on"' : ""}>Materias y modelos</a></nav>`;

  // Esquema de la prueba (dibujo propio)
  const ESQUEMA = `<svg viewBox="0 0 760 300" class="pau-svg" role="img" aria-label="Esquema de la PAU: fase de acceso con 4 o 5 exámenes y fase de admisión voluntaria con hasta 3 materias">
  <rect x="10" y="10" width="440" height="280" rx="18" fill="none" stroke="#1f4fd1" stroke-width="3"/>
  <text x="30" y="42" font-family="Baloo 2, sans-serif" font-weight="800" font-size="22" fill="#1f4fd1">Fase de acceso (obligatoria)</text>
  ${[["1", "Lengua Castellana y Literatura II"], ["2", "Historia de España o Historia de la Filosofía"], ["3", "Lengua Extranjera II (inglés, francés…)"], ["4", "Materia de modalidad (Matemáticas II, MACS II…)"], ["5", "Lengua cooficial (catalán, gallego, euskera…)"]].map(([n, t], i) => `<g transform="translate(30 ${62 + i * 44})"><rect width="400" height="36" rx="10" fill="${i === 4 ? "#eef2fb" : "#e8eefc"}" stroke="#1f4fd1" stroke-width="1.5" ${i === 4 ? 'stroke-dasharray="6 4"' : ""}/><circle cx="20" cy="18" r="12" fill="#1f4fd1"/><text x="20" y="23" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">${n}</text><text x="42" y="24" font-size="15" fill="#1b2235">${t}</text></g>`).join("")}
  <text x="30" y="282" font-size="13" fill="#5a6580">90 min cada examen · 30 min de descanso como mínimo</text>
  <rect x="470" y="10" width="280" height="190" rx="18" fill="none" stroke="#7b3fc4" stroke-width="3"/>
  <text x="490" y="42" font-family="Baloo 2, sans-serif" font-weight="800" font-size="22" fill="#7b3fc4">Fase de admisión</text>
  <text x="490" y="64" font-size="14" fill="#5a6580">Voluntaria · para subir nota</text>
  ${["Hasta 3 materias de 2º", "+ una 2ª lengua extranjera", "Cuentan si sacas 5 o más", "Ponderan 0,1 o 0,2 cada una"].map((t, i) => `<g transform="translate(490 ${80 + i * 28})"><circle cx="7" cy="-5" r="5" fill="#7b3fc4"/><text x="20" y="0" font-size="15" fill="#1b2235">${t}</text></g>`).join("")}
  <rect x="470" y="214" width="280" height="76" rx="18" fill="#fff6c2" stroke="#d6a400" stroke-width="2"/>
  <text x="610" y="244" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="20" fill="#1b2235">Nota máxima: 14</text>
  <text x="610" y="270" text-anchor="middle" font-size="14" fill="#1b2235">10 de acceso + 2 + 2 de admisión</text>
</svg>`;
  const FORMULA = `<div class="pau-formula" role="note">
  <p><b class="fa">Nota de acceso</b> = 0,6 × media de Bachillerato + 0,4 × nota de la prueba</p>
  <p class="caption">La nota de la prueba es la media de sus 4 o 5 exámenes y tiene que ser 4 o más. La de acceso, 5 o más.</p>
  <p><b class="fb">Nota de admisión</b> = nota de acceso + a × M1 + b × M2</p>
  <p class="caption">M1 y M2: las dos materias aprobadas (5 o más) que más te suben para ese grado. a y b: 0,1 o 0,2.</p>
</div>`;

  // ---------------- portada /pau/ ----------------
  const acc = MATERIAS.filter((M) => M.fase !== "admision"), adm = MATERIAS.filter((M) => M.fase === "admision");
  const matCards = (xs, d) => `<div class="grid rec-cards">${xs.map((M) => `<a class="card" style="--c:${M.color}" href="${R(d - 1)}${M.slug}/"><span class="mono">${M.sigla || M.nombre.split(/\s+/).filter((w) => w.length > 3 || /^[A-ZÁÉÍÓÚ]/.test(w)).slice(0, 2).map((w) => w[0].toUpperCase()).join("")}</span><span><b>${M.nombre}</b><small>${M.quien}</small>${faseTag(M)}</span></a>`).join("")}</div>`;
  const cuenta = `<div class="pau-count" id="pau-count" data-fecha="2027-06-01T09:00:00+02:00"><b id="pau-dias">—</b><span>días para la PAU 2027<br><small>Convocatoria ordinaria: 1, 2 y 3 de junio de 2027 en la mayoría de comunidades</small></span></div>`;
  const cuentaJS = `<script>(function(){var e=document.getElementById("pau-count");if(!e)return;var d=Math.ceil((new Date(e.dataset.fecha)-new Date())/864e5);document.getElementById("pau-dias").textContent=d>0?d:"¡Ya!";})();</script>`;

  pagina("pau", 1, "PAU 2027", "PAU 2027: todo para aprobar la selectividad",
    "La Prueba de Acceso a la Universidad (PAU), antes EBAU, EvAU o selectividad, explicada fácil: cómo es, cuándo es, cómo se calcula la nota y cómo prepararla materia a materia, con modelos de examen resueltos.",
    `${cuenta}
    ${subnav(1, "")}
    <div class="figure">${ESQUEMA}</div>
    ${sec("", "Lo esencial en 10 puntos", ol(INFO.esencial))}
    ${sec("", "Prepara cada materia", `<p>Cada materia tiene su página con <b>cómo es el examen</b>, <b>qué temas entran</b> (enlazados a los temas completos de 2º de Bachillerato), <b>consejos</b>, <b>errores que restan puntos</b>, un <b>modelo de examen con soluciones</b> para imprimir y un <b>test de repaso</b> con nota.</p>
      <h3>Fase de acceso</h3>${matCards(acc, 1)}
      <h3>Fase de admisión (para subir nota)</h3>${matCards(adm, 1)}`)}
    ${sec("", "Todo sobre la prueba", `<div class="grid rec-cards">${SUB.map(([s, t, d]) => `<a class="card" style="--c:var(--bac)" href="${s}/"><span class="mono">${t[0]}</span><span><b>${t}</b><small>${d}</small></span></a>`).join("")}</div>`)}
    <p class="caption">Información revisada el 21 de noviembre de 2026 con el Real Decreto 534/2024 (BOE-A-2024-11858) y los calendarios publicados por las comunidades. Las universidades y consejerías pueden ajustar fechas y detalles: confírmalo siempre en la web oficial de tu comunidad.</p>`,
    "PAU 2027: selectividad, fechas, nota y modelos de examen",
    "Guía completa de la PAU 2027 (selectividad): estructura, fechas por comunidades, calculadora de nota, notas de corte, ponderaciones y modelos de examen resueltos de todas las materias.", cuentaJS);

  // ---------------- estructura y nota ----------------
  const E = INFO.estructura;
  pagina("pau/estructura-y-nota", 2, "Estructura y nota", "Estructura de la PAU y cómo se calcula la nota",
    "Lo que dice el Real Decreto 534/2024, que regula la PAU desde 2025, contado con ejemplos.",
    `${subnav(2, "estructura-y-nota")}
    <div class="figure">${ESQUEMA}</div>
    ${E.map(([id, h, html]) => sec(id, h, html)).join("")}
    ${FORMULA}
    ${sec("ejemplos", "Tres ejemplos de nota", `<div class="ejemplos">${INFO.ejemplosNota.map((x, i) => `<div class="ej"><p><b>Ejemplo ${i + 1}.</b> ${x.enunciado}</p><ol>${x.pasos.map((p) => `<li>${p}</li>`).join("")}</ol><p class="res"><b>Resultado:</b> ${x.resultado}</p></div>`).join("")}</div><p><a class="toolbtn" href="../calculadora/">Calcula la tuya →</a></p>`)}`,
    "Estructura de la PAU 2027 y cálculo de la nota", "Cómo es la PAU 2027: exámenes de la fase de acceso y de admisión, duración, preguntas competenciales, nota de acceso, nota de admisión y revisión.");

  // ---------------- fechas ----------------
  const F = INFO.fechas;
  pagina("pau/fechas-2027", 2, "Fechas 2027", "Fechas de la PAU 2027",
    "Convocatoria ordinaria y extraordinaria por comunidades, y el resto del calendario: matrícula, notas, revisión y preinscripción.",
    `${subnav(2, "fechas-2027")}
    ${cuenta}
    ${sec("", "Calendario por comunidades", `<p>${F.intro}</p>${tabla(["Comunidad", "Ordinaria", "Extraordinaria", "Estado"], F.filas)}<p class="caption">${F.nota}</p>`)}
    ${sec("", "El año de la PAU, paso a paso", `<ol class="rec-cal">${F.pasos.map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join("")}</ol>`)}
    ${sec("", "Cómo suele ser cada día", F.dias)}`,
    "Fechas de la PAU 2027 por comunidades", "Fechas de la selectividad 2027: convocatoria ordinaria del 1 al 3 de junio en la mayoría de comunidades y extraordinaria en julio. Calendario por comunidades.", cuentaJS);

  // ---------------- comunidades ----------------
  pagina("pau/comunidades", 2, "Por comunidades", "La PAU en cada comunidad autónoma",
    "La prueba es común en toda España (mismo real decreto, mismas materias y misma fórmula), pero cada comunidad la organiza, pone los exámenes y fija los detalles.",
    `${subnav(2, "comunidades")}
    ${sec("", "Elige tu comunidad", `<div class="grid rec-cards">${INFO.comunidades.map((c) => `<a class="card" style="--c:#1f4fd1" href="${c.n === "Cataluña" ? "../cataluna/" : slug(c.n) + "/"}"><span class="mono">${(COM[c.n] || {}).sigla || "CT"}</span><span><b>${c.n}</b><small>${c.org}</small></span></a>`).join("")}</div>`)}
    ${sec("", "Quién la organiza y dónde informarse", tabla(["Comunidad", "Nombre habitual", "Organiza", "Lengua cooficial", "Web oficial"], INFO.comunidades.map((c) => [c.n, c.nombre, c.org, c.lengua, `<a href="${c.web}" target="_blank" rel="noopener">${c.webT}</a>`])))}
    ${sec("", "Qué es igual en toda España", ul(INFO.igual))}
    ${sec("", "Qué cambia de una comunidad a otra", ul(INFO.cambia))}
    ${sec("", "¿Y si quiero estudiar en otra comunidad?", INFO.distrito)}`,
    "PAU por comunidades autónomas", "Nombre, organizador, lengua cooficial y web oficial de la PAU en cada comunidad autónoma, y qué cambia de una a otra.");

  // ---------------- una página por comunidad ----------------
  const FECHA_FILA = (n) => (INFO.fechas.filas.find((f) => f[0].split(/, | y /).includes(n) || f[0] === n) || null);
  for (const c of INFO.comunidades) {
    if (c.n === "Cataluña") continue;
    const D = COM[c.n]; if (!D) continue;
    const fila = FECHA_FILA(c.n);
    const ord = fila ? fila[1] : D.fecha[0], ext = fila ? fila[2] : D.fecha[1];
    const pce = c.nombre === "PCE";
    const n5 = !!D.lengua;
    const otras = INFO.comunidades.filter((x) => x.n !== c.n).map((x) => `<a href="${x.n === "Cataluña" ? "../../cataluna/" : "../" + slug(x.n) + "/"}">${x.n}</a>`).join("");
    pagina(`pau/comunidades/${slug(c.n)}`, 3, `<a href="../">Por comunidades</a> › ${c.n}`, pce ? "Acceso a la universidad desde sistemas educativos extranjeros" : `La PAU en ${c.n} 2027`,
      pce ? "Qué son las PCE de la UNED, quién las hace y cómo se pide plaza en una universidad española." : `Fechas, universidades, exámenes y preinscripción en ${c.n}. ${n5 ? "Aquí la fase de acceso tiene cinco exámenes, con la lengua cooficial." : "Aquí la fase de acceso tiene cuatro exámenes."}`,
      `${subnav(3, "comunidades")}
      ${sec("", "Lo esencial", tabla(["Dato", "En tu comunidad"], [
        ["Nombre", c.nombre], ["Organiza", c.org],
        ...(pce ? [] : [["Exámenes de la fase de acceso", n5 ? "5 (con " + D.lengua.split(" (")[0] + ")" : "4"]]),
        ["Convocatoria ordinaria 2027", ord], ["Convocatoria extraordinaria 2027", ext],
        ["Web oficial", `<a href="${c.web}" target="_blank" rel="noopener">${c.webT}</a>`],
      ]))}
      ${sec("", "Lo que tienes que saber", ul(D.claves))}
      ${D.lengua ? sec("", "El examen de lengua cooficial", `<p>${D.lengua}</p><p>Dura 90 minutos, como los demás, y su nota cuenta igual en la media de la prueba. Sigue el modelo de Lengua Castellana: comentario de un texto, preguntas de lengua y una de literatura.</p>`) : ""}
      ${sec("", pce ? "Quién lo organiza" : "Universidades públicas", ul(D.univ) + `<p>${D.sedes}</p>`)}
      ${sec("", "Preinscripción", `<p>${D.preins}</p><p>Recuerda que la nota de la PAU vale para <b>cualquier universidad de España</b>: si quieres estudiar fuera, preinscríbete también en esa comunidad dentro de su plazo.</p>`)}
      ${pce ? "" : sec("", "Practica con los exámenes de tu comunidad", `<p>Cada comisión tiene su estilo de preguntas. Haz primero los modelos resueltos de Escolapedia y después los exámenes oficiales de ${c.n}, que están en la web de quien organiza la prueba.</p><p><a class="btn" href="https://www.google.com/search?q=${encodeURIComponent(`exámenes PAU años anteriores soluciones site:${new URL(c.web).hostname}`)}" target="_blank" rel="noopener">Buscar exámenes oficiales de ${c.n} →</a> <a class="btn" href="../../materias/">Modelos resueltos por materia →</a></p>`)}
      ${sec("", "Más sobre la PAU", ul([`<a href="../../fechas-2027/">Fechas 2027 en todas las comunidades</a>`, `<a href="../../calculadora/">Calcula tu nota de acceso y de admisión</a>`, `<a href="../../notas-de-corte-y-ponderaciones/">Notas de corte y ponderaciones</a>`, `<a href="../../plan-de-estudio/">Plan de estudio de septiembre a junio</a>`]))}
      <p class="caption">Información revisada el 21 de noviembre de 2026. Las fechas y los detalles los fija cada comunidad: confírmalos siempre en la web oficial.</p>
      <nav class="rec-toc pau-nav" aria-label="Otras comunidades">${otras}</nav>`,
      pce ? "PCE de la UNED: acceso desde sistemas educativos extranjeros" : `PAU ${c.n} 2027: fechas, universidades y exámenes`,
      pce ? "Pruebas de Competencias Específicas (PCE) de la UNED para estudiantes de sistemas educativos extranjeros: qué son, quién las hace y cómo pedir plaza." : `Selectividad en ${c.n} 2027: fechas de la convocatoria ordinaria y extraordinaria, universidades públicas, ${n5 ? "examen de lengua cooficial, " : ""}preinscripción y exámenes oficiales.`);
  }

  // ---------------- Cataluña ----------------
  pagina("pau/cataluna", 2, "Cataluña", "La PAU en Cataluña (selectivitat) 2027",
    "Proves d'accés a la universitat: lo que cambia respecto al resto de España, las fechas de 2027 y cómo funciona la preinscripción universitaria.",
    `${subnav(2, "cataluna")}
    ${INFO.cataluna.map(([h, html]) => sec("", h, html)).join("")}
    ${sec("", "Glosario català - castellà", `<div class="glosario"><dl>${INFO.glosarioCat.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join("")}</dl></div>`)}`,
    "PAU Cataluña 2027 (selectivitat): fechas y novedades", "Selectivitat 2027 en Cataluña: fechas (1-3 de junio y 6-8 de julio), Llengua Catalana i Literatura II, preinscripción, ponderaciones y glosario.");

  // ---------------- calculadora ----------------
  const N = INFO.calcNombres;
  pagina("pau/calculadora", 2, "Calculadora", "Calculadora de nota de la PAU",
    "Escribe tus notas y verás al momento tu nota de la prueba, tu nota de acceso (sobre 10) y tu nota de admisión (sobre 14). Los datos se quedan en tu navegador.",
    `${subnav(2, "calculadora")}
    <form class="pau-calc" id="pau-calc" autocomplete="off" onsubmit="return false">
      <fieldset><legend>1. Bachillerato</legend>
        <label>Nota media de 1º y 2º de Bachillerato <input type="number" step="0.01" min="5" max="10" id="c-nmb" placeholder="Ej.: 8,25"></label></fieldset>
      <fieldset><legend>2. Fase de acceso (de 0 a 10)</legend>
        ${N.map(([id, t]) => `<label>${t} <input type="number" step="0.01" min="0" max="10" id="c-${id}"></label>`).join("")}
        <label class="chk"><input type="checkbox" id="c-cof"> Tengo examen de lengua cooficial (catalán, gallego, euskera, valenciano)</label>
        <label id="c-cof-l" hidden>Lengua cooficial y Literatura II <input type="number" step="0.01" min="0" max="10" id="c-lc"></label></fieldset>
      <fieldset><legend>3. Materias que ponderan (fase de admisión o modalidad)</legend>
        <p class="caption">Pon la nota de cada materia y cuánto pondera en el grado que quieres (míralo en la web de la universidad). Solo cuentan las aprobadas (5 o más) y, de ellas, las dos que más suben.</p>
        ${[1, 2, 3, 4].map((i) => `<div class="pau-row"><input type="text" id="c-m${i}n" placeholder="Materia ${i}" aria-label="Nombre de la materia ${i}"><input type="number" step="0.01" min="0" max="10" id="c-m${i}" placeholder="Nota" aria-label="Nota de la materia ${i}"><select id="c-m${i}p" aria-label="Ponderación de la materia ${i}"><option value="0.2">× 0,2</option><option value="0.1">× 0,1</option><option value="0">No pondera</option></select></div>`).join("")}
      </fieldset>
      <fieldset><legend>4. Nota de corte del grado (opcional)</legend><label>Nota de corte del curso pasado <input type="number" step="0.001" min="5" max="14" id="c-corte" placeholder="Ej.: 12,5"></label></fieldset>
    </form>
    <div class="pau-res" id="pau-res" aria-live="polite"><p>Rellena tus notas para ver el resultado.</p></div>
    ${sec("", "Cómo calcula", `${FORMULA}${ul(INFO.calcNotas)}`)}`,
    "Calculadora de nota PAU 2027 (acceso y admisión)", "Calcula tu nota de la PAU 2027: nota de la prueba, nota de acceso sobre 10 y nota de admisión sobre 14 con ponderaciones 0,1 y 0,2.",
    `<script>${INFO.calcJS}</script>`);

  // ---------------- notas de corte y ponderaciones ----------------
  pagina("pau/notas-de-corte-y-ponderaciones", 2, "Notas de corte", "Notas de corte y ponderaciones",
    "Cómo saber qué nota necesitas para el grado que quieres y qué materias de la fase de admisión te conviene hacer.",
    `${subnav(2, "notas-de-corte-y-ponderaciones")}
    ${INFO.corte.map(([h, html]) => sec("", h, html)).join("")}
    ${sec("", "Notas de corte orientativas por grados", `<p>${INFO.cortesIntro}</p>${tabla(["Grado", "Universidades públicas (orientativo)", "Materias que suelen ponderar 0,2"], INFO.cortes)}<p class="caption">${INFO.cortesNota}</p>`)}
    ${sec("", "Qué materias pondera cada rama", tabla(["Rama", "Materias que suelen ponderar 0,2", "Consejo"], INFO.ramas))}`,
    "Notas de corte y ponderaciones PAU 2027", "Qué es la nota de corte, cómo funcionan las ponderaciones 0,1 y 0,2, notas de corte orientativas de los grados más pedidos y qué materias elegir en la fase de admisión.");

  // ---------------- plan de estudio ----------------
  pagina("pau/plan-de-estudio", 2, "Plan de estudio", "Plan de estudio para la PAU 2027",
    "Un plan realista para llegar a junio con todo repasado sin dejar de lado el curso de 2º de Bachillerato.",
    `${subnav(2, "plan-de-estudio")}
    ${sec("", "Mes a mes", `<ol class="rec-cal">${INFO.plan.meses.map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join("")}</ol>`)}
    ${sec("", "Una semana tipo (de febrero a mayo)", tabla(["Día", "Tarde (2 h 30 min aprox.)", "Repaso corto"], INFO.plan.semana))}
    ${sec("", "Las últimas tres semanas", tabla(["Día", "Mañana", "Tarde"], INFO.plan.final))}
    ${sec("", "Técnicas que funcionan (y las que no)", INFO.plan.tecnicas)}`,
    "Plan de estudio para la PAU 2027", "Plan de estudio para la selectividad: mes a mes de septiembre a junio, semana tipo, las tres últimas semanas y técnicas de estudio con base científica.");

  // ---------------- consejos ----------------
  pagina("pau/consejos", 2, "Consejos", "Consejos para el examen y para los días de la PAU",
    "Técnica de examen, qué llevar, cómo dormir y comer, y cómo manejar los nervios. Escrito con la mirada de un médico de familia que ha acompañado a cinco hijos en la selectividad.",
    `${subnav(2, "consejos")}
    ${INFO.consejos.map(([h, xs]) => sec("", h, Array.isArray(xs) ? ul(xs) : xs)).join("")}`,
    "Consejos para la PAU: técnica de examen, sueño y nervios", "Consejos para la selectividad 2027: técnica de examen, qué llevar, la semana antes, dormir, comer, ansiedad y qué hacer si un examen sale mal.");

  // ---------------- preguntas frecuentes ----------------
  pagina("pau/preguntas-frecuentes", 2, "Preguntas frecuentes", "Preguntas frecuentes sobre la PAU",
    "Las dudas que más se repiten, con la respuesta según la normativa.",
    `${subnav(2, "preguntas-frecuentes")}
    ${INFO.faqGrupos.map(([h, xs]) => sec("", h, faq(xs))).join("")}`,
    "Preguntas frecuentes PAU 2027", "Respuestas a las dudas de la PAU 2027: revisión de exámenes, subir nota, validez, FP, adaptaciones, calculadora, diccionario y más.");

  // ---------------- exámenes oficiales ----------------
  const dom = (u) => u.replace(/^https?:\/\//, "").split("/")[0].replace(/^www\./, "");
  const busca = (c) => `https://www.google.com/search?q=${encodeURIComponent(`exámenes PAU años anteriores soluciones site:${dom(c.web)}`)}`;
  pagina("pau/examenes-oficiales", 2, "Exámenes oficiales", "Exámenes oficiales de la PAU de años anteriores",
    "Los exámenes reales de convocatorias pasadas, con sus soluciones y criterios de corrección, son el mejor entrenamiento. Los publica cada comunidad: aquí tienes dónde encontrarlos y cómo usarlos.",
    `${subnav(2, "examenes-oficiales")}
    ${sec("", "Dónde están en cada comunidad", `<p>Cada comisión organizadora publica sus exámenes en su web, normalmente en un apartado llamado «Exámenes de años anteriores», «Modelos de examen», «Orientaciones» o «Exàmens PAU». El botón «Buscar» abre una búsqueda solo dentro de la web oficial.</p>${tabla(["Comunidad", "Organiza", "Web oficial", "Buscar exámenes"], INFO.comunidades.filter((c) => c.nombre !== "PCE").map((c) => [c.n, c.org, `<a href="${c.web}" target="_blank" rel="noopener">${c.webT}</a>`, `<a href="${busca(c)}" target="_blank" rel="noopener">Buscar →</a>`]))}<p class="caption">Los exámenes oficiales pertenecen a las comisiones y universidades que los elaboran: por eso los enlazamos y no los copiamos.</p>`)}
    ${sec("", "Cuáles practicar", ul([
      "Empieza por los <b>modelos de 2025, 2026 y 2027</b>: son los del nuevo formato competencial (RD 534/2024). Los anteriores a 2025 siguen siendo útiles para practicar contenidos, pero su estructura es distinta.",
      "Practica sobre todo los de <b>tu comunidad</b>: cada comisión tiene su estilo. Después, los de otras comunidades te dan más variedad.",
      "Haz también los de la <b>convocatoria extraordinaria</b>: suelen ser igual de exigentes.",
      "En Escolapedia tienes además <a href=\"../materias/\">tres modelos propios resueltos por materia</a>, escritos según el formato actual.",
    ]))}
    ${sec("", "Cómo sacarles partido", ol([
      "Hazlo entero, en 90 minutos y sin apuntes, en un sitio tranquilo.",
      "Corrígelo con los <b>criterios oficiales</b>, como lo haría el tribunal, y ponte nota.",
      "Apunta en una libreta cada error y el tema al que pertenece.",
      "Repasa esos temas en Escolapedia y vuelve a hacer el mismo examen una semana después.",
      "A partir de febrero, intenta hacer un examen oficial por semana de cada materia de acceso.",
    ]))}`,
    "Exámenes oficiales de la PAU de años anteriores", "Dónde encontrar los exámenes oficiales de la PAU de años anteriores de cada comunidad, con soluciones y criterios, y cómo practicar con ellos.");

  // ---------------- índice de materias ----------------
  pagina("pau/materias", 2, "Materias", "Materias de la PAU: modelos de examen resueltos",
    "Todas las materias que se pueden examinar en la PAU, con su modelo de examen, soluciones, consejos y test.",
    `${subnav(2, "materias")}
    ${sec("", "Fase de acceso", `<p>Te examinas de Lengua Castellana y Literatura II, de Historia de España <b>o</b> Historia de la Filosofía, de una lengua extranjera, de la materia obligatoria de tu modalidad y, si la hay, de la lengua cooficial.</p>${matCards(acc, 2)}`)}
    ${sec("", "Fase de admisión", `<p>Puedes examinarte de hasta tres materias de 2º de Bachillerato distintas de las de la fase de acceso, y de una segunda lengua extranjera.</p>${matCards(adm, 2)}`)}
    ${sec("", "Materias que no tienen examen de PAU", `<p>${INFO.sinExamen}</p>`)}`,
    "Materias de la PAU 2027 y modelos de examen", "Modelos de examen de la PAU 2027 resueltos para todas las materias: Lengua, Historia, Filosofía, Inglés, Matemáticas, Física, Química, Biología y más.");

  // ---------------- una página por materia ----------------
  const L = "ABCDEFG";
  for (const M of MATERIAS) {
    const temas = M.m ? M.m.temasObj : [];
    const urlTema = (t, d) => `${R(d)}${t.url}`;
    const listos = temas.filter((t) => t.obj);
    const temasHTML = temas.length ? `<ol class="topics">${temas.map((t) => t.obj
      ? `<li><a href="${urlTema(t, 2)}"><span>${t.titulo}</span><span class="pill">Tema completo</span></a></li>`
      : `<li><span class="t"><span>${t.titulo}</span><span class="pill soon">Próximamente</span></span></li>`).join("")}</ol>` : "";
    const modelos = [M.modelo, ...(EXTRA[M.nombre] || [])];
    const mod = M.modelo;
    const pts = (n) => String(n).replace(".", ",");
    const modeloHTML = (mod) => { const total = mod.preguntas.reduce((a, p) => a + (p.puntos || 0), 0); return `<div class="pau-modelo">
      <p class="caption"><b>Instrucciones:</b> ${mod.instrucciones}</p>
      ${mod.texto ? `<div class="lectura pau-texto">${mod.texto}</div>` : ""}
      <ol class="pau-preg">${mod.preguntas.map((p) => `<li><p>${p.q}${p.puntos ? ` <span class="pau-pts">(${pts(p.puntos)} ${p.puntos === 1 ? "punto" : "puntos"})</span>` : ""}</p><details><summary>Ver solución y criterios</summary><div>${p.sol}</div></details></li>`).join("")}</ol>
      ${total ? `<p class="caption">Total: ${pts(total)} puntos.</p>` : ""}</div>`; };
    const quizPool = listos.flatMap((t) => [...(t.obj.quiz || []), ...(t.obj.examen || [])].map((q) => ({ ...q, tema: t.titulo, u: urlTema(t, 3) })));
    const hayTest = quizPool.length >= 10;
    const masModelos = modelos.length > 1 ? `<h3>Más modelos resueltos</h3><div class="grid rec-cards">${modelos.slice(1).map((x, i) => `<a class="card" style="--c:${M.color}" href="modelo-${i + 2}/"><span class="mono">${i + 2}</span><span><b>Modelo ${i + 2}</b><small>${x.titulo}</small></span></a>`).join("")}</div>` : "";

    pagina(`pau/${M.slug}`, 2, M.nombre, `${M.nombre} en la PAU`,
      M.intro,
      `${subnav(2, "materias")}
      <div class="pau-head">${faseTag(M)}<span class="pau-tag" style="--c:#5a6580">${M.quien}</span>${M.m ? `<a class="toolbtn" href="${R(2)}${M.m.url}">Temario completo de 2º →</a>` : ""}</div>
      <nav class="rec-toc"><a href="#examen">Cómo es el examen</a><a href="#temas">Qué entra</a><a href="#consejos">Consejos</a><a href="#modelo">${modelos.length > 1 ? `${modelos.length} modelos resueltos` : "Modelo resuelto"}</a>${hayTest ? `<a href="test/">Test de repaso</a>` : ""}<a href="examen/">Versión para imprimir</a><a href="${R(1)}examenes-oficiales/">Exámenes oficiales</a></nav>
      ${sec("examen", "Cómo es el examen", `${ul(M.formato)}${M.tabla ? tabla(M.tabla[0], M.tabla.slice(1)) : ""}<p class="caption">${INFO.avisoModelo}</p>`)}
      ${sec("temas", "Qué entra: lo imprescindible", `${ul(M.claves)}${temas.length ? `<h3>Los temas de 2º de Bachillerato</h3><p>Repasa cada tema con su explicación, ejemplos resueltos, ejercicios con solución y tarjetas de repaso.</p>${temasHTML}` : ""}`)}
      ${sec("consejos", "Consejos para sacar nota", `${ul(M.consejos)}<div class="errores"><h3>Errores que restan puntos</h3>${ul(M.errores)}</div>`)}
      ${sec("modelo", `Modelo de examen resuelto <small style="font-size:15px;color:var(--muted)">(${mod.titulo})</small>`, `${modeloHTML(mod)}<p><a class="toolbtn" href="examen/">Imprimir el modelo (sin soluciones a la vista)</a></p>${masModelos}<p class="caption">¿Quieres los exámenes reales de años anteriores? <a href="${R(1)}examenes-oficiales/">Dónde encontrar los exámenes oficiales de tu comunidad</a>.</p>`)}
      ${hayTest ? sec("test", "Test de repaso", `<p>${Math.min(30, quizPool.length)} preguntas de los temas de ${M.nombre}, con corrección y nota. Te dice qué temas repasar.</p><p><a class="toolbtn" href="test/">Hacer el test →</a></p>`) : ""}
      ${M.fuentes ? sec("", "Fuentes", `<ul class="src">${M.fuentes.map((f) => `<li><a href="${f.url}" target="_blank" rel="noopener">${f.t}</a></li>`).join("")}</ul>`) : ""}`,
      `${M.nombre} PAU 2027: ${modelos.length > 1 ? `${modelos.length} modelos de examen resueltos` : "modelo de examen resuelto"}`, `${M.nombre} en la PAU 2027: cómo es el examen, qué entra, consejos, errores típicos y ${modelos.length > 1 ? `${modelos.length} modelos de examen resueltos` : "modelo de examen resuelto"} con soluciones.`);

    // Modelos adicionales: página propia con las soluciones desplegables
    modelos.forEach((x, i) => {
      if (i === 0) return;
      write(`pau/${M.slug}/modelo-${i + 1}`, page({ title: `Modelo ${i + 1} PAU ${M.nombre} resuelto · ${SITE}`, desc: `Modelo ${i + 1} de examen de ${M.nombre} para la PAU 2027 (${x.titulo}), con soluciones y criterios de corrección.`, depth: 3, nav: "pau",
        body: wrap(3, `<a href="../">${M.nombre}</a> › Modelo ${i + 1}`, `${M.nombre}: modelo ${i + 1}`, `${x.titulo[0].toUpperCase() + x.titulo.slice(1)}. Hazlo en 90 minutos y después abre las soluciones.`,
          `<nav class="rec-toc pau-nav"><a href="../">← ${M.nombre} en la PAU</a>${modelos.map((_, j) => j === i ? `<a class="on" href="./">Modelo ${j + 1}</a>` : `<a href="${j === 0 ? "../#modelo" : `../modelo-${j + 1}/`}">Modelo ${j + 1}</a>`).join("")}<a href="../examen-${i + 1}/">Versión para imprimir</a></nav>
          <section class="rec-sec">${modeloHTML(x)}</section>`).replace(`<a href="../">PAU 2027</a>`, `<a href="../../">PAU 2027</a>`) }));
    });

    // Versiones imprimibles (examen/, examen-2/, examen-3/…)
    modelos.forEach((x, i) => write(`pau/${M.slug}/${i ? `examen-${i + 1}` : "examen"}`, page({ title: `Modelo ${i + 1} PAU ${M.nombre} para imprimir · ${SITE}`, desc: `Modelo ${i + 1} de examen de ${M.nombre} para la PAU 2027, para imprimir, con soluciones al final.`, depth: 3,
      scripts: `<script>document.getElementById("t-print").addEventListener("click",()=>window.print());</script>`,
      body: `<main class="ficha"><div class="wrap">
  <div class="crumbs noprint"><a href="../">← ${M.nombre} en la PAU</a></div>
  <div class="ficha-tools noprint"><button type="button" id="t-print">Imprimir o guardar en PDF</button><span class="caption">Hazlo en 90 minutos, sin mirar las soluciones.</span></div>
  <header class="ficha-h"><div><span class="badge" style="background:${M.color}">PAU 2027 · Modelo ${i + 1} de Escolapedia</span><h1>${M.nombre}</h1><p class="caption">${x.instrucciones}</p></div>
    <div class="ficha-name">Nombre: ______________________ &nbsp; Fecha: ___________ &nbsp; Nota: ______</div></header>
  ${x.texto ? `<section><div class="lectura pau-texto">${x.texto}</div></section>` : ""}
  <section><ol class="fq">${x.preguntas.map((p) => `<li><p>${p.q}${p.puntos ? ` <b>(${pts(p.puntos)} p.)</b>` : ""}</p><div class="lines tall"></div></li>`).join("")}</ol></section>
  <section class="sol brk"><h2>Soluciones y criterios de corrección</h2><ol>${x.preguntas.map((p) => `<li>${p.sol}</li>`).join("")}</ol></section>
  </div></main>` })));

    // Test de repaso (usa el mismo motor que los exámenes por trimestre)
    if (hayTest) {
      // Selección repartida entre temas, siempre la misma para que la nota se pueda comparar.
      const porTema = {}; for (const q of quizPool) (porTema[q.tema] = porTema[q.tema] || []).push(q);
      const preg = []; let k = 0;
      while (preg.length < Math.min(30, quizPool.length)) { for (const t of Object.keys(porTema)) { if (porTema[t][k] && preg.length < 30) preg.push(porTema[t][k]); } k++; }
      const min = Math.max(15, Math.round(preg.length * 1.2));
      const body = `<main class="ficha examen"><div class="wrap">
  <div class="crumbs noprint"><a href="../">← ${M.nombre} en la PAU</a></div>
  <header class="ficha-h"><div><span class="badge" style="background:${M.color}">PAU 2027 · ${M.nombre}</span><h1>Test de repaso de ${M.nombre}</h1>
    <p class="caption">${preg.length} preguntas de ${Object.keys(porTema).length} temas. El examen real de la PAU es de desarrollo: este test sirve para comprobar qué dominas y qué repasar.</p></div>
    <div class="ficha-name">Nombre: ______________________ &nbsp; Fecha: ___________ &nbsp; Nota: ______</div></header>
  <div class="ficha-tools noprint"><button type="button" id="ex-start" class="dl">Empezar (${preg.length} preguntas, ${min} min)</button><button type="button" id="t-print">Imprimir</button><span class="timer" id="ex-timer" hidden></span></div>
  <section><ol class="fq" id="ex-list">${preg.map((q, i) => `<li data-i="${i}"><p>${q.q}</p><ol class="abc">${q.o.map((o, j) => `<li><label><input type="radio" name="p${i}" value="${j}"> <span>${L[j]})</span> ${o}</label></li>`).join("")}</ol><div class="fb" aria-live="polite"></div></li>`).join("")}</ol>
  <div class="noprint"><button type="button" id="ex-check" class="big">Corregir test</button></div></section>
  <section id="ex-result" class="noprint" hidden></section>
  <section class="sol"><h2>Soluciones</h2><ol>${preg.map((q) => `<li><b>${L[q.a]})</b> ${q.e}</li>`).join("")}</ol></section>
  </div></main>`;
      const data = { id: `pau/${M.slug}`, min, p: preg.map(({ a, e, tema, u }) => ({ a, e, tema, u })) };
      write(`pau/${M.slug}/test`, page({ title: `Test de repaso PAU: ${M.nombre} · ${SITE}`, desc: `Test de repaso de ${M.nombre} para la PAU 2027, con corrección, nota y temas que repasar.`, depth: 3, body,
        scripts: `<script>window.EXAMEN=${JSON.stringify(data)};document.getElementById("t-print").addEventListener("click",()=>window.print());</script>` }));
    }
  }
  return { materias: MATERIAS.length };
};
module.exports.MATERIAS = MATERIAS;
