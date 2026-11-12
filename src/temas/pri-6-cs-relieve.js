// Ciencias Sociales 6º de Primaria: el relieve de España y de Europa. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, vid, vgen, RD, PROF } = require("./_pri6b");

// Perfil de montaña con nombre y altura.
const pico = (x, base, h, w, c, nombre, alt) => `<path d="M${x - w / 2} ${base} L${x} ${base - h} L${x + w / 2} ${base} Z" fill="${c}" fill-opacity=".75"/><path d="M${x - 8} ${base - h + 10} L${x} ${base - h} L${x + 8} ${base - h + 10}" fill="#fff" fill-opacity=".9"/>${et(x, base - h - 16, nombre, w + 2, { size: 10, color: c })}${et(x, base - h - 4, alt, w + 2, { size: 9.5, weight: 400 })}`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "El relieve de España y de Europa",
  minutos: 50,
  objetivos: ["Conocer las principales unidades del relieve de la península ibérica y de las islas", "Describir las costas y los ríos de España", "Localizar las grandes llanuras, cordilleras, penínsulas e islas de Europa", "Leer e interpretar mapas físicos"],
  claves: ["relieve", "meseta", "cordillera", "sistema", "depresión", "llanura", "cabo", "golfo", "ría", "vertiente", "cuenca", "península", "mapa físico"],
  pregunta: {
    texto: "Madrid está en el centro de la península, a 650 metros de altura. ¿Por qué decimos que España es uno de los países más montañosos de Europa?",
    respuesta: "Porque el centro de la península es una gran <mark>meseta</mark>, una llanura elevada, rodeada y cruzada por <b>cordilleras</b>. La altura media de España es de unos <b>660 metros</b>, de las más altas de Europa, solo superada por países como Suiza o Austria. En un mapa físico se ve con colores marrones y naranjas.",
  },
  bloques: [
    {
      html: `<h3>Las formas del relieve</h3><p>El <mark>relieve</mark> es el conjunto de formas que tiene la superficie de la Tierra: montañas, llanuras, valles, costas… Antes de estudiar el de España y Europa, repasemos las formas más importantes:</p><p>• <b>Montaña</b>: elevación grande del terreno. Si hay muchas juntas en fila, forman una <b>cordillera</b> o un <b>sistema</b>; si son más pequeñas, una <b>sierra</b>.<br>• <b>Meseta</b>: llanura elevada, a más de 500 m sobre el nivel del mar.<br>• <b>Llanura</b>: terreno extenso y casi plano, a poca altura.<br>• <b>Depresión</b>: zona más baja que el terreno que la rodea, normalmente recorrida por un río.<br>• <b>Valle</b>: terreno hundido entre montañas por donde suele pasar un río.</p><p>En la costa encontramos: <b>cabo</b> (tierra que entra en el mar), <b>golfo</b> (mar que entra en la tierra), <b>península</b> (tierra rodeada de agua por todas partes menos por una), <b>isla</b>, <b>playa</b>, <b>acantilado</b> y <b>ría</b> (desembocadura de un río invadida por el mar).</p><p>En los <mark>mapas físicos</mark>, la altura se representa con colores: verde para las tierras bajas, amarillo y naranja para las medias, y marrón para las montañas.</p>`,
      svg: svg("Formas del relieve: montaña, meseta, llanura, valle y, en la costa, cabo y golfo", `${tit("Formas del relieve")}<path d="M10 150 L40 150 L70 70 L100 150 L118 150 L130 112 L176 112 L184 150 L250 150 Z" fill="#a16207" fill-opacity=".35" stroke="#a16207" stroke-width="2"/><path d="M10 150 H250" stroke="#15803d" stroke-width="3"/><path d="M100 150 q9 -14 18 0" fill="#bae6fd"/>${et(70, 60, "montaña", 70, { size: 11, color: COL.marron })}${et(153, 104, "meseta", 70, { size: 11, color: COL.naranja })}${et(109, 168, "valle", 50, { size: 10, color: COL.agua })}${et(218, 140, "llanura", 70, { size: 11, color: COL.verde })}${et(30, 140, "llanura", 50, { size: 10, color: COL.verde })}`),
    },
    {
      html: `<h3>La Meseta Central</h3><p>La unidad más importante del relieve de la península ibérica es la <mark>Meseta Central</mark>, una gran llanura elevada que ocupa casi la mitad de la península. Su altura media está entre <b>600 y 800 metros</b>.</p><p>La Meseta está dividida en dos por el <b>Sistema Central</b>, una cordillera que la cruza de oeste a este (con las sierras de Gredos, Guadarrama y Somosierra; su pico más alto es el Almanzor, de 2.591 m):</p><p>• La <b>Submeseta Norte</b>, más alta, recorrida por el río <b>Duero</b>. Ocupa casi toda Castilla y León.<br>• La <b>Submeseta Sur</b>, algo más baja, recorrida por los ríos <b>Tajo</b> y <b>Guadiana</b>. Ocupa Castilla-La Mancha, Madrid y Extremadura. En ella se levantan los <b>Montes de Toledo</b>, que separan las cuencas del Tajo y del Guadiana.</p><p>La Meseta es muy antigua: se formó hace cientos de millones de años y la erosión ha ido limando sus montañas. Por eso es tan llana.</p>`,
      svg: svg("Corte de la Meseta: Submeseta Norte con el Duero, Sistema Central y Submeseta Sur con el Tajo y el Guadiana", `${tit("La Meseta, en corte")}<path d="M10 150 V96 L30 70 L50 96 H100 L122 52 L144 100 H200 L222 74 L244 150 Z" fill="#d97706" fill-opacity=".3" stroke="#a16207" stroke-width="2"/>${et(30, 60, "C. Cantábrica", 70, { size: 9.5, color: COL.marron })}${et(122, 42, "Sistema Central", 90, { size: 10, color: COL.marron })}${et(222, 64, "S. Morena", 60, { size: 9.5, color: COL.marron })}${et(75, 118, "Submeseta Norte", 80, { size: 10, color: COL.naranja })}${tx(75, 132, "río Duero", 70, { color: COL.agua })}${et(172, 122, "Submeseta Sur", 80, { size: 10, color: COL.naranja })}${tx(172, 136, "Tajo y Guadiana", 80, { color: COL.agua })}${tx(130, 170, "de norte (izquierda) a sur (derecha)", 220)}`),
    },
    {
      html: `<h3>Las montañas que rodean la Meseta</h3><p>La Meseta está rodeada por varias cordilleras, como si fueran sus murallas:</p><p>• Al noroeste, el <b>Macizo Galaico-Leonés</b>, con montañas viejas y redondeadas.<br>• Al norte, la <b>Cordillera Cantábrica</b>, que separa la Meseta del mar Cantábrico. En ella están los <b>Picos de Europa</b>, con la Torre Cerredo (2.648 m).<br>• Al este, el <b>Sistema Ibérico</b>, con el Moncayo (2.314 m), en forma de diagonal.<br>• Al sur, <b>Sierra Morena</b>, que separa la Meseta del valle del Guadalquivir. Es más baja, pero se ve como un escalón desde Andalucía.</p><p>Fuera de la Meseta están las cordilleras más jóvenes y altas:</p><p>• Los <mark>Pirineos</mark>, al norte, frontera con Francia, con el <b>Aneto</b> (3.404 m).<br>• Las <b>Cordilleras Costero-Catalanas</b>, junto al Mediterráneo.<br>• Los <mark>Sistemas Béticos</mark>, en el sur, con <b>Sierra Nevada</b> y el <b>Mulhacén</b> (3.479 m), el pico más alto de la península.</p>`,
      svg: svg("Picos más altos: Teide 3.715 m, Mulhacén 3.479 m, Aneto 3.404 m, Torre Cerredo 2.648 m, Almanzor 2.591 m", `${tit("Los techos de España")}${pico(34, 166, 96, 48, COL.rojo, "Teide", "3.715 m")}${pico(82, 166, 89, 48, COL.marron, "Mulhacén", "3.479 m")}${pico(130, 166, 87, 48, COL.azul, "Aneto", "3.404 m")}${pico(178, 166, 68, 48, COL.verde, "T. Cerredo", "2.648 m")}${pico(226, 166, 66, 48, COL.naranja, "Almanzor", "2.591 m")}<path d="M10 166 H250" stroke="var(--line)" stroke-width="2"/>`),
    },
    {
      html: `<h3>Depresiones, archipiélagos y Canarias</h3><p>Entre las cordilleras exteriores y la Meseta hay dos grandes <mark>depresiones</mark>, tierras bajas y llanas con suelos fértiles:</p><p>• La <b>depresión del Ebro</b>, en el noreste, entre los Pirineos y el Sistema Ibérico. La recorre el río Ebro.<br>• La <b>depresión del Guadalquivir</b>, en el sur, entre Sierra Morena y los Sistemas Béticos. La recorre el Guadalquivir.</p><p>España tiene también dos archipiélagos:</p><p>Las <b>islas Baleares</b>, en el Mediterráneo: Mallorca, Menorca, Ibiza, Formentera y otras más pequeñas. Su relieve es suave, salvo la <b>Serra de Tramuntana</b>, al norte de Mallorca.</p><p>Las <mark>islas Canarias</mark>, en el océano Atlántico, frente a África: Tenerife, Gran Canaria, Lanzarote, Fuerteventura, La Palma, La Gomera, El Hierro y La Graciosa. Son de <b>origen volcánico</b> y tienen un relieve muy accidentado. En Tenerife está el <b>Teide</b> (3.715 m), un volcán que es el <b>pico más alto de España</b>. En 2021 entró en erupción el volcán de Cumbre Vieja, en La Palma.</p>`,
      svg: svg("Unidades del relieve en un mapa esquemático de la península: Meseta en el centro, cordilleras alrededor, depresiones del Ebro y del Guadalquivir", `${tit("Esquema de la península")}<path d="M40 50 L120 40 L200 46 L232 64 L220 104 L206 140 L150 158 L90 156 L48 140 L30 96 Z" fill="#fde68a" fill-opacity=".5" stroke="var(--ink)" stroke-width="1.5"/><ellipse cx="118" cy="100" rx="58" ry="34" fill="#d97706" fill-opacity=".35"/><path d="M76 92 L160 100" stroke="#78350f" stroke-width="5" stroke-linecap="round"/><path d="M60 54 L150 48" stroke="#78350f" stroke-width="5" stroke-linecap="round"/><path d="M150 50 L210 58" stroke="#7c2d12" stroke-width="6" stroke-linecap="round"/><path d="M168 66 L186 110" stroke="#78350f" stroke-width="5" stroke-linecap="round"/><path d="M80 132 L160 128" stroke="#78350f" stroke-width="4" stroke-linecap="round"/><path d="M110 150 L196 138" stroke="#7c2d12" stroke-width="6" stroke-linecap="round"/><ellipse cx="196" cy="82" rx="14" ry="10" fill="#15803d" fill-opacity=".5"/><ellipse cx="120" cy="142" rx="22" ry="6" fill="#15803d" fill-opacity=".5"/>
        ${et(118, 116, "Meseta", 60, { size: 11, color: COL.marron })}${et(186, 36, "Pirineos", 60, { size: 10, color: "#7c2d12" })}${et(220, 162, "Béticos", 60, { size: 10, color: "#7c2d12" })}${et(226, 86, "Ebro", 40, { size: 10, color: COL.verde })}${et(54, 172, "Guadalquivir", 80, { size: 10, color: COL.verde })}${et(48, 44, "Cantábrica", 70, { size: 9.5, color: "#78350f" })}`),
      video: vid("gISLhhhE2yc"),
    },
    {
      html: `<h3>Las costas de España</h3><p>España tiene casi <b>8.000 km de costa</b>, contando las islas. Cada tramo es diferente:</p><p>• La <b>costa cantábrica</b> es alta, rectilínea y con <b>acantilados</b>, porque las montañas llegan casi hasta el mar. Tiene pequeñas playas y rías, como la de Bilbao.<br>• La <b>costa gallega</b>, en el Atlántico, es muy recortada, con muchas <mark>rías</mark>: las Rías Altas, al norte, y las <b>Rías Baixas</b>, al sur. Tiene cabos famosos, como el de <b>Finisterre</b>.<br>• La <b>costa mediterránea</b> es en general baja, con largas playas de arena, algunos cabos (Creus, la Nao, Gata) y golfos (Valencia, Rosas). En ella está el <b>delta del Ebro</b>, formado por los sedimentos que arrastra el río.<br>• La <b>costa atlántica andaluza</b> es baja y arenosa, con dunas y <b>marismas</b>, como las del Guadalquivir en Doñana. Entre España y África está el <b>estrecho de Gibraltar</b>, de solo 14 km de anchura.</p><p>Las costas de Canarias tienen acantilados y playas de arena negra volcánica, y también dunas como las de Maspalomas.</p>`,
      svg: svg("Cuatro tipos de costa: cantábrica con acantilados, gallega con rías, mediterránea con playas y delta, atlántica andaluza con marismas", `${tit("Cuatro costas")}${fichas([["Cantábrica", "alta, acantilados", COL.verde], ["Gallega", "recortada, rías", COL.agua], ["Mediterránea", "baja, playas, deltas", COL.azul], ["Atlántica sur", "dunas y marismas", COL.sol]])}`),
    },
    {
      html: `<h3>Los ríos de España</h3><p>Los ríos de España se agrupan en tres <mark>vertientes</mark>, según el mar al que llevan sus aguas:</p>${tabla(["Vertiente", "Cómo son sus ríos", "Ríos principales"], [["Cantábrica", "cortos, caudalosos y regulares, porque nacen cerca del mar y llueve mucho", "Nalón, Navia, Bidasoa"], ["Atlántica", "largos, porque nacen en el interior; muchos atraviesan la Meseta", "Miño, Duero, Tajo, Guadiana, Guadalquivir"], ["Mediterránea", "cortos e irregulares, con crecidas en otoño, salvo el Ebro", "Ebro, Júcar, Segura, Turia, Llobregat"]])}<p>El <b>Tajo</b> es el río más largo de la península (unos 1.000 km) y desemboca en Lisboa. El <b>Ebro</b> es el más caudaloso de España. El <b>Guadalquivir</b> es navegable hasta Sevilla.</p><p>La zona que recoge el agua de un río y de todos sus afluentes es su <b>cuenca hidrográfica</b>. Para aprovechar mejor el agua en un país con sequías, se han construido muchos <b>embalses</b>.</p>`,
      svg: svg("Longitud de grandes ríos de la península en kilómetros: Tajo, Ebro, Duero, Guadiana, Guadalquivir", `${tit("Longitud de los ríos (km)")}${barras([["Tajo", 1007, COL.azul], ["Ebro", 930, COL.agua], ["Duero", 897, COL.verde], ["Guadiana", 744, COL.sol], ["Guadalq.", 657, COL.naranja]], { max: 1100, y0: 150, alto: 100 })}`),
      video: vid("wEOE530UIwM"),
    },
    {
      html: `<h3>Europa: situación y llanuras</h3><p><mark>Europa</mark> es uno de los continentes más pequeños, pero está muy poblado. Limita al norte con el <b>océano Glacial Ártico</b>, al oeste con el <b>océano Atlántico</b>, al sur con el <b>mar Mediterráneo</b> y al este con <b>Asia</b>, de la que la separan los <b>montes Urales</b>, el río Ural, el mar Caspio y la cordillera del Cáucaso.</p><p>Su costa es muy recortada, con muchos mares interiores: el <b>mar del Norte</b>, el <b>Báltico</b>, el <b>mar Negro</b>, el Adriático o el Egeo.</p><p>El relieve europeo tiene una altura media baja, de unos 300 metros. Lo más característico es la <mark>Gran Llanura Europea</mark>, que se extiende desde el oeste de Francia hasta los Urales, pasando por Alemania, Polonia y Rusia. Es una de las llanuras más grandes del mundo y en ella hay muchas ciudades y campos de cultivo. Otras llanuras importantes son la de Hungría (llanura de Panonia) y el valle del Po, en Italia.</p>`,
      svg: svg("Límites de Europa: océano Glacial Ártico al norte, Atlántico al oeste, Mediterráneo al sur y Urales y Cáucaso al este", `${tit("Los límites de Europa")}<rect x="60" y="50" width="140" height="90" rx="20" fill="#86efac" fill-opacity=".35" stroke="#15803d" stroke-width="2"/>${et(130, 100, "EUROPA", 90, { size: 14, color: COL.verde })}${et(130, 42, "océano Glacial Ártico", 160, { size: 10, color: COL.agua })}${et(130, 158, "mar Mediterráneo", 160, { size: 10, color: COL.agua })}${et(34, 90, "océano", 56, { size: 10, color: COL.agua })}${et(34, 104, "Atlántico", 56, { size: 10, color: COL.agua })}${et(228, 82, "Urales", 56, { size: 10, color: COL.marron })}${et(228, 96, "Caspio", 56, { size: 10, color: COL.marron })}${et(228, 110, "Cáucaso", 56, { size: 10, color: COL.marron })}${tx(228, 124, "(Asia)", 56)}`),
    },
    {
      html: `<h3>Las montañas de Europa</h3><p>En Europa hay dos tipos de montañas, según su edad:</p><p>Las <b>montañas antiguas</b>, muy erosionadas, de cumbres redondeadas y no muy altas. Por ejemplo, los <b>Urales</b>, en el límite con Asia, los <b>Alpes Escandinavos</b> o los montes de Escocia y Bohemia.</p><p>Las <b>montañas jóvenes</b>, más altas y de picos afilados. Están sobre todo en el sur del continente:</p><p>• Los <mark>Alpes</mark>, la gran cordillera del centro de Europa, entre Francia, Suiza, Italia y Austria. Su pico más alto es el <b>Mont Blanc</b> (4.808 m).<br>• Los <b>Pirineos</b>, entre España y Francia.<br>• Los <b>Apeninos</b>, que recorren Italia de norte a sur.<br>• Los <b>Cárpatos</b>, en forma de arco en el centro-este.<br>• Los <b>Balcanes</b>, en el sureste.<br>• El <b>Cáucaso</b>, entre el mar Negro y el Caspio, donde se encuentra el <b>Elbrús</b> (5.642 m), considerado el pico más alto de Europa.</p><p>En Europa hay también volcanes activos, como el <b>Etna</b> y el Vesubio en Italia, y muchos en <b>Islandia</b>.</p>`,
      svg: svg("Picos de Europa comparados: Elbrús 5.642 m, Mont Blanc 4.808 m, Aneto 3.404 m, Etna 3.357 m", `${tit("Grandes picos de Europa")}${pico(44, 166, 100, 60, COL.rojo, "Elbrús", "5.642 m")}${pico(106, 166, 86, 60, COL.azul, "Mont Blanc", "4.808 m")}${pico(168, 166, 60, 56, COL.marron, "Aneto", "3.404 m")}${pico(226, 166, 59, 54, COL.naranja, "Etna", "3.357 m")}<path d="M10 166 H250" stroke="var(--line)" stroke-width="2"/>`),
      video: vid("GIW7LutOsnc"),
    },
    {
      html: `<h3>Penínsulas, islas y ríos de Europa</h3><p>La costa de Europa forma grandes <mark>penínsulas</mark>: la <b>Escandinava</b> (Noruega y Suecia), la de <b>Jutlandia</b> (Dinamarca), la <b>Ibérica</b> (España y Portugal), la <b>Itálica</b> (con forma de bota) y la <b>Balcánica</b> (Grecia y otros países). También tiene muchas <b>islas</b>: Gran Bretaña e Irlanda, Islandia, y en el Mediterráneo, Sicilia, Cerdeña, Córcega, Creta y Chipre.</p><p>Los <mark>ríos</mark> europeos son, en general, largos y caudalosos, porque llueve con regularidad en buena parte del continente, y muchos son <b>navegables</b>, lo que facilita el transporte de mercancías:</p><p>• El <b>Volga</b>, en Rusia, es el más largo de Europa (unos 3.500 km) y desemboca en el mar Caspio.<br>• El <b>Danubio</b> atraviesa o hace de frontera de diez países y desemboca en el mar Negro.<br>• El <b>Rin</b> pasa por Suiza, Alemania y Países Bajos, y es una gran vía de transporte.<br>• Otros ríos importantes son el Dniéper, el Elba, el Vístula, el Sena, el Loira, el Ródano y el Po.</p>`,
      svg: svg("Ríos más largos de Europa en kilómetros: Volga, Danubio, Dniéper, Rin y Elba", `${tit("Ríos largos de Europa (km)")}${barras([["Volga", 3530, COL.azul], ["Danubio", 2850, COL.agua], ["Dniéper", 2200, COL.verde], ["Rin", 1230, COL.sol], ["Elba", 1090, COL.naranja]], { max: 3800, y0: 150, alto: 100 })}`),
    },
  ],
  figura: {
    titulo: "El relieve en ocho ideas",
    svg: rejilla([
      ["Meseta Central", "600 a 800 m de altura", COL.naranja],
      ["Sistema Central", "divide la Meseta", COL.marron],
      ["Mulhacén", "techo de la península", "#7c2d12"],
      ["Teide", "techo de España", COL.rojo],
      ["Depresiones", "Ebro y Guadalquivir", COL.verde],
      ["Vertientes", "cantábrica, atlántica, medit.", COL.agua],
      ["Gran Llanura", "de Francia a los Urales", "#15803d"],
      ["Alpes", "Mont Blanc 4.808 m", COL.azul],
    ], 4, 86, "Resumen del relieve de España y de Europa"),
  },
  video: vgen("VKVEQJkvP4s", "relieve de España para niños"),
  ejemplos: [
    { enunciado: "Viajas en coche de Madrid a Sevilla. ¿Qué unidades del relieve atraviesas?",
      pasos: ["Madrid está en la Submeseta Sur.", "Cruzas La Mancha y llegas al borde sur de la Meseta: Sierra Morena (el paso de Despeñaperros).", "Bajas a la depresión del Guadalquivir, donde está Sevilla."],
      resultado: "Submeseta Sur → Sierra Morena → depresión del Guadalquivir." },
    { enunciado: "¿A qué vertiente pertenece el Duero? ¿Cómo es su caudal comparado con el Nalón?",
      pasos: ["El Duero desemboca en el océano Atlántico (en Oporto): vertiente atlántica.", "Es largo porque atraviesa la Meseta.", "El Nalón es cantábrico: corto, pero caudaloso y regular."],
      resultado: "Atlántica; el Duero es más largo y el Nalón, más corto pero muy regular." },
    { enunciado: "Ordena de mayor a menor altura: Aneto, Teide, Mulhacén, Mont Blanc.",
      pasos: ["Mont Blanc: 4.808 m.", "Teide: 3.715 m.", "Mulhacén: 3.479 m.", "Aneto: 3.404 m."],
      resultado: "Mont Blanc > Teide > Mulhacén > Aneto." },
  ],
  errores: [
    "Decir que el Mulhacén es el pico más alto de España: lo es de la península; el más alto es el Teide.",
    "Confundir meseta y llanura: la meseta es una llanura elevada.",
    "Pensar que el Ebro va al Atlántico: va al Mediterráneo.",
    "Creer que los ríos mediterráneos son largos y regulares: casi todos son cortos e irregulares (salvo el Ebro).",
    "Situar los Urales entre Europa y África: separan Europa de Asia.",
  ],
  ejercicios: [
    { q: "Define meseta, cordillera y depresión.", sol: "Meseta: llanura elevada. Cordillera: conjunto de montañas en fila. Depresión: zona más baja que lo que la rodea." },
    { q: "¿Qué cordillera divide la Meseta en dos? ¿Cómo se llaman las dos partes?", sol: "El Sistema Central; Submeseta Norte y Submeseta Sur." },
    { q: "Escribe las cordilleras que rodean la Meseta.", sol: "Macizo Galaico-Leonés, Cordillera Cantábrica, Sistema Ibérico y Sierra Morena." },
    { q: "¿Dónde están el Aneto y el Mulhacén y qué altura tienen?", sol: "Aneto: Pirineos, 3.404 m. Mulhacén: Sierra Nevada (Sistemas Béticos), 3.479 m." },
    { q: "¿Por qué el relieve de Canarias es tan accidentado?", sol: "Porque las islas son de origen volcánico." },
    { q: "Describe la costa cantábrica y la mediterránea.", sol: "Cantábrica: alta, rectilínea, con acantilados. Mediterránea: baja, con largas playas y deltas." },
    { q: "Clasifica por vertientes: Segura, Miño, Bidasoa, Guadiana, Júcar.", sol: "Cantábrica: Bidasoa. Atlántica: Miño y Guadiana. Mediterránea: Segura y Júcar." },
    { q: "¿Con qué limita Europa al norte, al sur, al oeste y al este?", sol: "Norte: océano Glacial Ártico. Sur: Mediterráneo. Oeste: Atlántico. Este: Asia (Urales, Caspio, Cáucaso)." },
    { q: "Nombra cuatro penínsulas de Europa.", sol: "Escandinava, Ibérica, Itálica y Balcánica (también Jutlandia)." },
    { q: "¿Cuál es el río más largo de Europa y dónde desemboca? ¿Y el Danubio?", sol: "El Volga, en el mar Caspio. El Danubio, en el mar Negro." },
  ],
  quiz: [
    { q: "Una llanura elevada es una…", o: ["meseta", "depresión", "ría"], a: 0, e: "Meseta." },
    { q: "El pico más alto de España es el…", o: ["Mulhacén", "Teide", "Aneto"], a: 1, e: "El Teide, en Tenerife." },
    { q: "El Sistema Central separa…", o: ["las dos submesetas", "España y Francia", "Galicia y Asturias"], a: 0, e: "La Submeseta Norte y la Sur." },
    { q: "Los Pirineos están entre España y…", o: ["Portugal", "Francia", "Italia"], a: 1, e: "Francia." },
    { q: "La depresión del sur de España es la del…", o: ["Ebro", "Guadalquivir", "Duero"], a: 1, e: "Guadalquivir." },
    { q: "Las rías abundan en la costa…", o: ["gallega", "mediterránea", "andaluza"], a: 0, e: "Gallega." },
    { q: "El río más largo de la península es el…", o: ["Ebro", "Tajo", "Segura"], a: 1, e: "El Tajo." },
    { q: "El Ebro desemboca en el…", o: ["Atlántico", "Cantábrico", "Mediterráneo"], a: 2, e: "Mediterráneo, formando un delta." },
    { q: "La Gran Llanura Europea llega hasta los…", o: ["Alpes", "Urales", "Pirineos"], a: 1, e: "Los Urales." },
    { q: "El Mont Blanc está en los…", o: ["Alpes", "Cárpatos", "Apeninos"], a: 0, e: "Alpes." },
  ],
  examen: [
    { q: "Las islas Canarias son de origen…", o: ["volcánico", "glaciar", "fluvial"], a: 0, e: "Volcánico." },
    { q: "El Volga desemboca en…", o: ["el mar Caspio", "el mar Negro", "el Báltico"], a: 0, e: "El mar Caspio." },
    { q: "La península Itálica tiene forma de…", o: ["bota", "triángulo", "círculo"], a: 0, e: "Bota." },
    { q: "Los ríos cantábricos son…", o: ["cortos y caudalosos", "largos y secos", "muy irregulares"], a: 0, e: "Cortos y caudalosos." },
  ],
  feynman: ["Cómo es la Meseta y qué cordilleras la rodean", "En qué se diferencian las tres vertientes de los ríos de España", "Cuáles son las grandes unidades del relieve de Europa"],
  mapa: mapa("RELIEVE", "var(--pri)", [
    ["Meseta", "submesetas · Sistema Central", COL.naranja],
    ["Exteriores", "Pirineos · Béticos · depresiones", COL.marron],
    ["Costas y ríos", "rías · deltas · 3 vertientes", COL.agua],
    ["Europa", "Gran Llanura · Alpes · penínsulas", COL.verde],
  ], 260),
  tarjetas: [
    ["Meseta Central", "Gran llanura elevada del centro de la península."],
    ["Mulhacén", "Pico más alto de la península: 3.479 m, en Sierra Nevada."],
    ["Teide", "Volcán de Tenerife, pico más alto de España: 3.715 m."],
    ["Depresión", "Zona baja entre montañas: Ebro y Guadalquivir."],
    ["Ría", "Desembocadura de un río invadida por el mar."],
    ["Vertiente", "Conjunto de ríos que desembocan en el mismo mar."],
    ["Gran Llanura Europea", "Llanura que va de Francia a los Urales."],
    ["Volga", "Río más largo de Europa; desemboca en el Caspio."],
  ],
  familias: ["Buscad en un mapa físico de España el lugar donde vivís y la montaña y el río más cercanos.", "Planificad una excursión a una sierra o a un río y mirad su altura y su vertiente.", "Haced un relieve de plastilina de la península con la Meseta y sus cordilleras.", "Jugad a encontrar en el atlas penínsulas e islas de Europa."],
  profesores: PROF("Ciencias Sociales: el relieve de España (Meseta, cordilleras, depresiones, costas, islas), la hidrografía (vertientes y cuencas) y el relieve de Europa; interpretación de mapas físicos", ["Maqueta del relieve peninsular con plastilina o papel maché por capas de altura.", "Juego de localización en mapas mudos con tarjetas.", "Comparar perfiles topográficos de una ruta Madrid-Sevilla y Madrid-Santander."]),
  fuentes: [RD, { t: "Instituto Geográfico Nacional: Atlas Nacional de España", url: "https://www.ign.es/web/ign/portal/ane-area-ane" }, wiki("Relieve de España", "Relieve_de_España"), wiki("Geografía de Europa", "Geografía_de_Europa")],
  revisado: REV,
};
