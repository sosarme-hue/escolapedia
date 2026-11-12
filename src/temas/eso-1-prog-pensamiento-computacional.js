// Programación y robótica 1º ESO: el pensamiento computacional. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "El pensamiento computacional",
  minutos: 50,
  objetivos: ["Explicar qué es el pensamiento computacional y para qué sirve", "Aplicar la descomposición, el reconocimiento de patrones, la abstracción y los algoritmos a problemas cotidianos", "Resolver retos desenchufados sin ordenador", "Valorar el error como parte del proceso de resolver problemas"],
  claves: ["pensamiento computacional", "problema", "descomposición", "patrón", "abstracción", "algoritmo", "instrucción", "secuencia", "evaluación", "depuración", "actividad desenchufada", "cuadrícula", "generalizar", "lógica", "creatividad"],
  pregunta: {
    texto: "Organizar una fiesta de cumpleaños para toda la clase parece un lío enorme. ¿Cómo lo harías para que no se te olvide nada?",
    respuesta: "Dividiéndolo en partes más pequeñas: invitaciones, comida, música, juegos, decoración. Cada parte es un problema más sencillo, que se puede repartir entre varias personas. Seguramente algunas partes se parecen a cosas que ya has hecho antes (una lista de la compra, por ejemplo), y puedes reutilizar esa experiencia. Y al final, escribes los pasos en orden. Sin saberlo, estarías usando el <b>pensamiento computacional</b>: <b>descomponer</b>, buscar <b>patrones</b>, quedarte con lo <b>importante</b> y crear un <b>plan paso a paso</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el pensamiento computacional?</h3><p>El <mark>pensamiento computacional</mark> es una forma de pensar para <b>resolver problemas</b> de manera ordenada, inspirada en cómo trabajan los informáticos. Consiste en analizar un problema, dividirlo, encontrar lo que tiene en común con otros, quedarse con lo esencial y diseñar una solución paso a paso que podría seguir una persona o una máquina. Aunque se llame «computacional», <b>no hace falta un ordenador</b> para usarlo: lo aplicamos al preparar una receta, organizar la mochila, planificar un viaje o resolver un problema de matemáticas. Lo que sí ocurre es que es la forma de pensar necesaria para <b>programar</b>: antes de escribir una sola línea de código, hay que haber entendido el problema y pensado la solución. Se apoya en cuatro pilares: la <b>descomposición</b>, el <b>reconocimiento de patrones</b>, la <b>abstracción</b> y los <b>algoritmos</b>. Además, incluye una actitud: probar, equivocarse, aprender del error y volver a intentarlo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los cuatro pilares del pensamiento computacional alrededor de un problema: descomposición, patrones, abstracción y algoritmo">${BG}
        ${cj(90, 72, 80, 36, "problema", COL.gris, { size: 12 })}
        ${cj(10, 18, 104, 34, "descomposición", COL.azul, { size: 11 })}${cj(146, 18, 104, 34, "patrones", COL.verde, { size: 11 })}
        ${cj(10, 128, 104, 34, "abstracción", COL.morado, { size: 11 })}${cj(146, 128, 104, 34, "algoritmo", COL.naranja, { size: 11 })}
        <path d="M100 72 L 80 52 M160 72 L 180 52 M100 108 L 80 128 M160 108 L 180 128" stroke="var(--muted)" stroke-width="1.6"/></svg>`,
      video: { id: "veXgaxaNICM", titulo: "Pensamiento computacional", canal: "Ucorp", vistas: 79185 },
    },
    {
      html: `<h3>Descomposición</h3><p>La <mark>descomposición</mark> consiste en <b>dividir un problema grande y complejo en partes más pequeñas</b> y fáciles de resolver. Cada parte se resuelve por separado y, al juntarlas, se tiene la solución completa. Es lo que hacemos al limpiar una habitación muy desordenada: en vez de agobiarnos, decidimos recoger primero la ropa, luego los libros, después la mesa y al final barrer. En programación, un videojuego se descompone en partes: los personajes, el escenario, el movimiento del protagonista, los enemigos, los puntos, los niveles, la pantalla final… Y cada una de esas partes, si sigue siendo difícil, se puede volver a dividir. La descomposición tiene otra ventaja: permite <b>repartir el trabajo en equipo</b>, porque cada persona puede encargarse de una parte. Al descomponer hay que tener cuidado de no olvidar ninguna parte y de pensar cómo encajarán luego entre sí.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Árbol de descomposición: hacer un videojuego se divide en personajes, escenario, reglas y sonidos; las reglas se dividen a su vez en puntos y vidas">${BG}
        ${cj(80, 14, 100, 28, "hacer un videojuego", COL.azul, { size: 10.5 })}
        ${[["personajes", 8], ["escenario", 72], ["reglas", 136], ["sonidos", 200]].map(([s, x]) => cj(x, 74, 56, 26, s, COL.agua, { size: 9.5 })).join("")}
        ${[36, 100, 164, 228].map((x) => `<path d="M130 42 L ${x} 74" stroke="var(--muted)" stroke-width="1.4"/>`).join("")}
        ${cj(110, 132, 48, 24, "puntos", COL.verde, { size: 9.5 })}${cj(166, 132, 48, 24, "vidas", COL.verde, { size: 9.5 })}
        <path d="M164 100 L 134 132 M164 100 L 190 132" stroke="var(--muted)" stroke-width="1.4"/></svg>`,
    },
    {
      html: `<h3>Reconocimiento de patrones</h3><p>Un <mark>patrón</mark> es algo que <b>se repite</b> o que se parece entre distintos problemas o dentro de un mismo problema. Reconocer patrones permite <b>reutilizar soluciones</b> que ya conocemos y ahorrar trabajo. Por ejemplo, si sabemos cómo se dibuja un cuadrado (avanzar y girar, cuatro veces), enseguida vemos que un triángulo o un hexágono siguen el mismo patrón, cambiando solo el número de lados y el ángulo de giro. En un juego, todos los enemigos se mueven de forma parecida, así que basta con programar uno y copiarlo. En las matemáticas, las series de números siguen patrones (2, 4, 6, 8…). Y en la vida diaria, si sabemos llegar en bici al instituto, ese conocimiento nos sirve para llegar a la biblioteca, que está cerca. En programación, los patrones que se repiten se convierten en <b>bucles</b> («repetir») o en <b>bloques propios</b> que se pueden usar muchas veces.</p>`,
    },
    {
      html: `<h3>Abstracción</h3><p>La <mark>abstracción</mark> consiste en <b>quedarse con lo importante</b> de un problema e ignorar los detalles que no influyen en la solución. Un ejemplo clásico es el plano del metro: no muestra las calles, los edificios ni las distancias reales, sino solo las estaciones, el orden en que están y las líneas que las conectan, que es lo único que necesita un viajero. Si mostrara todo, sería imposible de leer. Del mismo modo, para programar un juego de fútbol no hace falta saber el color de las botas de cada jugador, pero sí su posición, su velocidad y quién tiene el balón. La abstracción permite crear <b>modelos simplificados</b> de la realidad que una máquina puede manejar. Hacer una buena abstracción no es fácil: hay que pensar bien qué datos son <b>imprescindibles</b> y cuáles se pueden descartar. Si quitamos demasiado, la solución no funcionará; si dejamos demasiado, será complicada.</p>${tabla(["Problema", "Lo importante", "Lo que se puede ignorar"], [["Ir en metro a un sitio", "estaciones, líneas, transbordos", "calles, distancias exactas"], ["Juego de fútbol", "posición, velocidad, balón", "color de las botas, el público"], ["Receta de cocina", "ingredientes, cantidades, pasos", "la marca de la sartén"], ["Mapa del tiempo", "temperatura, lluvia, viento", "forma exacta de las nubes"]])}`,
    },
    {
      html: `<h3>Algoritmos</h3><p>Un <mark>algoritmo</mark> es una <b>secuencia ordenada y finita de pasos</b> para resolver un problema o hacer una tarea. Una receta de cocina, las instrucciones de montaje de un mueble o las indicaciones para llegar a un lugar son algoritmos. Para que un algoritmo funcione, sus pasos deben ser <b>claros y precisos</b> (sin ambigüedad: «añade un poco de sal» no es preciso; «añade 5 gramos de sal» sí), estar en el <b>orden correcto</b> y <b>terminar</b> en algún momento. Un mismo problema puede resolverse con distintos algoritmos, unos más eficientes que otros. Un <b>programa</b> no es más que un algoritmo escrito en un lenguaje que entiende el ordenador. Por eso, antes de programar, conviene escribir el algoritmo con palabras o con un dibujo, y comprobar que funciona «ejecutándolo» a mano, como si fuéramos la máquina. Los algoritmos se estudian con más detalle en el siguiente tema.</p>`,
      video: { id: "TvbRJtfRZiM", titulo: "¿Qué es el pensamiento computacional?", canal: "El Profe Nor", vistas: 64014 },
    },
    {
      html: `<h3>Actividades desenchufadas</h3><p>Una forma divertida de practicar el pensamiento computacional es hacer <mark>actividades desenchufadas</mark>, sin ordenador. Por ejemplo, el <b>robot humano</b>: en una cuadrícula dibujada en el suelo o en papel, una persona hace de «robot» y solo puede obedecer órdenes muy simples: «avanza una casilla», «gira a la derecha», «gira a la izquierda», «coge». Otra persona escribe el programa con flechas para llevar al robot desde la salida hasta un tesoro, evitando obstáculos. Si el robot acaba en otro sitio, hay que <b>buscar el error</b> en la secuencia de flechas. Otras actividades son dibujar una figura siguiendo las instrucciones de un compañero sin verla (y comprobar lo difícil que es dar instrucciones precisas), ordenar las tarjetas de un proceso mezclado, codificar un dibujo en una cuadrícula con números o adivinar un número con preguntas de «mayor o menor». Estas actividades enseñan a pensar como un programador sin preocuparse por la tecnología.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuadrícula de cinco por cuatro con un robot en la salida, obstáculos, un tesoro y el camino marcado con flechas, junto al programa escrito con flechas">${BG}
        ${Array.from({ length: 5 }, (_, c) => Array.from({ length: 4 }, (_, r) => `<rect x="${14 + c * 30}" y="${24 + r * 30}" width="30" height="30" fill="var(--card)" stroke="var(--line)"/>`).join("")).join("")}
        <rect x="74" y="54" width="30" height="30" fill="#94a3b8"/><rect x="104" y="114" width="30" height="30" fill="#94a3b8"/>
        ${t(29, 133, "🤖", { size: 16 })}${t(149, 43, "⭐", { size: 16 })}
        <path d="M29 129 V 99 H 59 V 39 H 140" fill="none" stroke="var(--red)" stroke-width="2.4" stroke-dasharray="5 3"/>
        ${t(212, 34, "programa", { size: 10.5, color: COL.azul })}
        ${["1. ↑ avanza 1", "2. → avanza 1", "3. ↑ avanza 2", "4. → avanza 3"].map((s, i) => et(176, 56 + i * 22, s, 80, { anchor: "start", size: 9.5, weight: 400 })).join("")}</svg>`,
    },
    {
      html: `<h3>Evaluar y aprender del error</h3><p>Una parte esencial del pensamiento computacional es la <mark>evaluación</mark>: comprobar si la solución funciona de verdad, si es correcta en todos los casos y si se podría mejorar. Para ello se prueba con distintos ejemplos, incluidos los casos extraños («¿y si el número es cero?», «¿y si el personaje llega al borde?»). Cuando algo falla, toca <mark>depurar</mark>: localizar el error, entender por qué ocurre y corregirlo. Equivocarse no es un fracaso, sino una pista para aprender. Los programadores profesionales dedican mucho tiempo a probar y depurar. También conviene <b>comparar soluciones</b>: dos algoritmos pueden llegar al mismo resultado, pero uno puede necesitar menos pasos o ser más fácil de entender. Finalmente, el pensamiento computacional también implica <b>generalizar</b>: una vez resuelto un problema, preguntarse si la misma solución sirve para otros parecidos. Perseverancia, paciencia, trabajo en equipo y creatividad son tan importantes como la lógica.</p>`,
    },
  ],
  figura: {
    titulo: "El pensamiento computacional en ocho ideas",
    svg: rejilla([
      ["Problema", "entenderlo bien primero", COL.gris],
      ["Descomponer", "dividir en partes", COL.azul],
      ["Patrones", "lo que se repite", COL.verde],
      ["Abstraer", "quedarse con lo esencial", COL.morado],
      ["Algoritmo", "pasos ordenados", COL.naranja],
      ["Probar", "con varios casos", COL.agua],
      ["Depurar", "el error es una pista", COL.rojo],
      ["Generalizar", "reutilizar la solución", COL.sol],
    ], 4, 86, "Resumen: problema, descomposición, patrones, abstracción, algoritmo, prueba, depuración y generalización"),
  },
  video: { id: "vDrfsiy21To", titulo: "¿Qué es el pensamiento computacional? Explicado para niños", canal: "Guadalupe Gómez (Code and Play)", vistas: 33378, megusta: 0, busqueda: "pensamiento computacional para estudiantes" },
  ejemplos: [
    { enunciado: "Descompón la tarea «preparar la mochila para una excursión de un día».",
      pasos: ["Comida y bebida: bocadillo, fruta, agua.", "Ropa: chubasquero, gorra, calcetines de repuesto.", "Seguridad: crema solar, tiritas, móvil cargado.", "Documentación: autorización, tarjeta sanitaria."],
      resultado: "Cuatro subproblemas: comida, ropa, seguridad y documentos." },
    { enunciado: "Observa: para dibujar un cuadrado se repite 4 veces «avanzar y girar 90°». ¿Qué patrón sigue un pentágono regular?",
      pasos: ["Patrón: repetir tantas veces como lados «avanzar y girar».", "El giro total es siempre 360°.", "Pentágono: 360° ÷ 5 = 72°."],
      resultado: "Repetir 5 veces: avanzar y girar 72°." },
    { enunciado: "Quieres hacer un juego de atrapar fruta que cae. ¿Qué información es importante y cuál puedes ignorar?",
      pasos: ["Importante: posición de la cesta y de cada fruta, velocidad de caída, puntos.", "Se puede ignorar: tipo exacto de fruta, su sabor, la hora del día."],
      resultado: "Posiciones, velocidad y puntos (abstracción)." },
  ],
  errores: [
    "Pensar que el pensamiento computacional solo sirve con ordenadores.",
    "Empezar a programar sin haber entendido ni descompuesto el problema.",
    "Dar instrucciones ambiguas, como «gira un poco».",
    "Quitar en la abstracción datos que sí eran necesarios.",
    "Rendirse al primer error en lugar de depurar.",
  ],
  ejercicios: [
    { q: "¿Qué es el pensamiento computacional?", sol: "Una forma de pensar para resolver problemas de manera ordenada, como lo haría un informático." },
    { q: "Escribe los cuatro pilares del pensamiento computacional.", sol: "Descomposición, reconocimiento de patrones, abstracción y algoritmos." },
    { q: "¿Qué es descomponer? Pon un ejemplo.", sol: "Dividir un problema en partes más pequeñas; organizar una fiesta en invitaciones, comida, música y juegos." },
    { q: "¿Qué es un patrón? Pon un ejemplo.", sol: "Algo que se repite o se parece; dibujar polígonos repitiendo avanzar y girar." },
    { q: "¿Qué es la abstracción? Pon un ejemplo.", sol: "Quedarse con lo importante e ignorar lo demás; un plano del metro." },
    { q: "¿Qué características debe tener un algoritmo?", sol: "Pasos claros y precisos, en orden y que terminen." },
    { q: "Escribe un algoritmo para lavarse los dientes.", sol: "Poner pasta en el cepillo, mojarlo, cepillar arriba y abajo dos minutos, escupir, enjuagar la boca y el cepillo, guardarlo." },
    { q: "¿Qué es una actividad desenchufada? Pon un ejemplo.", sol: "Una actividad de pensamiento computacional sin ordenador; el robot humano en una cuadrícula." },
    { q: "¿Qué significa depurar?", sol: "Encontrar y corregir errores en una solución." },
    { q: "¿Por qué es útil reconocer patrones?", sol: "Porque permite reutilizar soluciones conocidas y ahorrar trabajo." },
  ],
  quiz: [
    { q: "Dividir un problema en partes es…", o: ["descomposición", "abstracción", "depuración"], a: 0, e: "Descomposición." },
    { q: "Un plano del metro es un ejemplo de…", o: ["abstracción", "bucle", "patrón"], a: 0, e: "Abstracción." },
    { q: "Una receta es un…", o: ["algoritmo", "patrón", "sensor"], a: 0, e: "Algoritmo." },
    { q: "Lo que se repite en varios problemas es un…", o: ["patrón", "error", "dato"], a: 0, e: "Patrón." },
    { q: "Para usar el pensamiento computacional…", o: ["no hace falta ordenador", "hace falta internet", "hace falta un robot"], a: 0, e: "Se puede hacer sin ordenador." },
    { q: "«Añade un poco de sal» es una instrucción…", o: ["ambigua", "precisa", "repetitiva"], a: 0, e: "No es precisa." },
    { q: "Corregir errores se llama…", o: ["depurar", "descomponer", "abstraer"], a: 0, e: "Depurar." },
    { q: "Un pentágono regular gira en cada vértice…", o: ["72°", "90°", "60°"], a: 0, e: "360 ÷ 5." },
    { q: "Un algoritmo debe…", o: ["terminar", "ser infinito", "ser ambiguo"], a: 0, e: "Ser finito." },
    { q: "Usar una solución conocida en un problema parecido es…", o: ["generalizar", "olvidar", "descomponer"], a: 0, e: "Generalizar." },
  ],
  examen: [
    { q: "La descomposición facilita…", o: ["repartir el trabajo en equipo", "no probar", "complicar el problema"], a: 0, e: "Cada uno una parte." },
    { q: "En la abstracción se ignoran…", o: ["los detalles que no influyen", "los datos importantes", "todos los datos"], a: 0, e: "Lo irrelevante." },
    { q: "Un programa es un algoritmo escrito…", o: ["en un lenguaje de programación", "en una servilleta", "en binario a mano"], a: 0, e: "En un lenguaje que entiende la máquina." },
  ],
  feynman: ["Cuáles son los cuatro pilares del pensamiento computacional, con un ejemplo de cada uno", "Por qué la abstracción ayuda a resolver problemas", "Por qué equivocarse forma parte de programar"],
  mapa: mapa("PENSAMIENTO COMPUTACIONAL", "var(--eso)", [
    ["Descomponer", "partes pequeñas", COL.azul],
    ["Patrones", "lo que se repite", COL.verde],
    ["Abstraer", "lo esencial", COL.morado],
    ["Algoritmo", "pasos · probar · depurar", COL.naranja],
  ], 300),
  tarjetas: [
    ["Pensamiento computacional", "Forma ordenada de resolver problemas, como un informático."],
    ["Descomposición", "Dividir un problema en partes más pequeñas."],
    ["Patrón", "Algo que se repite o se parece."],
    ["Abstracción", "Quedarse con lo esencial e ignorar el resto."],
    ["Algoritmo", "Secuencia ordenada y finita de pasos."],
    ["Depurar", "Encontrar y corregir errores."],
    ["Actividad desenchufada", "Ejercicio de programación sin ordenador."],
    ["Generalizar", "Aplicar una solución a problemas parecidos."],
  ],
  familias: ["Jugad al robot humano por el pasillo de casa con órdenes de flechas.", "Descomponed juntos una tarea doméstica grande, como preparar una comida familiar.", "Buscad patrones en baldosas, telas o canciones."],
  profesores: {
    saberes: "Pensamiento computacional: descomposición, reconocimiento de patrones, abstracción, algoritmos, evaluación, depuración y generalización, con actividades desenchufadas (materia optativa de Programación y robótica, en el marco del RD 217/2022 y la competencia digital).",
    ideas: ["Robot humano en una cuadrícula de cinta adhesiva en el suelo.", "Dictado de dibujos: un alumno describe una figura y el resto la dibuja sin verla.", "Búsqueda de patrones en mosaicos y su traducción a bucles."],
  },
  fuentes: [RD, wiki("Pensamiento computacional", "Pensamiento_computacional"), { t: "CS Unplugged (en español)", url: "https://www.csunplugged.org/es/" }, { t: "INTEF: Escuela de Pensamiento Computacional", url: "https://code.intef.es/" }],
  revisado: REV,
};
