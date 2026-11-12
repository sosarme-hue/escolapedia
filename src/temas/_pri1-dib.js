// Dibujos sencillos para los temas de 1º de Primaria de Religión, Educación Física y Música.
// Todo en tarjetas de 260×180 con los colores de la web (se ven bien en modo claro y oscuro).
const { F, D } = require("./_util");
const { svg, PROF, FUENTES } = require("./_pri1");

const PIEL = "#f3c9a1";
// Rótulo con opciones (tamaño, color, peso, alineación, fuente).
const rot = (x, y, t, { size = 14, color = "var(--ink)", w = 700, anchor = "middle", font = F } = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${w}" fill="${color}" ${font}>${t}</text>`;
const big = (x, y, t, color = "var(--pen)", size = 22) => rot(x, y, t, { size, color, w: 800, font: D });

// Niño o niña de palitos. (x, y) = punto entre los pies. Poses: pie, arriba, corre, salta, lanza,
// equilibrio, reza, palmas, baila, canta, sentado, brazos (abiertos), agacha.
function nino(x, y, { c = "var(--pen)", pose = "pie", s = 1, pelo = "var(--ink)", nina = false, boca = "sonrisa" } = {}) {
  const P = {
    pie: ["M0 -46 L-13 -28", "M0 -46 L13 -28", "M0 -24 L-8 0", "M0 -24 L8 0"],
    arriba: ["M0 -46 L-14 -66", "M0 -46 L14 -66", "M0 -24 L-8 0", "M0 -24 L8 0"],
    brazos: ["M0 -46 L-20 -46", "M0 -46 L20 -46", "M0 -24 L-8 0", "M0 -24 L8 0"],
    corre: ["M0 -46 L-14 -36 L-18 -44", "M0 -46 L12 -38 L20 -42", "M0 -24 L-14 -4 L-20 -2", "M0 -24 L10 -12 L16 0"],
    salta: ["M0 -46 L-14 -64", "M0 -46 L14 -64", "M0 -24 L-10 -14 L-6 -4", "M0 -24 L10 -14 L6 -4"],
    lanza: ["M0 -46 L-12 -56 L-16 -68", "M0 -46 L16 -40", "M0 -24 L-10 0", "M0 -24 L8 0"],
    equilibrio: ["M0 -46 L-22 -44", "M0 -46 L22 -44", "M0 -24 L0 0", "M0 -24 L12 -16 L4 -8"],
    reza: ["M0 -46 L-7 -36 L0 -32", "M0 -46 L7 -36 L0 -32", "M0 -24 L-8 0", "M0 -24 L8 0"],
    palmas: ["M0 -46 L-10 -40 L-2 -48", "M0 -46 L10 -40 L2 -48", "M0 -24 L-8 0", "M0 -24 L8 0"],
    baila: ["M0 -46 L-14 -64", "M0 -46 L18 -40", "M0 -24 L-12 -2", "M0 -24 L10 -10 L16 -2"],
    canta: ["M0 -46 L-13 -28", "M0 -46 L14 -54", "M0 -24 L-8 0", "M0 -24 L8 0"],
    sentado: ["M0 -46 L-12 -30", "M0 -46 L12 -30", "M0 -24 L14 -24 L14 0", "M0 -24 L-10 -24 L-10 0"],
    agacha: ["M0 -40 L-14 -24", "M0 -40 L14 -24", "M0 -20 L-12 -12 L-8 0", "M0 -20 L12 -12 L8 0"],
  }[pose];
  const alto = pose === "agacha" ? 6 : 0;
  const cab = -62 + alto;
  const tronco = pose === "agacha" ? "M0 -42 L0 -20" : "M0 -52 L0 -24";
  const dy = pose === "salta" ? -14 : 0;
  const bocas = {
    sonrisa: `<path d="M-4 ${cab + 3} q4 4 8 0" stroke="var(--ink)" stroke-width="1.5" fill="none"/>`,
    abierta: `<ellipse cx="0" cy="${cab + 4}" rx="2.6" ry="3.2" fill="var(--ink)"/>`,
    cerrada: `<path d="M-3 ${cab + 4} h6" stroke="var(--ink)" stroke-width="1.5"/>`,
  };
  return `<g transform="translate(${x} ${y + dy}) scale(${s})" stroke-linecap="round" stroke-linejoin="round">
    <path d="${tronco} ${P.join(" ")}" stroke="${c}" stroke-width="4.5" fill="none"/>
    <circle cx="0" cy="${cab}" r="10" fill="${PIEL}"/>
    <path d="M-10 ${cab - 1} q0 -11 10 -11 q10 0 10 11 q-4 -6 -10 -6 q-6 0 -10 6z" fill="${pelo}"/>
    ${nina ? `<path d="M-10 ${cab - 2} q-4 10 -1 14 M10 ${cab - 2} q4 10 1 14" stroke="${pelo}" stroke-width="3.5" fill="none"/>` : ""}
    <circle cx="-3.5" cy="${cab - 1}" r="1.3" fill="var(--ink)"/><circle cx="3.5" cy="${cab - 1}" r="1.3" fill="var(--ink)"/>
    ${bocas[boca]}
  </g>`;
}

const sol = (x, y, r = 16) => `<g transform="translate(${x} ${y})"><g stroke="var(--sun)" stroke-width="3" stroke-linecap="round">${[...Array(8)].map((_, i) => { const a = (i * Math.PI) / 4; return `<path d="M${(Math.cos(a) * (r + 4)).toFixed(1)} ${(Math.sin(a) * (r + 4)).toFixed(1)} L${(Math.cos(a) * (r + 10)).toFixed(1)} ${(Math.sin(a) * (r + 10)).toFixed(1)}"/>`; }).join("")}</g><circle r="${r}" fill="var(--sun)"/></g>`;
const luna = (x, y, r = 14) => `<path d="M${x} ${y - r} a${r} ${r} 0 1 0 ${r * 0.9} ${r * 1.55} a${r * 0.85} ${r * 0.85} 0 1 1 ${-r * 0.9} ${-r * 1.55}z" fill="var(--sun)"/>`;
const nube = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="var(--card)" stroke="var(--line)" stroke-width="2"><path d="M-24 8 q-12 0 -10 -11 q2 -9 13 -7 q3 -12 16 -10 q11 1 12 12 q12 -1 12 9 q0 7 -9 7z"/></g>`;
const arbol = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-5" y="-26" width="10" height="26" fill="#8a5a2b"/><circle cx="0" cy="-40" r="20" fill="var(--leaf)"/></g>`;
const flor = (x, y, c = "var(--red)") => `<g transform="translate(${x} ${y})"><path d="M0 0 V-22" stroke="var(--leaf)" stroke-width="3"/>${[0, 72, 144, 216, 288].map((a) => `<circle cx="${(Math.cos((a * Math.PI) / 180) * 6).toFixed(1)}" cy="${(-26 + Math.sin((a * Math.PI) / 180) * 6).toFixed(1)}" r="5" fill="${c}"/>`).join("")}<circle cx="0" cy="-26" r="4" fill="var(--sun)"/></g>`;
const estrella = (x, y, r = 10, c = "var(--sun)") => `<path d="${[...Array(10)].map((_, i) => { const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? r * 0.45 : r; return `${i ? "L" : "M"}${(x + Math.cos(a) * rr).toFixed(1)} ${(y + Math.sin(a) * rr).toFixed(1)}`; }).join(" ")}z" fill="${c}"/>`;
const corazon = (x, y, s = 1, c = "var(--red)") => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 8 C-14 -2 -12 -14 -5 -14 C-2 -14 0 -11 0 -9 C0 -11 2 -14 5 -14 C12 -14 14 -2 0 8z" fill="${c}"/>`;
const pez = (x, y, c = "var(--water)") => `<g transform="translate(${x} ${y})"><ellipse rx="14" ry="8" fill="${c}"/><path d="M12 0 l10 -8 v16z" fill="${c}"/><circle cx="-7" cy="-2" r="1.6" fill="var(--ink)"/></g>`;
const pajaro = (x, y, c = "var(--ink)") => `<path d="M${x - 9} ${y} q4.5 -6 9 0 q4.5 -6 9 0" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
const casa = (x, y, c = "var(--red)") => `<g transform="translate(${x} ${y})"><rect x="-22" y="-30" width="44" height="30" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-28 -30 L0 -52 L28 -30z" fill="${c}"/><rect x="-6" y="-16" width="12" height="16" fill="var(--sun)"/></g>`;
const iglesia = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-30" y="-44" width="60" height="44" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-36 -44 L0 -66 L36 -44z" fill="var(--red)"/><rect x="-8" y="-88" width="16" height="26" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M0 -104 V-90 M-6 -98 H6" stroke="var(--ink)" stroke-width="3"/><path d="M-9 0 V-20 a9 9 0 0 1 18 0 V0z" fill="#8a5a2b"/><circle cx="0" cy="-54" r="5" fill="var(--sun)"/></g>`;
const cruz = (x, y, s = 1, c = "#8a5a2b") => `<path transform="translate(${x} ${y}) scale(${s})" d="M-4 -30 h8 v10 h10 v8 h-10 v22 h-8 v-22 h-10 v-8 h10z" fill="${c}"/>`;
const vela = (x, y, c = "var(--card)") => `<g transform="translate(${x} ${y})"><rect x="-6" y="-30" width="12" height="30" rx="2" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -32 q-6 -8 0 -16 q6 8 0 16z" fill="var(--sun)"/></g>`;
const paloma = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-18 2 q10 -4 20 -2 q8 -10 16 -6 q-4 2 -6 6 q6 8 -6 10 q-14 2 -24 -8z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-4 -2 q-2 -14 12 -18 q-2 10 -4 18" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="12" cy="-2" r="1.3" fill="var(--ink)"/></g>`;
const pelota = (x, y, r = 9, c = "var(--red)") => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/><path d="M${x - r} ${y} q${r} ${-r * 0.6} ${2 * r} 0" stroke="#fff" stroke-width="1.5" fill="none"/></g>`;
// Nota musical (corchea si c2, negra si no).
const nota = (x, y, c = "var(--pen)", corchea = true) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="0" rx="7" ry="5" transform="rotate(-20)" fill="${c}"/><path d="M6 -2 V-30" stroke="${c}" stroke-width="2.5"/>${corchea ? `<path d="M6 -30 q10 6 8 16" stroke="${c}" stroke-width="2.5" fill="none"/>` : ""}</g>`;
const tambor = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-20 -24 V0 a20 6 0 0 0 40 0 V-24" fill="var(--red)"/><path d="M-20 -20 L-6 2 L6 -20 L18 0" stroke="var(--sun)" stroke-width="2" fill="none"/><ellipse cx="0" cy="-24" rx="20" ry="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/></g>`;
const bocadillo = (x, y, w, t, size = 13) => `<g><rect x="${x - w / 2}" y="${y - 16}" width="${w}" height="26" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M${x - 6} ${y + 10} l-4 9 l12 -9" fill="var(--card)" stroke="var(--line)" stroke-width="2" stroke-linejoin="round"/><path d="M${x - 5} ${y + 9} h10" stroke="var(--card)" stroke-width="3"/>${rot(x, y + 2, t, { size })}</g>`;
const suelo = (y = 158) => `<path d="M10 ${y} H250" stroke="var(--line)" stroke-width="3" stroke-linecap="round"/>`;
const flechaR = (x1, y1, x2, y2, c = "var(--muted)") => {
  const a = Math.atan2(y2 - y1, x2 - x1), p = (d, s) => `${(x2 - Math.cos(a + s) * d).toFixed(1)} ${(y2 - Math.sin(a + s) * d).toFixed(1)}`;
  return `<path d="M${x1} ${y1} L${x2} ${y2} M${p(9, 0.45)} L${x2} ${y2} L${p(9, -0.45)}" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
};
const tick = (x, y, c = "var(--ok)") => `<path d="M${x - 8} ${y} l6 6 l11 -12" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
const equis = (x, y, c = "var(--red)") => `<path d="M${x - 7} ${y - 7} l14 14 M${x + 7} ${y - 7} l-14 14" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`;


module.exports = { F, D, svg, rot, big, nino, sol, luna, nube, arbol, flor, estrella, corazon, pez, pajaro, casa, iglesia, cruz, vela, paloma, pelota, nota, tambor, bocadillo, suelo, flechaR, tick, equis, PROF, FUENTES };
