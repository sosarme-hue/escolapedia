// Infantil 4 años · Descubrimiento y exploración del entorno: series y patrones.
const { marco, ic, t, forma, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

// Serie de dibujos: lista de nombres de icono ("?" = hueco).
const serie = (items, y = 90, s = 0.9, sep = 36) => items.map((d, i) => {
  const x = 130 + (i - (items.length - 1) / 2) * sep;
  return d === "?" ? `<rect x="${x - 16}" y="${y - 16}" width="32" height="32" rx="6" fill="var(--card)" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="5 3"/>${t(x, y + 8, "?", { color: "var(--red)", size: 22 })}` : ic(d, x, y, s);
}).join("");
const bolas = (cols, y = 90, r = 13, sep = 34) => cols.map((c, i) => `<circle cx="${130 + (i - (cols.length - 1) / 2) * sep}" cy="${y}" r="${r}" fill="${c}"/>`).join("");
const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", M = "var(--sun)";

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "4-anos",
  titulo: "Series y patrones",
  minutos: 15,
  objetivos: ["Descubrir qué se repite en una serie", "Continuar una serie de dos elementos", "Inventar una serie propia"],
  claves: ["serie", "patrón", "se repite", "¿qué va ahora?"],
  pregunta: {
    texto: "Rojo, azul, rojo, azul, rojo… ¿Qué color va ahora?",
    respuesta: "Va el <mark>azul</mark>. Se repite rojo, azul todo el rato: eso es una <mark>serie</mark>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una serie?</h3><p>Una <mark>serie</mark> es una fila de cosas que <b>se repiten</b> siempre igual.</p><p>Mira el collar: rojo, azul, rojo, azul. ¡Sabemos qué viene después! ¡Vamos a seguirla juntos!</p>`,
      svg: marco("Un collar de bolas rojas y azules alternas", `<path d="M30 70 Q130 150 230 70" stroke="var(--muted)" stroke-width="2" fill="none"/>${[R, A, R, A, R, A, R].map((c, i) => { const x = 40 + i * 30, y = 70 + Math.sin((i / 6) * Math.PI) * 38; return `<circle cx="${x}" cy="${y.toFixed(1)}" r="12" fill="${c}"/>`; }).join("")}${t(130, 160, "rojo, azul, rojo, azul…", { color: "var(--ink)", size: 16 })}`),
    },
    {
      html: `<h3>Descubre lo que se repite</h3><p>Para seguir una serie, buscamos el <mark>trocito que se repite</mark>. Ese trocito es el <b>patrón</b>.</p><p>Aquí el patrón es: sol, luna. Sol, luna. Sol, luna. Si encuentro el patrón, sé lo que viene.</p>`,
      svg: marco("Serie sol, luna repetida tres veces con el patrón rodeado", `<rect x="34" y="62" width="68" height="56" rx="10" fill="none" stroke="var(--inf)" stroke-width="3"/>${serie(["sol", "luna", "sol", "luna", "sol", "luna"], 90, 0.9, 34)}${t(68, 146, "patrón", { color: "var(--inf)", size: 16 })}`),
    },
    {
      html: `<h3>¿Qué va ahora?</h3><p>Leemos la serie en voz alta: «manzana, plátano, manzana, plátano, manzana…».</p><p>¿Qué toca? ¡El <mark>plátano</mark>! Decirlo en voz alta ayuda mucho. Ahora prueba tú con otra serie.</p>`,
      svg: marco("Serie manzana, plátano con un hueco al final", `${serie(["manzana", "platano", "manzana", "platano", "manzana", "?"], 86, 0.85, 36)}${t(130, 150, "¿qué va ahora?", { color: "var(--red)", size: 18 })}`),
    },
    {
      html: `<h3>Series con formas y tamaños</h3><p>Las series pueden ser de <mark>formas</mark>: círculo, cuadrado, círculo, cuadrado.</p><p>O de <mark>tamaños</mark>: grande, pequeño, grande, pequeño. ¡Y hasta de tres cosas! Mira bien qué se repite en cada fila.</p>`,
      svg: marco("Una serie de círculo y cuadrado y otra de estrella grande y pequeña", `${[0, 1, 2, 3, 4, 5].map((i) => forma(i % 2 ? "cuadrado" : "circulo", 40 + i * 36, 56, 13, i % 2 ? A : R)).join("")}${[0, 1, 2, 3, 4, 5].map((i) => ic("estrella", 40 + i * 36, 126, i % 2 ? 0.55 : 1)).join("")}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Hay series en la vida: <mark>día y noche</mark>, en las rayas de la cebra, en los botones o en las baldosas.</p><p>Descubrirlas nos enseña a pensar y a adivinar lo que viene.</p>`,
      svg: marco("Día y noche, una cebra y baldosas que se repiten", `${ic("sol", 50, 60, 1.2)}${ic("luna", 100, 60, 1.2)}${ic("sol", 150, 60, 1.2)}${ic("luna", 200, 60, 1.2)}${ic("cebra", 70, 134, 1.5)}${[0, 1, 2, 3].map((i) => `<rect x="${130 + i * 26}" y="116" width="24" height="24" fill="${i % 2 ? "var(--card)" : "var(--ink)"}" stroke="var(--line)"/>`).join("")}`),
    },
    {
      html: `<h3>Juego: el tren de colores</h3><p>Con piezas de construcción, haz un tren: <mark>verde, amarillo, verde, amarillo</mark>…</p><p>Ahora inventa tú una serie y un adulto la sigue. ¿Lo consigue? ¡Las series son un juego de detectives!</p>`,
      svg: marco("Un tren de bloques verdes y amarillos alternos", `${[V, M, V, M, V, M].map((c, i) => `<rect x="${24 + i * 36}" y="78" width="32" height="32" rx="4" fill="${c}"/><circle cx="${32 + i * 36}" cy="116" r="5" fill="var(--ink)"/><circle cx="${48 + i * 36}" cy="116" r="5" fill="var(--ink)"/>`).join("")}${t(130, 156, "verde, amarillo…", { color: "var(--leaf)", size: 16 })}`),
    },
  ],
  figura: { titulo: "Seguimos la serie", svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Rojo, azul, rojo, azul, rojo y un hueco para el azul"><rect width="640" height="260" rx="16" fill="var(--paper)"/>${[R, A, R, A, R].map((c, i) => `<circle cx="${80 + i * 100}" cy="110" r="36" fill="${c}"/>`).join("")}<rect x="544" y="74" width="72" height="72" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="4" stroke-dasharray="10 6"/><text x="580" y="128" text-anchor="middle" font-size="48" font-weight="800" fill="var(--pen)" font-family="Baloo 2, sans-serif">?</text><text x="320" y="220" text-anchor="middle" font-size="26" font-weight="800" fill="var(--ink)" font-family="Baloo 2, sans-serif">rojo, azul, rojo, azul, rojo… ¡azul!</text></svg>` },
  video: vid("dJCBqmaVlpY", "Razonamiento lógico para niños de preescolar: series", "Patico De Hule", 8189659, "series y patrones para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Palmada, pisotón, palmada, pisotón…", pasos: ["Hacemos la serie con el cuerpo.", "Decimos en voz alta cada paso.", "¿Qué toca después de palmada?"], resultado: "pisotón: el patrón es palmada, pisotón." },
    { enunciado: "Ensartamos macarrones de dos colores.", pasos: ["Uno rojo, uno blanco.", "Otra vez: rojo, blanco.", "Seguimos hasta hacer un collar."], resultado: "un collar con una serie de dos colores." },
  ],
  errores: [
    "Poner lo que más gusta en vez de lo que toca: hay que mirar el patrón.",
    "Mirar solo el último elemento: hay que ver el trocito que se repite entero.",
    "Cambiar el patrón a mitad de la serie.",
  ],
  ejercicios: [
    { q: "Continúa: tenedor, cuchara, tenedor, cuchara…", sol: "Tenedor. Nota para la familia: hacedlo con cubiertos de verdad." },
    { q: "Haz una serie de palmadas: fuerte, flojo, fuerte, flojo.", sol: "Sirve para practicar con el oído." },
    { q: "Colorea bolas: roja, amarilla, roja, amarilla…", sol: "Revisad que no se rompa la serie." },
    { q: "Pon calcetines en fila: uno de papá, uno tuyo…", sol: "Grande, pequeño, grande, pequeño." },
    { q: "Inventa una serie con dos juguetes.", sol: "Pedidle que la explique: «coche, pelota…»." },
    { q: "Busca una serie en tu ropa o en el suelo.", sol: "Rayas de una camiseta, baldosas…" },
  ],
  quiz: [
    { q: "Rojo, azul, rojo, azul… ¿qué va?", o: ["Verde", "Rojo", "Amarillo"], a: 1, e: "Después de azul va rojo." },
    { q: "Sol, luna, sol, luna… ¿qué va?", o: ["Estrella", "Nube", "Sol"], a: 2, e: "Después de luna va sol." },
    { q: "Una serie es algo que…", o: ["se repite", "se rompe", "se come"], a: 0, e: "Se repite siempre igual." },
    { q: "Grande, pequeño, grande… ¿qué va?", o: ["Grande", "Nada", "Pequeño"], a: 2, e: "Después de grande va pequeño." },
    { q: "Círculo, cuadrado, círculo… ¿qué va?", o: ["Cuadrado", "Triángulo", "Círculo"], a: 0, e: "Se repite círculo, cuadrado." },
    { q: "El trocito que se repite se llama…", o: ["pelota", "patrón", "número"], a: 1, e: "Es el patrón." },
  ],
  examen: [
    { q: "Palmada, salto, palmada… ¿qué va?", o: ["Palmada", "Salto", "Grito"], a: 1, e: "Toca el salto." },
    { q: "Día y noche se repiten. ¿Es una serie?", o: ["Sí", "No", "A veces"], a: 0, e: "Siempre: día, noche, día, noche." },
    { q: "Verde, amarillo, verde, amarillo… ¿qué va?", o: ["Amarillo", "Rojo", "Verde"], a: 2, e: "Después de amarillo, verde." },
  ],
  feynman: ["Qué es una serie", "Cómo encuentro el patrón", "Cómo sé qué va después"],
  mapa: mapa("SERIES", "var(--inf)", [
    ["Serie", "algo que se repite", "var(--red)"],
    ["Patrón", "el trocito igual", "var(--pen)"],
    ["Seguir", "decirla en voz alta", "var(--leaf)"],
    ["De qué", "colores, formas, sonidos", "var(--water)"],
  ], 220),
  tarjetas: [
    ["Rojo, azul, rojo… ¿qué va?", "Azul"],
    ["Sol, luna, sol… ¿qué va?", "Luna"],
    ["¿Qué es una serie?", "Algo que se repite"],
    ["¿Qué es el patrón?", "El trocito que se repite"],
    ["Grande, pequeño, grande…", "Pequeño"],
    ["Una serie de la naturaleza", "Día y noche"],
  ],
  familias: [
    "Haced collares de macarrones o cuentas siguiendo un patrón de colores.",
    "Inventad series de sonidos con palmadas y pisotones.",
    "Al poner la mesa, alternad plato y vaso para crear una serie.",
    "Buscad series en las aceras, las vallas y la ropa.",
  ],
  profesores: PROF("Descubrimiento y exploración del entorno: patrones; identificación, continuación y creación de series con dos o tres elementos", ["Ensartables y regletas por colores.", "Series corporales con ritmo.", "Tarjetas de series para completar en la alfombra."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
