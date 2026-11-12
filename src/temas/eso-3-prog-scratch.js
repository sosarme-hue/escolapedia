// Programación y robótica 3º ESO: programación por bloques con Scratch. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, filas, mezcla } = require("./_eso3");

const M = "Programación y robótica";
// Bloque tipo «pieza de puzle» con muesca superior. x, y esquina, w ancho, color, texto, sangría.
const bl = (x, y, w, c, txt, h = 22) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${c}" stroke="var(--ink)" stroke-opacity=".25"/>${t(x + 8, y + h / 2 + 4, txt, { c: "#fff", s: 10, a: "start" })}`;
const AM = "#e6a100", AZ = "#4c7ee8", NA = "#e8892c", VE = "#4caf50", LI = "#9a66e0", RO = "#d65c8a";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Programación por bloques con Scratch",
  minutos: 50,
  objetivos: ["Conocer el entorno de Scratch: escenario, objetos, bloques y área de programas", "Programar movimientos, apariencia y sonidos con eventos", "Usar bloques de control, sensores y mensajes", "Crear y compartir una animación o un juego sencillo"],
  claves: ["Scratch", "objeto", "escenario", "evento", "disfraz", "mensaje"],
  pregunta: {
    texto: "¿Se puede programar un videojuego sin escribir una sola línea de código?",
    respuesta: "Sí. Con la <mark>programación por bloques</mark>, las instrucciones son piezas de colores que encajan como un puzle. Así no hay errores de escritura y te concentras en la lógica. <b>Scratch</b>, creado en el MIT, es el entorno más usado del mundo para aprender así.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es Scratch?</h3><p><b>Scratch</b> es un lenguaje de programación visual creado en 2007 por el grupo <i>Lifelong Kindergarten</i> del <b>MIT</b> (Instituto Tecnológico de Massachusetts). Es gratuito y funciona en el navegador o instalado en el ordenador.</p><p>En vez de escribir código, se <mark>arrastran y encajan bloques</mark>. Cada bloque tiene una forma que indica dónde puede ir, así que es imposible cometer errores de sintaxis (comas o paréntesis olvidados). Con Scratch se pueden crear historias interactivas, animaciones, juegos y simulaciones, y compartirlas con una comunidad de millones de personas.</p>`,
    },
    {
      html: `<h3>El entorno de trabajo</h3><ul><li><b>Escenario</b>: el espacio donde ocurre todo. Mide 480 × 360 píxeles y usa coordenadas: el centro es (0, 0), <code>x</code> va de −240 a 240 y <code>y</code> de −180 a 180.</li><li><b>Objetos</b> (<i>sprites</i>): los personajes y elementos. Cada uno tiene sus propios programas, <b>disfraces</b> (aspectos) y sonidos.</li><li><b>Fondos</b>: las imágenes del escenario.</li><li><b>Paleta de bloques</b>: organizada por categorías de colores.</li><li><b>Área de programas</b>: donde se encajan los bloques.</li></ul><p>La bandera verde inicia el programa y la señal de stop lo detiene.</p>`,
      svg: svg("Escenario de Scratch con coordenadas: centro en 0,0, x de menos 240 a 240, y de menos 180 a 180", `<rect x="40" y="20" width="180" height="135" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M40 87.5 H 220 M130 20 V 155" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 3"/><circle cx="130" cy="87.5" r="4" fill="var(--red)"/>
        <circle cx="175" cy="54" r="8" fill="${NA}"/>${t(164, 44, "(120, 90)", { c: "var(--muted)", s: 9, a: "end" })}
        ${t(140, 100, "(0, 0)", { c: "var(--red)", s: 10, a: "start" })}${t(36, 91, "−240", { c: "var(--muted)", s: 9, a: "end" })}${t(224, 91, "240", { c: "var(--muted)", s: 9, a: "start" })}${t(130, 14, "180", { c: "var(--muted)", s: 9 })}${t(130, 168, "−180", { c: "var(--muted)", s: 9 })}`),
      video: { id: "a5DOIvjxiQ0", titulo: "Curso de Scratch 3.0 desde cero", canal: "NecroDev", vistas: 908425, megusta: 0 },
    },
    {
      html: `<h3>Las categorías de bloques</h3>${tabla(["Categoría", "Color", "Ejemplos"], [["<b>Movimiento</b>", "azul", "mover 10 pasos, girar, ir a x: y:, deslizar"], ["<b>Apariencia</b>", "morado", "decir, cambiar disfraz, mostrar, esconder, tamaño"], ["<b>Sonido</b>", "rosa", "tocar sonido, cambiar volumen"], ["<b>Eventos</b>", "amarillo", "al hacer clic en la bandera, al presionar tecla, enviar mensaje"], ["<b>Control</b>", "naranja", "esperar, repetir, por siempre, si… entonces"], ["<b>Sensores</b>", "azul claro", "¿tocando…?, preguntar, cronómetro"], ["<b>Operadores</b>", "verde", "+, −, número al azar, y, o, no"], ["<b>Variables</b>", "naranja oscuro", "crear variable, sumar a, listas"]])}<p>Además se pueden crear <b>bloques propios</b> y añadir <b>extensiones</b> (lápiz, música, micro:bit…).</p>`,
    },
    {
      html: `<h3>Eventos: cuándo empieza cada programa</h3><p>Todo programa en Scratch empieza con un <b>bloque de evento</b> (con forma de «sombrero»). El evento indica <mark>cuándo</mark> se ejecutan los bloques que cuelgan debajo:</p><ul><li>«al hacer clic en la bandera verde»: al iniciar.</li><li>«al presionar la tecla espacio»: al pulsar una tecla.</li><li>«al hacer clic en este objeto».</li><li>«al recibir mensaje»: cuando otro objeto envía una señal.</li></ul><p>Un objeto puede tener varios programas a la vez, cada uno con su evento, y todos se ejecutan <b>en paralelo</b>. Es la base de la <b>programación orientada a eventos</b>, como funcionan las apps y los videojuegos.</p>`,
      svg: svg("Programa por bloques: al hacer clic en la bandera, ir a 0 0, por siempre mover 10 pasos y rebotar si toca un borde", `<ellipse cx="52" cy="28" rx="32" ry="13" fill="${AM}"/><rect x="20" y="26" width="160" height="24" rx="4" fill="${AM}"/>${t(28, 42, "al hacer clic en ⚑", { c: "#fff", s: 10, a: "start" })}${bl(20, 52, 150, AZ, "ir a x: 0 y: 0")}<path d="M20 76 H 190 V 98 H 36 V 146 H 110 V 160 H 20 Z" fill="${NA}"/>${t(28, 91, "por siempre", { c: "#fff", s: 10, a: "start" })}${bl(36, 99, 140, AZ, "mover 10 pasos")}${bl(36, 122, 164, AZ, "rebotar si toca un borde")}`),
    },
    {
      html: `<h3>Movimiento y apariencia</h3><p>Con los bloques de <b>movimiento</b> los objetos se desplazan por el escenario: «mover 10 pasos» avanza en la dirección a la que apunta; «ir a x: y:» lo coloca en una posición exacta; «deslizar en 1 segundo a…» lo mueve suavemente.</p><p>Con los de <b>apariencia</b> cambian de aspecto. La <b>animación</b> se consigue alternando disfraces con una pequeña espera, igual que los fotogramas del cine:</p><pre>por siempre
    siguiente disfraz
    esperar 0.2 segundos</pre><p>Si además el objeto se mueve mientras cambia de disfraz, parece que camina. Los bloques «decir» y «pensar» muestran bocadillos como en un cómic.</p>`,
      video: { id: "R0CUTt_Z254", titulo: "Movimientos básicos en Scratch", canal: "AQ Programacion", vistas: 124616, megusta: 0 },
    },
    {
      html: `<h3>Control y sensores: interacción</h3><p>Los bloques de <b>control</b> organizan el flujo: <b>repetir</b>, <b>por siempre</b>, <b>esperar</b> y <b>si… entonces… si no</b>. Los <b>sensores</b> responden preguntas sobre lo que pasa: ¿estoy tocando el borde?, ¿se ha pulsado una tecla?, ¿a qué distancia está el ratón?</p><p>Combinados, permiten crear juegos. Por ejemplo, mover un personaje con las flechas:</p><pre>al hacer clic en ⚑
por siempre
    si ¿tecla flecha derecha presionada? entonces
        cambiar x en 5
    si ¿tocando Enemigo? entonces
        decir "¡Ay!" durante 1 segundos</pre><p>El bucle «por siempre» comprueba continuamente las condiciones, decenas de veces por segundo.</p>`,
    },
    {
      html: `<h3>Mensajes: que los objetos se comuniquen</h3><p>En un proyecto con varios objetos, a menudo uno tiene que avisar a otro. Para eso se usan los <b>mensajes</b>:</p><ul><li>«<b>enviar</b> mensaje <i>fin del juego</i>»: lanza una señal a todos los objetos.</li><li>«<b>al recibir</b> <i>fin del juego</i>»: el objeto que escucha ejecuta su programa (por ejemplo, el escenario cambia al fondo de «Game Over»).</li></ul><p>Los mensajes también sirven para contar historias en orden: el personaje A habla y, al terminar, envía «turno de B»; B lo recibe y responde. Así se coordinan escenas sin depender de esperas cronometradas, que suelen descuadrarse.</p>`,
    },
    {
      html: `<h3>De la idea al proyecto</h3><ol><li><b>Idea</b> y descomposición: ¿qué objetos hay?, ¿qué hace cada uno?</li><li><b>Diseño</b>: dibuja o elige los objetos, disfraces y fondos.</li><li><b>Programa por partes</b>: primero el movimiento del protagonista, luego los enemigos, después los puntos.</li><li><b>Prueba</b> cada parte con la bandera verde antes de seguir.</li><li><b>Depura</b>: si algo falla, haz clic en un bloque suelto para ejecutarlo y ver qué hace.</li><li><b>Comparte</b> el proyecto con instrucciones y créditos.</li></ol><p>En la comunidad de Scratch puedes ver el código de otros proyectos y hacer una <b>reinvención</b> (<i>remix</i>), citando siempre al autor original.</p>`,
    },
    {
      html: `<h3>Más allá de Scratch</h3><p>La programación por bloques es una puerta de entrada. Los mismos conceptos (eventos, bucles, condicionales, variables) aparecen en los lenguajes escritos como <b>Python</b> o <b>JavaScript</b>.</p><ul><li><b>MakeCode</b> (Microsoft) programa placas micro:bit y juegos con bloques y permite ver el código equivalente en JavaScript o Python.</li><li><b>App Inventor</b> (MIT) crea aplicaciones para móviles con bloques.</li><li><b>Code.org</b> y <b>Blockly</b> ofrecen retos y la tecnología de bloques en la que se basan muchas herramientas.</li></ul><p>Lo que aprendes con Scratch no se pierde: es la lógica de cualquier programa.</p>`,
    },
  ],
  figura: {
    titulo: "Scratch en cinco ideas",
    svg: filas("Objetos y escenario con coordenadas; eventos que inician programas; movimiento y apariencia; control y sensores; mensajes entre objetos", [["Objetos", "sprites con disfraces y sonidos · escenario 480 × 360", "var(--pen)"], ["Eventos", "bandera verde · tecla · clic · al recibir", "var(--sun)"], ["Movimiento", "mover, girar, ir a x: y: · disfraces = animación", "var(--inf)"], ["Control", "repetir · por siempre · si… entonces · sensores", "var(--leaf)"], ["Mensajes", "enviar y recibir para coordinar objetos", "var(--red)"]], 200),
  },
  video: { id: "Wc5INKPs_IM", titulo: "Cómo crear un juego: tutorial de Scratch", canal: "José David", vistas: 918869, megusta: 0, busqueda: "scratch para principiantes" },
  quiz: mezcla([
    { q: "Scratch fue creado por el…", o: ["MIT", "Google", "Microsoft"], a: 0, e: "Grupo Lifelong Kindergarten, 2007." },
    { q: "Los personajes de Scratch se llaman…", o: ["objetos (sprites)", "fondos", "variables"], a: 0, e: "Tienen disfraces y sonidos." },
    { q: "El centro del escenario tiene coordenadas…", o: ["(0, 0)", "(240, 180)", "(480, 360)"], a: 0, e: "x de −240 a 240, y de −180 a 180." },
    { q: "Todo programa empieza con un bloque de…", o: ["eventos", "operadores", "sonido"], a: 0, e: "Con forma de sombrero." },
    { q: "Para animar un objeto se alterna…", o: ["el disfraz con una pequeña espera", "el fondo", "el volumen"], a: 0, e: "Como fotogramas." },
    { q: "El bloque «por siempre» pertenece a la categoría…", o: ["control", "movimiento", "apariencia"], a: 0, e: "Naranja." },
    { q: "«¿tocando borde?» es un bloque de…", o: ["sensores", "eventos", "sonido"], a: 0, e: "Responde preguntas." },
    { q: "Para que un objeto avise a otro se usan…", o: ["mensajes", "disfraces", "fondos"], a: 0, e: "Enviar y al recibir." },
    { q: "Con la programación por bloques es imposible cometer errores de…", o: ["sintaxis", "lógica", "diseño"], a: 0, e: "Los bloques solo encajan donde pueden ir." },
    { q: "Hacer una versión propia de un proyecto ajeno citando al autor es una…", o: ["reinvención (remix)", "copia ilegal", "extensión"], a: 0, e: "Cultura de compartir." },
  ]),
  examen: mezcla([
    { q: "Si un objeto está en x = 100 y ejecuta «cambiar x en −30», queda en…", o: ["70", "130", "−30"], a: 0, e: "100 − 30." },
    { q: "Un objeto apunta a la derecha (90°) y «mueve 10 pasos». Su x…", o: ["aumenta 10", "disminuye 10", "no cambia"], a: 0, e: "Derecha = x positiva." },
    { q: "Dos programas del mismo objeto con «al hacer clic en ⚑» se ejecutan…", o: ["a la vez", "uno tras otro", "solo el primero"], a: 0, e: "En paralelo." },
  ]),
  feynman: ["Qué es la programación por bloques y su ventaja", "Las partes del entorno de Scratch", "Cómo se anima un objeto", "Para qué sirven los mensajes"],
  mapa: mapa("SCRATCH", "var(--eso)", [
    ["Objetos", "disfraces · sonidos", "var(--pen)"],
    ["Eventos", "bandera · tecla", "var(--sun)"],
    ["Control", "bucles · si", "var(--leaf)"],
    ["Mensajes", "enviar · recibir", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Objeto (sprite)", "Personaje o elemento con sus programas, disfraces y sonidos."],
    ["Escenario", "480 × 360 píxeles, centro en (0, 0)."],
    ["Disfraz", "Cada aspecto de un objeto; alternarlos crea animación."],
    ["Evento", "Bloque sombrero que indica cuándo empieza un programa."],
    ["Por siempre", "Bucle que se repite sin fin."],
    ["Sensor", "Bloque que pregunta: ¿tocando?, ¿tecla presionada?"],
    ["Mensaje", "Señal que un objeto envía y otros reciben."],
    ["Remix", "Versión propia de un proyecto ajeno, citando al autor."],
  ],
  familias: ["Pedid a vuestro hijo o hija que os enseñe un proyecto de Scratch y os explique un bloque.", "Probad juntos a crear un objeto que diga vuestro nombre al hacer clic.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Programación por bloques: entorno de Scratch, objetos, coordenadas, eventos, movimiento, apariencia, control, sensores, mensajes y publicación de proyectos (RD 217/2022, programación y competencia digital).",
    ideas: ["Reto: animar el nombre de cada alumno letra a letra.", "Juego de atrapar objetos que caen, por fases.", "Feria de proyectos con prueba cruzada entre grupos."],
  },
  fuentes: [RD, { t: "Scratch (MIT): entorno y guías para educadores", url: "https://scratch.mit.edu/educators" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Programas resueltos",
  ejemplos: [
    { enunciado: "Haz que un gato camine de izquierda a derecha animándose y rebote en los bordes.",
      pasos: ["al hacer clic en ⚑ → ir a x: −200 y: 0.", "por siempre:", "    mover 10 pasos; siguiente disfraz; esperar 0,1 s;", "    rebotar si toca un borde."],
      resultado: "El gato camina y se da la vuelta en los bordes." },
    { enunciado: "Mueve un objeto con las cuatro flechas del teclado.",
      pasos: ["al presionar flecha derecha → cambiar x en 10.", "al presionar flecha izquierda → cambiar x en −10.", "al presionar flecha arriba → cambiar y en 10.", "al presionar flecha abajo → cambiar y en −10."],
      resultado: "Cuatro programas cortos, uno por evento." },
    { enunciado: "Cuando la pelota toque al jugador, debe aparecer el fondo «Has perdido».",
      pasos: ["Pelota: por siempre, si ¿tocando Jugador? entonces enviar «perder».", "Escenario: al recibir «perder» → cambiar fondo a «Has perdido».", "Todos: al recibir «perder» → detener todos."],
      resultado: "Los objetos se coordinan con un mensaje." },
  ],
  errores: [
    "Olvidar el bloque de evento: el programa nunca se ejecuta.",
    "Programar en el objeto equivocado (los programas son de cada objeto).",
    "No poner espera al cambiar disfraces: la animación va demasiado rápida.",
    "No colocar al objeto en su posición inicial al empezar.",
    "Usar «repetir 10» cuando se necesita «por siempre» para comprobar colisiones.",
    "Compartir un remix sin citar el proyecto original.",
  ],
  ejercicios: [
    { q: "¿Qué categoría de bloques usarías para que un objeto diga «Hola»?", sol: "Apariencia (bloque «decir»)." },
    { q: "Un objeto está en (50, −20) y ejecuta «ir a x: 0 y: 0». ¿Dónde queda?", sol: "En el centro del escenario, (0, 0)." },
    { q: "¿Qué hace este programa: repetir 4 veces → mover 100 pasos, girar 90°, con el lápiz bajado?", sol: "Dibuja un cuadrado de 100 pasos de lado." },
    { q: "Escribe los bloques para que un objeto cambie de color al hacer clic sobre él.", sol: "al hacer clic en este objeto → cambiar efecto color en 25." },
    { q: "¿Por qué un programa de colisión debe estar dentro de «por siempre»?", sol: "Porque hay que comprobar continuamente si se tocan; fuera del bucle solo se comprobaría una vez." },
    { q: "Explica la diferencia entre «enviar mensaje» y «enviar mensaje y esperar».", sol: "El segundo espera a que terminen los programas que reciben el mensaje antes de continuar." },
    { q: "¿Qué valor de x tiene el borde derecho del escenario?", sol: "240." },
    { q: "Diseña el programa de un objeto que siga al puntero del ratón.", sol: "al hacer clic en ⚑ → por siempre → apuntar hacia puntero del ratón; mover 5 pasos." },
    { q: "Descompón el juego «atrapa la fruta» en objetos y programas.", sol: "Cesta (se mueve con flechas), fruta (cae desde arriba en x al azar; si toca la cesta, suma punto y vuelve arriba), escenario (fondo y fin de partida)." },
    { q: "Crea una historia interactiva de dos personajes que dialoguen usando mensajes.", sol: "Respuesta abierta; debe usar enviar y al recibir para que cada personaje hable en su turno." },
  ],
};
