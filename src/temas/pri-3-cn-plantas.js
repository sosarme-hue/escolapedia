// Ciencias de la Naturaleza 3º de Primaria: las plantas y sus partes. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, ciclo, vid, vgen, RD, PROF, arbol, sol, flor, hoja, gota, suelo, tick } = require("./_pri3b");

// Planta completa con raíz, tallo, hojas y flor.
const planta = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V-70" stroke="#15803d" stroke-width="4"/>${hoja(0, -30, 0.8, -30)}${hoja(0, -48, 0.8, 210)}<g transform="translate(0 -70)">${[0, 72, 144, 216, 288].map((a) => `<circle cx="${(Math.cos((a * Math.PI) / 180) * 8).toFixed(1)}" cy="${(Math.sin((a * Math.PI) / 180) * 8).toFixed(1)}" r="7" fill="var(--red)"/>`).join("")}<circle r="5" fill="var(--sun)"/></g><path d="M0 0 l-12 16 M0 0 l12 18 M0 0 v22 M-6 8 l-10 4 M6 9 l10 3" stroke="${COL.marron}" stroke-width="2"/></g>`;
// Semilla de judía.
const semilla = (x, y, s = 1) => `<ellipse transform="translate(${x} ${y}) scale(${s})" rx="10" ry="6" fill="${COL.marron}" fill-opacity=".7" stroke="var(--ink)" stroke-width="1"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Las plantas y sus partes",
  minutos: 45,
  objetivos: ["Reconocer las partes de una planta: raíz, tallo, hojas, flor y fruto", "Explicar para qué sirve cada parte", "Saber qué necesita una planta para vivir y cómo fabrica su alimento", "Conocer cómo nace una planta a partir de una semilla", "Clasificar las plantas en hierbas, arbustos y árboles"],
  claves: ["raíz", "tallo", "hoja", "flor", "fruto", "semilla", "fotosíntesis", "clorofila", "germinación", "hierba", "arbusto", "árbol"],
  pregunta: {
    texto: "Si pones un tallo de apio en un vaso con agua y unas gotas de colorante azul, al día siguiente las hojas tienen manchas azules. ¿Cómo ha llegado el color hasta arriba?",
    respuesta: "Porque el <mark>tallo</mark> tiene por dentro unos <b>tubitos</b> finísimos, como pajitas, que llevan el agua desde abajo hasta las hojas. El agua con colorante ha subido por esos tubitos. Es lo mismo que hacen las plantas cada día: la <mark>raíz</mark> absorbe el agua del suelo y el tallo la transporta hasta las hojas.",
  },
  bloques: [
    {
      html: `<h3>Las plantas son seres vivos</h3><p>Las <mark>plantas</mark> son seres vivos, igual que los animales, porque <b>nacen, crecen, se reproducen y mueren</b>. Pero tienen algunas características muy especiales:</p><p>• <b>Fabrican su propio alimento</b> usando la luz del sol. No necesitan comer otros seres vivos.<br>• Viven <b>sujetas al suelo</b> y no pueden desplazarse de un lugar a otro.<br>• La mayoría son de color <b>verde</b>, gracias a una sustancia llamada <mark>clorofila</mark>.<br>• Siguen creciendo durante toda su vida.</p><p>Hay plantas de muchísimos tamaños y formas: desde el pequeño musgo que cubre las piedras hasta árboles enormes como la secuoya, que puede ser más alta que un edificio de treinta pisos.</p><p>Las plantas viven casi en todas partes: en los bosques, en los prados, en los desiertos, en lo alto de las montañas y dentro del agua de los ríos, los lagos y el mar. ¡También en las macetas de tu casa y en los parques de tu ciudad!</p>`,
      svg: svg("Las plantas fabrican su alimento con la luz, viven fijas al suelo y son verdes", `${tit("¿Qué es una planta?")}${suelo(150)}${planta(64, 150, 1.2)}${sol(220, 52, 13)}${filas([["fabrica", "su alimento con luz", COL.sol], ["fija", "al suelo", COL.marron], ["verde", "tiene clorofila", "#15803d"]], 90, 28, { x: 120, wa: 60, wb: 90, dos: true })}`),
    },
    {
      html: `<h3>Las partes de una planta</h3><p>Casi todas las plantas que conoces tienen estas partes:</p><p>• La <mark>raíz</mark>, que está bajo tierra.<br>• El <mark>tallo</mark>, que sale del suelo y sostiene la planta.<br>• Las <mark>hojas</mark>, que salen del tallo.<br>• Las <mark>flores</mark>, que aparecen en algunas épocas del año.<br>• Los <mark>frutos</mark>, que se forman a partir de las flores y guardan las <b>semillas</b>.</p><p>Cada parte tiene un <b>trabajo</b> diferente, igual que nuestros órganos. Todas son necesarias para que la planta viva y tenga descendientes.</p><p>No todas las plantas tienen todas las partes. Los <b>musgos</b> son tan sencillos que no tienen raíces, tallos ni hojas de verdad. Y los <b>helechos</b> no tienen flores ni frutos: se reproducen con unos polvillos llamados <b>esporas</b>, que se forman en la parte de abajo de sus hojas.</p><p>En las siguientes páginas veremos cada parte con más detalle.</p>`,
      svg: svg("Partes de la planta: flor, hojas, tallo y raíz", `${tit("Partes de la planta")}<rect x="10" y="128" width="136" height="44" fill="${COL.marron}" fill-opacity=".12"/><path d="M10 128 H146" stroke="${COL.marron}" stroke-width="2"/>${planta(80, 128, 1.2)}${fl(150, 52, 98, 46, COL.rojo, 1.5)}${fl(150, 86, 100, 92, COL.verde, 1.5)}${fl(150, 116, 84, 114, "#15803d", 1.5)}${fl(150, 150, 96, 146, COL.marron, 1.5)}${et(196, 56, "flor", 80, { size: 12, color: COL.rojo })}${et(196, 90, "hojas", 80, { size: 12, color: COL.verde })}${et(196, 120, "tallo", 80, { size: 12, color: "#15803d" })}${et(196, 154, "raíz", 80, { size: 12, color: COL.marron })}`),
      video: vid("tP-7nTExaqo"),
    },
    {
      html: `<h3>La raíz</h3><p>La <mark>raíz</mark> es la parte de la planta que crece <b>bajo tierra</b>, hacia abajo. Tiene dos trabajos muy importantes:</p><p>• <b>Sujetar</b> la planta al suelo, para que el viento o la lluvia no la arranquen. Los árboles grandes tienen raíces enormes que pueden llegar muy lejos.<br>• <b>Absorber</b> el <b>agua</b> y las <b>sales minerales</b> del suelo, que la planta necesita para vivir. Para eso tiene unos pelillos finísimos, los <b>pelos absorbentes</b>.</p><p>Hay raíces de distintas formas. Algunas tienen una raíz <b>principal</b> gruesa de la que salen otras más finas, como la del pino. Otras parecen un manojo de <b>pelos</b>, todas igual de gruesas, como las del trigo o la cebolla.</p><p>Algunas plantas <b>guardan alimento</b> en su raíz y la hacen muy gruesa. ¡Nosotros nos comemos esas raíces! La zanahoria, el rábano, la remolacha y el nabo son raíces.</p>`,
      svg: svg("La raíz sujeta la planta y absorbe agua; raíz principal y raíz en manojo; zanahoria", `${tit("La raíz")}<path d="M10 70 H250" stroke="${COL.marron}" stroke-width="2"/><rect x="10" y="70" width="240" height="94" fill="${COL.marron}" fill-opacity=".1"/><path d="M60 70 V40" stroke="#15803d" stroke-width="3"/><path d="M60 70 V140 M60 90 l-18 16 M60 90 l18 16 M60 112 l-14 14 M60 112 l14 14" stroke="${COL.marron}" stroke-width="2.5"/><path d="M130 70 V40" stroke="#15803d" stroke-width="3"/>${[-16, -8, 0, 8, 16].map((d) => `<path d="M130 70 q${d} 30 ${d * 1.5} 56" stroke="${COL.marron}" stroke-width="2" fill="none"/>`).join("")}<path d="M200 70 l-10 0 l10 70 l10 -70z" fill="${COL.naranja}"/><path d="M200 70 l-6 -16 M200 70 l6 -16 M200 70 v-18" stroke="#15803d" stroke-width="3"/>${et(60, 156, "principal", 70, { size: 10.5 })}${et(130, 156, "en manojo", 70, { size: 10.5 })}${et(200, 156, "zanahoria", 70, { size: 10.5, color: COL.naranja })}${gota(96, 116, 0.7)}${gota(166, 110, 0.7)}`),
    },
    {
      html: `<h3>El tallo</h3><p>El <mark>tallo</mark> es la parte de la planta que crece hacia arriba, hacia la luz. Sus funciones son:</p><p>• <b>Sostener</b> las hojas, las flores y los frutos.<br>• <b>Transportar</b> el agua desde la raíz hasta las hojas, y el alimento desde las hojas a toda la planta. Lo hace por unos <b>tubitos</b> muy finos que tiene por dentro, llamados <b>vasos</b>.</p><p>Hay dos tipos de tallos:</p><p>• Tallos <b>herbáceos</b>: son blandos, finos y verdes, y se doblan con facilidad. Los tienen la amapola, la margarita o el trigo.<br>• Tallos <b>leñosos</b>: son duros y gruesos, porque están hechos de <b>madera</b>. Los tienen los árboles y los arbustos. El tallo de un árbol se llama <b>tronco</b> y está cubierto de <b>corteza</b>.</p><p>Si miras un tronco cortado, verás unos círculos: son los <b>anillos</b>. Cada anillo es un año de vida del árbol. ¡Cuéntalos y sabrás su edad!</p><p>Algunos tallos se comen, como el espárrago, y otros guardan alimento bajo tierra, como la patata.</p>`,
      svg: svg("Tallo herbáceo blando y tallo leñoso con anillos", `${tit("El tallo")}${suelo(150)}${flor(54, 150, "var(--red)")}<path d="M54 124 V150" stroke="var(--leaf)" stroke-width="3"/>${arbol(130, 150, 1.6)}<g transform="translate(212 104)">${[34, 26, 18, 10].map((r, i) => `<circle r="${r}" fill="${i % 2 ? "#e8cfa4" : "#d6b48a"}" stroke="${COL.marron}" stroke-width="1.2"/>`).join("")}<circle r="3" fill="${COL.marron}"/></g>${et(54, 168, "herbáceo", 70, { size: 11, color: COL.verde })}${et(130, 168, "leñoso", 70, { size: 11, color: COL.marron })}${et(212, 158, "anillos = años", 90, { size: 10.5, color: COL.marron })}`),
    },
    {
      html: `<h3>Las hojas</h3><p>Las <mark>hojas</mark> salen del tallo y suelen ser <b>verdes, planas y finas</b>. Son como la «cocina» de la planta, porque en ellas se fabrica el alimento. También por ellas la planta <b>respira</b> y suelta el agua que le sobra.</p><p>Una hoja tiene dos partes:</p><p>• El <b>limbo</b>: es la parte ancha y plana. Tiene una cara de arriba, el <b>haz</b>, más brillante, y una cara de abajo, el <b>envés</b>, más clara. Por el limbo corren unas líneas, los <b>nervios</b>, que llevan el agua y el alimento.<br>• El <b>peciolo</b>: es el rabito que une la hoja al tallo. Algunas hojas no tienen peciolo.</p><p>Las hojas pueden tener formas muy distintas: redondas, alargadas, en forma de corazón, de aguja como las del pino, o con el borde dentado como las de la ortiga.</p><p>Hay árboles que pierden todas sus hojas en otoño, como el castaño o el chopo: son de <b>hoja caduca</b>. Otros las conservan todo el año, como el pino o el olivo: son de <b>hoja perenne</b>.</p>`,
      svg: svg("Partes de la hoja: limbo, nervios y peciolo", `${tit("Partes de la hoja")}<g transform="translate(40 100) scale(4.4)"><path d="M0 0 C10 -10 26 -10 34 0 C26 10 10 10 0 0z" fill="var(--leaf)"/><path d="M-6 0 H32" stroke="#fff" stroke-width=".5"/>${[8, 16, 24].map((x) => `<path d="M${x} 0 l4 -4 M${x} 0 l4 4" stroke="#fff" stroke-width=".4"/>`).join("")}<path d="M-8 0 H0" stroke="#15803d" stroke-width="1.2"/></g>${fl(120, 60, 120, 80, COL.verde, 1.5)}${fl(170, 130, 150, 104, COL.azul, 1.5)}${fl(20, 140, 14, 106, COL.marron, 1.5)}${et(120, 54, "limbo", 60, { size: 12, color: COL.verde })}${et(176, 146, "nervios", 70, { size: 12, color: COL.azul })}${et(30, 156, "peciolo", 60, { size: 12, color: COL.marron })}`),
    },
    {
      html: `<h3>¿Cómo se alimentan las plantas?</h3><p>Las plantas fabrican su propio alimento. Este proceso se llama <mark>fotosíntesis</mark>, que significa «fabricar con luz». Para hacerlo necesitan:</p><p>• <b>Agua</b> y <b>sales minerales</b>, que toman con la raíz y suben por el tallo.<br>• <b>Aire</b>: un gas llamado <b>dióxido de carbono</b>, que entra por unos agujeritos diminutos de las hojas.<br>• <b>Luz del sol</b>, que la <b>clorofila</b> de las hojas atrapa como si fuera una placa solar.</p><p>Con todo esto, la planta fabrica su <b>alimento</b>, que reparte por el tallo a todas sus partes. Y, además, suelta <b>oxígeno</b> al aire. ¡Ese es el oxígeno que respiramos nosotros y los animales!</p><p>Por eso las plantas necesitan <b>luz, agua y aire</b> para vivir. Si dejas una planta en un armario oscuro, sus hojas se pondrán amarillas y acabará muriendo. Y si no la riegas, se marchitará. Además, la mayoría necesita una <b>temperatura</b> adecuada: con mucho frío o mucho calor se estropean.</p>`,
      svg: svg("Fotosíntesis: entran luz, agua y aire; salen alimento y oxígeno", `${tit("Fotosíntesis")}${sol(40, 54, 13)}${hoja(96, 104, 2.4, -10)}${fl(54, 64, 98, 90, COL.sol, 2.5)}${fl(30, 112, 92, 106, COL.gris, 2.5)}${fl(128, 160, 130, 118, COL.azul, 2.5)}${fl(186, 92, 228, 72, COL.verde, 2.5)}${fl(186, 114, 228, 134, COL.naranja, 2.5)}${tx(40, 126, "aire", 60, { color: COL.gris, weight: 700 })}${tx(96, 168, "agua", 50, { color: COL.azul, weight: 700 })}${tx(222, 60, "oxígeno", 70, { color: COL.verde, weight: 700 })}${tx(222, 150, "alimento", 70, { color: COL.naranja, weight: 700 })}`),
      video: vid("wtpP_5dmrRo"),
    },
    {
      html: `<h3>Flores, frutos y semillas</h3><p>Muchas plantas tienen <mark>flores</mark>. Las flores son las encargadas de la <b>reproducción</b>: de ellas nacerán las nuevas plantas. Sus partes son:</p><p>• Los <b>pétalos</b>, de colores vistosos y a veces perfumados, que atraen a los insectos.<br>• Los <b>sépalos</b>, unas hojitas verdes que protegen la flor cuando está cerrada.<br>• En el centro están los <b>estambres</b>, que fabrican el <b>polen</b>, un polvillo amarillo, y el <b>pistilo</b>, donde se formarán las semillas.</p><p>Las abejas y otros insectos van de flor en flor buscando un líquido dulce, el néctar, y llevan el polen pegado a sus patas. Cuando el polen llega a otra flor, se forman las semillas.</p><p>Después, los pétalos se caen y la flor se transforma en un <mark>fruto</mark>, que guarda y protege las <mark>semillas</mark>. Hay frutos <b>carnosos</b>, jugosos y blandos, como la naranja, el tomate o la cereza; y frutos <b>secos</b>, como la nuez, la almendra o la avellana.</p><p>Las semillas viajan con el viento, el agua o los animales para nacer lejos de la planta madre.</p>`,
      svg: svg("De la flor al fruto: la abeja lleva el polen, la flor se convierte en fruto con semillas", `${tit("De la flor al fruto")}${flujo([["flor", COL.rojo], ["polen", COL.sol], ["fruto", COL.naranja], ["semillas", COL.marron]], 70, 36)}${flor(46, 160, "var(--red)")}<g transform="translate(108 140)"><ellipse rx="8" ry="6" fill="var(--sun)"/><path d="M-3 -6 v12 M3 -6 v12" stroke="var(--ink)" stroke-width="2"/><ellipse cx="-2" cy="-8" rx="6" ry="4" fill="#fff" fill-opacity=".8" stroke="var(--ink)" stroke-width=".8"/></g><circle cx="168" cy="140" r="16" fill="${COL.naranja}"/><path d="M168 124 q2 -6 6 -8" stroke="${COL.marron}" stroke-width="2" fill="none"/>${semilla(220, 134, 0.9)}${semilla(234, 146, 0.9)}${semilla(214, 150, 0.9)}`),
    },
    {
      html: `<h3>Nace una planta</h3><p>Dentro de cada <mark>semilla</mark> hay una plantita diminuta, dormida, y una reserva de alimento para cuando despierte.</p><p>Cuando la semilla está en la tierra y tiene <b>agua</b>, <b>aire</b> y una <b>temperatura</b> agradable, se hincha y se abre. Es la <mark>germinación</mark>. Ocurre así:</p><p>1. La semilla absorbe agua y se <b>hincha</b>.<br>2. La cubierta se rompe y sale la primera <b>raíz</b>, que crece hacia abajo.<br>3. Después sale el <b>tallo</b>, que crece hacia arriba buscando la luz.<br>4. Aparecen las primeras <b>hojas</b>. Desde ese momento, la planta puede fabricar su alimento con la luz.</p><p>La plantita sigue creciendo hasta hacerse <b>adulta</b>. Entonces tendrá flores, frutos y nuevas semillas, y el ciclo de vida volverá a empezar.</p><p><b>Experimento:</b> pon unas lentejas o unas judías en un vaso con algodón mojado, junto a una ventana. Riégalas un poco cada día y apunta lo que ves. ¡En pocos días verás cómo germinan!</p>`,
      svg: svg("Germinación: semilla, raíz, tallo y hojas", `${tit("La germinación")}<path d="M10 120 H250" stroke="${COL.marron}" stroke-width="2"/><rect x="10" y="120" width="240" height="44" fill="${COL.marron}" fill-opacity=".1"/>${semilla(38, 132, 1.3)}${semilla(98, 132, 1.3)}<path d="M98 138 q-2 14 2 22" stroke="${COL.marron}" stroke-width="2" fill="none"/>${semilla(158, 132, 1.2)}<path d="M158 138 q-2 14 2 22" stroke="${COL.marron}" stroke-width="2" fill="none"/><path d="M158 126 q2 -12 -2 -20" stroke="#15803d" stroke-width="3" fill="none"/><path d="M220 160 q-2 -10 0 -40 V84" stroke="#15803d" stroke-width="3" fill="none"/><path d="M220 160 l-8 0 M220 150 l8 4" stroke="${COL.marron}" stroke-width="2"/>${hoja(220, 92, 0.7, -30)}${hoja(220, 92, 0.7, 210)}${et(38, 104, "1 semilla", 56, { size: 10.5 })}${et(98, 104, "2 raíz", 56, { size: 10.5 })}${et(158, 96, "3 tallo", 56, { size: 10.5 })}${et(224, 70, "4 hojas", 56, { size: 10.5 })}`),
    },
    {
      html: `<h3>Hierbas, arbustos y árboles</h3><p>Según su <b>tallo</b> y su <b>tamaño</b>, las plantas se clasifican en tres grupos:</p><p>• Las <mark>hierbas</mark>: tienen el tallo blando, fino y verde. Son bajas. Por ejemplo, el trigo, la menta, la amapola o el césped.<br>• Los <mark>arbustos</mark>: tienen el tallo leñoso, pero no son muy altos. Sus ramas salen desde el suelo. Por ejemplo, el romero, el rosal, la lavanda o la jara.<br>• Los <mark>árboles</mark>: tienen un tallo leñoso, alto y grueso, el tronco, del que salen las ramas a cierta altura. Por ejemplo, el pino, la encina, el roble o el naranjo.</p><p>Las plantas son muy <b>importantes</b> para nosotros: nos dan el oxígeno que respiramos, alimentos, madera, papel, algodón para la ropa y medicinas. Además, dan sombra, refrescan las ciudades y son el hogar de muchos animales.</p><p>Para cuidarlas: riega las plantas de casa, no arranques flores en el campo, no tires papeles ni plásticos y nunca hagas fuego en el monte.</p>`,
      svg: svg("Hierba, arbusto y árbol", `${tit("Hierba, arbusto y árbol")}${suelo(150)}${flor(46, 150, "var(--red)")}<g transform="translate(120 150)"><path d="M0 0 l-14 -24 M0 0 l0 -30 M0 0 l14 -24" stroke="#8a5a2b" stroke-width="3"/><circle cx="-14" cy="-30" r="12" fill="var(--leaf)"/><circle cx="0" cy="-38" r="13" fill="var(--leaf)"/><circle cx="14" cy="-30" r="12" fill="var(--leaf)"/></g>${arbol(200, 150, 1.8)}${et(46, 168, "hierba", 70, { size: 11 })}${et(120, 168, "arbusto", 70, { size: 11 })}${et(200, 168, "árbol", 70, { size: 11 })}`),
    },
  ],
  figura: {
    titulo: "Las plantas en ocho ideas",
    svg: rejilla([
      ["Raíz", "sujeta y absorbe", COL.marron],
      ["Tallo", "sostiene y transporta", "#15803d"],
      ["Hojas", "fabrican el alimento", COL.verde],
      ["Fotosíntesis", "luz + agua + aire", COL.sol],
      ["Flor", "reproducción", COL.rojo],
      ["Fruto", "guarda las semillas", COL.naranja],
      ["Germinación", "nace la planta", COL.morado],
      ["Tipos", "hierba, arbusto, árbol", COL.azul],
    ], 4, 86, "Resumen de las plantas y sus partes"),
  },
  video: vgen("JBhk8YfB5K8", "las partes de la planta para niños"),
  ejemplos: [
    { enunciado: "¿Qué parte de la planta comemos: zanahoria, lechuga, espárrago, manzana, pipa de girasol?",
      pasos: ["La zanahoria crece bajo tierra y es gruesa: raíz.", "La lechuga son hojas.", "El espárrago es un tallo.", "La manzana es un fruto.", "La pipa es una semilla."],
      resultado: "Raíz, hoja, tallo, fruto y semilla." },
    { enunciado: "Un tronco cortado tiene 12 anillos. ¿Cuántos años tenía el árbol?",
      pasos: ["Cada anillo es un año de vida."],
      resultado: "12 años." },
    { enunciado: "Ponemos una planta sin regar y otra regada, las dos junto a la ventana. ¿Qué pasará?",
      pasos: ["Las dos tienen luz y aire.", "La que no tiene agua no puede absorberla con la raíz ni fabricar alimento.", "Se marchitará."],
      resultado: "La regada estará sana y la otra se marchitará." },
  ],
  errores: [
    "Pensar que la planta come tierra: fabrica su alimento con luz, agua y aire.",
    "Creer que la patata es una raíz: es un tallo que guarda alimento bajo tierra.",
    "Pensar que todas las plantas tienen flores: los musgos y los helechos no.",
    "Confundir arbusto y árbol: el árbol tiene un solo tronco alto.",
  ],
  ejercicios: [
    { q: "Escribe las partes de una planta.", sol: "Raíz, tallo, hojas, flores y frutos (con semillas)." },
    { q: "¿Para qué sirve la raíz?", sol: "Para sujetar la planta al suelo y absorber el agua y las sales minerales." },
    { q: "¿Qué diferencia hay entre un tallo herbáceo y uno leñoso?", sol: "El herbáceo es blando, fino y verde; el leñoso es duro y de madera." },
    { q: "Escribe las partes de una hoja.", sol: "El limbo (con el haz, el envés y los nervios) y el peciolo." },
    { q: "¿Qué necesita una planta para hacer la fotosíntesis?", sol: "Agua y sales minerales, aire (dióxido de carbono) y luz del sol." },
    { q: "¿Qué gas sueltan las plantas al aire?", sol: "Oxígeno." },
    { q: "¿Para qué sirven los pétalos de colores?", sol: "Para atraer a los insectos, que llevan el polen de una flor a otra." },
    { q: "Escribe dos frutos carnosos y dos secos.", sol: "Carnosos: naranja y tomate. Secos: nuez y almendra." },
    { q: "Ordena la germinación: hojas, raíz, semilla que se hincha, tallo.", sol: "Semilla que se hincha, raíz, tallo y hojas." },
    { q: "Clasifica en hierba, arbusto o árbol: romero, pino, amapola, rosal, roble.", sol: "Hierba: amapola. Arbustos: romero y rosal. Árboles: pino y roble." },
  ],
  quiz: [
    { q: "La parte que absorbe el agua es la…", o: ["hoja", "raíz", "flor"], a: 1, e: "La raíz." },
    { q: "Las plantas fabrican su alimento en las…", o: ["hojas", "raíces", "semillas"], a: 0, e: "En las hojas." },
    { q: "El color verde de las plantas se debe a la…", o: ["clorofila", "savia", "corteza"], a: 0, e: "La clorofila." },
    { q: "El tallo de un árbol se llama…", o: ["peciolo", "tronco", "pétalo"], a: 1, e: "Tronco." },
    { q: "El rabito de la hoja es el…", o: ["limbo", "peciolo", "nervio"], a: 1, e: "El peciolo." },
    { q: "Las plantas sueltan al aire…", o: ["oxígeno", "humo", "polen siempre"], a: 0, e: "Oxígeno." },
    { q: "El polvillo amarillo de las flores es el…", o: ["polen", "néctar", "azúcar"], a: 0, e: "El polen." },
    { q: "Las semillas están dentro del…", o: ["fruto", "tallo", "peciolo"], a: 0, e: "Del fruto." },
    { q: "La zanahoria es una…", o: ["hoja", "raíz", "flor"], a: 1, e: "Una raíz." },
    { q: "El romero es un…", o: ["árbol", "arbusto", "musgo"], a: 1, e: "Un arbusto." },
  ],
  examen: [
    { q: "Al germinar, lo primero que sale es la…", o: ["raíz", "flor", "hoja"], a: 0, e: "La raíz." },
    { q: "Un árbol de hoja caduca…", o: ["pierde las hojas en otoño", "no tiene hojas nunca", "tiene hojas de aguja"], a: 0, e: "Las pierde en otoño." },
    { q: "La fotosíntesis necesita…", o: ["luz", "oscuridad", "nieve"], a: 0, e: "Luz, agua y aire." },
    { q: "Los anillos de un tronco indican…", o: ["los años del árbol", "las hojas", "las flores"], a: 0, e: "Su edad." },
  ],
  feynman: ["Para qué sirve cada parte de la planta", "Qué necesita una planta para fabricar su alimento", "Cómo nace una planta de una semilla"],
  mapa: mapa("LAS PLANTAS", "var(--pri)", [
    ["Partes", "raíz · tallo · hojas", COL.verde],
    ["Alimento", "fotosíntesis · luz · agua", COL.sol],
    ["Reproducción", "flor · fruto · semilla", COL.rojo],
    ["Tipos", "hierba · arbusto · árbol", COL.marron],
  ], 250),
  tarjetas: [
    ["Raíz", "Sujeta la planta y absorbe agua."],
    ["Tallo", "Sostiene la planta y transporta el agua."],
    ["Hoja", "Fabrica el alimento de la planta."],
    ["Fotosíntesis", "Fabricar alimento con luz, agua y aire."],
    ["Clorofila", "Sustancia verde que atrapa la luz."],
    ["Flor", "Parte de la reproducción; da el fruto."],
    ["Fruto", "Guarda y protege las semillas."],
    ["Germinación", "Nacimiento de una planta desde la semilla."],
  ],
  familias: ["Haced germinar lentejas en algodón húmedo y dibujad los cambios cada día.", "Poned un tallo de apio en agua con colorante y mirad qué pasa al día siguiente.", "En la frutería, adivinad qué parte de la planta es cada verdura.", "Recoged hojas de distintas formas en el parque y pegadlas en un cuaderno."],
  profesores: PROF("Ciencias de la Naturaleza: las plantas; raíz, tallo, hoja, flor y fruto; necesidades de las plantas y fotosíntesis; germinación; clasificación en hierbas, arbustos y árboles; importancia y cuidado de las plantas", ["Germinación de legumbres con diario de observación y medidas.", "Experimento del apio con colorante para ver el transporte del agua.", "Herbario de hojas con clasificación por formas."]),
  fuentes: [RD, wiki("Planta", "Plantae"), wiki("Fotosíntesis", "Fotosíntesis"), wiki("Germinación", "Germinación")],
  revisado: REV,
};

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Explicar por qué cambian de color las hojas en otoño", "Conocer las plantas carnívoras", "Describir cómo viajan las semillas", "Descubrir plantas récord y cuidar un huerto"],
  lectura: { titulo: "El viaje de la semilla de diente de león", html: `<p>En un prado, junto a un camino, vivía una planta de diente de león. En primavera tuvo una flor amarilla, y después la flor se convirtió en una bola blanca y esponjosa, hecha de cientos de semillas con paracaídas.</p><p>Una de esas semillas se llamaba Vilana. Estaba deseando conocer el mundo.</p><p>Una mañana llegó una niña, arrancó la bola y sopló con fuerza. ¡Fuuuu! Vilana salió volando con sus hermanas. El viento la llevó por encima del camino, de un río y de un tejado.</p><p>—¡Esto es maravilloso! —pensó Vilana mientras flotaba.</p><p>Pero el viento se calmó y Vilana empezó a bajar. Aterrizó en un rincón de un huerto, entre la tierra húmeda.</p><p>Durante varios días no pasó nada. Luego llegó la lluvia, y Vilana notó que algo cambiaba dentro de ella. Una pequeña raíz empezó a crecer hacia abajo y un tallo verde asomó hacia la luz.</p><p>Semanas después, en aquel rincón del huerto había una nueva planta de diente de león con una flor amarilla. Y un día, esa flor se convirtió en una bola blanca llena de semillas, listas para su propio viaje.</p>` },
  tras: {
    "Las hojas": [
      ["Los colores del otoño", `<p>En otoño, las hojas de muchos árboles cambian de color y se caen. Estos árboles se llaman de <mark>hoja caduca</mark>, como el roble, el castaño o el chopo. Los que conservan las hojas todo el año, como el pino o la encina, son de <mark>hoja perenne</mark>.</p><p><b>¿Por qué cambian de color?</b></p><ul><li>Las hojas son verdes por la <b>clorofila</b>, que las ayuda a fabricar alimento con la luz del sol.</li><li>En otoño los días son más cortos y hace más frío. El árbol deja de fabricar clorofila para ahorrar energía.</li><li>Al desaparecer el verde, se ven otros colores que estaban escondidos: el <b>amarillo</b> y el <b>naranja</b>. Algunas hojas fabrican además pigmentos <b>rojos</b>.</li><li>Después, las hojas se secan, se vuelven marrones y caen.</li></ul><p>Así el árbol descansa durante el invierno y en primavera saca hojas nuevas. Las hojas caídas se descomponen y abonan el suelo.</p>`,
        H6.dos("Árboles", ["CADUCA", ["roble", "castaño", "chopo"], cNA], ["PERENNE", ["pino", "encina", "olivo"], cVE]), ["DckvUtmYT4I", "HOJAS CADUCAS Y HOJAS PERENNES  | Vídeos Educativos para Niños", "Happy Learning Español", 109113]],
    ],
    "¿Cómo se alimentan las plantas?": [
      ["Las plantas carnívoras", `<p>Todas las plantas fabrican su alimento con la luz del sol. Pero algunas viven en suelos muy pobres, con pocos nutrientes, y consiguen lo que les falta de una manera sorprendente: <mark>cazando insectos</mark>. Son las <mark>plantas carnívoras</mark>.</p><ul><li>La <b>venus atrapamoscas</b> tiene hojas como dos mandíbulas con pelitos. Cuando un insecto toca los pelitos, la hoja se cierra en menos de un segundo.</li><li>La <b>drosera</b>, o atrapamoscas de rocío, tiene pelitos con gotas pegajosas que brillan como el rocío. Los insectos se quedan pegados.</li><li>Las <b>plantas jarra</b> tienen hojas con forma de vaso, con un líquido en el fondo. Los insectos resbalan y caen dentro.</li></ul><p>Después, la planta digiere poco a poco al insecto con unos jugos especiales.</p><p>En España hay plantas carnívoras pequeñas, como algunas droseras y grasillas, que viven en turberas y zonas húmedas de montaña.</p>`,
        L6.filas("Carnívoras", [["venus", "se cierra", cRO], ["drosera", "gotas pegajosas", cNA], ["planta jarra", "trampa vaso", cVE], ["grasilla", "hoja pegajosa", cMO]]), ["wkTRNxUfDEY", "PLANTAS CARNÍVORAS: Tipos y cómo se alimentan🌱🕷️", "EcologíaVerde", 2196957]],
    ],
    "Flores, frutos y semillas": [
      ["El viaje de las semillas", `<p>Las plantas no pueden moverse, pero sus semillas sí viajan. Si cayeran todas junto a la planta madre, no tendrían espacio ni luz. Por eso se <mark>dispersan</mark> de muchas formas:</p><ul><li><b>Con el viento</b>: las semillas del diente de león llevan un paracaídas; las del arce tienen alas y bajan girando como un helicóptero.</li><li><b>Con los animales</b>: los pájaros comen frutos carnosos, como las cerezas, y dejan las semillas lejos con sus excrementos. Otras semillas, como las del cadillo, tienen ganchitos que se enganchan al pelo de los animales o a la ropa.</li><li><b>Con el agua</b>: el coco flota y puede viajar por el mar hasta otra isla.</li><li><b>Por sí mismas</b>: algunas plantas, como el guisante, tienen vainas que se secan y explotan lanzando las semillas.</li></ul><p>Las ardillas y los arrendajos entierran bellotas para comerlas en invierno. ¡Las que olvidan se convierten en nuevas encinas y robles!</p>`,
        H6.rueda("Semillas", "VIAJAN", [["viento", cAZ], ["animales", cNA], ["agua", cVE], ["explotan", cRO]]), ["RkXnoxzc9eI", "Dispersión de las semillas", "EnFoco", 333182]],
    ],
  },
  final: [
    ["Plantas récord", `<p>En el reino de las plantas hay auténticos <mark>gigantes</mark> y campeones:</p><ul><li>Las <b>secuoyas</b> de California son los árboles más altos del mundo: algunas miden más de 100 metros, como un edificio de 30 pisos.</li><li>El <b>baobab</b> de África tiene un tronco enorme que guarda agua para la época seca.</li><li>El <b>drago</b> es un árbol típico de Canarias. El Drago Milenario de Icod de los Vinos, en Tenerife, es muy antiguo y muy famoso.</li><li>La <b>rafflesia</b> tiene la flor más grande del mundo, de casi un metro, ¡y huele a carne podrida para atraer a las moscas!</li><li>El <b>bambú</b> es una de las plantas que crecen más deprisa: puede crecer casi un metro en un solo día.</li><li>Algunos <b>pinos</b> de Estados Unidos tienen más de 4.000 años.</li></ul><p>Recuerda que la edad de un árbol se puede saber contando los anillos de su tronco.</p>`,
      H6.rueda("Récords", "PLANTAS", [["secuoya", cVE], ["baobab", cNA], ["drago", cAZ], ["bambú", cRO]])],
    ["El huerto escolar", `<p>Un <mark>huerto</mark> en el colegio es una forma estupenda de ver crecer las plantas y aprender a cuidarlas.</p><p><b>Qué necesitamos</b>: un rincón con sol, tierra con abono, semillas o plantones, agua y herramientas pequeñas (pala, rastrillo y regadera). Si no hay suelo, se pueden usar jardineras o cajas.</p><p><b>Pasos</b>:</p><ul><li><b>1.</b> Preparar la tierra: quitar piedras y mezclarla con abono.</li><li><b>2.</b> Sembrar las semillas a la profundidad que indica el sobre.</li><li><b>3.</b> Regar sin encharcar y quitar las malas hierbas.</li><li><b>4.</b> Observar y anotar en un diario cómo crecen.</li><li><b>5.</b> ¡Cosechar y probar lo que hemos cultivado!</li></ul><p>Plantas fáciles para empezar: rábanos, lechugas, judías, fresas y plantas aromáticas como la albahaca o la menta. Las tomateras dan fruto en verano.</p><p>Con los restos de fruta y verdura se puede hacer <b>compost</b>, un abono natural para el huerto.</p>`,
      H6.flujo("Huerto", ["preparar|tierra", "sembrar|semillas", "regar|y cuidar", "cosechar|y probar"], cVE)],
  ],
  ejemplos: [
    ["¿Por qué el pino no pierde las hojas en otoño?", ["Hay árboles de hoja caduca y de hoja perenne.", "El pino es de hoja perenne."], "Porque es de hoja perenne."],
    ["¿Cómo viaja la semilla de una cereza?", ["Un pájaro se come la cereza.", "Deja la semilla lejos con sus excrementos."], "Con los animales."],
  ],
  errores: ["Pensar que las hojas se vuelven amarillas porque se pintan: el amarillo ya estaba debajo del verde.", "Creer que las plantas carnívoras no hacen fotosíntesis: también la hacen."],
  ejercicios: [
    ["b", "Di un árbol de hoja caduca.", "Roble, castaño o chopo."],
    ["b", "¿Qué color da la clorofila?", "Verde."],
    ["b", "Di una planta carnívora.", "Venus atrapamoscas, drosera, planta jarra o grasilla."],
    ["b", "¿Cómo viaja la semilla del diente de león?", "Con el viento."],
    ["b", "¿Cuál es el árbol más alto del mundo?", "La secuoya."],
    ["m", "¿Por qué las hojas cambian de color en otoño?", "El árbol deja de fabricar clorofila y se ven otros colores."],
    ["m", "¿Por qué cazan insectos las plantas carnívoras?", "Porque viven en suelos pobres en nutrientes."],
    ["m", "¿Cómo ayudan las ardillas a plantar árboles?", "Entierran bellotas y olvidan algunas."],
    ["m", "¿Qué árbol es típico de Canarias?", "El drago."],
    ["m", "¿Qué es el compost?", "Un abono natural hecho con restos."],
    ["a", "Recoge hojas de otoño y ordénalas por colores.", "Respuesta abierta."],
    ["a", "Busca semillas de distintos tipos y clasifícalas por su forma de viajar.", "Respuesta abierta."],
    ["a", "Planta rábanos y lleva un diario de crecimiento.", "Respuesta abierta."],
    ["a", "En la lectura, ¿dónde aterrizó Vilana?", "En un rincón de un huerto."],
  ],
  quiz: [
    ["La encina es de hoja…", ["perenne", "caduca", "carnívora"], "Hojas."],
    ["La venus atrapamoscas se cierra cuando…", ["un insecto toca sus pelitos", "llueve", "sale el sol"], "Carnívoras."],
    ["El coco viaja con…", ["el agua", "el viento", "las hormigas"], "Semillas."],
    ["La rafflesia tiene…", ["la flor más grande", "el tronco más alto", "la semilla más pequeña"], "Récords."],
    ["Una planta fácil para el huerto es…", ["el rábano", "la secuoya", "el baobab"], "Huerto."],
  ],
  examen: [
    ["En la lectura, ¿qué llevaba Vilana para volar?", ["un paracaídas", "alas de mariposa", "un globo"], "Lectura."],
    ["Las semillas del arce bajan…", ["girando como un helicóptero", "rodando", "nadando"], "Semillas."],
  ],
  tarjetas: [
    ["Otoño", "Hoja caduca o perenne; sin clorofila se ven amarillos y rojos."],
    ["Carnívoras", "Venus, drosera, jarra: cazan insectos en suelos pobres."],
    ["Semillas viajeras", "Viento, animales, agua o explosión."],
    ["Récords y huerto", "Secuoya, baobab, drago; preparar, sembrar, regar, cosechar."],
  ],
  glosario: [
    ["Hoja caduca", "Hoja que se cae en otoño."],
    ["Hoja perenne", "Hoja que se mantiene todo el año."],
    ["Clorofila", "Sustancia verde de las hojas."],
    ["Planta carnívora", "Planta que caza insectos."],
    ["Digerir", "Deshacer el alimento para aprovecharlo."],
    ["Dispersión", "Viaje de las semillas lejos de la planta."],
    ["Vaina", "Funda donde están las semillas de algunas plantas."],
    ["Secuoya", "Árbol más alto del mundo."],
    ["Drago", "Árbol típico de Canarias."],
    ["Huerto", "Terreno donde se cultivan hortalizas."],
    ["Abono", "Sustancia que alimenta la tierra."],
    ["Compost", "Abono natural hecho con restos."],
  ],
  situacion: {
    titulo: "Nuestro huerto escolar",
    reto: "La clase pone en marcha un pequeño huerto y estudia las plantas a lo largo del curso.",
    pasos: ["Recoger hojas de otoño y clasificar árboles caducos y perennes.", "Buscar semillas viajeras y clasificarlas.", "Preparar la tierra y sembrar rábanos y lechugas.", "Llevar un diario de crecimiento y preparar compost."],
    producto: "Un huerto con su diario y un herbario de hojas.",
    evaluacion: ["Explica los colores del otoño.", "Conoce plantas carnívoras.", "Describe la dispersión de semillas.", "Cuida un huerto."],
  },
});
