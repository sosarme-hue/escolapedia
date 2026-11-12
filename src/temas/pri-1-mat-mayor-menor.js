// Matemáticas 1º de Primaria: mayor, menor e igual.
const { mapa } = require("./_util");
const { svg, puntos, num, txt, decena, unidad, PROF, FUENTES } = require("./_pri1");

// Cocodrilo que abre la boca hacia el número mayor (dir 1 = abre a la izquierda).
const coco = (x, y, c = "var(--leaf)") => `<g><path d="M${x + 30} ${y} L ${x - 30} ${y - 34} M${x + 30} ${y} L ${x - 30} ${y + 34}" stroke="${c}" stroke-width="14" stroke-linecap="round" fill="none"/>${[0, 1, 2].map((i) => `<path d="M${x - 18 + i * 14} ${y - 22 + i * 8} l 4 9 l 4 -7" fill="var(--card)"/><path d="M${x - 18 + i * 14} ${y + 22 - i * 8} l 4 -9 l 4 7" fill="var(--card)"/>`).join("")}<circle cx="${x + 18}" cy="${y - 16}" r="5" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="${x + 19}" cy="${y - 16}" r="2" fill="var(--ink)"/></g>`;

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "Mayor, menor e igual",
  minutos: 20,
  objetivos: ["Comparar dos números y decir cuál es mayor", "Usar los signos >, < e =", "Ordenar números de menor a mayor"],
  claves: ["mayor que", "menor que", "igual", "ordenar"],
  pregunta: {
    texto: "Tú tienes 12 cromos y tu amiga tiene 21. ¿Quién tiene más? ¿Cómo lo sabes?",
    respuesta: "Tu amiga, porque 21 tiene <mark>2 decenas</mark> y 12 solo tiene 1. Primero se miran las decenas.",
  },
  bloques: [
    {
      html: `<h3>Comparar es mirar quién tiene más</h3><p>Comparar es mirar dos cantidades y decir dónde hay <mark>más</mark>, dónde hay <mark>menos</mark> o si hay <mark>igual</mark>.</p><p>Si unimos cada cosa de un grupo con una del otro, el grupo donde sobran cosas es el que tiene más.</p>`,
      svg: svg("Cinco puntos azules y tres rojos unidos por parejas: sobran dos azules", `${puntos(5, 50, 60, "var(--pen)", 38, 10)}${puntos(3, 50, 120, "var(--red)", 38, 10)}${[0, 1, 2].map((i) => `<path d="M${50 + i * 38} 72 V 108" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>`).join("")}${txt(207, 38, "sobran 2", "var(--pen)", 13)}${txt(130, 165, "5 es más que 3")}`),
    },
    {
      html: `<h3>Mayor que y menor que</h3><p>El número que tiene más es el <b>mayor</b>. El que tiene menos es el <b>menor</b>.</p><p>En la fila de los números, el mayor está <mark>más lejos del 0</mark>. El 8 es mayor que el 3 porque está más adelante.</p>`,
      svg: svg("Recta numérica del 0 al 10: el 3 está cerca del 0 y el 8 está más lejos", `<path d="M18 100 H 242" stroke="var(--ink)" stroke-width="3"/>${[...Array(11)].map((_, i) => `<path d="M${22 + i * 21.6} 92 V 108" stroke="var(--ink)" stroke-width="2"/>${num(22 + i * 21.6, 130, i, i === 3 ? "var(--red)" : i === 8 ? "var(--leaf)" : "var(--ink)", 14)}`).join("")}<circle cx="86.8" cy="100" r="8" fill="var(--red)"/><circle cx="194.8" cy="100" r="8" fill="var(--leaf)"/>${txt(87, 70, "menor", "var(--red)")}${txt(195, 70, "mayor", "var(--leaf)")}`),
    },
    {
      html: `<h3>El cocodrilo hambriento</h3><p>Los signos <b>&gt;</b> y <b>&lt;</b> son como la <mark>boca de un cocodrilo</mark>. El cocodrilo siempre abre la boca hacia el número más grande, ¡porque tiene mucha hambre!</p><p>7 &gt; 4 se lee «siete es mayor que cuatro». 2 &lt; 9 se lee «dos es menor que nueve».</p>`,
      svg: svg("Un cocodrilo abre la boca hacia el 7: 7 es mayor que 4", `${num(50, 108, "7", "var(--pen)", 56)}${coco(130, 90)}${num(210, 108, "4", "var(--pen)", 56)}${txt(130, 160, "7 > 4", "var(--leaf)", 18)}`),
      video: { id: "YveICGbSVCQ", titulo: "Mayor que, menor que e igual que", canal: "FlexFlix Kids en Español", vistas: 2623868, megusta: 27688 },
    },
    {
      html: `<h3>El signo igual</h3><p>Cuando dos cantidades son <mark>iguales</mark>, escribimos el signo <b>=</b>, que son dos rayitas iguales.</p><p>5 = 5 se lee «cinco es igual a cinco». También 2 + 3 = 5, porque las dos partes valen lo mismo.</p>`,
      svg: svg("Dos grupos de cinco estrellas con el signo igual entre ellos", `${[0, 1, 2, 3, 4].map((i) => `<text x="${20 + (i % 3) * 26}" y="${70 + Math.floor(i / 3) * 34}" font-size="24">⭐</text>`).join("")}${num(130, 92, "=", "var(--red)", 44)}${[0, 1, 2, 3, 4].map((i) => `<text x="${160 + (i % 3) * 26}" y="${70 + Math.floor(i / 3) * 34}" font-size="24">⭐</text>`).join("")}${txt(130, 160, "5 = 5")}`),
    },
    {
      html: `<h3>Comparar números de dos cifras</h3><p>Primero miramos las <b>decenas</b>. El que tiene más decenas es mayor: 41 &gt; 29.</p><p>Si las decenas son iguales, <mark>miramos las unidades</mark>: 36 &lt; 38, porque 6 es menor que 8.</p>`,
      svg: svg("El 41 tiene cuatro barras y el 29 solo dos: 41 es mayor que 29", `${[0, 1, 2, 3].map((i) => decena(20 + i * 18, 25)).join("")}${unidad(98, 125)}${num(65, 162, "41", "var(--pen)", 20)}${[0, 1].map((i) => decena(160 + i * 18, 25)).join("")}${[...Array(9)].map((_, i) => unidad(200 + (i % 3) * 16, 95 + Math.floor(i / 3) * 13)).join("")}${num(200, 162, "29", "var(--pen)", 20)}${num(130, 162, ">", "var(--leaf)", 24)}`),
    },
    {
      html: `<h3>Ordenar de menor a mayor</h3><p>Para ordenar, buscamos el <b>más pequeño</b> y lo ponemos primero. Luego el siguiente, y así hasta el más grande.</p><p>Ordenados de menor a mayor: <mark>3, 15, 27, 40</mark>. Al revés, de mayor a menor: 40, 27, 15, 3.</p>`,
      svg: svg("Cuatro torres de distinto tamaño ordenadas de menor a mayor: 3, 15, 27 y 40", `${[[3, 20], [15, 50], [27, 80], [40, 110]].map(([n, h], i) => `<rect x="${30 + i * 55}" y="${140 - h}" width="40" height="${h}" rx="4" fill="var(--pen)" opacity="${0.4 + i * 0.18}"/>${num(50 + i * 55, 160, n, "var(--ink)", 16)}`).join("")}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Comparamos todos los días: quién es <b>más alto</b> en la fila, qué fruta pesa más o qué juguete cuesta menos.</p><p>En los juegos también comparamos: gana quien tiene <mark>más puntos</mark>. Si hay los mismos, es un empate.</p>`,
      svg: svg("Un marcador de un partido: azul 3, rojo 2. Gana el azul", `<rect x="40" y="40" width="180" height="80" rx="12" fill="var(--ink)"/>${num(95, 100, "3", "var(--pen)", 46)}${num(130, 96, "-", "var(--card)", 30)}${num(165, 100, "2", "var(--red)", 46)}${txt(130, 155, "3 > 2: gana el azul", "var(--pen)")}`),
    },
    {
      html: `<h3>Juego: ¿qué signo falta?</h3><p>Pon el signo correcto: <b>&gt;</b>, <b>&lt;</b> o <b>=</b>.</p><p>15 __ 51 → el 51 tiene más decenas, así que <mark>15 &lt; 51</mark>. 60 __ 60 → son iguales: 60 = 60. ¡Recuerda la boca del cocodrilo!</p>`,
      svg: svg("Tres huecos para poner signos: 15 y 51, 60 y 60, 9 y 6", `${[["15", "51", "<"], ["60", "60", "="], ["9", "6", ">"]].map(([a, b, sg], i) => `${num(60, 50 + i * 45, a, "var(--pen)", 24)}<rect x="110" y="${28 + i * 45}" width="40" height="30" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${num(130, 51 + i * 45, sg, "var(--red)", 22)}${num(200, 50 + i * 45, b, "var(--pen)", 24)}`).join("")}`),
    },
  ],
  figura: {
    titulo: "Los tres signos para comparar",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Mayor que, menor que e igual a, con ejemplos 8 mayor que 5, 2 menor que 6 y 4 igual a 4">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${[[">", "mayor que", "8 > 5"], ["<", "menor que", "2 < 6"], ["=", "igual a", "4 = 4"]].map(([sg, t, e], i) => `<rect x="${30 + i * 200}" y="30" width="180" height="180" rx="14" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${num(120 + i * 200, 110, sg, "var(--red)", 70)}${txt(120 + i * 200, 150, t, "var(--ink)", 18)}${num(120 + i * 200, 190, e, "var(--pen)", 24)}`).join("")}
    </svg>`,
  },
  video: { id: "HUGlD1AdXBw", titulo: "Mayor que, menor que e igual que (muy fácil)", canal: "Smartick", vistas: 358530, megusta: 0, busqueda: "mayor que menor que para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué signo va entre 9 y 6?", pasos: ["¿Cuál es mayor? El 9.", "El cocodrilo abre la boca hacia el 9.", "Escribimos 9 > 6."], resultado: "9 > 6, nueve es mayor que seis." },
    { enunciado: "Compara 34 y 37.", pasos: ["Decenas: 3 y 3. Son iguales.", "Unidades: 4 y 7. El 4 es menor.", "Así que 34 es menor que 37."], resultado: "34 < 37." },
    { enunciado: "Ordena de menor a mayor: 18, 8, 81.", pasos: ["El más pequeño es el 8 (no tiene decenas).", "Después el 18 (1 decena).", "El más grande es el 81 (8 decenas)."], resultado: "8, 18, 81." },
  ],
  errores: [
    "Poner la boca del cocodrilo hacia el número pequeño: siempre se abre hacia el mayor.",
    "Mirar las unidades antes que las decenas: en 19 y 21, gana el 21 aunque 9 sea mayor que 1.",
    "Pensar que 18 y 81 son iguales porque tienen las mismas cifras.",
    "Olvidar el signo = cuando los números son iguales.",
  ],
  ejercicios: [
    { q: "¿Cuál es mayor, 6 o 9?", sol: "El 9." },
    { q: "Pon el signo: 4 __ 7.", sol: "4 < 7." },
    { q: "Pon el signo: 20 __ 12.", sol: "20 > 12." },
    { q: "Pon el signo: 33 __ 33.", sol: "33 = 33." },
    { q: "Ordena de menor a mayor: 9, 2, 5.", sol: "2, 5, 9." },
    { q: "Ordena de mayor a menor: 40, 14, 44.", sol: "44, 40, 14." },
    { q: "Escribe un número mayor que 50.", sol: "Por ejemplo, 51, 60 o 99." },
    { q: "Escribe un número menor que 10.", sol: "Por ejemplo, 0, 3 o 9." },
    { q: "Pablo ha hecho 7 dibujos y Ana 7. ¿Quién ha hecho más?", sol: "Ninguno: han hecho igual, 7 = 7." },
    { q: "Dibuja dos grupos: uno con 3 círculos y otro con 5. Rodea el grupo mayor.", sol: "Hay que rodear el grupo de 5." },
  ],
  quiz: [
    { q: "¿Cuál es mayor?", o: ["5", "2", "4"], a: 0, e: "El 5 está más lejos del 0." },
    { q: "¿Qué signo significa «mayor que»?", o: ["<", ">", "="], a: 1, e: "La boca se abre hacia el número de la izquierda." },
    { q: "6 __ 6", o: [">", "<", "="], a: 2, e: "Son iguales." },
    { q: "3 __ 8", o: ["<", ">", "="], a: 0, e: "3 es menor que 8." },
    { q: "¿Cuál es menor?", o: ["30", "13", "31"], a: 1, e: "13 tiene solo 1 decena." },
    { q: "45 __ 54", o: [">", "<", "="], a: 1, e: "4 decenas es menos que 5." },
    { q: "El cocodrilo abre la boca hacia…", o: ["el número mayor", "el número menor", "el cero"], a: 0, e: "¡Tiene mucha hambre!" },
    { q: "De menor a mayor: 7, 2, 10", o: ["10, 7, 2", "2, 7, 10", "7, 2, 10"], a: 1, e: "Primero el más pequeño." },
    { q: "62 __ 68", o: ["<", ">", "="], a: 0, e: "Mismas decenas; 2 es menor que 8." },
    { q: "Si hay los mismos puntos, es…", o: ["victoria", "empate", "derrota"], a: 1, e: "Iguales: empate." },
  ],
  examen: [
    { q: "27 __ 72", o: [">", "<", "="], a: 1, e: "2 decenas es menos que 7." },
    { q: "¿Qué número es mayor que 40?", o: ["14", "39", "41"], a: 2, e: "41 va después de 40." },
    { q: "Ordena de mayor a menor: 5, 50, 15", o: ["50, 15, 5", "5, 15, 50", "15, 50, 5"], a: 0, e: "Primero el más grande." },
    { q: "9 = __", o: ["6", "9", "19"], a: 1, e: "Igual: el mismo número." },
  ],
  feynman: ["Cómo sé qué número es mayor", "Cómo se usan los signos > y <", "Por qué miro primero las decenas"],
  mapa: mapa("COMPARAR NÚMEROS", "var(--pri)", [
    [">", "mayor que: 8 > 5", "var(--leaf)"],
    ["<", "menor que: 2 < 6", "var(--red)"],
    ["=", "igual a: 4 = 4", "var(--pen)"],
    ["Dos cifras", "primero decenas, luego unidades", "var(--sun)"],
  ], 220),
  tarjetas: [
    ["¿Qué significa >?", "Mayor que"],
    ["¿Qué significa <?", "Menor que"],
    ["¿Qué significa =?", "Igual a"],
    ["¿Hacia dónde abre la boca el cocodrilo?", "Hacia el número mayor"],
    ["¿Qué miro primero en 36 y 52?", "Las decenas"],
    ["¿Cuál es mayor, 19 o 21?", "21"],
    ["Ordena de menor a mayor: 4, 1, 3", "1, 3, 4"],
    ["8 __ 8", "8 = 8"],
  ],
  familias: [
    "Comparad alturas en casa, el número de botones de dos camisas o los cromos de cada uno.",
    "Dibujad un cocodrilo en un papel y usadlo para comparar números de dados o cartas.",
    "Al ir a la compra, preguntad qué cuesta más y qué cuesta menos.",
    "Jugad a la guerra de cartas: gana la carta mayor y, si son iguales, empate.",
  ],
  profesores: PROF("Sentido numérico: comparación y ordenación de números naturales hasta el 99 y uso de los signos >, < e =", ["Cocodrilo de cartulina con la boca móvil para comparar.", "Torres de cubos encajables para comparar alturas.", "Ordenar al alumnado en fila por el número de su dorsal."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
