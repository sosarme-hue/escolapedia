// Ciencias de la Naturaleza 4º de Primaria: las plantas, partes y funciones. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, ciclo, vid, vgen, RD, PROF, arbol, sol, flor, nube, hoja, gota } = require("./_pri4b");

// Planta con raíz, tallo, hojas y flor para los dibujos.
const planta = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V-70" stroke="#15803d" stroke-width="4"/>${hoja(0, -30, 0.8, -30)}${hoja(0, -48, 0.8, 210)}<g transform="translate(0 -70)">${[0, 72, 144, 216, 288].map((a) => `<circle cx="${(Math.cos((a * Math.PI) / 180) * 8).toFixed(1)}" cy="${(Math.sin((a * Math.PI) / 180) * 8).toFixed(1)}" r="7" fill="var(--red)"/>`).join("")}<circle r="5" fill="var(--sun)"/></g><path d="M0 0 l-12 16 M0 0 l12 18 M0 0 v22 M-6 8 l-10 4 M6 9 l10 3" stroke="${COL.marron}" stroke-width="2"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Las plantas: partes y funciones",
  minutos: 45,
  objetivos: ["Conocer las partes de una planta y la función de cada una", "Explicar cómo se nutren las plantas y qué es la fotosíntesis", "Describir cómo se relacionan las plantas con su entorno", "Explicar la reproducción por semillas y la reproducción asexual", "Clasificar las plantas y valorar su importancia"],
  claves: ["raíz", "tallo", "hoja", "flor", "savia bruta", "savia elaborada", "fotosíntesis", "clorofila", "polinización", "semilla", "germinación", "fruto"],
  pregunta: {
    texto: "Un árbol enorme pesa toneladas y, sin embargo, la tierra de alrededor apenas disminuye con los años. ¿De dónde saca el árbol tanto material para crecer?",
    respuesta: "¡Sobre todo del <b>aire</b>! Mediante la <mark>fotosíntesis</mark>, las hojas toman <b>dióxido de carbono</b> del aire y, con el <b>agua</b> que suben las raíces y la energía de la <b>luz del sol</b>, fabrican su alimento. Con ese alimento construyen la madera, las hojas y los frutos. Del suelo solo toman agua y un poco de sales minerales.",
  },
  bloques: [
    {
      html: `<h3>Las plantas son seres vivos</h3><p>Las <mark>plantas</mark> son seres vivos pluricelulares, como los animales, pero muy diferentes de ellos:</p><p>• <b>Fabrican su propio alimento</b> con la luz del sol. No necesitan comer a otros seres vivos. Por eso decimos que son <b>autótrofas</b>.<br>• Viven <b>fijas</b> al suelo mediante sus raíces y no pueden desplazarse.<br>• Sus células tienen <b>pared celular</b> y <b>cloroplastos</b> con clorofila, que les da el color verde.<br>• Crecen durante toda su vida.</p><p>Como todos los seres vivos, las plantas realizan las tres <b>funciones vitales</b>: se nutren, se relacionan con su entorno y se reproducen.</p><p>Hay plantas de todos los tamaños: desde el diminuto musgo hasta las secuoyas, árboles que superan los cien metros de altura. Algunas viven solo unos meses, como el girasol, y otras miles de años. En España, en la isla de Tenerife, hay un drago con varios siglos de edad, y en Galicia hay castaños y robles muy antiguos.</p><p>Las plantas viven casi en cualquier lugar: en el bosque, en el desierto, en la nieve de las montañas e incluso dentro del agua.</p>`,
      svg: svg("Características de las plantas: fabrican su alimento, viven fijas y tienen clorofila", `${tit("¿Qué es una planta?")}${planta(60, 140, 1.15)}${sol(222, 56, 13)}${filas([["autótrofa", "fabrica su alimento", COL.verde], ["fija", "no se desplaza", COL.marron], ["verde", "tiene clorofila", "#15803d"]], 98, 26, { x: 116, wa: 64, wb: 68, dos: false })}`),
    },
    {
      html: `<h3>Las partes de la planta</h3><p>La mayoría de las plantas que conoces tienen <b>cuatro partes</b> principales, que son sus órganos:</p><p>• La <mark>raíz</mark>: crece bajo tierra. <b>Sujeta</b> la planta al suelo y <b>absorbe</b> el agua y las sales minerales. Para ello tiene unos pelillos finísimos, los pelos absorbentes. Algunas raíces gruesas guardan alimento, como la zanahoria o el rábano.</p><p>• El <mark>tallo</mark>: <b>sostiene</b> las hojas, las flores y los frutos, y por dentro tiene unos tubitos que <b>transportan</b> el agua y el alimento. Puede ser <b>herbáceo</b>, blando y verde, como el de la amapola, o <b>leñoso</b>, duro, como el tronco de un árbol.</p><p>• Las <mark>hojas</mark>: suelen ser verdes, planas y finas. En ellas la planta <b>fabrica su alimento</b> y <b>respira</b>. Tienen una parte plana, el <b>limbo</b>, y un rabito, el <b>peciolo</b>. Por el limbo corren los <b>nervios</b>.</p><p>• Las <mark>flores</mark>: son los órganos de la <b>reproducción</b>. De ellas saldrán los frutos y las semillas.</p>`,
      svg: svg("Partes de una planta: flor, hojas, tallo y raíz", `${tit("Partes de la planta")}<path d="M10 128 H146" stroke="${COL.marron}" stroke-width="2"/><rect x="10" y="128" width="136" height="44" fill="${COL.marron}" fill-opacity=".12"/>${planta(90, 128, 1.2)}${filas([["flor", "reproducción", COL.rojo], ["hojas", "alimento", COL.verde], ["tallo", "sostiene y lleva", "#15803d"], ["raíz", "sujeta y absorbe", COL.marron]], 50, 32, { x: 154, wa: 90, wb: 90, dos: true })}`),
    },
    {
      html: `<h3>La nutrición de las plantas</h3><p>Las plantas fabrican su alimento siguiendo varios pasos:</p><p>1. <b>Absorción</b>: las raíces toman del suelo <b>agua</b> con <b>sales minerales</b> disueltas. Esa mezcla se llama <mark>savia bruta</mark>.</p><p>2. <b>Transporte</b>: la savia bruta <b>sube</b> por unos tubos finísimos del tallo, llamados vasos, hasta llegar a las hojas. ¡En un árbol alto el agua puede subir decenas de metros!</p><p>3. <b>Fotosíntesis</b>: en las hojas, la planta mezcla la savia bruta con el <b>dióxido de carbono</b> del aire y, gracias a la energía de la luz, la transforma en alimento. La savia rica en alimento se llama <mark>savia elaborada</mark>.</p><p>4. <b>Reparto</b>: la savia elaborada viaja por otros vasos a <b>todas las partes</b> de la planta, también a las raíces, para que crezcan. Lo que sobra se guarda como reserva en raíces, tallos, frutos o semillas: por eso las patatas, las zanahorias o las castañas son tan nutritivas.</p><p>Además, las plantas <b>respiran</b> día y noche, como los animales: toman oxígeno y expulsan dióxido de carbono.</p>`,
      svg: svg("Savia bruta sube desde la raíz a las hojas y savia elaborada baja al resto de la planta", `${tit("Savia bruta y elaborada")}<path d="M10 140 H250" stroke="${COL.marron}" stroke-width="2"/><path d="M110 140 V40" stroke="#15803d" stroke-width="10" stroke-opacity=".35"/>${hoja(110, 52, 1.3, -20)}${hoja(110, 64, 1.3, 200)}<path d="M110 140 l-16 22 M110 140 l16 22" stroke="${COL.marron}" stroke-width="3"/>${fl(100, 132, 100, 70, COL.azul, 2.5)}${fl(120, 70, 120, 132, COL.naranja, 2.5)}${tx(56, 100, "savia bruta", 80, { weight: 700, color: COL.azul })}${tx(56, 116, "agua y sales ↑", 80, { color: COL.azul })}${tx(192, 100, "savia elaborada", 100, { weight: 700, color: COL.naranja })}${tx(192, 116, "alimento ↓", 100, { color: COL.naranja })}`),
    },
    {
      html: `<h3>La fotosíntesis</h3><p>La <mark>fotosíntesis</mark> es el proceso mediante el cual las plantas fabrican su alimento usando la <b>luz</b>. La palabra significa «fabricar con luz». Ocurre sobre todo en las <b>hojas</b>, dentro de los cloroplastos, gracias a una sustancia verde llamada <mark>clorofila</mark>, que capta la energía del sol.</p><p>Para hacer la fotosíntesis, la planta necesita:</p><p>• <b>Agua</b> y sales minerales, que suben desde la raíz.<br>• <b>Dióxido de carbono</b>, que entra desde el aire por unos agujeritos diminutos de las hojas llamados <b>estomas</b>.<br>• <b>Luz</b> del sol.</p><p>Y produce:</p><p>• <b>Alimento</b> (azúcares), que forma la savia elaborada.<br>• <b>Oxígeno</b>, que sale al aire por los estomas.</p><p>¡Este oxígeno es el que respiramos los animales y las personas! Por eso se dice que los bosques y las algas del mar son los «pulmones» del planeta. Sin plantas no habría oxígeno ni alimento para los demás seres vivos.</p><p>Comprueba que una planta necesita luz: tapa una hoja con papel de aluminio unos días. Cuando lo quites, verás que esa zona está más pálida.</p>`,
      svg: svg("Fotosíntesis: entran luz, agua y dióxido de carbono; salen alimento y oxígeno", `${tit("Fotosíntesis")}${sol(40, 56, 14)}${hoja(100, 104, 2.4, -10)}${fl(56, 66, 100, 90, COL.sol, 2.5)}${fl(30, 110, 96, 106, COL.gris, 2.5)}${fl(130, 160, 132, 118, COL.azul, 2.5)}${fl(190, 90, 232, 70, COL.verde, 2.5)}${fl(190, 112, 232, 132, COL.naranja, 2.5)}${tx(44, 126, "dióxido de carbono", 80, { color: COL.gris, weight: 700 })}${tx(100, 168, "agua", 50, { color: COL.azul, weight: 700 })}${tx(222, 58, "oxígeno", 70, { color: COL.verde, weight: 700 })}${tx(222, 148, "alimento", 70, { color: COL.naranja, weight: 700 })}`),
      video: vid("QThutHjxsUs"),
    },
    {
      html: `<h3>La relación de las plantas</h3><p>Aunque no tienen ojos ni oídos y no se desplazan, las plantas también <b>perciben</b> lo que pasa a su alrededor y <b>responden</b> con movimientos lentos. Así realizan la función de relación:</p><p>• Responden a la <b>luz</b>: los tallos y las hojas crecen hacia ella. Por eso una planta junto a la ventana se inclina hacia el cristal. Los girasoles jóvenes giran su flor siguiendo al sol.</p><p>• Responden a la <b>gravedad</b>: las raíces siempre crecen hacia abajo y los tallos hacia arriba, aunque pongas la semilla del revés.</p><p>• Responden al <b>agua</b>: las raíces crecen hacia donde hay humedad.</p><p>• Algunas responden al <b>contacto</b>: las plantas trepadoras, como la parra o la hiedra, se enrollan en lo que tocan, y la mimosa púdica cierra sus hojas al rozarla.</p><p>• Responden a las <b>estaciones</b>: muchos árboles pierden las hojas en otoño para ahorrar agua y energía en invierno. Se llaman árboles de <b>hoja caduca</b>, como el roble o el castaño. Los que conservan las hojas todo el año, como el pino o la encina, son de <b>hoja perenne</b>.</p>`,
      svg: svg("Una planta en la ventana se inclina hacia la luz; raíces hacia abajo", `${tit("Las plantas responden")}<rect x="190" y="34" width="56" height="90" fill="var(--water)" fill-opacity=".2" stroke="var(--ink)" stroke-width="2"/><path d="M218 34 V124 M190 79 H246" stroke="var(--ink)" stroke-width="1.5"/>${sol(218, 56, 9)}<path d="M80 140 q0 -40 40 -76" stroke="#15803d" stroke-width="4" fill="none"/>${hoja(100, 100, 0.8, -40)}${hoja(112, 80, 0.8, -40)}<path d="M60 140 h40 l-6 24 h-28z" fill="${COL.naranja}" fill-opacity=".6"/>${fl(150, 70, 180, 70, COL.sol, 2)}${tx(80, 52, "hacia la luz", 90, { weight: 700, color: COL.sol })}${tx(130, 172, "caduca: pierde hojas · perenne: las conserva", 236)}`),
    },
    {
      html: `<h3>La flor y la polinización</h3><p>La <mark>flor</mark> es el órgano de la reproducción de muchas plantas. Sus partes son:</p><p>• El <b>cáliz</b>: formado por los <b>sépalos</b>, hojitas verdes que protegen la flor cuando es un capullo.<br>• La <b>corola</b>: formada por los <b>pétalos</b>, de colores vistosos para atraer a los insectos.<br>• Los <mark>estambres</mark>: la parte <b>masculina</b>. En su punta producen el <b>polen</b>, un polvillo amarillo.<br>• El <mark>pistilo</mark>: la parte <b>femenina</b>, en el centro de la flor. En su base, el <b>ovario</b>, están los óvulos.</p><p>Para que se formen semillas, el polen tiene que llegar al pistilo de otra flor de la misma especie. Este viaje se llama <mark>polinización</mark>. Puede hacerse de dos formas:</p><p>• Por los <b>animales</b>, sobre todo insectos como las abejas y las mariposas. Van de flor en flor buscando el néctar dulce y llevan el polen pegado al cuerpo sin darse cuenta.<br>• Por el <b>viento</b>, que transporta el polen de plantas como el pino, el trigo o el olivo. Este polen es el que causa muchas alergias en primavera.</p>`,
      svg: svg("Partes de la flor: pétalos, sépalos, estambres y pistilo, y una abeja polinizando", `${tit("Partes de la flor")}<g transform="translate(90 100)">${[0, 60, 120, 180, 240, 300].map((a) => `<ellipse cx="${(Math.cos((a * Math.PI) / 180) * 30).toFixed(1)}" cy="${(Math.sin((a * Math.PI) / 180) * 30).toFixed(1)}" rx="20" ry="12" transform="rotate(${a} ${(Math.cos((a * Math.PI) / 180) * 30).toFixed(1)} ${(Math.sin((a * Math.PI) / 180) * 30).toFixed(1)})" fill="${COL.rojo}" fill-opacity=".45"/>`).join("")}<circle r="9" fill="${COL.verde}"/>${[0, 72, 144, 216, 288].map((a) => `<path d="M0 0 L${(Math.cos((a * Math.PI) / 180) * 18).toFixed(1)} ${(Math.sin((a * Math.PI) / 180) * 18).toFixed(1)}" stroke="${COL.sol}" stroke-width="2"/><circle cx="${(Math.cos((a * Math.PI) / 180) * 18).toFixed(1)}" cy="${(Math.sin((a * Math.PI) / 180) * 18).toFixed(1)}" r="3" fill="${COL.sol}"/>`).join("")}</g>${filas([["pétalos", "atraen", COL.rojo], ["estambres", "polen", COL.sol], ["pistilo", "óvulos", COL.verde]], 60, 34, { x: 160, wa: 80, wb: 80, dos: true })}`),
    },
    {
      html: `<h3>Semillas, frutos y germinación</h3><p>Cuando el polen llega al pistilo, se produce la <b>fecundación</b>. Después, la flor cambia: los pétalos se caen, los <b>óvulos</b> se convierten en <mark>semillas</mark> y el <b>ovario</b> crece y se transforma en el <mark>fruto</mark>, que envuelve y protege las semillas.</p><p>Hay frutos <b>carnosos</b>, jugosos, como el melocotón, la naranja o el tomate, y frutos <b>secos</b>, como la nuez, la almendra o la vaina de las judías.</p><p>Las semillas tienen que alejarse de la planta madre para tener sitio donde crecer. Esto se llama <b>dispersión</b>: unas vuelan con el <b>viento</b>, como las del diente de león; otras se pegan al pelo de los <b>animales</b> o viajan en su tripa cuando se comen el fruto; otras flotan en el <b>agua</b>, como el coco.</p><p>Cuando una semilla cae en un lugar con <b>agua, aire y temperatura</b> adecuados, se hincha y se abre: es la <mark>germinación</mark>. Primero sale la raíz hacia abajo, después el tallito hacia arriba con sus primeras hojas. Mientras no puede hacer la fotosíntesis, la nueva planta se alimenta de las reservas que guarda la semilla.</p>`,
      svg: svg("Ciclo de vida: semilla, germinación, planta, flor, fruto", `${tit("Ciclo de una planta con flor")}${ciclo([["semilla", COL.marron], ["germina", COL.verde], ["planta", "#15803d"], ["flor", COL.rojo], ["fruto", COL.naranja]], 130, 102, 56, 64)}`),
      video: vid("89NwOC1KFCA"),
    },
    {
      html: `<h3>Otras formas de reproducción</h3><p>No todas las plantas tienen flores ni semillas. Hay plantas <b>sin flores</b>:</p><p>• Los <b>musgos</b>: pequeñas plantas que forman alfombras verdes en rocas y troncos húmedos. No tienen raíces, tallos ni hojas verdaderos.<br>• Los <b>helechos</b>: tienen hojas grandes y divididas. Por el envés de las hojas se ven unos puntitos marrones donde fabrican las <b>esporas</b>.</p><p>Musgos y helechos se reproducen por <mark>esporas</mark>, unas células diminutas que lleva el viento y que, en un lugar húmedo, dan lugar a una nueva planta.</p><p>Además, muchas plantas pueden reproducirse <b>sin flores ni semillas</b>, a partir de un trozo de ellas. Es la <mark>reproducción asexual</mark>, y la nueva planta es idéntica a la madre:</p><p>• Por <b>esquejes</b>: un trozo de tallo puesto en agua o tierra echa raíces, como ocurre con el geranio o el potos.<br>• Por <b>tubérculos</b>: las patatas tienen yemas, los «ojos», de donde salen nuevas plantas.<br>• Por <b>bulbos</b>, como la cebolla, el ajo o el tulipán.<br>• Por <b>estolones</b>: tallos que se arrastran por el suelo y echan raíces, como los de la fresa.</p>`,
      svg: svg("Formas de reproducción asexual: esqueje, tubérculo, bulbo y estolón", `${tit("Reproducción asexual")}${fichas([["Esqueje", "geranio, potos", COL.verde], ["Tubérculo", "patata", COL.marron], ["Bulbo", "cebolla, ajo", COL.morado], ["Estolón", "fresa", COL.rojo]], 2, 34, 54)}${tx(130, 164, "musgos y helechos: esporas", 236, { weight: 700, color: "#15803d" })}`),
    },
    {
      html: `<h3>Clasificación e importancia de las plantas</h3><p>Las plantas se pueden clasificar de muchas formas. Según su <b>tallo</b> y su tamaño:</p><p>• <b>Hierbas</b>: tallo blando, verde y bajo. El trigo, la amapola o la menta.<br>• <b>Arbustos</b>: tallo leñoso, ramificado desde el suelo, de menos de cinco metros. El romero, la jara o el rosal.<br>• <b>Árboles</b>: tallo leñoso y alto, con un tronco único del que salen las ramas a cierta altura. El roble, el pino o el olivo.</p><p>Las plantas son <b>imprescindibles</b>:</p><p>• Producen el <b>oxígeno</b> que respiramos.<br>• Son la base de la <b>alimentación</b> de todos los animales, también la nuestra: cereales, frutas, verduras, legumbres, aceite.<br>• Nos dan <b>materiales</b>: madera, papel, corcho, algodón, lino.<br>• Muchas medicinas se obtienen de plantas.<br>• Sus raíces sujetan el suelo y evitan que la lluvia lo arrastre.<br>• Dan sombra, refrescan las ciudades y son el hogar de muchos animales.</p><p>Por eso hay que cuidarlas: no arrancarlas en el campo, prevenir los incendios y plantar árboles.</p>`,
      svg: svg("Hierba, arbusto y árbol", `${tit("Hierba, arbusto y árbol")}<path d="M10 150 H250" stroke="${COL.marron}" stroke-width="2"/>${flor(46, 150, "var(--red)")}<g transform="translate(120 150)"><path d="M0 0 l-14 -24 M0 0 l0 -30 M0 0 l14 -24" stroke="#8a5a2b" stroke-width="3"/><circle cx="-14" cy="-30" r="12" fill="var(--leaf)"/><circle cx="0" cy="-38" r="13" fill="var(--leaf)"/><circle cx="14" cy="-30" r="12" fill="var(--leaf)"/></g>${arbol(200, 150, 1.8)}${et(46, 168, "hierba", 70, { size: 11 })}${et(120, 168, "arbusto", 70, { size: 11 })}${et(200, 168, "árbol", 70, { size: 11 })}`),
    },
  ],
  figura: {
    titulo: "Las plantas en ocho ideas",
    svg: rejilla([
      ["Raíz", "sujeta y absorbe", COL.marron],
      ["Tallo", "sostiene y transporta", "#15803d"],
      ["Hojas", "fotosíntesis", COL.verde],
      ["Flor", "reproducción", COL.rojo],
      ["Fotosíntesis", "luz + agua + CO₂", COL.sol],
      ["Relación", "hacia la luz", COL.naranja],
      ["Semilla", "germina", COL.morado],
      ["Asexual", "esquejes, bulbos", COL.azul],
    ], 4, 86, "Resumen de las plantas"),
  },
  video: vgen("gLJS8p8HnSY", "partes de la planta para niños"),
  ejemplos: [
    { enunciado: "¿Qué parte de la planta comemos en cada caso: zanahoria, lechuga, espárrago, coliflor, garbanzo?",
      pasos: ["La zanahoria crece bajo tierra: raíz.", "La lechuga son hojas.", "El espárrago es un tallo joven.", "La coliflor son flores sin abrir.", "El garbanzo es una semilla."],
      resultado: "Raíz, hoja, tallo, flor y semilla." },
    { enunciado: "Ponemos dos plantas iguales: una en un armario oscuro y otra junto a la ventana. ¿Qué pasará al cabo de dos semanas?",
      pasos: ["Sin luz, la planta no puede hacer la fotosíntesis.", "No fabrica alimento y se debilita; sus hojas amarillean.", "La de la ventana crece verde, inclinada hacia la luz."],
      resultado: "La del armario estará pálida y débil; la de la ventana, sana." },
    { enunciado: "Una judía germina en algodón. Ordena: sale el tallo, la semilla se hincha, salen las hojas, sale la raíz.",
      pasos: ["Primero absorbe agua y se hincha.", "Después sale la raíz hacia abajo.", "Luego el tallo hacia arriba.", "Por último las primeras hojas."],
      resultado: "Se hincha → raíz → tallo → hojas." },
  ],
  errores: [
    "Pensar que las plantas sacan su alimento de la tierra: lo fabrican con la fotosíntesis.",
    "Creer que las plantas no respiran: respiran día y noche.",
    "Confundir savia bruta (agua y sales) con savia elaborada (con alimento).",
    "Pensar que todas las plantas tienen flores: musgos y helechos no.",
    "Creer que el fruto sale de los pétalos: sale del ovario del pistilo.",
  ],
  ejercicios: [
    { q: "Escribe las partes de una planta y la función de cada una.", sol: "Raíz: sujeta y absorbe. Tallo: sostiene y transporta. Hojas: fabrican el alimento. Flor: reproducción." },
    { q: "¿Qué es la savia bruta? ¿Y la elaborada?", sol: "La bruta es agua con sales que sube de la raíz; la elaborada lleva el alimento fabricado en las hojas." },
    { q: "¿Qué necesita una planta para hacer la fotosíntesis y qué produce?", sol: "Necesita agua, sales, dióxido de carbono y luz. Produce alimento y oxígeno." },
    { q: "¿Para qué sirve la clorofila?", sol: "Para captar la energía de la luz del sol." },
    { q: "Escribe dos formas en que las plantas responden a su entorno.", sol: "Los tallos crecen hacia la luz y las raíces hacia abajo y hacia el agua." },
    { q: "¿Qué diferencia hay entre un árbol de hoja caduca y uno de hoja perenne?", sol: "El de hoja caduca pierde las hojas en otoño; el de hoja perenne las conserva todo el año." },
    { q: "¿Qué es la polinización y quién la hace?", sol: "El paso del polen de los estambres al pistilo. La hacen los insectos o el viento." },
    { q: "¿Qué necesita una semilla para germinar?", sol: "Agua, aire y una temperatura adecuada." },
    { q: "¿Cómo se reproducen los helechos?", sol: "Por esporas." },
    { q: "Escribe tres razones por las que las plantas son importantes.", sol: "Producen oxígeno, son alimento y nos dan materiales como la madera (también medicinas)." },
  ],
  quiz: [
    { q: "La parte que absorbe el agua es la…", o: ["hoja", "raíz", "flor"], a: 1, e: "La raíz." },
    { q: "La fotosíntesis ocurre sobre todo en…", o: ["las hojas", "las raíces", "las semillas"], a: 0, e: "En las hojas." },
    { q: "La sustancia verde que capta la luz es la…", o: ["savia", "clorofila", "polen"], a: 1, e: "Clorofila." },
    { q: "La fotosíntesis produce…", o: ["dióxido de carbono", "oxígeno", "polen"], a: 1, e: "Oxígeno y alimento." },
    { q: "La savia que sube de la raíz es la…", o: ["bruta", "elaborada", "dulce"], a: 0, e: "Savia bruta." },
    { q: "El polen se fabrica en los…", o: ["pétalos", "estambres", "sépalos"], a: 1, e: "Estambres." },
    { q: "El fruto se forma a partir del…", o: ["ovario", "tallo", "pétalo"], a: 0, e: "Ovario." },
    { q: "La encina es de hoja…", o: ["caduca", "perenne", "seca"], a: 1, e: "Perenne." },
    { q: "La patata es un…", o: ["bulbo", "tubérculo", "fruto"], a: 1, e: "Tubérculo." },
    { q: "El romero es un…", o: ["árbol", "arbusto", "musgo"], a: 1, e: "Arbusto." },
  ],
  examen: [
    { q: "Las plantas son autótrofas porque…", o: ["se mueven", "fabrican su alimento", "comen insectos"], a: 1, e: "Fabrican su alimento." },
    { q: "Los estomas sirven para…", o: ["intercambiar gases", "absorber agua", "hacer polen"], a: 0, e: "Por ellos entra y sale aire." },
    { q: "Al germinar, lo primero que sale es la…", o: ["flor", "raíz", "hoja"], a: 1, e: "La raíz." },
    { q: "Los musgos no tienen…", o: ["células", "flores", "clorofila"], a: 1, e: "Flores." },
  ],
  feynman: ["Qué hace cada parte de la planta", "Cómo fabrica la planta su alimento", "Cómo se forman y germinan las semillas"],
  mapa: mapa("PLANTAS", "var(--pri)", [
    ["Partes", "raíz · tallo · hoja · flor", COL.verde],
    ["Nutrición", "savia · fotosíntesis", COL.sol],
    ["Relación", "luz · gravedad · agua", COL.naranja],
    ["Reproducción", "semillas · esporas · esquejes", COL.rojo],
  ], 250),
  tarjetas: [
    ["Raíz", "Sujeta la planta y absorbe agua y sales."],
    ["Savia bruta", "Agua y sales que suben de la raíz."],
    ["Fotosíntesis", "Fabricar alimento con luz, agua y dióxido de carbono."],
    ["Clorofila", "Sustancia verde que capta la luz."],
    ["Estambre", "Parte masculina de la flor, con polen."],
    ["Pistilo", "Parte femenina de la flor, con los óvulos."],
    ["Polinización", "Viaje del polen hasta el pistilo."],
    ["Germinación", "Nacimiento de una planta a partir de la semilla."],
  ],
  familias: ["Haced germinar lentejas o judías en un vaso con algodón húmedo y apuntad los cambios.", "Poned un esqueje de potos en un vaso de agua y esperad a que salgan raíces.", "En la frutería, clasificad qué parte de la planta es cada producto.", "Recoged hojas en otoño y clasificadlas por su forma."],
  profesores: PROF("Ciencias de la Naturaleza: las plantas, partes y funciones; nutrición y fotosíntesis; relación; reproducción sexual y asexual; clasificación; importancia de las plantas", ["Germinación en algodón con diario de observación y medidas.", "Experimento de la hoja tapada con papel de aluminio.", "Apio en agua con colorante para ver el transporte de la savia."]),
  fuentes: [RD, wiki("Fotosíntesis", "Fotosíntesis"), wiki("Flor", "Flor"), wiki("Germinación", "Germinación")],
  revisado: REV,
};
