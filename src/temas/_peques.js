// Dibujos sencillos compartidos por los temas de 1º y 2º de Primaria (SVG propio, colores del tema).
const { F, D } = require("./_util");

// Fondo de las viñetas de bloque (260 × 180).
const BG = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;
// Texto corto centrado.
const txt = (x, y, t, { size = 14, color = "var(--ink)", font = F, weight = 700, anchor = "middle" } = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${color}" ${font}>${t}</text>`;
// Persona sencilla: cabeza, cuerpo con camiseta, brazos y piernas. (x, y) = pies; h = altura.
const persona = (x, y, h = 70, ropa = "var(--pen)", pelo = "var(--ink)") => {
  const s = h / 70;
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M-6 -22 V 0 M6 -22 V 0" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
    <path d="M-12 -24 Q -12 -46 0 -46 Q 12 -46 12 -24 Z" fill="${ropa}"/>
    <path d="M-11 -42 L -20 -26 M11 -42 L 20 -26" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
    <circle cy="-56" r="11" fill="#f2c9a0"/>
    <path d="M-11 -58 Q 0 -72 11 -58 Q 6 -64 0 -64 Q -6 -64 -11 -58 Z" fill="${pelo}"/>
    <circle cx="-4" cy="-56" r="1.6" fill="#1b2235"/><circle cx="4" cy="-56" r="1.6" fill="#1b2235"/>
    <path d="M-4 -51 Q 0 -48 4 -51" stroke="#1b2235" stroke-width="1.5" fill="none"/></g>`;
};
const sol = (x, y, r = 16) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="var(--sun)"/>${[...Array(8)].map((_, i) => {
  const a = (i * Math.PI) / 4, c = Math.cos(a), s = Math.sin(a);
  return `<path d="M${(c * (r + 4)).toFixed(1)} ${(s * (r + 4)).toFixed(1)} L ${(c * (r + 11)).toFixed(1)} ${(s * (r + 11)).toFixed(1)}" stroke="var(--sun)" stroke-width="3" stroke-linecap="round"/>`;
}).join("")}</g>`;
const luna = (x, y, r = 16) => `<path d="M${x} ${y - r} A ${r} ${r} 0 1 0 ${x + r * 0.9} ${y + r * 0.45} A ${r * 0.8} ${r * 0.8} 0 1 1 ${x} ${y - r} Z" fill="var(--sun)"/>`;
const nube = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="var(--card)" stroke="var(--line)" stroke-width="2"><path d="M-26 8 Q -30 -6 -16 -8 Q -12 -22 2 -18 Q 14 -26 22 -12 Q 34 -10 30 8 Z"/></g>`;
const arbol = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-5" y="-30" width="10" height="30" fill="#8a5a2b"/><circle cy="-44" r="22" fill="var(--leaf)"/></g>`;
const flor = (x, y, color = "var(--red)") => `<g transform="translate(${x} ${y})"><path d="M0 0 V -28" stroke="var(--leaf)" stroke-width="3"/><ellipse cx="6" cy="-12" rx="6" ry="3" fill="var(--leaf)"/>${[0, 72, 144, 216, 288].map((a) => `<circle cx="${(Math.cos((a * Math.PI) / 180) * 6).toFixed(1)}" cy="${(-34 + Math.sin((a * Math.PI) / 180) * 6).toFixed(1)}" r="5" fill="${color}"/>`).join("")}<circle cy="-34" r="4" fill="var(--sun)"/></g>`;
const casa = (x, y, s = 1, color = "var(--red)") => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-26" y="-36" width="52" height="36" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-32 -36 L 0 -60 L 32 -36 Z" fill="${color}"/><rect x="-7" y="-20" width="14" height="20" fill="var(--pen)"/><rect x="-21" y="-30" width="10" height="10" fill="var(--water)"/><rect x="11" y="-30" width="10" height="10" fill="var(--water)"/></g>`;
const coche = (x, y, color = "var(--red)", s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-30 -8 V -20 H -16 L -8 -32 H 12 L 20 -20 H 30 V -8 Z" fill="${color}"/><rect x="-5" y="-29" width="14" height="9" fill="var(--water)"/><circle cx="-16" cy="-6" r="7" fill="var(--ink)"/><circle cx="16" cy="-6" r="7" fill="var(--ink)"/></g>`;
const check = (x, y, ok = true) => ok
  ? `<g transform="translate(${x} ${y})"><circle r="12" fill="var(--ok)"/><path d="M-6 0 L -2 5 L 6 -5" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/></g>`
  : `<g transform="translate(${x} ${y})"><circle r="12" fill="var(--red)"/><path d="M-5 -5 L 5 5 M5 -5 L -5 5" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>`;

const RD = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };

module.exports = { F, D, BG, txt, persona, sol, luna, nube, arbol, flor, casa, coche, check, RD };
