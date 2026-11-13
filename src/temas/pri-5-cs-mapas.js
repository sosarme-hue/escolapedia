// Ciencias Sociales 5º de Primaria: el planeta Tierra y su representación, los mapas. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, sol } = require("./_pri5b");

// Rosa de los vientos sencilla.
const rosa = (x, y, r = 26) => `<g transform="translate(${x} ${y})"><path d="M0 ${-r} L6 -6 L${r} 0 L6 6 L0 ${r} L-6 6 L${-r} 0 L-6 -6z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 ${-r} L6 -6 L0 0z M${r} 0 L6 6 L0 0z M0 ${r} L-6 6 L0 0z M${-r} 0 L-6 -6 L0 0z" fill="var(--red)"/>${t(0, -r - 4, "N", { size: 11 })}${t(0, r + 12, "S", { size: 11 })}${t(r + 8, 4, "E", { size: 11 })}${t(-r - 8, 4, "O", { size: 11 })}</g>`;
// Globo terráqueo.
const globo = (x, y, r = 44) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#bae6fd" stroke="var(--water)" stroke-width="2"/><path d="M${x - 20} ${y - 30} q14 -6 22 6 q10 12 -4 22 q-12 4 -18 -8z M${x + 6} ${y + 10} q16 -4 22 10 q-4 16 -18 14 q-10 -10 -4 -24z" fill="#86efac" stroke="#15803d" stroke-width="1.2"/>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "El planeta Tierra y su representación: mapas",
  minutos: 50,
  objetivos: ["Describir la forma de la Tierra y sus movimientos", "Explicar cómo se representa la Tierra: globo terráqueo, planisferio, mapas y planos", "Reconocer los elementos de un mapa", "Calcular distancias reales usando la escala", "Diferenciar mapas físicos, políticos y temáticos", "Orientarse con los puntos cardinales y usar herramientas digitales"],
  claves: ["Tierra", "rotación", "traslación", "globo terráqueo", "planisferio", "mapa", "plano", "título", "leyenda", "escala", "rosa de los vientos", "puntos cardinales", "mapa físico", "mapa político", "mapa temático", "GPS"],
  pregunta: {
    texto: "La Tierra es redonda como una pelota, pero los mapas de las paredes del colegio son planos. ¿Cómo se puede pasar una pelota a un papel sin que nada cambie?",
    respuesta: "No se puede del todo. Si pelas una naranja e intentas aplastar la piel sobre la mesa, se rompe o se estira. Con la Tierra pasa lo mismo: todos los <mark>mapas</mark> deforman un poco la realidad. Por eso el único modelo que respeta las formas y los tamaños es el <mark>globo terráqueo</mark>, y los mapas planos son muy útiles, pero siempre «estiran» algunas zonas.",
  },
  bloques: [
    {
      html: `<h3>La forma de la Tierra</h3><p>La <mark>Tierra</mark> es el planeta en el que vivimos. Es el tercer planeta más cercano al Sol y el único en el que conocemos la existencia de vida.</p><p>Su forma es casi una <b>esfera</b>, aunque está un poco <b>achatada por los polos</b> y algo abultada en el ecuador, como una naranja. Esta forma se llama <b>geoide</b>. Su diámetro es de unos <b>12.700 km</b> y su contorno por el ecuador mide unos <b>40.000 km</b>: si pudieras darle la vuelta en coche a 100 km/h sin parar, tardarías más de dos semanas.</p><p>Hace siglos mucha gente creía que la Tierra era plana. Pero ya los antiguos griegos observaron pistas de que era redonda: en los eclipses de Luna, la sombra de la Tierra es curva, y cuando un barco se aleja en el mar, desaparece primero el casco y después las velas. En 1522, la expedición de <b>Magallanes y Elcano</b> completó la <b>primera vuelta al mundo</b> y lo demostró. Hoy, las fotografías tomadas desde el espacio nos muestran una esfera azul, porque la mayor parte de su superficie, casi tres cuartas partes, está cubierta de agua.</p>`,
      svg: svg("La Tierra es casi una esfera achatada por los polos, con 40.000 km de contorno", `${tit("Una esfera achatada")}${globo(80, 102, 50)}${filas([["diámetro", "12.700 km", COL.azul], ["contorno", "40.000 km", COL.verde], ["agua", "casi 3/4", COL.agua]], 72, 32, { x: 146, wa: 64, wb: 60, dos: true })}`),
    },
    {
      html: `<h3>Los movimientos de la Tierra</h3><p>Aunque no lo notemos, la Tierra está siempre en movimiento. Realiza dos movimientos principales:</p><p>• La <mark>rotación</mark>: la Tierra gira sobre sí misma, alrededor de un eje imaginario que pasa por los polos, de oeste a este. Tarda <b>24 horas</b> en dar una vuelta completa, es decir, <b>un día</b>. La rotación provoca la sucesión de los <b>días y las noches</b>: la mitad de la Tierra que mira hacia el Sol está iluminada (es de día) y la otra mitad está a oscuras (es de noche). Por eso el Sol parece «salir» por el este y «ponerse» por el oeste.</p><p>• La <mark>traslación</mark>: la Tierra da vueltas alrededor del Sol siguiendo un camino con forma de elipse llamado <b>órbita</b>. Tarda <b>365 días y 6 horas</b> en completarla, es decir, <b>un año</b>. Como cada año sobran 6 horas, cada cuatro años se añade un día, el 29 de febrero: son los años <b>bisiestos</b>.</p><p>El eje de la Tierra está <b>inclinado</b>. Por eso, durante la traslación, los rayos del Sol llegan más rectos a unas zonas o a otras según la época del año, y se producen las <b>estaciones</b>: primavera, verano, otoño e invierno. Cuando en España es verano, en Argentina o Australia es invierno.</p>`,
      svg: svg("Rotación: 24 horas, día y noche. Traslación: 365 días, el año y las estaciones", `${tit("Rotación y traslación")}${sol(130, 104, 14)}<ellipse cx="130" cy="104" rx="100" ry="38" fill="none" stroke="var(--muted)" stroke-dasharray="5 4"/><circle cx="230" cy="104" r="11" fill="#60a5fa"/><path d="M230 104 m-11 0 a11 11 0 0 0 22 0z" fill="#1e3a8a" fill-opacity=".6"/><circle cx="30" cy="104" r="11" fill="#60a5fa"/>${et(52, 46, "rotación: 24 h", 90, { size: 11, color: COL.azul })}${tx(52, 60, "día y noche", 90)}${et(130, 164, "traslación: 365 días", 150, { size: 11, color: COL.naranja })}${tx(130, 178, "el año y las estaciones", 150)}`),
    },
    {
      html: `<h3>El globo terráqueo y el planisferio</h3><p>Para estudiar la Tierra la representamos de distintas formas:</p><p>• El <mark>globo terráqueo</mark> es una esfera que reproduce la Tierra a pequeño tamaño. Es la representación más <b>fiel</b>, porque respeta la forma, las distancias y el tamaño de los continentes y océanos. Pero tiene inconvenientes: solo se ve la mitad a la vez, es difícil de transportar y no permite ver detalles, como las calles de un pueblo.</p><p>• El <mark>planisferio</mark> o mapamundi es un mapa plano que muestra <b>toda la Tierra a la vez</b>. Es muy práctico, pero, como ya sabes, al pasar una esfera a un plano siempre se produce alguna <b>deformación</b>. En el planisferio más conocido, las zonas cercanas a los polos aparecen mucho más grandes de lo que son. Por ejemplo, Groenlandia parece casi tan grande como África, cuando en realidad África es unas catorce veces mayor.</p><p>Los cartógrafos, que son las personas que hacen mapas, usan distintos métodos llamados <b>proyecciones</b> para pasar la esfera al plano. Cada proyección deforma más unas cosas que otras, y se elige una u otra según para qué se vaya a usar el mapa.</p>`,
      svg: svg("Globo terráqueo, fiel pero de media vista, y planisferio, que muestra todo pero deforma", `${tit("Globo y planisferio")}${globo(62, 92, 38)}${et(62, 150, "globo terráqueo", 100, { size: 11, color: COL.azul })}${tx(62, 166, "fiel, pero media Tierra", 110)}<rect x="132" y="58" width="112" height="70" rx="6" fill="#bae6fd" stroke="var(--water)" stroke-width="2"/><path d="M144 72 q14 -6 20 6 q-4 14 -14 18z M174 70 q16 0 20 10 q-2 24 -14 34 q-10 -20 -6 -44z M206 68 q24 -4 30 14 q-10 10 -24 4z M216 104 q8 -2 12 8 q-6 8 -12 0z" fill="#86efac" stroke="#15803d"/>${et(188, 150, "planisferio", 100, { size: 11, color: COL.verde })}${tx(188, 166, "toda, pero deforma", 110)}`),
    },
    {
      html: `<h3>Mapas y planos</h3><p>Un <mark>mapa</mark> es una representación <b>plana</b>, <b>reducida</b> y <b>simplificada</b> de la superficie terrestre o de una parte de ella, vista desde arriba.</p><p>• <b>Plana</b>: se dibuja sobre una superficie lisa, como un papel o una pantalla.<br>• <b>Reducida</b>: todo aparece mucho más pequeño que en la realidad.<br>• <b>Simplificada</b>: no se dibuja todo, solo lo que interesa, usando símbolos y colores.</p><p>Cuando representamos un lugar <b>pequeño</b> y con mucho detalle, como una casa, un colegio, un barrio o una ciudad, se llama <mark>plano</mark>. En un plano de tu ciudad se ven las calles, las plazas, los parques y los edificios importantes. Los arquitectos usan planos para construir edificios.</p><p>Los mapas pueden representar zonas más grandes: un municipio, una comunidad autónoma, un país, un continente o el mundo entero. Cuanto más grande es la zona representada, menos detalles se pueden mostrar.</p><p>Existen mapas desde hace miles de años. Uno de los más antiguos que se conservan es una tablilla de barro de Babilonia de hace unos 2.500 años. Hoy los mapas se hacen con <b>fotografías aéreas</b> y de <b>satélite</b> y se consultan en el móvil.</p>`,
      svg: svg("Un plano representa un lugar pequeño con detalle; un mapa, zonas más grandes", `${tit("Plano o mapa")}<rect x="16" y="44" width="108" height="92" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M16 80 H124 M60 44 V136 M90 80 V136" stroke="#d6d3d1" stroke-width="6"/><rect x="24" y="52" width="28" height="20" fill="#fca5a5"/><rect x="68" y="88" width="16" height="40" fill="#86efac"/><rect x="98" y="52" width="20" height="20" fill="#93c5fd"/>${et(70, 156, "plano: barrio", 100, { size: 11, color: COL.rojo })}<rect x="136" y="44" width="108" height="92" rx="6" fill="#bae6fd" stroke="var(--ink)" stroke-width="2"/><path d="M150 60 q30 -10 60 2 q20 14 14 40 q-20 26 -54 18 q-30 -20 -20 -60z" fill="#fde68a" stroke="#a16207"/><circle cx="190" cy="86" r="4" fill="var(--red)"/>${et(190, 156, "mapa: país", 100, { size: 11, color: COL.azul })}`),
    },
    {
      html: `<h3>Los elementos de un mapa</h3><p>Para entender un mapa hay que fijarse en sus elementos:</p><p>• El <b>título</b>: dice qué representa el mapa y qué zona. Por ejemplo, «Mapa político de España» o «Ríos de Europa».</p><p>• La <mark>leyenda</mark>: es un cuadro que explica el significado de los <b>símbolos</b> y los <b>colores</b> que aparecen en el mapa. Por ejemplo, un punto negro puede ser una ciudad; una línea azul, un río; un avión, un aeropuerto; los tonos verdes, las llanuras; y los marrones, las montañas.</p><p>• La <mark>escala</mark>: indica cuántas veces se ha reducido la realidad para dibujar el mapa. Sirve para calcular distancias reales.</p><p>• La <mark>rosa de los vientos</mark> o la flecha del norte: indica la <b>orientación</b> del mapa, es decir, dónde está el norte. Casi todos los mapas se dibujan con el norte hacia arriba.</p><p>• Las <b>coordenadas</b>: unas líneas o números en los bordes que permiten localizar cualquier lugar con exactitud. Las estudiaremos en el tema de latitud y longitud.</p><p>• La <b>fuente</b> y la <b>fecha</b>: quién ha hecho el mapa y cuándo. Es importante, porque la realidad cambia: se construyen carreteras, crecen las ciudades o cambian las fronteras.</p>`,
      svg: svg("Elementos de un mapa: título, leyenda, escala y rosa de los vientos", `${tit("Elementos de un mapa")}<rect x="14" y="36" width="232" height="138" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${et(110, 54, "TÍTULO", 100, { size: 12, color: COL.azul })}<path d="M40 110 q30 -30 70 -10 q40 20 70 -20" stroke="var(--water)" stroke-width="3" fill="none"/><circle cx="110" cy="100" r="4" fill="var(--ink)"/>${rosa(214, 76, 18)}<rect x="22" y="130" width="76" height="38" rx="4" fill="#f1f5f9" stroke="var(--line)"/><circle cx="32" cy="142" r="3" fill="var(--ink)"/>${tx(64, 145, "ciudad", 50, { anchor: "middle" })}<path d="M26 158 h12" stroke="var(--water)" stroke-width="3"/>${tx(64, 161, "río", 50)}${et(60, 126, "leyenda", 70, { size: 10, color: COL.verde })}<path d="M160 160 h60" stroke="var(--ink)" stroke-width="3"/><path d="M160 156 v8 M190 156 v8 M220 156 v8" stroke="var(--ink)" stroke-width="2"/>${et(190, 150, "escala", 60, { size: 10, color: COL.rojo })}`),
      video: vid("YiR1aLIkwgM"),
    },
    {
      html: `<h3>La escala</h3><p>La <mark>escala</mark> indica la relación entre el tamaño del mapa y el tamaño real. Hay dos tipos:</p><p>• La <b>escala numérica</b> se escribe como una división, por ejemplo <b>1 : 100.000</b>. Significa que <b>1 cm en el mapa equivale a 100.000 cm en la realidad</b>, es decir, a 1 km (porque 100.000 cm = 1.000 m = 1 km).</p><p>• La <b>escala gráfica</b> es una línea o una barra dividida en partes iguales, en la que se indica cuánta distancia real representa cada parte. Por ejemplo, un segmento de 1 cm con la indicación «10 km». Tiene una ventaja: si ampliamos o reducimos el mapa en una fotocopiadora o en una pantalla, la barra también cambia de tamaño y sigue siendo correcta.</p><p><b>¿Cómo se calcula una distancia real?</b></p><p>1. Mide con una regla la distancia entre los dos puntos del mapa.<br>2. Multiplica por la escala.<br>3. Convierte el resultado a kilómetros.</p><p>Ejemplo: en un mapa a escala 1 : 200.000, dos pueblos están a 5 cm. 5 × 200.000 = 1.000.000 cm = 10 km.</p><p>Cuanto más pequeño es el número de la escala, más <b>detalle</b> tiene el mapa: un plano a 1 : 5.000 muestra cada calle, y un mapamundi a 1 : 100.000.000 apenas muestra los países.</p>`,
      svg: svg("Escala numérica 1:100.000 (1 cm = 1 km) y escala gráfica dividida en tramos", `${tit("La escala")}${et(130, 58, "1 : 100.000", 160, { size: 18, color: COL.rojo })}${tx(130, 80, "1 cm en el mapa = 1 km real", 230, { weight: 700 })}<path d="M40 126 H220" stroke="var(--ink)" stroke-width="3"/>${[0, 1, 2, 3].map((i) => `<rect x="${40 + i * 45}" y="118" width="45" height="8" fill="${i % 2 ? "var(--card)" : "var(--ink)"}" stroke="var(--ink)"/>${t(40 + i * 45, 142, `${i * 10}`, { size: 10, weight: 400 })}`).join("")}${t(220, 142, "40 km", { size: 10, weight: 400 })}${tx(130, 168, "escala gráfica", 120, { weight: 700, color: COL.azul })}`),
      video: vid("arzPL2tg6pA"),
    },
    {
      html: `<h3>Tipos de mapas</h3><p>Según la información que muestran, hay tres grandes tipos de mapas:</p><p>• Los <mark>mapas físicos</mark> representan los <b>elementos naturales</b> del relieve y las aguas: montañas, llanuras, valles, ríos, lagos, costas, cabos, golfos e islas. Usan colores para indicar la <b>altitud</b>: los verdes son las zonas bajas; los amarillos y marrones, las altas; y los blancos, las cumbres más elevadas. Los azules indican el mar, más oscuro cuanto más profundo.</p><p>• Los <mark>mapas políticos</mark> representan cómo se organizan los territorios: los <b>países</b>, las <b>comunidades autónomas</b>, las <b>provincias</b>, sus <b>fronteras</b> y sus <b>capitales</b>. Cada territorio se pinta de un color distinto para diferenciarlo de sus vecinos.</p><p>• Los <mark>mapas temáticos</mark> tratan un <b>tema concreto</b>: el clima, la población, las carreteras, los cultivos, los espacios protegidos, el turismo, la lluvia o los idiomas. Los mapas del tiempo de la televisión son mapas temáticos.</p><p>Muchos mapas combinan informaciones; por ejemplo, un mapa de carreteras muestra también las ciudades y algunos ríos y montañas.</p>`,
      svg: svg("Mapa físico (relieve y ríos), político (países y capitales) y temático (un tema concreto)", `${tit("Tipos de mapas")}${fichas([["Físico", "montañas y ríos", COL.marron], ["Político", "países y capitales", COL.rojo], ["Temático", "clima, población…", COL.morado], ["Colores físicos", "verde bajo, marrón alto", COL.verde]])}`),
      video: vid("PGiq8AJe1og"),
    },
    {
      html: `<h3>Orientarse: los puntos cardinales</h3><p><b>Orientarse</b> es saber dónde estamos y hacia dónde tenemos que ir. Para ello usamos los <mark>puntos cardinales</mark>: <b>norte (N)</b>, <b>sur (S)</b>, <b>este (E)</b> y <b>oeste (O)</b>. Entre ellos están los puntos intermedios o colaterales: noreste (NE), noroeste (NO), sureste (SE) y suroeste (SO). Todos juntos se representan en la <b>rosa de los vientos</b>.</p><p>Podemos orientarnos de varias formas:</p><p>• Con el <b>Sol</b>: sale aproximadamente por el <b>este</b> y se pone por el <b>oeste</b>. Si extiendes tu brazo derecho hacia donde sale el Sol, delante tendrás el norte, detrás el sur y a tu izquierda el oeste. A mediodía, en España, el Sol está hacia el sur.</p><p>• Con la <b>estrella Polar</b>: de noche, en el hemisferio norte, indica siempre el norte. Se encuentra siguiendo la Osa Mayor.</p><p>• Con la <mark>brújula</mark>: un instrumento con una aguja imantada que siempre señala el norte magnético. La inventaron los chinos hace casi mil años y permitió a los navegantes cruzar los océanos.</p><p>• Con el <b>GPS</b>: un sistema que, gracias a satélites, indica nuestra posición exacta en un mapa del móvil.</p>`,
      svg: svg("Rosa de los vientos y forma de orientarse con el Sol: brazo derecho al este", `${tit("Puntos cardinales")}${rosa(72, 100, 34)}${sol(206, 64, 10)}${tx(206, 92, "sale por el este", 100)}${tx(206, 108, "se pone por el oeste", 100)}${et(196, 140, "brújula · GPS", 100, { size: 11, color: COL.azul })}${tx(196, 158, "estrella Polar: norte", 110)}`),
    },
    {
      html: `<h3>Mapas en la era digital</h3><p>Hoy usamos mapas a diario sin papel. Las <b>aplicaciones de mapas</b> del móvil o del ordenador combinan varios tipos de información:</p><p>• Imágenes de <b>satélite</b> y <b>fotografías aéreas</b>, que muestran cómo es realmente el terreno.<br>• Mapas de calles y carreteras, con los nombres de los lugares.<br>• Información en tiempo real: el tráfico, los horarios del transporte, la ubicación de comercios o el tiempo.<br>• El <b>GPS</b>, que señala con un punto dónde estamos y nos guía paso a paso hasta nuestro destino.</p><p>Las personas que trabajan con mapas usan los <b>Sistemas de Información Geográfica (SIG)</b>, programas que superponen capas de datos (ríos, población, carreteras, incendios…) para tomar decisiones, como dónde construir un hospital o cómo evacuar una zona en caso de inundación.</p><p>En España, el <b>Instituto Geográfico Nacional</b> elabora los mapas oficiales y ofrece muchos de forma gratuita en internet.</p><p>Consejos para usar mapas digitales: comprueba siempre la ruta, no camines mirando la pantalla, ten cuidado al compartir tu ubicación y, en la montaña, lleva también un mapa en papel por si se acaba la batería o no hay cobertura.</p>`,
      svg: svg("Un móvil con un mapa y un punto de GPS que señala dónde estamos", `${tit("Mapas digitales")}<rect x="90" y="36" width="80" height="138" rx="12" fill="var(--ink)"/><rect x="96" y="48" width="68" height="112" fill="#e0f2fe"/><path d="M96 90 H164 M130 48 V160 M96 128 L164 110" stroke="#d6d3d1" stroke-width="5"/><path d="M130 112 q-10 -14 -10 -20 a10 10 0 1 1 20 0 q0 6 -10 20z" fill="var(--red)"/><circle cx="130" cy="92" r="3.5" fill="#fff"/>${tx(46, 80, "satélite", 70, { weight: 700, color: COL.azul })}${tx(46, 100, "GPS", 70, { weight: 700, color: COL.rojo })}${tx(214, 80, "rutas", 70, { weight: 700, color: COL.verde })}${tx(214, 100, "tráfico", 70, { weight: 700, color: COL.naranja })}`),
    },
  ],
  figura: {
    titulo: "La Tierra y los mapas en ocho ideas",
    svg: rejilla([
      ["Tierra", "esfera achatada por los polos", COL.azul],
      ["Rotación", "24 h: día y noche", COL.morado],
      ["Traslación", "365 días: año y estaciones", COL.naranja],
      ["Globo", "fiel; el planisferio deforma", COL.agua],
      ["Mapa", "plano, reducido, simplificado", COL.verde],
      ["Leyenda", "explica los símbolos", COL.sol],
      ["Escala", "1 : 100.000 → 1 cm = 1 km", COL.rojo],
      ["Tipos", "físico, político, temático", COL.marron],
    ], 4, 86, "Resumen de la Tierra, sus movimientos y los mapas"),
  },
  video: vgen("PGiq8AJe1og", "los mapas físicos y políticos para niños"),
  ejemplos: [
    { enunciado: "En un mapa a escala 1 : 50.000, dos pueblos están separados 6 cm. ¿Cuál es la distancia real?",
      pasos: ["Multiplicamos la distancia del mapa por la escala: 6 × 50.000 = 300.000 cm.", "Pasamos a metros: 300.000 ÷ 100 = 3.000 m.", "Pasamos a kilómetros: 3.000 ÷ 1.000 = 3 km."],
      resultado: "Los pueblos están a 3 km." },
    { enunciado: "Por la mañana extiendes el brazo derecho hacia donde sale el Sol. ¿Hacia dónde miras?",
      pasos: ["El Sol sale aproximadamente por el este.", "Con el brazo derecho al este, delante queda el norte.", "Detrás, el sur; a la izquierda, el oeste."],
      resultado: "Miras hacia el norte." },
    { enunciado: "¿Qué tipo de mapa usarías para: a) saber la capital de Francia; b) ver dónde está el Everest; c) ver dónde llueve más en España?",
      pasos: ["Las capitales y fronteras aparecen en los mapas políticos.", "Las montañas aparecen en los mapas físicos.", "La lluvia es un tema concreto: mapa temático."],
      resultado: "a) Político. b) Físico. c) Temático (de precipitaciones)." },
  ],
  errores: [
    "Pensar que los mapas planos muestran los tamaños reales: el planisferio deforma, sobre todo cerca de los polos.",
    "Confundir rotación (día y noche) con traslación (año y estaciones).",
    "Creer que las estaciones se deben a que la Tierra se acerca o se aleja del Sol: se deben a la inclinación del eje.",
    "Olvidar convertir los centímetros a kilómetros al usar la escala.",
    "Pensar que una escala con un número mayor da más detalle: es al revés.",
  ],
  ejercicios: [
    { q: "¿Qué forma tiene la Tierra? ¿Cómo se demostró que era redonda?", sol: "Casi esférica, achatada por los polos (geoide). Se demostró, entre otras cosas, con la primera vuelta al mundo de Magallanes y Elcano (1522)." },
    { q: "Explica qué provoca la rotación y cuánto dura.", sol: "La sucesión de los días y las noches. Dura 24 horas." },
    { q: "¿Cuánto dura la traslación y qué son los años bisiestos?", sol: "365 días y 6 horas. Cada cuatro años se suma un día (29 de febrero) para recuperar esas horas: son los bisiestos." },
    { q: "Escribe una ventaja y un inconveniente del globo terráqueo y del planisferio.", sol: "Globo: es fiel, pero solo se ve la mitad. Planisferio: muestra toda la Tierra, pero deforma." },
    { q: "¿Qué diferencia hay entre un mapa y un plano?", sol: "El plano representa un lugar pequeño con mucho detalle (una casa, un barrio); el mapa representa zonas más grandes." },
    { q: "Nombra los elementos de un mapa y para qué sirve cada uno.", sol: "Título (qué representa), leyenda (significado de símbolos), escala (cuánto se reduce), rosa de los vientos (orientación), coordenadas (localizar) y fuente y fecha." },
    { q: "En un mapa a escala 1 : 100.000 mides 7 cm. ¿Cuántos km son en la realidad?", sol: "7 × 100.000 = 700.000 cm = 7 km." },
    { q: "¿Qué indican los colores verde, marrón y blanco en un mapa físico?", sol: "Verde: zonas bajas. Marrón: zonas altas. Blanco: las cumbres más altas." },
    { q: "Escribe cuatro formas de orientarse.", sol: "Con el Sol, con la estrella Polar, con la brújula y con el GPS." },
    { q: "¿Por qué conviene llevar un mapa en papel en la montaña aunque tengas el móvil?", sol: "Porque el móvil puede quedarse sin batería o sin cobertura." },
  ],
  quiz: [
    { q: "La Tierra está achatada por…", o: ["el ecuador", "los polos", "los océanos"], a: 1, e: "Por los polos." },
    { q: "La rotación dura…", o: ["24 horas", "365 días", "una semana"], a: 0, e: "Un día." },
    { q: "Las estaciones se deben a…", o: ["la rotación", "la Luna", "la inclinación del eje"], a: 2, e: "Y a la traslación." },
    { q: "La representación más fiel de la Tierra es…", o: ["el planisferio", "el globo terráqueo", "un plano"], a: 1, e: "El globo." },
    { q: "La representación de un barrio con detalle es un…", o: ["plano", "planisferio", "globo"], a: 0, e: "Un plano." },
    { q: "La leyenda explica…", o: ["la distancia", "la orientación", "los símbolos y colores"], a: 2, e: "Los símbolos." },
    { q: "Con escala 1 : 100.000, 1 cm equivale a…", o: ["1 km", "100 m", "10 km"], a: 0, e: "100.000 cm = 1 km." },
    { q: "Un mapa con países y capitales es…", o: ["físico", "político", "temático"], a: 1, e: "Político." },
    { q: "El Sol sale aproximadamente por el…", o: ["oeste", "norte", "este"], a: 2, e: "Por el este." },
    { q: "La aguja de la brújula señala el…", o: ["norte", "sur", "este"], a: 0, e: "El norte magnético." },
  ],
  examen: [
    { q: "Un mapa del clima es un mapa…", o: ["político", "temático", "físico"], a: 1, e: "Trata un tema concreto." },
    { q: "La primera vuelta al mundo terminó en…", o: ["1492", "1522", "1812"], a: 1, e: "Con Elcano." },
    { q: "Si el mapa se amplía, la escala que sigue siendo correcta es la…", o: ["gráfica", "numérica", "ninguna"], a: 0, e: "La barra cambia de tamaño con el mapa." },
    { q: "El organismo que hace los mapas oficiales de España es el…", o: ["Instituto Geográfico Nacional", "Congreso", "INE"], a: 0, e: "El IGN." },
  ],
  feynman: ["Qué movimientos hace la Tierra y qué consecuencias tienen", "Qué elementos tiene un mapa y cómo se usa la escala", "En qué se diferencian los mapas físicos, políticos y temáticos"],
  mapa: mapa("LA TIERRA", "var(--pri)", [
    ["Movimientos", "rotación · traslación", COL.morado],
    ["Representar", "globo · planisferio · plano", COL.azul],
    ["Elementos", "título · leyenda · escala", COL.rojo],
    ["Orientarse", "puntos cardinales · brújula", COL.verde],
  ], 250),
  tarjetas: [
    ["Rotación", "Giro de la Tierra sobre sí misma en 24 horas: día y noche."],
    ["Traslación", "Vuelta de la Tierra alrededor del Sol en 365 días."],
    ["Planisferio", "Mapa plano de toda la Tierra."],
    ["Plano", "Representación con detalle de un lugar pequeño."],
    ["Leyenda", "Cuadro que explica los símbolos y colores de un mapa."],
    ["Escala", "Relación entre el tamaño del mapa y el real."],
    ["Mapa físico", "Mapa del relieve y las aguas."],
    ["Rosa de los vientos", "Figura con los puntos cardinales."],
  ],
  familias: ["Dibujad juntos el plano de vuestra casa o de la habitación visto desde arriba.", "Buscad vuestra calle en un mapa digital y comparad la vista de mapa y la de satélite.", "Calculad con la escala de un mapa de carreteras la distancia a un pueblo cercano.", "Por la mañana, buscad por dónde sale el Sol y localizad el norte."],
  profesores: PROF("Ciencias Sociales: la Tierra, forma y movimientos; representación de la Tierra; mapas y planos, elementos, escala y tipos; orientación y tecnologías de la información geográfica", ["Plano del aula a escala con papel cuadriculado.", "Cálculo de distancias reales con mapas topográficos del IGN de la zona.", "Simulación de día, noche y estaciones con una linterna y una pelota."]),
  fuentes: [RD, wiki("Mapa", "Mapa"), wiki("Escala (cartografía)", "Escala_(cartografía)"), { t: "Instituto Geográfico Nacional", url: "https://www.ign.es/" }],
  revisado: REV,
};
