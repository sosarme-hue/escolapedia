// Matemáticas 2º ESO · Funciones y gráficas. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, flujo, ejes, tablaSvg, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const funcion = comparar("Una relación es función si a cada valor de x le corresponde un único valor de y", [
  ["Sí es función", ["cada x → un y", "lado → área", "hora → temperatura"], "var(--leaf)"],
  ["No es función", ["una x → varios y", "edad → estatura", "de toda la clase"], "var(--red)"],
], "¿Es una función?");

const expresar = cajas("Cuatro formas de expresar una función", [
  ["Enunciado", ["«cada kg", "cuesta 2 €»"], "var(--pen)"],
  ["Tabla", ["x: 1, 2, 3", "y: 2, 4, 6"], "var(--leaf)"],
  ["Fórmula", ["y = 2x"], "var(--sun)"],
  ["Gráfica", ["puntos en", "los ejes"], "var(--red)"],
], "Formas de expresión");

const tablaF = tablaSvg("Tabla de valores de la función y igual a dos x menos uno", [["x", "−1", "0", "1", "2", "3"], ["y", "−3", "−1", "1", "3", "5"]], { titulo: "y = 2x − 1", notas: ["sustituir cada x en la fórmula", "cada pareja es un punto (x, y)"] });

const dominio = ejes("Dominio y recorrido de una función representada entre x igual a menos dos y x igual a cuatro", {
  x: [-3, 5], y: [-2, 6], paso: 1, marcasX: [-2, 4], marcasY: [4],
  curvas: [{ f: (x) => 0.5 * (x - 1) * (x - 1), de: -2, a: 4, c: "var(--pen)" }],
  puntos: [[-2, 4.5, "", "var(--pen)"], [4, 4.5, "", "var(--pen)"]],
  zonas: [{ de: -2, a: 4, c: "var(--leaf)" }],
  textos: [[2.3, 5.6, "dominio: [−2, 4]", "var(--leaf)"], [2.4, -1.4, "recorrido: [0; 4,5]", "var(--red)"]],
});

const crec = ejes("Crecimiento, decrecimiento, máximo y mínimo de una función", {
  x: [0, 10], y: [0, 8], paso: 1, marcasX: [2, 4, 6, 8], marcasY: [],
  curvas: [{ f: (x) => 4 + 3 * Math.sin(((x - 1.5) * Math.PI) / 4), c: "var(--pen)" }],
  puntos: [[3.5, 7, "máximo", "var(--red)", "n"], [7.5, 1, "mínimo", "var(--leaf)", "s"]],
  textos: [[1.6, 6.4, "crece", "var(--leaf)"], [5.5, 6.2, "decrece", "var(--red)"], [9, 4.6, "crece", "var(--leaf)"]],
});

const continua = comparar("Funciones continuas y discontinuas", [
  ["Continua", ["se dibuja sin", "levantar el lápiz", "temperatura en un día"], "var(--leaf)"],
  ["Discontinua", ["tiene saltos", "o huecos", "precio del aparcamiento"], "var(--red)"],
], "Continuidad");

const directa = ejes("Función de proporcionalidad directa y igual a m x: rectas que pasan por el origen con distintas pendientes", {
  x: [-4, 4], y: [-6, 6], paso: 1, pasoY: 2, marcasX: [-2, 2], marcasY: [-4, 4],
  curvas: [{ f: (x) => 2 * x, c: "var(--red)", t: "y = 2x", tx: 3.3, ty: 5.2 }, { f: (x) => 0.5 * x, c: "var(--pen)", t: "y = x/2", tx: 2.6, ty: 2.4 }, { f: (x) => -x, c: "var(--leaf)", t: "y = −x", tx: -2.9, ty: 4.6 }],
});

const pendiente = formula("La pendiente indica cuánto sube o baja y cuando x aumenta una unidad", "m = (y₂ − y₁) / (x₂ − x₁)", ["Ejemplo: A(1, 3) y B(4, 9)", "m = (9 − 3)/(4 − 1) = 6/3 = 2", "m > 0 crece · m < 0 decrece · m = 0 constante"], "var(--inf)");

const ecuacion = pasos("Calcular la ecuación de la recta que pasa por dos puntos", ["A(1, 3) y B(4, 9)", "Pendiente: m = 6/3 = 2", "y = 2x + n; pasa por A: 3 = 2 + n", "n = 1", "y = 2x + 1"], "Recta por dos puntos");

const constante = ejes("Función constante y función afín: y igual a tres es una recta horizontal", {
  x: [-4, 4], y: [-3, 5], paso: 1, marcasX: [-2], marcasY: [],
  curvas: [{ f: () => 3, c: "var(--sun)", t: "y = 3 (m = 0)", tx: -1.6, ty: 3.6 }, { f: (x) => -0.5 * x + 1, c: "var(--red)", t: "y = −x/2 + 1", tx: 2.4, ty: -1.9 }],
});

const real = lienzo("Gráfica de un paseo: distancia a casa según el tiempo, con tramos de ida, parada y vuelta", `
  <path d="M30 150 H240 M30 150 V20" stroke="var(--muted)" stroke-width="1.6"/>
  <path d="M30 150 L90 70 L140 70 L220 150" fill="none" stroke="var(--pen)" stroke-width="3"/>
  ${tx(54, 100, "ida", { fs: 11, c: "var(--leaf)", max: 40 })}${tx(115, 62, "parada", { fs: 11, c: "var(--sun)", max: 60 })}${tx(196, 100, "vuelta", { fs: 11, c: "var(--red)", max: 60 })}
  ${tx(236, 180, "tiempo (min)", { fs: 10, c: "var(--muted)", a: "end", max: 90 })}${tx(36, 16, "distancia (m)", { fs: 10, c: "var(--muted)", a: "start", max: 100 })}
  ${tx(90, 164, "20", { fs: 9.5, c: "var(--muted)" })}${tx(140, 164, "35", { fs: 9.5, c: "var(--muted)" })}${tx(220, 164, "60", { fs: 9.5, c: "var(--muted)" })}${tx(24, 74, "800", { fs: 9.5, c: "var(--muted)", a: "end" })}`, 190);

const deposito = ejes("Vaciado de un depósito de 500 litros a 20 litros por minuto: y igual a 500 menos 20 x", {
  x: [0, 30], y: [0, 600], paso: 5, pasoY: 100, marcasX: [10, 20, 25], marcasY: [200, 500], ex: "min", ey: "L",
  curvas: [{ f: (x) => 500 - 20 * x, de: 0, a: 25, c: "var(--inf)", t: "y = 500 − 20x", tx: 17, ty: 330 }],
  puntos: [[0, 500, "", "var(--inf)"], [25, 0, "vacío", "var(--red)", "no"]],
});

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Funciones y gráficas",
  minutos: 110,
  objetivos: [
    "Representar puntos en el plano cartesiano y reconocer qué relaciones son funciones",
    "Expresar una función mediante enunciado, tabla, fórmula y gráfica",
    "Interpretar gráficas: dominio, recorrido, crecimiento, máximos, mínimos y continuidad",
    "Estudiar las funciones lineales y = mx y afines y = mx + n y su pendiente",
    "Obtener la ecuación de una recta y modelizar situaciones reales",
  ],
  claves: ["coordenadas", "función", "variable independiente", "dominio", "creciente", "máximo", "pendiente", "ordenada en el origen"],
  pregunta: {
    texto: "Un taxi cobra 3 € de bajada de bandera y 1,20 € por km. ¿Cuánto cuesta un trayecto de 10 km? ¿Es proporcional el precio a los km?",
    respuesta: "Precio = 3 + 1,2 · x. Para 10 km: 3 + 12 = <mark>15 €</mark>. No es proporcional: 20 km no cuestan el doble (27 €), porque hay una parte fija. Es una función afín, y = 1,2x + 3.",
  },
  lectura: {
    titulo: "La mosca de Descartes",
    html: `<p>Cuenta la tradición que el filósofo y matemático francés René Descartes, que tenía una salud delicada, solía quedarse en la cama por las mañanas pensando. Un día observó una mosca que caminaba por el techo de su habitación y se preguntó cómo podría describir exactamente su posición en cada momento. Se dio cuenta de que bastaba con dos números: la distancia de la mosca a una pared y la distancia a la otra.</p><p>Fuera cierta o no la anécdota, en 1637 Descartes publicó la idea que unió para siempre el álgebra y la geometría: los <b>ejes de coordenadas</b>. Gracias a ellos, cada punto del plano es un par de números (x, y), y cada ecuación se puede dibujar como una línea. En su honor hablamos de <b>coordenadas cartesianas</b>.</p><p>Hoy las gráficas están por todas partes: la evolución de la temperatura en el pronóstico del tiempo, la cotización de una moneda, los latidos en un electrocardiograma, los seguidores de una cuenta en redes sociales. Saber leerlas es imprescindible para entender el mundo. En este tema aprenderás qué es una <b>función</b>, cómo se interpreta su gráfica y cómo son las funciones más sencillas: las rectas.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Coordenadas cartesianas</h3><p>Un <b>sistema de coordenadas cartesianas</b> está formado por dos rectas numéricas perpendiculares que se cortan en el <b>origen</b> O(0, 0): el <b>eje de abscisas</b> o eje X (horizontal) y el <b>eje de ordenadas</b> o eje Y (vertical).</p><p>Cada punto del plano se identifica con un par ordenado <mark>(x, y)</mark>: la primera coordenada, la <b>abscisa</b>, indica cuánto se avanza en horizontal, y la segunda, la <b>ordenada</b>, en vertical. El orden importa: (2, 5) y (5, 2) son puntos distintos.</p><p>Los ejes dividen el plano en cuatro <b>cuadrantes</b>, numerados en sentido antihorario: en el I, x &gt; 0 e y &gt; 0; en el II, x &lt; 0 e y &gt; 0; en el III, los dos negativos; en el IV, x &gt; 0 e y &lt; 0. Los puntos situados sobre los ejes tienen una coordenada igual a 0: (3, 0) está en el eje X y (0, −2), en el eje Y.</p>`, svg: psvg("funciones", 0) },
    { html: `<h3>1.2 ¿Qué es una función?</h3><p>Una <b>función</b> es una relación entre dos magnitudes en la que a cada valor de la primera, la <b>variable independiente</b> (x), le corresponde <b>un único valor</b> de la segunda, la <b>variable dependiente</b> (y). Se dice que «y es función de x» y se escribe y = f(x).</p><p>Ejemplos de funciones: el lado de un cuadrado y su área (a cada lado, un área); la hora del día y la temperatura en un lugar; los kilos de fruta y su precio.</p><p>No es función la relación entre la edad y la estatura de los alumnos de una clase: a la edad de 13 años le corresponden muchas estaturas distintas.</p><p>En una gráfica se reconoce fácilmente: es una función si <b>ninguna recta vertical</b> corta a la gráfica en más de un punto. Una circunferencia, por ejemplo, no es la gráfica de una función.</p>`, svg: funcion },
    { html: `<h3>1.3 Formas de expresar una función</h3><p>Una misma función se puede expresar de cuatro maneras:</p><ul><li><b>Enunciado verbal</b>: «cada kilo de manzanas cuesta 2 €».</li><li><b>Tabla de valores</b>: se escriben algunos valores de x y sus correspondientes y.</li><li><b>Fórmula</b> o expresión algebraica: <mark>y = 2x</mark>.</li><li><b>Gráfica</b>: se representan los puntos (x, y) en los ejes.</li></ul><p>Cada forma tiene ventajas. La fórmula permite calcular cualquier valor exactamente; la tabla organiza los datos; la gráfica muestra de un vistazo el comportamiento (si crece, si tiene un máximo…).</p><p>Pasar de una forma a otra es una destreza clave. Desde la fórmula se construye una tabla dando valores a x, y desde la tabla se dibuja la gráfica. Al revés, a partir de una gráfica se pueden leer valores y, si es una recta, deducir su fórmula.</p>`, svg: expresar },
    { html: `<h3>1.4 Tabla de valores y gráfica</h3><p>Para representar una función dada por su fórmula:</p><ol><li>Se eligen varios valores de x, incluyendo negativos, el 0 y positivos.</li><li>Se calcula el valor de y sustituyendo en la fórmula.</li><li>Se escriben los pares en una tabla.</li><li>Se representan los puntos y, si la variable puede tomar cualquier valor intermedio, se unen con una línea.</li></ol><p>Ejemplo: y = 2x − 1. Para x = −1, y = −3; para x = 0, y = −1; para x = 1, y = 1; para x = 2, y = 3. Los puntos (−1, −3), (0, −1), (1, 1), (2, 3) están alineados: la gráfica es una <b>recta</b>.</p><p>No siempre hay que unir los puntos: si x es el número de entradas vendidas, solo tiene sentido para valores enteros, y la gráfica son puntos sueltos.</p>`, svg: tablaF },
    { html: `<h3>2.1 Dominio y recorrido</h3><p>El <b>dominio</b> de una función es el conjunto de valores que puede tomar la variable independiente x. El <b>recorrido</b> (o imagen) es el conjunto de valores que toma la variable dependiente y.</p><p>En una gráfica, el dominio se lee en el <b>eje X</b> (desde dónde hasta dónde se extiende la gráfica en horizontal) y el recorrido en el <b>eje Y</b> (en vertical).</p><p>Muchas veces el dominio lo marca el contexto: si la función da el área de un cuadrado según su lado, el lado no puede ser negativo, así que el dominio son los números positivos. Si una función relaciona las horas de un día con la temperatura, el dominio va de 0 a 24.</p><p>Los intervalos se escriben con corchetes: [−2, 4] significa «desde −2 hasta 4, ambos incluidos».</p>`, svg: dominio },
    { html: `<h3>2.2 Crecimiento, máximos y mínimos</h3><p>Al leer una gráfica de izquierda a derecha:</p><ul><li>Una función es <b>creciente</b> en un tramo si, al aumentar x, aumenta y: la gráfica «sube».</li><li>Es <b>decreciente</b> si, al aumentar x, disminuye y: la gráfica «baja».</li><li>Es <b>constante</b> si y no cambia: la gráfica es horizontal.</li></ul><p>Un <b>máximo</b> es un punto en el que la función pasa de crecer a decrecer: es más alto que los puntos de su alrededor. Un <b>mínimo</b> es un punto en el que pasa de decrecer a crecer.</p><p>Se habla de máximo y mínimo <b>absolutos</b> cuando son el valor más alto o más bajo de toda la gráfica, y <b>relativos</b> si solo lo son respecto a los puntos cercanos. En la gráfica de la temperatura de un día, el máximo suele estar a media tarde y el mínimo, justo antes del amanecer.</p>`, svg: crec },
    { html: `<h3>2.3 Continuidad y otras características</h3><p>Una función es <b>continua</b> si su gráfica se puede dibujar <b>sin levantar el lápiz</b> del papel. La temperatura a lo largo del día es continua: no pasa de 15 °C a 20 °C de golpe.</p><p>Es <b>discontinua</b> si tiene saltos o huecos. Por ejemplo, el precio de un aparcamiento que cobra 2 € por hora o fracción: hasta 60 minutos, 2 €; a partir de 61, 4 €. La gráfica es una «escalera».</p><p>Otras características que se leen en una gráfica:</p><ul><li>Los <b>puntos de corte con los ejes</b>: con el eje Y, donde x = 0; con el eje X, donde y = 0.</li><li>La <b>periodicidad</b>: si la gráfica se repite a intervalos iguales, como las mareas o los latidos.</li><li>La <b>tendencia</b>: qué ocurre cuando x se hace muy grande.</li></ul>`, svg: continua, video: pvid("funciones", 3) },
    { html: `<h3>2.4 Interpretar gráficas de la vida real</h3><p>Para interpretar una gráfica hay que fijarse en:</p><ol><li>Qué magnitud hay en cada eje y en qué <b>unidades</b>.</li><li>La <b>escala</b> de cada eje.</li><li>Los tramos en que crece, decrece o es constante, y qué significan.</li><li>Los puntos destacados: máximos, mínimos, cortes con los ejes.</li></ol><p>Ejemplo: la gráfica del paseo de Laia representa la distancia a casa (m) según el tiempo (min). Los primeros 20 minutos crece: se aleja hasta 800 m. De 20 a 35 es constante: está parada (por ejemplo, en una tienda). De 35 a 60 decrece hasta 0: vuelve a casa. Como la vuelta dura más (25 min frente a 20), la hace más despacio.</p><p>Cuanto más inclinado es un tramo de una gráfica distancia-tiempo, mayor es la velocidad. Un tramo horizontal significa que está quieta, no que se mueve en horizontal.</p>`, svg: real },
    { html: `<h3>3.1 Función de proporcionalidad directa: y = mx</h3><p>Las funciones de <b>proporcionalidad directa</b> tienen la forma <mark>y = mx</mark>, donde m es la constante de proporcionalidad. Su gráfica es una <b>recta que pasa por el origen</b> (0, 0).</p><p>Ejemplos: el precio de x kg de fruta a 2 €/kg (y = 2x); la distancia recorrida a 80 km/h en x horas (y = 80x); el perímetro de un cuadrado de lado x (y = 4x).</p><p>Para dibujarla basta con <b>dos puntos</b>: el origen y otro cualquiera. Para y = 2x, el origen y (1, 2).</p><p>El número m, la <b>pendiente</b>, determina la inclinación:</p><ul><li>Si m &gt; 0, la recta es creciente; cuanto mayor es m, más empinada.</li><li>Si m &lt; 0, la recta es decreciente.</li></ul><p>Por ejemplo, y = 2x sube más deprisa que y = x/2, y y = −x baja.</p>`, svg: directa, video: pvid("funciones", 5) },
    { html: `<h3>3.2 Función afín: y = mx + n</h3><p>Una <b>función afín</b> tiene la forma <mark>y = mx + n</mark>. Su gráfica también es una recta, pero no pasa necesariamente por el origen: corta al eje Y en el punto (0, n). El número n se llama <b>ordenada en el origen</b>.</p><p>Ejemplo: el taxi que cobra 3 € fijos y 1,20 € por km: y = 1,2x + 3. La pendiente 1,2 indica lo que aumenta el precio por cada km, y la ordenada 3, el precio con 0 km.</p><p>Las rectas con la misma pendiente son <b>paralelas</b>: y = 2x, y = 2x + 3 e y = 2x − 1 tienen la misma inclinación y se desplazan hacia arriba o hacia abajo.</p><p>Un caso especial es la <b>función constante</b>, y = n, con pendiente 0: su gráfica es una recta horizontal. Por ejemplo, una tarifa plana de 20 € al mes, gastes lo que gastes.</p>`, svg: constante },
    { html: `<h3>3.3 La pendiente de una recta</h3><p>La <b>pendiente</b> m mide cuánto varía y cuando x aumenta una unidad. Si una recta pasa por los puntos A(x₁, y₁) y B(x₂, y₂), su pendiente es:</p><p><mark>m = (y₂ − y₁) / (x₂ − x₁)</mark></p><p>Es decir, la variación vertical dividida entre la variación horizontal. Para A(1, 3) y B(4, 9): m = (9 − 3)/(4 − 1) = 6/3 = 2. Por cada unidad que avanzamos en x, la recta sube 2.</p><p>Interpretación según el signo:</p><ul><li>m &gt; 0: la recta crece.</li><li>m &lt; 0: la recta decrece.</li><li>m = 0: la recta es horizontal.</li></ul><p>En situaciones reales la pendiente es una <b>tasa</b>: precio por unidad, velocidad, consumo… Las señales de tráfico de «pendiente del 10 %» indican que la carretera sube 10 m por cada 100 m en horizontal: m = 0,1.</p>`, svg: pendiente },
    { html: `<h3>3.4 Ecuación de una recta</h3><p>Para obtener la ecuación y = mx + n de una recta hay varios casos:</p><ul><li><b>Conociendo la gráfica</b>: se lee n (corte con el eje Y) y se calcula m contando cuadritos entre dos puntos.</li><li><b>Conociendo la pendiente y un punto</b>: se sustituye el punto en y = mx + n y se despeja n. Recta de pendiente 3 que pasa por (2, 5): 5 = 3 · 2 + n → n = −1 → y = 3x − 1.</li><li><b>Conociendo dos puntos</b>: primero se calcula la pendiente y después se procede como en el caso anterior. Por A(1, 3) y B(4, 9): m = 2; 3 = 2 · 1 + n → n = 1 → <mark>y = 2x + 1</mark>.</li></ul><p>Comprueba siempre con el otro punto: 2 · 4 + 1 = 9 ✔.</p><p>Para saber si un punto pertenece a una recta, se sustituye: ¿está (5, 10) en y = 2x + 1? 2 · 5 + 1 = 11 ≠ 10: no.</p>`, svg: ecuacion, video: pvid("funciones", 6) },
    { html: `<h3>3.5 Funciones en situaciones reales</h3><p>Muchas situaciones cotidianas se modelizan con funciones lineales y afines:</p><ul><li><b>Tarifas</b>: cuota fija + precio por uso (y = mx + n). Al comparar dos tarifas, el punto de corte de sus rectas indica a partir de qué consumo conviene cada una.</li><li><b>Movimiento uniforme</b>: posición = posición inicial + velocidad · tiempo.</li><li><b>Llenado y vaciado</b>: un depósito con 500 L que pierde 20 L por minuto: y = 500 − 20x. Se vacía cuando y = 0, a los 25 minutos.</li><li><b>Conversión de unidades</b>: grados Fahrenheit = 1,8 · Celsius + 32.</li></ul><p>No todas las funciones son rectas. El área de un cuadrado, y = x², da una parábola; el tiempo para recorrer 100 km según la velocidad, y = 100/x, da una hipérbola (proporcionalidad inversa). Las estudiarás en cursos siguientes, pero ya puedes interpretar sus gráficas con las herramientas de este tema.</p>`, svg: deposito },
  ],
  ejemplos: [
    { enunciado: "Indica el cuadrante de A(−3, 2), B(4, −1), C(−2, −5) y D(0, 3).", pasos: ["A: x < 0, y > 0 → II.", "B: x > 0, y < 0 → IV.", "C: los dos negativos → III.", "D: x = 0 → sobre el eje Y."], resultado: "II, IV, III y eje Y." },
    { enunciado: "Haz una tabla y representa y = −x + 2.", pasos: ["x = −1 → 3; x = 0 → 2; x = 1 → 1; x = 2 → 0.", "Los puntos están alineados: es una recta decreciente."], resultado: "Recta que corta al eje Y en 2 y al eje X en 2." },
    { enunciado: "Calcula la pendiente de la recta que pasa por (−1, 4) y (3, −4).", pasos: ["m = (−4 − 4) / (3 − (−1)).", "m = −8/4 = −2."], resultado: "m = −2 (decreciente)." },
    { enunciado: "Halla la ecuación de la recta que pasa por (2, 1) y (6, 9).", pasos: ["m = (9 − 1)/(6 − 2) = 2.", "1 = 2 · 2 + n → n = −3.", "Comprobación: 2 · 6 − 3 = 9 ✔."], resultado: "y = 2x − 3." },
    { enunciado: "Un depósito tiene 600 L y se vacía a 15 L/min. Escribe la función y calcula cuándo se vacía.", pasos: ["y = 600 − 15x.", "y = 0 → 15x = 600 → x = 40."], resultado: "y = 600 − 15x; se vacía en 40 minutos." },
    { enunciado: "Tarifa A: 10 € + 0,05 €/min. Tarifa B: 0,15 €/min. ¿Cuándo cuestan lo mismo?", pasos: ["10 + 0,05x = 0,15x.", "10 = 0,10x → x = 100."], resultado: "A 100 minutos (15 €). Con más minutos conviene A." },
  ],
  errores: [
    "Cambiar el orden de las coordenadas: (2, 5) no es lo mismo que (5, 2).",
    "Pensar que cualquier relación es una función, aunque a una x le correspondan varias y.",
    "Leer el dominio en el eje Y y el recorrido en el eje X.",
    "Interpretar un tramo horizontal en una gráfica distancia-tiempo como movimiento.",
    "Calcular la pendiente restando en distinto orden arriba y abajo.",
    "Confundir la ordenada en el origen (n) con el corte con el eje X.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe las coordenadas de un punto de cada cuadrante y uno de cada eje.", sol: "Por ejemplo: I (2, 3), II (−2, 3), III (−2, −3), IV (2, −3), eje X (4, 0), eje Y (0, −1)." },
    { nivel: "básico", q: "¿Cuáles son funciones? a) Cada alumno y su número de lista; b) cada número y su doble; c) cada número positivo y sus raíces cuadradas.", sol: "a) Sí. b) Sí. c) No: al 9 le corresponden 3 y −3." },
    { nivel: "básico", q: "Completa la tabla de y = 3x − 2 para x = −2, −1, 0, 1, 2.", sol: "y = −8, −5, −2, 1, 4." },
    { nivel: "básico", q: "Expresa con una fórmula: a) el perímetro de un triángulo equilátero de lado x; b) el precio de x entradas de 7 €.", sol: "a) y = 3x. b) y = 7x." },
    { nivel: "básico", q: "Indica la pendiente y la ordenada en el origen: y = 4x − 3; y = −x + 5; y = 2.", sol: "m = 4, n = −3; m = −1, n = 5; m = 0, n = 2." },
    { nivel: "básico", q: "¿Cuáles son de proporcionalidad directa? y = 5x; y = 2x + 1; y = −3x; y = x/4.", sol: "y = 5x, y = −3x e y = x/4 (pasan por el origen). y = 2x + 1 es afín." },
    { nivel: "básico", q: "Indica si son crecientes o decrecientes: y = 2x − 7; y = −0,5x + 1; y = 3 − 4x.", sol: "Creciente (m = 2); decreciente (m = −0,5); decreciente (m = −4)." },
    { nivel: "básico", q: "¿Pertenece el punto (2, 7) a la recta y = 3x + 1? ¿Y (−1, −2)?", sol: "3 · 2 + 1 = 7: sí. 3 · (−1) + 1 = −2: sí." },
    { nivel: "básico", q: "Calcula los puntos de corte con los ejes de y = 2x − 6.", sol: "Eje Y (x = 0): (0, −6). Eje X (y = 0): 2x = 6 → (3, 0)." },
    { nivel: "básico", q: "Calcula la pendiente de la recta que pasa por (0, 1) y (2, 7).", sol: "m = (7 − 1)/(2 − 0) = 3." },
    { nivel: "medio", q: "La temperatura sube 2 °C por hora desde las 8 h, cuando hay 6 °C, hasta las 14 h. Escribe la función, su dominio y su recorrido.", sol: "y = 6 + 2(x − 8) = 2x − 10, con x en [8, 14]. Recorrido: [6, 18] °C." },
    { nivel: "medio", q: "Halla la ecuación de la recta de pendiente −2 que pasa por (3, 1).", sol: "1 = −2 · 3 + n → n = 7 → y = −2x + 7." },
    { nivel: "medio", q: "Halla la ecuación de la recta que pasa por (−2, 5) y (2, −3).", sol: "m = (−3 − 5)/(2 + 2) = −2. 5 = −2 · (−2) + n → n = 1 → y = −2x + 1." },
    { nivel: "medio", q: "Escribe la ecuación de una recta paralela a y = 3x − 1 que pase por el origen, y otra que pase por (0, 4).", sol: "y = 3x; y = 3x + 4 (misma pendiente)." },
    { nivel: "medio", q: "Un gimnasio cobra 25 € de matrícula y 30 € al mes. Escribe la función y calcula el coste de un año.", sol: "y = 30x + 25. Un año: 30 · 12 + 25 = 385 €." },
    { nivel: "medio", q: "La fórmula °F = 1,8 · °C + 32 convierte temperaturas. ¿Cuántos °F son 25 °C? ¿Y cuántos °C son 50 °F?", sol: "1,8 · 25 + 32 = 77 °F. 50 = 1,8C + 32 → C = 10 °C." },
    { nivel: "medio", q: "En una gráfica distancia-tiempo, Pau recorre 3 km en 15 min, descansa 10 min y vuelve en 20 min. Describe la gráfica y calcula la velocidad de ida y de vuelta.", sol: "Sube de 0 a 3 km en [0, 15], horizontal en [15, 25], baja a 0 en [25, 45]. Ida: 3 km/0,25 h = 12 km/h. Vuelta: 3 km/(1/3 h) = 9 km/h." },
    { nivel: "medio", q: "Un aparcamiento cobra 1,50 € por cada hora o fracción. Haz una tabla para 0,5 h, 1 h, 1,5 h, 2 h y 3 h. ¿Es continua la función?", sol: "1,50; 1,50; 3; 3; 4,50 €. Es discontinua: tiene saltos (escalera)." },
    { nivel: "medio", q: "Una vela de 20 cm se consume 2 cm cada hora. Escribe la función altura-tiempo, su dominio y cuándo se apaga.", sol: "y = 20 − 2x; dominio [0, 10]; se apaga a las 10 h." },
    { nivel: "medio", q: "¿Qué recta es más empinada, y = 3x o y = −4x? Justifícalo.", sol: "y = −4x, porque |−4| > |3|; aunque es decreciente, su inclinación es mayor." },
    { nivel: "medio", q: "Los puntos (1, 2), (3, 6) y (5, 11), ¿están alineados?", sol: "Pendiente entre los dos primeros: 2; entre el 2.º y el 3.º: 5/2. No están alineados." },
    { nivel: "medio", q: "Representa y = x² para x = −2, −1, 0, 1, 2. ¿Es una recta? ¿Dónde tiene un mínimo?", sol: "y = 4, 1, 0, 1, 4. No es una recta (es una parábola). Mínimo en (0, 0)." },
    { nivel: "avanzado", q: "Dos compañías de alquiler de coches: A cobra 40 € fijos y 0,20 €/km; B, 0,40 €/km. ¿A partir de cuántos km conviene A? Represéntalo.", sol: "40 + 0,2x = 0,4x → x = 200 km. Con más de 200 km, A es más barata." },
    { nivel: "avanzado", q: "Un tren sale a las 9 h de una ciudad a 120 km/h. Otro sale a las 10 h del mismo sitio a 180 km/h. Escribe sus funciones (distancia en km, tiempo en h desde las 9) y calcula cuándo se alcanzan.", sol: "y₁ = 120t; y₂ = 180(t − 1). 120t = 180t − 180 → t = 3: a las 12 h, a 360 km." },
    { nivel: "avanzado", q: "Halla la ecuación de la recta que corta a los ejes en (4, 0) y (0, −2).", sol: "n = −2; m = (0 − (−2))/(4 − 0) = 1/2 → y = x/2 − 2." },
    { nivel: "avanzado", q: "La factura del agua es una función afín del consumo. Con 10 m³ se pagan 23 € y con 25 m³, 42,50 €. Halla la fórmula y la cuota fija.", sol: "m = (42,5 − 23)/(25 − 10) = 1,3 €/m³. 23 = 13 + n → n = 10 €. y = 1,3x + 10." },
    { nivel: "avanzado", q: "Una piscina de 90 m³ se llena con un grifo a 6 m³/h y a la vez se vacía por un desagüe a 1,5 m³/h. Escribe el volumen en función del tiempo y calcula cuándo se llena.", sol: "y = (6 − 1,5)t = 4,5t. 4,5t = 90 → t = 20 h." },
    { nivel: "avanzado", q: "Busca en una web meteorológica la temperatura de tu localidad cada 3 horas durante un día, represéntala e indica máximo, mínimo, intervalos de crecimiento y si es continua.", sol: "Respuesta abierta. Lo habitual: mínimo antes del amanecer, máximo a media tarde, crece por la mañana y decrece por la noche; es continua." },
    { nivel: "avanzado", q: "Explica por qué una recta vertical como x = 3 no es la gráfica de una función.", sol: "A x = 3 le corresponden infinitos valores de y. Una función solo puede asignar un único valor de y a cada x." },
    { nivel: "avanzado", q: "Una función de proporcionalidad directa pasa por (−3, 12). Halla su fórmula y calcula f(5) y el valor de x para el que y = −20.", sol: "m = 12/(−3) = −4 → y = −4x. f(5) = −20. y = −20 → x = 5." },
  ],
  quiz: baraja([
    { q: "El punto (−2, 3) está en el cuadrante…", o: ["II", "I", "III", "IV"], a: 0, e: "x < 0, y > 0." },
    { q: "El punto (0, −4) está…", o: ["en el eje Y", "en el eje X", "en el III", "en el IV"], a: 0, e: "x = 0." },
    { q: "En una función, a cada x le corresponde…", o: ["un único y", "dos y", "ningún y", "varios y"], a: 0, e: "Definición." },
    { q: "La variable independiente se representa en…", o: ["el eje X", "el eje Y", "el origen", "la diagonal"], a: 0, e: "Abscisas." },
    { q: "El dominio se lee en…", o: ["el eje X", "el eje Y", "el máximo", "la pendiente"], a: 0, e: "Valores de x." },
    { q: "Si al aumentar x disminuye y, la función es…", o: ["decreciente", "creciente", "constante", "continua"], a: 0, e: "La gráfica baja." },
    { q: "Un máximo es un punto donde la función pasa de…", o: ["crecer a decrecer", "decrecer a crecer", "ser constante a crecer", "continua a discontinua"], a: 0, e: "Cima." },
    { q: "Una función se puede dibujar sin levantar el lápiz si es…", o: ["continua", "creciente", "lineal", "periódica"], a: 0, e: "Continuidad." },
    { q: "Un tramo horizontal en una gráfica distancia-tiempo significa…", o: ["que está parado", "que va muy deprisa", "que vuelve", "que acelera"], a: 0, e: "La distancia no cambia." },
    { q: "y = 3x es una función…", o: ["de proporcionalidad directa", "constante", "afín no lineal", "cuadrática"], a: 0, e: "Pasa por el origen." },
    { q: "La gráfica de y = mx + n es…", o: ["una recta", "una parábola", "una hipérbola", "un círculo"], a: 0, e: "Función afín." },
    { q: "En y = −2x + 5, la ordenada en el origen es…", o: ["5", "−2", "2", "−5"], a: 0, e: "Corte con el eje Y." },
    { q: "En y = −2x + 5, la pendiente es…", o: ["−2", "5", "2", "−5"], a: 0, e: "Coeficiente de x." },
    { q: "Si m < 0, la recta es…", o: ["decreciente", "creciente", "horizontal", "vertical"], a: 0, e: "Baja." },
    { q: "La pendiente de la recta que pasa por (0, 0) y (2, 6) es…", o: ["3", "6", "1/3", "2"], a: 0, e: "6/2." },
    { q: "y = 4 es una recta…", o: ["horizontal", "vertical", "que pasa por el origen", "decreciente"], a: 0, e: "m = 0." },
    { q: "y = 2x + 1 e y = 2x − 3 son…", o: ["paralelas", "perpendiculares", "la misma recta", "secantes en el origen"], a: 0, e: "Misma pendiente." },
    { q: "El corte de y = x − 4 con el eje X es…", o: ["(4, 0)", "(0, −4)", "(−4, 0)", "(0, 4)"], a: 0, e: "y = 0 → x = 4." },
    { q: "¿Qué punto está en y = 2x − 1?", o: ["(3, 5)", "(3, 6)", "(1, 2)", "(0, 1)"], a: 0, e: "2 · 3 − 1 = 5." },
    { q: "Un taxi: 3 € + 1 €/km. La función es…", o: ["y = x + 3", "y = 3x + 1", "y = 3x", "y = 4x"], a: 0, e: "Pendiente 1, ordenada 3." },
  ]),
  examen: baraja([
    { q: "(3, −2) está en el cuadrante…", o: ["IV", "II", "III", "I"], a: 0, e: "x > 0, y < 0." },
    { q: "¿Cuál no es función?", o: ["número → sus raíces cuadradas", "lado → área del cuadrado", "kg → precio", "hora → temperatura"], a: 0, e: "Dos valores para una x." },
    { q: "Pendiente de la recta por (1, 4) y (3, 0):", o: ["−2", "2", "−1/2", "4"], a: 0, e: "−4/2." },
    { q: "Ecuación de la recta de pendiente 3 por (0, −2):", o: ["y = 3x − 2", "y = −2x + 3", "y = 3x + 2", "y = 2x − 3"], a: 0, e: "n = −2." },
    { q: "Recta por (1, 1) y (3, 5):", o: ["y = 2x − 1", "y = 2x + 1", "y = x + 2", "y = 3x − 2"], a: 0, e: "m = 2, n = −1." },
    { q: "y = −x + 3 corta al eje X en…", o: ["(3, 0)", "(0, 3)", "(−3, 0)", "(1, 0)"], a: 0, e: "y = 0 → x = 3." },
    { q: "Un depósito con 200 L pierde 8 L/min. Se vacía en…", o: ["25 min", "8 min", "200 min", "1600 min"], a: 0, e: "200 : 8." },
    { q: "Si m = 0, la función es…", o: ["constante", "creciente", "decreciente", "discontinua"], a: 0, e: "Recta horizontal." },
  ], 1),
  feynman: ["Qué diferencia hay entre una relación cualquiera y una función", "Qué significan la pendiente y la ordenada en el origen en un problema de tarifas", "Cómo se sabe en una gráfica si una persona va más deprisa a la ida o a la vuelta", "Por qué una función de proporcionalidad directa pasa siempre por el origen"],
  figura: {
    titulo: "Funciones y gráficas en un vistazo",
    svg: resumen("Resumen del tema de funciones y gráficas", [
      ["(x, y)", "abscisa y ordenada · cuatro cuadrantes", "var(--pen)"],
      ["Función", "a cada x, un único y · tabla, fórmula, gráfica", "var(--leaf)"],
      ["Características", "dominio · recorrido · crece/decrece · máx/mín", "var(--sun)"],
      ["y = mx + n", "m: pendiente · n: corte con el eje Y", "var(--inf)"],
      ["Pendiente", "m = (y₂ − y₁)/(x₂ − x₁)", "var(--red)"],
    ]),
  },
  video: pvg("funciones"),
  mapa: mapa("FUNCIONES", "var(--inf)", [
    ["Coordenadas", "ejes · cuadrantes · puntos", "var(--pen)"],
    ["Función", "tabla · fórmula · gráfica", "var(--leaf)"],
    ["Características", "dominio · crecimiento · continuidad", "var(--sun)"],
    ["Rectas", "y = mx · y = mx + n · pendiente", "var(--red)"],
  ], 250),
  glosario: [
    ["Coordenadas cartesianas", "Par de números (x, y) que localiza un punto en el plano."],
    ["Abscisa", "Primera coordenada de un punto; se mide en el eje X."],
    ["Ordenada", "Segunda coordenada de un punto; se mide en el eje Y."],
    ["Función", "Relación que asigna a cada valor de x un único valor de y."],
    ["Variable independiente", "La que se elige libremente (x)."],
    ["Variable dependiente", "La que depende de la otra (y)."],
    ["Dominio", "Conjunto de valores que toma la variable independiente."],
    ["Recorrido", "Conjunto de valores que toma la variable dependiente."],
    ["Función creciente", "Aquella en la que al aumentar x aumenta y."],
    ["Máximo", "Punto en el que la función pasa de crecer a decrecer."],
    ["Función continua", "La que se dibuja sin levantar el lápiz."],
    ["Pendiente", "Variación de y por cada unidad que aumenta x en una recta."],
    ["Ordenada en el origen", "Valor de y cuando x = 0; corte con el eje Y."],
    ["Función afín", "Función de la forma y = mx + n."],
  ],
  situacion: {
    titulo: "Gráficas en movimiento",
    reto: "Vais a grabar con el móvil un recorrido real (caminar, correr, ir en bici por el patio) y construir su gráfica distancia-tiempo, describirla y obtener las ecuaciones de sus tramos rectos.",
    pasos: [
      "Marcad en el patio un recorrido de ida y vuelta con distancias medidas (por ejemplo, cada 5 m).",
      "Grabad a un compañero mientras hace el recorrido con tramos a distinta velocidad y una parada.",
      "Con el vídeo, anotad en una tabla la distancia al punto de salida cada pocos segundos.",
      "Representad la gráfica y describid sus tramos: crecimiento, paradas, máximos y velocidades.",
      "Calculad la pendiente y la ecuación de cada tramo recto y explicad su significado.",
    ],
    producto: "Un póster o una presentación con el vídeo, la tabla, la gráfica comentada y las ecuaciones de los tramos.",
    evaluacion: ["Construye correctamente una tabla y una gráfica a partir de datos reales.", "Interpreta crecimiento, paradas y velocidades en la gráfica.", "Calcula pendientes y ecuaciones de rectas.", "Comunica las conclusiones con vocabulario matemático."],
  },
  tarjetas: [
    ["(x, y)", "Abscisa, ordenada"], ["Cuadrante II", "x < 0, y > 0"], ["Función", "Cada x → un único y"],
    ["Dominio", "Valores de x (eje X)"], ["Recorrido", "Valores de y (eje Y)"], ["Máximo", "Pasa de crecer a decrecer"],
    ["Continua", "Sin levantar el lápiz"], ["y = mx", "Recta por el origen"], ["y = mx + n", "Recta que corta al eje Y en n"],
    ["Pendiente", "(y₂ − y₁)/(x₂ − x₁)"], ["m > 0 / m < 0", "Crece / decrece"], ["Rectas paralelas", "Misma pendiente"],
  ],
  familias: ["Mirad juntos la gráfica de temperaturas del pronóstico y comentad máximos y mínimos.", "Comparad dos tarifas (móvil, luz) con una tabla y decidid cuál conviene.", "En un viaje, anotad cada media hora los km recorridos y dibujad la gráfica.", "Buscad gráficas en noticias y comentad qué representan sus ejes."],
  profesores: {
    saberes: "Sentido algebraico y estocástico: relaciones funcionales, formas de representación, interpretación de gráficas, funciones lineales y afines y modelización de situaciones de la vida cotidiana (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Sensores de movimiento o vídeo para construir gráficas distancia-tiempo.", "GeoGebra con deslizadores para m y n.", "Tarifas reales para comparar funciones afines.", "Juego de emparejar enunciados, tablas, fórmulas y gráficas."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Coordenadas cartesianas", url: "https://es.wikipedia.org/wiki/Coordenadas_cartesianas" }, { t: "GeoGebra: calculadora gráfica", url: "https://www.geogebra.org/graphing" }],
  revisado: REV,
};
