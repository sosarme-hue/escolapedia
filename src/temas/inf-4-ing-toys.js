// Primeros pasos en inglés, Infantil 4 años: Toys. Inglés sencillo con ayuda en español.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, vocab, charla, mural, ic, vid, R, A, V, N, M, G, MARRON, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "4-anos",
  titulo: "Toys",
  minutos: 15,
  objetivos: ["Nombrar juguetes en inglés: ball, car, doll, teddy bear", "Preguntar y contestar: What is it? It's a…", "Compartir y recoger los juguetes en inglés"],
  claves: ["toy", "ball", "car", "doll", "teddy bear", "train", "balloon"],
  pregunta: {
    texto: "¿Cuál es tu juguete favorito? ¿Sabes cómo se dice juguete en inglés?",
    respuesta: "Juguete en inglés es <mark>toy</mark> («tói»). ¡Y la pelota es <b>ball</b> («bol»)!",
  },
  bloques: [
    {
      html: `<h3>Ball and balloon</h3><p>La pelota es <mark>ball</mark> («bol»). Con la ball jugamos al fútbol.</p><p>El globo es <mark>balloon</mark> («balún»). ¡Cuidado, que sube y se escapa!</p><p>Suenan parecido, pero no son iguales.</p>`,
      svg: vocab("Ball es pelota y balloon es globo", [["pelota", "ball", "pelota", R], ["globo", "balloon", "globo", A]], { titulo: "Toys" }),
    },
    {
      html: `<h3>Car and train</h3><p>El coche de juguete es un <mark>car</mark> («car»).</p><p>El tren es un <mark>train</mark> («tréin»): chu, chu!</p><p>Mueve tu car por el suelo: brum, brum. Y haz un train con tus amigos en fila.</p>`,
      svg: vocab("Car es coche y train es tren", [["coche", "car", "coche", R], ["tren", "train", "tren", V]], { titulo: "Toys that go!" }),
    },
    {
      html: `<h3>Doll and teddy bear</h3><p>La muñeca es <mark>doll</mark> («dol»).</p><p>El osito de peluche es <mark>teddy bear</mark> («tédi bear»).</p><p>Los abrazamos y los llevamos a dormir. ¿Tienes un teddy bear en tu cama?</p>`,
      svg: vocab("Doll es muñeca y teddy bear es osito de peluche", [["nina", "doll", "muñeca", N], ["oso", "teddy bear", "osito", M]], { titulo: "Cuddly toys" }),
    },
    {
      html: `<h3>What is it?</h3><p>Para preguntar qué es algo decimos <mark>What is it?</mark> («uat is it»).</p><p>Y contestamos: <b>It's a ball</b> («its a bol»), es una pelota.</p><p>¡Así podemos adivinar juguetes escondidos!</p>`,
      svg: charla("Una niña pregunta What is it y el niño contesta It's a ball", [["nina", "What is it?", R], ["nino", "It's a ball!", A]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con estas palabras podemos <mark>jugar en inglés</mark> con otros niños.</p><p>Para compartir decimos <b>Here you are!</b>, toma. Para recoger, <b>Tidy up!</b> («táidi ap»): ¡a guardar!</p>`,
      svg: svg("Una caja de juguetes con una pelota, un coche y un oso, y la frase Tidy up", `<path d="M60 90 H200 L190 150 H70z" fill="${MARRON}"/><rect x="54" y="82" width="152" height="14" rx="4" fill="#a8713f"/>${ic("pelota", 95, 70, 0.9)}${ic("coche", 135, 72, 0.9)}${ic("oso", 175, 68, 0.9)}${rot(130, 30, "Tidy up!", { size: 22, color: V, w: 800 })}${rot(130, 172, "¡a guardar los juguetes!", { color: G })}`),
    },
    {
      html: `<h3>Juego: the toy box</h3><p>Escondemos un <mark>juguete</mark> en una caja.</p><p>Metes la mano sin mirar y lo tocas. ¿Qué es? <b>It's a car!</b></p><p>Si aciertas, te lo quedas para jugar un ratito.</p>`,
      svg: svg("Un niño mete la mano en una caja misteriosa con un signo de interrogación", `<rect x="110" y="80" width="110" height="70" rx="6" fill="var(--inf)"/><rect x="104" y="72" width="122" height="14" rx="4" fill="var(--pen)"/>${ic("interrogacion", 165, 118, 1.2)}${nino(70, 150, { c: R, pose: "brazos", s: 1.1 })}${suelo(150)}${rot(130, 30, "What is it?", { size: 18, color: N, w: 800 })}${rot(130, 172, "It's a car!", { color: R })}`),
    },
  ],
  figura: {
    titulo: "Toys",
    svg: mural("Seis tarjetas de juguetes en inglés: ball, balloon, car, train, doll y teddy bear", [["pelota", "ball", "pelota", R], ["globo", "balloon", "globo", A], ["coche", "car", "coche", R], ["tren", "train", "tren", V], ["nina", "doll", "muñeca", N], ["oso", "teddy bear", "osito", M]], "Toys: los juguetes en inglés"),
  },
  video: { ...vid("GGbm73UAfUs", "What's Inside The Toy Box?", "Noodle & Pals", 13310983), busqueda: "toys song for kids" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "What is it? (señalamos un tren)", pasos: ["Miramos el juguete: es un tren.", "Tren en inglés es train.", "Contestamos con It's a…"], resultado: "It's a train!" },
    { enunciado: "Pasa la pelota a un amigo en inglés.", pasos: ["Le damos la pelota.", "Decimos «toma»: Here you are!"], resultado: "Here you are! – Thank you!" },
  ],
  errores: [
    "Confundir ball (pelota) con balloon (globo).",
    "Decir solo «teddy»: el osito completo es teddy bear.",
    "Olvidar el It's a… al contestar: It's a car.",
  ],
  ejercicios: [
    { q: "Nombra en inglés tres juguetes de tu habitación.", sol: "Para la familia: ball, car, doll, teddy bear, train…" },
    { q: "Juega a la caja misteriosa: toca y adivina.", sol: "Para la familia: «What is it?» – «It's a…!»." },
    { q: "Recoge tus juguetes cantando Tidy up!", sol: "Para la familia: haced de la recogida un juego en inglés." },
    { q: "Dibuja tu juguete favorito y di su nombre en inglés.", sol: "Respuesta libre." },
    { q: "Comparte un juguete diciendo Here you are!", sol: "Y el otro contesta Thank you!" },
    { q: "Haz un train con la familia en fila: chu, chu!", sol: "Para la familia: el primero dice «Train! Let's go!»." },
  ],
  quiz: [
    { q: "Ball es…", o: ["Pelota", "Globo", "Coche"], a: 0, e: "Ball: «bol»." },
    { q: "¿Cómo se dice «tren»?", o: ["Train", "Car", "Doll"], a: 0, e: "Train: «tréin»." },
    { q: "Teddy bear es…", o: ["Un osito", "Un coche", "Un globo"], a: 0, e: "El osito de peluche." },
    { q: "Toy significa…", o: ["Juguete", "Comida", "Casa"], a: 0, e: "Toy: «tói»." },
    { q: "What is it? significa…", o: ["¿Qué es?", "¿Cuántos?", "¿Cómo te llamas?"], a: 0, e: "Preguntamos qué es." },
    { q: "Tidy up! significa…", o: ["¡A recoger!", "¡A comer!", "¡A dormir!"], a: 0, e: "Recogemos los juguetes." },
  ],
  examen: [
    { q: "Car es…", o: ["Coche", "Muñeca", "Pelota"], a: 0, e: "Car: coche." },
    { q: "Doll es…", o: ["Muñeca", "Tren", "Globo"], a: 0, e: "Doll: «dol»." },
    { q: "Balloon es…", o: ["Globo", "Pelota", "Osito"], a: 0, e: "Balloon: «balún»." },
  ],
  feynman: ["Nombra cinco juguetes en inglés", "Pregunta What is it? y contesta It's a…"],
  mapa: mapa("TOYS", "var(--inf)", [
    ["ball · balloon", "pelota · globo", R],
    ["car · train", "coche · tren", A],
    ["doll · teddy bear", "muñeca · osito", V],
    ["What is it?", "It's a…", N],
  ], 220),
  tarjetas: [
    ["Pelota", "Ball"],
    ["Globo", "Balloon"],
    ["Coche", "Car"],
    ["Tren", "Train"],
    ["Muñeca", "Doll"],
    ["Osito de peluche", "Teddy bear"],
  ],
  familias: [
    "Al jugar, nombrad los juguetes en inglés de vez en cuando.",
    "Usad Tidy up! como señal para recoger: con una canción es más fácil.",
    "Jugad a la caja misteriosa con juguetes de casa.",
    "Practicad Here you are! y Thank you! al compartir.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: aproximación a la lengua extranjera, vocabulario de juguetes, estructuras What is it? / It's a…, rutinas de aula en inglés (tidy up) y convivencia en el juego", ["Bolsa misteriosa de juguetes.", "Canción de recogida en inglés como rutina.", "Rincón del juego con etiquetas en inglés."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
