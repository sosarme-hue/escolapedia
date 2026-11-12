// Utilidades del lote B de 2º de ESO: Lengua Castellana, Lengua Catalana, Francés y Oratoria y debate.
// Cada tema se escribe ya ampliado (README, «Tema ampliado»). Dibujos propios en SVG con las ayudas de _lenguas.
const { mapa } = require("./_util");
const L = require("./_lenguas");

// Fuentes fijas de cada materia; cada tema puede añadir las suyas.
const FUENTES = {
  "Lengua Castellana y Literatura": [
    { t: "Real Academia Española, Diccionario de la lengua española", url: "https://dle.rae.es/" },
    { t: "RAE y ASALE, Ortografía y Gramática de la lengua española", url: "https://www.rae.es/" },
  ],
  "Lengua Catalana y Literatura": [
    { t: "Institut d'Estudis Catalans: Gramàtica de la llengua catalana", url: "https://giec.iec.cat/" },
    { t: "Optimot, consultes lingüístiques (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  ],
  "Francés": [
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" },
  ],
  "Oratoria y debate": [
    { t: "Fundación Activa-t: liga y recursos de debate escolar", url: "https://www.fundacionactivat.org/" },
    { t: "Oratoria, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Oratoria" },
  ],
};
const CURRICULO = {
  "Lengua Castellana y Literatura": "Lengua Castellana y Literatura, 2º ESO",
  "Lengua Catalana y Literatura": "Llengua Catalana i Literatura, 2n ESO; currículums de Catalunya, Illes Balears i Comunitat Valenciana",
  "Francés": "Segunda Lengua Extranjera: Francés, 2º ESO",
  "Oratoria y debate": "optativa Oratoria y debate, 2º ESO, según la oferta de cada comunidad",
};

// La respuesta correcta se escribe siempre la primera y aquí se reparte en posiciones variadas (patrón fijo).
const PATRON = [1, 2, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1];
const preguntas = (qs, desde = 0) => qs.map(([q, o, e], i) => {
  const dest = PATRON[(i + desde) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Vídeo de YouTube elegido con tools/videos.py (nunca ids inventados).
const V = (id, titulo, canal, vistas, megusta = 0, busqueda) => ({ id, titulo, canal, vistas, megusta, ...(busqueda ? { busqueda } : {}) });

// Bloque: [título, html del cuerpo, svg?, vídeo?].
// Si el tercer elemento es un vídeo (objeto) y no un SVG (texto), se toma como vídeo.
const bloque = ([h, cuerpo, svg, video]) => (typeof svg === "object" && svg ? ([svg, video] = [video, svg]) : 0, { html: `<h3>${h}</h3>${cuerpo}`, ...(svg ? { svg } : {}), ...(video ? { video } : {}) });

function tema(o) {
  return {
    materia: o.materia,
    curso: "2-eso",
    titulo: o.titulo,
    minutos: o.minutos || 60,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    bloques: o.bloques.map(bloque),
    figura: { titulo: o.figura[0], svg: o.figura[1] },
    video: o.video,
    ejemplosTitulo: o.ejemplosTitulo,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: o.ejercicios.map(([q, sol]) => ({ q, sol })),
    quiz: preguntas(o.quiz),
    examen: preguntas(o.examen, 4),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--eso)", o.mapa[1]),
    tarjetas: o.tarjetas,
    familias: o.familias,
    profesores: { saberes: `${o.saberes} (RD 217/2022, ${CURRICULO[o.materia]}).`, ideas: o.ideas },
    fuentes: [L.BOE, ...(o.fuentes || []), ...FUENTES[o.materia]],
    revisado: "2026-11-12",
  };
}

// Colores de las figuras.
const AZ = "var(--pen)", RO = "var(--red)", VE = "var(--leaf)", NA = "var(--inf)", AG = "var(--water)", SO = "var(--sun)", MO = "var(--bac)";

// Con cuatro turnos o más, los bocadillos son bajos y el nombre pisa el texto: el nombre pasa delante del texto.
const dialogo = (label, turnos) => L.dialogo(label, turnos.length >= 4 ? turnos.map(([q, t, c]) => ["", q ? `${q}: ${t}` : t, c]) : turnos);

module.exports = { ...L, dialogo, tema, V, AZ, RO, VE, NA, AG, SO, MO };
