// Ayudas para los temas de Tecnología e Ingeniería I (1º de Bachillerato) a nivel libro.
// Cada tema se escribe entero con tema({...}) y aquí se monta, se numera (1.1, 1.2, 2.1…) y se comprueba.
// Los dibujos de bloque (260 × 180) usan las ayudas de _eso4L11, que ajustan la letra para que no se salga.
const L = require("./_eso4L11");
const { F, D, mapa } = require("./_util");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };

// Figura resumen: 4 tarjetas [nombre, símbolo o fórmula, línea 1, línea 2].
function figura(aria, items) {
  return `<svg viewBox="0 0 640 220" role="img" aria-label="${aria}">
  <rect width="640" height="220" rx="16" fill="var(--paper)"/>
  ${items.map(([n, s, a, b], i) => { const x = 16 + i * 154, cx = x + 73, c = COL[i];
    return `<rect x="${x}" y="24" width="146" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
    ${L.tx(cx, 60, n, { fs: 16, maxW: 132, bold: true, color: c, font: D })}
    ${L.tx(cx, 106, s, { fs: 22, maxW: 132, bold: true, color: "var(--ink)" })}
    ${L.tx(cx, 146, a, { fs: 13, maxW: 134 })}${L.tx(cx, 166, b, { fs: 13, maxW: 134 })}`; }).join("")}
</svg>`;
}

const PRE = "overflow-x:auto;font-size:.9em;line-height:1.4;background:var(--paper);border:1px solid var(--line);padding:.6em .8em;border-radius:8px";
// Un texto con saltos de línea es código: se muestra en <pre> conservando la sangría.
const codigo = (s) => (typeof s === "string" && s.includes("\n") ? `<pre style="${PRE}">${s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>` : s);
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T = {
    materia: "Tecnología e Ingeniería I",
    curso: "1-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 110,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    lectura: o.lectura,
    bloques: o.bloques.map((b) => ({ html: `<h3>${b.h}</h3>${b.html}`, svg: b.svg, ...(b.video ? { video: { megusta: 0, ...b.video } } : {}) })),
    figura: { titulo: o.figura.titulo, svg: figura(o.figura.titulo, o.figura.items) },
    video: { megusta: 0, ...o.video },
    quiz: o.quiz.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    examen: o.examen.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--pen)", o.mapa[1].map(([t, d], i) => [t, d, COL[i]]), o.mapa[2] || 250),
    tarjetas: o.tarjetas,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado: codigo(resultado) })),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ q, sol: codigo(sol), nivel: NIV[n] }))),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: o.saberes, ideas: o.ideas },
    fuentes: [{ t: "Real Decreto 243/2022, enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" }, ...(o.fuentes || [])],
    revisado: o.revisado || "2026-11-14",
  };
  // Numeración 1.1, 1.2, 2.1…
  const sec = o.secciones;
  if (sec.reduce((a, b) => a + b, 0) !== T.bloques.length) throw new Error(`tema: secciones ${sec} no suman ${T.bloques.length} en «${T.titulo}»`);
  let k = 0;
  sec.forEach((n, s) => { for (let j = 1; j <= n; j++, k++) T.bloques[k].html = T.bloques[k].html.replace(/<h3>/, `<h3>${s + 1}.${j} `); });
  // Comprobaciones del formato «nivel libro».
  const av = [];
  const w = T.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 3000) av.push(`${w} palabras`);
  if (T.bloques.length < 10 || T.bloques.length > 16) av.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  const c = (n) => T.ejercicios.filter((e) => e.nivel === n).length;
  if (T.ejercicios.length < 30 || T.ejercicios.length > 40) av.push(`${T.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4 || q.a > 3)) av.push(`quiz ${T.quiz.length}`);
  if (T.examen.length !== 8 || T.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T.examen.length}`);
  if (T.tarjetas.length !== 12) av.push(`tarjetas ${T.tarjetas.length}`);
  if (T.ejemplos.length !== 6 || T.errores.length !== 6) av.push(`ejemplos ${T.ejemplos.length} errores ${T.errores.length}`);
  if (T.glosario.length < 12 || T.glosario.length > 20) av.push(`glosario ${T.glosario.length}`);
  const lw = strip(T.lectura.html).split(" ").length;
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T.titulo}: ${av.join(", ")}`);
  return T;
}

module.exports = { tema, figura, PRE, ...L, F, D };
