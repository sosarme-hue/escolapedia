// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Potencias, radicales y logaritmos",
  minutos: 45,
  objetivos: ["Operar con potencias de exponente entero y fraccionario", "Simplificar, extraer factores y racionalizar radicales", "Entender el logaritmo como la operación inversa de la potencia y usar sus propiedades"],
  claves: ["exponente", "radical", "índice", "racionalizar", "logaritmo", "base"],
  pregunta: {
    texto: "Una bacteria se divide en dos cada hora. Si empiezas con una, ¿cuántas horas tardarás en tener más de 1.000 bacterias?",
    respuesta: "Buscamos el exponente de 2ⁿ = 1.000. Esa pregunta, «<mark>a qué número hay que elevar la base</mark>», la responde el <b>logaritmo</b>: log₂ 1.000 ≈ 9,97. En <b>10 horas</b> ya hay 1.024 bacterias.",
  },
  bloques: [
    {
      html: `<h3>Propiedades de las potencias</h3><p>Una potencia aⁿ es multiplicar la base a por sí misma n veces. Las propiedades permiten operar sin calcular:</p>
      <div class="formula"><span>aᵐ · aⁿ = aᵐ⁺ⁿ</span><span class="op">·</span><span>aᵐ : aⁿ = aᵐ⁻ⁿ</span><span class="op">·</span><span>(aᵐ)ⁿ = aᵐ·ⁿ</span></div>
      <p>Y dos que sorprenden: <mark>a⁰ = 1</mark> y <mark>a⁻ⁿ = 1 / aⁿ</mark>. Por ejemplo, 2⁻³ = 1/8.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escalera de potencias de 2: cada escalón a la izquierda divide entre 2, hasta 2 elevado a 0 igual a 1 y 2 elevado a menos 1 igual a un medio">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[-2, "1/4"], [-1, "1/2"], [0, "1"], [1, "2"], [2, "4"], [3, "8"]].map(([e, v], i) => `<rect x="${14 + i * 40}" y="${130 - i * 18}" width="36" height="${36 + i * 18}" rx="6" fill="${e < 0 ? "var(--red)" : e === 0 ? "var(--hl)" : "var(--pen)"}" opacity="${e === 0 ? 1 : 0.85}"/>
          <text x="${32 + i * 40}" y="${122 - i * 18}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>2${["⁻²", "⁻¹", "⁰", "¹", "²", "³"][i]}</text>
          <text x="${32 + i * 40}" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="${e === 0 ? "var(--hl-ink)" : "#fff"}" ${F}>${v}</text>`).join("")}
        <text x="110" y="24" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>← dividir entre 2 · multiplicar por 2 →</text></svg>`,
    },
    {
      html: `<h3>Radicales: potencias de exponente fraccionario</h3><p>La raíz n-ésima es una potencia con exponente fracción: <mark>ⁿ√aᵐ = aᵐ/ⁿ</mark>. Así √x = x¹ᐟ² y ∛8 = 8¹ᐟ³ = 2. Con esta idea, las propiedades de las potencias sirven también para las raíces.</p>
      <div class="formula"><span>√a · √b = √(a·b)</span><span class="op">·</span><span>√a / √b = √(a/b)</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Equivalencia entre la raíz cúbica de 8 y 8 elevado a un tercio, que valen 2; un cubo de volumen 8 tiene arista 2">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M40 140 h60 v-60 h-60 z" fill="var(--pen)" opacity=".18" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M40 80 l24 -24 h60 l-24 24 M100 80 l24 -24 v60 l-24 24" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M70 80 v60 M40 110 h60" stroke="var(--pen)" stroke-width="1.5" stroke-dasharray="3 3"/>
        <g ${F} font-weight="700"><text x="70" y="160" text-anchor="middle" font-size="13" fill="var(--pen)">arista 2</text><text x="88" y="114" font-size="12" fill="var(--ink)">V = 8</text>
        <text x="190" y="80" text-anchor="middle" font-size="22" fill="var(--ink)">∛8</text><text x="190" y="108" text-anchor="middle" font-size="18" fill="var(--muted)">=</text><text x="190" y="136" text-anchor="middle" font-size="22" fill="var(--red)">8¹ᐟ³ = 2</text></g></svg>`,
    },
    {
      html: `<h3>Simplificar y racionalizar</h3><p>Para <b>extraer factores</b>, descompón y saca lo que forme la potencia del índice: √50 = √(25·2) = <mark>5√2</mark>. <b>Racionalizar</b> es quitar la raíz del denominador multiplicando arriba y abajo por la raíz:</p>
      <div class="formula"><span>3 / √2 = 3·√2 / (√2·√2) = 3√2 / 2</span></div>
      <p>Si hay un binomio, se multiplica por el <b>conjugado</b>: (a + √b)(a − √b) = a² − b.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Extraer factores: raíz de 50 se descompone en 25 por 2, el 25 sale como 5 y queda 5 raíz de 2">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="22" font-weight="700" text-anchor="middle">
          <text x="60" y="60" fill="var(--ink)">√50</text><text x="130" y="60" fill="var(--muted)">=</text><text x="200" y="60" fill="var(--ink)">√(<tspan fill="var(--leaf)">25</tspan>·2)</text>
          <path d="M180 74 Q 150 110 112 126" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
          <text x="96" y="140" fill="var(--leaf)">5</text><text x="140" y="140" fill="var(--ink)">√2</text>
        </g><text x="130" y="168" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>el cuadrado perfecto sale fuera de la raíz</text></svg>`,
    },
    {
      html: `<h3>¿Qué es un logaritmo?</h3><p>El logaritmo responde a la pregunta «¿a qué exponente elevo la base para obtener este número?».</p><div class="formula"><span>logₐ x = y</span><span class="op">⇔</span><span>aʸ = x</span></div>
      <p>Así, log₂ 8 = 3 porque 2³ = 8, y <mark>log 1.000 = 3</mark> (si no se escribe la base, es 10). El logaritmo neperiano <b>ln</b> usa la base e ≈ 2,718.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo entre potencia y logaritmo: 2 elevado a 3 da 8, y logaritmo en base 2 de 8 da 3">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="66" width="80" height="48" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><rect x="160" y="66" width="80" height="48" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="60" y="97" font-size="22" fill="var(--pen)">3</text><text x="200" y="97" font-size="22" fill="var(--red)">8</text>
        <path d="M80 66 Q 130 10 180 66" fill="none" stroke="var(--pen)" stroke-width="2.5"/><text x="130" y="30" font-size="14" fill="var(--pen)">2³ = 8</text>
        <path d="M180 114 Q 130 170 80 114" fill="none" stroke="var(--red)" stroke-width="2.5"/><text x="130" y="160" font-size="14" fill="var(--red)">log₂ 8 = 3</text></g></svg>`,
    },
    {
      html: `<h3>Propiedades de los logaritmos</h3><p>Convierten productos en sumas, y por eso se inventaron para calcular rápido:</p>
      <div class="formula"><span>log(a·b) = log a + log b</span></div><div class="formula"><span>log(a/b) = log a − log b</span></div><div class="formula"><span>log(aⁿ) = n · log a</span></div>
      <p>Para usar otra base con la calculadora: <mark>logₐ x = log x / log a</mark>. En la bacteria: log₂ 1.000 = 3 / 0,301 ≈ 9,97.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala logarítmica: 1, 10, 100, 1000 están a la misma distancia, cada salto multiplica por 10">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 100 H 240" stroke="var(--ink)" stroke-width="2"/>
        ${["1", "10", "100", "1.000"].map((v, i) => `<path d="M${36 + i * 62} 92 V 108" stroke="var(--ink)" stroke-width="2"/><text x="${36 + i * 62}" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${v}</text><text x="${36 + i * 62}" y="84" text-anchor="middle" font-size="12" fill="var(--pen)" ${F}>log = ${i}</text>`).join("")}
        ${[0, 1, 2].map((i) => `<path d="M${42 + i * 62} 60 Q ${67 + i * 62} 40 ${92 + i * 62} 60" fill="none" stroke="var(--red)" stroke-width="2"/><text x="${67 + i * 62}" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>×10</text>`).join("")}
        <text x="130" y="160" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>así se miden los terremotos y los decibelios</text></svg>`,
    },
  ],
  figura: {
    titulo: "Potencia, raíz y logaritmo: tres caras de la misma operación",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Con 2 elevado a 3 igual a 8: la potencia busca el 8, la raíz busca la base 2 y el logaritmo busca el exponente 3">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      <text x="320" y="50" text-anchor="middle" font-size="40" font-weight="800" fill="var(--ink)" ${D}><tspan fill="var(--leaf)">2</tspan><tspan dy="-16" font-size="26" fill="var(--red)">3</tspan><tspan dy="16"> = </tspan><tspan fill="var(--pen)">8</tspan></text>
      ${[["POTENCIA", "busco el resultado", "2³ = ?", "var(--pen)"], ["RAÍZ", "busco la base", "∛8 = ?", "var(--leaf)"], ["LOGARITMO", "busco el exponente", "log₂ 8 = ?", "var(--red)"]].map(([n, d, f, c], i) => `<rect x="${24 + i * 202}" y="82" width="188" height="120" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
        <text x="${118 + i * 202}" y="116" text-anchor="middle" font-size="20" font-weight="700" fill="${c}" ${D}>${n}</text><text x="${118 + i * 202}" y="144" text-anchor="middle" font-size="14" fill="var(--muted)" ${F}>${d}</text><text x="${118 + i * 202}" y="180" text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "pZTuEHrnOMg", titulo: "Logaritmos | Introducción conceptos básicos", canal: "Matemáticas profe Alex", vistas: 5929584, megusta: 125779, busqueda: "logaritmos explicación" },
  quiz: [
    { q: "¿Cuánto vale 5⁻²?", o: ["−25", "1/25", "−10"], a: 1, e: "Exponente negativo = inverso: 5⁻² = 1/5² = 1/25." },
    { q: "Escribe 16³ᐟ⁴ como número.", o: ["8", "12", "64"], a: 0, e: "16³ᐟ⁴ = (⁴√16)³ = 2³ = 8." },
    { q: "Extrae factores: √72 =", o: ["6√2", "8√3", "36√2"], a: 0, e: "72 = 36 · 2, así que √72 = 6√2." },
    { q: "¿Cuánto vale log₃ 81?", o: ["27", "4", "3"], a: 1, e: "3⁴ = 81, así que el exponente es 4." },
    { q: "Si log 2 ≈ 0,301, ¿cuánto vale log 8?", o: ["0,903", "2,408", "0,602"], a: 0, e: "log 8 = log 2³ = 3 · log 2 ≈ 0,903." },
  ],
  examen: [
    { q: "Racionaliza 6 / √3.", o: ["2√3", "6√3", "√3 / 2"], a: 0, e: "6√3 / 3 = 2√3." },
    { q: "Simplifica (x³)² · x⁻⁴.", o: ["x²", "x⁵", "x¹⁰"], a: 0, e: "x⁶ · x⁻⁴ = x²." },
    { q: "log₅ 1 =", o: ["1", "5", "0"], a: 2, e: "Cualquier base elevada a 0 da 1." },
  ],
  feynman: ["Por qué a⁰ = 1 y qué significa un exponente negativo", "Qué relación hay entre raíces y potencias de exponente fracción", "Qué pregunta responde un logaritmo", "Cómo resolver el problema de las bacterias con logaritmos"],
  mapa: mapa("POTENCIAS Y LOGARITMOS", "var(--bac)", [
    ["Potencias", "aᵐ·aⁿ = aᵐ⁺ⁿ · a⁻ⁿ = 1/aⁿ", "var(--pen)"],
    ["Radicales", "ⁿ√aᵐ = aᵐ/ⁿ · racionalizar", "var(--leaf)"],
    ["Logaritmo", "logₐ x = y ⇔ aʸ = x", "var(--red)"],
    ["Propiedades log", "producto → suma · aⁿ → n·log", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["a⁻ⁿ =", "1 / aⁿ"],
    ["ⁿ√aᵐ como potencia", "aᵐ/ⁿ"],
    ["¿Qué es racionalizar?", "Quitar las raíces del denominador multiplicando por la raíz o por el conjugado."],
    ["logₐ x = y significa…", "aʸ = x"],
    ["log(a·b) =", "log a + log b"],
  ],
  familias: ["Preguntadle cuántas veces hay que doblar una hoja para que su grosor llegue a la Luna (unas 42): es un problema de potencias.", "Pedidle que explique por qué la escala de los terremotos es logarítmica.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido numérico y algebraico: potencias de exponente racional, radicales y logaritmos (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Doblar papel y registrar el grosor para introducir el crecimiento exponencial.", "Usar la escala de Richter o los decibelios como contexto real del logaritmo.", "Dominó de equivalencias entre raíces y potencias de exponente fraccionario."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Logaritmo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Logaritmo" },
  ],
  revisado: "2026-11-12",
};
