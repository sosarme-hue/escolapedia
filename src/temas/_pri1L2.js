// Ayudas para los temas de 1º de Primaria a nivel libro (lote P2: Lengua Castellana, Lengua Catalana y Plástica).
// tema() monta el objeto completo a partir de listas cortas; los dibujos usan _peque.js y algunos propios de Plástica.
const { mapa } = require("./_util");
const P = require("./_peque");
const { FUENTES } = require("./_pri1");
const { fz } = require("./_lenguas");

const C = { R: "var(--red)", A: "var(--pen)", V: "var(--leaf)", N: "var(--inf)", M: "var(--sun)", G: "var(--muted)", K: "var(--ink)", W: "var(--water)" };
const REVISADO = "2026-11-14";

// Título y nota dentro de un dibujo 260 × 180.
const tit = (t, y = 22) => t ? `<text x="130" y="${y}" text-anchor="middle" font-size="${fz(t, 15, 236, true)}" font-weight="700" fill="var(--muted)">${t}</text>` : "";
const pie = (t, y = 168) => t ? `<text x="130" y="${y}" text-anchor="middle" font-size="${fz(t, 14, 236, true)}" font-weight="700" fill="var(--ink)">${t}</text>` : "";
const lienzo = (label, inner, { titulo, nota } = {}) => P.marco(label, `${tit(titulo)}${inner}${pie(nota)}`);
const texto = (x, y, t, { size = 16, color = "var(--ink)", w = 700, max = 240 } = {}) =>
  `<text x="${x}" y="${y}" text-anchor="middle" font-size="${fz(t, size, max, true)}" font-weight="${w}" fill="${color}" ${P.D}>${t}</text>`;

// Manchas de color para Plástica: [color, nombre] en círculos con su nombre debajo.
const manchas = (label, items, opts = {}) => P.muestras(label, items.map(([c, n, d = ""]) => ["", n, d, c]), opts);
// Mezcla: color1 + color2 = color3.
const mezcla = (label, filas, opts = {}) => {
  const n = filas.length, top = opts.titulo ? 34 : 12, h = (172 - top) / n, r = Math.min(20, h / 2 - 11);
  const out = filas.map(([[c1, n1], [c2, n2], [c3, n3]], i) => {
    const cy = top + h * (i + 0.5) - (n === 1 ? 10 : 6);
    const ty = cy + r + 14;
    return `<circle cx="45" cy="${cy}" r="${r}" fill="${c1}" stroke="var(--line)" stroke-width="2"/>${texto(45, ty, n1, { size: 13, max: 70 })}
      <text x="88" y="${cy + 7}" text-anchor="middle" font-size="22" font-weight="800" fill="var(--muted)">+</text>
      <circle cx="130" cy="${cy}" r="${r}" fill="${c2}" stroke="var(--line)" stroke-width="2"/>${texto(130, ty, n2, { size: 13, max: 70 })}
      <text x="172" y="${cy + 7}" text-anchor="middle" font-size="22" font-weight="800" fill="var(--muted)">=</text>
      <circle cx="215" cy="${cy}" r="${r + 2}" fill="${c3}" stroke="var(--line)" stroke-width="2"/>${texto(215, ty, n3, { size: 13, max: 80 })}`;
  }).join("");
  return lienzo(label, out, opts);
};

// Bloque: [título, html, svg, vídeo opcional]; se numeran solos.
const bloque = ([t, html, svg, video], i) => ({ html: `<h3>${i + 1}. ${t}</h3>${html}`, svg, ...(video ? { video } : {}) });
const niv = (nivel) => ([q, sol]) => ({ q, sol, nivel });
const preg = ([q, o, a, e]) => ({ q, o, a, e });

function tema(o) {
  const ca = !!o.ca;
  return {
    materia: o.materia,
    curso: "1-primaria",
    titulo: o.titulo,
    minutos: o.minutos || 50,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    lectura: { titulo: o.lectura[0], html: o.lectura[1] },
    bloques: o.bloques.map(bloque),
    figura: { titulo: o.figura[0], svg: o.figura[1] },
    video: o.video,
    ejemplosTitulo: ca ? "Ho fem junts" : "Lo hacemos juntos",
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: [...o.basico.map(niv("básico")), ...o.medio.map(niv("medio")), ...o.avanzado.map(niv("avanzado"))],
    quiz: o.quiz.map(preg),
    examen: o.examen.map(preg),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--pri)", o.mapa[1], o.mapa[2] || 220),
    tarjetas: o.tarjetas,
    glosario: o.glosario,
    situacion: { titulo: o.situacion[0], reto: o.situacion[1], pasos: o.situacion[2], producto: o.situacion[3], evaluacion: o.situacion[4] },
    familias: o.familias,
    profesores: {
      saberes: `${o.saberes} (RD 157/2022${ca ? " i Decret 175/2022 de Catalunya, primer cicle" : ", primer ciclo"}).`,
      ideas: o.ideas,
    },
    fuentes: ca ? [...FUENTES, { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (DOGC)", url: "https://dogc.gencat.cat/ca/document-del-dogc/?documentId=935783" }] : FUENTES,
    revisado: REVISADO,
  };
}

module.exports = { ...P, C, tema, lienzo, texto, manchas, mezcla, tit, pie };
