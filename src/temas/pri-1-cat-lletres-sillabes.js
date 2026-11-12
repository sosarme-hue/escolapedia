// Llengua Catalana 1r de Primària: lletres i síl·labes. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, lista, mural, trozos, silabas: s, vid } = require("./_peque");
const { FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", G = "var(--muted)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "1-primaria",
  titulo: "Lletres i síl·labes",
  minutos: 20,
  objetivos: ["Ajuntar una consonant i una vocal per formar una síl·laba", "Separar paraules en síl·labes picant de mans", "Formar paraules noves ajuntant síl·labes"],
  claves: ["lletra", "síl·laba", "picar de mans", "paraula curta", "paraula llarga"],
  pregunta: {
    texto: "Digues «papallona» i pica de mans a cada tros. Quantes vegades has picat?",
    respuesta: "Has picat <mark>4 vegades</mark>: pa-pa-llo-na. Cada tros que sona d'un sol cop es diu <b>síl·laba</b>.",
  },
  bloques: [
    {
      html: `<h3>Les lletres s'ajunten</h3><p>Les lletres gairebé mai no van soles. S'ajunten per sonar.</p><p>Si ajuntem la <b>m</b> i la <b>a</b>, sona <mark>ma</mark>. Si ajuntem la <b>s</b> i la <b>o</b>, sona <mark>so</mark>.</p><p>Primer diem el so de la consonant. Després, sense parar, diem la vocal. Així llegim síl·labes. Al principi anem a poc a poc i després més de pressa.</p>`,
      svg: frase("La m i la a fan ma; la s i la o fan so", [["m", A], ["+", G], ["a", R], ["=", G], ["ma", V], ["/"], ["s", A], ["+", G], ["o", R], ["=", G], ["so", V]], { titulo: "Consonant + vocal", fs: 24 }),
    },
    {
      html: `<h3>Què és una síl·laba?</h3><p>Una <mark>síl·laba</mark> és un tros de paraula.</p><p>La diem d'un <b>sol cop de veu</b>.</p><p>La paraula «gata» té dues síl·labes: <b>ga</b> i <b>ta</b>. La paraula «sol» en té només una. Totes les síl·labes tenen almenys una vocal. Sense vocal no hi ha síl·laba! Fixa't: a «ga» hi ha la a.</p>`,
      svg: fichas("La paraula gata partida en dues síl·labes: ga i ta", [["ga", A], ["ta", R]], { titulo: "gata", nota: "ga-ta: 2 síl·labes", grande: true }),
    },
    {
      html: `<h3>Comptem picant de mans</h3><p>Per comptar les síl·labes, diem la paraula a poc a poc.</p><p>Piquem <mark>de mans</mark> a cada tros.</p><p><b>Sol</b>: un cop. <b>Ga-ta</b>: dos cops. <b>Pa-pa-llo-na</b>: quatre cops. També pots fer saltets o cops a la taula. Cada cop és una síl·laba! Prova-ho amb el teu nom.</p>`,
      svg: trozos("Un sol amb 1 síl·laba, una gata amb 2 i una papallona amb 4", [["sol", ["sol"], A], ["gato", ["ga", "ta"], R], ["mariposa", ["pa", "pa", "llo", "na"], V]]),
      video: vid("0wC7EBNBxns", "Síl·labes (tutorial)", "María José F S", 19311, 97),
    },
    {
      html: `<h3>Paraules curtes i llargues</h3><p>Hi ha paraules d'<b>una</b> síl·laba, com <i>pa</i> o <i>mar</i>.</p><p>Altres en tenen <b>dues</b>, com <i>ca-sa</i>. Altres en tenen <b>tres</b>, com <i>pi-lo-ta</i>.</p><p>Les més llargues en tenen <mark>quatre o més</mark>: <i>pa-pa-llo-na</i>. Com més síl·labes, més cops de mans. Quina paraula llarga coneixes tu?</p>`,
      svg: trozos("Pa té 1 síl·laba, casa 2, pilota 3 i papallona 4", [["pan", ["pa"], A], ["casa", ["ca", "sa"], R], ["pelota", ["pi", "lo", "ta"], V], ["mariposa", ["pa", "pa", "llo", "na"], N]]),
    },
    {
      html: `<h3>La família de la m</h3><p>La <b>m</b> s'ajunta amb cada vocal.</p><p>Així surten cinc síl·labes: <mark>ma, me, mi, mo, mu</mark>.</p><p>Amb elles llegim moltes paraules: <i>mama</i>, <i>mona</i>, <i>moto</i>. El mateix passa amb altres lletres. La <b>p</b> forma pa, pe, pi, po, pu. Amb ella llegim <i>papa</i> i <i>pipa</i>.</p>`,
      svg: fichas("Les síl·labes ma, me, mi, mo, mu i pa, pe, pi, po, pu", [["ma", R], ["me", A], ["mi", V], ["mo", N], ["mu", M], ["pa", R], ["pe", A], ["pi", V], ["po", N], ["pu", M]], { titulo: "Famílies de síl·labes", nota: "mama · moto · pipa · puma" }),
    },
    {
      html: `<h3>Més famílies: l i s</h3><p>La <b>l</b> forma <mark>la, le, li, lo, lu</mark>. La <b>s</b> forma <mark>sa, se, si, so, su</mark>.</p><p>Amb la <b>l</b> llegim <i>lila</i> i <i>pilota</i>. Amb la <b>s</b> llegim <i>sopa</i> i <i>sol</i>.</p><p>Quan saps una família, ja pots llegir moltes paraules noves. Cada família és una clau màgica! Quina família vols aprendre ara?</p>`,
      svg: dibujos("Una pilota, una sopa i un sol", [["pelota", s("pi|lo|ta", R, 1), K], ["sopa", s("so|pa", A), K], ["sol", s("so|l", A), K]], { titulo: "Amb l i amb s" }),
    },
    {
      html: `<h3>Ajuntem síl·labes</h3><p>Les síl·labes s'uneixen com les <mark>peces d'un trencaclosques</mark>.</p><p><b>llu</b> + <b>na</b> = <i>lluna</i>. <b>tau</b> + <b>la</b> = <i>taula</i>.</p><p>Si canviem l'ordre, pot sortir una altra paraula. <b>ma</b> + <b>la</b> és <i>mala</i>. <b>la</b> + <b>ma</b> és <i>lama</i>. L'ordre és important! Llegeix sempre d'esquerra a dreta, com quan escrius al quadern.</p>`,
      svg: frase("llu més na és lluna; tau més la és taula", [["llu", A], ["+", G], ["na", R], ["=", G], ["lluna", V], ["/"], ["tau", A], ["+", G], ["la", R], ["=", G], ["taula", V]], { titulo: "Peces d'un trencaclosques", nota: "L'ordre és important!", fs: 22 }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Llegir per síl·labes és <mark>més fàcil</mark> que llegir lletra a lletra.</p><p>Quan escrivim, diem cada síl·laba a poc a poc. Així <b>no ens saltem</b> cap lletra.</p><p>Les síl·labes també serveixen per cantar i fer rimes. A les cançons, cada nota sol portar una síl·laba. Les fem servir tot el dia!</p>`,
      svg: lista("Les síl·labes serveixen per llegir, escriure i cantar", [["Llegeixo més fàcil", A], ["Escric bé", R], ["Canto i rimo", V]], { titulo: "Les síl·labes m'ajuden a…" }),
      video: vid("xIUbVNslPFQ", "La lluna, la pruna", "Contes i Cançóns Infantils - En Català", 1900826, 4247),
    },
    {
      html: `<h3>Juguem al tren de síl·labes</h3><p>L'<b>última síl·laba</b> d'una paraula comença la següent.</p><p><i>ca-<mark>sa</mark></i> → <i><mark>sa</mark>-ba-<mark>ta</mark></i> → <i><mark>ta</mark>-ssa</i>.</p><p>Quina paraula comença per <b>ssa</b>? Difícil! Canvia de jugador. Jugueu per torns. Perd qui no troba cap paraula. Així practiquem les síl·labes sense adonar-nos-en. I riem molt!</p>`,
      svg: dibujos("Tren de paraules: casa, sabata i tassa; l'última síl·laba comença la següent", [["casa", s("ca|sa", R, 1), K], ["zapato", `<tspan fill="var(--red)">sa</tspan>ba<tspan fill="var(--pen)">ta</tspan>`, K], ["leche", s("ta|ssa", A, 0), K]], { titulo: "casa → sabata → tassa", nota: "L'última síl·laba comença la següent" }),
    },
  ],
  figura: {
    titulo: "Comptem síl·labes",
    svg: mural("Paraules amb 1, 2, 3 i 4 síl·labes: sol, gata, pilota i papallona", [["sol", "sol", "1 cop de mans", A], ["gato", "ga-ta", "2 cops de mans", R], ["pelota", "pi-lo-ta", "3 cops de mans", V], ["mariposa", "pa-pa-llo-na", "4 cops de mans", N]], "Un cop de mans per cada síl·laba"),
  },
  video: { ...vid("0wC7EBNBxns", "Síl·labes (tutorial)", "María José F S", 19311, 97), busqueda: "síl·labes per a nens en català" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Quantes síl·labes té «sabata»?",
      pasos: ["Digues la paraula molt a poc a poc: sa… ba… ta.", "Pica de mans a cada tros.", "Compta els cops: un, dos, tres."],
      resultado: "«sabata» té 3 síl·labes: sa-ba-ta." },
    { enunciado: "Ajunta les síl·labes «pi» i «lo» i «ta». Quina paraula surt?",
      pasos: ["Llegeix la primera síl·laba: pi.", "Llegeix la segona i la tercera: lo, ta.", "Digues-les juntes i sense parar: pilota."],
      resultado: "surt la paraula «pilota»." },
    { enunciado: "Separa en síl·labes «lluna».",
      pasos: ["Digues la paraula a poc a poc: llu… na.", "Pica de mans: dos cops.", "La ll és una sola peça: va junta."],
      resultado: "«lluna» es separa així: llu-na." },
  ],
  errores: [
    "Comptar lletres en lloc de síl·labes: «sol» té tres lletres, però només una síl·laba.",
    "Picar de mans massa de pressa i saltar-se un tros: digues la paraula a poc a poc.",
    "Separar la ll, com «l-luna»: la ll va sempre junta, llu-na.",
    "Oblidar la vocal en escriure una síl·laba, com «tula» per «taula»: escolta cada so.",
  ],
  ejercicios: [
    { q: "Pica de mans i compta les síl·labes de «lluna».", sol: "2: llu-na." },
    { q: "Compta les síl·labes de «pa».", sol: "1: pa." },
    { q: "Compta les síl·labes de «pilota».", sol: "3: pi-lo-ta." },
    { q: "Ajunta «ca» i «sa». Quina paraula surt?", sol: "Casa." },
    { q: "Ajunta «po» i «ma». Quina paraula surt?", sol: "Poma." },
    { q: "Digues la família de la m: ma, me…", sol: "ma, me, mi, mo, mu." },
    { q: "Digues una paraula que comenci per «pa».", sol: "Per exemple: pa, pare, pala, papallona." },
    { q: "Quina paraula és més llarga: «sol» o «papallona»?", sol: "Papallona, que té 4 síl·labes." },
    { q: "Separa en síl·labes «tomàquet».", sol: "to-mà-quet." },
    { q: "Continua el tren: «casa» → «sa…».", sol: "Per exemple: sabata, saltar, sabó." },
  ],
  quiz: [
    { q: "Quantes síl·labes té «gata»?", o: ["1", "2", "3"], a: 1, e: "ga-ta: dues." },
    { q: "m + a sona…", o: ["ma", "am", "mi"], a: 0, e: "Primer la m, després la a." },
    { q: "Quina té una sola síl·laba?", o: ["casa", "sol", "pilota"], a: 1, e: "sol: un cop de mans." },
    { q: "llu + na = …", o: ["nallu", "lluna", "llana"], a: 1, e: "lluna." },
    { q: "Quantes síl·labes té «papallona»?", o: ["3", "4", "5"], a: 1, e: "pa-pa-llo-na: quatre." },
    { q: "Tota síl·laba té almenys una…", o: ["vocal", "m", "ll"], a: 0, e: "Sense vocal no hi ha síl·laba." },
    { q: "Quina síl·laba falta? ma, me, __, mo, mu", o: ["mi", "pa", "ma"], a: 0, e: "ma, me, mi, mo, mu." },
    { q: "Quina paraula comença per «so»?", o: ["sopa", "taula", "gata"], a: 0, e: "so-pa." },
    { q: "Separa «gata»:", o: ["g-ata", "ga-ta", "gat-a"], a: 1, e: "ga-ta." },
    { q: "Quina és més llarga?", o: ["pa", "pilota", "sol"], a: 1, e: "pilota té 3 síl·labes." },
  ],
  examen: [
    { q: "Quantes síl·labes té «sabata»?", o: ["2", "3", "4"], a: 1, e: "sa-ba-ta." },
    { q: "tau + la = …", o: ["lauta", "taula", "tala"], a: 1, e: "taula." },
    { q: "Què és una síl·laba?", o: ["Un tros de paraula", "Una frase", "Un número"], a: 0, e: "Es diu d'un sol cop de veu." },
    { q: "Quina paraula continua el tren «casa → sa…»?", o: ["sabó", "poma", "taula"], a: 0, e: "sa-bó comença per sa." },
  ],
  feynman: ["Què és una síl·laba", "Com es compten les síl·labes picant de mans", "Com es formen paraules ajuntant síl·labes"],
  mapa: mapa("LES SÍL·LABES", "var(--pri)", [
    ["Es formen", "consonant + vocal: ma", A],
    ["Es compten", "un cop de mans per síl·laba", R],
    ["Famílies", "ma, me, mi, mo, mu", V],
    ["S'ajunten", "llu + na = lluna", N],
  ], 230),
  tarjetas: [
    ["Què és una síl·laba?", "Un tros de paraula que diem d'un sol cop"],
    ["Quantes síl·labes té «sol»?", "1"],
    ["Quantes síl·labes té «casa»?", "2: ca-sa"],
    ["m + o = …", "mo"],
    ["llu + na = …", "lluna"],
    ["La família de la p", "pa, pe, pi, po, pu"],
    ["Com comptem les síl·labes?", "Picant de mans"],
    ["Què porta sempre una síl·laba?", "Una vocal"],
  ],
  familias: [
    "Compteu síl·labes picant de mans amb els noms de la família: Ma-ri-a, Pau, Jor-di.",
    "Jugueu al tren de síl·labes al cotxe: l'última síl·laba comença la paraula següent.",
    "Escriviu síl·labes en paperets i formeu paraules ajuntant-los: po + ma, ca + sa.",
    "Quan llegiu junts, tapeu la paraula i destapeu-la síl·laba a síl·laba.",
  ],
  profesores: {
    saberes: "Consciència sil·làbica i fonològica: segmentació de paraules en síl·labes, síntesi de síl·labes i lectura de síl·labes directes (RD 157/2022 i Decret 175/2022 de Catalunya, primer cicle).",
    ideas: ["Picar de mans, saltar o fer cops de pandero per comptar síl·labes.", "Targetes de síl·labes per compondre paraules a la catifa.", "Tren de paraules encadenades per l'última síl·laba."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
