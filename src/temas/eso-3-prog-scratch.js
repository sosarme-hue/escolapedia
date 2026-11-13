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

require("./_eso3L7").libro(module.exports, {
  lectura: ["Cien millones de proyectos", `<p>En la web de Scratch hay más de cien millones de proyectos compartidos por niñas, niños y jóvenes de todo el mundo: juegos de plataformas, simulaciones de ecosistemas, felicitaciones animadas, cuentos interactivos, instrumentos musicales, cuestionarios para estudiar historia… Cada uno de ellos se puede abrir, jugar y, con un clic en «Ver dentro», ver exactamente cómo está programado. Si te gusta, puedes hacer tu propia versión, un <b>remix</b>, citando al autor original.</p><p>Muchos programadores profesionales empezaron así: copiando la idea de un juego, cambiándole los personajes, añadiendo un nivel y, poco a poco, inventando proyectos propios. Scratch se creó en el MIT con un lema: «imagina, programa, comparte». Su objetivo no es solo enseñar a programar, sino a <b>crear</b> con la tecnología y a pensar de forma creativa, razonar con orden y trabajar en colaboración.</p><p>En este tema conocerás a fondo el entorno de Scratch: los objetos, los escenarios y las categorías de bloques; aprenderás a animar personajes, a usar sonido y el lápiz, a hacer proyectos interactivos con preguntas y sensores, a comunicar objetos con mensajes y a multiplicarlos con clones. Al final, diseñarás y compartirás tu propio proyecto.</p>`],
  mas: [
    ["<h3>Movimiento y apariencia</h3>", `<p>Los bloques de <b>apariencia</b> cambian cómo se ve el objeto: «cambiar a disfraz», «siguiente disfraz» (para animar alternando dibujos con una pequeña espera), «decir Hola durante 2 segundos», «cambiar tamaño», «fijar efecto color», «mostrar» y «esconder». También el escenario tiene sus bloques: «cambiar fondo a» permite pasar de la portada al juego y del juego a la pantalla final. El orden de las capas (delante o detrás) decide qué objeto se ve encima.</p>`],
    ["<h3>El entorno de trabajo</h3>", `<p>Cada objeto tiene tres pestañas: <b>Código</b>, donde se encajan los bloques; <b>Disfraces</b>, con un editor de dibujo (vectorial o de mapa de bits) para crear o modificar sus imágenes; y <b>Sonidos</b>. Los programas pertenecen a cada objeto: si un script no funciona, lo primero es comprobar que está en el objeto correcto. El proyecto se guarda en la nube con una cuenta o se descarga al ordenador como archivo .sb3.</p>`],
    ["<h3>Eventos: cuándo empieza cada programa</h3>", `<p>Un mismo objeto puede tener varios scripts que empiezan con el mismo evento; al pulsar la bandera verde se ejecutan todos <b>a la vez</b>, en paralelo. Esto es muy útil (uno mueve el objeto y otro lo anima), pero exige cuidado: si dos scripts cambian la misma variable o la misma posición, pueden interferir. El botón rojo de <b>detener</b> para todos los scripts.</p>`],
    ["<h3>Mensajes: que los objetos se comuniquen</h3>", `<p>Los mensajes son la mejor forma de organizar un juego en <b>escenas</b>: un mensaje «empezar» oculta la portada y muestra a los personajes; «nivel 2» cambia el fondo y aumenta la velocidad de los enemigos; «fin del juego» detiene todo y muestra la puntuación. Conviene dar a los mensajes nombres que expliquen qué ocurre.</p>`],
    ["<h3>Más allá de Scratch</h3>", `<p>Lo que se aprende con Scratch se traslada directamente: un «por siempre» es un while True en Python, un «si… entonces» es un if y una variable es una variable. Muchos estudiantes dan el salto con entornos híbridos, que muestran a la vez los bloques y el código de texto equivalente, como MakeCode (con JavaScript y Python) o EduBlocks.</p>`],
    ["<h3>Control y sensores: interacción</h3>", `<p>Los sensores también miden: «distancia a», «posición x del ratón», «cronómetro» o «volumen del sonido» (con el micrófono). Combinados con condicionales permiten proyectos muy variados: un personaje que huye cuando el ratón se acerca, un juego que se acaba a los 60 segundos o una animación que reacciona cuando damos una palmada.</p>`],
  ],
  svgs: [
    ["<h3>¿Qué es Scratch?</h3>", "Imagina, programa, comparte", [["Imagina", "una idea propia"], ["Programa", "encajando bloques"], ["Comparte", "y aprende de otros"]], "El lema de Scratch"],
    ["<h3>Las categorías de bloques</h3>", "Categorías de bloques", [["Movimiento", "mover y girar"], ["Eventos y control", "cuándo y cómo"], ["Sensores", "preguntar y medir"], ["Variables", "guardar datos"]], "Bloques por colores"],
    ["<h3>Movimiento y apariencia</h3>", "Animar un objeto", [["Siguiente disfraz", "cambia el dibujo"], ["Esperar 0,2 s", "para que se vea"], ["Repetir", "por siempre"]], "Animación por disfraces"],
    ["<h3>Control y sensores: interacción</h3>", "Sensores de Scratch", [["¿Tocando?", "borde, color, objeto"], ["¿Tecla pulsada?", "teclado"], ["Medir", "distancia, cronómetro"]], "Interactuar con el usuario"],
    ["<h3>Mensajes: que los objetos se comuniquen</h3>", "Mensajes", [["Enviar", "fin del juego"], ["Recibir", "cada objeto reacciona"], ["Escenas", "portada, juego, final"]], "Comunicar objetos"],
    ["<h3>De la idea al proyecto</h3>", "Fases de un proyecto Scratch", [["Idea", "objetivo y reglas"], ["Diseño", "objetos y fondos"], ["Programar", "por partes"], ["Probar", "y mejorar"]], "De la idea al juego"],
    ["<h3>Más allá de Scratch</h3>", "Después de Scratch", [["MakeCode", "placas y robots"], ["Snap!", "bloques avanzados"], ["Python", "lenguaje de texto"]], "Siguientes pasos"],
  ],
  bloques: [
    { tras: "<h3>Movimiento y apariencia</h3>", html: `<h3>Sonido y música</h3><p>Los proyectos cobran vida con <b>sonido</b>. Cada objeto tiene su pestaña de sonidos, donde se pueden elegir de la biblioteca, grabar con el micrófono o subir archivos. Los bloques «iniciar sonido» (que continúa con el programa mientras suena) y «tocar sonido hasta que termine» (que espera a que acabe) permiten añadir efectos: un salto, una moneda, una explosión. Con «fijar volumen» y los efectos de tono se puede variar cómo suenan.</p><p>La extensión <b>Música</b> añade bloques para tocar notas e instrumentos: «tocar nota 60 durante 0,25 pulsos» toca un do central; cambiando el número se obtienen otras notas (62 es re, 64 es mi…). Combinando notas, esperas y bucles se programan melodías, y con eventos de teclado se puede construir un <b>piano</b> o una batería. Un consejo: la música de fondo suele ir en el escenario dentro de un «por siempre» con «tocar sonido hasta que termine», para que se repita sin cortes.</p>`, svg: ["Sonido en Scratch", [["Iniciar sonido", "y seguir el programa"], ["Tocar hasta que termine", "espera al final"], ["Extensión Música", "notas e instrumentos"]], "Dar voz al proyecto"] },
    { tras: "<h3>Sonido y música</h3>", html: `<h3>El lápiz: dibujar con código</h3><p>La extensión <b>Lápiz</b> convierte a cualquier objeto en un pincel: con «bajar lápiz», el objeto deja un rastro al moverse, y con «subir lápiz» deja de dibujar. Se pueden cambiar el color y el grosor, y «borrar todo» limpia el escenario. Es una forma excelente de practicar bucles y geometría: «repetir 4 veces: mover 100 pasos, girar 90°» dibuja un cuadrado, y para cualquier polígono regular de n lados el giro es 360/n grados.</p><p>Combinando bucles anidados y pequeños cambios se obtienen figuras sorprendentes: si se repite 36 veces «dibujar un cuadrado y girar 10°» aparece una flor geométrica; si en cada vuelta se cambia un poco el color, el dibujo se llena de degradados. El bloque «sellar» imprime la imagen del objeto en el fondo, útil para dibujar estrellas en un cielo o huellas. El lápiz también sirve para hacer gráficas: un objeto que sube y baja según un dato va trazando su evolución.</p>`, svg: ["Dibujar con el lápiz", [["Bajar lápiz", "deja rastro"], ["Cuadrado", "repetir 4: mover y girar 90°"], ["Flor", "36 cuadrados girando 10°"]], "Geometría con código"] },
    { tras: "<h3>Control y sensores: interacción</h3>", html: `<h3>Preguntar y responder: proyectos interactivos</h3><p>El bloque «<b>preguntar … y esperar</b>» muestra una pregunta y un cuadro de texto en el que el usuario escribe. Lo que escribe se guarda en el bloque redondo «<b>respuesta</b>», que se puede comparar con un condicional o guardar en una variable. Así se programan cuestionarios, calculadoras, conversaciones con un personaje o juegos de adivinanzas.</p><p>Un concurso típico: preguntar «¿Cuál es la capital de Portugal?» y esperar; si respuesta = «Lisboa», decir «¡Correcto!» y sumar 1 a puntos; si no, decir «La respuesta era Lisboa». Para que acepte «lisboa» en minúsculas, Scratch no distingue mayúsculas en las comparaciones de texto. Con operadores de texto («unir», «letra 1 de», «longitud de») se pueden construir frases con el nombre del jugador: «Hola, » unido a respuesta. Guardando preguntas y respuestas en <b>listas</b>, un mismo script sirve para cualquier número de preguntas.</p>`, svg: ["Preguntar y responder", [["Preguntar", "y esperar"], ["Respuesta", "lo que escribe el usuario"], ["Comparar", "si respuesta = …"]], "Proyectos interactivos"], video: "preguntas" },
    { tras: "<h3>Mensajes: que los objetos se comuniquen</h3>", html: `<h3>Clones: muchos objetos a la vez</h3><p>En muchos juegos hacen falta muchos objetos iguales: gotas de lluvia, disparos, enemigos, estrellas. En lugar de crear cincuenta objetos a mano, se usan los <b>clones</b>. El bloque «crear clon de mí mismo» hace una copia del objeto, con sus mismos disfraces y programas, y el evento «al comenzar como clon» indica qué debe hacer cada copia: aparecer en una posición aleatoria, caer, moverse. Cuando ya no hace falta, «borrar este clon» lo elimina.</p><p>Un ejemplo: el objeto «gota» se esconde al empezar y, por siempre, crea un clon cada 0,2 segundos. Cada clon aparece en x aleatoria y arriba del todo, se muestra, baja hasta el suelo y se borra. Las variables «solo para este objeto» son distintas para cada clon, lo que permite que cada enemigo tenga su propia energía. Scratch permite hasta 300 clones a la vez, por eso hay que borrarlos cuando salen del escenario; si no, el proyecto se vuelve lento o deja de crear clones nuevos.</p>`, svg: ["Clones", [["Crear clon", "copia del objeto"], ["Al comenzar como clon", "qué hace cada copia"], ["Borrar este clon", "al terminar"]], "Multiplicar objetos"] },
    { tras: "<h3>De la idea al proyecto</h3>", html: `<h3>Compartir, remezclar y comentar</h3><p>Al <b>compartir</b> un proyecto en la web de Scratch, cualquiera puede verlo, jugarlo, dejar comentarios y hacer un <b>remix</b>. Todos los proyectos compartidos tienen una licencia <b>Creative Commons BY-SA</b>: se pueden reutilizar citando al autor y compartiendo la nueva versión con la misma licencia. Scratch añade automáticamente un enlace al proyecto original en los remixes, pero es de buena educación mencionarlo también en las notas y explicar qué se ha cambiado.</p><p>Una buena página de proyecto incluye <b>instrucciones</b> claras (qué teclas usar, cuál es el objetivo) y <b>notas y créditos</b> (quién ha hecho el proyecto, qué imágenes o sonidos son de otros). La comunidad tiene normas: ser respetuoso, dar críticas constructivas, no compartir datos personales (nombre completo, dirección, colegio, fotos) y no subir contenido ajeno sin permiso. Los <b>estudios</b> reúnen proyectos sobre un tema, y el profesorado puede crear cuentas de clase para compartir solo dentro del grupo.</p>`, svg: ["Compartir en la comunidad", [["Instrucciones", "cómo se juega"], ["Créditos", "autores y recursos"], ["Licencia", "CC BY-SA en remixes"], ["Privacidad", "sin datos personales"]], "Imagina, programa, comparte"] },
  ],
  grupos: [3, 4, 4, 3],
  ejemplos: [
    ["Programa un piano de tres notas con las teclas A, S y D usando la extensión Música.", ["Al presionar tecla a: tocar nota 60 durante 0,5 pulsos.", "Al presionar tecla s: tocar nota 62 durante 0,5 pulsos.", "Al presionar tecla d: tocar nota 64 durante 0,5 pulsos."], "Do, re y mi con tres eventos de teclado."],
    ["Dibuja una flor con el lápiz: 12 hexágonos girando entre uno y otro.", ["Bajar lápiz.", "Repetir 12: (repetir 6: mover 50, girar 60°) y girar 30°.", "Subir lápiz."], "360 / 12 = 30° entre hexágonos: la flor queda completa."],
    ["Haz que caigan estrellas desde arriba usando clones.", ["Objeto estrella: al hacer clic en ⚑: esconder; por siempre: crear clon de mí mismo; esperar 0,5 s.", "Al comenzar como clon: ir a x: aleatorio(−230, 230) y: 180; mostrar.", "Repetir hasta que y < −170: cambiar y en −4.", "Borrar este clon."], "Cada medio segundo aparece una estrella que cae y se borra al llegar abajo."],
  ],
  niveles: "bbmbmmbmmm",
  ejercicios: [
    ["b", "¿Qué diferencia hay entre «iniciar sonido» y «tocar sonido hasta que termine»?", "El primero empieza el sonido y el programa sigue; el segundo espera a que el sonido acabe antes de continuar."],
    ["b", "¿Qué hacen «bajar lápiz» y «subir lápiz»?", "Con el lápiz bajado el objeto dibuja al moverse; con el lápiz subido se mueve sin dibujar."],
    ["b", "¿Dónde se guarda lo que escribe el usuario tras «preguntar y esperar»?", "En el bloque «respuesta»."],
    ["b", "¿Para qué sirven los clones?", "Para crear muchas copias de un objeto (gotas, enemigos, disparos) sin tener que hacerlas a mano."],
    ["b", "¿Qué licencia tienen los proyectos compartidos en Scratch?", "Creative Commons BY-SA: reutilizar citando al autor y compartiendo igual."],
    ["b", "Escribe tres datos que no debes compartir en tu perfil de Scratch.", "Nombre completo, dirección, nombre del colegio, teléfono o fotos personales."],
    ["m", "Programa un saludo personalizado: pregunta el nombre y responde «Hola, [nombre]».", "Preguntar «¿Cómo te llamas?» y esperar; decir (unir «Hola, » respuesta) durante 2 segundos."],
    ["m", "Dibuja un triángulo equilátero y un pentágono con el lápiz. ¿Qué giros usas?", "Triángulo: repetir 3: mover 100, girar 120°. Pentágono: repetir 5: mover 100, girar 72°."],
    ["m", "¿Por qué hay que borrar los clones cuando salen del escenario?", "Porque Scratch admite un máximo de 300 clones; si no se borran, el proyecto se ralentiza y deja de crear clones nuevos."],
    ["m", "Programa una música de fondo que se repita sin parar en el escenario.", "Escenario: al hacer clic en ⚑: por siempre: tocar sonido «música» hasta que termine."],
    ["m", "Diseña un cuestionario de 3 preguntas que cuente los aciertos.", "Fijar aciertos a 0. Preguntar P1; si respuesta = R1: sumar 1. Igual con P2 y P3. Al final: decir (unir «Aciertos: » aciertos)."],
    ["m", "Haz que cada clon de enemigo tenga su propia energía (3) y desaparezca al llegar a 0.", "Variable «energía» solo para este objeto. Al comenzar como clon: fijar energía a 3. Si toca disparo: cambiar energía en −1; si energía = 0: borrar este clon."],
    ["m", "¿Qué debe incluir la página de un proyecto compartido?", "Instrucciones de uso, notas y créditos (autores, recursos usados y proyecto original si es un remix)."],
    ["m", "Explica qué hace: repetir 36: (repetir 4: mover 80, girar 90°), girar 10°.", "Dibuja 36 cuadrados, girando 10° entre cada uno: una flor o rosetón circular (36 · 10° = 360°)."],
    ["m", "¿Cómo harías que un personaje huya cuando el ratón se acerca a menos de 50 pasos?", "Por siempre: si distancia a puntero del ratón < 50: apuntar en dirección contraria (girar 180° respecto al ratón) y mover 10 pasos."],
    ["a", "Diseña un juego de disparos con clones: nave controlada con flechas, disparos con la barra espaciadora y enemigos que caen. Describe objetos y scripts.", "Nave: se mueve con flechas; al presionar espacio: crear clon de disparo. Disparo (clon): ir a la nave, subir hasta el borde o tocar enemigo y borrarse. Enemigo: crea clones cada segundo en x aleatoria, bajan; si tocan disparo: sumar puntos y borrarse; si tocan la nave: restar vida. Escenario: muestra «Game over» al recibir el mensaje."],
    ["a", "Programa un instrumento que cambie el tono según la posición x del ratón.", "Por siempre: si ratón presionado: tocar nota (redondear((posición x del ratón + 240) / 20) + 48) durante 0,25 pulsos. Así, de izquierda a derecha, las notas suben de 48 a 72."],
    ["a", "Crea un generador de dibujos aleatorios con el lápiz: color, tamaño y número de lados al azar.", "Por siempre: ir a posición aleatoria; fijar color del lápiz a aleatorio(0, 100); n ← aleatorio(3, 8); tam ← aleatorio(20, 60); bajar lápiz; repetir n: mover tam, girar 360/n; subir lápiz; esperar 0,5 s."],
    ["a", "Haz un remix de un proyecto de la comunidad: explica qué cambiarías, cómo lo citarías y qué normas respetarías.", "Elegir un juego, añadir un nivel nuevo y una puntuación máxima. En notas y créditos: «Remix de [título] de [usuario]; he añadido el nivel 2 y el récord». Respetar la licencia BY-SA, no usar recursos sin permiso y no incluir datos personales."],
    ["a", "Compara mensajes y clones: ¿cuándo usarías cada uno? Pon un ejemplo de proyecto que necesite los dos.", "Mensajes: para coordinar objetos distintos (empezar nivel, fin del juego). Clones: para muchos objetos iguales (meteoritos). Un juego de meteoritos usa clones para los meteoritos y un mensaje «fin del juego» cuando la nave pierde todas las vidas, para que todos los clones se detengan."],
  ],
  cuartas: ["Apple", "listas", "(−240, −180)", "lápiz", "el tamaño sin espera", "sonido", "lápiz", "variables", "ortografía", "plagio", "100", "aumenta 100", "nunca"],
  quiz: [
    ["Para que el programa espere a que acabe un sonido se usa…", ["iniciar sonido", "tocar sonido hasta que termine", "detener sonidos", "fijar volumen"], 1, "Espera al final."],
    ["La extensión que permite dibujar es…", ["Música", "Lápiz", "Traducir", "Vídeo"], 1, "Lápiz."],
    ["Para dibujar un hexágono se gira…", ["90°", "60°", "45°", "120°"], 1, "360 / 6."],
    ["Lo que escribe el usuario se guarda en…", ["respuesta", "disfraz", "fondo", "volumen"], 0, "Bloque respuesta."],
    ["Un clon empieza a funcionar con el evento…", ["al hacer clic en ⚑", "al comenzar como clon", "al recibir", "al presionar tecla"], 1, "Al comenzar como clon."],
    ["El máximo de clones a la vez en Scratch es…", ["30", "300", "3.000", "sin límite"], 1, "300."],
    ["Una variable «solo para este objeto» en un clon…", ["la comparten todos", "es propia de cada clon", "no existe", "se borra sola"], 1, "Cada clon tiene la suya."],
    ["Los proyectos compartidos en Scratch tienen licencia…", ["©", "CC BY-SA", "de pago", "ninguna"], 1, "Se pueden remezclar citando."],
    ["En la página de un proyecto conviene poner…", ["la dirección de casa", "instrucciones y créditos", "la contraseña", "nada"], 1, "Para que se entienda."],
    ["La nota 60 en la extensión Música es…", ["do central", "la", "mi", "sol"], 0, "Do central."],
  ],
  examen: [
    ["Para dibujar un octógono se gira…", ["40°", "45°", "60°", "90°"], 1, "360 / 8."],
    ["«Borrar este clon» se usa para…", ["borrar el proyecto", "eliminar la copia cuando ya no sirve", "borrar el lápiz", "borrar variables"], 1, "Evita la lentitud."],
    ["Un remix debe…", ["ocultar el original", "citar al autor original", "cobrarse", "borrar comentarios"], 1, "Licencia BY-SA."],
    ["El bloque «unir» sirve para…", ["juntar textos", "sumar números", "crear clones", "dibujar"], 0, "Une cadenas de texto."],
    ["«Sellar» con el lápiz…", ["borra todo", "imprime la imagen del objeto en el fondo", "sube el lápiz", "cambia el color"], 1, "Deja una copia dibujada."],
  ],
  tarjetas: [["Extensión Lápiz", "Permite que un objeto dibuje al moverse."], ["Preguntar y esperar", "Pide un dato; se guarda en «respuesta»."], ["Clon", "Copia de un objeto creada mientras se ejecuta el programa."], ["Licencia de Scratch", "CC BY-SA: remezclar citando y compartiendo igual."]],
  glosario: [
    ["Scratch", "Lenguaje de programación visual por bloques del MIT."],
    ["Objeto (sprite)", "Personaje o elemento del proyecto."],
    ["Escenario", "Espacio de 480 × 360 donde ocurre todo."],
    ["Disfraz", "Cada una de las imágenes de un objeto."],
    ["Fondo", "Imagen del escenario."],
    ["Script", "Grupo de bloques encajados bajo un evento."],
    ["Evento", "Bloque que indica cuándo empieza un script."],
    ["Sensor", "Bloque que comprueba lo que ocurre."],
    ["Mensaje", "Aviso entre objetos."],
    ["Clon", "Copia de un objeto en ejecución."],
    ["Extensión", "Conjunto de bloques añadidos: lápiz, música, micro:bit."],
    ["Lápiz", "Extensión para dibujar."],
    ["Respuesta", "Lo que escribe el usuario tras preguntar."],
    ["Remix", "Versión propia de un proyecto ajeno, citándolo."],
    ["Estudio", "Colección de proyectos sobre un tema."],
    ["CC BY-SA", "Licencia que permite reutilizar citando y compartiendo igual."],
  ],
  situacion: { titulo: "Un videojuego para compartir", reto: "Diseñar, programar y compartir en un estudio de clase un videojuego original en Scratch que use clones, mensajes, sonido, preguntas o lápiz, con instrucciones y créditos.", pasos: ["Definir la idea, el objetivo y las reglas del juego.", "Diseñar objetos, disfraces, fondos y sonidos (propios o con licencia).", "Programar por partes: protagonista, clones, mensajes entre escenas y puntuación.", "Probar con compañeros, recoger comentarios y depurar.", "Compartir en el estudio con instrucciones, notas y créditos.", "Hacer un remix de un proyecto de un compañero y comentarlo de forma constructiva."], producto: "Videojuego publicado en el estudio de clase y un remix comentado.", evaluacion: ["El juego funciona y es original.", "Usa correctamente clones, mensajes y al menos otra extensión.", "La página tiene instrucciones y créditos completos.", "Los comentarios y el remix son respetuosos y citan al autor."] },
  saberes: "programación por bloques con Scratch: objetos, eventos, movimiento, apariencia, sonido, lápiz, sensores, preguntas, mensajes, clones y variables; diseño de proyectos, publicación y licencias.",
  familias: ["Explorad juntos la web de Scratch, jugad a tres proyectos y mirad «dentro» cómo están programados."],
  minutos: 105,
});
