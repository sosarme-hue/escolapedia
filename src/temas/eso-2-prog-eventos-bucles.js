// Programación y robótica 2º ESO: eventos, bucles y condicionales. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV, bl, SC } = require("./_eso2a");
const M = "Programación y robótica";

// Bloque en C de Scratch (repetir, por siempre, si): x, y, ancho, alto interior, color, texto.
const ce = (x, y, w, h, c, s) => `<path d="M${x} ${y} h ${w} v 22 h ${-(w - 24)} v ${h} h ${w - 24} v 14 h ${-w} Z" fill="${c}" stroke="var(--ink)" stroke-opacity=".25"/>${t(x + 8, y + 15, s, { size: 10, color: "#fff", anchor: "start" })}`;
const hex = (x, y, w, s) => `<path d="M${x} ${y} h ${w} l 7 7 l -7 7 h ${-w} l -7 -7 Z" fill="${SC.sen}" stroke="#fff" stroke-opacity=".6"/>${t(x + w / 2, y + 11, s, { size: 9, color: "#fff" })}`;

module.exports = {
  materia: M,
  curso: C,
  titulo: "Eventos, bucles y condicionales",
  minutos: 55,
  objetivos: ["Usar distintos eventos para iniciar programas y comunicar objetos con mensajes", "Aplicar los bucles repetir, por siempre y repetir hasta", "Construir condiciones con sensores y operadores lógicos", "Combinar bucles y condicionales para controlar un personaje"],
  claves: ["evento", "mensaje", "bucle", "repetir", "por siempre", "repetir hasta", "condicional", "si… entonces", "si no", "condición", "sensor", "operador lógico"],
  pregunta: {
    texto: "En un videojuego, el personaje salta en cuanto pulsas la tecla, en cualquier momento de la partida. ¿Cómo «sabe» el programa cuándo la estás pulsando?",
    respuesta: "Hay dos formas. Con un <b>evento</b> («al presionar la tecla espacio»), el programa reacciona en el momento en que ocurre. O con un <b>bucle «por siempre»</b> que contiene un <b>condicional</b> («si ¿tecla espacio presionada? entonces saltar»): el programa pregunta decenas de veces por segundo si la tecla está pulsada. Es tan rápido que parece instantáneo.",
  },
  bloques: [
    {
      html: `<h3>Los eventos: cuándo empieza un programa</h3><p>Un <mark>evento</mark> es <b>algo que ocurre</b> y que hace que se ponga en marcha un programa. En Scratch los bloques de eventos son amarillos y tienen forma de <b>sombrero</b>, porque siempre van arriba del todo. Los principales son: <b>«al hacer clic en la bandera verde»</b>, que empieza el proyecto; <b>«al presionar la tecla…»</b>, para controlar personajes con el teclado; <b>«al hacer clic en este objeto»</b>, para botones o personajes con los que se interactúa; <b>«cuando el fondo cambie a…»</b>, para cambiar de escena o de nivel; y <b>«cuando el volumen sea mayor que…»</b>, que reacciona al sonido del micrófono. Un mismo objeto puede tener <b>varios programas</b>, cada uno con su evento, y todos pueden funcionar a la vez: por ejemplo, uno que mueve al personaje con las flechas y otro que toca música de fondo. A esto se le llama <b>programación por eventos</b>, y es como funcionan las aplicaciones y los juegos.</p>`,
      video: { id: "9FBhe8bMZ28", titulo: "Eventos y programación en Scratch", canal: "CursoTutorial", vistas: 29653 },
    },
    {
      html: `<h3>Mensajes: comunicar objetos</h3><p>A veces un objeto tiene que avisar a otro de que algo ha pasado: el botón «Jugar» debe avisar al personaje de que empiece la partida, o el gato debe avisar al perro de que le toca hablar. Para eso se usan los <mark>mensajes</mark>. Con el bloque <b>«enviar mensaje…»</b> un objeto lanza un aviso con un nombre que elegimos (por ejemplo, «empezar»). Cualquier objeto, o el escenario, que tenga el bloque <b>«al recibir empezar»</b> pondrá en marcha el programa que hay debajo. El bloque <b>«enviar … y esperar»</b> hace que el objeto que envía espere a que los demás terminen antes de seguir. Los mensajes sirven para <b>sincronizar</b> diálogos entre personajes, cambiar de pantalla (inicio, juego, fin), pasar de nivel o avisar de que el jugador ha perdido. Son la forma de que los distintos objetos trabajen en equipo, como actores que esperan su señal para entrar en escena.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mensajes entre objetos: el botón envía el mensaje empezar y el gato, al recibir empezar, dice que comienza el juego">${BG}
        ${t(64, 22, "botón «Jugar»", { size: 10, color: "var(--muted)" })}${t(196, 22, "gato", { size: 10, color: "var(--muted)" })}
        <path d="M10 34 q 26 -14 52 0 h 54 v 22 h -96 l -4 4 h -8 l -4 -4 h -2 Z" fill="${SC.eve}" stroke="var(--ink)" stroke-opacity=".25"/>${t(18, 50, "al hacer clic aquí", { size: 9, color: "#fff", anchor: "start" })}
        ${bl(10, 60, 110, SC.eve, "enviar empezar", 18)}
        <path d="M140 34 q 26 -14 52 0 h 58 v 22 h -100 l -4 4 h -8 l -4 -4 h -2 Z" fill="${SC.eve}" stroke="var(--ink)" stroke-opacity=".25"/>${t(148, 50, "al recibir empezar", { size: 9, color: "#fff", anchor: "start" })}
        ${bl(140, 60, 110, SC.apa, "decir ¡A jugar!", 18)}${bl(140, 82, 110, SC.mov, "ir a x: 0 y: 0", 18)}
        <path d="M70 100 Q 130 150 190 108" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/>${fl(184, 112, 192, 106, "var(--red)", 2)}
        <rect x="96" y="132" width="68" height="20" rx="10" fill="var(--red)" fill-opacity=".14" stroke="var(--red)"/>${t(130, 146, "«empezar»", { size: 10, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Bucles: repetir</h3><p>Un <mark>bucle</mark> repite un grupo de instrucciones. En Scratch son bloques naranjas de <b>Control</b> con forma de C, que abrazan los bloques que se repiten. Hay tres. <b>«Repetir 10»</b> repite un número exacto de veces y después continúa con lo que haya debajo; sirve para dibujar figuras, hacer que un personaje dé 5 saltos o contar hasta 10. <b>«Por siempre»</b> repite sin parar mientras el proyecto esté en marcha; no tiene ningún hueco debajo, porque nunca termina. Se usa para todo lo que debe ocurrir continuamente: mover enemigos, comprobar choques, animar personajes o tocar la música de fondo. <b>«Repetir hasta que…»</b> repite mientras <b>no</b> se cumpla una condición, y para cuando se cumple; por ejemplo, «repetir hasta que ¿tocando borde?: mover 5 pasos» hace que el gato avance hasta el borde y se detenga. Los bucles se pueden poner unos dentro de otros: son los <b>bucles anidados</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los tres bucles de Scratch: repetir 10, por siempre y repetir hasta que tocando borde">${BG}
        ${ce(8, 16, 76, 28, SC.con, "repetir 10")}${bl(32, 40, 52, SC.mov, "mover", 16)}${t(46, 110, "n veces", { size: 9.5, color: "var(--muted)" })}
        ${ce(92, 16, 76, 28, SC.con, "por siempre")}${bl(116, 40, 52, SC.mov, "mover", 16)}${t(130, 110, "sin fin", { size: 9.5, color: "var(--muted)" })}
        ${ce(176, 16, 78, 28, SC.con, "repetir hasta")}${bl(200, 40, 54, SC.mov, "mover", 16)}${t(215, 110, "hasta condición", { size: 9.5, color: "var(--muted)" })}
        ${hex(190, 128, 50, "¿borde?")}${fl(215, 126, 215, 116, "var(--muted)", 1.2)}
        ${t(130, 166, "bloques de Control (naranja) con forma de C", { size: 9.5, color: "var(--muted)" })}</svg>`,
      video: { id: "T7e51ej8Wmw", titulo: "Cómo usar el bucle de repetición en Scratch 3.0", canal: "Docente Pro", vistas: 14532 },
    },
    {
      html: `<h3>Condicionales: decidir</h3><p>Un <mark>condicional</mark> permite que el programa <b>tome decisiones</b>: hace una cosa u otra según si se cumple una condición. En Scratch hay dos bloques. <b>«si… entonces»</b> ejecuta los bloques de dentro solo cuando la condición es verdadera; si es falsa, se los salta y sigue. <b>«si… entonces… si no»</b> tiene dos huecos: el de arriba se ejecuta si la condición es verdadera y el de abajo si es falsa; siempre se ejecuta uno de los dos, nunca ambos. Por ejemplo: «si ¿tocando Manzana? entonces sumar a puntos 1»; o «si puntos &gt; 10 entonces decir "¡Has ganado!" si no decir "Sigue intentándolo"». Hay un detalle muy importante: un condicional comprueba la condición <b>una sola vez</b>, en el momento en que se ejecuta. Por eso, si queremos que se compruebe continuamente durante todo el juego, hay que meterlo <b>dentro de un bucle «por siempre»</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Condicional si puntos mayor que 10 entonces decir has ganado, si no decir sigue intentándolo">${BG}
        <path d="M14 22 h 230 v 24 h -206 v 26 h 206 v 18 h -206 v 26 h 206 v 14 h -230 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>
        ${t(22, 38, "si", { size: 10, color: "#fff", anchor: "start" })}<path d="M42 26 h 80 l 7 7 l -7 7 h -80 l -7 -7 Z" fill="${SC.ope}" stroke="#fff" stroke-opacity=".6"/>${t(82, 37, "puntos > 10", { size: 9, color: "#fff" })}${t(136, 38, "entonces", { size: 10, color: "#fff", anchor: "start" })}
        ${bl(38, 48, 150, SC.apa, "decir ¡Has ganado!", 18)}${t(22, 86, "si no", { size: 10, color: "#fff", anchor: "start" })}${bl(38, 92, 170, SC.apa, "decir Sigue intentándolo", 18)}
        ${t(250, 62, "V", { size: 11, color: "var(--leaf)", anchor: "end" })}${t(250, 106, "F", { size: 11, color: "var(--red)", anchor: "end" })}
        ${t(130, 160, "siempre se ejecuta uno de los dos", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "t0cjd7-amNM", titulo: "Uso de condiciones o condicional SI en Scratch 3.0", canal: "Los Atemporales", vistas: 35628 },
    },
    {
      html: `<h3>Las condiciones: sensores y operadores</h3><p>Las <mark>condiciones</mark> son bloques con forma de <b>hexágono</b> (de puntas) que solo pueden valer <b>verdadero</b> o <b>falso</b>. Encajan en los huecos hexagonales de «si», «repetir hasta» o «esperar hasta». Muchas vienen de la categoría <b>Sensores</b>: «¿tocando borde?», «¿tocando el puntero del ratón?», «¿tocando el objeto Enemigo?», «¿tocando el color rojo?», «¿tecla espacio presionada?» o «¿ratón presionado?». Otras se construyen con los <b>operadores</b> de comparación (verdes): «puntos &gt; 10», «vidas = 0», «tiempo &lt; 5». Y se pueden <b>combinar</b> con los operadores lógicos: <b>«y»</b> es verdadero solo si las dos condiciones lo son («¿tocando Llave? y ¿tocando Puerta?»); <b>«o»</b> es verdadero si al menos una lo es («vidas = 0 o tiempo = 0»); y <b>«no»</b> invierte el valor («no ¿tocando suelo?» significa que está en el aire).</p>${tabla(["Operador", "Es verdadero cuando…", "Ejemplo"], [["A y B", "A y B son verdaderas", "¿tocando Llave? y ¿tocando Puerta?"], ["A o B", "al menos una es verdadera", "vidas = 0 o tiempo = 0"], ["no A", "A es falsa", "no ¿tocando suelo?"]])}`,
    },
    {
      html: `<h3>Combinar bucles y condicionales</h3><p>La gran mayoría de los programas interactivos tienen la misma estructura: un <b>evento</b> que empieza, unas instrucciones para <b>preparar</b> la escena (posición inicial, disfraz, variables a cero) y un <b>bucle «por siempre»</b> que dentro tiene <b>varios condicionales</b>, uno por cada cosa que puede pasar. Por ejemplo, para mover un personaje con las flechas: al hacer clic en la bandera, ir a x: 0 y: 0; por siempre { si ¿tecla flecha derecha presionada? entonces cambiar x en 5; si ¿tecla flecha izquierda presionada? entonces cambiar x en −5; si ¿tecla flecha arriba presionada? entonces cambiar y en 5; si ¿tecla flecha abajo presionada? entonces cambiar y en −5 }. Este método da un <b>movimiento suave</b> y permite pulsar dos teclas a la vez para moverse en diagonal, algo que no se consigue igual de bien con los eventos «al presionar tecla».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bucle por siempre con dos condicionales: si flecha derecha presionada cambiar x en 5; si flecha izquierda presionada cambiar x en menos 5">${BG}
        ${ce(10, 12, 230, 116, SC.con, "por siempre")}
        <path d="M34 36 h 200 v 22 h -176 v 18 h 176 v 8 h -200 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(40, 51, "si", { size: 10, color: "#fff", anchor: "start" })}${hex(60, 40, 104, "¿flecha derecha?")}
        ${bl(58, 58, 120, SC.mov, "cambiar x en 5", 18)}
        <path d="M34 88 h 200 v 22 h -176 v 18 h 176 v 8 h -200 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(40, 103, "si", { size: 10, color: "#fff", anchor: "start" })}${hex(60, 92, 104, "¿flecha izquierda?")}
        ${bl(58, 110, 120, SC.mov, "cambiar x en −5", 18)}</svg>`,
    },
    {
      html: `<h3>Esperar y temporizar</h3><p>Los ordenadores son tan rápidos que, sin pausas, muchas cosas ocurrirían demasiado deprisa para verlas. El bloque <b>«esperar 1 segundos»</b> detiene el programa durante el tiempo indicado; se usa para que una animación vaya a la velocidad adecuada, para dar tiempo a leer un bocadillo o para que aparezcan enemigos cada cierto tiempo. El bloque <b>«esperar hasta que…»</b> detiene el programa hasta que se cumpla una condición, por ejemplo «esperar hasta que ¿tecla espacio presionada?» para empezar el juego cuando el jugador esté listo. El sensor <b>«cronómetro»</b> cuenta los segundos desde que empezó el programa o desde el último «reiniciar cronómetro», y sirve para hacer juegos con tiempo límite: «si cronómetro &gt; 30 entonces detener todos». Por último, el bloque <b>«detener todos»</b> para todos los programas del proyecto, como el botón rojo.</p>`,
    },
    {
      html: `<h3>Errores frecuentes y cómo depurarlos</h3><p>Cuando se trabaja con eventos, bucles y condicionales aparecen siempre los mismos errores. El condicional <b>fuera del bucle</b>: el programa comprueba la condición una vez, al principio, y nunca más. El <b>bucle infinito sin querer</b>: un «repetir hasta» cuya condición nunca se cumple deja el programa atascado. Los bloques <b>después de un «por siempre»</b>: nunca se ejecutarán, por eso Scratch no deja encajar nada debajo. Los <b>mensajes sin receptor</b>: se envía «empezar» pero ningún objeto tiene «al recibir empezar», o tiene un nombre ligeramente distinto. Y las <b>condiciones al revés</b>: usar «&gt;» en lugar de «&lt;». Para encontrarlos, ayuda hacer clic en un programa y ver cómo se ilumina mientras se ejecuta, mostrar las variables en el escenario y añadir bloques «decir» temporales que digan en qué parte del programa estamos.</p>`,
    },
  ],
  figura: {
    titulo: "La estructura de casi todos los juegos",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Estructura típica: un evento al hacer clic en la bandera, la preparación inicial, y un bucle por siempre con varios condicionales dentro: si se pulsa una tecla, si toca un enemigo, si toca un premio">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <path d="M30 30 q 40 -20 80 0 h 140 v 28 h -190 l -5 5 h -12 l -5 -5 h -8 Z" fill="${SC.eve}" stroke="var(--ink)" stroke-opacity=".25"/>${t(40, 50, "1. Evento: al hacer clic en ⚑", { size: 13, color: "#fff", anchor: "start" })}
      <rect x="30" y="62" width="300" height="28" fill="${SC.mov}" stroke="var(--ink)" stroke-opacity=".25"/>${t(40, 81, "2. Preparar: posición, disfraz, puntos = 0", { size: 13, color: "#fff", anchor: "start" })}
      <path d="M30 94 h 420 v 28 h -390 v 72 h 390 v 16 h -420 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(40, 113, "3. Por siempre", { size: 13, color: "#fff", anchor: "start" })}
      ${[["si ¿tecla pulsada? → mover", 126], ["si ¿tocando Enemigo? → perder vida", 150], ["si ¿tocando Premio? → sumar punto", 174]].map(([s, y]) => `<rect x="64" y="${y}" width="370" height="20" rx="4" fill="#c86a00" stroke="#fff" stroke-opacity=".5"/>${t(74, y + 15, s, { size: 12, color: "#fff", anchor: "start" })}`).join("")}
      ${t(550, 60, "empieza", { size: 13, color: SC.eve })}${t(550, 84, "prepara", { size: 13, color: SC.mov })}${t(550, 150, "comprueba", { size: 13, color: SC.con })}${t(550, 170, "sin parar", { size: 13, color: SC.con })}
    </svg>`,
  },
  video: { id: "DRYBZI-4VKY", titulo: "Scratch 3.0: bucles y condicionales", canal: "Robótica y Computación", vistas: 19250, megusta: 232, busqueda: "Scratch eventos bucles condicionales" },
  ejemplos: [
    { enunciado: "Haz que el gato diga «¡Ay!» y vuelva al centro cada vez que toque al perro.",
      pasos: ["Al hacer clic en la bandera: por siempre.", "Dentro: si ¿tocando Perro? entonces decir «¡Ay!» 1 s; ir a x: 0 y: 0.", "El condicional va dentro del bucle para comprobarlo todo el rato."],
      resultado: "Bucle por siempre con un condicional." },
    { enunciado: "El gato debe avanzar hasta el borde y pararse allí.",
      pasos: ["Al hacer clic en la bandera: ir a x: −200 y: 0.", "Repetir hasta que ¿tocando borde?: mover 5 pasos.", "Decir «¡Llegué!»."],
      resultado: "Repetir hasta, que termina al cumplirse la condición." },
    { enunciado: "Al pulsar el botón «Jugar», debe esconderse y empezar la música en el escenario.",
      pasos: ["Botón: al hacer clic en este objeto, esconder, enviar «empezar».", "Escenario: al recibir «empezar», por siempre tocar sonido «música» hasta que termine.", "El nombre del mensaje debe ser idéntico."],
      resultado: "Comunicación con mensajes." },
  ],
  errores: [
    "Poner un condicional fuera del bucle por siempre: solo se comprueba una vez.",
    "Hacer un «repetir hasta» con una condición que nunca se cumple.",
    "Escribir mal el nombre de un mensaje: nadie lo recibe.",
    "Confundir «si… entonces» con «si… entonces… si no».",
    "Usar «y» cuando basta con que se cumpla una condición (debería ser «o»).",
  ],
  ejercicios: [
    { q: "¿Qué es un evento? Nombra tres bloques de eventos.", sol: "Algo que ocurre y pone en marcha un programa: al hacer clic en la bandera, al presionar tecla, al hacer clic en este objeto." },
    { q: "¿Para qué sirven los mensajes?", sol: "Para que un objeto avise a otros y sincronizar programas." },
    { q: "Diferencia «repetir 10», «por siempre» y «repetir hasta».", sol: "Número fijo de veces; sin fin; mientras no se cumpla una condición." },
    { q: "¿Por qué no se puede poner ningún bloque debajo de «por siempre»?", sol: "Porque nunca termina, así que no se ejecutaría." },
    { q: "¿Qué forma tienen las condiciones y qué valores pueden tomar?", sol: "Hexagonal; verdadero o falso." },
    { q: "¿Cuándo es verdadera «A y B»? ¿Y «A o B»?", sol: "«A y B» si ambas lo son; «A o B» si al menos una lo es." },
    { q: "Escribe un programa para mover un objeto arriba y abajo con las flechas.", sol: "Bandera; por siempre { si ¿flecha arriba? cambiar y en 5; si ¿flecha abajo? cambiar y en −5 }." },
    { q: "Escribe un condicional que diga «Has perdido» cuando las vidas lleguen a 0.", sol: "Si vidas = 0 entonces decir «Has perdido»; detener todos." },
    { q: "¿Para qué sirve el bloque «esperar hasta que…»?", sol: "Detiene el programa hasta que se cumple una condición." },
    { q: "Un programa no reacciona al tocar un enemigo. ¿Qué revisarías?", sol: "Que el condicional esté dentro de un bucle por siempre y que el nombre del objeto sea correcto." },
  ],
  quiz: [
    { q: "Los bloques de eventos tienen forma de…", o: ["sombrero", "C", "hexágono"], a: 0, e: "Van arriba del programa." },
    { q: "Un objeto avisa a otro con…", o: ["un mensaje", "un disfraz", "un fondo"], a: 0, e: "Enviar mensaje." },
    { q: "El bucle que nunca termina es…", o: ["repetir 10", "por siempre", "repetir hasta"], a: 1, e: "Por siempre." },
    { q: "«Repetir hasta que ¿tocando borde?» para cuando…", o: ["toca el borde", "pasa 1 s", "nunca"], a: 0, e: "Al cumplirse la condición." },
    { q: "En «si… entonces… si no» se ejecuta…", o: ["los dos huecos", "uno de los dos", "ninguno"], a: 1, e: "Uno, según la condición." },
    { q: "Una condición vale…", o: ["un número", "verdadero o falso", "un color"], a: 1, e: "Booleana." },
    { q: "«¿tocando borde?» es un bloque de…", o: ["Sensores", "Movimiento", "Sonido"], a: 0, e: "Sensores." },
    { q: "«vidas = 0 o tiempo = 0» es verdadero si…", o: ["las dos se cumplen", "al menos una se cumple", "ninguna"], a: 1, e: "Operador o." },
    { q: "Para comprobar algo todo el tiempo, el condicional va dentro de…", o: ["por siempre", "un evento", "un disfraz"], a: 0, e: "Por siempre." },
    { q: "«no ¿tocando suelo?» significa…", o: ["está en el suelo", "está en el aire", "no hay suelo"], a: 1, e: "Invierte el valor." },
  ],
  examen: [
    { q: "Para moverse en diagonal pulsando dos teclas, es mejor usar…", o: ["por siempre con condicionales", "solo eventos de tecla", "mensajes"], a: 0, e: "Movimiento suave y simultáneo." },
    { q: "Un juego con tiempo límite usa el sensor…", o: ["cronómetro", "volumen", "color"], a: 0, e: "Cronómetro." },
    { q: "Bucles dentro de otros bucles se llaman…", o: ["anidados", "infinitos", "eventos"], a: 0, e: "Anidados." },
  ],
  feynman: ["Qué es un evento y para qué sirven los mensajes", "En qué se diferencian los tres bucles de Scratch", "Por qué un condicional suele ir dentro de un bucle por siempre"],
  mapa: mapa("CONTROL", "var(--eso)", [
    ["Eventos", "bandera · tecla · clic · mensajes", SC.eve],
    ["Bucles", "repetir · por siempre · hasta", SC.con],
    ["Condicionales", "si… entonces · si no", "var(--red)"],
    ["Condiciones", "sensores · y · o · no", SC.sen],
  ], 290),
  tarjetas: [
    ["Evento", "Algo que ocurre y empieza un programa."],
    ["Mensaje", "Aviso de un objeto a otros: enviar y al recibir."],
    ["Repetir n", "Bucle que repite un número fijo de veces."],
    ["Por siempre", "Bucle que nunca termina."],
    ["Repetir hasta", "Repite mientras no se cumpla la condición."],
    ["Si… entonces", "Ejecuta solo si la condición es verdadera."],
    ["Condición", "Bloque hexagonal: verdadero o falso."],
    ["Operadores lógicos", "y, o, no."],
  ],
  familias: ["Pensad juntos qué «eventos» y «condicionales» hay en un día normal (si suena el despertador…).", "Probad un juego de Scratch hecho en clase y explicad qué hace cada bucle.", "Inventad las reglas de un juego con frases «si… entonces»."],
  profesores: {
    saberes: "Estructuras de control en programación por bloques: eventos, mensajes y programación concurrente, bucles definidos e indefinidos, condicionales simples y dobles, condiciones con sensores y operadores lógicos, temporización y depuración (RD 217/2022 y currículos autonómicos de Programación y robótica).",
    ideas: ["Control de un personaje con flechas y comparación de los dos métodos (eventos y por siempre).", "Diálogo entre dos personajes sincronizado con mensajes.", "Laberinto en el que tocar las paredes (por color) devuelve al inicio."],
  },
  fuentes: [RD, wiki("Estructuras de control", "Estructuras_de_control"), { t: "Scratch (MIT): web oficial", url: "https://scratch.mit.edu/" }],
  revisado: REV,
};
