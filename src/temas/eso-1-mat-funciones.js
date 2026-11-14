// Matemáticas 1º ESO · Funciones y gráficas. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, ejes, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const plano = ejes("Plano cartesiano con los cuatro cuadrantes y los puntos A(3, 2), B(−2, 3), C(−3, −1) y D(2, −2)", { x: [-4, 4], y: [-3, 4], paso: 1, marcasX: [-3, -2, -1, 1, 2, 3], marcasY: [-2, -1, 1, 2, 3], puntos: [[3, 2, "A(3, 2)", "var(--pen)", "n"], [-2, 3, "B(−2, 3)", "var(--red)", "e"], [-3, -1, "C(−3, −1)", "var(--leaf)", "s"], [2, -2, "D(2, −2)", "var(--sun)", "e"]], textos: [[2.6, 3.6, "I", "var(--muted)"], [-2.8, 1.4, "II", "var(--muted)"], [-1.2, -2.5, "III", "var(--muted)"], [3.4, -0.8, "IV", "var(--muted)"]] });

const maquina = lienzo("Una función es como una máquina: a cada valor de entrada x le asigna un único valor de salida y; aquí y es el doble de x más 1", `
  <rect x="86" y="44" width="88" height="64" rx="12" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>${tx(130, 72, "y = 2x + 1", { fs: 13, fam: D, c: "var(--pen)", max: 80 })}${tx(130, 94, "función", { fs: 11, c: "var(--muted)" })}
  <path d="M28 76 H84 M176 76 H232" stroke="var(--ink)" stroke-width="2.5"/><path d="M78 70 L86 76 L78 82 M226 70 L234 76 L226 82" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
  ${tx(40, 64, "x = 3", { fs: 13, c: "var(--leaf)" })}${tx(216, 64, "y = 7", { fs: 13, c: "var(--red)" })}
  ${tx(130, 144, "a cada x, un único y", { fs: 13 })}${tx(130, 166, "x: variable independiente", { fs: 11, c: "var(--muted)" })}`, 176);

const formas = cajas("Cuatro formas de expresar una función: enunciado, tabla, gráfica y fórmula", [
  ["Enunciado", ["1 kg cuesta 3 €"]], ["Tabla", ["x: 1 2 3", "y: 3 6 9"]], ["Gráfica", ["puntos en ejes"]], ["Fórmula", ["y = 3x"]],
], "Expresar una función");

const tablaGraf = ejes("De la tabla a la gráfica: los puntos de y igual a 2x más 1 están en una recta", { x: [-1, 4], y: [-2, 10], paso: 1, pasoY: 2, marcasX: [1, 2, 3], marcasY: [2, 4, 6, 8], curvas: [{ f: (x) => 2 * x + 1, c: "var(--pen)", disc: true, t: "y = 2x + 1", tx: 1.4, ty: 8.4 }], puntos: [[0, 1, "(0, 1)", "var(--red)", "e"], [1, 3, "(1, 3)", "var(--red)", "e"], [2, 5, "(2, 5)", "var(--red)", "e"], [3, 7, "(3, 7)", "var(--red)", "e"]] });

const directa = ejes("Funciones de proporcionalidad directa: rectas que pasan por el origen, más inclinadas cuanto mayor es la constante", { x: [-3, 3], y: [-4, 6], paso: 1, pasoY: 2, marcasX: [-2, -1, 1, 2], marcasY: [-2, 2, 4], curvas: [{ f: (x) => 2 * x, c: "var(--red)", t: "y = 2x", tx: 1.3, ty: 5 }, { f: (x) => 0.5 * x, c: "var(--pen)", t: "y = x/2", tx: 1.9, ty: 2 }, { f: (x) => -x, c: "var(--leaf)", t: "y = −x", tx: -2.2, ty: 4.6 }] });

const crec = ejes("Crecimiento, decrecimiento, máximo y mínimo en una gráfica de temperaturas a lo largo de un día", { x: [0, 24], y: [0, 24], paso: 4, pasoY: 5, marcasX: [4, 8, 12, 16, 20], marcasY: [5, 10, 15, 20], ex: "h", ey: "°C", curvas: [{ f: (x) => 12 - 7 * Math.cos(((x - 4) * Math.PI) / 12) + (x < 4 ? 0 : 0), c: "var(--red)" }], puntos: [[4, 5, "mín 5 °C", "var(--pen)", "se"], [16, 19, "máx 19 °C", "var(--red)", "n"]], textos: [[9, 14, "crece", "var(--leaf)"], [21.5, 8, "decrece", "var(--sun)"]] });

const continua = comparar("Función continua frente a discontinua: la temperatura no da saltos y el precio de un aparcamiento por horas sí", [
  ["Continua", ["sin levantar el lápiz", "temperatura", "altura de un niño"], "var(--leaf)"],
  ["Discontinua", ["con saltos", "precio parking", "tarifa por horas"], "var(--red)"],
], "¿Hay saltos?");

const distancia = ejes("Gráfica de distancia y tiempo de un paseo: sale de casa, se para en una tienda y vuelve", { x: [0, 60], y: [0, 3], paso: 10, pasoY: 0.5, marcasX: [10, 20, 30, 40, 50], marcasY: [1, 2], ex: "min", ey: "km", segs: [[0, 0, 20, 2, "var(--pen)"], [20, 2, 30, 2, "var(--sun)"], [30, 2, 50, 0, "var(--leaf)"]], textos: [[9, 1.5, "va", "var(--pen)"], [25, 2.3, "parado", "var(--sun)"], [44, 1.3, "vuelve", "var(--leaf)"]] });

const leer = pasos("Cómo interpretar una gráfica en cuatro preguntas", ["¿Qué hay en cada eje y en qué unidades?", "¿Dónde crece, decrece o es constante?", "¿Máximos, mínimos y cortes?", "¿Qué cuenta la gráfica?"], "Leer una gráfica");

const medios = lienzo("Gráfica engañosa: el eje vertical no empieza en cero y exagera una diferencia pequeña", `
  <path d="M30 20 V150 H120" stroke="var(--muted)" stroke-width="1.6" fill="none"/>${tx(26, 24, "52", { fs: 9, a: "end", c: "var(--muted)" })}${tx(26, 150, "48", { fs: 9, a: "end", c: "var(--muted)" })}
  <rect x="44" y="110" width="28" height="40" fill="var(--pen)"/><rect x="82" y="30" width="28" height="120" fill="var(--red)"/>${tx(75, 170, "¡parece el triple!", { fs: 10.5, c: "var(--red)", max: 100 })}
  <path d="M150 20 V150 H240" stroke="var(--muted)" stroke-width="1.6" fill="none"/>${tx(146, 24, "60", { fs: 9, a: "end", c: "var(--muted)" })}${tx(146, 150, "0", { fs: 9, a: "end", c: "var(--muted)" })}
  <rect x="164" y="47" width="28" height="103" fill="var(--pen)"/><rect x="202" y="39" width="28" height="111" fill="var(--red)"/>${tx(197, 170, "49 frente a 51", { fs: 10.5, c: "var(--leaf)", max: 100 })}`, 180);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Funciones y gráficas",
  minutos: 100,
  objetivos: [
    "Representar e identificar puntos en el plano cartesiano",
    "Reconocer cuándo una relación entre dos magnitudes es una función",
    "Expresar una función mediante enunciado, tabla, gráfica y fórmula",
    "Representar funciones de proporcionalidad directa y otras rectas sencillas",
    "Interpretar gráficas: crecimiento, máximos, mínimos y continuidad",
    "Analizar con espíritu crítico gráficas de la vida cotidiana y de los medios",
  ],
  claves: ["eje de coordenadas", "coordenadas", "función", "variable independiente", "gráfica", "crecimiento", "máximo"],
  pregunta: {
    texto: "¿Cómo puede una sola imagen contar toda la historia de un viaje: cuándo salimos, cuándo paramos y cuándo volvimos?",
    respuesta: "Con una <b>gráfica</b>. Si en el eje horizontal ponemos el tiempo y en el vertical la distancia a casa, cada tramo cuenta algo: una línea que sube es que nos alejamos, una línea horizontal es que estamos parados y una que baja es que volvemos. Las <b>funciones</b> relacionan dos magnitudes y las gráficas las hacen visibles.",
  },
  lectura: {
    titulo: "Descartes y la mosca del techo",
    html: `<p>Cuenta una anécdota, probablemente inventada, que el filósofo y matemático francés René Descartes era un niño enfermizo y le dejaban quedarse en la cama por las mañanas. Un día, tumbado, observó una mosca que se paseaba por el techo de su habitación y se preguntó cómo podría describir exactamente dónde estaba en cada momento.</p><p>Se le ocurrió una idea brillante: bastaba con decir a qué distancia estaba la mosca de una pared y a qué distancia de la otra pared perpendicular. Dos números. Con ellos, cualquier punto del techo quedaba perfectamente localizado. Así nacieron, según la leyenda, las <b>coordenadas cartesianas</b>, que llevan su nombre (Cartesius en latín).</p><p>La idea de Descartes, publicada en 1637, unió dos ramas de las matemáticas que hasta entonces iban separadas: la geometría (dibujos) y el álgebra (números y letras). Hoy usamos sus coordenadas en el GPS, en los videojuegos, en los mapas, en las hojas de cálculo y en todas las gráficas que ves en las noticias. En este tema aprenderás a situar puntos, a entender qué es una función y a leer gráficas como un experto.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 El plano cartesiano</h3><p>El <b>plano cartesiano</b> está formado por dos rectas numéricas perpendiculares que se cortan en el <b>origen</b> O, el punto (0, 0):</p><ul><li>El <b>eje de abscisas</b> o eje X, horizontal.</li><li>El <b>eje de ordenadas</b> o eje Y, vertical.</li></ul><p>Cada punto del plano se identifica con un par de números llamados <b>coordenadas</b>: <mark>P(x, y)</mark>. La primera coordenada (abscisa) indica cuánto hay que moverse en horizontal desde el origen (a la derecha si es positiva, a la izquierda si es negativa), y la segunda (ordenada), cuánto en vertical (arriba o abajo).</p><p>El orden importa: A(3, 2) y E(2, 3) son puntos distintos. Para recordarlo, piensa que primero «andas» por el suelo (x) y luego «subes» la escalera (y). Los puntos del eje X tienen ordenada 0, como (4, 0), y los del eje Y tienen abscisa 0, como (0, −2).</p>`, svg: plano },
    { html: `<h3>1.2 Los cuatro cuadrantes</h3><p>Los ejes dividen el plano en cuatro regiones llamadas <b>cuadrantes</b>, que se numeran en sentido contrario a las agujas del reloj empezando por arriba a la derecha:</p>${tabla(["Cuadrante", "Signo de x", "Signo de y", "Ejemplo"], [["I", "+", "+", "A(3, 2)"], ["II", "−", "+", "B(−2, 3)"], ["III", "−", "−", "C(−3, −1)"], ["IV", "+", "−", "D(2, −2)"]])}<p>Sabiendo los signos de las coordenadas, puedes saber en qué cuadrante está un punto sin dibujarlo. Los puntos que están sobre los ejes no pertenecen a ningún cuadrante.</p><p>Las coordenadas se usan en muchos contextos: la posición de un barco con latitud y longitud, una casilla del juego de los barcos (B-5), un asiento del cine (fila 8, butaca 12) o un píxel de la pantalla. En todos los casos, dos números bastan para localizar un lugar en una superficie.</p>` },
    { html: `<h3>1.3 ¿Qué es una función?</h3><p>Una <b>función</b> es una relación entre dos magnitudes que asigna a cada valor de la primera <b>un único valor</b> de la segunda. La primera magnitud se llama <b>variable independiente</b> (x), porque elegimos su valor libremente, y la segunda, <b>variable dependiente</b> (y), porque su valor depende del de x.</p><p>Ejemplos de funciones: el precio de la fruta en función de los kilos, la temperatura en función de la hora del día, la distancia recorrida en función del tiempo, o el área de un cuadrado en función de su lado. En todos ellos, a cada valor de x le corresponde un solo valor de y.</p><p>No es función, por ejemplo, la relación «edad → altura de los alumnos de una clase», porque a la edad de 12 años le corresponden muchas alturas distintas. Una función se puede imaginar como una <b>máquina</b>: le das un número de entrada y te devuelve exactamente un número de salida.</p>`, svg: maquina },
    { html: `<h3>1.4 Formas de expresar una función</h3><p>Una misma función se puede dar de cuatro maneras:</p><ul><li><b>Enunciado</b>: con palabras. «Las manzanas cuestan 3 € el kilo».</li><li><b>Tabla de valores</b>: con algunos pares (x, y) ordenados en dos filas o columnas.</li><li><b>Gráfica</b>: con los puntos representados en el plano cartesiano.</li><li><b>Fórmula</b> o expresión algebraica: y = 3x.</li></ul>${tabla(["kg (x)", "0", "1", "2", "3", "4"], [["€ (y)", "0", "3", "6", "9", "12"]])}<p>Cada forma tiene ventajas: el enunciado se entiende fácilmente, la tabla da valores concretos, la gráfica permite ver de un vistazo cómo cambia la función, y la fórmula permite calcular cualquier valor. Pasar de una forma a otra es una habilidad clave de este tema. No todas las funciones tienen fórmula: la temperatura a lo largo del día se describe con una tabla o una gráfica, pero no con una expresión sencilla.</p>`, svg: formas },
    { html: `<h3>1.5 De la fórmula a la tabla y a la gráfica</h3><p>Para representar una función dada por su fórmula se siguen tres pasos:</p><ol><li><b>Hacer una tabla</b>: se eligen varios valores de x (pequeños y cómodos, incluidos algunos negativos si tiene sentido) y se calcula el valor de y sustituyendo en la fórmula.</li><li><b>Dibujar los puntos</b> (x, y) en el plano cartesiano, eligiendo una escala adecuada en cada eje.</li><li><b>Unir los puntos</b> si la situación lo permite (si x puede tomar cualquier valor intermedio).</li></ol><p>Ejemplo: y = 2x + 1. Para x = 0, y = 1; para x = 1, y = 3; para x = 2, y = 5; para x = 3, y = 7. Los puntos (0, 1), (1, 3), (2, 5) y (3, 7) están alineados, así que la gráfica es una <b>recta</b>.</p><p>¿Se unen siempre los puntos? No: si x es el número de entradas de cine, no tiene sentido comprar 2,5 entradas, y la gráfica son puntos sueltos.</p>`, svg: tablaGraf, video: vb("funB") },
    { html: `<h3>1.6 Funciones de proporcionalidad directa</h3><p>Las funciones que relacionan dos magnitudes directamente proporcionales tienen una fórmula del tipo <mark>y = m · x</mark>, donde m es la constante de proporcionalidad. Su gráfica es siempre una <b>recta que pasa por el origen</b>.</p><p>El número m se llama <b>pendiente</b> y mide la inclinación de la recta:</p><ul><li>Si m es positiva, la recta <b>sube</b> (la función es creciente). Cuanto mayor es m, más empinada: y = 2x sube más deprisa que y = x/2.</li><li>Si m es negativa, la recta <b>baja</b>: y = −x.</li></ul><p>La pendiente indica cuánto aumenta y cuando x aumenta 1. En y = 3x (precio de las manzanas), cada kilo más cuesta 3 € más. Para dibujar una función de proporcionalidad basta con dos puntos: el origen y otro cualquiera. Las rectas que no pasan por el origen, como y = 2x + 1, se llaman funciones afines; las estudiarás en 2º y 3º.</p>`, svg: directa },
    { html: `<h3>2.1 Crecimiento y decrecimiento</h3><p>Al leer una gráfica de izquierda a derecha, una función puede:</p><ul><li><b>Crecer</b>: al aumentar x, aumenta y. La gráfica sube.</li><li><b>Decrecer</b>: al aumentar x, disminuye y. La gráfica baja.</li><li><b>Ser constante</b>: al aumentar x, y no cambia. La gráfica es horizontal.</li></ul><p>En la gráfica de la temperatura de un día, la función decrece de madrugada, crece desde las 4 h hasta las 16 h y vuelve a decrecer por la tarde y la noche. Se dice que la función es creciente en el intervalo de 4 a 16 y decreciente en el resto.</p><p>Hay que leer siempre de <b>izquierda a derecha</b>, en el sentido en el que aumenta la variable independiente. Si leyeras al revés, confundirías subidas con bajadas.</p>`, svg: crec },
    { html: `<h3>2.2 Máximos, mínimos y cortes con los ejes</h3><p>Un <b>máximo</b> es un punto en el que la función pasa de crecer a decrecer: es más alto que los puntos de su alrededor. Un <b>mínimo</b> es un punto en el que pasa de decrecer a crecer. En la gráfica de temperaturas, el mínimo es de 5 °C a las 4 h y el máximo, de 19 °C a las 16 h.</p><p>Si es el valor más alto de toda la gráfica, se llama <b>máximo absoluto</b>; si solo es más alto que los de alrededor, <b>máximo relativo</b>. Lo mismo ocurre con los mínimos.</p><p>También es interesante dónde la gráfica <b>corta los ejes</b>. El corte con el eje Y es el valor de la función cuando x = 0 (por ejemplo, la temperatura a medianoche). Los cortes con el eje X son los valores de x en los que y = 0 (por ejemplo, las horas en que la temperatura es 0 °C). Estos puntos suelen tener un significado importante en el problema.</p>` },
    { html: `<h3>2.3 Funciones continuas y discontinuas</h3><p>Una función es <b>continua</b> si su gráfica se puede dibujar <b>sin levantar el lápiz</b> del papel. La temperatura a lo largo del día, la altura de una planta o la distancia recorrida por un coche son continuas: no cambian de golpe.</p><p>Una función es <b>discontinua</b> si su gráfica tiene saltos o huecos. Por ejemplo, el precio de un aparcamiento que cobra 2 € por cada hora o fracción: de 0 a 1 h pagas 2 €, pero a las 1 h y 1 minuto pagas 4 €. La gráfica tiene forma de escalera. Otros ejemplos: el precio del envío de una carta según su peso o la nota de un examen según el número de aciertos.</p><p>También hay funciones que solo tienen sentido para valores sueltos (número de personas, de entradas, de días): su gráfica son puntos aislados y no se unen.</p>`, svg: continua },
    { html: `<h3>2.4 Gráficas de distancia y tiempo</h3><p>Un tipo de gráfica muy útil es la que relaciona el <b>tiempo</b> (eje X) con la <b>distancia a un punto de partida</b> (eje Y). Cada tramo de la gráfica se interpreta así:</p><ul><li>Tramo que <b>sube</b>: nos alejamos del punto de partida. Cuanto más inclinado, más rápido vamos.</li><li>Tramo <b>horizontal</b>: estamos parados (el tiempo pasa pero la distancia no cambia).</li><li>Tramo que <b>baja</b>: volvemos hacia el punto de partida.</li></ul><p>En el ejemplo, una persona sale de casa y camina 2 km en 20 minutos, se para 10 minutos en una tienda y vuelve a casa en 20 minutos. Podemos calcular su velocidad en cada tramo: a la ida, 2 km en 20 min (6 km/h); a la vuelta, 2 km en 20 min (6 km/h).</p><p>Cuidado: la gráfica no es el dibujo del camino. Que una línea suba no significa que la persona suba una cuesta, sino que se aleja de casa.</p>`, svg: distancia, video: vb("funB2") },
    { html: `<h3>2.5 Interpretar gráficas paso a paso</h3><p>Para leer cualquier gráfica, hazte estas preguntas en orden:</p><ol><li><b>¿Qué representa cada eje?</b> Lee los títulos y las unidades. ¿Es tiempo en horas o en días? ¿Euros o miles de euros?</li><li><b>¿Cómo cambia?</b> Busca los tramos en los que crece, decrece o es constante.</li><li><b>¿Puntos destacados?</b> Máximos, mínimos, cortes con los ejes, saltos.</li><li><b>¿Qué historia cuenta?</b> Explícalo con palabras, en el contexto del problema.</li></ol><p>Ejemplo: en una gráfica del nivel de agua de un embalse a lo largo del año, el máximo en primavera indica la época de lluvias y deshielo, y el mínimo a finales de verano, la sequía y el riego. Interpretar no es solo leer números: es entender el fenómeno.</p><p>Practica también lo contrario: dada una historia, dibuja una gráfica que la represente. Es una forma excelente de comprobar si entiendes la relación entre las magnitudes.</p>`, svg: leer },
    { html: `<h3>2.6 Gráficas en la vida cotidiana y en los medios</h3><p>Los periódicos, las webs y las redes están llenos de gráficas: evolución de precios, resultados electorales, temperaturas, audiencias, contagios… Son muy útiles, pero a veces pueden <b>engañar</b>, a propósito o por descuido. Algunos trucos frecuentes:</p><ul><li><b>Eje vertical que no empieza en 0</b>: una diferencia de 49 a 51 puede parecer enorme si el eje empieza en 48.</li><li><b>Escalas distintas</b> al comparar dos gráficas.</li><li><b>Falta de unidades</b> o de fuente de los datos.</li><li><b>Periodos elegidos a conveniencia</b>: mostrar solo los meses en que algo sube.</li></ul><p>Por eso, ante una gráfica en los medios, lee siempre los ejes, comprueba las escalas y pregúntate quién la ha hecho y con qué datos. Ser capaz de detectar una gráfica engañosa es una forma de pensamiento crítico que te protegerá de muchas manipulaciones.</p>`, svg: medios, video: vg("funV") },
  ],
  ejemplos: [
    { enunciado: "Indica el cuadrante de P(−4, 5), Q(3, −1), R(−2, −6) y S(0, 3).", pasos: ["P: x −, y + → II.", "Q: x +, y − → IV.", "R: x −, y − → III.", "S: x = 0, sobre el eje Y."], resultado: "II, IV, III y ningún cuadrante (eje Y)." },
    { enunciado: "Un taxi cobra 3 € fijos más 2 € por km. Escribe la fórmula y haz una tabla para 0, 1, 2, 5 y 10 km.", pasos: ["y = 3 + 2x.", "x = 0 → 3; 1 → 5; 2 → 7; 5 → 13; 10 → 23."], resultado: "y = 2x + 3; valores 3, 5, 7, 13 y 23 €." },
    { enunciado: "¿Es función la relación «número de lados de un polígono regular → suma de sus ángulos»?", pasos: ["A cada número de lados le corresponde un único valor de la suma: (n − 2) · 180°."], resultado: "Sí, es función." },
    { enunciado: "Representa y = −2x y di si crece o decrece.", pasos: ["Tabla: x = −1 → 2; 0 → 0; 1 → −2; 2 → −4.", "Los puntos forman una recta por el origen.", "Pendiente negativa."], resultado: "Recta decreciente que pasa por (0, 0)." },
    { enunciado: "Una gráfica de distancia sube de 0 a 6 km en 30 min, es horizontal 15 min y baja a 0 en 45 min. Describe el recorrido.", pasos: ["Ida: 6 km en 0,5 h → 12 km/h.", "Parada de 15 min a 6 km.", "Vuelta: 6 km en 0,75 h → 8 km/h."], resultado: "Va a 12 km/h, para 15 min y vuelve más despacio, a 8 km/h." },
    { enunciado: "Un parking cobra 2 € por hora o fracción. ¿Cuánto cuestan 2 h 10 min? ¿Es una función continua?", pasos: ["2 h 10 min se cobran como 3 horas.", "3 · 2 = 6 €.", "El precio salta cada hora."], resultado: "6 €. Es discontinua (gráfica en escalera)." },
  ],
  errores: [
    "Intercambiar las coordenadas: (3, 2) no es lo mismo que (2, 3).",
    "Contar los cuadrantes en el sentido de las agujas del reloj.",
    "Leer la gráfica de derecha a izquierda y confundir crecer con decrecer.",
    "Pensar que una gráfica de distancia y tiempo es el dibujo del camino.",
    "Unir los puntos cuando la variable solo toma valores enteros (personas, entradas).",
    "No mirar dónde empieza el eje vertical y sacar conclusiones exageradas.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe las coordenadas del origen y de un punto en cada cuadrante.", sol: "O(0, 0). Por ejemplo: I (2, 1), II (−3, 4), III (−1, −2), IV (5, −3)." },
    { nivel: "básico", q: "Representa los puntos A(2, 4), B(−3, 1), C(0, −2) y D(−1, −3).", sol: "A en el I, B en el II, C sobre el eje Y por debajo del origen, D en el III." },
    { nivel: "básico", q: "¿En qué cuadrante están (−5, −5), (7, −2) y (−1, 8)?", sol: "III; IV; II." },
    { nivel: "básico", q: "Di cuál es la variable independiente y cuál la dependiente: «el precio de una llamada según los minutos».", sol: "Independiente: minutos. Dependiente: precio." },
    { nivel: "básico", q: "¿Es función? a) número de DNI → persona; b) persona → color de ojos; c) altura → edad.", sol: "a) Sí. b) Sí. c) No (a una altura le corresponden varias edades)." },
    { nivel: "básico", q: "Haz una tabla de y = 3x para x = 0, 1, 2, 3, 4.", sol: "0, 3, 6, 9, 12." },
    { nivel: "básico", q: "Haz una tabla de y = x + 2 para x = −2, −1, 0, 1, 2.", sol: "0, 1, 2, 3, 4." },
    { nivel: "básico", q: "Escribe la fórmula: «el perímetro de un cuadrado en función de su lado».", sol: "P = 4l (y = 4x)." },
    { nivel: "básico", q: "¿Qué puntos pertenecen a y = 2x: (1, 2), (3, 5), (−2, −4), (0, 1)?", sol: "(1, 2) y (−2, −4)." },
    { nivel: "básico", q: "En una gráfica de distancia a casa, ¿qué significa un tramo horizontal?", sol: "Que la persona está parada." },
    { nivel: "básico", q: "¿Es continua la función «altura de una persona a lo largo de su vida»? ¿Y «número de hermanos a lo largo de la vida»?", sol: "Altura: continua. Número de hermanos: discontinua (cambia a saltos)." },
    { nivel: "básico", q: "¿Crece o decrece y = −3x? ¿Pasa por el origen?", sol: "Decrece (pendiente negativa). Sí, pasa por (0, 0)." },
    { nivel: "medio", q: "Representa y = 2x − 1 a partir de una tabla con cinco valores.", sol: "x = −1 → −3; 0 → −1; 1 → 1; 2 → 3; 3 → 5. Recta creciente que corta el eje Y en (0, −1)." },
    { nivel: "medio", q: "Una vela de 20 cm se consume 2 cm cada hora. Escribe la fórmula de la altura y la tabla de las primeras 5 horas. ¿Cuándo se apaga?", sol: "y = 20 − 2x. 20, 18, 16, 14, 12, 10. Se apaga a las 10 h (y = 0)." },
    { nivel: "medio", q: "Escribe la fórmula de la función de la tabla: x: 1, 2, 3, 4; y: 5, 10, 15, 20.", sol: "y = 5x." },
    { nivel: "medio", q: "Escribe la fórmula de la función de la tabla: x: 0, 1, 2, 3; y: 1, 4, 7, 10.", sol: "Aumenta 3 cada vez y empieza en 1: y = 3x + 1." },
    { nivel: "medio", q: "Ordena de más a menos inclinada: y = x, y = 4x, y = x/3, y = 2x.", sol: "y = 4x, y = 2x, y = x, y = x/3." },
    { nivel: "medio", q: "Describe la temperatura: a las 0 h 8 °C; baja hasta 3 °C a las 6 h; sube hasta 18 °C a las 15 h; baja a 10 °C a las 24 h. Indica máximo, mínimo y tramos.", sol: "Decrece de 0 a 6 h, crece de 6 a 15 h, decrece de 15 a 24 h. Mínimo (6, 3); máximo (15, 18)." },
    { nivel: "medio", q: "Un ciclista recorre 30 km en 1,5 h, descansa 30 min y vuelve en 2 h. Dibuja la gráfica y calcula las velocidades.", sol: "Ida 20 km/h, parada horizontal 0,5 h, vuelta 15 km/h. La gráfica sube, es horizontal y baja." },
    { nivel: "medio", q: "Un aparcamiento cobra 1,50 € por hora o fracción. Haz la tabla hasta 4 h y explica la forma de la gráfica.", sol: "Hasta 1 h: 1,50; hasta 2 h: 3; hasta 3 h: 4,50; hasta 4 h: 6. Gráfica en escalera, discontinua." },
    { nivel: "medio", q: "¿En qué punto corta y = 3x − 6 a cada eje?", sol: "Eje Y: x = 0 → (0, −6). Eje X: y = 0 → 3x = 6 → (2, 0)." },
    { nivel: "medio", q: "Un vídeo tiene 200 visitas el día 1 y cada día 150 más. Escribe la fórmula y calcula el día 10.", sol: "y = 200 + 150(x − 1) = 150x + 50. Día 10: 1 550 visitas." },
    { nivel: "avanzado", q: "Inventa una historia que corresponda a una gráfica de distancia que sube despacio, sube deprisa, es horizontal y baja muy deprisa.", sol: "Ejemplo: voy andando, cojo el autobús, me quedo en casa de un amigo y vuelvo en coche." },
    { nivel: "avanzado", q: "Los vértices de un rectángulo son (−2, 1), (4, 1), (4, 5) y (−2, 5). Calcula su perímetro y su área.", sol: "Base 4 − (−2) = 6; altura 5 − 1 = 4. P = 20; A = 24." },
    { nivel: "avanzado", q: "Dos compañías de taxi: A cobra 2 € + 1,5 €/km y B, 4 € + 1 €/km. ¿A partir de cuántos km es más barata B?", sol: "2 + 1,5x = 4 + x → x = 4. Para más de 4 km es más barata B." },
    { nivel: "avanzado", q: "La gráfica de una función pasa por (0, 0) y (3, 12) y es una recta. Escribe su fórmula y calcula y para x = 7.", sol: "Pendiente 12/3 = 4: y = 4x. Para x = 7, y = 28." },
    { nivel: "avanzado", q: "Una gráfica de ventas tiene el eje vertical de 950 a 1 000 y muestra 960 y 990. ¿Es engañosa? Rehazla con el eje desde 0.", sol: "Sí: parece que se triplica, pero solo crece un 3 %. Desde 0, las barras serían casi iguales." },
    { nivel: "avanzado", q: "¿Es función la relación x → y si y² = x? Pon un ejemplo.", sol: "No: para x = 4, y puede ser 2 o −2 (dos valores)." },
    { nivel: "avanzado", q: "Un depósito de 500 L pierde 25 L por hora. Escribe la fórmula, di si crece o decrece y cuándo se vacía.", sol: "y = 500 − 25x. Decrece. Se vacía cuando y = 0: x = 20 horas." },
    { nivel: "avanzado", q: "Encuentra el error: «el punto (−3, 2) está en el cuadrante IV porque tiene un número negativo».", sol: "x negativa e y positiva → cuadrante II." },
  ],
  quiz: [
    { q: "El punto (0, 0) se llama…", o: ["vértice", "origen", "eje", "cuadrante"], a: 1, e: "Corte de los ejes." },
    { q: "El eje horizontal es el eje de…", o: ["ordenadas", "abscisas", "funciones", "simetría"], a: 1, e: "Eje X." },
    { q: "En P(4, −1), la ordenada es…", o: ["4", "−1", "3", "0"], a: 1, e: "La segunda coordenada." },
    { q: "(−2, 5) está en el cuadrante…", o: ["I", "II", "III", "IV"], a: 1, e: "x −, y +." },
    { q: "(3, −4) está en el cuadrante…", o: ["I", "II", "III", "IV"], a: 3, e: "x +, y −." },
    { q: "El punto (0, 7) está…", o: ["en el I", "sobre el eje X", "sobre el eje Y", "en el origen"], a: 2, e: "x = 0." },
    { q: "En una función, a cada x le corresponde…", o: ["varios y", "un único y", "ningún y", "dos y"], a: 1, e: "Definición." },
    { q: "La variable que elegimos libremente es la…", o: ["dependiente", "independiente", "constante", "pendiente"], a: 1, e: "x." },
    { q: "Si y = 4x − 1, para x = 2, y =", o: ["7", "8", "9", "3"], a: 0, e: "8 − 1." },
    { q: "¿Qué punto está en y = x + 3?", o: ["(1, 3)", "(2, 5)", "(0, 0)", "(3, 3)"], a: 1, e: "2 + 3 = 5." },
    { q: "La gráfica de y = 5x es…", o: ["una curva", "una recta por el origen", "horizontal", "vertical"], a: 1, e: "Proporcionalidad directa." },
    { q: "¿Cuál es más inclinada?", o: ["y = x", "y = 3x", "y = x/2", "y = 0,1x"], a: 1, e: "Mayor pendiente." },
    { q: "y = −2x es…", o: ["creciente", "decreciente", "constante", "discontinua"], a: 1, e: "Pendiente negativa." },
    { q: "Si la gráfica sube de izquierda a derecha, la función…", o: ["crece", "decrece", "es constante", "no existe"], a: 0, e: "Al aumentar x, aumenta y." },
    { q: "Un máximo es un punto donde la función pasa de…", o: ["decrecer a crecer", "crecer a decrecer", "ser continua a discontinua", "positiva a negativa"], a: 1, e: "Es la «cima»." },
    { q: "Una gráfica sin saltos es…", o: ["continua", "discontinua", "constante", "decreciente"], a: 0, e: "Sin levantar el lápiz." },
    { q: "El precio de un parking por horas o fracción es una función…", o: ["continua", "discontinua", "constante", "proporcional"], a: 1, e: "En escalera." },
    { q: "En una gráfica distancia-tiempo, un tramo que baja indica que…", o: ["bajamos una cuesta", "volvemos al punto de partida", "estamos parados", "vamos más rápido"], a: 1, e: "La distancia disminuye." },
    { q: "Para no dejarse engañar por una gráfica hay que mirar…", o: ["solo los colores", "los ejes y las escalas", "el título", "nada"], a: 1, e: "Sobre todo el eje vertical." },
    { q: "Las coordenadas cartesianas deben su nombre a…", o: ["Euclides", "Descartes", "Pitágoras", "Newton"], a: 1, e: "Cartesius." },
  ],
  examen: [
    { q: "(−1, −6) está en el cuadrante…", o: ["I", "II", "III", "IV"], a: 2, e: "Los dos negativos." },
    { q: "¿Qué relación NO es función?", o: ["lado → área del cuadrado", "kilos → precio", "edad → estatura de los alumnos", "hora → temperatura"], a: 2, e: "Varias estaturas por edad." },
    { q: "Para y = 2x + 5, si x = −3, y =", o: ["−1", "11", "1", "−11"], a: 0, e: "−6 + 5." },
    { q: "La fórmula de la tabla x: 1, 2, 3; y: 4, 8, 12 es…", o: ["y = x + 3", "y = 4x", "y = 3x + 1", "y = x/4"], a: 1, e: "Cociente constante 4." },
    { q: "y = 3x − 6 corta el eje X en…", o: ["(0, −6)", "(2, 0)", "(−2, 0)", "(6, 0)"], a: 1, e: "3x = 6." },
    { q: "Si la temperatura sube de 6 h a 15 h, en ese intervalo la función es…", o: ["creciente", "decreciente", "constante", "discontinua"], a: 0, e: "Sube." },
    { q: "Un tramo horizontal en distancia-tiempo de 20 a 35 min significa…", o: ["15 min parado", "15 km recorridos", "vuelta a casa", "velocidad máxima"], a: 0, e: "La distancia no cambia." },
    { q: "Un coche recorre 120 km en 1,5 h. Su velocidad media es…", o: ["60 km/h", "80 km/h", "90 km/h", "180 km/h"], a: 1, e: "120 : 1,5." },
  ],
  feynman: ["Cómo se sitúa un punto en el plano con sus coordenadas", "Qué es una función y por qué la edad y la estatura de una clase no lo es", "Qué indica la pendiente de una recta y = mx", "Cómo se lee una gráfica de distancia y tiempo"],
  figura: {
    titulo: "Funciones y gráficas en un vistazo",
    svg: resumen("Resumen del tema de funciones y gráficas", [
      ["Plano", "P(x, y) · 4 cuadrantes: I (+, +) II (−, +) III (−, −) IV (+, −)", "var(--pen)"],
      ["Función", "a cada x un único y · enunciado, tabla, gráfica, fórmula", "var(--leaf)"],
      ["y = m · x", "recta por (0, 0) · m > 0 sube · m < 0 baja", "var(--sun)"],
      ["Estudio", "crece, decrece, máximo, mínimo, continua o no", "var(--inf)"],
      ["Leer", "ejes y unidades → tramos → puntos clave → historia", "var(--red)"],
    ]),
  },
  video: vg("funV"),
  mapa: mapa("FUNCIONES", "var(--pen)", [
    ["Plano cartesiano", "ejes · coordenadas · cuadrantes", "var(--pen)"],
    ["Función", "variables · tabla · fórmula", "var(--leaf)"],
    ["Rectas", "y = mx · pendiente", "var(--sun)"],
    ["Interpretar", "crecer · máximos · engaños", "var(--red)"],
  ], 250),
  glosario: [
    ["Plano cartesiano", "Plano con dos ejes perpendiculares para situar puntos."],
    ["Origen", "Punto de corte de los ejes, (0, 0)."],
    ["Abscisa", "Primera coordenada de un punto (eje X)."],
    ["Ordenada", "Segunda coordenada de un punto (eje Y)."],
    ["Cuadrante", "Cada una de las cuatro regiones en que los ejes dividen el plano."],
    ["Función", "Relación que asigna a cada valor de x un único valor de y."],
    ["Variable independiente", "La que se elige libremente (x)."],
    ["Variable dependiente", "La que depende de la otra (y)."],
    ["Tabla de valores", "Lista de pares (x, y) de una función."],
    ["Pendiente", "Número m de y = mx; indica la inclinación de la recta."],
    ["Función creciente", "Al aumentar x, aumenta y."],
    ["Máximo", "Punto donde la función pasa de crecer a decrecer."],
    ["Mínimo", "Punto donde la función pasa de decrecer a crecer."],
    ["Función continua", "Se dibuja sin levantar el lápiz."],
  ],
  situacion: {
    titulo: "La gráfica de mi día",
    reto: "Cada grupo va a registrar datos reales de una magnitud que cambie a lo largo del tiempo, representarla en una gráfica e interpretarla como si fuera una noticia.",
    pasos: [
      "Elegid una magnitud: temperatura del patio cada hora, distancia recorrida en un trayecto, batería del móvil, número de personas en el comedor…",
      "Tomad las medidas y organizadlas en una tabla con unidades.",
      "Representadlas en unos ejes con una escala adecuada (en papel o en una hoja de cálculo).",
      "Analizad crecimiento, máximos, mínimos y continuidad, y escribid qué historia cuenta la gráfica.",
      "Haced una versión «engañosa» de vuestra gráfica (cambiando la escala) y explicad el engaño.",
    ],
    producto: "Un póster con la tabla, la gráfica correcta, la engañosa y un texto tipo noticia.",
    evaluacion: ["Construye la tabla y la gráfica con escalas y unidades correctas.", "Interpreta crecimiento, máximos y mínimos en el contexto.", "Detecta y explica cómo una gráfica puede engañar.", "Comunica las conclusiones con claridad."],
  },
  tarjetas: [
    ["P(x, y)", "Primero horizontal, luego vertical"], ["Cuadrante II", "x negativa, y positiva"], ["Cuadrante IV", "x positiva, y negativa"],
    ["Función", "Cada x tiene un único y"], ["Variable independiente", "x, se elige"], ["4 formas", "Enunciado, tabla, gráfica, fórmula"],
    ["y = mx", "Recta por el origen"], ["m > 0", "La recta sube"], ["Máximo", "Pasa de crecer a decrecer"],
    ["Continua", "Sin levantar el lápiz"], ["Tramo horizontal (d-t)", "Parado"], ["Gráfica engañosa", "Eje que no empieza en 0"],
  ],
  familias: ["Buscad gráficas en periódicos o webs y comentad juntos qué cuentan y si podrían engañar.", "Anotad la temperatura de casa o del balcón varias veces al día y dibujad la gráfica.", "Jugad a los barcos (hundir la flota) con coordenadas positivas y negativas.", "Dibujad la gráfica de distancia y tiempo de un trayecto familiar."],
  profesores: {
    saberes: "Sentido algebraico y estocástico: coordenadas cartesianas, concepto de función, formas de representación, funciones lineales de proporcionalidad directa, interpretación de gráficas (crecimiento, extremos, continuidad) y análisis crítico de gráficas en medios (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Juego de los barcos en los cuatro cuadrantes.", "Sensores de distancia o apps del móvil para generar gráficas distancia-tiempo caminando.", "Colección de gráficas engañosas de prensa para analizar.", "GeoGebra o hoja de cálculo para comparar pendientes."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): funciones y gráficas", url: "https://proyectodescartes.org/" }, { t: "GeoGebra: calculadora gráfica", url: "https://www.geogebra.org/" }],
  revisado: REV,
};
