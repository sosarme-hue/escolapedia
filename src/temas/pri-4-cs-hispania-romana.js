// Ciencias Sociales 4º de Primaria: la Edad Antigua y la Hispania romana. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, linea, vid, vgen, RD, PROF, suelo, tabla } = require("./_pri4b");

// Arco de medio punto de un acueducto.
const arcos = (x0, y0, n, w, h, c = COL.marron) => [...Array(n)].map((_, i) => { const x = x0 + i * w; return `<path d="M${x} ${y0} V${y0 - h + w / 2} A${w / 2 - 3} ${w / 2 - 3} 0 0 1 ${x + w - 6} ${y0 - h + w / 2} V${y0}" fill="none" stroke="${c}" stroke-width="5"/>`; }).join("");

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "La Edad Antigua: Hispania romana",
  minutos: 45,
  objetivos: ["Situar la Edad Antigua en el tiempo", "Conocer los pueblos prerromanos de la península y los pueblos colonizadores", "Explicar la conquista romana y la romanización de Hispania", "Describir la vida, la sociedad y las ciudades de Hispania", "Reconocer el legado romano que conservamos hoy"],
  claves: ["Edad Antigua", "íberos", "celtas", "celtíberos", "fenicios", "griegos", "cartagineses", "Hispania", "romanización", "latín", "calzada", "acueducto", "visigodos"],
  pregunta: {
    texto: "Cuando dices «agua», «puente» o «escuela», estás hablando casi como hace 2.000 años. ¿Por qué?",
    respuesta: "Porque el castellano viene del <mark>latín</mark>, la lengua de los <b>romanos</b>. Ellos conquistaron la península ibérica, a la que llamaron <mark>Hispania</mark>, y durante unos 600 años trajeron su lengua, sus leyes, sus costumbres y sus construcciones. Muchas palabras apenas han cambiado: <i>aqua</i>, <i>pons</i>, <i>schola</i>.",
  },
  bloques: [
    {
      html: `<h3>La Edad Antigua</h3><p>La <mark>Edad Antigua</mark> es la etapa de la historia que empieza con la <b>invención de la escritura</b>, hacia el año 3000 a. C., y termina con la <b>caída del Imperio romano de Occidente</b>, en el año <b>476</b> d. C.</p><p>En esta época aparecieron las primeras grandes civilizaciones en el mundo: Mesopotamia, Egipto, Grecia y Roma. Construyeron ciudades, templos, pirámides; tuvieron reyes, leyes y ejércitos; y desarrollaron la escritura, las matemáticas y la astronomía.</p><p>En la península ibérica, la escritura llegó más tarde, de la mano de los pueblos que vinieron del Mediterráneo, hacia el siglo VIII a. C. Por eso, en la península, la Edad Antigua tiene tres momentos:</p><p>• Los <b>pueblos prerromanos</b>: los que vivían aquí antes de que llegaran los romanos.<br>• Las <b>colonizaciones</b>: la llegada de fenicios, griegos y cartagineses.<br>• La <b>Hispania romana</b>: desde que llegaron los romanos, en el 218 a. C., hasta la llegada de los visigodos, en el siglo V.</p><p>Recuerda: en la línea del tiempo, la mayor parte de la Edad Antigua está «antes de Cristo». Los años van bajando hasta el año 1 y, después, empiezan a subir.</p>`,
      svg: svg("Línea del tiempo de la Edad Antigua en la península", `${tit("Edad Antigua")}${linea([["3000 a. C.", "escritura", COL.marron], ["s. VIII a. C.", "fenicios", COL.morado], ["218 a. C.", "llegan los romanos", COL.rojo], ["476", "cae Roma", COL.gris]], { y: 96 })}`),
    },
    {
      html: `<h3>Los pueblos prerromanos</h3><p>Antes de la llegada de los romanos, en la península vivían muchos pueblos distintos. Los más importantes eran:</p><p>• Los <mark>íberos</mark>, en el sur y en la costa mediterránea. Vivían en poblados amurallados en lo alto de colinas. Eran agricultores, ganaderos, artesanos y comerciantes. Tenían su propia escritura y acuñaban monedas. Eran grandes escultores: la <b>Dama de Elche</b> y la <b>Dama de Baza</b> son esculturas íberas famosas.</p><p>• Los <mark>celtas</mark>, en el norte y el oeste. Llegaron desde el centro de Europa. Vivían en <b>castros</b>: poblados con casas circulares de piedra y techos de paja, rodeados de murallas, como los que aún se conservan en Galicia y Asturias. Eran ganaderos y muy buenos trabajando el hierro.</p><p>• Los <mark>celtíberos</mark>, en el centro de la península, una mezcla de íberos y celtas. Su ciudad más famosa fue <b>Numancia</b>, cerca de Soria.</p><p>En el sur, junto al río Guadalquivir, existió además un reino rico y legendario: <b>Tartessos</b>. Se hizo famoso por su riqueza en plata, cobre y oro, y comerciaba con los pueblos del Mediterráneo. Su tesoro de El Carambolo, en Sevilla, es de oro puro.</p>`,
      svg: svg("Pueblos prerromanos en el mapa: íberos, celtas, celtíberos y Tartessos", `${tit("Pueblos prerromanos")}<path d="M38 52 L72 40 L120 44 L168 50 L204 56 L222 70 L206 92 L196 118 L176 140 L146 156 L110 162 L84 150 L60 156 L40 140 L46 116 L34 96 L30 72z" fill="${COL.verde}" fill-opacity=".12" stroke="${COL.verde}" stroke-width="2"/><path d="M30 72 L38 52 L72 40 L120 44 L130 70 L80 90 L46 116 L34 96z" fill="${COL.azul}" fill-opacity=".25"/><path d="M168 50 L204 56 L222 70 L206 92 L196 118 L176 140 L146 156 L150 120 L176 80z" fill="${COL.rojo}" fill-opacity=".22"/><path d="M80 90 L130 70 L168 50 L176 80 L150 120 L100 120z" fill="${COL.morado}" fill-opacity=".2"/><path d="M60 156 L84 150 L110 162 L100 130 L70 136z" fill="${COL.sol}" fill-opacity=".45"/>${et(74, 66, "celtas", 50, { size: 10.5, color: COL.azul })}${et(128, 98, "celtíberos", 60, { size: 10, color: COL.morado })}${et(188, 100, "íberos", 40, { size: 10, color: COL.rojo })}${et(86, 146, "Tartessos", 50, { size: 9, color: COL.marron })}`),
    },
    {
      html: `<h3>Los pueblos colonizadores</h3><p>A partir del siglo VIII a. C., llegaron por mar a las costas de la península pueblos del Mediterráneo oriental. Venían atraídos por la <b>riqueza en metales</b> de la península. Se llaman <mark>pueblos colonizadores</mark> porque fundaron <b>colonias</b>: ciudades y puertos para comerciar.</p><p>• Los <mark>fenicios</mark> venían de la costa del actual Líbano. Eran grandes navegantes y comerciantes. Fundaron <b>Gadir</b> (Cádiz), una de las ciudades más antiguas de Europa occidental, y también Malaca (Málaga). Nos trajeron el <b>alfabeto</b>, el uso de la moneda, el torno de alfarero y la técnica de salar el pescado.</p><p>• Los <mark>griegos</mark> fundaron colonias en la costa mediterránea, como <b>Emporion</b> (Ampurias, en Girona) y Rhode (Roses). Introdujeron el cultivo del <b>olivo</b> y de la <b>vid</b>, el uso de la moneda y su arte.</p><p>• Los <mark>cartagineses</mark> venían de Cartago, una ciudad del norte de África fundada por los fenicios. Fundaron <b>Qart Hadasht</b>, la actual <b>Cartagena</b>, y la isla de Ebusus (Ibiza). Querían controlar las minas y el comercio, y por eso se enfrentaron con Roma.</p><p>Los pueblos de la península aprendieron mucho de ellos: la escritura, la moneda y nuevas formas de cultivar y fabricar objetos.</p>`,
      svg: svg("Qué trajo cada pueblo colonizador", `${tit("Colonizadores")}${fichas([["Fenicios", "Cádiz · alfabeto · salazón", COL.morado], ["Griegos", "Ampurias · olivo · vid", COL.azul], ["Cartagineses", "Cartagena · Ibiza", COL.naranja]], 1, 34, 42)}`),
    },
    {
      html: `<h3>La conquista romana</h3><p><b>Roma</b> era una ciudad de Italia que fue creciendo hasta formar un enorme imperio alrededor del mar Mediterráneo, al que llamaban «nuestro mar».</p><p>Los romanos llegaron a la península en el año <b>218 a. C.</b>, durante una guerra contra los cartagineses: las <b>guerras púnicas</b>. Los cartagineses tenían un famoso general, <b>Aníbal</b>, que salió de Cartagena y cruzó los Pirineos y los Alpes con elefantes para atacar Roma. Los romanos, para cortarle el paso, desembarcaron en Ampurias.</p><p>Después de vencer a Cartago, los romanos decidieron <b>conquistar toda la península</b>. Les costó casi <b>200 años</b>, porque los pueblos que vivían aquí se resistieron con fuerza:</p><p>• El pastor lusitano <b>Viriato</b> dirigió la resistencia en el oeste durante años.<br>• Los habitantes de <b>Numancia</b> resistieron un largo asedio, en el 133 a. C., y prefirieron morir antes que rendirse.<br>• Los últimos en ser conquistados fueron los <b>cántabros</b> y los <b>astures</b>, en el norte, en el año 19 a. C., en tiempos del emperador Augusto.</p><p>Los romanos llamaron a este territorio <mark>Hispania</mark> y lo dividieron en <b>provincias</b> para gobernarlo mejor, como la Bética, la Lusitania y la Tarraconense.</p>`,
      svg: svg("Etapas de la conquista romana de Hispania", `${tit("La conquista")}${columna([["218 a. C.: desembarcan en Ampurias", COL.rojo], ["133 a. C.: cae Numancia", COL.naranja], ["19 a. C.: conquistan el norte", COL.morado]], 130, 220, 36, 26, 14)}${tx(130, 164, "casi 200 años de conquista", 200, { weight: 700 })}`),
      video: vid("ufEclRGXV6k"),
    },
    {
      html: `<h3>La romanización</h3><p>La <mark>romanización</mark> es el proceso por el que los pueblos de Hispania fueron adoptando poco a poco la forma de vida de los romanos. Fue tan profunda que Hispania se convirtió en una de las partes más importantes del Imperio.</p><p>Los romanos trajeron:</p><p>• El <mark>latín</mark>, su lengua. De él vienen el castellano, el catalán, el gallego y el portugués. El euskera es la única lengua de la península que no viene del latín.<br>• El <b>derecho romano</b>: leyes escritas que se aplicaban a todos.<br>• Su <b>religión</b>: al principio adoraban a muchos dioses, como Júpiter, Juno, Marte o Venus. Más tarde llegó el <b>cristianismo</b>, que se extendió por todo el Imperio.<br>• Nuevas <b>técnicas</b> de construcción y de agricultura, como el regadío y el arado de hierro.<br>• La <b>moneda</b> romana, que servía en todo el Imperio.<br>• Una red de <b>calzadas</b> que comunicaba las ciudades.</p><p>Hispania aportó al Imperio aceite, vino, trigo, salazones de pescado y metales como plata, oro y hierro. Y también personas importantes: los emperadores <b>Trajano</b> y <b>Adriano</b> nacieron en Itálica, cerca de Sevilla, y el filósofo <b>Séneca</b>, en Córdoba.</p>`,
      svg: svg("Lo que trajo la romanización", `${tit("Romanización")}${fichas([["Latín", "nuestras lenguas", COL.rojo], ["Leyes", "derecho romano", COL.azul], ["Calzadas", "caminos de piedra", COL.gris], ["Ciudades", "foro, termas, teatro", COL.naranja]], 2, 34)}`),
    },
    {
      html: `<h3>Las ciudades romanas</h3><p>Los romanos fundaron muchas <b>ciudades</b> en Hispania, o transformaron las que ya existían. Algunas son hoy ciudades importantes: <b>Tarraco</b> (Tarragona), <b>Emerita Augusta</b> (Mérida), <b>Caesaraugusta</b> (Zaragoza), <b>Corduba</b> (Córdoba), <b>Hispalis</b> (Sevilla) o <b>Legio</b> (León).</p><p>Las ciudades romanas se construían con un plano ordenado, con dos calles principales que se cruzaban en el centro. Tenían:</p><p>• El <mark>foro</mark>: la gran plaza central, donde estaban los templos, los edificios de gobierno y los mercados. Era el centro de la vida de la ciudad.<br>• Las <b>termas</b>: baños públicos con salas de agua fría, templada y caliente, donde la gente se aseaba, hacía ejercicio y charlaba.<br>• El <b>teatro</b>, con forma de media luna, para ver comedias y tragedias.<br>• El <b>anfiteatro</b>, de forma ovalada, donde luchaban los gladiadores.<br>• El <b>circo</b>, alargado, para las carreras de carros.<br>• Las <b>casas</b>: los ricos vivían en la domus, con patio y suelos de mosaico; los pobres, en pisos llamados ínsulas.</p><p>Además, las ciudades tenían murallas, alcantarillado y fuentes públicas.</p>`,
      svg: svg("Plano de una ciudad romana con el foro en el centro", `${tit("La ciudad romana")}<rect x="40" y="34" width="180" height="134" rx="4" fill="none" stroke="${COL.marron}" stroke-width="4"/><path d="M130 34 V168 M40 101 H220" stroke="${COL.gris}" stroke-width="6"/>${[[70, 64], [190, 64], [70, 138], [190, 138]].map(([x, y]) => `<rect x="${x - 20}" y="${y - 16}" width="40" height="32" fill="${COL.sol}" fill-opacity=".35"/>`).join("")}<rect x="108" y="84" width="44" height="34" fill="#fde2e2" stroke="${COL.rojo}" stroke-width="2"/>${et(130, 105, "foro", 36, { size: 11, color: "#991b1b" })}${et(70, 68, "termas", 40, { size: 9.5, weight: 400 })}${et(190, 68, "teatro", 40, { size: 9.5, weight: 400 })}${et(70, 142, "domus", 40, { size: 9.5, weight: 400 })}${et(190, 142, "mercado", 40, { size: 9.5, weight: 400 })}`),
    },
    {
      html: `<h3>La sociedad y la vida en Hispania</h3><p>La sociedad romana no era igual para todos. Había dos grandes grupos:</p><p>• Las personas <mark>libres</mark>. Dentro de ellas, unas tenían la <b>ciudadanía romana</b>, con todos los derechos: votar, ocupar cargos o ser juzgados con las leyes romanas. Entre los ciudadanos estaban los <b>patricios</b>, ricos y poderosos, dueños de grandes tierras, y los <b>plebeyos</b>, que eran la mayoría: campesinos, artesanos, comerciantes. Otros hombres libres no eran ciudadanos.<br>• Los <mark>esclavos</mark>, que no tenían ningún derecho. Eran propiedad de su amo, que podía venderlos. Muchos eran prisioneros de guerra. Trabajaban en las minas, en el campo y en las casas. Algunos conseguían la libertad y se convertían en libertos.</p><p>Las mujeres no podían votar ni tener cargos públicos, y se ocupaban sobre todo de la casa, aunque algunas tenían negocios.</p><p>Los niños de familias ricas iban a la escuela, donde aprendían a leer, a escribir en tablillas de cera y a calcular con ábaco. Jugaban con canicas, muñecas, peonzas y tabas.</p><p>La mayoría de la gente vivía en el campo. Los grandes propietarios tenían <b>villas</b>: enormes fincas con una casa lujosa, campos de cultivo y talleres.</p>`,
      svg: svg("Sociedad romana: patricios, plebeyos y esclavos", `${tit("Sociedad romana")}<path d="M130 36 L226 160 H34z" fill="none" stroke="var(--line)" stroke-width="2"/><path d="M106 68 H154 M74 110 H186" stroke="var(--line)" stroke-width="2"/>${et(130, 60, "patricios", 50, { size: 10, color: COL.morado })}${et(130, 96, "plebeyos", 80, { size: 10.5, color: COL.azul })}${et(130, 140, "esclavos", 120, { size: 11, color: COL.gris })}${tx(188, 76, "ciudadanos", 66, { anchor: "start" })}${fl(196, 80, 166, 92, "var(--muted)", 1.5)}`),
    },
    {
      html: `<h3>Las obras públicas romanas</h3><p>Los romanos fueron unos <b>ingenieros</b> extraordinarios. Construyeron grandes <mark>obras públicas</mark>, pensadas para que las usara toda la población. Muchas siguen en pie dos mil años después:</p><p>• Las <mark>calzadas</mark>: caminos empedrados que unían todas las ciudades del Imperio. Hispania tenía una red de miles de kilómetros. La más famosa es la <b>Vía Augusta</b>, que iba desde los Pirineos hasta Cádiz por la costa mediterránea. La <b>Vía de la Plata</b> unía Mérida con Astorga.</p><p>• Los <mark>acueductos</mark>: llevaban el agua desde los ríos o manantiales hasta las ciudades, con una pequeña pendiente para que el agua corriera sola. Cuando había que cruzar un valle, construían arcos. El <b>acueducto de Segovia</b> está hecho con bloques de granito colocados sin ningún tipo de cemento.</p><p>• Los <b>puentes</b>, como el de Alcántara (Cáceres), sobre el río Tajo, o el de Córdoba, sobre el Guadalquivir.</p><p>• Los <b>faros</b>, como la <b>Torre de Hércules</b> en A Coruña: es el único faro romano del mundo que todavía funciona.</p><p>• Las <b>presas</b>, como la de Proserpina, en Mérida.</p>`,
      svg: svg("Un acueducto romano con sus arcos lleva el agua a la ciudad", `${tit("El acueducto")}${suelo(150)}<rect x="20" y="58" width="220" height="10" fill="${COL.marron}" fill-opacity=".6"/><path d="M24 62 H236" stroke="var(--water)" stroke-width="3"/>${arcos(24, 150, 8, 27, 82)}${fl(200, 46, 236, 46, COL.azul, 2)}${et(160, 46, "canal del agua", 80, { size: 10, color: COL.azul })}${et(130, 168, "Segovia: sin cemento", 160, { size: 10 })}`),
      video: vid("nf5qP4BG9Zk"),
    },
    {
      html: `<h3>El final de Hispania romana y su legado</h3><p>A partir del siglo III, el Imperio romano entró en crisis: había problemas económicos, luchas por el poder y ataques de pueblos del norte de Europa, a los que los romanos llamaban <b>bárbaros</b>.</p><p>A comienzos del siglo V, varios de esos pueblos entraron en Hispania: suevos, vándalos y alanos. Más tarde llegaron los <mark>visigodos</mark>, que se hicieron con el control de casi toda la península. En el año <b>476</b> cayó el Imperio romano de Occidente: terminaba la Edad Antigua y empezaba la Edad Media.</p><p>Pero Roma nos dejó una gran <mark>herencia</mark> que seguimos usando:</p><p>• Nuestras <b>lenguas</b> derivadas del latín y muchas palabras de la ciencia.<br>• La base de nuestras <b>leyes</b>.<br>• El <b>cristianismo</b>.<br>• Los <b>números romanos</b>, que usamos en los siglos y en los nombres de los reyes.<br>• El <b>calendario</b>: los nombres de los meses son romanos; julio viene de Julio César y agosto, de Augusto.<br>• Muchas ciudades y carreteras siguen el trazado romano.<br>• Monumentos que podemos visitar: el teatro de Mérida, la muralla de Lugo, el acueducto de Segovia, la Torre de Hércules o las ruinas de Itálica.</p>`,
      svg: svg("Herencia romana que seguimos usando", `${tit("Herencia romana")}${filas([["Lengua", "castellano, del latín", COL.rojo], ["Leyes", "derecho romano", COL.azul], ["Números", "I, V, X, L, C, D, M", COL.morado], ["Calendario", "julio, agosto…", COL.naranja], ["Monumentos", "Mérida, Segovia", COL.marron]], 46, 26, { wa: 80, wb: 140 })}`),
    },
  ],
  figura: {
    titulo: "La Hispania romana en ocho ideas",
    svg: rejilla([
      ["Edad Antigua", "escritura → año 476", COL.marron],
      ["Prerromanos", "íberos, celtas", COL.azul],
      ["Colonizadores", "fenicios, griegos", COL.morado],
      ["Conquista", "desde el 218 a. C.", COL.rojo],
      ["Romanización", "latín, leyes", COL.naranja],
      ["Ciudades", "foro, termas, teatro", COL.sol],
      ["Obras", "calzadas, acueductos", COL.gris],
      ["Final", "visigodos, 476", COL.verde],
    ], 4, 86, "Resumen de la Hispania romana"),
  },
  video: vgen("Pvmh760AhAA", "Edad Antigua íberos celtas romanos para niños"),
  ejemplos: [
    { enunciado: "¿Cuántos años pasaron desde la llegada de los romanos (218 a. C.) hasta la conquista del norte (19 a. C.)?",
      pasos: ["Los dos años son antes de Cristo, así que se restan.", "218 − 19 = 199."],
      resultado: "Unos 199 años." },
    { enunciado: "Escribe el año 476 con números romanos.",
      pasos: ["400 = CD.", "70 = LXX.", "6 = VI."],
      resultado: "CDLXXVI." },
    { enunciado: "Una ciudad con plaza central, templos y edificios de gobierno. ¿Cómo se llama esa plaza?",
      pasos: ["El centro de la ciudad romana tenía templos, gobierno y mercado."],
      resultado: "El foro." },
  ],
  errores: [
    "Pensar que los romanos ya vivían en la península: llegaron en el 218 a. C. desde Italia.",
    "Confundir celtas (norte y oeste, castros) con íberos (sur y este, Dama de Elche).",
    "Creer que la conquista fue rápida: duró casi 200 años.",
    "Pensar que todas las personas libres eran ciudadanos romanos: no todas tenían ciudadanía.",
    "Decir que el euskera viene del latín: es la única lengua de la península anterior a los romanos.",
  ],
  ejercicios: [
    { q: "¿Cuándo empieza y cuándo termina la Edad Antigua?", sol: "Empieza con la escritura (hacia el 3000 a. C.) y termina en el 476, con la caída del Imperio romano de Occidente." },
    { q: "Escribe dos diferencias entre íberos y celtas.", sol: "Los íberos vivían en el sur y el este y tenían escritura; los celtas, en el norte y el oeste, en castros de casas circulares." },
    { q: "¿Qué ciudad fundaron los fenicios y qué nos trajeron?", sol: "Gadir (Cádiz); el alfabeto, la moneda y la salazón." },
    { q: "¿Por qué llegaron los romanos a la península?", sol: "Por la guerra contra los cartagineses (guerras púnicas)." },
    { q: "¿Quiénes fueron Viriato y los numantinos?", sol: "Pueblos y líderes que resistieron con fuerza a la conquista romana." },
    { q: "¿Qué es la romanización?", sol: "El proceso por el que los pueblos de Hispania adoptaron la forma de vida romana." },
    { q: "Nombra tres edificios de una ciudad romana y para qué servían.", sol: "Foro (centro y gobierno), termas (baños), teatro (obras), anfiteatro (gladiadores), circo (carreras)." },
    { q: "Explica para qué servía un acueducto.", sol: "Para llevar agua desde ríos o manantiales hasta las ciudades." },
    { q: "¿En qué grupos se dividía la sociedad romana?", sol: "Libres (ciudadanos patricios y plebeyos, y no ciudadanos) y esclavos." },
    { q: "Escribe cuatro cosas que heredamos de Roma.", sol: "Lengua, leyes, cristianismo, números romanos, calendario, monumentos (cuatro)." },
  ],
  quiz: [
    { q: "La Edad Antigua termina en el año…", o: ["476", "1492", "218 a. C."], a: 0, e: "476." },
    { q: "La Dama de Elche es una escultura…", o: ["íbera", "romana", "celta"], a: 0, e: "Íbera." },
    { q: "Los poblados celtas se llaman…", o: ["castros", "villas", "foros"], a: 0, e: "Castros." },
    { q: "Los fenicios fundaron…", o: ["Gadir (Cádiz)", "Ampurias", "Mérida"], a: 0, e: "Gadir." },
    { q: "Los griegos trajeron el cultivo del…", o: ["olivo", "maíz", "arroz"], a: 0, e: "Olivo y vid." },
    { q: "Los romanos llegaron en el…", o: ["218 a. C.", "476", "19 a. C."], a: 0, e: "218 a. C." },
    { q: "Los romanos llamaron a la península…", o: ["Hispania", "Iberia romana", "Al Ándalus"], a: 0, e: "Hispania." },
    { q: "La plaza central de una ciudad romana es el…", o: ["circo", "foro", "acueducto"], a: 1, e: "El foro." },
    { q: "El acueducto más famoso de España está en…", o: ["Segovia", "Lugo", "Cádiz"], a: 0, e: "Segovia." },
    { q: "El castellano viene del…", o: ["griego", "latín", "fenicio"], a: 1, e: "Latín." },
  ],
  examen: [
    { q: "Las luchas de gladiadores se hacían en el…", o: ["anfiteatro", "teatro", "foro"], a: 0, e: "Anfiteatro." },
    { q: "Trajano y Adriano nacieron en…", o: ["Itálica", "Roma", "Tarraco"], a: 0, e: "Itálica, cerca de Sevilla." },
    { q: "El faro romano que aún funciona es la…", o: ["Torre de Hércules", "Giralda", "Torre del Oro"], a: 0, e: "Torre de Hércules." },
    { q: "Tras los romanos dominaron la península los…", o: ["visigodos", "fenicios", "íberos"], a: 0, e: "Visigodos." },
  ],
  feynman: ["Qué pueblos vivían en la península y quiénes llegaron por mar antes de Roma", "Cómo conquistaron los romanos Hispania y qué fue la romanización", "Cómo eran las ciudades, la sociedad y las obras públicas romanas"],
  mapa: mapa("HISPANIA ROMANA", "var(--pri)", [
    ["Antes de Roma", "íberos · celtas · fenicios", COL.azul],
    ["Conquista", "218 a. C. · Numancia", COL.rojo],
    ["Romanización", "latín · leyes · ciudades", COL.naranja],
    ["Legado", "calzadas · acueductos", COL.marron],
  ], 250),
  tarjetas: [
    ["Íberos", "Pueblo del sur y el este peninsular; Dama de Elche."],
    ["Celtas", "Pueblo del norte y el oeste; vivían en castros."],
    ["Fenicios", "Navegantes que fundaron Gadir (Cádiz)."],
    ["Hispania", "Nombre romano de la península ibérica."],
    ["Romanización", "Adopción de la forma de vida romana."],
    ["Foro", "Plaza central de la ciudad romana."],
    ["Calzada", "Camino empedrado romano."],
    ["Acueducto", "Construcción que lleva el agua a la ciudad."],
  ],
  familias: ["Buscad palabras del castellano que vengan del latín (agua, padre, luna…).", "Visitad unas ruinas romanas o buscad las más cercanas a casa.", "Escribid las fechas de cumpleaños de la familia con números romanos.", "Mirad un mosaico romano y diseñad uno con papelitos de colores."],
  profesores: PROF("Ciencias Sociales: la Edad Antigua; pueblos prerromanos y colonizadores; la conquista romana y la romanización de Hispania; sociedad, ciudades y obras públicas; legado romano", ["Taller de mosaico con teselas de papel.", "Construcción de un arco o acueducto con piezas de cartón.", "Diccionario de palabras latinas en el castellano de hoy."]),
  fuentes: [RD, { t: "Museo Nacional de Arte Romano (Mérida)", url: "https://www.culturaydeporte.gob.es/mnromano/" }, wiki("Hispania", "Hispania"), wiki("Romanización de Hispania", "Romanización_de_Hispania")],
  revisado: REV,
};
