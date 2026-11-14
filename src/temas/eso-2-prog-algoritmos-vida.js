// Programación y robótica 2º ESO · Algoritmos en la vida diaria. Tema nivel libro (lote 8).
// Contenido y dibujos propios: esquemas de _eso2L8 y dibujos de la versión anterior del tema.
const H = require("./_eso2L8");
const S = "prog-algoritmos-vida";
const vPseudo = { id: "NJavXHU5MW8", titulo: "¿Qué es el pseudocódigo en programación? Ejemplos básicos para empezar", canal: "Conquer Blocks", vistas: 64159, busqueda: "pseudocódigo para principiantes" };
const vDesc = { id: "AeoMyotXSm8", titulo: "Descomposición de problemas", canal: "Pensamiento Computacional", vistas: 1325, busqueda: "pensamiento computacional descomposición patrones abstracción" };

const rasgos = H.radial("Características de un buen algoritmo: preciso, ordenado, finito, con entrada, con salida y eficaz", "ALGORITMO", ["Preciso", "Ordenado", "Finito", "Con entrada", "Con salida", "Eficaz"], "var(--pen)");
const diarios = H.cajas("Algoritmos de la vida diaria: receta, ruta del navegador, lavadora, montaje de un mueble, primeros auxilios y búsqueda en internet", [
  ["Receta", "pasos de cocina", "var(--red)"],
  ["Navegador GPS", "calcula la ruta", "var(--pen)"],
  ["Lavadora", "programa de lavado", "var(--inf)"],
  ["Montar un mueble", "hoja de instrucciones", "var(--sun)"],
  ["Primeros auxilios", "protocolo PAS", "var(--leaf)"],
  ["Buscador", "ordena resultados", "var(--bac)"],
], "Algoritmos por todas partes");
const formas = H.cajas("Cuatro formas de representar un algoritmo: lenguaje natural, pseudocódigo, diagrama de flujo y bloques o código", [
  ["Lenguaje natural", "frases normales", "var(--muted)"],
  ["Pseudocódigo", "frases cortas y reglas", "var(--pen)"],
  ["Diagrama de flujo", "símbolos y flechas", "var(--sun)"],
  ["Programa", "bloques o código", "var(--leaf)"],
], "¿Cómo se escribe?");
const pseudo = H.codigo("Pseudocódigo para preparar un vaso de cacao: inicio, calentar la leche, si está muy caliente esperar, echar cacao, repetir remover diez veces y fin", [
  ["INICIO", 0, H.PS.clave],
  ["calentar leche 1 minuto", 1],
  ["SI leche muy caliente ENTONCES", 1, H.PS.clave],
  ["esperar 2 minutos", 2],
  ["FIN SI", 1, H.PS.clave],
  ["echar 2 cucharadas de cacao", 1],
  ["REPETIR 10 VECES", 1, H.PS.clave],
  ["remover una vuelta", 2],
  ["FIN REPETIR", 1, H.PS.clave],
  ["FIN", 0, H.PS.clave],
], "Pseudocódigo: un vaso de cacao");
const simbolos = H.tablaSvg("Símbolos del diagrama de flujo: óvalo para inicio y fin, rectángulo para acciones, rombo para decisiones, paralelogramo para entrada y salida, y flechas para el orden", ["Símbolo", "Significa"], [["Óvalo", "inicio o fin"], ["Rectángulo", "acción o proceso"], ["Rombo", "pregunta: sí o no"], ["Paralelogramo", "entrada o salida de datos"], ["Flecha", "orden de los pasos"]]);
const secuencia = H.flujo("Diagrama de flujo de una secuencia: inicio, coger el cepillo, poner pasta, cepillar dos minutos, enjuagar y fin", [["Inicio", "ini"], ["Coger el cepillo", "proc"], ["Poner pasta", "proc"], ["Cepillar 2 minutos", "proc"], ["Enjuagar", "proc"], ["Fin", "ini"]], "Secuencia: lavarse los dientes");
const repeticion = H.flujo("Diagrama de flujo con repetición: inicio, ¿quedan platos?, si sí lavar un plato y volver a preguntar, si no fin", [["Inicio", "ini"], ["¿Quedan platos sucios?", "dec", "no: fin", "sí ↓"], ["Lavar un plato", "proc"], ["Dejarlo en el escurridor", "proc"]], "Repetición: fregar los platos", { vuelta: [3, 1], etiqueta: "" });
const variables = H.codigo("Algoritmo con variables: contar los pasos de un paseo con un contador que empieza en cero y suma uno en cada paso hasta llegar a casa", [
  ["pasos ← 0", 0, H.PS.ini],
  ["REPETIR HASTA llegar a casa", 0, H.PS.clave],
  ["dar un paso", 1],
  ["pasos ← pasos + 1", 1, H.PS.ok],
  ["FIN REPETIR", 0, H.PS.clave],
  ["MOSTRAR pasos", 0, H.PS.ini],
  ["# pasos es una variable: guarda un dato", 0, H.PS.com],
], "Datos que cambian: variables");
const buscar = H.compara("Dos algoritmos para encontrar una palabra en el diccionario: mirar página a página o abrir por la mitad y descartar la mitad cada vez", ["Página a página", "var(--red)", ["empieza en la 1", "mira una a una", "hasta 1.000 pasos", "lento pero sencillo"]], ["Por la mitad", "var(--leaf)", ["abre por el centro", "¿antes o después?", "descarta la mitad", "unos 10 pasos"]], "Mismo problema, distinta eficiencia");
const ordenar = H.flechas("Ordenar cartas por inserción: coger una carta, compararla con las de la mano, colocarla en su sitio y repetir con la siguiente", ["Coge la siguiente carta del montón", "Compárala con las de tu mano, de derecha a izquierda", "Insértala en su sitio", "Repite hasta que no queden cartas"], "Algoritmo de ordenación");
const decisiones = H.comparar("Algoritmos que deciden por nosotros: ventajas como ahorrar tiempo y riesgos como los sesgos o la burbuja de filtros", [
  ["Ventajas", ["recomiendan rápido", "detectan fraudes", "ayudan a médicos"], "var(--leaf)"],
  ["Riesgos", ["sesgos injustos", "burbuja de filtros", "enganche"], "var(--red)"],
], "Algoritmos en las redes");

module.exports = {
  materia: H.MATERIA,
  curso: H.CURSO,
  titulo: "Algoritmos en la vida diaria",
  minutos: 105,
  objetivos: [
    "Definir qué es un algoritmo y reconocer sus características",
    "Identificar algoritmos en situaciones de la vida cotidiana",
    "Representar algoritmos en lenguaje natural, pseudocódigo y diagramas de flujo",
    "Usar las estructuras de secuencia, decisión y repetición, y las variables",
    "Aplicar las estrategias del pensamiento computacional para resolver problemas",
    "Comparar algoritmos por su eficiencia y reflexionar sobre los algoritmos que deciden por nosotros",
  ],
  claves: ["algoritmo", "secuencia", "decisión", "repetición", "variable", "pseudocódigo", "diagrama de flujo", "descomposición", "patrones", "abstracción", "eficiencia", "búsqueda", "ordenación", "sesgo"],
  pregunta: {
    texto: "¿Has seguido hoy algún algoritmo sin darte cuenta?",
    respuesta: "Casi seguro que sí. Un <mark>algoritmo</mark> es una lista ordenada de pasos para conseguir algo: la forma en que te vistes, el camino al instituto, la receta del desayuno o cómo resuelves una suma con llevadas. Además, muchos algoritmos de ordenador trabajan para ti: el que calcula la ruta del autobús, el que ordena los mensajes del móvil o el que te recomienda canciones.",
  },
  lectura: {
    titulo: "El algoritmo de las vacunas y el del cubo de Rubik",
    html: `<p>En 1974, el profesor húngaro <b>Ernő Rubik</b> inventó un cubo de colores para explicar a sus alumnos cómo se mueven las piezas en el espacio. Tardó un mes entero en resolverlo él mismo. Hoy hay jóvenes que lo resuelven en menos de cinco segundos. ¿Son genios? En parte, pero sobre todo han aprendido <b>algoritmos</b>: secuencias de giros que, aplicadas en el orden correcto, colocan las piezas sin desordenar las demás.</p>
<p>Los algoritmos también salvan vidas. Cuando alguien se desmaya en la calle, los servicios de emergencia siguen un protocolo: comprobar si responde, llamar al 112, comprobar si respira y, si no respira, empezar las compresiones en el pecho a un ritmo de 100 a 120 por minuto. Ese protocolo está diseñado para que cualquier persona, incluso nerviosa, sepa qué hacer en cada momento.</p>
<p>Un algoritmo, en el fondo, es <b>conocimiento empaquetado</b>: alguien pensó una vez cómo resolver un problema y lo escribió paso a paso para que otros, personas o máquinas, puedan repetirlo. En este tema aprenderás a descubrir algoritmos a tu alrededor y a escribir los tuyos.</p>`,
  },
  bloques: [
    {
      html: `<h3>2.1 ¿Qué es un algoritmo?</h3><p>Un <mark>algoritmo</mark> es una <b>secuencia ordenada y finita de pasos</b> que permite resolver un problema o realizar una tarea. La palabra viene del nombre del matemático persa <b>al-Juarismi</b>, que en el siglo IX escribió libros con métodos paso a paso para hacer cálculos.</p><p>Todo algoritmo tiene tres partes:</p><p>• <b>Entrada</b>: los datos o materiales de los que partimos (los ingredientes de una receta, los números de una suma).<br>• <b>Proceso</b>: los pasos que transforman la entrada (pelar, freír, batir; sumar las unidades, llevar…).<br>• <b>Salida</b>: el resultado final (la tortilla, el resultado de la suma).</p><p>Un algoritmo no es todavía un programa: es la <b>idea</b> de cómo resolver el problema. Se puede escribir en un papel, explicar con palabras o dibujar. Cuando lo traducimos a un lenguaje que entiende una máquina, se convierte en un <b>programa</b>.</p>`,
      svg: H.viejo(S, 0),
    },
    {
      html: `<h3>2.2 Las características de un buen algoritmo</h3><p>No cualquier lista de pasos es un buen algoritmo. Debe cumplir estas características:</p><p>• <b>Preciso</b>: cada paso se entiende de una sola manera. «Echa un poco de sal» no es preciso; «echa media cucharadita de sal» sí.<br>• <b>Ordenado</b>: los pasos tienen un orden concreto. No se puede freír la patata antes de pelarla.<br>• <b>Finito</b>: termina después de un número limitado de pasos. Un algoritmo que no acaba nunca no resuelve nada.<br>• <b>Definido</b>: si se repite con los mismos datos de entrada, da siempre el mismo resultado.<br>• Tiene <b>entrada</b> y <b>salida</b> claras.<br>• Es <b>eficaz</b>: resuelve de verdad el problema.</p><p>Además, se valora que sea <b>eficiente</b> (que use pocos pasos o pocos recursos) y <b>legible</b> (que otra persona lo entienda). Cuando escribas un algoritmo, repasa esta lista como si fueras un inspector de calidad.</p>`,
      svg: rasgos,
    },
    {
      html: `<h3>2.3 Algoritmos en la vida diaria</h3><p>Estamos rodeados de algoritmos, aunque no siempre se llamen así:</p><p>• Una <b>receta de cocina</b> indica ingredientes (entrada), pasos (proceso) y plato (salida).<br>• Las <b>instrucciones de montaje</b> de un mueble son un algoritmo con dibujos.<br>• El <b>programa de la lavadora</b> sigue pasos fijos: llenar, lavar, aclarar, centrifugar.<br>• El <b>navegador GPS</b> usa un algoritmo para calcular el camino más corto entre dos puntos.<br>• Los <b>protocolos de primeros auxilios</b>, como el PAS (proteger, avisar, socorrer), son algoritmos para emergencias.<br>• Los <b>buscadores de internet</b> usan algoritmos para ordenar millones de páginas en una fracción de segundo.</p><p>Incluso las operaciones que aprendiste en Primaria (sumar con llevadas, dividir) son algoritmos: métodos que funcionan siempre, con cualquier número, si sigues los pasos. Descubrir algoritmos a tu alrededor es el primer paso para aprender a diseñarlos.</p>`,
      svg: diarios,
    },
    {
      html: `<h3>2.4 Cómo se representa un algoritmo</h3><p>Un mismo algoritmo se puede escribir de varias formas, cada una con sus ventajas:</p><p>• En <b>lenguaje natural</b>: con frases normales, como una receta. Es fácil de entender, pero a veces resulta ambiguo o demasiado largo.<br>• En <mark>pseudocódigo</mark>: frases cortas con unas pocas palabras clave (SI, ENTONCES, REPETIR, MIENTRAS…). Es casi un programa, pero sin las reglas estrictas de un lenguaje concreto.<br>• Con un <mark>diagrama de flujo</mark>: un dibujo con símbolos unidos por flechas. Permite ver de un vistazo el camino que siguen los pasos y las decisiones.<br>• Como <b>programa</b>: con bloques de Scratch o con código de texto, listo para que lo ejecute una máquina.</p><p>Los programadores suelen empezar con lenguaje natural o pseudocódigo para aclarar sus ideas, dibujar un diagrama si hay muchas decisiones y, por último, escribir el programa.</p>`,
      svg: formas,
    },
    {
      html: `<h3>2.5 El pseudocódigo</h3><p>El <mark>pseudocódigo</mark> («falso código») es una forma de escribir algoritmos a medio camino entre el idioma humano y un lenguaje de programación. No lo ejecuta ninguna máquina: sirve para <b>pensar y comunicar</b> la solución.</p><p>Se escribe con frases cortas, una acción por línea, y usa palabras clave en mayúsculas para las estructuras:</p><p>• <b>INICIO</b> y <b>FIN</b> marcan el principio y el final.<br>• <b>SI</b> … <b>ENTONCES</b> … <b>SI NO</b> … <b>FIN SI</b>, para las decisiones.<br>• <b>REPETIR</b> n <b>VECES</b> o <b>MIENTRAS</b> … <b>FIN MIENTRAS</b>, para las repeticiones.<br>• <b>LEER</b> o <b>PEDIR</b> para la entrada de datos y <b>MOSTRAR</b> o <b>ESCRIBIR</b> para la salida.</p><p>Las líneas que están «dentro» de una estructura se escriben con <b>sangría</b>, desplazadas a la derecha, para que se vea qué pasos se repiten o dependen de una condición. Esta costumbre es la misma que se usa en Python.</p>`,
      svg: pseudo,
      video: vPseudo,
    },
    {
      html: `<h3>2.6 Los diagramas de flujo</h3><p>Un <mark>diagrama de flujo</mark> representa un algoritmo con símbolos geométricos unidos por flechas. Cada símbolo tiene un significado:</p><p>• <b>Óvalo</b>: inicio y fin del algoritmo.<br>• <b>Rectángulo</b>: una acción o proceso («calentar la leche»).<br>• <b>Rombo</b>: una decisión, una pregunta que se responde con sí o no («¿está muy caliente?»). Del rombo salen dos flechas.<br>• <b>Paralelogramo</b>: entrada o salida de datos («pedir la edad», «mostrar el resultado»).<br>• <b>Flechas</b>: indican el orden en que se recorren los pasos.</p><p>Para dibujarlo bien: empieza siempre con un óvalo de inicio, escribe dentro de cada símbolo una frase corta, haz que el recorrido vaya de arriba abajo, comprueba que cada rombo tiene sus dos salidas etiquetadas y termina con un óvalo de fin. Si las flechas vuelven hacia atrás, hay una repetición.</p>`,
      svg: simbolos,
    },
    {
      html: `<h3>2.7 La secuencia</h3><p>La estructura más sencilla es la <mark>secuencia</mark>: los pasos se ejecutan <b>uno detrás de otro</b>, en el orden en que están escritos, y cada uno solo una vez. En un diagrama de flujo se ve como una columna de rectángulos unidos por flechas.</p><p>En una secuencia, el <b>orden es fundamental</b>. «Ponerse los calcetines» y «ponerse los zapatos» son las mismas dos acciones, pero si cambias el orden el resultado es absurdo. En programación pasa igual: si un personaje primero dice «¡He llegado!» y después camina, el mensaje sale antes de tiempo.</p><p>Muchos errores de los programas son simplemente <b>pasos desordenados</b> o <b>pasos que faltan</b>. Para comprobar una secuencia, sigue los pasos uno a uno imaginando que eres la máquina y pregúntate: ¿tengo todo lo necesario para hacer este paso?, ¿he olvidado algo?</p>`,
      svg: secuencia,
    },
    {
      html: `<h3>2.8 La decisión</h3><p>A veces lo que hay que hacer depende de cómo esté la situación. La estructura de <mark>decisión</mark> o <b>condicional</b> hace una pregunta, la <b>condición</b>, y elige un camino u otro según la respuesta sea sí (verdadera) o no (falsa).</p><p>En pseudocódigo se escribe: SI el semáforo está en verde ENTONCES cruzar; SI NO esperar. En un diagrama de flujo, la condición va en un <b>rombo</b> del que salen dos flechas.</p><p>Hay tres formas habituales:</p><p>• <b>Simple</b>: si se cumple, se hace algo; si no, no se hace nada («si llueve, coge el paraguas»).<br>• <b>Doble</b>: un camino para el sí y otro para el no («si tienes 12 años o más, entrada normal; si no, entrada infantil»).<br>• <b>Múltiple</b> o encadenada: varias preguntas seguidas («si la nota es menor que 5, suspenso; si no, si es menor que 7, aprobado…»).</p><p>Las condiciones se construyen con comparaciones (mayor que, menor que, igual a) y se pueden combinar con <b>y</b>, <b>o</b> y <b>no</b>.</p>`,
      svg: H.viejo(S, 3),
    },
    {
      html: `<h3>2.9 La repetición</h3><p>Cuando un paso o un grupo de pasos se hace varias veces, en lugar de escribirlo una y otra vez usamos una estructura de <mark>repetición</mark>, también llamada <b>bucle</b>. Hay dos tipos principales:</p><p>• <b>Repetir un número fijo de veces</b>: «remueve 10 veces», «da 4 vueltas a la pista». Sabemos de antemano cuántas repeticiones hay.<br>• <b>Repetir mientras (o hasta que) se cumpla una condición</b>: «friega platos mientras queden platos sucios», «camina hasta llegar a la puerta». No sabemos cuántas veces se repetirá: depende de la situación.</p><p>En un diagrama de flujo, la repetición se reconoce porque hay una <b>flecha que vuelve hacia atrás</b>, hasta un rombo que pregunta si hay que seguir. Es muy importante que dentro del bucle pase algo que acabe haciendo falsa la condición; si no, el bucle no terminaría nunca y el algoritmo no sería finito. Fregar un plato hace que quede un plato menos: por eso el bucle acaba.</p>`,
      svg: repeticion,
    },
    {
      html: `<h3>2.10 Datos que cambian: las variables</h3><p>Muchos algoritmos necesitan <b>recordar datos</b> mientras se ejecutan: cuántos pasos llevamos, cuántos puntos tiene un jugador, cuál es el número más alto encontrado. Para eso se usan las <mark>variables</mark>.</p><p>Una variable es como una <b>caja con nombre</b> donde se guarda un valor que puede cambiar. En pseudocódigo se suele escribir con una flecha: <b>pasos ← 0</b> significa «guarda 0 en la caja llamada pasos». Después, <b>pasos ← pasos + 1</b> significa «coge lo que hay en pasos, súmale 1 y vuelve a guardarlo».</p><p>Una variable que aumenta de uno en uno se llama <b>contador</b>. Una variable que va sumando cantidades (como el total de la compra) se llama <b>acumulador</b>. Antes de usar una variable hay que darle un <b>valor inicial</b>; si olvidas poner el contador a 0 al principio, el resultado será incorrecto.</p>`,
      svg: variables,
    },
    {
      html: `<h3>2.11 El pensamiento computacional</h3><p>El <mark>pensamiento computacional</mark> es la forma de pensar que usan los programadores para resolver problemas, y sirve también fuera de la informática. Se basa en cuatro estrategias:</p><p>• <b>Descomposición</b>: dividir un problema grande en partes más pequeñas y fáciles. Organizar una fiesta se divide en invitaciones, comida, música y decoración.<br>• <b>Reconocimiento de patrones</b>: buscar lo que se repite o se parece a algo que ya conocemos. Si ya sabes calcular el área de un rectángulo, puedes usarlo para muchas figuras.<br>• <b>Abstracción</b>: quedarse con lo importante e ignorar los detalles que no influyen. Un mapa del metro no muestra las calles, solo las estaciones y las líneas.<br>• <b>Algoritmos</b>: escribir los pasos ordenados de la solución.</p><p>Estas estrategias no se usan en orden fijo: se combinan y se repiten. Cuanto más practiques, más fácil te resultará enfrentarte a problemas nuevos, en programación, en matemáticas o en la vida diaria.</p>`,
      svg: H.viejo(S, 6),
      video: vDesc,
    },
    {
      html: `<h3>2.12 Algoritmos de búsqueda</h3><p>Buscar información es una de las tareas más frecuentes de los ordenadores. Imagina que tienes que encontrar la palabra «murciélago» en un diccionario de 1.000 páginas. Hay dos algoritmos posibles:</p><p>• <b>Búsqueda secuencial</b>: mirar página a página desde el principio. Es sencillo y funciona aunque la lista esté desordenada, pero puede necesitar hasta 1.000 pasos.<br>• <b>Búsqueda binaria</b>: abrir por la mitad, mirar si la palabra está antes o después, descartar la mitad que no sirve y repetir con la otra mitad. Como cada paso elimina la mitad de las páginas, bastan unos <b>10 pasos</b> (1.000 → 500 → 250 → 125 → … → 1).</p><p>La búsqueda binaria es muchísimo más rápida, pero solo funciona si los datos están <b>ordenados</b>, como en un diccionario o una lista de nombres por orden alfabético. Es la estrategia del juego «adivina el número del 1 al 100»: si preguntas siempre por el número del medio, lo aciertas en 7 intentos como mucho.</p>`,
      svg: buscar,
    },
    {
      html: `<h3>2.13 Algoritmos de ordenación y eficiencia</h3><p>Para poder buscar rápido, primero hay que <b>ordenar</b>. Hay muchos algoritmos de ordenación. Uno muy natural es el de <b>inserción</b>, el que usamos al ordenar las cartas de una baraja en la mano: se coge cada carta nueva y se coloca en su sitio entre las que ya están ordenadas. Otro es el de la <b>burbuja</b>: se comparan los elementos de dos en dos y se intercambian si están desordenados, repitiendo hasta que no haya cambios.</p><p>Un mismo problema puede resolverse con varios algoritmos correctos, pero no todos son igual de buenos. La <mark>eficiencia</mark> mide cuántos pasos o cuántos recursos (tiempo, memoria, energía) necesita un algoritmo. Con 10 datos casi no se nota la diferencia; con millones de datos, como los que maneja un buscador, un algoritmo eficiente puede tardar un segundo y otro ineficiente, días.</p><p>Una forma sencilla de comparar es <b>contar los pasos</b> en el peor caso: en una lista de 1.000 nombres, la búsqueda secuencial puede necesitar 1.000 comparaciones y la binaria, unas 10. Por eso los informáticos no se conforman con que un algoritmo funcione: también buscan que sea rápido y ahorre recursos.</p>`,
      svg: ordenar,
    },
    {
      html: `<h3>2.14 Algoritmos que deciden por nosotros</h3><p>Hoy muchos algoritmos toman decisiones que nos afectan: qué vídeos aparecen en una red social, qué anuncios vemos, qué ruta nos recomienda el navegador o qué canciones suenan en una lista automática. Algunos aprenden de nuestros datos: son los sistemas de <b>inteligencia artificial</b>.</p><p>Tienen ventajas: ahorran tiempo, detectan fraudes con tarjetas o ayudan a los médicos a analizar radiografías. Pero también tienen <b>riesgos</b>:</p><p>• <b>Sesgos</b>: si un algoritmo aprende de datos injustos, repetirá esas injusticias.<br>• <b>Burbuja de filtros</b>: si solo te muestran lo que ya te gusta, dejas de ver otras opiniones.<br>• <b>Enganche</b>: algunos están diseñados para que pases el máximo tiempo posible en la pantalla.</p><p>Detrás de cada algoritmo hay personas que deciden qué es importante. Por eso es bueno preguntarse: ¿por qué me muestra esto?, ¿qué datos usa?, ¿quién gana con ello? Entender los algoritmos te ayuda a usarlos con espíritu crítico.</p>`,
      svg: decisiones,
    },
  ],
  figura: H.figura(S),
  video: { id: "FS9u9cIGf3o", titulo: "Definición y tipos | Introducción a los algoritmos", canal: "Programación Para Todos", vistas: 139883, busqueda: "algoritmo explicación sencilla ejemplos" },
  ejemplos: [
    { enunciado: "Escribe en pseudocódigo un algoritmo para regar una planta solo si la tierra está seca.", pasos: ["Entrada: tocar la tierra.", "Decisión simple: SI la tierra está seca ENTONCES regar con un vaso de agua.", "FIN SI. Si no está seca, no se hace nada."], resultado: "INICIO · tocar la tierra · SI está seca ENTONCES regar · FIN SI · FIN." },
    { enunciado: "Dibuja con palabras el diagrama de flujo para saber si un número es positivo, negativo o cero.", pasos: ["Óvalo de inicio y paralelogramo «pedir número n».", "Rombo «¿n > 0?»: si sí, «mostrar positivo».", "Si no, otro rombo «¿n < 0?»: si sí, «mostrar negativo»; si no, «mostrar cero».", "Óvalo de fin."], resultado: "Decisión múltiple con dos rombos encadenados." },
    { enunciado: "Calcula la suma de los números del 1 al 5 con un algoritmo con contador y acumulador.", pasos: ["n ← 1, suma ← 0.", "REPETIR 5 VECES: suma ← suma + n; n ← n + 1.", "Traza: suma vale 1, 3, 6, 10, 15.", "MOSTRAR suma."], resultado: "La suma es 15." },
    { enunciado: "Aplica la descomposición al problema «organizar una excursión de clase».", pasos: ["Parte 1: elegir el destino y la fecha.", "Parte 2: transporte y presupuesto.", "Parte 3: autorizaciones de las familias.", "Parte 4: comida y material.", "Cada parte se resuelve con su propio algoritmo."], resultado: "Un problema grande dividido en cuatro subproblemas más fáciles." },
    { enunciado: "Adivina un número del 1 al 100 con búsqueda binaria. El número secreto es 37.", pasos: ["¿Es 50? Más bajo → 1-49.", "¿Es 25? Más alto → 26-49.", "¿Es 37? ¡Sí!"], resultado: "Se acierta en 3 preguntas; nunca hacen falta más de 7." },
    { enunciado: "Este algoritmo no termina: «n ← 1; MIENTRAS n ≠ 10: n ← n + 2». ¿Por qué? Corrígelo.", pasos: ["Traza: n vale 1, 3, 5, 7, 9, 11, 13…", "n siempre es impar y nunca vale 10, así que la condición nunca deja de cumplirse.", "Corrección: MIENTRAS n < 10, o empezar con n ← 0."], resultado: "Bucle infinito; se corrige cambiando la condición a n < 10." },
  ],
  errores: [
    "Escribir pasos ambiguos como «echa un poco» o «espera un rato»: el algoritmo debe ser preciso.",
    "Olvidar pasos que a una persona le parecen evidentes, como abrir la tapa o encender el fuego.",
    "Dibujar un rombo de decisión con una sola salida: siempre tiene dos, sí y no.",
    "Crear bucles que no terminan porque dentro no cambia nada que haga falsa la condición.",
    "Usar una variable sin darle un valor inicial, como un contador que no empieza en 0.",
    "Pensar que solo hay una forma correcta de resolver un problema: puede haber varios algoritmos, unos más eficientes que otros.",
  ],
  ejercicios: H.nivelar([
    ["Define algoritmo y explica de dónde viene la palabra.", "Un algoritmo es una secuencia ordenada y finita de pasos que resuelve un problema. Viene del nombre del matemático persa al-Juarismi (siglo IX)."],
    ["Escribe cuatro algoritmos que uses en tu vida diaria.", "Por ejemplo: preparar el desayuno, ir al instituto, lavarse las manos y hacer una división. Todos son pasos ordenados con un resultado."],
    ["Identifica entrada, proceso y salida en el algoritmo de hacer palomitas de microondas.", "Entrada: bolsa de palomitas. Proceso: meterla en el microondas, programar 3 minutos y esperar. Salida: palomitas hechas."],
    ["¿Qué significa que un algoritmo sea finito? Pon un ejemplo de algo que no lo es.", "Que termina después de un número limitado de pasos. No es finito, por ejemplo, «cuenta números de uno en uno para siempre»: nunca llega a un final ni da un resultado."],
    ["Dibuja los símbolos del diagrama de flujo y escribe para qué sirve cada uno.", "Óvalo: inicio y fin. Rectángulo: acción. Rombo: decisión (sí/no). Paralelogramo: entrada o salida de datos. Flechas: orden."],
    ["Reescribe de forma precisa: «hierve agua un rato y echa algo de pasta».", "«Pon 1 litro de agua en una olla, caliéntala hasta que hierva, echa 100 g de pasta y cuécela 10 minutos»."],
    ["Nombra las tres estructuras básicas de los algoritmos.", "Secuencia (pasos en orden), decisión (elegir según una condición) y repetición (repetir pasos)."],
    ["¿Qué es el pseudocódigo y para qué sirve?", "Una forma de escribir algoritmos con frases cortas y palabras clave (SI, REPETIR…). Sirve para pensar y comunicar la solución antes de programarla."],
    ["Nombra las cuatro estrategias del pensamiento computacional.", "Descomposición, reconocimiento de patrones, abstracción y algoritmos."],
    ["¿Qué es una variable? Pon un ejemplo de un juego.", "Una caja con nombre que guarda un dato que puede cambiar. Ejemplo: «vidas», que empieza en 3 y baja al chocar con un enemigo."],
    ["Escribe en pseudocódigo un algoritmo para cruzar un paso de peatones con semáforo.", "INICIO · MIENTRAS el semáforo esté en rojo: esperar · FIN MIENTRAS · mirar a ambos lados · cruzar · FIN."],
    ["Ordena estos pasos para enviar una carta: escribir la dirección, echar al buzón, escribir la carta, meterla en el sobre, pegar el sello.", "Escribir la carta, meterla en el sobre, escribir la dirección, pegar el sello y echarla al buzón."],
    ["Escribe un algoritmo con decisión doble para decidir qué ponerte según la temperatura (umbral 18 °C).", "LEER temperatura · SI temperatura < 18 ENTONCES ponerse chaqueta · SI NO ponerse camiseta · FIN SI."],
    ["Escribe un algoritmo con repetición fija para dibujar un triángulo equilátero.", "REPETIR 3 VECES: avanzar 10 cm, girar 120°. FIN REPETIR. Los giros suman 360°."],
    ["Haz la traza: «x ← 2; REPETIR 4 VECES: x ← x · 2; MOSTRAR x».", "x vale 2 → 4 → 8 → 16 → 32. Se muestra 32."],
    ["Diferencia entre contador y acumulador con un ejemplo de cada uno.", "Un contador suma de uno en uno (número de clientes que entran). Un acumulador suma cantidades variables (dinero total de la caja)."],
    ["Describe en lenguaje natural el diagrama de flujo de «fregar los platos mientras queden sucios».", "Inicio; rombo «¿quedan platos sucios?»; si sí: lavar un plato, dejarlo en el escurridor y volver al rombo; si no: fin."],
    ["Escribe una decisión múltiple para poner la nota en palabras (suspenso, aprobado, notable, sobresaliente).", "SI nota < 5 ENTONCES suspenso · SI NO SI nota < 7 ENTONCES aprobado · SI NO SI nota < 9 ENTONCES notable · SI NO sobresaliente."],
    ["Aplica la abstracción: ¿qué datos necesita una app para calcular el tiempo de un viaje en bici y cuáles sobran?", "Necesita la distancia y la velocidad media (y quizá los desniveles). Sobran el color de la bici, la marca o el nombre del ciclista."],
    ["Busca el patrón: ¿qué se repite al dibujar un cuadrado, un pentágono y un hexágono con un robot?", "Siempre se repite «avanzar un lado y girar». Solo cambian las veces (4, 5, 6) y el ángulo (360 entre el número de lados)."],
    ["¿Cuántas preguntas hacen falta como máximo para adivinar un número del 1 al 1.000 con búsqueda binaria? Explica.", "Unas 10, porque cada pregunta divide la lista por la mitad: 1.000 → 500 → 250 → 125 → 63 → 32 → 16 → 8 → 4 → 2 → 1."],
    ["Ordena por inserción estas cartas y escribe cómo queda la mano tras cada paso: 7, 3, 9, 1.", "7 → 3 7 → 3 7 9 → 1 3 7 9."],
    ["Escribe en pseudocódigo un algoritmo que pida 5 números y muestre cuál es el mayor.", "LEER n; mayor ← n · REPETIR 4 VECES: LEER n; SI n > mayor ENTONCES mayor ← n · FIN REPETIR · MOSTRAR mayor."],
    ["Diseña un algoritmo de primeros auxilios PAS con decisiones (¿responde?, ¿respira?).", "Proteger la zona · Avisar al 112 · SI no responde ENTONCES comprobar si respira · SI respira ENTONCES posición lateral de seguridad · SI NO compresiones torácicas hasta que llegue ayuda."],
    ["Encuentra el error: «suma ← 0; REPETIR 3 VECES: suma ← 0; LEER n; suma ← suma + n». ¿Qué muestra si los números son 2, 4 y 6?", "Muestra 6, porque suma se pone a 0 dentro del bucle en cada vuelta. El valor inicial debe ir antes del bucle; así daría 12."],
    ["Compara la búsqueda secuencial y la binaria: ventajas, inconvenientes y cuándo usar cada una.", "Secuencial: sencilla y vale para listas desordenadas, pero lenta. Binaria: rapidísima, pero necesita datos ordenados. Usa la binaria en listas grandes ordenadas y la secuencial en listas cortas o desordenadas."],
    ["Diseña un algoritmo para que un robot aspirador limpie una habitación rectangular sin obstáculos.", "Ir a una esquina · REPETIR hasta llegar a la pared opuesta: avanzar hasta la pared, girar 90°, avanzar un ancho de robot, girar 90° (alternando derecha e izquierda). Es un recorrido en zigzag."],
    ["Explica qué es la «burbuja de filtros» y propón dos hábitos para evitarla.", "Es cuando un algoritmo solo te muestra contenidos parecidos a los que ya te gustan, y dejas de ver otras opiniones. Hábitos: seguir fuentes variadas y buscar activamente puntos de vista distintos."],
    ["Con 1.000.000 de datos ordenados, ¿cuántos pasos necesita la búsqueda binaria? Razónalo con potencias de 2.", "Unos 20, porque 2²⁰ = 1.048.576, que supera el millón: dividiendo por la mitad 20 veces se llega a un solo dato."],
    ["Inventa un algoritmo para repartir equipos justos en clase y explica cómo comprobarías que es eficaz.", "Por ejemplo: ordenar por habilidad y repartir alternando (1.º al A, 2.º al B, 3.º al B, 4.º al A…). Se comprueba sumando la habilidad de cada equipo y viendo que los totales son parecidos."],
  ]),
  quiz: H.test([
    ["Un algoritmo es…", ["una secuencia ordenada y finita de pasos", "un ordenador muy rápido", "un lenguaje de programación", "un error del programa"], "Resuelve un problema paso a paso."],
    ["La palabra algoritmo viene de…", ["al-Juarismi, matemático persa", "un dios griego", "el inglés «algorithm», inventado en 1990", "un científico alemán"], "Siglo IX."],
    ["Un algoritmo debe ser finito, es decir…", ["terminar en algún momento", "ser muy corto", "tener pocas variables", "usar números"], "No puede durar para siempre."],
    ["Los ingredientes de una receta son su…", ["entrada", "salida", "proceso", "bucle"], "Los datos de partida."],
    ["En un diagrama de flujo, una decisión se dibuja con un…", ["rombo", "óvalo", "rectángulo", "círculo"], "Tiene dos salidas: sí y no."],
    ["El inicio y el fin se dibujan con un…", ["óvalo", "rombo", "paralelogramo", "triángulo"], "Forma redondeada."],
    ["Una entrada o salida de datos se dibuja con un…", ["paralelogramo", "rombo", "óvalo", "rectángulo"], "Por ejemplo, pedir un número."],
    ["La estructura que ejecuta los pasos uno tras otro es la…", ["secuencia", "decisión", "repetición", "variable"], "Cada paso una vez, en orden."],
    ["«Si llueve, coge el paraguas» es una decisión…", ["simple", "doble", "múltiple", "infinita"], "Si no llueve, no se hace nada."],
    ["En un diagrama de flujo, una repetición se reconoce por…", ["una flecha que vuelve hacia atrás", "un óvalo", "dos rectángulos", "un paralelogramo"], "Vuelve al rombo."],
    ["El pseudocódigo…", ["no lo ejecuta ninguna máquina", "es un lenguaje como Python", "solo se usa en Scratch", "se escribe en binario"], "Sirve para pensar y comunicar."],
    ["Una variable es…", ["un dato con nombre que puede cambiar", "un bucle infinito", "un símbolo del diagrama", "un error"], "Como una caja con nombre."],
    ["pasos ← pasos + 1 significa…", ["sumar 1 a la variable pasos", "comparar pasos con 1", "borrar pasos", "dar pasos 1 vez"], "Es un contador."],
    ["Dividir un problema grande en partes pequeñas es…", ["descomposición", "abstracción", "patrones", "ordenación"], "Pensamiento computacional."],
    ["Quedarse con lo importante e ignorar detalles es…", ["abstracción", "descomposición", "depuración", "búsqueda"], "Como un mapa del metro."],
    ["La búsqueda binaria necesita que los datos estén…", ["ordenados", "desordenados", "en binario", "repetidos"], "Si no, no se puede descartar la mitad."],
    ["Para adivinar un número del 1 al 100 con búsqueda binaria bastan como mucho…", ["7 preguntas", "50 preguntas", "100 preguntas", "2 preguntas"], "2⁷ = 128."],
    ["Ordenar cartas colocando cada una en su sitio entre las anteriores es el método de…", ["inserción", "burbuja", "búsqueda binaria", "abstracción"], "Como hacemos con la mano."],
    ["La eficiencia de un algoritmo mide…", ["cuántos pasos o recursos necesita", "lo bonito que es", "cuántas líneas tiene el dibujo", "el color de los bloques"], "Tiempo, memoria, energía."],
    ["Un sesgo en un algoritmo es…", ["un trato injusto aprendido de datos injustos", "un error de sintaxis", "un tipo de bucle", "una variable vacía"], "Repite las injusticias de los datos."],
  ], 2),
  examen: H.test([
    ["x ← 3; REPETIR 3 VECES: x ← x + 2. Al final x vale…", ["9", "6", "5", "11"], "3 + 2 + 2 + 2."],
    ["«MIENTRAS n ≠ 10: n ← n + 2», empezando con n = 1…", ["no termina nunca", "termina con n = 10", "termina con n = 11", "no se ejecuta"], "n siempre es impar."],
    ["Del rombo de un diagrama de flujo salen…", ["dos flechas, sí y no", "una flecha", "tres flechas", "ninguna flecha"], "Decisión."],
    ["La búsqueda secuencial en una lista de 500 puede necesitar…", ["hasta 500 pasos", "como mucho 9 pasos", "1 paso", "250.000 pasos"], "Mira uno a uno."],
    ["¿Qué estructura usarías para «remueve 10 veces»?", ["repetición fija", "decisión doble", "secuencia sin bucle", "búsqueda"], "Número conocido."],
    ["Un acumulador sirve para…", ["ir sumando cantidades", "contar de uno en uno", "decidir", "ordenar"], "Como el total de una compra."],
    ["Si un contador se pone a 0 dentro del bucle…", ["se reinicia en cada vuelta y el resultado falla", "funciona mejor", "se convierte en acumulador", "el bucle no se ejecuta"], "El valor inicial va fuera."],
    ["Ver que dibujar polígonos siempre es «avanzar y girar» es…", ["reconocer un patrón", "abstraer", "descomponer", "depurar"], "Algo que se repite."],
  ], 3),
  feynman: ["Qué es un algoritmo y qué características debe tener", "Cómo se representa un algoritmo con pseudocódigo y con un diagrama de flujo", "Qué diferencia hay entre secuencia, decisión y repetición", "Qué son las cuatro estrategias del pensamiento computacional", "Por qué la búsqueda binaria es más rápida que la secuencial"],
  mapa: H.mapa("ALGORITMOS", "var(--eso)", [
    ["Qué es", "pasos ordenados, precisos y finitos", "var(--pen)"],
    ["Cómo se escribe", "pseudocódigo · diagrama de flujo", "#b8860b"],
    ["Estructuras", "secuencia · decisión · repetición", "var(--red)"],
    ["Pensar", "descomponer · patrones · eficiencia", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Algoritmo", "Secuencia ordenada y finita de pasos que resuelve un problema."],
    ["Entrada · proceso · salida", "Datos de partida, pasos y resultado."],
    ["Pseudocódigo", "Algoritmo escrito con frases cortas y palabras clave."],
    ["Diagrama de flujo", "Algoritmo dibujado con símbolos y flechas."],
    ["Rombo", "Decisión con dos salidas: sí y no."],
    ["Secuencia", "Pasos uno tras otro, en orden."],
    ["Decisión", "Elegir un camino según una condición."],
    ["Repetición", "Repetir pasos un número de veces o mientras se cumpla algo."],
    ["Variable", "Caja con nombre que guarda un dato que cambia."],
    ["Pensamiento computacional", "Descomponer, buscar patrones, abstraer y crear algoritmos."],
    ["Búsqueda binaria", "Descartar la mitad cada vez; necesita datos ordenados."],
    ["Eficiencia", "Resolver el problema con pocos pasos y recursos."],
  ],
  glosario: [
    ["Algoritmo", "Secuencia ordenada y finita de pasos precisos que resuelve un problema."],
    ["Entrada", "Datos o materiales de los que parte un algoritmo."],
    ["Salida", "Resultado que produce un algoritmo."],
    ["Pseudocódigo", "Forma de escribir algoritmos con frases cortas y palabras clave, sin las reglas de un lenguaje concreto."],
    ["Diagrama de flujo", "Representación gráfica de un algoritmo con símbolos unidos por flechas."],
    ["Secuencia", "Estructura en la que los pasos se ejecutan uno detrás de otro."],
    ["Condición", "Pregunta que solo puede ser verdadera o falsa."],
    ["Decisión", "Estructura que elige qué pasos hacer según una condición."],
    ["Bucle", "Estructura que repite un grupo de pasos."],
    ["Variable", "Espacio con nombre que guarda un dato que puede cambiar."],
    ["Contador", "Variable que aumenta o disminuye de uno en uno."],
    ["Descomposición", "Dividir un problema complejo en partes más pequeñas."],
    ["Abstracción", "Quedarse con la información importante e ignorar los detalles irrelevantes."],
    ["Búsqueda binaria", "Algoritmo que busca en una lista ordenada descartando la mitad en cada paso."],
    ["Eficiencia", "Cantidad de pasos o recursos que necesita un algoritmo."],
    ["Sesgo algorítmico", "Resultado injusto de un algoritmo que aprende de datos con prejuicios."],
  ],
  situacion: {
    titulo: "Manual de algoritmos del instituto",
    reto: "Los alumnos de 1º ESO llegan nuevos al instituto y se pierden con las rutinas. Vuestro equipo elaborará un manual con los algoritmos más útiles del centro: desde pedir un libro en la biblioteca hasta actuar en un simulacro de evacuación.",
    pasos: [
      "Haced una lluvia de ideas con las situaciones que más dudas generan a los alumnos nuevos y elegid cuatro.",
      "Descomponed cada situación en partes y escribid su algoritmo en lenguaje natural.",
      "Pasad cada algoritmo a pseudocódigo y dibujad su diagrama de flujo, con al menos una decisión y una repetición en el manual.",
      "Probad los algoritmos con compañeros de 1º y anotad dónde se equivocan o tienen dudas.",
      "Corregid el manual y presentadlo como un folleto o una página web con ilustraciones.",
    ],
    producto: "Manual ilustrado con cuatro algoritmos del instituto en pseudocódigo y diagrama de flujo.",
    evaluacion: [
      "Los algoritmos son precisos, ordenados y finitos.",
      "Los diagramas de flujo usan bien los símbolos y las estructuras.",
      "Se aplica la descomposición y se mejora el manual con las pruebas.",
      "El manual es claro, útil y está bien presentado.",
    ],
  },
  familias: ["Escribid juntos la receta de un plato familiar como si fuera para un robot.", "Jugad a adivinar un número del 1 al 100 usando la búsqueda binaria.", "Ordenad una baraja de cartas por inserción y contad cuántos movimientos hacéis.", "Comentad qué os recomiendan las aplicaciones y por qué creéis que lo hacen."],
  profesores: {
    saberes: H.saberes("Algoritmos: concepto, características y representación (lenguaje natural, pseudocódigo y diagramas de flujo); estructuras de control (secuencia, selección e iteración); variables, contadores y acumuladores; estrategias del pensamiento computacional (descomposición, patrones, abstracción y algoritmos); búsqueda y ordenación y nociones de eficiencia; impacto social de los algoritmos", "pensament computacional, disseny d'algorismes i representació mitjançant diagrames, i anàlisi crítica de l'impacte de la tecnologia."),
    ideas: [
      "Actividades desenchufadas de CS Unplugged: ordenar con redes de ordenación y búsqueda de barcos.",
      "Concurso de diagramas de flujo de rutinas del centro.",
      "Carrera de ordenación con cartas: inserción frente a burbuja, contando comparaciones.",
      "Adivina el número con búsqueda binaria y registro del número de preguntas.",
      "Debate guiado sobre los algoritmos de recomendación de las redes sociales.",
    ],
  },
  fuentes: [H.RD, H.DEC, H.wiki("Algoritmo", "Algoritmo"), H.wiki("Diagrama de flujo", "Diagrama_de_flujo"), H.wiki("Búsqueda binaria", "B%C3%BAsqueda_binaria"), { t: "CS Unplugged: actividades de informática sin ordenador", url: "https://www.csunplugged.org/es/" }],
  revisado: H.REV,
};
