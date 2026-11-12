// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "Els sintagmes",
  minutos: 50,
  objetivos: ["Definir el sintagma i reconèixer-ne el nucli", "Distingir els cinc tipus de sintagma", "Analitzar l'estructura interna del sintagma nominal"],
  claves: ["sintagma", "nucli", "sintagma nominal", "sintagma adjectival", "sintagma adverbial", "sintagma preposicional", "sintagma verbal", "complement del nom", "aposició", "terme"],
  pregunta: {
    texto: "«La meva germana gran» té quatre paraules, però en una frase funciona com si fos una de sola. Per què?",
    respuesta: "Perquè forma un <mark>sintagma</mark>: un grup de paraules que s'organitza al voltant d'un <b>nucli</b> (aquí, el nom <i>germana</i>) i que fa una funció conjunta a l'oració. Es pot substituir per una sola paraula: <i>ella</i>.",
  },
  bloques: [
    {
      html: `<h3>Què és un sintagma</h3><p>Un <b>sintagma</b> és una paraula o un grup de paraules que s'organitza al voltant d'un <mark>nucli</mark> i que fa una funció dins de l'oració. El nucli és la paraula més important: la que no es pot eliminar i que dona nom al sintagma. Si el nucli és un nom, tenim un sintagma nominal; si és un verb, un sintagma verbal; i així successivament.</p>`,
      svg: L.frase("Sintagma nominal: la meva germana gran", [
        ["la meva", "determinants", "var(--inf)"], ["germana", "nucli", "var(--pen)"],
        ["gran", "complement", "var(--leaf)"],
      ], "SN = ella"),
    },
    {
      html: `<h3>Els cinc tipus de sintagma</h3><p>Segons la categoria del nucli, hi ha cinc tipus de sintagma: el <b>nominal</b> (SN), amb un nom o pronom de nucli; l'<b>adjectival</b> (SAdj), amb un adjectiu; l'<b>adverbial</b> (SAdv), amb un adverbi; el <b>verbal</b> (SV), amb un verb; i el <b>preposicional</b> (SPrep), que és especial perquè està format per una <mark>preposició i un terme</mark>.</p>`,
      svg: L.filas("Tipus de sintagma segons el nucli", [
        ["SN", "unes sabates noves", "var(--pen)"],
        ["SAdj", "molt cansat", "var(--leaf)"],
        ["SAdv", "força lluny", "var(--inf)"],
        ["SPrep", "de la platja", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El sintagma nominal</h3><p>El <b>SN</b> té un nucli que és un nom o un pronom. El nom pot anar acompanyat de <b>determinants</b> davant (<i>aquells dos</i>) i de <b>complements</b>: un adjectiu (<i>casa <u>blanca</u></i>), un sintagma preposicional (<i>casa <u>de fusta</u></i>), una aposició (<i>la meva amiga, <u>la Núria</u></i>) o una oració (<i>la casa <u>que vam veure</u></i>). Pot fer de subjecte, de CD, de terme d'un SPrep i moltes altres funcions.</p>`,
      svg: L.frase("Estructura del SN", [
        ["aquella", "det", "var(--inf)"], ["casa", "nucli", "var(--pen)"],
        ["blanca", "adj", "var(--leaf)"], ["de fusta", "SPrep", "var(--red)"],
      ], "dos complements del nom"),
    },
    {
      html: `<h3>Els sintagmes adjectival i adverbial</h3><p>El <b>SAdj</b> té un adjectiu de nucli que pot portar un <b>modificador</b> (un adverbi de quantitat: <i><u>molt</u> alt</i>, <i><u>massa</u> cansat</i>) i un <b>complement</b> preposicional (<i>content <u>de tu</u></i>, <i>apte <u>per al càrrec</u></i>). El <b>SAdv</b> té un adverbi de nucli, també amb possibles modificadors i complements: <i><u>molt</u> a prop <u>de casa</u></i>, <i><u>força</u> lluny</i>.</p>`,
      svg: L.filas("SAdj i SAdv", [
        ["SAdj", "molt + content + de tu", "var(--leaf)"],
        ["SAdv", "molt + a prop + de casa", "var(--inf)"],
      ], "modificador + nucli + complement"),
    },
    {
      html: `<h3>Els sintagmes preposicional i verbal</h3><p>El <b>SPrep</b> està format per un <b>enllaç</b> (la preposició) i un <b>terme</b>, que sol ser un SN: <i>de</i> + <i>la platja</i>, <i>amb</i> + <i>els amics</i>. No té nucli com els altres. El <b>SV</b> té un verb de nucli i forma el <mark>predicat</mark> de l'oració: el verb pot anar acompanyat de complements com el CD, el CI o els complements circumstancials.</p>`,
      svg: L.frase("Sintagma verbal amb complements", [
        ["regala", "nucli", "var(--red)"], ["un llibre", "CD", "var(--pen)"],
        ["a la Laia", "CI", "var(--leaf)"], ["avui", "CC temps", "var(--inf)"],
      ], "SV = predicat"),
    },
  ],
  figura: {
    titulo: "Un sintagma dins d'un altre",
    svg: L.pasos("Sintagmes encaixats a: la mare de la Júlia", [
      ["SN", ["la mare", "de la Júlia"], "var(--pen)"],
      ["SPrep", ["de", "+ la Júlia"], "var(--red)"],
      ["SN terme", ["la Júlia", "nucli: Júlia"], "var(--leaf)"],
    ]),
  },
  video: { id: "S056gzNJaM8", titulo: "Sintagma nominal y verbal explicado en 3 minutos", canal: "LA PROFE MÓNICA", vistas: 442875, megusta: 0, busqueda: "sintagma nominal" },
  quiz: [
    { q: "El nucli d'un SN és…", o: ["un nom o un pronom", "un adjectiu", "una preposició"], a: 0, e: "Nominal = nom." },
    { q: "«Molt cansat» és un…", o: ["SAdj", "SAdv", "SN"], a: 0, e: "El nucli és «cansat»." },
    { q: "«De la platja» és un…", o: ["SPrep", "SN", "SV"], a: 0, e: "Preposició + terme." },
    { q: "A «casa de fusta», «de fusta» és…", o: ["complement del nom", "nucli", "determinant"], a: 0, e: "Complementa «casa»." },
    { q: "El SV de l'oració fa de…", o: ["predicat", "subjecte", "terme"], a: 0, e: "El nucli és el verb." },
  ],
  examen: [
    { q: "«Força lluny» és un…", o: ["SAdv", "SAdj", "SPrep"], a: 0, e: "Nucli: lluny." },
    { q: "A «content de tu», «de tu» és…", o: ["complement de l'adjectiu", "nucli", "subjecte"], a: 0, e: "Complementa «content»." },
    { q: "El SPrep està format per…", o: ["enllaç i terme", "nucli i determinant", "verb i CD"], a: 0, e: "Preposició + SN." },
  ],
  feynman: ["Què és un sintagma i què és el nucli", "Els cinc tipus de sintagma amb un exemple", "Els complements del nom", "Per què el SPrep és especial"],
  mapa: mapa("SINTAGMES", "var(--eso)", [
    ["SN", "nucli nom o pronom", "var(--pen)"],
    ["SAdj · SAdv", "molt + nucli + de…", "var(--leaf)"],
    ["SPrep", "enllaç + terme", "var(--red)"],
    ["SV", "nucli verb = predicat", "var(--inf)"],
  ]),
  tarjetas: [
    ["Sintagma", "Paraula o grup de paraules organitzat al voltant d'un nucli que fa una funció."],
    ["Nucli", "Paraula principal del sintagma, que no es pot eliminar."],
    ["Complement del nom", "Adjectiu, SPrep, aposició o oració que acompanya el nom."],
    ["Sintagma preposicional", "Preposició (enllaç) + terme: de la platja."],
    ["Modificador", "Adverbi de quantitat que gradua un adjectiu o adverbi: molt, massa."],
  ],
  familias: ["Agafeu titulars de diari i busqueu-hi els sintagmes nominals.", "Jugueu a allargar un SN: «un gos», «un gos negre», «un gos negre del veí»…", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Reflexió sobre la llengua: el sintagma, tipus i estructura interna; relació entre categoria i funció (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Construir sintagmes amb targetes de paraules de colors.", "Representar sintagmes amb arbres o caixes.", "Reduir sintagmes llargs a un pronom per trobar-ne els límits."],
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
  objetivos: ["Delimitar els sintagmes d'una oració amb proves", "Representar l'estructura dels sintagmes amb claudàtors"],
  bloques: [
    { tras: "Què és un sintagma", html: `<h3>Com es troben els límits d'un sintagma</h3><p>Quan analitzem una oració, el primer pas és saber on comença i on acaba cada sintagma. Hi ha tres proves molt útils:</p><ul><li><b>Substitució</b>: si un grup de paraules es pot canviar per un pronom (<i>ell</i>, <i>això</i>, <i>el</i>, <i>hi</i>), és un sintagma. <i>Els meus cosins de Reus</i> → <i>ells</i>.</li><li><b>Desplaçament</b>: un sintagma es mou de lloc com un bloc. <i>Al matí</i> vaig córrer / Vaig córrer <i>al matí</i>.</li><li><b>Pregunta</b>: la resposta a <i>qui?</i>, <i>què?</i>, <i>on?</i>, <i>quan?</i> sol ser un sintagma sencer.</li></ul><p>Si en moure o substituir el grup la frase deixa de tenir sentit, segurament n'has agafat una part massa gran o massa petita. Aquestes proves et serviran també per <mark>analitzar oracions</mark> en el tema següent.</p>` },
    { tras: "El sintagma nominal", html: `<h3>L'aposició</h3><p>L'<b>aposició</b> és un tipus especial de complement del nom: és un altre SN que es refereix a la <mark>mateixa realitat</mark> que el nucli i l'explica o l'especifica. N'hi ha de dos tipus:</p><ul><li><b>Explicativa</b>: va entre comes i afegeix informació. <i>Barcelona, <u>la capital de Catalunya</u>, rep molts turistes.</i> Si la traiem, la frase continua tenint sentit.</li><li><b>Especificativa</b>: va sense comes i concreta el nom. <i>El riu <u>Ebre</u></i>, <i>la cantant <u>Rosalía</u></i>, <i>el meu amic <u>Pau</u></i>.</li></ul><p>No confonguis l'aposició amb el complement preposicional: a <i>la ciutat <b>de</b> Girona</i>, «de Girona» és un SPrep; a <i>la ciutat, Girona,…</i> seria una aposició.</p>` },
    { tras: "Els sintagmes adjectival i adverbial", html: `<h3>Representar els sintagmes amb claudàtors</h3><p>Per mostrar l'estructura d'un sintagma podem fer servir <b>claudàtors</b>, caixes o arbres. Amb claudàtors, cada sintagma s'obre i es tanca, i s'indica el tipus i les funcions internes:</p>${L.tb(["Sintagma", "Anàlisi"], [["uns pantalons molt amples", "[SN Det: uns · N: pantalons · CN: [SAdj Mod: molt · N: amples]]"], ["orgullós del seu fill", "[SAdj N: orgullós · Compl: [SPrep del seu fill]]"], ["a prop del mar", "[SAdv N: a prop · Compl: [SPrep del mar]]"], ["amb la meva germana", "[SPrep E: amb · T: [SN la meva germana]]"]])}<p>Fixa't que els sintagmes poden anar <mark>uns dins dels altres</mark>: el SAdj «molt amples» està dins del SN, i el SN «la meva germana» és el terme del SPrep.</p>` },
    { tras: "Els sintagmes preposicional i verbal", html: `<h3>Categoria i funció: no són el mateix</h3><p>La <b>categoria</b> diu què és una paraula o un sintagma (nom, SN, SPrep…), mentre que la <b>funció</b> diu quina feina fa a la frase (subjecte, CD, complement del nom…). Un mateix tipus de sintagma pot fer funcions molt diferents:</p><ul><li>SN subjecte: <i><u>El meu germà</u> canta.</i></li><li>SN complement directe: <i>Veig <u>el meu germà</u>.</i></li><li>SN complement circumstancial: <i>Vindré <u>aquest dissabte</u>.</i></li><li>SPrep complement del nom: <i>la bici <u>de la Mar</u></i>.</li><li>SPrep complement circumstancial: <i>Viu <u>a Tarragona</u>.</i></li></ul><p>Per això, a l'hora d'analitzar, primer delimitem i classifiquem els sintagmes (<mark>categoria</mark>) i després en diem la <mark>funció</mark>.</p>` },
    { tras: "Els sintagmes preposicional i verbal", html: `<h3>Pronoms i SN: un truc per a l'anàlisi</h3><p>Quan un SN fa de nucli un <b>pronom</b>, normalment no porta ni determinants ni complements: <i><u>Ella</u> ho sap</i>, <i><u>Aquests</u> són meus</i>, <i>Ho vull <u>tot</u></i>. També són SN, encara que tinguin una sola paraula.</p><p>Els <b>pronoms febles</b> (<i>el, la, li, en, hi, ho</i>) són especials: van enganxats al verb i formen part del SV, però substitueixen un complement. A <i><u>L'</u>he vist</i>, el pronom «l'» fa de CD. Quan analitzis, recorda que un pronom feble representa <mark>tot un sintagma</mark>: <i>He vist <u>la pel·lícula nova</u> → L'he vista.</i></p>` },
  ],
  videos: [
    ["Els cinc tipus de sintagma", L.vid("2LEwzwtjlNo", "Els sintagmes", "Llegües Can Planas", 13091)],
    ["Representar els sintagmes amb claudàtors", L.vid("mIUcZLYNCTM", "Sintagmes en català: ho entens en 5 minuts", "Aprobando con Sofilú", 3710)],
  ],
  ejemplos: [
    ["Analitza el SN «aquell noi alt de la classe».", ["Determinant: aquell. Nucli: noi.", "Complement del nom 1: alt (SAdj).", "Complement del nom 2: de la classe (SPrep: enllaç de + terme la classe)."], "[SN Det aquell · N noi · CN alt · CN de la classe]."],
    ["Quin tipus de sintagma és «bastant a prop de l'escola»?", ["La paraula principal és «a prop», un adverbi (locució adverbial).", "«Bastant» és un modificador.", "«De l'escola» és un SPrep complement."], "és un SAdv."],
    ["Troba l'aposició: «El meu veí, un pianista famós, toca cada nit.»", ["Busquem un SN que es refereixi al mateix que «el meu veí».", "«Un pianista famós» va entre comes.", "Si el traiem, la frase continua tenint sentit."], "«un pianista famós» és una aposició explicativa."],
  ],
  errores: [
    "Pensar que un sintagma ha de tenir sempre més d'una paraula: «ella» també és un SN.",
    "Considerar la preposició el nucli del SPrep: està formada per enllaç i terme.",
    "Confondre la categoria (SN) amb la funció (subjecte).",
    "Separar el determinant del nom com si fossin sintagmes diferents.",
    "Confondre aposició i complement preposicional.",
  ],
  ejercicios: [
    ["Digues el tipus de sintagma: «unes vacances llargues».", "SN (nucli: vacances)."],
    ["Digues el tipus de sintagma: «molt lluny».", "SAdv (nucli: lluny)."],
    ["Digues el tipus de sintagma: «cansat del viatge».", "SAdj (nucli: cansat)."],
    ["Digues el tipus de sintagma: «amb els meus pares».", "SPrep (enllaç: amb; terme: els meus pares)."],
    ["Troba els complements del nom: «un jersei vermell de llana».", "«Vermell» (SAdj) i «de llana» (SPrep)."],
    ["Substitueix el SN per un pronom: «Els alumnes de tercer van d'excursió».", "Ells van d'excursió."],
    ["Escriu un SN amb aposició especificativa.", "Per exemple: «el riu Ter»."],
    ["Escriu un SAdj amb modificador i complement.", "Per exemple: «molt content del resultat»."],
    ["Quina funció fa el SN «aquest dissabte» a «Vindré aquest dissabte»?", "Complement circumstancial de temps."],
    ["Analitza amb claudàtors: «sense la meva motxilla».", "[SPrep E: sense · T: [SN Det: la meva · N: motxilla]]."],
  ],
  quiz: [
    ["L'aposició explicativa va…", ["entre comes", "sense comes", "darrere el verb"], 0, "Afegeix informació."],
    ["Si un grup es pot substituir per «ell», és…", ["un SN", "un SV", "un SAdv"], 0, "Prova de substitució."],
    ["A «la bici de la Mar», «de la Mar» és…", ["complement del nom", "subjecte", "CD"], 0, "Complementa «bici»."],
    ["La categoria diu…", ["què és", "quina funció fa", "on va"], 0, "La funció és la feina."],
    ["A «L'he vist», «l'» substitueix…", ["un SN CD", "un SPrep", "el subjecte"], 0, "Pronom feble."],
  ],
  tarjetas: [
    ["Aposició", "SN que es refereix al mateix que el nucli: Barcelona, la capital, …"],
    ["Prova de substitució", "Si un grup es pot canviar per un pronom, és un sintagma."],
    ["Categoria i funció", "La categoria diu què és; la funció, quina feina fa a la frase."],
  ],
});
