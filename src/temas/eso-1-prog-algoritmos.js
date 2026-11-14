// Programación y robótica 1º ESO · Los algoritmos. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, barras, resumen, flujo, codigo, PS, wiki, C, RD, REV } = require("./_eso1L2");

const eps = lienzo("Entrada, proceso y salida: los ingredientes entran, la receta los transforma y sale la tortilla", `
  ${[["Entrada", "huevos, patatas", "var(--inf)", 46], ["Proceso", "pelar, batir, freír", "var(--pen)", 130], ["Salida", "tortilla", "var(--leaf)", 214]].map(([a, b, c, x]) => `<rect x="${x - 38}" y="56" width="76" height="62" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.4"/>${tx(x, 80, a, { fs: 12.5, c, max: 70 })}${tx(x, 102, b, { fs: 10, c: "var(--muted)", max: 70 })}`).join("")}
  <path d="M85 87 H90 M169 87 H174" stroke="var(--muted)" stroke-width="2.4"/><path d="M86 82 L92 87 L86 92 M170 82 L176 87 L170 92" fill="none" stroke="var(--muted)" stroke-width="2.4"/>
  ${tx(130, 34, "Todo algoritmo tiene tres partes", { fs: 12.5, c: "var(--muted)" })}${tx(130, 150, "datos → pasos → resultado", { fs: 12, fam: D })}`, 166);

const ambiguo = comparar("Instrucción ambigua frente a instrucción precisa", [
  ["Ambigua", ["«echa un poco de sal»", "«gira un poco»", "«espera un rato»"], "var(--red)"],
  ["Precisa", ["«echa 2 g de sal»", "«gira 90°»", "«espera 5 minutos»"], "var(--leaf)"],
], "Un ordenador no adivina");

const estructuras = cajas("Las tres estructuras básicas de cualquier algoritmo: secuencia, decisión y repetición", [
  ["Secuencia", "un paso tras otro", "var(--pen)"],
  ["Decisión", "si… si no…", "var(--sun)"],
  ["Repetición", "repetir, mientras", "var(--leaf)"],
  ["Combinadas", "cualquier programa", "var(--inf)"],
], "Tres piezas para todo");

const simbolos = flujo("Símbolos del diagrama de flujo: óvalo de inicio, romboide de entrada, rectángulo de proceso, rombo de decisión y óvalo de fin", [
  ["Inicio", "ini"], ["LEER dos números", "es"], ["suma = a + b", "proc"], ["ESCRIBIR suma", "es"], ["Fin", "ini"],
], "Sumar dos números");

const decision = flujo("Diagrama de flujo con una decisión: si llueve se coge el paraguas; si no, la gorra", [
  ["Inicio", "ini"], ["¿Llueve?", "dec", "sí: paraguas", "no ↓"], ["Coger la gorra", "proc"], ["Salir de casa", "proc"], ["Fin", "ini"],
], "Salir de casa");

const repeticion = flujo("Diagrama de flujo con una repetición: mientras queden vueltas, correr una vuelta y restar una", [
  ["Inicio", "ini"], ["vueltas = 5", "proc"], ["¿vueltas > 0?", "dec", "no: fin", "sí ↓"], ["Correr una vuelta", "proc"], ["vueltas = vueltas − 1", "proc"],
], "Correr 5 vueltas", { vuelta: [4, 2] });

const pseudo = codigo("Pseudocódigo con sangría: inicio, leer altura, si la altura es mayor o igual que 140 escribir puedes subir, si no escribir aún no, fin si, fin", [
  ["INICIO", 0, PS.ini], ["LEER altura", 0, PS.txt], ["SI altura ≥ 140 ENTONCES", 0, PS.clave], ["ESCRIBIR «Puedes subir»", 1, PS.ok], ["SI NO", 0, PS.clave], ["ESCRIBIR «Aún no»", 1, PS.mal], ["FIN SI", 0, PS.clave], ["FIN", 0, PS.ini],
], "La atracción");

const cuenta = codigo("Pseudocódigo de una cuenta atrás: número igual a 3, mientras número mayor que 0 escribir y restar 1, después escribir despegue", [
  ["número = 3", 0, PS.txt], ["MIENTRAS número > 0 HACER", 0, PS.clave], ["ESCRIBIR número", 1, PS.ok], ["número = número − 1", 1, PS.txt], ["FIN MIENTRAS", 0, PS.clave], ["ESCRIBIR «¡Despegue!»", 0, PS.ok],
], "Cuenta atrás");

const binaria = barras("Número máximo de intentos para adivinar un número del 1 al 100: probando uno a uno 100, por la mitad solo 7", [["uno a uno", 100, "var(--red)"], ["por la mitad", 7, "var(--leaf)"]], { titulo: "Intentos como máximo", c: "var(--pen)" });

const mundo = cajas("Algoritmos en la vida diaria: GPS, recomendaciones, buscadores y termostatos", [
  ["GPS", "ruta más corta", "var(--pen)"],
  ["Recomendaciones", "vídeos y música", "var(--red)"],
  ["Buscadores", "ordenar páginas", "var(--leaf)"],
  ["Termostato", "si hace frío, calienta", "var(--sun)"],
], "Están en todas partes");

const ordenar = pasos("Ordenar cartas por el método de selección: buscar la menor, ponerla primero y repetir con el resto", [
  "Mira todas las cartas que quedan",
  "Busca la más pequeña",
  "Ponla al final del montón ordenado",
  "Repite hasta que no queden",
], "Ordenar por selección");

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Los algoritmos",
  minutos: 105,
  objetivos: [
    "Definir algoritmo e identificar su entrada, su proceso y su salida",
    "Reconocer las características de un buen algoritmo y evitar la ambigüedad",
    "Usar secuencias, decisiones y repeticiones para resolver problemas",
    "Representar algoritmos con diagramas de flujo y con pseudocódigo",
    "Comprobar un algoritmo con una traza y encontrar sus errores",
    "Comparar la eficiencia de dos algoritmos y valorar su papel en la sociedad",
  ],
  claves: ["algoritmo", "entrada", "proceso", "salida", "secuencia", "decisión", "repetición", "diagrama de flujo", "pseudocódigo", "traza", "eficiencia"],
  pregunta: {
    texto: "En un juego, piensas un número del 1 al 100 y un amigo tiene que adivinarlo; tú solo respondes «mayor» o «menor». ¿Cuál es la mejor estrategia para tu amigo?",
    respuesta: "Decir siempre el número de la <b>mitad</b> del intervalo que queda: 50, luego 25 o 75, y así sucesivamente. Cada respuesta descarta la mitad de los números, y así se acierta en <mark>7 intentos como mucho</mark>. Probar 1, 2, 3, 4… podría necesitar 100 intentos. Las dos formas son <b>algoritmos</b> que resuelven el problema, pero uno es mucho más <b>eficiente</b>. Este método se llama búsqueda binaria y lo usan los ordenadores para buscar datos rápidamente.",
  },
  lectura: {
    titulo: "Ada Lovelace, la primera programadora",
    html: `<p>En 1843, mucho antes de que existieran los ordenadores, una joven matemática inglesa llamada <b>Ada Lovelace</b> escribió algo que nadie había hecho antes: un algoritmo pensado para que lo ejecutara una máquina. Su amigo Charles Babbage había diseñado la «máquina analítica», un enorme aparato de engranajes que nunca llegó a construirse del todo.</p><p>Ada tradujo un artículo sobre la máquina y le añadió unas notas tres veces más largas que el texto original. En la última nota, la famosa «nota G», describió paso a paso cómo la máquina podría calcular una serie de números muy complicada, los números de Bernoulli. Era una lista ordenada de instrucciones, con repeticiones y variables: un verdadero <b>programa</b>.</p><p>Pero Ada fue aún más lejos. Imaginó que esas máquinas podrían algún día componer música o trabajar con letras y símbolos, no solo con números. Tenía razón: hoy los algoritmos nos recomiendan canciones, traducen idiomas y guían coches. Por eso se la considera la primera programadora de la historia, y un lenguaje de programación lleva su nombre: Ada. En este tema aprenderás a pensar como ella: a describir un problema con pasos claros que cualquiera, incluso una máquina, pueda seguir.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es un algoritmo?</h3><p>Un <mark>algoritmo</mark> es un <b>conjunto ordenado y finito de instrucciones</b> que permite resolver un problema o realizar una tarea. La palabra viene del nombre de un matemático persa del siglo IX, al-Juarismi, que escribió libros sobre cómo hacer cálculos paso a paso.</p><p>Usamos algoritmos continuamente sin darnos cuenta: para hacer una tortilla, para dividir con lápiz y papel, para atarnos los cordones o para llegar a casa de un amigo. Los ordenadores los usan para todo: ordenar una lista de canciones, buscar el camino más corto en un mapa, recomendar un vídeo o reconocer una cara en una foto.</p><p>Cuando un algoritmo se escribe en un <b>lenguaje de programación</b> (Scratch, Python…) para que lo ejecute un ordenador o un robot, se convierte en un <b>programa</b>. Primero se piensa el algoritmo y después se programa: igual que primero se piensa una redacción y después se escribe.</p>`, svg: ordenar, video: { id: "Tu9OQSff-gw", titulo: "¿Qué es un algoritmo? Definición, características, tipos, operadores y variables", canal: "Estudia Con Marisol", vistas: 712682 } },
    { html: `<h3>1.2 Entrada, proceso y salida</h3><p>Todo algoritmo tiene tres partes:</p><ul><li>La <mark>entrada</mark>: los datos que necesitamos para empezar. En una receta, los ingredientes; en una calculadora, los números que tecleamos; en un robot, lo que miden sus sensores.</li><li>El <mark>proceso</mark>: los pasos que transforman los datos. Pelar, batir, freír; sumar, multiplicar; decidir si girar o seguir recto.</li><li>La <mark>salida</mark>: el resultado. La tortilla hecha, el número que aparece en la pantalla, el movimiento del robot.</li></ul><p>Identificar estas tres partes es el primer paso para resolver cualquier problema de programación. Antes de escribir un solo bloque, pregúntate: ¿qué datos tengo?, ¿qué tengo que obtener?, ¿qué pasos me llevan de unos a otro? Por ejemplo, para calcular la nota media: entrada, las notas; proceso, sumarlas y dividir entre cuántas hay; salida, la media.</p>`, svg: eps },
    { html: `<h3>1.3 Características de un buen algoritmo</h3><p>Para que un algoritmo funcione, tiene que cumplir varias condiciones:</p>${tabla(["Característica", "Significa", "Mal ejemplo"], [["Preciso", "sin ambigüedad", "«gira un poco»"], ["Ordenado", "pasos en orden lógico", "freír antes de pelar"], ["Finito", "termina", "repetir para siempre"], ["Definido", "mismos datos, mismo resultado", "«elige lo que quieras»"], ["Eficiente", "pocos pasos y recursos", "probar 1, 2, 3… hasta 100"], ["General", "sirve para muchos casos", "solo suma 3 + 5"]])}<p>Un algoritmo <b>general</b> no resuelve solo un caso concreto, sino todos los casos parecidos: no solo sirve para sumar 3 y 5, sino para sumar dos números cualesquiera. Por eso en los algoritmos se usan <b>variables</b>, nombres como «a», «b» o «altura» que guardan datos que pueden cambiar cada vez.</p>` },
    { html: `<h3>1.4 El problema de la ambigüedad</h3><p>Las personas entendemos instrucciones vagas gracias al sentido común: si te dicen «echa un poco de sal», sabes más o menos cuánto es. Pero un ordenador o un robot <b>no tiene sentido común</b>: hace exactamente lo que se le dice, ni más ni menos. Si la instrucción es ambigua, no sabrá qué hacer o hará algo inesperado.</p><p>Por eso las instrucciones de un algoritmo deben ser <mark>precisas</mark>: «gira 90° a la derecha» en lugar de «gira un poco»; «espera 5 minutos» en lugar de «espera un rato»; «avanza 3 casillas» en lugar de «avanza hasta allí».</p><p>Un juego divertido para comprobarlo es el del «robot humano»: un compañero hace de robot y solo puede obedecer literalmente las instrucciones que le das para, por ejemplo, ponerse una chaqueta. Pronto descubrirás que «ponte la chaqueta» no basta: hay que decir qué mano, qué manga, cuándo estirar el brazo… ¡Programar es aprender a explicar con precisión!</p>`, svg: ambiguo },
    { html: `<h3>1.5 Las tres estructuras básicas</h3><p>Cualquier algoritmo, por complicado que sea, se construye combinando solo tres tipos de estructuras:</p><ul><li>La <mark>secuencia</mark>: los pasos se ejecutan <b>uno detrás de otro</b>, en orden. Coger el vaso, abrir el grifo, llenar el vaso, cerrar el grifo.</li><li>La <mark>decisión</mark> (o selección): según si se cumple o no una <b>condición</b>, se sigue un camino u otro. «Si llueve, coger el paraguas; si no, coger la gorra». La condición siempre es una pregunta que se responde con sí o no (verdadero o falso).</li><li>La <mark>repetición</mark> (o bucle): un grupo de pasos se repite un número determinado de veces («dar 10 vueltas a la pista») o mientras se cumpla una condición («mientras el agua no hierva, esperar»).</li></ul><p>Con estas tres piezas se puede describir desde cómo cruzar una calle con semáforo hasta cómo funciona un videojuego entero. En los siguientes apartados aprenderás a dibujarlas y a escribirlas.</p>`, svg: estructuras },
    { html: `<h3>1.6 Los diagramas de flujo</h3><p>Un <mark>diagrama de flujo</mark> representa un algoritmo con <b>dibujos</b>, de manera que se ve de un vistazo el camino que siguen los pasos. Usa símbolos normalizados unidos por <b>flechas</b> que indican el orden:</p><ul><li><b>Óvalo</b>: el <b>inicio</b> y el <b>fin</b> del algoritmo.</li><li><b>Romboide</b> (paralelogramo inclinado): <b>entrada o salida de datos</b>, como «leer un número» o «escribir el resultado».</li><li><b>Rectángulo</b>: un <b>proceso</b> o acción, como «sumar» o «mover 10 pasos».</li><li><b>Rombo</b>: una <b>decisión</b>. Dentro se escribe una pregunta y de él salen dos flechas, «sí» y «no».</li></ul><p>Los diagramas se leen de arriba abajo, siguiendo las flechas. Hacer el diagrama antes de programar ayuda a pensar con claridad y a detectar errores, y además permite explicar el algoritmo a otras personas aunque no sepan programar.</p>`, svg: simbolos, video: { id: "hTz4YzvtjrM", titulo: "Diagramas de flujo explicados de una forma sencilla", canal: "Lauro Arturo Ochoa Gálvez", vistas: 195635 } },
    { html: `<h3>1.7 Decisiones en un diagrama de flujo</h3><p>Una decisión se dibuja con un <b>rombo</b> que contiene una pregunta de sí o no: «¿Llueve?», «¿La nota es mayor o igual que 5?», «¿El robot toca la pared?». Del rombo salen dos caminos:</p><ul><li>El camino del <b>sí</b> (verdadero), con las acciones que se hacen si se cumple la condición.</li><li>El camino del <b>no</b> (falso), con las acciones contrarias. A veces el camino del «no» no hace nada y sigue directamente.</li></ul><p>Después de la decisión, los dos caminos se <b>vuelven a juntar</b> y el algoritmo continúa. En el ejemplo, si llueve se coge el paraguas (salida lateral) y si no, la gorra; en los dos casos se sale de casa.</p><p>Las condiciones usan <b>comparaciones</b>: igual (=), mayor que (&gt;), menor que (&lt;), mayor o igual (≥)… Hay que tener cuidado con los valores justos: si para subir a una atracción hay que medir 140 cm, ¿qué pasa con alguien que mide exactamente 140? Por eso se escribe «≥ 140» y no «&gt; 140».</p>`, svg: decision },
    { html: `<h3>1.8 Repeticiones en un diagrama de flujo</h3><p>En un diagrama de flujo, una repetición se reconoce porque una <b>flecha vuelve hacia atrás</b>, a un paso anterior. Normalmente vuelve a un rombo que pregunta si hay que seguir repitiendo.</p><p>Por ejemplo, para correr 5 vueltas: se empieza con vueltas = 5; se pregunta «¿vueltas &gt; 0?»; si es que sí, se corre una vuelta, se resta 1 y se vuelve a preguntar; cuando vueltas llega a 0, la respuesta es «no» y el algoritmo termina.</p><p>Fíjate en que dentro del bucle hay un paso que <b>cambia la condición</b> (restar una vuelta). Si se olvida, la condición se cumplirá siempre y el algoritmo no terminará nunca: es un <mark>bucle infinito</mark>, uno de los errores más típicos de programación. Un algoritmo debe ser <b>finito</b>: siempre tiene que llegar al final.</p>`, svg: repeticion },
    { html: `<h3>2.1 El pseudocódigo</h3><p>Otra forma de escribir algoritmos es el <mark>pseudocódigo</mark>: los pasos se escriben con <b>palabras de nuestro idioma</b>, pero con una estructura parecida a la de un lenguaje de programación. No lo entiende ningún ordenador, pero ayuda mucho a organizar las ideas antes de programar.</p><p>Se usan palabras clave: <b>INICIO</b> y <b>FIN</b>; <b>LEER</b> (pedir un dato) y <b>ESCRIBIR</b> (mostrar un resultado); <b>SI… ENTONCES… SI NO… FIN SI</b> para las decisiones; y <b>REPETIR n VECES… FIN REPETIR</b> o <b>MIENTRAS… HACER… FIN MIENTRAS</b> para las repeticiones.</p><p>Los pasos que están dentro de una decisión o un bucle se escriben con <b>sangría</b> (un poco más a la derecha), para que se vea qué está dentro de qué. En Scratch pasa lo mismo: los bloques que van dentro de un «si» o de un «repetir» quedan abrazados por el bloque en forma de C.</p>`, svg: pseudo },
    { html: `<h3>2.2 Comprobar un algoritmo: la traza</h3><p>Antes de dar por bueno un algoritmo, hay que <b>comprobar</b> que funciona. Una forma sencilla es hacer una <mark>traza</mark>: seguir el algoritmo paso a paso, a mano, con unos datos concretos, apuntando en una tabla cómo cambian los valores.</p>${tabla(["Paso", "número", "¿número > 0?", "Escribe"], [["1", "3", "sí", "3"], ["2", "2", "sí", "2"], ["3", "1", "sí", "1"], ["4", "0", "no", "¡Despegue!"]])}<p>Si en vez de «número − 1» hubiéramos escrito «número + 1», la traza mostraría que el número nunca llega a 0: bucle infinito. Conviene probar varios casos, incluidos los <b>extremos</b> (¿qué pasa si la altura es exactamente 140?, ¿y si el número empieza en 0?), porque ahí es donde suelen esconderse los errores. Encontrar y corregir errores se llama <b>depurar</b>.</p>`, svg: cuenta, video: { id: "KcSD3r16Pl0", titulo: "¿Qué es el pseudocódigo en programación?", canal: "Kiko Palomares", vistas: 229199 } },
    { html: `<h3>2.3 La eficiencia: no todos los algoritmos son iguales</h3><p>Un mismo problema se puede resolver con algoritmos distintos, y unos son mucho más <mark>eficientes</mark> que otros: necesitan menos pasos, menos tiempo o menos memoria.</p><p>Volvamos al juego de adivinar un número del 1 al 100. Si probamos uno a uno (1, 2, 3…), en el peor caso necesitamos <b>100 intentos</b>. Si decimos siempre la mitad del intervalo (50, luego 25 o 75…), cada respuesta elimina la mitad de los números: 100 → 50 → 25 → 13 → 7 → 4 → 2 → 1. Como mucho, <b>7 intentos</b>. Este método se llama <b>búsqueda binaria</b>.</p><p>La diferencia crece muchísimo con datos grandes: para encontrar un nombre entre un millón ordenados, la búsqueda uno a uno puede necesitar un millón de pasos, y la binaria, solo 20. Por eso los informáticos dedican mucho esfuerzo a diseñar algoritmos eficientes: hacen que los buscadores respondan en milésimas de segundo.</p>`, svg: binaria },
    { html: `<h3>2.4 Algoritmos en el mundo real</h3><p>Los algoritmos están en todas partes. El <b>GPS</b> calcula el camino más corto o más rápido teniendo en cuenta el tráfico. Las <b>plataformas de vídeo y música</b> analizan lo que has visto o escuchado para recomendarte contenidos parecidos. Los <b>buscadores</b> ordenan millones de páginas en fracciones de segundo. Los <b>termostatos</b> encienden o apagan la calefacción según la temperatura.</p><p>Los algoritmos facilitan mucho la vida, pero también hay que ser <b>críticos</b> con ellos:</p><ul><li>Los algoritmos de recomendación pueden encerrarnos en una «burbuja» en la que solo vemos lo que ya nos gusta.</li><li>Algunas aplicaciones usan algoritmos diseñados para que pasemos el máximo tiempo posible delante de la pantalla.</li><li>Los algoritmos que toman decisiones sobre personas pueden tener <b>sesgos</b> si se diseñan con datos injustos.</li></ul><p>Por eso es importante entender cómo funcionan y exigir que se diseñen de forma responsable y transparente.</p>`, svg: mundo },
  ],
  ejemplos: [
    { enunciado: "Escribe en pseudocódigo un algoritmo que lea la nota de un examen y diga «aprobado» si es 5 o más, y «suspenso» si no.", pasos: ["INICIO", "LEER nota", "SI nota ≥ 5 ENTONCES ESCRIBIR «aprobado»", "SI NO ESCRIBIR «suspenso»", "FIN SI · FIN"], resultado: "Una decisión con la condición nota ≥ 5." },
    { enunciado: "¿Qué escribe este algoritmo? «total = 0; REPETIR 4 VECES: total = total + 5; FIN REPETIR; ESCRIBIR total».", pasos: ["Empieza con total = 0.", "Vuelta 1: 5; vuelta 2: 10; vuelta 3: 15; vuelta 4: 20.", "Escribe el valor final."], resultado: "Escribe 20." },
    { enunciado: "Este algoritmo para regar una planta tiene un error: «MIENTRAS la tierra esté seca HACER: mirar la planta; FIN MIENTRAS». ¿Cuál es?", pasos: ["Dentro del bucle nunca se echa agua.", "La tierra seguirá seca para siempre.", "Es un bucle infinito."], resultado: "Hay que añadir «echar un poco de agua» dentro del bucle." },
    { enunciado: "Identifica la entrada, el proceso y la salida de un algoritmo que calcula el precio con un descuento del 10 %.", pasos: ["Entrada: el precio original.", "Proceso: descuento = precio · 0,10; final = precio − descuento.", "Salida: el precio final."], resultado: "Precio → cálculo → precio final." },
    { enunciado: "Convierte en precisa la instrucción «ve un poco hacia delante y gira» para un robot.", pasos: ["Indicar la distancia: avanza 20 cm.", "Indicar el sentido y el ángulo: gira 90° a la izquierda."], resultado: "«Avanza 20 cm y gira 90° a la izquierda»." },
    { enunciado: "Busca el número 37 entre 1 y 100 con búsqueda binaria.", pasos: ["50 → menor. 25 → mayor.", "37 (mitad de 26 y 50) → ¡acierto!"], resultado: "3 intentos." },
  ],
  errores: [
    "Escribir pasos ambiguos («un poco», «más o menos», «un rato»).",
    "Olvidar el inicio o el fin en el diagrama de flujo.",
    "Usar un rectángulo para una decisión: va en un rombo con dos salidas.",
    "Crear bucles infinitos porque la condición nunca cambia.",
    "Poner los pasos en un orden que no tiene sentido.",
    "No probar los casos extremos, como el valor justo del límite.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué es un algoritmo? Pon un ejemplo de tu vida diaria.", sol: "Un conjunto ordenado y finito de instrucciones para resolver un problema; por ejemplo, la receta de un bocadillo." },
    { nivel: "básico", q: "Escribe las tres partes de un algoritmo.", sol: "Entrada, proceso y salida." },
    { nivel: "básico", q: "Escribe cuatro características de un buen algoritmo.", sol: "Preciso, ordenado, finito y eficiente (también definido y general)." },
    { nivel: "básico", q: "¿Cuáles son las tres estructuras básicas?", sol: "Secuencia, decisión y repetición." },
    { nivel: "básico", q: "¿Qué símbolo se usa en un diagrama de flujo para una decisión? ¿Y para el inicio?", sol: "Un rombo; un óvalo." },
    { nivel: "básico", q: "¿Para qué sirve el romboide?", sol: "Para la entrada o salida de datos." },
    { nivel: "básico", q: "¿Qué es el pseudocódigo?", sol: "Una forma de escribir algoritmos con palabras del idioma y la estructura de un lenguaje de programación." },
    { nivel: "básico", q: "Ordena los pasos para lavarse los dientes: enjuagarse, poner pasta, cepillar, coger el cepillo.", sol: "Coger el cepillo, poner pasta, cepillar, enjuagarse." },
    { nivel: "básico", q: "Di si es secuencia, decisión o repetición: «si el semáforo está verde, cruza»; «da 3 vueltas»; «abre, entra, cierra».", sol: "Decisión; repetición; secuencia." },
    { nivel: "básico", q: "Haz precisa la instrucción «espera un rato y echa agua».", sol: "Por ejemplo: «espera 5 minutos y echa 200 mL de agua»." },
    { nivel: "básico", q: "¿Qué es una traza?", sol: "Seguir el algoritmo a mano, paso a paso, con datos concretos." },
    { nivel: "básico", q: "¿Qué es un bucle infinito?", sol: "Una repetición que no termina nunca porque la condición no cambia." },
    { nivel: "medio", q: "Escribe en pseudocódigo un algoritmo que lea dos números y escriba su suma.", sol: "INICIO · LEER a · LEER b · suma = a + b · ESCRIBIR suma · FIN." },
    { nivel: "medio", q: "Dibuja el diagrama de flujo de un algoritmo que lea la edad y escriba «puedes votar» si es 18 o más.", sol: "Inicio → leer edad → rombo ¿edad ≥ 18? → sí: escribir «puedes votar»; no: escribir «aún no» → fin." },
    { nivel: "medio", q: "Haz la traza de: «x = 2; REPETIR 3 VECES: x = x · 2; FIN REPETIR; ESCRIBIR x».", sol: "x = 4, 8, 16. Escribe 16." },
    { nivel: "medio", q: "Escribe en pseudocódigo un algoritmo que escriba los números del 1 al 10.", sol: "n = 1 · MIENTRAS n ≤ 10 HACER · ESCRIBIR n · n = n + 1 · FIN MIENTRAS." },
    { nivel: "medio", q: "Identifica entrada, proceso y salida de un algoritmo que convierte euros en dólares.", sol: "Entrada: euros y cambio. Proceso: euros · cambio. Salida: dólares." },
    { nivel: "medio", q: "¿Por qué la condición para subir a una atracción de 140 cm debe ser «≥ 140» y no «> 140»?", sol: "Porque quien mide exactamente 140 cm también puede subir; con «>» se quedaría fuera." },
    { nivel: "medio", q: "Escribe un algoritmo con una decisión para elegir ropa según la temperatura.", sol: "LEER temperatura · SI temperatura < 15 ENTONCES ponerse abrigo · SI NO ponerse camiseta · FIN SI." },
    { nivel: "medio", q: "¿Cuántos intentos necesitas como máximo para adivinar un número del 1 al 1 000 con búsqueda binaria?", sol: "10 (1 000 → 500 → 250 → 125 → 63 → 32 → 16 → 8 → 4 → 2 → 1)." },
    { nivel: "medio", q: "Corrige el algoritmo: «vueltas = 5; MIENTRAS vueltas > 0: correr; FIN MIENTRAS».", sol: "Falta restar: añadir «vueltas = vueltas − 1» dentro del bucle." },
    { nivel: "medio", q: "Explica por qué la frase «elige el camino que más te guste» no sirve en un algoritmo.", sol: "No es definida: con los mismos datos podría dar resultados distintos, y un ordenador no tiene gustos." },
    { nivel: "medio", q: "Pon dos ejemplos de algoritmos del mundo real y explica qué hacen.", sol: "GPS: calcula rutas. Recomendaciones: sugieren vídeos según lo que has visto." },
    { nivel: "avanzado", q: "Escribe en pseudocódigo un algoritmo que lea 5 notas y escriba la media.", sol: "suma = 0 · REPETIR 5 VECES · LEER nota · suma = suma + nota · FIN REPETIR · ESCRIBIR suma / 5." },
    { nivel: "avanzado", q: "Diseña un algoritmo para encontrar el mayor de tres números a, b y c.", sol: "mayor = a · SI b > mayor ENTONCES mayor = b · SI c > mayor ENTONCES mayor = c · ESCRIBIR mayor." },
    { nivel: "avanzado", q: "Juega al «robot humano»: escribe las instrucciones precisas para que un compañero dibuje un cuadrado en la pizarra.", sol: "Por ejemplo: coge la tiza, apoya en la pizarra, traza 30 cm hacia la derecha, gira 90°, traza 30 cm hacia abajo… (4 veces)." },
    { nivel: "avanzado", q: "Compara dos algoritmos para encontrar una palabra en un diccionario: hoja a hoja o abriendo por la mitad. ¿Cuál es más eficiente y por qué?", sol: "Abrir por la mitad (búsqueda binaria): descarta la mitad cada vez porque las palabras están ordenadas." },
    { nivel: "avanzado", q: "Dibuja el diagrama de flujo de un juego: el ordenador piensa un número y el jugador intenta adivinarlo hasta acertar.", sol: "Inicio → pensar número → leer intento → ¿intento = número? → no: escribir mayor o menor y volver a leer; sí: escribir «¡acertaste!» → fin." },
    { nivel: "avanzado", q: "¿Qué peligros pueden tener los algoritmos de recomendación? Propón una medida para evitarlos.", sol: "Burbujas de información y adicción; por ejemplo, explorar contenidos distintos, limitar el tiempo o pedir transparencia." },
    { nivel: "avanzado", q: "Inventa un algoritmo con las tres estructuras (secuencia, decisión y repetición) para regar 10 macetas solo si su tierra está seca.", sol: "REPETIR 10 VECES · ir a la siguiente maceta · SI tierra seca ENTONCES echar agua · FIN SI · FIN REPETIR." },
  ],
  quiz: [
    { q: "Un algoritmo es…", o: ["un aparato electrónico", "un conjunto ordenado y finito de instrucciones", "un lenguaje de programación", "un robot"], a: 1, e: "Pasos para resolver un problema." },
    { q: "La palabra algoritmo viene de…", o: ["un robot", "al-Juarismi", "un videojuego", "Ada Lovelace"], a: 1, e: "Matemático persa." },
    { q: "Los ingredientes de una receta son la…", o: ["salida", "entrada", "decisión", "repetición"], a: 1, e: "Datos de partida." },
    { q: "Un algoritmo debe ser…", o: ["infinito", "finito", "ambiguo", "secreto"], a: 1, e: "Tiene que terminar." },
    { q: "«Gira un poco» es una instrucción…", o: ["precisa", "ambigua", "eficiente", "general"], a: 1, e: "No dice cuánto." },
    { q: "«Si llueve, coger paraguas» es una…", o: ["secuencia", "decisión", "repetición", "salida"], a: 1, e: "Depende de una condición." },
    { q: "«Dar 10 vueltas» es una…", o: ["decisión", "repetición", "entrada", "secuencia"], a: 1, e: "Bucle." },
    { q: "En un diagrama de flujo, el rombo indica…", o: ["el inicio", "una decisión", "una acción", "un dato"], a: 1, e: "Pregunta de sí o no." },
    { q: "El óvalo indica…", o: ["una decisión", "inicio o fin", "un dato", "un bucle"], a: 1, e: "Principio y final." },
    { q: "El rectángulo indica…", o: ["una decisión", "un proceso o acción", "el fin", "una entrada"], a: 1, e: "Una acción." },
    { q: "El romboide indica…", o: ["una decisión", "entrada o salida de datos", "el inicio", "un bucle"], a: 1, e: "Leer o escribir." },
    { q: "Una flecha que vuelve atrás representa…", o: ["un error", "una repetición", "el fin", "una salida"], a: 1, e: "Bucle." },
    { q: "En pseudocódigo, para pedir un dato se escribe…", o: ["FIN", "LEER", "SI", "ESCRIBIR"], a: 1, e: "LEER." },
    { q: "Los pasos dentro de un bucle se escriben con…", o: ["mayúsculas", "sangría", "colores", "comillas"], a: 1, e: "Más a la derecha." },
    { q: "Seguir un algoritmo a mano con datos es hacer una…", o: ["abstracción", "traza", "compilación", "copia"], a: 1, e: "Traza." },
    { q: "Un bucle que nunca termina es un…", o: ["bucle feliz", "bucle infinito", "algoritmo general", "diagrama"], a: 1, e: "La condición no cambia." },
    { q: "Para adivinar un número del 1 al 100, lo más eficiente es…", o: ["probar del 1 en adelante", "decir la mitad cada vez", "decir números al azar", "empezar por el 100"], a: 1, e: "Búsqueda binaria." },
    { q: "Con búsqueda binaria, del 1 al 100 se acierta como mucho en…", o: ["100 intentos", "7 intentos", "50 intentos", "2 intentos"], a: 1, e: "Se divide entre 2 cada vez." },
    { q: "Un algoritmo escrito en un lenguaje de programación es un…", o: ["diagrama", "programa", "pseudocódigo", "robot"], a: 1, e: "Lo ejecuta el ordenador." },
    { q: "Corregir los errores de un algoritmo se llama…", o: ["compilar", "depurar", "dibujar", "borrar"], a: 1, e: "Depurar." },
  ],
  examen: [
    { q: "REPETIR 3 VECES: x = x + 2, con x = 1 al inicio, deja x en…", o: ["6", "7", "3", "9"], a: 1, e: "1 + 2 + 2 + 2." },
    { q: "Un algoritmo que sirve para cualquier dato es…", o: ["infinito", "general", "ambiguo", "lento"], a: 1, e: "General." },
    { q: "¿Qué falta en «MIENTRAS sed: mirar el vaso»?", o: ["el inicio", "beber agua", "un rombo", "nada"], a: 1, e: "Sin beber, la sed no cambia." },
    { q: "La condición para aprobar con 5 o más es…", o: ["nota > 5", "nota ≥ 5", "nota < 5", "nota = 5"], a: 1, e: "Incluye el 5." },
    { q: "¿Qué parte es «el resultado en pantalla»?", o: ["entrada", "salida", "proceso", "decisión"], a: 1, e: "Salida." },
    { q: "n = 10; MIENTRAS n > 7: n = n − 1. ¿Cuántas vueltas da?", o: ["2", "3", "7", "10"], a: 1, e: "10 → 9 → 8 → 7." },
    { q: "Del 1 al 1 000 con búsqueda binaria, intentos máximos:", o: ["100", "10", "500", "1 000"], a: 1, e: "Se divide 10 veces." },
    { q: "Símbolo de «ESCRIBIR resultado» en un diagrama:", o: ["rombo", "romboide", "óvalo", "círculo"], a: 1, e: "Salida de datos." },
  ],
  feynman: ["Qué es un algoritmo y qué características debe tener", "Cómo se dibuja un diagrama de flujo con una decisión y con una repetición", "Cómo comprobar con una traza si un algoritmo funciona", "Por qué la búsqueda binaria es más eficiente que probar uno a uno"],
  figura: {
    titulo: "Los algoritmos en un vistazo",
    svg: resumen("Resumen: algoritmo, entrada y salida, estructuras, diagrama de flujo, pseudocódigo y traza", [
      ["Algoritmo", "pasos ordenados, precisos y finitos", "var(--pen)"],
      ["Partes", "entrada → proceso → salida", "var(--inf)"],
      ["Estructuras", "secuencia · decisión · repetición", "var(--leaf)"],
      ["Diagrama", "óvalo · romboide · rectángulo · rombo", "var(--sun)"],
      ["Comprobar", "pseudocódigo · traza · depurar", "var(--red)"],
    ]),
  },
  video: { id: "EkObhToiseo", titulo: "Qué es un algoritmo y para qué se usa", canal: "LearnFree en Español", vistas: 230888, megusta: 0, busqueda: "que es un algoritmo diagrama de flujo" },
  mapa: mapa("ALGORITMOS", "var(--pen)", [
    ["Definición", "pasos ordenados y finitos", "var(--pen)"],
    ["Estructuras", "secuencia · decisión · repetición", "var(--leaf)"],
    ["Representación", "diagrama de flujo · pseudocódigo", "var(--inf)"],
    ["Comprobación", "traza · eficiencia", "var(--red)"],
  ], 250),
  glosario: [
    ["Algoritmo", "Conjunto ordenado y finito de instrucciones para resolver un problema."],
    ["Programa", "Algoritmo escrito en un lenguaje que entiende el ordenador."],
    ["Entrada", "Datos que necesita el algoritmo para empezar."],
    ["Salida", "Resultado que produce el algoritmo."],
    ["Secuencia", "Pasos que se ejecutan uno tras otro."],
    ["Decisión", "Elegir un camino u otro según una condición."],
    ["Condición", "Pregunta que se responde con verdadero o falso."],
    ["Repetición o bucle", "Grupo de pasos que se repite varias veces."],
    ["Bucle infinito", "Repetición que no termina nunca."],
    ["Diagrama de flujo", "Representación de un algoritmo con símbolos y flechas."],
    ["Pseudocódigo", "Algoritmo escrito con palabras y la estructura de un programa."],
    ["Traza", "Seguimiento manual de un algoritmo con datos concretos."],
    ["Depurar", "Buscar y corregir los errores de un algoritmo o programa."],
    ["Eficiencia", "Capacidad de resolver un problema con pocos pasos y recursos."],
  ],
  situacion: {
    titulo: "El robot humano",
    reto: "Por parejas, vais a escribir un algoritmo tan preciso que un compañero, haciendo de robot, pueda realizar una tarea sin equivocarse: preparar un bocadillo, dibujar una figura o recorrer un laberinto en el aula.",
    pasos: [
      "Elegid la tarea e identificad su entrada, su proceso y su salida.",
      "Escribid el algoritmo en lenguaje natural, con pasos precisos.",
      "Dibujad el diagrama de flujo con al menos una decisión y una repetición.",
      "Pasad el algoritmo a pseudocódigo con sangría.",
      "Haced que otra pareja lo ejecute literalmente, anotad los fallos y depuradlo.",
    ],
    producto: "Un algoritmo en tres formatos (lenguaje natural, diagrama de flujo y pseudocódigo) probado y corregido.",
    evaluacion: ["Las instrucciones son precisas y ordenadas.", "Usa bien los símbolos del diagrama de flujo.", "El pseudocódigo tiene la sangría correcta.", "Detecta y corrige errores tras la prueba."],
  },
  tarjetas: [
    ["Algoritmo", "Pasos ordenados y finitos"], ["Entrada", "Datos de partida"], ["Salida", "Resultado"],
    ["Secuencia", "Uno tras otro"], ["Decisión", "Si… si no…"], ["Repetición", "Repetir, mientras"],
    ["Óvalo", "Inicio o fin"], ["Rombo", "Decisión"], ["Romboide", "Entrada o salida"],
    ["Pseudocódigo", "Palabras con estructura"], ["Traza", "Probar a mano"], ["Búsqueda binaria", "Dividir por la mitad"],
  ],
  familias: ["Escribid juntos el algoritmo de una receta familiar y comprobad si es preciso.", "Jugad a adivinar un número del 1 al 100 con «mayor o menor».", "Dibujad el diagrama de flujo de una rutina de la mañana.", "Comentad qué os recomiendan las aplicaciones y por qué creéis que lo hacen."],
  profesores: {
    saberes: "Algoritmos: definición, entrada-proceso-salida, características, estructuras de control (secuencia, selección, repetición), diagramas de flujo, pseudocódigo, trazas, depuración y eficiencia; algoritmos en la sociedad (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Actividad desenchufada del «robot humano».", "Diagramas de flujo de situaciones cotidianas en papel continuo.", "Concurso del algoritmo más eficiente para ordenar cartas.", "Trazas por parejas: uno escribe el algoritmo, el otro lo ejecuta a mano."],
  },
  fuentes: [RD, wiki("Algoritmo", "Algoritmo"), wiki("Diagrama de flujo", "Diagrama_de_flujo"), wiki("Ada Lovelace", "Ada_Lovelace"), { t: "CS Unplugged: búsqueda y ordenación", url: "https://www.csunplugged.org/es/" }],
  revisado: REV,
};
