// Cultura Clásica 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, filas, dos, rueda, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "3-eso",
  titulo: "Roma en Hispania",
  minutos: 35,
  objetivos: ["Explicar cómo y por qué Roma conquistó la península ibérica", "Definir la romanización y sus principales elementos", "Reconocer los grandes restos romanos de España"],
  claves: ["Hispania", "guerras púnicas", "Numancia", "romanización", "provincia", "calzada", "Itálica", "Emerita Augusta"],
  pregunta: {
    texto: "Si viajas por España encontrarás un acueducto en Segovia, un teatro en Mérida, una muralla en Lugo y un faro en A Coruña que todavía funciona. ¿Quién los construyó hace casi 2.000 años?",
    respuesta: "Los <mark>romanos</mark>, que dominaron la península durante unos seis siglos y la llamaron <b>Hispania</b>. Nos dejaron no solo monumentos, sino también la lengua, las leyes, las ciudades, las calzadas y el cultivo de la vid y el olivo: es la <b>romanización</b>.",
  },
  bloques: [
    {
      html: `<h3>La península antes de Roma</h3><p>Antes de los romanos, la península estaba habitada por pueblos muy distintos. En el este y el sur vivían los <b>íberos</b>, organizados en ciudades, que conocían la escritura y la moneda y crearon obras como la <i>Dama de Elche</i>. En el centro, el oeste y el norte vivían los <b>celtas</b> y los <b>celtíberos</b>, en poblados fortificados llamados <mark>castros</mark>. En el sur floreció <b>Tartessos</b>. En la costa había colonias de <b>fenicios</b> (Gadir, hoy Cádiz), <b>griegos</b> (Emporion) y <b>cartagineses</b> (Qart Hadasht, hoy Cartagena).</p>`,
      svg: filas("Pueblos y colonizadores de la península", [["Íberos", "este y sur, ciudades", "var(--red)"], ["Celtas", "centro y norte, castros", "var(--leaf)"], ["Fenicios", "Gadir (Cádiz)", "var(--pen)"], ["Griegos", "Emporion (Ampurias)", "var(--inf)"], ["Cartago", "Qart Hadasht", "var(--muted)"]]),
    },
    {
      html: `<h3>La conquista: un proceso de dos siglos</h3><p>Los romanos llegaron en el <mark>218 a. C.</mark>, durante la <b>segunda guerra púnica</b>, para atacar a los cartagineses de Aníbal, que tenían su base en la península. Tras vencerlos, decidieron quedarse. La conquista del interior fue lenta y dura: lusitanos y celtíberos resistieron durante décadas. El caudillo lusitano <b>Viriato</b> derrotó varias veces a los romanos, y la ciudad celtíbera de <b>Numancia</b> (Soria) resistió un largo asedio y prefirió destruirse antes que rendirse (133 a. C.). La conquista terminó con las <b>guerras cántabras</b>, dirigidas por el propio <b>Augusto</b> (19 a. C.).</p>`,
      svg: linea("Etapas de la conquista de Hispania", [["218 a.C.", "llegan los|romanos"], ["139 a. C.", "muere|Viriato"], ["133 a. C.", "cae|Numancia"], ["19 a. C.", "fin guerras|cántabras"]], "var(--red)"),
    },
    {
      html: `<h3>La romanización</h3><p>La <mark>romanización</mark> es el proceso por el que los pueblos de Hispania adoptaron la lengua, las costumbres, las leyes, la religión y la forma de vida romanas. Fue más rápida en el sur y el este (la Bética y la costa mediterránea), que ya tenían ciudades, y más lenta en el norte. Sus principales vehículos fueron: el <b>latín</b>, que acabó sustituyendo a casi todas las lenguas anteriores; el <b>ejército</b>, cuyos veteranos recibían tierras; las <b>ciudades</b>; las <b>calzadas</b>; el <b>derecho romano</b>; y la concesión de la <b>ciudadanía</b>.</p>`,
      svg: rueda("Vehículos de la romanización: latín, ejército, ciudades, calzadas, derecho y religión", "ROMA", [["latín", "var(--red)"], ["ejército", "var(--muted)"], ["ciudades", "var(--pen)"], ["derecho", "var(--sun)"]], "var(--red)"),
    },
    {
      html: `<h3>Las ciudades y las provincias</h3><p>Roma dividió Hispania en <mark>provincias</mark> para gobernarla. Augusto creó tres: la <b>Bética</b> (capital Corduba, Córdoba), la <b>Lusitania</b> (capital Emerita Augusta, Mérida) y la <b>Tarraconense</b> (capital Tarraco, Tarragona). Las ciudades romanas tenían un plano regular, con dos calles principales que se cruzaban en ángulo recto: el <b>cardo</b> (norte–sur) y el <b>decumano</b> (este–oeste); en su cruce estaba el <b>foro</b>. Muchas ciudades actuales nacieron así: <i>Caesaraugusta</i> (Zaragoza), <i>Legio</i> (León), <i>Lucus Augusti</i> (Lugo) o <i>Barcino</i> (Barcelona).</p>`,
      svg: filas("Las tres provincias de Augusto y sus capitales", [["Bética", "Corduba (Córdoba)", "var(--sun)"], ["Lusitania", "Emerita (Mérida)", "var(--leaf)"], ["Tarraconense", "Tarraco (Tarragona)", "var(--pen)"]]),
    },
    {
      html: `<h3>La economía de Hispania</h3><p>Hispania era una de las provincias más ricas del Imperio. Sus <b>minas</b> daban oro (Las Médulas, en León, la mayor mina de oro romana), plata (Cartagena, Sierra Morena), cobre y plomo. La <b>agricultura</b> producía trigo, vino y, sobre todo, <mark>aceite de oliva</mark> de la Bética, que se exportaba a Roma en ánforas: el monte Testaccio de Roma es una colina artificial hecha con millones de ánforas rotas, muchas de ellas hispanas. También se exportaban <b>garum</b>, la salsa de pescado de las factorías de salazón de la costa, lana y caballos. Todo circulaba por las calzadas y por mar.</p>`,
      svg: filas("Productos que Hispania enviaba a Roma", [["Oro", "Las Médulas", "var(--sun)"], ["Plata", "Cartagena", "var(--muted)"], ["Aceite", "la Bética", "var(--leaf)"], ["Garum", "costa sur", "var(--inf)"]]),
    },
  ],
  figura: {
    titulo: "Hispania romana en un vistazo",
    svg: figCols("Esquema de la Hispania romana: conquista, provincias, romanización y legado", [["Conquista", ["218 a. C. llegada", "Viriato, Numancia", "guerras cántabras", "19 a. C. fin"], "var(--red)"], ["Provincias", ["Bética", "Lusitania", "Tarraconense", "y sus capitales"], "var(--pen)"], ["Romanización", ["latín y derecho", "ciudades, calzadas", "vid y olivo", "ciudadanía"], "var(--leaf)"], ["Legado", ["Segovia, Mérida", "Lugo, Tarragona", "Itálica", "torre de Hércules"], "var(--sun)"]]),
  },
  video: { id: "78Pm4Fhbw_k", titulo: "La conquista romana de la península ibérica (Hispania)", canal: "Forgotten Heroes", vistas: 244630, megusta: 0, busqueda: "romanización de hispania" },
  quiz: [
    { q: "¿En qué año llegaron los romanos a la península?", o: ["218 a. C.", "476 d. C.", "711 d. C."], a: 0, e: "En la segunda guerra púnica." },
    { q: "¿Qué ciudad celtíbera resistió el asedio romano?", o: ["Numancia", "Itálica", "Tarraco"], a: 0, e: "En Soria, 133 a. C." },
    { q: "¿Qué es la romanización?", o: ["La adopción de la cultura romana", "Una guerra", "Un tipo de calzada"], a: 0, e: "Lengua, leyes, costumbres…" },
    { q: "¿Cuál era la capital de la Lusitania?", o: ["Emerita Augusta", "Corduba", "Tarraco"], a: 0, e: "Hoy Mérida." },
    { q: "¿Qué eran Las Médulas?", o: ["Una mina de oro", "Un teatro", "Un puerto"], a: 0, e: "En León." },
  ],
  examen: [
    { q: "¿Qué caudillo lusitano se enfrentó a Roma?", o: ["Viriato", "Aníbal", "Espartaco"], a: 0, e: "Murió asesinado en el 139 a. C." },
    { q: "El cardo de una ciudad romana iba de…", o: ["norte a sur", "este a oeste", "puerta a puerta"], a: 0, e: "El decumano, de este a oeste." },
    { q: "¿Qué producto de la Bética llenó el monte Testaccio?", o: ["Aceite de oliva", "Oro", "Trigo"], a: 0, e: "En ánforas." },
  ],
  feynman: ["Qué pueblos vivían en la península antes de Roma", "Cómo se produjo la conquista romana", "Qué es la romanización y qué la hizo posible", "Qué ciudades y monumentos romanos hay en España"],
  mapa: mapa("ROMA EN HISPANIA", "var(--sun)", [
    ["Conquista", "218 – 19 a. C.", "var(--red)"],
    ["Provincias", "tres provincias", "var(--pen)"],
    ["Romanización", "latín · ciudades · derecho", "var(--leaf)"],
    ["Legado", "Segovia · Mérida · Lugo", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Hispania", "Nombre romano de la península ibérica."],
    ["Numancia", "Ciudad celtíbera que resistió a Roma hasta el 133 a. C."],
    ["Romanización", "Adopción de la lengua, leyes y costumbres romanas."],
    ["Cardo y decumano", "Calles principales de la ciudad romana, norte–sur y este–oeste."],
    ["Emerita Augusta", "Mérida, capital de la Lusitania."],
  ],
  familias: ["Buscad qué restos romanos hay cerca de vuestra localidad y planead una visita.", "Averiguad el nombre latino de vuestra ciudad o de la capital de vuestra provincia.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La conquista y romanización de Hispania, la organización provincial, la economía y el patrimonio arqueológico romano en España (Cultura Clásica, materia optativa que ofertan las comunidades autónomas en el marco del RD 217/2022).",
    ideas: ["Mapa de restos romanos de la comunidad autónoma con fichas por grupos.", "Trazar el plano de una ciudad romana con cardo, decumano y foro.", "Visita virtual al Museo Nacional de Arte Romano de Mérida."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo Nacional de Arte Romano (Mérida)", url: "https://www.culturaydeporte.gob.es/mnromano/home.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Localizar los principales monumentos romanos de España", "Conocer a los hispanos más destacados de Roma"],
  bloques: [
    { tras: "La conquista: un proceso de dos siglos", html: `<h3>Numancia y Viriato: la resistencia</h3><p>La resistencia de los pueblos peninsulares se convirtió en leyenda. <mark>Viriato</mark>, un pastor lusitano, organizó durante ocho años una guerra de guerrillas: atacaba por sorpresa y desaparecía en las montañas. Roma no pudo vencerlo en batalla y acabó sobornando a tres de sus hombres, que lo asesinaron mientras dormía (139 a. C.); cuando fueron a cobrar, el cónsul les respondió: «Roma no paga a traidores». <mark>Numancia</mark> resistió más de veinte años de guerras. Finalmente, el general Escipión Emiliano la rodeó con un muro de nueve kilómetros y la rindió por hambre en el 133 a. C. Muchos numantinos prefirieron morir antes que entregarse. Cervantes escribió una tragedia sobre ella, <i>El cerco de Numancia</i>.</p>` },
    { tras: "Las ciudades y las provincias", html: `<h3>Patrimonio romano en España</h3>${tabla(["Monumento", "Lugar", "Qué es"], [["Acueducto", "Segovia", "conducción de agua con unos 20.000 bloques de granito sin argamasa"], ["Teatro, anfiteatro y puente", "Mérida", "conjunto de Augusta Emerita"], ["Muralla", "Lugo", "única muralla romana que se conserva entera"], ["Torre de Hércules", "A Coruña", "el faro romano más antiguo en funcionamiento"], ["Puente", "Alcántara (Cáceres)", "puente de granito sobre el Tajo"], ["Ciudad", "Itálica (Sevilla)", "patria de Trajano y Adriano"], ["Anfiteatro y circo", "Tarragona", "conjunto de Tarraco"], ["Minas", "Las Médulas (León)", "paisaje transformado por la minería de oro"]])}<p>Varios de ellos son <b>Patrimonio de la Humanidad</b> de la UNESCO.</p>`, video: { id: "yylYEEnVAnI", titulo: "¿Cómo eran las ciudades romanas?", canal: "Daniel Geohistoria", vistas: 126911, megusta: 0 } },
    { tras: "La economía de Hispania", html: `<h3>Hispanos ilustres en Roma</h3><p>Hispania no solo dio riquezas a Roma, sino también personajes de primera fila. <mark>Trajano</mark>, nacido en Itálica, fue el primer emperador nacido fuera de Italia, y con él el Imperio alcanzó su mayor extensión; su sucesor, <b>Adriano</b>, también era de familia hispana. El filósofo <b>Séneca</b>, nacido en Córdoba, fue consejero del emperador Nerón y escribió sobre cómo vivir con serenidad. Su sobrino <b>Lucano</b> fue poeta. <b>Quintiliano</b>, de Calahorra, fue el gran maestro de oratoria de Roma, y <b>Marcial</b>, de Bílbilis (Calatayud), escribió epigramas llenos de humor. Más tarde, <b>Teodosio</b>, también hispano, fue el último emperador del Imperio unido.</p>` },
    { tras: "La romanización", html: `<h3>El fin de la Hispania romana</h3><p>Desde el siglo III, la crisis del Imperio también llegó a Hispania: hubo inseguridad, las ciudades se amurallaron y muchos ricos se trasladaron al campo, a grandes casas de campo llamadas <mark>villae</mark>, con mosaicos espléndidos (como la villa de La Olmeda, en Palencia). En el 409 entraron en la península pueblos germanos: <b>suevos</b>, <b>vándalos</b> y <b>alanos</b>. Después llegaron los <b>visigodos</b>, aliados de Roma, que tras la caída del Imperio de Occidente (476) crearon su propio reino con capital en Toledo. Pero mantuvieron gran parte de la herencia romana: el latín, el derecho y el cristianismo, que se había extendido por Hispania en los últimos siglos del Imperio.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica por qué el sur de Hispania se romanizó antes que el norte.", pasos: ["El sur y el este se conquistaron primero.", "Ya tenían ciudades, comercio y contacto con fenicios y griegos.", "El norte era montañoso, con pueblos en castros que resistieron hasta el 19 a. C."], resultado: "Por la conquista temprana, la existencia de ciudades y el contacto previo con pueblos mediterráneos." },
    { enunciado: "¿De qué nombre latino viene «Zaragoza»?", pasos: ["La ciudad se fundó como colonia en honor de César Augusto.", "Su nombre fue Caesaraugusta.", "Con la evolución (y el paso por el árabe Saraqusta) llegó a Zaragoza."], resultado: "De Caesaraugusta." },
    { enunciado: "Ordena: llegada de los romanos, caída de Numancia, guerras cántabras, entrada de suevos y vándalos.", pasos: ["218 a. C.: llegada.", "133 a. C.: Numancia.", "29–19 a. C.: guerras cántabras.", "409 d. C.: entrada de pueblos germanos."], resultado: "Llegada → Numancia → guerras cántabras → pueblos germanos." },
  ],
  errores: [
    "Pensar que Roma conquistó Hispania rápidamente: tardó unos dos siglos.",
    "Confundir íberos (este y sur) con celtas (centro y norte).",
    "Creer que la romanización fue igual en toda la península.",
    "Pensar que los romanos llegaron para conquistar la península: llegaron para luchar contra Cartago.",
    "Creer que con los visigodos desapareció todo lo romano: mantuvieron el latín y el derecho.",
  ],
  ejercicios: [
    { q: "¿Qué pueblos y colonizadores había en la península antes de Roma?", sol: "Íberos, celtas, celtíberos y Tartessos; colonias fenicias, griegas y cartaginesas." },
    { q: "¿Por qué llegaron los romanos a la península?", sol: "Para luchar contra Cartago durante la segunda guerra púnica (218 a. C.)." },
    { q: "¿Quién fue Viriato?", sol: "Un caudillo lusitano que hizo una guerra de guerrillas contra Roma hasta su asesinato en el 139 a. C." },
    { q: "Define romanización y cita tres de sus vehículos.", sol: "Adopción de la cultura romana. Vehículos: latín, ciudades, calzadas (también ejército, derecho, ciudadanía)." },
    { q: "Escribe las tres provincias de Augusto con sus capitales.", sol: "Bética (Corduba), Lusitania (Emerita Augusta) y Tarraconense (Tarraco)." },
    { q: "¿Qué eran el cardo y el decumano?", sol: "Las dos calles principales de una ciudad romana, norte–sur y este–oeste; en su cruce estaba el foro." },
    { q: "¿Qué productos exportaba Hispania?", sol: "Oro, plata, aceite de oliva, vino, trigo, garum, lana y caballos." },
    { q: "Nombra cuatro monumentos romanos de España y dónde están.", sol: "Acueducto (Segovia), teatro (Mérida), muralla (Lugo), torre de Hércules (A Coruña)." },
    { q: "Cita dos hispanos ilustres de Roma y por qué son conocidos.", sol: "Trajano, emperador nacido en Itálica; Séneca, filósofo cordobés." },
    { q: "¿Qué pueblos entraron en Hispania al final del Imperio?", sol: "Suevos, vándalos y alanos (409) y después los visigodos." },
  ],
  quiz: [
    { q: "El último emperador del Imperio unido fue el hispano…", o: ["Teodosio", "Trajano", "Adriano"], a: 0, e: "Murió en el 395." },
    { q: "Séneca nació en…", o: ["Córdoba", "Mérida", "Tarragona"], a: 0, e: "Filósofo y consejero de Nerón." },
    { q: "La única muralla romana completa está en…", o: ["Lugo", "Ávila", "Toledo"], a: 0, e: "Patrimonio de la Humanidad." },
    { q: "Una villa romana era…", o: ["una gran casa de campo", "un pueblo", "un templo"], a: 0, e: "Como La Olmeda." },
    { q: "«Roma no paga a traidores» se relaciona con…", o: ["Viriato", "Numancia", "Aníbal"], a: 0, e: "Sus asesinos fueron a cobrar." },
  ],
  tarjetas: [
    ["Viriato", "Caudillo lusitano que resistió a Roma con guerrillas."],
    ["Itálica", "Ciudad romana de Sevilla, patria de Trajano y Adriano."],
    ["Villa", "Gran casa de campo romana, a menudo con mosaicos."],
  ],
});
