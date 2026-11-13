// Matemáticas A 4º ESO · Funciones. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar } = require("./_eso4L2-mata");

const maquina = lienzo("Una función como una máquina: entra un valor x y sale un único valor y", `
  <rect x="84" y="50" width="92" height="64" rx="12" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>
  ${tx(130, 80, "f", { fs: 22, c: "var(--pen)", fam: D })}${tx(130, 102, "×2 + 1", { fs: 12, w: 400 })}
  <path d="M24 82 H80" stroke="var(--leaf)" stroke-width="3"/><path d="M80 82 l-8 -5 v10 z" fill="var(--leaf)"/>
  <path d="M180 82 H236" stroke="var(--red)" stroke-width="3"/><path d="M236 82 l-8 -5 v10 z" fill="var(--red)"/>
  ${tx(42, 70, "x = 3", { fs: 12, c: "var(--leaf)" })}${tx(212, 70, "y = 7", { fs: 12, c: "var(--red)" })}
  ${tx(130, 146, "cada x da UN solo y", { fs: 13, c: "var(--muted)" })}${tx(130, 166, "f(3) = 2 · 3 + 1 = 7", { fs: 12, w: 400 })}`);

const esFuncion = comparar("Una gráfica es función si cualquier recta vertical la corta como mucho una vez; una circunferencia no lo es", [
  ["Sí es función", ["cada x → un y", "vertical: 1 corte"], "var(--leaf)"],
  ["No es función", ["una x → dos y", "vertical: 2 cortes"], "var(--red)"],
], "Prueba de la recta vertical");

const formas = cajas("Cuatro formas de dar una función: enunciado, tabla, gráfica y fórmula", [
  ["Enunciado", ["«el taxi cobra 3 €", "más 1 € por km»"]], ["Tabla", ["km: 0 · 1 · 2", "€: 3 · 4 · 5"]],
  ["Gráfica", ["puntos unidos", "en unos ejes"]], ["Fórmula", ["y = x + 3", "f(x) = x + 3"]],
], "Cuatro formas de expresarla");

const dominio = ejes("Dominio y recorrido de una función definida entre x igual a menos 2 y x igual a 4, con valores de y entre menos 1 y 3", { x: [-3, 5], y: [-2, 4], paso: 1, marcasX: [-2, 4], marcasY: [-1, 3], curvas: [{ f: (x) => (4 / 9) * (x - 1) * (x - 1) - 1, de: -2, a: 4, c: "var(--pen)" }], segs: [[-2, -1.9, 4, -1.9, "var(--leaf)"], [-2.8, -1, -2.8, 3, "var(--red)"]], puntos: [[-2, 3, "", "var(--pen)"], [4, 3, "", "var(--pen)"]], textos: [[1, -1.55, "dominio [−2, 4]", "var(--leaf)"], [0.2, 3.6, "recorrido [−1, 3]", "var(--red)", "start"]] });

const dominioF = cajas("Dominio a partir de la fórmula: polinomios todos los reales, fracciones excluyen los ceros del denominador, raíces cuadradas exigen radicando no negativo", [
  ["Polinomio", ["y = x² − 3x", "Dom = ℝ"]], ["Fracción", ["y = 1/(x − 2)", "Dom = ℝ − {2}"]],
  ["Raíz", ["y = √(x − 1)", "Dom = [1, +∞)"]], ["Contexto", ["lado de un cuadrado", "x > 0"]],
], "¿Qué x se pueden usar?");

const cortes = ejes("Puntos de corte con los ejes: con el eje Y en 0, menos 3, y con el eje X en menos 1 y 3", { x: [-3, 5], y: [-5, 5], paso: 1, marcasX: [], marcasY: [], curvas: [{ f: (x) => x * x - 2 * x - 3, c: "var(--pen)" }], puntos: [[0, -3, "(0, −3) eje Y", "var(--red)", "so"], [-1, 0, "(−1, 0)", "var(--leaf)", "no"], [3, 0, "(3, 0)", "var(--leaf)", "ne"]] });

const crece = ejes("Crecimiento y decrecimiento: la función crece hasta x igual a 1, decrece entre 1 y 3 y vuelve a crecer", { x: [-1, 5], y: [-2, 5], paso: 1, marcasX: [1, 3], marcasY: [], curvas: [{ f: (x) => 0.5 * (x * x * x - 6 * x * x + 9 * x) - 0.5, de: -0.6, a: 4.4, c: "var(--pen)" }], textos: [[-0.2, 3.6, "crece ↗", "var(--leaf)"], [2, 3.6, "decrece ↘", "var(--red)"], [4.2, -1.3, "crece ↗", "var(--leaf)"]], puntos: [[1, 1.5, "máx", "var(--red)", "n"], [3, -0.5, "mín", "var(--leaf)", "s"]] });

const extremos = cajas("Máximos y mínimos relativos y absolutos de una función", [
  ["Máximo relativo", ["cumbre: crece", "y luego decrece"], "var(--red)"], ["Mínimo relativo", ["valle: decrece", "y luego crece"], "var(--leaf)"],
  ["Máximo absoluto", ["el valor más alto", "de todo el dominio"], "var(--pen)"], ["Mínimo absoluto", ["el valor más bajo", "de todo el dominio"], "var(--inf)"],
], "Extremos");

const continuidad = ejes("Continuidad: la tarifa de un aparcamiento da saltos cada hora, es una función discontinua a trozos", { x: [0, 5], y: [0, 8], paso: 1, pasoY: 2, marcasX: [1, 2, 3, 4], marcasY: [2, 4, 6], ex: "h", ey: "€", segs: [[0, 2, 1, 2, "var(--pen)"], [1, 3.5, 2, 3.5, "var(--pen)"], [2, 5, 3, 5, "var(--pen)"], [3, 6.5, 4, 6.5, "var(--pen)"]], puntos: [[1, 2, "", "var(--pen)", "", true], [1, 3.5, "", "var(--pen)"], [2, 3.5, "", "var(--pen)", "", true], [2, 5, "", "var(--pen)"], [3, 5, "", "var(--pen)", "", true], [3, 6.5, "", "var(--pen)"]], textos: [[2.5, 7.4, "saltos: discontinua", "var(--red)"]] });

const simetria = comparar("Simetrías: función par simétrica respecto al eje Y y función impar simétrica respecto al origen", [
  ["Par", ["f(−x) = f(x)", "simétrica eje Y", "ej.: y = x²"], "var(--pen)"],
  ["Impar", ["f(−x) = −f(x)", "simétrica origen", "ej.: y = x³"], "var(--red)"],
], "Simetrías");

const periodica = ejes("Función periódica: la altura de un punto de una noria se repite cada vuelta", { x: [0, 12], y: [-1, 5], paso: 2, pasoY: 1, marcasX: [4, 8, 12], marcasY: [], ex: "min", ey: "m", curvas: [{ f: (x) => 2 - 2 * Math.cos((2 * Math.PI * x) / 4), c: "var(--inf)" }], textos: [[6, 4.6, "periodo: 4 min", "var(--inf)"]] });

const tendencia = ejes("Tendencia: la temperatura de un café se acerca a la del ambiente, 20 grados, sin llegar a bajar de ella", { x: [0, 60], y: [0, 90], paso: 10, pasoY: 20, marcasX: [20, 40, 60], marcasY: [20, 40, 60, 80], ex: "min", ey: "°C", curvas: [{ f: (x) => 20 + 65 * Math.exp(-x / 15), c: "var(--red)" }, { f: () => 20, c: "var(--muted)", disc: true, w: 1.6 }], textos: [[42, 28, "tiende a 20 °C", "var(--muted)"]] });

const interpretar = ejes("Interpretar una gráfica distancia tiempo de un paseo: ida, parada y vuelta", { x: [0, 60], y: [0, 4], paso: 10, pasoY: 1, marcasX: [20, 30, 60], marcasY: [1, 2, 3], ex: "min", ey: "km", segs: [[0, 0, 20, 2.5, "var(--pen)"], [20, 2.5, 30, 2.5, "var(--sun)"], [30, 2.5, 60, 0, "var(--red)"]], textos: [[8, 2.4, "ida", "var(--pen)"], [25, 3.0, "parada", "var(--sun)"], [50, 1.6, "vuelta", "var(--red)"]] });

const tasa = formula("Tasa de variación media entre dos puntos", "TVM = (f(b) − f(a)) / (b − a)", ["mide lo rápido que cambia la función", "es la pendiente del segmento", "ej.: km recorridos por hora"], "var(--leaf)");

const estudio = pasos("Guion para estudiar una función a partir de su gráfica", ["Dominio y recorrido", "Cortes con los ejes", "Crecimiento y extremos", "Continuidad y simetrías", "Tendencia y periodicidad"], "Estudio completo");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Funciones",
  minutos: 105,
  objetivos: [
    "Reconocer cuándo una relación entre dos variables es una función",
    "Expresar funciones mediante enunciado, tabla, gráfica y fórmula",
    "Calcular el dominio, el recorrido y los puntos de corte con los ejes",
    "Estudiar el crecimiento, los máximos y mínimos, la continuidad y las simetrías",
    "Interpretar gráficas de situaciones reales, su tendencia y periodicidad",
    "Calcular e interpretar la tasa de variación media",
  ],
  claves: ["función", "variable independiente", "dominio", "recorrido", "crecimiento", "máximo", "mínimo", "continuidad", "tasa de variación media"],
  pregunta: {
    texto: "Una app de salud dibuja tu ritmo cardíaco durante un partido. Sin ver los números, ¿podrías decir en qué momentos te esforzaste más o descansaste?",
    respuesta: "Sí: es la <b>gráfica de una función</b> que relaciona el tiempo con las pulsaciones. Donde la línea <b>sube</b>, el esfuerzo aumenta; donde <b>baja</b>, te recuperas; y los <b>picos</b> son los máximos. Leer gráficas así es lo que aprenderás en este tema.",
  },
  lectura: {
    titulo: "Gráficas que cuentan historias",
    html: `<p>Abre cualquier periódico digital o aplicación del móvil y encontrarás gráficas: la evolución del precio de la luz a lo largo del día, la temperatura de la semana, los pasos que has dado, el consumo de datos, el número de seguidores de una cuenta o la curva de contagios de una epidemia. Cada una de ellas representa una <b>función</b>: una relación en la que a cada valor de una variable (el tiempo, por ejemplo) le corresponde un único valor de otra.</p><p>La idea de función se fue formando durante siglos. Galileo estudió cómo la distancia recorrida por un objeto que cae depende del tiempo; Descartes inventó los ejes de coordenadas que hoy usamos para dibujar; y Leibniz y Euler dieron nombre y notación a las funciones, la famosa f(x).</p><p>Saber leer una gráfica es una forma de <b>alfabetización</b> imprescindible hoy. Una gráfica bien interpretada te dice cuándo conviene poner la lavadora, si una inversión va bien o si tu rendimiento mejora con los entrenamientos. Y una gráfica mal leída (o mal hecha a propósito) puede engañarte. En este tema aprenderás a describir cualquier función con un vocabulario preciso: dominio, crecimiento, máximos, continuidad, tendencia… y a sacar conclusiones de ella.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Qué es una función</h3><p>Una <b>función</b> es una relación entre dos variables en la que a cada valor de la primera, la <b>variable independiente</b> (x), le corresponde <b>un único valor</b> de la segunda, la <b>variable dependiente</b> (y). Se escribe y = f(x) y se lee «y es función de x». Por ejemplo, el precio de una carrera de taxi depende de los kilómetros recorridos: para cada distancia hay un solo precio.</p><p>Se puede imaginar una función como una <b>máquina</b>: entra un número, la máquina hace siempre la misma operación y sale un resultado. Si la máquina es «multiplicar por 2 y sumar 1», entonces f(3) = 7, f(0) = 1 y f(−2) = −3. El valor f(a) se llama <b>imagen</b> de a, y a se llama <b>antiimagen</b> o preimagen de f(a).</p>`, svg: maquina },
    { html: `<h3>1.2 ¿Es una función?</h3><p>No toda relación es una función. La relación «persona → su número de teléfono» puede no serlo si alguien tiene dos móviles, porque a un mismo valor le corresponderían dos. En cambio, «persona → su fecha de nacimiento» sí lo es: cada persona tiene una sola fecha.</p><p>Con una gráfica se comprueba con la <b>prueba de la recta vertical</b>: si cualquier recta vertical corta a la gráfica <b>como mucho en un punto</b>, es una función. Una circunferencia no es una función, porque una recta vertical la corta en dos puntos (una x con dos valores de y). Sin embargo, un mismo y sí puede venir de varias x: en y = x², tanto 2 como −2 dan 4, y sigue siendo función.</p>`, svg: esFuncion },
    { html: `<h3>1.3 Formas de expresar una función</h3><p>Una misma función se puede dar de cuatro maneras. Con un <b>enunciado</b> («el taxi cobra 3 € de bajada de bandera y 1 € por kilómetro»). Con una <b>tabla de valores</b>, que muestra algunos pares concretos. Con una <b>gráfica</b>, que permite ver de un vistazo su comportamiento. Y con una <b>fórmula</b> o expresión algebraica, y = x + 3, que permite calcular cualquier valor exacto.</p><p>Pasar de una forma a otra es una habilidad clave. De la fórmula se obtiene la tabla dando valores; de la tabla, la gráfica representando los puntos; y de un enunciado se puede deducir la fórmula. Cada forma tiene ventajas: la tabla es concreta, la gráfica es visual y la fórmula es precisa. Las hojas de cálculo trabajan con las tres a la vez.</p>${tabla(["km (x)", "0", "1", "2", "5", "10"], [["precio (y)", "3 €", "4 €", "5 €", "8 €", "13 €"]])}`, svg: formas },
    { html: `<h3>1.4 Dominio y recorrido</h3><p>El <b>dominio</b> de una función, Dom f, es el conjunto de valores de x para los que la función está definida, es decir, los valores que «pueden entrar en la máquina». El <b>recorrido</b> o imagen, Im f, es el conjunto de valores que toma y. En una gráfica, el dominio se lee en el eje horizontal (la «sombra» de la gráfica sobre el eje X) y el recorrido en el vertical (la sombra sobre el eje Y).</p><p>Si una función está dibujada entre x = −2 y x = 4, su dominio es [−2, 4]. Si sus valores van desde −1 hasta 3, su recorrido es [−1, 3]. Dominio y recorrido se expresan normalmente con <b>intervalos</b>. Leerlos bien en una gráfica es el primer paso de cualquier estudio de funciones.</p>`, svg: dominio },
    { html: `<h3>1.5 Dominio a partir de la fórmula</h3><p>Cuando la función viene dada por una fórmula, el dominio se obtiene preguntándose: «¿hay algún valor de x con el que <b>no se pueda calcular</b>?». En los <b>polinomios</b> se puede calcular siempre: Dom = ℝ. En las <b>fracciones</b> hay que excluir los valores que anulan el denominador: y = 1/(x − 2) tiene Dom = ℝ − {2}. En las <b>raíces cuadradas</b>, el radicando no puede ser negativo: y = √(x − 1) exige x − 1 ≥ 0, es decir, Dom = [1, +∞).</p><p>Además, en los problemas el <b>contexto</b> limita el dominio: si x es el lado de un cuadrado, x &gt; 0; si es el número de entradas vendidas, x es un número natural entre 0 y el aforo. Estas restricciones son tan importantes como las algebraicas, porque una solución fuera del dominio no tiene sentido real.</p>`, svg: dominioF },
    { html: `<h3>1.6 Puntos de corte con los ejes</h3><p>Los <b>puntos de corte</b> con los ejes son lugares clave de una gráfica. El corte con el <b>eje Y</b> se obtiene calculando f(0): es el punto (0, f(0)), y solo puede haber uno. Los cortes con el <b>eje X</b> se obtienen resolviendo la ecuación <b>f(x) = 0</b>: son los puntos (a, 0), y puede haber varios o ninguno.</p><p>Para f(x) = x² − 2x − 3: f(0) = −3, así que corta al eje Y en (0, −3). Resolviendo x² − 2x − 3 = 0 se obtiene x = −1 y x = 3: cortes con el eje X en (−1, 0) y (3, 0). Los ceros de una función separan las zonas donde es <b>positiva</b> (gráfica por encima del eje) de las zonas donde es <b>negativa</b> (por debajo), lo que conecta con las inecuaciones del tema anterior.</p>`, svg: cortes },
    { html: `<h3>2.1 Crecimiento y decrecimiento</h3><p>Una función es <b>creciente</b> en un intervalo si, al aumentar x, también aumenta y: la gráfica «sube» al leerla de izquierda a derecha. Es <b>decreciente</b> si, al aumentar x, y disminuye: la gráfica «baja». Si y no cambia, la función es <b>constante</b> en ese tramo.</p><p>El crecimiento se describe con intervalos de x (no de y). En el dibujo, la función crece en (−∞, 1), decrece en (1, 3) y vuelve a crecer en (3, +∞). Siempre se lee de <b>izquierda a derecha</b>, como un texto. Esta descripción permite responder preguntas reales: ¿en qué meses aumentaron las ventas?, ¿a partir de qué hora bajó la temperatura?, ¿cuándo empezó a recuperarse el ritmo cardíaco?</p>`, svg: crece, video: { id: "IA5gG9ed6SI", titulo: "Dominio, imagen, conjunto positivo y negativo, crecimiento y decrecimiento", canal: "JULIAN CLASES - Matemática Paso a Paso", vistas: 0, megusta: 0 } },
    { html: `<h3>2.2 Máximos y mínimos</h3><p>Un <b>máximo relativo</b> es un punto en el que la función pasa de crecer a decrecer: es una «cumbre», más alta que los puntos cercanos. Un <b>mínimo relativo</b> es un punto donde pasa de decrecer a crecer: un «valle». A los máximos y mínimos se les llama <b>extremos</b>. Se expresan con sus dos coordenadas: «tiene un máximo en (1; 1,5)».</p><p>El <b>máximo absoluto</b> es el valor más alto de toda la función, y el <b>mínimo absoluto</b>, el más bajo. Una función puede tener varios máximos relativos y ninguno absoluto (si sigue subiendo sin fin). En la vida real, los extremos responden a preguntas como «¿a qué hora hubo más tráfico?» o «¿qué precio da el mayor beneficio?». Encontrarlos es una de las aplicaciones más importantes de las matemáticas.</p>`, svg: extremos, video: { id: "ppI4NKTScxw", titulo: "Máximos y mínimos de una función, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 3378058, megusta: 0 } },
    { html: `<h3>2.3 Continuidad</h3><p>Una función es <b>continua</b> si se puede dibujar <b>sin levantar el lápiz</b> del papel. Si tiene saltos, huecos o se «rompe», es <b>discontinua</b>, y los puntos donde ocurre se llaman puntos de discontinuidad. La temperatura a lo largo del día es continua: no pasa de 15 °C a 20 °C sin pasar por los valores intermedios.</p><p>En cambio, muchas tarifas son discontinuas: un aparcamiento que cobra 2 € la primera hora y 1,50 € cada hora o fracción siguiente da un <b>salto</b> cada vez que se cumple una hora. Los envíos de paquetes por tramos de peso o los tramos del IRPF funcionan igual. También son discontinuas las funciones con denominadores que se anulan, como y = 1/x en x = 0, donde la gráfica se rompe en dos ramas.</p>`, svg: continuidad },
    { html: `<h3>2.4 Simetrías</h3><p>Algunas funciones tienen gráficas simétricas, y saberlo ahorra la mitad del trabajo al dibujarlas. Una función es <b>par</b> si f(−x) = f(x) para todo x: su gráfica es <b>simétrica respecto al eje Y</b>, como un espejo vertical. Es el caso de y = x² o y = |x|: f(−3) = f(3).</p><p>Una función es <b>impar</b> si f(−x) = −f(x): su gráfica es <b>simétrica respecto al origen</b>, es decir, si se gira media vuelta alrededor del (0, 0) queda igual. Por ejemplo, y = x³ o y = 1/x. Para comprobarlo algebraicamente se calcula f(−x) y se compara: con f(x) = x² + 1, f(−x) = (−x)² + 1 = x² + 1, par. La mayoría de las funciones no son ni pares ni impares.</p>`, svg: simetria },
    { html: `<h3>2.5 Funciones periódicas</h3><p>Una función es <b>periódica</b> si sus valores se repiten cada cierto intervalo de x, llamado <b>periodo</b>. La altura de una cabina de una noria que da una vuelta cada 4 minutos se repite cada 4 minutos; las mareas suben y bajan aproximadamente cada 12 horas y 25 minutos; los días tienen la misma duración cada año; y el latido del corazón dibuja un patrón que se repite.</p><p>Si conocemos el comportamiento en un periodo, conocemos toda la función: para saber la altura de la cabina a los 21 minutos basta con mirar a los 21 − 5 · 4 = 1 minuto. Las funciones periódicas son fundamentales en física (ondas, sonido, corriente alterna) y en el estudio de fenómenos naturales y económicos con ciclos.</p>`, svg: periodica },
    { html: `<h3>2.6 Tendencia</h3><p>La <b>tendencia</b> de una función describe lo que ocurre cuando x se hace muy grande (o muy pequeño). Algunas funciones crecen sin límite, como el interés compuesto; otras se <b>estabilizan</b> acercándose a un valor. La temperatura de un café recién servido baja deprisa al principio y después cada vez más despacio, acercándose a la temperatura de la habitación, 20 °C, sin bajar de ella.</p><p>Esa recta a la que se acerca la gráfica se llama <b>asíntota</b>. Estudiar la tendencia permite hacer <b>predicciones</b> razonables: cuántos usuarios tendrá una app a largo plazo, a qué temperatura se quedará un horno apagado o cuál será la población máxima de una especie en un ecosistema. Pero cuidado: extrapolar demasiado lejos de los datos puede llevar a conclusiones falsas.</p>`, svg: tendencia },
    { html: `<h3>3.1 Interpretar gráficas de situaciones reales</h3><p>Una gráfica cuenta una historia, y hay que aprender a leerla. En una gráfica <b>distancia-tiempo</b> de un paseo, un tramo que sube indica que nos alejamos de casa; un tramo horizontal, que estamos <b>parados</b>; y un tramo que baja, que volvemos. Cuanto más inclinado es un tramo, más <b>rápido</b> se va.</p><p>Al interpretar hay que fijarse siempre en <b>qué representa cada eje</b> y en sus <b>unidades</b>, en la escala (que puede no empezar en 0 y exagerar los cambios) y en el título. Muchas gráficas de los medios de comunicación manipulan la escala para que un pequeño cambio parezca enorme. Una buena descripción usa el vocabulario del tema: «la distancia crece entre los minutos 0 y 20, se mantiene constante hasta el 30 y decrece hasta el 60».</p>`, svg: interpretar, video: { id: "xb_bdonec6I", titulo: "Análisis de funciones (completo)", canal: "FER-MAT", vistas: 821227, megusta: 0 } },
    { html: `<h3>3.2 Tasa de variación media</h3><p>Para medir <b>cuánto y qué tan rápido</b> cambia una función entre dos puntos se usa la <b>tasa de variación media</b>: TVM[a, b] = (f(b) − f(a)) / (b − a). Es el cambio de y dividido entre el cambio de x. Si en el paseo se pasa de 0 km a 2,5 km en 20 minutos, la TVM es 2,5/20 = 0,125 km/min, es decir, 7,5 km/h: es la <b>velocidad media</b>.</p><p>Si la TVM es positiva, la función ha crecido en ese intervalo; si es negativa, ha decrecido; si es cero, ha vuelto al mismo valor. Gráficamente, es la <b>pendiente</b> del segmento que une los dos puntos. La TVM aparece en todas partes: velocidad media, crecimiento medio de una población por año, aumento medio del precio de la vivienda… y es la puerta de entrada al cálculo que se estudia en Bachillerato.</p>`, svg: tasa },
    { html: `<h3>3.3 Estudio completo de una función</h3><p>Para describir una función de forma ordenada se sigue un guion: 1) <b>dominio y recorrido</b>; 2) <b>puntos de corte</b> con los ejes y signo; 3) intervalos de <b>crecimiento</b> y decrecimiento, con los <b>máximos y mínimos</b>; 4) <b>continuidad</b> y <b>simetrías</b>; 5) <b>tendencia</b> y <b>periodicidad</b>. Con estos datos se puede hacer un esbozo de la gráfica o, al revés, una descripción completa a partir de ella.</p><p>Este estudio no es un fin en sí mismo: sirve para entender fenómenos. Un médico analiza así la curva de la glucosa tras una comida; un economista, la evolución del paro; un entrenador, el rendimiento de un deportista. En los temas siguientes estudiarás familias concretas de funciones (lineales, cuadráticas, de proporcionalidad inversa…) aplicando este mismo guion.</p>`, svg: estudio },
  ],
  ejemplos: [
    { enunciado: "Dada f(x) = x² − 4x + 3, calcula f(0), f(2), f(−1) y los cortes con los ejes.", pasos: ["f(0) = 3; f(2) = 4 − 8 + 3 = −1; f(−1) = 1 + 4 + 3 = 8.", "Corte con el eje Y: (0, 3).", "Eje X: x² − 4x + 3 = 0 → x = 1 o x = 3."], resultado: "Cortes: (0, 3), (1, 0) y (3, 0)." },
    { enunciado: "Halla el dominio de f(x) = 3/(x² − 9) y de g(x) = √(6 − 2x).", pasos: ["f: el denominador se anula si x² = 9, es decir, x = ±3.", "Dom f = ℝ − {−3, 3}.", "g: 6 − 2x ≥ 0 → −2x ≥ −6 → x ≤ 3.", "Dom g = (−∞, 3]."], resultado: "Dom f = ℝ − {±3}; Dom g = (−∞, 3]." },
    { enunciado: "Estudia si f(x) = x⁴ − 2x² y g(x) = x³ − x son pares o impares.", pasos: ["f(−x) = x⁴ − 2x² = f(x): par.", "g(−x) = −x³ + x = −(x³ − x) = −g(x): impar."], resultado: "f es par (simétrica respecto al eje Y) y g impar (respecto al origen)." },
    { enunciado: "La gráfica de la temperatura de un día sube de 8 °C a las 6 h hasta 22 °C a las 15 h y baja hasta 12 °C a las 24 h. Describe crecimiento y extremos.", pasos: ["Crece en (6, 15) y decrece en (15, 24).", "Máximo en (15, 22): la hora más calurosa.", "En [6, 24], el mínimo absoluto es (6, 8)."], resultado: "Máximo absoluto a las 15 h (22 °C); mínimo a las 6 h (8 °C)." },
    { enunciado: "Calcula la TVM de f(x) = x² en [1, 3] y en [3, 5]. ¿Qué indica?", pasos: ["TVM[1, 3] = (9 − 1)/2 = 4.", "TVM[3, 5] = (25 − 9)/2 = 8.", "La segunda es mayor."], resultado: "La función crece cada vez más deprisa al aumentar x." },
    { enunciado: "Un aparcamiento cobra 2 € la primera hora y 1,50 € cada hora o fracción siguiente, con un máximo de 12 € al día. ¿Cuánto cuestan 3 h 10 min? ¿Es continua la función?", pasos: ["3 h 10 min = 1.ª hora + 3 fracciones.", "2 + 3 · 1,50 = 6,50 €.", "Da saltos al cumplirse cada hora."], resultado: "6,50 €; es discontinua (función escalonada)." },
  ],
  errores: [
    "Pensar que una gráfica no es función porque un mismo valor de y se repite; lo que no puede repetirse es la x.",
    "Escribir los intervalos de crecimiento con valores de y en lugar de x.",
    "Confundir el corte con el eje X (f(x) = 0) con el corte con el eje Y (x = 0).",
    "Olvidar excluir del dominio los valores que anulan un denominador.",
    "Llamar máximo al valor de x («el máximo es 3») en lugar de dar el punto completo.",
    "Leer una gráfica sin mirar las unidades o una escala que no empieza en 0.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Son funciones? a) Cada alumno → su altura. b) Cada número → su raíz cuadrada (±). c) Cada día → temperatura máxima.", sol: "a) Sí: cada alumno tiene una altura. b) No, si se toman las dos raíces: 9 → 3 y −3. c) Sí: cada día tiene una única máxima." },
    { nivel: "básico", q: "Si f(x) = 3x − 5, calcula f(0), f(2), f(−1) y la x tal que f(x) = 10.", sol: "f(0) = −5; f(2) = 1; f(−1) = −8. 3x − 5 = 10 → x = 5." },
    { nivel: "básico", q: "Haz una tabla de valores de y = x² − 1 para x = −2, −1, 0, 1, 2 y dibuja la gráfica.", sol: "Valores: 3, 0, −1, 0, 3. Es una parábola simétrica con mínimo en (0, −1)." },
    { nivel: "básico", q: "Un fontanero cobra 25 € por desplazamiento y 30 € por hora. Escribe la fórmula y calcula el precio de 2,5 horas.", sol: "y = 25 + 30x. Para x = 2,5: 25 + 75 = 100 €." },
    { nivel: "básico", q: "Halla el dominio de: a) y = 2x³ − x b) y = 5/(x + 4) c) y = √x.", sol: "a) ℝ. b) ℝ − {−4}. c) [0, +∞)." },
    { nivel: "básico", q: "Calcula los cortes con los ejes de y = 2x − 6.", sol: "Eje Y: y = −6 → (0, −6). Eje X: 2x − 6 = 0 → x = 3 → (3, 0)." },
    { nivel: "básico", q: "Una función crece de x = 0 a x = 4, decrece de 4 a 7 y es constante de 7 a 10. ¿Dónde tiene un máximo relativo?", sol: "En x = 4, donde pasa de crecer a decrecer." },
    { nivel: "básico", q: "¿Es continua la función que da el precio de enviar un paquete según su peso por tramos (hasta 1 kg: 4 €; de 1 a 5 kg: 7 €…)?", sol: "No: da saltos en 1 kg, 5 kg… Es una función escalonada discontinua." },
    { nivel: "básico", q: "Di si es par, impar o ninguna: y = x², y = x³, y = x + 1.", sol: "x² par; x³ impar; x + 1 ninguna (f(−x) = −x + 1, no coincide con f(x) ni con −f(x))." },
    { nivel: "básico", q: "Una noria tarda 6 minutos en dar una vuelta. ¿Qué altura tendrá una cabina a los 20 minutos si sabemos su altura a los 2 minutos?", sol: "La misma que a los 2 minutos, porque 20 = 3 · 6 + 2 (periodo de 6 min)." },
    { nivel: "básico", q: "Calcula la TVM de f(x) = 4x + 1 en [0, 3]. ¿Qué observas?", sol: "(13 − 1)/3 = 4. En una función lineal la TVM es siempre la pendiente." },
    { nivel: "básico", q: "En una gráfica distancia-tiempo, ¿qué significa un tramo horizontal? ¿Y uno que baja?", sol: "Horizontal: la persona está parada (la distancia no cambia). Baja: se acerca al punto de partida." },
    { nivel: "medio", q: "Halla el dominio de f(x) = (x + 1)/(x² − 4x) y de g(x) = √(x² − 9).", sol: "f: x² − 4x = x(x − 4) = 0 → x = 0 o 4. Dom f = ℝ − {0, 4}. g: x² − 9 ≥ 0 → x ≤ −3 o x ≥ 3. Dom g = (−∞, −3] ∪ [3, +∞)." },
    { nivel: "medio", q: "Calcula los cortes con los ejes de f(x) = x³ − 4x.", sol: "Eje Y: f(0) = 0 → (0, 0). Eje X: x(x² − 4) = 0 → x = 0, ±2: (0, 0), (2, 0), (−2, 0)." },
    { nivel: "medio", q: "Para f(x) = x² − 6x + 5, halla los cortes y di en qué intervalos es positiva y negativa.", sol: "Eje Y: (0, 5). Eje X: x = 1 y x = 5. Positiva en (−∞, 1) ∪ (5, +∞) y negativa en (1, 5)." },
    { nivel: "medio", q: "Estudia la simetría de f(x) = x⁴ − 3x² + 2 y de g(x) = 2x/(x² + 1).", sol: "f(−x) = x⁴ − 3x² + 2 = f(x): par. g(−x) = −2x/(x² + 1) = −g(x): impar." },
    { nivel: "medio", q: "Describe la función representada por: «un ciclista sale de casa, recorre 15 km en 45 minutos, descansa 15 minutos y vuelve en 30 minutos».", sol: "Dominio [0, 90] min; recorrido [0, 15] km. Crece en (0, 45), constante en (45, 60), decrece en (60, 90). Máximo de 15 km entre los minutos 45 y 60. Continua." },
    { nivel: "medio", q: "En el ejercicio anterior, calcula la velocidad media de ida y de vuelta con la TVM.", sol: "Ida: 15/45 = 1/3 km/min = 20 km/h. Vuelta: −15/30 = −0,5 km/min, es decir, 30 km/h hacia casa (el signo indica que se acerca)." },
    { nivel: "medio", q: "La población de un pueblo fue 2.400 habitantes en 2000, 2.100 en 2010 y 2.000 en 2020. Calcula la TVM de cada década e interpreta.", sol: "2000-2010: −300/10 = −30 hab/año. 2010-2020: −100/10 = −10 hab/año. Decrece, pero cada vez más despacio." },
    { nivel: "medio", q: "Dibuja una función con dominio [−3, 3], recorrido [0, 4], par y con un máximo en (0, 4).", sol: "Por ejemplo, una «montaña» simétrica que empieza en (−3, 0), sube hasta (0, 4) y baja hasta (3, 0). La parábola y = 4 − 4x²/9 cumple todo." },
    { nivel: "medio", q: "Un móvil pierde batería así: 100 % a las 8 h, 70 % a las 12 h, 70 % a las 13 h y 20 % a las 20 h. Describe crecimiento y calcula la TVM entre las 13 h y las 20 h.", sol: "Decrece en (8, 12), constante en (12, 13) (quizá apagado) y decrece en (13, 20). TVM = (20 − 70)/7 ≈ −7,1 % por hora." },
    { nivel: "medio", q: "Halla f(a + 1) si f(x) = x² − 2x, y simplifica.", sol: "(a + 1)² − 2(a + 1) = a² + 2a + 1 − 2a − 2 = a² − 1." },
    { nivel: "medio", q: "¿Para qué valores de x es f(x) = 2x + 3 mayor que g(x) = x² ?", sol: "2x + 3 > x² → x² − 2x − 3 < 0 → raíces −1 y 3 → x ∈ (−1, 3)." },
    { nivel: "avanzado", q: "Un rectángulo tiene 20 m de perímetro. Expresa su área en función de la base x, indica el dominio y halla el máximo.", sol: "Altura 10 − x. A(x) = x(10 − x) = 10x − x². Dominio (0, 10). Es una parábola con vértice en x = 5: el área máxima es 25 m² (un cuadrado)." },
    { nivel: "avanzado", q: "Halla el dominio de f(x) = √(x + 2)/(x − 3).", sol: "x + 2 ≥ 0 → x ≥ −2, y x ≠ 3. Dom = [−2, 3) ∪ (3, +∞)." },
    { nivel: "avanzado", q: "La temperatura de un horno que se apaga sigue T(t) = 20 + 180 · 0,9ᵗ (t en minutos). Calcula T(0), T(10) y T(30). ¿A qué valor tiende?", sol: "T(0) = 200 °C; T(10) ≈ 20 + 180 · 0,349 ≈ 82,8 °C; T(30) ≈ 20 + 180 · 0,042 ≈ 27,6 °C. Tiende a 20 °C (asíntota y = 20)." },
    { nivel: "avanzado", q: "Demuestra que la suma de dos funciones pares es par y que el producto de dos impares es par.", sol: "Si f y g son pares: (f + g)(−x) = f(−x) + g(−x) = f(x) + g(x). Si son impares: (fg)(−x) = f(−x)g(−x) = (−f(x))(−g(x)) = f(x)g(x)." },
    { nivel: "avanzado", q: "Una compañía cobra por el agua: 0,80 €/m³ hasta 10 m³, y 1,50 €/m³ por el exceso. Escribe la función a trozos y calcula el coste de 18 m³.", sol: "C(x) = 0,8x si 0 ≤ x ≤ 10; C(x) = 8 + 1,5(x − 10) si x > 10. C(18) = 8 + 12 = 20 €. Es continua (en x = 10 ambas dan 8 €)." },
    { nivel: "avanzado", q: "Calcula la TVM de f(x) = 1/x en [1, 2] y en [2, 4]. ¿Qué tipo de crecimiento tiene?", sol: "[1, 2]: (1/2 − 1)/1 = −0,5. [2, 4]: (1/4 − 1/2)/2 = −0,125. Decrece cada vez más despacio." },
    { nivel: "avanzado", q: "Se lanza una pelota y su altura es h(t) = −5t² + 20t + 1,5. Halla el dominio con sentido físico, la altura máxima y cuándo la alcanza.", sol: "Máximo en el vértice: t = −20/(−10) = 2 s, h(2) = −20 + 40 + 1,5 = 21,5 m. Toca el suelo cuando h = 0: t ≈ 4,07 s. Dominio [0; 4,07]." },
    { nivel: "avanzado", q: "Inventa una situación real que se represente con una función periódica y otra con una función con tendencia, y descríbelas.", sol: "Periódica: el nivel del mar en un puerto, que sube y baja cada unas 12 h 25 min. Con tendencia: los usuarios de una app que crecen rápido y se estabilizan cerca de un máximo. (Respuesta abierta.)" },
    { nivel: "avanzado", q: "Una gráfica muestra las ventas de una tienda con el eje Y empezando en 9.800 €; las ventas pasan de 9.900 € a 10.100 €. ¿Por qué parece un aumento enorme? Calcula el porcentaje real.", sol: "Al no empezar el eje en 0, una diferencia de 200 € ocupa casi toda la altura. El aumento real es 200/9.900 ≈ 2 %." },
  ],
  quiz: [
    { q: "En una función, a cada valor de x le corresponde…", o: ["varios valores de y", "un único valor de y", "ningún valor", "el mismo valor siempre"], a: 1, e: "Esa es la definición de función." },
    { q: "Una circunferencia dibujada en unos ejes…", o: ["es una función", "no es una función", "es una función par", "es periódica"], a: 1, e: "Una recta vertical la corta dos veces." },
    { q: "Si f(x) = x² − 3, f(−2) =", o: ["1", "−7", "7", "−1"], a: 0, e: "4 − 3 = 1." },
    { q: "La variable que se elige libremente es la…", o: ["dependiente", "independiente", "constante", "periódica"], a: 1, e: "x es la variable independiente." },
    { q: "El dominio de y = 1/(x − 5) es…", o: ["ℝ", "ℝ − {5}", "ℝ − {−5}", "(5, +∞)"], a: 1, e: "x = 5 anula el denominador." },
    { q: "El dominio de y = √(x + 3) es…", o: ["[−3, +∞)", "(−3, +∞)", "[3, +∞)", "ℝ"], a: 0, e: "x + 3 ≥ 0." },
    { q: "El dominio de un polinomio es…", o: ["ℝ", "ℕ", "[0, +∞)", "depende del grado"], a: 0, e: "Siempre se puede calcular." },
    { q: "El corte con el eje Y se calcula con…", o: ["f(x) = 0", "f(0)", "f(1)", "x = y"], a: 1, e: "En el eje Y, x = 0." },
    { q: "Los cortes con el eje X de y = x² − 9 son…", o: ["(0, −9)", "(3, 0) y (−3, 0)", "(9, 0)", "no tiene"], a: 1, e: "x² − 9 = 0 → x = ±3." },
    { q: "Una función es creciente si al aumentar x…", o: ["y disminuye", "y aumenta", "y no cambia", "x disminuye"], a: 1, e: "La gráfica sube de izquierda a derecha." },
    { q: "Un punto donde la función pasa de crecer a decrecer es…", o: ["un mínimo", "un máximo", "un corte", "una asíntota"], a: 1, e: "Es una cumbre." },
    { q: "Una función que se dibuja sin levantar el lápiz es…", o: ["periódica", "continua", "par", "creciente"], a: 1, e: "Definición de continuidad." },
    { q: "La tarifa de un parking por horas o fracción es…", o: ["continua", "discontinua", "par", "constante"], a: 1, e: "Da saltos cada hora." },
    { q: "Una función par es simétrica respecto…", o: ["al eje X", "al eje Y", "al origen", "a y = x"], a: 1, e: "f(−x) = f(x)." },
    { q: "y = x³ es…", o: ["par", "impar", "periódica", "constante"], a: 1, e: "f(−x) = −x³ = −f(x)." },
    { q: "Si una función se repite cada 5 unidades, su periodo es…", o: ["1/5", "5", "10", "no tiene"], a: 1, e: "Se repite cada 5." },
    { q: "La TVM de f(x) = x² en [0, 2] es…", o: ["2", "4", "1", "0"], a: 0, e: "(4 − 0)/2 = 2." },
    { q: "Si la TVM en un intervalo es negativa, la función…", o: ["ha crecido", "ha decrecido", "es constante", "es par"], a: 1, e: "Ha bajado en ese intervalo." },
    { q: "En una gráfica distancia-tiempo, un tramo muy inclinado indica…", o: ["parada", "velocidad alta", "vuelta", "error"], a: 1, e: "Mucha distancia en poco tiempo." },
    { q: "La temperatura de un café que se enfría tiende a…", o: ["0 °C", "la temperatura ambiente", "infinito", "100 °C"], a: 1, e: "Se acerca a la del ambiente." },
  ],
  examen: [
    { q: "f(x) = 2x² − x. f(3) =", o: ["15", "17", "12", "33"], a: 0, e: "18 − 3." },
    { q: "Dominio de y = 4/(x² − 1):", o: ["ℝ − {1}", "ℝ − {±1}", "ℝ", "(1, +∞)"], a: 1, e: "x² = 1 → x = ±1." },
    { q: "Corte con el eje Y de y = 5 − 2x:", o: ["(0, 5)", "(5, 0)", "(2,5; 0)", "(0, −2)"], a: 0, e: "f(0) = 5." },
    { q: "Si crece hasta x = 2 y luego decrece, en x = 2 hay…", o: ["un mínimo", "un máximo", "un corte", "una discontinuidad"], a: 1, e: "Cambio de creciente a decreciente." },
    { q: "y = |x| es…", o: ["impar", "par", "periódica", "discontinua"], a: 1, e: "|−x| = |x|." },
    { q: "TVM de f(x) = 3x + 2 en [1, 5]:", o: ["3", "12", "4", "17"], a: 0, e: "Es la pendiente." },
    { q: "Recorrido de una función cuyos valores van de −2 a 6:", o: ["[−2, 6]", "ℝ", "[0, 6]", "(−2, 6)"], a: 0, e: "Se lee en el eje Y." },
    { q: "¿Cuál NO puede ser una función?", o: ["Una parábola", "Una recta horizontal", "Una recta vertical", "Una línea quebrada"], a: 2, e: "Una x tendría infinitos valores de y." },
  ],
  feynman: ["Qué es una función y cómo se reconoce en una gráfica", "Qué son el dominio y el recorrido y cómo se calculan", "Cómo se describen el crecimiento y los máximos y mínimos", "Qué mide la tasa de variación media"],
  figura: {
    titulo: "El guion para estudiar una función",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Guion: dominio y recorrido, cortes, crecimiento y extremos, continuidad y simetría, tendencia y periodicidad">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Dominio y recorrido", "x permitidas · y alcanzadas", "var(--pen)"], ["Cortes con los ejes", "f(0) · f(x) = 0 · signo", "var(--leaf)"], ["Crecimiento y extremos", "sube / baja · máximos y mínimos", "var(--red)"], ["Continuidad y simetría", "sin levantar el lápiz · par / impar", "var(--inf)"], ["Tendencia y periodo", "a qué se acerca · si se repite", "var(--sun)"]].map(([n, f, c], i) => `<rect x="16" y="${12 + i * 43}" width="608" height="36" rx="9" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="30" y="${36 + i * 43}" font-size="15" font-weight="700" fill="${c}" ${D}>${n}</text><text x="280" y="${36 + i * 43}" font-size="14" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "FWnpnc1qLWo", titulo: "Dominio y recorrido de una función", canal: "matematicasyeso", vistas: 554717, megusta: 0, busqueda: "dominio y recorrido de una función" },
  mapa: mapa("FUNCIONES", "var(--inf)", [
    ["Definición", "x → un único y · f(x)", "var(--pen)"],
    ["Dominio", "Dom · recorrido · cortes", "var(--leaf)"],
    ["Forma", "crece · máx · mín · continua", "var(--red)"],
    ["Uso", "interpretar · TVM · tendencia", "var(--sun)"],
  ], 230),
  glosario: [
    ["Función", "Relación que asigna a cada x un único valor y."],
    ["Variable independiente", "La variable que se elige (x)."],
    ["Variable dependiente", "La variable cuyo valor depende de x (y)."],
    ["Imagen", "Valor f(a) que corresponde a un valor a."],
    ["Dominio", "Conjunto de valores de x para los que la función existe."],
    ["Recorrido", "Conjunto de valores que toma la función."],
    ["Puntos de corte", "Puntos donde la gráfica cruza los ejes."],
    ["Función creciente", "La que aumenta al aumentar x."],
    ["Función decreciente", "La que disminuye al aumentar x."],
    ["Máximo relativo", "Punto donde la función pasa de crecer a decrecer."],
    ["Mínimo relativo", "Punto donde la función pasa de decrecer a crecer."],
    ["Función continua", "La que se dibuja sin levantar el lápiz."],
    ["Función par", "La que cumple f(−x) = f(x); simétrica respecto al eje Y."],
    ["Función impar", "La que cumple f(−x) = −f(x); simétrica respecto al origen."],
    ["Función periódica", "La que repite sus valores cada cierto intervalo (periodo)."],
    ["Asíntota", "Recta a la que se acerca la gráfica sin llegar a tocarla."],
    ["Tasa de variación media", "Cociente (f(b) − f(a)) / (b − a)."],
  ],
  situacion: {
    titulo: "Detectives de gráficas en los medios",
    reto: "Las noticias están llenas de gráficas: precio de la luz, temperaturas, audiencias, contagios… Vuestro equipo será un «verificador de datos» que analiza gráficas reales, las describe con rigor y detecta las que pueden inducir a error.",
    pasos: [
      "Recopilad cinco gráficas de funciones de medios de comunicación o webs oficiales (INE, AEMET, Red Eléctrica).",
      "Para cada una, identificad las variables, las unidades, el dominio y el recorrido.",
      "Describid el crecimiento, los máximos y mínimos, la continuidad y la tendencia, y calculad dos TVM significativas.",
      "Revisad la escala de los ejes y decidid si la gráfica es honesta o exagera los cambios.",
      "Rehaced con hoja de cálculo la gráfica más engañosa con una escala correcta.",
    ],
    producto: "Un informe de verificación (presentación o mural) con las cinco gráficas analizadas y una gráfica corregida.",
    evaluacion: ["Usa con precisión el vocabulario de funciones.", "Calcula e interpreta correctamente la tasa de variación media.", "Detecta y explica manipulaciones en las escalas.", "Presenta las conclusiones de forma clara y crítica."],
  },
  tarjetas: [
    ["Función", "A cada x le corresponde un único y."],
    ["Prueba de la recta vertical", "Si la corta más de una vez, no es función."],
    ["Dominio", "Valores de x permitidos."],
    ["Recorrido", "Valores de y que alcanza."],
    ["Dominio de una fracción", "Quitar los x que anulan el denominador."],
    ["Dominio de √", "Radicando ≥ 0."],
    ["Corte con eje Y", "(0, f(0))"],
    ["Corte con eje X", "Resolver f(x) = 0."],
    ["Máximo relativo", "Pasa de crecer a decrecer."],
    ["Par / impar", "f(−x) = f(x) / f(−x) = −f(x)."],
    ["Continua", "Se dibuja sin levantar el lápiz."],
    ["TVM", "(f(b) − f(a)) / (b − a)"],
  ],
  familias: ["Mirad juntos una gráfica de la factura de la luz o de la app del tiempo y describid cuándo sube y baja.", "Registrad la temperatura de un vaso de agua caliente cada 5 minutos y dibujad la gráfica.", "Buscad en las noticias una gráfica y comprobad si su escala empieza en 0.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico y funcional: concepto de función, formas de representación, dominio, recorrido, cortes, monotonía, extremos, continuidad, simetrías, periodicidad, tendencia y tasa de variación media en contextos reales (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Sensores o apps del móvil (acelerómetro, temperatura) para generar funciones reales.", "Verificación de gráficas de medios (situación de aprendizaje).", "Juego de «cuéntame la historia» a partir de gráficas sin rótulos.", "GeoGebra para comparar la TVM con la pendiente de la secante."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Instituto Nacional de Estadística (datos para gráficas)", url: "https://www.ine.es/" },
    { t: "GeoGebra: funciones", url: "https://www.geogebra.org/" },
  ],
  revisado: "2026-11-13",
};
