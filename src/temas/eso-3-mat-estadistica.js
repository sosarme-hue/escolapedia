// Matemáticas 3º ESO: estadística. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Estadística",
  minutos: 60,
  objetivos: ["Distinguir población, muestra, individuo y tipos de variables estadísticas", "Construir tablas de frecuencias, también con datos agrupados", "Elegir y construir el gráfico adecuado", "Calcular e interpretar parámetros de centralización, posición y dispersión"],
  claves: ["población", "muestra", "frecuencia", "histograma", "media", "desviación típica"],
  pregunta: {
    texto: "Una encuesta en Instagram dice que el 80 % de los jóvenes prefiere un videojuego concreto. ¿Te lo crees?",
    respuesta: "Depende de <mark>quién ha respondido</mark>. Si solo votan los seguidores de la cuenta del videojuego, la muestra está sesgada. La estadística enseña a recoger datos bien, a resumirlos con tablas, gráficos y parámetros, y a desconfiar de las conclusiones que no se apoyan en una buena muestra.",
  },
  bloques: [
    {
      html: `<h3>Conceptos básicos</h3><ul><li><b>Población</b>: el conjunto de todos los elementos que se quieren estudiar (todos los alumnos de 3º de ESO de España).</li><li><b>Individuo</b>: cada elemento de la población.</li><li><b>Muestra</b>: una parte de la población que se estudia cuando no se puede preguntar a todos. Debe ser <mark>representativa</mark>: elegida al azar y de tamaño suficiente.</li><li><b>Variable estadística</b>: la característica que se estudia.</li></ul><p>Un estudio con toda la población es un <b>censo</b>, como el que hace el INE cada diez años. Si la muestra no representa bien a la población, decimos que está <b>sesgada</b>.</p>`,
    },
    {
      html: `<h3>Tipos de variables</h3>${tabla(["Tipo", "Valores", "Ejemplos"], [["Cualitativa", "cualidades, no números", "color favorito, deporte, marca de móvil"], ["Cuantitativa discreta", "números aislados (se cuentan)", "n.º de hermanos, goles, mensajes al día"], ["Cuantitativa continua", "cualquier valor de un intervalo (se miden)", "altura, peso, tiempo, temperatura"]])}<p>El tipo de variable decide qué tabla, qué gráfico y qué parámetros tienen sentido. Por ejemplo, no se puede calcular la media del color favorito, pero sí su <b>moda</b>.</p>`,
    },
    {
      html: `<h3>Tablas de frecuencias</h3><p>Para cada valor xᵢ se anota:</p><ul><li><b>Frecuencia absoluta</b> fᵢ: cuántas veces aparece.</li><li><b>Frecuencia relativa</b> hᵢ = fᵢ / N, donde N es el total de datos. Multiplicada por 100 da el porcentaje.</li><li><b>Frecuencias acumuladas</b> Fᵢ y Hᵢ: suma de las de ese valor y todos los anteriores.</li></ul>${tabla(["Goles xᵢ", "fᵢ", "hᵢ", "Fᵢ"], [["0", "3", "0,15", "3"], ["1", "7", "0,35", "10"], ["2", "6", "0,30", "16"], ["3", "4", "0,20", "20"], ["<b>Total</b>", "<b>20</b>", "<b>1</b>", ""]])}<p>Comprobaciones: las fᵢ suman N, las hᵢ suman 1 y la última Fᵢ es N.</p>`,
      video: { id: "cyXenZEbGz4", titulo: "Tablas de frecuencia | Ejemplo 1", canal: "Matemáticas profe Alex", vistas: 6837000, megusta: 0 },
    },
    {
      html: `<h3>Datos agrupados en intervalos</h3><p>Si la variable es continua o tiene muchos valores distintos, se agrupan en <b>intervalos</b> o clases, normalmente de igual amplitud y cerrados por la izquierda: [150, 160) incluye 150 pero no 160. Cada intervalo se representa por su <mark>marca de clase</mark>, el punto medio: (150 + 160) / 2 = 155.</p><p>Para decidir los intervalos: calcula el <b>recorrido</b> (máximo − mínimo), elige un número de clases razonable (entre 5 y 10) y divide. Agrupar simplifica, pero se pierde algo de información: ya no sabemos el valor exacto de cada dato.</p>`,
    },
    {
      html: `<h3>Gráficos estadísticos</h3><ul><li><b>Diagrama de barras</b>: variables cualitativas o discretas. Barras separadas, altura = frecuencia.</li><li><b>Histograma</b>: variables agrupadas en intervalos. Rectángulos <mark>pegados</mark>.</li><li><b>Polígono de frecuencias</b>: une los extremos superiores de las barras (o las marcas de clase).</li><li><b>Diagrama de sectores</b>: proporciones. Ángulo = hᵢ · 360°.</li><li><b>Pictograma</b>: dibujos proporcionales a la frecuencia.</li></ul><p>Un buen gráfico tiene título, ejes rotulados con unidades y el eje vertical empezando en 0.</p>`,
      svg: svg("Diagrama de barras separadas para los goles y un histograma con barras pegadas para alturas", `<path d="M16 140 H 120 M16 140 V 30" stroke="var(--muted)" stroke-width="2"/>${[3, 7, 6, 4].map((f, i) => `<rect x="${24 + i * 24}" y="${140 - f * 14}" width="16" height="${f * 14}" rx="2" fill="var(--pen)"/>${t(32 + i * 24, 154, i, { s: 10, c: "var(--muted)" })}`).join("")}
        <path d="M138 140 H 246 M138 140 V 30" stroke="var(--muted)" stroke-width="2"/>${[2, 6, 9, 5, 2].map((f, i) => `<rect x="${142 + i * 20}" y="${140 - f * 11}" width="20" height="${f * 11}" fill="var(--leaf)" fill-opacity=".7" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}
        <path d="M132 ${140 - 0} ${[2, 6, 9, 5, 2].map((f, i) => `L ${152 + i * 20} ${140 - f * 11}`).join(" ")} L 252 140" fill="none" stroke="var(--red)" stroke-width="2"/>
        ${t(66, 172, "barras (goles)", { c: "var(--pen)", s: 11 })}${t(192, 172, "histograma", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>Media, mediana y moda</h3><p>Son los <b>parámetros de centralización</b>: un único número que resume los datos.</p><ul><li><b>Media</b>: x̄ = Σ xᵢ · fᵢ / N. En la tabla de goles: (0 · 3 + 1 · 7 + 2 · 6 + 3 · 4) / 20 = 31 / 20 = <mark>1,55</mark>.</li><li><b>Mediana</b>: el valor central de los datos ordenados. Con N = 20, las posiciones 10 y 11 son un 1 y un 2: Me = 1,5.</li><li><b>Moda</b>: el valor más repetido. Mo = 1.</li></ul><p>La media se deja arrastrar por los valores extremos; la mediana, no. Por eso los sueldos suelen resumirse con la mediana.</p>`,
      video: { id: "0DA7Wtz1ddg", titulo: "Media, moda y mediana súper fácil", canal: "Daniel Carreón", vistas: 17076437, megusta: 0 },
    },
    {
      html: `<h3>Cuartiles y percentiles</h3><p>Los <b>parámetros de posición</b> dividen los datos ordenados en partes iguales. Los <b>cuartiles</b> Q₁, Q₂ y Q₃ los parten en cuatro: Q₁ deja por debajo el 25 % de los datos, Q₂ es la mediana y Q₃ deja por debajo el 75 %.</p><p>Los <b>percentiles</b> dividen en cien partes. Los pediatras los usan con el peso y la talla: un bebé en el <mark>percentil 80</mark> de altura es más alto que el 80 % de los bebés de su edad. Con los cuartiles se dibuja el <b>diagrama de caja</b>, que muestra de un vistazo dónde está el 50 % central de los datos.</p>`,
    },
    {
      html: `<h3>Parámetros de dispersión</h3><p>Dos grupos con la misma media pueden ser muy distintos. Los <b>parámetros de dispersión</b> miden cuánto se separan los datos de la media:</p><ul><li><b>Recorrido</b>: máximo − mínimo.</li><li><b>Varianza</b>: σ² = Σ (xᵢ − x̄)² · fᵢ / N, la media de los cuadrados de las desviaciones.</li><li><b>Desviación típica</b>: σ = √varianza, en las mismas unidades que los datos.</li><li><b>Coeficiente de variación</b>: CV = σ / x̄, para comparar grupos con medias distintas.</li></ul><p>Cuanto menor es σ, más <mark>homogéneos</mark> son los datos y más representativa es la media.</p>`,
      svg: svg("Dos grupos con media 6: uno con notas concentradas, desviación típica pequeña, y otro muy disperso", `<path d="M20 60 H 240 M20 130 H 240" stroke="var(--muted)" stroke-width="2"/><path d="M152 30 V 150" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/>
        ${[5.2, 5.6, 5.8, 6, 6.2, 6.4, 6.8].map((v) => `<circle cx="${20 + v * 22}" cy="60" r="6" fill="var(--leaf)"/>`).join("")}${[2, 3.5, 5, 6, 7, 8.5, 10].map((v) => `<circle cx="${20 + v * 22}" cy="130" r="6" fill="var(--pen)"/>`).join("")}
        ${t(20, 44, "σ pequeña", { c: "var(--leaf)", s: 12, a: "start" })}${t(20, 114, "σ grande", { c: "var(--pen)", s: 12, a: "start" })}${t(158, 24, "media 6", { c: "var(--red)", s: 12, a: "start" })}`),
    },
    {
      html: `<h3>Estadística crítica</h3><p>La estadística se usa a veces para <b>manipular</b>. Fíjate en:</p><ul><li><b>Ejes cortados</b>: un eje vertical que no empieza en 0 exagera diferencias pequeñas.</li><li><b>Muestras sesgadas</b> o demasiado pequeñas.</li><li><b>Parámetros mal elegidos</b>: dar la media cuando hay valores extremos.</li><li><b>Correlación no es causa</b>: que dos cosas crezcan juntas no significa que una provoque la otra (las ventas de helados y los ahogamientos suben en verano, pero el culpable es el calor).</li></ul><p>Pregunta siempre: ¿quién ha hecho el estudio, a quién ha preguntado y cuántos eran?</p>`,
    },
  ],
  figura: {
    titulo: "Del dato al resumen",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Pasos: recoger datos de una muestra representativa, organizar en una tabla de frecuencias, representar con el gráfico adecuado, resumir con parámetros">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["1. Recoger", "muestra representativa · tipo de variable", "var(--ink)"], ["2. Organizar", "tabla: fᵢ, hᵢ, Fᵢ · intervalos y marcas", "var(--pen)"], ["3. Representar", "barras · histograma · sectores", "var(--leaf)"], ["4. Resumir", "media, mediana, moda · cuartiles · σ", "var(--red)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="210" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "JtB2w0QLRZ4", titulo: "Tabla de frecuencias súper fácil", canal: "Daniel Carreón", vistas: 8984170, megusta: 0, busqueda: "tablas de frecuencias estadística" },
  quiz: mezcla([
    { q: "El número de mensajes que envías al día es una variable…", o: ["cuantitativa discreta", "cuantitativa continua", "cualitativa"], a: 0, e: "Se cuenta." },
    { q: "Si fᵢ = 8 y N = 40, la frecuencia relativa es…", o: ["0,2", "5", "0,8"], a: 0, e: "8 / 40." },
    { q: "La marca de clase de [20, 30) es…", o: ["25", "20", "10"], a: 0, e: "Punto medio." },
    { q: "Para datos de alturas agrupados en intervalos uso…", o: ["un histograma", "un pictograma", "un diagrama de sectores"], a: 0, e: "Variable continua agrupada." },
    { q: "La mediana de 3, 8, 5, 10, 1 es…", o: ["5", "8", "5,4"], a: 0, e: "Ordenados: 1, 3, 5, 8, 10." },
    { q: "La media de 2, 4, 6, 8 es…", o: ["5", "4", "6"], a: 0, e: "20 / 4." },
    { q: "Un sector con el 25 % de los datos mide…", o: ["25°", "90°", "45°"], a: 1, e: "0,25 · 360°." },
    { q: "¿Qué parámetro se ve menos afectado por un valor extremo?", o: ["La media", "La mediana", "El recorrido"], a: 1, e: "Solo importa la posición central." },
    { q: "Si la desviación típica es 0, los datos…", o: ["son todos iguales", "son negativos", "están muy dispersos"], a: 0, e: "No se separan de la media." },
    { q: "Un percentil 90 de altura significa…", o: ["que mides 90 cm", "que eres más alto que el 90 %", "que eres el 90.º de la lista"], a: 1, e: "Deja por debajo el 90 %." },
  ]),
  examen: mezcla([
    { q: "El recorrido de 12, 4, 18, 9 es…", o: ["14", "18", "4"], a: 0, e: "18 − 4." },
    { q: "Encuestar solo a los socios de un gimnasio sobre cuánto deporte se hace da una muestra…", o: ["sesgada", "representativa", "censal"], a: 0, e: "No representa a toda la población." },
    { q: "Grupo A: x̄ = 50, σ = 5. Grupo B: x̄ = 10, σ = 2. Es relativamente más disperso…", o: ["A", "B", "Iguales"], a: 1, e: "CV 10 % frente a 20 %." },
  ]),
  feynman: ["Qué diferencia hay entre población y muestra y por qué la muestra debe ser representativa", "Cómo se construye una tabla de frecuencias", "Cuándo usarías la mediana en lugar de la media", "Qué te dice la desviación típica"],
  mapa: mapa("ESTADÍSTICA", "var(--eso)", [
    ["Datos", "población · muestra · variables", "var(--ink)"],
    ["Tablas y gráficos", "fᵢ · hᵢ · Fᵢ · histograma", "var(--pen)"],
    ["Centralización", "media · mediana · moda", "var(--leaf)"],
    ["Dispersión", "recorrido · σ · CV", "var(--red)"],
  ], 250),
  tarjetas: [
    ["Muestra", "Parte representativa de la población."],
    ["Variable continua", "Puede tomar cualquier valor de un intervalo: se mide."],
    ["Frecuencia relativa", "hᵢ = fᵢ / N."],
    ["Marca de clase", "Punto medio de un intervalo."],
    ["Mediana", "Valor central de los datos ordenados."],
    ["Cuartil Q₃", "Deja por debajo el 75 % de los datos."],
    ["Desviación típica", "Raíz cuadrada de la varianza: mide la dispersión."],
    ["Histograma", "Gráfico de rectángulos pegados para datos agrupados."],
  ],
  familias: ["Anotad durante una semana los minutos de pantalla de cada día y calculad media, mediana y recorrido.", "Buscad un gráfico en un periódico y comprobad si el eje vertical empieza en 0.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido estocástico: población y muestra, variables, tablas de frecuencias, gráficos, parámetros de centralización, posición y dispersión, análisis crítico (RD 217/2022, Matemáticas 3º).",
    ideas: ["Encuesta real en el centro con hoja de cálculo y gráficos.", "Datos abiertos del INE para estudiar un tema de interés del grupo.", "Galería de gráficos engañosos de medios de comunicación."],
  },
  fuentes: [RD, { t: "Instituto Nacional de Estadística (INE), recursos educativos", url: "https://www.ine.es/explica/explica.htm" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Las notas de 10 alumnos son: 5, 7, 6, 9, 5, 8, 5, 6, 7, 2. Halla media, mediana, moda y recorrido.",
      pasos: ["Ordenamos: 2, 5, 5, 5, 6, 6, 7, 7, 8, 9.", "Media: 60 / 10 = 6.", "Mediana: posiciones 5 y 6 → (6 + 6) / 2 = 6.", "Moda: 5 (aparece 3 veces). Recorrido: 9 − 2 = 7."],
      resultado: "x̄ = 6; Me = 6; Mo = 5; recorrido 7." },
    { enunciado: "Calcula la desviación típica de 4, 6, 8, 10, 12.",
      pasos: ["Media: 40 / 5 = 8.", "Desviaciones: −4, −2, 0, 2, 4. Cuadrados: 16, 4, 0, 4, 16 → suman 40.", "Varianza: 40 / 5 = 8.", "σ = √8 ≈ 2,83."],
      resultado: "σ ≈ 2,83." },
    { enunciado: "En una clase de 30 alumnos, 12 prefieren fútbol, 9 baloncesto, 6 voleibol y 3 tenis. Calcula los ángulos del diagrama de sectores.",
      pasos: ["hᵢ: 12/30 = 0,4; 9/30 = 0,3; 6/30 = 0,2; 3/30 = 0,1.", "Ángulos: 0,4 · 360 = 144°; 0,3 · 360 = 108°; 0,2 · 360 = 72°; 0,1 · 360 = 36°.", "Comprobación: 144 + 108 + 72 + 36 = 360°."],
      resultado: "144°, 108°, 72° y 36°." },
  ],
  errores: [
    "Calcular la mediana sin ordenar los datos.",
    "En una tabla, sumar los xᵢ sin multiplicarlos por sus frecuencias.",
    "Dibujar un histograma con barras separadas o un diagrama de barras con barras pegadas.",
    "Calcular la media de una variable cualitativa.",
    "Generalizar a toda la población a partir de una muestra sesgada.",
    "Olvidar la raíz cuadrada al pasar de varianza a desviación típica.",
  ],
  ejercicios: [
    { q: "Clasifica las variables: lugar de nacimiento, número de libros leídos al año, tiempo en llegar al instituto, talla de zapato.", sol: "Cualitativa; cuantitativa discreta; cuantitativa continua; cuantitativa discreta (toma valores aislados)." },
    { q: "Indica población y muestra: «Para conocer la opinión de los vecinos de un pueblo de 8.000 habitantes sobre el nuevo parque se pregunta a 400 elegidos al azar».", sol: "Población: los 8.000 vecinos. Muestra: los 400 elegidos." },
    { q: "Haz la tabla de frecuencias (fᵢ, hᵢ, Fᵢ) de: 1, 2, 2, 3, 1, 2, 4, 3, 2, 1.", sol: "x = 1: f 3, h 0,3, F 3. x = 2: f 4, h 0,4, F 7. x = 3: f 2, h 0,2, F 9. x = 4: f 1, h 0,1, F 10." },
    { q: "Calcula la media, la mediana y la moda de los datos del ejercicio anterior.", sol: "Media = (3 + 8 + 6 + 4) / 10 = 2,1. Mediana: posiciones 5 y 6 → 2 y 2 → 2. Moda: 2." },
    { q: "Escribe las marcas de clase de [0, 10), [10, 20), [20, 30).", sol: "5, 15 y 25." },
    { q: "Las alturas de 20 alumnos son: [150, 160): 4; [160, 170): 9; [170, 180): 5; [180, 190): 2. Calcula la media.", sol: "Σ xᵢfᵢ = 155 · 4 + 165 · 9 + 175 · 5 + 185 · 2 = 620 + 1.485 + 875 + 370 = 3.350. Media = 167,5 cm." },
    { q: "Halla el recorrido, la varianza y la desviación típica de 2, 4, 6.", sol: "Recorrido 4. Media 4; cuadrados 4, 0, 4 → 8; varianza 8/3 ≈ 2,67; σ ≈ 1,63." },
    { q: "Halla Q₁, Me y Q₃ de 3, 5, 6, 8, 9, 11, 12, 15.", sol: "Me = (8 + 9) / 2 = 8,5. Q₁ = mediana de 3, 5, 6, 8 = 5,5. Q₃ = mediana de 9, 11, 12, 15 = 11,5." },
    { q: "Los sueldos de 5 personas son 1.200, 1.300, 1.250, 1.400 y 6.000 €. ¿Qué parámetro representa mejor el sueldo típico?", sol: "Media = 11.150 / 5 = 2.230 €; mediana = 1.300 €. La mediana, porque el sueldo de 6.000 € dispara la media." },
    { q: "Un anuncio dice: «9 de cada 10 dentistas recomiendan nuestra pasta» y en letra pequeña: «encuesta a 10 dentistas». ¿Qué opinas?", sol: "La muestra es demasiado pequeña y probablemente no es aleatoria; la conclusión no se puede generalizar a todos los dentistas." },
  ],
};
