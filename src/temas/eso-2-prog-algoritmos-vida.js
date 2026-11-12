// Programación y robótica 2º ESO: algoritmos en la vida diaria. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");
const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Algoritmos en la vida diaria",
  minutos: 45,
  objetivos: ["Definir algoritmo y sus características", "Reconocer algoritmos en situaciones cotidianas", "Representar algoritmos con lenguaje natural, pseudocódigo y diagramas de flujo", "Aplicar las estrategias del pensamiento computacional a problemas sencillos"],
  claves: ["algoritmo", "secuencia", "decisión", "repetición", "entrada", "salida", "diagrama de flujo", "pseudocódigo", "descomposición", "patrón", "abstracción"],
  pregunta: {
    texto: "¿Qué tienen en común una receta de tortilla, las instrucciones de un mueble de IKEA y la forma en que TikTok decide qué vídeo enseñarte después?",
    respuesta: "Todas son <b>algoritmos</b>: listas de pasos ordenados para conseguir un resultado. La receta y las instrucciones las sigue una persona; el de la red social lo ejecuta un ordenador, que analiza qué vídeos has visto, cuánto tiempo y cuáles te han gustado, para elegir el siguiente. La idea es la misma: <b>entrada, pasos y salida</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un algoritmo?</h3><p>Un <mark>algoritmo</mark> es un <b>conjunto de instrucciones ordenadas y finitas que permiten resolver un problema o realizar una tarea</b>. La palabra viene del nombre de <b>al-Juarismi</b>, un matemático persa del siglo IX que escribió libros con métodos paso a paso para hacer cálculos. Seguimos algoritmos todos los días sin darnos cuenta: al lavarnos los dientes, al preparar la mochila, al seguir una receta, al hacer una división larga o al ir de casa al instituto. Todo algoritmo tiene tres partes: unos <b>datos de entrada</b> (los ingredientes, los números de la operación), un <b>proceso</b> (los pasos que se siguen) y un <b>resultado o salida</b> (el plato preparado, la solución). Los ordenadores funcionan gracias a algoritmos: cada programa es un algoritmo, o muchos, escritos en un lenguaje que la máquina entiende.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Algoritmo de una receta: entrada huevos, patatas y aceite; proceso pelar, freír, batir y cuajar; salida una tortilla">${BG}
        ${caja(8, 50, 72, 70, "", "var(--pen)")}${t(44, 42, "entrada", { size: 10, color: "var(--pen)" })}${t(44, 74, "huevos", { size: 9.5 })}${t(44, 90, "patatas", { size: 9.5 })}${t(44, 106, "aceite", { size: 9.5 })}
        ${caja(94, 50, 72, 70, "", "var(--red)")}${t(130, 42, "proceso", { size: 10, color: "var(--red)" })}${t(130, 70, "1. pelar", { size: 9 })}${t(130, 84, "2. freír", { size: 9 })}${t(130, 98, "3. batir", { size: 9 })}${t(130, 112, "4. cuajar", { size: 9 })}
        ${caja(180, 50, 72, 70, "", "var(--leaf)")}${t(216, 42, "salida", { size: 10, color: "var(--leaf)" })}<ellipse cx="216" cy="86" rx="26" ry="16" fill="#f2c94c" stroke="#b8860b" stroke-width="2"/>${t(216, 112, "tortilla", { size: 9.5 })}
        ${fl(80, 85, 92, 85, "var(--ink)", 2)}${fl(166, 85, 178, 85, "var(--ink)", 2)}${t(130, 150, "una receta es un algoritmo", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Características de un buen algoritmo</h3><p>No cualquier lista de pasos es un buen algoritmo. Tiene que cumplir varias condiciones. Debe ser <mark>preciso</mark>: cada paso tiene que estar claro y no admitir dos interpretaciones; «echa un poco de sal» es poco preciso para una máquina, mientras que «echa 5 gramos de sal» sí lo es. Debe ser <mark>ordenado</mark>: los pasos tienen un orden y, si se cambia, el resultado puede ser otro; no es lo mismo «ponerse los calcetines y luego los zapatos» que al revés. Debe ser <mark>finito</mark>: tiene que terminar en algún momento; un algoritmo que dice «remover hasta que esté bien» puede no terminar nunca si no se sabe qué es «bien». Y debe ser <b>definido</b>: con los mismos datos de entrada, siempre debe dar el mismo resultado. Además, para un mismo problema puede haber <b>varios algoritmos</b> distintos, y algunos son más rápidos o eficientes que otros.</p>`,
    },
    {
      html: `<h3>Secuencia, decisión y repetición</h3><p>Todos los algoritmos, desde una receta hasta un videojuego, se construyen combinando solo tres estructuras. La <mark>secuencia</mark>: pasos que se siguen uno detrás de otro, en orden (abrir la puerta, entrar, cerrar la puerta). La <mark>decisión</mark> o condición: el algoritmo elige qué hacer según si algo se cumple o no (si llueve, coger el paraguas; si no, coger la gorra). Y la <mark>repetición</mark> o bucle: un grupo de pasos que se repite varias veces o hasta que se cumple una condición (batir los huevos 30 veces; seguir remando hasta llegar a la orilla). Con estas tres piezas se puede describir cualquier proceso. Cuando aprendas Scratch verás que corresponden a los bloques en fila, a los bloques «si… entonces» y a los bloques «repetir» o «por siempre».</p>${tabla(["Estructura", "Palabra clave", "Ejemplo cotidiano"], [["Secuencia", "primero… después…", "vestirse: camiseta, pantalón, calcetines, zapatos"], ["Decisión", "si… entonces… si no", "si el semáforo está en verde, cruzar; si no, esperar"], ["Repetición", "repetir… / mientras…", "mientras haya platos sucios, fregar uno"]])}`,
    },
    {
      html: `<h3>Formas de representar un algoritmo</h3><p>Un algoritmo se puede escribir de varias formas. En <b>lenguaje natural</b>, con frases normales: es fácil de entender, pero a veces es largo o ambiguo. En <mark>pseudocódigo</mark>, con frases cortas y palabras clave parecidas a las de los lenguajes de programación (INICIO, LEER, SI, ENTONCES, SI NO, MIENTRAS, ESCRIBIR, FIN): es más preciso y está a un paso del código. Y con un <mark>diagrama de flujo</mark>, un dibujo con símbolos unidos por flechas: el óvalo para el inicio y el final, el rectángulo para las acciones, el rombo para las decisiones (con dos salidas, sí y no) y el paralelogramo para pedir o mostrar datos. El diagrama permite ver de un vistazo el camino que sigue el algoritmo y descubrir errores, como una decisión que no lleva a ninguna parte o un bucle que no termina nunca.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de flujo para cruzar un semáforo: mirar el semáforo, decisión está en verde, si no esperar y volver a mirar, si sí cruzar">${BG}
        <ellipse cx="80" cy="18" rx="30" ry="11" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>${t(80, 22, "inicio", { size: 10 })}
        ${caja(36, 38, 88, 24, "mirar semáforo", "var(--pen)", { size: 9.5 })}
        <path d="M80 74 L 124 98 L 80 122 L 36 98 Z" fill="#e6a100" fill-opacity=".18" stroke="#b8860b" stroke-width="2"/>${t(80, 102, "¿verde?", { size: 10 })}
        ${caja(160, 86, 70, 24, "esperar", "var(--red)", { size: 9.5 })}${caja(46, 134, 68, 24, "cruzar", "var(--leaf)", { size: 9.5 })}
        ${fl(80, 29, 80, 37, "var(--ink)", 1.5)}${fl(80, 62, 80, 73, "var(--ink)", 1.5)}${fl(124, 98, 159, 98, "var(--ink)", 1.5)}${fl(80, 122, 80, 133, "var(--ink)", 1.5)}
        <path d="M195 86 V 50 H 126" fill="none" stroke="var(--ink)" stroke-width="1.5"/>${fl(140, 50, 126, 50, "var(--ink)", 1.5)}
        ${t(140, 92, "no", { size: 9, color: "var(--red)" })}${t(90, 131, "sí", { size: 9, color: "var(--leaf)", anchor: "start" })}${t(200, 140, "repite hasta verde", { size: 9, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Algoritmos en casa y en la calle</h3><p>Si te fijas, verás algoritmos en todas partes. <b>Las instrucciones de montaje</b> de un mueble o de un juguete son una secuencia de pasos con dibujos. <b>Una receta</b> tiene ingredientes (entrada), pasos (proceso) y un plato final (salida); además incluye decisiones («si la masa está muy seca, añade agua») y repeticiones («remover cada 5 minutos»). <b>Un semáforo</b> sigue un algoritmo de cambio de luces, con tiempos fijos o con sensores. <b>La lavadora</b> ejecuta programas distintos según la ropa: llenar de agua, calentar, girar, aclarar, centrifugar. <b>Las normas de un juego de mesa</b> son también un algoritmo: en cada turno, tira el dado, avanza, si caes en una casilla especial haz lo que dice, y repite hasta que alguien llegue a la meta. Incluso para resolver el cubo de Rubik existen algoritmos: secuencias de giros que se aprenden de memoria.</p>`,
    },
    {
      html: `<h3>Algoritmos en el mundo digital</h3><p>Los ordenadores usan algoritmos constantemente, y algunos influyen mucho en nuestra vida. El <b>GPS</b> usa algoritmos para calcular la ruta más corta o más rápida entre dos puntos, teniendo en cuenta el tráfico. Los <b>buscadores</b> ordenan millones de páginas para mostrarte primero las más relevantes. Las <b>redes sociales</b> y las plataformas de vídeo o música usan <mark>algoritmos de recomendación</mark>: analizan lo que miras, cuánto tiempo, lo que te gusta y lo que comparten personas parecidas a ti, para decidir qué contenido mostrarte. Esto puede ser útil, pero también puede encerrarte en una «burbuja» en la que solo ves lo que ya piensas y hacer que pases más tiempo del que querías. Conocer cómo funcionan nos ayuda a usarlos con <b>sentido crítico</b>: buscar otras fuentes, controlar el tiempo de uso y recordar que lo que vemos lo ha elegido una máquina.</p>`,
      video: { id: "ti315UlVtS4", titulo: "Microaprendizaje: ¿qué es el pensamiento computacional?", canal: "Educar Portal", vistas: 269551 },
    },
    {
      html: `<h3>El pensamiento computacional</h3><p>El <mark>pensamiento computacional</mark> es la forma de pensar que usan los programadores para resolver problemas, y sirve para cualquier situación. Tiene cuatro estrategias. La <b>descomposición</b>: dividir un problema grande en partes más pequeñas y fáciles; organizar una fiesta se divide en invitaciones, comida, música y decoración. El <b>reconocimiento de patrones</b>: buscar cosas que se repiten o se parecen a problemas que ya sabemos resolver; si ya organizaste un cumpleaños, puedes aprovechar lo que hiciste. La <b>abstracción</b>: quedarse con lo importante e ignorar los detalles que no influyen; para el plano del metro no importa el color de los edificios, solo el orden de las estaciones. Y el <b>diseño de algoritmos</b>: escribir los pasos ordenados para resolver cada parte. Después se <b>evalúa</b> la solución: ¿funciona?, ¿se puede mejorar?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las cuatro estrategias del pensamiento computacional: descomposición, patrones, abstracción y algoritmos">${BG}
        ${[["descomposición", "dividir en partes", 10, 20, "var(--pen)"], ["patrones", "buscar lo que se repite", 134, 20, "#b8860b"], ["abstracción", "quedarse con lo importante", 10, 96, "var(--red)"], ["algoritmos", "pasos ordenados", 134, 96, "var(--leaf)"]].map(([a, b, x, y, c]) => `<rect x="${x}" y="${y}" width="116" height="64" rx="10" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-width="2"/>${t(x + 58, y + 26, a, { size: 11, color: c })}${t(x + 58, y + 46, b, { size: 8.5, weight: 400 })}`).join("")}</svg>`,
    },
    {
      html: `<h3>Practicar sin ordenador: actividades desenchufadas</h3><p>Se puede aprender mucho sobre algoritmos <b>sin usar el ordenador</b>. En el juego del <b>robot humano</b>, un alumno hace de robot en una cuadrícula pintada en el suelo y otro le da órdenes solo con flechas (avanzar, girar a la izquierda, girar a la derecha) para llegar a una meta evitando obstáculos. Así se ve enseguida si falta un paso o hay un giro equivocado. Otra actividad es <b>ordenar una baraja</b> de cartas siguiendo un método fijo y contar cuántos pasos hace falta con cada método. También se puede escribir el algoritmo para <b>dibujar una figura</b> y que otro compañero la dibuje sin verla; si el dibujo no sale igual, el algoritmo no era lo bastante preciso. Estas actividades se llaman <b>desenchufadas</b> y ayudan a entender las ideas antes de programarlas en Scratch o en un robot.</p>`,
    },
  ],
  figura: {
    titulo: "Las tres estructuras de todo algoritmo",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Secuencia: pasos uno tras otro. Decisión: un rombo con dos caminos, sí y no. Repetición: un grupo de pasos que vuelve atrás hasta cumplir una condición">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${t(110, 34, "Secuencia", { size: 17, color: "var(--pen)", font: D })}${[0, 1, 2].map((i) => `<rect x="60" y="${52 + i * 46}" width="100" height="30" rx="8" fill="var(--pen)" fill-opacity=".14" stroke="var(--pen)" stroke-width="2"/>${t(110, 72 + i * 46, "paso " + (i + 1), { size: 12 })}${i < 2 ? fl(110, 82 + i * 46, 110, 96 + i * 46, "var(--ink)", 1.8) : ""}`).join("")}
      ${t(320, 34, "Decisión", { size: 17, color: "#b8860b", font: D })}<path d="M320 56 L 372 92 L 320 128 L 268 92 Z" fill="#e6a100" fill-opacity=".18" stroke="#b8860b" stroke-width="2"/>${t(320, 97, "¿se cumple?", { size: 11 })}
      ${fl(290, 113, 266, 160, "var(--ink)", 1.8)}${fl(350, 113, 374, 160, "var(--ink)", 1.8)}${caja(226, 162, 80, 28, "sí: A", "var(--leaf)", { size: 12 })}${caja(334, 162, 80, 28, "no: B", "var(--red)", { size: 12 })}
      ${t(530, 34, "Repetición", { size: 17, color: "var(--leaf)", font: D })}<rect x="480" y="62" width="100" height="30" rx="8" fill="var(--leaf)" fill-opacity=".14" stroke="var(--leaf)" stroke-width="2"/>${t(530, 82, "paso", { size: 12 })}
      <path d="M530 92 V 112" stroke="var(--ink)" stroke-width="1.8"/><path d="M530 112 L 566 134 L 530 156 L 494 134 Z" fill="#e6a100" fill-opacity=".18" stroke="#b8860b" stroke-width="2"/>${t(530, 138, "¿fin?", { size: 11 })}
      <path d="M494 134 H 462 V 77 H 478" fill="none" stroke="var(--red)" stroke-width="1.8"/>${fl(470, 77, 479, 77, "var(--red)", 1.8)}${t(452, 110, "no", { size: 11, color: "var(--red)", anchor: "end" })}${t(530, 190, "sí: seguir", { size: 11, color: "var(--leaf)" })}
    </svg>`,
  },
  video: { id: "U3CGMyjzlvM", titulo: "¿Qué es un algoritmo?", canal: "Magic Markers", vistas: 2505958, megusta: 0, busqueda: "qué es un algoritmo ejemplos vida diaria" },
  ejemplos: [
    { enunciado: "Escribe en pseudocódigo el algoritmo para decidir si llevar abrigo.",
      pasos: ["INICIO. LEER temperatura.", "SI temperatura < 15 ENTONCES ESCRIBIR «lleva abrigo».", "SI NO ESCRIBIR «no hace falta abrigo». FIN."],
      resultado: "Una decisión con dos caminos." },
    { enunciado: "Algoritmo para fregar los platos usando repetición.",
      pasos: ["Llenar el fregadero con agua y jabón.", "MIENTRAS queden platos sucios: coger uno, frotarlo, aclararlo y dejarlo en el escurridor.", "Vaciar el fregadero."],
      resultado: "Secuencia con una repetición dentro." },
    { enunciado: "Aplica la descomposición a «preparar una excursión de clase».",
      pasos: ["Dividir en partes: destino, transporte, comida, permisos, presupuesto.", "Repartir cada parte a un grupo.", "Para cada parte, escribir los pasos (algoritmo)."],
      resultado: "Un problema grande convertido en varios pequeños." },
  ],
  errores: [
    "Escribir pasos poco precisos como «un poco» o «hasta que esté bien».",
    "Olvidar que el orden de los pasos cambia el resultado.",
    "Hacer una repetición sin condición de fin: el algoritmo no termina nunca.",
    "Dibujar un rombo con una sola salida: las decisiones tienen dos (sí y no).",
    "Pensar que los algoritmos solo existen en los ordenadores.",
  ],
  ejercicios: [
    { q: "Define algoritmo y di de dónde viene la palabra.", sol: "Conjunto de instrucciones ordenadas y finitas para resolver un problema; del matemático al-Juarismi." },
    { q: "Identifica entrada, proceso y salida en el algoritmo de hacer un batido.", sol: "Entrada: fruta, leche. Proceso: cortar, echar en la batidora, batir. Salida: el batido." },
    { q: "¿Por qué «añade sal al gusto» no es una instrucción precisa para un robot?", sol: "Porque no dice cuánta sal; un robot necesita una cantidad exacta." },
    { q: "Nombra las tres estructuras de un algoritmo con un ejemplo de cada una.", sol: "Secuencia (vestirse), decisión (si llueve, paraguas), repetición (fregar mientras haya platos)." },
    { q: "Escribe en pseudocódigo: si la nota es 5 o más, aprobado; si no, suspenso.", sol: "INICIO; LEER nota; SI nota ≥ 5 ENTONCES ESCRIBIR aprobado; SI NO ESCRIBIR suspenso; FIN." },
    { q: "¿Qué forma tiene en un diagrama de flujo una decisión? ¿Y una acción?", sol: "Rombo; rectángulo." },
    { q: "Escribe un algoritmo de 5 pasos para ir de clase a la biblioteca del centro.", sol: "Respuesta abierta: salir del aula, girar a la derecha, bajar la escalera, avanzar por el pasillo, entrar en la puerta de la izquierda." },
    { q: "¿Qué es un algoritmo de recomendación? Pon un ejemplo.", sol: "El que decide qué contenido mostrarte según lo que has visto: el de una plataforma de vídeos." },
    { q: "Explica la abstracción con un ejemplo.", sol: "Quedarse con lo importante: un plano de metro solo muestra el orden de las estaciones, no la forma real de las calles." },
    { q: "¿Qué es una actividad desenchufada?", sol: "Una actividad para aprender programación o algoritmos sin ordenador, como el robot humano." },
  ],
  quiz: [
    { q: "Un algoritmo es…", o: ["un conjunto de pasos ordenados y finitos", "un ordenador", "un tipo de cable"], a: 0, e: "Pasos ordenados." },
    { q: "La palabra «algoritmo» viene de…", o: ["al-Juarismi", "Arquímedes", "Algol"], a: 0, e: "Matemático persa." },
    { q: "Una receta es…", o: ["un algoritmo", "un programa informático", "un periférico"], a: 0, e: "Pasos ordenados." },
    { q: "«Si llueve, coge el paraguas» es una…", o: ["secuencia", "decisión", "repetición"], a: 1, e: "Decisión." },
    { q: "«Bate 30 veces» es una…", o: ["repetición", "decisión", "salida"], a: 0, e: "Repetición." },
    { q: "Un algoritmo debe ser…", o: ["infinito", "finito", "secreto"], a: 1, e: "Tiene que terminar." },
    { q: "En un diagrama de flujo el inicio y el fin son…", o: ["óvalos", "rombos", "rectángulos"], a: 0, e: "Óvalos." },
    { q: "El GPS usa algoritmos para…", o: ["calcular rutas", "cargar la batería", "hacer fotos"], a: 0, e: "La ruta más rápida." },
    { q: "Dividir un problema en partes es…", o: ["descomposición", "abstracción", "patrón"], a: 0, e: "Descomposición." },
    { q: "El pseudocódigo es…", o: ["un lenguaje máquina", "frases cortas con palabras clave", "un dibujo"], a: 1, e: "A medio camino entre lenguaje natural y código." },
  ],
  examen: [
    { q: "Con los mismos datos, un algoritmo debe dar…", o: ["el mismo resultado", "resultados al azar", "ningún resultado"], a: 0, e: "Es definido." },
    { q: "Fijarse en lo que se repite es…", o: ["reconocer patrones", "depurar", "descomponer"], a: 0, e: "Patrones." },
    { q: "Las «burbujas» en redes sociales se deben a…", o: ["algoritmos de recomendación", "virus", "el router"], a: 0, e: "Te muestran lo que ya te gusta." },
  ],
  feynman: ["Qué es un algoritmo y qué características debe tener", "Cuáles son las tres estructuras de todo algoritmo", "Qué son las cuatro estrategias del pensamiento computacional"],
  mapa: mapa("ALGORITMO", "var(--eso)", [
    ["Características", "preciso · ordenado · finito", "var(--pen)"],
    ["Estructuras", "secuencia · decisión · repetición", "var(--red)"],
    ["Representar", "pseudocódigo · diagrama de flujo", "#b8860b"],
    ["Pensamiento", "descomponer · patrones · abstraer", "var(--leaf)"],
  ], 290),
  tarjetas: [
    ["Algoritmo", "Instrucciones ordenadas y finitas para resolver un problema."],
    ["Secuencia", "Pasos uno detrás de otro."],
    ["Decisión", "Si… entonces… si no."],
    ["Repetición", "Pasos que se repiten: bucle."],
    ["Pseudocódigo", "Algoritmo escrito con frases cortas y palabras clave."],
    ["Diagrama de flujo", "Dibujo del algoritmo con símbolos y flechas."],
    ["Descomposición", "Dividir un problema en partes pequeñas."],
    ["Abstracción", "Quedarse con lo importante."],
  ],
  familias: ["Escribid juntos el algoritmo de una receta familiar con decisiones y repeticiones.", "Jugad al robot humano en el pasillo de casa con órdenes de flechas.", "Comentad cómo os recomiendan vídeos o canciones las aplicaciones que usáis."],
  profesores: {
    saberes: "Pensamiento computacional: concepto y características de algoritmo, estructuras de secuencia, selección e iteración, representación con pseudocódigo y diagramas de flujo, descomposición, patrones y abstracción (RD 217/2022 y currículos autonómicos de Programación y robótica).",
    ideas: ["Robot humano en cuadrícula con tarjetas de flechas.", "Diagrama de flujo de una rutina diaria en cartulina.", "Debate sobre algoritmos de recomendación y burbujas informativas."],
  },
  fuentes: [RD, wiki("Algoritmo", "Algoritmo"), wiki("Pensamiento computacional", "Pensamiento_computacional")],
  revisado: REV,
};
