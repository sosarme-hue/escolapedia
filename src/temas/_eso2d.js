// Utilidades del lote D de 2º de ESO (Geografía e Historia, Inglés, Cultura Clásica y Religión).
// Reutiliza los dibujos de _hum.js y _lenguas.js (sin modificarlos) y añade un constructor de temas
// con formas cortas. El fichero empieza por «_», así que build.js no lo trata como tema.
const { F, D, mapa } = require("./_util");
const H = require("./_hum");
const L = require("./_lenguas");

const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };

// La respuesta correcta se escribe siempre la primera; aquí se reparte en posiciones variadas (patrón fijo).
const PATRON = [1, 2, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1];
const preg = (lista, desfase = 0) => lista.map(([q, o, e], i) => {
  const dest = PATRON[(i + desfase) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Vídeo: [id, título, canal, vistas, búsqueda?]
const vid = (v) => (v ? { id: v[0], titulo: v[1], canal: v[2], vistas: v[3], megusta: 0, ...(v[4] ? { busqueda: v[4] } : {}) } : undefined);

// Bloque: [título, cuerpo html, svg?, vídeo?]
// Si en el sitio del dibujo va una tabla, se pone dentro del texto (a todo el ancho), como en 3º y 4º.
const bloque = ([t, html, svg, v]) => {
  const esTabla = svg && !svg.trim().startsWith("<svg");
  return { html: `<h3>${t}</h3>${html}${esTabla ? svg : ""}`, ...(svg && !esTabla ? { svg } : {}), ...(v ? { video: vid(v) } : {}) };
};

// Constructor de tema con formas cortas.
function tema(o) {
  return {
    materia: o.materia,
    curso: "2-eso",
    titulo: o.titulo,
    minutos: o.minutos || 55,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    bloques: o.bloques.map(bloque),
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    ...(o.ejemplosTitulo ? { ejemplosTitulo: o.ejemplosTitulo } : {}),
    errores: o.errores,
    ejercicios: o.ejercicios.map(([q, sol]) => ({ q, sol })),
    figura: { titulo: o.figura[0], svg: o.figura[1] },
    video: vid(o.video),
    quiz: preg(o.quiz),
    examen: preg(o.examen || [], 3),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], o.mapa[1], o.mapa[2], o.mapa[3] || 240),
    tarjetas: o.tarjetas,
    familias: [...o.familias, "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
    profesores: { saberes: o.saberes, ideas: o.ideas },
    fuentes: [RD, ...(o.fuentes || []).map(([t, url]) => ({ t, url }))],
    revisado: "2026-11-12",
  };
}

module.exports = { F, D, mapa, H, L, RD, tema, preg, vid, tabla: H.tabla };
