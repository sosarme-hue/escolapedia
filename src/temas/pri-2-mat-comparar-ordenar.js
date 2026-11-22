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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Usar los números ordinales", "Encontrar números entre otros dos", "Comparar sumas y precios", "Ordenar datos de la vida real"],
  lectura: { titulo: "La carrera de sacos", html: `<p>En la fiesta del colegio hay una carrera de sacos. Cada niño lleva un dorsal con un número.</p><p>Al terminar, la profesora apunta cuántos saltos ha dado cada uno para llegar a la meta. Gana quien dé <b>menos</b> saltos, porque salta más lejos.</p><p>Leo ha dado 48 saltos. Irene, 39. Marcos, 52. Y Ana, 41.</p><p>—¡He ganado yo, porque mi número es el más grande! —grita Marcos.</p><p>—No —dice Irene—. Gana quien tiene el número más pequeño.</p><p>La profesora los ordena de menor a mayor en la pizarra: 39, 41, 48, 52.</p><p>—Primera, Irene. Segunda, Ana. Tercero, Leo. Y cuarto, Marcos.</p><p>Marcos se ríe y se encoge de hombros.</p><p>—Bueno, por lo menos he sido el que más ha saltado.</p><p>Todos aplauden. A veces gana el número mayor y otras veces, el menor. Hay que leer bien las reglas.</p>` },
  tras: {
    "Los signos &gt;, &lt; e =": [
      ["El cocodrilo hambriento", `<p>Un truco para no confundir los signos <b>&gt;</b> y <b>&lt;</b> es imaginar un <mark>cocodrilo</mark> con la boca abierta.</p><p>El cocodrilo tiene mucha hambre y siempre abre la boca hacia el número <b>más grande</b>, porque quiere comer más.</p><ul><li>En <b>85 &gt; 58</b>, la boca abierta mira al 85.</li><li>En <b>120 &lt; 210</b>, la boca abierta mira al 210.</li></ul><p>La parte estrecha, la punta, siempre señala al número <b>más pequeño</b>.</p><p>Si los dos números son iguales, el cocodrilo no sabe cuál elegir y cierra la boca: entonces usamos el signo <b>=</b>.</p><p>Al leer, siempre empezamos por la izquierda: «85 es mayor que 58»; «120 es menor que 210».</p><p><b>Actividad</b>: dibuja un cocodrilo de papel con la boca abierta y úsalo para comparar los números de tus compañeros.</p>`,
        H6.dos("Cocodrilo", ["85 > 58", ["boca al 85", "mayor que"], cVE], ["120 < 210", ["boca al 210", "menor que"], cAZ]),
        ["2-T2kAO19Oc", "Comparando números para niños - Mayor Que Menor Que | Kids Academy Español", "Kids Academy Español", 164769]],
    ],
    "La recta numérica": [
      ["Números entre otros dos", `<p>A veces nos preguntan qué números hay <mark>entre</mark> otros dos.</p><p>¿Qué números hay entre el <b>45</b> y el <b>50</b>? Contamos los que van en medio, sin incluir el 45 ni el 50: <b>46, 47, 48 y 49</b>.</p><p>¿Y entre el <b>298</b> y el <b>303</b>? Hay que tener cuidado al pasar la centena: <b>299, 300, 301 y 302</b>.</p><p>En la recta numérica es muy fácil verlo: los números que están entre dos marcas son los que quedan en medio.</p><p>También podemos buscar un número que esté entre otros dos: un número entre 600 y 700 puede ser 650, 612 o 699. ¡Hay muchos!</p><p><b>Actividad</b>: escribe todos los números entre el 196 y el 204.</p>`,
        L6.filas("Entre…", [["45 y 50", "46, 47, 48, 49", cAZ], ["298 y 303", "299 … 302", cRO], ["600 y 700", "650, 699…", cVE], ["10 y 12", "solo el 11", cNA]])],
    ],
    "Ordenar de menor a mayor": [
      ["Los números ordinales", `<p>Cuando ordenamos cosas o personas en una fila, usamos los <mark>números ordinales</mark>. Dicen el <b>puesto</b> que ocupa cada uno.</p><ul><li>1.º <b>primero</b> · 2.º <b>segundo</b> · 3.º <b>tercero</b></li><li>4.º <b>cuarto</b> · 5.º <b>quinto</b> · 6.º <b>sexto</b></li><li>7.º <b>séptimo</b> · 8.º <b>octavo</b> · 9.º <b>noveno</b> · 10.º <b>décimo</b></li></ul><p>Se escriben con el número y un circulito pequeño arriba: 1.º, 2.º… Si es una niña, se escribe 1.ª, 2.ª: primera, segunda.</p><p>Tú estás en <b>2.º</b> de Primaria. En una carrera, el que llega 1.º recibe la medalla de oro; el 2.º, la de plata; y el 3.º, la de bronce.</p><p>Los ordinales también aparecen en los pisos de un edificio: 1.º, 2.º, 3.º…</p><p><b>Actividad</b>: haced una fila de diez niños y que cada uno diga su puesto con el ordinal.</p>`,
        L6.filas("Ordinales", [["1.º", "primero · oro", cNA], ["2.º", "segundo · plata", cMO], ["3.º", "tercero · bronce", cRO], ["10.º", "décimo", cAZ]])],
    ],
    "¿Para qué sirve?": [
      ["Comparar precios y sumas", `<p>No solo comparamos números sueltos: también podemos comparar <mark>cuentas</mark> y <mark>precios</mark>.</p><p>¿Qué es mayor, <b>20 + 15</b> o <b>40</b>? Primero hacemos la suma: 20 + 15 = 35. Después comparamos: <b>35 &lt; 40</b>.</p><p>En la tienda, comparar precios nos ayuda a elegir. Un cuento cuesta 9 € en una tienda y 12 € en otra. 9 &lt; 12: en la primera es <b>más barato</b>.</p><p>Si tenemos 15 € y algo cuesta 18 €, comparamos: 15 &lt; 18. ¡No nos llega el dinero! Nos faltan 3 €.</p><p>Cuidado: más grande no siempre es mejor. En una carrera de tiempo, gana quien tarda <b>menos</b>, como en la lectura.</p><p><b>Actividad</b>: compara con &lt;, &gt; o =: 30 + 20 y 50; 45 y 25 + 25.</p>`,
        H6.flujo("Comparar cuentas", ["20 + 15|sumo", "= 35|resultado", "35 ? 40|comparo", "35 < 40|¡listo!"], cNA)],
    ],
  },
  final: [
    ["Ordenar datos de la vida real", `<p>Ordenar números nos ayuda a entender <mark>información</mark> de la vida real.</p><p>Por ejemplo, estas son las alturas de cuatro árboles del parque:</p><ul><li>Pino: <b>15 metros</b>.</li><li>Roble: <b>22 metros</b>.</li><li>Olivo: <b>6 metros</b>.</li><li>Chopo: <b>30 metros</b>.</li></ul><p>Si los ordenamos de <b>mayor a menor</b>: chopo (30), roble (22), pino (15), olivo (6). Ahora sabemos enseguida cuál es el más alto y cuál el más bajo.</p><p>Lo mismo podemos hacer con las edades de la familia, los puntos de un concurso o los precios de una lista de la compra.</p><p>Un consejo: antes de ordenar, <b>tacha</b> cada número cuando lo hayas colocado. Así no te olvidas de ninguno ni lo repites.</p><p><b>Actividad</b>: pregunta la edad a cinco personas de tu familia y ordénalas de menor a mayor.</p>`,
      L6.filas("Árboles", [["1.º chopo", "30 m", cVE], ["2.º roble", "22 m", cNA], ["3.º pino", "15 m", cAZ], ["4.º olivo", "6 m", cRO]])],
    ["Repaso: el juego del mayor", `<p>Vamos a jugar al <mark>juego del mayor</mark> en parejas. Necesitáis unas tarjetas con las cifras del 0 al 9.</p><ul><li><b>1.</b> Cada jugador saca <b>tres tarjetas</b>.</li><li><b>2.</b> Con ellas forma el <b>número más grande</b> posible. Si saca 4, 7 y 2, forma el <b>742</b>: la cifra mayor va en las centenas.</li><li><b>3.</b> Comparáis vuestros números con &gt;, &lt; o =.</li><li><b>4.</b> Quien tenga el número mayor gana un punto.</li></ul><p>Variante: ahora gana quien forme el número <b>más pequeño</b>. Con 4, 7 y 2, el más pequeño es el <b>247</b>.</p><p>¡Cuidado con el 0! Con 0, 5 y 3, el más pequeño no puede empezar por 0. Es el <b>305</b>.</p><p><b>Actividad</b>: jugad cinco rondas y apuntad los números en una tabla.</p>`,
      H6.dos("Con 4, 7, 2", ["MAYOR", ["742", "grande delante"], cRO], ["MENOR", ["247", "pequeña delante"], cAZ])],
  ],
  ejemplos: [
    ["¿Qué números hay entre el 397 y el 402?", ["Contamos los de en medio.", "Pasamos por el 400."], "398, 399, 400 y 401."],
    ["¿Qué es mayor, 30 + 25 o 50?", ["Primero sumamos: 30 + 25 = 55.", "Comparamos: 55 > 50."], "30 + 25 es mayor."],
  ],
  errores: ["Incluir los números de los extremos cuando nos preguntan los que hay entre dos.", "Pensar que siempre gana el número mayor, aunque las reglas digan lo contrario."],
  ejercicios: [
    ["b", "Escribe el signo: 78 ___ 87.", "<."],
    ["b", "¿Cómo se escribe «quinto» con número?", "5.º"],
    ["b", "Escribe los números entre el 18 y el 22.", "19, 20, 21."],
    ["b", "¿Qué medalla recibe el 2.º?", "La de plata."],
    ["b", "¿Hacia qué número abre la boca el cocodrilo?", "Hacia el mayor."],
    ["m", "Compara: 40 + 30 ___ 75.", "70 < 75."],
    ["m", "Ordena de mayor a menor: 512, 215, 521, 152.", "521, 512, 215, 152."],
    ["m", "Escribe los números entre el 598 y el 603.", "599, 600, 601, 602."],
    ["m", "Un juguete cuesta 14 € y tienes 11 €. ¿Te llega?", "No, 11 < 14; faltan 3 €."],
    ["m", "Forma el mayor y el menor número con 6, 1 y 9.", "961 y 169."],
    ["a", "En la lectura, ¿por qué gana Irene si su número es el menor?", "Porque gana quien da menos saltos."],
    ["a", "Forma el menor número con 0, 8 y 2.", "208."],
    ["a", "Escribe un número entre 450 y 460 que sea impar y mayor que 455.", "457 o 459."],
    ["a", "Ordena por altura cuatro personas de tu familia y di quién es 1.º y 4.º.", "Respuesta abierta."],
  ],
  quiz: [
    ["El cocodrilo abre la boca hacia el número…", ["mayor", "menor", "par"], "Cocodrilo."],
    ["Entre el 99 y el 102 están…", ["100 y 101", "99 y 100", "solo el 100"], "Entre."],
    ["El que llega en tercer lugar es el…", ["3.º", "30", "1.º"], "Ordinales."],
    ["50 + 20 comparado con 60 es…", ["mayor", "menor", "igual"], "Cuentas."],
    ["El menor número con 0, 5 y 3 es…", ["305", "035", "503"], "Juego."],
  ],
  examen: [
    ["En la lectura, ¿quién queda segunda?", ["Ana", "Irene", "Marcos"], "Lectura."],
    ["El árbol más alto de la lista es el…", ["chopo", "olivo", "pino"], "Datos."],
  ],
  tarjetas: [
    ["Ordinales", "1.º primero, 2.º segundo, 3.º tercero… 10.º décimo."],
    ["Entre dos números", "Solo los de en medio, sin los extremos."],
  ],
  glosario: [
    ["Comparar", "Mirar qué número es mayor, menor o si son iguales."],
    ["Mayor que", "Signo > ; el número de la izquierda es más grande."],
    ["Menor que", "Signo < ; el número de la izquierda es más pequeño."],
    ["Igual", "Signo = ; los dos números valen lo mismo."],
    ["Ordenar", "Colocar números en fila según su tamaño."],
    ["Ordinal", "Número que dice el puesto: primero, segundo…"],
    ["Recta numérica", "Línea con los números en orden."],
    ["Entre", "En medio de dos cosas."],
    ["Precio", "Lo que cuesta una cosa."],
    ["Dorsal", "Número que lleva un corredor en la camiseta."],
  ],
  situacion: {
    titulo: "Las olimpiadas de la clase",
    reto: "La clase organiza unas pequeñas olimpiadas y tiene que ordenar los resultados para dar las medallas.",
    pasos: ["Hacer pruebas: lanzar una pelota lejos y recorrer un circuito con cronómetro.", "Apuntar las distancias y los tiempos de cada participante.", "Comparar y ordenar los resultados, pensando si gana el mayor o el menor.", "Dar las medallas a 1.º, 2.º y 3.º usando los ordinales."],
    producto: "Una tabla de clasificación y un podio con medallas.",
    evaluacion: ["Usa bien los signos >, < e =.", "Ordena números de menor a mayor y al revés.", "Usa los números ordinales.", "Lee bien la regla para saber quién gana."],
  },
});
