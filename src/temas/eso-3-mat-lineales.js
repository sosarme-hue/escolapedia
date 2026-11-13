// Matemáticas 3º ESO · Funciones lineales y afines. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar, resumen, rot, C, RD, DECRET } = require("./_eso3L1");

const proporcional = ejes("Función de proporcionalidad directa: el precio de las naranjas es uno coma cinco por los kilos y la recta pasa por el origen", { x: [0, 6], y: [0, 9], paso: 1, pasoY: 1, marcasX: [1, 2, 3, 4, 5], marcasY: [3, 6, 9], ex: "kg", ey: "€", curvas: [{ f: (x) => 1.5 * x, c: "var(--pen)", t: "y = 1,5x", tx: 3.2, ty: 7.2 }], puntos: [[0, 0, "", "var(--red)"], [2, 3, "(2, 3)", "var(--red)", "se"], [4, 6, "(4, 6)", "var(--red)", "se"]] });

const pendiente = ejes("La pendiente es lo que sube la recta por cada unidad que avanza: escalón de uno a la derecha y dos arriba", { x: [-1, 5], y: [-1, 8], paso: 1, marcasX: [1, 2, 3, 4], marcasY: [2, 4, 6], curvas: [{ f: (x) => 2 * x - 0, c: "var(--pen)", t: "y = 2x", tx: 1.3, ty: 5.6 }], segs: [[1, 2, 2, 2, "var(--red)"], [2, 2, 2, 4, "var(--leaf)"]], textos: [[1.5, 1.3, "+1", "var(--red)"], [2.5, 3, "+2", "var(--leaf)"], [3.7, 1, "m = 2/1 = 2", "var(--muted)"]] });

const signos = comparar("Signo de la pendiente: creciente, constante o decreciente", [
  ["m > 0", ["creciente", "sube ↗"], "var(--leaf)"],
  ["m = 0", ["constante", "horizontal →"], "var(--pen)"],
  ["m < 0", ["decreciente", "baja ↘"], "var(--red)"],
], "¿Qué dice m?");

const afin = ejes("Funciones afines con la misma pendiente y distinta ordenada en el origen: rectas paralelas", { x: [-3, 3], y: [-4, 6], paso: 1, marcasX: [-2, 2], marcasY: [-3, 3], curvas: [{ f: (x) => x, c: "var(--pen)", t: "y = x", tx: 2.4, ty: 1.4 }, { f: (x) => x + 3, c: "var(--leaf)", t: "y = x + 3", tx: -2.7, ty: 2.2 }, { f: (x) => x - 2, c: "var(--red)", t: "y = x − 2", tx: 2.1, ty: -1.4 }], puntos: [[0, 3, "n = 3", "var(--leaf)", "o"], [0, -2, "n = −2", "var(--red)", "o"]] });

const especiales = ejes("Rectas especiales: la horizontal y igual a tres es función constante y la vertical x igual a dos no es función", { x: [-1, 5], y: [-1, 5], paso: 1, marcasX: [2, 4], marcasY: [3], curvas: [{ f: () => 3, c: "var(--leaf)", t: "y = 3", tx: 4.2, ty: 3.5 }], segs: [[2, -1, 2, 5, "var(--red)"]], textos: [[2.2, 1.2, "x = 2", "var(--red)", "start"], [2.2, 0.4, "no es función", "var(--red)", "start"]] });

const dibujar = pasos("Dibujar una recta a partir de la ordenada en el origen y la pendiente", ["y = 2/3 x − 1", "Marcar n: el punto (0, −1)", "Pendiente 2/3: 3 a la derecha, 2 arriba", "Llegar a (3, 1)", "Unir los puntos con regla"], "Dibujar sin tabla");

const dosPuntos = formula("Pendiente de la recta que pasa por dos puntos", "m = (y₂ − y₁) / (x₂ − x₁)", ["A(1, 3) y B(4, 9)", "m = (9 − 3)/(4 − 1) = 6/3 = 2", "Es la TVM: igual en todo intervalo"]);

const puntoPend = formula("Ecuación punto-pendiente de una recta", "y − y₀ = m (x − x₀)", ["Pasa por (2, 5) con m = 3", "y − 5 = 3(x − 2)", "y = 3x − 1"], "var(--leaf)");

const dosPuntosEc = pasos("Ecuación de la recta que pasa por dos puntos", ["A(−1, 4) y B(3, −4)", "m = (−4 − 4)/(3 + 1) = −2", "Punto-pendiente con A:", "y − 4 = −2(x + 1)", "y = −2x + 2"], "Por dos puntos");

const formas = cajas("Formas de la ecuación de una recta", [
  ["Explícita", ["y = mx + n", "y = −2x + 2"], "var(--pen)"], ["Punto-pendiente", ["y − y₀ = m(x − x₀)", "y − 4 = −2(x + 1)"], "var(--leaf)"],
  ["General", ["Ax + By + C = 0", "2x + y − 2 = 0"], "var(--red)"], ["Pendiente", ["m = −A/B", "= −2"], "var(--inf)"],
], "Tres formas");

const posicion = comparar("Posición relativa de dos rectas según sus pendientes y ordenadas", [
  ["Secantes", ["m ≠ m'", "un punto común"], "var(--leaf)"],
  ["Paralelas", ["m = m', n ≠ n'", "ninguno"], "var(--red)"],
  ["Coincidentes", ["m = m', n = n'", "todos"], "var(--pen)"],
], "Dos rectas");

const corte = ejes("Punto de corte de dos rectas: y igual a dos x menos uno e y igual a menos x más cinco se cortan en dos, tres", { x: [-1, 5], y: [-2, 6], paso: 1, marcasX: [1, 2, 3, 4], marcasY: [2, 4], curvas: [{ f: (x) => 2 * x - 1, c: "var(--pen)", t: "y = 2x − 1", tx: 3.9, ty: 4.6 }, { f: (x) => -x + 5, c: "var(--red)", t: "y = −x + 5", tx: 3.7, ty: 0.5 }], puntos: [[2, 3, "(2, 3)", "var(--leaf)", "e"], [0.5, 0, "", "var(--pen)"], [5, 0, "", "var(--red)"]] });

const tarifas = ejes("Dos tarifas de bicicleta compartida: dos euros más quince céntimos por minuto frente a veinticinco céntimos por minuto; se igualan a los veinte minutos", { x: [0, 40], y: [0, 10], paso: 5, pasoY: 2, marcasX: [10, 20, 30, 40], marcasY: [2, 4, 6, 8], ex: "min", ey: "€", curvas: [{ f: (x) => 2 + 0.15 * x, c: "var(--pen)", t: "A", tx: 38, ty: 7 }, { f: (x) => 0.25 * x, c: "var(--red)", t: "B", tx: 34, ty: 9.6 }], puntos: [[20, 5, "(20, 5)", "var(--leaf)", "se"]] });

const mru = ejes("Movimiento rectilíneo uniforme: la posición de un ciclista que sale a diez kilómetros y va a veinte kilómetros por hora", { x: [0, 4], y: [0, 100], paso: 1, pasoY: 20, marcasX: [1, 2, 3, 4], marcasY: [20, 40, 60, 80], ex: "h", ey: "km", curvas: [{ f: (x) => 10 + 20 * x, c: "var(--leaf)", t: "s = 10 + 20t", tx: 2.3, ty: 70 }], puntos: [[0, 10, "s₀ = 10", "var(--red)", "e"]] });

const ajuste = ejes("Datos aproximadamente lineales y recta ajustada a ojo: talla de calzado frente a altura", { x: [150, 190], y: [36, 46], paso: 10, pasoY: 2, marcasX: [160, 170, 180], marcasY: [38, 40, 42, 44], ex: "cm", ey: "pie", curvas: [{ f: (x) => 36.5 + 0.2 * (x - 150), c: "var(--pen)", disc: true }], puntos: [[155, 38, "", "var(--red)"], [158, 37, "", "var(--red)"], [162, 39, "", "var(--red)"], [166, 39.5, "", "var(--red)"], [170, 41, "", "var(--red)"], [174, 40, "", "var(--red)"], [178, 42, "", "var(--red)"], [182, 43, "", "var(--red)"], [186, 43.5, "", "var(--red)"]] });

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Funciones lineales y afines",
  minutos: 110,
  objetivos: [
    "Reconocer funciones de proporcionalidad directa, afines y constantes",
    "Interpretar la pendiente y la ordenada en el origen y representar rectas",
    "Calcular la pendiente a partir de dos puntos y escribir la ecuación de una recta",
    "Pasar de una forma de la ecuación a otra y estudiar la posición de dos rectas",
    "Modelizar situaciones reales con funciones afines y resolverlas gráfica y algebraicamente",
  ],
  claves: ["función lineal", "función afín", "pendiente", "ordenada en el origen", "punto-pendiente", "rectas paralelas", "modelo lineal"],
  pregunta: {
    texto: "Una compañía de bicis cobra 2 € por desbloquear y 0,15 € por minuto. Otra no cobra desbloqueo pero pide 0,25 € por minuto. ¿Cuál te sale mejor para un trayecto de 15 minutos?",
    respuesta: "La primera cuesta <mark>y = 2 + 0,15x</mark> y la segunda <mark>y = 0,25x</mark>. Con 15 minutos: 4,25 € frente a 3,75 €, así que gana la segunda. Pero a partir de 20 minutos la primera es más barata. Son dos funciones afines, y sus gráficas son rectas.",
  },
  lectura: {
    titulo: "Descartes y una mosca en el techo",
    html: `<p>Se cuenta que el filósofo y matemático francés René Descartes, que tenía una salud delicada y pasaba muchas horas en la cama, observaba una mosca que caminaba por el techo de su habitación. Se preguntó cómo podría describir en cada momento la posición exacta de la mosca, y se le ocurrió una idea brillante: bastaba con dar dos números, su distancia a dos paredes perpendiculares.</p><p>Sea o no cierta la anécdota, Descartes publicó en 1637 la idea de los ejes de coordenadas, que hoy llamamos cartesianos en su honor. Aquello unió para siempre dos ramas de las matemáticas que hasta entonces iban separadas: la geometría, que estudia las formas, y el álgebra, que estudia las ecuaciones. Desde entonces, una ecuación como y = 2x + 1 es también una línea recta, y una recta es también una ecuación.</p><p>Las rectas son las funciones más sencillas y, al mismo tiempo, de las más útiles. Describen todo lo que cambia a ritmo constante: el precio de lo que se compra al peso, el recorrido de un coche a velocidad fija, una tarifa con cuota fija y parte variable o la temperatura en grados Fahrenheit frente a Celsius. En este tema aprenderás a leer, dibujar y escribir rectas, y a usarlas para tomar decisiones.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Proporcionalidad directa: la función lineal</h3><p>Dos magnitudes son <b>directamente proporcionales</b> si su cociente es siempre el mismo: si una se duplica, la otra también. El precio de las naranjas a 1,50 €/kg cumple que y/x = 1,5 para cualquier cantidad. La función que las relaciona es <mark>y = mx</mark>, llamada <b>función lineal</b> o de proporcionalidad directa, y m es la <b>constante de proporcionalidad</b>.</p><p>Su gráfica es siempre una <b>recta que pasa por el origen</b> (0, 0), porque si x = 0, también y = 0: cero kilos cuestan cero euros. Para dibujarla basta con un punto más además del origen: con x = 2, y = 3, y se unen (0, 0) y (2, 3).</p>${tabla(["kg (x)", "0", "1", "2", "4"], [["€ (y)", "0", "1,5", "3", "6"]])}<p>Otros ejemplos: la distancia recorrida a velocidad constante (d = vt), el perímetro de un cuadrado (P = 4l) o la conversión de euros a dólares con un cambio fijo.</p>`, svg: proporcional },
    { html: `<h3>1.2 La pendiente</h3><p>El número m de y = mx + n se llama <b>pendiente</b> y mide la <b>inclinación</b> de la recta: indica cuánto aumenta (o disminuye) y cuando x aumenta una unidad. En y = 2x, cada vez que se avanza 1 hacia la derecha, se sube 2: la pendiente es 2.</p><p>Se puede ver como un escalón: <mark>m = subida / avance</mark>. Si m = 2/3, por cada 3 unidades a la derecha la recta sube 2. Cuanto mayor es |m|, más empinada es la recta: y = 5x es mucho más inclinada que y = 0,5x.</p><p>La pendiente es exactamente la <b>tasa de variación media</b> del tema anterior, con una propiedad especial: en una recta es la <b>misma en cualquier intervalo</b>. Por eso las funciones lineales describen cambios a ritmo constante. En una carretera, una señal de «pendiente 8 %» significa que se suben 8 m por cada 100 m de avance horizontal: m = 0,08.</p>`, svg: pendiente, video: { id: "44z-uD5lR-0", titulo: "33. ¿Qué es la pendiente de una recta? EXPLICACIÓN COMPLETA", canal: "MateFacil", vistas: 743502, megusta: 0 } },
    { html: `<h3>1.3 El signo de la pendiente</h3><p>El signo de m indica si la función crece o decrece:</p><ul><li>Si <b>m &gt; 0</b>, la recta sube de izquierda a derecha: la función es <b>creciente</b>. Ejemplo: y = 3x.</li><li>Si <b>m &lt; 0</b>, la recta baja: la función es <b>decreciente</b>. Ejemplo: y = −2x + 6, como el agua que queda en un depósito que se vacía.</li><li>Si <b>m = 0</b>, la recta es horizontal: la función es <b>constante</b>. Ejemplo: y = 4.</li></ul><p>Esto permite imaginar la gráfica antes de dibujarla. Una cuenta de ahorro en la que se ingresan 20 € al mes tiene pendiente positiva; el saldo de una tarjeta de transporte que se gasta 1,50 € por viaje tiene pendiente negativa.</p><p>Fíjate en que una recta decreciente no tiene por qué estar por debajo del eje X: y = −2x + 6 toma valores positivos hasta x = 3. El signo de m habla de la inclinación, no de dónde está la recta.</p>`, svg: signos },
    { html: `<h3>1.4 La función afín y la ordenada en el origen</h3><p>Una <b>función afín</b> tiene la forma <mark>y = mx + n</mark>. Es como una lineal, pero desplazada verticalmente: su gráfica es una recta que <b>no pasa por el origen</b> (salvo que n = 0). El número n se llama <b>ordenada en el origen</b>, porque es el valor de y cuando x = 0: la recta corta al eje Y en el punto (0, n).</p><p>Las funciones afines describen situaciones con una <b>parte fija</b> y una <b>parte variable</b>. Un taxi que cobra 3 € de bajada de bandera y 1,10 € por kilómetro: y = 1,1x + 3. El 3 es la parte fija (n) y el 1,1 el coste por kilómetro (m).</p><p>Las rectas y = x, y = x + 3 e y = x − 2 tienen la <b>misma pendiente</b> y por eso son <b>paralelas</b>; se diferencian solo en dónde cortan al eje Y. Al cambiar n, la recta se desplaza arriba o abajo sin girar; al cambiar m, gira.</p>`, svg: afin, video: { id: "g2zFHMXatRA", titulo: "Gráfica Función Lineal con Pendiente y Ordenada al Origen", canal: "Ricardo Jara", vistas: 574122, megusta: 23982 } },
    { html: `<h3>1.5 Funciones constantes y rectas verticales</h3><p>Si la pendiente es 0, la función es <b>constante</b>: y = n. Su gráfica es una <b>recta horizontal</b> que corta al eje Y en (0, n). Por ejemplo, la tarifa plana de un gimnasio que cuesta 30 € al mes vayas las veces que vayas: y = 30.</p><p>Las <b>rectas verticales</b>, como x = 2, son distintas: todos sus puntos tienen la misma x y cualquier y. No representan una función, porque a x = 2 le corresponden infinitos valores de y (no pasan la prueba de la recta vertical). Su pendiente no está definida: el avance es 0 y no se puede dividir entre 0.</p><p>Los ejes de coordenadas son casos particulares: el eje X es la recta y = 0 y el eje Y es la recta x = 0. Estas rectas sirven, por ejemplo, para marcar límites en una gráfica: «la temperatura máxima permitida es y = 40 °C».</p>`, svg: especiales },
    { html: `<h3>1.6 Representar una recta</h3><p>Como una recta queda determinada por <b>dos puntos</b>, para representarla basta con calcular dos (mejor tres, para comprobar). Se hace una tabla dando valores cómodos a x: para y = −2x + 4, x = 0 → y = 4; x = 2 → y = 0; x = 3 → y = −2. Se marcan y se unen con regla.</p><p>Otro método muy rápido usa la <b>ordenada en el origen</b> y la <b>pendiente</b>: se marca el punto (0, n) y, desde él, se aplica la pendiente como un escalón. Para y = (2/3)x − 1: punto (0, −1); avanzar 3 a la derecha y subir 2, hasta (3, 1); unir.</p><p>Si la pendiente es negativa, el escalón baja: con m = −3/2, se avanza 2 y se baja 3. Cuando los valores son grandes, como en las tarifas, hay que elegir bien la escala de cada eje para que la recta se vea completa. Representar con cuidado es importante porque muchas preguntas se responden leyendo la gráfica.</p>`, svg: dibujar },
    { html: `<h3>1.7 Calcular la pendiente a partir de dos puntos</h3><p>Si se conocen dos puntos de una recta, A(x₁, y₁) y B(x₂, y₂), la pendiente es el cociente entre lo que sube y lo que avanza al ir de A a B:</p><p class="formula"><span>m = (y₂ − y₁) / (x₂ − x₁)</span></p><p>Para A(1, 3) y B(4, 9): m = (9 − 3)/(4 − 1) = 6/3 = 2. El orden de los puntos no importa siempre que se respete en el numerador y en el denominador: (3 − 9)/(1 − 4) = −6/−3 = 2.</p><p>Esta fórmula sirve también para comprobar si tres puntos están <b>alineados</b>: lo están si la pendiente entre el primero y el segundo es igual que entre el segundo y el tercero. Por ejemplo, (0, 1), (2, 5) y (5, 11): pendientes 4/2 = 2 y 6/3 = 2, así que sí están alineados. En la vida real, la pendiente calculada con dos datos es la <b>velocidad de cambio</b>: euros por minuto, kilómetros por hora, grados por hora.</p>`, svg: dosPuntos },
    { html: `<h3>2.1 Ecuación punto-pendiente</h3><p>Si se conocen un punto P(x₀, y₀) de la recta y su pendiente m, la ecuación se escribe directamente con la forma <b>punto-pendiente</b>:</p><p class="formula"><span>y − y₀ = m (x − x₀)</span></p><p>Ejemplo: la recta que pasa por (2, 5) con pendiente 3 es y − 5 = 3(x − 2). Si se quiere en forma explícita, se quitan paréntesis y se despeja: y = 3x − 6 + 5 = 3x − 1. Se comprueba sustituyendo el punto: 3 · 2 − 1 = 5 ✓.</p><p>¿Por qué funciona? Para cualquier otro punto (x, y) de la recta, la pendiente entre él y P debe ser m: (y − y₀)/(x − x₀) = m. Multiplicando, se obtiene la fórmula. Es la forma más cómoda cuando el dato no es la ordenada en el origen, sino otro punto: «una piscina tiene 50 m³ a las 3 horas de empezar a llenarse y gana 8 m³ por hora».</p>`, svg: puntoPend, video: { id: "YaF9yWOrSh0", titulo: "Hallar ECUACIÓN DE LA RECTA conociendo 2 PUNTOS 📉 Ejercicios de Funciones", canal: "Susi Profe", vistas: 890012, megusta: 14148 } },
    { html: `<h3>2.2 Recta que pasa por dos puntos</h3><p>Para hallar la ecuación de la recta que pasa por dos puntos se combinan los dos apartados anteriores: primero se calcula la <b>pendiente</b> con los dos puntos, y después se usa la <b>punto-pendiente</b> con cualquiera de ellos.</p><p>Ejemplo: A(−1, 4) y B(3, −4). Pendiente: m = (−4 − 4)/(3 − (−1)) = −8/4 = −2. Con el punto A: y − 4 = −2(x + 1), y = −2x − 2 + 4 = −2x + 2. Comprobación con B: −2 · 3 + 2 = −4 ✓.</p><p>Este procedimiento es la base de muchos problemas: si un móvil con tarifa afín cuesta 13 € con 5 GB y 19 € con 8 GB, los puntos son (5, 13) y (8, 19); m = 6/3 = 2 €/GB y y − 13 = 2(x − 5), es decir, y = 2x + 3. La cuota fija es de 3 € y cada gigabyte cuesta 2 €.</p>`, svg: dosPuntosEc },
    { html: `<h3>2.3 Formas de la ecuación de la recta</h3><p>Una misma recta se puede escribir de varias formas equivalentes:</p><ul><li><b>Explícita</b>: y = mx + n. Muestra directamente la pendiente y la ordenada en el origen.</li><li><b>Punto-pendiente</b>: y − y₀ = m(x − x₀). Muestra un punto y la pendiente.</li><li><b>General</b> o implícita: Ax + By + C = 0, con todos los términos en un miembro. Por ejemplo, 2x + y − 2 = 0.</li></ul><p>Para pasar de la forma general a la explícita se despeja y: de 2x + y − 2 = 0 sale y = −2x + 2. En general, si B ≠ 0, la pendiente es <mark>m = −A/B</mark> y la ordenada en el origen n = −C/B. Por ejemplo, en 3x − 4y + 8 = 0: m = 3/4 y n = 2.</p><p>La forma general tiene una ventaja: también sirve para las rectas verticales (B = 0), como x − 2 = 0, que no se pueden escribir en forma explícita. Y es la forma en que aparecen las rectas en los sistemas de ecuaciones.</p>`, svg: formas },
    { html: `<h3>2.4 Posición relativa de dos rectas</h3><p>Comparando las ecuaciones explícitas de dos rectas, y = mx + n e y = m'x + n', se sabe cómo están situadas sin dibujarlas:</p><ul><li>Si <b>m ≠ m'</b>, tienen distinta inclinación y se cortan en un punto: son <b>secantes</b>.</li><li>Si <b>m = m'</b> y <b>n ≠ n'</b>, tienen la misma inclinación pero no coinciden: son <b>paralelas</b>.</li><li>Si <b>m = m'</b> y <b>n = n'</b>, son la misma recta: <b>coincidentes</b>.</li></ul><p>Esto enlaza directamente con los sistemas de ecuaciones: rectas secantes ↔ sistema compatible determinado; paralelas ↔ incompatible; coincidentes ↔ compatible indeterminado.</p><p>Un caso especial de secantes son las <b>perpendiculares</b>, que forman un ángulo recto. Se puede comprobar que dos rectas son perpendiculares si el producto de sus pendientes es −1: y = 2x e y = −x/2 lo son, porque 2 · (−1/2) = −1.</p>`, svg: posicion },
    { html: `<h3>2.5 Cortes con los ejes e intersección de dos rectas</h3><p>Los cortes de una recta con los ejes se calculan como en cualquier función. Con el eje Y, x = 0: el punto es (0, n). Con el eje X, y = 0: se resuelve mx + n = 0, y x = −n/m. Para y = 2x − 1, los cortes son (0, −1) y (1/2, 0).</p><p>El <b>punto de intersección de dos rectas</b> se obtiene resolviendo el sistema formado por sus ecuaciones. Si ambas están en forma explícita, lo más rápido es igualar: 2x − 1 = −x + 5, 3x = 6, x = 2, y = 3. Las rectas se cortan en (2, 3).</p><p>Gráficamente, el punto de corte es donde las dos rectas tienen la misma altura. En los problemas, ese punto suele tener un significado importante: el momento en que dos móviles se encuentran, el consumo con el que dos tarifas cuestan lo mismo o el precio en que la oferta y la demanda se equilibran.</p>`, svg: corte },
    { html: `<h3>3.1 Modelos lineales: comparar tarifas</h3><p>Volvamos a las bicis compartidas. La compañía A cobra y = 2 + 0,15x euros por x minutos, y la B, y = 0,25x. Para 15 minutos, A cuesta 4,25 € y B, 3,75 €. ¿Siempre gana B? Igualamos para buscar el punto de equilibrio: 2 + 0,15x = 0,25x, 2 = 0,1x, <mark>x = 20 minutos</mark>, con un coste de 5 €.</p><p>La gráfica lo aclara: antes de 20 minutos la recta de B va por debajo (B es más barata); después, la recta de A va por debajo, porque su pendiente es menor (cada minuto cuesta menos), aunque empiece más arriba.</p><p>Este razonamiento es general: una tarifa con cuota fija alta y coste variable bajo conviene a quien consume mucho; una sin cuota fija, a quien consume poco. Plantear las dos funciones afines y buscar el corte es la manera más rigurosa de decidir.</p>`, svg: tarifas },
    { html: `<h3>3.2 Movimiento uniforme y otros modelos de la ciencia</h3><p>En física, un objeto que se mueve en línea recta a <b>velocidad constante</b> sigue un movimiento rectilíneo uniforme. Su posición es una función afín del tiempo: <mark>s = s₀ + v · t</mark>, donde s₀ es la posición inicial (la ordenada en el origen) y v la velocidad (la pendiente). Un ciclista que sale del kilómetro 10 a 20 km/h está en s = 10 + 20t: a las 3 horas, en el kilómetro 70.</p><p>Muchas leyes científicas son lineales o afines: el alargamiento de un muelle es proporcional a la fuerza (ley de Hooke), la conversión de temperaturas F = 1,8C + 32, la presión en el agua aumenta 1 atmósfera cada 10 metros de profundidad, o el precio de la electricidad con término fijo y término variable.</p><p>En todas ellas, la pendiente tiene unidades (km/h, °F/°C, atm/m) y un significado físico: es la rapidez con que cambia una magnitud respecto de la otra.</p>`, svg: mru },
    { html: `<h3>3.3 Datos reales y rectas de ajuste</h3><p>Los datos reales casi nunca están perfectamente alineados. Si se mide la altura y la talla de calzado de los alumnos de una clase, los puntos forman una «nube» que sube de forma aproximadamente lineal: las personas más altas suelen tener el pie más grande, aunque no siempre.</p><p>En estos casos se puede trazar a ojo una <b>recta de ajuste</b> que pase por el centro de la nube, dejando más o menos los mismos puntos por encima que por debajo. Después se calcula su ecuación con dos puntos de la recta (no necesariamente de los datos) y se usa para hacer <b>predicciones</b>: ¿qué talla tendrá probablemente alguien de 175 cm?</p><p>Hay que ser prudentes: la recta solo sirve dentro del rango de los datos (no se puede predecir la talla de un bebé con una recta hecha con adolescentes), y que dos variables estén relacionadas no significa que una cause la otra. Estas ideas se desarrollan en estadística con la correlación y la regresión.</p>`, svg: ajuste },
  ],
  ejemplos: [
    { enunciado: "Indica pendiente, ordenada en el origen y si crece o decrece: y = −3x + 2.", pasos: ["m = −3 < 0: decreciente.", "n = 2: corta al eje Y en (0, 2)."], resultado: "Recta decreciente que pasa por (0, 2) y baja 3 por cada unidad." },
    { enunciado: "Halla la pendiente de la recta que pasa por (−2, 1) y (4, 4).", pasos: ["m = (4 − 1)/(4 − (−2)) = 3/6."], resultado: "m = 1/2." },
    { enunciado: "Ecuación de la recta que pasa por (3, −2) con pendiente −1/3.", pasos: ["y + 2 = −1/3 (x − 3).", "y = −x/3 + 1 − 2."], resultado: "y = −x/3 − 1." },
    { enunciado: "Ecuación de la recta que pasa por (1, 5) y (3, 9), en forma general.", pasos: ["m = 4/2 = 2.", "y − 5 = 2(x − 1) → y = 2x + 3.", "2x − y + 3 = 0."], resultado: "y = 2x + 3; 2x − y + 3 = 0." },
    { enunciado: "Estudia la posición de y = 4x − 1 y 8x − 2y + 6 = 0.", pasos: ["Segunda: 2y = 8x + 6 → y = 4x + 3.", "Misma pendiente, distinta ordenada."], resultado: "Paralelas." },
    { enunciado: "Un electricista cobra 30 € por desplazamiento y 25 € por hora; otro, 45 € y 20 € por hora. ¿Cuándo cuestan lo mismo?", pasos: ["30 + 25x = 45 + 20x.", "5x = 15 → x = 3 h; coste 105 €."], resultado: "A las 3 horas (105 €); para trabajos más largos conviene el segundo." },
  ],
  errores: [
    "Confundir la pendiente con la ordenada en el origen en y = mx + n.",
    "Calcular la pendiente como (x₂ − x₁)/(y₂ − y₁), al revés.",
    "Cambiar el orden de los puntos solo en el numerador.",
    "Olvidar el signo al usar la punto-pendiente con coordenadas negativas: y − (−2) = y + 2.",
    "Pensar que una recta decreciente siempre está por debajo del eje X.",
    "Decir que x = 3 es una función, o que su pendiente es 0.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Di si son lineales, afines o constantes: y = 4x, y = 4x − 1, y = −5, y = x/2.", sol: "Lineal; afín; constante; lineal." },
    { nivel: "básico", q: "Un kilo de tomates cuesta 2,20 €. Escribe la función, haz una tabla y represéntala.", sol: "y = 2,2x. (0, 0), (1; 2,2), (5, 11). Recta por el origen." },
    { nivel: "básico", q: "Indica pendiente y ordenada en el origen: y = 3x − 5; y = −x/2 + 4; y = 7.", sol: "m = 3, n = −5; m = −1/2, n = 4; m = 0, n = 7." },
    { nivel: "básico", q: "Representa y = 2x + 1 con una tabla de tres valores.", sol: "(0, 1), (1, 3), (−1, −1). Se unen con una recta." },
    { nivel: "básico", q: "Representa y = −(3/4)x + 2 usando ordenada y pendiente.", sol: "Punto (0, 2); avanzar 4, bajar 3 → (4, −1). Unir." },
    { nivel: "básico", q: "Calcula la pendiente de la recta que pasa por (0, 2) y (3, 8).", sol: "m = 6/3 = 2." },
    { nivel: "básico", q: "Halla los cortes con los ejes de y = −2x + 6.", sol: "(0, 6) y (3, 0)." },
    { nivel: "básico", q: "Escribe la ecuación de la recta de pendiente 4 que corta al eje Y en −3.", sol: "y = 4x − 3." },
    { nivel: "básico", q: "¿Pasa la recta y = 3x − 2 por (2, 4)? ¿Y por (−1, −4)?", sol: "3·2 − 2 = 4: sí. 3·(−1) − 2 = −5 ≠ −4: no." },
    { nivel: "básico", q: "¿Son paralelas y = 2x + 1 e y = 2x − 7? ¿Y y = 2x e y = −2x?", sol: "Sí (misma m); no (m distinta, son secantes)." },
    { nivel: "básico", q: "Un taxi cobra 3,50 € fijos y 1,20 € por km. Escribe la función y calcula el precio de 8 km.", sol: "y = 3,5 + 1,2x; y(8) = 13,10 €." },
    { nivel: "básico", q: "Dibuja y = 3 y x = −2. ¿Cuál es función?", sol: "y = 3 es horizontal (función constante); x = −2 es vertical (no es función)." },
    { nivel: "medio", q: "Halla la ecuación de la recta que pasa por (−2, 3) con pendiente 1/2.", sol: "y − 3 = (1/2)(x + 2) → y = x/2 + 4." },
    { nivel: "medio", q: "Halla la ecuación de la recta que pasa por (2, −1) y (6, 7).", sol: "m = 8/4 = 2; y + 1 = 2(x − 2) → y = 2x − 5." },
    { nivel: "medio", q: "Halla la ecuación de la recta que pasa por (−3, 4) y (1, −4) y escríbela en forma general.", sol: "m = −8/4 = −2; y − 4 = −2(x + 3) → y = −2x − 2 → 2x + y + 2 = 0." },
    { nivel: "medio", q: "Halla pendiente y ordenada de 3x + 2y − 6 = 0.", sol: "y = −(3/2)x + 3: m = −3/2, n = 3." },
    { nivel: "medio", q: "¿Están alineados (1, 2), (3, 6) y (4, 9)?", sol: "Pendientes 4/2 = 2 y 3/1 = 3: no están alineados." },
    { nivel: "medio", q: "Halla la recta paralela a y = −3x + 1 que pasa por (2, 0).", sol: "m = −3: y = −3(x − 2) = −3x + 6." },
    { nivel: "medio", q: "Halla el punto de corte de y = 3x − 4 e y = −x + 8.", sol: "3x − 4 = −x + 8 → x = 3, y = 5. (3, 5)." },
    { nivel: "medio", q: "Una tarifa de móvil cuesta 14 € con 2 GB y 20 € con 5 GB. Halla la función afín e interpreta m y n.", sol: "m = 6/3 = 2 €/GB; y − 14 = 2(x − 2) → y = 2x + 10. Cuota fija 10 €, 2 € por GB." },
    { nivel: "medio", q: "La temperatura en Fahrenheit es F = 1,8C + 32. ¿A cuántos °F equivalen 25 °C? ¿A qué temperatura coinciden ambas escalas?", sol: "77 °F. C = 1,8C + 32 → −0,8C = 32 → C = −40." },
    { nivel: "medio", q: "Un depósito de 1.200 L se vacía a 40 L/min. Escribe la función, su dominio y cuándo queda la mitad.", sol: "V = 1.200 − 40t; dominio [0, 30] min. Mitad (600 L) a los 15 min." },
    { nivel: "medio", q: "Dos coches salen a la vez: A desde el km 0 a 90 km/h, B desde el km 60 a 70 km/h, en el mismo sentido. ¿Cuándo alcanza A a B?", sol: "90t = 60 + 70t → t = 3 h, en el km 270." },
    { nivel: "medio", q: "Un muelle mide 12 cm sin peso y se alarga 0,5 cm por cada 100 g. Escribe la longitud en función del peso (en g) y calcula el peso para 15 cm.", sol: "L = 12 + 0,005p. 15 = 12 + 0,005p → p = 600 g." },
    { nivel: "avanzado", q: "Halla k para que la recta y = kx + 2 pase por (3, −4).", sol: "−4 = 3k + 2 → k = −2." },
    { nivel: "avanzado", q: "Halla la recta perpendicular a y = 2x − 1 que pasa por (4, 1).", sol: "m' = −1/2: y − 1 = −(1/2)(x − 4) → y = −x/2 + 3." },
    { nivel: "avanzado", q: "Halla el área del triángulo que forma la recta 2x + 3y = 12 con los ejes.", sol: "Cortes (6, 0) y (0, 4). Área = 6 · 4/2 = 12 u²." },
    { nivel: "avanzado", q: "Estudia la posición de 2x − 4y + 8 = 0 y y = x/2 + 2.", sol: "La primera: y = x/2 + 2. Coincidentes (misma recta)." },
    { nivel: "avanzado", q: "Una empresa tiene costes C = 2.000 + 15x e ingresos I = 40x (x unidades). Halla el punto de equilibrio y el beneficio con 150 unidades.", sol: "40x = 2.000 + 15x → x = 80 unidades. B(150) = 6.000 − 4.250 = 1.750 €." },
    { nivel: "avanzado", q: "Los vértices de un triángulo son A(0, 0), B(6, 0) y C(2, 4). Halla las ecuaciones de sus tres lados.", sol: "AB: y = 0. AC: y = 2x. BC: m = 4/(−4) = −1 → y = −x + 6." },
    { nivel: "avanzado", q: "Mide la altura y el pie de 8 compañeros (o usa estos: 155-37, 160-38, 165-39, 168-40, 172-41, 175-42, 180-43, 185-44). Traza una recta de ajuste y estima la talla para 170 cm.", sol: "Con los datos dados, una recta que pase por (155, 37) y (185, 44): m ≈ 7/30 ≈ 0,23; y ≈ 37 + 0,23(x − 155). Para 170 cm, ≈ 40,5." },
    { nivel: "avanzado", q: "Un gimnasio A cobra 35 € al mes; otro, B, 10 € de cuota más 2,50 € por sesión. ¿Cuántas sesiones al mes hacen que A sea mejor?", sol: "10 + 2,5s = 35 → s = 10. Con más de 10 sesiones conviene A." },
    { nivel: "avanzado", q: "Demuestra que la recta que pasa por (a, b) y (2a, 2b), con a ≠ 0, pasa siempre por el origen.", sol: "m = (2b − b)/(2a − a) = b/a; y − b = (b/a)(x − a) → y = (b/a)x. Sí, pasa por (0, 0)." },
    { nivel: "avanzado", q: "La presión bajo el agua es P = 1 + 0,1h (atm, h en m). ¿A qué profundidad la presión es triple que en la superficie? Interpreta la pendiente.", sol: "1 + 0,1h = 3 → h = 20 m. La pendiente indica que la presión aumenta 0,1 atm por metro (1 atm cada 10 m)." },
  ],
  quiz: [
    { q: "La gráfica de y = mx pasa siempre por…", o: ["(1, 1)", "(0, 0)", "(0, m)", "(m, 0)"], a: 1, e: "Proporcionalidad directa." },
    { q: "En y = 5x − 3, la pendiente es…", o: ["−3", "5", "3", "−5"], a: 1, e: "El coeficiente de x." },
    { q: "En y = 5x − 3, la ordenada en el origen es…", o: ["5", "−3", "3", "0"], a: 1, e: "Corte con el eje Y." },
    { q: "Si m < 0 la función es…", o: ["creciente", "decreciente", "constante", "lineal siempre"], a: 1, e: "La recta baja." },
    { q: "y = 4 es una función…", o: ["lineal", "constante", "afín creciente", "que no es función"], a: 1, e: "Pendiente 0." },
    { q: "x = 4 es…", o: ["una función constante", "una recta vertical que no es función", "una lineal", "el eje X"], a: 1, e: "No pasa la prueba de la vertical." },
    { q: "Pendiente entre (1, 2) y (3, 8):", o: ["3", "2", "6", "1/3"], a: 0, e: "6/2." },
    { q: "m = 2/3 significa…", o: ["sube 3 al avanzar 2", "sube 2 al avanzar 3", "baja 2", "pasa por (2, 3)"], a: 1, e: "Subida/avance." },
    { q: "Recta por (0, 1) con m = 4:", o: ["y = x + 4", "y = 4x + 1", "y = 4x", "y = x/4 + 1"], a: 1, e: "n = 1." },
    { q: "Punto-pendiente con (2, 3) y m = −1:", o: ["y − 3 = −(x − 2)", "y + 3 = −(x + 2)", "y = −x + 2", "y − 2 = −(x − 3)"], a: 0, e: "y − y₀ = m(x − x₀)." },
    { q: "Pendiente de 4x − 2y + 6 = 0:", o: ["4", "−2", "2", "−4"], a: 2, e: "y = 2x + 3." },
    { q: "Corte con el eje X de y = 3x − 6:", o: ["(0, −6)", "(2, 0)", "(−2, 0)", "(6, 0)"], a: 1, e: "3x = 6." },
    { q: "y = 2x + 1 e y = 2x − 5 son…", o: ["secantes", "paralelas", "coincidentes", "perpendiculares"], a: 1, e: "Misma pendiente." },
    { q: "y = 3x e y = −x/3 son…", o: ["paralelas", "perpendiculares", "coincidentes", "la misma"], a: 1, e: "3 · (−1/3) = −1." },
    { q: "Corte de y = x + 1 e y = −x + 5:", o: ["(2, 3)", "(3, 2)", "(1, 2)", "(4, 1)"], a: 0, e: "2x = 4." },
    { q: "Una tarifa de 10 € al mes más 0,05 €/min es…", o: ["lineal", "afín", "constante", "periódica"], a: 1, e: "Parte fija y variable." },
    { q: "En s = 20 + 60t, la velocidad es…", o: ["20", "60", "80", "t"], a: 1, e: "La pendiente." },
    { q: "Dos tarifas afines cuestan lo mismo en…", o: ["el origen", "su punto de corte", "su pendiente", "nunca"], a: 1, e: "Punto de equilibrio." },
    { q: "Con cuota fija alta y coste por minuto bajo, conviene a quien…", o: ["consume poco", "consume mucho", "da igual", "nunca conviene"], a: 1, e: "Menor pendiente." },
    { q: "Una recta de ajuste sirve para…", o: ["unir todos los puntos", "predecir dentro del rango de los datos", "demostrar causas", "predecir cualquier valor"], a: 1, e: "Con prudencia." },
  ],
  examen: [
    { q: "Pendiente de y = −2x + 7:", o: ["7", "−2", "2", "−7"], a: 1, e: "Coeficiente de x." },
    { q: "Recta por (1, 4) y (3, 10):", o: ["y = 3x + 1", "y = 2x + 2", "y = 3x − 1", "y = 6x − 2"], a: 0, e: "m = 3; 4 = 3 + n." },
    { q: "Recta paralela a y = 4x − 1 por el origen:", o: ["y = 4x", "y = −4x", "y = x/4", "y = 4"], a: 0, e: "Misma pendiente, n = 0." },
    { q: "Cortes de 3x + 2y = 6 con los ejes:", o: ["(2, 0) y (0, 3)", "(3, 0) y (0, 2)", "(6, 0) y (0, 6)", "(0, 0)"], a: 0, e: "y = 0 → x = 2; x = 0 → y = 3." },
    { q: "Corte de y = 2x + 3 e y = x + 5:", o: ["(2, 7)", "(7, 2)", "(1, 5)", "(−2, 3)"], a: 0, e: "x = 2." },
    { q: "Un fontanero cobra 20 € más 30 €/h. Por 2,5 h:", o: ["75 €", "95 €", "80 €", "50 €"], a: 1, e: "20 + 75." },
    { q: "y = 3x − 1 y 6x − 2y − 2 = 0 son…", o: ["paralelas", "secantes", "coincidentes", "perpendiculares"], a: 2, e: "La segunda es y = 3x − 1." },
    { q: "Tarifas y = 5 + 0,1x e y = 0,2x se igualan en…", o: ["50", "25", "10", "5"], a: 0, e: "0,1x = 5." },
  ],
  feynman: ["Qué significa la pendiente de una recta y cómo se ve en la gráfica", "Qué diferencia hay entre una función lineal y una afín", "Cómo se halla la ecuación de una recta que pasa por dos puntos", "Cómo se decide qué tarifa conviene con dos funciones afines"],
  figura: {
    titulo: "Todo sobre la recta",
    svg: resumen("Resumen de las funciones lineales y afines", [
      ["y = mx + n", "m pendiente (inclinación) · n corte con el eje Y", "var(--pen)"],
      ["Pendiente", "m = (y₂ − y₁)/(x₂ − x₁) · m > 0 crece, m < 0 decrece", "var(--leaf)"],
      ["Ecuaciones", "punto-pendiente y − y₀ = m(x − x₀) · general Ax + By + C = 0", "var(--red)"],
      ["Dos rectas", "m ≠ m' secantes · m = m' paralelas o coincidentes", "var(--inf)"],
    ], 200),
  },
  video: { id: "7i4mjqRn-nM", titulo: "Función Lineal: introducción, características, gráfica, todo lo que necesitas saber | Clase 1", canal: "IngE Darwin", vistas: 671428, megusta: 13613 },
  mapa: mapa("RECTAS", "var(--leaf)", [
    ["Tipos", "lineal · afín · constante", "var(--pen)"],
    ["Pendiente", "subida / avance", "var(--leaf)"],
    ["Ecuaciones", "explícita · punto-pend. · general", "var(--red)"],
    ["Modelos", "tarifas · movimiento · ajuste", "var(--inf)"],
  ], 260),
  glosario: [
    ["Función lineal", "y = mx: proporcionalidad directa; recta por el origen."],
    ["Función afín", "y = mx + n: recta que corta al eje Y en (0, n)."],
    ["Función constante", "y = n: recta horizontal."],
    ["Pendiente", "m: lo que sube o baja y por cada unidad de x."],
    ["Ordenada en el origen", "n: valor de y cuando x = 0."],
    ["Constante de proporcionalidad", "Cociente fijo y/x en una función lineal."],
    ["Ecuación explícita", "y = mx + n."],
    ["Ecuación punto-pendiente", "y − y₀ = m(x − x₀)."],
    ["Ecuación general", "Ax + By + C = 0."],
    ["Rectas paralelas", "Rectas con la misma pendiente y distinta ordenada."],
    ["Rectas secantes", "Rectas con distinta pendiente: se cortan en un punto."],
    ["Rectas perpendiculares", "Secantes que forman ángulo recto: m · m' = −1."],
    ["Punto de equilibrio", "Punto de corte de dos modelos afines."],
    ["Recta de ajuste", "Recta que resume una nube de puntos aproximadamente alineados."],
  ],
  situacion: {
    titulo: "¿Qué tarifa elige mi familia?",
    reto: "Vais a analizar tarifas reales de un servicio (móvil, luz, bicis, transporte o gimnasio) con funciones afines para recomendar a cada familia la opción más económica según su consumo.",
    pasos: [
      "Recoged al menos tres tarifas reales con cuota fija y precio por unidad.",
      "Escribid cada tarifa como una función afín e identificad m y n con su significado.",
      "Representad todas las rectas en los mismos ejes (papel o GeoGebra) con escalas adecuadas.",
      "Calculad los puntos de corte de cada pareja y determinad los intervalos de consumo en que cada tarifa es la mejor.",
      "Estimad el consumo real de vuestra familia y escribid una recomendación justificada.",
    ],
    producto: "Un informe con las funciones, la gráfica comparativa, los puntos de equilibrio y la recomendación.",
    evaluacion: ["Modeliza correctamente las tarifas con funciones afines.", "Representa las rectas con escalas adecuadas.", "Calcula e interpreta los puntos de corte.", "Argumenta la recomendación con datos reales."],
  },
  tarjetas: [
    ["y = mx", "Lineal: pasa por el origen."], ["y = mx + n", "Afín: corta el eje Y en (0, n)."],
    ["Pendiente", "Subida / avance."], ["m > 0", "Creciente."],
    ["m = 0", "Constante (horizontal)."], ["x = k", "Vertical: no es función."],
    ["m por dos puntos", "(y₂ − y₁)/(x₂ − x₁)"], ["Punto-pendiente", "y − y₀ = m(x − x₀)"],
    ["General", "Ax + By + C = 0; m = −A/B"], ["Paralelas", "Misma m, distinta n."],
    ["Perpendiculares", "m · m' = −1"], ["Equilibrio", "Igualar las dos funciones."],
  ],
  familias: ["Comparad las tarifas reales de casa (luz, móvil) como funciones afines.", "Medid la longitud de un muelle o una goma con distintos pesos y dibujad la gráfica.", "Calculad juntos la velocidad media de un viaje con la distancia y el tiempo.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico: funciones lineales, afines y constantes, pendiente y ordenada en el origen, ecuaciones de la recta, posición relativa, y modelización de situaciones reales con funciones afines (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["GeoGebra con deslizadores para m y n.", "Experimento de la ley de Hooke con muelles o gomas.", "Comparador de tarifas reales (situación de aprendizaje).", "Nube de puntos con datos de la clase y recta de ajuste."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: funciones lineales (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
