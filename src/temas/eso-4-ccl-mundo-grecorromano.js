// Cultura Clásica 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, linea, figLinea } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "4-eso",
  titulo: "El mundo grecorromano: espacio y tiempo",
  minutos: 60,
  objetivos: ["Situar en el mapa la Grecia antigua, sus colonias y la expansión de Roma", "Ordenar las etapas de la historia de Grecia y de Roma", "Explicar la relación entre geografía y forma de vida en el Mediterráneo", "Valorar la cultura clásica como raíz de la civilización occidental"],
  claves: ["Mediterráneo", "polis", "colonización", "Helenismo", "República", "Imperio"],
  pregunta: {
    texto: "Si viajaras en el tiempo a la Atenas del año 450 a. C. o a la Roma del año 100, ¿qué te resultaría familiar? Teatro, elecciones, juicios con abogados, termas, carreras, calzadas…",
    respuesta: "Mucho. Grecia y Roma son la <mark>cuna de la cultura occidental</mark>: de ellas vienen la democracia, el derecho, la filosofía, el teatro, gran parte de nuestro vocabulario y nuestras ciudades. Para entenderlas hay que saber <b>dónde</b> y <b>cuándo</b> vivieron.",
  },
  bloques: [
    {
      html: `<h3>Un mar en el centro</h3><p>Griegos y romanos vivieron alrededor del <mark>mar Mediterráneo</mark>, al que los romanos llamaron <i>Mare Nostrum</i>, «nuestro mar». Su clima, con veranos secos e inviernos suaves, favorecía la llamada <b>tríada mediterránea</b>: trigo, vid y olivo. El mar unía más que separaba: por él viajaban mercancías, personas e ideas. Los romanos llegaron a dominar todas sus costas, del estrecho de Gibraltar a Siria y de la Galia a Egipto.</p>`,
      svg: dos("La tríada mediterránea y el comercio", ["Tríada", ["trigo: pan", "vid: vino", "olivo: aceite", "clima suave", "veranos secos"], "var(--leaf)"], ["Mar", ["comercio", "colonias", "flotas", "ideas", "Mare Nostrum"], "var(--water)"]),
    },
    {
      html: `<h3>La geografía de Grecia</h3><p>La <b>Hélade</b> (Grecia) era un territorio muy montañoso, con poca tierra fértil, costas recortadas y cientos de islas en el mar Egeo. Las montañas aislaban los valles, por lo que los griegos nunca formaron un único Estado, sino muchas <mark>polis</mark> o ciudades-Estado independientes: Atenas, Esparta, Corinto, Tebas… Cada una tenía sus leyes, su ejército y sus dioses protectores. Aun así se sentían un mismo pueblo, los <b>helenos</b>, porque compartían lengua, religión, los Juegos Olímpicos y los poemas de Homero.</p>`,
    },
    {
      html: `<h3>Las colonias griegas</h3><p>Entre los siglos VIII y VI a. C., por falta de tierras y por el comercio, muchos griegos fundaron <b>colonias</b> por todo el Mediterráneo y el mar Negro. El sur de Italia y Sicilia se llamó <b>Magna Grecia</b> (Siracusa, Nápoles —<i>Neápolis</i>, «ciudad nueva»—). En la península ibérica fundaron <mark>Emporion</mark> (Ampurias, en Girona) y Rhode (Roses). También fundaron Massalia (Marsella) y Bizancio (después Constantinopla y hoy Estambul). Las colonias difundieron el alfabeto, la moneda, el olivo y la cultura griega.</p>`,
      svg: filas("Algunas colonias griegas y su nombre actual", [["Emporion", "Ampurias (Girona)", "var(--red)"], ["Massalia", "Marsella (Francia)", "var(--pen)"], ["Neápolis", "Nápoles (Italia)", "var(--sun)"], ["Siracusa", "Sicilia (Italia)", "var(--leaf)"], ["Bizancio", "Estambul (Turquía)", "var(--bac)"]]),
    },
    {
      html: `<h3>Las etapas de Grecia</h3><p>La historia griega se divide en varias épocas:</p>${tabla(["Etapa", "Fechas", "Rasgos"], [["Civilizaciones cretense y micénica", "c. 2000-1100 a. C.", "palacios de Cnosos y Micenas; guerra de Troya"], ["Época oscura", "1100-800 a. C.", "decadencia; transmisión oral de los mitos"], ["Época arcaica", "800-480 a. C.", "nacen las polis, colonización, primeros Juegos Olímpicos (776 a. C.)"], ["Época clásica", "480-323 a. C.", "Guerras Médicas, esplendor de Atenas con Pericles, guerra del Peloponeso"], ["Época helenística", "323-31 a. C.", "Alejandro Magno extiende la cultura griega hasta la India"]])}`,
      video: { id: "9LMlD7L4Vdk", titulo: "La antigua Grecia en 15 minutos", canal: "Academia Play", vistas: 8108483, megusta: 0 },
    },
    {
      html: `<h3>Alejandro Magno y el Helenismo</h3><p><b>Alejandro Magno</b>, rey de Macedonia y alumno de Aristóteles, conquistó en solo once años (334-323 a. C.) un imperio inmenso: Grecia, Egipto, Persia y hasta el río Indo. Fundó muchas ciudades llamadas <b>Alejandría</b>; la de Egipto tuvo la biblioteca más famosa de la Antigüedad y el faro, una de las siete maravillas. A su muerte el imperio se dividió, pero la cultura griega se mezcló con la oriental: es el <mark>Helenismo</mark>, cuya lengua común era el griego <i>koiné</i>.</p>`,
    },
    {
      html: `<h3>Roma: de aldea a imperio</h3><p>Según la leyenda, <b>Rómulo</b> fundó Roma en el año <b>753 a. C.</b> junto al río Tíber, en la península itálica. Su historia tiene tres etapas: la <b>Monarquía</b> (753-509 a. C.), con siete reyes; la <b>República</b> (509-27 a. C.), gobernada por cónsules y el Senado, en la que Roma conquistó Italia, venció a Cartago en las guerras púnicas y dominó el Mediterráneo; y el <mark>Imperio</mark> (27 a. C.-476 d. C.), que empezó con <b>Augusto</b> y alcanzó su máxima extensión con <b>Trajano</b>, nacido en Hispania.</p>`,
      svg: linea("Etapas de la historia de Roma", [["753 a. C.", "fundación|Monarquía"], ["509 a. C.", "República"], ["27 a. C.", "Imperio|Augusto"], ["476", "cae el Imperio|de Occidente"]], "var(--red)"),
      video: { id: "N4Ljm78end4", titulo: "El Imperio romano en 10 minutos", canal: "Memorias de Pez", vistas: 3251436, megusta: 0 },
    },
    {
      html: `<h3>Hispania romana</h3><p>Los romanos llegaron a la península ibérica en el <b>218 a. C.</b>, durante la segunda guerra púnica contra Cartago, y tardaron casi dos siglos en conquistarla (resistencia de Numancia, guerras cántabras). La llamaron <mark>Hispania</mark>. La <b>romanización</b> trajo el latín, el derecho, las ciudades (Emerita Augusta, Tarraco, Caesaraugusta, Hispalis), las calzadas, los acueductos como el de Segovia y los teatros como el de Mérida. De Hispania salieron emperadores (Trajano, Adriano) y escritores (Séneca, Marcial, Quintiliano).</p>`,
      svg: filas("Ciudades de Hispania y su nombre actual", [["Emerita", "Mérida", "var(--red)"], ["Tarraco", "Tarragona", "var(--pen)"], ["Caesaraugusta", "Zaragoza", "var(--sun)"], ["Hispalis", "Sevilla", "var(--leaf)"], ["Barcino", "Barcelona", "var(--bac)"]]),
    },
    {
      html: `<h3>El legado clásico</h3><p>Aunque el Imperio romano de Occidente cayó en el <b>476</b>, su herencia no desapareció. El de Oriente (Bizancio) duró hasta 1453 y conservó los textos griegos. En el <b>Renacimiento</b> se volvió a admirar el arte y el pensamiento clásicos, y en el siglo XVIII el <b>Neoclasicismo</b> los imitó. Hoy seguimos usando el alfabeto latino, el calendario juliano (reformado), el derecho romano, la democracia griega, los Juegos Olímpicos y miles de palabras griegas y latinas. Por eso se llama <mark>mundo clásico</mark>: un modelo que se toma como referencia.</p>`,
    },
  ],
  figura: {
    titulo: "Grecia y Roma en una línea del tiempo",
    svg: figLinea("Línea del tiempo de Grecia y Roma desde el 776 a. C. hasta el 476 d. C.", [[50, "776 a. C.", "1.ª Olimpiada", true], [80, "753 a. C.", "fundación de Roma", false], [210, "509 a. C.", "República romana", true], [300, "323 a. C.", "muere Alejandro", false], [420, "27 a. C.", "Augusto emperador", true], [500, "117", "Trajano: máxima extensión", false], [630, "476", "fin de Roma", true]], [[40, 300, "Grecia (arcaica y clásica)", "var(--pen)"], [300, 420, "Helenismo", "var(--sun)"], [420, 640, "Imperio romano", "var(--red)"]]),
  },
  video: { id: "mnxR2FYb06o", titulo: "¿Qué diferencia a los griegos de los romanos?", canal: "CuriosaMente", vistas: 1400164, megusta: 0, busqueda: "antigua grecia y roma resumen" },
  ejemplos: [
    { enunciado: "Explica por qué Grecia estuvo dividida en polis y no formó un único Estado.", pasos: ["El relieve era muy montañoso y aislaba los valles.", "Las islas y las costas recortadas dificultaban la comunicación por tierra.", "Cada comunidad se organizó por su cuenta, con leyes y gobierno propios."], resultado: "La geografía favoreció la existencia de muchas ciudades-Estado independientes." },
    { enunciado: "Ordena estos hechos: República romana, muerte de Alejandro, fundación de Roma, caída del Imperio de Occidente, Augusto emperador.", pasos: ["Fundación de Roma: 753 a. C.", "República romana: 509 a. C.", "Muerte de Alejandro: 323 a. C.", "Augusto emperador: 27 a. C.", "Caída del Imperio de Occidente: 476 d. C."], resultado: "Fundación → República → muerte de Alejandro → Augusto → caída de Roma." },
    { enunciado: "¿Cuántos años duró el Imperio romano de Occidente (del 27 a. C. al 476 d. C.)?", pasos: ["Del 27 a. C. al año 1: 27 años (no hay año 0).", "Del año 1 al 476: 475 años más (476 − 1).", "Total: 27 + 475 = 502 años."], resultado: "Unos 502 años." },
  ],
  errores: [
    "Pensar que Grecia era un país unido como hoy: eran ciudades-Estado independientes.",
    "Confundir la Magna Grecia (sur de Italia) con la propia Grecia.",
    "Contar los años a. C. hacia delante: van hacia atrás (el 500 a. C. es anterior al 400 a. C.).",
    "Creer que Roma fue siempre un imperio: antes fue monarquía y república.",
    "Pensar que todo terminó en el 476: el Imperio de Oriente duró hasta 1453 y el legado sigue vivo.",
  ],
  ejercicios: [
    { q: "¿Qué es la tríada mediterránea?", sol: "Los tres cultivos básicos del Mediterráneo: trigo, vid y olivo." },
    { q: "¿Qué es una polis? Nombra tres.", sol: "Una ciudad-Estado griega independiente, con sus leyes y gobierno. Atenas, Esparta y Corinto." },
    { q: "¿Qué unía a los griegos aunque vivieran en polis distintas?", sol: "La lengua, la religión, los Juegos Olímpicos y los poemas de Homero." },
    { q: "Nombra dos colonias griegas en la península ibérica.", sol: "Emporion (Ampurias) y Rhode (Roses)." },
    { q: "Escribe las cinco etapas de la historia de Grecia en orden.", sol: "Cretense y micénica, época oscura, arcaica, clásica y helenística." },
    { q: "¿Qué fue el Helenismo?", sol: "La época posterior a Alejandro Magno en la que la cultura griega se extendió y mezcló con las de Oriente." },
    { q: "Escribe las tres etapas de Roma con sus fechas.", sol: "Monarquía (753-509 a. C.), República (509-27 a. C.) e Imperio (27 a. C.-476 d. C.)." },
    { q: "¿Cuándo y por qué llegaron los romanos a Hispania?", sol: "En el 218 a. C., durante la segunda guerra púnica, para luchar contra Cartago." },
    { q: "Escribe el nombre actual de Emerita Augusta, Caesaraugusta y Tarraco.", sol: "Mérida, Zaragoza y Tarragona." },
    { q: "Pon cuatro ejemplos del legado clásico en nuestra vida.", sol: "El alfabeto latino, la democracia, los Juegos Olímpicos y el derecho romano (también palabras, teatro, calendario…)." },
  ],
  quiz: [
    { q: "Los romanos llamaban al Mediterráneo…", o: ["Mare Nostrum", "Mare Magnum", "Oceanus"], a: 0, e: "«Nuestro mar»." },
    { q: "Una polis era…", o: ["una ciudad-Estado", "un templo", "un ejército"], a: 0, e: "Con leyes y gobierno propios." },
    { q: "La Magna Grecia estaba en…", o: ["el sur de Italia", "Egipto", "Hispania"], a: 0, e: "Y en Sicilia." },
    { q: "Emporion es la actual…", o: ["Ampurias", "Mérida", "Cádiz"], a: 0, e: "En la costa de Girona." },
    { q: "Los primeros Juegos Olímpicos fueron en…", o: ["776 a. C.", "476 d. C.", "1896"], a: 0, e: "Inicio tradicional de la época arcaica." },
    { q: "Alejandro Magno fue alumno de…", o: ["Aristóteles", "Sócrates", "Homero"], a: 0, e: "En Macedonia." },
    { q: "Según la leyenda, Roma se fundó en…", o: ["753 a. C.", "509 a. C.", "27 a. C."], a: 0, e: "Por Rómulo." },
    { q: "El primer emperador fue…", o: ["Augusto", "Julio César", "Trajano"], a: 0, e: "Desde el 27 a. C." },
    { q: "Trajano nació en…", o: ["Hispania", "Grecia", "Egipto"], a: 0, e: "En Itálica (Sevilla)." },
    { q: "El Imperio romano de Occidente cayó en…", o: ["476", "1453", "1492"], a: 0, e: "Inicio de la Edad Media." },
  ],
  examen: [
    { q: "La época de esplendor de Atenas con Pericles es la…", o: ["clásica", "arcaica", "helenística"], a: 0, e: "Siglo V a. C." },
    { q: "La romanización es…", o: ["la adopción de la cultura romana", "la caída de Roma", "una guerra"], a: 0, e: "Lengua, leyes, ciudades…" },
    { q: "El griego koiné era…", o: ["la lengua común del Helenismo", "un dios", "una ciudad"], a: 0, e: "Se hablaba desde Egipto hasta Asia." },
  ],
  feynman: ["Por qué el Mediterráneo fue tan importante", "Qué eran las polis y por qué Grecia estaba dividida", "Las etapas de Grecia y de Roma", "Qué dejó Roma en Hispania"],
  mapa: mapa("MUNDO CLÁSICO", "var(--red)", [
    ["Espacio", "Mediterráneo · polis · colonias", "var(--water)"],
    ["Grecia", "arcaica · clásica · helenística", "var(--pen)"],
    ["Roma", "Monarquía · República · Imperio", "var(--red)"],
    ["Hispania", "romanización · ciudades", "var(--sun)"],
  ], 270),
  tarjetas: [
    ["Mare Nostrum", "Nombre romano del Mediterráneo: «nuestro mar»."],
    ["Polis", "Ciudad-Estado griega independiente."],
    ["Magna Grecia", "Colonias griegas del sur de Italia y Sicilia."],
    ["Emporion", "Colonia griega en Ampurias (Girona)."],
    ["Helenismo", "Difusión de la cultura griega tras Alejandro Magno."],
    ["Etapas de Roma", "Monarquía (753 a. C.), República (509 a. C.) e Imperio (27 a. C.-476)."],
    ["Romanización", "Adopción de la lengua, leyes y costumbres romanas."],
    ["Tríada mediterránea", "Trigo, vid y olivo."],
  ],
  familias: ["Buscad en un mapa ciudades españolas de origen romano o griego y su nombre antiguo.", "Si viajáis, visitad un yacimiento: Ampurias, Mérida, Tarragona, Itálica o Segóbriga.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cultura Clásica (optativa autonómica): marco geográfico e histórico de Grecia y Roma, colonización, Helenismo y romanización de Hispania.",
    ideas: ["Mapa mural del Mediterráneo con colonias y provincias.", "Línea del tiempo gigante en el pasillo.", "Ruta virtual por los yacimientos romanos de España."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo Nacional de Arte Romano (Mérida)", url: "https://www.culturaydeporte.gob.es/mnromano/inicio.html" },
  ],
  revisado: "2026-11-12",
};
