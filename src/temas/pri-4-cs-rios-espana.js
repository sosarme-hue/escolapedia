// Ciencias Sociales 4º de Primaria: los ríos de España. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, barras, vid, vgen, RD, PROF, monte, nube, gota } = require("./_pri4b");

// Silueta simplificada de la península para los mapas.
const peninsula = `<path d="M38 52 L72 40 L120 44 L168 50 L204 56 L222 70 L206 92 L196 118 L176 140 L146 156 L110 162 L84 150 L60 156 L40 140 L46 116 L34 96 L30 72z" fill="${COL.verde}" fill-opacity=".15" stroke="${COL.verde}" stroke-width="2"/>`;
const rio = (d, c = COL.azul) => `<path d="${d}" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "Los ríos de España",
  minutos: 45,
  objetivos: ["Conocer qué es un río y cuáles son sus partes", "Entender los conceptos de caudal, cuenca, afluente y vertiente", "Identificar las tres vertientes hidrográficas de España", "Conocer los principales ríos de cada vertiente", "Valorar los ríos como un recurso que hay que cuidar"],
  claves: ["río", "nacimiento", "curso alto", "curso medio", "curso bajo", "desembocadura", "caudal", "afluente", "cuenca", "vertiente", "embalse", "lago"],
  pregunta: {
    texto: "El río Tajo es el más largo de la península, pero el Ebro lleva mucha más agua. ¿Cómo puede ser que un río más corto tenga más agua?",
    respuesta: "Porque la cantidad de agua de un río, su <mark>caudal</mark>, no depende solo de lo largo que sea, sino de <b>cuánto llueve</b> en las tierras por donde pasa y de cuántos <b>afluentes</b> recibe. El Ebro nace en una zona lluviosa y recibe muchos ríos de los Pirineos, cargados de agua de lluvia y de nieve derretida.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un río?</h3><p>Un <mark>río</mark> es una corriente de <b>agua dulce</b> que fluye de forma continua por un cauce, desde las zonas altas hasta otro río, un lago o el mar.</p><p>El agua de los ríos viene de la <b>lluvia</b>, de la <b>nieve</b> que se derrite en las montañas y de los <b>manantiales</b>, que son lugares donde el agua que estaba bajo tierra sale a la superficie.</p><p>Algunas palabras importantes:</p><p>• El <mark>cauce</mark> o lecho es el canal por donde corre el agua.<br>• Las <b>orillas</b> o márgenes son los bordes del cauce. Mirando hacia donde va el agua, hay una orilla derecha y una orilla izquierda.<br>• Un <mark>afluente</mark> es un río que desemboca en otro río más grande. Por ejemplo, el Jalón es afluente del Ebro.<br>• La <b>confluencia</b> es el lugar donde se juntan dos ríos.</p><p>Además de ríos, hay otras aguas continentales: los <b>arroyos</b> (ríos pequeños con poca agua), los <b>lagos</b> (grandes masas de agua dulce rodeadas de tierra), las <b>lagunas</b> (lagos pequeños y poco profundos) y las <b>aguas subterráneas</b>, que están bajo el suelo.</p>`,
      svg: svg("Un río principal con un afluente y la confluencia", `${tit("Río y afluente")}${monte(40, 82, 60, 44)}${monte(214, 74, 60, 40)}${rio("M44 84 Q80 110 120 112 Q170 116 230 162", COL.azul)}${rio("M210 76 Q190 100 150 113", COL.agua)}<circle cx="150" cy="113" r="5" fill="none" stroke="${COL.rojo}" stroke-width="2"/>${et(76, 134, "río principal", 90, { size: 10.5, color: COL.azul })}${et(198, 106, "afluente", 60, { size: 10.5, color: COL.agua })}${tx(150, 140, "confluencia", 70, { color: COL.rojo, weight: 700 })}`),
    },
    {
      html: `<h3>Las partes de un río</h3><p>Un río recorre un camino desde que nace hasta que termina. En ese camino distinguimos varias partes:</p><p>• El <mark>nacimiento</mark> es el lugar donde empieza el río, normalmente en una montaña, a partir de un manantial, de la nieve o de la lluvia.<br>• El <mark>curso alto</mark> está en la montaña. Hay mucha pendiente, así que el agua baja <b>rápida</b> y con fuerza. Arrastra piedras y excava valles estrechos y profundos con forma de V. Aquí hay cascadas y rápidos.<br>• El <mark>curso medio</mark> está en terrenos más llanos. El agua va más <b>despacio</b>, el cauce se ensancha y el río hace curvas llamadas <b>meandros</b>. Recibe muchos afluentes.<br>• El <mark>curso bajo</mark> está cerca del final. El agua va muy <b>lenta</b> y deja en el cauce la arena y el barro que arrastraba.<br>• La <mark>desembocadura</mark> es el lugar donde el río termina, en el mar, en un lago o en otro río.</p><p>Hay dos tipos de desembocadura en el mar: el <b>delta</b>, cuando el río deposita tanta tierra que forma un terreno con forma de triángulo, y el <b>estuario</b>, una desembocadura ancha donde el agua del mar entra y sale con las mareas.</p>`,
      svg: svg("Curso alto, medio y bajo de un río, desde el nacimiento hasta la desembocadura", `${tit("Partes de un río")}${monte(36, 92, 60, 56)}<rect x="196" y="140" width="60" height="34" fill="var(--water)" fill-opacity=".5"/>${rio("M36 40 Q50 70 70 90 Q90 120 120 118 Q150 112 160 132 Q180 150 210 150")}<circle cx="36" cy="40" r="4" fill="${COL.azul}"/>${et(58, 40, "nacimiento", 60, { size: 10, anchor: "start" })}${et(60, 112, "curso alto", 60, { size: 10, color: COL.rojo })}${et(130, 104, "curso medio", 70, { size: 10, color: COL.naranja })}${et(150, 160, "curso bajo", 60, { size: 10, color: COL.verde })}${et(226, 134, "mar", 40, { size: 10, color: COL.azul })}`),
      video: vid("DMTLtpG8LV4"),
    },
    {
      html: `<h3>Caudal, cuenca y vertiente</h3><p>Para estudiar los ríos usamos tres palabras muy importantes:</p><p>• El <mark>caudal</mark> es la <b>cantidad de agua</b> que lleva un río. Un río es <b>caudaloso</b> si lleva mucha agua. El caudal cambia a lo largo del año: aumenta con las lluvias y el deshielo, y disminuye en verano.<br>• El <b>régimen</b> de un río es cómo cambia su caudal durante el año. Si el río lleva mucha menos agua en verano, decimos que tiene <b>estiaje</b>. Si de pronto lleva muchísima agua y se desborda, hay una <b>crecida</b> o riada.<br>• La <mark>cuenca hidrográfica</mark> es todo el <b>territorio</b> cuyas aguas van a parar a un mismo río principal: el propio río, sus afluentes, los afluentes de sus afluentes… Es como un gran embudo.<br>• La <mark>vertiente hidrográfica</mark> es el conjunto de cuencas cuyos ríos desembocan en un <b>mismo mar</b>.</p><p>Una forma fácil de entenderlo: imagina las ramas de un árbol. El tronco es el río principal, las ramas son los afluentes y la copa entera sería la cuenca.</p>`,
      svg: svg("Una cuenca hidrográfica: el río principal y todos sus afluentes", `${tit("La cuenca")}<path d="M30 60 Q80 30 150 40 Q230 50 236 100 Q230 160 160 166 Q80 168 40 130 Q16 100 30 60z" fill="${COL.verde}" fill-opacity=".15" stroke="${COL.verde}" stroke-width="2" stroke-dasharray="5 4"/>${rio("M40 80 Q100 100 150 104 Q200 108 246 120")}${rio("M80 46 Q100 80 120 101", COL.agua)}${rio("M170 50 Q166 80 160 104", COL.agua)}${rio("M100 156 Q120 130 136 104", COL.agua)}${rio("M200 154 Q196 130 190 108", COL.agua)}${et(130, 138, "cuenca", 60, { size: 12, color: "#15803d" })}${et(222, 104, "río", 40, { size: 10, color: COL.azul })}`),
    },
    {
      html: `<h3>Las tres vertientes de España</h3><p>Los ríos de la península ibérica van a parar a tres mares distintos, así que hay tres <mark>vertientes hidrográficas</mark>:</p><p>• La <b>vertiente cantábrica</b>: sus ríos desembocan en el <b>mar Cantábrico</b>.<br>• La <b>vertiente atlántica</b>: sus ríos desembocan en el <b>océano Atlántico</b>.<br>• La <b>vertiente mediterránea</b>: sus ríos desembocan en el <b>mar Mediterráneo</b>.</p><p>¿Por qué la mayoría de los ríos van hacia el Atlántico? Por el <b>relieve</b>. La Meseta Central está inclinada hacia el oeste, como una mesa con las patas de un lado más cortas. Por eso los grandes ríos que nacen en el interior, como el Duero, el Tajo o el Guadiana, corren hacia Portugal y el Atlántico.</p><p>Las montañas hacen de <b>divisoria de aguas</b>: la lluvia que cae a un lado de la montaña va a un río, y la que cae al otro lado va a otro río distinto. Por ejemplo, la Cordillera Cantábrica separa los ríos que van al Cantábrico de los que van a la Meseta.</p><p>En las islas, los ríos son muy cortos y muchas veces llevan agua solo cuando llueve. En Canarias se llaman <b>barrancos</b>, y en Baleares, <b>torrentes</b>.</p>`,
      svg: svg("Las tres vertientes hidrográficas de la península", `${tit("Tres vertientes")}<rect x="4" y="30" width="252" height="146" rx="8" fill="var(--water)" fill-opacity=".2"/>${peninsula}<path d="M44 58 L200 60 L196 66 L48 66z" fill="${COL.agua}" fill-opacity=".55"/><path d="M44 66 L150 66 L160 150 L110 160 L84 150 L60 156 L40 140 L46 116 L34 96 L30 72z" fill="${COL.azul}" fill-opacity=".25"/><path d="M150 66 L200 64 L222 70 L206 92 L196 118 L176 140 L160 150z" fill="${COL.verde}" fill-opacity=".35"/>${et(130, 42, "cantábrica", 80, { size: 10.5, color: COL.agua })}${et(90, 110, "atlántica", 70, { size: 11, color: COL.azul })}${et(184, 104, "mediterránea", 60, { size: 9.5, color: "#15803d" })}`),
      video: vid("3flu7QerH2A"),
    },
    {
      html: `<h3>La vertiente cantábrica</h3><p>Los ríos de la <mark>vertiente cantábrica</mark> nacen en la Cordillera Cantábrica y en los Montes Vascos y desembocan en el mar Cantábrico.</p><p>Sus características son:</p><p>• Son ríos <b>cortos</b>, porque las montañas están muy cerca del mar.<br>• Son <b>caudalosos</b> y <b>regulares</b>: llevan bastante agua todo el año, porque en el norte llueve mucho y en todas las estaciones.<br>• Tienen mucha <b>fuerza</b> y bajan rápidos, porque salvan una gran diferencia de altura en poca distancia. Por eso en ellos se construyen centrales para producir electricidad.</p><p>Algunos de estos ríos son:</p><p>• El <b>Bidasoa</b>, que hace de frontera con Francia.<br>• El <b>Nervión</b>, que pasa por Bilbao.<br>• El <b>Nalón</b> y el <b>Navia</b>, en Asturias.<br>• El <b>Sella</b>, en Asturias, famoso por su descenso en piragua cada verano.<br>• El <b>Eo</b>, entre Galicia y Asturias.</p><p>Muchos de estos ríos terminan en <b>rías</b> o en estuarios, donde se mezclan el agua dulce y el agua salada. En sus aguas limpias viven truchas y salmones, que remontan los ríos para poner sus huevos.</p>`,
      svg: svg("Características de los ríos cantábricos", `${tit("Ríos cantábricos", COL.agua)}${fichas([["Cortos", "montañas cerca del mar", COL.agua], ["Caudalosos", "llueve mucho", COL.azul], ["Regulares", "agua todo el año", COL.verde], ["Rápidos", "mucha pendiente", COL.rojo]], 2, 34)}`),
    },
    {
      html: `<h3>La vertiente atlántica</h3><p>La <mark>vertiente atlántica</mark> es la más grande: ocupa casi dos tercios de la península. Tiene dos grupos de ríos:</p><p>• Los <b>ríos gallegos</b>, como el <b>Miño</b> y su afluente el <b>Sil</b>. Son cortos y caudalosos, porque en Galicia llueve mucho. El Miño hace de frontera con Portugal antes de llegar al mar.</p><p>• Los <b>grandes ríos de la Meseta</b>. Son <b>largos</b>, porque cruzan la península de este a oeste. Tienen un caudal <b>irregular</b>: llevan bastante agua en invierno y primavera y poca en verano, porque en el interior apenas llueve en esa época. Son:</p><p>• El <b>Duero</b>, que recorre la Submeseta Norte y pasa por Soria, Zamora y Oporto, en Portugal.<br>• El <mark>Tajo</mark>, el <b>río más largo de la península</b>, con unos 1.000 km. Pasa por Aranjuez, Toledo y Lisboa.<br>• El <b>Guadiana</b>, que recorre la Submeseta Sur, pasa por Mérida y Badajoz y en parte de su curso desaparece bajo tierra.<br>• El <mark>Guadalquivir</mark>, que nace en la sierra de Cazorla y pasa por Córdoba y Sevilla. Es el <b>único río navegable</b> de España: los barcos pueden subir desde el mar hasta Sevilla.</p>`,
      svg: svg("Ríos de la vertiente atlántica en el mapa", `${tit("Vertiente atlántica", COL.azul)}${peninsula}${rio("M60 52 Q56 60 44 64")}${rio("M168 62 Q120 70 80 72 Q60 74 40 80")}${rio("M168 96 Q120 92 90 100 Q60 102 40 112")}${rio("M160 118 Q120 120 90 124 Q70 130 54 146")}${rio("M176 132 Q130 136 110 150 Q100 156 90 158")}${et(70, 48, "Miño", 40, { size: 9, color: COL.azul })}${et(130, 62, "Duero", 50, { size: 9.5, color: COL.azul })}${et(124, 88, "Tajo", 40, { size: 9.5, color: COL.azul })}${et(130, 114, "Guadiana", 60, { size: 9, color: COL.azul })}${et(158, 148, "Guadalquivir", 70, { size: 9, color: COL.azul })}`),
    },
    {
      html: `<h3>La vertiente mediterránea</h3><p>Los ríos de la <mark>vertiente mediterránea</mark> desembocan en el mar Mediterráneo. Casi todos son <b>cortos</b>, porque nacen en montañas cercanas a la costa, como el Sistema Ibérico o los Sistemas Béticos.</p><p>También son <b>irregulares</b>: en verano llevan muy poca agua, y algunos se quedan secos. Pero en otoño, cuando llegan lluvias muy fuertes, pueden sufrir <b>crecidas</b> peligrosas y desbordarse. Por eso hay muchas <b>ramblas</b>, cauces secos que solo llevan agua cuando llueve mucho.</p><p>El gran río de esta vertiente es el <mark>Ebro</mark>:</p><p>• Es el río <b>más caudaloso</b> de España.<br>• Nace en Fontibre, en Cantabria, y cruza la depresión del Ebro pasando por Logroño y Zaragoza.<br>• Recibe muchos afluentes de los Pirineos, como el Aragón, el Gállego o el Segre, que le aportan mucha agua.<br>• Termina en el <b>delta del Ebro</b>, en Tarragona, una zona de arrozales y lagunas donde viven muchísimas aves.</p><p>Otros ríos mediterráneos son el <b>Llobregat</b>, cerca de Barcelona, el <b>Turia</b>, que pasa por Valencia, el <b>Júcar</b> y el <b>Segura</b>, que riega las huertas de Murcia.</p>`,
      svg: svg("Comparación de longitud entre el Tajo, el Ebro, el Duero, el Guadiana y el Guadalquivir", `${tit("Longitud (km)")}${barras([["Tajo", 1007, COL.azul], ["Ebro", 910, COL.verde], ["Duero", 897, COL.agua], ["Guadiana", 744, COL.morado], ["Guadalq.", 657, COL.naranja]], { max: 1100, y0: 150, alto: 100 })}`),
    },
    {
      html: `<h3>Lagos, embalses y aguas subterráneas</h3><p>En España hay pocos lagos naturales grandes, pero tenemos otras masas de agua muy importantes:</p><p>• Los <b>lagos de montaña</b>, también llamados ibones en los Pirineos, se formaron en zonas donde antes hubo glaciares. El <b>lago de Sanabria</b>, en Zamora, es el mayor lago natural de la península.</p><p>• Las <b>lagunas</b> son masas de agua pequeñas y poco profundas, como las <b>Lagunas de Ruidera</b>, en Castilla-La Mancha, o la laguna de Fuente de Piedra, en Málaga, donde viven flamencos.</p><p>• Las <b>albuferas</b> son lagunas junto al mar, como la albufera de Valencia.</p><p>• Los <mark>embalses</mark> o pantanos son lagos <b>artificiales</b>: se forman cuando se construye una <b>presa</b>, un gran muro que corta el río y retiene el agua. Sirven para tener agua para beber y regar en verano, para producir electricidad y para evitar inundaciones. España es uno de los países del mundo con más embalses.</p><p>• Las <mark>aguas subterráneas</mark> están bajo el suelo, empapando las rocas, en lo que se llama acuífero. Se sacan mediante <b>pozos</b> y son muy importantes en las zonas secas.</p>`,
      svg: svg("Una presa forma un embalse en un río", `${tit("Un embalse")}${monte(30, 160, 60, 110)}${monte(230, 160, 60, 110)}<path d="M40 100 Q90 96 150 100 L150 160 H50z" fill="var(--water)" fill-opacity=".55"/><rect x="150" y="92" width="16" height="68" fill="${COL.gris}"/>${rio("M166 150 Q190 156 210 160")}${et(96, 130, "embalse", 70, { size: 11, color: COL.azul })}${et(158, 84, "presa", 50, { size: 10.5 })}${tx(196, 172, "río", 30)}`),
    },
    {
      html: `<h3>Cuidar los ríos</h3><p>Los ríos son muy importantes para las personas. Nos dan <b>agua</b> para beber, para lavar y para la higiene. Se usan para <b>regar</b> los campos, y la agricultura es la actividad que más agua gasta. Mueven las turbinas que producen <b>electricidad</b>. Y en sus orillas viven muchos animales y plantas: forman los <b>bosques de ribera</b>, con chopos, sauces y álamos.</p><p>Por eso muchas ciudades y pueblos se construyeron junto a los ríos desde hace miles de años.</p><p>Pero los ríos tienen problemas:</p><p>• La <mark>contaminación</mark>, cuando les llegan basuras, aguas sucias de las casas sin depurar, productos químicos de las fábricas o abonos de los campos.<br>• La <b>sobreexplotación</b>, cuando se saca más agua de la que el río puede dar.<br>• La <b>sequía</b>, cuando pasa mucho tiempo sin llover.</p><p>¿Qué podemos hacer nosotros?</p><p>• Cerrar el grifo mientras nos lavamos los dientes y ducharnos en lugar de bañarnos.<br>• No tirar al váter ni al desagüe toallitas, aceite ni medicinas.<br>• No dejar basura en las orillas cuando vamos de excursión.<br>• Respetar a los animales y las plantas del río.</p>`,
      svg: svg("Acciones para cuidar los ríos y ahorrar agua", `${tit("Cuidar el agua", COL.verde)}${filas([["Grifo", "ciérralo al lavarte", COL.azul], ["Ducha", "mejor que baño", COL.agua], ["Desagüe", "sin aceite ni toallitas", COL.naranja], ["Excursión", "llévate la basura", COL.verde]], 52, 32, { wa: 70, wb: 150 })}`),
    },
  ],
  figura: {
    titulo: "Los ríos de España en ocho ideas",
    svg: rejilla([
      ["Río", "corriente de agua dulce", COL.azul],
      ["Cursos", "alto, medio y bajo", COL.marron],
      ["Caudal", "cantidad de agua", COL.agua],
      ["Cuenca", "río y afluentes", COL.verde],
      ["Cantábrica", "cortos y caudalosos", COL.morado],
      ["Atlántica", "Duero, Tajo, Guadalquivir", COL.naranja],
      ["Mediterránea", "Ebro, Júcar, Segura", COL.rojo],
      ["Embalse", "lago artificial", COL.gris],
    ], 4, 86, "Resumen de los ríos de España"),
  },
  video: vgen("zVPFr47Hbmc", "ríos de España para niños"),
  ejemplos: [
    { enunciado: "¿A qué vertiente pertenece un río que pasa por Sevilla y desemboca en el Atlántico?",
      pasos: ["El río de Sevilla es el Guadalquivir.", "Desemboca en el océano Atlántico."],
      resultado: "Vertiente atlántica." },
    { enunciado: "¿Cuántos kilómetros más mide el Tajo que el Ebro?",
      pasos: ["Tajo: unos 1.007 km. Ebro: unos 910 km.", "1.007 − 910 = 97."],
      resultado: "Unos 97 km más." },
    { enunciado: "Un río baja rápido entre rocas y forma una cascada. ¿En qué curso está?",
      pasos: ["El agua rápida indica mucha pendiente.", "La pendiente fuerte está en la montaña."],
      resultado: "En el curso alto." },
  ],
  errores: [
    "Pensar que el río más largo es también el más caudaloso: el Tajo es el más largo y el Ebro el más caudaloso.",
    "Confundir cuenca (territorio de un río y sus afluentes) con vertiente (conjunto de cuencas que van al mismo mar).",
    "Creer que el Ebro va al Atlántico: desemboca en el Mediterráneo.",
    "Decir que los ríos cantábricos son largos: son cortos porque las montañas están cerca del mar.",
    "Pensar que un embalse es un lago natural: lo crea una presa.",
  ],
  ejercicios: [
    { q: "¿Qué es un afluente? Pon un ejemplo.", sol: "Un río que desemboca en otro mayor. Por ejemplo, el Sil es afluente del Miño." },
    { q: "Ordena las partes de un río: desembocadura, curso medio, nacimiento, curso bajo, curso alto.", sol: "Nacimiento, curso alto, curso medio, curso bajo, desembocadura." },
    { q: "¿Qué es el caudal? ¿Qué es el estiaje?", sol: "El caudal es la cantidad de agua de un río; el estiaje, el periodo en que lleva muy poca agua, normalmente en verano." },
    { q: "Nombra las tres vertientes hidrográficas de España.", sol: "Cantábrica, atlántica y mediterránea." },
    { q: "¿Por qué la mayoría de los grandes ríos van al Atlántico?", sol: "Porque la Meseta está inclinada hacia el oeste." },
    { q: "Escribe dos características de los ríos cantábricos.", sol: "Son cortos y caudalosos (y regulares, con mucha fuerza)." },
    { q: "Nombra cuatro ríos de la vertiente atlántica.", sol: "Miño, Duero, Tajo, Guadiana y Guadalquivir (cuatro de ellos)." },
    { q: "¿Qué tiene de especial el Guadalquivir?", sol: "Es el único río navegable de España, hasta Sevilla." },
    { q: "¿Dónde nace y dónde desemboca el Ebro?", sol: "Nace en Fontibre (Cantabria) y desemboca en el Mediterráneo formando un delta." },
    { q: "Escribe tres usos de un embalse.", sol: "Guardar agua para beber y regar, producir electricidad y evitar inundaciones." },
  ],
  quiz: [
    { q: "El lugar donde empieza un río es…", o: ["la desembocadura", "el nacimiento", "el meandro"], a: 1, e: "El nacimiento." },
    { q: "Las curvas de un río se llaman…", o: ["meandros", "deltas", "rías"], a: 0, e: "Meandros." },
    { q: "La cantidad de agua de un río es su…", o: ["cuenca", "caudal", "cauce"], a: 1, e: "Caudal." },
    { q: "El río más largo de la península es el…", o: ["Ebro", "Tajo", "Duero"], a: 1, e: "Tajo." },
    { q: "El río más caudaloso de España es el…", o: ["Ebro", "Guadiana", "Segura"], a: 0, e: "Ebro." },
    { q: "El Nervión pertenece a la vertiente…", o: ["mediterránea", "atlántica", "cantábrica"], a: 2, e: "Cantábrica." },
    { q: "El Duero desemboca en el…", o: ["Atlántico", "Mediterráneo", "Cantábrico"], a: 0, e: "Atlántico, en Oporto." },
    { q: "El Turia pasa por…", o: ["Valencia", "Sevilla", "Bilbao"], a: 0, e: "Valencia." },
    { q: "Un lago artificial creado por una presa es un…", o: ["ibón", "embalse", "estuario"], a: 1, e: "Embalse." },
    { q: "En Canarias los cauces se llaman…", o: ["ramblas", "barrancos", "rías"], a: 1, e: "Barrancos." },
  ],
  examen: [
    { q: "Los ríos de la Meseta tienen un caudal…", o: ["irregular", "igual todo el año", "nulo"], a: 0, e: "Irregular." },
    { q: "El Tajo pasa por…", o: ["Toledo", "Zaragoza", "Murcia"], a: 0, e: "Toledo." },
    { q: "El mayor lago natural de la península es el de…", o: ["Sanabria", "Ruidera", "la Albufera"], a: 0, e: "Sanabria." },
    { q: "Una rambla es…", o: ["un cauce que solo lleva agua cuando llueve", "un lago", "una presa"], a: 0, e: "Un cauce seco casi siempre." },
  ],
  feynman: ["Qué partes tiene un río y cómo va el agua en cada una", "Qué diferencia hay entre cuenca y vertiente", "Cómo son los ríos de cada una de las tres vertientes"],
  mapa: mapa("RÍOS DE ESPAÑA", "var(--pri)", [
    ["Partes", "nacimiento · cursos · desembocadura", COL.azul],
    ["Cantábrica", "cortos y caudalosos", COL.agua],
    ["Atlántica", "Duero · Tajo · Guadalquivir", COL.morado],
    ["Mediterránea", "Ebro · Júcar · Segura", COL.verde],
  ], 250),
  tarjetas: [
    ["Afluente", "Río que desemboca en otro río mayor."],
    ["Caudal", "Cantidad de agua que lleva un río."],
    ["Cuenca", "Territorio cuyas aguas van a un mismo río."],
    ["Vertiente", "Conjunto de cuencas que van al mismo mar."],
    ["Meandro", "Curva que hace un río en el curso medio."],
    ["Tajo", "Río más largo de la península."],
    ["Ebro", "Río más caudaloso de España; acaba en un delta."],
    ["Embalse", "Lago artificial que forma una presa."],
  ],
  familias: ["Averiguad qué río pasa más cerca de vuestra casa y a qué vertiente pertenece.", "Paseo junto a un río: buscad la orilla derecha y la izquierda.", "Haced un registro de cuánta agua gastáis en casa en una semana.", "Buscad en un mapa el recorrido completo del río más cercano."],
  profesores: PROF("Ciencias Sociales: las aguas continentales; partes de un río, caudal, cuenca y vertiente; ríos de las vertientes cantábrica, atlántica y mediterránea; uso responsable del agua", ["Maqueta de un río con arena y agua en una bandeja.", "Mapa mudo para trazar los ríos principales por vertientes.", "Investigación sobre el río de la localidad."]),
  fuentes: [RD, { t: "Ministerio para la Transición Ecológica: el agua", url: "https://www.miteco.gob.es/es/agua.html" }, wiki("Ríos de España", "Anexo:Ríos_de_España"), wiki("Vertiente hidrográfica", "Vertiente_hidrográfica")],
  revisado: REV,
};
