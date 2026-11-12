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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Sumar, multiplicar y dividir polinomios", "Calcular el MCD y el mcm de polinomios y operar con fracciones algebraicas"],
  tras: {
    "Qué es un polinomio": [
      { html: `<h3>Sumar, restar y multiplicar</h3><p>Para <b>sumar</b> polinomios se suman los <b>términos semejantes</b>, los que tienen la misma parte literal: (3x² + 2x − 1) + (x² − 5x + 4) = 4x² − 3x + 3. Para <b>restar</b> se suma el opuesto, cambiando el signo de todos los términos del segundo. Para <b>multiplicar</b> se multiplica cada término del primero por cada término del segundo y se reducen los semejantes, recordando que <mark>xᵃ · xᵇ = xᵃ⁺ᵇ</mark>. El grado del producto es la suma de los grados. Para no olvidar ningún término conviene colocarlos ordenados, como en una multiplicación de números.</p><div class="formula"><span>(2x − 3)(x + 4) = 2x² + 8x − 3x − 12 = 2x² + 5x − 12</span></div>` },
    ],
    "Identidades notables": [
      { html: `<h3>La división de polinomios</h3><p>Para dividir P(x) entre Q(x) se ordenan los dos de mayor a menor grado, <b>dejando huecos</b> para los términos que faltan. Se divide el primer término del dividendo entre el primero del divisor, se multiplica el resultado por todo el divisor y se resta. Se repite con lo que queda hasta que el resto tenga <b>menor grado que el divisor</b>. Como con los números, se cumple que <mark>D = d · c + r</mark>. Cuando el divisor es de la forma x − a, la división se abrevia con la regla de Ruffini.</p>`, video: { id: "gpBEUnFBhGc", titulo: "División de polinomios, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 9331815 } },
    ],
    "Factorizar y simplificar fracciones algebraicas": [
      { html: `<h3>MCD y mcm de polinomios</h3><p>Igual que con los números, primero se <b>factorizan</b> los polinomios. El <b>máximo común divisor</b> es el producto de los factores comunes con el menor exponente, y el <b>mínimo común múltiplo</b> es el producto de los factores comunes y no comunes con el mayor exponente. Si P = x²(x − 1) y Q = x(x − 1)²(x + 2), entonces MCD = x(x − 1) y mcm = x²(x − 1)²(x + 2). El mcm sirve, como en las fracciones numéricas, para encontrar el <mark>denominador común</mark>.</p>` },
      { html: `<h3>Operar con fracciones algebraicas</h3><p>Para <b>sumar o restar</b> fracciones algebraicas se reducen a común denominador con el mcm de los denominadores, se ajustan los numeradores y se suman. Para <b>multiplicar</b>, se multiplican numeradores y denominadores, y para <b>dividir</b>, se multiplica en cruz. En todos los casos conviene <mark>factorizar antes</mark> y simplificar al final. Hay que recordar que solo se pueden simplificar <b>factores</b>, nunca sumandos: en (x + 3)/3 no se puede tachar el 3.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Divide P(x) = 2x³ − 3x² + 4 entre Q(x) = x² − 1.", pasos: ["2x³ / x² = 2x. Se resta 2x(x² − 1) = 2x³ − 2x: queda −3x² + 2x + 4.", "−3x² / x² = −3. Se resta −3(x² − 1) = −3x² + 3: queda 2x + 1.", "El resto 2x + 1 tiene grado menor que el divisor."], resultado: "Cociente 2x − 3; resto 2x + 1." },
    { enunciado: "Calcula 2/(x − 1) + 3/(x + 1).", pasos: ["mcm = (x − 1)(x + 1) = x² − 1.", "Numeradores: 2(x + 1) + 3(x − 1) = 5x − 1.", "Resultado: (5x − 1)/(x² − 1)."], resultado: "(5x − 1)/(x² − 1)." },
    { enunciado: "Simplifica (x² − 9)/(x² + 6x + 9).", pasos: ["Numerador: diferencia de cuadrados (x + 3)(x − 3).", "Denominador: cuadrado de una suma (x + 3)².", "Se simplifica el factor común (x + 3)."], resultado: "(x − 3)/(x + 3)." },
  ],
  errores: [
    "Olvidar dejar el hueco de los términos que faltan al dividir.",
    "No cambiar el signo de todos los términos al restar polinomios.",
    "Escribir (a + b)² = a² + b², olvidando el doble producto.",
    "Simplificar sumandos en vez de factores en una fracción algebraica.",
    "Multiplicar exponentes en lugar de sumarlos: x² · x³ = x⁵, no x⁶.",
  ],
  ejercicios: [
    { q: "Calcula (4x³ − 2x + 5) − (x³ + 3x² − 2x).", sol: "3x³ − 3x² + 5." },
    { q: "Multiplica (x² − 2)(3x + 1).", sol: "3x³ + x² − 6x − 2." },
    { q: "Desarrolla (2x + 5)² y (3x − 1)(3x + 1).", sol: "4x² + 20x + 25 y 9x² − 1." },
    { q: "Divide x³ − 2x² + x − 5 entre x − 2 con Ruffini.", sol: "Cociente x² + 1; resto −3." },
    { q: "Calcula el valor de P(x) = x³ − 4x + 1 en x = −2 con el teorema del resto.", sol: "−8 + 8 + 1 = 1." },
    { q: "Factoriza x³ − x² − 6x.", sol: "x(x − 3)(x + 2)." },
    { q: "Halla el MCD y el mcm de x² − 4 y x² + 4x + 4.", sol: "(x − 2)(x + 2) y (x + 2)²: MCD = x + 2; mcm = (x − 2)(x + 2)²." },
    { q: "Simplifica (x² − 5x)/(x² − 25).", sol: "x(x − 5)/((x + 5)(x − 5)) = x/(x + 5)." },
    { q: "Calcula x/(x + 2) − 1/x.", sol: "(x² − x − 2)/(x(x + 2)) = (x − 2)(x + 1)/(x(x + 2))." },
    { q: "Calcula (x² − 1)/x · 3x/(x + 1).", sol: "3(x − 1)." },
  ],
  quiz: [
    { q: "El grado de (x³ + 1)(x² − 4) es…", o: ["5", "6", "3"], a: 0, e: "Se suman los grados." },
    { q: "En una división de polinomios, el resto debe tener…", o: ["mayor grado que el divisor", "menor grado que el divisor", "el mismo grado"], a: 1, e: "Si no, se sigue dividiendo." },
    { q: "D = d · c + r se llama…", o: ["prueba de la división", "teorema del resto", "regla de Ruffini"], a: 0, e: "Como con los números." },
    { q: "El mcm de x(x − 1) y (x − 1)² es…", o: ["x(x − 1)²", "x − 1", "x(x − 1)"], a: 0, e: "Comunes y no comunes, mayor exponente." },
    { q: "En (x + 3)/3, ¿se puede tachar el 3?", o: ["Sí", "No, es un sumando", "Solo si x = 0"], a: 1, e: "Solo se simplifican factores." },
  ],
  tarjetas: [
    ["Prueba de la división", "D = d · c + r, con el grado de r menor que el de d."],
    ["mcm de polinomios", "Factores comunes y no comunes con el mayor exponente."],
    ["Simplificar fracciones", "Factorizar primero y tachar solo factores comunes."],
  ],
});
