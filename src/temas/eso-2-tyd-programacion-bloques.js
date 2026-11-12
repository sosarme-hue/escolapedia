// Tecnología y Digitalización 2º ESO: programación por bloques. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV, bl, SC } = require("./_eso2a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Programación por bloques",
  minutos: 55,
  objetivos: ["Explicar qué es un algoritmo y representarlo con un diagrama de flujo", "Conocer el entorno de un lenguaje de programación por bloques", "Usar secuencias, bucles, condicionales, variables y eventos", "Diseñar, probar y depurar programas sencillos"],
  claves: ["algoritmo", "programa", "diagrama de flujo", "pseudocódigo", "Scratch", "objeto", "evento", "bucle", "condicional", "variable", "depurar"],
  pregunta: {
    texto: "Los programadores profesionales escriben código con palabras y símbolos. ¿Por qué entonces se aprende a programar con bloques de colores que encajan como piezas?",
    respuesta: "Porque los bloques permiten centrarse en <b>lo importante: la lógica</b>. No hay errores de escritura (una coma o un paréntesis olvidados) y la forma de cada pieza indica dónde puede encajar. Las ideas que se aprenden, como <b>secuencia, bucle, condición, variable y evento</b>, son exactamente las mismas que se usan en Python, JavaScript o cualquier otro lenguaje.",
  },
  bloques: [
    {
      html: `<h3>Algoritmos y programas</h3><p>Un <mark>algoritmo</mark> es una <b>secuencia ordenada y finita de instrucciones</b> que resuelve un problema o realiza una tarea. Las recetas de cocina, las instrucciones de montaje de un mueble o los pasos para resolver una ecuación son algoritmos. Un buen algoritmo debe ser <b>preciso</b> (cada paso claro, sin ambigüedades), <b>ordenado</b> y <b>finito</b> (tiene que terminar). Un <mark>programa</mark> es un algoritmo escrito en un <b>lenguaje de programación</b> para que lo ejecute un ordenador. El ordenador no piensa ni adivina: hace exactamente lo que se le dice, en el orden en que se le dice. Si las instrucciones están mal o en mal orden, el resultado será incorrecto. Por eso antes de programar conviene pensar bien el algoritmo, escribirlo en lenguaje natural o dibujarlo.</p>`,
    },
    {
      html: `<h3>Diagramas de flujo y pseudocódigo</h3><p>Para planificar un algoritmo se usan dos herramientas. El <mark>diagrama de flujo</mark> es un dibujo con <b>símbolos normalizados</b> unidos por flechas que indican el orden: el <b>óvalo</b> marca el inicio y el fin; el <b>rectángulo</b>, una acción o proceso; el <b>rombo</b>, una decisión con dos salidas (sí o no); y el <b>paralelogramo</b>, una entrada o salida de datos (pedir un número, mostrar un mensaje). El <mark>pseudocódigo</mark> es una forma de escribir el algoritmo con palabras sencillas, parecidas a las de un lenguaje de programación, pero sin preocuparse por las reglas exactas: «pedir edad; si edad ≥ 18 entonces decir "mayor de edad"; si no, decir "menor de edad"». Ambas herramientas ayudan a detectar errores antes de programar y a explicar a otras personas cómo funciona un programa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de flujo: inicio, pedir edad, decisión edad mayor o igual que 18, sí: mayor de edad, no: menor de edad, fin">${BG}
        <ellipse cx="70" cy="18" rx="34" ry="11" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>${t(70, 22, "inicio", { size: 10 })}
        <path d="M38 38 H 112 L 102 58 H 28 Z" fill="var(--pen)" fill-opacity=".14" stroke="var(--pen)" stroke-width="2"/>${t(70, 52, "pedir edad", { size: 10 })}
        <path d="M70 70 L 112 94 L 70 118 L 28 94 Z" fill="#e6a100" fill-opacity=".18" stroke="#b8860b" stroke-width="2"/>${t(70, 98, "edad ≥ 18", { size: 10 })}
        ${caja(140, 80, 96, 28, "mayor de edad", "var(--red)", { size: 9.5 })}${caja(22, 130, 96, 26, "menor de edad", "var(--red)", { size: 9.5 })}
        ${fl(70, 29, 70, 37, "var(--ink)", 1.5)}${fl(70, 58, 70, 69, "var(--ink)", 1.5)}${fl(112, 94, 139, 94, "var(--ink)", 1.5)}${fl(70, 118, 70, 129, "var(--ink)", 1.5)}
        ${t(124, 88, "sí", { size: 9, color: "var(--leaf)" })}${t(80, 127, "no", { size: 9, color: "var(--red)", anchor: "start" })}
        <ellipse cx="200" cy="148" rx="30" ry="11" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>${t(200, 152, "fin", { size: 10 })}
        <path d="M188 108 V 136 M118 143 H 169" stroke="var(--ink)" stroke-width="1.5" fill="none"/></svg>`,
      video: { id: "qDttSc3RQBc", titulo: "Diagramas de flujo: simbología y construcción", canal: "Estudia Con Marisol", vistas: 1345352 },
    },
    {
      html: `<h3>Los lenguajes por bloques</h3><p>En los <mark>lenguajes de programación por bloques</mark> las instrucciones son piezas de colores que se arrastran y se encajan como un puzle. El más conocido es <b>Scratch</b>, creado en el MIT, gratuito y que se usa en el navegador; también hay otros como <b>MakeCode</b> (para placas micro:bit), <b>mBlock</b> (para robots), <b>App Inventor</b> (para crear aplicaciones de móvil) o <b>Blockly</b>. En Scratch, la pantalla tiene tres zonas: a la izquierda, la <b>paleta de bloques</b>, ordenada por categorías de colores (movimiento, apariencia, sonido, eventos, control, sensores, operadores y variables); en el centro, el <b>área de programación</b>, donde se montan los programas; y a la derecha, el <b>escenario</b>, donde se mueven los <b>objetos</b> o personajes. Cada objeto tiene sus propios programas, disfraces y sonidos, y el escenario puede tener varios fondos.</p>${tabla(["Categoría", "Color", "Para qué sirve"], [["Movimiento", "Azul", "Mover, girar, ir a x, y"], ["Apariencia", "Morado", "Decir, cambiar disfraz, tamaño"], ["Sonido", "Rosa", "Tocar sonidos"], ["Eventos", "Amarillo", "Empezar programas"], ["Control", "Naranja", "Esperar, repetir, si…"], ["Sensores", "Azul claro", "¿Tocando?, preguntar"], ["Operadores", "Verde", "Sumas, comparaciones, azar"], ["Variables", "Naranja oscuro", "Guardar datos"]])}`,
    },
    {
      html: `<h3>Eventos y secuencias</h3><p>Todo programa en Scratch empieza con un <mark>evento</mark>: un bloque amarillo con forma de «sombrero» que indica <b>cuándo</b> se ejecuta el programa. Los más usados son «al hacer clic en la bandera verde», «al presionar la tecla espacio», «al hacer clic en este objeto» o «al recibir mensaje». Debajo del evento se encajan las instrucciones en <mark>secuencia</mark>: se ejecutan <b>una detrás de otra, de arriba abajo</b>, en el orden en que están colocadas. Por ejemplo: al hacer clic en la bandera, ir a x: 0, y: 0; decir «¡Hola!» durante 2 segundos; mover 100 pasos; tocar sonido «miau». El orden importa: si pones «mover» antes de «ir a x: 0, y: 0», el gato se moverá pero volverá al centro enseguida y no verás el movimiento. Además, un mismo objeto puede tener varios programas que se ejecutan a la vez, cada uno con su evento.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Programa en bloques de Scratch: al hacer clic en la bandera, ir a x 0 y 0, decir Hola durante 2 segundos, mover 100 pasos, tocar sonido miau">${BG}
        <path d="M30 24 q 30 -16 60 0 h 110 v 22 h -146 l -4 4 h -10 l -4 -4 h -6 Z" fill="${SC.eve}" stroke="var(--ink)" stroke-opacity=".25"/>${t(38, 40, "al hacer clic en ⚑", { size: 10, color: "#fff", anchor: "start" })}
        ${bl(30, 50, 150, SC.mov, "ir a x: 0  y: 0")}${bl(30, 74, 190, SC.apa, "decir ¡Hola! durante 2 s")}${bl(30, 98, 130, SC.mov, "mover 100 pasos")}${bl(30, 122, 170, SC.son, "tocar sonido miau")}
        ${fl(236, 56, 236, 136, "var(--muted)", 1.5)}${t(244, 166, "de arriba abajo", { size: 9, color: "var(--muted)", anchor: "end" })}</svg>`,
    },
    {
      html: `<h3>Bucles: repetir instrucciones</h3><p>Muchas veces hay que repetir lo mismo varias veces. En lugar de copiar los bloques, se usa un <mark>bucle</mark>, un bloque de <b>control</b> (naranja) con forma de C que abraza las instrucciones que se repiten. Hay tres tipos. <b>«Repetir 10»</b> repite un número fijo de veces; por ejemplo, para dibujar un cuadrado con el lápiz: repetir 4 veces { mover 100 pasos; girar 90 grados }. <b>«Por siempre»</b> repite sin fin, mientras el programa esté en marcha; es el que se usa en los videojuegos para comprobar constantemente si se pulsa una tecla o si hay un choque. <b>«Repetir hasta que…»</b> repite mientras no se cumpla una condición; por ejemplo, avanzar hasta tocar el borde. Los bucles hacen los programas más <b>cortos</b>, más fáciles de leer y de cambiar: si quieres un hexágono, solo cambias 4 por 6 y 90 por 60.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bucle repetir 4 veces que contiene mover 100 pasos y girar 90 grados, y el cuadrado que dibuja">${BG}
        <path d="M20 30 h 140 v 22 h -110 v 50 h 110 v 18 h -140 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(28, 45, "repetir 4", { size: 10, color: "#fff", anchor: "start" })}
        ${bl(50, 54, 110, SC.mov, "mover 100 pasos")}${bl(50, 78, 110, SC.mov, "girar ↻ 90 grados")}
        <rect x="186" y="44" width="56" height="56" fill="none" stroke="var(--pen)" stroke-width="3"/>${fl(186, 44, 230, 44, "var(--red)", 2)}
        ${t(214, 120, "cuadrado", { size: 10 })}${t(130, 152, "4 lados · 4 giros de 90°", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Condicionales: tomar decisiones</h3><p>Un programa necesita a veces decidir qué hacer según lo que ocurra. Para eso están los <mark>condicionales</mark>, también bloques de control con forma de C. El bloque <b>«si… entonces»</b> ejecuta las instrucciones de dentro solo si se cumple una <b>condición</b>; si no se cumple, se las salta. El bloque <b>«si… entonces… si no»</b> tiene dos huecos: uno para cuando la condición es verdadera y otro para cuando es falsa. Las condiciones son bloques con forma hexagonal que solo pueden valer <b>verdadero o falso</b>: preguntas de sensores, como «¿tocando borde?», «¿tecla espacio presionada?», «¿tocando color rojo?»; o comparaciones de operadores, como «puntos > 10» o «respuesta = 7». Se pueden combinar con «y», «o» y «no». Un condicional casi siempre va dentro de un bucle «por siempre», para que la pregunta se haga continuamente.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bucle por siempre con un condicional: si tocando borde entonces rebotar y decir Ay">${BG}
        <path d="M14 20 h 200 v 22 h -170 v 96 h 170 v 14 h -200 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(22, 35, "por siempre", { size: 10, color: "#fff", anchor: "start" })}
        ${bl(44, 44, 130, SC.mov, "mover 5 pasos")}
        <path d="M44 70 h 190 v 22 h -160 v 22 h 160 v 14 h -190 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(52, 85, "si", { size: 10, color: "#fff", anchor: "start" })}
        <path d="M70 75 h 100 l 6 6 l -6 6 h -100 l -6 -6 Z" fill="${SC.sen}" stroke="#fff" stroke-opacity=".6"/>${t(120, 85, "¿tocando borde?", { size: 9, color: "#fff" })}${t(184, 85, "entonces", { size: 9, color: "#fff", anchor: "start" })}
        ${bl(74, 93, 140, SC.mov, "rebotar si toca un borde")}</svg>`,
    },
    {
      html: `<h3>Variables y operadores</h3><p>Una <mark>variable</mark> es como una <b>caja con nombre</b> en la que el programa guarda un dato que puede cambiar: los puntos de un juego, las vidas, el tiempo, la velocidad o la respuesta del usuario. En Scratch se crean en la categoría «Variables» y se usan con tres bloques: <b>«dar a puntos el valor 0»</b> (al empezar el juego), <b>«sumar a puntos 1»</b> (cada vez que se consigue algo) y el bloque redondo <b>«puntos»</b>, que se puede colocar dentro de otros bloques para usar su valor. Las variables pueden mostrarse en el escenario como un marcador. Los <mark>operadores</mark> (verdes) permiten hacer cálculos (+, −, ×, ÷), comparar (&gt;, &lt;, =), elegir un número al azar o unir textos. Por ejemplo, «si puntos = 10 entonces decir "¡Has ganado!"». Con un bloque «preguntar» y la variable «respuesta» se pueden hacer programas que dialogan con el usuario, como un juego de preguntas.</p>`,
    },
    {
      html: `<h3>Probar y depurar</h3><p>Casi ningún programa funciona bien a la primera, ni siquiera los de los programadores profesionales. Los errores se llaman <mark>bugs</mark> («bichos» en inglés) y el proceso de encontrarlos y corregirlos se llama <mark>depurar</mark>. Algunas estrategias útiles: <b>probar a menudo</b>, después de añadir cada pocos bloques, en vez de escribir todo el programa y probarlo al final; <b>leer el programa paso a paso</b> como si fueras el ordenador; añadir bloques «decir» o mostrar variables para ver qué valor tienen; probar casos raros (¿qué pasa si el jugador pulsa dos teclas a la vez?); y <b>pedir a un compañero</b> que lo pruebe, porque encontrará fallos que tú no ves. Los errores más frecuentes en Scratch son olvidar el evento, colocar los bloques en mal orden, no reiniciar las variables al empezar o poner un condicional fuera del bucle «por siempre».</p>`,
    },
    {
      html: `<h3>Del bloque al código y la programación en la vida real</h3><p>Lo que aprendes con bloques sirve después en cualquier lenguaje escrito. Por ejemplo, el bucle «repetir 4 { mover 100; girar 90 }» se escribe en Python así: <code>for i in range(4): forward(100); right(90)</code>. Y el condicional «si puntos &gt; 10 entonces decir "¡Bien!"» se escribe <code>if puntos &gt; 10: print("¡Bien!")</code>. La programación está en todas partes: en los móviles, los electrodomésticos, los coches, los semáforos, los videojuegos, la medicina y la ciencia. Además, programar desarrolla el <mark>pensamiento computacional</mark>: la capacidad de <b>descomponer</b> un problema grande en partes pequeñas, <b>reconocer patrones</b> que se repiten, <b>abstraer</b> lo importante y diseñar <b>algoritmos</b> para resolverlo. Esa forma de pensar es útil en cualquier profesión, no solo en la informática.</p>`,
    },
  ],
  figura: {
    titulo: "Las estructuras básicas de la programación",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Cinco estructuras básicas: evento, que empieza el programa; secuencia, un bloque tras otro; bucle, que repite; condicional, que decide; y variable, que guarda datos">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Evento", "cuándo empieza", "al hacer clic en ⚑", SC.eve], ["Secuencia", "en orden", "uno tras otro", SC.mov], ["Bucle", "repetir", "repetir 10 · por siempre", SC.con], ["Condicional", "decidir", "si… entonces… si no", "#c86a00"], ["Variable", "guardar datos", "puntos · vidas", SC.var]].map(([a, b, c, col], i) => { const x = 16 + i * 124; return `<rect x="${x}" y="30" width="112" height="150" rx="14" fill="${col}" fill-opacity=".14" stroke="${col}" stroke-width="2.5"/>${t(x + 56, 68, a, { size: 15, font: D })}${t(x + 56, 108, b, { size: 12 })}${t(x + 56, 146, c, { size: 9.5, weight: 400 })}`; }).join("")}
      ${t(320, 210, "con estas cinco piezas se puede construir cualquier programa", { size: 13, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "a5DOIvjxiQ0", titulo: "Curso de Scratch 3.0 desde cero para principiantes", canal: "NecroDev", vistas: 908425, megusta: 11239, busqueda: "programación por bloques Scratch" },
  ejemplos: [
    { enunciado: "Escribe el programa de Scratch para dibujar un triángulo equilátero.",
      pasos: ["Al hacer clic en la bandera: bajar lápiz.", "Repetir 3: mover 100 pasos; girar 120 grados.", "Subir lápiz."],
      resultado: "3 lados y giros de 120° (360 / 3)." },
    { enunciado: "Haz que el gato diga «¡Ay!» cada vez que toque el borde, sin parar de moverse.",
      pasos: ["Al hacer clic en la bandera: por siempre.", "Dentro: mover 5 pasos; rebotar si toca un borde.", "Dentro: si ¿tocando borde? entonces decir «¡Ay!» 1 s."],
      resultado: "Bucle por siempre con un condicional dentro." },
    { enunciado: "Diseña un contador de puntos que sume 1 al hacer clic en una manzana.",
      pasos: ["En la bandera: dar a puntos el valor 0.", "En la manzana: al hacer clic en este objeto, sumar a puntos 1.", "Ir a una posición al azar."],
      resultado: "Variable puntos reiniciada y sumada con un evento." },
  ],
  errores: [
    "Olvidar el bloque de evento: el programa nunca empieza.",
    "No reiniciar las variables al empezar: los puntos siguen de la partida anterior.",
    "Poner un condicional sin bucle «por siempre»: solo se comprueba una vez.",
    "Copiar los mismos bloques muchas veces en lugar de usar un bucle.",
    "Pensar que el ordenador entiende lo que queremos decir: hace exactamente lo que está escrito.",
  ],
  ejercicios: [
    { q: "Define algoritmo y pon un ejemplo de la vida diaria.", sol: "Secuencia ordenada y finita de instrucciones para resolver un problema: una receta." },
    { q: "¿Qué símbolos usa un diagrama de flujo para inicio/fin, proceso y decisión?", sol: "Óvalo, rectángulo y rombo." },
    { q: "Escribe en pseudocódigo: si llueve, coger paraguas; si no, coger gorra.", sol: "si llueve entonces coger paraguas; si no coger gorra; fin si." },
    { q: "Nombra las tres zonas de la pantalla de Scratch.", sol: "Paleta de bloques, área de programación y escenario." },
    { q: "¿Qué hace un bloque de evento y de qué color es?", sol: "Indica cuándo empieza el programa; es amarillo." },
    { q: "¿Cuántas veces hay que repetir y cuántos grados girar para un hexágono?", sol: "6 veces, 60 grados." },
    { q: "Diferencia «repetir 10» y «por siempre».", sol: "El primero repite un número fijo de veces; el segundo repite sin fin." },
    { q: "¿Qué valores puede tomar una condición?", sol: "Verdadero o falso." },
    { q: "¿Para qué sirve una variable? Pon un ejemplo en un juego.", sol: "Para guardar un dato que cambia: los puntos o las vidas." },
    { q: "¿Qué es depurar y nombra dos estrategias?", sol: "Encontrar y corregir errores: probar a menudo y leer el programa paso a paso." },
  ],
  quiz: [
    { q: "Un algoritmo debe ser…", o: ["infinito", "preciso, ordenado y finito", "secreto"], a: 1, e: "Preciso, ordenado y finito." },
    { q: "En un diagrama de flujo la decisión es un…", o: ["óvalo", "rombo", "rectángulo"], a: 1, e: "Rombo." },
    { q: "Scratch se creó en el…", o: ["MIT", "CERN", "NASA"], a: 0, e: "MIT." },
    { q: "Los bloques de eventos son…", o: ["azules", "amarillos", "verdes"], a: 1, e: "Amarillos." },
    { q: "Las instrucciones en secuencia se ejecutan…", o: ["a la vez", "de arriba abajo", "al azar"], a: 1, e: "Una tras otra." },
    { q: "Para dibujar un cuadrado se repite…", o: ["3 veces 120°", "4 veces 90°", "6 veces 60°"], a: 1, e: "4 · 90° = 360°." },
    { q: "Los videojuegos usan mucho el bucle…", o: ["repetir 2", "por siempre", "ninguno"], a: 1, e: "Comprueban todo el rato." },
    { q: "Una condición vale…", o: ["un número", "verdadero o falso", "un texto"], a: 1, e: "Booleana." },
    { q: "Los puntos de un juego se guardan en…", o: ["una variable", "un disfraz", "un fondo"], a: 0, e: "Variable." },
    { q: "Un bug es…", o: ["un error", "un bloque", "un objeto"], a: 0, e: "Un fallo del programa." },
  ],
  examen: [
    { q: "Si quieres que algo pase solo cuando se toca el borde, usas…", o: ["un bucle", "un condicional", "un evento de bandera"], a: 1, e: "Si… entonces." },
    { q: "Descomponer un problema en partes es parte del…", o: ["pensamiento computacional", "hardware", "sistema operativo"], a: 0, e: "Pensamiento computacional." },
    { q: "Para un pentágono se gira…", o: ["60°", "72°", "90°"], a: 1, e: "360 / 5 = 72°." },
  ],
  feynman: ["Qué es un algoritmo y cómo se dibuja un diagrama de flujo", "Para qué sirven los bucles y los condicionales", "Qué es una variable y cómo se usa en un juego"],
  mapa: mapa("PROGRAMAR", "var(--eso)", [
    ["Planificar", "algoritmo · diagrama · pseudocódigo", "var(--pen)"],
    ["Bloques", "Scratch · MakeCode · mBlock", "#b8860b"],
    ["Estructuras", "evento · bucle · si · variable", "var(--red)"],
    ["Depurar", "probar · leer · corregir", "var(--leaf)"],
  ], 290),
  tarjetas: [
    ["Algoritmo", "Instrucciones ordenadas y finitas para resolver un problema."],
    ["Diagrama de flujo", "Dibujo del algoritmo con símbolos y flechas."],
    ["Evento", "Bloque que indica cuándo empieza un programa."],
    ["Secuencia", "Instrucciones una tras otra, de arriba abajo."],
    ["Bucle", "Repite instrucciones: repetir, por siempre, hasta que."],
    ["Condicional", "Si… entonces… si no: decide."],
    ["Variable", "Caja con nombre que guarda un dato que cambia."],
    ["Depurar", "Encontrar y corregir errores (bugs)."],
  ],
  familias: ["Escribid juntos el algoritmo de una tarea de casa, como poner la lavadora.", "Probad en familia un programa de Scratch hecho en clase.", "Buscad objetos de casa que tengan programas: lavadora, microondas, termostato."],
  profesores: {
    saberes: "Pensamiento computacional, programación y robótica: algoritmos, diagramas de flujo, programación por bloques, estructuras de control, variables y depuración (RD 217/2022, Tecnología y Digitalización, bloque C).",
    ideas: ["Reto de figuras geométricas con el lápiz de Scratch.", "Diagrama de flujo en papel antes de programar un juego de preguntas.", "Sesión de depuración por parejas con programas con errores preparados."],
  },
  fuentes: [RD, wiki("Scratch (lenguaje de programación)", "Scratch_(lenguaje_de_programación)"), wiki("Diagrama de flujo", "Diagrama_de_flujo")],
  revisado: REV,
};
