// Programación y robótica 1º ESO: los algoritmos. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

// Formas de diagrama de flujo.
const ovalo = (x, y, w, s, c = COL.verde) => `<rect x="${x - w / 2}" y="${y - 11}" width="${w}" height="22" rx="11" fill="var(--card)" stroke="${c}" stroke-width="2"/>${et(x, y + 4, s, w - 8, { size: 10 })}`;
const caja = (x, y, w, s, c = COL.azul) => `<rect x="${x - w / 2}" y="${y - 11}" width="${w}" height="22" fill="var(--card)" stroke="${c}" stroke-width="2"/>${et(x, y + 4, s, w - 8, { size: 9.5, weight: 400 })}`;
const rombo = (x, y, w, h, s, c = COL.sol) => `<path d="M${x} ${y - h / 2} L ${x + w / 2} ${y} L ${x} ${y + h / 2} L ${x - w / 2} ${y} Z" fill="var(--card)" stroke="${c}" stroke-width="2"/>${et(x, y + 4, s, w * 0.6, { size: 9.5 })}`;

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Los algoritmos",
  minutos: 55,
  objetivos: ["Definir algoritmo y reconocer sus características", "Escribir algoritmos con lenguaje natural y con pseudocódigo", "Representar algoritmos con diagramas de flujo usando los símbolos correctos", "Usar secuencias, decisiones y repeticiones en un algoritmo y comprobarlo a mano"],
  claves: ["algoritmo", "instrucción", "entrada", "salida", "secuencia", "decisión", "repetición", "pseudocódigo", "diagrama de flujo", "inicio y fin", "proceso", "condición", "traza", "eficiencia", "precisión"],
  pregunta: {
    texto: "En un juego, piensas un número del 1 al 100 y un amigo tiene que adivinarlo; tú solo respondes «mayor» o «menor». ¿Cuál es la mejor estrategia para tu amigo?",
    respuesta: "Decir siempre el número de la <b>mitad</b> del intervalo que queda: 50, luego 25 o 75, y así sucesivamente. Cada respuesta descarta la mitad de los números, y así se acierta en <b>7 intentos como mucho</b>. Probar 1, 2, 3, 4… podría necesitar 100 intentos. Las dos formas son <b>algoritmos</b> que resuelven el problema, pero uno es mucho más <b>eficiente</b>. Este método se llama búsqueda binaria y lo usan los ordenadores para buscar datos rápidamente.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un algoritmo?</h3><p>Un <mark>algoritmo</mark> es un <b>conjunto ordenado y finito de instrucciones</b> que permite resolver un problema o realizar una tarea. La palabra viene del nombre de un matemático persa del siglo IX, al-Juarismi, que escribió sobre cómo hacer cálculos paso a paso. Usamos algoritmos continuamente sin darnos cuenta: para hacer una tortilla, para dividir con lápiz y papel, para atarnos los cordones o para llegar a casa de un amigo. Los ordenadores también los usan para todo: ordenar una lista de canciones, buscar el camino más corto en un mapa, recomendar un vídeo o reconocer una cara en una foto. Todo algoritmo tiene tres partes: los datos de <mark>entrada</mark> (lo que necesitamos para empezar, por ejemplo los ingredientes), el <mark>proceso</mark> (los pasos que se siguen) y la <mark>salida</mark> o resultado (la tortilla hecha). Cuando un algoritmo se escribe en un lenguaje de programación para que lo ejecute un ordenador, se convierte en un <b>programa</b>.</p>`,
      video: { id: "Tu9OQSff-gw", titulo: "¿Qué es un algoritmo? Definición, características, tipos, operadores y variables", canal: "Estudia Con Marisol", vistas: 712682 },
    },
    {
      html: `<h3>Características de un buen algoritmo</h3><p>Para que un algoritmo funcione, tiene que cumplir varias características. Debe ser <mark>preciso</mark>: cada paso tiene que estar definido sin ambigüedad, de modo que cualquiera lo entienda igual. «Echa un poco de agua» no es preciso; «echa 200 mililitros de agua» sí. Debe ser <mark>ordenado</mark>: los pasos tienen que seguir un orden lógico; no se puede batir el huevo antes de romperlo. Debe ser <mark>finito</mark>: tiene que terminar en algún momento, después de un número limitado de pasos, y no quedarse repitiendo para siempre. Debe ser <b>definido</b>: si se sigue dos veces con los mismos datos, debe dar el mismo resultado. Y es deseable que sea <mark>eficiente</mark>: que resuelva el problema con el menor número de pasos y recursos posible. Además, un buen algoritmo debe ser <b>general</b>: servir no solo para un caso concreto, sino para todos los casos parecidos (no solo para sumar 3 y 5, sino para sumar dos números cualesquiera).</p>${tabla(["Característica", "Significa", "Mal ejemplo"], [["Preciso", "sin ambigüedad", "«gira un poco»"], ["Ordenado", "pasos en orden lógico", "freír antes de pelar"], ["Finito", "termina", "«repite para siempre» sin salida"], ["Definido", "mismo dato, mismo resultado", "«elige lo que te apetezca»"], ["Eficiente", "pocos pasos y recursos", "probar 1, 2, 3… hasta 100"]])}`,
    },
    {
      html: `<h3>Las tres estructuras básicas</h3><p>Cualquier algoritmo, por complicado que sea, se construye combinando solo tres tipos de estructuras. La <mark>secuencia</mark>: los pasos se ejecutan <b>uno detrás de otro</b>, en orden. Por ejemplo: coger el vaso, abrir el grifo, llenar el vaso, cerrar el grifo. La <mark>decisión</mark> o selección: según si se cumple o no una <b>condición</b>, se sigue un camino u otro. Por ejemplo: «si llueve, coger el paraguas; si no, coger la gorra». La condición siempre es una pregunta que se responde con sí o no (verdadero o falso). La <mark>repetición</mark> o bucle: un grupo de pasos se repite un número determinado de veces («dar 10 vueltas a la pista») o mientras se cumpla una condición («mientras el agua no hierva, esperar»). Con estas tres piezas se puede describir desde cómo cruzar una calle con semáforo hasta cómo funciona un videojuego. En el siguiente bloque veremos cómo se dibujan.</p>`,
    },
    {
      html: `<h3>Los diagramas de flujo</h3><p>Un <mark>diagrama de flujo</mark> es una forma de representar un algoritmo con <b>dibujos</b>, de manera que se ve de un vistazo el camino que siguen los pasos. Usa unos símbolos normalizados unidos por <b>flechas</b> que indican el orden. El <b>óvalo</b> (o rectángulo con los extremos redondeados) indica el <mark>inicio</mark> y el <mark>fin</mark> del algoritmo. El <b>rectángulo</b> representa un <mark>proceso</mark> o acción: «sumar», «mover 10 pasos», «encender la luz». El <b>romboide</b> (paralelogramo inclinado) indica la <b>entrada o salida de datos</b>: «pedir un número», «mostrar el resultado». Y el <b>rombo</b> representa una <mark>decisión</mark>: dentro se escribe una pregunta, y de él salen dos flechas, una para el «sí» y otra para el «no». Los diagramas se leen de arriba abajo, siguiendo las flechas. Si una flecha vuelve hacia atrás, a un paso anterior, se está representando una repetición. Hacer el diagrama antes de programar ayuda a pensar con claridad y a detectar errores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de flujo para salir de casa: inicio, ¿llueve?, si sí coger paraguas, si no coger gorra, salir y fin">${BG}
        ${ovalo(90, 18, 60, "inicio")}${fl(90, 29, 90, 38, "var(--ink)", 1.5)}
        ${rombo(90, 60, 84, 40, "¿llueve?")}
        ${fl(48, 60, 40, 60, "var(--ink)", 1.5)}<path d="M40 60 V 90" stroke="var(--ink)" stroke-width="1.5"/>${fl(40, 82, 40, 90, "var(--ink)", 1.5)}${t(44, 52, "sí", { size: 9.5, color: COL.verde })}
        ${fl(132, 60, 140, 60, "var(--ink)", 1.5)}<path d="M140 60 V 90" stroke="var(--ink)" stroke-width="1.5"/>${fl(140, 82, 140, 90, "var(--ink)", 1.5)}${t(136, 52, "no", { size: 9.5, color: COL.rojo })}
        ${caja(40, 101, 64, "coger paraguas")}${caja(140, 101, 64, "coger gorra")}
        <path d="M40 112 V 124 H 140 V 112 M90 124 V 132" fill="none" stroke="var(--ink)" stroke-width="1.5"/>${fl(90, 126, 90, 134, "var(--ink)", 1.5)}
        ${caja(90, 144, 56, "salir")}<path d="M90 155 V 158" stroke="var(--ink)" stroke-width="1.5"/>${ovalo(90, 168, 44, "fin")}
        ${t(218, 50, "óvalo", { size: 9.5, color: COL.verde })}${t(218, 64, "inicio / fin", { size: 9, weight: 400 })}${t(218, 90, "rectángulo", { size: 9.5, color: COL.azul })}${t(218, 104, "acción", { size: 9, weight: 400 })}${t(218, 130, "rombo", { size: 9.5, color: COL.sol })}${t(218, 144, "decisión", { size: 9, weight: 400 })}</svg>`,
      video: { id: "hTz4YzvtjrM", titulo: "Diagramas de flujo explicados de una forma sencilla", canal: "Lauro Arturo Ochoa Gálvez", vistas: 195635 },
    },
    {
      html: `<h3>El pseudocódigo</h3><p>Otra forma de escribir algoritmos es el <mark>pseudocódigo</mark>: una manera de escribir los pasos con <b>palabras de nuestro idioma</b>, pero con una estructura parecida a la de un lenguaje de programación. Es un punto intermedio entre el lenguaje natural y el código real. No lo entiende ningún ordenador, pero ayuda mucho a organizar las ideas antes de programar. Se usan palabras clave como <b>INICIO</b> y <b>FIN</b>; <b>LEER</b> (pedir un dato) y <b>ESCRIBIR</b> (mostrar un resultado); <b>SI… ENTONCES… SI NO… FIN SI</b> para las decisiones; y <b>REPETIR n VECES… FIN REPETIR</b> o <b>MIENTRAS… HACER… FIN MIENTRAS</b> para las repeticiones. Los pasos que están dentro de una decisión o un bucle se escriben con <b>sangría</b> (un poco más a la derecha) para que se vea qué está dentro de qué. Por ejemplo, un algoritmo que dice si una persona puede subir a una atracción podría ser: INICIO · LEER altura · SI altura ≥ 140 ENTONCES ESCRIBIR «Puedes subir» · SI NO ESCRIBIR «Lo siento, aún no» · FIN SI · FIN.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pseudocódigo con sangría: inicio, leer altura, si la altura es mayor o igual que 140 escribir puedes subir, si no escribir aún no, fin si, fin">${BG}
        <rect x="16" y="16" width="228" height="148" rx="8" fill="#1e293b"/>
        ${[["INICIO", 0, "#93c5fd"], ["LEER altura", 0, "#e2e8f0"], ["SI altura ≥ 140 ENTONCES", 0, "#fcd34d"], ["ESCRIBIR «Puedes subir»", 1, "#86efac"], ["SI NO", 0, "#fcd34d"], ["ESCRIBIR «Aún no»", 1, "#fca5a5"], ["FIN SI", 0, "#fcd34d"], ["FIN", 0, "#93c5fd"]].map(([s, n, c], i) => et(30 + n * 20, 36 + i * 17, s, 200 - n * 20, { anchor: "start", color: c, size: 10.5, font: "monospace" })).join("")}</svg>`,
    },
    {
      html: `<h3>Comprobar un algoritmo: la traza</h3><p>Antes de dar por bueno un algoritmo, hay que <b>comprobar</b> que funciona. Una forma sencilla es hacer una <mark>traza</mark>: seguir el algoritmo paso a paso, a mano, con unos datos concretos, apuntando en una tabla qué ocurre en cada paso y cómo cambian los valores. Por ejemplo, un algoritmo para contar hacia atrás: «número = 3; MIENTRAS número > 0 HACER: ESCRIBIR número; número = número − 1; FIN MIENTRAS; ESCRIBIR ¡Despegue!». La traza sería: número vale 3, escribe 3 y pasa a 2; escribe 2 y pasa a 1; escribe 1 y pasa a 0; como 0 no es mayor que 0, sale del bucle y escribe «¡Despegue!». Si en vez de «número − 1» hubiéramos escrito «número + 1», la traza mostraría que el número nunca llega a 0: el algoritmo no terminaría nunca (un <b>bucle infinito</b>). Conviene probar varios casos, incluidos los extremos (¿qué pasa si la altura es exactamente 140?), porque ahí es donde suelen esconderse los errores.</p>${tabla(["Paso", "número", "¿número > 0?", "Escribe"], [["1", "3", "sí", "3"], ["2", "2", "sí", "2"], ["3", "1", "sí", "1"], ["4", "0", "no", "¡Despegue!"]])}`,
      video: { id: "KcSD3r16Pl0", titulo: "¿Qué es el pseudocódigo en programación?", canal: "Kiko Palomares", vistas: 229199 },
    },
    {
      html: `<h3>Algoritmos en el mundo real</h3><p>Los algoritmos están en todas partes. El <b>GPS</b> usa algoritmos que calculan el camino más corto o más rápido entre dos puntos, teniendo en cuenta el tráfico. Las <b>plataformas de vídeo y música</b> usan algoritmos de recomendación que analizan lo que has visto o escuchado para sugerirte contenidos parecidos. Los <b>buscadores</b> ordenan millones de páginas en fracciones de segundo para mostrar primero las más relevantes. Los <b>semáforos inteligentes</b> cambian sus tiempos según el tráfico, y los <b>termostatos</b> encienden o apagan la calefacción según la temperatura. Los algoritmos facilitan mucho la vida, pero también hay que ser <b>críticos</b> con ellos: los algoritmos de recomendación pueden encerrarnos en una «burbuja» en la que solo vemos lo que nos gusta, y los que toman decisiones sobre personas pueden tener sesgos si se diseñan mal. Por eso es importante entender cómo funcionan y que las personas que los diseñan lo hagan de forma responsable.</p>`,
    },
  ],
  figura: {
    titulo: "Los algoritmos en ocho ideas",
    svg: rejilla([
      ["Algoritmo", "pasos ordenados y finitos", COL.azul],
      ["Entrada / salida", "datos y resultado", COL.agua],
      ["Secuencia", "uno tras otro", COL.verde],
      ["Decisión", "si… si no", COL.sol],
      ["Repetición", "bucle: repetir, mientras", COL.naranja],
      ["Diagrama de flujo", "óvalo, rectángulo, rombo", COL.morado],
      ["Pseudocódigo", "palabras con estructura", COL.gris],
      ["Traza", "probar paso a paso", COL.rojo],
    ], 4, 86, "Resumen: algoritmo, entrada y salida, secuencia, decisión, repetición, diagrama de flujo, pseudocódigo y traza"),
  },
  video: { id: "EkObhToiseo", titulo: "Qué es un algoritmo y para qué se usa", canal: "LearnFree en Español", vistas: 230888, megusta: 0, busqueda: "que es un algoritmo diagrama de flujo" },
  ejemplos: [
    { enunciado: "Escribe en pseudocódigo un algoritmo que lea la nota de un examen y diga «aprobado» si es 5 o más, y «suspenso» si no.",
      pasos: ["INICIO", "LEER nota", "SI nota ≥ 5 ENTONCES ESCRIBIR «aprobado»", "SI NO ESCRIBIR «suspenso»", "FIN SI · FIN"],
      resultado: "Una decisión con la condición nota ≥ 5." },
    { enunciado: "¿Qué escribe este algoritmo? «total = 0; REPETIR 4 VECES: total = total + 5; FIN REPETIR; ESCRIBIR total».",
      pasos: ["Empieza con total = 0.", "Vuelta 1: 5; vuelta 2: 10; vuelta 3: 15; vuelta 4: 20.", "Escribe el valor final."],
      resultado: "Escribe 20." },
    { enunciado: "Este algoritmo para regar una planta tiene un error: «MIENTRAS la tierra esté seca HACER: mirar la planta; FIN MIENTRAS». ¿Cuál es?",
      pasos: ["Dentro del bucle nunca se echa agua.", "La tierra seguirá seca para siempre.", "Es un bucle infinito: hay que añadir «echar un poco de agua» dentro."],
      resultado: "Falta el paso que cambia la condición: echar agua." },
  ],
  errores: [
    "Escribir pasos ambiguos («un poco», «más o menos»).",
    "Olvidar el inicio o el fin en el diagrama de flujo.",
    "Usar un rectángulo para una decisión: va en un rombo con dos salidas.",
    "Crear bucles infinitos porque la condición nunca cambia.",
    "No probar los casos extremos, como el valor justo del límite.",
  ],
  ejercicios: [
    { q: "¿Qué es un algoritmo?", sol: "Un conjunto ordenado y finito de instrucciones para resolver un problema." },
    { q: "Escribe las tres partes de un algoritmo.", sol: "Entrada, proceso y salida." },
    { q: "Escribe cuatro características de un buen algoritmo.", sol: "Preciso, ordenado, finito y eficiente." },
    { q: "¿Cuáles son las tres estructuras básicas?", sol: "Secuencia, decisión y repetición." },
    { q: "¿Qué símbolo se usa en un diagrama de flujo para una decisión? ¿Y para el inicio?", sol: "Un rombo; un óvalo." },
    { q: "¿Qué es el pseudocódigo?", sol: "Una forma de escribir algoritmos con palabras del idioma y estructura de lenguaje de programación." },
    { q: "Escribe en pseudocódigo un algoritmo que lea dos números y escriba su suma.", sol: "INICIO · LEER a · LEER b · suma = a + b · ESCRIBIR suma · FIN." },
    { q: "¿Qué es una traza?", sol: "Seguir el algoritmo a mano, paso a paso, con datos concretos." },
    { q: "¿Qué es un bucle infinito?", sol: "Una repetición que no termina nunca porque la condición no cambia." },
    { q: "Pon dos ejemplos de algoritmos del mundo real.", sol: "El GPS que calcula rutas y las recomendaciones de vídeos." },
  ],
  quiz: [
    { q: "En un diagrama de flujo, el rombo indica…", o: ["una decisión", "el inicio", "una acción"], a: 0, e: "Decisión." },
    { q: "El óvalo indica…", o: ["inicio o fin", "una decisión", "un dato"], a: 0, e: "Inicio o fin." },
    { q: "«Si llueve, coger paraguas» es una…", o: ["decisión", "secuencia", "repetición"], a: 0, e: "Decisión." },
    { q: "Un algoritmo debe ser…", o: ["finito", "infinito", "ambiguo"], a: 0, e: "Finito." },
    { q: "La palabra algoritmo viene de…", o: ["al-Juarismi", "un robot", "un videojuego"], a: 0, e: "Matemático persa." },
    { q: "En pseudocódigo, para pedir un dato se escribe…", o: ["LEER", "FIN", "SI"], a: 0, e: "LEER." },
    { q: "Seguir un algoritmo a mano con datos es hacer una…", o: ["traza", "abstracción", "compilación"], a: 0, e: "Traza." },
    { q: "Para adivinar un número del 1 al 100, lo más eficiente es…", o: ["decir la mitad cada vez", "probar del 1 en adelante", "decir números al azar"], a: 0, e: "Búsqueda binaria." },
    { q: "«Mientras… hacer» representa una…", o: ["repetición", "secuencia", "salida"], a: 0, e: "Bucle." },
    { q: "Los pasos dentro de un bucle se escriben con…", o: ["sangría", "mayúsculas", "colores"], a: 0, e: "Sangría." },
  ],
  examen: [
    { q: "REPETIR 3 VECES: x = x + 2, con x = 1 al inicio, deja x en…", o: ["7", "6", "3"], a: 0, e: "1 + 2 + 2 + 2." },
    { q: "Un algoritmo que sirve para cualquier dato es…", o: ["general", "infinito", "ambiguo"], a: 0, e: "General." },
    { q: "El romboide se usa para…", o: ["entrada y salida de datos", "decisiones", "el fin"], a: 0, e: "Datos." },
  ],
  feynman: ["Qué es un algoritmo y qué características debe tener", "Cómo se dibuja un diagrama de flujo con una decisión", "Cómo comprobar con una traza si un algoritmo funciona"],
  mapa: mapa("ALGORITMOS", "var(--eso)", [
    ["Definición", "pasos ordenados y finitos", COL.azul],
    ["Estructuras", "secuencia · decisión · repetición", COL.verde],
    ["Representación", "diagrama de flujo · pseudocódigo", COL.morado],
    ["Comprobación", "traza · casos extremos", COL.rojo],
  ], 300),
  tarjetas: [
    ["Algoritmo", "Conjunto ordenado y finito de instrucciones."],
    ["Secuencia", "Pasos que se ejecutan uno tras otro."],
    ["Decisión", "Elegir un camino según una condición."],
    ["Repetición", "Repetir unos pasos varias veces."],
    ["Diagrama de flujo", "Representación de un algoritmo con símbolos y flechas."],
    ["Rombo", "Símbolo de decisión en un diagrama de flujo."],
    ["Pseudocódigo", "Algoritmo escrito con palabras y estructura de programa."],
    ["Traza", "Seguimiento manual de un algoritmo con datos concretos."],
  ],
  familias: ["Escribid juntos el algoritmo de una receta familiar y comprobad si es preciso.", "Jugad a adivinar un número del 1 al 100 con «mayor o menor».", "Dibujad el diagrama de flujo de una rutina de la mañana."],
  profesores: {
    saberes: "Algoritmos: definición, características, entrada-proceso-salida, estructuras de control (secuencia, selección, repetición), diagramas de flujo, pseudocódigo, trazas y eficiencia; algoritmos en la sociedad (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Diagramas de flujo de situaciones cotidianas en papel continuo.", "Concurso del algoritmo más eficiente para ordenar cartas.", "Trazas por parejas: uno escribe el algoritmo, el otro lo ejecuta a mano."],
  },
  fuentes: [RD, wiki("Algoritmo", "Algoritmo"), wiki("Diagrama de flujo", "Diagrama_de_flujo"), { t: "CS Unplugged: búsqueda y ordenación", url: "https://www.csunplugged.org/es/" }],
  revisado: REV,
};
