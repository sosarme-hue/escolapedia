// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, filas, dos, rueda, figLinea, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "Los descubrimientos y los Reyes Católicos",
  minutos: 35,
  objetivos: ["Explicar las causas y los avances técnicos que permitieron los grandes descubrimientos", "Describir el reinado de los Reyes Católicos y la creación de la monarquía autoritaria", "Explicar la llegada a América, la conquista y sus consecuencias"],
  claves: ["carabela", "Reyes Católicos", "monarquía autoritaria", "Cristóbal Colón", "Tratado de Tordesillas", "conquista"],
  pregunta: {
    texto: "En 1492 Colón cruzó el Atlántico convencido de que llegaría a Asia. Murió en 1506 sin saber que había llegado a un continente desconocido para los europeos. ¿Cómo pudo equivocarse tanto?",
    respuesta: "Colón calculó mal el tamaño de la Tierra: la creía mucho más pequeña. Entre Europa y Asia había un continente entero, <mark>América</mark>, que ni él ni los europeos conocían. Fue <b>Américo Vespucio</b> quien explicó que eran tierras nuevas, y por eso el continente lleva su nombre.",
  },
  bloques: [
    {
      html: `<h3>Por qué los europeos se lanzaron al mar</h3><p>En el siglo XV, Europa buscaba nuevas rutas hacia Asia. Las <b>especias</b> (pimienta, canela, clavo), la seda y el oro de Oriente eran muy valiosas, pero los <b>turcos otomanos</b> controlaban el Mediterráneo oriental tras tomar Constantinopla (1453) y encarecían el comercio. Además, había <b>curiosidad</b> por conocer el mundo, deseo de <b>difundir el cristianismo</b> y, en los reyes, interés por aumentar su poder y su riqueza.</p>`,
      svg: rueda("Causas de los descubrimientos", "¿POR QUÉ?", [["especias y oro", "var(--sun)"], ["bloqueo turco", "var(--red)"], ["curiosidad", "var(--pen)"], ["religión", "var(--leaf)"]], "var(--ink)"),
    },
    {
      html: `<h3>Los avances técnicos</h3><p>Los viajes fueron posibles gracias a nuevos inventos y conocimientos. La <mark>carabela</mark>, un barco ligero y rápido con velas cuadradas y triangulares, podía navegar incluso con viento en contra. La <b>brújula</b> indicaba el norte, el <b>astrolabio</b> permitía calcular la latitud por la altura de las estrellas y los <b>portulanos</b> eran mapas detallados de costas y puertos. También se aceptaba ya que la Tierra era redonda.</p>`,
      svg: filas("Inventos que hicieron posibles los viajes", [["Carabela", "barco ligero y rápido", "var(--pen)"], ["Brújula", "señala el norte", "var(--red)"], ["Astrolabio", "calcula la latitud", "var(--sun)"], ["Portulano", "mapa de costas", "var(--leaf)"]]),
    },
    {
      html: `<h3>Los Reyes Católicos</h3><p>En 1469 se casaron <b>Isabel de Castilla</b> y <b>Fernando de Aragón</b>. Fue una <mark>unión dinástica</mark>: cada reino mantuvo sus leyes, sus Cortes y su moneda, pero gobernaron juntos. Crearon una <b>monarquía autoritaria</b>: sometieron a la nobleza, crearon la <b>Santa Hermandad</b> (una policía), un ejército permanente, la <b>Inquisición</b> para vigilar la fe y nombraron <b>corregidores</b> en las ciudades. El papa les dio el título de «Católicos» en 1496.</p>`,
      svg: dos("Castilla y Aragón bajo los Reyes Católicos", ["Castilla", ["Isabel", "más grande", "y poblada", "lana y comercio", "atlántico"], "var(--red)"], ["Aragón", ["Fernando", "Aragón, Cataluña,", "Valencia, Mallorca", "comercio", "mediterráneo"], "var(--sun)"]),
    },
    {
      html: `<h3>La unidad territorial y religiosa</h3><p>En <b>1492</b> los Reyes Católicos conquistaron el <mark>reino nazarí de Granada</mark>, último territorio musulmán de la península. Ese mismo año expulsaron a los <b>judíos</b> que no se convirtieron al cristianismo; en 1502 se obligó a los musulmanes de Castilla a bautizarse o marcharse. Después, Fernando incorporó <b>Navarra</b> (1512). También anexionaron las <b>islas Canarias</b> y conquistaron territorios en Italia y el norte de África.</p>`,
      svg: linea("Los grandes hechos de 1492 y después", [["1469", "boda de|Isabel y Fernando"], ["1492", "Granada,|judíos, Colón"], ["1496", "título de|Católicos"], ["1512", "anexión de|Navarra"]], "var(--red)"),
    },
    {
      html: `<h3>Colón y el descubrimiento de América</h3><p><b>Cristóbal Colón</b> propuso llegar a Asia navegando hacia el oeste. Tras ser rechazado en Portugal, firmó con Isabel las <b>Capitulaciones de Santa Fe</b>. El 3 de agosto de 1492 zarpó de Palos con las carabelas <i>Pinta</i> y <i>Niña</i> y la nao <i>Santa María</i>, y el <mark>12 de octubre de 1492</mark> llegó a la isla de Guanahaní, en las Bahamas. Hizo cuatro viajes, pero siempre creyó haber llegado a las Indias.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ruta del primer viaje de Colón: de Palos a Canarias y de allí a las Bahamas en unos dos meses">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="10" width="240" height="140" rx="10" fill="var(--inf)" fill-opacity=".15"/>
        <path d="M200 30 Q 216 40 214 70 L 230 90 L 250 70 V 30 Z" fill="var(--leaf)" fill-opacity=".6"/>
        <path d="M10 60 Q 30 70 40 100 L 26 140 H 10 Z" fill="var(--leaf)" fill-opacity=".6"/>
        <path d="M214 56 Q 200 80 190 92 Q 120 70 44 92" fill="none" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="6 4"/>
        <circle cx="214" cy="56" r="5" fill="var(--red)"/><circle cx="190" cy="92" r="5" fill="var(--sun)"/><circle cx="44" cy="92" r="5" fill="var(--pen)"/>
        <g ${F} font-size="11" font-weight="700"><text x="196" y="24" fill="var(--ink)">Palos</text><text x="166" y="112" fill="var(--ink)">Canarias</text><text x="48" y="80" fill="var(--pen)">Guanahaní</text><text x="130" y="168" text-anchor="middle" fill="var(--muted)">3 de agosto – 12 de octubre de 1492</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Los grandes viajes de los siglos XV y XVI",
    svg: figLinea("Cronología de los viajes de descubrimiento", [[40, "1488", "Dias: cabo de Buena Esperanza", 1], [160, "1492", "Colón llega a América", 0], [250, "1498", "Vasco da Gama: India", 1], [340, "1500", "Cabral: Brasil", 0], [430, "1513", "Núñez de Balboa: Pacífico", 1], [600, "1522", "Elcano: vuelta al mundo", 0]], [[40, 330, "Portugal: ruta africana", "var(--leaf)"], [330, 640, "Castilla: ruta occidental", "var(--red)"]]),
  },
  video: { id: "Z5xd9y8BdmQ", titulo: "Los Reyes Católicos en 10 minutos: el reinado de Isabel y Fernando", canal: "HistoriaEn10'", vistas: 481838, megusta: 0, busqueda: "reyes católicos" },
  quiz: [
    { q: "¿Qué buscaban los europeos en Asia?", o: ["Especias, seda y oro", "Carbón", "Trigo"], a: 0, e: "Eran productos muy valiosos." },
    { q: "¿Qué instrumento calculaba la latitud?", o: ["La brújula", "El astrolabio", "El portulano"], a: 1, e: "Por la altura de las estrellas." },
    { q: "El matrimonio de Isabel y Fernando fue…", o: ["una unión dinástica", "la unión total de leyes", "una conquista"], a: 0, e: "Cada reino conservó sus leyes." },
    { q: "¿Qué reino conquistaron en 1492?", o: ["Navarra", "Granada", "Portugal"], a: 1, e: "El último reino musulmán." },
    { q: "Colón llegó a América el…", o: ["12 de octubre de 1492", "3 de agosto de 1492", "1 de enero de 1500"], a: 0, e: "A la isla de Guanahaní." },
  ],
  examen: [
    { q: "La Santa Hermandad era…", o: ["una cofradía religiosa", "una especie de policía", "un tribunal de la fe"], a: 1, e: "Perseguía a los bandidos en los caminos." },
    { q: "¿Quién incorporó Navarra en 1512?", o: ["Isabel", "Fernando", "Carlos I"], a: 1, e: "Tras la muerte de Isabel." },
    { q: "¿Por qué el continente se llama América?", o: ["Por Américo Vespucio", "Por un rey", "Por una tribu"], a: 0, e: "Explicó que era un mundo nuevo." },
  ],
  feynman: ["Por qué los europeos buscaron nuevas rutas", "Qué inventos permitieron los viajes", "Cómo gobernaron los Reyes Católicos", "Qué ocurrió en 1492"],
  mapa: mapa("DESCUBRIMIENTOS Y REYES CATÓLICOS", "var(--red)", [
    ["Causas", "especias · bloqueo turco", "var(--sun)"],
    ["Técnica", "carabela · brújula · astrolabio", "var(--pen)"],
    ["Reyes Católicos", "unión dinástica · Granada", "var(--red)"],
    ["América", "Colón 1492 · Tordesillas", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Carabela", "Barco ligero y rápido de los viajes de descubrimiento."],
    ["Unión dinástica", "Unión de Castilla y Aragón por el matrimonio de sus reyes, sin unir sus leyes."],
    ["Monarquía autoritaria", "El rey refuerza su poder sobre la nobleza, con ejército y funcionarios propios."],
    ["1492", "Conquista de Granada, expulsión de los judíos y llegada de Colón a América."],
    ["Capitulaciones de Santa Fe", "Acuerdo entre Isabel la Católica y Colón para el viaje."],
  ],
  familias: ["Buscad en un mapa la ruta del primer viaje de Colón y medid la distancia con la escala.", "Mirad en la cocina qué alimentos llegaron de América: tomate, patata, cacao, maíz, pimiento.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la expansión europea, la monarquía hispánica de los Reyes Católicos, la llegada a América, la conquista y sus consecuencias (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Diario de a bordo de un marinero de la Santa María.", "Mapa de las rutas portuguesas y castellanas con colores.", "Debate con fuentes: «descubrimiento» o «encuentro de culturas»."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Portal de Archivos Españoles (PARES): Capitulaciones de Santa Fe", url: "https://pares.mcu.es/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Comparar las rutas portuguesa y castellana y el reparto de Tordesillas", "Describir las culturas precolombinas, la conquista y la organización de América"],
  bloques: [
    { tras: "Los avances técnicos", html: `<h3>Portugal abre el camino</h3><p>Los primeros en explorar fueron los <b>portugueses</b>. Impulsados por el príncipe <b>Enrique el Navegante</b>, bajaron por la costa de África buscando oro, esclavos y un paso hacia Asia. En 1488, <b>Bartolomé Dias</b> dobló el cabo de Buena Esperanza, en el extremo sur de África. En 1498, <mark>Vasco da Gama</mark> llegó a Calicut, en la India, abriendo la ruta de las especias por el océano Índico. En 1500, <b>Pedro Álvares Cabral</b> llegó a Brasil. Portugal creó un imperio comercial de <b>factorías</b>: puertos fortificados en las costas de África y Asia, sin conquistar el interior.</p>` },
    { tras: "Colón y el descubrimiento de América", html: `<h3>El reparto del mundo: Tordesillas</h3><p>Tras el viaje de Colón, Castilla y Portugal discutieron a quién pertenecían las nuevas tierras. En el <mark>Tratado de Tordesillas</mark> (1494) trazaron una línea imaginaria de norte a sur a <b>370 leguas</b> al oeste de las islas de Cabo Verde: las tierras al oeste serían para Castilla y las del este, para Portugal. Por eso en Brasil, que quedó al este de la línea, se habla portugués. Más tarde, <b>Núñez de Balboa</b> vio el océano Pacífico (1513) y la expedición de <b>Magallanes</b> y <b>Juan Sebastián Elcano</b> dio la <b>primera vuelta al mundo</b> (1519–1522): demostró que la Tierra era redonda y mucho mayor de lo que se pensaba.</p>`, video: { id: "FdizSgFEuR8", titulo: "El descubrimiento de América", canal: "Academia Play", vistas: 6556987, megusta: 0 } },
    { tras: "Colón y el descubrimiento de América", html: `<h3>Las culturas precolombinas</h3><p>América no estaba vacía: vivían allí entre 40 y 60 millones de personas, en pueblos muy diversos. Tres grandes civilizaciones habían construido ciudades y Estados. Los <mark>mayas</mark>, en Yucatán y Guatemala, con ciudades-estado, escritura jeroglífica, un calendario muy preciso y grandes pirámides, aunque en 1500 ya estaban en declive. Los <mark>aztecas</mark> o mexicas, con un imperio guerrero cuya capital, <b>Tenochtitlan</b>, construida sobre un lago, tenía más de 200.000 habitantes. Y los <mark>incas</mark>, en los Andes, con un imperio de unos 10 millones de personas, una red de caminos de miles de kilómetros y su capital en <b>Cuzco</b>.</p>${tabla(["Civilización", "Territorio", "Capital o ciudades", "Rasgos"], [["Mayas", "Yucatán, Guatemala", "Tikal, Chichén Itzá", "escritura, calendario, astronomía"], ["Aztecas", "centro de México", "Tenochtitlan", "imperio guerrero, tributos"], ["Incas", "Andes", "Cuzco", "caminos, terrazas, quipus"]])}` },
    { tras: "Colón y el descubrimiento de América", html: `<h3>La conquista y sus consecuencias</h3><p>Los <b>conquistadores</b>, con pocos hombres pero con caballos, armas de fuego, alianzas con pueblos indígenas enemigos y, sobre todo, enfermedades, derrotaron a los grandes imperios. <b>Hernán Cortés</b> conquistó el Imperio azteca (1519–1521) y <b>Francisco Pizarro</b>, el inca (1532–1533). Las consecuencias fueron enormes. La población indígena sufrió una <mark>catástrofe demográfica</mark> por la viruela y otras enfermedades, los trabajos forzados y la guerra. Se produjo un gran <b>intercambio</b>: llegaron a Europa la patata, el maíz, el tomate, el cacao y la plata; a América, el trigo, la vid, el caballo, la vaca, el castellano y el cristianismo. Para defender a los indígenas surgieron voces como la de fray <b>Bartolomé de las Casas</b>, y se aprobaron las <b>Leyes Nuevas</b> (1542), aunque muchas veces no se cumplieron.</p>` },
  ],
  ejemplos: [
    { enunciado: "Compara la ruta portuguesa y la castellana hacia Asia.", pasos: ["Portugal: hacia el sur, bordeando África y cruzando el Índico (Dias, Vasco da Gama).", "Castilla: hacia el oeste, cruzando el Atlántico (Colón).", "Resultado: Portugal llegó a la India en 1498; Castilla se encontró con América en 1492."], resultado: "Portugal rodeó África; Castilla cruzó el Atlántico y llegó a América." },
    { enunciado: "Explica por qué en Brasil se habla portugués y en el resto de Sudamérica, sobre todo castellano.", pasos: ["En 1494 el Tratado de Tordesillas repartió las tierras con una línea al oeste de Cabo Verde.", "El extremo oriental de Sudamérica quedó al este de la línea, en la zona portuguesa.", "Cabral llegó allí en 1500 y Portugal lo colonizó."], resultado: "Por el reparto del Tratado de Tordesillas." },
    { enunciado: "Clasifica estas medidas de los Reyes Católicos en políticas, religiosas o territoriales: Inquisición, conquista de Granada, Santa Hermandad, expulsión de los judíos, anexión de Navarra, corregidores.", pasos: ["Políticas: Santa Hermandad y corregidores (refuerzan el poder real).", "Religiosas: Inquisición y expulsión de los judíos (unidad de fe).", "Territoriales: conquista de Granada y anexión de Navarra."], resultado: "Políticas, religiosas y territoriales, todas para reforzar la monarquía." },
  ],
  errores: [
    "Pensar que con los Reyes Católicos se unificaron las leyes de Castilla y Aragón: fue solo una unión dinástica.",
    "Creer que Colón sabía que había llegado a un nuevo continente.",
    "Confundir a los mayas, aztecas e incas o situarlos en el mismo lugar.",
    "Atribuir la vuelta al mundo solo a Magallanes: murió en Filipinas y la completó Elcano.",
    "Pensar que la caída de la población indígena se debió solo a las guerras: la principal causa fueron las enfermedades.",
  ],
  ejercicios: [
    { q: "Escribe tres causas de los grandes descubrimientos.", sol: "La búsqueda de especias y oro, el bloqueo turco de las rutas de Oriente, la curiosidad científica y el deseo de extender el cristianismo." },
    { q: "¿Para qué servían la brújula y el astrolabio?", sol: "La brújula indicaba el norte; el astrolabio permitía calcular la latitud midiendo la altura de los astros." },
    { q: "¿Qué ruta abrió Vasco da Gama?", sol: "La ruta marítima a la India rodeando África por el cabo de Buena Esperanza (1498)." },
    { q: "¿Por qué se dice que el matrimonio de los Reyes Católicos fue una unión dinástica?", sol: "Porque unió a los reyes, pero Castilla y Aragón conservaron sus propias leyes, Cortes, monedas e instituciones." },
    { q: "Cita tres medidas con las que los Reyes Católicos reforzaron su poder.", sol: "Sometieron a la nobleza, crearon la Santa Hermandad, un ejército permanente y nombraron corregidores en las ciudades." },
    { q: "¿Qué tres hechos importantes ocurrieron en 1492?", sol: "La conquista de Granada, la expulsión de los judíos y la llegada de Colón a América (también la gramática de Nebrija)." },
    { q: "¿Qué estableció el Tratado de Tordesillas?", sol: "El reparto de las tierras descubiertas entre Castilla (al oeste) y Portugal (al este) de una línea a 370 leguas de Cabo Verde." },
    { q: "Escribe una característica de mayas, aztecas e incas.", sol: "Mayas: escritura y calendario muy preciso. Aztecas: imperio guerrero con capital en Tenochtitlan. Incas: imperio andino con una gran red de caminos." },
    { q: "¿Quiénes conquistaron los imperios azteca e inca?", sol: "Hernán Cortés, el azteca (1519–1521); Francisco Pizarro, el inca (1532–1533)." },
    { q: "Nombra tres productos que llegaron de América a Europa y tres que fueron de Europa a América.", sol: "De América: patata, tomate, maíz, cacao. De Europa: trigo, vid, caballo, vaca." },
  ],
  quiz: [
    { q: "El primero en llegar a la India por mar fue…", o: ["Colón", "Vasco da Gama", "Cabral"], a: 1, e: "En 1498." },
    { q: "La primera vuelta al mundo la completó…", o: ["Magallanes", "Elcano", "Balboa"], a: 1, e: "En 1522, con la nave Victoria." },
    { q: "La capital azteca era…", o: ["Cuzco", "Tenochtitlan", "Tikal"], a: 1, e: "Sobre el lago Texcoco, hoy Ciudad de México." },
    { q: "La principal causa de la caída de la población indígena fue…", o: ["las enfermedades", "el hambre", "el frío"], a: 0, e: "Sobre todo la viruela." },
    { q: "Defendió a los indígenas…", o: ["Bartolomé de las Casas", "Hernán Cortés", "Pizarro"], a: 0, e: "Denunció los abusos de los conquistadores." },
  ],
  tarjetas: [
    ["Tratado de Tordesillas", "1494: reparto del mundo entre Castilla y Portugal."],
    ["Elcano", "Completó en 1522 la primera vuelta al mundo."],
    ["Culturas precolombinas", "Mayas, aztecas e incas, entre otras."],
  ],
});
