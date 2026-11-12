// Lengua Castellana 1º de Primaria: letras y sílabas. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, lista, mural, trozos, silabas: s, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", G = "var(--muted)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "Letras y sílabas",
  minutos: 20,
  objetivos: ["Juntar una consonante y una vocal para formar una sílaba", "Separar palabras en sílabas con palmadas", "Formar palabras nuevas uniendo sílabas"],
  claves: ["letra", "sílaba", "palmada", "palabra corta", "palabra larga"],
  pregunta: {
    texto: "Di «mariposa» y da una palmada en cada trozo. ¿Cuántas palmadas has dado?",
    respuesta: "Has dado <mark>4 palmadas</mark>: ma-ri-po-sa. Cada trozo que suena de un golpe se llama <b>sílaba</b>.",
  },
  bloques: [
    {
      html: `<h3>Las letras se juntan</h3><p>Las letras casi nunca van solas. Se juntan para sonar.</p><p>Si juntamos la <b>m</b> y la <b>a</b>, suena <mark>ma</mark>. Si juntamos la <b>s</b> y la <b>o</b>, suena <mark>so</mark>.</p><p>Primero decimos el sonido de la consonante. Después, sin parar, decimos la vocal. Así leemos sílabas. Al principio vamos despacio y luego cada vez más rápido.</p>`,
      svg: frase("La m y la a forman ma; la s y la o forman so", [["m", A], ["+", G], ["a", R], ["=", G], ["ma", V], ["/"], ["s", A], ["+", G], ["o", R], ["=", G], ["so", V]], { titulo: "Consonante + vocal", fs: 24 }),
    },
    {
      html: `<h3>¿Qué es una sílaba?</h3><p>Una <mark>sílaba</mark> es un trozo de palabra.</p><p>La decimos de <b>un solo golpe de voz</b>.</p><p>La palabra «pato» tiene dos sílabas: <b>pa</b> y <b>to</b>. La palabra «sol» tiene solo una. Todas las sílabas tienen al menos una vocal. ¡Sin vocal no hay sílaba! Fíjate: en «pa» está la a y en «to» está la o.</p>`,
      svg: fichas("La palabra pato partida en dos sílabas: pa y to", [["pa", A], ["to", R]], { titulo: "pato", nota: "pa-to: 2 sílabas", grande: true }),
    },
    {
      html: `<h3>Contamos con palmadas</h3><p>Para contar las sílabas, decimos la palabra despacio.</p><p>Damos <mark>una palmada</mark> en cada trozo.</p><p><b>Sol</b>: una palmada. <b>Ga-to</b>: dos palmadas. <b>Ma-ri-po-sa</b>: cuatro palmadas. También puedes dar saltitos o golpes en la mesa. ¡Cada golpe es una sílaba! Prueba con tu nombre. ¿Cuántas palmadas da? ¿Y el de tu mejor amigo?</p>`,
      svg: trozos("Un sol con 1 sílaba, un gato con 2 y una mariposa con 4", [["sol", ["sol"], A], ["gato", ["ga", "to"], R], ["mariposa", ["ma", "ri", "po", "sa"], V]]),
      video: vid("ccK3YZjInME", "Las sílabas para niños", "Happy Learning Español", 3408902, 27146),
    },
    {
      html: `<h3>Palabras cortas y largas</h3><p>Hay palabras de <b>una</b> sílaba, como <i>pan</i> o <i>mar</i>.</p><p>Otras tienen <b>dos</b>, como <i>ca-sa</i>. Otras tienen <b>tres</b>, como <i>pe-lo-ta</i>.</p><p>Las más largas tienen <mark>cuatro o más</mark>: <i>ma-ri-po-sa</i>. Cuantas más sílabas, más palmadas damos. ¿Qué palabra larga conoces tú? Cuéntala con las manos.</p>`,
      svg: trozos("Pan tiene 1 sílaba, casa 2, pelota 3 y mariposa 4", [["pan", ["pan"], A], ["casa", ["ca", "sa"], R], ["pelota", ["pe", "lo", "ta"], V], ["mariposa", ["ma", "ri", "po", "sa"], N]]),
    },
    {
      html: `<h3>La familia de la m</h3><p>La <b>m</b> se junta con cada vocal.</p><p>Así salen cinco sílabas: <mark>ma, me, mi, mo, mu</mark>.</p><p>Con ellas leemos muchas palabras: <i>mamá</i>, <i>mesa</i>, <i>mono</i>, <i>mula</i>. Lo mismo pasa con otras letras. La <b>p</b> forma pa, pe, pi, po, pu. Con ella leemos <i>papá</i> y <i>pipa</i>.</p>`,
      svg: fichas("Las sílabas ma, me, mi, mo, mu y pa, pe, pi, po, pu", [["ma", R], ["me", A], ["mi", V], ["mo", N], ["mu", M], ["pa", R], ["pe", A], ["pi", V], ["po", N], ["pu", M]], { titulo: "Familias de sílabas", nota: "mamá · mesa · pipa · puma" }),
    },
    {
      html: `<h3>Más familias: l y s</h3><p>La <b>l</b> forma <mark>la, le, li, lo, lu</mark>. La <b>s</b> forma <mark>sa, se, si, so, su</mark>.</p><p>Con la <b>l</b> leemos <i>luna</i> y <i>lobo</i>. Con la <b>s</b> leemos <i>sopa</i> y <i>sapo</i>.</p><p>Cuando sabes una familia, ya puedes leer muchas palabras nuevas. ¡Cada familia es una llave mágica!</p>`,
      svg: dibujos("Una luna, un lobo, una sopa y un sapo", [["luna", s("lu|na", R), "var(--ink)"], ["lobo", s("lo|bo", R), "var(--ink)"], ["sopa", s("so|pa", A), "var(--ink)"], ["rana", s("sa|po", A), "var(--ink)"]], { titulo: "Con l y con s" }),
    },
    {
      html: `<h3>Juntamos sílabas</h3><p>Las sílabas se unen como <mark>piezas de un puzle</mark>.</p><p><b>lu</b> + <b>na</b> = <i>luna</i>. <b>me</b> + <b>sa</b> = <i>mesa</i>.</p><p>Si cambiamos el orden, sale otra palabra. <b>sa</b> + <b>la</b> es <i>sala</i>. Pero <b>la</b> + <b>sa</b> no dice nada. ¡El orden importa! Lee siempre de izquierda a derecha, como cuando escribes.</p>`,
      svg: frase("lu más na es luna; me más sa es mesa", [["lu", A], ["+", G], ["na", R], ["=", G], ["luna", V], ["/"], ["me", A], ["+", G], ["sa", R], ["=", G], ["mesa", V]], { titulo: "Piezas de un puzle", nota: "¡El orden importa!", fs: 22 }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Leer por sílabas es <mark>más fácil</mark> que leer letra a letra.</p><p>Al escribir, decimos cada sílaba despacio. Así <b>no nos saltamos</b> ninguna letra.</p><p>Las sílabas también sirven para cantar y rimar. En las canciones, cada nota suele llevar una sílaba. ¡Las usamos todo el día!</p>`,
      svg: lista("Las sílabas sirven para leer, escribir y cantar", [["Leo más fácil", A], ["Escribo bien", R], ["Canto y rimo", V]], { titulo: "Las sílabas me ayudan a…" }),
    },
    {
      html: `<h3>Jugamos al tren de sílabas</h3><p>La <b>última sílaba</b> de una palabra empieza la siguiente.</p><p><i>ca-<mark>sa</mark></i> → <i><mark>sa</mark>-po</i> → <i><mark>po</mark>-llo</i>.</p><p>¿Qué palabra empieza por <b>llo</b>? ¡Lloro! Jugad por turnos. Pierde quien no encuentra palabra. Así practicamos las sílabas sin darnos cuenta. ¡Y nos reímos mucho!</p>`,
      svg: dibujos("Tren de palabras: casa, sapo y pollo; la última sílaba empieza la siguiente", [["casa", s("ca|sa", R, 1), "var(--ink)"], ["rana", s("sa|po", R, 0).replace("po", `<tspan fill="var(--pen)">po</tspan>`), "var(--ink)"], ["pollo", s("po|llo", A, 0), "var(--ink)"]], { titulo: "casa → sapo → pollo", nota: "La última sílaba empieza la siguiente" }),
    },
  ],
  figura: {
    titulo: "Contamos sílabas",
    svg: mural("Palabras con 1, 2, 3 y 4 sílabas: sol, gato, pelota y mariposa", [["sol", "sol", "1 palmada", A], ["gato", "ga-to", "2 palmadas", R], ["pelota", "pe-lo-ta", "3 palmadas", V], ["mariposa", "ma-ri-po-sa", "4 palmadas", N]], "Una palmada por cada sílaba"),
  },
  video: { ...vid("bO23pUTXyA4", "Sílabas ma me mi mo mu: El Mono Sílabo", "lunacreciente", 218885704), busqueda: "sílabas para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántas sílabas tiene «zapato»?",
      pasos: ["Di la palabra muy despacio: za… pa… to.", "Da una palmada en cada trozo.", "Cuenta las palmadas: una, dos, tres."],
      resultado: "«zapato» tiene 3 sílabas: za-pa-to." },
    { enunciado: "Une las sílabas «pe» y «lo». ¿Qué palabra sale?",
      pasos: ["Lee la primera sílaba: pe.", "Lee la segunda sílaba: lo.", "Dilas juntas y sin parar: pelo."],
      resultado: "sale la palabra «pelo»." },
    { enunciado: "Cambia el orden de «ma» y «no». ¿Qué palabras salen?",
      pasos: ["Primero ma y luego no: mano.", "Ahora primero no y luego ma: noma.", "Piensa si las dos palabras existen."],
      resultado: "«mano» es una palabra; «noma» no lo es. El orden importa." },
  ],
  errores: [
    "Contar letras en vez de sílabas: «sol» tiene tres letras, pero solo una sílaba.",
    "Dar las palmadas muy deprisa y saltarse un trozo: di la palabra despacio.",
    "Cambiar el orden de las sílabas al leer, como «lapa» por «pala»: lee de izquierda a derecha.",
    "Olvidar la vocal al escribir una sílaba, como «msa» por «mesa»: cada sílaba lleva vocal.",
  ],
  ejercicios: [
    { q: "Da palmadas y cuenta las sílabas de «luna».", sol: "2: lu-na." },
    { q: "Cuenta las sílabas de «sol».", sol: "1: sol." },
    { q: "Cuenta las sílabas de «pelota».", sol: "3: pe-lo-ta." },
    { q: "Une «ca» y «sa». ¿Qué palabra sale?", sol: "Casa." },
    { q: "Une «me» y «sa». ¿Qué palabra sale?", sol: "Mesa." },
    { q: "Di la familia de la m: ma, me…", sol: "ma, me, mi, mo, mu." },
    { q: "Di una palabra que empiece por «pa».", sol: "Por ejemplo: pato, pala, papá, pan." },
    { q: "¿Qué palabra es más larga: «pan» o «mariposa»?", sol: "Mariposa, que tiene 4 sílabas." },
    { q: "Separa en sílabas «tomate».", sol: "to-ma-te." },
    { q: "Sigue el tren: «mesa» → «sa…».", sol: "Por ejemplo: sapo, sala, salto." },
  ],
  quiz: [
    { q: "¿Cuántas sílabas tiene «gato»?", o: ["1", "2", "3"], a: 1, e: "ga-to: dos." },
    { q: "m + a suena…", o: ["ma", "am", "mi"], a: 0, e: "Primero la m, luego la a." },
    { q: "¿Cuál tiene una sola sílaba?", o: ["casa", "sol", "pelota"], a: 1, e: "sol: una palmada." },
    { q: "lu + na = …", o: ["nalu", "luna", "lana"], a: 1, e: "luna." },
    { q: "¿Cuántas sílabas tiene «mariposa»?", o: ["3", "4", "5"], a: 1, e: "ma-ri-po-sa: cuatro." },
    { q: "Toda sílaba tiene al menos una…", o: ["vocal", "m", "palmada doble"], a: 0, e: "Sin vocal no hay sílaba." },
    { q: "¿Qué sílaba falta? ma, me, __, mo, mu", o: ["mi", "pa", "ma"], a: 0, e: "ma, me, mi, mo, mu." },
    { q: "¿Qué palabra empieza por «so»?", o: ["sopa", "mesa", "pato"], a: 0, e: "so-pa." },
    { q: "Separa «pato»:", o: ["p-ato", "pa-to", "pat-o"], a: 1, e: "pa-to." },
    { q: "¿Cuál es más larga?", o: ["pan", "pelota", "sol"], a: 1, e: "pelota tiene 3 sílabas." },
  ],
  examen: [
    { q: "¿Cuántas sílabas tiene «zapato»?", o: ["2", "3", "4"], a: 1, e: "za-pa-to." },
    { q: "me + sa = …", o: ["same", "mesa", "masa"], a: 1, e: "mesa." },
    { q: "¿Qué es una sílaba?", o: ["Un trozo de palabra", "Una frase", "Un número"], a: 0, e: "Se dice de un golpe de voz." },
    { q: "¿Qué palabra sigue el tren «casa → sa…»?", o: ["sapo", "pato", "mesa"], a: 0, e: "sa-po empieza por sa." },
  ],
  feynman: ["Qué es una sílaba", "Cómo se cuentan las sílabas con palmadas", "Cómo se forman palabras uniendo sílabas"],
  mapa: mapa("LAS SÍLABAS", "var(--pri)", [
    ["Se forman", "consonante + vocal: ma", A],
    ["Se cuentan", "una palmada por sílaba", R],
    ["Familias", "ma, me, mi, mo, mu", V],
    ["Se juntan", "lu + na = luna", N],
  ], 220),
  tarjetas: [
    ["¿Qué es una sílaba?", "Un trozo de palabra que decimos de un golpe"],
    ["¿Cuántas sílabas tiene «sol»?", "1"],
    ["¿Cuántas sílabas tiene «casa»?", "2: ca-sa"],
    ["m + o = …", "mo"],
    ["lu + na = …", "luna"],
    ["La familia de la p", "pa, pe, pi, po, pu"],
    ["¿Cómo contamos las sílabas?", "Con palmadas"],
    ["¿Qué lleva siempre una sílaba?", "Una vocal"],
  ],
  familias: [
    "Contad sílabas con palmadas de los nombres de la familia: Ma-rí-a, Juan, Lu-cí-a.",
    "Jugad al tren de sílabas en el coche: la última sílaba empieza la siguiente palabra.",
    "Escribid sílabas en papelitos y formad palabras juntándolos: pa + to, me + sa.",
    "Al leer juntos, tapad la palabra y destapadla sílaba a sílaba.",
  ],
  profesores: PROF("Conciencia silábica y fonológica: segmentación de palabras en sílabas, síntesis de sílabas y lectura de sílabas directas", ["Palmadas, saltos o golpes de pandero para contar sílabas.", "Tarjetas de sílabas para componer palabras en la alfombra.", "Tren de palabras encadenadas por la última sílaba."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
