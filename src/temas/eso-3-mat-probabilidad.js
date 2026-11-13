// Matemáticas 3º ESO · Probabilidad. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { mapa, tabla, tx, lienzo, pasos, cajas, formula, comparar, arbol, resumen, rot, linea, C, RD, DECRET } = require("./_eso3L1");

const lin = (items, fs = 12) => items.map(([x, y, t, c]) => tx(x, y, t, { fs, c: c || "var(--ink)", max: 236 })).join("");

const tipos = comparar("Experimentos deterministas frente a experimentos aleatorios", [
  ["Determinista", ["se sabe el", "resultado", "hervir agua", "a 100 °C"], "var(--pen)"],
  ["Aleatorio", ["no se puede", "predecir", "lanzar un dado", "sacar una carta"], "var(--red)"],
], "¿Se puede predecir?");

const espacio = (() => {
  const caras = [1, 2, 3, 4, 5, 6].map((n, i) => {
    const x = 18 + i * 39, par = n % 2 === 0;
    return `<rect x="${x}" y="58" width="32" height="32" rx="7" fill="${par ? "var(--pen)" : "var(--card)"}" fill-opacity="${par ? 0.25 : 1}" stroke="${par ? "var(--pen)" : "var(--muted)"}" stroke-width="2"/>` + tx(x + 16, 80, n, { fs: 15, c: "var(--ink)" });
  }).join("");
  return lienzo("Espacio muestral de lanzar un dado y el suceso A, sacar par", caras + lin([[130, 34, "E = {1, 2, 3, 4, 5, 6}", "var(--ink)"], [130, 122, "A = «sacar par» = {2, 4, 6}", "var(--pen)"], [130, 144, "Suceso elemental: {5}", "var(--muted)"], [130, 164, "Suceso seguro: E · imposible: ∅", "var(--muted)"]], 13), 176);
})();

const venn = lienzo("Diagrama de Venn al lanzar un dado: A sacar par y B sacar más de tres; su intersección es cuatro y seis", `<defs><clipPath id="vennA"><circle cx="100" cy="94" r="50"/></clipPath></defs><rect x="14" y="32" width="232" height="128" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="1.6"/>` + `<circle cx="100" cy="94" r="50" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2.2"/><circle cx="160" cy="94" r="50" fill="var(--red)" fill-opacity=".14" stroke="var(--red)" stroke-width="2.2"/><circle cx="160" cy="94" r="50" fill="var(--leaf)" fill-opacity=".35" clip-path="url(#vennA)"/>` + rot([[22, 50, "E", "var(--muted)", "start"], [72, 56, "A", "var(--pen)"], [190, 56, "B", "var(--red)"], [80, 99, "2", "var(--ink)"], [130, 88, "4", "var(--ink)"], [130, 110, "6", "var(--ink)"], [182, 99, "5", "var(--ink)"], [32, 146, "1", "var(--ink)"], [228, 146, "3", "var(--ink)"]], 13) + lin([[130, 22, "A ∩ B = {4, 6} · A ∪ B = {2, 4, 5, 6}", "var(--leaf)"]], 12.5), 170);

const compatibles = lienzo("Sucesos compatibles, que pueden ocurrir a la vez, e incompatibles, que no tienen resultados comunes", `<circle cx="52" cy="84" r="30" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><circle cx="82" cy="84" r="30" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/><circle cx="168" cy="84" r="28" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><circle cx="226" cy="84" r="28" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/>` + linea(130, 30, 130, 150, "var(--line)") + rot([[67, 30, "Compatibles", "var(--leaf)"], [67, 136, "A ∩ B ≠ ∅", "var(--ink)"], [67, 154, "par y > 3", "var(--muted)"], [197, 30, "Incompatibles", "var(--red)"], [197, 136, "A ∩ B = ∅", "var(--ink)"], [197, 154, "par e impar", "var(--muted)"]], 12), 166);

const escala = (() => {
  const X = (p) => 22 + p * 216;
  const ej = [[0, "7 en un dado", 36], [1 / 6, "sacar un 6", 60], [0.5, "cara", 36], [5 / 6, "no sacar 6", 60], [1, "dado < 7", 36]];
  return lienzo("Escala de probabilidad de cero, suceso imposible, a uno, suceso seguro, con ejemplos", `<defs><linearGradient id="gprob" x1="0" x2="1"><stop offset="0" stop-color="var(--red)"/><stop offset="1" stop-color="var(--leaf)"/></linearGradient></defs><rect x="${X(0)}" y="96" width="216" height="10" rx="5" fill="url(#gprob)"/>` + [0, 0.5, 1].map((p) => tx(X(p), 126, p === 0.5 ? "0,5" : p, { fs: 12, c: "var(--ink)" })).join("") + ej.map(([p, t, y]) => linea(X(p), y + 6, X(p), 94, "var(--muted)", { disc: true, w: 1.2 }) + `<circle cx="${X(p).toFixed(1)}" cy="101" r="5" fill="var(--ink)"/>` + tx(Math.min(Math.max(X(p), 44), 216), y, t, { fs: 10.5, max: 84 })).join("") + rot([[14, 146, "imposible", "var(--red)", "start"], [X(0.5), 146, "igual de probable", "var(--muted)"], [246, 146, "seguro", "var(--leaf)", "end"]], 11), 160);
})();

const frecuencias = (() => {
  const ns = [10, 20, 50, 100, 200, 500, 1000], fr = [0.7, 0.6, 0.44, 0.53, 0.485, 0.508, 0.497];
  const X = (i) => 34 + i * 34, Y = (f) => 150 - (f - 0.3) * 250;
  return lienzo("Ley de los grandes números: la frecuencia relativa de cara se acerca a cero coma cinco al aumentar los lanzamientos", `<path d="M28 150 H250 M28 150 V30" stroke="var(--muted)" stroke-width="1.4"/>` + linea(28, Y(0.5), 250, Y(0.5), "var(--leaf)", { disc: true, w: 1.8 }) + `<polyline points="${fr.map((f, i) => `${X(i)},${Y(f).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.2"/>` + fr.map((f, i) => `<circle cx="${X(i)}" cy="${Y(f).toFixed(1)}" r="3.5" fill="var(--red)"/>` + tx(X(i), 166, ns[i], { fs: 9.5, w: 500, c: "var(--muted)" })).join("") + rot([[22, Y(0.5) + 4, "0,5", "var(--leaf)", "end"], [22, Y(0.7) + 4, "0,7", "var(--muted)", "end"], [130, 22, "Frecuencia relativa de cara", "var(--muted)"], [244, 178, "n.º de lanzamientos", "var(--muted)", "end"]], 11), 186);
})();

const laplace = formula("Regla de Laplace para sucesos equiprobables", "P(A) = casos favorables / casos posibles", ["Sacar par con un dado:", "P = 3 / 6 = 1/2", "Solo si todos los resultados son igual de probables"]);

const propiedades = cajas("Propiedades básicas de la probabilidad", [
  ["0 ≤ P(A) ≤ 1", ["siempre"], "var(--pen)"], ["Contrario", ["P(A') = 1 − P(A)"], "var(--red)"],
  ["Incompatibles", ["P(A∪B) = P(A) + P(B)"], "var(--leaf)"], ["En general", ["P(A∪B) = P(A) + P(B)", "− P(A∩B)"], "var(--inf)"],
], "Propiedades");

const dosDados = (() => {
  let g = "";
  for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) {
    const x = 46 + (j - 1) * 30, y = 30 + (i - 1) * 22, s = i + j;
    g += `<rect x="${x}" y="${y}" width="28" height="20" rx="4" fill="${s === 7 ? "var(--red)" : "var(--card)"}" fill-opacity="${s === 7 ? 0.3 : 1}" stroke="var(--line)" stroke-width="1"/>` + tx(x + 14, y + 14, s, { fs: 11, w: s === 7 ? 800 : 500 });
  }
  g += [1, 2, 3, 4, 5, 6].map((n) => tx(60 + (n - 1) * 30, 24, n, { fs: 11, c: "var(--pen)" }) + tx(36, 44 + (n - 1) * 22, n, { fs: 11, c: "var(--leaf)" })).join("");
  return lienzo("Tabla de las treinta y seis sumas al lanzar dos dados; la suma siete aparece seis veces", g + lin([[130, 180, "P(suma 7) = 6/36 = 1/6", "var(--red)"]], 13), 192);
})();

const multiplicacion = cajas("Principio de multiplicación para contar los resultados de experimentos compuestos", [
  ["Moneda y dado", ["2 · 6 = 12"], "var(--pen)"], ["Tres monedas", ["2 · 2 · 2 = 8"], "var(--red)"],
  ["Dos dados", ["6 · 6 = 36"], "var(--leaf)"], ["Menú 3·4·2", ["24 menús"], "var(--inf)"],
], "Contar resultados");

const monedas = arbol("Diagrama de árbol de lanzar dos monedas: cuatro resultados igual de probables", [
  ["Cara", "1/2", [["C C", "1/2", "1/4"], ["C X", "1/2", "1/4"]]],
  ["Cruz", "1/2", [["X C", "1/2", "1/4"], ["X X", "1/2", "1/4"]]],
]);

const urna = arbol("Diagrama de árbol de dos extracciones sin reemplazamiento de una urna con tres bolas rojas y dos azules", [
  ["Roja", "3/5", [["R R", "2/4", "6/20"], ["R A", "2/4", "6/20"]]],
  ["Azul", "2/5", [["A R", "3/4", "6/20"], ["A A", "1/4", "2/20"]]],
]);

const contingencia = (() => {
  const filas = [["", "Deporte", "No", "Total"], ["Chicas", "30", "20", "50"], ["Chicos", "35", "15", "50"], ["Total", "65", "35", "100"]];
  const xs = [42, 112, 166, 220];
  return lienzo("Tabla de contingencia de cien alumnos según sexo y si hacen deporte", filas.map((f, i) => f.map((v, j) => (i && j ? `<rect x="${xs[j] - 24}" y="${30 + i * 28 - 18}" width="48" height="24" rx="5" fill="${i === 1 && j === 1 ? "var(--leaf)" : "var(--card)"}" fill-opacity="${i === 1 && j === 1 ? 0.3 : 1}" stroke="var(--line)"/>` : "") + tx(xs[j], 30 + i * 28, v, { fs: 12, w: i === 0 || j === 0 || i === 3 || j === 3 ? 700 : 500, c: i === 0 || j === 0 ? "var(--muted)" : "var(--ink)" })).join("")).join("") + lin([[130, 160, "P(chica y deporte) = 30/100 = 0,3", "var(--leaf)"], [130, 180, "P(deporte, si es chica) = 30/50 = 0,6", "var(--pen)"]], 12), 192);
})();

const vida = pasos("Ideas clave para usar la probabilidad en la vida real", ["El azar no tiene memoria", "Más intentos no garantizan ganar", "Juego justo: ganancia esperada 0", "Las loterías pagan menos de lo que cobran", "Datos pequeños engañan: repite el experimento"], "Probabilidad cotidiana");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Probabilidad",
  minutos: 110,
  objetivos: [
    "Distinguir experimentos aleatorios y deterministas y describir su espacio muestral",
    "Operar con sucesos: unión, intersección y contrario, con diagramas de Venn",
    "Calcular probabilidades con la regla de Laplace, con frecuencias relativas y con sus propiedades",
    "Resolver experimentos compuestos con diagramas de árbol y tablas de contingencia",
    "Aplicar la probabilidad a juegos y decisiones, detectando falacias frecuentes",
  ],
  claves: ["experimento aleatorio", "espacio muestral", "suceso", "regla de Laplace", "frecuencia relativa", "diagrama de árbol", "tabla de contingencia"],
  pregunta: {
    texto: "Lanzas una moneda cinco veces y sale cara las cinco. ¿Es más probable que la sexta sea cruz?",
    respuesta: "No. La moneda <mark>no tiene memoria</mark>: la probabilidad de cruz sigue siendo 1/2. Creer lo contrario se llama la «falacia del jugador» y hace perder mucho dinero en los casinos. La probabilidad nos ayuda a medir la incertidumbre sin dejarnos engañar por la intuición.",
  },
  lectura: {
    titulo: "Una partida interrumpida",
    html: `<p>En 1654, un escritor francés aficionado al juego, el caballero de Méré, planteó un problema a su amigo Blaise Pascal: dos jugadores apuestan el mismo dinero a ver quién gana primero tres partidas, pero el juego se interrumpe cuando uno lleva dos victorias y el otro una. ¿Cómo repartir el dinero de forma justa?</p><p>Pascal escribió a otro gran matemático, Pierre de Fermat, y entre los dos, carta va y carta viene, encontraron la respuesta. No había que fijarse en lo que ya había pasado, sino en lo que <i>podría</i> pasar: contar todas las formas posibles de terminar la partida y ver en cuántas ganaría cada uno. El que iba ganando debía llevarse las tres cuartas partes del dinero.</p><p>Aquellas cartas se consideran el nacimiento de la teoría de la probabilidad. Lo que empezó como una pregunta sobre apuestas es hoy una herramienta imprescindible: los meteorólogos dicen que hay un 70 % de probabilidad de lluvia, las aseguradoras calculan precios, los médicos valoran tratamientos y los ingenieros estiman riesgos. En este tema aprenderás a medir la incertidumbre con números.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Experimentos aleatorios</h3><p>Un experimento es <b>determinista</b> cuando, repetido en las mismas condiciones, da siempre el mismo resultado y se puede predecir: si sueltas una piedra, cae; si calientas agua a nivel del mar, hierve a 100 °C.</p><p>Un experimento es <b>aleatorio</b> cuando se conocen todos los resultados posibles, pero no se puede predecir cuál saldrá en cada realización, aunque se repita en las mismas condiciones: lanzar un dado o una moneda, sacar una carta de una baraja, girar una ruleta o elegir al azar a un alumno de la clase.</p><p>La palabra «azar» viene del árabe <i>az-zahr</i>, que significa «el dado». La parte de las matemáticas que estudia los experimentos aleatorios es la <b>probabilidad</b>.</p><p>Muchos fenómenos de la vida real se comportan como aleatorios aunque en el fondo no lo sean del todo: el tiempo que hará mañana, el resultado de un partido o el número de clientes que entrarán en una tienda. Hay demasiados factores para predecirlos con exactitud, y la probabilidad permite al menos medir qué es más o menos esperable.</p>`, svg: tipos },
    { html: `<h3>1.2 Espacio muestral y sucesos</h3><p>El <b>espacio muestral</b> E es el conjunto de <b>todos los resultados posibles</b> de un experimento aleatorio. Al lanzar un dado, E = {1, 2, 3, 4, 5, 6}; al lanzar una moneda, E = {C, X}.</p><p>Un <b>suceso</b> es cualquier subconjunto del espacio muestral, normalmente descrito con palabras. Por ejemplo, A = «sacar par» = {2, 4, 6}. Se dice que un suceso <b>ocurre</b> si el resultado del experimento es uno de sus elementos: si sale un 4, ha ocurrido A.</p><ul><li><b>Suceso elemental</b>: tiene un solo resultado, como {5}.</li><li><b>Suceso compuesto</b>: tiene varios, como «sacar más de 4» = {5, 6}.</li><li><b>Suceso seguro</b>: el propio E; ocurre siempre.</li><li><b>Suceso imposible</b>: ∅, el conjunto vacío; no ocurre nunca («sacar un 7»).</li></ul><p>Escribir bien el espacio muestral es el primer paso para resolver cualquier problema. En experimentos con varias etapas, como lanzar dos monedas, conviene ser ordenados: E = {CC, CX, XC, XX}. Ojo: CX y XC son resultados distintos.</p>`, svg: espacio },
    { html: `<h3>1.3 Operaciones con sucesos</h3><p>Con los sucesos se puede operar como con conjuntos. Lo más claro es representarlos con un <b>diagrama de Venn</b>: un rectángulo para E y círculos para los sucesos. Con un dado, A = «par» = {2, 4, 6} y B = «mayor que 3» = {4, 5, 6}:</p><ul><li><b>Unión</b> A ∪ B: ocurre si ocurre A <b>o</b> B (o los dos). A ∪ B = {2, 4, 5, 6}.</li><li><b>Intersección</b> A ∩ B: ocurre si ocurren A <b>y</b> B a la vez. A ∩ B = {4, 6}.</li><li><b>Contrario</b> A' (o Ā): ocurre cuando <b>no</b> ocurre A. A' = {1, 3, 5}.</li><li><b>Diferencia</b> A − B: ocurre A pero no B. A − B = {2}.</li></ul><p>El contrario cumple que A y A' juntos forman todo E y no tienen elementos comunes. Por eso, en lugar de contar lo que se pide, a veces es más fácil contar lo contrario: «sacar al menos un 6 en dos dados» es lo contrario de «no sacar ningún 6».</p>`, svg: venn },
    { html: `<h3>1.4 Sucesos compatibles e incompatibles</h3><p>Dos sucesos son <b>compatibles</b> si pueden ocurrir a la vez, es decir, si tienen algún resultado en común: A ∩ B ≠ ∅. «Sacar par» y «sacar más de 3» son compatibles, porque si sale 4 o 6 ocurren los dos.</p><p>Dos sucesos son <b>incompatibles</b> si no pueden ocurrir a la vez: A ∩ B = ∅. «Sacar par» y «sacar impar» son incompatibles. También lo son «sacar un 1» y «sacar más de 4». En un diagrama de Venn, los círculos de dos sucesos incompatibles no se tocan.</p><p>Un suceso y su contrario son siempre incompatibles, pero no al revés: «sacar un 1» y «sacar un 2» son incompatibles y, sin embargo, no son contrarios, porque puede salir un 3 y no ocurrir ninguno.</p><p>Distinguir entre compatibles e incompatibles es importante para sumar probabilidades. Si son incompatibles, la probabilidad de la unión es la suma; si son compatibles, hay que restar la intersección para no contarla dos veces.</p>`, svg: compatibles },
    { html: `<h3>2.1 La probabilidad: una medida entre 0 y 1</h3><p>La <b>probabilidad</b> de un suceso es un número que mide lo esperable que es que ocurra. Siempre está entre 0 y 1:</p><ul><li>P = 0: suceso <b>imposible</b>.</li><li>P = 1: suceso <b>seguro</b>.</li><li>P = 0,5: tan probable que ocurra como que no.</li></ul><p>Se puede expresar como fracción, decimal o porcentaje: 1/4 = 0,25 = 25 %. Cuando el parte meteorológico anuncia «70 % de probabilidad de lluvia», significa que, en días con condiciones parecidas, llovió aproximadamente en 7 de cada 10.</p><p>Hay dos formas principales de asignar probabilidades: a priori, razonando sobre la simetría del experimento (una moneda equilibrada tiene dos caras iguales, así que cada una tiene probabilidad 1/2), y a posteriori, repitiendo el experimento muchas veces y observando con qué frecuencia ocurre (es lo que se hace con una chincheta, que no es simétrica). Las dos ideas se estudian en los apartados siguientes.</p>`, svg: escala },
    { html: `<h3>2.2 Frecuencia relativa y ley de los grandes números</h3><p>Si se repite un experimento n veces y el suceso A ocurre f veces, la <b>frecuencia relativa</b> de A es <mark>f / n</mark>. Lanzando una moneda 10 veces pueden salir 7 caras (0,7); con 20 lanzamientos, 12 (0,6). Al principio la frecuencia relativa oscila mucho.</p><p>Pero al aumentar el número de repeticiones, la frecuencia relativa tiende a estabilizarse alrededor de un valor fijo, que es la probabilidad del suceso. Esta es la <b>ley de los grandes números</b>. En el siglo XVIII, el naturalista Buffon lanzó una moneda 4.040 veces y obtuvo 2.048 caras, una frecuencia de 0,507.</p><p>Esto permite <b>estimar</b> probabilidades cuando no se pueden calcular por razonamiento: la probabilidad de que una chincheta caiga con la punta hacia arriba, de que nazca un niño o una niña (la de niño es algo mayor, 0,51), o de que un jugador marque un penalti. Las aseguradoras calculan así el riesgo de accidente.</p><p>Ojo: la ley no dice que «se compensen» los resultados. Tras muchas caras seguidas, la moneda no tiende a sacar cruces.</p>`, svg: frecuencias, video: { id: "29z2G6OUa68", titulo: "Ley de los grandes números", canal: "Nico Melgarejo", vistas: 59283, megusta: 0 } },
    { html: `<h3>2.3 La regla de Laplace</h3><p>Cuando todos los resultados de un experimento son <b>equiprobables</b> (tienen la misma probabilidad), la probabilidad de un suceso se calcula con la <b>regla de Laplace</b>:</p><p class="formula"><span>P(A) = nº de casos favorables / nº de casos posibles</span></p><p>Ejemplos:</p><ul><li>Sacar un número primo con un dado: favorables {2, 3, 5}, P = 3/6 = 1/2.</li><li>Sacar una figura (sota, caballo, rey) de una baraja española de 40 cartas: P = 12/40 = 3/10.</li><li>Elegir al azar una vocal de la palabra MURCIÉLAGO: tiene las cinco vocales entre sus 10 letras, P = 5/10 = 1/2.</li></ul><p>La condición de equiprobabilidad es imprescindible. No se puede decir que la probabilidad de que mañana llueva es 1/2 porque «puede llover o no»: los dos resultados no son igual de probables. Tampoco sirve para un dado trucado ni para una chincheta. En esos casos hay que usar frecuencias relativas.</p>`, svg: laplace, video: { id: "52dHFBQCgnk", titulo: "Regla de LAPLACE 🎲 Explicada con EJEMPLOS", canal: "Archimedes Tube", vistas: 188855, megusta: 0 } },
    { html: `<h3>2.4 Propiedades de la probabilidad</h3><p>Las probabilidades cumplen unas propiedades que permiten calcular unas a partir de otras:</p><ul><li><b>Suceso contrario</b>: <mark>P(A') = 1 − P(A)</mark>. Si la probabilidad de sacar un 6 es 1/6, la de no sacarlo es 5/6.</li><li><b>Sucesos incompatibles</b>: P(A ∪ B) = P(A) + P(B). Sacar un 1 o un 2: 1/6 + 1/6 = 1/3.</li><li><b>Sucesos compatibles</b>: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Sacar par o más de 3: 3/6 + 3/6 − 2/6 = 4/6 = 2/3. Se resta la intersección porque {4, 6} se había contado dos veces.</li><li>La suma de las probabilidades de todos los sucesos elementales es 1.</li></ul><p>Ejemplo con baraja española: P(oro o figura) = 10/40 + 12/40 − 3/40 = 19/40, porque hay 3 figuras de oros.</p><p>La propiedad del contrario es especialmente útil para preguntas con «al menos»: la probabilidad de que al menos una de tres bombillas funcione es 1 menos la probabilidad de que fallen las tres.</p>`, svg: propiedades },
    { html: `<h3>2.5 ¿Son de verdad equiprobables? La suma de dos dados</h3><p>Al lanzar dos dados y sumar los puntos, los resultados posibles son 2, 3, …, 12: once sumas. Pero sería un error decir que cada suma tiene probabilidad 1/11, porque <b>no son equiprobables</b>.</p><p>Los resultados equiprobables son las <b>parejas</b> (dado 1, dado 2): hay 6 · 6 = 36. La suma 2 solo se obtiene con (1, 1), mientras que la suma 7 se obtiene con seis parejas: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2) y (6, 1). Por eso:</p><p class="formula"><span>P(suma 2) = 1/36 &nbsp;&nbsp; P(suma 7) = 6/36 = 1/6</span></p><p>El 7 es la suma más probable, algo que saben bien los jugadores de muchos juegos de mesa. Este ejemplo enseña una regla importante: para aplicar Laplace hay que describir el espacio muestral con resultados que sean realmente equiprobables, aunque eso suponga distinguir objetos que parecen iguales, como dos dados del mismo color.</p>`, svg: dosDados },
    { html: `<h3>3.1 Experimentos compuestos</h3><p>Un <b>experimento compuesto</b> está formado por varios experimentos simples: lanzar dos monedas, lanzar un dado y una moneda, sacar dos cartas… Para contar los resultados se usa el <b>principio de multiplicación</b>: si la primera etapa tiene m resultados y la segunda n, el experimento tiene m · n resultados.</p><p>Lanzar una moneda y un dado da 2 · 6 = 12 resultados; lanzar tres monedas, 2 · 2 · 2 = 8. Un menú con 3 primeros, 4 segundos y 2 postres permite 24 combinaciones distintas.</p><p>Dos experimentos son <b>independientes</b> si el resultado del primero no influye en el segundo, como dos lanzamientos de moneda. Entonces, la probabilidad de que ocurran dos sucesos seguidos es el <b>producto</b>:</p><p class="formula"><span>P(A y B) = P(A) · P(B)</span></p><p>P(dos caras) = 1/2 · 1/2 = 1/4. P(cara y un 6) = 1/2 · 1/6 = 1/12. P(tres seises seguidos) = (1/6)³ = 1/216. Por eso las rachas largas son poco probables, aunque cada lanzamiento siga siendo independiente.</p>`, svg: multiplicacion },
    { html: `<h3>3.2 Diagramas de árbol</h3><p>Un <b>diagrama de árbol</b> organiza un experimento compuesto: cada etapa es un nivel de ramas, y en cada rama se escribe su probabilidad. Cada camino desde la raíz hasta una hoja es un resultado del experimento.</p><p>Reglas del árbol:</p><ul><li>La probabilidad de un camino es el <b>producto</b> de las probabilidades de sus ramas.</li><li>La probabilidad de un suceso formado por varios caminos es la <b>suma</b> de las probabilidades de esos caminos.</li><li>Las ramas que salen de un mismo punto suman 1.</li></ul><p>Con dos monedas: P(exactamente una cara) = P(CX) + P(XC) = 1/4 + 1/4 = 1/2. P(al menos una cara) = 1 − P(XX) = 3/4.</p><p>El árbol es muy útil cuando las probabilidades no son todas iguales. Un jugador de baloncesto encesta el 80 % de sus tiros libres. En dos tiros: P(los dos) = 0,8 · 0,8 = 0,64; P(ninguno) = 0,2 · 0,2 = 0,04; P(exactamente uno) = 0,8 · 0,2 + 0,2 · 0,8 = 0,32. Comprobación: 0,64 + 0,04 + 0,32 = 1.</p>`, svg: monedas, video: { id: "293TIDEiC_w", titulo: "Probabilidad 3 4 ESO 07 diagrama de árbol urna", canal: "profesor10demates", vistas: 229443, megusta: 0 } },
    { html: `<h3>3.3 Extracciones con y sin reemplazamiento</h3><p>Una urna tiene 3 bolas rojas y 2 azules. Se sacan dos bolas. Hay dos situaciones distintas:</p><ul><li><b>Con reemplazamiento</b>: se devuelve la primera bola antes de sacar la segunda. Las extracciones son independientes y las probabilidades no cambian: P(dos rojas) = 3/5 · 3/5 = 9/25 = 0,36.</li><li><b>Sin reemplazamiento</b>: no se devuelve. La composición de la urna cambia y la segunda extracción <b>depende</b> de la primera. Si la primera fue roja, quedan 2 rojas y 2 azules: P(dos rojas) = 3/5 · 2/4 = 6/20 = 0,3.</li></ul><p>En el árbol sin reemplazamiento se ve que las probabilidades de la segunda etapa son <b>condicionadas</b>: dependen de lo que salió antes. P(una de cada color) = P(RA) + P(AR) = 6/20 + 6/20 = 12/20 = 0,6.</p><p>Muchas situaciones reales son sin reemplazamiento: repartir cartas, elegir a dos delegados de clase, sacar números de un bombo o hacer un control de calidad de piezas sin devolverlas al lote.</p>`, svg: urna },
    { html: `<h3>3.4 Tablas de contingencia</h3><p>Cuando se estudian dos características a la vez, los datos se pueden organizar en una <b>tabla de contingencia</b> (o de doble entrada). Por ejemplo, 100 alumnos clasificados por sexo y por si hacen deporte:</p>${tabla(["", "Deporte", "No deporte", "Total"], [["Chicas", "30", "20", "50"], ["Chicos", "35", "15", "50"], ["Total", "65", "35", "100"]])}<p>Eligiendo un alumno al azar:</p><ul><li>P(hace deporte) = 65/100 = 0,65.</li><li>P(chica y hace deporte) = 30/100 = 0,3 (una casilla interior).</li><li>P(chica o hace deporte) = 50/100 + 65/100 − 30/100 = 0,85.</li><li>P(hace deporte <b>sabiendo que</b> es chica) = 30/50 = 0,6: solo se mira la fila de las chicas. Es una <b>probabilidad condicionada</b>.</li></ul><p>Las tablas de contingencia se usan en medicina (enfermos y sanos frente a test positivo o negativo), en encuestas y en estudios de mercado. Es fácil confundir «P(A y B)» con «P(A sabiendo B)»: la diferencia está en qué se pone en el denominador.</p>`, svg: contingencia, video: { id: "akdxdG_hZi8", titulo: "Probabilidad y Tablas de contingencia", canal: "Mate Rapido", vistas: 57973, megusta: 0 } },
    { html: `<h3>3.5 La probabilidad en la vida real</h3><p>Pensar en términos de probabilidad ayuda a tomar mejores decisiones y a no dejarse engañar:</p><ul><li><b>Falacia del jugador</b>: creer que, tras muchas caras, «toca» cruz. Cada lanzamiento es independiente.</li><li><b>Juegos justos</b>: un juego es justo si lo que se espera ganar compensa exactamente lo que se apuesta. Si pagas 1 € por lanzar un dado y ganas 5 € si sale un 6, de media ganas 5 · 1/6 ≈ 0,83 € por cada euro apostado: pierdes dinero a la larga.</li><li><b>Loterías</b>: en la lotería primitiva, la probabilidad de acertar 6 números de 49 es de 1 entre casi 14 millones. Los premios repartidos son siempre menores que lo recaudado.</li><li><b>Riesgos</b>: las personas sobreestiman los riesgos raros y llamativos (un accidente de avión) e infravaloran los frecuentes (un accidente de coche).</li></ul><p>La probabilidad también permite valorar si algo es casualidad: en una clase de 30, ¡es más probable que no que dos personas cumplan años el mismo día! (la probabilidad es de un 70 %).</p>`, svg: vida },
  ],
  ejemplos: [
    { enunciado: "Se lanza un dado. Halla P(múltiplo de 3) y P(no múltiplo de 3).", pasos: ["Favorables {3, 6}: 2 de 6.", "Contrario: 1 − 1/3."], resultado: "1/3 y 2/3." },
    { enunciado: "De una baraja española (40 cartas) se saca una carta. P(as o copa).", pasos: ["P(as) = 4/40; P(copa) = 10/40; P(as de copas) = 1/40.", "4/40 + 10/40 − 1/40."], resultado: "13/40." },
    { enunciado: "Se lanzan dos dados. P(suma 10).", pasos: ["Casos: (4, 6), (5, 5), (6, 4).", "3/36."], resultado: "1/12." },
    { enunciado: "Se lanzan tres monedas. P(al menos una cara).", pasos: ["P(ninguna cara) = (1/2)³ = 1/8.", "1 − 1/8."], resultado: "7/8." },
    { enunciado: "Una urna tiene 4 bolas blancas y 6 negras. Se sacan dos sin reemplazamiento. P(dos blancas).", pasos: ["4/10 · 3/9 = 12/90."], resultado: "2/15 ≈ 0,13." },
    { enunciado: "En un tiro a canasta, Ana acierta con probabilidad 0,7. Tira dos veces. P(acierta exactamente una).", pasos: ["0,7 · 0,3 + 0,3 · 0,7 = 0,21 + 0,21."], resultado: "0,42." },
  ],
  errores: [
    "Aplicar la regla de Laplace cuando los resultados no son equiprobables.",
    "Sumar probabilidades de sucesos compatibles sin restar la intersección.",
    "Pensar que tras una racha el resultado contrario es más probable (falacia del jugador).",
    "Olvidar que sin reemplazamiento cambian las probabilidades de la segunda extracción.",
    "Contar (C, X) y (X, C) como un solo resultado.",
    "Confundir P(A y B) con P(A sabiendo B) en una tabla de contingencia.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Di si son aleatorios o deterministas: lanzar una moneda, calcular el área de un cuadrado de lado 3, el número premiado en la lotería, la hora a la que sale el sol mañana.", sol: "Aleatorio; determinista; aleatorio; determinista." },
    { nivel: "básico", q: "Escribe el espacio muestral de: lanzar dos monedas; lanzar una moneda y un dado.", sol: "{CC, CX, XC, XX}; {C1, …, C6, X1, …, X6}, 12 resultados." },
    { nivel: "básico", q: "Con un dado, A = «sacar más de 4», B = «sacar impar». Halla A ∪ B, A ∩ B y A'.", sol: "A = {5, 6}, B = {1, 3, 5}. A ∪ B = {1, 3, 5, 6}; A ∩ B = {5}; A' = {1, 2, 3, 4}." },
    { nivel: "básico", q: "¿Son compatibles «sacar un 2» y «sacar par»? ¿Y «sacar un 2» y «sacar más de 3»?", sol: "Compatibles; incompatibles." },
    { nivel: "básico", q: "Se lanza un dado. Halla P(5), P(menor que 3) y P(número primo).", sol: "1/6; 2/6 = 1/3; 3/6 = 1/2." },
    { nivel: "básico", q: "Una bolsa tiene 5 caramelos de fresa, 3 de limón y 2 de menta. Halla la probabilidad de cada sabor al sacar uno.", sol: "1/2; 3/10; 1/5." },
    { nivel: "básico", q: "Si P(A) = 0,35, ¿cuánto vale P(A')?", sol: "0,65." },
    { nivel: "básico", q: "Ordena de menos a más probable: sacar un 7 con un dado, sacar cara, sacar un 6, sacar menos de 7.", sol: "0; 1/6; 1/2; 1." },
    { nivel: "básico", q: "Lanzamos una chincheta 200 veces y cae con la punta hacia arriba 124. Estima la probabilidad.", sol: "124/200 = 0,62." },
    { nivel: "básico", q: "De una baraja española, halla P(sacar un rey) y P(sacar bastos).", sol: "4/40 = 1/10; 10/40 = 1/4." },
    { nivel: "básico", q: "¿Cuántos resultados tiene lanzar tres dados? ¿Y lanzar cuatro monedas?", sol: "216; 16." },
    { nivel: "básico", q: "¿Es correcto decir que P(aprobar) = 1/2 porque «se aprueba o se suspende»? Explica.", sol: "No: los dos resultados no son equiprobables; depende del estudio, la dificultad, etc." },
    { nivel: "medio", q: "Se lanzan dos dados. Halla P(suma 7), P(suma mayor que 9) y P(dobles).", sol: "6/36 = 1/6; (3 + 2 + 1)/36 = 1/6; 6/36 = 1/6." },
    { nivel: "medio", q: "Con un dado: P(par o múltiplo de 3).", sol: "3/6 + 2/6 − 1/6 = 4/6 = 2/3." },
    { nivel: "medio", q: "Dibuja el árbol de lanzar tres monedas y halla P(exactamente dos caras).", sol: "8 caminos; CCX, CXC, XCC: 3/8." },
    { nivel: "medio", q: "Una urna tiene 2 bolas rojas y 3 verdes. Se sacan dos con reemplazamiento. P(dos verdes) y P(distinto color).", sol: "9/25; 2 · (2/5 · 3/5) = 12/25." },
    { nivel: "medio", q: "Repite el ejercicio anterior sin reemplazamiento.", sol: "3/5 · 2/4 = 3/10; 2/5 · 3/4 + 3/5 · 2/4 = 6/20 + 6/20 = 3/5." },
    { nivel: "medio", q: "Un portero para el 30 % de los penaltis. Le tiran dos. P(no para ninguno) y P(para al menos uno).", sol: "0,7² = 0,49; 1 − 0,49 = 0,51." },
    { nivel: "medio", q: "En la tabla de contingencia de 3.4, halla P(chico), P(chico y no hace deporte) y P(no hace deporte sabiendo que es chico).", sol: "0,5; 15/100 = 0,15; 15/50 = 0,3." },
    { nivel: "medio", q: "Un juego consiste en sacar una carta de la baraja española: ganas si sale oro o figura. ¿Qué probabilidad tienes de ganar?", sol: "10/40 + 12/40 − 3/40 = 19/40 = 0,475." },
    { nivel: "medio", q: "Lanzas un dado 600 veces. ¿Cuántas veces esperas que salga un 6, aproximadamente? Si salió 140 veces, ¿sospecharías?", sol: "Unas 100. 140 es bastante más: podría estar trucado; convendría repetir." },
    { nivel: "medio", q: "Con las letras de la palabra PROBABILIDAD, elegida una al azar, halla P(vocal) y P(B).", sol: "12 letras; vocales O, A, I, I, A = 5: 5/12. B aparece 2 veces: 2/12 = 1/6." },
    { nivel: "medio", q: "En un grupo, P(gafas) = 0,4, P(ojos claros) = 0,3 y P(gafas y ojos claros) = 0,1. Halla P(gafas u ojos claros) y P(ni gafas ni ojos claros).", sol: "0,4 + 0,3 − 0,1 = 0,6; 0,4." },
    { nivel: "medio", q: "¿Cuál es la probabilidad de sacar al menos un 6 en dos lanzamientos de un dado?", sol: "1 − (5/6)² = 1 − 25/36 = 11/36 ≈ 0,31." },
    { nivel: "avanzado", q: "Se sacan dos cartas de la baraja española sin reemplazamiento. P(dos ases).", sol: "4/40 · 3/39 = 12/1.560 = 1/130." },
    { nivel: "avanzado", q: "¿Qué es más probable: sacar al menos un 6 en 4 lanzamientos de un dado o al menos un doble 6 en 24 lanzamientos de dos dados? (Problema del caballero de Méré.)", sol: "1 − (5/6)⁴ ≈ 0,518; 1 − (35/36)²⁴ ≈ 0,491. Es más probable el primero." },
    { nivel: "avanzado", q: "En el problema de la partida interrumpida (la lectura), comprueba que el jugador que lleva ventaja debe llevarse 3/4.", sol: "Falta como mucho 2 partidas. El rezagado necesita ganar las dos: (1/2)² = 1/4. El otro gana con 3/4." },
    { nivel: "avanzado", q: "Una prueba médica detecta una enfermedad. En 1.000 personas, 50 están enfermas; la prueba da positivo en 45 enfermos y en 95 sanos. Haz la tabla y halla P(enfermo sabiendo que dio positivo).", sol: "Positivos 140; enfermos entre ellos 45. P = 45/140 ≈ 0,32. ¡Solo un 32 %!" },
    { nivel: "avanzado", q: "Un juego: pagas 2 € y lanzas dos dados; si suman 7 te dan 10 €. ¿Es justo? ¿Cuánto debería pagarse para que lo fuera?", sol: "Ganancia media 10 · 1/6 ≈ 1,67 € < 2 €: no es justo para el jugador. Sería justo pagando 1,67 €." },
    { nivel: "avanzado", q: "Tres amigos juegan a piedra, papel o tijera a la vez. ¿Cuántos resultados hay? ¿Cuál es la probabilidad de que los tres saquen lo mismo?", sol: "27 resultados; 3/27 = 1/9." },
    { nivel: "avanzado", q: "Una urna A tiene 3 bolas blancas y 1 negra; la B, 1 blanca y 3 negras. Se lanza una moneda: cara → urna A, cruz → urna B. P(sacar blanca).", sol: "1/2 · 3/4 + 1/2 · 1/4 = 1/2." },
    { nivel: "avanzado", q: "Simula con una hoja de cálculo (ALEATORIO.ENTRE(1;6)) 500 lanzamientos de dos dados y compara la frecuencia relativa de suma 7 con 1/6.", sol: "Respuesta abierta: la frecuencia debería estar cerca de 0,167." },
    { nivel: "avanzado", q: "En una clase de 25, ¿por qué es probable (≈ 57 %) que dos compartan cumpleaños? Explica la idea usando el suceso contrario.", sol: "P(todos distintos) = 365/365 · 364/365 · … · 341/365 ≈ 0,43; el contrario ≈ 0,57. Hay 300 parejas posibles." },
    { nivel: "avanzado", q: "Un test tiene 5 preguntas de 4 opciones. Si respondes al azar, ¿qué probabilidad tienes de acertar todas? ¿Y de no acertar ninguna?", sol: "(1/4)⁵ = 1/1.024; (3/4)⁵ ≈ 0,237." },
  ],
  quiz: [
    { q: "Lanzar un dado es un experimento…", o: ["determinista", "aleatorio", "seguro", "imposible"], a: 1, e: "No se puede predecir." },
    { q: "El espacio muestral de una moneda es…", o: ["{C}", "{C, X}", "{1, 2}", "{CC, XX}"], a: 1, e: "Todos los resultados." },
    { q: "«Sacar un 8 con un dado» es un suceso…", o: ["seguro", "imposible", "elemental", "compatible"], a: 1, e: "No está en E." },
    { q: "A ∩ B ocurre cuando…", o: ["ocurre A o B", "ocurren A y B", "no ocurre A", "ocurre A pero no B"], a: 1, e: "Intersección." },
    { q: "A ∪ B ocurre cuando…", o: ["ocurren los dos", "ocurre al menos uno", "no ocurre ninguno", "solo ocurre A"], a: 1, e: "Unión." },
    { q: "Dos sucesos son incompatibles si…", o: ["A ∩ B = ∅", "A ∪ B = E", "P(A) = P(B)", "son contrarios siempre"], a: 0, e: "No pueden ocurrir a la vez." },
    { q: "La probabilidad siempre está entre…", o: ["−1 y 1", "0 y 1", "0 y 100", "1 y 6"], a: 1, e: "Escala de 0 a 1." },
    { q: "P(sacar par con un dado):", o: ["1/6", "1/3", "1/2", "2/3"], a: 2, e: "3/6." },
    { q: "Si P(A) = 0,2, P(A') =", o: ["0,2", "0,8", "1,2", "0"], a: 1, e: "1 − 0,2." },
    { q: "La regla de Laplace exige que los resultados sean…", o: ["pocos", "equiprobables", "incompatibles", "numéricos"], a: 1, e: "Igual de probables." },
    { q: "Al repetir mucho un experimento, la frecuencia relativa…", o: ["crece siempre", "se acerca a la probabilidad", "se hace 0", "se compensa"], a: 1, e: "Ley de los grandes números." },
    { q: "P(as) en la baraja española:", o: ["1/40", "1/10", "1/4", "4/10"], a: 1, e: "4/40." },
    { q: "Suma más probable con dos dados:", o: ["6", "7", "8", "12"], a: 1, e: "6 de 36 casos." },
    { q: "P(suma 12) con dos dados:", o: ["1/12", "1/36", "1/11", "2/36"], a: 1, e: "Solo (6, 6)." },
    { q: "Resultados al lanzar 3 monedas:", o: ["3", "6", "8", "9"], a: 2, e: "2³." },
    { q: "P(dos caras) en dos lanzamientos:", o: ["1/2", "1/3", "1/4", "2/4"], a: 2, e: "1/2 · 1/2." },
    { q: "En un árbol, la probabilidad de un camino se obtiene…", o: ["sumando ramas", "multiplicando ramas", "restando", "dividiendo"], a: 1, e: "Producto." },
    { q: "Sin reemplazamiento, las extracciones son…", o: ["independientes", "dependientes", "imposibles", "equiprobables siempre"], a: 1, e: "Cambia la urna." },
    { q: "Tras 5 caras seguidas, P(cruz) en el siguiente lanzamiento:", o: ["mayor que 1/2", "1/2", "menor que 1/2", "1"], a: 1, e: "La moneda no tiene memoria." },
    { q: "P(A ∪ B) con A y B compatibles:", o: ["P(A) + P(B)", "P(A) + P(B) − P(A∩B)", "P(A) · P(B)", "1 − P(A)"], a: 1, e: "Se resta la intersección." },
  ],
  examen: [
    { q: "P(múltiplo de 3) con un dado:", o: ["1/6", "1/3", "1/2", "2/3"], a: 1, e: "{3, 6}." },
    { q: "Urna con 3 rojas y 7 blancas: P(roja)", o: ["3/7", "0,3", "0,7", "3/10 · 7/10"], a: 1, e: "3/10." },
    { q: "P(no sacar un 6) en un dado:", o: ["1/6", "5/6", "1/2", "6/5"], a: 1, e: "Contrario." },
    { q: "P(suma 4) con dos dados:", o: ["3/36", "4/36", "1/11", "1/6"], a: 0, e: "(1, 3), (2, 2), (3, 1)." },
    { q: "Dos monedas: P(al menos una cara)", o: ["1/4", "1/2", "3/4", "1"], a: 2, e: "1 − 1/4." },
    { q: "Urna 2 rojas y 2 azules, dos sin reemplazamiento: P(dos rojas)", o: ["1/4", "1/6", "1/3", "1/2"], a: 1, e: "2/4 · 1/3." },
    { q: "P(A) = 0,5, P(B) = 0,4, P(A∩B) = 0,2: P(A∪B) =", o: ["0,9", "0,7", "0,2", "0,1"], a: 1, e: "0,5 + 0,4 − 0,2." },
    { q: "Tabla: 40 de 80 chicos juegan; P(juega sabiendo que es chico)", o: ["0,4", "0,5", "0,8", "40"], a: 1, e: "40/80." },
  ],
  feynman: ["Qué diferencia hay entre un experimento aleatorio y uno determinista", "Cuándo se puede usar la regla de Laplace y cuándo no", "Por qué la suma 7 es la más probable al lanzar dos dados", "Qué cambia en una extracción sin reemplazamiento"],
  figura: {
    titulo: "Probabilidad en una imagen",
    svg: resumen("Resumen de la probabilidad", [
      ["Sucesos", "espacio muestral E · unión ∪ · intersección ∩ · contrario A'", "var(--pen)"],
      ["Laplace", "P(A) = favorables / posibles (solo si son equiprobables)", "var(--red)"],
      ["Propiedades", "P(A') = 1 − P(A) · P(A∪B) = P(A) + P(B) − P(A∩B)", "var(--leaf)"],
      ["Compuestos", "árbol: multiplicar por ramas, sumar caminos · tablas", "var(--inf)"],
    ], 180),
  },
  video: { id: "tQh29_Noo9w", titulo: "Experimento aleatorio, espacio muestral y evento o suceso", canal: "Matemáticas profe Alex", vistas: 2416898, megusta: 0 },
  mapa: mapa("PROBABILIDAD", "var(--red)", [
    ["Sucesos", "E · ∪ · ∩ · contrario", "var(--pen)"],
    ["Medir", "Laplace · frecuencias", "var(--red)"],
    ["Compuestos", "árbol · tablas", "var(--leaf)"],
    ["Vida real", "juegos · falacias", "var(--inf)"],
  ], 260),
  glosario: [
    ["Experimento aleatorio", "El que no permite predecir el resultado aunque se repita igual."],
    ["Espacio muestral", "Conjunto de todos los resultados posibles."],
    ["Suceso", "Subconjunto del espacio muestral."],
    ["Suceso elemental", "Suceso con un solo resultado."],
    ["Suceso seguro", "El espacio muestral completo; P = 1."],
    ["Suceso imposible", "El conjunto vacío; P = 0."],
    ["Suceso contrario", "Ocurre cuando no ocurre A; P(A') = 1 − P(A)."],
    ["Unión", "Ocurre A o B (o ambos)."],
    ["Intersección", "Ocurren A y B a la vez."],
    ["Sucesos incompatibles", "No pueden ocurrir a la vez: A ∩ B = ∅."],
    ["Frecuencia relativa", "Veces que ocurre un suceso entre el número de repeticiones."],
    ["Ley de los grandes números", "La frecuencia relativa se acerca a la probabilidad al repetir mucho."],
    ["Regla de Laplace", "Favorables entre posibles, con resultados equiprobables."],
    ["Diagrama de árbol", "Esquema de ramas para experimentos compuestos."],
    ["Reemplazamiento", "Devolver el elemento extraído antes de la siguiente extracción."],
    ["Tabla de contingencia", "Tabla de doble entrada con dos características."],
  ],
  situacion: {
    titulo: "Diseñamos un juego justo",
    reto: "Para la feria del centro, vuestro equipo diseñará un juego de azar con dados, cartas o ruletas. Debe ser justo o con una ventaja pequeña y conocida para la organización, y lo tendréis que demostrar con probabilidades y con experimentos.",
    pasos: [
      "Inventad las reglas del juego con un experimento compuesto (dos dados, dados y moneda, cartas…).",
      "Escribid el espacio muestral y calculad la probabilidad de ganar con Laplace o con un árbol.",
      "Decidid el precio y el premio para que el juego sea justo o casi justo.",
      "Simulad al menos 200 partidas (a mano o con hoja de cálculo) y comparad la frecuencia relativa con la probabilidad.",
      "Presentad el juego explicando por qué es justo y qué falacias del azar podría creer un jugador.",
    ],
    producto: "Un juego con reglas, cálculo de probabilidades, simulación y cartel explicativo.",
    evaluacion: ["Describe correctamente el espacio muestral.", "Calcula probabilidades simples y compuestas.", "Compara la probabilidad teórica con la experimental.", "Argumenta si el juego es justo con vocabulario preciso."],
  },
  tarjetas: [
    ["Experimento aleatorio", "No se puede predecir."], ["Espacio muestral", "Todos los resultados."],
    ["A ∪ B", "A o B."], ["A ∩ B", "A y B."],
    ["Contrario", "P(A') = 1 − P(A)"], ["Incompatibles", "A ∩ B = ∅"],
    ["Laplace", "favorables / posibles"], ["Grandes números", "fr → P"],
    ["A ∪ B general", "P(A) + P(B) − P(A∩B)"], ["Árbol", "× en ramas, + entre caminos"],
    ["Dos dados", "36 resultados; suma 7: 1/6"], ["Falacia del jugador", "El azar no tiene memoria."],
  ],
  familias: ["Jugad a un juego de mesa con dados y apuntad las sumas que salen.", "Lanzad una moneda 50 veces y comprobad la frecuencia de caras.", "Comentad juntos por qué las loterías no son una forma de ganar dinero.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido estocástico: experimentos aleatorios, espacio muestral, operaciones con sucesos, frecuencia relativa y ley de los grandes números, regla de Laplace, propiedades de la probabilidad, experimentos compuestos con diagramas de árbol y tablas de contingencia (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Experimentos con monedas, dados y chinchetas en equipos y puesta en común de frecuencias.", "Simulación con hoja de cálculo para ver la ley de los grandes números.", "Análisis de juegos de feria y loterías.", "Diseño de un juego justo como situación de aprendizaje."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: probabilidad (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
