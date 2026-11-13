// Infantil 3 años · Primeros pasos en inglés: Hello and goodbye. Frases en inglés con una ayuda en español para el adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, mural, vid } = require("./_peque");
const { R, A, V, N, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "3-anos",
  titulo: "Hello and goodbye",
  minutos: 10,
  objetivos: ["Say hello when we arrive", "Say goodbye when we leave", "Wave the hand: hello and bye-bye"],
  claves: ["hello", "hi", "goodbye", "bye-bye", "good morning", "wave"],
  pregunta: {
    texto: "¿Qué dices al llegar al cole? ¿Y al irte? ¿Sabes decirlo en inglés?",
    respuesta: "Al llegar: <mark>Hello!</mark> Al irte: <mark>Goodbye!</mark> ¡Y saludamos con la mano!",
  },
  bloques: [
    {
      html: `<h3>Hello!</h3><p>When we arrive, we say <mark>Hello!</mark></p><p>Hello, teacher! Hello, friends! (Al llegar decimos <b>hello</b>, que es «hola».)</p><p>Say it with a big smile: Hello! Hello! (Saludamos con una sonrisa grande.)</p>`,
      svg: charla("Un niño dice Hello y la maestra contesta Hello", [["nino", "Hello!", A], ["mama", "Hello, Leo!", R]]),
    },
    {
      html: `<h3>Wave your hand</h3><p>Say hello and <mark>wave your hand</mark>.</p><p>Hello, hello! Wave, wave, wave! (Movemos la mano para saludar mientras decimos hello.)</p><p>Wave to Mummy! Wave to Daddy! (Saludamos con la mano a cada uno.)</p>`,
      svg: escena("Una niña saluda con la mano y dice hello", [["nina", 90, 96, 2.2], ["mano", 170, 70, 1.6], ["t", 130, 162, "Wave your hand!", A, 22]]),
    },
    {
      html: `<h3>Good morning!</h3><p>In the morning we say <mark>Good morning!</mark></p><p>The sun is up. Good morning, Mummy! Good morning, Daddy! (Por la mañana decimos «buenos días»: <b>good morning</b>.)</p><p>Good morning, sun! (Hasta podemos dar los buenos días al sol.)</p>`,
      svg: vocab("Good morning: por la mañana, con el sol", [["sol", "Good morning!", "buenos días", N]]),
    },
    {
      html: `<h3>Goodbye!</h3><p>When we go home, we say <mark>Goodbye!</mark></p><p>Goodbye, teacher! Bye-bye, friends! See you tomorrow! (Al irnos decimos <b>goodbye</b> o <b>bye-bye</b>, «adiós».)</p><p>Wave your hand: bye-bye! (Y movemos la mano.)</p>`,
      svg: charla("Una niña dice Goodbye y un niño contesta Bye-bye", [["nina", "Goodbye!", R], ["nino", "Bye-bye!", A]]),
    },
    {
      html: `<h3>What is it for?</h3><p>Hello and goodbye make <mark>friends happy</mark>.</p><p>We say them at school, at home and in the park. (Saludar y despedirse es de buena educación, ¡también en inglés!)</p>`,
      svg: vocab("Saludamos en el cole, en casa y en el parque", [["escuela", "school", "el cole", A], ["casa", "home", "casa", R], ["arbol", "park", "el parque", V]]),
    },
    {
      html: `<h3>Let's play!</h3><p>Stand up and <mark>sing</mark>: Hello, hello, hello!</p><p>Sit down and sing: Goodbye, goodbye! (Jugamos: de pie decimos hello y sentados goodbye.)</p><p>Stand up: Hello! Sit down: Goodbye! (¡Cada vez más rápido!)</p>`,
      svg: escena("Juego: de pie hello, sentados goodbye", [["nino", 70, 74, 1.8], ["t", 70, 140, "Hello!", A, 26], ["nina", 190, 74, 1.8], ["t", 190, 140, "Goodbye!", R, 26]], { titulo: "Stand up · Sit down" }),
    },
  ],
  figura: {
    titulo: "Hello and goodbye",
    svg: mural("Hello hola, good morning buenos días, goodbye adiós, bye-bye adiós", [["nino", "Hello!", "hola", A], ["sol", "Good morning!", "buenos días", N], ["nina", "Goodbye!", "adiós", R], ["mano", "Bye-bye!", "adiós con la mano", V]], "Hello and goodbye"),
  },
  video: { ...vid("PraN5ZoSjiY", "Bye Bye Goodbye | Goodbye Song for Kids", "Super Simple Songs - Kids Songs", 60313912), busqueda: "hello goodbye song for kids" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "You arrive at school. What do you say?",
      pasos: ["Look at the teacher.", "Wave your hand.", "Say hello."],
      resultado: "«Hello, teacher!»" },
    { enunciado: "You go home. What do you say?",
      pasos: ["Look at your friends.", "Wave your hand."],
      resultado: "«Goodbye! Bye-bye!»" },
  ],
  errores: [
    "Decir goodbye al llegar: al llegar es hello.",
    "Leer hello con h muda: la h suena suave, como «jelou».",
    "Saludar sin mirar: miramos a la persona.",
  ],
  ejercicios: [
    { q: "Say hello to your family.", sol: "Para la familia: contestadle también en inglés, Hello!" },
    { q: "Wave your hand and say bye-bye.", sol: "Hacedlo al salir de casa o al colgar una videollamada." },
    { q: "Say good morning when you wake up.", sol: "Good morning! cada mañana durante una semana." },
    { q: "Say hello to your teddy.", sol: "Con muñecos se atreven más a hablar." },
    { q: "Sing the goodbye song.", sol: "Cantad la canción del vídeo juntos." },
    { q: "Play stand up, sit down.", sol: "De pie decimos hello; sentados, goodbye." },
  ],
  quiz: [
    { q: "Al llegar decimos…", o: ["Hello!", "Goodbye!", "Good night!"], a: 0, e: "Hello = hola." },
    { q: "Al irnos decimos…", o: ["Hello!", "Goodbye!", "Good morning!"], a: 1, e: "Goodbye = adiós." },
    { q: "Por la mañana decimos…", o: ["Good morning!", "Bye-bye!", "Hello, moon!"], a: 0, e: "Good morning = buenos días." },
    { q: "«Bye-bye» es…", o: ["adiós", "hola", "gracias"], a: 0, e: "Bye-bye = adiós." },
    { q: "Al saludar movemos…", o: ["la mano", "los pies", "la nariz"], a: 0, e: "Wave your hand!" },
    { q: "«Hello, teacher!» se dice…", o: ["al llegar", "al irse", "al dormir"], a: 0, e: "Al llegar al cole." },
  ],
  examen: [
    { q: "Hello significa…", o: ["hola", "adiós", "sí"], a: 0, e: "Hello = hola." },
    { q: "Goodbye significa…", o: ["adiós", "hola", "agua"], a: 0, e: "Goodbye = adiós." },
    { q: "Wave your hand es…", o: ["mover la mano", "saltar", "dormir"], a: 0, e: "Saludar con la mano." },
  ],
  feynman: ["Hello when we arrive", "Goodbye when we leave", "Good morning in the morning"],
  mapa: mapa("HELLO!", "var(--pri)", [
    ["Hello!", "hola", A],
    ["Good morning!", "buenos días", N],
    ["Goodbye!", "adiós", R],
    ["Bye-bye!", "adiós con la mano", V],
  ], 230),
  tarjetas: [
    ["hola", "Hello!"],
    ["adiós", "Goodbye!"],
    ["buenos días", "Good morning!"],
    ["adiós (con la mano)", "Bye-bye!"],
    ["saluda con la mano", "Wave your hand"],
    ["Hola, maestra", "Hello, teacher!"],
  ],
  familias: [
    "Saludad en inglés al despertar y al llegar a casa: Hello! Good morning!",
    "Despedíos con bye-bye y la mano al salir de casa.",
    "No corrijáis la pronunciación: basta con repetir bien vosotros.",
    "Cantad juntos la canción del vídeo.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: saludos y despedidas, rutinas orales, gestos que acompañan al lenguaje", ["Rutina de hello song en la asamblea.", "Títere que solo habla inglés.", "Goodbye song al acabar la sesión."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
