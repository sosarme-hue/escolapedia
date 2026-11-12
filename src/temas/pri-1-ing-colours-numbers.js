// Inglés 1º de Primaria: Colours and numbers. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, muestras, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", Y = "var(--sun)";
const MOR = "#7b3fb5", ROS = "#e0609c", MAR = "#8b5a2b", NEG = "var(--ink)";

module.exports = {
  materia: "Inglés",
  curso: "1-primaria",
  titulo: "Colours and numbers",
  minutos: 20,
  objetivos: ["Nombrar los colores en inglés", "Contar del 1 al 10 en inglés: one, two, three…", "Preguntar y responder What colour is it? y How many?"],
  claves: ["red", "blue", "yellow", "green", "one, two, three", "What colour is it?", "How many?"],
  pregunta: {
    texto: "¿De qué color es el sol? ¿Y cuántos dedos tienes en una mano? ¿Sabrías decirlo en inglés?",
    respuesta: "El sol es <mark>yellow</mark> (amarillo). En una mano tienes <mark>five</mark> (cinco) dedos. ¡Vamos a aprenderlo!",
  },
  bloques: [
    {
      html: `<h3>Red, blue, yellow</h3><p>Los colores en inglés se llaman <mark>colours</mark>. Empezamos por tres muy importantes.</p><p><b>Red</b> es rojo, como una manzana. <b>Blue</b> es azul, como el mar. <b>Yellow</b> es amarillo, como el sol.</p><p>Se pronuncian «red», «blú» y «iélou». Mira a tu alrededor. ¿Ves algo <b>red</b>? ¿Y algo <b>blue</b>?</p>`,
      svg: muestras("Tres colores: red rojo, blue azul, yellow amarillo", [["", "red", "rojo", R], ["", "blue", "azul", A], ["", "yellow", "amarillo", Y]], { titulo: "Colours" }),
    },
    {
      html: `<h3>Más colores</h3><p>Hay muchos más colores. <b>Green</b> es verde, como la hierba. <b>Orange</b> es naranja.</p><p><b>Purple</b> es morado. <b>Pink</b> es rosa. <b>Brown</b> es marrón, como el chocolate. <b>Black</b> es negro, como la noche.</p><p>Y <b>white</b> es blanco, como la nieve. ¿Cuál es tu color favorito? En inglés decimos: <mark>My favourite colour is green</mark>.</p>`,
      svg: muestras("Seis colores: green, orange, purple, pink, brown y black", [["", "green", "verde", V], ["", "orange", "naranja", N], ["", "purple", "morado", MOR], ["", "pink", "rosa", ROS], ["", "brown", "marrón", MAR], ["", "black", "negro", NEG]], { titulo: "More colours" }),
    },
    {
      html: `<h3>What colour is it?</h3><p>Para preguntar «¿De qué color es?» decimos <mark>What colour is it?</mark></p><p>Contestamos con <mark>It's…</mark> y el color. Por ejemplo, <b>It's red</b> (Es rojo).</p><p>Si señalamos una manzana, la respuesta es <b>It's red</b>. Si señalamos la hierba, <b>It's green</b>. ¡Pregunta a tu compañero por los colores de la clase!</p>`,
      svg: charla("Una niña pregunta What colour is it y un niño contesta It's red", [["nina", "What colour is it?", R], ["manzana", "It's red!", R], ["nino", "Yes! It's red.", A]]),
    },
    {
      html: `<h3>One, two, three, four, five</h3><p>Ahora contamos en inglés. Los números se llaman <mark>numbers</mark>.</p><p><b>One</b> es uno. <b>Two</b> es dos. <b>Three</b> es tres. <b>Four</b> es cuatro. <b>Five</b> es cinco.</p><p>Cuenta los dedos de tu mano en inglés: <b>one, two, three, four, five</b>. ¡Tienes <b>five fingers</b>! Se pronuncian «uan», «tu», «zri», «for» y «fáiv».</p>`,
      svg: muestras("Números del uno al cinco: one, two, three, four, five", [["1", "one", "uno", R], ["2", "two", "dos", V], ["3", "three", "tres", N], ["4", "four", "cuatro", A], ["5", "five", "cinco", MOR]], { titulo: "Numbers 1–5" }),
      video: vid("DR-cfDsHCGA", "Counting 1-10 Song | Number Songs for Children", "The Singing Walrus - Canciones Inglesas para niños", 93373465, 167442),
    },
    {
      html: `<h3>Six, seven, eight, nine, ten</h3><p>Seguimos contando hasta diez.</p><p><b>Six</b> es seis. <b>Seven</b> es siete. <b>Eight</b> es ocho. <b>Nine</b> es nueve. <b>Ten</b> es diez.</p><p>Con las dos manos tienes <b>ten fingers</b>. Se pronuncian «siks», «séven», «éit», «náin» y «ten». Cuenta del uno al diez en voz alta. ¡Cada vez lo harás más rápido!</p>`,
      svg: muestras("Números del seis al diez: six, seven, eight, nine, ten", [["6", "six", "seis", A], ["7", "seven", "siete", R], ["8", "eight", "ocho", V], ["9", "nine", "nueve", N], ["10", "ten", "diez", MOR]], { titulo: "Numbers 6–10" }),
    },
    {
      html: `<h3>How many?</h3><p>Para preguntar «¿Cuántos hay?» decimos <mark>How many?</mark></p><p>Por ejemplo: <b>How many cats?</b> (¿Cuántos gatos?). Contamos y respondemos: <b>Three cats!</b></p><p>Fíjate: si hay más de uno, añadimos una <b>s</b> al final. Un gato es <b>one cat</b>. Tres gatos son <b>three cats</b>. ¡Igual que en español!</p>`,
      svg: charla("Una niña pregunta How many cats y un niño responde Three cats", [["nina", "How many cats?", R], ["gato", "One, two, three…", N], ["nino", "Three cats!", A]]),
    },
    {
      html: `<h3>Colores y números juntos</h3><p>Ya podemos decir frases más largas en inglés.</p><p>Mira: <b>two red apples</b> son dos manzanas rojas. <b>Three yellow stars</b> son tres estrellas amarillas.</p><p>En inglés, el color va <mark>antes</mark> de la cosa. Decimos <b>red apple</b>, no «apple red». Es al revés que en español. ¡Prueba con tus juguetes!</p>`,
      svg: vocab("Dos manzanas rojas y tres estrellas amarillas: two red apples, three yellow stars", [["manzana", "two red apples", "dos manzanas rojas", R, 2], ["estrella", "three yellow stars", "tres estrellas amarillas", N, 3]], { titulo: "Colour + thing" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los colores y los números están <mark>en todas partes</mark>.</p><p>Si juegas con niños de otro país, puedes contar en inglés para el escondite: <b>one, two, three…</b></p><p>También puedes pedir un globo de tu color favorito: <b>A red balloon, please!</b> Y entenderás muchas canciones y juegos en inglés.</p>`,
      svg: vocab("Para qué sirve: jugar, pedir un globo rojo y cantar", [["pelota", "play", "jugar", A], ["globo", "balloon", "globo", R], ["guitarra", "sing", "cantar", V]], { titulo: "Colours and numbers for…" }),
    },
    {
      html: `<h3>Jugamos a I spy</h3><p>Es un juego muy famoso en inglés. Se parece a «Veo, veo».</p><p>Un jugador dice: <mark>I spy something red!</mark> (Veo algo rojo). Los demás buscan cosas rojas en la clase.</p><p>Señalan y preguntan: <b>Is it the apple?</b> Quien acierta, elige otro color. También se puede jugar con números: <b>I spy three pencils!</b></p>`,
      svg: charla("Juego I spy: veo algo azul. ¿Es la mochila? Sí", [["nino", "I spy something blue!", A], ["nina", "Is it the bag?", R], ["nino", "Yes! Your turn.", A]]),
    },
  ],
  figura: {
    titulo: "Colours and numbers: colores y números",
    svg: mural("Colores y números: red es rojo, blue es azul, one es uno, ten es diez", [["manzana", "red", "rojo", R], ["camiseta", "blue", "azul", A], ["estrella", "one", "uno · 1", N], ["mano", "ten", "diez · 10", V]], "Colores y números en inglés"),
  },
  video: { ...vid("zxIpA5nF_LY", "What's Your Favorite Color? | Kids Songs", "Super Simple Songs - Kids Songs", 196002419), busqueda: "colours song for kids english" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés de qué color es un plátano.",
      pasos: ["Piensa el color en español: amarillo.", "Amarillo en inglés es yellow.", "Usa It's…: It's yellow."],
      resultado: "«It's yellow!»" },
    { enunciado: "Hay 4 lápices en la mesa. ¿Cómo lo dices en inglés?",
      pasos: ["Cuenta: one, two, three, four.", "Hay más de uno: pencil → pencils.", "Junta el número y la palabra."],
      resultado: "«Four pencils.»" },
    { enunciado: "Di en inglés: «una pelota roja».",
      pasos: ["Una es one (o a).", "Roja es red; pelota es ball.", "El color va antes: red ball."],
      resultado: "«A red ball.»" },
  ],
  errores: [
    "Poner el color detrás como en español, «ball red»: se dice red ball.",
    "Leer two como «tuo»: se dice «tu».",
    "Olvidar la s cuando hay más de uno: three cat → three cats.",
    "Leer blue tal como se escribe, «blu-e»: se dice «blú».",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «rojo» en inglés?", sol: "Red." },
    { q: "¿Cómo se dice «azul»?", sol: "Blue." },
    { q: "¿De qué color es la hierba? Dilo en inglés.", sol: "Green." },
    { q: "Cuenta del 1 al 5 en inglés.", sol: "One, two, three, four, five." },
    { q: "Cuenta del 6 al 10 en inglés.", sol: "Six, seven, eight, nine, ten." },
    { q: "¿Qué número es seven?", sol: "El 7." },
    { q: "Pregunta en inglés de qué color es algo.", sol: "What colour is it?" },
    { q: "¿Cuántos dedos tienes en una mano? Dilo en inglés.", sol: "Five." },
    { q: "Di en inglés: «dos perros».", sol: "Two dogs." },
    { q: "Juega a I spy con un color en casa.", sol: "Por ejemplo: I spy something green!" },
  ],
  quiz: [
    { q: "«Red» es…", o: ["rojo", "azul", "verde"], a: 0, e: "Red = rojo." },
    { q: "«Yellow» es…", o: ["negro", "amarillo", "rosa"], a: 1, e: "Yellow = amarillo." },
    { q: "«Verde» en inglés es…", o: ["green", "brown", "blue"], a: 0, e: "Green = verde." },
    { q: "«Three» es el número…", o: ["2", "3", "8"], a: 1, e: "Three = 3." },
    { q: "El número 10 en inglés es…", o: ["two", "ten", "nine"], a: 1, e: "Ten = 10." },
    { q: "«What colour is it?» significa…", o: ["¿Cuántos hay?", "¿De qué color es?", "¿Cómo te llamas?"], a: 1, e: "¿De qué color es?" },
    { q: "«How many?» significa…", o: ["¿Cuántos?", "¿Qué color?", "¿Cómo estás?"], a: 0, e: "How many = ¿cuántos?" },
    { q: "«Una pelota roja» se dice…", o: ["a ball red", "a red ball", "red a ball"], a: 1, e: "El color va antes: a red ball." },
    { q: "«Five cats» son…", o: ["cinco gatos", "cuatro gatos", "un gato"], a: 0, e: "Five = 5." },
    { q: "«Pink» es…", o: ["rosa", "morado", "marrón"], a: 0, e: "Pink = rosa." },
  ],
  examen: [
    { q: "El sol es…", o: ["yellow", "black", "purple"], a: 0, e: "Yellow." },
    { q: "«Eight» es…", o: ["8", "6", "4"], a: 0, e: "Eight = 8." },
    { q: "Contesta: What colour is the sea?", o: ["It's blue.", "It's ten.", "It's pink."], a: 0, e: "El mar es azul: blue." },
    { q: "«Tres coches» se dice…", o: ["three car", "three cars", "tree cars"], a: 1, e: "Más de uno lleva s: cars." },
  ],
  feynman: ["Cómo se dicen los colores en inglés", "Cómo se cuenta del 1 al 10", "Por qué decimos red ball y no ball red"],
  mapa: mapa("COLOURS AND NUMBERS", "var(--pri)", [
    ["Colours", "red, blue, yellow, green…", R],
    ["Numbers", "one, two, three… ten", A],
    ["What colour is it?", "It's red!", V],
    ["How many?", "Three cats!", N],
  ], 230),
  tarjetas: [
    ["rojo", "red"],
    ["azul", "blue"],
    ["amarillo", "yellow"],
    ["verde", "green"],
    ["1, 2, 3", "one, two, three"],
    ["4, 5, 6", "four, five, six"],
    ["7, 8, 9, 10", "seven, eight, nine, ten"],
    ["¿De qué color es?", "What colour is it?"],
  ],
  familias: [
    "Contad en inglés al subir escaleras o al poner la mesa: one, two, three…",
    "Al vestiros, decid el color de la ropa en inglés: a blue T-shirt.",
    "Jugad a I spy en el coche o en el parque, con colores.",
    "Cantad juntos las canciones del tema: repetir ayuda mucho a recordar.",
  ],
  profesores: PROF("Lengua extranjera: léxico básico de colores y números del 1 al 10; preguntas sencillas What colour…? y How many…?", ["Canción de colores con tarjetas que se levantan.", "I spy con objetos del aula.", "Contar objetos reales y responder How many?"]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
