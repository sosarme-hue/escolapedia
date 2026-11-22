// Educación Física 5º de Primaria: orientación en la naturaleza. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, nino, sol, arbol, estrella, tick, equis } = require("./_pri5b");

// Rosa de los vientos sencilla.
const rosa = (x, y, r = 30) => `<g transform="translate(${x} ${y})"><path d="M0 ${-r} L6 -6 L${r} 0 L6 6 L0 ${r} L-6 6 L${-r} 0 L-6 -6z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 ${-r} L6 -6 L0 0z M${r} 0 L6 6 L0 0z M0 ${r} L-6 6 L0 0z M${-r} 0 L-6 -6 L0 0z" fill="var(--red)"/>${t(0, -r - 6, "N", { size: 11 })}${t(0, r + 14, "S", { size: 11 })}${t(r + 9, 4, "E", { size: 11 })}${t(-r - 9, 4, "O", { size: 11 })}</g>`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Orientación en la naturaleza",
  minutos: 50,
  objetivos: ["Conocer los puntos cardinales y cómo encontrarlos con el sol y las estrellas", "Utilizar la brújula de forma sencilla", "Leer un mapa de orientación: escala, leyenda y colores", "Orientar el mapa con el terreno", "Participar en una carrera de orientación con seguridad", "Moverse por la naturaleza con respeto y saber qué hacer si nos perdemos"],
  claves: ["orientación", "puntos cardinales", "rosa de los vientos", "estrella Polar", "brújula", "aguja magnética", "mapa de orientación", "leyenda", "escala", "orientar el mapa", "baliza", "tarjeta de control", "carrera de orientación", "sendero balizado", "medio natural"],
  pregunta: {
    texto: "Estás de excursión en el monte, el móvil se ha quedado sin batería y no ves el camino. ¿Cómo podrías saber hacia dónde ir?",
    respuesta: "Con lo que la naturaleza nos enseña y con un poco de práctica: el <mark>sol</mark> sale por el este y se pone por el oeste; de noche, la <mark>estrella Polar</mark> señala el norte; y con un <b>mapa</b> y una <b>brújula</b> podemos saber dónde estamos y hacia dónde ir. Eso es <b>orientarse</b>. Y si nos perdemos de verdad, lo más seguro es quedarse quieto y pedir ayuda.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es orientarse?</h3><p><mark>Orientarse</mark> es saber dónde estamos y en qué dirección tenemos que movernos para llegar a un lugar. La palabra viene de «oriente», el lugar por donde sale el Sol: antiguamente, para orientarse, la gente buscaba primero el oriente.</p><p>Para orientarnos usamos los <mark>puntos cardinales</mark>:</p><p>• <b>Norte (N)</b><br>• <b>Sur (S)</b><br>• <b>Este (E)</b>, también llamado oriente o levante.<br>• <b>Oeste (O)</b>, también llamado occidente o poniente.</p><p>Entre ellos están los puntos intermedios: noreste (NE), sureste (SE), suroeste (SO) y noroeste (NO). Todos juntos forman la <b>rosa de los vientos</b>, que aparece en mapas y brújulas.</p><p>Un truco para recordarlos: si te pones de pie con el brazo derecho señalando por donde sale el sol (el este), delante de ti tienes el <b>norte</b>, detrás el <b>sur</b> y a tu izquierda el <b>oeste</b>.</p><p>Orientarse es útil en muchas situaciones: excursiones, viajes, ciudades desconocidas... y es la base de un deporte divertido: la <b>carrera de orientación</b>.</p>`,
      svg: svg("Rosa de los vientos con norte, sur, este y oeste", `${tit("Puntos cardinales")}${rosa(80, 100, 40)}${filas([["N", "norte", COL.rojo], ["S", "sur", COL.azul], ["E", "este: amanece", COL.naranja], ["O", "oeste: atardece", COL.morado]], 58, 28, { x: 146, wa: 22, wb: 104 })}`),
      video: vid("3lNLvuOo18s"),
    },
    {
      html: `<h3>Orientarse con el sol y las estrellas</h3><p>Antes de existir las brújulas y el GPS, las personas se orientaban mirando el cielo.</p><p><b>De día, con el sol</b>:</p><p>• El sol <b>sale por el este</b> por la mañana y <b>se pone por el oeste</b> por la tarde. En realidad, es la Tierra la que gira.<br>• A <b>mediodía</b> (en España, hacia las 14:00 en verano y las 13:00 en invierno), en el hemisferio norte el sol está en dirección <b>sur</b>. Por eso, a esa hora, nuestra sombra apunta hacia el <b>norte</b>.<br>• Puedes hacer un <b>reloj de sombras</b>: clava un palo en el suelo, marca dónde acaba su sombra, espera 15–20 minutos y marca de nuevo. La línea que une la primera marca con la segunda va, aproximadamente, de oeste a este.</p><p><b>De noche, con las estrellas</b>:</p><p>• En el hemisferio norte, la <mark>estrella Polar</mark> indica siempre el <b>norte</b>, porque está casi justo encima del Polo Norte y apenas se mueve en el cielo.<br>• Para encontrarla, busca la <b>Osa Mayor</b> (o «el Carro»): siete estrellas brillantes con forma de cazo. Prolonga unas cinco veces la distancia entre las dos estrellas del borde del cazo y llegarás a la estrella Polar.</p><p>Otras pistas, como que el musgo crece en la cara norte de los árboles, <b>no son fiables</b>: el musgo crece donde hay más humedad y sombra, que puede ser cualquier lado.</p>`,
      svg: svg("La Osa Mayor señala la estrella Polar, que indica el norte", `${tit("La estrella Polar")}<rect x="14" y="34" width="232" height="138" rx="8" fill="#1e293b"/>${[[50, 140], [80, 132], [104, 140], [128, 128], [150, 118], [146, 96], [172, 92]].map(([x, y]) => estrella(x, y, 5, "#fde68a")).join("")}<path d="M150 118 L146 96 M146 96 L134 54" stroke="#94a3b8" stroke-dasharray="3 3"/>${estrella(132, 50, 9, "#fde047")}${et(186, 52, "Polar = norte", 90, { size: 11, color: "#fde047" })}${et(80, 162, "Osa Mayor", 90, { size: 10.5, color: "#e2e8f0" })}`),
    },
    {
      html: `<h3>La brújula</h3><p>La <mark>brújula</mark> es un instrumento que indica el <b>norte</b> en cualquier momento, haga sol o esté nublado, de día o de noche. Se inventó en China hace más de mil años y fue fundamental para los grandes viajes por mar.</p><p>Funciona porque tiene una <b>aguja magnética</b> (un pequeño imán) que puede girar libremente. La Tierra se comporta como un gran imán, y la aguja siempre se coloca apuntando hacia el <b>norte magnético</b>. La punta que señala el norte suele ser <b>roja</b>.</p><p>Partes de una brújula de orientación:</p><p>• La <b>base</b> transparente, con una regla y una <b>flecha de dirección</b>.<br>• El <b>limbo</b>: una rueda que gira, con los grados (de 0° a 360°) y los puntos cardinales.<br>• La <b>aguja magnética</b>, con la punta roja hacia el norte.</p><p>Cómo usarla:</p><p>1. Sujétala <b>plana</b>, a la altura del pecho, lejos de objetos metálicos o del móvil, que pueden desviar la aguja.<br>2. Espera a que la aguja se quede quieta.<br>3. Gira tu cuerpo (no la brújula sobre la mano) hasta que la punta roja coincida con la N del limbo.<br>4. Ahora ya sabes dónde está el norte, y por tanto también los demás puntos cardinales.</p>`,
      svg: svg("Partes de la brújula: base, flecha de dirección, limbo y aguja magnética con punta roja", `${tit("La brújula")}<rect x="40" y="36" width="80" height="132" rx="8" fill="#e0f2fe" fill-opacity=".7" stroke="var(--pen)" stroke-width="2"/><path d="M80 40 l8 14 h-16z" fill="var(--pen)"/><circle cx="80" cy="112" r="34" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M80 84 l6 28 h-12z" fill="var(--red)"/><path d="M80 140 l6 -28 h-12z" fill="#e5e7eb" stroke="var(--ink)"/>${t(80, 82, "N", { size: 9 })}${filas([["flecha", "dirección de marcha", COL.azul], ["limbo", "rueda con grados", COL.gris], ["aguja", "roja: al norte", COL.rojo]], 66, 34, { x: 140, wa: 60, wb: 104, dos: true })}`),
      video: vid("iULKi0zvTeQ"),
    },
    {
      html: `<h3>El mapa de orientación</h3><p>Un <mark>mapa de orientación</mark> es un mapa muy detallado de una zona pequeña (un parque, un bosque, el colegio), hecho especialmente para este deporte. Tiene:</p><p>• Una <b>escala</b> grande, como 1:5.000 o 1:10.000, para ver muchos detalles. En el colegio se usan <b>planos</b> a escala aún mayor.<br>• Una <b>flecha de norte</b> o líneas de norte magnético que recorren el mapa.<br>• Una <b>leyenda</b> con los símbolos.<br>• Unos <b>colores</b> que son iguales en todos los mapas de orientación del mundo:</p>${tabla(["Color", "Qué representa"], [["Blanco", "bosque por el que se puede correr bien"], ["Amarillo", "zonas abiertas: prados, campos"], ["Verde", "vegetación densa, difícil de atravesar (más oscuro, más difícil)"], ["Azul", "agua: ríos, lagos, fuentes, charcas"], ["Marrón", "relieve: curvas de nivel, montículos, hoyos"], ["Negro", "rocas, caminos, vallas, construcciones"]])}<p>Las <b>curvas de nivel</b> son líneas marrones que unen puntos a la misma altura. Si están muy juntas, el terreno es muy empinado; si están separadas, es suave.</p><p>El <b>recorrido</b> se marca en el mapa en color violeta o magenta: un <b>triángulo</b> para la salida, <b>círculos</b> numerados para los controles y un <b>doble círculo</b> para la meta.</p>`,
      svg: svg("Colores del mapa de orientación y símbolos del recorrido: triángulo de salida, círculos y doble círculo de meta", `${tit("Leer el mapa")}<rect x="14" y="36" width="140" height="132" rx="6" fill="#fff" stroke="var(--line)" stroke-width="2"/><rect x="20" y="42" width="60" height="44" fill="#fde68a"/><rect x="90" y="90" width="58" height="40" fill="#86efac"/><path d="M20 140 q40 -16 80 4 t50 -6" stroke="#2563eb" stroke-width="4" fill="none"/><path d="M40 160 L60 100 L120 70" stroke="#c026d3" stroke-width="2" fill="none"/><path d="M34 166 l6 -11 l6 11z" fill="none" stroke="#c026d3" stroke-width="2"/><circle cx="60" cy="100" r="7" fill="none" stroke="#c026d3" stroke-width="2"/><circle cx="120" cy="70" r="7" fill="none" stroke="#c026d3" stroke-width="2"/><circle cx="120" cy="70" r="4" fill="none" stroke="#c026d3" stroke-width="2"/>${filas([["amarillo", "abierto", COL.sol], ["verde", "denso", COL.verde], ["azul", "agua", COL.azul], ["violeta", "recorrido", COL.morado]], 54, 30, { x: 166, wa: 64, wb: 64, dos: true })}`),
    },
    {
      html: `<h3>Orientar el mapa</h3><p>Para usar un mapa correctamente hay que <mark>orientarlo</mark>, es decir, colocarlo de forma que lo que vemos en el mapa coincida con lo que vemos en la realidad. El norte del mapa debe apuntar al norte real.</p><p>Hay dos formas de orientar el mapa:</p><p>• <b>Con la brújula</b>: coloca la brújula sobre el mapa y gira el mapa (con la brújula encima) hasta que la punta roja de la aguja quede paralela a las líneas de norte del mapa y apuntando hacia el norte del mapa.</p><p>• <b>Con el terreno</b>: busca elementos que veas a tu alrededor y que aparezcan en el mapa, como un camino, una fuente, un edificio o un gran árbol. Gira el mapa hasta que esos elementos estén en la misma posición que en la realidad. Si el camino va hacia tu izquierda, en el mapa también tiene que ir hacia tu izquierda.</p><p>Consejos para no perderse con el mapa:</p><p>• <b>Mantén el mapa orientado</b> siempre: cuando tú giras, el mapa gira contigo en sentido contrario.<br>• Usa el <b>pulgar</b> para señalar en el mapa dónde estás («técnica del pulgar») y ve moviéndolo a medida que avanzas.<br>• Antes de salir hacia un control, <b>planifica la ruta</b>: ¿qué elementos encontraré por el camino? Un camino, una valla, una zona de árboles...<br>• Avanza de un elemento fácil de reconocer a otro.</p>`,
      svg: svg("Orientar el mapa: girarlo hasta que el norte del mapa coincida con el norte real", `${tit("Orientar el mapa")}<g transform="rotate(-30 70 104)"><rect x="34" y="66" width="72" height="76" rx="4" fill="#fff" stroke="var(--line)" stroke-width="2"/><path d="M70 74 V132" stroke="var(--red)" stroke-width="2"/><path d="M70 72 l5 9 h-10z" fill="var(--red)"/></g>${equis(70, 160)}<rect x="154" y="66" width="72" height="76" rx="4" fill="#fff" stroke="var(--line)" stroke-width="2"/><path d="M190 74 V132" stroke="var(--red)" stroke-width="2"/><path d="M190 72 l5 9 h-10z" fill="var(--red)"/>${tick(190, 160)}${et(190, 48, "N real ↑", 80, { size: 11, color: COL.rojo })}${et(70, 48, "sin orientar", 90, { size: 10.5, color: COL.gris })}`),
    },
    {
      html: `<h3>La carrera de orientación</h3><p>La <mark>carrera de orientación</mark> es un deporte en el que hay que recorrer, con la ayuda de un mapa (y a veces una brújula), una serie de puntos de control en el orden establecido y en el menor tiempo posible. Nació en los países escandinavos y hoy se practica en todo el mundo.</p><p>Sus elementos son:</p><p>• El <b>mapa</b>, con el recorrido marcado.<br>• Las <b>balizas</b>: prismas de tela de color <b>naranja y blanco</b> que se colocan en los puntos de control.<br>• La <b>tarjeta de control</b>: una cartulina con casillas numeradas. En cada baliza hay una <b>pinza</b> que marca un dibujo de agujeritos diferente; se pica la casilla correspondiente para demostrar que se ha pasado por allí. En las competiciones se usa una tarjeta electrónica.<br>• La <b>descripción de controles</b>: una tabla que indica dónde está exactamente cada baliza («al pie de la roca», «en la esquina de la valla»).</p><p>Tipos de recorrido:</p><p>• <b>En línea</b>: hay que pasar por todos los controles en orden.<br>• <b>Score</b>: se pueden visitar los controles en el orden que quieras, cada uno vale unos puntos y hay un tiempo límite.<br>• <b>Por relevos</b> o por parejas.</p><p>En el colegio, podemos empezar con recorridos en el patio o el gimnasio, con planos sencillos, antes de salir a un parque o al monte. ¡Gana quien mejor piensa, no solo quien corre más!</p>`,
      svg: svg("Baliza naranja y blanca con pinza y tarjeta de control con casillas numeradas", `${tit("Baliza y tarjeta")}<path d="M75 104 V150" stroke="var(--ink)" stroke-width="2"/><path d="M52 56 H98 V102 H52z" fill="#fff"/><path d="M98 56 V102 H52z" fill="#f97316"/><path d="M52 56 H98 V102 H52z" fill="none" stroke="var(--ink)" stroke-width="1.5"/><rect x="66" y="112" width="18" height="10" fill="var(--red)"/>${et(75, 166, "baliza", 80, { size: 11, color: COL.naranja })}<rect x="140" y="58" width="104" height="80" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[...Array(8)].map((_, i) => `<rect x="${146 + (i % 4) * 24}" y="${66 + Math.floor(i / 4) * 34}" width="20" height="28" fill="none" stroke="var(--line)"/>${t(156 + (i % 4) * 24, 78 + Math.floor(i / 4) * 34, String(i + 1), { size: 9, weight: 400 })}`).join("")}${et(192, 160, "tarjeta de control", 110, { size: 11, color: COL.azul })}`),
    },
    {
      html: `<h3>Senderismo y señales de los caminos</h3><p>El <mark>senderismo</mark> es caminar por la naturaleza siguiendo senderos o caminos. Es una actividad saludable que se puede practicar a cualquier edad y en familia.</p><p>En España hay miles de kilómetros de <b>senderos balizados</b>, señalizados con marcas de pintura en piedras, árboles o postes:</p><p>• <b>GR</b> (gran recorrido): marcas <b>blancas y rojas</b>. Son rutas de más de 50 kilómetros, que se hacen en varias etapas.<br>• <b>PR</b> (pequeño recorrido): marcas <b>blancas y amarillas</b>. Rutas de entre 10 y 50 kilómetros, para hacer en una jornada.<br>• <b>SL</b> (sendero local): marcas <b>blancas y verdes</b>. Rutas cortas, de menos de 10 kilómetros.</p><p>Las marcas significan:</p><p>• Dos rayas paralelas: <b>continuidad</b>, vas por el buen camino.<br>• Dos rayas con un giro: <b>cambio de dirección</b>.<br>• Una cruz (aspa): <b>dirección equivocada</b>, por aquí no.</p><p>Antes de salir de excursión hay que <b>planificar</b>: consultar la ruta, su distancia y su dificultad, mirar la previsión del tiempo, avisar a alguien de adónde vamos y a qué hora pensamos volver, y llevar la mochila preparada: agua, comida (fruta, frutos secos, bocadillo), gorra, crema solar, chubasquero, un pequeño botiquín, el móvil cargado y un silbato.</p>`,
      svg: svg("Señales de sendero: GR blanco y rojo, PR blanco y amarillo, SL blanco y verde; continuidad, giro y dirección equivocada", `${tit("Señales del sendero")}${[["GR", "#dc2626", 40], ["PR", "#eab308", 130], ["SL", "#16a34a", 220]].map(([s, c, x]) => `<rect x="${x - 22}" y="44" width="44" height="8" fill="#fff" stroke="var(--line)"/><rect x="${x - 22}" y="54" width="44" height="8" fill="${c}"/>${et(x, 78, s, 50, { size: 12, color: c })}`).join("")}<g transform="translate(40 120)"><rect x="-18" y="-8" width="36" height="6" fill="#fff" stroke="var(--line)"/><rect x="-18" y="0" width="36" height="6" fill="#dc2626"/></g><g transform="translate(130 120)"><path d="M-18 -4 h22 l10 -12" stroke="#d1d5db" stroke-width="5" fill="none"/><path d="M-18 4 h28 l10 -12" stroke="#dc2626" stroke-width="5" fill="none"/></g><g transform="translate(220 120)"><path d="M-14 -12 L14 12" stroke="#d1d5db" stroke-width="5"/><path d="M-14 12 L14 -12" stroke="#dc2626" stroke-width="5"/></g>${tx(40, 150, "sigue", 70, { weight: 700 })}${tx(130, 150, "gira", 70, { weight: 700 })}${tx(220, 150, "por aquí no", 80, { weight: 700 })}`),
      video: vid("490Yu-0c7oU"),
    },
    {
      html: `<h3>Respetar la naturaleza</h3><p>Cuando salimos al medio natural somos <b>visitantes</b> en la casa de muchos seres vivos. Por eso debemos dejarlo todo igual o mejor de como lo encontramos:</p><p>• <b>No dejar basura</b>: todo lo que llevamos lo traemos de vuelta, incluidos los restos orgánicos como cáscaras de fruta, que tardan en descomponerse y atraen a animales que no deberían comerlas.<br>• <b>No hacer fuego</b>: es una de las principales causas de incendios forestales.<br>• <b>Seguir los caminos</b> marcados: así no pisamos plantas ni erosionamos el suelo.<br>• <b>No arrancar plantas</b> ni flores, ni coger piedras, nidos o fósiles. ¡Mejor una foto!<br>• <b>No molestar a los animales</b>: observarlos en silencio y desde lejos; no darles de comer.<br>• <b>No hacer ruido</b> innecesario: gritos y música alta asustan a la fauna y molestan a otros excursionistas.<br>• <b>Cerrar las puertas</b> y cancelas de los prados que atravesemos, para que no se escape el ganado.<br>• <b>Respetar las propiedades</b> y los cultivos.<br>• No beber agua de fuentes que no estén señalizadas como potables.</p><p>En los espacios naturales protegidos, como los parques nacionales, estas normas son aún más estrictas.</p><p>Un buen lema para cualquier salida: «<b>No dejes más huella que la de tus pasos</b>».</p>`,
      svg: svg("Normas para respetar la naturaleza: no dejar basura, no hacer fuego, seguir caminos, no molestar a los animales", `${tit("Huella cero")}${arbol(40, 160, 1)}${filas([["basura", "de vuelta a casa", COL.marron], ["fuego", "nunca", COL.rojo], ["caminos", "no salirse", COL.verde], ["animales", "mirar sin molestar", COL.azul]], 52, 30, { x: 90, wa: 70, wb: 120 })}${tx(150, 172, "solo la huella de tus pasos", 200, { weight: 700 })}`),
    },
    {
      html: `<h3>¿Y si me pierdo?</h3><p>Aunque tomemos precauciones, puede ocurrir que nos separemos del grupo o no encontremos el camino. Lo más importante es <b>mantener la calma</b>. Recuerda esta secuencia:</p><p>1. <b>Para</b>. No sigas andando sin rumbo: cuanto más te muevas, más difícil será encontrarte. Un consejo muy conocido es «abrazar un árbol»: quedarse junto a un punto fijo.</p><p>2. <b>Piensa</b>. ¿Cuándo vi al grupo por última vez? ¿Recuerdo algún elemento del camino? Si lo tienes claro y está muy cerca, vuelve al último punto conocido. Si no, quédate donde estás.</p><p>3. <b>Haz que te vean y te oigan</b>. Busca un lugar despejado cercano, ponte ropa de colores llamativos y usa el <b>silbato</b>: tres pitidos seguidos son la señal internacional de socorro. Silbar cansa menos que gritar y se oye mucho más lejos.</p><p>4. <b>Pide ayuda</b>. Si tienes móvil con cobertura, llama al <b>112</b>. Explica qué te ha pasado y, si sabes, da tus coordenadas, que aparecen en el mapa del móvil. Mantén el móvil con batería: apaga lo que no necesites.</p><p>5. <b>Protégete</b>: abrígate, resguárdate del sol o de la lluvia y bebe agua a pequeños sorbos.</p><p>En el colegio, antes de cada actividad de orientación, el profesor indica una <b>hora de regreso</b> y un <b>punto de encuentro</b>. Respetarlos es tu responsabilidad.</p>`,
      svg: svg("Si te pierdes: para, piensa, hazte ver y oír con el silbato, pide ayuda al 112 y protégete", `${tit("Si me pierdo")}${columna([["1. para: quieto", COL.rojo], ["2. piensa", COL.naranja], ["3. silbato: 3 pitidos", COL.azul], ["4. llama al 112", COL.verde]], 130, 200, 38, 24, 10)}${tx(130, 176, "5. abrígate y bebe agua", 236, { weight: 700, color: COL.morado })}`),
    },
  ],
  figura: {
    titulo: "La orientación en la naturaleza en ocho ideas",
    svg: rejilla([
      ["Puntos cardinales", "N, S, E, O", COL.rojo],
      ["Sol", "sale por el este", COL.sol],
      ["Estrella Polar", "señala el norte", COL.azul],
      ["Brújula", "aguja roja al norte", COL.gris],
      ["Mapa", "colores y leyenda", COL.verde],
      ["Orientar", "mapa como el terreno", COL.morado],
      ["Balizas", "naranja y blanco", COL.naranja],
      ["Si me pierdo", "parar y 112", COL.agua],
    ], 4, 86, "Resumen de la orientación en la naturaleza"),
  },
  video: vgen("3lNLvuOo18s", "orientación deportiva para niños mapa brújula"),
  ejemplos: [
    { enunciado: "Son las 9 de la mañana y el sol está a tu derecha. ¿Hacia dónde miras?",
      pasos: ["Por la mañana el sol está hacia el este.", "Si el este está a tu derecha, tienes delante el norte."],
      resultado: "Miras hacia el norte." },
    { enunciado: "En un mapa de escala 1:5.000, dos balizas están separadas 4 cm. ¿Qué distancia real hay?",
      pasos: ["1 cm del mapa son 5.000 cm reales = 50 m.", "4 × 50 = 200."],
      resultado: "200 metros." },
    { enunciado: "Ves en un árbol una marca blanca y amarilla con forma de aspa. ¿Qué significa?",
      pasos: ["Blanco y amarillo: sendero PR.", "El aspa indica dirección equivocada."],
      resultado: "Que por ese camino no sigue el PR: hay que volver." },
  ],
  errores: [
    "Pensar que el musgo indica siempre el norte: no es fiable.",
    "Usar la brújula cerca del móvil o de objetos metálicos: la aguja se desvía.",
    "No orientar el mapa y leerlo siempre con el norte hacia arriba aunque giremos.",
    "Seguir andando sin rumbo al perderse: hay que parar y pedir ayuda.",
    "Dejar restos de fruta en el campo pensando que no contaminan.",
  ],
  ejercicios: [
    { q: "¿Qué es orientarse? ¿De dónde viene la palabra?", sol: "Saber dónde estamos y hacia dónde ir. Viene de «oriente», por donde sale el Sol." },
    { q: "Nombra los cuatro puntos cardinales y los cuatro intermedios.", sol: "Norte, sur, este, oeste; noreste, sureste, suroeste, noroeste." },
    { q: "¿Cómo puedes encontrar el norte de noche en el hemisferio norte?", sol: "Buscando la estrella Polar a partir de la Osa Mayor." },
    { q: "¿Por qué la aguja de la brújula señala el norte?", sol: "Porque es un imán y la Tierra se comporta como un gran imán." },
    { q: "Explica qué representan los colores amarillo, verde, azul y marrón en un mapa de orientación.", sol: "Amarillo: zona abierta. Verde: vegetación densa. Azul: agua. Marrón: relieve." },
    { q: "¿Qué significan el triángulo, el círculo y el doble círculo en un recorrido?", sol: "Salida, control y meta." },
    { q: "Explica dos formas de orientar un mapa.", sol: "Con la brújula, alineando la aguja con el norte del mapa; o con el terreno, haciendo coincidir los elementos del mapa con la realidad." },
    { q: "¿Qué es una baliza y cómo se demuestra que se ha pasado por ella?", sol: "Un prisma naranja y blanco en el punto de control; se marca la tarjeta con la pinza." },
    { q: "Une cada sendero con sus colores: GR, PR, SL.", sol: "GR: blanco y rojo. PR: blanco y amarillo. SL: blanco y verde." },
    { q: "Escribe los pasos a seguir si te pierdes.", sol: "Parar, pensar, hacerse ver y oír (silbato, tres pitidos), llamar al 112 y protegerse." },
  ],
  quiz: [
    { q: "El sol sale por el…", o: ["este", "oeste", "norte"], a: 0, e: "Por el este." },
    { q: "La estrella Polar indica el…", o: ["sur", "norte", "este"], a: 1, e: "El norte." },
    { q: "La punta roja de la aguja de la brújula señala el…", o: ["sur", "oeste", "norte"], a: 2, e: "El norte." },
    { q: "En un mapa de orientación, el azul representa…", o: ["agua", "caminos", "prados"], a: 0, e: "Agua." },
    { q: "Las balizas son de color…", o: ["verde y negro", "naranja y blanco", "azul y rojo"], a: 1, e: "Naranja y blanco." },
    { q: "La salida del recorrido se marca con un…", o: ["círculo", "doble círculo", "triángulo"], a: 2, e: "Un triángulo." },
    { q: "Las marcas blancas y rojas son de un sendero…", o: ["GR", "PR", "SL"], a: 0, e: "GR, gran recorrido." },
    { q: "La señal de socorro con silbato es…", o: ["un pitido largo", "tres pitidos seguidos", "diez pitidos"], a: 1, e: "Tres pitidos." },
    { q: "Si te pierdes, lo primero es…", o: ["correr", "gritar sin parar", "parar y mantener la calma"], a: 2, e: "Parar." },
    { q: "Las curvas de nivel muy juntas indican terreno…", o: ["muy empinado", "llano", "con agua"], a: 0, e: "Muy empinado." },
  ],
  examen: [
    { q: "La brújula se inventó en…", o: ["España", "China", "Escandinavia"], a: 1, e: "En China." },
    { q: "El verde oscuro en un mapa de orientación significa…", o: ["prado", "agua", "vegetación muy densa"], a: 2, e: "Vegetación difícil de atravesar." },
    { q: "Un aspa en una señal de sendero significa…", o: ["dirección equivocada", "continuidad", "fuente"], a: 0, e: "Por aquí no." },
    { q: "En un recorrido score…", o: ["hay que seguir un orden", "eliges el orden de los controles", "no hay mapa"], a: 1, e: "Se eligen el orden y los puntos." },
  ],
  feynman: ["Cómo orientarse con el sol y las estrellas", "Cómo se usa una brújula y se orienta un mapa", "Qué hacer si te pierdes en el monte"],
  mapa: mapa("ORIENTACIÓN", "var(--pri)", [
    ["Naturaleza", "sol · estrella Polar", COL.sol],
    ["Instrumentos", "brújula · mapa", COL.azul],
    ["Deporte", "balizas · tarjeta · recorrido", COL.naranja],
    ["Seguridad", "senderos · respeto · 112", COL.verde],
  ], 250),
  tarjetas: [
    ["Puntos cardinales", "Norte, sur, este y oeste."],
    ["Estrella Polar", "Estrella que indica el norte."],
    ["Brújula", "Instrumento con aguja magnética que señala el norte."],
    ["Mapa de orientación", "Mapa detallado con colores y símbolos especiales."],
    ["Curvas de nivel", "Líneas que unen puntos a la misma altura."],
    ["Orientar el mapa", "Hacer coincidir el mapa con el terreno."],
    ["Baliza", "Prisma naranja y blanco del punto de control."],
    ["Sendero GR", "Gran recorrido, marcas blancas y rojas."],
  ],
  familias: ["Buscad juntos la Osa Mayor y la estrella Polar una noche despejada.", "Haced un plano de casa y esconded «balizas» para encontrarlas.", "Elegid un sendero PR o SL cercano y preparad la mochila juntos.", "Practicad qué haríais si os perdéis: punto de encuentro y silbato."],
  profesores: PROF("Educación Física: actividades en el medio natural; orientación con referencias naturales; brújula; lectura e interpretación de planos y mapas; carrera de orientación; senderismo seguro y respetuoso", ["Carrera de orientación en el patio con plano a escala del colegio.", "Taller de brújula y orientación del mapa.", "Salida a un sendero balizado con normas de seguridad y huella cero."]),
  fuentes: [RD, wiki("Orientación (deporte)", "Orientación_(deporte)"), wiki("Brújula", "Brújula"), wiki("Sendero de Gran Recorrido", "Sendero_de_Gran_Recorrido"), { t: "Federación Española de Orientación", url: "https://www.fedo.org/" }],
  revisado: REV,
};

// ---------- Nivel libro (5º de Primaria) ----------
const { L: L5, H: H5, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 85,
  objetivos: ["Expresar direcciones con los ocho rumbos de la rosa de los vientos y en grados", "Conocer las modalidades de las carreras de orientación", "Descubrir los Parques Nacionales de España", "Orientarse en la ciudad y conocer cómo se orientan los animales"],
  lectura: { titulo: "La baliza número 7", html: `<p>Era la primera carrera de orientación de Óscar y Valeria. Les dieron un mapa del parque, una brújula y una tarjeta con nueve casillas. Tenían que encontrar las balizas, unos prismas de tela naranja y blanca, en el orden marcado.</p><p>Las seis primeras fueron fáciles. Pero la baliza 7 estaba al otro lado de un pequeño bosque.</p><p>—Vamos recto, por el medio —propuso Óscar.</p><p>—Espera —dijo Valeria—. Primero orientemos el mapa.</p><p>Giraron el mapa hasta que el norte del papel coincidió con el norte de la brújula. Vieron que la baliza estaba al nordeste, a unos 200 metros. Valeria midió con sus dobles pasos: en el entrenamiento había calculado que daba unos 70 cada 100 metros.</p><p>Entraron en el bosque. Los árboles tapaban todo y Óscar empezó a ponerse nervioso.</p><p>—¡Nos hemos perdido!</p><p>—No —respondió Valeria, mirando la brújula—. Seguimos rumbo nordeste. Llevo 120 dobles pasos. Faltan unos 20.</p><p>Contaron juntos los últimos pasos… y allí estaba, junto a una roca grande: la baliza 7. Óscar picó la tarjeta con una sonrisa enorme.</p><p>No ganaron la carrera, pero aquel día aprendieron algo importante: en la naturaleza, antes de correr, hay que pensar.</p>` },
  tras: {
    "La brújula": [
      ["La rosa de los vientos y los grados", `<p>Los cuatro puntos cardinales (norte, sur, este y oeste) a veces no son suficientes. Por eso usamos también los <b>puntos intermedios</b>, que juntos forman la <b>rosa de los vientos</b>:</p><ul><li><b>Nordeste (NE)</b>: entre el norte y el este.</li><li><b>Sudeste (SE)</b>: entre el sur y el este.</li><li><b>Suroeste (SO)</b>: entre el sur y el oeste.</li><li><b>Noroeste (NO)</b>: entre el norte y el oeste.</li></ul><p>Las brújulas de orientación llevan además un círculo graduado de <b>0 a 360 grados</b>, porque una vuelta completa tiene 360°. Cada dirección es un <b>rumbo</b>, que se mide en grados desde el norte y en el sentido de las agujas del reloj:</p><ul><li>Norte = <b>0°</b> (o 360°); nordeste = <b>45°</b></li><li>Este = <b>90°</b>; sudeste = <b>135°</b></li><li>Sur = <b>180°</b>; suroeste = <b>225°</b></li><li>Oeste = <b>270°</b>; noroeste = <b>315°</b></li></ul><p>Los montañeros, los marinos y los pilotos dan los rumbos en grados porque son muy precisos: «rumbo 60°» indica una dirección exacta, un poco más hacia el este que el nordeste. Fíjate en que entre dos puntos seguidos de la rosa hay siempre <b>45°</b>, la octava parte de 360°.</p>`,
        L5.tabla("Rumbos en grados", ["rumbo", "grados", "rumbo", "grados"], [["N", "0°", "S", "180°"], ["NE", "45°", "SO", "225°"], ["E", "90°", "O", "270°"], ["SE", "135°", "NO", "315°"]], cRO)],
    ],
    "La carrera de orientación": [
      ["Modalidades de orientación", `<p>La orientación es un deporte con muchas modalidades. En todas hay que encontrar <b>balizas</b>, unos prismas de tela naranja y blanca, con la ayuda de un mapa:</p><ul><li><b>Orientación a pie</b>: la más común. Se corre por bosques, parques o incluso ciudades.</li><li><b>Orientación en bicicleta de montaña</b> (MTBO): el mapa va sujeto al manillar y se recorren caminos y senderos.</li><li><b>Orientación en esquí</b>: en invierno, sobre la nieve, con esquís de fondo.</li><li><b>Orientación de precisión</b> (trail-O): no gana el más rápido, sino quien identifica correctamente la baliza buena entre varias. Pueden participar en igualdad personas con movilidad reducida.</li></ul><p>También hay distintos <b>formatos</b>:</p><ul><li><b>En línea</b>: las balizas se buscan en un orden fijo. Gana quien tarda menos.</li><li><b>Score</b> o por puntuación: puedes buscar las balizas en el orden que quieras durante un tiempo límite. Cada una vale puntos y hay que decidir bien la ruta.</li><li><b>Relevos</b>: cada miembro del equipo hace una parte del recorrido.</li></ul><p>Para demostrar que has pasado por una baliza se usa una <b>pinza</b> que marca un dibujo en la tarjeta, o una <b>tarjeta electrónica</b> que registra el tiempo exacto.</p>`,
        L5.filas("Modalidades y formatos de orientación", [["a pie", "bosque o ciudad", cVE], ["en bici", "MTBO", cAZ], ["en esquí", "sobre la nieve", cMO], ["precisión", "trail-O", cNA], ["score", "orden libre, puntos", cRO]])],
    ],
    "Respetar la naturaleza": [
      ["Los Parques Nacionales de España", `<p>Los <b>Parques Nacionales</b> son los espacios naturales con mayor nivel de protección. Se eligen por su gran valor: paisajes, plantas y animales únicos. En España hay <b>16 Parques Nacionales</b>.</p><ul><li>Los dos primeros se crearon en <b>1918</b>: la <b>Montaña de Covadonga</b>, hoy parte de los <b>Picos de Europa</b>, y el valle de <b>Ordesa</b>, en el Pirineo de Huesca.</li><li>El <b>Teide</b>, en Tenerife, con el pico más alto de España (3715 m), es el más visitado.</li><li><b>Doñana</b>, en Andalucía, es una de las zonas húmedas más importantes de Europa: cada año pasan por allí millones de aves migratorias.</li><li>Algunos son <b>marítimo-terrestres</b>, como las <b>Islas Atlánticas de Galicia</b> o el <b>archipiélago de Cabrera</b> en Baleares: protegen también el fondo del mar.</li><li>El más reciente es la <b>Sierra de las Nieves</b>, en Málaga, declarado en 2021.</li></ul><p>En un Parque Nacional las normas son estrictas: no se puede salir de los senderos señalizados, hacer fuego, acampar fuera de las zonas permitidas, coger plantas o piedras, ni molestar a los animales. Cumplirlas es la mejor forma de que nuestros nietos también puedan disfrutarlos.</p>`,
        L5.filas("Algunos Parques Nacionales de España", [["Picos de Europa", "1918, el primero", cVE], ["Ordesa", "Pirineo, 1918", cAZ], ["Teide", "el más visitado", cRO], ["Doñana", "aves migratorias", cNA], ["Sierra de las Nieves", "el más nuevo", cMO]]), ["tYctKDbSwOs", "10 Parques nacionales de España | Imprescindibles", "El Viajero Feliz", 23129]],
    ],
  },
  final: [
    ["Orientarse en la ciudad", `<p>No hace falta ir al monte para orientarse: en la ciudad también lo hacemos cada día. Estas son algunas pistas útiles:</p><ul><li><b>El plano o callejero</b>: igual que un mapa de orientación, conviene girarlo para que coincida con lo que ves.</li><li><b>Los números de las calles</b>: normalmente los números <b>pares</b> están a un lado de la calle y los <b>impares</b> al otro. Suelen empezar en el extremo más cercano al centro de la ciudad, así que si los números aumentan, te estás alejando del centro.</li><li><b>Los puntos de referencia</b>: edificios altos, una iglesia, una plaza, un río, una montaña que se ve a lo lejos. Fijarse en ellos ayuda a no perderse.</li><li><b>Las señales</b>: carteles de calles, indicaciones de monumentos, estaciones de metro y paradas de autobús con sus planos.</li><li><b>Preguntar</b>: a un policía, en una tienda o a un adulto de confianza.</li></ul><p>Un buen ejercicio es dibujar el <b>plano de tu barrio</b> con el camino de casa al colegio: las calles, los cruces, los semáforos y los lugares importantes. Y si alguna vez te pierdes, quédate en un lugar seguro y visible y pide ayuda; es importante saberse de memoria la dirección de casa y un teléfono de la familia.</p>`,
      L5.filas("Pistas para orientarse en la ciudad", [["plano", "girarlo como la calle", cAZ], ["números", "pares e impares", cVE], ["referencias", "torres, plazas, ríos", cNA], ["señales", "carteles y metro", cMO], ["preguntar", "a un adulto de confianza", cRO]])],
    ["Animales que saben orientarse", `<p>Muchos animales recorren enormes distancias sin mapa ni brújula. ¿Cómo lo hacen?</p><ul><li><b>Las aves migratorias</b>, como cigüeñas, golondrinas o grullas, viajan cada año entre Europa y África. Se orientan con el <b>sol</b> durante el día, con las <b>estrellas</b> por la noche y, además, son capaces de percibir el <b>campo magnético de la Tierra</b>, como si llevaran una brújula interna. El <b>charrán ártico</b> es el campeón: puede recorrer unos 70 000 kilómetros al año entre el Ártico y la Antártida.</li><li><b>Las tortugas marinas</b> cruzan océanos y, años después, regresan a poner sus huevos en la misma playa en la que nacieron, guiándose también por el campo magnético.</li><li><b>Los salmones</b> vuelven desde el mar al río donde nacieron reconociendo su <b>olor</b>.</li><li><b>Las abejas</b> usan la posición del sol y, al volver a la colmena, hacen una «danza» que indica a sus compañeras la dirección y la distancia de las flores.</li><li><b>Los murciélagos</b> se orientan en la oscuridad con la <b>ecolocalización</b>: emiten sonidos y escuchan su eco.</li></ul><p>Los científicos todavía investigan muchos de estos misterios.</p>`,
      L5.filas("Cómo se orientan los animales", [["aves", "sol, estrellas, magnetismo", cAZ], ["tortugas", "campo magnético", cVE], ["salmones", "olor del río", cNA], ["abejas", "el sol y su danza", cMO], ["murciélagos", "ecolocalización", cRO]]), ["EyaWyq1wwls", "Pregunta - ¿Cómo se orientan las aves en sus migraciones?", "Canal Once", 29671]],
  ],
  ejemplos: [
    ["Vas en rumbo norte (0°) y giras 90° a la derecha. ¿Hacia dónde vas? ¿Y si giras otros 45° más?", ["0° + 90° = 90°: este.", "90° + 45° = 135°: sudeste."], "Al este y después al sudeste"],
    ["Valeria da 70 dobles pasos cada 100 metros. ¿Cuántos dará para recorrer 250 metros?", ["100 m → 70 dobles pasos.", "250 m = 2,5 × 100 m.", "2,5 × 70 = 175."], "175 dobles pasos"],
  ],
  errores: ["Pensar que el rumbo se cuenta en sentido contrario a las agujas del reloj: se cuenta desde el norte hacia el este.", "Salir de los senderos en un Parque Nacional."],
  ejercicios: [
    ["b", "Escribe los ocho rumbos de la rosa de los vientos.", "N, NE, E, SE, S, SO, O, NO."],
    ["b", "¿Cuántos grados corresponden al oeste?", "270°."],
    ["b", "¿De qué colores son las balizas de orientación?", "Naranja y blanco."],
    ["b", "¿Cuántos Parques Nacionales hay en España?", "16."],
    ["b", "¿Cómo se orientan los murciélagos en la oscuridad?", "Con la ecolocalización."],
    ["m", "¿Qué rumbo en grados está justo entre el sur y el oeste?", "225°, el suroeste."],
    ["m", "Explica la diferencia entre el formato en línea y el formato score.", "En línea: orden fijo, gana el más rápido. Score: orden libre y gana quien suma más puntos en el tiempo límite."],
    ["m", "¿Qué hizo Valeria para encontrar la baliza 7?", "Orientó el mapa, siguió el rumbo nordeste con la brújula y contó dobles pasos."],
    ["m", "Escribe tres normas de un Parque Nacional.", "No salir de los senderos, no hacer fuego, no coger plantas ni molestar a los animales."],
    ["m", "Si en una calle los números aumentan, ¿te acercas o te alejas del centro?", "Normalmente te alejas."],
    ["a", "Dibuja el plano de tu camino de casa al colegio con cinco puntos de referencia.", "Respuesta libre."],
    ["a", "Calcula cuántos dobles pasos das en 100 metros y úsalo para medir el patio.", "Respuesta libre."],
    ["a", "Investiga un Parque Nacional: dónde está, qué protege y qué animales viven allí.", "Respuesta libre."],
    ["a", "Diseña una carrera de orientación de formato score en el colegio con 8 balizas.", "Respuesta libre."],
  ],
  quiz: [
    ["El nordeste corresponde a…", ["45°", "90°", "135°"], "Entre N y E."],
    ["Entre dos rumbos seguidos de la rosa hay…", ["45°", "90°", "30°"], "360 : 8."],
    ["La orientación de precisión se llama…", ["trail-O", "MTBO", "score"], "Identificar balizas."],
    ["El Parque Nacional más visitado es…", ["el Teide", "Cabrera", "Ordesa"], "Tenerife."],
    ["Los salmones vuelven a su río guiándose por…", ["el olor", "las estrellas", "el eco"], "Olfato."],
  ],
  examen: [
    ["Los primeros Parques Nacionales de España se crearon en…", ["1918", "1992", "2021"], "Covadonga y Ordesa."],
    ["En la calle, los números pares suelen estar…", ["a un lado y los impares al otro", "mezclados", "solo en las plazas"], "Pares e impares."],
  ],
  tarjetas: [
    ["Rosa de los vientos", "N, NE, E, SE, S, SO, O, NO."],
    ["Rumbo en grados", "Desde el norte (0°) en el sentido de las agujas del reloj."],
    ["Parques Nacionales", "16 en España; los primeros, de 1918."],
    ["Animales orientadores", "Aves, tortugas, salmones, abejas, murciélagos."],
  ],
  glosario: [
    ["Rosa de los vientos", "Figura con los puntos cardinales e intermedios."],
    ["Rumbo", "Dirección que se sigue, medida en grados desde el norte."],
    ["Nordeste", "Dirección entre el norte y el este."],
    ["Baliza", "Prisma naranja y blanco que marca un punto de control."],
    ["Score", "Formato de orientación con orden libre y puntos."],
    ["Pinza", "Instrumento que marca la tarjeta en cada baliza."],
    ["Parque Nacional", "Espacio natural con la máxima protección."],
    ["Marítimo-terrestre", "Que protege tierra y mar."],
    ["Punto de referencia", "Elemento visible que ayuda a orientarse."],
    ["Migración", "Viaje periódico de los animales entre dos lugares."],
    ["Campo magnético", "Fuerza invisible de la Tierra que orienta las brújulas."],
    ["Ecolocalización", "Orientarse emitiendo sonidos y escuchando su eco."],
  ],
  situacion: {
    titulo: "Gran carrera de orientación del colegio",
    reto: "La clase diseña, organiza y celebra una carrera de orientación en el colegio o en un parque cercano para alumnos de otro curso.",
    pasos: ["Dibujad un mapa del recinto con su escala y su norte, y elegid 8 puntos para las balizas.", "Fabricad las balizas y las tarjetas, y escribid el rumbo en grados de una baliza a la siguiente.", "Elegid el formato (en línea o score) y preparad las normas, incluidas las de respeto al entorno.", "Celebrad la carrera, cronometrad y repasad juntos qué rutas fueron las mejores."],
    producto: "Un mapa con balizas, tarjetas de control y una carrera de orientación organizada por la clase.",
    evaluacion: ["Usa los ocho rumbos y los grados correctamente.", "Orienta el mapa y sigue un rumbo con la brújula.", "Conoce las modalidades y formatos de la orientación.", "Respeta las normas de los espacios naturales."],
  },
});
