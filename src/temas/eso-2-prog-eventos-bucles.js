// Programación y robótica 2º ESO · Eventos, bucles y condicionales. Tema nivel libro (lote 8).
// Contenido y dibujos propios: bloques de Scratch y esquemas de _eso2L8 y dibujos de la versión anterior del tema.
const H = require("./_eso2L8");
const S = "prog-eventos-bucles";
const [vEventos, vBucles] = H.videos(S);
const K = H.CAT;

const tipos = H.cajas("Tipos de eventos: del usuario como teclas y clics, del programa como mensajes y cambios de fondo, del entorno como el sonido y del tiempo como el cronómetro", [
  ["Usuario", "tecla, clic, bandera", "var(--pen)"],
  ["Programa", "mensajes, fondos", "var(--sun)"],
  ["Entorno", "volumen, vídeo", "var(--leaf)"],
  ["Tiempo", "cronómetro", "var(--red)"],
], "¿Qué puede pasar?");
const eventos = H.scratch("Varios eventos en un objeto: al presionar flecha derecha cambiar x en 10; al hacer clic en este objeto decir ay; cuando el volumen sea mayor que 50 saltar", [
  ["al presionar tecla flecha derecha", "eventos"], ["cambiar x en 10", "movimiento"],
  ["al hacer clic en este objeto", "eventos"], ["decir ¡Ay! 1 s", "apariencia"],
  ["cuando volumen > 50", "eventos"], ["cambiar y en 40", "movimiento"],
], "Un objeto, varios eventos");
const paralelo = H.scratch("Dos programas a la vez con la bandera verde: uno mueve el pez sin parar y otro cambia su color sin parar", [
  ["al hacer clic en ⚑", "eventos"], ["por siempre", "control"], ["mover 5 pasos", "movimiento", 1], ["rebotar si toca un borde", "movimiento", 1],
  ["al hacer clic en ⚑", "eventos"], ["por siempre", "control"], ["cambiar efecto color en 5", "apariencia", 1],
], "Programas en paralelo");
const escenas = H.flujo("Coordinar escenas con mensajes: el escenario envía empezar y espera; el gato recibe empezar, habla y termina; después el escenario envía fin", [["⚑ Escenario", "ini"], ["enviar «empezar» y esperar", "proc"], ["Gato: al recibir «empezar»", "es"], ["habla y camina", "proc"], ["Escenario: enviar «fin»", "proc"], ["Todos: al recibir «fin»", "es"]], "Enviar y esperar");
const sinCon = H.comparar("Sin bucle hay que copiar los mismos bloques muchas veces; con un bucle se escriben una sola vez y es fácil cambiar el número", [
  ["Sin bucle", ["mover · girar", "mover · girar", "mover · girar", "mover · girar"], "var(--red)"],
  ["Con bucle", ["repetir 4", "  mover · girar", "más corto", "fácil de cambiar"], "var(--leaf)"],
], "¿Por qué usar bucles?");
const anidados = H.scratch("Bucles anidados con el lápiz: repetir 6 veces dibujar un cuadrado con repetir 4 mover 50 y girar 90, y girar 60 grados", [
  ["al hacer clic en ⚑", "eventos"], ["borrar todo", "lapiz"], ["bajar lápiz", "lapiz"], ["repetir 6", "control"], ["repetir 4", "control", 1], ["mover 50 pasos", "movimiento", 2], ["girar ↻ 90 grados", "movimiento", 2], ["girar ↻ 60 grados", "movimiento", 1],
], "Un rosetón: 6 × 4");
const condiciones = H.tablaSvg("Condiciones habituales en Scratch: tocando un objeto, tocando un color, tecla presionada, comparar mayor, menor o igual", ["Bloque", "Pregunta"], [["¿tocando Bola?", "¿choca con la bola?"], ["¿tocando color ■?", "¿pisa ese color?"], ["¿tecla espacio presionada?", "¿se pulsa?"], ["puntos > 10", "¿más de 10?"], ["respuesta = clave", "¿son iguales?"]]);
const logicos = H.tablaSvg("Operadores lógicos: y es verdadero solo si las dos condiciones lo son; o es verdadero si al menos una lo es; no cambia verdadero por falso", ["A · B", "A y B", "A o B"], [["V · V", "V", "V"], ["V · F", "F", "V"], ["F · V", "F", "V"], ["F · F", "F", "F"]]);
const esperar = H.scratch("Esperar hasta que y detener: al hacer clic en la bandera decir pulsa espacio, esperar hasta que se pulse espacio, decir ¡vamos!, repetir hasta que toque la meta mover 5 pasos y detener todos", [
  ["al hacer clic en ⚑", "eventos"], ["decir Pulsa espacio", "apariencia"], ["esperar hasta que ⟨¿tecla espacio presionada?⟩", "control"], ["decir ¡Vamos! 1 s", "apariencia"], ["repetir hasta que ⟨¿tocando Meta?⟩", "control"], ["mover 5 pasos", "movimiento", 1], ["detener todos", "control"],
], "Esperar y detener");
const traza = H.codigo("Traza de un bucle con condicional: n empieza en 1 y se duplica hasta superar 20; valores 1, 2, 4, 8, 16 y 32", [
  ["n ← 1", 0, H.PS.ini],
  ["repetir hasta que n > 20", 0, H.PS.clave],
  ["si n > 10 entonces decir «¡grande!»", 1, H.PS.clave],
  ["n ← n · 2", 1, H.PS.ok],
  ["# traza de n: 1 → 2 → 4 → 8 → 16 → 32", 0, H.PS.com],
  ["# «¡grande!» se dice con n = 16", 0, H.PS.com],
  ["# sale cuando n = 32 (> 20)", 0, H.PS.com],
], "Hacer una traza");

module.exports = {
  materia: H.MATERIA,
  curso: H.CURSO,
  titulo: "Eventos, bucles y condicionales",
  minutos: 115,
  objetivos: [
    "Entender la programación dirigida por eventos y usar los eventos de Scratch",
    "Coordinar varios objetos con mensajes y programas en paralelo",
    "Usar los bucles repetir, por siempre y repetir hasta que, también anidados",
    "Construir condiciones con sensores, comparaciones y operadores lógicos",
    "Programar decisiones con si… entonces y si… entonces… si no",
    "Combinar bucles y condicionales para controlar personajes y depurar con trazas",
  ],
  claves: ["evento", "mensaje", "paralelo", "bucle", "repetir", "por siempre", "repetir hasta que", "bucle anidado", "condición", "booleano", "si… entonces", "si no", "operador lógico", "traza", "bucle infinito"],
  pregunta: {
    texto: "En un videojuego, el personaje se mueve cuando pulsas una tecla, los enemigos caminan solos y, si te tocan, pierdes una vida. ¿Qué tres ideas de programación hay detrás?",
    respuesta: "Los <mark>eventos</mark> (el programa reacciona cuando pulsas una tecla), los <mark>bucles</mark> (los enemigos repiten su movimiento sin parar) y los <mark>condicionales</mark> (si un enemigo te toca, entonces pierdes una vida). Con estas tres piezas se construye casi cualquier juego o aplicación interactiva.",
  },
  lectura: {
    titulo: "El ascensor que piensa",
    html: `<p>Piensa en el ascensor de un edificio. Parece una máquina sencilla, pero su programa es un buen ejemplo de todo lo que verás en este tema. El ascensor está siempre <b>esperando</b> a que ocurra algo: que alguien pulse un botón en un piso o dentro de la cabina. Cada pulsación es un <b>evento</b> que pone en marcha una parte del programa.</p>
<p>Mientras funciona, el ascensor repite una y otra vez las mismas comprobaciones, en un <b>bucle</b> que no termina nunca: ¿hay alguna llamada pendiente?, ¿en qué piso estoy?, ¿la puerta está cerrada? Y toma <b>decisiones</b>: si la llamada es de un piso de arriba, sube; si no, baja. Si el sensor de la puerta detecta a una persona, no cierra. Si el peso supera el límite, suena una alarma y no se mueve.</p>
<p>Los ingenieros que programan ascensores deben pensar en todo lo que puede pasar, incluso en lo raro: un apagón, dos llamadas a la vez, un niño que pulsa todos los botones. Un buen programa combina eventos, bucles y condiciones para responder bien en cada situación. Eso es lo que aprenderás a hacer con Scratch.</p>`,
  },
  bloques: [
    {
      html: `<h3>4.1 Programas que reaccionan: los eventos</h3><p>Los primeros programas se ejecutaban de principio a fin sin que nadie interviniera. Hoy, casi todos los programas que usamos son <b>interactivos</b>: esperan a que ocurra algo y entonces reaccionan. Ese «algo» se llama <mark>evento</mark>.</p><p>Un evento puede venir de distintos sitios:</p><p>• Del <b>usuario</b>: pulsar una tecla, hacer clic, tocar la pantalla.<br>• Del <b>propio programa</b>: un mensaje entre objetos, un cambio de fondo.<br>• Del <b>entorno</b>: un sonido fuerte captado por el micrófono, el movimiento delante de la cámara o la señal de un sensor.<br>• Del <b>tiempo</b>: que el cronómetro llegue a un valor.</p><p>Esta forma de programar se llama <mark>programación dirigida por eventos</mark>. Las apps del móvil, los videojuegos o las páginas web funcionan así: cuando tocas un botón, se ejecuta el trozo de programa asociado a ese botón. En Scratch, los eventos son los bloques amarillos con forma de sombrero.</p>`,
      svg: tipos,
    },
    {
      html: `<h3>4.2 Los eventos de Scratch</h3><p>En la categoría <b>Eventos</b> están los bloques sombrero que inician programas:</p><p>• «<b>al hacer clic en ⚑</b>»: el más usado, para empezar el proyecto y preparar todo (posiciones, variables, fondos).<br>• «<b>al presionar tecla …</b>»: para controlar personajes con el teclado.<br>• «<b>al hacer clic en este objeto</b>»: para botones o personajes que reaccionan al ratón.<br>• «<b>cuando el fondo cambie a …</b>»: para que los objetos reaccionen al cambio de escena.<br>• «<b>cuando volumen / cronómetro &gt; …</b>»: reacciona al sonido del micrófono o al tiempo.<br>• «<b>al recibir …</b>»: reacciona a un mensaje.</p><p>Un mismo objeto puede tener <b>varios programas</b>, cada uno con su evento. Por ejemplo, un personaje puede moverse a la derecha con una tecla, a la izquierda con otra y quejarse si le haces clic. Cada pila de bloques es independiente y espera su propio evento.</p>`,
      svg: eventos,
    },
    {
      html: `<h3>4.3 Varios programas a la vez</h3><p>Cuando pulsas la bandera verde, <b>todos</b> los programas que empiezan con «al hacer clic en ⚑» se ponen en marcha <b>a la vez</b>, en todos los objetos y en el escenario. Se dice que se ejecutan en <mark>paralelo</mark>.</p><p>Esto es muy útil para organizar los proyectos: en lugar de una pila enorme que lo haga todo, se pueden hacer varias pilas pequeñas, cada una con una tarea. Por ejemplo, en un pez: una pila lo mueve por el acuario, otra cambia su color y otra comprueba si toca un tiburón. Así el programa es más fácil de leer y de corregir.</p><p>Pero el paralelismo tiene un riesgo: si dos programas cambian lo mismo a la vez (por ejemplo, la posición del objeto), pueden «pelearse» y el resultado será extraño. Tampoco se puede saber con seguridad qué pila empieza primero. Por eso conviene que cada programa tenga una tarea distinta y que las cosas que deben ir en orden estén en la misma pila o se coordinen con mensajes.</p>`,
      svg: paralelo,
    },
    {
      html: `<h3>4.4 Mensajes entre objetos</h3><p>Los objetos de Scratch no pueden ver los programas de los demás, pero pueden <b>comunicarse</b> mediante <mark>mensajes</mark>. Un mensaje es como un aviso que se grita a todo el proyecto: quien esté atento a ese mensaje, reacciona.</p><p>Se usan dos bloques:</p><p>• «<b>enviar …</b>» manda el mensaje a todos los objetos y al escenario.<br>• «<b>al recibir …</b>» es un evento: el programa que empieza con él se ejecuta cuando llega ese mensaje.</p><p>Al crear un mensaje, ponle un nombre claro que diga qué ocurre: «empezar», «game over», «nivel 2», «puerta abierta». Por ejemplo, cuando se pulsa un botón «Jugar», el botón envía «empezar», se esconde, y el personaje, al recibir «empezar», aparece y comienza a moverse. Los mensajes permiten que los objetos colaboren sin depender del orden exacto en que se ejecutan sus programas.</p>`,
      svg: H.viejo(S, 1),
      video: vEventos,
    },
    {
      html: `<h3>4.5 Enviar y esperar: coordinar escenas</h3><p>El bloque «<b>enviar … y esperar</b>» hace lo mismo que «enviar», pero con una diferencia importante: el programa que envía el mensaje se <b>detiene</b> hasta que <b>todos</b> los programas que lo reciben han terminado. Solo entonces continúa.</p><p>Esto sirve para contar historias en orden. Imagina una escena en la que el gato pregunta y el perro responde. El escenario puede hacer:</p><p>1. «enviar <i>pregunta</i> y esperar» → el gato dice su frase.<br>2. «enviar <i>respuesta</i> y esperar» → el perro contesta.<br>3. «cambiar fondo a Parque» y «enviar <i>escena 2</i>».</p><p>Así, el escenario hace de <b>director</b>: decide cuándo actúa cada personaje. Con «enviar» normal, el escenario seguiría inmediatamente y las frases se solaparían. Un buen diseño consiste en que un único objeto (o el escenario) controle el orden de las escenas y los demás reaccionen con «al recibir».</p>`,
      svg: escenas,
    },
    {
      html: `<h3>4.6 ¿Para qué sirven los bucles?</h3><p>Un <mark>bucle</mark> es una estructura que <b>repite</b> un grupo de instrucciones. Sin bucles, para que un objeto dibuje un cuadrado tendrías que escribir cuatro veces «mover 100, girar 90». Para un polígono de 20 lados, veinte veces. Con un bucle, basta con escribirlo <b>una vez</b> dentro de «repetir 4» o «repetir 20».</p><p>Los bucles tienen tres ventajas:</p><p>• Los programas son <b>más cortos</b> y fáciles de leer.<br>• Hay <b>menos errores</b>: si te equivocas, solo lo corriges en un sitio.<br>• Son <b>fáciles de cambiar</b>: para dibujar un hexágono, solo cambias el número de repeticiones y el ángulo.</p><p>En Scratch, los bucles están en la categoría <b>Control</b>, son de color naranja y tienen forma de <b>C</b>: los bloques que se repiten van dentro de la C. Lo que va <b>antes</b> del bucle se hace una vez (preparar); lo que va <b>dentro</b>, se repite; y lo que va <b>después</b>, se hace cuando el bucle termina.</p>`,
      svg: sinCon,
    },
    {
      html: `<h3>4.7 Los tres bucles de Scratch</h3><p>Scratch tiene tres tipos de bucle:</p><p>• «<b>repetir 10</b>»: repite un <b>número fijo</b> de veces. Se usa cuando sabes cuántas repeticiones hacen falta: dibujar un polígono, parpadear tres veces, dar 10 pasos de animación.<br>• «<b>por siempre</b>»: repite <b>sin parar</b> hasta que se pulsa la señal roja o se detiene el programa. Se usa para lo que debe durar todo el juego: la música de fondo, el movimiento de un enemigo, comprobar teclas. Como no termina nunca, no tiene muesca abajo: no se puede encajar nada debajo.<br>• «<b>repetir hasta que …</b>»: repite <b>mientras la condición sea falsa</b> y se detiene cuando se cumple. Se usa cuando la repetición depende de que pase algo: caminar hasta tocar la meta, preguntar hasta acertar.</p><p>Regla práctica: si conoces el número, «repetir n»; si debe durar siempre, «por siempre»; si depende de un suceso, «repetir hasta que».</p>`,
      svg: H.viejo(S, 2),
      video: vBucles,
    },
    {
      html: `<h3>4.8 Bucles anidados</h3><p>Un bucle puede ir <b>dentro de otro</b>: se llaman <mark>bucles anidados</mark>. El bucle interior se ejecuta completo en cada vuelta del exterior. Por ejemplo, «repetir 6» con un «repetir 4» dentro hace que el bloque más interior se ejecute <b>6 × 4 = 24</b> veces.</p><p>Con la extensión <b>Lápiz</b> se ve muy bien. Para dibujar un cuadrado se usa «repetir 4: mover 50, girar 90». Si ese cuadrado se repite 6 veces girando 60° entre uno y otro, aparece un rosetón. El ángulo exterior se calcula dividiendo 360° entre el número de repeticiones: 360 : 6 = 60°.</p><p>Los bucles anidados también sirven para recorrer <b>filas y columnas</b>: un bucle exterior para las filas y uno interior para las columnas, como al colocar los ladrillos de un juego tipo «rompe-bloques». Para saber cuántas veces se repite algo en bucles anidados, <b>multiplica</b> las repeticiones de cada nivel.</p>`,
      svg: anidados,
    },
    {
      html: `<h3>4.9 Las condiciones</h3><p>Una <mark>condición</mark> es una pregunta que solo puede responderse con <b>verdadero</b> o <b>falso</b>. En Scratch, las condiciones son los bloques <b>hexagonales</b> (booleanos), que encajan en los huecos con esa forma de los condicionales y de «repetir hasta que».</p><p>Las condiciones se obtienen de dos categorías:</p><p>• <b>Sensores</b> (azul claro): «¿tocando Bola?», «¿tocando el borde?», «¿tocando color …?», «¿tecla espacio presionada?», «¿ratón presionado?».<br>• <b>Operadores</b> (verde): las comparaciones «… &gt; …» (mayor que), «… &lt; …» (menor que) y «… = …» (igual a), que comparan números o textos, como «puntos &gt; 10» o «respuesta = Madrid».</p><p>Las condiciones se comprueban en el <b>momento</b> en que se ejecuta el bloque. Si el objeto toca la bola un instante antes o después, la respuesta será falsa. Por eso, para vigilar algo durante todo el juego, la condición se mete dentro de un bucle «por siempre».</p>`,
      svg: condiciones,
    },
    {
      html: `<h3>4.10 Si… entonces y si… entonces… si no</h3><p>Los <mark>condicionales</mark> permiten que el programa <b>tome decisiones</b>. En Scratch hay dos:</p><p>• «<b>si ⟨condición⟩ entonces</b>»: si la condición es verdadera, ejecuta los bloques de dentro; si es falsa, no hace nada y sigue. Ejemplo: si toca la moneda, sumar 1 punto.<br>• «<b>si ⟨condición⟩ entonces … si no …</b>»: tiene dos huecos. Si la condición es verdadera, ejecuta el primero; si es falsa, el segundo. Siempre se ejecuta uno de los dos, nunca ambos. Ejemplo: si los puntos son más de 10, decir «¡Has ganado!»; si no, decir «Sigue intentándolo».</p><p>Se pueden <b>encadenar</b> condicionales colocando uno dentro del «si no» de otro, para elegir entre más de dos opciones: si la nota es menor que 5, «suspenso»; si no, si es menor que 7, «aprobado»; si no, «notable o más». Al encadenar, el orden de las preguntas importa: se comprueban de arriba abajo.</p>`,
      svg: H.viejo(S, 3),
    },
    {
      html: `<h3>4.11 Operadores lógicos: y, o, no</h3><p>A veces una decisión depende de <b>varias condiciones</b>. Para combinarlas se usan los <mark>operadores lógicos</mark> de la categoría Operadores:</p><p>• «<b>⟨A⟩ y ⟨B⟩</b>»: es verdadero solo si <b>las dos</b> condiciones son verdaderas. Ejemplo: abrir la puerta si tiene la llave <b>y</b> está tocando la puerta.<br>• «<b>⟨A⟩ o ⟨B⟩</b>»: es verdadero si <b>al menos una</b> es verdadera. Ejemplo: perder una vida si toca el enemigo <b>o</b> toca la lava.<br>• «<b>no ⟨A⟩</b>»: cambia verdadero por falso y al revés. Ejemplo: si <b>no</b> está tocando el suelo, caer.</p><p>La tabla del dibujo, llamada <b>tabla de verdad</b>, resume todas las combinaciones. Los operadores se pueden encajar unos dentro de otros para formar condiciones complejas, como «(edad &gt; 11) y (edad &lt; 15)», que es verdadera para 12, 13 y 14 años. Es la misma lógica que usan los buscadores cuando escribes varias palabras.</p>`,
      svg: logicos,
    },
    {
      html: `<h3>4.12 Bucles y condicionales juntos</h3><p>La combinación más importante de la programación de juegos es un <b>condicional dentro de un bucle «por siempre»</b>. El bucle hace que el programa pregunte <b>continuamente</b>, muchas veces por segundo, y el condicional decide qué hacer en cada momento.</p><p>Por ejemplo, para mover un personaje con el teclado de forma suave: por siempre, si la flecha derecha está presionada, cambiar x en 5; si la flecha izquierda está presionada, cambiar x en −5. Este método es mejor que el evento «al presionar tecla», que tiene un pequeño retraso al mantener la tecla pulsada.</p><p>Con la misma estructura se programan las <b>colisiones</b> (si toca un enemigo, perder vida), la <b>recogida de objetos</b> (si toca una moneda, sumar punto) o los <b>límites</b> (si la x es mayor que 230, volver a 230). Casi todo videojuego tiene en su interior uno o varios bucles «por siempre» llenos de condicionales: es su <b>bucle principal</b>.</p>`,
      svg: H.viejo(S, 5),
    },
    {
      html: `<h3>4.13 Esperar hasta que y detener</h3><p>Además de los bucles, la categoría Control tiene bloques para manejar el tiempo y el final de los programas:</p><p>• «<b>esperar 1 segundos</b>»: hace una pausa. Sin pausas, muchas animaciones irían tan rápido que no se verían.<br>• «<b>esperar hasta que ⟨condición⟩</b>»: detiene el programa hasta que la condición se cumple. Es como un «repetir hasta que» vacío. Sirve, por ejemplo, para que el juego no empiece hasta que se pulse la barra espaciadora.<br>• «<b>detener …</b>»: puede detener <b>todos</b> los programas (fin del juego), solo <b>este programa</b> o los <b>otros programas del objeto</b>.</p><p>Es buena idea preparar un <b>final</b> claro para cada proyecto: cuando se pierden todas las vidas, enviar «game over», mostrar un mensaje o un fondo final y detener todo. Así el jugador sabe que la partida ha terminado y no queda ningún bucle funcionando en segundo plano.</p>`,
      svg: esperar,
    },
    {
      html: `<h3>4.14 Trazas y errores con bucles y condiciones</h3><p>Los bucles y los condicionales son potentes, pero también fuente de errores. Los más comunes son:</p><p>• <b>Bucle infinito involuntario</b>: un «repetir hasta que» cuya condición nunca llega a cumplirse, porque dentro no cambia nada. Si el objeto no se mueve dentro del bucle, nunca tocará la meta.<br>• <b>Condición que se comprueba una sola vez</b>: un «si» suelto, fuera de un bucle, solo pregunta en el instante en que se ejecuta.<br>• <b>Bloques dentro o fuera por error</b>: poner «puntos a 0» dentro del bucle lo reinicia en cada vuelta.<br>• <b>Condiciones mal ordenadas</b> al encadenar «si… si no».</p><p>Para encontrarlos, la mejor herramienta es la <mark>traza</mark>: seguir el programa paso a paso en papel, apuntando el valor de las variables en cada vuelta. También ayuda mostrar las variables en el escenario o añadir un «decir» temporal para ver por dónde pasa el programa. Con práctica, aprenderás a «ejecutar» los programas en tu cabeza.</p>`,
      svg: traza,
    },
  ],
  figura: H.figura(S),
  video: { id: "HJPyzX6RCFY", titulo: "Instrucciones condicionales: «si condición entonces» y «si condición entonces y si no»", canal: "INTEF", vistas: 3706, busqueda: "condicionales si entonces si no scratch 3" },
  ejemplos: [
    { enunciado: "Haz que un botón «Jugar» empiece el juego: al pulsarlo, desaparece y el gato aparece.", pasos: ["Botón: «al hacer clic en ⚑» → mostrar. «al hacer clic en este objeto» → enviar «empezar», esconder.", "Gato: «al hacer clic en ⚑» → esconder.", "Gato: «al recibir empezar» → mostrar, ir a x: 0 y: 0, decir «¡Allá voy!»."], resultado: "El mensaje «empezar» coordina los dos objetos." },
    { enunciado: "Dibuja un hexágono regular de lado 60 con el lápiz.", pasos: ["Ángulo: 360 : 6 = 60°.", "«borrar todo», «bajar lápiz».", "«repetir 6»: «mover 60 pasos», «girar 60 grados».", "«subir lápiz»."], resultado: "Un hexágono cerrado con un solo bucle de 2 bloques." },
    { enunciado: "Un enemigo debe patrullar de izquierda a derecha durante todo el juego.", pasos: ["Es algo que dura siempre → «por siempre».", "Dentro: «mover 4 pasos», «rebotar si toca un borde».", "Antes del bucle: «fijar estilo de rotación a izquierda-derecha»."], resultado: "Patrulla sin fin y sin ponerse boca abajo." },
    { enunciado: "Programa un cuestionario que pregunte la capital de Francia hasta que se acierte.", pasos: ["«repetir hasta que ⟨respuesta = París⟩».", "Dentro: «preguntar ¿Capital de Francia? y esperar».", "Después del bucle: «decir ¡Correcto!»."], resultado: "Se repite la pregunta mientras la respuesta no sea París." },
    { enunciado: "Una puerta solo se abre si el jugador tiene la llave y la está tocando.", pasos: ["Condición doble: «⟨llave = 1⟩ y ⟨¿tocando Puerta?⟩».", "Por siempre: si se cumple, enviar «abrir puerta».", "La puerta, al recibir «abrir puerta», cambia al disfraz abierta."], resultado: "El operador «y» exige las dos condiciones a la vez." },
    { enunciado: "¿Cuántas veces dice «Hola» este programa: repetir 3 [repetir 4 [decir Hola 0,5 s]]? ¿Y si se añade un «decir Adiós» en el bucle exterior?", pasos: ["El interior se ejecuta completo en cada vuelta del exterior: 3 × 4 = 12 «Hola».", "El «Adiós» está en el exterior: 3 veces."], resultado: "12 «Hola» y 3 «Adiós»." },
  ],
  errores: [
    "Poner un «si» suelto fuera de un bucle y esperar que vigile todo el juego: solo comprueba una vez.",
    "Hacer un «repetir hasta que» en el que nada cambia dentro: el bucle no termina nunca.",
    "Inicializar variables dentro del bucle, como «dar a puntos el valor 0», que las reinicia en cada vuelta.",
    "Confundir «enviar» con «enviar y esperar»: con el primero, el programa no espera a que los demás terminen.",
    "Confundir «y» con «o»: «y» exige las dos condiciones; «o», al menos una.",
    "Tener dos programas en paralelo que cambian lo mismo a la vez, como la posición del objeto.",
  ],
  ejercicios: H.nivelar([
    ["¿Qué es un evento? Pon tres ejemplos de Scratch.", "Algo que ocurre y pone en marcha un programa. Ejemplos: hacer clic en la bandera, pulsar una tecla y recibir un mensaje."],
    ["Nombra los tres bucles de Scratch.", "«repetir n», «por siempre» y «repetir hasta que»."],
    ["¿Qué forma tienen las condiciones en Scratch y qué valores pueden dar?", "Forma hexagonal; solo pueden ser verdadero o falso."],
    ["¿Por qué no se puede encajar ningún bloque debajo de «por siempre»?", "Porque nunca termina, así que lo de debajo no se ejecutaría jamás."],
    ["¿Qué bucle usarías para la música de fondo de un juego? ¿Y para dibujar un pentágono?", "Para la música, «por siempre». Para el pentágono, «repetir 5»."],
    ["Explica la diferencia entre «si… entonces» y «si… entonces… si no».", "El primero hace algo solo si la condición es verdadera; el segundo tiene dos caminos y siempre ejecuta uno: el primero si es verdadera y el segundo si es falsa."],
    ["¿Qué bloques se usan para enviar y recibir mensajes?", "«enviar …» (o «enviar … y esperar») y el evento «al recibir …»."],
    ["Escribe dos condiciones de la categoría Sensores y dos de Operadores.", "Sensores: «¿tocando borde?», «¿tecla espacio presionada?». Operadores: «puntos > 10», «respuesta = sí»."],
    ["¿Qué ángulo hay que girar para dibujar un triángulo equilátero? ¿Y un octógono?", "Triángulo: 360 : 3 = 120°. Octógono: 360 : 8 = 45°."],
    ["¿Qué ocurre con todos los programas «al hacer clic en ⚑» al pulsar la bandera?", "Empiezan todos a la vez, en paralelo, en todos los objetos y el escenario."],
    ["Escribe un programa que haga parpadear un objeto 5 veces.", "«al hacer clic en ⚑» · «repetir 5»: «esconder», «esperar 0,3 s», «mostrar», «esperar 0,3 s»."],
    ["¿Cuántas veces se ejecuta «mover» en repetir 5 [repetir 8 [mover 10]]? ¿Cuántos pasos recorre?", "5 × 8 = 40 veces; 40 × 10 = 400 pasos."],
    ["Programa un objeto que caiga hasta tocar el suelo verde.", "«repetir hasta que ⟨¿tocando color verde?⟩»: «cambiar y en −5»."],
    ["Completa la tabla de verdad de «A o B».", "V o V = V; V o F = V; F o V = V; F o F = F. Solo es falso si las dos son falsas."],
    ["Escribe un programa que diga «Buenos días» si la hora es menor que 14 y «Buenas tardes» si no.", "«si ⟨(hora actual) < 14⟩ entonces» decir Buenos días; «si no» decir Buenas tardes. (La hora se obtiene con el sensor «hora actual».)"],
    ["Programa el movimiento con flechas izquierda y derecha dentro de un bucle.", "«por siempre»: «si ¿tecla flecha derecha presionada? entonces cambiar x en 5»; «si ¿tecla flecha izquierda presionada? entonces cambiar x en −5»."],
    ["Explica qué pasa si en un juego la condición «si toca Enemigo, restar vida» no está dentro de un bucle.", "Solo se comprueba una vez, al principio. Si el enemigo toca al jugador después, no se resta vida. Debe ir dentro de «por siempre»."],
    ["Escribe una condición que sea verdadera solo para los números del 1 al 10.", "«⟨n > 0⟩ y ⟨n < 11⟩». También «no ⟨n < 1⟩ y no ⟨n > 10⟩»."],
    ["¿Qué diferencia hay entre «enviar» y «enviar y esperar»? Pon un ejemplo en el que se note.", "«enviar» sigue enseguida; «enviar y esperar» espera a que terminen quienes lo reciben. En un diálogo, con «enviar» las frases de dos personajes se solaparían; con «enviar y esperar» salen por turnos."],
    ["Haz una traza: n = 0; repetir hasta que n > 12: n = n + 5. ¿Cuántas vueltas da y cuánto vale n al final?", "n vale 0 → 5 → 10 → 15. Da 3 vueltas y termina con n = 15."],
    ["Dibuja con bucles anidados una fila de 5 cuadrados de lado 30 separados.", "«repetir 5»: [«bajar lápiz», «repetir 4: mover 30, girar 90», «subir lápiz», «cambiar x en 40»]."],
    ["Busca el error: «repetir hasta que ⟨¿tocando Meta?⟩: decir Voy… 1 s». ¿Por qué no termina?", "Dentro del bucle el objeto no se mueve, así que nunca llega a tocar la meta. Hay que añadir «mover 5 pasos» dentro."],
    ["Programa un semáforo que cambie de verde a ámbar a rojo sin parar, con tiempos 5 s, 2 s y 5 s.", "«por siempre»: «cambiar disfraz a verde», «esperar 5», «cambiar disfraz a ámbar», «esperar 2», «cambiar disfraz a rojo», «esperar 5»."],
    ["Crea una nota en palabras con condicionales encadenados (suspenso, aprobado, notable, sobresaliente).", "si nota < 5 → suspenso; si no: si nota < 7 → aprobado; si no: si nota < 9 → notable; si no → sobresaliente. El orden de las preguntas es de menor a mayor."],
    ["Diseña con mensajes una historia de tres escenas en la que el escenario haga de director.", "Escenario: ⚑ · fondo 1 · enviar «escena1» y esperar · fondo 2 · enviar «escena2» y esperar · fondo 3 · enviar «escena3» y esperar · detener todos. Cada personaje programa «al recibir escenaN» con su parte."],
    ["Programa un juego de adivinar un número del 1 al 50 que diga «más alto» o «más bajo» hasta acertar.", "dar a secreto un número al azar entre 1 y 50 · repetir hasta que respuesta = secreto: preguntar «¿Número?»; si respuesta < secreto, decir «más alto»; si respuesta > secreto, decir «más bajo» · decir «¡Acertaste!»."],
    ["Explica por qué mover con «por siempre + si tecla presionada» es más suave que con el evento «al presionar tecla».", "El evento «al presionar tecla» depende de la repetición del teclado, que tiene un retraso al mantener pulsado. El bucle comprueba la tecla unas 30 veces por segundo y mueve en cada vuelta, sin retraso."],
    ["¿Cuántos cuadrados dibuja repetir 4 [repetir 3 [cuadrado; cambiar x en 40]; ir a x inicial; cambiar y en −40]? ¿Qué forma tienen juntos?", "4 × 3 = 12 cuadrados, organizados en una cuadrícula de 4 filas y 3 columnas."],
    ["Diseña la lógica de una alarma que suene si hay movimiento y es de noche, o si se pulsa el botón de pánico.", "Condición: «(movimiento y noche) o pánico». Por siempre: si se cumple, tocar sonido de alarma. Los paréntesis indican que primero se evalúa el «y»."],
    ["Dos programas en paralelo del mismo objeto: uno lo mueve a la derecha y otro a la izquierda a la misma velocidad. ¿Qué ocurre? ¿Cómo lo arreglarías?", "Los movimientos se anulan y el objeto apenas se mueve o tiembla. Se arregla usando un solo programa con condicionales que decida la dirección, o una variable de dirección."],
  ]),
  quiz: H.test([
    ["Un evento es…", ["algo que ocurre y pone en marcha un programa", "un tipo de bucle", "un error", "un disfraz"], "Tecla, clic, mensaje…"],
    ["Los bloques de evento tienen forma de…", ["sombrero", "C", "hexágono", "tapa"], "Inician pilas de bloques."],
    ["Al pulsar la bandera, los programas «al hacer clic en ⚑»…", ["empiezan todos a la vez", "empiezan de uno en uno", "solo empieza el del gato", "no empiezan"], "En paralelo."],
    ["Para que un objeto avise a otros se usa…", ["enviar un mensaje", "cambiar de disfraz", "un bucle", "esperar"], "Y los otros usan «al recibir»."],
    ["«enviar y esperar»…", ["espera a que terminen los que reciben", "envía dos mensajes", "espera 1 segundo", "no envía nada"], "Sirve para coordinar escenas."],
    ["Un bucle sirve para…", ["repetir instrucciones", "tomar decisiones", "enviar mensajes", "cambiar de fondo"], "Repetición."],
    ["«repetir 10» repite…", ["10 veces", "sin parar", "hasta tocar el borde", "1 vez"], "Número fijo."],
    ["«por siempre» termina…", ["al pulsar la señal roja o detener", "a las 100 vueltas", "solo", "al tocar el borde"], "No termina por sí mismo."],
    ["«repetir hasta que» se detiene cuando la condición es…", ["verdadera", "falsa", "cero", "un texto"], "Hasta que se cumpla."],
    ["repetir 3 [repetir 5 [mover]] ejecuta «mover»…", ["15 veces", "8 veces", "3 veces", "5 veces"], "3 × 5."],
    ["Para un pentágono regular se gira…", ["72°", "60°", "90°", "108°"], "360 : 5."],
    ["Las condiciones de Scratch tienen forma…", ["hexagonal", "redonda", "de sombrero", "de C"], "Booleanos."],
    ["«si… entonces… si no» ejecuta…", ["siempre uno de los dos caminos", "los dos caminos", "ninguno", "el primero dos veces"], "Según la condición."],
    ["«⟨A⟩ y ⟨B⟩» es verdadero si…", ["las dos son verdaderas", "al menos una es verdadera", "las dos son falsas", "A es falsa"], "Operador y."],
    ["«⟨A⟩ o ⟨B⟩» es falso solo si…", ["las dos son falsas", "las dos son verdaderas", "A es verdadera", "B es verdadera"], "Operador o."],
    ["«no ⟨tocando suelo⟩» es verdadero cuando…", ["el objeto no toca el suelo", "toca el suelo", "siempre", "nunca"], "Invierte el valor."],
    ["Para vigilar una colisión durante todo el juego, el «si» va dentro de…", ["por siempre", "repetir 1", "al recibir", "esperar"], "Comprueba continuamente."],
    ["«esperar hasta que ⟨¿tecla espacio presionada?⟩»…", ["pausa hasta que se pulse espacio", "repite sin parar", "envía un mensaje", "detiene todo"], "Útil para empezar el juego."],
    ["Seguir un programa paso a paso apuntando los valores es hacer una…", ["traza", "remezcla", "compilación", "animación"], "Herramienta de depuración."],
    ["Un bucle que nunca termina por error es un…", ["bucle infinito", "bucle anidado", "contador", "evento"], "La condición nunca se cumple."],
  ], 0),
  examen: H.test([
    ["n = 1; repetir hasta que n > 20: n = n · 2. Al final n vale…", ["32", "20", "16", "64"], "1, 2, 4, 8, 16, 32."],
    ["(edad > 11) y (edad < 15) es verdadero para…", ["12, 13 y 14", "11 a 15", "solo 13", "todas las edades"], "Las dos condiciones."],
    ["repetir 4 [repetir 6 [sumar 1 a n]] desde n = 0 deja n en…", ["24", "10", "6", "4"], "4 × 6."],
    ["Si «dar a puntos el valor 0» está dentro del bucle…", ["se reinicia en cada vuelta", "suma mejor", "no pasa nada", "da error"], "Va antes del bucle."],
    ["Para mover con flechas sin retraso se usa…", ["por siempre con si tecla presionada", "solo al presionar tecla", "repetir 1", "enviar mensaje"], "Bucle principal."],
    ["En un diálogo por turnos, el director usa…", ["enviar y esperar", "enviar", "por siempre", "detener todos"], "Espera a cada personaje."],
    ["«repetir hasta que ⟨tocando Meta⟩: decir Voy» no termina porque…", ["el objeto no se mueve", "falta un evento", "la meta no existe", "el bucle es anidado"], "Nada cambia dentro."],
    ["Para un rosetón de 8 cuadrados se gira entre cuadrados…", ["45°", "90°", "8°", "60°"], "360 : 8."],
  ], 2),
  feynman: ["Qué es la programación dirigida por eventos", "Cómo se coordinan varios objetos con mensajes", "Cuándo usar cada uno de los tres bucles de Scratch", "Cómo se combinan condiciones con y, o y no", "Por qué casi todos los juegos tienen un bucle por siempre con condicionales dentro"],
  mapa: H.mapa("EVENTOS, BUCLES Y CONDICIONALES", "var(--eso)", [
    ["Eventos", "bandera · teclas · mensajes", K.eventos],
    ["Bucles", "repetir · por siempre · hasta que", K.control],
    ["Condiciones", "sensores · comparar · y / o / no", K.sensores],
    ["Juntos", "bucle principal · trazas", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Evento", "Suceso que pone en marcha un programa."],
    ["Paralelo", "Varios programas ejecutándose a la vez."],
    ["Mensaje", "Aviso entre objetos: enviar y al recibir."],
    ["Enviar y esperar", "Espera a que terminen los que reciben."],
    ["repetir n", "Repite un número fijo de veces."],
    ["por siempre", "Repite sin fin; nada debajo."],
    ["repetir hasta que", "Repite hasta que la condición sea verdadera."],
    ["Bucles anidados", "Repeticiones totales = exterior × interior."],
    ["Condición", "Pregunta verdadera o falsa; bloque hexagonal."],
    ["si… si no", "Dos caminos; siempre se ejecuta uno."],
    ["y / o / no", "Ambas · al menos una · lo contrario."],
    ["Traza", "Seguir el programa paso a paso anotando valores."],
  ],
  glosario: [
    ["Evento", "Suceso (tecla, clic, mensaje, sonido) que pone en marcha un programa."],
    ["Programación dirigida por eventos", "Forma de programar en la que el programa espera sucesos y reacciona a ellos."],
    ["Paralelismo", "Ejecución de varios programas al mismo tiempo."],
    ["Mensaje", "Aviso que un objeto envía a todo el proyecto para que otros reaccionen."],
    ["Bucle", "Estructura que repite un grupo de instrucciones."],
    ["Bucle infinito", "Bucle que no termina nunca, a propósito o por error."],
    ["Bucle anidado", "Bucle colocado dentro de otro bucle."],
    ["Condición", "Expresión que solo puede ser verdadera o falsa."],
    ["Booleano", "Valor o bloque que solo puede ser verdadero o falso."],
    ["Condicional", "Estructura que ejecuta unas instrucciones u otras según una condición."],
    ["Operador de comparación", "Operador que compara dos valores: mayor que, menor que o igual a."],
    ["Operador lógico", "Operador que combina condiciones: y, o, no."],
    ["Tabla de verdad", "Tabla que muestra el resultado de un operador lógico para todas las combinaciones."],
    ["Bucle principal", "Bucle «por siempre» que controla un juego comprobando continuamente lo que ocurre."],
    ["Traza", "Seguimiento paso a paso de un programa anotando el valor de sus variables."],
  ],
  situacion: {
    titulo: "Semáforo inteligente para el paso de peatones",
    reto: "El ayuntamiento quiere probar un semáforo de peatones que se ponga verde cuando alguien pulse el botón y avise con sonido a las personas ciegas. Vuestro equipo programará la simulación en Scratch.",
    pasos: [
      "Dibujad el semáforo de coches, el de peatones con sus disfraces y un botón de petición.",
      "Diseñad en papel el diagrama de flujo: estado normal, petición, cambio a ámbar y rojo para coches, verde para peatones con pitidos y vuelta al estado normal.",
      "Programad el botón con un evento de clic que envíe un mensaje de petición.",
      "Programad los semáforos con bucles, esperas, condicionales y mensajes, y añadid una cuenta atrás.",
      "Probad situaciones raras (pulsar varias veces, pulsar durante el verde) y depurad con trazas.",
    ],
    producto: "Simulación en Scratch del semáforo inteligente con su diagrama de flujo y un informe de pruebas.",
    evaluacion: [
      "Usa correctamente eventos y mensajes para coordinar los objetos.",
      "Emplea bucles y condicionales adecuados, sin bucles infinitos involuntarios.",
      "Tiene en cuenta la accesibilidad con avisos sonoros.",
      "Documenta las pruebas y los errores corregidos.",
    ],
  },
  familias: ["Buscad juntos aparatos de casa que reaccionen a eventos: el timbre, el microondas, el mando de la tele.", "Jugad a «Simón dice» con condiciones: «si llevas algo azul y estás de pie, levanta la mano».", "Contad cuántos pasos de baile se repiten en una canción con estribillo.", "Pedid que os explique un juego de Scratch y señale dónde hay un bucle y un condicional."],
  profesores: {
    saberes: H.saberes("Programación dirigida por eventos; sincronización mediante mensajes y ejecución en paralelo; estructuras de repetición (fija, infinita y condicional) y anidamiento; expresiones booleanas, operadores de comparación y lógicos; estructuras de selección simple, doble y encadenada; depuración mediante trazas", "programació d'esdeveniments, estructures de control (repetició i selecció), lògica booleana i depuració de programes."),
    ideas: [
      "Juego desenchufado «Simón dice» con operadores lógicos para practicar y, o y no.",
      "Reto de rosetones con bucles anidados y la extensión Lápiz, enlazando con los ángulos de Matemáticas.",
      "Teatro de mensajes: cada alumno es un objeto y reacciona a los mensajes que se «envían» en voz alta.",
      "Hojas de trazas en parejas: uno ejecuta el programa en papel y el otro lo comprueba en Scratch.",
      "Simulación del semáforo de peatones con atención a la accesibilidad.",
    ],
  },
  fuentes: [H.RD, H.DEC, H.SCRATCH, H.wiki("Programación dirigida por eventos", "Programaci%C3%B3n_dirigida_por_eventos"), H.wiki("Bucle (programación)", "Bucle_(programaci%C3%B3n)"), H.wiki("Tabla de verdad", "Tabla_de_verdad")],
  revisado: H.REV,
};
