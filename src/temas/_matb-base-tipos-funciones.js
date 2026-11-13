// Copia congelada de la versión anterior de Matemáticas B, base de los temas de Matemáticas A (eso-4-mata-adaptados.js).
// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Dibuja f en un marco 260x180 con origen (ox, oy) y escala k; corta valores fuera.
function graf(f, c, ox = 130, oy = 100, k = 22, x0 = -5.5, x1 = 5.5) {
  let d = "", pen = false;
  for (let x = x0; x <= x1 + 1e-9; x += 0.05) {
    const y = f(x), Y = oy - y * k;
    if (!isFinite(y) || Y < 4 || Y > 176) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${(ox + x * k).toFixed(1)} ${Y.toFixed(1)} `; pen = true;
  }
  return `<path d="${d}" fill="none" stroke="${c}" stroke-width="3"/>`;
}
const ejes = (ox = 130, oy = 100) => `<path d="M8 ${oy} H 252 M${ox} 6 V 174" stroke="var(--line)" stroke-width="2"/>`;

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Funciones polinómicas, racionales, exponenciales y logarítmicas",
  minutos: 45,
  objetivos: ["Reconocer y representar funciones lineales, cuadráticas y de proporcionalidad inversa", "Hallar el vértice y los cortes de una parábola", "Distinguir el crecimiento exponencial y el logarítmico y aplicarlos a situaciones reales"],
  claves: ["pendiente", "parábola", "vértice", "hipérbola", "asíntota", "exponencial"],
  pregunta: {
    texto: "Te ofrecen dos premios: 1.000 € cada día durante un mes, o 1 céntimo el primer día y el doble cada día siguiente. ¿Cuál eliges?",
    respuesta: "El primero da 30.000 €. El segundo es una <mark>función exponencial</mark>: el día 30 recibes 0,01 · 2²⁹ ≈ <b>5,4 millones de euros</b>. Las exponenciales empiezan lentas y luego se disparan.",
  },
  bloques: [
    {
      html: `<h3>Funciones lineales y afines</h3><p>Su gráfica es una <b>recta</b>: y = mx + n. La <b>pendiente</b> m indica cuánto sube y por cada unidad que avanza x (si es negativa, baja). La <b>ordenada en el origen</b> n es donde corta al eje Y. Si n = 0, es de <mark>proporcionalidad directa</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rectas y igual a 2x más 1, con pendiente positiva, e y igual a menos medio x más 2, con pendiente negativa">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${ejes()}${graf((x) => 2 * x + 1, "var(--pen)")}${graf((x) => -0.5 * x + 2, "var(--red)")}
        <g ${F} font-size="12" font-weight="700"><text x="14" y="164" fill="var(--pen)">y = 2x + 1 (m = 2)</text><text x="170" y="140" fill="var(--red)">y = −x/2 + 2</text></g></svg>`,
    },
    {
      html: `<h3>Funciones cuadráticas: la parábola</h3><p>y = ax² + bx + c dibuja una <b>parábola</b>. Si a &gt; 0 abre hacia arriba (∪) y si a &lt; 0, hacia abajo (∩). Su punto clave es el <b>vértice</b>:</p><div class="formula"><span>x_v = −b / 2a</span></div><p>Los cortes con el eje X son las soluciones de ax² + bx + c = 0, y con el eje Y, el punto (0, c).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Parábola y igual a x al cuadrado menos 2x menos 3 con vértice en (1, menos 4) y cortes en menos 1 y 3">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${ejes(110, 80)}${graf((x) => x * x - 2 * x - 3, "var(--pen)", 110, 80, 20)}
        <circle cx="${110 + 20}" cy="${80 + 4 * 20}" r="6" fill="var(--red)"/><circle cx="${110 - 20}" cy="80" r="5" fill="var(--leaf)"/><circle cx="${110 + 60}" cy="80" r="5" fill="var(--leaf)"/><circle cx="110" cy="${80 + 60}" r="5" fill="var(--inf)"/>
        <g ${F} font-size="12" font-weight="700"><text x="${110 + 30}" y="${80 + 4 * 20 + 4}" fill="var(--red)">vértice (1, −4)</text><text x="70" y="72" fill="var(--leaf)">−1</text><text x="174" y="72" fill="var(--leaf)">3</text><text x="64" y="${80 + 64}" fill="var(--inf)">(0, −3)</text></g></svg>`,
    },
    {
      html: `<h3>Proporcionalidad inversa y funciones racionales</h3><p>y = k / x es una <b>hipérbola</b>: cuando x crece, y decrece (a doble velocidad, mitad de tiempo). Nunca toca los ejes: tiene <mark>asíntotas</mark>, rectas a las que la curva se acerca sin llegar. En y = k / (x − a) + b, las asíntotas son x = a e y = b.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Hipérbola y igual a 4 entre x, con dos ramas que se acercan a los ejes sin tocarlos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${ejes()}${graf((x) => (Math.abs(x) < 0.05 ? NaN : 4 / x), "var(--pen)")}
        <g ${F} font-size="12" font-weight="700"><text x="186" y="124" fill="var(--pen)">y = 4/x</text><text x="14" y="22" fill="var(--red)">asíntota x = 0 (eje Y)</text><text x="14" y="92" fill="var(--red)">asíntota y = 0</text></g></svg>`,
    },
    {
      html: `<h3>Funciones exponenciales</h3><p>y = aˣ (con a &gt; 0, a ≠ 1). Si a &gt; 1 <mark>crece cada vez más deprisa</mark>; si 0 &lt; a &lt; 1, decrece. Siempre pasa por (0, 1) y nunca toca el eje X. Modelan poblaciones, interés compuesto, contagios o la desintegración radiactiva.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráficas de 2 elevado a x, creciente, y de un medio elevado a x, decreciente; ambas pasan por (0, 1)">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${ejes(130, 150)}${graf((x) => 2 ** x, "var(--red)", 130, 150, 20)}${graf((x) => 0.5 ** x, "var(--leaf)", 130, 150, 20)}
        <circle cx="130" cy="130" r="5" fill="var(--ink)"/>
        <g ${F} font-size="12" font-weight="700"><text x="186" y="30" fill="var(--red)">y = 2ˣ</text><text x="22" y="30" fill="var(--leaf)">y = (1/2)ˣ</text><text x="136" y="126" fill="var(--ink)">(0, 1)</text></g></svg>`,
    },
    {
      html: `<h3>Funciones logarítmicas</h3><p>y = logₐ x es la <b>inversa</b> de la exponencial: su gráfica es la de aˣ <mark>reflejada en la recta y = x</mark>. Solo existe para x &gt; 0, pasa por (1, 0) y crece muy despacio. Se usa en la escala de terremotos, el pH o los decibelios.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La exponencial 2 elevado a x y el logaritmo en base 2 son simétricos respecto a la recta y igual a x">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${ejes(90, 120)}
        ${graf((x) => x, "var(--muted)", 90, 120, 20)}${graf((x) => 2 ** x, "var(--red)", 90, 120, 20)}${graf((x) => (x > 0 ? Math.log2(x) : NaN), "var(--pen)", 90, 120, 20)}
        <g ${F} font-size="12" font-weight="700"><text x="104" y="22" fill="var(--red)">y = 2ˣ</text><text x="196" y="76" fill="var(--pen)">y = log₂ x</text><text x="196" y="22" fill="var(--muted)">y = x</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Galería de funciones: reconoce la forma",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Cinco miniaturas: recta, parábola, hipérbola, exponencial y logaritmo, con su fórmula">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["recta", "y = mx + n", "M10 90 L 100 20", "var(--pen)"], ["parábola", "y = ax² + bx + c", "M10 20 Q 55 160 100 20", "var(--leaf)"], ["hipérbola", "y = k / x", "M56 10 Q 60 70 100 76 M10 96 Q 44 100 50 136", "var(--inf)"], ["exponencial", "y = aˣ", "M10 96 Q 70 96 100 14", "var(--red)"], ["logaritmo", "y = logₐ x", "M14 136 Q 22 50 100 40", "var(--bac)"]].map(([n, f, d, c], i) => `<g transform="translate(${16 + i * 124} 20)"><rect width="112" height="190" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
        <g transform="translate(6 6) scale(0.95)"><path d="${d}" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/></g>
        <text x="56" y="160" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="56" y="180" text-anchor="middle" font-size="12" fill="var(--ink)" ${F}>${f}</text></g>`).join("")}
    </svg>`,
  },
  video: { id: "C0vUje9Uduc", titulo: "Función logarítmica: gráfica, dominio y rango", canal: "Matemáticas profe Alex", vistas: 3749125, megusta: 0, busqueda: "función exponencial y logarítmica" },
  quiz: [
    { q: "¿Cuál es la pendiente de y = −3x + 5?", o: ["5", "−3", "3"], a: 1, e: "La pendiente es el número que multiplica a x." },
    { q: "¿Dónde está el vértice de y = x² − 6x + 1?", o: ["x = 3", "x = −3", "x = 6"], a: 0, e: "x_v = −b/2a = 6/2 = 3." },
    { q: "La parábola y = −2x² + 4 abre…", o: ["hacia arriba", "hacia abajo", "hacia la derecha"], a: 1, e: "a = −2 < 0: forma de ∩." },
    { q: "¿Por qué punto pasan todas las funciones y = aˣ?", o: ["(1, 0)", "(0, 1)", "(0, 0)"], a: 1, e: "a⁰ = 1 para cualquier base." },
    { q: "¿Cuál es el dominio de y = log x?", o: ["ℝ", "x > 0", "x ≥ 1"], a: 1, e: "Solo existen logaritmos de números positivos." },
  ],
  examen: [
    { q: "Las asíntotas de y = 3 / (x − 2) + 1 son…", o: ["x = 2, y = 1", "x = −2, y = 1", "x = 1, y = 2"], a: 0, e: "Vertical donde se anula el denominador (x = 2) y horizontal y = 1." },
    { q: "Una población de 500 bacterias se duplica cada hora. ¿Qué fórmula da las bacterias tras t horas?", o: ["500 + 2t", "500 · 2ᵗ", "2 · 500ᵗ"], a: 1, e: "Crecimiento exponencial: se multiplica por 2 cada hora." },
    { q: "La recta que pasa por (0, 2) con pendiente 4 es…", o: ["y = 2x + 4", "y = 4x + 2", "y = 4x − 2"], a: 1, e: "y = mx + n con m = 4 y n = 2." },
  ],
  feynman: ["Qué significan la pendiente y la ordenada en el origen", "Cómo se calcula el vértice y los cortes de una parábola", "Qué es una asíntota con el ejemplo de la hipérbola", "Por qué la exponencial y el logaritmo son inversas"],
  mapa: mapa("TIPOS DE FUNCIONES", "var(--bac)", [
    ["Lineales", "y = mx + n · recta", "var(--pen)"],
    ["Cuadráticas", "parábola · vértice −b/2a", "var(--leaf)"],
    ["Racionales", "hipérbola · asíntotas", "var(--inf)"],
    ["Exp. y log.", "aˣ y logₐ x · inversas", "var(--red)"],
  ], 250),
  tarjetas: [
    ["¿Qué indica la pendiente m?", "Cuánto aumenta y por cada unidad que aumenta x."],
    ["Fórmula del vértice de una parábola", "x_v = −b / 2a"],
    ["¿Qué es una asíntota?", "Una recta a la que la gráfica se acerca sin llegar a tocarla."],
    ["Diferencia entre 2ˣ y (1/2)ˣ", "La primera crece y la segunda decrece; ambas pasan por (0, 1)."],
    ["Dominio de y = logₐ x", "(0, +∞): solo x positivos."],
  ],
  familias: ["Calculad juntos el problema del céntimo que se duplica con una hoja de cálculo.", "Buscad en casa ejemplos de cada tipo: tarifa por kilómetro (recta), trayectoria de una pelota (parábola).", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Relaciones y funciones: funciones lineales, cuadráticas, de proporcionalidad inversa, exponenciales y logarítmicas; modelización (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Lanzar una pelota, grabarla y ajustar una parábola con GeoGebra.", "Simular el interés compuesto o un contagio con una hoja de cálculo.", "Juego de emparejar gráficas, fórmulas y situaciones."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Función exponencial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Funci%C3%B3n_exponencial" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Obtener gráficas nuevas trasladando y reflejando gráficas conocidas", "Modelizar situaciones reales con funciones exponenciales y de valor absoluto"],
  tras: {
    "Funciones cuadráticas: la parábola": [
      { html: `<h3>Representar una parábola paso a paso</h3><p>Para dibujar y = ax² + bx + c con precisión se siguen cuatro pasos. 1) El signo de <b>a</b> indica la forma: si a &gt; 0 abre hacia arriba (∪) y tiene un mínimo; si a &lt; 0, hacia abajo (∩) y tiene un máximo. 2) El <b>vértice</b> está en <mark>x = −b / 2a</mark>; su y se obtiene sustituyendo. 3) Los <b>cortes con el eje X</b> se hallan resolviendo ax² + bx + c = 0, y el corte con el eje Y es el punto (0, c). 4) Se completan unos cuantos puntos <b>simétricos</b> respecto al eje vertical que pasa por el vértice. Las parábolas describen la trayectoria de un balón, la forma de las antenas o el beneficio de una empresa.</p>` },
    ],
    "Proporcionalidad inversa y funciones racionales": [
      { html: `<h3>Traslaciones y reflexiones</h3><p>Conociendo la gráfica de una función f(x) se obtienen muchas otras sin hacer tablas. f(x) + k desplaza la gráfica <b>k unidades hacia arriba</b> (o hacia abajo si k es negativo). f(x − k) la desplaza <b>k unidades a la derecha</b>: ¡al revés de lo que parece! −f(x) la refleja respecto al eje X, como en un espejo. Así, y = (x − 3)² + 1 es la parábola y = x² con el vértice llevado al punto (3, 1), e y = 1/(x + 2) es la hipérbola 1/x desplazada 2 unidades a la izquierda, con su asíntota vertical en <mark>x = −2</mark>.</p>${AMP.tabla(["Fórmula", "Efecto sobre y = f(x)"], [["f(x) + k", "Sube k unidades"], ["f(x) − k", "Baja k unidades"], ["f(x − k)", "Se mueve k a la derecha"], ["f(x + k)", "Se mueve k a la izquierda"], ["−f(x)", "Se refleja en el eje X"]])}`, video: { id: "yLQKUfxXDjg", titulo: "Transformaciones de funciones: traslaciones y reflexiones", canal: "ferchomat", vistas: 582731 } },
    ],
    "Funciones exponenciales": [
      { html: `<h3>Crecimiento y decrecimiento exponencial</h3><p>Muchos fenómenos crecen o decrecen en un <b>porcentaje fijo</b> por unidad de tiempo, y eso da una función exponencial: <mark>C(t) = C₀ · (1 + r)ᵗ</mark>. Un capital de 1.000 € al 4 % anual compuesto se convierte en 1.000 · 1,04ᵗ. Una población de bacterias que se duplica cada hora sigue N = N₀ · 2ᵗ. Y cuando algo pierde un porcentaje, el factor es menor que 1: un coche que se devalúa un 15 % al año vale V₀ · 0,85ᵗ. La desintegración radiactiva también: el <b>periodo de semidesintegración</b> es el tiempo en que la cantidad se reduce a la mitad, y permite datar fósiles con el carbono-14.</p>` },
    ],
    "Funciones logarítmicas": [
      { html: `<h3>La función valor absoluto</h3><p>La función <b>valor absoluto</b> y = |x| devuelve la distancia al cero: deja igual los positivos y cambia de signo los negativos. Su gráfica tiene forma de <b>V</b> con el vértice en el origen. En realidad es una función a trozos: |x| = x si x ≥ 0 y |x| = −x si x &lt; 0. Para dibujar y = |f(x)| se dibuja f(x) y se <mark>refleja hacia arriba</mark> la parte que queda por debajo del eje X. Por ejemplo, y = |x² − 4| es la parábola con el tramo entre −2 y 2 dado la vuelta.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Representa y = x² − 4x + 3: vértice, cortes y forma.", pasos: ["a = 1 > 0: abre hacia arriba.", "Vértice: x = 4/2 = 2; y = 4 − 8 + 3 = −1. V(2, −1).", "Cortes con X: x² − 4x + 3 = 0, x = 1 y x = 3. Corte con Y: (0, 3)."], resultado: "Parábola ∪ con vértice (2, −1), cortes (1, 0), (3, 0) y (0, 3)." },
    { enunciado: "Describe cómo se obtiene la gráfica de y = (x + 1)² − 4 a partir de y = x².", pasos: ["(x + 1)²: se desplaza 1 unidad a la izquierda.", "− 4: se desplaza 4 unidades hacia abajo.", "El vértice pasa de (0, 0) a (−1, −4)."], resultado: "Traslación 1 a la izquierda y 4 abajo; vértice (−1, −4)." },
    { enunciado: "Un coche de 20.000 € pierde un 15 % de su valor cada año. ¿Cuánto vale a los 4 años?", pasos: ["Factor anual: 1 − 0,15 = 0,85.", "V(t) = 20.000 · 0,85ᵗ.", "V(4) = 20.000 · 0,522 ≈ 10.440 €."], resultado: "Unos 10.440 €." },
  ],
  errores: [
    "Pensar que f(x − 3) desplaza la gráfica a la izquierda: va a la derecha.",
    "Calcular el vértice con x = b / 2a, olvidando el signo menos.",
    "Usar 0,15 como factor en lugar de 0,85 cuando algo disminuye un 15 %.",
    "Creer que el crecimiento exponencial es como el lineal: al principio parece lento, pero se dispara.",
    "Dibujar la función logarítmica con valores para x ≤ 0, donde no existe.",
  ],
  ejercicios: [
    { q: "Escribe la recta de pendiente −2 que pasa por (1, 5).", sol: "y = −2x + 7." },
    { q: "Halla el vértice de y = −x² + 6x − 5 e indica si es máximo o mínimo.", sol: "x = 3, y = 4. V(3, 4), máximo (a < 0)." },
    { q: "Halla los cortes con los ejes de y = x² − x − 6.", sol: "Eje X: (3, 0) y (−2, 0). Eje Y: (0, −6)." },
    { q: "¿Qué traslación lleva y = x² a y = (x − 2)² + 5?", sol: "2 unidades a la derecha y 5 hacia arriba; vértice (2, 5)." },
    { q: "Indica las asíntotas de y = 3/(x − 1) + 2.", sol: "Vertical x = 1; horizontal y = 2." },
    { q: "Una colonia de 500 bacterias se duplica cada hora. ¿Cuántas hay a las 6 horas?", sol: "500 · 2⁶ = 32.000." },
    { q: "Calcula el capital final de 2.000 € al 3 % anual compuesto durante 5 años.", sol: "2.000 · 1,03⁵ ≈ 2.318,55 €." },
    { q: "Una sustancia tiene un periodo de semidesintegración de 10 años. ¿Qué queda de 80 g a los 30 años?", sol: "80 → 40 → 20 → 10 g." },
    { q: "Calcula log₂ 8 y log₂ (1/4) y di qué puntos de y = log₂ x representan.", sol: "3 y −2: puntos (8, 3) y (1/4, −2)." },
    { q: "Escribe y = |x − 3| como función a trozos.", sol: "y = x − 3 si x ≥ 3; y = 3 − x si x < 3." },
  ],
  quiz: [
    { q: "y = f(x) + 3 desplaza la gráfica…", o: ["3 hacia arriba", "3 a la derecha", "3 hacia abajo"], a: 0, e: "Suma fuera: vertical." },
    { q: "y = f(x + 2) desplaza la gráfica…", o: ["2 a la derecha", "2 a la izquierda", "2 hacia arriba"], a: 1, e: "Al revés de lo que parece." },
    { q: "El vértice de y = ax² + bx + c está en x =…", o: ["−b / 2a", "b / 2a", "−c / a"], a: 0, e: "Eje de simetría." },
    { q: "Un 4 % de crecimiento anual da el factor…", o: ["0,04", "1,04", "0,96"], a: 1, e: "1 + 0,04." },
    { q: "La gráfica de y = |x| tiene forma de…", o: ["U", "V", "S"], a: 1, e: "Vértice en el origen." },
  ],
  tarjetas: [
    ["Vértice de la parábola", "x = −b / 2a; es el máximo o el mínimo."],
    ["Traslaciones", "f(x) + k sube; f(x − k) se mueve a la derecha."],
    ["Crecimiento exponencial", "C(t) = C₀ · (1 + r)ᵗ, con un porcentaje fijo por periodo."],
  ],
});
