// Ayudas del lote A de 2º de Primaria: Matemáticas y Religión (no es un tema: empieza por "_").
// Mismo formato que 1º (README, «Tema de 1º de Primaria»): frases cortas, letra grande y un dibujo por bloque.
// Reutiliza los dibujos de 1º (_pri1 y _pri1-dib) y añade la centena y los cuerpos geométricos.
const { mapa } = require("./_util");
const P1 = require("./_pri1");
const DB = require("./_pri1-dib");
const VID = require("./_pri2a-videos");

const C = "2-primaria";
const REV = "2026-11-13";
const FUENTES = {
  "Matemáticas": [{ t: "Proyecto Descartes (INTEF): recursos de Matemáticas para Primaria", url: "https://proyectodescartes.org/" }],
  "Religión": [{ t: "Sagrada Biblia, versión oficial de la Conferencia Episcopal Española", url: "https://www.conferenciaepiscopal.es/biblia/" }],
};
const AREA = {
  "Matemáticas": "Matemáticas, primer ciclo",
  "Religión": "enseñanzas de Religión católica de Primaria, primer ciclo",
};

// Vídeo por clave de _pri2a-videos.js: V("sumB") para un bloque; V("sumV", true) para el vídeo general.
const V = (k, general) => {
  const v = VID[k]; if (!v) throw new Error(`_pri2a: falta el vídeo ${k}`);
  return { id: v[0], titulo: v[1], canal: v[2], vistas: v[3], megusta: 0, ...(general ? { busqueda: v[4] } : {}) };
};

// La respuesta correcta se escribe la primera y aquí se reparte en posiciones variadas (patrón fijo).
const PATRON = [1, 2, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1];
const preguntas = (qs, desde = 0) => qs.map(([q, o, e], i) => {
  const dest = PATRON[(i + desde) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Bloque: [título, html, svg, vídeo?].
const bloque = ([h, cuerpo, svg, video]) => ({ html: `<h3>${h}</h3>${cuerpo}`, svg, ...(video ? { video } : {}) });

function tema(o) {
  const n = { b: o.bloques.length, q: o.quiz.length, x: o.examen.length, t: o.tarjetas.length, j: o.ejercicios.length, e: o.ejemplos.length, er: o.errores.length, f: o.familias.length };
  if (n.b < 8 || n.b > 10 || n.q !== 10 || n.x !== 4 || n.t !== 8 || n.j !== 10 || n.e !== 3 || n.er !== 4 || n.f !== 4 || o.bloques.some((b) => !b[2])) console.warn(`[pri2a] ${o.titulo}: ${JSON.stringify(n)}`);
  return {
    materia: o.materia,
    curso: C,
    titulo: o.titulo,
    minutos: o.minutos || 25,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    bloques: o.bloques.map(bloque),
    figura: { titulo: o.figura[0], svg: o.figura[1] },
    video: o.video,
    ejemplosTitulo: "Lo hacemos juntos",
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: o.ejercicios.map(([q, sol]) => ({ q, sol })),
    quiz: preguntas(o.quiz),
    examen: preguntas(o.examen, 4),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--pri)", o.mapa[1], o.mapa[2] || 220),
    tarjetas: o.tarjetas,
    familias: o.familias,
    profesores: { saberes: `${o.saberes} (RD 157/2022, ${AREA[o.materia]}).`, ideas: o.ideas },
    fuentes: [...P1.FUENTES, ...FUENTES[o.materia]],
    revisado: REV,
  };
}

const { num, txt } = P1;
// Placa de centena: cuadrado de 10 × 10 cuadritos (lado l).
const centena = (x, y, l = 5, color = "var(--red)") => `<g><rect x="${x}" y="${y}" width="${l * 10}" height="${l * 10}" rx="2" fill="${color}"/>${[...Array(9)].map((_, i) => `<path d="M${x + (i + 1) * l} ${y} V${y + l * 10} M${x} ${y + (i + 1) * l} H${x + l * 10}" stroke="var(--card)" stroke-width=".8"/>`).join("")}</g>`;
// Barra de decena en tamaño libre (vertical, 10 cuadritos de alto h).
const dec = (x, y, h = 5, color = "var(--pen)") => `<g><rect x="${x}" y="${y}" width="${h}" height="${h * 10}" rx="1.5" fill="${color}"/>${[...Array(9)].map((_, i) => `<path d="M${x} ${y + (i + 1) * h} H${x + h}" stroke="var(--card)" stroke-width=".8"/>`).join("")}</g>`;
const uni = (x, y, h = 5, color = "var(--sun)") => `<rect x="${x}" y="${y}" width="${h}" height="${h}" rx="1" fill="${color}"/>`;
// Bloques de un número (C, D, U) en (x, y): centenas, decenas y unidades seguidas.
function bloques(nro, x, y, h = 5) {
  const c = Math.floor(nro / 100), d = Math.floor(nro / 10) % 10, u = nro % 10;
  let s = "", cx = x;
  for (let i = 0; i < c; i++) { s += centena(cx, y, h); cx += h * 10 + 4; }
  for (let i = 0; i < d; i++) { s += dec(cx, y, h); cx += h + 3; }
  cx += d ? 3 : 0;
  for (let i = 0; i < u; i++) s += uni(cx + (i % 3) * (h + 2), y + h * 10 - h - Math.floor(i / 3) * (h + 2), h);
  return s;
}
// Tabla de valor posicional C D U con filas de números.
function tablaCDU(x, y, filas, w = 44, h = 30) {
  const cab = ["C", "D", "U"], col = ["var(--red)", "var(--pen)", "var(--sun)"];
  let s = cab.map((k, i) => `<rect x="${x + i * w}" y="${y}" width="${w}" height="${h}" fill="${col[i]}" stroke="var(--ink)"/>${num(x + i * w + w / 2, y + h * 0.72, k, i === 2 ? "var(--ink)" : "var(--card)", 18)}`).join("");
  filas.forEach((f, j) => { s += String(f).padStart(3, " ").split("").map((d, i) => `<rect x="${x + i * w}" y="${y + (j + 1) * h}" width="${w}" height="${h}" fill="var(--card)" stroke="var(--ink)"/>${d.trim() ? num(x + i * w + w / 2, y + (j + 1) * h + h * 0.72, d, col[i] === "var(--sun)" ? "var(--ink)" : col[i], 18) : ""}`).join(""); });
  return s;
}
// Operación en columna: líneas de números alineadas a la derecha en xr. "llevo" pinta una cifra pequeña arriba.
function cuenta(xr, y, filas, { op = "+", res = "", llevo = [], paso = 22, size = 24, color = "var(--ink)" } = {}) {
  let s = "";
  filas.forEach((f, j) => { s += String(f).split("").reverse().map((d, i) => num(xr - i * paso, y + j * (size + 6), d, color, size)).join(""); });
  const yl = y + (filas.length - 1) * (size + 6) + 8;
  s += num(xr - (String(filas[filas.length - 1]).length) * paso - 4, y + (filas.length - 1) * (size + 6), op, "var(--muted)", size);
  const ancho = Math.max(...filas.map((f) => String(f).length), String(res).length) + 1;
  s += `<path d="M${xr - ancho * paso + 8} ${yl} H${xr + 12}" stroke="var(--ink)" stroke-width="2.5"/>`;
  if (res !== "") s += String(res).split("").reverse().map((d, i) => num(xr - i * paso, yl + size + 2, d, "var(--pen)", size)).join("");
  llevo.forEach(([i, t]) => { s += num(xr - i * paso, y - size + 2, t, "var(--red)", 13); });
  return s;
}
// Cuerpos geométricos sencillos con un toque de volumen.
const cubo = (x, y, l = 40, c = "var(--pen)") => `<g stroke="var(--ink)" stroke-width="1.8" stroke-linejoin="round"><path d="M${x} ${y} h${l} v${l} h${-l}z" fill="${c}" fill-opacity=".55"/><path d="M${x} ${y} l${l * 0.35} ${-l * 0.3} h${l} l${-l * 0.35} ${l * 0.3}z" fill="${c}" fill-opacity=".3"/><path d="M${x + l} ${y} l${l * 0.35} ${-l * 0.3} v${l} l${-l * 0.35} ${l * 0.3}z" fill="${c}" fill-opacity=".8"/></g>`;
const prisma = (x, y, w = 60, h = 34, c = "var(--sun)") => `<g stroke="var(--ink)" stroke-width="1.8" stroke-linejoin="round"><path d="M${x} ${y} h${w} v${h} h${-w}z" fill="${c}" fill-opacity=".55"/><path d="M${x} ${y} l14 -12 h${w} l-14 12z" fill="${c}" fill-opacity=".3"/><path d="M${x + w} ${y} l14 -12 v${h} l-14 12z" fill="${c}" fill-opacity=".85"/></g>`;
const esfera = (x, y, r = 22, c = "var(--red)") => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${c}" fill-opacity=".7" stroke="var(--ink)" stroke-width="1.8"/><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.3}" fill="none" stroke="var(--ink)" stroke-width="1" stroke-dasharray="3 3"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.4}" r="${r * 0.18}" fill="#fff" opacity=".7"/></g>`;
const cilindro = (x, y, r = 20, h = 44, c = "var(--leaf)") => `<g stroke="var(--ink)" stroke-width="1.8"><path d="M${x - r} ${y} V${y + h} a${r} ${r * 0.35} 0 0 0 ${2 * r} 0 V${y}" fill="${c}" fill-opacity=".6"/><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.35}" fill="${c}" fill-opacity=".35"/></g>`;
const cono = (x, y, r = 22, h = 50, c = "var(--inf)") => `<g stroke="var(--ink)" stroke-width="1.8" stroke-linejoin="round"><path d="M${x} ${y - h} L${x - r} ${y} a${r} ${r * 0.35} 0 0 0 ${2 * r} 0z" fill="${c}" fill-opacity=".6"/><path d="M${x - r} ${y} a${r} ${r * 0.35} 0 0 1 ${2 * r} 0" fill="none" stroke-dasharray="3 3" stroke-width="1"/></g>`;
const piramide = (x, y, w = 50, c = "var(--sun)") => `<g stroke="var(--ink)" stroke-width="1.8" stroke-linejoin="round"><path d="M${x} ${y - w} L${x - w / 2} ${y} L${x + w * 0.15} ${y + 8}z" fill="${c}" fill-opacity=".55"/><path d="M${x} ${y - w} L${x + w * 0.15} ${y + 8} L${x + w / 2} ${y - 2}z" fill="${c}" fill-opacity=".85"/></g>`;
// Barra de colores con su número encima (para gráficos).
const columnas = (x0, ybase, datos, { w = 30, sep = 14, esc = 10, etiquetas = true } = {}) => datos.map(([et, v, c], i) => {
  const x = x0 + i * (w + sep);
  return `<rect x="${x}" y="${ybase - v * esc}" width="${w}" height="${v * esc}" rx="3" fill="${c}"/>${num(x + w / 2, ybase - v * esc - 5, v, "var(--ink)", 14)}${etiquetas ? txt(x + w / 2, ybase + 16, et, "var(--ink)", 11) : ""}`;
}).join("") + `<path d="M${x0 - 6} ${ybase} H${x0 + datos.length * (w + sep)}" stroke="var(--ink)" stroke-width="2"/>`;
// Regla graduada en centímetros (0 a n), cada cm de ancho px.
const regla = (x, y, n = 10, px = 20) => `<g><rect x="${x - 6}" y="${y}" width="${n * px + 12}" height="30" rx="4" fill="var(--sun)" fill-opacity=".45" stroke="var(--ink)" stroke-width="1.5"/>${[...Array(n + 1)].map((_, i) => `<path d="M${x + i * px} ${y} v12" stroke="var(--ink)" stroke-width="1.5"/>${num(x + i * px, y + 26, i, "var(--ink)", 10)}`).join("")}${[...Array(n)].map((_, i) => `<path d="M${x + i * px + px / 2} ${y} v6" stroke="var(--ink)" stroke-width="1"/>`).join("")}</g>`;
// Balanza de dos platos; incl > 0 baja el plato izquierdo.
const balanza = (x, y, incl = 0, izq = "", der = "") => `<g><path d="M${x} ${y} V${y + 86} M${x - 26} ${y + 86} h52" stroke="var(--ink)" stroke-width="3"/><g transform="rotate(${-incl * 8} ${x} ${y})"><path d="M${x - 70} ${y} H${x + 70}" stroke="var(--ink)" stroke-width="3"/>${[-70, 70].map((d) => `<path d="M${x + d} ${y} L${x + d - 20} ${y + 48} M${x + d} ${y} L${x + d + 20} ${y + 48}" stroke="var(--muted)" stroke-width="1.5"/><path d="M${x + d - 26} ${y + 48} h52" stroke="var(--ink)" stroke-width="3.5" stroke-linecap="round"/>`).join("")}${izq ? `<g transform="translate(${x - 70} ${y + 46})">${izq}</g>` : ""}${der ? `<g transform="translate(${x + 70} ${y + 46})">${der}</g>` : ""}</g><circle cx="${x}" cy="${y}" r="4" fill="var(--ink)"/></g>`;
// Botella y jarra sencillas para capacidad.
const botella = (x, y, h = 70, lleno = 1, c = "var(--water)") => `<g><path d="M${x - 14} ${y} v${-h + 24} q0 -8 8 -12 v-12 h12 v12 q8 4 8 12 v${h - 24}z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.8"/><rect x="${x - 13}" y="${y - (h - 24) * lleno}" width="26" height="${(h - 24) * lleno}" fill="${c}" opacity=".6"/></g>`;
// Figura de palitos de 2º: usa la de 1º.
const { nino } = DB;

module.exports = {
  ...P1, ...DB, mapa, tema, V, C, REV,
  centena, dec, uni, bloques, tablaCDU, cuenta, cubo, prisma, esfera, cilindro, cono, piramide, columnas, regla, balanza, botella, nino,
};
