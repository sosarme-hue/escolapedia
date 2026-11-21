// Ayudas para Biología de 2º de Bachillerato (nivel libro). Mismo montaje que Biología de 1º (_bach1-byg.js):
// tema({...}) numera los apartados (1.1, 1.2, 2.1…), monta figura, mapa y ejercicios por niveles y comprueba el formato.
// Dibujos de bloque de 260 × 180: genéricos de _eso4L5 y _eso4L6, de biología de _bach1-byg y propios de aquí.
const BYG = require("./_bach1-byg");
const { L5, L6, T, fit, marco, multi, uid } = BYG;
const { mapa, flecha, F, D } = require("./_util");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };

const VID = require("./_bach2-bio-videos");
const V = (k, titulo) => {
  if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`);
  const { id, canal, vistas, q } = VID[k];
  return { id, canal, vistas, titulo, megusta: 0, busqueda: q };
};

// ---------- Dibujos propios ----------

// Hexágono (anillo de piranosa) con vértices rotulados opcionales.
function anillo(cx, cy, r, c = "var(--pen)", rot = []) {
  const p = Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 3) * i - Math.PI / 6; return [cx + r * Math.cos(a), cy + r * Math.sin(a) * 0.62]; });
  return `<polygon points="${p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ")}" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-width="2.4"/>${rot.map(([i, t]) => T(p[i][0].toFixed(1), (p[i][1] + 4).toFixed(1), t, { fs: 10, b: true, c })).join("")}`;
}

// Fosfolípido: cabeza (círculo) y dos colas en zigzag. dir = 1 colas hacia abajo, −1 hacia arriba.
function fosfo(x, y, dir = 1, c = "var(--red)", s = 1) {
  const cola = (dx) => { let d = `M${x + dx} ${y + dir * 6 * s}`; for (let i = 1; i <= 5; i++) d += ` L ${x + dx + (i % 2 ? 2.5 : -2.5) * s} ${y + dir * (6 + i * 5) * s}`; return `<path d="${d}" fill="none" stroke="var(--sun)" stroke-width="${1.6 * s}"/>`; };
  return `${cola(-2.6 * s)}${cola(2.6 * s)}<circle cx="${x}" cy="${y}" r="${5.5 * s}" fill="${c}"/>`;
}

// Bicapa: fila de fosfolípidos en dos capas entre x0 y x1 con la cara superior en y.
function bicapa(x0, x1, y, paso = 13, s = 1) {
  let o = "";
  for (let x = x0; x <= x1; x += paso) o += fosfo(x, y, 1, "var(--red)", s) + fosfo(x, y + 66 * s, -1, "var(--red)", s);
  return o;
}

// Gráfica de curvas con ejes rotulados (reexporta graf de _eso4L5).
const graf = L5.graf;

// Molécula de agua con sus cargas parciales en (x, y).
function agua(x, y, s = 1, ang = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${ang}) scale(${s})"><circle cx="0" cy="0" r="12" fill="var(--red)" fill-opacity=".85"/><circle cx="-11" cy="10" r="7" fill="var(--water)" stroke="var(--pen)" stroke-width="1"/><circle cx="11" cy="10" r="7" fill="var(--water)" stroke="var(--pen)" stroke-width="1"/>
  <text x="0" y="-15" text-anchor="middle" font-size="9" font-weight="700" fill="var(--red)" ${F}>δ−</text><text x="-14" y="27" text-anchor="middle" font-size="9" font-weight="700" fill="var(--pen)" ${F}>δ+</text><text x="14" y="27" text-anchor="middle" font-size="9" font-weight="700" fill="var(--pen)" ${F}>δ+</text></g>`;
}

// ---------- Figura resumen y montaje del tema ----------

function figura(aria, items) {
  const tx = (x, y, s, fs, maxW, b, c) => T(x, y, s, { fs: fit(s, maxW, fs, b), b, c });
  return `<svg viewBox="0 0 640 220" role="img" aria-label="${aria}">
  <rect width="640" height="220" rx="16" fill="var(--paper)"/>
  ${items.map(([n, s, a, b], i) => { const x = 16 + i * 154, cx = x + 73, c = COL[i];
    return `<rect x="${x}" y="24" width="146" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
    ${tx(cx, 60, n, 16, 132, true, c)}${tx(cx, 104, s, 19, 132, true, "var(--ink)")}${tx(cx, 144, a, 13, 134, false, "var(--ink)")}${tx(cx, 164, b, 13, 134, false, "var(--ink)")}`; }).join("")}
</svg>`;
}

const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const PROFE = "Saberes básicos de Biología de 2º de Bachillerato (RD 243/2022, BOE-A-2022-5521; Decret 171/2022 de Catalunya)";
const FUENTE_RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const FUENTE_CAT = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };
const PAU = { t: "Modelos y exámenes de Biología de la PAU (CRUE y universidades)", url: "https://www.crue.org/" };

function tema(o) {
  const T_ = {
    materia: "Biología",
    curso: "2-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 120,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    lectura: o.lectura,
    bloques: o.bloques.map((b) => ({ html: `<h3>${b.h}</h3>${b.p.map((x) => `<p>${x}</p>`).join("")}${b.extra || ""}`, svg: b.svg, ...(b.v ? { video: V(b.v[0], b.v[1]) } : {}) })),
    figura: { titulo: o.figura.titulo, svg: figura(o.figura.titulo, o.figura.items) },
    video: V(o.video[0], o.video[1]),
    quiz: o.quiz.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    examen: o.examen.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--pen)", o.mapa[1].map(([t, d], i) => [t, d, COL[i]]), o.mapa[2] || 250),
    tarjetas: o.tarjetas,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ q, sol, nivel: NIV[n] }))),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: `${PROFE}: ${o.saberes}`, ideas: o.ideas },
    fuentes: [FUENTE_RD, FUENTE_CAT, PAU, ...(o.fuentes || [])],
    revisado: o.revisado || "2026-11-21",
  };
  const sec = o.secciones;
  if (sec.reduce((a, b) => a + b, 0) !== T_.bloques.length) throw new Error(`tema: secciones ${sec} no suman ${T_.bloques.length} en «${T_.titulo}»`);
  let k = 0;
  sec.forEach((n, s) => { for (let j = 1; j <= n; j++, k++) T_.bloques[k].html = T_.bloques[k].html.replace(/<h3>/, `<h3>${s + 1}.${j} `); });
  const av = [];
  const w = T_.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 3200) av.push(`${w} palabras`);
  if (T_.bloques.length < 10 || T_.bloques.length > 14) av.push(`${T_.bloques.length} bloques`);
  if (T_.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  const c = (n) => T_.ejercicios.filter((e) => e.nivel === n).length;
  if (T_.ejercicios.length < 30) av.push(`${T_.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T_.quiz.length !== 20 || T_.quiz.some((q) => q.o.length !== 4 || q.a > 3)) av.push(`quiz ${T_.quiz.length}`);
  if (T_.examen.length !== 8 || T_.examen.some((q) => q.o.length !== 4 || q.a > 3)) av.push(`examen ${T_.examen.length}`);
  if (T_.tarjetas.length !== 12) av.push(`tarjetas ${T_.tarjetas.length}`);
  if (T_.ejemplos.length !== 6 || T_.errores.length !== 6) av.push(`ejemplos ${T_.ejemplos.length} errores ${T_.errores.length}`);
  if (T_.glosario.length < 14 || T_.glosario.length > 18) av.push(`glosario ${T_.glosario.length}`);
  if (T_.objetivos.length !== 6) av.push(`objetivos ${T_.objetivos.length}`);
  if (T_.situacion.pasos.length < 4 || T_.situacion.pasos.length > 6 || T_.situacion.evaluacion.length < 3 || T_.situacion.evaluacion.length > 4) av.push("situación");
  const lw = strip(T_.lectura.html).split(" ").length;
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { ...BYG, tema, V, L5, L6, T, fit, marco, multi, uid, mapa, flecha, F, D, anillo, fosfo, bicapa, graf, agua };
