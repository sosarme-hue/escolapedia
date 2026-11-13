// Infantil 5 años · Descubrimiento y exploración del entorno: los números hasta el 10.
const { mapa } = require("./_util");
const { manos, D, ic, vin, fichas, t, bola, fila, FUENTES, PROF, DE, vid, nota } = require("./_inf5a");

const COL = ["var(--red)", "var(--inf)", "var(--sun)", "var(--leaf)", "var(--water)", "var(--pen)", "var(--red)", "var(--inf)", "var(--leaf)", "var(--pen)"];

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "5-anos",
  titulo: "Los números hasta el 10",
  minutos: 15,
  objetivos: ["Contar hasta 10 señalando cada cosa una vez", "Reconocer los números del 1 al 10", "Saber qué número va antes y después"],
  claves: ["contar", "número", "uno a uno", "antes", "después", "diez"],
  pregunta: { texto: "¿Cuántos dedos tienes en las dos manos?", respuesta: "<mark>Diez</mark>: cinco en cada mano. ¡Los dedos sirven para contar!" },
  bloques: [
    {
      html: `<h3>Del 1 al 10</h3><p>Los <mark>números</mark> nos dicen cuántas cosas hay.</p><p>Contamos así: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve y <b>diez</b>. ¡Cántalo con las manos!</p>`,
      svg: fichas("Los números del 1 al 10", [...Array(10)].map((_, i) => [String(i + 1), COL[i]])),
    },
    {
      html: `<h3>Contar uno a uno</h3><p>Para contar, <mark>señalo cada cosa una vez</mark> y digo un número.</p><p>El último número que digo es <b>cuántas hay</b>. Aquí hay siete manzanas: ¡siete!</p>`,
      svg: vin("Siete manzanas contadas una a una del 1 al 7", `${fila("manzana", 7, 130, 80, 0.85, 32)}${[...Array(7)].map((_, i) => t((130 + (i - 3) * 32).toFixed(1), 124, String(i + 1), { size: 18, color: "var(--pen)" })).join("")}${t(130, 164, "hay 7", { size: 22, color: "var(--red)" })}`),
    },
    {
      html: `<h3>Con los dedos</h3><p>En las dos manos tenemos <mark>diez dedos</mark>.</p><p>Con los dedos enseñamos cualquier número hasta el diez. Ocho son cinco de una mano y tres de la otra.</p>`,
      svg: vin("Dos manos enseñando ocho dedos: cinco y tres", `${manos(5, 3, 130, 92, 1.9)}${t(130, 164, "5 + 3 = 8", { size: 24, color: "var(--pen)" })}`, "¿Cuántos dedos?"),
    },
    {
      html: `<h3>Antes y después</h3><p>Cada número tiene un <mark>vecino antes</mark> y otro <mark>después</mark>.</p><p>Antes del 6 va el 5. Después del 6 va el 7. Después del 9 llega el 10.</p>`,
      svg: vin("El 5 va antes del 6 y el 7 va después", `${bola(60, 80, "5", "var(--muted)", 26)}${bola(130, 80, "6", "var(--red)", 32)}${bola(200, 80, "7", "var(--muted)", 26)}${t(60, 140, "antes", { size: 18, color: "var(--muted)" })}${t(200, 140, "después", { size: 18, color: "var(--muted)" })}`),
    },
    {
      html: `<h3>¿Para qué sirven? Los números de mi vida</h3><p>Los números están por todas partes: tu <mark>edad</mark>, el número de tu casa, los botones del ascensor, el reloj…</p><p>¿Cuántos años tienes? ¡Cinco! ¿Y cuántos cumplirás el año que viene?</p>`,
      svg: vin("Números en la vida: una tarta con 5 velas, una casa con el número 3 y un reloj", `<path d="M30 140 V110 H110 V140z" fill="#f08fb0"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="${42 + i * 14}" y="92" width="5" height="18" fill="var(--pen)"/><path d="M${44.5 + i * 14} 84 q3 4 0 8 q-3 -4 0 -8z" fill="var(--sun)"/>`).join("")}${t(70, 166, "5 años", { size: 16 })}${ic("casa", 160, 110, 1.4)}${t(160, 102, "3", { size: 14, color: "#ffffff" })}${ic("reloj", 222, 110, 1.4)}`),
    },
    {
      html: `<h3>Juego: ¡busca y cuenta!</h3><p>Di un número del 1 al 10. Tu familia tiene que <mark>traer</mark> esa cantidad de cosas: cucharas, calcetines, pinzas…</p><p>Después contáis juntos, uno a uno, para comprobar si está bien.</p>`,
      svg: vin("Una tarjeta con el número 4 y cuatro calcetines", `<rect x="26" y="34" width="70" height="96" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="4"/>${t(61, 104, "4", { size: 60, color: "var(--pen)" })}${[0, 1, 2, 3].map((i) => `<path transform="translate(${130 + (i % 2) * 50} ${40 + Math.floor(i / 2) * 60})" d="M0 0 h16 v24 q0 8 8 10 q8 2 8 10 h-24 q-8 0 -8 -10z" fill="${COL[i]}"/>`).join("")}`),
    },
  ],
  figura: {
    titulo: "Del 1 al 10",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Los números del 1 al 10, cada uno con sus puntos"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${[...Array(10)].map((_, i) => { const x = 18 + (i % 5) * 124, y = i < 5 ? 20 : 160; return `<rect x="${x}" y="${y}" width="108" height="122" rx="14" fill="var(--card)" stroke="${COL[i]}" stroke-width="3"/><text x="${x + 54}" y="${y + 54}" text-anchor="middle" font-size="44" font-weight="800" fill="${COL[i]}" ${D}>${i + 1}</text>${[...Array(i + 1)].map((_, k) => `<circle cx="${x + 18 + (k % 5) * 18}" cy="${y + 78 + Math.floor(k / 5) * 18}" r="6.5" fill="${COL[i]}"/>`).join("")}`; }).join("")}</svg>`,
  },
  video: vid("dln-gD6WdmU", "Canciones infantiles de Pocoyó: canción de los números", "Pocoyo Español", 28385026, "canción de los números Pocoyó"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántos coches hay en la alfombra?", pasos: ["Los ponemos en fila.", "Tocamos cada coche y decimos un número: 1, 2, 3, 4, 5, 6.", "El último número es la respuesta."], resultado: "hay 6 coches." },
    { enunciado: "¿Qué número va después del 8?", pasos: ["Contamos desde el 1: … 6, 7, 8.", "Seguimos uno más.", "Decimos: 9."], resultado: "después del 8 va el 9." },
  ],
  errores: [
    "Contar dos veces la misma cosa o saltarse una: hay que tocar cada una.",
    "Decir los números más rápido que los dedos que señalan.",
    "Confundir el 6 y el 9: el 6 tiene la barriga abajo, el 9 la tiene arriba.",
  ],
  ejercicios: [
    { q: "Cuenta los escalones de casa o del portal.", sol: nota("contad en voz alta a la vez que subís.") },
    { q: "Enseña con los dedos el 3, el 7 y el 10.", sol: nota("fijaos en si usa las dos manos a partir del 6.") },
    { q: "Pon 5 pinzas en el borde de un plato.", sol: nota("luego pedid que quite una y cuente cuántas quedan.") },
    { q: "Busca números en la calle: portales, matrículas, precios.", sol: nota("que los lea en voz alta.") },
    { q: "Ordena tarjetas del 1 al 10.", sol: nota("haced tarjetas con cartulina y escondedlas antes.") },
    { q: "Di qué número va antes del 4 y después del 4.", sol: nota("antes el 3, después el 5. Probad con otros números.") },
  ],
  quiz: [
    { q: "¿Cuántos dedos tienes en las dos manos?", o: ["5", "10", "8"], a: 1, e: "Diez." },
    { q: "Después del 4 va el…", o: ["5", "3", "7"], a: 0, e: "El 5." },
    { q: "Antes del 10 va el…", o: ["8", "9", "1"], a: 1, e: "El 9." },
    { q: "Para contar, toco cada cosa…", o: ["una vez", "dos veces", "nunca"], a: 0, e: "Una vez." },
    { q: "¿Cuál es más grande?", o: ["2", "7", "4"], a: 1, e: "El 7." },
    { q: "Cinco dedos de una mano y dos de otra son…", o: ["7", "5", "3"], a: 0, e: "Siete." },
  ],
  examen: [
    { q: "Contamos 1, 2, 3, 4, 5, 6. ¿Cuántas hay?", o: ["6", "1", "5"], a: 0, e: "El último número: 6." },
    { q: "¿Qué número va entre el 6 y el 8?", o: ["7", "9", "5"], a: 0, e: "El 7." },
    { q: "El número más grande hasta ahora es el…", o: ["10", "1", "5"], a: 0, e: "El 10." },
  ],
  feynman: ["Cómo cuento uno a uno", "Cómo enseño un número con los dedos", "Qué número va antes y después"],
  mapa: mapa("NÚMEROS HASTA EL 10", "var(--pen)", [
    ["Contar", "uno a uno, sin saltar", "var(--red)"],
    ["Con los dedos", "dos manos = 10", "var(--inf)"],
    ["Antes y después", "5 · 6 · 7", "var(--leaf)"],
    ["En mi vida", "edad · casa · reloj", "var(--pen)"],
  ], 220),
  tarjetas: [
    ["¿Cuántos dedos en las dos manos?", "10"],
    ["Después del 7…", "8"],
    ["Antes del 5…", "4"],
    ["¿Cómo cuento?", "Tocando cada cosa una vez"],
    ["El último número que digo es…", "Cuántas hay"],
    ["¿Cuántos años tienes?", "5"],
  ],
  familias: [
    "Contad todo lo que hagáis juntos: escalones, cucharas, botones.",
    "Jugad a juegos de dados y que cuente los puntos.",
    "Pedidle que ponga la mesa contando platos y cubiertos.",
    "Cantad canciones de números y contad con los dedos.",
  ],
  profesores: PROF(DE, "Diálogo corporal con el entorno y exploración creativa: cuantificación, conteo hasta 10 con correspondencia uno a uno, grafía de los números y orden de la serie", ["Rutina de contar a los niños presentes en la asamblea.", "Cajas con tapas numeradas para meter esa cantidad de objetos.", "Recta numérica en el suelo para saltar antes y después."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
