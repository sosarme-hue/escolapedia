// Utilidades de dibujo para los temas de 1º de Primaria (lenguas sobre todo).
// Letra grande, pocas palabras y dibujos sencillos hechos para Escolapedia (SVG propio).
const { F, D } = require("./_util");
const { fz, cabe } = require("./_lenguas");

const BG = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;
const marco = (label, inner) => `<svg viewBox="0 0 260 180" role="img" aria-label="${label}">${BG}<g ${F}>${inner}</g></svg>`;

// Colores naturales que no cambian con el modo oscuro.
const MARRON = "#a0703c", PIEL = "#f2c79e", BLANCO = "#ffffff", GRIS = "#9aa3b5", LILA = "#8a5cc7", ROSA = "#f08fb0", NEGRO = "#2a2a2a";

// Dibujos de unos 40 × 40 px centrados en (0, 0).
const cara = (pelo, extra = "") => `<circle r="15" fill="${PIEL}"/>${pelo}<circle cx="-5" cy="-1" r="2" fill="${NEGRO}"/><circle cx="5" cy="-1" r="2" fill="${NEGRO}"/><path d="M-5 6 q5 5 10 0" stroke="${NEGRO}" stroke-width="2" fill="none" stroke-linecap="round"/>${extra}`;
const I = {
  sol: `<circle r="10" fill="var(--sun)"/><g stroke="var(--sun)" stroke-width="3" stroke-linecap="round">${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<path d="M0 -14 V -19" transform="rotate(${a})"/>`).join("")}</g>`,
  luna: `<path d="M4 -17 A17 17 0 0 0 4 17 A10 17 0 0 1 4 -17z" fill="var(--sun)"/>`,
  estrella: `<path d="M0 -18 L5 -6 L18 -6 L8 2 L12 15 L0 7 L-12 15 L-8 2 L-18 -6 L-5 -6z" fill="var(--sun)"/>`,
  nube: `<g fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"><path d="M-16 8 a8 8 0 0 1 2 -15 a10 10 0 0 1 18 -3 a8 8 0 0 1 12 9 a7 7 0 0 1 0 9z"/></g>`,
  lluvia: `<path d="M-16 2 a8 8 0 0 1 2 -15 a10 10 0 0 1 18 -3 a8 8 0 0 1 12 9 a7 7 0 0 1 0 9z" fill="${GRIS}"/><g stroke="var(--water)" stroke-width="3" stroke-linecap="round"><path d="M-8 8 l-3 8 M2 8 l-3 8 M12 8 l-3 8"/></g>`,
  nieve: `<g stroke="var(--water)" stroke-width="3" stroke-linecap="round">${[0, 60, 120].map((a) => `<path d="M0 -17 V 17" transform="rotate(${a})"/>`).join("")}</g><circle r="4" fill="var(--water)"/>`,
  viento: `<g stroke="var(--muted)" stroke-width="3" fill="none" stroke-linecap="round"><path d="M-18 -8 H6 a5 5 0 1 0 -5 -5"/><path d="M-18 2 H12 a5 5 0 1 1 -5 5"/><path d="M-14 12 H0"/></g>`,
  paraguas: `<path d="M-18 0 A18 16 0 0 1 18 0z" fill="var(--red)"/><path d="M0 0 V14 a4 4 0 0 1 -8 0" stroke="var(--ink)" stroke-width="2.5" fill="none"/>`,
  casa: `<path d="M-18 -2 L0 -18 L18 -2z" fill="var(--red)"/><rect x="-14" y="-2" width="28" height="20" fill="var(--sun)"/><rect x="-4" y="6" width="8" height="12" fill="${MARRON}"/>`,
  arbol: `<rect x="-3" y="2" width="6" height="16" fill="${MARRON}"/><circle cy="-6" r="13" fill="var(--leaf)"/>`,
  flor: `<path d="M0 0 V18" stroke="var(--leaf)" stroke-width="3"/>${[0, 72, 144, 216, 288].map((a) => `<circle cy="-8" r="6" fill="${ROSA}" transform="translate(0 -4) rotate(${a})"/>`).join("")}<circle cy="-4" r="5" fill="var(--sun)"/>`,
  rosa: `<path d="M0 2 V18" stroke="var(--leaf)" stroke-width="3"/><ellipse cx="6" cy="10" rx="5" ry="3" fill="var(--leaf)"/><circle cy="-6" r="11" fill="var(--red)"/><path d="M-5 -8 q5 -6 10 0 q-5 5 -8 1" stroke="#9c1f18" stroke-width="2" fill="none"/>`,
  manzana: `<circle cy="2" r="14" fill="var(--red)"/><path d="M0 -10 q2 -6 6 -8" stroke="${MARRON}" stroke-width="2.5" fill="none"/><ellipse cx="7" cy="-15" rx="5" ry="3" fill="var(--leaf)"/>`,
  pera: `<path d="M0 -14 C-6 -14 -6 -4 -9 2 C-14 12 -6 18 0 18 C6 18 14 12 9 2 C6 -4 6 -14 0 -14z" fill="#9bc53d"/><path d="M0 -14 V -19" stroke="${MARRON}" stroke-width="2.5"/>`,
  uva: `<g fill="${LILA}">${[[-8, -8], [0, -8], [8, -8], [-4, 0], [4, 0], [0, 8], [-8, 0], [8, 0], [-4, 8], [4, 8], [0, 15]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5"/>`).join("")}</g><path d="M0 -13 V -19" stroke="${MARRON}" stroke-width="2.5"/>`,
  platano: `<path d="M-16 -6 C-12 12 10 16 18 4 C8 10 -6 6 -12 -8z" fill="var(--sun)"/>`,
  pan: `<path d="M-18 6 C-18 -12 18 -12 18 6z" fill="${MARRON}"/><g stroke="#e7c08f" stroke-width="2"><path d="M-8 -6 l4 6 M0 -8 l4 6 M8 -6 l4 6"/></g>`,
  queso: `<path d="M-18 12 L-18 -2 L16 -12 L18 12z" fill="var(--sun)"/><g fill="#d99a00"><circle cx="-8" cy="4" r="3"/><circle cx="6" cy="2" r="3.5"/><circle cx="-2" cy="-4" r="2"/></g>`,
  leche: `<path d="M-10 -16 H10 L8 18 H-8z" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/><path d="M-9 -4 H9" stroke="${GRIS}" stroke-width="1.5"/>`,
  agua: `<path d="M-10 -16 H10 L8 18 H-8z" fill="var(--water)" opacity=".8"/><path d="M-10 -16 H10" stroke="${GRIS}" stroke-width="2"/>`,
  huevo: `<ellipse cy="2" rx="12" ry="16" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/>`,
  pez: `<ellipse cx="-3" rx="14" ry="9" fill="var(--water)"/><path d="M9 0 L19 -9 L19 9z" fill="var(--water)"/><circle cx="-9" cy="-2" r="2" fill="${BLANCO}"/>`,
  pollo: `<ellipse cy="5" rx="13" ry="11" fill="var(--sun)"/><circle cx="-6" cy="-9" r="8" fill="var(--sun)"/><path d="M-14 -9 l-6 2 l6 2z" fill="var(--inf)"/><circle cx="-7" cy="-11" r="1.6" fill="${NEGRO}"/>`,
  pato: `<ellipse cx="2" cy="6" rx="16" ry="10" fill="var(--sun)"/><circle cx="-8" cy="-8" r="8" fill="var(--sun)"/><path d="M-16 -8 h-6 l3 4 h4z" fill="var(--inf)"/><circle cx="-9" cy="-10" r="1.6" fill="${NEGRO}"/>`,
  gato: `<path d="M-14 -6 L-12 -19 L-4 -12z M14 -6 L12 -19 L4 -12z" fill="var(--inf)"/><circle r="14" fill="var(--inf)"/><circle cx="-5" cy="-2" r="2" fill="${NEGRO}"/><circle cx="5" cy="-2" r="2" fill="${NEGRO}"/><path d="M0 3 l-2 2 h4z" fill="${ROSA}"/><g stroke="${NEGRO}" stroke-width="1"><path d="M-4 6 H-17 M-4 8 L-16 11 M4 6 H17 M4 8 L16 11"/></g>`,
  perro: `<ellipse cx="-13" cy="-2" rx="5" ry="10" fill="${MARRON}"/><ellipse cx="13" cy="-2" rx="5" ry="10" fill="${MARRON}"/><circle r="13" fill="#d9a066"/><circle cx="-5" cy="-3" r="2" fill="${NEGRO}"/><circle cx="5" cy="-3" r="2" fill="${NEGRO}"/><ellipse cy="5" rx="4" ry="3" fill="${NEGRO}"/>`,
  oso: `<circle cx="-11" cy="-11" r="6" fill="${MARRON}"/><circle cx="11" cy="-11" r="6" fill="${MARRON}"/><circle r="14" fill="${MARRON}"/><ellipse cy="5" rx="7" ry="5" fill="#d9a066"/><circle cx="-5" cy="-3" r="2" fill="${NEGRO}"/><circle cx="5" cy="-3" r="2" fill="${NEGRO}"/><circle cy="3" r="2.2" fill="${NEGRO}"/>`,
  raton: `<circle cx="-11" cy="-10" r="8" fill="${GRIS}"/><circle cx="11" cy="-10" r="8" fill="${GRIS}"/><circle cy="2" r="12" fill="${GRIS}"/><circle cx="-4" cy="0" r="1.8" fill="${NEGRO}"/><circle cx="4" cy="0" r="1.8" fill="${NEGRO}"/><circle cy="7" r="2.2" fill="${ROSA}"/>`,
  conejo: `<ellipse cx="-6" cy="-14" rx="4" ry="10" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><ellipse cx="6" cy="-14" rx="4" ry="10" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><circle cy="5" r="12" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><circle cx="-4" cy="3" r="1.8" fill="${NEGRO}"/><circle cx="4" cy="3" r="1.8" fill="${NEGRO}"/><circle cy="9" r="2" fill="${ROSA}"/>`,
  vaca: `<ellipse cx="-15" cy="-6" rx="6" ry="3" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.5"/><ellipse cx="15" cy="-6" rx="6" ry="3" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.5"/><ellipse rx="12" ry="14" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.5"/><circle cx="-5" cy="-7" r="4" fill="${NEGRO}"/><ellipse cy="8" rx="10" ry="6" fill="${ROSA}"/><circle cx="-5" cy="-2" r="1.8" fill="${NEGRO}"/><circle cx="5" cy="-2" r="1.8" fill="${NEGRO}"/>`,
  cerdo: `<path d="M-12 -10 l-2 -8 l8 4z M12 -10 l2 -8 l-8 4z" fill="${ROSA}"/><circle r="14" fill="${ROSA}"/><ellipse cy="4" rx="6" ry="4" fill="#e06f98"/><circle cx="-2" cy="4" r="1.2" fill="${NEGRO}"/><circle cx="2" cy="4" r="1.2" fill="${NEGRO}"/><circle cx="-5" cy="-5" r="1.8" fill="${NEGRO}"/><circle cx="5" cy="-5" r="1.8" fill="${NEGRO}"/>`,
  leon: `<circle r="18" fill="var(--inf)"/><circle r="12" fill="var(--sun)"/><circle cx="-4" cy="-3" r="1.8" fill="${NEGRO}"/><circle cx="4" cy="-3" r="1.8" fill="${NEGRO}"/><path d="M0 3 l-3 2 h6z" fill="${MARRON}"/>`,
  rana: `<circle cx="-7" cy="-10" r="6" fill="var(--leaf)"/><circle cx="7" cy="-10" r="6" fill="var(--leaf)"/><ellipse cy="3" rx="16" ry="11" fill="var(--leaf)"/><circle cx="-7" cy="-11" r="2.5" fill="${NEGRO}"/><circle cx="7" cy="-11" r="2.5" fill="${NEGRO}"/><path d="M-8 5 q8 6 16 0" stroke="${NEGRO}" stroke-width="2" fill="none"/>`,
  pajaro: `<ellipse cx="2" cy="4" rx="14" ry="10" fill="var(--water)"/><circle cx="-8" cy="-6" r="7" fill="var(--water)"/><path d="M-15 -6 l-6 2 l6 2z" fill="var(--inf)"/><path d="M4 0 q8 -10 14 -2" fill="#1e6fb0"/><circle cx="-9" cy="-8" r="1.6" fill="${NEGRO}"/>`,
  mariposa: `<ellipse cx="-9" cy="-6" rx="9" ry="8" fill="var(--inf)"/><ellipse cx="9" cy="-6" rx="9" ry="8" fill="var(--inf)"/><ellipse cx="-7" cy="8" rx="6" ry="6" fill="var(--sun)"/><ellipse cx="7" cy="8" rx="6" ry="6" fill="var(--sun)"/><rect x="-2" y="-12" width="4" height="26" rx="2" fill="${NEGRO}"/>`,
  caracol: `<path d="M-18 14 H16 q4 0 4 -6" stroke="var(--inf)" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="-2" cy="0" r="13" fill="${MARRON}"/><path d="M-2 0 m-7 0 a7 7 0 1 1 7 7 a4 4 0 1 1 -4 -4" stroke="#e7c08f" stroke-width="2" fill="none"/>`,
  elefante: `<ellipse cx="3" cy="2" rx="16" ry="13" fill="${GRIS}"/><ellipse cx="-10" cy="-2" rx="7" ry="9" fill="#7d879a"/><path d="M-14 4 q-6 8 0 14" stroke="${GRIS}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="-7" cy="-4" r="1.6" fill="${NEGRO}"/>`,
  hormiga: `<g fill="${NEGRO}"><circle cx="-8" r="4"/><circle r="3.5"/><ellipse cx="9" rx="6" ry="5"/></g><g stroke="${NEGRO}" stroke-width="1.5"><path d="M-2 2 l-4 7 M1 2 l0 8 M4 2 l4 7 M-10 -3 l-4 -6"/></g>`,
  tortuga: `<ellipse cx="2" cy="2" rx="15" ry="11" fill="var(--leaf)"/><path d="M-6 -4 h16 M-4 6 h12 M2 -8 v18" stroke="#1d6b2c" stroke-width="1.5"/><circle cx="-17" cy="2" r="5" fill="#9bc53d"/>`,
  coche: `<path d="M-18 6 V-2 L-10 -12 H8 L16 -2 V6z" fill="var(--red)"/><rect x="-8" y="-9" width="6" height="7" fill="${BLANCO}"/><rect x="1" y="-9" width="6" height="7" fill="${BLANCO}"/><circle cx="-9" cy="8" r="5" fill="${NEGRO}"/><circle cx="9" cy="8" r="5" fill="${NEGRO}"/>`,
  barco: `<path d="M-18 4 H18 L12 14 H-12z" fill="var(--red)"/><path d="M0 2 V-18 L14 -2z" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/>`,
  tren: `<rect x="-18" y="-10" width="24" height="18" rx="2" fill="var(--pen)"/><rect x="6" y="-16" width="12" height="24" rx="2" fill="var(--red)"/><circle cx="-11" cy="11" r="4" fill="${NEGRO}"/><circle cx="1" cy="11" r="4" fill="${NEGRO}"/><circle cx="12" cy="11" r="4" fill="${NEGRO}"/>`,
  avion: `<path d="M-18 0 H16 q4 0 4 3 q0 3 -4 3 H-18z" fill="var(--pen)"/><path d="M-2 0 L-10 -14 H-4 L8 0z M-2 6 L-10 18 H-4 L8 6z M-16 0 l-4 -8 h5 l5 8z" fill="var(--pen)"/>`,
  pelota: `<circle r="15" fill="var(--water)"/><path d="M0 -15 A15 15 0 0 1 15 0 L0 0z M0 15 A15 15 0 0 1 -15 0 L0 0z" fill="var(--red)"/><path d="M15 0 A15 15 0 0 1 0 15 L0 0z" fill="var(--sun)"/><circle r="4" fill="${BLANCO}"/><circle r="15" fill="none" stroke="${NEGRO}" stroke-width="1"/>`,
  globo: `<ellipse cy="-4" rx="12" ry="14" fill="var(--red)"/><path d="M0 10 q-4 5 0 10" stroke="${NEGRO}" stroke-width="1.5" fill="none"/>`,
  libro: `<path d="M0 -10 Q-10 -16 -19 -12 V14 Q-10 10 0 15z" fill="var(--pen)"/><path d="M0 -10 Q10 -16 19 -12 V14 Q10 10 0 15z" fill="#4a73e0"/>`,
  lapiz: `<g transform="rotate(-35)"><rect x="-18" y="-4" width="28" height="8" fill="var(--sun)"/><path d="M10 -4 L18 0 L10 4z" fill="#e7c08f"/><path d="M15 -1.5 L18 0 L15 1.5z" fill="${NEGRO}"/><rect x="-21" y="-4" width="4" height="8" fill="${ROSA}"/></g>`,
  goma: `<rect x="-15" y="-7" width="30" height="14" rx="3" fill="${ROSA}"/><rect x="2" y="-7" width="13" height="14" rx="3" fill="var(--water)"/>`,
  tijeras: `<g stroke="var(--muted)" stroke-width="3" stroke-linecap="round"><path d="M-2 -2 L16 -14 M-2 2 L16 14"/></g><circle cx="-9" cy="-7" r="6" fill="none" stroke="var(--red)" stroke-width="3"/><circle cx="-9" cy="7" r="6" fill="none" stroke="var(--red)" stroke-width="3"/>`,
  regla: `<rect x="-19" y="-6" width="38" height="12" rx="2" fill="var(--sun)"/><path d="M-14 -6 v5 M-8 -6 v3 M-2 -6 v5 M4 -6 v3 M10 -6 v5" stroke="${NEGRO}" stroke-width="1.2"/>`,
  mochila: `<path d="M-8 -12 q8 -10 16 0" stroke="var(--leaf)" stroke-width="3" fill="none"/><rect x="-14" y="-12" width="28" height="30" rx="7" fill="var(--leaf)"/><rect x="-9" y="2" width="18" height="11" rx="3" fill="#1d6b2c"/>`,
  mesa: `<rect x="-19" y="-8" width="38" height="6" rx="2" fill="${MARRON}"/><path d="M-15 -2 V16 M15 -2 V16" stroke="${MARRON}" stroke-width="4"/>`,
  silla: `<path d="M-10 -18 V16 M-10 2 H10 V16" stroke="var(--red)" stroke-width="4" fill="none"/><rect x="-12" y="-2" width="24" height="5" fill="var(--red)"/>`,
  pizarra: `<rect x="-19" y="-15" width="38" height="26" rx="2" fill="#24543a" stroke="${MARRON}" stroke-width="3"/><path d="M-12 -6 h14 M-12 2 h20" stroke="${BLANCO}" stroke-width="2"/><path d="M-8 11 l-4 8 M8 11 l4 8" stroke="${MARRON}" stroke-width="3"/>`,
  camiseta: `<path d="M-8 -16 L-19 -9 L-15 -1 L-11 -4 V16 H11 V-4 L15 -1 L19 -9 L8 -16 Q0 -10 -8 -16z" fill="var(--pen)"/>`,
  pantalon: `<path d="M-12 -16 H12 L14 18 H3 L0 -2 L-3 18 H-14z" fill="${MARRON}"/>`,
  falda: `<path d="M-8 -12 H8 L16 14 H-16z" fill="${ROSA}"/><rect x="-9" y="-15" width="18" height="5" fill="var(--red)"/>`,
  vestido: `<path d="M-6 -18 L-8 -6 L-16 16 H16 L8 -6 L6 -18 Q0 -14 -6 -18z" fill="${LILA}"/>`,
  zapato: `<path d="M-18 4 V-8 H-6 Q-2 2 10 0 Q18 0 18 8 H-18z" fill="var(--red)"/><rect x="-18" y="8" width="36" height="4" fill="${NEGRO}"/>`,
  gorro: `<path d="M-16 8 Q-16 -16 0 -16 Q16 -16 16 8z" fill="var(--red)"/><rect x="-18" y="6" width="36" height="7" rx="3" fill="${BLANCO}" stroke="${GRIS}"/><circle cy="-17" r="5" fill="${BLANCO}" stroke="${GRIS}"/>`,
  abrigo: `<path d="M-8 -16 L-19 -8 L-17 16 H17 L19 -8 L8 -16 L0 -6z" fill="var(--water)"/><path d="M0 -6 V16" stroke="#1e6fb0" stroke-width="2"/><g fill="#1e6fb0"><circle cx="3" cy="0" r="1.5"/><circle cx="3" cy="7" r="1.5"/></g>`,
  gafas: `<circle cx="-9" r="7" fill="none" stroke="var(--ink)" stroke-width="3"/><circle cx="9" r="7" fill="none" stroke="var(--ink)" stroke-width="3"/><path d="M-2 0 h4" stroke="var(--ink)" stroke-width="3"/>`,
  corazon: `<path d="M0 16 C-24 0 -14 -20 0 -8 C14 -20 24 0 0 16z" fill="var(--red)"/>`,
  ojo: `<path d="M-18 0 Q0 -16 18 0 Q0 16 -18 0z" fill="${BLANCO}" stroke="var(--ink)" stroke-width="2"/><circle r="6" fill="var(--water)"/><circle r="2.5" fill="${NEGRO}"/>`,
  oreja: `<path d="M-6 -16 C12 -18 14 4 2 8 C-2 10 0 16 -6 16" stroke="${MARRON}" stroke-width="3" fill="${PIEL}"/>`,
  boca: `<path d="M-16 -2 Q0 -8 16 -2 Q0 18 -16 -2z" fill="var(--red)"/><path d="M-12 0 H12" stroke="${BLANCO}" stroke-width="3"/>`,
  nariz: `<path d="M-2 -16 L-10 8 Q0 14 10 8 L2 -16" fill="${PIEL}" stroke="${MARRON}" stroke-width="2"/>`,
  mano: `<path d="M-10 18 V-2 M-10 -2 V-12 M-4 -2 V-17 M2 -2 V-15 M8 -2 V-10" stroke="${PIEL}" stroke-width="6" stroke-linecap="round"/><rect x="-13" y="-4" width="24" height="20" rx="8" fill="${PIEL}"/><path d="M11 6 l7 -8" stroke="${PIEL}" stroke-width="6" stroke-linecap="round"/>`,
  pie: `<path d="M-6 -16 V6 Q-6 14 4 14 H16 Q18 6 8 4 L6 -16z" fill="${PIEL}" stroke="${MARRON}" stroke-width="1.5"/>`,
  nino: cara(`<path d="M-15 -4 Q-14 -18 0 -17 Q14 -18 15 -4 Q8 -12 -15 -4z" fill="${MARRON}"/>`),
  nina: cara(`<path d="M-15 -2 Q-14 -18 0 -17 Q14 -18 15 -2 Q4 -12 -15 -2z" fill="#d6a23a"/><circle cx="-17" cy="-6" r="5" fill="#d6a23a"/><circle cx="17" cy="-6" r="5" fill="#d6a23a"/>`, `<circle cx="-17" cy="-11" r="3" fill="var(--red)"/><circle cx="17" cy="-11" r="3" fill="var(--red)"/>`),
  bebe: cara(`<path d="M-2 -15 q4 -4 2 -8" stroke="${MARRON}" stroke-width="2" fill="none"/>`, `<circle cy="10" r="3" fill="var(--water)"/>`),
  abuelo: cara(`<path d="M-15 -2 Q-16 -10 -10 -12 M15 -2 Q16 -10 10 -12" stroke="${GRIS}" stroke-width="5" fill="none"/>`, `<circle cx="-5" cy="-1" r="4.5" fill="none" stroke="var(--ink)" stroke-width="1.5"/><circle cx="5" cy="-1" r="4.5" fill="none" stroke="var(--ink)" stroke-width="1.5"/>`),
  abuela: cara(`<path d="M-15 -2 Q-14 -18 0 -17 Q14 -18 15 -2 Q4 -12 -15 -2z" fill="${GRIS}"/><circle cy="-19" r="6" fill="${GRIS}"/>`),
  mama: cara(`<path d="M-16 8 Q-18 -18 0 -17 Q18 -18 16 8 Q12 -8 0 -12 Q-12 -8 -16 8z" fill="#5a3518"/>`),
  papa: cara(`<path d="M-15 -4 Q-14 -18 0 -17 Q14 -18 15 -4 Q8 -12 -15 -4z" fill="${NEGRO}"/>`, `<path d="M-7 4 q7 -3 14 0" stroke="${NEGRO}" stroke-width="2.5" fill="none"/>`),
  boca_abierta: cara(`<path d="M-15 -4 Q-14 -18 0 -17 Q14 -18 15 -4 Q8 -12 -15 -4z" fill="${MARRON}"/>`, `<ellipse cy="7" rx="4" ry="5" fill="#9c1f18"/>`),
  cara_a: cara(`<path d="M-15 -4 Q-14 -18 0 -17 Q14 -18 15 -4 Q8 -12 -15 -4z" fill="${MARRON}"/>`).replace(/<path d="M-5 6[^>]*>/, `<ellipse cy="8" rx="6" ry="6" fill="#9c1f18"/>`),
  cara_e: cara(`<path d="M-15 -4 Q-14 -18 0 -17 Q14 -18 15 -4 Q8 -12 -15 -4z" fill="${MARRON}"/>`).replace(/<path d="M-5 6[^>]*>/, `<ellipse cy="8" rx="7" ry="3.5" fill="#9c1f18"/>`),
  cara_i: cara(`<path d="M-15 -4 Q-14 -18 0 -17 Q14 -18 15 -4 Q8 -12 -15 -4z" fill="${MARRON}"/>`).replace(/<path d="M-5 6[^>]*>/, `<path d="M-8 5 Q0 12 8 5z" fill="#9c1f18" stroke="#9c1f18" stroke-width="1.5"/>`),
  cara_o: cara(`<path d="M-15 -4 Q-14 -18 0 -17 Q14 -18 15 -4 Q8 -12 -15 -4z" fill="${MARRON}"/>`).replace(/<path d="M-5 6[^>]*>/, `<circle cy="8" r="4.5" fill="#9c1f18"/>`),
  cara_u: cara(`<path d="M-15 -4 Q-14 -18 0 -17 Q14 -18 15 -4 Q8 -12 -15 -4z" fill="${MARRON}"/>`).replace(/<path d="M-5 6[^>]*>/, `<circle cy="8" r="2.5" fill="#9c1f18" stroke="#d6332a" stroke-width="2"/>`),
  lobo: `<path d="M-14 -4 L-11 -20 L-3 -12z M14 -4 L11 -20 L3 -12z" fill="#6b7383"/><path d="M-15 -8 Q0 -16 15 -8 L8 10 Q0 18 -8 10z" fill="#6b7383"/><ellipse cy="8" rx="6" ry="5" fill="#c9ced8"/><circle cy="5" r="2.5" fill="${NEGRO}"/><circle cx="-6" cy="-4" r="2" fill="var(--sun)"/><circle cx="6" cy="-4" r="2" fill="var(--sun)"/>`,
  sopa: `<path d="M-19 -2 H19 Q18 16 0 16 Q-18 16 -19 -2z" fill="var(--red)"/><ellipse cy="-2" rx="19" ry="4" fill="var(--inf)"/><g stroke="var(--muted)" stroke-width="2" fill="none"><path d="M-6 -8 q-3 -5 0 -10 M2 -8 q-3 -5 0 -10"/></g>`,
  reloj: `<circle r="16" fill="${BLANCO}" stroke="var(--pen)" stroke-width="3"/><path d="M0 0 V-10 M0 0 H7" stroke="${NEGRO}" stroke-width="2.5" stroke-linecap="round"/>`,
  cama: `<rect x="-19" y="-2" width="38" height="10" fill="var(--water)"/><rect x="-19" y="-12" width="5" height="26" fill="${MARRON}"/><rect x="-13" y="-6" width="10" height="5" rx="2" fill="${BLANCO}" stroke="${GRIS}"/><path d="M17 8 V14" stroke="${MARRON}" stroke-width="4"/>`,
  cuna: `<path d="M-16 -8 V10 H16 V-8" stroke="${MARRON}" stroke-width="3" fill="none"/><path d="M-10 -4 V10 M-4 -4 V10 M2 -4 V10 M8 -4 V10" stroke="${MARRON}" stroke-width="1.5"/><path d="M-16 10 q16 10 32 0" stroke="${MARRON}" stroke-width="3" fill="none"/>`,
  cuchara: `<ellipse cx="-10" cy="-8" rx="7" ry="9" fill="${GRIS}" transform="rotate(-45 -10 -8)"/><path d="M-6 -4 L16 16" stroke="${GRIS}" stroke-width="4" stroke-linecap="round"/>`,
  guitarra: `<g transform="rotate(-35)"><path d="M0 -6 V-20" stroke="${MARRON}" stroke-width="4"/><circle cy="2" r="9" fill="var(--inf)"/><circle cy="12" r="8" fill="var(--inf)"/><circle cy="5" r="3" fill="${NEGRO}"/></g>`,
  gusano: `<g fill="var(--leaf)">${[-14, -6, 2, 10].map((x, i) => `<circle cx="${x}" cy="${i % 2 ? 4 : 0}" r="6"/>`).join("")}<circle cx="16" cy="-4" r="7"/></g><circle cx="18" cy="-6" r="1.6" fill="${NEGRO}"/>`,
  gorila: `<circle r="16" fill="#4b4b4b"/><ellipse cy="5" rx="10" ry="8" fill="#8a8a8a"/><circle cx="-5" cy="-5" r="2" fill="${BLANCO}"/><circle cx="5" cy="-5" r="2" fill="${BLANCO}"/><path d="M-4 9 h8" stroke="${NEGRO}" stroke-width="2"/>`,
  juguete: `<rect x="-14" y="-6" width="28" height="18" rx="3" fill="var(--sun)"/><rect x="-10" y="-16" width="20" height="10" rx="2" fill="var(--red)"/><text y="8" text-anchor="middle" font-size="12" font-weight="800" fill="var(--pen)" ${D}>A</text>`,
  mosquito: `<ellipse rx="10" ry="4" fill="${GRIS}"/><ellipse cx="-2" cy="-7" rx="6" ry="4" fill="${BLANCO}" stroke="${GRIS}"/><ellipse cx="4" cy="-7" rx="6" ry="4" fill="${BLANCO}" stroke="${GRIS}"/><path d="M-10 0 l-9 2 M-4 3 l-4 9 M2 3 l0 9 M8 3 l4 9" stroke="${NEGRO}" stroke-width="1.2"/>`,
  rueda: `<circle r="16" fill="${NEGRO}"/><circle r="7" fill="${GRIS}"/>`,
  torre: `<rect x="-10" y="-10" width="20" height="28" fill="${GRIS}"/><path d="M-12 -10 v-8 h5 v4 h5 v-4 h4 v4 h5 v-4 h5 v8z" fill="${GRIS}"/><rect x="-3" y="6" width="6" height="12" rx="3" fill="${MARRON}"/>`,
  burro: `<ellipse cx="-6" cy="-15" rx="3" ry="8" fill="${GRIS}"/><ellipse cx="6" cy="-15" rx="3" ry="8" fill="${GRIS}"/><ellipse rx="11" ry="14" fill="${GRIS}"/><ellipse cy="8" rx="8" ry="6" fill="#d9d9d9"/><circle cx="-5" cy="-3" r="1.8" fill="${NEGRO}"/><circle cx="5" cy="-3" r="1.8" fill="${NEGRO}"/>`,
  isla: `<ellipse cy="12" rx="19" ry="6" fill="var(--sun)"/><path d="M0 12 Q2 -2 -2 -10" stroke="${MARRON}" stroke-width="3" fill="none"/><path d="M-2 -10 q-12 -4 -16 4 M-2 -10 q12 -6 16 2 M-2 -10 q0 -8 6 -10" stroke="var(--leaf)" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  iman: `<path d="M-12 -14 V2 a12 12 0 0 0 24 0 V-14 H5 V2 a5 5 0 0 1 -10 0 V-14z" fill="var(--red)"/><rect x="-12" y="-16" width="7" height="6" fill="${GRIS}"/><rect x="5" y="-16" width="7" height="6" fill="${GRIS}"/>`,
  una: `<rect x="-8" y="-14" width="16" height="30" rx="8" fill="${PIEL}" stroke="${MARRON}" stroke-width="1.5"/><rect x="-5" y="-12" width="10" height="10" rx="4" fill="${ROSA}"/>`,
  escuela: `<rect x="-18" y="-6" width="36" height="24" fill="var(--sun)"/><path d="M-20 -6 L0 -18 L20 -6z" fill="var(--red)"/><rect x="-4" y="6" width="8" height="12" fill="${MARRON}"/><circle cy="-8" r="3.5" fill="${BLANCO}"/>`,
  campana: `<path d="M-12 8 Q-12 -14 0 -14 Q12 -14 12 8 L15 12 H-15z" fill="var(--sun)"/><circle cy="15" r="3" fill="${MARRON}"/>`,
  oido: `<path d="M-6 -16 C12 -18 14 4 2 8 C-2 10 0 16 -6 16" stroke="${MARRON}" stroke-width="3" fill="${PIEL}"/><g stroke="var(--pen)" stroke-width="2" fill="none"><path d="M12 -8 q5 8 0 16"/><path d="M17 -12 q8 12 0 24"/></g>`,
  bocadillo: `<path d="M-18 -14 H18 V8 H-2 L-10 16 V8 H-18z" fill="${BLANCO}" stroke="var(--pen)" stroke-width="2.5"/><g fill="var(--pen)"><circle cx="-8" cy="-3" r="2"/><circle cy="-3" r="2"/><circle cx="8" cy="-3" r="2"/></g>`,
  interrogacion: `<circle r="17" fill="var(--pen)"/><text y="9" text-anchor="middle" font-size="26" font-weight="800" fill="${BLANCO}" ${D}>?</text>`,
  rayo: `<path d="M4 -18 L-10 2 H0 L-4 18 L10 -2 H0z" fill="var(--sun)"/>`,
  arcoiris: `<g fill="none" stroke-width="4">${["var(--red)", "var(--inf)", "var(--sun)", "var(--leaf)", "var(--water)"].map((c, i) => `<path d="M${-18 + i * 4} 10 a${18 - i * 4} ${18 - i * 4} 0 0 1 ${36 - i * 8} 0" stroke="${c}"/>`).join("")}</g>`,
};

// Dibuja el icono «n» centrado en (x, y) y escalado «s».
const ic = (n, x, y, s = 1) => {
  if (!I[n]) throw new Error(`[peque] falta el dibujo «${n}»`);
  return `<g transform="translate(${x} ${y}) scale(${s})">${I[n]}</g>`;
};

const titulo = (t, y = 22) => t ? `<text x="130" y="${y}" text-anchor="middle" font-size="${fz(t, 15, 236, true)}" font-weight="700" fill="var(--muted)">${t}</text>` : "";
const nota = (t, y = 168) => t ? `<text x="130" y="${y}" text-anchor="middle" font-size="${fz(t, 14, 236, true)}" font-weight="700" fill="var(--ink)">${t}</text>` : "";

// Dibujos en fila con su palabra debajo: [dibujo, palabra, color]. Hasta 4 por fila y 2 filas.
function dibujos(label, items, { titulo: t, nota: n } = {}) {
  const porFila = items.length <= 4 ? items.length : Math.ceil(items.length / 2);
  const filas = Math.ceil(items.length / porFila);
  const w = 248 / porFila;
  let out = titulo(t);
  items.forEach(([d, p, c], i) => {
    const f = Math.floor(i / porFila), k = i % porFila;
    const enFila = Math.min(porFila, items.length - f * porFila);
    const x = 130 + (k - (enFila - 1) / 2) * w;
    let yi, yt, s, fs;
    if (filas === 1) { yi = n ? (t ? 72 : 66) : (t ? 84 : 74); yt = yi + 54; s = porFila <= 3 ? 1.4 : 1.3; fs = 22; }
    else { yi = (t ? 52 : 36) + f * 70; yt = yi + 36; s = 1; fs = 18; }
    if (t && filas > 1 && n) { yi -= 6 * (1 - f); }
    cabe(p, fs, w - 6, true, label);
    out += `${ic(d, x, yi, s)}<text x="${x}" y="${yt}" text-anchor="middle" font-size="${fz(p, fs, w - 6, true)}" font-weight="700" fill="${c || "var(--ink)"}" ${D}>${p}</text>`;
  });
  return marco(label, out + nota(n));
}

// Letras o sílabas grandes en fichas: [texto, color]. Hasta 6 por fila y 2 filas.
function fichas(label, items, { titulo: t, nota: n, grande = false } = {}) {
  const porFila = items.length <= 6 ? items.length : Math.ceil(items.length / 2);
  const filas = Math.ceil(items.length / porFila);
  const w = Math.min(grande ? 56 : 50, (236 - (porFila - 1) * 8) / porFila);
  const h = filas === 1 ? (grande ? 74 : 60) : 48;
  const top = (t ? 34 : 14) + ((n ? 140 : 160) - (t ? 20 : 0) - filas * h - (filas - 1) * 10) / 2;
  let out = titulo(t);
  items.forEach(([s, c], i) => {
    const f = Math.floor(i / porFila), k = i % porFila;
    const enFila = Math.min(porFila, items.length - f * porFila);
    const x = 130 + (k - (enFila - 1) / 2) * (w + 8), y = top + f * (h + 10);
    const fs = fz(s, filas === 1 ? (grande ? 44 : 34) : 26, w - 8, true);
    out += `<rect x="${(x - w / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="3"/>
      <text x="${x.toFixed(1)}" y="${(y + h / 2 + fs * 0.34).toFixed(1)}" text-anchor="middle" font-size="${fs}" font-weight="800" fill="${c}" ${D}>${s}</text>`;
  });
  return marco(label, out + nota(n));
}

// Parejas: [dibujoA, palabraA, dibujoB, palabraB]. Hasta 3 filas, con flecha en medio.
function parejas(label, items, { titulo: t, izq, der, color = "var(--pen)", color2 = "var(--red)", flecha = "→" } = {}) {
  const top = t || izq ? 34 : 10, n = items.length;
  const conDibujo = items.some(([da, , db]) => da || db);
  // Con dibujos: dibujo en los bordes y palabra hacia el centro; sin dibujos: palabras grandes.
  const xa = conDibujo ? 80 : 66, xb = conDibujo ? 180 : 194, max = conDibujo ? 80 : 104;
  let out = titulo(t);
  if (izq) out += `<text x="${xa}" y="${t ? 40 : 22}" text-anchor="middle" font-size="${fz(izq, 13, 110, true)}" font-weight="700" fill="${color}">${izq}</text><text x="${xb}" y="${t ? 40 : 22}" text-anchor="middle" font-size="${fz(der, 13, 110, true)}" font-weight="700" fill="${color2}">${der}</text>`;
  const y0 = top + (izq && t ? 10 : 0);
  const hh = (176 - y0) / n;
  items.forEach(([da, pa, db, pb], i) => {
    const cy = y0 + hh * (i + 0.5), s = n === 1 ? 1.1 : n === 2 ? 0.9 : 0.68;
    const fs = !conDibujo ? (n === 1 ? 40 : n === 2 ? 34 : 30) : n === 1 ? 22 : n === 2 ? 20 : 18;
    cabe(pa, fs, max, true, label); cabe(pb, fs, max, true, label);
    const fa = fz(pa, fs, max, true), fb = fz(pb, fs, max, true);
    out += `${da ? ic(da, 21, cy, s) : ""}<text x="${xa}" y="${(cy + fa * 0.34).toFixed(1)}" text-anchor="middle" font-size="${fa}" font-weight="700" fill="${color}" ${D}>${pa}</text>
      <text x="130" y="${cy + 6}" text-anchor="middle" font-size="${conDibujo ? 16 : 20}" font-weight="800" fill="var(--muted)">${flecha}</text>
      ${db ? ic(db, 239, cy, s) : ""}<text x="${xb}" y="${(cy + fb * 0.34).toFixed(1)}" text-anchor="middle" font-size="${fb}" font-weight="700" fill="${color2}" ${D}>${pb}</text>`;
  });
  return marco(label, out);
}

// Frase en cajas grandes: [palabra, color]. Se reparte en filas que caben.
function frase(label, partes, { titulo: t, nota: n, fs: fs0 = 20 } = {}) {
  // Se reduce la letra hasta que cada fila marcada con "/" quepa entera en una línea.
  const filasPedidas = partes.filter(([s]) => s === "/").length + 1;
  let fs = fs0, x, fila, pos;
  const colocar = () => {
    const anchoP = (s) => [...s.replace(/<[^>]+>/g, "")].length * fs * 0.54 + 14;
    x = 0; fila = 0; pos = [];
    partes.forEach(([s, c]) => {
      if (s === "/") { x = 0; fila++; return; }
      const w = Math.min(232, anchoP(s));
      if (x + w > 236 && x > 0) { x = 0; fila++; }
      pos.push({ s, c, x, fila, w }); x += w + 6;
    });
  };
  colocar();
  while (fila + 1 > filasPedidas && fs > 14) { fs -= 1; colocar(); }
  const anchoFila = (f) => { const p = pos.filter((q) => q.fila === f); const u = p[p.length - 1]; return u.x + u.w; };
  const alto = (fila + 1) * 46 - 8;
  const y0 = (t ? 34 : 12) + ((n ? 146 : 168) - (t ? 34 : 12) - alto) / 2;
  let out = titulo(t);
  pos.forEach(({ s, c, x, fila: f, w }) => {
    const x0 = (260 - anchoFila(f)) / 2 + x, y = y0 + f * 46;
    out += `<rect x="${x0.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="38" rx="9" fill="var(--card)" stroke="${c || "var(--line)"}" stroke-width="2.5"/>
      <text x="${(x0 + w / 2).toFixed(1)}" y="${(y + 26).toFixed(1)}" text-anchor="middle" font-size="${fz(s, fs, w - 8, true)}" font-weight="700" fill="${c || "var(--ink)"}" ${D}>${s}</text>`;
  });
  return marco(label, out + nota(n, 168));
}

// Conversación: [dibujo de la persona, texto, color]. Personas a izquierda y derecha.
function charla(label, turnos) {
  const n = turnos.length, step = 172 / n;
  let out = "";
  turnos.forEach(([d, t, c], i) => {
    const y = 6 + i * step, h = step - 8, izq = i % 2 === 0, s = n <= 2 ? 1.2 : 0.95;
    const px = izq ? 26 : 234, bx = izq ? 52 : 14, bw = 194;
    const fs = n <= 2 ? 18 : 15;
    cabe(t, fs, bw - 18, true, label);
    out += `${ic(d, px, y + h / 2, s)}<rect x="${bx}" y="${y}" width="${bw}" height="${h}" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
      <path d="M${izq ? bx + 1 : bx + bw - 1} ${y + h / 2 - 6} l${izq ? -8 : 8} 6 l${izq ? 8 : -8} 6" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
      <text x="${bx + bw / 2}" y="${y + h / 2 + fs * 0.35}" text-anchor="middle" font-size="${fz(t, fs, bw - 18, true)}" font-weight="700" fill="var(--ink)" ${D}>${t}</text>`;
  });
  return marco(label, out);
}

// Figura grande (640 × 300): tarjetas [dibujo, palabra, detalle, color]. 4 por fila, hasta 8.
function mural(label, items, cabecera) {
  const porFila = items.length <= 4 ? items.length : Math.ceil(items.length / 2);
  const filas = Math.ceil(items.length / porFila);
  const gap = 14, w = (600 - gap * (porFila - 1)) / porFila, top = cabecera ? 42 : 18;
  const h0 = (300 - top - 14 - (filas - 1) * gap) / filas, h = filas === 1 ? Math.min(h0, 214) : h0, y1 = top + (h0 - h) / 2;
  let out = cabecera ? `<text x="320" y="28" text-anchor="middle" font-size="${fz(cabecera, 17, 600, true)}" font-weight="700" fill="var(--ink)" ${F}>${cabecera}</text>` : "";
  items.forEach(([d, p, det, c], i) => {
    const f = Math.floor(i / porFila), k = i % porFila;
    const enFila = Math.min(porFila, items.length - f * porFila);
    const x = 320 - (enFila * w + (enFila - 1) * gap) / 2 + k * (w + gap), y = y1 + f * (h + gap), cx = x + w / 2;
    const s = filas === 1 ? 1.6 : 1.25;
    cabe(p, 24, w - 12, true, label); if (det) cabe(det, 13, w - 12, false, label);
    out += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
      ${d ? ic(d, cx.toFixed(1), (y + (filas === 1 ? 62 : 34)).toFixed(1), s) : ""}
      <text x="${cx.toFixed(1)}" y="${(y + (filas === 1 ? 142 : 86)).toFixed(1)}" text-anchor="middle" font-size="${fz(p, filas === 1 ? 28 : 22, (w - 24) * 0.86, true)}" font-weight="800" fill="${c}" ${D}>${p}</text>
      ${det ? `<text x="${cx.toFixed(1)}" y="${(y + (filas === 1 ? 178 : 108)).toFixed(1)}" text-anchor="middle" font-size="${fz(det, 14, (w - 16) * 0.86)}" fill="var(--ink)" ${F}>${det}</text>` : ""}`;
  });
  return `<svg viewBox="0 0 640 300" role="img" aria-label="${label}"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${out}</svg>`;
}

// Uno y muchos: [dibujo, singular, plural, n]. Izquierda un dibujo; derecha «n» dibujos (por defecto 3).
function cuantos(label, items, { izq = "uno", der = "muchos", color = "var(--pen)", color2 = "var(--leaf)" } = {}) {
  const n = items.length, top = 30, hh = (178 - top) / n, s = n === 1 ? 1.1 : n === 2 ? 0.85 : 0.62;
  let out = `<text x="58" y="20" text-anchor="middle" font-size="${fz(izq, 13, 104, true)}" font-weight="700" fill="${color}">${izq}</text><text x="186" y="20" text-anchor="middle" font-size="${fz(der, 13, 124, true)}" font-weight="700" fill="${color2}">${der}</text><path d="M118 28 V 172" stroke="var(--line)" stroke-width="2"/>`;
  items.forEach(([d, a, b, k = 3], i) => {
    const cy = top + hh * (i + 0.5), fs = n === 1 ? 24 : n === 2 ? 20 : 17, dx = 34 * s / 0.62 * 0.6;
    const iy = n === 1 ? cy - 22 : cy - 8, ty = n === 1 ? cy + 34 : cy + (n === 2 ? 26 : 18);
    out += `${ic(d, 58, iy, s)}<text x="58" y="${ty}" text-anchor="middle" font-size="${fz(a, fs, 100, true)}" font-weight="700" fill="${color}" ${D}>${a}</text>
      ${[...Array(k)].map((_, j) => ic(d, 186 + (j - (k - 1) / 2) * dx, iy, s)).join("")}<text x="186" y="${ty}" text-anchor="middle" font-size="${fz(b, fs, 124, true)}" font-weight="700" fill="${color2}" ${D}>${b}</text>`;
  });
  return marco(label, out);
}

// Palabras troceadas en sílabas: [dibujo, ["ma","ri","po","sa"], color]. Una fila por palabra, con su número.
function trozos(label, items, { numero = true } = {}) {
  const n = items.length, h = 168 / n;
  let out = "";
  items.forEach(([d, ss, c], i) => {
    const cy = 6 + h * (i + 0.5), bh = Math.min(38, h - 8), bw = Math.min(44, 150 / ss.length - 4), s = Math.min(1, bh / 36);
    out += d ? ic(d, 30, cy, s) : "";
    ss.forEach((q, k) => {
      const x = 58 + k * (bw + 4);
      out += `<rect x="${x}" y="${(cy - bh / 2).toFixed(1)}" width="${bw}" height="${bh}" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
        <text x="${x + bw / 2}" y="${(cy + 6).toFixed(1)}" text-anchor="middle" font-size="${fz(q, 18, bw - 6, true)}" font-weight="700" fill="${c}" ${D}>${q}</text>`;
    });
    if (numero) out += `<circle cx="232" cy="${cy.toFixed(1)}" r="14" fill="${c}"/><text x="232" y="${(cy + 6).toFixed(1)}" text-anchor="middle" font-size="17" font-weight="800" fill="#fff" ${D}>${ss.length}</text>`;
  });
  return marco(label, out);
}

// Lista con marcas: [texto, color]. Hasta 4 líneas.
function lista(label, items, { titulo: t, marca = "✓" } = {}) {
  const top = t ? 36 : 14, n = items.length, h = (170 - top) / n;
  let out = titulo(t);
  items.forEach(([s, c], i) => {
    const y = top + i * h, fs = n <= 3 ? 18 : 16;
    cabe(s, fs, 186, true, label);
    out += `<rect x="14" y="${y.toFixed(1)}" width="232" height="${(h - 8).toFixed(1)}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
      <circle cx="34" cy="${(y + (h - 8) / 2).toFixed(1)}" r="11" fill="${c}"/><text x="34" y="${(y + (h - 8) / 2 + 5).toFixed(1)}" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">${marca === "n" ? i + 1 : marca}</text>
      <text x="54" y="${(y + (h - 8) / 2 + fs * 0.35).toFixed(1)}" font-size="${fz(s, fs, 168, true)}" font-weight="700" fill="var(--ink)" ${D}>${s}</text>`;
  });
  return marco(label, out);
}

// Sílaba resaltada dentro de una palabra: «ca|sa» con la parte 0 en color.
const silabas = (palabra, color = "var(--red)", marca = 0) => palabra.split("|").map((s, i) => i === marca ? `<tspan fill="${color}">${s}</tspan>` : s).join("");

const BOE = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };
const vid = (id, titulo, canal, vistas, megusta = 0) => ({ id, titulo, canal, vistas, megusta });

module.exports = { I, ic, marco, dibujos, fichas, parejas, frase, charla, mural, cuantos, lista, trozos, silabas, BOE, vid, D, F };
