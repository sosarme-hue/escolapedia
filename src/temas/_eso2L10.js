// Ayudas del lote 10 de 2º ESO nivel libro (Música).
// Reutiliza los esquemas de 3º ESO (_eso3L4: flujo, compara, ciclo, linea, barras, capas, piramide, radial, cita, tabla)
// y los dibujos de la versión anterior de cada tema (_eso2L10-previo).
const L = require("./_eso3L4");
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");
const P = require("./_eso2L10-previo");

const CURSO = "2-eso";
const REV = "2026-11-14";
const DEC = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928919.pdf" };

// Dibujo de un bloque de la versión anterior: viejo("epva-color", 2).
const viejo = (slug, i) => {
  const s = P[slug] && P[slug].svg[i];
  if (!s) throw new Error(`No hay dibujo previo ${slug} ${i}`);
  return s;
};
const figura = (slug) => P[slug].fig;
const video = (slug) => P[slug].video;
const videos = (slug) => P[slug].videos;

// Ejercicios por niveles a partir de tres listas de pares [pregunta, solución].
const niveles = (b, m, a) => [
  ...b.map(([q, sol]) => ({ nivel: "básico", q, sol })),
  ...m.map(([q, sol]) => ({ nivel: "medio", q, sol })),
  ...a.map(([q, sol]) => ({ nivel: "avanzado", q, sol })),
];
const test = (l) => l.map(([q, o, a, e]) => ({ q, o, a, e }));

// Pentagrama con notas: notas = [[paso, "etiqueta", figura?]], paso 0 = primera línea (abajo), 1 = primer espacio, 2 = segunda línea…
// figura: "n" negra (por defecto), "b" blanca, "r" redonda, "c" corchea. Dibuja la clave como texto: clave = "sol" | "fa" | "".
const penta = (label, notas, o = {}) => {
  const g = 11, y0 = o.y0 ?? 112, x0 = 52, w = 188;
  let s = "";
  for (let i = 0; i < 5; i++) s += `<path d="M24 ${y0 - i * g} H ${x0 + w}" stroke="var(--ink)" stroke-width="1.4"/>`;
  s += `<path d="M24 ${y0} V ${y0 - 4 * g}" stroke="var(--ink)" stroke-width="1.4"/>`;
  if (o.clave) s += t(38, y0 - 2 * g + 6, o.clave === "sol" ? "Sol" : "Fa", { size: 11, color: "var(--red)" });
  const n = notas.length, dx = w / (n + 0.3);
  notas.forEach(([p, e, fg], i) => {
    const cx = x0 + dx * (i + 0.7), cy = y0 - p * (g / 2), arriba = p < 5, f = fg || "n";
    if (p <= -2) for (let k = -2; k >= p; k -= 2) s += `<path d="M${cx - 9} ${y0 - k * (g / 2)} H ${cx + 9}" stroke="var(--ink)" stroke-width="1.4"/>`;
    if (p >= 10) for (let k = 10; k <= p; k += 2) s += `<path d="M${cx - 9} ${y0 - k * (g / 2)} H ${cx + 9}" stroke="var(--ink)" stroke-width="1.4"/>`;
    s += `<ellipse cx="${cx}" cy="${cy}" rx="6.2" ry="4.6" transform="rotate(-18 ${cx} ${cy})" fill="${f === "b" || f === "r" ? "var(--paper)" : "var(--ink)"}" stroke="var(--ink)" stroke-width="1.6"/>`;
    if (f !== "r") s += arriba ? `<path d="M${cx + 5.6} ${cy - 1} V ${cy - 28}" stroke="var(--ink)" stroke-width="1.6"/>` : `<path d="M${cx - 5.6} ${cy + 1} V ${cy + 28}" stroke="var(--ink)" stroke-width="1.6"/>`;
    if (f === "c") s += arriba ? `<path d="M${cx + 5.6} ${cy - 28} q 8 6 6 14" fill="none" stroke="var(--ink)" stroke-width="2"/>` : `<path d="M${cx - 5.6} ${cy + 28} q 8 -6 6 -14" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
    s += t(cx, 166, e, { size: 11, color: "var(--pen)" });
  });
  return `<svg viewBox="0 0 260 180" role="img" aria-label="${label}">${BG}${s}</svg>`;
};

// Cuadrícula de pulsos: ritmo = ["x","x","-","x"…] (x golpe, - silencio), con acento en las posiciones de la lista "acentos".
const ritmo = (label, ritmo, acentos = [0], o = {}) => {
  const n = ritmo.length, w = Math.min(34, 220 / n), x0 = 130 - (n * w) / 2;
  let s = "";
  ritmo.forEach((r, i) => {
    const x = x0 + i * w, ac = acentos.includes(i);
    s += `<rect x="${x + 2}" y="${ac ? 52 : 66}" width="${w - 4}" height="${ac ? 66 : 52}" rx="6" fill="${r === "-" ? "var(--paper)" : ac ? "var(--red)" : "var(--pen)"}" fill-opacity="${r === "-" ? 1 : 0.75}" stroke="${ac ? "var(--red)" : "var(--pen)"}" stroke-width="2"/>`;
    s += t(x + w / 2, 142, r === "-" ? "silencio" : String(i + 1), { size: n > 6 ? 9 : 11, color: "var(--muted)" });
  });
  if (o.pie) s += t(130, 30, o.pie, { size: 12 });
  return `<svg viewBox="0 0 260 180" role="img" aria-label="${label}">${BG}${s}</svg>`;
};

module.exports = { ...L, F, D, mapa, BG, t, fl, caja, tablaH: tabla, RD, wiki, DEC, CURSO, REV, viejo, figura, video, videos, niveles, test, penta, ritmo };
