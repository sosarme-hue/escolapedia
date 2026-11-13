// Matemáticas A 4º ESO · Probabilidad. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, barras, arbol, comparar, recta } = require("./_eso4L2-mata");

const conj = (cx, cy, r, c, op = 0.18) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" fill-opacity="${op}" stroke="${c}" stroke-width="2.5"/>`;
const marco = (t) => `<rect x="12" y="34" width="236" height="134" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="1.6"/>` + tx(24, 52, "E", { fs: 13, a: "start", c: "var(--muted)" }) + tx(130, 22, t, { fs: 12.5, c: "var(--ink)" });

const aleatorio = cajas("Experimentos deterministas y aleatorios: en los aleatorios no se puede predecir el resultado aunque se conozcan todos los posibles", [
  ["Determinista", ["agua a 100 °C", "resultado seguro"], "var(--pen)"], ["Aleatorio", ["lanzar un dado", "no se puede prever"], "var(--red)"],
  ["Espacio muestral", ["E = {1, 2, 3,", "4, 5, 6}"], "var(--leaf)"], ["Suceso", ["«salir par»", "= {2, 4, 6}"], "var(--inf)"],
], "Azar y sucesos");

const dados = lienzo("Espacio muestral al lanzar dos dados: 36 resultados igualmente probables, y en diagonal las sumas iguales a 7", Array.from({ length: 36 }, (_, k) => { const i = Math.floor(k / 6), j = k % 6, x = 50 + j * 32, y = 32 + i * 24, s = i + j + 2; return `<rect x="${x}" y="${y}" width="30" height="22" rx="4" fill="${s === 7 ? "var(--red)" : "var(--card)"}" stroke="var(--muted)" stroke-width="1"/>` + tx(x + 15, y + 15, s, { fs: 10.5, c: s === 7 ? "#fff" : "var(--ink)", w: 600 }); }).join("") + [1, 2, 3, 4, 5, 6].map((v, i) => tx(66 + i * 32, 26, v, { fs: 10, c: "var(--pen)" }) + tx(38, 47 + i * 24, v, { fs: 10, c: "var(--pen)" })).join("") + tx(130, 192, "P(suma 7) = 6/36 = 1/6", { fs: 12, c: "var(--red)" }), 200);

const union = lienzo("Unión e intersección de sucesos: la unión es el conjunto de resultados de A o de B, y la intersección los que están en los dos", marco("A ∪ B · A ∩ B") + conj(100, 104, 46, "var(--pen)") + conj(160, 104, 46, "var(--red)") + tx(82, 108, "A", { fs: 14, c: "var(--pen)" }) + tx(178, 108, "B", { fs: 14, c: "var(--red)" }) + tx(130, 108, "A∩B", { fs: 11, c: "var(--ink)" }), 180);

const contrario = lienzo("Suceso contrario: todo lo que no es A; su probabilidad es 1 menos la de A", marco("Suceso contrario Ā") + `<rect x="13" y="35" width="234" height="132" rx="10" fill="var(--leaf)" fill-opacity="0.18"/>` + `<circle cx="110" cy="104" r="46" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>` + conj(110, 104, 46, "var(--pen)") + tx(110, 108, "A", { fs: 15, c: "var(--pen)" }) + tx(200, 120, "Ā", { fs: 15, c: "var(--leaf)" }) + tx(200, 150, "P(Ā) = 1 − P(A)", { fs: 11, c: "var(--leaf)", max: 90 }), 180);

const compatibles = lienzo("Sucesos incompatibles, que no pueden ocurrir a la vez, y compatibles, que tienen resultados en común", marco("Incompatibles · Compatibles") + conj(56, 104, 32, "var(--pen)") + conj(124, 104, 22, "var(--red)") + conj(178, 104, 30, "var(--pen)") + conj(208, 104, 30, "var(--red)") + tx(90, 152, "A ∩ B = ∅", { fs: 11, c: "var(--ink)" }) + tx(193, 152, "A ∩ B ≠ ∅", { fs: 11, c: "var(--ink)" }), 180);

const escalaP = recta("Escala de probabilidad: de 0, suceso imposible, a 1, suceso seguro", { r: [-0.2, 1.2], marcas: [0, 0.5, 1], puntos: [{ x: 0, t: "imposible", c: "var(--red)" }, { x: 0.5, t: "igual de probable", c: "var(--pen)", abajo: true }, { x: 1, t: "seguro", c: "var(--leaf)" }], titulo: "0 ≤ P(A) ≤ 1", pie: "sacar 7 con un dado: 0 · cara en moneda: 0,5" });

const laplace = formula("Regla de Laplace: casos favorables entre casos posibles, si todos son igual de probables", "P(A) = favorables / posibles", ["solo con resultados equiprobables", "dado: P(par) = 3/6 = 1/2", "baraja de 40: P(oros) = 10/40"], "var(--pen)");

const frecuencial = ejes("Ley de los grandes números: la frecuencia relativa de cara se acerca a 0,5 al aumentar el número de lanzamientos", { x: [0, 10], y: [0, 1], paso: 2, pasoY: 0.5, marcasX: [], marcasY: [0.5, 1], ex: "lanzamientos", ey: "fr", curvas: [{ f: (x) => 0.5 + 0.38 * Math.exp(-x / 2.2) * Math.cos(2.4 * x), c: "var(--pen)", de: 0.2, a: 10 }, { f: () => 0.5, c: "var(--red)", disc: true, w: 1.6 }], textos: [[7.5, 0.72, "→ 0,5", "var(--red)"]] });

const sumaFig = formula("Probabilidad de la unión de dos sucesos", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", ["incompatibles: P(A ∪ B) = P(A) + P(B)", "se resta lo contado dos veces", "contrario: P(Ā) = 1 − P(A)"], "var(--red)");

const arbolMoneda = arbol("Diagrama de árbol al lanzar dos monedas: cuatro resultados de probabilidad un cuarto cada uno", [["C", "1/2", [["C", "1/2", "1/4"], ["X", "1/2", "1/4"]]], ["X", "1/2", [["C", "1/2", "1/4"], ["X", "1/2", "1/4"]]]]);

const arbolUrna = arbol("Extracción sin reemplazamiento de una urna con 3 bolas rojas y 2 azules: las probabilidades de la segunda dependen de la primera", [["R", "3/5", [["R", "2/4", "6/20"], ["A", "2/4", "6/20"]]], ["A", "2/5", [["R", "3/4", "6/20"], ["A", "1/4", "2/20"]]]]);

const productoFig = cajas("Regla del producto: en sucesos independientes se multiplican las probabilidades; en dependientes, la segunda es condicionada", [
  ["Independientes", ["P(A∩B) =", "P(A) · P(B)"], "var(--pen)"], ["Dependientes", ["P(A∩B) =", "P(A) · P(B/A)"], "var(--red)"],
  ["Con reemplazamiento", ["la urna", "no cambia"], "var(--leaf)"], ["Sin reemplazamiento", ["la urna", "cambia"], "var(--inf)"],
], "Regla del producto");

const contingencia = lienzo("Tabla de contingencia de 100 estudiantes según si practican deporte y si son de 3º o de 4º", [["", "Deporte", "No", "Total"], ["3º", "30", "20", "50"], ["4º", "25", "25", "50"], ["Total", "55", "45", "100"]].map((fila, i) => fila.map((c, j) => `<rect x="${14 + j * 58}" y="${36 + i * 30}" width="56" height="28" rx="4" fill="${i === 0 || j === 0 ? "var(--pen)" : i === 3 || j === 3 ? "var(--paper)" : "var(--card)"}" stroke="var(--muted)" stroke-width="1"/>` + tx(42 + j * 58, 55 + i * 30, c, { fs: 11.5, c: i === 0 || j === 0 ? "#fff" : "var(--ink)", max: 52 })).join("")).join("") + tx(130, 22, "Tabla de contingencia", { fs: 12.5, c: "var(--muted)" }) + tx(130, 172, "P(deporte / 4º) = 25/50 = 0,5", { fs: 11.5, c: "var(--red)" }), 185);

const condicionada = formula("Probabilidad condicionada: la probabilidad de B sabiendo que ha ocurrido A", "P(B / A) = P(A ∩ B) / P(A)", ["el espacio se reduce a A", "independientes: P(B/A) = P(B)", "se lee en tablas y árboles"], "var(--leaf)");

const juegos = barras("Probabilidad de ganar en distintos juegos de azar: mucho menor de lo que parece", [["Moneda", 50], ["Dado (un nº)", 16.7], ["Ruleta (nº)", 2.7], ["Lotería 1.º", 0.001]], { titulo: "Probabilidad de acertar (%)", c: "var(--red)", fmt: (v) => (v < 0.01 ? "0,001" : String(v).replace(".", ",")) + " %" });

const resolver = pasos("Pasos para resolver un problema de probabilidad", ["Describir el experimento y E", "¿Equiprobables? → Laplace", "Varias etapas → árbol", "Dos criterios → tabla", "Comprobar: entre 0 y 1"], "Problemas de probabilidad");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Probabilidad",
  minutos: 110,
  objetivos: [
    "Distinguir experimentos deterministas y aleatorios y describir su espacio muestral",
    "Operar con sucesos: unión, intersección, contrario, compatibles e incompatibles",
    "Calcular probabilidades con la regla de Laplace y con frecuencias relativas",
    "Usar diagramas de árbol en experimentos compuestos, con y sin reemplazamiento",
    "Interpretar tablas de contingencia y la probabilidad condicionada",
    "Analizar críticamente los juegos de azar y las decisiones bajo incertidumbre",
  ],
  claves: ["experimento aleatorio", "espacio muestral", "suceso", "Laplace", "frecuencia relativa", "diagrama de árbol", "independencia", "probabilidad condicionada"],
  pregunta: {
    texto: "En una clase de 23 personas, ¿qué crees que es más probable: que dos cumplan años el mismo día o que no?",
    respuesta: "Aunque parezca sorprendente, es <b>más probable que sí</b>: la probabilidad es de un <mark>50,7 %</mark>. Con 23 personas hay 253 parejas posibles, y cada pareja tiene una pequeña probabilidad de coincidir. Se calcula con la regla del producto y el suceso contrario: P(ninguna coincide) = 365/365 · 364/365 · … · 343/365 ≈ 0,493.",
  },
  lectura: {
    titulo: "Una partida interrumpida",
    html: `<p>En 1654, un jugador francés, el caballero de Méré, planteó un problema a <b>Blaise Pascal</b>: dos jugadores apuestan a ganar una serie de partidas, pero el juego se interrumpe antes de terminar. ¿Cómo se reparte justamente el dinero? Pascal se lo contó por carta a <b>Pierre de Fermat</b>, y en esa correspondencia nació la <b>teoría de la probabilidad</b>: la idea de que el reparto debía ser proporcional a la probabilidad que tenía cada jugador de ganar si el juego hubiera continuado.</p><p>Desde entonces, la probabilidad ha salido de las mesas de juego para llegar a todas partes. Las aseguradoras calculan sus precios con ella, los médicos la usan para valorar la eficacia de un tratamiento, los meteorólogos anuncian un 70 % de probabilidad de lluvia y los ingenieros estiman la fiabilidad de un avión. También explica por qué los casinos y las loterías siempre ganan a largo plazo.</p><p>En este tema aprenderás a describir los resultados de un experimento aleatorio, a calcular probabilidades con la regla de Laplace, diagramas de árbol y tablas, y a entender la probabilidad condicionada. Con estas herramientas podrás tomar mejores decisiones cuando hay incertidumbre.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Experimentos aleatorios y espacio muestral</h3><p>Un experimento es <b>determinista</b> cuando se puede predecir su resultado (calentar agua a 100 °C a nivel del mar hace que hierva) y <b>aleatorio</b> cuando, aunque se conozcan todos los resultados posibles, no se puede saber cuál saldrá: lanzar un dado, sacar una carta o el sexo de un bebé. La probabilidad estudia los experimentos aleatorios.</p><p>El conjunto de todos los resultados posibles se llama <b>espacio muestral</b>, E. Al lanzar un dado, E = {1, 2, 3, 4, 5, 6}; al lanzar una moneda, E = {C, X}. Cada resultado es un <b>suceso elemental</b>, y cualquier subconjunto de E es un <b>suceso</b>: «salir par» = {2, 4, 6}. El suceso que contiene todos los resultados es el <b>suceso seguro</b> (E) y el que no contiene ninguno, el <b>suceso imposible</b> (∅). Describir bien el espacio muestral es el primer paso para calcular cualquier probabilidad.</p>`, svg: aleatorio, video: { id: "ifyDuAw0MvE", titulo: "Curso súper básico de probabilidad, desde cero", canal: "Matemáticas con Juan", vistas: 805877, megusta: 0 } },
    { html: `<h3>1.2 Espacios muestrales de experimentos compuestos</h3><p>Cuando un experimento consta de varias etapas (lanzar dos dados, tres monedas o sacar dos cartas), el espacio muestral se construye combinando los resultados de cada etapa. Al lanzar dos monedas, E = {CC, CX, XC, XX}: 4 resultados. Al lanzar dos dados, hay <mark>6 · 6 = 36</mark> resultados, que se organizan en una tabla de doble entrada.</p><p>Esa tabla permite contar fácilmente: la suma 7 aparece 6 veces (1+6, 2+5, 3+4, 4+3, 5+2, 6+1), mientras que la suma 2 o la 12 solo aparecen una vez. Por eso en muchos juegos de mesa el 7 es el resultado más frecuente. Es importante distinguir (1, 6) de (6, 1): son resultados distintos aunque den la misma suma. Si se tratan como uno solo, los resultados dejan de ser igual de probables y los cálculos fallan.</p>`, svg: dados },
    { html: `<h3>1.3 Operaciones con sucesos</h3><p>Con los sucesos se puede operar como con conjuntos. La <b>unión</b> A ∪ B es el suceso «ocurre A o B» (o ambos): contiene los resultados de A, los de B y los comunes. La <b>intersección</b> A ∩ B es «ocurren A y B a la vez»: solo los resultados comunes. Se representan con <b>diagramas de Venn</b>.</p><p>Ejemplo con un dado: A = «par» = {2, 4, 6} y B = «mayor que 3» = {4, 5, 6}. Entonces A ∪ B = {2, 4, 5, 6} y A ∩ B = {4, 6}. En el lenguaje cotidiano, la «o» corresponde a la unión y la «y» a la intersección. Estas operaciones permiten descomponer sucesos complicados en otros más sencillos, cuya probabilidad es más fácil de calcular.</p>`, svg: union },
    { html: `<h3>1.4 Suceso contrario</h3><p>El <b>suceso contrario</b> de A, que se escribe Ā o A', es el que ocurre cuando <b>no</b> ocurre A: contiene todos los resultados de E que no están en A. Con un dado, si A = «sacar un 6», Ā = {1, 2, 3, 4, 5}. Un suceso y su contrario nunca ocurren a la vez y entre los dos cubren todo el espacio muestral.</p><p>Por eso se cumple <mark>P(Ā) = 1 − P(A)</mark>, una de las propiedades más útiles. Muchas veces es mucho más fácil calcular la probabilidad de lo contrario. Por ejemplo, ¿cuál es la probabilidad de sacar al menos un 6 en cuatro lanzamientos de un dado? Calcular «al menos uno» directamente es largo, pero lo contrario, «ningún 6», es (5/6)⁴ ≈ 0,482. Así que P(al menos un 6) ≈ 1 − 0,482 = 0,518. Este fue precisamente uno de los problemas del caballero de Méré.</p>`, svg: contrario },
    { html: `<h3>1.5 Sucesos compatibles e incompatibles</h3><p>Dos sucesos son <b>incompatibles</b> cuando no pueden ocurrir a la vez: su intersección es vacía, A ∩ B = ∅. Al lanzar un dado, «sacar un 2» y «sacar impar» son incompatibles. Son <b>compatibles</b> si pueden ocurrir a la vez: «sacar par» y «sacar mayor que 3» son compatibles porque comparten el 4 y el 6.</p><p>No hay que confundir incompatibles con contrarios: un suceso y su contrario son incompatibles, pero dos sucesos incompatibles no tienen por qué ser contrarios. «Sacar un 1» y «sacar un 2» son incompatibles, pero no contrarios, porque hay más resultados (3, 4, 5, 6). Esta distinción es clave para usar correctamente la regla de la suma, que veremos más adelante.</p>`, svg: compatibles },
    { html: `<h3>2.1 La probabilidad y su escala</h3><p>La <b>probabilidad</b> de un suceso es un número entre <b>0 y 1</b> que mide lo fácil que es que ocurra. El suceso imposible tiene probabilidad 0, el seguro tiene probabilidad 1, y un suceso «tan probable como improbable», como sacar cara, tiene 0,5. También se expresa en porcentaje: 0,25 es un 25 %.</p><p>Una probabilidad de 0,9 no significa que vaya a ocurrir seguro, ni una de 0,1 que no vaya a ocurrir: significa que, si se repitiera el experimento muchas veces, ocurriría aproximadamente el 90 % o el 10 % de las veces. Cuando el parte meteorológico anuncia un 30 % de probabilidad de lluvia, quiere decir que en días con esas condiciones llueve aproximadamente 3 de cada 10 veces. Interpretar bien estos números es fundamental para tomar decisiones razonables.</p>`, svg: escalaP },
    { html: `<h3>2.2 La regla de Laplace</h3><p>Si todos los resultados de un experimento son <b>igual de probables</b> (equiprobables), la probabilidad de un suceso A se calcula con la <b>regla de Laplace</b>: <mark>P(A) = casos favorables / casos posibles</mark>. Al lanzar un dado, P(par) = 3/6 = 1/2. En una baraja española de 40 cartas, P(sacar un as) = 4/40 = 1/10 y P(oros) = 10/40 = 1/4. Con dos dados, P(suma 7) = 6/36 = 1/6.</p><p>La regla <b>solo vale si los resultados son equiprobables</b>. No se puede decir que la probabilidad de aprobar es 1/2 porque «o apruebas o suspendes», ni que la de que mañana llueva es 1/2. Tampoco funciona con un dado trucado o una chincheta, que puede caer de punta o de lado con probabilidades distintas. En esos casos hay que recurrir a la experimentación.</p>`, svg: laplace, video: { id: "QO_b8Vj5Vy8", titulo: "Regla de Laplace: probabilidad", canal: "FiAsMat", vistas: 39266, megusta: 0 } },
    { html: `<h3>2.3 Frecuencia relativa y ley de los grandes números</h3><p>Cuando no se puede aplicar Laplace, la probabilidad se <b>estima experimentalmente</b>: se repite el experimento muchas veces y se calcula la <b>frecuencia relativa</b>, fr = (veces que ocurre A) / (número de repeticiones). Si al lanzar una chincheta 500 veces cae de punta 310, se estima P(punta) ≈ 0,62.</p><p>La <b>ley de los grandes números</b> afirma que, al aumentar el número de repeticiones, la frecuencia relativa se acerca cada vez más a la probabilidad. Con pocos lanzamientos de una moneda puede salir mucha más cara que cruz, pero con miles la proporción se acerca a 0,5. Ojo: esto no significa que «después de cinco caras toque cruz». La moneda no tiene memoria: cada lanzamiento es independiente. Creer lo contrario es la famosa <b>falacia del jugador</b>, que hace perder mucho dinero en los casinos.</p>`, svg: frecuencial },
    { html: `<h3>2.4 Propiedades: suma y contrario</h3><p>Si A y B son <b>incompatibles</b>, la probabilidad de que ocurra uno u otro es la suma: <b>P(A ∪ B) = P(A) + P(B)</b>. Al sacar una carta de 40, P(as o rey) = 4/40 + 4/40 = 8/40. Si son <b>compatibles</b>, hay que restar la intersección, que se contaría dos veces: <mark>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</mark>.</p><p>Ejemplo: P(as u oros) = 4/40 + 10/40 − 1/40 = 13/40, porque el as de oros está en los dos sucesos. Con el dado: P(par o mayor que 3) = 3/6 + 3/6 − 2/6 = 4/6. Junto con P(Ā) = 1 − P(A), estas propiedades permiten calcular muchas probabilidades sin tener que contar todos los casos uno a uno.</p>`, svg: sumaFig },
    { html: `<h3>3.1 Experimentos compuestos y diagramas de árbol</h3><p>Un <b>experimento compuesto</b> está formado por varios experimentos simples: lanzar dos monedas, un dado y una moneda, o sacar dos bolas de una urna. Para organizarlos se usa un <b>diagrama de árbol</b>: de cada resultado de la primera etapa salen ramas con los resultados de la segunda, y en cada rama se escribe su probabilidad.</p><p>Las reglas del árbol son sencillas: la probabilidad de un camino es el <b>producto</b> de las probabilidades de sus ramas, y la de un suceso formado por varios caminos es la <b>suma</b> de las probabilidades de esos caminos. Con dos monedas, P(CC) = 1/2 · 1/2 = 1/4, y P(una cara y una cruz) = P(CX) + P(XC) = 1/4 + 1/4 = 1/2. Además, las ramas que salen de un mismo nudo suman siempre 1, lo que sirve para comprobar el árbol.</p>`, svg: arbolMoneda, video: { id: "8EcHGGzz9R4", titulo: "Diagrama de árbol: probabilidad, ejercicio resuelto", canal: "Academia Internet", vistas: 190766, megusta: 0 } },
    { html: `<h3>3.2 Sucesos dependientes e independientes</h3><p>Dos sucesos son <b>independientes</b> si que ocurra uno no cambia la probabilidad del otro: los lanzamientos de una moneda, sacar una carta y devolverla a la baraja (<b>con reemplazamiento</b>). En ese caso, <mark>P(A ∩ B) = P(A) · P(B)</mark>. La probabilidad de sacar dos seises seguidos es 1/6 · 1/6 = 1/36.</p><p>Son <b>dependientes</b> si el primero modifica el segundo: sacar dos cartas <b>sin devolver</b> la primera. Si la primera es un as, quedan 3 ases en 39 cartas. Entonces P(dos ases) = 4/40 · 3/39 = 12/1.560 = 1/130. En la fórmula, la segunda probabilidad es una probabilidad <b>condicionada</b>: P(A ∩ B) = P(A) · P(B/A). Darse cuenta de si hay o no reemplazamiento es la clave de muchos problemas.</p>`, svg: productoFig },
    { html: `<h3>3.3 Extracciones sin reemplazamiento</h3><p>Una urna tiene 3 bolas rojas y 2 azules. Se sacan dos sin devolver la primera. En el árbol, la primera extracción tiene P(R) = 3/5 y P(A) = 2/5. Si la primera es roja, quedan 2 rojas y 2 azules: P(R) = 2/4 y P(A) = 2/4. Si la primera es azul, quedan 3 rojas y 1 azul: P(R) = 3/4 y P(A) = 1/4.</p><p>Multiplicando por los caminos: P(RR) = 3/5 · 2/4 = 6/20, P(RA) = 6/20, P(AR) = 6/20 y P(AA) = 2/20. Las cuatro suman 20/20 = 1 ✓. Así, P(las dos del mismo color) = 6/20 + 2/20 = 8/20 = 0,4 y P(al menos una azul) = 1 − P(RR) = 14/20 = 0,7. Si hubiera reemplazamiento, P(RR) sería 3/5 · 3/5 = 9/25 = 0,36, algo distinto de 0,3.</p>`, svg: arbolUrna },
    { html: `<h3>3.4 Tablas de contingencia</h3><p>Cuando los individuos se clasifican según <b>dos criterios</b> a la vez, los datos se organizan en una <b>tabla de contingencia</b> o de doble entrada, con los totales de filas y columnas. Por ejemplo, 100 estudiantes clasificados por curso (3º o 4º) y por si practican deporte o no.</p><p>De la tabla se leen directamente muchas probabilidades eligiendo un estudiante al azar: P(practica deporte) = 55/100 = 0,55; P(es de 4º y practica deporte) = 25/100 = 0,25; P(es de 3º o practica deporte) = (50 + 55 − 30)/100 = 0,75. Y también probabilidades condicionadas: si sabemos que es de 4º, nos fijamos solo en esa fila: P(deporte / 4º) = 25/50 = 0,5. Las tablas y los árboles son dos formas de representar la misma información: se puede pasar de una a otra.</p>`, svg: contingencia },
    { html: `<h3>3.5 Probabilidad condicionada</h3><p>La <b>probabilidad condicionada</b> de B sabiendo que ha ocurrido A se escribe P(B/A) y se calcula con <mark>P(B/A) = P(A ∩ B) / P(A)</mark>. La idea es que la información «ha ocurrido A» <b>reduce el espacio muestral</b> a los resultados de A. Al lanzar un dado, si sabemos que ha salido par, la probabilidad de que sea un 6 ya no es 1/6, sino 1/3.</p><p>Si A y B son independientes, P(B/A) = P(B): saber que ha ocurrido A no aporta información. En la tabla anterior, P(deporte) = 0,55 pero P(deporte / 3º) = 30/50 = 0,6 y P(deporte / 4º) = 0,5: el curso y el deporte no son independientes. La probabilidad condicionada está en la base de los test médicos, los filtros de spam y los sistemas de recomendación, que actualizan las probabilidades con cada nueva información.</p>`, svg: condicionada },
    { html: `<h3>3.6 Azar, juegos y decisiones</h3><p>La probabilidad permite valorar los <b>juegos de azar</b> con frialdad. En una ruleta europea hay 37 números: acertar uno tiene probabilidad 1/37 ≈ 2,7 %, pero se paga 35 veces lo apostado; la diferencia es el beneficio del casino. En la lotería primitiva, acertar los seis números tiene una probabilidad de 1 entre casi 14 millones. A largo plazo, por la ley de los grandes números, <b>la banca siempre gana</b>.</p><p>Conviene desconfiar de las «rachas» y los «números calientes»: los sorteos no tienen memoria. Y es importante saber que los juegos de azar y las apuestas pueden generar adicción, especialmente en jóvenes. Usada con criterio, la probabilidad sirve para lo contrario: decidir con información, como elegir un seguro, interpretar un riesgo médico o valorar una inversión. Un buen método de resolución, como el del dibujo, evita la mayoría de errores.</p>${tabla(["Juego", "Probabilidad de ganar"], [["Cara en una moneda", "1/2"], ["Un número concreto en un dado", "1/6"], ["Un número en la ruleta", "1/37"], ["Primitiva (6 aciertos)", "≈ 1/13.983.816"]])}`, svg: juegos },
    { html: `<h3>3.7 Resolver problemas de probabilidad</h3><p>Para resolver un problema de probabilidad conviene seguir un orden: 1) describir el <b>experimento</b> y su espacio muestral; 2) si los resultados son <b>equiprobables</b>, aplicar Laplace contando casos; 3) si hay <b>varias etapas</b>, dibujar un árbol y multiplicar por las ramas; 4) si los datos vienen clasificados por <b>dos criterios</b>, construir una tabla de contingencia; 5) comprobar que el resultado está entre 0 y 1 y que tiene sentido.</p><p>Trucos útiles: si aparece «al menos uno», pensar en el <b>contrario</b>; si aparece «sabiendo que», es una <b>condicionada</b>; y si se pregunta por «o», revisar si los sucesos son compatibles para no contar dos veces. Las simulaciones con una hoja de cálculo (función ALEATORIO) o con dados reales ayudan a comprobar si un resultado teórico es razonable.</p>`, svg: resolver },
  ],
  ejemplos: [
    { enunciado: "Se lanza un dado. Calcula P(múltiplo de 3), P(no sacar 6) y P(par o múltiplo de 3).", pasos: ["Múltiplos de 3: {3, 6} → 2/6 = 1/3.", "P(no 6) = 1 − 1/6 = 5/6.", "Par {2,4,6}, múltiplo de 3 {3,6}, común {6}: 3/6 + 2/6 − 1/6 = 4/6."], resultado: "1/3, 5/6 y 2/3." },
    { enunciado: "Se lanzan dos dados. Calcula la probabilidad de que la suma sea mayor que 9.", pasos: ["Casos posibles: 36.", "Suma 10: (4,6), (5,5), (6,4); 11: (5,6), (6,5); 12: (6,6).", "Favorables: 6."], resultado: "6/36 = 1/6." },
    { enunciado: "Se lanzan tres monedas. Calcula P(al menos una cara).", pasos: ["Contrario: ninguna cara = XXX.", "P(XXX) = (1/2)³ = 1/8.", "P(al menos una cara) = 1 − 1/8."], resultado: "7/8." },
    { enunciado: "Se sacan dos cartas de una baraja de 40 sin reemplazamiento. ¿Probabilidad de que las dos sean de copas?", pasos: ["Primera copa: 10/40.", "Segunda copa sabiendo la primera: 9/39.", "Producto: 90/1.560."], resultado: "≈ 0,058 (3/52)." },
    { enunciado: "En un grupo, el 60 % son chicas. El 30 % de las chicas y el 20 % de los chicos llevan gafas. ¿Qué probabilidad hay de que una persona al azar lleve gafas?", pasos: ["Árbol: chica 0,6 → gafas 0,3; chico 0,4 → gafas 0,2.", "P(chica y gafas) = 0,18; P(chico y gafas) = 0,08.", "Suma: 0,26."], resultado: "P(gafas) = 0,26 (26 %)." },
    { enunciado: "Con la tabla de contingencia de 100 estudiantes, calcula P(4º / no practica deporte).", pasos: ["Nos quedamos con la columna «No»: 45 estudiantes.", "De ellos, 25 son de 4º."], resultado: "25/45 = 5/9 ≈ 0,56." },
  ],
  errores: [
    "Aplicar la regla de Laplace a resultados que no son equiprobables.",
    "Sumar probabilidades de sucesos compatibles sin restar la intersección.",
    "Olvidar que en las extracciones sin reemplazamiento cambian los casos posibles.",
    "Creer que tras una racha de caras «toca» cruz (falacia del jugador).",
    "Confundir sucesos incompatibles con independientes.",
    "En la probabilidad condicionada, dividir entre el total en lugar de entre P(A).",
  ],
  ejercicios: [
    { nivel: "básico", q: "Di si son aleatorios o deterministas: a) lanzar una moneda b) el tiempo que tarda en caer una piedra desde 10 m c) el número premiado en la lotería.", sol: "a) aleatorio b) determinista c) aleatorio." },
    { nivel: "básico", q: "Escribe el espacio muestral de lanzar una moneda y un dado.", sol: "12 resultados: C1, C2, …, C6, X1, …, X6." },
    { nivel: "básico", q: "Se lanza un dado. Calcula P(sacar un número primo).", sol: "{2, 3, 5}: 3/6 = 1/2." },
    { nivel: "básico", q: "En una bolsa hay 5 bolas rojas, 3 verdes y 2 azules. Calcula P(roja), P(verde) y P(no azul).", sol: "1/2, 3/10 y 8/10 = 4/5." },
    { nivel: "básico", q: "En una baraja de 40, calcula P(figura) (sota, caballo o rey).", sol: "12/40 = 3/10." },
    { nivel: "básico", q: "Con el dado, A = {1, 2, 3} y B = {3, 4}. Halla A ∪ B, A ∩ B y Ā.", sol: "A ∪ B = {1, 2, 3, 4}; A ∩ B = {3}; Ā = {4, 5, 6}." },
    { nivel: "básico", q: "¿Son incompatibles «sacar par» y «sacar 5» al lanzar un dado? ¿Y «sacar par» y «sacar mayor que 4»?", sol: "Sí (no hay común). No (comparten el 6)." },
    { nivel: "básico", q: "Si P(A) = 0,35, ¿cuánto vale P(Ā)?", sol: "0,65." },
    { nivel: "básico", q: "Se lanza una chincheta 400 veces y cae de punta 260. Estima P(punta) y P(de lado).", sol: "0,65 y 0,35." },
    { nivel: "básico", q: "Se lanzan dos monedas. Dibuja el árbol y calcula P(dos cruces).", sol: "1/2 · 1/2 = 1/4." },
    { nivel: "básico", q: "Con dos dados, ¿cuál es la suma más probable? ¿Con qué probabilidad?", sol: "7, con 6/36 = 1/6." },
    { nivel: "básico", q: "Una ruleta tiene 8 sectores iguales: 3 rojos, 3 azules y 2 verdes. Calcula P(rojo o verde).", sol: "5/8." },
    { nivel: "medio", q: "Se lanzan dos dados. Calcula P(dobles) y P(suma 5).", sol: "6/36 = 1/6 y 4/36 = 1/9." },
    { nivel: "medio", q: "Se saca una carta de 40. Calcula P(rey o espadas).", sol: "4/40 + 10/40 − 1/40 = 13/40." },
    { nivel: "medio", q: "P(A) = 0,5, P(B) = 0,4 y P(A ∩ B) = 0,2. Calcula P(A ∪ B) y P(no ocurra ninguno).", sol: "0,7 y 0,3." },
    { nivel: "medio", q: "Se lanza tres veces una moneda. Calcula P(exactamente dos caras).", sol: "CCX, CXC, XCC: 3/8." },
    { nivel: "medio", q: "Una urna tiene 4 bolas blancas y 6 negras. Se sacan dos con reemplazamiento. Calcula P(dos blancas) y P(una de cada).", sol: "0,4² = 0,16. 2 · 0,4 · 0,6 = 0,48." },
    { nivel: "medio", q: "Repite el ejercicio anterior sin reemplazamiento.", sol: "4/10 · 3/9 = 12/90 ≈ 0,133. 2 · 4/10 · 6/9 = 48/90 ≈ 0,533." },
    { nivel: "medio", q: "La probabilidad de que un tirador acierte es 0,7. Si dispara dos veces (independientes), calcula P(acierta las dos) y P(al menos una).", sol: "0,49 y 1 − 0,09 = 0,91." },
    { nivel: "medio", q: "En una clase de 30, 18 juegan al fútbol, 12 al baloncesto y 6 a los dos. Calcula P(juega a alguno) eligiendo uno al azar.", sol: "(18 + 12 − 6)/30 = 24/30 = 0,8." },
    { nivel: "medio", q: "En la tabla de contingencia (3º: 30 deporte, 20 no; 4º: 25 deporte, 25 no), calcula P(3º y no deporte) y P(deporte / 3º).", sol: "20/100 = 0,2. 30/50 = 0,6." },
    { nivel: "medio", q: "Se lanza un dado. Sabiendo que ha salido un número mayor que 2, ¿cuál es la probabilidad de que sea par?", sol: "Espacio {3, 4, 5, 6}; pares {4, 6}: 2/4 = 1/2." },
    { nivel: "medio", q: "Después de 6 caras seguidas, ¿cuál es la probabilidad de cara en el siguiente lanzamiento? Explica.", sol: "1/2: los lanzamientos son independientes. Pensar otra cosa es la falacia del jugador." },
    { nivel: "avanzado", q: "Una urna A tiene 3 rojas y 1 azul; otra B, 1 roja y 3 azules. Se lanza una moneda: si sale cara se saca de A, si sale cruz de B. Calcula P(roja).", sol: "1/2 · 3/4 + 1/2 · 1/4 = 4/8 = 1/2." },
    { nivel: "avanzado", q: "En el ejercicio anterior, si la bola ha sido roja, ¿qué probabilidad hay de que viniera de la urna A?", sol: "P(A/roja) = (3/8)/(1/2) = 3/4." },
    { nivel: "avanzado", q: "Calcula la probabilidad de sacar al menos un 6 en cuatro lanzamientos de un dado y al menos un doble seis en 24 lanzamientos de dos dados. ¿Qué apuesta es mejor?", sol: "1 − (5/6)⁴ ≈ 0,518. 1 − (35/36)²⁴ ≈ 0,491. La primera (problema del caballero de Méré)." },
    { nivel: "avanzado", q: "Un test detecta una enfermedad que tiene el 1 % de la población. Da positivo en el 95 % de enfermos y en el 5 % de sanos. Si das positivo, ¿qué probabilidad hay de estar enfermo?", sol: "P(+) = 0,01·0,95 + 0,99·0,05 = 0,059. P(enf/+) = 0,0095/0,059 ≈ 0,16: solo un 16 %." },
    { nivel: "avanzado", q: "¿Qué probabilidad hay de que en un grupo de 5 personas no haya dos con el mismo día de cumpleaños (año de 365 días)?", sol: "365·364·363·362·361 / 365⁵ ≈ 0,973." },
    { nivel: "avanzado", q: "En una ruleta de 37 números se apuesta 1 € a un número; si sale se cobran 36 € (incluida la apuesta). ¿Cuánto se gana o pierde de media por apuesta?", sol: "Ganancia media = 36/37 − 1 ≈ −0,027 €: se pierden unos 2,7 céntimos por euro." },
    { nivel: "avanzado", q: "Demuestra que si A y B son incompatibles y ambos tienen probabilidad mayor que 0, no pueden ser independientes.", sol: "Incompatibles: P(A ∩ B) = 0. Independientes: P(A ∩ B) = P(A)·P(B) > 0. Contradicción." },
    { nivel: "avanzado", q: "Diseña una simulación con una hoja de cálculo para estimar la probabilidad de que la suma de dos dados sea 7 y compara con el valor teórico.", sol: "Columnas =ALEATORIO.ENTRE(1;6) dos veces, sumar y contar los 7 en 1.000 filas; la frecuencia se acerca a 1/6 ≈ 0,167." },
  ],
  quiz: [
    { q: "Lanzar un dado es un experimento…", o: ["determinista", "aleatorio", "imposible", "seguro"], a: 1, e: "No se puede prever." },
    { q: "El espacio muestral de lanzar una moneda es…", o: ["{C}", "{C, X}", "{1, 2}", "{CC, XX}"], a: 1, e: "Todos los resultados." },
    { q: "Al lanzar dos dados hay … resultados.", o: ["12", "36", "6", "11"], a: 1, e: "6 · 6." },
    { q: "La intersección A ∩ B significa…", o: ["A o B", "A y B", "no A", "ni A ni B"], a: 1, e: "Ocurren a la vez." },
    { q: "La probabilidad del suceso seguro es…", o: ["0", "0,5", "1", "100"], a: 2, e: "Siempre ocurre." },
    { q: "Si P(A) = 0,2, P(Ā) =", o: ["0,2", "0,8", "1,2", "0"], a: 1, e: "1 − 0,2." },
    { q: "La regla de Laplace exige resultados…", o: ["independientes", "equiprobables", "incompatibles", "continuos"], a: 1, e: "Igual de probables." },
    { q: "P(sacar un 5 con un dado):", o: ["1/5", "1/6", "5/6", "1/2"], a: 1, e: "1 favorable de 6." },
    { q: "P(oros) en baraja de 40:", o: ["1/10", "1/4", "1/40", "10/4"], a: 1, e: "10/40." },
    { q: "«Sacar 1» y «sacar 2» con un dado son…", o: ["contrarios", "incompatibles", "compatibles", "independientes"], a: 1, e: "No a la vez, pero no cubren todo." },
    { q: "Si son compatibles, P(A ∪ B) =", o: ["P(A) + P(B)", "P(A) + P(B) − P(A ∩ B)", "P(A) · P(B)", "1 − P(A)"], a: 1, e: "Se resta lo común." },
    { q: "La ley de los grandes números dice que…", o: ["tras muchas caras toca cruz", "la frecuencia relativa se acerca a la probabilidad", "todos los sucesos son equiprobables", "el azar no existe"], a: 1, e: "Con muchas repeticiones." },
    { q: "En un árbol, la probabilidad de un camino se obtiene…", o: ["sumando", "multiplicando", "restando", "dividiendo"], a: 1, e: "Producto de ramas." },
    { q: "Las ramas que salen de un nudo suman…", o: ["0", "0,5", "1", "depende"], a: 2, e: "Todos los casos." },
    { q: "P(dos caras) al lanzar dos monedas:", o: ["1/2", "1/4", "1/3", "2/4"], a: 1, e: "1/2 · 1/2." },
    { q: "Sacar dos cartas sin devolver la primera son sucesos…", o: ["independientes", "dependientes", "incompatibles", "seguros"], a: 1, e: "La baraja cambia." },
    { q: "Si A y B son independientes, P(A ∩ B) =", o: ["P(A) + P(B)", "P(A) · P(B)", "0", "P(A)/P(B)"], a: 1, e: "Producto." },
    { q: "P(B/A) se lee…", o: ["B entre A", "B sabiendo A", "B o A", "B menos A"], a: 1, e: "Condicionada." },
    { q: "P(al menos un 6 en 2 lanzamientos):", o: ["1/3", "11/36", "1/36", "2/6"], a: 1, e: "1 − 25/36." },
    { q: "Tras 5 caras seguidas, P(cara) es…", o: ["menor que 1/2", "1/2", "mayor que 1/2", "0"], a: 1, e: "Sin memoria." },
  ],
  examen: [
    { q: "P(suma 4) con dos dados:", o: ["1/12", "1/9", "1/6", "1/18"], a: 0, e: "(1,3), (2,2), (3,1): 3/36." },
    { q: "Urna 2R y 3A, P(roja):", o: ["2/3", "2/5", "3/5", "1/2"], a: 1, e: "2 de 5." },
    { q: "P(A) = 0,6, P(B) = 0,3, incompatibles. P(A ∪ B) =", o: ["0,9", "0,18", "0,72", "0,3"], a: 0, e: "Suma." },
    { q: "P(A) = 0,5, P(B) = 0,4, independientes. P(A ∩ B) =", o: ["0,9", "0,2", "0,1", "0,45"], a: 1, e: "Producto." },
    { q: "Dos ases sin reemplazamiento (baraja 40):", o: ["1/100", "1/130", "1/160", "1/40"], a: 1, e: "4/40 · 3/39." },
    { q: "P(par / ha salido mayor que 3):", o: ["1/2", "2/3", "1/3", "1/6"], a: 1, e: "{4, 5, 6}: pares 4 y 6." },
    { q: "P(al menos una cara) con 3 monedas:", o: ["7/8", "3/8", "1/2", "1/8"], a: 0, e: "1 − 1/8." },
    { q: "Frecuencia de cara 520 en 1.000 lanzamientos:", o: ["0,52", "5,2", "0,48", "520"], a: 0, e: "520/1.000." },
  ],
  feynman: ["Qué es el espacio muestral y cómo se construye en un experimento compuesto", "Cuándo se puede usar la regla de Laplace y cuándo no", "Cómo se usa un diagrama de árbol con y sin reemplazamiento", "Qué significa una probabilidad condicionada y cómo se lee en una tabla"],
  figura: {
    titulo: "Probabilidad en una mirada",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen: espacio muestral y sucesos, regla de Laplace, reglas de suma y producto, probabilidad condicionada">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Sucesos", "E · unión ∪ · intersección ∩ · contrario Ā · incompatibles", "var(--pen)"], ["Laplace", "P(A) = favorables / posibles (equiprobables)", "var(--leaf)"], ["Reglas", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) · P(Ā) = 1 − P(A)", "var(--red)"], ["Árbol · tabla", "camino = producto · P(B/A) = P(A ∩ B) / P(A)", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="15" font-weight="700" fill="${c}" ${D}>${n}</text><text x="170" y="${43 + i * 50}" font-size="14" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "asnxuGOzX5k", titulo: "Tablas de contingencia, probabilidades", canal: "Academia Internet", vistas: 168869, megusta: 0, busqueda: "tablas de contingencia probabilidad" },
  mapa: mapa("PROBABILIDAD", "var(--inf)", [
    ["Sucesos", "E · ∪ · ∩ · Ā", "var(--pen)"],
    ["Laplace", "favorables / posibles", "var(--leaf)"],
    ["Árboles", "producto y suma", "var(--red)"],
    ["Condicionada", "P(B/A) · tablas", "var(--inf)"],
  ], 230),
  glosario: [
    ["Experimento aleatorio", "Experimento cuyo resultado no se puede predecir."],
    ["Espacio muestral", "Conjunto de todos los resultados posibles, E."],
    ["Suceso", "Subconjunto del espacio muestral."],
    ["Suceso elemental", "Suceso formado por un solo resultado."],
    ["Suceso seguro", "El que siempre ocurre: E."],
    ["Suceso imposible", "El que nunca ocurre: ∅."],
    ["Suceso contrario", "Ā: ocurre cuando no ocurre A."],
    ["Sucesos incompatibles", "Los que no pueden ocurrir a la vez."],
    ["Regla de Laplace", "P(A) = casos favorables / casos posibles, con resultados equiprobables."],
    ["Frecuencia relativa", "Proporción de veces que ocurre un suceso al repetir el experimento."],
    ["Ley de los grandes números", "La frecuencia relativa se acerca a la probabilidad al repetir muchas veces."],
    ["Diagrama de árbol", "Esquema de ramas para experimentos compuestos."],
    ["Sucesos independientes", "Aquellos en los que uno no altera la probabilidad del otro."],
    ["Tabla de contingencia", "Tabla de doble entrada con datos clasificados por dos criterios."],
    ["Probabilidad condicionada", "P(B/A): probabilidad de B sabiendo que ha ocurrido A."],
    ["Falacia del jugador", "Creer que los resultados pasados de un sorteo influyen en los siguientes."],
  ],
  situacion: {
    titulo: "La feria del azar",
    reto: "El instituto organiza una feria solidaria y vuestro grupo debe diseñar un juego de azar justo y divertido, calcular sus probabilidades y comprobarlas experimentalmente, explicando a los visitantes por qué los juegos de casino siempre ganan.",
    pasos: [
      "Diseñad un juego con dados, monedas, cartas o una ruleta de cartulina y escribid sus reglas.",
      "Construid el espacio muestral y calculad la probabilidad de cada premio con Laplace o con un árbol.",
      "Jugad 100 partidas de prueba, anotad los resultados y comparad las frecuencias relativas con las probabilidades teóricas.",
      "Ajustad los premios para que el juego sea justo o deje un pequeño beneficio solidario, y calculad la ganancia media por partida.",
      "Preparad un cartel que explique las probabilidades del juego y por qué las apuestas reales hacen perder dinero a largo plazo.",
    ],
    producto: "El juego montado en la feria, una hoja de cálculos con árbol o tabla y un cartel informativo sobre el azar y las apuestas.",
    evaluacion: ["Describe el espacio muestral y calcula probabilidades correctamente.", "Compara probabilidad teórica y frecuencia relativa.", "Usa árboles o tablas para experimentos compuestos.", "Argumenta de forma crítica sobre los juegos de azar."],
  },
  tarjetas: [
    ["Experimento aleatorio", "No se puede predecir el resultado."],
    ["Espacio muestral", "Todos los resultados posibles."],
    ["0 ≤ P(A) ≤ 1", "Imposible 0, seguro 1."],
    ["Laplace", "Favorables / posibles."],
    ["Contrario", "P(Ā) = 1 − P(A)"],
    ["Incompatibles", "P(A ∪ B) = P(A) + P(B)"],
    ["Compatibles", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"],
    ["Árbol", "Camino: producto; suceso: suma de caminos."],
    ["Independientes", "P(A ∩ B) = P(A) · P(B)"],
    ["Condicionada", "P(B/A) = P(A ∩ B) / P(A)"],
    ["Grandes números", "fr → probabilidad."],
    ["Al menos uno", "Usar el contrario."],
  ],
  familias: ["Jugad a lanzar dos dados 50 veces y anotad las sumas: ¿sale más el 7?", "Hablad de un anuncio de apuestas y calculad juntos la probabilidad real de ganar.", "Interpretad el porcentaje de lluvia del parte meteorológico.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido estocástico: experimentos aleatorios, espacio muestral y sucesos, regla de Laplace, frecuencia relativa y ley de los grandes números, experimentos compuestos, diagramas de árbol, tablas de contingencia, dependencia e independencia y probabilidad condicionada, con análisis crítico de juegos de azar (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Simulaciones con dados reales y con hoja de cálculo.", "Feria del azar con juegos diseñados por el alumnado (situación de aprendizaje).", "Problema de los cumpleaños con los datos de la clase.", "Debate sobre publicidad de apuestas y prevención de la ludopatía."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "GeoGebra: simulaciones de probabilidad", url: "https://www.geogebra.org/" },
    { t: "Dirección General de Ordenación del Juego: juego responsable", url: "https://www.ordenacionjuego.es/" },
  ],
  revisado: "2026-11-13",
};
