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
