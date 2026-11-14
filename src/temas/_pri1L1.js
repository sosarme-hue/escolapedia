// Ayudas para los temas de 1º de Primaria a nivel libro (Matemáticas, Inglés y Música).
// No es un tema: empieza por "_". Reúne los dibujos de _pri1 y _pri1-dib y añade algunos más.
const { mapa } = require("./_util");
const P1 = require("./_pri1");
const DB = require("./_pri1-dib");
const PQ = require("./_peque");
const { F, D, svg, num, txt } = P1;
const { rot } = DB;

// Apartado: título numerado, html y dibujo (260×180). extra = { video } si lleva vídeo.
const B = (h, html, label, body, extra = {}) => ({ html: `<h3>${h}</h3>${html}`, svg: svg(label, body), ...extra });
// Pregunta de test con 3 opciones.
const Q = (q, o, a, e) => ({ q, o, a, e });
// Ejercicios por niveles.
const b = (q, sol) => ({ q, sol, nivel: "básico" });
const m = (q, sol) => ({ q, sol, nivel: "medio" });
const a = (q, sol) => ({ q, sol, nivel: "avanzado" });
const lect = (titulo, html) => ({ titulo, html });
const sit = (titulo, reto, pasos, producto, evaluacion) => ({ titulo, reto, pasos, producto, evaluacion });
const fig = (titulo, label, body) => ({ titulo, svg: `<svg viewBox="0 0 640 300" role="img" aria-label="${label}"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${body}</svg>` });
const V = (id, titulo, canal, vistas, busqueda) => ({ id, titulo, canal, vistas, megusta: 0, ...(busqueda ? { busqueda } : {}) });

// ---- Dibujos de matemáticas ----
const caja = (x, y, t, { w = 34, h = 40, c = "var(--pen)", size = 24, fondo = "var(--card)" } = {}) =>
  `<g><rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="8" fill="${fondo}" stroke="${c}" stroke-width="2.5"/>${num(x, y + size * 0.36, t, c, size)}</g>`;
const recta = (x0, y, desde, hasta, paso, marca = null) => [...Array(hasta - desde + 1)].map((_, i) => {
  const n = desde + i, x = x0 + i * paso;
  return `<path d="M${x} ${y - 7} V${y + 7}" stroke="var(--ink)" stroke-width="2"/>${num(x, y + 26, n, n === marca ? "var(--red)" : "var(--ink)", 14)}`;
}).join("") + `<path d="M${x0 - 8} ${y} H${x0 + (hasta - desde) * paso + 8}" stroke="var(--ink)" stroke-width="2.5"/>`;
const circulo = (x, y, r = 22, c = "var(--red)") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const cuadrado = (x, y, l = 42, c = "var(--pen)") => `<rect x="${x - l / 2}" y="${y - l / 2}" width="${l}" height="${l}" fill="${c}"/>`;
const triangulo = (x, y, l = 46, c = "var(--leaf)") => `<path d="M${x} ${y - l / 2} L${x + l / 2} ${y + l / 2} L${x - l / 2} ${y + l / 2}z" fill="${c}"/>`;
const rectangulo = (x, y, w = 64, h = 36, c = "var(--sun)") => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" fill="${c}"/>`;
const cubo = (x, y, l = 40, c = "var(--pen)") => `<g stroke="var(--ink)" stroke-width="1.5" stroke-linejoin="round"><path d="M${x - l / 2} ${y - l / 2 + 8}h${l}v${l}h${-l}z" fill="${c}"/><path d="M${x - l / 2} ${y - l / 2 + 8}l12 -12h${l}l-12 12z" fill="${c}" opacity=".7"/><path d="M${x + l / 2} ${y - l / 2 + 8}l12 -12v${l}l-12 12z" fill="${c}" opacity=".5"/></g>`;
const esfera = (x, y, r = 24, c = "var(--red)") => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/><ellipse cx="${x - r * 0.35}" cy="${y - r * 0.35}" rx="${r * 0.3}" ry="${r * 0.2}" fill="#fff" opacity=".5"/></g>`;
const cilindro = (x, y, r = 20, h = 46, c = "var(--leaf)") => `<g stroke="var(--ink)" stroke-width="1.5"><path d="M${x - r} ${y - h / 2}V${y + h / 2}a${r} 7 0 0 0 ${2 * r} 0V${y - h / 2}" fill="${c}"/><ellipse cx="${x}" cy="${y - h / 2}" rx="${r}" ry="7" fill="${c}" opacity=".6"/></g>`;
const cono = (x, y, r = 22, h = 50, c = "var(--sun)") => `<g stroke="var(--ink)" stroke-width="1.5"><path d="M${x} ${y - h / 2}L${x + r} ${y + h / 2}a${r} 7 0 0 1 ${-2 * r} 0z" fill="${c}"/></g>`;
const regla = (x, y, cm = 10, paso = 20) => `<g><rect x="${x}" y="${y}" width="${cm * paso + 16}" height="30" rx="4" fill="var(--sun)" opacity=".85" stroke="var(--ink)" stroke-width="1.5"/>${[...Array(cm + 1)].map((_, i) => `<path d="M${x + 8 + i * paso} ${y} v12" stroke="var(--ink)" stroke-width="1.5"/>${i % 2 === 0 ? `<text x="${x + 8 + i * paso}" y="${y + 25}" text-anchor="middle" font-size="9" fill="var(--ink)" ${D}>${i}</text>` : ""}`).join("")}</g>`;
const balanza = (x, y, inclina = 0, izq = "", der = "") => {
  const d = inclina * 14;
  return `<g><path d="M${x} ${y} v-60" stroke="var(--ink)" stroke-width="4"/><path d="M${x - 40} ${y + 2} h80" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/><path d="M${x - 62} ${y - 60 + d} L${x + 62} ${y - 60 - d}" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/><circle cx="${x}" cy="${y - 60}" r="5" fill="var(--red)"/>
  <path d="M${x - 82} ${y - 40 + d} h40 l-6 10 h-28z" fill="var(--line)"/><path d="M${x - 62} ${y - 60 + d} v20" stroke="var(--muted)" stroke-width="1.5"/>
  <path d="M${x + 42} ${y - 40 - d} h40 l-6 10 h-28z" fill="var(--line)"/><path d="M${x + 62} ${y - 60 - d} v20" stroke="var(--muted)" stroke-width="1.5"/>
  <g transform="translate(${x - 62} ${y - 42 + d})">${izq}</g><g transform="translate(${x + 62} ${y - 42 - d})">${der}</g></g>`;
};
const vaso = (x, y, nivel = 0.6, h = 60, w = 40, c = "var(--water)") => `<g><path d="M${x - w / 2} ${y - h} L${x - w / 2 + 4} ${y} H${x + w / 2 - 4} L${x + w / 2} ${y - h}" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M${x - w / 2 + 4 * (1 - nivel) + 1} ${y - h * nivel} L${x - w / 2 + 5} ${y - 1} H${x + w / 2 - 5} L${x + w / 2 - 4 * (1 - nivel) - 1} ${y - h * nivel}z" fill="${c}" opacity=".8"/></g>`;
const calendario = (x, y, mes, marcado = 0) => `<g><rect x="${x}" y="${y}" width="140" height="120" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="${x}" y="${y}" width="140" height="24" rx="8" fill="var(--red)"/>${rot(x + 70, y + 17, mes, { size: 13, color: "#fff" })}${[...Array(28)].map((_, i) => { const cx = x + 12 + (i % 7) * 19.5, cy = y + 42 + Math.floor(i / 7) * 21; return `${i + 1 === marcado ? `<circle cx="${cx}" cy="${cy - 4}" r="9" fill="var(--sun)"/>` : ""}<text x="${cx}" y="${cy}" text-anchor="middle" font-size="10" fill="var(--ink)" ${D}>${i + 1}</text>`; }).join("")}</g>`;
const signo = (x, y, s, c = "var(--red)", size = 30) => num(x, y, s, c, size);

// ---- Dibujos de inglés ----
const gato = (x, y, c = "var(--sun)") => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="8" rx="16" ry="14" fill="${c}"/><circle cx="0" cy="-14" r="12" fill="${c}"/><path d="M-11 -20 l2 -12 l8 7z M11 -20 l-2 -12 l-8 7z" fill="${c}"/><circle cx="-4" cy="-15" r="1.6" fill="var(--ink)"/><circle cx="4" cy="-15" r="1.6" fill="var(--ink)"/><path d="M-2 -10 l2 2 l2 -2" stroke="var(--ink)" fill="none"/><path d="M16 10 q12 -4 8 -18" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
const perro = (x, y, c = "#b07a46") => `<g transform="translate(${x} ${y})"><ellipse cx="4" cy="6" rx="20" ry="12" fill="${c}"/><circle cx="-16" cy="-10" r="12" fill="${c}"/><ellipse cx="-24" cy="-6" rx="5" ry="10" fill="var(--ink)" opacity=".7"/><circle cx="-18" cy="-12" r="1.6" fill="var(--ink)"/><circle cx="-27" cy="-8" r="2.4" fill="var(--ink)"/><path d="M-6 16 v8 M14 16 v8" stroke="${c}" stroke-width="5" stroke-linecap="round"/><path d="M24 2 q8 -6 6 -14" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
const conejo = (x, y, c = "var(--card)") => `<g transform="translate(${x} ${y})" stroke="var(--ink)" stroke-width="1.5"><ellipse cx="0" cy="8" rx="14" ry="13" fill="${c}"/><circle cx="0" cy="-12" r="10" fill="${c}"/><ellipse cx="-5" cy="-32" rx="4" ry="12" fill="${c}"/><ellipse cx="5" cy="-32" rx="4" ry="12" fill="${c}"/><circle cx="-3" cy="-13" r="1.3" fill="var(--ink)"/><circle cx="3" cy="-13" r="1.3" fill="var(--ink)"/></g>`;
const platano = (x, y) => `<path transform="translate(${x} ${y})" d="M-22 -6 q22 26 44 -2 q-2 -4 -6 -2 q-16 14 -34 -2z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>`;
const pan = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-26 8 q-4 -22 26 -22 q30 0 26 22z" fill="#d79a52" stroke="var(--ink)" stroke-width="1.5"/><path d="M-12 -6 l6 8 M0 -8 l6 8 M12 -6 l6 8" stroke="#8a5a2b" stroke-width="2"/></g>`;
const leche = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-14 -20 h28 v40 h-28z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-14 -20 l6 -10 h16 l6 10z" fill="var(--water)"/>${rot(0, 6, "MILK", { size: 8 })}</g>`;
const huevo = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="11" ry="14" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>`;
const camiseta = (x, y, c = "var(--red)") => `<path transform="translate(${x} ${y})" d="M-12 -22 l-18 10 l8 12 l6 -4 v26 h32 v-26 l6 4 l8 -12 l-18 -10 q-6 6 -12 0z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>`;
const pantalon = (x, y, c = "var(--pen)") => `<path transform="translate(${x} ${y})" d="M-16 -22 h32 l4 46 h-14 l-6 -30 l-6 30 h-14z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>`;
const gorro = (x, y, c = "var(--leaf)") => `<g transform="translate(${x} ${y})"><path d="M-18 6 q0 -24 18 -24 q18 0 18 24z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><rect x="-20" y="4" width="40" height="8" rx="3" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="0" cy="-20" r="5" fill="var(--card)"/></g>`;
const lluvia = (x, y) => DB.nube(x, y) + [-14, 0, 14].map((d) => `<path d="M${x + d} ${y + 16} l-4 12" stroke="var(--water)" stroke-width="3" stroke-linecap="round"/>`).join("");
const libro = (x, y, c = "var(--pen)") => `<g transform="translate(${x} ${y})"><path d="M0 -14 q-14 -6 -28 0 v30 q14 -6 28 0 q14 -6 28 0 v-30 q-14 -6 -28 0z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -14 v30" stroke="var(--ink)" stroke-width="1.5"/></g>`;
const lapiz = (x, y, c = "var(--sun)") => `<g transform="translate(${x} ${y}) rotate(-30)"><rect x="-30" y="-5" width="48" height="10" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><path d="M18 -5 l12 5 l-12 5z" fill="#e8c9a0" stroke="var(--ink)" stroke-width="1.2"/><rect x="-36" y="-5" width="6" height="10" fill="var(--red)"/></g>`;
const mochila = (x, y, c = "var(--red)") => `<g transform="translate(${x} ${y})"><rect x="-20" y="-22" width="40" height="46" rx="10" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><rect x="-12" y="4" width="24" height="14" rx="4" fill="var(--card)" opacity=".6"/><path d="M-8 -22 q8 -12 16 0" stroke="var(--ink)" stroke-width="2" fill="none"/></g>`;
// Persona adulta (más alta) basada en nino.
const adulto = (x, y, op = {}) => DB.nino(x, y, { s: 1.35, ...op });

// ---- Dibujos de música ----
const maracas = (x, y) => `<g transform="translate(${x} ${y})"><g transform="rotate(-20)"><ellipse cx="0" cy="-20" rx="11" ry="15" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -5 v26" stroke="#8a5a2b" stroke-width="5" stroke-linecap="round"/></g><g transform="translate(26 0) rotate(20)"><ellipse cx="0" cy="-20" rx="11" ry="15" fill="var(--red)" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -5 v26" stroke="#8a5a2b" stroke-width="5" stroke-linecap="round"/></g></g>`;
const pandereta = (x, y, r = 24) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="var(--card)" stroke="#8a5a2b" stroke-width="6"/>${[0, 60, 120, 180, 240, 300].map((g) => { const t = g * Math.PI / 180; return `<circle cx="${(x + Math.cos(t) * r).toFixed(1)}" cy="${(y + Math.sin(t) * r).toFixed(1)}" r="4" fill="var(--sun)" stroke="var(--ink)"/>`; }).join("")}</g>`;
const trianguloM = (x, y, l = 44) => `<g><path d="M${x} ${y - l / 2} L${x + l / 2} ${y + l / 2} H${x - l / 2 + 6}" stroke="var(--muted)" stroke-width="4" fill="none" stroke-linejoin="round"/><path d="M${x} ${y - l / 2} L${x - l / 2} ${y + l / 2 - 6}" stroke="var(--muted)" stroke-width="4"/><path d="M${x + l / 2 + 6} ${y - 4} l-16 22" stroke="var(--ink)" stroke-width="2.5"/></g>`;
const claves = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-26" y="-6" width="40" height="9" rx="4" fill="#b07a46" transform="rotate(-25)"/><rect x="-12" y="-4" width="40" height="9" rx="4" fill="#8a5a2b" transform="rotate(20)"/></g>`;
const xilofono = (x, y) => `<g>${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${x + i * 16}" y="${y - 34 + i * 4}" width="12" height="${60 - i * 8}" rx="3" fill="${["var(--red)", "var(--sun)", "var(--leaf)", "var(--water)", "var(--pen)", "var(--inf)"][i]}"/>`).join("")}<path d="M${x - 4} ${y - 30} L${x + 98} ${y - 12} M${x - 4} ${y + 22} L${x + 98} ${y + 4}" stroke="#8a5a2b" stroke-width="3"/></g>`;
const ondas = (x, y, n = 3, c = "var(--pen)", grande = true) => [...Array(n)].map((_, i) => `<path d="M${x + i * 12} ${y - 10 - i * 7} q${8 + i * 2} ${10 + i * 7} 0 ${20 + i * 14}" stroke="${c}" stroke-width="${grande ? 4 : 2}" fill="none" stroke-linecap="round" opacity="${1 - i * 0.2}"/>`).join("");
const silencio = (x, y, c = "var(--ink)") => `<path transform="translate(${x} ${y})" d="M-4 -18 l8 8 l-6 6 l8 8 q-10 -4 -8 8 q-10 -10 2 -12 l-8 -8 l6 -6z" fill="${c}"/>`;
const oreja = (x, y) => `<path transform="translate(${x} ${y})" d="M-6 -20 q22 -6 22 14 q0 10 -10 16 q-4 4 -4 10 q0 8 -8 8" stroke="var(--ink)" stroke-width="3" fill="#f3c9a1" stroke-linecap="round"/>`;

const FUENTES = P1.FUENTES;
const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 157/2022, primer ciclo de Educación Primaria).`, ideas });

module.exports = {
  ...P1, ...DB, ic: PQ.ic, I: PQ.I, vocab: PQ.vocab, charla: PQ.charla, mural: PQ.mural, dibujos: PQ.dibujos, lista: PQ.lista, parejas: PQ.parejas, cuantos: PQ.cuantos, frase: PQ.frase, mapa, F, D, svg, num, txt, rot, FUENTES, PROF,
  B, Q, b, m, a, lect, sit, fig, V,
  caja, recta, circulo, cuadrado, triangulo, rectangulo, cubo, esfera, cilindro, cono, regla, balanza, vaso, calendario, signo,
  gato, perro, conejo, platano, pan, leche, huevo, camiseta, pantalon, gorro, lluvia, libro, lapiz, mochila, adulto,
  maracas, pandereta, trianguloM, claves, xilofono, ondas, silencio, oreja,
};
