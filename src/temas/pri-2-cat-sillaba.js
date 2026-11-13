// Llengua Catalana 2n de Primària: la síl·laba. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, charla, lista, mural, trozos, silabas: s } = require("./_peque");
const { V, PROFCA, FONTS } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "2-primaria",
  titulo: "La síl·laba",
  minutos: 25,
  objetivos: ["Saber què és una síl·laba", "Separar paraules en síl·labes amb picades de mans", "Classificar paraules pel nombre de síl·labes i trobar la síl·laba que sona més forta"],
  claves: ["síl·laba", "monosíl·lab", "bisíl·lab", "trisíl·lab", "polisíl·lab", "síl·laba tònica"],
  pregunta: {
    texto: "Digues el teu nom picant de mans a cada trosset. Quantes picades fas?",
    respuesta: "Cada picada és una <mark>síl·laba</mark>. <i>Ma-ri-na</i> té tres picades: tres síl·labes.",
  },
  bloques: [
    {
      html: `<h3>Trossets de paraula</h3><p>Quan parlem, les paraules surten a <mark>trossets</mark>. Cada trosset és una <b>síl·laba</b>.</p><p>Una síl·laba és el que diem d'<b>un sol cop de veu</b>.</p><p><i>Pi-lo-ta</i> té tres cops: pi, lo, ta. <i>Sol</i> en té un de sol. Si piques de mans mentre parles, sentiràs les síl·labes.</p>`,
      svg: trozos("Pilota en tres síl·labes: pi, lo, ta; sol en una síl·laba", [["pelota", ["pi", "lo", "ta"], R], ["sol", ["sol"], A]]),
      video: V("csilV", "la síl·laba català primària"),
    },
    {
      html: `<h3>Comptem picant de mans</h3><p>Per comptar síl·labes, digues la paraula <mark>a poc a poc</mark> i pica de mans a cada cop.</p><p><i>Ca-sa</i>: dues picades. <i>Sa-ba-ta</i>: tres picades. <i>Pa-pa-llo-na</i>: quatre picades.</p><p>També pots posar la mà sota la barbeta. Cada vegada que baixa, és una síl·laba!</p>`,
      svg: trozos("Casa dues síl·labes, sabata tres, papallona quatre", [["casa", ["ca", "sa"], R], ["zapato", ["sa", "ba", "ta"], A], ["mariposa", ["pa", "pa", "llo", "na"], Ve]]),
    },
    {
      html: `<h3>Cada síl·laba té vocal</h3><p>A cada síl·laba hi ha <mark>almenys una vocal</mark>. Sense vocal no hi ha síl·laba.</p><p>Moltes síl·labes són <b>consonant + vocal</b>: <i>ma</i>, <i>pe</i>, <i>lo</i>.</p><p>Altres tenen més lletres: <i>tren</i>, <i>flor</i>, <i>sal</i>. I alguna és només una vocal: la <b>a</b> d'<i>a-mic</i>. La vocal és el cor de la síl·laba!</p>`,
      svg: frase("Síl·labes ma, tren, flor i a: totes tenen vocal", [["m<tspan fill='var(--red)'>a</tspan>", A], ["tr<tspan fill='var(--red)'>e</tspan>n", A], ["fl<tspan fill='var(--red)'>o</tspan>r", A], ["<tspan fill='var(--red)'>a</tspan>", A]], { titulo: "La vocal és el cor", nota: "Sense vocal no hi ha síl·laba", fs: 28 }),
    },
    {
      html: `<h3>Una i dues síl·labes</h3><p>Les paraules d'<mark>una síl·laba</mark> són <b>monosíl·labes</b>: <i>sol</i>, <i>pa</i>, <i>mar</i>, <i>peix</i>.</p><p>Les de <mark>dues síl·labes</mark> són <b>bisíl·labes</b>: <i>ca-sa</i>, <i>llu-na</i>, <i>ga-ta</i>.</p><p>«Mono» vol dir u i «bi» vol dir dos. Com la bicicleta, que té dues rodes!</p>`,
      svg: trozos("Sol i peix monosíl·labes; lluna i gata bisíl·labes", [["sol", ["sol"], R], ["pez", ["peix"], R], ["luna", ["llu", "na"], A], ["gato", ["ga", "ta"], A]]),
    },
    {
      html: `<h3>Tres síl·labes o més</h3><p>Les paraules de <mark>tres síl·labes</mark> són <b>trisíl·labes</b>: <i>to-mà-quet</i>, <i>pi-lo-ta</i>, <i>e-le-fant</i>.</p><p>Les de <mark>quatre o més</mark> són <b>polisíl·labes</b>: <i>pa-pa-llo-na</i>, <i>bi-ci-cle-ta</i>, <i>hi-po-pò-tam</i>.</p><p>«Tri» vol dir tres, com el tricicle. «Poli» vol dir moltes. Compta sempre amb les mans, que no t'enganyin les paraules llargues!</p>`,
      svg: trozos("Tomàquet trisíl·lab; elefant trisíl·lab; papallona polisíl·lab", [["manzana", ["to", "mà", "quet"], Ve], ["elefante", ["e", "le", "fant"], Ve], ["mariposa", ["pa", "pa", "llo", "na"], N]]),
    },
    {
      html: `<h3>Separar en escriure</h3><p>Per separar síl·labes fem servir un <mark>guionet</mark>: <b>ca-sa</b>.</p><p>En català, alguns dígrafs <b>se separen</b>: <i>go<b>r-r</b>o</i>, <i>ca<b>s-s</b>o-la</i>, <i>co<b>l-l</b>e-gi</i> (la l·l).</p><p>Però <b>ny</b> i <b>ll</b> van sempre juntes: <i>mun-ta-<b>ny</b>a</i>, <i>ce-<b>ll</b>a</i>. És diferent del castellà. Fixa-t'hi bé!</p>`,
      svg: frase("Gor-ro i cas-so-la se separen; mun-ta-nya i ce-lla no", [["gor-ro", R], ["cas-so-la", R], ["/"], ["mun-ta-nya", Ve], ["ce-lla", Ve]], { titulo: "rr i ss se separen; ny i ll, no", nota: "Separem amb un guionet", fs: 24 }),
      video: V("csilB"),
    },
    {
      html: `<h3>La síl·laba que sona fort</h3><p>A cada paraula hi ha una síl·laba que sona <mark>més forta</mark>. És la <b>síl·laba tònica</b>.</p><p>A <i>a-<b>vió</b></i> sona fort «vió». A <i><b>tau</b>-la</i> sona fort «tau». A <i>pi-<b>lo</b>-ta</i>, «lo».</p><p>Truc: crida la paraula com si fos lluny. «Taaaula!» La síl·laba que allargues és la tònica.</p>`,
      svg: dibujos("Síl·laba tònica a avió, taula i pilota", [["avion", s("a|VIÓ", R, 1), K], ["mesa", s("TAU|la", R, 0), K], ["pelota", s("pi|LO|ta", R, 1), K]], { titulo: "Quina síl·laba sona més fort?", nota: "La tònica, en vermell" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Saber partir en síl·labes ens ajuda a <mark>llegir paraules llargues</mark> sense perdre'ns.</p><p>També ajuda a escriure sense oblidar lletres: <i>pa-pa-llo-na</i>, síl·laba a síl·laba.</p><p>I serveix per fer <b>rimes</b> i cançons. A les cançons, cada nota sol portar una síl·laba. Per això cantem «Sol, so-let, vi-ne'm a veu-re»!</p>`,
      svg: charla("Un nen llegeix una paraula llarga per síl·labes: hi-po-pò-tam", [["nino", "No puc llegir aquesta…", A], ["nina", "A trossets: hi-po…", R], ["nino", "…pò-tam. Hipopòtam!", A], ["nina", "Quatre síl·labes!", R]]),
    },
    {
      html: `<h3>Joc del tren de síl·labes</h3><p>Cada síl·laba és un <mark>vagó</mark>. Un jugador diu una paraula. L'altre compta els vagons picant de mans.</p><p>Després, l'últim vagó comença una altra paraula: <i>ca-<b>sa</b></i> → <i><b>sa</b>-ba-ta</i> → <i><b>ta</b>-ron-ja</i>…</p><p>Quantes paraules seguides podeu encadenar? És la cadena de síl·labes!</p>`,
      svg: frase("Cadena de síl·labes: casa, sabata, taronja", [["ca-<tspan fill='var(--red)'>sa</tspan>", A], ["→", "var(--muted)"], ["<tspan fill='var(--red)'>sa</tspan>-ba-<tspan fill='var(--leaf)'>ta</tspan>", A], ["/"], ["→", "var(--muted)"], ["<tspan fill='var(--leaf)'>ta</tspan>-ron-ja", A]], { titulo: "Cadena de síl·labes", nota: "L'última síl·laba comença una altra paraula", fs: 22 }),
    },
  ],
  figura: {
    titulo: "Les paraules segons les síl·labes",
    svg: mural("Monosíl·labes com sol, bisíl·labes com lluna, trisíl·labes com pilota i polisíl·labes com papallona", [["sol", "sol", "1 síl·laba: monosíl·laba", R], ["luna", "llu-na", "2 síl·labes: bisíl·laba", A], ["pelota", "pi-lo-ta", "3 síl·labes: trisíl·laba", Ve], ["mariposa", "pa-pa-llo-na", "4 o més: polisíl·laba", N]], "Una síl·laba és un cop de veu; cadascuna té una vocal"),
  },
  video: V("csilV", "la síl·laba català primària"),
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Quantes síl·labes té «maduixa»?",
      pasos: ["Digues la paraula a poc a poc picant de mans: ma-dui-xa.", "Compta les picades: 3.", "És trisíl·laba."],
      resultado: "3 síl·labes." },
    { enunciado: "Separa «carretera» en síl·labes.",
      pasos: ["Recorda que la rr se separa en català.", "Pica de mans: car-re-te-ra.", "Escriu amb guionets."],
      resultado: "car-re-te-ra." },
    { enunciado: "Quina és la síl·laba tònica de «cançó»?",
      pasos: ["Separa: can-çó.", "Crida la paraula: «cançóóó!».", "La síl·laba que allargues és «çó»."],
      resultado: "la tònica és «çó»." },
  ],
  errores: [
    "Separar la ny o la ll: és mun-ta-nya, no munt-an-ya.",
    "No separar la rr i la ss en català: és gor-ro i cas-so-la.",
    "Fer una síl·laba sense vocal: tota síl·laba en té almenys una.",
    "Comptar lletres en lloc de cops de veu: «tren» té 4 lletres i 1 síl·laba.",
  ],
  ejercicios: [
    { q: "Pica de mans i compta les síl·labes de «gat».", sol: "1: gat." },
    { q: "Separa «tomàquet».", sol: "to-mà-quet." },
    { q: "Separa «muntanya».", sol: "mun-ta-nya." },
    { q: "Digues una paraula monosíl·laba.", sol: "Per exemple: sol, pa, mar, flor, peix." },
    { q: "Quantes síl·labes té «papallona»?", sol: "4: pa-pa-llo-na. És polisíl·laba." },
    { q: "«Taula» és bisíl·laba o trisíl·laba?", sol: "Bisíl·laba: tau-la." },
    { q: "Separa «gossos».", sol: "gos-sos." },
    { q: "Encercla la síl·laba tònica de «pilota».", sol: "lo: pi-LO-ta." },
    { q: "Encadena una paraula que comenci per «ta» (de sa-ba-ta).", sol: "Per exemple: taula, taronja, tassa." },
    { q: "Ordena les síl·labes: na-llo-pa-pa.", sol: "pa-pa-llo-na: papallona." },
  ],
  quiz: [
    { q: "Una síl·laba és…", o: ["un cop de veu", "una lletra", "un dibuix"], a: 0, e: "El que diem d'un cop." },
    { q: "Quantes síl·labes té «lluna»?", o: ["1", "2", "3"], a: 1, e: "llu-na." },
    { q: "«Sol» és una paraula…", o: ["monosíl·laba", "bisíl·laba", "trisíl·laba"], a: 0, e: "Una sola síl·laba." },
    { q: "Quina és trisíl·laba?", o: ["pa", "casa", "pilota"], a: 2, e: "pi-lo-ta." },
    { q: "Tota síl·laba té…", o: ["una vocal", "una h", "una ç"], a: 0, e: "Almenys una vocal." },
    { q: "Com se separa «gorro»?", o: ["go-rro", "gor-ro", "gorr-o"], a: 1, e: "En català la rr se separa." },
    { q: "Com se separa «muntanya»?", o: ["mun-tan-ya", "mun-ta-nya", "munt-a-nya"], a: 1, e: "La ny no se separa." },
    { q: "La síl·laba que sona més fort és la…", o: ["tònica", "última sempre", "primera sempre"], a: 0, e: "Síl·laba tònica." },
    { q: "Tònica de «avió»:", o: ["a", "vió", "les dues"], a: 1, e: "a-VIÓ." },
    { q: "Per separar síl·labes escrivim…", o: ["un guionet", "un punt", "una coma"], a: 0, e: "ca-sa." },
  ],
  examen: [
    { q: "Quantes síl·labes té «sabata»?", o: ["2", "3", "4"], a: 1, e: "sa-ba-ta." },
    { q: "Quina és bisíl·laba?", o: ["taula", "flor", "pilota"], a: 0, e: "tau-la." },
    { q: "Com se separa «cassola»?", o: ["ca-sso-la", "cas-so-la", "cass-o-la"], a: 1, e: "La ss se separa." },
    { q: "Tònica de «taula»:", o: ["tau", "la", "cap"], a: 0, e: "TAU-la." },
  ],
  feynman: ["Què és una síl·laba i com es compten", "Com s'anomenen les paraules segons les síl·labes", "Quins dígrafs se separen i quins no"],
  mapa: mapa("LA SÍL·LABA", "var(--pri)", [
    ["Què és", "un cop de veu: ca-sa", R],
    ["Té", "sempre una vocal", A],
    ["Quantes", "mono, bi, tri, polisíl·laba", Ve],
    ["Separar", "gor-ro, però mun-ta-nya", N],
  ], 240),
  tarjetas: [
    ["Què és una síl·laba?", "Un cop de veu"],
    ["Com es compten?", "Picant de mans"],
    ["Paraula d'1 síl·laba", "Monosíl·laba: sol"],
    ["Paraula de 2 síl·labes", "Bisíl·laba: ca-sa"],
    ["Paraula de 3 síl·labes", "Trisíl·laba: pi-lo-ta"],
    ["Se separen…", "rr, ss, l·l: gor-ro"],
    ["No se separen…", "ny, ll: mun-ta-nya"],
    ["Què és la síl·laba tònica?", "La que sona més fort"],
  ],
  familias: [
    "Compteu síl·labes picant de mans amb els noms de la família.",
    "Jugueu a la cadena de síl·labes al cotxe o a la cua.",
    "Busqueu la paraula més llarga del dia i separeu-la en síl·labes.",
    "Crideu objectes com si fossin lluny per sentir la síl·laba tònica.",
  ],
  profesores: PROFCA("Consciència sil·làbica: segmentació de paraules en síl·labes, classificació pel nombre de síl·labes, separació dels dígrafs (rr, ss, l·l, ny, ll) i síl·laba tònica", ["Picades de mans i salts per segmentar.", "Tren de síl·labes amb vagons de cartolina.", "Classificar targetes en capses d'1, 2, 3 i 4 síl·labes."]),
  fuentes: FONTS,
  revisado: "2026-11-13",
};
