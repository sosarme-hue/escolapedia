// Matemáticas 3º ESO: ecuaciones de primer y segundo grado. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, ejes, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Ecuaciones de primer y segundo grado",
  minutos: 60,
  objetivos: ["Resolver ecuaciones de primer grado con paréntesis y denominadores", "Resolver ecuaciones de segundo grado completas e incompletas", "Usar el discriminante para saber cuántas soluciones hay", "Plantear y resolver problemas mediante ecuaciones"],
  claves: ["ecuación", "incógnita", "solución", "transponer", "discriminante", "fórmula general"],
  pregunta: {
    texto: "Un jardín rectangular mide 3 m más de largo que de ancho y tiene 40 m² de superficie. ¿Cuánto mide?",
    respuesta: "Si el ancho es x, el largo es x + 3 y <mark>x(x + 3) = 40</mark>, es decir, x² + 3x − 40 = 0. Es una ecuación de segundo grado con soluciones 5 y −8. Como una medida no puede ser negativa, el jardín mide 5 m × 8 m.",
  },
  bloques: [
    {
      html: `<h3>Qué es una ecuación</h3><p>Una <b>ecuación</b> es una igualdad entre dos expresiones algebraicas que solo se cumple para algunos valores de la <b>incógnita</b>. Esos valores son las <mark>soluciones</mark>. En 2x + 1 = 7, la solución es x = 3, porque 2 · 3 + 1 = 7. Si la igualdad se cumple para cualquier valor, como 2(x + 1) = 2x + 2, es una <b>identidad</b>.</p><p>El <b>grado</b> de una ecuación es el mayor exponente de la incógnita. Dos ecuaciones son <b>equivalentes</b> si tienen las mismas soluciones. Resolver consiste en transformar la ecuación en otras equivalentes más sencillas hasta dejar la x sola.</p>`,
      svg: svg("Balanza en equilibrio: dos cajas x y una pesa de 1 a un lado, siete pesas al otro", `<path d="M130 40 V 140 M90 150 H 170" stroke="var(--ink)" stroke-width="3"/><path d="M40 60 H 220" stroke="var(--ink)" stroke-width="4"/><path d="M130 30 l -8 12 h 16 z" fill="var(--ink)"/>
        <path d="M50 60 L 40 90 H 100 L 90 60 M170 60 L 160 90 H 220 L 210 60" fill="none" stroke="var(--muted)" stroke-width="2"/>
        <rect x="46" y="70" width="18" height="18" rx="3" fill="var(--pen)"/><rect x="66" y="70" width="18" height="18" rx="3" fill="var(--pen)"/><circle cx="92" cy="81" r="7" fill="var(--red)"/>
        ${[...Array(7)].map((_, i) => `<circle cx="${166 + (i % 4) * 14}" cy="${i < 4 ? 82 : 68}" r="6" fill="var(--red)"/>`).join("")}
        ${t(130, 172, "2x + 1 = 7  →  x = 3", { c: "var(--pen)", s: 14 })}`),
    },
    {
      html: `<h3>Reglas para transformar ecuaciones</h3><p>Una ecuación es como una <b>balanza en equilibrio</b>: si haces lo mismo en los dos platillos, sigue equilibrada.</p><ul><li><b>Regla de la suma</b>: se puede sumar o restar el mismo número o expresión a ambos miembros. En la práctica, un término que está sumando <mark>pasa al otro lado restando</mark>, y al revés.</li><li><b>Regla del producto</b>: se pueden multiplicar o dividir ambos miembros por un mismo número distinto de 0. Un número que multiplica a todo un miembro pasa dividiendo.</li></ul><p>Así, 5x − 4 = 2x + 11 → 5x − 2x = 11 + 4 → 3x = 15 → x = 5.</p>`,
    },
    {
      html: `<h3>Ecuaciones con paréntesis y denominadores</h3><p>Pasos ordenados para cualquier ecuación de primer grado:</p><ol><li>Quitar <b>paréntesis</b> (cuidado con el signo menos delante).</li><li>Quitar <b>denominadores</b> multiplicando todos los términos por el <mark>m.c.m.</mark> de los denominadores.</li><li><b>Agrupar</b> las x en un miembro y los números en el otro.</li><li><b>Reducir</b> términos semejantes.</li><li><b>Despejar</b> la x y <b>comprobar</b> la solución.</li></ol><p>Ejemplo: (x − 1)/2 − (x + 2)/3 = 1. Multiplicamos por 6: 3(x − 1) − 2(x + 2) = 6 → 3x − 3 − 2x − 4 = 6 → <b>x = 13</b>.</p>`,
      video: { id: "qud71ShXTK4", titulo: "Cómo solucionar ecuaciones de primer grado con fracciones", canal: "Matemáticas profe Alex", vistas: 5718984, megusta: 0 },
    },
    {
      html: `<h3>Ecuaciones sin solución o con infinitas</h3><p>Al resolver una ecuación de primer grado puede ocurrir que las x desaparezcan:</p><ul><li>Si queda algo falso, como <b>0 = 5</b>, la ecuación <mark>no tiene solución</mark>. Ejemplo: 2(x + 3) = 2x + 1 → 6 = 1.</li><li>Si queda algo siempre verdadero, como <b>0 = 0</b>, tiene <mark>infinitas soluciones</mark>: es una identidad. Ejemplo: 3(x − 1) + 3 = 3x.</li></ul><p>En los demás casos, la ecuación de primer grado tiene exactamente una solución.</p>`,
    },
    {
      html: `<h3>Ecuaciones de segundo grado</h3><p>Su forma general es <mark>ax² + bx + c = 0</mark>, con a ≠ 0. Antes de resolverla hay que pasar todos los términos a un miembro y ordenarla. Puede tener <b>dos, una o ninguna</b> solución real.</p><p>Si b o c valen 0, la ecuación es <b>incompleta</b> y se resuelve sin fórmula:</p>${tabla(["Tipo", "Cómo se resuelve", "Ejemplo"], [["ax² + c = 0", "despejar x² y hacer la raíz (±)", "x² − 16 = 0 → x = ±4"], ["ax² + bx = 0", "sacar factor común x", "x² − 5x = 0 → x(x − 5) = 0 → x = 0, x = 5"], ["ax² = 0", "x = 0 (doble)", "3x² = 0 → x = 0"]])}`,
    },
    {
      html: `<h3>La fórmula general</h3><p>Para las ecuaciones <b>completas</b> se usa la fórmula:</p><p><mark>x = (−b ± √(b² − 4ac)) / 2a</mark></p><p>Ejemplo: x² − 5x + 6 = 0, con a = 1, b = −5, c = 6. Entonces b² − 4ac = 25 − 24 = 1 y x = (5 ± 1) / 2, que da <b>x₁ = 3</b> y <b>x₂ = 2</b>. Comprobación: 9 − 15 + 6 = 0 ✓.</p><p>Consejo: identifica bien los signos de a, b y c antes de sustituir, y escribe −b con su signo correcto: si b = −5, −b = 5.</p>`,
      video: { id: "BxrJmKdPHRs", titulo: "Ecuación cuadrática por fórmula general | Ejemplo 1", canal: "Matemáticas profe Alex", vistas: 9511823, megusta: 0 },
    },
    {
      html: `<h3>El discriminante</h3><p>La expresión de dentro de la raíz, <b>Δ = b² − 4ac</b>, se llama <b>discriminante</b> y dice cuántas soluciones hay sin terminar de resolver:</p><ul><li>Δ &gt; 0: <mark>dos soluciones</mark> distintas.</li><li>Δ = 0: <mark>una solución doble</mark>, x = −b / 2a.</li><li>Δ &lt; 0: <mark>ninguna solución</mark> real (no existe la raíz de un negativo).</li></ul><p>Gráficamente, las soluciones son los puntos donde la parábola y = ax² + bx + c corta al eje X: dos cortes, un punto de contacto o ningún corte.</p>`,
      svg: svg("Tres parábolas: una corta el eje x en dos puntos, otra lo toca en uno y otra no lo corta", `<path d="M14 120 H 246" stroke="var(--muted)" stroke-width="2"/>
        <path d="M20 40 Q 52 200 84 40" fill="none" stroke="var(--leaf)" stroke-width="3"/><path d="M98 40 Q 130 200 162 40" fill="none" stroke="var(--pen)" stroke-width="3"/><path d="M176 40 Q 208 150 240 40" fill="none" stroke="var(--red)" stroke-width="3"/>
        <circle cx="34" cy="120" r="4" fill="var(--leaf)"/><circle cx="70" cy="120" r="4" fill="var(--leaf)"/><circle cx="130" cy="120" r="4" fill="var(--pen)"/>
        ${t(52, 146, "Δ > 0", { c: "var(--leaf)", s: 12 })}${t(52, 162, "2 soluciones", { s: 10 })}${t(130, 146, "Δ = 0", { c: "var(--pen)", s: 12 })}${t(130, 162, "1 solución", { s: 10 })}${t(208, 146, "Δ < 0", { c: "var(--red)", s: 12 })}${t(208, 162, "ninguna", { s: 10 })}`),
    },
    {
      html: `<h3>Suma, producto y factorización</h3><p>Si x₁ y x₂ son las soluciones de x² + bx + c = 0 (con a = 1), se cumple que <mark>x₁ + x₂ = −b</mark> y <mark>x₁ · x₂ = c</mark>. Así se pueden adivinar soluciones sencillas: en x² − 7x + 10 = 0 buscamos dos números que sumen 7 y multipliquen 10: 2 y 5.</p><p>Además, el polinomio se factoriza como a(x − x₁)(x − x₂). Y al revés, una ecuación con soluciones 3 y −4 es (x − 3)(x + 4) = 0, es decir, x² + x − 12 = 0. Cuando una ecuación ya está factorizada, cada factor igualado a 0 da una solución.</p>`,
    },
    {
      html: `<h3>Resolver problemas con ecuaciones</h3><ol><li><b>Leer</b> y entender el problema. ¿Qué me preguntan?</li><li><b>Elegir la incógnita</b> y expresar los demás datos con ella.</li><li><b>Plantear</b> la ecuación.</li><li><b>Resolver</b>.</li><li><b>Interpretar y comprobar</b>: descarta soluciones sin sentido (medidas negativas, personas decimales).</li></ol><p>Ejemplo: «La suma de un número y su cuadrado es 42». x + x² = 42 → x² + x − 42 = 0 → x = 6 o x = −7. <mark>Las dos son válidas</mark>, porque el enunciado no impide los negativos.</p>`,
      svg: svg("Rectángulo de ancho x y largo x más 3 con área 40", `<rect x="50" y="40" width="160" height="100" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/>${t(130, 96, "área = 40 m²", { c: "var(--leaf)", s: 15 })}${t(130, 30, "x + 3", { c: "var(--pen)", s: 13 })}${t(36, 94, "x", { c: "var(--pen)", s: 13 })}
        ${t(130, 166, "x(x + 3) = 40 → x = 5", { c: "var(--red)", s: 13 })}`),
    },
  ],
  figura: {
    titulo: "Cómo resolver cada tipo de ecuación",
    svg: `<svg viewBox="0 0 640 280" role="img" aria-label="Primer grado: paréntesis, denominadores, agrupar y despejar. Segundo grado incompleta: raíz o factor común. Completa: fórmula general. Discriminante: número de soluciones">
      <rect width="640" height="280" rx="16" fill="var(--paper)"/>
      ${[["1.er grado", "paréntesis → m.c.m. → agrupar → despejar", "var(--pen)"], ["ax² + c = 0", "x² = −c/a → x = ±√", "var(--leaf)"], ["ax² + bx = 0", "x(ax + b) = 0 → x = 0, x = −b/a", "var(--leaf)"], ["ax² + bx + c = 0", "x = (−b ± √(b² − 4ac)) / 2a", "var(--red)"], ["Δ = b² − 4ac", "> 0: dos · = 0: una · < 0: ninguna", "var(--inf)"]].map(([n, d, c], i) => `<rect x="20" y="${12 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${41 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="230" y="${41 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "ZC67c5ar9mA", titulo: "Ecuaciones de segundo grado por fórmula general", canal: "Daniel Carreón", vistas: 10254240, megusta: 0, busqueda: "ecuaciones de segundo grado" },
  quiz: mezcla([
    { q: "La solución de 3x − 7 = 2x + 1 es…", o: ["x = 8", "x = −6", "x = 6"], a: 0, e: "3x − 2x = 1 + 7." },
    { q: "Para quitar denominadores en x/4 + x/6 = 5 multiplico por…", o: ["10", "12", "24"], a: 1, e: "m.c.m.(4, 6) = 12." },
    { q: "La ecuación 2(x + 1) = 2x + 5…", o: ["tiene una solución", "no tiene solución", "tiene infinitas"], a: 1, e: "Queda 2 = 5, falso." },
    { q: "Las soluciones de x² − 9 = 0 son…", o: ["3", "±3", "9"], a: 1, e: "x² = 9 → x = 3 o x = −3." },
    { q: "Las soluciones de x² + 4x = 0 son…", o: ["0 y −4", "0 y 4", "−4"], a: 0, e: "x(x + 4) = 0." },
    { q: "En 2x² − 3x − 5 = 0, el discriminante vale…", o: ["49", "−31", "1"], a: 0, e: "9 + 40 = 49." },
    { q: "Si Δ < 0, la ecuación…", o: ["tiene dos soluciones", "tiene una doble", "no tiene solución real"], a: 2, e: "No hay raíz real de un negativo." },
    { q: "Las soluciones de x² − 6x + 8 = 0 son…", o: ["2 y 4", "−2 y −4", "1 y 8"], a: 0, e: "Suman 6 y multiplican 8." },
    { q: "x² − 10x + 25 = 0 tiene…", o: ["dos soluciones", "una solución doble x = 5", "ninguna"], a: 1, e: "Δ = 100 − 100 = 0." },
    { q: "Una ecuación con soluciones 1 y −2 es…", o: ["x² + x − 2 = 0", "x² − x − 2 = 0", "x² + 2 = 0"], a: 0, e: "(x − 1)(x + 2)." },
  ]),
  examen: mezcla([
    { q: "(x + 2)/3 = (x − 1)/2 tiene solución…", o: ["x = 7", "x = 1", "x = −7"], a: 0, e: "2x + 4 = 3x − 3." },
    { q: "La edad de Ana dentro de 5 años será el doble de la que tenía hace 5. Tiene…", o: ["15", "10", "20"], a: 0, e: "x + 5 = 2(x − 5)." },
    { q: "¿Cuántas soluciones tiene 3x² + x + 2 = 0?", o: ["2", "1", "0"], a: 2, e: "Δ = 1 − 24 < 0." },
  ]),
  feynman: ["Por qué una ecuación es como una balanza", "Cómo se quitan los denominadores y qué pasa con los signos", "Cuándo no hace falta la fórmula para resolver una de segundo grado", "Qué te dice el discriminante sin resolver"],
  mapa: mapa("ECUACIONES", "var(--eso)", [
    ["Primer grado", "paréntesis · m.c.m. · despejar", "var(--pen)"],
    ["Incompletas", "raíz ± · factor común", "var(--leaf)"],
    ["Fórmula general", "x = (−b ± √Δ) / 2a", "var(--red)"],
    ["Problemas", "plantear · comprobar", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["Solución de una ecuación", "Valor de la incógnita que hace cierta la igualdad."],
    ["Ecuaciones equivalentes", "Las que tienen las mismas soluciones."],
    ["Primer paso con denominadores", "Multiplicar todos los términos por el m.c.m."],
    ["Forma general de 2.º grado", "ax² + bx + c = 0, con a ≠ 0."],
    ["Fórmula general", "x = (−b ± √(b² − 4ac)) / 2a"],
    ["Discriminante", "Δ = b² − 4ac: decide cuántas soluciones hay."],
    ["ax² + bx = 0", "Factor común: x = 0 y x = −b/a."],
    ["Suma y producto de soluciones (a = 1)", "x₁ + x₂ = −b; x₁ · x₂ = c."],
  ],
  familias: ["Inventad problemas de edades de la familia y resolvedlos con ecuaciones.", "Medid una habitación rectangular y plantead la ecuación de su área.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico: ecuaciones de primer y segundo grado, discriminante, resolución de problemas y comprobación de soluciones (RD 217/2022, Matemáticas 3º).",
    ideas: ["Balanzas virtuales o reales para introducir la transposición.", "Geogebra: relacionar soluciones con cortes de la parábola.", "Banco de problemas clasificados por contexto: edades, geometría, números."],
  },
  fuentes: [RD, { t: "GeoGebra: parábolas y ecuaciones de segundo grado", url: "https://www.geogebra.org/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Resuelve: (2x − 1)/3 − (x − 2)/4 = x/6 + 1.",
      pasos: ["m.c.m.(3, 4, 6) = 12. Multiplicamos cada término por 12.", "4(2x − 1) − 3(x − 2) = 2x + 12.", "8x − 4 − 3x + 6 = 2x + 12 → 5x + 2 = 2x + 12.", "3x = 10 → x = 10/3."],
      resultado: "x = 10/3." },
    { enunciado: "Resuelve: 2x² − 3x − 2 = 0.",
      pasos: ["a = 2, b = −3, c = −2.", "Δ = 9 + 16 = 25 > 0: dos soluciones.", "x = (3 ± 5) / 4.", "x₁ = 8/4 = 2; x₂ = −2/4 = −1/2."],
      resultado: "x = 2 y x = −1/2." },
    { enunciado: "Halla dos números consecutivos cuyo producto sea 156.",
      pasos: ["Números: x y x + 1.", "x(x + 1) = 156 → x² + x − 156 = 0.", "Δ = 1 + 624 = 625; x = (−1 ± 25) / 2 → x = 12 o x = −13.", "Parejas: 12 y 13, o −13 y −12. Ambas cumplen."],
      resultado: "12 y 13 (o −13 y −12)." },
  ],
  errores: [
    "Al multiplicar por el m.c.m., olvidar multiplicar los términos sin denominador.",
    "No cambiar el signo de todo el numerador cuando hay un menos delante de una fracción.",
    "En x² = 16, dar solo x = 4 y olvidar x = −4.",
    "En x² − 5x = 0, dividir entre x y perder la solución x = 0.",
    "Aplicar la fórmula sin igualar antes a 0.",
    "No comprobar si las soluciones tienen sentido en el problema.",
  ],
  ejercicios: [
    { q: "Resuelve: 4(x − 3) − 2(x + 1) = 6.", sol: "4x − 12 − 2x − 2 = 6 → 2x = 20 → x = 10." },
    { q: "Resuelve: x/2 + x/3 = 10.", sol: "Por 6: 3x + 2x = 60 → x = 12." },
    { q: "Resuelve: (x + 1)/4 − (x − 3)/2 = 1.", sol: "Por 4: x + 1 − 2(x − 3) = 4 → x + 1 − 2x + 6 = 4 → −x = −3 → x = 3." },
    { q: "Resuelve: 3x² − 27 = 0.", sol: "x² = 9 → x = ±3." },
    { q: "Resuelve: 2x² + 6x = 0.", sol: "2x(x + 3) = 0 → x = 0, x = −3." },
    { q: "Resuelve: x² + 2x − 15 = 0.", sol: "Δ = 4 + 60 = 64; x = (−2 ± 8) / 2 → x = 3, x = −5." },
    { q: "Sin resolver, ¿cuántas soluciones tiene 4x² − 4x + 1 = 0? ¿Y x² + x + 1 = 0?", sol: "Δ = 16 − 16 = 0: una doble (x = 1/2). Δ = 1 − 4 = −3: ninguna." },
    { q: "Resuelve: (x − 2)(x + 5) = 0 y (x − 1)² = 4.", sol: "x = 2, x = −5. x − 1 = ±2 → x = 3, x = −1." },
    { q: "Un padre tiene 40 años y su hija 10. ¿Dentro de cuántos años la edad del padre será el doble de la de la hija?", sol: "40 + x = 2(10 + x) → 40 + x = 20 + 2x → x = 20 años." },
    { q: "El área de un cuadrado aumentado en 5 cm de lado es 121 cm². ¿Cuál era el lado inicial?", sol: "(x + 5)² = 121 → x + 5 = 11 (la negativa no vale) → x = 6 cm." },
  ],
};
