// Matemáticas A 4º ESO · Funciones lineales y cuadráticas. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar } = require("./_eso4L2-mata");

const propDirecta = ejes("Función de proporcionalidad directa y igual a 2x: recta que pasa por el origen", { x: [-3, 3], y: [-6, 6], paso: 1, pasoY: 2, marcasX: [1, 2], marcasY: [2, 4], curvas: [{ f: (x) => 2 * x, c: "var(--pen)", t: "y = 2x", tx: 2.1, ty: 5.2 }, { f: (x) => -0.5 * x, c: "var(--red)", t: "y = −0,5x", tx: -2, ty: 2.3 }], puntos: [[0, 0, "", "var(--ink)"]] });

const pendiente = ejes("La pendiente es lo que sube la recta por cada unidad que avanza: en y igual a 2x más 1, por cada paso a la derecha sube 2", { x: [-1, 4], y: [-1, 8], paso: 1, marcasX: [1, 2, 3], marcasY: [1, 3, 5, 7], curvas: [{ f: (x) => 2 * x + 1, c: "var(--pen)", t: "y = 2x + 1", tx: 1.4, ty: 6.6 }], segs: [[1, 3, 2, 3, "var(--leaf)"], [2, 3, 2, 5, "var(--red)"]], textos: [[1.5, 2.2, "+1", "var(--leaf)"], [2.45, 4.1, "+2", "var(--red)"]], puntos: [[0, 1, "n = 1", "var(--inf)", "o"]] });

const signos = cajas("Signo de la pendiente: positiva la recta sube, negativa baja, cero es horizontal", [
  ["m > 0", ["la recta sube", "creciente ↗"], "var(--leaf)"], ["m < 0", ["la recta baja", "decreciente ↘"], "var(--red)"],
  ["m = 0", ["horizontal", "y = n, constante"], "var(--pen)"], ["|m| grande", ["más inclinada", "cambia más deprisa"], "var(--inf)"],
], "¿Qué dice la pendiente?");

const afin = ejes("Rectas paralelas con la misma pendiente 1 y distinta ordenada en el origen", { x: [-3, 3], y: [-4, 5], paso: 1, marcasX: [], marcasY: [-2, 1, 3], curvas: [{ f: (x) => x + 3, c: "var(--leaf)", t: "y = x + 3", tx: -1.7, ty: 3.6 }, { f: (x) => x + 1, c: "var(--pen)" }, { f: (x) => x - 2, c: "var(--red)", t: "y = x − 2", tx: 1.6, ty: -2.6 }] });

const dosPuntos = pasos("Ecuación de la recta que pasa por dos puntos: calcular la pendiente, después la ordenada en el origen", ["A(1, 3) y B(4, 9)", "m = (9 − 3)/(4 − 1) = 2", "y = 2x + n", "3 = 2·1 + n → n = 1", "y = 2x + 1"], "Recta por dos puntos");

const tablaRecta = ejes("Para dibujar una recta basta con dos puntos: con y igual a menos x más 4 se calculan los cortes con los ejes", { x: [-1, 6], y: [-2, 6], paso: 1, marcasX: [2, 4], marcasY: [2, 4], curvas: [{ f: (x) => -x + 4, c: "var(--red)", t: "y = −x + 4", tx: 4.5, ty: 1.6 }], puntos: [[0, 4, "(0, 4)", "var(--pen)", "e"], [4, 0, "(4, 0)", "var(--pen)", "ne"]] });

const modelos = ejes("Modelos lineales: la tarifa de un taxi 3 euros más 1,20 por kilómetro, con la bajada de bandera como ordenada en el origen", { x: [0, 10], y: [0, 16], paso: 2, pasoY: 4, marcasX: [2, 4, 6, 8, 10], marcasY: [4, 8, 12], ex: "km", ey: "€", curvas: [{ f: (x) => 3 + 1.2 * x, c: "var(--pen)", t: "y = 3 + 1,2x", tx: 6.5, ty: 13 }], puntos: [[0, 3, "bajada: 3 €", "var(--red)", "e"], [5, 9, "5 km: 9 €", "var(--leaf)", "se"]] });

const parabola = ejes("La parábola y igual a x al cuadrado: simétrica respecto al eje Y, con vértice en el origen", { x: [-3, 3], y: [-1, 9], paso: 1, pasoY: 1, marcasX: [-2, 2], marcasY: [4], curvas: [{ f: (x) => x * x, c: "var(--pen)", t: "y = x²", tx: 1.8, ty: 7.6 }], segs: [[0, -1, 0, 9, "var(--red)", true]], puntos: [[0, 0, "vértice", "var(--red)", "se"], [2, 4, "", "var(--pen)"], [-2, 4, "", "var(--pen)"]] });

const efectoA = ejes("Efecto del coeficiente a: si es positivo la parábola abre hacia arriba, si es negativo hacia abajo, y cuanto mayor su valor absoluto más estrecha", { x: [-3, 3], y: [-6, 6], paso: 1, marcasX: [], marcasY: [], curvas: [{ f: (x) => 2 * x * x, c: "var(--red)", t: "2x²", tx: -0.9, ty: 5.3 }, { f: (x) => 0.5 * x * x, c: "var(--pen)", t: "0,5x²", tx: 2.6, ty: 4.6 }, { f: (x) => -x * x, c: "var(--leaf)", t: "−x²", tx: 1.9, ty: -5 }] });

const desplaz = ejes("Desplazamientos de la parábola: y igual a x menos 2 al cuadrado más 1 tiene el vértice en 2, 1", { x: [-2, 5], y: [-1, 8], paso: 1, marcasX: [2], marcasY: [1], curvas: [{ f: (x) => x * x, c: "var(--muted)", disc: true, w: 1.8 }, { f: (x) => (x - 2) * (x - 2) + 1, c: "var(--pen)" }], textos: [[3.6, 0.4, "(x − 2)² + 1", "var(--pen)"]], puntos: [[2, 1, "V(2, 1)", "var(--red)", "so"]] });

const vertice = formula("Fórmula del vértice de la parábola y igual a ax al cuadrado más bx más c", "xᵥ = −b / 2a", ["yᵥ = f(xᵥ)", "eje de simetría: x = xᵥ", "a > 0: mínimo · a < 0: máximo"], "var(--red)");

const repres = ejes("Representar y igual a x al cuadrado menos 2x menos 3: vértice en 1, menos 4, cortes en menos 1 y 3 y corte con el eje Y en menos 3", { x: [-2, 4], y: [-5, 5], paso: 1, marcasX: [], marcasY: [], curvas: [{ f: (x) => x * x - 2 * x - 3, c: "var(--pen)" }], segs: [[1, -5, 1, 5, "var(--muted)", true]], puntos: [[1, -4, "V(1, −4)", "var(--red)", "e"], [-1, 0, "−1", "var(--leaf)", "so"], [3, 0, "3", "var(--leaf)", "se"], [0, -3, "(0, −3)", "var(--inf)", "o"]] });

const pasosParab = pasos("Pasos para representar una parábola", ["Mirar a: ¿hacia arriba o abajo?", "Vértice: xᵥ = −b/2a, yᵥ = f(xᵥ)", "Corte con eje Y: (0, c)", "Cortes con eje X: ax² + bx + c = 0", "Tabla con puntos simétricos y dibujar"], "Parábola en 5 pasos");

const optimizar = ejes("Problema de optimización: el área de un corral con 40 metros de valla es máxima, 100 metros cuadrados, cuando el lado mide 10", { x: [0, 20], y: [0, 120], paso: 5, pasoY: 20, marcasX: [5, 10, 15, 20], marcasY: [50, 100], ex: "x (m)", ey: "m²", curvas: [{ f: (x) => x * (20 - x), c: "var(--leaf)", t: "A = x(20 − x)", tx: 10, ty: 40 }], puntos: [[10, 100, "máx (10, 100)", "var(--red)", "n"]] });

const inversa = ejes("Función de proporcionalidad inversa y igual a 6 entre x: hipérbola con dos ramas y asíntotas en los ejes", { x: [-6, 6], y: [-6, 6], paso: 1, marcasX: [], marcasY: [], curvas: [{ f: (x) => 6 / x, de: 0.9, a: 6, c: "var(--red)", t: "y = 6/x", tx: 3.6, ty: 3.4 }, { f: (x) => 6 / x, de: -6, a: -0.9, c: "var(--red)" }], puntos: [[2, 3, "", "var(--pen)"], [3, 2, "", "var(--pen)"]] });

const comparativa = comparar("Comparativa de las tres familias de funciones del tema: lineal, cuadrática y de proporcionalidad inversa", [
  ["Lineal", ["y = mx + n", "recta", "TVM constante"], "var(--pen)"],
  ["Cuadrática", ["ax² + bx + c", "parábola", "vértice"], "var(--red)"],
  ["Inversa", ["y = k/x", "hipérbola", "asíntotas"], "var(--leaf)"],
], "Tres familias");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Funciones lineales y cuadráticas",
  minutos: 115,
  objetivos: [
    "Reconocer y representar funciones de proporcionalidad directa, lineales y afines",
    "Interpretar la pendiente y la ordenada en el origen y hallar la ecuación de una recta",
    "Modelizar situaciones reales con funciones lineales",
    "Representar parábolas calculando vértice, eje y cortes con los ejes",
    "Resolver problemas de máximos y mínimos con funciones cuadráticas",
    "Reconocer la función de proporcionalidad inversa y su gráfica, la hipérbola",
  ],
  claves: ["función lineal", "función afín", "pendiente", "ordenada en el origen", "parábola", "vértice", "eje de simetría", "hipérbola"],
  pregunta: {
    texto: "Un taxi cobra 3 € al subir y 1,20 € por kilómetro. Un balón lanzado al aire sube y baja. ¿Por qué la gráfica del primero es una recta y la del segundo una curva?",
    respuesta: "En el taxi, cada kilómetro añade <b>siempre lo mismo</b> (1,20 €): el crecimiento es constante y la gráfica es una <mark>recta</mark> y = 1,2x + 3. En el balón, la gravedad hace que la altura cambie cada vez de forma distinta: sube cada vez más despacio, se para y cae. Su gráfica es una <mark>parábola</mark>, una función cuadrática.",
  },
  lectura: {
    titulo: "Rectas en las facturas, parábolas en el cielo",
    html: `<p>Si te fijas, las rectas y las parábolas están por todas partes. Una factura con una cuota fija y un precio por consumo, un depósito que se llena a ritmo constante, el cambio de euros a dólares o el coste de una carrera de taxi son <b>funciones lineales</b>: cuando la variable aumenta una unidad, el resultado aumenta siempre la misma cantidad.</p><p>Las <b>parábolas</b> aparecen cuando las cosas se aceleran o se frenan. Galileo descubrió, a principios del siglo XVII, que un objeto lanzado describe una trayectoria parabólica: el chorro de una fuente, un balón de baloncesto o el salto de un delfín dibujan parábolas. Las antenas parabólicas y los faros de los coches tienen esta forma porque reflejan los rayos hacia un único punto, el foco. Y en economía, el beneficio de una empresa según el precio suele tener forma de parábola: si el precio es muy bajo se gana poco, si es muy alto no se vende, y en medio hay un <b>máximo</b>.</p><p>En este tema aprenderás a reconocer estas familias de funciones a partir de su fórmula, a dibujarlas rápidamente y a usarlas para tomar decisiones: elegir una tarifa, predecir dónde caerá un balón o encontrar el precio que da más beneficio.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Proporcionalidad directa: y = mx</h3><p>Una función de <b>proporcionalidad directa</b> tiene la forma <mark>y = mx</mark>, donde m es un número fijo. Su gráfica es una <b>recta que pasa por el origen</b> (0, 0). Representa situaciones en las que dos magnitudes son directamente proporcionales: si el kilo de manzanas cuesta 2 €, el precio es y = 2x; si un coche va a 90 km/h, la distancia es d = 90t.</p><p>El número m es la <b>constante de proporcionalidad</b> y también la <b>pendiente</b> de la recta. Si m es positivo, la recta sube; si es negativo, baja, como en y = −0,5x. Para dibujarla basta con el origen y otro punto: con x = 1, y = m. Esta función conecta directamente con el tema de proporcionalidad: la tabla de valores tiene un cociente y/x constante.</p>`, svg: propDirecta },
    { html: `<h3>1.2 La pendiente</h3><p>La <b>pendiente</b> m de una recta mide su inclinación: es lo que <b>aumenta y cuando x aumenta una unidad</b>. En y = 2x + 1, por cada paso a la derecha, la recta sube 2. Entre dos puntos cualesquiera de la recta se calcula como <mark>m = (y₂ − y₁) / (x₂ − x₁)</mark>, es decir, «lo que sube entre lo que avanza».</p><p>La pendiente es, por tanto, la <b>tasa de variación media</b> de la función, y en una recta es la misma en cualquier intervalo: por eso decimos que su crecimiento es constante. En los contextos reales tiene un significado concreto: el precio por kilómetro de un taxi, la velocidad de un coche, el consumo por hora de una estufa o el aumento de temperatura por minuto. Las señales de tráfico que indican una pendiente del 10 % significan que se suben 10 m por cada 100 m recorridos en horizontal: m = 0,1.</p>`, svg: pendiente, video: { id: "QAWt1CAYKr4", titulo: "Pendiente de la recta conociendo dos puntos, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 1270885, megusta: 0 } },
    { html: `<h3>1.3 El signo y el valor de la pendiente</h3><p>Mirando solo la pendiente se sabe mucho de la recta. Si <b>m &gt; 0</b>, la función es <b>creciente</b>; si <b>m &lt; 0</b>, es <b>decreciente</b>; si <b>m = 0</b>, la recta es <b>horizontal</b> y la función es constante, y = n. Además, cuanto mayor es el valor absoluto de m, <b>más inclinada</b> es la recta: y = 5x sube mucho más deprisa que y = 0,5x.</p><p>Las rectas verticales, como x = 3, no tienen pendiente (sería «infinita») y <b>no son funciones</b>, porque a un mismo x le corresponden infinitos valores de y. Al comparar dos situaciones lineales, la pendiente indica cuál cambia más rápido: entre dos grifos que llenan un depósito, el de mayor pendiente en la gráfica volumen-tiempo es el de más caudal.</p>`, svg: signos },
    { html: `<h3>1.4 Funciones afines: y = mx + n</h3><p>Una función <b>afín</b> (también llamada lineal en muchos libros) tiene la forma <mark>y = mx + n</mark>. Su gráfica es una recta con pendiente m que corta al eje Y en el punto (0, n); el número n se llama <b>ordenada en el origen</b>. La proporcionalidad directa es el caso particular n = 0.</p><p>Dos rectas con la <b>misma pendiente</b> son <b>paralelas</b>: y = x + 3, y = x + 1 e y = x − 2 tienen la misma inclinación y solo se diferencian en su altura. En las situaciones reales, n suele ser la <b>parte fija</b>: la cuota mensual de una tarifa, la bajada de bandera del taxi o el dinero que ya había en una hucha antes de empezar a ahorrar. Cambiar n desplaza la recta hacia arriba o hacia abajo sin girarla.</p>`, svg: afin },
    { html: `<h3>1.5 Ecuación de una recta a partir de dos puntos</h3><p>Si conocemos dos puntos de una recta, podemos hallar su ecuación. Primero se calcula la <b>pendiente</b> con m = (y₂ − y₁)/(x₂ − x₁). Después se sustituye uno de los puntos en y = mx + n para despejar <b>n</b>. Con A(1, 3) y B(4, 9): m = 6/3 = 2; 3 = 2 · 1 + n, así que n = 1 y la recta es y = 2x + 1.</p><p>También se puede usar la forma <b>punto-pendiente</b>: y − y₁ = m(x − x₁). Con el punto A y m = 2: y − 3 = 2(x − 1), que al simplificar da la misma ecuación. Para comprobar, se sustituye el otro punto: 2 · 4 + 1 = 9 ✓. Esta técnica es la que se usa para ajustar una recta a dos datos reales, por ejemplo, para estimar el precio de una tarifa conociendo dos facturas.</p>`, svg: dosPuntos },
    { html: `<h3>1.6 Representar rectas rápidamente</h3><p>Como una recta queda determinada por dos puntos, para dibujarla basta con una <b>tabla de dos valores</b> (mejor tres, para comprobar). Los puntos más cómodos suelen ser los <b>cortes con los ejes</b>: con x = 0 se obtiene el corte con el eje Y, y resolviendo y = 0, el corte con el eje X. Para y = −x + 4: (0, 4) y (4, 0).</p><p>Otra forma es usar la pendiente: se marca (0, n) y desde ahí se avanza 1 a la derecha y se sube m (o se baja, si es negativa). Si la pendiente es fraccionaria, como m = 2/3, se avanza 3 y se sube 2. Si la recta viene en forma general, como 2x + 3y = 6, conviene despejar y: y = −(2/3)x + 2. Con práctica, una recta se dibuja en menos de un minuto.</p>${tabla(["x", "0", "2", "4"], [["y = −x + 4", "4", "2", "0"]])}`, svg: tablaRecta },
    { html: `<h3>1.7 Modelos lineales en la vida real</h3><p>Muchas situaciones se describen con un <b>modelo lineal</b>: una parte fija más una parte proporcional. Un taxi que cobra 3 € más 1,20 € por kilómetro sigue y = 1,2x + 3; un depósito con 50 L que pierde 2 L por minuto, V = 50 − 2t; el cambio de grados Celsius a Fahrenheit, F = 1,8C + 32. Para construir el modelo, se identifica qué es fijo (n) y qué es lo que se añade por unidad (m).</p><p>Con el modelo se puede <b>calcular</b> (¿cuánto cuesta un trayecto de 5 km? 9 €), <b>despejar</b> (¿cuántos km puedo hacer con 15 €? 10 km) y <b>comparar</b> tarifas resolviendo sistemas o inecuaciones. Hay que tener cuidado con el <b>dominio</b>: el depósito se vacía a los 25 minutos, así que el modelo solo vale para 0 ≤ t ≤ 25.</p>`, svg: modelos },
    { html: `<h3>2.1 La función cuadrática y la parábola</h3><p>Una <b>función cuadrática</b> tiene la forma <mark>y = ax² + bx + c</mark>, con a ≠ 0. Su gráfica es una curva llamada <b>parábola</b>. La más sencilla es y = x²: pasa por (0, 0), (1, 1), (2, 4), (−1, 1), (−2, 4)… y es <b>simétrica</b> respecto al eje Y, porque x y −x dan el mismo valor.</p><p>Toda parábola tiene un punto especial, el <b>vértice</b>, donde la función alcanza su máximo o su mínimo, y un <b>eje de simetría</b> vertical que pasa por él. A diferencia de las rectas, la parábola no crece a ritmo constante: en y = x², de 0 a 1 sube 1, de 1 a 2 sube 3, de 2 a 3 sube 5… Por eso las funciones cuadráticas describen fenómenos que se aceleran o frenan, como la caída de objetos o la distancia de frenado de un coche.</p>${tabla(["x", "−3", "−2", "−1", "0", "1", "2", "3"], [["y = x²", "9", "4", "1", "0", "1", "4", "9"]])}`, svg: parabola },
    { html: `<h3>2.2 El coeficiente a: forma y orientación</h3><p>El coeficiente <b>a</b> decide la forma de la parábola. Si <b>a &gt; 0</b>, la parábola abre <b>hacia arriba</b> (forma de U) y el vértice es un <b>mínimo</b>. Si <b>a &lt; 0</b>, abre <b>hacia abajo</b> (forma de ∩) y el vértice es un <b>máximo</b>. Una forma de recordarlo: con a positivo, la parábola «sonríe».</p><p>Además, cuanto mayor es |a|, <b>más estrecha</b> es la parábola, porque los valores crecen más deprisa: y = 2x² es más cerrada que y = x², y esta más que y = 0,5x². En la trayectoria de un balón, a es negativo (la gravedad lo hace caer) y su valor depende de la gravedad y de la velocidad de lanzamiento. Los coeficientes b y c desplazan la parábola sin cambiar su forma.</p>`, svg: efectoA },
    { html: `<h3>2.3 Desplazamientos de la parábola</h3><p>Una parábola puede obtenerse <b>trasladando</b> y = ax². Si se suma un número k, y = ax² + k, la parábola sube k unidades (o baja, si k es negativo). Si se cambia x por x − h, y = a(x − h)², se desplaza h unidades a la derecha. Combinando ambos, <mark>y = a(x − h)² + k</mark> es una parábola con el vértice en el punto (h, k).</p><p>Por ejemplo, y = (x − 2)² + 1 es la parábola y = x² movida 2 a la derecha y 1 hacia arriba: su vértice está en (2, 1). Esta forma, llamada <b>forma canónica</b>, permite leer el vértice de un vistazo. Desarrollándola se obtiene la forma general: (x − 2)² + 1 = x² − 4x + 5. Es un buen ejercicio comprobar con GeoGebra cómo se mueve la parábola al cambiar h y k.</p>`, svg: desplaz },
    { html: `<h3>2.4 El vértice y el eje de simetría</h3><p>Para la forma general y = ax² + bx + c, la primera coordenada del vértice se calcula con la fórmula <mark>xᵥ = −b / 2a</mark>, y la segunda sustituyendo: yᵥ = f(xᵥ). En y = x² − 2x − 3: xᵥ = 2/2 = 1 e yᵥ = 1 − 2 − 3 = −4. El vértice es V(1, −4) y el <b>eje de simetría</b> es la recta vertical x = 1.</p><p>¿Por qué funciona la fórmula? El vértice está justo en medio de los dos puntos de corte con el eje X (por la simetría), y la media de las soluciones de ax² + bx + c = 0 es (x₁ + x₂)/2 = (−b/a)/2 = −b/2a. El vértice es el dato más importante de una parábola: indica su valor máximo o mínimo y dónde cambia de crecer a decrecer.</p>`, svg: vertice, video: { id: "iZ4guTg3tXg", titulo: "Vértice de una parábola", canal: "Matemáticas profe Alex", vistas: 3116566, megusta: 0 } },
    { html: `<h3>2.5 Cortes con los ejes</h3><p>El <b>corte con el eje Y</b> de y = ax² + bx + c es siempre el punto <b>(0, c)</b>. Los <b>cortes con el eje X</b> se obtienen resolviendo la ecuación de segundo grado ax² + bx + c = 0, y el número de cortes depende del discriminante: dos si Δ &gt; 0, uno (el vértice) si Δ = 0 y ninguno si Δ &lt; 0.</p><p>Para y = x² − 2x − 3: corte con el eje Y en (0, −3); cortes con el eje X en x = −1 y x = 3. Fíjate en que el vértice, x = 1, está justo en medio de −1 y 3. Además, por la simetría, si (0, −3) está en la parábola, también lo está su simétrico respecto al eje x = 1, que es (2, −3). Aprovechar la simetría reduce a la mitad los cálculos de la tabla de valores.</p>`, svg: repres },
    { html: `<h3>2.6 Representar una parábola paso a paso</h3><p>Para dibujar cualquier parábola y = ax² + bx + c con precisión se sigue un orden: 1) mirar el signo de <b>a</b> para saber hacia dónde abre; 2) calcular el <b>vértice</b> y dibujar el eje de simetría; 3) marcar el <b>corte con el eje Y</b>, (0, c), y su simétrico; 4) calcular los <b>cortes con el eje X</b> resolviendo la ecuación; 5) completar con una <b>tabla</b> de algunos valores a cada lado del vértice y unir con una curva suave, nunca con picos.</p><p>Una tabla bien hecha pone el vértice en el centro y valores simétricos a los lados: si xᵥ = 1, se toman x = −1, 0, 1, 2, 3. Si la parábola no corta al eje X, basta con el vértice y la tabla. Con este método se describe también la función completa: dominio ℝ, recorrido [yᵥ, +∞) si a &gt; 0, crecimiento a un lado del vértice y decrecimiento al otro.</p>`, svg: pasosParab, video: { id: "J3qQWvxqFI4", titulo: "Funciones cuadráticas: vértice, puntos de corte con los ejes y representación", canal: "Susi Profe", vistas: 3553320, megusta: 0 } },
    { html: `<h3>2.7 Problemas de máximos y mínimos</h3><p>Como el vértice es el punto más alto o más bajo de la parábola, las funciones cuadráticas sirven para resolver problemas de <b>optimización</b>. Con 40 m de valla se quiere cercar un corral rectangular con la mayor área posible. Si un lado mide x, el otro mide 20 − x y el área es A(x) = x(20 − x) = −x² + 20x. Es una parábola que abre hacia abajo con vértice en x = −20/(−2) = 10: el área máxima, <mark>100 m²</mark>, se consigue con un cuadrado de 10 m de lado.</p><p>Otros ejemplos: la altura máxima de un balón h(t) = −5t² + 20t + 1 se alcanza a los t = 2 s y es 21 m; el beneficio de vender a un precio p puede ser B(p) = −2p² + 80p − 600, máximo con p = 20 €. El esquema siempre es el mismo: escribir la función, comprobar que a &lt; 0 (máximo) o a &gt; 0 (mínimo), calcular el vértice e interpretarlo.</p>`, svg: optimizar },
    { html: `<h3>3.1 La función de proporcionalidad inversa</h3><p>La función <mark>y = k/x</mark> (con k ≠ 0) describe dos magnitudes <b>inversamente proporcionales</b>, cuyo producto es constante: x · y = k. Por ejemplo, si hay que recorrer 120 km, la velocidad y el tiempo cumplen t = 120/v; si se reparten 6 pizzas, las que tocan por persona son 6/x. Su gráfica es una curva llamada <b>hipérbola</b>, formada por dos ramas.</p><p>La hipérbola nunca toca los ejes: x no puede ser 0 (no se puede dividir entre 0), así que el dominio es ℝ − {0}, y y tampoco llega a ser 0. Los ejes son sus <b>asíntotas</b>: la gráfica se acerca cada vez más a ellos sin llegar a tocarlos. Si k &gt; 0, las ramas están en el primer y tercer cuadrante y la función es decreciente en cada rama; si k &lt; 0, están en el segundo y el cuarto. Es una función impar.</p>`, svg: inversa },
    { html: `<h3>3.2 Elegir el modelo adecuado</h3><p>Ante una situación real, conviene preguntarse qué tipo de función la describe mejor. Si los aumentos son <b>constantes</b> (la tabla tiene diferencias iguales), es <b>lineal</b>. Si las diferencias cambian de forma regular, aumentando o disminuyendo de manera uniforme, y hay un punto de máximo o mínimo, es <b>cuadrática</b>. Si el <b>producto</b> de las variables es constante, es de <b>proporcionalidad inversa</b>.</p><p>En las tablas de valores es fácil comprobarlo: en y = 3x + 1 las diferencias entre valores consecutivos son siempre 3; en y = x², son 1, 3, 5, 7… (las segundas diferencias son constantes); en y = 12/x, el producto x · y es siempre 12. Elegir bien el modelo es la clave para hacer predicciones fiables y es el primer paso de cualquier trabajo científico o económico con datos.</p>`, svg: comparativa },
  ],
  ejemplos: [
    { enunciado: "Halla la ecuación de la recta que pasa por A(−1, 5) y B(3, −3) y represéntala.", pasos: ["m = (−3 − 5)/(3 − (−1)) = −8/4 = −2.", "y = −2x + n; con A: 5 = 2 + n → n = 3.", "Comprobación con B: −6 + 3 = −3 ✓.", "Cortes: (0, 3) y (1,5; 0)."], resultado: "y = −2x + 3, recta decreciente." },
    { enunciado: "Una compañía de luz cobra 12 € fijos al mes más 0,15 € por kWh. Escribe la función, calcula la factura con 250 kWh y el consumo si se pagan 60 €.", pasos: ["y = 0,15x + 12.", "x = 250: 37,5 + 12 = 49,50 €.", "60 = 0,15x + 12 → 0,15x = 48 → x = 320 kWh."], resultado: "49,50 € y 320 kWh." },
    { enunciado: "Representa y = −x² + 4x − 3.", pasos: ["a = −1 &lt; 0: abre hacia abajo, el vértice es un máximo.", "xᵥ = −4/(−2) = 2; yᵥ = −4 + 8 − 3 = 1 → V(2, 1).", "Corte eje Y: (0, −3); su simétrico: (4, −3).", "Eje X: −x² + 4x − 3 = 0 → x = 1 y x = 3."], resultado: "Parábola con máximo en (2, 1), cortes en (1, 0), (3, 0) y (0, −3)." },
    { enunciado: "Escribe en forma canónica y = x² + 6x + 5 e indica el vértice.", pasos: ["xᵥ = −6/2 = −3; yᵥ = 9 − 18 + 5 = −4.", "Forma canónica: y = (x + 3)² − 4.", "Comprobación: (x + 3)² − 4 = x² + 6x + 9 − 4 ✓."], resultado: "V(−3, −4); y = (x + 3)² − 4." },
    { enunciado: "Se lanza un balón con altura h(t) = −5t² + 15t + 2 (m). ¿Altura máxima? ¿Cuándo?", pasos: ["a = −5 &lt; 0: máximo en el vértice.", "tᵥ = −15/(−10) = 1,5 s.", "h(1,5) = −11,25 + 22,5 + 2 = 13,25 m."], resultado: "13,25 m a los 1,5 segundos." },
    { enunciado: "Un viaje de 240 km se hace a velocidad v. Escribe el tiempo en función de v y calcula t para 60, 80 y 120 km/h.", pasos: ["t = 240/v: proporcionalidad inversa.", "t(60) = 4 h; t(80) = 3 h; t(120) = 2 h.", "El producto v · t = 240 es constante."], resultado: "t = 240/v; 4 h, 3 h y 2 h. Su gráfica es una rama de hipérbola." },
  ],
  errores: [
    "Calcular la pendiente al revés: (x₂ − x₁)/(y₂ − y₁) en lugar de (y₂ − y₁)/(x₂ − x₁).",
    "Confundir la ordenada en el origen n con el corte con el eje X.",
    "Unir los puntos de una parábola con segmentos rectos o dibujar un pico en el vértice.",
    "Equivocarse con el signo en xᵥ = −b/2a: si b = −4, xᵥ = 4/2a.",
    "En y = (x − 3)², pensar que el vértice está en x = −3 (está en x = 3).",
    "Hacer que la hipérbola corte los ejes: y = k/x nunca vale 0 y no existe en x = 0.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Representa y = 3x e y = −2x. ¿Qué tienen en común?", sol: "Ambas pasan por el origen. y = 3x sube (por (1, 3)); y = −2x baja (por (1, −2))." },
    { nivel: "básico", q: "Indica la pendiente y la ordenada en el origen: a) y = 4x − 1 b) y = −x + 5 c) y = 7 d) y = x/2.", sol: "a) m = 4, n = −1. b) m = −1, n = 5. c) m = 0, n = 7. d) m = 1/2, n = 0." },
    { nivel: "básico", q: "Calcula la pendiente de la recta que pasa por (2, 1) y (5, 10).", sol: "m = (10 − 1)/(5 − 2) = 9/3 = 3." },
    { nivel: "básico", q: "Halla los cortes con los ejes de y = 2x − 8 y dibújala.", sol: "Eje Y: (0, −8). Eje X: 2x − 8 = 0 → (4, 0)." },
    { nivel: "básico", q: "¿Son paralelas y = 3x + 2 e y = 3x − 5? ¿Y y = 2x e y = −2x?", sol: "Las primeras sí (misma pendiente 3). Las segundas no (pendientes 2 y −2)." },
    { nivel: "básico", q: "Un depósito tiene 80 L y se vacía a 4 L/min. Escribe la función y di cuándo se vacía.", sol: "V = 80 − 4t. Se vacía cuando 80 − 4t = 0 → t = 20 min." },
    { nivel: "básico", q: "Di hacia dónde abre y si el vértice es máximo o mínimo: a) y = 3x² − 1 b) y = −x² + 4x.", sol: "a) a = 3 > 0: abre hacia arriba, mínimo. b) a = −1 < 0: abre hacia abajo, máximo." },
    { nivel: "básico", q: "Haz una tabla de y = x² − 4 para x = −3…3 y dibújala.", sol: "Valores: 5, 0, −3, −4, −3, 0, 5. Vértice (0, −4), cortes en ±2." },
    { nivel: "básico", q: "Calcula el vértice de y = x² − 6x + 8.", sol: "xᵥ = 6/2 = 3; yᵥ = 9 − 18 + 8 = −1. V(3, −1)." },
    { nivel: "básico", q: "Indica el vértice de y = (x + 1)² − 3 y de y = −2(x − 4)² + 5.", sol: "V(−1, −3) y V(4, 5)." },
    { nivel: "básico", q: "Calcula los cortes con los ejes de y = x² − x − 2.", sol: "Eje Y: (0, −2). Eje X: x = 2 y x = −1." },
    { nivel: "básico", q: "Haz una tabla de y = 12/x para x = 1, 2, 3, 4, 6, 12 y comprueba el producto.", sol: "y: 12, 6, 4, 3, 2, 1. Siempre x · y = 12." },
    { nivel: "medio", q: "Halla la ecuación de la recta que pasa por (−2, 7) y (4, −5).", sol: "m = −12/6 = −2. 7 = 4 + n → n = 3. y = −2x + 3." },
    { nivel: "medio", q: "Halla la recta paralela a y = 4x − 1 que pasa por (2, 3).", sol: "m = 4. 3 = 8 + n → n = −5. y = 4x − 5." },
    { nivel: "medio", q: "Pasa a forma y = mx + n y representa: 3x + 2y = 6.", sol: "2y = −3x + 6 → y = −1,5x + 3. Cortes (0, 3) y (2, 0)." },
    { nivel: "medio", q: "Convierte 25 °C y 100 °C a Fahrenheit con F = 1,8C + 32. ¿Qué significa la pendiente?", sol: "77 °F y 212 °F. Pendiente 1,8: cada grado Celsius equivale a 1,8 grados Fahrenheit." },
    { nivel: "medio", q: "Un gimnasio cobra 40 € de matrícula y 30 € al mes. Otro, 45 € al mes sin matrícula. Escribe ambas funciones y di cuándo conviene cada uno.", sol: "A: y = 30x + 40. B: y = 45x. Igualan en 15x = 40 → x ≈ 2,7. Hasta 2 meses conviene B; desde 3 meses, A." },
    { nivel: "medio", q: "Representa y = −x² + 2x + 3 calculando vértice y cortes.", sol: "V(1, 4). Eje Y: (0, 3). Eje X: x = 3 y x = −1. Abre hacia abajo." },
    { nivel: "medio", q: "Representa y = 2x² − 8x + 6.", sol: "xᵥ = 8/4 = 2, yᵥ = 8 − 16 + 6 = −2. V(2, −2). Eje Y: (0, 6). Eje X: 2x² − 8x + 6 = 0 → x = 1, x = 3." },
    { nivel: "medio", q: "¿Cuántos cortes con el eje X tiene y = x² + 2x + 5? Halla su recorrido.", sol: "Δ = 4 − 20 < 0: ninguno. Vértice (−1, 4), a > 0: recorrido [4, +∞)." },
    { nivel: "medio", q: "Escribe la parábola que resulta de desplazar y = x² 3 unidades a la izquierda y 2 hacia abajo, y desarróllala.", sol: "y = (x + 3)² − 2 = x² + 6x + 7. Vértice (−3, −2)." },
    { nivel: "medio", q: "La altura de una piedra lanzada es h(t) = −5t² + 10t + 15. ¿Cuál es la altura máxima? ¿Cuándo llega al suelo?", sol: "tᵥ = 1 s; h(1) = 20 m. Suelo: −5t² + 10t + 15 = 0 → t² − 2t − 3 = 0 → t = 3 s." },
    { nivel: "medio", q: "¿Qué tipo de función describe cada tabla? a) x: 1,2,3,4 → y: 5,8,11,14 b) y: 1,4,9,16 c) y: 24,12,8,6.", sol: "a) Lineal (diferencias 3): y = 3x + 2. b) Cuadrática: y = x². c) Proporcionalidad inversa: y = 24/x." },
    { nivel: "medio", q: "Halla k para que la recta y = kx + 2 pase por (3, 11).", sol: "11 = 3k + 2 → k = 3." },
    { nivel: "avanzado", q: "Halla la parábola y = x² + bx + c que tiene el vértice en (2, −1).", sol: "−b/2 = 2 → b = −4. f(2) = 4 − 8 + c = −1 → c = 3. y = x² − 4x + 3." },
    { nivel: "avanzado", q: "Un granjero tiene 60 m de valla para cercar un terreno rectangular junto a un río (no necesita valla en ese lado). ¿Qué dimensiones dan el área máxima?", sol: "Lados x, x y 60 − 2x. A = x(60 − 2x) = −2x² + 60x. xᵥ = 15. Dimensiones 15 m × 30 m, área 450 m²." },
    { nivel: "avanzado", q: "Una tienda vende 100 camisetas a 20 €. Por cada euro que sube el precio vende 4 menos. ¿Qué precio da los mayores ingresos?", sol: "Precio 20 + x, ventas 100 − 4x. I = (20 + x)(100 − 4x) = −4x² + 20x + 2.000. xᵥ = 2,5. Precio 22,50 €, 90 camisetas, ingresos 2.025 €." },
    { nivel: "avanzado", q: "Halla los puntos de corte de la recta y = x + 1 con la parábola y = x² − 1.", sol: "x² − 1 = x + 1 → x² − x − 2 = 0 → x = 2 o x = −1. Puntos (2, 3) y (−1, 0)." },
    { nivel: "avanzado", q: "La distancia de frenado de un coche es d = 0,006v² + 0,2v (d en m, v en km/h). Calcula d a 50 y a 100 km/h. ¿Se duplica?", sol: "d(50) = 15 + 10 = 25 m. d(100) = 60 + 20 = 80 m. Más que se triplica: por eso la velocidad es tan peligrosa." },
    { nivel: "avanzado", q: "Halla la recta que pasa por el vértice de y = x² − 4x + 1 y por el punto (0, 5).", sol: "Vértice: xᵥ = 2, yᵥ = −3. Recta por (0, 5) y (2, −3): m = −8/2 = −4, n = 5. y = −4x + 5." },
    { nivel: "avanzado", q: "Para la función y = 8/x, ¿qué ocurre con y cuando x se hace muy grande? ¿Y cuando x se acerca a 0 por la derecha?", sol: "Si x crece mucho, y se acerca a 0 (asíntota horizontal y = 0). Si x se acerca a 0 por la derecha, y se hace enorme (asíntota vertical x = 0)." },
    { nivel: "avanzado", q: "Encuentra dos números que suman 30 y cuyo producto es máximo.", sol: "x y 30 − x. P = x(30 − x) = −x² + 30x. xᵥ = 15. Los números son 15 y 15, producto 225." },
  ],
  quiz: [
    { q: "La gráfica de y = 5x es…", o: ["una parábola", "una recta por el origen", "una hipérbola", "una recta horizontal"], a: 1, e: "Proporcionalidad directa." },
    { q: "La pendiente de y = −3x + 2 es…", o: ["2", "−3", "3", "−2"], a: 1, e: "Es el coeficiente de x." },
    { q: "La ordenada en el origen de y = 4x − 7 es…", o: ["4", "7", "−7", "0"], a: 2, e: "Corta al eje Y en (0, −7)." },
    { q: "Pendiente de la recta por (0, 1) y (2, 7):", o: ["3", "6", "4", "1/3"], a: 0, e: "(7 − 1)/(2 − 0) = 3." },
    { q: "Si m < 0, la recta…", o: ["sube", "baja", "es horizontal", "es vertical"], a: 1, e: "Función decreciente." },
    { q: "y = 2x + 1 e y = 2x − 4 son…", o: ["perpendiculares", "paralelas", "iguales", "secantes en (0, 0)"], a: 1, e: "Misma pendiente." },
    { q: "Corte con el eje X de y = 3x − 6:", o: ["(0, −6)", "(2, 0)", "(−2, 0)", "(6, 0)"], a: 1, e: "3x − 6 = 0 → x = 2." },
    { q: "Un taxi: 3 € + 1 €/km. La función es…", o: ["y = 3x + 1", "y = x + 3", "y = 3x", "y = 4x"], a: 1, e: "Fijo 3, pendiente 1." },
    { q: "La gráfica de y = ax² + bx + c es…", o: ["una recta", "una parábola", "una hipérbola", "una circunferencia"], a: 1, e: "Función cuadrática." },
    { q: "y = −2x² + 3 abre…", o: ["hacia arriba", "hacia abajo", "a la derecha", "depende de x"], a: 1, e: "a < 0." },
    { q: "¿Cuál es más estrecha?", o: ["y = x²", "y = 0,5x²", "y = 3x²", "todas iguales"], a: 2, e: "Mayor |a|." },
    { q: "La abscisa del vértice de y = x² − 8x + 1 es…", o: ["−4", "4", "8", "1"], a: 1, e: "−b/2a = 8/2." },
    { q: "Vértice de y = (x − 5)² + 2:", o: ["(−5, 2)", "(5, 2)", "(5, −2)", "(2, 5)"], a: 1, e: "Forma a(x − h)² + k." },
    { q: "Corte con el eje Y de y = x² − 3x + 7:", o: ["(0, 7)", "(7, 0)", "(0, −3)", "no tiene"], a: 0, e: "Siempre (0, c)." },
    { q: "Si Δ < 0, la parábola…", o: ["corta dos veces al eje X", "no corta al eje X", "pasa por el origen", "es una recta"], a: 1, e: "No hay soluciones reales." },
    { q: "Si a > 0, el vértice es…", o: ["un máximo", "un mínimo", "un corte", "una asíntota"], a: 1, e: "La parábola abre hacia arriba." },
    { q: "La gráfica de y = 4/x es…", o: ["una recta", "una parábola", "una hipérbola", "un punto"], a: 2, e: "Proporcionalidad inversa." },
    { q: "El dominio de y = 4/x es…", o: ["ℝ", "ℝ − {0}", "(0, +∞)", "ℝ − {4}"], a: 1, e: "No se puede dividir entre 0." },
    { q: "En una tabla con diferencias constantes, la función es…", o: ["lineal", "cuadrática", "inversa", "periódica"], a: 0, e: "Crecimiento constante." },
    { q: "Con 20 m de valla, el rectángulo de mayor área tiene lado…", o: ["4 m", "5 m", "10 m", "2,5 m"], a: 1, e: "A = x(10 − x), vértice en x = 5." },
  ],
  examen: [
    { q: "Recta por (1, 2) y (3, 8):", o: ["y = 3x − 1", "y = 2x", "y = 3x + 1", "y = 6x − 4"], a: 0, e: "m = 3, n = −1." },
    { q: "Vértice de y = x² + 4x:", o: ["(−2, −4)", "(2, 12)", "(−4, 0)", "(0, 0)"], a: 0, e: "xᵥ = −2, yᵥ = 4 − 8." },
    { q: "Cortes con el eje X de y = x² − 9:", o: ["±3", "9", "no tiene", "±9"], a: 0, e: "x² = 9." },
    { q: "y = −x² + 6x tiene máximo en x =", o: ["3", "−3", "6", "0"], a: 0, e: "−6/(−2)." },
    { q: "Pendiente de una recta horizontal:", o: ["1", "0", "no tiene", "−1"], a: 1, e: "No sube ni baja." },
    { q: "y = 10/x: si x = 5, y =", o: ["50", "2", "0,5", "15"], a: 1, e: "10 / 5." },
    { q: "La gráfica de C = 15 + 0,1x (euros por minuto) corta el eje Y en…", o: ["0,1", "15", "150", "0"], a: 1, e: "Cuota fija." },
    { q: "Altura máxima de h = −5t² + 20t:", o: ["20 m", "10 m", "40 m", "2 m"], a: 0, e: "t = 2 s, h = −20 + 40." },
  ],
  feynman: ["Qué significan la pendiente y la ordenada en el origen de una recta", "Cómo se halla la ecuación de una recta que pasa por dos puntos", "Cómo se calcula el vértice de una parábola y para qué sirve", "En qué se diferencian una recta, una parábola y una hipérbola"],
  figura: {
    titulo: "Rectas, parábolas e hipérbolas",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen: función afín, función cuadrática, vértice y proporcionalidad inversa">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Afín", "y = mx + n · m = pendiente · n = corte con eje Y", "var(--pen)"], ["Pendiente", "m = (y₂ − y₁) / (x₂ − x₁) · paralelas: misma m", "var(--leaf)"], ["Cuadrática", "y = ax² + bx + c · V: xᵥ = −b/2a · a > 0 ∪ · a < 0 ∩", "var(--red)"], ["Inversa", "y = k/x · hipérbola · asíntotas en los ejes", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="160" y="${43 + i * 50}" font-size="14.5" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "pODY1D-KEcc", titulo: "Gráfica de la recta: pendiente y ordenada en el origen", canal: "Profe Miguel Angel GR", vistas: 1766220, megusta: 0, busqueda: "pendiente y ordenada en el origen" },
  mapa: mapa("RECTAS Y PARÁBOLAS", "var(--red)", [
    ["Afín", "y = mx + n", "var(--pen)"],
    ["Pendiente", "lo que sube por unidad", "var(--leaf)"],
    ["Parábola", "vértice · eje · cortes", "var(--red)"],
    ["Hipérbola", "y = k/x · asíntotas", "var(--inf)"],
  ], 230),
  glosario: [
    ["Función de proporcionalidad directa", "Función y = mx; recta que pasa por el origen."],
    ["Función afín", "Función y = mx + n; su gráfica es una recta."],
    ["Pendiente", "Lo que aumenta y cuando x aumenta una unidad: m = Δy/Δx."],
    ["Ordenada en el origen", "Valor n donde la recta corta al eje Y."],
    ["Rectas paralelas", "Rectas con la misma pendiente."],
    ["Función constante", "Función y = n; recta horizontal."],
    ["Modelo lineal", "Descripción de una situación con una parte fija y otra proporcional."],
    ["Función cuadrática", "Función y = ax² + bx + c con a ≠ 0."],
    ["Parábola", "Gráfica de una función cuadrática."],
    ["Vértice", "Punto máximo o mínimo de una parábola."],
    ["Eje de simetría", "Recta vertical que pasa por el vértice y divide la parábola en dos mitades iguales."],
    ["Forma canónica", "Expresión y = a(x − h)² + k, con vértice (h, k)."],
    ["Optimización", "Búsqueda del valor máximo o mínimo de una magnitud."],
    ["Proporcionalidad inversa", "Función y = k/x; el producto x · y es constante."],
    ["Hipérbola", "Gráfica de y = k/x, formada por dos ramas."],
    ["Asíntota", "Recta a la que se acerca una gráfica sin llegar a tocarla."],
  ],
  situacion: {
    titulo: "La canasta perfecta",
    reto: "El equipo de baloncesto del instituto quiere mejorar sus tiros. Vuestro grupo grabará lanzamientos a canasta, obtendrá la parábola de cada trayectoria y analizará qué tiros entran y por qué, para dar consejos al equipo.",
    pasos: [
      "Grabad con el móvil varios tiros a canasta desde un lateral, con una referencia de medida (por ejemplo, la altura del aro, 3,05 m).",
      "Con una app de análisis de vídeo o GeoGebra, marcad 6-8 posiciones del balón y obtened sus coordenadas.",
      "Ajustad una parábola a cada tiro y calculad su vértice (altura máxima) y su punto de llegada.",
      "Comparad los tiros que entran con los que fallan: altura máxima, ángulo de salida, distancia.",
      "Relacionad también una función lineal: el tiempo de vuelo frente a la distancia del tiro, y comentad si es un buen modelo.",
    ],
    producto: "Un informe para el equipo con las gráficas de los tiros, sus vértices y tres consejos basados en los datos.",
    evaluacion: ["Obtiene e interpreta correctamente el vértice y los cortes de las parábolas.", "Relaciona los coeficientes con la forma de la trayectoria.", "Usa herramientas digitales para recoger y representar datos.", "Comunica conclusiones claras y útiles para el equipo."],
  },
  tarjetas: [
    ["y = mx", "Proporcionalidad directa: recta por el origen."],
    ["y = mx + n", "Función afín: pendiente m, corte (0, n)."],
    ["Pendiente entre dos puntos", "m = (y₂ − y₁)/(x₂ − x₁)"],
    ["Rectas paralelas", "Misma pendiente."],
    ["m > 0 / m < 0", "Creciente / decreciente."],
    ["y = ax² + bx + c", "Parábola."],
    ["a > 0 / a < 0", "Abre hacia arriba (mínimo) / hacia abajo (máximo)."],
    ["Vértice", "xᵥ = −b/2a, yᵥ = f(xᵥ)."],
    ["y = a(x − h)² + k", "Vértice (h, k)."],
    ["Corte con eje Y de la parábola", "(0, c)"],
    ["Optimizar", "Escribir la cuadrática y calcular el vértice."],
    ["y = k/x", "Hipérbola; asíntotas en los ejes."],
  ],
  familias: ["Buscad en casa una factura con cuota fija y consumo y escribid la función que la describe.", "Lanzad una pelota y observad juntos la forma de la trayectoria: ¿dónde está el vértice?", "Calculad cuánto se tarda en un viaje a distintas velocidades y comprobad que es proporcionalidad inversa.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico y funcional: funciones lineales y afines, pendiente, ecuación de la recta, funciones cuadráticas (vértice, eje, cortes, desplazamientos), optimización y función de proporcionalidad inversa como modelos de situaciones reales (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["GeoGebra con deslizadores para m, n, a, h y k.", "Análisis de vídeo de lanzamientos (situación de aprendizaje).", "Comparación de tarifas reales con funciones afines.", "Problema del corral de área máxima con cuerda y estacas en el patio."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "GeoGebra: funciones lineales y cuadráticas", url: "https://www.geogebra.org/" },
    { t: "Tracker: análisis de vídeo para física y matemáticas", url: "https://physlets.org/tracker/" },
  ],
  revisado: "2026-11-13",
};
