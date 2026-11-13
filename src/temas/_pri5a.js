// Utilidades del lote A de 5º de Primaria: Matemáticas, Valores Cívicos y Éticos y Francés.
// Cada tema se escribe ya ampliado (README, «Tema ampliado»), con lenguaje para niños de 10 y 11 años.
// Dibujos propios en SVG: reutiliza las ayudas de 1º de ESO (dibujo matemático) y las de lenguas (fichas).
const { mapa } = require("./_util");
const E = require("./_eso1c");
const L = require("./_lenguas");
const VID = require("./_pri5a-videos");

const C = "5-primaria";
const REV = "2026-11-12";
const BOE = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };

// Fuentes fijas y área del currículo de cada materia.
const FUENTES = {
  "Matemáticas": [{ t: "Proyecto Descartes (INTEF): recursos de Matemáticas para Primaria", url: "https://proyectodescartes.org/" }],
  "Valores Cívicos y Éticos": [{ t: "UNICEF: Convención sobre los Derechos del Niño (versión para niños)", url: "https://www.unicef.es/causas/derechos-ninos/convencion-derechos-nino" }],
  "Francés": [{ t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" }],
};
const AREA = {
  "Matemáticas": "Matemáticas, tercer ciclo",
  "Valores Cívicos y Éticos": "Educación en Valores Cívicos y Éticos, tercer ciclo",
  "Francés": "Segunda Lengua Extranjera: Francés, tercer ciclo",
};

// Vídeo por clave de _pri5a-videos.js: V("numB") para un bloque; V("numV", true) para el vídeo general.
const V = (k, general) => {
  const v = VID[k]; if (!v) throw new Error(`_pri5a: falta el vídeo ${k}`);
  return { id: v[0], titulo: v[1], canal: v[2], vistas: v[3], megusta: 0, ...(general ? { busqueda: v[4] } : {}) };
};

// La respuesta correcta se escribe siempre la primera y aquí se reparte en posiciones variadas (patrón fijo).
const PATRON = [1, 2, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1];
const preguntas = (qs, desde = 0) => qs.map(([q, o, e], i) => {
  const dest = PATRON[(i + desde) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Bloque: [título, html, svg?, vídeo?]. Si el tercer elemento es un vídeo (objeto), se toma como vídeo.
const bloque = ([h, cuerpo, svg, video]) => (typeof svg === "object" && svg ? ([svg, video] = [video, svg]) : 0, { html: `<h3>${h}</h3>${cuerpo}`, ...(svg ? { svg } : {}), ...(video ? { video } : {}) });

function tema(o) {
  const n = { b: o.bloques.length, q: o.quiz.length, t: o.tarjetas.length, x: o.ejercicios.length, e: o.ejemplos.length };
  if (n.b < 8 || n.b > 11 || n.q !== 10 || n.t !== 8 || n.x !== 10 || n.e !== 3) console.warn(`[pri5a] ${o.titulo}: ${JSON.stringify(n)}`);
  return {
    materia: o.materia,
    curso: C,
    titulo: o.titulo,
    minutos: o.minutos || 45,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    bloques: o.bloques.map(bloque),
    figura: { titulo: o.figura[0], svg: o.figura[1] },
    video: o.video,
    ejemplosTitulo: o.ejemplosTitulo || "Ejemplos resueltos",
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: o.ejercicios.map(([q, sol]) => ({ q, sol })),
    quiz: preguntas(o.quiz),
    examen: preguntas(o.examen, 4),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--pri)", o.mapa[1]),
    tarjetas: o.tarjetas,
    familias: o.familias,
    profesores: { saberes: `${o.saberes} (RD 157/2022, ${AREA[o.materia]}).`, ideas: o.ideas },
    fuentes: [BOE, ...(o.fuentes || []), ...FUENTES[o.materia]],
    revisado: REV,
  };
}

// Colores de las figuras.
const AZ = "var(--pen)", RO = "var(--red)", VE = "var(--leaf)", NA = "var(--inf)", AG = "var(--water)", SO = "var(--sun)", MO = "var(--bac)";

// Con cuatro turnos o más, el nombre pasa delante del texto para que no se pisen.
const dialogo = (label, turnos) => L.dialogo(label, turnos.length >= 4 ? turnos.map(([q, t, c]) => ["", q ? `${q}: ${t}` : t, c]) : turnos);

// Barra de fracción: n partes iguales con k coloreadas, en (x, y) con ancho w y alto h.
const barra = (x, y, w, h, n, k, c = AZ) => [...Array(n)].map((_, i) => `<rect x="${(x + (w / n) * i).toFixed(1)}" y="${y}" width="${(w / n).toFixed(1)}" height="${h}" fill="${i < k ? c : "var(--card)"}" fill-opacity="${i < k ? 0.55 : 1}" stroke="var(--ink)" stroke-width="1.6"/>`).join("");

// Flecha recta de (x1, y1) a (x2, y2) con punta.
const flecha = (x1, y1, x2, y2, c = "var(--muted)", w = 2.5) => {
  const a = Math.atan2(y2 - y1, x2 - x1), p = (d, g) => `${(x2 - d * Math.cos(a + g)).toFixed(1)} ${(y2 - d * Math.sin(a + g)).toFixed(1)}`;
  return `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="${c}" stroke-width="${w}" fill="none"/><path d="M${p(9, 0.45)} L ${x2} ${y2} L ${p(9, -0.45)}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
};

module.exports = {
  // dibujo matemático (de 1º de ESO)
  svg: E.svg, t: E.t, caja: E.caja, tb: E.tabla, filasG: E.filas, ejes: E.ejes, recta: E.recta, chips: E.chips, persona: E.persona,
  rejilla: E.rejilla, arco: E.arco, poligono: E.poligono, barras: E.barras,
  // fichas de lenguas
  marco: L.marco, filas: L.filas, frase: L.frase, linea: L.linea, tabla: L.tabla, columnas: L.columnas, eje: L.eje, pasos: L.pasos, fz: L.fz,
  dialogo, tema, V, C, REV, barra, flecha, AZ, RO, VE, NA, AG, SO, MO,
};
