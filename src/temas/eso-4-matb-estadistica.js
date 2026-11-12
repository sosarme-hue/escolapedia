// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Nube de puntos a partir de pares [x, y] en un marco 260x180.
const nube = (pts, c) => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}" fill-opacity=".8"/>`).join("");
const marco = `<path d="M24 160 H 250 M24 10 V 160" stroke="var(--muted)" stroke-width="2"/>`;
const sube = [[40, 140], [56, 132], [70, 120], [84, 124], [100, 104], [118, 100], [130, 86], [148, 84], [160, 70], [178, 62], [194, 56], [210, 40], [226, 36]];

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Estadística bidimensional",
  minutos: 40,
  objetivos: ["Organizar datos de dos variables y representarlos en una nube de puntos", "Interpretar la correlación: positiva, negativa, fuerte o débil", "Usar la recta de regresión para hacer predicciones con sentido crítico"],
  claves: ["variable bidimensional", "nube de puntos", "correlación", "coeficiente r", "recta de regresión", "predicción"],
  pregunta: {
    texto: "¿Los alumnos que duermen más sacan mejores notas? ¿Cómo lo comprobarías con datos de tu clase?",
    respuesta: "Recogiendo <mark>dos datos de cada alumno</mark> (horas de sueño y nota) y dibujando cada par como un punto. Si la nube «sube», hay <b>correlación positiva</b>. Pero cuidado: que dos cosas vayan juntas <b>no demuestra</b> que una cause la otra.",
  },
  bloques: [
    {
      html: `<h3>Variables bidimensionales y nube de puntos</h3><p>Cuando estudiamos <b>dos variables a la vez</b> en cada individuo (altura y peso, horas de estudio y nota) tenemos pares (x, y). Cada par se dibuja como un punto: es la <mark>nube de puntos</mark> o diagrama de dispersión.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Nube de puntos de horas de estudio y nota que sube de izquierda a derecha">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${marco}${nube(sube, "var(--pen)")}
        <g ${F} font-size="12" font-weight="700" fill="var(--muted)"><text x="140" y="176" text-anchor="middle">horas de estudio (x)</text><text x="30" y="20">nota (y)</text></g></svg>`,
    },
    {
      html: `<h3>Tipos de correlación</h3><p>La <b>correlación</b> mide cómo se relacionan las dos variables:</p><ul><li><b>Positiva</b>: cuando una sube, la otra tiende a subir.</li><li><b>Negativa</b>: cuando una sube, la otra tiende a bajar.</li><li><b>Nula</b>: no hay relación clara.</li></ul><p>Cuanto más se parecen los puntos a una recta, <mark>más fuerte</mark> es la correlación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres nubes: correlación positiva, negativa y nula">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[0, (i) => 130 - i * 9 + ((i * 37) % 13) - 6, "var(--leaf)", "positiva"], [1, (i) => 40 + i * 9 + ((i * 29) % 13) - 6, "var(--red)", "negativa"], [2, (i) => 50 + ((i * 53) % 80), "var(--muted)", "nula"]].map(([g, f, c, n]) => `<rect x="${8 + g * 84}" y="20" width="76" height="126" rx="8" fill="var(--card)" stroke="var(--line)"/>
          ${[...Array(10)].map((_, i) => `<circle cx="${16 + g * 84 + i * 6.5}" cy="${f(i)}" r="3.5" fill="${c}"/>`).join("")}
          <text x="${46 + g * 84}" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${n}</text>`).join("")}</svg>`,
    },
    {
      html: `<h3>El coeficiente de correlación r</h3><p>Es un número entre <b>−1 y 1</b> que resume la correlación. Su signo dice el <mark>sentido</mark> y su tamaño la <mark>fuerza</mark>: r cerca de 1 o −1 es correlación fuerte; cerca de 0, débil o nula. Se calcula con la calculadora en modo estadística (REG o LINE).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Regla del coeficiente r de menos 1 a 1: fuerte negativa, débil, nula, débil y fuerte positiva">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <defs><linearGradient id="gr" x1="0" x2="1"><stop offset="0" stop-color="var(--red)"/><stop offset=".5" stop-color="var(--line)"/><stop offset="1" stop-color="var(--leaf)"/></linearGradient></defs>
        <rect x="20" y="80" width="220" height="20" rx="10" fill="url(#gr)"/>
        ${[["−1", 20], ["−0,5", 75], ["0", 130], ["0,5", 185], ["1", 240]].map(([t, x]) => `<path d="M${x} 104 v 8" stroke="var(--ink)" stroke-width="2"/><text x="${x}" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="34" y="66" fill="var(--red)">fuerte −</text><text x="130" y="66" fill="var(--muted)">nula</text><text x="226" y="66" fill="var(--leaf)">fuerte +</text><text x="130" y="158" fill="var(--ink)">r = 0,92 → fuerte y positiva</text></g></svg>`,
    },
    {
      html: `<h3>La recta de regresión</h3><p>Es la recta que <mark>mejor se ajusta</mark> a la nube: pasa por el punto medio (x̄, ȳ) y deja los puntos lo más cerca posible. Su ecuación y = a + bx la da la calculadora, y sirve para <b>predecir</b>: si y = 3 + 0,8x, con 5 horas de estudio se espera una nota de 3 + 4 = 7.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Nube de puntos con la recta de regresión que mejor se ajusta y el punto medio marcado">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${marco}${nube(sube, "var(--pen)")}
        <path d="M28 146 L 240 30" stroke="var(--red)" stroke-width="3"/><circle cx="133" cy="88" r="7" fill="var(--hl)" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700"><text x="142" y="112" fill="var(--ink)">(x̄, ȳ)</text><text x="150" y="24" fill="var(--red)">y = a + bx</text></g></svg>`,
    },
    {
      html: `<h3>Predecir con cuidado</h3><p>Las predicciones son <b>fiables</b> si la correlación es fuerte y si no te alejas del rango de los datos. Además, <mark>correlación no es causalidad</mark>: las ventas de helados y los golpes de calor suben juntos, pero los helados no causan golpes de calor; ambos dependen del verano.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Helados y golpes de calor suben juntos porque los dos dependen del calor: correlación sin causalidad">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="44" r="26" fill="var(--hl)"/><text x="130" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="var(--hl-ink)" ${F}>calor</text>
        <rect x="16" y="120" width="96" height="40" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><rect x="148" y="120" width="96" height="40" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
        <path d="M112 68 L 72 118 M148 68 L 188 118" stroke="var(--ink)" stroke-width="2.5"/><path d="M114 140 H 146" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="5 4"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="64" y="145" fill="var(--pen)">helados</text><text x="196" y="145" fill="var(--red)">golpes de calor</text><text x="130" y="176" fill="var(--muted)">van juntos, pero uno no causa el otro</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Cómo leer una nube de puntos",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Cuatro nubes con su coeficiente: fuerte positiva r igual a 0,95, débil positiva 0,4, nula 0 y fuerte negativa menos 0,9">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["fuerte +", "r ≈ 0,95", 1, 4, "var(--leaf)"], ["débil +", "r ≈ 0,4", 0.6, 30, "var(--pen)"], ["nula", "r ≈ 0", 0, 60, "var(--muted)"], ["fuerte −", "r ≈ −0,9", -1, 6, "var(--red)"]].map(([n, r, m, ruido, c], g) => `<g transform="translate(${18 + g * 154} 18)"><rect width="140" height="194" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
        ${[...Array(14)].map((_, i) => { const x = 14 + i * 8.5; const y = 80 - m * (i - 6.5) * 8 + (((i * 47) % 17) - 8) * ruido / 8; return `<circle cx="${x}" cy="${Math.max(16, Math.min(140, y)).toFixed(1)}" r="4" fill="${c}"/>`; }).join("")}
        <text x="70" y="166" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="70" y="184" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${r}</text></g>`).join("")}
    </svg>`,
  },
  video: { id: "kYCyNrPToTc", titulo: "Correlación y regresión lineal con ejemplos", canal: "La clase de Ysa", vistas: 547315, megusta: 10905, busqueda: "correlación y regresión lineal" },
  quiz: [
    { q: "Si al aumentar x la variable y tiende a disminuir, la correlación es…", o: ["Positiva", "Negativa", "Nula"], a: 1, e: "Van en sentidos opuestos." },
    { q: "¿Qué valor de r indica la correlación más fuerte?", o: ["0,5", "−0,95", "0,1"], a: 1, e: "Lo que importa para la fuerza es lo cerca que está de 1 o −1." },
    { q: "La recta de regresión siempre pasa por…", o: ["el origen", "el punto (x̄, ȳ)", "el primer dato"], a: 1, e: "Pasa por el centro de gravedad de la nube." },
    { q: "Con y = 2 + 0,5x, ¿qué valor se predice para x = 10?", o: ["7", "12", "5"], a: 0, e: "2 + 0,5 · 10 = 7." },
    { q: "Si r = 0,9 entre el número de bomberos en un incendio y los daños, ¿los bomberos causan los daños?", o: ["Sí", "No: los incendios grandes causan ambas cosas", "Solo si r = 1"], a: 1, e: "Correlación no es causalidad: hay una tercera variable, el tamaño del incendio." },
  ],
  examen: [
    { q: "¿Qué se representa en una nube de puntos?", o: ["Frecuencias de una variable", "Pares de valores (x, y)", "Porcentajes"], a: 1, e: "Cada individuo es un punto con sus dos valores." },
    { q: "Si los puntos están casi en línea recta descendente, r será aproximadamente…", o: ["−0,95", "0", "0,95"], a: 0, e: "Fuerte y negativa." },
    { q: "¿Es fiable predecir con la recta de regresión si r = 0,15?", o: ["Sí", "No, la correlación es muy débil", "Solo para valores grandes"], a: 1, e: "Con correlación débil la recta apenas representa los datos." },
  ],
  feynman: ["Qué es una variable bidimensional y cómo se dibuja", "Qué significan el signo y el tamaño de r", "Para qué sirve la recta de regresión", "Por qué correlación no significa causalidad"],
  mapa: mapa("ESTADÍSTICA BIDIMENSIONAL", "var(--bac)", [
    ["Nube de puntos", "un punto por individuo", "var(--pen)"],
    ["Correlación", "positiva · negativa · nula", "var(--leaf)"],
    ["Coeficiente r", "de −1 a 1 · signo y fuerza", "var(--inf)"],
    ["Regresión", "predice · ¡no es causa!", "var(--red)"],
  ], 260),
  tarjetas: [
    ["¿Qué es una nube de puntos?", "La representación de pares (x, y), un punto por individuo."],
    ["Correlación negativa", "Al aumentar una variable, la otra tiende a disminuir."],
    ["¿Entre qué valores está r?", "Entre −1 y 1."],
    ["¿Por qué punto pasa la recta de regresión?", "Por (x̄, ȳ), las medias de las dos variables."],
    ["Correlación y causalidad", "Que dos variables vayan juntas no prueba que una cause la otra."],
  ],
  familias: ["Recoged datos en casa (temperatura y consumo de agua, por ejemplo) y dibujad la nube juntos.", "Comentad una noticia que confunda correlación y causalidad.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido estocástico: variables bidimensionales, correlación y regresión lineal, interpretación crítica (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Medir en clase altura y envergadura y calcular r con hoja de cálculo.", "Colección de correlaciones absurdas (spurious correlations) para debatir causalidad.", "Predecir la marca de un compañero con la recta y comprobar el error."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Correlación, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Correlaci%C3%B3n" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Calcular medias, desviaciones típicas y covarianza de una variable bidimensional", "Interpretar la correlación sin confundirla con la causalidad"],
  tras: {
    "Variables bidimensionales y nube de puntos": [
      { html: `<h3>Repaso: media y desviación típica</h3><p>Antes de estudiar dos variables a la vez conviene recordar cómo se resume una. La <b>media</b> x̄ es la suma de los datos dividida entre su número. La <b>varianza</b> mide cuánto se separan los datos de la media: es la media de los cuadrados menos el cuadrado de la media, <mark>σ² = Σx²/N − x̄²</mark>. Su raíz es la <b>desviación típica</b> σ, que se mide en las mismas unidades que los datos. Para comparar la dispersión de variables con distintas unidades se usa el <b>coeficiente de variación</b>, CV = σ / x̄, que suele darse en porcentaje.</p>` },
    ],
    "Tipos de correlación": [
      { html: `<h3>La covarianza</h3><p>La <b>covarianza</b> mide si las dos variables varían juntas. Se calcula como la media de los productos menos el producto de las medias: <mark>σₓᵧ = Σxy/N − x̄ · ȳ</mark>. Si es <b>positiva</b>, cuando una variable crece la otra tiende a crecer; si es <b>negativa</b>, cuando una crece la otra tiende a bajar; si es cercana a cero, no hay relación lineal. Su inconveniente es que depende de las unidades: no es lo mismo medir en metros que en centímetros. Por eso se divide entre las desviaciones típicas y se obtiene el coeficiente de correlación.</p>`, video: { id: "r_ITkER_bh8", titulo: "Covarianza (tabla de datos sin agrupar)", canal: "Ruben Sebastian", vistas: 204314 } },
    ],
    "El coeficiente de correlación r": [
      { html: `<h3>Calcular r paso a paso</h3><p>Para hallar r con pocos datos se organiza una <b>tabla</b> con las columnas x, y, x², y² y x·y, y se suman. Con esas sumas se calculan las medias, las desviaciones típicas y la covarianza, y por último <mark>r = σₓᵧ / (σₓ · σᵧ)</mark>. El resultado siempre está entre −1 y 1. La calculadora científica en modo estadístico (REG o STAT) da r directamente, igual que las hojas de cálculo con la función COEF.DE.CORREL. Conviene igualmente hacer la nube de puntos: un r bajo puede esconder una relación curva, no lineal.</p>${AMP.tabla(["x", "y", "x²", "y²", "xy"], [["1", "2", "1", "4", "2"], ["2", "3", "4", "9", "6"], ["3", "5", "9", "25", "15"], ["4", "6", "16", "36", "24"], ["<b>10</b>", "<b>16</b>", "<b>30</b>", "<b>74</b>", "<b>47</b>"]])}` },
    ],
    "Predecir con cuidado": [
      { html: `<h3>Correlación no es causalidad</h3><p>Que dos variables estén muy correlacionadas no significa que una cause la otra. Las ventas de helados y los ahogamientos están correlacionados, pero no porque los helados ahoguen: ambos aumentan en verano por el calor, que es una <b>variable oculta</b>. Otras veces la correlación es pura <b>casualidad</b>, sobre todo con pocos datos. Para afirmar que algo causa otra cosa hace falta un <mark>experimento controlado</mark>, como los ensayos clínicos de los medicamentos, en los que se compara un grupo tratado con otro que no lo está. Desconfía de los titulares que concluyen causas a partir de una simple correlación.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Con la tabla de la teoría (x: 1, 2, 3, 4; y: 2, 3, 5, 6), calcula r.", pasos: ["Medias: x̄ = 10/4 = 2,5; ȳ = 16/4 = 4.", "σₓ² = 30/4 − 2,5² = 1,25, σₓ ≈ 1,118. σᵧ² = 74/4 − 4² = 2,5, σᵧ ≈ 1,581.", "σₓᵧ = 47/4 − 2,5 · 4 = 1,75.", "r = 1,75 / (1,118 · 1,581) ≈ 0,99."], resultado: "r ≈ 0,99: correlación positiva muy fuerte." },
    { enunciado: "Con los datos anteriores, halla la recta de regresión de y sobre x y estima y para x = 5.", pasos: ["Pendiente: m = σₓᵧ / σₓ² = 1,75 / 1,25 = 1,4.", "Recta: y − 4 = 1,4(x − 2,5), es decir, y = 1,4x + 0,5.", "Para x = 5: y = 7,5."], resultado: "y = 1,4x + 0,5; estimación 7,5." },
    { enunciado: "Las notas de Lengua tienen x̄ = 6 y σ = 1,2; las de Matemáticas, x̄ = 5 y σ = 1,5. ¿Cuál es más dispersa?", pasos: ["CV de Lengua: 1,2 / 6 = 0,20 (20 %).", "CV de Matemáticas: 1,5 / 5 = 0,30 (30 %).", "Se compara el CV, no la desviación típica sola."], resultado: "Matemáticas es más dispersa." },
  ],
  errores: [
    "Concluir que una variable causa la otra solo porque r es alto.",
    "Pensar que r = 0 significa que no hay ninguna relación: puede haber una relación curva.",
    "Olvidar restar el producto de las medias al calcular la covarianza.",
    "Hacer predicciones muy lejos del rango de los datos (extrapolar).",
    "Comparar dispersiones con la desviación típica cuando las medias o las unidades son distintas.",
  ],
  ejercicios: [
    { q: "Calcula la media y la desviación típica de 2, 4, 4, 6, 9.", sol: "x̄ = 5; σ² = 153/5 − 25 = 5,6; σ ≈ 2,37." },
    { q: "¿Qué significa una covarianza negativa?", sol: "Que cuando una variable aumenta, la otra tiende a disminuir." },
    { q: "Clasifica la correlación: horas de estudio y nota; edad de un coche y su precio; número de calzado y nota de Historia.", sol: "Positiva, negativa y nula." },
    { q: "Si σₓᵧ = 12, σₓ = 4 y σᵧ = 5, calcula r e interprétalo.", sol: "r = 12 / 20 = 0,6: correlación positiva moderada." },
    { q: "¿Puede ser r = 1,3? ¿Por qué?", sol: "No: r siempre está entre −1 y 1." },
    { q: "Calcula la covarianza de x: 1, 2, 3; y: 6, 4, 2.", sol: "Σxy/3 = 20/3 ≈ 6,67; x̄ · ȳ = 2 · 4 = 8; σₓᵧ ≈ −1,33." },
    { q: "La recta de regresión del peso (kg) sobre la altura (cm) es y = 0,9x − 90. Estima el peso de alguien de 170 cm.", sol: "0,9 · 170 − 90 = 63 kg." },
    { q: "¿Es fiable usar la recta anterior para estimar el peso de un bebé de 50 cm? ¿Por qué?", sol: "No: daría −45 kg. Es una extrapolación fuera del rango de los datos." },
    { q: "Pon un ejemplo de correlación causada por una variable oculta.", sol: "Uso de crema solar y quemaduras: ambas crecen con los días de sol (también helados y ahogamientos)." },
    { q: "Un conjunto tiene x̄ = 50 y σ = 5, y otro x̄ = 10 y σ = 2. ¿Cuál es más homogéneo?", sol: "CV: 10 % frente a 20 %; el primero es más homogéneo." },
  ],
  quiz: [
    { q: "La covarianza se calcula como…", o: ["Σxy/N − x̄ȳ", "Σx/N", "σₓ · σᵧ"], a: 0, e: "Media de productos menos producto de medias." },
    { q: "Un r alto entre dos variables demuestra que…", o: ["una causa la otra", "están relacionadas linealmente", "son iguales"], a: 1, e: "Correlación no es causalidad." },
    { q: "El coeficiente de variación sirve para…", o: ["comparar dispersiones", "calcular la media", "dibujar la recta"], a: 0, e: "CV = σ / x̄." },
    { q: "Si r = 0, puede haber…", o: ["una relación curva", "una relación lineal perfecta", "covarianza positiva grande"], a: 0, e: "r solo mide relación lineal." },
    { q: "La desviación típica es…", o: ["la raíz de la varianza", "el cuadrado de la varianza", "la media de los datos"], a: 0, e: "Mismas unidades que los datos." },
  ],
  tarjetas: [
    ["Covarianza", "σₓᵧ = Σxy/N − x̄ȳ; su signo indica si las variables crecen juntas."],
    ["Coeficiente de variación", "CV = σ / x̄; compara dispersiones de distintos conjuntos."],
    ["Variable oculta", "Tercera variable que explica la correlación entre otras dos."],
  ],
});
