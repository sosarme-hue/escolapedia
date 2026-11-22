// Ciencias de la Naturaleza 5º de Primaria: los reinos de los seres vivos. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, arbol, flor } = require("./_pri5b");

// Seta sencilla.
const seta = (x, y, s = 1, c = "var(--red)") => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-6" y="-24" width="12" height="24" rx="4" fill="#fef3c7" stroke="#a16207" stroke-width="1.5"/><path d="M-26 -22 q26 -34 52 0z" fill="${c}" stroke="#7f1d1d" stroke-width="1.5"/><circle cx="-10" cy="-32" r="3" fill="#fff"/><circle cx="6" cy="-36" r="3" fill="#fff"/><circle cx="14" cy="-28" r="2.5" fill="#fff"/></g>`;
// Bacteria en forma de bastón.
const bacteria = (x, y, c = "#22c55e") => `<rect x="${x - 16}" y="${y - 7}" width="32" height="14" rx="7" fill="${c}" fill-opacity=".5" stroke="${c}" stroke-width="2"/><path d="M${x + 16} ${y} q8 -6 14 2" stroke="${c}" stroke-width="1.5" fill="none"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Los reinos de los seres vivos",
  minutos: 45,
  objetivos: ["Explicar por qué clasificamos a los seres vivos", "Conocer los criterios que se usan para clasificar", "Describir los cinco reinos: animales, plantas, hongos, protoctistas y bacterias", "Reconocer ejemplos de cada reino", "Valorar la importancia de los microorganismos"],
  claves: ["clasificación", "especie", "reino", "célula con núcleo", "unicelular", "pluricelular", "autótrofo", "heterótrofo", "reino animal", "reino de las plantas", "reino de los hongos", "protoctistas", "bacterias", "microorganismo"],
  pregunta: {
    texto: "Una seta crece en el suelo como una planta, no se mueve y no tiene patas. ¿Es una planta?",
    respuesta: "No. Las setas pertenecen a otro grupo: el <mark>reino de los hongos</mark>. A diferencia de las plantas, los hongos <b>no tienen clorofila</b> y no pueden fabricar su alimento con la luz del sol: se alimentan de restos de otros seres vivos. Por eso los científicos los separan en su propio reino.",
  },
  bloques: [
    {
      html: `<h3>¿Por qué clasificamos a los seres vivos?</h3><p>En la Tierra se conocen cerca de <b>dos millones</b> de tipos distintos de seres vivos, y cada año se descubren miles nuevos. Para estudiarlos y entenderlos, los científicos los ordenan en grupos según sus parecidos. Eso es <mark>clasificar</mark>.</p><p>Clasificar es como ordenar una biblioteca: si los libros estuvieran amontonados sin orden, sería imposible encontrar uno. En cambio, si los separamos por temas, luego por autores y luego por títulos, enseguida localizamos lo que buscamos.</p><p>Cada tipo de ser vivo se llama <mark>especie</mark>. Una especie es un grupo de seres vivos muy parecidos entre sí que pueden tener descendencia que, a su vez, también puede tener hijos. Por ejemplo, todos los perros forman una especie, aunque un chihuahua y un gran danés sean muy distintos.</p><p>Las especies parecidas se agrupan en grupos más grandes, y estos en otros todavía mayores. El grupo más grande de todos es el <mark>reino</mark>. Los científicos suelen hablar de <b>cinco reinos</b>.</p>`,
      svg: svg("Muchos seres vivos se ordenan en grupos, del más pequeño (especie) al más grande (reino)", `${tit("Ordenar para entender")}${columna([["reino", COL.azul], ["grupos intermedios", COL.verde], ["especie", COL.naranja]], 130, 190, 38, 24, 12)}${tx(130, 162, "unos 2 millones de especies conocidas", 236, { weight: 700, color: COL.rojo })}`),
      video: vid("0KS6HksRiQo"),
    },
    {
      html: `<h3>¿Cómo se clasifica? Los criterios</h3><p>Para decidir a qué reino pertenece un ser vivo, los científicos se fijan en varias características llamadas <b>criterios de clasificación</b>:</p><p>1. <b>Tipo de célula</b>: ¿sus células tienen <b>núcleo</b> o no? Las bacterias son las únicas cuyas células no tienen núcleo; su material genético está suelto.</p><p>2. <b>Número de células</b>: ¿es <b>unicelular</b> (una sola célula) o <b>pluricelular</b> (muchas células)?</p><p>3. <b>Tipo de nutrición</b>: ¿fabrica su propio alimento o lo toma de otros seres vivos? Los seres que fabrican su alimento, como las plantas, se llaman <mark>autótrofos</mark>. Los que se alimentan de otros seres vivos o de sus restos, como los animales o los hongos, se llaman <mark>heterótrofos</mark>.</p><p>4. <b>Otras características</b>: si tiene tejidos y órganos, si se puede desplazar, cómo se reproduce…</p><p>Respondiendo a estas preguntas, como en un juego de adivinanzas, podemos llegar al reino de cualquier ser vivo.</p>`,
      svg: svg("Tres preguntas para clasificar: núcleo, número de células y tipo de nutrición", `${tit("Tres preguntas clave")}${filas([["¿núcleo?", "sí o no", COL.morado], ["¿células?", "una o muchas", COL.agua], ["¿alimento?", "lo fabrica o lo toma", COL.verde]], 60, 38, { x: 22, wa: 84, wb: 128 })}${tx(130, 166, "autótrofo = fabrica · heterótrofo = toma", 236, { weight: 700, color: COL.azul })}`),
    },
    {
      html: `<h3>El reino de los animales</h3><p>El <mark>reino animal</mark> incluye seres tan distintos como una medusa, una hormiga, un tiburón o una persona. Todos comparten estas características:</p><p>• Son <b>pluricelulares</b> y tienen células con núcleo, sin pared celular.<br>• Son <b>heterótrofos</b>: se alimentan de otros seres vivos (plantas, otros animales o ambos).<br>• Casi todos tienen <b>tejidos, órganos y aparatos</b>.<br>• La mayoría puede <b>desplazarse</b> para buscar comida, huir o encontrar pareja. Algunos, como las esponjas o los corales, viven fijos.<br>• Tienen <b>sistema nervioso</b> y sentidos que les permiten reaccionar rápido.</p><p>Se dividen en dos grandes grupos: los <b>vertebrados</b>, que tienen columna vertebral (mamíferos, aves, reptiles, anfibios y peces), y los <b>invertebrados</b>, que no la tienen (insectos, arañas, moluscos, gusanos, medusas…). Los invertebrados son muchísimos más: alrededor del 95 % de las especies animales.</p><p>Estudiaremos este reino con detalle en el tema de clasificación de los animales.</p>`,
      svg: svg("Reino animal: pluricelulares, heterótrofos y la mayoría se desplazan; vertebrados e invertebrados", `${tit("Reino animal")}${filas([["pluricelulares", "muchas células", COL.rojo], ["heterótrofos", "comen a otros", COL.naranja], ["se mueven", "la mayoría", COL.azul]], 52, 28, { x: 20, wa: 100, wb: 110 })}${cj2(14, 134, 112, 38, "Vertebrados", "con columna", COL.azul)}${cj2(134, 134, 112, 38, "Invertebrados", "sin columna: 95 %", COL.verde)}`),
    },
    {
      html: `<h3>El reino de las plantas</h3><p>El <mark>reino de las plantas</mark> incluye desde los musgos, pequeñitos y blandos, hasta las secuoyas, árboles de más de cien metros. Sus características son:</p><p>• Son <b>pluricelulares</b>, con células que tienen núcleo y una <b>pared celular</b> rígida.<br>• Son <b>autótrofas</b>: fabrican su propio alimento mediante la <b>fotosíntesis</b>, gracias a la <b>clorofila</b>, el pigmento verde que captura la luz del sol.<br>• Tienen tejidos y casi todas tienen órganos: <b>raíz</b>, <b>tallo</b> y <b>hojas</b>.<br>• <b>No se desplazan</b>: viven fijas al suelo, aunque pueden mover sus hojas o sus flores hacia la luz.</p><p>Se dividen en dos grandes grupos:</p><p>• <b>Plantas sin flores</b>: los <b>musgos</b>, que no tienen raíces verdaderas y viven en lugares húmedos, y los <b>helechos</b>, que se reproducen por esporas que se ven como puntitos marrones bajo sus hojas.</p><p>• <b>Plantas con flores</b>: forman semillas. Algunas tienen las semillas dentro de un <b>fruto</b>, como el manzano o el trigo; otras, como el pino, las tienen en <b>piñas</b>.</p><p>Las plantas producen el oxígeno que respiramos y son la base de la alimentación de casi todos los animales.</p>`,
      svg: svg("Reino de las plantas: musgo, helecho y planta con flores; fabrican su alimento con la luz", `${tit("Reino de las plantas")}<path d="M28 150 q6 -20 12 0 q6 -24 12 0 q6 -18 12 0" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>${et(46, 168, "musgo", 60, { size: 11, color: COL.verde })}<path d="M110 150 q-4 -60 -30 -78 M110 150 q4 -60 30 -78 M110 150 V70" stroke="#15803d" stroke-width="2" fill="none"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M${96 - i * 3} ${130 - i * 14} l-10 -4 M${124 + i * 3} ${130 - i * 14} l10 -4 M110 ${126 - i * 12} l-8 -4 M110 ${126 - i * 12} l8 -4" stroke="#22c55e" stroke-width="3"/>`).join("")}${et(110, 168, "helecho", 60, { size: 11, color: COL.verde })}${flor(196, 150, "var(--red)")}${flor(214, 150, "#8b5cf6")}${et(204, 168, "con flores", 80, { size: 11, color: COL.verde })}${tx(130, 50, "autótrofas: fotosíntesis", 200, { weight: 700, color: COL.sol })}`),
    },
    {
      html: `<h3>El reino de los hongos</h3><p>El <mark>reino de los hongos</mark> es un grupo muy curioso. Durante mucho tiempo se pensó que eran plantas, pero son muy diferentes:</p><p>• Tienen células con núcleo y pared celular, pero <b>no tienen clorofila</b>. Por eso no pueden hacer la fotosíntesis.<br>• Son <b>heterótrofos</b>: se alimentan de restos de otros seres vivos (hojas caídas, madera, fruta) o viven sobre otros seres vivos.<br>• No tienen raíz, tallo ni hojas, y <b>no se desplazan</b>.<br>• Se reproducen por <b>esporas</b>, unas células diminutas que se dispersan por el aire.</p><p>Hay hongos <b>pluricelulares</b> y <b>unicelulares</b>:</p><p>• Las <b>setas</b> son solo la parte visible de un hongo. El resto es una red de hilos finísimos bajo tierra llamada <b>micelio</b>. ¡Cuidado! Muchas setas son venenosas: nunca se deben coger ni comer sin que un experto las revise.<br>• Los <b>mohos</b> son las manchas peludas verdes, blancas o negras que aparecen en el pan o la fruta viejos.<br>• Las <b>levaduras</b> son hongos unicelulares. Se usan para hacer pan, porque producen gas que hincha la masa.</p>`,
      svg: svg("Reino de los hongos: seta con micelio bajo tierra, moho y levaduras", `${tit("Reino de los hongos")}${seta(64, 122, 1.4)}<path d="M20 124 H110" stroke="#a16207" stroke-width="2"/><path d="M64 124 q-20 14 -36 16 M64 124 q4 18 -6 30 M64 124 q20 12 34 14 M64 124 q14 18 22 28" stroke="#d6d3d1" stroke-width="1.5" fill="none"/>${et(64, 172, "seta + micelio", 100, { size: 11, color: COL.rojo })}${[[160, 70], [176, 64], [190, 72], [168, 82], [184, 86]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#86efac" stroke="#15803d"/>`).join("")}${et(176, 104, "moho", 70, { size: 11, color: COL.verde })}${[[160, 138], [176, 132], [190, 140]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="5" fill="#fde68a" stroke="#c98a00"/>`).join("")}${et(176, 166, "levaduras", 80, { size: 11, color: COL.sol })}`),
      video: vid("KNgS8vkB0Eo"),
    },
    {
      html: `<h3>El reino de los protoctistas</h3><p>El <mark>reino de los protoctistas</mark> (también llamados protistas) reúne a seres vivos que no encajan en los otros reinos. Tienen <b>células con núcleo</b> y la mayoría son <b>unicelulares</b> y viven en el agua o en lugares húmedos. Hay dos grupos principales:</p><p>• Los <b>protozoos</b>: son unicelulares y <b>heterótrofos</b>, como pequeños animales de una sola célula. Se desplazan de distintas maneras: la <b>ameba</b> cambia de forma y estira «pies falsos»; el <b>paramecio</b> está cubierto de pelillos que mueve como remos; otros tienen un látigo para nadar. Algunos causan enfermedades, como el que provoca la malaria, que transmiten los mosquitos.</p><p>• Las <b>algas</b>: son <b>autótrofas</b>, tienen clorofila y hacen la fotosíntesis como las plantas. Las hay unicelulares, que flotan en el mar formando parte del <b>plancton</b>, y pluricelulares, como las grandes algas que ves en las rocas de la playa. Aunque no tienen raíz, tallo ni hojas verdaderas, las algas del océano producen una gran parte del oxígeno del planeta.</p>`,
      svg: svg("Reino de los protoctistas: protozoos como la ameba y el paramecio, y algas", `${tit("Reino de los protoctistas")}<path d="M24 84 q8 -26 30 -18 q24 -12 30 10 q14 18 -6 28 q-14 16 -32 4 q-28 0 -22 -24z" fill="#bae6fd" stroke="var(--water)" stroke-width="2"/><circle cx="54" cy="86" r="6" fill="#c4b5fd"/>${et(54, 128, "ameba", 70, { size: 11, color: COL.agua })}<ellipse cx="130" cy="86" rx="34" ry="16" fill="#fde68a" stroke="#c98a00" stroke-width="2"/>${[...Array(16)].map((_, i) => { const a = (i / 16) * 2 * Math.PI; return `<path d="M${(130 + 34 * Math.cos(a)).toFixed(1)} ${(86 + 16 * Math.sin(a)).toFixed(1)} l${(5 * Math.cos(a)).toFixed(1)} ${(5 * Math.sin(a)).toFixed(1)}" stroke="#c98a00" stroke-width="1.5"/>`; }).join("")}${et(130, 128, "paramecio", 80, { size: 11, color: COL.sol })}<path d="M206 150 q-12 -30 4 -50 q12 -20 0 -40 M216 150 q10 -26 -2 -46 q-8 -20 8 -40" stroke="#15803d" stroke-width="6" fill="none" stroke-linecap="round"/>${et(214, 168, "algas", 60, { size: 11, color: COL.verde })}${tx(90, 152, "protozoos: heterótrofos", 140)}${tx(90, 168, "algas: autótrofas", 140)}`),
      video: vid("3yN3PcyYOnw"),
    },
    {
      html: `<h3>El reino de las bacterias</h3><p>El <mark>reino de las bacterias</mark> (también llamado reino moneras) agrupa a los seres vivos más pequeños y sencillos que existen. Sus características son:</p><p>• Son <b>unicelulares</b>.<br>• Sus células <b>no tienen núcleo</b>: es la gran diferencia con todos los demás reinos.<br>• Las hay <b>autótrofas</b> y <b>heterótrofas</b>.<br>• Son tan pequeñas que en la cabeza de un alfiler cabrían miles de ellas.</p><p>Por su forma se distinguen: los <b>cocos</b> (redondos), los <b>bacilos</b> (alargados, como bastones), los <b>espirilos</b> (en espiral) y los <b>vibrios</b> (en forma de coma).</p><p>Las bacterias viven en <b>todas partes</b>: en el suelo, en el agua, en el aire, en volcanes, en el hielo y dentro de nuestro cuerpo. Fueron los primeros seres vivos de la Tierra, hace más de 3.500 millones de años.</p><p>Se reproducen muy deprisa: una bacteria se divide en dos, cada una de ellas en otras dos… En pocas horas, de una sola bacteria pueden salir millones.</p>`,
      svg: svg("Formas de las bacterias: cocos, bacilos, espirilos y vibrios; no tienen núcleo", `${tit("Reino de las bacterias")}${[[44, 70], [58, 64], [52, 82]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#86efac" stroke="#15803d" stroke-width="2"/>`).join("")}${et(52, 108, "cocos", 60, { size: 11, color: COL.verde })}${bacteria(124, 74)}${et(124, 108, "bacilos", 70, { size: 11, color: COL.verde })}<path d="M180 74 q6 -10 12 0 q6 10 12 0 q6 -10 12 0 q6 10 12 0" stroke="#8b5cf6" stroke-width="4" fill="none"/>${et(208, 108, "espirilos", 70, { size: 11, color: COL.morado })}<path d="M70 140 q12 -16 24 -4" stroke="#e8892c" stroke-width="5" fill="none" stroke-linecap="round"/>${et(82, 166, "vibrios", 70, { size: 11, color: COL.naranja })}${cj(140, 130, 108, 34, "sin núcleo", COL.rojo)}`),
    },
    {
      html: `<h3>Los microorganismos: buenos y malos</h3><p>Los <mark>microorganismos</mark> o microbios son los seres vivos tan pequeños que solo se ven con microscopio: las bacterias, muchos protoctistas y algunos hongos como las levaduras. Mucha gente piensa que todos son malos, pero la mayoría son <b>beneficiosos</b> o inofensivos.</p><p><b>Microorganismos útiles:</b></p><p>• Las bacterias del <b>yogur</b> y del queso transforman la leche.<br>• Las <b>levaduras</b> hacen subir el pan.<br>• Las bacterias de nuestro <b>intestino</b> nos ayudan a digerir y fabrican vitaminas.<br>• Los <b>descomponedores</b> transforman los restos de seres muertos en abono para el suelo.<br>• Algunos hongos producen <b>antibióticos</b>, medicinas que matan bacterias dañinas. El primero, la <b>penicilina</b>, lo descubrió Alexander Fleming en 1928 en un moho.</p><p><b>Microorganismos perjudiciales:</b> algunos causan enfermedades, como la caries, la salmonelosis o la tuberculosis. Para protegernos: lavarnos las manos, cocinar bien los alimentos, guardarlos en la nevera y vacunarnos.</p><p>¿Y los <b>virus</b>? No son seres vivos de ningún reino: no tienen células y solo pueden multiplicarse dentro de las células de otro ser vivo.</p>`,
      svg: svg("Microbios útiles: yogur, pan, intestino, abono y antibióticos; protección: lavarse las manos", `${tit("Microbios útiles")}${fichas([["Yogur y queso", "bacterias", COL.azul], ["Pan", "levaduras", COL.sol], ["Abono", "descomponedores", COL.verde], ["Penicilina", "un moho, 1928", COL.morado]])}`),
    },
    {
      html: `<h3>Los cinco reinos de un vistazo</h3><p>Esta tabla resume lo más importante de cada reino. Úsala para repasar:</p>${tabla(["Reino", "Células", "¿Núcleo?", "Nutrición", "Ejemplos"], [["Animales", "pluricelulares", "sí", "heterótrofa", "perro, abeja, pulpo"], ["Plantas", "pluricelulares", "sí", "autótrofa", "pino, rosal, musgo"], ["Hongos", "uni o pluricelulares", "sí", "heterótrofa", "seta, moho, levadura"], ["Protoctistas", "casi todos unicelulares", "sí", "auto o heterótrofa", "ameba, alga"], ["Bacterias", "unicelulares", "no", "auto o heterótrofa", "bacilo del yogur"]])}<p>Un truco para clasificar cualquier ser vivo:</p><p>1. ¿Sus células tienen núcleo? Si <b>no</b>, es una <b>bacteria</b>.<br>2. Si tiene núcleo y es <b>unicelular</b>, probablemente es un <b>protoctista</b> (o una levadura).<br>3. Si es pluricelular y <b>hace la fotosíntesis</b> y tiene raíz, tallo y hojas: <b>planta</b>.<br>4. Si es pluricelular, no tiene clorofila y se alimenta de restos con esporas: <b>hongo</b>.<br>5. Si es pluricelular, come a otros y casi siempre se mueve: <b>animal</b>.</p>`,
      svg: svg("Los cinco reinos: animales, plantas, hongos, protoctistas y bacterias", `${tit("Los cinco reinos")}${cj(10, 40, 116, 30, "animales", COL.rojo)}${cj(134, 40, 116, 30, "plantas", COL.verde)}${cj(10, 82, 116, 30, "hongos", COL.marron)}${cj(134, 82, 116, 30, "protoctistas", COL.agua)}${cj(72, 124, 116, 30, "bacterias", COL.morado)}${tx(130, 172, "solo las bacterias no tienen núcleo", 236, { weight: 700 })}`),
    },
  ],
  figura: {
    titulo: "Los cinco reinos en ocho ideas",
    svg: rejilla([
      ["Clasificar", "ordenar por parecidos", COL.azul],
      ["Especie", "seres iguales con hijos fértiles", COL.naranja],
      ["Autótrofo", "fabrica su alimento", COL.verde],
      ["Heterótrofo", "toma alimento de otros", COL.rojo],
      ["Animales y plantas", "pluricelulares con núcleo", COL.sol],
      ["Hongos", "sin clorofila, esporas", COL.marron],
      ["Protoctistas", "ameba, paramecio, algas", COL.agua],
      ["Bacterias", "unicelulares sin núcleo", COL.morado],
    ], 4, 86, "Resumen de los cinco reinos de los seres vivos"),
  },
  video: vgen("0KS6HksRiQo", "los cinco reinos de los seres vivos primaria"),
  ejemplos: [
    { enunciado: "Un ser vivo es pluricelular, no tiene clorofila, vive sobre un tronco caído y suelta esporas. ¿A qué reino pertenece?",
      pasos: ["Es pluricelular: no es bacteria ni (casi seguro) protoctista.", "No tiene clorofila: no es una planta.", "Se alimenta de restos y suelta esporas: es lo típico de los hongos."],
      resultado: "Pertenece al reino de los hongos (por ejemplo, una seta)." },
    { enunciado: "Clasifica como autótrofo o heterótrofo: alga, ameba, encina, champiñón, gato.",
      pasos: ["Son autótrofos los que hacen la fotosíntesis: tienen clorofila.", "El alga y la encina tienen clorofila.", "La ameba, el champiñón y el gato toman el alimento de otros seres vivos."],
      resultado: "Autótrofos: alga y encina. Heterótrofos: ameba, champiñón y gato." },
    { enunciado: "Al microscopio ves una célula diminuta con forma de bastón y sin núcleo. ¿Qué es?",
      pasos: ["El único reino sin núcleo es el de las bacterias.", "La forma de bastón corresponde a un bacilo."],
      resultado: "Es una bacteria del tipo bacilo." },
  ],
  errores: [
    "Pensar que las setas son plantas: son hongos, no tienen clorofila.",
    "Creer que las algas son plantas: pertenecen al reino de los protoctistas.",
    "Decir que todos los microbios son malos: la mayoría son útiles o inofensivos.",
    "Incluir los virus en algún reino: no son seres vivos con células.",
    "Confundir autótrofo y heterótrofo: autótrofo fabrica su alimento; heterótrofo lo toma de otros.",
  ],
  ejercicios: [
    { q: "¿Para qué sirve clasificar a los seres vivos?", sol: "Para ordenarlos en grupos según sus parecidos y así poder estudiarlos, nombrarlos y encontrarlos con facilidad." },
    { q: "¿Qué es una especie? Pon un ejemplo.", sol: "Un grupo de seres vivos muy parecidos que pueden tener descendencia fértil. Ejemplo: el perro, el lobo o el ser humano." },
    { q: "Escribe tres criterios para clasificar seres vivos.", sol: "Si sus células tienen núcleo, si son unicelulares o pluricelulares y si son autótrofos o heterótrofos." },
    { q: "Escribe dos diferencias entre los hongos y las plantas.", sol: "Los hongos no tienen clorofila y son heterótrofos; las plantas tienen clorofila y son autótrofas. Además, los hongos se reproducen por esporas y no tienen raíz, tallo ni hojas." },
    { q: "Nombra los dos grupos de protoctistas y di cómo se alimenta cada uno.", sol: "Protozoos, heterótrofos; y algas, autótrofas." },
    { q: "¿Qué tienen de especial las bacterias respecto a los demás reinos?", sol: "Que sus células no tienen núcleo." },
    { q: "Dibuja y nombra tres formas de bacterias.", sol: "Cocos (redondos), bacilos (bastones) y espirilos (espirales); también vibrios (comas)." },
    { q: "Escribe tres ejemplos de microorganismos útiles.", sol: "Bacterias del yogur, levaduras del pan y el moho que produce la penicilina (también las bacterias del intestino y los descomponedores)." },
    { q: "¿Por qué no hay que coger setas del campo para comerlas?", sol: "Porque muchas son venenosas y se parecen a las comestibles; solo un experto puede distinguirlas." },
    { q: "Clasifica en su reino: lombriz, levadura, paramecio, olivo, bacilo, moho.", sol: "Lombriz: animales. Levadura: hongos. Paramecio: protoctistas. Olivo: plantas. Bacilo: bacterias. Moho: hongos." },
  ],
  quiz: [
    { q: "El grupo más grande en que se clasifican los seres vivos es…", o: ["la especie", "el reino", "la familia"], a: 1, e: "El reino." },
    { q: "Un ser que fabrica su propio alimento es…", o: ["autótrofo", "heterótrofo", "unicelular"], a: 0, e: "Autótrofo." },
    { q: "Las setas pertenecen al reino…", o: ["de las plantas", "de los animales", "de los hongos"], a: 2, e: "De los hongos." },
    { q: "El único reino cuyas células no tienen núcleo es…", o: ["bacterias", "protoctistas", "hongos"], a: 0, e: "Las bacterias." },
    { q: "La ameba es un…", o: ["hongo", "protozoo", "alga"], a: 1, e: "Un protozoo del reino protoctistas." },
    { q: "Las algas…", o: ["no tienen clorofila", "son animales", "hacen la fotosíntesis"], a: 2, e: "Son autótrofas." },
    { q: "Las levaduras se usan para hacer…", o: ["pan", "vacunas de plástico", "papel"], a: 0, e: "Hacen subir la masa." },
    { q: "Los helechos se reproducen por…", o: ["semillas", "esporas", "frutos"], a: 1, e: "Por esporas." },
    { q: "La penicilina se obtuvo de…", o: ["una bacteria", "una planta", "un moho"], a: 2, e: "De un moho, en 1928." },
    { q: "Los virus…", o: ["no pertenecen a ningún reino", "son bacterias", "son hongos"], a: 0, e: "No tienen células." },
  ],
  examen: [
    { q: "Un ser pluricelular, heterótrofo y que se desplaza es…", o: ["una planta", "un animal", "un alga"], a: 1, e: "Un animal." },
    { q: "La red de hilos de un hongo bajo tierra es…", o: ["el micelio", "la raíz", "el polen"], a: 0, e: "El micelio." },
    { q: "Las bacterias con forma de bastón se llaman…", o: ["cocos", "espirilos", "bacilos"], a: 2, e: "Bacilos." },
    { q: "Los animales sin columna vertebral son…", o: ["vertebrados", "invertebrados", "protozoos"], a: 1, e: "Invertebrados, el 95 %." },
  ],
  feynman: ["Qué criterios se usan para clasificar a los seres vivos", "Las características principales de cada uno de los cinco reinos", "Por qué los microorganismos pueden ser útiles o perjudiciales"],
  mapa: mapa("CINCO REINOS", "var(--pri)", [
    ["Animales", "pluricelulares · heterótrofos", COL.rojo],
    ["Plantas", "pluricelulares · autótrofas", COL.verde],
    ["Hongos y protoctistas", "setas · mohos · algas", COL.marron],
    ["Bacterias", "unicelulares · sin núcleo", COL.morado],
  ], 250),
  tarjetas: [
    ["Especie", "Grupo de seres vivos muy parecidos con hijos fértiles."],
    ["Reino", "El grupo más grande de clasificación."],
    ["Autótrofo", "Ser vivo que fabrica su alimento, como una planta."],
    ["Heterótrofo", "Ser vivo que toma su alimento de otros."],
    ["Hongo", "Ser vivo sin clorofila que se alimenta de restos y forma esporas."],
    ["Protozoo", "Protoctista unicelular y heterótrofo, como la ameba."],
    ["Bacteria", "Ser unicelular cuya célula no tiene núcleo."],
    ["Microorganismo", "Ser vivo que solo se ve con microscopio."],
  ],
  familias: ["Dejad un trozo de pan húmedo en una bolsa cerrada unos días y observad el moho (sin abrirla ni tocarlo).", "Haced pan o pizza con levadura y observad cómo sube la masa.", "En un paseo, buscad seres de distintos reinos: plantas, animales, setas, líquenes…", "Mirad la etiqueta de un yogur y buscad el nombre de sus bacterias."],
  profesores: PROF("Ciencias de la Naturaleza: clasificación de los seres vivos; criterios; reinos animales, plantas, hongos, protoctistas y bacterias; microorganismos beneficiosos y perjudiciales", ["Clave dicotómica sencilla para clasificar tarjetas de seres vivos en reinos.", "Cultivo de moho en pan y de levadura con azúcar (globo en una botella).", "Observación al microscopio de agua de charca para buscar protozoos y algas."]),
  fuentes: [RD, wiki("Reino (biología)", "Reino_(biología)"), wiki("Fungi", "Fungi"), wiki("Protista", "Protista")],
  revisado: REV,
};

// ---------- Nivel libro (5º de Primaria) ----------
const { linea } = require("./_pri5b");
require("./_priL").libro(module.exports, {
  minutos: 80,
  objetivos: ["Conocer el sistema de nombres científicos de Linneo", "Usar una clave dicotómica sencilla para clasificar seres vivos", "Valorar el descubrimiento de los antibióticos y saber por qué los virus no forman un reino"],
  lectura: { titulo: "El detective de la naturaleza", html: `<p>Hace casi trescientos años, en Suecia, un joven llamado <b>Carlos Linneo</b> recorría los campos con una lupa, un cuaderno y una caja para guardar plantas. Le fascinaba la naturaleza, pero había un problema: cada planta tenía nombres distintos según el país y el pueblo. Lo que en un sitio se llamaba «amapola», en otro tenía un nombre diferente, y algunos sabios usaban descripciones larguísimas en latín, de diez o doce palabras.</p><p>Linneo pensó que así era imposible entenderse. Por eso inventó un sistema sencillo: cada ser vivo tendría un <b>nombre científico</b> de solo <b>dos palabras</b>, igual en todo el mundo. Además, lo ordenó todo en grupos cada vez más grandes, como cajas dentro de cajas.</p><p>Linneo y sus alumnos viajaron por medio planeta y describieron miles de plantas y animales. Su idea funcionó tan bien que hoy, en cualquier país, un científico sabe exactamente de qué ser vivo se habla al leer su nombre científico.</p><p>En este tema aprenderás a clasificar como Linneo y descubrirás los <b>cinco reinos</b> de los seres vivos.</p>` },
  tras: {
    "¿Cómo se clasifica? Los criterios": [
      ["Linneo y el nombre científico", `<p>Los científicos ordenan a los seres vivos en grupos que van de mayor a menor, como cajas dentro de cajas: <b>reino</b>, <b>filo</b>, <b>clase</b>, <b>orden</b>, <b>familia</b>, <b>género</b> y <b>especie</b>. Cuanto más pequeño es el grupo, más se parecen sus miembros.</p><p>La <b>especie</b> es el grupo más pequeño. Una especie está formada por seres vivos tan parecidos que pueden tener crías que, a su vez, también pueden tener crías. Todos los perros, desde un chihuahua hasta un gran danés, son de la misma especie.</p><p>Gracias a Linneo, cada especie tiene un <b>nombre científico</b> de dos palabras en latín:</p><ul><li>La primera es el <b>género</b> y empieza por mayúscula.</li><li>La segunda indica la <b>especie</b> y va en minúscula.</li></ul><p>Por ejemplo, el ser humano es <i>Homo sapiens</i>, el gato es <i>Felis catus</i>, el lobo es <i>Canis lupus</i> y la encina es <i>Quercus ilex</i>. El león, <i>Panthera leo</i>, y el tigre, <i>Panthera tigris</i>, comparten género porque son parientes cercanos. Los nombres científicos se escriben en <i>cursiva</i>.</p>`,
        svg("Categorías de clasificación de mayor a menor: reino, filo, clase, orden, familia, género y especie", `${tit("Cajas dentro de cajas")}${[["reino", COL.azul], ["filo", COL.agua], ["clase", COL.verde], ["orden", COL.sol], ["familia", COL.naranja], ["género", COL.rojo], ["especie", COL.morado]].map(([s, c], i) => cj(130 - (232 - i * 22) / 2, 32 + i * 20, 232 - i * 22, 17, s, c)).join("")}`)],
    ],
    "El reino de los hongos": [
      ["Las setas: mirar sí, comer con cuidado", `<p>Lo que llamamos <b>seta</b> es solo una pequeña parte del hongo: la parte que sale del suelo para soltar las <b>esporas</b>, como una fruta suelta sus semillas. La mayor parte del hongo está bajo tierra, formando una red de hilos blancos muy finos llamada <b>micelio</b>, que puede ocupar muchos metros.</p><p>Las partes de una seta típica son:</p><ul><li>El <b>sombrero</b>, la parte de arriba.</li><li>Las <b>láminas</b>, debajo del sombrero, donde se forman las esporas.</li><li>El <b>pie</b>, que sostiene el sombrero. Algunas setas tienen un <b>anillo</b> en el pie y una especie de bolsa en la base, la <b>volva</b>.</li></ul><p>Hay setas muy apreciadas en la cocina, como el níscalo o el champiñón, pero otras son <b>muy venenosas</b>. La más peligrosa en España es la <i>Amanita phalloides</i>, que puede ser mortal y se confunde con setas comestibles. Por eso <b>nunca</b> hay que comer una seta recogida en el campo sin que la revise un experto. Al recogerlas, se usa una cesta, para que las esporas caigan y nazcan nuevas setas, y se cortan sin arrancar el micelio.</p>`,
        svg("Partes de una seta: sombrero, láminas, pie, anillo, volva y micelio", `${tit("Partes de una seta")}<path d="M50 86 Q90 30 130 86z" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>${[62, 74, 86, 98, 110, 122].map((x) => `<path d="M${x} 86 L90 92" stroke="#b91c1c" stroke-width="1"/>`).join("")}<rect x="82" y="88" width="16" height="56" rx="5" fill="#fef3c7" stroke="#a16207" stroke-width="2"/><path d="M78 104 h24" stroke="#a16207" stroke-width="4"/><path d="M78 150 q12 -14 24 0z" fill="#fef3c7" stroke="#a16207" stroke-width="2"/><path d="M40 160 q20 -6 30 4 M110 156 q20 -2 40 8 M60 168 q30 6 60 0" stroke="var(--muted)" stroke-width="1.5" fill="none"/>${filas([["sombrero", "arriba", COL.rojo], ["láminas", "esporas", COL.rojo], ["anillo", "en el pie", COL.marron], ["volva", "en la base", COL.marron], ["micelio", "bajo tierra", COL.gris]], 50, 24, { x: 146, wa: 50, wb: 60, dos: false })}`)],
    ],
    "Los microorganismos: buenos y malos": [
      ["Fleming y el moho que salvó millones de vidas", `<p>En 1928, el científico escocés <b>Alexander Fleming</b> volvió de vacaciones a su laboratorio de Londres. Había dejado unas placas con bacterias y encontró que en una de ellas había crecido un <b>moho</b> verde, un hongo llamado <i>Penicillium</i>. Lo sorprendente era que, alrededor del moho, las bacterias habían muerto.</p><p>Fleming dedujo que el hongo fabricaba una sustancia capaz de matar bacterias. La llamó <b>penicilina</b>. Fue el primer <b>antibiótico</b>. Años después, otros científicos consiguieron fabricarla en grandes cantidades y, desde la década de 1940, ha salvado millones de vidas al curar infecciones que antes eran mortales.</p><p>Hoy existen muchos antibióticos, pero hay que usarlos bien:</p><ul><li>Solo sirven contra <b>bacterias</b>, no contra virus como el de la gripe o el resfriado.</li><li>Se toman únicamente cuando los receta el <b>médico</b>, y durante todos los días que indique.</li></ul><p>Si se usan mal, algunas bacterias se hacen <b>resistentes</b> y los antibióticos dejan de funcionar contra ellas. ¡Un pequeño moho cambió la historia de la medicina!</p>`,
        svg("Línea del tiempo: 1928 Fleming descubre la penicilina, 1941 primeros enfermos curados, 1945 Premio Nobel", `${tit("La historia de la penicilina")}${linea([["1928", "Fleming ve el moho", COL.verde], ["1941", "primeros enfermos curados", COL.azul], ["1945", "Premio Nobel", COL.sol]])}`)],
    ],
  },
  final: [
    ["Los virus, en la frontera de la vida", `<p>Los <b>virus</b> son mucho más pequeños que las bacterias: solo se ven con microscopios electrónicos muy potentes. Causan enfermedades como la <b>gripe</b>, el <b>resfriado</b>, la <b>varicela</b> o el <b>sarampión</b>.</p><p>Sin embargo, los virus <b>no pertenecen a ningún reino</b>, porque <b>no están formados por células</b>. Son simplemente un poco de material genético envuelto en una cubierta. Fuera de un ser vivo no comen, no crecen ni se reproducen: parecen partículas inertes.</p><p>Para multiplicarse, un virus tiene que entrar en una célula y obligarla a fabricar copias de sí mismo. Al salir, las nuevas copias infectan otras células. Por eso muchos científicos dicen que los virus están en la «frontera» entre lo vivo y lo no vivo.</p><p>Los antibióticos <b>no funcionan</b> contra los virus. Para protegernos tenemos las <b>vacunas</b>, que enseñan a nuestras defensas a reconocerlos antes de que nos ataquen, y hábitos como lavarse las manos, ventilar y taparse al toser o estornudar con el codo.</p>`,
        svg("Comparación entre bacteria y virus: la bacteria es una célula; el virus no", `${tit("Bacteria y virus")}${cj2(14, 40, 112, 70, "Bacteria", "una célula sin núcleo", COL.verde)}${cj2(134, 40, 112, 70, "Virus", "no es una célula", COL.rojo)}${tx(70, 128, "antibióticos: sí", 110, { color: COL.verde, weight: 700 })}${tx(190, 128, "antibióticos: no", 110, { color: COL.rojo, weight: 700 })}${tx(190, 146, "vacunas e higiene", 110)}${tx(70, 146, "más grande", 110)}`)],
    ["Clasificar con una clave dicotómica", `<p>Una <b>clave dicotómica</b> es una herramienta para identificar o clasificar seres vivos. Funciona con preguntas que solo tienen <b>dos respuestas</b> posibles (sí o no). Según lo que contestes, pasas a otra pregunta, hasta llegar al nombre del grupo. «Dicotómica» significa precisamente «dividida en dos».</p><p>Aquí tienes una clave sencilla para seres vivos pluricelulares y las bacterias:</p><ol><li>¿Sus células tienen núcleo? <b>No</b>: es una <b>bacteria</b>. <b>Sí</b>: ve a la pregunta 2.</li><li>¿Hace la fotosíntesis? <b>Sí</b>: es una <b>planta</b>. <b>No</b>: ve a la pregunta 3.</li><li>¿Se desplaza y come otros seres vivos? <b>Sí</b>: es un <b>animal</b>. <b>No</b>: es un <b>hongo</b>.</li></ol><p>Pruébala con una seta: tiene núcleo (sí), no hace la fotosíntesis (no), no se desplaza (no): es un hongo. Para los protoctistas habría que añadir más preguntas, porque son muy variados.</p><p>Los naturalistas usan claves mucho más largas para identificar, por ejemplo, qué especie de árbol o de mariposa tienen delante. Tú también puedes inventar una clave para clasificar los animales de tu entorno.</p>`,
        svg("Clave dicotómica: núcleo, fotosíntesis y desplazamiento para separar bacterias, plantas, animales y hongos", `${tit("Una clave sencilla")}${cj(80, 32, 100, 22, "¿Tiene núcleo?", COL.azul)}${fl(108, 55, 52, 70, "var(--muted)", 2)}${fl(152, 55, 186, 70, "var(--muted)", 2)}${cj(8, 72, 88, 22, "no: bacteria", COL.verde)}${cj(112, 72, 140, 22, "sí: ¿fotosíntesis?", COL.azul)}${fl(160, 95, 134, 110, "var(--muted)", 2)}${fl(206, 95, 214, 110, "var(--muted)", 2)}${cj(92, 112, 76, 22, "sí: planta", COL.verde)}${cj(172, 112, 84, 22, "¿se mueve?", COL.azul)}${fl(200, 135, 156, 150, "var(--muted)", 2)}${fl(232, 135, 232, 150, "var(--muted)", 2)}${cj(110, 152, 84, 22, "sí: animal", COL.rojo)}${cj(200, 152, 56, 22, "hongo", COL.marron)}`)],
  ],
  ejemplos: [
    ["Escribe correctamente el nombre científico del lobo: «canis Lupus». ¿Qué está mal?", ["El género va con mayúscula: Canis.", "La especie va en minúscula: lupus.", "Se escribe en cursiva."], "<i>Canis lupus</i>"],
    ["Usa la clave dicotómica con un pino.", ["¿Tiene núcleo? Sí.", "¿Hace la fotosíntesis? Sí.", "Llegamos al final de la clave."], "El pino es una planta"],
  ],
  errores: ["Pensar que los antibióticos curan la gripe o el resfriado: solo actúan contra bacterias; esas enfermedades las causan virus.", "Escribir los nombres científicos con las dos palabras en mayúscula: solo el género va con mayúscula."],
  nivelesBase: "bmbbmmbmbm",
  ejercicios: [
    ["b", "Ordena de mayor a menor: especie, reino, familia, género, clase.", "Reino, clase, familia, género, especie."],
    ["b", "¿Cuál es el nombre científico del ser humano?", "<i>Homo sapiens</i>."],
    ["b", "¿Qué descubrió Alexander Fleming y en qué año?", "La penicilina, el primer antibiótico, en 1928."],
    ["b", "Nombra tres partes de una seta.", "Sombrero, láminas y pie (también anillo y volva)."],
    ["b", "¿Por qué los virus no pertenecen a ningún reino?", "Porque no están formados por células."],
    ["m", "El león es <i>Panthera leo</i> y el tigre <i>Panthera tigris</i>. ¿Qué nos dice que compartan la primera palabra?", "Que pertenecen al mismo género: son parientes cercanos."],
    ["m", "¿Qué es el micelio y dónde está?", "La red de hilos finos que forma la mayor parte del hongo; está bajo tierra o dentro de lo que el hongo descompone."],
    ["m", "¿Por qué se recogen las setas en cesta?", "Para que las esporas caigan al suelo mientras caminamos y nazcan nuevas setas."],
    ["m", "¿Por qué hay que tomar los antibióticos solo cuando los receta el médico?", "Porque si se usan mal las bacterias se vuelven resistentes y los antibióticos dejan de funcionar."],
    ["m", "Usa la clave dicotómica con un champiñón y con una lombriz.", "Champiñón: núcleo sí, fotosíntesis no, se desplaza no: hongo. Lombriz: núcleo sí, fotosíntesis no, se desplaza sí: animal."],
    ["m", "¿Qué tienen en común todos los perros, desde un chihuahua hasta un gran danés?", "Son de la misma especie: pueden tener crías que también pueden tener crías."],
    ["a", "Inventa una clave dicotómica de tres preguntas para clasificar: águila, sardina, rana y perro.", "Respuesta abierta. Por ejemplo: ¿tiene plumas? sí: águila. ¿Vive siempre en el agua? sí: sardina. ¿Tiene pelo? sí: perro; no: rana."],
    ["a", "Explica cómo se multiplica un virus.", "Entra en una célula y la obliga a fabricar copias de él; las copias salen e infectan otras células."],
    ["a", "¿Qué observó Fleming en su placa y qué conclusión sacó?", "Que alrededor del moho las bacterias habían muerto; dedujo que el hongo fabricaba una sustancia que mataba bacterias."],
    ["a", "¿Por qué Linneo eligió nombres de dos palabras en una sola lengua para todo el mundo?", "Para que todos los científicos se entendieran sin confusiones, porque los nombres comunes cambian según el país y el pueblo."],
    ["a", "Clasifica en su reino: levadura, alga, musgo, bacteria del yogur, medusa y moho.", "Levadura y moho: hongos. Alga: protoctistas. Musgo: plantas. Bacteria del yogur: bacterias. Medusa: animales."],
  ],
  quiz: [
    ["El grupo más pequeño de la clasificación es…", ["La especie", "El reino", "La familia"], "Sus miembros pueden tener crías fértiles."],
    ["En un nombre científico, la primera palabra es…", ["El género", "La especie", "El reino"], "Y va con mayúscula."],
    ["La penicilina se obtuvo de…", ["Un moho", "Una planta", "Una bacteria"], "El hongo <i>Penicillium</i>."],
    ["Los antibióticos sirven contra…", ["Las bacterias", "Los virus", "Todos los microbios"], "No curan la gripe."],
    ["Una clave dicotómica tiene preguntas con…", ["Dos respuestas", "Tres respuestas", "Ninguna respuesta"], "Sí o no."],
  ],
  examen: [
    ["Las esporas de una seta se forman en…", ["Las láminas", "El pie", "La volva"], "Debajo del sombrero."],
    ["Para protegernos de los virus tenemos…", ["Vacunas e higiene", "Antibióticos", "Nada"], "Las vacunas entrenan nuestras defensas."],
  ],
  tarjetas: [
    ["Nombre científico", "Dos palabras en latín: género y especie (<i>Homo sapiens</i>)."],
    ["Antibiótico", "Medicamento que mata bacterias; el primero fue la penicilina."],
    ["Virus", "Partícula sin células que se multiplica dentro de las células."],
    ["Clave dicotómica", "Preguntas de sí o no para clasificar seres vivos."],
  ],
  glosario: [
    ["Clasificar", "Ordenar en grupos según sus parecidos."],
    ["Reino", "Cada uno de los cinco grandes grupos de seres vivos."],
    ["Especie", "Grupo de seres vivos que pueden tener crías fértiles entre sí."],
    ["Género", "Grupo de especies muy parecidas."],
    ["Autótrofo", "Ser vivo que fabrica su propio alimento."],
    ["Heterótrofo", "Ser vivo que se alimenta de otros seres vivos."],
    ["Unicelular", "Formado por una sola célula."],
    ["Pluricelular", "Formado por muchas células."],
    ["Espora", "Célula que sirve a los hongos para reproducirse."],
    ["Micelio", "Red de hilos que forma la mayor parte de un hongo."],
    ["Microorganismo", "Ser vivo que solo se ve con microscopio."],
    ["Antibiótico", "Medicamento que mata bacterias."],
  ],
  situacion: {
    titulo: "El museo de los cinco reinos",
    reto: "La clase organiza un pequeño museo con un rincón para cada reino, con fichas y una clave para que los visitantes clasifiquen.",
    pasos: ["Por grupos, elegid un reino y buscad cinco ejemplos con su nombre común y su nombre científico.", "Preparad una ficha de cada ejemplo con dibujo o foto, características y dónde vive.", "Haced un experimento: dejad pan húmedo en una bolsa cerrada varios días y observad el moho con lupa (sin abrir la bolsa).", "Cread una clave dicotómica para que los visitantes adivinen el reino de cada ejemplo."],
    producto: "Un museo de los cinco reinos con fichas, un experimento de moho y una clave dicotómica.",
    evaluacion: ["Clasifica correctamente seres vivos en los cinco reinos.", "Escribe bien los nombres científicos.", "Observa y registra un experimento con seguridad.", "Diseña una clave dicotómica que funciona."],
  },
});
