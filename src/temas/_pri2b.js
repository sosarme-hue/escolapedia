// Ayudas del lote B de 2º de Primaria (Ciencias de la Naturaleza y Ciencias Sociales). No es un tema: empieza por "_".
// Mismo formato que 1º (README): tarjetas de 260×180, letra grande, colores de la web (modo claro y oscuro).
const { mapa } = require("./_util");
const P = require("./_pri1-dib");
const { F, D, svg, rot, big, PROF } = P;

const RD = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };
const g = (x, y, s, body) => `<g transform="translate(${x} ${y}) scale(${s})">${body}</g>`;
const ojo = (x, y, r = 1.8) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1b2235"/>`;
// Etiqueta corta (texto) en una tarjeta redondeada.
const chip = (x, y, w, t, c = "var(--pen)", size = 13) => `<g><rect x="${x - w / 2}" y="${y - 14}" width="${w}" height="22" rx="11" fill="var(--card)" stroke="${c}" stroke-width="2"/>${rot(x, y + 2, t, { size, color: c })}</g>`;
const linea = (x1, y1, x2, y2, c = "var(--muted)", w = 2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
const cielo = (h = 110) => `<rect x="0" y="0" width="260" height="${h}" rx="14" fill="var(--water)" opacity=".12"/>`;
const hierba = (y = 150) => `<rect x="10" y="${y}" width="240" height="${170 - y}" rx="6" fill="var(--leaf)" opacity=".35"/>`;

// ---------- Animales ----------
const perro = (x, y, s = 1) => g(x, y, s, `<ellipse cy="-16" rx="22" ry="11" fill="#b9773a"/><circle cx="22" cy="-28" r="10" fill="#b9773a"/><ellipse cx="18" cy="-36" rx="4" ry="8" fill="#7a4a1f"/>${ojo(25, -30)}<circle cx="32" cy="-26" r="2.2" fill="#1b2235"/><path d="M-14 -8 V0 M-6 -8 V0 M8 -8 V0 M14 -8 V0" stroke="#7a4a1f" stroke-width="4" stroke-linecap="round"/><path d="M-22 -18 q-8 -6 -6 -14" stroke="#b9773a" stroke-width="4" fill="none" stroke-linecap="round"/>`);
const gato = (x, y, s = 1) => g(x, y, s, `<ellipse cy="-14" rx="18" ry="10" fill="#9aa3b5"/><circle cx="18" cy="-26" r="10" fill="#9aa3b5"/><path d="M11 -33 l2 -10 l6 7 M20 -35 l5 -9 l3 9" fill="#9aa3b5" stroke="#9aa3b5" stroke-width="2"/>${ojo(16, -27)}${ojo(23, -27)}<path d="M-12 -6 V0 M-4 -6 V0 M6 -6 V0 M12 -6 V0" stroke="#6b7385" stroke-width="4" stroke-linecap="round"/><path d="M-18 -14 q-14 -4 -10 -22" stroke="#9aa3b5" stroke-width="4" fill="none" stroke-linecap="round"/>`);
const vaca = (x, y, s = 1) => g(x, y, s, `<rect x="-26" y="-36" width="46" height="24" rx="10" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><ellipse cx="-12" cy="-28" rx="7" ry="5" fill="#1b2235"/><ellipse cx="6" cy="-22" rx="6" ry="4" fill="#1b2235"/><rect x="18" y="-44" width="16" height="18" rx="6" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><ellipse cx="27" cy="-28" rx="8" ry="5" fill="#f4b6c2"/>${ojo(24, -38)}<path d="M-20 -12 V0 M-10 -12 V0 M6 -12 V0 M14 -12 V0" stroke="var(--ink)" stroke-width="3.5" stroke-linecap="round"/>`);
const gallina = (x, y, s = 1) => g(x, y, s, `<ellipse cy="-18" rx="16" ry="13" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><circle cx="12" cy="-32" r="8" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><path d="M8 -40 q4 -6 8 0" fill="var(--red)"/><path d="M19 -32 l6 2 l-6 2z" fill="var(--sun)"/>${ojo(13, -33)}<path d="M-4 -5 V2 M4 -5 V2" stroke="var(--sun)" stroke-width="3"/>`);
const pez = (x, y, s = 1, c = "var(--inf)") => g(x, y, s, `<ellipse cy="-10" rx="20" ry="11" fill="${c}"/><path d="M18 -10 l14 -10 v20z" fill="${c}"/>${ojo(-10, -13, 2.2)}<path d="M-2 -18 q4 8 0 16" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/>`);
const ave = (x, y, s = 1, c = "var(--water)") => g(x, y, s, `<ellipse cy="-12" rx="14" ry="10" fill="${c}"/><circle cx="12" cy="-22" r="7" fill="${c}"/><path d="M18 -22 l7 2 l-7 2z" fill="var(--sun)"/>${ojo(13, -23)}<path d="M-6 -14 q-6 -10 6 -8" fill="#fff" opacity=".6"/><path d="M-2 -2 V4 M4 -2 V4" stroke="var(--sun)" stroke-width="2.5"/>`);
const rana = (x, y, s = 1) => g(x, y, s, `<ellipse cy="-10" rx="16" ry="10" fill="var(--leaf)"/><circle cx="-7" cy="-20" r="5" fill="var(--leaf)"/><circle cx="7" cy="-20" r="5" fill="var(--leaf)"/>${ojo(-7, -21)}${ojo(7, -21)}<path d="M-6 -10 q6 4 12 0" stroke="#1b2235" stroke-width="1.5" fill="none"/><path d="M-16 -2 q-8 2 -10 -4 M16 -2 q8 2 10 -4" stroke="var(--leaf)" stroke-width="4" fill="none" stroke-linecap="round"/>`);
const serpiente = (x, y, s = 1) => g(x, y, s, `<path d="M-34 -4 Q -24 -18 -12 -4 T 10 -4 T 30 -8" stroke="var(--leaf)" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="32" cy="-9" r="6" fill="var(--leaf)"/>${ojo(34, -11, 1.5)}<path d="M38 -8 l6 0 M42 -8 l2 -2 M42 -8 l2 2" stroke="var(--red)" stroke-width="1.2"/>`);
const mariposa = (x, y, s = 1) => g(x, y, s, `<ellipse cx="-9" cy="-10" rx="9" ry="12" fill="var(--inf)"/><ellipse cx="9" cy="-10" rx="9" ry="12" fill="var(--inf)"/><ellipse cx="-7" cy="6" rx="6" ry="8" fill="var(--sun)"/><ellipse cx="7" cy="6" rx="6" ry="8" fill="var(--sun)"/><rect x="-2" y="-18" width="4" height="30" rx="2" fill="#1b2235"/><path d="M-1 -18 l-5 -8 M1 -18 l5 -8" stroke="#1b2235" stroke-width="1.5"/>`);
const caracol = (x, y, s = 1) => g(x, y, s, `<path d="M-24 0 H18 q8 0 8 -8 v-6" stroke="#c9a46a" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M24 -14 l-3 -8 M27 -14 l3 -8" stroke="#c9a46a" stroke-width="2"/><circle cx="-4" cy="-14" r="14" fill="#b9773a"/><path d="M-4 -14 m0 -8 a8 8 0 1 1 -6 4 a4 4 0 1 1 4 6" stroke="#7a4a1f" stroke-width="2" fill="none"/>`);
const arana = (x, y, s = 1) => g(x, y, s, `${[-1, 1].map((k) => [-10, -4, 2, 8].map((d) => `<path d="M0 ${d - 10} q${k * 14} -8 ${k * 22} ${6}" stroke="#1b2235" stroke-width="2" fill="none"/>`).join("")).join("")}<ellipse cy="-6" rx="9" ry="10" fill="#1b2235"/><circle cy="-18" r="6" fill="#1b2235"/>`);
const huevo = (x, y, s = 1) => `<ellipse cx="${x}" cy="${y}" rx="${10 * s}" ry="${13 * s}" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/>`;

// ---------- Plantas ----------
const planta = (x, y, s = 1, conFlor = true) => g(x, y, s, `<path d="M0 0 V-46" stroke="var(--leaf)" stroke-width="4"/><path d="M0 -20 q-18 -4 -20 -18 q14 0 20 14z M0 -30 q18 -4 20 -18 q-14 0 -20 14z" fill="var(--leaf)"/>${conFlor ? `${[0, 72, 144, 216, 288].map((a) => `<circle cx="${(Math.cos((a * Math.PI) / 180) * 7).toFixed(1)}" cy="${(-52 + Math.sin((a * Math.PI) / 180) * 7).toFixed(1)}" r="6" fill="var(--red)"/>`).join("")}<circle cy="-52" r="5" fill="var(--sun)"/>` : ""}`);
const raices = (x, y, s = 1) => g(x, y, s, `<path d="M0 0 V14 M0 4 l-10 10 M0 6 l10 8 M0 10 l-6 10 M0 10 l6 10" stroke="#8a5a2b" stroke-width="2" fill="none" stroke-linecap="round"/>`);
const tierra = (y = 128) => `<rect x="14" y="${y}" width="232" height="${166 - y}" rx="6" fill="#8a5a2b" opacity=".35"/>`;
const semilla = (x, y, s = 1) => `<ellipse cx="${x}" cy="${y}" rx="${7 * s}" ry="${4.5 * s}" fill="#b9773a" stroke="var(--ink)" stroke-width="1"/>`;
const gota = (x, y, s = 1, c = "var(--water)") => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -12 C 6 -4 8 0 8 4 a8 8 0 0 1 -16 0 C -8 0 -6 -4 0 -12z" fill="${c}"/>`;
const pino = (x, y, s = 1) => g(x, y, s, `<rect x="-4" y="-14" width="8" height="14" fill="#8a5a2b"/><path d="M0 -60 L-18 -32 H-8 L-22 -12 H22 L8 -32 H18z" fill="#2f7d4f"/>`);
const manzana = (x, y, r = 12) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="var(--red)"/><path d="M0 ${-r + 1} q2 -7 6 -9" stroke="var(--ink)" stroke-width="2" fill="none"/><ellipse cx="6" cy="${-r - 4}" rx="5" ry="3" fill="var(--leaf)"/></g>`;

// ---------- Cuerpo ----------
const cara = (x, y, r = 40) => g(x, y, 1, `<circle r="${r}" fill="#f3c9a1"/><path d="M${-r} -${r * 0.2} q0 -${r * 1.1} ${r} -${r * 0.95} q${r} -${r * 0.15} ${r} ${r * 0.95}" fill="#5b3a1e"/>${ojo(-r * 0.35, -r * 0.05, r * 0.08)}${ojo(r * 0.35, -r * 0.05, r * 0.08)}<path d="M0 ${-r * 0.02} q${r * 0.08} ${r * 0.22} 0 ${r * 0.28}" stroke="#c68b5c" stroke-width="2" fill="none"/><path d="M-${r * 0.25} ${r * 0.45} q${r * 0.25} ${r * 0.22} ${r * 0.5} 0" stroke="var(--red)" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="${-r}" cy="${r * 0.05}" rx="${r * 0.12}" ry="${r * 0.2}" fill="#e8b48a"/><ellipse cx="${r}" cy="${r * 0.05}" rx="${r * 0.12}" ry="${r * 0.2}" fill="#e8b48a"/>`);
const hueso = (x, y, len = 50, ang = 0, c = "#f5ecd7") => `<g transform="translate(${x} ${y}) rotate(${ang})"><rect x="${-len / 2}" y="-4" width="${len}" height="8" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><circle cx="${-len / 2}" cy="-5" r="6" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><circle cx="${-len / 2}" cy="5" r="6" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><circle cx="${len / 2}" cy="-5" r="6" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><circle cx="${len / 2}" cy="5" r="6" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><rect x="${-len / 2}" y="-3" width="${len}" height="6" fill="${c}"/></g>`;
// Esqueleto sencillo de frente. (x, y) = pies.
const esqueleto = (x, y, s = 1) => g(x, y, s, `<g stroke="#e9dfc6" stroke-width="5" stroke-linecap="round" fill="none"><path d="M0 -96 V-52"/><path d="M-16 -86 H16"/>${[-80, -73, -66].map((yy) => `<path d="M-13 ${yy} q13 6 26 0"/>`).join("")}<path d="M-16 -86 L-24 -60 L-28 -38 M16 -86 L24 -60 L28 -38"/><path d="M-12 -52 H12"/><path d="M-9 -50 L-11 -26 L-12 0 M9 -50 L11 -26 L12 0"/></g><g stroke="var(--ink)" stroke-width="1" fill="none" opacity=".5"><path d="M0 -96 V-52 M-16 -86 H16 M-12 -52 H12"/></g><circle cx="0" cy="-108" r="12" fill="#f5ecd7" stroke="var(--ink)" stroke-width="1.5"/>${ojo(-4, -109, 2.5)}${ojo(4, -109, 2.5)}`);
const brazoMusculo = (x, y, s = 1) => g(x, y, s, `<path d="M-40 10 L0 10 L18 -30" stroke="#f3c9a1" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="-14" cy="0" rx="20" ry="11" fill="var(--red)" opacity=".75"/><circle cx="22" cy="-38" r="10" fill="#f3c9a1"/>`);

// ---------- Comida ----------
const zanahoria = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-7 -14 L 7 -14 L 0 16 Z" fill="var(--inf)"/><path d="M-2 -14 l-5 -9 M2 -14 l5 -9 M0 -14 v-10" stroke="var(--leaf)" stroke-width="2.5"/></g>`;
const pan = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-24 8 Q -26 -12 0 -14 Q 26 -12 24 8 Z" fill="#d9a25f" stroke="#8a5a2b" stroke-width="1.5"/><path d="M-10 -8 l-4 8 M0 -10 l-4 8 M10 -8 l-4 8" stroke="#8a5a2b" stroke-width="1.5"/></g>`;
const leche = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-12 -14 L -6 -24 H 6 L 12 -14 V 18 H -12 Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><rect x="-12" y="-4" width="24" height="12" fill="var(--water)"/></g>`;
const pescado = (x, y) => pez(x, y + 10, 0.8, "#9aa3b5");
const pastel = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-18 14 V-4 L18 -14 V14Z" fill="#f4b6c2" stroke="var(--ink)" stroke-width="1.5"/><path d="M-18 -4 L18 -14" stroke="#fff" stroke-width="4"/><circle cx="8" cy="-18" r="4" fill="var(--red)"/></g>`;
const vaso = (x, y, lleno = "var(--water)") => `<g transform="translate(${x} ${y})"><path d="M-12 -18 L12 -18 L9 16 H-9Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-10 -6 L10 -6 L8.5 14 H-8.5Z" fill="${lleno}" opacity=".7"/></g>`;
const plato = (x, y, r = 34) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.4}" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>`;

// ---------- Agua, aire y tiempo ----------
const hielo = (x, y, l = 22) => `<g transform="translate(${x} ${y})"><path d="M0 0 L${l} -6 L${l} ${l - 6} L0 ${l}Z" fill="#cfe9f7" stroke="var(--water)" stroke-width="1.5"/><path d="M0 0 L-${l * 0.6} -6 L-${l * 0.6} ${l - 6} L0 ${l}Z" fill="#a9d8f2" stroke="var(--water)" stroke-width="1.5"/><path d="M0 0 L${l} -6 L${l * 0.4} -11 L-${l * 0.6} -6Z" fill="#e8f6fd" stroke="var(--water)" stroke-width="1.5"/></g>`;
const vapor = (x, y, c = "var(--muted)") => `<path d="M${x - 10} ${y} q-6 -10 0 -18 q6 -8 0 -18 M${x} ${y} q-6 -10 0 -18 q6 -8 0 -18 M${x + 10} ${y} q-6 -10 0 -18 q6 -8 0 -18" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
const olla = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-26 -24 H26 V0 q0 8 -8 8 H-18 q-8 0 -8 -8Z" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/><path d="M-32 -18 H-26 M26 -18 H32" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/><path d="M-22 12 q4 6 8 0 q4 6 8 0 q4 6 8 0 q4 6 8 0 q4 6 8 0" stroke="var(--red)" stroke-width="2.5" fill="none"/></g>`;
const lluvia = (x, y, n = 5) => [...Array(n)].map((_, i) => `<path d="M${x - 20 + i * 10} ${y} l-3 9" stroke="var(--water)" stroke-width="2.5" stroke-linecap="round"/>`).join("");
const copo = (x, y, r = 7) => `<g stroke="var(--water)" stroke-width="2" stroke-linecap="round">${[0, 60, 120].map((a) => `<path transform="translate(${x} ${y}) rotate(${a})" d="M0 ${-r} V${r}"/>`).join("")}</g>`;
const viento = (x, y, c = "var(--muted)") => `<g stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M${x} ${y} H${x + 40} q10 0 10 -8 q0 -8 -8 -6"/><path d="M${x + 8} ${y + 12} H${x + 54} q10 0 10 8 q0 8 -8 6"/><path d="M${x - 4} ${y + 24} H${x + 30}"/></g>`;
const globo = (x, y, c = "var(--red)", r = 16) => `<g><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.2}" fill="${c}"/><path d="M${x} ${y + r * 1.2} q-4 10 2 20 q-6 8 0 16" stroke="var(--ink)" stroke-width="1.5" fill="none"/><ellipse cx="${x - r * 0.35}" cy="${y - r * 0.4}" rx="${r * 0.2}" ry="${r * 0.35}" fill="#fff" opacity=".5"/></g>`;
const molino = (x, y, s = 1) => g(x, y, s, `<path d="M-6 0 L-3 -60 H3 L6 0Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>${[0, 120, 240].map((a) => `<path transform="translate(0 -60) rotate(${a})" d="M0 0 L-4 -34 L4 -34Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}<circle cy="-60" r="4" fill="var(--ink)"/>`);
const termometro = (x, y, nivel = 0.5, c = "var(--red)") => `<g transform="translate(${x} ${y})"><rect x="-6" y="-70" width="12" height="70" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><rect x="-3" y="${-6 - 60 * nivel}" width="6" height="${60 * nivel + 6}" fill="${c}"/><circle cy="6" r="10" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/></g>`;
const paraguas = (x, y, c = "var(--red)") => `<g transform="translate(${x} ${y})"><path d="M-26 0 a26 22 0 0 1 52 0 q-6.5 -5 -13 0 q-6.5 -5 -13 0 q-6.5 -5 -13 0 q-6.5 -5 -13 0z" fill="${c}"/><path d="M0 0 V28 q0 6 -6 6 q-6 0 -6 -6" stroke="var(--ink)" stroke-width="2.5" fill="none"/></g>`;
const tierraPlaneta = (x, y, r = 22) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="var(--water)"/><path d="M${x - r * 0.6} ${y - r * 0.4} q${r * 0.4} -${r * 0.4} ${r * 0.7} 0 q${r * 0.1} ${r * 0.4} -${r * 0.3} ${r * 0.5} q-${r * 0.4} ${r * 0.1} -${r * 0.4} -${r * 0.5}z M${x + r * 0.1} ${y + r * 0.3} q${r * 0.5} -${r * 0.2} ${r * 0.6} ${r * 0.3} q-${r * 0.2} ${r * 0.4} -${r * 0.6} ${r * 0.2}z" fill="var(--leaf)"/></g>`;

// ---------- Paisaje ----------
const monte = (x, y, w = 80, h = 70, c = "#8a7a5a", nieve = true) => `<path d="M${x - w / 2} ${y} L${x} ${y - h} L${x + w / 2} ${y}z" fill="${c}"/>${nieve ? `<path d="M${x - w * 0.13} ${y - h * 0.74} L${x} ${y - h} L${x + w * 0.13} ${y - h * 0.74} L${x + w * 0.05} ${y - h * 0.68} L${x - w * 0.04} ${y - h * 0.76}z" fill="#fff"/>` : ""}`;
const mar = (y = 120, h = 50) => `<rect x="10" y="${y}" width="240" height="${h}" fill="var(--water)" opacity=".55"/><path d="M14 ${y + 10} q10 -6 20 0 t20 0 t20 0 M120 ${y + 22} q10 -6 20 0 t20 0 t20 0" stroke="#fff" stroke-width="2" fill="none"/>`;
const barca = (x, y, c = "var(--red)") => `<g transform="translate(${x} ${y})"><path d="M-22 0 H22 L14 10 H-14Z" fill="${c}"/><path d="M0 0 V-30" stroke="var(--ink)" stroke-width="2"/><path d="M2 -28 L18 -4 H2Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.2"/></g>`;
const faro = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-10 0 L-6 -56 H6 L10 0Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-8.5 -18 H8.5 M-7.4 -36 H7.4" stroke="var(--red)" stroke-width="7"/><rect x="-7" y="-68" width="14" height="12" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-9 -68 L0 -76 L9 -68Z" fill="var(--red)"/></g>`;
const rio = (y = 140) => `<path d="M10 ${y} q60 -20 120 0 t120 0 V${y + 14} q-60 -20 -120 0 t-120 0Z" fill="var(--water)" opacity=".6"/>`;

// ---------- Ciudad y edificios ----------
const edificio = (x, y, w = 40, h = 70, c = "#9aa3b5") => `<g><rect x="${x - w / 2}" y="${y - h}" width="${w}" height="${h}" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>${[...Array(Math.floor((h - 14) / 16))].map((_, r) => [...Array(Math.floor(w / 14))].map((__, k) => `<rect x="${x - w / 2 + 5 + k * 14}" y="${y - h + 8 + r * 16}" width="8" height="9" fill="var(--sun)" opacity=".8"/>`).join("")).join("")}</g>`;
// Edificio público con rótulo (ayuntamiento, hospital, cole…).
const publico = (x, y, rotulo, c = "var(--pen)", w = 80) => `<g transform="translate(${x} ${y})"><rect x="${-w / 2}" y="-50" width="${w}" height="50" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M${-w / 2 - 6} -50 L0 -70 L${w / 2 + 6} -50z" fill="${c}"/><rect x="${-w / 2 + 6}" y="-44" width="${w - 12}" height="15" rx="3" fill="${c}"/>${rot(0, -33, rotulo, { size: 10, color: "#fff" })}<rect x="-8" y="-22" width="16" height="22" fill="#8a5a2b"/></g>`;
const cruzRoja = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M-4 -12 h8 v8 h8 v8 h-8 v8 h-8 v-8 h-8 v-8 h8z" fill="var(--red)"/>`;
const arbolito = P.arbol;

// ---------- Transporte y calle ----------
const rueda = (x, y, r = 8) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1b2235"/><circle cx="${x}" cy="${y}" r="${r * 0.4}" fill="#9aa3b5"/>`;
const coche = (x, y, c = "var(--red)", s = 1) => g(x, y, s, `<path d="M-30 -8 V-20 H-16 L-8 -32 H12 L20 -20 H30 V-8Z" fill="${c}"/><rect x="-5" y="-29" width="14" height="9" fill="var(--water)" opacity=".7"/>${rueda(-17, -6, 7)}${rueda(17, -6, 7)}`);
const bus = (x, y, c = "var(--sun)", s = 1) => g(x, y, s, `<rect x="-44" y="-40" width="88" height="32" rx="6" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>${[-36, -20, -4, 12].map((a) => `<rect x="${a}" y="-35" width="12" height="11" fill="var(--water)" opacity=".7"/>`).join("")}<rect x="28" y="-35" width="10" height="24" fill="var(--water)" opacity=".7"/>${rueda(-26, -7, 8)}${rueda(26, -7, 8)}`);
const tren = (x, y, s = 1) => g(x, y, s, `<rect x="-50" y="-34" width="44" height="26" rx="4" fill="var(--pen)"/><rect x="-2" y="-34" width="44" height="26" rx="4" fill="var(--pen)"/>${[-44, -28, 4, 20].map((a) => `<rect x="${a}" y="-29" width="12" height="9" fill="var(--water)" opacity=".7"/>`).join("")}${[-40, -16, 8, 32].map((a) => rueda(a, -6, 5)).join("")}<path d="M-60 0 H54" stroke="var(--muted)" stroke-width="2"/>`);
const avion = (x, y, s = 1, c = "var(--card)") => g(x, y, s, `<path d="M-40 0 Q -40 -8 -30 -8 H30 Q 44 -8 46 0 Q 44 6 30 6 H-30 Q -40 6 -40 0Z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><path d="M-4 -6 L-18 -28 H-10 L10 -6Z M-4 4 L-16 22 H-8 L10 4Z M-34 -6 L-42 -22 H-36 L-26 -6Z" fill="var(--pen)"/>${[-20, -10, 0, 10, 20].map((a) => `<circle cx="${a}" cy="-1" r="2" fill="var(--water)"/>`).join("")}`);
const bici = (x, y, s = 1, c = "var(--leaf)") => g(x, y, s, `<circle cx="-18" cy="-12" r="12" fill="none" stroke="#1b2235" stroke-width="3"/><circle cx="18" cy="-12" r="12" fill="none" stroke="#1b2235" stroke-width="3"/><path d="M-18 -12 L-4 -12 L8 -30 L18 -12 M-4 -12 L-10 -32 M-14 -32 H-6 M8 -30 L6 -36 H14" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`);
const camion = (x, y, c = "var(--leaf)", s = 1) => g(x, y, s, `<rect x="-44" y="-40" width="58" height="32" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><path d="M14 -8 V-30 H30 L40 -18 V-8Z" fill="var(--red)" stroke="var(--ink)" stroke-width="1.5"/><rect x="18" y="-27" width="10" height="9" fill="var(--water)" opacity=".7"/>${rueda(-28, -7, 7)}${rueda(-10, -7, 7)}${rueda(28, -7, 7)}`);
const semaforo = (x, y, encendida = "verde", s = 1) => g(x, y, s, `<rect x="-3" y="-8" width="6" height="8" fill="#555"/><rect x="-14" y="-74" width="28" height="66" rx="7" fill="#1b2235"/>${[["rojo", "#e5484d", -62], ["ambar", "#f5a524", -41], ["verde", "#30a46c", -20]].map(([n, c, yy]) => `<circle cy="${yy}" r="8" fill="${c}" opacity="${n === encendida ? 1 : 0.22}"/>`).join("")}`);
const semaforoPeaton = (x, y, verde = true) => g(x, y, 1, `<rect x="-3" y="-8" width="6" height="8" fill="#555"/><rect x="-13" y="-56" width="26" height="48" rx="6" fill="#1b2235"/><circle cy="-43" r="8" fill="#e5484d" opacity="${verde ? 0.22 : 1}"/><circle cy="-21" r="8" fill="#30a46c" opacity="${verde ? 1 : 0.22}"/>`);
const pasoCebra = (x, y, w = 90, h = 40) => `<g>${[...Array(Math.floor(w / 18))].map((_, i) => `<rect x="${x + i * 18}" y="${y}" width="10" height="${h}" fill="#fff" stroke="var(--line)"/>`).join("")}</g>`;
const calzada = (y = 120, h = 46) => `<rect x="10" y="${y}" width="240" height="${h}" fill="#5b6475" opacity=".75"/><path d="M14 ${y + h / 2} H246" stroke="#fff" stroke-width="2" stroke-dasharray="12 10"/>`;
const senal = (x, y, tipo = "stop") => {
  const poste = `<rect x="${x - 2}" y="${y - 40}" width="4" height="40" fill="#555"/>`;
  if (tipo === "stop") return `${poste}<path transform="translate(${x} ${y - 56})" d="${[...Array(8)].map((_, i) => { const a = Math.PI / 8 + (i * Math.PI) / 4; return `${i ? "L" : "M"}${(Math.cos(a) * 18).toFixed(1)} ${(Math.sin(a) * 18).toFixed(1)}`; }).join(" ")}z" fill="#e5484d" stroke="#fff" stroke-width="2"/>${rot(x, y - 52, "STOP", { size: 10, color: "#fff", w: 800 })}`;
  if (tipo === "peligro") return `${poste}<path d="M${x} ${y - 76} L${x + 20} ${y - 40} H${x - 20}Z" fill="#fff" stroke="#e5484d" stroke-width="4"/>${rot(x, y - 46, "!", { size: 18, color: "#1b2235", w: 800 })}`;
  if (tipo === "prohibido") return `${poste}<circle cx="${x}" cy="${y - 56}" r="18" fill="#fff" stroke="#e5484d" stroke-width="5"/>`;
  if (tipo === "paso") return `${poste}<rect x="${x - 18}" y="${y - 76}" width="36" height="36" fill="#1f6feb"/><path d="M${x - 12} ${y - 44} L${x} ${y - 70} L${x + 12} ${y - 44}Z" fill="#fff"/>${P.nino(x, y - 46, { s: 0.28, c: "#1b2235", pose: "corre" })}`;
  return poste;
};
const casco = (x, y, c = "var(--red)") => `<g transform="translate(${x} ${y})"><path d="M-16 0 a16 14 0 0 1 32 0z" fill="${c}"/><path d="M-10 -8 h6 M2 -10 h6" stroke="#fff" stroke-width="2"/></g>`;

// ---------- Objetos, materiales y máquinas ----------
const silla = (x, y, s = 1, c = "#a0662f") => g(x, y, s, `<g stroke="${c}" stroke-width="5" stroke-linecap="round" fill="none"><path d="M-14 -60 V0 M-14 -30 H16 V0"/></g>`);
const botella = (x, y, s = 1, c = "var(--leaf)") => g(x, y, s, `<path d="M-5 -46 H5 V-36 q10 4 10 14 V0 H-10 V-22 q0 -10 10 -14z" fill="${c}" opacity=".75" stroke="var(--ink)" stroke-width="1.5"/>`);
const lata = (x, y, s = 1) => g(x, y, s, `<rect x="-10" y="-30" width="20" height="30" rx="3" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/><rect x="-10" y="-20" width="20" height="10" fill="var(--red)"/>`);
const caja = (x, y, s = 1) => g(x, y, s, `<rect x="-20" y="-28" width="40" height="28" fill="#c9a46a" stroke="var(--ink)" stroke-width="1.5"/><path d="M-20 -28 l6 -8 h28 l6 8 M0 -28 V0" stroke="var(--ink)" stroke-width="1.5" fill="none"/>`);
const contenedor = (x, y, c, t) => `<g transform="translate(${x} ${y})"><path d="M-22 -40 H22 L18 0 H-18Z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><rect x="-25" y="-46" width="50" height="7" rx="3" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>${rot(0, -15, t, { size: 10, color: "#fff", w: 800 })}</g>`;
const tijeras = (x, y, s = 1) => g(x, y, s, `<path d="M-4 0 L18 -30 M4 0 L-18 -30" stroke="#9aa3b5" stroke-width="4" stroke-linecap="round"/><circle cx="-6" cy="8" r="7" fill="none" stroke="var(--red)" stroke-width="4"/><circle cx="6" cy="8" r="7" fill="none" stroke="var(--red)" stroke-width="4"/>`);
const ladrillo = (x, y) => `<rect x="${x}" y="${y}" width="30" height="14" fill="#c2603b" stroke="var(--ink)" stroke-width="1"/>`;
// Balancín o palanca: tabla sobre un triángulo.
const balancin = (x, y, ang = -10, w = 160) => `<g transform="translate(${x} ${y})"><path d="M-16 0 L0 -26 L16 0Z" fill="var(--pen)"/><g transform="translate(0 -28) rotate(${ang})"><rect x="${-w / 2}" y="-5" width="${w}" height="10" rx="3" fill="#c9a46a" stroke="var(--ink)" stroke-width="1.5"/></g></g>`;
const rampa = (x, y, w = 140, h = 60) => `<path d="M${x} ${y} H${x + w} V${y - h}Z" fill="#c9a46a" stroke="var(--ink)" stroke-width="1.5"/>`;
const polea = (x, y, cuerda = 80) => `<g><path d="M${x - 30} ${y - 18} H${x + 30}" stroke="var(--ink)" stroke-width="5"/><path d="M${x} ${y - 18} V${y - 12}" stroke="var(--ink)" stroke-width="3"/><circle cx="${x}" cy="${y}" r="13" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/><circle cx="${x}" cy="${y}" r="3" fill="var(--ink)"/><path d="M${x - 13} ${y} V${y + cuerda} M${x + 13} ${y} V${y + cuerda * 0.55}" stroke="#8a5a2b" stroke-width="2.5"/></g>`;
const cubo = (x, y, c = "var(--pen)") => `<g transform="translate(${x} ${y})"><path d="M-14 -20 H14 L11 0 H-11Z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><path d="M-14 -20 q14 -16 28 0" stroke="var(--ink)" stroke-width="1.5" fill="none"/></g>`;
const carretilla = (x, y, s = 1) => g(x, y, s, `<path d="M-30 -30 H20 L10 -10 H-24Z" fill="var(--leaf)" stroke="var(--ink)" stroke-width="1.5"/>${rueda(10, -8, 9)}<path d="M-24 -12 L-44 -26 M-30 -12 L-28 0" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/>`);
const engranaje = (x, y, r = 18, c = "var(--muted)") => `<g transform="translate(${x} ${y})">${[...Array(8)].map((_, i) => `<rect x="-4" y="${-r - 6}" width="8" height="10" fill="${c}" transform="rotate(${i * 45})"/>`).join("")}<circle r="${r}" fill="${c}"/><circle r="${r * 0.35}" fill="var(--paper)"/></g>`;
const tornillo = (x, y, s = 1) => g(x, y, s, `<rect x="-10" y="-34" width="20" height="8" rx="2" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.2"/><rect x="-4" y="-26" width="8" height="26" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.2"/>${[-22, -16, -10, -4].map((yy) => `<path d="M-6 ${yy} L6 ${yy - 4}" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}`);

// ---------- Familia, tiempo ----------
const reloj = require("./_pri1").reloj;
const calendario = (x, y, t = "LUNES", n = "8") => `<g transform="translate(${x} ${y})"><rect x="-30" y="-36" width="60" height="62" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><rect x="-30" y="-36" width="60" height="18" rx="6" fill="var(--red)"/>${rot(0, -23, t, { size: 10, color: "#fff" })}${big(0, 16, n, "var(--ink)", 28)}</g>`;
const marco = (x, y, w = 50, h = 60) => `<rect x="${x - w / 2}" y="${y - h}" width="${w}" height="${h}" rx="4" fill="var(--card)" stroke="#8a5a2b" stroke-width="4"/>`;

// Tema de 2º de Primaria: rellena lo común del formato de 1º.
function tema(o) {
  const { saberes, ideas, mapaT, ...t } = o;
  return {
    curso: "2-primaria",
    minutos: 25,
    ...t,
    ejemplosTitulo: "Lo hacemos juntos",
    mapa: mapa(mapaT[0], "var(--pri)", mapaT[1], 220),
    profesores: { saberes: `${saberes} (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).`, ideas },
    fuentes: [RD],
    revisado: "2026-11-13",
  };
}

module.exports = {
  ...P, RD, g, ojo, chip, linea, cielo, hierba,
  perro, gato, vaca, gallina, pez, ave, rana, serpiente, mariposa, caracol, arana, huevo,
  planta, raices, tierra, semilla, gota, pino, manzana,
  cara, hueso, esqueleto, brazoMusculo,
  zanahoria, pan, leche, pescado, pastel, vaso, plato,
  hielo, vapor, olla, lluvia, copo, viento, globo, molino, termometro, paraguas, tierraPlaneta,
  monte, mar, barca, faro, rio,
  edificio, publico, cruzRoja, arbolito,
  rueda, coche, bus, tren, avion, bici, camion, semaforo, semaforoPeaton, pasoCebra, calzada, senal, casco,
  silla, botella, lata, caja, contenedor, tijeras, ladrillo, balancin, rampa, polea, cubo, carretilla, engranaje, tornillo,
  reloj, calendario, marco, tema, F, D, svg, rot, big, PROF,
};

// Vídeo por id (datos reales guardados en _pri2b-videos.js).
const VIDS = require("./_pri2b-videos");
const V = (id, busqueda) => {
  const v = VIDS[id];
  if (!v) throw new Error(`Vídeo sin datos: ${id}`);
  return { id, titulo: v[0], canal: v[1], vistas: v[2], megusta: v[3], ...(busqueda ? { busqueda } : {}) };
};
module.exports.V = V;
// Texto centrado (x, y, texto, color, tamaño), como en _pri1.
module.exports.txt = (x, y, t, color = "var(--ink)", size = 14) => rot(x, y, t, { size, color });
