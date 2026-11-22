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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Entender las órdenes de clase: Open your books, Sit down", "Nombrar las asignaturas en inglés", "Usar This is / These are", "Conocer los lugares del colegio"],
  lectura: { titulo: "The magic pencil", html: `<p>Max has got a new <b>pencil case</b>. It's blue with red stars. Inside there is a <b>pencil</b>, a <b>rubber</b>, a <b>sharpener</b>, a <b>ruler</b> and some <b>crayons</b>.</p><p>But the pencil is special. It's a <b>magic pencil</b>!</p><p>In the art class, Max draws a yellow sun. Suddenly, the sun shines in the classroom! "Wow!" say his friends.</p><p>Then Max draws a green tree. A real tree grows next to the window!</p><p>Then he draws a big orange dog. "Woof, woof!" The dog runs around the classroom!</p><p>"Max!" says the teacher. "Stop, please! Use your rubber!"</p><p>Max takes his rubber and rubs out the dog. The dog disappears. Then he rubs out the tree, and the sun.</p><p>"Phew!" says the teacher.</p><p>At the end of the class, Max puts the magic pencil in his pencil case. "See you tomorrow, magic pencil," he whispers.</p><p><i>(rubber: goma · sharpener: sacapuntas · shines: brilla · rubs out: borra · whispers: susurra)</i></p>` },
  tras: {
    "In the classroom": [
      ["Classroom instructions", `<p>En clase de inglés el maestro o la maestra da muchas <mark>instructions</mark> (órdenes). ¡Hay que entenderlas!</p><ul><li><b>Stand up!</b>: ¡Levantaos!</li><li><b>Sit down!</b>: ¡Sentaos!</li><li><b>Open your books.</b>: Abrid los libros.</li><li><b>Close your books.</b>: Cerrad los libros.</li><li><b>Listen!</b>: ¡Escuchad!</li><li><b>Look!</b>: ¡Mirad!</li><li><b>Be quiet, please.</b>: Silencio, por favor.</li><li><b>Put up your hand.</b>: Levantad la mano.</li><li><b>Line up!</b>: ¡Haced una fila!</li></ul><p>Y frases útiles para los alumnos:</p><ul><li>«<b>Can you repeat, please?</b>» (¿Puedes repetir?)</li><li>«<b>I don't understand.</b>» (No entiendo.)</li><li>«<b>Can I go to the toilet, please?</b>»</li></ul><p><b>Actividad</b>: jugad a «Teacher says»: uno da órdenes y los demás las hacen.</p>`,
        H6.dos("Orders", ["BODY", ["Stand up", "Sit down", "Line up"], cAZ], ["BOOKS", ["Open", "Close", "Look"], cVE]),
        ["ieMrDhNGREc", "School Supplies Song", "English Tree", 11320551]],
    ],
    "Más colores": [
      ["School subjects", `<p>En el colegio estudiamos muchas asignaturas. En inglés se llaman <mark>subjects</mark>:</p><ul><li><b>Maths</b>: Matemáticas.</li><li><b>English</b>: Inglés.</li><li><b>Spanish</b>: Lengua castellana.</li><li><b>Science</b>: Ciencias.</li><li><b>Art</b>: Plástica.</li><li><b>Music</b>: Música.</li><li><b>PE</b>: Educación Física (Physical Education).</li></ul><p>Fíjate: los nombres de las asignaturas de idiomas llevan mayúscula: <b>English</b>, <b>Spanish</b>.</p><p>Para hablar de nuestra asignatura favorita:</p><ul><li>«<b>What's your favourite subject?</b>» — «My favourite subject is <b>Art</b>.»</li><li>«I like <b>Music</b> because I love singing.»</li><li>«I don't like Maths very much.»</li></ul><p>Cada día de la semana tenemos asignaturas distintas: «On Monday we have Maths and English. On Friday we have PE and Music.»</p><p><b>Actividad</b>: haz una encuesta en clase sobre la asignatura favorita y dibuja un gráfico de barras.</p>`,
        L6.filas("Subjects", [["Maths", "números", cAZ], ["Science", "ciencias", cVE], ["Art", "plástica", cRO], ["PE", "deporte", cNA]])],
    ],
    "What's this?": [
      ["This is, these are", `<p>Para señalar cosas que están <b>cerca</b> usamos:</p><ul><li><mark>This is</mark> + una cosa: «<b>This is</b> my pencil.» (Este es mi lápiz.)</li><li><mark>These are</mark> + varias cosas: «<b>These are</b> my crayons.» (Estos son mis lápices de colores.)</li></ul><p>Para preguntar:</p><ul><li>«<b>What's this?</b>» — «It's a ruler.»</li><li>«<b>What are these?</b>» — «They're scissors.»</li></ul><p>Recuerda que en plural casi siempre añadimos <b>-s</b>: <i>pencil → pencils</i>, <i>book → books</i>. Pero algunas cosas siempre van en plural, como <b>scissors</b> (tijeras).</p><p>Example: «<b>This is</b> my schoolbag. <b>These are</b> my books. <b>This is</b> my pencil case.»</p><p><b>Actividad</b>: enseña los objetos de tu mochila a un compañero usando This is y These are.</p>`,
        H6.dos("Near", ["THIS", ["This is", "a pen", "It's…"], cMO], ["THESE", ["These are", "pens", "They're…"], cAZ])],
    ],
    "¿Para qué sirve?": [
      ["Places at school", `<p>Un colegio tiene muchos <mark>places</mark> (lugares):</p><ul><li><b>classroom</b>: aula.</li><li><b>playground</b>: patio.</li><li><b>library</b>: biblioteca.</li><li><b>gym</b>: gimnasio.</li><li><b>dining room</b>: comedor.</li><li><b>toilets</b>: baños.</li><li><b>head teacher's office</b>: despacho del director o la directora.</li><li><b>music room</b>: aula de música.</li></ul><p>En cada lugar hacemos cosas distintas:</p><ul><li>«We play in the <b>playground</b>.»</li><li>«We read in the <b>library</b>.»</li><li>«We have lunch in the <b>dining room</b>.»</li><li>«We do PE in the <b>gym</b>.»</li></ul><p>Para preguntar: «<b>Where's the library?</b>» — «It's next to the gym.»</p><p>En el patio hay que jugar sin peleas y compartir. «Let's play together!» (¡Juguemos juntos!) es una frase perfecta para el recreo.</p><p><b>Actividad</b>: dibuja el plano de tu colegio y escribe el nombre de cada lugar en inglés.</p>`,
        H6.rueda("School", "SCHOOL", [["playground", cVE], ["library", cAZ], ["gym", cRO], ["dining", cNA]])],
    ],
  },
  final: [
    ["Schools around the world", `<p>Los colegios no son iguales en todo el mundo. ¡Vamos a ver algunas <mark>diferencias</mark>!</p><ul><li>In <b>England</b>, many children wear a <b>school uniform</b>: jumper, shirt and tie (corbata).</li><li>In <b>Japan</b>, children <b>clean</b> their classroom every day.</li><li>In <b>Finland</b>, children don't have much homework and play outside a lot, even in the snow.</li><li>In <b>the USA</b>, many children go to school by <b>yellow school bus</b>.</li><li>In some places in <b>Africa</b>, children walk a long way to go to school.</li></ul><p>Pero en todos los colegios del mundo los niños aprenden, juegan y hacen amigos.</p><p>Do you wear a uniform? «Yes, I do.» / «No, I don't.»</p><p><b>Actividad</b>: dibuja un uniforme escolar inventado y describe sus colores en inglés.</p>`,
      L6.filas("World", [["England", "uniform", cAZ], ["Japan", "clean", cRO], ["Finland", "play", cVE], ["USA", "yellow bus", cNA]])],
    ["Repaso: the magic pencil", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Max's <b>pencil case</b> is blue with red stars.</li><li>Inside: a <b>pencil</b>, a <b>rubber</b>, a <b>sharpener</b>, a <b>ruler</b> and <b>crayons</b>.</li><li>The pencil is <b>magic</b>.</li><li>He draws a <b>yellow sun</b>, a <b>green tree</b> and a big <b>orange dog</b>.</li><li>The teacher says: «<b>Stop, please!</b> Use your <b>rubber</b>!»</li><li>The things <b>disappear</b> when Max rubs them out.</li></ul><p>¿Qué dibujarías tú con un lápiz mágico? Recuerda usar los colores en inglés: «I draw a <b>purple</b> elephant!»</p><p>Max is a good student: when the teacher says «Stop», he stops and uses his rubber.</p><p><b>Actividad</b>: dibuja lo que harías con un lápiz mágico y escribe: «I draw a…».</p>`,
      H6.flujo("Magic", ["sun|yellow", "tree|green", "dog|orange", "rubber|borra"], cMO)],
  ],
  ejemplos: [
    ["Señala tus lápices de colores y di que son tuyos.", ["Varias cosas cerca: These are."], "These are my crayons."],
    ["¿Qué significa «Put up your hand»?", ["hand = mano"], "Levantad la mano."],
  ],
  errores: ["Decir «This are my books» en lugar de «These are my books».", "Escribir «english» con minúscula."],
  ejercicios: [
    ["b", "What does «Sit down» mean?", "Sentaos."],
    ["b", "How do you say «patio»?", "Playground."],
    ["b", "How do you say «Matemáticas»?", "Maths."],
    ["b", "What is a «rubber»?", "Una goma."],
    ["b", "Translate: No entiendo.", "I don't understand."],
    ["m", "Complete: «___ are my pens.»", "These."],
    ["m", "Answer: What's your favourite subject?", "My favourite subject is…"],
    ["m", "Where do we have lunch?", "In the dining room."],
    ["m", "What is PE?", "Educación Física."],
    ["m", "Translate: ¿Puedes repetir, por favor?", "Can you repeat, please?"],
    ["a", "In the reading, what does Max draw?", "A yellow sun, a green tree and an orange dog."],
    ["a", "Why does the teacher say «Use your rubber»?", "To make the dog and the other things disappear."],
    ["a", "Describe your schoolbag with This is / These are.", "Open answer."],
    ["a", "Write about schools in Japan and England.", "In Japan children clean their classroom; in England many wear a uniform."],
  ],
  quiz: [
    ["Levantaos is…", ["Stand up", "Sit down", "Line up"], "Instructions."],
    ["Plástica is…", ["Art", "Science", "Maths"], "Subjects."],
    ["___ are my books.", ["These", "This", "It"], "This/these."],
    ["We read in the…", ["library", "gym", "playground"], "Places."],
    ["In Japan, children…", ["clean the classroom", "don't go to school", "go by boat"], "World."],
  ],
  examen: [
    ["In the reading, what colour is the pencil case?", ["blue", "red", "yellow"], "Reading."],
    ["What runs around the classroom?", ["a dog", "a cat", "a horse"], "Repaso."],
  ],
  tarjetas: [
    ["Instructions", "Stand up, Sit down, Open your books, Listen!"],
    ["This / These", "This is a pen. These are pens."],
  ],
  glosario: [
    ["Stand up", "Levantarse."],
    ["Sit down", "Sentarse."],
    ["Subject", "Asignatura."],
    ["PE", "Educación Física."],
    ["These", "Estos, estas."],
    ["Scissors", "Tijeras."],
    ["Playground", "Patio."],
    ["Library", "Biblioteca."],
    ["Rubber", "Goma de borrar."],
    ["Sharpener", "Sacapuntas."],
  ],
  situacion: {
    titulo: "School tour",
    reto: "La clase hace una visita guiada al colegio en inglés para enseñárselo a un visitante imaginario.",
    pasos: ["Hacer un plano del colegio con los lugares en inglés.", "Escribir una frase sobre qué se hace en cada lugar.", "Practicar las órdenes de clase y las asignaturas.", "Hacer de guía: «This is the library. We read here.»"],
    producto: "Un plano del colegio y una visita guiada en inglés.",
    evaluacion: ["Entiende las órdenes de clase.", "Nombra las asignaturas.", "Usa This is / These are.", "Nombra los lugares del colegio."],
  },
});
