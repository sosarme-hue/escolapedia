// Ciencias Sociales 4º de Primaria: la población y los municipios. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, barras, vid, vgen, RD, PROF, casa, arbol, nino, suelo, tabla } = require("./_pri4b");

// Silueta de persona muy sencilla para los gráficos de población.
const persona = (x, y, c, s = 1) => `<circle cx="${x}" cy="${y - 16 * s}" r="${4.5 * s}" fill="${c}"/><path d="M${x - 6 * s} ${y} Q${x} ${y - 20 * s} ${x + 6 * s} ${y}z" fill="${c}"/>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "La población y los municipios",
  minutos: 45,
  objetivos: ["Saber qué es la población y cómo se cuenta", "Conocer conceptos como natalidad, mortalidad y migraciones", "Distinguir la población rural de la urbana", "Conocer qué es un municipio y cómo se organiza el ayuntamiento", "Valorar los servicios públicos y la participación ciudadana"],
  claves: ["población", "censo", "padrón", "natalidad", "mortalidad", "migración", "población rural", "población urbana", "municipio", "ayuntamiento", "alcalde", "concejales", "servicios públicos"],
  pregunta: {
    texto: "¿Por qué crees que en algunos pueblos pequeños de España cierran escuelas porque no hay niños, mientras que en algunas ciudades faltan colegios?",
    respuesta: "Porque la <mark>población</mark> no se reparte por igual. Durante muchos años, gran parte de la gente se ha ido de los pueblos a las <b>ciudades</b> buscando trabajo y servicios. Así, los pueblos pierden habitantes, sobre todo jóvenes, y las ciudades crecen. Este movimiento de personas se llama <b>migración</b>, y es uno de los temas que estudia la población.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la población?</h3><p>La <mark>población</mark> es el conjunto de <b>personas</b> que viven en un lugar: un pueblo, una ciudad, una provincia, un país o el mundo entero.</p><p>España tiene más de <b>48 millones</b> de habitantes. En el mundo vivimos más de 8.000 millones de personas.</p><p>Para saber cuántas personas viven en un lugar y cómo son, se hacen recuentos:</p><p>• El <mark>censo</mark> es un recuento de toda la población de un país que se hace cada diez años. Recoge datos como la edad, el sexo, el estado civil, los estudios, la profesión o el tipo de vivienda.<br>• El <mark>padrón municipal</mark> es la lista de todas las personas que viven en un municipio. Cada ayuntamiento lo tiene actualizado. Cuando una familia se muda, debe darse de alta en el padrón de su nuevo municipio.</p><p>En España, estos datos los recoge y estudia el <b>Instituto Nacional de Estadística (INE)</b>.</p><p>¿Para qué sirve saber todo esto? Para <b>planificar</b>: cuántos colegios, hospitales, autobuses o residencias de mayores hacen falta y dónde. Si en un barrio nacen muchos niños, habrá que construir una escuela; si hay muchos mayores, harán falta centros de salud y residencias.</p>`,
      svg: svg("El censo y el padrón cuentan a las personas", `${tit("Contar la población")}${[0, 1, 2, 3, 4, 5].map((i) => persona(30 + i * 22, 100, [COL.azul, COL.rojo, COL.verde, COL.naranja, COL.morado, COL.agua][i])).join("")}<rect x="166" y="46" width="76" height="96" rx="6" fill="var(--paper)" stroke="var(--line)" stroke-width="2"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M176 ${66 + i * 16} H232" stroke="var(--line)" stroke-width="2"/>`).join("")}${et(204, 58, "PADRÓN", 60, { size: 10 })}${fl(152, 80, 162, 80, "var(--muted)", 2)}${tx(86, 124, "habitantes", 110)}${tx(130, 162, "España: más de 48 millones", 220, { weight: 700 })}`),
    },
    {
      html: `<h3>La natalidad y la mortalidad</h3><p>La población de un lugar cambia constantemente: nacen personas, mueren personas y otras llegan o se van.</p><p>• La <mark>natalidad</mark> es el número de <b>nacimientos</b> que hay en un lugar durante un año.<br>• La <mark>mortalidad</mark> es el número de <b>fallecimientos</b> en un lugar durante un año.</p><p>Si comparamos las dos, sabemos si la población crece de forma natural:</p><p>• Si nacen más personas de las que mueren, la población <b>aumenta</b>.<br>• Si mueren más personas de las que nacen, la población <b>disminuye</b>.</p><p>Esta diferencia entre nacimientos y fallecimientos se llama <b>crecimiento natural</b>.</p><p>En España, en los últimos años, nacen menos niños que antes, porque las familias tienen pocos hijos y los tienen más tarde. A la vez, gracias a los avances de la medicina y a una mejor alimentación, la gente vive muchos más años: la <b>esperanza de vida</b> en España es de más de 83 años, una de las más altas del mundo.</p><p>Por eso decimos que la población española está <b>envejecida</b>: hay cada vez más personas mayores y menos niños y jóvenes.</p>`,
      svg: svg("Nacimientos menos fallecimientos da el crecimiento natural", `${tit("Crecimiento natural")}${cj(6, 50, 90, 40, "nacimientos", COL.verde)}${et(104, 77, "−", 16, { size: 20 })}${cj(112, 50, 66, 40, "muertes", COL.gris)}${et(186, 77, "=", 16, { size: 20 })}${cj(194, 50, 60, 40, "total", COL.azul)}${tx(130, 120, "más nacimientos → la población crece", 230, { color: "#15803d" })}${tx(130, 142, "más muertes → la población baja", 230, { color: COL.rojo })}`),
    },
    {
      html: `<h3>Las migraciones</h3><p>Las <mark>migraciones</mark> son los <b>movimientos de personas</b> que dejan el lugar donde viven para ir a vivir a otro, durante mucho tiempo o para siempre.</p><p>• La <b>emigración</b> es la salida de personas de un lugar. Los que se van se llaman <b>emigrantes</b>.<br>• La <b>inmigración</b> es la llegada de personas a un lugar. Los que llegan se llaman <b>inmigrantes</b>.</p><p>Una misma persona es emigrante para el lugar del que sale e inmigrante para el lugar al que llega.</p><p>Las migraciones pueden ser <b>interiores</b>, si las personas se mueven dentro del mismo país (por ejemplo, de un pueblo de Soria a Madrid), o <b>exteriores</b>, si van a otro país.</p><p>¿Por qué se mueve la gente? Sobre todo, para buscar un <b>trabajo</b> mejor, para <b>estudiar</b>, para reunirse con su <b>familia</b> o para escapar de guerras, catástrofes o la pobreza.</p><p>Hace unos sesenta años, muchos españoles emigraron a países como Alemania, Francia o Suiza. Hoy en España viven millones de personas que llegaron de otros países, como Marruecos, Rumanía, Colombia o Venezuela. Gracias a ellas la población ha seguido creciendo, y nuestros pueblos y ciudades son más diversos.</p>`,
      svg: svg("Una persona es emigrante al salir de un lugar e inmigrante al llegar a otro", `${tit("Migraciones")}<rect x="12" y="60" width="80" height="70" rx="8" fill="${COL.naranja}" fill-opacity=".15" stroke="${COL.naranja}" stroke-width="2"/><rect x="168" y="60" width="80" height="70" rx="8" fill="${COL.azul}" fill-opacity=".15" stroke="${COL.azul}" stroke-width="2"/>${persona(52, 110, COL.naranja)}${persona(208, 110, COL.azul)}${fl(96, 90, 164, 90, "var(--ink)", 3)}${et(52, 148, "emigrante", 80, { size: 10.5, color: COL.naranja })}${et(208, 148, "inmigrante", 80, { size: 10.5, color: COL.azul })}${tx(52, 52, "sale de aquí", 80)}${tx(208, 52, "llega aquí", 80)}`),
    },
    {
      html: `<h3>Población rural y población urbana</h3><p>Según el tipo de lugar donde vive, distinguimos dos tipos de población:</p><p>• La <mark>población rural</mark> vive en <b>pueblos</b> y aldeas, con pocos habitantes. Las casas suelen ser bajas y están rodeadas de campos, bosques o montes. Muchas personas trabajan en la agricultura, la ganadería o el turismo rural. La vida es más tranquila, hay menos ruido y contaminación, y todo el mundo se conoce. Pero a veces faltan servicios: hay que ir a otro pueblo para el médico, el instituto o el supermercado.</p><p>• La <mark>población urbana</mark> vive en <b>ciudades</b>, con muchos habitantes. Hay edificios altos, calles con mucho tráfico, fábricas, tiendas y oficinas. La mayoría trabaja en el comercio, los servicios o la industria. Hay muchos servicios cerca: hospitales, universidades, cines, museos, transporte público. Pero también más ruido, contaminación y atascos.</p><p>En España, unas <b>ocho de cada diez personas</b> viven en ciudades. Muchos pueblos del interior se están quedando casi vacíos: es lo que se llama la <b>España vaciada</b>. Para ayudarles, se intenta llevar internet, servicios y trabajo a los pueblos.</p>`,
      svg: svg("Comparación entre un pueblo con casas bajas y una ciudad con edificios altos", `${tit("Pueblo y ciudad")}${suelo(150)}${casa(36, 150, COL.naranja)}${arbol(84, 150, 0.7)}${arbol(110, 150, 0.55)}${[[150, 70], [176, 96], [202, 56], [228, 84]].map(([x, h]) => `<rect x="${x - 11}" y="${150 - h}" width="22" height="${h}" fill="${COL.gris}" fill-opacity=".6"/>`).join("")}${[150, 176, 202, 228].map((x) => `<rect x="${x - 6}" y="130" width="5" height="5" fill="var(--paper)"/><rect x="${x + 1}" y="130" width="5" height="5" fill="var(--paper)"/>`).join("")}${et(60, 168, "rural", 80, { size: 11, color: "#15803d" })}${et(190, 168, "urbana", 80, { size: 11, color: COL.azul })}`),
      video: vid("it__vYEABlY"),
    },
    {
      html: `<h3>¿Dónde vive la gente en España?</h3><p>La población española no está repartida de forma igual por el territorio. Para medir si un lugar está muy poblado o poco poblado se usa la <mark>densidad de población</mark>: el número de habitantes que viven en cada kilómetro cuadrado.</p><p>Se calcula dividiendo los habitantes entre la superficie: <b>densidad = habitantes ÷ km²</b>.</p><p>Si en un municipio de 10 km² viven 1.000 personas, su densidad es de 100 habitantes por kilómetro cuadrado.</p><p>En España hay grandes diferencias:</p><p>• Las zonas <b>más pobladas</b> son la <b>costa</b> (mediterránea, cantábrica y andaluza), las islas y la zona de <b>Madrid</b>. Allí hay más industria, comercio, turismo y servicios.<br>• Las zonas <b>menos pobladas</b> están en el <b>interior</b>: provincias como Soria, Teruel o Cuenca tienen muy pocos habitantes por kilómetro cuadrado, menos que muchas zonas de Europa del norte.</p><p>Las ciudades más pobladas de España son <b>Madrid</b>, con más de 3 millones de habitantes, y <b>Barcelona</b>, con más de un millón y medio. Les siguen Valencia, Sevilla, Zaragoza y Málaga.</p>`,
      svg: svg("Las ciudades más pobladas de España en millones de habitantes", `${tit("Habitantes (millones)")}${barras([["Madrid", 3.4, COL.rojo], ["Barcelona", 1.7, COL.azul], ["Valencia", 0.8, COL.naranja], ["Sevilla", 0.7, COL.verde], ["Zaragoza", 0.7, COL.morado]], { max: 3.6, y0: 150, alto: 100 })}`),
    },
    {
      html: `<h3>El municipio</h3><p>España está dividida en más de <b>8.000</b> <mark>municipios</mark>. Un municipio es un <b>territorio</b> con sus <b>habitantes</b> y su propio <b>gobierno</b>, el ayuntamiento.</p><p>Un municipio puede ser una gran ciudad, como Madrid, o un pueblo muy pequeño. Algunos municipios tienen varios núcleos de población: el pueblo principal y otras aldeas o pedanías cercanas. El municipio con menos habitantes de España tiene apenas unas decenas de vecinos.</p><p>Las personas que viven en un municipio se llaman <b>vecinos</b>. Tienen derechos, como usar los servicios municipales o votar en las elecciones municipales cuando son mayores de edad. Y también deberes, como cumplir las normas del municipio, cuidar los espacios públicos y pagar los impuestos municipales.</p><p>Cada municipio tiene su nombre, sus límites (que lo separan de los municipios vecinos), su escudo y su bandera, sus fiestas patronales y sus tradiciones.</p><p>Los habitantes de cada lugar reciben un nombre llamado <b>gentilicio</b>: de Madrid son madrileños, de Sevilla, sevillanos, de Ávila, abulenses, y de Huelva, onubenses. ¿Sabes cuál es el gentilicio de tu municipio?</p>`,
      svg: svg("Un municipio tiene territorio, habitantes y gobierno", `${tit("El municipio")}${fichas([["Territorio", "con sus límites", COL.verde], ["Habitantes", "los vecinos", COL.azul], ["Gobierno", "el ayuntamiento", COL.rojo]], 3, 40, 70)}${tx(130, 140, "escudo · bandera · fiestas · gentilicio", 230)}`),
    },
    {
      html: `<h3>El ayuntamiento</h3><p>El <mark>ayuntamiento</mark> es el órgano que <b>gobierna</b> el municipio. También se llama así al <b>edificio</b> donde trabaja, que suele estar en la plaza mayor y tiene en su fachada las banderas.</p><p>El ayuntamiento está formado por:</p><p>• El <mark>alcalde</mark> o alcaldesa, que es la persona que dirige el ayuntamiento y representa a todo el municipio.<br>• Los <mark>concejales</mark> y concejalas, que se encargan cada uno de un área: la concejalía de educación, de deportes, de cultura, de medio ambiente, de fiestas, de tráfico…</p><p>Todos ellos se reúnen en el <b>pleno</b> del ayuntamiento, donde se debaten y se votan las decisiones importantes del municipio. Los plenos son públicos: cualquier vecino puede ir a escucharlos.</p><p>¿Cómo se elige? Cada <b>cuatro años</b> hay <b>elecciones municipales</b>. Los vecinos mayores de 18 años votan a los partidos que se presentan, y según el número de votos se reparten los concejales. Después, los concejales eligen al alcalde.</p><p>Para que el ayuntamiento funcione también trabajan en él muchos funcionarios: administrativos, policías locales, jardineros, arquitectos o bibliotecarios.</p>`,
      svg: svg("Organización del ayuntamiento: vecinos votan a concejales y estos eligen al alcalde", `${tit("El ayuntamiento")}${columna([["Vecinos: votan cada 4 años", COL.verde], ["Concejales: forman el pleno", COL.azul], ["Alcalde/sa: dirige", COL.rojo]], 130, 200, 40, 30, 16)}`),
      video: vid("UCcXBDxZTYM"),
    },
    {
      html: `<h3>Los servicios municipales</h3><p>El ayuntamiento se encarga de muchos <mark>servicios públicos</mark> que hacen más fácil la vida de los vecinos:</p><p>• La <b>limpieza</b> de las calles y la <b>recogida de basuras</b>.<br>• El <b>alumbrado</b> público, para que las calles estén iluminadas de noche.<br>• El <b>agua</b> potable que llega a las casas y el alcantarillado.<br>• Los <b>parques</b>, jardines y zonas de juego.<br>• Las <b>bibliotecas</b>, centros culturales y polideportivos.<br>• La <b>policía local</b>, que vigila la seguridad y el tráfico.<br>• El <b>transporte</b> urbano, como los autobuses.<br>• El mantenimiento de los <b>colegios</b> públicos de infantil y primaria.<br>• La organización de las <b>fiestas</b> y actividades culturales.</p><p>¿De dónde sale el dinero? De los <b>impuestos</b> que pagan los vecinos, como el impuesto de las viviendas o el de los coches, y de las aportaciones del Estado y de la comunidad autónoma. Con ese dinero se hace el <b>presupuesto</b> municipal, que decide en qué se gasta cada año.</p><p>Todos podemos ayudar: cuidar el mobiliario urbano, no tirar papeles al suelo, recoger los excrementos del perro y separar bien la basura.</p>`,
      svg: svg("Algunos servicios que da el ayuntamiento", `${tit("Servicios municipales")}${fichas([["Limpieza", "calles y basura", COL.verde], ["Alumbrado", "calles con luz", COL.sol], ["Agua", "potable y desagüe", COL.azul], ["Parques", "jardines y juegos", COL.verde], ["Biblioteca", "libros y cultura", COL.morado], ["Policía local", "seguridad y tráfico", COL.rojo]], 2, 34)}`),
    },
    {
      html: `<h3>Participar en la vida del municipio</h3><p>El municipio es de todos, y todos podemos <b>participar</b> para mejorarlo. Ser un buen ciudadano no es solo cumplir las normas: también es aportar ideas y colaborar.</p><p>Algunas formas de participar son:</p><p>• <b>Votar</b> en las elecciones municipales, cuando se es mayor de edad.<br>• Asistir a los <b>plenos</b> del ayuntamiento.<br>• Presentar <b>sugerencias</b> o quejas al ayuntamiento, en persona o por internet.<br>• Formar parte de <b>asociaciones</b> de vecinos, deportivas, culturales o de voluntariado.<br>• Participar en los <b>presupuestos participativos</b>, en los que los vecinos deciden en qué se gasta una parte del dinero.</p><p>Muchos municipios tienen también un <mark>consejo de infancia</mark> o pleno infantil: un grupo de niños y niñas de los colegios que se reúne con el alcalde para proponer mejoras para la infancia, como más zonas de juego, carriles bici o caminos seguros al colegio.</p><p>Actividad: piensa en algo que mejorarías de tu barrio o de tu pueblo. Escribe una propuesta corta explicando qué cambiarías, por qué y cómo se podría hacer. ¡Así es como se empieza a participar!</p>`,
      svg: svg("Formas de participar en el municipio", `${tit("Participar", COL.verde)}${filas([["Votar", "a partir de 18 años", COL.azul], ["Proponer", "ideas y quejas", COL.naranja], ["Asociarse", "vecinos, deporte, cultura", COL.morado], ["Consejo infantil", "niños con el alcalde", COL.verde]], 52, 32, { wa: 90, wb: 130 })}`),
    },
  ],
  figura: {
    titulo: "Población y municipios en ocho ideas",
    svg: rejilla([
      ["Población", "personas de un lugar", COL.azul],
      ["Censo", "recuento cada 10 años", COL.gris],
      ["Natalidad", "nacimientos", COL.verde],
      ["Migración", "emigrar e inmigrar", COL.naranja],
      ["Rural", "vive en pueblos", COL.marron],
      ["Urbana", "vive en ciudades", COL.morado],
      ["Municipio", "territorio, vecinos, gobierno", COL.agua],
      ["Ayuntamiento", "alcalde y concejales", COL.rojo],
    ], 4, 86, "Resumen de la población y los municipios"),
  },
  video: vgen("Hu0U-odsG7A", "la población para niños primaria"),
  ejemplos: [
    { enunciado: "En un pueblo nacieron 12 niños en un año y fallecieron 20 personas. ¿Crece o disminuye su población natural?",
      pasos: ["Crecimiento natural = nacimientos − fallecimientos.", "12 − 20 = −8."],
      resultado: "Disminuye en 8 personas." },
    { enunciado: "Un municipio de 20 km² tiene 3.000 habitantes. ¿Cuál es su densidad?",
      pasos: ["Densidad = habitantes ÷ km².", "3.000 ÷ 20 = 150."],
      resultado: "150 habitantes por km²." },
    { enunciado: "Lucía se muda de Ecuador a Zaragoza. ¿Es emigrante o inmigrante?",
      pasos: ["Para Ecuador, de donde sale, es emigrante.", "Para Zaragoza, adonde llega, es inmigrante."],
      resultado: "Las dos cosas, según desde dónde se mire." },
  ],
  errores: [
    "Confundir emigrar (salir) con inmigrar (llegar).",
    "Pensar que el alcalde se vota directamente: los vecinos votan a los partidos y los concejales eligen al alcalde.",
    "Creer que municipio y pueblo son lo mismo: un municipio puede ser una gran ciudad o tener varias aldeas.",
    "Pensar que los servicios del ayuntamiento son gratis: se pagan con los impuestos de todos.",
    "Confundir el censo (de todo el país, cada diez años) con el padrón (de cada municipio, siempre actualizado).",
  ],
  ejercicios: [
    { q: "¿Qué es la población? ¿Cuántos habitantes tiene España, aproximadamente?", sol: "El conjunto de personas que viven en un lugar. Más de 48 millones." },
    { q: "Explica la diferencia entre natalidad y mortalidad.", sol: "La natalidad son los nacimientos de un año; la mortalidad, los fallecimientos." },
    { q: "¿Por qué decimos que la población española está envejecida?", sol: "Porque nacen pocos niños y la gente vive muchos años, así que hay muchas personas mayores." },
    { q: "Escribe dos motivos por los que las personas emigran.", sol: "Buscar trabajo, estudiar, reunirse con la familia o huir de guerras o pobreza." },
    { q: "Compara la población rural y la urbana (una ventaja de cada una).", sol: "Rural: vida tranquila, menos contaminación. Urbana: más servicios cerca." },
    { q: "¿Qué es la España vaciada?", sol: "Las zonas del interior que han perdido muchos habitantes y se están quedando casi sin población." },
    { q: "¿Qué tres elementos forman un municipio?", sol: "Territorio, habitantes (vecinos) y gobierno (ayuntamiento)." },
    { q: "¿Quién forma el ayuntamiento y cada cuánto se elige?", sol: "El alcalde y los concejales; cada cuatro años." },
    { q: "Escribe cinco servicios municipales.", sol: "Limpieza, recogida de basura, alumbrado, agua, parques, bibliotecas, policía local, autobuses (cinco)." },
    { q: "¿Qué es un consejo de infancia?", sol: "Un grupo de niños y niñas que se reúne con el ayuntamiento para proponer mejoras para la infancia." },
  ],
  quiz: [
    { q: "La lista de vecinos de un municipio es el…", o: ["padrón", "pleno", "presupuesto"], a: 0, e: "El padrón municipal." },
    { q: "El censo se hace cada…", o: ["año", "diez años", "cuatro años"], a: 1, e: "Cada diez años." },
    { q: "Los nacimientos de un año son la…", o: ["mortalidad", "natalidad", "densidad"], a: 1, e: "Natalidad." },
    { q: "Quien llega a vivir a un país es…", o: ["emigrante", "inmigrante", "concejal"], a: 1, e: "Inmigrante." },
    { q: "La población que vive en ciudades es…", o: ["rural", "urbana", "censal"], a: 1, e: "Urbana." },
    { q: "La ciudad más poblada de España es…", o: ["Barcelona", "Madrid", "Valencia"], a: 1, e: "Madrid." },
    { q: "El gobierno del municipio es el…", o: ["ayuntamiento", "Parlamento", "Senado"], a: 0, e: "El ayuntamiento." },
    { q: "Las elecciones municipales son cada…", o: ["2 años", "4 años", "10 años"], a: 1, e: "Cada cuatro años." },
    { q: "Se ocupa de un área del ayuntamiento:", o: ["el concejal", "el rey", "el juez"], a: 0, e: "El concejal." },
    { q: "Las zonas menos pobladas de España están en…", o: ["la costa", "el interior", "Madrid"], a: 1, e: "El interior." },
  ],
  examen: [
    { q: "Habitantes por km² es la…", o: ["densidad de población", "natalidad", "esperanza de vida"], a: 0, e: "Densidad de población." },
    { q: "Los de Huelva son…", o: ["onubenses", "abulenses", "oscenses"], a: 0, e: "Onubenses." },
    { q: "La reunión donde se votan las decisiones del ayuntamiento es el…", o: ["pleno", "censo", "padrón"], a: 0, e: "El pleno." },
    { q: "Los servicios municipales se pagan con…", o: ["impuestos", "nada, son gratis", "loterías"], a: 0, e: "Con impuestos." },
  ],
  feynman: ["Cómo cambia la población: nacimientos, muertes y migraciones", "Qué diferencias hay entre la población rural y la urbana", "Qué es un municipio, cómo se elige su ayuntamiento y qué hace"],
  mapa: mapa("POBLACIÓN Y MUNICIPIO", "var(--pri)", [
    ["Población", "censo · padrón", COL.azul],
    ["Cambios", "natalidad · mortalidad · migración", COL.verde],
    ["Dónde vive", "rural · urbana", COL.naranja],
    ["Municipio", "ayuntamiento · servicios", COL.rojo],
  ], 250),
  tarjetas: [
    ["Censo", "Recuento de toda la población, cada diez años."],
    ["Padrón", "Lista de los vecinos de un municipio."],
    ["Natalidad", "Número de nacimientos en un año."],
    ["Emigrante", "Persona que se va de un lugar a vivir a otro."],
    ["Densidad", "Habitantes por kilómetro cuadrado."],
    ["Municipio", "Territorio con habitantes y ayuntamiento."],
    ["Alcalde", "Persona que dirige el ayuntamiento."],
    ["Concejal", "Miembro del ayuntamiento encargado de un área."],
  ],
  familias: ["Buscad en la web del INE cuántos habitantes tiene vuestro municipio.", "Visitad el ayuntamiento o su página web y averiguad quién es el alcalde.", "Preguntad a abuelos o vecinos si alguien de la familia emigró o llegó de otro lugar.", "Haced una lista de los servicios municipales que usáis en una semana."],
  profesores: PROF("Ciencias Sociales: la población, su recuento y sus cambios; población rural y urbana; el municipio, el ayuntamiento y los servicios públicos; participación ciudadana", ["Pleno infantil simulado: elegir alcalde y concejales y votar propuestas.", "Gráfico de barras con la población de municipios cercanos.", "Árbol de migraciones de las familias de la clase."]),
  fuentes: [RD, { t: "Instituto Nacional de Estadística (INE)", url: "https://www.ine.es/" }, wiki("Municipio de España", "Municipio_(España)"), wiki("Ayuntamiento", "Ayuntamiento")],
  revisado: REV,
};
