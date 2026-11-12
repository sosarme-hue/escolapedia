// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "Les categories gramaticals",
  minutos: 50,
  objetivos: ["Identificar les nou categories gramaticals", "Distingir les categories variables de les invariables", "Reconèixer les formes bàsiques del verb i dels pronoms en català"],
  claves: ["nom", "adjectiu", "determinant", "pronom", "verb", "adverbi", "preposició", "conjunció", "interjecció", "pronoms febles"],
  pregunta: {
    texto: "A «El bo de l'Arnau sempre ajuda» i «L'Arnau és bo», la paraula «bo» fa la mateixa feina?",
    respuesta: "No. A la segona frase «bo» és un <b>adjectiu</b> que diu com és l'Arnau. A la primera, «el bo» funciona gairebé com un <b>nom</b>, perquè porta un determinant davant. La <mark>categoria</mark> d'una paraula depèn de la seva forma i del paper que fa a la frase.",
  },
  bloques: [
    {
      html: `<h3>Nou categories, dos grups</h3><p>Les paraules es classifiquen en <b>categories gramaticals</b> segons la seva forma, el seu significat i la seva funció. N'hi ha nou. Les <b>variables</b> canvien de forma (gènere, nombre, persona, temps): el <b>nom</b>, l'<b>adjectiu</b>, el <b>determinant</b>, el <b>pronom</b> i el <b>verb</b>. Les <b>invariables</b> no canvien mai: l'<b>adverbi</b>, la <b>preposició</b>, la <b>conjunció</b> i la <b>interjecció</b>.</p>`,
      svg: L.tabla("Categories variables i invariables", ["Variables", "Invariables"], [
        ["nom, adjectiu", "adverbi"], ["determinant", "preposició"], ["pronom", "conjunció"], ["verb", "interjecció"],
      ]),
    },
    {
      html: `<h3>El nom i l'adjectiu</h3><p>El <b>nom</b> o substantiu anomena persones, animals, objectes, llocs, sentiments o idees: <i>Marta</i>, <i>gos</i>, <i>llibertat</i>. Pot ser propi o comú, concret o abstracte, comptable o no comptable. L'<b>adjectiu</b> expressa una <mark>qualitat</mark> del nom i concorda amb ell en gènere i nombre: <i>una casa blanca</i>, <i>uns gossos petits</i>. Pot anar davant o darrere del nom, o després d'un verb copulatiu.</p>`,
      svg: L.frase("Concordança del nom i l'adjectiu", [
        ["unes", "determinant", "var(--inf)"], ["cases", "nom", "var(--pen)"],
        ["blanques", "adjectiu", "var(--leaf)"],
      ], "femení plural tots tres"),
    },
    {
      html: `<h3>Determinants i pronoms</h3><p>Els <b>determinants</b> van davant del nom i el concreten: articles (<i>el, la, els, les, un, una</i>), demostratius (<i>aquest, aquell</i>), possessius (<i>el meu, la seva</i>), numerals (<i>tres, tercer</i>), quantitatius (<i>molts, pocs</i>) i indefinits (<i>algun, cap</i>). Els <b>pronoms</b> <mark>substitueixen el nom</mark>: personals forts (<i>jo, tu, ell</i>), febles (<i>em, el, hi, en</i>), demostratius, possessius, relatius i interrogatius.</p>`,
      svg: L.filas("Determinant o pronom?", [
        ["Determinant", "Aquest llibre és meu.", "var(--pen)"],
        ["Pronom", "Aquest és meu.", "var(--red)"],
        ["Pronom feble", "El vull.", "var(--leaf)"],
      ], "el determinant porta nom al costat"),
    },
    {
      html: `<h3>El verb</h3><p>El <b>verb</b> expressa accions, processos o estats i és el nucli del predicat. Té morfemes de <b>persona, nombre, temps, mode i aspecte</b>. En català hi ha tres conjugacions: la <b>1a</b>, en <i>-ar</i> (cantar); la <b>2a</b>, en <i>-er</i>, <i>-re</i> (témer, perdre); i la <b>3a</b>, en <i>-ir</i> (dormir, servir). Molts verbs de la 3a són <mark>incoatius</mark>: afegeixen <i>-eix</i> en algunes formes (<i>serveixo</i>, <i>serveixes</i>).</p>`,
      svg: L.filas("Les tres conjugacions", [
        ["1a: -ar", "cantar → canto", "var(--pen)"],
        ["2a: -er, -re", "perdre → perdo", "var(--leaf)"],
        ["3a: -ir", "dormir → dormo", "var(--red)"],
        ["3a incoativa", "servir → serveixo", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Les categories invariables</h3><p>L'<b>adverbi</b> modifica un verb, un adjectiu o un altre adverbi i indica lloc (<i>aquí</i>), temps (<i>ahir</i>), manera (<i>bé</i>), quantitat (<i>molt</i>), afirmació o negació (<i>sí, no</i>). La <b>preposició</b> uneix paraules (<i>a, de, en, amb, per, per a</i>). La <b>conjunció</b> uneix paraules o oracions (<i>i, o, però, perquè</i>). La <b>interjecció</b> expressa <mark>emocions</mark>: <i>ai!, ep!, uf!</i></p>`,
      svg: L.filas("Categories invariables", [
        ["Adverbi", "Ho fas molt bé.", "var(--pen)"],
        ["Preposició", "Vaig a casa.", "var(--leaf)"],
        ["Conjunció", "Pa i aigua.", "var(--inf)"],
        ["Interjecció", "Ai, quin mal!", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Les nou categories gramaticals",
    svg: L.columnas("Categories gramaticals agrupades", [
      ["anomenen", "NOM", ["persones, coses,", "idees"], "var(--pen)"],
      ["acompanyen el nom", "ADJ · DET", ["qualitat;", "concreció"], "var(--leaf)"],
      ["substitueix el nom", "PRONOM", ["jo, aquest,", "el, hi, en"], "var(--inf)"],
      ["acció o estat", "VERB", ["persona, temps,", "mode"], "var(--red)"],
    ]),
  },
  video: { id: "P5TQ_-jhxfs", titulo: "Cómo identificar las categorías gramaticales", canal: "Clases Particulares en Ávila", vistas: 753718, megusta: 0, busqueda: "categories gramaticals" },
  quiz: [
    { q: "Quina categoria és invariable?", o: ["L'adverbi", "El nom", "El verb"], a: 0, e: "No canvia de forma." },
    { q: "A «Aquella noia», «aquella» és…", o: ["determinant", "pronom", "adjectiu"], a: 0, e: "Va davant del nom." },
    { q: "«Dormir» és de la conjugació…", o: ["3a", "1a", "2a"], a: 0, e: "Acaba en -ir." },
    { q: "«Uf!» és una…", o: ["interjecció", "conjunció", "preposició"], a: 0, e: "Expressa una emoció." },
    { q: "«Llibertat» és un nom…", o: ["abstracte", "propi", "concret"], a: 0, e: "No es pot percebre amb els sentits." },
  ],
  examen: [
    { q: "A «El vull», «el» és…", o: ["un pronom feble", "un article", "un adjectiu"], a: 0, e: "Substitueix el CD." },
    { q: "«Serveixo» mostra un verb…", o: ["incoatiu", "de la 1a", "irregular de la 2a"], a: 0, e: "Afegeix -eix." },
    { q: "«Ahir» és un adverbi de…", o: ["temps", "lloc", "manera"], a: 0, e: "Indica quan." },
  ],
  feynman: ["Les categories variables i les invariables", "La diferència entre determinant i pronom", "Les tres conjugacions i els verbs incoatius", "Tres tipus d'adverbis amb exemples"],
  mapa: mapa("CATEGORIES", "var(--eso)", [
    ["Variables", "nom · adjectiu · det…", "var(--pen)"],
    ["Verb", "-ar · -er/-re · -ir", "var(--red)"],
    ["Pronoms", "forts · febles", "var(--leaf)"],
    ["Invariables", "adv · prep · conj · interj", "var(--inf)"],
  ]),
  tarjetas: [
    ["Categories variables", "Nom, adjectiu, determinant, pronom i verb: canvien de forma."],
    ["Categories invariables", "Adverbi, preposició, conjunció i interjecció: no canvien."],
    ["Determinant", "Va davant del nom i el concreta: el, aquest, meu, tres, molts."],
    ["Pronom", "Substitueix el nom: jo, aquest, el, hi, en."],
    ["Verb incoatiu", "Verb de la 3a conjugació que afegeix -eix: serveixo, llegeixes."],
  ],
  familias: ["Agafeu una frase d'un rètol del carrer i jugueu a dir la categoria de cada paraula.", "Conjugueu junts en veu alta un verb incoatiu (servir, llegir) en present.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Reflexió sobre la llengua: categories gramaticals, morfologia nominal i verbal, pronoms forts i febles (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Bingo de categories gramaticals amb un text breu.", "Classificar paraules en cartolines per colors segons la categoria.", "Detectar errors de pronoms febles en missatges reals."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans: Gramàtica de la llengua catalana", url: "https://giec.iec.cat/" },
    { t: "Optimot, consultes lingüístiques (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Fer servir correctament els pronoms febles més habituals", "Distingir les preposicions a, en, per i per a"],
  bloques: [
    { tras: "El nom i l'adjectiu", html: `<h3>El gènere i el nombre</h3><p>La majoria de noms i adjectius fan el <b>femení</b> afegint <i>-a</i> (<i>nen → nena</i>, <i>alt → alta</i>), però de vegades cal fer canvis ortogràfics: <i>boig → boja</i>, <i>groc → groga</i>, <i>lleig → lletja</i>. Alguns adjectius tenen una sola forma per als dos gèneres: <i>feliç</i>, <i>jove</i>, <i>agradable</i>. I compte amb els noms de gènere diferent del castellà: en català són <mark>masculins</mark> <i>el senyal</i>, <i>el dubte</i>, <i>el color</i>, <i>el front</i> i <i>l'avantatge</i>, i <mark>femenins</mark> <i>la resta</i>, <i>la suor</i>, <i>la dent</i> i <i>la xocolata</i>.</p><p>El <b>plural</b> es fa normalment amb <i>-s</i>; si la paraula acaba en <i>-a</i>, fa <i>-es</i> (<i>casa → cases</i>, amb canvis com <i>platja → platges</i>); i molts mots aguts acabats en <i>-s</i>, <i>-ç</i>, <i>-x</i> fan <i>-os</i>: <i>gos → gossos</i>, <i>peix → peixos</i>.</p>` },
    { tras: "Determinants i pronoms", html: `<h3>Els pronoms febles</h3><p>Els <b>pronoms febles</b> són una característica molt pròpia del català. Van sempre enganxats al verb i substitueixen complements. Els més habituals són:</p>${L.tb(["Pronom", "Substitueix", "Exemple"], [["el, la, els, les", "el CD determinat", "Compro el pa → <b>El</b> compro."], ["ho", "un CD neutre (això, que…)", "Sé que ve → <b>Ho</b> sé."], ["en", "un CD indeterminat o «de + …»", "Vull pomes → <b>En</b> vull."], ["li, els", "el CI", "Dic a la Marta → <b>Li</b> dic."], ["hi", "un complement de lloc o altres", "Vaig a Vic → <b>Hi</b> vaig."]])}<p>Davant del verb van separats i, si cal, apostrofats (<i>l'agafo</i>, <i>n'he comprat</i>); darrere, s'uneixen amb <mark>guionet</mark> o apòstrof (<i>agafa-la</i>, <i>compra'n</i>). Recorda que el CI plural és <b>els</b>, i no «lis».</p>` },
    { tras: "El verb", html: `<h3>Formes verbals característiques</h3><p>Algunes formes del verb català no existeixen en castellà i convé conèixer-les bé:</p><ul><li>El <b>passat perifràstic</b>: <i>vaig cantar</i>, <i>vas cantar</i>, <i>va cantar</i>… Equival al passat simple i és molt més usat a l'oral que <i>cantà</i>.</li><li>Les <b>formes no personals</b>: l'infinitiu (<i>cantar</i>), el gerundi (<i>cantant</i>) i el participi (<i>cantat, cantada, cantats, cantades</i>), que pot tenir quatre formes.</li><li>Els <b>verbs incoatius</b> de la 3a conjugació: <i>llegeixo, llegeixes, llegeix, llegim, llegiu, llegeixen</i>. Fixa't que la 1a i la 2a del plural no porten <i>-eix-</i>.</li></ul><p>També hi ha verbs molt freqüents i <mark>irregulars</mark>, com <i>ser</i>, <i>haver</i>, <i>fer</i>, <i>anar</i>, <i>tenir</i>, <i>venir</i> o <i>poder</i>, que cal practicar especialment.</p>` },
    { tras: "Les categories invariables", html: `<h3>Les preposicions que més costen</h3><p>Les preposicions <b>a</b> i <b>en</b> es confonen sovint. Com a norma general, davant de noms de lloc amb article o determinant fem servir <i>a</i> (<i>Visc a la ciutat</i>, <i>Ho tinc a la motxilla</i>) i davant de <i>un</i>, <i>algun</i>, <i>aquest</i> o <i>aquell</i> es pot fer servir <i>en</i> (<i>en aquest moment</i>, <i>en un racó</i>). Amb noms de ciutat sempre <i>a</i>: <i>a Girona</i>.</p><p>La diferència entre <b>per</b> i <b>per a</b> també és important: <i>per</i> expressa causa, mitjà o lloc de pas (<i>Ho ha fet per tu</i>, <i>Passo per Lleida</i>), i <i>per a</i> davant de nom expressa <mark>destinació o finalitat</mark> (<i>Aquest regal és per a tu</i>). Davant d'infinitiu, per expressar finalitat es pot fer servir <i>per</i> o <i>per a</i>. Recorda també les <b>contraccions</b>: <i>al</i>, <i>del</i>, <i>pel</i>, <i>als</i>, <i>dels</i>, <i>pels</i>.</p>` },
    { tras: "Les categories invariables", html: `<h3>Com identificar la categoria d'una paraula</h3><p>Quan dubtis, fes aquestes proves:</p><ul><li>Si hi pots posar un <b>determinant</b> davant (<i>la casa</i>), és un nom.</li><li>Si concorda amb un nom i pots posar-hi <i>molt</i> davant (<i>molt bonic</i>), és un adjectiu.</li><li>Si el pots conjugar (<i>jo canto, tu cantes</i>), és un verb.</li><li>Si va sol, sense nom, i n'ocupa el lloc (<i>aquest és meu</i>), és un pronom; si va amb el nom (<i>aquest llibre</i>), és un determinant.</li><li>Si no canvia de forma i acompanya un verb (<i>corre ràpid</i>), probablement és un adverbi.</li></ul><p>Recorda que una mateixa paraula pot canviar de categoria segons el context: <mark>«ràpid»</mark> és adjectiu a <i>un tren ràpid</i> i adverbi a <i>corre ràpid</i>.</p>` },
  ],
  videos: [
    ["Determinants i pronoms", L.vid("q8HzI8H5DQk", "Els determinants en català (1): articles, demostratius i possessius", "OK CATALÀ", 66839)],
    ["Els pronoms febles", L.vid("-bUZOI0zR30", "Els pronoms febles | Morfosintaxi | 3r i 4t ESO", "3CatCampus", 34097)],
  ],
  ejemplos: [
    ["Analitza les categories de «Aquells nens juguen molt bé al parc».", ["Aquells: determinant demostratiu. Nens: nom comú.", "Juguen: verb (1a conjugació). Molt: adverbi de quantitat. Bé: adverbi de manera.", "Al: contracció de la preposició a + l'article el. Parc: nom comú."], "det + nom + verb + adv + adv + prep/art + nom."],
    ["Substitueix per pronoms febles: «Dono el llibre a la Joana».", ["El llibre és el CD determinat → el.", "A la Joana és el CI → li.", "Combinació «li + el» → «l'hi»."], "L'hi dono."],
    ["Tria per o per a: «Aquest pastís és ___ l'avi» i «Ho he fet ___ amor».", ["Al primer cas: destinació (per a qui és?).", "Al segon: causa (per què?).", "Destinació → per a; causa → per."], "per a l'avi; per amor."],
  ],
  errores: [
    "Dir «lis» com a CI plural: la forma correcta és «els».",
    "Confondre determinant i pronom: el determinant sempre va amb un nom.",
    "Fer femenins «la senyal» o «la dubte»: en català són masculins.",
    "Conjugar «llegeixem» en lloc de «llegim».",
    "Fer servir «per» en lloc de «per a» per indicar destinació davant d'un nom.",
    "Oblidar l'apòstrof dels pronoms febles: «el agafo» en lloc de «l'agafo».",
  ],
  ejercicios: [
    ["Escriu les nou categories gramaticals.", "Nom, adjectiu, determinant, pronom, verb, adverbi, preposició, conjunció i interjecció."],
    ["Escriu el femení de «groc», «boig» i «lleig».", "Groga, boja i lletja."],
    ["Escriu el plural de «gos», «peix» i «platja».", "Gossos, peixos i platges."],
    ["Determinant o pronom? «Vull aquell» / «Vull aquell pastís».", "Al primer cas és pronom; al segon, determinant."],
    ["Conjuga el present de «servir».", "Serveixo, serveixes, serveix, servim, serviu, serveixen."],
    ["Escriu en passat perifràstic: «Ells (anar) al cine ahir».", "Ells van anar al cine ahir."],
    ["Substitueix el complement per un pronom feble: «Vull pomes».", "En vull."],
    ["Substitueix el complement per un pronom feble: «Vaig a la piscina».", "Hi vaig."],
    ["Corregeix: «Vaig dir-lis la veritat».", "Vaig dir-los la veritat (o: Els vaig dir la veritat)."],
    ["Quina categoria té «ràpid» a «Ho fa ràpid»?", "Adverbi, perquè modifica el verb."],
  ],
  quiz: [
    ["El CI plural en pronom feble és…", ["els", "lis", "les"], 0, "Mai «lis»."],
    ["«En vull» substitueix…", ["un CD indeterminat", "un CI", "un lloc"], 0, "Vull pomes."],
    ["«Vaig cantar» és un…", ["passat perifràstic", "futur", "present"], 0, "Equival a «cantà»."],
    ["En català, «senyal» és…", ["masculí", "femení", "neutre"], 0, "El senyal."],
    ["«Aquest regal és ___ tu»", ["per a", "per", "pera"], 0, "Destinació."],
  ],
  tarjetas: [
    ["Pronom «en»", "Substitueix un CD indeterminat: Vull pomes → En vull."],
    ["Pronom «hi»", "Substitueix sobretot un complement de lloc: Vaig a Vic → Hi vaig."],
    ["Passat perifràstic", "Vaig cantar, vas cantar, va cantar…"],
  ],
});
