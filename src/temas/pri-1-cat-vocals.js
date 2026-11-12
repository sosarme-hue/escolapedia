// Llengua Catalana 1r de Primària: les vocals. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, parejas, frase, charla, mural, silabas: s, vid } = require("./_peque");
const { FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", G = "var(--muted)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "1-primaria",
  titulo: "Les vocals",
  minutos: 20,
  objetivos: ["Saber que les paraules s'escriuen amb lletres", "Conèixer les cinc vocals i dir-les en ordre", "Reconèixer lletres majúscules i minúscules"],
  claves: ["lletra", "abecedari", "vocal", "consonant", "majúscula", "minúscula"],
  pregunta: {
    texto: "Digues el teu nom en veu alta molt a poc a poc. Quins sons hi sents? N'hi ha algun que sona amb la boca ben oberta?",
    respuesta: "El teu nom està fet de <mark>lletres</mark>. Les que sonen soles i amb la boca oberta són les <b>vocals</b>: a, e, i, o, u.",
  },
  bloques: [
    {
      html: `<h3>Les lletres</h3><p>Tot el que llegim està fet de <mark>lletres</mark>.</p><p>Amb lletres escrivim el nostre nom, els contes i els cartells del carrer.</p><p>Cada lletra té una <b>forma</b> i un <b>so</b>. La lletra <b>m</b> sona «mmm», com quan una cosa és bona. La lletra <b>s</b> sona «sss», com una serp. Escolta-les bé!</p>`,
      svg: fichas("Lletres soltes en fitxes de colors: m, s, p, l, t", [["m", R], ["s", A], ["p", V], ["l", N], ["t", M]], { titulo: "Cada lletra té forma i so", nota: "m sona «mmm» · s sona «sss»", grande: true }),
    },
    {
      html: `<h3>L'abecedari</h3><p>Totes les lletres juntes i en ordre formen l'<mark>abecedari</mark>.</p><p>Comença per la <b>a</b> i acaba per la <b>z</b>. Té <b>26 lletres</b>.</p><p>En català també fem servir la <b>ç</b>, la ce trencada, com a <i>caçar</i>. L'ordre sempre és el mateix: a, be, ce, de… Per això el podem cantar com una cançó.</p>`,
      svg: fichas("Les primeres lletres de l'abecedari en ordre: a, b, c, d, e, f, g, h, i, j, k, l", [["a", R], ["b", A], ["c", A], ["d", A], ["e", R], ["f", A], ["g", A], ["h", A], ["i", R], ["j", A], ["k", A], ["l", A]], { titulo: "a, b, c… així comença", nota: "… i continua fins a la z: 26 lletres" }),
      video: vid("wQZjKsUxnws", "Abecedari", "Ester Raset Armengol (Eraset)", 1086481),
    },
    {
      html: `<h3>Les cinc vocals</h3><p>Hi ha cinc lletres molt especials: les <mark>vocals</mark>.</p><p>Són la <b>a</b>, la <b>e</b>, la <b>i</b>, la <b>o</b> i la <b>u</b>.</p><p>Les vocals sonen soles, sense l'ajuda de cap altra lletra. Es diuen amb la boca oberta i l'aire surt lliure. Totes les paraules tenen almenys una vocal. Busca-les sempre!</p>`,
      svg: fichas("Les cinc vocals en gran: a, e, i, o, u", [["a", R], ["e", A], ["i", V], ["o", N], ["u", M]], { titulo: "Les vocals", nota: "a · e · i · o · u", grande: true }),
    },
    {
      html: `<h3>Paraules que comencen per vocal</h3><p>Moltes paraules comencen per una vocal.</p><p><b>A</b>rbre comença per <mark>a</mark>. <b>E</b>strella comença per <mark>e</mark>. <b>I</b>lla comença per <mark>i</mark>. <b>Ó</b>s comença per <mark>o</mark>. <b>U</b>ll comença per <mark>u</mark>.</p><p>Per saber-ho, digues la paraula a poc a poc. Escolta bé el primer so.</p>`,
      svg: dibujos("Un arbre, una estrella, una illa, un ós i un ull, cadascun amb la seva paraula", [["arbol", s("a|rbre", R), K], ["estrella", s("e|strella", A), K], ["isla", s("i|lla", V), K], ["oso", s("ó|s", N), K], ["ojo", s("u|ll", M), K]]),
    },
    {
      html: `<h3>Com sona cada vocal</h3><p>Cada vocal es diu amb la boca d'una manera.</p><p>Amb la <b>a</b>, la boca s'obre molt. Amb la <b>i</b>, somriem. Amb la <b>o</b>, fem un cercle. Amb la <b>u</b>, posem els llavis com per fer un petó.</p><p>Mira't en un mirall i prova-ho. És molt divertit! Fes ganyotes amb cada vocal.</p>`,
      svg: dibujos("Quatre boques: molt oberta per a la a, somrient per a la i, rodona per a la o i petita per a la u", [["cara_a", "a", R], ["cara_i", "i", V], ["cara_o", "o", N], ["cara_u", "u", M]], { titulo: "Posa la boca de cada vocal", nota: "a oberta · i somriure · o rodona · u petó" }),
    },
    {
      html: `<h3>Les consonants</h3><p>Les altres lletres es diuen <mark>consonants</mark>: b, c, d, f, m, p, s, t…</p><p>Gairebé sempre necessiten una vocal per sonar bé.</p><p>Si ajuntem la <b>m</b> i la <b>a</b>, diem <b>ma</b>. Si ajuntem la <b>p</b> i la <b>a</b>, diem <b>pa</b>. Amb <i>ma</i> i <i>pa</i> ja podem llegir paraules: <i>mama</i>, <i>papa</i>.</p>`,
      svg: frase("La lletra m més la a fan ma; la p més la a fan pa", [["m", A], ["+", G], ["a", R], ["=", G], ["ma", V], ["/"], ["p", A], ["+", G], ["a", R], ["=", G], ["pa", V]], { titulo: "Consonant + vocal", nota: "ma + ma = mama · pa + pa = papa", fs: 24 }),
    },
    {
      html: `<h3>Majúscules i minúscules</h3><p>Cada lletra es pot escriure de dues maneres.</p><p>La <mark>majúscula</mark> és gran: <b>A</b>, <b>E</b>, <b>M</b>. La <mark>minúscula</mark> és petita: <b>a</b>, <b>e</b>, <b>m</b>.</p><p>Totes dues sonen igual. La majúscula es fa servir per començar a escriure. També als noms, com <b>Anna</b> o <b>Lleida</b>.</p>`,
      svg: parejas("La A majúscula i la a minúscula, la E i la e, la M i la m", [[null, "A", null, "a"], [null, "E", null, "e"], [null, "M", null, "m"]], { izq: "majúscula", der: "minúscula", color: A, color2: V, flecha: "=" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Conèixer les lletres ens ajuda a <mark>llegir i escriure</mark>.</p><p>Així podem llegir contes, escriure el nostre nom i entendre els cartells.</p><p>L'ordre de l'abecedari també serveix per <b>ordenar</b>. A classe, la llista de noms va per ordre alfabètic: primer <b>Anna</b>, després <b>Bruna</b> i després <b>Carles</b>.</p>`,
      svg: dibujos("Un llibre, un llapis i una escola: les lletres serveixen per llegir, escriure i ordenar", [["libro", "llegir", A], ["lapiz", "escriure", R], ["escuela", "ordenar", V]], { titulo: "Les lletres serveixen per…", nota: "Anna · Bruna · Carles" }),
    },
    {
      html: `<h3>Juguem a «Veig, veig»</h3><p>Un jugador mira una cosa i diu per quina lletra comença.</p><p>Els altres han d'<mark>endevinar</mark> què és.</p><p>—Veig, veig… una cosa que comença per la <b>o</b>. —És un ós? —Sí!</p><p>Jugueu a casa o al cotxe. Així practiquem les vocals i les consonants. Guanya qui endevina més coses.</p>`,
      svg: charla("Dos nens juguen a Veig, veig: una cosa que comença per o; és un ós", [["nino", "Veig, veig… una cosa amb o!", A], ["nina", "És un ós?", R], ["nino", "Sí! Et toca!", A]]),
    },
  ],
  figura: {
    titulo: "Les cinc vocals",
    svg: mural("Les cinc vocals amb un dibuix: a d'arbre, e d'estrella, i d'illa, o d'ós i u d'ull", [["arbol", "a", "arbre", R], ["estrella", "e", "estrella", A], ["isla", "i", "illa", V], ["oso", "o", "ós", N], ["ojo", "u", "ull", M]], "Cada vocal amb una paraula que comença per ella"),
  },
  video: { ...vid("whuKasZzqDU", "Les vocals (videoclip oficial)", "Dàmaris Gelabert", 47588269), busqueda: "les vocals cançó infantil en català" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Per quina vocal comença la paraula «ós»?",
      pasos: ["Digues la paraula molt a poc a poc: ooo-s.", "Escolta el primer so: «ooo».", "Aquest so és la vocal o."],
      resultado: "«ós» comença per la o." },
    { enunciado: "Quantes vocals té «taula»?",
      pasos: ["Separa la paraula en trossos: tau-la.", "A «tau» sentim la a i la u. A «la» sentim la a.", "Compta-les: a, u i a són tres."],
      resultado: "«taula» té 3 vocals: a, u, a." },
    { enunciado: "Escriu el teu nom. Per quina lletra comença? És majúscula?",
      pasos: ["Escriu el teu nom amb l'ajuda d'un adult.", "Mira la primera lletra i digues com sona.", "Els noms sempre comencen amb majúscula."],
      resultado: "el teu nom comença amb una lletra majúscula." },
  ],
  errores: [
    "Pensar que la y o la h són vocals: les vocals només són cinc, a, e, i, o, u.",
    "Confondre lletres que s'assemblen, com la b i la d: fixa't cap on mira la panxa.",
    "Escriure el nom propi amb minúscula: els noms comencen amb majúscula.",
    "Dir el nom de la lletra en lloc del so quan llegim: la m sona «mmm», no «ema».",
  ],
  ejercicios: [
    { q: "Digues les cinc vocals en ordre.", sol: "a, e, i, o, u." },
    { q: "Per quina vocal comença «ull»?", sol: "Per la u." },
    { q: "Per quina vocal comença «elefant»?", sol: "Per la e." },
    { q: "Encercla les vocals de la paraula «casa».", sol: "La a i la a." },
    { q: "Quina lletra va després de la a a l'abecedari?", sol: "La b." },
    { q: "Escriu la A majúscula i la a minúscula.", sol: "A i a: sonen igual." },
    { q: "Digues tres coses de casa que comencin per vocal.", sol: "Per exemple: armari, olla, ull, escala." },
    { q: "La m és vocal o consonant?", sol: "Consonant." },
    { q: "Ajunta la p i la a. Què sona?", sol: "pa." },
    { q: "Per quina lletra comença el teu nom?", sol: "Resposta lliure: ha de ser la primera lletra del seu nom, en majúscula." },
  ],
  quiz: [
    { q: "Quantes vocals hi ha?", o: ["5", "3", "26"], a: 0, e: "a, e, i, o, u: cinc." },
    { q: "Quina d'aquestes lletres és una vocal?", o: ["m", "o", "s"], a: 1, e: "La o és vocal." },
    { q: "«Illa» comença per…", o: ["a", "e", "i"], a: 2, e: "iii-lla: comença per i." },
    { q: "Per quina lletra comença l'abecedari?", o: ["a", "z", "m"], a: 0, e: "L'abecedari comença per la a." },
    { q: "Per quina lletra acaba l'abecedari?", o: ["u", "z", "o"], a: 1, e: "Acaba per la z." },
    { q: "Quina és la majúscula de «e»?", o: ["E", "e", "a"], a: 0, e: "E és la majúscula." },
    { q: "Amb la boca rodona diem la…", o: ["i", "o", "e"], a: 1, e: "La o es diu amb la boca en cercle." },
    { q: "m + a sona…", o: ["am", "ma", "me"], a: 1, e: "Primer m i després a: ma." },
    { q: "Quina paraula comença per vocal?", o: ["pa", "ós", "mà"], a: 1, e: "ós comença per o." },
    { q: "Els noms de persona comencen amb…", o: ["majúscula", "minúscula", "número"], a: 0, e: "Anna, Pau, Laia: amb majúscula." },
  ],
  examen: [
    { q: "Quina és una consonant?", o: ["a", "u", "p"], a: 2, e: "La p és consonant." },
    { q: "Quantes lletres té l'abecedari?", o: ["5", "26", "10"], a: 1, e: "26 lletres." },
    { q: "«Ull» comença per…", o: ["u", "o", "a"], a: 0, e: "uuu-ll." },
    { q: "Quina vocal té «sol»?", o: ["o", "a", "e"], a: 0, e: "Només la o." },
  ],
  feynman: ["Què són les lletres i l'abecedari", "Quines són les vocals i com sonen", "Quina diferència hi ha entre majúscula i minúscula"],
  mapa: mapa("LES LLETRES", "var(--pri)", [
    ["Abecedari", "26 lletres, de la a a la z", A],
    ["Vocals", "a · e · i · o · u", R],
    ["Consonants", "b, c, d, m, p, s…", V],
    ["Majúscula", "A gran · a petita", N],
  ], 220),
  tarjetas: [
    ["Quines són les vocals?", "a, e, i, o, u"],
    ["Quantes lletres té l'abecedari?", "26"],
    ["Per quina lletra comença l'abecedari?", "Per la a"],
    ["Per quina lletra acaba?", "Per la z"],
    ["La m és vocal o consonant?", "Consonant"],
    ["m + a = …", "ma"],
    ["Com comencen els noms?", "Amb majúscula"],
    ["Per quina vocal comença «ós»?", "Per la o"],
  ],
  familias: [
    "Canteu junts la cançó de les vocals i la de l'abecedari.",
    "Jugueu a «Veig, veig» amb vocals a casa, al cotxe o al parc.",
    "Busqueu lletres en cartells, capses i matrícules i digueu com sonen.",
    "Ajudeu-lo a escriure el seu nom amb la primera lletra en majúscula.",
  ],
  profesores: {
    saberes: "Comunicació escrita: correspondència entre lletres i sons, consciència fonològica, vocals i consonants, l'abecedari i la majúscula inicial (RD 157/2022 i Decret 175/2022 de Catalunya, primer cicle).",
    ideas: ["Capsa de les vocals: objectes que comencen per a, e, i, o, u per classificar.", "Miralls per practicar la forma de la boca de cada vocal.", "Llista de classe ordenada per abecedari i cartell amb totes les lletres."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
