// Llengua Catalana 2n de Primària: l'abecedari. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, charla, lista, mural } = require("./_peque");
const { V, PROFCA, FONTS } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "2-primaria",
  titulo: "L'abecedari",
  minutos: 25,
  objetivos: ["Dir i escriure les 26 lletres de l'abecedari en ordre", "Conèixer la ç i els sons que s'escriuen amb dues lletres", "Ordenar paraules per ordre alfabètic"],
  claves: ["abecedari", "lletra", "ordre alfabètic", "ce trencada", "diccionari"],
  pregunta: {
    texto: "A la llista de classe, per què l'Anna va abans que en Biel, i en Biel abans que la Carla?",
    respuesta: "Perquè la llista segueix l'<mark>ordre alfabètic</mark>: l'ordre de les lletres de l'<b>abecedari</b>. La a va abans que la b, i la b abans que la c.",
  },
  bloques: [
    {
      html: `<h3>Les 26 lletres</h3><p>L'<mark>abecedari</mark> són totes les lletres de la nostra llengua, en ordre.</p><p>En català té <b>26 lletres</b>. Comença per la <b>a</b> i acaba per la <b>z</b>.</p><p>Amb aquestes lletres escrivim totes les paraules: curtes com <i>sol</i> i llargues com <i>papallona</i>. També en diem <b>alfabet</b>.</p>`,
      svg: fichas("Les lletres de l'abecedari de la a a la l", [["a", R], ["b", A], ["c", A], ["d", A], ["e", R], ["f", A], ["g", A], ["h", A], ["i", R], ["j", A], ["k", A], ["l", A]], { titulo: "a, be, ce… així comença", nota: "… i continua fins a la z: 26 lletres" }),
      video: V("cabcB"),
    },
    {
      html: `<h3>La segona meitat</h3><p>Després de la <b>l</b> venen <b>m, n, o, p, q, r, s, t, u, v, w, x, y, z</b>.</p><p>Hi ha lletres que fem servir poc, com la <b>k</b>, la <b>w</b> i la <b>y</b>. Surten en paraules d'altres llengües: <i>quilo</i> o <i>kiwi</i>, <i>web</i>.</p><p>Recita l'abecedari sencer com una cançó. Quan arribis a la z, ja l'has acabat!</p>`,
      svg: fichas("Les lletres de l'abecedari de la m a la z", [["m", A], ["n", A], ["o", R], ["p", A], ["q", A], ["r", A], ["s", A], ["t", A], ["u", R], ["v", A], ["x", A], ["z", A]], { titulo: "m, n, o… fins a la z", nota: "També hi ha w i y" }),
    },
    {
      html: `<h3>La ce trencada</h3><p>En català tenim una lletra especial: la <mark>ç</mark>, la <b>ce trencada</b>.</p><p>És una c amb una cueta a sota. Sona com una s: <i>pla<b>ç</b>a</i>, <i>cal<b>ç</b>ot</i>, <i>bra<b>ç</b></i>, <i>ca<b>ç</b>ar</i>.</p><p>No compta com una lletra nova de l'abecedari, però és molt nostra. Mai no va al començament d'una paraula!</p>`,
      svg: dibujos("Paraules amb ç: plaça, braç i cançó", [["casa", "plaça", R], ["mano", "braç", A], ["guitarra", "cançó", Ve]], { titulo: "La ç sona com una s", nota: "plaça · braç · cançó" }),
    },
    {
      html: `<h3>Sons amb dues lletres</h3><p>Alguns sons s'escriuen amb <mark>dues lletres juntes</mark>. Es diuen <b>dígrafs</b>.</p><p><b>ny</b>: <i>a<b>ny</b></i>, <i>mu<b>ny</b>tanya</i>. <b>ll</b>: <i><b>ll</b>una</i>, <i>ce<b>ll</b>a</i>. <b>rr</b>: <i>go<b>rr</b>o</i>. <b>ss</b>: <i>ca<b>ss</b>ola</i>.</p><p>També la <b>l·l</b>, amb un punt volat al mig: <i>co<b>l·l</b>egi</i>, <i>i<b>l·l</b>usió</i>. No t'oblidis mai del punt volat!</p>`,
      svg: fichas("Dígrafs: ny, ll, rr, ss, l·l", [["ny", R], ["ll", A], ["rr", Ve], ["ss", N], ["l·l", M]], { titulo: "Lletres que van juntes", nota: "any · lluna · gorro · cassola · col·legi", grande: true }),
    },
    {
      html: `<h3>Què és l'ordre alfabètic?</h3><p>Ordenar paraules <mark>com a l'abecedari</mark> és ordenar-les alfabèticament.</p><p>Mirem la <b>primera lletra</b> de cada paraula. La que comença per la lletra que va abans, va primer.</p><p><i>Gat</i>, <i>arbre</i> i <i>ós</i> queden així: <b>a</b>rbre, <b>g</b>at, <b>ó</b>s. Perquè la a va abans que la g, i la g abans que la o!</p>`,
      svg: dibujos("Arbre, gat i ós ordenats per la primera lletra", [["arbol", "arbre", R], ["gato", "gat", A], ["oso", "ós", Ve]], { titulo: "Primer a, després g, després o", nota: "Mirem la primera lletra" }),
      video: V("cabcV", "l'alfabet català per a nens"),
    },
    {
      html: `<h3>Si comencen igual</h3><p>De vegades dues paraules comencen per la <b>mateixa lletra</b>: <i>pa</i> i <i>peix</i>.</p><p>Aleshores mirem la <mark>segona lletra</mark>: p<b>a</b> i p<b>e</b>ix. Com que la a va abans que la e, <i>pa</i> va primer.</p><p>Si la segona també és igual, mirem la tercera. Així sempre trobem l'ordre!</p>`,
      svg: frase("Pa va abans que peix perquè la a va abans que la e", [["p<tspan fill='var(--red)'>a</tspan>", A], ["abans que", "var(--muted)"], ["p<tspan fill='var(--red)'>e</tspan>ix", A], ["/"], ["a", R], ["va abans que", "var(--muted)"], ["e", R]], { titulo: "Mirem la segona lletra", nota: "pa, peix" }),
    },
    {
      html: `<h3>El diccionari</h3><p>El <mark>diccionari</mark> és un llibre que explica què volen dir les paraules.</p><p>Totes les paraules hi són en <b>ordre alfabètic</b>. Per buscar <i>lluna</i>: obre per la <b>l</b>, mira la segona lletra (<b>l</b>) i continua fins que la trobis.</p><p>A dalt de cada pàgina hi ha una <b>paraula guia</b> que t'ajuda a anar més de pressa.</p>`,
      svg: lista("Per buscar lluna: primera lletra l, obre per la l, segona lletra l, llegeix", [["Primera lletra: l", R], ["Obre per la part de la l", A], ["Segona lletra: l", Ve], ["Lluna! Llegeix què vol dir", N]], { titulo: "Busquem «lluna»", marca: "n" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>L'ordre alfabètic ens ajuda a <mark>trobar coses de pressa</mark>.</p><p>El fem servir a la <b>llista de classe</b>, a l'agenda de telèfons i a la biblioteca.</p><p>També als índexs dels llibres i als contactes del mòbil. Sense ordre alfabètic, buscar seria molt lent!</p>`,
      svg: charla("Una nena busca el seu amic Pau a la llista de classe i el troba a la p", [["nina", "On és en Pau?", R], ["nino", "Busca a la p.", A], ["nina", "Anna, Biel… Pau!", R], ["nino", "Que ràpid!", A]]),
    },
    {
      html: `<h3>Juguem a ordenar</h3><p>Escriu en paperets els noms de la teva família o dels teus amics.</p><p>Barreja els paperets i ordena'ls per <mark>ordre alfabètic</mark>. Mira la primera lletra. Si és igual, mira la segona.</p><p>Després, ordena animals: <i>vaca</i>, <i>conill</i>, <i>lleó</i>, <i>cavall</i>. Qui va primer? Cavall! Després conill, lleó i vaca.</p>`,
      svg: dibujos("Conill, lleó i vaca en ordre alfabètic", [["conejo", "conill", R], ["leon", "lleó", A], ["vaca", "vaca", Ve]], { titulo: "c, ll, v: en ordre!", nota: "cavall · conill · lleó · vaca" }),
    },
  ],
  figura: {
    titulo: "L'abecedari",
    svg: mural("Abecedari de 26 lletres, la ce trencada, els dígrafs i l'ordre alfabètic", [[null, "a … z", "26 lletres", A], [null, "ç", "ce trencada: plaça", R], [null, "ny · ll · l·l", "lletres que van juntes", Ve], ["libro", "diccionari", "tot en ordre", N]], "Les paraules s'ordenen com les lletres de l'abecedari"),
  },
  video: V("cabcV", "l'alfabet català per a nens"),
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Ordena: sol, casa, mar.",
      pasos: ["Mira la primera lletra: s, c, m.", "A l'abecedari va abans la c, després la m i després la s.", "Escriu les paraules en aquest ordre."],
      resultado: "casa, mar, sol." },
    { enunciado: "Ordena: barca, bota, bec.",
      pasos: ["Totes comencen per b.", "Mira la segona lletra: a, o, e.", "Ordre: a, e, o."],
      resultado: "barca, bec, bota." },
    { enunciado: "Com s'escriu: «plassa» o «plaça»?",
      pasos: ["El so és com una s.", "És una paraula amb ce trencada.", "S'escriu amb ç."],
      resultado: "plaça." },
  ],
  errores: [
    "Mirar només la primera lletra quan dues paraules comencen igual: cal mirar la segona.",
    "Posar la ç al començament d'una paraula: mai no hi va.",
    "Escriure la l·l sense el punt volat: és col·legi, no colegi.",
    "Obrir el diccionari a l'atzar: primer busca la part de la primera lletra.",
  ],
  ejercicios: [
    { q: "Digues l'abecedari en veu alta de la a a la z.", sol: "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z." },
    { q: "Quantes lletres té l'abecedari català?", sol: "26." },
    { q: "Quina lletra va després de la f?", sol: "La g." },
    { q: "Quina lletra va abans de la t?", sol: "La s." },
    { q: "Ordena: peix, arbre, lluna.", sol: "arbre, lluna, peix." },
    { q: "Ordena: mona, mel, mapa.", sol: "mapa, mel, mona (a, e, o)." },
    { q: "Escriu dues paraules amb ç.", sol: "Per exemple: plaça, braç, cançó, caçar." },
    { q: "Escriu una paraula amb ny.", sol: "Per exemple: any, muntanya, canya." },
    { q: "Ordena els noms: Sara, Biel, Marta, Anna.", sol: "Anna, Biel, Marta, Sara." },
    { q: "Per quina lletra obriries el diccionari per buscar «tren»?", sol: "Per la t; després mires la segona lletra, la r." },
  ],
  quiz: [
    { q: "Quantes lletres té l'abecedari català?", o: ["26", "27", "30"], a: 0, e: "En té 26." },
    { q: "Per quina lletra comença?", o: ["a", "b", "z"], a: 0, e: "Per la a." },
    { q: "Quina va primer?", o: ["gat", "arbre", "ós"], a: 1, e: "La a va abans." },
    { q: "Si dues paraules comencen igual, mirem…", o: ["l'última lletra", "la segona lletra", "el dibuix"], a: 1, e: "La segona lletra." },
    { q: "La ç sona com…", o: ["una s", "una k", "una j"], a: 0, e: "Com una s." },
    { q: "Quina paraula porta ç?", o: ["plaça", "casa", "sopa"], a: 0, e: "pla-ça." },
    { q: "La l·l porta…", o: ["un punt volat", "un accent", "res"], a: 0, e: "col·legi." },
    { q: "Quina va primer?", o: ["pa", "peix", "pi"], a: 0, e: "pa: la a va abans." },
    { q: "Les paraules del diccionari estan…", o: ["en ordre alfabètic", "desordenades", "per colors"], a: 0, e: "En ordre alfabètic." },
    { q: "Quina és l'última lletra?", o: ["y", "z", "x"], a: 1, e: "La z." },
  ],
  examen: [
    { q: "Quina lletra va abans de la d?", o: ["c", "e", "b"], a: 0, e: "c, d." },
    { q: "Ordena: sol, lluna, aigua. Quina va primer?", o: ["sol", "lluna", "aigua"], a: 2, e: "a, ll, s." },
    { q: "Quin és un dígraf?", o: ["ny", "a", "p"], a: 0, e: "Dues lletres, un so." },
    { q: "Per a què serveix el diccionari?", o: ["Per saber què volen dir les paraules", "Per pintar", "Per comptar"], a: 0, e: "Explica significats." },
  ],
  feynman: ["Quantes lletres té l'abecedari i què és la ç", "Com s'ordenen les paraules per ordre alfabètic", "Com es busca una paraula al diccionari"],
  mapa: mapa("L'ABECEDARI", "var(--pri)", [
    ["26 lletres", "de la a a la z", A],
    ["Ce trencada", "ç: plaça, braç", R],
    ["Dígrafs", "ny, ll, rr, ss, l·l", Ve],
    ["Ordre alfabètic", "primera i segona lletra", N],
  ], 230),
  tarjetas: [
    ["Quantes lletres té l'abecedari?", "26"],
    ["Quina lletra és la ce trencada?", "La ç"],
    ["Com sona la ç?", "Com una s"],
    ["Què és un dígraf?", "Dues lletres juntes: ny, ll, rr"],
    ["Ordena: ós, gat", "gat, ós"],
    ["Si comencen igual…", "Mirem la segona lletra"],
    ["Què és el diccionari?", "Un llibre que explica les paraules"],
    ["Paraula amb l·l", "col·legi, il·lusió"],
  ],
  familias: [
    "Canteu junts la cançó de l'abecedari.",
    "Ordeneu per ordre alfabètic els noms de la família en una llista.",
    "Busqueu paraules amb ç en cartells i botigues del barri.",
    "Busqueu junts paraules en un diccionari infantil.",
  ],
  profesores: PROFCA("Coneixement de l'abecedari, correspondència entre lletres i sons, la ç, els dígrafs (ny, ll, rr, ss, l·l), l'ordre alfabètic i els primers usos del diccionari", ["Tren de l'abecedari a la paret amb la ç destacada.", "Llista de classe per ordenar per parelles.", "Cursa de diccionaris amb paraules senzilles."]),
  fuentes: FONTS,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distingir majúscules i minúscules", "Ordenar paraules que comencen per la mateixa lletra", "Trobar paraules al diccionari amb les paraules guia", "Fer servir l'ordre alfabètic a la vida de cada dia"],
  lectura: { titulo: "La biblioteca desordenada", html: `<p>Un dilluns al matí, la senyora Roser, la bibliotecària de l'escola, va obrir la porta i es va quedar parada.</p><p>—Oh, no! Qui ha desordenat tots els llibres?</p><p>Els contes eren per terra, barrejats: el de les bruixes al costat del dels dinosaures, i el de les zebres amb el dels avions.</p><p>Els nens i nenes de segon van venir a ajudar.</p><p>—Els hem d'ordenar per ordre alfabètic, pel cognom de l'autor —va explicar la senyora Roser.</p><p>L'Arnau agafava els de la A i la B. La Laia, els de la M. I el Pau, que és el més alt, posava els de la Z al prestatge de dalt de tot.</p><p>—I aquests dos que comencen per C? —va preguntar la Laia.</p><p>—Mira la segona lletra! —va dir l'Arnau.</p><p>Al final de la tarda, tots els llibres eren al seu lloc. La senyora Roser va somriure.</p><p>—Gràcies! Ara tothom trobarà el seu conte preferit en un tres i no res.</p><p>Però qui havia desordenat la biblioteca? Darrere d'un prestatge, un gatet dormia tranquil·lament…</p>` },
  tras: {
    "La ce trencada": [
      ["Majúscules i minúscules", `<p>Cada lletra té dues formes: la <mark>majúscula</mark> (gran) i la <mark>minúscula</mark> (petita): A a, B b, C c, D d…</p><p>Escrivim amb <b>majúscula</b>:</p><ul><li>La primera lletra quan comencem a escriure: «<b>A</b>vui fa sol.»</li><li>Després d'un punt: «Plou. <b>T</b>inc el paraigua.»</li><li>Els <b>noms propis</b> de persones: Marta, Pere, Jordi.</li><li>Els noms de <b>ciutats, pobles i països</b>: Girona, Reus, Itàlia.</li><li>Els noms dels <b>animals de companyia</b>: el meu gos es diu Bruc.</li></ul><p>En canvi, els dies de la setmana i els mesos s'escriuen amb <b>minúscula</b>: dilluns, gener.</p><p>Al diccionari les paraules surten en minúscula, tret dels noms propis.</p><p><b>Activitat</b>: escriu el teu nom, el del teu poble i el de la teva mascota amb majúscula.</p>`,
        H6.dos("Lletres", ["MAJÚSCULA", ["Marta", "Girona", "inici"], cRO], ["MINÚSCULA", ["dilluns", "gener", "casa"], cAZ])],
    ],
    "Què és l'ordre alfabètic?": [
      ["Si comencen igual, la segona lletra", `<p>Quan dues paraules comencen per la <mark>mateixa lletra</mark>, mirem la <b>segona</b>:</p><ul><li><b>ca</b>sa, <b>co</b>txe, <b>cu</b>ina → a va abans que o, i o abans que u.</li><li><b>pa</b>, <b>pe</b>ra, <b>pi</b>lota, <b>po</b>ma.</li></ul><p>Si també la segona és igual, mirem la <b>tercera</b>:</p><ul><li><b>mar</b>, <b>mas</b>, <b>mat</b>í → r, s, t.</li><li><b>gat</b>, <b>gal</b>l → l va abans que t: gall, gat.</li></ul><p>És com en una cursa: si dos corredors arriben alhora, mirem qui ha fet el pas següent primer.</p><p>Exemple: ordenem <i>sol, sabata, sopa, sac</i>:</p><ul><li>Primer les que fan <b>sa</b>: sabata, sac (b abans que c).</li><li>Després les que fan <b>so</b>: sol, sopa (l abans que p).</li></ul><p>Resultat: sabata, sac, sol, sopa.</p><p><b>Activitat</b>: ordena els noms dels companys que comencen per la mateixa lletra.</p>`,
        H6.flujo("Ordre", ["sabata|sa-b", "sac|sa-c", "sol|so-l", "sopa|so-p"], cVE)],
    ],
    "El diccionari": [
      ["Les paraules guia", `<p>A dalt de cada pàgina del diccionari hi ha dues paraules en negreta: són les <mark>paraules guia</mark>.</p><ul><li>La de l'<b>esquerra</b> és la primera paraula de la pàgina.</li><li>La de la <b>dreta</b> és l'última.</li></ul><p>Si la paraula que busquem va entre totes dues en ordre alfabètic, és en aquella pàgina!</p><p>Exemple: a dalt de la pàgina diu <b>gall — gerro</b>. Hi trobarem <i>gat</i>? Sí, perquè gat va després de gall i abans de gerro. I <i>gos</i>? No, perquè gos va després de gerro.</p><p>Consells per buscar ràpid:</p><ul><li>Obre el diccionari més o menys pel lloc de la lletra: la A al principi, la M al mig, la Z al final.</li><li>Mira les paraules guia, no totes les paraules.</li><li>Busca els verbs acabats en <b>-ar</b>, <b>-er</b>, <b>-re</b> o <b>-ir</b>: «menjar», no «menjo».</li></ul><p><b>Activitat</b>: fes una cursa amb un company: qui troba abans la paraula «tortuga»?</p>`,
        L6.filas("Guia", [["esquerra", "primera", cAZ], ["dreta", "última", cRO], ["A", "al principi", cVE], ["Z", "al final", cNA]])],
    ],
    "Per a què serveix?": [
      ["L'ordre alfabètic a tot arreu", `<p>L'<mark>ordre alfabètic</mark> ens ajuda a trobar les coses de pressa. El trobem a molts llocs:</p><ul><li>A la <b>llista de classe</b>: els alumnes van ordenats pel cognom.</li><li>A la <b>biblioteca</b>: els llibres es col·loquen pel cognom de l'autor.</li><li>A l'<b>agenda del telèfon</b>: els contactes estan ordenats per nom.</li><li>Als <b>índexs</b> dels llibres i a les <b>enciclopèdies</b>.</li><li>Als <b>timbres</b> i les bústies d'alguns edificis.</li><li>A les llistes de <b>vocabulari</b> i als glossaris.</li></ul><p>Imagina't una agenda amb mil noms barrejats! Trigaríem moltíssim a trobar el telèfon de l'àvia.</p><p><b>Activitat</b>: fes una agenda de la classe amb el nom de cada company en ordre alfabètic.</p>`,
        H6.rueda("On?", "ABC", [["llista", cAZ], ["biblioteca", cVE], ["agenda", cNA], ["índex", cRO]]),
        ["T-AKoOvcKX8", "Abecedari català", "Enfants du Monde", 4122183]],
    ],
  },
  final: [
    ["Jocs amb l'abecedari", `<p>Amb l'abecedari podem fer <mark>jocs</mark> molt divertits:</p><ul><li><b>L'abecedari d'animals</b>: cada lletra, un animal. A d'ànec, B de balena, C de cavall, D de dofí…</li><li><b>Paraules encadenades</b>: la paraula nova comença per l'última lletra de l'anterior: sol → lluna → aranya → anell…</li><li><b>Sopa de lletres</b>: trobar paraules amagades en un quadre de lletres.</li><li><b>L'acròstic</b>: escrivim un nom de dalt a baix i fem una paraula amb cada lletra: <b>S</b>ol, <b>O</b>s, <b>L</b>luna.</li><li><b>Veig, veig</b>: «Veig, veig una cosa que comença per la P…» «La pissarra!»</li></ul><p>Jugant, aprenem l'ordre de les lletres sense adonar-nos-en.</p><p><b>Activitat</b>: fes un acròstic amb el teu nom.</p>`,
      L6.filas("Jocs", [["animals", "A d'ànec", cVE], ["encadenades", "sol-lluna", cAZ], ["acròstic", "S-O-L", cRO], ["veig, veig", "per la P", cNA]])],
    ["Repàs: la biblioteca desordenada", `<p>Repassem amb la <mark>lectura</mark>:</p><ul><li>Els llibres s'ordenen pel <b>cognom de l'autor</b>, en ordre alfabètic.</li><li>L'Arnau col·loca els de la <b>A</b> i la <b>B</b>: són al principi.</li><li>La Laia fa els de la <b>M</b>: al mig.</li><li>El Pau posa els de la <b>Z</b> al final, a dalt de tot.</li><li>Si dos llibres comencen per <b>C</b>, mirem la <b>segona lletra</b>.</li><li>Ordenar ajuda a trobar els contes <b>de pressa</b>.</li></ul><p>I el culpable del desordre era… un gatet! Els noms dels personatges (Roser, Arnau, Laia, Pau) porten <b>majúscula</b>.</p><p><b>Activitat</b>: ordena alfabèticament els noms dels personatges de la lectura.</p>`,
      H6.flujo("Biblioteca", ["A-B|Arnau", "M|Laia", "Z|Pau", "C?|2a lletra"], cMO)],
  ],
  ejemplos: [
    ["Ordena: pera, poma, pa.", ["Totes comencen per p.", "Mirem la segona lletra: a, e, o."], "Pa, pera, poma."],
    ["Les paraules guia són «lleó — lloro». Hi és «llop»?", ["llop va després de lleó i abans de lloro."], "Sí."],
  ],
  errores: ["Escriure els noms de persones o pobles amb minúscula.", "Buscar al diccionari el verb conjugat («menjo») en lloc de l'infinitiu («menjar»)."],
  ejercicios: [
    ["b", "Escriu amb majúscula: barcelona.", "Barcelona."],
    ["b", "Quina lletra va després de la M?", "La N."],
    ["b", "Ordena: dau, abella, cotxe.", "Abella, cotxe, dau."],
    ["b", "Què són les paraules guia?", "Les paraules de dalt de la pàgina del diccionari."],
    ["b", "Els mesos van amb majúscula o minúscula?", "Amb minúscula."],
    ["m", "Ordena: sol, sabata, sopa.", "Sabata, sol, sopa."],
    ["m", "Ordena: gat, gall, gos.", "Gall, gat, gos."],
    ["m", "Com buscaries «corro» al diccionari?", "Buscant «córrer»."],
    ["m", "Digues tres llocs on hi ha ordre alfabètic.", "Llista de classe, biblioteca, agenda."],
    ["m", "Fes tres paraules encadenades després de «sol».", "Lluna, aranya, anell…"],
    ["a", "A la lectura, per què el Pau posa els llibres de la Z?", "Perquè és el més alt i van a dalt de tot."],
    ["a", "Qui havia desordenat la biblioteca?", "Un gatet."],
    ["a", "Paraules guia «mar — mel». Hi és «mató»? I «mico»?", "Mató sí; mico no."],
    ["a", "Fes un abecedari d'animals de la A a la F.", "Ànec, balena, cavall, dofí, elefant, foca."],
  ],
  quiz: [
    ["S'escriu amb majúscula…", ["Lleida", "dilluns", "gener"], "Majúscules."],
    ["Va primer…", ["casa", "cotxe", "cuina"], "Segona lletra."],
    ["Les paraules guia són a…", ["dalt de la pàgina", "la portada", "l'última pàgina"], "Diccionari."],
    ["Al diccionari busquem…", ["menjar", "menjo", "menjava"], "Verbs."],
    ["Una paraula per a cada lletra d'un nom és un…", ["acròstic", "conte", "poema"], "Jocs."],
  ],
  examen: [
    ["A la lectura, qui és la bibliotecària?", ["la senyora Roser", "la Laia", "la mestra Pau"], "Lectura."],
    ["Com s'ordenen els llibres?", ["pel cognom de l'autor", "per colors", "per mida"], "Repàs."],
  ],
  tarjetas: [
    ["Segona lletra", "Si comencen igual, mira la segona, i després la tercera."],
    ["Paraules guia", "Esquerra: primera de la pàgina. Dreta: última."],
  ],
  glosario: [
    ["Majúscula", "Lletra gran: A, B, C."],
    ["Minúscula", "Lletra petita: a, b, c."],
    ["Nom propi", "Nom d'una persona, un lloc o un animal concret."],
    ["Paraules guia", "Paraules de dalt de la pàgina del diccionari."],
    ["Infinitiu", "Nom del verb: menjar, córrer."],
    ["Índex", "Llista dels temes d'un llibre."],
    ["Acròstic", "Text fet amb les lletres d'un nom."],
    ["Bibliotecària", "Persona que té cura d'una biblioteca."],
    ["Prestatge", "Lleixa on es posen els llibres."],
    ["Cognom", "Nom de família."],
  ],
  situacion: {
    titulo: "El diccionari de la classe",
    reto: "La classe fa un diccionari il·lustrat amb paraules noves que aprèn cada setmana, ordenades alfabèticament.",
    pasos: ["Triar paraules noves de les lectures i els temes.", "Escriure cada paraula amb un dibuix i una explicació.", "Ordenar les fitxes alfabèticament, mirant la segona lletra si cal.", "Posar paraules guia a cada pàgina i enquadernar el diccionari."],
    producto: "Un diccionari il·lustrat de la classe.",
    evaluacion: ["Fa servir bé majúscules i minúscules.", "Ordena paraules mirant la segona lletra.", "Fa servir les paraules guia.", "Reconeix l'ordre alfabètic a la vida diària."],
  },
});
