// Cultura Clásica 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, filas, dos, rueda, figLinea, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "3-eso",
  titulo: "Grecia y Roma: geografía e historia",
  minutos: 35,
  objetivos: ["Situar Grecia y Roma en el mapa del Mediterráneo", "Distinguir las grandes etapas de la historia griega y romana", "Explicar por qué el Mediterráneo fue el centro del mundo clásico"],
  claves: ["Mediterráneo", "polis", "Atenas y Esparta", "Alejandro Magno", "Monarquía, República e Imperio", "romanización"],
  pregunta: {
    texto: "Los romanos llamaban al Mediterráneo «Mare Nostrum», «nuestro mar». ¿Por qué un mar podía ser «suyo»?",
    respuesta: "Porque en el siglo I d. C. <mark>todas sus costas</mark> pertenecían al Imperio romano, desde Hispania hasta Egipto. El Mediterráneo era su gran carretera: por él viajaban barcos con trigo, aceite, vino, soldados e ideas. Antes, los <b>griegos</b> ya lo habían llenado de colonias, «como ranas alrededor de una charca», decía Platón.",
  },
  bloques: [
    {
      html: `<h3>El escenario: el Mediterráneo</h3><p>Grecia y Roma nacieron a orillas del <mark>mar Mediterráneo</mark>. La <b>Grecia antigua</b> ocupaba el sur de la península de los Balcanes, las islas del mar Egeo y la costa de Asia Menor (hoy Turquía): una tierra <b>montañosa</b>, con poca tierra fértil y muchas costas, que empujó a los griegos a ser marineros y comerciantes. <b>Roma</b> nació en el centro de la península <b>itálica</b>, junto al río Tíber, en una llanura fértil (el Lacio). Ambos pueblos cultivaban la <b>tríada mediterránea</b>: trigo, vid y olivo.</p>`,
      svg: dos("Grecia y Roma: dos paisajes distintos junto al mismo mar", ["Grecia", ["montañas", "islas y costas", "poca tierra fértil", "mar = camino"], "var(--pen)"], ["Roma", ["península itálica", "río Tíber", "llanura del Lacio", "siete colinas"], "var(--red)"]),
    },
    {
      html: `<h3>Las polis griegas</h3><p>Las montañas separaban unos valles de otros, así que Grecia nunca fue un único país. Se dividía en <mark>polis</mark>, ciudades-estado independientes con su propio gobierno, leyes, ejército y moneda. Las más famosas fueron <b>Atenas</b>, cuna de la <b>democracia</b>, la filosofía y el teatro, y <b>Esparta</b>, una ciudad militar gobernada por una minoría, donde los niños se entrenaban desde los siete años para ser soldados. Pese a sus diferencias, todos los griegos (<i>helenos</i>) compartían lengua, dioses y los <b>Juegos Olímpicos</b>.</p>`,
      svg: dos("Atenas y Esparta, dos modelos de polis", ["Atenas", ["democracia", "comercio y mar", "filosofía, teatro", "educación amplia"], "var(--pen)"], ["Esparta", ["oligarquía", "agricultura", "ejército", "educación militar"], "var(--red)"]),
    },
    {
      html: `<h3>Las etapas de la historia griega</h3><p>Tras la civilización micénica (la de los héroes de Homero), Grecia vivió la <b>época arcaica</b> (siglos VIII–VI a. C.), en la que nacieron las polis y fundaron <b>colonias</b> por el Mediterráneo, como <i>Emporion</i> (Ampurias) en Cataluña. En la <b>época clásica</b> (siglos V–IV a. C.) los griegos vencieron a los persas en las <mark>Guerras Médicas</mark> y Atenas vivió su edad de oro con <b>Pericles</b>. Después, Atenas y Esparta se enfrentaron en la <b>guerra del Peloponeso</b>, que debilitó a todas las polis.</p>`,
      svg: linea("Etapas de la historia griega", [["s. VIII", "época|arcaica"], ["490 a. C.", "Guerras|Médicas"], ["s. V a.C.", "Pericles:|edad de oro"], ["323 a. C.", "muere|Alejandro"]], "var(--pen)"),
    },
    {
      html: `<h3>Alejandro Magno y el helenismo</h3><p>En el siglo IV a. C., el reino de <b>Macedonia</b>, al norte, conquistó las polis griegas. Su rey <mark>Alejandro Magno</mark> (356–323 a. C.), alumno de Aristóteles, creó en solo diez años un imperio enorme que llegaba desde Grecia y Egipto hasta la India. Fundó muchas ciudades llamadas <b>Alejandría</b>; la de Egipto tuvo la biblioteca más famosa de la Antigüedad y un faro que fue una de las siete maravillas. A su muerte, el imperio se dividió, pero la cultura griega se extendió por todo Oriente: es el <b>helenismo</b>.</p>`,
      svg: filas("Claves del helenismo", [["Macedonia", "conquista de Grecia", "var(--muted)"], ["Alejandro", "imperio hasta la India", "var(--pen)"], ["Alejandría", "biblioteca y faro", "var(--sun)"], ["Helenismo", "cultura griega en Oriente", "var(--leaf)"]]),
    },
    {
      html: `<h3>Las tres etapas de Roma</h3><p>Según la leyenda, Roma fue fundada por <b>Rómulo</b> en el <mark>753 a. C.</mark> Su historia tiene tres etapas. La <b>Monarquía</b> (753–509 a. C.), con siete reyes. La <b>República</b> (509–27 a. C.), gobernada por magistrados elegidos (los <b>cónsules</b>) y el <b>Senado</b>; en ella Roma conquistó Italia, venció a Cartago en las <b>guerras púnicas</b> y dominó el Mediterráneo. Y el <b>Imperio</b> (27 a. C.–476 d. C.), que comenzó con <mark>Augusto</mark>, el primer emperador, y terminó en Occidente cuando los pueblos germanos depusieron al último emperador.</p>`,
      svg: linea("Las tres etapas de la historia de Roma", [["753 a.C.", "fundación:|Monarquía"], ["509 a. C.", "República"], ["27 a. C.", "Augusto:|Imperio"], ["476 d. C.", "fin de|Occidente"]], "var(--red)"),
    },
  ],
  figura: {
    titulo: "Mil años de historia clásica",
    svg: figLinea("Línea del tiempo de Grecia y Roma desde el 776 a. C. hasta el 476 d. C.", [[40, "776 a. C.", "primeros Juegos", 1], [100, "753 a. C.", "fundación de Roma", 0], [200, "509 a. C.", "República romana", 1], [260, "490 a. C.", "Maratón", 0], [360, "323 a. C.", "muere Alejandro", 1], [440, "146 a. C.", "Roma domina Grecia", 0], [520, "27 a. C.", "Augusto, emperador", 1], [640, "476 d. C.", "fin de Roma", 0]]),
  },
  video: { id: "8o-xZN9ZFXI", titulo: "La historia de la Antigua Grecia en 9 minutos", canal: "Memorias de Pez", vistas: 1064899, megusta: 0, busqueda: "historia de la antigua grecia resumen" },
  quiz: [
    { q: "¿Qué era una polis?", o: ["Un templo", "Una ciudad-estado independiente", "Un tipo de barco"], a: 1, e: "Con gobierno, leyes y ejército propios." },
    { q: "¿Junto a qué río nació Roma?", o: ["Nilo", "Tíber", "Ebro"], a: 1, e: "En la región del Lacio." },
    { q: "¿Qué ciudad griega era famosa por su ejército?", o: ["Atenas", "Esparta", "Corinto"], a: 1, e: "Los niños se educaban como soldados." },
    { q: "¿Quién fue el primer emperador romano?", o: ["Julio César", "Augusto", "Rómulo"], a: 1, e: "Desde el 27 a. C." },
    { q: "¿Hasta dónde llegó el imperio de Alejandro?", o: ["Hasta Hispania", "Hasta la India", "Hasta Britania"], a: 1, e: "En solo diez años." },
  ],
  examen: [
    { q: "Ordena: Monarquía, Imperio, República.", o: ["Monarquía, República, Imperio", "República, Monarquía, Imperio", "Imperio, República, Monarquía"], a: 0, e: "753, 509 y 27 a. C." },
    { q: "La tríada mediterránea es…", o: ["trigo, vid y olivo", "arroz, maíz y trigo", "oro, plata y cobre"], a: 0, e: "La base de la dieta de griegos y romanos." },
    { q: "¿Por qué Grecia estaba dividida en polis?", o: ["Por las montañas que separaban los valles", "Por los ríos", "Por orden de Roma"], a: 0, e: "El relieve aislaba unas comunidades de otras." },
  ],
  feynman: ["Dónde estaban Grecia y Roma y cómo era su paisaje", "Qué era una polis y en qué se diferenciaban Atenas y Esparta", "Quién fue Alejandro Magno y qué es el helenismo", "Cuáles son las tres etapas de la historia de Roma"],
  mapa: mapa("GRECIA Y ROMA", "var(--sun)", [
    ["Escenario", "Mediterráneo · tríada", "var(--inf)"],
    ["Grecia", "polis · Atenas · Esparta", "var(--pen)"],
    ["Helenismo", "Alejandro Magno", "var(--sun)"],
    ["Roma", "Monarquía · República · Imperio", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Polis", "Ciudad-estado griega independiente."],
    ["Mare Nostrum", "Nombre romano del Mediterráneo: «nuestro mar»."],
    ["Helenismo", "Difusión de la cultura griega por Oriente tras Alejandro Magno."],
    ["República romana", "Etapa (509–27 a. C.) gobernada por cónsules y Senado."],
    ["Augusto", "Primer emperador de Roma, desde el 27 a. C."],
  ],
  familias: ["Buscad en un mapa actual los lugares del tema: Atenas, Esparta, Roma, Alejandría y Ampurias.", "Comentad qué palabras del día a día vienen de este tema: política (de polis), república, senado.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El marco geográfico e histórico de Grecia y Roma: las polis, Atenas y Esparta, el helenismo y las etapas de la historia romana (Cultura Clásica, materia optativa que ofertan las comunidades autónomas en el marco del RD 217/2022).",
    ideas: ["Mapa mudo del Mediterráneo para situar polis, colonias y provincias romanas.", "Línea del tiempo gigante en el pasillo con hitos de Grecia y Roma.", "Debate: ¿preferirías vivir en Atenas o en Esparta?"],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo Arqueológico Nacional: Grecia y Roma", url: "https://www.man.es/man/coleccion/catalogos-tematicos.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar la expansión de Roma y la organización de su imperio", "Relacionar la geografía del Mediterráneo con el comercio y la colonización"],
  bloques: [
    { tras: "El escenario: el Mediterráneo", html: `<h3>Las colonizaciones griegas</h3><p>Entre los siglos VIII y VI a. C., muchas polis tenían más población de la que sus tierras podían alimentar. Por eso enviaron grupos de ciudadanos a fundar <mark>colonias</mark> en otras costas: el sur de Italia y Sicilia (la «Magna Grecia», con ciudades como Siracusa o Nápoles, <i>Neápolis</i>, «ciudad nueva»), el sur de Francia (<i>Massalia</i>, hoy Marsella), el mar Negro y la península ibérica, donde fundaron <b>Emporion</b> (Ampurias, Girona), cuyo nombre significa «mercado». Las colonias eran independientes, pero mantenían lazos con su metrópoli y difundieron la escritura, la moneda, el olivo y la vid.</p>` },
    { tras: "Las etapas de la historia griega", html: `<h3>Las Guerras Médicas</h3><p>A comienzos del siglo V a. C., el gran <b>Imperio persa</b> quiso conquistar Grecia. Las polis, normalmente rivales, se unieron. En la batalla de <mark>Maratón</mark> (490 a. C.) los atenienses vencieron a un ejército mucho mayor; según la tradición, un mensajero corrió unos 40 km hasta Atenas para anunciar la victoria, y de ahí viene la carrera de maratón. Diez años después, 300 espartanos con su rey <b>Leónidas</b> resistieron en el paso de las <b>Termópilas</b>, y la flota ateniense venció en <b>Salamina</b> (480 a. C.). Tras la victoria, Atenas se convirtió en la polis más poderosa.</p>`, video: { id: "N4Ljm78end4", titulo: "El Imperio romano en 10 minutos", canal: "Memorias de Pez", vistas: 3251415, megusta: 0 } },
    { tras: "Las tres etapas de Roma", html: `<h3>De ciudad a imperio</h3><p>Roma pasó de ser una pequeña ciudad a dominar un territorio inmenso gracias a su <b>ejército</b>, organizado en <mark>legiones</mark> de soldados bien entrenados, y a su capacidad para integrar a los pueblos vencidos. Primero conquistó Italia; después venció a <b>Cartago</b> (en el norte de África) en tres <b>guerras púnicas</b>: en la segunda, el cartaginés <b>Aníbal</b> cruzó los Alpes con elefantes, pero finalmente fue derrotado. Luego Roma ocupó Grecia, Hispania, la Galia (conquistada por <b>Julio César</b>), Egipto y Britania. En el siglo II d. C., con el emperador hispano <b>Trajano</b>, el Imperio alcanzó su máxima extensión.</p>` },
    { tras: "De ciudad a imperio", html: `<h3>La organización del Imperio y su final</h3>${tabla(["Elemento", "Qué era", "Para qué servía"], [["Provincias", "territorios conquistados", "gobernarlos y cobrar impuestos"], ["Calzadas", "carreteras de piedra", "mover tropas y mercancías"], ["Latín y derecho", "lengua y leyes comunes", "unir a pueblos distintos"], ["Ciudadanía", "derechos de ciudadano", "integrar a los vencidos (desde 212, a todos los libres)"]])}<p>En los siglos III y IV, el Imperio sufrió crisis económicas, guerras civiles y presiones de los <b>pueblos germanos</b> en las fronteras. En el 395, el emperador <b>Teodosio</b> lo dividió entre sus hijos: el <mark>Imperio de Occidente</mark>, con capital en Roma, y el de <b>Oriente</b>, con capital en Constantinopla. El de Occidente cayó en el <b>476</b>, fecha que marca el fin de la Edad Antigua; el de Oriente (Bizancio) duró hasta 1453.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica por qué los griegos se hicieron marineros y fundaron colonias.", pasos: ["El relieve de Grecia es montañoso y hay poca tierra fértil.", "Las costas y las islas están muy cerca unas de otras: el mar es el camino más fácil.", "Cuando la población creció, enviaron colonos a otras costas del Mediterráneo."], resultado: "Por la falta de tierras fértiles, la cercanía del mar y el crecimiento de la población." },
    { enunciado: "Sitúa en su etapa: guerras púnicas, Rómulo, Augusto.", pasos: ["Rómulo: fundador legendario, 753 a. C. → Monarquía.", "Guerras púnicas: siglos III–II a. C., conquista del Mediterráneo → República.", "Augusto: primer emperador, 27 a. C. → Imperio."], resultado: "Rómulo, Monarquía; guerras púnicas, República; Augusto, Imperio." },
    { enunciado: "Calcula cuántos años duró el Imperio romano de Occidente desde Augusto.", pasos: ["Empieza en el 27 a. C. y termina en el 476 d. C.", "Al pasar de a. C. a d. C. se suman los años (no hay año 0).", "27 + 476 = 503, menos 1 por no existir el año 0."], resultado: "Unos 502 años." },
  ],
  errores: [
    "Pensar que Grecia era un solo país con un rey: eran polis independientes.",
    "Confundir la República romana con una democracia como la de Atenas: el poder estaba en manos de los más ricos.",
    "Creer que Julio César fue emperador: fue dictador, el primer emperador fue Augusto.",
    "Restar mal las fechas antes y después de Cristo.",
    "Pensar que todo el Imperio cayó en el 476: el de Oriente siguió hasta 1453.",
  ],
  ejercicios: [
    { q: "Describe el relieve de Grecia y explica cómo influyó en su historia.", sol: "Montañoso, con valles aislados, islas y mucha costa. Favoreció la división en polis y la navegación y el comercio." },
    { q: "¿Qué es la tríada mediterránea?", sol: "Los tres cultivos básicos del Mediterráneo: trigo, vid y olivo." },
    { q: "Compara Atenas y Esparta en gobierno y educación.", sol: "Atenas: democracia y educación amplia (letras, música, deporte). Esparta: oligarquía y educación militar." },
    { q: "¿Qué colonia griega se fundó en la península ibérica y qué significa su nombre?", sol: "Emporion (Ampurias), que significa «mercado»." },
    { q: "¿Qué ocurrió en Maratón y qué recuerdo nos ha dejado?", sol: "Los atenienses vencieron a los persas (490 a. C.). De la carrera del mensajero viene la prueba de maratón." },
    { q: "¿Qué fue el helenismo?", sol: "La difusión de la cultura griega por Oriente tras las conquistas de Alejandro Magno." },
    { q: "Nombra las tres etapas de la historia de Roma con sus fechas.", sol: "Monarquía (753–509 a. C.), República (509–27 a. C.) e Imperio (27 a. C.–476 d. C.)." },
    { q: "¿Contra quién lucharon los romanos en las guerras púnicas?", sol: "Contra Cartago, en el norte de África." },
    { q: "Cita tres elementos que mantenían unido el Imperio romano.", sol: "Las calzadas, el latín y el derecho romano, además del ejército y la ciudadanía." },
    { q: "¿Por qué el año 476 es una fecha clave?", sol: "Cae el Imperio romano de Occidente y termina la Edad Antigua." },
  ],
  quiz: [
    { q: "Emporion significa…", o: ["mercado", "puerto", "templo"], a: 0, e: "Colonia griega de Girona." },
    { q: "Las Termópilas son famosas por…", o: ["los 300 espartanos", "los Juegos", "un templo"], a: 0, e: "Leónidas frente a los persas." },
    { q: "Aníbal era…", o: ["cartaginés", "griego", "persa"], a: 0, e: "Cruzó los Alpes con elefantes." },
    { q: "El Imperio alcanzó su máxima extensión con…", o: ["Trajano", "Rómulo", "Nerón"], a: 0, e: "Emperador nacido en Itálica (Sevilla)." },
    { q: "La capital del Imperio de Oriente era…", o: ["Constantinopla", "Atenas", "Cartago"], a: 0, e: "Hoy Estambul." },
  ],
  tarjetas: [
    ["Colonia griega", "Ciudad fundada por griegos en otra costa: Emporion, Massalia."],
    ["Guerras púnicas", "Guerras entre Roma y Cartago por el dominio del Mediterráneo."],
    ["476 d. C.", "Caída del Imperio romano de Occidente."],
  ],
});
