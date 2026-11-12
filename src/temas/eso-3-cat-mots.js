// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "La paraula i la formació de mots",
  minutos: 50,
  objetivos: ["Analitzar l'estructura d'una paraula: lexema i morfemes", "Distingir paraules simples, derivades i compostes", "Conèixer altres maneres de crear paraules noves"],
  claves: ["lexema", "morfema", "morfema flexiu", "morfema derivatiu", "prefix", "sufix", "derivació", "composició", "família de paraules", "neologisme", "manlleu"],
  pregunta: {
    texto: "Què tenen en comú «terra», «enterrar», «terratrèmol» i «terrestre»?",
    respuesta: "Totes comparteixen la mateixa arrel, <mark>terr-</mark>, que porta el significat bàsic. Formen una <b>família de paraules</b>. A partir d'aquesta arrel, la llengua crea mots nous afegint-hi peces (en-, -estre) o unint-la amb altres paraules (tremolor). Això és la <b>formació de mots</b>.",
  },
  bloques: [
    {
      html: `<h3>Lexema i morfemes</h3><p>Les paraules es poden dividir en peces més petites amb significat. El <b>lexema</b> o arrel és la part que porta el <mark>significat bàsic</mark> i que es repeteix en tota la família: <i>pa</i> a «pa», «panet», «paner» i «panera». Els <b>morfemes</b> són les peces que s'afegeixen al lexema per indicar significats gramaticals o per crear paraules noves.</p>`,
      svg: L.frase("Anàlisi de la paraula gatetes", [
        ["gat", "lexema", "var(--pen)"], ["-et", "derivatiu", "var(--leaf)"],
        ["-e", "gènere", "var(--red)"], ["-s", "nombre", "var(--inf)"],
      ], "gat + et + e + s"),
    },
    {
      html: `<h3>Morfemes flexius i derivatius</h3><p>Els <b>morfemes flexius</b> indiquen informació gramatical i no canvien el significat de la paraula: el <b>gènere</b> i el <b>nombre</b> en noms i adjectius (nen, nena, nens), i la <b>persona, el temps i el mode</b> en els verbs (cant-o, cant-aves). Els <b>morfemes derivatius</b> sí que creen <mark>paraules noves</mark>: són els prefixos i els sufixos (fer → <b>des</b>fer, flor → flor<b>ista</b>).</p>`,
      svg: L.tabla("Morfemes flexius i derivatius", ["Flexius", "Derivatius"], [
        ["gènere: nen-a", "prefix: des-fer"], ["nombre: nen-s", "sufix: flor-ista"], ["verb: cant-o", "creen paraules"],
      ]),
    },
    {
      html: `<h3>Paraules simples, derivades i compostes</h3><p>Segons la seva estructura, les paraules poden ser <b>simples</b>, si només tenen un lexema i, si de cas, morfemes flexius (<i>mar</i>, <i>cases</i>); <b>derivades</b>, si tenen un lexema i un o més morfemes derivatius (<i>mariner</i>, <i>desconfiar</i>); o <b>compostes</b>, si estan formades per <mark>dos o més lexemes</mark> (<i>gratacel</i>, <i>rentaplats</i>, <i>agredolç</i>).</p>`,
      svg: L.filas("Simples, derivades i compostes", [
        ["Simple", "mar", "var(--pen)"],
        ["Derivada", "mar + iner → mariner", "var(--leaf)"],
        ["Composta", "grata + cel → gratacel", "var(--red)"],
      ]),
    },
    {
      html: `<h3>La derivació: prefixos i sufixos</h3><p>Els <b>prefixos</b> van davant del lexema i en modifiquen el significat: <i>re</i>- (repetició: refer), <i>des</i>- (contrari: desfer), <i>in</i>-/<i>im</i>- (negació: impossible), <i>pre</i>- (abans: prehistòria). Els <b>sufixos</b> van darrere i sovint <mark>canvien la categoria</mark> de la paraula: <i>-ista</i> (persona: florista), <i>-ment</i> (adverbi: ràpidament), <i>-ar</i> (verb: netejar), <i>-ció</i> (nom: creació).</p>`,
      svg: L.filas("Prefixos i sufixos freqüents", [
        ["re-", "repetició: refer", "var(--pen)"],
        ["des-", "contrari: desfer", "var(--red)"],
        ["-ista", "persona: florista", "var(--leaf)"],
        ["-ment", "adverbi: ràpidament", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>La composició</h3><p>Els mots compostos uneixen dos lexemes. Poden anar <b>junts</b> (<i>parallamps</i>, <i>capgròs</i>), amb <b>guionet</b> (<i>penya-segat</i>, <i>nord-americà</i>) o separats, formant un <b>compost sintagmàtic</b> que funciona com una sola paraula (<i>ull de poll</i>, <i>cotxe llit</i>, <i>mà d'obra</i>). Sovint tenen l'estructura <mark>verb + nom</mark>: <i>rentaplats</i>, <i>llevataques</i>, <i>trencaclosques</i>.</p>`,
      svg: L.filas("Tipus de compostos", [
        ["Junts", "parallamps, capgròs", "var(--pen)"],
        ["Amb guionet", "penya-segat", "var(--leaf)"],
        ["Sintagmàtic", "ull de poll", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Com es formen les paraules",
    svg: L.columnas("Procediments de formació de mots", [
      ["prefix o sufix", "DERIVACIÓ", ["des + fer", "flor + ista"], "var(--pen)"],
      ["dos lexemes", "COMPOSICIÓ", ["renta + plats", "penya-segat"], "var(--leaf)"],
      ["prefix i sufix alhora", "PARASÍNTESI", ["en + dolç + ir", "→ endolcir"], "var(--red)"],
      ["altres", "MOTS NOUS", ["sigles, manlleus,", "neologismes"], "var(--inf)"],
    ]),
  },
  video: { id: "IzBPPjYWyng", titulo: "Morfología: lexemas y morfemas flexivos y derivativos, y tipos de formación de palabras", canal: "Clases Particulares en Ávila", vistas: 997704, megusta: 0, busqueda: "formació de paraules" },
  quiz: [
    { q: "La part de la paraula que porta el significat bàsic és…", o: ["el lexema", "el sufix", "el morfema de nombre"], a: 0, e: "També dit arrel." },
    { q: "A «nenes», «-s» és un morfema…", o: ["flexiu de nombre", "derivatiu", "prefix"], a: 0, e: "Indica plural." },
    { q: "«Desfer» és una paraula…", o: ["derivada", "composta", "simple"], a: 0, e: "Prefix des-." },
    { q: "«Rentaplats» és una paraula…", o: ["composta", "derivada", "simple"], a: 0, e: "Dos lexemes." },
    { q: "El sufix «-ment» forma…", o: ["adverbis", "verbs", "noms de persona"], a: 0, e: "Ràpidament." },
  ],
  examen: [
    { q: "Quina paraula és simple?", o: ["mar", "mariner", "gratacel"], a: 0, e: "Un sol lexema." },
    { q: "«Impossible» té un prefix que indica…", o: ["negació", "repetició", "lloc"], a: 0, e: "No possible." },
    { q: "«Ull de poll» és un compost…", o: ["sintagmàtic", "amb guionet", "derivat"], a: 0, e: "Paraules separades." },
  ],
  feynman: ["Què és el lexema i què són els morfemes", "La diferència entre morfemes flexius i derivatius", "Paraules simples, derivades i compostes", "Tres maneres d'escriure els compostos"],
  mapa: mapa("FORMACIÓ DE MOTS", "var(--eso)", [
    ["Lexema", "significat bàsic", "var(--pen)"],
    ["Morfemes", "flexius · derivatius", "var(--leaf)"],
    ["Derivació", "prefixos · sufixos", "var(--red)"],
    ["Composició", "dos lexemes", "var(--inf)"],
  ]),
  tarjetas: [
    ["Lexema", "Part de la paraula que porta el significat bàsic i es repeteix en la família."],
    ["Morfema flexiu", "Indica gènere, nombre, persona, temps o mode, sense crear paraules noves."],
    ["Prefix", "Morfema derivatiu que va davant del lexema: des-fer."],
    ["Sufix", "Morfema derivatiu que va darrere del lexema: flor-ista."],
    ["Paraula composta", "Paraula formada per dos o més lexemes: gratacel."],
  ],
  familias: ["Jugueu a fer la família de paraules més llarga a partir d'un mot: mar, terra, pa…", "Busqueu paraules compostes a la cuina (escuradents, obrellaunes…) i expliqueu-ne les parts.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Reflexió sobre la llengua: estructura de la paraula, mecanismes de formació de mots (derivació, composició, parasíntesi) i procediments de creació lèxica (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Concurs de famílies de paraules en equips amb el diccionari.", "Inventar compostos verb + nom per a objectes imaginaris.", "Caçar neologismes i manlleus a les xarxes i comprovar-los a l'Optimot."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans: Gramàtica de la llengua catalana", url: "https://giec.iec.cat/" },
    { t: "Diccionari de la llengua catalana (DIEC2)", url: "https://dlc.iec.cat/" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Reconèixer la parasíntesi i els sufixos apreciatius", "Distingir família lèxica i camp semàntic"],
  bloques: [
    { tras: "Morfemes flexius i derivatius", html: `<h3>Els sufixos apreciatius</h3><p>Un grup especial de sufixos no canvia la categoria de la paraula, sinó que hi afegeix un <mark>matís de mida o de sentiment</mark>. Són els <b>sufixos apreciatius</b>:</p>${L.tb(["Tipus", "Sufixos", "Exemples"], [["Diminutius", "-et, -eta, -ó, -í, -ina", "caseta, carretó, gatet"], ["Augmentatius", "-às, -assa, -arro", "homenàs, cotxàs"], ["Pejoratius", "-ot, -ota, -arro", "paperot, llibrot"]])}<p>Els diminutius sovint expressen afecte («la meva germaneta») i els augmentatius i pejoratius, menyspreu o ironia. Compte: alguns diminutius s'han convertit en paraules amb significat propi, com <i>carreró</i> o <i>forquilla</i>, i ja no es noten com a derivats. I el sufix «-ucho» és un castellanisme: en català diem <b>-ot</b> o <b>-arro</b>.</p>` },
    { tras: "La derivació: prefixos i sufixos", html: `<h3>La parasíntesi</h3><p>Alguns mots es formen afegint <b>alhora</b> un prefix i un sufix al lexema. És la <mark>parasíntesi</mark>. La prova és que no existeix la paraula només amb el prefix ni només amb el sufix: de <i>dolç</i> fem <b>en</b>dolc<b>ir</b>, però no existeixen «endolç» ni «dolcir». Altres exemples:</p><ul><li><b>a</b>- + prim + -<b>ar</b> → aprimar</li><li><b>en</b>- + vermell + -<b>ir</b> → envermellir</li><li><b>a</b>- + terra + -<b>ar</b> → aterrar</li></ul><p>Per comprovar-ho, busca sempre al <b>diccionari</b> si les formes intermèdies existeixen. Si una de les dues existeix, la paraula és una simple derivada.</p>` },
    { tras: "La composició", html: `<h3>Quan es posa guionet en els compostos</h3><p>La majoria de compostos s'escriuen junts. Porten <b>guionet</b> en alguns casos concrets:</p><ul><li>Quan el primer element acaba en vocal i el segon comença per <b>r</b>, <b>s</b> o <b>x</b>, perquè si s'escrivissin junts canviaria la pronúncia: <i>penja-robes</i>, <i>para-sol</i>, <i>escura-xemeneies</i>.</li><li>Els compostos amb els <b>punts cardinals</b>: <i>nord-est</i>, <i>sud-americà</i>.</li><li>Els compostos <b>repetitius</b> o d'onomatopeia: <i>xino-xano</i>, <i>ziga-zaga</i>, <i>nyigui-nyogui</i>.</li></ul><p>Davant del dubte, el <mark>DIEC</mark> i l'Optimot et diran com s'escriu cada paraula.</p>` },
    { tras: "La composició", html: `<h3>Altres maneres de crear paraules</h3><p>A més de la derivació i la composició, la llengua s'enriqueix amb altres procediments:</p><ul><li><b>Sigles</b>: es formen amb les inicials (<i>ONU</i>, <i>ESO</i>). Si es poden llegir com una paraula, són <b>acrònims</b> (<i>làser</i>, <i>ovni</i>).</li><li><b>Abreviaments i escurçaments</b>: <i>bici</i> (bicicleta), <i>cine</i> (cinema), <i>profe</i>, propis del registre col·loquial.</li><li><b>Manlleus</b>: paraules preses d'altres llengües. Alguns s'adapten a l'ortografia catalana (<i>futbol</i>, <i>xampú</i>, <i>bàsquet</i>) i d'altres es mantenen en la forma original (<i>pizza</i>).</li><li><b>Neologismes</b>: paraules noves per a realitats noves (<i>tuitejar</i>, <i>teletreball</i>, <i>videotrucada</i>).</li></ul><p>Quan hi ha un manlleu innecessari perquè ja tenim una paraula pròpia, és un <mark>barbarisme</mark> i convé evitar-lo.</p>` },
    { tras: "Paraules simples, derivades i compostes", html: `<h3>Família lèxica i camp semàntic</h3><p>No confonguis aquests dos conceptes. Una <b>família lèxica</b> és el conjunt de paraules que comparteixen el <mark>mateix lexema</mark>: <i>mar</i>, <i>mariner</i>, <i>marítim</i>, <i>marejar</i>, <i>submarí</i>, <i>altamar</i>. Un <b>camp semàntic</b>, en canvi, és un conjunt de paraules de la mateixa categoria que comparteixen un <mark>significat comú</mark>, encara que tinguin arrels diferents: <i>vaixell</i>, <i>barca</i>, <i>iot</i>, <i>llanxa</i> i <i>piragua</i> formen el camp semàntic de les embarcacions.</p><p>Les famílies lèxiques ens ajuden amb l'<b>ortografia</b>: si dubtes si <i>caixer</i> s'escriu amb <i>x</i>, pensa en <i>caixa</i>. I els camps semàntics ens ajuden a ampliar vocabulari i a evitar repeticions quan escrivim.</p>` },
  ],
  videos: [
    ["Morfemes flexius i derivatius", L.vid("LUr2BDyCvRQ", "Per què el plural de «casa» és «cases»? El plural acabat en -es", "OK CATALÀ", 12545)],
  ],
  ejemplos: [
    ["Analitza la paraula «florista».", ["Lexema: flor- (significat bàsic).", "Morfema derivatiu: -ista (persona que es dedica a…).", "No té morfemes flexius de plural."], "flor (lexema) + -ista (sufix): és una paraula derivada."],
    ["És parasintètica «enfortir»?", ["Lexema: fort.", "Prefix en- i sufix -ir alhora.", "Comprovem: «enfort» no existeix i «fortir» tampoc."], "sí, és parasintètica."],
    ["Família lèxica o camp semàntic: «poma, pera, préssec, cirera»?", ["Les paraules no comparteixen lexema.", "Totes són noms de fruites.", "Comparteixen un significat comú."], "és un camp semàntic (les fruites)."],
  ],
  errores: [
    "Confondre família lèxica (mateix lexema) i camp semàntic (mateix significat general).",
    "Pensar que els morfemes de gènere i nombre creen paraules noves.",
    "Escriure junts compostos que porten guionet: «parasol» en lloc de «para-sol».",
    "Fer servir el sufix castellà «-ucho» en lloc de «-ot» o «-arro».",
    "Considerar parasintètica qualsevol paraula amb prefix i sufix sense comprovar-ho al diccionari.",
  ],
  ejercicios: [
    ["Separa el lexema i els morfemes de «cantaires».", "cant- (lexema) + -aire (sufix derivatiu) + -s (morfema flexiu de nombre)."],
    ["Classifica: sol, solet, para-sol.", "Sol: simple. Solet: derivada (diminutiu). Para-sol: composta."],
    ["Escriu tres paraules amb el prefix des-.", "Per exemple: desfer, desordenar, desconfiar."],
    ["Forma un adverbi a partir de «tranquil».", "Tranquil·lament."],
    ["Escriu tres compostos de verb + nom.", "Per exemple: rentaplats, trencaclosques, gratacel."],
    ["Escriu correctament: penjarobes, nordest, xinoxano.", "Penja-robes, nord-est, xino-xano."],
    ["Escriu la família lèxica de «terra» (quatre paraules).", "Per exemple: enterrar, terrestre, terratrèmol, aterrar."],
    ["Escriu el camp semàntic dels instruments musicals (quatre paraules).", "Per exemple: guitarra, violí, flauta, piano."],
    ["Què és una sigla? Posa'n un exemple.", "Paraula formada per les inicials d'un conjunt de paraules: ONU."],
    ["Escriu un diminutiu i un augmentatiu de «casa».", "Caseta i casassa."],
  ],
  quiz: [
    ["«Endolcir» és una paraula…", ["parasintètica", "composta", "simple"], 0, "Prefix i sufix alhora."],
    ["«-et» a «gatet» és un sufix…", ["diminutiu", "augmentatiu", "flexiu"], 0, "Indica petit."],
    ["Quina paraula porta guionet?", ["penja-robes", "rentaplats", "gratacel"], 0, "El segon element comença per r."],
    ["«Vaixell, barca, iot» formen…", ["un camp semàntic", "una família lèxica", "un compost"], 0, "Mateix significat general."],
    ["«Làser» és un…", ["acrònim", "manlleu de l'àrab", "compost"], 0, "Es llegeix com una paraula."],
  ],
  tarjetas: [
    ["Parasíntesi", "Formació d'una paraula amb prefix i sufix alhora: en-dolc-ir."],
    ["Família lèxica", "Paraules que comparteixen el mateix lexema: mar, mariner, marítim."],
    ["Camp semàntic", "Paraules amb un significat comú: vaixell, barca, iot."],
  ],
});
