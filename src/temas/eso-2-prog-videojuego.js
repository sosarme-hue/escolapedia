// Programación y robótica 2º ESO: crear un videojuego. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV, bl, SC } = require("./_eso2a");
const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Crear un videojuego",
  minutos: 60,
  objetivos: ["Diseñar un videojuego sencillo definiendo objetivo, reglas, personajes y controles", "Programar el movimiento, las colisiones, la puntuación y las vidas", "Usar variables, clones y pantallas de inicio y fin", "Probar el juego con otras personas y mejorarlo"],
  claves: ["videojuego", "diseño de juego", "mecánica", "jugador", "colisión", "variable", "puntuación", "vidas", "clon", "nivel", "prueba", "iteración"],
  pregunta: {
    texto: "Los grandes videojuegos los hacen equipos de cientos de personas durante años. ¿Se puede hacer uno de verdad en una clase de 2º de ESO?",
    respuesta: "Sí, si es <b>pequeño y está bien pensado</b>. Muchos juegos famosos se basan en una idea muy simple: esquivar, atrapar, saltar o llegar a una meta. Con Scratch, un personaje, unos objetos que caen, una variable de puntos y otra de vidas se puede hacer un juego completo y divertido en pocas sesiones. Lo importante es <b>empezar por lo básico</b>, probarlo y añadir mejoras poco a poco.",
  },
  bloques: [
    {
      html: `<h3>Diseñar antes de programar</h3><p>Antes de tocar un solo bloque, hay que <b>diseñar</b> el juego. Un buen diseño responde a estas preguntas: ¿cuál es el <b>objetivo</b> (atrapar, esquivar, llegar a la meta, sobrevivir un tiempo)?; ¿quién es el <b>protagonista</b> y quiénes son los enemigos u obstáculos?; ¿cuáles son las <b>reglas</b> (cómo se ganan puntos, cómo se pierden vidas, cuándo se gana y cuándo se pierde)?; ¿cuáles son los <b>controles</b> (flechas, ratón, espacio)?; y ¿cómo es el <b>escenario</b>? Todo esto se escribe en una ficha de diseño y se dibuja un <b>boceto</b> de la pantalla. Al conjunto de acciones que puede hacer el jugador y de reglas del juego se le llama <mark>mecánica</mark>. Consejo de los profesionales: empieza por una versión mínima que funcione (un personaje que se mueve y algo que atrapar) y añade lo demás después. Un juego pequeño terminado vale más que uno enorme a medias.</p>${tabla(["Elemento", "Ejemplo: «Atrapa la fruta»"], [["Objetivo", "atrapar fruta que cae y conseguir 20 puntos"], ["Protagonista", "una cesta que se mueve abajo"], ["Obstáculos", "bombas que también caen"], ["Reglas", "fruta = +1 punto; bomba = −1 vida; 3 vidas"], ["Controles", "flechas izquierda y derecha"], ["Fin", "gana con 20 puntos; pierde con 0 vidas"]])}`,
    },
    {
      html: `<h3>Mover al protagonista</h3><p>El primer paso es que el jugador pueda <b>controlar al personaje</b>. En un juego de atrapar, la cesta solo se mueve a izquierda y derecha en la parte de abajo: al hacer clic en la bandera, ir a x: 0 y: −150; por siempre { si ¿tecla flecha derecha presionada? entonces cambiar x en 10; si ¿tecla flecha izquierda presionada? entonces cambiar x en −10 }. Otra opción es que siga al ratón: por siempre { fijar x a (posición x del ratón) }. En un juego de laberinto o de nave, el personaje se mueve en las cuatro direcciones, y se usan también «cambiar y en». Si el personaje no debe salir del escenario, se puede limitar su posición con condicionales («si posición x &gt; 220 entonces fijar x a 220»). Para juegos de plataformas se añade la <b>gravedad</b>: una variable de velocidad vertical que va disminuyendo y hace que el personaje caiga si no hay suelo.</p>`,
      video: { id: "Tpf39tVhxyg", titulo: "El gato saltarín con contador de puntos: cómo crear contadores en Scratch", canal: "Laita Digital", vistas: 46843 },
    },
    {
      html: `<h3>Objetos que caen y se mueven solos</h3><p>Los demás objetos del juego, como la fruta, las bombas o los enemigos, se mueven solos con sus propios programas. Una fruta que cae se programa así: al hacer clic en la bandera, por siempre { ir a x: (número al azar entre −220 y 220) y: 180; repetir hasta que (posición y &lt; −170) { cambiar y en −5 } }. Así aparece arriba en un sitio al azar, baja hasta el suelo y vuelve a empezar. El bloque <b>«número al azar entre… y…»</b> (operadores) es clave en los videojuegos: hace que cada partida sea distinta y que el jugador no pueda adivinar lo que viene. Para que el juego se vuelva más difícil con el tiempo, se puede usar una variable <b>velocidad</b> y cambiar «cambiar y en −5» por «cambiar y en (0 − velocidad)», aumentando la velocidad cada vez que se consiguen 5 puntos. Los enemigos pueden moverse de lado a lado con «rebotar si toca un borde» o perseguir al jugador con «apuntar hacia Jugador».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pantalla de un juego de atrapar: frutas y una bomba caen desde arriba en posiciones al azar y una cesta abajo se mueve con las flechas">${BG}
        <rect x="20" y="10" width="220" height="150" rx="6" fill="#dff1ff" stroke="var(--ink)" stroke-width="1.5"/>
        <circle cx="100" cy="44" r="9" fill="var(--red)"/><path d="M100 35 v -5" stroke="var(--leaf)" stroke-width="2"/>${fl(100, 58, 100, 78, "var(--muted)", 1.5)}
        <circle cx="160" cy="70" r="9" fill="#f2c94c"/><path d="M160 61 v -5" stroke="var(--leaf)" stroke-width="2"/>${fl(160, 84, 160, 104, "var(--muted)", 1.5)}
        <circle cx="205" cy="36" r="9" fill="var(--ink)"/><path d="M205 27 l 4 -6" stroke="#e6a100" stroke-width="2"/>${t(205, 60, "bomba", { size: 8.5, color: "var(--red)" })}
        <path d="M96 134 h 50 l -6 18 h -38 Z" fill="#b8763a" stroke="var(--ink)" stroke-width="1.5"/>${fl(152, 142, 172, 142, "var(--pen)", 2)}${fl(90, 142, 70, 142, "var(--pen)", 2)}
        ${t(28, 26, "puntos: 7", { size: 9.5, anchor: "start" })}${t(232, 154, "vidas: ♥♥♥", { size: 9.5, anchor: "end", color: "var(--red)" })}
        ${t(130, 174, "x al azar arriba → cae → vuelve a empezar", { size: 9.5, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Colisiones: cuando dos objetos se tocan</h3><p>Una <mark>colisión</mark> ocurre cuando dos objetos del juego se tocan. Detectarlas es fundamental: es lo que hace que la cesta atrape la fruta, que el enemigo nos quite una vida o que lleguemos a la meta. En Scratch se detectan con los sensores <b>«¿tocando Objeto?»</b> y <b>«¿tocando el color…?»</b>, dentro de un condicional que está dentro de un bucle «por siempre». Por ejemplo, en el programa de la fruta: si ¿tocando Cesta? entonces { sumar a puntos 1; tocar sonido «pop»; ir a x: (al azar) y: 180 }. Es importante que, después de una colisión, el objeto <b>se reinicie o desaparezca</b>; si no, seguiría tocando a la cesta y sumaría puntos muchas veces seguidas. El sensor de color es muy útil en laberintos: si las paredes son de un color, «si ¿tocando el color negro? entonces ir a la salida» devuelve al jugador al principio cada vez que choca.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Programa de colisión: por siempre, si tocando cesta entonces sumar a puntos 1, tocar sonido pop e ir arriba al azar">${BG}
        <path d="M10 14 h 240 v 22 h -216 v 112 h 216 v 14 h -240 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(18, 29, "por siempre", { size: 10, color: "#fff", anchor: "start" })}
        ${bl(34, 38, 120, SC.mov, "cambiar y en −5", 18)}
        <path d="M34 60 h 210 v 22 h -186 v 60 h 186 v 4 h -210 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(40, 75, "si", { size: 10, color: "#fff", anchor: "start" })}
        <path d="M60 64 h 96 l 7 7 l -7 7 h -96 l -7 -7 Z" fill="${SC.sen}" stroke="#fff" stroke-opacity=".6"/>${t(108, 75, "¿tocando Cesta?", { size: 9, color: "#fff" })}
        ${bl(58, 84, 130, SC.var, "sumar a puntos 1", 18)}${bl(58, 104, 130, SC.son, "tocar sonido pop", 18)}${bl(58, 124, 150, SC.mov, "ir a x: azar  y: 180", 16)}</svg>`,
    },
    {
      html: `<h3>Puntos, vidas y tiempo: las variables</h3><p>Las <mark>variables</mark> guardan los datos que cambian durante la partida. Las más habituales son <b>puntos</b>, <b>vidas</b>, <b>nivel</b> y <b>tiempo</b>. Se crean en la categoría Variables y se muestran en el escenario como marcadores. Hay que <b>inicializarlas</b> al empezar: al hacer clic en la bandera, dar a puntos el valor 0, dar a vidas el valor 3. Después se modifican con «sumar a puntos 1» o «sumar a vidas −1» cuando hay una colisión. Y se comprueban con condicionales para saber si se ha ganado o perdido: «si vidas = 0 entonces enviar "fin del juego"». Para un juego con tiempo límite se puede usar una variable <b>tiempo</b> que empieza en 30 y baja 1 cada segundo (repetir hasta que tiempo = 0 { esperar 1 segundos; sumar a tiempo −1 }). Una variable especial, <b>récord</b>, puede guardar la mejor puntuación: «si puntos &gt; récord entonces dar a récord el valor puntos».</p>`,
    },
    {
      html: `<h3>Clones: muchos objetos iguales</h3><p>Si en el juego caen muchas frutas o aparecen muchos enemigos a la vez, no hace falta crear y programar decenas de objetos iguales. Scratch permite crear <mark>clones</mark>: copias de un objeto que aparecen durante la partida. Se usan tres bloques de Control: <b>«crear clon de mí mismo»</b>, que hace una copia; <b>«al comenzar como clon»</b>, un evento que indica qué debe hacer cada copia; y <b>«eliminar este clon»</b>, que la borra cuando ya no hace falta. Por ejemplo, el objeto Fruta original se esconde y, por siempre, crea un clon cada segundo; cada clon va a una x al azar arriba, se muestra, cae, y si toca la cesta suma un punto y se elimina; si llega al suelo, también se elimina. Así puede haber muchas frutas a la vez en pantalla con un solo programa. Es importante eliminar los clones que ya no se usan, porque Scratch tiene un límite de 300 a la vez.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un objeto original crea varios clones, cada uno ejecuta al comenzar como clon y se elimina al terminar">${BG}
        <circle cx="40" cy="60" r="16" fill="var(--red)" stroke="var(--ink)" stroke-width="1.5"/>${t(40, 96, "original", { size: 10 })}${t(40, 110, "(escondido)", { size: 8.5, color: "var(--muted)" })}
        ${[[130, 36], [175, 70], [215, 40], [140, 110], [205, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="11" fill="var(--red)" fill-opacity=".7" stroke="var(--ink)" stroke-dasharray="3 2"/>`).join("")}
        ${fl(60, 56, 112, 40, "var(--muted)", 1.5)}${fl(60, 64, 120, 104, "var(--muted)", 1.5)}${t(88, 30, "crear clon", { size: 9, color: "var(--muted)" })}
        ${t(175, 154, "cada clon: cae y se elimina", { size: 10, color: "var(--red)" })}${t(130, 172, "máximo 300 clones a la vez", { size: 9, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Pantallas de inicio, niveles y final</h3><p>Un juego completo tiene varias <b>pantallas</b>: una de <b>inicio</b> con el título, las instrucciones y un botón «Jugar»; la del <b>juego</b>; y las de <b>victoria</b> («¡Has ganado!») y <b>derrota</b> («Game over»). En Scratch se hacen con <b>fondos</b> distintos del escenario y con <b>mensajes</b>: el botón «Jugar», al hacer clic, se esconde y envía «empezar»; todos los objetos, al recibir «empezar», se muestran y empiezan a funcionar; cuando las vidas llegan a 0, se envía «perder», el escenario cambia al fondo «Game over» y se detiene todo. Los <b>niveles</b> se hacen igual: cuando se consiguen 10 puntos, se cambia de fondo, se aumenta la velocidad de los enemigos o se añaden obstáculos. La <b>música y los efectos de sonido</b> (al atrapar, al perder una vida, al ganar) hacen el juego mucho más atractivo y ayudan al jugador a saber qué está pasando.</p>`,
    },
    {
      html: `<h3>Probar, mejorar y compartir</h3><p>Ningún juego sale bien a la primera. Los diseñadores de videojuegos trabajan por <mark>iteraciones</mark>: hacen una versión, la prueban, apuntan lo que falla o aburre, la mejoran y vuelven a probar. Al <b>probar</b> conviene preguntarse: ¿se entiende qué hay que hacer sin explicarlo?, ¿los controles responden bien?, ¿es demasiado fácil o demasiado difícil?, ¿hay algún error (puntos que se suman dos veces, objetos que se quedan atascados)? Lo mejor es que lo pruebe <b>otra persona</b> mientras tú observas en silencio y anotas: verás cosas que no esperabas. Con sus comentarios se ajusta la <b>dificultad</b> (velocidad, número de vidas, tiempo) y se corrigen los fallos. Por último, se escriben las <b>instrucciones</b> y los <b>créditos</b> (quién lo ha hecho y de dónde salen las imágenes y sonidos) y se comparte. Un juego en el que otras personas se divierten es la mejor recompensa de un programador.</p>`,
      video: { id: "Wc5INKPs_IM", titulo: "Cómo crear un juego (tutorial de Scratch)", canal: "José David", vistas: 919026 },
    },
  ],
  figura: {
    titulo: "El ciclo de creación de un videojuego",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Ciclo: idea y diseño, programar lo básico, probar con jugadores, mejorar y añadir, y compartir; se repite varias veces">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["1. Diseñar", "objetivo y reglas", "var(--pen)"], ["2. Programar", "mover y chocar", "var(--red)"], ["3. Probar", "con otras personas", "var(--leaf)"], ["4. Mejorar", "niveles y sonido", "#b8860b"], ["5. Compartir", "con créditos", SC.apa]].map(([a, b, col], i) => { const x = 14 + i * 126; return `<rect x="${x}" y="40" width="108" height="100" rx="14" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="2.5"/>${t(x + 54, 80, a, { size: 15, color: col, font: D })}${t(x + 54, 112, b, { size: 9.5, weight: 400 })}${i < 4 ? fl(x + 110, 90, x + 124, 90, "var(--muted)", 2) : ""}`; }).join("")}
      <path d="M445 145 C 445 200, 320 205, 320 145" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 4"/>${fl(322, 158, 320, 146, "var(--muted)", 2)}${t(382, 200, "iterar: repetir 2–3–4", { size: 12, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "oAvksa5Url4", titulo: "Creando un juego de atrapar en Scratch", canal: "Miss Cynthia", vistas: 738827, megusta: 8579, busqueda: "crear videojuego Scratch atrapar" },
  ejemplos: [
    { enunciado: "Programa la cesta para que se mueva con las flechas sin salirse del escenario.",
      pasos: ["Bandera: ir a x: 0 y: −150.", "Por siempre: si flecha derecha, cambiar x en 10; si flecha izquierda, cambiar x en −10.", "Si posición x > 220, fijar x a 220; si posición x < −220, fijar x a −220."],
      resultado: "Movimiento limitado a la pantalla." },
    { enunciado: "Haz que el juego termine al perder las 3 vidas.",
      pasos: ["Bandera: dar a vidas el valor 3.", "Bomba: si ¿tocando Cesta? entonces sumar a vidas −1 y volver arriba.", "Escenario: esperar hasta que vidas = 0; cambiar fondo a «Game over»; detener todos."],
      resultado: "Variable vidas y condición de derrota." },
    { enunciado: "Que la fruta caiga más rápido cada 5 puntos.",
      pasos: ["Crear variable velocidad = 3 al empezar.", "La fruta cae con «cambiar y en (0 − velocidad)».", "Al sumar puntos: si (puntos mod 5) = 0 entonces sumar a velocidad 1."],
      resultado: "Dificultad creciente." },
  ],
  errores: [
    "Empezar a programar sin diseñar el juego y acabar con una idea demasiado grande.",
    "No inicializar puntos y vidas al empezar.",
    "No reiniciar el objeto tras una colisión: suma puntos varias veces.",
    "Crear clones sin eliminarlos nunca: el juego se vuelve lento.",
    "No pedir a otra persona que pruebe el juego.",
  ],
  ejercicios: [
    { q: "¿Qué preguntas hay que responder al diseñar un videojuego?", sol: "Objetivo, protagonista y obstáculos, reglas, controles, escenario y cómo se gana o se pierde." },
    { q: "¿Qué es la mecánica de un juego?", sol: "El conjunto de acciones del jugador y reglas del juego." },
    { q: "Escribe el programa para que un objeto siga al ratón horizontalmente.", sol: "Bandera; por siempre { fijar x a posición x del ratón }." },
    { q: "¿Para qué sirve «número al azar» en un juego?", sol: "Para que cada partida sea distinta e imprevisible." },
    { q: "¿Qué es una colisión y con qué bloques se detecta?", sol: "Cuando dos objetos se tocan; con «¿tocando Objeto?» o «¿tocando el color?»." },
    { q: "¿Por qué hay que inicializar las variables al empezar?", sol: "Para que no conserven los valores de la partida anterior." },
    { q: "¿Qué son los clones y qué tres bloques se usan?", sol: "Copias de un objeto: crear clon, al comenzar como clon, eliminar este clon." },
    { q: "¿Cómo se hacen las pantallas de inicio y fin?", sol: "Con fondos distintos y mensajes que avisan a los objetos." },
    { q: "Escribe cómo guardar el récord de puntos.", sol: "Si puntos > récord entonces dar a récord el valor puntos." },
    { q: "¿Qué es iterar en el diseño de videojuegos?", sol: "Repetir el ciclo de probar y mejorar varias veces." },
  ],
  quiz: [
    { q: "Lo primero para crear un juego es…", o: ["diseñarlo", "dibujar el fondo", "compartirlo"], a: 0, e: "Diseño antes de programar." },
    { q: "Para que un objeto aparezca en sitios distintos se usa…", o: ["número al azar", "esperar", "esconder"], a: 0, e: "Azar." },
    { q: "Una colisión se detecta con…", o: ["¿tocando…?", "mover", "decir"], a: 0, e: "Sensores." },
    { q: "Los puntos se guardan en…", o: ["una variable", "un fondo", "un disfraz"], a: 0, e: "Variable." },
    { q: "Al empezar, las vidas deben…", o: ["inicializarse", "borrarse", "esconderse"], a: 0, e: "Por ejemplo, a 3." },
    { q: "Para muchas frutas iguales se usan…", o: ["clones", "fondos", "mensajes"], a: 0, e: "Clones." },
    { q: "Cada clon empieza con el evento…", o: ["al comenzar como clon", "al hacer clic en ⚑", "al recibir"], a: 0, e: "Al comenzar como clon." },
    { q: "El cambio de pantalla de inicio a juego se hace con…", o: ["mensajes y fondos", "sonidos", "el lápiz"], a: 0, e: "Mensajes y fondos." },
    { q: "Para aumentar la dificultad se puede…", o: ["subir la velocidad", "quitar los controles", "borrar el objetivo"], a: 0, e: "Más velocidad." },
    { q: "Probar, mejorar y volver a probar es…", o: ["iterar", "compilar", "clonar"], a: 0, e: "Iterar." },
  ],
  examen: [
    { q: "Si tras atrapar una fruta suma 5 puntos de golpe, falta…", o: ["reiniciar la fruta tras la colisión", "un sonido", "un fondo"], a: 0, e: "Sigue tocando la cesta." },
    { q: "Scratch permite como máximo…", o: ["30 clones", "300 clones", "3000 clones"], a: 1, e: "300 a la vez." },
    { q: "Los créditos de un juego indican…", o: ["quién lo hizo y de dónde salen recursos", "los puntos", "los controles"], a: 0, e: "Autoría y fuentes." },
  ],
  feynman: ["Qué hay que decidir al diseñar un videojuego", "Cómo se detecta una colisión y qué hay que hacer después", "Para qué sirven las variables y los clones en un juego"],
  mapa: mapa("VIDEOJUEGO", "var(--eso)", [
    ["Diseño", "objetivo · reglas · controles", "var(--pen)"],
    ["Programación", "movimiento · colisiones · azar", "var(--red)"],
    ["Datos", "puntos · vidas · clones", SC.var],
    ["Pruebas", "jugar · mejorar · compartir", "var(--leaf)"],
  ], 290),
  tarjetas: [
    ["Mecánica", "Acciones del jugador y reglas del juego."],
    ["Colisión", "Cuando dos objetos se tocan."],
    ["Número al azar", "Hace que cada partida sea distinta."],
    ["Variable puntos", "Guarda la puntuación; se inicializa a 0."],
    ["Vidas", "Variable que baja al chocar; a 0, fin."],
    ["Clon", "Copia de un objeto creada durante el juego."],
    ["Pantallas", "Inicio, juego y fin con fondos y mensajes."],
    ["Iterar", "Probar, mejorar y volver a probar."],
  ],
  familias: ["Jugad al videojuego creado en clase y dad ideas para mejorarlo.", "Analizad juntos un juego conocido: objetivo, reglas, controles.", "Diseñad en papel un juego familiar y probadlo con dados antes de programarlo."],
  profesores: {
    saberes: "Proyecto de programación: diseño de un videojuego, programación de movimiento, colisiones, aleatoriedad, variables, clones y mensajes, pruebas con usuarios y publicación responsable (RD 217/2022 y currículos autonómicos de Programación y robótica).",
    ideas: ["Juego de atrapar en parejas con ficha de diseño previa.", "Sesión de prueba cruzada con hoja de observación.", "Ampliación por niveles: velocidad, récord y pantalla final."],
  },
  fuentes: [RD, wiki("Diseño de videojuegos", "Diseño_de_videojuegos"), { t: "Scratch (MIT): web oficial", url: "https://scratch.mit.edu/" }],
  revisado: REV,
};
