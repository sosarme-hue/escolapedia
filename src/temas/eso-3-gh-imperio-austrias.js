// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, filas, dos, rueda, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "El Imperio de los Austrias",
  minutos: 35,
  objetivos: ["Explicar cómo Carlos I reunió un enorme imperio y cuáles fueron sus conflictos", "Describir el reinado de Felipe II y su política interior y exterior", "Conocer la organización del Imperio y del gobierno de América"],
  claves: ["Carlos I", "Felipe II", "monarquía hispánica", "consejos", "virreinatos", "Lepanto"],
  pregunta: {
    texto: "Se decía que en el imperio de Felipe II «nunca se ponía el sol». ¿Era solo una exageración?",
    respuesta: "No del todo. Felipe II gobernaba territorios en Europa, en casi toda América, en África y en Asia (las <b>Filipinas</b>, que llevan su nombre) y, desde 1580, también Portugal y su imperio. Siempre era de día en alguno de ellos. Fue el <mark>primer imperio global</mark> de la historia, pero también uno muy difícil y caro de defender.",
  },
  bloques: [
    {
      html: `<h3>La herencia de Carlos I</h3><p><b>Carlos I</b> (1516–1556), nieto de los Reyes Católicos y del emperador Maximiliano de Austria, recibió una <mark>herencia enorme</mark>: de Isabel, Castilla, sus territorios americanos y las Canarias; de Fernando, la Corona de Aragón con Nápoles, Sicilia y Cerdeña; de María de Borgoña, los Países Bajos y el Franco Condado; y de Maximiliano, los territorios de los Habsburgo en Austria y el derecho a ser elegido emperador. En 1519 fue elegido emperador del Sacro Imperio con el nombre de <b>Carlos V</b>.</p>`,
      svg: rueda("Las cuatro herencias de Carlos I", "CARLOS I", [["Castilla y América", "var(--red)"], ["Aragón e Italia", "var(--sun)"], ["Países Bajos", "var(--pen)"], ["Austria e Imperio", "var(--ink)"]], "var(--red)"),
    },
    {
      html: `<h3>Los conflictos de Carlos V</h3><p>Su reinado fue una sucesión de guerras. Dentro de Castilla estallaron las <b>Comunidades</b> (1520–1521), una revuelta de ciudades contra un rey extranjero rodeado de consejeros flamencos; en Valencia y Mallorca, las <b>Germanías</b>. Fuera, luchó contra <b>Francia</b> por el dominio de Italia, contra los <b>turcos</b> en el Mediterráneo y Hungría, y contra los <b>príncipes protestantes</b> alemanes. Su ideal era una cristiandad unida bajo el emperador, pero no lo consiguió. Cansado, abdicó en 1556 y se retiró al monasterio de Yuste.</p>`,
      svg: filas("Los enemigos de Carlos V", [["Interior", "Comunidades y Germanías", "var(--muted)"], ["Francia", "guerras por Italia", "var(--pen)"], ["Turcos", "Mediterráneo y Viena", "var(--red)"], ["Protestantes", "príncipes alemanes", "var(--leaf)"]]),
    },
    {
      html: `<h3>Felipe II, el rey prudente</h3><p><b>Felipe II</b> (1556–1598) heredó todo salvo Austria y el título imperial, que pasaron a su tío Fernando. Fijó la capital en <b>Madrid</b> (1561) y mandó construir el monasterio de <mark>El Escorial</mark>, centro de su gobierno. Gobernó desde su despacho, leyendo miles de documentos: por eso lo llamaron «el Prudente». Defendió con firmeza el catolicismo dentro y fuera de sus reinos. En 1580 heredó <b>Portugal</b> y su imperio, y unió toda la península.</p>`,
      svg: linea("Hechos clave del reinado de Felipe II", [["1561", "capital|en Madrid"], ["1571", "victoria|de Lepanto"], ["1580", "unión con|Portugal"], ["1588", "derrota de la|Armada"]], "var(--red)"),
    },
    {
      html: `<h3>La política exterior de Felipe II</h3><p>Felipe II venció a Francia en <b>San Quintín</b> (1557) y a los turcos en la batalla naval de <mark>Lepanto</mark> (1571), donde luchó Cervantes. Pero tuvo dos grandes problemas. Los <b>Países Bajos</b> se rebelaron en 1568 por motivos religiosos, políticos y económicos; fue una guerra larguísima. Y se enfrentó a <b>Inglaterra</b>, que apoyaba a los rebeldes y atacaba sus barcos: en 1588 envió la <b>Gran Armada</b> para invadirla, pero fue derrotada por las tormentas y la flota inglesa.</p>`,
      svg: dos("Éxitos y fracasos de Felipe II", ["Éxitos", ["San Quintín", "Lepanto", "unión con", "Portugal", "Filipinas"], "var(--leaf)"], ["Fracasos", ["rebelión de los", "Países Bajos", "Gran Armada", "bancarrotas", "de la Hacienda"], "var(--red)"]),
    },
    {
      html: `<h3>Cómo se gobernaba el Imperio</h3><p>Los Austrias gobernaron una <mark>monarquía hispánica</mark>: cada reino conservaba sus leyes, pero el rey era el mismo. Para gobernar territorios tan lejanos crearon el sistema de <b>consejos</b>, grupos de expertos que aconsejaban al rey sobre un territorio (Consejo de Castilla, de Aragón, de Indias) o un tema (Consejo de Estado, de Hacienda, de la Inquisición). Los <b>secretarios</b> hacían de enlace con el rey. En los territorios lejanos gobernaban <b>virreyes</b> en nombre del monarca.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El rey en la cima, debajo los consejos y los secretarios, y debajo los virreyes, gobernadores y corregidores">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 46 V 70 M60 82 V 70 H 200 V 82 M130 116 V 130" stroke="var(--line)" stroke-width="2.5" fill="none"/>
        <rect x="80" y="14" width="100" height="32" rx="10" fill="var(--red)"/>
        <rect x="14" y="82" width="104" height="34" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
        <rect x="142" y="82" width="104" height="34" rx="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2.5"/>
        <rect x="40" y="130" width="180" height="36" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="130" y="35" fill="#fff">REY</text><text x="66" y="104" fill="var(--pen)">consejos</text><text x="194" y="104" fill="var(--hl-ink)">secretarios</text><text x="130" y="153" fill="var(--leaf)">virreyes y corregidores</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Los Austrias mayores",
    svg: figCols("Comparación entre Carlos I y Felipe II", [
      ["Carlos I (V)", ["1516–1556", "nacido en Gante", "emperador del", "Sacro Imperio"], "var(--pen)"],
      ["Ideal", ["Carlos: cristiandad", "unida", "Felipe: defensa", "del catolicismo"], "var(--sun)"],
      ["Felipe II", ["1556–1598", "nacido en Valladolid", "capital en Madrid", "rey de Portugal"], "var(--red)"],
    ]),
  },
  video: { id: "d-lhCKsvqh4", titulo: "El Imperio español: de Carlos I a Felipe II", canal: "La cuna de Halicarnaso", vistas: 190299, megusta: 0, busqueda: "felipe II imperio" },
  quiz: [
    { q: "¿De quién era nieto Carlos I?", o: ["De los Reyes Católicos y de Maximiliano de Austria", "De Felipe II", "De Enrique VIII"], a: 0, e: "Por eso reunió tantas herencias." },
    { q: "La revuelta de las ciudades castellanas contra Carlos I fue…", o: ["las Germanías", "las Comunidades", "la Armada"], a: 1, e: "1520–1521; acabó en la batalla de Villalar." },
    { q: "¿Dónde se retiró Carlos V tras abdicar?", o: ["El Escorial", "Yuste", "Toledo"], a: 1, e: "Un monasterio en Cáceres." },
    { q: "Felipe II fijó la capital en…", o: ["Valladolid", "Madrid", "Sevilla"], a: 1, e: "En 1561." },
    { q: "La batalla de Lepanto (1571) fue contra…", o: ["los ingleses", "los turcos", "los franceses"], a: 1, e: "Una gran batalla naval en el Mediterráneo." },
  ],
  examen: [
    { q: "¿Qué reino heredó Felipe II en 1580?", o: ["Francia", "Portugal", "Inglaterra"], a: 1, e: "Con él, todo su imperio colonial." },
    { q: "Los consejos eran…", o: ["órganos de expertos que asesoraban al rey", "parlamentos elegidos", "tribunales de la fe"], a: 0, e: "Había consejos por territorios y por temas." },
    { q: "La Gran Armada de 1588 iba a invadir…", o: ["Inglaterra", "Francia", "los Países Bajos"], a: 0, e: "Fracasó por las tormentas y la flota inglesa." },
  ],
  feynman: ["Cómo reunió Carlos I un imperio tan grande", "Contra quién luchó Carlos V", "Qué éxitos y fracasos tuvo Felipe II", "Cómo se gobernaban territorios tan lejanos"],
  mapa: mapa("IMPERIO DE LOS AUSTRIAS", "var(--red)", [
    ["Carlos I", "herencia · emperador", "var(--pen)"],
    ["Conflictos", "Comunidades · Francia · turcos", "var(--muted)"],
    ["Felipe II", "Madrid · Lepanto · Portugal", "var(--red)"],
    ["Gobierno", "consejos · virreyes", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Carlos I de España y V de Alemania", "Rey de 1516 a 1556 y emperador desde 1519."],
    ["Comunidades de Castilla", "Revuelta de las ciudades castellanas contra Carlos I (1520–1521)."],
    ["El Escorial", "Monasterio y palacio de Felipe II, centro de su gobierno."],
    ["Lepanto", "Victoria naval contra los turcos en 1571."],
    ["Sistema de consejos", "Forma de gobierno de los Austrias con órganos de expertos."],
  ],
  familias: ["Buscad en un mapa del mundo todos los territorios de Felipe II y comprobad por qué «nunca se ponía el sol».", "Si podéis, visitad (o ved en vídeo) El Escorial o Yuste.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la monarquía hispánica de los Austrias, su política interior y exterior y la organización del Imperio en Europa y América (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Mapa de las herencias de Carlos I con colores.", "Comentario de un fragmento del testamento de Carlos V.", "Juego de rol: una sesión del Consejo de Indias."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Patrimonio Nacional: Real Monasterio de San Lorenzo de El Escorial", url: "https://www.patrimonionacional.es/visita/real-sitio-de-san-lorenzo-de-el-escorial" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar la organización de la América hispana", "Conocer la economía y la sociedad castellanas del siglo XVI"],
  bloques: [
    { tras: "Los conflictos de Carlos V", html: `<h3>Las Comunidades de Castilla</h3><p>Carlos I llegó en 1517 sin hablar castellano y rodeado de consejeros flamencos que ocuparon cargos importantes. Además, pidió dinero a las Cortes para pagar su elección como emperador y se marchó a Alemania. Las ciudades castellanas, como <b>Toledo</b>, <b>Segovia</b> y <b>Valladolid</b>, se sublevaron en 1520: fue la revuelta de las <mark>Comunidades</mark>. Pedían que el rey residiera en Castilla, no sacara el dinero del reino y respetara a las Cortes. Los comuneros fueron derrotados en <b>Villalar</b> (1521) y sus líderes, <b>Padilla</b>, <b>Bravo</b> y <b>Maldonado</b>, ejecutados. Desde entonces, Carlos aprendió castellano y se apoyó cada vez más en Castilla.</p>`, video: { id: "fM2XghXmH_o", titulo: "Carlos V, el soberano más poderoso de la cristiandad", canal: "Academia Play", vistas: 1286804, megusta: 0 } },
    { tras: "La política exterior de Felipe II", html: `<h3>La política interior de Felipe II</h3><p>Felipe II quiso asegurar la <b>unidad religiosa</b> de sus reinos. Persiguió a los pequeños grupos protestantes de Sevilla y Valladolid con la <b>Inquisición</b> y prohibió a los estudiantes ir a universidades extranjeras. Los <b>moriscos</b> (musulmanes convertidos a la fuerza) de Granada se rebelaron en las <mark>Alpujarras</mark> (1568–1571) cuando se les prohibió su lengua y sus costumbres; tras la derrota, fueron dispersados por Castilla. En Aragón, el caso de su secretario <b>Antonio Pérez</b>, que huyó a Zaragoza, provocó una revuelta (1591) que el rey sofocó con su ejército. Las guerras costaron tanto que la Hacienda real declaró varias <b>bancarrotas</b>, a pesar de la plata de América.</p>` },
    { tras: "Cómo se gobernaba el Imperio", html: `<h3>El gobierno de América</h3><p>América se gobernaba desde Castilla. En España estaban el <mark>Consejo de Indias</mark>, que preparaba las leyes, y la <b>Casa de Contratación</b> de Sevilla, que controlaba el comercio y la navegación. En América, el territorio se dividió en dos <b>virreinatos</b>: <b>Nueva España</b> (capital, México) y el <b>Perú</b> (capital, Lima). Los virreyes representaban al rey; las <b>audiencias</b> eran tribunales de justicia; los <b>cabildos</b>, los ayuntamientos de las ciudades. La economía se basó en la minería de <b>plata</b> (Potosí, Zacatecas), la agricultura y las haciendas. Los indígenas debían pagar tributo y trabajar mediante la <b>encomienda</b> y la <b>mita</b>, y se llevaron esclavos africanos a las plantaciones.</p>${tabla(["Grupo social en América", "Origen"], [["Españoles peninsulares", "nacidos en España; altos cargos"], ["Criollos", "hijos de españoles nacidos en América"], ["Mestizos", "hijos de español e indígena"], ["Indígenas", "población originaria"], ["Esclavos africanos", "llevados a la fuerza"]])}` },
    { tras: "Cómo se gobernaba el Imperio", html: `<h3>Economía y sociedad en la Castilla del siglo XVI</h3><p>Castilla vivió un siglo de crecimiento. Su población aumentó, las ciudades crecieron y <b>Sevilla</b>, con el monopolio del comercio con América, se convirtió en una de las mayores ciudades de Europa. La llegada de grandes cantidades de <mark>oro y plata</mark> de América hizo subir mucho los precios: fue la <b>revolución de los precios</b>. Gran parte de esa plata no se invirtió en el país, sino que se gastó en las guerras y en comprar productos extranjeros, y acabó en manos de banqueros alemanes y genoveses. La sociedad seguía siendo estamental: la <b>nobleza</b> y el <b>clero</b> tenían privilegios y muchas tierras; los <b>campesinos</b>, la mayoría, soportaban los impuestos. La obsesión por la <b>limpieza de sangre</b> discriminaba a los descendientes de judíos y musulmanes.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica de dónde venía cada territorio de Carlos I: Castilla, Nápoles, Países Bajos y Austria.", pasos: ["Castilla (y América): de su abuela Isabel la Católica, a través de su madre, Juana.", "Nápoles (con la Corona de Aragón): de su abuelo Fernando el Católico.", "Países Bajos: de su abuela María de Borgoña, a través de su padre, Felipe el Hermoso.", "Austria: de su abuelo Maximiliano de Habsburgo."], resultado: "Cuatro herencias de cuatro abuelos." },
    { enunciado: "Clasifica los conflictos de Felipe II en interiores y exteriores: rebelión de las Alpujarras, Lepanto, Países Bajos, Gran Armada, revuelta de Aragón, San Quintín.", pasos: ["Interiores (dentro de la península): Alpujarras y revuelta de Aragón.", "Exteriores: Lepanto (turcos), San Quintín (Francia), Gran Armada (Inglaterra).", "Países Bajos: eran territorio de Felipe II, pero lejos de la península; se suele estudiar como exterior."], resultado: "Interiores: Alpujarras y Aragón. Exteriores: Lepanto, San Quintín, Armada y Países Bajos." },
    { enunciado: "Un hijo de padres españoles nace en Lima en 1580. ¿A qué grupo pertenece y qué cargos puede tener?", pasos: ["Hijo de españoles nacido en América: criollo.", "Tiene riqueza y prestigio, pero los altos cargos (virrey, oidor) suelen ser para peninsulares.", "Puede ser hacendado, comerciante o miembro del cabildo."], resultado: "Es criollo: rico, pero apartado de los cargos más altos." },
  ],
  errores: [
    "Pensar que Carlos I y Carlos V son personas distintas: es el mismo rey (I en España, V como emperador).",
    "Creer que Felipe II fue emperador: Austria y el título imperial pasaron a su tío Fernando.",
    "Confundir las Comunidades (Castilla) con las Germanías (Valencia y Mallorca).",
    "Pensar que la plata de América enriqueció a toda la población castellana.",
    "Confundir el Consejo de Indias (en España) con los virreinatos (en América).",
  ],
  ejercicios: [
    { q: "¿Por qué Carlos I reunió tantos territorios?", sol: "Por la política matrimonial de sus abuelos: heredó de los Reyes Católicos, de Maximiliano de Austria y de María de Borgoña." },
    { q: "¿Qué reclamaban los comuneros?", sol: "Que el rey viviera en Castilla, no diera cargos a extranjeros, no sacara el dinero del reino y respetara a las Cortes." },
    { q: "¿Contra quién luchó Carlos V fuera de la península?", sol: "Contra Francia, contra los turcos y contra los príncipes protestantes alemanes." },
    { q: "¿Por qué se llamó a Felipe II «el Prudente»?", sol: "Porque gobernaba desde su despacho, estudiando con calma miles de documentos antes de decidir." },
    { q: "¿Qué ocurrió en Lepanto y quién participó?", sol: "En 1571 una flota cristiana dirigida por don Juan de Austria venció a los turcos; en ella luchó Cervantes, que perdió el uso de una mano." },
    { q: "¿Por qué se rebelaron los Países Bajos?", sol: "Por motivos religiosos (muchos eran calvinistas), políticos (querían conservar sus privilegios) y económicos (rechazaban los impuestos)." },
    { q: "¿Qué era el sistema de consejos?", sol: "La forma de gobierno de los Austrias: órganos de expertos, por territorios o por temas, que asesoraban al rey." },
    { q: "¿Qué hacía la Casa de Contratación de Sevilla?", sol: "Controlaba el comercio y la navegación con América y recibía la plata." },
    { q: "Nombra los dos virreinatos del siglo XVI y sus capitales.", sol: "Nueva España, con capital en México, y el Perú, con capital en Lima." },
    { q: "¿Qué fue la revolución de los precios?", sol: "La gran subida de los precios en el siglo XVI causada en parte por la llegada masiva de oro y plata de América." },
  ],
  quiz: [
    { q: "Los comuneros fueron derrotados en…", o: ["Villalar", "Pavía", "Lepanto"], a: 0, e: "En 1521." },
    { q: "La rebelión de los moriscos de Granada fue la de…", o: ["las Alpujarras", "las Germanías", "Flandes"], a: 0, e: "1568–1571." },
    { q: "El monopolio del comercio con América lo tenía…", o: ["Sevilla", "Barcelona", "Bilbao"], a: 0, e: "Con la Casa de Contratación." },
    { q: "Un criollo era…", o: ["un hijo de españoles nacido en América", "un indígena", "un esclavo"], a: 0, e: "Tenía riqueza pero pocos cargos altos." },
    { q: "La mina de plata más famosa fue…", o: ["Potosí", "Almadén", "Río Tinto"], a: 0, e: "En la actual Bolivia." },
  ],
  tarjetas: [
    ["Virreinato", "Gran territorio de América gobernado por un virrey en nombre del rey."],
    ["Casa de Contratación", "Organismo de Sevilla que controlaba el comercio con América."],
    ["Moriscos", "Musulmanes obligados a convertirse al cristianismo."],
  ],
});
