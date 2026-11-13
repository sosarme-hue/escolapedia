// Infantil 3 años · Comunicación y representación: Canciones y rimas. Para leer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, mural, vid } = require("./_peque");
const { R, A, V, N, escena, suenan, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "3-anos",
  titulo: "Canciones y rimas",
  minutos: 10,
  objetivos: ["Cantar canciones cortas con gestos", "Oír palabras que suenan igual al final", "Aprender una rima de memoria"],
  claves: ["canción", "rima", "palmas", "gestos", "suena igual"],
  pregunta: {
    texto: "¿Qué canción sabes cantar?",
    respuesta: "¡Seguro que sabes muchas! Las canciones tienen <mark>música</mark> y palabras que <mark>riman</mark>.",
  },
  bloques: [
    {
      html: `<h3>Cantamos juntos</h3><p>Cantar es <mark>hablar con música</mark>.</p><p>Cantamos en casa, en el cole y en el coche. Cantamos solos o con amigos. ¡Cantar nos pone contentos!</p><p>¿Cuál es tu canción favorita? ¡Cántala ahora!</p>`,
      svg: escena("Dos niños cantan con notas musicales", [["nino", 80, 96, 2], ["nina", 180, 96, 2], ["t", 130, 50, "♪ ♫ ♪", N, 34], ["t", 130, 160, "¡A cantar!", R, 22]]),
    },
    {
      html: `<h3>Palabras que riman</h3><p>Algunas palabras <mark>terminan igual</mark>.</p><p><b>Gato</b> y <b>pato</b>. <b>Sol</b> y <b>col</b>. Cuando suenan igual al final, decimos que riman. ¡Escucha bien!</p><p>Busca otra palabra que rime con «gato»: ¿zapato? ¿rato?</p>`,
      svg: escena("Palabras que riman: gato y pato terminan en ato", [["gato", 64, 80, 1.8], ["pato", 196, 80, 1.8], ["t", 64, 146, "g<tspan fill=\"var(--red)\">ato</tspan>", A, 30], ["t", 196, 146, "p<tspan fill=\"var(--red)\">ato</tspan>", A, 30], ["t", 130, 90, "=", "var(--muted)", 30]], { titulo: "¡Riman!" }),
    },
    {
      html: `<h3>Canciones con gestos</h3><p>Muchas canciones se cantan <mark>con las manos</mark>.</p><p>Hacemos palmas. Movemos los dedos como una araña. Saludamos con la mano. ¡El cuerpo también canta!</p><p>Prueba a cantar una canción solo con las manos, sin voz.</p>`,
      svg: dibujos("Gestos al cantar: palmas, dedos y saludar", [["mano", "palmas", R], ["mano", "dedos", A], ["mano", "¡hola!", V]], { titulo: "Cantamos con gestos" }),
    },
    {
      html: `<h3>Debajo de un botón</h3><p>Esta canción tiene una <mark>rima</mark> muy divertida.</p><p>«Debajo de un botón, ton, ton, que encontró Martín, tin, tin, había un ratón, ton, ton…». ¡Repite el final!</p><p>Cántala despacio y después más deprisa. ¡Es muy divertida!</p>`,
      svg: escena("Un ratón debajo de un botón: ton, ton, ton", [["svg", `<circle cx="130" cy="66" r="30" fill="var(--sun)" stroke="var(--ink)" stroke-width="3"/><circle cx="120" cy="58" r="4" fill="var(--ink)"/><circle cx="140" cy="58" r="4" fill="var(--ink)"/><circle cx="120" cy="74" r="4" fill="var(--ink)"/><circle cx="140" cy="74" r="4" fill="var(--ink)"/>`], ["raton", 130, 126, 1.1], ["t", 54, 74, "ton", R, 22], ["t", 206, 74, "ton", R, 22], ["t", 130, 168, "botón · ratón", A, 18]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Las canciones nos ayudan a <mark>aprender palabras</mark>.</p><p>Con ellas recordamos los días, los colores y los números. Nos calman para dormir. ¡Y nos hacen bailar!</p><p>Los mayores también cantan: pregunta a tus abuelos qué canciones sabían.</p>`,
      svg: dibujos("Las canciones sirven para aprender, dormir y bailar", [["libro", "aprender", A], ["cuna", "dormir", N], ["feliz", "bailar", R]]),
    },
    {
      html: `<h3>Jugamos con palmas</h3><p>Decimos una palabra y damos <mark>palmas</mark>.</p><p>«Ga-to»: dos palmas. «Pe-lo-ta»: tres palmas. ¿Cuántas palmas tiene tu nombre? ¡Prueba!</p><p>Ahora tu nombre: ¿cuántas palmas tiene? Cuéntalas con los dedos.</p>`,
      svg: suenan("Palmas: ga-to dos palmas, pe-lo-ta tres palmas", [["gato", "ga-to", R], ["pelota", "pe-lo-ta", A]], { titulo: "¿Cuántas palmas?" }),
    },
  ],
  figura: {
    titulo: "Canciones y rimas",
    svg: mural("Canciones y rimas: cantar, rimar gato y pato, gestos y palmas", [["feliz", "cantar", "con música", R], ["gato", "rimar", "gato, pato", A], ["mano", "gestos", "con las manos", V], ["campana", "palmas", "ga-to", N]], "Canciones y rimas"),
  },
  video: { ...vid("cCdcaUwy65w", "Debajo de un Botón (Canción infantil)", "toycantando", 74926688), busqueda: "rimas infantiles canciones para niños pequeños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué rima con «gato»?",
      pasos: ["Decimos gato despacio.", "Escuchamos el final: -ato.", "Buscamos otra palabra igual."],
      resultado: "Pato, zapato, rato." },
    { enunciado: "Damos palmas con «sol».",
      pasos: ["Decimos sol.", "Damos una palma."],
      resultado: "Sol tiene una palma." },
  ],
  errores: [
    "Cantar gritando: se canta con voz bonita.",
    "Pensar que gato y perro riman: no terminan igual.",
    "Ir muy deprisa: cantamos despacio para entender.",
  ],
  ejercicios: [
    { q: "Canta tu canción favorita.", sol: "Para la familia: cantad con él y repetid las partes que más le gusten." },
    { q: "Haz los gestos de una canción.", sol: "Por ejemplo, palmas o «Cinco lobitos» con la mano." },
    { q: "Di una palabra que rime con «sol».", sol: "Col, gol, caracol." },
    { q: "Da palmas con tu nombre.", sol: "Una palma por cada trozo: Lu-cí-a, tres palmas." },
    { q: "Aprende «Debajo de un botón».", sol: "Repetid el final de cada verso: ton, ton; tin, tin." },
    { q: "Baila una canción con la familia.", sol: "Moverse con la música también es aprender." },
  ],
  quiz: [
    { q: "Cantar es hablar con…", o: ["música", "agua", "zapatos"], a: 0, e: "Cantar es hablar con música." },
    { q: "¿Qué rima con «gato»?", o: ["pato", "perro", "casa"], a: 0, e: "Gato y pato terminan igual." },
    { q: "Al cantar podemos hacer…", o: ["gestos", "dormir", "comer"], a: 0, e: "Gestos con las manos." },
    { q: "«Ga-to» tiene…", o: ["dos palmas", "cinco palmas", "ninguna"], a: 0, e: "Ga-to: dos palmas." },
    { q: "¿Qué rima con «botón»?", o: ["ratón", "mesa", "sol"], a: 0, e: "Botón y ratón." },
    { q: "Las canciones nos ayudan a…", o: ["aprender", "llorar", "pelear"], a: 0, e: "Aprendemos palabras cantando." },
  ],
  examen: [
    { q: "¿Qué rima con «sol»?", o: ["col", "mesa", "pato"], a: 0, e: "Sol y col." },
    { q: "Cantamos con voz…", o: ["bonita", "gritona", "enfadada"], a: 0, e: "Voz bonita, sin gritar." },
    { q: "«Pe-lo-ta» tiene…", o: ["tres palmas", "una palma", "seis palmas"], a: 0, e: "Pe-lo-ta: tres." },
  ],
  feynman: ["Cantar es hablar con música", "Las palabras que terminan igual riman", "Damos una palma por cada trozo"],
  mapa: mapa("CANCIONES", "var(--inf)", [
    ["Cantar", "con música", R],
    ["Rimar", "gato y pato", A],
    ["Gestos", "con las manos", V],
    ["Palmas", "ga-to", N],
  ], 230),
  tarjetas: [
    ["¿Qué rima con gato?", "Pato"],
    ["¿Qué rima con sol?", "Col"],
    ["¿Qué rima con botón?", "Ratón"],
    ["Cantar es…", "Hablar con música"],
    ["Ga-to: ¿cuántas palmas?", "Dos"],
    ["Cantamos con voz…", "Bonita"],
  ],
  familias: [
    "Cantad canciones de vuestra infancia: las aprenden enseguida.",
    "Jugad a buscar rimas en el coche: gato, pato, zapato…",
    "Dad palmas con los nombres de la familia.",
    "Poned una canción tranquila antes de dormir.",
  ],
  profesores: PROF("Lenguaje oral y musical: canciones, retahílas y rimas; conciencia fonológica inicial; acompañamiento con gestos", ["Canción de bienvenida en la asamblea.", "Palmear las sílabas de los nombres de la clase.", "Completar la rima que falta."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
