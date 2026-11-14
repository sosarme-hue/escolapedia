// Programación y robótica 2º ESO · Crear un videojuego. Tema nivel libro (lote 8).
// Contenido y dibujos propios: bloques de Scratch y esquemas de _eso2L8 y dibujos de la versión anterior del tema.
const H = require("./_eso2L8");
const S = "prog-videojuego";
const K = H.CAT;
const vClones = { id: "SbDfIEQiCu8", titulo: "Uso de clones en Scratch 3.0", canal: "Programamos", vistas: 57894, busqueda: "videojuego scratch clones" };
const vVidas = { id: "rFStIloP-_U", titulo: "Programar vidas en Scratch: sumar, quitar, ganar", canal: "MundoScratch", vistas: 40199, busqueda: "variables puntuación scratch juego" };

const elementos = H.radial("Elementos de un videojuego: jugador, objetivo, reglas, reto, retroalimentación y recompensa", "VIDEOJUEGO", ["Jugador", "Objetivo", "Reglas", "Reto", "Retroalimentación", "Recompensa"], "var(--pen)");
const generos = H.cajas("Géneros de videojuegos: plataformas, atrapar y esquivar, laberintos, preguntas, carreras y disparos espaciales", [
  ["Plataformas", "saltar y avanzar", "var(--pen)"],
  ["Atrapar o esquivar", "reflejos", "var(--red)"],
  ["Laberinto", "encontrar la salida", "var(--leaf)"],
  ["Preguntas", "trivial, quiz", "var(--sun)"],
  ["Carreras", "llegar primero", "var(--inf)"],
  ["Naves", "esquivar y disparar", "var(--bac)"],
], "Géneros para empezar");
const diseno = H.pasos("Documento de diseño de un juego: idea en una frase, objetivo, controles, personajes, reglas de puntos y vidas, y boceto de pantallas", [
  "Idea en una frase",
  "Objetivo: cómo se gana y se pierde",
  "Controles: qué teclas se usan",
  "Personajes y objetos",
  "Reglas: puntos, vidas, tiempo",
  "Boceto de las pantallas",
], "Documento de diseño");
const jugador = H.scratch("Programa de la cesta: al hacer clic en la bandera ir a x 0 y −140; por siempre, si flecha derecha y x menor que 220 cambiar x en 8; si flecha izquierda y x mayor que −220 cambiar x en −8", [
  ["al hacer clic en ⚑", "eventos"], ["ir a x: 0 y: −140", "movimiento"], ["por siempre", "control"], ["si ⟨flecha derecha⟩ y ⟨x < 220⟩", "control", 1], ["cambiar x en 8", "movimiento", 2], ["si ⟨flecha izquierda⟩ y ⟨x > −220⟩", "control", 1], ["cambiar x en −8", "movimiento", 2],
], "El jugador: la cesta");
const caer = H.scratch("Programa de la fruta: ir a x al azar entre −220 y 220 y y 180; por siempre cambiar y en −5; si y menor que −170 volver arriba a una x al azar", [
  ["al hacer clic en ⚑", "eventos"], ["ir a x: (azar −220 a 220) y: 180", "movimiento"], ["por siempre", "control"], ["cambiar y en −5", "movimiento", 1], ["si ⟨(posición en y) < −170⟩", "control", 1], ["sumar −1 a vidas", "variables", 2], ["ir a x: (azar −220 a 220) y: 180", "movimiento", 2],
], "Lo que cae del cielo");
const vars = H.scratch("Variables del juego: al hacer clic en la bandera dar a puntos el valor 0 y a vidas el valor 3; esperar hasta que vidas sea 0; enviar game over", [
  ["al hacer clic en ⚑", "eventos"], ["dar a puntos el valor 0", "variables"], ["dar a vidas el valor 3", "variables"], ["mostrar variable puntos", "variables"], ["esperar hasta que ⟨vidas = 0⟩", "control"], ["enviar game over", "eventos"],
], "Puntos y vidas");
const dificultad = H.codigo("Aumentar la dificultad: la velocidad empieza en 3 y cada 10 puntos sube 1; la fruta cae a la velocidad actual", [
  ["velocidad ← 3", 0, H.PS.ini],
  ["por siempre", 0, H.PS.clave],
  ["cambiar y en (0 − velocidad)", 1],
  ["si toca Cesta entonces", 1, H.PS.clave],
  ["puntos ← puntos + 1", 2, H.PS.ok],
  ["si (puntos mód 10) = 0 entonces", 2, H.PS.clave],
  ["velocidad ← velocidad + 1", 3, H.PS.ok],
  ["# cada 10 puntos, más rápido", 0, H.PS.com],
], "Cada vez más difícil");
const pantallas = H.flujo("Estados de un juego: portada, al pulsar espacio juego, si vidas igual a cero pantalla de fin, y al pulsar r se vuelve a jugar", [["Portada", "ini"], ["¿Pulsa espacio?", "dec", "no: esperar", "sí ↓"], ["Jugando", "proc"], ["¿vidas = 0?", "dec", "no: jugar", "sí ↓"], ["Game over: puntos", "es"]], "Pantallas del juego");
const feedback = H.cajas("Retroalimentación en un juego: sonidos, efectos visuales, marcador, mensajes y vibración", [
  ["Sonido", "«pop» al atrapar", K.sonido],
  ["Efecto visual", "brillo, temblor", K.apariencia],
  ["Marcador", "puntos y vidas", K.variables],
  ["Mensajes", "«¡Nivel 2!»", K.eventos],
], "El juego responde");
const probar = H.ciclo("Ciclo de prueba de un juego: jugar, observar a otros jugadores, anotar problemas, ajustar y volver a jugar", "PROBAR", ["Jugar", "Observar", "Anotar", "Ajustar", "Repetir"], "var(--leaf)");
const saludable = H.comparar("Videojuegos responsables: accesibles, sin trampas para enganchar y con tiempo de juego razonable", [
  ["Accesible", ["controles sencillos", "colores distinguibles", "texto legible"], "var(--pen)"],
  ["Saludable", ["partidas cortas", "sin compras ocultas", "pausa fácil"], "var(--leaf)"],
], "Diseñar con responsabilidad");

module.exports = {
  materia: H.MATERIA,
  curso: H.CURSO,
  titulo: "Crear un videojuego",
  minutos: 120,
  objetivos: [
    "Identificar los elementos y las mecánicas de un videojuego",
    "Diseñar un juego en un documento de diseño antes de programarlo",
    "Programar el control del jugador, objetos con posiciones al azar y colisiones",
    "Usar variables para puntos, vidas y velocidad, y clones para multiplicar objetos",
    "Organizar el juego en pantallas con mensajes y ajustar la dificultad",
    "Probar, mejorar y compartir el juego pensando en la accesibilidad y la salud",
  ],
  claves: ["videojuego", "mecánica", "documento de diseño", "jugador", "colisión", "variable", "puntos", "vidas", "azar", "clon", "dificultad", "game over", "retroalimentación", "prueba de juego", "accesibilidad"],
  pregunta: {
    texto: "¿Qué hace que un juego sencillo, como atrapar frutas que caen, sea divertido durante un rato y no aburrido ni imposible?",
    respuesta: "El <mark>equilibrio</mark> entre el reto y la habilidad del jugador. Si las frutas caen siempre igual de despacio, el juego aburre; si caen demasiado rápido desde el principio, frustra. Los buenos juegos empiezan fáciles y <b>aumentan la dificultad</b> poco a poco, dan <b>retroalimentación</b> inmediata (sonidos, puntos) y tienen un <b>objetivo</b> claro. Todo eso se programa con variables, bucles y condicionales.",
  },
  lectura: {
    titulo: "El juego que se hizo en un fin de semana",
    html: `<p>Cada año se celebra en todo el mundo la <b>Global Game Jam</b>, un encuentro en el que miles de personas forman equipos y tienen solo <b>48 horas</b> para crear un videojuego a partir de un tema que se anuncia al empezar. Hay participantes de todas las edades, y muchos equipos incluyen estudiantes de secundaria.</p>
<p>Con tan poco tiempo, nadie intenta hacer un juego enorme. Los equipos que triunfan siguen casi siempre la misma estrategia: piensan una <b>idea sencilla</b> que se pueda explicar en una frase, dibujan un boceto en papel, programan primero una versión mínima que se pueda jugar y luego la <b>prueban</b> una y otra vez con otras personas, mejorándola poco a poco.</p>
<p>Algunos juegos nacidos en estos encuentros se han convertido después en éxitos comerciales. Pero lo más valioso es lo que aprenden los participantes: a trabajar en equipo, a repartir tareas, a quedarse con lo esencial y a no tener miedo de probar ideas raras. En este tema harás lo mismo: diseñar, programar y probar tu propio videojuego con Scratch.</p>`,
  },
  bloques: [
    {
      html: `<h3>5.1 ¿Qué es un videojuego?</h3><p>Un <mark>videojuego</mark> es un programa interactivo en el que un jugador intenta conseguir un objetivo siguiendo unas reglas. Aunque haya juegos muy distintos, casi todos comparten los mismos elementos:</p><p>• Un <b>jugador</b> que controla algo: un personaje, una nave, una cesta.<br>• Un <b>objetivo</b>: conseguir puntos, llegar a la meta, sobrevivir un tiempo.<br>• Unas <b>reglas</b>: qué se puede hacer y qué no, cómo se gana y cómo se pierde.<br>• Un <b>reto</b>: obstáculos, enemigos o un límite de tiempo que lo hacen difícil.<br>• <b>Retroalimentación</b>: el juego responde a lo que hace el jugador con sonidos, puntos o mensajes.<br>• <b>Recompensas</b>: puntos, niveles nuevos, sorpresas.</p><p>Las acciones básicas que el jugador repite (saltar, disparar, atrapar, esquivar) se llaman <mark>mecánicas</mark>. Un buen juego para empezar tiene <b>una sola mecánica</b> sencilla, pero bien hecha.</p>`,
      svg: elementos,
    },
    {
      html: `<h3>5.2 Géneros y mecánicas</h3><p>Los videojuegos se clasifican en <b>géneros</b> según su mecánica principal. Algunos fáciles de programar en Scratch son:</p><p>• <b>Atrapar o esquivar</b>: objetos que caen y el jugador los recoge o los evita. Mecánica: moverse a izquierda y derecha.<br>• <b>Laberinto</b>: llegar a la salida sin tocar las paredes. Mecánica: moverse en cuatro direcciones y detectar colores.<br>• <b>Plataformas</b>: saltar entre plataformas con gravedad. Mecánica: saltar y caer.<br>• <b>Preguntas</b> (trivial): responder bien para ganar puntos. Mecánica: preguntar y comparar respuestas.<br>• <b>Carreras</b>: llegar antes que el rival, que puede ser otro jugador o el ordenador.<br>• <b>Naves</b>: esquivar asteroides y disparar.</p><p>Elegir el género ayuda a saber qué hay que programar. Antes de lanzarte, juega a algunos ejemplos en la web de Scratch y fíjate en qué hace cada objeto: es la mejor forma de aprender cómo están hechos.</p>`,
      svg: generos,
    },
    {
      html: `<h3>5.3 Diseñar antes de programar</h3><p>Los estudios de videojuegos no empiezan programando: empiezan con un <mark>documento de diseño</mark>, una descripción del juego que todo el equipo puede consultar. Para un juego de clase basta con una página que responda a estas preguntas:</p><p>• <b>Idea</b>: ¿de qué va el juego, en una frase? «Atrapa la fruta con una cesta y esquiva las bombas».<br>• <b>Objetivo</b>: ¿cómo se gana y cómo se pierde? Ganar 50 puntos; perder al quedarse sin vidas.<br>• <b>Controles</b>: ¿qué teclas se usan? Flechas izquierda y derecha.<br>• <b>Personajes y objetos</b>: cesta, frutas, bomba, fondo.<br>• <b>Reglas</b>: +1 punto por fruta, −1 vida por fruta perdida o por bomba.<br>• <b>Pantallas</b>: portada, juego y fin.</p><p>Completa el diseño con un <b>boceto</b> en papel de cada pantalla. Después, divide el trabajo en partes (descomposición) y programa una cosa cada vez, probando cada parte antes de pasar a la siguiente.</p>`,
      svg: diseno,
    },
    {
      html: `<h3>5.4 Nuestro proyecto: atrapar la fruta</h3><p>Para aprender los conceptos del tema, construiremos un juego de <b>atrapar</b>. Su descripción es sencilla: frutas y bombas caen desde arriba en posiciones al azar; el jugador mueve una cesta con las flechas. Cada fruta atrapada suma un punto; cada fruta que llega al suelo o cada bomba atrapada resta una vida. Con 0 vidas, la partida termina.</p><p>Si descomponemos el juego, aparecen las partes que hay que programar:</p><p>1. Mover la <b>cesta</b> con el teclado sin que se salga de la pantalla.<br>2. Hacer que las <b>frutas caigan</b> desde un punto al azar.<br>3. Detectar las <b>colisiones</b> entre las frutas y la cesta.<br>4. Llevar la cuenta de <b>puntos y vidas</b>.<br>5. Tener varias frutas a la vez con <b>clones</b>.<br>6. Aumentar la <b>dificultad</b>.<br>7. Añadir <b>pantallas</b> de inicio y fin, <b>sonidos</b> y efectos.</p><p>Iremos programando cada parte en los apartados siguientes. Lo que aprendas te servirá para cualquier otro género.</p>`,
      svg: H.viejo(S, 2),
    },
    {
      html: `<h3>5.5 Mover al jugador</h3><p>El jugador debe responder rápido y con suavidad. Como viste con los bucles, la forma más fluida es un bucle «<b>por siempre</b>» con condicionales que comprueban las teclas: si la flecha derecha está presionada, cambiar x en 8; si la izquierda, cambiar x en −8.</p><p>Hay que evitar que la cesta <b>se salga de la pantalla</b>. Para ello, la condición se combina con un límite usando el operador «y»: solo se mueve a la derecha si la flecha está pulsada <b>y</b> la posición x es menor que 220. Otra opción es dejar que se mueva y, justo después, corregir: si x &gt; 220, ir a x 220.</p><p>Al empezar, el jugador debe <b>colocarse</b> siempre en el mismo sitio con «ir a x: 0 y: −140». El número que se suma a x es la <b>velocidad</b> del jugador: si es muy pequeño, el juego será lento y frustrante; si es muy grande, será difícil de controlar. Prueba varios valores hasta encontrar el que se sienta bien.</p>`,
      svg: jugador,
    },
    {
      html: `<h3>5.6 Objetos que caen y el azar</h3><p>Si la fruta cayera siempre por el mismo sitio, el juego sería muy fácil. Para que sea imprevisible se usa el bloque de Operadores «<b>número aleatorio entre −220 y 220</b>», que da un número al <mark>azar</mark> distinto cada vez.</p><p>El programa de la fruta hace lo siguiente:</p><p>1. Se coloca arriba, en y = 180, con una x al azar.<br>2. En un bucle «por siempre», baja: cambiar y en −5.<br>3. Si llega abajo (y &lt; −170) sin ser atrapada, resta una vida y vuelve arriba, a otra x al azar.</p><p>El azar sirve para muchas más cosas en los juegos: elegir qué disfraz tendrá un objeto (manzana, pera o plátano), cuánto esperar antes de que aparezca el siguiente enemigo o qué pregunta saldrá en un trivial. Un poco de azar hace el juego más variado; demasiado azar hace que el jugador sienta que ganar o perder no depende de él.</p>`,
      svg: caer,
    },
    {
      html: `<h3>5.7 Las colisiones</h3><p>Una <mark>colisión</mark> ocurre cuando dos objetos se tocan. Es el corazón de casi todos los juegos: atrapar, chocar, recoger, recibir un golpe. En Scratch se detecta con el sensor «<b>¿tocando …?</b>», que puede comprobar si se toca otro objeto, el borde o el puntero del ratón. También existe «<b>¿tocando el color …?</b>», muy útil en laberintos: si el personaje toca el color de las paredes, vuelve al inicio.</p><p>En nuestro juego, la fruta comprueba en su bucle: si ¿tocando Cesta?, entonces sumar 1 a puntos, iniciar el sonido «pop» y volver arriba a una x al azar. Es importante que, tras la colisión, la fruta <b>se aleje</b> enseguida; si no, en la siguiente vuelta del bucle seguiría tocando la cesta y sumaría puntos de más.</p><p>¿Quién debe comprobar la colisión, la fruta o la cesta? Normalmente, el objeto que <b>cambia</b> como resultado: la fruta, porque es ella la que desaparece y vuelve a caer.</p>`,
      svg: H.viejo(S, 3),
    },
    {
      html: `<h3>5.8 Variables: puntos y vidas</h3><p>Para llevar la cuenta de lo que pasa en el juego se usan <mark>variables</mark>. En la categoría Variables se crea una con el botón «Crear una variable». Al crearla se elige si es <b>para todos los objetos</b> (global, como los puntos, que cambian varias frutas) o <b>solo para este objeto</b> (local, como la velocidad propia de cada enemigo).</p><p>Los bloques principales son:</p><p>• «<b>dar a puntos el valor 0</b>»: fija un valor. Se usa al principio para reiniciar la partida.<br>• «<b>sumar 1 a puntos</b>»: suma (o resta, con un número negativo).<br>• «<b>mostrar / esconder variable</b>»: el marcador en el escenario.</p><p>En nuestro juego hay dos: <b>puntos</b>, que empieza en 0, y <b>vidas</b>, que empieza en 3. Un programa del escenario espera hasta que vidas = 0 y entonces envía «game over». Recuerda inicializar siempre las variables al pulsar la bandera: si no, la nueva partida empezará con los puntos de la anterior.</p>`,
      svg: vars,
      video: vVidas,
    },
    {
      html: `<h3>5.9 Muchos objetos a la vez: los clones</h3><p>Para que caigan muchas frutas a la vez podríamos duplicar el objeto fruta diez veces, pero si después hay que cambiar algo, habría que hacerlo en las diez copias. La solución son los <mark>clones</mark>: copias de un objeto que se crean <b>mientras el juego funciona</b> y que ejecutan el mismo programa.</p><p>Se usan tres bloques de Control:</p><p>• «<b>crear clon de mí mismo</b>»: el objeto original crea una copia.<br>• «<b>al comenzar como clon</b>»: evento que ejecuta cada clon nada más nacer (colocarse arriba, caer, comprobar colisiones).<br>• «<b>eliminar este clon</b>»: el clon desaparece cuando ya no hace falta, por ejemplo al llegar al suelo o al ser atrapado.</p><p>Un patrón típico: el original se esconde y, en un bucle, crea un clon cada 1 o 2 segundos; cada clon se muestra, cae y se elimina. Es importante <b>eliminar</b> los clones: Scratch permite como máximo 300 a la vez y, si se acumulan, el juego se vuelve lento.</p>`,
      svg: H.viejo(S, 5),
      video: vClones,
    },
    {
      html: `<h3>5.10 Ajustar la dificultad</h3><p>Un juego que siempre es igual de fácil aburre, y uno que es difícil desde el principio frustra. Los diseñadores buscan que la dificultad <b>crezca poco a poco</b>, a la vez que la habilidad del jugador. Algunas formas de conseguirlo:</p><p>• Usar una variable <b>velocidad</b> que aumenta cada cierto número de puntos: las frutas caen cada vez más rápido.<br>• Reducir el tiempo de espera entre clones: aparecen más frutas.<br>• Añadir obstáculos nuevos, como bombas, a partir de un nivel.<br>• Organizar el juego en <b>niveles</b> con una variable «nivel» y un mensaje «¡Nivel 2!».</p><p>Para comprobar si se ha llegado a un múltiplo de 10 puntos se puede usar el operador «<b>módulo</b>» (resto de la división): si puntos mód 10 = 0, subir la velocidad. Ajustar estos números es un trabajo de prueba y error: juega, observa a otros y cambia los valores hasta que la partida sea un reto, pero un reto justo.</p>`,
      svg: dificultad,
    },
    {
      html: `<h3>5.11 Pantallas de inicio y de fin</h3><p>Un juego completo no empieza de golpe ni se queda congelado al perder. Se organiza en <b>pantallas</b> o <b>estados</b>: la <b>portada</b> con el título y las instrucciones, la pantalla de <b>juego</b> y la de <b>fin</b> («game over» o «¡has ganado!») con la puntuación.</p><p>Una forma sencilla de programarlo es que el <b>escenario</b> dirija los estados con fondos y mensajes:</p><p>1. Al pulsar la bandera, fondo «Portada» y esperar hasta que se pulse espacio.<br>2. Fondo «Juego» y enviar «empezar»: los objetos, al recibirlo, se muestran y empiezan a funcionar.<br>3. Esperar hasta que vidas = 0, enviar «game over» y cambiar al fondo «Fin».<br>4. Al recibir «game over», los objetos se esconden y los clones se eliminan; se muestra la puntuación final.</p><p>Se puede añadir un récord con una variable «récord» que se actualiza si los puntos de la partida son mayores, y ofrecer volver a jugar con una tecla.</p>`,
      svg: pantallas,
    },
    {
      html: `<h3>5.12 Sonido, efectos y retroalimentación</h3><p>La <mark>retroalimentación</mark> es la respuesta inmediata del juego a lo que hace el jugador. Sin ella, el jugador no sabe si ha hecho algo bien o mal. Los buenos juegos la dan por varios canales a la vez:</p><p>• <b>Sonido</b>: un «pop» al atrapar una fruta, un golpe al perder una vida, música que se acelera en los últimos segundos. Se usa «iniciar sonido» para no detener el juego.<br>• <b>Efectos visuales</b>: la cesta brilla un instante («cambiar efecto brillo»), el personaje parpadea al recibir un golpe, la pantalla tiembla.<br>• <b>Marcador</b>: puntos, vidas y tiempo siempre visibles.<br>• <b>Mensajes</b>: «¡Nivel 2!», «¡Nuevo récord!».</p><p>Estos detalles hacen que el juego se sienta «vivo» y agradable. Pero ojo: demasiados efectos a la vez cansan y pueden molestar a algunas personas. Ofrece una forma de bajar el volumen y evita los destellos rápidos de pantalla, que pueden ser peligrosos para personas con epilepsia fotosensible.</p>`,
      svg: feedback,
    },
    {
      html: `<h3>5.13 Probar y mejorar el juego</h3><p>Un juego no está terminado cuando funciona en tu ordenador: está terminado cuando <b>otras personas</b> lo juegan y lo disfrutan. Las pruebas con jugadores (en inglés, <i>playtesting</i>) son una parte esencial del desarrollo.</p><p>Cómo hacer una buena prueba:</p><p>• Deja jugar a un compañero <b>sin explicarle nada</b>: si no entiende qué hacer, faltan instrucciones.<br>• <b>Observa</b> en silencio: ¿dónde se atasca?, ¿se aburre?, ¿se ríe?<br>• <b>Anota</b> los problemas: errores (bugs), partes demasiado fáciles o difíciles, controles incómodos.<br>• <b>Ajusta</b> una cosa cada vez y vuelve a probar.</p><p>Revisa también los <b>casos raros</b>: ¿qué pasa si pulsas las dos flechas a la vez?, ¿y si pierdes justo al pasar de nivel?, ¿se reinicia todo bien al volver a jugar? Este ciclo de jugar, observar, anotar y ajustar es el mismo que usan los grandes estudios, solo que ellos lo repiten con miles de jugadores.</p>`,
      svg: probar,
    },
    {
      html: `<h3>5.14 Videojuegos responsables y accesibles</h3><p>Como creador de juegos, tienes en tus manos cómo se sentirán quienes los jueguen. Un juego <mark>accesible</mark> lo pueden disfrutar más personas: controles sencillos que se puedan cambiar, colores que también distingan las personas daltónicas (no uses solo rojo y verde para distinguir lo bueno de lo malo), letra grande y legible, subtítulos y opción de silenciar.</p><p>Un juego <b>saludable</b> respeta el tiempo de los jugadores: partidas cortas, pausa fácil y nada de trucos para enganchar, como premios que solo se consiguen jugando sin parar o compras ocultas. Tampoco debe contener contenidos violentos o discriminatorios inadecuados para su edad (en Europa, el sistema <b>PEGI</b> indica la edad recomendada de cada juego).</p><p>Por último, al compartir tu juego, respeta la autoría: si usas imágenes, música o código de otras personas, cítalas en los créditos. El sector de los videojuegos ofrece muchas profesiones: programación, diseño de niveles, arte, música, guion, pruebas de calidad o producción.</p>`,
      svg: saludable,
    },
  ],
  figura: H.figura(S),
  video: H.video(S),
  ejemplos: [
    { enunciado: "Haz que la cesta se mueva con las flechas sin salirse por la derecha (x máxima 220).", pasos: ["Bucle «por siempre».", "si ⟨¿tecla flecha derecha presionada?⟩ y ⟨(posición en x) < 220⟩ → cambiar x en 8.", "Igual para la izquierda con x > −220 y cambiar x en −8."], resultado: "La cesta se mueve suave y se detiene en los bordes." },
    { enunciado: "Programa una fruta que caiga desde una x al azar y vuelva arriba si llega al suelo.", pasos: ["ir a x: (número aleatorio entre −220 y 220) y: 180.", "por siempre: cambiar y en −5.", "si posición en y < −170: restar 1 a vidas e ir arriba a otra x al azar."], resultado: "Fruta imprevisible que reaparece tras caer." },
    { enunciado: "Al atrapar una fruta suma 2 puntos en vez de 1. ¿Qué falla?", pasos: ["La colisión se comprueba en cada vuelta del bucle.", "Tras sumar, la fruta no se ha movido y en la vuelta siguiente sigue tocando la cesta.", "Solución: justo después de sumar, mandarla arriba (o eliminar el clon)."], resultado: "Hay que separar los objetos después de la colisión." },
    { enunciado: "Crea una lluvia de frutas con clones: una nueva cada segundo.", pasos: ["Original: esconder; por siempre: crear clon de mí mismo, esperar 1 segundo.", "Al comenzar como clon: ir arriba a x al azar, mostrar, repetir hasta que y < −170: cambiar y en −5.", "Después del bucle: eliminar este clon."], resultado: "Muchas frutas a la vez con un solo programa." },
    { enunciado: "Haz que la velocidad suba 1 cada 10 puntos.", pasos: ["Al atrapar: sumar 1 a puntos.", "si (puntos mód 10) = 0 entonces sumar 1 a velocidad.", "La fruta cae con cambiar y en (0 − velocidad)."], resultado: "A los 10, 20, 30… puntos el juego se acelera." },
    { enunciado: "Guarda el récord de la partida.", pasos: ["Variable global «récord» que no se reinicia al pulsar la bandera.", "Al recibir «game over»: si puntos > récord entonces dar a récord el valor puntos y decir «¡Nuevo récord!»."], resultado: "El récord se mantiene entre partidas mientras el proyecto esté abierto." },
  ],
  errores: [
    "Empezar a programar sin diseñar: el juego crece sin rumbo y es difícil de terminar.",
    "No inicializar las variables al pulsar la bandera: la partida nueva empieza con los puntos de la anterior.",
    "No alejar el objeto tras una colisión: se suman puntos de más en las vueltas siguientes del bucle.",
    "No eliminar los clones: se acumulan, el juego se ralentiza y aparecen comportamientos raros.",
    "Hacer el juego demasiado difícil desde el principio o igual de fácil todo el rato.",
    "Usar solo el color para distinguir objetos buenos y malos, o destellos rápidos que molestan a algunas personas.",
  ],
  ejercicios: H.nivelar([
    ["Nombra cuatro elementos que tiene casi todo videojuego.", "Jugador, objetivo, reglas y reto (también retroalimentación y recompensas)."],
    ["¿Qué es una mecánica de juego? Pon tres ejemplos.", "Una acción básica que el jugador repite. Ejemplos: saltar, atrapar y esquivar."],
    ["¿Qué debe incluir un documento de diseño sencillo?", "Idea en una frase, objetivo (ganar y perder), controles, personajes y objetos, reglas y boceto de las pantallas."],
    ["¿Qué bloque da un número al azar en Scratch? ¿En qué categoría está?", "«número aleatorio entre … y …», en Operadores."],
    ["¿Qué sensor se usa para detectar una colisión entre dos objetos?", "«¿tocando …?» de la categoría Sensores."],
    ["¿Qué diferencia hay entre una variable para todos los objetos y una solo para este objeto?", "La global la pueden leer y cambiar todos los objetos (como los puntos); la local es propia de cada objeto (como su velocidad)."],
    ["Escribe los tres bloques principales para trabajar con clones.", "«crear clon de …», «al comenzar como clon» y «eliminar este clon»."],
    ["¿Qué es la retroalimentación en un juego? Pon dos ejemplos.", "La respuesta inmediata del juego a lo que hace el jugador. Ejemplos: un sonido al atrapar una fruta y el marcador de puntos."],
    ["¿Qué pantallas o estados suele tener un juego completo?", "Portada (con instrucciones), juego y fin (game over o victoria)."],
    ["¿Qué indica el sistema PEGI?", "La edad recomendada de un videojuego según sus contenidos."],
    ["Escribe el programa para que la cesta empiece en (0, −140) y se mueva con las flechas.", "⚑ · ir a x: 0 y: −140 · por siempre: si flecha derecha → cambiar x en 8; si flecha izquierda → cambiar x en −8."],
    ["Una fruta se coloca en «ir a x: (aleatorio entre −220 y 220) y: 180». ¿Entre qué zonas puede aparecer?", "En cualquier punto de la parte de arriba del escenario, de casi el borde izquierdo a casi el derecho."],
    ["Programa que, si la fruta toca la cesta, sume un punto, suene «pop» y vuelva arriba.", "si ¿tocando Cesta? entonces: sumar 1 a puntos, iniciar sonido Pop, ir a x: (aleatorio −220 a 220) y: 180."],
    ["¿Por qué se usa «iniciar sonido» y no «tocar sonido hasta que termine» al atrapar una fruta?", "Porque «tocar hasta que termine» detendría el bucle de la fruta mientras suena y el juego se congelaría un instante."],
    ["Explica por qué conviene que sea la fruta, y no la cesta, la que compruebe la colisión.", "Porque la fruta es la que cambia tras la colisión (desaparece y vuelve arriba); si cada fruta lo comprueba, funciona igual aunque haya muchas."],
    ["Escribe el programa del escenario que pasa de la portada al juego al pulsar espacio.", "⚑ · cambiar fondo a Portada · esperar hasta que ¿tecla espacio presionada? · cambiar fondo a Juego · enviar empezar."],
    ["¿Qué pasa si el objeto original crea clones en un bucle pero los clones nunca se eliminan?", "Se acumulan hasta el límite de 300, el juego va cada vez más lento y deja de crear clones nuevos."],
    ["Diseña las reglas de un juego de esquivar meteoritos: cómo se gana, cómo se pierde y qué da puntos.", "Por ejemplo: +1 punto por cada segundo sobrevivido; −1 vida al tocar un meteorito; se pierde con 0 vidas; se gana al llegar a 60 puntos."],
    ["Calcula: si la fruta baja 5 pasos por vuelta y el bucle da unas 30 vueltas por segundo, ¿cuánto tarda en caer de y = 180 a y = −170?", "Recorre 350 pasos; a 5 por vuelta son 70 vueltas; a 30 vueltas por segundo, unos 2,3 segundos."],
    ["Propón tres formas de aumentar la dificultad de un juego de atrapar.", "Aumentar la velocidad de caída, crear clones más a menudo y añadir bombas a partir de cierto número de puntos (o hacer la cesta más pequeña)."],
    ["¿Cómo harías para que la cesta parpadee al perder una vida?", "Al recibir «vida perdida»: repetir 3 veces: esconder, esperar 0,1 s, mostrar, esperar 0,1 s (o usar el efecto fantasma)."],
    ["Escribe una lista de comprobación de cinco preguntas para probar un juego de un compañero.", "¿Entiendo qué hacer sin ayuda? ¿Los controles responden bien? ¿Es demasiado fácil o difícil? ¿Hay algún bug? ¿Se reinicia bien al volver a jugar?"],
    ["Programa un laberinto: si el personaje toca el color de la pared, vuelve al inicio; si toca la salida, gana.", "por siempre: movimiento con flechas; si ¿tocando color pared? → ir a la posición inicial; si ¿tocando Salida? → decir ¡Has ganado!, detener todos."],
    ["Programa la gravedad de un salto: velocidad vertical que se reduce hasta caer al suelo.", "Al pulsar espacio y tocar el suelo: dar a vy el valor 12. Por siempre: cambiar y en vy; sumar −1 a vy; si toca el suelo y vy < 0: dar a vy el valor 0."],
    ["Diseña un sistema de niveles: a los 10 puntos nivel 2 con bombas; a los 25, nivel 3 con más velocidad.", "Variable nivel. Si puntos = 10 → nivel 2, enviar «nivel 2» (la bomba empieza a crear clones). Si puntos = 25 → nivel 3, sumar 2 a velocidad y mostrar «¡Nivel 3!»."],
    ["Explica qué es el operador módulo y para qué sirve en un juego.", "Da el resto de una división: 23 mód 10 = 3. Sirve para detectar múltiplos (cada 10 puntos el resto es 0) o hacer ciclos, como alternar entre 3 disfraces."],
    ["Un compañero dice que su juego es «perfecto» porque a él le funciona. ¿Qué le responderías?", "Que debe probarlo con otras personas sin explicarles nada, porque el creador conoce los controles y los trucos. Los jugadores nuevos encuentran bugs y problemas de dificultad que él no ve."],
    ["Revisa la accesibilidad de un juego en el que las frutas son verdes y las bombas rojas. ¿Qué cambiarías?", "Algunas personas daltónicas no distinguen bien el rojo del verde. Cambiaría también la forma (bomba redonda con mecha) y añadiría un sonido distinto."],
    ["Diseña el sistema de récord que muestre «¡Nuevo récord!» solo cuando se supere.", "Al recibir game over: si puntos > récord entonces dar a récord el valor puntos y decir «¡Nuevo récord!»; si no, decir «Récord: » unido a récord."],
    ["Escribe el documento de diseño completo de un juego original de una sola mecánica.", "Respuesta abierta. Debe incluir idea en una frase, objetivo, controles, objetos, reglas de puntos y vidas, aumento de dificultad, pantallas y un boceto, y ser realizable en Scratch."],
  ]),
  quiz: H.test([
    ["Las acciones básicas que el jugador repite se llaman…", ["mecánicas", "variables", "clones", "fondos"], "Saltar, atrapar, esquivar…"],
    ["Antes de programar un juego conviene hacer…", ["un documento de diseño", "los sonidos", "el récord", "la portada"], "Idea, reglas, controles, bocetos."],
    ["Para que la fruta aparezca en sitios distintos se usa…", ["número aleatorio", "ir a x: 0 y: 0", "rebotar", "detener todos"], "Azar."],
    ["Una colisión es cuando…", ["dos objetos se tocan", "el juego se cuelga", "suena un sonido", "se crea un clon"], "Corazón de los juegos."],
    ["Para detectar si se toca la pared de un laberinto se puede usar…", ["¿tocando el color …?", "mostrar variable", "siguiente disfraz", "crear clon"], "Detecta colores."],
    ["Los puntos de un juego se guardan en…", ["una variable", "un disfraz", "un fondo", "un sonido"], "Valor que cambia."],
    ["Al pulsar la bandera, los puntos deben…", ["ponerse a 0", "sumar 1", "borrarse del proyecto", "dividirse"], "Inicializar."],
    ["Una variable «para todos los objetos» es…", ["global", "local", "un clon", "un evento"], "La comparten todos."],
    ["«crear clon de mí mismo»…", ["hace una copia del objeto mientras el juego funciona", "duplica el proyecto", "borra el objeto", "guarda el juego"], "Clones en tiempo de ejecución."],
    ["Los clones empiezan a funcionar con el evento…", ["al comenzar como clon", "al hacer clic en ⚑", "al recibir", "al presionar tecla"], "Su propio sombrero."],
    ["Si no se eliminan los clones…", ["se acumulan y el juego se ralentiza", "desaparecen solos", "suman puntos", "cambian de color"], "Máximo 300."],
    ["Si tras atrapar una fruta no se aleja de la cesta…", ["suma puntos de más", "se rompe el juego", "pierde una vida", "no pasa nada"], "Sigue tocando en la vuelta siguiente."],
    ["Para que la cesta no salga por la derecha se comprueba…", ["que x sea menor que 220", "que y sea 0", "el volumen", "el disfraz"], "Límite del escenario."],
    ["23 mód 10 es…", ["3", "2", "2,3", "10"], "Resto de la división."],
    ["Una buena curva de dificultad…", ["empieza fácil y sube poco a poco", "es difícil desde el principio", "nunca cambia", "baja con el tiempo"], "Reto justo."],
    ["La pantalla de «game over» se suele activar con…", ["un mensaje cuando vidas = 0", "un clon", "el lápiz", "rebotar"], "Estado de fin."],
    ["El sonido al atrapar una fruta es un ejemplo de…", ["retroalimentación", "colisión", "variable", "mecánica"], "Respuesta del juego."],
    ["Probar el juego con otras personas se llama…", ["playtesting", "compilar", "remezclar", "clonar"], "Prueba con jugadores."],
    ["Para que un juego sea accesible a personas daltónicas…", ["no se distinguen objetos solo por color", "se usa solo rojo y verde", "se quita el sonido", "se hace más rápido"], "Forma y sonido también."],
    ["PEGI indica…", ["la edad recomendada de un juego", "el número de jugadores", "el precio", "el género"], "Clasificación europea."],
  ], 1),
  examen: H.test([
    ["La fruta baja 5 pasos por vuelta; de y = 180 a y = −170 necesita…", ["70 vueltas", "35 vueltas", "350 vueltas", "5 vueltas"], "350 : 5."],
    ["Si puntos mód 10 = 0, ocurre con…", ["10, 20, 30…", "1, 2, 3…", "5, 15, 25…", "solo con 10"], "Múltiplos de 10."],
    ["Para muchas frutas a la vez con un solo programa se usan…", ["clones", "fondos", "variables locales", "mensajes"], "Copias en ejecución."],
    ["Quién debe comprobar la colisión fruta-cesta normalmente:", ["la fruta", "la cesta", "el escenario", "nadie"], "El objeto que cambia."],
    ["Una nueva partida empieza con los puntos de la anterior porque…", ["no se inicializaron", "hay clones", "falta un sonido", "el fondo es otro"], "dar a puntos el valor 0."],
    ["El original crea un clon por segundo y cada clon tarda 3 s en caer. ¿Cuántos hay a la vez aprox.?", ["3", "1", "30", "300"], "Uno por segundo, 3 s de vida."],
    ["«iniciar sonido» se prefiere al atrapar porque…", ["no detiene el bucle", "suena más fuerte", "repite el sonido", "crea un clon"], "No espera."],
    ["Un récord que no se reinicia con la bandera se guarda en…", ["una variable que no se pone a 0 al empezar", "un disfraz", "un clon", "el fondo"], "Persiste entre partidas."],
  ], 2),
  feynman: ["Qué elementos tiene un videojuego y qué es una mecánica", "Cómo se diseña un juego antes de programarlo", "Cómo se programan el movimiento, el azar y las colisiones", "Para qué sirven las variables y los clones en un juego", "Cómo se ajusta la dificultad y por qué hay que probar con otras personas"],
  mapa: H.mapa("CREAR UN VIDEOJUEGO", "var(--eso)", [
    ["Diseñar", "idea · reglas · controles · bocetos", "var(--pen)"],
    ["Programar", "movimiento · azar · colisiones", K.control],
    ["Datos", "puntos · vidas · clones", K.variables],
    ["Mejorar", "dificultad · pruebas · accesible", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Mecánica", "Acción básica que repite el jugador."],
    ["Documento de diseño", "Idea, objetivo, controles, reglas y bocetos."],
    ["Azar", "número aleatorio entre … y …"],
    ["Colisión", "Dos objetos se tocan: ¿tocando …?"],
    ["Variable global", "Para todos los objetos: puntos."],
    ["Inicializar", "Dar valor inicial al pulsar la bandera."],
    ["Clon", "Copia creada durante el juego."],
    ["Eliminar clon", "Evita que se acumulen (máx. 300)."],
    ["Módulo", "Resto de la división: detecta múltiplos."],
    ["Estados", "Portada, juego y fin."],
    ["Retroalimentación", "Respuesta inmediata: sonido, puntos, efectos."],
    ["Playtesting", "Probar el juego con otras personas."],
  ],
  glosario: [
    ["Videojuego", "Programa interactivo en el que un jugador busca un objetivo siguiendo unas reglas."],
    ["Mecánica", "Acción básica que el jugador realiza repetidamente en un juego."],
    ["Género", "Tipo de videojuego según su mecánica principal."],
    ["Documento de diseño", "Descripción del juego con su idea, objetivo, controles, reglas y pantallas."],
    ["Azar", "Resultado imprevisible que se obtiene con un número aleatorio."],
    ["Colisión", "Contacto entre dos objetos del juego."],
    ["Variable global", "Variable que pueden usar y cambiar todos los objetos."],
    ["Variable local", "Variable propia de un solo objeto o de cada clon."],
    ["Clon", "Copia de un objeto creada mientras el programa se ejecuta."],
    ["Dificultad", "Grado de reto de un juego; suele aumentar con el progreso."],
    ["Nivel", "Etapa de un juego con un reto distinto o mayor."],
    ["Módulo", "Operación que da el resto de una división entera."],
    ["Retroalimentación", "Respuesta inmediata del juego a las acciones del jugador."],
    ["Prueba de juego (playtesting)", "Sesión en la que otras personas juegan para encontrar errores y mejoras."],
    ["PEGI", "Sistema europeo que indica la edad recomendada de los videojuegos."],
    ["Accesibilidad", "Característica de un juego que permite que lo disfruten personas con distintas capacidades."],
  ],
  situacion: {
    titulo: "Feria de videojuegos sobre el reciclaje",
    reto: "El instituto organiza una semana del medio ambiente. Cada equipo diseñará y programará en Scratch un videojuego que enseñe a separar los residuos en los contenedores correctos. Los mejores se jugarán en la feria del centro.",
    pasos: [
      "Investigad qué residuos van a cada contenedor y elegid una mecánica sencilla (atrapar, arrastrar, esquivar).",
      "Escribid el documento de diseño con idea, objetivo, controles, reglas, pantallas y bocetos, y repartid las tareas.",
      "Programad una primera versión jugable con movimiento, azar, colisiones y variables de puntos y vidas.",
      "Añadid clones, niveles de dificultad, pantallas de inicio y fin, sonidos y mensajes educativos.",
      "Haced pruebas con jugadores de otro equipo, anotad sus comentarios y mejorad el juego, cuidando la accesibilidad.",
      "Presentad el juego en la feria con un cartel de instrucciones y créditos.",
    ],
    producto: "Videojuego de Scratch compartido, documento de diseño, informe de pruebas y cartel para la feria.",
    evaluacion: [
      "El juego funciona, tiene objetivo claro y usa colisiones, variables, azar y clones.",
      "La dificultad aumenta de forma equilibrada y hay pantallas de inicio y fin.",
      "Se documentan las pruebas y las mejoras realizadas.",
      "El juego es accesible, transmite bien el mensaje y respeta la autoría.",
    ],
  },
  familias: ["Jugad juntos a un juego sencillo y descubrid cuál es su mecánica, su objetivo y sus reglas.", "Probad el juego que haya creado y dadle una crítica constructiva: algo que os gusta y algo que mejoraríais.", "Mirad la etiqueta PEGI de los juegos de casa y comentad qué significa.", "Hablad de cuánto tiempo de juego es razonable y acordad pausas."],
  profesores: {
    saberes: H.saberes("Diseño de videojuegos: elementos, mecánicas y documento de diseño; programación de interacciones con eventos, bucles y condicionales; números aleatorios; detección de colisiones; variables globales y locales; clones; gestión de estados mediante mensajes; ajuste de la dificultad; pruebas con usuarios, accesibilidad y consumo responsable de videojuegos", "creació de videojocs, programació d'objectes i variables, disseny centrat en la persona usuària, accessibilitat i ús saludable de la tecnologia."),
    ideas: [
      "Miniatura de Game Jam en el aula: 3 sesiones para un juego con una sola mecánica.",
      "Análisis de juegos de la comunidad Scratch con una ficha de elementos y mecánicas.",
      "Ruedas de playtesting entre equipos con una lista de comprobación común.",
      "Conexión con Matemáticas: azar, coordenadas y operador módulo.",
      "Charla o vídeo sobre profesiones del sector del videojuego y los estudios españoles.",
    ],
  },
  fuentes: [H.RD, H.DEC, H.SCRATCH, { t: "PEGI: sistema europeo de clasificación de videojuegos", url: "https://pegi.info/es" }, H.wiki("Diseño de videojuegos", "Dise%C3%B1o_de_videojuegos"), H.wiki("Global Game Jam", "Global_Game_Jam")],
  revisado: H.REV,
};
