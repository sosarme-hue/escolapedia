// Comunicación y representación, Infantil 4 años: poesías y adivinanzas.
const { mapa } = require("./_util");
const { svg, rot, big, nino, suelo, estrella, dibujos, parejas, charla, mural, ic, vid, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "4-anos",
  titulo: "Poesías y adivinanzas",
  minutos: 15,
  objetivos: ["Escuchar y decir poesías cortas", "Descubrir palabras que riman", "Pensar y resolver adivinanzas sencillas"],
  claves: ["poesía", "rima", "adivinanza", "pista", "verso"],
  pregunta: {
    texto: "«Tengo una gata, se llama Plata…». ¿Te suena bonito? ¿Por qué?",
    respuesta: "Porque <b>gata</b> y <b>Plata</b> terminan igual: <mark>riman</mark>. Así suenan las poesías.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una poesía?</h3><p>Una poesía es un texto corto que <mark>suena bonito</mark>, casi como una canción.</p><p>Tiene líneas cortitas que se llaman <b>versos</b>.</p><p>Se dice despacio, con ritmo y con alegría.</p>`,
      svg: svg("Una niña recita una poesía con las manos abiertas y salen estrellas", `${nino(80, 150, { pose: "canta", nina: true, c: N, boca: "abierta", s: 1.2 })}${estrella(150, 50, 10)}${estrella(180, 80, 8, "var(--red)")}${estrella(210, 46, 9, "var(--leaf)")}${rot(185, 120, "La luna", { size: 15, color: A })}${rot(185, 140, "es mi cuna", { size: 15, color: A })}${suelo(150)}${rot(130, 172, "Versos cortitos", { color: N })}`),
    },
    {
      html: `<h3>Palabras que riman</h3><p>Dos palabras <mark>riman</mark> cuando terminan igual.</p><p><b>Gato</b> rima con <b>pato</b>. <b>Ratón</b> rima con <b>montón</b>. <b>Luna</b> rima con <b>cuna</b>.</p><p>¡Escucha bien el final de cada palabra!</p>`,
      svg: parejas("Gato rima con pato y luna rima con cuna", [["gato", "gato", "pato", "pato"], ["luna", "luna", "cuna", "cuna"]], { titulo: "Riman: terminan igual", color: A, color2: R, flecha: "♪" }),
    },
    {
      html: `<h3>Una poesía para decir</h3><p><mark>«Cinco lobitos</mark> tiene la loba, blanquitos, negritos, detrás de la escoba».</p><p>Es una poesía de toda la vida.</p><p>La decimos moviendo los <b>cinco dedos</b> de la mano. ¡Prueba!</p>`,
      svg: svg("Una mano abierta con cinco dedos y el título Cinco lobitos", `${ic("mano", 80, 92, 2.6)}${[0, 1, 2, 3, 4].map((i) => big(150 + i * 20, 70, i + 1, [R, A, V, N, M][i], 18)).join("")}${rot(190, 110, "Cinco lobitos", { size: 16, color: A })}${rot(190, 130, "tiene la loba…", { size: 14 })}${rot(130, 168, "¡Mueve los cinco dedos!", { color: N })}`),
    },
    {
      html: `<h3>¿Qué es una adivinanza?</h3><p>Una adivinanza es un juego con <mark>pistas</mark>.</p><p>Te dicen cómo es una cosa, pero no te dicen su nombre. ¡Tú lo tienes que <b>adivinar</b>!</p><p>Hay que escuchar bien y pensar.</p>`,
      svg: svg("Un niño piensa con un gran signo de interrogación y una bombilla", `${nino(80, 150, { pose: "canta", c: A, s: 1.2 })}${ic("interrogacion", 170, 70, 2.2)}<circle cx="130" cy="40" r="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><circle cx="112" cy="58" r="4" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${suelo(150)}${rot(130, 172, "Escucho las pistas y pienso", { color: A })}`),
    },
    {
      html: `<h3>¡Adivina, adivinanza!</h3><p><mark>«Salta y salta por la charca, es verde y dice cruá».</mark> ¿Qué es?</p><p>Es verde, salta y vive en el agua… ¡Es la <b>rana</b>!</p><p>Las pistas nos ayudan a encontrar la respuesta.</p>`,
      svg: dibujos("Tres pistas, verde, salta y dice cruá, y la respuesta: la rana", [["rana", "¡la rana!", V]], { titulo: "Verde · salta · cruá", nota: "Las pistas me ayudan" }),
    },
    {
      html: `<h3>Juego: inventamos adivinanzas</h3><p>Ahora tú inventas. Piensa en un animal, pero <mark>no digas su nombre</mark>.</p><p>Di cómo es: su color, qué come, qué sonido hace.</p><p>Los demás adivinan. ¿Y para qué sirve? ¡Para pensar y hablar mejor!</p>`,
      svg: charla("Una niña dice una adivinanza de un animal y un niño la adivina", [["nina", "Es blanca y da leche…", R], ["nino", "¿Es la vaca?", A], ["nina", "¡Sí! ¡Te toca!", R]]),
    },
  ],
  figura: {
    titulo: "Rimas y adivinanzas",
    svg: mural("Cuatro tarjetas: gato rima con pato, luna rima con cuna, la rana salta y dice cruá, la vaca da leche", [["gato", "gato", "rima con pato", A], ["luna", "luna", "rima con cuna", N], ["rana", "rana", "salta y dice cruá", V], ["vaca", "vaca", "es blanca y da leche", R]], "Palabras que riman y animales para adivinar"),
  },
  video: { ...vid("hP-Qpg-g7t0", "El Renacuajo Paseador (Rafael Pombo)", "Toy Cantando", 22382015), busqueda: "poesías para niños infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué rima con «ratón»?", pasos: ["Decimos «ratón» despacio y escuchamos el final: «-ón».", "Buscamos palabras que acaben en «-ón».", "Por ejemplo: montón, balón, camión."], resultado: "ratón rima con balón." },
    { enunciado: "Adivina: «Tiene orejas largas, salta y come zanahorias».", pasos: ["Pista 1: orejas largas.", "Pista 2: salta.", "Pista 3: come zanahorias."], resultado: "¡es el conejo!" },
  ],
  errores: [
    "Pensar que riman las palabras que empiezan igual: riman las que terminan igual.",
    "Decir la respuesta antes de escuchar todas las pistas.",
    "Recitar muy deprisa: la poesía se dice despacio y con ritmo.",
  ],
  ejercicios: [
    { q: "Aprende «Cinco lobitos» y dila moviendo la mano.", sol: "Para la familia: decidla juntos varias veces; la repetición ayuda a memorizar." },
    { q: "Busca una palabra que rime con «pato».", sol: "Gato, zapato, rato, plato…" },
    { q: "Adivina: «Es redonda, bota y juego con ella».", sol: "La pelota." },
    { q: "Da palmas con cada verso de una poesía.", sol: "Para la familia: una palmada por línea ayuda a sentir el ritmo." },
    { q: "Inventa una adivinanza de tu juguete favorito.", sol: "Para la familia: ayudadle a dar tres pistas: color, forma y para qué sirve." },
    { q: "Dibuja la respuesta de una adivinanza.", sol: "Respuesta libre según la adivinanza." },
  ],
  quiz: [
    { q: "¿Qué rima con «luna»?", o: ["Cuna", "Mesa", "Sol"], a: 0, e: "Luna y cuna terminan igual." },
    { q: "«Es verde, salta y dice cruá». ¿Qué es?", o: ["Un pez", "Una rana", "Un perro"], a: 1, e: "La rana salta y croa." },
    { q: "Las líneas cortitas de una poesía son…", o: ["Versos", "Dibujos", "Números"], a: 0, e: "Se llaman versos." },
    { q: "¿Qué rima con «gato»?", o: ["Perro", "Pato", "Casa"], a: 1, e: "Gato y pato terminan en «-ato»." },
    { q: "En una adivinanza nos dan…", o: ["Pistas", "Caramelos", "Juguetes"], a: 0, e: "Con las pistas adivinamos." },
    { q: "«Cinco lobitos» se dice con…", o: ["Los pies", "La mano", "La nariz"], a: 1, e: "Movemos los cinco dedos." },
  ],
  examen: [
    { q: "Riman las palabras que…", o: ["Terminan igual", "Son largas", "Son de colores"], a: 0, e: "Escuchamos el final." },
    { q: "«Blanca, hace mu y da leche». ¿Qué es?", o: ["La vaca", "La oveja", "El gato"], a: 0, e: "La vaca hace «mu»." },
    { q: "Una poesía se dice…", o: ["Despacio y con ritmo", "Gritando", "Sin parar"], a: 0, e: "Así suena bonita." },
  ],
  feynman: ["Dile a alguien una poesía corta", "Inventa una adivinanza con tres pistas"],
  mapa: mapa("POESÍAS Y ADIVINANZAS", "var(--inf)", [
    ["Poesía", "suena bonito", R],
    ["Rima", "terminan igual", A],
    ["Adivinanza", "un juego con pistas", V],
    ["Pistas", "color, forma, sonido", N],
  ], 220),
  tarjetas: [
    ["¿Qué rima con «luna»?", "Cuna"],
    ["¿Cómo se llaman las líneas de una poesía?", "Versos"],
    ["¿Qué nos dan en una adivinanza?", "Pistas"],
    ["«Verde, salta y dice cruá»", "La rana"],
    ["¿Qué rima con «pato»?", "Gato o zapato"],
    ["¿Con qué decimos «Cinco lobitos»?", "Con la mano"],
  ],
  familias: [
    "Aprended una poesía corta por semana y decidla antes de dormir.",
    "Jugad en el coche a «¿Qué rima con…?» con palabras sencillas.",
    "Decid adivinanzas de cosas que tengáis delante: así es más fácil acertar.",
    "Celebrad sus inventos aunque no rimen perfecto: lo importante es jugar con las palabras.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: textos literarios orales (poesías, retahílas, adivinanzas), conciencia fonológica (rima) y disfrute del juego lingüístico", ["Caja de las adivinanzas con objetos escondidos.", "Mural de parejas que riman con dibujos.", "Recitado en pequeños grupos con gestos."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
