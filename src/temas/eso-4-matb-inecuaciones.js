// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Inecuaciones",
  minutos: 40,
  objetivos: ["Resolver inecuaciones de primer grado y expresar la solución como intervalo", "Resolver inecuaciones de segundo grado estudiando el signo", "Resolver sistemas de inecuaciones y problemas de optimización sencillos"],
  claves: ["desigualdad", "inecuación", "intervalo solución", "estudio de signos", "sistema de inecuaciones", "semiplano"],
  pregunta: {
    texto: "Una tarifa de móvil cuesta 10 € al mes más 0,05 € por minuto. ¿Cuántos minutos puedes hablar sin pasar de 25 €?",
    respuesta: "No buscas un número exacto, sino todos los que cumplen <mark>10 + 0,05x ≤ 25</mark>. Resolviendo: 0,05x ≤ 15 → x ≤ 300. Puedes hablar <b>hasta 300 minutos</b>: la solución es el intervalo [0, 300].",
  },
  bloques: [
    {
      html: `<h3>Inecuaciones de primer grado</h3><p>Se resuelven como las ecuaciones, con <mark>una regla nueva</mark>: si multiplicas o divides por un número <b>negativo</b>, la desigualdad <b>cambia de sentido</b>.</p>
      <div class="formula"><span>−2x &lt; 6 → x &gt; −3</span></div><p>La solución es un intervalo: aquí (−3, +∞).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Al dividir entre un número negativo, el signo menor que se convierte en mayor que: la solución es x mayor que menos 3">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="130" y="40" font-size="20" fill="var(--ink)">−2x <tspan fill="var(--red)">&lt;</tspan> 6</text>
        <text x="130" y="68" font-size="12" fill="var(--red)">÷ (−2) → ¡gira el signo!</text><text x="130" y="96" font-size="20" fill="var(--ink)">x <tspan fill="var(--red)">&gt;</tspan> −3</text></g>
        <path d="M20 140 H 240" stroke="var(--ink)" stroke-width="2"/>${[-5, -4, -3, -2, -1, 0, 1, 2].map((v, i) => `<path d="M${30 + i * 28} 135 V 145" stroke="var(--ink)" stroke-width="2"/><text x="${30 + i * 28}" y="162" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>${v}</text>`).join("")}
        <path d="M86 140 H 248" stroke="var(--pen)" stroke-width="6"/><circle cx="86" cy="140" r="6" fill="var(--paper)" stroke="var(--pen)" stroke-width="3"/></svg>`,
    },
    {
      html: `<h3>Inecuaciones de segundo grado</h3><p>Pasa todo a un lado: ax² + bx + c &gt; 0. Busca las <b>raíces</b> con la fórmula; dividen la recta en trozos. Prueba <mark>un número de cada trozo</mark> para ver el signo y quédate con los que cumplen.</p>
      <div class="formula"><span>x² − x − 6 &lt; 0 → raíces −2 y 3 → solución (−2, 3)</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Parábola que corta el eje en menos 2 y 3; queda por debajo del eje entre ambas raíces, que es la solución">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 90 H 250" stroke="var(--line)" stroke-width="2"/>
        <path d="${[...Array(51)].map((_, i) => { const x = -3.2 + i * 0.15; const y = x * x - x - 6; return `${i ? "L" : "M"}${(110 + x * 26).toFixed(1)} ${(90 - y * 9).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <path d="M${110 - 2 * 26} 90 H ${110 + 3 * 26}" stroke="var(--leaf)" stroke-width="7"/>
        ${[-2, 3].map((r) => `<circle cx="${110 + r * 26}" cy="90" r="6" fill="var(--paper)" stroke="var(--leaf)" stroke-width="3"/><text x="${110 + r * 26}" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${r}</text>`).join("")}
        <g ${F} font-size="13" font-weight="700"><text x="40" y="30" fill="var(--red)">+</text><text x="226" y="30" fill="var(--red)">+</text><text x="${110 + 0.5 * 26}" y="170" text-anchor="middle" fill="var(--leaf)">− (cumple)</text></g></svg>`,
    },
    {
      html: `<h3>La tabla de signos</h3><p>Otra forma, muy útil con productos y cocientes: factoriza y estudia el signo de <b>cada factor</b> en cada trozo. El signo del total sale <mark>multiplicando signos</mark>.</p><p>En (x + 2)(x − 3) &lt; 0: entre −2 y 3 un factor es + y el otro −, así que el producto es negativo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla de signos de x más 2 y x menos 3 en tres intervalos; el producto es negativo entre menos 2 y 3">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="13" font-weight="700" text-anchor="middle">
          <text x="110" y="28" fill="var(--muted)">−2</text><text x="190" y="28" fill="var(--muted)">3</text>
          <path d="M110 36 V 160 M190 36 V 160" stroke="var(--line)" stroke-width="2"/>
          <text x="38" y="62" fill="var(--ink)">x + 2</text><text x="76" y="62" fill="var(--red)">−</text><text x="150" y="62" fill="var(--leaf)">+</text><text x="226" y="62" fill="var(--leaf)">+</text>
          <text x="38" y="98" fill="var(--ink)">x − 3</text><text x="76" y="98" fill="var(--red)">−</text><text x="150" y="98" fill="var(--red)">−</text><text x="226" y="98" fill="var(--leaf)">+</text>
          <path d="M14 112 H 248" stroke="var(--ink)" stroke-width="2"/>
          <text x="38" y="140" fill="var(--pen)">producto</text><text x="76" y="140" fill="var(--leaf)">+</text><rect x="122" y="122" width="56" height="28" rx="8" fill="var(--hl)"/><text x="150" y="141" fill="var(--hl-ink)">−</text><text x="226" y="140" fill="var(--leaf)">+</text></g></svg>`,
    },
    {
      html: `<h3>Sistemas de inecuaciones</h3><p>Con una incógnita, se resuelve cada inecuación y la solución es la <mark>intersección</mark>: lo que cumplen todas a la vez.</p>
      <div class="formula"><span>x + 1 &gt; 0 → x &gt; −1</span><span class="op">y</span><span>2x − 6 ≤ 0 → x ≤ 3</span><span class="op">→</span><span>(−1, 3]</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Intersección de dos semirrectas: x mayor que menos 1 y x menor o igual que 3 se solapan en el intervalo de menos 1 a 3">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[-3, -2, -1, 0, 1, 2, 3, 4, 5].map((v, i) => `<text x="${26 + i * 26}" y="164" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>${v}</text>`).join("")}
        <path d="M78 46 H 250" stroke="var(--pen)" stroke-width="6"/><circle cx="78" cy="46" r="6" fill="var(--paper)" stroke="var(--pen)" stroke-width="3"/><text x="160" y="32" font-size="12" font-weight="700" fill="var(--pen)" ${F}>x &gt; −1</text>
        <path d="M10 86 H 182" stroke="var(--red)" stroke-width="6"/><circle cx="182" cy="86" r="6" fill="var(--red)"/><text x="60" y="72" font-size="12" font-weight="700" fill="var(--red)" ${F}>x ≤ 3</text>
        <path d="M78 126 H 182" stroke="var(--leaf)" stroke-width="8"/><circle cx="78" cy="126" r="6" fill="var(--paper)" stroke="var(--leaf)" stroke-width="3"/><circle cx="182" cy="126" r="6" fill="var(--leaf)"/>
        <text x="130" y="114" text-anchor="middle" font-size="12" font-weight="700" fill="var(--leaf)" ${F}>solución (−1, 3]</text>
        <path d="M78 46 V 126 M182 86 V 126" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 4"/></svg>`,
    },
    {
      html: `<h3>Inecuaciones con dos incógnitas</h3><p>Una inecuación como y ≥ 2x − 1 tiene como solución un <b>semiplano</b>: toda la zona a un lado de la recta. Para saber qué lado, <mark>prueba un punto</mark>, por ejemplo el (0, 0): 0 ≥ −1 es cierto, así que vale el lado del origen.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Semiplano sombreado por encima de la recta y igual a 2x menos 1, que contiene el origen">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 10 L 156 10 L 75 172 L 10 172 Z" fill="var(--pen)" opacity=".15"/>
        <path d="M10 100 H 250 M100 10 V 172" stroke="var(--line)" stroke-width="2"/>
        <path d="M75 172 L 156 10" stroke="var(--pen)" stroke-width="3"/>
        <circle cx="100" cy="100" r="6" fill="var(--hl)" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700"><text x="40" y="60" fill="var(--pen)">y ≥ 2x − 1</text><text x="108" y="118" fill="var(--ink)">(0, 0) ✓</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Ecuación o inecuación: qué cambia",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Comparación: la ecuación da puntos sueltos como solución y la inecuación da intervalos; al multiplicar por negativo la desigualdad cambia de sentido">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      <rect x="20" y="20" width="290" height="180" rx="14" fill="var(--card)" stroke="var(--leaf)" stroke-width="3"/><rect x="330" y="20" width="290" height="180" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
      <text x="165" y="56" text-anchor="middle" font-size="20" font-weight="700" fill="var(--leaf)" ${D}>ECUACIÓN</text><text x="475" y="56" text-anchor="middle" font-size="20" font-weight="700" fill="var(--pen)" ${D}>INECUACIÓN</text>
      <text x="165" y="90" text-anchor="middle" font-size="16" fill="var(--ink)" ${F}>x² − x − 6 = 0</text><text x="475" y="90" text-anchor="middle" font-size="16" fill="var(--ink)" ${F}>x² − x − 6 &lt; 0</text>
      <path d="M44 136 H 286 M354 136 H 596" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="110" cy="136" r="7" fill="var(--leaf)"/><circle cx="230" cy="136" r="7" fill="var(--leaf)"/><path d="M420 136 H 540" stroke="var(--pen)" stroke-width="7"/><circle cx="420" cy="136" r="7" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/><circle cx="540" cy="136" r="7" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
      <text x="165" y="176" text-anchor="middle" font-size="14" fill="var(--muted)" ${F}>solución: x = −2 y x = 3</text><text x="475" y="176" text-anchor="middle" font-size="14" fill="var(--muted)" ${F}>solución: el intervalo (−2, 3)</text>
    </svg>`,
  },
  video: { id: "_uW4nVdCWzQ", titulo: "Inecuaciones cuadráticas: solución, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 4485270, megusta: 0, busqueda: "inecuaciones de segundo grado" },
  quiz: [
    { q: "Resuelve 3x − 5 ≤ 7.", o: ["x ≤ 4", "x ≥ 4", "x ≤ 2/3"], a: 0, e: "3x ≤ 12 → x ≤ 4." },
    { q: "Resuelve −x + 2 > 5.", o: ["x > −3", "x < −3", "x > 3"], a: 1, e: "−x > 3 → al multiplicar por −1 gira el signo: x < −3." },
    { q: "La solución de x² − 9 > 0 es…", o: ["(−3, 3)", "(−∞, −3) ∪ (3, +∞)", "x > 3"], a: 1, e: "Raíces ±3; la parábola es positiva fuera de ellas." },
    { q: "La solución del sistema x ≥ 1, x < 4 es…", o: ["[1, 4)", "(1, 4]", "[1, 4]"], a: 0, e: "Intersección: 1 incluido y 4 excluido." },
    { q: "¿Qué punto cumple y > x + 2?", o: ["(0, 0)", "(0, 5)", "(3, 4)"], a: 1, e: "5 > 0 + 2 es cierto; los otros no." },
  ],
  examen: [
    { q: "Resuelve x² ≤ 4x.", o: ["[0, 4]", "(0, 4)", "x ≤ 4"], a: 0, e: "x² − 4x ≤ 0 → x(x − 4) ≤ 0 → entre 0 y 4, incluidos." },
    { q: "¿Cuál es la solución de x² + 1 < 0?", o: ["Todos los reales", "Ninguna", "x < −1"], a: 1, e: "x² + 1 siempre es positivo." },
    { q: "Un taxi cobra 3 € más 1,2 € por km. ¿Hasta cuántos km puedes ir con 15 €?", o: ["10", "12", "15"], a: 0, e: "3 + 1,2x ≤ 15 → x ≤ 10 km." },
  ],
  feynman: ["Qué diferencia hay entre la solución de una ecuación y la de una inecuación", "Por qué cambia el signo al multiplicar por un negativo", "Cómo se resuelve una inecuación de segundo grado", "Qué es la solución de un sistema de inecuaciones"],
  mapa: mapa("INECUACIONES", "var(--bac)", [
    ["1er grado", "¡negativo gira el signo!", "var(--red)"],
    ["2º grado", "raíces + signo en cada trozo", "var(--pen)"],
    ["Sistemas", "intersección de soluciones", "var(--leaf)"],
    ["Dos incógnitas", "semiplano · prueba un punto", "var(--inf)"],
  ], 260),
  tarjetas: [
    ["¿Qué pasa al dividir una inecuación entre −3?", "La desigualdad cambia de sentido."],
    ["Pasos para x² − x − 6 < 0", "Raíces −2 y 3, estudiar el signo en cada trozo: (−2, 3)."],
    ["Solución de un sistema de inecuaciones", "La intersección de las soluciones de cada una."],
    ["¿Cómo se sabe qué semiplano es la solución?", "Probando un punto que no esté en la recta, como (0, 0)."],
    ["Diferencia entre [2, 5) y (2, 5]", "El primero incluye el 2 y excluye el 5; el segundo al revés."],
  ],
  familias: ["Usad tarifas reales (móvil, gimnasio) para plantear «¿hasta cuánto puedo…?».", "Pedidle que os explique con un ejemplo por qué gira el signo al multiplicar por −1.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico: inecuaciones de primer y segundo grado, sistemas de inecuaciones e interpretación gráfica (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Debate: comprobar con números concretos por qué −2 < 6 no implica 2 < −6.", "GeoGebra para sombrear semiplanos y regiones factibles.", "Problema de optimización sencillo con dos productos y restricciones de tiempo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Inecuación, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Inecuaci%C3%B3n" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Resolver inecuaciones racionales con la tabla de signos", "Plantear y resolver problemas con inecuaciones y regiones del plano"],
  tras: {
    "Inecuaciones de primer grado": [
      { html: `<h3>Desigualdades y sus propiedades</h3><p>Una inecuación se resuelve casi como una ecuación, pero con una regla especial. Se puede <b>sumar o restar</b> el mismo número a los dos miembros sin que cambie el sentido de la desigualdad. Se puede <b>multiplicar o dividir</b> por un número positivo sin que cambie. Pero si se multiplica o divide por un número <b>negativo</b>, <mark>el sentido de la desigualdad se invierte</mark>: de −2x &gt; 6 se pasa a x &lt; −3. Es lógico: 2 &lt; 5, pero −2 &gt; −5. La solución se escribe como intervalo, con corchete si el extremo está incluido (≤, ≥) y paréntesis si no (&lt;, &gt;).</p>` },
    ],
    "La tabla de signos": [
      { html: `<h3>Inecuaciones racionales</h3><p>Una inecuación <b>racional</b> tiene la incógnita en el denominador, como (x − 1) / (x + 3) ≥ 0. No se puede multiplicar por el denominador sin más, porque no sabemos si es positivo o negativo. El método es: 1) pasar todo a un miembro y dejar <b>cero en el otro</b>; 2) hallar las raíces del numerador y del denominador; 3) hacer la <b>tabla de signos</b> en los intervalos que determinan; 4) elegir los intervalos con el signo pedido. Las raíces del numerador se incluyen si la desigualdad es ≤ o ≥, pero las del denominador <mark>nunca se incluyen</mark>, porque allí la fracción no existe.</p>`, video: { id: "QLf7vVb6Wao", titulo: "Inecuaciones racionales: solución, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 2017292 } },
    ],
    "Inecuaciones con dos incógnitas": [
      { html: `<h3>Problemas con inecuaciones</h3><p>Muchas situaciones de la vida real no piden un valor exacto sino un <b>límite</b>: «como mucho», «al menos», «no más de», «superar». Se traducen así: «al menos» es ≥; «como mucho» o «no más de» es ≤; «más que» es &gt;. Por ejemplo, para comparar dos tarifas se plantea cuándo una es más barata que la otra, y la solución es un intervalo de valores. Al final hay que <b>interpretar</b>: si la incógnita es un número de personas o de entradas, solo valen los <mark>números naturales</mark> del intervalo.</p>` },
      { html: `<h3>Regiones factibles</h3><p>Cuando hay varias condiciones con dos incógnitas, cada inecuación determina un semiplano y la solución del sistema es la <b>región factible</b>: la zona común a todos. Por ejemplo, una empresa fabrica x mesas e y sillas con condiciones de tiempo y material. Los <b>vértices</b> de la región son importantes porque, como se estudia en Bachillerato en la <b>programación lineal</b>, el máximo beneficio o el mínimo coste siempre se alcanza en uno de ellos. Para dibujarla se representa cada recta frontera y se comprueba con un punto, como el (0, 0), <mark>qué lado cumple</mark> la desigualdad.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Resuelve (x − 1) / (x + 3) ≥ 0.", pasos: ["Raíces: numerador x = 1; denominador x = −3.", "Signos: en (−∞, −3) es +; en (−3, 1) es −; en (1, +∞) es +.", "Se incluye x = 1 (vale 0), pero no x = −3."], resultado: "(−∞, −3) ∪ [1, +∞)." },
    { enunciado: "La tarifa A cuesta 20 € al mes más 0,05 € por minuto; la B, 0,15 € por minuto. ¿A partir de cuántos minutos es más barata la A?", pasos: ["A más barata: 20 + 0,05x < 0,15x.", "20 < 0,10x, luego x > 200.", "Para 200 min cuestan lo mismo (30 €)."], resultado: "A partir de 201 minutos." },
    { enunciado: "Resuelve x² − 5x + 4 < 0.", pasos: ["Raíces de x² − 5x + 4 = 0: x = 1 y x = 4.", "La parábola abre hacia arriba: es negativa entre las raíces.", "Sin incluir los extremos."], resultado: "(1, 4)." },
  ],
  errores: [
    "No invertir el sentido de la desigualdad al multiplicar o dividir por un negativo.",
    "Multiplicar por el denominador en una inecuación racional sin conocer su signo.",
    "Incluir en la solución las raíces del denominador.",
    "Usar corchetes con < o > y paréntesis con ≤ o ≥.",
    "Dar como solución de un problema valores decimales cuando la incógnita es un número de personas.",
  ],
  ejercicios: [
    { q: "Resuelve 3x − 5 ≤ 7.", sol: "x ≤ 4: (−∞, 4]." },
    { q: "Resuelve 4 − 2x > 10.", sol: "−2x > 6, x < −3: (−∞, −3)." },
    { q: "Resuelve (x + 1)/2 − x/3 ≥ 1.", sol: "3(x + 1) − 2x ≥ 6, x ≥ 3: [3, +∞)." },
    { q: "Resuelve x² − 9 > 0.", sol: "(−∞, −3) ∪ (3, +∞)." },
    { q: "Resuelve x² + 2x ≤ 0.", sol: "x(x + 2) ≤ 0: [−2, 0]." },
    { q: "Resuelve (x − 2)/(x − 5) < 0.", sol: "(2, 5)." },
    { q: "Resuelve el sistema 2x − 1 > 3 y x + 4 ≤ 10.", sol: "x > 2 y x ≤ 6: (2, 6]." },
    { q: "Un examen tiene 20 preguntas: +0,5 por acierto. ¿Cuántos aciertos hacen falta para sacar al menos un 7 si no restan los fallos?", sol: "0,5x ≥ 7, x ≥ 14: al menos 14 aciertos." },
    { q: "Un gimnasio cobra 30 € de matrícula y 25 € al mes. ¿Cuántos meses puedes pagar con 200 €?", sol: "30 + 25x ≤ 200, x ≤ 6,8: como mucho 6 meses." },
    { q: "¿El punto (1, 1) cumple x + 2y < 4? ¿Y (2, 2)?", sol: "(1, 1): 3 < 4, sí. (2, 2): 6 < 4, no." },
  ],
  quiz: [
    { q: "Al dividir por −3 los dos miembros de una inecuación…", o: ["no cambia nada", "se invierte la desigualdad", "se cambia a igualdad"], a: 1, e: "Ocurre con cualquier negativo." },
    { q: "«Como mucho 50» se escribe…", o: ["x ≥ 50", "x ≤ 50", "x > 50"], a: 1, e: "No puede superarlo." },
    { q: "En una inecuación racional, las raíces del denominador…", o: ["se incluyen siempre", "no se incluyen nunca", "depende"], a: 1, e: "La fracción no existe." },
    { q: "La solución de x² < 4 es…", o: ["(−2, 2)", "x < 2", "(−∞, −2) ∪ (2, +∞)"], a: 0, e: "Entre las raíces." },
    { q: "La región factible es…", o: ["la zona común a todas las inecuaciones", "una recta", "un punto"], a: 0, e: "Intersección de semiplanos." },
  ],
  tarjetas: [
    ["Regla del negativo", "Al multiplicar o dividir por un negativo, la desigualdad cambia de sentido."],
    ["Inecuación racional", "Se resuelve con cero en un miembro y tabla de signos; el denominador nunca se incluye."],
    ["Región factible", "Zona del plano que cumple todas las inecuaciones de un sistema."],
  ],
});
