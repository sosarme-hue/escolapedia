// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Curva genérica a partir de puntos [x, y] en píxeles (spline sencillo con Q).
const curva = (pts, c = "var(--pen)") => `<path d="M${pts[0].join(" ")} ${pts.slice(1).map((p, i) => `L ${p.join(" ")}`).join(" ")}" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`;

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Funciones y sus propiedades",
  minutos: 40,
  objetivos: ["Reconocer una función y hallar su dominio y recorrido", "Estudiar continuidad, crecimiento, máximos y mínimos en una gráfica", "Identificar simetrías, periodicidad y tendencias"],
  claves: ["dominio", "recorrido", "continuidad", "creciente", "máximo relativo", "simetría"],
  pregunta: {
    texto: "La temperatura de un día empieza en 8 °C, sube hasta 22 °C a las 15 h y baja a 12 °C por la noche. ¿Cómo lo contarías con un solo dibujo?",
    respuesta: "Con la <mark>gráfica de una función</mark>: a cada hora (x) le corresponde una única temperatura (y). En ella se ve de un vistazo dónde <b>crece</b>, dónde <b>decrece</b> y cuál es el <b>máximo</b> (22 °C a las 15 h).",
  },
  bloques: [
    {
      html: `<h3>Qué es una función</h3><p>Es una relación que asigna a cada valor de x (<b>variable independiente</b>) <mark>un único valor</mark> de y (<b>variable dependiente</b>). Se puede dar con una fórmula, una tabla, una gráfica o un enunciado. Truco gráfico: si una recta vertical corta a la curva en más de un punto, no es función.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Prueba de la recta vertical: una curva que la recta corta una vez es función; una circunferencia, que corta dos veces, no">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${curva([[14, 140], [40, 110], [70, 60], [100, 80], [120, 40]], "var(--leaf)")}
        <circle cx="190" cy="90" r="46" fill="none" stroke="var(--red)" stroke-width="3"/>
        <path d="M70 20 V 160 M190 20 V 160" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 5"/>
        <circle cx="70" cy="60" r="5" fill="var(--leaf)"/><circle cx="190" cy="44" r="5" fill="var(--red)"/><circle cx="190" cy="136" r="5" fill="var(--red)"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="70" y="174" fill="var(--leaf)">sí es función</text><text x="190" y="174" fill="var(--red)">no es función</text></g></svg>`,
    },
    {
      html: `<h3>Dominio y recorrido</h3><p>El <b>dominio</b> son los valores de x que <mark>se pueden usar</mark>; el <b>recorrido</b> (o imagen), los valores de y que <mark>se obtienen</mark>. Por fórmula: un <b>denominador</b> no puede ser 0 y una <b>raíz cuadrada</b> no puede tener dentro un número negativo.</p>
      <div class="formula"><span>f(x) = 1/(x − 2) → Dom = ℝ − {2}</span></div><div class="formula"><span>g(x) = √(x + 3) → Dom = [−3, +∞)</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica de raíz de x más 3: empieza en x igual menos 3; el dominio se marca en el eje x y el recorrido en el eje y">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 140 H 250 M100 10 V 172" stroke="var(--line)" stroke-width="2"/>
        <path d="${[...Array(41)].map((_, i) => { const x = -3 + i * 0.25; return `${i ? "L" : "M"}${(100 + x * 18).toFixed(1)} ${(140 - Math.sqrt(x + 3) * 30).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <path d="M46 150 H 250" stroke="var(--leaf)" stroke-width="5"/><circle cx="46" cy="150" r="5" fill="var(--leaf)"/>
        <path d="M18 140 V 14" stroke="var(--red)" stroke-width="5"/><circle cx="18" cy="140" r="5" fill="var(--red)"/>
        <g ${F} font-size="12" font-weight="700"><text x="130" y="172" fill="var(--leaf)">dominio [−3, +∞)</text><text x="26" y="30" fill="var(--red)">recorrido [0, +∞)</text><text x="40" y="166" fill="var(--muted)">−3</text></g></svg>`,
    },
    {
      html: `<h3>Crecimiento, máximos y mínimos</h3><p>Una función es <b>creciente</b> donde, al avanzar x, <mark>sube</mark>, y <b>decreciente</b> donde baja. Donde pasa de crecer a decrecer hay un <b>máximo relativo</b>; donde pasa de decrecer a crecer, un <b>mínimo relativo</b>. Se escriben con intervalos de x.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica de la temperatura de un día: crece hasta un máximo a las 15 horas y luego decrece; tiene un mínimo de madrugada">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M24 150 H 250 M24 10 V 150" stroke="var(--line)" stroke-width="2"/>
        <path d="M24 110 C 40 120 50 130 66 128 C 110 124 140 30 170 30 C 200 30 220 80 248 92" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <circle cx="170" cy="30" r="6" fill="var(--red)"/><circle cx="62" cy="128" r="6" fill="var(--leaf)"/>
        <g ${F} font-size="12" font-weight="700"><text x="112" y="24" fill="var(--red)">máximo: 22 °C a las 15 h</text><text x="70" y="146" fill="var(--leaf)">mínimo</text>
        <text x="96" y="70" fill="var(--pen)">↗ crece</text><text x="200" y="110" fill="var(--pen)">↘ decrece</text><text x="236" y="166" fill="var(--muted)">h</text></g></svg>`,
    },
    {
      html: `<h3>Continuidad</h3><p>Una función es <b>continua</b> si se puede dibujar <mark>sin levantar el lápiz</mark>. Si hay un salto, un agujero o la función se dispara hacia el infinito (asíntota), es <b>discontinua</b> en ese punto. Las tarifas por tramos (aparcamientos, envíos) suelen tener saltos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica escalonada del precio de un aparcamiento: tiene saltos en cada hora, así que es discontinua">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M24 150 H 250 M24 10 V 150" stroke="var(--line)" stroke-width="2"/>
        ${[0, 1, 2, 3].map((i) => `<path d="M${24 + i * 55} ${126 - i * 30} H ${79 + i * 55}" stroke="var(--pen)" stroke-width="4"/><circle cx="${24 + i * 55}" cy="${126 - i * 30}" r="5" fill="${i ? "var(--pen)" : "var(--pen)"}"/><circle cx="${79 + i * 55}" cy="${126 - i * 30}" r="5" fill="var(--paper)" stroke="var(--pen)" stroke-width="2.5"/>`).join("")}
        <g ${F} font-size="12" font-weight="700"><text x="34" y="30" fill="var(--red)">saltos → discontinua</text>${[1, 2, 3, 4].map((h, i) => `<text x="${79 + i * 55}" y="166" text-anchor="middle" fill="var(--muted)">${h} h</text>`).join("")}</g></svg>`,
    },
    {
      html: `<h3>Simetrías y periodicidad</h3><p>Una función es <b>par</b> si f(−x) = f(x): es <mark>simétrica respecto al eje Y</mark> (como x²). Es <b>impar</b> si f(−x) = −f(x): simétrica respecto al <mark>origen</mark> (como x³). Es <b>periódica</b> si se repite cada cierto intervalo, el <b>periodo</b> (como las mareas).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Función par con forma de U simétrica respecto al eje vertical y función impar simétrica respecto al origen">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 100 H 120 M65 14 V 170 M140 100 H 250 M195 14 V 170" stroke="var(--line)" stroke-width="2"/>
        <path d="${[...Array(31)].map((_, i) => { const x = -1.5 + i * 0.1; return `${i ? "L" : "M"}${(65 + x * 34).toFixed(1)} ${(100 - x * x * 30).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--leaf)" stroke-width="3"/>
        <path d="${[...Array(31)].map((_, i) => { const x = -1.5 + i * 0.1; return `${i ? "L" : "M"}${(195 + x * 34).toFixed(1)} ${(100 - x * x * x * 22).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="65" y="130" fill="var(--leaf)">par: y = x²</text><text x="195" y="160" fill="var(--red)">impar: y = x³</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Lo que hay que mirar en cualquier gráfica",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Gráfica comentada con dominio, recorrido, cortes con los ejes, crecimiento, máximo, mínimo y continuidad">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      <path d="M30 170 H 400 M120 20 V 220" stroke="var(--line)" stroke-width="2"/>
      <path d="M40 210 C 80 120 120 40 170 40 C 220 40 250 180 300 180 C 340 180 360 120 390 70" fill="none" stroke="var(--pen)" stroke-width="3.5"/>
      <circle cx="170" cy="40" r="7" fill="var(--red)"/><circle cx="300" cy="180" r="7" fill="var(--leaf)"/><circle cx="120" cy="58" r="6" fill="var(--inf)"/><circle cx="66" cy="170" r="6" fill="var(--inf)"/><circle cx="243" cy="170" r="6" fill="var(--inf)"/><circle cx="356" cy="170" r="6" fill="var(--inf)"/>
      ${[["1", "Dominio y recorrido", "qué x e y aparecen", "var(--ink)"], ["2", "Cortes con los ejes", "x = 0 · y = 0", "var(--inf)"], ["3", "Crece / decrece", "intervalos de x", "var(--pen)"], ["4", "Máximos y mínimos", "cambios de tendencia", "var(--red)"], ["5", "Continuidad y simetría", "saltos · par · impar", "var(--leaf)"]].map(([n, t, d, c], i) => `<circle cx="432" cy="${36 + i * 42}" r="13" fill="${c}"/><text x="432" y="${41 + i * 42}" text-anchor="middle" font-size="14" font-weight="800" fill="#fff" ${D}>${n}</text><text x="454" y="${34 + i * 42}" font-size="14" font-weight="700" fill="${c}" ${F}>${t}</text><text x="454" y="${50 + i * 42}" font-size="12" fill="var(--muted)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "H40lcwlgPMk", titulo: "Dominio y rango de una función", canal: "Matemáticas profe Alex", vistas: 6842269, megusta: 141230, busqueda: "dominio y recorrido de una función" },
  quiz: [
    { q: "¿Cuál es el dominio de f(x) = 3 / (x + 1)?", o: ["ℝ", "ℝ − {−1}", "ℝ − {1}"], a: 1, e: "El denominador se anula en x = −1." },
    { q: "¿Cuál es el dominio de g(x) = √(x − 4)?", o: ["[4, +∞)", "(−∞, 4]", "ℝ"], a: 0, e: "Dentro de la raíz: x − 4 ≥ 0 → x ≥ 4." },
    { q: "Si una función pasa de crecer a decrecer en x = 2, en ese punto hay…", o: ["Un mínimo relativo", "Un máximo relativo", "Una discontinuidad"], a: 1, e: "Sube y luego baja: es un máximo." },
    { q: "Una función par es simétrica respecto…", o: ["al eje Y", "al origen", "al eje X"], a: 0, e: "f(−x) = f(x): lo de la izquierda es el reflejo de lo de la derecha." },
    { q: "El precio de un envío que cambia por tramos de peso es una función…", o: ["Continua", "Discontinua", "Periódica"], a: 1, e: "Tiene saltos al cambiar de tramo." },
  ],
  examen: [
    { q: "¿f(x) = x³ − x es par, impar o ninguna?", o: ["Par", "Impar", "Ninguna"], a: 1, e: "f(−x) = −x³ + x = −f(x)." },
    { q: "¿Dónde corta f(x) = 2x − 6 al eje X?", o: ["(3, 0)", "(0, −6)", "(−3, 0)"], a: 0, e: "Se iguala a 0: 2x − 6 = 0 → x = 3." },
    { q: "El dominio de h(x) = 1 / (x² − 9) es…", o: ["ℝ − {3}", "ℝ − {−3, 3}", "ℝ"], a: 1, e: "x² − 9 = 0 en x = ±3." },
  ],
  feynman: ["Qué condición tiene que cumplir una relación para ser función", "Cómo se calcula el dominio con denominadores y raíces", "Cómo se reconocen en una gráfica el crecimiento y los extremos", "Qué diferencia hay entre una función par y una impar"],
  mapa: mapa("FUNCIONES", "var(--bac)", [
    ["Dominio y recorrido", "x permitidos · y obtenidos", "var(--ink)"],
    ["Monotonía", "crece · decrece · máx · mín", "var(--pen)"],
    ["Continuidad", "sin levantar el lápiz", "var(--leaf)"],
    ["Simetría", "par · impar · periódica", "var(--red)"],
  ], 260),
  tarjetas: [
    ["¿Qué es el dominio de una función?", "El conjunto de valores de x para los que existe f(x)."],
    ["¿Qué valores quitan del dominio un denominador y una raíz?", "Los que anulan el denominador y los que dejan negativo el radicando."],
    ["Máximo relativo", "Punto donde la función pasa de crecer a decrecer."],
    ["Función par", "f(−x) = f(x); simétrica respecto al eje Y."],
    ["Función periódica", "Se repite cada cierto intervalo, llamado periodo."],
  ],
  familias: ["Buscad gráficas en el periódico o en una app del tiempo y pedidle que las describa con estas palabras.", "Dibujad juntos la gráfica de un trayecto (distancia a casa según la hora).", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico y relaciones funcionales: dominio, recorrido, continuidad, monotonía, extremos y simetrías (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Relatos gráficos: un alumno cuenta una historia y otro dibuja la gráfica.", "Analizar datos reales (temperatura, consumo eléctrico) en hoja de cálculo.", "Dominó de fórmulas y dominios."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Función matemática, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Funci%C3%B3n_(matem%C3%A1tica)" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Calcular la tasa de variación media e interpretarla", "Trabajar con funciones definidas a trozos y estudiar las tendencias de una función"],
  tras: {
    "Qué es una función": [
      { html: `<h3>Cuatro formas de expresar una función</h3><p>Una misma función se puede dar de cuatro maneras. Con un <b>enunciado</b>: «el taxi cobra 3 € de bajada de bandera y 1,20 € por kilómetro». Con una <b>tabla</b> de valores, útil para datos medidos. Con una <b>gráfica</b>, que muestra de un vistazo cómo se comporta. Y con una <b>fórmula</b> o expresión algebraica, y = 1,2x + 3, que permite calcular cualquier valor exacto. Saber <mark>pasar de una forma a otra</mark> es una de las destrezas clave del tema: de la fórmula se obtiene la tabla dando valores, y de la tabla, la gráfica.</p>` },
    ],
    "Crecimiento, máximos y mínimos": [
      { html: `<h3>La tasa de variación media</h3><p>La <b>tasa de variación media</b> (TVM) de una función en un intervalo [a, b] mide cuánto cambia, por término medio, la y por cada unidad que avanza la x: <mark>TVM = (f(b) − f(a)) / (b − a)</mark>. Geométricamente es la <b>pendiente</b> del segmento que une los dos puntos de la gráfica. Si es positiva, la función ha crecido en ese intervalo; si es negativa, ha decrecido. En la vida real es una velocidad media: si un coche recorre 180 km entre las 2 h y las 4 h, su TVM es 90 km/h. Es la base de lo que en Bachillerato será la derivada.</p><div class="formula"><span>f(x) = x² en [1, 3]: TVM = (9 − 1) / (3 − 1) = 4</span></div>`, video: { id: "2RBCifEcV7w", titulo: "Tasa de variación media", canal: "unicoos", vistas: 360060 } },
    ],
    "Continuidad": [
      { html: `<h3>Funciones definidas a trozos</h3><p>Algunas funciones tienen una fórmula distinta según el tramo de x. Por ejemplo, una tarifa de móvil cuesta 10 € fijos hasta 5 GB y, a partir de ahí, 2 € más por cada GB: f(x) = 10 si 0 ≤ x ≤ 5, y f(x) = 10 + 2(x − 5) si x &gt; 5. Para representarlas se dibuja <b>cada trozo solo en su intervalo</b> y se marcan los extremos con un punto <b>relleno</b> si el valor está incluido o <b>hueco</b> si no lo está. En los puntos donde cambia la fórmula hay que estudiar si la función es <mark>continua</mark> o da un salto.</p>` },
    ],
    "Simetrías y periodicidad": [
      { html: `<h3>Tendencias y asíntotas</h3><p>La <b>tendencia</b> de una función es lo que le ocurre cuando x se hace muy grande o muy pequeña, o cuando se acerca a un valor concreto. Si la gráfica se acerca cada vez más a una recta sin llegar a tocarla, esa recta es una <b>asíntota</b>. La función y = 1/x tiene una asíntota <b>horizontal</b>, y = 0, porque al crecer x el valor se acerca a 0; y una <b>vertical</b>, x = 0, porque cerca de 0 los valores se disparan. Muchos fenómenos reales tienen tendencias: la temperatura de un café que se enfría tiende a la <mark>temperatura ambiente</mark>.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Calcula la TVM de f(x) = x² − 4x en [0, 2] y en [2, 5] e interpreta.", pasos: ["f(0) = 0, f(2) = −4, f(5) = 5.", "En [0, 2]: (−4 − 0) / 2 = −2, la función decrece.", "En [2, 5]: (5 − (−4)) / 3 = 3, la función crece."], resultado: "TVM = −2 y TVM = 3: decrece y luego crece (mínimo en x = 2)." },
    { enunciado: "Halla el dominio de f(x) = √(x − 3) y de g(x) = 5 / (x² − 4).", pasos: ["Una raíz cuadrada exige radicando ≥ 0: x − 3 ≥ 0, x ≥ 3.", "Un cociente no existe donde el denominador es 0: x² − 4 = 0 en x = ±2.", "Dom g = ℝ − {−2, 2}."], resultado: "Dom f = [3, +∞); Dom g = ℝ − {−2, 2}." },
    { enunciado: "Un taxi cobra 3 € más 1,20 € por km. Escribe la función, haz una tabla y calcula el precio de 12 km.", pasos: ["Fórmula: P(x) = 1,2x + 3.", "Tabla: x = 0 → 3; x = 5 → 9; x = 10 → 15.", "P(12) = 14,4 + 3 = 17,4."], resultado: "P(x) = 1,2x + 3; 12 km cuestan 17,40 €." },
  ],
  errores: [
    "Confundir dominio (valores de x) con recorrido (valores de y).",
    "Restar en distinto orden arriba y abajo al calcular la TVM.",
    "Unir con una línea los dos trozos de una función definida a trozos aunque haya un salto.",
    "Olvidar que un denominador no puede ser 0 ni una raíz par puede tener radicando negativo.",
    "Pensar que una función nunca puede cortar a su asíntota horizontal.",
  ],
  ejercicios: [
    { q: "¿Es función la relación que asocia a cada número su raíz cuadrada (con las dos raíces)? ¿Por qué?", sol: "No: a cada x positivo le corresponderían dos valores de y." },
    { q: "Halla el dominio de f(x) = 1 / (x − 7).", sol: "ℝ − {7}." },
    { q: "Halla el dominio de f(x) = √(6 − 2x).", sol: "6 − 2x ≥ 0: x ≤ 3, es decir, (−∞, 3]." },
    { q: "Calcula la TVM de f(x) = 3x − 1 en [2, 6]. ¿Qué observas?", sol: "(17 − 5) / 4 = 3: coincide con la pendiente, porque es una recta." },
    { q: "Un ciclista está en el km 12 a las 10:00 y en el km 48 a las 11:30. ¿Cuál es su velocidad media?", sol: "36 km / 1,5 h = 24 km/h." },
    { q: "Estudia si f(x) = x² es par, impar o ninguna.", sol: "f(−x) = x² = f(x): es par, simétrica respecto al eje Y." },
    { q: "Representa f(x) = 2 si x < 1 y f(x) = x + 1 si x ≥ 1. ¿Es continua en x = 1?", sol: "Por la izquierda vale 2 y en x = 1 vale 2: no hay salto, es continua." },
    { q: "Indica las asíntotas de y = 1/(x − 2).", sol: "Vertical x = 2 y horizontal y = 0." },
    { q: "Indica el periodo de una función que repite sus valores cada 24 horas, como la temperatura diaria.", sol: "24 horas." },
    { q: "Una función crece en (−∞, 1) y decrece en (1, +∞). ¿Qué ocurre en x = 1?", sol: "Tiene un máximo relativo." },
  ],
  quiz: [
    { q: "La TVM en [a, b] es…", o: ["(f(b) − f(a)) / (b − a)", "f(b) − f(a)", "(b − a) / (f(b) − f(a))"], a: 0, e: "La pendiente media." },
    { q: "Si la TVM es negativa, en ese intervalo la función…", o: ["crece", "decrece", "es constante"], a: 1, e: "Ha bajado por término medio." },
    { q: "En una función a trozos, un punto hueco indica que el valor…", o: ["está incluido", "no está incluido", "es 0"], a: 1, e: "Relleno: incluido." },
    { q: "y = 1/x tiene asíntota horizontal en…", o: ["y = 1", "y = 0", "x = 1"], a: 1, e: "Los valores se acercan a 0." },
    { q: "La fórmula de una función permite…", o: ["calcular cualquier valor exacto", "solo dibujar", "solo hacer tablas"], a: 0, e: "Es la forma más precisa." },
  ],
  tarjetas: [
    ["Tasa de variación media", "TVM = (f(b) − f(a)) / (b − a): pendiente media en [a, b]."],
    ["Función a trozos", "Función con una fórmula distinta en cada intervalo."],
    ["Asíntota", "Recta a la que se acerca la gráfica cada vez más."],
  ],
});
