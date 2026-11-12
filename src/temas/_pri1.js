// Ayudas de dibujo para los temas de 1º de Primaria (no es un tema: empieza por "_").
const { F, D } = require("./_util");

const BG = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;
const svg = (label, body) => `<svg viewBox="0 0 260 180" role="img" aria-label="${label}">${BG}${body}</svg>`;
const puntos = (n, x, y, color = "var(--pen)", sep = 22, r = 8) => [...Array(n)].map((_, i) => `<circle cx="${x + i * sep}" cy="${y}" r="${r}" fill="${color}"/>`).join("");
const manzana = (x, y) => `<g transform="translate(${x} ${y})"><circle r="11" fill="var(--red)"/><path d="M0 -10 q2 -7 6 -9" stroke="var(--ink)" stroke-width="2" fill="none"/><ellipse cx="6" cy="-15" rx="5" ry="3" fill="var(--leaf)"/></g>`;
const num = (x, y, t, color = "var(--pen)", size = 22) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="800" fill="${color}" ${D}>${t}</text>`;
const txt = (x, y, t, color = "var(--ink)", size = 14) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="700" fill="${color}" ${F}>${t}</text>`;
// Barra de decena (10 cuadritos en vertical) y cubito de unidad.
const decena = (x, y, color = "var(--pen)") => `<g>${[...Array(10)].map((_, i) => `<rect x="${x}" y="${y + i * 11}" width="14" height="10" rx="2" fill="${color}"/>`).join("")}</g>`;
const unidad = (x, y, color = "var(--sun)") => `<rect x="${x}" y="${y}" width="14" height="10" rx="2" fill="${color}"/>`;
// Moneda sencilla.
const moneda = (x, y, t, r = 18, color = "var(--sun)") => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${color}" stroke="var(--ink)" stroke-width="1.5"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="${r > 16 ? 13 : 11}" font-weight="800" fill="var(--ink)" ${D}>${t}</text></g>`;
const billete = (x, y, t, color = "var(--leaf)") => `<g><rect x="${x}" y="${y}" width="80" height="42" rx="5" fill="${color}" opacity=".85" stroke="var(--ink)" stroke-width="1.5"/><text x="${x + 40}" y="${y + 28}" text-anchor="middle" font-size="18" font-weight="800" fill="var(--card)" ${D}>${t}</text></g>`;
// Reloj de agujas.
const reloj = (cx, cy, r, h, m = 0) => {
  const ang = (deg) => (deg - 90) * Math.PI / 180;
  const ah = ang((h % 12) * 30 + m * 0.5), am = ang(m * 6);
  return `<g><circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>
    ${[...Array(12)].map((_, i) => { const a = ang((i + 1) * 30); return `<text x="${(cx + Math.cos(a) * r * 0.78).toFixed(1)}" y="${(cy + Math.sin(a) * r * 0.78 + 4).toFixed(1)}" text-anchor="middle" font-size="${Math.round(r / 5)}" font-weight="700" fill="var(--ink)" ${D}>${i + 1}</text>`; }).join("")}
    <path d="M${cx} ${cy} L ${(cx + Math.cos(ah) * r * 0.45).toFixed(1)} ${(cy + Math.sin(ah) * r * 0.45).toFixed(1)}" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/>
    <path d="M${cx} ${cy} L ${(cx + Math.cos(am) * r * 0.68).toFixed(1)} ${(cy + Math.sin(am) * r * 0.68).toFixed(1)}" stroke="var(--pen)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="${cx}" cy="${cy}" r="4" fill="var(--ink)"/></g>`;
};
const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 157/2022, primer ciclo).`, ideas });
const FUENTES = [{ t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" }];

module.exports = { BG, svg, puntos, manzana, num, txt, decena, unidad, moneda, billete, reloj, PROF, FUENTES, F, D };
