// Generador de Escolapedia: node build.js  →  crea la web estática en dist/
const fs = require("fs");
const path = require("path");
const { ETAPAS, FAM } = require("./src/curriculo");

const OUT = path.join(__dirname, process.env.PREVIEW ? "preview" : "dist");
const SITE = "Escolapedia";
const GA_ID = "G-DXYJCCJC31";
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

// Partes opcionales de un tema ampliado: ejemplos resueltos, errores típicos y ejercicios con solución.
const ejemplosHTML = (T) => (T.ejemplos || []).length ? `<div class="ejemplos"><h3>${T.ejemplosTitulo || "Ejemplos resueltos"}</h3>${T.ejemplos.map((x, i) => `<div class="ej"><p><b>${T.ejemplosTitulo ? "" : `Ejemplo ${i + 1}.`}</b> ${x.enunciado}</p><ol>${x.pasos.map((p) => `<li>${p}</li>`).join("")}</ol><p class="res"><b>Resultado:</b> ${x.resultado}</p></div>`).join("")}</div>` : "";
const erroresHTML = (T) => (T.errores || []).length ? `<div class="errores"><h3>Errores típicos</h3><ul>${T.errores.map((x) => `<li>${x}</li>`).join("")}</ul></div>` : "";
const ejLi = (x) => `<li><p>${x.q}</p><details><summary>Ver solución</summary><div>${x.sol}</div></details></li>`;
// Nivel libro: los ejercicios pueden llevar nivel (básico, medio, avanzado) y se agrupan.
const NIVELES = [["basico", "Nivel básico"], ["medio", "Nivel medio"], ["avanzado", "Nivel avanzado"]];
const nivelDe = (x) => (x.nivel || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const ejerciciosHTML = (T) => {
  const ej = T.ejercicios || [];
  if (!ej.length) return "";
  const head = `<div class="ejercicios"><h3>Ejercicios${ej.length > 12 ? ` (${ej.length})` : ""}</h3><p class="caption">Hazlos en tu cuaderno y después abre la solución.</p>`;
  if (!ej.some((x) => x.nivel)) return `${head}<ol>${ej.map(ejLi).join("")}</ol></div>`;
  let n = 0;
  return head + NIVELES.map(([k, t]) => { const xs = ej.filter((x) => nivelDe(x) === k); if (!xs.length) return ""; const start = n + 1; n += xs.length; return `<h4 class="nivel nivel-${k}">${t}</h4><ol start="${start}">${xs.map(ejLi).join("")}</ol>`; }).join("") + "</div>";
};
const lecturaHTML = (T) => T.lectura ? `<div class="lectura"><h3>Para empezar: ${T.lectura.titulo}</h3>${T.lectura.html}</div>` : "";
const glosarioHTML = (T) => (T.glosario || []).length ? `<div class="glosario"><h3>Glosario</h3><dl>${T.glosario.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join("")}</dl></div>` : "";
const situacionHTML = (T) => T.situacion ? `<section class="sec situacion"><div class="sec-h"><span class="n">★</span><h2>Situación de aprendizaje<small>${T.situacion.titulo}</small></h2></div>
  <p>${T.situacion.reto}</p>${(T.situacion.pasos || []).length ? `<h3>Pasos</h3><ol>${T.situacion.pasos.map((x) => `<li>${x}</li>`).join("")}</ol>` : ""}
  ${T.situacion.producto ? `<p><b>Producto final:</b> ${T.situacion.producto}</p>` : ""}${(T.situacion.evaluacion || []).length ? `<h3>Cómo se valora</h3><ul>${T.situacion.evaluacion.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}</section>` : "";
function page({ title, desc, depth, body, lang = "es", nav = "", extraHead = "", scripts = "", bodyClass = "" }) {
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
<body${bodyClass ? ` class="${bodyClass}"` : ""}>
<header class="bar"><div class="wrap">
  <a class="logo" href="${lang === "ca" ? r + "ca/" : r}" aria-label="${SITE}, ${t.inicio}">
    <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="5" width="26" height="22" rx="4" fill="var(--pen)"/><path d="M16 9v15M7 11h6M7 15h6M19 11h6M19 15h6M7 19h6M19 19h6" stroke="var(--card)" stroke-width="2" stroke-linecap="round"/></svg>
    <span>Escola<span>pedia</span></span></a>
  <nav class="nav" aria-label="Secciones">
    <a href="${r}familias/"${nav === "familias" ? ' class="on"' : ""}>${t.familias}</a>
    <a href="${r}profesores/"${nav === "profesores" ? ' class="on"' : ""}>${t.profesores}</a>
  </nav>
</div></header>
${body}
<footer class="foot"><div class="wrap">${SITE} · Todas las materias de Infantil a Bachillerato según la LOMLOE, curso ${CURSO_ESCOLAR}. Contenido gratuito, revisado con fuentes oficiales. Dibujos propios.<br><small>Escolapedia es un refuerzo: no sustituye al profesorado ni a los centros. <a href="${r}quien-esta-detras/">Quién está detrás</a> · <a href="${r}aviso-legal/">Aviso legal</a> · <a href="${r}privacidad/">Privacidad</a> · <a href="#" data-cookies>Cookies</a></small></div></footer>
<div class="cookies" id="cookies" hidden><p>Usamos Google Analytics para saber cuántas personas visitan Escolapedia. Solo se activa si lo aceptas. <a href="${r}privacidad/">Más información</a></p><div><button type="button" data-ck="no">Rechazar</button><button type="button" data-ck="si">Aceptar</button></div></div>
<script>(function(){var ID="${GA_ID}",K="ep-cookies",b=document.getElementById("cookies");function get(){try{return localStorage.getItem(K)}catch(e){return null}}function set(v){try{localStorage.setItem(K,v)}catch(e){}}function load(){if(window.gtag)return;window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",ID,{anonymize_ip:true});var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+ID;document.head.appendChild(s)}var v=get();if(v==="si")load();else if(v!=="no")b.hidden=false;b.addEventListener("click",function(e){var c=e.target.getAttribute("data-ck");if(!c)return;set(c);b.hidden=true;if(c==="si")load();else{document.cookie.split(";").forEach(function(x){var n=x.split("=")[0].trim();if(/^_ga/.test(n))document.cookie=n+"=;Max-Age=0;path=/;domain=."+location.hostname.replace(/^www\./,"")})}});document.querySelectorAll("[data-cookies]").forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();b.hidden=false})})})();</script>
<script>window.BASE=${JSON.stringify(r)};window.IDX=${JSON.stringify(process.env.PREVIEW ? "index.html" : "")};</script>
${scripts}
<script src="${r}assets/app.js"></script>
</body></html>`;
}

const PAGINAS = [];
function write(rel, html) {
  PAGINAS.push(rel);
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
// Un curso se marca en la portada cuando tiene al menos la mitad de sus temas listos.
const cursoListo = (c) => { let t = 0, l = 0; for (const m of c.materias) { t += m.temasObj.length; l += m.temasObj.filter((x) => x.obj).length; } return t > 0 && l * 2 >= t; };
const cursoNombre = (e, c) => c.largo || `Infantil, ${c.nombre}`;

// ---------- portada ----------
function stagesHTML(depth, lang) {
  const r = depth ? "../".repeat(depth) : "./";
  return ETAPAS.map((e) => `
    <div class="stage" style="--c:${e.color}">
      <div><h3><a href="${r}${e.slug}/" style="color:inherit;text-decoration:none">${e.nombre}</a></h3><small>${e.edad}</small></div>
      <div class="chips">${e.cursos.map((c) => `<a class="chip${cursoListo(c) ? " live" : ""}" href="${r}${e.slug}/${c.slug}/">${c.nombre}</a>`).join("")}${e.slug === "bachillerato" ? `<span class="chip" title="Próximamente">PAU</span>` : ""}</div>
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
    <p class="caption">${nMaterias} ${ca ? "matèries" : "materias"} · ${nListos} ${ca ? "temes complets" : "temas completos"} ${ca ? "i creixent" : "y creciendo"}. ${ca ? "Els cursos en color ja tenen els temes complets." : "Los cursos en color ya tienen sus temas completos; el resto, en preparación."}</p>
  </section>
</div></main>`;
  return page({ title: ca ? "Escolapedia: totes les matèries d'Infantil a Batxillerat" : "Escolapedia: todas las materias de Infantil a Bachillerato", desc: "Todas las materias de Infantil, Primaria, ESO y Bachillerato explicadas fácil, con vídeos, dibujos y un método de estudio eficaz.", depth, body, lang, scripts: `<script src="${r}assets/indice.js"></script>` });
}
write("", home("es"));

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
  // En la vista previa de Claude los iframes de YouTube están bloqueados: se muestra una tarjeta que abre el vídeo.
  if (v.id && process.env.PREVIEW) return `<a class="video" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener"><div class="thumb"><span></span></div><div><b>▶ ${esc(v.titulo)}</b><small>${esc(v.canal)} (YouTube)${v.vistas ? ` · ${fmtN(v.vistas)} visualizaciones` : ""}. En la web el vídeo se ve aquí mismo; en la vista previa se abre en YouTube.</small></div></a>`;
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
  ${(T.ejercicios || []).length ? `<section class="brk"><h2>Ejercicios</h2><ol class="fq">${T.ejercicios.map((x) => `<li><p>${x.q}</p><div class="lines"></div></li>`).join("")}</ol></section>` : ""}
  <section class="brk"><h2>Practica</h2><ol class="fq">${T.quiz.map((q) => `<li><p>${q.q}</p><ol class="abc">${q.o.map((o, j) => `<li><span>${L[j]})</span> ${o}</li>`).join("")}</ol></li>`).join("")}</ol></section>
  <section><h2>Explícalo con tus palabras</h2><p class="caption">Incluye: ${T.feynman.join("; ")}.</p><div class="lines tall"></div></section>
  <section><h2>Resumen</h2><div class="map">${T.mapa}</div>${glosarioHTML(T)}</section>
  <section><h2>Tarjetas de repaso</h2><p class="caption">Recórtalas: pregunta delante, respuesta detrás.</p><div class="cut">${T.tarjetas.map(([q, a]) => `<div><b>${q}</b><span>${a}</span></div>`).join("")}</div></section>
  <section class="sol"><h2>Soluciones</h2><ol>${T.quiz.map((q) => `<li><b>${L[q.a]})</b> ${q.e}</li>`).join("")}</ol></section>
  ${(T.ejercicios || []).length ? `<section class="sol"><h2>Soluciones de los ejercicios</h2><ol>${T.ejercicios.map((x) => `<li>${x.sol}</li>`).join("")}</ol></section>` : ""}
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
    <section class="sec" id="p2"><div class="sec-h"><span class="n">2</span><h2>Aprende<small>${T.lectura ? `${T.bloques.length} apartados` : `${T.bloques.length} bloques cortos`}</small></h2></div>
      ${lecturaHTML(T)}
      ${T.bloques.map((b) => `<div class="chunk">${b.svg ? `<div>${b.html}</div>${b.svg}` : `<div class="solo">${b.html}</div>`}</div>${b.video ? videoHTML(b.video) : ""}`).join("")}
      ${ejemplosHTML(T)}${erroresHTML(T)}
      <h3 style="font-size:21px;margin-top:10px">${T.figura.titulo}</h3>
      <div class="figure">${T.figura.svg}</div><p class="caption">Esquema dibujado para Escolapedia. En el móvil, desliza a los lados.</p>
      ${videoHTML(T.video)}
    </section>
    <section class="sec" id="p3"><div class="sec-h"><span class="n">3</span><h2>Practica<small>Responde sin mirar arriba. Equivocarse aquí también enseña.</small></h2></div>
      <div class="quiz" id="quiz"></div><p class="score" id="score" aria-live="polite"></p>
      ${ejerciciosHTML(T)}
    </section>
    <section class="sec" id="p4"><div class="sec-h"><span class="n">4</span><h2>Explícalo con tus palabras<small>Como si se lo contaras a alguien de un curso menor</small></h2></div>
      <label for="feyn" class="caption">Escribe aquí tu explicación. Se guarda en este navegador.</label>
      <textarea id="feyn" placeholder="Con mis palabras…"></textarea>
      <div class="check"><span class="caption">¿Has nombrado estas ideas?</span>${T.feynman.map((f, i) => `<label><input type="checkbox" id="c${i}"> ${f}</label>`).join("")}</div>
    </section>
    ${situacionHTML(T)}
    <section class="sec" id="p5"><div class="sec-h"><span class="n">5</span><h2>Resumen visual<small>Todo el tema en una pantalla</small></h2></div><div class="map">${T.mapa}</div>${glosarioHTML(T)}</section>
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
  return page({ bodyClass: /^([12]-primaria|[345]-anos)$/.test(c.slug) ? "peque" : "", title: `${T.titulo} · ${m.nombre} ${cursoNombre(e, c)} · ${SITE}`, desc: `${T.titulo}: explicación fácil con dibujos, vídeo, preguntas y tarjetas de repaso. ${cursoNombre(e, c)}.`, depth: 4, body, scripts: `<script>window.TEMA=${JSON.stringify(data)};</script>` });
}

// ---------- familias y profesores ----------
require("./src/recursos")({ ETAPAS, page, write, SITE, CURSO_ESCOLAR, cursoNombre, famColor, trimestres });

// ---------- quién está detrás, aviso legal y privacidad ----------
const TITULAR = "Alejandro Rosàs Navarro · NIF 35056148P · Calle Blaumar 19, bajos 1.ª, Sant Pere de Ribes (Barcelona) · partenopides@gmail.com";
const legalPage = (slugP, titulo, intro, html, desc) => write(slugP, page({ title: `${titulo} · ${SITE}`, desc, depth: 1, body: `<main><div class="wrap legal" style="padding-bottom:48px;max-width:820px">
  <div class="crumbs"><a href="../">Inicio</a> › ${titulo}</div>
  <div class="page-h"><h1>${titulo}</h1><p>${intro}</p></div>
  ${html}
</div></main>` }));

legalPage("quien-esta-detras", "Quién está detrás", "Escolapedia nace en casa, de muchos años acompañando a hijos e hijas en sus estudios.", `
  <div class="box"><h3>Alejandro Rosàs Navarro</h3>
  <p>Soy <b>médico de familia</b>, especialista en <b>Medicina Preventiva y Salud Pública</b>, con <b>más de 38 años de ejercicio profesional</b>. La prevención me ha enseñado que lo que más protege es llegar a tiempo: con la salud y también con los estudios.</p>
  <p>Soy <b>padre de cinco hijos</b> que han pasado por todas las etapas educativas, de Infantil a Bachillerato y la universidad, tanto en <b>colegios públicos como privados</b>. Cuatro de ellos son licenciados: <b>dos matemáticos, una bióloga y una biotecnóloga</b>. La pequeña tiene 15 años y cursa actualmente <b>4.º de ESO</b> en un instituto.</p>
  <p>Durante todos estos años he vivido de cerca lo que necesita un alumno cuando se pierde unas clases: alguien que le explique el tema con calma, ejemplos resueltos, ejercicios con solución y una forma sencilla de repasar. Escolapedia es eso, puesto a disposición de cualquier familia, gratis.</p></div>

  <div class="box aviso-fin"><h3>Qué es y qué no es Escolapedia</h3>
  <p><b>Escolapedia no pretende sustituir la labor del profesorado</b> ni la dinámica propia de cada colegio e instituto. Los docentes conocen a su alumnado, adaptan el ritmo y evalúan; eso no lo reemplaza ninguna web.</p>
  <p>Su objetivo es <b>reforzar y facilitar el acceso a los contenidos</b>, sobre todo cuando hay circunstancias que impiden o dificultan temporalmente la asistencia a clase: una enfermedad, una lesión, un ingreso hospitalario, un traslado, una situación familiar o cualquier otra ausencia. También sirve para repasar o para que las familias puedan acompañar el estudio en casa.</p>
  <p>Los temas siguen las enseñanzas mínimas de la LOMLOE (curso ${CURSO_ESCOLAR}). Cada centro y cada comunidad autónoma concreta su propio currículo, así que lo que diga el profesor o la profesora de tu clase es siempre la referencia.</p></div>

  <div class="box"><h3>Contacto</h3><p>Si ves un error o quieres proponer una mejora, escribe a <a href="mailto:partenopides@gmail.com">partenopides@gmail.com</a>.</p></div>`,
  "Quién hace Escolapedia y para qué sirve: un refuerzo gratuito que no sustituye al profesorado.");

legalPage("aviso-legal", "Aviso legal", "Información del titular y condiciones de uso.", `
  <div class="box"><h3>Titular</h3><p>${TITULAR}</p><p>Médico de familia, especialista en Medicina Preventiva y Salud Pública. Más información en <a href="../quien-esta-detras/">Quién está detrás</a>.</p></div>
  <div class="box"><h3>Qué es Escolapedia</h3><p>Escolapedia es una web educativa gratuita con contenidos de Infantil a Bachillerato organizados según la LOMLOE. Es un <b>material de refuerzo</b>: <b>no sustituye la labor del profesorado</b> ni la dinámica de los centros educativos, y no es un centro de enseñanza ni expide títulos o certificados. Su finalidad es facilitar el acceso a los contenidos cuando hay circunstancias que impiden o dificultan temporalmente la asistencia a clase, y servir de apoyo para repasar en casa.</p></div>
  <div class="box"><h3>Fuentes y contenidos</h3><p>Los temas se basan en los reales decretos de enseñanzas mínimas (RD 95/2022, RD 157/2022, RD 217/2022 y RD 243/2022) y en fuentes divulgativas indicadas en cada tema, con su fecha de revisión. Los textos, ejercicios y dibujos son de elaboración propia. Los vídeos se muestran incrustados desde YouTube y pertenecen a sus autores.</p></div>
  <div class="box"><h3>Responsabilidad</h3><p>Escolapedia revisa su contenido con regularidad, pero no garantiza que esté libre de errores ni que coincida con la programación concreta de cada centro. Ante cualquier duda, la referencia es siempre el profesorado de cada alumno.</p></div>
  <div class="box"><h3>Propiedad intelectual</h3><p>Puedes usar los materiales en casa y en el aula, imprimirlos y compartir los enlaces, siempre sin fines comerciales y citando la fuente.</p></div>`,
  "Aviso legal de Escolapedia: titular, finalidad y condiciones de uso.");

legalPage("privacidad", "Privacidad", "Escolapedia no te pide datos personales. Solo usa estadísticas de visitas si lo aceptas.", `
  <div class="box"><h3>Responsable</h3><p>${TITULAR}</p></div>
  <div class="box"><h3>Qué datos tratamos</h3><p>Ninguno que tú nos des: no hay registro, formularios ni boletines. El progreso de los temas y las tarjetas de repaso se guardan solo en tu navegador (almacenamiento local) y no se envían a ningún sitio. Puedes borrarlos limpiando los datos del sitio en tu navegador.</p></div>
  <div class="box"><h3>Estadísticas de visitas (cookies)</h3><p>Si lo aceptas en el aviso de cookies, usamos Google Analytics 4 (Google Ireland Ltd.) para contar visitas y saber qué páginas se usan más. Instala las cookies <code>_ga</code> y <code>_ga_*</code> (duración máxima de 2 años) y la dirección IP se anonimiza. Si lo rechazas, no se carga nada de Google Analytics. Puedes cambiar tu elección cuando quieras con el enlace «Cookies» del pie de página. Base jurídica: tu consentimiento.</p></div>
  <div class="box"><h3>Vídeos</h3><p>Los vídeos se cargan desde youtube-nocookie.com, el modo de privacidad mejorada de YouTube. Al reproducir un vídeo, YouTube puede tratar datos técnicos según su propia política.</p></div>
  <div class="box"><h3>Registros del servidor</h3><p>Como cualquier web, el servidor de alojamiento (Hostinger) registra datos técnicos de acceso, como la dirección IP, por seguridad. Hostinger actúa como encargado del tratamiento.</p></div>
  <div class="box"><h3>Tus derechos</h3><p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo al email del responsable, y reclamar ante la Agencia Española de Protección de Datos.</p></div>`,
  "Política de privacidad de Escolapedia.");

// ---------- recursos ----------
fs.mkdirSync(path.join(OUT, "assets"), { recursive: true });
for (const f of ["base.css", "extra.css", "app.js"]) fs.copyFileSync(path.join(__dirname, "src/assets", f), path.join(OUT, "assets", f));
fs.writeFileSync(path.join(OUT, "assets/indice.js"), `window.INDICE=${JSON.stringify(indice)};`);

// ---------- sitemap.xml y robots.txt (se rehacen en cada publicación) ----------
const SITIO = "https://escolapedia.com";
const urls = [...new Set(PAGINAS.map((r) => r.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "")))]
  .filter((r) => !/(^|\/)ficha$/.test(r))
  .sort()
  .map((r) => `<url><loc>${SITIO}/${r ? r + "/" : ""}</loc></url>`);
fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITIO}/sitemap.xml\n`);

console.log(`Hecho: ${ETAPAS.length} etapas, ${nMaterias} materias, ${nTemas} temas en lista, ${nListos} temas completos.`);
