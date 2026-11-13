// Infantil 5 años · Primeros pasos en inglés: Animals and their sounds. Inglés oral con ayuda en español.
const { tema, mapa, svg, rot, big, ic, nino, vocab, charla, mural, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

// Animal con bocadillo de su sonido.
const dice = (a, x, y, son, c) => `${ic(a, x, y, 1.3)}<rect x="${x - 40}" y="${y - 66}" width="80" height="28" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${rot(x, y - 46, son, { color: c, size: 16 })}`;

module.exports = tema({
  materia: "Primeros pasos en inglés",
  titulo: "Animals and their sounds",
  objetivos: ["Nombrar animales de granja y de casa en inglés", "Imitar sus sonidos en inglés", "Decir The cow says moo"],
  claves: ["dog", "cat", "cow", "duck", "pig", "sheep", "horse", "lion", "says"],
  pregunta: {
    texto: "¿Cómo hace el perro? ¿Y sabías que en inglés los animales «hablan» un poco distinto?",
    respuesta: "En español el perro hace «guau». En inglés, el <mark>dog</mark> dice <b>woof woof!</b>",
  },
  bloques: [
    {
      html: `<h3>Dog and cat</h3><p>El perro es <mark>dog</mark> y dice <b>woof woof!</b></p><p>El gato es <mark>cat</mark> y dice <b>meow!</b></p><p>¡Ladra y maúlla en inglés!</p><p>Fíjate: en inglés suenan un poco distinto. ¿Tienes un pet en casa?</p>`,
      svg: svg("El perro dice woof woof y el gato dice meow", `${dice("perro", 75, 120, "woof!", N)}${dice("gato", 185, 120, "meow!", A)}${rot(75, 166, "dog", { color: N, size: 20 })}${rot(185, 166, "cat", { color: A, size: 20 })}`),
    },
    {
      html: `<h3>On the farm</h3><p>En la granja, la vaca es <mark>cow</mark>: <b>moo!</b></p><p>El cerdo es <mark>pig</mark>: <b>oink oink!</b></p><p>El pato es <mark>duck</mark>: <b>quack quack!</b></p><p>¡Haz los sonidos con la voz!</p>`,
      svg: svg("Cow moo, pig oink y duck quack", `${dice("vaca", 48, 120, "moo!", A)}${dice("cerdo", 130, 120, "oink!", R)}${dice("pato", 212, 120, "quack!", M)}${rot(48, 166, "cow", { color: A, size: 18 })}${rot(130, 166, "pig", { color: R, size: 18 })}${rot(212, 166, "duck", { color: M, size: 18 })}`),
    },
    {
      html: `<h3>Sheep and horse</h3><p>La oveja es <mark>sheep</mark> y dice <b>baa!</b></p><p>El caballo es <mark>horse</mark> y dice <b>neigh!</b></p><p>¡Galopa por la clase!</p><p>La oveja nos da lana. El caballo corre muy rápido por el campo.</p>`,
      svg: svg("Sheep baa y horse neigh", `${dice("oveja", 75, 120, "baa!", V)}${dice("caballo", 185, 120, "neigh!", N)}${rot(75, 166, "sheep", { color: V, size: 20 })}${rot(185, 166, "horse", { color: N, size: 20 })}`),
    },
    {
      html: `<h3>The cow says moo</h3><p>Para decir el sonido usamos <mark>says</mark>: «dice».</p><p><b>The cow says moo.</b> La vaca dice mu.</p><p><b>The lion says roar!</b> El león ruge.</p><p>Prueba con otros animales.</p>`,
      svg: charla("Diálogo: What does the lion say? The lion says roar!", [["nina", "What does the lion say?", A], ["leon", "The lion says ROAR!", R]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con los animales cantamos <mark>canciones</mark> muy famosas en inglés, como <i>Old MacDonald had a farm</i>.</p><p>Y entendemos los cuentos de animales en inglés.</p><p>¡Cántala con tu familia!</p>`,
      svg: vocab("Animales de la canción de la granja", [["vaca", "cow", "moo", A], ["cerdo", "pig", "oink", R], ["pato", "duck", "quack", M], ["oveja", "sheep", "baa", V]], { titulo: "Old MacDonald had a farm…" }),
    },
    {
      html: `<h3>Juego: Guess the animal</h3><p>Una persona hace un sonido en inglés: <mark>quack quack!</mark></p><p>Los demás adivinan: <b>It's a duck!</b></p><p>¡Luego cambiamos!</p><p>Puedes hacer el sonido flojito o muy fuerte. ¡Quien adivina, hace el siguiente!</p>`,
      svg: svg("Un niño dice quack quack y otro adivina: it's a duck", `${nino(60, 156, { c: A, pose: "palmas" })}${rot(60, 40, "Quack quack!", { color: A, size: 16 })}${nino(200, 156, { c: R, pose: "arriba", nina: true })}${rot(200, 40, "It's a duck!", { color: R, size: 16 })}${ic("pato", 130, 110, 1.3)}`),
    },
  ],
  figura: {
    titulo: "Animals and their sounds",
    svg: mural("Ocho animales y sus sonidos en inglés", [["perro", "dog", "woof woof!", N], ["gato", "cat", "meow!", A], ["vaca", "cow", "moo!", A], ["cerdo", "pig", "oink oink!", R], ["pato", "duck", "quack quack!", M], ["oveja", "sheep", "baa!", V], ["caballo", "horse", "neigh!", N], ["leon", "lion", "roar!", R]], "What does the animal say?"),
  },
  video: { ...vid("BQ-UDSJ-cRQ", "The Animal Sounds Song (new version)", "KidsTV123", 32565821), busqueda: "animal sounds song for kids" },
  ejemplos: [
    { enunciado: "What does the dog say?", pasos: ["Dog es perro.", "En inglés, el perro dice woof woof."], resultado: "The dog says woof woof!" },
    { enunciado: "Oímos «baa». What animal is it?", pasos: ["Baa es el sonido de la oveja.", "Oveja en inglés es sheep."], resultado: "It's a sheep!" },
  ],
  errores: [
    "Decir «guau» en inglés: el dog dice woof.",
    "Confundir sheep (oveja) y pig (cerdo).",
    "Olvidar says: The cow says moo.",
  ],
  ejercicios: [
    { q: "Imita a cinco animales en inglés.", sol: "Woof, meow, moo, oink, quack. Nota para la familia: adivinad cuál es." },
    { q: "Une cada animal con su sonido: cow, duck, sheep.", sol: "Cow-moo, duck-quack, sheep-baa." },
    { q: "Canta Old MacDonald had a farm.", sol: "Nota: cada estrofa un animal distinto." },
    { q: "Muévete como un horse y como un duck.", sol: "Galopar y andar como un pato." },
    { q: "Dibuja tu animal favorito y di su nombre en inglés.", sol: "Respuesta libre." },
    { q: "Escucha el vídeo y repite cada sonido.", sol: "Nota: parad el vídeo para repetir." },
  ],
  quiz: [
    { q: "Dog es…", o: ["perro", "gato", "pato"], a: 0, e: "Dog = perro." },
    { q: "¿Qué dice el cat?", o: ["woof", "meow", "moo"], a: 1, e: "The cat says meow." },
    { q: "Cow es…", o: ["vaca", "cerdo", "caballo"], a: 0, e: "Cow = vaca: moo." },
    { q: "Quack quack es el…", o: ["duck", "pig", "lion"], a: 0, e: "Duck = pato." },
    { q: "Sheep es…", o: ["oveja", "oso", "rana"], a: 0, e: "Sheep = oveja: baa." },
    { q: "The lion says…", o: ["roar!", "oink!", "baa!"], a: 0, e: "El león ruge: roar." },
  ],
  examen: [
    { q: "Pig es…", o: ["cerdo", "perro", "pájaro"], a: 0, e: "Pig = cerdo: oink." },
    { q: "Neigh es el sonido del…", o: ["horse", "cat", "duck"], a: 0, e: "Horse = caballo." },
    { q: "Says significa…", o: ["dice", "come", "corre"], a: 0, e: "The cow says moo = la vaca dice mu." },
  ],
  feynman: ["El nombre de seis animales en inglés", "Sus sonidos en inglés", "Cómo decir The cow says moo"],
  mapa: mapa("ANIMALS", "var(--pri)", [
    ["Pets", "dog woof · cat meow", N],
    ["Farm", "cow moo · pig oink · duck quack", A],
    ["More", "sheep baa · horse neigh", V],
    ["Says", "The lion says roar!", R],
  ], 250),
  tarjetas: [
    ["Dog", "Woof woof!"],
    ["Cat", "Meow!"],
    ["Cow", "Moo!"],
    ["Duck", "Quack quack!"],
    ["Pig", "Oink oink!"],
    ["Sheep", "Baa!"],
  ],
  familias: [
    "Jugad a adivinar animales por su sonido en inglés.",
    "Cantad Old MacDonald had a farm en el coche o en el baño.",
    "En la granja escuela o en el campo, decid los animales en inglés.",
    "Leed un cuento de animales y haced los sonidos en inglés.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: vocabulario de animales, onomatopeyas en inglés y estructura The… says…", ["Canciones tradicionales como Old MacDonald.", "Juego de adivinar el animal por su sonido.", "Títeres de animales para dramatizar diálogos."]),
});
