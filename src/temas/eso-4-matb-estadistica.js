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
