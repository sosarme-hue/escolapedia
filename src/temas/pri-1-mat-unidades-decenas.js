// Matemáticas 1º de Primaria: unidades y decenas.
const { mapa } = require("./_util");
const { svg, puntos, num, txt, decena, unidad, moneda, billete, PROF, FUENTES } = require("./_pri1");

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "Unidades y decenas",
  minutos: 20,
  objetivos: ["Saber que 10 unidades forman 1 decena", "Hacer grupos de 10 para contar más rápido", "Decir cuántas decenas y unidades tiene un número"],
  claves: ["unidad", "decena", "grupo de 10", "cifra"],
  pregunta: {
    texto: "Tienes un montón de 14 caramelos. ¿Cómo los contarías más rápido sin equivocarte?",
    respuesta: "Haciendo un <mark>grupo de 10</mark> y contando los que sobran: 1 grupo de 10 y 4 sueltos son 14.",
  },
  bloques: [
    {
      html: `<h3>La unidad</h3><p>Una cosa sola es <mark>una unidad</mark>.</p><p>Un lápiz, una pelota o un cubito son <b>1 unidad</b> cada uno.</p><p>Cuando contamos de uno en uno, contamos <b>unidades</b>. Si tengo 7 canicas, tengo 7 unidades. Las unidades son las piezas más pequeñas para contar.</p>`,
      svg: svg("Tres cubitos sueltos: cada uno es una unidad", `${unidad(70, 70)}${unidad(120, 70)}${unidad(170, 70)}${txt(77, 110, "1")}${txt(127, 110, "1")}${txt(177, 110, "1")}${txt(130, 150, "Cada cubito es 1 unidad", "var(--pen)")}`),
    },
    {
      html: `<h3>La decena</h3><p>Si juntamos <b>10 unidades</b>, tenemos <mark>una decena</mark>.</p><p>Una decena es un grupo de 10, como los dedos de las dos manos.</p><p>La decena la podemos dibujar como una <b>barra de 10 cubitos</b> pegados. Así no hay que contarlos cada vez: ya sabemos que la barra vale 10.</p>`,
      svg: svg("Diez cubitos sueltos se juntan en una barra de diez: una decena", `${[...Array(10)].map((_, i) => unidad(20 + (i % 5) * 20, 50 + Math.floor(i / 5) * 20)).join("")}<path d="M130 70 H 170" stroke="var(--ink)" stroke-width="3"/><path d="M162 63 L 172 70 L 162 77" stroke="var(--ink)" stroke-width="3" fill="none"/>${decena(200, 22)}${txt(70, 120, "10 unidades")}${txt(207, 150, "1 decena", "var(--pen)")}`),
      video: { id: "vXwLqORIgFM", titulo: "Definición de decena para niños de Primaria", canal: "Mundo Primaria", vistas: 1733953, megusta: 0 },
    },
    {
      html: `<h3>Contar con grupos de 10</h3><p>Para contar muchas cosas, hacemos <mark>montones de 10</mark>.</p><p>Luego contamos los montones y las cosas que sobran.</p><p>Así es más difícil equivocarse. Si se nos olvida un número, solo hay que repasar un grupo pequeño y no todo el montón.</p>`,
      svg: svg("Doce puntos: diez dentro de un círculo y dos fuera", `<ellipse cx="95" cy="80" rx="80" ry="45" fill="none" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="6 4"/>${puntos(5, 50, 64, "var(--pen)")}${puntos(5, 50, 96, "var(--pen)")}${puntos(2, 205, 80, "var(--sun)")}${txt(95, 150, "1 decena", "var(--pen)")}${txt(208, 150, "2 unidades", "var(--sun)")}`),
    },
    {
      html: `<h3>Decenas y unidades en un número</h3><p>En un número de dos cifras, la cifra de la <b>izquierda</b> dice las <mark>decenas</mark>. La de la <b>derecha</b> dice las <mark>unidades</mark>.</p><p>En el 23 hay 2 decenas y 3 unidades.</p><p>Las dos cifras parecen iguales, pero <b>no valen lo mismo</b>. El 2 del 23 vale 20, y el 3 vale solo 3. ¡Por eso el sitio de cada cifra es tan importante!</p>`,
      svg: svg("El número 23: 2 barras de decena y 3 cubitos", `${decena(40, 20)}${decena(62, 20)}${unidad(110, 110)}${unidad(130, 110)}${unidad(150, 110)}<rect x="185" y="40" width="60" height="70" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${num(202, 90, "2", "var(--pen)", 36)}${num(228, 90, "3", "var(--sun)", 36)}${txt(58, 150, "D", "var(--pen)", 18)}${txt(137, 150, "U", "var(--sun)", 18)}`),
    },
    {
      html: `<h3>La tabla de D y U</h3><p>Podemos escribir el número en una tabla con dos casillas: <b>D</b> de decenas y <b>U</b> de unidades.</p><p>El 40 tiene 4 decenas y <mark>0 unidades</mark>.</p><p>La tabla nos ayuda a no mezclar las cifras. Primero miramos la casilla D y luego la casilla U. El 15 tiene 1 decena y 5 unidades. El 31 tiene 3 decenas y 1 unidad.</p>`,
      svg: svg("Tabla D U con los números 15, 31 y 40", `<g>${[["D", "U"], ["1", "5"], ["3", "1"], ["4", "0"]].map((f, i) => `<rect x="70" y="${18 + i * 36}" width="60" height="34" fill="${i === 0 ? "var(--pen)" : "var(--card)"}" stroke="var(--ink)"/><rect x="130" y="${18 + i * 36}" width="60" height="34" fill="${i === 0 ? "var(--sun)" : "var(--card)"}" stroke="var(--ink)"/>${num(100, 43 + i * 36, f[0], i === 0 ? "var(--card)" : "var(--pen)", 22)}${num(160, 43 + i * 36, f[1], i === 0 ? "var(--ink)" : "var(--ink)", 22)}`).join("")}</g>`),
    },
    {
      html: `<h3>Contar de diez en diez</h3><p>Con las decenas podemos contar <mark>saltando de 10 en 10</mark>: 10, 20, 30, 40, 50, 60, 70, 80, 90.</p><p>Fíjate: todos estos números terminan en <b>0</b>, porque no tienen unidades sueltas.</p><p>Contar de diez en diez es <mark>muy rápido</mark>. Prueba con tus dos manos: cada vez que abras las dos manos, has contado 10 más.</p>`,
      svg: svg("Una rana salta por una fila de números: 10, 20, 30, 40, 50", `<path d="M20 120 H 240" stroke="var(--ink)" stroke-width="3"/>${[10, 20, 30, 40, 50].map((n, i) => `<path d="M${40 + i * 45} 112 V 128" stroke="var(--ink)" stroke-width="2"/>${num(40 + i * 45, 152, n, "var(--pen)", 18)}`).join("")}${[0, 1, 2, 3].map((i) => `<path d="M${42 + i * 45} 108 Q ${62 + i * 45} 70 ${83 + i * 45} 108" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>${txt(62 + i * 45, 78, "+10", "var(--leaf)", 12)}`).join("")}${txt(130, 40, "Saltos de 10")}`),
      video: { id: "cd_cTyNLHLw", titulo: "Aprender a contar de 10 en 10 hasta 100", canal: "Little Baby Bum en Español", vistas: 4230900, megusta: 0 },
    },
    {
      html: `<h3>Cambiar 10 unidades por 1 decena</h3><p>Si tienes <b>10 cubitos sueltos</b>, puedes <mark>cambiarlos por una barra</mark>.</p><p>Es como cambiar 10 monedas de 1 euro por un billete de 10: tienes lo mismo, pero ocupa menos.</p><p>Siempre que juntes <b>10 sueltos</b>, haz el cambio. Nunca dejamos 10 o más cubitos sueltos en la casilla de las unidades.</p>`,
      svg: svg("Diez monedas de un euro equivalen a un billete de diez euros", `${[...Array(10)].map((_, i) => moneda(22 + (i % 5) * 24, 60 + Math.floor(i / 5) * 30, "1", 10)).join("")}${txt(150, 86, "=", "var(--ink)", 30)}${billete(168, 54, "10 €")}${txt(70, 150, "10 monedas de 1 €")}${txt(208, 150, "1 billete")}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Las decenas están en muchas cosas: una <b>caja de 10 huevos</b>, un paquete de 10 lápices o 10 cromos en un sobre.</p><p>Si hay 3 cajas de 10 huevos, hay <mark>30 huevos</mark> sin contarlos uno a uno.</p><p>En la tienda, en el cole y en casa usamos las decenas sin darnos cuenta. Los <b>paquetes de 10</b> ayudan a contar rápido y a repartir.</p>`,
      svg: svg("Tres hueveras de diez huevos: treinta huevos", `${[0, 1, 2].map((k) => `<rect x="${20 + k * 80}" y="50" width="70" height="40" rx="6" fill="var(--sun)" opacity=".5" stroke="var(--ink)"/>${[...Array(10)].map((_, i) => `<ellipse cx="${29 + k * 80 + (i % 5) * 13}" cy="${61 + Math.floor(i / 5) * 17}" rx="5" ry="7" fill="var(--card)" stroke="var(--muted)"/>`).join("")}`).join("")}${txt(130, 125, "10 + 10 + 10", "var(--ink)", 16)}${txt(130, 155, "30 huevos", "var(--pen)", 18)}`),
    },
    {
      html: `<h3>Juego: ¿qué número es?</h3><p>Mira las barras y los cubitos. Primero cuenta las <b>barras</b> de diez en diez. Después sigue con los <b>cubitos</b> de uno en uno.</p><p>¡Aquí hay <mark>4 barras y 6 cubitos</mark>! ¿Lo sabes? Es el 46.</p><p>Ahora inventa tú otro número con barras y cubitos. Dibuja 2 barras y 8 cubitos. ¿Qué número has hecho? Es el <b>28</b>.</p>`,
      svg: svg("Cuatro barras de diez y seis cubitos sueltos forman el 46", `${[0, 1, 2, 3].map((i) => decena(30 + i * 20, 25)).join("")}${[...Array(6)].map((_, i) => unidad(130 + (i % 3) * 20, 90 + Math.floor(i / 3) * 16)).join("")}${txt(60, 155, "40", "var(--pen)", 16)}${txt(150, 155, "6", "var(--sun)", 16)}${txt(220, 70, "?", "var(--red)", 34)}${num(220, 130, "46", "var(--red)", 26)}`),
    },
  ],
  figura: {
    titulo: "Del 10 al 50 con barras de decena",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Una barra es 10, dos barras son 20, tres 30, cuatro 40 y cinco 50">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[1, 2, 3, 4, 5].map((n, k) => { const x0 = 40 + k * 120; return [...Array(n)].map((_, j) => decena(x0 + j * 17, 30)).join("") + num(x0 + 40, 200, n * 10, "var(--pen)", 30) + txt(x0 + 40, 228, `${n} decena${n > 1 ? "s" : ""}`, "var(--muted)", 13); }).join("")}
    </svg>`,
  },
  video: { id: "0j-80cSRVOk", titulo: "Unidades y decenas, para niños de primer grado", canal: "Tutoriales Aprende en un Click", vistas: 2793528, megusta: 0, busqueda: "unidades y decenas para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántas decenas y unidades tiene el 17?", pasos: ["Mira la cifra de la izquierda: 1. Es 1 decena.", "Mira la cifra de la derecha: 7. Son 7 unidades.", "1 decena y 7 unidades son 10 + 7."], resultado: "el 17 tiene 1 decena y 7 unidades." },
    { enunciado: "Tengo 3 barras de 10 y 5 cubitos sueltos. ¿Qué número es?", pasos: ["Cuenta las barras de diez en diez: 10, 20, 30.", "Sigue con los cubitos: 31, 32, 33, 34, 35."], resultado: "es el 35." },
    { enunciado: "En clase hay 2 paquetes de 10 lápices y 3 lápices sueltos. ¿Cuántos lápices hay?", pasos: ["Cada paquete es una decena: 10, 20.", "Los sueltos son unidades: 21, 22, 23.", "2 decenas y 3 unidades se escriben 23."], resultado: "hay 23 lápices." },
  ],
  errores: [
    "Confundir las cifras: en el 31 hay 3 decenas y 1 unidad, no al revés.",
    "Olvidar el 0: el 20 tiene 2 decenas y 0 unidades.",
    "Hacer grupos de 9 o de 11 al contar: el grupo siempre es de 10.",
    "Contar las barras de uno en uno (1, 2, 3) en vez de diez en diez (10, 20, 30).",
  ],
  ejercicios: [
    { q: "¿Cuántas unidades tiene una decena?", sol: "10 unidades." },
    { q: "¿Cuántas decenas y unidades tiene el 26?", sol: "2 decenas y 6 unidades." },
    { q: "Escribe el número: 4 decenas y 2 unidades.", sol: "42." },
    { q: "Escribe el número: 1 decena y 0 unidades.", sol: "10." },
    { q: "Dibuja 13 palitos y rodea un grupo de 10. ¿Cuántos quedan fuera?", sol: "Quedan 3 fuera: 13 es 1 decena y 3 unidades." },
    { q: "¿Qué número tiene 5 decenas y 5 unidades?", sol: "55." },
    { q: "Cuenta de 10 en 10 desde el 10 hasta el 90.", sol: "10, 20, 30, 40, 50, 60, 70, 80, 90." },
    { q: "¿Cuántas decenas hay en el 80?", sol: "8 decenas." },
    { q: "Hay 4 cajas de 10 huevos. ¿Cuántos huevos hay?", sol: "40 huevos." },
    { q: "Completa: 3 decenas y __ unidades = 39.", sol: "9 unidades." },
  ],
  quiz: [
    { q: "Una decena son…", o: ["5 unidades", "10 unidades", "100 unidades"], a: 1, e: "Una decena es un grupo de 10." },
    { q: "En el 38, ¿cuántas decenas hay?", o: ["3", "8", "38"], a: 0, e: "La cifra de la izquierda dice las decenas." },
    { q: "En el 52, ¿cuántas unidades hay?", o: ["5", "2", "7"], a: 1, e: "La cifra de la derecha dice las unidades." },
    { q: "2 decenas y 4 unidades es…", o: ["42", "24", "6"], a: 1, e: "20 + 4 = 24." },
    { q: "¿Cuántas unidades tiene el 60?", o: ["6", "0", "60"], a: 1, e: "6 decenas y 0 unidades." },
    { q: "3 barras de 10 son…", o: ["3", "13", "30"], a: 2, e: "10, 20, 30." },
    { q: "¿Qué número va después del 40 si contamos de 10 en 10?", o: ["41", "50", "14"], a: 1, e: "40 + 10 = 50." },
    { q: "10 monedas de 1 € valen lo mismo que…", o: ["1 moneda de 1 €", "un billete de 10 €", "un billete de 5 €"], a: 1, e: "10 unidades = 1 decena." },
    { q: "¿Cuántas decenas tiene el 90?", o: ["9", "0", "90"], a: 0, e: "9 decenas y 0 unidades." },
    { q: "1 decena y 9 unidades es…", o: ["91", "10", "19"], a: 2, e: "10 + 9 = 19." },
  ],
  examen: [
    { q: "El 45 tiene…", o: ["4 decenas y 5 unidades", "5 decenas y 4 unidades", "45 decenas"], a: 0, e: "Izquierda decenas, derecha unidades." },
    { q: "¿Qué número es 7 decenas y 1 unidad?", o: ["17", "71", "8"], a: 1, e: "70 + 1 = 71." },
    { q: "10 cubitos sueltos forman…", o: ["1 decena", "1 unidad", "2 decenas"], a: 0, e: "10 unidades son 1 decena." },
    { q: "Contando de 10 en 10: 20, 30, __", o: ["31", "40", "21"], a: 1, e: "30 + 10 = 40." },
  ],
  feynman: ["Qué es una decena", "Por qué contamos en grupos de 10", "Qué dice cada cifra en un número"],
  mapa: mapa("UNIDADES Y DECENAS", "var(--pri)", [
    ["Unidad", "una cosa sola", "var(--sun)"],
    ["Decena", "un grupo de 10", "var(--pen)"],
    ["Número", "izquierda D · derecha U", "var(--leaf)"],
    ["Ejemplo", "23 = 2 D y 3 U", "var(--red)"],
  ], 220),
  tarjetas: [
    ["¿Cuántas unidades hay en una decena?", "10"],
    ["¿Qué dice la cifra de la izquierda?", "Las decenas"],
    ["¿Qué dice la cifra de la derecha?", "Las unidades"],
    ["El 34 tiene…", "3 decenas y 4 unidades"],
    ["2 decenas son…", "20"],
    ["¿Cuántas unidades tiene el 50?", "0 unidades"],
    ["Cuenta de 10 en 10 hasta 50", "10, 20, 30, 40, 50"],
    ["10 cubitos sueltos se cambian por…", "1 barra (1 decena)"],
  ],
  familias: [
    "Juntad pinzas, macarrones o palillos en grupos de 10 con una goma: cada grupo es una decena.",
    "Al contar dinero en céntimos o cromos, haced montones de 10.",
    "Preguntadle por los números de la calle: «¿cuántas decenas tiene el 35?».",
    "Contad de diez en diez dando palmadas mientras subís escaleras o camináis: 10, 20, 30…",
  ],
  profesores: PROF("Sentido numérico: sistema de numeración decimal, agrupamientos de 10 y valor posicional de decenas y unidades", ["Regletas o palillos con goma para formar decenas.", "Tabla D/U con bolsitas: diez cubitos pasan a la casilla D.", "Juego del cajero: canjear 10 fichas sueltas por una barra."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
