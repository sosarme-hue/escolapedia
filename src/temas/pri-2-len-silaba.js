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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Reconocer sílabas directas, inversas y trabadas", "Saber que dos vocales pueden ir en la misma sílaba", "Clasificar palabras por su número de sílabas", "Jugar con sílabas para formar palabras nuevas"],
  lectura: { titulo: "El robot que hablaba a trozos", html: `<p>En la clase de 2.º hay un robot nuevo para aprender a leer. Se llama Silabín y es muy simpático, pero tiene una forma rara de hablar.</p><p>—Bue-nos dí-as, ni-ños —dice cada mañana, con voz de lata.</p><p>Los niños se ríen. ¡Silabín habla a trozos!</p><p>—Es que yo di-go las pa-la-bras por sí-la-bas —explica el robot—. Así es más fá-cil leer-las.</p><p>Un día, Silabín se queda sin pilas a mitad de una palabra:</p><p>—Me gus-ta mu-cho el cho-co…</p><p>—¡…late! —gritan los niños.</p><p>La maestra le pone pilas nuevas y Silabín termina:</p><p>—…la-te. ¡Gra-cias, a-mi-gos!</p><p>Desde entonces, cuando alguien no sabe leer una palabra larga, los compañeros le dicen: «¡Haz como Silabín!». Y la palabra, trocito a trocito, siempre sale.</p>` },
  tras: {
    "Cada sílaba tiene vocal": [
      ["Dos vocales juntas en una sílaba", `<p>A veces, en una misma sílaba hay <mark>dos vocales juntas</mark>. Se pronuncian de un solo golpe de voz:</p><ul><li><b>pie</b>: una sílaba.</li><li><b>cie</b>-lo: la primera sílaba tiene i y e.</li><li><b>bue</b>-no: la primera sílaba tiene u y e.</li><li><b>au</b>-la: a y u juntas.</li><li><b>pei</b>-ne: e e i juntas.</li></ul><p>Esto pasa normalmente cuando una de las vocales es <b>i</b> o <b>u</b>. Estas dos vocales son «débiles» y se pegan a las demás.</p><p>Pero a veces las vocales van separadas: <b>le-ón</b>, <b>pa-se-o</b>, <b>ma-íz</b>, <b>rí-o</b>. Para saberlo, damos palmadas: si oímos dos golpes, son dos sílabas.</p><p>Cuando escribimos y no cabe una palabra al final de la línea, nunca podemos separar dos vocales que van en la misma sílaba. Escribimos «cie-» en una línea y «lo» en la siguiente, pero nunca «ci-» y «elo».</p><p><b>Actividad</b>: separa en sílabas: cuento, nieve, aire, Daniel.</p>`,
        L6.filas("Juntas", [["pie", "1 sílaba", cNA], ["cie-lo", "ie", cAZ], ["bue-no", "ue", cVE], ["au-la", "au", cRO]])],
    ],
    "Una sílaba y dos sílabas": [
      ["Sílabas directas, inversas y trabadas", `<p>Las sílabas pueden tener formas diferentes:</p><ul><li><mark>Directas</mark>: consonante + vocal. <b>ma</b>, <b>pe</b>, <b>lo</b>. Son las primeras que aprendemos: <b>ma-sa</b>.</li><li><mark>Inversas</mark>: vocal + consonante. <b>al</b>, <b>en</b>, <b>es</b>, <b>ir</b>. Como en <b>ár-bol</b> o <b>es-to</b>.</li><li><mark>Trabadas</mark>: dos consonantes seguidas + vocal. <b>bra</b>, <b>cla</b>, <b>pri</b>, <b>flo</b>, <b>tre</b>. Como en <b>bra-zo</b>, <b>pla-to</b>, <b>flor</b>.</li></ul><p>Las trabadas llevan una <b>l</b> o una <b>r</b> como segunda letra: bl, cl, fl, gl, pl, br, cr, dr, fr, gr, pr, tr.</p><p>Al leer, las sílabas trabadas son las más difíciles. ¡Hay que decir las dos consonantes!</p><p>Fíjate en la palabra <b>flor</b>: tiene una sílaba trabada y, además, termina en consonante. ¡Es una sílaba muy completa!</p><p><b>Actividad</b>: busca tres palabras con sílabas trabadas: una con bl, otra con pr y otra con tr.</p>`,
        H6.flujo("Sílabas", ["directa|ma", "inversa|al", "trabada|bra", "trabada|flo"], cAZ)],
    ],
    "Tres sílabas o más": [
      ["Palabras muy largas", `<p>Algunas palabras tienen <mark>muchísimas sílabas</mark>. ¡Son un reto para leer!</p><ul><li><b>ma-ri-po-sa</b>: 4 sílabas.</li><li><b>he-li-cóp-te-ro</b>: 5 sílabas.</li><li><b>bi-ci-cle-ta</b>: 4 sílabas.</li><li><b>hi-po-pó-ta-mo</b>: 5 sílabas.</li><li><b>o-tor-ri-no-la-rin-gó-lo-go</b>: ¡9 sílabas! Es el médico de oídos, nariz y garganta.</li></ul><p>Según el número de sílabas, las palabras se llaman:</p><ul><li><b>Monosílabas</b>: 1 sílaba (sol, pan).</li><li><b>Bisílabas</b>: 2 sílabas (ca-sa).</li><li><b>Trisílabas</b>: 3 sílabas (pe-lo-ta).</li><li><b>Polisílabas</b>: 4 o más (ma-ri-po-sa).</li></ul><p>Para leer una palabra larga sin equivocarte, tápala con el dedo y ve descubriendo una sílaba cada vez. Luego léela entera de un tirón.</p><p><b>Actividad</b>: busca la palabra más larga de tu libro de lectura y cuenta sus sílabas.</p>`,
        L6.filas("Nombres", [["mono-", "1: sol", cNA], ["bi-", "2: casa", cAZ], ["tri-", "3: pelota", cVE], ["poli-", "4+: mariposa", cRO]])],
    ],
    "La sílaba que suena fuerte": [
      ["La sílaba fuerte cambia el significado", `<p>A veces, cambiar la <mark>sílaba que suena más fuerte</mark> cambia el significado de la palabra:</p><ul><li><b>pa</b>pa (el alimento) / pa<b>pá</b> (el padre).</li><li><b>ma</b>ma / ma<b>má</b>.</li><li><b>tér</b>mino (fin) / ter<b>mi</b>no (yo acabo) / termi<b>nó</b> (él acabó).</li><li><b>sá</b>bana (de la cama) / sa<b>ba</b>na (paisaje con hierba).</li></ul><p>Por eso es tan importante pronunciar bien. La sílaba que suena fuerte se llama <b>sílaba tónica</b>, y a veces lleva una tilde para avisarnos.</p><p>Para encontrarla, di la palabra como si llamaras a alguien desde lejos: «¡Ma-rí-aaa!». La sílaba que alargas es la tónica.</p><p>¡Prueba con tu propio nombre!</p><p><b>Actividad</b>: di en voz alta «papa» y «papá». ¿Qué cambia?</p>`,
        H6.dos("Cambia", ["PAPA", ["fuerte: pa-", "alimento", "patata"], cNA], ["PAPÁ", ["fuerte: -pá", "el padre", "con tilde"], cAZ])],
    ],
  },
  final: [
    ["Jugar con sílabas", `<p>Con las sílabas podemos hacer <mark>juegos</mark> muy divertidos:</p><ul><li><b>Cambiar el orden</b>: ca-sa → sa-ca; to-ma → ma-to; lo-bo → bo-lo.</li><li><b>Quitar una sílaba</b>: pe-lo-ta → pe-lo; ma-ri-po-sa → po-sa.</li><li><b>Añadir una sílaba</b>: sa-la → sa-la-do; pa-to → za-pa-to.</li><li><b>Palabras encadenadas</b>: la última sílaba de una palabra es la primera de la siguiente. ca-<b>sa</b> → <b>sa</b>-po → <b>po</b>-llo → <b>llo</b>-ro…</li></ul><p>Estos juegos ayudan a leer y escribir mejor, porque entrenamos el oído para escuchar cada trocito.</p><p><b>Actividad</b>: jugad en clase a las palabras encadenadas. ¡Pierde quien tarde más de cinco segundos!</p>`,
      H6.flujo("Cadena", ["ca-SA|casa", "SA-PO|sapo", "PO-LLO|pollo", "LLO-RO|lloro"], cVE)],
    ["Repaso: el robot Silabín", `<p>Repasamos con las palabras de la <mark>lectura</mark>:</p><ul><li><b>Bue-nos</b>: 2 sílabas; «bue» tiene dos vocales juntas.</li><li><b>dí-as</b>: 2 sílabas; la í separa las vocales.</li><li><b>pa-la-bras</b>: 3 sílabas; «bras» es trabada.</li><li><b>cho-co-la-te</b>: 4 sílabas, polisílaba.</li><li><b>Si-la-bín</b>: 3 sílabas; la tónica es «bín», con tilde.</li><li><b>pi-las</b>: 2 sílabas, bisílaba.</li><li><b>es</b>: 1 sílaba inversa, monosílaba.</li></ul><p>Silabín hablaba a trozos, pero su truco es muy bueno: cuando una palabra es larga y difícil, la dividimos en sílabas y la leemos poco a poco.</p><p><b>Actividad</b>: habla como Silabín durante un minuto y di cinco palabras separadas en sílabas.</p>`,
      L6.filas("Silabín", [["bue-nos", "ue juntas", cNA], ["pa-la-bras", "trabada", cAZ], ["cho-co-la-te", "4 sílabas", cVE], ["Si-la-bín", "tónica: bín", cRO]])],
  ],
  ejemplos: [
    ["Separa «nieve» en sílabas.", ["Doy palmadas: nie-ve.", "«ie» van juntas."], "nie-ve (2 sílabas)."],
    ["¿Qué tipo de sílaba es «tre» en «tren»?", ["Tiene dos consonantes seguidas + vocal."], "Trabada."],
  ],
  errores: ["Separar «bue-no» como «bu-e-no».", "No pronunciar las dos consonantes de las sílabas trabadas."],
  ejercicios: [
    ["b", "Separa: aula.", "au-la."],
    ["b", "¿Cuántas sílabas tiene «mariposa»?", "4."],
    ["b", "Di una palabra monosílaba.", "Sol, pan, mar…"],
    ["b", "¿Qué tipo de sílaba es «al»?", "Inversa."],
    ["b", "Escribe una palabra con «pla».", "Plato, playa…"],
    ["m", "Separa: cuento, peine, León.", "cuen-to, pei-ne, Le-ón."],
    ["m", "Clasifica: sol, pelota, casa, bicicleta.", "Mono, tri, bi, polisílaba."],
    ["m", "¿Qué diferencia hay entre «papa» y «papá»?", "La sílaba fuerte y el significado."],
    ["m", "Continúa la cadena: mesa → sapo → …", "Pollo, pomo…"],
    ["m", "Añade una sílaba a «pato» para formar otra palabra.", "Zapato."],
    ["a", "En la lectura, ¿qué palabra se queda a medias?", "Chocolate."],
    ["a", "Cuenta las sílabas de «otorrinolaringólogo».", "9."],
    ["a", "Escribe una frase con una sílaba directa, una inversa y una trabada.", "Respuesta libre."],
    ["a", "Explica cómo encontrar la sílaba tónica.", "Diciendo la palabra como si llamaras a alguien de lejos."],
  ],
  quiz: [
    ["«Bra» es una sílaba…", ["trabada", "inversa", "directa"], "Tipos."],
    ["«Pie» tiene…", ["1 sílaba", "2 sílabas", "3 sílabas"], "Vocales juntas."],
    ["Una palabra de 3 sílabas es…", ["trisílaba", "bisílaba", "monosílaba"], "Nombres."],
    ["La sílaba que suena fuerte es la…", ["tónica", "trabada", "inversa"], "Tónica."],
    ["«Papá» y «papa» se diferencian en…", ["la sílaba fuerte", "las letras", "el número"], "Significado."],
  ],
  examen: [
    ["En la lectura, ¿por qué se para Silabín?", ["se queda sin pilas", "se enfada", "se rompe"], "Lectura."],
    ["«Chocolate» es…", ["polisílaba", "trisílaba", "bisílaba"], "Repaso."],
  ],
  tarjetas: [
    ["Tipos de sílaba", "Directa (ma), inversa (al), trabada (bra)."],
    ["Vocales juntas", "Con i o u se pegan: bue-no, au-la."],
  ],
  glosario: [
    ["Sílaba", "Golpe de voz de una palabra."],
    ["Directa", "Sílaba consonante + vocal."],
    ["Inversa", "Sílaba vocal + consonante."],
    ["Trabada", "Sílaba con dos consonantes y vocal."],
    ["Monosílaba", "Palabra de una sílaba."],
    ["Bisílaba", "Palabra de dos sílabas."],
    ["Trisílaba", "Palabra de tres sílabas."],
    ["Polisílaba", "Palabra de cuatro o más sílabas."],
    ["Sílaba tónica", "La que suena más fuerte."],
    ["Encadenar", "Unir una cosa detrás de otra."],
  ],
  situacion: {
    titulo: "El tren de las sílabas",
    reto: "La clase construye un tren de cartón con vagones para palabras de 1, 2, 3 y 4 o más sílabas.",
    pasos: ["Recortar palabras de revistas y separarlas en sílabas.", "Colocar cada palabra en el vagón que le toca.", "Marcar con color las sílabas trabadas e inversas.", "Jugar a las palabras encadenadas con las del tren."],
    producto: "Un tren de sílabas en el pasillo.",
    evaluacion: ["Separa palabras en sílabas.", "Distingue sílabas directas, inversas y trabadas.", "Clasifica por número de sílabas.", "Encuentra la sílaba tónica."],
  },
});
