// Infantil 4 años · Descubrimiento y exploración del entorno: más, menos e igual.
const { marco, ic, t, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

// Un plato o caja con «n» dibujos en dos filas.
const grupo = (d, n, cx, cy, s = 0.8, sep = 30) => [...Array(n)].map((_, i) => {
  const porFila = n <= 3 ? n : Math.ceil(n / 2), f = Math.floor(i / porFila), k = i % porFila, enFila = f ? n - porFila : porFila;
  return ic(d, cx + (k - (enFila - 1) / 2) * sep, cy + (n > 3 ? (f ? 18 : -18) : 0), s);
}).join("");
const caja = (cx, cy, w = 100, h = 90) => `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="3"/>`;
const dos = (label, d, a, b, la, lb, ca = "var(--red)", cb = "var(--pen)", s = 0.8, sep = 30) => marco(label, `${caja(68, 78)}${caja(192, 78)}${grupo(d, a, 68, 78, s, sep)}${grupo(d, b, 192, 78, s, sep)}${t(68, 150, la, { color: ca, size: 20, max: 110 })}${t(192, 150, lb, { color: cb, size: 20, max: 110 })}`);

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "4-anos",
  titulo: "Más, menos e igual",
  minutos: 15,
  objetivos: ["Comparar dos grupos y decir dónde hay más", "Decir dónde hay menos", "Reconocer cuando hay igual"],
  claves: ["más", "menos", "igual", "muchos y pocos"],
  pregunta: {
    texto: "Tú tienes 2 galletas y tu hermano tiene 5. ¿Quién tiene más?",
    respuesta: "Tu hermano tiene <mark>más</mark>: 5 es más que 2. Tú tienes <mark>menos</mark>. Si os dieran 3 a cada uno, tendríais <mark>igual</mark>.",
  },
  bloques: [
    {
      html: `<h3>Muchos y pocos</h3><p>Mira las dos cajas. En una hay <mark>muchas</mark> pelotas. En la otra hay <mark>pocas</mark>.</p><p>A veces se ve a simple vista, sin contar. ¿Dónde hay muchas? Pero si son parecidos, hay que contar.</p>`,
      svg: dos("Una caja con seis pelotas y otra con una", "pelota", 6, 1, "muchas", "pocas"),
    },
    {
      html: `<h3>¿Dónde hay más?</h3><p>Para saber dónde hay <mark>más</mark>, contamos los dos grupos.</p><p>Aquí hay 4 manzanas y aquí 2. El 4 es más que el 2. ¡En la primera caja hay más! Dilo alto y claro: «¡aquí hay más!».</p>`,
      svg: dos("Cuatro manzanas tienen más que dos", "manzana", 4, 2, "4: más", "2"),
    },
    {
      html: `<h3>¿Dónde hay menos?</h3><p><mark>Menos</mark> es lo contrario de más. El grupo pequeño tiene menos.</p><p>Aquí hay 5 peces y aquí 3. Tres es <b>menos</b> que cinco. ¿Cuántos peces faltan para que haya cinco?</p>`,
      svg: dos("Cinco peces y tres peces: tres es menos", "pez", 5, 3, "5", "3: menos", "var(--ink)", "var(--water)", 0.6, 30),
    },
    {
      html: `<h3>Igual</h3><p>Si los dos grupos tienen los mismos, hay <mark>igual</mark>.</p><p>Podemos unir cada coche con uno del otro lado. Si no sobra ninguno, ¡hay igual! Así lo sabemos sin contar.</p>`,
      svg: marco("Tres coches arriba y tres abajo unidos por rayas: hay igual", `${[0, 1, 2].map((i) => `${ic("coche", 70 + i * 60, 50, 1.1)}${ic("coche", 70 + i * 60, 130, 1.1)}<path d="M${70 + i * 60} 66 V114" stroke="var(--leaf)" stroke-width="3" stroke-dasharray="5 4"/>`).join("")}${t(232, 96, "=", { color: "var(--leaf)", size: 34 })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Comparar nos ayuda a <mark>repartir</mark> bien. Si todos tienen igual, nadie se enfada.</p><p>También sabemos si faltan sillas o si sobran cucharas al poner la mesa. Así todos tenemos lo mismo.</p>`,
      svg: dos("Dos platos con tres galletas cada uno: igual para los dos", "galleta", 3, 3, "3", "3", "var(--leaf)", "var(--leaf)", 0.8, 30).replace("</g></svg>", `${t(130, 84, "=", { color: "var(--leaf)", size: 30 })}</g></svg>`),
    },
    {
      html: `<h3>Juego: ¿más o menos?</h3><p>Coge un puñado de pinzas con cada mano. Ponlas en dos montones.</p><p>¿Qué montón tiene <mark>más</mark>? ¿Cuál tiene <mark>menos</mark>? ¿Y si tienen <mark>igual</mark>? ¡Inventa tú más montones!</p>`,
      svg: marco("Dos manos con piezas y la pregunta más, menos o igual", `${ic("mano", 60, 70, 2)}${ic("mano", 200, 70, 2)}${t(130, 150, "¿más, menos o igual?", { color: "var(--pen)", size: 18 })}`),
    },
  ],
  figura: { titulo: "Más, menos e igual", svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Cinco estrellas: más; dos estrellas: menos; tres y tres: igual"><rect width="640" height="260" rx="16" fill="var(--paper)"/>${[[110, 5, "más", "var(--red)"], [320, 2, "menos", "var(--pen)"], [530, 3, "igual", "var(--leaf)"]].map(([x, n, p, c]) => `<rect x="${x - 90}" y="30" width="180" height="140" rx="16" fill="var(--card)" stroke="${c}" stroke-width="3"/>${grupo("estrella", n, x, 100, 1.1, 46)}<text x="${x}" y="218" text-anchor="middle" font-size="32" font-weight="800" fill="${c}" font-family="Baloo 2, sans-serif">${p}</text>`).join("")}</svg>` },
  video: vid("8wvvsCbMNjw", "Mucho y poco. Canción educativa para niños", "Lotty Friends - Canciones Infantiles", 1036392, "mucho y poco para niños infantil"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Mamá tiene 3 botones y yo tengo 1.", pasos: ["Contamos los de mamá: 1, 2, 3.", "Contamos los míos: 1.", "3 es más que 1."], resultado: "mamá tiene más; yo tengo menos." },
    { enunciado: "Hay 4 niños y 4 sillas.", pasos: ["Cada niño se sienta en una silla.", "No sobra ninguna silla.", "No queda ningún niño de pie."], resultado: "hay igual: 4 y 4." },
  ],
  errores: [
    "Pensar que hay más donde las cosas ocupan más sitio: hay que contar.",
    "Confundir más y menos: más es el grupo grande; menos, el pequeño.",
    "Olvidar que «igual» también es una respuesta.",
  ],
  ejercicios: [
    { q: "Haz un montón con muchas pinzas y otro con pocas.", sol: "Nota para la familia: preguntad dónde hay muchas." },
    { q: "Pon 2 coches en una caja y 5 en otra. ¿Dónde hay más?", sol: "En la de 5." },
    { q: "Reparte 6 galletas para que dos personas tengan igual.", sol: "3 y 3." },
    { q: "Dibuja un árbol con más manzanas que otro.", sol: "Contad juntos las manzanas de cada árbol." },
    { q: "Une con rayas cada niño con una pelota. ¿Sobran pelotas?", sol: "Si sobran, hay más pelotas que niños." },
    { q: "¿Quién tiene más años: tú o tu mamá?", sol: "Mamá. Que diga cuántos tiene él o ella." },
  ],
  quiz: [
    { q: "¿Qué es más: 5 o 2?", o: ["2", "5", "Igual"], a: 1, e: "5 es más que 2." },
    { q: "¿Qué es menos: 1 o 4?", o: ["4", "Igual", "1"], a: 2, e: "1 es menos que 4." },
    { q: "3 coches y 3 coches. Hay…", o: ["igual", "más", "menos"], a: 0, e: "Los dos grupos tienen 3." },
    { q: "Lo contrario de más es…", o: ["grande", "arriba", "menos"], a: 2, e: "Más y menos son contrarios." },
    { q: "Muchas pelotas son…", o: ["más que pocas", "menos que pocas", "igual"], a: 0, e: "Muchas son más." },
    { q: "Para saber dónde hay más…", o: ["cerramos los ojos", "contamos", "adivinamos"], a: 1, e: "Contar es lo seguro." },
  ],
  examen: [
    { q: "Ana tiene 4 caramelos y Pablo 6. ¿Quién tiene más?", o: ["Ana", "Pablo", "Igual"], a: 1, e: "6 es más que 4." },
    { q: "2 y 2:", o: ["igual", "más", "menos"], a: 0, e: "Tienen los mismos." },
    { q: "Si sobra una silla, hay…", o: ["menos sillas", "igual", "más sillas que niños"], a: 2, e: "Sobra una: hay más sillas." },
  ],
  feynman: ["Qué significa más", "Qué significa menos", "Cuándo hay igual"],
  mapa: mapa("COMPARAR", "var(--inf)", [
    ["Más", "el grupo grande", "var(--red)"],
    ["Menos", "el grupo pequeño", "var(--pen)"],
    ["Igual", "los mismos", "var(--leaf)"],
    ["Cómo", "contar y unir", "var(--water)"],
  ], 220),
  tarjetas: [
    ["¿Qué es más: 3 o 5?", "5"],
    ["¿Qué es menos: 2 o 6?", "2"],
    ["4 y 4 son…", "Igual"],
    ["Lo contrario de más", "Menos"],
    ["¿Cómo sé dónde hay más?", "Contando"],
    ["Si no sobra nada al unir…", "Hay igual"],
  ],
  familias: [
    "Al servir la comida, preguntad «¿quién tiene más patatas?».",
    "Jugad a repartir cromos o fichas a partes iguales.",
    "Comparad cuántos coches rojos y azules veis por la calle.",
    "Usad las palabras más, menos e igual en voz alta cada día.",
  ],
  profesores: PROF("Descubrimiento y exploración del entorno: cuantificadores básicos (muchos, pocos, más, menos, igual) y comparación de colecciones", ["Correspondencia uno a uno con tapones y vasos.", "Balanza de cubos para comparar.", "Juego de reparto equitativo en el rincón de la tienda."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
