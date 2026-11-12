// Generador de Escolapedia: node build.js  →  crea la web estática en dist/
const fs = require("fs");
const path = require("path");
const { ETAPAS, FAM } = require("./src/curriculo");

const OUT = path.join(__dirname, process.env.PREVIEW ? "preview" : "dist");
const SITE = "Escolapedia";
const CURSO_ESCOLAR = "2026-27";

const ORD = ["1er", "2º", "3er"];
const slug = (t) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const initials = (n) => n.replace(/^(Lengua|Educación|Ciencias)\s+/i, (m) => m).split(/\s+/).filter((w) => w.length > 3 || /^[A-ZÁÉÍÓÚ]/.test(w)).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

// ---------- temas escritos ----------
const TEMAS = {};
for (const f of fs.readdirSync(path.join(__dirname, "src/temas"))) {
  if (!f.endsWith(".js") || f.startsWith("_")) continue;
  // Un archivo puede exportar un tema o una lista de temas (p. ej. adaptaciones de otra materia).
  for (const t of [].concat(require(`./src/temas/${f}`))) TEMAS[`${t.curso}|${t.materia}|${t.titulo}`] = t;
}

// ---------- plantilla ----------
const I18N = {
  es: { inicio: "Inicio", familias: "Familias", profesores: "Profesores", buscar: "Buscar", buscarPh: "Busca un tema: fotosíntesis, fracciones…" },
  ca: { inicio: "Inici", familias: "Famílies", profesores: "Professorat", buscar: "Cercar", buscarPh: "Cerca un tema: fotosíntesi, fraccions…" },
};

function page({ title, desc, depth, body, lang = "es", nav = "", extraHead = "", scripts = "" }) {
  const r = depth ? "../".repeat(depth) : "./";
  const t = I18N[lang];
  const esUrl = lang === "ca" ? r.replace(/^\.\.\//, "") || "./" : r;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap">
<link rel="stylesheet" href="${r}assets/base.css">
<link rel="stylesheet" href="${r}assets/extra.css">
${extraHead}
</head>
<body>
<header class="bar"><div class="wrap">
  <a class="logo" href="${lang === "ca" ? r + "ca/" : r}" aria-label="${SITE}, ${t.inicio}">
    <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="5" width="26" height="22" rx="4" fill="var(--pen)"/><path d="M16 9v15M7 11h6M7 15h6M19 11h6M19 15h6M7 19h6M19 19h6" stroke="var(--card)" stroke-width="2" stroke-linecap="round"/></svg>
    <span>Escola<span>pedia</span></span></a>
  <nav class="nav" aria-label="Secciones">
    <a href="${r}familias/"${nav === "familias" ? ' class="on"' : ""}>${t.familias}</a>
    <a href="${r}profesores/"${nav === "profesores" ? ' class="on"' : ""}>${t.profesores}</a>
  </nav>
  <div class="lang" aria-label="Idioma"><a href="${lang === "ca" ? esUrl : r}"${lang === "es" ? ' aria-current="page"' : ""} lang="es">ES</a><a href="${r}ca/"${lang === "ca" ? ' aria-current="page"' : ""} lang="ca">CA</a></div>
</div></header>
${body}
<footer class="foot"><div class="wrap">${SITE} · Todas las materias de Infantil a Bachillerato según la LOMLOE, curso ${CURSO_ESCOLAR}. Contenido gratuito, revisado con fuentes oficiales. Dibujos propios.</div></footer>
<script>window.BASE=${JSON.stringify(r)};window.IDX=${JSON.stringify(process.env.PREVIEW ? "index.html" : "")};</script>
${scripts}
<script src="${r}assets/app.js"></script>
</body></html>`;
}

function write(rel, html) {
  // Vista previa (PREVIEW=1): enlaces a carpeta → index.html, para verla sin servidor web.
  if (process.env.PREVIEW) html = html.replace(/href="((?!https?:|#)[^"]*\/)"/g, 'href="$1index.html"');
  const f = path.join(OUT, rel, "index.html");
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
}

// ---------- recorrido y URLs ----------
const indice = [];
let nTemas = 0, nListos = 0, nMaterias = 0;
for (const e of ETAPAS) for (const c of e.cursos) for (const m of c.materias) {
  nMaterias++;
  m.slug = slug(m.nombre);
  m.url = `${e.slug}/${c.slug}/${m.slug}/`;
  m.temasObj = m.temas.map((t) => {
    const obj = TEMAS[`${c.slug}|${m.nombre}|${t}`];
    nTemas++; if (obj) nListos++;
    const u = `${m.url}${slug(t)}/`;
    indice.push({ t, m: m.nombre, c: c.largo || `Infantil ${c.nombre}`, u, ok: !!obj });
    return { titulo: t, url: u, obj };
  });
}

const GRUPOS = [["comun", "Materias comunes"], ["lengua", "Lenguas"], ["modalidad", "Materias de modalidad"], ["opcion", "Optativas, opciones y Religión"]];
const famColor = (m) => (FAM[m.fam] || FAM.len).c;
const cursoNombre = (e, c) => c.largo || `Infantil, ${c.nombre}`;

// ---------- portada ----------
function stagesHTML(depth, lang) {
  const r = depth ? "../".repeat(depth) : "./";
  return ETAPAS.map((e) => `
    <div class="stage" style="--c:${e.color}">
      <div><h3><a href="${r}${e.slug}/" style="color:inherit;text-decoration:none">${e.nombre}</a></h3><small>${e.edad}</small></div>
      <div class="chips">${e.cursos.map((c) => `<a class="chip${c.slug === "4-eso" ? " live" : ""}" href="${r}${e.slug}/${c.slug}/">${c.nombre}</a>`).join("")}${e.slug === "bachillerato" ? `<span class="chip" title="Próximamente">PAU</span>` : ""}</div>
    </div>`).join("");
}

const METODO_ES = [["Pregunta de arranque", "Despierta la curiosidad antes de leer."], ["Aprende", "Bloques cortos con dibujo y vídeo."], ["Practica", "Preguntas con corrección al momento."], ["Explícalo", "Cuéntalo con tus palabras."], ["Resumen visual", "Todo el tema en un esquema."], ["Repasa", "Tarjetas que vuelven a los 1, 3, 7 y 21 días."]];
const METODO_CA = [["Pregunta d'inici", "Desperta la curiositat abans de llegir."], ["Aprèn", "Blocs curts amb dibuix i vídeo."], ["Practica", "Preguntes amb correcció al moment."], ["Explica-ho", "Explica-ho amb les teves paraules."], ["Resum visual", "Tot el tema en un esquema."], ["Repassa", "Targetes que tornen als 1, 3, 7 i 21 dies."]];

function home(lang) {
  const ca = lang === "ca", depth = ca ? 1 : 0, r = ca ? "../" : "./";
  const t = I18N[lang];
  const body = `<main><div class="wrap">
  ${ca ? `<p class="notice" style="margin-top:20px">Estem traduint Escolapedia al català. De moment, els temes s'obren en castellà. La matèria <b>Llengua Catalana i Literatura</b> ja apareix a tots els cursos.</p>` : ""}
  <section class="hero">
    <div>
      <h1>${ca ? `Tota l'escola, <span class="u">curs a curs</span>, explicada fàcil.` : `Todo el cole, <span class="u">curso a curso</span>, explicado fácil.`}</h1>
      <p>${ca ? `D'Infantil a 2n de Batxillerat, amb totes les matèries del currículum ${CURSO_ESCOLAR}, vídeos, dibuixos i un mètode d'estudi que funciona de veritat.` : `De Infantil a 2º de Bachillerato, con todas las materias del currículo ${CURSO_ESCOLAR}, vídeos, dibujos y un método de estudio que de verdad funciona.`}</p>
      <form class="search" id="search" role="search"><input id="q" type="search" placeholder="${t.buscarPh}" aria-label="${t.buscar}" autocomplete="off"><button type="submit">${t.buscar}</button></form>
      <div class="results" id="results" aria-live="polite"></div>
    </div>
    <aside class="method" aria-label="Método">
      <h2>${ca ? "Cada tema, en 6 passos" : "Cada tema, en 6 pasos"}</h2>
      <ol>${(ca ? METODO_CA : METODO_ES).map(([a, b]) => `<li><span><b>${a}</b>${b}</span></li>`).join("")}</ol>
    </aside>
  </section>
  <section class="audiences" aria-label="${ca ? "Per a qui" : "Para quién"}">
    <a class="aud" style="--c:var(--pri)" href="${r}eso/4-eso/"><h3>${ca ? "Alumnes" : "Alumnos"}</h3><p>${ca ? "Tria el teu curs i estudia cada tema en 6 passos, amb jocs de preguntes i targetes de repàs." : "Elige tu curso y estudia cada tema en 6 pasos, con juegos de preguntas y tarjetas de repaso."}</p><span>${ca ? "Començar →" : "Empezar →"}</span></a>
    <a class="aud" style="--c:var(--inf)" href="${r}familias/"><h3>${t.familias}</h3><p>${ca ? "Com ajudar a casa amb cada tema i com veure el progrés del vostre fill o filla." : "Cómo ayudar en casa con cada tema y cómo ver el progreso de vuestro hijo o hija."}</p><span>${ca ? "Guia per a famílies →" : "Guía para familias →"}</span></a>
    <a class="aud" style="--c:var(--bac)" href="${r}profesores/"><h3>${t.profesores}</h3><p>${ca ? "Sabers del currículum, idees per a classe, fitxes per imprimir i mode projector." : "Saberes del currículo, ideas para clase, fichas para imprimir y modo proyector."}</p><span>${ca ? "Recursos per a docents →" : "Recursos para docentes →"}</span></a>
  </section>
  <section class="stages" aria-label="${ca ? "Etapes i cursos" : "Etapas y cursos"}">
    <h2>${ca ? "Tria el teu curs" : "Elige tu curso"}</h2>
    ${stagesHTML(depth, lang)}
    <p class="caption">${nMaterias} ${ca ? "matèries" : "materias"} · ${nListos} ${ca ? "temes complets" : "temas completos"} ${ca ? "i creixent" : "y creciendo"}.</p>
  </section>
</div></main>`;
  return page({ title: ca ? "Escolapedia: totes les matèries d'Infantil a Batxillerat" : "Escolapedia: todas las materias de Infantil a Bachillerato", desc: "Todas las materias de Infantil, Primaria, ESO y Bachillerato explicadas fácil, con vídeos, dibujos y un método de estudio eficaz.", depth, body, lang, scripts: `<script src="${r}assets/indice.js"></script>` });
}
write("", home("es"));
write("ca", home("ca"));

// ---------- etapa ----------
for (const e of ETAPAS) {
  const body = `<main><div class="wrap">
    <div class="crumbs"><a href="../">Inicio</a> › ${e.nombre}</div>
    <div class="page-h"><h1>${e.nombre}</h1><p>${e.edad}. Materias según el ${e.decreto} y los currículos de cada comunidad autónoma.</p></div>
    <div class="grid" style="padding-bottom:48px">${e.cursos.map((c) => {
      const listos = c.materias.reduce((a, m) => a + m.temasObj.filter((t) => t.obj).length, 0);
      return `<a class="card" style="--c:${e.color}" href="${c.slug}/"><span class="mono">${c.nombre.replace(" años", "")}</span><span><b>${cursoNombre(e, c)}</b><small>${c.materias.length} materias</small>${listos ? `<span class="pill">${listos} temas listos</span>` : `<span class="pill soon">En preparación</span>`}</span></a>`;
    }).join("")}</div>
  </div></main>`;
  write(e.slug, page({ title: `${e.nombre} · ${SITE}`, desc: `Todos los cursos y materias de ${e.nombre}.`, depth: 1, body }));

  // ---------- curso ----------
  for (const c of e.cursos) {
    const groups = GRUPOS.map(([g, nombre]) => {
      const ms = c.materias.filter((m) => m.grupo === g);
      if (!ms.length) return "";
      return `<section class="group"><h2>${nombre}</h2><div class="grid">${ms.map((m) => {
        const listos = m.temasObj.filter((t) => t.obj).length;
        return `<a class="card" style="--c:${famColor(m)}" href="${m.slug}/"><span class="mono">${initials(m.nombre)}</span><span><b>${m.nombre}</b>${m.nota ? `<small>${m.nota}</small>` : ""}${listos ? `<span class="pill">${listos} de ${m.temas.length} temas listos</span>` : m.temas.length ? `<span class="pill soon">${m.temas.length} temas · próximamente</span>` : `<span class="pill soon">Próximamente</span>`}</span></a>`;
      }).join("")}</div></section>`;
    }).join("");
    const body = `<main><div class="wrap">
      <div class="crumbs"><a href="../../">Inicio</a> › <a href="../">${e.nombre}</a> › ${c.nombre}</div>
      <div class="page-h"><h1>${cursoNombre(e, c)}</h1><p>Elige una materia. Las optativas y el curso en que se imparte cada materia pueden variar según tu comunidad autónoma.</p></div>
      ${groups}<div style="height:32px"></div>
    </div></main>`;
    write(`${e.slug}/${c.slug}`, page({ title: `${cursoNombre(e, c)} · ${SITE}`, desc: `Todas las materias de ${cursoNombre(e, c)}.`, depth: 2, body }));

    // ---------- materia ----------
    for (const m of c.materias) {
      const list = m.temasObj.length
        ? `<ol class="topics">${m.temasObj.map((t) => t.obj
            ? `<li><a href="${slug(t.titulo)}/"><span>${t.titulo}</span><span class="pill">Listo</span></a></li>`
            : `<li><span class="t"><span>${t.titulo}</span><span class="pill soon">Próximamente</span></span></li>`).join("")}</ol>`
        : `<p class="notice">Estamos preparando los temas de esta materia según el currículo oficial. Muy pronto estarán aquí.</p>`;
      const body = `<main><div class="wrap">
        <div class="crumbs"><a href="../../../">Inicio</a> › <a href="../../">${e.nombre}</a> › <a href="../">${c.nombre}</a> › ${m.nombre}</div>
        <div class="page-h"><span class="badge" style="background:${famColor(m)}">${cursoNombre(e, c)}</span><h1>${m.nombre}</h1>${m.nota ? `<p>${m.nota}</p>` : ""}</div>
        ${examLinks(m)}${list}<div style="height:48px"></div>
      </div></main>`;
      write(m.url, page({ title: `${m.nombre} · ${cursoNombre(e, c)} · ${SITE}`, desc: `Temas de ${m.nombre} de ${cursoNombre(e, c)}.`, depth: 3, body }));

      // ---------- tema ----------
      trimestres(m).forEach((tr, i) => { if (tr.some((t) => t.obj)) write(`${m.url}examen-${i + 1}-trimestre`, examPage(e, c, m, tr, i + 1)); });
      m.temasObj.forEach((t, idx) => { if (t.obj) { write(t.url, topicPage(e, c, m, t.obj, idx + 1)); write(t.url + "ficha", fichaPage(e, c, m, t.obj, idx + 1)); } });
    }
  }
}

// ---------- exámenes por trimestre ----------
// Los temas se reparten en tres trimestres en el orden del currículo (un tercio cada uno).
function trimestres(m) {
  const n = m.temasObj.length, a = Math.ceil(n / 3), b = Math.ceil((n - a) / 2);
  return [m.temasObj.slice(0, a), m.temasObj.slice(a, a + b), m.temasObj.slice(a + b)];
}

function examLinks(m) {
  if (!m.temasObj.length) return "";
  return `<section class="exams"><h2>Exámenes de prueba</h2><div class="exam-row">${trimestres(m).map((tr, i) => {
    const ok = tr.filter((t) => t.obj).length;
    return ok ? `<a class="exam-card" href="examen-${i + 1}-trimestre/"><b>${ORD[i]} trimestre</b><small>${ok} de ${tr.length} temas · ${tr.filter((t) => t.obj).reduce((a, t) => a + t.obj.quiz.length + (t.obj.examen || []).length, 0)} preguntas</small></a>`
      : `<span class="exam-card soon"><b>${ORD[i]} trimestre</b><small>${tr.length} temas · próximamente</small></span>`;
  }).join("")}</div></section>`;
}
function examPage(e, c, m, tr, n) {
  const L = "ABCDEFG";
  const listos = tr.filter((t) => t.obj);
  const preg = listos.flatMap((t) => [...t.obj.quiz, ...(t.obj.examen || [])].map((q) => ({ ...q, tema: t.titulo, u: "../" + slug(t.titulo) + "/" })));
  const falta = tr.length - listos.length;
  const body = `<main class="ficha examen"><div class="wrap">
  <div class="crumbs noprint"><a href="../">← ${m.nombre}</a></div>
  <header class="ficha-h"><div><span class="badge" style="background:${famColor(m)}">${cursoNombre(e, c)} · ${m.nombre}</span><h1>Examen de prueba del ${ORD[n - 1]} trimestre</h1>
    <p class="caption">Temas: ${listos.map((t) => t.titulo).join(" · ")}.${falta ? ` Se añadirán ${falta} temas más cuando estén listos.` : ""}</p></div>
    <div class="ficha-name">Nombre: ______________________ &nbsp; Fecha: ___________ &nbsp; Nota: ______</div></header>
  <div class="ficha-tools noprint"><button type="button" id="ex-start" class="dl">Empezar (${preg.length} preguntas, ${Math.max(10, Math.round(preg.length * 1.5))} min)</button><button type="button" id="t-print">Imprimir o guardar en PDF</button><span class="timer" id="ex-timer" hidden></span></div>
  <section><ol class="fq" id="ex-list">${preg.map((q, i) => `<li data-i="${i}"><p>${q.q}</p><ol class="abc">${q.o.map((o, j) => `<li><label><input type="radio" name="p${i}" value="${j}"> <span>${L[j]})</span> ${o}</label></li>`).join("")}</ol><div class="fb" aria-live="polite"></div></li>`).join("")}</ol>
  <div class="noprint"><button type="button" id="ex-check" class="big">Corregir examen</button></div></section>
  <section id="ex-result" class="noprint" hidden></section>
  <section class="sol"><h2>Soluciones</h2><ol>${preg.map((q) => `<li><b>${L[q.a]})</b> ${q.e}</li>`).join("")}</ol></section>
  </div></main>`;
  const data = { id: `${c.slug}/${m.slug}/t${n}`, min: Math.max(10, Math.round(preg.length * 1.5)), p: preg.map(({ a, e, tema, u }) => ({ a, e, tema, u })) };
  return page({ title: `Examen ${ORD[n - 1]} trimestre · ${m.nombre} · ${cursoNombre(e, c)} · ${SITE}`, desc: `Examen de prueba de ${m.nombre}, ${cursoNombre(e, c)}, ${ORD[n - 1]} trimestre, con corrección y nota.`, depth: 4, body,
    scripts: `<script>window.EXAMEN=${JSON.stringify(data)};document.getElementById("t-print").addEventListener("click",()=>window.print());</script>` });
}

function fmtN(n) { return n >= 1e6 ? `${(n / 1e6).toLocaleString("es-ES", { maximumFractionDigits: 1 })} millones de` : n >= 1e3 ? `${Math.round(n / 1e3).toLocaleString("es-ES")} mil` : String(n); }
function videoHTML(v) {
  if (v.id) return `<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${v.id}" title="${esc(v.titulo)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p class="caption">Vídeo: ${esc(v.titulo)} · ${esc(v.canal)} (YouTube)${v.vistas ? ` · ${fmtN(v.vistas)} visualizaciones` : ""}${v.megusta ? ` · ${fmtN(v.megusta)} «me gusta»` : ""}</p>`;
  return `<a class="video" href="https://www.youtube.com/results?search_query=${encodeURIComponent(v.busqueda)}" target="_blank" rel="noopener"><div class="thumb"><span></span></div><div><b>Vídeos sobre este tema</b><small>Abre una búsqueda en YouTube mientras seleccionamos el mejor vídeo.</small></div></a>`;
}

// Ficha imprimible: explicación, esquema, preguntas sin respuesta y soluciones al final.
function fichaPage(e, c, m, T, n) {
  const L = "ABCDEFG";
  const body = `<main class="ficha"><div class="wrap">
  <div class="crumbs noprint"><a href="../">← Volver al tema</a></div>
  <div class="ficha-tools noprint"><a class="dl" href="ficha.pdf" download>Descargar PDF</a><button type="button" id="t-print">Imprimir</button><span class="caption">También puedes usar Ctrl + P (Cmd + P en Mac).</span></div>
  <header class="ficha-h"><div><span class="badge" style="background:${famColor(m)}">${cursoNombre(e, c)} · ${m.nombre} · Tema ${n}</span><h1>${T.titulo}</h1></div>
    <div class="ficha-name">Nombre: ______________________ &nbsp; Fecha: ___________</div></header>
  <section><h2>Qué vas a aprender</h2><ul>${T.objetivos.map((o) => `<li>${o}</li>`).join("")}</ul></section>
  <section><h2>Para pensar</h2><p class="question">${T.pregunta.texto}</p><div class="lines"></div></section>
  <section><h2>Explicación</h2>${T.bloques.map((b) => `<div class="chunk">${`<div>${b.html}</div>`}${b.svg}</div>`).join("")}</section>
  <section><h2>${T.figura.titulo}</h2><div class="figure">${T.figura.svg}</div></section>
  <section class="brk"><h2>Practica</h2><ol class="fq">${T.quiz.map((q) => `<li><p>${q.q}</p><ol class="abc">${q.o.map((o, j) => `<li><span>${L[j]})</span> ${o}</li>`).join("")}</ol></li>`).join("")}</ol></section>
  <section><h2>Explícalo con tus palabras</h2><p class="caption">Incluye: ${T.feynman.join("; ")}.</p><div class="lines tall"></div></section>
  <section><h2>Resumen</h2><div class="map">${T.mapa}</div></section>
  <section><h2>Tarjetas de repaso</h2><p class="caption">Recórtalas: pregunta delante, respuesta detrás.</p><div class="cut">${T.tarjetas.map(([q, a]) => `<div><b>${q}</b><span>${a}</span></div>`).join("")}</div></section>
  <section class="sol"><h2>Soluciones</h2><ol>${T.quiz.map((q) => `<li><b>${L[q.a]})</b> ${q.e}</li>`).join("")}</ol></section>
  </div></main>`;
  return page({ title: `Ficha: ${T.titulo} · ${SITE}`, desc: `Ficha imprimible de ${T.titulo}, ${cursoNombre(e, c)}.`, depth: 5, body, scripts: `<script>document.getElementById("t-print").addEventListener("click",()=>window.print());</script>` });
}

function topicPage(e, c, m, T, n) {
  const id = `${c.slug}-${m.slug}-${slug(T.titulo)}`;
  const color = famColor(m);
  const body = `<main><div class="wrap">
  <div class="crumbs"><a href="../../../../">Inicio</a> › <a href="../../../">${e.nombre}</a> › <a href="../../">${c.nombre}</a> › <a href="../">${m.nombre}</a> › Tema ${n}</div>
  <div class="topic-head">
    <div><span class="badge" style="background:${color}">${cursoNombre(e, c)} · ${m.nombre}</span><h1>${T.titulo}</h1>
      <div class="tools"><button type="button" id="t-proj" aria-pressed="false">Modo proyector</button><a class="toolbtn" href="ficha/">Ficha para imprimir</a></div></div>
    <nav class="steps" aria-label="Pasos del tema">${[1, 2, 3, 4, 5, 6].map((i) => `<a href="#p${i}" data-go="p${i}">${i}</a>`).join("")}</nav>
  </div>
  <div class="layout"><div>
    <section class="sec" id="p1"><div class="sec-h"><span class="n">1</span><h2>Pregunta de arranque<small>Piensa 30 segundos antes de seguir</small></h2></div>
      <p class="question">${T.pregunta.texto}</p>
      <div class="reveal"><p style="margin:0">Escribe o di en voz alta tu respuesta. Después <button type="button" id="rv">mira la solución</button>.</p><p id="rv-text" hidden style="margin:10px 0 0">${T.pregunta.respuesta}</p></div>
    </section>
    <section class="sec" id="p2"><div class="sec-h"><span class="n">2</span><h2>Aprende<small>${T.bloques.length} bloques cortos</small></h2></div>
      ${T.bloques.map((b) => `<div class="chunk"><div>${b.html}</div>${b.svg}</div>`).join("")}
      <h3 style="font-size:21px;margin-top:10px">${T.figura.titulo}</h3>
      <div class="figure">${T.figura.svg}</div><p class="caption">Esquema dibujado para Escolapedia. En el móvil, desliza a los lados.</p>
      ${videoHTML(T.video)}
    </section>
    <section class="sec" id="p3"><div class="sec-h"><span class="n">3</span><h2>Practica<small>Responde sin mirar arriba. Equivocarse aquí también enseña.</small></h2></div>
      <div class="quiz" id="quiz"></div><p class="score" id="score" aria-live="polite"></p>
    </section>
    <section class="sec" id="p4"><div class="sec-h"><span class="n">4</span><h2>Explícalo con tus palabras<small>Como si se lo contaras a alguien de un curso menor</small></h2></div>
      <label for="feyn" class="caption">Escribe aquí tu explicación. Se guarda en este navegador.</label>
      <textarea id="feyn" placeholder="Con mis palabras…"></textarea>
      <div class="check"><span class="caption">¿Has nombrado estas ideas?</span>${T.feynman.map((f, i) => `<label><input type="checkbox" id="c${i}"> ${f}</label>`).join("")}</div>
    </section>
    <section class="sec" id="p5"><div class="sec-h"><span class="n">5</span><h2>Resumen visual<small>Todo el tema en una pantalla</small></h2></div><div class="map">${T.mapa}</div></section>
    <section class="sec" id="p6"><div class="sec-h"><span class="n">6</span><h2>Tarjetas de repaso<small>Toca la tarjeta para darle la vuelta</small></h2></div>
      <div class="cards">
        <button class="flash" id="flash" type="button" aria-live="polite"><div class="in"><div class="face front"><small id="fc-count"></small><span id="fc-q"></span></div><div class="face back"><small>Respuesta</small><span id="fc-a"></span></div></div></button>
        <div class="grade"><button type="button" data-g="0" disabled>No me acordaba</button><button type="button" data-g="1" disabled>Me costó</button><button type="button" data-g="2" disabled>¡Fácil!</button></div>
        <p class="next" id="fc-next">Según cómo respondas, la tarjeta vuelve mañana, en 3, en 7 o en 21 días.</p>
      </div>
    </section>
    <section class="sec who" aria-label="Familias y profesores">
      ${T.familias ? `<div class="box"><h3>Para familias</h3><ul>${T.familias.map((x) => `<li>${x}</li>`).join("")}</ul></div>` : ""}
      ${T.profesores ? `<div class="box"><h3>Para profesores</h3><p style="margin:0 0 6px"><b>Saberes:</b> ${T.profesores.saberes}</p><ul>${T.profesores.ideas.map((x) => `<li>${x}</li>`).join("")}</ul></div>` : ""}
    </section>
    <section class="sec"><h2 style="font-size:20px;margin-bottom:8px">Fuentes y revisión</h2>
      <ul class="src">${T.fuentes.map((f) => `<li><a href="${f.url}" target="_blank" rel="noopener">${f.t}</a></li>`).join("")}</ul>
      <p class="caption">Revisado el ${new Date(T.revisado).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}.</p>
    </section>
  </div>
  <aside class="side">
    <div class="box"><h3>Qué vas a aprender</h3><ul>${T.objetivos.map((o) => `<li>${o}</li>`).join("")}</ul></div>
    <div class="box"><h3>Palabras clave</h3>${T.claves.join(" · ")}</div>
    <div class="box"><h3>Tiempo</h3>${T.minutos} minutos hoy + 2 minutos en cada repaso</div>
  </aside></div>
</div></main>`;
  const data = { id, quiz: T.quiz, tarjetas: T.tarjetas };
  return page({ title: `${T.titulo} · ${m.nombre} ${cursoNombre(e, c)} · ${SITE}`, desc: `${T.titulo}: explicación fácil con dibujos, vídeo, preguntas y tarjetas de repaso. ${cursoNombre(e, c)}.`, depth: 4, body, scripts: `<script>window.TEMA=${JSON.stringify(data)};</script>` });
}

// ---------- familias y profesores ----------
write("familias", page({ title: `Familias · ${SITE}`, desc: "Cómo ayudar a estudiar en casa con Escolapedia.", depth: 1, nav: "familias", body: `<main><div class="wrap" style="padding-bottom:48px">
  <div class="crumbs"><a href="../">Inicio</a> › Familias</div>
  <div class="page-h"><h1>Cómo ayudar en casa</h1><p>No hace falta saberse el temario. Lo que más ayuda es acompañar el método y dejar que vuestro hijo o hija explique lo que aprende.</p></div>
  <div class="who">
    <div class="box"><h3>Una rutina de 25 minutos</h3><ul><li>Leed juntos la pregunta de arranque y dejad que intente responder.</li><li>Que haga los pasos 2 y 3 solo; si falla una pregunta, que lea la explicación.</li><li>Pedidle que os explique el tema con sus palabras (paso 4). Si se atasca, ahí está lo que falta repasar.</li></ul></div>
    <div class="box"><h3>Dos minutos al día</h3><ul><li>Las tarjetas del paso 6 vuelven solas al día siguiente, a los 3, 7 y 21 días.</li><li>Repasar poco y a menudo fija mucho más que estudiar todo la víspera del examen.</li><li>El progreso se guarda en el navegador del dispositivo que use.</li></ul></div>
    <div class="box"><h3>En cada tema</h3><ul><li>Encontraréis un recuadro «Para familias» con ideas para practicar en la vida diaria.</li><li>Todos los temas indican sus fuentes y la fecha de revisión.</li></ul></div>
    <div class="box"><h3>Por qué funciona</h3><ul><li>Recuperar lo aprendido (preguntas y tarjetas) y espaciar los repasos son las dos técnicas de estudio con más evidencia científica (Dunlosky y otros, 2013).</li><li>Combinar texto corto y dibujo ayuda a entender y recordar.</li></ul></div>
  </div></div></main>` }));

write("profesores", page({ title: `Profesores · ${SITE}`, desc: "Recursos de Escolapedia para docentes.", depth: 1, nav: "profesores", body: `<main><div class="wrap" style="padding-bottom:48px">
  <div class="crumbs"><a href="../">Inicio</a> › Profesores</div>
  <div class="page-h"><h1>Para usar en clase</h1><p>Escolapedia es gratuita y sigue las enseñanzas mínimas de la LOMLOE. Podéis usarla para presentar un tema, para repasar o como tarea.</p></div>
  <div class="who">
    <div class="box"><h3>En cada tema</h3><ul><li><b>Modo proyector:</b> letra grande y sin columna lateral, para la pizarra digital.</li><li><b>Imprimir ficha:</b> explicación, preguntas y esquema en papel.</li><li><b>Para profesores:</b> saberes básicos del currículo e ideas de actividades.</li></ul></div>
    <div class="box"><h3>Currículo</h3><ul><li>Estructura según RD 95/2022, RD 157/2022, RD 217/2022 y RD 243/2022.</li><li>Incluye lenguas cooficiales, segunda lengua extranjera, optativas y Religión.</li><li>El reparto de materias por curso puede variar según la comunidad autónoma.</li></ul></div>
    <div class="box"><h3>Método</h3><ul><li>Seis pasos por tema: activación, explicación con doble codificación, recuperación, elaboración, síntesis y repaso espaciado.</li></ul></div>
    <div class="box"><h3>¿Ves un error?</h3><ul><li>Cada tema muestra sus fuentes y la fecha de revisión. Pronto habrá un formulario para proponer correcciones.</li></ul></div>
  </div></div></main>` }));

// ---------- recursos ----------
fs.mkdirSync(path.join(OUT, "assets"), { recursive: true });
for (const f of ["base.css", "extra.css", "app.js"]) fs.copyFileSync(path.join(__dirname, "src/assets", f), path.join(OUT, "assets", f));
fs.writeFileSync(path.join(OUT, "assets/indice.js"), `window.INDICE=${JSON.stringify(indice)};`);

console.log(`Hecho: ${ETAPAS.length} etapas, ${nMaterias} materias, ${nTemas} temas en lista, ${nListos} temas completos.`);
