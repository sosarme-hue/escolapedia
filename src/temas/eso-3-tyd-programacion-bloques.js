// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Bloque de programa estilo Scratch
const bloque = (x, y, w, txt, color, opts = {}) => `<path d="M${x} ${y} h 10 l 4 4 h 10 l 4 -4 H ${x + w} v ${opts.h || 22} H ${x + 28} l -4 4 h -10 l -4 -4 H ${x} Z" fill="${color}" stroke="rgba(0,0,0,.25)"/>${t(x + 8, y + (opts.h || 22) / 2 + 4, txt, { size: opts.size || 10, color: "#fff", anchor: "start" })}`;

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Programación por bloques",
  minutos: 60,
  objetivos: ["Entender qué es un algoritmo y representarlo con diagramas de flujo", "Conocer el entorno de programación por bloques y sus elementos: objetos, eventos y scripts", "Usar secuencias, bucles, condicionales, variables y operadores", "Diseñar, probar y depurar programas sencillos, como juegos y animaciones"],
  claves: ["algoritmo", "diagrama de flujo", "programa", "evento", "bucle", "condicional", "variable", "depurar"],
  pregunta: {
    texto: "Un videojuego sencillo puede tener cientos de órdenes. ¿Cómo sabe el ordenador cuándo debe ejecutar cada una?",
    respuesta: "Porque el programa está organizado con <mark>estructuras de control</mark>: unas órdenes se ejecutan en <b>secuencia</b>, otras se <b>repiten</b> en bucle y otras solo se ejecutan <b>si se cumple una condición</b>, por ejemplo «si el personaje toca la pared, pierde una vida». Además, muchas órdenes esperan a que ocurra un <b>evento</b>, como pulsar una tecla.",
  },
  bloques: [
    {
      html: `<h3>Algoritmos y programas</h3><p>Un <mark>algoritmo</mark> es una secuencia <b>ordenada y finita</b> de instrucciones claras para resolver un problema o realizar una tarea. Una receta de cocina, las instrucciones de montaje de un mueble o los pasos para resolver una ecuación son algoritmos. Un <mark>programa</mark> es un algoritmo escrito en un <b>lenguaje de programación</b> que el ordenador puede ejecutar. Los ordenadores no piensan: hacen <b>exactamente</b> lo que se les ordena, en el orden indicado, por eso las instrucciones deben ser precisas y sin ambigüedades. Programar es descomponer un problema grande en pasos pequeños, una habilidad llamada <b>pensamiento computacional</b>, útil mucho más allá de la informática.</p>`,
    },
    {
      html: `<h3>Diagramas de flujo</h3><p>Antes de programar conviene representar el algoritmo de forma gráfica con un <mark>diagrama de flujo</mark>. Usa símbolos normalizados unidos por flechas que indican el orden: el <b>óvalo</b> marca el <b>inicio</b> y el <b>fin</b>; el <b>rectángulo</b>, una <b>acción</b> o proceso («mover 10 pasos»); el <b>rombo</b>, una <b>decisión</b> con una pregunta de respuesta sí/no («¿toca el borde?»), del que salen dos caminos; y el <b>paralelogramo</b>, una <b>entrada o salida</b> de datos («pedir el nombre», «mostrar resultado»). Si una flecha vuelve hacia atrás, el diagrama tiene un <b>bucle</b>. Así se detectan errores de lógica antes de escribir el código.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de flujo: inicio, acción mover, decisión toca el borde; si no, vuelve a mover; si sí, rebota">${BG}
        <rect x="90" y="10" width="80" height="22" rx="11" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>${t(130, 25, "inicio", { size: 10 })}
        ${fl(130, 32, 130, 44, "var(--ink)", 1.5)}<rect x="86" y="46" width="88" height="24" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>${t(130, 62, "mover 10 pasos", { size: 10 })}
        ${fl(130, 70, 130, 82, "var(--ink)", 1.5)}<path d="M130 84 L 184 110 L 130 136 L 76 110 Z" fill="#b8860b" fill-opacity=".2" stroke="#b8860b" stroke-width="2"/>${t(130, 114, "¿toca borde?", { size: 10 })}
        <path d="M76 110 H 40 V 58 H 82" stroke="var(--ink)" stroke-width="1.5" fill="none"/>${fl(70, 58, 84, 58, "var(--ink)", 1.5)}${t(48, 104, "no", { size: 10, color: "var(--red)" })}
        ${fl(130, 136, 130, 148, "var(--ink)", 1.5)}${t(140, 146, "sí", { size: 10, color: "var(--leaf)", anchor: "start" })}<rect x="94" y="150" width="72" height="22" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>${t(130, 165, "rebotar", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>La programación por bloques</h3><p>En la <mark>programación por bloques</mark>, las instrucciones son piezas de colores que se <b>encajan</b> como un puzle, en lugar de escribirse con texto. Así no hay errores de escritura y es fácil ver la estructura del programa. El entorno más conocido es <b>Scratch</b>, creado por el MIT; otros son <b>MakeCode</b> (para micro:bit), <b>mBlock</b> o <b>Arduinoblocks</b> (para robots), <b>App Inventor</b> (para aplicaciones de móvil) y <b>Snap!</b>. En Scratch hay un <b>escenario</b>, donde ocurre la acción; unos <b>objetos</b> o <i>sprites</i>, los personajes, cada uno con sus <b>disfraces</b> y sonidos; y para cada objeto, unos <b>programas</b> o <i>scripts</i> formados por bloques. Los bloques se agrupan por <b>categorías</b> de colores: movimiento, apariencia, sonido, eventos, control, sensores, operadores y variables.</p>`,
      video: { id: "a5DOIvjxiQ0", titulo: "Curso de Scratch 3.0 desde cero", canal: "NecroDev", vistas: 908425 },
    },
    {
      html: `<h3>Eventos y secuencias</h3><p>Un programa por bloques empieza siempre con un <mark>evento</mark>: un bloque con forma de «sombrero» que indica <b>cuándo</b> se ejecuta el script. Por ejemplo: «al hacer clic en la bandera verde», «al presionar la tecla espacio», «al hacer clic en este objeto» o «al recibir un mensaje». Debajo del evento se encajan las instrucciones, que se ejecutan en <b>secuencia</b>, de arriba abajo, una tras otra. El orden importa: no es lo mismo «girar 90° y mover 50 pasos» que «mover 50 pasos y girar 90°». Varios scripts pueden ejecutarse <b>a la vez</b> (en paralelo), cada uno con su propio evento, y los objetos se pueden comunicar entre sí <b>enviando mensajes</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Script por bloques: al hacer clic en la bandera, ir a x 0 y 0, mover 50 pasos, girar 90 grados y decir hola">${BG}
        <path d="M40 30 q 40 -22 80 0 H 200 v 26 H 68 l -4 4 h -10 l -4 -4 H 40 Z" fill="#c88a00" stroke="rgba(0,0,0,.25)"/>${t(48, 46, "al hacer clic en ⚑", { size: 10, color: "#fff", anchor: "start" })}
        ${bloque(40, 56, 140, "ir a x: 0  y: 0", "#4c6fd6")}${bloque(40, 78, 140, "mover 50 pasos", "#4c6fd6")}${bloque(40, 100, 140, "girar ↻ 90 grados", "#4c6fd6")}${bloque(40, 122, 140, "decir ¡Hola! 2 s", "#8a55d7")}
        ${t(222, 72, "evento", { size: 10, color: "#c88a00" })}${t(222, 112, "secuencia", { size: 10, color: "var(--pen)" })}${fl(222, 120, 222, 142, "var(--pen)", 1.5)}</svg>`,
    },
    {
      html: `<h3>Bucles: repetir instrucciones</h3><p>Un <mark>bucle</mark> repite un grupo de instrucciones varias veces, sin tener que copiarlas. Hay tres tipos principales. «<b>Repetir N veces</b>» ejecuta el bloque un número fijo de veces: para dibujar un cuadrado basta con «repetir 4: mover 100, girar 90°». «<b>Por siempre</b>» repite sin fin, mientras el programa esté en marcha: se usa para comprobar continuamente si se pulsa una tecla o si el personaje toca algo. «<b>Repetir hasta que</b>» repite mientras no se cumpla una condición: «repetir hasta que toque la meta». Los bucles hacen los programas más <b>cortos</b>, más <b>fáciles de leer</b> y de modificar. Para dibujar un polígono de n lados, el ángulo de giro es <b>360° / n</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bucle repetir 4 veces con mover 80 pasos y girar 90 grados, que dibuja un cuadrado">${BG}
        <path d="M20 30 H 140 v 22 H 64 l -4 4 h -10 l -4 -4 H 36 v 44 H 140 v 18 H 20 Z" fill="#e0a000" stroke="rgba(0,0,0,.25)"/>${t(28, 46, "repetir 4 veces", { size: 10, color: "#fff", anchor: "start" })}
        ${bloque(36, 52, 104, "mover 80 pasos", "#4c6fd6")}${bloque(36, 74, 104, "girar ↻ 90°", "#4c6fd6")}
        <rect x="172" y="44" width="64" height="64" fill="none" stroke="var(--pen)" stroke-width="3"/>${fl(172, 44, 214, 44, "var(--red)", 2)}
        ${t(204, 132, "cuadrado", { size: 10, color: "var(--pen)" })}${t(130, 160, "giro = 360° / n.º de lados", { size: 11, color: "var(--muted)" })}</svg>`,
      video: { id: "DRYBZI-4VKY", titulo: "07 Scratch 3.0 - Bucles y condicionales", canal: "Robótica y Computación", vistas: 19250 },
    },
    {
      html: `<h3>Condicionales: tomar decisiones</h3><p>Un <mark>condicional</mark> permite que el programa <b>decida</b> qué hacer según se cumpla o no una condición. El bloque «<b>si … entonces</b>» ejecuta sus instrucciones solo si la condición es verdadera: «si toca el color rojo, entonces volver al inicio». El bloque «<b>si … entonces … si no</b>» tiene dos caminos: uno si se cumple y otro si no. Las condiciones se construyen con bloques de <b>sensores</b> (¿tocando el ratón?, ¿tecla presionada?, ¿tocando a otro objeto?) y de <b>operadores</b>: de comparación (<b>&gt;, &lt;, =</b>) y lógicos (<b>y</b>, <b>o</b>, <b>no</b>). Un condicional dentro de un bucle «por siempre» es la base de casi todos los videojuegos: comprueba sin parar lo que ocurre y reacciona.</p>`,
      video: { id: "t0cjd7-amNM", titulo: "Uso de condiciones o Condicional SI en Scratch 3.0", canal: "Los Atemporales", vistas: 35628 },
    },
    {
      html: `<h3>Variables y operadores</h3><p>Una <mark>variable</mark> es un espacio de la memoria con un <b>nombre</b> donde el programa guarda un <b>dato que puede cambiar</b>: la puntuación, las vidas, el tiempo, el nombre del jugador. Con los bloques de variables se puede <b>crear</b> una variable, <b>darle un valor</b> («dar a puntos el valor 0»), <b>cambiarla</b> («sumar 1 a puntos») y <b>mostrarla</b> en el escenario. Los <b>operadores</b> realizan cálculos (suma, resta, multiplicación, división, número aleatorio entre 1 y 10), comparan valores y unen textos. Por ejemplo, para un juego de preguntas: «preguntar ¿cuánto es 7 × 8? y esperar»; «si respuesta = 56, entonces sumar 1 a puntos». Las <b>listas</b> guardan muchos datos en una sola variable.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Variable puntos como una caja con el valor 3; bloques dar a puntos el valor 0 y sumar 1 a puntos">${BG}
        <rect x="24" y="30" width="80" height="54" rx="6" fill="#ff8c1a" fill-opacity=".2" stroke="#ff8c1a" stroke-width="2.5"/>${t(64, 24, "puntos", { size: 11, color: "#d26f00" })}${t(64, 66, "3", { size: 22 })}
        ${bloque(122, 30, 120, "dar a puntos 0", "#ff8c1a")}${bloque(122, 62, 120, "sumar 1 a puntos", "#ff8c1a")}
        ${bloque(24, 112, 218, "si respuesta = 56 entonces…", "#e0a000")}${t(130, 160, "la variable guarda un dato que cambia", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Diseñar un videojuego</h3><p>Para crear un programa más grande, como un <b>videojuego</b>, conviene seguir el proceso tecnológico. Primero, <b>definir</b> la idea: de qué trata, cuál es el objetivo, cómo se gana y cómo se pierde. Segundo, <b>descomponer</b> el problema en partes: el movimiento del personaje con las flechas, los enemigos que se mueven solos, la puntuación, las vidas, el fin del juego. Tercero, <b>programar</b> cada parte por separado y probarla. Cuarto, <b>unir</b> las partes y comunicar los objetos con mensajes. Por último, <b>probar</b> con otras personas y mejorar. Programar bien también es escribir programas ordenados: dar nombres claros a las variables y objetos y crear <b>bloques propios</b> (funciones) para las tareas que se repiten.</p>`,
    },
    {
      html: `<h3>Errores y depuración</h3><p>Es normal que un programa no funcione a la primera. Los fallos se llaman <mark>errores</mark> o <i>bugs</i>, y el proceso de encontrarlos y corregirlos, <b>depuración</b>. Hay errores de <b>secuencia</b> (instrucciones en el orden incorrecto), de <b>lógica</b> (una condición mal planteada, por ejemplo «&gt;» en lugar de «&lt;»), de <b>bucles infinitos</b> que nunca terminan y de <b>inicialización</b> (olvidar poner la puntuación a 0 al empezar). Estrategias para depurar: ejecutar el programa <b>paso a paso</b>; <b>mostrar las variables</b> en pantalla para ver cómo cambian; hacer que el personaje «diga» valores intermedios; probar cada parte por separado; y explicar el programa en voz alta a otra persona, que a menudo revela el fallo.</p>`,
    },
    {
      html: `<h3>De los bloques al código</h3><p>La programación por bloques es la puerta de entrada a los <b>lenguajes de texto</b>, como <b>Python</b>, <b>JavaScript</b> o <b>C++</b>, que usan las mismas ideas: secuencias, bucles, condicionales, variables y funciones. Muchos entornos, como MakeCode o mBlock, permiten ver el <b>código equivalente</b> de un programa de bloques. Por ejemplo, «repetir 4 veces: mover 100, girar 90°» en Python sería un bucle <code>for i in range(4):</code>. La programación por bloques también sirve para controlar <b>robots</b> y placas como <b>micro:bit</b> o <b>Arduino</b>, que veremos en el tema de robótica, y para crear <b>aplicaciones de móvil</b> con App Inventor.</p>`,
    },
  ],
  figura: {
    titulo: "Las tres estructuras de control",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Las tres estructuras de control: secuencia de pasos uno tras otro, bucle que repite y condicional que elige un camino">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${t(110, 34, "SECUENCIA", { size: 15, color: "var(--pen)", font: D })}
      ${caja(60, 54, 100, 32, "paso 1", "var(--pen)", { size: 13 })}${fl(110, 86, 110, 104, "var(--ink)", 2)}${caja(60, 106, 100, 32, "paso 2", "var(--pen)", { size: 13 })}${fl(110, 138, 110, 156, "var(--ink)", 2)}${caja(60, 158, 100, 32, "paso 3", "var(--pen)", { size: 13 })}
      ${t(320, 34, "BUCLE", { size: 15, color: "#d26f00", font: D })}
      ${caja(270, 80, 100, 40, "acción", "#d26f00", { size: 13 })}<path d="M370 100 H 400 V 160 H 240 V 100 H 266" stroke="#d26f00" stroke-width="2.5" fill="none"/>${fl(250, 100, 268, 100, "#d26f00", 2.5)}${t(320, 182, "repetir N veces", { size: 13, color: "var(--muted)" })}
      ${t(530, 34, "CONDICIONAL", { size: 15, color: "var(--leaf)", font: D })}
      <path d="M530 54 L 590 90 L 530 126 L 470 90 Z" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2.5"/>${t(530, 95, "¿condición?", { size: 13 })}
      ${fl(480, 108, 466, 150, "var(--ink)", 2)}${fl(580, 108, 594, 150, "var(--ink)", 2)}${t(456, 130, "sí", { size: 12, color: "var(--leaf)" })}${t(604, 130, "no", { size: 12, color: "var(--red)" })}
      ${caja(424, 152, 84, 32, "camino A", "var(--leaf)", { size: 12 })}${caja(552, 152, 84, 32, "camino B", "var(--red)", { size: 12 })}
      ${t(320, 236, "todo programa combina estas tres estructuras", { size: 14, color: "var(--muted)", font: D })}
    </svg>`,
  },
  video: { id: "KPJu7Q4nJEk", titulo: "TUTORIAL DE SCRATCH - BLOQUES DE PROGRAMACIÓN", canal: "Profesor Chuletas", vistas: 17261, megusta: 0, busqueda: "programación por bloques Scratch bucles condicionales variables" },
  ejemplos: [
    { enunciado: "Escribe con bloques un programa que dibuje un triángulo equilátero.",
      pasos: ["Un triángulo tiene 3 lados: «repetir 3 veces».", "Ángulo de giro = 360° / 3 = 120°.", "Dentro del bucle: «mover 100 pasos» y «girar 120°»."],
      resultado: "Al hacer clic en ⚑ → bajar lápiz → repetir 3: mover 100, girar 120°." },
    { enunciado: "Haz que un personaje pierda una vida cada vez que toca a un enemigo y que el juego acabe con 0 vidas.",
      pasos: ["Al empezar: «dar a vidas el valor 3».", "Por siempre: si ¿tocando enemigo? entonces sumar −1 a vidas y esperar 1 s.", "Si vidas = 0 entonces decir «Fin» y detener todo."],
      resultado: "Variable vidas + bucle por siempre + dos condicionales." },
    { enunciado: "Un programa debería sumar 1 punto al coger una moneda, pero empieza cada partida con la puntuación anterior. ¿Cuál es el error?",
      pasos: ["La variable conserva el valor de la partida anterior.", "Es un error de inicialización.", "Solución: poner «dar a puntos el valor 0» al hacer clic en la bandera."],
      resultado: "Falta inicializar la variable puntos a 0." },
  ],
  errores: [
    "Olvidar el bloque de evento: el script nunca se ejecuta.",
    "Usar «repetir 4» con un giro de 45° para hacer un cuadrado: el giro es 360° / 4 = 90°.",
    "No inicializar las variables al empezar el programa.",
    "Poner un condicional fuera del bucle «por siempre»: solo se comprueba una vez.",
    "Crear bucles infinitos sin querer con «repetir hasta que» y una condición que nunca se cumple.",
  ],
  ejercicios: [
    { q: "Define algoritmo y pon un ejemplo de la vida cotidiana.", sol: "Secuencia ordenada y finita de instrucciones para resolver un problema; una receta o lavarse los dientes." },
    { q: "Dibuja los símbolos del diagrama de flujo para inicio, acción y decisión.", sol: "Óvalo, rectángulo y rombo." },
    { q: "Nombra cuatro eventos que pueden iniciar un script.", sol: "Clic en la bandera, presionar una tecla, clic en el objeto, recibir un mensaje." },
    { q: "¿Qué tres tipos de bucle hay en Scratch?", sol: "Repetir N veces, por siempre y repetir hasta que." },
    { q: "¿Qué ángulo hay que girar para dibujar un hexágono?", sol: "360° / 6 = 60°." },
    { q: "¿Qué diferencia hay entre «si … entonces» y «si … entonces … si no»?", sol: "El primero solo actúa si se cumple la condición; el segundo tiene también un camino para cuando no se cumple." },
    { q: "¿Qué es una variable? Da tres ejemplos en un juego.", sol: "Un espacio de memoria con nombre que guarda un dato que cambia; puntos, vidas, tiempo." },
    { q: "Escribe un programa que pregunte «¿cuánto es 6 × 7?» y diga «¡Bien!» o «Inténtalo otra vez».", sol: "Preguntar y esperar; si respuesta = 42 entonces decir «¡Bien!» si no decir «Inténtalo otra vez»." },
    { q: "Nombra tres tipos de errores de programación.", sol: "De secuencia, de lógica, bucles infinitos (o de inicialización)." },
    { q: "Cita dos entornos de programación por bloques y para qué sirven.", sol: "Scratch (juegos y animaciones) y MakeCode (micro:bit) o App Inventor (apps de móvil)." },
  ],
  quiz: [
    { q: "Una secuencia ordenada y finita de instrucciones es un…", o: ["algoritmo", "sprite", "evento"], a: 0, e: "Algoritmo." },
    { q: "En un diagrama de flujo, la decisión se dibuja con un…", o: ["rectángulo", "rombo", "óvalo"], a: 1, e: "Rombo." },
    { q: "Scratch fue creado por el…", o: ["MIT", "CERN", "Google"], a: 0, e: "El MIT." },
    { q: "Los personajes de Scratch se llaman…", o: ["objetos (sprites)", "variables", "escenarios"], a: 0, e: "Objetos." },
    { q: "El bloque con forma de sombrero es un…", o: ["evento", "bucle", "operador"], a: 0, e: "Evento." },
    { q: "Para repetir siempre se usa…", o: ["repetir 10", "por siempre", "si … entonces"], a: 1, e: "Por siempre." },
    { q: "Para dibujar un pentágono se gira…", o: ["72°", "60°", "90°"], a: 0, e: "360 / 5 = 72°." },
    { q: "Un dato que cambia durante el programa se guarda en una…", o: ["variable", "constante", "disfraz"], a: 0, e: "Variable." },
    { q: "El operador «y» exige que…", o: ["se cumpla una condición", "se cumplan las dos", "no se cumpla ninguna"], a: 1, e: "Las dos." },
    { q: "Buscar y corregir errores se llama…", o: ["compilar", "depurar", "ejecutar"], a: 1, e: "Depurar." },
  ],
  examen: [
    { q: "El paralelogramo en un diagrama de flujo indica…", o: ["entrada o salida de datos", "fin", "decisión"], a: 0, e: "Entrada/salida." },
    { q: "Un programa en el que el bucle nunca termina tiene un…", o: ["bucle infinito", "evento", "disfraz"], a: 0, e: "Bucle infinito." },
    { q: "En Python, «repetir 4 veces» se escribe con…", o: ["for", "if", "print"], a: 0, e: "for." },
  ],
  feynman: ["Qué es un algoritmo y cómo se dibuja un diagrama de flujo", "La diferencia entre un bucle y un condicional", "Para qué sirve una variable en un juego"],
  mapa: mapa("PROGRAMACIÓN", "var(--eso)", [
    ["Algoritmo", "pasos · diagrama de flujo", "var(--pen)"],
    ["Control", "secuencia · bucle · condicional", "var(--red)"],
    ["Datos", "variables · operadores", "var(--leaf)"],
    ["Proceso", "diseñar · probar · depurar", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Algoritmo", "Secuencia ordenada y finita de instrucciones."],
    ["Diagrama de flujo", "Óvalo, rectángulo, rombo y flechas."],
    ["Evento", "Lo que hace empezar un script."],
    ["Bucle", "Repite instrucciones: N veces, siempre o hasta que."],
    ["Condicional", "Si … entonces … si no."],
    ["Variable", "Dato con nombre que puede cambiar."],
    ["Polígono", "Giro = 360° / n.º de lados."],
    ["Depurar", "Encontrar y corregir errores."],
  ],
  familias: ["Escribid juntos el algoritmo para preparar un desayuno y comprobad si falta algún paso.", "Haced en Scratch un programa que dibuje una estrella o un polígono.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Pensamiento computacional: algoritmos, diagramas de flujo, programación por bloques, estructuras de control, variables, depuración y aplicaciones (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Programación desenchufada: guiar a un compañero con instrucciones exactas.", "Reto de polígonos y estrellas con el lápiz de Scratch.", "Proyecto final: un videojuego por parejas con puntuación y vidas."],
  },
  fuentes: [RD, wiki("Scratch (lenguaje de programación)", "Scratch_(lenguaje_de_programaci%C3%B3n)"), wiki("Diagrama de flujo", "Diagrama_de_flujo")],
  revisado: "2026-11-12",
};
