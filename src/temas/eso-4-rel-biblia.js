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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Conocer los grupos de libros del Antiguo y del Nuevo Testamento", "Interpretar un texto bíblico teniendo en cuenta su contexto y género"],
  bloques: [
    { tras: "Dos grandes partes", html: `<h3>Los libros del Antiguo Testamento</h3>${tabla(["Grupo", "Libros", "Contenido"], [["Pentateuco (Torá)", "Génesis, Éxodo, Levítico, Números, Deuteronomio", "creación, patriarcas, salida de Egipto y la Ley"], ["Históricos", "Josué, Jueces, Samuel, Reyes…", "historia del pueblo de Israel"], ["Sapienciales y poéticos", "Job, Salmos, Proverbios, Eclesiastés, Cantar de los Cantares…", "sabiduría, oración y poesía"], ["Proféticos", "Isaías, Jeremías, Ezequiel, Daniel y doce menores", "mensajes de Dios por medio de los profetas"]])}<p>La Biblia católica tiene <b>46 libros</b> en el Antiguo Testamento y <b>27</b> en el Nuevo: <mark>73 en total</mark>. Las Biblias protestantes tienen 66, porque no incluyen siete libros del AT (Tobías, Judit, Sabiduría…).</p>`, video: { id: "VL8YhTkuiv0", titulo: "Resumen del Antiguo Testamento: un panorama completo animado", canal: "Proyecto Biblia", vistas: 1475803, megusta: 0 } },
    { tras: "Dos grandes partes", html: `<h3>Los libros del Nuevo Testamento</h3><p>El Nuevo Testamento se escribió en <b>griego</b> en la segunda mitad del siglo I. Contiene los cuatro <mark>Evangelios</mark> (Mateo, Marcos, Lucas y Juan), que cuentan la vida y el mensaje de Jesús; los <b>Hechos de los Apóstoles</b>, sobre las primeras comunidades; las <b>Cartas</b> (13 atribuidas a Pablo y otras de Santiago, Pedro, Juan y Judas), escritas a comunidades concretas; y el <b>Apocalipsis</b>, un libro simbólico de esperanza para cristianos perseguidos. Las cartas de Pablo son los escritos más antiguos del Nuevo Testamento (hacia el año 50).</p>` },
    { tras: "Cómo se formó", html: `<h3>Lenguas, manuscritos y traducciones</h3><p>El Antiguo Testamento se escribió casi todo en <b>hebreo</b>, con algunas partes en arameo y otras en griego. Hacia el siglo III a. C. se tradujo al griego en Alejandría: la <b>Septuaginta</b>. San <b>Jerónimo</b> lo tradujo todo al latín hacia el año 400: la <mark>Vulgata</mark>. En 1947 se encontraron en Qumrán, junto al mar Muerto, los <b>manuscritos del mar Muerto</b>, con copias de libros bíblicos de hace más de 2.000 años. Hoy la Biblia está traducida, completa o en parte, a más de 3.500 lenguas, y es el libro más traducido de la historia.</p>` },
    { tras: "Géneros literarios", html: `<h3>Cómo leer un texto bíblico</h3><p>Para entender un pasaje hay que preguntarse: <b>¿qué género es?</b> (relato, poema, ley, parábola, carta), <b>¿cuándo y para quién se escribió?</b> y <b>¿qué quiso decir su autor?</b> No se lee igual un salmo que una carta. Por ejemplo, los relatos de la <b>creación</b> del Génesis no son un libro de ciencia: con un lenguaje simbólico enseñan que el mundo es bueno, que viene de Dios y que el ser humano tiene una dignidad especial. Para los creyentes, la Biblia es <mark>Palabra de Dios en palabras humanas</mark>: inspirada por Dios y escrita por personas con su cultura y su estilo.</p>` },
  ],
  ejemplos: [
    { enunciado: "Busca e interpreta la cita Mt 5, 9.", pasos: ["Mt = Evangelio de Mateo.", "5 = capítulo 5; 9 = versículo 9.", "Dice: «Bienaventurados los que trabajan por la paz, porque ellos serán llamados hijos de Dios».", "Pertenece a las Bienaventuranzas del Sermón del Monte."], resultado: "Jesús declara dichosos a quienes construyen la paz." },
    { enunciado: "Clasifica estos libros: Génesis, Salmos, Isaías, Hechos, Romanos.", pasos: ["Génesis: Pentateuco (AT).", "Salmos: sapienciales y poéticos (AT).", "Isaías: proféticos (AT).", "Hechos: libro histórico del NT.", "Romanos: carta de Pablo (NT)."], resultado: "AT: Génesis, Salmos, Isaías. NT: Hechos y Romanos." },
    { enunciado: "Explica por qué el relato de los siete días de la creación no contradice la ciencia.", pasos: ["Su género es simbólico y poético, no científico.", "Su objetivo es religioso: todo procede de Dios y es bueno.", "La ciencia explica cómo se formó el universo; el texto, su sentido."], resultado: "Responden a preguntas distintas y no compiten." },
  ],
  errores: [
    "Pensar que la Biblia es un solo libro escrito de una vez: es una biblioteca escrita durante siglos.",
    "Leer todos los textos al pie de la letra, sin tener en cuenta el género literario.",
    "Creer que el Nuevo Testamento se escribió en latín: se escribió en griego.",
    "Confundir los Evangelios (vida de Jesús) con las Cartas (dirigidas a comunidades).",
    "Pensar que todas las Biblias cristianas tienen los mismos libros: la protestante tiene 66 y la católica 73.",
  ],
  ejercicios: [
    { q: "¿Qué libros forman el Pentateuco?", sol: "Génesis, Éxodo, Levítico, Números y Deuteronomio." },
    { q: "¿Cuántos libros tiene la Biblia católica?", sol: "73: 46 del Antiguo Testamento y 27 del Nuevo." },
    { q: "¿Qué son los libros sapienciales? Pon un ejemplo.", sol: "Libros de sabiduría, poesía y oración, como los Salmos o los Proverbios." },
    { q: "Cita las cuatro partes del Nuevo Testamento.", sol: "Evangelios, Hechos de los Apóstoles, Cartas y Apocalipsis." },
    { q: "¿Cuáles son los escritos más antiguos del Nuevo Testamento?", sol: "Las cartas de Pablo, de hacia el año 50." },
    { q: "¿Qué es la Vulgata?", sol: "La traducción de la Biblia al latín hecha por san Jerónimo hacia el año 400." },
    { q: "¿Qué se descubrió en Qumrán en 1947?", sol: "Los manuscritos del mar Muerto, copias muy antiguas de libros bíblicos." },
    { q: "¿Qué tres preguntas ayudan a interpretar un texto bíblico?", sol: "¿Qué género es?, ¿cuándo y para quién se escribió? y ¿qué quiso decir su autor?" },
    { q: "Explica «Palabra de Dios en palabras humanas».", sol: "Los creyentes piensan que Dios inspiró la Biblia, pero la escribieron personas con su lengua, su cultura y su estilo." },
    { q: "Busca la cita Jn 3, 16 y resume su idea.", sol: "«Tanto amó Dios al mundo que entregó a su Hijo único…»: el amor de Dios a la humanidad." },
  ],
  quiz: [
    { q: "La Torá corresponde al…", o: ["Pentateuco", "Apocalipsis", "Evangelio"], a: 0, e: "Los cinco primeros libros." },
    { q: "El Nuevo Testamento se escribió en…", o: ["griego", "latín", "hebreo"], a: 0, e: "En el siglo I." },
    { q: "Los Salmos son un libro…", o: ["poético", "profético", "histórico"], a: 0, e: "Oraciones y cantos." },
    { q: "La Vulgata es una traducción al…", o: ["latín", "griego", "castellano"], a: 0, e: "De san Jerónimo." },
    { q: "¿Cuántos libros tiene el Nuevo Testamento?", o: ["27", "46", "73"], a: 0, e: "En todas las Biblias cristianas." },
  ],
  tarjetas: [
    ["Pentateuco", "Los cinco primeros libros de la Biblia."],
    ["Vulgata", "Traducción latina de san Jerónimo."],
    ["Manuscritos del mar Muerto", "Copias bíblicas antiquísimas halladas en Qumrán en 1947."],
  ],
});
