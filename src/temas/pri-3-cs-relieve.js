// Ciencias Sociales 3º de Primaria: el relieve. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, vid, vgen, RD, PROF, sol, nube, monte, arbol, casa } = require("./_pri3b");

// Paisaje base: suelo con relieve dibujado a mano.
const tierra = (d, c = "#a16207") => `<path d="${d}" fill="${c}" fill-opacity=".45" stroke="${c}" stroke-width="1.5"/>`;
const mar = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="var(--water)" fill-opacity=".6"/>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "El relieve: montañas, valles y llanuras",
  minutos: 45,
  objetivos: ["Entender qué es el relieve y que cambia muy despacio", "Reconocer las formas del relieve del interior: montaña, sierra, cordillera, valle, llanura y meseta", "Reconocer las formas del relieve de la costa: cabo, golfo, playa, acantilado, península e isla", "Conocer algunas montañas y cordilleras de España", "Interpretar dibujos y mapas sencillos del relieve"],
  claves: ["relieve", "montaña", "cumbre", "ladera", "sierra", "cordillera", "valle", "llanura", "meseta", "costa", "cabo", "golfo"],
  pregunta: {
    texto: "Si pudieras volar como un pájaro sobre España, verías que el suelo no es plano: hay montañas altísimas, valles hondos, llanuras enormes y costas con playas y rocas. ¿Cómo se llama todo eso?",
    respuesta: "Se llama <mark>relieve</mark>: son las <b>formas</b> que tiene la superficie de la Tierra. Hay formas del <b>interior</b>, como las montañas, los valles y las llanuras, y formas de la <b>costa</b>, como las playas, los cabos y los golfos. España es uno de los países con más montañas de Europa.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el relieve?</h3><p>El <mark>relieve</mark> es el conjunto de <b>formas</b> que tiene la superficie de la Tierra: unas zonas son altas, otras bajas, unas planas y otras inclinadas.</p><p>Distinguimos dos grandes tipos:</p><p>• El <b>relieve del interior</b>: las formas que hay tierra adentro, lejos del mar, como las montañas, los valles, las llanuras y las mesetas.<br>• El <b>relieve de la costa</b>: las formas que hay donde la tierra se encuentra con el mar, como las playas, los acantilados, los cabos y los golfos.</p><p>El relieve <b>cambia</b>, pero muy, muy despacio: hacen falta miles o millones de años. Lo modifican el <b>agua</b> de los ríos y del mar, el <b>viento</b>, el <b>hielo</b>, los cambios de temperatura y también los <b>volcanes</b> y los <b>terremotos</b>. Las personas también cambiamos el relieve cuando hacemos túneles, carreteras o embalses.</p><p>Para saber lo alta que está una zona, medimos su <mark>altitud</mark>: los metros que hay desde el nivel del mar hasta ese lugar.</p>`,
      svg: svg("Paisaje con montañas, valle, llanura y costa", `${tit("Formas del relieve")}${sol(226, 44, 10)}${tierra("M0 150 L40 80 L70 120 L100 70 L140 150z")}${tierra("M140 150 H210 V156 H140z", "#15803d")}${mar(210, 140, 50, 30)}<rect x="0" y="150" width="210" height="20" fill="#15803d" fill-opacity=".35"/>${et(40, 72, "montaña", 50, { size: 9.5, color: COL.marron })}${et(70, 140, "valle", 40, { size: 9.5 })}${et(176, 140, "llanura", 50, { size: 9.5, color: COL.verde })}${et(236, 162, "mar", 30, { size: 9.5, color: COL.azul })}${tx(130, 176, "interior y costa", 200)}`),
    },
    {
      html: `<h3>Las montañas</h3><p>Una <mark>montaña</mark> es una gran elevación del terreno. Es mucho más alta que el terreno que la rodea. Si la elevación es pequeña y de forma suave se llama <b>colina</b> o <b>cerro</b>.</p><p>Las montañas tienen varias partes:</p><p>• La <mark>cumbre</mark> o cima: la parte más alta. Si termina en punta, se llama <b>pico</b>.<br>• Las <mark>laderas</mark>: los lados inclinados de la montaña. Por ellas bajan los ríos y los esquiadores.<br>• El <b>pie</b> o falda: la parte más baja, donde empieza la montaña.</p><p>En las montañas altas hace <b>frío</b>, porque cuanto más subimos, más baja la temperatura. Por eso en sus cumbres hay <b>nieve</b> en invierno, y en algunas todo el año.</p><p>Muchas montañas juntas forman una <mark>sierra</mark>. Y varias sierras unidas forman una <mark>cordillera</mark>, que es como una larga cadena de montañas. Entre dos montañas puede haber un paso llamado <b>puerto</b>, por donde pasan las carreteras.</p>`,
      svg: svg("Partes de una montaña: cumbre, ladera y pie", `${tit("Partes de una montaña")}${monte(130, 160, 170, 116)}${fl(196, 52, 140, 52, COL.rojo, 1.5)}${et(220, 56, "cumbre", 50, { size: 10.5, color: COL.rojo })}${fl(206, 110, 170, 110, COL.marron, 1.5)}${et(230, 114, "ladera", 50, { size: 10.5, color: COL.marron })}${fl(60, 150, 52, 166, COL.verde, 1.5)}${et(40, 176, "pie", 30, { size: 10.5, color: COL.verde })}${tx(196, 172, "arriba hace más frío", 120)}`),
      video: vid("n7saInzFOYs"),
    },
    {
      html: `<h3>Valles, llanuras y mesetas</h3><p>No todo el relieve son montañas. También hay zonas hundidas y zonas planas:</p><p>• Un <mark>valle</mark> es una zona baja y alargada que hay entre montañas. Casi siempre tiene un <b>río</b> en el fondo, que es el que lo ha ido excavando durante miles de años. Los valles de montaña tienen forma de V; los que excavaron antiguos glaciares, forma de U.</p><p>• Una <mark>llanura</mark> es una zona extensa y <b>plana</b>, de poca altitud, casi siempre cerca del mar o junto a los grandes ríos. Como el suelo es llano y fértil, en las llanuras hay muchos cultivos y muchas ciudades.</p><p>• Una <mark>meseta</mark> es una llanura <b>elevada</b>: un terreno plano pero alto, a cientos de metros sobre el nivel del mar. En el centro de España está la <b>Meseta Central</b>, una de las más grandes de Europa.</p><p>Otras formas son la <b>depresión</b>, una zona hundida y más baja que el terreno de alrededor, como la depresión del Ebro o la del Guadalquivir.</p>`,
      svg: svg("Valle entre montañas, llanura baja y meseta alta y plana", `${tit("Valle, llanura y meseta")}${tierra("M10 110 L40 54 L64 104 L88 54 L118 110z")}<path d="M60 104 q4 4 8 0" stroke="var(--water)" stroke-width="3" fill="none"/>${tierra("M130 110 L150 70 H240 L250 110z", "#b45309")}${tierra("M10 160 H250 V168 H10z", "#15803d")}${et(64, 124, "valle", 50, { size: 10.5 })}${et(194, 62, "meseta: alta y plana", 120, { size: 10, color: COL.marron })}${et(130, 150, "llanura: baja y plana", 140, { size: 10, color: COL.verde })}`),
    },
    {
      html: `<h3>El relieve de la costa</h3><p>La <mark>costa</mark> es la zona donde la tierra se encuentra con el mar. Las olas golpean la costa sin parar y la van cambiando. Estas son sus formas principales:</p><p>• <mark>Playa</mark>: costa baja y llana, cubierta de arena o de piedrecitas llamadas cantos.<br>• <mark>Acantilado</mark>: costa alta, de rocas, cortada casi en vertical sobre el mar.<br>• <mark>Cabo</mark>: trozo de tierra que se mete en el mar, como una punta.<br>• <mark>Golfo</mark>: entrada grande del mar en la tierra. Si es pequeña se llama <b>bahía</b>, y si es muy pequeña, <b>cala</b>.<br>• <mark>Península</mark>: tierra rodeada de agua por todas partes menos por una, el <b>istmo</b>, que la une al continente. España y Portugal están en la península ibérica.<br>• <mark>Isla</mark>: tierra rodeada de agua por todas partes. Un grupo de islas es un <b>archipiélago</b>, como las islas Baleares o las islas Canarias.</p><p>Truco: el cabo y el golfo son opuestos. En el cabo la tierra entra en el mar; en el golfo, el mar entra en la tierra.</p>`,
      svg: svg("Costa con cabo, golfo, playa, isla y península", `${tit("Formas de la costa")}${mar(10, 36, 240, 136)}<path d="M10 172 V60 H70 L90 40 L100 60 H120 Q150 110 180 70 L200 66 L230 120 L250 120 V172z" fill="var(--leaf)" fill-opacity=".85" stroke="#15803d" stroke-width="1.5"/><ellipse cx="200" cy="44" rx="18" ry="8" fill="var(--leaf)" stroke="#15803d" stroke-width="1.5"/>${et(122, 48, "cabo", 40, { size: 10, color: COL.marron })}${et(150, 80, "golfo", 40, { size: 10, color: COL.azul })}${et(200, 44, "isla", 30, { size: 9.5 })}${et(60, 130, "tierra", 50, { size: 10, color: "#15803d" })}<path d="M120 60 Q150 108 180 70" stroke="var(--sun)" stroke-width="4" fill="none"/>${et(150, 116, "playa", 40, { size: 9.5, color: COL.sol })}`),
    },
    {
      html: `<h3>Las montañas de España</h3><p>España es un país muy <b>montañoso</b>. En el centro está la <b>Meseta Central</b>, y a su alrededor y por dentro hay muchas cordilleras y sierras:</p><p>• El <mark>Sistema Central</mark> divide la Meseta en dos partes. Aquí están las sierras de Gredos y de Guadarrama.<br>• Los <mark>Montes de Toledo</mark>, en el sur de la Meseta.<br>• La <mark>cordillera Cantábrica</mark>, en el norte, con los Picos de Europa.<br>• El <mark>Sistema Ibérico</mark>, al este de la Meseta.<br>• <mark>Sierra Morena</mark>, al sur de la Meseta.<br>• Los <mark>Pirineos</mark>, en el noreste, en la frontera con Francia. Aquí está el <b>Aneto</b>, el pico más alto de los Pirineos (3.404 m).<br>• Las <mark>cordilleras Béticas</mark>, en el sur, con <b>Sierra Nevada</b> y el pico <b>Mulhacén</b> (3.479 m), el más alto de la península.</p><p>Y la montaña más alta de toda España está en una isla: el <mark>Teide</mark>, un volcán de Tenerife, en las islas Canarias, que mide 3.715 metros.</p>`,
      svg: svg("Mapa sencillo de España con las principales cordilleras", `${tit("Montañas de España")}<path d="M40 56 L190 50 L222 82 L202 112 L208 136 L156 162 L96 158 L52 140 L36 96z" fill="var(--leaf)" fill-opacity=".3" stroke="#15803d" stroke-width="1.5"/>${[[70, 60], [90, 59], [110, 58], [130, 58]].map(([x, y]) => monte(x, y + 8, 18, 12)).join("")}${[[166, 58], [182, 62], [198, 66]].map(([x, y]) => monte(x, y + 8, 16, 12)).join("")}${[[90, 104], [110, 100], [130, 98]].map(([x, y]) => monte(x, y, 18, 12)).join("")}${[[130, 150], [150, 148], [170, 144]].map(([x, y]) => monte(x, y, 18, 14)).join("")}${et(100, 44, "Cantábrica", 70, { size: 9.5, color: COL.marron })}${et(206, 46, "Pirineos", 60, { size: 9.5, color: COL.marron })}${et(110, 116, "Sistema Central", 90, { size: 9 })}${et(150, 170, "Béticas: Mulhacén", 110, { size: 9, color: COL.rojo })}`),
    },
    {
      html: `<h3>Las costas de España</h3><p>España tiene muchos kilómetros de costa, y cada una es diferente:</p><p>• La <b>costa cantábrica</b>, en el norte, es <b>alta y rocosa</b>, con muchos <b>acantilados</b>, porque las montañas llegan casi hasta el mar. Tiene entrantes como la ría de Bilbao.</p><p>• La <b>costa gallega</b>, en el noroeste, tiene <b>rías</b>: valles de ríos que fueron inundados por el mar, como las Rías Baixas. Allí está el <b>cabo de Finisterre</b>.</p><p>• La <b>costa mediterránea</b>, en el este y el sur, es casi siempre <b>baja</b>, con largas <b>playas</b> de arena. Tiene el <b>cabo de Creus</b>, el de <b>la Nao</b> y el de <b>Gata</b>, el golfo de <b>Valencia</b> y el delta del Ebro.</p><p>• La <b>costa atlántica del sur</b>, en Andalucía, tiene playas y marismas; allí está el <b>golfo de Cádiz</b>.</p><p>• Las <b>islas</b>: las <b>Baleares</b> (Mallorca, Menorca, Ibiza y Formentera) en el Mediterráneo, y las <b>Canarias</b> en el océano Atlántico, que son de origen <b>volcánico</b>.</p>`,
      svg: svg("Tipos de costa en España: cantábrica alta, gallega con rías, mediterránea baja e islas", `${tit("Costas de España")}${fichas([["Cantábrica", "alta, acantilados", COL.marron], ["Gallega", "rías y cabos", COL.verde], ["Mediterránea", "baja, playas", COL.azul], ["Islas", "Baleares y Canarias", COL.morado]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Representamos el relieve</h3><p>¿Cómo se dibuja algo que tiene altura en un papel plano? Los cartógrafos usan varios trucos:</p><p>• Los <mark>colores</mark>: en los mapas físicos, cada color indica una altitud. El <b>verde</b> se usa para las zonas bajas, como las llanuras; el <b>amarillo</b> y el <b>naranja</b>, para las zonas medias, como las mesetas; y el <b>marrón</b>, para las montañas altas. Las zonas más altas a veces son blancas, como la nieve. El mar se pinta de <b>azul</b>: más claro cerca de la costa y más oscuro donde es más profundo.</p><p>• Las <mark>curvas de nivel</mark>: son líneas que unen los puntos que están a la misma altura. Si están muy juntas, el terreno es muy inclinado; si están separadas, el terreno es suave.</p><p>• Las <b>maquetas</b>: modelos en tres dimensiones, hechos con plastilina, cartón o arcilla, que muestran el relieve en pequeño.</p><p>La explicación de lo que significa cada color está en la <b>leyenda</b> del mapa, que suele ir en una esquina.</p>`,
      svg: svg("Leyenda de colores de un mapa físico: verde bajo, amarillo medio, marrón alto, azul mar", `${tit("Colores del relieve")}${[["#fff", "más de 2.000 m: nieve"], ["#92400e", "montañas altas"], ["#f59e0b", "mesetas y sierras"], ["#86efac", "llanuras bajas"], ["#60a5fa", "mar"]].map(([c, s], i) => `<rect x="40" y="${38 + i * 26}" width="34" height="18" rx="3" fill="${c}" stroke="var(--line)"/>${tx(84, 51 + i * 26, s, 160, { anchor: "start" })}`).join("")}`),
      video: vid("nOl9y1OeL9k"),
    },
    {
      html: `<h3>El relieve y la vida de las personas</h3><p>El relieve influye mucho en cómo vivimos:</p><p>• En las <b>montañas</b> hace frío, el terreno es inclinado y es difícil cultivar. Hay pocos pueblos y suelen ser pequeños, con casas de piedra y tejados muy inclinados para que resbale la nieve. Se vive de la <b>ganadería</b>, de la madera de los bosques y del <b>turismo</b>: senderismo y esquí.</p><p>• En las <b>llanuras</b> y en los <b>valles</b> con río, el suelo es plano y fértil. Es más fácil <b>cultivar</b>, construir y hacer carreteras. Por eso allí hay más pueblos y ciudades grandes.</p><p>• En la <b>costa</b> se vive de la <b>pesca</b>, del comercio con barcos en los <b>puertos</b> y del turismo de playa. Muchas grandes ciudades de España están en la costa, como Barcelona, Valencia o Málaga.</p><p>Las personas también cambiamos el relieve: abrimos túneles en las montañas, construimos puentes sobre los valles, hacemos carreteras y quitamos tierra al mar para ampliar los puertos.</p>`,
      svg: svg("Casas en la montaña, cultivos en la llanura y barco en la costa", `${tit("Vivir en cada relieve")}${filas([["montaña", "ganadería, esquí, pocos pueblos", COL.marron], ["llanura", "cultivos y grandes ciudades", COL.verde], ["costa", "pesca, puertos y playas", COL.azul]], 64, 40, { x: 24, wa: 70, wb: 200, dos: true })}`),
    },
    {
      html: `<h3>¡Hacemos una maqueta!</h3><p>Vamos a construir el relieve con <b>plastilina</b> sobre un cartón. Necesitas plastilina marrón, verde, amarilla, blanca y azul, un cartón y palillos con etiquetas de papel.</p><p>1. Pon plastilina <b>azul</b> en un lado del cartón: es el mar.<br>2. Junto al mar, haz una zona <b>verde</b> y plana: la llanura. Añade una <b>playa</b> amarilla y un <b>cabo</b> que entre en el mar.<br>3. Al otro lado, levanta <b>montañas</b> marrones con la cumbre blanca. Une varias para formar una <b>sierra</b>.<br>4. Entre dos montañas, haz un <b>valle</b> y pon un río azul que baje hasta el mar.<br>5. Haz una <b>meseta</b>: una zona alta pero plana.<br>6. Pon una <b>isla</b> en el mar.<br>7. Clava las etiquetas con el nombre de cada forma.</p><p><b>Repaso:</b> ¿Cuál es la diferencia entre una llanura y una meseta? → Las dos son planas, pero la meseta es alta y la llanura es baja. ¿Y entre un cabo y un golfo? → En el cabo, la tierra entra en el mar; en el golfo, el mar entra en la tierra.</p>`,
      svg: svg("Maqueta de plastilina con mar, playa, llanura, montañas y una isla", `${tit("Maqueta del relieve")}<rect x="16" y="40" width="228" height="128" rx="6" fill="#d6c4a8" stroke="var(--line)" stroke-width="2"/>${mar(20, 44, 70, 120)}<rect x="90" y="44" width="10" height="120" fill="var(--sun)" fill-opacity=".7"/><rect x="100" y="104" width="140" height="60" fill="#86efac"/>${monte(160, 104, 50, 50)}${monte(210, 104, 50, 56)}<ellipse cx="50" cy="80" rx="14" ry="8" fill="#86efac"/>${et(140, 140, "llanura", 50, { size: 10, color: "#15803d" })}${et(56, 140, "mar", 30, { size: 10, color: COL.azul })}`),
    },
  ],
  figura: {
    titulo: "El relieve en ocho ideas",
    svg: rejilla([
      ["Relieve", "formas del terreno", COL.marron],
      ["Montaña", "cumbre, ladera, pie", COL.naranja],
      ["Cordillera", "cadena de sierras", COL.rojo],
      ["Valle", "zona baja con río", COL.verde],
      ["Llanura", "baja y plana", COL.verde],
      ["Meseta", "alta y plana", COL.sol],
      ["Cabo / golfo", "tierra en el mar / al revés", COL.azul],
      ["Isla", "rodeada de agua", COL.agua],
    ], 4, 86, "Resumen del relieve"),
  },
  video: vgen("oJykj5nHD2Y", "el relieve para niños montañas valles llanuras"),
  ejemplos: [
    { enunciado: "Una zona es plana y está a 700 metros de altitud. ¿Es una llanura o una meseta?",
      pasos: ["Es plana, así que es una llanura o una meseta.", "Está alta, a 700 metros.", "Una llanura alta es una meseta."],
      resultado: "Es una meseta." },
    { enunciado: "Un trozo de tierra se mete en el mar como una punta. ¿Qué es?",
      pasos: ["La tierra entra en el mar.", "Cuando la tierra entra en el mar, es un cabo."],
      resultado: "Un cabo." },
    { enunciado: "El Teide mide 3.715 m y el Mulhacén 3.479 m. ¿Cuántos metros más alto es el Teide?",
      pasos: ["Restamos: 3.715 − 3.479.", "3.715 − 3.479 = 236."],
      resultado: "El Teide es 236 metros más alto." },
  ],
  errores: [
    "Confundir cabo y golfo: en el cabo la tierra entra en el mar, en el golfo el mar entra en la tierra.",
    "Pensar que una meseta es una montaña: es plana, aunque esté alta.",
    "Creer que el relieve cambia deprisa: tarda miles o millones de años.",
    "Pensar que el pico más alto de España está en la península: es el Teide, en Canarias.",
  ],
  ejercicios: [
    { q: "¿Qué es el relieve?", sol: "El conjunto de formas de la superficie de la Tierra." },
    { q: "Escribe las partes de una montaña.", sol: "Cumbre o cima, laderas y pie o falda." },
    { q: "¿Qué diferencia hay entre una sierra y una cordillera?", sol: "Una sierra es un grupo de montañas; una cordillera es un conjunto de sierras unidas." },
    { q: "¿Qué es un valle?", sol: "Una zona baja y alargada entre montañas, casi siempre con un río." },
    { q: "¿En qué se parecen y en qué se diferencian una llanura y una meseta?", sol: "Las dos son planas; la llanura es baja y la meseta es alta." },
    { q: "Escribe tres formas del relieve de costa.", sol: "Por ejemplo: playa, acantilado, cabo, golfo, península o isla." },
    { q: "¿Qué es una península? Pon un ejemplo.", sol: "Tierra rodeada de agua por todas partes menos por una. Ejemplo: la península ibérica." },
    { q: "¿Cuál es la montaña más alta de España y dónde está?", sol: "El Teide, en Tenerife (islas Canarias)." },
    { q: "¿Qué cordillera separa España de Francia?", sol: "Los Pirineos." },
    { q: "¿Qué color se usa en los mapas físicos para las llanuras? ¿Y para las montañas?", sol: "Verde para las llanuras y marrón para las montañas." },
  ],
  quiz: [
    { q: "La parte más alta de una montaña es la…", o: ["cumbre", "ladera", "falda"], a: 0, e: "La cumbre o cima." },
    { q: "Varias sierras unidas forman una…", o: ["cordillera", "llanura", "isla"], a: 0, e: "Una cordillera." },
    { q: "Una zona baja entre montañas es un…", o: ["valle", "cabo", "pico"], a: 0, e: "Un valle." },
    { q: "Una llanura alta es una…", o: ["meseta", "playa", "bahía"], a: 0, e: "Una meseta." },
    { q: "Tierra que entra en el mar como una punta:", o: ["cabo", "golfo", "valle"], a: 0, e: "Un cabo." },
    { q: "Costa alta de rocas cortada en vertical:", o: ["acantilado", "playa", "llanura"], a: 0, e: "Un acantilado." },
    { q: "Tierra rodeada de agua por todas partes:", o: ["isla", "península", "golfo"], a: 0, e: "Una isla." },
    { q: "El pico más alto de la península es el…", o: ["Mulhacén", "Teide", "Aneto"], a: 0, e: "El Mulhacén, en Sierra Nevada." },
    { q: "En los mapas físicos, las montañas son…", o: ["marrones", "azules", "verdes"], a: 0, e: "Marrones." },
    { q: "El relieve cambia…", o: ["muy despacio", "cada día", "nunca"], a: 0, e: "Muy despacio, en miles o millones de años." },
  ],
  examen: [
    { q: "El Sistema Central divide en dos la…", o: ["Meseta Central", "costa cantábrica", "isla de Mallorca"], a: 0, e: "La Meseta Central." },
    { q: "La costa cantábrica es…", o: ["alta y rocosa", "baja y con playas largas", "volcánica"], a: 0, e: "Alta y rocosa, con acantilados." },
    { q: "Un grupo de islas es un…", o: ["archipiélago", "istmo", "golfo"], a: 0, e: "Un archipiélago." },
    { q: "Las líneas que unen puntos a la misma altura son…", o: ["curvas de nivel", "meridianos", "ríos"], a: 0, e: "Curvas de nivel." },
  ],
  feynman: ["Las formas del relieve del interior", "La diferencia entre cabo y golfo, y entre llanura y meseta", "Las principales montañas de España"],
  mapa: mapa("EL RELIEVE", "var(--pri)", [
    ["Interior", "montaña · valle · llanura", COL.marron],
    ["Costa", "cabo · golfo · playa", COL.azul],
    ["España", "Meseta · Pirineos · Teide", COL.rojo],
    ["Mapas", "colores · curvas de nivel", COL.verde],
  ], 250),
  tarjetas: [
    ["Cumbre", "La parte más alta de una montaña."],
    ["Ladera", "Lado inclinado de una montaña."],
    ["Cordillera", "Conjunto de sierras unidas."],
    ["Valle", "Zona baja entre montañas."],
    ["Meseta", "Llanura elevada."],
    ["Cabo", "Tierra que entra en el mar."],
    ["Golfo", "Mar que entra en la tierra."],
    ["Península", "Tierra rodeada de agua menos por un lado."],
  ],
  familias: ["Haced juntos la maqueta del relieve con plastilina.", "Mirad por la ventana o en una excursión y nombrad las formas del relieve que veáis.", "Buscad en un mapa físico de España las montañas y las costas del tema.", "Averiguad la altitud de vuestra localidad."],
  profesores: PROF("Ciencias Sociales: el relieve y sus agentes; formas del relieve de interior (montaña, sierra, cordillera, valle, llanura, meseta, depresión) y de costa (playa, acantilado, cabo, golfo, bahía, península, isla); el relieve de España; representación del relieve; relieve y actividad humana", ["Maqueta de plastilina por grupos.", "Juego de tarjetas: forma del relieve y definición.", "Lectura de un mapa físico de España con su leyenda."]),
  fuentes: [RD, wiki("Relieve", "Relieve terrestre"), wiki("Geografía de España", "Geografía de España"), wiki("Teide", "Teide")],
  revisado: REV,
};
