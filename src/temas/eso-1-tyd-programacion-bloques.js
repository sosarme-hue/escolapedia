// Tecnología y Digitalización 1º ESO: programación por bloques. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

// Bloque tipo puzle: rectángulo con muesca arriba, texto a la izquierda.
const pieza = (x, y, w, s, c, o = {}) => `<path d="M${x} ${y} h 10 l 4 4 h 10 l 4 -4 H ${x + w} v 22 H ${x + 28} l -4 4 h -10 l -4 -4 H ${x} Z" fill="${c}" stroke="rgba(0,0,0,.25)"/>${et(x + 8, y + 15, s, w - 12, { anchor: "start", color: "#fff", size: o.size || 10.5 })}`;

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Programación por bloques",
  minutos: 55,
  objetivos: ["Explicar qué es un programa y un lenguaje de programación", "Reconocer las ventajas de los lenguajes por bloques y algunos entornos", "Identificar los tipos de bloques: eventos, acciones, control, sensores y datos", "Crear, probar y depurar un programa sencillo por bloques"],
  claves: ["programa", "lenguaje de programación", "código", "bloque", "Scratch", "MakeCode", "micro:bit", "evento", "secuencia", "bucle", "condición", "variable", "depurar", "error", "prueba"],
  pregunta: {
    texto: "Si a un robot le dices «tráeme un vaso de agua», no se mueve. ¿Qué le falta para hacerlo?",
    respuesta: "Le faltan <b>instrucciones precisas</b>, en un lenguaje que entienda y en el orden correcto: avanzar tantos pasos, girar, abrir la pinza, coger el vaso, comprobar si está lleno… Una máquina no adivina lo que queremos: hay que <b>programarla</b>. Programar es justamente eso, descomponer una tarea en pasos muy concretos y escribirlos para que la máquina los ejecute.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es programar?</h3><p>Un <mark>programa</mark> es una lista de <b>instrucciones</b> ordenadas que le dice a un ordenador o a otra máquina lo que tiene que hacer. Todas las aplicaciones del móvil, los videojuegos, las páginas web, el control de un semáforo o el de una lavadora son programas. <mark>Programar</mark> es escribir esas instrucciones. Como los ordenadores no entienden nuestro idioma, las instrucciones se escriben en un <mark>lenguaje de programación</mark>, un lenguaje con unas palabras y unas reglas muy precisas, que luego se traduce a ceros y unos. Hay muchos: Python, JavaScript, C, Java… El texto escrito en ellos se llama <b>código</b>. Para programar bien no basta con conocer el lenguaje: hay que saber <b>pensar el problema</b>, dividirlo en partes más sencillas y ordenar los pasos, algo que se llama pensamiento computacional. Programar no es solo cosa de informáticos: hoy se usa en ciencia, arte, música, medicina, ingeniería y casi cualquier profesión.</p>`,
      video: { id: "NBtbTtYJ1so", titulo: "Programación para niños: programación por bloques, parte 2", canal: "Smile and Learn - Español", vistas: 179154 },
    },
    {
      html: `<h3>Los lenguajes por bloques</h3><p>Escribir código en un lenguaje de texto es difícil al principio: un punto y coma olvidado o una palabra mal escrita hacen que el programa no funcione. Para aprender, se crearon los <mark>lenguajes de programación por bloques</mark>, en los que las instrucciones son <b>piezas de colores</b> que se arrastran con el ratón y se encajan como un puzle. Tienen muchas ventajas: no hay errores de escritura, porque las instrucciones ya están escritas; los bloques solo encajan donde tiene sentido; los colores indican la categoría de cada bloque; y se ve el resultado al momento. Así uno se puede concentrar en la <b>lógica</b> del programa. Los entornos más conocidos son <mark>Scratch</mark>, para crear historias, animaciones y juegos; <mark>MakeCode</mark>, para programar placas como la <b>micro:bit</b>; <b>App Inventor</b>, para crear aplicaciones de móvil; y los editores de robots educativos como mBlock. Lo que se aprende con bloques (secuencias, bucles, condiciones, variables) sirve después para cualquier lenguaje de texto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Programa de bloques encajados como un puzle: al pulsar el botón A, repetir cuatro veces mostrar un corazón y esperar un segundo">${BG}
        ${pieza(40, 24, 150, "al pulsar el botón A", "#c98a00")}
        <path d="M40 54 h 160 v 22 H 64 v 46 h 136 v 16 H 40 Z" fill="var(--leaf)" stroke="rgba(0,0,0,.25)"/>${et(48, 69, "repetir 4 veces", 140, { anchor: "start", color: "#fff", size: 10.5 })}
        ${pieza(64, 78, 130, "mostrar ♥", "var(--pen)")}${pieza(64, 104, 130, "esperar 1 segundo", "var(--pen)", { size: 10 })}
        ${t(130, 164, "las piezas solo encajan donde tienen sentido", { size: 9, weight: 400, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Tipos de bloques</h3><p>En todos los entornos de bloques, las instrucciones se agrupan en <b>categorías</b>, cada una con un color. Los <mark>bloques de eventos</mark> inician el programa cuando ocurre algo: «al hacer clic en la bandera verde», «al pulsar una tecla», «al iniciar», «al agitar». Tienen forma de sombrero porque siempre van arriba. Los <mark>bloques de acción</mark> hacen algo visible: mover, girar, mostrar un dibujo, encender una luz, tocar un sonido, decir un mensaje. Los <mark>bloques de control</mark> deciden el orden en que se ejecutan las instrucciones: esperar, repetir (bucles) o hacer algo solo si se cumple una condición («si… entonces»). Los <mark>bloques sensores</mark> obtienen información del entorno: si se toca algo, si se pulsa una tecla, la temperatura, la luz, la posición del ratón. Los bloques de <b>operadores</b> hacen cálculos y comparaciones (sumar, mayor que, número al azar). Y los bloques de <b>datos</b> o <b>variables</b> guardan valores que pueden cambiar, como los puntos de un juego o el tiempo que queda.</p>${tabla(["Categoría", "Para qué sirve", "Ejemplo"], [["Eventos", "empezar cuando pasa algo", "al pulsar el botón A"], ["Acción", "hacer algo visible o audible", "mostrar un icono, mover 10 pasos"], ["Control", "esperar, repetir, decidir", "repetir 4 veces, si… entonces"], ["Sensores", "leer el entorno", "temperatura, ¿tocando borde?"], ["Operadores", "calcular y comparar", "número al azar, mayor que"], ["Variables", "guardar valores que cambian", "puntos, vidas"]])}`,
    },
    {
      html: `<h3>Secuencia, repetición y condición</h3><p>Casi todos los programas se construyen combinando tres estructuras. La <mark>secuencia</mark>: las instrucciones se ejecutan <b>una detrás de otra</b>, en el orden en que están colocadas, de arriba abajo. El orden importa: no es lo mismo «girar y avanzar» que «avanzar y girar». La <mark>repetición</mark> o <b>bucle</b>: un grupo de instrucciones se repite un número de veces («repetir 4 veces») o para siempre («por siempre»). Así se evita escribir lo mismo muchas veces: para dibujar un cuadrado basta con repetir 4 veces «avanzar y girar 90°». La <mark>condición</mark>: un grupo de instrucciones solo se ejecuta <b>si se cumple algo</b> («si la temperatura es mayor que 25, mostrar un sol»), y se puede añadir qué hacer en caso contrario («si no, mostrar una nube»). Combinando estas tres estructuras con eventos, sensores y variables se pueden crear programas sorprendentemente complejos, desde un termómetro digital hasta un videojuego.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres estructuras: secuencia de pasos uno tras otro, repetición con una flecha que vuelve atrás y condición con un rombo que elige entre sí y no">${BG}
        ${[0, 1, 2].map((i) => `<rect x="18" y="${36 + i * 34}" width="50" height="22" rx="4" fill="var(--pen)"/>`).join("")}${fl(43, 58, 43, 68, "var(--ink)", 1.5)}${fl(43, 92, 43, 102, "var(--ink)", 1.5)}${t(43, 156, "secuencia", { size: 10 })}
        <rect x="104" y="50" width="50" height="22" rx="4" fill="var(--leaf)"/><rect x="104" y="88" width="50" height="22" rx="4" fill="var(--leaf)"/>${fl(129, 72, 129, 86, "var(--ink)", 1.5)}<path d="M154 99 h 10 V 61 h -8" fill="none" stroke="var(--ink)" stroke-width="1.5"/>${fl(164, 61, 156, 61, "var(--ink)", 1.5)}${t(129, 156, "repetición", { size: 10 })}
        <path d="M216 40 l 24 20 l -24 20 l -24 -20 Z" fill="#c98a00"/>${t(216, 64, "¿?", { size: 11, color: "#fff" })}<rect x="186" y="104" width="24" height="18" rx="4" fill="var(--pen)"/><rect x="222" y="104" width="24" height="18" rx="4" fill="var(--red)"/>${fl(204, 74, 198, 102, "var(--ink)", 1.5)}${fl(228, 74, 234, 102, "var(--ink)", 1.5)}${t(198, 136, "sí", { size: 9, weight: 400 })}${t(234, 136, "no", { size: 9, weight: 400 })}${t(216, 156, "condición", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Un ejemplo con la placa micro:bit</h3><p>La <mark>micro:bit</mark> es una pequeña placa programable del tamaño de una tarjeta, con una matriz de 25 luces LED, dos botones, sensores de luz, temperatura y movimiento, brújula y radio. Se programa gratis desde el navegador con <b>MakeCode</b>, que incluye un simulador para probar los programas sin tener la placa. Veamos un <b>dado electrónico</b>. Necesitamos: un evento, «al agitar»; un bloque de variables, «fijar <i>tirada</i> a número al azar entre 1 y 6»; y un bloque de acción, «mostrar número <i>tirada</i>». Al agitar la placa, el sensor de movimiento lo detecta, se elige un número al azar, se guarda en la variable y aparece en las luces. Podemos mejorarlo: con un bloque «si <i>tirada</i> = 6 entonces» mostrar además una carita feliz, o con un bucle «repetir 5 veces» mostrar números al azar muy rápido antes del resultado final, para que parezca que el dado rueda. Este pequeño proyecto ya usa eventos, variables, operadores, condiciones y bucles.</p>`,
      video: { id: "4EuSc7JSJ4I", titulo: "Primeros pasos con micro:bit. Ejemplos sencillos con MakeCode", canal: "Science Magic", vistas: 115438 },
    },
    {
      html: `<h3>Probar y depurar</h3><p>Es normalísimo que un programa no funcione bien a la primera: hasta los programadores profesionales cometen errores constantemente. A los errores de un programa se les llama <mark>bugs</mark> («bichos» en inglés), y buscarlos y corregirlos es <mark>depurar</mark>. Los errores más frecuentes al programar con bloques son: colocar los bloques en un <b>orden equivocado</b>; olvidar el <b>bloque de evento</b>, de modo que el programa nunca empieza; poner un número incorrecto (girar 9 grados en vez de 90); usar «repetir» en lugar de «por siempre», o al revés; y no <b>reiniciar</b> las variables o la posición al empezar. Para depurar conviene: ejecutar el programa <b>paso a paso</b>, observando qué hace cada bloque; probar <b>una parte cada vez</b>; leer el programa en voz alta, como si fuéramos la máquina; añadir bloques que muestren el valor de las variables; y cambiar <b>una sola cosa</b> cada vez para ver qué efecto tiene. Probar con distintos casos, también los raros, ayuda a encontrar errores escondidos.</p>`,
    },
    {
      html: `<h3>Cómo crear un proyecto de programación</h3><p>Un proyecto de programación sigue los mismos pasos que el proceso tecnológico. 1) <b>Definir</b> qué queremos que haga el programa, con condiciones concretas: «un juego en el que un gato persigue al ratón y gana puntos cada vez que lo toca». 2) <b>Diseñar</b>: dividir el problema en partes (los personajes, el movimiento, los puntos, el final) y describir los pasos de cada una, con palabras o con un diagrama, antes de tocar el ordenador. 3) <b>Programar</b> cada parte, empezando por la más sencilla. 4) <b>Probar y depurar</b> cada parte antes de pasar a la siguiente. 5) <b>Mejorar</b>: añadir niveles, sonidos, efectos. 6) <b>Compartir</b>: en muchos entornos, como Scratch, se pueden publicar los proyectos para que otros los usen y los «remezclen». Al compartir hay que respetar a los demás, citar si se ha partido del proyecto de otra persona y no usar imágenes o música sin permiso. También es importante <b>guardar a menudo</b> y con nombres claros, para no perder el trabajo.</p>`,
    },
  ],
  figura: {
    titulo: "La programación por bloques en ocho ideas",
    svg: rejilla([
      ["Programa", "instrucciones ordenadas", COL.azul],
      ["Bloques", "piezas que encajan", COL.naranja],
      ["Evento", "empieza cuando pasa algo", COL.sol],
      ["Secuencia", "una tras otra", COL.agua],
      ["Bucle", "repetir", COL.verde],
      ["Condición", "si… entonces", COL.rojo],
      ["Variable", "guarda un valor", COL.morado],
      ["Depurar", "buscar y corregir errores", COL.gris],
    ], 4, 86, "Resumen: programa, bloques, eventos, secuencia, bucle, condición, variable y depuración"),
  },
  video: { id: "OM-urCo7ALA", titulo: "Proyecto para principiantes en Scratch 3.0: tutorial fácil de iniciación", canal: "El Rincón de Primaria", vistas: 65081, megusta: 0, busqueda: "programacion por bloques para principiantes" },
  ejemplos: [
    { enunciado: "Quieres que un personaje dibuje un triángulo equilátero. ¿Qué bloques usarías?",
      pasos: ["Evento: al hacer clic en la bandera.", "Bajar el lápiz.", "Repetir 3 veces: mover 100 pasos y girar 120°.", "(En un triángulo se gira 360° ÷ 3 = 120° en cada esquina)."],
      resultado: "Bandera → bajar lápiz → repetir 3 [mover 100, girar 120°]." },
    { enunciado: "Un termómetro con micro:bit debe mostrar un sol si hace más de 25 °C y un copo de nieve si no. Escribe el programa.",
      pasos: ["Evento: por siempre.", "Condición: si temperatura > 25 entonces mostrar sol.", "Si no: mostrar copo de nieve.", "Esperar unos segundos y volver a medir."],
      resultado: "Por siempre [si temperatura > 25 → sol; si no → copo]." },
    { enunciado: "Un programa debería mostrar «Hola» al pulsar A, pero no hace nada. ¿Qué buscarías primero?",
      pasos: ["Comprobar que hay un bloque de evento «al pulsar el botón A».", "Comprobar que el bloque «mostrar» está encajado dentro del evento.", "Comprobar que se ha descargado el programa en la placa."],
      resultado: "Evento, encaje de los bloques y descarga." },
  ],
  errores: [
    "Olvidar el bloque de evento: el programa no empieza nunca.",
    "Pensar que el orden de los bloques no importa.",
    "Confundir «repetir n veces» con «por siempre».",
    "No reiniciar posición y variables al empezar.",
    "Desanimarse ante un error: depurar es parte normal de programar.",
  ],
  ejercicios: [
    { q: "¿Qué es un programa?", sol: "Una lista de instrucciones ordenadas que dice a una máquina lo que tiene que hacer." },
    { q: "Escribe tres ventajas de los lenguajes por bloques.", sol: "No hay errores de escritura, los bloques solo encajan donde tienen sentido y se ve el resultado al momento." },
    { q: "Nombra tres entornos de programación por bloques.", sol: "Scratch, MakeCode y App Inventor." },
    { q: "¿Para qué sirven los bloques de eventos?", sol: "Para iniciar el programa cuando ocurre algo." },
    { q: "¿Qué es un bucle? Pon un ejemplo.", sol: "Una repetición de instrucciones: repetir 4 veces avanzar y girar 90° para hacer un cuadrado." },
    { q: "¿Qué es una condición?", sol: "Una estructura que ejecuta instrucciones solo si se cumple algo: si… entonces." },
    { q: "¿Qué es una variable? Pon un ejemplo.", sol: "Un espacio que guarda un valor que puede cambiar, como los puntos de un juego." },
    { q: "¿Qué es depurar?", sol: "Buscar y corregir los errores de un programa." },
    { q: "Escribe tres consejos para depurar.", sol: "Ejecutar paso a paso, probar una parte cada vez y cambiar una sola cosa cada vez." },
    { q: "Escribe los pasos de un proyecto de programación.", sol: "Definir, diseñar, programar, probar y depurar, mejorar y compartir." },
  ],
  quiz: [
    { q: "Los bloques que inician un programa son de…", o: ["eventos", "operadores", "apariencia"], a: 0, e: "Eventos." },
    { q: "La placa que se programa con MakeCode es la…", o: ["micro:bit", "placa base", "tarjeta gráfica"], a: 0, e: "micro:bit." },
    { q: "Un bucle sirve para…", o: ["repetir", "decidir", "guardar"], a: 0, e: "Repetir." },
    { q: "«Si… entonces» es una…", o: ["condición", "variable", "secuencia"], a: 0, e: "Condición." },
    { q: "Los puntos de un juego se guardan en una…", o: ["variable", "condición", "secuencia"], a: 0, e: "Variable." },
    { q: "Un error en un programa se llama…", o: ["bug", "bit", "byte"], a: 0, e: "Bug." },
    { q: "Para un cuadrado se repite 4 veces girar…", o: ["90°", "45°", "120°"], a: 0, e: "90°." },
    { q: "En una secuencia las instrucciones van…", o: ["una tras otra", "todas a la vez", "al azar"], a: 0, e: "En orden." },
    { q: "Los bloques sensores sirven para…", o: ["leer el entorno", "repetir", "dibujar"], a: 0, e: "Leer datos." },
    { q: "Scratch sirve sobre todo para crear…", o: ["juegos y animaciones", "hojas de cálculo", "sistemas operativos"], a: 0, e: "Juegos, historias, animaciones." },
  ],
  examen: [
    { q: "Lo que se aprende con bloques…", o: ["sirve para cualquier lenguaje", "solo sirve en Scratch", "no sirve después"], a: 0, e: "La lógica es la misma." },
    { q: "Para un triángulo equilátero se gira en cada esquina…", o: ["120°", "60°", "90°"], a: 0, e: "360 ÷ 3." },
    { q: "Al depurar conviene cambiar…", o: ["una cosa cada vez", "todo a la vez", "nada"], a: 0, e: "Una cosa cada vez." },
  ],
  feynman: ["Qué es un programa y por qué una máquina necesita instrucciones precisas", "Qué son la secuencia, el bucle y la condición", "Cómo se busca un error en un programa"],
  mapa: mapa("PROGRAMAR", "var(--eso)", [
    ["Programa", "instrucciones · lenguaje · código", COL.azul],
    ["Bloques", "Scratch · MakeCode · micro:bit", COL.naranja],
    ["Estructuras", "secuencia · bucle · condición", COL.verde],
    ["Proyecto", "diseñar · probar · depurar", COL.morado],
  ], 300),
  tarjetas: [
    ["Programa", "Lista ordenada de instrucciones para una máquina."],
    ["Lenguaje de programación", "Lenguaje con reglas precisas para escribir programas."],
    ["Evento", "Algo que ocurre e inicia un programa."],
    ["Secuencia", "Instrucciones que se ejecutan una tras otra."],
    ["Bucle", "Repetición de un grupo de instrucciones."],
    ["Condición", "Instrucciones que solo se ejecutan si se cumple algo."],
    ["Variable", "Espacio que guarda un valor que cambia."],
    ["Depurar", "Buscar y corregir errores."],
  ],
  familias: ["Jugad a «programar a una persona»: uno da instrucciones exactas y otro las sigue al pie de la letra.", "Probad juntos el simulador de MakeCode en el navegador y haced un dado.", "Pensad qué aparatos de casa siguen un programa: lavadora, microondas, termostato."],
  profesores: {
    saberes: "Pensamiento computacional y programación: programas y lenguajes, entornos de programación por bloques, tipos de bloques, secuencia, repetición, condición, variables, eventos, depuración y desarrollo de proyectos (RD 217/2022, Tecnología y Digitalización, bloque Pensamiento computacional, programación y robótica).",
    ideas: ["Dado electrónico con micro:bit (o su simulador).", "Termómetro con condición y dos iconos.", "Actividad desenchufada: programar el recorrido de un compañero por una cuadrícula."],
  },
  fuentes: [RD, wiki("Scratch", "Scratch_(lenguaje_de_programación)"), { t: "Microsoft MakeCode para micro:bit", url: "https://makecode.microbit.org/" }, { t: "Fundación micro:bit", url: "https://microbit.org/es-es/" }],
  revisado: REV,
};
