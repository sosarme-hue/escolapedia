// Ayudas de Técnicas de Expresión Gráfico-Plástica de 2º de Bachillerato (tema ampliado, más ligero que el nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Dibujos de 260 × 180 de _eso4L4 (texto partido en líneas) y algunos propios de taller: escala de valores, muestras de color, capas y matrices de grabado.
const h = require("./_bach1-hmc");
const { txt, marco, partir } = require("./_eso4L4");
const { linea, cajas, flujo, barras, versus, piramide, rueda, cuadro, crono, fig, QS, EX, MAPA, SIT, RD, DC, WIKI } = h;

const VID = require("./_bach2-tegp-videos");
const V = (k, titulo) => {
  if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`);
  const { id, canal, vistas, q } = VID[k];
  return { id, canal, vistas, titulo, megusta: 0, busqueda: q };
};

const SABER = {
  A: "«A. Aspectos generales»",
  B: "«B. Técnicas de dibujo»",
  C: "«C. Técnicas de pintura»",
  D: "«D. Técnicas de grabado y estampación»",
  E: "«E. Técnicas mixtas y alternativas»",
  F: "«F. Proyectos gráfico-plásticos»",
};
const PROFE = (b, s) => `Saberes básicos de Técnicas de Expresión Gráfico-Plástica de 2º de Bachillerato (RD 243/2022, BOE-A-2022-5521), bloque ${SABER[b]}: ${s} En Cataluña, Decret 171/2022, Tècniques d'Expressió Graficoplàstica.`;

// Ficha de una obra: título, autor, año y técnica.
const OBRA = (t, a, f) => `<p class="caption" style="margin:6px 0 0;padding:6px 10px;border:1px dashed var(--line);border-radius:6px">🖼 <b>${t}</b> · ${a}${f ? ` · ${f}` : ""}</p>`;
// Truco de taller.
const TRUCO = (t) => `<p class="caption" style="margin:8px 0 0;padding:6px 10px;border-left:4px solid var(--sun);background:var(--paper);border-radius:6px">🖌 <b>En el taller:</b> ${t}</p>`;

const nl = (t) => (t ? partir(t, Math.floor(236 / (12 * 0.56))).length : 0);
const tit = (t) => (t ? txt(t, 130, 9 + 7 * nl(t), 236, 12, 'font-weight="700"') : "");

// Escala de valores: n pasos de blanco a negro con etiquetas debajo (2 a 9).
function escala(t, etiquetas) {
  const n = etiquetas.length, W = 232 / n;
  const body = etiquetas.map((e, i) => {
    const v = Math.round(255 - (i * 235) / Math.max(1, n - 1)), x = 14 + i * W;
    return `<rect x="${x.toFixed(1)}" y="40" width="${(W - 2).toFixed(1)}" height="70" fill="rgb(${v},${v},${v})" stroke="var(--line)"/>` + txt(e, x + W / 2, 128, W + 4, n > 6 ? 8 : 9);
  }).join("");
  return marco(`${t}: ${etiquetas.join(", ")}`, tit(t) + body + `<path d="M14 154 H 246" stroke="var(--muted)" stroke-width="1.5"/>` + txt("luz", 24, 166, 40, 9, 'fill="var(--muted)"') + txt("sombra", 230, 166, 50, 9, 'fill="var(--muted)"'));
}

// Muestras de color: [[nombre, color css, nota], ...] (2 a 8).
function muestras(t, items) {
  const n = items.length, cols = n <= 4 ? n : Math.ceil(n / 2), rows = Math.ceil(n / cols), W = 236 / cols, top = 16 + 14 * nl(t), H = (176 - top - 8 * (rows - 1)) / rows;
  const body = items.map(([a, c, b], i) => {
    const la = partir(a, Math.floor((W - 4) / (9.5 * 0.56))).length;
    const x = 12 + (i % cols) * W, y = top + Math.floor(i / cols) * (H + 8), s = Math.min(W - 18, H - 22 - la * 11);
    return `<rect x="${(x + (W - s) / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${s.toFixed(1)}" height="${s.toFixed(1)}" rx="6" fill="${c}" stroke="var(--line)"/>`
      + txt(a, x + W / 2, y + s + 5 + la * 5.5, W - 4, 9.5, 'font-weight="700"') + (b ? txt(b, x + W / 2, y + s + 10 + la * 11, W - 4, 8, 'fill="var(--muted)"') : "");
  }).join("");
  return marco(`${t}: ${items.map((x) => x[0]).join(", ")}`, tit(t) + body);
}

// Capas de una obra, de abajo (soporte) arriba: [[nombre, nota], ...] (2 a 6).
const CAPA = ["#d6c3a1", "#f4efe4", "#c9a66b", "#7aa6c2", "#d9822b", "#e7e2a8"];
function capas(t, cs) {
  const n = cs.length, H = Math.min(28, 130 / n), y0 = 168;
  const body = cs.map(([a, b], i) => {
    const y = y0 - (i + 1) * H, ind = i * 6;
    return `<rect x="${20 + ind}" y="${y.toFixed(1)}" width="${120 - ind}" height="${(H - 2).toFixed(1)}" rx="3" fill="${CAPA[i % CAPA.length]}" stroke="var(--ink)" stroke-width="1"/>`
      + txt(a, 80 + ind / 2, y + H / 2 - 1, 112 - ind, 9, 'font-weight="700"') + txt(b || "", 196, y + H / 2 - 1, 104, 8.5, 'fill="var(--muted)"');
  }).join("");
  return marco(`${t}: ${cs.map((c) => c[0]).join(", ")}`, tit(t) + body);
}

// Las tres matrices de grabado vistas de perfil: relieve, hueco y plano.
function matrices(t = "Dónde está la tinta") {
  const tinta = "var(--ink)", placa = "#c9a66b";
  const rel = `<path d="M12 120 V 96 H 22 V 84 H 34 V 96 H 46 V 84 H 58 V 96 H 72 V 120 Z" fill="${placa}" stroke="var(--ink)"/><rect x="22" y="80" width="12" height="4" fill="${tinta}"/><rect x="46" y="80" width="12" height="4" fill="${tinta}"/>`;
  const hue = `<path d="M96 120 V 84 H 106 L 110 96 L 114 84 H 130 L 134 96 L 138 84 H 156 V 120 Z" fill="#c8c8c8" stroke="var(--ink)"/><path d="M106.5 85 L110 95 L113.5 85 Z M130.5 85 L134 95 L137.5 85 Z" fill="${tinta}"/>`;
  const pla = `<rect x="180" y="84" width="64" height="36" fill="#dcd6cc" stroke="var(--ink)"/><rect x="186" y="81" width="18" height="3" fill="${tinta}"/><rect x="218" y="81" width="14" height="3" fill="${tinta}"/>`;
  return marco("Matrices de grabado de perfil: en relieve la tinta está en lo que sobresale; en hueco, dentro de los surcos; en plano, en zonas químicamente preparadas a la misma altura",
    tit(t) + rel + hue + pla
    + txt("Relieve", 42, 136, 70, 11, 'font-weight="700" fill="var(--pen)"') + txt("xilografía, linóleo", 42, 156, 80, 8.5, 'fill="var(--muted)"')
    + txt("Hueco", 126, 136, 70, 11, 'font-weight="700" fill="var(--red)"') + txt("calcografía", 126, 156, 80, 8.5, 'fill="var(--muted)"')
    + txt("Plano", 212, 136, 70, 11, 'font-weight="700" fill="var(--leaf)"') + txt("litografía, serigrafía", 212, 156, 80, 8.5, 'fill="var(--muted)"')
    + txt("Perfil de la matriz entintada", 130, 50, 236, 9.5, 'fill="var(--muted)"'));
}

const COL = ["var(--leaf)", "var(--pen)", "var(--red)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T_ = {
    materia: "Técnicas de Expresión Gráfico-Plástica",
    curso: "2-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 60,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    bloques: o.bloques.map((b) => ({ html: `<h3>${b.h}</h3>${b.p.map((x) => `<p>${x}</p>`).join("")}${b.extra || ""}`, svg: b.svg, ...(b.v ? { video: V(b.v[0], b.v[1]) } : {}) })),
    figura: fig(o.figura.titulo, o.figura.aria || o.figura.titulo, o.figura.cols.map(([cab, ls], i) => [cab, ls, COL[i % 4]])),
    video: V(o.video[0], o.video[1]),
    quiz: QS(o.quiz, 1),
    examen: QS(o.examen, 5),
    feynman: o.feynman,
    mapa: MAPA(o.mapa[0], o.mapa[1]),
    tarjetas: o.tarjetas,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => EX(enunciado, pasos, resultado)),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => (o.ejercicios[n] || []).map(([q, sol]) => ({ q, sol, nivel: NIV[n] }))),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: PROFE(o.bloque, o.saberes), ideas: o.ideas },
    fuentes: [RD, DC, ...(o.fuentes || [])],
    revisado: o.revisado || "2026-11-21",
  };
  // Comprobaciones del formato ligero (avisos, no errores).
  const av = [];
  const w = T_.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 850 || w > 1700) av.push(`${w} palabras`);
  if (T_.bloques.length < 8 || T_.bloques.length > 10) av.push(`${T_.bloques.length} bloques`);
  if (T_.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  if (T_.ejercicios.length < 10 || T_.ejercicios.length > 14) av.push(`${T_.ejercicios.length} ejercicios`);
  if (T_.quiz.length !== 10 || T_.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T_.quiz.length}`);
  if (T_.examen.length !== 4 || T_.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T_.examen.length}`);
  if (T_.tarjetas.length !== 8) av.push(`tarjetas ${T_.tarjetas.length}`);
  if (T_.ejemplos.length !== 3 || T_.errores.length < 4 || T_.errores.length > 5) av.push(`ejemplos ${T_.ejemplos.length} errores ${T_.errores.length}`);
  if (T_.glosario.length < 8 || T_.glosario.length > 10) av.push(`glosario ${T_.glosario.length}`);
  if (T_.objetivos.length < 4 || T_.objetivos.length > 5) av.push(`objetivos ${T_.objetivos.length}`);
  if (T_.situacion.pasos.length < 3 || T_.situacion.pasos.length > 5 || T_.situacion.evaluacion.length < 3 || T_.situacion.evaluacion.length > 4) av.push("situación");
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[tegp] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { tema, V, OBRA, TRUCO, escala, muestras, capas, matrices, linea, cajas, flujo, barras, versus, piramide, rueda, cuadro, crono, SIT, WIKI, partir };
