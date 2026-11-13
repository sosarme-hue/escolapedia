// Matemáticas 2º de Primaria: comparar y ordenar números hasta el 999.
const P = require("./_pri2a");
const { svg, num, txt, bloques, nino, flechaR } = P;

// Boca de cocodrilo que se come al número mayor (abierta hacia la izquierda si mira a x < 0).
const coco = (x, y, izq = true, c = "var(--leaf)") => `<g transform="translate(${x} ${y}) scale(${izq ? -1 : 1} 1)"><path d="M-18 -4 L18 -22 L18 -12 L-6 0 L18 12 L18 22z" fill="${c}" stroke="var(--ink)" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="-14" r="2.5" fill="var(--ink)"/>${[0, 1, 2].map((i) => `<path d="M${-2 + i * 6} ${-7 - i * 3} l2 4 l2 -5" fill="#fff"/>`).join("")}</g>`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Comparar y ordenar números",
  objetivos: ["Comparar números de tres cifras", "Usar los signos mayor que, menor que e igual", "Ordenar números de menor a mayor y de mayor a menor"],
  claves: ["mayor que", "menor que", "igual", "signo", "ordenar", "comparar", "recta numérica"],
  pregunta: ["Ana tiene 215 cromos y Leo tiene 251. ¿Quién tiene más?", "Miramos las <b>centenas</b>: las dos tienen 2. Miramos las <b>decenas</b>: 1 y 5. Como 5 es mayor, Leo tiene más: <mark>251 &gt; 215</mark>."],
  bloques: [
    ["Comparar es mirar quién tiene más", `<p><mark>Comparar</mark> es mirar dos números y decir cuál es <b>mayor</b>, cuál es <b>menor</b> o si son <b>iguales</b>.</p><p>Si tienes 8 canicas y tu amigo tiene 5, tú tienes más. El 8 es <b>mayor</b> que el 5.</p><p>Con números grandes hacemos lo mismo, pero mirando bien sus cifras.</p>`,
      svg("Ocho canicas a la izquierda y cinco a la derecha: 8 es mayor que 5", `${[...Array(8)].map((_, i) => `<circle cx="${30 + (i % 4) * 22}" cy="${50 + Math.floor(i / 4) * 24}" r="9" fill="var(--pen)"/>`).join("")}${[...Array(5)].map((_, i) => `<circle cx="${170 + (i % 3) * 22}" cy="${50 + Math.floor(i / 3) * 24}" r="9" fill="var(--red)"/>`).join("")}${num(63, 135, "8", "var(--pen)", 34)}${num(130, 135, "&gt;", "var(--ink)", 34)}${num(192, 135, "5", "var(--red)", 34)}${txt(130, 166, "8 es mayor que 5", "var(--ink)", 14)}`)],
    ["Los signos &gt;, &lt; e =", `<p>Para comparar usamos tres signos.</p><p><mark>&gt;</mark> se lee «mayor que». <mark>&lt;</mark> se lee «menor que». <mark>=</mark> se lee «igual a».</p><p>Un truco: el signo es como la <b>boca de un cocodrilo</b> con hambre. ¡Siempre se abre hacia el número <b>más grande</b>!</p>`,
      svg("Cocodrilos con la boca abierta hacia el número mayor: 9 mayor que 4 y 3 menor que 7", `${num(50, 70, "9", "var(--pen)", 34)}${coco(105, 58, true)}${num(160, 70, "4", "var(--red)", 34)}${txt(220, 66, "9 &gt; 4", "var(--ink)", 15)}${num(50, 140, "3", "var(--red)", 34)}${coco(105, 128, false)}${num(160, 140, "7", "var(--pen)", 34)}${txt(220, 136, "3 &lt; 7", "var(--ink)", 15)}`), P.V("cmpB")],
    ["Primero, cuenta las cifras", `<p>Si un número tiene <b>más cifras</b>, es mayor.</p><p>El <b>105</b> tiene tres cifras y el <b>98</b> tiene dos. Por eso <mark>105 &gt; 98</mark>.</p><p>Aunque 9 parezca muy grande, el 98 no llega ni a 100. Un número de tres cifras siempre gana a uno de dos.</p>`,
      svg("105 tiene tres cifras y 98 tiene dos: 105 es mayor que 98", `${bloques(105, 20, 40, 6)}${bloques(98, 140, 40, 6)}${num(130, 140, "105 &gt; 98", "var(--ink)", 26)}${txt(50, 166, "3 cifras", "var(--pen)", 13)}${txt(195, 166, "2 cifras", "var(--red)", 13)}`)],
    ["Después, mira las centenas", `<p>Si los dos tienen tres cifras, miramos primero las <mark>centenas</mark>.</p><p>Gana el que tenga <b>más centenas</b>. En 412 y 389, 4 centenas es más que 3. Así que <b>412 &gt; 389</b>.</p><p>No hace falta mirar el resto: las centenas mandan.</p>`,
      svg("412 frente a 389: se comparan las centenas 4 y 3", `${num(70, 70, "412", "var(--ink)", 34)}${num(190, 70, "389", "var(--ink)", 34)}<circle cx="51" cy="58" r="17" fill="none" stroke="var(--red)" stroke-width="2.5"/><circle cx="171" cy="58" r="17" fill="none" stroke="var(--red)" stroke-width="2.5"/>${txt(130, 110, "4 C es más que 3 C", "var(--red)", 14)}${num(130, 150, "412 &gt; 389", "var(--pen)", 26)}`)],
    ["Si empatan, mira las decenas", `<p>Si las centenas son <b>iguales</b>, miramos las <mark>decenas</mark>. Si también empatan, miramos las <mark>unidades</mark>.</p><p>En 536 y 532: centenas iguales, decenas iguales. Unidades: 6 y 2. Por eso <b>536 &gt; 532</b>.</p><p>Vamos de <b>izquierda a derecha</b>, cifra a cifra.</p>`,
      svg("Comparar 536 y 532 cifra a cifra de izquierda a derecha", `${["5", "3", "6"].map((d, i) => num(60 + i * 26, 60, d, i === 2 ? "var(--red)" : "var(--ink)", 30)).join("")}${["5", "3", "2"].map((d, i) => num(150 + i * 26, 60, d, i === 2 ? "var(--red)" : "var(--ink)", 30)).join("")}${txt(130, 92, "C =   D =   U: 6 &gt; 2", "var(--muted)", 13)}${flechaR(60, 110, 200, 110, "var(--leaf)")}${num(130, 152, "536 &gt; 532", "var(--pen)", 26)}`)],
    ["La recta numérica", `<p>En la <mark>recta numérica</mark> los números van en fila, del más pequeño al más grande.</p><p>Los de la <b>izquierda</b> son menores. Los de la <b>derecha</b> son mayores.</p><p>El 300 está a la derecha del 200, así que es mayor. ¡La recta es un camino para comparar!</p>`,
      svg("Recta numérica de 100 en 100 del 0 al 500", `<path d="M20 90 H240" stroke="var(--ink)" stroke-width="3"/><path d="M232 83 L242 90 L232 97" stroke="var(--ink)" stroke-width="3" fill="none"/>${[0, 100, 200, 300, 400, 500].map((n, i) => `<path d="M${30 + i * 40} 82 V98" stroke="var(--ink)" stroke-width="2"/>${num(30 + i * 40, 120, n, "var(--pen)", 14)}`).join("")}${txt(50, 52, "menores", "var(--red)", 13)}${txt(200, 52, "mayores", "var(--leaf)", 13)}${flechaR(90, 60, 30, 60, "var(--red)")}${flechaR(170, 60, 236, 60, "var(--leaf)")}${txt(130, 158, "más a la derecha, más grande", "var(--ink)", 13)}`)],
    ["Ordenar de menor a mayor", `<p><mark>Ordenar</mark> es poner los números en fila.</p><p><b>De menor a mayor</b>: empezamos por el más pequeño. 120, 210, 301, 450.</p><p><b>De mayor a menor</b>: empezamos por el más grande. 450, 301, 210, 120.</p><p>Un consejo: busca primero el más pequeño y táchalo. Luego busca el siguiente.</p>`,
      svg("Cuatro torres de distinta altura ordenadas: 120, 210, 301 y 450", `${[[120, 3], [210, 5], [301, 7], [450, 10]].map(([n, h], i) => `<rect x="${30 + i * 55}" y="${140 - h * 9}" width="40" height="${h * 9}" rx="4" fill="var(--pen)" opacity="${0.4 + i * 0.18}"/>${num(50 + i * 55, 160, n, "var(--ink)", 15)}`).join("")}${flechaR(30, 30, 220, 30, "var(--leaf)")}${txt(125, 22, "de menor a mayor", "var(--leaf)", 12)}`)],
    ["¿Para qué sirve?", `<p>Comparamos números todos los días.</p><p>En una <b>carrera</b>, gana quien tiene más puntos. En la tienda, miramos qué cuesta <b>menos</b>. Y en la cola del médico, va antes quien tiene el número más <b>pequeño</b>.</p><p>Si tu número es el <mark>125</mark> y va por el 118, ¡aún te toca esperar!</p>`,
      svg("Un niño con el número 125 mira la pantalla del turno, que marca 118", `<rect x="130" y="30" width="110" height="60" rx="8" fill="var(--ink)"/>${txt(185, 50, "TURNO", "var(--sun)", 12)}${num(185, 80, "118", "var(--sun)", 26)}${nino(60, 160, { c: "var(--pen)" })}<rect x="72" y="100" width="44" height="26" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>${num(94, 119, "125", "var(--red)", 14)}${txt(185, 130, "118 &lt; 125", "var(--pen)", 16)}${txt(185, 155, "¡Espera un poco!", "var(--ink)", 13)}`)],
    ["Juego: el número intruso", `<p>Mira esta fila: <b>150, 160, 170, 108, 190</b>. Están ordenados de menor a mayor… ¡menos uno!</p><p>El intruso es el <mark>108</mark>. Es más pequeño que el 170 y no puede ir detrás.</p><p>Juega con tu familia: escribe 4 números, desordénalos y que los otros los ordenen. ¡Gana el más rápido!</p>`,
      svg("Fila de números 150, 160, 170, 108, 190 con el 108 rodeado en rojo", `${[150, 160, 170, 108, 190].map((n, i) => `<rect x="${12 + i * 48}" y="60" width="42" height="40" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>${num(33 + i * 48, 87, n, n === 108 ? "var(--red)" : "var(--pen)", 16)}`).join("")}<circle cx="177" cy="80" r="28" fill="none" stroke="var(--red)" stroke-width="3"/>${txt(130, 140, "¿Quién no está en su sitio?", "var(--ink)", 14)}`)],
  ],
  figura: ["Cómo comparar dos números", `<svg viewBox="0 0 640 260" role="img" aria-label="Pasos para comparar: contar cifras, mirar centenas, decenas y unidades">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${[["1", "¿Cuántas cifras?", "var(--sun)"], ["2", "Centenas", "var(--red)"], ["3", "Decenas", "var(--pen)"], ["4", "Unidades", "var(--leaf)"]].map(([n, t, c], i) => `<rect x="${24 + i * 152}" y="40" width="136" height="110" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${num(92 + i * 152, 90, n, c, 34)}${txt(92 + i * 152, 128, t, "var(--ink)", 15)}${i < 3 ? flechaR(160 + i * 152, 95, 174 + i * 152, 95) : ""}`).join("")}
    ${num(320, 210, "536 &gt; 532    ·    105 &gt; 98    ·    412 &gt; 389", "var(--ink)", 24)}
  </svg>`],
  video: P.V("cmpV", true),
  ejemplos: [
    ["Compara 347 y 374.", ["Las dos tienen tres cifras.", "Centenas: 3 y 3. Empate.", "Decenas: 4 y 7. Gana el 7."], "347 &lt; 374."],
    ["Ordena de menor a mayor: 502, 250, 205.", ["Busca el más pequeño: 205 (2 C y 0 D).", "Después va el 250 (2 C y 5 D).", "El mayor es el 502 (5 C)."], "205, 250, 502."],
    ["¿Qué signo va entre 600 y 599?", ["Centenas: 6 y 5.", "6 es mayor que 5."], "600 &gt; 599."],
  ],
  errores: [
    "Pensar que 98 es mayor que 105 porque el 9 es grande: gana el que tiene más cifras.",
    "Empezar a comparar por las unidades: siempre se empieza por la izquierda.",
    "Abrir el signo hacia el número pequeño: la boca se abre hacia el mayor.",
    "Al ordenar, saltarse un número: tacha cada número cuando lo uses.",
  ],
  ejercicios: [
    ["Pon el signo: 245 __ 254.", "245 &lt; 254."],
    ["Pon el signo: 700 __ 699.", "700 &gt; 699."],
    ["Pon el signo: 318 __ 318.", "318 = 318."],
    ["¿Cuál es mayor, 99 o 101?", "101, porque tiene tres cifras."],
    ["Ordena de menor a mayor: 430, 340, 403.", "340, 403, 430."],
    ["Ordena de mayor a menor: 812, 821, 128.", "821, 812, 128."],
    ["Escribe un número mayor que 560 y menor que 570.", "Por ejemplo, 565 (vale cualquiera del 561 al 569)."],
    ["Dibuja la boca del cocodrilo entre 9 y 6.", "9 &gt; 6: la boca abierta hacia el 9."],
    ["¿Qué número es mayor: 3 C y 1 U, o 2 C y 9 D?", "3 C y 1 U (301) es mayor que 290."],
    ["Di tres números entre el 200 y el 300.", "Respuesta libre: por ejemplo, 210, 255 y 299."],
  ],
  quiz: [
    ["El signo &gt; se lee…", ["mayor que", "menor que", "igual a"], "La boca se abre hacia el mayor."],
    ["¿Cuál es mayor?", ["120", "99", "102"], "120 tiene 12 decenas; 102 tiene 10."],
    ["450 __ 405", ["&gt;", "&lt;", "="], "Decenas: 5 &gt; 0."],
    ["¿Por qué cifra empezamos a comparar?", ["Por la de la izquierda", "Por la de la derecha", "Por la del medio"], "Primero las centenas."],
    ["En la recta numérica, los mayores están…", ["a la derecha", "a la izquierda", "abajo"], "Los números crecen hacia la derecha."],
    ["Ordena de menor a mayor: 310, 130, 301", ["130, 301, 310", "310, 301, 130", "301, 130, 310"], "130 es el menor y 310 el mayor."],
    ["¿Qué número es menor que 200?", ["199", "201", "210"], "199 tiene 1 centena."],
    ["789 __ 798", ["&lt;", "&gt;", "="], "Decenas: 8 &lt; 9."],
    ["El número mayor de estos es…", ["900", "899", "809"], "900 tiene 9 centenas; los otros, 8."],
    ["5 C = 500, así que 500 __ 5 C", ["=", "&gt;", "&lt;"], "Son la misma cantidad."],
  ],
  examen: [
    ["Compara: 263 __ 236", ["&gt;", "&lt;", "="], "Decenas: 6 &gt; 3."],
    ["De mayor a menor: 540, 450, 504", ["540, 504, 450", "450, 504, 540", "504, 540, 450"], "540 es el mayor."],
    ["¿Qué número va entre 398 y 400?", ["399", "401", "397"], "398, 399, 400."],
    ["¿Cuál es el menor?", ["89", "189", "198"], "Solo tiene dos cifras."],
  ],
  feynman: ["Qué significan los signos &gt;, &lt; e =", "Por qué empezamos a comparar por la izquierda", "Cómo se ordenan varios números"],
  mapa: ["COMPARAR", [
    ["&gt;", "mayor que", "var(--leaf)"],
    ["&lt;", "menor que", "var(--red)"],
    ["Pasos", "cifras, C, D y U", "var(--pen)"],
    ["Ordenar", "de menor a mayor", "var(--sun)"],
  ]],
  tarjetas: [
    ["¿Cómo se lee &gt;?", "Mayor que"],
    ["¿Cómo se lee &lt;?", "Menor que"],
    ["¿Hacia dónde se abre la boca del cocodrilo?", "Hacia el número mayor"],
    ["¿Qué miramos primero al comparar?", "Cuántas cifras tienen y luego las centenas"],
    ["301 __ 310", "301 &lt; 310"],
    ["En la recta, los menores están…", "a la izquierda"],
    ["Ordena de menor a mayor: 9, 90, 900", "9, 90, 900"],
    ["¿Qué número va justo antes del 500?", "499"],
  ],
  familias: [
    "En el supermercado, comparad precios: «¿qué cuesta menos, 125 o 152 céntimos?».",
    "Jugad a las cartas con números: cada uno saca tres y gana quien forme el mayor.",
    "Dibujad la boca del cocodrilo en una pinza y ponedla entre dos números escritos.",
    "Ordenad juntos los libros de casa por el número de páginas.",
  ],
  saberes: "Sentido numérico: comparación y ordenación de números naturales hasta el 999; uso de los signos &gt;, &lt; e =; recta numérica",
  ideas: ["Recta numérica gigante en el pasillo para situar números.", "Tarjetas de cocodrilo para practicar los signos.", "Juego de ordenar a los alumnos por el número que llevan en una tarjeta."],
});
