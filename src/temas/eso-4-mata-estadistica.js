// Matemáticas A 4º ESO · Estadística. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, barras, sectores, comparar, recta } = require("./_eso4L2-mata");

const poblacion = lienzo("Población y muestra: de toda la población se elige una muestra representativa para estudiarla", `<circle cx="80" cy="95" r="62" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>` + Array.from({ length: 38 }, (_, i) => { const a = i * 2.4, rr = 8 + (i * 37) % 50; return `<circle cx="${(80 + rr * Math.cos(a)).toFixed(1)}" cy="${(95 + rr * Math.sin(a)).toFixed(1)}" r="3" fill="${i % 4 === 0 ? "var(--red)" : "var(--muted)"}"/>`; }).join("") + `<circle cx="200" cy="95" r="34" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>` + Array.from({ length: 10 }, (_, i) => `<circle cx="${(200 + (6 + (i * 13) % 22) * Math.cos(i * 2.1)).toFixed(1)}" cy="${(95 + (6 + (i * 13) % 22) * Math.sin(i * 2.1)).toFixed(1)}" r="3" fill="var(--red)"/>`).join("") + tx(150, 88, "→", { fs: 16 }) + tx(80, 172, "población", { fs: 12, c: "var(--pen)" }) + tx(200, 150, "muestra", { fs: 12, c: "var(--red)" }) + tx(130, 22, "Elegir al azar y representativa", { fs: 12, c: "var(--muted)" }), 185);

const variables = cajas("Tipos de variables estadísticas: cualitativas, cuantitativas discretas y cuantitativas continuas", [
  ["Cualitativa", ["color, deporte", "no son números"], "var(--pen)"], ["Discreta", ["nº de hermanos", "valores aislados"], "var(--red)"],
  ["Continua", ["altura, tiempo", "cualquier valor"], "var(--leaf)"], ["Muestreo", ["aleatorio simple", "estratificado"], "var(--inf)"],
], "Variables y muestras");

const frecuencias = barras("Diagrama de barras de las frecuencias absolutas del número de hermanos de 30 estudiantes", [["0", 6], ["1", 13], ["2", 8], ["3", 2], ["4", 1]], { titulo: "Nº de hermanos (n = 30)", c: "var(--pen)" });

const histograma = barras("Histograma de las alturas de 40 estudiantes agrupadas en intervalos de 10 centímetros", [["[150,160)", 6], ["[160,170)", 14], ["[170,180)", 15], ["[180,190)", 5]], { titulo: "Alturas en cm (n = 40)", c: "var(--leaf)" });

const sect = sectores("Diagrama de sectores del medio de transporte para ir al instituto", [["A pie", 45], ["Bus", 25], ["Coche", 20], ["Bici", 10]], { titulo: "¿Cómo vienes al instituto? (%)", fmt: (v) => v + " %" });

const media = formula("Fórmula de la media aritmética para datos con frecuencias", "x̄ = Σ xᵢ · fᵢ / N", ["datos agrupados: xᵢ = marca de clase", "sensible a valores extremos", "es el «punto de equilibrio»"], "var(--pen)");

const centrales = recta("Media, mediana y moda en una distribución asimétrica de salarios: la media se desplaza hacia los valores altos", { r: [0, 6], marcas: [0, 1, 2, 3, 4, 5, 6], puntos: [{ x: 1.4, t: "moda", c: "var(--leaf)" }, { x: 2, t: "mediana", c: "var(--pen)", abajo: true }, { x: 3, t: "media", c: "var(--red)" }], titulo: "Salarios (miles de €/mes)", pie: "unos pocos salarios altos «tiran» de la media" });

const caja = lienzo("Diagrama de caja y bigotes con mínimo 2, primer cuartil 5, mediana 7, tercer cuartil 8 y máximo 10", `<path d="M20 140 H240" stroke="var(--muted)" stroke-width="1.5"/>` + [0, 2, 4, 6, 8, 10].map((v) => { const x = 20 + v * 22; return `<path d="M${x} 136 V144" stroke="var(--muted)" stroke-width="1.5"/>` + tx(x, 158, v, { fs: 10, c: "var(--muted)", w: 400 }); }).join("") + `<path d="M64 85 H130 M196 85 H240" stroke="var(--ink)" stroke-width="2"/><path d="M64 70 V100 M240 70 V100" stroke="var(--ink)" stroke-width="2"/><rect x="130" y="60" width="66" height="50" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><path d="M174 60 V110" stroke="var(--red)" stroke-width="3"/>` + tx(64, 56, "mín", { fs: 10.5, c: "var(--muted)" }) + tx(130, 50, "Q₁", { fs: 11, c: "var(--pen)" }) + tx(174, 50, "Me", { fs: 11, c: "var(--red)" }) + tx(200, 50, "Q₃", { fs: 11, c: "var(--pen)" }) + tx(240, 56, "máx", { fs: 10.5, c: "var(--muted)" }) + tx(130, 24, "Caja: el 50 % central de los datos", { fs: 12, c: "var(--ink)" }) + tx(163, 128, "RI = Q₃ − Q₁ = 3", { fs: 10.5, c: "var(--pen)" }) + tx(130, 176, "cada parte contiene el 25 % de los datos", { fs: 10.5, c: "var(--muted)", w: 400 }), 185);

const dispersion = lienzo("Dos grupos con la misma media 6 y distinta dispersión: en uno las notas están agrupadas y en el otro muy separadas", [["A", 60, [5, 5.5, 6, 6, 6.5, 7], "var(--pen)"], ["B", 120, [2, 3.5, 5, 7, 8.5, 10], "var(--red)"]].map(([n, y, d, c]) => `<path d="M30 ${y} H240" stroke="var(--muted)" stroke-width="1.2"/>` + d.map((v, i) => `<circle cx="${(30 + v * 21).toFixed(1)}" cy="${y - 8 - (d.slice(0, i).filter((w) => w === v).length) * 9}" r="5" fill="${c}"/>`).join("") + tx(16, y + 4, n, { fs: 13, c })).join("") + `<path d="M156 30 V140" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="5 4"/>` + tx(156, 160, "x̄ = 6 en los dos", { fs: 11.5, c: "var(--leaf)" }) + tx(210, 40, "σ ≈ 0,6", { fs: 11, c: "var(--pen)" }) + tx(214, 100, "σ ≈ 2,8", { fs: 11, c: "var(--red)" }), 180);

const desviacion = formula("Fórmulas de la varianza y la desviación típica", "σ = √( Σ (xᵢ − x̄)² · fᵢ / N )", ["varianza σ² = media de (x − x̄)²", "atajo: σ² = Σ xᵢ² fᵢ / N − x̄²", "CV = σ / x̄ para comparar"], "var(--red)");

const normal = ejes("Distribución en forma de campana: aproximadamente el 68 % de los datos está a menos de una desviación típica de la media", { x: [-3.2, 3.2], y: [0, 0.48], paso: 1, pasoY: 0.5, marcasX: [], marcasY: [], ex: "", ey: "", curvas: [{ f: (x) => Math.exp(-x * x / 2) / 2.5066, c: "var(--pen)" }], zonas: [{ de: -1, a: 1, c: "var(--leaf)" }], textos: [[0, 0.17, "68 %", "var(--ink)"], [-1, -0.035, "x̄ − σ", "var(--muted)"], [1, -0.035, "x̄ + σ", "var(--muted)"], [2.2, 0.3, "≈ 95 % entre", "var(--muted)"], [2.2, 0.25, "x̄ ± 2σ", "var(--muted)"]] });

const nube = ejes("Nube de puntos de horas de estudio y nota: correlación positiva fuerte", { x: [0, 10], y: [0, 10], paso: 2, pasoY: 2, marcasX: [2, 4, 6, 8], marcasY: [2, 4, 6, 8], ex: "horas", ey: "nota", puntos: [[1, 2.5, "", "var(--pen)"], [2, 3.5, "", "var(--pen)"], [2.5, 3, "", "var(--pen)"], [3, 4.5, "", "var(--pen)"], [4, 5, "", "var(--pen)"], [4.5, 6, "", "var(--pen)"], [5, 5.5, "", "var(--pen)"], [6, 6.5, "", "var(--pen)"], [6.5, 7.5, "", "var(--pen)"], [7, 7, "", "var(--pen)"], [8, 8.5, "", "var(--pen)"], [9, 8.8, "", "var(--pen)"]], curvas: [{ f: (x) => 0.75 * x + 1.9, c: "var(--red)", disc: true, w: 1.8, de: 0.5, a: 10 }], textos: [[7.6, 3, "r ≈ 0,97", "var(--red)"]] });

const correlaciones = comparar("Tipos de correlación: positiva, negativa y nula", [
  ["Positiva", ["r cerca de 1", "↗ juntos", "estudio y nota"], "var(--leaf)"],
  ["Negativa", ["r cerca de −1", "↘ uno sube", "edad coche y precio"], "var(--red)"],
  ["Nula", ["r cerca de 0", "sin relación", "talla y nota"], "var(--muted)"],
], "Correlación");

const enganos = barras("Gráfico engañoso: el eje vertical empieza en 48 y hace parecer enorme una diferencia de solo 2 puntos", [["Partido A", 50, "var(--red)"], ["Partido B", 48, "var(--pen)"]], { titulo: "Eje desde 0: diferencia real pequeña", fmt: (v) => v + " %" });

const proceso = pasos("Fases de un estudio estadístico", ["Plantear la pregunta y la población", "Diseñar la muestra y la encuesta", "Recoger y organizar los datos", "Calcular parámetros y graficar", "Interpretar y comunicar con honestidad"], "Estudio estadístico");

const agrupados = tabla(["Altura (cm)", "xᵢ", "fᵢ", "Fᵢ", "xᵢ·fᵢ"], [["[150, 160)", "155", "6", "6", "930"], ["[160, 170)", "165", "14", "20", "2.310"], ["[170, 180)", "175", "15", "35", "2.625"], ["[180, 190)", "185", "5", "40", "925"], ["Total", "", "40", "", "6.790"]]);

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Estadística",
  minutos: 115,
  objetivos: [
    "Distinguir población y muestra y los tipos de variables y de muestreo",
    "Organizar datos en tablas de frecuencias, también agrupados en intervalos",
    "Elegir y construir el gráfico adecuado: barras, histograma, sectores, caja y bigotes",
    "Calcular e interpretar media, mediana, moda, cuartiles, rango, varianza y desviación típica",
    "Interpretar nubes de puntos y el grado de correlación entre dos variables",
    "Analizar críticamente gráficos e informaciones estadísticas de los medios",
  ],
  claves: ["población", "muestra", "frecuencia", "histograma", "media", "mediana", "desviación típica", "correlación"],
  pregunta: {
    texto: "Un titular dice: «El salario medio en España supera los 2.100 € al mes». Sin embargo, la mayoría de la gente cobra menos. ¿Miente el titular?",
    respuesta: "No necesariamente. La <b>media</b> se ve muy afectada por los valores extremos: unos pocos salarios muy altos la «arrastran» hacia arriba. Por eso, para salarios se usa mejor la <mark>mediana</mark>, el valor que deja a la mitad de las personas por debajo y a la otra mitad por encima, que es bastante menor que la media.",
  },
  lectura: {
    titulo: "La enfermera que convenció con gráficos",
    html: `<p>Durante la guerra de Crimea (1853-1856), la enfermera británica <b>Florence Nightingale</b> descubrió algo terrible: en los hospitales militares morían muchos más soldados por infecciones y falta de higiene que por las heridas de batalla. Para convencer al gobierno, no se limitó a escribir informes: inventó un <b>gráfico de sectores polar</b>, la «rosa de Nightingale», que mostraba mes a mes las causas de muerte con colores. El impacto fue tal que se reformaron los hospitales y la mortalidad cayó drásticamente.</p><p>Nightingale fue la primera mujer elegida miembro de la Real Sociedad de Estadística. Su historia muestra la fuerza de la <b>estadística</b>: recoger datos, resumirlos con unos pocos números y representarlos para que todo el mundo vea lo que dicen. Hoy la estadística decide qué medicamentos se aprueban, predice resultados electorales, ajusta los precios de los seguros y alimenta los algoritmos de las redes sociales.</p><p>Pero los datos también se pueden usar para engañar. En este tema aprenderás a organizar e interpretar datos, a calcular medidas de centralización y de dispersión, a estudiar la relación entre dos variables y a detectar gráficos y titulares tramposos.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Población, muestra e individuos</h3><p>La <b>estadística</b> estudia conjuntos de datos para describirlos y sacar conclusiones. La <b>población</b> es el conjunto de todos los elementos que se quieren estudiar (todos los estudiantes de 4º de ESO de España) y cada elemento es un <b>individuo</b>. Como casi nunca se puede preguntar a todos, se elige una <b>muestra</b>: una parte de la población. Estudiar a toda la población se llama hacer un <b>censo</b>.</p><p>Para que las conclusiones sean válidas, la muestra debe ser <b>representativa</b> y suficientemente grande. Si para saber la música favorita de los jóvenes solo se pregunta a la salida de un concierto de rock, la muestra está <b>sesgada</b>. El <b>muestreo aleatorio simple</b> elige a los individuos al azar; el <b>estratificado</b> divide la población en grupos (edad, sexo, región) y toma de cada uno una parte proporcional; el <b>sistemático</b> elige uno de cada k individuos de una lista.</p>`, svg: poblacion },
    { html: `<h3>1.2 Variables estadísticas</h3><p>La característica que se estudia se llama <b>variable estadística</b>. Las variables <b>cualitativas</b> expresan cualidades que no son números: color favorito, deporte, medio de transporte. Las <b>cuantitativas</b> toman valores numéricos y pueden ser <b>discretas</b>, si solo toman valores aislados (número de hermanos, goles en un partido), o <b>continuas</b>, si pueden tomar cualquier valor de un intervalo (altura, peso, tiempo).</p><p>El tipo de variable decide qué gráficos y qué parámetros tienen sentido. Con una variable cualitativa se puede calcular la moda y hacer un diagrama de sectores, pero no la media: no existe el «color medio». Con las continuas, los datos se suelen <b>agrupar en intervalos</b> porque casi nunca se repiten exactamente. Saber clasificar las variables es el primer paso de cualquier estudio.</p>`, svg: variables },
    { html: `<h3>1.3 Tablas de frecuencias</h3><p>Para organizar los datos se usa una <b>tabla de frecuencias</b>. La <b>frecuencia absoluta</b> fᵢ es el número de veces que aparece cada valor; la suma de todas es el número total de datos, N. La <b>frecuencia relativa</b> hᵢ = fᵢ/N es la proporción (se puede expresar en porcentaje). La <b>frecuencia absoluta acumulada</b> Fᵢ suma las frecuencias hasta ese valor e indica cuántos datos son menores o iguales.</p><p>Ejemplo: se pregunta a 30 estudiantes cuántos hermanos tienen. Si 6 dicen 0, 13 dicen 1, 8 dicen 2, 2 dicen 3 y 1 dice 4, la frecuencia relativa de «1 hermano» es 13/30 ≈ 0,43 (43 %), y la acumulada hasta 2 hermanos es 6 + 13 + 8 = 27. Comprobación: la suma de las frecuencias relativas es siempre 1 (100 %), y la última acumulada es N.</p>${tabla(["xᵢ", "fᵢ", "hᵢ", "Fᵢ"], [["0", "6", "0,20", "6"], ["1", "13", "0,43", "19"], ["2", "8", "0,27", "27"], ["3", "2", "0,07", "29"], ["4", "1", "0,03", "30"]])}`, svg: frecuencias },
    { html: `<h3>1.4 Datos agrupados en intervalos</h3><p>Cuando la variable es continua o tiene muchos valores distintos, se agrupan los datos en <b>intervalos</b> o <b>clases</b>, normalmente de la misma amplitud y cerrados por la izquierda: [150, 160) incluye el 150 pero no el 160. El punto medio de cada intervalo es la <b>marca de clase</b>, xᵢ, que representa a todos los datos del intervalo en los cálculos.</p><p>Para construir la tabla: se calcula el <b>recorrido</b> (máximo − mínimo), se decide el número de intervalos (entre 5 y 10 suele ir bien) y se obtiene su amplitud. La representación adecuada es el <b>histograma</b>, con barras pegadas cuya área es proporcional a la frecuencia. Uniendo los puntos medios de los techos de las barras se obtiene el <b>polígono de frecuencias</b>. En la tabla de abajo se recogen las alturas de 40 estudiantes.</p>${agrupados}`, svg: histograma, video: { id: "VNMck8wco98", titulo: "Tabla de frecuencias agrupada en intervalos", canal: "Daniel Carreón", vistas: 4014560, megusta: 0 } },
    { html: `<h3>1.5 Gráficos estadísticos</h3><p>Cada tipo de variable tiene sus gráficos. El <b>diagrama de barras</b> sirve para variables cualitativas y cuantitativas discretas: barras separadas de altura igual a la frecuencia. El <b>histograma</b>, para continuas agrupadas: barras pegadas. El <b>diagrama de sectores</b> muestra cómo se reparte un total: cada sector tiene un ángulo de 360° · hᵢ. Un 25 % corresponde a 90°.</p><p>Otros gráficos útiles son el <b>pictograma</b> (con dibujos), el <b>gráfico de líneas</b>, para la evolución en el tiempo (temperatura a lo largo del año), el <b>diagrama de caja y bigotes</b>, que veremos más adelante, y la <b>nube de puntos</b>, para dos variables. Un buen gráfico tiene título, ejes rotulados con unidades, escala que empieza en cero (en las barras) y fuente de los datos. Elegir el gráfico correcto es parte de comunicar bien.</p>`, svg: sect },
    { html: `<h3>2.1 La media aritmética</h3><p>Las <b>medidas de centralización</b> resumen los datos con un valor «típico». La más usada es la <b>media aritmética</b>: la suma de todos los datos dividida entre el número de datos. Con frecuencias, <mark>x̄ = Σ xᵢ · fᵢ / N</mark>. Con datos agrupados se usan las marcas de clase como xᵢ.</p><p>En el ejemplo de los hermanos: x̄ = (0·6 + 1·13 + 2·8 + 3·2 + 4·1)/30 = 39/30 = 1,3 hermanos. En el de las alturas: x̄ = 6.790/40 ≈ 169,8 cm. La media es el «punto de equilibrio» de los datos: si cada dato fuera un peso sobre una regla, la regla se equilibraría en la media. Su gran inconveniente es que es muy <b>sensible a los valores extremos</b>: en un pueblo de 99 personas que ganan 1.500 € y un millonario que gana 1.000.000 €, la media sale ¡más de 11.000 €!</p>`, svg: media },
    { html: `<h3>2.2 Mediana y moda</h3><p>La <b>mediana</b> (Me) es el valor central cuando los datos están ordenados: deja la mitad por debajo y la mitad por encima. Con un número impar de datos es el del centro; con un número par, la media de los dos centrales. En una tabla, se busca el primer valor cuya frecuencia acumulada supera N/2. Para los hermanos, N/2 = 15 y F = 19 en el valor 1: Me = 1.</p><p>La <b>moda</b> (Mo) es el valor más frecuente; en datos agrupados se habla de <b>intervalo modal</b>. Puede haber varias modas, y es el único parámetro que sirve para variables cualitativas. ¿Cuál usar? Si hay valores extremos o la distribución es <b>asimétrica</b> (salarios, precios de viviendas), la mediana representa mejor al «individuo típico». En distribuciones simétricas, media, mediana y moda casi coinciden.</p>`, svg: centrales, video: { id: "5bZXpfxwHqk", titulo: "Media, mediana y moda: datos agrupados en intervalos", canal: "Matemáticas profe Alex", vistas: 10759946, megusta: 0 } },
    { html: `<h3>2.3 Cuartiles y diagrama de caja</h3><p>Los <b>cuartiles</b> dividen los datos ordenados en cuatro partes con el mismo número de datos. El <b>primer cuartil</b> Q₁ deja por debajo el 25 %, el segundo es la mediana (50 %) y el <b>tercer cuartil</b> Q₃ deja por debajo el 75 %. Se calculan como la mediana, buscando en las acumuladas N/4 y 3N/4. Los <b>percentiles</b> generalizan la idea: el percentil 90 deja por debajo el 90 % (se usan en las tablas de crecimiento infantil).</p><p>El <b>diagrama de caja y bigotes</b> resume los datos con cinco números: mínimo, Q₁, mediana, Q₃ y máximo. La caja contiene el 50 % central y su anchura es el <b>rango intercuartílico</b>, RI = Q₃ − Q₁. Los bigotes llegan al mínimo y al máximo. De un vistazo se ve si los datos son simétricos, dónde se concentran y si hay valores atípicos. Es ideal para comparar varios grupos, como las notas de dos clases.</p>`, svg: caja },
    { html: `<h3>2.4 Medidas de dispersión: rango y desviación media</h3><p>Dos grupos pueden tener la misma media y ser muy diferentes. Las notas 5, 5,5, 6, 6, 6,5 y 7 y las notas 2, 3,5, 5, 7, 8,5 y 10 tienen media 6, pero en el segundo grupo los datos están mucho más <b>dispersos</b>. Las <b>medidas de dispersión</b> miden cuánto se alejan los datos de la media.</p><p>La más sencilla es el <b>rango</b> o recorrido: máximo − mínimo (2 y 8 en los ejemplos). Su problema es que solo usa dos datos y es muy sensible a los extremos. El rango intercuartílico es más robusto. Otra opción es la <b>desviación media</b>: la media de las distancias |xᵢ − x̄| de cada dato a la media. Sin embargo, la medida más utilizada en ciencia es la desviación típica, que veremos a continuación. Una media sin una medida de dispersión es una información incompleta.</p>`, svg: dispersion },
    { html: `<h3>2.5 Varianza y desviación típica</h3><p>La <b>varianza</b> σ² es la media de los cuadrados de las desviaciones respecto a la media: σ² = Σ (xᵢ − x̄)² fᵢ / N. Para calcularla es más cómoda la fórmula equivalente <mark>σ² = Σ xᵢ² fᵢ / N − x̄²</mark>. La <b>desviación típica</b> σ es su raíz cuadrada, y tiene la ventaja de estar en las mismas unidades que los datos.</p><p>Ejemplo: datos 2, 4, 4, 5, 10. x̄ = 25/5 = 5. Σ x² = 4 + 16 + 16 + 25 + 100 = 161; σ² = 161/5 − 25 = 7,2; σ ≈ 2,68. Una σ pequeña indica datos agrupados alrededor de la media; una grande, datos dispersos. Para comparar la dispersión de variables con medias o unidades distintas (pesos de elefantes y de ratones) se usa el <b>coeficiente de variación</b>, CV = σ/x̄, a menudo en porcentaje. Las calculadoras científicas y las hojas de cálculo calculan σ directamente.</p>`, svg: desviacion, video: { id: "oZRaDwnpXkY", titulo: "Varianza y desviación estándar: introducción", canal: "Matemáticas profe Alex", vistas: 6067262, megusta: 0 } },
    { html: `<h3>2.6 Interpretar media y desviación típica juntas</h3><p>Muchas variables naturales (alturas, pesos, errores de medida, notas de exámenes grandes) tienen una distribución en forma de <b>campana</b>, simétrica alrededor de la media: la <b>distribución normal</b>. En ella se cumple aproximadamente la regla del <mark>68-95-99,7</mark>: el 68 % de los datos están entre x̄ − σ y x̄ + σ, el 95 % entre x̄ − 2σ y x̄ + 2σ, y casi todos entre x̄ − 3σ y x̄ + 3σ.</p><p>Ejemplo: si la altura de los chicos de 16 años tiene media 174 cm y σ = 7 cm, aproximadamente el 68 % mide entre 167 y 181 cm, y el 95 % entre 160 y 188 cm. Alguien de 195 cm está a 3σ de la media: es muy poco frecuente. Estas reglas permiten interpretar un dato concreto en comparación con el grupo y son la base del control de calidad en las fábricas.</p>`, svg: normal },
    { html: `<h3>3.1 Variables bidimensionales y nubes de puntos</h3><p>A veces interesa estudiar <b>dos variables a la vez</b> en cada individuo para ver si están relacionadas: horas de estudio y nota, altura y peso, temperatura y consumo de helados. Los pares de datos (x, y) se representan en unos ejes como una <b>nube de puntos</b> o diagrama de dispersión.</p><p>La forma de la nube indica el tipo de relación. Si los puntos se agrupan alrededor de una recta, hay <b>correlación lineal</b>. La <b>recta de regresión</b> es la recta que mejor se ajusta a la nube y permite hacer <b>predicciones</b>: si la recta es y = 0,75x + 1,9, alguien que estudia 6 horas sacaría aproximadamente un 6,4. Las predicciones solo son fiables dentro del rango de los datos y cuando la correlación es fuerte. Las hojas de cálculo dibujan la nube y la recta con dos clics.</p>`, svg: nube },
    { html: `<h3>3.2 Correlación: fuerza y sentido</h3><p>La <b>correlación</b> puede ser <b>positiva</b> (cuando una variable aumenta, la otra también: estudio y nota), <b>negativa</b> (cuando una aumenta, la otra disminuye: antigüedad de un coche y su precio) o <b>nula</b> (no hay relación: número de pie y nota de matemáticas). Su intensidad se mide con el <b>coeficiente de correlación r</b>, entre −1 y 1.</p><p>Si r está cerca de 1 o de −1, la correlación es <b>fuerte</b> y los puntos están casi alineados; si está cerca de 0, es <b>débil</b> o nula. Muy importante: <b>correlación no implica causalidad</b>. Las ventas de helados y los ahogamientos en la playa están correlacionados, pero no porque los helados ahoguen: ambos aumentan con el calor del verano. Antes de afirmar que una cosa causa otra hay que buscar una explicación y, si es posible, hacer un experimento.</p>`, svg: correlaciones },
    { html: `<h3>3.3 Gráficos y titulares engañosos</h3><p>Los datos pueden presentarse de forma que engañen. Los trucos más frecuentes son: <b>cortar el eje vertical</b> (si empieza en 48 en vez de en 0, una diferencia de 50 % frente a 48 % parece enorme); usar <b>dibujos que crecen en dos dimensiones</b> (si el dibujo de un saco de dinero duplica su altura, su área se multiplica por 4); elegir <b>muestras sesgadas</b> o muy pequeñas; y usar la <b>media</b> donde convendría la mediana.</p><p>Otros engaños son mostrar solo un tramo de tiempo favorable, comparar porcentajes sobre totales diferentes o confundir correlación con causalidad. Ante un gráfico conviene preguntarse: ¿dónde empieza el eje?, ¿de dónde salen los datos y cuántos son?, ¿qué parámetro se usa y por qué?, ¿hay una explicación alternativa? Leer críticamente la estadística es una competencia ciudadana esencial.</p>`, svg: enganos },
    { html: `<h3>3.4 Un estudio estadístico completo</h3><p>Un estudio estadístico sigue unas fases: 1) <b>plantear</b> una pregunta clara y definir la población (¿cuántas horas duermen los estudiantes del centro?); 2) <b>diseñar</b> la muestra y el instrumento, como una encuesta con preguntas claras y sin sesgo; 3) <b>recoger</b> y organizar los datos en tablas, con una hoja de cálculo; 4) <b>analizar</b>: calcular parámetros y hacer gráficos adecuados; 5) <b>interpretar</b> y comunicar las conclusiones, indicando sus limitaciones.</p><p>Las hojas de cálculo facilitan mucho el trabajo: funciones como PROMEDIO, MEDIANA, MODA, CUARTIL, DESVEST o COEF.DE.CORREL y los asistentes de gráficos permiten analizar cientos de datos en segundos. Pero la parte más importante sigue siendo humana: hacer buenas preguntas, elegir bien la muestra e interpretar los resultados con honestidad.</p>`, svg: proceso },
  ],
  ejemplos: [
    { enunciado: "Notas de 20 estudiantes: 4 (3 veces), 5 (5), 6 (6), 7 (4), 9 (2). Calcula media, mediana y moda.", pasos: ["x̄ = (12 + 25 + 36 + 28 + 18)/20 = 119/20 = 5,95.", "Acumuladas: 3, 8, 14, 18, 20. N/2 = 10 → Me = 6.", "Mo = 6 (frecuencia 6)."], resultado: "x̄ = 5,95; Me = 6; Mo = 6." },
    { enunciado: "Calcula la desviación típica de 3, 5, 7, 9, 11.", pasos: ["x̄ = 35/5 = 7.", "Σx² = 9 + 25 + 49 + 81 + 121 = 285.", "σ² = 285/5 − 49 = 8.", "σ = √8 ≈ 2,83."], resultado: "σ ≈ 2,83." },
    { enunciado: "Con la tabla de alturas agrupadas (n = 40), calcula la media y el intervalo modal.", pasos: ["x̄ = 6.790/40 ≈ 169,75 cm.", "Mayor frecuencia: [170, 180) con 15."], resultado: "x̄ ≈ 169,8 cm; intervalo modal [170, 180)." },
    { enunciado: "En una encuesta a 200 personas, 70 prefieren el fútbol. ¿Qué ángulo le corresponde en un diagrama de sectores?", pasos: ["h = 70/200 = 0,35.", "Ángulo = 0,35 · 360° = 126°."], resultado: "126°." },
    { enunciado: "Datos ordenados: 2, 3, 3, 5, 6, 7, 8, 9, 10, 12, 15. Halla Q₁, Me, Q₃ y el rango intercuartílico.", pasos: ["n = 11. Me = 6.º dato = 7.", "Mitad inferior 2, 3, 3, 5, 6 → Q₁ = 3.", "Mitad superior 8, 9, 10, 12, 15 → Q₃ = 10.", "RI = 10 − 3 = 7."], resultado: "Q₁ = 3, Me = 7, Q₃ = 10, RI = 7." },
    { enunciado: "Grupo A: x̄ = 60 kg, σ = 6 kg. Grupo B: x̄ = 30 kg, σ = 4,5 kg. ¿Cuál es más disperso en términos relativos?", pasos: ["CV_A = 6/60 = 0,10 (10 %).", "CV_B = 4,5/30 = 0,15 (15 %)."], resultado: "B es relativamente más disperso, aunque su σ es menor." },
  ],
  errores: [
    "Calcular la media sin multiplicar cada valor por su frecuencia.",
    "Buscar la mediana sin ordenar antes los datos.",
    "Usar la media en distribuciones con valores extremos, donde la mediana representa mejor.",
    "Dibujar un histograma con barras separadas o un diagrama de barras para datos continuos agrupados.",
    "Olvidar la raíz cuadrada: confundir la varianza con la desviación típica.",
    "Deducir que una variable causa la otra solo porque están correlacionadas.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Clasifica las variables: a) color de ojos b) nº de mascotas c) tiempo en una carrera d) marca de móvil e) nº de calzado.", sol: "a) cualitativa b) discreta c) continua d) cualitativa e) discreta." },
    { nivel: "básico", q: "Para conocer el deporte favorito del instituto se pregunta a los 25 alumnos del equipo de baloncesto. ¿Es una buena muestra?", sol: "No: está sesgada hacia el baloncesto. Habría que elegir alumnos al azar de todos los cursos." },
    { nivel: "básico", q: "Haz la tabla de frecuencias (absolutas, relativas y acumuladas) de: 2, 3, 2, 1, 4, 2, 3, 3, 2, 1.", sol: "1: f=2, h=0,2, F=2; 2: 4, 0,4, 6; 3: 3, 0,3, 9; 4: 1, 0,1, 10." },
    { nivel: "básico", q: "Calcula media, mediana y moda de 7, 3, 9, 5, 3, 8, 6.", sol: "Ordenados 3, 3, 5, 6, 7, 8, 9. x̄ = 41/7 ≈ 5,86. Me = 6. Mo = 3." },
    { nivel: "básico", q: "Calcula la mediana de 12, 15, 9, 20, 14, 11.", sol: "Ordenados 9, 11, 12, 14, 15, 20. Me = (12 + 14)/2 = 13." },
    { nivel: "básico", q: "Calcula el rango de 34, 28, 45, 31, 52, 40.", sol: "52 − 28 = 24." },
    { nivel: "básico", q: "En una clase, 12 alumnos van a pie, 9 en bus, 6 en coche y 3 en bici. Calcula los ángulos del diagrama de sectores.", sol: "N = 30. 144°, 108°, 72° y 36°." },
    { nivel: "básico", q: "¿Qué gráfico usarías para: a) la evolución de la temperatura en un mes b) las alturas de 100 personas c) el partido votado?", sol: "a) líneas b) histograma c) barras o sectores." },
    { nivel: "básico", q: "Calcula la marca de clase de los intervalos [20, 30), [30, 40) y [40, 50).", sol: "25, 35 y 45." },
    { nivel: "básico", q: "Calcula la desviación típica de 4, 4, 4, 4.", sol: "σ = 0: no hay dispersión." },
    { nivel: "básico", q: "Di si la correlación es positiva, negativa o nula: a) horas de ejercicio y forma física b) velocidad y tiempo de un trayecto c) día de nacimiento y altura.", sol: "a) positiva b) negativa c) nula." },
    { nivel: "básico", q: "Una media de 6 y otra de 6 con σ = 0,5 y σ = 3. ¿Qué grupo es más homogéneo?", sol: "El de σ = 0,5." },
    { nivel: "medio", q: "Calcula media y desviación típica de: xᵢ = 1, 2, 3, 4 con fᵢ = 3, 5, 8, 4.", sol: "N = 20. x̄ = (3 + 10 + 24 + 16)/20 = 2,65. Σx²f = 3 + 20 + 72 + 64 = 159. σ² = 7,95 − 7,0225 = 0,9275. σ ≈ 0,96." },
    { nivel: "medio", q: "Tiempos (min) de 30 corredores: [20,25): 4, [25,30): 9, [30,35): 11, [35,40): 6. Calcula la media y el intervalo modal.", sol: "Marcas 22,5; 27,5; 32,5; 37,5. x̄ = (90 + 247,5 + 357,5 + 225)/30 = 30,67 min. Modal [30, 35)." },
    { nivel: "medio", q: "En la tabla anterior, ¿en qué intervalo está la mediana?", sol: "Acumuladas 4, 13, 24, 30. N/2 = 15 → [30, 35)." },
    { nivel: "medio", q: "Halla Q₁, Me y Q₃ de 5, 7, 8, 8, 10, 12, 13, 15, 18, 20 y dibuja el diagrama de caja.", sol: "Me = (10 + 12)/2 = 11. Q₁ = 8 (mediana de 5, 7, 8, 8, 10). Q₃ = 15. Mín 5, máx 20." },
    { nivel: "medio", q: "La media de 5 números es 8. Si se añade el 14, ¿cuál es la nueva media?", sol: "Suma 40 + 14 = 54; 54/6 = 9." },
    { nivel: "medio", q: "Los sueldos de una empresa son: 1.200, 1.300, 1.300, 1.400, 1.500 y 9.000 €. Calcula media y mediana. ¿Cuál representa mejor?", sol: "x̄ = 15.700/6 ≈ 2.616,67 €. Me = 1.350 €. Representa mejor la mediana." },
    { nivel: "medio", q: "Si a todos los datos se les suma 3, ¿qué pasa con la media y con la desviación típica? ¿Y si se multiplican por 2?", sol: "Sumar 3: la media aumenta 3 y σ no cambia. Multiplicar por 2: media y σ se duplican." },
    { nivel: "medio", q: "Las alturas tienen x̄ = 165 cm y σ = 8 cm (campana). ¿Entre qué valores está el 95 % central?", sol: "Entre 149 y 181 cm (x̄ ± 2σ)." },
    { nivel: "medio", q: "Compara la dispersión relativa: precios de pisos (x̄ = 200.000 €, σ = 50.000 €) y de bicis (x̄ = 400 €, σ = 120 €).", sol: "CV pisos 25 %, CV bicis 30 %: las bicis son relativamente más dispersas." },
    { nivel: "medio", q: "Una recta de regresión entre horas de estudio (x) y nota (y) es y = 0,8x + 2. Predice la nota con 5 horas. ¿Tiene sentido predecir con 20 horas?", sol: "y = 6. Con 20 horas saldría 18: fuera del rango de datos, no tiene sentido." },
    { nivel: "medio", q: "Un gráfico de barras muestra ventas de 98 y 100 unidades con el eje empezando en 96. ¿Qué impresión da? ¿Cómo corregirlo?", sol: "Parece que una vende el triple. Hay que empezar el eje en 0." },
    { nivel: "medio", q: "En una clase de 25, la media es 6,2. En otra de 15, la media es 7. ¿Cuál es la media conjunta?", sol: "(25·6,2 + 15·7)/40 = (155 + 105)/40 = 6,5." },
    { nivel: "avanzado", q: "Encuentra cinco números con media 10, mediana 8 y moda 6.", sol: "Por ejemplo 6, 6, 8, 12, 18: la suma es 50 (media 10), el valor central es 8 y el único repetido es 6." },
    { nivel: "avanzado", q: "Explica por qué la suma de las desviaciones (xᵢ − x̄) es siempre 0 y por qué por eso la varianza usa cuadrados.", sol: "Σ(xᵢ − x̄) = Σxᵢ − N·x̄ = 0. Las desviaciones positivas y negativas se compensan; al elevar al cuadrado todas son positivas." },
    { nivel: "avanzado", q: "Un estudio encuentra que los municipios con más bibliotecas tienen más delitos. ¿Significa que las bibliotecas causan delitos?", sol: "No: ambas variables dependen del tamaño de la población (variable oculta). Correlación no implica causalidad." },
    { nivel: "avanzado", q: "Las notas de un examen tienen x̄ = 5,5 y σ = 1,5. Ana saca 8 y en otro examen (x̄ = 6, σ = 0,8) saca 7,5. ¿En cuál destacó más?", sol: "Puntuación típica z = (x − x̄)/σ: (8 − 5,5)/1,5 ≈ 1,67; (7,5 − 6)/0,8 ≈ 1,88. Destacó más en el segundo." },
    { nivel: "avanzado", q: "Diseña una encuesta de 5 preguntas sin sesgos sobre el uso del móvil y explica cómo elegirías una muestra estratificada en el instituto.", sol: "Respuesta abierta: preguntas neutras y concretas (horas al día, apps…). Muestra estratificada: tomar de cada curso un número de alumnos proporcional a su tamaño, elegidos al azar." },
    { nivel: "avanzado", q: "Calcula la varianza de 10, 12, 14, 16, 18 con la definición y con el atajo, y comprueba que coinciden.", sol: "x̄ = 14. Definición: (16 + 4 + 0 + 4 + 16)/5 = 8. Atajo: (100 + 144 + 196 + 256 + 324)/5 − 196 = 204 − 196 = 8 ✓." },
    { nivel: "avanzado", q: "Una nube de puntos tiene r = −0,92. Describe la relación y da un ejemplo real con ese comportamiento.", sol: "Correlación negativa fuerte: cuando una variable aumenta, la otra disminuye casi linealmente. Ejemplo: altitud y temperatura." },
  ],
  quiz: [
    { q: "Una muestra es…", o: ["toda la población", "una parte de la población", "un individuo", "una variable"], a: 1, e: "Subconjunto representativo." },
    { q: "La altura es una variable…", o: ["cualitativa", "discreta", "continua", "nominal"], a: 2, e: "Toma cualquier valor." },
    { q: "El nº de hermanos es una variable…", o: ["continua", "discreta", "cualitativa", "constante"], a: 1, e: "Valores aislados." },
    { q: "La suma de las frecuencias relativas es…", o: ["N", "100", "1", "0"], a: 2, e: "O 100 %." },
    { q: "La marca de clase de [40, 50) es…", o: ["40", "45", "50", "10"], a: 1, e: "Punto medio." },
    { q: "Para datos continuos agrupados se usa…", o: ["diagrama de barras", "histograma", "pictograma", "sectores"], a: 1, e: "Barras pegadas." },
    { q: "Media de 2, 4, 6, 8:", o: ["4", "5", "6", "20"], a: 1, e: "20/4." },
    { q: "Mediana de 1, 3, 7, 9, 20:", o: ["7", "8", "3", "9"], a: 0, e: "Valor central." },
    { q: "Moda de 2, 3, 3, 5, 5, 5, 6:", o: ["3", "5", "4,1", "6"], a: 1, e: "Más frecuente." },
    { q: "El parámetro más afectado por valores extremos es…", o: ["la moda", "la mediana", "la media", "Q₁"], a: 2, e: "La media." },
    { q: "Q₃ deja por debajo el…", o: ["25 %", "50 %", "75 %", "100 %"], a: 2, e: "Tercer cuarto." },
    { q: "La caja del diagrama de caja contiene el…", o: ["25 %", "50 %", "75 %", "100 %"], a: 1, e: "Entre Q₁ y Q₃." },
    { q: "Rango de 3, 8, 12, 20:", o: ["17", "20", "10,75", "9"], a: 0, e: "20 − 3." },
    { q: "La desviación típica es…", o: ["el cuadrado de la varianza", "la raíz de la varianza", "la media de los datos", "el rango / 2"], a: 1, e: "σ = √σ²." },
    { q: "Si σ = 0, los datos…", o: ["son todos iguales", "son 0", "son muy dispersos", "no existen"], a: 0, e: "Sin dispersión." },
    { q: "En una campana, entre x̄ − σ y x̄ + σ hay aproximadamente el…", o: ["50 %", "68 %", "95 %", "99,7 %"], a: 1, e: "Regla 68-95-99,7." },
    { q: "r = 0,95 indica correlación…", o: ["negativa fuerte", "positiva fuerte", "nula", "positiva débil"], a: 1, e: "Cerca de 1." },
    { q: "Correlación…", o: ["implica causalidad", "no implica causalidad", "siempre es lineal", "es siempre positiva"], a: 1, e: "Puede haber variables ocultas." },
    { q: "El coeficiente de variación sirve para…", o: ["calcular la media", "comparar dispersiones relativas", "hallar la moda", "ordenar datos"], a: 1, e: "CV = σ/x̄." },
    { q: "Un 30 % en un diagrama de sectores ocupa…", o: ["30°", "108°", "90°", "120°"], a: 1, e: "0,3 · 360." },
  ],
  examen: [
    { q: "Media de x = 1, 2, 3 con f = 2, 2, 1:", o: ["1,8", "2", "2,2", "1,5"], a: 0, e: "9/5." },
    { q: "Mediana de 4, 8, 6, 2:", o: ["5", "6", "4", "7"], a: 0, e: "(4 + 6)/2." },
    { q: "Varianza de 1, 3, 5:", o: ["8/3", "4", "2", "√(8/3)"], a: 0, e: "35/3 − 9." },
    { q: "Si sumamos 5 a todos los datos, σ…", o: ["aumenta 5", "no cambia", "se multiplica por 5", "disminuye"], a: 1, e: "Solo se desplazan." },
    { q: "Para salarios conviene…", o: ["la media", "la mediana", "el rango", "la varianza"], a: 1, e: "Robusta a extremos." },
    { q: "RI con Q₁ = 12, Q₃ = 20:", o: ["8", "32", "16", "4"], a: 0, e: "Q₃ − Q₁." },
    { q: "Altura y peso suelen tener correlación…", o: ["negativa", "nula", "positiva", "perfecta"], a: 2, e: "Ambas crecen juntas." },
    { q: "Muestreo que toma una parte proporcional de cada grupo:", o: ["aleatorio simple", "estratificado", "sistemático", "censo"], a: 1, e: "Por estratos." },
  ],
  feynman: ["Qué diferencia hay entre población y muestra y por qué la muestra debe ser representativa", "Cuándo es mejor usar la mediana que la media", "Qué mide la desviación típica y cómo se interpreta", "Por qué correlación no implica causalidad"],
  figura: {
    titulo: "Estadística en una mirada",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen: tablas y gráficos, centralización, dispersión y correlación">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Organizar", "frecuencias fᵢ, hᵢ, Fᵢ · intervalos y marcas de clase · gráficos", "var(--pen)"], ["Centralización", "media x̄ = Σxᵢfᵢ/N · mediana · moda · cuartiles", "var(--leaf)"], ["Dispersión", "rango · RI · σ² = Σx²f/N − x̄² · CV = σ/x̄", "var(--red)"], ["Dos variables", "nube de puntos · r entre −1 y 1 · no implica causa", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="15" font-weight="700" fill="${c}" ${D}>${n}</text><text x="180" y="${43 + i * 50}" font-size="14" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "24Uz1mBksL4", titulo: "Diagrama de cajas y bigotes | Boxplot", canal: "Matemáticas profe Alex", vistas: 868247, megusta: 0, busqueda: "diagrama de caja y bigotes" },
  mapa: mapa("ESTADÍSTICA", "var(--leaf)", [
    ["Datos", "población · muestra", "var(--pen)"],
    ["Tablas y gráficos", "frecuencias · histograma", "var(--inf)"],
    ["Parámetros", "x̄ · Me · σ", "var(--red)"],
    ["Correlación", "nube · r", "var(--leaf)"],
  ], 230),
  glosario: [
    ["Población", "Conjunto de todos los individuos que se quieren estudiar."],
    ["Muestra", "Parte de la población que se estudia."],
    ["Variable cualitativa", "Variable que expresa una cualidad, no un número."],
    ["Variable discreta", "Variable numérica que toma valores aislados."],
    ["Variable continua", "Variable numérica que puede tomar cualquier valor de un intervalo."],
    ["Frecuencia absoluta", "Número de veces que aparece un valor."],
    ["Frecuencia relativa", "Frecuencia absoluta dividida entre el total de datos."],
    ["Marca de clase", "Punto medio de un intervalo."],
    ["Histograma", "Gráfico de barras pegadas para datos agrupados en intervalos."],
    ["Media", "Suma de los datos dividida entre su número."],
    ["Mediana", "Valor central de los datos ordenados."],
    ["Moda", "Valor más frecuente."],
    ["Cuartiles", "Valores que dividen los datos ordenados en cuatro partes iguales."],
    ["Desviación típica", "Medida de dispersión: raíz de la varianza."],
    ["Coeficiente de variación", "Cociente σ/x̄, para comparar dispersiones."],
    ["Correlación", "Grado de relación entre dos variables."],
  ],
  situacion: {
    titulo: "¿Dormimos lo suficiente?",
    reto: "El departamento de orientación sospecha que los estudiantes duermen poco y que eso afecta a su rendimiento. Vuestro grupo hará un estudio estadístico en el centro para comprobarlo y proponer recomendaciones.",
    pasos: [
      "Formulad las preguntas del estudio y diseñad una encuesta anónima (horas de sueño, uso de pantallas antes de dormir, nota media).",
      "Elegid una muestra estratificada por cursos y recoged al menos 60 respuestas.",
      "Organizad los datos en una hoja de cálculo: tablas de frecuencias e histograma de las horas de sueño.",
      "Calculad media, mediana, cuartiles y desviación típica, y comparad cursos con diagramas de caja.",
      "Estudiad la correlación entre horas de sueño y nota con una nube de puntos y discutid si hay causalidad.",
    ],
    producto: "Un informe breve con gráficos para el departamento de orientación y una infografía con recomendaciones para el alumnado.",
    evaluacion: ["Diseña una muestra representativa y una encuesta sin sesgos.", "Calcula e interpreta correctamente los parámetros estadísticos.", "Elige y construye gráficos adecuados y honestos.", "Distingue correlación y causalidad en sus conclusiones."],
  },
  tarjetas: [
    ["Población / muestra", "Todos / una parte representativa."],
    ["Tipos de variable", "Cualitativa, discreta, continua."],
    ["Frecuencia relativa", "hᵢ = fᵢ / N"],
    ["Marca de clase", "Punto medio del intervalo."],
    ["Media", "x̄ = Σ xᵢ fᵢ / N"],
    ["Mediana", "Valor central de los datos ordenados."],
    ["Moda", "Valor más frecuente."],
    ["Cuartiles", "Q₁ 25 %, Me 50 %, Q₃ 75 %."],
    ["Varianza", "σ² = Σ x² f / N − x̄²"],
    ["Desviación típica", "σ = √σ²"],
    ["Regla 68-95-99,7", "Datos a 1σ, 2σ, 3σ de la media."],
    ["Correlación", "r entre −1 y 1; no implica causalidad."],
  ],
  familias: ["Buscad juntos un gráfico en un periódico y comprobad si el eje empieza en cero.", "Anotad durante una semana las horas de sueño de la familia y calculad media y mediana.", "Comentad un titular con «media» y pensad si la mediana daría otra imagen.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido estocástico: población y muestra, tipos de muestreo, variables, tablas de frecuencias, datos agrupados, gráficos estadísticos, medidas de centralización, posición y dispersión, variables bidimensionales y correlación, y análisis crítico de la información estadística (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Encuesta real al centro con hoja de cálculo (situación de aprendizaje).", "Colección de gráficos engañosos de prensa para analizarlos.", "Comparación de grupos con diagramas de caja.", "Datos abiertos del INE o del Idescat para trabajar con datos reales."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Instituto Nacional de Estadística (INE): explica", url: "https://www.ine.es/explica/explica.htm" },
    { t: "Idescat: estadística para estudiantes", url: "https://www.idescat.cat/" },
  ],
  revisado: "2026-11-13",
};
