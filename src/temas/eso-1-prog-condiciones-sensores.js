// Programación y robótica 1º ESO: condiciones y sensores en Scratch. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

const bq = (x, y, w, s, c) => `<rect x="${x}" y="${y}" width="${w}" height="20" rx="4" fill="${c}"/>${et(x + 7, y + 14, s, w - 12, { anchor: "start", color: "#fff", size: 10 })}`;
const hex = (x, y, w, s, c = "#2ea8d8") => `<path d="M${x + 8} ${y} H ${x + w - 8} l 8 9 l -8 9 H ${x + 8} l -8 -9 Z" fill="${c}" stroke="rgba(0,0,0,.2)"/>${et(x + w / 2, y + 13, s, w - 18, { color: "#fff", size: 9.5 })}`;
const NA = "#e8892c", AZ = "#4c97ff", MO = "#9966ff", SO = "#cf63cf";

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Condiciones y sensores",
  minutos: 55,
  objetivos: ["Explicar qué es una condición y que solo puede ser verdadera o falsa", "Usar los bloques «si… entonces» y «si… entonces… si no»", "Utilizar los bloques sensores para detectar teclas, contactos, colores y distancias", "Combinar condiciones con operadores lógicos y comparaciones para crear interacción"],
  claves: ["condición", "verdadero", "falso", "si entonces", "si no", "sensor", "tocando", "tocando color", "tecla presionada", "ratón", "distancia", "preguntar y respuesta", "operadores", "y, o, no", "comparar"],
  pregunta: {
    texto: "Las puertas automáticas de un supermercado se abren cuando te acercas y se cierran cuando te alejas. ¿Qué «piensa» la puerta?",
    respuesta: "En realidad no piensa: tiene un <b>sensor</b> que detecta si hay alguien cerca y un <b>programa</b> que comprueba una y otra vez una <b>condición</b>: «<b>si</b> hay alguien delante, <b>entonces</b> abrir; <b>si no</b>, cerrar». La respuesta a la pregunta «¿hay alguien?» solo puede ser sí o no. Este esquema, sensor más condición repetida, está en casi todas las máquinas automáticas: termostatos, farolas, alarmas, robots… y también en los videojuegos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una condición?</h3><p>Hasta ahora, los programas hacían siempre lo mismo. Pero los programas interesantes <b>toman decisiones</b>: hacen una cosa u otra según lo que ocurra. Para eso se usan las <mark>condiciones</mark>. Una condición es una <b>pregunta que solo puede responderse con sí o no</b>, es decir, que solo puede ser <mark>verdadera</mark> o <mark>falsa</mark>. Por ejemplo: «¿está tocando el borde?», «¿se ha pulsado la tecla espacio?», «¿los puntos son más de 10?». En Scratch, las condiciones tienen forma <b>hexagonal</b> (con puntas a los lados), y solo encajan en los huecos con esa misma forma. Se encuentran sobre todo en las categorías <b>Sensores</b> (azul claro) y <b>Operadores</b> (verde). Las condiciones se usan dentro de los bloques de control «si… entonces», «si… entonces… si no», «esperar hasta que…» y «repetir hasta que…». Combinando condiciones con bucles se consigue que los programas <b>reaccionen</b> a lo que pasa: eso es la interactividad.</p>`,
    },
    {
      html: `<h3>Si… entonces</h3><p>El bloque <mark>«si… entonces»</mark> (categoría Control) tiene forma de C con un hueco hexagonal arriba. Funciona así: el programa comprueba la condición; si es <b>verdadera</b>, ejecuta los bloques de su interior; si es <b>falsa</b>, se los salta y sigue con lo que haya debajo. Por ejemplo: «si ¿tocando Manzana? entonces: sumar a puntos 1; tocar sonido mordisco». Un detalle muy importante: el bloque «si» comprueba la condición <b>una sola vez</b>, en el instante en que se ejecuta. Si en ese momento no se cumple, ya no vuelve a mirar. Por eso casi siempre se coloca <b>dentro de un bucle «por siempre»</b>, para que la condición se compruebe continuamente, muchas veces por segundo. Es el error más frecuente al empezar: poner un «si» suelto después de la bandera verde y preguntarse por qué no funciona. Dentro de un mismo bucle se pueden poner varios «si», uno debajo de otro, para comprobar varias cosas: si toca la manzana, si toca la bomba, si toca el borde…</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Programa: al hacer clic en la bandera, por siempre, si tocando Manzana entonces sumar a puntos 1 y tocar sonido">${BG}
        <rect x="30" y="16" width="200" height="22" rx="4" fill="#c98a00"/>${et(38, 31, "al hacer clic en 🏁", 180, { anchor: "start", color: "#fff", size: 10.5 })}
        <path d="M30 40 h 200 v 22 H 50 v 88 h 180 v 12 H 30 Z" fill="${NA}"/>${et(38, 55, "por siempre", 150, { anchor: "start", color: "#fff", size: 10.5 })}
        <path d="M50 66 h 176 v 26 H 70 v 44 h 156 v 12 H 50 Z" fill="#f0a35e"/>${t(58, 83, "si", { size: 10.5, anchor: "start", color: "#fff" })}${hex(74, 70, 104, "¿tocando Manzana?")}${t(182, 83, "entonces", { size: 9.5, anchor: "start", color: "#fff", weight: 400 })}
        ${bq(70, 96, 150, "sumar a puntos 1", NA)}${bq(70, 116, 150, "tocar sonido mordisco", SO)}
        ${t(130, 176, "el «si» va dentro del «por siempre»", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "hhj41bbp9BQ", titulo: "Condicionales en Scratch 3.0: bloque si entonces si no", canal: "Cosas de Informatica", vistas: 5743 },
    },
    {
      html: `<h3>Si… entonces… si no</h3><p>El bloque <mark>«si… entonces… si no»</mark> tiene dos huecos: si la condición es verdadera, se ejecutan los bloques del primer hueco; si es falsa, los del segundo. Siempre se ejecuta <b>uno de los dos caminos, y solo uno</b>. Es ideal cuando hay dos posibilidades opuestas. Por ejemplo, en un juego de preguntas: «si respuesta = 12 entonces: decir ¡Correcto!; sumar a puntos 1; si no: decir Casi, era 12». O en un personaje que cambia de cara: «si ¿tocando Fantasma? entonces: cambiar disfraz a asustado; si no: cambiar disfraz a normal». Si hay <b>más de dos posibilidades</b>, se pueden <b>anidar</b> varios «si… si no»: dentro del «si no» se pone otro «si… si no», y así sucesivamente. Por ejemplo, para dar una calificación: si nota ≥ 9, «sobresaliente»; si no, si nota ≥ 7, «notable»; si no, si nota ≥ 5, «aprobado»; si no, «suspenso». El orden de las preguntas importa: hay que empezar por la condición más exigente.</p>${tabla(["Bloque", "Si la condición es verdadera", "Si es falsa"], [["si… entonces", "ejecuta su interior", "no hace nada"], ["si… entonces… si no", "ejecuta el primer hueco", "ejecuta el segundo hueco"], ["esperar hasta que…", "continúa", "se queda esperando"], ["repetir hasta que…", "sale del bucle", "repite el interior"]])}`,
    },
    {
      html: `<h3>Los bloques sensores</h3><p>Los <mark>sensores</mark> son los «sentidos» del programa: permiten saber qué está pasando en el escenario o qué hace el usuario. Están en la categoría <b>Sensores</b> (azul claro). Los hexagonales dan una respuesta verdadero/falso y sirven como condiciones: <b>«¿tocando [borde / puntero del ratón / otro objeto]?»</b> detecta si el objeto está tocando algo; <mark>«¿tocando el color…?»</mark> detecta si toca un color concreto del fondo o de otro objeto (muy útil para paredes de laberintos, suelos o meta); <b>«¿color… tocando color…?»</b> comprueba si un color del propio objeto toca otro color; <mark>«¿tecla espacio presionada?»</mark> detecta si se está pulsando una tecla; y <b>«¿ratón presionado?»</b>, si se hace clic. Los redondeados dan un valor: <b>«distancia a puntero del ratón»</b> o a otro objeto, «posición x del ratón», «cronómetro» (segundos desde que empezó), «volumen» (del micrófono) y «respuesta». Combinados con «si», permiten programar casi cualquier juego.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bloques sensores hexagonales: tocando borde, tocando el color, tecla espacio presionada, ratón presionado; y redondeados: distancia a, cronómetro y respuesta">${BG}
        ${t(70, 22, "dan verdadero o falso", { size: 10, color: COL.azul })}
        ${hex(10, 32, 120, "¿tocando borde?")}${hex(10, 58, 120, "¿tocando el color ■?")}${hex(10, 84, 120, "¿tecla espacio presionada?")}${hex(10, 110, 120, "¿ratón presionado?")}
        ${t(196, 22, "dan un valor", { size: 10, color: COL.verde })}
        ${["distancia a ratón", "cronómetro", "respuesta", "volumen"].map((s, i) => `<rect x="142" y="${32 + i * 26}" width="108" height="18" rx="9" fill="#2ea8d8" stroke="rgba(0,0,0,.2)"/>${et(196, 45 + i * 26, s, 96, { color: "#fff", size: 9.5 })}`).join("")}
        ${t(130, 160, "condiciones en los huecos hexagonales", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "lTvFvWNnO5s", titulo: "Sensores en Scratch 3.0: juego del laberinto paso a paso", canal: "Cosas de Informatica", vistas: 4091 },
    },
    {
      html: `<h3>Preguntar y responder</h3><p>Un sensor muy útil para crear programas que dialogan con el usuario es <mark>«preguntar … y esperar»</mark>. Al ejecutarse, el objeto muestra la pregunta en un bocadillo y aparece un cuadro de texto en la parte de abajo del escenario donde el usuario escribe su respuesta; el programa <b>se detiene</b> hasta que se pulsa Intro o el botón de confirmar. Lo que se ha escrito se guarda en el bloque redondeado <mark>«respuesta»</mark>, que se puede usar en otros bloques: «decir (unir Hola respuesta)» saluda por el nombre, y «si respuesta = 8 entonces…» comprueba si se ha acertado. Con estos bloques se pueden hacer <b>cuestionarios, calculadoras, juegos de adivinanzas o conversaciones</b>. Un detalle: «respuesta» solo guarda la última respuesta; si queremos recordar varias, hay que guardarlas en variables. Y, al comparar textos, Scratch no distingue entre mayúsculas y minúsculas: «Madrid» y «madrid» se consideran iguales.</p>`,
    },
    {
      html: `<h3>Operadores: comparar y combinar</h3><p>La categoría <b>Operadores</b> (verde) tiene bloques para construir condiciones más elaboradas. Los de <mark>comparación</mark> comparan dos valores: <b>«&gt;»</b> (mayor que), <b>«&lt;»</b> (menor que) y <b>«=»</b> (igual a). Por ejemplo, «puntos &gt; 9», «posición y &lt; −170» o «respuesta = 12». Los <mark>operadores lógicos</mark> combinan varias condiciones. <b>«… y …»</b> es verdadero solo si <b>las dos</b> condiciones son verdaderas: «¿tocando Llave? y ¿tecla espacio presionada?» (para abrir una puerta hay que tener la llave y pulsar la tecla). <b>«… o …»</b> es verdadero si <b>al menos una</b> es verdadera: «¿tocando Lava? o ¿tocando Pinchos?» (cualquiera de las dos hace perder una vida). Y <b>«no …»</b> invierte la condición: «no ¿tocando suelo?» es verdadero cuando el personaje está en el aire. Para comprobar «mayor o igual», como no hay bloque, se combina: «nota &gt; 4» con números enteros, o «(nota &gt; 5) o (nota = 5)».</p>${tabla(["Operador", "Es verdadero cuando…", "Ejemplo"], [["A y B", "las dos son verdaderas", "tiene la llave y pulsa espacio"], ["A o B", "al menos una es verdadera", "toca lava o toca pinchos"], ["no A", "A es falsa", "no toca el suelo: está en el aire"]])}`,
    },
    {
      html: `<h3>Un ejemplo: atrapar manzanas</h3><p>Veamos un pequeño juego que combina todo. Hay una <b>cesta</b> abajo y una <b>manzana</b> que cae. Programa de la cesta: al hacer clic en la bandera, ir a x: 0 y: −150; por siempre: <b>si</b> ¿tecla flecha derecha presionada? <b>entonces</b> sumar 10 a x; <b>si</b> ¿tecla flecha izquierda presionada? <b>entonces</b> sumar −10 a x. Programa de la manzana: al hacer clic en la bandera, dar a puntos el valor 0, ir a x: (número al azar entre −220 y 220) y: 170; por siempre: sumar −5 a y; <b>si</b> ¿tocando Cesta? <b>entonces</b> sumar a puntos 1, tocar sonido, volver arriba a una x al azar; <b>si</b> posición y &lt; −170 <b>entonces</b> decir «¡Se escapó!» y detener todo. Con un sensor más, «si puntos = 10 entonces cambiar fondo a Victoria», el juego ya tiene un objetivo. Se puede mejorar haciendo que la manzana caiga cada vez más rápido o añadiendo una bomba que reste puntos.</p>`,
      video: { id: "vfs-7tkPH8c", titulo: "Juego en Scratch 1: captura manzanas", canal: "Profe Blas", vistas: 121266 },
    },
  ],
  figura: {
    titulo: "Condiciones y sensores en ocho ideas",
    svg: rejilla([
      ["Condición", "verdadera o falsa", COL.sol],
      ["Si… entonces", "solo si se cumple", COL.naranja],
      ["Si… si no", "uno de dos caminos", COL.rojo],
      ["Por siempre + si", "comprobar sin parar", COL.morado],
      ["Tocando", "objeto, borde o color", COL.agua],
      ["Teclas y ratón", "detectan al jugador", COL.azul],
      ["Preguntar", "guarda la respuesta", COL.gris],
      ["y · o · no", "combinar condiciones", COL.verde],
    ], 4, 86, "Resumen: condición, si entonces, si no, bucle con condición, sensores de contacto, teclas, preguntar y operadores lógicos"),
  },
  video: { id: "Friweqkc35Q", titulo: "Tutorial Scratch: «Si entonces si no»", canal: "Harold Rodríguez", vistas: 12159, megusta: 0, busqueda: "scratch condicionales sensores si entonces" },
  ejemplos: [
    { enunciado: "Un personaje debe decir «¡Ay!» cada vez que toque al murciélago. Escribe el programa.",
      pasos: ["Evento: al hacer clic en la bandera.", "Por siempre:", "si ¿tocando Murciélago? entonces decir «¡Ay!» durante 1 segundo."],
      resultado: "Bandera → por siempre [si tocando Murciélago → decir ¡Ay!]." },
    { enunciado: "Cuestionario: el gato pregunta «¿Cuántas patas tiene una araña?». Si se responde 8, dice «¡Correcto!»; si no, «Son 8».",
      pasos: ["preguntar «¿Cuántas patas tiene una araña?» y esperar.", "si respuesta = 8 entonces decir «¡Correcto!».", "si no, decir «Son 8»."],
      resultado: "Preguntar + si… si no con respuesta = 8." },
    { enunciado: "En un laberinto, el personaje debe volver a la salida si toca una pared negra, y ganar si toca la meta verde.",
      pasos: ["Por siempre:", "si ¿tocando el color negro? entonces ir a la posición de salida.", "si ¿tocando el color verde? entonces decir «¡Has ganado!» y detener todo."],
      resultado: "Dos condiciones con «tocando el color» dentro de por siempre." },
  ],
  errores: [
    "Poner un «si» fuera de un bucle: solo comprueba la condición una vez.",
    "Confundir «si… entonces» con «esperar hasta que».",
    "Elegir mal el color en «tocando el color» (hay que usar el cuentagotas).",
    "Usar «y» cuando debería ser «o», o al revés.",
    "Ordenar mal varias condiciones anidadas: hay que empezar por la más exigente.",
  ],
  ejercicios: [
    { q: "¿Qué es una condición en programación?", sol: "Una pregunta que solo puede ser verdadera o falsa." },
    { q: "¿Qué forma tienen los bloques de condición en Scratch?", sol: "Hexagonal." },
    { q: "¿Qué diferencia hay entre «si… entonces» y «si… entonces… si no»?", sol: "El primero hace algo solo si se cumple; el segundo hace una cosa si se cumple y otra si no." },
    { q: "¿Por qué un «si» suele ir dentro de un «por siempre»?", sol: "Porque el «si» solo comprueba una vez; el bucle hace que se compruebe continuamente." },
    { q: "Escribe tres bloques sensores que sean condiciones.", sol: "¿Tocando borde?, ¿tocando el color…?, ¿tecla espacio presionada?" },
    { q: "¿Para qué sirve el bloque «preguntar y esperar»?", sol: "Para pedir un dato al usuario, que queda guardado en «respuesta»." },
    { q: "¿Cuándo es verdadera la condición «A y B»? ¿Y «A o B»?", sol: "«A y B» si las dos son verdaderas; «A o B» si al menos una lo es." },
    { q: "Escribe la condición para «el personaje está en el aire».", sol: "no ¿tocando suelo? (o no tocando el color del suelo)." },
    { q: "Escribe el programa para mover un objeto a la izquierda con la flecha izquierda usando «si».", sol: "Por siempre: si ¿tecla flecha izquierda presionada? entonces sumar −10 a x." },
    { q: "Pon un ejemplo de condición con comparación.", sol: "puntos > 9." },
  ],
  quiz: [
    { q: "Una condición solo puede ser…", o: ["verdadera o falsa", "un número", "un texto"], a: 0, e: "Verdadera o falsa." },
    { q: "Los bloques de condición tienen forma…", o: ["hexagonal", "redonda", "de C"], a: 0, e: "Hexagonal." },
    { q: "Con «si… si no» se ejecuta…", o: ["uno de los dos caminos", "los dos", "ninguno"], a: 0, e: "Uno de los dos." },
    { q: "Para detectar una pared de color se usa…", o: ["¿tocando el color?", "¿ratón presionado?", "cronómetro"], a: 0, e: "Tocando el color." },
    { q: "Lo que escribe el usuario se guarda en…", o: ["respuesta", "cronómetro", "volumen"], a: 0, e: "Respuesta." },
    { q: "«A o B» es verdadero si…", o: ["al menos una es verdadera", "las dos son falsas", "solo A"], a: 0, e: "Al menos una." },
    { q: "«no ¿tocando suelo?» es verdadero cuando…", o: ["no toca el suelo", "toca el suelo", "siempre"], a: 0, e: "En el aire." },
    { q: "Los sensores están en la categoría de color…", o: ["azul claro", "morado", "amarillo"], a: 0, e: "Azul claro." },
    { q: "Un «si» fuera de un bucle comprueba la condición…", o: ["una vez", "siempre", "nunca"], a: 0, e: "Una vez." },
    { q: "Los operadores de comparación son…", o: [">, < e =", "y, o, no", "+, −"], a: 0, e: "Mayor, menor e igual." },
  ],
  examen: [
    { q: "Para «tener la llave y pulsar espacio» se usa el operador…", o: ["y", "o", "no"], a: 0, e: "Las dos a la vez." },
    { q: "Para «tocar lava o pinchos» se usa…", o: ["o", "y", "no"], a: 0, e: "Cualquiera de las dos." },
    { q: "Si nota = 8, con «si nota > 8 entonces A si no B» se ejecuta…", o: ["B", "A", "los dos"], a: 0, e: "8 no es mayor que 8." },
  ],
  feynman: ["Qué es una condición y por qué solo puede ser verdadera o falsa", "Por qué el bloque «si» suele ir dentro de un bucle «por siempre»", "Cómo funcionan los operadores y, o, no"],
  mapa: mapa("CONDICIONES", "var(--eso)", [
    ["Decidir", "si · si no · anidados", COL.naranja],
    ["Sensores", "tocando · teclas · ratón · color", COL.agua],
    ["Diálogo", "preguntar · respuesta", COL.gris],
    ["Operadores", "> < = · y · o · no", COL.verde],
  ], 300),
  tarjetas: [
    ["Condición", "Pregunta que es verdadera o falsa."],
    ["Si… entonces", "Ejecuta su interior solo si la condición es verdadera."],
    ["Si… si no", "Ejecuta un camino u otro según la condición."],
    ["Sensor", "Bloque que obtiene información del escenario o del usuario."],
    ["¿Tocando el color?", "Detecta si el objeto toca un color concreto."],
    ["Respuesta", "Guarda lo que escribe el usuario al preguntar."],
    ["Operador «y»", "Verdadero si las dos condiciones lo son."],
    ["Operador «o»", "Verdadero si al menos una lo es."],
  ],
  familias: ["Buscad en casa aparatos que tomen decisiones con sensores: frigorífico, termostato, luz con detector.", "Jugad al juego de las preguntas de sí o no y fijaos en cómo se va descartando.", "Probad juntos el juego de atrapar manzanas que hayan programado."],
  profesores: {
    saberes: "Estructuras condicionales: condiciones booleanas, si-entonces, si-entonces-si no, condiciones anidadas, bloques sensores (contacto, color, teclado, ratón, distancia, cronómetro), preguntar y respuesta, operadores relacionales y lógicos (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Laberinto con paredes de color y meta.", "Cuestionario de cinco preguntas con puntuación.", "Juego de atrapar objetos con condición de victoria y de derrota."],
  },
  fuentes: [RD, wiki("Sentencia condicional", "Sentencia_condicional"), { t: "Scratch (web oficial)", url: "https://scratch.mit.edu/" }, { t: "INTEF: Escuela de Pensamiento Computacional", url: "https://code.intef.es/" }],
  revisado: REV,
};
