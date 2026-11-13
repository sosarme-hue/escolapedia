// Inglés 2º de Primaria: My toys. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, cuantos } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "My toys",
  minutos: 20,
  objetivos: ["Nombrar juguetes en inglés", "Decir qué juguete tienes y cuál es tu favorito: I've got a ball", "Contar juguetes y decir dónde están: in, on, under"],
  claves: ["toys", "ball", "doll", "car", "teddy bear", "train", "I've got…", "my favourite toy", "in / on / under"],
  pregunta: {
    texto: "¿Cuál es tu juguete favorito? ¿Sabes cómo se dice en inglés?",
    respuesta: "Los juguetes son <mark>toys</mark>. Puedes decir: <b>My favourite toy is my ball</b> (mi juguete favorito es mi pelota).",
  },
  bloques: [
    {
      html: `<h3>Toys: los juguetes</h3><p>Los juguetes en inglés se llaman <mark>toys</mark>.</p><p>La pelota es <b>ball</b>. El coche es <b>car</b>. La muñeca es <b>doll</b>. El osito de peluche es <b>teddy bear</b>.</p><p>Fíjate: <b>teddy bear</b> tiene la palabra <b>bear</b>, que significa oso. ¿Tienes alguno de estos juguetes en tu habitación? Señálalo y di su nombre.</p>`,
      svg: vocab("Juguetes: ball pelota, car coche, teddy bear osito, doll muñeca", [["pelota", "ball", "pelota", R], ["coche", "car", "coche", A], ["oso", "teddy bear", "osito", Ve], ["nina", "doll", "muñeca", N]], { titulo: "Toys" }),
    },
    {
      html: `<h3>More toys</h3><p>Hay muchos <mark>más juguetes</mark>.</p><p>El tren es <b>train</b>. El avión es <b>plane</b>. El barco es <b>boat</b>. El globo es <b>balloon</b>.</p><p>La cometa es <b>kite</b> y el robot es <b>robot</b>, ¡igual que en español! Los rompecabezas se llaman <b>puzzles</b>. Elige tres y dibújalos en tu cuaderno con su nombre.</p>`,
      svg: vocab("Más juguetes: train tren, plane avión, boat barco, balloon globo", [["tren", "train", "tren", A], ["avion", "plane", "avión", N], ["barco", "boat", "barco", Ve], ["globo", "balloon", "globo", R]], { titulo: "More toys" }),
      video: V("in3b"),
    },
    {
      html: `<h3>I've got a ball</h3><p>Para decir que tienes algo usamos <mark>I've got…</mark></p><p><b>I've got a ball</b> significa «tengo una pelota». <b>I've got a teddy bear</b> es «tengo un osito».</p><p>Si no lo tienes, dices <b>I haven't got a kite</b> (no tengo cometa). Pregunta a un amigo: <b>Have you got a train?</b> Él contesta <b>Yes, I have</b> o <b>No, I haven't</b>.</p>`,
      svg: charla("Have you got a train? Yes, I have! I've got a ball", [["nino", "Have you got a train?", A], ["nina", "Yes, I have!", R], ["nino", "I've got a ball!", A]]),
    },
    {
      html: `<h3>My favourite toy</h3><p>Tu juguete preferido es tu <mark>favourite toy</mark>.</p><p>Puedes decir: <b>My favourite toy is my car</b>. Y añadir cómo es: <b>It's red. It's small.</b></p><p>Así describes tu juguete con colores y tamaños. Recuerda: <b>big</b> es grande y <b>small</b> es pequeño. ¿Cómo es tu juguete favorito? Cuéntalo en inglés.</p>`,
      svg: charla("My favourite toy is my car. It's red. It's small", [["nina", "My favourite toy is my car.", R], ["coche", "It's red. It's small.", A]]),
    },
    {
      html: `<h3>One ball, two balls</h3><p>Si hay <mark>más de uno</mark>, en inglés añadimos una <b>s</b> al final.</p><p><b>One ball</b>, una pelota. <b>Two balls</b>, dos pelotas. <b>One car</b>, <b>three cars</b>.</p><p>Para preguntar cuántos hay decimos <b>How many?</b> Por ejemplo: <b>How many balls?</b> Y contestas con el número: <b>Three!</b> Cuenta tus juguetes en inglés.</p>`,
      svg: cuantos("Uno y muchos: one ball, three balls; one car, three cars", [["pelota", "one ball", "three balls"], ["coche", "one car", "three cars"]], { izq: "one", der: "three" }),
    },
    {
      html: `<h3>In, on, under</h3><p>¿Dónde está el juguete? Usamos <mark>tres palabras</mark> muy útiles.</p><p><b>In</b> es dentro: <b>The ball is in the box</b>. <b>On</b> es encima: <b>The doll is on the bed</b>.</p><p><b>Under</b> es debajo: <b>The car is under the chair</b>. Esconde un juguete y pregunta: <b>Where's the teddy?</b> Tu amigo lo busca y contesta.</p>`,
      svg: lista("Dónde está: in dentro, on encima, under debajo", [["in → dentro", A], ["on → encima", R], ["under → debajo", Ve]], { titulo: "Where's my toy?" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Algunas palabras de juguetes <mark>suenan distinto</mark> de como se escriben.</p><p><b>Toy</b> se dice «tói». <b>Doll</b> se dice «dol». <b>Plane</b> se dice «pléin».</p><p><b>Kite</b> se dice «káit». <b>Balloon</b> se dice «balún», con la fuerza al final. Dilos muy despacio y luego muy rápido. ¡Parece un trabalenguas!</p>`,
      svg: lista("Cómo suenan: toy tói, plane pléin, kite káit, balloon balún", [["toy → «tói»", A], ["plane → «pléin»", R], ["kite → «káit»", Ve], ["balloon → «balún»", N]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Muchos juguetes y juegos vienen <mark>con palabras en inglés</mark> en la caja.</p><p>Si sabes inglés, podrás leer los nombres y entender cómo se juega.</p><p>También podrás jugar con niños de otros países en el parque o en la playa. Basta con decir <b>Let's play!</b> (¡Vamos a jugar!) y enseñar tu pelota.</p>`,
      svg: charla("Let's play! Yes! Here's my ball", [["nino", "Let's play!", A], ["nina", "Yes! Here's my ball!", R]]),
    },
    {
      html: `<h3>Jugamos a la caja misteriosa</h3><p>Metemos un juguete en una <mark>caja cerrada</mark>.</p><p>Un niño mete la mano sin mirar y lo toca. Los demás preguntan: <b>What's in the box?</b></p><p>Él adivina por el tacto: <b>It's a car!</b> Luego lo saca para comprobarlo. Si acierta, gana un punto. ¡Después le toca a otro compañero!</p>`,
      svg: charla("Juego de la caja: What's in the box? It's a car!", [["nina", "What's in the box?", R], ["nino", "Mmm… It's a car!", A], ["coche", "Yes!", Ve]]),
    },
  ],
  figura: {
    titulo: "My toys: los juguetes en inglés",
    svg: mural("Juguetes en inglés: ball pelota, car coche, train tren, teddy bear osito", [["pelota", "ball", "pelota", R], ["coche", "car", "coche", A], ["tren", "train", "tren", Ve], ["oso", "teddy bear", "osito de peluche", N]], "My toys"),
  },
  video: V("in3v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés que tienes un tren.",
      pasos: ["Tener se dice I've got.", "Tren es train.", "Delante va a: a train."],
      resultado: "«I've got a train.»" },
    { enunciado: "Hay tres coches. ¿Cómo lo dices?",
      pasos: ["Tres es three.", "Coche es car.", "Como son varios, añadimos s: cars."],
      resultado: "«Three cars.»" },
    { enunciado: "La pelota está debajo de la mesa. Dilo en inglés.",
      pasos: ["Pelota es ball.", "Debajo es under.", "Mesa es table."],
      resultado: "«The ball is under the table.»" },
  ],
  errores: [
    "Decir «two ball»: con más de uno se añade s, two balls.",
    "Confundir in (dentro) y on (encima).",
    "Decir «I have got» sin juntar: se dice I've got.",
    "Leer toy como «toi» con la i suave: se dice «tói», como en «hoy».",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «juguetes» en inglés?", sol: "Toys." },
    { q: "¿Qué es una ball?", sol: "Una pelota." },
    { q: "¿Cómo se dice «muñeca»?", sol: "Doll." },
    { q: "Di en inglés: «tengo un osito».", sol: "I've got a teddy bear." },
    { q: "¿Qué significa How many cars?", sol: "¿Cuántos coches?" },
    { q: "Di en inglés: «dos trenes».", sol: "Two trains." },
    { q: "¿Qué significa under?", sol: "Debajo." },
    { q: "Contesta: Have you got a kite?", sol: "Yes, I have o No, I haven't." },
    { q: "Describe tu juguete favorito con dos frases.", sol: "Por ejemplo: My favourite toy is my doll. It's pink." },
    { q: "Esconde un juguete y di dónde está en inglés.", sol: "Por ejemplo: The car is under the bed." },
  ],
  quiz: [
    { q: "«Toys» significa…", o: ["juegos de mesa", "juguetes", "cajas"], a: 1, e: "Toys = juguetes." },
    { q: "«Car» es…", o: ["coche", "tren", "barco"], a: 0, e: "Car = coche." },
    { q: "«Avión» en inglés es…", o: ["boat", "plane", "kite"], a: 1, e: "Plane = avión." },
    { q: "«Teddy bear» es…", o: ["osito de peluche", "muñeca", "robot"], a: 0, e: "Bear = oso." },
    { q: "«I've got a ball» significa…", o: ["Me gusta la pelota", "Tengo una pelota", "Veo una pelota"], a: 1, e: "I've got = tengo." },
    { q: "Dos pelotas se dice…", o: ["two ball", "two balls", "twos ball"], a: 1, e: "Añadimos s: balls." },
    { q: "«On» significa…", o: ["encima", "debajo", "dentro"], a: 0, e: "On = encima." },
    { q: "«In the box» significa…", o: ["encima de la caja", "dentro de la caja", "debajo de la caja"], a: 1, e: "In = dentro." },
    { q: "«Balloon» es…", o: ["pelota", "globo", "cometa"], a: 1, e: "Balloon = globo." },
    { q: "«My favourite toy» es…", o: ["mi juguete favorito", "mi juguete nuevo", "mi caja"], a: 0, e: "Favourite = favorito." },
  ],
  examen: [
    { q: "Contesta: Have you got a doll?", o: ["Yes, I have.", "It's red.", "Three."], a: 0, e: "Yes, I have / No, I haven't." },
    { q: "«Tren» en inglés es…", o: ["train", "boat", "robot"], a: 0, e: "Train = tren." },
    { q: "«The car is under the chair»: el coche está…", o: ["encima de la silla", "debajo de la silla", "en la caja"], a: 1, e: "Under = debajo." },
    { q: "¿Cuántos hay? «How many kites?» →", o: ["Four.", "Kite.", "Yes."], a: 0, e: "Se contesta con un número." },
  ],
  feynman: ["Cómo se llaman los juguetes en inglés", "Cómo decir que tienes algo con I've got", "Qué significan in, on y under"],
  mapa: mapa("MY TOYS", "var(--pri)", [
    ["Toys", "ball, car, doll, train", A],
    ["Tener", "I've got a ball", R],
    ["Contar", "one ball, two balls", Ve],
    ["Dónde", "in, on, under", N],
  ], 230),
  tarjetas: [
    ["juguetes", "toys"],
    ["pelota / coche", "ball / car"],
    ["muñeca / osito", "doll / teddy bear"],
    ["tren / avión / barco", "train / plane / boat"],
    ["Tengo una pelota", "I've got a ball"],
    ["dos pelotas", "two balls"],
    ["dentro / encima / debajo", "in / on / under"],
    ["mi juguete favorito", "my favourite toy"],
  ],
  familias: [
    "Al recoger la habitación, nombrad cada juguete en inglés.",
    "Esconded un juguete y dad pistas: It's under the bed!",
    "Contad juguetes iguales en inglés: one car, two cars…",
    "Jugad a la caja misteriosa con objetos de casa.",
  ],
  profesores: PROF("Lengua extranjera: léxico de juguetes; have got en afirmativa, negativa e interrogativa; plural regular con -s; preposiciones in, on, under", ["Caja misteriosa: adivinar el juguete por el tacto.", "Esconder un juguete y preguntar Where's the…?", "Encuesta de clase: My favourite toy is…"]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
