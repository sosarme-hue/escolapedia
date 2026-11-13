// Ayudas para los temas de Infantil 3 años, lote A (Crecimiento en armonía y Descubrimiento del entorno).
// No es un tema: empieza por "_". Añade dibujos nuevos al juego de iconos de _peque.js.
const { I, ic, marco, D } = require("./_peque");
const { fz } = require("./_lenguas");

const MARRON = "#a0703c", PIEL = "#f2c79e", BLANCO = "#ffffff", GRIS = "#9aa3b5", ROSA = "#f08fb0", NEGRO = "#2a2a2a";

const NUEVOS = {
  jabon: `<rect x="-16" y="-4" width="32" height="18" rx="8" fill="${ROSA}"/><g fill="${BLANCO}" stroke="var(--water)" stroke-width="1.5"><circle cx="-7" cy="-10" r="5"/><circle cx="4" cy="-14" r="4"/><circle cx="12" cy="-8" r="3"/></g>`,
  cepillo: `<g transform="rotate(-30)"><rect x="-19" y="-3" width="30" height="6" rx="3" fill="var(--water)"/><rect x="6" y="-11" width="13" height="8" rx="1" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.2"/><path d="M9 -11 v8 M12 -11 v8 M15 -11 v8" stroke="${GRIS}" stroke-width="1"/></g>`,
  toalla: `<rect x="-14" y="-16" width="28" height="32" rx="3" fill="var(--water)"/><path d="M-14 7 H14 M-14 11 H14" stroke="${BLANCO}" stroke-width="2"/>`,
  banera: `<path d="M-16 -2 V-16 h6" stroke="${GRIS}" stroke-width="2.5" fill="none"/><g fill="${BLANCO}" stroke="var(--water)" stroke-width="1.5"><circle cx="-8" cy="-6" r="5"/><circle cx="2" cy="-9" r="6"/><circle cx="11" cy="-5" r="4"/></g><path d="M-19 -2 H19 V4 Q19 14 8 14 H-8 Q-19 14 -19 4z" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/><path d="M-14 14 l-2 4 M14 14 l2 4" stroke="${GRIS}" stroke-width="2.5"/>`,
  zanahoria: `<path d="M-7 -10 H7 L1 18 Q0 20 -1 18z" fill="var(--inf)"/><path d="M0 -10 l-6 -8 M0 -10 l0 -9 M0 -10 l6 -8" stroke="var(--leaf)" stroke-width="3" stroke-linecap="round"/><path d="M-4 -2 h3 M1 5 h3 M-2 11 h2" stroke="#b5561a" stroke-width="1.5"/>`,
  brocoli: `<rect x="-4" y="2" width="8" height="16" rx="2" fill="#9bc53d"/><g fill="var(--leaf)"><circle cx="-9" cy="-4" r="8"/><circle cx="9" cy="-4" r="8"/><circle cy="-11" r="9"/><circle cy="0" r="7"/></g>`,
  plato: `<ellipse cy="6" rx="19" ry="8" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/><ellipse cy="6" rx="11" ry="4" fill="none" stroke="${GRIS}" stroke-width="1.5"/><path d="M-4 2 q4 -10 8 0" fill="var(--leaf)"/>`,
  naranja: `<circle cy="2" r="14" fill="var(--inf)"/><circle cx="-4" cy="-2" r="1" fill="#c96a10"/><circle cx="4" cy="5" r="1" fill="#c96a10"/><circle cx="-2" cy="8" r="1" fill="#c96a10"/><ellipse cx="5" cy="-13" rx="5" ry="3" fill="var(--leaf)"/>`,
  fresa: `<path d="M-13 -6 Q-14 10 0 18 Q14 10 13 -6 Q0 -12 -13 -6z" fill="var(--red)"/><path d="M-10 -8 L-4 -14 L0 -9 L4 -14 L10 -8 Q0 -4 -10 -8z" fill="var(--leaf)"/><g fill="var(--sun)"><circle cx="-5" cy="0" r="1.3"/><circle cx="4" cy="2" r="1.3"/><circle cx="-1" cy="8" r="1.3"/><circle cx="6" cy="9" r="1.3"/><circle cx="-6" cy="8" r="1.3"/></g>`,
  sandia: `<g transform="translate(0 -4)"><path d="M-19 0 A19 19 0 0 0 19 0z" fill="var(--leaf)"/><path d="M-16 0 A16 16 0 0 0 16 0z" fill="var(--red)"/><g fill="${NEGRO}"><ellipse cx="-7" cy="5" rx="1.3" ry="2"/><ellipse cx="0" cy="9" rx="1.3" ry="2"/><ellipse cx="7" cy="5" rx="1.3" ry="2"/></g></g>`,
  oveja: `<path d="M-6 8 V18 M6 8 V18" stroke="${NEGRO}" stroke-width="3"/><g fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"><circle cx="-6" cy="-2" r="8"/><circle cx="4" cy="-6" r="8"/><circle cx="11" cy="1" r="7"/><circle cx="1" cy="4" r="8"/></g><ellipse cx="-14" cy="-6" rx="6" ry="7" fill="${NEGRO}"/><circle cx="-15" cy="-7" r="1.4" fill="${BLANCO}"/>`,
  caballo: `<path d="M-6 18 L-8 -2 Q-8 -15 3 -17 L6 -22 L9 -16 Q18 -8 17 2 Q15 7 9 4 L4 -1 L4 18z" fill="${MARRON}"/><path d="M-8 -2 Q-12 -12 -1 -18" stroke="${NEGRO}" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="7" cy="-9" r="1.8" fill="${NEGRO}"/><circle cx="14" cy="1" r="1.2" fill="${NEGRO}"/>`,
  gallina: `<path d="M13 -2 l7 -6 M13 3 l8 -2" stroke="${GRIS}" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="2" cy="5" rx="14" ry="11" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><circle cx="-8" cy="-9" r="7" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><path d="M-12 -15 q2 -5 4 0 q2 -5 4 1" fill="var(--red)"/><path d="M-15 -9 l-5 2 l5 2z" fill="var(--inf)"/><circle cx="-9" cy="-10" r="1.5" fill="${NEGRO}"/><path d="M-2 16 v3 M5 16 v3" stroke="var(--inf)" stroke-width="2.5"/>`,
  hoja: `<path d="M-14 14 Q-16 -14 14 -16 Q16 12 -14 14z" fill="var(--inf)"/><path d="M-14 14 L10 -12" stroke="#b5561a" stroke-width="2"/>`,
  muneco: `<circle cy="8" r="11" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><circle cy="-9" r="8" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><circle cx="-3" cy="-10" r="1.4" fill="${NEGRO}"/><circle cx="3" cy="-10" r="1.4" fill="${NEGRO}"/><path d="M0 -8 l7 2 l-7 1z" fill="var(--inf)"/><rect x="-7" y="-21" width="14" height="5" fill="${NEGRO}"/><circle cy="5" r="1.4" fill="${NEGRO}"/><circle cy="11" r="1.4" fill="${NEGRO}"/>`,
  caja: `<path d="M-16 -4 L-21 -13 M16 -4 L21 -13" stroke="#7a4a1f" stroke-width="3" stroke-linecap="round"/><rect x="-16" y="-4" width="32" height="22" fill="${MARRON}"/><path d="M-16 -4 H16" stroke="#7a4a1f" stroke-width="2.5"/>`,
  calcetin: `<path d="M-6 -16 H6 V4 L14 8 Q19 14 12 17 L-2 14 Q-6 12 -6 6z" fill="var(--red)"/><rect x="-6" y="-16" width="12" height="5" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1"/>`,
  pijama: `<path d="M-8 -16 L-19 -9 L-15 -1 L-11 -4 V16 H11 V-4 L15 -1 L19 -9 L8 -16 Q0 -10 -8 -16z" fill="var(--water)"/><g fill="var(--sun)"><path d="M-4 0 l1.5 3 h3 l-2.4 2 l1 3 l-3.1 -2 l-3 2 l1 -3 l-2.4 -2 h3z"/><circle cx="6" cy="10" r="2"/><circle cx="-6" cy="12" r="1.6"/></g>`,
  enfadado: I.nino.replace(/<path d="M-5 6[^>]*>/, `<path d="M-6 10 q6 -6 12 0" stroke="${NEGRO}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M-9 -7 l6 3 M9 -7 l-6 3" stroke="${NEGRO}" stroke-width="2.5" stroke-linecap="round"/>`).replace(`r="15" fill="${PIEL}"`, `r="15" fill="#f4a98c"`),
  asustado: I.nina.replace(/<path d="M-5 6[^>]*>/, `<ellipse cy="8" rx="4" ry="5" fill="#9c1f18"/><path d="M-8 -7 q3 -3 6 -1 M8 -7 q-3 -3 -6 -1" stroke="${NEGRO}" stroke-width="2" fill="none"/>`),
  dormido: I.bebe.replace(/<circle cx="-5" cy="-1" r="2"[^>]*><circle cx="5" cy="-1" r="2"[^>]*>/, `<path d="M-8 -1 q3 3 6 0 M2 -1 q3 3 6 0" stroke="${NEGRO}" stroke-width="2" fill="none" stroke-linecap="round"/>`),
  circulo: `<circle r="16" fill="var(--red)"/>`,
  cuadrado: `<rect x="-15" y="-15" width="30" height="30" rx="2" fill="var(--pen)"/>`,
  triangulo: `<path d="M0 -17 L17 14 H-17z" fill="var(--leaf)"/>`,
  ventana: `<rect x="-15" y="-15" width="30" height="30" fill="#bfe3ff" stroke="${MARRON}" stroke-width="3"/><path d="M0 -15 V15 M-15 0 H15" stroke="${MARRON}" stroke-width="3"/>`,
  tobogan: `<path d="M-14 18 V-14 M-6 18 V-14" stroke="var(--pen)" stroke-width="3"/><path d="M-14 -6 H-6 M-14 4 H-6 M-14 12 H-6" stroke="var(--pen)" stroke-width="2"/><path d="M-6 -14 Q4 -10 8 4 L18 18" stroke="var(--red)" stroke-width="5" fill="none" stroke-linecap="round"/>`,
};
for (const [k, v] of Object.entries(NUEVOS)) if (!I[k]) I[k] = v;

// Texto centrado para los dibujos hechos a mano.
const t = (x, y, s, fs = 18, color = "var(--ink)", max = 120) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${fz(s, fs, max, true)}" font-weight="800" fill="${color}" ${D}>${s}</text>`;
const titulo = (s) => s ? `<text x="130" y="22" text-anchor="middle" font-size="${fz(s, 15, 236, true)}" font-weight="700" fill="var(--muted)">${s}</text>` : "";

// Escena libre con título opcional: inner son dibujos colocados con ic() o a mano.
const escena = (label, inner, tit = "") => marco(label, titulo(tit) + inner);

// Varios dibujos iguales en fila, para contar: n de 1 a 6.
const fila = (d, n, x, y, s = 1, sep = 40) => [...Array(n)].map((_, i) => ic(d, x + (i - (n - 1) / 2) * sep * s, y, s)).join("");

// Contar: grupos [dibujo, cuántos, color]. Una fila por grupo con su número grande a la derecha.
function contar(label, grupos, tit = "") {
  const top = tit ? 34 : 10, h = (172 - top) / grupos.length;
  let out = titulo(tit);
  grupos.forEach(([d, n, c], i) => {
    const cy = top + h * (i + 0.5), s = grupos.length === 1 ? 1.5 : grupos.length === 2 ? 1.1 : 0.85;
    out += fila(d, n, 96, cy, s, 40) + `<circle cx="222" cy="${cy.toFixed(1)}" r="${grupos.length === 1 ? 26 : 20}" fill="${c}"/>${t(222, (cy + (grupos.length === 1 ? 11 : 9)).toFixed(1), String(n), grupos.length === 1 ? 32 : 26, "#fff", 40)}`;
  });
  return marco(label, out);
}

// Niño o niña de cuerpo entero (cabeza en y - 60, pies en y + 46). color = ropa.
const nene = (x, y, s = 1, color = "var(--pen)", cara = "nino") => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M-14 -26 L-30 -2 M14 -26 L30 -2" stroke="${PIEL}" stroke-width="7" stroke-linecap="round"/>
  <path d="M-7 4 L-9 40 M7 4 L9 40" stroke="var(--ink)" stroke-width="8" stroke-linecap="round"/>
  <ellipse cx="-12" cy="43" rx="7" ry="4" fill="var(--red)"/><ellipse cx="12" cy="43" rx="7" ry="4" fill="var(--red)"/>
  <rect x="-15" y="-32" width="30" height="38" rx="8" fill="${color}"/>
  <g transform="translate(0 -50) scale(1.1)">${I[cara]}</g></g>`;

const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 95/2022, segundo ciclo de Educación Infantil).`, ideas });
const FUENTES = [{ t: "Real Decreto 95/2022, ordenación y enseñanzas mínimas de la Educación Infantil (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-1654" }];

module.exports = { nene, t, titulo, escena, fila, contar, PROF, FUENTES };
