// Programación y robótica 1º ESO: Scratch, el escenario y los objetos. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Scratch: el escenario y los objetos",
  minutos: 50,
  objetivos: ["Conocer qué es Scratch y cómo se accede a él", "Identificar las zonas de la interfaz: escenario, objetos, categorías de bloques y área de programas", "Entender las coordenadas x e y del escenario", "Añadir y configurar objetos, disfraces, fondos y sonidos, y guardar un proyecto"],
  claves: ["Scratch", "interfaz", "escenario", "objeto", "sprite", "fondo", "disfraz", "sonido", "coordenadas", "eje x", "eje y", "bandera verde", "área de programas", "categorías de bloques", "proyecto"],
  pregunta: {
    texto: "Scratch se parece a un teatro. ¿Qué serían el escenario, los actores y el guion?",
    respuesta: "El <b>escenario</b> es el lugar donde ocurre todo, y puede cambiar de <b>fondo</b> como cambian los decorados. Los <b>actores</b> son los <b>objetos</b> (personajes, pelotas, botones), que pueden cambiar de <b>disfraz</b>. Y el <b>guion</b> son los <b>programas</b> hechos con bloques, que dicen a cada actor qué hacer y cuándo. Tú eres a la vez autor, director y escenógrafo.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es Scratch?</h3><p><mark>Scratch</mark> es un <b>lenguaje de programación por bloques</b> y una comunidad en línea, creado por el grupo Lifelong Kindergarten del Instituto Tecnológico de Massachusetts (MIT). Es <b>gratuito</b> y está disponible en muchos idiomas, entre ellos el español, el catalán, el gallego y el euskera. Con Scratch se pueden crear <b>historias interactivas, animaciones, juegos, música y simulaciones</b>, y compartirlos con millones de personas de todo el mundo. Se puede usar de dos formas: <b>en línea</b>, desde el navegador, en la web oficial de Scratch, donde conviene crear una cuenta (con permiso de la familia) para guardar y compartir los proyectos; o <b>sin conexión</b>, descargando la aplicación Scratch Desktop. Su nombre viene de la técnica de los DJ que mezclan discos («scratching»), porque en Scratch se pueden mezclar imágenes, sonidos y programas, y también «remezclar» los proyectos de otros citando a su autor. Su lema es: <b>imagina, programa, comparte</b>.</p>`,
    },
    {
      html: `<h3>La interfaz de Scratch</h3><p>Al abrir el editor de Scratch, la pantalla se divide en varias zonas. Arriba está la <b>barra de menús</b>, con opciones para crear un proyecto nuevo, guardarlo, cargarlo desde el ordenador o cambiar el idioma, y las pestañas <b>Código</b>, <b>Disfraces</b> (o Fondos) y <b>Sonidos</b>. A la izquierda está la <mark>paleta de bloques</mark>, organizada en <b>categorías</b> de colores: Movimiento, Apariencia, Sonido, Eventos, Control, Sensores, Operadores, Variables y Mis bloques. En el centro está el <mark>área de programas</mark>, donde se arrastran y se encajan los bloques para crear los programas (también llamados guiones o scripts) del objeto seleccionado. Arriba a la derecha está el <mark>escenario</mark>, donde se ve el resultado, con la <b>bandera verde</b> para iniciar el programa y el <b>botón rojo</b> para detenerlo. Debajo del escenario está la <mark>lista de objetos</mark>, con los personajes del proyecto y sus propiedades (nombre, posición, tamaño, dirección, si se ve o no), y a su lado el panel del escenario, para elegir los fondos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de la interfaz de Scratch: barra de menús arriba, paleta de bloques a la izquierda, área de programas en el centro, escenario arriba a la derecha y lista de objetos debajo">${BG}
        ${cj(8, 8, 244, 18, "barra de menús · Código · Disfraces · Sonidos", COL.gris, { size: 9 })}
        ${cj(8, 32, 54, 140, "bloques", COL.naranja, { size: 10 })}
        ${cj(68, 32, 98, 140, "área de programas", COL.azul, { size: 10 })}
        ${cj(172, 32, 80, 64, "escenario", COL.verde, { size: 10.5 })}
        ${cj(172, 102, 80, 70, "objetos y fondos", COL.morado, { size: 9.5 })}
        ${t(186, 46, "🏁", { size: 9 })}<circle cx="200" cy="43" r="4" fill="var(--red)"/></svg>`,
      video: { id: "pPueIUrLeVs", titulo: "Conoce la interfaz de Scratch (capítulo 2)", canal: "academia JAF", vistas: 49012 },
    },
    {
      html: `<h3>El escenario y sus coordenadas</h3><p>El <mark>escenario</mark> es el rectángulo donde se ve lo que ocurre en el proyecto. Mide <b>480 puntos de ancho y 360 de alto</b>. Para saber dónde está cada objeto, Scratch usa un sistema de <mark>coordenadas</mark>, como en un mapa o en los ejes de matemáticas. El <b>centro</b> del escenario es el punto <b>(0, 0)</b>. La coordenada <mark>x</mark> indica la posición <b>horizontal</b>: va de <b>−240</b> (borde izquierdo) a <b>240</b> (borde derecho). La coordenada <mark>y</mark> indica la posición <b>vertical</b>: va de <b>−180</b> (borde inferior) a <b>180</b> (borde superior). Así, un objeto en (100, 50) está a la derecha y un poco arriba del centro, y uno en (−200, −150) está cerca de la esquina inferior izquierda. Al mover el ratón por el escenario, Scratch muestra sus coordenadas, lo que ayuda a planificar. Hay un fondo especial llamado <b>«Xy-grid»</b> que muestra la cuadrícula con los ejes. Las coordenadas son muy útiles para colocar objetos en un sitio exacto al empezar un programa o para saber si un personaje ha llegado a un borde.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escenario de Scratch con ejes: x de menos 240 a 240, y de menos 180 a 180, centro en cero cero y un objeto en el punto cien, cincuenta">${BG}
        <rect x="40" y="20" width="180" height="135" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>
        <path d="M40 87.5 H 220 M130 20 V 155" stroke="var(--muted)" stroke-width="1.2"/>
        ${t(130, 172, "x: −240 … 240", { size: 9.5, color: COL.azul })}${t(36, 91, "−240", { size: 8.5, anchor: "end", weight: 400 })}${t(224, 91, "240", { size: 8.5, anchor: "start", weight: 400 })}
        ${t(134, 30, "180", { size: 8.5, anchor: "start", weight: 400 })}${t(134, 152, "−180", { size: 8.5, anchor: "start", weight: 400 })}
        <circle cx="130" cy="87.5" r="3" fill="var(--ink)"/>${t(124, 100, "(0, 0)", { size: 9, anchor: "end" })}
        <circle cx="167.5" cy="68.75" r="6" fill="var(--sun)" stroke="var(--ink)"/>${t(176, 64, "(100, 50)", { size: 9, anchor: "start", color: COL.rojo })}</svg>`,
    },
    {
      html: `<h3>Los objetos</h3><p>Los <mark>objetos</mark> (en inglés, <i>sprites</i>) son los personajes y elementos que aparecen en el escenario y que se pueden programar: el famoso gato de Scratch, una pelota, un coche, un botón, un texto… Cada objeto tiene <b>sus propios programas, disfraces y sonidos</b>. Al empezar un proyecto nuevo aparece el gato, pero se pueden añadir más objetos de cuatro formas, desde el botón con la cara de gato de la lista de objetos: <b>elegir uno de la biblioteca</b>, que tiene cientos ya preparados y ordenados por temas; <b>pintar uno nuevo</b> con el editor de dibujo; elegir uno <b>sorpresa</b> al azar; o <b>subir una imagen</b> desde el ordenador (siempre que podamos usarla, respetando los derechos de autor). En la lista de objetos se pueden cambiar sus <b>propiedades</b>: el <b>nombre</b> (conviene poner nombres claros, como «jugador» o «enemigo», y no «Objeto3»), la posición x e y, el <b>tamaño</b> en porcentaje, la <b>dirección</b> hacia la que mira (90 es hacia la derecha) y si está <b>visible</b> u oculto. Para borrar un objeto, se pulsa la papelera que aparece al seleccionarlo.</p>`,
      video: { id: "A5QJrHhsnBg", titulo: "Descubriendo la interfaz de Scratch", canal: "Programamos", vistas: 14562 },
    },
    {
      html: `<h3>Disfraces</h3><p>Cada objeto puede tener varios <mark>disfraces</mark>: distintas imágenes del mismo personaje. Por ejemplo, el gato tiene dos disfraces con las patas en posiciones diferentes; si se alternan rápidamente, parece que camina. Otros objetos tienen disfraces con distintas expresiones (contento, triste, sorprendido) o posturas (saltar, agacharse). En la pestaña <b>Disfraces</b> se ven todos los disfraces del objeto seleccionado, numerados, y se pueden añadir más, duplicarlos, borrarlos o modificarlos con el <b>editor de dibujo</b>. El editor tiene dos modos: <b>vectorial</b>, en el que el dibujo está formado por figuras (líneas, círculos, rectángulos) que se pueden mover y cambiar de tamaño sin perder calidad, y <b>mapa de bits</b>, en el que se pinta píxel a píxel, como en un cuadro. Herramientas útiles del editor son el pincel, las formas, el texto, el relleno de color, la goma y la selección. También es importante el <b>centro del disfraz</b>: el punto alrededor del cual gira el objeto.</p>`,
    },
    {
      html: `<h3>Fondos y sonidos</h3><p>El escenario no tiene disfraces, sino <mark>fondos</mark>: las imágenes que se ven detrás de los objetos, como los decorados de un teatro. Se eligen desde el panel del escenario (abajo a la derecha), de la biblioteca (playa, castillo, espacio, aula…), pintándolos o subiendo una imagen. Un proyecto puede tener muchos fondos y cambiar de uno a otro durante el programa, por ejemplo para pasar de un nivel a otro o de una escena a otra de una historia. El escenario también puede tener sus propios programas, aunque no se puede mover. Además, tanto los objetos como el escenario pueden tener <mark>sonidos</mark>, que se gestionan en la pestaña <b>Sonidos</b>: se pueden elegir de la biblioteca (efectos, instrumentos, voces, música), <b>grabar</b> con el micrófono o subir un archivo. El editor de sonido permite recortar, cambiar el volumen, acelerar, ralentizar, añadir eco o invertir el sonido. Los sonidos dan mucha vida a un proyecto, pero conviene no abusar de ellos.</p>`,
      video: { id: "Ti8I26KMeJ4", titulo: "Cómo cambiar de escenario en Scratch", canal: "Taller de Videojuegos", vistas: 241695 },
    },
    {
      html: `<h3>El primer programa y cómo guardar</h3><p>Para comprobar que todo funciona, se puede hacer un primer programa muy sencillo. Con el gato seleccionado, arrastramos al área de programas el bloque de evento <b>«al hacer clic en la bandera verde»</b> (categoría Eventos, en amarillo). Debajo, encajamos el bloque <b>«ir a x: 0 y: 0»</b> (Movimiento, en azul) para que el gato empiece siempre en el centro, y luego <b>«decir ¡Hola! durante 2 segundos»</b> (Apariencia, en morado). Al pulsar la bandera verde, el gato se coloca en el centro y saluda. Un consejo importante: casi todos los programas deberían empezar <b>colocando los objetos en su posición inicial</b>, porque si no, cada vez que se ejecuten empezarán donde se quedaron la última vez. Para <mark>guardar</mark> el proyecto: en línea, con «Archivo → Guardar ahora» (se guarda en tu cuenta); sin conexión o para tener una copia, con «Archivo → Guardar en tu ordenador», que crea un archivo con la extensión <b>.sb3</b>. Pon siempre un <b>título</b> claro al proyecto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Primer programa: al hacer clic en la bandera verde, ir a x cero y cero, decir hola durante dos segundos">${BG}
        <path d="M40 34 q 0 -14 30 -14 q 30 0 30 14 H 214 v 24 H 40 Z" fill="#c98a00"/>${et(50, 50, "al hacer clic en 🏁", 156, { anchor: "start", color: "#fff", size: 11 })}
        <rect x="40" y="62" width="174" height="26" rx="4" fill="#4c97ff"/>${et(50, 80, "ir a x: 0 y: 0", 156, { anchor: "start", color: "#fff", size: 11 })}
        <rect x="40" y="92" width="174" height="26" rx="4" fill="#9966ff"/>${et(50, 110, "decir ¡Hola! durante 2 s", 156, { anchor: "start", color: "#fff", size: 11 })}
        ${t(130, 148, "evento → movimiento → apariencia", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Scratch en ocho ideas",
    svg: rejilla([
      ["Scratch", "lenguaje por bloques, gratis", COL.naranja],
      ["Escenario", "480 × 360 puntos", COL.verde],
      ["Coordenadas", "centro (0, 0)", COL.azul],
      ["Objeto", "personaje programable", COL.morado],
      ["Disfraz", "otra imagen del objeto", COL.rojo],
      ["Fondo", "imagen del escenario", COL.agua],
      ["Bandera verde", "inicia el programa", COL.sol],
      ["Archivo .sb3", "proyecto guardado", COL.gris],
    ], 4, 86, "Resumen: Scratch, escenario, coordenadas, objetos, disfraces, fondos, bandera verde y archivos sb3"),
  },
  video: { id: "AFOjxoBQg0U", titulo: "Cambia el fondo o escenario en Scratch: cómo usar fondos personalizados", canal: "Laita Digital", vistas: 19232, megusta: 0, busqueda: "scratch escenario objetos interfaz" },
  ejemplos: [
    { enunciado: "¿Dónde está un objeto situado en (−240, 180)?",
      pasos: ["x = −240: en el borde izquierdo.", "y = 180: en el borde superior."],
      resultado: "En la esquina superior izquierda." },
    { enunciado: "Quieres que una pelota empiece siempre en la parte de abajo del centro del escenario. ¿Qué coordenadas usarías?",
      pasos: ["Centro horizontal: x = 0.", "Abajo, pero sin salirse: y cercano a −180, por ejemplo −150."],
      resultado: "Bloque «ir a x: 0 y: −150» al hacer clic en la bandera." },
    { enunciado: "Estás haciendo una historia con dos escenas: un bosque y una cueva. ¿Qué elementos de Scratch necesitas?",
      pasos: ["Dos fondos para el escenario: bosque y cueva.", "Objetos para los personajes, con disfraces para sus expresiones.", "Sonidos para ambientar.", "Programas que cambien de fondo cuando toque."],
      resultado: "Fondos, objetos con disfraces, sonidos y programas." },
  ],
  errores: [
    "Confundir disfraz (de un objeto) con fondo (del escenario).",
    "Pensar que (0, 0) es la esquina inferior izquierda: es el centro.",
    "Olvidar colocar los objetos en su posición inicial al empezar.",
    "Dejar los nombres por defecto («Objeto1», «Objeto2»).",
    "No guardar el proyecto o guardarlo sin título.",
  ],
  ejercicios: [
    { q: "¿Qué es Scratch y quién lo creó?", sol: "Un lenguaje de programación por bloques gratuito creado en el MIT." },
    { q: "Nombra las zonas principales de la interfaz de Scratch.", sol: "Barra de menús, paleta de bloques, área de programas, escenario y lista de objetos." },
    { q: "¿Cuánto mide el escenario de Scratch?", sol: "480 puntos de ancho y 360 de alto." },
    { q: "¿Entre qué valores va la x? ¿Y la y?", sol: "x entre −240 y 240; y entre −180 y 180." },
    { q: "¿Dónde está un objeto en (120, −90)?", sol: "En la mitad derecha y en la mitad inferior del escenario." },
    { q: "Escribe cuatro formas de añadir un objeto.", sol: "Elegir de la biblioteca, pintar, sorpresa y subir una imagen." },
    { q: "¿Qué es un disfraz? ¿Para qué sirven varios?", sol: "Una imagen del objeto; alternándolos se crean animaciones." },
    { q: "¿Qué diferencia hay entre un objeto y el escenario?", sol: "Los objetos se mueven y tienen disfraces; el escenario no se mueve y tiene fondos." },
    { q: "¿Qué hace la bandera verde? ¿Y el botón rojo?", sol: "Inicia el programa; lo detiene." },
    { q: "¿Qué extensión tienen los proyectos de Scratch guardados en el ordenador?", sol: ".sb3." },
  ],
  quiz: [
    { q: "El centro del escenario es…", o: ["(0, 0)", "(240, 180)", "(−240, −180)"], a: 0, e: "(0, 0)." },
    { q: "La coordenada x indica la posición…", o: ["horizontal", "vertical", "el tamaño"], a: 0, e: "Horizontal." },
    { q: "Las imágenes de un objeto se llaman…", o: ["disfraces", "fondos", "sonidos"], a: 0, e: "Disfraces." },
    { q: "Las imágenes del escenario se llaman…", o: ["fondos", "disfraces", "bloques"], a: 0, e: "Fondos." },
    { q: "Scratch se creó en el…", o: ["MIT", "CERN", "INTEF"], a: 0, e: "MIT." },
    { q: "El escenario mide de ancho…", o: ["480", "360", "100"], a: 0, e: "480." },
    { q: "Una dirección de 90 significa mirar hacia…", o: ["la derecha", "arriba", "la izquierda"], a: 0, e: "Derecha." },
    { q: "Los bloques de Movimiento son de color…", o: ["azul", "amarillo", "verde"], a: 0, e: "Azul." },
    { q: "Los proyectos guardados tienen extensión…", o: [".sb3", ".mp3", ".pdf"], a: 0, e: ".sb3." },
    { q: "El modo de dibujo que no pierde calidad al ampliar es…", o: ["vectorial", "mapa de bits", "foto"], a: 0, e: "Vectorial." },
  ],
  examen: [
    { q: "Un objeto en (−200, 150) está…", o: ["arriba a la izquierda", "abajo a la derecha", "en el centro"], a: 0, e: "x negativa, y positiva." },
    { q: "Los programas del escenario…", o: ["existen, pero no lo mueven", "no existen", "mueven el escenario"], a: 0, e: "Puede tener programas." },
    { q: "Al remezclar un proyecto hay que…", o: ["citar al autor original", "borrarlo", "cambiarle el nombre"], a: 0, e: "Citar." },
  ],
  feynman: ["Para qué sirve cada zona de la interfaz de Scratch", "Cómo funcionan las coordenadas del escenario", "Qué diferencia hay entre objetos, disfraces y fondos"],
  mapa: mapa("SCRATCH", "var(--eso)", [
    ["Interfaz", "bloques · programas · escenario", COL.naranja],
    ["Escenario", "fondos · coordenadas x, y", COL.verde],
    ["Objetos", "disfraces · sonidos · propiedades", COL.morado],
    ["Proyecto", "bandera verde · guardar .sb3", COL.azul],
  ], 300),
  tarjetas: [
    ["Scratch", "Lenguaje de programación por bloques del MIT."],
    ["Escenario", "Zona de 480 × 360 donde ocurre el proyecto."],
    ["Objeto (sprite)", "Personaje o elemento programable."],
    ["Disfraz", "Cada imagen de un objeto."],
    ["Fondo", "Imagen del escenario."],
    ["Coordenada x", "Posición horizontal, de −240 a 240."],
    ["Coordenada y", "Posición vertical, de −180 a 180."],
    ["Bandera verde", "Botón que inicia el programa."],
  ],
  familias: ["Explorad juntos la galería de proyectos de Scratch y elegid uno favorito.", "Cread una cuenta de Scratch con supervisión de la familia.", "Pintad juntos un objeto propio en el editor de Scratch."],
  profesores: {
    saberes: "Entorno Scratch: interfaz, escenario y sistema de coordenadas, objetos y propiedades, disfraces, fondos, sonidos, editor gráfico, primer programa y gestión de proyectos (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Búsqueda del tesoro de coordenadas en el fondo Xy-grid.", "Diseño de un objeto propio con tres disfraces.", "Postal animada con fondo, un objeto y un sonido."],
  },
  fuentes: [RD, wiki("Scratch", "Scratch_(lenguaje_de_programación)"), { t: "Scratch (web oficial)", url: "https://scratch.mit.edu/" }, { t: "Guía de inicio de Scratch", url: "https://scratch.mit.edu/ideas" }],
  revisado: REV,
};
