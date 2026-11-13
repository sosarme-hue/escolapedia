// Ayudas para los temas de Infantil 4 años (lote A: Crecimiento en armonía y Descubrimiento del entorno).
// No es un tema (empieza por "_"). Reutiliza los dibujos de _peque.js y _pri1-dib.js y añade los que faltan.
const { F, D, mapa } = require("./_util");
const { fz } = require("./_lenguas");
const P = require("./_peque");
const K = require("./_pri1-dib");

const { I, ic, marco } = P;
const MARRON = "#a0703c", PIEL = "#f2c79e", BLANCO = "#ffffff", GRIS = "#9aa3b5", NEGRO = "#2a2a2a", ROSA = "#f08fb0", LILA = "#8a5cc7", NARANJA = "#f08a24";

// Cara sencilla con gorro o detalle encima (para emociones y oficios).
const cara = (boca, extra = "", ojos = `<circle cx="-5" cy="-1" r="2" fill="${NEGRO}"/><circle cx="5" cy="-1" r="2" fill="${NEGRO}"/>`) =>
  `<circle r="15" fill="${PIEL}"/>${ojos}${boca}${extra}`;
const PELO = `<path d="M-15 -4 Q-14 -18 0 -17 Q14 -18 15 -4 Q8 -12 -15 -4z" fill="${MARRON}"/>`;

// Dibujos nuevos de unos 40 × 40 px centrados en (0, 0). Solo se añaden si no existen ya.
const NUEVOS = {
  // Higiene
  cepillo: `<g transform="rotate(-35)"><rect x="-20" y="-3" width="30" height="6" rx="3" fill="var(--water)"/><rect x="8" y="-4" width="12" height="8" rx="2" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><path d="M10 -4 v-6 M13 -4 v-6 M16 -4 v-6 M19 -4 v-6" stroke="var(--water)" stroke-width="1.6"/></g>`,
  jabon: `<rect x="-16" y="-8" width="32" height="20" rx="8" fill="${ROSA}"/><circle cx="-10" cy="-14" r="5" fill="none" stroke="var(--water)" stroke-width="2"/><circle cx="4" cy="-17" r="3.5" fill="none" stroke="var(--water)" stroke-width="2"/><circle cx="14" cy="-13" r="2.5" fill="none" stroke="var(--water)" stroke-width="2"/>`,
  ducha: `<path d="M-16 -18 H6 V-12" stroke="${GRIS}" stroke-width="3" fill="none"/><path d="M-4 -12 H16 L12 -6 H0z" fill="${GRIS}"/><g stroke="var(--water)" stroke-width="2.5" stroke-linecap="round"><path d="M2 -1 l-2 7 M7 -1 l-1 7 M12 -1 l0 7 M4 10 l-1 6 M10 10 l0 6"/></g>`,
  toalla: `<rect x="-14" y="-16" width="28" height="32" rx="3" fill="var(--water)"/><path d="M-14 8 H14 M-14 12 H14" stroke="${BLANCO}" stroke-width="2"/><path d="M-18 -16 H18" stroke="${MARRON}" stroke-width="4" stroke-linecap="round"/>`,
  peine: `<rect x="-18" y="-10" width="36" height="7" rx="3" fill="var(--inf)"/><path d="${[...Array(9)].map((_, i) => `M${-16 + i * 4} -3 V10`).join(" ")}" stroke="var(--inf)" stroke-width="2.5"/>`,
  // Comida
  zanahoria: `<path d="M-4 -10 L4 -10 L1 18 Q0 20 -1 18z" fill="${NARANJA}"/><path d="M0 -10 q-8 -8 -4 -12 M0 -10 q0 -10 3 -12 M0 -10 q8 -8 6 -12" stroke="var(--leaf)" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  brocoli: `<path d="M-3 18 V0 M3 18 V0" stroke="#7fbf5a" stroke-width="5"/><circle cx="-9" cy="-4" r="8" fill="var(--leaf)"/><circle cx="9" cy="-4" r="8" fill="var(--leaf)"/><circle cy="-12" r="9" fill="var(--leaf)"/><circle cy="-2" r="7" fill="var(--leaf)"/>`,
  naranja: `<circle cy="2" r="15" fill="${NARANJA}"/><path d="M0 -13 q2 -5 6 -6" stroke="${MARRON}" stroke-width="2" fill="none"/><ellipse cx="7" cy="-16" rx="5" ry="2.5" fill="var(--leaf)"/>`,
  pastel: `<rect x="-16" y="-2" width="32" height="18" rx="3" fill="${ROSA}"/><path d="M-16 -2 q4 6 8 0 q4 6 8 0 q4 6 8 0 q4 6 8 0" fill="${BLANCO}"/><rect x="-2" y="-16" width="4" height="12" fill="var(--water)"/><path d="M0 -17 q-4 -5 0 -9 q4 4 0 9z" fill="var(--sun)"/>`,
  caramelo: `<ellipse rx="10" ry="8" fill="var(--red)"/><path d="M-10 0 L-19 -7 V7z M10 0 L19 -7 V7z" fill="var(--red)"/><path d="M-4 -6 q4 6 0 12 M3 -6 q4 6 0 12" stroke="${BLANCO}" stroke-width="2" fill="none"/>`,
  // Seguridad
  semaforo: `<rect x="-9" y="-20" width="18" height="40" rx="4" fill="${NEGRO}"/><circle cy="-11" r="5" fill="var(--red)"/><circle cy="0" r="5" fill="#6b5a1e"/><circle cy="11" r="5" fill="var(--ok)"/>`,
  enchufe: `<rect x="-16" y="-16" width="32" height="32" rx="6" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/><circle r="10" fill="none" stroke="${GRIS}" stroke-width="2"/><circle cx="-4" r="2.4" fill="${NEGRO}"/><circle cx="4" r="2.4" fill="${NEGRO}"/>`,
  fuego: `<path d="M0 18 C-16 16 -16 0 -6 -8 C-6 0 -2 2 0 -2 C0 -10 4 -16 2 -20 C14 -12 16 6 0 18z" fill="${NARANJA}"/><path d="M0 16 C-7 14 -6 6 -2 2 C0 6 4 6 3 2 C8 6 7 14 0 16z" fill="var(--sun)"/>`,
  casco: `<path d="M-18 6 Q-18 -16 0 -16 Q18 -16 18 6z" fill="var(--red)"/><path d="M-20 6 H20" stroke="${NEGRO}" stroke-width="3" stroke-linecap="round"/><path d="M-6 -15 V4 M6 -15 V4" stroke="${BLANCO}" stroke-width="2"/>`,
  cuchillo: `<path d="M-18 4 H2 L18 -2 Q10 -6 2 -4 H-18z" fill="${GRIS}"/><rect x="-20" y="-4" width="14" height="9" rx="3" fill="${MARRON}"/>`,
  medicina: `<rect x="-10" y="-12" width="20" height="28" rx="4" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/><rect x="-8" y="-18" width="16" height="7" rx="2" fill="var(--red)"/><path d="M0 -2 V10 M-6 4 H6" stroke="var(--red)" stroke-width="3"/>`,
  // Emociones
  enfadado: cara(`<path d="M-6 9 q6 -5 12 0" stroke="${NEGRO}" stroke-width="2" fill="none" stroke-linecap="round"/>`, `<path d="M-9 -7 l6 3 M9 -7 l-6 3" stroke="${NEGRO}" stroke-width="2.2" stroke-linecap="round"/>${PELO}`).replace(`r="15" fill="${PIEL}"`, `r="15" fill="#f4a08a"`),
  asustado: cara(`<ellipse cy="8" rx="4" ry="5" fill="${NEGRO}"/>`, PELO, `<circle cx="-5" cy="-1" r="3" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.2"/><circle cx="5" cy="-1" r="3" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.2"/><circle cx="-5" cy="-1" r="1.3" fill="${NEGRO}"/><circle cx="5" cy="-1" r="1.3" fill="${NEGRO}"/>`),
  tranquilo: cara(`<path d="M-5 6 q5 4 10 0" stroke="${NEGRO}" stroke-width="2" fill="none" stroke-linecap="round"/>`, PELO, `<path d="M-8 -1 q3 3 6 0 M2 -1 q3 3 6 0" stroke="${NEGRO}" stroke-width="2" fill="none" stroke-linecap="round"/>`),
  // Animales salvajes
  jirafa: `<path d="M-12 8 v12 M-6 8 v12 M4 8 v12 M9 8 v12" stroke="var(--sun)" stroke-width="3.5" stroke-linecap="round"/><ellipse cx="-2" cy="6" rx="13" ry="7" fill="var(--sun)"/><path d="M4 4 L8 -14 L13 -13 L10 6z" fill="var(--sun)"/><ellipse cx="13" cy="-15" rx="7" ry="4.5" fill="var(--sun)"/><path d="M10 -19 v-4 M14 -19 v-4" stroke="${MARRON}" stroke-width="2" stroke-linecap="round"/><circle cx="-6" cy="5" r="2.2" fill="${MARRON}"/><circle cx="2" cy="8" r="2" fill="${MARRON}"/><circle cx="8" cy="-4" r="1.6" fill="${MARRON}"/><circle cx="15" cy="-16" r="1.3" fill="${NEGRO}"/>`,
  cebra: `<ellipse rx="13" ry="15" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.5"/><path d="M-12 -6 h7 M-13 0 h8 M-12 6 h7 M12 -6 h-7 M13 0 h-8 M12 6 h-7" stroke="${NEGRO}" stroke-width="2.4"/><ellipse cy="10" rx="8" ry="5" fill="${GRIS}"/><circle cx="-5" cy="-5" r="1.8" fill="${NEGRO}"/><circle cx="5" cy="-5" r="1.8" fill="${NEGRO}"/><path d="M-6 -15 l-3 -5 M6 -15 l3 -5" stroke="${NEGRO}" stroke-width="2.5" stroke-linecap="round"/>`,
  mono: `<circle cx="-15" cy="0" r="6" fill="${MARRON}"/><circle cx="15" cy="0" r="6" fill="${MARRON}"/><circle r="14" fill="${MARRON}"/><ellipse cy="4" rx="10" ry="9" fill="#e7c194"/><circle cx="-4" cy="-1" r="1.8" fill="${NEGRO}"/><circle cx="4" cy="-1" r="1.8" fill="${NEGRO}"/><path d="M-4 7 q4 3 8 0" stroke="${NEGRO}" stroke-width="1.6" fill="none"/>`,
  serpiente: `<path d="M-18 12 Q-10 2 -2 12 T14 10 Q18 0 10 -6" stroke="var(--leaf)" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="10" cy="-9" r="6" fill="var(--leaf)"/><circle cx="12" cy="-11" r="1.4" fill="${NEGRO}"/><path d="M15 -6 l4 2 l-1 2" stroke="var(--red)" stroke-width="1.5" fill="none"/>`,
  cocodrilo: `<path d="M-20 4 Q-12 -8 4 -6 L20 -4 L20 2 L4 4 Q-6 10 -20 4z" fill="var(--leaf)"/><path d="M4 -1 L20 -1" stroke="#1f6e31" stroke-width="1.5"/><path d="M8 -1 l2 3 l2 -3 l2 3 l2 -3" stroke="${BLANCO}" stroke-width="1.2" fill="none"/><circle cx="2" cy="-7" r="2.5" fill="var(--leaf)"/><circle cx="2" cy="-7" r="1.1" fill="${NEGRO}"/><path d="M-12 -2 l2 -4 l2 4 M-5 -4 l2 -4 l2 4" fill="#1f6e31"/>`,
  tigre: `<circle cx="-11" cy="-11" r="5" fill="${NARANJA}"/><circle cx="11" cy="-11" r="5" fill="${NARANJA}"/><circle r="15" fill="${NARANJA}"/><path d="M0 -15 v6 M-6 -14 l2 5 M6 -14 l-2 5 M-15 0 h6 M15 0 h-6" stroke="${NEGRO}" stroke-width="2"/><ellipse cy="6" rx="8" ry="6" fill="${BLANCO}"/><circle cx="-5" cy="-3" r="1.8" fill="${NEGRO}"/><circle cx="5" cy="-3" r="1.8" fill="${NEGRO}"/><path d="M-2 3 h4 l-2 2z" fill="${NEGRO}"/>`,
  // Plantas
  semilla: `<ellipse rx="9" ry="13" fill="${MARRON}" transform="rotate(25)"/><path d="M-3 -8 q5 8 2 16" stroke="#7a5228" stroke-width="1.5" fill="none" transform="rotate(25)"/>`,
  brote: `<path d="M-18 12 H18" stroke="${MARRON}" stroke-width="5" stroke-linecap="round"/><path d="M0 12 V-6" stroke="var(--leaf)" stroke-width="3"/><path d="M0 -4 q-12 -2 -12 -12 q10 0 12 10z M0 -6 q10 -2 12 -12 q-10 0 -12 10z" fill="var(--leaf)"/>`,
  maceta: `<path d="M-12 4 H12 L9 20 H-9z" fill="#c0663a"/><rect x="-14" y="0" width="28" height="6" rx="2" fill="#a8532c"/><path d="M0 0 V-14" stroke="var(--leaf)" stroke-width="3"/><path d="M0 -8 q-10 -2 -10 -10 q8 0 10 8z M0 -10 q10 -2 10 -10 q-8 0 -10 8z" fill="var(--leaf)"/>`,
  regadera: `<path d="M-14 -6 H8 V14 H-14z" fill="var(--water)"/><path d="M8 0 L20 -12" stroke="var(--water)" stroke-width="4" stroke-linecap="round"/><path d="M-14 -2 q-8 2 -6 10" stroke="var(--water)" stroke-width="3" fill="none"/><path d="M-10 -6 q7 -10 14 0" stroke="var(--water)" stroke-width="3" fill="none"/>`,
  // Agua
  gota: `<path d="M0 -18 C8 -6 14 2 14 7 A14 14 0 0 1 -14 7 C-14 2 -8 -6 0 -18z" fill="var(--water)"/><path d="M-7 6 q0 6 5 8" stroke="${BLANCO}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
  grifo: `<rect x="-16" y="-14" width="8" height="12" fill="${GRIS}"/><path d="M-8 -10 H10 Q16 -10 16 -4 V0 H10 V-4 H-8z" fill="${GRIS}"/><rect x="-4" y="-18" width="8" height="8" rx="2" fill="var(--red)"/><path d="M13 4 v4 M13 11 v4 M13 18 v2" stroke="var(--water)" stroke-width="3" stroke-linecap="round"/>`,
  hielo: `<rect x="-14" y="-14" width="28" height="28" rx="5" fill="#cfe9ff" stroke="var(--water)" stroke-width="2"/><path d="M-8 -8 l6 0 M-8 -4 l3 0" stroke="${BLANCO}" stroke-width="2.5" stroke-linecap="round"/>`,
  vapor: `<path d="M-14 18 H14 L12 6 H-12z" fill="${GRIS}"/><path d="M-6 2 q-4 -6 0 -10 q4 -4 0 -10 M6 2 q-4 -6 0 -10 q4 -4 0 -10" stroke="${GRIS}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
  mar: `<path d="M-20 -2 q5 -6 10 0 q5 6 10 0 q5 -6 10 0 q5 6 10 0 V18 H-20z" fill="var(--water)"/><path d="M-20 8 q5 -5 10 0 q5 5 10 0 q5 -5 10 0 q5 5 10 0" stroke="${BLANCO}" stroke-width="2" fill="none"/>`,
  // Oficios: cara con gorro o símbolo
  medico: cara(`<path d="M-5 6 q5 4 10 0" stroke="${NEGRO}" stroke-width="2" fill="none"/>`, `<path d="M-15 -4 Q-14 -18 0 -17 Q14 -18 15 -4 Q8 -12 -15 -4z" fill="${NEGRO}"/><path d="M-12 10 q-6 10 6 12 M12 10 q6 10 -6 12" stroke="${GRIS}" stroke-width="2" fill="none"/><circle cy="20" r="3" fill="${GRIS}"/>`),
  bombero: cara(`<path d="M-5 6 q5 4 10 0" stroke="${NEGRO}" stroke-width="2" fill="none"/>`, `<path d="M-19 -6 H19 Q16 -24 0 -24 Q-16 -24 -19 -6z" fill="var(--red)"/><rect x="-5" y="-20" width="10" height="8" rx="2" fill="var(--sun)"/>`),
  cocinero: cara(`<path d="M-5 6 q5 4 10 0" stroke="${NEGRO}" stroke-width="2" fill="none"/>`, `<circle cx="-8" cy="-17" r="6" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><circle cx="8" cy="-17" r="6" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><circle cy="-20" r="7" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><rect x="-12" y="-15" width="24" height="7" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/>`),
  policia: cara(`<path d="M-5 6 q5 4 10 0" stroke="${NEGRO}" stroke-width="2" fill="none"/>`, `<path d="M-16 -8 H16 L14 -20 H-14z" fill="#1f3f8a"/><rect x="-18" y="-10" width="36" height="4" rx="2" fill="${NEGRO}"/><circle cy="-15" r="3" fill="var(--sun)"/>`),
  maestra: cara(`<path d="M-5 6 q5 4 10 0" stroke="${NEGRO}" stroke-width="2" fill="none"/>`, `<path d="M-15 -2 Q-14 -18 0 -17 Q14 -18 15 -2 Q4 -12 -15 -2z" fill="${NEGRO}"/><circle cy="-18" r="6" fill="${NEGRO}"/><circle cx="-5" cy="-1" r="4" fill="none" stroke="${NEGRO}" stroke-width="1.4"/><circle cx="5" cy="-1" r="4" fill="none" stroke="${NEGRO}" stroke-width="1.4"/>`),
  granjero: cara(`<path d="M-5 6 q5 4 10 0" stroke="${NEGRO}" stroke-width="2" fill="none"/>`, `<ellipse cy="-10" rx="22" ry="5" fill="#e0b84f"/><path d="M-11 -10 Q-10 -24 0 -24 Q10 -24 11 -10z" fill="#e0b84f"/><path d="M-11 -13 H11" stroke="var(--red)" stroke-width="3"/>`),
  // Transportes
  bici: `<circle cx="-11" cy="6" r="8" fill="none" stroke="${NEGRO}" stroke-width="2.5"/><circle cx="11" cy="6" r="8" fill="none" stroke="${NEGRO}" stroke-width="2.5"/><path d="M-11 6 L-3 -6 H8 L11 6 M-3 -6 L1 6 L8 -6 M-5 -10 H0 M8 -6 L6 -12 H11" stroke="var(--red)" stroke-width="2.5" fill="none" stroke-linejoin="round"/>`,
  autobus: `<rect x="-20" y="-14" width="40" height="22" rx="4" fill="var(--sun)"/><g fill="${BLANCO}"><rect x="-16" y="-10" width="7" height="7"/><rect x="-6" y="-10" width="7" height="7"/><rect x="4" y="-10" width="7" height="7"/><rect x="13" y="-10" width="5" height="12"/></g><circle cx="-11" cy="10" r="5" fill="${NEGRO}"/><circle cx="11" cy="10" r="5" fill="${NEGRO}"/>`,
  helicoptero: `<ellipse cx="-2" cy="2" rx="13" ry="9" fill="var(--red)"/><path d="M10 0 H20 M20 -4 V4" stroke="var(--red)" stroke-width="3"/><path d="M-6 -2 a5 5 0 0 1 8 0z" fill="${BLANCO}"/><path d="M-2 -7 V-12 M-20 -12 H16" stroke="${NEGRO}" stroke-width="2.5" stroke-linecap="round"/><path d="M-10 11 v5 M4 11 v5 M-14 16 H8" stroke="${NEGRO}" stroke-width="2" stroke-linecap="round"/>`,
  cohete: `<path d="M0 -20 Q10 -10 8 8 H-8 Q-10 -10 0 -20z" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><circle cy="-4" r="4" fill="var(--water)"/><path d="M-8 2 L-14 12 H-8z M8 2 L14 12 H8z" fill="var(--red)"/><path d="M-5 9 Q0 22 5 9z" fill="${NARANJA}"/>`,
  camion: `<rect x="-20" y="-14" width="26" height="20" fill="var(--water)"/><path d="M6 -8 H14 L20 0 V6 H6z" fill="var(--red)"/><rect x="9" y="-5" width="6" height="5" fill="${BLANCO}"/><circle cx="-12" cy="9" r="5" fill="${NEGRO}"/><circle cx="12" cy="9" r="5" fill="${NEGRO}"/>`,
  moto: `<circle cx="-12" cy="8" r="7" fill="none" stroke="${NEGRO}" stroke-width="3"/><circle cx="12" cy="8" r="7" fill="none" stroke="${NEGRO}" stroke-width="3"/><path d="M-12 8 L-4 -2 H8 L12 8" stroke="var(--red)" stroke-width="4" fill="none" stroke-linejoin="round"/><path d="M-6 -6 H4" stroke="${NEGRO}" stroke-width="4" stroke-linecap="round"/><path d="M8 -2 L10 -10 H14" stroke="${NEGRO}" stroke-width="2.5" fill="none"/>`,
  // Medir y contar
  galleta: `<circle r="15" fill="#d9a066" stroke="${MARRON}" stroke-width="2"/><circle cx="-6" cy="-5" r="2.4" fill="#5a3a1a"/><circle cx="5" cy="-6" r="2.4" fill="#5a3a1a"/><circle cx="-2" cy="5" r="2.4" fill="#5a3a1a"/><circle cx="7" cy="5" r="2.4" fill="#5a3a1a"/>`,
  cubo: `<rect x="-12" y="-12" width="24" height="24" rx="3" fill="var(--pen)"/><rect x="-8" y="-8" width="8" height="8" rx="2" fill="${BLANCO}" opacity=".35"/>`,
};
for (const [k, v] of Object.entries(NUEVOS)) if (!I[k]) I[k] = v;

// Texto que se ajusta al ancho (máx. «max» px).
const t = (x, y, s, { size = 16, color = "var(--ink)", max = 236, font = D, w = 800, anchor = "middle" } = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${fz(String(s), size, max, true)}" font-weight="${w}" fill="${color}" ${font}>${s}</text>`;

// Formas básicas (centro x, y y tamaño r).
const forma = (tipo, x, y, r = 22, c = "var(--pen)") => ({
  circulo: `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`,
  cuadrado: `<rect x="${x - r}" y="${y - r}" width="${2 * r}" height="${2 * r}" rx="3" fill="${c}"/>`,
  triangulo: `<path d="M${x} ${y - r} L${x + r * 1.1} ${y + r * 0.85} L${x - r * 1.1} ${y + r * 0.85}z" fill="${c}"/>`,
  rectangulo: `<rect x="${x - r * 1.5}" y="${y - r * 0.75}" width="${3 * r}" height="${1.5 * r}" rx="3" fill="${c}"/>`,
}[tipo]);

// Fila de dibujos en la figura grande (640 × 260): [dibujo, palabra, color].
function figura(titulo, label, items) {
  const n = items.length, w = 600 / n;
  const cuerpo = items.map(([d, p, c], i) => {
    const x = 20 + w * (i + 0.5);
    return `${ic(d, x, 100, 2.7)}<text x="${x}" y="212" text-anchor="middle" font-size="${fz(p, 24, w - 12, true)}" font-weight="800" fill="${c || "var(--ink)"}" ${D}>${p}</text>`;
  }).join("");
  return { titulo, svg: `<svg viewBox="0 0 640 260" role="img" aria-label="${label}"><rect width="640" height="260" rx="16" fill="var(--paper)"/>${cuerpo}</svg>` };
}

const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 95/2022, segundo ciclo de Educación Infantil).`, ideas });
const FUENTES = [{ t: "Real Decreto 95/2022, ordenación y enseñanzas mínimas de la Educación Infantil (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-1654" }];
const vid = (id, titulo, canal, vistas, busqueda) => ({ id, titulo, canal, vistas, megusta: 0, ...(busqueda ? { busqueda } : {}) });

module.exports = {
  ...P, nino: K.nino, sol: K.sol, nube: K.nube, arbol: K.arbol, flor: K.flor, estrella: K.estrella, corazon: K.corazon, pelota: K.pelota, suelo: K.suelo, flechaR: K.flechaR, tick: K.tick, equis: K.equis, bocadillo: K.bocadillo, casa: K.casa,
  F, D, mapa, fz, t, forma, figura, PROF, FUENTES, vid, MARRON, PIEL, BLANCO, GRIS, NEGRO, ROSA, LILA, NARANJA,
};
