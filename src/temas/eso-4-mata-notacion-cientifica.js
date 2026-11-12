// Matemáticas A 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Potencias, raíces y notación científica",
  minutos: 40,
  objetivos: ["Operar con potencias de exponente entero usando sus propiedades", "Calcular y simplificar raíces sencillas", "Escribir y operar números muy grandes y muy pequeños en notación científica"],
  claves: ["potencia", "exponente negativo", "raíz cuadrada", "notación científica", "orden de magnitud", "cifras significativas"],
  pregunta: {
    texto: "La distancia de la Tierra al Sol es de unos 150.000.000 km y un virus mide 0,0000001 m. ¿Hay una forma más cómoda de escribir estos números?",
    respuesta: "Sí, la <mark>notación científica</mark>: 1,5 · 10⁸ km y 1 · 10⁻⁷ m. El exponente de 10 dice cuántos lugares se mueve la coma. Así se escriben los números en ciencia y en las calculadoras.",
  },
  bloques: [
    {
      html: `<h3>Potencias y sus propiedades</h3><p>aⁿ significa multiplicar a por sí mismo n veces: 2⁴ = 2 · 2 · 2 · 2 = 16. Las propiedades permiten operar sin calcular:</p>
      <div class="formula"><span>aᵐ · aⁿ = aᵐ⁺ⁿ</span><span class="op">·</span><span>aᵐ : aⁿ = aᵐ⁻ⁿ</span><span class="op">·</span><span>(aᵐ)ⁿ = aᵐ·ⁿ</span></div><p>Recuerda: <mark>a⁰ = 1</mark> y <mark>a⁻ⁿ = 1/aⁿ</mark>.</p>`,
      svg: require("./eso-4-matb-potencias-logaritmos").bloques[0].svg,
    },
    {
      html: `<h3>Raíces</h3><p>La raíz cuadrada de un número es el que, multiplicado por sí mismo, lo da: <mark>√49 = 7</mark> porque 7² = 49. La raíz cúbica: ∛8 = 2 porque 2³ = 8. Para simplificar, saca los cuadrados perfectos: √50 = √(25 · 2) = 5√2.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cuadrado de área 49 tiene lado 7: la raíz cuadrada es el lado del cuadrado">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[...Array(7)].map((_, i) => [...Array(7)].map((_, j) => `<rect x="${40 + i * 16}" y="${24 + j * 16}" width="15" height="15" fill="var(--pen)" fill-opacity="${(i + j) % 2 ? 0.25 : 0.4}"/>`).join("")).join("")}
        <g ${F} font-weight="700"><text x="96" y="152" text-anchor="middle" font-size="13" fill="var(--red)">lado 7</text><text x="164" y="70" font-size="15" fill="var(--ink)">área 49</text><text x="164" y="100" font-size="17" fill="var(--red)">√49 = 7</text></g></svg>`,
    },
    {
      html: `<h3>Notación científica</h3><p>Un número está en notación científica si se escribe como <mark>a · 10ⁿ</mark>, con 1 ≤ a &lt; 10. Para números grandes, n es positivo (cuántos lugares mueves la coma a la izquierda); para muy pequeños, <b>n es negativo</b>.</p>
      <div class="formula"><span>384.000 km = 3,84 · 10⁵ km</span></div><div class="formula"><span>0,00052 m = 5,2 · 10⁻⁴ m</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La coma de 384.000 se mueve 5 lugares a la izquierda: 3,84 por 10 elevado a 5">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="130" y="60" font-size="30" fill="var(--ink)" letter-spacing="2">3 8 4 0 0 0,</text>
        ${[0, 1, 2, 3, 4].map((i) => `<path d="M${200 - i * 24} 72 Q ${188 - i * 24} 92 ${176 - i * 24} 72" fill="none" stroke="var(--red)" stroke-width="2.5"/>`).join("")}
        <text x="130" y="112" font-size="13" fill="var(--red)">la coma salta 5 lugares</text><text x="130" y="152" font-size="24" fill="var(--pen)">3,84 · 10⁵</text></g></svg>`,
    },
    {
      html: `<h3>Operar en notación científica</h3><p>Para <b>multiplicar o dividir</b>, se operan los números por un lado y las potencias de 10 por otro: (2 · 10³) · (4 · 10⁵) = <mark>8 · 10⁸</mark>. Para <b>sumar o restar</b>, primero hay que poner el mismo exponente. Si el resultado no queda entre 1 y 10, se ajusta: 12 · 10⁴ = 1,2 · 10⁵.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Multiplicación en notación científica: se multiplican 2 por 4 y se suman los exponentes 3 y 5">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="130" y="50" font-size="20" fill="var(--ink)">(<tspan fill="var(--pen)">2</tspan> · 10<tspan dy="-8" font-size="13" fill="var(--red)">3</tspan><tspan dy="8">) · (</tspan><tspan fill="var(--pen)">4</tspan> · 10<tspan dy="-8" font-size="13" fill="var(--red)">5</tspan><tspan dy="8">)</tspan></text>
        <text x="80" y="96" font-size="15" fill="var(--pen)">2 · 4 = 8</text><text x="190" y="96" font-size="15" fill="var(--red)">3 + 5 = 8</text>
        <text x="130" y="146" font-size="26" fill="var(--ink)"><tspan fill="var(--pen)">8</tspan> · 10<tspan dy="-12" font-size="16" fill="var(--red)">8</tspan></text></g></svg>`,
    },
    {
      html: `<h3>Con la calculadora</h3><p>Las calculadoras usan la tecla <b>×10ˣ</b> (o EXP): 3,84 ×10ˣ 5 escribe 3,84 · 10⁵. Cuando un resultado es enorme, la pantalla lo muestra así, por ejemplo <mark>6.02E23</mark> significa 6,02 · 10²³. El exponente da el <b>orden de magnitud</b>: permite comparar tamaños de un vistazo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala de tamaños con potencias de 10: un virus 10 a la menos 7 metros, una persona 10 a la 0, la Tierra 10 a la 7">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 100 H 240" stroke="var(--ink)" stroke-width="2"/>
        ${[["10⁻⁷ m", "virus", 34], ["10⁻³ m", "hormiga", 86], ["10⁰ m", "persona", 138], ["10⁷ m", "Tierra", 220]].map(([e, n, x]) => `<circle cx="${x}" cy="100" r="6" fill="var(--pen)"/><text x="${x}" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>${e}</text><text x="${x}" y="122" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
        <text x="130" y="160" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>cada paso del exponente es ×10</text></svg>`,
    },
  ],
  figura: {
    titulo: "De número a notación científica en tres pasos",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Tres pasos: colocar la coma detrás de la primera cifra no nula, contar los saltos y poner el exponente positivo si el número es grande o negativo si es pequeño">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["1", "Coma tras la 1ª cifra", "0,00052 → 5,2", "var(--pen)"], ["2", "Cuenta los saltos", "la coma se movió 4 lugares", "var(--leaf)"], ["3", "Signo del exponente", "grande: +  ·  pequeño: −  →  5,2 · 10⁻⁴", "var(--red)"]].map(([n, t, d, c], i) => `<rect x="${20 + i * 206}" y="24" width="190" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
        <circle cx="${115 + i * 206}" cy="62" r="20" fill="${c}"/><text x="${115 + i * 206}" y="70" text-anchor="middle" font-size="22" font-weight="800" fill="#fff" ${D}>${n}</text>
        <text x="${115 + i * 206}" y="112" text-anchor="middle" font-size="17" font-weight="700" fill="${c}" ${D}>${t}</text>
        <foreignObject x="${32 + i * 206}" y="126" width="166" height="64"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;font:14px Atkinson Hyperlegible,sans-serif;text-align:center;color:var(--ink)">${d}</p></foreignObject>`).join("")}
    </svg>`,
  },
  video: { id: "fYBFpz3ly28", titulo: "Notación científica, súper fácil", canal: "Daniel Carreón", vistas: 4988892, megusta: 0, busqueda: "notación científica" },
  quiz: [
    { q: "2³ · 2⁴ =", o: ["2⁷", "2¹²", "4⁷"], a: 0, e: "Misma base: se suman los exponentes." },
    { q: "10⁻² =", o: ["−100", "0,01", "−0,01"], a: 1, e: "1/10² = 1/100 = 0,01." },
    { q: "45.000.000 en notación científica es…", o: ["45 · 10⁶", "4,5 · 10⁷", "4,5 · 10⁶"], a: 1, e: "La coma salta 7 lugares y 4,5 está entre 1 y 10." },
    { q: "0,0036 en notación científica es…", o: ["3,6 · 10⁻³", "3,6 · 10³", "36 · 10⁻⁴"], a: 0, e: "Número pequeño: exponente negativo, 3 saltos." },
    { q: "(3 · 10⁴) · (2 · 10²) =", o: ["6 · 10⁶", "6 · 10⁸", "5 · 10⁶"], a: 0, e: "3 · 2 = 6 y 4 + 2 = 6." },
  ],
  examen: [
    { q: "√81 =", o: ["9", "40,5", "±81"], a: 0, e: "9 · 9 = 81." },
    { q: "(8 · 10⁶) : (2 · 10²) =", o: ["4 · 10⁴", "4 · 10³", "6 · 10⁴"], a: 0, e: "8 : 2 = 4 y 6 − 2 = 4." },
    { q: "¿Qué es mayor, 3 · 10⁵ o 9 · 10⁴?", o: ["3 · 10⁵", "9 · 10⁴", "Son iguales"], a: 0, e: "Manda el exponente: 300.000 > 90.000." },
  ],
  feynman: ["Las propiedades de las potencias con ejemplos", "Qué significa un exponente negativo", "Cómo se escribe un número en notación científica", "Cómo se multiplican dos números en notación científica"],
  mapa: mapa("POTENCIAS Y NOTACIÓN", "var(--bac)", [
    ["Potencias", "aᵐ·aⁿ = aᵐ⁺ⁿ · a⁰ = 1", "var(--pen)"],
    ["Raíces", "√49 = 7 · ∛8 = 2", "var(--leaf)"],
    ["Notación científica", "a · 10ⁿ con 1 ≤ a < 10", "var(--red)"],
    ["Operar", "× y ÷: números y exponentes", "var(--inf)"],
  ], 260),
  tarjetas: [
    ["aᵐ · aⁿ =", "aᵐ⁺ⁿ"],
    ["a⁻ⁿ =", "1 / aⁿ"],
    ["Forma de la notación científica", "a · 10ⁿ con 1 ≤ a < 10."],
    ["0,0007 en notación científica", "7 · 10⁻⁴"],
    ["¿Qué significa 2.5E9 en la calculadora?", "2,5 · 10⁹"],
  ],
  familias: ["Buscad juntos datos enormes (habitantes del mundo, distancia a la Luna) y escribidlos en notación científica.", "Pedidle que os enseñe la tecla ×10ˣ de su calculadora.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido numérico: potencias de exponente entero, radicales sencillos y notación científica en contextos reales (RD 217/2022, Matemáticas A 4º).",
    ideas: ["Línea de tamaños del universo en el pasillo con potencias de 10.", "Calcular cuántos granos de arena hay en la playa con estimaciones y notación científica.", "Ver el vídeo clásico «Powers of Ten» y comentarlo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Notación científica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Notaci%C3%B3n_cient%C3%ADfica" },
  ],
  revisado: "2026-11-12",
};
