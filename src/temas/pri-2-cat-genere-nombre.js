// Llengua Catalana 2n de Primària: masculí i femení, singular i plural. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas, cuantos } = require("./_peque");
const { V, PROFCA, FONTS } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "2-primaria",
  titulo: "Masculí i femení, singular i plural",
  minutos: 25,
  objetivos: ["Distingir paraules en masculí i en femení", "Formar el plural afegint -s o -os i canviant -a per -es", "Fer que l'article i l'adjectiu concordin amb el nom"],
  claves: ["gènere", "masculí", "femení", "nombre", "singular", "plural", "article"],
  pregunta: {
    texto: "Diem «el gat» i «la gata». I si són molts gats? Què canvia a la paraula?",
    respuesta: "Canvia el final. <b>gat</b> és <mark>masculí</mark> i <b>gata</b> és <mark>femení</mark>. Si n'hi ha molts, diem <b>els gats</b>: és el <mark>plural</mark>.",
  },
  bloques: [
    {
      html: `<h3>Masculí i femení</h3><p>Els noms poden ser <mark>masculins</mark> o <mark>femenins</mark>. És el seu <b>gènere</b>.</p><p>Davant dels masculins posem <b>el</b> o <b>un</b>: <i>el nen</i>, <i>un gos</i>.</p><p>Davant dels femenins posem <b>la</b> o <b>una</b>: <i>la nena</i>, <i>una gossa</i>. Si la paraula comença per vocal, fem servir <b>l'</b>: <i>l'avi</i>, <i>l'àvia</i>.</p>`,
      svg: parejas("El nen i la nena; el gos i la gossa; el gat i la gata", [["nino", "el nen", "nina", "la nena"], ["perro", "el gos", "perro", "la gossa"], ["gato", "el gat", "gato", "la gata"]], { izq: "masculí", der: "femení", color: A, color2: R, flecha: "↔" }),
      video: V("cgenV", "els articles en català"),
    },
    {
      html: `<h3>Afegir una -a</h3><p>Moltes paraules formen el femení <mark>afegint una a</mark>: <i>gat → gat<b>a</b></i>, <i>nen → nen<b>a</b></i>, <i>pagès → pages<b>a</b></i>.</p><p>Altres <mark>canvien la -e o la -o per -a</mark>: <i>alumn<b>e</b> → alumn<b>a</b></i>, <i>mestr<b>e</b> → mestr<b>a</b></i>.</p><p>Fixa't que a vegades la paraula canvia una mica: <i>llop → llo<b>ba</b></i>, <i>amic → ami<b>ga</b></i>.</p>`,
      svg: parejas("Gat gata, avi àvia, llop lloba", [["gato", "gat", "gato", "gata"], ["abuelo", "avi", "abuela", "àvia"], ["lobo", "llop", "lobo", "lloba"]], { izq: "masculí", der: "femení", color: A, color2: R, flecha: "→" }),
    },
    {
      html: `<h3>Paraules molt diferents</h3><p>Algunes parelles són <mark>paraules diferents</mark>.</p><p><i>pare</i> i <i>mare</i>. <i>home</i> i <i>dona</i>. <i>cavall</i> i <i>euga</i>. <i>bou</i> i <i>vaca</i>. <i>gall</i> i <i>gallina</i>.</p><p>I algunes coses només tenen un gènere: <i>la taula</i>, <i>el llapis</i>. No existeix «el taulo» ni «la llapissa». Les coses no tenen parella!</p>`,
      svg: parejas("Pare i mare; cavall i euga; gall i gallina", [["papa", "pare", "mama", "mare"], [null, "cavall", null, "euga"], ["pollo", "gall", "pollo", "gallina"]], { izq: "masculí", der: "femení", color: A, color2: R, flecha: "↔" }),
    },
    {
      html: `<h3>Singular i plural</h3><p>El <mark>nombre</mark> ens diu si n'hi ha un o molts.</p><p>Si n'hi ha <b>un</b>, la paraula és en <b>singular</b>: <i>la flor</i>, <i>el cotxe</i>.</p><p>Si n'hi ha <b>més d'un</b>, és en <b>plural</b>: <i>les flors</i>, <i>els cotxes</i>. Davant del plural posem <b>els</b>, <b>les</b>, <b>uns</b> o <b>unes</b>.</p>`,
      svg: cuantos("Una flor i moltes flors; un cotxe i molts cotxes", [["flor", "la flor", "les flors", 3], ["coche", "el cotxe", "els cotxes", 3]], { izq: "singular", der: "plural", color: A, color2: Ve }),
    },
    {
      html: `<h3>Plural amb -s</h3><p>La manera més fàcil de fer el plural és <mark>afegir una -s</mark>.</p><p><i>llibre → llibre<b>s</b></i>, <i>gat → gat<b>s</b></i>, <i>flor → flor<b>s</b></i>, <i>arbre → arbre<b>s</b></i>.</p><p>Fixa't: en català diem <i>flors</i> i <i>arbres</i>, amb una sola -s. No diem «flores». És diferent del castellà!</p>`,
      svg: cuantos("Llibre llibres, flor flors", [["libro", "llibre", "llibres", 3], ["flor", "flor", "flors", 3]], { izq: "singular", der: "+ s", color: A, color2: Ve }),
    },
    {
      html: `<h3>Plural de les paraules en -a</h3><p>Quan una paraula acaba en <b>-a</b>, el plural es fa <mark>canviant la -a per -es</mark>.</p><p><i>cas<b>a</b> → cas<b>es</b></i>, <i>nen<b>a</b> → nen<b>es</b></i>, <i>poma → pom<b>es</b></i>.</p><p>A vegades la lletra d'abans canvia per sonar igual: <i>vaca → va<b>ques</b></i>, <i>formiga → formi<b>gues</b></i>, <i>plaça → pla<b>ces</b></i>.</p>`,
      svg: cuantos("Casa cases, vaca vaques", [["casa", "casa", "cases", 3], ["vaca", "vaca", "vaques", 3]], { izq: "acaba en -a", der: "-a → -es", color: A, color2: Ve }),
    },
    {
      html: `<h3>Plural amb -os</h3><p>Algunes paraules masculines que acaben en <b>s</b>, <b>x</b> o <b>ç</b> fan el plural amb <mark>-os</mark>.</p><p><i>gos → gos<b>sos</b></i>, <i>peix → peix<b>os</b></i>, <i>braç → bra<b>ços</b></i>, <i>pas → pas<b>sos</b></i>.</p><p>I totes les paraules van <b>a joc</b>: <i><b>els</b> gossos petit<b>s</b></i>, <i><b>les</b> cases blanqu<b>es</b></i>. Això és la <b>concordança</b>.</p>`,
      svg: cuantos("Peix peixos, gos gossos", [["pez", "peix", "peixos", 3], ["perro", "gos", "gossos", 3]], { izq: "acaba en s, x, ç", der: "+ os", color: A, color2: Ve }),
      video: V("cgenB"),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>El gènere i el nombre ens donen <mark>informació</mark>.</p><p>Si algú diu «he vist <b>les gates</b>», sabem que n'eren unes quantes i femelles.</p><p>Si diu «<b>el meu amic</b>», sabem que és un noi; si diu «<b>les meves amigues</b>», unes quantes noies. Amb el final d'una paraula ens explica molt!</p>`,
      svg: charla("Un nen diu que venen les seves amigues; la nena dedueix que són noies", [["nino", "Venen les meves amigues.", A], ["nina", "Unes quantes noies?", R], ["nino", "Sí! La Laia i la Rut.", A], ["nina", "Ho ha dit el final!", R]]),
    },
    {
      html: `<h3>Joc: el mirall màgic</h3><p>Un jugador diu una paraula: «el <b>gat</b>».</p><p>L'altre és un <mark>mirall màgic</mark> que la canvia: primer a femení (<i>la gata</i>), després a plural (<i>les gates</i>).</p><p>Seguiu amb <i>el nen</i>, <i>el llop</i>, <i>la flor</i>, <i>el peix</i>. Qui s'equivoca menys?</p>`,
      svg: lista("El mirall màgic: el gat, la gata, els gats, les gates", [["el gat", A], ["la gata", R], ["els gats", Ve], ["les gates", N]], { titulo: "El mirall màgic", marca: "n" }),
    },
  ],
  figura: {
    titulo: "Gènere i nombre",
    svg: mural("Masculí el nen, femení la nena, singular la flor, plural les flors", [["nino", "el nen", "masculí", A], ["nina", "la nena", "femení", R], ["flor", "la flor", "singular: una", Ve], ["flor", "les flors", "plural: -s, -es, -os", N]], "Article, nom i adjectiu van sempre a joc"),
  },
  video: V("cgenV", "els articles en català"),
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Escriu el femení de «senyor».",
      pasos: ["Acaba en consonant: r.", "Afegim una -a.", "senyor + a."],
      resultado: "senyora." },
    { enunciado: "Escriu el plural de «taula».",
      pasos: ["Acaba en -a.", "Canviem la -a per -es.", "taul + es."],
      resultado: "taules." },
    { enunciado: "Corregeix: «els taula vermell».",
      pasos: ["taula és femení: la taula.", "Si en són unes quantes: les taules.", "L'adjectiu també: vermelles."],
      resultado: "les taules vermelles." },
  ],
  errores: [
    "Fer el plural com en castellà: és «flors», no «flores».",
    "Oblidar canviar la -a per -es: és «cases», no «casas».",
    "Posar l'article que no toca: «el taula» està malament; és «la taula».",
    "Oblidar els plurals en -os: és «peixos» i «gossos», no «peixs».",
  ],
  ejercicios: [
    { q: "Femení de «nen».", sol: "nena." },
    { q: "Femení de «llop».", sol: "lloba." },
    { q: "Femení de «pare».", sol: "mare." },
    { q: "El o la? «… poma».", sol: "la poma." },
    { q: "Plural de «llibre».", sol: "llibres." },
    { q: "Plural de «casa».", sol: "cases." },
    { q: "Plural de «peix».", sol: "peixos." },
    { q: "Singular de «flors».", sol: "flor." },
    { q: "Completa: «els gossos …» (petit).", sol: "petits." },
    { q: "Fes el mirall màgic amb «el nen».", sol: "la nena, els nens, les nenes." },
  ],
  quiz: [
    { q: "«La nena» és…", o: ["masculí", "femení", "plural"], a: 1, e: "Femení singular." },
    { q: "Femení de «gat»:", o: ["gata", "gats", "gatet"], a: 0, e: "gata." },
    { q: "Femení de «cavall»:", o: ["cavalla", "euga", "vaca"], a: 1, e: "euga." },
    { q: "Plural de «flor»:", o: ["flores", "flors", "floros"], a: 1, e: "flor + s." },
    { q: "Plural de «casa»:", o: ["casas", "cases", "caseus"], a: 1, e: "-a → -es." },
    { q: "Plural de «gos»:", o: ["goss", "gossos", "goses"], a: 1, e: "gossos." },
    { q: "Davant d'un masculí plural va…", o: ["els", "les", "la"], a: 0, e: "els." },
    { q: "Què està bé?", o: ["la casa blanca", "la casa blanc", "el casa blanca"], a: 0, e: "Tot femení." },
    { q: "«Unes flors» és…", o: ["singular", "plural", "masculí"], a: 1, e: "Moltes." },
    { q: "Plural de «vaca»:", o: ["vacas", "vaques", "vaces"], a: 1, e: "c → qu." },
  ],
  examen: [
    { q: "Plural de «arbre»:", o: ["arbres", "arboles", "arbros"], a: 0, e: "arbres." },
    { q: "Femení de «home»:", o: ["homa", "dona", "homes"], a: 1, e: "dona." },
    { q: "El o la? «… llapis»", o: ["el", "la"], a: 0, e: "el llapis." },
    { q: "Completa: «les nenes …»", o: ["contents", "contentes", "contenta"], a: 1, e: "Femení plural." },
  ],
  feynman: ["Com sabem si una paraula és masculina o femenina", "Com es forma el plural en català", "Què és la concordança"],
  mapa: mapa("GÈNERE I NOMBRE", "var(--pri)", [
    ["Masculí", "el, un: el nen", A],
    ["Femení", "la, una: la nena", R],
    ["Plural -s", "llibres, flors", Ve],
    ["-a → -es · -os", "cases · peixos", N],
  ], 240),
  tarjetas: [
    ["Articles masculins", "el, un, els, uns"],
    ["Articles femenins", "la, una, les, unes"],
    ["Femení de «nen»", "nena"],
    ["Femení de «gall»", "gallina"],
    ["Plural de «flor»", "flors"],
    ["Plural de «poma»", "pomes"],
    ["Plural de «peix»", "peixos"],
    ["Què és concordar?", "Que les paraules vagin a joc"],
  ],
  familias: [
    "Jugueu al mirall màgic amb animals de la granja.",
    "En parar taula, compteu en plural: els plats, les culleres, els gots.",
    "Busqueu parelles d'animals amb noms diferents: cavall i euga, gall i gallina.",
    "Quan digui «flores» o «casas» en català, repetiu la paraula bé sense renyar.",
  ],
  profesores: PROFCA("Reflexió sobre la llengua: gènere i nombre del nom, formació del femení i del plural (-s, -a → -es, -os) i concordança amb l'article i l'adjectiu", ["Memory de parelles masculí/femení.", "Capsa d'objectes per passar de singular a plural.", "Detectius de concordança amb frases amb errors."]),
  fuentes: FONTS,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Fer el femení dels noms d'animals i d'oficis", "Saber que algunes paraules no canvien", "Fer concordar l'article, el nom i l'adjectiu", "Revisar el gènere i el nombre en un text"],
  lectura: { titulo: "La granja del senyor Pere", html: `<p>A la granja del senyor Pere hi viuen molts animals.</p><p>Al corral hi ha un <b>gall</b> molt presumit i tres <b>gallines</b> que ponen ous cada matí. Al costat, un <b>ànec</b> i dues <b>oques</b> neden a la bassa.</p><p>A l'estable hi ha un <b>cavall</b> negre i una <b>euga</b> blanca. També hi ha un <b>bou</b> fort i dues <b>vaques</b> que fan llet.</p><p>Els <b>porcs</b> s'embruten al fang i les <b>truges</b> dormen a l'ombra.</p><p>Un matí, el gall va cridar:</p><p>—Quiquiriquic! Han nascut uns <b>pollets</b>!</p><p>Tots els animals van córrer a veure'ls. Eren cinc pollets petits i grocs.</p><p>—Que bonics! —va dir l'euga.</p><p>—Que petitons! —van dir les vaques.</p><p>El senyor Pere i la seva filla, la Núria, que és <b>veterinària</b>, els van mirar un per un.</p><p>—Estan tots sans i forts —va dir la Núria.</p><p>Aquella nit, a la granja, tothom va dormir content.</p>` },
  tras: {
    "Paraules molt diferents": [
      ["El femení dels animals", `<p>Molts animals tenen el <mark>femení</mark> amb una paraula <b>diferent</b>:</p><ul><li>el <b>cavall</b> → l'<b>euga</b></li><li>el <b>bou</b> → la <b>vaca</b></li><li>el <b>gall</b> → la <b>gallina</b></li><li>el <b>boc</b> → la <b>cabra</b></li><li>el <b>porc</b> → la <b>truja</b></li><li>el <b>marrà</b> → l'<b>ovella</b></li></ul><p>Altres animals fan el femení afegint <b>-a</b> o canviant la terminació:</p><ul><li>el <b>gat</b> → la <b>gata</b></li><li>el <b>lleó</b> → la <b>lleona</b></li><li>l'<b>ànec</b> → l'<b>ànega</b></li></ul><p>I alguns animals tenen una sola paraula. Per dir si és mascle o femella, afegim <b>mascle</b> o <b>femella</b>: la <i>girafa mascle</i>, el <i>cocodril femella</i>.</p><p>Recorda que davant d'una paraula que comença per vocal, l'article s'apostrofa: <b>l'</b>ànec, <b>l'</b>euga, <b>l'</b>ovella. En plural no: els ànecs, les egües, les ovelles.</p><p><b>Activitat</b>: fes parelles de cartes amb el mascle i la femella de cada animal.</p>`,
        L6.filas("Animals", [["cavall", "euga", cMO], ["bou", "vaca", cAZ], ["gall", "gallina", cRO], ["porc", "truja", cNA]])],
    ],
    "Plural amb -s": [
      ["El femení dels oficis", `<p>Els noms d'<mark>oficis</mark> també tenen masculí i femení. Les noies i els nois poden fer qualsevol feina!</p><ul><li>Afegint <b>-a</b>: el mestre → la mestra, el cuiner → la cuinera, el pagès → la pagesa, el pintor → la pintora.</li><li>També: el bomber → la bombera, el pastor → la pastora.</li><li>Amb <b>-essa</b>: el metge → la metgessa, l'alcalde → l'alcaldessa.</li></ul><p>Alguns oficis són <b>iguals</b> en masculí i femení. Només canvia l'article:</p><ul><li>el <b>pilot</b> → la <b>pilot</b></li><li>el <b>dentista</b> → la <b>dentista</b></li><li>el <b>periodista</b> → la <b>periodista</b></li><li>el <b>guia</b> → la <b>guia</b></li></ul><p><b>Activitat</b>: escriu el nom de l'ofici de cinc persones de la teva família, en masculí o femení.</p>`,
        H6.dos("Oficis", ["CANVIA", ["mestra", "cuinera", "metgessa"], cVE], ["IGUAL", ["la pilot", "la dentista", "la guia"], cAZ])],
    ],
    "Plural amb -os": [
      ["Paraules que no canvien", `<p>Hi ha paraules que són <mark>iguals</mark> en singular i en plural. Només canvia l'article:</p><ul><li>el <b>llapis</b> → els <b>llapis</b></li><li>el <b>temps</b> → els <b>temps</b></li><li>el <b>dilluns</b> → els <b>dilluns</b> (i tots els dies de la setmana acabats en <b>-s</b>)</li><li>el <b>globus</b> → els <b>globus</b></li></ul><p>També hi ha paraules que gairebé sempre van en <b>plural</b>: les <b>ulleres</b>, les <b>tisores</b>, els <b>pantalons</b>.</p><p>I paraules que gairebé sempre van en <b>singular</b>: la <b>llet</b>, la <b>sal</b>, la <b>gent</b>.</p><p>Per saber si una paraula està en singular o plural, mira l'<b>article</b>: <i>el llapis</i> (un) / <i>els llapis</i> (molts).</p><p>Així, quan diem «m'he deixat els llapis», sabem que són molts gràcies a la paraula <b>els</b>.</p><p><b>Activitat</b>: busca al teu estoig coses que es diguin igual en singular i en plural.</p>`,
        H6.flujo("Igual", ["el llapis|els llapis", "el dilluns|els dilluns", "el temps|els temps", "mira|l'article"], cNA),
        ["_EITuHjRJxc", "Dàmaris Gelabert - Qui soc jo?", "Dàmaris Gelabert", 30961240]],
    ],
    "Per a què serveix?": [
      ["Tot concorda", `<p>A la frase, l'<b>article</b>, el <b>nom</b> i l'<b>adjectiu</b> han d'anar d'<mark>acord</mark>: tots en masculí o tots en femení, tots en singular o tots en plural.</p><ul><li><b>el gat negre</b> (masculí singular)</li><li><b>la gata negra</b> (femení singular)</li><li><b>els gats negres</b> (masculí plural)</li><li><b>les gates negres</b> (femení plural)</li></ul><p>Si alguna peça no concorda, la frase sona malament: «<i>les gates negre</i>» ✗.</p><p>Truc per revisar:</p><ul><li>Llegeix la frase en veu alta.</li><li>Mira si l'article i l'adjectiu porten la mateixa terminació que el nom.</li><li>Corregeix el que no encaixi.</li></ul><p>És com un trencaclosques: totes les peces han d'encaixar!</p><p>Quan escrivim un text, és bo rellegir-lo al final i buscar aquests errors de concordança. Un bon escriptor sempre revisa el que ha escrit!</p><p><b>Activitat</b>: corregeix aquestes frases: «el nena alta», «les cavalls blanc».</p>`,
        L6.filas("Concorda", [["el gat", "negre", cAZ], ["la gata", "negra", cRO], ["els gats", "negres", cVE], ["les gates", "negres", cMO]])],
    ],
  },
  final: [
    ["Diminutius i augmentatius", `<p>Amb unes terminacions podem fer les paraules més <mark>petites</mark> o més <mark>grans</mark>:</p><p><b>Diminutius</b> (petit o estimat): <b>-et</b>, <b>-eta</b>, <b>-ó</b>, <b>-ona</b></p><ul><li>gat → gat<b>et</b>, casa → cas<b>eta</b></li><li>llibre → llibr<b>et</b>, nen → nen<b>et</b></li><li>petit → petit<b>ó</b></li></ul><p><b>Augmentatius</b> (molt gran): <b>-às</b>, <b>-assa</b></p><ul><li>gos → gos<b>sàs</b>, casa → cas<b>assa</b></li><li>home → hom<b>enàs</b></li></ul><p>Els diminutius i augmentatius també tenen gènere i nombre: <i>gatet, gateta, gatets, gatetes</i>.</p><p>Fem servir els diminutius quan parlem amb afecte: «Quin <b>nenet</b> més bonic!»</p><p><b>Activitat</b>: fes el diminutiu de cinc paraules: llibre, taula, peix, flor, cotxe.</p>`,
      H6.dos("Mida", ["PETIT", ["gatet", "caseta", "petitó"], cNA], ["GRAN", ["gossàs", "casassa", "homenàs"], cRO])],
    ["Repàs: la granja del senyor Pere", `<p>Repassem amb la <mark>lectura</mark>:</p><ul><li>Masculí i femení diferents: <b>gall</b> i <b>gallina</b>, <b>cavall</b> i <b>euga</b>, <b>bou</b> i <b>vaca</b>, <b>porc</b> i <b>truja</b>.</li><li>Plurals amb <b>-s</b>: porcs, pollets.</li><li>Plurals de paraules en <b>-a</b>: vaca → vaques, truja → truges, oca → oques.</li><li>Concordança: «un cavall <b>negre</b>», «una euga <b>blanca</b>», «pollets petits i <b>grocs</b>».</li><li>Ofici en femení: la Núria és <b>veterinària</b>.</li><li>Diminutiu: <b>petitons</b>.</li></ul><p>Fixa't que per fer el plural de <i>truja</i> escrivim <b>truges</b>: la j canvia a g davant de e, i <i>oca</i> fa <b>oques</b>.</p><p><b>Activitat</b>: copia de la lectura tres parelles de mascle i femella.</p>`,
      L6.filas("Granja", [["gall", "gallina", cRO], ["cavall", "euga", cMO], ["vaca", "vaques", cAZ], ["truja", "truges", cVE]])],
  ],
  ejemplos: [
    ["Femení de «el bou».", ["És una paraula diferent."], "La vaca."],
    ["Corregeix: «les gates negre».", ["El nom és femení plural.", "L'adjectiu ha de fer -es."], "Les gates negres."],
  ],
  errores: ["Dir «la cavalla» en lloc de «l'euga».", "No fer concordar l'adjectiu: «els gats negre»."],
  ejercicios: [
    ["b", "Femení de «gall».", "Gallina."],
    ["b", "Femení de «mestre».", "Mestra."],
    ["b", "Plural de «el llapis».", "Els llapis."],
    ["b", "Diminutiu de «gat».", "Gatet."],
    ["b", "Femení de «el pilot».", "La pilot."],
    ["m", "Femení de «cavall».", "Euga."],
    ["m", "Femení de «metge».", "Metgessa."],
    ["m", "Posa en plural: la gata negra.", "Les gates negres."],
    ["m", "Corregeix: «el nena alta».", "La nena alta."],
    ["m", "Augmentatiu de «gos».", "Gossàs."],
    ["a", "A la lectura, quin ofici té la Núria?", "Veterinària."],
    ["a", "Copia tres parelles de mascle i femella de la lectura.", "Gall-gallina, cavall-euga, bou-vaca."],
    ["a", "Per què «truja» fa «truges»?", "Perquè la j canvia a g davant de e."],
    ["a", "Escriu una frase amb article, nom i adjectiu en femení plural.", "Resposta oberta."],
  ],
  quiz: [
    ["El femení de «porc» és…", ["truja", "porca", "vaca"], "Animals."],
    ["És igual en masculí i femení…", ["dentista", "mestre", "cuiner"], "Oficis."],
    ["És igual en singular i plural…", ["llapis", "gat", "taula"], "No canvien."],
    ["Concorda bé…", ["els gats negres", "els gats negre", "les gats negres"], "Concordança."],
    ["Diminutiu de «casa»:", ["caseta", "casassa", "cases"], "Diminutius."],
  ],
  examen: [
    ["A la lectura, quants pollets neixen?", ["cinc", "tres", "deu"], "Lectura."],
    ["De quin color és l'euga?", ["blanca", "negra", "marró"], "Repàs."],
  ],
  tarjetas: [
    ["Animals", "cavall-euga, bou-vaca, gall-gallina, porc-truja, boc-cabra."],
    ["Concordança", "el gat negre, la gata negra, els gats negres, les gates negres."],
  ],
  glosario: [
    ["Euga", "Femella del cavall."],
    ["Truja", "Femella del porc."],
    ["Boc", "Mascle de la cabra."],
    ["Marrà", "Mascle de l'ovella."],
    ["Ofici", "Feina d'una persona."],
    ["Concordança", "Acord de gènere i nombre a la frase."],
    ["Diminutiu", "Paraula que fa petit: gatet."],
    ["Augmentatiu", "Paraula que fa gran: gossàs."],
    ["Veterinària", "Persona que cura els animals."],
    ["Estable", "Lloc on dormen els cavalls i les vaques."],
  ],
  situacion: {
    titulo: "La granja de la classe",
    reto: "La classe fa una granja de cartolina amb parelles d'animals i rètols amb el nom en masculí, femení, singular i plural.",
    pasos: ["Dibuixar parelles d'animals: mascle i femella.", "Escriure rètols amb article, nom i adjectiu.", "Afegir els grangers i les grangeres amb el seu ofici.", "Revisar entre tots que tot concordi."],
    producto: "Una granja de cartolina amb rètols.",
    evaluacion: ["Fa el femení d'animals.", "Fa el femení d'oficis.", "Coneix paraules que no canvien.", "Fa concordar article, nom i adjectiu."],
  },
});
