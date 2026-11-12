// Matemáticas 2º ESO: funciones y gráficas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, ejes, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Funciones y gráficas",
  minutos: 60,
  objetivos: ["Representar puntos en unos ejes de coordenadas", "Reconocer cuándo una relación es una función y expresarla con tabla, gráfica y fórmula", "Interpretar gráficas: crecimiento, máximos y mínimos, cortes con los ejes", "Representar funciones lineales y de proporcionalidad y calcular su pendiente"],
  claves: ["coordenadas", "variable independiente", "variable dependiente", "dominio", "creciente", "pendiente"],
  pregunta: {
    texto: "Un taxi cobra 3 € por bajar la bandera y 1,20 € por kilómetro. ¿Cómo puedes saber el precio de cualquier trayecto sin hacer la cuenta cada vez?",
    respuesta: "Con una <b>función</b>: precio = 3 + 1,20 · km, o <mark>y = 1,2x + 3</mark>. Para 10 km: 1,2 · 10 + 3 = 15 €. Su gráfica es una recta, y en ella se puede leer el precio de cualquier trayecto de un vistazo.",
  },
  bloques: [
    {
      html: `<h3>Coordenadas cartesianas</h3><p>Para situar puntos en el plano se usan dos rectas perpendiculares: el <b>eje X</b> (horizontal, de abscisas) y el <b>eje Y</b> (vertical, de ordenadas). Se cortan en el <b>origen</b> O(0, 0).</p><p>Cada punto se escribe con un par <b>(x, y)</b>: primero cuánto se mueve en horizontal y después en vertical. A(3, 2) está 3 a la derecha y 2 arriba; B(−2, −1), 2 a la izquierda y 1 abajo.</p><p>Los ejes dividen el plano en cuatro <b>cuadrantes</b>, numerados en sentido contrario a las agujas del reloj desde arriba a la derecha.</p>`,
      svg: svg("Ejes de coordenadas con los puntos A(3, 2) y B(−2, −1) y los cuatro cuadrantes", `${ejes(130, 92, 18, [-6, 6], [-4, 4])}<circle cx="${130 + 54}" cy="${92 - 36}" r="5" fill="var(--pen)"/>${t(130 + 60, 92 - 42, "A(3, 2)", { c: "var(--pen)", s: 11, a: "start" })}<circle cx="${130 - 36}" cy="${92 + 18}" r="5" fill="var(--red)"/>${t(130 - 42, 92 + 34, "B(−2, −1)", { c: "var(--red)", s: 11, a: "end" })}
        ${t(214, 34, "I", { c: "var(--muted)", s: 13 })}${t(46, 34, "II", { c: "var(--muted)", s: 13 })}${t(46, 158, "III", { c: "var(--muted)", s: 13 })}${t(214, 158, "IV", { c: "var(--muted)", s: 13 })}`),
    },
    {
      html: `<h3>¿Qué es una función?</h3><p>Una <b>función</b> es una relación entre dos magnitudes en la que a <mark>cada valor de la primera le corresponde un único valor de la segunda</mark>.</p><ul><li>La <b>variable independiente (x)</b> es la que elegimos: el tiempo, los kilos, los kilómetros.</li><li>La <b>variable dependiente (y)</b> se calcula a partir de x: la temperatura, el precio.</li></ul><p>Ejemplo: a cada hora del día le corresponde una temperatura: es una función. Pero a cada edad no le corresponde una única altura (hay muchas personas de 13 años con alturas distintas): no es función.</p><p>En una gráfica, una relación es función si ninguna <b>recta vertical</b> la corta en más de un punto.</p>`,
    },
    {
      html: `<h3>Formas de expresar una función</h3><p>Una misma función se puede dar de cuatro maneras:</p><ul><li><b>Enunciado</b>: «cada cuaderno cuesta 2 €».</li><li><b>Tabla de valores</b>:</li></ul>${tabla(["Cuadernos (x)", "0", "1", "2", "3", "4"], [["Precio (y)", "0", "2", "4", "6", "8"]])}<ul><li><b>Gráfica</b>: se representan los puntos (0, 0), (1, 2), (2, 4)… en los ejes.</li><li><b>Fórmula</b> o expresión algebraica: <mark>y = 2x</mark>.</li></ul><p>La fórmula es la más útil porque permite calcular cualquier valor; la gráfica, la más visual para ver cómo se comporta.</p>`,
    },
    {
      html: `<h3>Interpretar una gráfica</h3><p>De una gráfica se pueden leer muchas características:</p><ul><li><b>Dominio</b>: los valores de x para los que hay gráfica.</li><li><b>Crece</b> si al aumentar x aumenta y (la gráfica sube de izquierda a derecha); <b>decrece</b> si baja; es <b>constante</b> si se mantiene horizontal.</li><li><b>Máximo</b>: el punto más alto respecto a los de su alrededor; <b>mínimo</b>: el más bajo.</li><li><b>Cortes con los ejes</b>: donde x = 0 (eje Y) y donde y = 0 (eje X).</li></ul><p>La gráfica de la temperatura de un día suele crecer desde el amanecer, tener un máximo hacia las 16 h y decrecer por la noche.</p>`,
      svg: svg("Gráfica de la temperatura a lo largo de un día: crece hasta un máximo a las 16 horas y luego decrece; mínimo al amanecer", `${ejes(26, 150, 9, [0, 24], [0, 14], { rejilla: false })}<path d="M26 ${150 - 6 * 9} C 50 ${150 - 4 * 9}, 70 ${150 - 3 * 9}, 80 ${150 - 3.2 * 9} S 140 ${150 - 13 * 9}, ${26 + 16 * 9} ${150 - 13 * 9} S 220 ${150 - 6 * 9}, ${26 + 24 * 9} ${150 - 5.5 * 9}" fill="none" stroke="var(--red)" stroke-width="3"/>
        <circle cx="${26 + 16 * 9}" cy="${150 - 13 * 9}" r="5" fill="var(--red)"/>${t(26 + 16 * 9, 150 - 13 * 9 - 10, "máximo (16 h)", { c: "var(--red)", s: 11 })}<circle cx="78" cy="${150 - 3.15 * 9}" r="5" fill="var(--pen)"/>${t(78, 150 - 3 * 9 + 20, "mínimo", { c: "var(--pen)", s: 11 })}${t(120, 168, "hora del día", { c: "var(--muted)", s: 10 })}`),
      video: { id: "edE5Y1kOgFw", titulo: "Graficar funciones lineales", canal: "Daniel Carreón", vistas: 5193990 },
    },
    {
      html: `<h3>Función de proporcionalidad directa: y = mx</h3><p>Si dos magnitudes son directamente proporcionales, la función es <mark>y = mx</mark>. Su gráfica es una <b>recta que pasa por el origen</b>.</p><p>El número <b>m</b> es la <b>pendiente</b>: lo que aumenta y cuando x aumenta 1.</p><ul><li>Si m &gt; 0, la recta es <b>creciente</b> (y = 2x).</li><li>Si m &lt; 0, es <b>decreciente</b> (y = −x).</li><li>Cuanto mayor es |m|, más inclinada está.</li></ul><p>Para dibujarla basta con dos puntos, por ejemplo (0, 0) y (1, m).</p>`,
      svg: svg("Tres rectas por el origen: y = 2x muy inclinada, y = x/2 poco inclinada y y = −x decreciente", `${ejes(130, 92, 16, [-7, 7], [-5, 5])}<path d="M${130 - 40} ${92 + 80} L ${130 + 40} ${92 - 80}" stroke="var(--pen)" stroke-width="2.5"/><path d="M${130 - 112} ${92 + 56} L ${130 + 112} ${92 - 56}" stroke="var(--leaf)" stroke-width="2.5"/><path d="M${130 - 80} ${92 - 80} L ${130 + 80} ${92 + 80}" stroke="var(--red)" stroke-width="2.5"/>
        ${t(178, 22, "y = 2x", { c: "var(--pen)", s: 11 })}${t(222, 28, "y = x/2", { c: "var(--leaf)", s: 11 })}${t(76, 22, "y = −x", { c: "var(--red)", s: 11 })}`),
    },
    {
      html: `<h3>Función lineal (afín): y = mx + n</h3><p>La función <mark>y = mx + n</mark> también es una recta, pero no pasa por el origen: corta al eje Y en el punto <b>(0, n)</b>. A n se le llama <b>ordenada en el origen</b>.</p><p>Ejemplo: y = 2x − 3. Tabla con dos o tres valores:</p>${tabla(["x", "0", "1", "3"], [["y", "−3", "−1", "3"]])}<p>Rectas con la misma pendiente son <b>paralelas</b>: y = 2x, y = 2x + 1 e y = 2x − 3. Si m = 0 la función es <b>constante</b>: y = 4 es una recta horizontal.</p>`,
      video: { id: "AoZpzAoC1Qg", titulo: "Gráfica de la función lineal", canal: "Matemáticas profe Alex", vistas: 13775977 },
    },
    {
      html: `<h3>Calcular la pendiente y la ecuación</h3><p>Si una recta pasa por los puntos A(x₁, y₁) y B(x₂, y₂), su pendiente es:</p><p style="text-align:center"><mark>m = (y₂ − y₁) / (x₂ − x₁)</mark></p><p>Ejemplo: A(1, 3) y B(4, 9). m = (9 − 3)/(4 − 1) = 6/3 = 2. Para hallar n se sustituye un punto en y = 2x + n: 3 = 2 + n → n = 1. La recta es <b>y = 2x + 1</b>.</p><p>La pendiente indica la <b>rapidez de cambio</b>: en una gráfica distancia-tiempo, la pendiente es la velocidad.</p>`,
      video: { id: "ULxjPNTiAZ8", titulo: "Pendiente de la recta", canal: "Matemáticas profe Alex", vistas: 2946613 },
    },
    {
      html: `<h3>Funciones en situaciones reales</h3><ul><li><b>Tarifas</b>: un gimnasio cobra 20 € de matrícula y 30 € al mes: y = 30x + 20.</li><li><b>Velocidad constante</b>: un ciclista a 15 km/h recorre y = 15x km en x horas.</li><li><b>Depósito que se vacía</b>: 500 L que pierden 25 L por minuto: y = 500 − 25x (pendiente negativa).</li><li><b>Proporcionalidad inversa</b>: el tiempo para recorrer 120 km según la velocidad, y = 120/x, no es una recta sino una <b>hipérbola</b>.</li></ul><p>Para comparar dos ofertas se dibujan las dos rectas: el punto donde se cortan indica a partir de cuándo conviene una u otra.</p>`,
    },
  ],
  figura: {
    titulo: "Funciones en un vistazo",
    svg: filas("Resumen: coordenadas, función con un único valor, cuatro formas de expresarla, crecimiento, y = mx, y = mx + n y pendiente", [["Punto", "(x, y): primero horizontal", "var(--pen)"], ["Función", "a cada x, un único y", "var(--inf)"], ["Expresar", "enunciado · tabla · gráfica · fórmula", "var(--sun)"], ["y = mx", "recta por el origen", "var(--leaf)"], ["y = mx + n", "corta el eje Y en (0, n)", "var(--red)"], ["Pendiente", "m = (y₂ − y₁)/(x₂ − x₁)", "var(--ink)"]], 200),
  },
  video: { id: "PnATAsxu_oo", titulo: "¿Qué es la función lineal? La pendiente", canal: "Andrey Trejos - Mate para secundaria", vistas: 1914246, megusta: 0, busqueda: "funciones y gráficas 2 eso" },
  quiz: mezcla([
    { q: "El punto (−3, 4) está en el cuadrante…", o: ["II", "I", "IV"], a: 0, e: "x negativa, y positiva." },
    { q: "En (5, −2), la abscisa es…", o: ["5", "−2", "3"], a: 0, e: "La primera coordenada." },
    { q: "En una función, a cada x le corresponde…", o: ["un único y", "dos valores de y", "cualquier número de y"], a: 0, e: "Definición." },
    { q: "Si la gráfica sube de izquierda a derecha, la función es…", o: ["creciente", "decreciente", "constante"], a: 0, e: "y aumenta." },
    { q: "La gráfica de y = 3x pasa por…", o: ["el origen", "(0, 3)", "(3, 0)"], a: 0, e: "Proporcionalidad directa." },
    { q: "La pendiente de y = −2x + 5 es…", o: ["−2", "5", "2"], a: 0, e: "Coeficiente de x." },
    { q: "y = 4x − 1 corta al eje Y en…", o: ["(0, −1)", "(0, 4)", "(−1, 0)"], a: 0, e: "x = 0." },
    { q: "¿Qué rectas son paralelas?", o: ["y = 3x e y = 3x + 2", "y = 3x e y = −3x", "y = x e y = 2x"], a: 0, e: "Misma pendiente." },
    { q: "La pendiente de la recta por (0, 1) y (2, 7) es…", o: ["3", "6", "4"], a: 0, e: "6/2." },
    { q: "y = 5 es una función…", o: ["constante", "creciente", "decreciente"], a: 0, e: "Pendiente 0." },
  ]),
  examen: mezcla([
    { q: "La recta que pasa por (1, 1) y (3, 5) es…", o: ["y = 2x − 1", "y = 2x + 1", "y = x + 2"], a: 0, e: "m = 2; 1 = 2 + n." },
    { q: "Un móvil cobra 10 € al mes más 0,05 € por minuto. Con 200 minutos pagas…", o: ["20 €", "10,05 €", "15 €"], a: 0, e: "10 + 0,05 · 200." },
    { q: "¿Para qué x vale 0 la función y = 3x − 12?", o: ["4", "−12", "3"], a: 0, e: "3x = 12." },
  ]),
  feynman: ["Cómo se sitúa un punto en unos ejes", "Qué hace falta para que una relación sea función", "Qué se puede leer en una gráfica", "Diferencia entre y = mx e y = mx + n", "Qué significa la pendiente"],
  mapa: mapa("FUNCIONES", "var(--eso)", [
    ["Coordenadas", "(x, y) · cuadrantes", "var(--pen)"],
    ["Función", "un único y para cada x", "var(--inf)"],
    ["Gráficas", "crece · decrece · máximos", "var(--red)"],
    ["Rectas", "y = mx + n · pendiente", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Coordenadas", "(x, y): abscisa y ordenada."],
    ["Función", "A cada x le corresponde un único y."],
    ["Variable independiente", "x: la que se elige."],
    ["Creciente", "Al aumentar x, aumenta y."],
    ["Máximo", "Punto más alto respecto a su entorno."],
    ["y = mx", "Proporcionalidad directa: recta por el origen."],
    ["Pendiente", "Lo que cambia y cuando x aumenta 1."],
    ["Ordenada en el origen", "n: punto de corte con el eje Y."],
  ],
  familias: ["Comparad dos tarifas de móvil o de gimnasio con una tabla y una gráfica.", "Registrad la temperatura de casa varias veces al día y dibujad la gráfica.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Coordenadas cartesianas; concepto de función y formas de expresarla; características de una gráfica; funciones lineales y afines, pendiente y ordenada en el origen; modelización de situaciones reales (RD 217/2022, Matemáticas, sentido algebraico).",
    ideas: ["Batalla naval en ejes cartesianos.", "Gráficas de situaciones (llenar una bañera, un paseo) para contar la historia que representan.", "Comparar tarifas reales con GeoGebra o una hoja de cálculo."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): funciones", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Haz una tabla y di cómo es la función y = −2x + 4. ¿Dónde corta a los ejes?", pasos: ["x = 0 → y = 4; x = 1 → y = 2; x = 2 → y = 0.", "Pendiente −2: decreciente.", "Corta al eje Y en (0, 4) y al eje X en (2, 0)."], resultado: "Recta decreciente que corta los ejes en (0, 4) y (2, 0)." },
    { enunciado: "Halla la ecuación de la recta que pasa por A(−1, 5) y B(2, −1).", pasos: ["m = (−1 − 5)/(2 − (−1)) = −6/3 = −2.", "y = −2x + n; con A: 5 = 2 + n → n = 3.", "Comprobación con B: −4 + 3 = −1. ✔"], resultado: "y = −2x + 3" },
    { enunciado: "Gimnasio A: 30 € al mes. Gimnasio B: 60 € de matrícula y 20 € al mes. ¿Cuándo sale mejor B?", pasos: ["A: y = 30x; B: y = 20x + 60.", "Se igualan: 30x = 20x + 60 → x = 6 meses.", "Para más de 6 meses, B es más barato."], resultado: "B conviene si vas más de 6 meses." },
  ],
  errores: [
    "Escribir las coordenadas al revés: (y, x).",
    "Pensar que toda gráfica es una función.",
    "Confundir la pendiente con el punto de corte con el eje Y.",
    "Calcular la pendiente restando en distinto orden arriba y abajo.",
    "Unir con una recta puntos de una función que no es lineal.",
  ],
  ejercicios: [
    { q: "Representa los puntos A(2, −3), B(−4, 1), C(0, 5) y D(−2, 0) e indica su cuadrante.", sol: "A en IV, B en II; C y D están sobre los ejes (no tienen cuadrante)." },
    { q: "¿Es función «a cada alumno le corresponde su fecha de nacimiento»? ¿Y «a cada fecha, los alumnos nacidos ese día»?", sol: "La primera sí; la segunda no (puede haber varios o ninguno)." },
    { q: "Haz una tabla de y = 3x − 2 para x = −1, 0, 1, 2.", sol: "−5, −2, 1, 4." },
    { q: "Indica pendiente y ordenada en el origen de y = −x/2 + 3.", sol: "m = −1/2; n = 3." },
    { q: "¿Qué recta es más inclinada, y = 4x o y = −5x?", sol: "y = −5x (|−5| > 4)." },
    { q: "Calcula la pendiente de la recta que pasa por (2, 3) y (6, 5).", sol: "2/4 = 1/2." },
    { q: "Halla la ecuación de la recta de pendiente 3 que pasa por (1, 7).", sol: "7 = 3 + n → y = 3x + 4." },
    { q: "Un depósito con 800 L pierde 40 L por hora. Escribe la función y di cuándo se vacía.", sol: "y = 800 − 40x; a las 20 horas." },
    { q: "Escribe la recta paralela a y = 2x − 5 que pasa por el origen.", sol: "y = 2x." },
    { q: "Un taxi cobra 2,50 € más 1,10 € por km. ¿Cuántos km has hecho si pagas 19 €?", sol: "1,1x + 2,5 = 19 → x = 15 km." },
  ],
};
