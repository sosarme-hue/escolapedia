// Infantil 3 años · Crecimiento en armonía: Mi familia. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { dibujos, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

// Tres casas con familias distintas.
const casas = [[46, ["mama", "nina"]], [130, ["papa", "papa", "nino"]], [214, ["abuela", "nino"]]].map(([x, caras]) =>
  `${ic("casa", x, 62, 1.8)}${caras.map((c, i) => ic(c, x + (i - (caras.length - 1) / 2) * 32, 132, 0.8)).join("")}`).join("");


module.exports = {
  materia: "Crecimiento en armonía",
  curso: "3-anos",
  titulo: "Mi familia",
  minutos: 10,
  objetivos: ["Nombrar a las personas de mi familia", "Saber que hay familias de muchas formas", "Ayudar en casa con tareas sencillas"],
  claves: ["familia", "mamá", "papá", "hermanos", "abuelos", "casa"],
  pregunta: {
    texto: "¿Quién vive en tu casa contigo? ¡Dime sus nombres!",
    respuesta: "Las personas que viven contigo y te cuidan son tu <mark>familia</mark>. Cada familia es diferente y todas son especiales.",
  },
  bloques: [
    {
      html: `<h3>Mi familia</h3><p>Mi <mark>familia</mark> son las personas que viven conmigo y me cuidan.</p><p>Me quieren mucho y yo las quiero a ellas. Puede ser mamá, papá, mis hermanos, mis abuelos…</p><p>¡Cada familia es diferente, y todas son especiales!</p>`,
      svg: dibujos("Personas de una familia: mamá, papá, hermano y abuela", [["mama", "mamá", R], ["papa", "papá", A], ["nino", "hermano", V], ["abuela", "abuela", N]], { titulo: "Mi familia" }),
    },
    {
      html: `<h3>Familias de muchas formas</h3><p>Hay familias <mark>grandes y pequeñas</mark>. Algunas tienen una mamá; otras, un papá, dos mamás o dos papás.</p><p>Hay niños que viven con sus abuelos. Lo importante es quererse mucho y cuidarse.</p>`,
      svg: escena("Tres casas con familias distintas: una mamá con su hija, dos papás con su hijo, una abuela con su nieto", casas, "Todas son familias"),
    },
    {
      html: `<h3>Los abuelos</h3><p>Los <mark>abuelos</mark> son los papás de mis papás.</p><p>Me cuentan cuentos, me llevan al parque y me enseñan cosas de cuando eran pequeños.</p><p>¿Cómo se llaman tus abuelos? ¡Dales un abrazo!</p>`,
      svg: dibujos("El abuelo y la abuela me cuentan cuentos", [["abuelo", "abuelo", A], ["libro", "cuentos", V], ["abuela", "abuela", R]], { titulo: "Mis abuelos" }),
    },
    {
      html: `<h3>En casa ayudo</h3><p>En familia <mark>todos ayudamos</mark>.</p><p>Yo puedo recoger mis juguetes, poner las servilletas en la mesa o regar las plantas.</p><p>¡Soy mayor y me gusta ayudar! Luego jugamos todos juntos.</p>`,
      svg: dibujos("En casa ayudo: recojo los juguetes, pongo la mesa y riego las flores", [["juguete", "recojo", N], ["mesa", "pongo la mesa", A], ["flor", "riego", V]], { titulo: "Yo ayudo" }),
      video: vid("BoQNDroLeko", "Familia dedo, ¿dónde estás?", "El Payaso Plim Plim", 187270973),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Mi familia me <mark>cuida</mark> cuando estoy malito, me da de comer y me ayuda a crecer.</p><p>Con ella aprendo a hablar, a compartir y a querer. En casa me siento seguro y feliz.</p>`,
      svg: lista("Mi familia me cuida, me enseña y me hace sentir seguro", [["Me cuida", R], ["Me enseña", A], ["Me siento seguro", V]], { titulo: "Mi familia…" }),
    },
    {
      html: `<h3>Jugamos: la familia de los dedos</h3><p>Cada dedo de la mano es alguien de tu familia. Este es papá, este es mamá… ¿Y el más pequeño? ¡<mark>Eres tú</mark>!</p><p>Mueve cada dedo mientras cantas su nombre. ¡Hola, familia!</p>`,
      svg: dibujos("La familia de los dedos: papá, mamá, hermano, hermana y yo", [["papa", "papá", A], ["mama", "mamá", R], ["nino", "hermano", V], ["nina", "hermana", N], ["bebe", "¡yo!", R]], { titulo: "Cada dedo, uno de casa" }),
    },
  ],
  figura: {
    titulo: "Mi familia",
    svg: mural("Mi familia: me quiere, hay de muchas formas, los abuelos me cuentan cuentos y en casa ayudo", [["corazon", "me quiere", "y yo la quiero", R], ["casa", "muchas formas", "grandes y pequeñas", A], ["abuelo", "abuelos", "cuentos y parque", N], ["juguete", "ayudo", "recojo y pongo la mesa", V]], "Mi familia"),
  },
  video: { ...vid("L1RhdsL1I0M", "Mi familia: canción infantil", "El Reino Do Re Mi", 6064834), busqueda: "la familia canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Contamos quién vive en casa.",
      pasos: ["Decimos un nombre y levantamos un dedo.", "Seguimos hasta nombrar a todos, también a ti."],
      resultado: "¡ya sabemos cuántos somos!" },
    { enunciado: "¿Cómo ayudo después de jugar?",
      pasos: ["Miro los juguetes del suelo.", "Los meto en su caja, uno a uno."],
      resultado: "el cuarto queda recogido." },
  ],
  errores: [
    "Dar por hecho un solo modelo de familia: en clase y en los cuentos hay muchas.",
    "Hacerlo todo por él: a los 3 años puede ayudar en tareas pequeñas.",
    "Confundir parentescos: «el abuelo es el papá de papá o de mamá» se aprende con fotos.",
  ],
  ejercicios: [
    { q: "Mira fotos de la familia y di el nombre de cada uno.", sol: "Para la familia: añadid quién es: «la abuela Carmen, la mamá de papá»." },
    { q: "Dibuja a tu familia. ¿Cuántos sois?", sol: "Para la familia: no importa el dibujo; contad juntos las personas." },
    { q: "Recoge tus juguetes antes de cenar.", sol: "Para la familia: una canción de «a recoger» lo convierte en juego." },
    { q: "Pon las servilletas en la mesa: una para cada uno.", sol: "Para la familia: así cuenta y ayuda a la vez." },
    { q: "Canta la canción de la familia de los dedos.", sol: "Para la familia: cambiad los nombres por los de vuestra familia." },
    { q: "Llama o manda un audio a alguien de la familia que viva lejos.", sol: "Para la familia: ayuda a mantener el vínculo con abuelos y tíos." },
  ],
  quiz: [
    { q: "¿Quién me cuida en casa?", o: ["mi familia", "un desconocido", "nadie"], a: 0, e: "Mi familia." },
    { q: "Los papás de mis papás son…", o: ["mis abuelos", "mis hermanos", "mis amigos"], a: 0, e: "Mis abuelos." },
    { q: "¿Todas las familias son iguales?", o: ["sí", "no, cada una es diferente", "solo hay una"], a: 1, e: "Cada familia es diferente." },
    { q: "Después de jugar en casa yo…", o: ["recojo los juguetes", "me escondo", "los tiro"], a: 0, e: "Recojo." },
    { q: "¿Qué nos dan en la familia?", o: ["cariño", "miedo", "nada"], a: 0, e: "Cariño y cuidados." },
    { q: "¿Quién puede ayudar en casa?", o: ["todos", "solo mamá", "nadie"], a: 0, e: "Todos ayudamos." },
  ],
  examen: [
    { q: "Mi hermano es el hijo de…", o: ["mis papás", "mi vecino", "mi maestra"], a: 0, e: "De mis papás." },
    { q: "Puedo ayudar a…", o: ["poner la mesa", "conducir el coche", "cocinar solo"], a: 0, e: "Poner la mesa." },
    { q: "En familia nos…", o: ["queremos y cuidamos", "ignoramos", "peleamos siempre"], a: 0, e: "Nos queremos y cuidamos." },
  ],
  feynman: ["Quién es mi familia", "Que hay familias de muchas formas", "Cómo ayudo en casa"],
  mapa: mapa("MI FAMILIA", "var(--inf)", [
    ["Me quiere", "me cuida y me enseña", R],
    ["Muchas formas", "grandes y pequeñas", A],
    ["Abuelos", "los papás de mis papás", N],
    ["Ayudo", "recojo y pongo la mesa", V],
  ], 220),
  tarjetas: [
    ["¿Qué es mi familia?", "Las personas que viven conmigo y me cuidan"],
    ["¿Quiénes son mis abuelos?", "Los papás de mis papás"],
    ["¿Todas las familias son iguales?", "No, cada una es diferente"],
    ["¿Cómo ayudo en casa?", "Recojo mis juguetes"],
    ["¿Qué pongo en la mesa?", "Las servilletas"],
    ["¿Cómo me siento en casa?", "Seguro y feliz"],
  ],
  familias: [
    "Haced un álbum o un mural con fotos de la familia y sus nombres.",
    "Dadle un encargo fijo y pequeño: regar una planta, poner las servilletas.",
    "Contadle anécdotas de cuando erais pequeños o de sus abuelos.",
    "Leed cuentos con familias diferentes a la vuestra.",
  ],
  profesores: PROF("Interacción socioemocional en el entorno: la familia como primer grupo social, diversidad familiar, vínculos afectivos y colaboración en tareas sencillas", [
    "Protagonista de la semana: cada niño trae fotos de su familia y la presenta en la asamblea.",
    "Árbol familiar sencillo con fotos (yo, mis papás o cuidadores, mis abuelos).",
    "Rincón de la casita para el juego simbólico de roles familiares.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
