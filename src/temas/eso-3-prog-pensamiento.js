// Programación y robótica 3º ESO: pensamiento computacional. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, mezcla } = require("./_eso3");

const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Pensamiento computacional",
  minutos: 50,
  objetivos: ["Entender qué es el pensamiento computacional y para qué sirve", "Aplicar sus cuatro pilares: descomposición, patrones, abstracción y algoritmos", "Resolver problemas cotidianos y de programación paso a paso", "Depurar soluciones buscando y corrigiendo errores"],
  claves: ["pensamiento computacional", "descomposición", "reconocimiento de patrones", "abstracción", "algoritmo", "depuración"],
  pregunta: {
    texto: "¿Qué tienen en común organizar una fiesta de cumpleaños, resolver un cubo de Rubik y programar un videojuego?",
    respuesta: "Que en los tres casos funciona la misma forma de pensar: <mark>dividir el problema en partes</mark>, buscar lo que se repite, quedarse con lo importante y seguir unos pasos ordenados. Eso es el <b>pensamiento computacional</b>, y sirve mucho más allá de los ordenadores.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el pensamiento computacional?</h3><p>El <b>pensamiento computacional</b> es una forma de resolver problemas inspirada en cómo trabajan los informáticos: plantear el problema de manera que <mark>una persona o una máquina pueda ejecutar la solución</mark>.</p><p>No consiste en pensar como un ordenador, sino en organizar nuestras ideas para que un ordenador nos ayude. La investigadora <b>Jeannette Wing</b> lo popularizó en 2006 y defendió que debía ser una habilidad básica, como leer, escribir o calcular.</p><p>Se apoya en <b>cuatro pilares</b>: descomposición, reconocimiento de patrones, abstracción y algoritmos.</p>`,
      video: { id: "ti315UlVtS4", titulo: "¿Qué es el pensamiento computacional?", canal: "Educar Portal", vistas: 269541, megusta: 0 },
    },
    {
      html: `<h3>Los cuatro pilares</h3>${tabla(["Pilar", "Qué significa", "Ejemplo: preparar una mochila de excursión"], [["<b>Descomposición</b>", "dividir un problema grande en partes pequeñas", "comida, ropa, botiquín, documentos"], ["<b>Patrones</b>", "buscar semejanzas o repeticiones", "cada día necesito lo mismo: repetir la lista"], ["<b>Abstracción</b>", "quedarse con lo esencial e ignorar lo irrelevante", "importa el peso y el tiempo, no el color de la mochila"], ["<b>Algoritmo</b>", "escribir los pasos ordenados de la solución", "1) mirar el tiempo, 2) elegir ropa, 3) meter comida…"]])}<p>Los cuatro se usan juntos y en cualquier orden.</p>`,
      svg: svg("Los cuatro pilares del pensamiento computacional alrededor de un problema", `${caja(90, 72, 80, 36, "problema", "var(--ink)")}${caja(10, 14, 110, 34, "descomposición", "var(--pen)")}${caja(140, 14, 110, 34, "patrones", "var(--leaf)")}${caja(10, 132, 110, 34, "abstracción", "var(--red)")}${caja(140, 132, 110, 34, "algoritmo", "var(--inf)")}<path d="M100 72 L 80 48 M160 72 L 180 48 M100 108 L 80 132 M160 108 L 180 132" stroke="var(--muted)" stroke-width="2"/>`),
    },
    {
      html: `<h3>Descomposición</h3><p>Un problema grande asusta; muchos problemas pequeños, no. <b>Descomponer</b> es dividir un problema en subproblemas más sencillos que se pueden resolver por separado (y a veces por personas distintas).</p><p>Por ejemplo, programar un videojuego de plataformas se descompone en:</p><ul><li>mover al personaje con el teclado,</li><li>hacer que salte y caiga (gravedad),</li><li>detectar las plataformas,</li><li>contar puntos y vidas,</li><li>mostrar la pantalla de fin de partida.</li></ul><p>Cada parte puede volver a dividirse hasta que sea fácil de programar. Así trabajan los equipos de software: cada persona se encarga de un módulo.</p>`,
    },
    {
      html: `<h3>Reconocimiento de patrones</h3><p>Un <b>patrón</b> es algo que se repite. Detectarlo ahorra trabajo: si ya sabemos resolver un caso, podemos reutilizar la solución en los parecidos.</p><ul><li>En matemáticas: 2, 4, 6, 8… cada número es el anterior más 2.</li><li>En un dibujo: un cuadrado se dibuja repitiendo 4 veces «avanza y gira 90°».</li><li>En un juego: todos los enemigos se mueven igual, solo cambia su posición inicial.</li></ul><p>En programación, los patrones se convierten en <mark>bucles</mark> (repetir) y en <mark>funciones</mark> (bloques reutilizables). Detectar patrones es lo que permite que un programa corto haga mucho trabajo.</p>`,
      svg: svg("Patrón: repetir cuatro veces avanzar y girar 90 grados dibuja un cuadrado", `<path d="M40 140 H 120 V 60 H 40 Z" fill="none" stroke="var(--pen)" stroke-width="3"/>${[[80, 140], [120, 100], [80, 60], [40, 100]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="10" fill="var(--sun)"/>${t(x, y + 4, i + 1, { s: 11 })}`).join("")}
        ${caja(146, 70, 104, 30, "repetir 4 veces", "var(--leaf)", { s: 11 })}${caja(158, 104, 92, 24, "avanzar 80", "var(--pen)", { s: 10 })}${caja(158, 132, 92, 24, "girar 90°", "var(--pen)", { s: 10 })}${t(80, 30, "patrón que se repite", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Abstracción</h3><p><b>Abstraer</b> es quedarse con la información importante para resolver el problema y descartar los detalles que no influyen. Es una de las ideas más poderosas de la informática.</p><p>El ejemplo clásico es el <b>plano del metro</b>: no respeta las distancias reales ni las curvas de las vías. Solo muestra lo que necesita el viajero: estaciones, líneas y conexiones. Por eso es tan fácil de usar.</p><p>Al programar un juego de fútbol, no necesitamos simular cada músculo del jugador: basta con su posición, su velocidad y si tiene el balón. Elegir bien qué datos guardar es la base de un buen programa.</p>`,
    },
    {
      html: `<h3>Algoritmos</h3><p>Un <b>algoritmo</b> es una secuencia <mark>finita, ordenada y precisa</mark> de instrucciones para resolver un problema. Una receta de cocina, las instrucciones de un mueble o el camino para llegar a clase son algoritmos.</p><p>Para que un ordenador lo ejecute, el algoritmo debe ser:</p><ul><li><b>Preciso</b>: sin ambigüedades. «Echa un poco de sal» no sirve para una máquina; «añade 5 g de sal», sí.</li><li><b>Ordenado</b>: los pasos tienen una secuencia.</li><li><b>Finito</b>: termina en algún momento.</li><li><b>Con entrada y salida</b>: recibe datos y produce un resultado.</li></ul><p>En el próximo tema aprenderás a representarlos con diagramas de flujo.</p>`,
      video: { id: "U3CGMyjzlvM", titulo: "¿Qué es un algoritmo?", canal: "Magic Markers", vistas: 2505929, megusta: 0 },
    },
    {
      html: `<h3>Depurar: aprender de los errores</h3><p>Casi ningún programa funciona a la primera. <b>Depurar</b> (en inglés, <i>debugging</i>) es buscar y corregir los errores, llamados <b>bugs</b>. Se cuenta que el término se popularizó cuando la programadora <b>Grace Hopper</b> y su equipo encontraron una polilla atascada en un ordenador en 1947.</p><p>Estrategias para depurar:</p><ul><li>Ejecutar el programa <b>paso a paso</b> y comprobar qué hace en cada momento.</li><li>Probar con datos distintos, incluidos casos extremos (0, números negativos, listas vacías).</li><li>Cambiar <b>una sola cosa</b> cada vez.</li><li>Explicar el código en voz alta a otra persona (o a un patito de goma).</li></ul>`,
    },
    {
      html: `<h3>Pensamiento computacional sin ordenador</h3><p>Estas habilidades se pueden practicar <b>desenchufadas</b>, sin pantallas:</p><ul><li><b>Robot humano</b>: un compañero da órdenes precisas («avanza 2 pasos», «gira a la derecha») para que otro llegue a un objetivo con los ojos tapados.</li><li><b>Cuadrícula de colores</b>: codificar un dibujo píxel a píxel con números y que otro lo reconstruya.</li><li><b>Ordenar</b>: buscar el método más rápido para ordenar cartas de menor a mayor.</li><li><b>Juegos de lógica</b>: sudokus, laberintos, el juego del Nim.</li></ul><p>Así se entiende que el pensamiento computacional es una manera de pensar, no una tecnología.</p>`,
    },
    {
      html: `<h3>Para qué sirve en la vida real</h3><p>El pensamiento computacional está detrás de casi todo lo digital: el GPS que calcula la ruta más corta, las recomendaciones de series, la predicción del tiempo o los robots que ayudan en un quirófano.</p><p>Pero también es útil sin ordenador: organizar el estudio de un examen (descomponer el temario), detectar errores que repites en los ejercicios (patrones), resumir un tema (abstracción) o planificar una tarea en grupo (algoritmo). Por eso se considera una competencia clave del siglo XXI y forma parte de la <b>competencia digital</b> del currículo.</p>`,
    },
  ],
  figura: {
    titulo: "Los cuatro pilares y la depuración",
    svg: `<svg viewBox="0 0 640 282" role="img" aria-label="Descomposición: dividir en partes; patrones: buscar lo que se repite; abstracción: quedarse con lo esencial; algoritmo: pasos ordenados; depuración: encontrar y corregir errores">
      <rect width="640" height="282" rx="16" fill="var(--paper)"/>
      ${[["Descomposición", "dividir el problema en partes pequeñas", "var(--pen)"], ["Patrones", "buscar lo que se repite → bucles y funciones", "var(--leaf)"], ["Abstracción", "quedarse con lo esencial (plano del metro)", "var(--red)"], ["Algoritmo", "pasos finitos, ordenados y precisos", "var(--inf)"], ["Depuración", "probar, encontrar el bug y corregirlo", "var(--ink)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="210" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "as1opL254NA", titulo: "Lógica de programación: aprende a programar en 10 minutos", canal: "Programador X", vistas: 2993615, megusta: 0, busqueda: "qué es programar lógica" },
  quiz: mezcla([
    { q: "Dividir un problema grande en partes pequeñas es…", o: ["descomposición", "abstracción", "depuración"], a: 0, e: "Primer pilar." },
    { q: "Quedarse con lo esencial e ignorar detalles irrelevantes es…", o: ["abstracción", "patrón", "algoritmo"], a: 0, e: "Como el plano del metro." },
    { q: "Buscar lo que se repite corresponde al pilar de…", o: ["reconocimiento de patrones", "descomposición", "depuración"], a: 0, e: "Lleva a bucles y funciones." },
    { q: "Un algoritmo debe ser…", o: ["finito, ordenado y preciso", "largo y complejo", "escrito en inglés"], a: 0, e: "Para que una máquina lo ejecute." },
    { q: "«Echa un poco de sal» no es una buena instrucción para una máquina porque…", o: ["es ambigua", "es muy larga", "no tiene números romanos"], a: 0, e: "Falta precisión." },
    { q: "Buscar y corregir errores en un programa se llama…", o: ["depurar", "compilar", "abstraer"], a: 0, e: "Debugging." },
    { q: "¿Quién popularizó el término pensamiento computacional en 2006?", o: ["Jeannette Wing", "Grace Hopper", "Ada Lovelace"], a: 0, e: "Investigadora estadounidense." },
    { q: "Repetir «avanza y gira 90°» cuatro veces dibuja un…", o: ["cuadrado", "triángulo", "círculo"], a: 0, e: "Patrón convertido en bucle." },
    { q: "Una actividad desenchufada es la que se hace…", o: ["sin ordenador", "sin internet pero con tablet", "con robots"], a: 0, e: "Papel, juego, movimiento." },
    { q: "Al depurar, conviene cambiar…", o: ["una sola cosa cada vez", "todo a la vez", "nada"], a: 0, e: "Así sabes qué lo arregló." },
  ]),
  examen: mezcla([
    { q: "En un juego, todos los enemigos se mueven igual: eso es un…", o: ["patrón", "bug", "dato de entrada"], a: 0, e: "Se programa una vez y se reutiliza." },
    { q: "El plano del metro es un ejemplo de…", o: ["abstracción", "descomposición", "algoritmo"], a: 0, e: "Solo lo necesario." },
    { q: "Un algoritmo que nunca termina incumple la condición de ser…", o: ["finito", "preciso", "ordenado"], a: 0, e: "Debe acabar." },
  ]),
  feynman: ["Qué es el pensamiento computacional y por qué no es lo mismo que programar", "Los cuatro pilares con un ejemplo de tu vida", "Qué características debe tener un algoritmo", "Cómo depurar un error"],
  mapa: mapa("PENSAMIENTO C.", "var(--eso)", [
    ["Descomponer", "partes pequeñas", "var(--pen)"],
    ["Patrones", "lo que se repite", "var(--leaf)"],
    ["Abstraer", "lo esencial", "var(--red)"],
    ["Algoritmo", "pasos precisos", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Pensamiento computacional", "Resolver problemas de forma que una persona o máquina pueda ejecutar la solución."],
    ["Descomposición", "Dividir un problema en subproblemas."],
    ["Patrón", "Algo que se repite y permite reutilizar soluciones."],
    ["Abstracción", "Quedarse con lo importante y descartar lo irrelevante."],
    ["Algoritmo", "Secuencia finita, ordenada y precisa de instrucciones."],
    ["Bug", "Error en un programa."],
    ["Depurar", "Buscar y corregir errores."],
    ["Actividad desenchufada", "Practicar el pensamiento computacional sin ordenador."],
  ],
  familias: ["Jugad al «robot humano»: uno da órdenes precisas para que otro llegue a la cocina con los ojos tapados.", "Escribid juntos el algoritmo de una receta sencilla, sin ambigüedades.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Pensamiento computacional: descomposición, reconocimiento de patrones, abstracción, algoritmos y depuración; actividades desenchufadas (RD 217/2022, materias optativas de programación y competencia digital).",
    ideas: ["Robot humano en el patio sobre una cuadrícula de tiza.", "Reto de ordenar cartas con distintos métodos y contar los pasos.", "Descomponer en grupo un videojuego conocido en módulos."],
  },
  fuentes: [RD, { t: "Code.org: actividades desenchufadas de ciencias de la computación", url: "https://code.org/curriculum/unplugged" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Problemas resueltos",
  ejemplos: [
    { enunciado: "Aplica los cuatro pilares para organizar el estudio de un examen de cinco temas en una semana.",
      pasos: ["Descomposición: cinco temas → leer, resumir y hacer ejercicios de cada uno.", "Patrones: cada tema sigue el mismo ciclo; los errores que repito son de signos.", "Abstracción: priorizo lo que entra en el examen, no las curiosidades.", "Algoritmo: lunes a viernes un tema cada día; sábado repaso; domingo descanso."],
      resultado: "Un plan claro y realista." },
    { enunciado: "Escribe un algoritmo preciso para que un robot humano lleve un vaso de la mesa A a la mesa B, 3 pasos al frente y 2 a la derecha.",
      pasos: ["Coger el vaso con la mano derecha.", "Avanzar 3 pasos.", "Girar 90° a la derecha.", "Avanzar 2 pasos.", "Dejar el vaso sobre la mesa B."],
      resultado: "Cinco instrucciones sin ambigüedad." },
    { enunciado: "Un programa debe dibujar un hexágono. Encuentra el patrón.",
      pasos: ["Un hexágono tiene 6 lados iguales.", "En cada vértice se gira 360° / 6 = 60°.", "Patrón: «avanza L y gira 60°»."],
      resultado: "Repetir 6 veces: avanzar L, girar 60°." },
  ],
  errores: [
    "Creer que pensamiento computacional es lo mismo que saber usar un ordenador.",
    "Intentar resolver un problema grande de golpe, sin descomponerlo.",
    "Escribir instrucciones ambiguas («un poco», «más o menos»).",
    "Olvidar que el algoritmo debe terminar.",
    "Cambiar muchas cosas a la vez al depurar.",
    "Copiar los mismos pasos muchas veces en vez de detectar el patrón.",
  ],
  ejercicios: [
    { q: "Define los cuatro pilares del pensamiento computacional.", sol: "Descomposición (dividir), patrones (lo que se repite), abstracción (lo esencial) y algoritmos (pasos ordenados)." },
    { q: "Descompón el problema «organizar una excursión de clase».", sol: "Por ejemplo: destino, transporte, presupuesto, autorizaciones, comida, horario." },
    { q: "Encuentra el patrón: 3, 7, 11, 15… ¿Qué número sigue?", sol: "Se suma 4 cada vez: 19." },
    { q: "¿Qué información necesitas para programar un semáforo? ¿Qué puedes ignorar?", sol: "Necesitas: colores, orden y duración de cada luz. Puedes ignorar: el material, la altura o la marca." },
    { q: "Reescribe de forma precisa: «calienta la leche un rato».", sol: "Por ejemplo: «calienta 200 ml de leche en el microondas a 800 W durante 60 segundos»." },
    { q: "¿Qué ángulo se gira en cada vértice para dibujar un triángulo equilátero con «avanza y gira»?", sol: "360° / 3 = 120°." },
    { q: "Un programa suma bien 2 + 3 pero falla con 0 + 0. ¿Qué estrategia de depuración se aplicó?", sol: "Probar con casos extremos." },
    { q: "Explica por qué el plano del metro es una abstracción.", sol: "Porque elimina distancias y curvas reales y muestra solo estaciones, líneas y conexiones, que es lo que necesita el viajero." },
    { q: "Escribe el algoritmo para lavarte los dientes en 6 pasos.", sol: "Ejemplo: coger cepillo, poner pasta, cepillar 2 minutos, escupir, enjuagar, guardar cepillo." },
    { q: "Inventa una actividad desenchufada para enseñar bucles a niños de primaria.", sol: "Respuesta abierta; por ejemplo, una coreografía con un paso que se repite N veces." },
  ],
};
