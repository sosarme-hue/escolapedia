// Inglés 1º de Primaria: My school. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "1-primaria",
  titulo: "My school",
  minutos: 20,
  objetivos: ["Nombrar el material escolar en inglés: pencil, book, rubber…", "Nombrar cosas de la clase: table, chair, board", "Entender órdenes sencillas: sit down, stand up, listen"],
  claves: ["school", "pencil", "book", "rubber", "bag", "table", "chair", "sit down", "stand up"],
  pregunta: {
    texto: "¿Qué llevas en la mochila para ir al cole? ¿Sabes cómo se dice alguna cosa en inglés?",
    respuesta: "Seguro que llevas un <mark>pencil</mark> (lápiz) y un <mark>book</mark> (libro). La mochila es <b>bag</b> y el cole es <b>school</b>.",
  },
  bloques: [
    {
      html: `<h3>My school</h3><p>El colegio en inglés se dice <mark>school</mark>. Se pronuncia «scul».</p><p>En el cole está tu clase, que se dice <b>classroom</b>. Allí están tu maestra o maestro, que se dice <b>teacher</b>.</p><p>Tus compañeros son tus <b>friends</b>, tus amigos. Cada mañana decimos: <b>Good morning, teacher!</b> ¡Y empieza la clase!</p>`,
      svg: vocab("El colegio: school, teacher y friends", [["escuela", "school", "colegio", A], ["mama", "teacher", "maestra", R], ["nino", "friends", "amigos", V]], { titulo: "At school" }),
    },
    {
      html: `<h3>En mi mochila</h3><p>La mochila se dice <mark>bag</mark> o <b>school bag</b>. ¿Qué llevas dentro?</p><p>Un <b>pencil</b> es un lápiz. Un <b>rubber</b> es una goma de borrar. Un <b>book</b> es un libro.</p><p>También llevamos <b>scissors</b> (tijeras) y una <b>ruler</b> (regla). Cuando vacíes la mochila, nombra cada cosa en inglés. ¡Así practicas sin darte cuenta!</p>`,
      svg: vocab("Material escolar: pencil, rubber, book, scissors, ruler y bag", [["lapiz", "pencil", "lápiz", A], ["goma", "rubber", "goma", R], ["libro", "book", "libro", V], ["tijeras", "scissors", "tijeras", N], ["regla", "ruler", "regla", A], ["mochila", "bag", "mochila", R]], { titulo: "In my bag" }),
    },
    {
      html: `<h3>En mi clase</h3><p>En la clase hay muchos muebles y objetos.</p><p>La mesa es <mark>table</mark>. La silla es <mark>chair</mark>. La pizarra es <b>board</b>.</p><p>También hay una puerta, <b>door</b>, y una ventana, <b>window</b>. Cuando entres en clase, mira a tu alrededor. Señala cada cosa y di su nombre en inglés: <b>table, chair, board!</b></p>`,
      svg: vocab("Cosas de la clase: table, chair y board", [["mesa", "table", "mesa", N], ["silla", "chair", "silla", A], ["pizarra", "board", "pizarra", V]], { titulo: "My classroom" }),
    },
    {
      html: `<h3>What is it?</h3><p>Para preguntar «¿Qué es?» decimos <mark>What is it?</mark></p><p>Contestamos con <mark>It's a…</mark> y la cosa. Por ejemplo, <b>It's a pencil</b> (Es un lápiz).</p><p>Si es una goma, decimos <b>It's a rubber</b>. Fíjate en la palabrita <b>a</b>: significa «un» o «una». ¡Pregunta a tu compañero por las cosas de su mesa!</p>`,
      svg: charla("Un niño pregunta What is it y una niña responde It's a pencil", [["nino", "What is it?", A], ["lapiz", "It's a pencil!", R], ["nina", "Yes! A pencil.", R]]),
      video: vid("dbklZrO5H78", "Do You Have A Crayon? | School Supplies Song", "Super Simple Songs - Kids Songs", 9928736, 7769),
    },
    {
      html: `<h3>Órdenes de clase</h3><p>La teacher de inglés nos da <mark>órdenes cortas</mark>. Hay que entenderlas.</p><p><b>Sit down</b> es «siéntate». <b>Stand up</b> es «levántate». <b>Listen</b> es «escucha».</p><p><b>Look</b> es «mira». <b>Be quiet</b> es «silencio». <b>Open your book</b> es «abre tu libro». Si no entiendes algo, puedes decir: <b>Sorry, can you repeat?</b></p>`,
      svg: lista("Órdenes de clase: sit down, stand up, listen, look", [["sit down = siéntate", A], ["stand up = levántate", R], ["listen = escucha", V], ["look = mira", N]], { titulo: "Classroom orders" }),
    },
    {
      html: `<h3>Can I have…?</h3><p>Si necesitas algo, lo pides con educación.</p><p>Decimos <mark>Can I have a pencil, please?</mark> Significa «¿Me dejas un lápiz, por favor?».</p><p>El compañero te lo da y dice: <b>Here you are!</b> (¡Aquí tienes!). Y tú contestas: <b>Thank you!</b> Pedir las cosas así es amable. ¡En inglés y en español!</p>`,
      svg: charla("Una niña pide un lápiz: Can I have a pencil, please? Here you are. Thank you", [["nina", "Can I have a pencil, please?", R], ["nino", "Here you are!", A], ["nina", "Thank you!", R]]),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Algunas palabras de clase <mark>suenan distinto</mark> de como se escriben.</p><p><b>Pencil</b> se dice «pénsil». <b>Chair</b> se dice «chéar». <b>Book</b> se dice «buk», con una u corta.</p><p><b>Scissors</b> es difícil: se dice «sísors». Escucha la canción del tema y repite cada palabra. ¡Poco a poco te saldrá muy bien!</p>`,
      svg: lista("Cómo suenan: pencil pénsil, chair chéar, book buk", [["pencil → «pénsil»", A], ["chair → «chéar»", R], ["book → «buk»", V]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>En clase de inglés, la teacher <mark>habla mucho en inglés</mark>.</p><p>Si conoces las palabras del cole, entenderás lo que te pide: un libro, un lápiz o que te sientes.</p><p>También podrás pedir lo que necesitas. Y si visitas un cole de otro país, sabrás el nombre de todo. ¡Te sentirás como en casa!</p>`,
      svg: vocab("Para qué sirve: entender a la teacher, pedir cosas y aprender", [["oreja", "understand", "entender", A], ["mano", "ask", "pedir", R], ["libro", "learn", "aprender", V]], { titulo: "School English is for…" }),
    },
    {
      html: `<h3>Jugamos a Simon says</h3><p>Es un juego muy famoso en inglés. Se parece a «Simón dice».</p><p>La teacher dice <mark>Simon says: stand up!</mark> y todos se levantan.</p><p>Pero si dice solo <b>Sit down!</b>, sin «Simon says», ¡no hay que moverse! Quien se mueve, pierde. Así practicamos las órdenes y nos reímos mucho.</p>`,
      svg: charla("Juego Simon says: Simon says stand up. Sit down. Oh, no", [["mama", "Simon says: stand up!", R], ["nino", "OK!", A], ["mama", "Sit down!", R], ["nina", "No! Simon didn't say!", V]]),
    },
  ],
  figura: {
    titulo: "My school: mi colegio en inglés",
    svg: mural("Cosas del colegio: pencil es lápiz, book es libro, table es mesa, chair es silla", [["lapiz", "pencil", "lápiz", A], ["libro", "book", "libro", V], ["mesa", "table", "mesa", N], ["silla", "chair", "silla", R]], "En el colegio"),
  },
  video: { ...vid("41cJ0mqWses", "School Supplies Song", "English Tree", 13565699, 43618), busqueda: "school supplies song for kids" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Tu compañero te enseña una goma y pregunta What is it?",
      pasos: ["Mira la cosa: es una goma.", "Goma en inglés es rubber.", "Contesta con It's a…"],
      resultado: "«It's a rubber!»" },
    { enunciado: "Necesitas una regla. Pídela en inglés.",
      pasos: ["Regla en inglés es ruler.", "Empieza con Can I have a…", "Termina con please."],
      resultado: "«Can I have a ruler, please?»" },
    { enunciado: "La teacher dice Stand up! ¿Qué haces?",
      pasos: ["Stand significa estar de pie.", "Up significa arriba.", "Stand up = levantarse."],
      resultado: "Te levantas de la silla." },
  ],
  errores: [
    "Decir «It's pencil» sin la a: se dice It's a pencil.",
    "Leer book como «bóok»: se dice «buk».",
    "Confundir sit down (siéntate) con stand up (levántate).",
    "Olvidar please al pedir algo.",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «colegio» en inglés?", sol: "School." },
    { q: "¿Cómo se dice «lápiz»?", sol: "Pencil." },
    { q: "¿Qué es un book?", sol: "Un libro." },
    { q: "¿Cómo se dice «mochila»?", sol: "Bag o school bag." },
    { q: "Di en inglés: mesa y silla.", sol: "Table and chair." },
    { q: "¿Qué significa sit down?", sol: "Siéntate." },
    { q: "¿Qué significa stand up?", sol: "Levántate." },
    { q: "Pregunta en inglés «¿Qué es?».", sol: "What is it?" },
    { q: "Pide una goma en inglés.", sol: "Can I have a rubber, please?" },
    { q: "Juega a Simon says con tu familia.", sol: "Por ejemplo: Simon says: sit down!" },
  ],
  quiz: [
    { q: "«School» es…", o: ["colegio", "casa", "parque"], a: 0, e: "School = colegio." },
    { q: "«Pencil» es…", o: ["libro", "lápiz", "regla"], a: 1, e: "Pencil = lápiz." },
    { q: "«Libro» en inglés es…", o: ["bag", "book", "board"], a: 1, e: "Book = libro." },
    { q: "«Rubber» es…", o: ["goma", "tijeras", "silla"], a: 0, e: "Rubber = goma de borrar." },
    { q: "«Chair» es…", o: ["mesa", "silla", "puerta"], a: 1, e: "Chair = silla." },
    { q: "«Table» es…", o: ["mesa", "ventana", "pizarra"], a: 0, e: "Table = mesa." },
    { q: "«Sit down» significa…", o: ["levántate", "siéntate", "mira"], a: 1, e: "Sit down = siéntate." },
    { q: "«Listen» significa…", o: ["escucha", "escribe", "corre"], a: 0, e: "Listen = escucha." },
    { q: "Para pedir algo decimos…", o: ["Can I have…, please?", "Goodbye!", "What colour is it?"], a: 0, e: "Can I have…, please?" },
    { q: "«Here you are» significa…", o: ["aquí tienes", "adiós", "siéntate"], a: 0, e: "Here you are = aquí tienes." },
  ],
  examen: [
    { q: "Contesta: What is it? (un libro)", o: ["It's a book.", "It's a chair.", "It's red."], a: 0, e: "It's a book." },
    { q: "«Scissors» son…", o: ["tijeras", "lápices", "reglas"], a: 0, e: "Scissors = tijeras." },
    { q: "«Stand up» significa…", o: ["siéntate", "levántate", "escucha"], a: 1, e: "Stand up = levántate." },
    { q: "La pizarra es…", o: ["board", "bag", "book"], a: 0, e: "Board = pizarra." },
  ],
  feynman: ["Cómo se llaman en inglés las cosas de la mochila", "Qué significan sit down y stand up", "Cómo pedir algo con educación en inglés"],
  mapa: mapa("MY SCHOOL", "var(--pri)", [
    ["In my bag", "pencil, rubber, book", A],
    ["In my classroom", "table, chair, board", V],
    ["What is it?", "It's a pencil!", N],
    ["Orders", "sit down, stand up, listen", R],
  ], 230),
  tarjetas: [
    ["colegio", "school"],
    ["lápiz", "pencil"],
    ["goma", "rubber"],
    ["libro", "book"],
    ["mesa / silla", "table / chair"],
    ["¿Qué es?", "What is it? → It's a…"],
    ["siéntate / levántate", "sit down / stand up"],
    ["¿Me dejas…?", "Can I have…, please?"],
  ],
  familias: [
    "Al preparar la mochila, nombrad cada cosa en inglés: pencil, book, rubber…",
    "Jugad a Simon says en casa: es divertido y se aprenden las órdenes.",
    "Pedid las cosas en inglés durante un rato: Can I have the water, please?",
    "Escuchad juntos la canción del material escolar del tema.",
  ],
  profesores: PROF("Lengua extranjera: léxico del aula y del material escolar; órdenes de clase (classroom language); petición cortés Can I have…?", ["Bolsa misteriosa: sacar objetos y preguntar What is it?", "Simon says con órdenes del aula.", "Rutina de pedir material en inglés."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
