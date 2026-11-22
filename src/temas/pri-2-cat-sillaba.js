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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Classificar paraules per nombre de síl·labes", "Formar paraules noves unint síl·labes", "Trobar la síl·laba tònica de paraules senzilles", "Dividir paraules a final de ratlla amb el guionet"],
  lectura: { titulo: "El robot que parlava a trossos", html: `<p>A l'escola de la Júlia ha arribat un robot nou. Es diu Ro-bi.</p><p>Ro-bi és molt simpàtic, però té un problema: parla a trossets.</p><p>—Bon-dia-a-tot-hom! —diu amb la seva veu metàl·lica.</p><p>Els nens riuen. La mestra els explica que en Robi separa les paraules en <b>síl·labes</b>.</p><p>—Com-us-di-eu? —pregunta el robot.</p><p>—Jo soc la Jú-li-a! —respon la Júlia, picant de mans a cada síl·laba.</p><p>—I jo en Mar-tí!</p><p>Ara tota la classe parla com en Robi. Pa-ta-ta. Ca-ra-gol. Ma-ri-po-sa. Ele-fant… no: e-le-fant!</p><p>A l'hora del pati, en Robi vol jugar a pilota.</p><p>—Pi-lo-ta! Pi-lo-ta!</p><p>Els nens li passen la pilota i en Robi fa un gol. Tothom crida:</p><p>—Gooo-ool!</p><p>—Aquest gol té una sola síl·laba —diu la Júlia, rient—. Però molt llarga!</p>` },
  tras: {
    "Comptem picant de mans": [
      ["Monosíl·labes, bisíl·labes i trisíl·labes", `<p>Segons el <mark>nombre de síl·labes</mark>, les paraules tenen un nom:</p><ul><li><b>Monosíl·labes</b> (una síl·laba): sol, mar, pa, gat, flor.</li><li><b>Bisíl·labes</b> (dues): ca-sa, ga-ta, llu-na, ar-bre.</li><li><b>Trisíl·labes</b> (tres): pi-lo-ta, sa-ba-ta, ca-mi-sa.</li><li><b>Polisíl·labes</b> (quatre o més): ma-ri-po-sa, bi-bli-o-te-ca.</li></ul><p>Per saber-ho, picant de mans és molt fàcil: cada pic, una síl·laba.</p><p>Fixa't que si afegim lletres, a vegades guanyem síl·labes: <i>gat</i> (1) → <i>ga-tet</i> (2) → <i>ga-te-ta</i> (3).</p><p>Recorda que cada síl·laba ha de tenir com a mínim una <b>vocal</b>. Per això <i>mar</i> és una sola síl·laba: només té una vocal, la a. I <i>arbre</i> en té dues: ar-bre.</p><p><b>Activitat</b>: fes quatre columnes i classifica els noms dels companys segons les seves síl·labes.</p>`,
        L6.filas("Síl·labes", [["mono-", "sol (1)", cAZ], ["bi-", "ca-sa (2)", cVE], ["tri-", "pi-lo-ta (3)", cNA], ["poli-", "ma-ri-po-sa", cRO]])],
    ],
    "Tres síl·labes o més": [
      ["Construïm paraules", `<p>Les síl·labes són com peces de <mark>construcció</mark>: les podem combinar per fer paraules noves.</p><ul><li><b>ca</b> + <b>sa</b> = casa</li><li><b>sa</b> + <b>ca</b> = saca</li><li><b>ma</b> + <b>ta</b> = mata</li><li><b>to</b> + <b>ma</b> + <b>ta</b> = tomata</li><li><b>pa</b> + <b>ta</b> + <b>ta</b> = patata</li><li><b>pi</b> + <b>lo</b> + <b>ta</b> = pilota</li></ul><p>Si canviem una sola síl·laba, la paraula canvia:</p><ul><li><b>ca</b>-sa → <b>ta</b>-sa → <b>ma</b>-sa</li><li>ga-<b>ta</b> → ga-<b>la</b></li></ul><p>També hi ha paraules que es llegeixen igual al revés, com <i>radar</i> o <i>ala</i>. Són els palíndroms!</p><p>Jugar a construir paraules ens ajuda a llegir més de pressa, perquè aprenem a reconèixer les síl·labes d'un cop d'ull, sense haver de mirar lletra per lletra.</p><p><b>Activitat</b>: escriu síl·labes en targetes i forma totes les paraules que puguis.</p>`,
        H6.flujo("Peces", ["pa|+", "ta|+", "ta|=", "patata|!"], cNA),
        ["IzlcyYuDPb8", "El Pot Petit - El Drac Rac", "El Pot Petit", 12976564]],
    ],
    "La síl·laba que sona fort": [
      ["On és la síl·laba forta?", `<p>Cada paraula té una síl·laba que sona més <mark>fort</mark>: la síl·laba tònica. Per trobar-la, podem «cridar» la paraula com si cridéssim algú de lluny:</p><ul><li>ca-<b>MIÓ</b> → la forta és l'<b>última</b>.</li><li><b>CA</b>-sa → la forta és la <b>penúltima</b>.</li><li><b>MÚ</b>-si-ca → la forta és l'<b>antepenúltima</b>.</li></ul><p>Moltes paraules porten <b>accent</b> escrit damunt la vocal tònica: camió, cafè, música, pàgina.</p><p>Altres no en porten però també tenen síl·laba forta: <i>CA-sa</i>, <i>pi-LO-ta</i>, <i>ca-ra-GOL</i>.</p><p>Si diem fort una síl·laba que no toca, la paraula sona estranya: «ca-SA» en lloc de «CA-sa».</p><p>Quan llegim en veu alta, fer sonar bé la síl·laba forta fa que tothom ens entengui millor. Prova de dir <i>pi-LO-ta</i> i després <i>PI-lo-ta</i>: quina sona bé?</p><p><b>Activitat</b>: crida el teu nom i descobreix quina és la teva síl·laba forta.</p>`,
        H6.dos("Forta", ["AL FINAL", ["camió", "cafè", "caragol"], cRO], ["ABANS", ["casa", "pilota", "música"], cAZ])],
    ],
    "Per a què serveix?": [
      ["Partir paraules a final de ratlla", `<p>Quan escrivim i la paraula no hi cap al final de la ratlla, la podem <mark>partir</mark> amb un <b>guionet</b> (-). Però s'ha de fer bé:</p><ul><li>Es parteix sempre entre <b>síl·labes</b>: pi-lota o pilo-ta ✓, pil-ota ✗.</li><li>No deixem <b>una sola lletra</b> sola a la ratlla: à-nec ✗.</li><li>Les lletres <b>ll</b>, <b>ny</b>, <b>ch</b> no se separen mai: ca-vall ✓, cav-all ✗.</li><li>Les lletres <b>rr</b> i <b>ss</b> sí que se separen: ter-ra, pas-sa.</li><li>La <b>l·l</b> se separa així: col-legi.</li></ul><p>Si dubtes, és millor passar tota la paraula a la ratlla següent.</p><p>Els ordinadors parteixen les paraules sols, però nosaltres hem d'aprendre a fer-ho bé quan escrivim a mà.</p><p><b>Activitat</b>: escriu en una tira estreta de paper una frase i parteix les paraules que no hi càpiguen.</p>`,
        L6.filas("Partir", [["pi-lo-ta", "entre síl·labes", cVE], ["ter-ra", "rr se separa", cAZ], ["ca-vall", "ll junta", cNA], ["col-legi", "l·l", cMO]])],
    ],
  },
  final: [
    ["Jocs de síl·labes", `<p>Amb les síl·labes podem fer molts <mark>jocs</mark>:</p><ul><li><b>El tren de síl·labes</b>: la paraula nova comença per l'última síl·laba de l'anterior: ca-<b>sa</b> → <b>sa</b>-ba-<b>ta</b> → <b>ta</b>-ula → …</li><li><b>La síl·laba amagada</b>: quina síl·laba falta? pa-__-ta (ta).</li><li><b>Paraules dins de paraules</b>: a <i>ca-<b>mi</b>-sa</i> hi ha <i>mi</i>; a <i>ca<b>sa</b></i>, a <i>pa<b>ta</b>ta</i>…</li><li><b>El llenguatge secret</b>: afegim «pi» després de cada síl·laba: <i>ca-pi-sa-pi</i> vol dir «casa».</li><li><b>Rimes</b>: paraules que acaben amb la mateixa síl·laba: <i>gat</i>, <i>plat</i>, <i>pat</i>.</li></ul><p>Jugant amb les síl·labes aprenem a llegir i escriure millor.</p><p><b>Activitat</b>: parla en llenguatge secret amb un company durant un minut.</p>`,
      H6.rueda("Jocs", "SÍL·LABES", [["tren", cAZ], ["amagada", cVE], ["secret", cRO], ["rimes", cNA]])],
    ["Repàs: el robot que parlava a trossos", `<p>Repassem amb la <mark>lectura</mark>:</p><ul><li>En <b>Ro-bi</b> parla separant les paraules en síl·labes.</li><li><b>Jú-li-a</b> té tres síl·labes: és trisíl·laba.</li><li><b>Mar-tí</b> en té dues: és bisíl·laba, i la forta és l'última (porta accent).</li><li><b>Pa-ta-ta</b> i <b>pi-lo-ta</b> són trisíl·labes.</li><li><b>Ma-ri-po-sa</b> té quatre síl·labes: és polisíl·laba.</li><li><b>Gol</b> té una sola síl·laba: és monosíl·laba.</li><li>Els nens piquen de mans per comptar síl·labes.</li></ul><p>Els robots no parlen a trossos, però a vegades separar les paraules ens ajuda a escriure-les bé!</p><p><b>Activitat</b>: parla com en Robi i digues el teu esmorzar d'avui a trossets.</p>`,
      L6.filas("Robi", [["gol", "1 síl·laba", cRO], ["Mar-tí", "2", cAZ], ["Jú-li-a", "3", cVE], ["ma-ri-po-sa", "4", cNA]])],
  ],
  ejemplos: [
    ["Quantes síl·labes té «sabata»?", ["Piquem de mans: sa-ba-ta."], "Tres: és trisíl·laba."],
    ["Com partiries «cavall» a final de ratlla?", ["La ll no es pot separar."], "Ca-vall."],
  ],
  errores: ["Partir una paraula deixant una lletra sola: «à-nec».", "Separar la ll o la ny: «cav-all», «muny-tanya»."],
  ejercicios: [
    ["b", "Quantes síl·labes té «sol»?", "Una."],
    ["b", "Separa en síl·labes: pilota.", "Pi-lo-ta."],
    ["b", "Uneix: ca + sa.", "Casa."],
    ["b", "Digues una paraula bisíl·laba.", "Casa, gata, lluna…"],
    ["b", "Quina síl·laba falta? pa-__-ta.", "Ta."],
    ["m", "Classifica: mar, cadira, mariposa, gata.", "Mar 1, gata 2, cadira 3, mariposa 4."],
    ["m", "Quina és la síl·laba forta de «camió»?", "Mió (l'última)."],
    ["m", "Parteix: terra.", "Ter-ra."],
    ["m", "Canvia la primera síl·laba de «casa» i fes dues paraules.", "Tasa, massa (o masa)…"],
    ["m", "Continua el tren: casa → sa…", "Sabata, salut…"],
    ["a", "A la lectura, quantes síl·labes té «Júlia»?", "Tres."],
    ["a", "Per què «gol» és monosíl·laba?", "Perquè només té una síl·laba."],
    ["a", "Escriu tres paraules de quatre síl·labes.", "Mariposa, bicicleta, papallona…"],
    ["a", "Escriu «casa» en llenguatge secret amb «pi».", "Ca-pi-sa-pi."],
  ],
  quiz: [
    ["«Lluna» és…", ["bisíl·laba", "monosíl·laba", "trisíl·laba"], "Síl·labes."],
    ["pa + ta + ta =", ["patata", "pata", "tapa"], "Construïm."],
    ["La síl·laba forta de «música» és…", ["mú", "si", "ca"], "Tònica."],
    ["Es parteix bé…", ["ca-vall", "cav-all", "c-avall"], "Partir."],
    ["En llenguatge secret «ca-pi-sa-pi» vol dir…", ["casa", "capa", "sapa"], "Jocs."],
  ],
  examen: [
    ["A la lectura, com es diu el robot?", ["Robi", "Martí", "Júlia"], "Lectura."],
    ["A què juga en Robi al pati?", ["a pilota", "a amagar", "a la corda"], "Repàs."],
  ],
  tarjetas: [
    ["Nombre de síl·labes", "mono- (1), bi- (2), tri- (3), poli- (4 o més)."],
    ["Partir a final de ratlla", "Entre síl·labes; ll i ny juntes; rr, ss i l·l se separen."],
  ],
  glosario: [
    ["Síl·laba", "Tros de paraula que diem d'un sol cop de veu."],
    ["Monosíl·laba", "Paraula d'una síl·laba."],
    ["Bisíl·laba", "Paraula de dues síl·labes."],
    ["Trisíl·laba", "Paraula de tres síl·labes."],
    ["Polisíl·laba", "Paraula de quatre síl·labes o més."],
    ["Síl·laba tònica", "Síl·laba que sona més fort."],
    ["Guionet", "Ratlleta (-) per partir paraules."],
    ["Palíndrom", "Paraula que es llegeix igual al revés."],
    ["Robot", "Màquina que fa feines sola."],
    ["Metàl·lic", "Que sona o és com el metall."],
  ],
  situacion: {
    titulo: "La fàbrica de paraules",
    reto: "La classe munta una fàbrica on es fan paraules noves combinant targetes de síl·labes, i les classifica.",
    pasos: ["Escriure síl·labes en targetes de colors.", "Combinar-les per formar paraules reals i inventades.", "Classificar les paraules per nombre de síl·labes.", "Marcar la síl·laba forta i fer un mural."],
    producto: "Un mural de paraules classificades.",
    evaluacion: ["Classifica paraules per síl·labes.", "Forma paraules amb síl·labes.", "Troba la síl·laba forta.", "Parteix bé a final de ratlla."],
  },
});
