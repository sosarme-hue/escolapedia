// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "La palabra: estructura y formación",
  minutos: 45,
  objetivos: ["Separar una palabra en lexema y morfemas", "Distinguir morfemas flexivos y derivativos", "Reconocer palabras simples, derivadas, compuestas y parasintéticas"],
  claves: ["lexema", "raíz", "morfema flexivo", "morfema derivativo", "prefijo", "sufijo", "derivación", "composición", "parasíntesis", "familia léxica"],
  pregunta: {
    texto: "«Pan», «panadero», «panadería», «empanada» y «empanadilla». ¿Qué tienen en común?",
    respuesta: "Todas comparten el mismo <b>lexema</b>, <mark>pan-</mark>, que aporta el significado básico. Las demás piezas (<i>-adero</i>, <i>-ería</i>, <i>em-…-ada</i>) son <b>morfemas</b> que añaden matices. Juntas forman una <b>familia léxica</b>.",
  },
  bloques: [
    {
      html: `<h3>Lexema y morfemas</h3><p>Muchas palabras se pueden dividir en piezas con significado. El <b>lexema</b> o raíz aporta el <mark>significado principal</mark> (gat- en «gatos»). Los <b>morfemas</b> son piezas que añaden información gramatical o matices de significado (-o-, -s en «gatos»).</p>`,
      svg: L.frase("La palabra gatitos dividida en lexema y morfemas", [
        ["gat", "lexema", "var(--pen)"], ["it", "derivativo", "var(--leaf)"], ["o", "género", "var(--red)"], ["s", "número", "var(--red)"],
      ], "gat + it + o + s"),
    },
    {
      html: `<h3>Morfemas flexivos</h3><p>Los <b>flexivos</b> indican <mark>accidentes gramaticales</mark> y no cambian el significado básico ni la categoría. En sustantivos y adjetivos marcan el <b>género</b> (-o, -a) y el <b>número</b> (-s, -es). En los verbos marcan persona, número, tiempo, modo y aspecto: cant-<b>ábamos</b>.</p>`,
      svg: L.tabla("Morfemas flexivos en distintas palabras", ["Palabra", "Lexema", "Flexivos"], [
        ["niñas", "niñ-", "-a, -s"], ["altos", "alt-", "-o, -s"], ["cantábamos", "cant-", "-ába-, -mos"],
      ]),
    },
    {
      html: `<h3>Morfemas derivativos</h3><p>Los <b>derivativos</b> forman <mark>palabras nuevas</mark>. Si van delante del lexema son <b>prefijos</b> (<i>re</i>hacer, <i>des</i>hacer); si van detrás, <b>sufijos</b> (pan<i>adero</i>, feliz<i>mente</i>). Los sufijos pueden cambiar la categoría: de «feliz» (adjetivo) a «felicidad» (sustantivo).</p>`,
      svg: L.filas("Prefijos y sufijos", [
        ["Prefijo", "re-hacer, in-útil, sub-marino", "var(--pen)"],
        ["Sufijo", "pan-adero, rápida-mente", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Clases de palabras según su formación</h3><p>Las <b>simples</b> tienen un solo lexema y, como mucho, morfemas flexivos (mar, casas). Las <b>derivadas</b> añaden prefijos o sufijos (marinero). Las <b>compuestas</b> unen dos o más lexemas (sacacorchos). Las <b>parasintéticas</b> combinan a la vez composición y derivación (picapedrero) o prefijo y sufijo que se necesitan juntos (<i>en</i>roj<i>ecer</i>).</p>`,
      svg: L.tabla("Clases de palabras según su formación", ["Clase", "Ejemplo"], [
        ["Simple", "mar"], ["Derivada", "marinero"], ["Compuesta", "sacacorchos"], ["Parasintética", "enrojecer"],
      ]),
    },
    {
      html: `<h3>La familia léxica</h3><p>Es el conjunto de palabras que comparten el <mark>mismo lexema</mark>: tierra, terreno, terrestre, enterrar, aterrizar, desenterrar. Conocer las familias ayuda a deducir el significado de palabras nuevas y también a <b>escribir bien</b>: si «hierba» lleva h, «herbívoro» y «herbolario» también.</p>`,
      svg: L.filas("Familia léxica de tierra", [
        ["terr-", "terreno, terrestre, terraza", "var(--pen)"],
        ["en- … -ar", "enterrar, desenterrar", "var(--leaf)"],
        ["a- … -izar", "aterrizar, aterrizaje", "var(--red)"],
      ], "todas comparten el lexema"),
    },
  ],
  figura: {
    titulo: "Cómo se forman las palabras",
    svg: L.columnas("Procedimientos de formación de palabras", [
      ["lexema + prefijo o sufijo", "DERIVACIÓN", ["des-hacer", "pan-adería"], "var(--pen)"],
      ["lexema + lexema", "COMPOSICIÓN", ["saca-corchos", "agri-dulce"], "var(--leaf)"],
      ["los dos a la vez", "PARASÍNTESIS", ["en-roj-ecer", "pica-pedr-ero"], "var(--red)"],
    ]),
  },
  video: { id: "IzBPPjYWyng", titulo: "Morfología: lexemas y morfemas flexivos y derivativos y tipos de formación de palabras", canal: "Clases Particulares en Ávila", vistas: 997699, megusta: 0, busqueda: "estructura de la palabra lexema morfemas" },
  quiz: [
    { q: "En «libros», el lexema es…", o: ["libr-", "-os", "-s"], a: 0, e: "Aporta el significado principal." },
    { q: "La -s de «mesas» es un morfema…", o: ["flexivo de número", "derivativo", "prefijo"], a: 0, e: "Indica plural." },
    { q: "«Deshacer» es una palabra…", o: ["derivada con prefijo", "compuesta", "simple"], a: 0, e: "des- + hacer." },
    { q: "«Paraguas» es una palabra…", o: ["compuesta", "derivada", "parasintética"], a: 0, e: "para (verbo) + aguas." },
    { q: "¿Cuál NO pertenece a la familia de «flor»?", o: ["florero", "florido", "flotar"], a: 2, e: "Flotar no tiene el lexema flor-." },
  ],
  examen: [
    { q: "«Entristecer» es…", o: ["parasintética", "compuesta", "simple"], a: 0, e: "en- y -ecer se añaden a la vez: no existe *tristecer ni *entriste." },
    { q: "El sufijo -mente forma…", o: ["adverbios", "sustantivos", "verbos"], a: 0, e: "rápidamente, felizmente." },
    { q: "Los morfemas que forman palabras nuevas se llaman…", o: ["derivativos", "flexivos", "lexemas"], a: 0, e: "Prefijos y sufijos." },
  ],
  feynman: ["Qué es un lexema y qué es un morfema", "La diferencia entre morfemas flexivos y derivativos", "Las cuatro clases de palabras según su formación", "Para qué sirve conocer las familias léxicas"],
  mapa: mapa("LA PALABRA", "var(--eso)", [
    ["Lexema", "significado principal", "var(--pen)"],
    ["Flexivos", "género · número · persona", "var(--red)"],
    ["Derivativos", "prefijos · sufijos", "var(--leaf)"],
    ["Formación", "derivación · composición", "var(--inf)"],
  ]),
  tarjetas: [
    ["Lexema", "Parte de la palabra que aporta el significado principal."],
    ["Morfema flexivo", "Indica género, número, persona, tiempo o modo, sin crear una palabra nueva."],
    ["Prefijo", "Morfema derivativo que va delante del lexema: re-, des-, in-, sub-."],
    ["Palabra compuesta", "La formada por dos o más lexemas: sacapuntas, agridulce."],
    ["Familia léxica", "Conjunto de palabras que comparten el mismo lexema."],
  ],
  familias: ["Jugad a buscar en cinco minutos el mayor número de palabras de la familia de «mar».", "Inventad entre todos palabras compuestas divertidas y explicad qué significarían.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: la palabra; procedimientos de formación (derivación, composición, parasíntesis); familias léxicas (RD 217/2022, Lengua Castellana y Literatura, 3º ESO; Nueva gramática básica).",
    ideas: ["Tarjetas con lexemas y afijos para construir palabras reales e inventadas.", "Mapa mental de una familia léxica con el diccionario.", "Detectives de palabras: buscar compuestas y derivadas en titulares de prensa."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Diccionario de la lengua española (RAE)", url: "https://dle.rae.es/" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Conocer el significado de los prefijos y sufijos más frecuentes", "Reconocer otros procedimientos: siglas, acrónimos, acortamientos y préstamos"],
  bloques: [
    { tras: "Lexema y morfemas", html: `<h3>Cómo segmentar una palabra paso a paso</h3><p>Para separar una palabra en sus piezas, sigue este orden:</p><ol><li>Busca otras palabras de la misma familia: lo que se repite es el <b>lexema</b> (zapat-o, zapat-ero, zapat-illa).</li><li>Quita lo que indique <b>género y número</b> (o persona y tiempo, si es un verbo): son los <b>flexivos</b>, siempre al final.</li><li>Lo que queda entre el lexema y los flexivos, o delante del lexema, son los <b>derivativos</b>.</li></ol><p>Ejemplo: <i>desordenadas</i> = <mark>des-</mark> (prefijo) + <mark>orden</mark> (lexema) + <mark>-ad-</mark> (sufijo) + <mark>-a</mark> (género) + <mark>-s</mark> (número). Hay palabras que no admiten división, como «sol» o «ayer»: son simples y no tienen morfemas.</p>` },
    { tras: "Morfemas derivativos", html: `<h3>Prefijos y sufijos frecuentes</h3>${L.tb(["Afijo", "Significado", "Ejemplo"], [["in-, des-", "negación", "inútil, deshacer"], ["re-", "repetición", "releer"], ["pre-", "antes", "prever"], ["sub-", "debajo", "subterráneo"], ["-ero, -ista", "oficio", "cartero, dentista"], ["-ería", "tienda o lugar", "frutería"], ["-ble", "posibilidad", "lavable"], ["-ito, -azo", "tamaño (apreciativos)", "librito, golazo"]])}<p>Los sufijos <b>apreciativos</b> merecen atención: los <i>diminutivos</i> (-ito, -illo), los <i>aumentativos</i> (-ón, -azo) y los <i>despectivos</i> (-ucho, -aco) añaden matices de tamaño o de afecto, pero no cambian la categoría de la palabra.</p>` },
    { tras: "Clases de palabras según su formación", html: `<h3>Cómo se escriben las compuestas</h3><p>Las palabras compuestas pueden escribirse de varias maneras. Las <b>propias</b> forman una sola palabra gráfica y siguen las reglas de acentuación como cualquier otra: <i>sacacorchos</i>, <i>decimoséptimo</i>, <i>baloncesto</i>. Las que unen dos adjetivos se escriben con <b>guion</b>: <i>teórico-práctico</i>, <i>franco-alemán</i>. Y hay <b>compuestos sintagmáticos</b> que se escriben separados pero funcionan como una unidad: <i>ojo de buey</i>, <i>fin de semana</i>, <i>ciencia ficción</i>.</p><p>Fíjate en que al unirse a veces cambia alguna letra para facilitar la pronunciación: <i>pel</i>o + <i>rojo</i> → <mark>pelirrojo</mark>, con <b>i</b> de enlace y doble <b>r</b>.</p>` },
    { tras: "Clases de palabras según su formación", html: `<h3>Otros procedimientos de creación</h3><p>Además de la derivación y la composición, el léxico crece de otras formas:</p><ul><li><b>Siglas</b>: iniciales de varias palabras que se leen letra a letra o como palabra: ONU, DNI, ESO.</li><li><b>Acrónimos</b>: unen fragmentos de varias palabras: <i>ofimática</i> (oficina + informática), <i>Renfe</i>, <i>láser</i>.</li><li><b>Acortamientos</b>: se recorta una palabra larga: bici, profe, tele, cole.</li><li><b>Préstamos</b>: palabras de otras lenguas: fútbol (del inglés), jardín (del francés), almohada (del árabe).</li><li><b>Neologismos</b>: palabras nuevas para realidades nuevas: tuit, bloguero, wasapear.</li></ul>` },
    { tras: "La familia léxica", html: `<h3>Familia léxica y campo semántico</h3><p>No hay que confundir dos conceptos parecidos. La <b>familia léxica</b> agrupa palabras con el <mark>mismo lexema</mark>: mar, marino, marinero, marea, submarino. El <b>campo semántico</b> agrupa palabras de la misma categoría que comparten un <mark>rasgo de significado</mark>, aunque no se parezcan en la forma: lunes, martes, miércoles (días de la semana) o violín, piano, flauta (instrumentos).</p><p>Ten cuidado también con los <b>falsos parientes</b>: «pino» y «pintura» empiezan igual, pero no comparten lexema ni significado. Para comprobarlo, piensa si hay relación de sentido entre las palabras y consulta el diccionario.</p>` },
    { html: `<h3>Las familias léxicas ayudan con la ortografía</h3><p>Una de las ventajas prácticas de conocer la estructura de las palabras es que <mark>la ortografía del lexema se mantiene</mark> en toda la familia. Si dudas de cómo se escribe una palabra, piensa en otra de la misma familia que conozcas bien: «hervir» lleva <b>h</b> y <b>v</b>, así que también «hervidor» y «hirviendo»; «vaca» lleva <b>v</b>, y por eso «vaquero» y «vacuno».</p><p>Hay algunas excepciones que conviene memorizar, porque proceden de palabras latinas distintas: «hueso» lleva h, pero «óseo» no; «huevo» lleva h, pero «óvalo» y «ovíparo» no; «hueco» lleva h, pero «oquedad» no. La regla es que la <b>h</b> aparece delante del diptongo <i>ue</i> a principio de palabra, y desaparece cuando ese diptongo no está.</p>` },
  ],
  videos: [
    ["Clases de palabras según su formación", L.vid("1EWHRCHGmUU", "Procedimientos de formación de palabras: derivación, composición y parasíntesis", "Lengua de taco", 140612)],
    ["Otros procedimientos de creación", L.vid("1HZ-ASkF3JU", "Diferencia entre siglas y acrónimos", "unProfesor", 133173)],
  ],
  ejemplos: [
    ["Segmenta «reorganizaremos».", ["Familia: órgano, organizar, organización. Lexema: organ-.", "Prefijo re- (repetición) y sufijo -iz- (forma verbos).", "Flexivos verbales: -a- (vocal temática), -re- (futuro), -mos (1.ª persona del plural)."], "re- + organ + -iz- + -a- + -re- + -mos."],
    ["Clasifica: «sombrerero», «sacapuntas», «engordar», «luz».", ["Sombrerero: sombrer- + -ero → derivada.", "Sacapuntas: saca + puntas → compuesta.", "Engordar: en- + gord- + -ar, a la vez (no existe *gordar) → parasintética.", "Luz: un solo lexema → simple."], "derivada, compuesta, parasintética y simple."],
    ["Forma la familia léxica de «agua» (al menos cinco palabras).", ["Lexema: agu-.", "Derivadas: aguado, aguacero, aguadero, desaguar.", "Compuestas: paraguas, aguamarina."], "aguado, aguacero, desaguar, paraguas, aguamarina."],
  ],
  errores: [
    "Tomar la vocal final (-o, -a) como parte del lexema: en «gato», el lexema es gat-.",
    "Pensar que todo lo que va delante del lexema cambia la categoría: los prefijos casi nunca la cambian.",
    "Clasificar como compuesta una palabra derivada con varios sufijos (panadería es derivada).",
    "Confundir familia léxica (mismo lexema) y campo semántico (mismo significado común).",
    "Escribir separadas compuestas propias: *saca corchos, *medio día cuando significa «mediodía».",
  ],
  ejercicios: [
    ["Separa lexema y morfemas en «niñeras».", "niñ- (lexema) + -er- (derivativo) + -a (género) + -s (número)."],
    ["Señala el prefijo y su significado: «incapaz», «releer», «subsuelo».", "in- (negación), re- (repetición), sub- (debajo)."],
    ["Forma un sustantivo derivado de: «bello», «limpiar», «feliz».", "belleza, limpieza, felicidad."],
    ["Clasifica: «abrelatas», «florista», «atardecer», «sol».", "Compuesta, derivada, parasintética, simple."],
    ["Escribe tres palabras compuestas con «auto-» o «-metro».", "Por ejemplo: autobús, autorretrato, termómetro, cronómetro."],
    ["¿Sigla o acrónimo? ONU, Renfe, ovni.", "ONU: sigla. Renfe: acrónimo (Red Nacional de los Ferrocarriles Españoles). Ovni: sigla que se lee como palabra (objeto volador no identificado), ya lexicalizada."],
    ["Escribe la palabra completa de: «bici», «foto», «cine».", "bicicleta, fotografía, cinematógrafo."],
    ["¿Familia léxica o campo semántico? «manzana, pera, plátano».", "Campo semántico (frutas): no comparten lexema."],
    ["Escribe cinco palabras de la familia de «papel».", "papelera, papelería, papeleo, papelito, empapelar."],
    ["¿Qué tienen en común «carnicería», «panadería» y «frutería»?", "Son derivadas con el sufijo -ería, que indica la tienda donde se vende algo."],
  ],
  quiz: [
    ["«Pelirrojo» es…", ["compuesta", "derivada", "parasintética"], 0, "pelo + rojo, con i de enlace."],
    ["«Bici» se ha formado por…", ["acortamiento", "derivación", "préstamo"], 0, "Se recorta «bicicleta»."],
    ["El sufijo -azo en «golazo» es…", ["apreciativo aumentativo", "flexivo", "prefijo"], 0, "Expresa tamaño o intensidad."],
    ["«Fútbol» es un…", ["préstamo del inglés", "acrónimo", "compuesto"], 0, "De football."],
    ["«Lunes, martes, jueves» forman…", ["un campo semántico", "una familia léxica", "una palabra compuesta"], 0, "Comparten significado, no lexema."],
  ],
  tarjetas: [
    ["Parasíntesis", "Formación con prefijo y sufijo a la vez (enrojecer) o con composición y derivación (picapedrero)."],
    ["Acrónimo", "Palabra formada con fragmentos de otras: ofimática, Renfe."],
    ["Campo semántico", "Palabras de la misma categoría con un rasgo de significado común."],
  ],
});
