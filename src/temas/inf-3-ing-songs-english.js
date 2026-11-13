// Infantil 3 años · Primeros pasos en inglés: Songs in English. Frases en inglés con una ayuda en español para el adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, dibujos, mural, vid } = require("./_peque");
const { R, A, V, N, S, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "3-anos",
  titulo: "Songs in English",
  minutos: 10,
  objetivos: ["Sing short songs in English", "Move the body with the song", "Learn the words up, down, round and round"],
  claves: ["song", "sing", "clap", "up", "down", "round and round"],
  pregunta: {
    texto: "¿Conoces alguna canción en inglés?",
    respuesta: "¡Cantando se aprende inglés muy fácil! Vamos a cantar y a movernos: <mark>Let's sing!</mark>",
  },
  bloques: [
    {
      html: `<h3>Let's sing!</h3><p>Songs make us <mark>happy</mark>.</p><p>Let's sing together! La, la, la! (Cantar en inglés nos ayuda a oír cómo suena y a aprender palabras.)</p><p>Sing with Mummy and Daddy! (Cantamos con la familia.)</p>`,
      svg: escena("Dos niños cantan: Let's sing!", [["nino", 80, 96, 2], ["nina", 180, 96, 2], ["t", 130, 48, "♪ ♫ ♪", N, 32], ["t", 130, 160, "Let's sing!", A, 24]]),
    },
    {
      html: `<h3>Clap your hands</h3><p><mark>Clap, clap, clap!</mark> Clap your hands.</p><p>Stamp, stamp, stamp! Stamp your feet. (Damos palmas, <b>clap</b>, y golpeamos el suelo con los pies, <b>stamp</b>.)</p><p>Clap and stamp! (Primero palmas, después pies.)</p>`,
      svg: vocab("Clap your hands, stamp your feet", [["mano", "clap!", "palmas", R], ["zapato", "stamp!", "pisotón", A]]),
    },
    {
      html: `<h3>Up and down</h3><p>Hands <mark>up</mark>! Hands <mark>down</mark>!</p><p>Up, up, up! Down, down, down! (Arriba es <b>up</b> y abajo es <b>down</b>. ¡Movemos los brazos!)</p><p>Hands up high! Hands down low! (Muy arriba y muy abajo.)</p>`,
      svg: escena("Brazos arriba up, brazos abajo down", [["nino", 70, 100, 1.6], ["mano", 70, 46, 0.9], ["t", 70, 160, "up!", R, 26], ["nina", 190, 64, 1.6], ["mano", 190, 116, 0.9], ["t", 190, 160, "down!", A, 26]]),
    },
    {
      html: `<h3>The wheels on the bus</h3><p>The wheels on the bus go <mark>round and round</mark>.</p><p>Round and round! (Las ruedas del autobús dan vueltas. Movemos los brazos en círculo.)</p><p>Beep, beep, beep! (El claxon del autobús también suena.)</p>`,
      svg: escena("Las ruedas del autobús giran: round and round", [["svg", `<rect x="40" y="56" width="180" height="64" rx="12" fill="var(--sun)"/>${[62, 100, 138, 176].map((x) => `<rect x="${x}" y="66" width="28" height="22" rx="4" fill="var(--water)"/>`).join("")}<circle cx="80" cy="122" r="16" fill="#2a2a2a"/><circle cx="180" cy="122" r="16" fill="#2a2a2a"/><circle cx="80" cy="122" r="6" fill="#9aa3b5"/><circle cx="180" cy="122" r="6" fill="#9aa3b5"/><path d="M58 102 a 26 26 0 1 1 6 32" fill="none" stroke="var(--red)" stroke-width="3"/>`], ["t", 130, 166, "round and round", R, 22]]),
    },
    {
      html: `<h3>What is it for?</h3><p>Songs help us <mark>remember words</mark>.</p><p>We sing, we move, we learn! (Las canciones ayudan a recordar palabras y a perder la vergüenza.)</p><p>Sing every day! (Cantar cada día ayuda mucho.)</p>`,
      svg: dibujos("Las canciones sirven para cantar, moverse y aprender", [["guitarra", "sing", R], ["pelota", "move", A], ["libro", "learn", V]]),
    },
    {
      html: `<h3>Let's play!</h3><p>Play the song and <mark>dance</mark>. Stop the music: <mark>freeze!</mark></p><p>Don't move! (Bailamos y cuando para la música, nos quedamos quietos como estatuas.)</p><p>Dance again! (¡Otra vez, más deprisa!)</p>`,
      svg: escena("Juego de las estatuas: dance y freeze", [["feliz", 70, 80, 1.8], ["t", 70, 146, "dance!", V, 26], ["nieve", 190, 80, 1.8], ["t", 190, 146, "freeze!", A, 26]], { titulo: "Dance and freeze" }),
    },
  ],
  figura: {
    titulo: "Songs in English",
    svg: mural("Songs: sing, clap, up and down, round and round", [["guitarra", "sing", "cantar", R], ["mano", "clap", "palmas", A], ["estrella", "up · down", "arriba · abajo", V], ["rueda", "round", "vueltas", N]], "Songs in English"),
  },
  video: { ...vid("e_04ZrNroTo", "Wheels on the Bus", "Cocomelon - Nursery Rhymes", 9730957681), busqueda: "nursery rhymes for toddlers english" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Sing The wheels on the bus.",
      pasos: ["Move your arms round and round.", "Sing: round and round!"],
      resultado: "«The wheels on the bus go round and round!»" },
    { enunciado: "Hands up! Hands down!",
      pasos: ["Listen to the adult.", "Move your hands up or down."],
      resultado: "¡Brazos arriba y abajo!" },
  ],
  errores: [
    "Querer entender todas las palabras: basta con cantar y moverse.",
    "Cantar muy rápido: primero despacio.",
    "Cantar siempre una canción nueva: repetir la misma ayuda a aprenderla.",
  ],
  ejercicios: [
    { q: "Clap your hands: clap, clap, clap!", sol: "Para la familia: dad palmas juntos con ritmo." },
    { q: "Hands up! Hands down!", sol: "Decid up o down y que mueva los brazos." },
    { q: "Sing The wheels on the bus.", sol: "Con gestos: ruedas, puertas, limpiaparabrisas." },
    { q: "Play dance and freeze.", sol: "Parad la música y que se quede quieto." },
    { q: "Stamp your feet!", sol: "Pisotones fuertes al ritmo de la canción." },
    { q: "Sing a song to your teddy.", sol: "Que le cante al peluche lo que ha aprendido." },
  ],
  quiz: [
    { q: "«Sing» es…", o: ["cantar", "dormir", "comer"], a: 0, e: "Sing = cantar." },
    { q: "«Clap» es…", o: ["dar palmas", "saltar", "llorar"], a: 0, e: "Clap = palmas." },
    { q: "«Up» es…", o: ["arriba", "abajo", "dentro"], a: 0, e: "Up = arriba." },
    { q: "«Down» es…", o: ["arriba", "abajo", "rápido"], a: 1, e: "Down = abajo." },
    { q: "Las ruedas del bus van…", o: ["round and round", "up and up", "bye-bye"], a: 0, e: "Round and round." },
    { q: "«Freeze!» significa…", o: ["¡quieto!", "¡corre!", "¡canta!"], a: 0, e: "Freeze = quieto como estatua." },
  ],
  examen: [
    { q: "«Stamp your feet» es…", o: ["dar pisotones", "dar palmas", "dormir"], a: 0, e: "Pisotones con los pies." },
    { q: "«Hands up!» es…", o: ["manos arriba", "manos abajo", "adiós"], a: 0, e: "Manos arriba." },
    { q: "«Let's sing!» es…", o: ["¡vamos a cantar!", "¡vamos a comer!", "¡silencio!"], a: 0, e: "¡Vamos a cantar!" },
  ],
  feynman: ["Let's sing!", "Clap, stamp, up and down", "Round and round"],
  mapa: mapa("SONGS", "var(--pri)", [
    ["Sing", "cantar", R],
    ["Clap · Stamp", "palmas · pisotones", A],
    ["Up · Down", "arriba · abajo", V],
    ["Round and round", "vueltas", N],
  ], 240),
  tarjetas: [
    ["cantar", "sing"],
    ["dar palmas", "clap"],
    ["arriba", "up"],
    ["abajo", "down"],
    ["vueltas", "round and round"],
    ["¡quieto!", "freeze!"],
  ],
  familias: [
    "Poned canciones infantiles en inglés en el coche o al bañarle.",
    "Repetid la misma canción varios días: así la aprende.",
    "Haced los gestos con él; no hace falta saber inglés.",
    "Jugad a las estatuas con música: dance and freeze.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: canciones y rimas tradicionales en inglés, ritmo, órdenes de movimiento (TPR)", ["Canción fija de inicio de la sesión.", "Freeze dance con música en inglés.", "Dramatizar The wheels on the bus."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
