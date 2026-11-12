// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Polinomios y fracciones algebraicas",
  minutos: 45,
  objetivos: ["Sumar, restar, multiplicar y dividir polinomios", "Usar la regla de Ruffini y el teorema del resto", "Factorizar polinomios y simplificar fracciones algebraicas"],
  claves: ["grado", "coeficiente", "Ruffini", "raíz", "factorizar", "identidades notables"],
  pregunta: {
    texto: "Un jardín cuadrado de lado x metros se amplía 3 metros por cada lado. ¿Cuánto crece su área?",
    respuesta: "El área nueva es (x + 3)² = <mark>x² + 6x + 9</mark>. Restando la antigua (x²), el área crece <b>6x + 9</b> m². Los polinomios son la forma de hacer cuentas cuando aún no sabes el número.",
  },
  bloques: [
    {
      html: `<h3>Qué es un polinomio</h3><p>Es una suma de monomios: P(x) = 3x³ − 2x + 5. El <b>grado</b> es el mayor exponente (aquí 3), los <b>coeficientes</b> son los números que multiplican y el <b>término independiente</b> el que no lleva x (5). El <mark>valor numérico</mark> P(a) se obtiene sustituyendo x por a: P(1) = 3 − 2 + 5 = 6.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Partes del polinomio 3x al cubo menos 2x más 5: coeficiente, grado y término independiente">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <text x="130" y="100" text-anchor="middle" font-size="30" font-weight="700" fill="var(--ink)" ${F}><tspan fill="var(--pen)">3</tspan>x<tspan dy="-12" font-size="18" fill="var(--red)">3</tspan><tspan dy="12"> − 2x + </tspan><tspan fill="var(--leaf)">5</tspan></text>
        <g ${F} font-size="12" font-weight="700"><path d="M56 70 V 46" stroke="var(--pen)" stroke-width="2"/><text x="56" y="40" text-anchor="middle" fill="var(--pen)">coeficiente</text>
        <path d="M90 80 L 110 40" stroke="var(--red)" stroke-width="2"/><text x="122" y="34" text-anchor="middle" fill="var(--red)">grado 3</text>
        <path d="M206 110 V 134" stroke="var(--leaf)" stroke-width="2"/><text x="206" y="150" text-anchor="middle" fill="var(--leaf)">término</text><text x="206" y="164" text-anchor="middle" fill="var(--leaf)">independiente</text></g></svg>`,
    },
    {
      html: `<h3>Identidades notables</h3><p>Tres productos que conviene saber de memoria porque ahorran mucho trabajo:</p>
      <div class="formula"><span>(a + b)² = a² + 2ab + b²</span></div><div class="formula"><span>(a − b)² = a² − 2ab + b²</span></div><div class="formula"><span>(a + b)(a − b) = a² − b²</span></div>
      <p>El dibujo muestra por qué el cuadrado de una suma tiene <mark>dos rectángulos ab</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuadrado de lado a más b dividido en un cuadrado a al cuadrado, otro b al cuadrado y dos rectángulos a por b">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="60" y="20" width="96" height="96" fill="var(--pen)" opacity=".25" stroke="var(--pen)" stroke-width="2"/>
        <rect x="156" y="20" width="44" height="96" fill="var(--leaf)" opacity=".25" stroke="var(--leaf)" stroke-width="2"/>
        <rect x="60" y="116" width="96" height="44" fill="var(--leaf)" opacity=".25" stroke="var(--leaf)" stroke-width="2"/>
        <rect x="156" y="116" width="44" height="44" fill="var(--red)" opacity=".25" stroke="var(--red)" stroke-width="2"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="108" y="74" font-size="18" fill="var(--pen)">a²</text><text x="178" y="74" font-size="14" fill="var(--leaf)">ab</text><text x="108" y="144" font-size="14" fill="var(--leaf)">ab</text><text x="178" y="144" font-size="14" fill="var(--red)">b²</text>
        <text x="44" y="72" font-size="13" fill="var(--muted)">a</text><text x="44" y="142" font-size="13" fill="var(--muted)">b</text><text x="108" y="14" font-size="13" fill="var(--muted)">a</text><text x="178" y="14" font-size="13" fill="var(--muted)">b</text></g></svg>`,
    },
    {
      html: `<h3>La regla de Ruffini</h3><p>Sirve para dividir un polinomio entre (x − a) de forma rápida. Se escriben los coeficientes (con 0 si falta algún grado), se baja el primero, se <mark>multiplica por a y se suma</mark> con el siguiente, y así hasta el final. El último número es el <b>resto</b>.</p><p>Ejemplo: (x³ − 2x² − 5x + 6) : (x − 1) da cociente x² − x − 6 y resto 0.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla de Ruffini dividiendo x al cubo menos 2x al cuadrado menos 5x más 6 entre x menos 1, con resto 0">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M50 30 V 140 M40 108 H 240" stroke="var(--ink)" stroke-width="2.5"/>
        <g ${F} font-size="17" font-weight="700" text-anchor="middle">
          ${["1", "−2", "−5", "6"].map((v, i) => `<text x="${80 + i * 50}" y="56" fill="var(--ink)">${v}</text>`).join("")}
          <text x="30" y="92" fill="var(--red)">1</text>
          ${["1", "−1", "−6"].map((v, i) => `<text x="${130 + i * 50}" y="92" fill="var(--pen)">${v}</text>`).join("")}
          ${["1", "−1", "−6"].map((v, i) => `<text x="${80 + i * 50}" y="134" fill="var(--leaf)">${v}</text>`).join("")}
          <rect x="214" y="114" width="32" height="30" rx="6" fill="var(--hl)"/><text x="230" y="134" fill="var(--hl-ink)">0</text>
        </g><text x="130" y="166" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>cociente x² − x − 6 · resto 0</text></svg>`,
    },
    {
      html: `<h3>Teorema del resto y raíces</h3><p>El resto de dividir P(x) entre (x − a) es <mark>P(a)</mark>. Si P(a) = 0, entonces <b>a es una raíz</b> y (x − a) es un factor. Las raíces enteras se buscan entre los <b>divisores del término independiente</b>: para 6, prueba ±1, ±2, ±3, ±6.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica de un polinomio de grado 3 que corta al eje x en menos 2, 1 y 3: sus raíces">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 96 H 246 M110 14 V 170" stroke="var(--line)" stroke-width="2"/>
        <path d="${[...Array(61)].map((_, i) => { const x = -2.6 + i * 0.1; const y = (x + 2) * (x - 1) * (x - 3); return `${i ? "L" : "M"}${(110 + x * 32).toFixed(1)} ${(96 - y * 4).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="3"/>
        ${[-2, 1, 3].map((r) => `<circle cx="${110 + r * 32}" cy="96" r="6" fill="var(--red)"/><text x="${110 + r * 32}" y="${r === 1 ? 122 : 82}" text-anchor="middle" font-size="13" font-weight="700" fill="var(--red)" ${F}>${r}</text>`).join("")}
        <text x="130" y="166" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>P(x) = (x + 2)(x − 1)(x − 3)</text></svg>`,
    },
    {
      html: `<h3>Factorizar y simplificar fracciones algebraicas</h3><p>Factorizar es escribir el polinomio como producto: saca factor común, usa identidades notables o busca raíces con Ruffini. Con los polinomios factorizados, una <b>fracción algebraica</b> se simplifica <mark>tachando factores iguales</mark>, nunca sumandos:</p>
      <div class="formula"><span>(x² − 9) / (x² + 3x) = (x + 3)(x − 3) / x(x + 3) = (x − 3) / x</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Simplificación correcta tachando el factor x más 3 arriba y abajo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="18" font-weight="700" text-anchor="middle">
          <text x="130" y="66" fill="var(--ink)"><tspan fill="var(--red)">(x + 3)</tspan>(x − 3)</text>
          <path d="M40 82 H 220" stroke="var(--ink)" stroke-width="2.5"/>
          <text x="130" y="112" fill="var(--ink)">x<tspan fill="var(--red)">(x + 3)</tspan></text>
          <path d="M60 60 L 116 46 M98 106 L 160 92" stroke="var(--red)" stroke-width="3"/>
        </g><text x="130" y="152" text-anchor="middle" font-size="13" font-weight="700" fill="var(--leaf)" ${F}>✓ se tachan factores, no sumandos</text></svg>`,
    },
  ],
  figura: {
    titulo: "Cómo factorizar un polinomio, paso a paso",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Tres pasos para factorizar: sacar factor común, buscar identidades notables y aplicar Ruffini con los divisores del término independiente">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["1", "Factor común", "2x³ − 8x = 2x(x² − 4)", "var(--pen)"], ["2", "Identidad notable", "x² − 4 = (x + 2)(x − 2)", "var(--leaf)"], ["3", "Ruffini", "prueba divisores del término independiente", "var(--red)"]].map(([n, t, d, c], i) => `<rect x="${20 + i * 206}" y="24" width="190" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
        <circle cx="${115 + i * 206}" cy="62" r="20" fill="${c}"/><text x="${115 + i * 206}" y="70" text-anchor="middle" font-size="22" font-weight="800" fill="#fff" ${D}>${n}</text>
        <text x="${115 + i * 206}" y="112" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${t}</text>
        <foreignObject x="${32 + i * 206}" y="124" width="166" height="64"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;font:14px Atkinson Hyperlegible,sans-serif;text-align:center;color:var(--ink)">${d}</p></foreignObject>`).join("")}
      ${[0, 1].map((i) => `<path d="M${212 + i * 206} 110 h 12" stroke="var(--muted)" stroke-width="3"/>`).join("")}
    </svg>`,
  },
  video: { id: "stIFJ0GnS84", titulo: "Factorización por evaluación usando División Sintética, Ruffini", canal: "Matemáticas profe Alex", vistas: 4027216, megusta: 80115, busqueda: "división de polinomios ruffini" },
  quiz: [
    { q: "¿Cuál es el grado de P(x) = 4x² − x⁵ + 7?", o: ["2", "5", "7"], a: 1, e: "El grado es el mayor exponente: 5." },
    { q: "(x − 4)² =", o: ["x² − 16", "x² − 8x + 16", "x² + 16"], a: 1, e: "Cuadrado de una diferencia: a² − 2ab + b²." },
    { q: "El resto de dividir x³ + 2x − 1 entre (x − 2) es…", o: ["11", "7", "0"], a: 0, e: "Teorema del resto: P(2) = 8 + 4 − 1 = 11." },
    { q: "¿Cuál de estos números puede ser raíz entera de x³ − x² − 4x + 4?", o: ["3", "2", "5"], a: 1, e: "Las raíces enteras dividen a 4. P(2) = 8 − 4 − 8 + 4 = 0." },
    { q: "Simplifica (x² − 1) / (x + 1).", o: ["x − 1", "x² − 1", "x"], a: 0, e: "x² − 1 = (x + 1)(x − 1); se tacha (x + 1)." },
  ],
  examen: [
    { q: "Factoriza x² − 6x + 9.", o: ["(x − 3)²", "(x + 3)(x − 3)", "(x − 9)(x + 1)"], a: 0, e: "Es el cuadrado de una diferencia: (x − 3)²." },
    { q: "Si P(−1) = 0, entonces…", o: ["(x − 1) es factor", "(x + 1) es factor", "P no tiene raíces"], a: 1, e: "Si a = −1 es raíz, el factor es (x − (−1)) = (x + 1)." },
    { q: "(2x + 3)(2x − 3) =", o: ["4x² − 9", "4x² + 9", "2x² − 9"], a: 0, e: "Suma por diferencia: (2x)² − 3² = 4x² − 9." },
  ],
  feynman: ["Qué son el grado, los coeficientes y el término independiente", "Por qué en (a + b)² aparece el término 2ab", "Cómo funciona la regla de Ruffini y qué dice el teorema del resto", "Por qué al simplificar fracciones solo se tachan factores"],
  mapa: mapa("POLINOMIOS", "var(--bac)", [
    ["Elementos", "grado · coeficientes · P(a)", "var(--ink)"],
    ["Identidades", "(a ± b)² · (a + b)(a − b)", "var(--pen)"],
    ["Ruffini y resto", "resto = P(a) · raíces", "var(--red)"],
    ["Fracciones", "factorizar y tachar factores", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["(a + b)² =", "a² + 2ab + b²"],
    ["(a + b)(a − b) =", "a² − b²"],
    ["Teorema del resto", "El resto de dividir P(x) entre (x − a) es P(a)."],
    ["¿Dónde se buscan las raíces enteras?", "Entre los divisores del término independiente."],
    ["Error típico al simplificar", "Tachar sumandos: (x + 3)/3 no es x. Solo se tachan factores."],
  ],
  familias: ["Pedidle que dibuje el cuadrado de (a + b) con papel y tijeras para ver los cuatro trozos.", "Preguntadle qué número hay que probar primero en Ruffini y por qué.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico: operaciones con polinomios, regla de Ruffini, factorización y fracciones algebraicas (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Fichas de álgebra (algeblocks) para visualizar identidades notables.", "Carrera por parejas de factorizaciones con comprobación por valor numérico.", "Galería de errores típicos al simplificar: los alumnos explican por qué están mal."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Regla de Ruffini, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Regla_de_Ruffini" },
  ],
  revisado: "2026-11-12",
};
