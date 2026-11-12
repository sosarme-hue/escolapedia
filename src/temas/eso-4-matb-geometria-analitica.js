// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

// Cuadrícula de -1..9 en x y -1..6 en y, unidad k, origen (ox, oy).
const ox = 30, oy = 150, k = 22;
const P = (x, y) => [ox + x * k, oy - y * k];
const rejilla = `<g stroke="var(--line)" stroke-width="1">${[...Array(10)].map((_, i) => `<path d="M${ox + i * k} 8 V 172"/>`).join("")}${[...Array(7)].map((_, i) => `<path d="M8 ${oy - i * k} H 252"/>`).join("")}</g><path d="M8 ${oy} H 252 M${ox} 8 V 172" stroke="var(--muted)" stroke-width="2"/>`;

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Geometría analítica",
  minutos: 45,
  objetivos: ["Operar con vectores: coordenadas, módulo, suma y producto por un número", "Calcular el punto medio y la distancia entre dos puntos", "Escribir la ecuación de una recta y estudiar si dos rectas son paralelas o se cortan"],
  claves: ["vector", "módulo", "punto medio", "pendiente", "ecuación de la recta", "paralelas"],
  pregunta: {
    texto: "En un videojuego, tu personaje está en (1, 2) y el tesoro en (7, 5). ¿Qué distancia hay en línea recta y qué dirección debes tomar?",
    respuesta: "La dirección es el <mark>vector</mark> (7 − 1, 5 − 2) = (6, 3) y la distancia, su módulo: √(6² + 3²) = √45 ≈ <b>6,7 unidades</b>. La geometría analítica convierte los dibujos en números, y así es como los ordenadores mueven todo lo que ves en pantalla.",
  },
  bloques: [
    {
      html: `<h3>Vectores</h3><p>Un <b>vector</b> es una flecha con <mark>módulo</mark> (longitud), <mark>dirección</mark> y <mark>sentido</mark>. El vector de A a B se calcula <b>restando coordenadas</b>: AB = (x₂ − x₁, y₂ − y₁). Su módulo es:</p><div class="formula"><span>|v| = √(v₁² + v₂²)</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Vector desde A (1, 2) hasta B (7, 5) con componentes 6 y 3">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><defs>${flecha("fv", "var(--red)")}</defs>${rejilla}
        <path d="M${P(1, 2)} H ${P(7, 2)[0]} V ${P(7, 5)[1]}" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4"/>
        <path d="M${P(1, 2)} L ${P(7, 5)}" stroke="var(--red)" stroke-width="3.5" marker-end="url(#fv)"/>
        <circle cx="${P(1, 2)[0]}" cy="${P(1, 2)[1]}" r="5" fill="var(--ink)"/>
        <g ${F} font-size="12" font-weight="700"><text x="${P(1, 2)[0] - 12}" y="${P(1, 2)[1] + 18}" fill="var(--ink)">A(1, 2)</text><text x="${P(7, 5)[0] - 10}" y="${P(7, 5)[1] - 8}" fill="var(--ink)">B(7, 5)</text>
        <text x="${P(4, 2)[0]}" y="${P(4, 2)[1] + 16}" text-anchor="middle" fill="var(--pen)">6</text><text x="${P(7, 3.5)[0] + 8}" y="${P(7, 3.5)[1]}" fill="var(--pen)">3</text></g></svg>`,
    },
    {
      html: `<h3>Operaciones con vectores</h3><p>Para <b>sumar</b> vectores se suman coordenadas: (2, 1) + (1, 3) = (3, 4). Gráficamente se pone <mark>uno a continuación del otro</mark>. Para <b>multiplicar por un número</b>, se multiplican las dos coordenadas: 2 · (1, 3) = (2, 6). Si el número es negativo, el vector cambia de sentido.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Suma de vectores: u igual a (2, 1) seguido de v igual a (1, 3) da u más v igual a (3, 4)">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><defs>${flecha("fa", "var(--pen)")}${flecha("fb", "var(--leaf)")}${flecha("fc", "var(--red)")}</defs>${rejilla}
        <path d="M${P(1, 1)} L ${P(3, 2)}" stroke="var(--pen)" stroke-width="3.5" marker-end="url(#fa)"/>
        <path d="M${P(3, 2)} L ${P(4, 5)}" stroke="var(--leaf)" stroke-width="3.5" marker-end="url(#fb)"/>
        <path d="M${P(1, 1)} L ${P(4, 5)}" stroke="var(--red)" stroke-width="3.5" marker-end="url(#fc)"/>
        <g ${F} font-size="13" font-weight="700"><text x="${P(2.2, 1)[0]}" y="${P(2.2, 1)[1] + 12}" fill="var(--pen)">u</text><text x="${P(3.7, 3.2)[0] + 6}" y="${P(3.7, 3.2)[1]}" fill="var(--leaf)">v</text><text x="${P(1.6, 3.4)[0] - 10}" y="${P(1.6, 3.4)[1]}" fill="var(--red)">u + v</text></g></svg>`,
    },
    {
      html: `<h3>Punto medio y distancia</h3><p>El <b>punto medio</b> de un segmento es la media de las coordenadas, y la <b>distancia</b> entre dos puntos es el módulo del vector que los une (es el teorema de Pitágoras):</p>
      <div class="formula"><span>M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</span></div><div class="formula"><span>d(A, B) = √((x₂ − x₁)² + (y₂ − y₁)²)</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Segmento de A (1, 1) a B (7, 5) con punto medio M (4, 3)">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${rejilla}
        <path d="M${P(1, 1)} L ${P(7, 5)}" stroke="var(--pen)" stroke-width="3"/>
        ${[[1, 1, "A"], [7, 5, "B"]].map(([x, y, n]) => `<circle cx="${P(x, y)[0]}" cy="${P(x, y)[1]}" r="5" fill="var(--ink)"/><text x="${P(x, y)[0] + 8}" y="${P(x, y)[1] + 14}" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
        <circle cx="${P(4, 3)[0]}" cy="${P(4, 3)[1]}" r="7" fill="var(--hl)" stroke="var(--ink)" stroke-width="2"/><text x="${P(4, 3)[0] - 4}" y="${P(4, 3)[1] - 12}" text-anchor="end" font-size="13" font-weight="700" fill="var(--red)" ${F}>M(4, 3)</text></svg>`,
    },
    {
      html: `<h3>Ecuaciones de la recta</h3><p>Una recta queda fijada por un punto y una dirección (o por dos puntos). Las formas más usadas:</p>
      <div class="formula"><span>Punto-pendiente: y − y₁ = m(x − x₁)</span></div><div class="formula"><span>Explícita: y = mx + n</span></div><div class="formula"><span>General: Ax + By + C = 0</span></div>
      <p>Con dos puntos, la <mark>pendiente</mark> es m = (y₂ − y₁) / (x₂ − x₁). Por A(1, 1) y B(7, 5): m = 4/6 = 2/3.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Recta que pasa por A (1, 1) y B (7, 5) con pendiente dos tercios">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${rejilla}
        <path d="M${P(-1, -1 / 3)} L ${P(9.5, 6.67)}" stroke="var(--pen)" stroke-width="3"/>
        <path d="M${P(1, 1)} H ${P(7, 1)[0]} V ${P(7, 5)[1]}" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/>
        ${[[1, 1], [7, 5]].map(([x, y]) => `<circle cx="${P(x, y)[0]}" cy="${P(x, y)[1]}" r="5" fill="var(--ink)"/>`).join("")}
        <g ${F} font-size="12" font-weight="700"><text x="${P(4, 1)[0]}" y="${P(4, 1)[1] + 16}" text-anchor="middle" fill="var(--red)">Δx = 6</text><text x="${P(7, 3)[0] + 6}" y="${P(7, 3)[1]}" fill="var(--red)">Δy = 4</text><text x="40" y="24" fill="var(--pen)">m = 4/6 = 2/3</text></g></svg>`,
    },
    {
      html: `<h3>Posición de dos rectas</h3><p>Comparando pendientes: si son <b>iguales</b>, las rectas son <mark>paralelas</mark> (o la misma recta, si además comparten un punto). Si son <b>distintas</b>, <mark>se cortan</mark>, y el punto de corte se halla resolviendo el sistema. Si m₁ · m₂ = −1, además son <b>perpendiculares</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos rectas paralelas con la misma pendiente y una tercera perpendicular que las corta">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${rejilla}
        <path d="M${P(-1, 0)} L ${P(9.5, 5.25)}" stroke="var(--pen)" stroke-width="3"/><path d="M${P(-1, 2)} L ${P(7.5, 6.25)}" stroke="var(--pen)" stroke-width="3"/>
        <path d="M${P(2, 6.5)} L ${P(5.5, -0.5)}" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="12" font-weight="700"><text x="248" y="${P(6, 0.5)[1] + 4}" text-anchor="end" fill="var(--pen)">paralelas: m = 1/2</text><text x="248" y="20" text-anchor="end" fill="var(--red)">perpendicular: m = −2</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Fórmulas de la geometría analítica en una ficha",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Resumen de fórmulas: vector, módulo, punto medio, distancia, pendiente y ecuación punto-pendiente">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Vector AB", "(x₂ − x₁, y₂ − y₁)", "var(--red)"], ["Módulo", "√(v₁² + v₂²)", "var(--red)"], ["Punto medio", "((x₁+x₂)/2, (y₁+y₂)/2)", "var(--leaf)"], ["Distancia", "√((x₂−x₁)² + (y₂−y₁)²)", "var(--leaf)"], ["Pendiente", "m = (y₂ − y₁)/(x₂ − x₁)", "var(--pen)"], ["Recta", "y − y₁ = m(x − x₁)", "var(--pen)"]].map(([t, f, c], i) => {
        const x = 20 + (i % 2) * 306, y = 20 + Math.floor(i / 2) * 66;
        return `<rect x="${x}" y="${y}" width="294" height="56" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="${x + 16}" y="${y + 34}" font-size="15" font-weight="700" fill="${c}" ${D}>${t}</text><text x="${x + 130}" y="${y + 34}" font-size="15" fill="var(--ink)" ${F}>${f}</text>`;
      }).join("")}
    </svg>`,
  },
  video: { id: "bo3JsAc9CbE", titulo: "Ecuación de la recta conociendo dos puntos", canal: "Matemáticas profe Alex", vistas: 5957363, megusta: 108578, busqueda: "ecuación de la recta" },
  quiz: [
    { q: "El vector de A(2, 3) a B(5, 7) es…", o: ["(3, 4)", "(7, 10)", "(−3, −4)"], a: 0, e: "Final menos origen: (5 − 2, 7 − 3) = (3, 4)." },
    { q: "¿Cuál es el módulo de (3, 4)?", o: ["7", "5", "25"], a: 1, e: "√(9 + 16) = √25 = 5." },
    { q: "El punto medio de A(−2, 4) y B(6, 0) es…", o: ["(2, 2)", "(4, 4)", "(8, −4)"], a: 0, e: "((−2 + 6)/2, (4 + 0)/2) = (2, 2)." },
    { q: "La pendiente de la recta que pasa por (1, 2) y (3, 8) es…", o: ["3", "1/3", "6"], a: 0, e: "m = (8 − 2)/(3 − 1) = 6/2 = 3." },
    { q: "Las rectas y = 2x + 1 e y = 2x − 5 son…", o: ["Secantes", "Paralelas", "Perpendiculares"], a: 1, e: "Misma pendiente y distinta ordenada en el origen." },
  ],
  examen: [
    { q: "La recta que pasa por (2, 1) con pendiente 3 es…", o: ["y = 3x − 5", "y = 3x + 1", "y = 2x + 3"], a: 0, e: "y − 1 = 3(x − 2) → y = 3x − 5." },
    { q: "Distancia entre (0, 0) y (6, 8):", o: ["10", "14", "48"], a: 0, e: "√(36 + 64) = √100 = 10." },
    { q: "Una recta perpendicular a y = 4x − 1 tiene pendiente…", o: ["4", "−4", "−1/4"], a: 2, e: "m₁ · m₂ = −1 → m₂ = −1/4." },
  ],
  feynman: ["Qué es un vector y cómo se calculan sus coordenadas", "Por qué la distancia entre dos puntos es el teorema de Pitágoras", "Cómo se halla la ecuación de la recta que pasa por dos puntos", "Cómo saber si dos rectas son paralelas o se cortan"],
  mapa: mapa("GEOMETRÍA ANALÍTICA", "var(--bac)", [
    ["Vectores", "AB = B − A · |v|", "var(--red)"],
    ["Puntos", "punto medio · distancia", "var(--leaf)"],
    ["Rectas", "y = mx + n · m = Δy/Δx", "var(--pen)"],
    ["Posiciones", "paralelas · secantes · ⊥", "var(--inf)"],
  ], 260),
  tarjetas: [
    ["Coordenadas del vector AB", "(x_B − x_A, y_B − y_A)"],
    ["Módulo de v = (a, b)", "√(a² + b²)"],
    ["Punto medio de AB", "((x_A + x_B)/2, (y_A + y_B)/2)"],
    ["Pendiente por dos puntos", "m = (y₂ − y₁) / (x₂ − x₁)"],
    ["Condición de paralelismo", "Misma pendiente."],
  ],
  familias: ["Jugad a hundir la flota y calculad distancias entre barcos con la fórmula.", "Pedidle que explique cómo un GPS calcula una distancia en línea recta.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido espacial: vectores, distancia, punto medio, ecuaciones de la recta y posiciones relativas (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Programar en Scratch un personaje que se mueve con vectores.", "GeoGebra: arrastrar puntos y ver cómo cambia la ecuación de la recta.", "Búsqueda del tesoro en el patio con coordenadas y vectores de desplazamiento."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Geometría analítica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Geometr%C3%ADa_anal%C3%ADtica" },
  ],
  revisado: "2026-11-12",
};
