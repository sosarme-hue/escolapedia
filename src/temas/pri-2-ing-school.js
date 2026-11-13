// Inglés 2º de Primaria: School things and colours. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, muestras } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "School things and colours",
  minutos: 20,
  objetivos: ["Nombrar en inglés los objetos de la mochila y de la clase", "Decir de qué color es cada cosa: a red pencil", "Pedir algo con amabilidad: Can I have a rubber, please?"],
  claves: ["pencil", "rubber", "ruler", "book", "schoolbag", "red", "blue", "yellow", "green", "It's a…"],
  pregunta: {
    texto: "Abre tu mochila. ¿Sabes decir en inglés qué hay dentro?",
    respuesta: "La mochila es <mark>schoolbag</mark>. Dentro hay un lápiz, <b>pencil</b>, una goma, <b>rubber</b>, y un libro, <b>book</b>.",
  },
  bloques: [
    {
      html: `<h3>In my schoolbag</h3><p>La mochila del cole se llama <mark>schoolbag</mark>.</p><p>Dentro llevamos muchas cosas. El lápiz es <b>pencil</b>. La goma es <b>rubber</b>. La regla es <b>ruler</b>. El libro es <b>book</b>.</p><p>Por la mañana, antes de salir de casa, repasa tu mochila en inglés: <b>pencil, rubber, ruler, book</b>. ¿Lo llevas todo? ¡Muy bien!</p>`,
      svg: vocab("En la mochila: pencil lápiz, rubber goma, ruler regla, book libro", [["lapiz", "pencil", "lápiz", A], ["goma", "rubber", "goma", R], ["regla", "ruler", "regla", Ve], ["libro", "book", "libro", N]], { titulo: "In my schoolbag" }),
    },
    {
      html: `<h3>In the classroom</h3><p>En la clase, <mark>classroom</mark>, también hay cosas grandes.</p><p>La mesa es <b>desk</b> o <b>table</b>. La silla es <b>chair</b>. La pizarra es <b>board</b>.</p><p>Las tijeras son <b>scissors</b>. Cuando la profe dice <b>Sit on your chair</b>, nos sentamos en la silla. Y cuando dice <b>Look at the board</b>, miramos la pizarra.</p>`,
      svg: vocab("En la clase: desk mesa, chair silla, board pizarra, scissors tijeras", [["mesa", "desk", "mesa", A], ["silla", "chair", "silla", R], ["pizarra", "board", "pizarra", Ve], ["tijeras", "scissors", "tijeras", N]], { titulo: "In the classroom" }),
      video: V("in2b"),
    },
    {
      html: `<h3>Colours: los colores</h3><p>Ya conoces algunos colores en inglés. ¡Vamos a <mark>repasarlos</mark>!</p><p>Rojo es <b>red</b>. Azul es <b>blue</b>. Amarillo es <b>yellow</b>. Verde es <b>green</b>.</p><p>Naranja es <b>orange</b>, rosa es <b>pink</b> y morado es <b>purple</b>. Busca en clase algo de cada color y di su nombre en voz alta.</p>`,
      svg: muestras("Colores: red rojo, blue azul, yellow amarillo, green verde", [["", "red", "rojo", "#e53935"], ["", "blue", "azul", "#1e88e5"], ["", "yellow", "amarillo", "#fdd835"], ["", "green", "verde", "#43a047"]], { titulo: "Colours" }),
    },
    {
      html: `<h3>Más colores</h3><p>Hay más colores que usamos <mark>cada día</mark>.</p><p>Negro es <b>black</b>. Blanco es <b>white</b>. Marrón es <b>brown</b>. Gris es <b>grey</b>.</p><p>La pizarra suele ser <b>black</b> o <b>green</b>. El papel es <b>white</b>. ¿Y tu estuche, de qué color es? Dilo en inglés: <b>My pencil case is blue</b>.</p>`,
      svg: muestras("Más colores: black negro, white blanco, brown marrón, grey gris", [["", "black", "negro", "#212121"], ["", "white", "blanco", "#ffffff"], ["", "brown", "marrón", "#795548"], ["", "grey", "gris", "#9e9e9e"]], { titulo: "More colours" }),
    },
    {
      html: `<h3>A red pencil</h3><p>Podemos juntar <mark>color y objeto</mark>.</p><p>En inglés el color va <b>antes</b>: <b>a red pencil</b> es un lápiz rojo. <b>A blue book</b> es un libro azul.</p><p>En español lo decimos al revés. Piensa: primero cómo es, después qué es. <b>A green ruler</b>, <b>a yellow chair</b>. ¡Prueba con tus cosas!</p>`,
      svg: vocab("Color delante: a red pencil, a blue book, a green ruler", [["lapiz", "a red pencil", "un lápiz rojo", "#e53935"], ["libro", "a blue book", "un libro azul", "#1e88e5"], ["regla", "a green ruler", "una regla verde", "#43a047"]], { titulo: "Colour + thing" }),
    },
    {
      html: `<h3>What's this?</h3><p>Para preguntar qué es algo decimos <mark>What's this?</mark> (¿Qué es esto?).</p><p>Se contesta con <b>It's a…</b> Por ejemplo: <b>It's a pencil</b>. Si quieres decir también el color: <b>It's a red pencil</b>.</p><p>Si la palabra empieza por vocal usamos <b>an</b>: <b>It's an orange pencil</b>. Suena mejor y más fácil.</p>`,
      svg: charla("What's this? It's a pencil. What colour is it? It's red", [["nino", "What's this?", A], ["nina", "It's a pencil!", R], ["nino", "What colour is it?", A], ["nina", "It's red!", R]]),
    },
    {
      html: `<h3>Can I have…, please?</h3><p>Si necesitas algo de un compañero, lo pides con <mark>educación</mark>.</p><p>Dices: <b>Can I have a rubber, please?</b> (¿Me dejas una goma, por favor?).</p><p>Tu compañero te la da y dice <b>Here you are</b> (aquí tienes). Tú contestas <b>Thank you!</b> Así se pide en clase de inglés. ¡Y en todas las clases!</p>`,
      svg: charla("Can I have a rubber, please? Here you are. Thank you!", [["nina", "Can I have a rubber, please?", R], ["nino", "Here you are!", A], ["nina", "Thank you!", R]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>En clase de inglés la profe usa estas palabras <mark>todo el tiempo</mark>.</p><p>Dice <b>Take out your book</b> (saca tu libro) o <b>Use your red pencil</b> (usa el lápiz rojo).</p><p>Si las conoces, entenderás las órdenes sin traducir. Y podrás hacer las fichas tú solo. ¡Eso es aprender inglés de verdad!</p>`,
      svg: lista("Órdenes de clase: take out your book, use your red pencil, look at the board", [["Take out your book", A], ["Use your red pencil", R], ["Look at the board", Ve]], { titulo: "Classroom English" }),
    },
    {
      html: `<h3>Jugamos a I spy</h3><p>El juego <mark>I spy</mark> es el «veo, veo» en inglés.</p><p>Uno dice: <b>I spy with my little eye something… blue!</b> Los demás miran la clase y buscan algo azul.</p><p>Preguntan: <b>Is it a book?</b> Si aciertan, contesta <b>Yes!</b> Si no, dice <b>No, try again!</b> ¡Gana quien lo encuentra primero!</p>`,
      svg: charla("Juego I spy: I spy something blue. Is it a book? Yes!", [["nina", "I spy something blue!", R], ["nino", "Is it a book?", A], ["libro", "Yes!", N]]),
    },
  ],
  figura: {
    titulo: "School things and colours",
    svg: mural("Objetos del cole con su color: a red pencil, a blue book, a green ruler, a yellow chair", [["lapiz", "pencil", "a red pencil", "#e53935"], ["libro", "book", "a blue book", "#1e88e5"], ["regla", "ruler", "a green ruler", "#43a047"], ["silla", "chair", "a yellow chair", "#f9a825"]], "School things and colours"),
  },
  video: V("in2v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés: «un libro azul».",
      pasos: ["Libro es book.", "Azul es blue.", "El color va delante: a blue book."],
      resultado: "«A blue book.»" },
    { enunciado: "Tu amigo señala tu goma y pregunta What's this?",
      pasos: ["Goma es rubber.", "Se contesta con It's a…", "Junta las palabras."],
      resultado: "«It's a rubber.»" },
    { enunciado: "Necesitas una regla. ¿Cómo la pides?",
      pasos: ["Regla es ruler.", "Pedimos con Can I have…?", "No olvides please."],
      resultado: "«Can I have a ruler, please?»" },
  ],
  errores: [
    "Decir «a pencil red»: el color va antes, a red pencil.",
    "Confundir rubber (goma) con ruler (regla): suenan parecido.",
    "Olvidar please al pedir algo.",
    "Leer yellow como se escribe: se dice «iélou».",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «lápiz» en inglés?", sol: "Pencil." },
    { q: "¿Qué es un rubber?", sol: "Una goma de borrar." },
    { q: "¿Cómo se dice «regla»?", sol: "Ruler." },
    { q: "Di tres colores en inglés.", sol: "Por ejemplo: red, blue, yellow (o green, black, white…)." },
    { q: "¿De qué color es green?", sol: "Verde." },
    { q: "Di en inglés: «una silla amarilla».", sol: "A yellow chair." },
    { q: "Contesta a What's this? señalando un libro.", sol: "It's a book." },
    { q: "Pide unas tijeras en inglés.", sol: "Can I have the scissors, please?" },
    { q: "¿Qué significa Here you are?", sol: "Aquí tienes." },
    { q: "Juega a I spy con alguien de casa usando un color.", sol: "Por ejemplo: I spy something red! Is it a book? Yes!" },
  ],
  quiz: [
    { q: "«Pencil» es…", o: ["lápiz", "libro", "regla"], a: 0, e: "Pencil = lápiz." },
    { q: "«Regla» en inglés es…", o: ["rubber", "ruler", "board"], a: 1, e: "Ruler = regla." },
    { q: "«Schoolbag» es…", o: ["mochila", "estuche", "silla"], a: 0, e: "Schoolbag = mochila." },
    { q: "«Chair» es…", o: ["mesa", "silla", "pizarra"], a: 1, e: "Chair = silla." },
    { q: "«Yellow» es…", o: ["azul", "amarillo", "verde"], a: 1, e: "Yellow = amarillo." },
    { q: "«Rojo» en inglés es…", o: ["red", "pink", "brown"], a: 0, e: "Red = rojo." },
    { q: "Un libro azul es…", o: ["a book blue", "a blue book", "blue a book"], a: 1, e: "El color va delante." },
    { q: "«What's this?» significa…", o: ["¿Qué es esto?", "¿Dónde está?", "¿Cómo estás?"], a: 0, e: "What's this? = ¿Qué es esto?" },
    { q: "Para pedir algo dices…", o: ["Here you are", "Can I have…, please?", "Goodbye"], a: 1, e: "Can I have…, please?" },
    { q: "«White» es…", o: ["negro", "blanco", "gris"], a: 1, e: "White = blanco." },
  ],
  examen: [
    { q: "«Board» es…", o: ["pizarra", "tablero de juego", "mochila"], a: 0, e: "En clase, board = pizarra." },
    { q: "Contesta: What colour is the sun?", o: ["It's yellow.", "It's a pencil.", "It's blue."], a: 0, e: "El sol es amarillo." },
    { q: "«Una regla verde» es…", o: ["a green ruler", "a ruler green", "a green rubber"], a: 0, e: "Ruler = regla, green = verde." },
    { q: "Te dan algo y dices…", o: ["Thank you!", "What's this?", "I spy"], a: 0, e: "Thank you = gracias." },
  ],
  feynman: ["Cómo se llaman las cosas de la mochila en inglés", "Dónde va el color: a red pencil", "Cómo se pide algo con educación en inglés"],
  mapa: mapa("SCHOOL THINGS", "var(--pri)", [
    ["Schoolbag", "pencil, rubber, ruler, book", A],
    ["Classroom", "desk, chair, board", Ve],
    ["Colours", "red, blue, yellow, green", R],
    ["Frases", "It's a red pencil. Can I have…?", N],
  ], 230),
  tarjetas: [
    ["lápiz / goma", "pencil / rubber"],
    ["regla / libro", "ruler / book"],
    ["mochila", "schoolbag"],
    ["mesa / silla / pizarra", "desk / chair / board"],
    ["rojo / azul", "red / blue"],
    ["amarillo / verde", "yellow / green"],
    ["un lápiz rojo", "a red pencil"],
    ["¿Me dejas…, por favor?", "Can I have…, please?"],
  ],
  familias: [
    "Al preparar la mochila, nombrad cada cosa en inglés antes de meterla.",
    "Jugad a I spy con colores por casa o en el coche.",
    "Pedid las cosas en la mesa con Can I have…, please?",
    "Haced un dibujo y escribid el color en inglés al lado de cada objeto.",
  ],
  profesores: PROF("Lengua extranjera: léxico del aula y del material escolar; colores; estructura adjetivo + nombre; It's a…; peticiones con Can I have…, please?", ["Kim's game con el material del estuche.", "I spy con colores de la clase.", "Órdenes de aula (Take out, Look at) en forma de Simon says."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
