// Matemáticas 2º ESO: ecuaciones de segundo grado y sistemas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, ejes, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Ecuaciones de segundo grado y sistemas",
  minutos: 65,
  objetivos: ["Reconocer y resolver ecuaciones de segundo grado completas e incompletas", "Usar el discriminante para saber cuántas soluciones hay", "Resolver sistemas de dos ecuaciones lineales por sustitución, igualación y reducción", "Plantear problemas con ecuaciones de segundo grado y con sistemas"],
  claves: ["ecuación de segundo grado", "fórmula general", "discriminante", "sistema de ecuaciones", "sustitución", "reducción"],
  pregunta: {
    texto: "Un jardín cuadrado tiene 49 m². Si le añades un camino de 1 m alrededor, ¿cuánto mide el lado del jardín? ¿Y si solo sabes que el área total con el camino es 81 m²?",
    respuesta: "El lado del jardín es 7 m (7² = 49). En el segundo caso, si el lado es x, con el camino mide x + 2 y (x + 2)² = 81, así que x + 2 = 9 y <mark>x = 7 m</mark>. Cuando la incógnita aparece al cuadrado tenemos una <b>ecuación de segundo grado</b>, que puede tener dos soluciones (aquí la otra, x = −11, no tiene sentido como longitud).",
  },
  bloques: [
    {
      html: `<h3>Ecuaciones de segundo grado</h3><p>Una ecuación es de <b>segundo grado</b> si, después de simplificarla, la incógnita aparece elevada al cuadrado. Su forma general es:</p><p><mark>ax² + bx + c = 0</mark>, con a ≠ 0.</p><p>a es el coeficiente de x², b el de x y c el término independiente. En 3x² − 5x + 2 = 0: a = 3, b = −5, c = 2.</p><p>Si b o c valen 0, la ecuación es <b>incompleta</b> y se resuelve sin fórmula. Una ecuación de segundo grado puede tener <b>dos soluciones, una o ninguna</b>.</p>`,
    },
    {
      html: `<h3>Ecuaciones incompletas</h3><ul><li><b>Sin término en x (b = 0)</b>: ax² + c = 0. Se despeja x² y se hace la raíz, que da dos soluciones opuestas. 2x² − 50 = 0 → x² = 25 → <b>x = 5 o x = −5</b>. Si x² sale negativo (x² = −4), no hay solución.</li><li><b>Sin término independiente (c = 0)</b>: ax² + bx = 0. Se saca factor común x: x(ax + b) = 0. Un producto es 0 si alguno de los factores es 0, así que <b>x = 0</b> o ax + b = 0. 3x² − 12x = 0 → x(3x − 12) = 0 → <b>x = 0 o x = 4</b>.</li></ul><p>¡No dividas entre x! Perderías la solución x = 0.</p>`,
      video: { id: "7jVEhhZ6Khg", titulo: "Ecuaciones de segundo grado incompletas puras", canal: "Susi Profe", vistas: 2938920 },
    },
    {
      html: `<h3>La fórmula general</h3><p>Una ecuación completa ax² + bx + c = 0 se resuelve con la fórmula:</p><p style="font-size:1.25em;text-align:center"><mark>x = (−b ± √(b² − 4ac)) / 2a</mark></p><p>Ejemplo: x² − 5x + 6 = 0. a = 1, b = −5, c = 6.</p><p>x = (5 ± √(25 − 24)) / 2 = (5 ± 1) / 2 → <b>x = 3</b> o <b>x = 2</b>.</p><p>Comprobación: 3² − 15 + 6 = 0 ✔ y 2² − 10 + 6 = 0 ✔. Antes de aplicar la fórmula hay que dejar la ecuación igualada a 0 y con los términos ordenados.</p>`,
      video: { id: "ZC67c5ar9mA", titulo: "Ecuaciones de segundo grado por fórmula general", canal: "Daniel Carreón", vistas: 10254506 },
    },
    {
      html: `<h3>El discriminante</h3><p>Lo que hay dentro de la raíz, <b>Δ = b² − 4ac</b>, se llama <b>discriminante</b> y dice cuántas soluciones hay sin terminar de resolver:</p>${tabla(["Δ", "Soluciones", "Ejemplo"], [["Δ > 0", "dos soluciones distintas", "x² − 5x + 6 = 0 (Δ = 1)"], ["Δ = 0", "una solución (doble)", "x² − 6x + 9 = 0 (Δ = 0) → x = 3"], ["Δ < 0", "ninguna solución real", "x² + x + 1 = 0 (Δ = −3)"]])}<p>En la gráfica de y = ax² + bx + c (una <b>parábola</b>), las soluciones son los puntos donde corta al eje X.</p>`,
      svg: svg("Tres parábolas: una corta el eje x en dos puntos, otra lo toca en uno y otra no lo corta", `${ejes(130, 120, 14, [-8, 8], [-2, 6], { rejilla: false })}
        <path d="${[...Array(21)].map((_, i) => { const x = -7.5 + i * 0.25; return `${i ? "L" : "M"}${(130 + x * 14).toFixed(1)} ${(120 - ((x + 5) ** 2 - 2) * 14).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
        <path d="${[...Array(21)].map((_, i) => { const x = -2.5 + i * 0.25; return `${i ? "L" : "M"}${(130 + x * 14).toFixed(1)} ${(120 - x * x * 14).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--sun)" stroke-width="2.5"/>
        <path d="${[...Array(17)].map((_, i) => { const x = 3 + i * 0.25; return `${i ? "L" : "M"}${(130 + x * 14).toFixed(1)} ${(120 - ((x - 5) ** 2 + 1.5) * 14).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        ${t(60, 174, "Δ > 0: 2", { c: "var(--leaf)", s: 12 })}${t(130, 174, "Δ = 0: 1", { c: "var(--sun)", s: 12 })}${t(200, 174, "Δ < 0: 0", { c: "var(--red)", s: 12 })}`),
    },
    {
      html: `<h3>Sistemas de ecuaciones lineales</h3><p>Un <b>sistema</b> son dos ecuaciones con dos incógnitas que deben cumplirse <b>a la vez</b>:</p><p>{ x + y = 10<br>{ x − y = 2</p><p>La <b>solución</b> es la pareja de valores que cumple las dos: x = 6, y = 4 (6 + 4 = 10 y 6 − 4 = 2).</p><p>Cada ecuación lineal con dos incógnitas tiene infinitas soluciones, que forman una <b>recta</b>. La solución del sistema es el <mark>punto donde se cortan las dos rectas</mark>. Si las rectas son paralelas, el sistema no tiene solución; si son la misma, tiene infinitas.</p>`,
      svg: svg("Dos rectas, x más y igual a 10 y x menos y igual a 2, se cortan en el punto (6, 4)", `${ejes(26, 156, 14, [0, 11], [0, 10])}<path d="M26 ${156 - 140} L ${26 + 140} 156" stroke="var(--pen)" stroke-width="2.5"/><path d="M${26 + 28} 156 L ${26 + 154} ${156 - 126}" stroke="var(--leaf)" stroke-width="2.5"/><circle cx="${26 + 84}" cy="${156 - 56}" r="5" fill="var(--red)"/>${t(26 + 84, 156 - 66, "(6, 4)", { c: "var(--red)", s: 12, a: "end" })}${t(214, 40, "x − y = 2", { c: "var(--leaf)", s: 11 })}${t(78, 30, "x + y = 10", { c: "var(--pen)", s: 11, a: "start" })}`),
    },
    {
      html: `<h3>Métodos de sustitución e igualación</h3><p><b>Sustitución</b>: se despeja una incógnita en una ecuación y se sustituye en la otra.</p><p>{ 2x + y = 7 ; x − 3y = −7. De la primera: y = 7 − 2x. En la segunda: x − 3(7 − 2x) = −7 → x − 21 + 6x = −7 → 7x = 14 → <b>x = 2</b>, y = 7 − 4 = <b>3</b>.</p><p><b>Igualación</b>: se despeja la misma incógnita en las dos ecuaciones y se igualan las expresiones. Con { y = 2x − 1 ; y = x + 3: 2x − 1 = x + 3 → <b>x = 4</b>, y = <b>7</b>.</p><p>Sustitución conviene cuando una incógnita tiene coeficiente 1 o −1.</p>`,
      video: { id: "LTfv1G2iYuQ", titulo: "Sistemas de ecuaciones 2×2: método de sustitución", canal: "Matemáticas profe Alex", vistas: 11461146 },
    },
    {
      html: `<h3>Método de reducción</h3><p>Se multiplican las ecuaciones por números adecuados para que una incógnita tenga coeficientes <b>opuestos</b>; al sumarlas, esa incógnita desaparece.</p><p>{ 3x + 2y = 16 ; 5x − 2y = 0. Los coeficientes de y ya son opuestos: sumando, 8x = 16 → <b>x = 2</b>. Sustituyendo: 6 + 2y = 16 → <b>y = 5</b>.</p><p>{ 2x + 3y = 8 ; 3x + 2y = 7. Multiplicamos la primera por 3 y la segunda por −2: 6x + 9y = 24 ; −6x − 4y = −14. Sumando: 5y = 10 → y = 2, y entonces x = 1.</p><p>Comprueba siempre la solución en <b>las dos</b> ecuaciones.</p>`,
    },
    {
      html: `<h3>Problemas con sistemas y de segundo grado</h3><p><b>Con sistema</b>: «En un corral hay gallinas y conejos: 25 cabezas y 70 patas». x = gallinas, y = conejos. { x + y = 25 ; 2x + 4y = 70. Por sustitución: x = 25 − y → 50 − 2y + 4y = 70 → y = 10, x = 15. <b>15 gallinas y 10 conejos.</b></p><p><b>De segundo grado</b>: «Un rectángulo tiene 3 cm más de largo que de ancho y 40 cm² de área». x(x + 3) = 40 → x² + 3x − 40 = 0 → x = (−3 ± √169)/2 = (−3 ± 13)/2 → x = 5 o x = −8. Como un lado no puede ser negativo: <b>5 cm × 8 cm</b>.</p><p>En los problemas, descarta las soluciones que no tienen sentido.</p>`,
    },
  ],
  figura: {
    titulo: "Segundo grado y sistemas en un vistazo",
    svg: filas("Resumen: forma general, incompletas, fórmula, discriminante, sistema como corte de rectas y tres métodos", [["Forma general", "ax² + bx + c = 0", "var(--pen)"], ["Incompletas", "despejar x² · sacar factor común x", "var(--sun)"], ["Fórmula", "x = (−b ± √(b² − 4ac)) / 2a", "var(--leaf)"], ["Discriminante", "Δ > 0: dos · Δ = 0: una · Δ < 0: ninguna", "var(--red)"], ["Sistema", "punto de corte de dos rectas", "var(--inf)"], ["Métodos", "sustitución · igualación · reducción", "var(--ink)"]], 200),
  },
  video: { id: "BxrJmKdPHRs", titulo: "Ecuación cuadrática por fórmula general", canal: "Matemáticas profe Alex", vistas: 9511936, megusta: 0, busqueda: "ecuaciones de segundo grado fórmula" },
  quiz: mezcla([
    { q: "En 2x² − 3x + 7 = 0, el valor de b es…", o: ["−3", "3", "2"], a: 0, e: "Coeficiente de x." },
    { q: "Soluciones de x² = 36:", o: ["6 y −6", "solo 6", "18"], a: 0, e: "Dos opuestas." },
    { q: "Soluciones de x² − 4x = 0:", o: ["0 y 4", "solo 4", "2 y −2"], a: 0, e: "x(x − 4) = 0." },
    { q: "x² + 9 = 0 tiene…", o: ["ninguna solución real", "x = 3", "x = ±3"], a: 0, e: "x² = −9." },
    { q: "El discriminante de x² + 2x + 1 = 0 es…", o: ["0", "4", "−4"], a: 0, e: "4 − 4." },
    { q: "Si Δ > 0, la ecuación tiene…", o: ["dos soluciones", "una", "ninguna"], a: 0, e: "Raíz positiva." },
    { q: "Soluciones de x² − 7x + 10 = 0:", o: ["5 y 2", "−5 y −2", "7 y 10"], a: 0, e: "(7 ± 3)/2." },
    { q: "La solución de { x + y = 8 ; x − y = 2 } es…", o: ["x = 5, y = 3", "x = 3, y = 5", "x = 4, y = 4"], a: 0, e: "Sumando: 2x = 10." },
    { q: "Gráficamente, la solución de un sistema es…", o: ["el punto de corte de las rectas", "el origen", "la pendiente"], a: 0, e: "Cumple las dos." },
    { q: "Si las dos rectas son paralelas, el sistema…", o: ["no tiene solución", "tiene una", "tiene dos"], a: 0, e: "No se cortan." },
  ]),
  examen: mezcla([
    { q: "Soluciones de 2x² + x − 6 = 0:", o: ["3/2 y −2", "2 y −3/2", "6 y −1"], a: 0, e: "(−1 ± 7)/4." },
    { q: "Solución de { 2x + y = 9 ; x − y = 3 }:", o: ["x = 4, y = 1", "x = 3, y = 3", "x = 5, y = −1"], a: 0, e: "3x = 12." },
    { q: "Dos números suman 20 y su diferencia es 6. El mayor es…", o: ["13", "14", "7"], a: 0, e: "2x = 26." },
  ]),
  feynman: ["Qué diferencia una ecuación de segundo grado de una de primero", "Cómo se resuelven las incompletas sin fórmula", "Qué indica el discriminante", "Qué es la solución de un sistema y cómo se ve en una gráfica", "Cuándo conviene cada método"],
  mapa: mapa("2.º GRADO Y SISTEMAS", "var(--eso)", [
    ["Incompletas", "despejar · factor común", "var(--sun)"],
    ["Fórmula", "(−b ± √Δ)/2a", "var(--leaf)"],
    ["Sistemas", "dos ecuaciones a la vez", "var(--pen)"],
    ["Métodos", "sustitución · igualación · reducción", "var(--red)"],
  ], 250),
  tarjetas: [
    ["Ecuación de 2.º grado", "ax² + bx + c = 0, con a ≠ 0."],
    ["ax² + c = 0", "x² = −c/a; dos soluciones opuestas si es positivo."],
    ["ax² + bx = 0", "x(ax + b) = 0 → x = 0 o x = −b/a."],
    ["Fórmula general", "x = (−b ± √(b² − 4ac))/2a."],
    ["Discriminante", "Δ = b² − 4ac: indica el número de soluciones."],
    ["Sistema", "Dos ecuaciones que se cumplen a la vez."],
    ["Sustitución", "Despejar en una y sustituir en la otra."],
    ["Reducción", "Sumar ecuaciones para eliminar una incógnita."],
  ],
  familias: ["Plantead problemas con dos datos desconocidos: precios de dos productos, edades de dos hermanos…", "Usad una app de gráficas para ver dónde se cortan dos rectas.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Ecuaciones de segundo grado completas e incompletas; discriminante; sistemas de dos ecuaciones lineales con dos incógnitas: métodos algebraicos e interpretación gráfica; resolución de problemas (RD 217/2022, Matemáticas, sentido algebraico).",
    ideas: ["Problemas clásicos de gallinas y conejos con tablas de tanteo antes del sistema.", "GeoGebra para ver el corte de dos rectas y de una parábola con el eje X.", "Comparar los tres métodos con el mismo sistema."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): ecuaciones y sistemas", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Resuelve: (x − 1)² = 2x + 6.", pasos: ["x² − 2x + 1 = 2x + 6 → x² − 4x − 5 = 0.", "Δ = 16 + 20 = 36.", "x = (4 ± 6)/2 → x = 5 o x = −1."], resultado: "x = 5, x = −1" },
    { enunciado: "Resuelve por reducción: { 4x − 3y = 1 ; 2x + 5y = 33 }.", pasos: ["Multiplicamos la segunda por −2: −4x − 10y = −66.", "Sumamos con la primera: −13y = −65 → y = 5.", "4x − 15 = 1 → x = 4. Comprobación: 8 + 25 = 33."], resultado: "x = 4, y = 5" },
    { enunciado: "En un cine, 3 entradas de adulto y 2 infantiles cuestan 41 €, y 2 de adulto y 4 infantiles, 42 €. ¿Cuánto cuesta cada entrada?", pasos: ["{ 3a + 2n = 41 ; 2a + 4n = 42 }.", "Multiplicamos la primera por −2: −6a − 4n = −82; sumamos: −4a = −40 → a = 10.", "3 · 10 + 2n = 41 → n = 5,5."], resultado: "Adulto 10 €, infantil 5,50 €." },
  ],
  errores: [
    "Dividir entre x en ax² + bx = 0 y perder la solución x = 0.",
    "Olvidar la solución negativa al resolver x² = 25.",
    "Aplicar la fórmula sin haber igualado la ecuación a 0.",
    "Equivocarse con el signo de −b cuando b es negativo.",
    "Comprobar la solución de un sistema solo en una de las ecuaciones.",
    "No descartar soluciones sin sentido (longitudes negativas).",
  ],
  ejercicios: [
    { q: "Resuelve: 3x² − 27 = 0.", sol: "x² = 9 → x = ±3." },
    { q: "Resuelve: 5x² + 15x = 0.", sol: "5x(x + 3) = 0 → x = 0, x = −3." },
    { q: "Resuelve: x² + x − 12 = 0.", sol: "Δ = 49; x = (−1 ± 7)/2 → 3 y −4." },
    { q: "Resuelve: 4x² − 4x + 1 = 0.", sol: "Δ = 0; x = 1/2 (doble)." },
    { q: "¿Cuántas soluciones tiene 2x² + 3x + 5 = 0?", sol: "Δ = 9 − 40 = −31 < 0: ninguna." },
    { q: "Resuelve por sustitución: { x + 2y = 11 ; 3x − y = 5 }.", sol: "x = 11 − 2y → 33 − 7y = 5 → y = 4, x = 3." },
    { q: "Resuelve por igualación: { y = 3x − 2 ; y = −x + 6 }.", sol: "3x − 2 = −x + 6 → x = 2, y = 4." },
    { q: "Resuelve por reducción: { 5x + 2y = 1 ; 3x − 2y = 15 }.", sol: "8x = 16 → x = 2; y = −9/2." },
    { q: "El producto de dos números consecutivos es 132. ¿Cuáles son?", sol: "x(x + 1) = 132 → x = 11 o x = −12: 11 y 12, o −12 y −11." },
    { q: "Un bocadillo y un zumo cuestan 4,50 €; dos bocadillos y tres zumos, 10,50 €. ¿Cuánto cuesta cada cosa?", sol: "{ b + z = 4,5 ; 2b + 3z = 10,5 } → z = 1,5 €, b = 3 €." },
  ],
};
