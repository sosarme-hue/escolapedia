// Matemáticas 3º ESO: funciones y gráficas. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, ejes, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Funciones y gráficas",
  minutos: 60,
  objetivos: ["Reconocer cuándo una relación entre dos variables es una función", "Expresar una función con un enunciado, una tabla, una gráfica o una fórmula", "Estudiar dominio, recorrido, cortes con los ejes, crecimiento, máximos y mínimos", "Interpretar gráficas de situaciones reales"],
  claves: ["función", "variable independiente", "dominio", "recorrido", "creciente", "máximo"],
  pregunta: {
    texto: "En una app de bicis ves la gráfica de tu ruta: altura frente a distancia. ¿Cómo sabes dónde está la cuesta más dura?",
    respuesta: "Donde la gráfica <mark>sube más inclinada</mark>. Una gráfica cuenta una historia: dónde sube y baja la función, dónde alcanza su punto más alto y cuánto cambia en cada tramo. Leerla bien es una destreza que usarás en ciencias, en economía y en tu día a día.",
  },
  bloques: [
    {
      html: `<h3>Qué es una función</h3><p>Una <b>función</b> es una relación entre dos variables que asigna a cada valor de la primera, x, <mark>un único valor</mark> de la segunda, y. Se escribe y = f(x). La x es la <b>variable independiente</b> (la que elegimos) y la y, la <b>variable dependiente</b> (la que resulta).</p><p>El precio de unas manzanas depende del peso: es una función. En cambio, la relación «persona → número de teléfono» no lo es si alguien tiene dos teléfonos. En una gráfica, se reconoce una función porque <b>ninguna recta vertical</b> la corta en más de un punto.</p>`,
      svg: svg("A la izquierda una curva que es función porque cada recta vertical la corta una vez; a la derecha una circunferencia que no es función porque una vertical la corta dos veces", `<path d="M20 130 Q 60 20 120 90" fill="none" stroke="var(--leaf)" stroke-width="3"/><path d="M70 20 V 150" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 4"/><circle cx="70" cy="64" r="5" fill="var(--leaf)"/>
        <circle cx="190" cy="85" r="45" fill="none" stroke="var(--red)" stroke-width="3"/><path d="M200 20 V 150" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 4"/><circle cx="200" cy="41" r="5" fill="var(--red)"/><circle cx="200" cy="129" r="5" fill="var(--red)"/>
        ${t(70, 170, "función ✓", { c: "var(--leaf)", s: 13 })}${t(190, 170, "no es función ✗", { c: "var(--red)", s: 13 })}`),
      video: { id: "Ll7xfe3HoZE", titulo: "Qué es función | Concepto de función", canal: "Matemáticas profe Alex", vistas: 7746190, megusta: 0 },
    },
    {
      html: `<h3>Formas de expresar una función</h3><ul><li><b>Enunciado</b>: «Un taxi cobra 3 € de bajada de bandera y 1,20 € por kilómetro».</li><li><b>Tabla de valores</b>: pares (x, y) concretos.</li><li><b>Fórmula</b> o expresión algebraica: y = 3 + 1,2x.</li><li><b>Gráfica</b>: los puntos (x, y) dibujados en unos ejes cartesianos.</li></ul>${tabla(["km (x)", "0", "1", "5", "10"], [["€ (y)", "3", "4,20", "9", "15"]])}<p>Cada forma tiene ventajas: la fórmula permite calcular cualquier valor; la gráfica deja ver de un vistazo cómo se comporta; la tabla es útil para datos medidos.</p>`,
    },
    {
      html: `<h3>Dominio y recorrido</h3><p>El <b>dominio</b>, Dom f, es el conjunto de valores de x para los que la función existe. El <b>recorrido</b> o imagen, Im f, es el conjunto de valores que toma y.</p><p>En una gráfica, el dominio se lee <mark>proyectando sobre el eje X</mark> y el recorrido proyectando sobre el eje Y. Con fórmulas, hay que excluir los valores que no se pueden calcular: en y = 1/x, x no puede ser 0; en y = √x, x no puede ser negativa. En un contexto real también hay límites: el tiempo o una longitud no pueden ser negativos.</p><p>Los intervalos se escriben con corchetes si el extremo está incluido, [2, 5], y con paréntesis si no, (2, 5).</p>`,
      svg: svg("Gráfica de una función definida entre x igual a menos 2 y x igual a 4; su dominio es de menos 2 a 4 y su recorrido de 0 a 4", `${ejes(80, 140, 20, [-3, 8], [-1, 6])}<path d="M40 120 Q 80 40 120 80 T 160 60" fill="none" stroke="var(--pen)" stroke-width="3"/><circle cx="40" cy="120" r="4" fill="var(--pen)"/><circle cx="160" cy="60" r="4" fill="var(--pen)"/>
        <path d="M40 146 H 160" stroke="var(--red)" stroke-width="4"/><path d="M74 60 V 120" stroke="var(--leaf)" stroke-width="4"/>
        ${t(100, 166, "dominio [−2, 4]", { c: "var(--red)", s: 11 })}${t(30, 90, "recorrido", { c: "var(--leaf)", s: 10, a: "middle" })}`),
    },
    {
      html: `<h3>Cortes con los ejes</h3><p>Los <b>cortes con el eje X</b> son los puntos en los que y = 0. Se calculan resolviendo la ecuación <mark>f(x) = 0</mark>. Pueden ser varios o ninguno.</p><p>El <b>corte con el eje Y</b> es el punto en el que x = 0: se calcula <mark>f(0)</mark>. Como una función solo da un valor para cada x, hay como máximo un corte con el eje Y.</p><p>Ejemplo: f(x) = x² − 4. Corte con Y: f(0) = −4 → (0, −4). Cortes con X: x² − 4 = 0 → x = ±2 → (2, 0) y (−2, 0).</p>`,
    },
    {
      html: `<h3>Crecimiento y decrecimiento</h3><p>Leyendo la gráfica de <b>izquierda a derecha</b>:</p><ul><li>Una función es <b>creciente</b> en un intervalo si, al aumentar x, aumenta y: la gráfica sube.</li><li>Es <b>decreciente</b> si, al aumentar x, disminuye y: la gráfica baja.</li><li>Es <b>constante</b> si y no cambia: la gráfica es horizontal.</li></ul><p>El crecimiento se expresa con intervalos de x, no de y. Por ejemplo: «crece en (−∞, 1) y decrece en (1, +∞)».</p>`,
    },
    {
      html: `<h3>Máximos y mínimos</h3><p>Un <b>máximo relativo</b> es un punto en el que la función pasa de crecer a decrecer: es más alto que los puntos cercanos. Un <b>mínimo relativo</b> es donde pasa de decrecer a crecer.</p><p>El <b>máximo absoluto</b> es el valor más alto de toda la función y el <b>mínimo absoluto</b>, el más bajo (si existen). Una función puede tener varios máximos relativos pero solo un valor máximo absoluto. En la gráfica de temperaturas de un día, el máximo suele estar hacia las 15 h y el mínimo, poco antes del amanecer.</p>`,
      svg: svg("Curva que crece hasta un máximo, decrece hasta un mínimo y vuelve a crecer", `${ejes(20, 150, 20, [0, 11], [0, 6])}<path d="M24 130 C 60 20, 80 20, 110 80 S 160 150, 200 90 L 236 40" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <circle cx="70" cy="47" r="6" fill="var(--red)"/><circle cx="150" cy="115" r="6" fill="var(--leaf)"/>
        ${t(70, 32, "máximo", { c: "var(--red)", s: 12 })}${t(150, 140, "mínimo", { c: "var(--leaf)", s: 12 })}${t(36, 82, "crece", { c: "var(--muted)", s: 10, a: "start" })}${t(116, 60, "decrece", { c: "var(--muted)", s: 10, a: "start" })}${t(200, 70, "crece", { c: "var(--muted)", s: 10, a: "end" })}`),
    },
    {
      html: `<h3>Continuidad y tendencia</h3><p>Una función es <b>continua</b> si se puede dibujar <mark>sin levantar el lápiz</mark>. Si hay saltos o huecos, es <b>discontinua</b> en esos puntos. El precio de aparcar en un parking que cobra por horas completas es discontinuo: va «a saltos», con una gráfica en escalera.</p><p>La <b>tendencia</b> describe qué hace la función cuando x se hace muy grande: puede crecer sin límite, acercarse a un valor fijo (como la temperatura de un café que se enfría hasta la del ambiente) o repetirse.</p>`,
    },
    {
      html: `<h3>Funciones periódicas y simetrías</h3><p>Una función es <b>periódica</b> si su gráfica se repite cada cierto intervalo, llamado <b>período</b>. Ejemplos: la altura de una noria, las mareas (unas 12 h 25 min) o el ritmo del corazón en un electrocardiograma.</p><p>Una función es <b>simétrica respecto al eje Y</b> (función par) si f(−x) = f(x), como y = x². Es <b>simétrica respecto al origen</b> (función impar) si f(−x) = −f(x), como y = x³. Reconocer simetrías ahorra la mitad del trabajo al dibujar.</p>`,
    },
    {
      html: `<h3>Interpretar gráficas de la vida real</h3><p>Para interpretar una gráfica pregúntate siempre:</p><ol><li>¿Qué variable hay en cada eje y en qué <b>unidades</b>?</li><li>¿Dónde crece, decrece o se mantiene constante, y qué significa eso en el contexto?</li><li>¿Cuáles son el máximo y el mínimo?</li><li>¿Dónde cambia más deprisa (tramo más inclinado)?</li></ol><p>Ejemplo: en una gráfica distancia–tiempo de un paseo, un tramo horizontal significa que la persona está <mark>parada</mark>, y un tramo descendente, que vuelve a casa.</p>`,
      svg: svg("Gráfica distancia tiempo de un paseo: sube, se mantiene horizontal en una parada y baja al volver", `${ejes(30, 150, 20, [0, 10], [0, 6])}<path d="M30 150 L 90 70 L 150 70 L 230 150" fill="none" stroke="var(--pen)" stroke-width="3"/>
        ${t(52, 100, "ida", { c: "var(--pen)", s: 11, a: "end" })}${t(120, 62, "parada", { c: "var(--red)", s: 11 })}${t(200, 100, "vuelta", { c: "var(--pen)", s: 11, a: "start" })}${t(130, 172, "tiempo (min)", { c: "var(--muted)", s: 10 })}${t(34, 22, "distancia (km)", { c: "var(--muted)", s: 10, a: "start" })}`),
    },
  ],
  figura: {
    titulo: "Cómo estudiar una función",
    svg: `<svg viewBox="0 0 640 280" role="img" aria-label="Pasos: dominio y recorrido, cortes con los ejes, crecimiento y decrecimiento, máximos y mínimos, continuidad y tendencia">
      <rect width="640" height="280" rx="16" fill="var(--paper)"/>
      ${[["1. Dominio y recorrido", "proyecta sobre los ejes X e Y", "var(--pen)"], ["2. Cortes con los ejes", "f(x) = 0 para el eje X · f(0) para el eje Y", "var(--leaf)"], ["3. Crecimiento", "de izquierda a derecha: sube, baja, constante", "var(--red)"], ["4. Máximos y mínimos", "dónde cambia de crecer a decrecer", "var(--inf)"], ["5. Continuidad", "¿se dibuja sin levantar el lápiz?", "var(--hl-ink)"]].map(([n, d, c], i) => `<rect x="20" y="${12 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${41 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="270" y="${41 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "H40lcwlgPMk", titulo: "Dominio y rango de una función", canal: "Matemáticas profe Alex", vistas: 6842507, megusta: 0, busqueda: "dominio y recorrido de una función" },
  quiz: mezcla([
    { q: "En una función, a cada x le corresponde…", o: ["un único valor de y", "dos valores de y", "cualquier número de valores"], a: 0, e: "Es la condición de función." },
    { q: "Si f(x) = 2x − 3, f(4) =", o: ["5", "11", "−5"], a: 0, e: "8 − 3." },
    { q: "El corte con el eje Y de f(x) = x² + 3x − 2 es…", o: ["(0, −2)", "(−2, 0)", "(0, 3)"], a: 0, e: "f(0) = −2." },
    { q: "El dominio de y = 1/x es…", o: ["todos los reales", "todos menos el 0", "los positivos"], a: 1, e: "No se puede dividir entre 0." },
    { q: "Un tramo horizontal en una gráfica distancia–tiempo significa…", o: ["velocidad máxima", "que está parado", "que vuelve"], a: 1, e: "La distancia no cambia." },
    { q: "Una función decreciente…", o: ["baja al avanzar hacia la derecha", "sube", "es horizontal"], a: 0, e: "Al aumentar x, disminuye y." },
    { q: "En un máximo relativo la función pasa de…", o: ["decrecer a crecer", "crecer a decrecer", "ser continua a discontinua"], a: 1, e: "Sube y luego baja." },
    { q: "La altura de una cabina de noria frente al tiempo es una función…", o: ["periódica", "constante", "siempre creciente"], a: 0, e: "Se repite en cada vuelta." },
    { q: "Los cortes con el eje X se hallan resolviendo…", o: ["f(0)", "f(x) = 0", "f(x) = x"], a: 1, e: "Allí y = 0." },
    { q: "La tarifa de un parking por horas completas es una función…", o: ["continua", "discontinua", "periódica"], a: 1, e: "Da saltos." },
  ]),
  examen: mezcla([
    { q: "El dominio de y = √(x − 2) es…", o: ["x ≥ 2", "x > 0", "todos los reales"], a: 0, e: "El radicando debe ser ≥ 0." },
    { q: "f(x) = x² es simétrica respecto…", o: ["al eje Y", "al origen", "al eje X"], a: 0, e: "f(−x) = f(x)." },
    { q: "Los cortes de f(x) = x² − 9 con el eje X son…", o: ["(±3, 0)", "(0, −9)", "(9, 0)"], a: 0, e: "x² = 9." },
  ]),
  feynman: ["Cómo saber si una gráfica es una función", "Qué son el dominio y el recorrido y cómo se leen en una gráfica", "Cómo se calculan los cortes con los ejes", "Qué diferencia hay entre máximo relativo y absoluto"],
  mapa: mapa("FUNCIONES", "var(--eso)", [
    ["Expresión", "enunciado · tabla · fórmula · gráfica", "var(--ink)"],
    ["Dom e Im", "valores de x y de y", "var(--pen)"],
    ["Comportamiento", "crece · decrece · máx · mín", "var(--red)"],
    ["Propiedades", "continuidad · periodicidad · simetría", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Función", "Relación que asigna a cada x un único valor de y."],
    ["Variable independiente", "La x: la que se elige libremente."],
    ["Dominio", "Valores de x para los que la función existe."],
    ["Recorrido", "Valores que toma y."],
    ["Corte con el eje Y", "El punto (0, f(0))."],
    ["Función creciente", "Al aumentar x, aumenta y."],
    ["Máximo relativo", "Punto donde la función pasa de crecer a decrecer."],
    ["Función periódica", "Se repite cada cierto intervalo, llamado período."],
  ],
  familias: ["Mirad juntos la gráfica de temperaturas de la semana en una app del tiempo y localizad máximos y mínimos.", "Dibujad la gráfica distancia–tiempo del camino al instituto.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico y estocástico: concepto de función, formas de representación, características globales y análisis de gráficas en contexto (RD 217/2022, Matemáticas 3º).",
    ideas: ["Contar historias a partir de gráficas sin números y al revés.", "Recoger datos de temperatura o pulso y representarlos.", "GeoGebra para explorar dominio, cortes y extremos."],
  },
  fuentes: [RD, { t: "Agencia Estatal de Meteorología (AEMET): gráficas de datos reales", url: "https://www.aemet.es/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Estudia los cortes con los ejes de f(x) = x² − 2x − 3.",
      pasos: ["Eje Y: f(0) = −3 → (0, −3).", "Eje X: x² − 2x − 3 = 0 → Δ = 4 + 12 = 16 → x = (2 ± 4) / 2.", "x = 3 o x = −1 → (3, 0) y (−1, 0)."],
      resultado: "(0, −3), (3, 0) y (−1, 0)." },
    { enunciado: "La temperatura de un día sube desde 6 °C a las 6 h hasta 22 °C a las 15 h y baja hasta 10 °C a las 24 h. Describe la función.",
      pasos: ["Dominio: [6, 24] horas. Recorrido: [6, 22] °C.", "Creciente en (6, 15), decreciente en (15, 24).", "Máximo absoluto en (15, 22); mínimo absoluto en (6, 6)."],
      resultado: "Crece hasta las 15 h, donde alcanza el máximo de 22 °C, y después decrece." },
    { enunciado: "Halla el dominio de f(x) = 3/(x − 5) y de g(x) = √(2x + 4).",
      pasos: ["f: el denominador no puede ser 0 → x ≠ 5. Dom f = todos los reales menos el 5.", "g: el radicando debe ser ≥ 0 → 2x + 4 ≥ 0 → x ≥ −2.", "Dom g = [−2, +∞)."],
      resultado: "Dom f = ℝ − {5}; Dom g = [−2, +∞)." },
  ],
  errores: [
    "Expresar el crecimiento con intervalos de y en lugar de x.",
    "Leer la gráfica de derecha a izquierda al decidir si crece o decrece.",
    "Confundir los cortes con el eje X (y = 0) con el corte con el eje Y (x = 0).",
    "Pensar que una gráfica distancia–tiempo es el dibujo del camino.",
    "Olvidar las restricciones del contexto al dar el dominio (tiempos negativos, personas decimales).",
  ],
  ejercicios: [
    { q: "¿Es función la relación «a cada número le asigno sus raíces cuadradas»? ¿Y «a cada número su cuadrado»?", sol: "La primera no: al 4 le corresponden 2 y −2. La segunda sí: cada número tiene un único cuadrado." },
    { q: "Una tienda de fotocopias cobra 0,05 € por copia. Escribe la fórmula, haz una tabla para 0, 10, 50 y 100 copias, y di el dominio.", sol: "y = 0,05x. Tabla: 0 €, 0,50 €, 2,50 €, 5 €. Dominio: números naturales (0, 1, 2, …)." },
    { q: "Si f(x) = x² − 3x, calcula f(0), f(−2) y f(3).", sol: "f(0) = 0; f(−2) = 4 + 6 = 10; f(3) = 9 − 9 = 0." },
    { q: "Halla los cortes con los ejes de f(x) = 2x − 6.", sol: "Eje Y: (0, −6). Eje X: 2x − 6 = 0 → (3, 0)." },
    { q: "Halla los cortes con los ejes de f(x) = x² − x − 6.", sol: "Eje Y: (0, −6). Eje X: x = 3 y x = −2 → (3, 0) y (−2, 0)." },
    { q: "Halla el dominio de f(x) = 1/(x + 3).", sol: "x + 3 ≠ 0 → x ≠ −3. Dom f = ℝ − {−3}." },
    { q: "Halla el dominio de f(x) = √(6 − x).", sol: "6 − x ≥ 0 → x ≤ 6. Dom f = (−∞, 6]." },
    { q: "Una función crece de x = 0 a x = 3, donde vale 5, decrece hasta x = 7, donde vale −1, y crece de nuevo hasta x = 9, donde vale 4. Indica máximos y mínimos.", sol: "Máximo relativo (y absoluto) en (3, 5); mínimo relativo (y absoluto) en (7, −1)." },
    { q: "¿Es f(x) = x³ − x par, impar o ninguna?", sol: "f(−x) = −x³ + x = −(x³ − x) = −f(x): es impar (simétrica respecto al origen)." },
    { q: "Describe la gráfica distancia–tiempo de alguien que camina 10 min a velocidad constante, espera 5 min al autobús y viaja 15 min más deprisa.", sol: "Un tramo recto ascendente poco inclinado (0–10 min), un tramo horizontal (10–15 min) y un tramo recto ascendente más inclinado (15–30 min)." },
  ],
};
