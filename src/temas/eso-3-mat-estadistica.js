// Matemáticas 3º ESO · Estadística. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { mapa, tabla, tx, lienzo, pasos, cajas, formula, comparar, barras, sectores, resumen, rot, linea, C, RD, DECRET } = require("./_eso3L1");

const poblacion = cajas("Conceptos básicos de un estudio estadístico", [
  ["Población", ["todos los", "individuos"], "var(--pen)"], ["Muestra", ["parte que se", "estudia"], "var(--leaf)"],
  ["Individuo", ["cada elemento", "observado"], "var(--red)"], ["Tamaño N", ["número de", "individuos"], "var(--inf)"],
], "Estudio estadístico");

const variables = comparar("Tipos de variables estadísticas con ejemplos", [
  ["Cualitativa", ["deporte favorito", "color de ojos"], "var(--red)"],
  ["Discreta", ["nº de hermanos", "goles"], "var(--pen)"],
  ["Continua", ["altura", "tiempo"], "var(--leaf)"],
], "Variables");

const libros = barras("Diagrama de barras: número de libros leídos en verano por treinta alumnos", [["0", 4], ["1", 7], ["2", 9, "var(--red)"], ["3", 5], ["4", 3], ["5", 2]], { titulo: "Libros leídos (N = 30)", c: "var(--pen)" });

// Histograma de alturas agrupadas con polígono de frecuencias.
const alt = [3, 7, 12, 10, 6, 2];
const histo = (() => {
  const X = (v) => 26 + (v - 145) * 5.6, Y = (f) => 160 - f * 10;
  let g = `<path d="M18 160 H248" stroke="var(--muted)" stroke-width="1.6"/><path d="M26 160 V36" stroke="var(--muted)" stroke-width="1.2"/>`;
  alt.forEach((f, i) => { const a = 150 + 5 * i; g += `<rect x="${X(a)}" y="${Y(f)}" width="${5 * 5.6}" height="${f * 10}" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="1.6"/>`; });
  const pts = [[147.5, 0], ...alt.map((f, i) => [152.5 + 5 * i, f]), [182.5, 0]];
  g += `<polyline points="${pts.map(([x, f]) => `${X(x).toFixed(1)},${Y(f)}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.2"/>` + pts.map(([x, f]) => `<circle cx="${X(x).toFixed(1)}" cy="${Y(f)}" r="3" fill="var(--red)"/>`).join("");
  g += [150, 160, 170, 180].map((v) => tx(X(v), 174, v, { fs: 10.5, w: 500, c: "var(--muted)" })).join("") + [4, 8, 12].map((f) => tx(18, Y(f) + 4, f, { fs: 10, w: 500, c: "var(--muted)" })).join("");
  return lienzo("Histograma de las alturas de cuarenta alumnos agrupadas en intervalos de cinco centímetros, con su polígono de frecuencias", g + rot([[130, 22, "Alturas (cm), N = 40", "var(--muted)"], [214, 70, "polígono", "var(--red)"]], 11.5), 184);
})();

const transporte = sectores("Diagrama de sectores: cómo vienen al instituto treinta alumnos", [["Andando", 12], ["Bus", 8], ["Coche", 6], ["Bici", 4]], { titulo: "Transporte (N = 30)" });

const enganoso = (() => {
  const panel = (x0, desde, titulo, c) => {
    const B = 150, T = 50, esc = (v) => B - ((v - desde) / (52 - desde)) * (B - T);
    return `<path d="M${x0} ${B} H${x0 + 100}" stroke="var(--muted)" stroke-width="1.5"/><path d="M${x0} ${B} V${T - 8}" stroke="var(--muted)" stroke-width="1.2"/>` + [[51, "A", "var(--pen)"], [49, "B", "var(--red)"]].map(([v, n, cc], i) => `<rect x="${x0 + 16 + i * 44}" y="${esc(v).toFixed(1)}" width="32" height="${(B - esc(v)).toFixed(1)}" fill="${cc}" fill-opacity=".7"/>` + tx(x0 + 32 + i * 44, 164, n, { fs: 11 }) + tx(x0 + 32 + i * 44, esc(v) - 4, `${v} %`, { fs: 10.5, w: 600 })).join("") + tx(x0 - 3, B + 4, desde, { fs: 9.5, w: 500, a: "end", c: "var(--muted)" }) + tx(x0 + 50, 24, titulo, { fs: 11.5, c, max: 104 });
  };
  return lienzo("Gráfico engañoso: el mismo resultado de cincuenta y uno frente a cuarenta y nueve por ciento parece enorme si el eje empieza en cuarenta y ocho", panel(24, 48, "Eje en 48: engaña", "var(--red)") + panel(142, 0, "Eje en 0: honesto", "var(--leaf)"), 178);
})();

const formas = lienzo("Formas de un histograma: simétrica, asimétrica con cola a la derecha y bimodal", [[[2, 5, 9, 9, 5, 2], "simétrica", "var(--pen)"], [[9, 8, 5, 3, 2, 1], "asimétrica", "var(--red)"], [[3, 8, 3, 3, 8, 3], "bimodal", "var(--leaf)"]].map(([hs, t, c], k) => {
  const x0 = 12 + k * 82;
  return hs.map((h, i) => `<rect x="${x0 + i * 12}" y="${130 - h * 9}" width="12" height="${h * 9}" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="1.4"/>`).join("") + `<path d="M${x0 - 2} 130 H${x0 + 74}" stroke="var(--muted)" stroke-width="1.4"/>` + tx(x0 + 36, 150, t, { fs: 11.5, c });
}).join("") + tx(130, 22, "Forma de la distribución", { fs: 12, c: "var(--muted)" }), 164);

const media = formula("Fórmula de la media aritmética con frecuencias", "x̄ = Σ xᵢ · fᵢ / N", ["Libros: (0·4 + 1·7 + 2·9 + 3·5 + 4·3 + 5·2) / 30", "= 62 / 30 ≈ 2,07 libros por alumno", "Es el punto de equilibrio de los datos"]);

const mediana = pasos("Cómo se calcula la mediana", ["Ordenar los datos de menor a mayor", "Si N es impar: el dato central", "Si N es par: media de los dos centrales", "Con tabla: buscar N/2 en la Fᵢ", "Libros: posiciones 15 y 16 → Me = 2"], "Mediana");

const atipicos = barras("Sueldos de siete personas de una empresa: un valor atípico dispara la media pero no la mediana", [["A", 1200], ["B", 1250], ["C", 1300], ["D", 1300], ["E", 1400], ["F", 1500], ["Jefa", 9000, "var(--red)"]], { titulo: "Media 2.421 € · Mediana 1.300 €", c: "var(--leaf)" });

const caja = (() => {
  const X = (v) => 30 + v * 40, y1 = 62, y2 = 102, ym = 82;
  return lienzo("Diagrama de caja y bigotes del número de libros: mínimo cero, primer cuartil uno, mediana dos, tercer cuartil tres y máximo cinco", `<path d="M${X(0)} ${ym} H${X(1)} M${X(3)} ${ym} H${X(5)} M${X(0)} ${y1 + 8} V${y2 - 8} M${X(5)} ${y1 + 8} V${y2 - 8}" stroke="var(--ink)" stroke-width="2"/>` + `<rect x="${X(1)}" y="${y1}" width="${X(3) - X(1)}" height="${y2 - y1}" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2.2"/>` + linea(X(2), y1, X(2), y2, "var(--red)", { w: 3 }) + `<path d="M${X(0) - 6} 140 H${X(5) + 8}" stroke="var(--muted)" stroke-width="1.5"/>` + [0, 1, 2, 3, 4, 5].map((v) => `<path d="M${X(v)} 136 V144" stroke="var(--muted)" stroke-width="1.5"/>` + tx(X(v), 158, v, { fs: 11, w: 500, c: "var(--muted)" })).join("") + rot([[X(0), 52, "mín"], [X(1), 52, "Q₁", "var(--pen)"], [X(2), 52, "Me", "var(--red)"], [X(3), 52, "Q₃", "var(--pen)"], [X(5), 52, "máx"], [X(2), 124, "50 % central", "var(--pen)"], [130, 24, "Caja y bigotes", "var(--muted)"]], 11.5), 172);
})();

const cuartiles = (() => {
  const X = (i) => 22 + i * 18.4;
  const datos = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2];
  return lienzo("Cuartiles: dividen los datos ordenados en cuatro partes con el mismo número de datos", [0, 1, 2, 3].map((k) => `<rect x="${16 + k * 58}" y="56" width="54" height="40" rx="8" fill="${["var(--pen)", "var(--leaf)", "var(--sun)", "var(--red)"][k]}" fill-opacity=".22" stroke="${["var(--pen)", "var(--leaf)", "var(--sun)", "var(--red)"][k]}" stroke-width="2"/>` + tx(43 + k * 58, 81, "25 %", { fs: 12 })).join("") + [1, 2, 3].map((k) => linea(14 + k * 58, 46, 14 + k * 58, 106, "var(--ink)", { w: 2.2 }) + tx(14 + k * 58, 122, ["Q₁", "Q₂ = Me", "Q₃"][k - 1], { fs: 12, c: k === 2 ? "var(--red)" : "var(--pen)" })).join("") + rot([[130, 26, "Datos ordenados de menor a mayor", "var(--muted)"], [130, 150, "Rango intercuartílico = Q₃ − Q₁", "var(--ink)"]], 12) + (datos.length ? "" : X(0)), 164);
})();

const dispersion = formula("Fórmulas de la varianza y la desviación típica", "σ = √( Σ(xᵢ − x̄)² · fᵢ / N )", ["Datos 4, 6, 8: media 6", "desviaciones −2, 0, 2 → σ² = 8/3 ≈ 2,67", "σ ≈ 1,63"], "var(--leaf)");

const puntos = (() => {
  const X = (v) => 22 + v * 22;
  const fila = (vals, y, c) => { const cnt = {}; return vals.map((v) => { cnt[v] = (cnt[v] || 0) + 1; return `<circle cx="${X(v)}" cy="${y - (cnt[v] - 1) * 11}" r="5" fill="${c}"/>`; }).join(""); };
  return lienzo("Dos grupos con la misma media seis y distinta dispersión: el grupo B está mucho más disperso", fila([5, 5, 6, 6, 6, 7, 7], 70, "var(--pen)") + fila([2, 3, 5, 6, 8, 9, 9], 140, "var(--red)") + `<path d="M${X(0)} 78 H${X(10)} M${X(0)} 148 H${X(10)}" stroke="var(--muted)" stroke-width="1.4"/>` + linea(X(6), 30, X(6), 156, "var(--leaf)", { disc: true, w: 2 }) + [0, 2, 4, 6, 8, 10].map((v) => tx(X(v), 164, v, { fs: 10, w: 500, c: "var(--muted)" })).join("") + rot([[8, 40, "A: σ ≈ 0,76", "var(--pen)", "start"], [8, 104, "B: σ ≈ 2,6", "var(--red)", "start"], [X(6) + 4, 26, "x̄ = 6", "var(--leaf)", "start"]], 11.5), 174);
})();

const critica = pasos("Preguntas para leer críticamente una estadística en los medios", ["¿Quién ha hecho el estudio y por qué?", "¿Cómo y a cuántos se ha preguntado?", "¿La muestra representa a la población?", "¿El gráfico empieza en 0 y es honesto?", "¿Se dan media, mediana y dispersión?"], "Lectura crítica");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Estadística",
  minutos: 110,
  objetivos: [
    "Distinguir población, muestra, individuo y tipos de variables estadísticas",
    "Construir tablas de frecuencias, también con datos agrupados en intervalos",
    "Elegir, construir e interpretar el gráfico adecuado, detectando gráficos engañosos",
    "Calcular e interpretar parámetros de centralización, de posición y de dispersión",
    "Analizar críticamente informaciones estadísticas de los medios y de estudios propios",
  ],
  claves: ["población", "muestra", "frecuencia", "histograma", "media", "mediana", "cuartiles", "desviación típica"],
  pregunta: {
    texto: "Una encuesta en Instagram dice que el 80 % de los jóvenes prefiere un videojuego concreto. ¿Te lo crees?",
    respuesta: "Depende de <mark>quién ha respondido</mark>. Si solo votan los seguidores de la cuenta del videojuego, la muestra está sesgada. La estadística enseña a recoger datos bien, a resumirlos con tablas, gráficos y parámetros, y a desconfiar de las conclusiones que no se apoyan en una buena muestra.",
  },
  lectura: {
    titulo: "Florence Nightingale y el gráfico que salvó vidas",
    html: `<p>En 1854, durante la guerra de Crimea, la enfermera británica Florence Nightingale llegó a un hospital militar en Scutari, en la actual Turquía. Lo que encontró era terrible: soldados heridos amontonados, suciedad, ratas y falta de agua limpia. Pero Florence no solo cuidó a los enfermos de noche con su famosa lámpara; también apuntó cada día cuántos morían y de qué.</p><p>Al analizar sus datos descubrió algo que nadie quería ver: muchos más soldados morían por enfermedades evitables, como el cólera o el tifus, que por las heridas de las batallas. Para convencer a los políticos, que no leían tablas de números, inventó un gráfico circular en forma de rosa, con sectores de colores para cada causa de muerte en cada mes. El mensaje entraba por los ojos.</p><p>Gracias a su trabajo se mejoraron la higiene y la ventilación de los hospitales, y la mortalidad cayó drásticamente. En 1859 se convirtió en la primera mujer elegida miembro de la Real Sociedad de Estadística. Su historia muestra la fuerza de la estadística: recoger bien los datos, resumirlos y presentarlos con honestidad puede cambiar decisiones y salvar vidas.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Población, muestra e individuos</h3><p>La <b>estadística</b> es la parte de las matemáticas que recoge, organiza, resume y analiza datos para sacar conclusiones. En todo estudio estadístico hay que identificar:</p><ul><li><b>Población</b>: el conjunto de todos los elementos que se quieren estudiar (todos los alumnos de 3º ESO de España).</li><li><b>Individuo</b>: cada elemento de la población (cada alumno).</li><li><b>Muestra</b>: la parte de la población que realmente se estudia (500 alumnos elegidos).</li><li><b>Tamaño</b> N: el número de individuos de la muestra.</li></ul><p>Cuando se estudia toda la población se hace un <b>censo</b>; si es demasiado grande, cara o lenta, se usa una muestra. Para que las conclusiones sirvan, la muestra debe ser <b>representativa</b>: suficientemente grande y elegida al <b>azar</b>, de forma que todos los individuos tengan la misma oportunidad de salir.</p><p>Una muestra mal elegida está <b>sesgada</b>: preguntar en la puerta de un gimnasio cuánto deporte hace la gente dará resultados mucho más altos que la realidad.</p>`, svg: poblacion },
    { html: `<h3>1.2 Variables estadísticas</h3><p>Una <b>variable estadística</b> es la característica que se estudia en cada individuo. Pueden ser:</p><ul><li><b>Cualitativas</b>: sus valores no son números, sino cualidades o categorías: deporte favorito, color de ojos, medio de transporte. A sus valores se les llama <b>modalidades</b>.</li><li><b>Cuantitativas</b>: sus valores son números que se pueden medir o contar. A su vez se dividen en:<ul><li><b>Discretas</b>: solo toman valores aislados, normalmente enteros: número de hermanos, de goles, de mensajes al día.</li><li><b>Continuas</b>: pueden tomar cualquier valor de un intervalo: altura, peso, tiempo, temperatura.</li></ul></li></ul><p>El tipo de variable decide qué tablas, gráficos y parámetros tienen sentido. Con una variable cualitativa no se puede calcular la media (¿cuál es la media de «fútbol» y «baloncesto»?), pero sí la moda. Ojo: el código postal o el número de la camiseta son números, pero no miden nada; se tratan como cualitativas.</p>`, svg: variables },
    { html: `<h3>1.3 Tablas de frecuencias</h3><p>Para organizar los datos se usa una <b>tabla de frecuencias</b>. Encuestamos a 30 alumnos sobre cuántos libros leyeron en verano:</p>${tabla(["xᵢ", "fᵢ", "Fᵢ", "hᵢ", "%"], [["0", "4", "4", "0,13", "13 %"], ["1", "7", "11", "0,23", "23 %"], ["2", "9", "20", "0,30", "30 %"], ["3", "5", "25", "0,17", "17 %"], ["4", "3", "28", "0,10", "10 %"], ["5", "2", "30", "0,07", "7 %"]])}<ul><li><b>Frecuencia absoluta</b> fᵢ: cuántas veces aparece cada valor. Su suma es N.</li><li><b>Frecuencia acumulada</b> Fᵢ: suma de las frecuencias hasta ese valor. «20 alumnos leyeron 2 libros o menos».</li><li><b>Frecuencia relativa</b> hᵢ = fᵢ / N: proporción. Su suma es 1.</li><li><b>Porcentaje</b>: hᵢ · 100.</li></ul><p>La frecuencia relativa permite comparar grupos de distinto tamaño: 9 de 30 (30 %) no es lo mismo que 9 de 200 (4,5 %).</p>`, svg: libros },
    { html: `<h3>1.4 Datos agrupados en intervalos</h3><p>Cuando la variable es continua, o discreta con muchos valores distintos, se agrupan los datos en <b>intervalos</b> o clases. Medimos la altura de 40 alumnos:</p>${tabla(["Altura (cm)", "xᵢ", "fᵢ", "Fᵢ"], [["[150, 155)", "152,5", "3", "3"], ["[155, 160)", "157,5", "7", "10"], ["[160, 165)", "162,5", "12", "22"], ["[165, 170)", "167,5", "10", "32"], ["[170, 175)", "172,5", "6", "38"], ["[175, 180)", "177,5", "2", "40"]])}<p>El intervalo [155, 160) incluye el 155 pero no el 160, que va en el siguiente. Cada intervalo se representa por su <b>marca de clase</b> xᵢ, el punto medio: (155 + 160) / 2 = 157,5.</p><p>Para construir los intervalos: 1) calcula el <b>rango</b> (máximo − mínimo); 2) decide cuántos intervalos usar (entre 5 y 10 suele funcionar bien); 3) divide el rango entre ese número para obtener la amplitud y redondea a un valor cómodo. Al agrupar se pierde algo de información, pero los datos se entienden mucho mejor.</p>`, svg: histo },
    { html: `<h3>2.1 Gráficos estadísticos</h3><p>Un buen gráfico muestra de un vistazo lo que la tabla esconde. Cada tipo de variable tiene sus gráficos:</p><ul><li><b>Diagrama de barras</b>: para variables cualitativas y cuantitativas discretas. Barras separadas, altura proporcional a la frecuencia.</li><li><b>Diagrama de sectores</b>: para ver qué parte del total representa cada modalidad. El ángulo de cada sector es <mark>360° · hᵢ</mark>. Andando: 12/30 · 360° = 144°.</li><li><b>Histograma</b>: para datos agrupados en intervalos. Barras <b>juntas</b>, porque los intervalos son contiguos.</li><li><b>Polígono de frecuencias</b>: une los extremos superiores de las barras (o los puntos medios de los rectángulos del histograma).</li><li><b>Pictograma</b>: usa dibujos; muy visual, pero poco preciso.</li></ul><p>Todo gráfico necesita título, ejes con nombre y unidades, y una escala clara. El diagrama de sectores no funciona bien con muchas modalidades ni cuando los porcentajes son muy parecidos.</p>`, svg: transporte },
    { html: `<h3>2.2 Histograma y polígono de frecuencias</h3><p>En el <b>histograma</b>, cada intervalo es un rectángulo cuya base es el intervalo y cuya altura es la frecuencia (si todos los intervalos tienen la misma amplitud). Los rectángulos van pegados, porque entre 159,9 cm y 160 cm no hay ningún hueco.</p><p>El <b>polígono de frecuencias</b> se obtiene uniendo los puntos medios de los lados superiores de los rectángulos, es decir, los puntos (marca de clase, frecuencia). Se cierra bajando al eje en las marcas de los intervalos vacíos de los extremos.</p><p>La forma del histograma da mucha información:</p><ul><li><b>Simétrica</b> (en forma de campana): los datos se reparten igual a ambos lados del centro. Es típica de alturas y pesos.</li><li><b>Asimétrica</b>: una «cola» larga hacia un lado. Los sueldos tienen cola a la derecha: muchos sueldos medios y pocos muy altos.</li><li><b>Bimodal</b>: dos picos, que suelen indicar que se han mezclado dos grupos distintos (por ejemplo, alturas de niños y adultos).</li></ul>`, svg: formas },
    { html: `<h3>2.3 Gráficos engañosos</h3><p>Los gráficos pueden informar… o manipular. Algunos trucos frecuentes en publicidad, política y redes sociales:</p><ul><li><b>Eje vertical que no empieza en 0</b>: una diferencia de 51 % frente a 49 % parece enorme si el eje empieza en 48.</li><li><b>Escalas distintas</b> al comparar dos gráficos.</li><li><b>Pictogramas</b> en los que se duplica el alto y el ancho de un dibujo para indicar el doble: el área se multiplica por 4 y la impresión, también.</li><li><b>Gráficos en 3D</b> que deforman los sectores más cercanos al lector.</li><li><b>Elegir solo un tramo</b> del tiempo que interesa (por ejemplo, la semana en que una cifra subió).</li><li><b>Porcentajes sin el total</b>: «las quejas han subido un 100 %» puede significar que han pasado de 1 a 2.</li></ul><p>Ante un gráfico, mira siempre los ejes, la escala, las unidades y la fuente de los datos antes de sacar conclusiones.</p>`, svg: enganoso },
    { html: `<h3>3.1 La media aritmética</h3><p>Los <b>parámetros de centralización</b> resumen los datos en un solo valor «típico». El más usado es la <b>media aritmética</b>: la suma de todos los datos dividida entre el número de datos.</p><p class="formula"><span>x̄ = Σ xᵢ · fᵢ / N</span></p><p>Con la tabla de libros: x̄ = 62 / 30 ≈ 2,07 libros. Con datos agrupados se usa la marca de clase como representante de cada intervalo: en las alturas, x̄ = (152,5 · 3 + 157,5 · 7 + 162,5 · 12 + 167,5 · 10 + 172,5 · 6 + 177,5 · 2) / 40 = 6.575 / 40 ≈ 164,4 cm.</p><p>La media es el <b>punto de equilibrio</b> de los datos: si cada dato fuera un peso colocado sobre una regla, la regla se equilibraría en la media. Por eso la suma de las desviaciones (xᵢ − x̄) es siempre 0.</p><p>Inconvenientes: solo se puede calcular con variables cuantitativas y es muy <b>sensible a los valores extremos</b>. Una nota de 0 en un examen hunde la media de la evaluación.</p>`, svg: media, video: { id: "CrItHF8aJ3M", titulo: "MEDIA, MODA y MEDIANA 📊 Estadística", canal: "Susi Profe", vistas: 1492756, megusta: 0 } },
    { html: `<h3>3.2 La mediana y la moda</h3><p>La <b>mediana</b> (Me) es el valor que ocupa la <b>posición central</b> cuando los datos están ordenados: deja la mitad de los datos por debajo y la otra mitad por encima.</p><ul><li>Con un número <b>impar</b> de datos, es el central: en 3, 5, 6, 8, 12 la mediana es 6.</li><li>Con un número <b>par</b>, es la media de los dos centrales: en 3, 5, 6, 8, 12, 15 la mediana es (6 + 8) / 2 = 7.</li><li>Con una tabla, se busca el primer valor cuya frecuencia acumulada supera o alcanza N/2. En los libros, N/2 = 15 y F = 20 en el valor 2: Me = 2.</li></ul><p>La <b>moda</b> (Mo) es el valor con mayor frecuencia absoluta. En los libros, Mo = 2 (9 alumnos). Puede haber más de una moda (distribución bimodal) y es el único parámetro de centralización que tiene sentido con variables cualitativas: «el transporte más usado es andar». Con datos agrupados se habla de <b>intervalo modal</b>: [160, 165) en las alturas.</p>`, svg: mediana },
    { html: `<h3>3.3 ¿Media o mediana? Los valores atípicos</h3><p>Un <b>valor atípico</b> es un dato mucho mayor o mucho menor que el resto. Puede ser un error de medida o un caso real excepcional, y afecta mucho a la media pero casi nada a la mediana.</p><p>En una pequeña empresa, seis empleados cobran entre 1.200 y 1.500 € y la jefa cobra 9.000 €. La <b>media</b> es 16.950 / 7 ≈ 2.421 €, un sueldo que no cobra ninguno de los empleados. La <b>mediana</b>, 1.300 €, representa mucho mejor el sueldo típico.</p><p>Por eso, para variables con valores extremos o asimétricas (sueldos, precios de viviendas, seguidores en redes sociales) se prefiere la mediana. Cuando la distribución es simétrica, media y mediana coinciden aproximadamente y la media es más útil.</p><p>Comparar media y mediana da una pista de la forma de los datos: si la media es mucho mayor que la mediana, hay una cola hacia los valores altos. Un buen informe estadístico no da solo un número: indica cuál ha usado y por qué.</p>`, svg: atipicos },
    { html: `<h3>3.4 Cuartiles y percentiles</h3><p>Los <b>parámetros de posición</b> dividen los datos ordenados en partes iguales. Los <b>cuartiles</b> los dividen en cuatro partes con el mismo número de datos:</p><ul><li><b>Q₁</b> (primer cuartil): deja por debajo el 25 % de los datos.</li><li><b>Q₂</b>: deja el 50 %; es la <b>mediana</b>.</li><li><b>Q₃</b> (tercer cuartil): deja el 75 %.</li></ul><p>Para calcularlos con una tabla, se busca en la frecuencia acumulada el primer valor que alcanza o supera N/4 (para Q₁) o 3N/4 (para Q₃). En los libros: N/4 = 7,5, la Fᵢ llega a 11 en el valor 1, así que Q₁ = 1; 3N/4 = 22,5, la Fᵢ llega a 25 en el valor 3: Q₃ = 3.</p><p>Los <b>percentiles</b> dividen los datos en 100 partes. Los pediatras los usan en las tablas de crecimiento: un bebé en el percentil 80 de peso pesa más que el 80 % de los bebés de su edad. El <b>rango intercuartílico</b> Q₃ − Q₁ mide la amplitud del 50 % central de los datos.</p>`, svg: cuartiles },
    { html: `<h3>3.5 El diagrama de caja y bigotes</h3><p>El <b>diagrama de caja y bigotes</b> resume una distribución con cinco números: mínimo, Q₁, mediana, Q₃ y máximo.</p><ul><li>La <b>caja</b> va de Q₁ a Q₃ y contiene el 50 % central de los datos. Una línea marca la mediana.</li><li>Los <b>bigotes</b> van desde la caja hasta el mínimo y el máximo.</li></ul><p>Para los libros: mín = 0, Q₁ = 1, Me = 2, Q₃ = 3, máx = 5. El bigote derecho es más largo: hay unos pocos alumnos que leen mucho más que el resto.</p><p>Su gran ventaja es que permite <b>comparar grupos</b> de un vistazo, dibujando varias cajas en la misma escala: las notas de dos clases, los tiempos de dos equipos o las temperaturas de dos ciudades. Una caja estrecha indica datos concentrados; una caja ancha, datos dispersos.</p><p>En cursos superiores se marcan aparte los valores atípicos: los que se alejan de la caja más de 1,5 veces el rango intercuartílico.</p>`, svg: caja, video: { id: "Kj9g-BC2YSg", titulo: "Estadistica - Diagrama de cajas y bigotes SECUNDARIA (4ºESO) valor atipico cuartil", canal: "unicoos", vistas: 867892, megusta: 0 } },
    { html: `<h3>4.1 Parámetros de dispersión</h3><p>Dos grupos pueden tener la misma media y ser muy distintos. Los <b>parámetros de dispersión</b> miden cuánto se separan los datos de la media:</p><ul><li><b>Rango</b> o recorrido: máximo − mínimo. Es fácil, pero solo usa dos datos.</li><li><b>Desviación media</b>: media de las distancias |xᵢ − x̄|.</li><li><b>Varianza</b>: media de los cuadrados de las desviaciones, <mark>σ² = Σ(xᵢ − x̄)² · fᵢ / N</mark>. También se calcula como σ² = Σxᵢ² · fᵢ / N − x̄².</li><li><b>Desviación típica</b>: σ = √σ², con las mismas unidades que los datos.</li></ul><p>Ejemplo: los datos 2, 4, 4, 4, 5, 5, 7, 9 tienen media 40/8 = 5. Desviaciones al cuadrado: 9, 1, 1, 1, 0, 0, 4, 16, que suman 32. Varianza = 32/8 = 4 y desviación típica σ = 2.</p><p>En los libros: Σxᵢ² · fᵢ = 186, σ² = 186/30 − 2,07² ≈ 1,93 y σ ≈ 1,39 libros. La calculadora en modo estadístico y la hoja de cálculo hacen estas cuentas en segundos.</p>`, svg: dispersion, video: { id: "1myBo87lYyU", titulo: "Varianza, Desviación Estándar y Coeficiente de Variación | Datos agrupados en intervalos", canal: "Matemáticas profe Alex", vistas: 4939963, megusta: 0 } },
    { html: `<h3>4.2 Interpretar la dispersión y comparar grupos</h3><p>La desviación típica dice si la media es representativa. Si σ es pequeña, los datos están cerca de la media; si es grande, están muy repartidos.</p><p>Dos grupos A y B han sacado de media un 6. En A, las notas son 5, 5, 6, 6, 6, 7, 7 (σ ≈ 0,76); en B, 2, 3, 5, 6, 8, 9, 9 (σ ≈ 2,6). La media es la misma, pero en B hay alumnos con grandes dificultades y otros con notas excelentes. Un profesor actuaría de forma distinta en cada grupo.</p><p>Para comparar la dispersión de datos con medias muy distintas o con unidades distintas se usa el <b>coeficiente de variación</b>:</p><p class="formula"><span>CV = σ / x̄</span></p><p>Ejemplo: los pesos de unos elefantes tienen σ = 300 kg y media 5.000 kg (CV = 0,06); los de unos ratones, σ = 5 g y media 25 g (CV = 0,2). En términos relativos, los ratones varían más. En muchas distribuciones simétricas, aproximadamente dos tercios de los datos están entre x̄ − σ y x̄ + σ.</p>`, svg: puntos },
    { html: `<h3>4.3 Estadística crítica y con herramientas digitales</h3><p>Vivimos rodeados de datos: encuestas, gráficos en las noticias, estadísticas deportivas, «estudios» en redes sociales. Saber estadística es, sobre todo, saber hacerse buenas preguntas antes de creer una conclusión.</p><ul><li><b>Correlación no es causa</b>: que en verano suban a la vez las ventas de helados y los ahogamientos no significa que los helados ahoguen; ambos dependen del calor.</li><li><b>Encuestas voluntarias</b> online: responde quien quiere, y suelen hacerlo los más interesados. No son representativas.</li><li><b>Muestras pequeñas</b>: «el 80 % lo recomienda» puede ser 4 de 5 personas.</li></ul><p>Para hacer un estudio propio: plantea una pregunta clara, elige una muestra representativa, recoge los datos con un formulario, organízalos en una <b>hoja de cálculo</b> (funciones PROMEDIO, MEDIANA, MODA, CUARTIL y DESVEST), haz gráficos honestos y escribe conclusiones prudentes que se apoyen en los datos.</p>`, svg: critica },
  ],
  ejemplos: [
    { enunciado: "Calcula media, mediana, moda y rango de las notas 5, 7, 6, 9, 5, 8, 5, 10, 4, 6.", pasos: ["Suma 65; x̄ = 6,5.", "Ordenadas: 4, 5, 5, 5, 6, 6, 7, 8, 9, 10 → Me = (6 + 6)/2 = 6.", "Mo = 5; rango = 10 − 4 = 6."], resultado: "x̄ = 6,5; Me = 6; Mo = 5; rango 6." },
    { enunciado: "Calcula la varianza y la desviación típica de 2, 4, 4, 4, 5, 5, 7, 9.", pasos: ["x̄ = 5.", "Σ(xᵢ − x̄)² = 9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32.", "σ² = 32/8 = 4."], resultado: "σ² = 4; σ = 2." },
    { enunciado: "En una clase de 25, 10 vienen en bus. ¿Qué ángulo tiene su sector?", pasos: ["h = 10/25 = 0,4.", "0,4 · 360°."], resultado: "144°." },
    { enunciado: "Halla la media de las alturas agrupadas del apartado 1.4.", pasos: ["Σ xᵢ·fᵢ = 457,5 + 1.102,5 + 1.950 + 1.675 + 1.035 + 355 = 6.575.", "6.575 / 40."], resultado: "x̄ ≈ 164,4 cm." },
    { enunciado: "Halla Q₁, Me y Q₃ de 3, 4, 4, 5, 6, 7, 8, 8, 9, 10, 12, 15.", pasos: ["N = 12; N/4 = 3 → entre el 3.º y el 4.º: Q₁ = (4 + 5)/2 = 4,5.", "Me = (7 + 8)/2 = 7,5.", "3N/4 = 9 → entre el 9.º y el 10.º: Q₃ = 9,5."], resultado: "Q₁ = 4,5; Me = 7,5; Q₃ = 9,5." },
    { enunciado: "Grupo A: x̄ = 50, σ = 5. Grupo B: x̄ = 20, σ = 4. ¿Cuál es relativamente más disperso?", pasos: ["CV A = 5/50 = 0,1.", "CV B = 4/20 = 0,2."], resultado: "B, porque su coeficiente de variación es el doble." },
  ],
  errores: [
    "Calcular la mediana sin ordenar antes los datos.",
    "Olvidar multiplicar por la frecuencia al calcular la media con tabla.",
    "Dejar huecos entre las barras de un histograma o pegarlas en un diagrama de barras.",
    "Usar la media con datos cualitativos o con valores atípicos sin advertirlo.",
    "Interpretar un gráfico sin mirar dónde empieza el eje.",
    "Confundir varianza y desviación típica (la segunda es la raíz de la primera).",
  ],
  ejercicios: [
    { nivel: "básico", q: "Indica población, muestra y variable: «Se pregunta a 200 vecinos de un barrio cuántas horas ven la televisión».", sol: "Población: vecinos del barrio. Muestra: los 200. Variable: horas de televisión (cuantitativa continua)." },
    { nivel: "básico", q: "Clasifica: color favorito, número de mascotas, tiempo en llegar al instituto, talla de zapato, marca de móvil.", sol: "Cualitativa; discreta; continua; discreta; cualitativa." },
    { nivel: "básico", q: "Haz la tabla de frecuencias (fᵢ, Fᵢ, hᵢ) de: 1, 2, 2, 3, 1, 0, 2, 3, 2, 1, 4, 2.", sol: "0:1; 1:3; 2:5; 3:2; 4:1 (N = 12). Fᵢ: 1, 4, 9, 11, 12. hᵢ: 0,08; 0,25; 0,42; 0,17; 0,08." },
    { nivel: "básico", q: "Calcula media, mediana y moda de los datos del ejercicio anterior.", sol: "Σ = 23; x̄ = 23/12 ≈ 1,92. Me (6.º y 7.º) = 2. Mo = 2." },
    { nivel: "básico", q: "Calcula media, mediana y moda de 12, 15, 11, 15, 18, 20, 15.", sol: "x̄ = 106/7 ≈ 15,1; ordenados 11, 12, 15, 15, 15, 18, 20 → Me = 15; Mo = 15." },
    { nivel: "básico", q: "Calcula el rango de 34, 28, 41, 37, 25, 30.", sol: "41 − 25 = 16." },
    { nivel: "básico", q: "En una encuesta a 40 personas, 18 prefieren la playa, 12 la montaña y 10 la ciudad. Calcula los ángulos de un diagrama de sectores.", sol: "162°, 108° y 90°." },
    { nivel: "básico", q: "¿Qué gráfico usarías para: deporte favorito, número de hermanos, peso de los alumnos?", sol: "Barras o sectores; barras; histograma." },
    { nivel: "básico", q: "Halla la marca de clase de [20, 30) y de [1,5; 2).", sol: "25 y 1,75." },
    { nivel: "básico", q: "¿Es representativa una encuesta sobre hábitos de lectura hecha en la puerta de una biblioteca? ¿Por qué?", sol: "No: la muestra está sesgada hacia personas que leen más que la media." },
    { nivel: "básico", q: "Cinco amigos tienen 14, 15, 15, 16 y 40 años (uno es un monitor). ¿Qué representa mejor la edad del grupo, la media o la mediana?", sol: "Media 20, mediana 15. La mediana, porque el 40 es atípico." },
    { nivel: "básico", q: "Las notas de Laura son 6, 7 y 5. ¿Qué nota necesita en el cuarto examen para tener media 6,5?", sol: "26 − 18 = 8." },
    { nivel: "medio", q: "Calcula la varianza y la desviación típica de 3, 5, 7, 9, 11.", sol: "x̄ = 7; Σ(desv²) = 16 + 4 + 0 + 4 + 16 = 40; σ² = 8; σ ≈ 2,83." },
    { nivel: "medio", q: "Tabla: xᵢ = 1, 2, 3, 4; fᵢ = 5, 8, 4, 3. Calcula x̄, Me, Mo y σ.", sol: "N = 20; Σxf = 5 + 16 + 12 + 12 = 45 → x̄ = 2,25. Fᵢ: 5, 13 → Me = 2. Mo = 2. Σx²f = 5 + 32 + 36 + 48 = 121; σ² = 6,05 − 5,0625 ≈ 0,99; σ ≈ 0,99." },
    { nivel: "medio", q: "Halla los cuartiles y dibuja el diagrama de caja de 2, 3, 5, 6, 6, 7, 8, 9, 10, 12, 13.", sol: "N = 11. Me = 6.º = 7. Q₁: N/4 = 2,75 → 3.º = 5. Q₃: 8,25 → 9.º = 10. Mín 2, máx 13." },
    { nivel: "medio", q: "Agrupa en intervalos de amplitud 10 desde 40 y halla la media: 45, 52, 58, 61, 63, 47, 55, 68, 72, 59, 64, 51.", sol: "[40,50): 2; [50,60): 5; [60,70): 4; [70,80): 1. x̄ ≈ (90 + 275 + 260 + 75)/12 = 700/12 ≈ 58,3 (con marcas)." },
    { nivel: "medio", q: "Con los datos agrupados de alturas (1.4), ¿cuántos alumnos miden menos de 165 cm? ¿Qué porcentaje mide 170 cm o más?", sol: "22 alumnos. 8/40 = 20 %." },
    { nivel: "medio", q: "La media de 8 datos es 12. Si se añade un dato 21, ¿cuál es la nueva media?", sol: "(96 + 21)/9 = 13." },
    { nivel: "medio", q: "Un gráfico de barras muestra ventas de 102 y 108 unidades con el eje desde 100. Explica qué impresión da y por qué engaña.", sol: "La segunda barra parece 4 veces mayor (8 frente a 2 sobre el eje), cuando solo es un 6 % más." },
    { nivel: "medio", q: "Dos jugadores de baloncesto anotan de media 15 puntos. A: σ = 2; B: σ = 8. ¿A quién ficharías si buscas regularidad?", sol: "A: su anotación varía mucho menos." },
    { nivel: "medio", q: "Halla el coeficiente de variación de dos grupos: A (x̄ = 160 cm, σ = 8) y B (x̄ = 55 kg, σ = 6). ¿Cuál es más disperso?", sol: "CV A = 0,05; CV B ≈ 0,11. B." },
    { nivel: "medio", q: "Construye un diagrama de barras y uno de sectores con: 12 fútbol, 9 baloncesto, 6 natación, 3 tenis.", sol: "N = 30. Ángulos 144°, 108°, 72°, 36°." },
    { nivel: "medio", q: "Explica por qué la media de 5, 5, 5 y la de 0, 5, 10 es la misma y qué parámetro las distingue.", sol: "Ambas valen 5; la desviación típica (0 frente a ≈ 4,08) o el rango (0 frente a 10)." },
    { nivel: "medio", q: "En un examen, x̄ = 6 y σ = 1,5. Aproximadamente, ¿entre qué notas está la mayoría (dos tercios) de la clase?", sol: "Entre 4,5 y 7,5." },
    { nivel: "avanzado", q: "La media de 5 números es 8, la mediana es 9 y la moda es 10. Encuentra cinco números que cumplan las tres condiciones.", sol: "Por ejemplo 4, 7, 9, 10, 10 (suma 40)." },
    { nivel: "avanzado", q: "Si a todos los datos se les suma 3, ¿qué pasa con la media y con la desviación típica? ¿Y si se multiplican por 2?", sol: "Sumar 3: media + 3, σ igual. Multiplicar por 2: media × 2 y σ × 2." },
    { nivel: "avanzado", q: "Calcula la desviación típica de las alturas agrupadas de 1.4 usando las marcas de clase (x̄ = 164,375).", sol: "Σx²f ≈ 69.768,75 + 173.643,75 + 316.875 + 280.562,5 + 178.537,5 + 63.012,5 = 1.082.400; /40 = 27.060; − 164,375² = 27.019,14 → σ² ≈ 40,86; σ ≈ 6,4 cm." },
    { nivel: "avanzado", q: "Una empresa dice: «El sueldo medio es 2.400 €». Los sindicatos: «La mitad cobra menos de 1.350 €». ¿Pueden tener razón los dos? Explica.", sol: "Sí: la empresa da la media y los sindicatos la mediana. La diferencia indica que unos pocos sueldos muy altos suben la media." },
    { nivel: "avanzado", q: "Compara con diagramas de caja dos clases: A (mín 3, Q₁ 5, Me 6, Q₃ 7, máx 9) y B (mín 1, Q₁ 4, Me 6,5, Q₃ 8,5, máx 10). ¿Qué conclusiones sacas?", sol: "Medianas parecidas (B algo mayor), pero B es mucho más dispersa: rango intercuartílico 4,5 frente a 2." },
    { nivel: "avanzado", q: "Diseña una encuesta para saber cuántas horas duermen los alumnos de tu centro: población, muestra, cómo elegirla y qué parámetros calcularías.", sol: "Respuesta abierta: población, todos los alumnos; muestra aleatoria estratificada por cursos; variable continua; histograma, media, mediana, cuartiles y σ." },
    { nivel: "avanzado", q: "La media de las notas de 20 chicos es 6,2 y la de 30 chicas es 6,8. ¿Cuál es la media de toda la clase?", sol: "(124 + 204)/50 = 6,56." },
    { nivel: "avanzado", q: "Un estudio dice que los alumnos que desayunan sacan mejores notas. ¿Prueba que desayunar mejora las notas? Propón otra explicación.", sol: "No prueba causa: puede haber una tercera variable (hábitos familiares, horas de sueño) que influya en ambas." },
    { nivel: "avanzado", q: "Recoge los minutos que tardan 15 compañeros en llegar al instituto, organiza los datos en una hoja de cálculo y calcula media, mediana, cuartiles y σ. Escribe dos conclusiones.", sol: "Respuesta abierta: se valora la tabla, el uso de PROMEDIO, MEDIANA, CUARTIL, DESVEST y la interpretación." },
    { nivel: "avanzado", q: "Halla la mediana de los datos agrupados de alturas interpolando dentro del intervalo [160, 165).", sol: "N/2 = 20; antes del intervalo F = 10; faltan 10 de 12. Me ≈ 160 + 5 · 10/12 ≈ 164,2 cm." },
  ],
  quiz: [
    { q: "La parte de la población que se estudia es…", o: ["el individuo", "la muestra", "el censo", "la variable"], a: 1, e: "Subconjunto." },
    { q: "La altura es una variable…", o: ["cualitativa", "discreta", "continua", "nominal"], a: 2, e: "Cualquier valor de un intervalo." },
    { q: "El número de hermanos es una variable…", o: ["cualitativa", "discreta", "continua", "atípica"], a: 1, e: "Valores enteros aislados." },
    { q: "La suma de las frecuencias relativas es…", o: ["N", "100", "1", "depende"], a: 2, e: "Proporciones." },
    { q: "La frecuencia acumulada del último valor es…", o: ["1", "N", "0", "la moda"], a: 1, e: "Todos los datos." },
    { q: "La marca de clase de [10, 20) es…", o: ["10", "15", "20", "5"], a: 1, e: "Punto medio." },
    { q: "Para datos agrupados en intervalos se usa…", o: ["diagrama de barras", "histograma", "pictograma", "sectores"], a: 1, e: "Barras juntas." },
    { q: "Ángulo de un sector con frecuencia relativa 0,25:", o: ["25°", "90°", "45°", "120°"], a: 1, e: "0,25 · 360." },
    { q: "Media de 2, 4, 6, 8:", o: ["4", "5", "6", "20"], a: 1, e: "20/4." },
    { q: "Mediana de 3, 9, 1, 7, 5:", o: ["7", "5", "9", "3"], a: 1, e: "Ordenados: 1, 3, 5, 7, 9." },
    { q: "Mediana de 2, 4, 6, 10:", o: ["5", "6", "4", "5,5"], a: 0, e: "(4 + 6)/2." },
    { q: "Moda de 3, 5, 5, 6, 7, 7, 7:", o: ["5", "7", "6", "5 y 7"], a: 1, e: "Más frecuente." },
    { q: "El parámetro más afectado por un valor atípico es…", o: ["la mediana", "la moda", "la media", "Q₁"], a: 2, e: "Usa todos los valores." },
    { q: "Con variables cualitativas solo tiene sentido…", o: ["la media", "la mediana", "la moda", "la varianza"], a: 2, e: "No hay orden ni números." },
    { q: "Q₂ coincide con…", o: ["la media", "la mediana", "la moda", "el rango"], a: 1, e: "50 %." },
    { q: "La caja de un diagrama de caja contiene…", o: ["todos los datos", "el 50 % central", "el 25 %", "los atípicos"], a: 1, e: "De Q₁ a Q₃." },
    { q: "La desviación típica es…", o: ["el cuadrado de la varianza", "la raíz de la varianza", "la media de las desviaciones", "el rango / 2"], a: 1, e: "σ = √σ²." },
    { q: "Si σ = 0, los datos…", o: ["son todos iguales", "son 0", "tienen media 0", "son atípicos"], a: 0, e: "Sin dispersión." },
    { q: "CV = σ / x̄ sirve para…", o: ["calcular la media", "comparar dispersiones relativas", "hallar la moda", "ordenar"], a: 1, e: "Sin unidades." },
    { q: "Un gráfico con el eje desde 95 tiende a…", o: ["reducir diferencias", "exagerar diferencias", "ser más honesto", "no cambiar nada"], a: 1, e: "Engañoso." },
  ],
  examen: [
    { q: "Encuesta a 300 de 5.000 alumnos: la muestra tiene tamaño…", o: ["5.000", "300", "4.700", "1"], a: 1, e: "N = 300." },
    { q: "fᵢ = 6 con N = 24: hᵢ =", o: ["0,6", "0,25", "4", "0,4"], a: 1, e: "6/24." },
    { q: "Media de la tabla x: 1, 2, 3 con f: 2, 3, 5:", o: ["2", "2,3", "2,5", "3"], a: 1, e: "23/10." },
    { q: "Mediana de 4, 8, 15, 16, 23, 42:", o: ["15", "15,5", "18", "16"], a: 1, e: "(15 + 16)/2." },
    { q: "Rango de 12, 7, 25, 18:", o: ["13", "18", "25", "7"], a: 1, e: "25 − 7." },
    { q: "Varianza de 1, 3, 5:", o: ["4", "8/3", "2", "√8"], a: 1, e: "(4 + 0 + 4)/3." },
    { q: "En 3, 4, 4, 5, 100, el mejor resumen es…", o: ["la media", "la mediana", "el rango", "la varianza"], a: 1, e: "Atípico 100." },
    { q: "Q₃ deja por debajo el…", o: ["25 %", "50 %", "75 %", "100 %"], a: 2, e: "Tres cuartos." },
  ],
  feynman: ["Qué diferencia hay entre población y muestra y por qué la muestra debe ser al azar", "Cuándo usar la media y cuándo la mediana", "Qué mide la desviación típica y por qué dos grupos con la misma media pueden ser distintos", "Cómo detectar un gráfico engañoso"],
  figura: {
    titulo: "Estadística en una imagen",
    svg: resumen("Resumen de la estadística descriptiva", [
      ["Datos", "población · muestra · variables cualitativas y cuantitativas", "var(--pen)"],
      ["Tablas y gráficos", "fᵢ, Fᵢ, hᵢ · barras · sectores · histograma · caja", "var(--leaf)"],
      ["Centralización", "media Σxf/N · mediana (centro) · moda (más frecuente)", "var(--red)"],
      ["Posición y dispersión", "cuartiles · rango · varianza · σ · CV = σ/x̄", "var(--inf)"],
    ], 220),
  },
  video: { id: "rU9C3Fs16hc", titulo: "Aprende estadística en 3 minutos | Tabla de frecuencias", canal: "Academia Internet", vistas: 1288795, megusta: 0 },
  mapa: mapa("ESTADÍSTICA", "var(--leaf)", [
    ["Recoger", "muestra · variables", "var(--pen)"],
    ["Organizar", "tablas · gráficos", "var(--leaf)"],
    ["Resumir", "media · mediana · moda", "var(--red)"],
    ["Dispersión", "cuartiles · σ", "var(--inf)"],
  ], 260),
  glosario: [
    ["Población", "Conjunto de todos los elementos que se quieren estudiar."],
    ["Muestra", "Parte de la población que se estudia."],
    ["Variable cualitativa", "Toma valores no numéricos (modalidades)."],
    ["Variable discreta", "Cuantitativa con valores aislados."],
    ["Variable continua", "Cuantitativa que puede tomar cualquier valor de un intervalo."],
    ["Frecuencia absoluta", "Número de veces que aparece un valor."],
    ["Frecuencia relativa", "Frecuencia absoluta dividida entre N."],
    ["Frecuencia acumulada", "Suma de frecuencias hasta un valor."],
    ["Marca de clase", "Punto medio de un intervalo."],
    ["Histograma", "Gráfico de rectángulos contiguos para datos agrupados."],
    ["Media", "Suma de los datos entre el número de datos."],
    ["Mediana", "Valor central de los datos ordenados."],
    ["Moda", "Valor más frecuente."],
    ["Cuartiles", "Valores que dividen los datos ordenados en cuatro partes iguales."],
    ["Desviación típica", "Raíz de la media de los cuadrados de las desviaciones."],
    ["Valor atípico", "Dato muy alejado del resto."],
  ],
  situacion: {
    titulo: "¿Cuánto dormimos?",
    reto: "Los expertos recomiendan a los adolescentes dormir entre 8 y 10 horas. Vuestro equipo hará un estudio estadístico en el centro para averiguar si se cumple y presentará los resultados a las familias.",
    pasos: [
      "Definid la población, la variable y cómo elegiréis una muestra representativa.",
      "Diseñad un formulario breve y recoged al menos 50 respuestas.",
      "Organizad los datos en una hoja de cálculo con tabla de frecuencias agrupada.",
      "Construid un histograma y un diagrama de caja, y calculad media, mediana, cuartiles y σ.",
      "Redactad conclusiones prudentes y recomendaciones, señalando las limitaciones del estudio.",
    ],
    producto: "Un informe o póster con la tabla, los gráficos, los parámetros y las conclusiones.",
    evaluacion: ["Diseña una muestra representativa y justifica la elección.", "Construye tablas y gráficos correctos y honestos.", "Calcula e interpreta los parámetros adecuados.", "Extrae conclusiones críticas y reconoce limitaciones."],
  },
  tarjetas: [
    ["Muestra", "Parte representativa de la población."], ["hᵢ", "fᵢ / N"],
    ["Marca de clase", "Punto medio del intervalo."], ["Sector", "360° · hᵢ"],
    ["Media", "Σ xᵢ fᵢ / N"], ["Mediana", "Valor central ordenado."],
    ["Moda", "Valor más frecuente."], ["Q₁ y Q₃", "25 % y 75 % de los datos."],
    ["Caja y bigotes", "mín, Q₁, Me, Q₃, máx"], ["Varianza", "Σ(xᵢ − x̄)² fᵢ / N"],
    ["σ", "√varianza"], ["CV", "σ / x̄"],
  ],
  familias: ["Buscad juntos un gráfico en las noticias y comprobad si es honesto.", "Apuntad durante una semana las horas de sueño de la familia y calculad la media.", "Comparad las estadísticas de vuestro equipo o jugador favorito.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido estocástico: diseño de estudios estadísticos, población y muestra, variables, tablas de frecuencias con datos agrupados, gráficos, parámetros de centralización, posición y dispersión, diagrama de caja y análisis crítico de la información (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Estudio estadístico de la clase con hoja de cálculo.", "Colección de gráficos engañosos de prensa y redes para analizar.", "Comparar grupos con diagramas de caja en la misma escala.", "Situación de aprendizaje sobre horas de sueño."],
  },
  fuentes: [RD, DECRET, { t: "Instituto Nacional de Estadística: INEbase y recursos educativos", url: "https://www.ine.es/explica/explica.htm" }],
  revisado: "2026-11-13",
};
