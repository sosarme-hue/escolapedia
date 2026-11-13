// Ciencias Sociales 4º de Primaria: el relieve de España. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, ciclo, vid, vgen, RD, PROF, monte, nube, sol, tabla } = require("./_pri4b");

// Silueta muy simplificada de la península ibérica para los dibujos.
const peninsula = (o = "") => `<path d="M38 52 L72 40 L120 44 L168 50 L204 56 L222 70 L206 92 L196 118 L176 140 L146 156 L110 162 L84 150 L60 156 L40 140 L46 116 L34 96 L30 72z" fill="${COL.verde}" fill-opacity=".18" stroke="${COL.verde}" stroke-width="2" ${o}/>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "El relieve de España",
  minutos: 45,
  objetivos: ["Conocer las principales formas del relieve de interior y de costa", "Situar España en Europa y conocer su territorio", "Identificar la Meseta Central y los sistemas montañosos que la rodean", "Conocer las depresiones, las montañas exteriores y el relieve de las islas", "Describir las costas de España"],
  claves: ["relieve", "montaña", "cordillera", "llanura", "meseta", "valle", "depresión", "Meseta Central", "sistema montañoso", "costa", "cabo", "golfo"],
  pregunta: {
    texto: "Si viajas en coche de Madrid a Valencia, la carretera primero va bastante llana y después baja mucho hasta el mar. ¿Por qué Madrid está tan alto?",
    respuesta: "Porque Madrid está en la <mark>Meseta Central</mark>, una gran llanura elevada que ocupa el centro de la península, a unos 600 o 700 metros sobre el nivel del mar. Para llegar a la costa hay que bajar de la meseta: por eso la carretera desciende. España es uno de los países más <b>montañosos</b> y elevados de Europa.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el relieve?</h3><p>El <mark>relieve</mark> es el conjunto de <b>formas</b> que tiene la superficie de la Tierra: montañas, llanuras, valles, costas… Unas zonas están más altas y otras más bajas.</p><p>Para saber lo alto que está un lugar se mide su <b>altitud</b>: la distancia en vertical desde ese punto hasta el <b>nivel del mar</b>. Se mide en metros. Por ejemplo, el pico Mulhacén tiene 3.479 metros de altitud y la ciudad de Cádiz está casi a 0 metros.</p><p>En los mapas físicos el relieve se representa con <b>colores</b>: el verde indica las zonas bajas, el amarillo y el naranja las de altura media y el marrón las más altas. El mar se pinta de azul, más oscuro cuanto más profundo.</p><p>El relieve no es siempre igual: cambia muy lentamente, a lo largo de millones de años. Las montañas se forman cuando chocan las placas de la corteza terrestre, y se desgastan por la acción del agua, el viento, el hielo y los cambios de temperatura. Este desgaste se llama <b>erosión</b>. Los ríos, por ejemplo, excavan los valles y arrastran tierra y piedras que depositan en las llanuras y en el mar.</p>`,
      svg: svg("Altitud de un monte medida desde el nivel del mar y colores del mapa físico", `${tit("Altitud")}<path d="M10 150 H250" stroke="var(--water)" stroke-width="3"/>${monte(140, 150, 160, 110)}<path d="M228 40 V150" stroke="var(--ink)" stroke-width="1.5"/>${fl(228, 100, 228, 42, "var(--ink)", 1.5)}${fl(228, 100, 228, 148, "var(--ink)", 1.5)}<path d="M140 40 H228" stroke="var(--line)" stroke-dasharray="3 3"/>${tx(222, 100, "altitud", 40, { anchor: "end", weight: 700 })}${tx(74, 164, "nivel del mar: 0 m", 120)}${[["#16a34a", "bajo"], ["#facc15", "medio"], ["#a16207", "alto"]].map(([c, s], i) => `<rect x="${16 + i * 30}" y="40" width="26" height="12" fill="${c}"/>${tx(29 + i * 30, 66, s, 30)}`).join("")}`),
    },
    {
      html: `<h3>Las formas del relieve de interior</h3><p>En el interior de los continentes encontramos estas formas de relieve:</p><p>• <mark>Montaña</mark>: una gran elevación del terreno. Sus partes son la <b>cima</b> o cumbre (la parte más alta), las <b>laderas</b> (los lados) y el <b>pie</b> (la parte baja).<br>• <b>Sierra</b>: una fila de montañas no muy alta, con cimas en forma de dientes de sierra.<br>• <mark>Cordillera</mark>: un conjunto de montañas y sierras unidas, largo y elevado, como los Pirineos.<br>• <b>Colina</b>: una elevación pequeña y redondeada.<br>• <mark>Llanura</mark>: un terreno <b>llano</b> y a poca altitud, sin apenas desniveles. Es muy buena para cultivar.<br>• <mark>Meseta</mark>: una llanura <b>elevada</b>, a bastante altitud sobre el nivel del mar.<br>• <mark>Valle</mark>: el terreno <b>bajo</b> entre dos montañas, por donde suele correr un río.<br>• <b>Depresión</b>: una zona hundida, más baja que las tierras que la rodean.</p><p>Un truco para no confundir llanura y meseta: las dos son llanas, pero la meseta es como una mesa: está alta.</p>`,
      svg: svg("Formas del relieve de interior: montaña, cordillera, meseta, valle y llanura", `${tit("Relieve de interior")}<path d="M10 150 H250" stroke="var(--line)" stroke-width="2"/>${monte(44, 150, 60, 80)}${monte(74, 150, 50, 60)}<path d="M100 150 V106 H160 V150z" fill="${COL.sol}" fill-opacity=".5"/>${monte(184, 150, 50, 70)}${monte(232, 150, 40, 50)}<path d="M200 150 q8 -10 16 0" stroke="var(--water)" stroke-width="3" fill="none"/>${et(58, 164, "cordillera", 80, { size: 10.5 })}${et(130, 98, "meseta", 70, { size: 10.5, color: COL.sol })}${et(208, 168, "valle", 50, { size: 10.5, color: COL.azul })}${tx(130, 166, "llanura alta", 70)}${et(44, 60, "cima", 40, { size: 10 })}`),
    },
    {
      html: `<h3>Las formas del relieve de costa</h3><p>La <mark>costa</mark> es la zona donde la tierra se encuentra con el mar. Tiene sus propias formas de relieve:</p><p>• <b>Playa</b>: una costa baja y llana cubierta de arena o de piedras pequeñas (cantos rodados).<br>• <b>Acantilado</b>: una costa alta y rocosa que cae casi en vertical sobre el mar. Las olas la golpean y la van desgastando.<br>• <mark>Cabo</mark>: una parte de tierra que <b>entra en el mar</b>, como una punta.<br>• <mark>Golfo</mark>: una gran parte de mar que <b>entra en la tierra</b>. Si es pequeña, se llama <b>bahía</b> o <b>cala</b>.<br>• <b>Península</b>: una porción de tierra rodeada de agua por todas partes menos por una, el istmo, que la une al continente.<br>• <b>Isla</b>: una porción de tierra rodeada de agua por todas partes. Un grupo de islas cercanas forma un <b>archipiélago</b>.<br>• <b>Ría</b>: la desembocadura de un río en la que entra el mar, formando un brazo de agua alargado. Son típicas de Galicia.<br>• <b>Delta</b>: un terreno con forma de triángulo formado por la tierra que deposita un río al desembocar, como el delta del Ebro.</p>`,
      svg: svg("Formas de costa: cabo, golfo, península, isla, playa y acantilado", `${tit("Relieve de costa")}<rect x="10" y="32" width="240" height="140" rx="8" fill="var(--water)" fill-opacity=".35"/><path d="M10 172 V60 Q50 70 60 90 L84 70 L96 96 Q120 130 150 120 Q170 110 168 90 L190 100 Q214 104 220 140 L250 150 V172z" fill="${COL.sol}" fill-opacity=".45" stroke="${COL.marron}" stroke-width="1.5"/><ellipse cx="200" cy="58" rx="20" ry="11" fill="${COL.sol}" fill-opacity=".45" stroke="${COL.marron}" stroke-width="1.5"/>${et(82, 62, "cabo", 50, { size: 10.5 })}${et(150, 100, "golfo", 50, { size: 10.5, color: COL.azul })}${et(200, 62, "isla", 40, { size: 10 })}${et(40, 140, "península", 70, { size: 10.5 })}${et(220, 162, "playa", 50, { size: 10 })}`),
      video: vid("9BNlu3JQeGc"),
    },
    {
      html: `<h3>España en el mapa</h3><p><b>España</b> está en el sur de <b>Europa</b>. Su territorio está formado por:</p><p>• La mayor parte de la <mark>península ibérica</mark>, que comparte con Portugal, Andorra y Gibraltar.<br>• Las <b>islas Baleares</b>, en el mar Mediterráneo: Mallorca, Menorca, Ibiza, Formentera y otras más pequeñas.<br>• Las <b>islas Canarias</b>, en el océano Atlántico, cerca de la costa de África: Tenerife, Gran Canaria, Lanzarote, Fuerteventura, La Palma, La Gomera, El Hierro y La Graciosa.<br>• Las ciudades de <b>Ceuta</b> y <b>Melilla</b>, en el norte de África.</p><p>La península ibérica tiene una forma más o menos cuadrada, que algunos comparan con una piel de toro extendida. Está rodeada de agua por casi todas partes:</p><p>• Al <b>norte</b>, el mar Cantábrico.<br>• Al <b>este</b> y al <b>sur</b>, el mar Mediterráneo.<br>• Al <b>oeste</b> y al <b>noroeste</b>, el océano Atlántico.</p><p>Por el noreste, los <b>Pirineos</b> la unen con Francia y el resto de Europa. Al sur, el <b>estrecho de Gibraltar</b>, de solo 14 kilómetros, la separa de África.</p>`,
      svg: svg("La península ibérica con el mar Cantábrico, el Mediterráneo y el Atlántico", `${tit("España y sus mares")}<rect x="4" y="30" width="252" height="146" rx="8" fill="var(--water)" fill-opacity=".25"/>${peninsula()}<path d="M30 72 L38 52 L62 46 L66 100 L60 156 L40 140 L46 116 L34 96z" fill="${COL.gris}" fill-opacity=".25"/>${et(100, 38, "mar Cantábrico", 90, { size: 10.5, color: COL.azul })}${et(222, 160, "Mediterráneo", 64, { size: 10, color: COL.azul })}${et(34, 170, "Atlántico", 56, { size: 10, color: COL.azul })}${et(122, 104, "ESPAÑA", 70, { size: 13 })}${et(48, 112, "Portugal", 36, { size: 8, weight: 400 })}${et(212, 50, "Pirineos", 50, { size: 9.5, color: COL.marron })}`),
    },
    {
      html: `<h3>La Meseta Central</h3><p>El centro de la península está ocupado por la <mark>Meseta Central</mark>, una gran <b>llanura elevada</b>, a unos 600 o 700 metros de altitud, que ocupa casi la mitad del territorio. Es como un gran escalón en mitad de España.</p><p>El <b>Sistema Central</b>, una cordillera que la cruza de oeste a este, la divide en dos partes:</p><p>• La <b>Submeseta Norte</b>, más alta, regada por el río Duero. Allí están Valladolid, Salamanca o Burgos.<br>• La <b>Submeseta Sur</b>, algo más baja, regada por los ríos Tajo y Guadiana. Allí están Madrid, Toledo o Ciudad Real.</p><p>En la Submeseta Sur se levantan los <b>Montes de Toledo</b>, unas sierras de poca altura que separan las cuencas del Tajo y del Guadiana.</p><p>El paisaje de la meseta tiene grandes extensiones llanas, con campos de cereales, viñedos y pueblos que se ven desde lejos. El clima es de inviernos muy fríos y veranos muy calurosos, porque está lejos del mar y a bastante altitud.</p><p>Madrid, la capital de España, está en el centro de la Meseta: es una de las capitales más altas de Europa.</p>`,
      svg: svg("La Meseta Central dividida por el Sistema Central en submeseta norte y sur", `${tit("La Meseta Central")}${peninsula()}<path d="M70 70 L170 70 L176 136 L74 140z" fill="${COL.sol}" fill-opacity=".45"/><path d="M62 104 Q120 92 180 98" stroke="${COL.marron}" stroke-width="5"/>${et(122, 86, "Submeseta Norte", 100, { size: 10 })}${et(122, 124, "Submeseta Sur", 100, { size: 10 })}${et(206, 104, "Sistema Central", 70, { size: 9, color: COL.marron })}<circle cx="128" cy="112" r="3.5" fill="${COL.rojo}"/>${tx(146, 140, "Madrid", 40, { color: COL.rojo, weight: 700 })}`),
    },
    {
      html: `<h3>Las montañas que rodean la Meseta</h3><p>La Meseta Central está bordeada por varios <mark>sistemas montañosos</mark>, como si fueran los muros de un gran patio:</p><p>• Al <b>norte</b>, la <b>Cordillera Cantábrica</b>, que la separa del mar Cantábrico. En ella están los <b>Picos de Europa</b>, con picos muy escarpados y el primer parque nacional de España.<br>• Al <b>este</b>, el <b>Sistema Ibérico</b>, una cordillera larga que va desde Burgos hasta cerca de Valencia. Su pico más alto es el Moncayo.<br>• Al <b>sur</b>, <b>Sierra Morena</b>, que la separa del valle del Guadalquivir. Desde la meseta parece una sierra baja, pero desde Andalucía se ve como un gran escalón.</p><p>Y en el <b>interior</b> de la Meseta:</p><p>• El <b>Sistema Central</b>, con la sierra de Guadarrama, cerca de Madrid, y la sierra de Gredos, donde está el pico Almanzor.<br>• Los <b>Montes de Toledo</b>.</p><p>Al noroeste está el <b>Macizo Galaico</b>, un conjunto de montañas viejas y redondeadas por la erosión.</p><p>Un consejo para recordarlas: piensa en una caja abierta. La Cantábrica es la pared de arriba, el Ibérico la de la derecha y Sierra Morena la de abajo.</p>`,
      svg: svg("Sistemas montañosos alrededor de la Meseta: Cantábrica, Ibérico, Sierra Morena y Central", `${tit("Montañas de la Meseta")}${peninsula()}<path d="M56 58 L150 56" stroke="${COL.marron}" stroke-width="6"/><path d="M152 64 L176 120" stroke="${COL.marron}" stroke-width="6"/><path d="M70 138 L160 134" stroke="${COL.marron}" stroke-width="6"/><path d="M66 100 Q110 92 150 96" stroke="${COL.marron}" stroke-width="4" stroke-opacity=".7"/>${et(102, 44, "Cordillera Cantábrica", 120, { size: 9.5, color: COL.marron })}${et(214, 92, "Sistema Ibérico", 80, { size: 9.5, color: COL.marron })}${et(112, 152, "Sierra Morena", 90, { size: 9.5, color: COL.marron })}${et(108, 86, "Sistema Central", 80, { size: 9, weight: 400 })}`),
    },
    {
      html: `<h3>Montañas y depresiones exteriores</h3><p>Fuera de la Meseta también hay grandes montañas y llanuras. Las <b>montañas exteriores</b> son:</p><p>• Los <mark>Pirineos</mark>, al noreste, entre España y Francia. Son una cordillera muy alta, con cumbres nevadas gran parte del año. Su pico más alto es el <b>Aneto</b>, de 3.404 metros.<br>• Los <b>Montes Vascos</b>, que unen los Pirineos con la Cordillera Cantábrica.<br>• La <b>Cordillera Costero-Catalana</b>, paralela a la costa de Cataluña, donde está la montaña de Montserrat.<br>• Los <mark>Sistemas Béticos</mark>, en el sur y el sureste, junto al Mediterráneo. En ellos está <b>Sierra Nevada</b>, con el <b>Mulhacén</b> (3.479 m), el pico más alto de la península.</p><p>Entre estas montañas y la Meseta hay dos grandes <b>depresiones</b>, zonas bajas con forma de triángulo por donde corren grandes ríos:</p><p>• La <b>depresión del Ebro</b>, en el noreste, entre los Pirineos y el Sistema Ibérico. Allí está Zaragoza.<br>• La <b>depresión del Guadalquivir</b>, en el sur, entre Sierra Morena y los Sistemas Béticos. Allí están Sevilla y Córdoba.</p><p>Son tierras llanas y fértiles, muy buenas para la agricultura.</p>`,
      svg: svg("Pirineos, Sistemas Béticos y depresiones del Ebro y del Guadalquivir", `${tit("Fuera de la Meseta")}${peninsula()}<path d="M150 52 L210 64" stroke="${COL.marron}" stroke-width="7"/><path d="M110 154 L190 124" stroke="${COL.marron}" stroke-width="7"/><path d="M160 70 L200 72 L180 100z" fill="${COL.verde}" fill-opacity=".5"/><path d="M60 146 L120 140 L84 128z" fill="${COL.verde}" fill-opacity=".5"/>${et(196, 46, "Pirineos", 60, { size: 10, color: COL.marron })}${et(196, 150, "Béticos", 60, { size: 10, color: COL.marron })}${et(182, 88, "Ebro", 40, { size: 9.5, color: "#15803d" })}${et(78, 126, "Guadalquivir", 70, { size: 9.5, color: "#15803d" })}`),
      video: vid("KcbP0NcX2t4"),
    },
    {
      html: `<h3>El relieve de las islas</h3><p>Las islas de España tienen un relieve muy distinto.</p><p>Las <mark>islas Baleares</mark> son, en realidad, la continuación de los Sistemas Béticos bajo el mar. Su relieve es suave, con llanuras y colinas, salvo en el noroeste de Mallorca, donde se levanta la <b>Serra de Tramuntana</b>, con el Puig Major, el punto más alto del archipiélago. Sus costas tienen preciosas calas de agua transparente.</p><p>Las <mark>islas Canarias</mark> son de origen <b>volcánico</b>: se formaron por erupciones de volcanes que surgieron del fondo del océano hace millones de años. Por eso su relieve es muy montañoso, con conos volcánicos, cráteres, coladas de lava solidificada y playas de arena negra. En Tenerife está el <b>Teide</b>, un volcán de <b>3.715 metros</b>, que es el <b>pico más alto de España</b>. En Lanzarote, el Parque Nacional de Timanfaya parece un paisaje de otro planeta. Y en La Palma hubo una erupción en 2021.</p><p>Las islas más occidentales, como La Palma, La Gomera o El Hierro, son muy escarpadas, con barrancos profundos. Las orientales, como Lanzarote y Fuerteventura, son más llanas y secas, con dunas de arena.</p>`,
      svg: svg("Los picos más altos de España: Teide, Mulhacén y Aneto", `${tit("Picos más altos")}${[[50, 3715, "Teide (volcán)", COL.rojo], [130, 3479, "Mulhacén", COL.marron], [210, 3404, "Aneto", COL.azul]].map(([x, h, n, c]) => `${monte(x, 140, 70, h / 36)}${et(x, 154, n, 76, { size: 11, color: c })}${tx(x, 168, String(h).replace(/(\d)(\d{3})$/, "$1.$2") + " m", 70)}`).join("")}`),
    },
    {
      html: `<h3>Las costas de España</h3><p>España tiene casi <b>8.000 kilómetros</b> de costa, contando las islas. Cada costa tiene su propio aspecto:</p><p>• La <b>costa cantábrica</b>, en el norte, es alta y <b>rocosa</b>, con acantilados y playas pequeñas entre rocas. Aquí está el <b>cabo de Peñas</b>, en Asturias.</p><p>• La <b>costa gallega</b>, en el noroeste, es muy <b>recortada</b>: está llena de <b>rías</b>, como las de Vigo o Arousa. También tiene cabos famosos, como el de <b>Finisterre</b>, que en la Antigüedad se creía que era el fin del mundo.</p><p>• La <b>costa atlántica andaluza</b>, en el suroeste, es <b>baja y arenosa</b>, con largas playas y marismas, como las de <b>Doñana</b>, en la desembocadura del Guadalquivir.</p><p>• La <b>costa mediterránea</b> alterna playas largas y llanas con zonas de acantilados. Tiene el <b>delta del Ebro</b>, el <b>golfo de Valencia</b>, el <b>cabo de la Nao</b>, el <b>cabo de Gata</b> y la <b>albufera de Valencia</b>, un gran lago junto al mar.</p><p>Las costas son zonas muy pobladas y turísticas. Para protegerlas hay que evitar construir demasiado junto al mar y no dejar basura en las playas.</p>`,
      svg: svg("Tipos de costa de España: cantábrica, gallega, atlántica andaluza y mediterránea", `${tit("Costas de España")}${fichas([["Cantábrica", "alta, acantilados", COL.marron], ["Gallega", "rías y cabos", COL.verde], ["Atlántica sur", "baja, arenosa", COL.sol], ["Mediterránea", "playas, deltas", COL.azul]], 2, 34)}`),
    },
  ],
  figura: {
    titulo: "El relieve de España en ocho ideas",
    svg: rejilla([
      ["Relieve", "formas de la superficie", COL.marron],
      ["Interior", "montaña, meseta, valle", COL.sol],
      ["Costa", "cabo, golfo, playa", COL.azul],
      ["Meseta Central", "llanura elevada", COL.naranja],
      ["Alrededor", "Cantábrica, Ibérico, Morena", COL.rojo],
      ["Exteriores", "Pirineos y Béticos", COL.morado],
      ["Depresiones", "Ebro y Guadalquivir", COL.verde],
      ["Islas", "Teide, 3.715 m", COL.agua],
    ], 4, 86, "Resumen del relieve de España"),
  },
  video: vgen("rslqrmfrdHQ", "relieve de España para niños"),
  ejemplos: [
    { enunciado: "¿Cuántos metros más alto es el Teide que el Aneto?",
      pasos: ["Teide: 3.715 m. Aneto: 3.404 m.", "3.715 − 3.404 = 311."],
      resultado: "311 metros más alto." },
    { enunciado: "¿Llanura o meseta? Un terreno llano a 700 m de altitud.",
      pasos: ["Las dos formas son llanas.", "La llanura está a poca altitud; la meseta está elevada."],
      resultado: "Es una meseta." },
    { enunciado: "Viajas de Valladolid a Toledo. ¿Qué cordillera cruzas y de qué submeseta a cuál pasas?",
      pasos: ["Valladolid está en la Submeseta Norte.", "Toledo está en la Submeseta Sur.", "Entre ellas está el Sistema Central."],
      resultado: "Cruzas el Sistema Central, de la Submeseta Norte a la Sur." },
  ],
  errores: [
    "Confundir cabo (tierra que entra en el mar) con golfo (mar que entra en la tierra).",
    "Pensar que la meseta es una montaña: es una llanura elevada.",
    "Creer que el pico más alto de España es el Mulhacén: es el Teide; el Mulhacén es el más alto de la península.",
    "Situar Sierra Morena en el norte: está al sur de la Meseta.",
    "Olvidar que Baleares, Canarias, Ceuta y Melilla también son España.",
  ],
  ejercicios: [
    { q: "¿Qué es el relieve? ¿Y la altitud?", sol: "El relieve son las formas de la superficie terrestre; la altitud, la altura de un lugar sobre el nivel del mar." },
    { q: "Explica la diferencia entre montaña, cordillera y sierra.", sol: "La montaña es una gran elevación; la sierra, una fila de montañas no muy alta; la cordillera, un gran conjunto de montañas unidas." },
    { q: "¿Qué diferencia hay entre una isla y una península?", sol: "La isla está rodeada de agua por todas partes; la península, por todas menos por una." },
    { q: "¿Qué mares y océanos rodean la península?", sol: "El mar Cantábrico al norte, el Mediterráneo al este y al sur, y el océano Atlántico al oeste." },
    { q: "¿Qué cordillera divide la Meseta en dos? ¿Cómo se llaman las dos partes?", sol: "El Sistema Central. Submeseta Norte y Submeseta Sur." },
    { q: "Escribe los sistemas montañosos que rodean la Meseta.", sol: "Cordillera Cantábrica, Sistema Ibérico y Sierra Morena." },
    { q: "¿Dónde están los Pirineos y cuál es su pico más alto?", sol: "Entre España y Francia, al noreste. El Aneto." },
    { q: "Nombra las dos grandes depresiones de España.", sol: "La depresión del Ebro y la del Guadalquivir." },
    { q: "¿Por qué el relieve de Canarias es tan montañoso?", sol: "Porque las islas son de origen volcánico." },
    { q: "Describe la costa gallega.", sol: "Muy recortada, con muchas rías y cabos, como Finisterre." },
  ],
  quiz: [
    { q: "Una llanura elevada es una…", o: ["meseta", "depresión", "playa"], a: 0, e: "Meseta." },
    { q: "Tierra que entra en el mar:", o: ["golfo", "cabo", "bahía"], a: 1, e: "Cabo." },
    { q: "Al norte de la península está el…", o: ["Mediterráneo", "Cantábrico", "Atlántico sur"], a: 1, e: "Mar Cantábrico." },
    { q: "Madrid está en la…", o: ["Submeseta Sur", "depresión del Ebro", "costa"], a: 0, e: "Submeseta Sur." },
    { q: "Al sur de la Meseta está…", o: ["el Sistema Ibérico", "Sierra Morena", "la Cantábrica"], a: 1, e: "Sierra Morena." },
    { q: "Los Picos de Europa están en la…", o: ["Cordillera Cantábrica", "Sierra Nevada", "Sistema Central"], a: 0, e: "Cordillera Cantábrica." },
    { q: "El Mulhacén está en…", o: ["los Pirineos", "Sierra Nevada", "Canarias"], a: 1, e: "Sierra Nevada." },
    { q: "El pico más alto de España es el…", o: ["Aneto", "Teide", "Moncayo"], a: 1, e: "El Teide." },
    { q: "Zaragoza está en la depresión del…", o: ["Ebro", "Guadalquivir", "Tajo"], a: 0, e: "Ebro." },
    { q: "Las rías son típicas de…", o: ["Galicia", "Murcia", "Madrid"], a: 0, e: "Galicia." },
  ],
  examen: [
    { q: "Las Canarias son de origen…", o: ["volcánico", "glaciar", "fluvial"], a: 0, e: "Volcánico." },
    { q: "El estrecho de Gibraltar separa España de…", o: ["Francia", "África", "Portugal"], a: 1, e: "África." },
    { q: "Doñana está en la costa…", o: ["cantábrica", "atlántica andaluza", "gallega"], a: 1, e: "Atlántica andaluza." },
    { q: "La Serra de Tramuntana está en…", o: ["Mallorca", "Tenerife", "Asturias"], a: 0, e: "Mallorca." },
  ],
  feynman: ["Qué formas de relieve hay en el interior y en la costa", "Cómo es la Meseta Central y qué montañas la rodean", "Qué montañas, depresiones y costas hay fuera de la Meseta"],
  mapa: mapa("RELIEVE DE ESPAÑA", "var(--pri)", [
    ["Meseta Central", "Submeseta Norte y Sur", COL.sol],
    ["Alrededor", "Cantábrica · Ibérico · Morena", COL.marron],
    ["Exteriores", "Pirineos · Béticos", COL.rojo],
    ["Islas y costas", "Teide · rías · deltas", COL.azul],
  ], 250),
  tarjetas: [
    ["Relieve", "Conjunto de formas de la superficie terrestre."],
    ["Meseta", "Llanura elevada."],
    ["Valle", "Terreno bajo entre montañas, con un río."],
    ["Cabo", "Tierra que entra en el mar."],
    ["Golfo", "Mar que entra en la tierra."],
    ["Meseta Central", "Gran llanura elevada del centro de la península."],
    ["Mulhacén", "Pico más alto de la península (3.479 m), en Sierra Nevada."],
    ["Teide", "Volcán de Tenerife, pico más alto de España (3.715 m)."],
  ],
  familias: ["Buscad en un mapa físico de España vuestra localidad y las montañas más cercanas.", "Haced una maqueta del relieve de España con plastilina o papel maché.", "En un viaje, fijaos en si la carretera sube o baja y por qué.", "Buscad fotografías del Teide, los Picos de Europa y el delta del Ebro."],
  profesores: PROF("Ciencias Sociales: formas del relieve de interior y de costa; el relieve de España, la Meseta Central, sistemas montañosos interiores y exteriores, depresiones, relieve insular y costas", ["Maqueta del relieve de la península con plastilina sobre un mapa.", "Puzle de sistemas montañosos para colocar sobre un mapa mudo.", "Concurso de localización en mapa físico por equipos."]),
  fuentes: [RD, { t: "Instituto Geográfico Nacional (IGN)", url: "https://www.ign.es/" }, wiki("Relieve de España", "Relieve_de_España"), wiki("Meseta Central", "Meseta_Central")],
  revisado: REV,
};
