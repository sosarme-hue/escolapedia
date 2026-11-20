// Ayudas para los temas de Cultura Audiovisual (1º de Bachillerato, modalidad de Artes).
// Formato «esencial»: lo fundamental, claro y bien ordenado, sin la extensión de un tema nivel libro.
// Reutiliza el montaje y los dibujos de _bach1L41 (Dibujo Artístico I) y añade dibujos propios del lenguaje audiovisual.
const B = require("./_bach1L41");
const { mapa } = require("./_util");
const { marco, t, ln, rc, ci, el, pa, trazo } = B;

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T = {
    materia: "Cultura Audiovisual",
    curso: "1-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 60,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    lectura: o.lectura,
    bloques: o.bloques.map((b) => ({ html: `<h3>${b.h}</h3>${b.html}`, svg: b.svg, ...(b.video ? { video: { megusta: 0, ...b.video } } : {}) })),
    figura: { titulo: o.figura.titulo, svg: B.figura(o.figura.titulo, o.figura.items) },
    video: { megusta: 0, ...o.video },
    quiz: o.quiz.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    examen: o.examen.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--pen)", o.mapa[1].map(([tt, d], i) => [tt, d, COL[i]]), o.mapa[2] || 250),
    tarjetas: o.tarjetas,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ q, sol, nivel: NIV[n] }))),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: o.saberes, ideas: o.ideas },
    fuentes: [{ t: "Real Decreto 243/2022, enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" }, ...(o.fuentes || [])],
    revisado: o.revisado || "2026-11-21",
  };
  const sec = o.secciones;
  if (sec.reduce((a, b) => a + b, 0) !== T.bloques.length) throw new Error(`tema: secciones ${sec} no suman ${T.bloques.length} en «${T.titulo}»`);
  let k = 0;
  sec.forEach((n, s) => { for (let j = 1; j <= n; j++, k++) T.bloques[k].html = T.bloques[k].html.replace(/<h3>/, `<h3>${s + 1}.${j} `); });
  // Comprobaciones del formato esencial.
  const av = [];
  const w = T.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 700 || w > 1500) av.push(`${w} palabras`);
  if (T.bloques.length < 7 || T.bloques.length > 9) av.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  if (T.ejercicios.length < 10 || T.ejercicios.length > 14) av.push(`${T.ejercicios.length} ejercicios`);
  if (T.quiz.length !== 10 || T.quiz.some((q) => q.o.length !== 4 || q.a > 3)) av.push(`quiz ${T.quiz.length}`);
  if (T.examen.length !== 5 || T.examen.some((q) => q.o.length !== 4 || q.a > 3)) av.push(`examen ${T.examen.length}`);
  if (T.tarjetas.length !== 8) av.push(`tarjetas ${T.tarjetas.length}`);
  if (T.ejemplos.length !== 3 || T.errores.length !== 4) av.push(`ejemplos ${T.ejemplos.length} errores ${T.errores.length}`);
  if (T.glosario.length < 8 || T.glosario.length > 12) av.push(`glosario ${T.glosario.length}`);
  const lw = strip(T.lectura.html).split(" ").length;
  if (lw < 90 || lw > 200) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[esencial] ${T.titulo}: ${av.join(", ")}`);
  return T;
}

// ---------- Dibujos propios del lenguaje audiovisual (260 × 180) ----------

// Escala de planos: una figura recortada por encuadres cada vez más cerrados.
function planos(aria) {
  const P = [["general", 1], ["entero", 0.86], ["americano", 0.62], ["medio", 0.44], ["primer plano", 0.22], ["detalle", 0.1]];
  const fig = (cx, top, h) => `${ci(cx, top + h * 0.09, h * 0.08, 'fill="var(--pen)"')}${pa(`M${cx - h * 0.13} ${top + h * 0.2} H${cx + h * 0.13} L${cx + h * 0.1} ${top + h * 0.55} L${cx + h * 0.08} ${top + h} H${cx + h * 0.02} L${cx} ${top + h * 0.6} L${cx - h * 0.02} ${top + h} H${cx - h * 0.08} L${cx - h * 0.1} ${top + h * 0.55}Z`, 'fill="var(--pen)" fill-opacity=".8"')}`;
  return marco(aria, P.map(([n, f], i) => {
    const x = 8 + (i % 3) * 84, y = 10 + Math.floor(i / 3) * 86, w = 76, h = 62;
    const H = (h * 0.9) / f, top = y + 6;
    return `<clipPath id="pl${i}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5"/></clipPath>${rc(x, y, w, h, 'fill="var(--card)" stroke="var(--ink)" stroke-width="1.6" rx="5"')}
      <g clip-path="url(#pl${i})">${i === 0 ? `${ln(x, y + 52, x + w, y + 52, "var(--leaf)", 2)}${pa(`M${x + 6} ${y + 52} l10 -16 l10 16z`, 'fill="var(--leaf)"')}` : ""}${fig(x + w / 2, top, H)}</g>
      ${t(x + w / 2, y + h + 13, n, { fs: 10, bold: 1, maxW: 80 })}`;
  }).join(""));
}

// Ángulos de cámara: picado, normal y contrapicado.
function angulos(aria) {
  const cam = (x, y, r, c) => `<g transform="translate(${x} ${y}) rotate(${r})">${rc(-12, -7, 20, 14, `fill="${c}" rx="3"`)}${pa("M8 -5 L18 -9 V9 L8 5Z", `fill="${c}"`)}</g>`;
  return marco(aria, `${ln(10, 150, 250, 150, "var(--line)", 2)}${ci(176, 94, 9, 'fill="var(--ink)"')}${rc(170, 104, 12, 46, 'fill="var(--ink)" rx="4"')}
    ${cam(70, 34, 30, "var(--red)")}${ln(86, 44, 168, 92, "var(--red)", 1.4, 'stroke-dasharray="4 3"')}${t(50, 20, "picado", { bold: 1, color: "var(--red)" })}${t(50, 60, "empequeñece", { fs: 9.5, color: "var(--muted)" })}
    ${cam(56, 100, 0, "var(--pen)")}${ln(74, 100, 166, 100, "var(--pen)", 1.4, 'stroke-dasharray="4 3"')}${t(40, 86, "normal", { bold: 1, color: "var(--pen)" })}
    ${cam(70, 156, -28, "var(--leaf)")}${ln(86, 148, 168, 112, "var(--leaf)", 1.4, 'stroke-dasharray="4 3"')}${t(50, 174, "contrapicado: engrandece", { bold: 1, color: "var(--leaf)", maxW: 150 })}`);
}

// Una página de cómic: viñetas, bocadillo, cartela y onomatopeya.
function pagina(aria) {
  return marco(aria, `${rc(14, 12, 112, 72, 'fill="var(--card)" stroke="var(--ink)" stroke-width="2"')}${rc(134, 12, 112, 72, 'fill="var(--card)" stroke="var(--ink)" stroke-width="2"')}${rc(14, 92, 232, 76, 'fill="var(--card)" stroke="var(--ink)" stroke-width="2"')}
    ${rc(18, 16, 70, 14, 'fill="var(--sun)" fill-opacity=".5"')}${t(53, 26, "cartela", { fs: 9, maxW: 66 })}
    ${ci(46, 64, 9, 'fill="var(--pen)"')}${el(84, 46, 30, 12, 'fill="#fff" stroke="var(--ink)"')}${pa("M66 54 L54 60 L72 56", 'fill="#fff" stroke="var(--ink)"')}${t(84, 49, "bocadillo", { fs: 9, maxW: 54 })}
    ${ci(190, 58, 10, 'fill="var(--red)"')}${pa("M140 40 L156 34 M140 54 L160 54 M140 68 L156 74", trazo("var(--muted)", 1.5))}${t(150, 30, "líneas cinéticas", { fs: 8.5, maxW: 60, anchor: "start", color: "var(--muted)" })}
    ${t(130, 136, "¡CRASH!", { fs: 22, bold: 1, color: "var(--red)", maxW: 120 })}${t(130, 158, "onomatopeya", { fs: 9.5, color: "var(--muted)" })}
    ${t(126, 88, "calle", { fs: 8, color: "var(--muted)", maxW: 30 })}`);
}

// Línea del tiempo horizontal: hitos [año, texto].
function cronologia(aria, hitos, titulo = "") {
  const n = hitos.length, x0 = 22, x1 = 238, top = titulo ? 26 : 0;
  return marco(aria, (titulo ? t(130, 20, titulo, { fs: 12.5, bold: 1, maxW: 236 }) : "") + ln(x0, 92 + top / 2, x1, 92 + top / 2, "var(--ink)", 2.5) +
    hitos.map(([a, s], i) => { const x = x0 + (i * (x1 - x0)) / (n - 1), y = 92 + top / 2, arriba = i % 2 === 0, c = COL[i % 4];
      return `${ci(x, y, 5.5, `fill="${c}"`)}${t(x, arriba ? y - 14 : y + 22, a, { fs: 11, bold: 1, color: c, maxW: 60 })}${t(x, arriba ? y - 30 : y + 37, s, { fs: 9, maxW: Math.min(70, 440 / n) })}`; }).join(""));
}

// Esquema de la comunicación: emisor, mensaje, canal, receptor.
function comunicacion(aria, items = ["Emisor", "Mensaje", "Canal", "Receptor"], abajo = "código compartido y contexto") {
  return marco(aria, items.map((s, i) => { const x = 10 + i * 62, c = COL[i % 4];
    return `${rc(x, 60, 54, 40, `fill="var(--card)" stroke="${c}" stroke-width="2.4" rx="8"`)}${t(x + 27, 84, s, { fs: 10, bold: 1, color: c, maxW: 50 })}${i < items.length - 1 ? pa(`M${x + 55} 80 h6 l-3 -3 m3 3 l-3 3`, trazo("var(--muted)", 1.6)) : ""}`; }).join("") +
    t(130, 132, abajo, { fs: 10.5, maxW: 230, color: "var(--muted)" }) + pa("M30 112 Q130 150 230 112", trazo("var(--line)", 1.5) + ' stroke-dasharray="4 3"'));
}

module.exports = { ...B, tema, planos, angulos, pagina, cronologia, comunicacion };
