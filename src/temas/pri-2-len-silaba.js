// Lengua Castellana 2º de Primaria: la sílaba. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, charla, lista, mural, trozos, silabas: s } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "La sílaba",
  minutos: 25,
  objetivos: ["Saber qué es una sílaba", "Separar palabras en sílabas con palmadas", "Clasificar palabras por su número de sílabas y encontrar la sílaba que suena más fuerte"],
  claves: ["sílaba", "monosílaba", "bisílaba", "trisílaba", "polisílaba", "sílaba tónica"],
  pregunta: {
    texto: "Di tu nombre dando una palmada en cada trocito. ¿Cuántas palmadas das?",
    respuesta: "Cada palmada es una <mark>sílaba</mark>. <i>Ma-rí-a</i> tiene tres palmadas: tres sílabas.",
  },
  bloques: [
    {
      html: `<h3>Trocitos de palabra</h3><p>Cuando hablamos, las palabras salen en <mark>trocitos</mark>. Cada trocito es una <b>sílaba</b>.</p><p>Una sílaba es lo que decimos de <b>un solo golpe de voz</b>.</p><p><i>Pe-lo-ta</i> tiene tres golpes: pe, lo, ta. <i>Sol</i> tiene uno solo. Si das palmadas al hablar, oirás las sílabas.</p>`,
      svg: trozos("Pelota en tres sílabas: pe, lo, ta; sol en una sílaba", [["pelota", ["pe", "lo", "ta"], R], ["sol", ["sol"], A]]),
      video: V("silV", "las sílabas para niños"),
    },
    {
      html: `<h3>Contamos con palmadas</h3><p>Para contar sílabas, di la palabra <mark>despacio</mark> y da una palmada en cada golpe.</p><p><i>Ca-sa</i>: dos palmadas. <i>Za-pa-to</i>: tres palmadas. <i>Ma-ri-po-sa</i>: cuatro palmadas.</p><p>También puedes poner la mano bajo la barbilla. ¡Cada vez que baja, es una sílaba!</p>`,
      svg: trozos("Casa dos sílabas, zapato tres sílabas, mariposa cuatro sílabas", [["casa", ["ca", "sa"], R], ["zapato", ["za", "pa", "to"], A], ["mariposa", ["ma", "ri", "po", "sa"], Ve]]),
    },
    {
      html: `<h3>Cada sílaba tiene vocal</h3><p>En cada sílaba hay <mark>al menos una vocal</mark>. Sin vocal no hay sílaba.</p><p>Muchas sílabas son <b>consonante + vocal</b>: <i>ma</i>, <i>pe</i>, <i>lo</i>.</p><p>Otras tienen más letras: <i>tren</i>, <i>flor</i>, <i>sal</i>. Y alguna es solo una vocal: la <b>a</b> de <i>a-mi-go</i>. ¡La vocal es el corazón de la sílaba!</p>`,
      svg: frase("Sílabas ma, tren y a: todas tienen vocal", [["m<tspan fill='var(--red)'>a</tspan>", A], ["tr<tspan fill='var(--red)'>e</tspan>n", A], ["fl<tspan fill='var(--red)'>o</tspan>r", A], ["<tspan fill='var(--red)'>a</tspan>", A]], { titulo: "La vocal es el corazón", nota: "Sin vocal no hay sílaba", fs: 28 }),
    },
    {
      html: `<h3>Una sílaba y dos sílabas</h3><p>Las palabras de <mark>una sílaba</mark> se llaman <b>monosílabas</b>: <i>sol</i>, <i>pan</i>, <i>mar</i>, <i>pez</i>.</p><p>Las de <mark>dos sílabas</mark> se llaman <b>bisílabas</b>: <i>ca-sa</i>, <i>pe-rro</i>, <i>lu-na</i>.</p><p>«Mono» quiere decir uno y «bi» quiere decir dos. ¡Como la bicicleta, que tiene dos ruedas!</p>`,
      svg: trozos("Sol y pez, monosílabas; luna y perro, bisílabas", [["sol", ["sol"], R], ["pez", ["pez"], R], ["luna", ["lu", "na"], A], ["perro", ["pe", "rro"], A]]),
    },
    {
      html: `<h3>Tres sílabas o más</h3><p>Las palabras de <mark>tres sílabas</mark> son <b>trisílabas</b>: <i>to-ma-te</i>, <i>pe-lo-ta</i>, <i>co-ne-jo</i>.</p><p>Las de <mark>cuatro o más</mark> son <b>polisílabas</b>: <i>ma-ri-po-sa</i>, <i>e-le-fan-te</i>, <i>mur-cié-la-go</i>.</p><p>«Tri» es tres, como el triciclo. «Poli» es muchas. ¿Conoces alguna palabra muy larga?</p>`,
      svg: trozos("Conejo trisílaba; elefante y mariposa polisílabas", [["conejo", ["co", "ne", "jo"], Ve], ["elefante", ["e", "le", "fan", "te"], N], ["mariposa", ["ma", "ri", "po", "sa"], N]]),
    },
    {
      html: `<h3>Separar al escribir</h3><p>Para separar sílabas al escribir usamos un <mark>guion</mark>: <b>ca-sa</b>.</p><p>Si no cabe una palabra al final de la línea, la partimos por una sílaba. Nunca partimos una sílaba por la mitad.</p><p>Bien: <i>ma-</i> / <i>riposa</i>. Mal: <i>mar-</i> / <i>iposa</i>. Las letras <b>rr</b>, <b>ll</b> y <b>ch</b> no se separan: <i>pe-rro</i>, <i>ca-lle</i>, <i>co-che</i>.</p>`,
      svg: frase("Perro se separa pe-rro; calle, ca-lle; coche, co-che", [["pe-rro", A], ["ca-lle", Ve], ["co-che", N]], { titulo: "rr, ll y ch van juntas", nota: "Separamos con un guion", fs: 26 }),
      video: V("silB"),
    },
    {
      html: `<h3>La sílaba que suena fuerte</h3><p>En cada palabra hay una sílaba que suena <mark>más fuerte</mark>. Se llama <b>sílaba tónica</b>.</p><p>En <i>a-<b>vión</b></i> suena fuerte «vión». En <i><b>me</b>-sa</i> suena fuerte «me». En <i>pe-<b>lo</b>-ta</i>, «lo».</p><p>Truco: llama a la palabra como si estuviera lejos. «¡Meeesa!» La sílaba que alargas es la tónica.</p>`,
      svg: dibujos("Sílaba tónica en avión, mesa y pelota", [["avion", s("a|VIÓN", R, 1), K], ["mesa", s("ME|sa", R, 0), K], ["pelota", s("pe|LO|ta", R, 1), K]], { titulo: "¿Qué sílaba suena más fuerte?", nota: "La tónica, en rojo" }),
      video: V("silB2"),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber partir en sílabas nos ayuda a <mark>leer palabras largas</mark> sin perdernos.</p><p>También ayuda a escribir sin olvidar letras: <i>ma-ri-po-sa</i>, sílaba a sílaba.</p><p>Y sirve para hacer <b>rimas</b> y canciones. En las canciones, cada nota suele llevar una sílaba. ¡Por eso cantamos «Es-tre-lli-ta dón-de es-tás»!</p>`,
      svg: charla("Un niño lee una palabra larga por sílabas: hi-po-pó-ta-mo", [["nino", "No puedo leer esta…", A], ["nina", "Por trocitos: hi-po…", R], ["nino", "…pó-ta-mo. ¡Hipopótamo!", A], ["nina", "¡Cinco sílabas!", R]]),
    },
    {
      html: `<h3>Juego del tren de sílabas</h3><p>Cada sílaba es un <mark>vagón</mark>. Un jugador dice una palabra. El otro cuenta sus vagones con palmadas.</p><p>Después, el último vagón empieza otra palabra: <i>ca-<b>sa</b></i> → <i><b>sa</b>-po</i> → <i>po-llo</i>…</p><p>¿Cuántas palabras seguidas podéis encadenar? ¡Es la cadena de sílabas!</p>`,
      svg: frase("Cadena de sílabas: casa, sapo, pollo, lluvia", [["ca-<tspan fill='var(--red)'>sa</tspan>", A], ["→", "var(--muted)"], ["<tspan fill='var(--red)'>sa</tspan>-<tspan fill='var(--leaf)'>po</tspan>", A], ["/"], ["→", "var(--muted)"], ["<tspan fill='var(--leaf)'>po</tspan>-llo", A], ["→", "var(--muted)"], ["llu-via", A]], { titulo: "Cadena de sílabas", nota: "La última sílaba empieza otra palabra", fs: 22 }),
    },
  ],
  figura: {
    titulo: "Las palabras según sus sílabas",
    svg: mural("Monosílabas como sol, bisílabas como luna, trisílabas como conejo y polisílabas como mariposa", [["sol", "sol", "1 sílaba: monosílaba", R], ["luna", "lu-na", "2 sílabas: bisílaba", A], ["conejo", "co-ne-jo", "3 sílabas: trisílaba", Ve], ["mariposa", "ma-ri-po-sa", "4 o más: polisílaba", N]], "Una sílaba es un golpe de voz; cada una tiene una vocal"),
  },
  video: V("silV", "las sílabas para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántas sílabas tiene «zapatilla»?",
      pasos: ["Di la palabra despacio con palmadas: za-pa-ti-lla.", "Cuenta las palmadas: 4.", "La ll no se separa."],
      resultado: "4 sílabas: es polisílaba." },
    { enunciado: "Separa «chocolate» en sílabas.",
      pasos: ["Recuerda que ch va junta.", "Da palmadas: cho-co-la-te.", "Escribe con guiones."],
      resultado: "cho-co-la-te." },
    { enunciado: "¿Cuál es la sílaba tónica de «ratón»?",
      pasos: ["Separa: ra-tón.", "Llama a la palabra: «¡ratóóón!».", "La sílaba que alargas es «tón»."],
      resultado: "la tónica es «tón»." },
  ],
  errores: [
    "Separar la rr, la ll o la ch: es pe-rro, no per-ro.",
    "Hacer una sílaba sin vocal: toda sílaba tiene al menos una vocal.",
    "Contar letras en lugar de golpes de voz: «tren» tiene 4 letras y 1 sílaba.",
    "Partir una palabra al final de la línea por la mitad de una sílaba.",
  ],
  ejercicios: [
    { q: "Da palmadas y cuenta las sílabas de «pato».", sol: "2: pa-to." },
    { q: "Separa «tomate».", sol: "to-ma-te." },
    { q: "Separa «caballo».", sol: "ca-ba-llo." },
    { q: "Di una palabra monosílaba.", sol: "Por ejemplo: sol, pan, mar, flor, pez." },
    { q: "¿Cuántas sílabas tiene «elefante»?", sol: "4: e-le-fan-te. Es polisílaba." },
    { q: "¿«Mesa» es bisílaba o trisílaba?", sol: "Bisílaba: me-sa." },
    { q: "Separa «carretera».", sol: "ca-rre-te-ra." },
    { q: "Rodea la sílaba tónica de «pelota».", sol: "lo: pe-LO-ta." },
    { q: "Encadena una palabra que empiece por «ta» (de pa-ta).", sol: "Por ejemplo: taza, tapa, tambor." },
    { q: "Ordena las sílabas: sa-ri-po-ma.", sol: "ma-ri-po-sa: mariposa." },
  ],
  quiz: [
    { q: "Una sílaba es…", o: ["un golpe de voz", "una letra", "un dibujo"], a: 0, e: "Lo que decimos de un golpe." },
    { q: "¿Cuántas sílabas tiene «luna»?", o: ["1", "2", "3"], a: 1, e: "lu-na." },
    { q: "«Sol» es una palabra…", o: ["monosílaba", "bisílaba", "trisílaba"], a: 0, e: "Una sola sílaba." },
    { q: "¿Cuál es trisílaba?", o: ["pan", "casa", "conejo"], a: 2, e: "co-ne-jo." },
    { q: "Toda sílaba tiene…", o: ["una vocal", "una h", "una ñ"], a: 0, e: "Al menos una vocal." },
    { q: "¿Cómo se separa «perro»?", o: ["per-ro", "pe-rro", "perr-o"], a: 1, e: "rr va junta." },
    { q: "¿Cuántas sílabas tiene «mariposa»?", o: ["3", "4", "5"], a: 1, e: "ma-ri-po-sa." },
    { q: "La sílaba que suena más fuerte es la…", o: ["tónica", "última siempre", "primera siempre"], a: 0, e: "Sílaba tónica." },
    { q: "Tónica de «camión»:", o: ["ca", "mión", "las dos"], a: 1, e: "ca-MIÓN." },
    { q: "Para separar sílabas escribimos…", o: ["un guion", "un punto", "una coma"], a: 0, e: "ca-sa." },
  ],
  examen: [
    { q: "¿Cuántas sílabas tiene «zapato»?", o: ["2", "3", "4"], a: 1, e: "za-pa-to." },
    { q: "¿Cuál es bisílaba?", o: ["mesa", "flor", "pelota"], a: 0, e: "me-sa." },
    { q: "¿Cómo se separa «coche»?", o: ["coc-he", "co-che", "c-oche"], a: 1, e: "ch va junta." },
    { q: "Tónica de «mesa»:", o: ["me", "sa", "ninguna"], a: 0, e: "ME-sa." },
  ],
  feynman: ["Qué es una sílaba y cómo se cuentan", "Cómo se llaman las palabras según sus sílabas", "Qué es la sílaba tónica"],
  mapa: mapa("LA SÍLABA", "var(--pri)", [
    ["Qué es", "un golpe de voz: ca-sa", R],
    ["Tiene", "siempre una vocal", A],
    ["Cuántas", "mono, bi, tri, polisílaba", Ve],
    ["Tónica", "suena más fuerte: ME-sa", N],
  ], 230),
  tarjetas: [
    ["¿Qué es una sílaba?", "Un golpe de voz"],
    ["¿Cómo se cuentan?", "Con palmadas"],
    ["Palabra de 1 sílaba", "Monosílaba: sol"],
    ["Palabra de 2 sílabas", "Bisílaba: ca-sa"],
    ["Palabra de 3 sílabas", "Trisílaba: to-ma-te"],
    ["4 o más sílabas", "Polisílaba: ma-ri-po-sa"],
    ["¿Qué letras no se separan?", "rr, ll, ch"],
    ["¿Qué es la sílaba tónica?", "La que suena más fuerte"],
  ],
  familias: [
    "Contad sílabas con palmadas de los nombres de la familia.",
    "Jugad a la cadena de sílabas en el coche o en la cola.",
    "Buscad la palabra más larga del día y separadla en sílabas.",
    "Llamad a objetos como si estuvieran lejos para oír la sílaba tónica.",
  ],
  profesores: PROF("Conciencia silábica: segmentación de palabras en sílabas, clasificación por número de sílabas, dígrafos que no se separan y sílaba tónica", ["Palmadas y saltos para segmentar.", "Tren de sílabas con vagones de cartulina.", "Clasificar tarjetas en cajas de 1, 2, 3 y 4 sílabas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
