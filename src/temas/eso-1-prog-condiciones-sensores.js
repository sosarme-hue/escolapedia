// Programación y robótica 1º ESO · Condiciones y sensores. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, resumen, scratch, flujo, escenario, CAT, wiki, C, RD, REV } = require("./_eso1L2");

const puerta = flujo("Diagrama de flujo de una puerta automática: si detecta a alguien, se abre; si no, se cierra; y vuelve a comprobar", [
  ["Inicio", "ini"], ["Leer el sensor", "proc"], ["¿Hay alguien cerca?", "dec", "sí: abrir", "no ↓"], ["Cerrar la puerta", "proc"],
], "La puerta automática", { vuelta: [3, 1] });

const verdadero = comparar("Una condición solo puede ser verdadera o falsa", [
  ["Verdadero", ["5 > 3", "toco el borde", "pulso espacio"], "var(--leaf)"],
  ["Falso", ["2 > 7", "no toco nada", "no pulso nada"], "var(--red)"],
], "Sí o no, nada más");

const siEntonces = scratch("Bloque si entonces dentro de por siempre: si toca el borde, decir ay", [
  ["al hacer clic en ⚑", "eventos"], ["por siempre", "control"], ["mover 5 pasos", "movimiento", 1], ["si ¿tocando borde? entonces", "control", 1], ["decir ¡Ay!", "apariencia", 2], ["girar ↻ 180 grados", "movimiento", 2],
], "Si… entonces");

const siSino = scratch("Bloque si entonces si no: si la tecla espacio está presionada cambiar disfraz a saltar; si no, a quieto", [
  ["al hacer clic en ⚑", "eventos"], ["por siempre", "control"], ["si ¿tecla espacio presionada? entonces", "control", 1], ["cambiar disfraz a Saltando", "apariencia", 2], ["si no", "control", 1], ["cambiar disfraz a Quieto", "apariencia", 2],
], "Si… entonces… si no");

const flujoSiNo = flujo("Diagrama de flujo de si entonces si no: dos caminos según la condición, que se juntan después", [
  ["Inicio", "ini"], ["¿Nota ≥ 5?", "dec", "sí: aprobado", "no ↓"], ["Decir «suspenso»", "proc"], ["Seguir el programa", "proc"], ["Fin", "ini"],
], "Dos caminos");

const sensores = cajas("Bloques sensores de Scratch: tocando, tocando color, tecla presionada, ratón y distancia", [
  ["¿tocando …?", "borde, objeto, ratón", CAT.sensores],
  ["¿tocando color?", "detecta un color", "var(--red)"],
  ["¿tecla presionada?", "espacio, flechas…", "var(--pen)"],
  ["distancia a …", "cuánto falta", "var(--leaf)"],
], "Los sentidos del objeto");

const laberinto = lienzo("Laberinto: si el objeto toca el color de la pared vuelve al inicio; si toca el verde de la meta, gana", `
  <rect x="20" y="20" width="220" height="130" rx="6" fill="var(--card)" stroke="var(--muted)" stroke-width="1.6"/>
  <path d="M20 60 H160 M80 100 H240 M20 130 H120" stroke="var(--pen)" stroke-width="8" stroke-linecap="round"/>
  <rect x="200" y="112" width="34" height="32" rx="4" fill="var(--leaf)" fill-opacity=".7"/>${tx(217, 133, "meta", { fs: 10, c: "#fff", max: 32 })}
  <circle cx="34" cy="36" r="8" fill="var(--red)"/>${tx(52, 40, "jugador", { fs: 10, c: "var(--red)", a: "start", max: 60 })}
  ${tx(130, 170, "azul = pared · verde = meta", { fs: 12, fam: D })}`, 180);

const flechas = scratch("Mover con las flechas del teclado: si tecla flecha derecha sumar 5 a x; si flecha izquierda sumar menos 5; si toca azul volver al inicio", [
  ["al hacer clic en ⚑", "eventos"], ["ir a x: −200 y: 150", "movimiento"], ["por siempre", "control"], ["si ¿tecla → presionada? entonces", "control", 1], ["sumar 5 a x", "movimiento", 2], ["si ¿tecla ← presionada? entonces", "control", 1], ["sumar −5 a x", "movimiento", 2], ["si ¿tocando color azul? entonces", "control", 1], ["ir a x: −200 y: 150", "movimiento", 2],
], "Mover con flechas");

const preguntar = scratch("Preguntar y responder: preguntar cuánto es 7 por 8, y si la respuesta es 56 decir correcto, si no decir inténtalo otra vez", [
  ["al hacer clic en ⚑", "eventos"], ["preguntar ¿Cuánto es 7 × 8? y esperar", "sensores"], ["si (respuesta) = 56 entonces", "control"], ["decir ¡Correcto!", "apariencia", 1], ["si no", "control"], ["decir Inténtalo otra vez", "apariencia", 1],
], "Un examen en Scratch");

const operadores = tabla(["Operador", "Es verdadero si…", "Ejemplo"], [["a > b", "a es mayor que b", "puntos > 10"], ["a < b", "a es menor que b", "vidas < 1"], ["a = b", "a es igual a b", "respuesta = 56"], ["… y …", "se cumplen las dos", "x > 0 y x < 100"], ["… o …", "se cumple al menos una", "tecla a o tecla ←"], ["no …", "no se cumple", "no ¿tocando borde?"]]);

const yo = comparar("Operadores lógicos y, o, no: y exige las dos condiciones, o basta con una, no invierte", [
  ["y", ["las dos a la vez", "V y V = V", "V y F = F"], "var(--pen)"],
  ["o", ["basta con una", "V o F = V", "F o F = F"], "var(--sun)"],
], "Combinar condiciones");

const manzanas = escenario("Juego de atrapar manzanas: la manzana cae desde arriba en una x al azar y la cesta se mueve abajo con las flechas", [[60, 150, "manzana", "var(--red)"], [60, -150, "cesta", "var(--sun)"]], { flechas: [[60, 140, 60, -130, "var(--red)"]] });

const codigoManzana = scratch("Programa de la manzana: ir arriba a una x al azar, caer; si toca la cesta sumar un punto; si toca el suelo volver arriba", [
  ["al hacer clic en ⚑", "eventos"], ["dar a puntos el valor 0", "variables"], ["ir a x: (azar −200 a 200) y: 170", "movimiento"], ["por siempre", "control"], ["sumar −5 a y", "movimiento", 1], ["si ¿tocando Cesta? entonces", "control", 1], ["sumar a puntos 1", "variables", 2], ["ir a x: (azar) y: 170", "movimiento", 2], ["si (posición y) < −170 entonces", "control", 1], ["ir a x: (azar) y: 170", "movimiento", 2],
], "La manzana que cae");

const sensoresReales = cajas("Sensores en el mundo real: proximidad, luz, temperatura y contacto", [
  ["Proximidad", "puertas, aparcar", "var(--pen)"],
  ["Luz", "farolas, móviles", "var(--sun)"],
  ["Temperatura", "termostatos", "var(--red)"],
  ["Contacto", "botones, robots", "var(--leaf)"],
], "Sensores de verdad");

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Condiciones y sensores",
  minutos: 105,
  objetivos: [
    "Explicar qué es una condición y por qué solo puede ser verdadera o falsa",
    "Usar los bloques si… entonces y si… entonces… si no",
    "Detectar choques, colores, teclas y el ratón con los bloques sensores",
    "Hacer preguntas al usuario y reaccionar a su respuesta",
    "Comparar valores y combinar condiciones con y, o, no",
    "Programar un juego sencillo que combine bucles, condiciones y sensores",
  ],
  claves: ["condición", "verdadero", "falso", "si entonces", "si no", "sensor", "tocando", "tecla", "preguntar", "respuesta", "operador", "y", "o", "no"],
  pregunta: {
    texto: "Las puertas automáticas de un supermercado se abren cuando te acercas y se cierran cuando te alejas. ¿Qué «piensa» la puerta?",
    respuesta: "La puerta tiene un <b>sensor</b> que detecta si hay alguien cerca, y su programa repite sin parar una <mark>condición</mark>: «<b>si</b> hay alguien cerca, <b>entonces</b> abrir; <b>si no</b>, cerrar». No piensa como nosotros: solo comprueba una pregunta de sí o no muchas veces por segundo y actúa según la respuesta. Así funcionan también los videojuegos y los robots.",
  },
  lectura: {
    titulo: "George Boole y la lógica del sí y el no",
    html: `<p>En 1854, un profesor inglés llamado <b>George Boole</b> publicó un libro con un título muy ambicioso: «Las leyes del pensamiento». Boole había aprendido matemáticas casi solo, porque su familia no podía pagarle estudios, y se le ocurrió algo sorprendente: tratar las ideas lógicas como si fueran números.</p><p>Para Boole, cualquier afirmación era <b>verdadera</b> o <b>falsa</b>, y las afirmaciones se podían combinar con tres palabras: <b>y</b>, <b>o</b>, <b>no</b>. «Llueve y hace frío» solo es verdad si las dos cosas son ciertas; «llueve o hace frío» es verdad si al menos una lo es. Con estas reglas se podían hacer «cuentas» con razonamientos.</p><p>En su época, casi nadie le encontró utilidad. Pero ochenta años después, el ingeniero Claude Shannon se dio cuenta de que los circuitos eléctricos funcionaban exactamente así: un interruptor está encendido o apagado, verdadero o falso. Hoy, cada vez que un ordenador, un móvil o un robot toma una decisión, está usando la lógica de Boole. En este tema aprenderás a programar decisiones con sus tres palabras mágicas.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es una condición?</h3><p>Una <mark>condición</mark> es una <b>pregunta</b> que solo puede responderse con <b>sí o no</b>, es decir, con <b>verdadero o falso</b>. «¿El gato toca el borde?», «¿has pulsado la tecla espacio?», «¿la puntuación es mayor que 10?».</p><p>Las condiciones permiten que los programas <b>tomen decisiones</b>: hacer una cosa u otra según lo que ocurra. Sin ellas, un programa haría siempre lo mismo, pasara lo que pasara. Con ellas, puede reaccionar al jugador, al entorno o a los datos.</p><p>En Scratch, las condiciones tienen forma <b>hexagonal</b> (con puntas a los lados). Están sobre todo en las categorías <b>Sensores</b> (celeste) y <b>Operadores</b> (verde), y encajan en los huecos hexagonales de bloques como «si… entonces» o «repetir hasta que». Una pregunta como «¿qué tiempo hace?» no es una condición, porque su respuesta no es sí o no.</p>`, svg: verdadero },
    { html: `<h3>1.2 Las decisiones en la vida diaria y en las máquinas</h3><p>Tomamos decisiones con condiciones constantemente: <i>si</i> llueve, cojo el paraguas; <i>si</i> el semáforo está en rojo, espero; <i>si</i> tengo hambre, como algo. Las máquinas automáticas hacen lo mismo, pero con sensores en lugar de sentidos.</p><p>Una <b>puerta automática</b> tiene un sensor de presencia. Su programa repite sin parar: leer el sensor; <b>si</b> hay alguien cerca, abrir; <b>si no</b>, cerrar. Un <b>termostato</b>: si la temperatura es menor que 20 °C, encender la calefacción. Una <b>farola</b>: si hay poca luz, encenderse.</p><p>Fíjate en un detalle importante: la puerta no comprueba la condición una sola vez, sino <b>continuamente</b>, muchas veces por segundo. Por eso las condiciones suelen ir dentro de un bucle «por siempre»: así el programa está siempre atento a lo que pasa. Una condición fuera de un bucle solo se comprueba una vez, en el momento en que se ejecuta.</p>`, svg: puerta },
    { html: `<h3>1.3 Si… entonces</h3><p>El bloque <b>«si &lt;condición&gt; entonces»</b> (Control, naranja) ejecuta los bloques de dentro <b>solo si la condición es verdadera</b>. Si es falsa, se los salta y el programa continúa por debajo.</p><p>Ejemplo: dentro de un «por siempre», «mover 5 pasos» y «si ¿tocando borde? entonces: decir ¡Ay! y girar 180 grados». El objeto avanza y, cada vez que llega al borde, se queja y se da la vuelta.</p><p>Fíjate en la estructura: el «por siempre» hace que el objeto se mueva sin parar y que se compruebe la condición en cada vuelta. Si quitáramos el bucle, la condición solo se comprobaría una vez, al principio, y probablemente el objeto no estaría tocando el borde en ese instante.</p><p>Dentro de un «si» puede haber cualquier bloque, incluso otros «si» o bucles. Es como una puerta que solo se abre cuando se cumple la condición.</p>`, svg: siEntonces, video: { id: "hhj41bbp9BQ", titulo: "Condicionales en Scratch 3.0: bloque si entonces si no", canal: "Cosas de Informatica", vistas: 5743 } },
    { html: `<h3>1.4 Si… entonces… si no</h3><p>El bloque <b>«si &lt;condición&gt; entonces … si no …»</b> tiene <b>dos huecos</b>: los bloques del primero se ejecutan si la condición es verdadera, y los del segundo («si no»), si es falsa. Siempre se ejecuta <b>uno de los dos</b>, nunca ambos ni ninguno.</p><p>Ejemplo: «si ¿tecla espacio presionada? entonces cambiar disfraz a Saltando; si no, cambiar disfraz a Quieto». El personaje muestra un disfraz u otro según se pulse o no la tecla.</p><p>Otro ejemplo: «si nota ≥ 5 entonces decir aprobado; si no, decir suspenso». Aquí se nota la ventaja del «si no»: no hace falta escribir una segunda condición «si nota &lt; 5», porque el «si no» ya cubre todos los demás casos.</p><p>Se pueden encadenar decisiones poniendo un «si… si no» dentro del hueco «si no» de otro: si nota ≥ 9, sobresaliente; si no, si nota ≥ 5, aprobado; si no, suspenso.</p>`, svg: siSino },
    { html: `<h3>1.5 Dibujar las decisiones</h3><p>En un <b>diagrama de flujo</b>, una decisión se dibuja con un <b>rombo</b>. Del rombo salen dos caminos, el del «sí» y el del «no», que después se <b>vuelven a juntar</b> para seguir con el resto del programa.</p><p>Comparar el diagrama con los bloques ayuda a entender qué pasa:</p><ul><li>«si… entonces» es un rombo en el que el camino del «no» no hace nada: va directo al punto de unión.</li><li>«si… entonces… si no» es un rombo con acciones en los dos caminos.</li></ul><p>Antes de programar un juego, conviene escribir o dibujar sus decisiones: ¿qué pasa si el jugador toca un enemigo?, ¿y si toca una moneda?, ¿y si se le acaban las vidas? Pensar todos los casos posibles, incluidos los raros, evita muchos errores. Un buen programador siempre se pregunta: «¿y si no?».</p>`, svg: flujoSiNo },
    { html: `<h3>1.6 Los bloques sensores</h3><p>Los <mark>sensores</mark> son los «sentidos» de los objetos de Scratch. Están en la categoría <b>Sensores</b> (celeste) y responden preguntas sobre lo que ocurre:</p><ul><li><b>«¿tocando …?»</b>: si el objeto toca el borde, el puntero del ratón u otro objeto.</li><li><b>«¿tocando el color …?»</b>: si toca un color concreto. Muy útil para paredes, lava o metas.</li><li><b>«¿color … tocando …?»</b>: si un color del objeto toca otro color.</li><li><b>«¿tecla … presionada?»</b>: si se está pulsando una tecla.</li><li><b>«¿ratón presionado?»</b>, «posición x del ratón», «posición y del ratón».</li><li><b>«distancia a …»</b>: cuántos pasos hay hasta otro objeto o el ratón.</li><li><b>«cronómetro»</b>: segundos desde que empezó.</li></ul><p>Los sensores hexagonales devuelven verdadero o falso y van dentro de condiciones. Los redondeados devuelven un número.</p>`, svg: sensores, video: { id: "lTvFvWNnO5s", titulo: "Sensores en Scratch 3.0: juego del laberinto paso a paso", canal: "Cosas de Informatica", vistas: 4091 } },
    { html: `<h3>1.7 Un laberinto con sensores de color</h3><p>El sensor <b>«¿tocando el color …?»</b> permite crear juegos de laberinto muy fácilmente. Se dibuja el laberinto en el <b>fondo</b>, con las paredes de un color (por ejemplo, azul) y la meta de otro (verde).</p><p>El programa del jugador, dentro de un «por siempre», tiene varias condiciones:</p><ul><li>Si se pulsa una flecha, moverse en esa dirección.</li><li>Si toca el color <b>azul</b> (pared), volver a la posición de salida.</li><li>Si toca el color <b>verde</b> (meta), decir «¡He ganado!» y detener todo.</li></ul><p>Para elegir el color exacto, se hace clic en el cuadradito de color del bloque y se usa el <b>cuentagotas</b> para tocar la pared en el escenario. Si el color no es exactamente el mismo, el sensor no lo detecta. Por eso conviene dibujar las paredes con un color uniforme que no aparezca en el personaje.</p>`, svg: laberinto },
    { html: `<h3>1.8 Mover con el teclado</h3><p>Hay dos formas de mover un personaje con las teclas:</p><ul><li>Con el evento <b>«al presionar tecla →»</b>: es sencillo, pero el movimiento va a saltos y con un pequeño retraso, porque depende de la repetición del teclado.</li><li>Con <b>condiciones dentro de un «por siempre»</b>: «si ¿tecla → presionada? entonces sumar 5 a x». El movimiento es suave y se pueden pulsar dos teclas a la vez (por ejemplo, derecha y arriba en diagonal).</li></ul><p>La segunda forma es la que usan casi todos los juegos. Un programa típico tiene, dentro del mismo bucle, un «si» por cada tecla y otros «si» para detectar choques. Fíjate en que se usan varios «si… entonces» independientes, no un «si… si no»: así se pueden cumplir varias condiciones en la misma vuelta.</p>`, svg: flechas },
    { html: `<h3>2.1 Preguntar y responder</h3><p>El bloque <b>«preguntar … y esperar»</b> (Sensores) muestra una pregunta y una caja de texto en el escenario. El programa se detiene hasta que el usuario escribe algo y pulsa Intro. Lo que ha escrito queda guardado en el bloque redondeado <b>«respuesta»</b>.</p><p>Con «preguntar» y una condición se pueden hacer programas que <b>conversan</b> o que <b>examinan</b>: «preguntar ¿Cuánto es 7 × 8? y esperar; si respuesta = 56 entonces decir ¡Correcto!; si no, decir Inténtalo otra vez».</p><p>Ideas para usarlo: un quiz de preguntas, un personaje que te saluda por tu nombre (decir «unir Hola y respuesta»), una calculadora o un juego de adivinar un número. Ten en cuenta que «respuesta» solo guarda la <b>última</b> respuesta: si haces otra pregunta, se sustituye. Si necesitas recordarla, guárdala en una variable.</p>`, svg: preguntar },
    { html: `<h3>2.2 Operadores: comparar</h3><p>Los bloques de <b>Operadores</b> (verde) permiten crear condiciones comparando valores:</p>${operadores}<p>Los operadores de comparación <b>&gt;</b>, <b>&lt;</b> e <b>=</b> devuelven verdadero o falso. Por ejemplo, «puntos &gt; 10» es verdadero cuando los puntos pasan de 10.</p><p>¡Cuidado con los límites! «puntos &gt; 10» es falso cuando los puntos valen exactamente 10. Si quieres incluir el 10, usa «puntos &gt; 9» o combina «puntos &gt; 10 o puntos = 10». Y al comparar con «=», ten en cuenta que Scratch no distingue mayúsculas de minúsculas: «Hola» = «hola» es verdadero.</p>` },
    { html: `<h3>2.3 Combinar condiciones: y, o, no</h3><p>Los operadores lógicos permiten combinar varias condiciones en una sola:</p><ul><li><b>«… y …»</b>: es verdadero solo si <b>las dos</b> condiciones son verdaderas. «x &gt; 0 y x &lt; 100» comprueba que x está entre 0 y 100.</li><li><b>«… o …»</b>: es verdadero si <b>al menos una</b> es verdadera. «¿tecla a presionada? o ¿tecla ← presionada?» permite usar dos teclas para lo mismo.</li><li><b>«no …»</b>: <b>invierte</b> el resultado. «no ¿tocando borde?» es verdadero cuando no toca el borde.</li></ul><p>Estas tres palabras son la <b>lógica de Boole</b>, la base de todos los circuitos de los ordenadores. Para comprobar una condición combinada, se puede hacer una <b>tabla de verdad</b> con todas las posibilidades: con «y», solo V y V da V; con «o», solo F o F da F.</p>`, svg: yo },
    { html: `<h3>2.4 Un ejemplo completo: atrapar manzanas</h3><p>Vamos a juntarlo todo en un juego: una <b>cesta</b> abajo atrapa <b>manzanas</b> que caen.</p><ol><li><b>Cesta</b>: por siempre, si se pulsa → sumar 8 a x; si se pulsa ← sumar −8 a x.</li><li><b>Manzana</b>: dar a puntos el valor 0; ir a una x al azar arriba del todo (y = 170); por siempre: sumar −5 a y.</li><li>Si la manzana toca la cesta: sumar 1 a puntos, tocar un sonido y volver arriba a una x al azar.</li><li>Si la posición y de la manzana es menor que −170 (ha llegado al suelo): volver arriba. Para más reto, restar una vida.</li><li>Si vidas = 0: decir «Fin del juego» y detener todo.</li></ol><p>Has usado bucles, condiciones, sensores de contacto y de teclado, operadores, números al azar y variables. Puedes mejorarlo haciendo que las manzanas caigan más deprisa a medida que sube la puntuación.</p>`, svg: codigoManzana, video: { id: "vfs-7tkPH8c", titulo: "Juego en Scratch 1: captura manzanas", canal: "Profe Blas", vistas: 121266 } },
  ],
  ejemplos: [
    { enunciado: "Haz que el gato diga «¡Miau!» cuando le toque el ratón.", pasos: ["por siempre:", "si ¿tocando puntero del ratón? entonces decir ¡Miau! 1 s."], resultado: "Condición con sensor dentro de un bucle." },
    { enunciado: "Pregunta la edad y di si puede ver una película para mayores de 12.", pasos: ["preguntar ¿Cuántos años tienes? y esperar.", "si respuesta > 11 entonces decir Puedes verla; si no, decir Aún no."], resultado: "«> 11» incluye a quien tiene 12." },
    { enunciado: "¿Es verdadera «x > 0 y x < 10» si x = 10?", pasos: ["x > 0: verdadero.", "x < 10: falso (10 no es menor que 10).", "V y F = F."], resultado: "Falsa." },
    { enunciado: "¿Es verdadera «tecla a o tecla ←» si solo se pulsa ←?", pasos: ["tecla a: falso; tecla ←: verdadero.", "F o V = V."], resultado: "Verdadera." },
    { enunciado: "Clasifica la nota: sobresaliente (≥ 9), aprobado (≥ 5) o suspenso.", pasos: ["si nota > 8,99 → sobresaliente.", "si no: si nota > 4,99 → aprobado; si no → suspenso."], resultado: "Dos «si… si no» encadenados." },
    { enunciado: "En un laberinto, el jugador atraviesa las paredes. ¿Qué puede fallar?", pasos: ["El color del sensor no es exactamente el de la pared.", "O la condición está fuera del «por siempre»."], resultado: "Usar el cuentagotas y meter la condición en el bucle." },
  ],
  errores: [
    "Poner la condición fuera del bucle «por siempre», de modo que solo se comprueba una vez.",
    "Elegir un color parecido, pero no idéntico, en «¿tocando el color?».",
    "Confundir «>» con «≥» y olvidar el caso del límite.",
    "Usar «y» cuando hace falta «o» (o al revés).",
    "Usar un «si… si no» cuando se necesitan varios «si» independientes (dos teclas a la vez).",
    "Olvidar que «respuesta» solo guarda la última respuesta.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué es una condición?", sol: "Una pregunta que se responde con verdadero o falso." },
    { nivel: "básico", q: "¿Qué forma tienen las condiciones en Scratch?", sol: "Hexagonal." },
    { nivel: "básico", q: "¿Qué diferencia hay entre «si… entonces» y «si… entonces… si no»?", sol: "El primero solo actúa si es verdadera; el segundo tiene también acciones para cuando es falsa." },
    { nivel: "básico", q: "Di si son condiciones: «¿tocando borde?», «¿qué hora es?», «puntos > 5».", sol: "Sí; no (no es sí o no); sí." },
    { nivel: "básico", q: "Nombra cuatro bloques sensores.", sol: "¿tocando…?, ¿tocando el color…?, ¿tecla… presionada?, distancia a…" },
    { nivel: "básico", q: "¿Por qué las condiciones suelen ir dentro de «por siempre»?", sol: "Para comprobarlas continuamente y no solo una vez." },
    { nivel: "básico", q: "¿Dónde se guarda lo que escribe el usuario tras «preguntar»?", sol: "En el bloque «respuesta»." },
    { nivel: "básico", q: "¿Es verdadero o falso? 8 > 3; 4 = 5; 2 < 9.", sol: "V; F; V." },
    { nivel: "básico", q: "¿Cuándo es verdadera una condición con «y»?", sol: "Cuando las dos partes son verdaderas." },
    { nivel: "básico", q: "¿Cuándo es verdadera una condición con «o»?", sol: "Cuando al menos una parte es verdadera." },
    { nivel: "básico", q: "¿Qué hace «no»?", sol: "Invierte el resultado: verdadero pasa a falso y al revés." },
    { nivel: "básico", q: "Pon dos ejemplos de sensores del mundo real.", sol: "El de presencia de una puerta automática y el de luz de una farola." },
    { nivel: "medio", q: "Programa que el gato maúlle si se pulsa la tecla m.", sol: "por siempre: si ¿tecla m presionada? entonces tocar sonido Miau hasta que termine." },
    { nivel: "medio", q: "Programa un objeto que cambie a un disfraz «asustado» cuando esté a menos de 100 pasos del ratón.", sol: "por siempre: si distancia a puntero < 100 entonces disfraz asustado; si no, disfraz normal." },
    { nivel: "medio", q: "Haz una pregunta de capitales y responde si es correcta.", sol: "preguntar ¿Capital de Francia?; si respuesta = París entonces ¡Correcto!; si no, Era París." },
    { nivel: "medio", q: "Escribe una condición que sea verdadera si x está entre −100 y 100.", sol: "x > −100 y x < 100." },
    { nivel: "medio", q: "Escribe una condición para moverse a la derecha con la tecla d o con la flecha derecha.", sol: "¿tecla d presionada? o ¿tecla → presionada?" },
    { nivel: "medio", q: "¿Por qué para mover con flechas se usan varios «si» y no un «si… si no»?", sol: "Para que se puedan cumplir varias condiciones a la vez (por ejemplo, dos teclas)." },
    { nivel: "medio", q: "Programa que el juego termine cuando las vidas lleguen a 0.", sol: "por siempre: si vidas = 0 entonces decir Fin del juego; detener todos." },
    { nivel: "medio", q: "Completa la tabla de verdad de «A y B» para las cuatro combinaciones.", sol: "V y V = V; V y F = F; F y V = F; F y F = F." },
    { nivel: "medio", q: "Haz la traza: puntos = 10. ¿Se cumple «puntos > 10»? ¿Y «no puntos < 10»?", sol: "No (es igual); sí (10 no es menor que 10, y no F = V)." },
    { nivel: "medio", q: "En un laberinto, ¿qué haces cuando el jugador toca la pared? ¿Y la meta?", sol: "Pared: volver al inicio. Meta: decir ¡He ganado! y detener." },
    { nivel: "medio", q: "Explica cómo funciona la puerta automática con un «si… si no».", sol: "Por siempre: si hay alguien cerca, abrir; si no, cerrar." },
    { nivel: "avanzado", q: "Programa un quiz de 3 preguntas que cuente los aciertos en una variable y al final diga la nota.", sol: "aciertos = 0; para cada pregunta: preguntar; si respuesta correcta, sumar 1; al final decir unir «Aciertos: » y aciertos." },
    { nivel: "avanzado", q: "Programa un termostato en Scratch: pregunta la temperatura y di si se enciende la calefacción (< 19), el aire (> 26) o nada.", sol: "si respuesta < 19 → calefacción; si no: si respuesta > 26 → aire; si no → nada." },
    { nivel: "avanzado", q: "Diseña el juego de atrapar manzanas con vidas: ¿qué condiciones necesitas y dónde van?", sol: "En la manzana: si toca cesta (+1 punto, volver arriba); si y < −170 (−1 vida, volver arriba); si vidas = 0 (fin). En la cesta: si flecha → / ←." },
    { nivel: "avanzado", q: "¿Qué diferencia hay entre «no (x > 5)» y «x < 5»? Pon un valor en el que den resultados distintos.", sol: "Con x = 5: no (5 > 5) = no F = V, pero 5 < 5 = F." },
    { nivel: "avanzado", q: "Un compañero escribe «si respuesta = 56» y el programa dice «incorrecto» aunque escribe 56. ¿Qué puede pasar?", sol: "Quizá ha escrito un espacio, o la pregunta está después de la condición, o usa otra respuesta anterior." },
    { nivel: "avanzado", q: "Crea un personaje que solo pueda saltar si está tocando el suelo (color marrón) y se pulsa espacio.", sol: "si ¿tecla espacio presionada? y ¿tocando color marrón? entonces saltar." },
    { nivel: "avanzado", q: "Investiga y explica qué relación hay entre la lógica de Boole y los circuitos de un ordenador.", sol: "Los circuitos usan interruptores encendido/apagado como verdadero/falso y puertas lógicas Y, O, NO." },
  ],
  quiz: [
    { q: "Una condición puede ser…", o: ["un número cualquiera", "verdadera o falsa", "un color", "un disfraz"], a: 1, e: "Sí o no." },
    { q: "Las condiciones en Scratch tienen forma…", o: ["redonda", "hexagonal", "de C", "de sombrero"], a: 1, e: "Puntas a los lados." },
    { q: "«si … entonces» ejecuta su interior cuando la condición es…", o: ["falsa", "verdadera", "cero", "siempre"], a: 1, e: "Verdadera." },
    { q: "En «si… si no» se ejecuta…", o: ["los dos huecos", "uno de los dos", "ninguno", "el último"], a: 1, e: "Siempre uno." },
    { q: "Para comprobar continuamente una condición se pone dentro de…", o: ["un evento", "por siempre", "un disfraz", "un fondo"], a: 1, e: "Bucle." },
    { q: "Los bloques sensores son de color…", o: ["verde", "celeste", "morado", "rosa"], a: 1, e: "Sensores." },
    { q: "Para detectar una pared de color se usa…", o: ["¿tecla presionada?", "¿tocando el color …?", "preguntar", "cronómetro"], a: 1, e: "Sensor de color." },
    { q: "El bloque que mide pasos hasta otro objeto es…", o: ["cronómetro", "distancia a", "respuesta", "posición x"], a: 1, e: "Distancia." },
    { q: "Lo que escribe el usuario se guarda en…", o: ["pregunta", "respuesta", "puntos", "disfraz"], a: 1, e: "Respuesta." },
    { q: "Los operadores son de color…", o: ["azul", "verde", "naranja", "amarillo"], a: 1, e: "Operadores." },
    { q: "«5 > 5» es…", o: ["verdadero", "falso", "error", "5"], a: 1, e: "No es mayor." },
    { q: "V y F =", o: ["V", "F", "depende", "error"], a: 1, e: "Hacen falta las dos." },
    { q: "V o F =", o: ["F", "V", "depende", "error"], a: 1, e: "Basta con una." },
    { q: "no V =", o: ["V", "F", "0", "1"], a: 1, e: "Invierte." },
    { q: "«x > 0 y x < 10» con x = 5 es…", o: ["falsa", "verdadera", "error", "5"], a: 1, e: "Las dos se cumplen." },
    { q: "Para mover con dos teclas a la vez se usan…", o: ["un si… si no", "varios si independientes", "un solo evento", "preguntar"], a: 1, e: "Independientes." },
    { q: "Una puerta automática usa un sensor de…", o: ["sabor", "presencia", "sonido de música", "color"], a: 1, e: "Detecta personas." },
    { q: "George Boole creó la lógica del…", o: ["color", "verdadero y falso", "sonido", "movimiento"], a: 1, e: "Álgebra de Boole." },
    { q: "Para elegir el color exacto de una pared se usa el…", o: ["lápiz", "cuentagotas", "borrador", "pincel"], a: 1, e: "Selector de color." },
    { q: "Scratch al comparar «Hola» = «hola» da…", o: ["falso", "verdadero", "error", "0"], a: 1, e: "No distingue mayúsculas." },
  ],
  examen: [
    { q: "puntos = 10. «puntos > 10» es…", o: ["verdadero", "falso", "error", "10"], a: 1, e: "Igual, no mayor." },
    { q: "Para «x entre 0 y 50» se usa…", o: ["x > 0 o x < 50", "x > 0 y x < 50", "no x > 0", "x = 50"], a: 1, e: "Las dos a la vez." },
    { q: "F o F =", o: ["V", "F", "depende", "error"], a: 1, e: "Ninguna se cumple." },
    { q: "Si la condición está fuera del bucle, se comprueba…", o: ["siempre", "una vez", "nunca", "dos veces"], a: 1, e: "Solo al ejecutarse." },
    { q: "Para «suspenso si nota < 5» basta con…", o: ["dos si", "el si no de «si nota ≥ 5»", "un bucle", "un sensor"], a: 1, e: "Si no cubre el resto." },
    { q: "La manzana ha llegado al suelo cuando…", o: ["posición y > 170", "posición y < −170", "posición x < 0", "toca la cesta"], a: 1, e: "Abajo del todo." },
    { q: "Edad 12 para «mayores de 12 incluidos»:", o: ["edad > 12", "edad > 11", "edad < 12", "edad = 11"], a: 1, e: "Incluye el 12." },
    { q: "no (¿tocando borde?) es verdadero cuando…", o: ["toca el borde", "no toca el borde", "siempre", "nunca"], a: 1, e: "Invierte." },
  ],
  feynman: ["Qué es una condición y por qué solo puede ser verdadera o falsa", "Qué diferencia hay entre si… entonces y si… entonces… si no", "Cómo funcionan los operadores y, o, no con ejemplos", "Por qué las condiciones suelen ir dentro de un bucle por siempre"],
  figura: {
    titulo: "Condiciones y sensores en un vistazo",
    svg: resumen("Resumen: condiciones, si entonces, si no, sensores, preguntar y operadores", [
      ["Condición", "pregunta de sí o no · verdadero o falso", "var(--leaf)"],
      ["si… entonces", "solo si es verdadera · si no: si es falsa", CAT.control],
      ["Sensores", "tocando · color · tecla · distancia", CAT.sensores],
      ["Preguntar", "preguntar y esperar · respuesta", "var(--inf)"],
      ["Operadores", "> < = · y · o · no", CAT.operadores],
    ]),
  },
  video: { id: "Friweqkc35Q", titulo: "Tutorial Scratch: «Si entonces si no»", canal: "Harold Rodríguez", vistas: 12159, megusta: 0, busqueda: "scratch condicionales sensores si entonces" },
  mapa: mapa("DECIDIR", CAT.control, [
    ["Condición", "verdadero o falso", "var(--leaf)"],
    ["Si… si no", "uno de dos caminos", CAT.control],
    ["Sensores", "tocar · teclas · preguntar", CAT.sensores],
    ["Operadores", "comparar · y · o · no", CAT.operadores],
  ], 250),
  glosario: [
    ["Condición", "Pregunta que se responde con verdadero o falso."],
    ["Verdadero / falso", "Los dos únicos valores que puede tener una condición."],
    ["Si… entonces", "Bloque que ejecuta su interior solo si la condición es verdadera."],
    ["Si no", "Parte que se ejecuta cuando la condición es falsa."],
    ["Sensor", "Bloque o dispositivo que detecta lo que ocurre."],
    ["Preguntar", "Bloque que pide un dato al usuario y espera."],
    ["Respuesta", "Bloque que guarda lo último que escribió el usuario."],
    ["Operador de comparación", "Bloque que compara dos valores: >, <, =."],
    ["Operador lógico", "Bloque que combina condiciones: y, o, no."],
    ["Tabla de verdad", "Tabla con el resultado de una condición en todos los casos."],
    ["Lógica de Boole", "Sistema de razonamiento con verdadero, falso, y, o, no."],
    ["Cuentagotas", "Herramienta para elegir un color tocándolo en el escenario."],
  ],
  situacion: {
    titulo: "El laberinto de la clase",
    reto: "Vais a diseñar un juego de laberinto en Scratch con paredes, trampas, premios y una meta, usando sensores y condiciones.",
    pasos: [
      "Dibujad el laberinto como fondo, con colores distintos para paredes, trampas y meta.",
      "Programad el movimiento del jugador con flechas y condiciones en un «por siempre».",
      "Añadid las condiciones de choque: pared, trampa (perder vida) y meta (ganar).",
      "Incluid una pregunta al empezar (nombre del jugador) y usadla en el mensaje final.",
      "Intercambiad el juego con otro grupo, anotad fallos y depurad.",
    ],
    producto: "Un juego de laberinto en Scratch con al menos tres tipos de condiciones.",
    evaluacion: ["Usa correctamente si… entonces y si… si no.", "Los sensores detectan bien colores y teclas.", "Combina condiciones con operadores cuando hace falta.", "El juego está probado y depurado."],
  },
  tarjetas: [
    ["Condición", "Verdadero o falso"], ["si… entonces", "Solo si se cumple"], ["si no", "Si no se cumple"],
    ["Forma hexagonal", "Condición"], ["¿tocando…?", "Choques"], ["¿tocando el color?", "Paredes y metas"],
    ["¿tecla presionada?", "Teclado"], ["preguntar", "Pedir un dato"], ["respuesta", "Lo que escribió"],
    ["y", "Las dos"], ["o", "Al menos una"], ["no", "Invierte"],
  ],
  familias: ["Buscad juntos aparatos de casa que tomen decisiones con sensores (frigorífico, luces, alarma).", "Jugad a «Simón dice» con condiciones: «si llevas algo azul, levanta la mano».", "Pedid que os enseñe un quiz hecho en Scratch.", "Comentad situaciones del día con «si… entonces… si no»."],
  profesores: {
    saberes: "Estructuras de selección: condiciones booleanas, condicionales simples y dobles, sensores de contacto, color, teclado, ratón y distancia, entrada de datos, operadores de comparación y lógicos (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Tablas de verdad con tarjetas V y F.", "Diagramas de flujo de aparatos automáticos.", "Laberinto con sensores de color por grupos.", "Quiz de repaso de otras materias hecho en Scratch."],
  },
  fuentes: [RD, { t: "Scratch (MIT): página oficial", url: "https://scratch.mit.edu/" }, wiki("Sentencia condicional", "Sentencia_condicional"), wiki("George Boole", "George_Boole"), wiki("Álgebra de Boole", "Álgebra_de_Boole")],
  revisado: REV,
};
