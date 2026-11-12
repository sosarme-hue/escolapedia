// Cultura Clásica 1º ESO. Dibujos propios en SVG.
const { tema, H, tabla } = require("./_eso1d");
const V = require("./_eso1d-videos");

// Arcos de un acueducto (dibujo propio).
const acueducto = `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de un acueducto romano con dos pisos de arcos y el canal de agua arriba">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <rect x="14" y="30" width="232" height="10" fill="var(--pen)" opacity=".85"/>
  <rect x="14" y="40" width="232" height="8" fill="var(--muted)"/>
  ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${14 + i * 29} 48 h29 v26 a14.5 14.5 0 0 0 -29 0 z" fill="var(--muted)" opacity=".75"/>`).join("")}
  <rect x="14" y="74" width="232" height="6" fill="var(--muted)"/>
  ${[0, 1, 2, 3].map((i) => `<path d="M${14 + i * 58} 80 h58 v70 a29 29 0 0 0 -58 0 z" fill="var(--muted)" opacity=".75"/>`).join("")}
  <rect x="8" y="150" width="244" height="6" fill="var(--line)"/>
  <g font-family="system-ui,sans-serif" font-size="11" fill="var(--ink)" font-weight="700">
    <text x="130" y="22" text-anchor="middle">canal con agua (specus)</text>
    <text x="130" y="172" text-anchor="middle">pilares y arcos de piedra sin argamasa</text>
  </g>
</svg>`;

module.exports = tema({
  materia: "Cultura Clásica",
  titulo: "Restos romanos en España",
  objetivos: ["Explicar cómo Hispania pasó a formar parte de Roma", "Identificar los tipos de restos romanos que se conservan", "Localizar los principales yacimientos y monumentos romanos de España", "Valorar la importancia de conservar el patrimonio"],
  claves: ["Hispania", "romanización", "provincia", "Emerita Augusta", "Tarraco", "Itálica", "acueducto", "calzada", "puente", "teatro", "muralla", "villa", "mosaico", "patrimonio de la humanidad"],
  pregunta: [
    "Por Segovia pasa un acueducto de casi dos mil años que se sostiene sin cemento, y en Mérida cada verano se representan obras en un teatro del siglo I a. C. ¿Cómo es posible que aún sigan en pie?",
    "Porque los romanos fueron unos <mark>ingenieros</mark> extraordinarios. El acueducto de Segovia se mantiene por el peso perfectamente equilibrado de sus bloques de granito, encajados unos con otros. Además, muchos edificios se siguieron usando durante siglos, y hoy se protegen como <b>patrimonio</b>. España es uno de los países con más restos romanos fuera de Italia.",
  ],
  bloques: [
    ["Hispania, parte de Roma", `<p>Los romanos llegaron a la península ibérica en el año <b>218 a. C.</b>, durante la segunda guerra púnica contra Cartago. La conquista fue lenta y duró unos <mark>doscientos años</mark>: algunos pueblos resistieron con fuerza, como los celtíberos de <b>Numancia</b> o los cántabros y astures del norte. Terminó en el 19 a. C., en tiempos de Augusto.</p><p>Los romanos llamaron a la península <b>Hispania</b> y la dividieron en <b>provincias</b>; con Augusto fueron tres: la <b>Tarraconense</b> (capital, Tarraco), la <b>Bética</b> (capital, Corduba) y la <b>Lusitania</b> (capital, Emerita Augusta). Hispania se convirtió en una de las provincias más ricas del imperio, gracias a sus minas, su aceite, su vino y su trigo.</p>`,
      H.linea("Hispania romana", [["218 a. C.", "llegan los|romanos"], ["133 a. C.", "cae|Numancia"], ["19 a. C.", "fin de la|conquista"], ["s. V d. C.", "llegan los|germanos"]], "var(--red)")],
    ["La romanización y sus huellas", `<p>La <mark>romanización</mark> fue el proceso por el que los pueblos de Hispania adoptaron la forma de vida romana: la lengua latina, el derecho, la religión, la moneda, la forma de vestir y, sobre todo, la vida en <b>ciudades</b>. Los romanos fundaron muchas ciudades nuevas y transformaron las existentes, y las unieron con una red de calzadas.</p><p>Hispania dio a Roma personajes muy importantes: los emperadores <b>Trajano</b> y <b>Adriano</b>, nacidos en Itálica (junto a Sevilla), y <b>Teodosio</b>; el filósofo <b>Séneca</b>, de Córdoba; y escritores como el poeta <b>Marcial</b> o el maestro de oratoria <b>Quintiliano</b>. Las huellas de la romanización están en los monumentos, pero también en nuestra lengua, en nuestras leyes y en muchos nombres de ciudades.</p>`,
      H.filas("Hispanos famosos", [["Trajano", "emperador, de Itálica", "var(--red)"], ["Adriano", "emperador, de Itálica", "var(--sun)"], ["Séneca", "filósofo, de Córdoba", "var(--pen)"], ["Marcial", "poeta, de Bílbilis", "var(--leaf)"]])],
    ["Obras públicas: calzadas y puentes", `<p>Los romanos construyeron una red de <mark>calzadas</mark>, caminos empedrados de varias capas que unían las ciudades y permitían mover ejércitos, mercancías y correos. La más larga de Hispania era la <b>Vía Augusta</b>, que iba desde los Pirineos hasta Cádiz siguiendo la costa mediterránea. La <b>Vía de la Plata</b> unía Mérida con Astorga. Cada milla (unos 1480 metros) se colocaba un <b>miliario</b>, una columna que indicaba la distancia.</p><p>Para cruzar los ríos levantaron <b>puentes</b> de piedra, muchos de los cuales siguen en uso. El más impresionante es el <b>puente de Alcántara</b> (Cáceres), sobre el río Tajo, de unos 50 metros de altura. También destacan el puente romano de <b>Mérida</b>, sobre el Guadiana, y el de <b>Córdoba</b>, sobre el Guadalquivir.</p>`,
      H.filas("Obras públicas en Hispania", [["Vía Augusta", "Pirineos a Cádiz", "var(--red)"], ["Vía Plata", "Mérida a Astorga", "var(--sun)"], ["Alcántara", "puente sobre el Tajo", "var(--pen)"], ["Miliarios", "marcan las millas", "var(--muted)"]])],
    ["Acueductos, presas y faros", `<p>Para llevar agua a las ciudades se construían <mark>acueductos</mark>: canales con una ligera pendiente que transportaban el agua desde manantiales o presas, a veces a decenas de kilómetros. Casi siempre iban por el suelo o enterrados; solo cuando había que salvar un valle se elevaban sobre arcos.</p><p>El más famoso es el <b>acueducto de Segovia</b>, de finales del siglo I, con más de 160 arcos y casi 29 metros de altura en su punto más alto, construido con bloques de granito sin argamasa. Otros ejemplos son el de <b>Los Milagros</b> en Mérida, el de <b>Las Ferreras</b> en Tarragona, y presas como las de Proserpina y Cornalbo, que aún almacenan agua. En A Coruña sigue funcionando un faro romano, la <b>Torre de Hércules</b>.</p>`,
      acueducto, V.cc7b],
    ["Mérida, una pequeña Roma", `<p><mark>Emerita Augusta</mark>, la actual Mérida, fue fundada en el año 25 a. C. por orden de Augusto para que vivieran en ella los soldados veteranos (los «eméritos», ya retirados) de las guerras contra cántabros y astures. Llegó a ser capital de la Lusitania y una de las ciudades más importantes de Hispania.</p><p>Su conjunto arqueológico es Patrimonio de la Humanidad y uno de los más completos del mundo: conserva el <b>teatro</b> y el <b>anfiteatro</b>, el <b>circo</b>, el templo llamado «de Diana», el puente sobre el Guadiana, el acueducto de Los Milagros, casas con mosaicos y el <b>Museo Nacional de Arte Romano</b>, con esculturas, mosaicos y objetos de la vida diaria.</p>`,
      H.rueda("Emerita Augusta", "MÉRIDA", [["teatro", "var(--red)"], ["anfiteatro", "var(--sun)"], ["puente", "var(--pen)"], ["acueducto", "var(--leaf)"]], "var(--bac)")],
    ["Tarraco, Itálica y otras ciudades", `<p><mark>Tarraco</mark> (Tarragona) fue capital de la provincia más grande, la Tarraconense. Conserva murallas, un <b>anfiteatro</b> junto al mar, restos del circo y del foro provincial, y en las afueras el acueducto de Les Ferreres y un gran arco, el de Berà. <b>Itálica</b> (Santiponce, Sevilla), cuna de Trajano y Adriano, tiene uno de los mayores anfiteatros del imperio y calles con casas y mosaicos.</p><p>Hay muchos más lugares: las murallas de <b>Lugo</b>, completas y transitables (Patrimonio de la Humanidad); la ciudad de <b>Baelo Claudia</b>, junto a la playa de Bolonia (Cádiz), con sus fábricas de salazón de pescado; el teatro de <b>Cartagena</b>; <b>Clunia</b> (Burgos) o <b>Segóbriga</b> (Cuenca).</p>`,
      tabla(["Lugar", "Qué ver"], [["Tarragona", "anfiteatro, murallas, circo"], ["Itálica (Sevilla)", "anfiteatro, mosaicos"], ["Lugo", "murallas completas"], ["Baelo Claudia (Cádiz)", "foro, fábricas de salazón"], ["Cartagena", "teatro"], ["Segovia", "acueducto"]])],
    ["Villas y mosaicos", `<p>En el campo, los romanos ricos tenían <mark>villas</mark>: grandes explotaciones agrícolas con una lujosa casa para el dueño (la parte urbana) y edificios para los trabajadores, almacenes, molinos y bodegas (la parte rústica). Desde el siglo III, muchos ricos prefirieron vivir en sus villas en lugar de en las ciudades.</p><p>Los suelos de estas casas se decoraban con <b>mosaicos</b>, imágenes formadas por miles de pequeñas piezas de piedra o vidrio llamadas <b>teselas</b>. Representaban mitos, escenas de caza, el mar, las estaciones o retratos. En España se conservan villas magníficas, como <b>La Olmeda</b> (Palencia), <b>Carranque</b> (Toledo) o <b>Almenara-Puras</b> (Valladolid), y muchos museos exhiben mosaicos.</p>`,
      H.dos("Partes de una villa romana", ["Parte urbana", ["casa del dueño", "mosaicos", "termas", "jardín"], "var(--sun)"], ["Parte rústica", ["trabajadores", "almacenes", "molinos", "bodegas"], "var(--leaf)"])],
    ["Conservar el patrimonio", `<p>Los restos romanos forman parte de nuestro <mark>patrimonio histórico</mark>: son una herencia de todos que nos ayuda a conocer el pasado. Muchos han llegado hasta hoy porque se siguieron usando (puentes, murallas), pero otros se perdieron porque sus piedras se reutilizaron para nuevas construcciones o por el abandono.</p><p>Hoy los protegen las leyes. Los <b>arqueólogos</b> excavan con método, documentan cada hallazgo y lo llevan a museos. Algunos conjuntos, como Mérida, Tarragona, Lugo, el acueducto de Segovia o la Torre de Hércules, son <b>Patrimonio de la Humanidad</b> de la UNESCO. Todos podemos ayudar: respetar los monumentos, no llevarse piezas de un yacimiento y avisar a las autoridades si se encuentra algo antiguo.</p>`,
      H.flujo("Del hallazgo al museo", ["hallazgo", "excavación|con método", "estudio|y registro", "museo y|protección"], "var(--leaf)")],
  ],
  ejemplos: [
    ["¿Por qué se fundó Emerita Augusta y de dónde viene su nombre?", ["Augusto la fundó en el 25 a. C.", "Era para los soldados veteranos, los «eméritos»."], "Para asentar a soldados retirados; «Emerita» por ellos y «Augusta» por el emperador."],
    ["Un acueducto pasa sobre arcos solo en un tramo. ¿Por qué no en todo su recorrido?", ["El agua debe bajar con una pendiente suave y constante.", "Solo se elevaba para salvar un valle o una hondonada."], "Porque casi siempre iba por el suelo o enterrado; los arcos solo salvaban desniveles."],
    ["Relaciona: Lugo, Alcántara, A Coruña, Segovia.", ["Lugo: murallas.", "Alcántara: puente.", "A Coruña: faro.", "Segovia: acueducto."], "Murallas, puente, faro (Torre de Hércules) y acueducto."],
  ],
  errores: [
    "Creer que la conquista de Hispania fue rápida: duró unos 200 años.",
    "Pensar que los acueductos siempre iban sobre arcos: casi siempre iban por el suelo.",
    "Confundir la Vía Augusta (costa mediterránea) con la Vía de la Plata (Mérida-Astorga).",
    "Pensar que el acueducto de Segovia lleva cemento: sus bloques están encajados sin argamasa.",
    "Creer que se puede llevar una pieza de un yacimiento como recuerdo: está prohibido y daña el patrimonio.",
  ],
  ejercicios: [
    ["¿Cuándo llegaron los romanos a Hispania y por qué?", "En el 218 a. C., durante la segunda guerra púnica contra Cartago."],
    ["Nombra las tres provincias de Hispania en tiempos de Augusto y sus capitales.", "Tarraconense (Tarraco), Bética (Corduba) y Lusitania (Emerita Augusta)."],
    ["¿Qué emperadores nacieron en Itálica?", "Trajano y Adriano."],
    ["¿Qué era un miliario?", "Una columna que marcaba las millas en las calzadas."],
    ["¿Dónde está el puente de Alcántara y sobre qué río?", "En Cáceres, sobre el río Tajo."],
    ["¿Qué tiene de especial el acueducto de Segovia?", "Más de 160 arcos y casi 29 m de altura, con bloques de granito sin argamasa."],
    ["Nombra cuatro monumentos romanos de Mérida.", "Teatro, anfiteatro, circo, puente, acueducto de Los Milagros, templo de Diana."],
    ["¿Qué ciudad conserva sus murallas romanas completas?", "Lugo."],
    ["¿Qué son las teselas?", "Las pequeñas piezas de piedra o vidrio que forman un mosaico."],
    ["¿Qué podemos hacer para proteger el patrimonio?", "Respetar los monumentos, no llevarse piezas y avisar si se encuentra algo antiguo."],
  ],
  figura: ["El legado romano en España", H.figCols("Restos romanos en España", [["Obras públicas", ["calzadas", "puente de Alcántara", "acueducto de Segovia", "Torre de Hércules"], "var(--pen)"], ["Espectáculos", ["teatro de Mérida", "anfiteatro de Tarraco", "Itálica", "Cartagena"], "var(--red)"], ["Ciudades", ["Emerita Augusta", "Tarraco", "murallas de Lugo", "Baelo Claudia"], "var(--sun)"], ["Campo", ["villas", "La Olmeda", "mosaicos", "teselas"], "var(--leaf)"]])],
  video: V.cc7v,
  quiz: [
    ["Los romanos llegaron a Hispania en…", ["218 a. C.", "476 d. C.", "753 a. C."], "Segunda guerra púnica."],
    ["La capital de la Lusitania era…", ["Emerita Augusta", "Tarraco", "Corduba"], "Mérida."],
    ["Trajano y Adriano nacieron en…", ["Itálica", "Roma", "Segovia"], "Junto a Sevilla."],
    ["La Vía Augusta iba…", ["por la costa mediterránea", "de Mérida a Astorga", "por el Cantábrico"], "Pirineos-Cádiz."],
    ["El puente de Alcántara cruza el…", ["Tajo", "Ebro", "Guadalquivir"], "Cáceres."],
    ["El acueducto de Segovia está hecho de…", ["granito sin argamasa", "ladrillo y cemento", "mármol"], "Bloques encajados."],
    ["La Torre de Hércules es…", ["un faro", "un templo", "una muralla"], "A Coruña."],
    ["Las murallas completas están en…", ["Lugo", "Madrid", "Valencia"], "Patrimonio de la Humanidad."],
    ["Una villa romana era…", ["una explotación agrícola con casa", "una ciudad pequeña", "un templo"], "Campo."],
    ["Las piezas de un mosaico se llaman…", ["teselas", "miliarios", "sillares"], "Piedra o vidrio."],
  ],
  examen: [
    ["Numancia es famosa por…", ["su resistencia a Roma", "su acueducto", "ser capital de la Bética"], "Celtíberos."],
    ["Mérida se fundó para…", ["soldados veteranos", "comerciantes griegos", "gladiadores"], "Eméritos."],
    ["Baelo Claudia es conocida por…", ["sus fábricas de salazón", "su faro", "su acueducto"], "Junto a Bolonia."],
  ],
  feynman: ["Cómo y cuándo Hispania pasó a ser romana", "Qué obras públicas dejaron los romanos", "Qué se puede ver en Mérida, Tarragona e Itálica", "Por qué hay que proteger el patrimonio"],
  mapa: ["HISPANIA ROMANA", "var(--red)", [["Conquista", "218-19 a. C. · provincias", "var(--red)"], ["Obras", "calzadas · puentes · acueductos", "var(--pen)"], ["Ciudades", "Mérida · Tarragona · Itálica", "var(--sun)"], ["Patrimonio", "villas · mosaicos · UNESCO", "var(--leaf)"]], 250],
  tarjetas: [
    ["Hispania", "Nombre romano de la península ibérica."],
    ["Romanización", "Adopción de la lengua y forma de vida romanas."],
    ["Calzada", "Camino empedrado romano; Vía Augusta."],
    ["Miliario", "Columna que marcaba las millas."],
    ["Acueducto de Segovia", "Más de 160 arcos sin argamasa."],
    ["Emerita Augusta", "Mérida: teatro, anfiteatro, puente."],
    ["Villa", "Explotación agrícola con casa señorial."],
    ["Tesela", "Pieza de un mosaico."],
  ],
  familias: ["Buscad el resto romano más cercano a vuestra casa y planead una visita.", "Mirad juntos la web de un museo romano y elegid el objeto más curioso."],
  saberes: "La romanización de Hispania y su pervivencia en el patrimonio arqueológico: obras públicas, ciudades, villas y mosaicos; conservación del patrimonio (Cultura Clásica, optativa de 1º ESO, según la normativa autonómica).",
  ideas: ["Mapa de España con los restos romanos de cada comunidad.", "Guía turística de un yacimiento cercano hecha por la clase.", "Mosaico colectivo con teselas de papel."],
  fuentes: [["Museo Nacional de Arte Romano (Mérida)", "https://www.culturaydeporte.gob.es/mnromano/"], ["UNESCO: Conjunto arqueológico de Mérida", "https://whc.unesco.org/es/list/664"]],
});
