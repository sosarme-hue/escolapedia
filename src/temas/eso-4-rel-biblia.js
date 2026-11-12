// Religión 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { dos, filas, flujo, barras, figCols } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "4-eso",
  titulo: "La Biblia",
  minutos: 35,
  objetivos: ["Describir la estructura de la Biblia y sus géneros literarios", "Explicar cómo se formó y en qué lenguas se escribió", "Localizar citas bíblicas y valorar su influencia cultural"],
  claves: ["Antiguo Testamento", "Nuevo Testamento", "canon", "inspiración", "género literario", "cita bíblica"],
  pregunta: {
    texto: "Es el libro más traducido y vendido de la historia: está en más de 700 idiomas completos. Pero no es un solo libro, sino una biblioteca escrita durante más de mil años. ¿Qué es la Biblia?",
    respuesta: "La palabra <mark>Biblia</mark> viene del griego <i>ta biblia</i>, «los libros». Es un conjunto de <b>73 libros</b> (en la tradición católica) escritos por muchos autores durante más de mil años. Para judíos y cristianos es <b>Palabra de Dios</b> expresada en palabras humanas.",
  },
  bloques: [
    {
      html: `<h3>Dos grandes partes</h3><p>La Biblia cristiana tiene dos partes. El <mark>Antiguo Testamento</mark> (46 libros) narra la historia de Israel y su alianza con Dios, antes de Jesús: Pentateuco, libros históricos, sapienciales y proféticos. El <mark>Nuevo Testamento</mark> (27 libros) trata de Jesús y de las primeras comunidades cristianas: los cuatro Evangelios, los Hechos de los Apóstoles, las Cartas y el Apocalipsis.</p>`,
      svg: barras("Número de libros de cada parte de la Biblia católica", [["Antiguo T.", 46, "var(--sun)", "46 libros"], ["Nuevo T.", 27, "var(--bac)", "27 libros"]], 60),
    },
    {
      html: `<h3>Cómo se formó</h3><p>Primero hubo una larga <b>tradición oral</b>: relatos que se contaban de generación en generación. Después se pusieron <b>por escrito</b> en hebreo (casi todo el Antiguo Testamento), algunas partes en arameo, y en griego (el Nuevo Testamento). Las comunidades reconocieron qué libros eran inspirados: es el <mark>canon</mark>. Hacia el año 400, san Jerónimo la tradujo al latín (la <b>Vulgata</b>).</p>`,
      svg: flujo("Formación de la Biblia", ["tradición|oral", "textos|escritos", "canon", "traducción"], "var(--bac)"),
    },
    {
      html: `<h3>Géneros literarios</h3><p>Como en una biblioteca, en la Biblia hay muchos <mark>géneros literarios</mark>: relatos históricos, leyes, poesía (los Salmos), proverbios, profecías, cartas, parábolas, relatos simbólicos (la creación del Génesis) o literatura apocalíptica. Para entender un texto hay que saber qué tipo de texto es: el Génesis no es un libro de ciencia, sino un relato que transmite que el mundo es bueno y viene de Dios.</p>`,
      svg: filas("Géneros literarios con ejemplos", [["Narración", "Éxodo, Hechos", "var(--pen)"], ["Poesía", "Salmos, Cantar", "var(--bac)"], ["Sabiduría", "Proverbios, Job", "var(--sun)"], ["Profecía", "Isaías, Jeremías", "var(--red)"], ["Cartas", "de san Pablo", "var(--leaf)"]]),
    },
    {
      html: `<h3>Cómo se cita la Biblia</h3><p>Cada libro se divide en <b>capítulos</b> y estos en <b>versículos</b>. Una <mark>cita bíblica</mark> indica el libro abreviado, el capítulo y el versículo: <b>Jn 3,16</b> significa Evangelio de Juan, capítulo 3, versículo 16. Un guion indica un intervalo (Mt 5,1-12, las bienaventuranzas). La Biblia ha inspirado durante siglos el arte, la literatura, la música y expresiones como «ser un buen samaritano».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cita bíblica Juan 3,16 separada en libro, capítulo y versículo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[24, 70, "Jn", "libro", "var(--bac)"], [104, 50, "3", "capítulo", "var(--pen)"], [164, 70, ",16", "versículo", "var(--red)"]].map(([x, w, t, l, c]) => `<rect x="${x}" y="46" width="${w}" height="56" rx="10" fill="var(--card)" stroke="${c}" stroke-width="3"/><text x="${x + w / 2}" y="84" text-anchor="middle" font-size="28" font-weight="700" fill="${c}" ${D}>${t}</text><text x="${x + w / 2}" y="124" text-anchor="middle" font-size="11.5" font-weight="700" fill="${c}" ${F}>${l}</text>`).join("")}
        <text x="130" y="158" text-anchor="middle" font-size="12" fill="var(--ink)" ${F}>Evangelio de Juan, cap. 3, vers. 16</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "La biblioteca de la Biblia",
    svg: figCols("Grupos de libros del Antiguo y del Nuevo Testamento", [
      ["Pentateuco", ["Génesis", "Éxodo", "Levítico", "Números", "Deuteronomio"], "var(--sun)"],
      ["Resto del AT", ["históricos", "(Samuel, Reyes)", "sapienciales", "(Salmos)", "proféticos"], "var(--inf)"],
      ["Evangelios", ["Mateo", "Marcos", "Lucas", "Juan", "+ Hechos"], "var(--bac)"],
      ["Resto del NT", ["cartas de Pablo", "otras cartas", "(Pedro, Santiago)", "Apocalipsis", ""], "var(--pen)"],
    ]),
  },
  video: { id: "uMOc-YI0iaM", titulo: "¿Qué es la Biblia? ¿Cómo se formó? ¿Cuál es su propósito?", canal: "Proyecto Biblia", vistas: 2138070, megusta: 0, busqueda: "Proyecto Biblia qué es la Biblia" },
  quiz: [
    { q: "¿Qué significa la palabra «Biblia»?", o: ["Palabra santa", "Los libros", "La ley"], a: 1, e: "Viene del griego «ta biblia», «los libros»." },
    { q: "¿Cuántos libros tiene la Biblia católica?", o: ["66", "73", "100"], a: 1, e: "46 del Antiguo Testamento y 27 del Nuevo." },
    { q: "¿En qué lengua se escribió el Nuevo Testamento?", o: ["Hebreo", "Latín", "Griego"], a: 2, e: "En griego común (koiné), la lengua más extendida del Mediterráneo oriental." },
    { q: "¿Qué es el canon bíblico?", o: ["La lista de libros reconocidos como inspirados", "Un tipo de oración", "Una traducción"], a: 0, e: "Las comunidades reconocieron qué libros formaban parte de la Biblia." },
    { q: "La cita Mt 5,3 significa…", o: ["Mateo, capítulo 5, versículo 3", "Marcos, capítulo 3, versículo 5", "Mateo, página 53"], a: 0, e: "Libro abreviado, capítulo y versículo." },
  ],
  examen: [
    { q: "¿Quién tradujo la Biblia al latín (la Vulgata)?", o: ["San Pablo", "San Jerónimo", "Lutero"], a: 1, e: "Hacia el año 400; fue la Biblia de Occidente durante siglos." },
    { q: "El relato de la creación del Génesis es…", o: ["un informe científico", "un relato simbólico con un mensaje religioso", "una carta"], a: 1, e: "Transmite que el mundo es bueno y procede de Dios, no cómo se formó físicamente." },
    { q: "Los cinco primeros libros se llaman…", o: ["Evangelios", "Pentateuco", "Salmos"], a: 1, e: "Génesis, Éxodo, Levítico, Números y Deuteronomio." },
  ],
  feynman: ["Partes de la Biblia y número de libros", "Cómo pasó de la tradición oral al texto escrito y traducido", "Por qué es importante conocer el género literario", "Cómo se lee una cita bíblica"],
  mapa: mapa("LA BIBLIA", "var(--bac)", [
    ["Partes", "AT (46) · NT (27)", "var(--sun)"],
    ["Formación", "oral · escrita · canon", "var(--pen)"],
    ["Géneros", "narración · poesía · cartas", "var(--leaf)"],
    ["Citas", "libro capítulo,versículo", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Libros de la Biblia católica", "73: 46 del Antiguo Testamento y 27 del Nuevo."],
    ["Lenguas originales", "Hebreo, arameo y griego."],
    ["Canon", "Lista de libros reconocidos como inspirados."],
    ["Vulgata", "Traducción latina de san Jerónimo (hacia el año 400)."],
    ["Jn 3,16", "Evangelio de Juan, capítulo 3, versículo 16."],
  ],
  familias: ["Buscad juntos expresiones de origen bíblico (buen samaritano, hijo pródigo, lavarse las manos).", "Visitad un museo o iglesia y buscad escenas bíblicas en cuadros o vidrieras.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La Biblia: estructura, formación, géneros literarios, interpretación e influencia cultural (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Gincana de citas bíblicas por equipos.", "Comparar un salmo con un poema actual.", "Rastrear la influencia bíblica en obras del Museo del Prado."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Biblia, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Biblia" },
  ],
  revisado: "2026-11-12",
};
