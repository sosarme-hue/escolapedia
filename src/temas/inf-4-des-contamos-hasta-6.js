// Infantil 4 años · Descubrimiento y exploración del entorno: contamos hasta 6.
const { marco, fichas, ic, t, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

// Fila de «n» dibujos iguales centrada, con el número grande debajo.
const fila = (d, n, y, s = 1, sep = 34) => [...Array(n)].map((_, i) => ic(d, 130 + (i - (n - 1) / 2) * sep, y, s)).join("");
const dado = (x, y, n, l = 46) => {
  const P = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] }[n];
  return `<rect x="${x - l / 2}" y="${y - l / 2}" width="${l}" height="${l}" rx="9" fill="#fff" stroke="var(--ink)" stroke-width="2.5"/>${P.map(([a, b]) => `<circle cx="${x + a * l * 0.27}" cy="${y + b * l * 0.27}" r="${l * 0.08}" fill="var(--ink)"/>`).join("")}`;
};

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "4-anos",
  titulo: "Contamos hasta 6",
  minutos: 15,
  objetivos: ["Recitar los números del 1 al 6", "Contar objetos señalando uno a uno", "Reconocer los números escritos del 1 al 6"],
  claves: ["contar", "uno a uno", "número", "cuántos"],
  pregunta: {
    texto: "En la mesa hay unas manzanas. ¿Cómo sabes cuántas hay?",
    respuesta: "Las <mark>cuento una a una</mark>, tocando cada manzana y diciendo un número: 1, 2, 3… El <mark>último número</mark> que digo es cuántas hay.",
  },
  bloques: [
    {
      html: `<h3>Los números del 1 al 6</h3><p>Los números nos dicen <mark>cuántos</mark> hay.</p><p>Vamos a decirlos en orden: <b>1, 2, 3, 4, 5, 6</b>. ¡Otra vez, más fuerte! Uno, dos, tres, cuatro, cinco y seis. Cada número tiene su nombre y su dibujo.</p>`,
      svg: fichas("Los números del 1 al 6", [["1", "var(--red)"], ["2", "var(--inf)"], ["3", "var(--sun)"], ["4", "var(--leaf)"], ["5", "var(--water)"], ["6", "var(--pen)"]], { grande: true, nota: "uno, dos, tres, cuatro, cinco, seis" }),
    },
    {
      html: `<h3>Contar uno a uno</h3><p>Para contar, <mark>toco cada cosa una sola vez</mark> y digo un número.</p><p>No me salto ninguna y no cuento dos veces la misma. El último número es <b>cuántas hay</b>. ¡Prueba con tus juguetes!</p>`,
      svg: marco("Cuatro manzanas con los números 1, 2, 3 y 4 encima", `${fila("manzana", 4, 90, 1.6, 52)}${[1, 2, 3, 4].map((n, i) => t(130 + (i - 1.5) * 52, 50, n, { color: "var(--pen)", size: 22 })).join("")}${t(130, 152, "¡Hay 4!", { color: "var(--red)", size: 24 })}`),
    },
    {
      html: `<h3>El 5: una mano</h3><p>En una mano tengo <mark>5 dedos</mark>. ¡Es muy fácil contar hasta 5!</p><p>Levanta un dedo cada vez: 1, 2, 3, 4, 5. Una mano llena son cinco. Ahora dobla los dedos y vuelve a contar.</p>`,
      svg: marco("Una mano abierta con cinco dedos y el número 5", `${ic("mano", 90, 92, 3)}${t(190, 110, "5", { color: "var(--water)", size: 80 })}`),
    },
    {
      html: `<h3>El 6: uno más</h3><p>Si a 5 le sumo <mark>uno más</mark>, tengo <b>6</b>.</p><p>Una mano llena y un dedo de la otra mano: ¡seis! El dado también tiene una cara con 6 puntos. Cuenta los puntos del dado con el dedo.</p>`,
      svg: marco("Cinco estrellas y una más hacen seis; un dado con seis puntos", `${[...Array(5)].map((_, i) => ic("estrella", 30 + i * 30, 60, 0.7)).join("")}${t(178, 66, "+", { color: "var(--muted)", size: 24 })}${ic("estrella", 210, 60, 0.7)}${dado(90, 130, 6, 54)}${t(180, 145, "= 6", { color: "var(--pen)", size: 36 })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Contamos todo el rato: los <mark>años</mark> que tengo, los platos para la mesa o las velas de la tarta.</p><p>¡Tengo 4 años: cuatro velas! ¿Cuántos años tiene tu hermano o tu primo?</p>`,
      svg: marco("Una tarta con cuatro velas", `<rect x="60" y="100" width="140" height="50" rx="6" fill="#f08fb0"/><path d="M60 100 q12 14 23 0 q12 14 23 0 q12 14 23 0 q12 14 23 0 q12 14 23 0 q12 14 25 0" fill="#fff"/>${[0, 1, 2, 3].map((i) => `<rect x="${86 + i * 26}" y="68" width="8" height="32" fill="var(--water)"/><path d="M${90 + i * 26} 66 q-6 -8 0 -16 q6 8 0 16z" fill="var(--sun)"/>`).join("")}${t(130, 172, "4 velas: ¡4 años!", { color: "var(--red)", size: 16 })}`),
    },
    {
      html: `<h3>Juego: el dado</h3><p>Tira un dado. <mark>Cuenta los puntos</mark> y da tantos saltos como puntos salgan.</p><p>¿Ha salido un 3? ¡Tres saltos! ¿Un 6? ¡Seis saltos de rana! ¡Cuenta en voz alta mientras saltas!</p>`,
      svg: marco("Tres dados con 1, 3 y 6 puntos", `${dado(60, 80, 1)}${dado(130, 80, 3)}${dado(200, 80, 6)}${t(60, 140, "1 salto", { color: "var(--red)", size: 15, max: 64 })}${t(130, 140, "3 saltos", { color: "var(--inf)", size: 15, max: 64 })}${t(200, 140, "6 saltos", { color: "var(--pen)", size: 15, max: 64 })}`),
    },
  ],
  figura: { titulo: "Del 1 al 6", svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Números del 1 al 6 con sus puntos"><rect width="640" height="260" rx="16" fill="var(--paper)"/>${[1, 2, 3, 4, 5, 6].map((n) => { const x = 20 + 100 * (n - 0.5) + 10; return `<text x="${x}" y="110" text-anchor="middle" font-size="64" font-weight="800" fill="var(--pen)" font-family="Baloo 2, sans-serif">${n}</text>${[...Array(n)].map((_, i) => `<circle cx="${x - 15 + (i % 2) * 30}" cy="${150 + Math.floor(i / 2) * 30}" r="11" fill="var(--inf)"/>`).join("")}`; }).join("")}</svg>` },
  video: vid("aApx1wOz-84", "El número 6. Aprende a contar", "Smile and Learn - Español", 1825437, "contar hasta 6 niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántos coches hay en la alfombra?", pasos: ["Ponemos los coches en fila.", "Tocamos cada uno: 1, 2, 3, 4, 5.", "El último número es 5."], resultado: "hay 5 coches." },
    { enunciado: "Ponemos la mesa para 3 personas.", pasos: ["Contamos 3 platos: 1, 2, 3.", "Ponemos un vaso en cada plato.", "Contamos los vasos: también 3."], resultado: "3 platos y 3 vasos: uno para cada uno." },
  ],
  errores: [
    "Contar más rápido de lo que se toca: se cuentan cosas dos veces o se salta alguna.",
    "Saltarse un número al recitar (1, 2, 4…): repasad la serie en voz alta.",
    "Creer que si las cosas están separadas hay más: 4 manzanas siguen siendo 4 aunque estén lejos.",
  ],
  ejercicios: [
    { q: "Cuenta los dedos de una mano.", sol: "5. Nota para la familia: que toque cada dedo al contar." },
    { q: "Da 6 palmadas contando en voz alta.", sol: "1, 2, 3, 4, 5, 6." },
    { q: "Pon 3 cucharas en la mesa.", sol: "Comprobad juntos contando otra vez." },
    { q: "Busca el número 4 en un calendario o un reloj.", sol: "Señaladlo y decid «cuatro»." },
    { q: "Dibuja 2 soles y 6 nubes.", sol: "Contad juntos al terminar." },
    { q: "Tira un dado y salta tantas veces como puntos.", sol: "Es el juego del bloque 6." },
  ],
  quiz: [
    { q: "¿Cuántos dedos hay en una mano?", o: ["3", "5", "6"], a: 1, e: "Una mano tiene 5 dedos." },
    { q: "¿Qué número va después del 5?", o: ["4", "2", "6"], a: 2, e: "1, 2, 3, 4, 5, 6." },
    { q: "Cuento 1, 2, 3. ¿Cuántas hay?", o: ["3", "1", "5"], a: 0, e: "El último número dice cuántas hay." },
    { q: "¿Qué número va antes del 3?", o: ["4", "6", "2"], a: 2, e: "1, 2, 3." },
    { q: "Una mano y un dedo más son…", o: ["6", "5", "4"], a: 0, e: "5 y uno más son 6." },
    { q: "Al contar, toco cada cosa…", o: ["dos veces", "una vez", "ninguna vez"], a: 1, e: "Una sola vez." },
  ],
  examen: [
    { q: "Tengo 4 años. ¿Cuántas velas hay en mi tarta?", o: ["2", "4", "6"], a: 1, e: "Una vela por año." },
    { q: "¿Cuál es el número más grande?", o: ["6", "2", "4"], a: 0, e: "El 6 es el mayor de todos estos." },
    { q: "1, 2, 3, __, 5", o: ["6", "1", "4"], a: 2, e: "Falta el 4." },
  ],
  feynman: ["Los números del 1 al 6 en orden", "Cómo se cuenta uno a uno", "Que el último número dice cuántos hay"],
  mapa: mapa("CONTAR HASTA 6", "var(--inf)", [
    ["En orden", "1, 2, 3, 4, 5, 6", "var(--red)"],
    ["Uno a uno", "toco cada cosa", "var(--pen)"],
    ["Una mano", "son 5 dedos", "var(--leaf)"],
    ["Y uno más", "son 6", "var(--water)"],
  ], 220),
  tarjetas: [
    ["¿Cuántos dedos tiene una mano?", "5"],
    ["¿Qué va después del 5?", "6"],
    ["¿Qué va antes del 2?", "1"],
    ["Cuenta: ●●●", "3"],
    ["¿Cuántos años tienes?", "¡4!"],
    ["5 y uno más son…", "6"],
  ],
  familias: [
    "Contad escalones, botones y cucharas en el día a día.",
    "Jugad con un dado: parchís de niños o juegos de la oca sencillos.",
    "Cantad canciones de números con los dedos.",
    "Pedidle que traiga «3 manzanas» o «5 pinzas» y comprobad juntos.",
  ],
  profesores: PROF("Descubrimiento y exploración del entorno: cuantificadores y conteo; correspondencia uno a uno, cardinalidad y grafía de los números hasta el 6", ["Bandejas de conteo con pinzas y botones.", "Dados grandes de gomaespuma.", "Rincón de números con regletas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
