// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Recta real de -4 a 4 entre x0 y x1.
function recta(y, x0 = 24, x1 = 236) {
  const u = (x1 - x0) / 8;
  const marcas = [...Array(9)].map((_, i) => `<path d="M${x0 + i * u} ${y - 5} V ${y + 5}" stroke="var(--ink)" stroke-width="2"/><text x="${x0 + i * u}" y="${y + 20}" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${i - 4}</text>`).join("");
  return { svg: `<path d="M${x0 - 10} ${y} H ${x1 + 10}" stroke="var(--ink)" stroke-width="2"/>${marcas}`, x: (v) => x0 + (v + 4) * u };
}

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Números reales e intervalos",
  minutos: 35,
  objetivos: ["Clasificar números en naturales, enteros, racionales e irracionales", "Representar números reales en la recta", "Escribir y dibujar intervalos, semirrectas y valores absolutos"],
  claves: ["número irracional", "recta real", "intervalo abierto", "intervalo cerrado", "valor absoluto", "aproximación"],
  pregunta: {
    texto: "La diagonal de un cuadrado de lado 1 mide √2. ¿Podrías escribir ese número con todas sus cifras decimales?",
    respuesta: "No: √2 = 1,41421356… tiene <mark>infinitas cifras decimales que no se repiten</mark>. Es un número <b>irracional</b>: no se puede escribir como fracción. Aun así ocupa un punto exacto de la recta, y se puede dibujar con regla y compás.",
  },
  bloques: [
    {
      html: `<h3>Los conjuntos de números</h3><p>Cada conjunto contiene al anterior: <b>naturales</b> ℕ (0, 1, 2…), <b>enteros</b> ℤ (también los negativos), <b>racionales</b> ℚ (los que son fracción: decimales exactos o periódicos). Los <mark>irracionales</mark> 𝕀 tienen infinitas cifras sin periodo (√2, π, e). Racionales e irracionales juntos forman los <b>reales</b> ℝ.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Conjuntos de números unos dentro de otros: naturales dentro de enteros dentro de racionales; racionales e irracionales forman los reales">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="10" width="240" height="160" rx="14" fill="var(--card)" stroke="var(--bac)" stroke-width="2.5"/>
        <rect x="20" y="34" width="150" height="126" rx="12" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
        <rect x="30" y="58" width="128" height="94" rx="10" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
        <rect x="40" y="92" width="70" height="52" rx="10" fill="none" stroke="var(--inf)" stroke-width="2.5"/>
        <rect x="178" y="34" width="62" height="126" rx="12" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        <g ${F} font-size="12" font-weight="700">
          <text x="18" y="27" fill="var(--bac)">ℝ reales</text><text x="28" y="51" fill="var(--pen)">ℚ racionales  2/3 · 0,7̂</text>
          <text x="38" y="77" fill="var(--leaf)">ℤ enteros  −5</text><text x="48" y="112" fill="var(--inf)">ℕ</text><text x="48" y="132" fill="var(--ink)">0 · 1 · 7</text>
          <text x="186" y="54" fill="var(--red)">𝕀</text><text x="186" y="84" fill="var(--ink)">√2</text><text x="186" y="110" fill="var(--ink)">π</text><text x="186" y="136" fill="var(--ink)">e</text>
        </g></svg>`,
    },
    {
      html: `<h3>La recta real</h3><p>A cada número real le corresponde <mark>un punto de la recta</mark>, y a cada punto un número real: la recta no tiene «huecos». Los racionales se colocan dividiendo la unidad; algunos irracionales como √2 se dibujan con el teorema de Pitágoras.</p>`,
      svg: (() => { const r = recta(110); return `<svg viewBox="0 0 260 180" role="img" aria-label="Recta real con √2 construido como la diagonal de un cuadrado de lado 1 y llevado a la recta con un compás">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${r.svg}
        <rect x="${r.x(0)}" y="${110 - (r.x(1) - r.x(0))}" width="${r.x(1) - r.x(0)}" height="${r.x(1) - r.x(0)}" fill="none" stroke="var(--pen)" stroke-width="2"/>
        <path d="M${r.x(0)} 110 L ${r.x(1)} ${110 - (r.x(1) - r.x(0))}" stroke="var(--red)" stroke-width="2.5"/>
        <path d="M${r.x(1)} ${110 - (r.x(1) - r.x(0))} A ${(r.x(1) - r.x(0)) * Math.SQRT2} ${(r.x(1) - r.x(0)) * Math.SQRT2} 0 0 1 ${r.x(Math.SQRT2)} 110" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 4"/>
        <circle cx="${r.x(Math.SQRT2)}" cy="110" r="5" fill="var(--red)"/>
        <circle cx="${r.x(-2.5)}" cy="110" r="5" fill="var(--leaf)"/>
        <g ${F} font-size="13" font-weight="700"><text x="${r.x(Math.SQRT2) + 4}" y="96" fill="var(--red)">√2</text><text x="${r.x(-2.5)}" y="96" text-anchor="middle" fill="var(--leaf)">−5/2</text></g>
        <text x="130" y="160" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>la diagonal del cuadrado de lado 1 mide √2</text></svg>`; })(),
    },
    {
      html: `<h3>Intervalos</h3><p>Un <b>intervalo</b> es un trozo de la recta entre dos números. El <mark>corchete [ ]</mark> incluye el extremo (punto relleno) y el <mark>paréntesis ( )</mark> lo excluye (punto hueco).</p>
      <div class="formula"><span>[−1, 3] → −1 ≤ x ≤ 3</span></div><div class="formula"><span>(−1, 3) → −1 &lt; x &lt; 3</span></div><div class="formula"><span>[2, +∞) → x ≥ 2</span></div>`,
      svg: (() => { const r = recta(60), s = recta(140); return `<svg viewBox="0 0 260 180" role="img" aria-label="Intervalo cerrado de menos 1 a 3 con puntos rellenos, y semirrecta abierta desde 1 hacia la derecha con punto hueco">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${r.svg}${s.svg}
        <path d="M${r.x(-1)} 60 H ${r.x(3)}" stroke="var(--pen)" stroke-width="6"/><circle cx="${r.x(-1)}" cy="60" r="6" fill="var(--pen)"/><circle cx="${r.x(3)}" cy="60" r="6" fill="var(--pen)"/>
        <path d="M${s.x(1)} 140 H 248" stroke="var(--red)" stroke-width="6"/><circle cx="${s.x(1)}" cy="140" r="6" fill="var(--paper)" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="14" font-weight="700"><text x="130" y="30" text-anchor="middle" fill="var(--pen)">[−1, 3]</text><text x="130" y="112" text-anchor="middle" fill="var(--red)">(1, +∞)</text></g></svg>`; })(),
    },
    {
      html: `<h3>Valor absoluto y distancias</h3><p>El <b>valor absoluto</b> |x| es la <mark>distancia de x al 0</mark>: |−5| = 5 y |5| = 5. La distancia entre dos números es |a − b|. Por eso |x| &lt; 3 significa «x está a menos de 3 del cero», es decir, el intervalo (−3, 3).</p>`,
      svg: (() => { const r = recta(110); return `<svg viewBox="0 0 260 180" role="img" aria-label="Valor absoluto: menos 3 y 3 están a la misma distancia del cero">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${r.svg}
        <path d="M${r.x(-3)} 80 Q ${r.x(-1.5)} 50 ${r.x(0)} 80" fill="none" stroke="var(--leaf)" stroke-width="2.5"/><path d="M${r.x(0)} 80 Q ${r.x(1.5)} 50 ${r.x(3)} 80" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
        <circle cx="${r.x(-3)}" cy="110" r="5" fill="var(--leaf)"/><circle cx="${r.x(3)}" cy="110" r="5" fill="var(--leaf)"/>
        <g ${F} font-size="13" font-weight="700" fill="var(--leaf)"><text x="${r.x(-1.5)}" y="52" text-anchor="middle">3</text><text x="${r.x(1.5)}" y="52" text-anchor="middle">3</text></g>
        <text x="130" y="160" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>|−3| = |3| = 3</text></svg>`; })(),
    },
    {
      html: `<h3>Aproximar y medir el error</h3><p>Los irracionales se usan <b>aproximados</b>: π ≈ 3,14. Se puede <mark>truncar</mark> (cortar cifras) o <mark>redondear</mark> (mirar la siguiente cifra: si es 5 o más, se sube). El <b>error absoluto</b> es |valor real − aproximación| y el <b>error relativo</b> es el error absoluto dividido entre el valor real.</p>
      <div class="formula"><span>π = 3,14159…</span><span class="op">→</span><span>redondeo a centésimas: 3,14 · error ≈ 0,0016</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Lupa sobre la recta: pi está entre 3,14 y 3,15, más cerca de 3,14">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 100 H 240" stroke="var(--ink)" stroke-width="2"/>
        ${[3.13, 3.14, 3.15, 3.16].map((v, i) => `<path d="M${40 + i * 60} 94 V 106" stroke="var(--ink)" stroke-width="2"/><text x="${40 + i * 60}" y="124" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${String(v).replace(".", ",")}</text>`).join("")}
        <circle cx="${100 + 0.159 * 60}" cy="100" r="6" fill="var(--red)"/><text x="${100 + 0.159 * 60}" y="82" text-anchor="middle" font-size="16" font-weight="700" fill="var(--red)" ${F}>π</text>
        <path d="M100 140 H ${100 + 0.159 * 60}" stroke="var(--pen)" stroke-width="4"/><text x="130" y="160" text-anchor="middle" font-size="12" fill="var(--pen)" ${F}>error del redondeo ≈ 0,0016</text></svg>`,
    },
  ],
  figura: {
    titulo: "Intervalos y semirrectas de un vistazo",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Tabla con los cuatro tipos de intervalo: cerrado, abierto, semiabierto y semirrecta, con su desigualdad y su dibujo">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["[a, b]", "a ≤ x ≤ b", 1, 1, 0], ["(a, b)", "a < x < b", 0, 0, 0], ["[a, b)", "a ≤ x < b", 1, 0, 0], ["(a, +∞)", "x > a", 0, 0, 1]].map(([n, d, l, r, inf], i) => {
        const y = 40 + i * 48;
        return `<text x="30" y="${y + 5}" font-size="18" font-weight="700" fill="var(--pen)" ${D}>${n}</text><text x="180" y="${y + 5}" font-size="15" fill="var(--ink)" ${F}>${d}</text>
        <path d="M340 ${y} H 610" stroke="var(--line)" stroke-width="2"/><path d="M400 ${y} H ${inf ? 610 : 540}" stroke="var(--pen)" stroke-width="6"/>
        <circle cx="400" cy="${y}" r="7" fill="${l ? "var(--pen)" : "var(--paper)"}" stroke="var(--pen)" stroke-width="3"/>${inf ? "" : `<circle cx="540" cy="${y}" r="7" fill="${r ? "var(--pen)" : "var(--paper)"}" stroke="var(--pen)" stroke-width="3"/>`}
        <text x="400" y="${y + 22}" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>a</text>${inf ? "" : `<text x="540" y="${y + 22}" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>b</text>`}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "yhdmoH_lyeU", titulo: "Intervalos introducción | tipos de intervalos", canal: "Matemáticas profe Alex", vistas: 3855074, megusta: 75493, busqueda: "intervalos números reales" },
  quiz: [
    { q: "¿Cuál de estos números es irracional?", o: ["0,333…", "√9", "√5"], a: 2, e: "√5 = 2,2360679… no tiene periodo. 0,333… = 1/3 y √9 = 3 son racionales." },
    { q: "¿Qué intervalo corresponde a −2 < x ≤ 5?", o: ["[−2, 5]", "(−2, 5]", "[−2, 5)"], a: 1, e: "−2 no se incluye (paréntesis) y 5 sí (corchete)." },
    { q: "¿Cuánto vale |−7| + |3|?", o: ["−4", "4", "10"], a: 2, e: "El valor absoluto es una distancia, siempre positiva: 7 + 3 = 10." },
    { q: "¿Qué números cumplen |x| < 2?", o: ["(−2, 2)", "[0, 2)", "(2, +∞)"], a: 0, e: "Son los que están a menos de 2 del cero: entre −2 y 2, sin incluirlos." },
    { q: "Redondea √3 = 1,73205… a las centésimas.", o: ["1,73", "1,74", "1,7"], a: 0, e: "La cifra siguiente a las centésimas es 2, menor que 5: se queda 1,73." },
  ],
  examen: [
    { q: "¿Qué número es racional?", o: ["π", "2,151515…", "√7"], a: 1, e: "2,1515… es periódico, así que es una fracción: 213/99." },
    { q: "La intersección de [0, 4] y (2, 6) es…", o: ["(2, 4]", "[0, 6)", "[2, 4)"], a: 0, e: "Comunes a los dos: mayores que 2 y menores o iguales que 4." },
    { q: "¿Qué desigualdad describe la semirrecta (−∞, 1]?", o: ["x < 1", "x ≥ 1", "x ≤ 1"], a: 2, e: "Todos los números menores que 1, incluido el 1." },
  ],
  feynman: ["Qué diferencia hay entre un número racional y uno irracional", "Por qué la recta real no tiene huecos", "Cuándo se usa corchete y cuándo paréntesis", "Qué significa el valor absoluto como distancia"],
  mapa: mapa("NÚMEROS REALES", "var(--bac)", [
    ["Conjuntos", "ℕ ⊂ ℤ ⊂ ℚ · ℚ ∪ 𝕀 = ℝ", "var(--pen)"],
    ["Recta real", "un punto, un número", "var(--leaf)"],
    ["Intervalos", "[ ] incluye · ( ) excluye", "var(--red)"],
    ["Valor absoluto", "|x| = distancia al 0", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["¿Qué es un número irracional?", "Uno con infinitas cifras decimales no periódicas; no se puede escribir como fracción (√2, π)."],
    ["¿Qué significa el corchete en [a, b]?", "Que el extremo está incluido (punto relleno)."],
    ["Escribe −3 ≤ x < 1 como intervalo", "[−3, 1)"],
    ["¿Qué es |x|?", "La distancia de x al cero; siempre es positiva o cero."],
    ["Error absoluto", "|valor real − valor aproximado|"],
  ],
  familias: ["Pedidle que coloque en una recta dibujada −1,5, √2 y π.", "Jugad a describir intervalos con temperaturas: «entre 18 y 25 grados, ambos incluidos».", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido numérico: números reales, representación en la recta, intervalos y aproximaciones (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Construir √2, √3 y √5 con regla y compás y colocarlos en la recta.", "Juego de intervalos: un alumno dice una desigualdad y otro la dibuja en la pizarra.", "Comparar aproximaciones de π a lo largo de la historia y calcular su error relativo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Número real, Wikipedia en español", url: "https://es.wikipedia.org/wiki/N%C3%BAmero_real" },
  ],
  revisado: "2026-11-12",
};
