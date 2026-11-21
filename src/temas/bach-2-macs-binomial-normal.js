// Matemáticas Aplicadas a las Ciencias Sociales II · 2º Bachillerato · Tema 10. Nivel libro. Dibujos propios en SVG.
const { reparte, mapa, lienzo, t, tarjeta, fig, rejilla, G, normal, RD } = require("./_bach2-macs");

// Diagrama de barras de una distribución discreta: valores [[x, p]], una barra resaltada opcional.
const barras = (aria, datos, o = {}) => {
  const { y1 = 0.42, pasoY = 0.1, marca = [], pie = "" } = o;
  const w = 260, h = 180, n = datos.length, x0 = 40, x1 = 246, yb = 150, yt = 24;
  const X = (k) => x0 + ((k + 0.5) * (x1 - x0)) / n, Y = (v) => yb - (v / y1) * (yb - yt), bw = Math.min(34, ((x1 - x0) / n) * 0.66);
  let s = "";
  for (let v = pasoY; v < y1 + 1e-9; v += pasoY) s += `<path d="M${x0} ${Y(v).toFixed(1)} H ${x1}" stroke="var(--grid)" stroke-width="1"/>${t(x0 - 4, Y(v) + 3, String(+v.toFixed(2)).replace(".", ","), { s: 9, c: "var(--muted)", a: "end" })}`;
  datos.forEach(([x, p], k) => { const m = marca.includes(x); s += `<rect x="${(X(k) - bw / 2).toFixed(1)}" y="${Y(p).toFixed(1)}" width="${bw.toFixed(1)}" height="${(yb - Y(p)).toFixed(1)}" fill="${m ? "var(--red)" : "var(--pen)"}" fill-opacity="${m ? 0.75 : 0.55}"/>${t(X(k), yb + 13, String(x), { s: 10, b: 1, c: "var(--muted)" })}`; });
  s += `<path d="M${x0} ${yt - 6} V ${yb} H ${x1}" fill="none" stroke="var(--muted)" stroke-width="1.6"/>`;
  if (pie) s += t(x1, 16, pie, { s: 11, b: 1, c: "var(--ink)", a: "end" });
  return lienzo(aria, s, w, h);
};
const B5 = [[0, 0.16807], [1, 0.36015], [2, 0.3087], [3, 0.1323], [4, 0.02835], [5, 0.00243]];

module.exports = {
  materia: "Matemáticas Aplicadas a las Ciencias Sociales II",
  curso: "2-bachillerato",
  titulo: "Distribuciones binomial y normal",
  minutos: 120,
  objetivos: [
    "Describir una variable aleatoria discreta con su tabla de probabilidades, su media y su desviación típica",
    "Reconocer situaciones que siguen una distribución binomial y calcular probabilidades con ella",
    "Comprender que en una variable continua las probabilidades son áreas bajo la función de densidad",
    "Manejar la distribución normal: tipificación y uso de la tabla N(0, 1)",
    "Resolver problemas inversos: hallar el valor que deja una probabilidad dada",
    "Aproximar la binomial por la normal con la corrección por continuidad",
  ],
  claves: ["variable aleatoria", "función de probabilidad", "esperanza", "desviación típica", "distribución binomial", "variable continua", "función de densidad", "distribución normal", "tipificación", "N(0, 1)", "percentil", "corrección por continuidad"],
  lectura: {
    titulo: "La forma de la casualidad",
    html: `<p>Mide la estatura de mil personas, las notas de la PAU de toda una comunidad o el tiempo que tardan los autobuses en llegar, y dibuja un histograma. Una y otra vez aparece la misma silueta: una <b>campana</b> simétrica, con muchos valores en el centro y cada vez menos hacia los extremos. Es la <b>distribución normal</b>, también llamada campana de Gauss.</p>
    <p>Abraham de Moivre la descubrió en 1733 estudiando juegos de azar: al lanzar muchas veces una moneda, el número de caras se reparte justamente con esa forma. Gauss la usó después para describir los errores de las medidas astronómicas, y el belga Adolphe Quetelet, en el siglo XIX, la aplicó a la sociedad: estaturas, pesos, tasas de criminalidad… Fundó así la estadística social.</p>
    <p>En este tema estudiarás dos modelos que explican una gran parte de los fenómenos aleatorios: la <b>binomial</b>, que cuenta éxitos en pruebas repetidas, y la <b>normal</b>, que describe magnitudes continuas. Son la base de la inferencia estadística, que verás en los dos temas siguientes.</p>`,
  },
  pregunta: {
    texto: "El gasto mensual en ocio de los jóvenes de una ciudad sigue una normal de media 120 € y desviación típica 20 €. ¿Qué porcentaje gasta más de 150 €?",
    respuesta: "Se tipifica: z = (150 − 120)/20 = 1,5. P(X &gt; 150) = P(Z &gt; 1,5) = 1 − 0,9332 = <mark>0,0668</mark>. Aproximadamente el <b>6,7 %</b> de los jóvenes gasta más de 150 € al mes.",
  },
  bloques: [
    {
      html: `<h3>10.1 Variables aleatorias discretas</h3><p>Una <b>variable aleatoria</b> asigna un número a cada resultado de un experimento aleatorio. Es <b>discreta</b> si toma valores aislados (que se pueden contar): número de hijos, de clientes, de aciertos.</p><p>Se describe con su <b>función de probabilidad</b>: la tabla de valores xᵢ con sus probabilidades pᵢ, que deben sumar 1.</p><p>Ejemplo: X = número de caras al lanzar dos monedas.</p><table class="tb"><tr><th>xᵢ</th><td>0</td><td>1</td><td>2</td></tr><tr><th>pᵢ</th><td>1/4</td><td>1/2</td><td>1/4</td></tr></table><p>Igual que una tabla de frecuencias, tiene <b>media</b> y <b>desviación típica</b>:</p><ul><li><b>Media o esperanza</b>: μ = Σ xᵢ pᵢ. Es el valor medio «a la larga», si el experimento se repite muchas veces.</li><li><b>Varianza</b>: σ² = Σ xᵢ² pᵢ − μ². La <b>desviación típica</b> σ es su raíz cuadrada.</li></ul><p>En el ejemplo: μ = 0 · 1/4 + 1 · 1/2 + 2 · 1/4 = 1 cara. σ² = 0 + 1/2 + 4 · 1/4 − 1 = 0,5 → σ ≈ 0,71.</p><p><b>Aplicación: juegos y seguros</b>. Un juego cuesta 2 € y se gana 10 € con probabilidad 0,15. La ganancia neta X vale 8 € (prob. 0,15) o −2 € (prob. 0,85). μ = 8 · 0,15 − 2 · 0,85 = −0,5 €: a la larga se pierde medio euro por partida. Un juego es <b>equitativo</b> si su esperanza es 0. Las aseguradoras calculan así sus primas: la prima debe superar la indemnización esperada.</p>`,
      svg: barras("Distribución del número de caras al lanzar dos monedas: barras de altura un cuarto, un medio y un cuarto", [[0, 0.25], [1, 0.5], [2, 0.25]], { y1: 0.6, marca: [1], pie: "μ = 1, σ ≈ 0,71" }),
    },
    {
      html: `<h3>10.2 La distribución binomial</h3><p>Muchas situaciones tienen esta estructura:</p><ul><li>Se repite <b>n veces</b> una misma prueba.</li><li>Cada vez solo hay dos resultados: <b>éxito</b> (con probabilidad p) o <b>fracaso</b> (con probabilidad q = 1 − p).</li><li>Las pruebas son <b>independientes</b>, así que p no cambia.</li></ul><p>Entonces X = <b>número de éxitos</b> sigue una distribución <b>binomial</b> B(n, p), y</p><p style="text-align:center"><b>P(X = k) = C(n, k) · pᵏ · qⁿ⁻ᵏ</b>, con C(n, k) = n! / (k! (n − k)!)</p><p>El número combinatorio C(n, k) cuenta de cuántas maneras se pueden repartir los k éxitos entre las n pruebas; pᵏqⁿ⁻ᵏ es la probabilidad de cada una de esas maneras.</p><p>Ejemplos de binomiales: número de clientes que compran entre 20 que entran (si cada uno compra con probabilidad 0,3), número de piezas defectuosas en un lote, número de encuestados que responden «sí», número de aciertos en un test contestando al azar.</p><p><b>No</b> es binomial, por ejemplo, el número de bolas rojas al sacar varias <b>sin reemplazamiento</b> de una urna pequeña, porque p cambia en cada extracción. Si la población es muy grande comparada con la muestra (por ejemplo, encuestar a 1 000 personas de un país), se considera binomial igualmente.</p>`,
      svg: barras("Distribución binomial B(5; 0,3): la barra más alta está en 1 éxito", B5, { y1: 0.42, pie: "B(5; 0,3)" }),
      video: { id: "EMRag5uvqBA", titulo: "Distribución binomial: ejercicio resuelto paso a paso", canal: "Montero Espinosa (SPyB)", vistas: 935498, busqueda: "distribución binomial ejercicios" },
    },
    {
      html: `<h3>10.3 Cálculos con la binomial</h3><p>Ejemplo: el 10 % de los clientes de una tienda en línea devuelve el pedido. Se eligen 6 pedidos al azar. X = número de devoluciones ~ B(6; 0,1).</p><ul><li><b>Ninguna devolución</b>: P(X = 0) = 0,9⁶ = <b>0,5314</b>.</li><li><b>Exactamente dos</b>: P(X = 2) = C(6, 2) · 0,1² · 0,9⁴ = 15 · 0,01 · 0,6561 = <b>0,0984</b>.</li><li><b>Al menos una</b>: P(X ≥ 1) = 1 − P(X = 0) = <b>0,4686</b>.</li><li><b>Como mucho una</b>: P(X ≤ 1) = P(0) + P(1) = 0,5314 + 6 · 0,1 · 0,9⁵ = 0,5314 + 0,3543 = <b>0,8857</b>.</li></ul><p><b>Traducción de las expresiones</b>:</p><table class="tb"><tr><th>Frase</th><th>Probabilidad</th></tr><tr><td>«al menos k», «k o más»</td><td>P(X ≥ k)</td></tr><tr><td>«como mucho k», «no más de k»</td><td>P(X ≤ k)</td></tr><tr><td>«más de k»</td><td>P(X &gt; k) = P(X ≥ k + 1)</td></tr><tr><td>«menos de k»</td><td>P(X &lt; k) = P(X ≤ k − 1)</td></tr></table><p>En la binomial, que es discreta, P(X &lt; 3) y P(X ≤ 3) <b>son distintas</b>: la diferencia es P(X = 3). Cuando la pregunta implica muchos términos, conviene pasar al contrario: «al menos uno» = 1 − P(ninguno).</p>`,
      svg: barras("Binomial B(6; 0,1): la probabilidad de al menos una devolución es todo menos la barra del cero", [[0, 0.531441], [1, 0.354294], [2, 0.098415], [3, 0.01458], [4, 0.001215], [5, 0.000054], [6, 0.000001]], { y1: 0.6, marca: [1, 2, 3, 4, 5, 6], pie: "P(X ≥ 1) = 1 − 0,5314" }),
      video: { id: "4urSrp-hdaI", titulo: "Distribución binomial: ejercicios resueltos de examen de 2º de Bachillerato", canal: "profesor10demates", vistas: 37572, busqueda: "distribución binomial ejercicios" },
    },
    {
      html: `<h3>10.4 Media y desviación típica de la binomial</h3><p>Para X ~ B(n, p) no hace falta hacer la tabla para conocer su media y su dispersión:</p><p style="text-align:center"><b>μ = n · p</b> &nbsp;&nbsp;&nbsp; <b>σ = √(n · p · q)</b></p><p>La media es muy intuitiva: si el 20 % de los clientes compra y entran 100, se espera que compren 100 · 0,2 = 20.</p><p>Ejemplos:</p><ul><li>B(100; 0,2): μ = 20, σ = √(100 · 0,2 · 0,8) = √16 = <b>4</b>.</li><li>B(6; 0,1): μ = 0,6 devoluciones, σ = √0,54 ≈ 0,73.</li><li>Un test de 20 preguntas con 4 opciones contestado al azar: B(20; 0,25). μ = 5 aciertos, σ = √3,75 ≈ 1,94.</li></ul><p>La desviación típica indica cuánto se alejan los resultados de la media en cada repetición. Los valores entre μ − 2σ y μ + 2σ son los «normales»; fuera de ese intervalo, los resultados son poco frecuentes. Si en el test al azar alguien acierta 12 preguntas (más de 5 + 2 · 1,94 ≈ 8,9), es casi seguro que no ha contestado al azar. Esta idea es el germen del contraste de hipótesis.</p><p>La forma de la binomial depende de p: es simétrica si p = 0,5, y asimétrica hacia la derecha si p es pequeño. Al aumentar n, se parece cada vez más a una campana.</p>`,
      svg: tarjeta("Media y desviación típica de la binomial", "X ~ B(n, p)", [["μ = n · p", "var(--pen)", 15], ["σ = √(n · p · q)", "var(--leaf)", 15], ["B(100; 0,2): μ = 20, σ = 4", "var(--red)", 12], ["fuera de μ ± 2σ: poco frecuente", "var(--inf)", 11]], "var(--pen)"),
    },
    {
      html: `<h3>10.5 Variables continuas: probabilidad como área</h3><p>Una variable es <b>continua</b> si puede tomar cualquier valor de un intervalo: estatura, tiempo, gasto, temperatura. En ellas no tiene sentido preguntar por la probabilidad de un valor exacto (que alguien mida exactamente 170,000… cm): esa probabilidad es <b>0</b>.</p><p>Se describen con una <b>función de densidad</b> f(x), que cumple:</p><ul><li>f(x) ≥ 0 para todo x.</li><li>El área total bajo la curva es <b>1</b>.</li><li>La probabilidad de que X esté entre a y b es el <b>área bajo la curva</b> entre a y b: P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx.</li></ul><p>Consecuencia práctica: en una variable continua, P(X ≤ a) = P(X &lt; a), porque el punto a no añade área. No importa si la desigualdad es estricta o no (a diferencia de la binomial).</p><p>Ejemplo sencillo: el tiempo de espera de un autobús que pasa cada 10 minutos, si se llega al azar, es <b>uniforme</b> en [0, 10]: f(x) = 1/10. P(esperar más de 7 minutos) = área del rectángulo de base 3 y altura 1/10 = <b>0,3</b>.</p><p>La función de densidad es el «histograma ideal» de la población: el límite de los histogramas de frecuencias relativas cuando hay muchísimos datos y clases muy estrechas.</p>`,
      svg: G("Distribución uniforme entre 0 y 10: la probabilidad de esperar más de 7 minutos es el área sombreada, 0,3", { x0: -1, x1: 12, y0: -0.02, y1: 0.16, paso: 1, pasoEt: 2, pasoY: 0.05 }, (E) => `${E.area([[7, 0], [7, 0.1], [10, 0.1], [10, 0]], "var(--red)", 0.45)}${E.seg(0, 0.1, 10, 0.1, "var(--pen)", 3)}${E.seg(0, 0, 0, 0.1, "var(--pen)", 1.4, 'stroke-dasharray="3 3"')}${E.seg(10, 0, 10, 0.1, "var(--pen)", 1.4, 'stroke-dasharray="3 3"')}${t(E.X(8.5), E.Y(0.05), "0,3", { s: 13, b: 1, c: "var(--red)" })}${t(E.X(4), E.Y(0.125), "f(x) = 1/10", { s: 12, b: 1, c: "var(--pen)" })}`),
    },
    {
      html: `<h3>10.6 La distribución normal</h3><p>Una variable continua sigue una distribución <b>normal</b> N(μ, σ) si su función de densidad es la campana de Gauss, centrada en la media μ y con anchura determinada por la desviación típica σ.</p><p>Propiedades:</p><ul><li>Es <b>simétrica</b> respecto a x = μ, donde alcanza su máximo. Media, mediana y moda coinciden.</li><li>Tiene puntos de inflexión en μ − σ y μ + σ.</li><li>Cuanto mayor es σ, más ancha y más baja es la campana (el área siempre vale 1).</li><li>Se extiende de −∞ a +∞, aunque fuera de μ ± 3σ casi no hay área.</li></ul><p><b>Regla 68-95-99,7</b>:</p><ul><li>Entre μ − σ y μ + σ está aproximadamente el <b>68 %</b> de los datos.</li><li>Entre μ − 2σ y μ + 2σ, el <b>95 %</b>.</li><li>Entre μ − 3σ y μ + 3σ, el <b>99,7 %</b>.</li></ul><p>Ejemplo: si el gasto en ocio es N(120, 20), el 68 % de los jóvenes gasta entre 100 y 140 €, y el 95 %, entre 80 y 160 €. Gastar más de 180 € (3σ por encima) es muy raro: solo un 0,15 % aproximadamente.</p><p>Siguen aproximadamente una normal muchas variables biológicas (estatura, presión arterial), las puntuaciones de muchos tests, los errores de medida y, sobre todo, las <b>medias de muestras</b>, como verás en el tema siguiente.</p>`,
      svg: normal("Campana de Gauss con la regla 68 95 99,7: el 68 por ciento entre menos 1 y 1 sigma, el 95 por ciento entre menos 2 y 2 sigma", [[-2, 2, "var(--pen)", 0.16], [-1, 1, "var(--pen)", 0.3]], { mu: "μ", rot: [[-2, "μ−2σ", "var(--leaf)"], [-1, "μ−σ"], [1, "μ+σ"], [2, "μ+2σ", "var(--leaf)"]], eti: [[0, 0.18, "68 %", "var(--ink)", 13], [1.55, 0.06, "95 %", "var(--leaf)", 10]], sig: "68 % · 95 % · 99,7 %" }),
      video: { id: "c7NXmhQ--LE", titulo: "Distribución normal: introducción desde cero", canal: "ProfesorClaudio", vistas: 128849, busqueda: "distribución normal tipificación tabla" },
    },
    {
      html: `<h3>10.7 La normal estándar N(0, 1) y su tabla</h3><p>La normal de media 0 y desviación típica 1 se llama <b>normal estándar</b> o tipificada, y se representa con Z. Sus áreas están en una <b>tabla</b> que da Φ(z) = P(Z ≤ z) para z ≥ 0 (el área a la <b>izquierda</b> de z).</p><p>Con la tabla y la simetría se resuelven todos los casos (con a, b &gt; 0):</p><table class="tb"><tr><th>Probabilidad</th><th>Cálculo</th></tr><tr><td>P(Z ≤ a)</td><td>Φ(a), directo de la tabla</td></tr><tr><td>P(Z ≥ a)</td><td>1 − Φ(a)</td></tr><tr><td>P(Z ≤ −a)</td><td>1 − Φ(a) (simetría)</td></tr><tr><td>P(Z ≥ −a)</td><td>Φ(a)</td></tr><tr><td>P(a ≤ Z ≤ b)</td><td>Φ(b) − Φ(a)</td></tr><tr><td>P(−a ≤ Z ≤ a)</td><td>2Φ(a) − 1</td></tr></table><p>Ejemplos:</p><ul><li>P(Z ≤ 1,25) = <b>0,8944</b>.</li><li>P(Z &gt; 1,25) = 1 − 0,8944 = <b>0,1056</b>.</li><li>P(Z ≤ −1,25) = <b>0,1056</b>.</li><li>P(0,5 ≤ Z ≤ 1,5) = 0,9332 − 0,6915 = <b>0,2417</b>.</li><li>P(−1 ≤ Z ≤ 1) = 2 · 0,8413 − 1 = <b>0,6826</b>.</li></ul><p><b>Consejo</b>: dibuja siempre una campana y sombrea el área que buscas. Te ayudará a saber si debes restar de 1 y a comprobar que el resultado tiene sentido (por ejemplo, un área a la derecha de un z positivo debe ser menor que 0,5).</p>`,
      svg: normal("Normal estándar: área a la izquierda de 1,25 igual a 0,8944 y cola derecha 0,1056", [[-3.6, 1.25, "var(--pen)", 0.28], [1.25, 3.6, "var(--red)", 0.4]], { rot: [[1.25, "1,25"]], eti: [[-1.9, 0.3, "Φ(1,25) = 0,8944", "var(--pen)", 11], [2.4, 0.08, "0,1056", "var(--red)", 11]] }),
      video: { id: "OjxFgNwlEqI", titulo: "Explicación de la tabla z de la distribución normal estandarizada", canal: "Mónica Imelda Martínez Acuña", vistas: 144991, busqueda: "distribución normal tipificación tabla" },
    },
    {
      html: `<h3>10.8 Tipificación</h3><p>Hay infinitas normales (una para cada μ y σ), pero solo una tabla. Para usarla se <b>tipifica</b>: si X ~ N(μ, σ), entonces</p><p style="text-align:center"><b>Z = (X − μ) / σ</b> ~ N(0, 1)</p><p>El valor z indica <b>a cuántas desviaciones típicas</b> está x de la media, por encima (z &gt; 0) o por debajo (z &lt; 0).</p><p>Ejemplo: gasto en ocio X ~ N(120, 20).</p><ul><li>P(X ≤ 150) = P(Z ≤ (150 − 120)/20) = P(Z ≤ 1,5) = <b>0,9332</b>.</li><li>P(X &gt; 100) = P(Z &gt; −1) = P(Z ≤ 1) = <b>0,8413</b>.</li><li>P(100 ≤ X ≤ 150) = P(−1 ≤ Z ≤ 1,5) = 0,9332 − (1 − 0,8413) = 0,9332 − 0,1587 = <b>0,7745</b>.</li></ul><p>Si la población es de 5 000 jóvenes, el número esperado que gasta entre 100 y 150 € es 5 000 · 0,7745 ≈ <b>3 873</b>.</p><p><b>Comparar valores de distribuciones distintas</b>: la tipificación permite comparar. Ana saca un 7 en un examen con media 6 y desviación 1; Luis un 8 en otro con media 7 y desviación 2. Ana: z = 1; Luis: z = 0,5. Respecto a su grupo, <b>Ana ha destacado más</b>, aunque su nota sea menor.</p>`,
      svg: normal("Tipificación del gasto en ocio: entre 100 y 150 euros equivale a z entre menos 1 y 1,5, con área 0,7745", [[-1, 1.5, "var(--leaf)", 0.4]], { mu: "120", rot: [[-1, "100", "var(--pen)"], [1.5, "150", "var(--red)"]], eti: [[0.25, 0.16, "0,7745", "var(--ink)", 13], [-2.3, 0.2, "z = −1", "var(--pen)", 10], [2.4, 0.2, "z = 1,5", "var(--red)", 10]], sig: "Z = (X − μ) / σ" }),
      video: { id: "Y0QZ0cWQ0lU", titulo: "Tipificar una variable de una distribución normal", canal: "Susi Profe", vistas: 218481, busqueda: "distribución normal tipificación tabla" },
    },
    {
      html: `<h3>10.9 El problema inverso: hallar un valor</h3><p>A veces se conoce la probabilidad y se busca el valor. Se usa la tabla <b>al revés</b>: se busca en el interior de la tabla el área y se lee el z correspondiente; después se «destipifica»:</p><p style="text-align:center"><b>x = μ + z · σ</b></p><p>Ejemplo: con el gasto en ocio N(120, 20), ¿a partir de qué gasto está el 10 % de los jóvenes que más gasta?</p><ul><li>Buscamos k con P(X ≥ k) = 0,10, es decir, P(X ≤ k) = 0,90.</li><li>En la tabla, el valor más próximo a 0,90 es Φ(1,28) = 0,8997 → z ≈ 1,28.</li><li>k = 120 + 1,28 · 20 = <b>145,6 €</b>.</li></ul><p>Si el área buscada es <b>menor que 0,5</b>, el z es negativo. Ejemplo: el 20 % que menos gasta: P(Z ≤ z) = 0,20 → por simetría, Φ(−z) = 0,80 → −z ≈ 0,84 → z = −0,84. k = 120 − 0,84 · 20 = <b>103,2 €</b>.</p><p>Valores de z muy usados (conviene recordarlos):</p><table class="tb"><tr><th>Φ(z)</th><td>0,90</td><td>0,95</td><td>0,975</td><td>0,99</td><td>0,995</td></tr><tr><th>z</th><td>1,28</td><td>1,645</td><td>1,96</td><td>2,33</td><td>2,575</td></tr></table><p>Estos valores serán imprescindibles en los intervalos de confianza y en los contrastes de hipótesis.</p>`,
      svg: normal("Problema inverso: el 10 por ciento que más gasta está a la derecha de z igual a 1,28, es decir, de 145,6 euros", [[1.28, 3.6, "var(--red)", 0.45]], { mu: "120", rot: [[1.28, "145,6"]], eti: [[2.2, 0.08, "10 %", "var(--red)", 12], [2.5, 0.2, "z = 1,28", "var(--red)", 10], [-0.3, 0.15, "90 %", "var(--pen)", 13]], sig: "x = μ + z · σ" }),
    },
    {
      html: `<h3>10.10 Aproximación de la binomial por la normal</h3><p>Si n es grande, calcular P(X ≤ 60) en una B(100; 0,5) obligaría a sumar 61 términos. Pero, como observó De Moivre, para n grande la binomial tiene forma de campana. Si se cumple</p><p style="text-align:center"><b>n · p ≥ 5 y n · q ≥ 5</b></p><p>la binomial B(n, p) se puede aproximar por la normal <b>N(np, √(npq))</b>, con la misma media y desviación típica.</p><p><b>Corrección por continuidad (de Yates)</b>: como la binomial es discreta y la normal continua, cada valor entero k se representa por el intervalo [k − 0,5, k + 0,5]:</p><ul><li>P(X = k) ≈ P(k − 0,5 ≤ Y ≤ k + 0,5).</li><li>P(X ≤ k) ≈ P(Y ≤ k + 0,5).</li><li>P(X ≥ k) ≈ P(Y ≥ k − 0,5).</li><li>P(X &lt; k) = P(X ≤ k − 1) ≈ P(Y ≤ k − 0,5).</li></ul><p>Ejemplo: se lanza una moneda 100 veces. X = número de caras ~ B(100; 0,5); np = nq = 50 ≥ 5. Se aproxima por N(50, 5).</p><ul><li>P(X ≥ 60) ≈ P(Y ≥ 59,5) = P(Z ≥ 1,9) = 1 − 0,9713 = <b>0,0287</b>.</li><li>P(45 ≤ X ≤ 55) ≈ P(44,5 ≤ Y ≤ 55,5) = P(−1,1 ≤ Z ≤ 1,1) = 2 · 0,8643 − 1 = <b>0,7286</b>.</li></ul><p>Obtener 60 caras o más es poco probable (menos del 3 %): si ocurriera, sospecharíamos que la moneda está trucada.</p>`,
      svg: G("Binomial B de 100 y 0,5 con la normal de media 50 y desviación 5 superpuesta (probabilidades en tanto por ciento)", { x0: 34, x1: 66, y0: -0.6, y1: 9.5, paso: 5, pasoY: 2, m: 22 }, (E) => { let s = ""; let c = 1; const pr = []; for (let k = 0; k <= 100; k++) { pr.push(100 * c * Math.pow(0.5, 100)); c = (c * (100 - k)) / (k + 1); } for (let k = 35; k <= 65; k++) s += E.area([[k - 0.45, 0], [k - 0.45, pr[k]], [k + 0.45, pr[k]], [k + 0.45, 0]], k >= 60 ? "var(--red)" : "var(--pen)", k >= 60 ? 0.7 : 0.4); return `${s}${E.curva((x) => 100 * Math.exp(-((x - 50) ** 2) / 50) / (5 * Math.sqrt(2 * Math.PI)), "var(--leaf)", 34, 66, 2.4)}${t(E.X(65), E.Y(8.5), "N(50, 5)", { s: 11, b: 1, c: "var(--leaf)", a: "end" })}${t(E.X(64), E.Y(2.5), "X ≥ 60", { s: 11, b: 1, c: "var(--red)", a: "end" })}`; }),
      video: { id: "dIMWUgZ5NgE", titulo: "Aproximación de la binomial a la normal", canal: "mmteresass", vistas: 127799, busqueda: "aproximación binomial normal" },
    },
    {
      html: `<h3>10.11 La normal en las ciencias sociales</h3><p>La normal aparece en muchos contextos que estudiarás o te encontrarás:</p><ul><li><b>Pruebas estandarizadas</b>. Muchos tests psicológicos se escalan para que la puntuación sea N(100, 15). P(puntuación &gt; 130) = P(Z &gt; 2) = 1 − 0,9772 = <b>0,0228</b>: solo un 2,3 % de la población supera 130.</li><li><b>Percentiles</b>. El percentil 90 de una variable es el valor que deja por debajo el 90 % de los datos: en N(μ, σ), P₉₀ = μ + 1,28σ. Las tablas de crecimiento infantil de los pediatras están construidas así.</li><li><b>Control de calidad</b>. Una máquina llena paquetes de N(500, 4) gramos. Si la ley exige no bajar de 490 g, la proporción de paquetes incorrectos es P(X &lt; 490) = P(Z &lt; −2,5) = 1 − 0,9938 = <b>0,0062</b>, es decir, 6 de cada 1 000.</li><li><b>Planificación</b>. Un servicio de urgencias recibe al día un número de pacientes aproximadamente N(180, 25). ¿Para cuántos pacientes debe prepararse si quiere estar cubierto el 95 % de los días? k = 180 + 1,645 · 25 ≈ <b>221 pacientes</b>.</li></ul><p><b>Cuidado</b>: no todo es normal. Las rentas, por ejemplo, son muy asimétricas (pocos ingresos muy altos), y aplicarles la normal da resultados absurdos. Antes de usar el modelo conviene mirar el histograma de los datos.</p>`,
      svg: normal("Puntuaciones de un test N de 100 y 15: el 2,28 por ciento supera 130", [[2, 3.6, "var(--red)", 0.45]], { mu: "100", rot: [[-2, "70", "var(--muted)"], [-1, "85", "var(--muted)"], [1, "115", "var(--muted)"], [2, "130"]], eti: [[2.75, 0.06, "2,28 %", "var(--red)", 11]], sig: "N(100, 15): P(X > 130) = 0,0228" }),
    },
    {
      html: `<h3>10.12 Estrategia para la PAU</h3><p>El problema de distribuciones de la PAU de CCSS suele ser de binomial, de normal o de ambas (aproximación). Lista de comprobación:</p><ul><li><b>Identifica el modelo</b>. ¿Se cuentan éxitos en n pruebas independientes con p fijo? Binomial. ¿Es una magnitud continua con media y desviación típica? Normal. Escríbelo: «X = …, X ~ B(10; 0,3)».</li><li><b>Binomial</b>: traduce «al menos», «como mucho», «más de»; usa el contrario si hay muchos términos; calcula los números combinatorios con cuidado.</li><li><b>Normal</b>: tipifica, dibuja la campana sombreando el área y usa la simetría para los z negativos.</li><li><b>Problema inverso</b>: busca el área en la tabla, lee z (con el signo adecuado) y despeja x = μ + zσ.</li><li><b>Aproximación</b>: comprueba np ≥ 5 y nq ≥ 5, calcula μ = np y σ = √(npq), y aplica la <b>corrección por continuidad</b>.</li><li>Da las probabilidades con cuatro decimales e <b>interpreta</b>: porcentajes, número esperado de personas…</li></ul><p>Errores frecuentes: usar la binomial cuando p cambia; confundir P(X &lt; k) con P(X ≤ k) en la binomial; olvidar tipificar; leer la tabla con un z negativo; restar de 1 cuando no toca; y olvidar la corrección por continuidad.</p>`,
      svg: rejilla("Resumen de las distribuciones binomial y normal", [["", "Binomial", "Normal"], ["Variable", "discreta", "continua"], ["Parámetros", "n, p", "μ, σ"], ["Media", "np", "μ"], ["Desv. típica", "√(npq)", "σ"], ["Cálculo", "C(n,k) pᵏ qⁿ⁻ᵏ", "tipificar y tabla"], ["P(X = a)", "fórmula", "0"]], { w: 260, h: 178 }),
    },
  ],
  ejemplos: [
    { enunciado: "X = número de caras en dos monedas. Halla su media y su desviación típica.", pasos: ["μ = 0 · 1/4 + 1 · 1/2 + 2 · 1/4 = 1.", "σ² = 0 + 1/2 + 1 − 1 = 0,5."], resultado: "μ = 1, σ ≈ 0,71." },
    { enunciado: "El 10 % de los pedidos se devuelve. En 6 pedidos, P(exactamente 2 devoluciones)?", pasos: ["X ~ B(6; 0,1).", "C(6, 2) · 0,1² · 0,9⁴ = 15 · 0,01 · 0,6561."], resultado: "P(X = 2) ≈ 0,0984." },
    { enunciado: "Con los mismos datos, P(al menos una devolución)?", pasos: ["Contrario: ninguna.", "1 − 0,9⁶ = 1 − 0,5314."], resultado: "P(X ≥ 1) ≈ 0,4686." },
    { enunciado: "X ~ N(120, 20). Halla P(100 ≤ X ≤ 150).", pasos: ["Tipificar: z₁ = −1, z₂ = 1,5.", "Φ(1,5) − (1 − Φ(1)) = 0,9332 − 0,1587."], resultado: "0,7745." },
    { enunciado: "X ~ N(120, 20). ¿Qué gasto supera solo el 10 % de los jóvenes?", pasos: ["P(Z ≤ z) = 0,90 → z ≈ 1,28.", "k = 120 + 1,28 · 20."], resultado: "k ≈ 145,6 €." },
    { enunciado: "Se lanza una moneda 100 veces. Aproxima P(al menos 60 caras).", pasos: ["B(100; 0,5) ≈ N(50, 5); np = nq = 50 ≥ 5.", "P(Y ≥ 59,5) = P(Z ≥ 1,9) = 1 − 0,9713."], resultado: "≈ 0,0287." },
  ],
  errores: [
    "Usar la binomial cuando las pruebas no son independientes o p cambia.",
    "Confundir P(X < k) con P(X ≤ k) en una distribución discreta.",
    "Buscar en la tabla N(0, 1) sin haber tipificado antes.",
    "Buscar un z negativo directamente en la tabla en lugar de usar la simetría.",
    "Olvidar la corrección por continuidad al aproximar la binomial por la normal.",
    "Pensar que en una variable continua P(X = a) es positiva.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Una variable toma los valores 0, 1, 2, 3 con probabilidades 0,1; 0,3; 0,4 y k. Halla k, la media y la desviación típica.", sol: "k = 0,2. μ = 0,3 + 0,8 + 0,6 = 1,7. Σx²p = 0,3 + 1,6 + 1,8 = 3,7; σ² = 3,7 − 2,89 = 0,81; σ = 0,9." },
    { nivel: "básico", q: "Un juego cuesta 2 € y se ganan 10 € con probabilidad 0,15. ¿Cuál es la ganancia esperada? ¿Es equitativo?", sol: "μ = 8 · 0,15 − 2 · 0,85 = −0,5 €. No es equitativo: se pierde 0,5 € por partida a la larga." },
    { nivel: "básico", q: "X ~ B(5; 0,3). Calcula P(X = 0), P(X = 2) y P(X ≥ 1).", sol: "P(0) = 0,7⁵ = 0,1681; P(2) = 10 · 0,09 · 0,343 = 0,3087; P(X ≥ 1) = 1 − 0,1681 = 0,8319." },
    { nivel: "básico", q: "El 10 % de los pedidos se devuelve. En 6 pedidos, calcula P(como mucho una devolución).", sol: "P(0) + P(1) = 0,5314 + 6 · 0,1 · 0,59049 = 0,5314 + 0,3543 = 0,8857." },
    { nivel: "básico", q: "Halla la media y la desviación típica de B(100; 0,2) y de B(20; 0,25).", sol: "B(100; 0,2): μ = 20, σ = 4. B(20; 0,25): μ = 5, σ = √3,75 ≈ 1,94." },
    { nivel: "básico", q: "Con la tabla N(0, 1), calcula P(Z ≤ 1,25), P(Z > 1,25) y P(Z ≤ −1,25).", sol: "0,8944; 0,1056; 0,1056." },
    { nivel: "básico", q: "Calcula P(0,5 ≤ Z ≤ 1,5) y P(−1 ≤ Z ≤ 1).", sol: "0,9332 − 0,6915 = 0,2417; 2 · 0,8413 − 1 = 0,6826." },
    { nivel: "básico", q: "Calcula P(Z ≥ −0,75) y P(−0,5 ≤ Z ≤ 2).", sol: "P(Z ≥ −0,75) = Φ(0,75) = 0,7734. P(−0,5 ≤ Z ≤ 2) = 0,9772 − (1 − 0,6915) = 0,6687." },
    { nivel: "básico", q: "X ~ N(120, 20). Calcula P(X ≤ 150) y P(X > 100).", sol: "P(Z ≤ 1,5) = 0,9332; P(Z > −1) = 0,8413." },
    { nivel: "básico", q: "X ~ N(50, 10). Calcula P(40 ≤ X ≤ 60) y P(X > 70).", sol: "P(−1 ≤ Z ≤ 1) = 0,6826; P(Z > 2) = 0,0228." },
    { nivel: "básico", q: "El tiempo de espera de un autobús es uniforme entre 0 y 10 minutos. ¿Qué probabilidad hay de esperar más de 7 minutos? ¿Y exactamente 5?", sol: "P(X > 7) = 3/10 = 0,3. P(X = 5) = 0 (variable continua)." },
    { nivel: "básico", q: "Ana saca un 7 en un examen con media 6 y desviación 1; Luis un 8 en otro con media 7 y desviación 2. ¿Quién destaca más en su grupo?", sol: "Ana: z = 1; Luis: z = 0,5. Ana destaca más." },
    { nivel: "medio", q: "Un test tiene 10 preguntas con 4 opciones. Si se contesta al azar, ¿qué probabilidad hay de acertar al menos 2?", sol: "X ~ B(10; 0,25). P(0) = 0,75¹⁰ ≈ 0,0563; P(1) = 10 · 0,25 · 0,75⁹ ≈ 0,1877. P(X ≥ 2) ≈ 1 − 0,2440 = 0,7560." },
    { nivel: "medio", q: "El 30 % de los clientes de un comercio paga en efectivo. Entre 8 clientes, ¿qué probabilidad hay de que exactamente 3 paguen en efectivo? ¿Y de que lo hagan más de 1?", sol: "B(8; 0,3). P(3) = 56 · 0,027 · 0,16807 ≈ 0,2541. P(X > 1) = 1 − P(0) − P(1) = 1 − 0,0576 − 0,1977 = 0,7447." },
    { nivel: "medio", q: "X ~ N(120, 20). Calcula P(100 ≤ X ≤ 150) y el número esperado de jóvenes en ese intervalo en una población de 5 000.", sol: "0,9332 − 0,1587 = 0,7745. 5 000 · 0,7745 ≈ 3 873 jóvenes." },
    { nivel: "medio", q: "X ~ N(120, 20). Halla el gasto que solo supera el 10 % y el gasto por debajo del cual está el 20 %.", sol: "k = 120 + 1,28 · 20 = 145,6 €; k = 120 − 0,84 · 20 = 103,2 €." },
    { nivel: "medio", q: "Las puntuaciones de un test son N(100, 15). ¿Qué porcentaje supera 130? ¿Qué puntuación corresponde al percentil 95?", sol: "P(Z > 2) = 0,0228 → 2,28 %. P₉₅ = 100 + 1,645 · 15 ≈ 124,7." },
    { nivel: "medio", q: "Una máquina llena paquetes N(500, 4) g. ¿Qué proporción pesa menos de 490 g?", sol: "P(Z < −2,5) = 1 − 0,9938 = 0,0062." },
    { nivel: "medio", q: "Halla z tal que P(−z ≤ Z ≤ z) = 0,95.", sol: "2Φ(z) − 1 = 0,95 → Φ(z) = 0,975 → z = 1,96." },
    { nivel: "medio", q: "X ~ N(μ, 5) y P(X ≤ 60) = 0,8413. Halla μ.", sol: "Φ(1) = 0,8413 → (60 − μ)/5 = 1 → μ = 55." },
    { nivel: "medio", q: "Se lanza una moneda 100 veces. Aproxima la probabilidad de obtener entre 45 y 55 caras, ambas incluidas.", sol: "N(50, 5). P(44,5 ≤ Y ≤ 55,5) = P(−1,1 ≤ Z ≤ 1,1) = 2 · 0,8643 − 1 = 0,7286." },
    { nivel: "medio", q: "El 20 % de los usuarios de una web hace clic en un anuncio. Entre 100 usuarios, aproxima P(más de 25 clics).", sol: "B(100; 0,2) ≈ N(20, 4). P(X > 25) = P(X ≥ 26) ≈ P(Y ≥ 25,5) = P(Z ≥ 1,375) ≈ 1 − 0,9154 = 0,0846." },
    { nivel: "medio", q: "Un servicio de urgencias recibe N(180, 25) pacientes al día. ¿Para cuántos debe prepararse si quiere estar cubierto el 95 % de los días?", sol: "k = 180 + 1,645 · 25 ≈ 221 pacientes." },
    { nivel: "avanzado", q: "X ~ N(μ, σ) con P(X ≤ 40) = 0,1587 y P(X ≤ 70) = 0,9772. Halla μ y σ.", sol: "(40 − μ)/σ = −1 y (70 − μ)/σ = 2. Restando: 30/σ = 3 → σ = 10, μ = 50." },
    { nivel: "avanzado", q: "En una ciudad, el 40 % de los hogares tiene mascota. Se eligen 150 hogares. Aproxima P(entre 55 y 65 hogares con mascota, ambos incluidos).", sol: "B(150; 0,4) ≈ N(60, 6). P(54,5 ≤ Y ≤ 65,5) = P(−0,92 ≤ Z ≤ 0,92) = 2 · 0,8212 − 1 = 0,6424." },
    { nivel: "avanzado", q: "Un examen tipo test tiene 50 preguntas con 4 opciones. Se aprueba con 30 aciertos. Aproxima la probabilidad de aprobar contestando al azar.", sol: "B(50; 0,25) ≈ N(12,5; 3,06). P(Y ≥ 29,5) = P(Z ≥ 5,56) ≈ 0. Prácticamente imposible." },
    { nivel: "avanzado", q: "Las notas de un examen son N(6; 1,5). Se quiere dar sobresaliente al 10 % superior y suspender al 15 % inferior. Halla las notas de corte.", sol: "Sobresaliente: 6 + 1,28 · 1,5 = 7,92. Suspenso: Φ(z) = 0,85 → z ≈ 1,04; corte 6 − 1,04 · 1,5 = 4,44." },
    { nivel: "avanzado", q: "Una aseguradora cobra 300 € al año por una póliza. La probabilidad de siniestro es 0,02 y la indemnización es de 10 000 €. ¿Cuál es el beneficio esperado por póliza? Con 1 000 pólizas, aproxima P(más de 30 siniestros).", sol: "Beneficio esperado = 300 − 0,02 · 10 000 = 100 €. Siniestros B(1 000; 0,02) ≈ N(20; 4,43). P(Y ≥ 30,5) = P(Z ≥ 2,37) ≈ 1 − 0,9911 = 0,0089." },
    { nivel: "avanzado", q: "Demuestra que si X ~ N(μ, σ), la probabilidad de que X esté a menos de 2σ de la media es aproximadamente 0,95.", sol: "P(μ − 2σ ≤ X ≤ μ + 2σ) = P(−2 ≤ Z ≤ 2) = 2 · 0,9772 − 1 = 0,9544." },
    { nivel: "avanzado", q: "Una línea aérea sabe que el 10 % de los pasajeros con billete no se presenta. Vende 220 billetes para un avión de 200 plazas. Aproxima la probabilidad de que se presenten más de 200 pasajeros.", sol: "Se presentan X ~ B(220; 0,9) ≈ N(198; 4,45). P(X > 200) = P(X ≥ 201) ≈ P(Y ≥ 200,5) = P(Z ≥ 0,56) = 1 − 0,7123 = 0,2877." },
    { nivel: "avanzado", q: "X ~ B(n; 0,5). ¿Cuál es el menor n para el que se puede aproximar por la normal? Con ese n, aproxima P(X = n/2).", sol: "np ≥ 5 → n ≥ 10. B(10; 0,5) ≈ N(5; 1,58). P(4,5 ≤ Y ≤ 5,5) = P(−0,32 ≤ Z ≤ 0,32) = 2 · 0,6255 − 1 = 0,2510 (el valor exacto es 0,2461)." },
  ],
  quiz: reparte([
    { q: "En una variable aleatoria discreta, las probabilidades deben…", o: ["sumar 1", "ser iguales", "sumar 0", "ser mayores que 0,5"], a: 0, e: "Agotan las posibilidades." },
    { q: "La media de una variable discreta es…", o: ["Σ xᵢ pᵢ", "Σ xᵢ / n", "Σ pᵢ", "el valor más probable"], a: 0, e: "Esperanza." },
    { q: "Un juego es equitativo si…", o: ["su esperanza es 0", "se gana la mitad de las veces", "cuesta 1 €", "p = 0,5"], a: 0, e: "Ni se gana ni se pierde a la larga." },
    { q: "Para que X sea binomial, las pruebas deben ser…", o: ["independientes y con p constante", "dependientes", "continuas", "más de 30"], a: 0, e: "Requisito clave." },
    { q: "En B(n, p), P(X = k) =", o: ["C(n, k) pᵏ qⁿ⁻ᵏ", "pᵏ", "n p", "C(n, k) pⁿ⁻ᵏ qᵏ"], a: 0, e: "Fórmula binomial." },
    { q: "La media de B(n, p) es…", o: ["np", "npq", "√(npq)", "p/n"], a: 0, e: "μ = np." },
    { q: "La desviación típica de B(n, p) es…", o: ["√(npq)", "np", "npq", "√(np)"], a: 0, e: "σ = √(npq)." },
    { q: "«Al menos uno» se calcula mejor como…", o: ["1 − P(ninguno)", "P(1)", "1 − P(1)", "P(todos)"], a: 0, e: "Suceso contrario." },
    { q: "En una binomial, P(X < 3) es igual a…", o: ["P(X ≤ 2)", "P(X ≤ 3)", "P(X ≥ 3)", "1 − P(X ≤ 3)"], a: 0, e: "Variable discreta." },
    { q: "En una variable continua, P(X = a) vale…", o: ["0", "f(a)", "1", "0,5"], a: 0, e: "Un punto no tiene área." },
    { q: "En una variable continua, una probabilidad es…", o: ["un área bajo la función de densidad", "el valor de la densidad", "una suma de barras", "siempre 0,5"], a: 0, e: "Área entre a y b." },
    { q: "La normal es simétrica respecto…", o: ["a la media", "al origen siempre", "a σ", "al eje X"], a: 0, e: "x = μ." },
    { q: "Entre μ − σ y μ + σ hay aproximadamente el…", o: ["68 %", "95 %", "50 %", "99,7 %"], a: 0, e: "Regla 68-95-99,7." },
    { q: "Al aumentar σ, la campana se hace…", o: ["más ancha y más baja", "más estrecha y alta", "asimétrica", "igual"], a: 0, e: "El área sigue siendo 1." },
    { q: "Para tipificar se calcula…", o: ["(X − μ)/σ", "(X − σ)/μ", "X/σ", "μ − X"], a: 0, e: "Z ~ N(0, 1)." },
    { q: "P(Z ≤ −a), con a > 0, es…", o: ["1 − Φ(a)", "Φ(a)", "−Φ(a)", "Φ(a) − 1"], a: 0, e: "Simetría." },
    { q: "P(−a ≤ Z ≤ a) es…", o: ["2Φ(a) − 1", "2Φ(a)", "Φ(a)", "1 − Φ(a)"], a: 0, e: "Área central." },
    { q: "Si Φ(z) = 0,975, z vale…", o: ["1,96", "1,645", "2,575", "1,28"], a: 0, e: "Valor clave." },
    { q: "La binomial se puede aproximar por la normal si…", o: ["np ≥ 5 y nq ≥ 5", "n < 30", "p = 0,5 solo", "siempre"], a: 0, e: "Condición habitual." },
    { q: "Con la corrección por continuidad, P(X ≤ 20) ≈", o: ["P(Y ≤ 20,5)", "P(Y ≤ 19,5)", "P(Y ≤ 20)", "P(Y ≥ 20,5)"], a: 0, e: "Se añade media unidad." },
  ]),
  examen: reparte([
    { q: "X ~ B(4; 0,5). P(X = 2) =", o: ["0,375", "0,5", "0,25", "0,0625"], a: 0, e: "6 · 0,5⁴." },
    { q: "La media de B(50; 0,4) es…", o: ["20", "12", "√12", "40"], a: 0, e: "50 · 0,4." },
    { q: "La desviación típica de B(100; 0,1) es…", o: ["3", "9", "10", "0,9"], a: 0, e: "√9." },
    { q: "P(Z > 1) =", o: ["0,1587", "0,8413", "0,3413", "0,5"], a: 0, e: "1 − 0,8413." },
    { q: "X ~ N(80, 5). P(X ≤ 90) =", o: ["0,9772", "0,8413", "0,0228", "0,5"], a: 0, e: "z = 2." },
    { q: "X ~ N(80, 5). El valor que deja el 95 % por debajo es…", o: ["≈ 88,2", "≈ 89,8", "85", "≈ 86,4"], a: 0, e: "80 + 1,645 · 5." },
    { q: "B(200; 0,5) se aproxima por…", o: ["N(100; 7,07)", "N(100; 50)", "N(200; 0,5)", "N(100; 10)"], a: 0, e: "σ = √50." },
    { q: "En la aproximación, P(X ≥ 110) ≈", o: ["P(Y ≥ 109,5)", "P(Y ≥ 110,5)", "P(Y ≤ 109,5)", "P(Y ≥ 110)"], a: 0, e: "Se resta media unidad." },
  ], 1),
  feynman: ["Qué condiciones debe cumplir una situación para que siga una distribución binomial", "Por qué en una variable continua la probabilidad de un valor exacto es cero", "Qué significa tipificar y por qué basta con una sola tabla", "Cómo se resuelve un problema inverso con la normal", "Por qué se puede aproximar la binomial por la normal y qué es la corrección por continuidad"],
  glosario: [
    ["Variable aleatoria", "Número asociado a cada resultado de un experimento aleatorio."],
    ["Variable discreta", "La que toma valores aislados."],
    ["Variable continua", "La que puede tomar cualquier valor de un intervalo."],
    ["Función de probabilidad", "Tabla de valores de una variable discreta con sus probabilidades."],
    ["Esperanza", "Media de una variable aleatoria: Σ xᵢ pᵢ."],
    ["Juego equitativo", "Aquel cuya ganancia esperada es 0."],
    ["Distribución binomial", "Número de éxitos en n pruebas independientes con probabilidad p."],
    ["Número combinatorio", "C(n, k) = n!/(k!(n − k)!)."],
    ["Función de densidad", "Curva cuya área entre a y b es P(a ≤ X ≤ b)."],
    ["Distribución normal", "Distribución continua con forma de campana, N(μ, σ)."],
    ["Normal estándar", "N(0, 1), la que aparece en la tabla."],
    ["Tipificar", "Calcular z = (x − μ)/σ."],
    ["Percentil", "Valor que deja por debajo un porcentaje dado de los datos."],
    ["Regla 68-95-99,7", "Porcentajes de datos a 1, 2 y 3 desviaciones de la media."],
    ["Corrección por continuidad", "Sumar o restar 0,5 al aproximar una variable discreta por una continua."],
  ],
  situacion: {
    titulo: "¿Es normal nuestro tiempo de reacción?",
    reto: "Vuestro grupo medirá el tiempo de reacción de muchos compañeros con una prueba sencilla y estudiará si los datos siguen una distribución normal.",
    pasos: [
      "Medid el tiempo de reacción de al menos 60 personas (por ejemplo, con la prueba de la regla que se deja caer o con una web de reacción).",
      "Haced un histograma con una hoja de cálculo y calculad la media y la desviación típica.",
      "Comprobad la regla 68-95-99,7: ¿qué porcentaje de datos real cae en μ ± σ y μ ± 2σ?",
      "Usad el modelo normal para predecir el percentil 90 y comparadlo con el real.",
      "Presentad las conclusiones: ¿es un buen modelo? ¿Qué factores podrían explicar las diferencias?",
    ],
    producto: "Un póster con el histograma, la campana ajustada y la comparación entre las predicciones del modelo y los datos.",
    evaluacion: [
      "Recoge los datos con un procedimiento cuidadoso y repetible.",
      "Calcula los parámetros y dibuja el histograma correctamente.",
      "Usa la tipificación y la tabla para hacer predicciones.",
      "Valora críticamente si el modelo normal es adecuado.",
    ],
  },
  figura: fig("Binomial y normal de un vistazo", "Resumen: variables aleatorias, binomial, normal y aproximación", [
    ["Discretas", ["tabla xᵢ, pᵢ", "μ = Σ xᵢ pᵢ", "σ", "esperanza"], "var(--pen)"],
    ["Binomial", ["n pruebas, p", "C(n,k) pᵏ qⁿ⁻ᵏ", "μ = np", "σ = √(npq)"], "var(--leaf)"],
    ["Normal", ["campana", "tipificar", "tabla Φ(z)", "x = μ + zσ"], "var(--red)"],
    ["Aproximación", ["np, nq ≥ 5", "N(np, √npq)", "± 0,5", "De Moivre"], "var(--inf)"],
  ]),
  video: { id: "U-zDFWH9FtQ", titulo: "Distribución normal: cálculo de probabilidades usando la tabla de la normal tipificada", canal: "Universitat Politècnica de València - UPV", vistas: 114977, busqueda: "distribución normal tipificación tabla" },
  mapa: mapa("BINOMIAL Y NORMAL", "var(--bac)", [
    ["Variables aleatorias", "discretas · continuas · μ y σ", "var(--pen)"],
    ["Binomial", "éxitos · fórmula · np", "var(--leaf)"],
    ["Normal", "campana · tipificar · tabla", "var(--red)"],
    ["Aproximación", "np ≥ 5 · corrección ± 0,5", "var(--inf)"],
  ], 290),
  tarjetas: [
    ["Esperanza", "μ = Σ xᵢ pᵢ"],
    ["Binomial", "n pruebas independientes, p constante"],
    ["P(X = k) binomial", "C(n, k) pᵏ qⁿ⁻ᵏ"],
    ["Media y σ binomial", "np y √(npq)"],
    ["Continua", "P = área; P(X = a) = 0"],
    ["68-95-99,7", "μ ± σ, μ ± 2σ, μ ± 3σ"],
    ["Tipificar", "z = (x − μ)/σ"],
    ["P(Z ≤ −a)", "1 − Φ(a)"],
    ["P(−a ≤ Z ≤ a)", "2Φ(a) − 1"],
    ["Problema inverso", "x = μ + z σ"],
    ["z clave", "1,28 · 1,645 · 1,96 · 2,575"],
    ["Binomial ≈ normal", "np, nq ≥ 5; corrección ± 0,5"],
  ],
  familias: ["Lanzad una moneda 20 veces varias veces y anotad el número de caras: ¿cuántas veces sale entre 8 y 12?", "Buscad las tablas de percentiles de peso y talla de la cartilla infantil: son distribuciones normales.", "Calculad la ganancia esperada de un juego de lotería con los premios y probabilidades oficiales.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido estocástico: variables aleatorias discretas y continuas; distribución binomial: cálculo de probabilidades, media y desviación típica; distribución normal: tipificación, cálculo de probabilidades con la tabla y problemas inversos; aproximación de la binomial por la normal; modelización de fenómenos sociales y económicos (RD 243/2022, Matemáticas Aplicadas a las Ciencias Sociales II, saberes básicos de sentido estocástico).",
    ideas: ["Simular con una hoja de cálculo muchas binomiales B(n; 0,5) y ver cómo el histograma se acerca a la campana al crecer n.", "Medir el tiempo de reacción de la clase y estudiar si se ajusta a una normal.", "Usar una tabla de percentiles de crecimiento infantil para trabajar la tipificación.", "Calcular la esperanza de juegos de azar reales y discutir por qué no son equitativos."],
  },
  fuentes: [
    RD,
    { t: "Distribución binomial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Distribuci%C3%B3n_binomial" },
    { t: "Distribución normal, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Distribuci%C3%B3n_normal" },
    { t: "Teorema de De Moivre-Laplace, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Teorema_de_De_Moivre-Laplace" },
  ],
  revisado: "2026-11-21",
};
