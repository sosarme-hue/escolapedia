// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Parábola y = a(x - r1)(x - r2) dibujada en un marco 260x180 con origen (130, oy).
function parabola(f, oy = 110, k = 26, c = "var(--pen)") {
  return `<path d="${[...Array(61)].map((_, i) => { const x = -4.5 + i * 0.15; const y = f(x); return `${i ? "L" : "M"}${(130 + x * k).toFixed(1)} ${Math.max(6, Math.min(176, oy - y * k / 2)).toFixed(1)}`; }).join(" ")}" fill="none" stroke="${c}" stroke-width="3"/>`;
}

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Ecuaciones",
  minutos: 45,
  objetivos: ["Resolver ecuaciones de segundo grado completas e incompletas", "Saber cuántas soluciones tiene una ecuación con el discriminante", "Resolver ecuaciones bicuadradas, racionales e irracionales y comprobar las soluciones"],
  claves: ["incógnita", "discriminante", "bicuadrada", "cambio de variable", "solución", "comprobación"],
  pregunta: {
    texto: "Un rectángulo mide 3 cm más de largo que de ancho y su área es 40 cm². ¿Cuánto mide el ancho?",
    respuesta: "Si el ancho es x, el área es x(x + 3) = 40, es decir, <mark>x² + 3x − 40 = 0</mark>. Con la fórmula salen x = 5 y x = −8; como una longitud no puede ser negativa, el ancho es <b>5 cm</b>. Comprobar las soluciones en el problema real es parte del método.",
  },
  bloques: [
    {
      html: `<h3>La fórmula de segundo grado</h3><p>Toda ecuación ax² + bx + c = 0 se resuelve con:</p><div class="formula"><span>x = (−b ± √(b² − 4ac)) / 2a</span></div>
      <p>En el rectángulo: a = 1, b = 3, c = −40 → x = (−3 ± √169) / 2 = (−3 ± 13) / 2 → <mark>x = 5 o x = −8</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rectángulo de ancho x y largo x más 3 con área 40">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="50" y="40" width="160" height="100" rx="6" fill="var(--pen)" opacity=".18" stroke="var(--pen)" stroke-width="3"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="130" y="98" font-size="20" fill="var(--pen)">A = 40 cm²</text><text x="130" y="30" font-size="15" fill="var(--red)">x + 3</text><text x="34" y="96" font-size="15" fill="var(--leaf)">x</text>
        <text x="130" y="166" font-size="13" fill="var(--ink)">x(x + 3) = 40</text></g></svg>`,
    },
    {
      html: `<h3>El discriminante</h3><p>El número de dentro de la raíz, <b>Δ = b² − 4ac</b>, dice cuántas soluciones hay sin resolver:</p>
      <ul><li>Δ &gt; 0 → <mark>dos soluciones</mark> (la parábola corta dos veces el eje)</li><li>Δ = 0 → una solución doble (lo toca)</li><li>Δ &lt; 0 → ninguna solución real (no lo toca)</li></ul>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres parábolas: una corta el eje en dos puntos, otra lo toca en uno y otra no lo toca">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 120 H 250" stroke="var(--ink)" stroke-width="2"/>
        <path d="M14 40 Q 50 224 86 40" fill="none" stroke="var(--leaf)" stroke-width="3"/><path d="M94 40 Q 130 200 166 40" fill="none" stroke="var(--pen)" stroke-width="3"/><path d="M174 30 Q 210 150 246 30" fill="none" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="50" y="150" fill="var(--leaf)">Δ &gt; 0</text><text x="50" y="166" fill="var(--leaf)">2 soluciones</text><text x="130" y="150" fill="var(--pen)">Δ = 0</text><text x="130" y="166" fill="var(--pen)">1 doble</text><text x="210" y="150" fill="var(--red)">Δ &lt; 0</text><text x="210" y="166" fill="var(--red)">sin solución</text></g></svg>`,
    },
    {
      html: `<h3>Ecuaciones incompletas: sin fórmula</h3><p>Si falta un término, hay atajos:</p>
      <div class="formula"><span>ax² + bx = 0 → x(ax + b) = 0 → x = 0 o x = −b/a</span></div>
      <div class="formula"><span>ax² + c = 0 → x² = −c/a → x = ±√(−c/a)</span></div>
      <p>Ejemplo: 3x² − 12x = 0 → 3x(x − 4) = 0 → <mark>x = 0 o x = 4</mark>. Nunca dividas entre x: perderías la solución x = 0.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Si un producto vale cero, uno de los factores es cero: 3x por x menos 4 igual a cero da x igual 0 o x igual 4">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="130" y="44" font-size="20" fill="var(--ink)"><tspan fill="var(--pen)">3x</tspan> · <tspan fill="var(--red)">(x − 4)</tspan> = 0</text>
        <path d="M100 56 L 66 100 M160 56 L 194 100" stroke="var(--muted)" stroke-width="2.5"/>
        <rect x="24" y="104" width="90" height="44" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><text x="69" y="132" font-size="17" fill="var(--pen)">x = 0</text>
        <rect x="146" y="104" width="90" height="44" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/><text x="191" y="132" font-size="17" fill="var(--red)">x = 4</text>
        <text x="130" y="172" font-size="12" fill="var(--muted)">si a · b = 0, entonces a = 0 o b = 0</text></g></svg>`,
    },
    {
      html: `<h3>Ecuaciones bicuadradas</h3><p>Tienen la forma ax⁴ + bx² + c = 0. Se hace un <b>cambio de variable</b> <mark>x² = t</mark>, se resuelve la de segundo grado en t y se deshace: x = ±√t.</p><p>x⁴ − 13x² + 36 = 0 → t² − 13t + 36 = 0 → t = 9 o t = 4 → <b>x = ±3, ±2</b>. Hasta cuatro soluciones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema del cambio de variable: x a la cuarta menos 13 x al cuadrado más 36 pasa a t al cuadrado menos 13t más 36, da t igual 9 y 4, y x igual más menos 3 y más menos 2">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <text x="130" y="34" font-size="15" fill="var(--ink)">x⁴ − 13x² + 36 = 0</text><path d="M130 44 V 60" stroke="var(--leaf)" stroke-width="2.5"/><text x="180" y="57" font-size="12" fill="var(--leaf)">x² = t</text>
          <text x="130" y="80" font-size="15" fill="var(--leaf)">t² − 13t + 36 = 0</text><path d="M130 90 V 106" stroke="var(--muted)" stroke-width="2.5"/>
          <text x="130" y="124" font-size="15" fill="var(--pen)">t = 9 · t = 4</text><path d="M130 134 V 148" stroke="var(--red)" stroke-width="2.5"/>
          <text x="130" y="168" font-size="16" fill="var(--red)">x = ±3 · x = ±2</text></g></svg>`,
    },
    {
      html: `<h3>Racionales e irracionales: ¡comprueba!</h3><p>En las <b>racionales</b> (x en el denominador) se multiplica todo por el mínimo común múltiplo. En las <b>irracionales</b> (x dentro de una raíz) se <mark>aísla la raíz y se eleva al cuadrado</mark>. Ambos pasos pueden crear soluciones falsas, así que <b>siempre hay que comprobar</b> en la ecuación original.</p>
      <div class="formula"><span>√(x + 7) = x + 1 → x + 7 = x² + 2x + 1 → x = 2 ✓ · x = −3 ✗</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comprobación: x igual 2 cumple la ecuación y x igual menos 3 no, porque la raíz da 2 y el otro lado da menos 2">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="30" width="108" height="120" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="3"/><rect x="136" y="30" width="108" height="120" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="70" y="60" font-size="16" fill="var(--leaf)">x = 2</text><text x="70" y="88" font-size="13" fill="var(--ink)">√9 = 3</text><text x="70" y="108" font-size="13" fill="var(--ink)">2 + 1 = 3</text><text x="70" y="136" font-size="22" fill="var(--leaf)">✓</text>
        <text x="190" y="60" font-size="16" fill="var(--red)">x = −3</text><text x="190" y="88" font-size="13" fill="var(--ink)">√4 = 2</text><text x="190" y="108" font-size="13" fill="var(--ink)">−3 + 1 = −2</text><text x="190" y="136" font-size="22" fill="var(--red)">✗</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "¿Qué tipo de ecuación es? Elige el método",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Guía de métodos: segundo grado completa con fórmula, incompleta sacando factor común o despejando, bicuadrada con cambio de variable, racional con mínimo común múltiplo e irracional elevando al cuadrado y comprobando">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["ax² + bx + c = 0", "fórmula", "var(--pen)"], ["ax² + bx = 0", "factor común", "var(--leaf)"], ["ax⁴ + bx² + c = 0", "x² = t", "var(--inf)"], ["x en el denominador", "m.c.m. y comprobar", "var(--bac)"], ["x dentro de √", "aislar, elevar y comprobar", "var(--red)"]].map(([t, m, c], i) => `<rect x="20" y="${16 + i * 41}" width="600" height="34" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>
        <text x="40" y="${38 + i * 41}" font-size="16" font-weight="700" fill="${c}" ${F}>${t}</text><text x="330" y="${38 + i * 41}" font-size="15" fill="var(--muted)" ${F}>→</text><text x="360" y="${38 + i * 41}" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${m}</text>`).join("")}
    </svg>`,
  },
  video: { id: "mwOU-AGJtdY", titulo: "Ecuaciones bicuadradas", canal: "Susi Profe", vistas: 1219028, megusta: 25429, busqueda: "ecuaciones bicuadradas" },
  quiz: [
    { q: "¿Cuántas soluciones tiene x² − 6x + 9 = 0?", o: ["Dos", "Una doble", "Ninguna"], a: 1, e: "Δ = 36 − 36 = 0: una solución doble, x = 3." },
    { q: "Resuelve x² − 5x = 0.", o: ["x = 5", "x = 0 y x = 5", "x = ±√5"], a: 1, e: "x(x − 5) = 0 → x = 0 o x = 5." },
    { q: "Resuelve 2x² − 18 = 0.", o: ["x = ±3", "x = 9", "x = ±9"], a: 0, e: "x² = 9 → x = ±3." },
    { q: "En x⁴ − 5x² + 4 = 0, con t = x² salen t = 4 y t = 1. Las soluciones son…", o: ["x = 4 y x = 1", "x = ±2 y x = ±1", "x = 2 y x = 1"], a: 1, e: "Se deshace el cambio: x = ±√4 = ±2 y x = ±√1 = ±1." },
    { q: "¿Por qué hay que comprobar las soluciones de una ecuación irracional?", o: ["Porque la fórmula falla", "Porque al elevar al cuadrado pueden aparecer soluciones falsas", "No hace falta"], a: 1, e: "Elevar al cuadrado convierte −2 = 2 en 4 = 4: aparecen soluciones que no valen." },
  ],
  examen: [
    { q: "El discriminante de 2x² + 3x + 5 = 0 es…", o: ["−31", "49", "31"], a: 0, e: "Δ = 9 − 40 = −31 < 0: no tiene soluciones reales." },
    { q: "Resuelve x² + x − 12 = 0.", o: ["x = 3 y x = −4", "x = −3 y x = 4", "x = 12"], a: 0, e: "x = (−1 ± 7) / 2 → 3 y −4." },
    { q: "Resuelve 6/x = x − 1.", o: ["x = 3 y x = −2", "x = 6", "x = 2 y x = −3"], a: 0, e: "6 = x² − x → x² − x − 6 = 0 → x = 3 o x = −2 (ninguna anula el denominador)." },
  ],
  feynman: ["Cómo se usa la fórmula de segundo grado", "Qué dice el discriminante sobre el número de soluciones", "Cómo se resuelve una bicuadrada con cambio de variable", "Por qué hay que comprobar en las irracionales"],
  mapa: mapa("ECUACIONES", "var(--bac)", [
    ["2º grado", "x = (−b ± √Δ) / 2a", "var(--pen)"],
    ["Discriminante", "Δ > 0 · Δ = 0 · Δ < 0", "var(--leaf)"],
    ["Bicuadradas", "x² = t · hasta 4 soluciones", "var(--inf)"],
    ["Racionales e irracionales", "m.c.m. o elevar · ¡comprobar!", "var(--red)"],
  ], 270),
  tarjetas: [
    ["Fórmula de segundo grado", "x = (−b ± √(b² − 4ac)) / 2a"],
    ["Si Δ < 0…", "la ecuación no tiene soluciones reales."],
    ["¿Cómo se resuelve ax² + bx = 0?", "Sacando factor común: x = 0 o x = −b/a."],
    ["Cambio de variable en bicuadradas", "x² = t; al final x = ±√t."],
    ["¿Qué hacer siempre en una ecuación irracional?", "Comprobar las soluciones en la ecuación original."],
  ],
  familias: ["Inventad juntos un problema de áreas que lleve a una ecuación de segundo grado.", "Pedidle que os explique qué es el discriminante con un dibujo de parábolas.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico: ecuaciones de segundo grado, bicuadradas, racionales e irracionales; modelización de problemas (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Deducir la fórmula completando el cuadrado con fichas de álgebra.", "GeoGebra: deslizadores para a, b y c y observar el discriminante.", "Problemas de áreas y edades en grupo, con debate sobre qué solución tiene sentido."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ecuación de segundo grado, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ecuaci%C3%B3n_de_segundo_grado" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Resolver ecuaciones de grado mayor que dos por factorización", "Resolver ecuaciones exponenciales y plantear problemas con ecuaciones"],
  tras: {
    "El discriminante": [
      { html: `<h3>Suma y producto de las soluciones</h3><p>En una ecuación ax² + bx + c = 0 con soluciones x₁ y x₂ se cumple que <mark>x₁ + x₂ = −b/a</mark> y <mark>x₁ · x₂ = c/a</mark>. Esto sirve para comprobar rápidamente las soluciones y para construir una ecuación a partir de ellas: si las soluciones son 2 y 5, la ecuación es x² − 7x + 10 = 0, porque la suma es 7 y el producto 10. También permite factorizar: ax² + bx + c = a(x − x₁)(x − x₂).</p><div class="formula"><span>x² − 7x + 10 = (x − 2)(x − 5)</span></div>` },
    ],
    "Ecuaciones bicuadradas": [
      { html: `<h3>Ecuaciones de grado superior: factorizar</h3><p>Para resolver una ecuación como x³ − 2x² − 5x + 6 = 0 se <b>factoriza</b> el polinomio. Primero se saca factor común si se puede. Después se buscan raíces enteras entre los <b>divisores del término independiente</b> y se aplica la regla de Ruffini; el cociente es un polinomio de un grado menos. Cuando queda una ecuación de segundo grado, se usa la fórmula. Al final se aplica que <mark>un producto es cero si alguno de sus factores es cero</mark>. Una ecuación de grado n tiene como mucho n soluciones.</p>` },
    ],
    "Racionales e irracionales: ¡comprueba!": [
      { html: `<h3>Ecuaciones exponenciales</h3><p>En las <b>ecuaciones exponenciales</b> la incógnita está en el exponente, como 2ˣ = 32. Si se pueden escribir los dos miembros como potencias de la <b>misma base</b>, se igualan los exponentes: 2ˣ = 2⁵, luego x = 5. Si aparecen sumas, como 2ˣ + 2ˣ⁺¹ = 12, se saca factor común 2ˣ(1 + 2) = 12, de donde 2ˣ = 4 y x = 2. A veces hay que hacer un <b>cambio de variable</b> (t = 2ˣ) que lleva a una ecuación de segundo grado. Cuando las bases no se pueden igualar, se toman <mark>logaritmos</mark> en los dos miembros.</p>`, video: { id: "XdaB464Gt4M", titulo: "Ecuaciones exponenciales: introducción", canal: "Matemáticas profe Alex", vistas: 2496710 } },
      { html: `<h3>Plantear problemas</h3><p>Para resolver un problema con ecuaciones: 1) lee y decide qué es la <b>incógnita</b>; 2) traduce el enunciado a una <b>ecuación</b>; 3) resuélvela; 4) <b>interpreta</b> las soluciones y descarta las que no tienen sentido, como una longitud negativa o un número de personas decimal; 5) comprueba en el enunciado. Muchos problemas de áreas, de números consecutivos o de movimiento llevan a ecuaciones de segundo grado, y es frecuente que <mark>solo una de las dos soluciones</mark> sea válida.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Resuelve x³ − 2x² − 5x + 6 = 0.", pasos: ["Divisores de 6: ±1, ±2, ±3, ±6. Para x = 1: 1 − 2 − 5 + 6 = 0, es raíz.", "Ruffini con 1: cociente x² − x − 6.", "x² − x − 6 = 0 da x = 3 y x = −2."], resultado: "x = 1, x = 3 y x = −2." },
    { enunciado: "Resuelve 3ˣ⁺¹ = 81.", pasos: ["81 = 3⁴.", "3ˣ⁺¹ = 3⁴, igualamos exponentes: x + 1 = 4.", "x = 3. Comprobación: 3⁴ = 81."], resultado: "x = 3." },
    { enunciado: "Un rectángulo tiene 3 cm más de largo que de ancho y su área es 40 cm². Halla sus lados.", pasos: ["Ancho x, largo x + 3: x(x + 3) = 40.", "x² + 3x − 40 = 0, con soluciones x = 5 y x = −8.", "Una longitud no puede ser negativa: se descarta −8."], resultado: "5 cm de ancho y 8 cm de largo." },
  ],
  errores: [
    "Dividir los dos miembros entre x y perder la solución x = 0 (en x² = 5x hay que sacar factor común).",
    "Olvidar el ± al despejar x² = 9, que tiene dos soluciones: 3 y −3.",
    "En las bicuadradas, no deshacer el cambio t = x² o aceptar valores de t negativos.",
    "No comprobar las soluciones de las ecuaciones con radicales o con x en el denominador.",
    "Igualar exponentes cuando las bases no son iguales.",
    "Dar como válidas soluciones sin sentido en el problema (longitudes negativas).",
  ],
  ejercicios: [
    { q: "Resuelve x² − 5x + 6 = 0.", sol: "x = 2 y x = 3." },
    { q: "Sin resolver, ¿cuántas soluciones tiene 2x² + 3x + 5 = 0?", sol: "Δ = 9 − 40 = −31 < 0: ninguna solución real." },
    { q: "Resuelve 4x² − 9 = 0 y 3x² + 12x = 0.", sol: "x = ±3/2; x = 0 y x = −4." },
    { q: "Escribe una ecuación de segundo grado cuyas soluciones sean −1 y 4.", sol: "x² − 3x − 4 = 0." },
    { q: "Resuelve x⁴ − 10x² + 9 = 0.", sol: "t = x²: t = 1 y t = 9; x = ±1 y x = ±3." },
    { q: "Resuelve x³ − 4x = 0.", sol: "x(x² − 4) = 0: x = 0, x = 2 y x = −2." },
    { q: "Resuelve √(x + 7) = x + 1.", sol: "x + 7 = x² + 2x + 1, x² + x − 6 = 0: x = 2 o x = −3. Al comprobar, solo vale x = 2." },
    { q: "Resuelve 5²ˣ⁻¹ = 125.", sol: "2x − 1 = 3, x = 2." },
    { q: "Resuelve 2ˣ + 2ˣ⁺² = 40.", sol: "2ˣ(1 + 4) = 40, 2ˣ = 8, x = 3." },
    { q: "La suma de los cuadrados de dos números consecutivos es 145. ¿Cuáles son?", sol: "x² + (x + 1)² = 145, x² + x − 72 = 0: x = 8 o x = −9. Son 8 y 9, o −9 y −8." },
  ],
  quiz: [
    { q: "En ax² + bx + c = 0, la suma de las soluciones es…", o: ["−b/a", "c/a", "b/a"], a: 0, e: "Y el producto, c/a." },
    { q: "Las posibles raíces enteras de un polinomio son divisores de…", o: ["el coeficiente principal", "el término independiente", "el grado"], a: 1, e: "Se prueban con Ruffini." },
    { q: "La solución de 2ˣ = 16 es…", o: ["8", "4", "2"], a: 1, e: "2⁴ = 16." },
    { q: "Una ecuación de grado 3 tiene como mucho…", o: ["2 soluciones", "3 soluciones", "infinitas"], a: 1, e: "Tantas como su grado." },
    { q: "En un problema, una solución x = −4 cm se…", o: ["acepta", "descarta", "redondea"], a: 1, e: "Una longitud no es negativa." },
  ],
  tarjetas: [
    ["Suma y producto de raíces", "x₁ + x₂ = −b/a; x₁ · x₂ = c/a."],
    ["Ecuación exponencial", "La incógnita está en el exponente; se igualan bases o se usan logaritmos."],
    ["Producto nulo", "Si A · B = 0, entonces A = 0 o B = 0."],
  ],
});
