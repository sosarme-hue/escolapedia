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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
{
  const T = module.exports;
  T.minutos = 60;
  T.objetivos.push("Trabajar con exponentes cero, negativos y fraccionarios", "Simplificar radicales y sumar radicales semejantes", "Comparar órdenes de magnitud");
  const nuevos = {
    negativos: { html: `<h3>Exponente cero y exponentes negativos</h3><p>Al dividir potencias de la misma base se restan los exponentes: 2⁵ / 2⁵ = 2⁰, pero también es 32 / 32 = 1. Por eso <mark>a⁰ = 1</mark> (con a ≠ 0). Del mismo modo, 2³ / 2⁵ = 2⁻², que es 8 / 32 = 1/4: un exponente negativo significa <mark>«uno partido por»</mark>: a⁻ⁿ = 1 / aⁿ. Con fracciones se da la vuelta: (2/3)⁻² = (3/2)² = 9/4.</p>` },
    radicales: { html: `<h3>Simplificar y sumar radicales</h3><p>Para <b>extraer factores</b> de una raíz cuadrada, se descompone el radicando buscando cuadrados: √12 = √(4 · 3) = 2√3; √50 = √(25 · 2) = 5√2. Se usa que <mark>√(a · b) = √a · √b</mark>. Solo se pueden <b>sumar</b> radicales <b>semejantes</b> (con la misma raíz): 5√3 + 2√3 = 7√3, igual que 5x + 2x = 7x. En cambio, √(a + b) no es √a + √b: √(9 + 16) = 5, no 7.</p>` },
    fraccionarios: { html: `<h3>Potencias de exponente fraccionario</h3><p>Una raíz se puede escribir como potencia: <mark>ⁿ√(aᵐ) = a^(m/n)</mark>. Así, √5 = 5^(1/2) y ∛8 = 8^(1/3) = 2. Para calcular 8^(2/3) se hace primero la raíz y luego la potencia: (∛8)² = 2² = 4. Escribir las raíces como potencias permite usar las mismas propiedades: √2 · ∛2 = 2^(1/2 + 1/3) = 2^(5/6).</p>` },
    magnitud: { html: `<h3>Órdenes de magnitud</h3><p>El <b>exponente</b> de la notación científica dice el orden de magnitud: lo grande o pequeño que es un número. Para comparar dos números en notación científica, primero se miran los exponentes y, si coinciden, los coeficientes: 3 · 10⁸ &gt; 9 · 10⁷. Algunas referencias: una célula mide unos 10⁻⁵ m; una persona, 10⁰ m; la Tierra, 10⁷ m; la distancia al Sol, 10¹¹ m. Pasar de un orden al siguiente es multiplicar por 10.</p>` },
  };
  const pos = (t) => T.bloques.findIndex((b) => b.html.includes(t));
  T.bloques[pos("Potencias y sus propiedades")].video = { id: "a_8MdRema-k", titulo: "Potencia de potencias, súper fácil", canal: "Daniel Carreón", vistas: 4807703, megusta: 0 };
  T.bloques[pos("Notación científica")].video = { id: "fYBFpz3ly28", titulo: "Notación científica, súper fácil", canal: "Daniel Carreón", vistas: 4989066, megusta: 0 };
  T.bloques.splice(pos("Con la calculadora"), 0, nuevos.magnitud);
  T.bloques.splice(pos("Raíces") + 1, 0, nuevos.radicales, nuevos.fraccionarios);
  T.bloques.splice(pos("Potencias y sus propiedades") + 1, 0, nuevos.negativos);

  T.ejemplos = [
    { enunciado: "Simplifica (2³ · 2⁵) / 2⁶.",
      pasos: ["Producto de potencias de la misma base: se suman los exponentes, 2³ · 2⁵ = 2⁸.", "Cociente: se restan, 2⁸ / 2⁶ = 2²."],
      resultado: "2² = 4." },
    { enunciado: "Calcula (3 · 10⁸) · (2 · 10⁻³) y después divide el resultado entre 4 · 10².",
      pasos: ["Se multiplican los coeficientes y se suman los exponentes: 6 · 10⁸⁻³ = 6 · 10⁵.", "Se dividen los coeficientes y se restan los exponentes: (6 / 4) · 10⁵⁻² = 1,5 · 10³."],
      resultado: "6 · 10⁵ y 1,5 · 10³ = 1.500." },
    { enunciado: "Calcula √75 + √12.",
      pasos: ["√75 = √(25 · 3) = 5√3.", "√12 = √(4 · 3) = 2√3.", "Son semejantes: 5√3 + 2√3 = 7√3."],
      resultado: "7√3 ≈ 12,12." },
  ];
  T.errores = [
    "Multiplicar los exponentes al multiplicar potencias: 2³ · 2⁴ = 2⁷, no 2¹².",
    "Pensar que un exponente negativo da un número negativo: 2⁻² = 1/4, no −4.",
    "Repartir la raíz en una suma: √(a + b) no es √a + √b.",
    "Dejar el coeficiente fuera del intervalo [1, 10): 25 · 10³ debe escribirse 2,5 · 10⁴.",
    "Sumar números en notación científica sin igualar antes los exponentes.",
  ];
  T.ejercicios = [
    { q: "Calcula 5³ · 5⁻¹.", sol: "5³⁻¹ = 5² = 25." },
    { q: "Calcula (2²)³.", sol: "Potencia de potencia: se multiplican los exponentes, 2⁶ = 64." },
    { q: "Calcula 3⁰ + 2⁻¹.", sol: "1 + 1/2 = 1,5." },
    { q: "Calcula (2/5)⁻².", sol: "(5/2)² = 25/4 = 6,25." },
    { q: "Simplifica √48.", sol: "√(16 · 3) = 4√3." },
    { q: "Calcula √18 + √8.", sol: "3√2 + 2√2 = 5√2." },
    { q: "Calcula 27^(2/3).", sol: "(∛27)² = 3² = 9." },
    { q: "Escribe en notación científica 0,000045 y 3.200.000.000.", sol: "4,5 · 10⁻⁵ y 3,2 · 10⁹." },
    { q: "Calcula (4 · 10⁶) · (5 · 10⁻²) y exprésalo en notación científica.", sol: "20 · 10⁴ = 2 · 10⁵." },
    { q: "La luz recorre 3 · 10⁵ km cada segundo y un año tiene unos 3,15 · 10⁷ s. ¿Cuántos kilómetros mide un año luz?", sol: "3 · 3,15 · 10⁵⁺⁷ = 9,45 · 10¹² km, casi diez billones de kilómetros." },
  ];
  T.quiz.push(
    { q: "2⁻³ es igual a…", o: ["−8", "1/8", "−6"], a: 1, e: "1 / 2³ = 1/8." },
    { q: "√50 simplificado es…", o: ["5√2", "25√2", "2√5"], a: 0, e: "√(25 · 2) = 5√2." },
    { q: "8^(1/3) es igual a…", o: ["2", "8/3", "24"], a: 0, e: "Es la raíz cúbica de 8." },
    { q: "En notación científica, 0,0007 se escribe…", o: ["7 · 10⁻⁴", "7 · 10⁴", "0,7 · 10⁻³"], a: 0, e: "La coma se mueve 4 lugares a la derecha." },
    { q: "(a³)² es igual a…", o: ["a⁵", "a⁶", "a⁹"], a: 1, e: "Potencia de potencia: 3 · 2 = 6." },
  );
  T.tarjetas.push(
    ["a⁻ⁿ", "1 / aⁿ"],
    ["ⁿ√(aᵐ) como potencia", "a^(m/n)"],
    ["¿Cuándo se pueden sumar radicales?", "Solo si son semejantes: misma raíz y mismo radicando."],
  );
}
