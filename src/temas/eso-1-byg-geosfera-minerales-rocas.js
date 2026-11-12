// Biología y Geología 1º ESO: la geosfera, minerales y rocas. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "La geosfera: minerales y rocas",
  minutos: 55,
  objetivos: ["Describir las capas de la geosfera: corteza, manto y núcleo", "Definir qué es un mineral y reconocer sus propiedades", "Distinguir rocas magmáticas, sedimentarias y metamórficas", "Explicar el ciclo de las rocas y valorar los usos de minerales y rocas"],
  claves: ["geosfera", "corteza", "manto", "núcleo", "mineral", "cristal", "dureza", "escala de Mohs", "roca", "magmática", "sedimentaria", "metamórfica", "ciclo de las rocas"],
  pregunta: {
    texto: "La sal de cocina y el granito de una encimera, ¿son lo mismo? ¿Cuál es un mineral y cuál una roca?",
    respuesta: "La sal es un <b>mineral</b>: una sola sustancia (cloruro de sodio) con sus átomos ordenados en cubos. El granito es una <b>roca</b>: una mezcla de varios minerales que se ven a simple vista como granos de colores, sobre todo <b>cuarzo</b> (gris y brillante), <b>feldespato</b> (blanco o rosado) y <b>mica</b> (negra y en láminas). Un mineral es como una pieza de LEGO de un color; una roca, como una construcción con piezas de varios colores.",
  },
  bloques: [
    {
      html: `<h3>La geosfera y sus capas</h3><p>La Tierra se divide en varias capas o «esferas»: la atmósfera (aire), la hidrosfera (agua), la biosfera (seres vivos) y la <mark>geosfera</mark>, que es la parte <b>sólida y rocosa</b> del planeta, desde la superficie hasta el centro, a unos 6.370 km de profundidad. Nadie ha podido llegar tan abajo (el pozo más profundo apenas pasa de 12 km), así que se estudia de forma indirecta, sobre todo con las <b>ondas sísmicas</b> de los terremotos, que cambian de velocidad al atravesar materiales distintos. Así sabemos que la geosfera tiene tres capas: la <mark>corteza</mark>, la más externa y delgada, con un grosor de unos 5 a 10 km bajo los océanos y de 30 a 70 km en los continentes; el <mark>manto</mark>, hasta unos 2.900 km, formado por rocas muy calientes que pueden fluir muy despacio; y el <mark>núcleo</mark>, de hierro y níquel, con una parte externa líquida y una interna sólida, a temperaturas de más de 5.000 °C.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Capas de la geosfera en corte: corteza muy fina, manto, núcleo externo líquido y núcleo interno sólido">${BG}
        <circle cx="90" cy="96" r="72" fill="#8b5a2b"/><circle cx="90" cy="96" r="68" fill="#e8892c"/><circle cx="90" cy="96" r="38" fill="#f6b417"/><circle cx="90" cy="96" r="18" fill="#fde68a"/>
                ${fl(184, 34, 154, 64, "var(--ink)", 1.5)}${t(188, 38, "corteza", { size: 10.5, anchor: "start" })}
        ${fl(184, 74, 144, 80, "var(--ink)", 1.5)}${t(188, 78, "manto", { size: 10.5, anchor: "start" })}
        ${fl(184, 112, 116, 110, "var(--ink)", 1.5)}${t(188, 116, "núcleo externo", { size: 9.5, anchor: "start" })}
        ${fl(184, 146, 100, 102, "var(--ink)", 1.5)}${t(188, 150, "núcleo interno", { size: 9.5, anchor: "start" })}</svg>`,
    },
    {
      html: `<h3>¿Qué es un mineral?</h3><p>Un <mark>mineral</mark> es una sustancia <b>natural</b>, <b>inorgánica</b> (no fabricada por seres vivos), <b>sólida</b>, con una <b>composición química definida</b> y con sus átomos ordenados de una forma regular que se repite, llamada <mark>estructura cristalina</mark>. Cuando un mineral crece despacio y con espacio libre, esa ordenación interna se nota por fuera y forma <b>cristales</b> con caras planas y formas geométricas: cubos en la halita (sal) y la pirita, prismas de seis caras en el cuarzo. El hielo de un glaciar es un mineral; en cambio, el vidrio no lo es, porque sus átomos están desordenados, ni tampoco el azúcar, que es orgánico, ni una perla, que la fabrica una ostra. Se conocen más de 5.000 minerales, pero solo unos pocos, como el cuarzo, los feldespatos, las micas o la calcita, forman la mayor parte de las rocas.</p>`,
    },
    {
      html: `<h3>Las propiedades de los minerales</h3><p>Para identificar un mineral se observan sus <b>propiedades</b>. El <mark>color</mark> se ve a simple vista, pero engaña, porque un mismo mineral puede tener varios colores por pequeñas impurezas. La <b>raya</b> es el color del polvo que deja al frotarlo sobre una porcelana blanca, y es más fiable: la pirita es dorada, pero su raya es negra verdosa. El <b>brillo</b> puede ser metálico, como el de la galena, o no metálico (vítreo, como el vidrio; nacarado; graso…). La <mark>dureza</mark> es la resistencia a ser rayado y se mide con la <b>escala de Mohs</b>, del 1 al 10. La <b>exfoliación</b> es la tendencia a romperse en láminas o caras planas, como la mica, que se separa en hojas finísimas. También ayudan la <b>densidad</b>, el magnetismo de la magnetita o el sabor salado de la halita. En la escala de Mohs, cada mineral raya a los que tienen un número menor y es rayado por los de número mayor.</p>${tabla(["Dureza", "Mineral", "Truco para compararlo"], [["1", "talco", "se raya con la uña"], ["2", "yeso", "se raya con la uña"], ["3", "calcita", "se raya con una moneda de cobre"], ["4", "fluorita", "se raya fácil con una navaja"], ["5", "apatito", "se raya con una navaja"], ["6", "ortosa", "raya el vidrio con dificultad"], ["7", "cuarzo", "raya el vidrio"], ["8", "topacio", "raya el cuarzo"], ["9", "corindón", "raya el topacio"], ["10", "diamante", "lo raya todo"]])}`,
      video: { id: "pv5h9K7eOwI", titulo: "Escala de Mohs | Dureza de los minerales", canal: "Academia Play", vistas: 276790 },
    },
    {
      html: `<h3>Usos de los minerales</h3><p>Los minerales están presentes en casi todo lo que usamos. Los que se explotan para obtener metales se llaman <mark>menas</mark>: de la <b>hematites</b> y la magnetita se extrae el hierro; de la <b>calcopirita</b>, el cobre; de la <b>galena</b>, el plomo; de la <b>bauxita</b>, el aluminio. Otros se usan directamente: el <b>cuarzo</b> para fabricar vidrio y en los relojes, el <b>yeso</b> en la construcción, la <b>halita</b> como sal de mesa y para quitar el hielo de las carreteras, el <b>talco</b> en cosméticos y la <b>fluorita</b> en la pasta de dientes. Algunos, por su belleza, dureza y rareza, son <b>gemas</b>, como el diamante, el rubí y el zafiro (variedades del corindón) o la esmeralda. Y tu móvil contiene decenas de elementos sacados de minerales, como el litio de la batería o el coltán de los condensadores. Como los minerales <b>no se renuevan</b> a escala humana, es importante reciclar los aparatos electrónicos.</p>`,
    },
    {
      html: `<h3>¿Qué es una roca?</h3><p>Una <mark>roca</mark> es un material natural, sólido, formado por un <b>conjunto de minerales</b> (o, a veces, por uno solo en gran cantidad). Por ejemplo, el <b>granito</b> está formado por cuarzo, feldespato y mica; la <b>caliza</b>, casi solo por calcita. Las rocas forman toda la corteza terrestre. Según cómo se han formado, se clasifican en tres grandes grupos: <mark>magmáticas</mark> (o ígneas), que nacen al enfriarse el magma; <mark>sedimentarias</mark>, que se forman en la superficie a partir de sedimentos; y <mark>metamórficas</mark>, que se forman cuando otras rocas se transforman por el calor y la presión sin llegar a fundirse. Para reconocer una roca los geólogos observan la <b>textura</b> (si tiene granos o cristales visibles, láminas, capas, fósiles…), el color, la dureza y si hace efervescencia (burbujas) con un ácido suave, como hacen las rocas que tienen calcita.</p>`,
      video: { id: "Dn3n3wajdFI", titulo: "Las ROCAS para niños - Formación, clasificación y usos - Ciencias para niños", canal: "Smile and Learn - Español", vistas: 534454 },
    },
    {
      html: `<h3>Rocas magmáticas</h3><p>Las <mark>rocas magmáticas</mark> se forman cuando el <b>magma</b>, roca fundida del interior de la Tierra, se enfría y se solidifica. Si el magma se enfría <b>lentamente en el interior</b> de la corteza, los minerales tienen tiempo de crecer y forman cristales grandes que se ven a simple vista: son las rocas <b>plutónicas</b>, como el <b>granito</b>, muy usado en encimeras y fachadas. Si el magma sale a la superficie en una erupción volcánica (entonces se llama <b>lava</b>) y se enfría <b>rápidamente</b>, los cristales son tan pequeños que no se ven, o ni siquiera se forman: son las rocas <b>volcánicas</b>, como el <b>basalto</b>, oscuro, que forma gran parte de las islas Canarias; la <b>obsidiana</b>, un vidrio volcánico negro; o la <b>piedra pómez</b>, tan llena de burbujas de gas que flota en el agua.</p>`,
    },
    {
      html: `<h3>Rocas sedimentarias</h3><p>Las <mark>rocas sedimentarias</mark> se forman en la superficie terrestre en varias etapas. Primero, el agua, el viento y el hielo <b>desgastan</b> las rocas (erosión) y <b>transportan</b> los fragmentos; después, estos fragmentos, llamados <b>sedimentos</b>, se <b>depositan</b> en capas en el fondo de mares, lagos o ríos; con el tiempo, el peso de las capas de encima los compacta y unos minerales los «pegan» entre sí: es la <b>litificación</b>. Por eso estas rocas suelen tener <b>estratos</b> (capas) y a menudo contienen <mark>fósiles</mark>. Ejemplos: el <b>conglomerado</b>, con cantos redondeados; la <b>arenisca</b>, de granos de arena; la <b>arcilla</b>, que se usa para hacer ladrillos y cerámica; la <b>caliza</b>, formada a menudo con conchas y que hace burbujas con un ácido; el <b>yeso</b> y la sal gema, que se forman al evaporarse el agua; y el <b>carbón</b> y el petróleo, que proceden de restos de seres vivos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Formación de una roca sedimentaria: erosión de una montaña, transporte por un río y depósito en capas en el fondo del mar">${BG}
        <path d="M10 120 L 50 40 L 90 120 Z" fill="#a8a29e"/><path d="M50 40 L 60 60 L 44 58 Z" fill="#fff"/>
        <path d="M80 118 C 110 120 120 112 150 116 S 190 118 196 116" fill="none" stroke="#2b8ad8" stroke-width="5"/>
        <rect x="170" y="96" width="82" height="70" fill="#2b8ad8" fill-opacity=".25"/>
        <rect x="170" y="130" width="82" height="12" fill="#d6a76b"/><rect x="170" y="142" width="82" height="12" fill="#c08457"/><rect x="170" y="154" width="82" height="12" fill="#a16207"/>
        ${t(50, 140, "1. erosión", { size: 10 })}${t(130, 104, "2. transporte", { size: 10 })}${t(211, 90, "3. depósito", { size: 10 })}
        ${t(166, 146, "estratos", { size: 10, anchor: "end", color: COL.marron })}
        ${t(80, 166, "4. compactación → roca", { size: 10, color: COL.azul })}</svg>`,
    },
    {
      html: `<h3>Rocas metamórficas</h3><p>Las <mark>rocas metamórficas</mark> se forman cuando una roca que ya existía queda sometida a <b>altas temperaturas y presiones</b> en el interior de la corteza, por ejemplo al hundirse a gran profundidad o al quedar cerca de una masa de magma. La roca <b>no llega a fundirse</b>, pero sus minerales se reorganizan, cambian o crecen, y la roca se transforma en otra distinta. A menudo, la presión ordena los minerales en <b>láminas</b> paralelas, que es lo que se llama <b>foliación</b>. Ejemplos muy conocidos: la <b>pizarra</b>, que procede de la arcilla y se separa en láminas planas, por lo que se usa para tejados (muy típica en Galicia y León); el <b>mármol</b>, que procede de la caliza, es blanco o de colores y se usa en escultura y suelos; la <b>cuarcita</b>, muy dura, que procede de la arenisca; y el <b>gneis</b>, con bandas claras y oscuras, que procede del granito.</p>${tabla(["Roca original", "Se transforma en"], [["arcilla", "pizarra"], ["caliza", "mármol"], ["arenisca", "cuarcita"], ["granito", "gneis"]])}`,
    },
    {
      html: `<h3>El ciclo de las rocas</h3><p>Las rocas no son eternas: se están transformando continuamente unas en otras, aunque de forma tan lenta que tarda millones de años. Es el <mark>ciclo de las rocas</mark>. Un magma se enfría y forma una roca magmática; si esa roca sale a la superficie, se erosiona y sus fragmentos forman, con el tiempo, una roca sedimentaria; si esta se hunde y sufre calor y presión, se convierte en metamórfica; y si la temperatura sube tanto que se funde, vuelve a ser magma. Pero el ciclo tiene muchos atajos: cualquier tipo de roca puede erosionarse en la superficie, metamorfizarse o fundirse. El motor del ciclo es doble: la <b>energía interna</b> de la Tierra, que funde y deforma las rocas y levanta montañas, y la <b>energía del Sol</b>, que mueve el agua y el viento que las desgastan. Las rocas también tienen muchos <b>usos</b>: construcción (granito, mármol, pizarra), fabricación de cemento (caliza y arcilla), energía (carbón) u ornamentación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de las rocas: el magma se enfría y forma roca magmática; esta se erosiona y forma roca sedimentaria; con calor y presión se vuelve metamórfica; y al fundirse vuelve a ser magma">${BG}
        ${cj(90, 10, 80, 30, "magma", COL.rojo)}${cj(178, 74, 76, 30, "magmática", COL.naranja)}${cj(90, 140, 80, 30, "sedimentaria", COL.marron)}${cj(6, 74, 76, 30, "metamórfica", COL.morado)}
        ${fl(172, 32, 206, 70, "var(--ink)", 2)}${fl(206, 108, 172, 146, "var(--ink)", 2)}${fl(88, 152, 50, 108, "var(--ink)", 2)}${fl(44, 70, 86, 32, "var(--ink)", 2)}
        ${et(222, 50, "enfriamiento", 70, { size: 9.5, weight: 400 })}${et(222, 132, "erosión", 60, { size: 9.5, weight: 400 })}${et(34, 142, "calor y presión", 70, { size: 9.5, weight: 400 })}${et(38, 50, "fusión", 60, { size: 9.5, weight: 400 })}</svg>`,
    },
  ],
  figura: {
    titulo: "Minerales y rocas de un vistazo",
    svg: rejilla([
      ["Corteza", "capa externa y delgada", COL.marron],
      ["Manto", "rocas calientes que fluyen", COL.naranja],
      ["Núcleo", "hierro y níquel", COL.sol],
      ["Mineral", "sustancia natural y cristalina", COL.azul],
      ["Magmáticas", "granito, basalto, pómez", COL.rojo],
      ["Sedimentarias", "arenisca, caliza, carbón", COL.verde],
      ["Metamórficas", "pizarra, mármol, gneis", COL.morado],
      ["Ciclo", "unas rocas se convierten en otras", COL.agua],
    ], 4, 86, "Resumen: capas de la geosfera, mineral y los tres tipos de rocas"),
  },
  video: { id: "3Z56SCeJeAI", titulo: "ROCAS y MINERALES para niños - ¿En qué se diferencian? - Ciencias para niños", canal: "Smile and Learn - Español", vistas: 546066, megusta: 0, busqueda: "minerales y rocas diferencias" },
  ejemplos: [
    { enunciado: "Tienes un mineral desconocido que raya el vidrio pero no raya el cuarzo y es rayado por el topacio. ¿Qué dureza tiene en la escala de Mohs?",
      pasos: ["Raya el vidrio, así que tiene dureza mayor que unos 5,5.", "No raya el cuarzo (7) y el topacio (8) lo raya, así que es menor que 8.", "Si además el cuarzo tampoco lo raya, tiene dureza 7: probablemente es cuarzo."],
      resultado: "Dureza aproximada de 7." },
    { enunciado: "Una roca tiene cristales grandes de tres colores (gris, blanco y negro). ¿Qué tipo de roca es y cómo se formó?",
      pasos: ["Los cristales grandes indican que el magma se enfrió despacio.", "Eso ocurre en el interior de la corteza: roca plutónica.", "Los tres minerales (cuarzo, feldespato y mica) son los del granito."],
      resultado: "Es una roca magmática plutónica, probablemente granito." },
    { enunciado: "En una cantera aparece una roca en capas con conchas fósiles que hace burbujas con vinagre. Identifícala.",
      pasos: ["Las capas (estratos) y los fósiles indican roca sedimentaria.", "Las burbujas con un ácido indican que tiene calcita.", "Roca sedimentaria de calcita con fósiles: caliza."],
      resultado: "Es caliza, una roca sedimentaria." },
  ],
  errores: [
    "Confundir mineral y roca: una roca es un conjunto de minerales.",
    "Identificar un mineral solo por su color, que puede variar mucho.",
    "Pensar que las rocas metamórficas se forman fundiendo otras rocas: no llegan a fundirse.",
    "Creer que el núcleo terrestre es todo líquido: el interno es sólido.",
    "Decir que la dureza es «lo difícil que es romperlo»: es la resistencia a ser rayado.",
  ],
  ejercicios: [
    { q: "Nombra las tres capas de la geosfera de fuera hacia dentro.", sol: "Corteza, manto y núcleo (externo líquido e interno sólido)." },
    { q: "¿Cómo se conoce el interior de la Tierra si nadie ha llegado allí?", sol: "Estudiando cómo viajan las ondas sísmicas de los terremotos, que cambian de velocidad según el material." },
    { q: "¿Por qué el vidrio no es un mineral?", sol: "Porque sus átomos no están ordenados en una estructura cristalina." },
    { q: "¿Qué es la raya de un mineral y por qué es más útil que el color?", sol: "El color del polvo del mineral; es más constante que el color del mineral entero." },
    { q: "¿Puede el yeso (2) rayar a la calcita (3)? ¿Y al revés?", sol: "El yeso no raya a la calcita; la calcita sí raya al yeso." },
    { q: "¿Qué es una mena? Pon dos ejemplos.", sol: "Un mineral del que se extrae un metal: hematites (hierro) y galena (plomo)." },
    { q: "¿Por qué el granito tiene cristales grandes y el basalto no?", sol: "El granito se enfrió despacio en el interior; el basalto, deprisa en la superficie." },
    { q: "Ordena las etapas de formación de una roca sedimentaria.", sol: "Erosión, transporte, depósito (sedimentación) y compactación o litificación." },
    { q: "¿En qué roca se convierte la caliza por metamorfismo? ¿Y la arcilla?", sol: "La caliza en mármol y la arcilla en pizarra." },
    { q: "¿Qué dos fuentes de energía mueven el ciclo de las rocas?", sol: "La energía interna de la Tierra y la energía del Sol (que mueve agua y viento)." },
  ],
  quiz: [
    { q: "La capa más externa de la geosfera es…", o: ["el manto", "la corteza", "el núcleo"], a: 1, e: "La corteza." },
    { q: "El núcleo está formado sobre todo por…", o: ["hierro y níquel", "granito", "agua"], a: 0, e: "Hierro y níquel." },
    { q: "Un mineral es…", o: ["orgánico", "inorgánico y cristalino", "siempre de un solo color"], a: 1, e: "Natural, inorgánico y cristalino." },
    { q: "El mineral más duro de la escala de Mohs es…", o: ["el cuarzo", "el diamante", "el talco"], a: 1, e: "El diamante (10)." },
    { q: "El talco se raya con…", o: ["la uña", "solo con diamante", "nada"], a: 0, e: "Dureza 1." },
    { q: "El granito es una roca…", o: ["sedimentaria", "magmática plutónica", "metamórfica"], a: 1, e: "Magmática plutónica." },
    { q: "Una roca que flota en el agua es…", o: ["la pómez", "el mármol", "la pizarra"], a: 0, e: "La pómez, llena de burbujas." },
    { q: "Los fósiles suelen aparecer en rocas…", o: ["volcánicas", "sedimentarias", "plutónicas"], a: 1, e: "Sedimentarias." },
    { q: "El mármol procede de…", o: ["la caliza", "el granito", "la arcilla"], a: 0, e: "De la caliza." },
    { q: "Las rocas metamórficas se forman por…", o: ["fusión total", "calor y presión sin fundirse", "erosión"], a: 1, e: "Calor y presión." },
  ],
  examen: [
    { q: "La pirita es dorada, pero su raya es…", o: ["dorada", "negra verdosa", "blanca"], a: 1, e: "Por eso la raya es más fiable." },
    { q: "La pizarra se usa en tejados porque…", o: ["se separa en láminas planas", "flota", "es blanda"], a: 0, e: "Por su foliación." },
    { q: "La bauxita es la mena del…", o: ["hierro", "aluminio", "cobre"], a: 1, e: "Del aluminio." },
  ],
  feynman: ["Qué diferencia hay entre un mineral y una roca", "Cómo se mide la dureza con la escala de Mohs", "Cómo se forman los tres tipos de rocas y cómo se relacionan en el ciclo"],
  mapa: mapa("GEOSFERA", "var(--eso)", [
    ["Capas", "corteza · manto · núcleo", COL.marron],
    ["Minerales", "cristales · dureza · raya", COL.azul],
    ["Rocas", "magmáticas · sedimentarias · metamórficas", COL.rojo],
    ["Ciclo y usos", "transformación · construcción", COL.verde],
  ], 300),
  tarjetas: [
    ["Geosfera", "Parte sólida de la Tierra: corteza, manto y núcleo."],
    ["Mineral", "Sustancia natural, inorgánica, sólida y cristalina."],
    ["Dureza", "Resistencia a ser rayado; escala de Mohs del 1 al 10."],
    ["Mena", "Mineral del que se extrae un metal."],
    ["Roca", "Material natural formado por uno o varios minerales."],
    ["Roca magmática", "Se forma al enfriarse el magma: granito, basalto."],
    ["Roca sedimentaria", "Se forma por depósito y compactación de sedimentos."],
    ["Roca metamórfica", "Se transforma por calor y presión sin fundirse."],
  ],
  familias: ["Buscad en casa y en la calle objetos hechos con rocas: encimeras, fachadas, aceras, tejados.", "Probad qué objetos raya una uña y cuáles una moneda: así se mide la dureza.", "Poned una gota de vinagre sobre una tiza o una piedra caliza y observad las burbujas."],
  profesores: {
    saberes: "Geosfera: estructura de la Tierra, minerales y sus propiedades, identificación de minerales y rocas, tipos de rocas y su origen, ciclo litológico, usos y explotación sostenible de los recursos geológicos (RD 217/2022, Biología y Geología, bloque Geología).",
    ideas: ["Práctica de identificación con una colección escolar y una clave dicotómica sencilla.", "Escala de Mohs casera con uña, moneda, navaja y vidrio.", "Ruta por el barrio identificando rocas de construcción."],
  },
  fuentes: [RD, wiki("Mineral", "Mineral"), wiki("Ciclo litológico", "Ciclo_litológico"), { t: "Instituto Geológico y Minero de España (IGME-CSIC)", url: "https://www.igme.es/" }],
  revisado: REV,
};
