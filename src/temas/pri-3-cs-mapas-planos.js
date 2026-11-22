// Ciencias Sociales 3º de Primaria: los mapas y los planos. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, filas, fichas, vid, vgen, RD, PROF, sol, arbol, casa, rosa } = require("./_pri3b");

// Cuadrícula de un plano con calles.
const calles = (x0 = 20, y0 = 40, w = 220, h = 128) => `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="#f1f5f9" stroke="var(--line)" stroke-width="1.5"/><path d="M${x0} ${y0 + h / 2} H${x0 + w} M${x0 + w / 3} ${y0} V${y0 + h} M${x0 + (2 * w) / 3} ${y0} V${y0 + h}" stroke="#cbd5e1" stroke-width="12"/>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "Los mapas y los planos",
  minutos: 45,
  objetivos: ["Distinguir entre dibujo, plano, mapa y globo terráqueo", "Comprender qué es la escala y la leyenda", "Orientarse con los puntos cardinales y la rosa de los vientos", "Leer un plano sencillo del colegio o del barrio", "Conocer distintos tipos de mapas y herramientas para orientarse"],
  claves: ["plano", "mapa", "globo terráqueo", "escala", "leyenda", "símbolo", "punto cardinal", "norte", "rosa de los vientos", "brújula", "croquis", "GPS"],
  pregunta: {
    texto: "Tu habitación mide varios metros, tu ciudad muchos kilómetros y España cientos de kilómetros. Sin embargo, los tres caben dibujados en una hoja de papel del mismo tamaño. ¿Cómo es posible?",
    respuesta: "Porque los planos y los mapas son dibujos <b>reducidos</b>: todo se dibuja muchas veces más pequeño de lo que es en la realidad, pero sin cambiar su forma. Esa reducción se llama <mark>escala</mark>. Cuanto más grande es el lugar que queremos dibujar, más hay que reducirlo.",
  },
  bloques: [
    {
      html: `<h3>Representar el espacio</h3><p>Para conocer un lugar y orientarnos en él, a veces necesitamos <b>representarlo</b> en un dibujo. Así podemos ver dónde está cada cosa sin tener que estar allí.</p><p>Hay distintas formas de representar un lugar:</p><p>• Un <b>dibujo</b> o una <b>fotografía</b>: muestran el lugar tal y como lo vemos, de frente o un poco desde arriba.<br>• Un <mark>croquis</mark>: es un dibujo sencillo hecho a mano, sin medidas exactas, para explicar un camino. Por ejemplo, cuando dibujas a un amigo cómo llegar a tu casa.<br>• Un <mark>plano</mark>: representa un lugar <b>pequeño</b>, como una habitación, una casa, un colegio o un barrio, visto <b>desde arriba</b>.<br>• Un <mark>mapa</mark>: representa un lugar <b>grande</b>, como una comunidad autónoma, un país o el mundo entero, visto desde arriba.<br>• El <mark>globo terráqueo</mark>: es una esfera que representa la Tierra entera. Es la representación más fiel, porque tiene su misma forma.</p><p>Planos y mapas son <b>planos</b> como el papel; por eso al dibujar la Tierra redonda en un mapa siempre se deforma un poco.</p>`,
      svg: svg("Formas de representar: croquis, plano, mapa y globo terráqueo", `${tit("Representamos lugares")}${fichas([["Croquis", "a mano, sin medidas", COL.gris], ["Plano", "lugar pequeño: colegio", COL.azul], ["Mapa", "lugar grande: país", COL.verde], ["Globo", "toda la Tierra, redonda", COL.agua]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Visto desde arriba</h3><p>Los planos y los mapas representan los lugares <b>vistos desde arriba</b>, como los vería un pájaro o un dron. Este punto de vista se llama <b>vista aérea</b> o <b>vista de pájaro</b>.</p><p>Desde arriba, las cosas se ven de otra manera:</p><p>• Una <b>mesa</b> se ve como un rectángulo, sin patas.<br>• Una <b>pelota</b> se ve como un círculo.<br>• Un <b>árbol</b> se ve como un círculo verde: su copa.<br>• Una <b>casa</b> se ve como un rectángulo: su tejado.<br>• Una <b>persona</b> se ve como un círculo pequeño: su cabeza.</p><p>Para practicar, súbete con cuidado a una silla (con un adulto cerca) y mira tu mesa desde arriba. ¿Qué forma ves? Después, dibuja tu mesa con los objetos que tienes encima: el estuche, el cuaderno y la goma, tal y como los ves desde arriba.</p><p>Hoy podemos ver fotos aéreas de cualquier lugar del mundo en programas de mapas en el ordenador o el móvil. ¡Busca tu colegio y mira cómo se ve desde el cielo!</p>`,
      svg: svg("Una mesa vista de frente y desde arriba; un árbol de frente y desde arriba", `${tit("De frente y desde arriba")}${et(66, 46, "de frente", 80, { size: 11, color: COL.gris })}${et(196, 46, "desde arriba", 90, { size: 11, color: COL.azul })}<path d="M30 92 h70 M36 92 v40 M94 92 v40" stroke="${COL.marron}" stroke-width="5"/>${arbol(66, 168, 0.8)}<rect x="160" y="70" width="72" height="44" fill="${COL.marron}" fill-opacity=".55" stroke="var(--ink)" stroke-width="1.2"/><circle cx="196" cy="146" r="18" fill="var(--leaf)"/>${fl(108, 104, 150, 92, "var(--muted)", 1.5)}${fl(94, 148, 172, 148, "var(--muted)", 1.5)}`),
    },
    {
      html: `<h3>El plano</h3><p>Un <mark>plano</mark> es la representación de un lugar <b>pequeño</b> visto desde arriba, con todo dibujado de forma <b>reducida</b>. Se usan planos para muchas cosas:</p><p>• El <b>plano de una casa</b> muestra las habitaciones, las puertas y las ventanas. Lo usan los arquitectos para construirla.<br>• El <b>plano del colegio</b> muestra las aulas, el patio, el gimnasio y las salidas. Suele estar en los pasillos para saber por dónde salir en caso de emergencia.<br>• El <b>plano de una ciudad</b> o de un barrio muestra las calles, las plazas, los parques y los edificios importantes.<br>• El <b>plano del metro</b> muestra las líneas y las estaciones con colores.</p><p>En un plano, las <b>calles</b> se dibujan como franjas, los <b>edificios</b> como rectángulos y los <b>parques</b> de color verde. Las calles suelen tener su nombre escrito.</p><p>Para buscar algo en el plano de una ciudad, muchos planos tienen una <b>cuadrícula</b> con letras y números. Si buscas el museo y aparece «C2», buscas la columna C y la fila 2. ¡Igual que en el juego de los barquitos!</p>`,
      svg: svg("Plano de un barrio con calles, casas, parque, colegio y cuadrícula", `${tit("El plano de un barrio")}${calles()}<rect x="30" y="48" width="44" height="40" fill="${COL.rojo}" fill-opacity=".5"/><rect x="104" y="48" width="56" height="40" fill="var(--leaf)" fill-opacity=".6"/>${[0, 1, 2].map((i) => `<circle cx="${118 + i * 14}" cy="68" r="5" fill="#15803d"/>`).join("")}<rect x="190" y="48" width="44" height="40" fill="${COL.azul}" fill-opacity=".45"/><rect x="30" y="118" width="44" height="42" fill="${COL.sol}" fill-opacity=".5"/><rect x="190" y="118" width="44" height="42" fill="${COL.morado}" fill-opacity=".4"/>${et(52, 70, "casas", 40, { size: 9.5 })}${et(212, 70, "colegio", 40, { size: 9.5 })}${et(52, 142, "tienda", 40, { size: 9.5 })}${et(212, 142, "museo", 40, { size: 9.5 })}${et(132, 112, "calle Mayor", 70, { size: 9 })}`),
      video: vid("CTUhpEBLeWw"),
    },
    {
      html: `<h3>La escala</h3><p>Para que un lugar grande quepa en una hoja de papel, hay que dibujarlo <b>reducido</b>, muchas veces más pequeño que en la realidad, pero manteniendo su forma. La <mark>escala</mark> nos dice <b>cuántas veces</b> se ha reducido.</p><p>Por ejemplo, en un plano con escala <b>1:100</b>, un centímetro del dibujo son 100 centímetros en la realidad, es decir, un metro. Si una habitación mide 4 cm en el plano, en la realidad mide 4 metros.</p><p>Muchas veces la escala se dibuja como una pequeña <b>regla</b>, la <b>escala gráfica</b>: una barrita que indica a cuántos metros o kilómetros reales equivale.</p><p>Fíjate en esta regla:</p><p>• Los <b>planos</b> representan lugares pequeños y se reducen poco: por eso vemos muchos detalles, como cada casa o cada árbol.<br>• Los <b>mapas</b> representan lugares grandes y se reducen muchísimo: por eso vemos menos detalles. En el mapa de España no aparecen las calles, solo las ciudades como puntos.</p><p>Gracias a la escala podemos calcular <b>distancias reales</b> con una regla sobre el mapa.</p>`,
      svg: svg("Escala gráfica: 1 centímetro del plano son 100 centímetros reales", `${tit("La escala")}<rect x="40" y="56" width="80" height="50" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>${et(80, 86, "4 cm", 40, { size: 11 })}${fl(124, 82, 150, 82, "var(--muted)", 2)}<rect x="156" y="44" width="80" height="74" fill="${COL.sol}" fill-opacity=".2" stroke="var(--ink)" stroke-width="1.6"/>${et(196, 86, "4 m", 40, { size: 12, color: COL.rojo })}<g transform="translate(60 146)"><rect width="40" height="8" fill="var(--ink)"/><rect x="40" width="40" height="8" fill="var(--card)" stroke="var(--ink)"/><rect x="80" width="40" height="8" fill="var(--ink)"/>${["0", "1 m", "2 m", "3 m"].map((s, i) => et(i * 40, 22, s, 30, { size: 9.5 })).join("")}</g>${et(130, 136, "escala 1:100", 90, { size: 11, color: COL.azul })}`),
    },
    {
      html: `<h3>La leyenda y los símbolos</h3><p>En los planos y los mapas no se dibuja todo con detalle. Se usan <mark>símbolos</mark>: pequeños dibujos, colores, líneas o figuras que representan algo real. Por ejemplo:</p><p>• Una cruz roja puede indicar un <b>hospital</b>.<br>• Una <b>línea azul</b> representa un río.<br>• Un <b>punto negro</b> es una ciudad, y un punto más grande, una ciudad mayor.<br>• Una <b>línea roja</b> gruesa es una autopista.<br>• Una <b>mancha verde</b> es un parque o un bosque.<br>• Un triángulo marrón puede ser una montaña.</p><p>Para saber qué significa cada símbolo, los planos y los mapas tienen una <mark>leyenda</mark>: un cuadro, normalmente en una esquina, donde se explica el significado de cada símbolo y cada color.</p><p>Además, todo mapa debería tener un <b>título</b>, que dice qué lugar representa; la <b>escala</b>; y una flecha o rosa de los vientos que indica dónde está el <b>norte</b>.</p><p>Antes de leer un mapa, mira siempre su leyenda. ¡Es como la llave que abre el mapa!</p>`,
      svg: svg("Leyenda de un mapa con símbolos: río, ciudad, carretera, bosque y hospital", `${tit("La leyenda")}<rect x="40" y="36" width="180" height="134" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>${et(130, 54, "LEYENDA", 80, { size: 11 })}<path d="M58 72 q10 -6 20 0 t20 0" stroke="var(--water)" stroke-width="3" fill="none"/><circle cx="78" cy="94" r="5" fill="var(--ink)"/><path d="M58 114 H98" stroke="var(--red)" stroke-width="4"/><circle cx="70" cy="134" r="7" fill="var(--leaf)"/><circle cx="84" cy="136" r="6" fill="var(--leaf)"/><path d="M74 148 h8 v-6 h6 v6 h8 v6 h-8 v6 h-6 v-6 h-8z" fill="var(--red)" transform="translate(-8 4)"/>${tx(146, 76, "río", 80, { anchor: "start" })}${tx(146, 98, "ciudad", 80, { anchor: "start" })}${tx(146, 118, "carretera", 80, { anchor: "start" })}${tx(146, 138, "bosque", 80, { anchor: "start" })}${tx(146, 160, "hospital", 80, { anchor: "start" })}`),
    },
    {
      html: `<h3>Los puntos cardinales</h3><p>Para orientarnos, es decir, para saber hacia dónde vamos, usamos los <mark>puntos cardinales</mark>. Son cuatro: <b>norte</b> (N), <b>sur</b> (S), <b>este</b> (E) y <b>oeste</b> (O).</p><p>Podemos saber dónde están gracias al <b>Sol</b>. El Sol sale por la mañana más o menos por el <b>este</b> y se pone por la tarde por el <b>oeste</b>. Si extiendes tu brazo <b>derecho</b> hacia donde sale el Sol (este):</p><p>• Delante de ti tendrás el <b>norte</b>.<br>• Detrás, el <b>sur</b>.<br>• A tu izquierda, el <b>oeste</b>.</p><p>Los puntos cardinales se representan en una figura llamada <mark>rosa de los vientos</mark>, que aparece en muchos mapas. Entre los puntos cardinales hay otros intermedios: noreste (NE), noroeste (NO), sureste (SE) y suroeste (SO).</p><p>En casi todos los mapas, el <b>norte está arriba</b>, el sur abajo, el este a la derecha y el oeste a la izquierda. Por eso decimos que Galicia está al noroeste de España y Murcia al sureste.</p>`,
      svg: svg("Rosa de los vientos y un niño con el brazo derecho hacia el este, mirando al norte", `${tit("Los puntos cardinales")}${rosa(66, 106, 44)}${sol(226, 58, 10)}${filas([["este", "sale el Sol", COL.sol], ["oeste", "se pone el Sol", COL.naranja], ["norte", "arriba en el mapa", COL.rojo]], 86, 32, { x: 136, wa: 60, wb: 110, dos: true })}`),
      video: vid("qxwNRos9Jb8"),
    },
    {
      html: `<h3>Otras formas de orientarse</h3><p>Además del Sol, hay otras maneras de encontrar los puntos cardinales:</p><p>• La <mark>brújula</mark>: es un instrumento con una <b>aguja imantada</b> que siempre señala hacia el <b>norte</b>. La inventaron los chinos hace muchos siglos y ayudó a los marineros a navegar por los océanos sin perderse.<br>• La <b>estrella Polar</b>: de noche, en el hemisferio norte, esta estrella señala siempre el norte. Se encuentra siguiendo las dos últimas estrellas del «carro» de la Osa Mayor.<br>• El <mark>GPS</mark>: hoy los teléfonos móviles y los coches llevan un <b>navegador</b> que, gracias a satélites que giran alrededor de la Tierra, sabe exactamente dónde estamos y nos indica el camino.</p><p>También nos orientamos con <b>referencias</b>: «el colegio está a la derecha de la panadería», «la farmacia está enfrente del parque». Para describir dónde está algo usamos palabras como <b>delante, detrás, a la derecha, a la izquierda, cerca, lejos, entre, enfrente</b>.</p><p>Si alguna vez te pierdes, quédate quieto en un lugar seguro y pide ayuda a un policía o a un adulto de confianza.</p>`,
      svg: svg("Brújula con aguja que señala el norte; estrella Polar y GPS", `${tit("Brújula, estrella y GPS")}<g transform="translate(70 104)"><circle r="44" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/><path d="M0 -34 L8 0 L0 34 L-8 0z" fill="${COL.gris}"/><path d="M0 -34 L8 0 L-8 0z" fill="${COL.rojo}"/><circle r="4" fill="var(--ink)"/>${et(0, -38, "N", 14, { size: 11, color: COL.rojo })}</g>${filas([["brújula", "aguja hacia el norte", COL.rojo], ["estrella Polar", "de noche, el norte", COL.sol], ["GPS", "satélites y móvil", COL.azul]], 70, 34, { x: 134, wa: 90, wb: 110, dos: true })}`),
    },
    {
      html: `<h3>Tipos de mapas</h3><p>Hay muchos tipos de mapas según lo que queramos mostrar:</p><p>• Los <mark>mapas físicos</mark> muestran cómo es el terreno: las <b>montañas</b>, las llanuras, los <b>ríos</b>, los lagos, las costas y los mares. Usan colores: el verde para las zonas bajas, el amarillo y el marrón para las zonas altas, y el azul para el agua. Cuanto más oscuro es el marrón, más alta es la montaña.</p><p>• Los <mark>mapas políticos</mark> muestran cómo las personas se han organizado: los <b>países</b>, las comunidades autónomas, las provincias y las <b>ciudades</b>, con sus <b>fronteras</b> o límites. Cada territorio se pinta de un color diferente.</p><p>• Los <b>mapas de carreteras</b> muestran las autopistas, las carreteras y los caminos.<br>• Los <b>mapas del tiempo</b> muestran con símbolos dónde hará sol, lloverá o nevará.<br>• Los <b>mapas turísticos</b> señalan los monumentos y los lugares interesantes.</p><p>Todos los mapas se recogen en libros llamados <b>atlas</b>. Y hoy usamos mucho los mapas digitales en el ordenador y el móvil.</p>`,
      svg: svg("Mapa físico con montañas y ríos y mapa político con regiones de colores", `${tit("Mapa físico y político")}<path d="M20 60 q30 -14 60 0 q30 10 30 50 q-10 40 -50 50 q-40 -10 -40 -50z" fill="var(--leaf)" fill-opacity=".5"/><path d="M40 80 l14 -18 l14 18z M70 100 l12 -16 l12 16z" fill="${COL.marron}"/><path d="M40 120 q20 6 40 -6 q10 -6 20 4" stroke="var(--water)" stroke-width="2.5" fill="none"/><g transform="translate(130 0)"><path d="M20 60 q30 -14 60 0 L80 104 L20 110z" fill="${COL.rojo}" fill-opacity=".4"/><path d="M80 60 q30 10 30 50 L80 104z" fill="${COL.sol}" fill-opacity=".45"/><path d="M20 110 L80 104 L110 110 q-10 40 -50 50 q-40 -10 -40 -50z" fill="${COL.azul}" fill-opacity=".35"/><path d="M20 110 L80 104 L80 60 M80 104 L110 110" stroke="var(--ink)" stroke-width="1.2" stroke-dasharray="3 2" fill="none"/><circle cx="54" cy="84" r="3" fill="var(--ink)"/><circle cx="66" cy="132" r="3" fill="var(--ink)"/></g>${et(65, 174, "físico", 80, { size: 11, color: COL.marron })}${et(195, 174, "político", 80, { size: 11, color: COL.rojo })}`),
    },
    {
      html: `<h3>¡Hacemos el plano de la clase!</h3><p>Vamos a dibujar el <b>plano de nuestra clase</b> siguiendo estos pasos:</p><p>1. Observa bien la clase. ¿Qué forma tiene? Seguramente es un rectángulo. Dibújalo en un folio.<br>2. Marca dónde están la <b>puerta</b> y las <b>ventanas</b>.<br>3. Dibuja los muebles <b>vistos desde arriba</b>: la mesa del profesor, la pizarra, las mesas de los alumnos, las estanterías, la papelera.<br>4. Usa <b>símbolos</b> sencillos y colores: por ejemplo, un rectángulo marrón para cada mesa y una línea azul para la pizarra.<br>5. Dibuja una <b>leyenda</b> en una esquina con el significado de cada símbolo.<br>6. Ponle un <b>título</b>: «Plano de la clase de 3.º B».<br>7. Con ayuda del profesor, averigua dónde está el norte y dibuja una flecha.</p><p>Después, juega con un compañero: esconde un objeto en la clase y márcalo con una X en tu plano. Tu compañero debe encontrarlo usando solo el plano. ¡Ahora sois exploradores!</p>`,
      svg: svg("Plano de una clase con mesas, pizarra, puerta, ventana y leyenda", `${tit("Plano de la clase")}<rect x="20" y="40" width="160" height="124" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/><path d="M60 40 H140" stroke="${COL.azul}" stroke-width="5"/><path d="M180 70 V120" stroke="var(--water)" stroke-width="6"/><path d="M20 130 V156" stroke="var(--card)" stroke-width="5"/><path d="M20 130 q16 0 16 26" stroke="var(--ink)" stroke-width="1" fill="none"/>${[0, 1, 2].map((r) => [0, 1, 2].map((c) => `<rect x="${50 + c * 40}" y="${76 + r * 28}" width="26" height="16" fill="${COL.marron}" fill-opacity=".55"/>`).join("")).join("")}<text x="130" y="108" font-size="16" font-weight="700" fill="${COL.rojo}" text-anchor="middle">✕</text>${filas([["pizarra", "", COL.azul], ["mesa", "", COL.marron], ["ventana", "", COL.agua], ["tesoro", "", COL.rojo]], 66, 26, { x: 196, wa: 56, wb: 6 })}`),
    },
  ],
  figura: {
    titulo: "Mapas y planos en ocho ideas",
    svg: rejilla([
      ["Plano", "lugar pequeño", COL.azul],
      ["Mapa", "lugar grande", COL.verde],
      ["Globo", "la Tierra redonda", COL.agua],
      ["Desde arriba", "vista de pájaro", COL.gris],
      ["Escala", "cuánto se reduce", COL.naranja],
      ["Leyenda", "qué significa cada símbolo", COL.morado],
      ["Puntos cardinales", "N, S, E, O", COL.rojo],
      ["Brújula", "señala el norte", COL.marron],
    ], 4, 86, "Resumen de los mapas y los planos"),
  },
  video: vgen("DaBWWjsReeQ", "los mapas y los planos para niños"),
  ejemplos: [
    { enunciado: "¿Usarías un plano o un mapa para representar: tu habitación, España, el parque del barrio, el mundo?",
      pasos: ["Lugares pequeños: plano.", "Lugares grandes: mapa."],
      resultado: "Plano: habitación y parque. Mapa: España y el mundo." },
    { enunciado: "En un plano con escala 1:100, el pasillo mide 6 cm. ¿Cuánto mide en la realidad?",
      pasos: ["1 cm del plano son 100 cm reales, es decir, 1 m.", "6 cm × 1 m = 6 m."],
      resultado: "6 metros." },
    { enunciado: "Por la mañana miras hacia donde sale el Sol. ¿Qué punto cardinal tienes a la espalda?",
      pasos: ["El Sol sale por el este: miras al este.", "Lo contrario del este es el oeste."],
      resultado: "El oeste." },
  ],
  errores: [
    "Pensar que plano y mapa son lo mismo: el plano es de un lugar pequeño.",
    "Dibujar los objetos de frente en un plano: van vistos desde arriba.",
    "Creer que el norte es «hacia delante» siempre: depende de hacia dónde mires.",
    "Leer un mapa sin mirar la leyenda.",
  ],
  ejercicios: [
    { q: "¿Qué diferencia hay entre un plano y un mapa?", sol: "El plano representa un lugar pequeño (casa, colegio, barrio) y el mapa un lugar grande (país, mundo)." },
    { q: "¿Cuál es la representación más fiel de la Tierra? ¿Por qué?", sol: "El globo terráqueo, porque tiene su misma forma de esfera." },
    { q: "¿Cómo se ve una mesa desde arriba?", sol: "Como un rectángulo, sin patas." },
    { q: "¿Qué es la escala?", sol: "Lo que indica cuántas veces se ha reducido la realidad para dibujarla en el plano o el mapa." },
    { q: "¿Qué es la leyenda de un mapa?", sol: "El cuadro que explica qué significa cada símbolo y cada color." },
    { q: "Escribe los cuatro puntos cardinales.", sol: "Norte, sur, este y oeste." },
    { q: "¿Por dónde sale el Sol? ¿Por dónde se pone?", sol: "Sale por el este y se pone por el oeste." },
    { q: "¿Para qué sirve una brújula?", sol: "Para orientarse: su aguja imantada señala siempre el norte." },
    { q: "¿Qué muestra un mapa físico? ¿Y uno político?", sol: "El físico, el relieve, los ríos y los mares. El político, los países, las regiones y las ciudades con sus fronteras." },
    { q: "Escribe los elementos que debe tener un mapa.", sol: "Título, escala, leyenda y la indicación del norte." },
  ],
  quiz: [
    { q: "El plano de un colegio representa un lugar…", o: ["pequeño", "enorme", "redondo"], a: 0, e: "Pequeño." },
    { q: "El mapa del mundo representa un lugar…", o: ["grande", "pequeño", "imaginario"], a: 0, e: "Grande." },
    { q: "Planos y mapas se dibujan vistos…", o: ["desde arriba", "de frente", "de lado"], a: 0, e: "Desde arriba." },
    { q: "La escala indica…", o: ["cuánto se ha reducido", "el color", "el norte"], a: 0, e: "Cuánto se ha reducido." },
    { q: "El cuadro que explica los símbolos es la…", o: ["leyenda", "escala", "brújula"], a: 0, e: "La leyenda." },
    { q: "Un río en el mapa se dibuja con una línea…", o: ["azul", "roja", "negra"], a: 0, e: "Azul." },
    { q: "El Sol sale por el…", o: ["este", "oeste", "norte"], a: 0, e: "Este." },
    { q: "En los mapas, el norte suele estar…", o: ["arriba", "abajo", "a la izquierda"], a: 0, e: "Arriba." },
    { q: "La figura con los puntos cardinales es la…", o: ["rosa de los vientos", "leyenda", "cuadrícula"], a: 0, e: "La rosa de los vientos." },
    { q: "La aguja de la brújula señala el…", o: ["norte", "sur", "este"], a: 0, e: "El norte." },
  ],
  examen: [
    { q: "Un dibujo sencillo a mano para indicar un camino es un…", o: ["croquis", "atlas", "globo"], a: 0, e: "Un croquis." },
    { q: "El mapa que muestra montañas y ríos es…", o: ["físico", "político", "de carreteras"], a: 0, e: "Físico." },
    { q: "Un libro de mapas se llama…", o: ["atlas", "diccionario", "leyenda"], a: 0, e: "Atlas." },
    { q: "De noche, en el hemisferio norte, la estrella que señala el norte es la…", o: ["Polar", "Sol", "Luna"], a: 0, e: "La estrella Polar." },
  ],
  feynman: ["Diferencia entre plano, mapa y globo", "Para qué sirven la escala y la leyenda", "Cómo encontrar el norte con el Sol"],
  mapa: mapa("MAPAS Y PLANOS", "var(--pri)", [
    ["Representar", "plano · mapa · globo", COL.azul],
    ["Elementos", "escala · leyenda · título", COL.naranja],
    ["Orientarse", "N · S · E · O · brújula", COL.rojo],
    ["Tipos", "físico · político · tiempo", COL.verde],
  ], 250),
  tarjetas: [
    ["Plano", "Dibujo desde arriba de un lugar pequeño."],
    ["Mapa", "Dibujo desde arriba de un lugar grande."],
    ["Globo terráqueo", "Esfera que representa la Tierra."],
    ["Escala", "Cuántas veces se reduce la realidad."],
    ["Leyenda", "Explica qué significa cada símbolo."],
    ["Puntos cardinales", "Norte, sur, este y oeste."],
    ["Rosa de los vientos", "Figura con los puntos cardinales."],
    ["Brújula", "Aguja imantada que señala el norte."],
  ],
  familias: ["Dibujad juntos el plano de vuestra casa o del dormitorio visto desde arriba.", "Buscad vuestra casa y el colegio en un mapa digital con vista de satélite.", "Haced una búsqueda del tesoro en casa con un croquis.", "Averiguad desde la ventana por dónde sale el Sol y dónde está el norte."],
  profesores: PROF("Ciencias Sociales: representación del espacio; croquis, planos, mapas y globo terráqueo; escala, leyenda y símbolos; orientación con los puntos cardinales, el Sol, la brújula y el GPS; tipos de mapas", ["Elaboración del plano del aula con leyenda y búsqueda del tesoro.", "Orientación en el patio con brújula y referencias.", "Comparación de un plano del barrio con la vista de satélite."]),
  fuentes: [RD, wiki("Mapa", "Mapa"), wiki("Escala cartográfica", "Escala (cartografía)"), wiki("Punto cardinal", "Punto cardinal")],
  revisado: REV,
};

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Reconocer pictogramas y señales", "Localizar lugares con una cuadrícula", "Conocer cómo se hacían los mapas antiguos", "Dar y seguir indicaciones de un itinerario"],
  lectura: { titulo: "Perdidos en el museo", html: `<p>La clase de Inés fue de excursión a un museo enorme de ciencias. Al entrar, la guía les dio a cada grupo un plano del edificio.</p><p>—Tenéis que encontrar tres tesoros —explicó—: el esqueleto de una ballena, un meteorito y un péndulo gigante. Nos vemos aquí en una hora.</p><p>El grupo de Inés miró el plano. Estaba lleno de símbolos: una taza para la cafetería, un muñequito para los aseos, unas escaleras, un ascensor…</p><p>—La ballena está en la casilla C2 —leyó Hugo, siguiendo con el dedo las letras de arriba y los números del lado.</p><p>—Y nosotros estamos aquí, en el punto rojo que dice «Usted está aquí» —añadió Inés.</p><p>Siguieron el pasillo, giraron a la derecha en la tienda y subieron por las escaleras. ¡Allí estaba la ballena, colgada del techo!</p><p>El meteorito les costó más. Se equivocaron de piso y acabaron en la sala de dinosaurios. Pero Inés se dio cuenta de que el plano tenía una flecha con una N, y giraron el papel para orientarlo bien.</p><p>Llegaron al punto de encuentro con los tres tesoros apuntados y dos minutos de sobra. La guía sonrió:</p><p>—Sois unos auténticos exploradores.</p>` },
  tras: {
    "La leyenda y los símbolos": [
      ["Pictogramas y señales", `<p>No solo los mapas usan símbolos. A nuestro alrededor hay muchos <mark>pictogramas</mark>: dibujos sencillos que todo el mundo entiende, hable el idioma que hable.</p><ul><li>En los <b>aeropuertos</b> y las <b>estaciones</b>: un avión para las salidas, una maleta para el equipaje, una taza para la cafetería.</li><li>En los <b>edificios</b>: un muñeco corriendo hacia una puerta verde indica la salida de emergencia. Un extintor rojo señala dónde está.</li><li>En la <b>calle</b>: las señales de tráfico avisan de un paso de peatones, un colegio o una curva.</li><li>En el <b>metro</b>: cada línea tiene un color y un número.</li></ul><p>Para que un pictograma funcione, debe ser <b>simple</b>, <b>claro</b> y fácil de ver de lejos.</p><p>Los pictogramas también ayudan a las personas que no saben leer o que tienen dificultades para comunicarse. Por eso muchos colegios ponen pictogramas en las puertas de las aulas y del comedor.</p>`,
        H6.rueda("Pictogramas", "SÍMBOLOS", [["salida", cVE], ["extintor", cRO], ["aseos", cAZ], ["cafetería", cNA]])],
    ],
    "Los puntos cardinales": [
      ["La cuadrícula: encontrar un lugar", `<p>Muchos planos y mapas tienen una <mark>cuadrícula</mark>: unas líneas que los dividen en casillas. Arriba, cada columna tiene una <b>letra</b>, y en el lado, cada fila tiene un <b>número</b>.</p><ul><li>Para encontrar un lugar, se buscan su letra y su número, por ejemplo, <b>B3</b>.</li><li>Se baja con el dedo por la columna B y se cruza con la fila 3. ¡Ahí está!</li></ul><p>Así se encuentran calles en los planos de las ciudades y lugares en los mapas de carreteras. El índice del plano dice, por ejemplo: «Calle Mayor, D4».</p><p>Funciona igual que en el juego de los barquitos, donde dices «A5» para disparar a una casilla, o que en el ajedrez, donde cada casilla tiene su letra y su número.</p><p>Los mapas del mundo usan una cuadrícula parecida, pero con líneas imaginarias llamadas <b>paralelos</b> y <b>meridianos</b>. Las estudiarás en cursos más adelante.</p>`,
        L6.filas("Cuadrícula", [["letra", "columna", cAZ], ["número", "fila", cRO], ["B3", "cruce", cVE], ["índice", "calle y casilla", cNA]])],
    ],
  },
  final: [
    ["Mapas antiguos", `<p>Hace siglos no había aviones ni satélites para ver la Tierra desde arriba. Aun así, las personas hacían <mark>mapas</mark>.</p><ul><li>Los primeros mapas se dibujaban en tablillas de barro, en pieles o en papel. Muchos eran muy imperfectos.</li><li>Los marineros y los exploradores apuntaban lo que veían en sus viajes: costas, ríos, montañas… Con esas notas, los <b>cartógrafos</b> dibujaban los mapas.</li><li>Medían las distancias contando los pasos o el tiempo que tardaban, y se orientaban con las estrellas y la brújula.</li><li>En los lugares que no conocían, a veces dibujaban monstruos marinos o escribían «aquí hay dragones».</li></ul><p>En el año 1500, el marino <b>Juan de la Cosa</b>, que viajó con Colón, dibujó uno de los primeros mapas en los que aparece América.</p><p>Hoy los mapas se hacen con fotos de satélites y ordenadores, y son mucho más exactos. Pero los mapas antiguos nos enseñan cómo veía el mundo la gente de cada época.</p>`,
      H6.dos("Mapas", ["ANTES", ["pasos y estrellas", "pieles, papel", "zonas vacías"], cNA], ["AHORA", ["satélites", "ordenador", "muy exactos"], cAZ]), ["nTWayftpqFo", "¿Cómo se Hacían los Mapas Antiguamente si no Había Satélites?", "El Robot de Platón", 884141]],
    ["Itinerarios: dar indicaciones", `<p>Un <mark>itinerario</mark> es el camino que hay que seguir para ir de un lugar a otro. Saber explicarlo bien es muy útil.</p><p><b>Para dar buenas indicaciones</b>:</p><ul><li>Di el <b>punto de partida</b>: «Sal por la puerta del colegio».</li><li>Usa palabras de dirección: <b>sigue recto</b>, <b>gira a la derecha</b>, <b>gira a la izquierda</b>, <b>cruza</b>.</li><li>Nombra <b>referencias</b> fáciles de ver: una farmacia, una fuente, un semáforo.</li><li>Indica <b>distancias</b>: «Pasa dos calles», «a unos cien pasos».</li><li>Di cómo reconocer el <b>destino</b>: «Es el edificio con la puerta azul».</li></ul><p>En un plano, el itinerario se puede marcar con una línea de color y flechas.</p><p>Los navegadores GPS de los coches y los móviles hacen lo mismo: calculan el itinerario y nos dicen «En 200 metros, gire a la derecha».</p><p><b>Actividad</b>: escribe el itinerario de tu casa al colegio y dibújalo en un plano sencillo.</p>`,
      H6.flujo("Itinerario", ["salida|colegio", "recto|dos calles", "derecha|farmacia", "llegada|puerta azul"], cVE)],
  ],
  ejemplos: [
    ["En el plano, el parque está en C2. ¿Cómo lo encuentro?", ["Busco la columna C arriba.", "Bajo hasta la fila 2."], "En el cruce de C y 2."],
    ["Explica cómo ir de la clase al comedor.", ["Sal de clase y gira a la izquierda.", "Sigue recto hasta las escaleras y baja."], "Itinerario con direcciones y referencias."],
  ],
  errores: ["Confundir la letra (columna) con el número (fila) en la cuadrícula.", "Dar indicaciones sin referencias: «ve por ahí» no sirve."],
  ejercicios: [
    ["b", "¿Qué es un pictograma?", "Un dibujo sencillo que todos entienden."],
    ["b", "¿De qué color es la señal de salida de emergencia?", "Verde."],
    ["b", "En la cuadrícula, ¿qué indica la letra?", "La columna."],
    ["b", "¿Quién dibujó uno de los primeros mapas con América?", "Juan de la Cosa."],
    ["b", "¿Qué es un itinerario?", "El camino de un lugar a otro."],
    ["m", "¿Por qué los pictogramas deben ser simples?", "Para entenderlos rápido y de lejos."],
    ["m", "¿Qué juego usa casillas con letra y número?", "Los barquitos o el ajedrez."],
    ["m", "¿Cómo medían las distancias los antiguos?", "Con pasos o con el tiempo de viaje."],
    ["m", "Di tres palabras de dirección.", "Recto, derecha, izquierda, cruza."],
    ["m", "¿Qué dibujaban en los lugares desconocidos?", "Monstruos o dragones."],
    ["a", "Inventa pictogramas para cinco lugares del colegio.", "Respuesta abierta."],
    ["a", "Dibuja un plano con cuadrícula y escribe su índice.", "Respuesta abierta."],
    ["a", "Escribe el itinerario de tu casa al colegio.", "Respuesta abierta."],
    ["a", "En la lectura, ¿en qué casilla estaba la ballena?", "En C2."],
  ],
  quiz: [
    ["Un muñeco corriendo hacia una puerta verde indica…", ["salida de emergencia", "aseos", "cafetería"], "Pictogramas."],
    ["En B3, el 3 es…", ["la fila", "la columna", "la escala"], "Cuadrícula."],
    ["Las personas que hacen mapas se llaman…", ["cartógrafos", "arqueólogos", "geólogos"], "Mapas antiguos."],
    ["«Gira a la derecha» es una indicación de…", ["dirección", "tiempo", "tamaño"], "Itinerario."],
    ["Hoy los mapas se hacen con…", ["satélites y ordenadores", "tablillas de barro", "pieles"], "Mapas."],
  ],
  examen: [
    ["En la lectura, ¿qué hizo Inés para orientar el plano?", ["lo giró según la flecha N", "lo dobló", "lo tiró"], "Lectura."],
    ["En el año 1500, Juan de la Cosa dibujó un mapa con…", ["América", "la Luna", "Marte"], "Mapas antiguos."],
  ],
  tarjetas: [
    ["Pictogramas", "Dibujos simples que todos entienden: salida, extintor, aseos."],
    ["Cuadrícula", "Letra de columna y número de fila: B3."],
    ["Mapas antiguos", "Pasos, estrellas, brújula; Juan de la Cosa, 1500."],
    ["Itinerario", "Partida, dirección, referencias, distancias y destino."],
  ],
  glosario: [
    ["Pictograma", "Dibujo sencillo que representa algo."],
    ["Señal", "Aviso con símbolos o colores."],
    ["Cuadrícula", "Red de líneas que divide en casillas."],
    ["Columna", "Fila vertical de casillas."],
    ["Fila", "Línea horizontal de casillas."],
    ["Índice", "Lista que dice dónde está cada cosa."],
    ["Cartógrafo", "Persona que hace mapas."],
    ["Explorador", "Persona que viaja a lugares desconocidos."],
    ["Satélite", "Aparato que gira alrededor de la Tierra."],
    ["Itinerario", "Camino para ir de un lugar a otro."],
    ["Referencia", "Algo fácil de ver que ayuda a orientarse."],
    ["Navegador", "Aparato que calcula el camino."],
  ],
  situacion: {
    titulo: "Guías del colegio",
    reto: "La clase prepara un plano para que los alumnos nuevos encuentren cada lugar del colegio.",
    pasos: ["Diseñar pictogramas para cada sala.", "Dibujar el plano con una cuadrícula e índice.", "Escribir itinerarios desde la entrada a cada lugar.", "Probar el plano con alumnos de otra clase."],
    producto: "Un plano-guía del colegio con pictogramas.",
    evaluacion: ["Crea pictogramas claros.", "Usa la cuadrícula.", "Conoce los mapas antiguos.", "Da indicaciones precisas."],
  },
});
