// Lengua Castellana 2º de Primaria: la c y la qu, la g y la gu. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, charla, lista, mural, silabas: s } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "La c y la qu, la g y la gu",
  minutos: 25,
  objetivos: ["Escribir ca, que, qui, co, cu con su letra correcta", "Escribir ga, gue, gui, go, gu", "Saber cuándo se ponen los dos puntitos de güe y güi"],
  claves: ["ca", "que", "qui", "co", "cu", "ga", "gue", "gui", "diéresis"],
  pregunta: {
    texto: "«Casa» y «queso» empiezan con el mismo sonido. ¿Por qué una se escribe con c y la otra con qu?",
    respuesta: "Porque depende de la <mark>vocal</mark> que viene detrás. Con <b>a, o, u</b> usamos <b>c</b>: casa. Con <b>e, i</b> usamos <b>qu</b>: queso.",
  },
  bloques: [
    {
      html: `<h3>El sonido fuerte de la c</h3><p>El sonido «k» que oyes en <i>casa</i>, <i>queso</i> y <i>cuna</i> es el mismo. Pero <mark>se escribe de dos formas</mark>.</p><p>Con <b>a</b>, <b>o</b>, <b>u</b> se escribe con <b>c</b>: <i><b>ca</b>sa</i>, <i><b>co</b>nejo</i>, <i><b>cu</b>chara</i>.</p><p>Fíjate siempre en la vocal que va después. ¡Ella te dice qué letra poner!</p>`,
      svg: dibujos("Casa, conejo y cuchara, escritas con c", [["casa", s("ca|sa", R), K], ["conejo", s("co|nejo", R), K], ["cuchara", s("cu|chara", R), K]], { titulo: "ca · co · cu", nota: "Con a, o, u: c" }),
      video: V("cquB"),
    },
    {
      html: `<h3>Que y qui</h3><p>Con <b>e</b> y con <b>i</b>, el sonido «k» se escribe con <mark>qu</mark>: <b>que</b>, <b>qui</b>.</p><p><i><b>que</b>so</i>, <i>ma<b>qui</b>na</i>, <i>pa<b>que</b>te</i>, <i>mos<b>qui</b>to</i>.</p><p>¡La <b>u</b> de <i>que</i> y <i>qui</i> no suena! Está ahí solo para ayudar. Decimos «keso», pero escribimos <b>queso</b>.</p>`,
      svg: dibujos("Queso y mosquito, escritos con qu", [["queso", s("que|so", A), K], ["mosquito", s("mos|qui|to", A, 1), K]], { titulo: "que · qui", nota: "La u no suena" }),
    },
    {
      html: `<h3>La tabla de la c y la qu</h3><p>Aprende esta tabla como una <mark>canción</mark>: <b>ca, que, qui, co, cu</b>.</p><p>Fíjate: a, e, i, o, u. ¡Son las vocales en orden! Solo la e y la i llevan <b>qu</b>.</p><p>Si escribes «keso» o «cesu», alguien leerá mal. Por eso cada sonido tiene su forma correcta de escribirse.</p>`,
      svg: fichas("Tabla: ca, que, qui, co, cu", [["ca", R], ["que", A], ["qui", A], ["co", R], ["cu", R]], { titulo: "ca · que · qui · co · cu", nota: "Rojo: c · azul: qu", grande: true }),
    },
    {
      html: `<h3>El sonido suave de la g</h3><p>La <b>g</b> suena suave con <b>a</b>, <b>o</b>, <b>u</b>: <i><b>ga</b>to</i>, <i><b>go</b>rro</i>, <i><b>gu</b>sano</i>.</p><p>Pero con <b>e</b> e <b>i</b>, la g suena fuerte, como la j: <i><b>ge</b>nte</i>, <i><b>gi</b>rasol</i>.</p><p>Para el sonido suave con e, i, añadimos una <mark>u</mark>: <b>gue</b>, <b>gui</b>. ¡Igual que con la qu!</p>`,
      svg: dibujos("Gato, gorro y gusano, con g suave", [["gato", s("ga|to", Ve), K], ["gorro", s("go|rro", Ve), K], ["gusano", s("gu|sano", Ve), K]], { titulo: "ga · go · gu", nota: "Con a, o, u: g suave" }),
      video: V("cquB2"),
    },
    {
      html: `<h3>Gue y gui</h3><p>Con <b>gue</b> y <b>gui</b>, la <mark>u no suena</mark>. Solo ayuda a que la g sea suave.</p><p><i><b>gui</b>tarra</i>, <i>jugue<b>te</b></i>, <i>hormi<b>gue</b>ro</i>, <i><b>gui</b>sante</i>, <i>man<b>gue</b>ra</i>.</p><p>Decimos «gitarra» con g suave, pero escribimos <b>guitarra</b>. ¡No te olvides de la u!</p>`,
      svg: dibujos("Guitarra y juguete, escritos con gu", [["guitarra", s("gui|tarra", N), K], ["juguete", s("ju|gue|te", N, 1), K]], { titulo: "gue · gui", nota: "La u no suena" }),
    },
    {
      html: `<h3>Güe y güi: los dos puntitos</h3><p>A veces la <b>u</b> de <i>gue</i> y <i>gui</i> <mark>sí suena</mark>. Entonces le ponemos dos puntitos: <b>ü</b>.</p><p>Esos puntitos se llaman <b>diéresis</b>. <i>pin<b>güi</b>no</i>, <i>ci<b>güe</b>ña</i>, <i>para<b>güe</b>ro</i>.</p><p>Escucha bien: en <i>pingüino</i> la u suena: «pin-gu-i-no». ¡Por eso lleva diéresis!</p>`,
      svg: fichas("Sílabas con diéresis: güe y güi, como en cigüeña y pingüino", [["güe", R], ["güi", R]], { titulo: "La u suena: ü", nota: "pingüino · cigüeña · paragüero", grande: true }),
      video: V("cquV", "güe güi diéresis para niños"),
    },
    {
      html: `<h3>La tabla de la g</h3><p>Ahora la tabla de la g suave: <mark>ga, gue, gui, go, gu</mark>.</p><p>Y si la u suena: <b>güe</b>, <b>güi</b>.</p><p>Compara las dos tablas: <i>ca, que, qui, co, cu</i> y <i>ga, gue, gui, go, gu</i>. ¡Funcionan igual! En la e y la i siempre aparece una u ayudante.</p>`,
      svg: fichas("Tabla: ga, gue, gui, go, gu", [["ga", Ve], ["gue", N], ["gui", N], ["go", Ve], ["gu", Ve]], { titulo: "ga · gue · gui · go · gu", nota: "Verde: g · morado: gu", grande: true }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Escribir bien estas sílabas hace que <mark>todos te entiendan</mark>.</p><p>Si escribes «gitarra», se lee con sonido de j: ¡suena «jitarra»! Si escribes «keso», parece otro idioma.</p><p>Cuando escribas la lista de la compra o una nota, recuerda las dos tablas. ¡Queso, guisantes y aguacate!</p>`,
      svg: lista("Lista de la compra: queso, guisantes, aguacate y cacao", [["queso", A], ["guisantes", N], ["aguacate", Ve], ["cacao", R]], { titulo: "Mi lista de la compra", marca: "✓" }),
    },
    {
      html: `<h3>Juego: la ruleta de sílabas</h3><p>Escribid en tarjetas: <b>ca, que, qui, co, cu, ga, gue, gui, go, gu</b>.</p><p>Sacad una tarjeta y decid una <mark>palabra</mark> que la tenga: <i>que</i> → <i>queso</i>; <i>gui</i> → <i>guitarra</i>.</p><p>Si la escribís bien en la pizarra, ganáis un punto. ¡Atención a la u que no suena!</p>`,
      svg: charla("Juego: sale que y el niño dice queso; sale gui y la niña dice guitarra", [["nino", "¡Me sale «que»!", A], ["nina", "Queso o paquete.", R], ["nino", "¡Ahora «gui»!", A], ["nina", "¡Guitarra!", R]]),
    },
  ],
  figura: {
    titulo: "La c y la qu, la g y la gu",
    svg: mural("Ca co cu con c; que qui con qu; ga go gu con g; gue gui con gu; güe güi con diéresis", [["casa", "ca co cu", "con c", R], ["queso", "que qui", "con qu: la u no suena", A], ["gato", "ga go gu", "con g suave", Ve], ["guitarra", "gue gui", "güe güi si la u suena", N]], "Mira la vocal que va detrás para elegir la letra"),
  },
  video: V("cquV", "güe güi diéresis para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿«Mosquito» o «moscito»?",
      pasos: ["Escucha el sonido: «mos-ki-to», sonido fuerte.", "La vocal es la i.", "Con i, el sonido k se escribe qui."],
      resultado: "mosquito." },
    { enunciado: "Completa: hormi__ero (ge / gue).",
      pasos: ["El sonido es suave: «hor-mi-gue-ro».", "Con e y sonido suave ponemos gu.", "hormi + gue + ro."],
      resultado: "hormiguero." },
    { enunciado: "¿«Pinguino» o «pingüino»?",
      pasos: ["Di la palabra despacio: pin-gu-i-no.", "La u suena.", "Si la u suena en gui, lleva diéresis."],
      resultado: "pingüino." },
  ],
  errores: [
    "Escribir «keso» o «qeso»: es queso, con qu y una u que no suena.",
    "Olvidar la u en gue y gui: «gitarra» se leería con sonido de j.",
    "Poner qu con a, o, u: «quasa» está mal; es casa.",
    "Olvidar la diéresis cuando la u suena: pingüino, cigüeña.",
  ],
  ejercicios: [
    { q: "Di la tabla de la c y la qu.", sol: "ca, que, qui, co, cu." },
    { q: "Di la tabla de la g suave.", sol: "ga, gue, gui, go, gu." },
    { q: "Completa: __eso (que / ce).", sol: "queso." },
    { q: "Completa: __nejo (co / quo).", sol: "conejo." },
    { q: "Completa: má__ina (qui / ki).", sol: "máquina." },
    { q: "Completa: __sano (gu / ge).", sol: "gusano." },
    { q: "Completa: __itarra (g / gu).", sol: "guitarra." },
    { q: "Completa: ci__eña (gue / güe).", sol: "cigüeña: la u suena." },
    { q: "Escribe dos palabras con «que».", sol: "Por ejemplo: queso, paquete, pequeño." },
    { q: "¿Qué son los dos puntitos de la ü?", sol: "La diéresis: indica que la u suena." },
  ],
  quiz: [
    { q: "Con a, o, u, el sonido k se escribe con…", o: ["c", "qu", "k"], a: 0, e: "casa, cosa, cuna." },
    { q: "Con e, i, el sonido k se escribe con…", o: ["c", "qu", "g"], a: 1, e: "queso, quito." },
    { q: "¿Cuál está bien?", o: ["keso", "queso", "ceso"], a: 1, e: "queso." },
    { q: "¿Cuál está bien?", o: ["guitarra", "gitarra", "güitarra"], a: 0, e: "La u no suena." },
    { q: "En «que» la u…", o: ["suena", "no suena", "es mayúscula"], a: 1, e: "Solo ayuda." },
    { q: "¿Cuál lleva diéresis?", o: ["guerra", "pingüino", "guisante"], a: 1, e: "pin-gü-i-no." },
    { q: "La diéresis son…", o: ["dos puntitos sobre la u", "una raya", "una tilde"], a: 0, e: "ü." },
    { q: "Completa: ju__ete", o: ["ge", "gue", "güe"], a: 1, e: "juguete." },
    { q: "¿Cuál está bien?", o: ["cuchara", "quchara", "kuchara"], a: 0, e: "Con u: c." },
    { q: "Tabla de la g suave:", o: ["ga ge gi go gu", "ga gue gui go gu", "ja je ji jo ju"], a: 1, e: "Con gu en e, i." },
  ],
  examen: [
    { q: "Completa: pa__ete", o: ["que", "ce", "ke"], a: 0, e: "paquete." },
    { q: "Completa: man__era", o: ["ge", "gue", "güe"], a: 1, e: "manguera." },
    { q: "¿Cuál está bien?", o: ["cigueña", "cigüeña", "sigüeña"], a: 1, e: "La u suena." },
    { q: "¿Cuál está bien?", o: ["conejo", "quonejo", "konejo"], a: 0, e: "co: c." },
  ],
  feynman: ["Cuándo se escribe c y cuándo qu", "Cuándo se escribe g y cuándo gu", "Para qué sirve la diéresis"],
  mapa: mapa("C, QU, G, GU", "var(--pri)", [
    ["ca co cu", "casa, conejo, cuna", R],
    ["que qui", "queso, mosquito", A],
    ["ga gue gui go gu", "gato, guitarra, gusano", Ve],
    ["güe güi", "la u suena: pingüino", N],
  ], 240),
  tarjetas: [
    ["Tabla de la c", "ca, que, qui, co, cu"],
    ["Tabla de la g suave", "ga, gue, gui, go, gu"],
    ["¿Suena la u de «queso»?", "No"],
    ["¿Suena la u de «guitarra»?", "No"],
    ["¿Suena la u de «pingüino»?", "Sí: lleva diéresis"],
    ["¿Qué es la diéresis?", "Dos puntitos sobre la u: ü"],
    ["Escribe bien: «keso»", "queso"],
    ["Escribe bien: «gisante»", "guisante"],
  ],
  familias: [
    "Cantad las dos tablas como una canción: ca, que, qui, co, cu.",
    "Escribid juntos la lista de la compra con palabras con qu y gu.",
    "Buscad palabras con diéresis: pingüino, cigüeña, paragüero.",
    "Jugad a la ruleta de sílabas con tarjetas.",
  ],
  profesores: PROF("Ortografía: correspondencias c/qu y g/gu ante las distintas vocales, y uso de la diéresis en güe y güi", ["Tablas murales de ca-que-qui-co-cu y ga-gue-gui-go-gu.", "Bingo de palabras con qu y gu.", "Dictados cortos con palabras con diéresis."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir el sonido suave de la c y el fuerte de la g con e, i", "Escribir bien el plural de palabras acabadas en z", "Usar la k en las pocas palabras que la llevan", "Copiar y dictar palabras sin errores"],
  lectura: { titulo: "El dictado de Guille", html: `<p>Guillermo, al que todos llaman Guille, tiene un problema con los dictados. Siempre se le escapa alguna u o le sobra alguna otra.</p><p>Un día, la maestra dicta: «El águila vuela sobre la guitarra del pingüino».</p><p>Guille escribe «gitarra» y «pinguino».</p><p>—¿Cómo suena «gi»? —le pregunta la maestra.</p><p>—Como en «gigante»… ¡Uy! Entonces me falta la u: gui-tarra.</p><p>—¿Y en pingüino, suena la u?</p><p>Guille lo dice despacio: «pin-gü-i-no».</p><p>—¡Sí que suena! Entonces lleva los dos puntitos.</p><p>Desde ese día, Guille tiene un truco: antes de escribir, dice la palabra en voz baja y escucha bien cada sonido. En su estuche lleva una tarjetita con la tabla de la g y la qu.</p><p>En el siguiente dictado, ¡no tuvo ni un solo error! La maestra le puso una pegatina de un pingüino con guitarra.</p>` },
  tras: {
    "La tabla de la c y la qu": [
      ["La c suave: ce, ci", `<p>La letra c tiene <mark>dos sonidos</mark>:</p><ul><li>Con <b>a, o, u</b> suena fuerte: casa, cola, cuna.</li><li>Con <b>e, i</b> suena suave, como la z: <b>ce</b>bolla, <b>ci</b>ne, <b>ce</b>reza, <b>ci</b>ruela.</li></ul><p>Por eso escribimos <b>ce</b> y <b>ci</b>, y casi nunca «ze» o «zi». En cambio, con a, o, u usamos la z: <b>za</b>pato, <b>zo</b>rro, <b>zu</b>mo.</p><p>Fíjate en la tabla del sonido suave:</p><ul><li><b>za</b> – <b>ce</b> – <b>ci</b> – <b>zo</b> – <b>zu</b>.</li></ul><p>En algunas zonas de España, en Canarias y en América, este sonido se pronuncia como una <b>s</b>. Pero se escribe igual: cine, zapato.</p><p><b>Actividad</b>: busca en el supermercado o en casa alimentos con ce y ci: cebolla, cereales, ciruela…</p>`,
        L6.filas("Sonido suave", [["za", "zapato", cNA], ["ce", "cebolla", cVE], ["ci", "cine", cAZ], ["zo, zu", "zorro, zumo", cRO]]),
        ["Gvu8x2Nm0u0", "La Letra C (CECI) | Canción Infantil para Aprender CA CO CU CE CI", "Prof. Maria Fernanda", 3349787]],
    ],
    "Gue y gui": [
      ["La g fuerte: ge, gi", `<p>La g también tiene <mark>dos sonidos</mark>:</p><ul><li>Con <b>a, o, u</b> y con <b>ue, ui</b> suena suave: gato, goma, guerra, guitarra.</li><li>Con <b>e, i</b> suena fuerte, como la j: <b>ge</b>nte, <b>gi</b>gante, <b>gi</b>rasol, ma<b>gi</b>a.</li></ul><p>Es como la c: según la vocal que va detrás, cambia el sonido.</p><p>¡Ojo! El sonido fuerte con e, i a veces se escribe con <b>j</b>: <b>je</b>fe, <b>ji</b>rafa, <b>je</b>rsey. Para saber si va g o j, tenemos que fijarnos y memorizar las palabras. Un diccionario nos ayuda cuando dudamos.</p><p>Compara: <b>gi</b>tano / <b>gui</b>tarra. En la primera, la g suena fuerte; en la segunda, suave. ¡Por eso la segunda necesita la u!</p><p><b>Actividad</b>: haz dos columnas: palabras con ge, gi y palabras con gue, gui.</p>`,
        H6.dos("La g", ["SUAVE", ["ga go gu", "gue gui", "guitarra"], cAZ], ["FUERTE", ["ge gi", "gente", "gigante"], cRO]),
        ["kTUtZhrSzC4", "Silabas gue gui", "Mi Jardin Infantil", 918519]],
    ],
    "Güe y güi: los dos puntitos": [
      ["El plural de las palabras con z", `<p>Las palabras que terminan en <mark>z</mark> cambian la z por <b>c</b> cuando las ponemos en plural:</p><ul><li>pez → <b>peces</b>.</li><li>lápiz → <b>lápices</b>.</li><li>nariz → <b>narices</b>.</li><li>luz → <b>luces</b>.</li><li>voz → <b>voces</b>.</li></ul><p>¿Por qué? Porque en plural añadimos <b>-es</b>, y delante de la e no escribimos z, sino c. ¡Es la regla de ce, ci!</p><p>Lo mismo pasa con algunos verbos: <b>cazar</b> → yo ca<b>c</b>é; <b>rezar</b> → yo re<b>c</b>é.</p><p>Si dudas, di el plural en voz alta: «pe-ces». Suena ce, así que escribimos c.</p><p><b>Actividad</b>: escribe en plural: cruz, actriz, disfraz, avestruz.</p>`,
        H6.flujo("Plural", ["pez|singular", "+ es|pez-es", "z → c|delante de e", "peces|¡listo!"], cAZ)],
    ],
    "La tabla de la g": [
      ["La k: una letra con pocas palabras", `<p>El sonido fuerte de la c (ca, que, qui, co, cu) también se puede escribir con la letra <mark>k</mark>. Pero hay muy pocas palabras con k en español.</p><p>Casi todas vienen de <b>otros idiomas</b>:</p><ul><li><b>kilo</b> y <b>kilómetro</b>.</li><li><b>kiwi</b>, la fruta.</li><li><b>koala</b>, el animal de Australia.</li><li><b>kárate</b>, el deporte de Japón.</li><li><b>kétchup</b>.</li></ul><p>Algunas se pueden escribir de dos formas: <b>kiosco</b> o <b>quiosco</b>, <b>biquini</b> o bikini.</p><p>Como son pocas, es fácil aprenderlas. Para el resto de las palabras usamos c o qu.</p><p><b>Actividad</b>: haz un dibujo de un koala comiendo un kiwi en un kiosco y escribe las palabras con k.</p>`,
        H6.rueda("Con k", "K", [["kilo", cNA], ["kiwi", cVE], ["koala", cMO], ["kárate", cRO]])],
    ],
  },
  final: [
    ["Copiar y dictar sin errores", `<p>Para escribir bien c, qu, z, g, gu y gü, te ayudarán estos <mark>trucos</mark>:</p><ul><li><b>Escucha</b> la palabra despacio, sílaba a sílaba.</li><li><b>Fíjate en la vocal</b> que viene detrás: e, i o a, o, u.</li><li><b>Pregúntate</b>: ¿suena fuerte o suave? ¿Suena la u?</li><li><b>Revisa</b> al terminar: lee lo que has escrito en voz baja.</li></ul><p>Cuando copies, mira la palabra entera, tápala y escríbela de memoria. Después, destápala y compara. Este truco se llama <b>mirar, tapar, escribir y comprobar</b>.</p><p>Hacer un <b>cuaderno de palabras difíciles</b> también ayuda: cada vez que te equivoques en una, la apuntas bien escrita y la repasas.</p><p><b>Actividad</b>: haz un dictado por parejas con diez palabras de este tema y corrígelo con tu compañero.</p>`,
      L6.filas("Truco", [["1", "mirar", cAZ], ["2", "tapar", cNA], ["3", "escribir", cVE], ["4", "comprobar", cRO]])],
    ["Repaso: el dictado de Guille", `<p>Repasamos las palabras difíciles de la <mark>lectura</mark>:</p><ul><li><b>Guille</b>: gui, con u que no suena.</li><li><b>águila</b>: gui, con u que no suena.</li><li><b>guitarra</b>: gui. Guille escribió «gitarra», pero así sonaría como «gigante».</li><li><b>pingüino</b>: güi, con diéresis porque la u suena.</li><li><b>pegatina</b>: ga, sin u.</li><li><b>maestra dicta</b>: ca, con c fuerte.</li><li><b>siguiente</b>: gui.</li></ul><p>Más ejemplos para practicar:</p><ul><li>Plurales con z: un pez → dos <b>peces</b>; un lápiz → tres <b>lápices</b>.</li><li>Palabras con k: <b>kiwi</b>, <b>koala</b>.</li><li>Sonido suave: <b>cebolla</b>, <b>cine</b>, <b>zapato</b>.</li></ul><p><b>Actividad</b>: inventa una frase loca con un pingüino, una guitarra, unos peces y un kiwi.</p>`,
      H6.dos("Guille", ["ANTES", ["gitarra", "pinguino", "errores"], cRO], ["DESPUÉS", ["guitarra", "pingüino", "¡ninguno!"], cVE])],
  ],
  ejemplos: [
    ["Escribe el plural de «luz».", ["Añado -es: luz-es.", "Delante de e, z → c."], "Luces."],
    ["¿«Gitarra» o «guitarra»?", ["Suena suave, como gato.", "Con i necesito gu."], "Guitarra."],
  ],
  errores: ["Escribir «pezes» o «lápizes».", "Escribir «gitarra» en lugar de «guitarra»."],
  ejercicios: [
    ["b", "Escribe dos palabras con ce o ci.", "Cebolla, cine…"],
    ["b", "Escribe dos palabras con ge o gi.", "Gente, gigante…"],
    ["b", "Plural de «pez».", "Peces."],
    ["b", "Di dos palabras con k.", "Kilo, kiwi, koala…"],
    ["b", "¿Suena fuerte o suave la g de «girasol»?", "Fuerte."],
    ["m", "Plural de: nariz, voz, cruz.", "Narices, voces, cruces."],
    ["m", "Completa: …itarra, …gante (g o gu).", "Guitarra, gigante."],
    ["m", "Completa: …apato, …ine (z o c).", "Zapato, cine."],
    ["m", "¿Por qué «gitano» no lleva u?", "Porque su g suena fuerte."],
    ["m", "Escribe «quiosco» de otra forma.", "Kiosco."],
    ["a", "En la lectura, ¿qué dos errores cometió Guille?", "Escribió «gitarra» y «pinguino»."],
    ["a", "Explica por qué «pez» se escribe «peces» en plural.", "Porque delante de e la z cambia a c."],
    ["a", "Escribe una frase con güe, gui, ce y k.", "Respuesta libre."],
    ["a", "Explica el truco mirar, tapar, escribir y comprobar.", "Miro la palabra, la tapo, la escribo de memoria y la comparo."],
  ],
  quiz: [
    ["El plural de «lápiz» es…", ["lápices", "lápizes", "lápiz"], "Plural z."],
    ["«Ge» y «gi» suenan…", ["fuerte, como j", "suave, como gato", "como la c"], "La g."],
    ["Las palabras con k suelen venir de…", ["otros idiomas", "el latín siempre", "los números"], "La k."],
    ["Ce y ci suenan como…", ["za, zo, zu", "ca, co, cu", "ga, go, gu"], "La c."],
    ["El truco de copiar es mirar, tapar, escribir y…", ["comprobar", "borrar", "dibujar"], "Copiar."],
  ],
  examen: [
    ["En la lectura, ¿qué pegatina recibe Guille?", ["un pingüino con guitarra", "una cebra", "un koala"], "Lectura."],
    ["¿Qué palabra lleva diéresis?", ["pingüino", "guitarra", "águila"], "Repaso."],
  ],
  tarjetas: [
    ["Plural en z", "z → c: pez, peces."],
    ["g fuerte", "ge, gi, como gente y gigante."],
  ],
  glosario: [
    ["Sonido fuerte", "Ca, que, qui, co, cu; ge, gi."],
    ["Sonido suave", "Za, ce, ci, zo, zu; ga, gue, gui."],
    ["Diéresis", "Dos puntitos sobre la u: ü."],
    ["Plural", "Más de uno."],
    ["Dictado", "Escribir lo que otra persona dice."],
    ["Copiar", "Escribir lo que vemos escrito."],
    ["Kiwi", "Fruta verde por dentro, con piel marrón."],
    ["Koala", "Animal de Australia que come eucalipto."],
    ["Revisar", "Volver a leer para buscar errores."],
    ["Pingüino", "Ave que no vuela y nada en el mar."],
  ],
  situacion: {
    titulo: "El diccionario de sonidos",
    reto: "La clase crea un mural con la tabla de c, qu, z, g, gu, gü y k, con palabras e ilustraciones de cada sonido.",
    pasos: ["Recoger palabras con cada sílaba: ca, que, ce, za, ga, gue, ge, güe, k.", "Clasificarlas en sonido fuerte y suave.", "Escribir los plurales de palabras acabadas en z.", "Hacer un dictado por parejas y corregirlo."],
    producto: "Un mural de sonidos con palabras y dibujos.",
    evaluacion: ["Escribe bien ce, ci, ge, gi.", "Usa gu y gü correctamente.", "Hace el plural de palabras en z.", "Revisa sus dictados."],
  },
});
