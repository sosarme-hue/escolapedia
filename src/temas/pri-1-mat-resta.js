// Matemáticas 1º de Primaria: la resta.
const { mapa } = require("./_util");
const { svg, puntos, manzana, num, txt, PROF, FUENTES } = require("./_pri1");

// Globo sencillo.
const globo = (x, y, c, roto = false) => roto
  ? `<g><path d="M${x - 10} ${y - 8} l 6 6 l -8 4 l 10 2 l -4 8 l 8 -6 l 6 8 l 0 -10 l 10 2 l -8 -8" stroke="${c}" stroke-width="2.5" fill="none"/></g>`
  : `<g><ellipse cx="${x}" cy="${y}" rx="13" ry="16" fill="${c}"/><path d="M${x} ${y + 16} q -4 16 2 30" stroke="var(--muted)" fill="none"/></g>`;

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "La resta",
  minutos: 25,
  objetivos: ["Entender que restar es quitar o separar", "Restar números hasta el 10 con dibujos, dedos y la recta", "Restar decenas y unidades sin llevar"],
  claves: ["restar", "menos (−)", "quitar", "quedan", "diferencia"],
  pregunta: {
    texto: "Tienes 6 galletas y te comes 2. ¿Cuántas te quedan?",
    respuesta: "Te quedan <mark>4 galletas</mark>. Has hecho una resta: 6 − 2 = 4.",
  },
  bloques: [
    {
      html: `<h3>Restar es quitar</h3><p>Restar es <mark>quitar</mark> cosas de un grupo para saber cuántas quedan.</p><p>Si tengo 5 manzanas y me como 2, tacho las 2 que me como. Cuento las que no están tachadas: quedan 3. Hemos restado.</p>`,
      svg: svg("Cinco manzanas, dos tachadas: quedan tres", `${[0, 1, 2, 3, 4].map((i) => manzana(40 + i * 45, 70)).join("")}${[3, 4].map((i) => `<path d="M${25 + i * 45} 55 L ${55 + i * 45} 85 M${55 + i * 45} 55 L ${25 + i * 45} 85" stroke="var(--ink)" stroke-width="4"/>`).join("")}${txt(130, 135, "5 − 2 = 3", "var(--pen)", 20)}`),
    },
    {
      html: `<h3>El signo menos</h3><p>El signo <b>−</b> se lee <mark>«menos»</mark>. Es una rayita sola.</p><p>7 − 3 = 4 se lee «siete menos tres es igual a cuatro». Las palabras <b>quitar, se van, pierdo, me como, regalo, gasto</b> nos avisan de que hay que restar.</p>`,
      svg: svg("La resta 7 menos 3 igual a 4", `${num(40, 100, "7", "var(--pen)", 48)}${num(88, 100, "−", "var(--red)", 48)}${num(135, 100, "3", "var(--pen)", 48)}${num(180, 100, "=", "var(--ink)", 44)}${num(225, 100, "4", "var(--leaf)", 48)}${txt(130, 150, "siete menos tres")}`),
      video: { id: "42vjqtleG9E", titulo: "Aprendiendo a restar. La resta", canal: "Happy Learning Español", vistas: 6671180, megusta: 0 },
    },
    {
      html: `<h3>Restar con los dedos</h3><p>Para 8 − 3, levanta <b>8 dedos</b>. Después <mark>baja 3 dedos</mark>.</p><p>Cuenta los dedos que siguen levantados: 1, 2, 3, 4, 5. Quedan 5. ¡8 − 3 = 5!</p>`,
      svg: svg("Ocho dedos levantados, tres bajan: quedan cinco", `${[...Array(10)].map((_, d) => { const x = 22 + d * 22 + (d > 4 ? 6 : 0), up = d < 5, down = d >= 5 && d < 8; return `<rect x="${x}" y="${up ? 40 : down ? 75 : 90}" width="15" height="${up ? 70 : down ? 35 : 20}" rx="7" fill="${up ? "var(--sun)" : down ? "var(--red)" : "var(--line)"}" opacity="${down ? 0.6 : 1}"/>`; }).join("")}${txt(70, 140, "quedan 5", "var(--sun)")}${txt(180, 140, "bajan 3", "var(--red)")}`),
    },
    {
      html: `<h3>Restar en la recta numérica</h3><p>En la recta, restar es <mark>dar saltos hacia atrás</mark>.</p><p>Para 9 − 4, nos ponemos en el 9 y damos 4 saltos atrás: 8, 7, 6, 5. Llegamos al <b>5</b>. Contar hacia atrás nos ayuda mucho a restar.</p>`,
      svg: svg("Recta numérica: desde el 9 cuatro saltos hacia atrás hasta el 5", `<path d="M18 120 H 242" stroke="var(--ink)" stroke-width="3"/>${[...Array(11)].map((_, i) => `<path d="M${22 + i * 21.6} 112 V 128" stroke="var(--ink)" stroke-width="2"/>${num(22 + i * 21.6, 150, i, i === 9 ? "var(--pen)" : i === 5 ? "var(--red)" : "var(--ink)", 14)}`).join("")}${[9, 8, 7, 6].map((i) => `<path d="M${20 + i * 21.6} 115 Q ${11 + i * 21.6} 85 ${2 + i * 21.6} 115" stroke="var(--red)" stroke-width="2.5" fill="none"/>`).join("")}${txt(160, 70, "−1 −1 −1 −1", "var(--red)")}${txt(130, 35, "9 − 4 = 5", "var(--ink)", 16)}`),
    },
    {
      html: `<h3>Restar es separar</h3><p>También restamos para <mark>separar</mark> una parte de un grupo.</p><p>En la clase hay 9 mochilas: 4 son rojas y las demás azules. ¿Cuántas son azules? Quitamos las rojas: 9 − 4 = <b>5 azules</b>.</p>`,
      svg: svg("Nueve mochilas: cuatro rojas y cinco azules", `${[...Array(9)].map((_, i) => `<rect x="${18 + i * 26}" y="60" width="20" height="28" rx="6" fill="${i < 4 ? "var(--red)" : "var(--pen)"}"/><path d="M${23 + i * 26} 60 q 5 -10 10 0" stroke="var(--ink)" stroke-width="2" fill="none"/>`).join("")}${txt(60, 120, "4 rojas", "var(--red)")}${txt(180, 120, "5 azules", "var(--pen)")}${txt(130, 160, "9 − 4 = 5")}`),
    },
    {
      html: `<h3>La suma y la resta son amigas</h3><p>La resta <mark>deshace</mark> lo que hace la suma. Si 3 + 4 = 7, entonces 7 − 4 = 3 y 7 − 3 = 4.</p><p>Por eso, para comprobar una resta, podemos sumar. Si 8 − 5 = 3, comprobamos: <b>3 + 5 = 8</b>. ¡Está bien!</p>`,
      svg: svg("Triángulo de números 3, 4 y 7: 3 más 4 es 7, 7 menos 4 es 3", `<path d="M130 30 L 50 140 L 210 140 Z" fill="var(--card)" stroke="var(--line)" stroke-width="3"/><circle cx="130" cy="44" r="22" fill="var(--red)"/>${num(130, 53, "7", "var(--card)", 24)}<circle cx="70" cy="128" r="22" fill="var(--pen)"/>${num(70, 137, "3", "var(--card)", 24)}<circle cx="190" cy="128" r="22" fill="var(--leaf)"/>${num(190, 137, "4", "var(--card)", 24)}${txt(130, 108, "3 + 4 = 7", "var(--ink)", 12)}${txt(130, 124, "7 − 4 = 3", "var(--ink)", 12)}`),
    },
    {
      html: `<h3>Restar decenas y unidades</h3><p>Para restar números de dos cifras, restamos <mark>unidades con unidades</mark> y <b>decenas con decenas</b>, como en la suma.</p><p>58 − 23: unidades 8 − 3 = 5; decenas 5 − 2 = 3. El resultado es <b>35</b>. El número grande siempre va arriba.</p>`,
      svg: svg("Resta en columnas: 58 menos 23 igual a 35", `<rect x="80" y="18" width="50" height="24" fill="var(--pen)"/><rect x="130" y="18" width="50" height="24" fill="var(--sun)"/>${num(105, 37, "D", "var(--card)", 16)}${num(155, 37, "U", "var(--ink)", 16)}${num(105, 72, "5", "var(--pen)", 26)}${num(155, 72, "8", "var(--ink)", 26)}${num(60, 104, "−", "var(--red)", 26)}${num(105, 104, "2", "var(--pen)", 26)}${num(155, 104, "3", "var(--ink)", 26)}<path d="M55 115 H 185" stroke="var(--ink)" stroke-width="3"/>${num(105, 146, "3", "var(--red)", 28)}${num(155, 146, "5", "var(--red)", 28)}`),
      video: { id: "BuKpDUH9f3Q", titulo: "Restas sencillas para niños", canal: "El rincón de aprender", vistas: 3887107, megusta: 0 },
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Restamos para saber <b>cuánto nos queda</b>: cuántos caramelos después de repartir o cuánto dinero después de comprar.</p><p>También para saber <mark>cuántos faltan</mark>: si un puzle tiene 10 piezas y he puesto 7, faltan 10 − 7 = 3.</p>`,
      svg: svg("Un puzle de diez piezas con siete puestas y tres huecos", `${[...Array(10)].map((_, i) => `<rect x="${40 + (i % 5) * 36}" y="${40 + Math.floor(i / 5) * 40}" width="34" height="38" rx="4" fill="${i < 7 ? "var(--leaf)" : "var(--card)"}" stroke="var(--ink)" stroke-width="${i < 7 ? 1 : 2}" stroke-dasharray="${i < 7 ? "" : "4 3"}"/>`).join("")}${txt(130, 150, "10 − 7 = 3: faltan 3")}`),
    },
    {
      html: `<h3>Juego: los globos</h3><p>Hay <b>6 globos</b>. ¡Pum! Explotan 2. ¿Cuántos quedan? <mark>6 − 2 = 4</mark>.</p><p>Inventa tú más historias: «Había 10 pájaros en un árbol y se fueron volando 5…». Dibuja, tacha y cuenta lo que queda.</p>`,
      svg: svg("Seis globos: dos han explotado y quedan cuatro", `${[0, 1, 2, 3, 4, 5].map((i) => globo(30 + i * 40, 60, ["var(--red)", "var(--pen)", "var(--sun)", "var(--leaf)", "var(--water)", "var(--red)"][i], i === 1 || i === 4)).join("")}${txt(130, 150, "6 − 2 = 4", "var(--ink)", 18)}`),
    },
  ],
  figura: {
    titulo: "Tres maneras de restar 7 − 3",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="La resta 7 menos 3 tachando dibujos, bajando dedos y en la recta numérica">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${txt(110, 34, "Tachando", "var(--ink)", 16)}${puntos(7, 30, 110, "var(--pen)", 25, 9)}${[4, 5, 6].map((i) => `<path d="M${22 + i * 25} 102 L ${38 + i * 25} 118 M${38 + i * 25} 102 L ${22 + i * 25} 118" stroke="var(--red)" stroke-width="3"/>`).join("")}
      ${txt(320, 34, "Bajando dedos", "var(--ink)", 16)}${[...Array(7)].map((_, d) => `<rect x="${262 + d * 17}" y="${d < 4 ? 70 : 110}" width="12" height="${d < 4 ? 70 : 30}" rx="6" fill="${d < 4 ? "var(--sun)" : "var(--red)"}" opacity="${d < 4 ? 1 : 0.5}"/>`).join("")}
      ${txt(530, 34, "En la recta", "var(--ink)", 16)}<path d="M430 140 H 630" stroke="var(--ink)" stroke-width="3"/>${[...Array(9)].map((_, i) => `<path d="M${440 + i * 23} 132 V 148" stroke="var(--ink)" stroke-width="2"/>${num(440 + i * 23, 170, i, i === 4 ? "var(--red)" : "var(--ink)", 14)}`).join("")}${[7, 6, 5].map((i) => `<path d="M${438 + i * 23} 135 Q ${429 + i * 23} 105 ${419 + i * 23} 135" stroke="var(--red)" stroke-width="2.5" fill="none"/>`).join("")}
      ${txt(320, 225, "7 − 3 = 4", "var(--red)", 26)}
    </svg>`,
  },
  video: { id: "mZQQtcw1Uww", titulo: "Restas para niños con dinosaurios", canal: "Smile and Learn - Español", vistas: 3779536, megusta: 0, busqueda: "restas para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Tengo 9 cromos y regalo 3. ¿Cuántos me quedan?", pasos: ["Regalo: es una resta.", "Me pongo en el 9 y cuento 3 hacia atrás: 8, 7, 6."], resultado: "9 − 3 = 6 cromos." },
    { enunciado: "Calcula 10 − 6 y compruébalo con una suma.", pasos: ["Levanto 10 dedos y bajo 6.", "Quedan 4 dedos.", "Compruebo: 4 + 6 = 10."], resultado: "10 − 6 = 4." },
    { enunciado: "Calcula 47 − 15.", pasos: ["Pongo el 47 arriba y el 15 debajo.", "Unidades: 7 − 5 = 2.", "Decenas: 4 − 1 = 3."], resultado: "47 − 15 = 32." },
  ],
  errores: [
    "Poner el número pequeño arriba: en la resta, el número grande va siempre primero.",
    "Contar el número de partida al dar saltos hacia atrás: para 9 − 4 se dice 8, 7, 6, 5.",
    "Sumar en vez de restar: fíjate en el signo − y en palabras como «quedan» o «se van».",
    "Empezar por las decenas en las cuentas en columna: siempre se empieza por las unidades.",
  ],
  ejercicios: [
    { q: "5 − 1 =", sol: "4." },
    { q: "8 − 4 =", sol: "4." },
    { q: "10 − 3 =", sol: "7." },
    { q: "6 − 6 =", sol: "0: si lo quito todo, no queda nada." },
    { q: "7 − 0 =", sol: "7: si no quito nada, queda igual." },
    { q: "Dibuja 9 círculos y tacha 5. ¿Cuántos quedan?", sol: "4 círculos." },
    { q: "Completa: 8 − __ = 5.", sol: "3." },
    { q: "Calcula 60 − 20.", sol: "40." },
    { q: "Calcula 39 − 14.", sol: "25." },
    { q: "Hay 10 pájaros y se van 4. ¿Cuántos quedan?", sol: "6 pájaros." },
  ],
  quiz: [
    { q: "Restar es…", o: ["juntar", "quitar", "doblar"], a: 1, e: "Quitamos para ver lo que queda." },
    { q: "¿Cómo se lee −?", o: ["más", "menos", "por"], a: 1, e: "El signo − se lee «menos»." },
    { q: "6 − 2 =", o: ["4", "8", "3"], a: 0, e: "6, y atrás dos: 5, 4." },
    { q: "9 − 9 =", o: ["9", "18", "0"], a: 2, e: "Si quito todo, queda 0." },
    { q: "Si 5 + 3 = 8, entonces 8 − 3 =", o: ["5", "11", "3"], a: 0, e: "La resta deshace la suma." },
    { q: "En la recta, para restar salto…", o: ["hacia delante", "hacia atrás", "dos veces"], a: 1, e: "Restar es ir hacia atrás." },
    { q: "50 − 30 =", o: ["20", "80", "2"], a: 0, e: "5 decenas − 3 decenas = 2 decenas." },
    { q: "«Se fueron 3 niños» indica…", o: ["suma", "resta", "comparación"], a: 1, e: "Se fueron: quitamos." },
    { q: "76 − 41 =", o: ["35", "117", "45"], a: 0, e: "6 − 1 = 5; 7 − 4 = 3." },
    { q: "Un puzle de 10 piezas con 8 puestas: faltan…", o: ["18", "2", "8"], a: 1, e: "10 − 8 = 2." },
  ],
  examen: [
    { q: "7 − 5 =", o: ["2", "12", "3"], a: 0, e: "7, atrás 5: 6, 5, 4, 3, 2." },
    { q: "10 − 1 =", o: ["11", "9", "0"], a: 1, e: "Uno menos que 10." },
    { q: "88 − 33 =", o: ["55", "121", "50"], a: 0, e: "8 − 3 = 5 y 8 − 3 = 5." },
    { q: "¿Cómo compruebo que 9 − 2 = 7?", o: ["7 + 2 = 9", "9 + 2 = 11", "7 − 2 = 5"], a: 0, e: "Sumo el resultado y lo que quité." },
  ],
  feynman: ["Qué significa restar", "Cómo resto con dedos o en la recta", "Cómo compruebo una resta con una suma"],
  mapa: mapa("LA RESTA", "var(--pri)", [
    ["Qué es", "quitar o separar", "var(--red)"],
    ["Signo", "− se lee menos", "var(--pen)"],
    ["Cómo", "tachar · dedos · recta hacia atrás", "var(--leaf)"],
    ["Comprobar", "resultado + lo quitado", "var(--sun)"],
  ], 220),
  tarjetas: [
    ["¿Qué es restar?", "Quitar o separar"],
    ["8 − 2", "6"],
    ["10 − 5", "5"],
    ["4 − 4", "0"],
    ["¿Hacia dónde salto en la recta para restar?", "Hacia atrás"],
    ["¿Qué número va arriba en una resta?", "El más grande"],
    ["65 − 32", "33"],
    ["Palabras de resta", "quedan, se van, pierdo, gasto, faltan"],
  ],
  familias: [
    "Al comer, preguntad: «Tenías 6 trozos y te has comido 2, ¿cuántos quedan?».",
    "Jugad a los bolos con botellas: cuántas había, cuántas caen y cuántas quedan de pie.",
    "Contad hacia atrás antes de salir: 10, 9, 8… ¡Es entrenamiento para restar!",
    "Si duda, que lo compruebe con una suma: así entiende que suma y resta van unidas.",
  ],
  profesores: PROF("Sentido numérico: significados de la resta (quitar, separar, completar), relación con la suma, estrategias de cálculo y algoritmo sin llevadas", ["Bolos de clase para crear restas reales.", "Triángulos de familias de operaciones (3, 4, 7).", "Recta numérica en el suelo para restar saltando hacia atrás."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
