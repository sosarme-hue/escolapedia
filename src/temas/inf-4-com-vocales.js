// Comunicación y representación, Infantil 4 años: las vocales.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, fichas, dibujos, charla, mural, vid, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "4-anos",
  titulo: "Las vocales",
  minutos: 15,
  objetivos: ["Conocer las cinco vocales: a, e, i, o, u", "Oír el sonido de cada vocal al principio de una palabra", "Repasar la forma de cada vocal con el dedo"],
  claves: ["vocal", "a", "e", "i", "o", "u", "sonido"],
  pregunta: {
    texto: "Abre mucho la boca y di «aaaa». Ahora sonríe y di «iiii». ¿Notas la diferencia?",
    respuesta: "Cada <mark>vocal</mark> se dice con la boca de una forma. Son cinco: <b>a, e, i, o, u</b>.",
  },
  bloques: [
    {
      html: `<h3>Cinco letras especiales</h3><p>Las <mark>vocales</mark> son cinco letras: <b>a, e, i, o, u</b>.</p><p>Suenan solas, sin ayuda de nadie.</p><p>Están en casi todas las palabras. ¡Hasta en tu nombre!</p>`,
      svg: fichas("Las cinco vocales en grande: a, e, i, o, u", [["a", R], ["e", A], ["i", V], ["o", N], ["u", M]], { titulo: "Las vocales", nota: "a · e · i · o · u", grande: true }),
    },
    {
      html: `<h3>La boca de cada vocal</h3><p>Con la <b>a</b> abrimos mucho la boca. Con la <b>i</b> sonreímos.</p><p>Con la <b>o</b> hacemos un círculo. Con la <b>u</b> ponemos la boca como para dar un <mark>beso</mark>.</p><p>¡Mírate en un espejo!</p>`,
      svg: dibujos("Cuatro caras: boca muy abierta para la a, sonrisa para la i, boca redonda para la o y boca de beso para la u", [["cara_a", "a", R], ["cara_i", "i", V], ["cara_o", "o", N], ["cara_u", "u", M]], { titulo: "Pon la boca de cada vocal" }),
    },
    {
      html: `<h3>¿Por cuál empieza?</h3><p>Muchas palabras <mark>empiezan</mark> por una vocal.</p><p><b>A</b>vión empieza por a. <b>E</b>lefante, por e. <b>I</b>sla, por i. <b>O</b>so, por o. <b>U</b>va, por u.</p><p>Dilas despacio y escucha el primer sonido.</p>`,
      svg: dibujos("Avión, elefante, isla, oso y uva, cada uno con su vocal", [["avion", "a", R], ["elefante", "e", A], ["isla", "i", V], ["oso", "o", N], ["uva", "u", M]], { titulo: "Escucha el primer sonido" }),
    },
    {
      html: `<h3>Repasamos con el dedo</h3><p>Cada vocal tiene su <mark>forma</mark>. La <b>o</b> es redonda como una rueda. La <b>i</b> es un palito con un puntito encima.</p><p>Repasa las letras con el dedo, despacio, siguiendo el camino.</p>`,
      svg: svg("Una o y una i grandes de puntos para repasar con el dedo", `<circle cx="80" cy="84" r="40" fill="none" stroke="var(--inf)" stroke-width="5" stroke-dasharray="2 10" stroke-linecap="round"/><circle cx="80" cy="44" r="6" fill="var(--red)"/><path d="M180 66 V126" stroke="var(--leaf)" stroke-width="5" stroke-dasharray="2 10" stroke-linecap="round"/><circle cx="180" cy="44" r="7" fill="var(--leaf)"/>${rot(80, 160, "la o, redonda", { color: N })}${rot(180, 160, "la i, con punto", { color: V })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer las vocales nos ayuda a <mark>leer y escribir</mark> más adelante.</p><p>Ya puedes buscarlas en tu nombre, en los cuentos y en los carteles de la calle.</p><p>¿Cuántas vocales tiene tu nombre?</p>`,
      svg: fichas("El nombre ANA con las dos a resaltadas en rojo", [["A", R], ["N", G], ["A", R]], { titulo: "Busca las vocales de tu nombre", nota: "ANA tiene dos vocales: A y A", grande: true }),
    },
    {
      html: `<h3>Juego: el tren de las vocales</h3><p>Hacemos un <mark>tren</mark> en fila. Cada niño es una vocal.</p><p>Cuando la maestra dice tu vocal, das un salto y dices su sonido.</p><p>¡Aaa, eee, iii, ooo, uuu! ¡Chu, chu!</p>`,
      svg: svg("Cinco niños en fila como un tren, cada uno con una vocal", `${["a", "e", "i", "o", "u"].map((v, i) => nino(36 + i * 47, 140, { c: [R, A, V, N, M][i], nina: i % 2 === 1, pose: i === 2 ? "salta" : "pie", s: 0.85 }) + rot(36 + i * 47, 168, v, { size: 20, color: [R, A, V, N, M][i], w: 800 })).join("")}${suelo(142)}${rot(130, 26, "¡Chu, chu!", { color: G })}`),
    },
  ],
  figura: {
    titulo: "Las cinco vocales",
    svg: mural("Las vocales con un dibujo: a de avión, e de elefante, i de isla, o de oso y u de uva", [["avion", "a", "avión", R], ["elefante", "e", "elefante", A], ["isla", "i", "isla", V], ["oso", "o", "oso", N], ["uva", "u", "uva", M]], "Cada vocal con su dibujo"),
  },
  video: { ...vid("OHUktPPdTaM", "La risa de las vocales | Canciones infantiles", "Toy Cantando", 756911188), busqueda: "canción de las vocales" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Por qué vocal empieza «oso»?", pasos: ["Decimos la palabra despacio: «ooo-so».", "Escuchamos el primer sonido: «ooo».", "Ponemos la boca redonda: es la o."], resultado: "«oso» empieza por o." },
    { enunciado: "¿Qué vocal decimos sonriendo?", pasos: ["Probamos con la a: la boca se abre mucho.", "Probamos con la i: ¡sonreímos!"], resultado: "la i." },
  ],
  errores: [
    "Pensar que hay muchas vocales: son solo cinco, a, e, i, o, u.",
    "Olvidar el puntito de la i.",
    "Confundir la o con la u al oírlas: la o es más abierta y la u es como un beso.",
  ],
  ejercicios: [
    { q: "Canta la canción de las vocales.", sol: "Para la familia: cantadla juntos haciendo la boca de cada vocal." },
    { q: "Repasa la o en el aire con el dedo.", sol: "Para la familia: un círculo grande, empezando por arriba." },
    { q: "Busca la a en un cuento y señálala.", sol: "Para la familia: ayudadle con letras grandes de los títulos." },
    { q: "Di una palabra que empiece por u.", sol: "Uva, uña, uno…" },
    { q: "Haz la i con plastilina: un churro y una bolita.", sol: "Para la familia: el punto va encima, separado." },
    { q: "¿Qué vocal tiene «sol»?", sol: "La o." },
  ],
  quiz: [
    { q: "¿Cuántas vocales hay?", o: ["Tres", "Cinco", "Diez"], a: 1, e: "a, e, i, o, u: cinco." },
    { q: "«Avión» empieza por…", o: ["a", "o", "u"], a: 0, e: "Aaa-vión." },
    { q: "¿Qué vocal tiene un puntito?", o: ["La o", "La i", "La a"], a: 1, e: "La i lleva un punto encima." },
    { q: "Con la boca de beso decimos la…", o: ["u", "a", "e"], a: 0, e: "La u se dice con los labios juntos." },
    { q: "«Oso» empieza por…", o: ["e", "o", "i"], a: 1, e: "Ooo-so." },
    { q: "¿Cuál es una vocal?", o: ["m", "e", "p"], a: 1, e: "La e es vocal." },
  ],
  examen: [
    { q: "¿Qué vocal es redonda?", o: ["La o", "La i", "La e"], a: 0, e: "La o es como una rueda." },
    { q: "«Uva» empieza por…", o: ["a", "u", "i"], a: 1, e: "Uuu-va." },
    { q: "Con la a, la boca…", o: ["Se abre mucho", "Se cierra", "Sonríe"], a: 0, e: "Aaa: boca muy abierta." },
  ],
  feynman: ["Di las cinco vocales con la boca de cada una", "Busca una palabra para cada vocal"],
  mapa: mapa("LAS VOCALES", "var(--inf)", [
    ["a", "avión · boca abierta", R],
    ["e · i", "elefante · isla", A],
    ["o", "oso · boca redonda", V],
    ["u", "uva · boca de beso", N],
  ], 220),
  tarjetas: [
    ["¿Cuáles son las vocales?", "a, e, i, o, u"],
    ["¿Cuántas son?", "Cinco"],
    ["¿Qué vocal lleva un punto?", "La i"],
    ["¿Por qué vocal empieza «elefante»?", "Por la e"],
    ["¿Con qué vocal sonreímos?", "Con la i"],
    ["¿Por qué vocal empieza «uva»?", "Por la u"],
  ],
  familias: [
    "Jugad a «Veo, veo» con vocales: «Veo algo que empieza por o…».",
    "Escribid su nombre en grande y buscad juntos las vocales.",
    "Haced las vocales con plastilina, macarrones o en la arena.",
    "No hace falta que las escriba aún: a los 4 años basta con oírlas y reconocerlas.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: aproximación al lenguaje escrito, conciencia fonológica de las vocales, reconocimiento visual de grafías y uso funcional en el nombre propio", ["Caja de cada vocal con objetos que empiezan por ella.", "Espejos para observar la boca al pronunciar.", "Letras de lija para repasar con el dedo."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
