// Ayudas para los temas de Infantil 5 años, lote B (Comunicación, inglés, catalán y Religión).
// No es un tema: empieza por "_". Reutiliza los dibujos de 1º de Primaria y añade algunos nuevos.
const { mapa } = require("./_util");
const P = require("./_peque");
const DIB = require("./_pri1-dib");

const MARRON = "#a0703c", BLANCO = "#ffffff", GRIS = "#9aa3b5", NEGRO = "#2a2a2a", LILA = "#8a5cc7", ROSA = "#f08fb0", MADERA = "#8a5a2b";

// Dibujos nuevos de unos 40 × 40 px centrados en (0, 0), para usar con dibujos(), vocab(), mural()…
const NUEVOS = {
  paleta: `<path d="M-2 -17 C14 -17 20 -6 18 4 C16 12 8 10 6 14 C3 19 -6 18 -12 14 C-20 8 -20 -17 -2 -17z" fill="#e7c08f" stroke="${MARRON}" stroke-width="1.5"/><circle cx="-8" cy="-8" r="3.5" fill="var(--red)"/><circle cx="2" cy="-10" r="3.5" fill="var(--sun)"/><circle cx="11" cy="-4" r="3.5" fill="var(--pen)"/><circle cx="-11" cy="2" r="3.5" fill="var(--leaf)"/><circle cx="0" cy="8" r="3" fill="#fff"/>`,
  pincel: `<g transform="rotate(-40)"><rect x="-3" y="-4" width="26" height="6" rx="2" fill="${MADERA}"/><rect x="-9" y="-4.5" width="7" height="7" fill="${GRIS}"/><path d="M-9 -4 Q-20 -1 -9 3z" fill="var(--red)"/></g>`,
  cuadro: `<rect x="-19" y="-15" width="38" height="30" fill="#e7c08f" stroke="${MARRON}" stroke-width="3"/><rect x="-14" y="-10" width="28" height="20" fill="var(--water)" opacity=".55"/><circle cx="7" cy="-4" r="4" fill="var(--sun)"/><path d="M-14 10 L-5 0 L2 6 L8 1 L14 10z" fill="var(--leaf)"/>`,
  noche: `<rect x="-19" y="-15" width="38" height="30" fill="#e7c08f" stroke="${MARRON}" stroke-width="3"/><rect x="-14" y="-10" width="28" height="20" fill="#1f3c88"/><g fill="none" stroke="var(--sun)" stroke-width="2"><path d="M-12 -2 q5 -6 10 0 q5 6 10 0"/></g><circle cx="-8" cy="-6" r="2" fill="var(--sun)"/><circle cx="8" cy="-5" r="2.5" fill="var(--sun)"/><path d="M-10 10 L-8 -2 L-6 10z" fill="${NEGRO}"/>`,
  tambor: `<path d="M-16 -8 V10 a16 5 0 0 0 32 0 V-8" fill="var(--red)"/><path d="M-16 -4 L-6 12 L4 -4 L14 10" stroke="var(--sun)" stroke-width="2" fill="none"/><ellipse cy="-8" rx="16" ry="5" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.5"/><path d="M6 -12 L18 -22 M-6 -12 L-14 -22" stroke="${MADERA}" stroke-width="3" stroke-linecap="round"/>`,
  flauta: `<g transform="rotate(-35)"><rect x="-20" y="-4" width="40" height="8" rx="3" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><path d="M-20 -4 h6 v8 h-6z" fill="var(--pen)"/>${[-6, 0, 6, 12].map((x) => `<circle cx="${x}" cy="0" r="1.8" fill="${NEGRO}"/>`).join("")}</g>`,
  piano: `<rect x="-19" y="-12" width="38" height="24" rx="2" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="2"/>${[-12, -5, 2, 9, 16].map((x) => `<path d="M${x - 2} -12 V12" stroke="${NEGRO}" stroke-width="1"/>`).join("")}${[-11, -4, 7, 14].map((x) => `<rect x="${x - 2.5}" y="-12" width="5" height="14" fill="${NEGRO}"/>`).join("")}`,
  violin: `<g transform="rotate(25)"><path d="M0 -6 V-20" stroke="${MADERA}" stroke-width="3"/><path d="M-8 -6 Q-11 0 -7 4 Q-11 9 -8 15 Q0 19 8 15 Q11 9 7 4 Q11 0 8 -6 Q0 -10 -8 -6z" fill="#c4691d"/><path d="M-2 -4 V14 M2 -4 V14" stroke="${NEGRO}" stroke-width=".8"/></g><path d="M-18 16 L14 -16" stroke="${GRIS}" stroke-width="2"/>`,
  maracas: `<g transform="rotate(-25)"><ellipse cx="-6" cy="-8" rx="7" ry="9" fill="var(--sun)"/><path d="M-6 0 V16" stroke="${MADERA}" stroke-width="3.5"/></g><g transform="rotate(25)"><ellipse cx="6" cy="-8" rx="7" ry="9" fill="var(--red)"/><path d="M6 0 V16" stroke="${MADERA}" stroke-width="3.5"/></g>`,
  triangulo: `<path d="M0 -16 L15 12 H-15z" fill="none" stroke="${GRIS}" stroke-width="3.5" stroke-linejoin="round"/><path d="M0 -16 V-20" stroke="${NEGRO}" stroke-width="1.5"/><path d="M8 -6 L20 6" stroke="${GRIS}" stroke-width="2.5" stroke-linecap="round"/>`,
  xilofono: `${[0, 1, 2, 3, 4].map((i) => `<rect x="${-18 + i * 7.5}" y="${-12 + i * 2}" width="6" height="${24 - i * 4}" rx="2" fill="${["var(--red)", "var(--inf)", "var(--sun)", "var(--leaf)", "var(--pen)"][i]}"/>`).join("")}<path d="M-20 10 L18 6" stroke="${MADERA}" stroke-width="2"/>`,
  sofa: `<rect x="-18" y="-10" width="36" height="14" rx="4" fill="var(--pen)"/><rect x="-20" y="-2" width="8" height="14" rx="3" fill="#2a4fb0"/><rect x="12" y="-2" width="8" height="14" rx="3" fill="#2a4fb0"/><rect x="-13" y="2" width="26" height="9" rx="2" fill="#4a73e0"/><path d="M-16 12 v4 M16 12 v4" stroke="${MADERA}" stroke-width="3"/>`,
  banera: `<path d="M-19 0 H19 V6 Q19 14 10 14 H-10 Q-19 14 -19 6z" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/><path d="M14 0 V-14 h-6" stroke="${GRIS}" stroke-width="2.5" fill="none"/><g fill="var(--water)"><circle cx="-8" cy="-3" r="3"/><circle cx="-2" cy="-5" r="2.5"/><circle cx="3" cy="-3" r="2"/></g>`,
  cocina: `<rect x="-17" y="-8" width="34" height="26" rx="2" fill="${BLANCO}" stroke="${GRIS}" stroke-width="2"/><rect x="-12" y="2" width="24" height="12" rx="2" fill="${GRIS}" opacity=".5"/><path d="M-14 -8 H14" stroke="${NEGRO}" stroke-width="2"/><path d="M-12 -14 H2 V-8 H-12z" fill="var(--red)"/><path d="M2 -12 h5" stroke="var(--red)" stroke-width="2"/>`,
  ventana: `<rect x="-15" y="-15" width="30" height="30" fill="var(--water)" opacity=".5" stroke="${MADERA}" stroke-width="3"/><path d="M0 -15 V15 M-15 0 H15" stroke="${MADERA}" stroke-width="3"/>`,
  puerta: `<rect x="-11" y="-18" width="22" height="36" rx="2" fill="${MADERA}"/><circle cx="6" cy="2" r="2" fill="var(--sun)"/>`,
  oveja: `<g fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5">${[[-8, -4], [0, -7], [8, -4], [-10, 4], [0, 5], [10, 4]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7"/>`).join("")}</g><ellipse cx="-16" cy="-4" rx="6" ry="5" fill="${NEGRO}"/><path d="M-8 10 v8 M6 10 v8" stroke="${NEGRO}" stroke-width="3"/>`,
  caballo: `<path d="M-14 -2 Q-14 -10 0 -10 H8 L14 -20 L18 -12 L14 -8 Q16 4 10 4 H-12 Q-16 4 -14 -2z" fill="${MARRON}"/><path d="M-10 4 V18 M-2 4 V18 M6 4 V18" stroke="${MARRON}" stroke-width="3"/><path d="M8 -10 L4 -18" stroke="${NEGRO}" stroke-width="3"/><circle cx="14" cy="-14" r="1.4" fill="${NEGRO}"/>`,
  trigo: `<path d="M0 18 V-14" stroke="#c99a2e" stroke-width="2.5"/>${[-12, -6, 0, 6].map((y) => `<ellipse cx="-4" cy="${y}" rx="3" ry="5" transform="rotate(-30 -4 ${y})" fill="#e0b440"/><ellipse cx="4" cy="${y}" rx="3" ry="5" transform="rotate(30 4 ${y})" fill="#e0b440"/>`).join("")}`,
  iglesia: `<rect x="-15" y="-4" width="30" height="22" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.5"/><path d="M-18 -4 L0 -16 L18 -4z" fill="var(--red)"/><path d="M0 -24 V-16 M-4 -20 H4" stroke="${NEGRO}" stroke-width="2.5"/><path d="M-5 18 V9 a5 5 0 0 1 10 0 V18z" fill="${MADERA}"/>`,
  cruz: `<path d="M-4 -18 h8 v10 h10 v8 h-10 v18 h-8 v-18 h-10 v-8 h10z" fill="${MADERA}"/>`,
  paloma: `<path d="M-18 4 q10 -4 20 -2 q8 -10 16 -6 q-4 2 -6 6 q6 8 -6 10 q-14 2 -24 -8z" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.5"/><path d="M-4 0 q-2 -14 12 -18 q-2 10 -4 18" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.5"/><circle cx="12" cy="0" r="1.3" fill="${NEGRO}"/>`,
  vela: `<rect x="-6" y="-6" width="12" height="24" rx="2" fill="${BLANCO}" stroke="${NEGRO}" stroke-width="1.5"/><path d="M0 -8 q-6 -8 0 -14 q6 6 0 14z" fill="var(--sun)"/>`,
  abrazo: `<circle cx="-8" cy="-10" r="7" fill="#f2c79e"/><circle cx="8" cy="-10" r="7" fill="#f2c79e"/><path d="M-8 -16 q-7 0 -7 6 q2 -5 7 -5 q5 0 7 5 q0 -6 -7 -6z" fill="${MARRON}"/><path d="M8 -16 q-7 0 -7 6 q2 -5 7 -5 q5 0 7 5 q0 -6 -7 -6z" fill="${NEGRO}"/><path d="M-16 18 V2 q0 -6 8 -6 q8 0 8 6 V18z" fill="var(--pen)"/><path d="M0 18 V2 q0 -6 8 -6 q8 0 8 6 V18z" fill="var(--red)"/><path d="M-12 6 q12 8 24 0" stroke="#f2c79e" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  manos: `<path d="M-14 16 V-2 q0 -4 3 -4 V-12 q0 -3 3 -3 q3 0 3 3 V-4 L0 -14 q2 -3 5 -1 q2 2 0 5 L-2 2 V16z" fill="#f2c79e" stroke="${MARRON}" stroke-width="1.2"/><path d="M14 16 V-2 q0 -4 -3 -4 V-12 q0 -3 -3 -3 q-3 0 -3 3 V-4 L0 -14" fill="none" stroke="${MARRON}" stroke-width="1.2"/><path d="M14 16 V-2 q0 -4 -3 -4 V-12 q0 -3 -3 -3 q-3 0 -3 3 V-4 L2 2 V16z" fill="#f2c79e"/>`,
  moneda: `<circle r="13" fill="var(--sun)" stroke="#c99a2e" stroke-width="2.5"/><circle r="8" fill="none" stroke="#c99a2e" stroke-width="1.5"/>`,
  semilla: `<path d="M-18 14 H18" stroke="${MARRON}" stroke-width="4" stroke-linecap="round"/><ellipse cx="0" cy="8" rx="5" ry="3.5" fill="${MARRON}"/><path d="M0 6 V-8" stroke="var(--leaf)" stroke-width="2.5"/><ellipse cx="-6" cy="-10" rx="6" ry="3" fill="var(--leaf)" transform="rotate(-25 -6 -10)"/><ellipse cx="6" cy="-12" rx="6" ry="3" fill="var(--leaf)" transform="rotate(25 6 -12)"/>`,
  bota: `<path d="M-8 -18 H6 V2 L16 6 Q18 14 12 16 H-8z" fill="var(--sun)"/><rect x="-8" y="13" width="24" height="4" fill="${NEGRO}"/>`,
  bufanda: `<path d="M-16 -10 Q0 -2 16 -10 V-2 Q0 6 -16 -2z" fill="var(--red)"/><path d="M6 0 V18 h8 V-2" fill="var(--red)"/><path d="M6 6 h8 M6 12 h8" stroke="${BLANCO}" stroke-width="2"/>`,
  calcetin: `<path d="M-6 -18 H6 V4 L14 8 Q18 16 10 18 L-2 14 Q-6 12 -6 6z" fill="var(--leaf)"/><path d="M-6 -12 H6" stroke="${BLANCO}" stroke-width="3"/>`,
  guante: `<path d="M-10 16 V-4 q0 -6 4 -6 V-14 q0 -3 3 -3 q3 0 3 3 V-10 q4 0 4 4 V-8 q0 -3 3 -3 q3 0 3 3 V6 q0 10 -10 10z" fill="${LILA}"/><rect x="-11" y="12" width="22" height="6" rx="2" fill="${ROSA}"/>`,
  mama_gallina: `<ellipse cx="2" cy="4" rx="15" ry="11" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><circle cx="-10" cy="-8" r="7" fill="${BLANCO}" stroke="${GRIS}" stroke-width="1.5"/><path d="M-12 -16 q2 -4 4 0 q2 -4 4 0" fill="var(--red)"/><path d="M-17 -8 l-5 2 l5 2z" fill="var(--inf)"/><circle cx="-11" cy="-9" r="1.3" fill="${NEGRO}"/>`,
  oido_musica: `<path d="M-10 -16 C8 -18 10 4 -2 8 C-6 10 -4 16 -10 16" stroke="${MARRON}" stroke-width="3" fill="#f2c79e"/><g fill="var(--pen)"><ellipse cx="12" cy="-2" rx="4" ry="3"/><path d="M15 -3 V-16" stroke="var(--pen)" stroke-width="2"/></g>`,
};
for (const k of Object.keys(NUEVOS)) if (!P.I[k]) P.I[k] = NUEVOS[k];

// Profesorado y fuentes de Infantil (RD 95/2022).
const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 95/2022, segundo ciclo de Educación Infantil).`, ideas });
const PROF_CA = (saberes, ideas) => ({ saberes: `${saberes} (RD 95/2022 i Decret 21/2023 de Catalunya, segon cicle d'Educació Infantil).`, ideas });
const FUENTES = [{ t: "Real Decreto 95/2022, ordenación y enseñanzas mínimas de la Educación Infantil (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-1654" }];

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", W = "var(--water)", K = "var(--ink)", G = "var(--muted)";

// Palabras en fichas, una palabra por fila: [palabra, color]. Hasta 3 filas.
function letras(label, filas, { titulo: t, nota: n } = {}) {
  const top = t ? 34 : 12, bottom = n ? 150 : 172, h = Math.min(56, (bottom - top) / filas.length - 8);
  let out = t ? DIB.rot(130, 22, t, { color: "var(--muted)", size: 15 }) : "";
  filas.forEach(([pal, c], f) => {
    const ls = [...pal], w = Math.min(44, (236 - (ls.length - 1) * 6) / ls.length), y = top + f * (h + 8) + ((bottom - top) - filas.length * (h + 8) + 8) / 2;
    ls.forEach((l, k) => {
      const x = 130 + (k - (ls.length - 1) / 2) * (w + 6);
      out += `<rect x="${(x - w / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="9" fill="var(--card)" stroke="${c}" stroke-width="3"/>${DIB.big(x.toFixed(1), (y + h / 2 + h * 0.2).toFixed(1), l, c, Math.round(h * 0.58))}`;
    });
  });
  if (n) out += DIB.rot(130, 168, n, { size: 14 });
  return P.marco(label, out);
}

// Completa un tema de Infantil 5 años con los datos comunes.
const tema = (t) => ({ curso: "5-anos", minutos: 15, ejemplosTitulo: "Lo hacemos juntos", fuentes: FUENTES, revisado: "2026-11-13", ...t });

module.exports = { ...P, ...DIB, I: P.I, ic: P.ic, svg: DIB.svg, mapa, PROF, PROF_CA, FUENTES, tema, letras, R, A, V, N, M, W, K, G, MADERA };
