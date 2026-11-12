// Programación y robótica 1º ESO: bucles y repeticiones. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

const bq = (x, y, w, s, c) => `<rect x="${x}" y="${y}" width="${w}" height="20" rx="4" fill="${c}"/>${et(x + 7, y + 14, s, w - 12, { anchor: "start", color: "#fff", size: 10 })}`;
// Bloque en C (bucle) con cabecera, hueco de alto h y pie.
const cb = (x, y, w, h, s, c = "#e8892c") => `<path d="M${x} ${y} h ${w} v 20 H ${x + 18} v ${h} H ${x + w} v 12 H ${x} Z" fill="${c}"/>${et(x + 7, y + 14, s, w - 12, { anchor: "start", color: "#fff", size: 10 })}`;
const VE = "#16a34a", AZ = "#4c97ff", AM = "#c98a00";
// Polígono regular de n lados centrado en (cx, cy) con radio r.
const poli = (cx, cy, r, n, c) => `<path d="${Array.from({ length: n }, (_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(" ")} Z" fill="none" stroke="${c}" stroke-width="2.4" stroke-linejoin="round"/>`;

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Bucles y repeticiones",
  minutos: 55,
  objetivos: ["Explicar qué es un bucle y por qué simplifica los programas", "Usar los bloques repetir, por siempre y repetir hasta", "Dibujar polígonos y figuras con la extensión Lápiz usando bucles", "Combinar bucles anidados y contadores, y evitar bucles infinitos no deseados"],
  claves: ["bucle", "repetición", "iteración", "repetir n veces", "por siempre", "repetir hasta", "condición de parada", "bucle anidado", "contador", "variable", "lápiz", "polígono", "ángulo exterior", "bucle infinito", "patrón"],
  pregunta: {
    texto: "Un profesor castiga a un alumno a escribir 500 veces «no hablaré en clase». El alumno, que sabe programar, tarda diez segundos. ¿Cómo lo hace?",
    respuesta: "Con un <b>bucle</b>: en lugar de escribir la instrucción 500 veces, escribe una sola vez «repetir 500 veces: escribir la frase». El ordenador hace el trabajo repetitivo, sin cansarse ni equivocarse. Los bucles son una de las herramientas más potentes de la programación: con pocas instrucciones se consiguen resultados enormes. (Otra cosa es que al profesor le parezca bien.)",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un bucle?</h3><p>Un <mark>bucle</mark> o estructura de <b>repetición</b> es una instrucción que hace que un grupo de instrucciones se <b>repita varias veces</b>. Cada una de esas repeticiones se llama <mark>iteración</mark>. Sin bucles, para que un personaje dé 10 pasos con animación, habría que poner 10 veces los mismos bloques uno debajo de otro: el programa sería largo, difícil de leer y, si quisiéramos cambiar algo, habría que cambiarlo 10 veces. Con un bucle, se escriben los bloques <b>una sola vez</b> dentro de un bloque «repetir 10». Los bucles aparecen siempre que reconocemos un <b>patrón</b> que se repite: los lados de un polígono, los pasos de una animación, las vueltas de un juego, los segundos de un temporizador. En Scratch, los bucles están en la categoría <b>Control</b> (color naranja) y tienen forma de <b>C</b> o de abrazadera: los bloques que se quieren repetir se colocan <b>dentro</b> de la C. Hay tres tipos: «repetir n veces», «por siempre» y «repetir hasta que…».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación: sin bucle, el mismo par de bloques escrito cuatro veces; con bucle, un bloque repetir 4 que contiene el par una sola vez">${BG}
        ${t(64, 20, "sin bucle", { size: 10.5, color: COL.rojo })}
        ${[0, 1, 2, 3].map((i) => [["mover 50", 28 + i * 36], ["girar 90°", 45 + i * 36]].map(([s, y]) => `<rect x="14" y="${y}" width="100" height="16" rx="3" fill="${AZ}" stroke="rgba(0,0,0,.18)"/>${et(21, y + 12, s, 88, { anchor: "start", color: "#fff", size: 9.5 })}`).join("")).join("")}
        ${t(190, 20, "con bucle", { size: 10.5, color: COL.verde })}
        ${cb(140, 46, 110, 40, "repetir 4")}${bq(158, 66, 88, "mover 50", AZ)}${bq(158, 86, 88, "girar 90°", AZ)}
        ${t(195, 140, "8 bloques → 3", { size: 10, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "ZNkHWaiBEvA", titulo: "Estructura repetitiva REPETIR: introducción a los algoritmos y la programación", canal: "TodoCode", vistas: 190060 },
    },
    {
      html: `<h3>Repetir un número de veces</h3><p>El bloque <mark>«repetir 10»</mark> ejecuta los bloques de su interior <b>exactamente el número de veces</b> indicado y, después, el programa continúa con el bloque que hay debajo de la C. Se usa cuando sabemos de antemano cuántas veces hay que repetir algo. Por ejemplo: «repetir 10: mover 10 pasos, siguiente disfraz, esperar 0,1 segundos» hace que un personaje dé 10 pasos animados y luego se pare; «repetir 3: tocar sonido pop hasta que termine» hace sonar tres veces el sonido; y «repetir 20: cambiar efecto desvanecer por 5» hace que un objeto se vuelva transparente poco a poco. El número puede ser fijo o venir de una <b>variable</b> o de una operación: «repetir (número al azar entre 1 y 6)» repite un número de veces distinto cada vez. Un detalle importante: si dentro del bucle no hay ninguna espera, las repeticiones ocurren tan rápido que solo vemos el resultado final. Para ver el proceso, hay que añadir pequeñas esperas.</p>`,
    },
    {
      html: `<h3>Por siempre y repetir hasta</h3><p>El bloque <mark>«por siempre»</mark> repite su interior <b>sin fin</b>, hasta que se pulsa el botón rojo de parar o un bloque «detener». Se usa para lo que debe estar ocurriendo todo el rato mientras funciona el programa: la música de fondo, una nube que se mueve, un personaje que sigue al ratón o la comprobación de si algo choca con algo. Como nunca termina, no tiene muesca en la parte de abajo: no se puede poner nada debajo. El bloque <mark>«repetir hasta que…»</mark> repite su interior <b>mientras no se cumpla una condición</b>; en cuanto la condición es verdadera, se sale del bucle y el programa continúa. Por ejemplo: «repetir hasta que ¿tocando borde?: mover 5 pasos» hace avanzar al objeto hasta que llega al borde, y entonces se para. Es muy útil cuando no sabemos cuántas repeticiones harán falta: «repetir hasta que la respuesta sea correcta: preguntar…». La condición es un bloque hexagonal, de las categorías Sensores u Operadores.</p>${tabla(["Bloque", "Cuántas veces", "Ejemplo de uso"], [["repetir 10", "un número fijo", "dibujar un polígono, animación de 10 pasos"], ["por siempre", "sin fin", "música de fondo, seguir al ratón"], ["repetir hasta que…", "hasta que se cumpla la condición", "avanzar hasta tocar el borde"]])}`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de un bucle repetir hasta: se comprueba la condición; si no se cumple se ejecutan los bloques y se vuelve a comprobar; si se cumple se sale">${BG}
        <path d="M90 22 l 50 22 l -50 22 l -50 -22 Z" fill="var(--card)" stroke="${AM}" stroke-width="2"/>${t(90, 48, "¿tocando borde?", { size: 9.5 })}
        ${cj(48, 96, 84, 26, "mover 5 pasos", COL.azul, { size: 10 })}
        ${fl(90, 66, 90, 94, "var(--ink)", 1.6)}${t(98, 84, "no", { size: 9.5, anchor: "start", color: COL.rojo })}
        <path d="M48 109 H 20 V 44 H 38" fill="none" stroke="var(--ink)" stroke-width="1.6"/>${fl(28, 44, 39, 44, "var(--ink)", 1.6)}
        ${fl(140, 44, 196, 44, "var(--ink)", 1.6)}${t(166, 38, "sí", { size: 9.5, color: COL.verde })}
        ${cj(196, 32, 56, 26, "seguir", COL.verde, { size: 10 })}
        ${t(130, 156, "se repite mientras la condición sea falsa", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Dibujar con bucles: la extensión Lápiz</h3><p>Una forma muy visual de practicar los bucles es dibujar con la extensión <mark>Lápiz</mark>, que se añade desde el botón de extensiones (abajo a la izquierda). Con ella, el objeto deja un rastro al moverse, como si llevara un lápiz. Los bloques principales son <b>«bajar lápiz»</b> (empieza a dibujar), <b>«subir lápiz»</b> (deja de dibujar), <b>«borrar todo»</b>, «fijar color del lápiz a…» y «fijar tamaño del lápiz a…». Para dibujar un <b>cuadrado</b> de 100 de lado: bajar lápiz, repetir 4 veces: mover 100 pasos y girar 90 grados. Para cualquier <mark>polígono regular</mark> se sigue el mismo patrón: <b>repetir tantas veces como lados</b> «mover y girar», y el ángulo de giro es siempre <b>360 dividido entre el número de lados</b> (porque al final el objeto da una vuelta completa). Triángulo: repetir 3, girar 120°. Pentágono: repetir 5, girar 72°. Hexágono: repetir 6, girar 60°. Si se repite 36 veces «mover 10, girar 10°», se obtiene algo muy parecido a un círculo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Polígonos regulares dibujados con bucles: triángulo repetir 3 girar 120, cuadrado repetir 4 girar 90, pentágono repetir 5 girar 72 y hexágono repetir 6 girar 60">${BG}
        ${[[3, COL.rojo], [4, COL.azul], [5, COL.verde], [6, COL.morado]].map(([n, c], i) => {
          const x = 34 + i * 64;
          return `${poli(x, 66, 24, n, c)}${t(x, 118, `repetir ${n}`, { size: 9.5 })}${t(x, 134, `girar ${360 / n}°`, { size: 9.5, weight: 400, color: c })}`;
        }).join("")}
        ${t(130, 164, "giro = 360° ÷ número de lados", { size: 10.5, color: COL.azul })}</svg>`,
      video: { id: "KFwgPVjMjak", titulo: "Scratch: dibujar polígonos (formas)", canal: "Computing in a Nutshell", vistas: 128745 },
    },
    {
      html: `<h3>Bucles anidados</h3><p>Un bucle puede contener dentro otro bucle: se dice que son <mark>bucles anidados</mark>. En ese caso, por cada repetición del bucle de fuera, el bucle de dentro se ejecuta <b>completo</b>. Por ejemplo: «repetir 6: [repetir 4: mover 60, girar 90°]; girar 60°» dibuja un cuadrado, gira 60 grados, dibuja otro cuadrado, gira otra vez… hasta completar 6 cuadrados que forman una bonita flor o rosetón. El número total de veces que se ejecutan las instrucciones de dentro es la <b>multiplicación</b> de las repeticiones: 6 × 4 = 24 movimientos. Los bucles anidados se usan para dibujar mosaicos, filas y columnas de objetos (por ejemplo, una cuadrícula de ladrillos en un juego: repetir 5 filas, y en cada fila repetir 8 ladrillos) o para hacer animaciones dentro de un movimiento más largo. Son muy potentes, pero hay que tener cuidado de colocar cada bloque en el bucle correcto: un bloque fuera de su sitio cambia completamente el resultado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rosetón de seis cuadrados girados 60 grados entre sí, dibujado con dos bucles anidados">${BG}
        <g transform="translate(76 92)">${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="0" y="-44" width="44" height="44" fill="none" stroke="${["var(--red)", "#e8892c", "#c98a00", "var(--leaf)", "var(--pen)", "#8b5cf6"][i]}" stroke-width="2" transform="rotate(${i * 60})"/>`).join("")}</g>
        ${cb(150, 24, 100, 98, "repetir 6")}${cb(168, 46, 80, 40, "repetir 4", "#f0a35e")}${bq(186, 66, 60, "mover 60", AZ)}${bq(186, 86, 60, "girar 90°", AZ)}${bq(168, 120, 78, "girar 60°", AZ)}
        ${t(200, 172, "6 × 4 = 24 lados", { size: 10, color: COL.azul })}</svg>`,
    },
    {
      html: `<h3>Contadores y bucles infinitos</h3><p>A menudo queremos saber <b>cuántas veces</b> se ha repetido algo, o usar ese número dentro del bucle. Para eso se usa una <mark>variable contador</mark>: se crea una variable (por ejemplo, «vueltas») en la categoría Variables, se pone a 0 antes del bucle («dar a vueltas el valor 0») y dentro del bucle se suma 1 en cada repetición («sumar a vueltas 1»). Así, podemos hacer que un objeto diga el número de cada vuelta, contar los saltos de un personaje o hacer una cuenta atrás (empezando en 10 y sumando −1). Un contador también puede servir para <b>parar</b> un bucle: «repetir hasta que vueltas = 10». Hay que tener cuidado con los <mark>bucles infinitos</mark> no deseados: si en un «repetir hasta» la condición nunca llega a cumplirse (por ejemplo, porque olvidamos sumar 1 al contador o porque el objeto nunca puede tocar lo que esperamos), el programa se queda atrapado repitiendo para siempre y no hace nada más. Es uno de los errores más comunes al programar.</p>`,
    },
    {
      html: `<h3>Elegir el bucle adecuado</h3><p>Para decidir qué bucle usar, basta con hacerse dos preguntas. ¿<b>Sé cuántas veces</b> hay que repetir? Entonces, «repetir n veces». ¿Se tiene que repetir <b>mientras el programa esté en marcha</b>, sin final? Entonces, «por siempre». ¿Se tiene que repetir <b>hasta que pase algo</b>, sin saber cuándo? Entonces, «repetir hasta que…». Algunos ejemplos: una cuenta atrás de 10 segundos usa «repetir 10»; un personaje que sigue al ratón durante todo el juego usa «por siempre»; una pelota que cae hasta tocar el suelo usa «repetir hasta que ¿tocando suelo?». Además, conviene <b>no meter dentro</b> del bucle lo que solo debe ocurrir una vez (como colocar el objeto en su posición inicial o bajar el lápiz), sino ponerlo <b>antes</b>; y lo que debe pasar al terminar, <b>después</b>. Leer el programa en voz alta, vuelta por vuelta, ayuda a comprobar que cada bloque está en su sitio.</p>`,
      video: { id: "8bLtTjs3F3I", titulo: "Concepto de bucle o ciclo en programación con Scratch 3.0", canal: "Docente Pro", vistas: 13307 },
    },
  ],
  figura: {
    titulo: "Los bucles en ocho ideas",
    svg: rejilla([
      ["Bucle", "repetir instrucciones", COL.naranja],
      ["Iteración", "cada vuelta", COL.sol],
      ["Repetir n", "número fijo de veces", COL.azul],
      ["Por siempre", "sin fin", COL.rojo],
      ["Repetir hasta", "hasta que se cumpla algo", COL.verde],
      ["Polígonos", "giro = 360° ÷ lados", COL.morado],
      ["Anidados", "bucle dentro de bucle", COL.agua],
      ["Contador", "variable que suma 1", COL.gris],
    ], 4, 86, "Resumen: bucle, iteración, tipos de repetición, polígonos, bucles anidados y contadores"),
  },
  video: { id: "-a739uTtpZw", titulo: "Cómo usar bucles en Scratch 3.0", canal: "Cosas de Informatica", vistas: 4399, megusta: 0, busqueda: "bucles en scratch repetir por siempre" },
  ejemplos: [
    { enunciado: "Escribe el programa para dibujar un octógono regular de lado 50.",
      pasos: ["Número de lados: 8.", "Ángulo de giro: 360 ÷ 8 = 45°.", "Bajar lápiz; repetir 8: mover 50 pasos, girar 45 grados."],
      resultado: "Repetir 8 [mover 50, girar 45°]." },
    { enunciado: "¿Cuántas veces suena el sonido? «repetir 3: [repetir 4: tocar sonido]».",
      pasos: ["El bucle interior suena 4 veces.", "El exterior lo ejecuta 3 veces.", "3 × 4 = 12."],
      resultado: "12 veces." },
    { enunciado: "Este programa no termina nunca: «dar a n el valor 0; repetir hasta que n = 5: decir n durante 1 s». ¿Por qué y cómo se arregla?",
      pasos: ["n vale siempre 0: nunca llega a 5.", "Falta cambiar n dentro del bucle.", "Añadir «sumar a n 1» dentro del bucle."],
      resultado: "Es un bucle infinito; se arregla sumando 1 a n en cada vuelta." },
  ],
  errores: [
    "Poner dentro del bucle lo que solo debe hacerse una vez, como ir a la posición inicial.",
    "Olvidar las esperas y no ver la animación.",
    "Calcular mal el giro de un polígono: es 360 ÷ lados, no el ángulo interior.",
    "Crear un bucle infinito porque la condición de parada nunca se cumple.",
    "Intentar poner bloques debajo de «por siempre».",
  ],
  ejercicios: [
    { q: "¿Qué es un bucle? ¿Y una iteración?", sol: "Una estructura que repite instrucciones; cada una de las repeticiones." },
    { q: "Escribe los tres tipos de bucle de Scratch.", sol: "Repetir n veces, por siempre y repetir hasta que." },
    { q: "¿Cuándo usarías «por siempre»? Pon un ejemplo.", sol: "Para algo que debe ocurrir todo el rato; la música de fondo." },
    { q: "¿Cuándo usarías «repetir hasta que»?", sol: "Cuando hay que repetir hasta que ocurra algo, sin saber cuántas veces." },
    { q: "¿Qué ángulo se gira para dibujar un hexágono regular?", sol: "360 ÷ 6 = 60°." },
    { q: "Escribe el programa para dibujar un triángulo equilátero de lado 80.", sol: "Bajar lápiz; repetir 3: mover 80, girar 120°." },
    { q: "¿Qué son los bucles anidados?", sol: "Un bucle dentro de otro." },
    { q: "¿Cuántos pasos da «repetir 5: [repetir 3: mover 10]»?", sol: "5 × 3 × 10 = 150 pasos." },
    { q: "¿Para qué sirve un contador?", sol: "Para contar las repeticiones y usar o comprobar ese número." },
    { q: "¿Qué es un bucle infinito no deseado y por qué ocurre?", sol: "Un bucle que no termina nunca porque la condición de salida no se cumple." },
  ],
  quiz: [
    { q: "Los bucles en Scratch están en la categoría…", o: ["Control", "Apariencia", "Sonido"], a: 0, e: "Control." },
    { q: "Para un cuadrado se repite 4 veces girar…", o: ["90°", "60°", "120°"], a: 0, e: "90°." },
    { q: "El bucle que no termina nunca es…", o: ["por siempre", "repetir 10", "repetir hasta"], a: 0, e: "Por siempre." },
    { q: "Debajo de «por siempre» se puede poner…", o: ["nada", "cualquier bloque", "solo esperas"], a: 0, e: "Nada." },
    { q: "Cada repetición de un bucle es una…", o: ["iteración", "variable", "condición"], a: 0, e: "Iteración." },
    { q: "Para un pentágono regular el giro es…", o: ["72°", "108°", "90°"], a: 0, e: "360 ÷ 5." },
    { q: "Para empezar a dibujar se usa…", o: ["bajar lápiz", "subir lápiz", "borrar todo"], a: 0, e: "Bajar lápiz." },
    { q: "«Repetir 2: [repetir 5: …]» ejecuta el interior…", o: ["10 veces", "7 veces", "2 veces"], a: 0, e: "2 × 5." },
    { q: "Un contador suele empezar en…", o: ["0", "100", "−1"], a: 0, e: "0." },
    { q: "«Repetir hasta que ¿tocando borde?» se detiene cuando…", o: ["toca el borde", "pasan 10 vueltas", "nunca"], a: 0, e: "La condición es verdadera." },
  ],
  examen: [
    { q: "Repetir 36 veces «mover 10, girar 10°» dibuja casi un…", o: ["círculo", "cuadrado", "triángulo"], a: 0, e: "36 × 10 = 360°." },
    { q: "Lo que solo debe hacerse una vez se pone…", o: ["antes del bucle", "dentro del bucle", "en otro objeto"], a: 0, e: "Antes." },
    { q: "Una cuenta atrás de 10 a 0 suma en cada vuelta…", o: ["−1", "1", "10"], a: 0, e: "−1." },
  ],
  feynman: ["Por qué los bucles hacen los programas más cortos", "Cuándo usar repetir, por siempre o repetir hasta", "Cómo calcular el giro para dibujar cualquier polígono regular"],
  mapa: mapa("BUCLES", "var(--eso)", [
    ["Tipos", "repetir n · por siempre · hasta", COL.naranja],
    ["Lápiz", "polígonos · giro = 360 ÷ lados", COL.morado],
    ["Anidados", "bucle dentro de bucle", COL.agua],
    ["Contador", "variable · condición de parada", COL.verde],
  ], 300),
  tarjetas: [
    ["Bucle", "Estructura que repite un grupo de instrucciones."],
    ["Iteración", "Cada una de las repeticiones."],
    ["Repetir n veces", "Repite un número fijo de veces."],
    ["Por siempre", "Repite sin fin."],
    ["Repetir hasta que", "Repite hasta que se cumple una condición."],
    ["Giro de un polígono", "360° dividido entre el número de lados."],
    ["Bucles anidados", "Un bucle dentro de otro."],
    ["Contador", "Variable que suma 1 en cada repetición."],
  ],
  familias: ["Buscad juntos patrones repetidos en una canción, un baile o un mosaico.", "Pedid que os enseñen a dibujar una estrella o una flor con bucles en Scratch.", "Escribid el «programa» de una tarea repetitiva de casa con un bucle."],
  profesores: {
    saberes: "Estructuras de repetición: bucles definidos, infinitos y condicionales, extensión Lápiz y polígonos regulares, bucles anidados, contadores y bucles infinitos (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Galería de polígonos y rosetones con la extensión Lápiz.", "Cuenta atrás con contador y sonido al final.", "Muro de ladrillos con bucles anidados y clones (avance)."],
  },
  fuentes: [RD, wiki("Bucle (programación)", "Bucle_(programación)"), { t: "Scratch: extensión Lápiz", url: "https://scratch.mit.edu/" }, { t: "CS Unplugged: patrones y repetición", url: "https://www.csunplugged.org/es/" }],
  revisado: REV,
};
