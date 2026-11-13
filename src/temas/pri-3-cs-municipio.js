// Ciencias Sociales 3º de Primaria: el municipio y el ayuntamiento. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, columna, vid, vgen, RD, PROF, casa, arbol, nino, suelo, sol } = require("./_pri3b");

// Edificio del ayuntamiento con bandera y reloj.
const ayto = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-40" y="-50" width="80" height="50" fill="#fde68a" stroke="var(--ink)" stroke-width="1.5"/><path d="M-46 -50 L0 -74 L46 -50z" fill="#b45309" stroke="var(--ink)" stroke-width="1.5"/><circle cx="0" cy="-58" r="6" fill="#fff" stroke="var(--ink)"/><path d="M0 -58 v-4 M0 -58 h3" stroke="var(--ink)"/>${[-26, -8, 10].map((d) => `<rect x="${d}" y="-40" width="14" height="14" fill="#93c5fd" stroke="var(--ink)" stroke-width="1"/>`).join("")}<rect x="-8" y="-20" width="16" height="20" fill="#92400e"/><path d="M0 -74 V-96" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -96 h18 v10 h-18z" fill="${COL.rojo}"/><path d="M0 -92.7 h18 v3.4 h-18z" fill="#facc15"/></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "El municipio y el ayuntamiento",
  minutos: 45,
  objetivos: ["Saber qué es un municipio y distinguir pueblos y ciudades", "Conocer el ayuntamiento y quién lo forma: alcalde y concejales", "Explicar cómo se elige a las personas que gobiernan el municipio", "Identificar los servicios públicos del municipio y cómo se pagan", "Participar como buenos ciudadanos cumpliendo normas y cuidando lo de todos"],
  claves: ["municipio", "localidad", "término municipal", "ayuntamiento", "alcalde", "concejal", "pleno", "elecciones", "vecinos", "servicios públicos", "impuestos", "normas"],
  pregunta: {
    texto: "Alguien arregla las farolas de tu calle, recoge la basura cada noche, cuida los parques y pone semáforos en los cruces. Pero nadie de tu casa paga a esas personas directamente. ¿Quién organiza todo esto?",
    respuesta: "Lo organiza el <mark>ayuntamiento</mark>, que es el que gobierna el <b>municipio</b>. Lo dirigen el <b>alcalde</b> o la alcaldesa y los <b>concejales</b>, a los que eligen los vecinos con su voto. Y esos servicios se pagan con los <b>impuestos</b> que pagamos entre todos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un municipio?</h3><p>Un <mark>municipio</mark> es un territorio con unos límites, sus habitantes y un gobierno propio, que es el <b>ayuntamiento</b>. Las personas que viven en un municipio se llaman <mark>vecinos</mark>.</p><p>El territorio del municipio se llama <b>término municipal</b>. Dentro de él puede haber uno o varios núcleos de población, como un pueblo y algunas aldeas o urbanizaciones, y también campos, montes y ríos.</p><p>España tiene más de <b>8.000 municipios</b>. Los hay muy grandes, como Madrid, con más de tres millones de habitantes, y muy pequeños, con menos de cien vecinos.</p><p>Varios municipios forman una <b>provincia</b>, y varias provincias forman una <b>comunidad autónoma</b>. Todas las comunidades autónomas juntas forman <b>España</b>. ¡Es como unas muñecas rusas, una dentro de otra!</p><p>Cada municipio tiene su <b>nombre</b>, su <b>escudo</b> y, a menudo, su <b>bandera</b>. También tiene sus propias <b>fiestas</b> y tradiciones, como las fiestas del patrón o de la patrona.</p>`,
      svg: svg("Del municipio a España: municipio, provincia, comunidad autónoma y España", `${tit("Uno dentro de otro")}${[["España", COL.rojo], ["comunidad autónoma", COL.morado], ["provincia", COL.azul], ["municipio", COL.verde]].map(([n, c], i) => `<rect x="${16 + i * 22}" y="${36 + i * 32}" width="${228 - i * 44}" height="${136 - i * 32}" rx="8" fill="${c}" fill-opacity=".1" stroke="${c}" stroke-width="2"/>${et(130, 52 + i * 32, n, 140, { size: 10.5, color: c })}`).join("")}`),
    },
    {
      html: `<h3>Pueblos y ciudades</h3><p>Las localidades pueden ser pueblos o ciudades. Se diferencian en varias cosas:</p><p>• Los <mark>pueblos</mark> o localidades <b>rurales</b> tienen <b>pocos habitantes</b>. Las casas suelen ser bajas, de una o dos plantas, y muchas tienen huerto o corral. Hay pocas calles y menos tráfico. Muchas personas trabajan en el <b>campo</b>: en la agricultura y la ganadería. Todo el mundo se conoce.</p><p>• Las <mark>ciudades</mark> o localidades <b>urbanas</b> tienen <b>muchos habitantes</b>. Hay edificios altos con muchos pisos, calles anchas, mucho tráfico y transporte público como autobuses y metro. Las personas trabajan en fábricas, tiendas, oficinas, hospitales y otros servicios.</p><p>Las ciudades se dividen en <b>barrios</b>, y cada barrio tiene sus calles, plazas, colegios y tiendas. El <b>centro</b> suele ser la parte más antigua.</p><p>Vivir en un pueblo tiene ventajas, como la tranquilidad y la naturaleza cerca, y vivir en una ciudad también, como tener más servicios. ¿Tú vives en un pueblo o en una ciudad?</p>`,
      svg: svg("Un pueblo con casas bajas y campo, y una ciudad con edificios altos", `${tit("Pueblo y ciudad")}${suelo(150)}${casa(36, 150, 0.6)}${casa(80, 150, 0.6)}${arbol(110, 150, 0.6)}<path d="M10 150 h110" stroke="#84cc16" stroke-width="4"/>${[[150, 70, "#93c5fd"], [176, 50, "#a5b4fc"], [204, 80, "#fca5a5"], [228, 60, "#c4b5fd"]].map(([x, h, c]) => `<rect x="${x - 12}" y="${150 - h}" width="24" height="${h}" fill="${c}" stroke="var(--ink)" stroke-width="1"/>${[...Array(Math.floor(h / 16))].map((_, j) => `<rect x="${x - 7}" y="${150 - h + 6 + j * 16}" width="5" height="6" fill="#fff"/><rect x="${x + 2}" y="${150 - h + 6 + j * 16}" width="5" height="6" fill="#fff"/>`).join("")}`).join("")}${et(66, 168, "pueblo: rural", 90, { size: 10.5, color: COL.verde })}${et(190, 168, "ciudad: urbana", 100, { size: 10.5, color: COL.azul })}`),
    },
    {
      html: `<h3>El ayuntamiento</h3><p>El <mark>ayuntamiento</mark> es el <b>gobierno del municipio</b>: es el grupo de personas que lo dirige, toma decisiones y organiza los servicios para los vecinos.</p><p>También llamamos ayuntamiento al <b>edificio</b> donde trabajan esas personas. Suele estar en la <b>plaza mayor</b> o en el centro de la localidad, y en su fachada ondean las banderas del municipio, de la comunidad autónoma, de España y de la Unión Europea. En algunos lugares se le llama también <b>casa consistorial</b>.</p><p>El ayuntamiento está formado por:</p><p>• El <mark>alcalde</mark> o la <b>alcaldesa</b>: es la persona que dirige el ayuntamiento y representa a todos los vecinos.<br>• Los <mark>concejales</mark> y <b>concejalas</b>: cada uno se encarga de un tema, llamado <b>concejalía</b>. Por ejemplo, hay concejales de educación, de deportes, de medio ambiente, de cultura, de fiestas o de tráfico.</p><p>El alcalde y los concejales se reúnen en el <mark>pleno</mark>, donde debaten y votan las decisiones importantes. Los vecinos pueden asistir a los plenos para escuchar.</p><p>En el ayuntamiento también trabajan muchos <b>funcionarios</b>, que hacen los trámites: empadronarse, pedir permisos o pagar los impuestos.</p>`,
      svg: svg("El edificio del ayuntamiento con su bandera y su reloj", `${tit("El ayuntamiento")}${ayto(80, 160, 1.1)}${filas([["alcalde", "dirige el municipio", COL.rojo], ["concejales", "un tema cada uno", COL.azul], ["pleno", "reunión para votar", COL.verde]], 64, 34, { x: 150, wa: 80, wb: 100, dos: true })}`),
      video: vid("X-EN9DGe3DM"),
    },
    {
      html: `<h3>¿Cómo se elige al ayuntamiento?</h3><p>En España vivimos en una <mark>democracia</mark>: los ciudadanos elegimos a las personas que nos gobiernan. Al alcalde y a los concejales se les elige en las <mark>elecciones municipales</mark>, que se celebran cada <b>cuatro años</b>.</p><p>Así funcionan:</p><p>1. Los <b>partidos políticos</b> y grupos de vecinos presentan sus <b>candidatos</b> y explican lo que harán si ganan: es su programa.<br>2. El día de las elecciones, los vecinos mayores de <b>18 años</b> van a votar a los colegios electorales. Meten una papeleta en un sobre y la depositan en una <b>urna</b>. El voto es <b>secreto</b>: nadie sabe a quién has votado.<br>3. Se cuentan los votos y se reparten los puestos de concejal según los votos de cada candidatura.<br>4. Los concejales elegidos votan después para elegir al <b>alcalde</b>.</p><p>Aunque los niños todavía no votan, sí pueden participar: muchos municipios tienen un <b>consejo de la infancia</b> donde los niños proponen ideas para mejorar su localidad.</p>`,
      svg: svg("Las elecciones municipales: candidatos, votación en la urna y recuento", `${tit("Elecciones municipales")}${flujo([["candidatos", COL.morado], ["votar", COL.azul], ["contar", COL.verde]], 50, 30)}<rect x="104" y="106" width="52" height="44" rx="4" fill="#e0f2fe" stroke="var(--ink)" stroke-width="1.5"/><rect x="118" y="100" width="24" height="5" fill="var(--ink)"/><path d="M124 92 h12 v14 h-12z" fill="#fff" stroke="var(--ink)"/>${tx(130, 172, "cada 4 años · voto secreto · desde 18 años", 236)}`),
    },
    {
      html: `<h3>Los servicios públicos</h3><p>El ayuntamiento se encarga de muchos <mark>servicios públicos</mark>: servicios que son para todos los vecinos y que hacen la vida más fácil y segura. Por ejemplo:</p><p>• <b>Limpieza</b> de las calles y <b>recogida de basuras</b>.<br>• <b>Alumbrado</b>: las farolas de las calles.<br>• <b>Agua</b> potable en los grifos y alcantarillado.<br>• <b>Parques y jardines</b>, y zonas de juegos infantiles.<br>• <b>Policía local</b>, que vigila el tráfico y la seguridad.<br>• <b>Bomberos</b> y protección civil, en muchos municipios.<br>• <b>Polideportivos</b> y piscinas municipales.<br>• <b>Bibliotecas</b>, casas de cultura y fiestas.<br>• <b>Transporte</b> público: autobuses urbanos.<br>• Mantenimiento de los <b>colegios</b> públicos.</p><p>Otros servicios importantes, como los <b>hospitales</b>, los <b>centros de salud</b> o los <b>profesores</b>, dependen de la comunidad autónoma, y otros, como el <b>ejército</b>, del Gobierno de España.</p>`,
      svg: svg("Servicios del ayuntamiento: limpieza, alumbrado, parques, policía local, biblioteca y deporte", `${tit("Servicios públicos")}${fichas([["Limpieza", "basuras y calles", COL.verde], ["Alumbrado", "farolas", COL.sol], ["Parques", "jardines y juegos", COL.verde], ["Policía local", "tráfico y seguridad", COL.azul], ["Biblioteca", "libros y cultura", COL.morado], ["Deporte", "polideportivo", COL.naranja]], 2, 34, 0)}`),
      video: vid("cgCZwyvb1V0"),
    },
    {
      html: `<h3>¿Quién paga los servicios?</h3><p>Los servicios públicos cuestan mucho dinero: hay que pagar a los barrenderos, a los policías y a los bibliotecarios, comprar camiones de basura, arreglar las calles y pagar la luz de las farolas.</p><p>Ese dinero sale de los <mark>impuestos</mark>: cantidades de dinero que los vecinos y las empresas pagan al ayuntamiento, a la comunidad autónoma y al Gobierno de España. Por ejemplo, las familias pagan un impuesto por su casa, por su coche o por la recogida de basura.</p><p>Con todo ese dinero, el ayuntamiento hace cada año un <b>presupuesto</b>: un plan que dice cuánto dinero va a recibir y en qué lo va a gastar.</p><p>Por eso decimos que los servicios públicos son <b>de todos</b>: los pagamos entre todos y todos los podemos usar. Cuando alguien rompe una papelera, pinta una pared o estropea un columpio, no es «gratis»: arreglarlo cuesta dinero que podría usarse para otras cosas, como un parque nuevo.</p><p>Cuidar el mobiliario urbano es cuidar el dinero de todos.</p>`,
      svg: svg("Los vecinos pagan impuestos, el ayuntamiento hace un presupuesto y ofrece servicios a todos", `${tit("Entre todos")}${flujo([["vecinos", COL.naranja], ["impuestos", COL.sol], ["ayuntamiento", COL.rojo]], 56, 32)}${fl(212, 92, 212, 112, "var(--muted)", 1.5)}${cj(30, 116, 200, 30, "servicios para todos", COL.verde)}`),
    },
    {
      html: `<h3>Normas para convivir</h3><p>Para que todos los vecinos podamos vivir bien juntos, el ayuntamiento aprueba unas normas llamadas <mark>ordenanzas municipales</mark>. Por ejemplo:</p><p>• No hacer ruido por la noche para dejar descansar a los demás.<br>• Tirar la basura en los contenedores y a las horas indicadas, y separar los residuos para reciclar.<br>• Recoger los excrementos de los perros.<br>• Respetar las señales de tráfico y cruzar por los pasos de peatones.<br>• No pintar paredes ni estropear el mobiliario urbano.<br>• Cuidar los parques y no pisar los jardines.</p><p>Quien no cumple las normas puede recibir una <b>multa</b>, que es una sanción en forma de dinero.</p><p>Ser un buen <mark>ciudadano</mark> es cumplir las normas, respetar a los demás vecinos, cuidar lo que es de todos y participar en la vida del municipio: ir a las fiestas, ayudar en actividades del barrio, proponer ideas y, cuando seas mayor, votar en las elecciones.</p>`,
      svg: svg("Buenas acciones del ciudadano: papelera, paso de peatones, silencio y cuidar los parques", `${tit("Buen ciudadano")}${columna([["usa las papeleras", COL.verde], ["cruza por el paso de peatones", COL.azul], ["no hagas ruido de noche", COL.morado], ["cuida parques y fuentes", COL.naranja]], 130, 210, 36, 24, 10)}`),
    },
    {
      html: `<h3>Mi municipio</h3><p>Ahora vamos a investigar sobre nuestro propio municipio. Podemos buscar información en la página web del ayuntamiento, en la biblioteca o preguntando a nuestras familias:</p><p>• ¿Cómo se llama nuestro municipio? ¿En qué provincia y en qué comunidad autónoma está?<br>• ¿Cuántos habitantes tiene? ¿Es un pueblo o una ciudad?<br>• ¿Cómo es su escudo? ¿Y su bandera?<br>• ¿Cómo se llama el alcalde o la alcaldesa?<br>• ¿Dónde está el ayuntamiento?<br>• ¿Qué fiestas se celebran y en honor de quién?<br>• ¿Qué servicios públicos hay cerca del colegio?</p><p>Con todo lo que descubráis, podéis hacer un <b>mural</b> o una ficha de presentación del municipio. Si es posible, organizad una <b>visita al ayuntamiento</b>: muchos alcaldes reciben a los colegios y explican cómo funciona.</p><p><b>Repaso:</b> ¿quién dirige el ayuntamiento? → El alcalde o la alcaldesa. ¿Cada cuánto se eligen? → Cada cuatro años.</p>`,
      svg: svg("Ficha de mi municipio: nombre, provincia, habitantes, alcalde y fiestas", `${tit("Ficha de mi municipio")}<rect x="30" y="34" width="200" height="136" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${["Nombre:", "Provincia:", "Habitantes:", "Alcalde/sa:", "Fiestas:"].map((s, i) => `${et(44, 58 + i * 24, s, 80, { size: 10.5, anchor: "start", color: COL.azul })}<path d="M124 ${60 + i * 24} H216" stroke="var(--line)" stroke-dasharray="3 3"/>`).join("")}`),
    },
    {
      html: `<h3>Un pleno en clase</h3><p>Vamos a simular un <b>pleno municipal</b> en el aula para tomar una decisión sobre el colegio o el barrio.</p><p>1. Elegid un <b>tema</b>: por ejemplo, «¿Qué hacemos en el patio para que todos jueguen mejor?» o «¿Qué pondríamos en un solar vacío del barrio: un parque, una pista o un huerto?».<br>2. Formad <b>grupos</b>, como si fueran candidaturas. Cada grupo prepara una propuesta y la explica a la clase en dos minutos.<br>3. Haced unas <b>elecciones</b>: cada alumno vota en secreto con una papeleta en una caja que hace de urna.<br>4. Contad los votos en la pizarra. El grupo con más votos elige un <b>alcalde</b> o alcaldesa de la clase.<br>5. En el <b>pleno</b>, el alcalde dirige el debate: cada uno habla por turnos, levantando la mano, y al final se vota la decisión.</p><p>Así descubriréis lo importante que es escuchar a los demás, respetar las opiniones diferentes y aceptar lo que decide la mayoría.</p>`,
      svg: svg("Niños en clase votando con la mano levantada en un pleno", `${tit("Pleno en clase")}${suelo(150)}${nino(50, 150, { pose: "arriba", s: 1 })}${nino(100, 150, { pose: "arriba", s: 1, nina: true })}${nino(160, 150, { pose: "pie", s: 1 })}${nino(214, 150, { pose: "arriba", s: 1, nina: true })}${tx(130, 172, "hablar por turnos y votar", 200)}`),
    },
  ],
  figura: {
    titulo: "El municipio en ocho ideas",
    svg: rejilla([
      ["Municipio", "territorio y vecinos", COL.verde],
      ["Pueblo / ciudad", "rural / urbano", COL.marron],
      ["Ayuntamiento", "gobierno del municipio", COL.rojo],
      ["Alcalde", "lo dirige", COL.rojo],
      ["Concejales", "un tema cada uno", COL.azul],
      ["Elecciones", "cada 4 años", COL.morado],
      ["Servicios", "basura, luz, parques", COL.verde],
      ["Impuestos", "los pagamos todos", COL.naranja],
    ], 4, 86, "Resumen del municipio y el ayuntamiento"),
  },
  video: vgen("jGmM_ZIG6vM", "el municipio y el ayuntamiento para niños"),
  ejemplos: [
    { enunciado: "Un camión de basura cuesta 200.000 €. Si el ayuntamiento compra 2 camiones, ¿cuánto gasta?",
      pasos: ["Multiplicamos 200.000 × 2.", "200.000 × 2 = 400.000."],
      resultado: "Gasta 400.000 €, que salen de los impuestos de todos." },
    { enunciado: "Ordena de menor a mayor: provincia, municipio, España, comunidad autónoma.",
      pasos: ["El más pequeño es el municipio.", "Varios municipios forman una provincia.", "Varias provincias forman una comunidad autónoma.", "Todas las comunidades forman España."],
      resultado: "Municipio, provincia, comunidad autónoma, España." },
    { enunciado: "Se rompe una farola de tu calle. ¿A quién hay que avisar?",
      pasos: ["El alumbrado es un servicio municipal.", "Lo organiza el ayuntamiento."],
      resultado: "Al ayuntamiento, por teléfono, en su web o en sus oficinas." },
  ],
  errores: [
    "Pensar que el alcalde manda solo: decide con los concejales en el pleno.",
    "Creer que los servicios públicos son gratis: se pagan con impuestos.",
    "Confundir municipio (territorio) con ayuntamiento (su gobierno).",
    "Pensar que el ayuntamiento lleva los hospitales: son de la comunidad autónoma.",
  ],
  ejercicios: [
    { q: "¿Qué es un municipio?", sol: "Un territorio con sus habitantes y un gobierno propio, el ayuntamiento." },
    { q: "¿Cómo se llaman las personas que viven en un municipio?", sol: "Vecinos." },
    { q: "Escribe dos diferencias entre un pueblo y una ciudad.", sol: "El pueblo tiene pocos habitantes y casas bajas; la ciudad tiene muchos habitantes y edificios altos." },
    { q: "¿Quién forma el ayuntamiento?", sol: "El alcalde o alcaldesa y los concejales." },
    { q: "¿Qué hace un concejal?", sol: "Se encarga de un tema concreto, como el deporte, la cultura o el tráfico." },
    { q: "¿Cada cuánto tiempo hay elecciones municipales?", sol: "Cada cuatro años." },
    { q: "¿Desde qué edad se puede votar?", sol: "Desde los 18 años." },
    { q: "Escribe cuatro servicios públicos del ayuntamiento.", sol: "Por ejemplo: limpieza, alumbrado, parques, policía local, biblioteca o polideportivo." },
    { q: "¿Con qué dinero se pagan los servicios públicos?", sol: "Con los impuestos que pagan los vecinos y las empresas." },
    { q: "¿Qué son las ordenanzas municipales?", sol: "Las normas que aprueba el ayuntamiento para que los vecinos convivan bien." },
  ],
  quiz: [
    { q: "El gobierno del municipio es el…", o: ["ayuntamiento", "colegio", "hospital"], a: 0, e: "El ayuntamiento." },
    { q: "Quien dirige el ayuntamiento es el…", o: ["alcalde", "director", "médico"], a: 0, e: "El alcalde o la alcaldesa." },
    { q: "Una localidad con pocos habitantes es…", o: ["rural", "urbana", "una provincia"], a: 0, e: "Rural: un pueblo." },
    { q: "Las ciudades se dividen en…", o: ["barrios", "provincias", "países"], a: 0, e: "Barrios." },
    { q: "La reunión del alcalde y los concejales es el…", o: ["pleno", "recreo", "mercado"], a: 0, e: "El pleno." },
    { q: "Las elecciones municipales son cada…", o: ["4 años", "año", "10 años"], a: 0, e: "Cada cuatro años." },
    { q: "El voto es…", o: ["secreto", "en voz alta", "obligatorio para niños"], a: 0, e: "Secreto." },
    { q: "Un servicio del ayuntamiento es…", o: ["la recogida de basura", "el ejército", "los hospitales"], a: 0, e: "La recogida de basura." },
    { q: "Los servicios públicos se pagan con…", o: ["impuestos", "nada, son gratis", "cromos"], a: 0, e: "Con impuestos." },
    { q: "Quien no cumple las ordenanzas puede recibir una…", o: ["multa", "medalla", "beca"], a: 0, e: "Una multa." },
  ],
  examen: [
    { q: "Varias provincias forman una…", o: ["comunidad autónoma", "calle", "aldea"], a: 0, e: "Una comunidad autónoma." },
    { q: "El plan de ingresos y gastos del ayuntamiento es el…", o: ["presupuesto", "mapa", "pleno"], a: 0, e: "El presupuesto." },
    { q: "Al alcalde lo eligen…", o: ["los concejales elegidos", "los profesores", "el rey"], a: 0, e: "Los concejales elegidos por los vecinos." },
    { q: "Ser buen ciudadano es…", o: ["cuidar lo que es de todos", "romper papeleras", "tirar basura al suelo"], a: 0, e: "Cuidar lo de todos y respetar las normas." },
  ],
  feynman: ["Qué es un municipio y en qué se diferencia un pueblo de una ciudad", "Quién forma el ayuntamiento y cómo se elige", "Qué servicios públicos hay y cómo se pagan"],
  mapa: mapa("EL MUNICIPIO", "var(--pri)", [
    ["Municipio", "pueblo · ciudad", COL.verde],
    ["Ayuntamiento", "alcalde · concejales", COL.rojo],
    ["Elecciones", "cada 4 años · voto", COL.morado],
    ["Servicios", "impuestos · normas", COL.naranja],
  ], 250),
  tarjetas: [
    ["Municipio", "Territorio con vecinos y ayuntamiento."],
    ["Ayuntamiento", "Gobierno del municipio."],
    ["Alcalde", "Dirige el ayuntamiento."],
    ["Concejal", "Se encarga de un tema del municipio."],
    ["Pleno", "Reunión donde se debaten y votan las decisiones."],
    ["Elecciones municipales", "Votación cada cuatro años."],
    ["Servicio público", "Servicio para todos los vecinos."],
    ["Impuestos", "Dinero que pagamos para los servicios."],
  ],
  familias: ["Visitad juntos el ayuntamiento de vuestra localidad y la plaza donde está.", "Buscad en la web del ayuntamiento cómo se llama el alcalde y qué concejalías hay.", "Dad un paseo y contad cuántos servicios públicos veis: farolas, papeleras, parques…", "Contad cómo se vota y, si podéis, acompañadle un día de elecciones."],
  profesores: PROF("Ciencias Sociales: el municipio; localidades rurales y urbanas; organización territorial; el ayuntamiento, alcalde, concejales y pleno; elecciones municipales y democracia; servicios públicos e impuestos; ordenanzas y ciudadanía", ["Simulación de un pleno municipal en el aula.", "Ficha de investigación de nuestro municipio.", "Inventario de servicios públicos en un paseo por el barrio."]),
  fuentes: [RD, wiki("Municipio", "Municipio (España)"), wiki("Ayuntamiento", "Ayuntamiento"), wiki("Elecciones municipales", "Elecciones municipales de España")],
  revisado: REV,
};
