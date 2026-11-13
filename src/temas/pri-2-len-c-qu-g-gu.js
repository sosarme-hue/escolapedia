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
