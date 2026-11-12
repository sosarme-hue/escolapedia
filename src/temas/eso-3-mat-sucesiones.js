// Matemáticas 3º ESO: sucesiones y progresiones. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Sucesiones y progresiones",
  minutos: 60,
  objetivos: ["Reconocer sucesiones y hallar su término general o una ley de recurrencia", "Identificar progresiones aritméticas y geométricas", "Calcular cualquier término y la suma de los n primeros términos", "Resolver problemas de crecimiento lineal y exponencial"],
  claves: ["sucesión", "término general", "diferencia", "razón", "progresión aritmética", "progresión geométrica"],
  pregunta: {
    texto: "Te ofrecen dos trabajos de un mes: A, 100 € al día; B, 1 céntimo el primer día, 2 el segundo, 4 el tercero, y así doblando. ¿Cuál eliges?",
    respuesta: "A da 3.000 € en 30 días. B empieza ridículo, pero es una <b>progresión geométrica</b> de razón 2: el día 30 cobrarías 2²⁹ céntimos, más de 5 millones de euros, y en total <mark>más de 10 millones</mark>. ¡Elige B!",
  },
  bloques: [
    {
      html: `<h3>Qué es una sucesión</h3><p>Una <b>sucesión</b> es una lista ordenada de números: a₁, a₂, a₃, … Cada número es un <b>término</b> y el subíndice indica su <mark>lugar</mark>. Por ejemplo, en 2, 5, 10, 17, 26, … el primer término es a₁ = 2 y el cuarto, a₄ = 17.</p><p>Las sucesiones aparecen al contar figuras que crecen (palillos, baldosas), al anotar el dinero de una hucha cada semana o al medir la altura de una pelota que rebota. Si descubrimos la <b>regla</b> que siguen, podremos predecir cualquier término sin escribirlos todos.</p>`,
      svg: svg("Figuras de puntos cuadradas: 1, 4, 9 y 16 puntos, la sucesión de los cuadrados", `${[1, 2, 3, 4].map((n, k) => { const x0 = [22, 52, 98, 162][k]; return [...Array(n * n)].map((_, i) => `<circle cx="${x0 + (i % n) * 14}" cy="${108 - (n - 1) * 14 + Math.floor(i / n) * 14}" r="5" fill="var(--pen)"/>`).join("") + t(x0 + (n - 1) * 7, 140, n * n, { s: 13 }) + t(x0 + (n - 1) * 7, 160, "a" + ["₁", "₂", "₃", "₄"][k], { c: "var(--muted)", s: 11 }); }).join("")}
        ${t(130, 28, "1, 4, 9, 16, …  aₙ = n²", { c: "var(--pen)", s: 14 })}`),
    },
    {
      html: `<h3>Término general y ley de recurrencia</h3><p>El <b>término general</b> aₙ es una fórmula que da cada término a partir de su lugar n. Si aₙ = 3n − 1, los términos son 2, 5, 8, 11, … y el término 100 es a₁₀₀ = 299, sin necesidad de calcular los anteriores.</p><p>Otras sucesiones se describen con una <b>ley de recurrencia</b>, que calcula cada término a partir de los anteriores. La más famosa es la de <mark>Fibonacci</mark>: a₁ = 1, a₂ = 1 y aₙ = aₙ₋₁ + aₙ₋₂, que da 1, 1, 2, 3, 5, 8, 13, 21, … y aparece en las piñas, los girasoles y las conchas.</p>`,
    },
    {
      html: `<h3>Progresiones aritméticas</h3><p>Una <b>progresión aritmética</b> es una sucesión en la que cada término se obtiene <mark>sumando</mark> al anterior un número fijo, la <b>diferencia</b> d. Ejemplos: 3, 7, 11, 15, … (d = 4) y 20, 17, 14, … (d = −3).</p><p>Para saber si una sucesión es aritmética, se restan términos consecutivos: si siempre sale lo mismo, lo es. Si d &gt; 0, la progresión es <b>creciente</b>; si d &lt; 0, <b>decreciente</b>; si d = 0, <b>constante</b>. Al representarla, los puntos quedan en línea recta: es un crecimiento <b>lineal</b>.</p>`,
      svg: svg("Escalera de puntos alineados: progresión aritmética 3, 7, 11, 15, 19 que sube siempre 4", `<path d="M30 150 H 240 M30 150 V 20" stroke="var(--muted)" stroke-width="2"/>
        ${[3, 7, 11, 15, 19].map((v, i) => `<circle cx="${60 + i * 40}" cy="${150 - v * 6.4}" r="6" fill="var(--pen)"/>${t(60 + i * 40, 140 - v * 6.4, v, { s: 11 })}${t(60 + i * 40, 166, "n=" + (i + 1), { c: "var(--muted)", s: 10 })}${i ? t(40 + i * 40, 160 - v * 6.4 + 12, "+4", { c: "var(--leaf)", s: 10 }) : ""}`).join("")}
        <path d="M60 131 L 220 29" stroke="var(--pen)" stroke-width="1.5" stroke-dasharray="4 4"/>`),
      video: { id: "VvOoYZj_OiE", titulo: "Progresión aritmética | Introducción", canal: "Matemáticas profe Alex", vistas: 3672337, megusta: 0 },
    },
    {
      html: `<h3>Término general de una progresión aritmética</h3><p>Para llegar al término n desde el primero hay que sumar la diferencia (n − 1) veces:</p><p><mark>aₙ = a₁ + (n − 1) · d</mark></p><p>En 3, 7, 11, …: aₙ = 3 + (n − 1) · 4 = 4n − 1, y a₅₀ = 199. La fórmula también sirve para hallar a₁, d o n si conocemos los demás datos. Si conocemos dos términos cualesquiera, aₖ y aₘ, la diferencia es d = (aₘ − aₖ) / (m − k).</p>`,
    },
    {
      html: `<h3>Suma de términos de una progresión aritmética</h3><p>Cuenta la leyenda que el joven <b>Gauss</b> sumó de 1 a 100 en segundos: emparejó el primero con el último (1 + 100), el segundo con el penúltimo (2 + 99), y así 50 parejas que suman 101. Total: 50 · 101 = 5.050.</p><p>Ese truco funciona con cualquier progresión aritmética, porque los términos equidistantes de los extremos suman lo mismo:</p><p><mark>Sₙ = (a₁ + aₙ) · n / 2</mark></p>`,
      svg: svg("Truco de Gauss: 1 más 100, 2 más 99, 3 más 98: cada pareja suma 101 y hay 50 parejas", `${[["1", "100"], ["2", "99"], ["3", "98"], ["…", "…"], ["50", "51"]].map(([a, b], i) => `<rect x="30" y="${16 + i * 28}" width="60" height="22" rx="6" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${t(60, 32 + i * 28, a, { s: 12 })}<rect x="130" y="${16 + i * 28}" width="60" height="22" rx="6" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${t(160, 32 + i * 28, b, { s: 12 })}${t(110, 32 + i * 28, "+", { s: 13 })}${t(222, 32 + i * 28, "= 101", { c: "var(--red)", s: 12 })}`).join("")}
        ${t(130, 170, "50 parejas · 101 = 5.050", { c: "var(--red)", s: 13 })}`),
    },
    {
      html: `<h3>Progresiones geométricas</h3><p>Una <b>progresión geométrica</b> es una sucesión en la que cada término se obtiene <mark>multiplicando</mark> el anterior por un número fijo, la <b>razón</b> r. Ejemplos: 2, 6, 18, 54, … (r = 3) y 80, 40, 20, 10, … (r = 1/2). Para comprobarlo, se divide cada término entre el anterior.</p><p>Su término general es <mark>aₙ = a₁ · rⁿ⁻¹</mark>. En 2, 6, 18, …: a₆ = 2 · 3⁵ = 486. Si r &gt; 1 (con a₁ positivo), crece muy deprisa; si 0 &lt; r &lt; 1, decrece hacia 0; si r es negativa, los signos van alternando.</p>`,
    },
    {
      html: `<h3>Suma de términos de una progresión geométrica</h3><p>La suma de los n primeros términos (con r ≠ 1) es:</p><p><mark>Sₙ = a₁ · (rⁿ − 1) / (r − 1)</mark></p><p>En el problema del sueldo que se dobla: a₁ = 1 céntimo, r = 2, n = 30 → S₃₀ = 2³⁰ − 1 = 1.073.741.823 céntimos, más de 10,7 millones de euros.</p><p>Si 0 &lt; |r| &lt; 1, la suma de <b>infinitos</b> términos no crece sin límite: se acerca a S = a₁ / (1 − r). Así, 1/2 + 1/4 + 1/8 + … = (1/2) / (1/2) = 1.</p>`,
      video: { id: "q-c5VLWvL6w", titulo: "Progresión geométrica: término general y suma de términos", canal: "Susi Profe", vistas: 1423504, megusta: 0 },
    },
    {
      html: `<h3>Aritmética frente a geométrica</h3>${tabla(["", "Aritmética", "Geométrica"], [["Paso", "se suma d", "se multiplica por r"], ["Término general", "a₁ + (n − 1) · d", "a₁ · rⁿ⁻¹"], ["Suma", "(a₁ + aₙ) · n / 2", "a₁ · (rⁿ − 1) / (r − 1)"], ["Crecimiento", "lineal", "exponencial"], ["Ejemplo", "ahorrar 5 € cada semana", "bacterias que se duplican"]])}<p>Una aritmética creciente acaba siempre superada por una geométrica de razón mayor que 1, aunque esta empiece más pequeña.</p>`,
    },
    {
      html: `<h3>Progresiones en la vida real</h3><ul><li><b>Interés simple</b>: si un capital genera siempre el mismo interés cada año, el dinero forma una progresión aritmética.</li><li><b>Interés compuesto</b>: si los intereses se suman al capital, cada año se multiplica por (1 + i): es geométrica. 1.000 € al 4 % → 1.000 · 1,04ⁿ.</li><li><b>Depreciación</b>: un coche que pierde el 15 % de su valor cada año se multiplica por 0,85.</li><li><b>Asientos de un teatro</b> que aumentan en 2 por fila: aritmética.</li></ul>`,
      svg: svg("Comparación en 10 años de 1.000 euros: con interés simple al 10 por ciento crece en línea recta; con interés compuesto crece en curva y acaba por encima", `<path d="M30 150 H 240 M30 150 V 20" stroke="var(--muted)" stroke-width="2"/>
        <path d="${[...Array(11)].map((_, n) => `${n ? "L" : "M"}${30 + n * 20} ${150 - (1000 + 100 * n - 900) * 0.055}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <path d="${[...Array(11)].map((_, n) => `${n ? "L" : "M"}${30 + n * 20} ${150 - (1000 * Math.pow(1.1, n) - 900) * 0.055}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="3"/>
        ${t(150, 76, "simple (+100)", { c: "var(--pen)", s: 11, a: "start" })}${t(40, 40, "compuesto (· 1,1)", { c: "var(--red)", s: 11, a: "start" })}${t(135, 168, "años", { c: "var(--muted)", s: 11 })}`),
    },
  ],
  figura: {
    titulo: "Fórmulas de las progresiones",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Aritmética: término general a1 más n menos 1 por d, suma a1 más an por n entre 2. Geométrica: término general a1 por r elevado a n menos 1, suma a1 por r elevado a n menos 1 entre r menos 1">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Aritmética: aₙ", "aₙ = a₁ + (n − 1) · d", "var(--pen)"], ["Aritmética: Sₙ", "Sₙ = (a₁ + aₙ) · n / 2", "var(--pen)"], ["Geométrica: aₙ", "aₙ = a₁ · rⁿ⁻¹", "var(--red)"], ["Geométrica: Sₙ", "Sₙ = a₁ · (rⁿ − 1) / (r − 1)", "var(--red)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="250" y="${42 + i * 52}" font-size="17" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "FGoSqeFl5zg", titulo: "Sucesiones súper fácil", canal: "Daniel Carreón", vistas: 7756400, megusta: 0, busqueda: "sucesiones y progresiones" },
  quiz: mezcla([
    { q: "El término general de 5, 8, 11, 14, … es…", o: ["3n + 2", "5n + 3", "3n + 5"], a: 0, e: "a₁ = 5 y d = 3: 5 + 3(n − 1) = 3n + 2." },
    { q: "¿Qué sucesión es geométrica?", o: ["2, 4, 6, 8", "3, 6, 12, 24", "1, 4, 9, 16"], a: 1, e: "Cada término se multiplica por 2." },
    { q: "En una progresión aritmética con a₁ = 7 y d = −2, a₅ es…", o: ["−1", "15", "−3"], a: 0, e: "7 + 4 · (−2) = −1." },
    { q: "La razón de 64, 16, 4, 1, … es…", o: ["−48", "1/4", "4"], a: 1, e: "16 / 64 = 1/4." },
    { q: "1 + 2 + 3 + … + 50 =", o: ["1.275", "2.550", "1.250"], a: 0, e: "(1 + 50) · 50 / 2." },
    { q: "Siguiente término de Fibonacci tras 8 y 13:", o: ["18", "21", "26"], a: 1, e: "8 + 13." },
    { q: "Si aₙ = n² + 1, a₃ =", o: ["7", "10", "9"], a: 1, e: "3² + 1 = 10." },
    { q: "Un capital al 5 % de interés compuesto cada año se multiplica por…", o: ["0,05", "1,05", "5"], a: 1, e: "Capital + 5 % = 1,05 veces." },
    { q: "Una progresión aritmética de diferencia positiva es…", o: ["creciente", "decreciente", "constante"], a: 0, e: "Cada término es mayor que el anterior." },
    { q: "En una geométrica con a₁ = 3 y r = 2, a₅ es…", o: ["48", "24", "11"], a: 0, e: "3 · 2⁴ = 48." },
  ]),
  examen: mezcla([
    { q: "En una aritmética, a₃ = 10 y a₇ = 22. La diferencia es…", o: ["3", "4", "12"], a: 0, e: "(22 − 10) / 4 = 3." },
    { q: "1/2 + 1/4 + 1/8 + … (infinitos términos) =", o: ["Infinito", "1", "2"], a: 1, e: "a₁ / (1 − r) = (1/2) / (1/2)." },
    { q: "La suma de los 5 primeros términos de 1, 3, 9, … es…", o: ["121", "81", "243"], a: 0, e: "(3⁵ − 1) / (3 − 1) = 242 / 2." },
  ]),
  feynman: ["Diferencia entre término general y ley de recurrencia", "Cómo saber si una progresión es aritmética o geométrica", "El truco de Gauss para sumar una progresión aritmética", "Por qué el interés compuesto crece más que el simple"],
  mapa: mapa("SUCESIONES", "var(--eso)", [
    ["Sucesión", "términos · aₙ · recurrencia", "var(--ink)"],
    ["Aritmética", "se suma d · lineal", "var(--pen)"],
    ["Geométrica", "se multiplica r · exponencial", "var(--red)"],
    ["Aplicaciones", "intereses · población", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["Término general", "Fórmula que da el término aₙ a partir de su lugar n."],
    ["Ley de recurrencia", "Regla que calcula cada término a partir de los anteriores."],
    ["Progresión aritmética", "Cada término es el anterior más la diferencia d."],
    ["aₙ en una aritmética", "a₁ + (n − 1) · d"],
    ["Sₙ en una aritmética", "(a₁ + aₙ) · n / 2"],
    ["Progresión geométrica", "Cada término es el anterior por la razón r."],
    ["aₙ en una geométrica", "a₁ · rⁿ⁻¹"],
    ["Sₙ en una geométrica", "a₁ · (rⁿ − 1) / (r − 1)"],
  ],
  familias: ["Simulad con una hoja de cálculo cuánto crecen 100 € al 3 % de interés compuesto en 20 años.", "Buscad la sucesión de Fibonacci en piñas, girasoles o alcachofas.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico: patrones, sucesiones, término general, progresiones aritméticas y geométricas, suma de términos (RD 217/2022, Matemáticas 3º).",
    ideas: ["Construir figuras con palillos y deducir el término general.", "Hoja de cálculo para comparar interés simple y compuesto.", "Relato del ajedrez y los granos de trigo como reto de cálculo."],
  },
  fuentes: [RD, { t: "Banco de España, Portal del Cliente Bancario: interés simple y compuesto", url: "https://clientebancario.bde.es/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "En una progresión aritmética, a₄ = 17 y a₁₀ = 41. Halla a₁, d, el término general y la suma de los 20 primeros términos.",
      pasos: ["d = (41 − 17) / (10 − 4) = 24 / 6 = 4.", "a₁ = a₄ − 3d = 17 − 12 = 5.", "aₙ = 5 + (n − 1) · 4 = 4n + 1.", "a₂₀ = 81; S₂₀ = (5 + 81) · 20 / 2 = 860."],
      resultado: "a₁ = 5, d = 4, aₙ = 4n + 1, S₂₀ = 860." },
    { enunciado: "Un coche cuesta 20.000 € y pierde el 20 % de su valor cada año. ¿Cuánto valdrá a los 4 años?",
      pasos: ["Cada año conserva el 80 %: se multiplica por r = 0,8.", "Valor tras n años: 20.000 · 0,8ⁿ.", "n = 4: 20.000 · 0,8⁴ = 20.000 · 0,4096 = 8.192 €."],
      resultado: "8.192 €." },
    { enunciado: "Un teatro tiene 20 butacas en la primera fila y cada fila tiene 3 más que la anterior. Si hay 15 filas, ¿cuántas butacas hay en total?",
      pasos: ["Es aritmética: a₁ = 20, d = 3.", "a₁₅ = 20 + 14 · 3 = 62.", "S₁₅ = (20 + 62) · 15 / 2 = 615."],
      resultado: "615 butacas." },
  ],
  errores: [
    "Usar n en vez de (n − 1) en el término general: a₁ + n · d.",
    "Confundir diferencia (se resta) con razón (se divide).",
    "Calcular la razón dividiendo el término anterior entre el siguiente.",
    "En la suma geométrica, escribir rⁿ⁻¹ en lugar de rⁿ.",
    "Aplicar la fórmula de la suma infinita cuando |r| ≥ 1.",
    "Pensar que un descuento del 20 % anual se multiplica por 0,2 en vez de por 0,8.",
  ],
  ejercicios: [
    { q: "Escribe los cinco primeros términos de aₙ = 2n² − 1.", sol: "1, 7, 17, 31, 49." },
    { q: "Halla el término general de 4, 9, 14, 19, …", sol: "Aritmética con a₁ = 4 y d = 5: aₙ = 4 + 5(n − 1) = 5n − 1." },
    { q: "Escribe los seis primeros términos de a₁ = 2, a₂ = 3, aₙ = aₙ₋₁ + aₙ₋₂.", sol: "2, 3, 5, 8, 13, 21." },
    { q: "En una progresión aritmética, a₁ = 12 y d = −5. ¿Qué lugar ocupa el término −38?", sol: "−38 = 12 + (n − 1)(−5) → −50 = −5(n − 1) → n − 1 = 10 → n = 11." },
    { q: "Suma los múltiplos de 3 entre 3 y 99.", sol: "Hay 33 términos (3 · 1 a 3 · 33). S = (3 + 99) · 33 / 2 = 1.683." },
    { q: "Halla el término general de 5, 10, 20, 40, …", sol: "Geométrica con a₁ = 5 y r = 2: aₙ = 5 · 2ⁿ⁻¹." },
    { q: "En una progresión geométrica, a₂ = 6 y a₅ = 162. Halla r y a₁.", sol: "a₅ / a₂ = r³ = 27 → r = 3. a₁ = 6 / 3 = 2." },
    { q: "Suma los 8 primeros términos de 1, 2, 4, 8, …", sol: "S₈ = 1 · (2⁸ − 1) / (2 − 1) = 255." },
    { q: "Una pelota cae desde 8 m y en cada bote sube la mitad de la altura anterior. ¿Qué altura alcanza tras el cuarto bote?", sol: "8 · (1/2)⁴ = 8 / 16 = 0,5 m." },
    { q: "Ingresas 2.000 € al 3 % de interés compuesto anual. ¿Cuánto tendrás a los 5 años?", sol: "2.000 · 1,03⁵ ≈ 2.000 · 1,1593 ≈ 2.318,55 €." },
  ],
};
