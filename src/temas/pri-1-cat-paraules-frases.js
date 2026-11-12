// Llengua Catalana 1r de Primària: paraules i frases. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, vid } = require("./_peque");
const { FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "1-primaria",
  titulo: "Paraules i frases",
  minutos: 20,
  objetivos: ["Saber que una paraula vol dir alguna cosa", "Separar les paraules amb un espai quan escrivim", "Formar frases ordenades que s'entenen"],
  claves: ["paraula", "espai", "frase", "ordre", "nom", "acció"],
  pregunta: {
    texto: "Llegeix això en veu alta: «elgosborda». S'entén bé? Què hi falta?",
    respuesta: "Hi falten els <mark>espais</mark> entre les paraules. Així es llegeix millor: «El gos borda.» Són <b>tres paraules</b> que formen una <b>frase</b>.",
  },
  bloques: [
    {
      html: `<h3>Les paraules</h3><p>Amb lletres i síl·labes formem <mark>paraules</mark>.</p><p>Cada paraula <b>vol dir alguna cosa</b>. Quan sentim «gat», pensem en un gat. Quan sentim «sol», pensem en el sol.</p><p>Hi ha paraules curtes, com <i>pa</i>, i llargues, com <i>papallona</i>. Totes serveixen per anomenar coses, dir què fem o explicar com són.</p>`,
      svg: dibujos("Un gat, una taula i un sol amb la seva paraula a sota", [["gato", "gat", A], ["mesa", "taula", R], ["sol", "sol", V]], { titulo: "Cada paraula vol dir alguna cosa" }),
    },
    {
      html: `<h3>Un espai entre paraules</h3><p>Quan escrivim, deixem un <mark>espai</mark> entre paraula i paraula.</p><p>Si les ajuntem totes, no s'entén res: «elgatbeu».</p><p>Amb espais es llegeix molt bé: «El gat beu». Un truc: deixa un <b>dit</b> d'espai entre paraula i paraula. Així el teu quadern queda clar i ordenat.</p>`,
      svg: frase("Mal escrit: elgatbeu tot junt. Ben escrit: El gat beu, amb espais", [["elgatbeu", R], ["/"], ["El", V], ["gat", V], ["beu.", V]], { titulo: "Junt o separat?", nota: "Deixa un dit d'espai entre paraules", fs: 22 }),
    },
    {
      html: `<h3>Paraules que anomenen</h3><p>Algunes paraules serveixen per <mark>anomenar</mark>.</p><p>Anomenen persones, com <i>Anna</i> o <i>avi</i>. Anomenen animals, com <i>gos</i>. Anomenen coses, com <i>pilota</i>.</p><p>Es diuen <b>noms</b>. Mira al teu voltant: tot el que veus té un nom. La taula, la cadira, la finestra… En tenim moltíssims! El teu nom també ho és.</p>`,
      svg: dibujos("Una nena que es diu Anna, un gos i una pilota: paraules que anomenen", [["nina", "Anna", A], ["perro", "gos", R], ["pelota", "pilota", V]], { titulo: "Paraules que anomenen" }),
      video: vid("zh7CEdiYcBw", "Els animals de la granja per a nens: vocabulari en català", "Smile and Learn - Català", 72034),
    },
    {
      html: `<h3>Paraules que diuen què fem</h3><p>Altres paraules diuen què <mark>fem</mark>.</p><p><i>Menjar</i>, <i>dormir</i>, <i>llegir</i> i <i>jugar</i> són paraules d'acció. Es diuen <b>verbs</b>.</p><p>Pots fer mímica amb elles. Un amic fa veure que dorm i tu dius: «Dormir!». És un joc divertit per aprendre accions. Quines accions fas al matí?</p>`,
      svg: dibujos("Pa per menjar, llit per dormir, llibre per llegir i pilota per jugar", [["pan", "menjar", A], ["cama", "dormir", R], ["libro", "llegir", V], ["pelota", "jugar", N]], { titulo: "Paraules d'acció" }),
    },
    {
      html: `<h3>Paraules que diuen com és</h3><p>Hi ha paraules que diuen <mark>com són</mark> les coses.</p><p>L'elefant és <b>gran</b>. La formiga és <b>petita</b>. La poma és <b>vermella</b>. El sol és <b>calent</b>.</p><p>Amb aquestes paraules expliquem millor el que veiem. No és el mateix «un gos» que «un gos petit i blanc». La segona frase ens ajuda a imaginar-lo.</p>`,
      svg: dibujos("Un elefant gran, una formiga petita, una poma vermella i un sol calent", [["elefante", "gran", A], ["hormiga", "petita", R], ["manzana", "vermella", V], ["sol", "calent", N]], { titulo: "Paraules que diuen com és" }),
    },
    {
      html: `<h3>La frase</h3><p>Si ajuntem paraules <b>en ordre</b>, formem una <mark>frase</mark>.</p><p>Una frase explica una cosa completa: «El gos corre».</p><p>Quan l'escrivim, comencem amb <b>majúscula</b> i acabem amb un <b>punt</b>. Una frase pot ser curta, com «Fa sol». També pot ser llarga, com «Avui anem al parc amb l'àvia».</p>`,
      svg: frase("La frase El gos corre, amb majúscula al principi i punt al final", [["El", R], ["gos", A], ["corre", A], [".", R]], { titulo: "Una frase", nota: "Majúscula al principi · punt al final", fs: 24 }),
    },
    {
      html: `<h3>L'ordre de les paraules</h3><p>Les paraules d'una frase van <mark>en ordre</mark>.</p><p>Si les desordenem, la frase no s'entén: «corre gos El».</p><p>Ordenades, diuen una cosa clara: «El gos corre». Per ordenar, pensa primer <b>qui</b> és i després <b>què fa</b>. Qui? El gos. Què fa? Corre. Ja està ordenada!</p>`,
      svg: frase("Desordenat: corre gos El. Ordenat: El gos corre", [["corre", R], ["gos", R], ["El", R], ["/"], ["El", V], ["gos", V], ["corre.", V]], { titulo: "S'entén?", nota: "Primer qui i després què fa", fs: 22 }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Amb frases podem <mark>explicar</mark> el que ens passa i el que volem.</p><p>Podem demanar una cosa: «Em dones aigua?». Podem donar les gràcies o explicar un secret.</p><p>També escrivim frases en notes i targetes. Per exemple: «Mama, t'estimo». Una frase curta pot fer molt feliç algú! Prova-ho avui mateix.</p>`,
      svg: charla("Una nena demana aigua i el seu pare l'hi dona", [["nina", "Em dones aigua, si us plau?", R], ["papa", "És clar! Aquí la tens.", A]]),
    },
    {
      html: `<h3>Juguem a frases que creixen</h3><p>Comencem amb una frase molt curta: «El gat».</p><p>Cada jugador afegeix <mark>una paraula més</mark>. «El gat menja.» «El gat menja peix.»</p><p>Cal repetir tota la frase sense equivocar-se. Fins on arribareu? És un joc estupend per a la memòria i per ordenar paraules.</p>`,
      svg: lista("La frase creix: El gat. El gat menja. El gat menja peix.", [["El gat…", A], ["El gat menja…", R], ["El gat menja peix.", V]], { titulo: "Una paraula més cada vegada", marca: "n" }),
    },
  ],
  figura: {
    titulo: "De la paraula a la frase",
    svg: mural("Tres tipus de paraules i la frase que formen: gos anomena, corre és acció, gran diu com és; juntes: El gos gran corre.", [["perro", "gos", "anomena", A], ["pelota", "corre", "diu què fa", R], ["elefante", "gran", "diu com és", V], ["libro", "frase", "El gos gran corre.", N]], "Les paraules en ordre formen una frase"),
  },
  video: { ...vid("RxB2bywa41Q", "Les fruites: vocabulari per a nens en català", "Smile and Learn - Català", 137463, 921), busqueda: "paraules i frases en català per a nens" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Quantes paraules hi ha a «El meu gat és negre»?",
      pasos: ["Llegeix la frase a poc a poc, paraula per paraula.", "Toca cada paraula amb el dit: El, meu, gat, és, negre.", "Compta els tocs: un, dos, tres, quatre, cinc."],
      resultado: "hi ha 5 paraules." },
    { enunciado: "Ordena: «menja Pau pa».",
      pasos: ["Busca qui fa alguna cosa: Pau.", "Busca què fa: menja.", "Posa què menja al final: pa."],
      resultado: "«Pau menja pa.»" },
    { enunciado: "Escriu bé: «lavacaésgran».",
      pasos: ["Llegeix a poc a poc per trobar les paraules: la, vaca, és, gran.", "Escriu-les deixant un dit d'espai.", "Posa majúscula al principi i punt al final."],
      resultado: "«La vaca és gran.»" },
  ],
  errores: [
    "Escriure les paraules enganxades, com «elsol»: deixa un espai entre paraules.",
    "Separar una paraula en dues, com «tau la»: les síl·labes d'una paraula van juntes.",
    "Desordenar la frase: pensa primer qui i després què fa.",
    "Oblidar la majúscula del principi o el punt del final.",
  ],
  ejercicios: [
    { q: "Digues tres paraules que anomenen animals.", sol: "Per exemple: gos, gat, ànec." },
    { q: "Digues tres paraules d'acció.", sol: "Per exemple: córrer, menjar, saltar." },
    { q: "Quantes paraules hi ha a «Anna llegeix»?", sol: "2." },
    { q: "Separa amb espais: «lamevacasaésblava».", sol: "La meva casa és blava." },
    { q: "Ordena: «salta granota La».", sol: "La granota salta." },
    { q: "Completa: «El sol és…».", sol: "Per exemple: groc, gran, calent." },
    { q: "Inventa una frase amb la paraula «pilota».", sol: "Per exemple: «Jugo amb la pilota.»" },
    { q: "És una frase «gos el blau»?", sol: "No: està desordenada i no s'entén." },
    { q: "Fes créixer la frase: «La nena…».", sol: "Per exemple: «La nena canta.» «La nena canta una cançó.»" },
    { q: "Escriu una frase per a algú de la teva família.", sol: "Resposta lliure, amb majúscula i punt: «Papa, t'estimo.»" },
  ],
  quiz: [
    { q: "Què posem entre paraules quan escrivim?", o: ["Un espai", "Un punt", "Res"], a: 0, e: "Un espai, com un dit." },
    { q: "Quina paraula anomena?", o: ["córrer", "taula", "gran"], a: 1, e: "Taula anomena una cosa." },
    { q: "Quina paraula és d'acció?", o: ["saltar", "pilota", "vermell"], a: 0, e: "Saltar és una cosa que fem." },
    { q: "Quina frase està ben ordenada?", o: ["Ànec l'neda.", "L'ànec neda.", "Neda ànec l'."], a: 1, e: "L'ànec neda." },
    { q: "Quantes paraules hi ha a «Jo menjo pa»?", o: ["2", "3", "4"], a: 1, e: "Jo, menjo, pa." },
    { q: "Una frase comença amb…", o: ["majúscula", "punt", "número"], a: 0, e: "Sempre amb majúscula." },
    { q: "Una frase acaba amb…", o: ["coma", "punt", "res"], a: 1, e: "Amb punt." },
    { q: "«Gran» és una paraula que diu…", o: ["què fem", "com és una cosa", "un nom"], a: 1, e: "Diu com és una cosa." },
    { q: "Què està ben escrit?", o: ["Elsol brilla.", "El sol brilla.", "El so lbrilla."], a: 1, e: "Amb un espai entre paraules." },
    { q: "Per ordenar una frase penso primer…", o: ["qui", "el punt", "l'última paraula"], a: 0, e: "Qui i després què fa." },
  ],
  examen: [
    { q: "Quina és una frase?", o: ["gos", "El gos borda.", "borda el"], a: 1, e: "Explica una cosa completa i en ordre." },
    { q: "Quantes paraules té «La lluna brilla»?", o: ["2", "3", "4"], a: 1, e: "La, lluna, brilla." },
    { q: "«Dormir» és una paraula…", o: ["d'acció", "que anomena", "de color"], a: 0, e: "És una cosa que fem." },
    { q: "Què falta a «elnencanta»?", o: ["Espais", "Lletres", "Res"], a: 0, e: "El nen canta." },
  ],
  feynman: ["Què és una paraula", "Per què deixem espais entre paraules", "Com es forma una frase que s'entén"],
  mapa: mapa("PARAULES I FRASES", "var(--pri)", [
    ["Anomenen", "Anna, gos, pilota", A],
    ["Acció", "menjar, saltar, llegir", R],
    ["Com és", "gran, vermella, calent", V],
    ["Frase", "paraules en ordre + punt", N],
  ], 220),
  tarjetas: [
    ["Què hi ha entre paraules?", "Un espai"],
    ["Una paraula que anomena", "Per exemple: taula"],
    ["Una paraula d'acció", "Per exemple: córrer"],
    ["Una paraula que diu com és", "Per exemple: gran"],
    ["Què és una frase?", "Paraules en ordre que expliquen una cosa"],
    ["Com comença una frase?", "Amb majúscula"],
    ["Com acaba una frase?", "Amb punt"],
    ["Ordena: «neda peix El»", "El peix neda."],
  ],
  familias: [
    "Jugueu a «frases que creixen» a taula o al cotxe.",
    "Escriviu junts notes curtes per a la nevera: «Avui hi ha sopa.»",
    "Feu mímica d'accions i que endevini la paraula: menjar, dormir, nedar.",
    "Quan llegiu un conte, compteu junts les paraules d'una frase tocant-les amb el dit.",
  ],
  profesores: {
    saberes: "Comunicació escrita i reflexió sobre la llengua: la paraula i el seu significat, separació de paraules, la frase com a unitat amb sentit i el seu ordre bàsic (RD 157/2022 i Decret 175/2022 de Catalunya, primer cicle).",
    ideas: ["Targetes de paraules per ordenar frases a la pissarra.", "Frases que creixen en rotllana, afegint una paraula cada vegada.", "Classificar paraules en tres capses: anomenen, acció, com és."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
