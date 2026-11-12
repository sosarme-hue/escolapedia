// Llengua Catalana 1r de Primària: masculí i femení. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, parejas, frase, charla, mural, vid } = require("./_peque");
const { FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "1-primaria",
  titulo: "Masculí i femení",
  minutos: 20,
  objetivos: ["Distingir paraules masculines i femenines", "Fer servir el, la, l', un i una amb cada paraula", "Passar paraules de masculí a femení"],
  claves: ["masculí", "femení", "el", "la", "l'", "un", "una"],
  pregunta: {
    texto: "Diem «el taula» o «la taula»? I «la llibre» o «el llibre»? Com ho saps?",
    respuesta: "Diem <b>la taula</b> i <b>el llibre</b>. «Taula» és una paraula <mark>femenina</mark> i «llibre» és <mark>masculina</mark>. Ho saps perquè et sona bé!",
  },
  bloques: [
    {
      html: `<h3>Nen i nena</h3><p>Algunes paraules canvien si parlem d'un noi o d'una noia.</p><p>Diem <b>nen</b> i <b>nena</b>. <i>Nen</i> és <mark>masculí</mark>. <i>Nena</i> és <mark>femení</mark>.</p><p>Passa igual amb <i>avi</i> i <i>àvia</i>. I amb <i>germà</i> i <i>germana</i>. Només canvia el final de la paraula. Ho sents? Digues-ho fluix i després fort.</p>`,
      svg: parejas("Nen és masculí i nena és femení; avi i àvia també", [["nino", "nen", "nina", "nena"], ["abuelo", "avi", "abuela", "àvia"]], { izq: "masculí", der: "femení" }),
      video: vid("RFQGf8yEb7w", "Els noms: gramàtica, vídeos educatius", "Aprenc Més", 23336, 160),
    },
    {
      html: `<h3>El, la i l'</h3><p>Davant de les paraules masculines diem <mark>el</mark>: <b>el</b> gat, <b>el</b> sol. Davant de les femenines diem <mark>la</mark>: <b>la</b> casa, <b>la</b> lluna.</p><p>Si la paraula comença per vocal, fem servir <mark>l'</mark>, amb apòstrof: <b>l'</b>avi, <b>l'</b>àvia, <b>l'</b>ós. Així sona més bé. Prova-ho en veu alta, molt a poc a poc!</p>`,
      svg: parejas("El sol i la lluna; l'ós amb apòstrof", [["sol", "el sol", "luna", "la lluna"], ["gato", "el gat", "casa", "la casa"], ["oso", "l'ós", "abuela", "l'àvia"]], { izq: "masculí", der: "femení" }),
    },
    {
      html: `<h3>Afegim una -a</h3><p>Moltes paraules passen a femení <mark>afegint una a</mark> al final.</p><p><b>gat</b> → <b>gata</b>. <b>nen</b> → <b>nena</b>. <b>senyor</b> → <b>senyora</b>. <b>lleó</b> → <b>lleona</b>.</p><p>És el canvi més fàcil i el que fem servir més. Digues en veu alta: <i>el gat, la gata; el veí, la veïna</i>. Que fàcil! Ara prova tu amb <i>conill</i>.</p>`,
      svg: parejas("Gat i gata, senyor i senyora, lleó i lleona: s'afegeix una a", [["gato", "gat", "gato", "gata"], ["papa", "senyor", "mama", "senyora"], ["leon", "lleó", "leon", "lleona"]], { izq: "masculí", der: "+ a" }),
    },
    {
      html: `<h3>Canvis especials</h3><p>De vegades, el femení fa un <mark>petit canvi</mark> més.</p><p><b>gos</b> → <b>gossa</b>: la s es dobla. <b>cosí</b> → <b>cosina</b>: afegim -na. <b>mestre</b> → <b>mestra</b>: la e es canvia per a.</p><p>No t'amoïnis: si ho dius en veu alta, l'orella t'ajuda. Aviat ho sabràs de memòria. Ara prova tu amb <i>veí</i>.</p>`,
      svg: parejas("Gos i gossa, cosí i cosina, mestre i mestra", [["perro", "gos", "perro", "gossa"], ["nino", "cosí", "nina", "cosina"], [null, "mestre", null, "mestra"]], { izq: "masculí", der: "femení" }),
    },
    {
      html: `<h3>Paraules molt diferents</h3><p>De vegades el femení és <mark>una paraula diferent</mark>.</p><p><b>pare</b> i <b>mare</b>. <b>home</b> i <b>dona</b>. <b>gall</b> i <b>gallina</b>. <b>bou</b> i <b>vaca</b>.</p><p>Aquestes parelles s'han d'aprendre de memòria. Però no pateixis: moltes ja les coneixes perquè les fas servir des de petit. En saps alguna altra?</p>`,
      svg: parejas("Pare i mare, bou i vaca, home i dona: el femení és una altra paraula", [["papa", "pare", "mama", "mare"], [null, "bou", null, "vaca"], [null, "home", null, "dona"]], { izq: "masculí", der: "femení" }),
    },
    {
      html: `<h3>Les coses també</h3><p>Les coses no són nois ni noies. Però els seus noms també són <mark>masculins o femenins</mark>.</p><p><b>El</b> llapis i <b>el</b> llibre són masculins. <b>La</b> taula i <b>la</b> cadira són femenins.</p><p>Aquí no podem canviar la paraula. No existeix «la llapisa». Només mirem si va amb <i>el</i> o amb <i>la</i>.</p>`,
      svg: dibujos("El llapis, el llibre, la taula i la cadira", [["lapiz", "el llapis", A], ["libro", "el llibre", A], ["mesa", "la taula", R], ["silla", "la cadira", R]], { titulo: "Coses amb el i amb la" }),
    },
    {
      html: `<h3>Un i una</h3><p>També fem servir <mark>un</mark> i <mark>una</mark>.</p><p><b>Un</b> va amb paraules masculines: <i>un gat, un cotxe</i>. <b>Una</b> va amb paraules femenines: <i>una gata, una pilota</i>.</p><p>Diem <i>un</i> i <i>una</i> quan parlem d'una cosa per primer cop. «He vist <b>un</b> gos. <b>El</b> gos era molt simpàtic.»</p>`,
      svg: parejas("Un cotxe i una pilota; un ànec i una ànega", [["coche", "un cotxe", "pelota", "una pilota"], ["pato", "un ànec", "pato", "una ànega"]], { izq: "un", der: "una" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Saber si una paraula és masculina o femenina ens ajuda a <mark>parlar bé</mark>.</p><p>Les paraules d'una frase han d'<b>anar a joc</b>: <i>el gat blanc</i>, <i>la gata blanca</i>.</p><p>Si diem «la gat blanc», sona estrany i costa d'entendre. Les paraules que van juntes es posen el mateix vestit! Així tot encaixa.</p>`,
      svg: frase("El gat blanc i la gata blanca: les paraules van a joc", [["el", A], ["gat", A], ["blanc", A], ["/"], ["la", R], ["gata", R], ["blanca", R]], { titulo: "Les paraules van a joc", nota: "Mateix color, mateix vestit", fs: 24 }),
    },
    {
      html: `<h3>Juguem a «el o la?»</h3><p>Un jugador diu una paraula sense <i>el</i> ni <i>la</i>: «pilota!».</p><p>L'altre contesta ràpid: «<mark>la pilota!</mark>».</p><p>Després canviem: «sabata!» «La sabata!». Si t'equivoques, perds un punt. Podeu fer servir coses de casa, del parc o de la classe. A veure qui respon més de pressa!</p>`,
      svg: charla("Joc: un diu pilota i l'altra contesta la pilota; un diu llibre i l'altra contesta el llibre", [["nino", "Pilota!", A], ["nina", "La pilota!", R], ["nino", "Llibre!", A], ["nina", "El llibre!", R]]),
    },
  ],
  figura: {
    titulo: "Masculí i femení",
    svg: mural("Quatre maneres: el gat i la gata, el gos i la gossa, el pare i la mare, el llapis i la taula", [["gato", "gat · gata", "s'afegeix a", A], ["perro", "gos · gossa", "canvi especial", R], ["mama", "pare · mare", "una altra paraula", V], ["mesa", "el · la · l'", "també les coses", N]], "Així es forma el femení"),
  },
  video: { ...vid("Bd_OvfoZI-g", "L'apostrofació dels articles el i la", "OK CATALÀ", 104938, 1544), busqueda: "masculí i femení en català per a nens" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Quin és el femení de «conill»?",
      pasos: ["Mira com acaba: conill acaba en ll.", "Afegim una a al final.", "Digues la paraula nova: conilla."],
      resultado: "el femení de «conill» és «conilla»." },
    { enunciado: "«El», «la» o «l'» davant d'«ós»?",
      pasos: ["Ós és masculí: aniria amb el.", "Però comença per vocal: o.", "Davant de vocal fem servir l': l'ós."],
      resultado: "diem «l'ós»." },
    { enunciado: "Posa a joc: «la casa ___ (bonic)».",
      pasos: ["Casa és femenina: va amb la.", "La paraula que l'acompanya també ha de ser femenina.", "Bonic passa a bonica."],
      resultado: "«la casa bonica»." },
  ],
  errores: [
    "Dir «el ós» o «la àvia»: davant de vocal fem servir l', l'ós i l'àvia.",
    "Inventar femenins que no existeixen, com «la llapisa»: les coses no canvien.",
    "Oblidar que algunes parelles són paraules diferents: el femení de pare és mare.",
    "No posar a joc les paraules: «el gat negra». Ha de ser «el gat negre».",
  ],
  ejercicios: [
    { q: "Digues el femení de «nen».", sol: "Nena." },
    { q: "Digues el femení de «gat».", sol: "Gata." },
    { q: "Digues el femení de «gos».", sol: "Gossa." },
    { q: "Digues el femení de «pare».", sol: "Mare." },
    { q: "«El» o «la»? ___ lluna.", sol: "La lluna." },
    { q: "«El» o «la»? ___ cotxe.", sol: "El cotxe." },
    { q: "Com diem: «el avi» o «l'avi»?", sol: "L'avi, perquè avi comença per vocal." },
    { q: "Digues el masculí d'«àvia».", sol: "Avi." },
    { q: "Posa a joc: «la pilota ___ (vermell)».", sol: "La pilota vermella." },
    { q: "Digues tres coses de la classe amb «la».", sol: "Per exemple: la taula, la cadira, la pissarra." },
  ],
  quiz: [
    { q: "El femení de «gat» és…", o: ["gata", "gats", "gatet"], a: 0, e: "S'afegeix una a." },
    { q: "Quina va amb «la»?", o: ["sol", "lluna", "llibre"], a: 1, e: "La lluna." },
    { q: "Quina va amb «el»?", o: ["taula", "flor", "cotxe"], a: 2, e: "El cotxe." },
    { q: "El femení de «gos» és…", o: ["gosa", "gossa", "gosos"], a: 1, e: "La s es dobla: gossa." },
    { q: "El femení de «bou» és…", o: ["boua", "vaca", "bous"], a: 1, e: "És una altra paraula: vaca." },
    { q: "Davant d'«avi» diem…", o: ["el avi", "l'avi", "la avi"], a: 1, e: "Davant de vocal, l'." },
    { q: "Què està ben dit?", o: ["la gat", "el gata", "la gata"], a: 2, e: "La gata." },
    { q: "«Nena» és…", o: ["masculí", "femení", "plural"], a: 1, e: "Femení." },
    { q: "Què està a joc?", o: ["la casa blanc", "la casa blanca", "el casa blanca"], a: 1, e: "Tot femení." },
    { q: "El femení de «llapis» és…", o: ["llapisa", "no en té: és una cosa", "llapissos"], a: 1, e: "Les coses no canvien." },
  ],
  examen: [
    { q: "El femení de «lleó» és…", o: ["lleona", "lleons", "lleoa"], a: 0, e: "lleona." },
    { q: "Quin és masculí?", o: ["la cadira", "el llibre", "la flor"], a: 1, e: "El llibre." },
    { q: "Completa: «___ pilota»", o: ["un", "una", "el"], a: 1, e: "Una pilota." },
    { q: "El femení d'«home» és…", o: ["homa", "dona", "homes"], a: 1, e: "Dona." },
  ],
  feynman: ["Quines paraules són masculines i quines femenines", "Quan fem servir el, la i l'", "Tres maneres de fer el femení"],
  mapa: mapa("MASCULÍ I FEMENÍ", "var(--pri)", [
    ["Masculí", "el, un: el gat", A],
    ["Femení", "la, una: la gata", R],
    ["Canvis", "+a · gos→gossa · pare→mare", V],
    ["Apòstrof", "l'avi, l'àvia", N],
  ], 230),
  tarjetas: [
    ["Femení de «nen»", "Nena"],
    ["Femení de «lleó»", "Lleona"],
    ["Femení de «pare»", "Mare"],
    ["El o la? ___ flor", "La flor"],
    ["El o la? ___ sol", "El sol"],
    ["Com diem davant d'«ós»?", "L'ós"],
    ["Masculí o femení? «llibre»", "Masculí"],
    ["A joc: «el gos ___ (blanc)»", "El gos blanc"],
  ],
  familias: [
    "Jugueu a «el o la?» amb objectes de casa mentre endreceu.",
    "Anomeneu animals de la granja en parella: gall i gallina, bou i vaca.",
    "Quan llegiu un conte, busqueu junts paraules amb el, la i l'.",
    "Si diu «el taula», repetiu la frase bé sense renyar: «Sí, la taula».",
  ],
  profesores: {
    saberes: "Reflexió sobre la llengua: el gènere del nom, els determinants el, la, l', un, una i la concordança bàsica de gènere (RD 157/2022 i Decret 175/2022 de Catalunya, primer cicle).",
    ideas: ["Capsa misteriosa: treure objectes i anomenar-los amb el, la o l'.", "Parelles de targetes masculí i femení per aparellar.", "Mural de la granja amb parelles d'animals."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
