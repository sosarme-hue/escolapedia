// Matemáticas 3º ESO: funciones lineales y afines. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, ejes, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Funciones lineales y afines",
  minutos: 60,
  objetivos: ["Distinguir funciones de proporcionalidad, afines y constantes", "Calcular e interpretar la pendiente y la ordenada en el origen", "Hallar la ecuación de una recta a partir de dos puntos o de un punto y la pendiente", "Resolver problemas reales con funciones afines"],
  claves: ["función lineal", "función afín", "pendiente", "ordenada en el origen", "rectas paralelas", "punto-pendiente"],
  pregunta: {
    texto: "Una compañía de bicis cobra 2 € por desbloquear y 0,15 € por minuto. Otra no cobra desbloqueo pero pide 0,25 € por minuto. ¿Cuál te sale mejor para un trayecto de 15 minutos?",
    respuesta: "La primera cuesta <mark>y = 2 + 0,15x</mark> y la segunda <mark>y = 0,25x</mark>. Con 15 minutos: 4,25 € frente a 3,75 €, así que gana la segunda. Pero a partir de 20 minutos la primera es más barata. Son dos funciones afines, y sus gráficas son rectas.",
  },
  bloques: [
    {
      html: `<h3>Función de proporcionalidad directa</h3><p>Una función es <b>lineal</b> o de <b>proporcionalidad directa</b> si su fórmula es <mark>y = mx</mark>. Las dos variables son directamente proporcionales: si x se duplica, y se duplica. El cociente y/x es siempre m, la <b>constante de proporcionalidad</b>.</p><p>Su gráfica es una <b>recta que pasa por el origen</b> (0, 0). Ejemplos: el precio de la fruta a 2 €/kg (y = 2x), la distancia recorrida a velocidad constante (d = v · t) o el cambio de euros a dólares.</p>`,
      svg: svg("Rectas y igual a x, y igual a 2x e y igual a menos x, todas pasando por el origen", `${ejes(130, 95, 16, [-7, 7], [-5, 5])}<path d="M90 175 L 170 15" stroke="var(--pen)" stroke-width="3"/><path d="M50 175 L 210 15" stroke="var(--leaf)" stroke-width="3"/><path d="M50 15 L 210 175" stroke="var(--red)" stroke-width="3"/><circle cx="130" cy="95" r="5" fill="var(--ink)"/>
        ${t(124, 26, "y = 2x", { c: "var(--pen)", s: 11, a: "end" })}${t(222, 60, "y = x", { c: "var(--leaf)", s: 11, a: "start" })}${t(250, 152, "y = −x", { c: "var(--red)", s: 11, a: "end" })}`),
    },
    {
      html: `<h3>La pendiente</h3><p>El número m es la <b>pendiente</b> y mide la <mark>inclinación</mark> de la recta: cuánto aumenta y cuando x aumenta 1 unidad.</p><ul><li>m &gt; 0: la recta es <b>creciente</b>.</li><li>m &lt; 0: es <b>decreciente</b>.</li><li>Cuanto mayor es |m|, más empinada es la recta.</li></ul><p>Con dos puntos (x₁, y₁) y (x₂, y₂) de la recta, la pendiente es <mark>m = (y₂ − y₁) / (x₂ − x₁)</mark>, es decir, «lo que sube» entre «lo que avanza». Entre (1, 3) y (4, 9): m = 6/3 = 2.</p>`,
      svg: svg("Triángulo de pendiente: entre los puntos 1,3 y 4,9 la recta avanza 3 y sube 6, pendiente 2", `${ejes(30, 165, 15, [0, 13], [0, 10])}<path d="M30 165 L 120 30" stroke="var(--pen)" stroke-width="3"/>
        <path d="M60 120 H 105 V 30" fill="none" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="5 4"/><circle cx="60" cy="120" r="5" fill="var(--pen)"/><circle cx="105" cy="30" r="5" fill="var(--pen)"/>
        ${t(82, 136, "avanza 3", { c: "var(--red)", s: 11 })}${t(112, 80, "sube 6", { c: "var(--red)", s: 11, a: "start" })}${t(190, 100, "m = 6/3 = 2", { c: "var(--pen)", s: 14 })}`),
      video: { id: "TO-cXk8UckA", titulo: "Pendiente de una recta a partir de dos puntos", canal: "Daniel Carreón", vistas: 1508077, megusta: 0 },
    },
    {
      html: `<h3>Función afín</h3><p>Una <b>función afín</b> tiene la forma <mark>y = mx + n</mark>. Su gráfica es una recta de pendiente m que corta al eje Y en el punto (0, n). El número n es la <b>ordenada en el origen</b>: el valor de y cuando x = 0, que en los problemas suele ser una cantidad fija (cuota de alta, bajada de bandera, saldo inicial).</p><p>La función lineal es un caso particular de la afín con n = 0. Las rectas y = 2x, y = 2x + 3 e y = 2x − 1 tienen la misma pendiente: son <b>paralelas</b>, desplazadas hacia arriba o hacia abajo.</p>`,
      svg: svg("Tres rectas paralelas de pendiente 2 que cortan el eje y en 3, 0 y menos 1", `${ejes(110, 110, 14, [-7, 9], [-4, 6])}
        ${[[3, "var(--leaf)", "y = 2x + 3"], [0, "var(--pen)", "y = 2x"], [-1, "var(--red)", "y = 2x − 1"]].map(([n, c, l], i) => `<path d="M${110 + ((-4 - n) / 2) * 14} ${110 + 4 * 14} L ${110 + ((6 - n) / 2) * 14} ${110 - 6 * 14}" stroke="${c}" stroke-width="3"/><circle cx="110" cy="${110 - n * 14}" r="4" fill="${c}"/>${t(250, 40 + i * 18, l, { c, s: 11, a: "end" })}`).join("")}`),
    },
    {
      html: `<h3>Función constante</h3><p>Si la pendiente es 0, la función es <b>constante</b>: <mark>y = n</mark>. Su gráfica es una recta <b>horizontal</b>: y vale siempre lo mismo, sea cual sea x. Ejemplo: una tarifa plana de 20 € al mes, hables lo que hables.</p><p>Las rectas verticales, como x = 3, <b>no son funciones</b>, porque a x = 3 le corresponden infinitos valores de y.</p>${tabla(["Tipo", "Fórmula", "Gráfica"], [["Proporcionalidad", "y = mx", "recta por el origen"], ["Afín", "y = mx + n", "recta que corta el eje Y en n"], ["Constante", "y = n", "recta horizontal"]])}`,
    },
    {
      html: `<h3>Representar una recta</h3><p>Para dibujar una función afín bastan <b>dos puntos</b>, aunque conviene calcular un tercero para comprobar. Con y = −2x + 4:</p>${tabla(["x", "0", "2", "3"], [["y", "4", "0", "−2"]])}<p>Otra forma rápida: se marca la <b>ordenada en el origen</b>, (0, 4), y desde ahí se usa la pendiente: avanzar 1 a la derecha y bajar 2. Si la pendiente es una fracción, como m = 2/3, se avanza 3 y se sube 2. Así se dibuja sin hacer tabla.</p>`,
    },
    {
      html: `<h3>Ecuación de la recta</h3><p>La forma <b>punto-pendiente</b> sirve cuando se conocen un punto (x₀, y₀) y la pendiente m:</p><p><mark>y − y₀ = m(x − x₀)</mark></p><p>Si conocemos <b>dos puntos</b>, primero se calcula m con ellos y después se usa uno de los puntos. Ejemplo: recta por (2, 1) y (5, 7). m = 6/3 = 2. Entonces y − 1 = 2(x − 2) → <b>y = 2x − 3</b>. Comprobación con (5, 7): 2 · 5 − 3 = 7 ✓.</p><p>La forma <b>explícita</b> y = mx + n permite leer directamente pendiente y ordenada en el origen.</p>`,
      video: { id: "KEENQd0B5dI", titulo: "Ecuación de la recta conociendo la pendiente y un punto", canal: "Matemáticas profe Alex", vistas: 2249974, megusta: 0 },
    },
    {
      html: `<h3>Posiciones de dos rectas</h3><p>Dos rectas del plano pueden ser:</p><ul><li><b>Paralelas</b>: misma pendiente y distinta ordenada en el origen. No se cortan.</li><li><b>Coincidentes</b>: misma pendiente y misma ordenada. Son la misma recta.</li><li><b>Secantes</b>: distinta pendiente. Se cortan en un punto, que se halla resolviendo el <mark>sistema</mark> formado por sus ecuaciones.</li></ul><p>Esto conecta con el tema de sistemas: el punto de corte entre dos tarifas indica a partir de qué momento conviene una u otra.</p>`,
    },
    {
      html: `<h3>Funciones afines en la vida real</h3><p>Muchas situaciones siguen el modelo <b>cantidad fija + cantidad por unidad</b>:</p><ul><li>Taxi: bajada de bandera + precio por km.</li><li>Factura de agua: cuota de servicio + precio por m³.</li><li>Temperatura: °F = 1,8 · °C + 32.</li><li>Un depósito que se vacía: litros = capacidad − caudal · minutos (pendiente negativa).</li></ul><p>En todos los casos, la <mark>pendiente</mark> es la tasa de cambio («cuánto por cada unidad») y la <mark>ordenada en el origen</mark>, el valor inicial.</p>`,
      svg: svg("Dos tarifas: una afín que empieza en 2 euros con poca pendiente y otra lineal con más pendiente; se cortan a los 20 minutos", `${ejes(30, 150, 1, [0, 210], [0, 130], { rejilla: false })}
        <path d="M30 125 L 230 50" stroke="var(--pen)" stroke-width="3"/><path d="M30 150 L 230 25" stroke="var(--red)" stroke-width="3"/>
        <circle cx="130" cy="87.5" r="6" fill="var(--ink)"/>${t(146, 110, "20 min · 5 €", { s: 11, a: "start" })}
        ${t(200, 74, "2 + 0,15x", { c: "var(--pen)", s: 11, a: "start" })}${t(214, 22, "0,25x", { c: "var(--red)", s: 11 })}${t(130, 170, "minutos", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Interpolar y extrapolar</h3><p>Cuando unos datos reales siguen aproximadamente una recta, la función afín sirve para <b>estimar</b> valores que no se han medido. Si la estimación está <b>dentro</b> del rango de los datos se llama <b>interpolación</b>; si está <b>fuera</b>, <b>extrapolación</b>, y es menos fiable.</p><p>Ejemplo: un niño mide 110 cm a los 5 años y 128 cm a los 8. La pendiente es 18/3 = 6 cm por año. A los 6 años medirá unos 116 cm (interpolación, fiable). Pero extrapolar a 30 años daría 260 cm: <mark>el modelo deja de valer</mark>, porque se deja de crecer.</p>`,
    },
  ],
  figura: {
    titulo: "Leer una recta y = mx + n",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="m es la pendiente: positiva crece, negativa decrece, cero horizontal. n es la ordenada en el origen. Misma pendiente: paralelas. Punto-pendiente para hallar la ecuación">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["m (pendiente)", "> 0 crece · < 0 decrece · = 0 horizontal", "var(--pen)"], ["n (ordenada)", "corte con el eje Y: punto (0, n)", "var(--leaf)"], ["m = Δy / Δx", "(y₂ − y₁) / (x₂ − x₁) con dos puntos", "var(--red)"], ["Punto-pendiente", "y − y₀ = m(x − x₀)", "var(--inf)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="230" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "ACErHP3qzmA", titulo: "Funciones lineales: de proporcionalidad, afines y constantes", canal: "Susi Profe", vistas: 1982852, megusta: 0, busqueda: "función lineal y afín" },
  quiz: mezcla([
    { q: "¿Cuál es una función de proporcionalidad directa?", o: ["y = 3x", "y = 3x + 1", "y = 3"], a: 0, e: "Pasa por el origen." },
    { q: "La pendiente de y = −4x + 2 es…", o: ["−4", "2", "4"], a: 0, e: "Es el coeficiente de x." },
    { q: "La ordenada en el origen de y = 5x − 7 es…", o: ["5", "−7", "7"], a: 1, e: "El término independiente." },
    { q: "La pendiente de la recta que pasa por (0, 1) y (2, 7) es…", o: ["3", "4", "6"], a: 0, e: "6 / 2." },
    { q: "y = 2x + 1 e y = 2x − 5 son…", o: ["secantes", "paralelas", "coincidentes"], a: 1, e: "Misma pendiente, distinta ordenada." },
    { q: "Una recta con pendiente negativa es…", o: ["creciente", "decreciente", "horizontal"], a: 1, e: "Al aumentar x, baja y." },
    { q: "La recta y = 6 es…", o: ["vertical", "horizontal", "por el origen"], a: 1, e: "Función constante." },
    { q: "¿Pasa y = 3x − 2 por el punto (2, 4)?", o: ["Sí", "No", "Solo si x = 0"], a: 0, e: "3 · 2 − 2 = 4." },
    { q: "Un taxi cobra 3 € más 1 € por km. Su fórmula es…", o: ["y = 3x + 1", "y = x + 3", "y = 4x"], a: 1, e: "Fijo 3, pendiente 1." },
    { q: "¿Cuál de estas no es una función?", o: ["y = 0", "x = 2", "y = x"], a: 1, e: "Una recta vertical." },
  ]),
  examen: mezcla([
    { q: "La recta de pendiente 3 que pasa por (1, 5) es…", o: ["y = 3x + 2", "y = 3x + 5", "y = 5x + 3"], a: 0, e: "y − 5 = 3(x − 1)." },
    { q: "El corte de y = 2x + 1 e y = −x + 7 es…", o: ["(2, 5)", "(3, 4)", "(1, 3)"], a: 0, e: "2x + 1 = −x + 7 → x = 2." },
    { q: "Un depósito de 500 L pierde 20 L por minuto. Se vacía en…", o: ["25 min", "20 min", "50 min"], a: 0, e: "500 − 20x = 0." },
  ]),
  feynman: ["Qué diferencia hay entre función lineal y afín", "Qué significa la pendiente en un problema real", "Cómo hallar la ecuación de una recta que pasa por dos puntos", "Cómo saber si dos rectas son paralelas sin dibujarlas"],
  mapa: mapa("RECTAS", "var(--eso)", [
    ["y = mx", "proporcionalidad · origen", "var(--pen)"],
    ["y = mx + n", "afín · ordenada n", "var(--leaf)"],
    ["Pendiente m", "inclinación · Δy / Δx", "var(--red)"],
    ["Ecuación", "punto-pendiente · dos puntos", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["Función de proporcionalidad directa", "y = mx: recta que pasa por el origen."],
    ["Función afín", "y = mx + n."],
    ["Pendiente", "Lo que aumenta y cuando x aumenta 1."],
    ["Pendiente con dos puntos", "m = (y₂ − y₁) / (x₂ − x₁)"],
    ["Ordenada en el origen", "Valor de y cuando x = 0: el punto (0, n)."],
    ["Rectas paralelas", "Tienen la misma pendiente."],
    ["Ecuación punto-pendiente", "y − y₀ = m(x − x₀)"],
    ["Función constante", "y = n: recta horizontal."],
  ],
  familias: ["Buscad en una factura de luz o agua la parte fija y la parte variable y escribid la función afín.", "Comparad dos tarifas de transporte y dibujad sus rectas en papel cuadriculado.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico: funciones lineales, afines y constantes; pendiente, ordenada en el origen, ecuación de la recta y modelización (RD 217/2022, Matemáticas 3º).",
    ideas: ["Modelizar con datos reales (alargamiento de un muelle, llenado de un vaso).", "Comparar tarifas con GeoGebra y discutir el punto de corte.", "Juego de emparejar fórmulas, tablas, gráficas y enunciados."],
  },
  fuentes: [RD, { t: "GeoGebra: funciones lineales y afines", url: "https://www.geogebra.org/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Halla la ecuación de la recta que pasa por A(−1, 5) y B(3, −3).",
      pasos: ["m = (−3 − 5) / (3 − (−1)) = −8 / 4 = −2.", "Punto-pendiente con A: y − 5 = −2(x + 1).", "y = −2x − 2 + 5 = −2x + 3.", "Comprobación con B: −6 + 3 = −3 ✓."],
      resultado: "y = −2x + 3." },
    { enunciado: "Halla la recta paralela a y = 4x − 1 que pasa por (2, 3).",
      pasos: ["Paralela → misma pendiente: m = 4.", "y − 3 = 4(x − 2).", "y = 4x − 5."],
      resultado: "y = 4x − 5." },
    { enunciado: "Un fontanero cobra 30 € por desplazamiento y 25 € por hora. Escribe la función, calcula el precio de 3 h y cuántas horas trabajó si cobró 142,50 €.",
      pasos: ["y = 25x + 30 (x en horas).", "3 h: 25 · 3 + 30 = 105 €.", "25x + 30 = 142,5 → 25x = 112,5 → x = 4,5 h."],
      resultado: "y = 25x + 30; 105 €; 4 horas y media." },
  ],
  errores: [
    "Calcular la pendiente como Δx / Δy en lugar de Δy / Δx.",
    "Restar las coordenadas en distinto orden arriba y abajo.",
    "Confundir la ordenada en el origen con el corte con el eje X.",
    "Pensar que una recta horizontal no tiene pendiente: tiene pendiente 0.",
    "Creer que toda función cuya gráfica es una recta es de proporcionalidad: solo si pasa por el origen.",
    "Extrapolar un modelo lineal muy lejos de los datos.",
  ],
  ejercicios: [
    { q: "Indica pendiente y ordenada en el origen de y = −x/2 + 3 y de 2x + y = 5.", sol: "m = −1/2, n = 3. Despejando y = −2x + 5: m = −2, n = 5." },
    { q: "Clasifica: y = 7x, y = 7, y = 7x − 2.", sol: "Proporcionalidad directa; constante; afín." },
    { q: "Representa y = 3x − 2 con una tabla de tres valores.", sol: "x = 0 → −2; x = 1 → 1; x = 2 → 4. Se unen los puntos (0, −2), (1, 1), (2, 4)." },
    { q: "Halla la pendiente de la recta que pasa por (−2, 4) y (2, −4).", sol: "m = (−4 − 4) / (2 + 2) = −8/4 = −2." },
    { q: "Escribe la ecuación de la recta de pendiente −3 que pasa por (1, 2).", sol: "y − 2 = −3(x − 1) → y = −3x + 5." },
    { q: "Halla la recta que pasa por (0, −1) y (4, 7).", sol: "m = 8/4 = 2; n = −1: y = 2x − 1." },
    { q: "¿Están alineados los puntos (1, 3), (3, 7) y (5, 11)?", sol: "Pendiente entre el 1.º y el 2.º: 4/2 = 2; entre el 2.º y el 3.º: 4/2 = 2. Sí, están alineados (y = 2x + 1)." },
    { q: "Halla el punto de corte de y = 3x − 4 e y = x + 2.", sol: "3x − 4 = x + 2 → x = 3, y = 5. Punto (3, 5)." },
    { q: "Pasa 25 °C y 100 °C a Fahrenheit con °F = 1,8 · °C + 32. ¿Cuál es la pendiente y qué significa?", sol: "25 °C = 77 °F; 100 °C = 212 °F. Pendiente 1,8: cada grado Celsius equivale a 1,8 grados Fahrenheit." },
    { q: "Una vela de 20 cm se acorta 2 cm cada hora. Escribe la función y di cuándo se apaga.", sol: "y = 20 − 2x. Se apaga cuando y = 0 → x = 10 horas." },
  ],
};
