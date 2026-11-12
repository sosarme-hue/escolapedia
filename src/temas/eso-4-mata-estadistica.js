// Matemáticas A 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Estadística",
  minutos: 40,
  objetivos: ["Distinguir población, muestra y tipos de variables", "Organizar datos en tablas de frecuencias y elegir el gráfico adecuado", "Calcular e interpretar media, mediana, moda, rango y desviación típica"],
  claves: ["población", "muestra", "frecuencia", "media", "mediana", "desviación típica"],
  pregunta: {
    texto: "En una empresa, 9 trabajadores cobran 1.200 € y el jefe cobra 20.000 €. El jefe dice que el sueldo medio es de 2.880 €. ¿Engaña?",
    respuesta: "La <b>media</b> sí es 2.880 €, pero un solo dato extremo la dispara. La <mark>mediana</mark> (1.200 €) describe mucho mejor el sueldo típico. Elegir bien el parámetro es la clave para no dejarse engañar por las estadísticas.",
  },
  bloques: [
    {
      html: `<h3>Población, muestra y variables</h3><p>La <b>población</b> es el conjunto que se estudia; si es muy grande, se elige una <b>muestra</b> que la represente bien. Las variables pueden ser <mark>cualitativas</mark> (color, deporte favorito) o <mark>cuantitativas</mark>: discretas (número de hermanos) o continuas (altura).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una población grande de puntos y una muestra pequeña elegida al azar dentro de ella">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="14" y="20" width="232" height="120" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
        ${[...Array(60)].map((_, i) => `<circle cx="${30 + (i % 12) * 18}" cy="${36 + Math.floor(i / 12) * 20}" r="5" fill="${[3, 14, 22, 27, 38, 45, 51].includes(i) ? "var(--red)" : "var(--pen)"}" fill-opacity="${[3, 14, 22, 27, 38, 45, 51].includes(i) ? 1 : 0.3}"/>`).join("")}
        <g ${F} font-size="12" font-weight="700"><text x="20" y="160" fill="var(--pen)">población</text><text x="150" y="160" fill="var(--red)">● muestra al azar</text></g></svg>`,
    },
    {
      html: `<h3>Tablas de frecuencias y gráficos</h3><p>La <b>frecuencia absoluta</b> fᵢ es cuántas veces aparece un dato; la <b>relativa</b>, fᵢ / N. Gráficos: <mark>barras</mark> para variables discretas o cualitativas, <mark>sectores</mark> para ver proporciones e <mark>histograma</mark> para datos continuos agrupados en intervalos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de barras del número de hermanos de una clase y un diagrama de sectores">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><path d="M16 140 H 136" stroke="var(--muted)" stroke-width="2"/>
        ${[[0, 6], [1, 12], [2, 8], [3, 3]].map(([n, f], i) => `<rect x="${24 + i * 28}" y="${140 - f * 8}" width="20" height="${f * 8}" rx="3" fill="var(--pen)"/><text x="${34 + i * 28}" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" ${F}>${n}</text><text x="${34 + i * 28}" y="${134 - f * 8}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${f}</text>`).join("")}
        <circle cx="200" cy="86" r="44" fill="var(--leaf)"/><path d="M200 86 L 200 42 A 44 44 0 0 1 242 100 Z" fill="var(--red)"/><path d="M200 86 L 242 100 A 44 44 0 0 1 172 120 Z" fill="var(--inf)"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="76" y="174" fill="var(--pen)">barras: hermanos</text><text x="200" y="152" fill="var(--ink)">sectores</text></g></svg>`,
    },
    {
      html: `<h3>Media, mediana y moda</h3><p>Son los <b>parámetros de centralización</b>:</p><ul><li><b>Media</b>: suma de datos / número de datos.</li><li><b>Mediana</b>: el dato que queda <mark>en el centro</mark> al ordenarlos.</li><li><b>Moda</b>: el dato que <mark>más se repite</mark>.</li></ul><p>Con 3, 5, 5, 6, 11: media 6, mediana 5, moda 5.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Datos ordenados 3, 5, 5, 6 y 11: la mediana es el del centro, 5, la moda es 5 y la media es 6">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[3, 5, 5, 6, 11].map((v, i) => `<rect x="${20 + i * 46}" y="40" width="38" height="38" rx="8" fill="${i === 2 ? "var(--hl)" : "var(--card)"}" stroke="${v === 5 ? "var(--leaf)" : "var(--ink)"}" stroke-width="${v === 5 ? 3 : 2}"/><text x="${39 + i * 46}" y="66" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${v}</text>`).join("")}
        <g ${F} font-size="13" font-weight="700"><text x="20" y="110" fill="var(--hl-ink)">mediana = 5 (centro)</text><text x="20" y="132" fill="var(--leaf)">moda = 5 (más repetido)</text><text x="20" y="154" fill="var(--pen)">media = 30 / 5 = 6</text></g></svg>`,
    },
    {
      html: `<h3>Medidas de dispersión</h3><p>Dicen si los datos están <mark>juntos o dispersos</mark>. El <b>rango</b> es máximo − mínimo. La <b>desviación típica</b> σ mide la distancia media de los datos a la media: cuanto menor, más homogéneos. Dos clases pueden tener la misma media (6) y ser muy distintas: una con todos los alumnos entre 5 y 7, otra entre 1 y 10.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos grupos con la misma media 6: uno con notas concentradas y otro con notas muy repartidas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 60 H 240 M20 130 H 240" stroke="var(--muted)" stroke-width="2"/><path d="M152 30 V 150" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/>
        ${[5.2, 5.6, 5.8, 6, 6.1, 6.4, 6.9].map((v) => `<circle cx="${20 + v * 22}" cy="60" r="6" fill="var(--leaf)"/>`).join("")}
        ${[1.5, 3, 4.5, 6, 7.5, 9, 10].map((v) => `<circle cx="${20 + v * 22}" cy="130" r="6" fill="var(--pen)"/>`).join("")}
        <g ${F} font-size="12" font-weight="700"><text x="20" y="44" fill="var(--leaf)">σ pequeña</text><text x="20" y="114" fill="var(--pen)">σ grande</text><text x="158" y="24" fill="var(--red)">media 6</text></g></svg>`,
    },
    {
      html: `<h3>Elegir bien y no dejarse engañar</h3><p>La <b>media</b> se deja arrastrar por datos extremos; la <b>mediana</b> no. Por eso los sueldos y los precios de las casas se suelen dar con la mediana. Desconfía también de gráficos con el <mark>eje vertical cortado</mark>, que exageran diferencias pequeñas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El mismo dato en dos gráficos: con el eje empezando en 0 la diferencia es pequeña; con el eje cortado parece enorme">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 140 H 120 M20 140 V 30" stroke="var(--muted)" stroke-width="2"/><rect x="40" y="52" width="26" height="88" fill="var(--pen)"/><rect x="80" y="46" width="26" height="94" fill="var(--red)"/>
        <path d="M140 140 H 244 M140 140 V 30" stroke="var(--muted)" stroke-width="2"/><path d="M134 128 l 12 -6 M134 134 l 12 -6" stroke="var(--muted)" stroke-width="2"/><rect x="160" y="110" width="26" height="30" fill="var(--pen)"/><rect x="200" y="40" width="26" height="100" fill="var(--red)"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="70" y="160" fill="var(--leaf)">eje desde 0 ✓</text><text x="192" y="160" fill="var(--red)">eje cortado ✗</text><text x="70" y="174" fill="var(--muted)">93 frente a 100</text><text x="192" y="174" fill="var(--muted)">¡lo mismo!</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Qué parámetro uso en cada caso",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Media si los datos son parecidos, mediana si hay valores extremos, moda para variables cualitativas, desviación típica para comparar la dispersión">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Media", "datos parecidos, sin extremos", "var(--pen)"], ["Mediana", "hay valores muy grandes o pequeños", "var(--hl-ink)"], ["Moda", "variables cualitativas (lo más votado)", "var(--leaf)"], ["Desviación típica", "comparar lo agrupados que están", "var(--red)"]].map(([n, d, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${43 + i * 50}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="230" y="${43 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "0DA7Wtz1ddg", titulo: "Media, moda y mediana, súper fácil", canal: "Daniel Carreón", vistas: 17076098, megusta: 0, busqueda: "media mediana moda" },
  quiz: [
    { q: "La media de 4, 6, 8 y 10 es…", o: ["7", "6", "8"], a: 0, e: "28 / 4 = 7." },
    { q: "La mediana de 2, 9, 3, 7, 5 es…", o: ["3", "5", "7"], a: 1, e: "Ordenados: 2, 3, 5, 7, 9; el centro es 5." },
    { q: "¿Qué tipo de variable es «deporte favorito»?", o: ["Cuantitativa discreta", "Cualitativa", "Cuantitativa continua"], a: 1, e: "No es un número." },
    { q: "Para datos de alturas agrupados en intervalos, el gráfico adecuado es…", o: ["Histograma", "Sectores", "Pictograma"], a: 0, e: "Variable continua agrupada." },
    { q: "Si la desviación típica es muy pequeña, los datos están…", o: ["muy dispersos", "muy agrupados", "ordenados"], a: 1, e: "Están cerca de la media." },
  ],
  examen: [
    { q: "La moda de 1, 3, 3, 4, 4, 4, 6 es…", o: ["3", "4", "3,6"], a: 1, e: "El 4 aparece 3 veces." },
    { q: "El rango de 12, 5, 20, 8 es…", o: ["15", "8", "20"], a: 0, e: "20 − 5." },
    { q: "Si en una tabla un dato tiene frecuencia absoluta 6 de N = 30, su frecuencia relativa es…", o: ["0,2", "6", "0,5"], a: 0, e: "6 / 30." },
  ],
  feynman: ["Qué diferencia hay entre población y muestra", "Cómo se calculan media, mediana y moda", "Para qué sirve la desviación típica", "Por qué la mediana a veces describe mejor los datos que la media"],
  mapa: mapa("ESTADÍSTICA", "var(--bac)", [
    ["Datos", "población · muestra · variables", "var(--ink)"],
    ["Tablas y gráficos", "frecuencias · barras · histograma", "var(--pen)"],
    ["Centralización", "media · mediana · moda", "var(--leaf)"],
    ["Dispersión", "rango · desviación típica", "var(--red)"],
  ], 260),
  tarjetas: [
    ["¿Qué es una muestra?", "Una parte de la población elegida para que la represente."],
    ["Mediana", "El valor central de los datos ordenados."],
    ["Moda", "El valor que más se repite."],
    ["¿Qué mide la desviación típica?", "Lo dispersos que están los datos respecto a la media."],
    ["¿Qué parámetro se ve menos afectado por valores extremos?", "La mediana."],
  ],
  familias: ["Buscad una noticia con un gráfico y revisad juntos si el eje empieza en 0.", "Calculad la media y la mediana de los minutos de pantalla diarios de la familia durante una semana.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido estocástico: estadística unidimensional, tablas, gráficos, parámetros de centralización y dispersión, análisis crítico (RD 217/2022, Matemáticas A 4º).",
    ideas: ["Encuesta en clase con hoja de cálculo: tabla, gráfico y parámetros.", "Galería de gráficos engañosos de medios de comunicación.", "Comparar dos grupos con la misma media y distinta dispersión."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Instituto Nacional de Estadística (INE), recursos educativos", url: "https://www.ine.es/explica/explica.htm" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const T = module.exports;
T.minutos = 60;
T.objetivos.push("Trabajar con frecuencias acumuladas y datos agrupados en intervalos", "Calcular cuartiles y el coeficiente de variación");
const tabla = (cab, filas) => `<table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
const nuevos = {
  acumuladas: { html: `<h3>Frecuencias acumuladas</h3><p>La <b>frecuencia absoluta acumulada</b> Fᵢ suma las frecuencias de ese valor y de todos los anteriores. Sirve para responder a preguntas como «¿cuántos alumnos tienen 2 hermanos <mark>o menos</mark>?» y para encontrar la mediana. La última Fᵢ siempre es N, y la suma de las frecuencias relativas siempre es 1.</p>${tabla(["Hermanos xᵢ", "fᵢ", "Fᵢ", "hᵢ = fᵢ / N", "%"], [["0", "4", "4", "0,20", "20 %"], ["1", "9", "13", "0,45", "45 %"], ["2", "5", "18", "0,25", "25 %"], ["3", "2", "20", "0,10", "10 %"], ["<b>Total</b>", "<b>20</b>", "", "<b>1</b>", "<b>100 %</b>"]])}` },
  intervalos: { html: `<h3>Datos agrupados en intervalos</h3><p>Cuando hay muchos valores distintos (alturas, tiempos, pesos) se agrupan en <b>intervalos</b> de la misma amplitud, normalmente cerrados por la izquierda y abiertos por la derecha: [160, 170) incluye 160 pero no 170. Cada intervalo se representa por su <mark>marca de clase</mark>, el punto medio: (160 + 170) / 2 = 165. Con estos datos se dibuja un <b>histograma</b>, cuyas barras van pegadas porque la variable es continua.</p>` },
  mediaTabla: { html: `<h3>Media, mediana y moda con una tabla</h3><p>Si los datos vienen en una tabla, cada valor cuenta tantas veces como su frecuencia: <mark>x̄ = Σ xᵢ · fᵢ / N</mark>. Para la <b>mediana</b>, busca la posición central N / 2 en la columna Fᵢ: el primer valor cuya Fᵢ la supera es la mediana (si Fᵢ coincide justo con N / 2, se hace la media de ese valor y el siguiente). La <b>moda</b> es el valor con mayor fᵢ. Con datos agrupados se usa la marca de clase como xᵢ, y se habla de <b>intervalo modal</b> e <b>intervalo mediano</b>.</p>` },
  sigma: { html: `<h3>Varianza y desviación típica, paso a paso</h3><ol><li>Calcula la media x̄.</li><li>Resta la media a cada dato: xᵢ − x̄.</li><li>Eleva cada diferencia al cuadrado (así no se anulan positivas y negativas).</li><li>Haz la media de esos cuadrados: es la <b>varianza</b>, σ².</li><li>Haz la raíz cuadrada: es la <b>desviación típica</b>, σ, que vuelve a estar en las mismas unidades que los datos.</li></ol><p>Con tabla: σ² = Σ (xᵢ − x̄)² · fᵢ / N. La calculadora científica la da en modo estadístico (tecla σx). La desviación típica <mark>nunca es negativa</mark>, y vale 0 solo si todos los datos son iguales.</p>` },
  cuartiles: {
    html: `<h3>Cuartiles y diagrama de caja</h3><p>Los <b>cuartiles</b> parten los datos ordenados en cuatro partes con el mismo número de datos: Q₁ deja por debajo el 25 %, Q₂ es la mediana y Q₃ deja por debajo el 75 %. El <b>rango intercuartílico</b> RIC = Q₃ − Q₁ mide la dispersión del 50 % central y no le afectan los extremos. El <mark>diagrama de caja</mark> los dibuja: la caja va de Q₁ a Q₃, una raya marca la mediana y los «bigotes» llegan al mínimo y al máximo.</p>`,
    svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de caja: mínimo 2, primer cuartil 4, mediana 6, tercer cuartil 8 y máximo 12">
      <rect width="260" height="180" rx="14" fill="var(--paper)"/>
      <path d="M20 130 H 240" stroke="var(--muted)" stroke-width="2"/>
      ${[0, 2, 4, 6, 8, 10, 12, 14].map((v) => `<path d="M${20 + v * 15.7} 126 V 134" stroke="var(--muted)" stroke-width="2"/><text x="${20 + v * 15.7}" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" ${F}>${v}</text>`).join("")}
      <path d="M51 80 H 83 M146 80 H 208 M51 66 V 94 M208 66 V 94" stroke="var(--ink)" stroke-width="2.5"/>
      <rect x="83" y="56" width="63" height="48" rx="4" fill="var(--hl)" stroke="var(--ink)" stroke-width="2.5"/>
      <path d="M114 56 V 104" stroke="var(--red)" stroke-width="3"/>
      <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="51" y="50" fill="var(--ink)">mín</text><text x="83" y="44" fill="var(--pen)">Q₁</text><text x="114" y="44" fill="var(--red)">Q₂</text><text x="146" y="44" fill="var(--pen)">Q₃</text><text x="208" y="50" fill="var(--ink)">máx</text><text x="130" y="172" fill="var(--pen)">la caja guarda el 50 % central</text></g></svg>`,
  },
  cv: { html: `<h3>Comparar dispersiones: coeficiente de variación</h3><p>Una σ de 5 kg es mucho para el peso de unos gatos (media 4 kg) y poco para el de unos elefantes (media 4.000 kg). Para comparar grupos con medias muy distintas se usa el <b>coeficiente de variación</b>: <mark>CV = σ / x̄</mark>, que suele darse en porcentaje. El grupo con <b>mayor CV</b> es el relativamente más disperso.</p>` },
};
const pos = (t) => T.bloques.findIndex((b) => b.html.includes(t));
T.bloques.splice(pos("Medidas de dispersión") + 1, 0, nuevos.sigma, nuevos.cuartiles, nuevos.cv);
T.bloques.splice(pos("Media, mediana y moda") + 1, 0, nuevos.mediaTabla);
T.bloques.splice(pos("Tablas de frecuencias") + 1, 0, nuevos.acumuladas, nuevos.intervalos);

T.ejemplos = [
  { enunciado: "Se pregunta a 20 alumnos cuántos hermanos tienen: 4 dicen 0, 9 dicen 1, 5 dicen 2 y 2 dicen 3. Calcula la media, la mediana y la moda.",
    pasos: ["Media: Σ xᵢ · fᵢ = 0 · 4 + 1 · 9 + 2 · 5 + 3 · 2 = 0 + 9 + 10 + 6 = 25. Entonces x̄ = 25 / 20 = 1,25 hermanos.", "Mediana: N / 2 = 10. Las frecuencias acumuladas son 4, 13, 18, 20. La primera que pasa de 10 es 13, que corresponde al valor 1.", "Moda: el valor con más frecuencia es 1 (9 alumnos)."],
    resultado: "media 1,25; mediana 1; moda 1." },
  { enunciado: "Calcula la desviación típica de los datos 2, 4, 4, 4, 5, 5, 7, 9.",
    pasos: ["Media: (2 + 4 + 4 + 4 + 5 + 5 + 7 + 9) / 8 = 40 / 8 = 5.", "Diferencias con la media: −3, −1, −1, −1, 0, 0, 2, 4.", "Cuadrados: 9, 1, 1, 1, 0, 0, 4, 16. Suman 32.", "Varianza: σ² = 32 / 8 = 4.", "Desviación típica: σ = √4 = 2."],
    resultado: "σ = 2." },
  { enunciado: "Las alturas de 20 alumnos (en cm) son: [150, 160): 3; [160, 170): 8; [170, 180): 7; [180, 190): 2. Calcula la media, el intervalo mediano y el intervalo modal.",
    pasos: ["Marcas de clase: 155, 165, 175 y 185.", "Σ xᵢ · fᵢ = 155 · 3 + 165 · 8 + 175 · 7 + 185 · 2 = 465 + 1.320 + 1.225 + 370 = 3.380.", "Media: 3.380 / 20 = 169 cm.", "Frecuencias acumuladas: 3, 11, 18, 20. La posición central (10) cae en [160, 170).", "El intervalo con más alumnos (8) también es [160, 170)."],
    resultado: "media 169 cm; intervalo mediano e intervalo modal [160, 170)." },
];
T.errores = [
  "Calcular la mediana sin ordenar antes los datos.",
  "Con un número par de datos, quedarse con uno de los dos centrales en vez de hacer su media.",
  "En una tabla, sumar los valores xᵢ sin multiplicarlos por su frecuencia fᵢ.",
  "Confundir el valor de la variable (xᵢ) con cuántas veces aparece (fᵢ).",
  "Dar una desviación típica negativa: σ siempre es 0 o positiva.",
  "Dibujar un histograma con las barras separadas: con datos continuos van pegadas.",
];
T.ejercicios = [
  { q: "Clasifica estas variables: número de mascotas, color de ojos, peso de una persona, marca de móvil, tiempo en correr 100 m.", sol: "Número de mascotas: cuantitativa discreta. Color de ojos: cualitativa. Peso: cuantitativa continua. Marca de móvil: cualitativa. Tiempo en 100 m: cuantitativa continua." },
  { q: "Halla la media, la mediana y la moda de 7, 3, 9, 3, 8.", sol: "Ordenados: 3, 3, 7, 8, 9. Media = 30 / 5 = 6. Mediana = 7 (el del centro). Moda = 3." },
  { q: "Halla la mediana de 4, 10, 6, 8.", sol: "Ordenados: 4, 6, 8, 10. Hay dos centrales, 6 y 8: mediana = (6 + 8) / 2 = 7." },
  { q: "Ana ha sacado 6, 7 y 5 en tres exámenes. ¿Qué nota necesita en el cuarto para que su media sea 6,5?", sol: "Para una media de 6,5 con 4 notas, la suma debe ser 6,5 · 4 = 26. Ya tiene 6 + 7 + 5 = 18, así que necesita 26 − 18 = 8." },
  { q: "En una clase, 3 alumnos sacan un 5, 5 sacan un 6, 8 sacan un 7 y 4 sacan un 8. Calcula la media, la mediana y la moda.", sol: "N = 20. Σ xᵢ · fᵢ = 15 + 30 + 56 + 32 = 133, media = 133 / 20 = 6,65. Fᵢ: 3, 8, 16, 20; las posiciones 10 y 11 son un 7, así que la mediana es 7. Moda = 7." },
  { q: "De 40 alumnos, 12 prefieren el baloncesto. Halla la frecuencia relativa, el porcentaje y los grados de su sector en un diagrama de sectores.", sol: "hᵢ = 12 / 40 = 0,3, es decir, el 30 %. Grados: 0,3 · 360° = 108°." },
  { q: "Calcula la varianza y la desviación típica de 3, 5, 7.", sol: "Media = 5. Diferencias: −2, 0, 2; cuadrados: 4, 0, 4, que suman 8. Varianza = 8 / 3 ≈ 2,67. σ = √2,67 ≈ 1,63." },
  { q: "Halla Q₁, la mediana, Q₃ y el rango intercuartílico de 1, 2, 3, 4, 5, 6, 7, 8.", sol: "Mediana = (4 + 5) / 2 = 4,5. Q₁ es la mediana de la mitad inferior (1, 2, 3, 4): 2,5. Q₃ es la mediana de la mitad superior (5, 6, 7, 8): 6,5. RIC = 6,5 − 2,5 = 4." },
  { q: "En el grupo A la media es 60 y σ = 6; en el grupo B la media es 20 y σ = 4. ¿Qué grupo es relativamente más disperso?", sol: "CV de A = 6 / 60 = 0,10 (10 %). CV de B = 4 / 20 = 0,20 (20 %). El grupo B es relativamente más disperso." },
  { q: "Los sueldos de una pequeña empresa son 1.000, 1.100, 1.200, 1.300 y 5.000 €. Calcula la media y la mediana. ¿Cuál describe mejor el sueldo típico?", sol: "Media = 9.600 / 5 = 1.920 €. Mediana = 1.200 €. Describe mejor la mediana, porque el sueldo de 5.000 € arrastra la media hacia arriba." },
];
T.quiz.push(
  { q: "La mediana de 2, 6, 8, 20 es…", o: ["7", "8", "9"], a: 0, e: "(6 + 8) / 2 = 7." },
  { q: "Un valor con fᵢ = 5 en un total de N = 25 tiene frecuencia relativa…", o: ["0,2", "5", "0,5"], a: 0, e: "5 / 25 = 0,2." },
  { q: "Si a todos los datos les sumas 3, la media…", o: ["no cambia", "aumenta 3", "se triplica"], a: 1, e: "Todos suben 3, así que su centro también." },
  { q: "Si a todos los datos les sumas 3, la desviación típica…", o: ["no cambia", "aumenta 3", "se triplica"], a: 0, e: "Las distancias entre los datos y la media no cambian." },
  { q: "La marca de clase del intervalo [20, 30) es…", o: ["25", "20", "10"], a: 0, e: "(20 + 30) / 2 = 25." },
);
T.tarjetas.push(
  ["Frecuencia acumulada", "La suma de las frecuencias de ese valor y de todos los anteriores."],
  ["Marca de clase", "El punto medio de un intervalo."],
  ["Coeficiente de variación", "σ / media. Sirve para comparar la dispersión de grupos con medias distintas."],
);
nuevos.sigma.video = { id: "oZRaDwnpXkY", titulo: "Varianza y desviación estándar | Introducción", canal: "Matemáticas profe Alex", vistas: 6065802, megusta: 0 };
nuevos.cuartiles.video = { id: "24Uz1mBksL4", titulo: "Diagrama de cajas y bigotes | Boxplot", canal: "Matemáticas profe Alex", vistas: 868247, megusta: 0 };
