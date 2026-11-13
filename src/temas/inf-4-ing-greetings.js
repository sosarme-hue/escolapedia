// Primeros pasos en inglés, Infantil 4 años: Greetings (saludos). Inglés sencillo con ayuda en español.
const { mapa } = require("./_util");
const { svg, rot, nino, sol, luna, estrella, suelo, vocab, charla, mural, vid, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "4-anos",
  titulo: "Greetings",
  minutos: 15,
  objetivos: ["Saludar y despedirse en inglés: hello, goodbye", "Decir good morning y good night", "Decir el nombre: My name is…"],
  claves: ["hello", "goodbye", "good morning", "good night", "my name is", "thank you"],
  pregunta: {
    texto: "Cuando llegas al cole dices «¡Hola!». ¿Sabes cómo se dice en inglés?",
    respuesta: "Se dice <mark>Hello!</mark> («jelóu»). Y para irte, <mark>Goodbye!</mark> («gudbái»).",
  },
  bloques: [
    {
      html: `<h3>Hello!</h3><p>Para saludar en inglés decimos <mark>Hello!</mark>. Se dice «jelóu».</p><p>Con los amigos también vale <b>Hi!</b> («jái»), que es más corto.</p><p>Saluda con la mano y una sonrisa: <b>Hello!</b></p>`,
      svg: charla("Un niño y una niña se saludan diciendo Hello y Hi", [["nino", "Hello!", A], ["nina", "Hi!", R]]),
    },
    {
      html: `<h3>Goodbye!</h3><p>Para despedirnos decimos <mark>Goodbye!</mark> («gudbái»).</p><p>Los más peques también dicen <b>Bye-bye!</b> («bái bái»).</p><p>Movemos la mano de un lado a otro: <b>Bye-bye!</b> ¡Hasta mañana, amigos!</p>`,
      svg: svg("Una niña dice adiós con la mano en la puerta del cole: Goodbye", `<rect x="160" y="40" width="70" height="110" rx="4" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/><circle cx="218" cy="98" r="4" fill="var(--ink)"/>${nino(90, 150, { pose: "canta", c: R, nina: true, s: 1.3 })}<path d="M118 52 q8 -6 14 0 M120 62 q8 -6 14 0" stroke="var(--muted)" stroke-width="2" fill="none"/>${suelo(150)}${rot(90, 30, "Goodbye!", { size: 22, color: R, w: 800 })}${rot(130, 172, "adiós · «gudbái»", { color: G })}`),
    },
    {
      html: `<h3>Good morning, good night</h3><p>Por la mañana, con el sol, decimos <mark>Good morning!</mark> («gud mórnin»): buenos días.</p><p>Antes de dormir, con la luna, decimos <mark>Good night!</mark> («gud náit»): buenas noches.</p>`,
      svg: svg("A la izquierda el sol con Good morning y a la derecha la luna con Good night", `<rect x="14" y="14" width="112" height="116" rx="10" fill="#bfe3ff"/><rect x="134" y="14" width="112" height="116" rx="10" fill="#1c2550"/>${sol(70, 66, 22)}${luna(186, 56, 20)}${estrella(222, 96, 7, "#ffe9a0")}${estrella(158, 104, 6, "#ffe9a0")}${rot(70, 152, "Good morning!", { size: 15, color: A, w: 800 })}${rot(190, 152, "Good night!", { size: 15, color: N, w: 800 })}${rot(70, 170, "buenos días", { size: 12, color: G })}${rot(190, 170, "buenas noches", { size: 12, color: G })}`),
    },
    {
      html: `<h3>What's your name?</h3><p>Para preguntar el nombre decimos <mark>What's your name?</mark> («uats yor néim»).</p><p>Y contestamos: <b>My name is Lucía</b> («mai néim is…»), mi nombre es Lucía.</p><p>¡Di tu nombre en inglés!</p>`,
      svg: charla("Una niña pregunta What's your name y el niño responde My name is Leo", [["nina", "What's your name?", R], ["nino", "My name is Leo.", A]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saludar es ser <mark>amable</mark>. En inglés también damos las gracias: <b>Thank you!</b> («zénkiu»).</p><p>Y pedimos por favor: <b>Please</b> («plis»).</p><p>Con estas palabras haremos amigos de otros países.</p>`,
      svg: vocab("Hello es hola, Thank you es gracias y Please es por favor", [["feliz", "Hello!", "hola", A], ["corazon", "Thank you!", "gracias", R], ["mano", "Please", "por favor", V]], { titulo: "Palabras amables" }),
    },
    {
      html: `<h3>Juego: Hello, hello!</h3><p>Nos ponemos en <mark>corro</mark>. Uno dice <b>Hello!</b> y su nombre.</p><p>Todos contestan <b>Hello, Leo!</b> y dan dos palmadas.</p><p>Al final, decimos todos juntos <b>Goodbye!</b> moviendo la mano.</p>`,
      svg: svg("Cuatro niños en corro saludan con la mano y dicen Hello", `${[[50, A], [100, R], [160, V], [210, N]].map(([x, c], i) => nino(x, 150, { c, nina: i % 2 === 1, pose: i === 0 ? "arriba" : "palmas", s: 0.95 })).join("")}${suelo(150)}${rot(130, 30, "Hello, hello!", { size: 20, color: A, w: 800 })}${rot(130, 172, "¡plas, plas!", { color: G })}`),
    },
  ],
  figura: {
    titulo: "Greetings: los saludos",
    svg: mural("Cuatro tarjetas: Hello es hola, Goodbye es adiós, Good morning es buenos días y Good night es buenas noches", [["feliz", "Hello!", "hola", A], ["mano", "Goodbye!", "adiós", R], ["sol", "Good morning!", "buenos días", M], ["luna", "Good night!", "buenas noches", N]], "Saludos en inglés"),
  },
  video: { ...vid("fN1Cyr0ZK9M", "Hello Hello! Can You Clap Your Hands?", "Super Simple Songs", 175629917), busqueda: "hello song for kids" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Llegas al cole por la mañana. ¿Qué dices?", pasos: ["Es por la mañana: sale el sol.", "Saludamos con la mano."], resultado: "Good morning! o Hello!" },
    { enunciado: "Te preguntan: What's your name?", pasos: ["Te preguntan cómo te llamas.", "Empiezas con «My name is…».", "Y dices tu nombre."], resultado: "My name is… (y tu nombre)." },
  ],
  errores: [
    "Decir Good night al llegar por la mañana: Good night es para irse a dormir.",
    "Pronunciar la h de Hello muda: suena como una j suave, «jelóu».",
    "Olvidar el Thank you: en inglés también damos las gracias.",
  ],
  ejercicios: [
    { q: "Saluda a tu peluche en inglés.", sol: "Para la familia: «Hello, Teddy!» con la mano levantada." },
    { q: "Di Good night a la familia antes de dormir.", sol: "Para la familia: contestad también en inglés; así se convierte en rutina." },
    { q: "Contesta: What's your name?", sol: "My name is… y su nombre." },
    { q: "Haz el gesto de Goodbye con la mano.", sol: "Mover la mano de un lado a otro." },
    { q: "Di Thank you cuando te den algo.", sol: "Para la familia: aprovechad la merienda para practicarlo." },
    { q: "Canta la canción Hello, hello dando palmas.", sol: "Para la familia: el vídeo del tema sirve para cantarla juntos." },
  ],
  quiz: [
    { q: "¿Cómo se dice «hola» en inglés?", o: ["Hello", "Goodbye", "Night"], a: 0, e: "Hello: «jelóu»." },
    { q: "¿Cómo se dice «adiós»?", o: ["Goodbye", "Morning", "Please"], a: 0, e: "Goodbye: «gudbái»." },
    { q: "Antes de dormir decimos…", o: ["Good morning", "Good night", "Hello"], a: 1, e: "Good night: buenas noches." },
    { q: "Thank you significa…", o: ["Gracias", "Hola", "Adiós"], a: 0, e: "«Zénkiu»: gracias." },
    { q: "Para decir mi nombre empiezo con…", o: ["My name is", "Good night", "Bye-bye"], a: 0, e: "My name is… y mi nombre." },
    { q: "Por la mañana decimos…", o: ["Good morning", "Good night", "Please"], a: 0, e: "Buenos días: Good morning." },
  ],
  examen: [
    { q: "Hi es otra forma de decir…", o: ["Hola", "Adiós", "Gracias"], a: 0, e: "Hi es un hola corto." },
    { q: "Please significa…", o: ["Por favor", "Buenas noches", "Mi nombre"], a: 0, e: "«Plis»: por favor." },
    { q: "Al salir del cole decimos…", o: ["Goodbye", "Good morning", "Hello"], a: 0, e: "Nos despedimos: Goodbye." },
  ],
  feynman: ["Saluda y despídete en inglés", "Di tu nombre en inglés"],
  mapa: mapa("GREETINGS", "var(--inf)", [
    ["Hello / Hi", "hola", A],
    ["Goodbye / Bye-bye", "adiós", R],
    ["Good morning", "buenos días", M],
    ["Good night", "buenas noches", N],
  ], 220),
  tarjetas: [
    ["Hola", "Hello!"],
    ["Adiós", "Goodbye!"],
    ["Buenos días", "Good morning!"],
    ["Buenas noches", "Good night!"],
    ["Gracias", "Thank you!"],
    ["Mi nombre es…", "My name is…"],
  ],
  familias: [
    "Usad Good morning y Good night cada día: la rutina fija las palabras.",
    "Saludad en inglés a los muñecos al empezar a jugar.",
    "No corrijáis la pronunciación: basta con repetir la palabra bien dicha, con alegría.",
    "Cantad juntos una canción de saludo en inglés (el vídeo del tema sirve).",
  ],
  profesores: PROF("Comunicación y representación de la realidad: aproximación a una lengua extranjera, fórmulas de saludo, despedida y cortesía en situaciones cotidianas, comprensión oral apoyada en gestos y canciones", ["Rutina de saludo en inglés en la asamblea.", "Canción de bienvenida con palmas.", "Marioneta que solo habla inglés y saluda a cada niño."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
