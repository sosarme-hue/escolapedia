// Infantil 3 años · Primeros pasos en inglés: Numbers 1, 2, 3. Frases en inglés con una ayuda en español para el adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, fichas, mural, vid } = require("./_peque");
const { R, A, V, N, S, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "3-anos",
  titulo: "Numbers 1, 2, 3",
  minutos: 10,
  objetivos: ["Count to three in English: one, two, three", "Show 1, 2 or 3 fingers", "Answer: How many?"],
  claves: ["one", "two", "three", "count", "fingers", "how many?"],
  pregunta: {
    texto: "¿Cuántos años tienes? ¡Enséñalo con los dedos! ¿Sabes decirlo en inglés?",
    respuesta: "Tienes tres años: <mark>three</mark>. ¡Vamos a contar en inglés: one, two, three!",
  },
  bloques: [
    {
      html: `<h3>One</h3><p><mark>One</mark> sun. One finger. One!</p><p>Show me one finger! (Uno se dice <b>one</b>, «uan». Levantamos un dedo.)</p><p>One nose! Touch your nose: one! (Tocamos nuestra nariz: solo hay una.)</p>`,
      svg: vocab("One: un sol", [["sol", "one", "uno", S, 1]], { titulo: "1" }),
    },
    {
      html: `<h3>Two</h3><p><mark>Two</mark> eyes. Two hands. Two!</p><p>Show me two fingers! (Dos se dice <b>two</b>, «tu». Tenemos dos ojos y dos manos.)</p><p>Two ears! Touch your ears: one, two! (Tocamos las orejas y contamos.)</p>`,
      svg: vocab("Two: dos ojos", [["ojo", "two", "dos", A, 2]], { titulo: "2" }),
    },
    {
      html: `<h3>Three</h3><p><mark>Three</mark> balls. Three! I am three!</p><p>Show me three fingers! (Tres se dice <b>three</b>, «zri». ¿Tienes tres años?)</p><p>One, two, three balls! (Contamos las pelotas tocándolas una a una.)</p>`,
      svg: vocab("Three: tres pelotas", [["pelota", "three", "tres", R, 3]], { titulo: "3" }),
    },
    {
      html: `<h3>Let's count!</h3><p>Count the ducks with me: <mark>one, two, three!</mark></p><p>Three ducks! (Contamos tocando cada pato con el dedo.)</p><p>Now count the cows: one, two, three! (Ahora contamos otras cosas de casa.)</p>`,
      svg: escena("Contamos tres patos: one, two, three", [["pato", 50, 80, 1.5], ["pato", 130, 80, 1.5], ["pato", 210, 80, 1.5], ["t", 50, 140, "one", R, 24], ["t", 130, 140, "two", A, 24], ["t", 210, 140, "three", V, 24]]),
    },
    {
      html: `<h3>What is it for?</h3><p>Numbers tell us <mark>how many</mark>.</p><p>How many cookies? Two! How old are you? Three! (Los números sirven para contar y decir la edad.)</p><p>Show me three fingers! (Enseñamos los dedos al decir la edad.)</p>`,
      svg: escena("Cuántos años tienes: three, con una tarta de tres velas", [["nina", 66, 82, 2], ["t", 66, 150, "I am three!", R, 20], ["svg", `<rect x="160" y="100" width="76" height="40" rx="6" fill="var(--rosa, #f08fb0)"/><rect x="160" y="96" width="76" height="10" rx="4" fill="#fff"/>${[176, 198, 220].map((x) => `<rect x="${x - 3}" y="74" width="6" height="22" fill="var(--pen)"/><path d="M${x} 62 q5 7 0 12 q-5 -5 0 -12" fill="var(--sun)"/>`).join("")}`], ["t", 198, 162, "3", A, 22]]),
    },
    {
      html: `<h3>Let's play!</h3><p>The adult says a number: <mark>Two!</mark></p><p>Jump two times! Now three! (El adulto dice un número en inglés y el niño salta esas veces.)</p><p>Jump, jump, jump! Three jumps! (Contamos en voz alta cada salto.)</p>`,
      svg: fichas("Juego: salta one, two o three veces", [["1", R], ["2", A], ["3", V]], { titulo: "Jump!", nota: "one · two · three", grande: true }),
    },
  ],
  figura: {
    titulo: "Numbers 1, 2, 3",
    svg: mural("Numbers: one uno, two dos, three tres", [["sol", "one", "1 · uno", S], ["ojo", "two", "2 · dos", A], ["pelota", "three", "3 · tres", R]], "Numbers 1, 2, 3"),
  },
  video: { ...vid("fZ9WiuJPnNA", "Sesame Street: Feist sings 1,2,3,4", "Sesame Street", 1027228656), busqueda: "counting song one two three kids" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "How many hands?",
      pasos: ["Show your hands.", "Count: one, two."],
      resultado: "«Two hands!»" },
    { enunciado: "How old are you?",
      pasos: ["Show your fingers.", "Count: one, two, three."],
      resultado: "«I am three!»" },
  ],
  errores: [
    "Decir «uno, two, three»: todo en inglés, one, two, three.",
    "Leer three como «tres»: se dice «zri».",
    "Contar sin tocar: tocamos cada cosa al contarla.",
  ],
  ejercicios: [
    { q: "Count your fingers: one, two, three.", sol: "Para la familia: tocad cada dedo al contar." },
    { q: "Show me two fingers.", sol: "Pedid uno, dos o tres dedos en inglés." },
    { q: "Count the stairs: one, two, three.", sol: "Al subir escaleras, contad tres escalones en inglés." },
    { q: "Jump three times.", sol: "Contad los saltos en voz alta." },
    { q: "How old are you?", sol: "I am three! enseñando tres dedos." },
    { q: "Put two toys in the box.", sol: "Pedid un número de juguetes en inglés." },
  ],
  quiz: [
    { q: "«One» es…", o: ["uno", "dos", "tres"], a: 0, e: "One = 1." },
    { q: "«Two» es…", o: ["uno", "dos", "tres"], a: 1, e: "Two = 2." },
    { q: "«Three» es…", o: ["uno", "dos", "tres"], a: 2, e: "Three = 3." },
    { q: "How many eyes?", o: ["two", "one", "three"], a: 0, e: "Two eyes: dos ojos." },
    { q: "Tres se dice…", o: ["three", "tree", "two"], a: 0, e: "Three." },
    { q: "«How many?» pregunta…", o: ["cuántos", "qué color", "hola"], a: 0, e: "How many = cuántos." },
  ],
  examen: [
    { q: "One, two…", o: ["three", "four", "one"], a: 0, e: "One, two, three." },
    { q: "How many suns in the sky?", o: ["one", "two", "three"], a: 0, e: "One sun." },
    { q: "I am three es…", o: ["tengo tres años", "tengo un perro", "hola"], a: 0, e: "Tengo tres años." },
  ],
  feynman: ["One, two, three", "How many?", "I am three!"],
  mapa: mapa("1 · 2 · 3", "var(--pri)", [
    ["One", "1 · uno", S],
    ["Two", "2 · dos", A],
    ["Three", "3 · tres", R],
    ["How many?", "¿cuántos?", V],
  ], 220),
  tarjetas: [
    ["uno · 1", "one"],
    ["dos · 2", "two"],
    ["tres · 3", "three"],
    ["¿cuántos?", "How many?"],
    ["Tengo tres años", "I am three!"],
    ["dos manos", "two hands"],
  ],
  familias: [
    "Contad en inglés las escaleras, los botones o las galletas.",
    "Preguntad How old are you? y que conteste con los dedos.",
    "Cantad la canción del vídeo contando con los dedos.",
    "Jugad a saltar o aplaudir el número que digáis en inglés.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: números del 1 al 3, conteo con correspondencia, respuesta física a órdenes", ["Contar objetos de la asamblea en inglés.", "Jump/clap + number.", "Canción de los dedos."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
