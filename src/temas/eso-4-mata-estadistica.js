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
