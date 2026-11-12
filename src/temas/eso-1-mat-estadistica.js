// Matemáticas 1º ESO: estadística y probabilidad. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, barras, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Estadística y probabilidad",
  minutos: 60,
  objetivos: ["Distinguir población, muestra y tipos de variables estadísticas", "Organizar datos en tablas de frecuencias absolutas y relativas", "Representar datos con diagramas de barras, sectores y pictogramas", "Calcular la media, la mediana y la moda", "Distinguir experimentos aleatorios y calcular probabilidades con la regla de Laplace"],
  claves: ["población", "muestra", "frecuencia absoluta", "media", "moda", "regla de Laplace"],
  pregunta: {
    texto: "¿Es más fácil sacar un 6 con un dado o sacar cara con una moneda?",
    respuesta: "Con la moneda hay 2 resultados posibles y 1 favorable: probabilidad <b>1/2 = 0,5</b>. Con el dado hay 6 posibles y 1 favorable: <b>1/6 ≈ 0,17</b>. <mark>Es tres veces más fácil sacar cara</mark>. Cuantificar lo probable es justo lo que hace la probabilidad.",
  },
  bloques: [
    {
      html: `<h3>Población, muestra y variables</h3><p>La <b>estadística</b> recoge, organiza y analiza datos para sacar conclusiones.</p><ul><li><b>Población</b>: todo el conjunto que se estudia (todos los alumnos del instituto).</li><li><b>Muestra</b>: una parte de la población que se elige para preguntar (30 alumnos al azar). Debe ser <b>representativa</b>.</li><li><b>Variable estadística</b>: lo que se estudia de cada individuo.</li></ul><p>Las variables pueden ser:</p><ul><li><b>Cualitativas</b>: se expresan con palabras (color favorito, deporte, medio de transporte).</li><li><b>Cuantitativas</b>: se expresan con números. <b>Discretas</b> si toman valores aislados (número de hermanos) y <b>continuas</b> si pueden tomar cualquier valor en un intervalo (altura, peso).</li></ul>`,
    },
    {
      html: `<h3>Tablas de frecuencias</h3><p>Preguntamos a 20 alumnos cuántas mascotas tienen: 0, 1, 1, 2, 0, 1, 3, 1, 0, 2, 1, 1, 0, 2, 1, 0, 1, 2, 1, 0.</p>${tabla(["Mascotas (xᵢ)", "Recuento", "fᵢ", "hᵢ", "%"], [["0", "|||| |", "6", "0,30", "30 %"], ["1", "|||| ||||", "9", "0,45", "45 %"], ["2", "||||", "4", "0,20", "20 %"], ["3", "|", "1", "0,05", "5 %"], ["Total", "", "20", "1", "100 %"]])}<ul><li><b>Frecuencia absoluta</b> (fᵢ): cuántas veces aparece cada valor. Suman el total de datos (N).</li><li><b>Frecuencia relativa</b> (hᵢ): fᵢ : N. <mark>Suman 1</mark>. Multiplicada por 100 da el porcentaje.</li></ul>`,
      video: vb("estB"),
    },
    {
      html: `<h3>Gráficos estadísticos</h3><ul><li><b>Diagrama de barras</b>: una barra por valor, de altura igual a su frecuencia. Para variables cualitativas o cuantitativas discretas.</li><li><b>Polígono de frecuencias</b>: se unen los extremos superiores de las barras.</li><li><b>Diagrama de sectores</b>: un círculo repartido en «quesitos». Cada sector mide <b>hᵢ · 360°</b>. El 45 % son 0,45 · 360 = 162°.</li><li><b>Pictograma</b>: con dibujos que representan una cantidad. Muy usado en prensa.</li><li><b>Histograma</b>: barras pegadas para datos agrupados en intervalos (alturas, tiempos).</li></ul>`,
      svg: svg("Diagrama de barras del número de mascotas: 0 mascotas 6 alumnos, 1 mascota 9, 2 mascotas 4 y 3 mascotas 1", `${barras(30, 150, 200, 110, [["0", 6, "var(--pen)"], ["1", 9, "var(--leaf)"], ["2", 4, "var(--sun)"], ["3", 1, "var(--red)"]])}${t(130, 26, "Número de mascotas", { s: 12 })}${t(130, 176, "mascotas", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Media, mediana y moda</h3><p>Son las <b>medidas de centralización</b>: un solo número que resume los datos.</p><ul><li><b>Media</b> (x̄): se suman todos los datos y se divide entre cuántos hay. Notas 6, 7, 5, 9, 8 → 35 : 5 = <b>7</b>.</li><li><b>Mediana</b>: el valor que queda <b>en el centro</b> al ordenar los datos. 5, 6, <b>7</b>, 8, 9 → 7. Si hay un número par de datos, es la media de los dos centrales.</li><li><b>Moda</b>: el valor que <mark>más se repite</mark>. En las mascotas, la moda es 1 (aparece 9 veces). Puede haber más de una moda o ninguna.</li></ul><p>Con tabla, la media se calcula con Σ xᵢ · fᵢ : N. Mascotas: (0 · 6 + 1 · 9 + 2 · 4 + 3 · 1) : 20 = 20 : 20 = <b>1</b>.</p>`,
    },
    {
      html: `<h3>El rango y los datos extremos</h3><p>El <b>rango</b> o recorrido es la diferencia entre el dato mayor y el menor. Indica si los datos están <b>concentrados</b> o <b>dispersos</b>.</p><p>Dos jugadores de baloncesto meten de media 10 puntos por partido:</p><ul><li>Ana: 9, 10, 11, 10, 10 → rango 2. Es muy regular.</li><li>Bea: 2, 20, 4, 18, 6 → rango 18. Es muy irregular.</li></ul><p>Cuidado con los <b>datos extremos</b>: si en un grupo de 9 amigos con 20 € cada uno entra alguien con 1 000 €, la media sube a 118 €, pero la mediana sigue siendo 20 €. Por eso a veces la mediana describe mejor la situación.</p>`,
    },
    {
      html: `<h3>Experimentos aleatorios y sucesos</h3><p>Un experimento es <b>aleatorio</b> si no se puede predecir el resultado aunque se repita en las mismas condiciones: lanzar un dado, sacar una carta. Si se puede predecir (soltar una piedra: cae), es <b>determinista</b>.</p><ul><li><b>Espacio muestral</b> (E): todos los resultados posibles. Dado: E = {1, 2, 3, 4, 5, 6}.</li><li><b>Suceso</b>: cualquier conjunto de resultados. «Sacar par» = {2, 4, 6}.</li><li><b>Suceso seguro</b>: ocurre siempre («sacar menos de 7»). <b>Imposible</b>: nunca («sacar un 8»).</li></ul>`,
    },
    {
      html: `<h3>La probabilidad y la regla de Laplace</h3><p>La <b>probabilidad</b> de un suceso es un número entre <b>0</b> (imposible) y <b>1</b> (seguro) que mide lo fácil que es que ocurra.</p><p>Si todos los resultados son <b>igual de probables</b>, se aplica la <b>regla de Laplace</b>:</p><p style="text-align:center"><b>P(A) = casos favorables / casos posibles</b></p><p>Dado: P(par) = 3/6 = 1/2 = 0,5. P(múltiplo de 3) = 2/6 = 1/3.</p><p>Una bolsa con 3 bolas rojas y 5 azules: P(roja) = 3/8 = 0,375. P(azul) = 5/8. Fíjate: <mark>P(roja) + P(azul) = 1</mark>.</p>`,
      svg: svg("Escala de probabilidad de 0, imposible, a 1, seguro, con un medio en el centro", `<path d="M30 90 H 230" stroke="var(--muted)" stroke-width="3"/>${[[0, "0", "imposible", "var(--red)"], [0.5, "1/2", "igual de fácil", "var(--sun)"], [1, "1", "seguro", "var(--leaf)"]].map(([p, n, l, c]) => `<circle cx="${30 + p * 200}" cy="90" r="7" fill="${c}"/>${t(30 + p * 200, 72, n, { s: 13, c })}${t(30 + p * 200, 116, l, { s: 10, c: "var(--muted)" })}`).join("")}<circle cx="${30 + 200 / 6}" cy="90" r="5" fill="var(--pen)"/>${t(30 + 200 / 6, 140, "sacar un 6: 1/6", { c: "var(--pen)", s: 10 })}`),
      video: vb("estB2"),
    },
    {
      html: `<h3>Frecuencia y probabilidad</h3><p>Si un experimento se repite muchas veces, la <b>frecuencia relativa</b> de un suceso se acerca cada vez más a su <b>probabilidad</b>. Es la <b>ley de los grandes números</b>.</p><p>Si lanzas una moneda 10 veces quizá salgan 7 caras (0,7). Pero si la lanzas 1 000 veces, saldrán cerca de 500 (0,5).</p><p>Esto sirve también cuando no se puede usar Laplace, por ejemplo con una chincheta: no sabemos si cae más «de punta» o «de lado», pero lanzándola 200 veces podemos <b>estimar</b> la probabilidad.</p><p>Y recuerda: el dado no tiene memoria. Que lleves cinco tiradas sin sacar un 6 no hace más probable que salga en la siguiente.</p>`,
    },
  ],
  figura: {
    titulo: "Estadística y probabilidad en un vistazo",
    svg: filas("Resumen: población y muestra; variables cualitativas y cuantitativas; frecuencias absoluta y relativa; gráficos; media, mediana y moda; regla de Laplace", [["Población · muestra", "todo · una parte representativa", "var(--pen)"], ["Variables", "cualitativas · cuantitativas", "var(--inf)"], ["Frecuencias", "fᵢ (suman N) · hᵢ (suman 1)", "var(--sun)"], ["Gráficos", "barras · sectores · pictogramas", "var(--leaf)"], ["Centralización", "media · mediana · moda", "var(--red)"], ["Laplace", "P = favorables / posibles", "var(--ink)"]], 230),
  },
  video: vg("estV"),
  quiz: mezcla([
    { q: "«Color de ojos» es una variable…", o: ["cualitativa", "cuantitativa discreta", "cuantitativa continua"], a: 0, e: "Se expresa con palabras." },
    { q: "«Altura» es una variable…", o: ["cuantitativa continua", "cualitativa", "cuantitativa discreta"], a: 0, e: "Cualquier valor." },
    { q: "Las frecuencias relativas suman…", o: ["1", "N", "100"], a: 0, e: "Proporciones." },
    { q: "Media de 4, 6 y 8:", o: ["6", "18", "4"], a: 0, e: "18 : 3." },
    { q: "Mediana de 3, 9, 1, 7, 5:", o: ["5", "7", "9"], a: 0, e: "1, 3, 5, 7, 9." },
    { q: "Moda de 2, 3, 3, 5, 3, 2:", o: ["3", "2", "5"], a: 0, e: "Se repite 3 veces." },
    { q: "Un sector del 25 % mide…", o: ["90°", "25°", "45°"], a: 0, e: "0,25 · 360." },
    { q: "Lanzar un dado es un experimento…", o: ["aleatorio", "determinista", "imposible"], a: 0, e: "No se predice." },
    { q: "P(sacar un 3 con un dado) =", o: ["1/6", "1/3", "3/6"], a: 0, e: "Un favorable de seis." },
    { q: "La probabilidad de un suceso imposible es…", o: ["0", "1", "0,5"], a: 0, e: "Nunca ocurre." },
  ]),
  examen: mezcla([
    { q: "Bolsa con 4 rojas, 3 verdes y 1 negra. P(verde) =", o: ["3/8", "3/5", "1/3"], a: 0, e: "3 de 8." },
    { q: "Mediana de 2, 4, 6, 8:", o: ["5", "4", "6"], a: 0, e: "(4 + 6) : 2." },
    { q: "Rango de 12, 5, 20, 8:", o: ["15", "8", "20"], a: 0, e: "20 − 5." },
  ]),
  feynman: ["Diferencia entre población y muestra", "Qué es la frecuencia relativa", "Cuándo la mediana describe mejor que la media", "Qué dice la regla de Laplace", "Por qué el dado no tiene memoria"],
  mapa: mapa("ESTADÍSTICA Y PROBABILIDAD", "var(--eso)", [
    ["Datos", "población · muestra · variables", "var(--pen)"],
    ["Tablas y gráficos", "frecuencias · barras · sectores", "var(--sun)"],
    ["Parámetros", "media · mediana · moda · rango", "var(--leaf)"],
    ["Probabilidad", "Laplace · entre 0 y 1", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Muestra", "Parte representativa de la población."],
    ["Variable cualitativa", "Se expresa con palabras."],
    ["Frecuencia absoluta", "Veces que aparece un valor."],
    ["Frecuencia relativa", "fᵢ : N; suman 1."],
    ["Media", "Suma de los datos entre su número."],
    ["Mediana", "Valor central de los datos ordenados."],
    ["Moda", "Valor más repetido."],
    ["Regla de Laplace", "Favorables / posibles."],
  ],
  familias: ["Haced una encuesta familiar (comida favorita, horas de sueño) y dibujad un diagrama de barras.", "Lanzad una moneda 50 veces y comparad la frecuencia de caras con 0,5.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Variables estadísticas, tablas de frecuencias, gráficos, medidas de centralización y rango; experimentos aleatorios, sucesos y regla de Laplace (RD 217/2022, Matemáticas, sentido estocástico).",
    ideas: ["Encuesta en el grupo con hoja de cálculo y gráficos.", "Experimentos con dados, monedas y chinchetas sumando resultados de toda la clase.", "Analizar gráficos de prensa y detectar los engañosos."],
  },
  fuentes: [RD, { t: "Instituto Nacional de Estadística: INE explica", url: "https://www.ine.es/explica/explica.htm" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Notas de 8 alumnos: 5, 7, 6, 9, 5, 8, 5, 3. Calcula media, mediana, moda y rango.", pasos: ["Media: 48 : 8 = 6.", "Ordenados: 3, 5, 5, 5, 6, 7, 8, 9 → mediana (5 + 6) : 2 = 5,5.", "Moda: 5. Rango: 9 − 3 = 6."], resultado: "Media 6, mediana 5,5, moda 5, rango 6." },
    { enunciado: "En una encuesta a 40 personas, 14 prefieren el fútbol. ¿Qué ángulo le corresponde en un diagrama de sectores?", pasos: ["hᵢ = 14 : 40 = 0,35.", "Ángulo: 0,35 · 360°.", "= 126°."], resultado: "126°" },
    { enunciado: "Se saca una carta de una baraja española de 40. ¿Probabilidad de sacar una copa? ¿Y un rey?", pasos: ["Hay 10 copas: 10/40 = 1/4.", "Hay 4 reyes: 4/40 = 1/10.", "Todas las cartas son igual de probables: se puede usar Laplace."], resultado: "1/4 y 1/10." },
  ],
  errores: [
    "Calcular la mediana sin ordenar antes los datos.",
    "Confundir la moda (el valor que más se repite) con su frecuencia.",
    "Olvidar que las frecuencias relativas deben sumar 1.",
    "Aplicar Laplace cuando los resultados no son igual de probables.",
    "Pensar que después de muchas cruces «toca» cara.",
  ],
  ejercicios: [
    { q: "Clasifica las variables: número de hermanos, deporte favorito, peso, número de zapato.", sol: "Cuantitativa discreta, cualitativa, cuantitativa continua, cuantitativa discreta." },
    { q: "Quieres saber cuántas horas duermen los alumnos del instituto. ¿Cuál es la población? Propón una muestra.", sol: "Todos los alumnos del instituto; por ejemplo, 5 alumnos al azar de cada grupo." },
    { q: "Haz la tabla de frecuencias de: A, B, A, C, A, B, A, C, B, A.", sol: "A: 5 (0,5); B: 3 (0,3); C: 2 (0,2)." },
    { q: "¿Qué ángulo ocupa cada valor del ejercicio anterior en un diagrama de sectores?", sol: "180°, 108° y 72°." },
    { q: "Calcula la media de 12, 15, 9, 14 y 10.", sol: "60 : 5 = 12." },
    { q: "Halla la mediana y la moda de 4, 7, 2, 7, 9, 3, 7.", sol: "Ordenados: 2, 3, 4, 7, 7, 7, 9; mediana 7, moda 7." },
    { q: "Un equipo marca 0, 1, 1, 2, 6 goles. ¿Qué describe mejor sus partidos, la media o la mediana?", sol: "Media 2, mediana 1. La mediana, porque el 6 es un dato extremo." },
    { q: "Escribe el espacio muestral de lanzar dos monedas.", sol: "{CC, CX, XC, XX}." },
    { q: "Con un dado, calcula P(sacar más de 4) y P(no sacar un 1).", sol: "2/6 = 1/3; 5/6." },
    { q: "Una ruleta tiene 8 sectores iguales: 3 rojos, 4 azules y 1 verde. Calcula la probabilidad de cada color.", sol: "3/8, 4/8 = 1/2 y 1/8. Suman 1." },
  ],
};
