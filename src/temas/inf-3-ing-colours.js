// Infantil 3 años · Primeros pasos en inglés: Colours. Frases en inglés con una ayuda en español para el adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, muestras, mural, vid } = require("./_peque");
const { R, A, V, N, S, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "3-anos",
  titulo: "Colours",
  minutos: 10,
  objetivos: ["Say four colours: red, yellow, blue, green", "Point to a colour when we hear it", "Answer: What colour is it?"],
  claves: ["red", "yellow", "blue", "green", "colour", "rainbow"],
  pregunta: {
    texto: "¿De qué color es el sol? ¿Sabes decirlo en inglés?",
    respuesta: "El sol es amarillo: <mark>yellow</mark>. ¡Vamos a aprender los colores en inglés!",
  },
  bloques: [
    {
      html: `<h3>Red</h3><p>The apple is <mark>red</mark>. The heart is red.</p><p>Red, red, red! (Rojo se dice <b>red</b>. Busca algo rojo en casa.)</p><p>Point to something red! (Señala algo rojo: un juguete, una camiseta, una fresa.)</p>`,
      svg: vocab("Red: la manzana y el corazón son rojos", [["manzana", "red", "rojo", R], ["corazon", "red", "rojo", R]], { titulo: "Red" }),
    },
    {
      html: `<h3>Yellow</h3><p>The sun is <mark>yellow</mark>. The duck is yellow.</p><p>Yellow, yellow! (Amarillo se dice <b>yellow</b>, «iélou».)</p><p>The banana is yellow too! Point to something yellow! (El plátano también es amarillo. Señala algo amarillo en la habitación.)</p>`,
      svg: vocab("Yellow: el sol y el pato son amarillos", [["sol", "yellow", "amarillo", S], ["pato", "yellow", "amarillo", S]], { titulo: "Yellow" }),
    },
    {
      html: `<h3>Blue and green</h3><p>The fish is <mark>blue</mark>. The frog is <mark>green</mark>.</p><p>Blue like the sea. Green like the grass. (Azul es <b>blue</b> y verde es <b>green</b>.)</p><p>Point to something blue! (Señala algo azul. ¿Y algo verde?)</p>`,
      svg: vocab("Blue el pez azul, green la rana verde", [["pez", "blue", "azul", A], ["rana", "green", "verde", V]]),
    },
    {
      html: `<h3>The rainbow</h3><p>Look! A <mark>rainbow</mark>!</p><p>Red, yellow, green, blue… So many colours! (El arcoíris es <b>rainbow</b>. ¿Qué colores ves?)</p><p>Red, yellow, green, blue: we love colours! (Nombramos los colores del arcoíris señalándolos uno a uno.)</p>`,
      svg: escena("Un arcoíris grande con colores", [["arcoiris", 130, 92, 4.2], ["t", 130, 160, "rainbow", A, 26]]),
    },
    {
      html: `<h3>What is it for?</h3><p>With colours we can <mark>ask for things</mark>.</p><p>The red apple, please! The yellow banana, please! (Con los colores pedimos y describimos cosas.)</p><p>Say please! (Pedimos con por favor y el color: así todos nos entienden.)</p>`,
      svg: vocab("Pedimos cosas por su color: the red apple, the yellow banana", [["manzana", "red apple", "manzana roja", R], ["platano", "yellow banana", "plátano amarillo", S]]),
    },
    {
      html: `<h3>Let's play!</h3><p>The adult says: <mark>Touch something blue!</mark></p><p>Run and touch it! Now: touch something red! (El adulto dice un color y el niño corre a tocar algo de ese color.)</p>`,
      svg: muestras("Juego: touch something red, yellow, blue, green", [["", "red", "rojo", R], ["", "yellow", "amarillo", S], ["", "blue", "azul", A], ["", "green", "verde", V]], { titulo: "Touch something…" }),
    },
  ],
  figura: {
    titulo: "Colours",
    svg: mural("Colours: red rojo, yellow amarillo, blue azul, green verde", [["manzana", "red", "rojo", R], ["sol", "yellow", "amarillo", S], ["pez", "blue", "azul", A], ["rana", "green", "verde", V]], "Colours"),
  },
  video: { ...vid("jYAWf8Y91hA", "I See Something Blue | Colors Song for Children", "Super Simple Songs - Kids Songs", 168905268), busqueda: "colours song for toddlers" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "What colour is the apple?",
      pasos: ["Look at the apple.", "It is like a heart.", "Say the colour."],
      resultado: "«Red!»" },
    { enunciado: "Touch something green!",
      pasos: ["Look around.", "Find a plant or a frog toy.", "Touch it!"],
      resultado: "«Green!»" },
  ],
  errores: [
    "Decir «rojo» cuando el adulto pregunta en inglés: intentamos red.",
    "Leer yellow como se escribe: se dice «iélou».",
    "Confundir blue y green: blue como el mar, green como la hierba.",
  ],
  ejercicios: [
    { q: "Point to something red.", sol: "Para la familia: decid red al señalarlo juntos." },
    { q: "Find three yellow things.", sol: "Un plátano, una pelota, un lápiz amarillo…" },
    { q: "Colour a fish blue.", sol: "Dibujad un pez y que lo pinte; repetid blue." },
    { q: "Play touch something green.", sol: "Corred por casa a tocar cosas verdes." },
    { q: "Sort crayons by colour.", sol: "Agrupad ceras: red, yellow, blue, green." },
    { q: "Sing the colours song.", sol: "Cantad el vídeo y señalad cada color." },
  ],
  quiz: [
    { q: "«Red» es…", o: ["rojo", "azul", "verde"], a: 0, e: "Red = rojo." },
    { q: "«Yellow» es…", o: ["amarillo", "negro", "rojo"], a: 0, e: "Yellow = amarillo." },
    { q: "«Blue» es…", o: ["verde", "azul", "rosa"], a: 1, e: "Blue = azul." },
    { q: "«Green» es…", o: ["verde", "amarillo", "blanco"], a: 0, e: "Green = verde." },
    { q: "The sun is…", o: ["yellow", "blue", "green"], a: 0, e: "El sol es yellow." },
    { q: "«Rainbow» es…", o: ["arcoíris", "lluvia", "sol"], a: 0, e: "Rainbow = arcoíris." },
  ],
  examen: [
    { q: "The frog is…", o: ["green", "red", "yellow"], a: 0, e: "La rana es green." },
    { q: "The apple is…", o: ["red", "blue", "green"], a: 0, e: "La manzana es red." },
    { q: "The sea is…", o: ["blue", "yellow", "red"], a: 0, e: "El mar es blue." },
  ],
  feynman: ["Red, yellow, blue, green", "What colour is it?", "Touch something red!"],
  mapa: mapa("COLOURS", "var(--pri)", [
    ["Red", "rojo", R],
    ["Yellow", "amarillo", S],
    ["Blue", "azul", A],
    ["Green", "verde", V],
  ], 220),
  tarjetas: [
    ["rojo", "red"],
    ["amarillo", "yellow"],
    ["azul", "blue"],
    ["verde", "green"],
    ["arcoíris", "rainbow"],
    ["¿De qué color es?", "What colour is it?"],
  ],
  familias: [
    "Al vestirle, decid el color de la ropa en inglés: a red T-shirt.",
    "Jugad a touch something blue por casa.",
    "Clasificad juguetes o pinzas por colores nombrándolos en inglés.",
    "Cantad la canción del vídeo señalando cosas de cada color.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: léxico de colores básicos, comprensión de órdenes sencillas con respuesta física (TPR)", ["Juego touch something + colour.", "Clasificar objetos en aros de colores.", "Canción de colores con tarjetas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
