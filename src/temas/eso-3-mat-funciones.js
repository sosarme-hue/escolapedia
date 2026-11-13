// Matemáticas 3º ESO · Funciones y gráficas. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar, resumen, rot, C, RD, DECRET } = require("./_eso3L1");

const maquina = lienzo("Una función es como una máquina: a cada valor de entrada x le asigna un único valor de salida y", `
  <rect x="86" y="44" width="88" height="64" rx="12" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>
  ${tx(130, 82, "f(x) = 2x + 1", { fs: 13, c: "var(--pen)", max: 80 })}
  <path d="M30 76 H82 M178 76 H230" stroke="var(--ink)" stroke-width="2.5"/><path d="M82 76 l-8 -5 v10 z M230 76 l-8 -5 v10 z" fill="var(--ink)"/>
  ${tx(40, 64, "x = 3", { fs: 14, c: "var(--red)" })}${tx(214, 64, "y = 7", { fs: 14, c: "var(--leaf)" })}
  ${tx(130, 140, "variable independiente → dependiente", { fs: 12, c: "var(--muted)" })}${tx(130, 162, "a cada x, un único y", { fs: 12.5 })}`, 176);

const formas = cajas("Cuatro formas de expresar una función", [
  ["Enunciado", ["el taxi cobra 3 €", "y 1 € por km"]], ["Tabla", ["x: 0 1 2 3", "y: 3 4 5 6"]],
  ["Fórmula", ["y = 3 + x", "(expresión algebraica)"]], ["Gráfica", ["puntos (x, y)", "en unos ejes"]],
], "Expresar una función");

const prueba = comparar("Prueba de la recta vertical: una gráfica es de una función si cada vertical la corta como mucho una vez", [
  ["Sí es función", ["cada vertical", "corta 1 vez", "o ninguna"], "var(--leaf)"],
  ["No es función", ["una circunferencia:", "una vertical", "corta 2 veces"], "var(--red)"],
], "¿Es función?");

const dominio = ejes("Dominio y recorrido de una función leídos en su gráfica: dominio de menos dos a cinco y recorrido de menos uno a cuatro", { x: [-3, 6], y: [-2, 5], paso: 1, marcasX: [-2, 2, 5], marcasY: [-1, 4], curvas: [{ f: (x) => (x < 1 ? 4 - (x - 1) ** 2 * 0.55 : x < 3 ? 4 - (x - 1) * 2.5 : -1 + (x - 3) * 1.25), de: -2, a: 5, c: "var(--pen)" }], segs: [[-2, -1.7, 5, -1.7, "var(--red)"], [-2.6, -1, -2.6, 4, "var(--leaf)"]], puntos: [[-2, 4 - 9 * 0.55, "", "var(--pen)"], [5, 1.5, "", "var(--pen)"]], textos: [[1.5, -1.35, "dominio", "var(--red)"], [-2.4, 4.6, "recorrido", "var(--leaf)", "start"]] });

const cortes = ejes("Puntos de corte de y igual a x al cuadrado menos x menos dos con los ejes", { x: [-3, 4], y: [-3, 5], paso: 1, marcasX: [-1, 2], marcasY: [-2, 2, 4], curvas: [{ f: (x) => x * x - x - 2, c: "var(--pen)", t: "y = x² − x − 2", tx: 2.2, ty: 4.4 }], puntos: [[-1, 0, "(−1, 0)", "var(--red)", "no"], [2, 0, "(2, 0)", "var(--red)", "se"], [0, -2, "(0, −2)", "var(--leaf)", "o"]] });

const continua = comparar("Funciones continuas y discontinuas: la tarifa de un aparcamiento da saltos", [
  ["Continua", ["se dibuja", "sin levantar", "el lápiz"], "var(--leaf)"],
  ["Discontinua", ["saltos o huecos:", "aparcamiento,", "envío por peso"], "var(--red)"],
], "¿Hay saltos?");

const escalones = ejes("Función discontinua: precio de un aparcamiento por horas o fracción", { x: [0, 4], y: [0, 8], paso: 1, pasoY: 2, marcasX: [1, 2, 3, 4], marcasY: [2, 4, 6], ex: "h", ey: "€", segs: [[0, 2, 1, 2, "var(--red)"], [1, 4, 2, 4, "var(--red)"], [2, 6, 3, 6, "var(--red)"], [3, 7, 4, 7, "var(--red)"]], puntos: [[0, 2, "", "var(--red)", "n", true], [1, 2, "", "var(--red)"], [1, 4, "", "var(--red)", "n", true], [2, 4, "", "var(--red)"], [2, 6, "", "var(--red)", "n", true], [3, 6, "", "var(--red)"], [3, 7, "", "var(--red)", "n", true]] });

const monotonia = ejes("Crecimiento, decrecimiento, máximo y mínimo de una función", { x: [-1, 7], y: [-1, 5], paso: 1, marcasX: [1, 3, 5], marcasY: [1, 4], curvas: [{ f: (x) => 2.5 + 1.5 * Math.sin((x - 0) * Math.PI / 4), de: -0.5, a: 6.8, c: "var(--pen)" }], puntos: [[2, 4, "máx (2, 4)", "var(--red)", "n"], [6, 1, "mín (6, 1)", "var(--leaf)", "s"]], zonas: [{ de: -0.5, a: 2, c: "var(--leaf)" }, { de: 2, a: 6, c: "var(--red)" }], textos: [[0.7, 0.4, "crece", "var(--leaf)"], [4, 0.4, "decrece", "var(--red)"]] });

const extremos = ejes("Máximos y mínimos relativos y absolutos: la cima más alta es el máximo absoluto", { x: [0, 6], y: [0, 5], paso: 1, marcasX: [1, 3, 5], marcasY: [1, 2, 3, 4], curvas: [{ f: (x) => 1.5 + 0.35 * x + Math.sin((Math.PI * x) / 2), de: 0, a: 6, c: "var(--pen)" }], puntos: [[1.143, 2.875, "máx. relativo", "var(--sun)", "n"], [2.857, 1.525, "mín. relativo", "var(--leaf)", "s"], [5.143, 4.275, "máx. absoluto", "var(--red)", "o"]] });

const tvm = formula("Tasa de variación media: cuánto cambia la función por unidad en un intervalo", "TVM[a, b] = (f(b) − f(a)) / (b − a)", ["Positiva: crece en media", "Negativa: decrece en media", "Es la pendiente del segmento"], "var(--leaf)");

const simetria = comparar("Simetría par respecto del eje Y e impar respecto del origen", [
  ["Par", ["f(−x) = f(x)", "y = x²", "espejo en eje Y"], "var(--pen)"],
  ["Impar", ["f(−x) = −f(x)", "y = x³", "giro de 180°"], "var(--red)"],
], "Simetrías");

const periodica = ejes("Función periódica: la altura de una noria se repite cada vuelta", { x: [0, 12], y: [0, 6], paso: 2, pasoY: 2, marcasX: [4, 8, 12], marcasY: [2, 4, 6], ex: "min", ey: "m", curvas: [{ f: (x) => 3 - 2.6 * Math.cos((x * Math.PI) / 2), c: "var(--inf)" }], segs: [[2, 5.75, 6, 5.75, "var(--red)"]], textos: [[4, 4.9, "periodo 4 min", "var(--red)"]] });

const tendencia = ejes("Tendencia: la temperatura de un café se acerca a la de la habitación", { x: [0, 60], y: [0, 90], paso: 10, pasoY: 20, marcasX: [20, 40, 60], marcasY: [20, 40, 60, 80], ex: "min", ey: "°C", curvas: [{ f: (x) => 20 + 65 * Math.exp(-x / 15), c: "var(--red)", t: "café", tx: 9, ty: 62 }, { f: () => 20, c: "var(--muted)", disc: true, t: "20 °C", tx: 52, ty: 26 }] });

const ruta = ejes("Gráfica de altura frente a distancia de una ruta en bici: la cuesta más dura es donde la gráfica es más inclinada", { x: [0, 30], y: [0, 800], paso: 5, pasoY: 200, marcasX: [10, 20, 30], marcasY: [200, 400, 600], ex: "km", ey: "m", curvas: [{ f: (x) => (x < 8 ? 200 + 25 * x : x < 12 ? 400 + 75 * (x - 8) : x < 20 ? 700 - 40 * (x - 12) : 380 + 6 * (x - 20)), c: "var(--leaf)" }], zonas: [{ de: 8, a: 12, c: "var(--red)" }], textos: [[10, 760, "¡cuesta!", "var(--red)"]] });

const familias = cajas("Primeras familias de funciones y sus gráficas", [
  ["Lineal", ["y = mx + n", "recta"], "var(--pen)"], ["Cuadrática", ["y = ax² + bx + c", "parábola"], "var(--red)"],
  ["Inversa", ["y = k/x", "hipérbola"], "var(--leaf)"], ["Exponencial", ["y = aˣ", "crece muy rápido"], "var(--inf)"],
], "Familias");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Funciones y gráficas",
  minutos: 110,
  objetivos: [
    "Reconocer funciones y expresarlas con enunciados, tablas, fórmulas y gráficas",
    "Determinar el dominio, el recorrido y los puntos de corte con los ejes",
    "Estudiar continuidad, crecimiento, máximos y mínimos de una función a partir de su gráfica",
    "Calcular e interpretar la tasa de variación media",
    "Reconocer simetrías, periodicidad y tendencias",
    "Interpretar gráficas de situaciones reales de forma crítica",
  ],
  claves: ["función", "variable", "dominio", "recorrido", "continuidad", "crecimiento", "máximo", "tasa de variación"],
  pregunta: {
    texto: "En una app de bicis ves la gráfica de tu ruta: altura frente a distancia. ¿Cómo sabes dónde está la cuesta más dura?",
    respuesta: "Donde la gráfica <mark>sube más inclinada</mark>. Una gráfica cuenta una historia: dónde sube y baja la función, dónde alcanza su punto más alto y cuánto cambia en cada tramo. Leerla bien es una destreza que usarás en ciencias, en economía y en tu día a día.",
  },
  lectura: {
    titulo: "La gráfica que salvó vidas",
    html: `<p>En 1854, un brote de cólera mató a más de 500 personas en apenas diez días en el barrio londinense del Soho. La mayoría de los médicos creía que la enfermedad se transmitía por el «mal aire». Un médico llamado John Snow no estaba de acuerdo: sospechaba del agua. Para demostrarlo, hizo algo nuevo: dibujó en un mapa cada muerte y contó los casos día a día.</p><p>Las muertes se concentraban alrededor de una fuente pública de Broad Street. Snow convenció a las autoridades para que quitaran la palanca de la bomba, y el brote se apagó. Años después, la enfermera Florence Nightingale usó gráficos de sectores y de evolución temporal para demostrar que en los hospitales militares morían más soldados por infecciones que por heridas de guerra, y sus gráficos cambiaron las normas de higiene de todo el mundo.</p><p>Hoy vemos gráficas a diario: la evolución de los contagios, el precio de la luz por horas, la temperatura de la semana o los kilómetros de una ruta. Todas son funciones: relacionan una cantidad con otra. En este tema aprenderás a leerlas con ojo crítico: dónde crecen y decrecen, cuáles son sus máximos y mínimos, qué velocidad de cambio tienen y qué tendencia muestran.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Qué es una función</h3><p>Una <b>función</b> es una relación entre dos magnitudes que asigna a cada valor de la primera <b>un único valor</b> de la segunda. La primera magnitud es la <b>variable independiente</b> (x), y la segunda, la <b>variable dependiente</b> (y), porque su valor depende de x. Se escribe <mark>y = f(x)</mark>, que se lee «y es función de x».</p><p>Ejemplos: el precio de una compra es función del peso de fruta; la altura de una pelota es función del tiempo; el área de un cuadrado es función de su lado (A = l²). En cambio, la relación «persona → número de teléfono» no es función si alguien tiene dos teléfonos, porque a un mismo valor le corresponderían dos.</p><p>Se puede imaginar una función como una máquina: entra x, la máquina aplica una regla y sale un único y. Si f(x) = 2x + 1, entonces f(3) = 7: decimos que 7 es la <b>imagen</b> de 3, y que 3 es la <b>antiimagen</b> de 7.</p>`, svg: maquina },
    { html: `<h3>1.2 Formas de expresar una función</h3><p>Una misma función se puede dar de cuatro maneras, y conviene saber pasar de una a otra:</p><ul><li><b>Enunciado</b>: «un taxi cobra 3 € de bajada de bandera y 1 € por kilómetro».</li><li><b>Tabla de valores</b>: para x = 0, 1, 2, 3 km, y = 3, 4, 5, 6 €.</li><li><b>Fórmula</b> o expresión algebraica: y = 3 + x.</li><li><b>Gráfica</b>: los puntos (x, y) dibujados en unos ejes cartesianos.</li></ul><p>Cada forma tiene ventajas. La fórmula permite calcular cualquier valor exacto (con 12,5 km, y = 15,50 €). La tabla organiza unos pocos datos concretos, como los obtenidos en un experimento. La gráfica muestra de un vistazo el comportamiento global: si crece, si tiene saltos, dónde está el máximo.</p><p>No todas las funciones tienen fórmula: la temperatura de una ciudad a lo largo del día es una función, pero solo se conoce midiéndola. Para dibujar una gráfica desde una fórmula, se hace primero una tabla con suficientes valores.</p>`, svg: formas },
    { html: `<h3>1.3 ¿Es una gráfica de una función?</h3><p>Para que una gráfica represente una función, cada valor de x debe tener <b>como mucho una</b> imagen. Se comprueba con la <b>prueba de la recta vertical</b>: si alguna recta vertical corta a la gráfica en <b>más de un punto</b>, no es una función.</p><p>Una recta no vertical, una parábola o una curva que sube y baja como una montaña rusa son funciones. Una circunferencia no lo es: la vertical x = 0 la corta arriba y abajo. Tampoco una recta vertical, como x = 3, porque a x = 3 le corresponden infinitos valores de y.</p><p>Esta condición tiene sentido en la vida real: en un instante concreto, un coche solo puede estar en un lugar; por eso la gráfica «posición frente a tiempo» siempre es una función. En cambio, una misma posición puede repetirse en distintos instantes (el coche vuelve a casa), y eso sí está permitido.</p>`, svg: prueba, video: { id: "AGWlsd6eoMo", titulo: "Identificar si una gráfica corresponde a una función o relación", canal: "IngE Darwin", vistas: 294385, megusta: 0 } },
    { html: `<h3>1.4 Dominio y recorrido</h3><p>El <b>dominio</b> de una función, Dom f, es el conjunto de valores de x que tienen imagen. El <b>recorrido</b> o imagen, Im f, es el conjunto de valores de y que toma la función. En una gráfica, el dominio se lee en el eje horizontal (la «sombra» de la gráfica sobre el eje X) y el recorrido en el eje vertical (su sombra sobre el eje Y).</p><p>En el dibujo, la función está definida de x = −2 a x = 5, así que Dom f = [−2, 5]; y toma valores de −1 a 4, así que Im f = [−1, 4]. Los intervalos se escriben con corchetes si el extremo está incluido y con paréntesis si no.</p><p>Si la función viene dada por una fórmula, el dominio son todos los números reales salvo los que hacen imposible el cálculo: por ejemplo, un denominador igual a 0 (en y = 1/(x − 2), x ≠ 2) o una raíz cuadrada de un número negativo (en y = √x, x ≥ 0). En los problemas reales, el contexto también limita el dominio: un tiempo o una longitud no pueden ser negativos.</p>`, svg: dominio, video: { id: "2CYya8dJovg", titulo: "Hallar el dominio y rango de una función a partir de su gráfica", canal: "math2me", vistas: 1025488, megusta: 0 } },
    { html: `<h3>1.5 Puntos de corte con los ejes</h3><p>Los puntos donde la gráfica corta a los ejes dan información muy valiosa. El <b>corte con el eje Y</b> se obtiene haciendo x = 0: es el punto (0, f(0)). Una función tiene como mucho un corte con el eje Y, porque a x = 0 solo le corresponde una imagen.</p><p>Los <b>cortes con el eje X</b> se obtienen haciendo y = 0 y resolviendo la ecuación f(x) = 0. Sus soluciones se llaman <b>ceros</b> o raíces de la función. Puede haber varios, uno o ninguno.</p><p>Ejemplo: y = x² − x − 2. Con x = 0, y = −2: corta al eje Y en (0, −2). Con y = 0, x² − x − 2 = 0, que da x = 2 y x = −1: corta al eje X en (2, 0) y (−1, 0). Así se conecta lo que aprendiste de ecuaciones con las gráficas: resolver una ecuación es encontrar dónde una gráfica corta al eje X.</p>`, svg: cortes },
    { html: `<h3>1.6 Continuidad</h3><p>Una función es <b>continua</b> si su gráfica se puede dibujar <b>sin levantar el lápiz</b> del papel. Si hay algún salto, hueco o rotura, es <b>discontinua</b> en ese punto.</p><p>Muchas funciones reales son continuas: la temperatura cambia de forma gradual, igual que la altura de una persona o la distancia recorrida por un coche. Otras, en cambio, dan <b>saltos</b>: el precio de un aparcamiento que cobra 2 € la primera hora o fracción, 4 € hasta dos horas, etc.; la tarifa de envío de un paquete según su peso; o el número de alumnos de una clase a lo largo del curso.</p><p>En las gráficas con saltos se usa un convenio: un <b>punto relleno</b> indica que ese valor pertenece a la función y un <b>punto hueco</b>, que no. En el aparcamiento del dibujo, si aparcas exactamente 1 hora pagas 2 €, pero con 1 hora y 1 minuto ya pagas 4 €.</p>`, svg: escalones },
    { html: `<h3>2.1 Crecimiento y decrecimiento</h3><p>Una función es <b>creciente</b> en un intervalo si, al aumentar x, también aumenta y: la gráfica sube al leerla de izquierda a derecha. Es <b>decreciente</b> si, al aumentar x, y disminuye: la gráfica baja. Si y no cambia, la función es <b>constante</b> en ese tramo.</p><p>El crecimiento se expresa con intervalos del eje X. En el dibujo, la función crece en (−0,5; 2), decrece en (2, 6) y vuelve a crecer a partir de 6. Fíjate en que los intervalos se dan siempre con valores de <b>x</b>, nunca de y: es un error frecuente.</p><p>En una gráfica real, crecer y decrecer tienen significado: en una gráfica de temperatura, crecer es calentarse; en una de cuenta bancaria, ganar dinero; en la gráfica de la ruta en bici, subir. Y no solo importa si crece, sino cuánto: una subida suave no es lo mismo que una muy inclinada.</p>`, svg: monotonia, video: { id: "MNSv84Vgrt0", titulo: "Estudio de funciones a partir de su gráfica", canal: "Academia Hipatia CEI", vistas: 193249, megusta: 0 } },
    { html: `<h3>2.2 Máximos y mínimos</h3><p>Una función tiene un <b>máximo relativo</b> en un punto si en él pasa de crecer a decrecer: es la «cima» de una colina de la gráfica. Tiene un <b>mínimo relativo</b> si pasa de decrecer a crecer: es el fondo de un «valle». En el dibujo anterior hay un máximo en (2, 4) y un mínimo en (6, 1).</p><p>El <b>máximo absoluto</b> es el mayor valor que alcanza la función en todo su dominio, y el <b>mínimo absoluto</b>, el menor. Un máximo relativo no tiene por qué ser absoluto: una montaña puede tener varias cimas, pero solo una es la más alta.</p><p>Los máximos y mínimos responden a preguntas prácticas: ¿a qué hora hizo más calor?, ¿en qué mes hubo menos ventas?, ¿cuál es la altura máxima de un balón lanzado?, ¿qué precio da el mayor beneficio? Se expresan dando el punto completo: «el máximo se alcanza en x = 2 y vale 4». En este dibujo, la función tiene dos cimas, pero solo la de la derecha es el máximo absoluto.</p>`, svg: extremos },
    { html: `<h3>2.3 Tasa de variación media</h3><p>Para medir <b>cuánto</b> cambia una función en un intervalo [a, b] se usa la <b>tasa de variación media</b>:</p><p class="formula"><span>TVM[a, b] = (f(b) − f(a)) / (b − a)</span></p><p>Indica cuánto cambia y, en promedio, por cada unidad que aumenta x. Si es positiva, la función crece en media en ese intervalo; si es negativa, decrece; cuanto mayor es su valor absoluto, más rápido es el cambio.</p><p>Ejemplo: un coche está a 40 km de casa a las 10:00 y a 220 km a las 12:00. TVM = (220 − 40)/(12 − 10) = 90 km/h: es su <b>velocidad media</b>. En la ruta en bici, la TVM de la altura entre los km 8 y 12 es (700 − 400)/4 = 75 m por km, la mayor de toda la ruta: ahí está la cuesta más dura.</p><p>Geométricamente, la TVM es la <b>pendiente</b> del segmento que une los puntos (a, f(a)) y (b, f(b)). En las funciones lineales del próximo tema, la TVM es la misma en cualquier intervalo.</p>`, svg: tvm },
    { html: `<h3>2.4 Simetrías</h3><p>Algunas funciones tienen gráficas simétricas, y saberlo ahorra la mitad del trabajo al dibujarlas. Una función es <b>par</b> si f(−x) = f(x) para todo x: su gráfica es simétrica respecto del <b>eje Y</b>, como un reflejo en un espejo. Ejemplos: y = x², y = x⁴, y = |x|.</p><p>Una función es <b>impar</b> si f(−x) = −f(x): su gráfica es simétrica respecto del <b>origen</b>, es decir, no cambia al girarla 180° alrededor de (0, 0). Ejemplos: y = x³, y = 1/x, y = 2x.</p><p>Para comprobarlo con la fórmula, se calcula f(−x). Si f(x) = x² + 1, f(−x) = (−x)² + 1 = x² + 1 = f(x): es par. Si f(x) = x³ − x, f(−x) = −x³ + x = −f(x): es impar. La mayoría de las funciones, como y = x + 1, no son ni pares ni impares.</p>`, svg: simetria },
    { html: `<h3>2.5 Funciones periódicas</h3><p>Una función es <b>periódica</b> si su gráfica se repite cada cierto intervalo de x, llamado <b>periodo</b>. Si el periodo es T, se cumple f(x + T) = f(x) para todo x.</p><p>La naturaleza y la técnica están llenas de funciones periódicas: la altura de una cabina de una noria (periodo: el tiempo de una vuelta), la altura de la marea (unas 12 horas y 25 minutos), el latido del corazón en un electrocardiograma, las fases de la Luna (29,5 días) o la corriente alterna de los enchufes (1/50 de segundo).</p><p>Conocer el periodo permite predecir: si una noria tarda 4 minutos en dar una vuelta, a los 13 minutos la cabina estará en la misma posición que al minuto 1, porque 13 = 3 · 4 + 1. Las funciones trigonométricas que estudiarás en 4º son el modelo matemático de todos estos fenómenos.</p>`, svg: periodica },
    { html: `<h3>2.6 Tendencia de una función</h3><p>Muchas veces interesa saber qué hace una función cuando x se hace muy grande. Esa es su <b>tendencia</b>. Un café recién servido a 85 °C en una habitación a 20 °C se enfría rápido al principio y cada vez más despacio: su temperatura <b>tiende</b> a 20 °C, sin bajar nunca de ahí. Se dice que la recta y = 20 es una <b>asíntota</b> de la gráfica.</p><p>Otras funciones tienden a crecer sin límite, como la población de bacterias, o a acercarse a 0, como la cantidad de un medicamento en la sangre horas después de tomarlo. Y algunas oscilan sin tender a ningún valor, como las periódicas.</p><p>Estudiar la tendencia permite hacer previsiones razonables: hasta dónde bajará la temperatura, cuándo se estabilizarán las ventas o qué ocurrirá con una epidemia si no se toman medidas. Pero hay que ser prudentes: extrapolar mucho más allá de los datos conocidos puede llevar a errores.</p>`, svg: tendencia },
    { html: `<h3>3.1 Interpretar gráficas de la vida real</h3><p>Leer una gráfica es contar la historia que esconde. Antes de nada, mira <b>qué magnitudes</b> hay en cada eje y en <b>qué unidades</b>. Después, recorre la gráfica de izquierda a derecha y describe: dónde crece y decrece, dónde está constante, cuáles son los máximos y mínimos, si hay saltos, y cuál es su tendencia.</p><p>En la gráfica de la ruta en bici, la altura sube suavemente los primeros 8 km, sube mucho entre el km 8 y el 12 (la cuesta más dura, con la mayor TVM), alcanza el punto más alto, de 700 m, en el km 12, baja hasta el km 20 y termina con un llano casi constante.</p><p>Cuidado con las <b>gráficas engañosas</b>: un eje vertical que no empieza en 0 puede exagerar mucho una pequeña subida, y unas escalas distintas pueden hacer que dos gráficas parezcan muy diferentes cuando no lo son. Mira siempre los números de los ejes antes de sacar conclusiones.</p>`, svg: ruta },
    { html: `<h3>3.2 Un primer vistazo a las familias de funciones</h3><p>Hay funciones que aparecen una y otra vez y forman «familias» con gráficas características. Las <b>funciones lineales y afines</b>, y = mx + n, tienen por gráfica una <b>recta</b> y describen cambios a ritmo constante; las estudiarás en el próximo tema.</p><p>Las <b>cuadráticas</b>, y = ax² + bx + c, tienen por gráfica una <b>parábola</b>: es la trayectoria de un balón lanzado o la forma de una antena parabólica. Las de <b>proporcionalidad inversa</b>, y = k/x, tienen por gráfica una <b>hipérbola</b>: es la relación entre la velocidad y el tiempo para recorrer una distancia fija. Las <b>exponenciales</b>, y = aˣ, describen crecimientos que se multiplican, como el interés compuesto.</p><p>Reconocer la familia a la que pertenece una situación ayuda a elegir el modelo adecuado y a predecir su comportamiento. Es lo que hacen los científicos cuando ajustan una fórmula a los datos de un experimento.</p>`, svg: familias },
  ],
  ejemplos: [
    { enunciado: "Para f(x) = x² − 3x, calcula f(2), f(−1) y las antiimágenes de 0.", pasos: ["f(2) = 4 − 6 = −2.", "f(−1) = 1 + 3 = 4.", "x² − 3x = 0 → x(x − 3) = 0."], resultado: "f(2) = −2; f(−1) = 4; antiimágenes de 0: x = 0 y x = 3." },
    { enunciado: "Halla el dominio de f(x) = 5/(x − 4) y de g(x) = √(x + 2).", pasos: ["f: el denominador no puede ser 0 → x ≠ 4.", "g: el radicando debe ser ≥ 0 → x ≥ −2."], resultado: "Dom f = ℝ − {4}; Dom g = [−2, +∞)." },
    { enunciado: "Halla los cortes con los ejes de y = 2x − 6.", pasos: ["Eje Y: x = 0 → y = −6.", "Eje X: 2x − 6 = 0 → x = 3."], resultado: "(0, −6) y (3, 0)." },
    { enunciado: "Calcula la TVM de f(x) = x² en [1, 3] y en [3, 5].", pasos: ["[1, 3]: (9 − 1)/2 = 4.", "[3, 5]: (25 − 9)/2 = 8."], resultado: "4 y 8: la función crece cada vez más deprisa." },
    { enunciado: "Estudia si son pares o impares: f(x) = x⁴ − 2x², g(x) = x³ + x.", pasos: ["f(−x) = x⁴ − 2x² = f(x).", "g(−x) = −x³ − x = −g(x)."], resultado: "f es par; g es impar." },
    { enunciado: "Una noria tarda 6 min en dar una vuelta. ¿Dónde estará una cabina a los 40 min si en el minuto 4 estaba arriba del todo?", pasos: ["Periodo 6 min.", "40 = 6 · 6 + 4 → mismo punto que en el minuto 4."], resultado: "Arriba del todo." },
  ],
  errores: [
    "Expresar el crecimiento con intervalos del eje Y en lugar del eje X.",
    "Confundir dominio (valores de x) y recorrido (valores de y).",
    "Pensar que toda gráfica es una función, aunque una vertical la corte dos veces.",
    "Confundir máximo relativo con máximo absoluto.",
    "Olvidar el signo al calcular f(−x) en las simetrías: (−x)³ = −x³.",
    "Sacar conclusiones de una gráfica sin mirar las escalas de los ejes.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Cuál es la variable independiente y cuál la dependiente? a) El precio de una llamada y su duración b) La altura de una planta y los días.", sol: "a) Independiente: duración; dependiente: precio. b) Independiente: días; dependiente: altura." },
    { nivel: "básico", q: "Para f(x) = 3x − 2, calcula f(0), f(4), f(−1) y la antiimagen de 10.", sol: "−2; 10; −5. 3x − 2 = 10 → x = 4." },
    { nivel: "básico", q: "Un kilo de naranjas cuesta 1,80 €. Haz una tabla para 0, 1, 2, 3 y 5 kg, escribe la fórmula y dibuja la gráfica.", sol: "0; 1,80; 3,60; 5,40; 9,00. y = 1,8x. Puntos alineados que pasan por el origen." },
    { nivel: "básico", q: "¿Representa una circunferencia una función? Explícalo con la prueba de la vertical.", sol: "No: hay verticales que la cortan en dos puntos (un x con dos imágenes)." },
    { nivel: "básico", q: "Halla los puntos de corte con los ejes de y = −x + 4.", sol: "Eje Y: (0, 4). Eje X: −x + 4 = 0 → (4, 0)." },
    { nivel: "básico", q: "Halla el dominio de y = 1/x y de y = x² + 1.", sol: "ℝ − {0}; ℝ." },
    { nivel: "básico", q: "Una función crece de x = −3 a x = 1, alcanza y = 5 y decrece hasta x = 4, donde vale −2. Describe sus intervalos y su máximo.", sol: "Crece en (−3, 1), decrece en (1, 4); máximo relativo en (1, 5)." },
    { nivel: "básico", q: "Pon un ejemplo de función continua y otro de discontinua de la vida real.", sol: "Continua: temperatura a lo largo del día. Discontinua: precio de un envío según el peso por tramos." },
    { nivel: "básico", q: "Calcula la TVM de f(x) = 2x + 3 en [0, 2] y en [5, 10].", sol: "(7 − 3)/2 = 2; (23 − 13)/5 = 2. Es la misma: la función es lineal." },
    { nivel: "básico", q: "Di si es par o impar: y = x², y = x³, y = x + 1.", sol: "Par; impar; ninguna." },
    { nivel: "básico", q: "Las mareas tienen un periodo de unas 12,4 horas. Si hay marea alta a las 6:00, ¿cuándo será la siguiente?", sol: "Hacia las 18:24." },
    { nivel: "básico", q: "Un coche recorre 150 km entre las 9:00 y las 10:30. ¿Cuál es su velocidad media?", sol: "TVM = 150/1,5 = 100 km/h." },
    { nivel: "medio", q: "Halla dominio y cortes con los ejes de y = (x − 2)/(x + 3).", sol: "Dom = ℝ − {−3}. Eje Y: (0, −2/3). Eje X: x = 2 → (2, 0)." },
    { nivel: "medio", q: "Halla el dominio de y = √(6 − 2x).", sol: "6 − 2x ≥ 0 → x ≤ 3. Dom = (−∞, 3]." },
    { nivel: "medio", q: "Halla los cortes con los ejes de y = x² − 4x + 3.", sol: "Eje Y: (0, 3). x² − 4x + 3 = 0 → x = 1 y 3: (1, 0) y (3, 0)." },
    { nivel: "medio", q: "Calcula la TVM de f(x) = x² − 2x en [0, 2], [2, 4] e interpreta.", sol: "(0 − 0)/2 = 0; (8 − 0)/2 = 4. En [0, 2] baja y vuelve a subir (media 0); en [2, 4] crece." },
    { nivel: "medio", q: "Estudia la simetría de f(x) = 3x⁴ − x² + 5 y de g(x) = x/(x² + 1).", sol: "f(−x) = f(x): par. g(−x) = −x/(x² + 1) = −g(x): impar." },
    { nivel: "medio", q: "Un aparcamiento cobra 1,50 € por hora o fracción, con un máximo de 12 € al día. Dibuja la función para 0 a 10 horas y di si es continua.", sol: "Escalones de 1,50 en 1,50 hasta 12 € a partir de 8 h; discontinua en cada hora entera." },
    { nivel: "medio", q: "La temperatura de un día fue: 0 h: 8 °C; 6 h: 5 °C; 12 h: 15 °C; 15 h: 18 °C; 21 h: 11 °C. Describe la función y calcula la TVM entre 6 h y 15 h.", sol: "Decrece de 0 a 6 h (mínimo 5 °C), crece hasta las 15 h (máximo 18 °C) y luego decrece. TVM = 13/9 ≈ 1,44 °C/h." },
    { nivel: "medio", q: "Dibuja una función con dominio [0, 6], recorrido [−2, 3], un máximo en (2, 3) y un mínimo en (5, −2).", sol: "Respuesta abierta: por ejemplo, empieza en (0, 0), sube a (2, 3), baja a (5, −2) y sube hasta (6, −1)." },
    { nivel: "medio", q: "¿Por qué la función «distancia a casa frente al tiempo» siempre es una función, pero «tiempo frente a distancia» puede no serlo?", sol: "En cada instante solo hay una distancia; pero una misma distancia puede alcanzarse en varios instantes (ida y vuelta)." },
    { nivel: "medio", q: "Un depósito tiene 500 L y pierde 20 L por hora. Escribe la función, su dominio con sentido y el corte con el eje X.", sol: "V(t) = 500 − 20t. Se vacía en t = 25 h. Dominio [0, 25]." },
    { nivel: "medio", q: "Una noria de 30 m de diámetro tarda 8 minutos por vuelta. Dibuja la altura de una cabina durante 24 minutos, empezando abajo (a 2 m del suelo).", sol: "Función periódica de periodo 8 min: mínimo 2 m en 0, 8, 16, 24 min y máximo 32 m en 4, 12, 20 min." },
    { nivel: "medio", q: "Explica por qué un eje vertical que empieza en 95 puede hacer que una subida de 96 a 98 parezca enorme.", sol: "La diferencia (2) ocupa casi toda la altura del gráfico; con el eje desde 0, sería una subida pequeña (≈ 2 %)." },
    { nivel: "avanzado", q: "Halla el dominio de y = √(x − 1)/(x − 5).", sol: "x − 1 ≥ 0 y x ≠ 5: Dom = [1, 5) ∪ (5, +∞)." },
    { nivel: "avanzado", q: "La altura de un balón es h(t) = 20t − 5t². Halla cuándo está en el suelo, la altura máxima (por simetría) y el dominio con sentido.", sol: "h = 0 → t = 0 y t = 4 s. Por simetría, el máximo está en t = 2: h = 20 m. Dominio [0, 4]." },
    { nivel: "avanzado", q: "Para f(x) = x³, calcula la TVM en [0, 1], [1, 2] y [2, 3]. ¿Qué observas?", sol: "1, 7, 19. Crece cada vez más deprisa." },
    { nivel: "avanzado", q: "Demuestra que la suma de dos funciones pares es par.", sol: "Si f(−x) = f(x) y g(−x) = g(x), entonces (f + g)(−x) = f(x) + g(x) = (f + g)(x)." },
    { nivel: "avanzado", q: "¿Puede una función impar definida en x = 0 no pasar por el origen? Razónalo.", sol: "No: f(−0) = −f(0) → f(0) = −f(0) → f(0) = 0." },
    { nivel: "avanzado", q: "Un móvil va de A a B (120 km) a 60 km/h, para 30 minutos y vuelve a 80 km/h. Dibuja la gráfica distancia a A-tiempo e indica dominio, recorrido y TVM de cada tramo.", sol: "Ida 2 h (TVM 60), parada 0,5 h (TVM 0), vuelta 1,5 h (TVM −80). Dom [0, 4], Im [0, 120]." },
    { nivel: "avanzado", q: "La cantidad de un medicamento en sangre es C(t) = 100 · 0,8ᵗ mg (t en horas). Calcula C(0), C(3), C(10) y describe la tendencia.", sol: "100; 51,2; ≈ 10,7 mg. Decrece y tiende a 0 sin llegar nunca: el eje X es asíntota." },
    { nivel: "avanzado", q: "Busca en un periódico o web una gráfica real, analízala (ejes, crecimiento, máximos, tendencia) y di si es engañosa.", sol: "Respuesta abierta: valorar si comenta ejes y unidades, describe tramos y extremos y detecta escalas manipuladas." },
    { nivel: "avanzado", q: "Halla una función cuadrática que corte al eje X en −2 y 3 y al eje Y en −12.", sol: "y = a(x + 2)(x − 3); en x = 0, −6a = −12 → a = 2. y = 2(x + 2)(x − 3) = 2x² − 2x − 12." },
    { nivel: "avanzado", q: "¿Es posible que una función tenga dos máximos relativos y ningún mínimo relativo? Dibuja o razona.", sol: "No si es continua en un intervalo: entre dos cimas tiene que haber un valle (un mínimo relativo). Con discontinuidades sí podría." },
  ],
  quiz: [
    { q: "Una función asigna a cada x…", o: ["dos valores", "un único valor", "ningún valor", "cualquier número de valores"], a: 1, e: "Definición de función." },
    { q: "En y = f(x), x es la variable…", o: ["dependiente", "independiente", "constante", "imagen"], a: 1, e: "Se elige libremente." },
    { q: "Si f(x) = x² + 1, f(−2) =", o: ["−3", "5", "3", "−5"], a: 1, e: "4 + 1." },
    { q: "La prueba de la recta vertical sirve para…", o: ["calcular el dominio", "saber si una gráfica es función", "hallar máximos", "medir la TVM"], a: 1, e: "Cada vertical, como mucho un corte." },
    { q: "El dominio se lee en el eje…", o: ["X", "Y", "los dos", "ninguno"], a: 0, e: "Valores de x." },
    { q: "Dominio de y = 1/(x + 1):", o: ["ℝ", "ℝ − {1}", "ℝ − {−1}", "x > 0"], a: 2, e: "x + 1 ≠ 0." },
    { q: "Dominio de y = √x:", o: ["ℝ", "x ≥ 0", "x > 0", "x ≤ 0"], a: 1, e: "Radicando no negativo." },
    { q: "Corte con el eje Y de y = 3x − 5:", o: ["(0, −5)", "(5/3, 0)", "(0, 3)", "(−5, 0)"], a: 0, e: "x = 0." },
    { q: "Los ceros de una función son…", o: ["los cortes con el eje Y", "los cortes con el eje X", "los máximos", "los saltos"], a: 1, e: "f(x) = 0." },
    { q: "Una función continua se dibuja…", o: ["con saltos", "sin levantar el lápiz", "con puntos huecos", "solo con rectas"], a: 1, e: "Sin roturas." },
    { q: "Un punto hueco en una gráfica indica que…", o: ["pertenece a la función", "no pertenece", "es un máximo", "es un corte"], a: 1, e: "Convenio." },
    { q: "Si al aumentar x disminuye y, la función es…", o: ["creciente", "decreciente", "constante", "periódica"], a: 1, e: "La gráfica baja." },
    { q: "Un máximo relativo es un punto donde la función…", o: ["pasa de crecer a decrecer", "pasa de decrecer a crecer", "corta el eje X", "es discontinua"], a: 0, e: "Cima de una colina." },
    { q: "TVM de f(x) = x² en [0, 2]:", o: ["4", "2", "1", "0"], a: 1, e: "(4 − 0)/2." },
    { q: "Una TVM negativa indica que la función…", o: ["crece en media", "decrece en media", "es constante", "no existe"], a: 1, e: "f(b) < f(a)." },
    { q: "y = x² es…", o: ["par", "impar", "periódica", "discontinua"], a: 0, e: "Simétrica respecto del eje Y." },
    { q: "Una función impar es simétrica respecto…", o: ["del eje X", "del eje Y", "del origen", "de y = x"], a: 2, e: "f(−x) = −f(x)." },
    { q: "La altura de una noria a lo largo del tiempo es…", o: ["lineal", "periódica", "decreciente", "discontinua"], a: 1, e: "Se repite cada vuelta." },
    { q: "La temperatura de un café que se enfría tiende…", o: ["a 0 °C", "a la temperatura ambiente", "a crecer", "a oscilar"], a: 1, e: "Asíntota horizontal." },
    { q: "Al leer una gráfica, lo primero es mirar…", o: ["el color", "los ejes y sus unidades", "el título solo", "el máximo"], a: 1, e: "Qué se representa y en qué escala." },
  ],
  examen: [
    { q: "Si f(x) = 2x² − x, f(3) =", o: ["15", "17", "12", "9"], a: 0, e: "18 − 3." },
    { q: "Dominio de y = 2/(x − 7):", o: ["ℝ − {7}", "ℝ − {−7}", "ℝ", "x > 7"], a: 0, e: "x ≠ 7." },
    { q: "Cortes de y = x² − 9 con el eje X:", o: ["±3", "9", "−9", "no corta"], a: 0, e: "x² = 9." },
    { q: "TVM de f(x) = 5x + 1 en [2, 6]:", o: ["5", "4", "21", "1"], a: 0, e: "Lineal: pendiente 5." },
    { q: "f(x) = x³ − 2x es…", o: ["par", "impar", "ni par ni impar", "periódica"], a: 1, e: "f(−x) = −f(x)." },
    { q: "Una función pasa de decrecer a crecer en (4, −1). Ahí tiene…", o: ["un máximo", "un mínimo", "un corte", "un salto"], a: 1, e: "Fondo de un valle." },
    { q: "Una tarifa de envío por tramos de peso es…", o: ["continua", "discontinua", "periódica", "impar"], a: 1, e: "Da saltos." },
    { q: "Un coche está a 30 km a las 8 h y a 150 km a las 10 h. TVM:", o: ["60 km/h", "120 km/h", "75 km/h", "15 km/h"], a: 0, e: "120/2." },
  ],
  feynman: ["Qué es una función y cómo se reconoce en una gráfica", "Qué son el dominio y el recorrido", "Cómo se describe el crecimiento y los extremos de una gráfica", "Qué mide la tasa de variación media"],
  figura: {
    titulo: "Cómo estudiar una gráfica",
    svg: resumen("Resumen de las características de una función", [
      ["Dominio y recorrido", "valores de x (eje X) y de y (eje Y)", "var(--pen)"],
      ["Cortes", "eje Y: x = 0 · eje X: resolver f(x) = 0", "var(--leaf)"],
      ["Monotonía y extremos", "crece, decrece · máximos y mínimos (intervalos de x)", "var(--red)"],
      ["Otras", "continuidad · TVM · simetría · periodo · tendencia", "var(--inf)"],
    ], 240),
  },
  video: { id: "PznGnULl1qw", titulo: "Análisis de funciones", canal: "Matemáticas Positivas", vistas: 192764, megusta: 0 },
  mapa: mapa("FUNCIONES", "var(--pen)", [
    ["Expresar", "enunciado · tabla · fórmula · gráfica", "var(--pen)"],
    ["Dominio", "dominio · recorrido · cortes", "var(--leaf)"],
    ["Comportamiento", "crece · máx · mín · TVM", "var(--red)"],
    ["Otras", "continuidad · simetría · periodo", "var(--inf)"],
  ], 260),
  glosario: [
    ["Función", "Relación que asigna a cada x un único valor y."],
    ["Variable independiente", "La que se elige libremente (x)."],
    ["Variable dependiente", "La que depende de la otra (y)."],
    ["Imagen", "Valor f(x) que corresponde a x."],
    ["Dominio", "Conjunto de valores de x que tienen imagen."],
    ["Recorrido", "Conjunto de valores que toma y."],
    ["Cero de una función", "Valor de x con f(x) = 0; corte con el eje X."],
    ["Función continua", "Se dibuja sin levantar el lápiz."],
    ["Función creciente", "Al aumentar x, aumenta y."],
    ["Máximo relativo", "Punto donde la función pasa de crecer a decrecer."],
    ["Mínimo relativo", "Punto donde la función pasa de decrecer a crecer."],
    ["Tasa de variación media", "(f(b) − f(a))/(b − a): cambio medio por unidad."],
    ["Función par", "f(−x) = f(x): simétrica respecto del eje Y."],
    ["Función impar", "f(−x) = −f(x): simétrica respecto del origen."],
    ["Función periódica", "Se repite cada cierto intervalo, el periodo."],
    ["Asíntota", "Recta a la que se acerca la gráfica sin llegar a tocarla."],
  ],
  situacion: {
    titulo: "Detectives de gráficas",
    reto: "Vais a recopilar gráficas reales de noticias, apps y webs oficiales (tiempo, energía, deporte, salud) y a crear una guía para que cualquier persona sepa interpretarlas y detectar si engañan.",
    pasos: [
      "Reunid al menos seis gráficas reales de temas distintos y anotad su fuente.",
      "Para cada una, identificad variables, unidades, dominio y recorrido.",
      "Describid crecimiento, extremos, continuidad, periodicidad o tendencia, y calculad alguna TVM.",
      "Buscad al menos una gráfica engañosa y redibujadla con escalas correctas.",
      "Elaborad una guía visual de «cómo leer una gráfica en 6 pasos» y presentadla.",
    ],
    producto: "Una guía ilustrada con el análisis de las gráficas y la corrección de una gráfica engañosa.",
    evaluacion: ["Identifica correctamente las variables y sus unidades.", "Describe con precisión las características de las funciones.", "Calcula e interpreta tasas de variación.", "Detecta y corrige manipulaciones visuales con argumentos."],
  },
  tarjetas: [
    ["Función", "A cada x, un único y."], ["Prueba vertical", "Más de un corte → no es función."],
    ["Dominio", "Valores de x (eje X)."], ["Recorrido", "Valores de y (eje Y)."],
    ["Corte eje Y", "Hacer x = 0."], ["Corte eje X", "Resolver f(x) = 0."],
    ["Continua", "Sin levantar el lápiz."], ["Creciente", "Sube de izquierda a derecha."],
    ["Máximo relativo", "Pasa de crecer a decrecer."], ["TVM", "(f(b) − f(a))/(b − a)"],
    ["Par / impar", "f(−x) = f(x) / f(−x) = −f(x)"], ["Periódica", "Se repite cada periodo."],
  ],
  familias: ["Mirad juntos la gráfica del tiempo de la semana y describid máximos y mínimos.", "Registrad la temperatura de un vaso de agua caliente cada 5 minutos y dibujad la gráfica.", "Buscad una gráfica en las noticias y comentad si las escalas son honestas.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico y estocástico: relaciones funcionales, formas de representación, dominio, recorrido, continuidad, monotonía, extremos, tasa de variación media, simetría y periodicidad, e interpretación crítica de gráficas (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Sensores de movimiento o apps para crear gráficas distancia-tiempo caminando.", "Historias con gráficas: los alumnos inventan la situación que cuenta una gráfica.", "Análisis de gráficas engañosas en prensa.", "GeoGebra para explorar simetrías y TVM."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: funciones y gráficas (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
