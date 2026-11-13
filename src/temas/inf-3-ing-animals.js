// Infantil 3 años · Primeros pasos en inglés: Animals. Frases en inglés con una ayuda en español para el adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, mural, vid } = require("./_peque");
const { R, A, V, N, escena, suenan, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "3-anos",
  titulo: "Animals",
  minutos: 10,
  objetivos: ["Say six animals: dog, cat, duck, cow, pig, fish", "Make the animal sounds in English", "Answer: What is it?"],
  claves: ["animals", "dog", "cat", "duck", "cow", "pig", "fish"],
  pregunta: {
    texto: "¿Qué animal te gusta más? ¿Sabes cómo se dice en inglés?",
    respuesta: "El perro es <mark>dog</mark> y el gato es <mark>cat</mark>. ¡Vamos a conocer más <b>animals</b>!",
  },
  bloques: [
    {
      html: `<h3>Dog and cat</h3><p>This is a <mark>dog</mark>. This is a <mark>cat</mark>.</p><p>I like dogs! I like cats! (Perro es <b>dog</b> y gato es <b>cat</b>.)</p><p>The dog says woof! The cat says meow! (El perro y el gato hacen sonidos distintos.)</p>`,
      svg: vocab("Dog perro y cat gato", [["perro", "dog", "perro", A], ["gato", "cat", "gato", N]]),
    },
    {
      html: `<h3>On the farm</h3><p>On the farm: a <mark>cow</mark>, a <mark>pig</mark> and a <mark>duck</mark>.</p><p>Hello, cow! Hello, pig! Hello, duck! (Vaca es <b>cow</b>, cerdo es <b>pig</b> y pato es <b>duck</b>.)</p>`,
      svg: vocab("En la granja: cow vaca, pig cerdo, duck pato", [["vaca", "cow", "vaca", A], ["cerdo", "pig", "cerdo", R], ["pato", "duck", "pato", N]], { titulo: "On the farm" }),
    },
    {
      html: `<h3>In the water</h3><p>This is a <mark>fish</mark>. The fish swims. Swim, swim, swim!</p><p>(Pez es <b>fish</b>. Movemos la mano como un pez que nada.)</p><p>Swim like a fish! (Nadamos como un pez moviendo los brazos.)</p>`,
      svg: escena("Un pez nada en el agua: fish", [["svg", `<path d="M0 120 q 32 -14 65 0 t 65 0 t 65 0 t 65 0 V180 H0z" fill="var(--water)" opacity=".35"/>`], ["pez", 90, 80, 2.2], ["pez", 190, 120, 1.2], ["t", 130, 164, "fish", A, 28]]),
    },
    {
      html: `<h3>What do they say?</h3><p>The dog says <mark>woof!</mark> The cow says <mark>moo!</mark></p><p>The duck says quack! The cat says meow! (En inglés los animales suenan distinto.)</p><p>The pig says oink! (El cerdo dice oink. ¡Haz el sonido!)</p>`,
      svg: suenan("Sonidos: dog woof, cow moo, duck quack", [["perro", "woof!", A], ["vaca", "moo!", R], ["pato", "quack!", V]]),
    },
    {
      html: `<h3>What is it for?</h3><p>Animals are in <mark>stories and songs</mark>.</p><p>Now you know their names in English! (Así entenderemos cuentos y canciones en inglés.)</p><p>What is your favourite animal? (¿Cuál es tu animal favorito?)</p>`,
      svg: vocab("Los animales salen en cuentos y canciones", [["libro", "stories", "cuentos", A], ["guitarra", "songs", "canciones", R]]),
    },
    {
      html: `<h3>Let's play!</h3><p>The adult makes a sound: <mark>Moo!</mark> What is it?</p><p>It's a cow! Now you make a sound! (Adivinamos el animal por su sonido.)</p><p>Oink! What is it? It's a pig! (Ahora otro animal.)</p>`,
      svg: charla("Juego: Moo! What is it? It's a cow!", [["mama", "Moo! What is it?", R], ["nino", "It's a cow!", A]]),
    },
  ],
  figura: {
    titulo: "Animals",
    svg: mural("Animals: dog, cat, cow, pig, duck, fish", [["perro", "dog", "perro", A], ["gato", "cat", "gato", N], ["vaca", "cow", "vaca", V], ["cerdo", "pig", "cerdo", R], ["pato", "duck", "pato", N], ["pez", "fish", "pez", A]], "Animals"),
  },
  video: { ...vid("t99ULJjCsaM", "The Animal Sounds Song", "KidsTV123", 473952755), busqueda: "animal sounds song toddlers english" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Look at a picture. What is it?",
      pasos: ["It has four legs.", "It says woof!"],
      resultado: "«It's a dog!»" },
    { enunciado: "What does the duck say?",
      pasos: ["Walk like a duck.", "Make the sound."],
      resultado: "«Quack, quack!»" },
  ],
  errores: [
    "Decir que el perro dice guau en inglés: dice woof.",
    "Confundir cow y cat: cow es la vaca grande.",
    "Leer duck como «duc»: se dice «dak».",
  ],
  ejercicios: [
    { q: "Say: dog, cat.", sol: "Para la familia: señalad dibujos o peluches." },
    { q: "Make the cow sound: moo!", sol: "Y el resto: woof, meow, quack, oink." },
    { q: "Walk like a duck.", sol: "Quack, quack mientras camina." },
    { q: "Swim like a fish.", sol: "Mano que ondula: fish, fish!" },
    { q: "Play What is it? with sounds.", sol: "Haced un sonido y que adivine el animal en inglés." },
    { q: "Draw your favourite animal.", sol: "Preguntad: What is it? y que conteste en inglés." },
  ],
  quiz: [
    { q: "«Dog» es…", o: ["perro", "gato", "pato"], a: 0, e: "Dog = perro." },
    { q: "«Cat» es…", o: ["vaca", "gato", "pez"], a: 1, e: "Cat = gato." },
    { q: "«Cow» es…", o: ["vaca", "cerdo", "perro"], a: 0, e: "Cow = vaca." },
    { q: "«Fish» es…", o: ["pez", "pato", "pájaro"], a: 0, e: "Fish = pez." },
    { q: "The duck says…", o: ["quack!", "moo!", "woof!"], a: 0, e: "Quack!" },
    { q: "The dog says…", o: ["woof!", "meow!", "moo!"], a: 0, e: "Woof!" },
  ],
  examen: [
    { q: "«Pig» es…", o: ["cerdo", "pez", "perro"], a: 0, e: "Pig = cerdo." },
    { q: "The cow says…", o: ["moo!", "quack!", "meow!"], a: 0, e: "Moo!" },
    { q: "«What is it?» pregunta…", o: ["¿qué es?", "¿cómo estás?", "¿cuántos?"], a: 0, e: "What is it? = ¿qué es?" },
  ],
  feynman: ["Dog, cat, cow, pig, duck, fish", "Woof, moo, quack", "What is it? It's a…"],
  mapa: mapa("ANIMALS", "var(--pri)", [
    ["At home", "dog, cat", A],
    ["On the farm", "cow, pig, duck", R],
    ["In the water", "fish", V],
    ["Sounds", "woof, moo, quack", N],
  ], 230),
  tarjetas: [
    ["perro", "dog"],
    ["gato", "cat"],
    ["vaca", "cow"],
    ["cerdo", "pig"],
    ["pato", "duck"],
    ["pez", "fish"],
  ],
  familias: [
    "Nombrad en inglés los animales que veáis en la calle o en cuentos.",
    "Haced los sonidos en inglés y en español: ¿cuál es más divertido?",
    "Jugad a What is it? con peluches dentro de una bolsa.",
    "Cantad la canción de los sonidos del vídeo.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: léxico de animales cercanos y sus onomatopeyas, pregunta What is it?", ["Bolsa misteriosa con animales de juguete.", "Imitar animales al oír su nombre.", "Canción de sonidos de animales."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
