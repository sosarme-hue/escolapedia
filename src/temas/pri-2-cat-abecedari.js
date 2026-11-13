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
    svg: mural("Abecedari de 26 lletres, la ce trencada, els dígrafs i l'ordre alfabètic", [[null, "a … z", "26 lletres", A], [null, "ç", "ce trencada: plaça", R], [null, "ny · ll · l·l", "dues lletres, un so", Ve], ["libro", "diccionari", "tot en ordre", N]], "Les paraules s'ordenen com les lletres de l'abecedari"),
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
    ["Què és un dígraf?", "Dues lletres que fan un so: ny, ll"],
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
