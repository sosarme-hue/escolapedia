// Infantil 4 años · Descubrimiento y exploración del entorno: formas.
const { marco, dibujos, ic, t, forma, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

const una = (label, tipo, c, nombre, cosas) => marco(label, `${forma(tipo, 72, 82, 40, c)}${t(72, 160, nombre, { color: c, size: 22, max: 120 })}${cosas.map(([d, y], i) => ic(d, 190, 44 + i * 52, 1.1)).join("")}`);

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "4-anos",
  titulo: "Formas: círculo, cuadrado, triángulo y rectángulo",
  minutos: 15,
  objetivos: ["Reconocer el círculo, el cuadrado, el triángulo y el rectángulo", "Contar lados y esquinas", "Buscar formas en las cosas de alrededor"],
  claves: ["círculo", "cuadrado", "triángulo", "rectángulo", "lado"],
  pregunta: {
    texto: "¿Qué forma tienen una rueda, una ventana y un trozo de pizza?",
    respuesta: "La rueda es un <mark>círculo</mark>. La ventana suele ser un <mark>cuadrado</mark> o un <mark>rectángulo</mark>. El trozo de pizza parece un <mark>triángulo</mark>.",
  },
  bloques: [
    {
      html: `<h3>El círculo</h3><p>El <mark>círculo</mark> es redondo. No tiene esquinas ni puntas.</p><p>Rueda muy bien. Hay círculos en las pelotas, las ruedas, los platos y el sol. Dibuja un círculo con el dedo en el aire.</p>`,
      svg: una("Un círculo rojo, una pelota y una rueda", "circulo", "var(--red)", "círculo", [["pelota"], ["rueda"], ["sol"]]),
    },
    {
      html: `<h3>El cuadrado</h3><p>El <mark>cuadrado</mark> tiene <b>4 lados iguales</b> y 4 esquinas.</p><p>Hay cuadrados en los dados, en algunas ventanas y en las baldosas del suelo. Cuenta sus lados tocándolos con el dedo: uno, dos, tres y cuatro.</p>`,
      svg: marco("Un cuadrado azul con sus cuatro lados numerados", `${forma("cuadrado", 100, 90, 50, "var(--pen)")}${t(100, 32, "1", { color: "var(--red)", size: 20 })}${t(166, 96, "2", { color: "var(--red)", size: 20 })}${t(100, 164, "3", { color: "var(--red)", size: 20 })}${t(34, 96, "4", { color: "var(--red)", size: 20 })}${t(214, 150, "4 lados", { color: "var(--pen)", size: 18, max: 80 })}`),
    },
    {
      html: `<h3>El triángulo</h3><p>El <mark>triángulo</mark> tiene <b>3 lados</b> y 3 puntas.</p><p>Parece un tejado, un trozo de pizza o una montaña. ¡Pica en la punta! Cuenta sus tres puntas con el dedo.</p>`,
      svg: marco("Un triángulo verde con tres lados y un tejado de casa", `${forma("triangulo", 80, 92, 50, "var(--leaf)")}${t(80, 172, "3 lados", { color: "var(--leaf)", size: 18 })}${ic("casa", 200, 92, 2)}`),
    },
    {
      html: `<h3>El rectángulo</h3><p>El <mark>rectángulo</mark> tiene 4 lados, como el cuadrado, pero <b>dos son largos</b> y dos son cortos.</p><p>Es como una puerta, un libro o la pizarra. Pasa el dedo por los cuatro lados.</p>`,
      svg: marco("Un rectángulo amarillo con dos lados largos y dos cortos, y una pizarra", `${forma("rectangulo", 90, 80, 40, "var(--sun)")}${t(90, 34, "largo", { color: "var(--inf)", size: 16 })}${t(90, 132, "largo", { color: "var(--inf)", size: 16 })}${ic("pizarra", 210, 86, 1.6)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con las formas <mark>construimos cosas</mark>: una casa con un cuadrado y un triángulo, un coche con un rectángulo y dos círculos.</p><p>¡Las formas están por todas partes! ¡Prueba a construir tú algo nuevo!</p>`,
      svg: marco("Una casa hecha con cuadrado y triángulo, y un coche con rectángulo y dos círculos", `${forma("cuadrado", 70, 120, 32, "var(--pen)")}${forma("triangulo", 70, 66, 36, "var(--red)")}<rect x="140" y="90" width="96" height="40" rx="6" fill="var(--sun)"/>${forma("circulo", 162, 136, 14, "var(--ink)")}${forma("circulo", 214, 136, 14, "var(--ink)")}`),
    },
    {
      html: `<h3>Juego: la caza de formas</h3><p>Pasea por casa y busca <mark>formas</mark>. ¿Qué es redondo? ¿Qué tiene 3 puntas?</p><p>Di el nombre de cada forma que encuentres. ¡Gana quien encuentre más! ¡Gana quien encuentre más formas!</p>`,
      svg: dibujos("Reloj redondo, libro rectangular, mesa y pelota", [["reloj", "círculo", "var(--red)"], ["libro", "rectángulo", "var(--sun)"], ["pelota", "círculo", "var(--red)"]], { titulo: "¿Qué forma tiene?" }),
    },
  ],
  figura: { titulo: "Las cuatro formas", svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Círculo, cuadrado, triángulo y rectángulo"><rect width="640" height="260" rx="16" fill="var(--paper)"/>${forma("circulo", 90, 110, 52, "var(--red)")}${forma("cuadrado", 245, 110, 50, "var(--pen)")}${forma("triangulo", 395, 116, 56, "var(--leaf)")}${forma("rectangulo", 545, 110, 38, "var(--sun)")}${[["círculo", 90, "var(--red)"], ["cuadrado", 245, "var(--pen)"], ["triángulo", 395, "var(--leaf)"], ["rectángulo", 545, "var(--sun)"]].map(([p, x, c]) => `<text x="${x}" y="222" text-anchor="middle" font-size="26" font-weight="800" fill="${c}" font-family="Baloo 2, sans-serif">${p}</text>`).join("")}</svg>` },
  video: vid("bcatDhOtuMg", "Las formas", "Luli Pampín", 152124764, "círculo cuadrado triángulo para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué forma es? Contamos sus lados.", pasos: ["Pasamos el dedo por cada lado.", "Contamos: 1, 2, 3.", "Tiene 3 lados y 3 puntas."], resultado: "es un triángulo." },
    { enunciado: "Hacemos un robot con formas de papel.", pasos: ["Un cuadrado para la cabeza.", "Un rectángulo para el cuerpo.", "Dos círculos para los ojos."], resultado: "un robot hecho de formas." },
  ],
  errores: [
    "Llamar cuadrado a cualquier forma de 4 lados: si dos lados son más largos, es un rectángulo.",
    "Pensar que un triángulo girado ya no es triángulo: sigue teniendo 3 lados.",
    "Confundir el círculo con el óvalo: el círculo es igual de redondo por todas partes.",
  ],
  ejercicios: [
    { q: "Busca en casa algo con forma de círculo.", sol: "Nota para la familia: un plato, un reloj, una tapa." },
    { q: "Dibuja un triángulo y cuenta sus lados.", sol: "3 lados." },
    { q: "Pasa el dedo por los lados de un libro y cuéntalos.", sol: "4 lados: es un rectángulo." },
    { q: "Haz una casa con un cuadrado y un triángulo de papel.", sol: "El triángulo es el tejado." },
    { q: "Rueda una pelota y luego intenta rodar un dado.", sol: "La pelota rueda porque es redonda; el dado no." },
    { q: "Forma un círculo con tu familia dándoos la mano.", sol: "¡Un corro es un círculo!" },
  ],
  quiz: [
    { q: "¿Qué forma tiene una rueda?", o: ["Triángulo", "Círculo", "Cuadrado"], a: 1, e: "Las ruedas son redondas." },
    { q: "¿Cuántos lados tiene un triángulo?", o: ["4", "Ninguno", "3"], a: 2, e: "Tres lados y tres puntas." },
    { q: "El cuadrado tiene…", o: ["4 lados iguales", "3 lados", "ningún lado"], a: 0, e: "Cuatro lados iguales." },
    { q: "Una puerta parece un…", o: ["círculo", "triángulo", "rectángulo"], a: 2, e: "Dos lados largos y dos cortos." },
    { q: "¿Qué forma no tiene esquinas?", o: ["El círculo", "El cuadrado", "El triángulo"], a: 0, e: "El círculo es redondo." },
    { q: "Un tejado parece un…", o: ["círculo", "triángulo", "rectángulo"], a: 1, e: "Tiene punta arriba." },
  ],
  examen: [
    { q: "El sol se dibuja con un…", o: ["cuadrado", "círculo", "triángulo"], a: 1, e: "Es redondo." },
    { q: "Un dado tiene caras con forma de…", o: ["cuadrado", "triángulo", "círculo"], a: 0, e: "Cada cara es un cuadrado." },
    { q: "Forma con 2 lados largos y 2 cortos:", o: ["cuadrado", "círculo", "rectángulo"], a: 2, e: "Es el rectángulo." },
  ],
  feynman: ["Las cuatro formas", "Cuántos lados tiene cada una", "Dónde las vemos en casa"],
  mapa: mapa("LAS FORMAS", "var(--inf)", [
    ["Círculo", "redondo, sin esquinas", "var(--red)"],
    ["Cuadrado", "4 lados iguales", "var(--pen)"],
    ["Triángulo", "3 lados y 3 puntas", "var(--leaf)"],
    ["Rectángulo", "2 largos y 2 cortos", "var(--inf)"],
  ], 220),
  tarjetas: [
    ["Forma de una rueda", "Círculo"],
    ["Lados del triángulo", "3"],
    ["Lados del cuadrado", "4 iguales"],
    ["Forma de una puerta", "Rectángulo"],
    ["Forma sin esquinas", "Círculo"],
    ["Forma de un tejado", "Triángulo"],
  ],
  familias: [
    "Recortad formas de cartulina y haced dibujos juntando piezas.",
    "Buscad formas en el paseo: señales, ventanas, ruedas.",
    "Usad galletas o sándwiches cortados en triángulos y cuadrados.",
    "Jugad a adivinar la forma tocando con los ojos cerrados.",
  ],
  profesores: PROF("Descubrimiento y exploración del entorno: formas planas básicas; identificación, denominación y búsqueda en el entorno", ["Bloques lógicos de Dienes.", "Caza de formas por el colegio con fotos.", "Composiciones tipo tangram sencillo."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
