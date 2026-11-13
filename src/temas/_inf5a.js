// Ayudas para los temas de Infantil 5 años, lote A (Crecimiento en armonía y Descubrimiento del entorno).
// No es un tema: empieza por "_". Reutiliza los dibujos de 1º de Primaria (_peque) y añade los que faltan.
const P = require("./_peque");
const { I, marco, D, F } = P;
const { fz } = require("./_lenguas");
const { nino } = require("./_pri1-dib");

const BLANCO = "#ffffff", GRIS = "#9aa3b5", NEGRO = "#2a2a2a", MARRON = "#a0703c", ROSA = "#f08fb0", PIEL = "#f2c79e";

// Dibujos nuevos de unos 40 × 40 px centrados en (0, 0).
const X = {
  diente: `<path d="M-13 -14 Q-13 -20 -6 -19 Q0 -16 6 -19 Q13 -20 13 -14 Q14 -2 9 4 L7 17 Q5 20 3 16 L0 6 L-3 16 Q-5 20 -7 17 L-9 4 Q-14 -2 -13 -14z" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/>`,
  caries: `<path d="M-13 -14 Q-13 -20 -6 -19 Q0 -16 6 -19 Q13 -20 13 -14 Q14 -2 9 4 L7 17 Q5 20 3 16 L0 6 L-3 16 Q-5 20 -7 17 L-9 4 Q-14 -2 -13 -14z" fill="#f3ead2" stroke="${GRIS}" stroke-width="2"/><circle cx="-3" cy="-9" r="4" fill="${MARRON}"/><circle cx="5" cy="-4" r="2.5" fill="${MARRON}"/>`,
  cepillo: `<g transform="rotate(-30)"><rect x="-20" y="-3" width="30" height="6" rx="3" fill="var(--water)"/><rect x="8" y="-5" width="13" height="5" rx="1" fill="var(--pen)"/><g stroke="${GRIS}" stroke-width="2"><path d="M10 -5 v-7 M13 -5 v-7 M16 -5 v-7 M19 -5 v-7"/></g><path d="M9 -12 h11" stroke="${GRIS}" stroke-width="1"/></g>`,
  pasta: `<rect x="-16" y="-6" width="26" height="12" rx="4" fill="var(--water)"/><rect x="10" y="-4" width="7" height="8" rx="1" fill="var(--pen)"/><path d="M-16 -6 l-4 6 l4 6" fill="var(--water)"/>`,
  cerebro: `<path d="M-16 4 Q-20 -8 -10 -14 Q-4 -20 4 -16 Q14 -18 17 -8 Q21 2 13 8 Q6 13 -2 11 Q-12 13 -16 4z" fill="${ROSA}"/><g stroke="#c95c87" stroke-width="1.8" fill="none" stroke-linecap="round"><path d="M0 -15 Q-3 -4 1 9"/><path d="M-10 -8 q4 2 3 7 M9 -10 q-3 4 1 8 M-12 4 q4 -2 7 1 M6 3 q5 -2 8 1"/></g>`,
  pulmones: `<path d="M-3 -14 V-4 Q-6 -10 -10 -12 Q-19 -10 -19 6 Q-19 16 -10 16 Q-4 16 -3 8z" fill="${ROSA}"/><path d="M3 -14 V-4 Q6 -10 10 -12 Q19 -10 19 6 Q19 16 10 16 Q4 16 3 8z" fill="${ROSA}"/><path d="M0 -20 V-6 M0 -6 l-4 4 M0 -6 l4 4" stroke="${GRIS}" stroke-width="3" stroke-linecap="round" fill="none"/>`,
  estomago: `<path d="M-4 -18 Q-6 -8 -2 -6 Q10 -10 16 -2 Q20 10 8 15 Q-6 19 -14 10 Q-18 6 -14 4 Q-8 8 -4 4 Q-12 -6 -10 -18z" fill="#f4a261"/>`,
  hueso: `<g fill="${GRIS}"><rect x="-13" y="-6" width="26" height="12"/><circle cx="-14" cy="-6" r="7"/><circle cx="-14" cy="6" r="7"/><circle cx="14" cy="-6" r="7"/><circle cx="14" cy="6" r="7"/></g><g fill="${BLANCO}"><rect x="-13" y="-4" width="26" height="8"/><circle cx="-14" cy="-6" r="5.4"/><circle cx="-14" cy="6" r="5.4"/><circle cx="14" cy="-6" r="5.4"/><circle cx="14" cy="6" r="5.4"/></g>`,
  musculo: `<path d="M-20 16 V4 Q-14 -10 -2 -2 L0 -12 Q2 -20 10 -19 Q17 -18 15 -10 L10 4 Q8 16 -6 16z" fill="${PIEL}" stroke="${MARRON}" stroke-width="1.8"/><path d="M-14 0 Q-8 -6 -2 0" stroke="${MARRON}" stroke-width="1.5" fill="none"/>`,
  semilla: `<ellipse rx="9" ry="6" fill="${MARRON}" transform="rotate(-25)"/><path d="M-4 2 q4 -6 9 -5" stroke="#7b5226" stroke-width="1.5" fill="none"/>`,
  brote: `<path d="M0 16 V-2" stroke="var(--leaf)" stroke-width="3"/><path d="M0 2 Q-14 -2 -14 -12 Q-2 -12 0 2z M0 -2 Q12 -6 14 -16 Q2 -16 0 -2z" fill="var(--leaf)"/><path d="M-12 16 H12" stroke="${MARRON}" stroke-width="4" stroke-linecap="round"/>`,
  maceta: `<path d="M-12 2 H12 L9 18 H-9z" fill="#c8693a"/><path d="M0 2 V-10" stroke="var(--leaf)" stroke-width="3"/><path d="M0 -6 Q-12 -8 -12 -18 Q-2 -18 0 -6z M0 -8 Q10 -10 12 -19 Q2 -20 0 -8z" fill="var(--leaf)"/>`,
  piedra: `<path d="M-17 12 Q-20 -2 -10 -8 Q0 -14 10 -8 Q20 -2 17 12z" fill="${GRIS}"/><path d="M-6 -2 q4 -3 8 0" stroke="#7d879a" stroke-width="2" fill="none"/>`,
  tierra: `<circle r="17" fill="var(--water)"/><path d="M-10 -12 q6 2 4 8 q-6 4 -2 10 q-8 -2 -9 -10 q2 -6 7 -8z M4 -14 q8 2 10 10 q-6 0 -8 6 q-4 -4 -2 -10z M2 8 q6 -2 10 4 q-4 6 -10 4z" fill="var(--leaf)"/>`,
  semaforo: `<rect x="-9" y="-19" width="18" height="38" rx="5" fill="${NEGRO}"/><circle cy="-11" r="5" fill="var(--red)"/><circle r="5" fill="var(--sun)" opacity=".35"/><circle cy="11" r="5" fill="var(--leaf)" opacity=".35"/>`,
  semaforoverde: `<rect x="-9" y="-19" width="18" height="38" rx="5" fill="${NEGRO}"/><circle cy="-11" r="5" fill="var(--red)" opacity=".35"/><circle r="5" fill="var(--sun)" opacity=".35"/><circle cy="11" r="5" fill="var(--leaf)"/>`,
  cebra: `<rect x="-20" y="-14" width="40" height="28" fill="#5d6677"/><g fill="${BLANCO}">${[-16, -8, 0, 8].map((x) => `<rect x="${x}" y="-12" width="5" height="24"/>`).join("")}</g>`,
  cinturon: `<rect x="-14" y="-12" width="28" height="26" rx="6" fill="#5d6677"/><path d="M-12 -10 L12 12" stroke="${NEGRO}" stroke-width="5"/><rect x="-3" y="-2" width="7" height="5" fill="${GRIS}"/>`,
  casco: `<path d="M-16 6 Q-16 -14 0 -14 Q16 -14 16 6z" fill="var(--red)"/><path d="M-8 -12 v8 M0 -14 v9 M8 -12 v8" stroke="${BLANCO}" stroke-width="2"/><path d="M-12 6 q0 8 6 8" stroke="${NEGRO}" stroke-width="2" fill="none"/>`,
  edificio: `<rect x="-14" y="-18" width="28" height="36" fill="var(--pen)"/><g fill="var(--sun)">${[-12, -3, 6].map((y) => `<rect x="-9" y="${y}" width="6" height="5"/><rect x="3" y="${y}" width="6" height="5"/>`).join("")}</g>`,
  tienda: `<rect x="-16" y="-4" width="32" height="20" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><path d="M-18 -14 H18 L16 -4 H-16z" fill="var(--red)"/><g fill="${BLANCO}"><rect x="-10" y="-14" width="5" height="10"/><rect x="0" y="-14" width="5" height="10"/></g><rect x="-4" y="4" width="8" height="12" fill="var(--water)"/>`,
  hospital: `<rect x="-16" y="-14" width="32" height="30" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><path d="M-3 -10 h6 v5 h5 v6 h-5 v5 h-6 v-5 h-5 v-6 h5z" fill="var(--red)"/><rect x="-5" y="8" width="10" height="8" fill="var(--water)"/>`,
  parque: `<path d="M-18 14 H18" stroke="var(--leaf)" stroke-width="4"/><path d="M-14 14 V-6 H2 M-14 -6 L2 14" stroke="var(--red)" stroke-width="2.5" fill="none"/><path d="M6 14 V-2 L16 14" stroke="var(--pen)" stroke-width="2.5" fill="none"/><circle cx="-6" cy="4" r="3" fill="var(--sun)"/>`,
  ayuntamiento: `<rect x="-18" y="-6" width="36" height="22" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-20 -6 L0 -16 L20 -6z" fill="var(--inf)"/><g fill="var(--muted)">${[-12, -4, 4, 12].map((x) => `<rect x="${x - 2}" y="-2" width="4" height="16"/>`).join("")}</g><path d="M0 -16 V-22 h6 v3 h-6" stroke="var(--red)" stroke-width="1.5" fill="var(--red)"/>`,
  contenedor: `<rect x="-14" y="-12" width="28" height="28" rx="3" fill="var(--sun)"/><rect x="-16" y="-17" width="32" height="6" rx="2" fill="#d99a00"/>`,
  botella: `<path d="M-4 -18 h8 v6 q6 4 6 10 v18 h-20 v-18 q0 -6 6 -10z" fill="var(--water)" opacity=".75" stroke="#1e6fb0" stroke-width="1.5"/>`,
  periodico: `<rect x="-16" y="-14" width="32" height="28" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/><rect x="-12" y="-10" width="11" height="9" fill="${GRIS}"/><path d="M2 -9 h10 M2 -4 h10 M-12 3 h24 M-12 8 h24" stroke="${GRIS}" stroke-width="2"/>`,
  tarro: `<rect x="-10" y="-16" width="20" height="5" rx="1" fill="${MARRON}"/><path d="M-12 -11 h24 v24 q0 4 -4 4 h-16 q-4 0 -4 -4z" fill="var(--leaf)" opacity=".55" stroke="#1d6b2c" stroke-width="1.5"/>`,
  piel_platano: `<path d="M-2 -14 q2 10 0 16 q-8 6 -14 2 q8 -2 10 -8 q-10 4 -12 -2 q8 0 12 -6z M2 2 q8 6 14 2 q-8 -2 -10 -8z" fill="var(--sun)"/><path d="M-2 -14 l1 -4" stroke="${MARRON}" stroke-width="2"/>`,
  basura: `<path d="M-10 -10 h20 l-2 26 h-16z" fill="${GRIS}"/><rect x="-13" y="-14" width="26" height="4" rx="2" fill="#7d879a"/><path d="M-4 -6 v18 M4 -6 v18" stroke="#7d879a" stroke-width="2"/>`,
  grifo: `<path d="M-16 -10 h18 q8 0 8 8 v6" stroke="${GRIS}" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="-6" y="-17" width="6" height="7" fill="${GRIS}"/><path d="M10 8 q-3 5 0 7 q3 -2 0 -7z" fill="var(--water)"/>`,
  bombilla: `<circle cy="-5" r="11" fill="var(--sun)"/><rect x="-5" y="6" width="10" height="8" fill="${GRIS}"/><path d="M-3 -4 l3 4 l3 -4" stroke="#d99a00" stroke-width="1.5" fill="none"/>`,
  zanahoria: `<path d="M-4 -10 L4 -10 L0 18z" fill="#f08a24"/><path d="M0 -10 q-6 -8 -8 -10 M0 -10 v-10 M0 -10 q6 -8 8 -10" stroke="var(--leaf)" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  brocoli: `<path d="M-3 4 h6 l2 14 h-10z" fill="#9bc53d"/><g fill="#2f8f3a"><circle cx="-8" cy="-2" r="8"/><circle cx="8" cy="-2" r="8"/><circle cy="-10" r="9"/></g>`,
  pastel: `<path d="M-16 16 V0 H16 V16z" fill="${ROSA}"/><path d="M-16 0 q4 6 8 0 q4 6 8 0 q4 6 8 0 q4 6 8 0" fill="${BLANCO}"/><rect x="-1.5" y="-12" width="3" height="10" fill="var(--pen)"/><path d="M0 -18 q3 3 0 6 q-3 -3 0 -6z" fill="var(--sun)"/>`,
  caramelo: `<ellipse rx="10" ry="8" fill="var(--red)"/><path d="M-10 0 l-8 -7 v14z M10 0 l8 -7 v14z" fill="var(--red)" opacity=".75"/><path d="M-4 -6 q4 6 0 12" stroke="${BLANCO}" stroke-width="2" fill="none"/>`,
  carne: `<path d="M-16 4 Q-18 -12 0 -12 Q16 -12 16 2 Q14 14 0 12 Q-14 14 -16 4z" fill="#c0392b"/><path d="M-8 -2 q8 -6 16 2" stroke="${BLANCO}" stroke-width="2.5" fill="none"/>`,
  arroz: `<path d="M-18 0 H18 Q16 16 0 16 Q-16 16 -18 0z" fill="var(--water)"/><path d="M-16 0 Q-10 -12 0 -10 Q12 -12 16 0z" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1"/>`,
  balanza: `<path d="M0 -16 V14 M-12 16 H12 M-18 -10 H18" stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M-18 -10 l-6 12 h12z M18 -10 l-6 12 h12z" fill="var(--sun)" opacity=".85"/>`,
  palmo: `<path d="M-18 6 Q-20 -2 -12 -4 L-6 -16 Q-4 -20 -1 -16 L-3 -5 L14 -9 Q20 -10 19 -5 L4 0 L18 2 Q20 6 16 7 L-2 8 Q-10 14 -18 6z" fill="${PIEL}" stroke="${MARRON}" stroke-width="1.5"/>`,
  huella: `<ellipse cy="4" rx="8" ry="12" fill="var(--muted)"/>${[[-7, -12, 3], [-2, -15, 3], [3, -15, 2.7], [7, -12, 2.4]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="var(--muted)"/>`).join("")}`,
  calendario: `<rect x="-16" y="-14" width="32" height="30" rx="3" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/><rect x="-16" y="-14" width="32" height="9" rx="3" fill="var(--red)"/><g fill="${GRIS}">${[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => `<rect x="${-12 + c * 7}" y="${-2 + r * 6}" width="4" height="4"/>`).join("")).join("")}</g>`,
  cohete: `<path d="M0 -20 Q10 -8 8 8 H-8 Q-10 -8 0 -20z" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><circle cy="-4" r="4" fill="var(--water)"/><path d="M-8 2 l-6 10 h6z M8 2 l6 10 h-6z" fill="var(--red)"/><path d="M-4 8 q4 12 8 0" fill="var(--sun)"/>`,
  medalla: `<path d="M-8 -20 L-2 -4 M8 -20 L2 -4" stroke="var(--red)" stroke-width="5"/><circle cy="6" r="12" fill="var(--sun)" stroke="#d99a00" stroke-width="2"/>`,
  manos: `<g fill="${PIEL}" stroke="${MARRON}" stroke-width="1.5"><path d="M-18 8 Q-20 -4 -12 -6 L-4 -12 Q-1 -14 0 -10 L-2 0 L-2 10 Q-10 16 -18 8z"/><path d="M18 8 Q20 -4 12 -6 L4 -12 Q1 -14 0 -10 L2 0 L2 10 Q10 16 18 8z"/></g>`,
};
// Los dibujos nuevos se ponen en el catálogo de _peque solo mientras dura cada llamada y después se quita
// lo añadido, para no cambiar los dibujos de otros temas que usen nombres iguales.
const conX = (fn) => (...a) => {
  const antes = {};
  for (const k of Object.keys(X)) { antes[k] = I[k]; I[k] = X[k]; }
  try { return fn(...a); } finally { for (const k of Object.keys(X)) { if (antes[k] === undefined) delete I[k]; else I[k] = antes[k]; } }
};
const [ic, dibujos, fichas, parejas, frase, charla, mural, cuantos, lista] = [P.ic, P.dibujos, P.fichas, P.parejas, P.frase, P.charla, P.mural, P.cuantos, P.lista].map(conX);
// Texto que se ajusta al ancho «max».
const t = (x, y, s, { size = 16, color = "var(--ink)", max = 240, w = 700, font = D, anchor = "middle" } = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${fz(s, size, max, true)}" font-weight="${w}" fill="${color}" ${font}>${s}</text>`;
// Número grande en un círculo.
const bola = (x, y, n, color = "var(--pen)", r = 16) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/><text x="${x}" y="${y + r * 0.38}" text-anchor="middle" font-size="${Math.round(r * 1.1)}" font-weight="800" fill="#fff" ${D}>${n}</text>`;
// Fila de «n» dibujos iguales centrada en x.
const fila = (d, n, x, y, s = 0.7, sep = 30) => [...Array(n)].map((_, i) => ic(d, (x + (i - (n - 1) / 2) * sep).toFixed(1), y, s)).join("");
// Flecha horizontal.
const flecha = (x1, y, x2, c = "var(--muted)") => `<path d="M${x1} ${y} H${x2} M${x2 - 7} ${y - 6} L${x2} ${y} L${x2 - 7} ${y + 6}" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
// Dos manos con «a» y «b» dedos levantados, centradas en (cx, cy) y escaladas «s».
const manos = (a, b, cx, cy, s = 1) => {
  const mano = (x, k) => `<g transform="translate(${x} 0)"><rect x="-16" y="-4" width="32" height="26" rx="10" fill="${PIEL}" stroke="${MARRON}" stroke-width="1.5"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="${-15 + i * 6.5}" y="${i < k ? -26 : -10}" width="5.5" height="${i < k ? 26 : 10}" rx="2.7" fill="${PIEL}" stroke="${MARRON}" stroke-width="1.5"/>`).join("")}</g>`;
  return `<g transform="translate(${cx} ${cy}) scale(${s})">${mano(-22, a)}${mano(22, b)}</g>`;
};
// Viñeta propia (260 × 180) con un título arriba opcional.
const vin = (label, inner, titulo) => marco(label, (titulo ? t(130, 24, titulo, { size: 15, color: "var(--muted)", max: 236 }) : "") + inner);

const RD = { t: "Real Decreto 95/2022, ordenación y enseñanzas mínimas de la Educación Infantil (BOE-A-2022-1654)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-1654" };
const FUENTES = [RD];
const PROF = (area, saberes, ideas) => ({ saberes: `${area}. ${saberes} (RD 95/2022, segundo ciclo de Educación Infantil).`, ideas });
const CA = "Área Crecimiento en armonía";
const DE = "Área Descubrimiento y exploración del entorno";
const vid = (id, titulo, canal, vistas, busqueda) => ({ id, titulo, canal, vistas, megusta: 0, busqueda });
const nota = (s) => `<b>Para la familia:</b> ${s}`;

module.exports = { manos, nino, I, ic, marco, vin, dibujos, fichas, parejas, frase, charla, mural, cuantos, lista, t, bola, fila, flecha, FUENTES, PROF, CA, DE, vid, nota, D, F, BLANCO, GRIS, NEGRO, MARRON, ROSA, PIEL };
