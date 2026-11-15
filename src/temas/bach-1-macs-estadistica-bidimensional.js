// Matemáticas Aplicadas a las Ciencias Sociales I · Tema 10. Nivel libro. Dibujos propios en SVG.
const { tema, ficha, tabla, G, columnas, compara, lienzo, t, n2, wiki } = require("./_bach1-macs");

// Datos del tema: gasto mensual en publicidad (miles de €) y ventas (miles de €) de una tienda.
const P = [[1, 30], [2, 34], [3, 41], [4, 43], [5, 50], [6, 54]];
const ry = (x) => (34 / 7) * x + 25; // y = 4,857x + 25
// Nube de la tienda con escala propia en cada eje y recta opcional.
const tienda = (aria, recta, et) => G(aria, { x0: -0.4, x1: 7, y0: 22, y1: 60, paso: 1, pasoY: 5, etiquetas: true, pasoEtY: 10 }, (E) => `${recta ? E.curva(recta, "var(--red)", 0, 7, 2.2) : ""}${P.map(([x, y]) => E.punto(x, y, "var(--pen)", "", 0, 0)).join("")}${t(E.X(6.9), E.Y(24.5), et, { s: 10, b: 1, c: recta ? "var(--red)" : "var(--muted)", a: "end" })}`);

// Cuatro nubes pequeñas: fuerte positiva, fuerte negativa, nula y no lineal.
function tipos(aria) {
  const ruido = [0.3, -0.5, 0.6, -0.2, 0.4, -0.6, 0.1, 0.5, -0.4, 0.2];
  const pan = [
    ["r ≈ 0,95", "positiva fuerte", "var(--leaf)", (i) => i + ruido[i]],
    ["r ≈ −0,95", "negativa fuerte", "var(--red)", (i) => 9 - i + ruido[i]],
    ["r ≈ 0", "sin correlación", "var(--muted)", (i) => [4, 8, 2, 6, 1, 7, 3, 9, 5, 4][i]],
    ["r ≈ 0", "relación no lineal", "var(--sun)", (i) => 9 - 0.4 * (i - 4.5) ** 2],
  ];
  return lienzo(aria, pan.map(([r, nom, c, f], k) => {
    const ox = 10 + (k % 2) * 124, oy = 8 + Math.floor(k / 2) * 86;
    let s = `<rect x="${ox}" y="${oy}" width="116" height="78" rx="8" fill="var(--card)" stroke="var(--line)"/>`;
    for (let i = 0; i < 10; i++) s += `<circle cx="${n2(ox + 12 + i * 9.6)}" cy="${n2(oy + 62 - f(i) * 4.6)}" r="2.8" fill="${c}"/>`;
    return s + t(ox + 58, oy + 13, r, { s: 10, b: 1, c }) + t(ox + 58, oy + 74, nom, { s: 9, c: "var(--muted)" });
  }).join(""));
}

module.exports = tema({
  n: 10,
  titulo: "Estadística bidimensional",
  minutos: 110,
  objetivos: [
    "Organizar datos de dos variables en tablas de doble entrada y obtener distribuciones marginales y condicionadas",
    "Decidir si dos variables cualitativas son dependientes comparando distribuciones condicionadas",
    "Representar variables cuantitativas en una nube de puntos y describir el tipo de correlación",
    "Calcular e interpretar la covarianza y el coeficiente de correlación de Pearson",
    "Obtener las rectas de regresión y usarlas para hacer estimaciones razonables",
    "Distinguir correlación de causalidad y valorar críticamente estudios sociales y económicos",
  ],
  claves: ["variable bidimensional", "tabla de contingencia", "distribución marginal", "distribución condicionada", "nube de puntos", "covarianza", "coeficiente de correlación", "recta de regresión", "coeficiente de determinación", "causalidad"],
  lectura: {
    titulo: "¿Más policía, más delitos?",
    html: `<p>Si se comparan las ciudades de un país, se observa que las que tienen más policías también registran más delitos. ¿Significa eso que la policía provoca delitos? Evidentemente no: las ciudades grandes tienen a la vez más policías y más delitos, porque tienen más habitantes. Y, al revés, una ciudad con mucha delincuencia contrata más agentes. Los datos muestran que dos variables <b>van juntas</b>, pero no dicen por qué.</p>
    <p>La <b>estadística bidimensional</b> estudia dos variables a la vez en los mismos individuos: renta y gasto de cada familia, publicidad y ventas de cada mes, edad y uso de redes sociales de cada persona. Permite medir la fuerza de su relación con un número, el <b>coeficiente de correlación</b>, y resumirla con una recta que sirve para hacer previsiones.</p>
    <p>Economistas, sociólogos y politólogos usan estas herramientas a diario. Pero, como muestra el ejemplo de la policía, la interpretación requiere cuidado: una correlación fuerte puede deberse a una tercera variable oculta, a la casualidad o a una causa que va en sentido contrario al que se supone. En este tema aprenderás a calcular estas medidas y, sobre todo, a leerlas con espíritu crítico.</p>`,
  },
  pregunta: {
    texto: "En una muestra de países, los que consumen más chocolate por habitante tienen más premios Nobel. ¿Comer chocolate hace más inteligente?",
    respuesta: "No se puede concluir. Es una <mark>correlación</mark>, no una relación de causa: los países ricos consumen más chocolate y también invierten más en ciencia y educación. La renta es una <b>variable oculta</b> que explica las dos.",
  },
  bloques: [
    {
      h: "Variables estadísticas bidimensionales",
      html: `<p>Una <b>variable estadística bidimensional</b> (X, Y) resulta de observar dos caracteres en cada individuo de una población o muestra. Cada individuo aporta un par de valores (xᵢ, yᵢ). Ejemplos del ámbito social: renta familiar y gasto en ocio, horas de trabajo y salario, edad y número de horas en redes sociales, nivel de estudios e intención de voto.</p><p>El objetivo principal no es describir cada variable por separado, cosa que ya sabes hacer, sino estudiar la <b>relación</b> entre ellas: ¿varían conjuntamente?, ¿con qué intensidad?, ¿se puede predecir una a partir de la otra?</p><p>Las variables pueden ser cualitativas (sexo, medio de transporte, partido votado) o cuantitativas (renta, edad, ventas). Si ambas son cualitativas, la herramienta adecuada es la <b>tabla de contingencia</b>; si ambas son cuantitativas, la <b>nube de puntos</b>, la correlación y la regresión.</p><p>A lo largo del tema usaremos un ejemplo económico: una tienda anota durante seis meses su gasto en publicidad (X, en miles de euros) y sus ventas (Y, en miles de euros). Los datos se recogen en una tabla en la que cada columna corresponde a un mes, es decir, a un individuo.</p><p>Cuando los pares se repiten muchas veces, como ocurre con encuestas de cientos de personas, conviene agruparlos en una tabla de frecuencias de doble entrada en lugar de listarlos uno a uno.</p>`,
      svg: tabla("Tabla con el gasto en publicidad y las ventas de una tienda durante seis meses", [["Mes", "1", "2", "3", "4", "5", "6"], ["X", "1", "2", "3", "4", "5", "6"], ["Y", "30", "34", "41", "43", "50", "54"]], { titulo: "X: publicidad · Y: ventas (miles de €)" }),
    },
    {
      h: "Tablas de contingencia y distribuciones marginales",
      html: `<p>Cuando las variables son cualitativas, o cuantitativas con pocos valores, los datos se organizan en una <b>tabla de doble entrada</b> o <b>de contingencia</b>: las filas corresponden a las modalidades de X, las columnas a las de Y, y cada casilla indica la <b>frecuencia conjunta</b> nᵢⱼ, el número de individuos que presentan a la vez la modalidad i de X y la j de Y.</p><p>Ejemplo: se pregunta a 200 personas por su principal medio de información, distinguiendo si tienen menos de 30 años o no.</p><ul><li>Menores de 30: 50 redes sociales, 20 televisión, 10 prensa (total 80).</li><li>De 30 o más: 30 redes, 60 televisión, 30 prensa (total 120).</li></ul><p>Sumando por filas y por columnas se obtienen los <b>totales marginales</b>, que se escriben en los márgenes de la tabla. Forman las <b>distribuciones marginales</b>: la de la edad (80 jóvenes y 120 adultos, un 40 % y un 60 %) y la del medio (80 redes, 80 televisión y 40 prensa: 40 %, 40 % y 20 %). Cada distribución marginal describe una sola variable, ignorando la otra.</p><p>Las frecuencias relativas conjuntas se calculan dividiendo entre el total: por ejemplo, el 50/200 = 25 % de los encuestados son jóvenes que se informan por redes. La suma de todas las frecuencias conjuntas es el total, 200, y la de las relativas, 1.</p>`,
      svg: tabla("Tabla de contingencia de edad y medio de información de 200 personas, con los totales marginales", [["", "Redes", "TV", "Prensa", "Total"], ["< 30", "50", "20", "10", "80"], ["≥ 30", "30", "60", "30", "120"], ["Total", "80", "80", "40", "200"]], { titulo: "Edad y medio de información", marca: [[3, 1], [3, 2], [3, 3], [1, 4], [2, 4]] }),
    },
    {
      h: "Distribuciones condicionadas y dependencia",
      html: `<p>Una <b>distribución condicionada</b> describe una variable solo en los individuos que tienen una determinada modalidad de la otra. Por ejemplo, la distribución del medio de información <b>condicionada a</b> ser menor de 30 años se obtiene dividiendo cada casilla de esa fila entre su total, 80:</p><ul><li>Jóvenes: redes 50/80 = 62,5 %; televisión 25 %; prensa 12,5 %.</li><li>Adultos: redes 30/120 = 25 %; televisión 50 %; prensa 25 %.</li></ul><p>Comparar distribuciones condicionadas es la forma de estudiar la relación entre variables cualitativas. Si fueran iguales entre sí (y, por tanto, iguales a la marginal), saber la edad no daría información sobre el medio preferido: las variables serían <b>independientes</b>. Aquí son muy distintas: el 62,5 % de los jóvenes usa redes frente al 25 % de los adultos, así que edad y medio de información son <b>dependientes</b>.</p><p>Con independencia, cada frecuencia conjunta sería el producto de las marginales dividido entre el total: nᵢⱼ = nᵢ · nⱼ / N. Por ejemplo, se esperarían 80 · 80/200 = 32 jóvenes informados por redes, y hay 50. Cuanto mayores son las diferencias entre lo observado y lo esperado, más fuerte es la dependencia.</p><p>Este tipo de análisis es la base de los estudios de mercado y de los informes de opinión, como los barómetros del CIS, que publican cruces de variables como edad, sexo o nivel de estudios con intención de voto.</p>`,
      svg: columnas("Porcentaje que se informa por redes sociales: 62,5 por ciento de los jóvenes, 25 por ciento de los adultos y 40 por ciento del total", [["< 30", 62.5, "var(--pen)"], ["≥ 30", 25, "var(--red)"], ["Total", 40, "var(--muted)"]], { titulo: "Se informan por redes (%)", unidad: " %", max: 70 }),
      video: { id: "pThsWPfzojw", titulo: "Tablas de contingencia", canal: "matematicasyeso", vistas: 143579, busqueda: "tablas de contingencia" },
    },
    {
      h: "La nube de puntos",
      html: `<p>Cuando X e Y son cuantitativas, cada par (xᵢ, yᵢ) se representa como un punto en unos ejes cartesianos. El conjunto de puntos se llama <b>diagrama de dispersión</b> o <b>nube de puntos</b>.</p><p>La nube de la tienda muestra a simple vista lo que la tabla solo insinúa: los puntos se alinean en una franja estrecha que sube hacia la derecha. Los meses con más publicidad son también los de más ventas, y la relación parece aproximadamente lineal.</p><p>De una nube se observan tres cosas:</p><ul><li>La <b>forma</b>: si los puntos se agrupan en torno a una recta (relación lineal), a una curva o no siguen ningún patrón.</li><li>El <b>sentido</b>: si al aumentar X tiende a aumentar Y (relación directa o positiva) o a disminuir (inversa o negativa).</li><li>La <b>intensidad</b>: si los puntos están muy próximos a la línea de tendencia (relación fuerte) o muy dispersos (débil).</li></ul><p>La nube también ayuda a detectar <b>valores atípicos</b>, puntos alejados del resto que pueden deberse a un error o a una situación excepcional (un mes con una huelga, una campaña especial). Conviene localizarlos antes de calcular nada, porque pueden alterar mucho los resultados.</p><p>Al dibujar la nube no es necesario que los ejes empiecen en cero; basta con que la escala permita ver bien la forma de los datos.</p>`,
      svg: tienda("Nube de puntos de publicidad y ventas de seis meses con tendencia creciente casi lineal", null, "X: publicidad · Y: ventas"),
    },
    {
      h: "Tipos de correlación",
      html: `<p>La <b>correlación</b> es la relación entre dos variables cuantitativas. Según la nube, se distingue:</p><ul><li><b>Correlación positiva o directa</b>: al aumentar X, Y tiende a aumentar. Renta y gasto en ocio; publicidad y ventas; años de estudio y salario.</li><li><b>Correlación negativa o inversa</b>: al aumentar X, Y tiende a disminuir. Precio de un producto y cantidad demandada; edad y horas en redes sociales; renta de un país y mortalidad infantil.</li><li><b>Correlación nula o incorrelación</b>: no hay tendencia; la nube es una mancha sin dirección. Por ejemplo, número de pie y nota media.</li></ul><p>Además, la correlación puede ser <b>fuerte</b> (puntos muy próximos a una recta) o <b>débil</b>. En el caso extremo, si todos los puntos están exactamente sobre una recta, hay una <b>dependencia funcional</b>: Y se calcula a partir de X sin error, como el precio total en función de los kilos comprados.</p><p>Hay que tener cuidado con un caso: dos variables pueden estar fuertemente relacionadas de forma <b>no lineal</b>, por ejemplo con una forma de parábola, y tener una correlación lineal casi nula. Pasa con la edad y los ingresos a lo largo de la vida, que suben hasta la madurez y bajan después de la jubilación. Las medidas de este tema solo detectan relaciones lineales; por eso siempre hay que mirar la nube.</p>`,
      svg: tipos("Cuatro nubes de puntos: correlación positiva fuerte, negativa fuerte, nula y una relación no lineal en forma de parábola con correlación lineal casi nula"),
    },
    {
      h: "Centro de gravedad y covarianza",
      html: `<p>El punto (x̄, ȳ), formado por las medias de las dos variables, se llama <b>centro de gravedad</b> de la nube. En la tienda, x̄ = 21/6 = 3,5 y ȳ = 252/6 = 42.</p><p>Si se trazan una recta vertical y otra horizontal por el centro de gravedad, la nube queda dividida en cuatro cuadrantes. En una correlación positiva, casi todos los puntos están en el primero y el tercero, donde (xᵢ − x̄) y (yᵢ − ȳ) tienen el mismo signo y su producto es positivo. En una negativa, predominan los cuadrantes segundo y cuarto, con productos negativos.</p><p>La <b>covarianza</b> es la media de esos productos:</p><div class="formula"><span>s<sub>xy</sub> = Σ(xᵢ − x̄)(yᵢ − ȳ)/N = Σxᵢyᵢ/N − x̄ · ȳ</span></div><p>La segunda fórmula es más cómoda. En la tienda, Σxᵢyᵢ = 1·30 + 2·34 + 3·41 + 4·43 + 5·50 + 6·54 = 967, así que s<sub>xy</sub> = 967/6 − 3,5 · 42 ≈ 161,17 − 147 = 14,17.</p><p>El <b>signo</b> de la covarianza indica el sentido de la relación: positiva, directa; negativa, inversa; próxima a cero, sin relación lineal. Pero su <b>valor</b> no indica la intensidad, porque depende de las unidades: si las ventas se midieran en euros en lugar de en miles de euros, la covarianza se multiplicaría por 1.000 sin que la relación hubiera cambiado. Hace falta una medida sin unidades.</p>`,
      svg: G("Nube de puntos de publicidad y ventas dividida en cuatro cuadrantes por el centro de gravedad 3,5 y 42; casi todos los puntos están en los cuadrantes primero y tercero", { x0: -0.4, x1: 7, y0: 22, y1: 60, paso: 1, pasoY: 5, etiquetas: true, pasoEtY: 10 }, (E) => `${E.area([[3.5, 42], [7, 42], [7, 60], [3.5, 60]], "var(--leaf)", 0.12)}${E.area([[0, 22], [3.5, 22], [3.5, 42], [0, 42]], "var(--leaf)", 0.12)}${E.curva(() => 42, "var(--muted)", 0, 7, 1.4, 'stroke-dasharray="4 3"')}<path d="M${E.X(3.5)} ${E.Y(22)} V ${E.Y(60)}" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="4 3"/>${P.map(([x, y]) => E.punto(x, y, "var(--pen)", "", 0, 0)).join("")}${E.punto(3.5, 42, "var(--red)", "(3,5; 42)", 8, 14)}${t(E.X(6.6), E.Y(57), "+", { s: 16, b: 1, c: "var(--leaf)" })}${t(E.X(0.6), E.Y(25), "+", { s: 16, b: 1, c: "var(--leaf)" })}${t(E.X(0.6), E.Y(57), "−", { s: 16, b: 1, c: "var(--red)" })}${t(E.X(6.6), E.Y(25), "−", { s: 16, b: 1, c: "var(--red)" })}`),
    },
    {
      h: "El coeficiente de correlación de Pearson",
      html: `<p>Para medir la intensidad de la relación lineal sin depender de las unidades, se divide la covarianza entre el producto de las desviaciones típicas. Se obtiene el <b>coeficiente de correlación lineal de Pearson</b>:</p><div class="formula"><span>r = s<sub>xy</sub> / (s<sub>x</sub> · s<sub>y</sub>)</span></div><p>Recuerda que s<sub>x</sub>² = Σxᵢ²/N − x̄². En la tienda, Σxᵢ² = 91 y Σyᵢ² = 11.002, así que:</p><ul><li>s<sub>x</sub>² = 91/6 − 3,5² ≈ 2,917 → s<sub>x</sub> ≈ 1,708.</li><li>s<sub>y</sub>² = 11.002/6 − 42² ≈ 69,67 → s<sub>y</sub> ≈ 8,347.</li><li>r = 14,17/(1,708 · 8,347) ≈ <b>0,994</b>.</li></ul><p>Propiedades del coeficiente:</p><ul><li>Siempre está entre −1 y 1, y no tiene unidades: no cambia si se mide en euros o en miles de euros.</li><li>Tiene el mismo signo que la covarianza.</li><li>r = 1 o r = −1 solo si todos los puntos están sobre una recta (dependencia funcional).</li><li>r ≈ 0 indica que no hay relación <b>lineal</b>, aunque puede haber otra.</li></ul><p>Para organizar los cálculos a mano conviene una tabla con columnas xᵢ, yᵢ, xᵢ², yᵢ² y xᵢyᵢ, y una fila final con las sumas. Las calculadoras científicas tienen un modo estadístico (REG o STAT) que da directamente x̄, ȳ, s<sub>x</sub>, s<sub>y</sub> y r después de introducir los pares; conviene aprender a usarlo y comprobar con él los resultados.</p>`,
      svg: ficha("Cálculo del coeficiente de correlación de la tienda: covarianza 14,17, desviaciones 1,708 y 8,347, r igual a 0,994", "Coeficiente de Pearson", ["s_xy = 967/6 − 3,5 · 42 = 14,17", "s_x = 1,708   s_y = 8,347", "r = s_xy / (s_x · s_y)", ["r ≈ 0,994", "var(--red)"], ["−1 ≤ r ≤ 1", "var(--muted)", 0]]),
      video: { id: "eTuGHN53kJQ", titulo: "Coeficiente de correlación de Pearson", canal: "Píldoras matemáticas", vistas: 320991, busqueda: "coeficiente de correlación de Pearson" },
    },
    {
      h: "Interpretación del coeficiente de correlación",
      html: `<p>No hay fronteras universales, pero en ciencias sociales suele usarse esta orientación para el valor absoluto de r:</p><ul><li>|r| ≥ 0,9: correlación muy fuerte.</li><li>0,7 ≤ |r| &lt; 0,9: fuerte.</li><li>0,4 ≤ |r| &lt; 0,7: moderada.</li><li>|r| &lt; 0,4: débil o nula.</li></ul><p>En la tienda, r = 0,994 indica una correlación positiva muy fuerte. Con datos sociales reales, que dependen de muchos factores, valores de 0,5 o 0,6 ya se consideran relevantes.</p><p>Una medida muy útil es el <b>coeficiente de determinación</b>, r². Expresa la proporción de la variabilidad de Y que queda explicada por la relación lineal con X. En la tienda, r² ≈ 0,988: el 98,8 % de las diferencias entre las ventas de unos meses y otros se explica por la publicidad, y solo el 1,2 % depende de otros factores. Con r = 0,6, en cambio, r² = 0,36: la relación explica solo el 36 % y el 64 % restante se debe a otras causas. Por eso r = 0,6 no es una relación «al 60 %».</p><p>Dos advertencias. El coeficiente es muy sensible a los <b>valores atípicos</b>: un único punto alejado puede aumentarlo o reducirlo mucho. Y con muestras muy pequeñas (tres o cuatro puntos) se obtienen con facilidad valores altos por pura casualidad, así que hay que desconfiar de conclusiones basadas en pocos datos.</p>`,
      svg: tabla("Orientación para interpretar el valor absoluto del coeficiente de correlación", [["|r|", "Correlación", "r²"], ["0,9 a 1", "muy fuerte", "≥ 81 %"], ["0,7 a 0,9", "fuerte", "49–81 %"], ["0,4 a 0,7", "moderada", "16–49 %"], ["0 a 0,4", "débil o nula", "< 16 %"]], { titulo: "¿Qué indica |r|?", cab: "var(--leaf)" }),
    },
    {
      h: "La recta de regresión de Y sobre X",
      html: `<p>Cuando la correlación es fuerte, la nube se puede resumir con una recta, la <b>recta de regresión</b>. Entre todas las rectas posibles se elige la que hace mínima la suma de los cuadrados de las distancias verticales de los puntos a la recta (los <b>residuos</b>): es el método de los <b>mínimos cuadrados</b>, ideado por Legendre y Gauss.</p><p>La recta de regresión de Y sobre X pasa por el centro de gravedad y tiene como pendiente el <b>coeficiente de regresión</b> s<sub>xy</sub>/s<sub>x</sub>²:</p><div class="formula"><span>y − ȳ = (s<sub>xy</sub> / s<sub>x</sub>²) · (x − x̄)</span></div><p>En la tienda, la pendiente es 14,17/2,917 ≈ 4,857, y la recta queda y − 42 = 4,857(x − 3,5), es decir, <b>y = 4,857x + 25</b>.</p><p>Los coeficientes tienen interpretación económica:</p><ul><li>La <b>pendiente</b> (4,857) indica que, por cada mil euros más de publicidad, las ventas aumentan de media unos 4.857 €. Es el «rendimiento» de la publicidad.</li><li>La <b>ordenada en el origen</b> (25) serían las ventas previstas sin publicidad, 25.000 €, aunque hay que tomarla con cautela porque x = 0 está fuera de los datos observados.</li></ul><p>La pendiente siempre tiene el mismo signo que la covarianza y que r: si la correlación es negativa, la recta es decreciente.</p>`,
      svg: tienda("Nube de puntos de publicidad y ventas con la recta de regresión y igual a 4,857x más 25", ry, "y = 4,857x + 25"),
    },
    {
      h: "Las dos rectas de regresión",
      html: `<p>La recta de Y sobre X sirve para estimar Y conociendo X. Si se quiere estimar X a partir de Y, por ejemplo, cuánta publicidad hace falta para vender una cantidad, se usa la <b>recta de regresión de X sobre Y</b>, que minimiza las distancias horizontales:</p><div class="formula"><span>x − x̄ = (s<sub>xy</sub> / s<sub>y</sub>²) · (y − ȳ)</span></div><p>En la tienda: x − 3,5 = (14,17/69,67)(y − 42), es decir, x = 0,2033y − 5,04. Para vender 50.000 €, x = 0,2033 · 50 − 5,04 ≈ 5,13 miles de euros de publicidad.</p><p>Es un error frecuente despejar x en la recta de Y sobre X: se obtiene una recta distinta, que no es la de mínimos cuadrados para estimar X.</p><p>Las dos rectas tienen propiedades interesantes:</p><ul><li>Ambas pasan por el centro de gravedad (x̄, ȳ), que es su punto de corte.</li><li>El producto de sus coeficientes de regresión es r²: 4,857 · 0,2033 ≈ 0,988.</li><li>Cuanto más fuerte es la correlación, más próximas están. Si |r| = 1, coinciden. Si r = 0, son perpendiculares y paralelas a los ejes: y = ȳ y x = x̄, porque conocer una variable no ayuda a estimar la otra y la mejor estimación es la media.</li></ul><p>En la tienda, con r = 0,994, las dos rectas son casi indistinguibles en la gráfica.</p>`,
      svg: G("Rectas de regresión de una nube con correlación moderada: se cortan en el centro de gravedad 3, 4 y forman un ángulo apreciable", { x0: -0.4, x1: 6, y0: -0.4, y1: 7, paso: 1, pasoY: 1, etiquetas: true }, (E) => `${[[1, 2], [2, 4], [3, 5], [4, 4], [5, 5]].map(([x, y]) => E.punto(x, y, "var(--pen)", "", 0, 0)).join("")}${E.curva((x) => 0.6 * x + 2.2, "var(--red)", 0, 6)}${E.curva((x) => x + 1, "var(--leaf)", 0, 5.8)}${E.punto(3, 4, "var(--ink)", "(3, 4)", 10, 14)}${t(E.X(5.9), E.Y(3.5), "Y sobre X", { s: 10, b: 1, c: "var(--red)", a: "end" })}${t(E.X(4.6), E.Y(6.6), "X sobre Y", { s: 10, b: 1, c: "var(--leaf)", a: "end" })}${t(E.X(0.2), E.Y(6.4), "r ≈ 0,77", { s: 11, b: 1, a: "start" })}`),
    },
    {
      h: "Estimaciones y su fiabilidad",
      html: `<p>La utilidad práctica de la recta es hacer <b>estimaciones</b>: sustituir un valor de X para predecir el de Y. Si la tienda invierte 4.500 € en publicidad, la recta predice y = 4,857 · 4,5 + 25 ≈ 46,9, unas ventas de 46.900 €.</p><p>La <b>fiabilidad</b> de una estimación depende de varios factores:</p><ul><li>Del valor de |r|: cuanto más próximo a 1, más fiable. Con |r| &lt; 0,5, las estimaciones son poco útiles.</li><li>Del tamaño de la muestra: con pocos datos, la recta puede cambiar mucho al añadir uno más.</li><li>Sobre todo, de si el valor está <b>dentro del rango</b> de los datos observados. Estimar dentro de ese rango (<b>interpolar</b>) es razonable; hacerlo fuera (<b>extrapolar</b>) es arriesgado, porque nada garantiza que la relación lineal se mantenga.</li></ul><p>Por ejemplo, la recta de la tienda predice que con 50.000 € de publicidad las ventas serían de 268.000 €. Es muy poco creíble: la publicidad tiene rendimientos decrecientes, y llega un momento en que más anuncios no atraen a más clientes. Un modelo lineal válido entre 1.000 y 6.000 € no tiene por qué serlo para 50.000.</p><p>Las previsiones de población, de paro o de crecimiento económico se basan en modelos más complejos, pero comparten esta limitación: cuanto más lejos del presente se proyectan, más inciertas son.</p>`,
      svg: G("Recta de regresión de la tienda: zona de interpolación entre 1 y 6 mil euros de publicidad y zona de extrapolación a partir de 6, menos fiable", { x0: -0.4, x1: 10, y0: 15, y1: 80, paso: 1, pasoY: 10, etiquetas: true, pasoEt: 2, pasoEtY: 20 }, (E) => `${E.area([[1, 15], [6, 15], [6, 80], [1, 80]], "var(--leaf)", 0.14)}${E.area([[6, 15], [10, 15], [10, 80], [6, 80]], "var(--red)", 0.08)}${P.map(([x, y]) => E.punto(x, y, "var(--pen)", "", 0, 0)).join("")}${E.curva(ry, "var(--pen)", 0, 6, 2.2)}${E.curva(ry, "var(--red)", 6, 10, 2, 'stroke-dasharray="5 4"')}${E.punto(4.5, ry(4.5), "var(--leaf)", "46,9", -8, -8)}${t(E.X(3.5), E.Y(74), "interpolar", { s: 11, b: 1, c: "var(--leaf)" })}${t(E.X(8), E.Y(30), "extrapolar", { s: 11, b: 1, c: "var(--red)" })}${t(E.X(8), E.Y(23), "¡cuidado!", { s: 10, c: "var(--red)" })}`),
    },
    {
      h: "Correlación no es causalidad",
      html: `<p>Una correlación fuerte indica que dos variables varían juntas, pero <b>no demuestra</b> que una cause la otra. Hay varias explicaciones posibles:</p><ul><li><b>Variable oculta</b> o de confusión: un tercer factor influye en ambas. Las ventas de helados y los ahogamientos en playas están correlacionados porque los dos aumentan con el calor. Policías y delitos, porque los dos dependen del tamaño de la ciudad.</li><li><b>Causalidad inversa</b>: la relación existe, pero en sentido contrario. Los hospitales con más médicos especialistas pueden tener más muertes porque reciben los casos más graves, no porque los médicos empeoren a los pacientes.</li><li><b>Casualidad</b>: si se comparan miles de series de datos, algunas coincidirán por azar. Existen correlaciones de 0,99 entre el consumo de queso y las muertes por enredarse en las sábanas.</li></ul><p>Para establecer una relación causal hacen falta otros métodos: <b>experimentos</b> con grupos de control elegidos al azar, como los ensayos clínicos, o técnicas que controlan las variables de confusión. Los economistas Angrist, Card e Imbens recibieron el Nobel de Economía de 2021 por desarrollar métodos para extraer conclusiones causales a partir de datos observados, como el efecto del salario mínimo sobre el empleo.</p><p>Al leer una noticia del tipo «quienes hacen X tienen más Y», pregúntate siempre si hay una variable oculta, si la causa podría ir al revés y si el estudio era un experimento.</p>`,
      svg: compara("Diferencia entre correlación, que indica que dos variables varían juntas, y causalidad, que requiere experimentos o controlar variables ocultas", ["Correlación", "var(--pen)", ["varían juntas", "helados y ahogamientos", "se mide con r", "datos observados"]], ["Causalidad", "var(--red)", ["una provoca la otra", "el calor causa ambas", "requiere experimentos", "grupo de control"]], "r alto no implica causa"),
    },
  ],
  ejemplos: [
    ["En una encuesta a 300 personas, 120 de 180 mujeres y 60 de 120 hombres usan el transporte público. ¿Son independientes sexo y uso del transporte público?", ["Condicionadas: mujeres 120/180 ≈ 66,7 %; hombres 60/120 = 50 %.", "Marginal: 180/300 = 60 % usa transporte público.", "Las condicionadas son distintas entre sí."], "Son dependientes: las mujeres de la muestra usan más el transporte público."],
    ["Para cinco familias, renta mensual X (cientos de €): 10, 15, 20, 25, 30; gasto en ocio Y (decenas de €): 9, 13, 16, 19, 23. Calcula el centro de gravedad y la covarianza.", ["x̄ = 100/5 = 20; ȳ = 80/5 = 16.", "Σxy = 90 + 195 + 320 + 475 + 690 = 1.770.", "s<sub>xy</sub> = 1.770/5 − 20 · 16 = 354 − 320 = 34."], "Centro (20, 16); s<sub>xy</sub> = 34, relación directa."],
    ["Con los datos anteriores, calcula r sabiendo que Σx² = 2.250 y Σy² = 1.396.", ["s<sub>x</sub>² = 450 − 400 = 50 → s<sub>x</sub> ≈ 7,071.", "s<sub>y</sub>² = 279,2 − 256 = 23,2 → s<sub>y</sub> ≈ 4,817.", "r = 34/(7,071 · 4,817) ≈ 0,998."], "r ≈ 0,998: correlación positiva muy fuerte."],
    ["Halla la recta de regresión de Y sobre X para la renta y el gasto en ocio y estima el gasto de una familia con 2.200 € de renta.", ["Pendiente: 34/50 = 0,68.", "y − 16 = 0,68(x − 20) → y = 0,68x + 2,4.", "x = 22: y = 14,96 + 2,4 = 17,36."], "y = 0,68x + 2,4; gasto estimado ≈ 173,6 € (fiable: r ≈ 1 e interpolación)."],
    ["El precio de un producto X (€) y la demanda semanal Y (unidades) son: (2, 50), (4, 42), (6, 36), (8, 28), (10, 24). Sabiendo que s<sub>xy</sub> = −26,4, s<sub>x</sub>² = 8 y s<sub>y</sub>² = 88, calcula r y la recta de Y sobre X.", ["r = −26,4/√(8 · 88) = −26,4/26,53 ≈ −0,995.", "x̄ = 6, ȳ = 36. Pendiente −26,4/8 = −3,3.", "y − 36 = −3,3(x − 6) → y = −3,3x + 55,8."], "r ≈ −0,995 (relación inversa muy fuerte); y = −3,3x + 55,8: cada euro más reduce la demanda en 3,3 unidades."],
    ["Las rectas de regresión de un estudio son y = 0,8x + 2 y x = 0,5y + 1. Halla el centro de gravedad y el coeficiente de correlación.", ["Se cortan en (x̄, ȳ): x = 0,5(0,8x + 2) + 1 = 0,4x + 2 → x = 10/3 ≈ 3,33; y ≈ 4,67.", "r² = 0,8 · 0,5 = 0,4.", "r tiene el signo de las pendientes (positivo)."], "Centro (3,33; 4,67); r = √0,4 ≈ 0,63: correlación positiva moderada."],
  ],
  errores: [
    "Interpretar el valor de la covarianza como medida de la intensidad, cuando depende de las unidades.",
    "Concluir que hay relación causal a partir de una correlación fuerte.",
    "Pensar que r ≈ 0 significa que no hay ninguna relación (puede haberla no lineal).",
    "Despejar x en la recta de Y sobre X para estimar X, en lugar de usar la recta de X sobre Y.",
    "Extrapolar con la recta de regresión muy lejos del rango de los datos.",
    "Leer r = 0,6 como «relación al 60 %», cuando lo que explica la recta es r² = 36 %.",
  ],
  ejercicios: {
    b: [
      ["Indica si la correlación esperable es positiva, negativa o nula: a) renta y gasto en vivienda; b) precio de la gasolina y litros vendidos; c) día del mes de nacimiento y salario.", "a) Positiva. b) Negativa. c) Nula."],
      ["En la tabla de edad y medio de información (200 personas), ¿qué porcentaje del total son adultos que se informan por televisión?", "60/200 = 30 %."],
      ["En la misma tabla, calcula la distribución condicionada de la edad entre quienes se informan por prensa.", "Prensa: 40 personas. Jóvenes 10/40 = 25 %; adultos 30/40 = 75 %."],
      ["Calcula el centro de gravedad de los datos X: 2, 4, 6, 8; Y: 5, 9, 10, 16.", "x̄ = 20/4 = 5; ȳ = 40/4 = 10. Centro (5, 10)."],
      ["Con N = 4, Σxy = 234, x̄ = 5 e ȳ = 10, calcula la covarianza.", "s<sub>xy</sub> = 234/4 − 50 = 58,5 − 50 = 8,5."],
      ["Si s<sub>xy</sub> = 12, s<sub>x</sub> = 3 y s<sub>y</sub> = 5, calcula e interpreta r.", "r = 12/15 = 0,8: correlación positiva fuerte."],
      ["Si r = 0,9, ¿qué porcentaje de la variabilidad de Y explica la recta?", "r² = 0,81: el 81 %."],
      ["Con x̄ = 5, ȳ = 20, s<sub>xy</sub> = 8 y s<sub>x</sub>² = 4, escribe la recta de Y sobre X.", "Pendiente 8/4 = 2. y − 20 = 2(x − 5) → y = 2x + 10."],
      ["La recta que relaciona horas de formación (x) y productividad (y) es y = 1,5x + 20. Estima la productividad con 10 horas.", "y = 15 + 20 = 35."],
      ["¿Puede ser r = 1,2? ¿Y r = −0,3? Razona.", "r = 1,2 no, porque −1 ≤ r ≤ 1. r = −0,3 sí: correlación negativa débil."],
    ],
    m: [
      ["Para X: 2, 4, 6, 8; Y: 5, 9, 10, 16, calcula r sabiendo que Σx² = 120 y Σy² = 462, y la recta de Y sobre X.", "s<sub>x</sub>² = 30 − 25 = 5; s<sub>y</sub>² = 115,5 − 100 = 15,5; s<sub>xy</sub> = 8,5. r = 8,5/(2,236 · 3,937) ≈ 0,966. Pendiente 8,5/5 = 1,7: y = 1,7x + 1,5."],
      ["Para X: 1, 2, 3, 4, 5; Y: 2, 4, 5, 4, 5, calcula r y las dos rectas de regresión.", "x̄ = 3, ȳ = 4, s<sub>x</sub>² = 2, s<sub>y</sub>² = 1,2, s<sub>xy</sub> = 66/5 − 12 = 1,2. r = 1,2/√2,4 ≈ 0,775. Y sobre X: y = 0,6x + 2,2. X sobre Y: x − 3 = 1 · (y − 4) → x = y − 1."],
      ["La edad X de cinco personas (20, 30, 40, 50, 60) y sus horas diarias en redes Y (3,2; 2,6; 2,2; 1,6; 1,4) dan s<sub>xy</sub> = −9,2, s<sub>x</sub>² = 200 y s<sub>y</sub>² = 0,432. Calcula r, la recta de Y sobre X y estima Y para 35 años.", "r = −9,2/(14,142 · 0,657) ≈ −0,99. Pendiente −0,046: y = −0,046x + 4,04. Para 35: y ≈ 2,43 h."],
      ["Con N = 10, Σx = 50, Σy = 120, Σx² = 290, Σy² = 1.560 y Σxy = 640, calcula r y la recta de Y sobre X.", "x̄ = 5, ȳ = 12, s<sub>x</sub>² = 4, s<sub>y</sub>² = 12, s<sub>xy</sub> = 64 − 60 = 4. r = 4/(2 · 3,464) ≈ 0,577. y − 12 = 1 · (x − 5) → y = x + 7."],
      ["Una tabla de contingencia de 400 estudiantes cruza «hace deporte» (sí/no) con «aprueba todo» (sí/no): sí-sí 150, sí-no 50, no-sí 90, no-no 110. ¿Son independientes?", "Aprueban: 150/200 = 75 % de los que hacen deporte y 90/200 = 45 % de los que no. Son dependientes (aunque eso no prueba que el deporte cause el aprobado)."],
      ["En la tabla anterior, calcula la frecuencia esperada de «deporte y aprueba» si hubiera independencia y compárala con la observada.", "Marginales: deporte 200, aprueban 240. Esperada = 200 · 240/400 = 120. Observada 150: hay 30 más de lo esperado."],
      ["Las rectas de regresión de un estudio son y = 2x − 1 y x = 0,4y + 1. Halla x̄, ȳ y r.", "x = 0,4(2x − 1) + 1 = 0,8x + 0,6 → x = 3, y = 5. r² = 2 · 0,4 = 0,8 → r ≈ 0,894."],
      ["Con los datos de la tienda (x = 0,2033y − 5,04), ¿qué publicidad haría falta para vender 45.000 €? ¿Es fiable?", "x = 0,2033 · 45 − 5,04 ≈ 4,11 miles de €. Sí: r ≈ 0,994 y 45 está dentro del rango de ventas observado."],
      ["Los visitantes (miles) de un museo en los años 1 a 5 fueron 150, 170, 195, 210, 235, con s<sub>xy</sub> = 42 y s<sub>x</sub>² = 2. Halla la recta y estima el año 6. ¿Y el año 30?", "Pendiente 21; ȳ = 192, x̄ = 3: y = 21x + 129. Año 6: 255 mil (extrapolación cercana, aceptable). Año 30: 759 mil; es muy poco fiable, extrapolación lejana."],
      ["Si se multiplican todas las ventas por 1.000 (de miles de euros a euros), ¿qué ocurre con la covarianza, con r y con la pendiente de la recta de Y sobre X?", "La covarianza y la pendiente se multiplican por 1.000; r no cambia, porque no tiene unidades."],
      ["Para X: 1 a 8 y Y: 8, 9, 7, 10, 8, 9, 8, 9 se obtiene r ≈ 0,19. Interprétalo y di si tiene sentido usar la recta para estimar.", "Correlación positiva muy débil (r² ≈ 3,6 %): la recta no sirve para estimar; la mejor previsión de Y es su media, 8,5."],
      ["Un estudio encuentra que los municipios con más bibliotecas tienen menos abandono escolar (r = −0,7). Propón una variable oculta.", "La renta media o el tamaño del municipio: los municipios con más recursos tienen más bibliotecas y menos abandono."],
    ],
    a: [
      ["Demuestra que la recta de regresión de Y sobre X pasa por el centro de gravedad.", "Su ecuación es y − ȳ = (s<sub>xy</sub>/s<sub>x</sub>²)(x − x̄). Sustituyendo x = x̄ se obtiene y − ȳ = 0, es decir, y = ȳ."],
      ["Comprueba que el producto de los coeficientes de regresión es r².", "(s<sub>xy</sub>/s<sub>x</sub>²)(s<sub>xy</sub>/s<sub>y</sub>²) = s<sub>xy</sub>²/(s<sub>x</sub>² s<sub>y</sub>²) = [s<sub>xy</sub>/(s<sub>x</sub>s<sub>y</sub>)]² = r²."],
      ["Una empresa estudia sus ventas Y (miles de €) según el número de comerciales X: (2, 40), (3, 52), (5, 70), (6, 85), (9, 120). Calcula r y la recta de Y sobre X, y estima las ventas con 7 comerciales.", "x̄ = 5, ȳ = 73,4. Σx² = 155, Σy² = 30.829, Σxy = 2.176. s<sub>x</sub>² = 6, s<sub>y</sub>² ≈ 778,24, s<sub>xy</sub> = 435,2 − 367 = 68,2. r ≈ 68,2/(2,449 · 27,9) ≈ 0,998. Pendiente 68,2/6 ≈ 11,37: y ≈ 11,37x + 16,57. Con 7: ≈ 96,1 mil €."],
      ["Construye un ejemplo de cinco puntos con r = 0 pero con una relación clara entre X e Y.", "Por ejemplo, (−2, 4), (−1, 1), (0, 0), (1, 1), (2, 4), con y = x². x̄ = 0 y Σxy = −8 − 1 + 0 + 1 + 8 = 0, así que s<sub>xy</sub> = 0 y r = 0, aunque la relación es exacta (no lineal)."],
      ["En una muestra de 6 puntos con r = 0,2, se añade un punto muy alejado y r pasa a 0,8. ¿Qué indica esto? ¿Qué harías?", "Que r es muy sensible a los valores atípicos: la correlación «fuerte» la crea un solo punto. Hay que revisar si es un error, analizarlo aparte y presentar los resultados con y sin él."],
      ["Halla las rectas de regresión si x̄ = 10, ȳ = 50, s<sub>x</sub> = 2, s<sub>y</sub> = 8 y r = −0,75.", "s<sub>xy</sub> = −0,75 · 16 = −12. Y sobre X: pendiente −12/4 = −3 → y = −3x + 80. X sobre Y: pendiente −12/64 = −0,1875 → x = −0,1875y + 19,375."],
      ["Una noticia afirma: «Los alumnos que desayunan en casa sacan mejores notas; hay que obligar a desayunar». Analiza críticamente la conclusión.", "Es una correlación de datos observados. Puede haber variables ocultas (nivel socioeconómico, hábitos familiares, horas de sueño) que influyen en las dos. Para afirmar causalidad haría falta un experimento con grupos asignados al azar."],
      ["Para dos variables se sabe que la recta de Y sobre X es y = 0,5x + 3 y que s<sub>x</sub> = 4, s<sub>y</sub> = 2,5. Calcula r y la recta de X sobre Y, sabiendo que x̄ = 6.", "s<sub>xy</sub> = 0,5 · 16 = 8; r = 8/(4 · 2,5) = 0,8. ȳ = 0,5 · 6 + 3 = 6. Pendiente de X sobre Y: 8/6,25 = 1,28 → x − 6 = 1,28(y − 6) → x = 1,28y − 1,68."],
    ],
  },
  quiz: [
    ["Una variable bidimensional asocia a cada individuo…", ["un par de valores", "un único valor", "una frecuencia", "una recta"], "(xᵢ, yᵢ)."],
    ["En una tabla de contingencia, los totales de filas y columnas forman…", ["las distribuciones marginales", "las condicionadas", "la covarianza", "la recta"], "Están en los márgenes."],
    ["Si las distribuciones condicionadas son iguales, las variables son…", ["independientes", "dependientes", "proporcionales", "lineales"], "Conocer una no informa de la otra."],
    ["Con independencia, la frecuencia esperada es…", ["nᵢ · nⱼ / N", "nᵢ + nⱼ", "nᵢ / nⱼ", "N / nᵢ"], "Producto de marginales entre el total."],
    ["Una nube que sube hacia la derecha indica correlación…", ["positiva", "negativa", "nula", "no lineal"], "Relación directa."],
    ["Precio y cantidad demandada suelen tener correlación…", ["negativa", "positiva", "nula", "perfecta"], "Ley de la demanda."],
    ["El centro de gravedad de la nube es…", ["(x̄, ȳ)", "(0, 0)", "(s<sub>x</sub>, s<sub>y</sub>)", "el punto más alto"], "Las medias."],
    ["s<sub>xy</sub> =", ["Σxᵢyᵢ/N − x̄ȳ", "Σxᵢyᵢ − x̄ȳ", "x̄ · ȳ", "s<sub>x</sub> · s<sub>y</sub>"], "Fórmula abreviada."],
    ["La covarianza no sirve para medir la intensidad porque…", ["depende de las unidades", "siempre es positiva", "está entre −1 y 1", "no tiene signo"], "Cambia con la escala."],
    ["r =", ["s<sub>xy</sub>/(s<sub>x</sub>s<sub>y</sub>)", "s<sub>xy</sub>/s<sub>x</sub>²", "s<sub>x</sub>s<sub>y</sub>/s<sub>xy</sub>", "s<sub>xy</sub> · s<sub>x</sub>"], "Coeficiente de Pearson."],
    ["El coeficiente de correlación está siempre entre…", ["−1 y 1", "0 y 1", "0 y 100", "−∞ y +∞"], "Propiedad de r."],
    ["Si r = −0,95, la correlación es…", ["negativa muy fuerte", "positiva fuerte", "débil", "nula"], "|r| próximo a 1."],
    ["Si r = 0,7, la recta explica…", ["el 49 % de la variabilidad", "el 70 %", "el 30 %", "el 7 %"], "r² = 0,49."],
    ["r ≈ 0 significa que…", ["no hay relación lineal", "no hay ninguna relación", "las variables son iguales", "hay causalidad"], "Puede haber una no lineal."],
    ["La recta de regresión de Y sobre X pasa por…", ["(x̄, ȳ)", "el origen", "el primer dato", "(s<sub>x</sub>, s<sub>y</sub>)"], "Siempre."],
    ["La pendiente de la recta de Y sobre X es…", ["s<sub>xy</sub>/s<sub>x</sub>²", "s<sub>xy</sub>/s<sub>y</sub>²", "r", "x̄/ȳ"], "Coeficiente de regresión."],
    ["Para estimar X conociendo Y se usa…", ["la recta de X sobre Y", "la de Y sobre X despejada", "la media de Y", "r"], "Minimiza distancias horizontales."],
    ["Si |r| = 1, las dos rectas de regresión…", ["coinciden", "son perpendiculares", "son paralelas", "no existen"], "Dependencia funcional."],
    ["Estimar fuera del rango de los datos se llama…", ["extrapolar", "interpolar", "regresar", "correlacionar"], "Es arriesgado."],
    ["Helados vendidos y ahogamientos están correlacionados porque…", ["ambos dependen del calor", "los helados causan ahogamientos", "es una ley", "r = 0"], "Variable oculta."],
  ],
  examen: [
    ["Con N = 5, Σxy = 200, x̄ = 4 e ȳ = 8, la covarianza es…", ["8", "40", "32", "−8"], "40 − 32."],
    ["Si s<sub>xy</sub> = −6, s<sub>x</sub> = 2 y s<sub>y</sub> = 5, r =", ["−0,6", "−0,3", "0,6", "−1,2"], "−6/10."],
    ["Con x̄ = 3, ȳ = 10, s<sub>xy</sub> = 6 y s<sub>x</sub>² = 2, la recta de Y sobre X es…", ["y = 3x + 1", "y = 3x + 10", "y = 2x + 4", "y = x + 7"], "y − 10 = 3(x − 3)."],
    ["Si las rectas de regresión son y = 0,9x + 1 y x = 0,4y + 2, r² vale…", ["0,36", "1,3", "0,9", "0,4"], "0,9 · 0,4."],
    ["En 100 personas, 30 de 40 jóvenes y 30 de 60 adultos compran en línea. Con independencia, cuántos jóvenes compradores se esperarían…", ["24", "30", "20", "40"], "40 · 60/100."],
    ["Si r = 0,5, el porcentaje de variabilidad explicado es…", ["25 %", "50 %", "5 %", "75 %"], "r² = 0,25."],
    ["La recta y = −2x + 50 indica que, al aumentar x en una unidad, y…", ["disminuye 2 unidades de media", "aumenta 2", "disminuye 50", "no cambia"], "Pendiente."],
    ["¿Qué estimación con y = 4,857x + 25 (datos con x entre 1 y 6) es más fiable?", ["x = 3,5", "x = 10", "x = 0", "x = 50"], "Interpolación en el centro."],
  ],
  feynman: ["Por qué hay que comparar distribuciones condicionadas para saber si dos variables cualitativas están relacionadas", "Qué mide la covarianza y por qué depende de las unidades", "Por qué r² y no r indica qué parte de la variabilidad explica la recta", "Por qué hay dos rectas de regresión distintas", "Por qué una correlación fuerte no demuestra que una variable cause la otra"],
  glosario: [
    ["Variable bidimensional", "Par de variables (X, Y) observadas en los mismos individuos."],
    ["Tabla de contingencia", "Tabla de doble entrada con las frecuencias conjuntas de dos variables."],
    ["Distribución marginal", "Distribución de una sola variable, obtenida de los totales de la tabla."],
    ["Distribución condicionada", "Distribución de una variable restringida a una modalidad de la otra."],
    ["Independencia", "Situación en que las distribuciones condicionadas coinciden con la marginal."],
    ["Nube de puntos", "Representación de los pares (xᵢ, yᵢ) en unos ejes; también diagrama de dispersión."],
    ["Correlación", "Relación entre dos variables cuantitativas; puede ser positiva, negativa o nula."],
    ["Centro de gravedad", "Punto (x̄, ȳ) de la nube."],
    ["Covarianza", "s<sub>xy</sub> = Σxᵢyᵢ/N − x̄ȳ; su signo indica el sentido de la relación."],
    ["Coeficiente de correlación", "r = s<sub>xy</sub>/(s<sub>x</sub>s<sub>y</sub>), entre −1 y 1; mide la intensidad de la relación lineal."],
    ["Coeficiente de determinación", "r²: proporción de la variabilidad de Y explicada por la recta."],
    ["Recta de regresión", "Recta de mínimos cuadrados que resume la nube y sirve para estimar."],
    ["Coeficiente de regresión", "Pendiente de la recta de regresión, s<sub>xy</sub>/s<sub>x</sub>²."],
    ["Interpolar", "Estimar dentro del rango de los datos observados."],
    ["Extrapolar", "Estimar fuera del rango de los datos; es arriesgado."],
    ["Variable oculta", "Tercera variable que influye en las dos estudiadas y produce una correlación sin causa directa."],
  ],
  situacion: {
    titulo: "¿Qué explica la renta de los municipios?",
    reto: "Vuestro grupo es un equipo de análisis de un periódico. Debéis investigar, con datos públicos del INE o del Idescat, si la renta media de los municipios de vuestra provincia se relaciona con otras variables (paro, nivel de estudios, edad media, tamaño) y escribir un artículo riguroso.",
    pasos: [
      "Elegid al menos 15 municipios y descargad su renta media y dos variables más de fuentes oficiales.",
      "Dibujad las nubes de puntos y describid forma, sentido, intensidad y valores atípicos.",
      "Calculad, con hoja de cálculo, r, r² y la recta de regresión para cada par.",
      "Usad la mejor recta para hacer una estimación razonable y discutid su fiabilidad.",
      "Analizad posibles variables ocultas y explicad por qué las correlaciones no demuestran causas.",
    ],
    producto: "Un artículo periodístico de una página con gráficos, coeficientes, una estimación y un recuadro titulado «Lo que estos datos no dicen».",
    evaluacion: [
      "Obtiene los datos de fuentes oficiales y los organiza correctamente.",
      "Calcula e interpreta bien r, r² y la recta de regresión.",
      "Valora la fiabilidad de las estimaciones (interpolación, tamaño muestral, atípicos).",
      "Distingue con claridad correlación y causalidad.",
    ],
  },
  figura: ["Estadística bidimensional de un vistazo", "Resumen de tablas de contingencia, correlación, regresión y causalidad", [
    ["Tablas", ["frecuencias conjuntas", "marginales", "condicionadas", "independencia"]],
    ["Correlación", ["nube de puntos", "s_xy: signo", "r: intensidad", "r²: % explicado"]],
    ["Regresión", ["mínimos cuadrados", "pasa por (x̄, ȳ)", "pendiente s_xy/s_x²", "interpolar sí"]],
    ["Cautelas", ["atípicos", "no lineal", "extrapolar no", "no es causa"]],
  ]],
  video: { id: "bnOBA0MQhlI", titulo: "Mínimos cuadrados, regresión lineal y correlación lineal", canal: "mate4u", vistas: 52629, busqueda: "regresión lineal y correlación" },
  mapa: ["BIDIMENSIONAL", [
    ["Cualitativas", "tablas · marginales · condicionadas"],
    ["Correlación", "nube · covarianza · r"],
    ["Regresión", "rectas · estimaciones"],
    ["Interpretación", "r² · fiabilidad · causalidad"],
  ]],
  tarjetas: [
    ["Distribución marginal", "Totales de filas o columnas: una sola variable."],
    ["Distribución condicionada", "Una variable dentro de una modalidad de la otra."],
    ["Independencia", "Condicionadas iguales; nᵢⱼ = nᵢ · nⱼ / N."],
    ["Centro de gravedad", "(x̄, ȳ)"],
    ["Covarianza", "s<sub>xy</sub> = Σxᵢyᵢ/N − x̄ · ȳ"],
    ["Coeficiente de correlación", "r = s<sub>xy</sub>/(s<sub>x</sub> · s<sub>y</sub>), −1 ≤ r ≤ 1"],
    ["r²", "Proporción de variabilidad de Y explicada por la recta."],
    ["Recta de Y sobre X", "y − ȳ = (s<sub>xy</sub>/s<sub>x</sub>²)(x − x̄)"],
    ["Recta de X sobre Y", "x − x̄ = (s<sub>xy</sub>/s<sub>y</sub>²)(y − ȳ)"],
    ["Producto de pendientes", "(s<sub>xy</sub>/s<sub>x</sub>²) · (s<sub>xy</sub>/s<sub>y</sub>²) = r²"],
    ["Interpolar y extrapolar", "Dentro del rango, fiable; fuera, arriesgado."],
    ["Correlación y causa", "Variable oculta, causa inversa o casualidad."],
  ],
  familias: ["Buscad una noticia del tipo «los que hacen X tienen más Y» y comentad si podría haber una variable oculta.", "Anotad durante dos semanas el gasto diario en comida y la temperatura y dibujad la nube.", "Consultad en el INE la renta y el paro de vuestra comunidad y comparadlos con otras.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  saberes: "Sentido estocástico: organización de datos bidimensionales en tablas de contingencia; distribuciones marginales y condicionadas; dependencia e independencia de variables cualitativas; nube de puntos; covarianza y coeficiente de correlación lineal; rectas de regresión y estimaciones; coeficiente de determinación; correlación y causalidad; uso de la hoja de cálculo (RD 243/2022, Matemáticas Aplicadas a las Ciencias Sociales I, saberes básicos E. Sentido estocástico; Decret 171/2022, Matemàtiques aplicades a les ciències socials I, sentit estocàstic).",
  ideas: ["Cálculo de r y de la recta con hoja de cálculo y con la calculadora.", "Análisis de datos del INE o del Idescat por municipios.", "Debate sobre noticias que confunden correlación y causalidad.", "Encuesta en el centro y tablas de contingencia."],
  fuentes: [wiki("Correlación", "Correlación"), wiki("Regresión lineal", "Regresión lineal"), wiki("Tabla de contingencia", "Tabla de contingencia"), { t: "Instituto Nacional de Estadística, Atlas de distribución de renta de los hogares", url: "https://www.ine.es/experimental/atlas/experimental_atlas.htm" }],
});
