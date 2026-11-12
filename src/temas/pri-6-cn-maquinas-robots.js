// Ciencias de la Naturaleza 6º de Primaria: máquinas, robots y programación. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, linea, ciclo, vid, vgen, RD, PROF } = require("./_pri6b");

// Bloque de programación por bloques (estilo genérico) con muesca.
const bloque = (x, y, w, c, s) => `<path d="M${x} ${y} h10 l4 4 h10 l4 -4 h${w - 28} v22 h${-(w - 28)} l-4 4 h-10 l-4 -4 h-10z" fill="${c}"/>${et(x + 8, y + 15, s, w - 14, { size: 10.5, color: "#fff", anchor: "start" })}`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Máquinas, robots y programación",
  minutos: 50,
  objetivos: ["Distinguir máquinas simples y compuestas y explicar la palanca", "Conocer operadores mecánicos como ruedas, poleas y engranajes", "Saber qué es un robot y cuáles son sus partes", "Escribir algoritmos y programas sencillos con secuencias, bucles y condiciones"],
  claves: ["máquina", "palanca", "fulcro", "plano inclinado", "polea", "engranaje", "robot", "sensor", "actuador", "algoritmo", "programa", "bucle", "condicional", "depurar"],
  pregunta: {
    texto: "Arquímedes dijo: «Dadme un punto de apoyo y moveré el mundo». ¿Era una fanfarronada o tenía algo de razón?",
    respuesta: "Tenía razón en la idea. Con una <mark>palanca</mark> lo bastante larga y un punto de apoyo, una fuerza pequeña puede levantar un peso enorme: cuanto más lejos del apoyo empujas, menos fuerza necesitas. Mover el mundo sería imposible en la práctica, pero las máquinas como la palanca nos permiten hacer trabajos que con las manos solas serían imposibles.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una máquina?</h3><p>Una <mark>máquina</mark> es un objeto inventado por el ser humano para hacer un trabajo con <b>menos esfuerzo</b>, más deprisa o de forma más segura. Las máquinas transforman una fuerza o una energía en otra que nos resulta más útil.</p><p>Se pueden clasificar en dos grupos:</p><p>• Las <b>máquinas simples</b> tienen muy pocas piezas, a veces solo una. Por ejemplo: la palanca, el plano inclinado, la rueda, la polea, la cuña o el tornillo.</p><p>• Las <b>máquinas compuestas</b> están formadas por varias máquinas simples y otras piezas que trabajan juntas. Por ejemplo: la bicicleta, unas tijeras, un reloj de agujas, una grúa o un coche.</p><p>Muchas máquinas compuestas necesitan un <b>motor</b> que las haga funcionar: un motor eléctrico (lavadora, batidora), un motor de combustión (coche) o la fuerza de nuestros músculos (bicicleta). Las máquinas han cambiado la vida de las personas a lo largo de la historia, desde la rueda hasta los ordenadores.</p>`,
      svg: svg("Máquinas simples (palanca, rampa, polea) y compuestas (bicicleta, grúa)", `${tit("Simples y compuestas")}${cj(10, 36, 115, 26, "SIMPLES", COL.azul)}${cj(135, 36, 115, 26, "COMPUESTAS", COL.naranja)}${["palanca", "plano inclinado", "rueda", "polea", "tornillo"].map((s, i) => et(67, 86 + i * 18, s, 110, { size: 11, weight: 400 })).join("")}${["bicicleta", "tijeras", "grúa", "reloj", "coche"].map((s, i) => et(192, 86 + i * 18, s, 110, { size: 11, weight: 400 })).join("")}`),
    },
    {
      html: `<h3>La palanca</h3><p>La <mark>palanca</mark> es una barra rígida que gira sobre un punto de apoyo llamado <b>fulcro</b>. En ella actúan dos fuerzas: la <b>potencia</b> (la fuerza que hacemos) y la <b>resistencia</b> (el peso que queremos mover).</p><p>La regla de oro de la palanca es: <b>cuanto más lejos del fulcro aplicamos la fuerza, menos fuerza necesitamos</b>. Por eso es más fácil abrir una puerta empujando lejos de las bisagras.</p><p>Hay tres tipos, según dónde esté el fulcro:</p><p>• <b>Primer grado</b>: el fulcro está en el medio, entre potencia y resistencia. Ejemplos: el balancín, las tijeras, unos alicates.<br>• <b>Segundo grado</b>: la resistencia está en el medio. Ejemplos: la carretilla, el cascanueces, el abrebotellas.<br>• <b>Tercer grado</b>: la potencia está en el medio. Ejemplos: las pinzas de depilar, la caña de pescar y tu propio antebrazo.</p><p>Las palancas de primer y segundo grado sirven para ahorrar fuerza; las de tercer grado no ahorran fuerza, pero dan más precisión y velocidad.</p>`,
      svg: svg("Palanca de primer grado: fulcro en el centro, potencia a un lado y resistencia al otro", `${tit("La palanca")}<path d="M110 120 l20 34 h-40 z" fill="var(--muted)"/><path d="M20 112 L240 128" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/><rect x="30" y="84" width="36" height="28" fill="var(--red)" fill-opacity=".8"/>${fl(220, 70, 220, 118, "var(--pen)", 3)}${et(48, 76, "resistencia", 90, { size: 11, color: COL.rojo })}${et(220, 62, "potencia", 80, { size: 11, color: COL.azul })}${et(110, 172, "fulcro", 60, { size: 11, color: COL.gris })}${tx(190, 156, "brazo largo:", 90, { weight: 700 })}${tx(190, 170, "menos fuerza", 90)}`),
    },
    {
      html: `<h3>Plano inclinado, cuña y tornillo</h3><p>El <mark>plano inclinado</mark> es una superficie en cuesta, como una rampa. Sirve para subir cargas pesadas haciendo menos fuerza, aunque haya que recorrer más distancia. Cuanto más suave es la cuesta, menos fuerza hace falta. Por eso las carreteras de montaña suben haciendo curvas, y los edificios tienen rampas para sillas de ruedas o carros.</p><p>La <mark>cuña</mark> está formada por dos planos inclinados unidos. Sirve para <b>cortar o separar</b> cosas: el filo de un hacha, de un cuchillo o de un cincel, y también los dientes delanteros.</p><p>El <mark>tornillo</mark> es un plano inclinado enrollado alrededor de un cilindro. Esa espiral se llama <b>rosca</b>. Al girarlo, avanza y sujeta las piezas con mucha fuerza. También funcionan así los tapones de rosca de las botellas y los sacacorchos.</p>`,
      svg: svg("Plano inclinado con una caja, una cuña y un tornillo con su rosca", `${tit("Rampas que ayudan")}<path d="M14 140 L120 140 L120 80 Z" fill="var(--muted)" fill-opacity=".3" stroke="var(--ink)" stroke-width="2"/><rect x="58" y="96" width="24" height="20" fill="var(--sun)" transform="rotate(-29.5 70 106)"/>${et(64, 160, "plano inclinado", 110, { size: 11, color: COL.azul })}<path d="M150 70 L176 70 L163 120 Z" fill="#94a3b8" stroke="var(--ink)"/>${et(163, 160, "cuña", 50, { size: 11, color: COL.gris })}<rect x="210" y="56" width="16" height="12" fill="#94a3b8"/>${[...Array(7)].map((_, i) => `<path d="M206 ${72 + i * 8} L230 ${76 + i * 8}" stroke="var(--ink)" stroke-width="2"/>`).join("")}<path d="M212 68 V128 l6 10 l6 -10 V68" fill="none" stroke="var(--ink)" stroke-width="1.5"/>${et(218, 160, "tornillo", 60, { size: 11, color: COL.marron })}`),
    },
    {
      html: `<h3>Ruedas, poleas y engranajes</h3><p>La <mark>rueda</mark> es uno de los inventos más importantes de la historia: apareció en Mesopotamia hace unos 5.500 años. Gira alrededor de un <b>eje</b> y reduce mucho el rozamiento, por eso es más fácil empujar un carro que arrastrar una caja.</p><p>La <mark>polea</mark> es una rueda con un canal por el que pasa una cuerda. Una <b>polea fija</b> no ahorra fuerza, pero cambia su dirección: es más cómodo tirar hacia abajo para subir un cubo de agua del pozo. Si combinamos varias poleas (un <b>polipasto</b>), sí ahorramos fuerza, como en las grúas.</p><p>Los <mark>engranajes</mark> son ruedas con dientes que encajan entre sí y transmiten el giro. Si una rueda grande mueve una pequeña, la pequeña gira <b>más rápido</b>. Cuando dos engranajes encajan, giran en <b>sentidos contrarios</b>. La bicicleta usa engranajes (platos y piñones) unidos por una <b>cadena</b>: cambiando de marcha subimos cuestas con menos esfuerzo. Los relojes de agujas también están llenos de engranajes.</p>`,
      svg: svg("Dos engranajes que encajan: el grande hace girar al pequeño más rápido y en sentido contrario", `${tit("Engranajes")}${[[82, 94, 40, 16, COL.azul], [162, 94, 24, 10, COL.naranja]].map(([x, y, r, n, c]) => `<g transform="translate(${x} ${y})">${[...Array(n)].map((_, i) => `<rect x="-5" y="${-r - 8}" width="10" height="12" fill="${c}" transform="rotate(${(360 / n) * i})"/>`).join("")}<circle r="${r}" fill="${c}"/><circle r="5" fill="var(--paper)"/></g>`).join("")}${tx(130, 150, "giran en sentidos contrarios", 220, { weight: 700 })}${et(70, 170, "grande: lento", 100, { size: 11, color: COL.azul })}${et(190, 170, "pequeño: rápido", 100, { size: 11, color: COL.naranja })}`),
      video: vid("fyf0DvvuCkY"),
    },
    {
      html: `<h3>¿Qué es un robot?</h3><p>Un <mark>robot</mark> es una máquina que puede realizar tareas de forma <b>automática</b>, siguiendo las instrucciones de un <b>programa</b>. A diferencia de otras máquinas, un robot puede <b>percibir</b> lo que pasa a su alrededor, <b>decidir</b> qué hacer según esa información y <b>actuar</b>. La palabra «robot» la inventó el escritor checo Karel Čapek en 1920, a partir de una palabra que significa «trabajo».</p><p>Los robots se usan para tareas repetitivas, peligrosas o que necesitan mucha precisión:</p><p>• En las <b>fábricas</b>: brazos robóticos que montan y pintan coches.<br>• En <b>casa</b>: robots aspiradores y cortacésped.<br>• En la <b>medicina</b>: robots que ayudan a los cirujanos en operaciones muy delicadas.<br>• En el <b>espacio</b>: los róveres que exploran Marte.<br>• En <b>rescates</b>: robots que entran en lugares peligrosos tras un terremoto.</p><p>No todos los robots tienen forma humana. Los que sí la tienen se llaman <b>humanoides</b>.</p>`,
      svg: svg("Ejemplos de robots: brazo de fábrica, robot aspirador, róver de Marte y humanoide", `${tit("Robots en todas partes")}${fichas([["Fábrica", "brazos que montan coches", COL.gris], ["Casa", "robot aspirador", COL.verde], ["Medicina", "ayuda en operaciones", COL.rojo], ["Espacio", "róveres en Marte", COL.naranja]])}`),
    },
    {
      html: `<h3>Las partes de un robot</h3><p>Un robot funciona de forma parecida a nuestra <b>función de relación</b>: percibe, decide y actúa. Sus partes principales son:</p>${tabla(["Parte", "Qué hace", "Se parece a…", "Ejemplos"], [["Sensores", "captan información del entorno", "los sentidos", "de luz, de distancia, de contacto, cámaras, micrófonos"], ["Controlador", "procesa la información y decide según el programa", "el cerebro", "una placa con un microprocesador"], ["Actuadores", "realizan las acciones", "los músculos", "motores, ruedas, pinzas, luces, altavoces"], ["Fuente de energía", "da la energía para funcionar", "los alimentos", "baterías, pilas, cable, placas solares"], ["Estructura", "sostiene y protege las piezas", "el esqueleto", "chasis de plástico o metal"]])}<p>Por ejemplo, un robot aspirador tiene un <b>sensor de distancia</b> que detecta una pared; su <b>controlador</b> decide girar; y sus <b>motores</b> hacen girar las ruedas. Si su <b>sensor de batería</b> detecta que queda poca carga, vuelve solo a su base.</p>`,
      svg: svg("Esquema de un robot: sensores, controlador y actuadores, como sentidos, cerebro y músculos", `${tit("Percibir, decidir, actuar")}${flujo([["sensores", COL.agua], ["controlador", COL.morado], ["actuadores", COL.verde]], 50, 38)}${tx(42, 106, "= sentidos", 70)}${tx(130, 106, "= cerebro", 70)}${tx(218, 106, "= músculos", 70)}${cj(70, 130, 120, 28, "batería = energía", COL.sol)}`),
      video: vid("8efFLVVlA3E"),
    },
    {
      html: `<h3>Los algoritmos</h3><p>Para que un robot o un ordenador haga algo, alguien tiene que decirle exactamente qué hacer, paso a paso. Una lista ordenada de instrucciones para resolver un problema o hacer una tarea se llama <mark>algoritmo</mark>.</p><p>Usamos algoritmos todo el tiempo sin darnos cuenta: una receta de cocina, las instrucciones para montar un mueble o los pasos para lavarse los dientes. Un buen algoritmo tiene que ser:</p><p>• <b>Preciso</b>: cada paso debe estar muy claro, sin dudas.<br>• <b>Ordenado</b>: los pasos tienen que ir en el orden correcto. No puedes ponerte los zapatos antes que los calcetines.<br>• <b>Finito</b>: tiene que terminar en algún momento.</p><p>Los ordenadores y los robots no piensan por sí mismos: hacen <b>exactamente</b> lo que dice el algoritmo, ni más ni menos. Si una instrucción está mal, el resultado estará mal. Por eso hay que pensar muy bien cada paso. Para representar algoritmos se usan a veces <b>diagramas de flujo</b>, con formas y flechas.</p>`,
      svg: svg("Diagrama de flujo para cruzar un paso de peatones con semáforo", `${tit("Algoritmo: cruzar la calle")}${cj(80, 32, 100, 22, "inicio", COL.verde, { rx: 11 })}${fl(130, 54, 130, 64)}<path d="M130 66 L190 88 L130 110 L70 88 Z" fill="${COL.sol}" fill-opacity=".18" stroke="${COL.sol}" stroke-width="2"/>${et(130, 92, "¿verde?", 80, { size: 11 })}${fl(190, 88, 214, 88)}${cj(208, 76, 46, 24, "espera", COL.rojo)}<path d="M230 76 V60 H140" stroke="var(--muted)" stroke-width="2" fill="none"/>${fl(140, 60, 134, 64, "var(--muted)", 2)}${tx(200, 106, "no", 30)}${fl(130, 110, 130, 124)}${tx(140, 120, "sí", 20)}${cj(80, 126, 100, 22, "mira y cruza", COL.azul)}${fl(130, 148, 130, 156)}${cj(80, 156, 100, 20, "fin", COL.verde, { rx: 10 })}`),
    },
    {
      html: `<h3>Programar: secuencias, bucles y condiciones</h3><p><mark>Programar</mark> es escribir un algoritmo en un lenguaje que entienda la máquina. Ese conjunto de instrucciones se llama <b>programa</b>. Para aprender se usan lenguajes de <b>programación por bloques</b>, como <b>Scratch</b>, en los que se encajan piezas de colores como un puzle.</p><p>Casi todos los programas combinan tres ideas:</p><p>• La <b>secuencia</b>: instrucciones una detrás de otra, en orden. «Avanza 10 pasos. Gira 90 grados. Avanza 10 pasos.»</p><p>• El <b>bucle</b> o repetición: repetir varias veces las mismas instrucciones sin tener que escribirlas otra vez. Para dibujar un cuadrado: «Repite 4 veces: avanza 50 pasos y gira 90 grados».</p><p>• La <b>condición</b> o condicional: hacer una cosa u otra según lo que pase. «Si toca el borde, entonces rebota.» «Si el sensor detecta un obstáculo, gira; si no, sigue recto.»</p><p>También se usan <b>variables</b>, que son como cajitas que guardan un dato que puede cambiar, por ejemplo los puntos de un juego o las vidas que quedan.</p>`,
      svg: svg("Programa por bloques que dibuja un cuadrado: al pulsar, repetir 4 veces avanzar 50 y girar 90 grados", `${tit("Dibuja un cuadrado")}${bloque(16, 36, 130, "#e6a100", "al pulsar la bandera")}<path d="M16 64 h130 v18 h-110 v46 h110 v14 h-130z" fill="#e8892c"/>${et(24, 78, "repetir 4 veces", 110, { size: 10.5, color: "#fff", anchor: "start" })}${bloque(36, 84, 116, "#4c7ee8", "avanzar 50 pasos")}${bloque(36, 108, 116, "#4c7ee8", "girar 90 grados")}<rect x="182" y="70" width="56" height="56" fill="none" stroke="var(--pen)" stroke-width="3"/>${fl(182, 70, 230, 70, "var(--pen)", 3)}${et(210, 150, "resultado", 70, { size: 11, color: COL.azul })}`),
      video: vid("KKJIQYpR8GY"),
    },
    {
      html: `<h3>Pensar como un programador</h3><p>El <mark>pensamiento computacional</mark> es una forma de resolver problemas que usan los programadores, pero que sirve para cualquier cosa. Tiene cuatro claves:</p><p>• <b>Descomponer</b>: dividir un problema grande en partes pequeñas. Para hacer un videojuego: el personaje, los enemigos, los puntos…<br>• <b>Reconocer patrones</b>: buscar lo que se repite para aprovecharlo. Si todos los enemigos se mueven igual, se programa una vez.<br>• <b>Abstraer</b>: quedarse con lo importante e ignorar los detalles que no hacen falta.<br>• <b>Diseñar el algoritmo</b>: escribir los pasos para resolverlo.</p><p>Al programar, casi siempre aparecen <b>errores</b>, que en informática se llaman <i>bugs</i> («bichos»). Buscarlos y corregirlos se llama <mark>depurar</mark>. No es un fracaso: es parte normal del trabajo. Se prueba el programa, se observa qué falla, se cambia una cosa y se vuelve a probar.</p><p>Programar también exige ser <b>responsables</b>: los programas y los robots deben usarse para ayudar a las personas, respetando su privacidad y su seguridad.</p>`,
      svg: svg("Ciclo de trabajo del programador: planear, programar, probar y depurar", `${tit("Probar y mejorar")}${ciclo([["pensar", COL.azul], ["programar", COL.morado], ["probar", COL.naranja], ["depurar", COL.rojo]], 130, 92, 48, 92)}${tx(130, 166, "un error (bug) no es un fracaso", 220, { weight: 700 })}`),
    },
  ],
  figura: {
    titulo: "Máquinas, robots y programación en ocho ideas",
    svg: rejilla([
      ["Máquina", "menos esfuerzo", COL.azul],
      ["Palanca", "fulcro, potencia, resistencia", COL.rojo],
      ["Plano inclinado", "rampa, cuña, tornillo", COL.gris],
      ["Engranajes", "transmiten el giro", COL.naranja],
      ["Robot", "percibe, decide, actúa", COL.morado],
      ["Sensores", "los «sentidos» del robot", COL.agua],
      ["Algoritmo", "pasos ordenados", COL.verde],
      ["Bucle y condición", "repetir y «si…»", COL.sol],
    ], 4, 86, "Resumen de máquinas, robots y programación"),
  },
  video: vgen("Qoyb3eOZmtk", "robótica para niños qué es un robot"),
  ejemplos: [
    { enunciado: "¿De qué grado es la palanca de una carretilla?",
      pasos: ["El fulcro es la rueda, delante.", "La resistencia (la carga) está en el medio.", "La potencia (nuestras manos) está en los mangos, al final."],
      resultado: "Segundo grado: la resistencia está en el medio." },
    { enunciado: "Escribe un programa para que un robot dibuje un triángulo con lados iguales.",
      pasos: ["Un triángulo tiene 3 lados: usamos un bucle de 3 repeticiones.", "En cada vuelta: avanzar 50 pasos y girar.", "Para cerrar la figura hay que girar 360 ÷ 3 = 120 grados."],
      resultado: "Repetir 3 veces: avanzar 50 pasos, girar 120 grados." },
    { enunciado: "Un robot aspirador choca siempre con las paredes. ¿Qué parte puede fallar y cómo lo depuramos?",
      pasos: ["Puede fallar el sensor de distancia (no detecta la pared) o el programa (no le dice que gire).", "Probamos el sensor delante de un objeto y miramos si cambia su valor.", "Revisamos la condición: «si detecta obstáculo, entonces gira»."],
      resultado: "Revisar el sensor y la condición del programa, y volver a probar." },
  ],
  errores: [
    "Pensar que la palanca siempre ahorra fuerza: la de tercer grado no ahorra fuerza.",
    "Creer que todos los robots tienen forma humana: la mayoría no.",
    "Desordenar los pasos de un algoritmo: el orden importa.",
    "Escribir muchas veces la misma instrucción en lugar de usar un bucle.",
    "Pensar que un robot «piensa» por sí mismo: hace lo que dice su programa.",
  ],
  ejercicios: [
    { q: "¿Qué diferencia hay entre una máquina simple y una compuesta? Pon un ejemplo de cada una.", sol: "La simple tiene muy pocas piezas (palanca); la compuesta combina varias máquinas simples (bicicleta)." },
    { q: "Nombra las partes de una palanca.", sol: "Barra, fulcro (punto de apoyo), potencia y resistencia." },
    { q: "Clasifica por grado: balancín, cascanueces, pinzas de depilar.", sol: "Balancín: primer grado. Cascanueces: segundo. Pinzas: tercero." },
    { q: "¿Por qué las carreteras de montaña suben haciendo curvas?", sol: "Porque son como un plano inclinado más suave: se necesita menos fuerza aunque se recorra más distancia." },
    { q: "Si un engranaje grande mueve a uno pequeño, ¿cuál gira más rápido? ¿En qué sentido gira cada uno?", sol: "El pequeño gira más rápido; giran en sentidos contrarios." },
    { q: "Escribe tres usos de los robots.", sol: "Montar coches en fábricas, limpiar la casa y explorar Marte (también operaciones o rescates)." },
    { q: "Relaciona: sensor, controlador, actuador con cerebro, músculos, sentidos.", sol: "Sensor: sentidos. Controlador: cerebro. Actuador: músculos." },
    { q: "Escribe un algoritmo de cinco pasos para preparar un vaso de leche con cacao.", sol: "Coger un vaso; echar la leche; añadir dos cucharadas de cacao; remover; beber." },
    { q: "Explica con un ejemplo qué es un bucle y qué es una condición.", sol: "Bucle: repetir 4 veces avanzar y girar. Condición: si toca el borde, rebota." },
    { q: "¿Qué significa depurar un programa?", sol: "Buscar los errores, corregirlos y volver a probarlo." },
  ],
  quiz: [
    { q: "Una máquina sirve para…", o: ["gastar más energía", "trabajar con menos esfuerzo", "nada"], a: 1, e: "Facilita el trabajo." },
    { q: "El punto de apoyo de la palanca es el…", o: ["piñón", "fulcro", "eje"], a: 1, e: "Fulcro." },
    { q: "Un balancín es una palanca de…", o: ["tercer grado", "primer grado", "segundo grado"], a: 1, e: "Fulcro en el medio." },
    { q: "El tornillo es un plano inclinado…", o: ["invisible", "enrollado", "plano"], a: 1, e: "Enrollado en un cilindro." },
    { q: "Dos engranajes que encajan giran…", o: ["en el mismo sentido", "en sentidos contrarios", "sin girar"], a: 1, e: "En sentidos contrarios." },
    { q: "Las partes del robot que captan información son…", o: ["los sensores", "los actuadores", "las ruedas"], a: 0, e: "Los sensores." },
    { q: "Los motores de un robot son…", o: ["sensores", "actuadores", "programas"], a: 1, e: "Actuadores." },
    { q: "Una lista ordenada de pasos para resolver algo es un…", o: ["engranaje", "algoritmo", "sensor"], a: 1, e: "Algoritmo." },
    { q: "Para repetir instrucciones usamos…", o: ["un bucle", "una cuña", "un fulcro"], a: 0, e: "Un bucle." },
    { q: "«Si toca el borde, rebota» es…", o: ["un bucle", "una condición", "una variable"], a: 1, e: "Una condición." },
  ],
  examen: [
    { q: "La carretilla es una palanca de…", o: ["tercer grado", "segundo grado", "primer grado"], a: 1, e: "La carga va en el medio." },
    { q: "Scratch es un lenguaje de programación…", o: ["por bloques", "de música", "de signos"], a: 0, e: "Por bloques." },
    { q: "Para dibujar un cuadrado se gira…", o: ["90 grados", "180 grados", "45 grados"], a: 0, e: "90 grados en cada esquina." },
    { q: "Un error en un programa se llama…", o: ["polea", "fulcro", "bug"], a: 2, e: "Bug." },
  ],
  feynman: ["Cómo funciona una palanca y por qué ahorra fuerza", "Qué partes tiene un robot y para qué sirve cada una", "Qué son la secuencia, el bucle y la condición en un programa"],
  mapa: mapa("MÁQUINAS Y ROBOTS", "var(--pri)", [
    ["Máquinas simples", "palanca · rampa · polea", COL.azul],
    ["Mecanismos", "ruedas · engranajes", COL.naranja],
    ["Robots", "sensores · controlador · actuadores", COL.morado],
    ["Programación", "algoritmo · bucle · condición", COL.verde],
  ], 260),
  tarjetas: [
    ["Máquina", "Invento para trabajar con menos esfuerzo."],
    ["Palanca", "Barra que gira sobre un fulcro."],
    ["Plano inclinado", "Rampa que ayuda a subir cargas."],
    ["Engranaje", "Rueda dentada que transmite el giro."],
    ["Robot", "Máquina que percibe, decide y actúa según un programa."],
    ["Sensor", "Pieza que capta información del entorno."],
    ["Algoritmo", "Pasos ordenados y precisos para resolver algo."],
    ["Bucle", "Instrucción que repite otras varias veces."],
  ],
  familias: ["Buscad palancas en casa (tijeras, pinzas, abrebotellas) y decid de qué grado son.", "Jugad al «robot humano»: uno da instrucciones exactas y el otro las sigue al pie de la letra.", "Probad juntos Scratch (scratch.mit.edu) y haced que un personaje dibuje un cuadrado.", "Mirad los engranajes de una bicicleta y probad las marchas en una cuesta."],
  profesores: PROF("Ciencias de la Naturaleza (Tecnología): máquinas simples y compuestas, palancas, operadores mecánicos; robótica (sensores, controlador, actuadores); pensamiento computacional, algoritmos y programación por bloques; uso responsable de la tecnología", ["Construcción de palancas con regla, lápiz y monedas para comprobar la ley de la palanca.", "Programación desenchufada con cuadrícula en el suelo y tarjetas de instrucciones.", "Reto en Scratch o con robots educativos: polígonos regulares con bucles."]),
  fuentes: [RD, { t: "Scratch, MIT Media Lab", url: "https://scratch.mit.edu/" }, wiki("Máquina simple", "Máquina_simple"), wiki("Robot", "Robot")],
  revisado: REV,
};
