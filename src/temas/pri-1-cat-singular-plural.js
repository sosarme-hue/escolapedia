// Llengua Catalana 1r de Primària: singular i plural. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { cuantos, parejas, frase, charla, mural, vid } = require("./_peque");
const { FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "1-primaria",
  titulo: "Singular i plural",
  minutos: 20,
  objetivos: ["Distingir si una paraula parla d'un o de molts", "Formar el plural amb -s, -es i -os", "Fer servir els, les, uns i unes"],
  claves: ["singular", "plural", "-s", "-es", "-os", "els", "les"],
  pregunta: {
    texto: "A la fruiteria, demanes «dues poma» o «dues pomes»? Què canvia al final?",
    respuesta: "Demanes <b>dues pomes</b>. Quan n'hi ha més d'una, la paraula canvia: la <b>a</b> es converteix en <mark>es</mark>. Això és el <b>plural</b>.",
  },
  bloques: [
    {
      html: `<h3>Un o molts</h3><p>Si parlem d'<b>una sola cosa</b>, la paraula està en <mark>singular</mark>: <i>gat</i>.</p><p>Si parlem de <b>dues o més</b>, la paraula està en <mark>plural</mark>: <i>gats</i>.</p><p>Escolta la diferència: «gat», «gats». El final canvia. Aquest final ens avisa que n'hi ha més d'un. Les paraules també saben comptar!</p>`,
      svg: cuantos("Un gat és singular; tres gats és plural", [["gato", "gat", "gats"]], { izq: "singular: un", der: "plural: molts" }),
    },
    {
      html: `<h3>Afegim una -s</h3><p>Moltes paraules fan el plural <mark>afegint una s</mark>.</p><p><b>gat</b> → <b>gats</b>. <b>nen</b> → <b>nens</b>. <b>flor</b> → <b>flors</b>. <b>llibre</b> → <b>llibres</b>.</p><p>És la manera més fàcil i la més habitual. Prova tu: <i>cotxe</i>, <i>sol</i>, <i>pilota</i>… Compte amb l'última! Acaba en a. Aviat veurem què li passa. Les paraules acabades en a tenen la seva pròpia norma.</p>`,
      svg: cuantos("Gat i gats, flor i flors, llibre i llibres: s'afegeix una s", [["gato", "gat", "gats"], ["flor", "flor", "flors"], ["libro", "llibre", "llibres"]], { izq: "singular", der: "+ s" }),
    },
    {
      html: `<h3>La -a es converteix en -es</h3><p>Si la paraula acaba en <b>a</b>, la a es canvia per <mark>-es</mark>.</p><p><b>casa</b> → <b>cases</b>. <b>taula</b> → <b>taules</b>. <b>pilota</b> → <b>pilotes</b>. <b>poma</b> → <b>pomes</b>.</p><p>No diem «casas» ni «pomas». En català, la a final es transforma en e. Per això diem <i>les cases</i> i <i>les pomes</i>.</p>`,
      svg: cuantos("Casa i cases, taula i taules, poma i pomes: la a passa a es", [["casa", "casa", "cases"], ["mesa", "taula", "taules"], ["manzana", "poma", "pomes"]], { izq: "acaba en a", der: "a → es" }),
      video: vid("LUr2BDyCvRQ", "Per què el plural de «casa» és «cases»?", "OK CATALÀ", 12533, 386),
    },
    {
      html: `<h3>Afegim -os</h3><p>Algunes paraules acaben amb un so que xiula, com <i>gos</i>, <i>peix</i> o <i>braç</i>.</p><p>Aquestes fan el plural amb <mark>-os</mark>.</p><p><b>gos</b> → <b>gossos</b>. <b>peix</b> → <b>peixos</b>. <b>braç</b> → <b>braços</b>.</p><p>Si diguéssim «goss» o «peixs», no s'entendria. Amb -os sona molt millor. Fixa't: <i>gos</i> dobla la s i fa <i>gossos</i>.</p>`,
      svg: cuantos("Gos i gossos, peix i peixos: s'afegeix os", [["perro", "gos", "gossos"], ["pez", "peix", "peixos"]], { izq: "singular", der: "+ os" }),
    },
    {
      html: `<h3>El, la i l' canvien</h3><p>Les paraules petites del davant també passen a plural.</p><p><b>el</b> gos → <mark>els</mark> gossos. <b>la</b> flor → <mark>les</mark> flors.</p><p>I l'apòstrof? <b>l'</b>avi → <mark>els</mark> avis. <b>l'</b>àvia → <mark>les</mark> àvies. En plural ja no hi ha apòstrof. Tot el grup de paraules va en plural alhora, com un equip.</p>`,
      svg: parejas("El gos passa a els gossos; la flor passa a les flors; l'avi passa a els avis", [["perro", "el gos", "perro", "els gossos"], ["flor", "la flor", "flor", "les flors"], ["abuelo", "l'avi", "abuelo", "els avis"]], { izq: "singular", der: "plural" }),
    },
    {
      html: `<h3>Un i una canvien</h3><p>Passa el mateix amb <i>un</i> i <i>una</i>.</p><p><b>un</b> cotxe → <mark>uns</mark> cotxes. <b>una</b> pilota → <mark>unes</mark> pilotes.</p><p>Diem <i>uns</i> o <i>unes</i> quan no sabem exactament quants n'hi ha. «Tinc uns cromos» vol dir que en tinc uns quants, però no dic quants. Poden ser tres o poden ser vint.</p>`,
      svg: parejas("Un cotxe passa a uns cotxes; una pilota passa a unes pilotes", [["coche", "un cotxe", "coche", "uns cotxes"], ["pelota", "una pilota", "pelota", "unes pilotes"]], { izq: "singular", der: "plural" }),
    },
    {
      html: `<h3>Tota la frase canvia</h3><p>Quan una paraula passa a plural, les seves companyes <mark>també canvien</mark>.</p><p>«El gat negre menja.» → «Els gats negres mengen.»</p><p>Mira bé: canvien <i>el</i>, <i>gat</i>, <i>negre</i> i també <i>menja</i>. Totes es posen d'acord. Si una es queda en singular, la frase sona malament. Semblen un equip!</p>`,
      svg: frase("El gat negre menja passa a Els gats negres mengen", [["El", A], ["gat", A], ["negre", A], ["menja.", A], ["/"], ["Els", V], ["gats", V], ["negres", V], ["mengen.", V]], { titulo: "Tota la frase en plural", nota: "Totes les paraules es posen d'acord", fs: 22 }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>El plural ens ajuda a dir <mark>quantes coses hi ha</mark>.</p><p>El fem servir a la botiga: «Vull dues barres de pa, si us plau». El fem servir a l'escola: «Traieu els llapis».</p><p>Si no el fem servir bé, ens poden donar una sola cosa. I potser en volíem moltes! Imagina demanar galetes i rebre'n només una!</p>`,
      svg: charla("A la fleca, una nena demana dues barres de pa i el forner les hi dona", [["nina", "Vull dues barres, si us plau.", R], ["papa", "Aquí tens les dues barres.", A]]),
    },
    {
      html: `<h3>Juguem a la paraula màgica</h3><p>Un jugador diu una paraula en singular: «<b>casa</b>».</p><p>L'altre diu «abracadabra!» i la <mark>multiplica</mark>: «cases!».</p><p>Després canviem els papers. Proveu amb paraules difícils: <i>gos</i>, <i>peix</i>, <i>taula</i>. Qui encerta més plurals guanya una estrella. Amb màgia s'aprèn millor! I també ens divertim molt.</p>`,
      svg: charla("Joc de la paraula màgica: casa es converteix en cases", [["nino", "Casa…", A], ["nina", "Abracadabra! Cases!", R], ["nino", "Molt bé! Ara tu.", A]]),
    },
  ],
  figura: {
    titulo: "Del singular al plural",
    svg: mural("Com es forma el plural: gat gats amb s, casa cases amb es, gos gossos amb os, el els i la les", [["gato", "gats", "+ s", A], ["casa", "cases", "a → es", R], ["perro", "gossos", "+ os", V], ["flor", "els · les", "el → els · la → les", N]], "Així es forma el plural"),
  },
  video: { ...vid("4PjS3QkJ5HI", "El plural en català (part 1)", "SuperCampus y SX3", 48419), busqueda: "singular i plural en català per a nens" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Fes el plural de «nen».",
      pasos: ["Mira l'última lletra: nen acaba en n.", "Afegim una s.", "Digues la paraula nova: nens."],
      resultado: "el plural de «nen» és «nens»." },
    { enunciado: "Fes el plural de «cadira».",
      pasos: ["Mira l'última lletra: cadira acaba en a.", "La a es converteix en es.", "Digues la paraula nova: cadires."],
      resultado: "el plural de «cadira» és «cadires»." },
    { enunciado: "Posa en plural: «la nena riu».",
      pasos: ["La passa a les.", "Nena passa a nenes.", "Riu passa a riuen."],
      resultado: "«les nenes riuen»." },
  ],
  errores: [
    "Afegir només una s a les paraules que acaben en a, com «casas»: es diu cases.",
    "Canviar només una paraula de la frase: «els gat». Totes van en plural.",
    "Dir «goss» o «peixs»: aquestes paraules fan el plural amb -os, gossos i peixos.",
    "Mantenir l'apòstrof en plural, com «l'avis»: es diu els avis.",
  ],
  ejercicios: [
    { q: "Plural de «gat».", sol: "Gats." },
    { q: "Plural de «casa».", sol: "Cases." },
    { q: "Plural de «gos».", sol: "Gossos." },
    { q: "Singular de «sabates».", sol: "Sabata." },
    { q: "Completa: «___ gossos» (el o els).", sol: "Els gossos." },
    { q: "Completa: «___ taules» (la o les).", sol: "Les taules." },
    { q: "Singular o plural? «estrelles».", sol: "Plural." },
    { q: "Plural de «l'àvia».", sol: "Les àvies." },
    { q: "Posa en plural: «el gat menja».", sol: "Els gats mengen." },
    { q: "Digues tres coses de casa en plural.", sol: "Per exemple: cadires, plats, llits." },
  ],
  quiz: [
    { q: "«Gats» està en…", o: ["singular", "plural", "femení"], a: 1, e: "N'hi ha més d'un." },
    { q: "Plural de «taula»:", o: ["taulas", "taules", "taulos"], a: 1, e: "La a passa a es." },
    { q: "Plural de «flor»:", o: ["flors", "flores", "floros"], a: 0, e: "+s." },
    { q: "«El gos» en plural és…", o: ["els gossos", "el gossos", "les gosses"], a: 0, e: "el → els, gos → gossos." },
    { q: "«La flor» en plural és…", o: ["els flors", "les flors", "la flors"], a: 1, e: "la → les." },
    { q: "Quina està en singular?", o: ["gossos", "casa", "pomes"], a: 1, e: "Casa és una sola." },
    { q: "Plural de «peix»:", o: ["peixs", "peixos", "peixes"], a: 1, e: "+os." },
    { q: "«Un cotxe» en plural és…", o: ["uns cotxes", "unes cotxes", "un cotxes"], a: 0, e: "un → uns." },
    { q: "Plural de «l'avi»:", o: ["l'avis", "els avis", "les avis"], a: 1, e: "Sense apòstrof: els avis." },
    { q: "Quina frase està bé?", o: ["Els nen juguen.", "Els nens juguen.", "El nens juga."], a: 1, e: "Tot en plural." },
  ],
  examen: [
    { q: "Plural de «poma»:", o: ["pomas", "pomes", "pomos"], a: 1, e: "a → es." },
    { q: "Plural de «gos»:", o: ["gossos", "gosos", "goss"], a: 0, e: "+os, amb ss." },
    { q: "Singular de «flors»:", o: ["flor", "flora", "flore"], a: 0, e: "flor." },
    { q: "«Les cases» en singular és…", o: ["la casa", "el casa", "les casa"], a: 0, e: "la casa." },
  ],
  feynman: ["Què és el singular i què és el plural", "Quan afegim -s, -es o -os", "Per què canvia tota la frase"],
  mapa: mapa("SINGULAR I PLURAL", "var(--pri)", [
    ["Singular", "un: gat", A],
    ["Plural", "molts: gats", R],
    ["-s · -es · -os", "flors · cases · gossos", V],
    ["Acompanyants", "els, les, uns, unes", N],
  ], 220),
  tarjetas: [
    ["Què és el singular?", "Una sola cosa"],
    ["Què és el plural?", "Dues o més coses"],
    ["Plural de «llibre»", "Llibres"],
    ["Plural de «casa»", "Cases"],
    ["Plural de «peix»", "Peixos"],
    ["Plural de «el»", "Els"],
    ["Plural de «la»", "Les"],
    ["Plural de «l'avi»", "Els avis"],
  ],
  familias: [
    "Quan pareu taula, compteu i anomeneu en plural: tres plats, tres gots.",
    "Jugueu a la paraula màgica: un diu el singular i l'altre el multiplica.",
    "A la compra, demaneu-li que digui en plural el que porteu: dues barres, sis ous.",
    "Si diu «casas» o «peixs», repetiu la paraula bé amb naturalitat: «Sí, les cases».",
  ],
  profesores: {
    saberes: "Reflexió sobre la llengua: el nombre del nom, formació del plural amb -s, -es i -os, plural dels articles i concordança (RD 157/2022 i Decret 175/2022 de Catalunya, primer cicle).",
    ideas: ["Bossa d'objectes: treure'n un o uns quants i anomenar-los.", "Targetes singular i plural per aparellar.", "Dictat de frases que cal passar a plural."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
