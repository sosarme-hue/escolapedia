// Matemáticas 1º ESO · Iniciación al álgebra. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, formula, balanza, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const patron = lienzo("Patrón de cerillas: con n cuadrados en fila se necesitan 3 n más 1 cerillas", `
  ${[1, 2, 3].map((n, k) => { const y = 24 + k * 44; let s = ""; for (let i = 0; i < n; i++) s += `<rect x="${20 + i * 26}" y="${y}" width="26" height="26" fill="none" stroke="var(--sun)" stroke-width="3"/>`; return s + tx(116, y + 18, `n = ${n} → ${3 * n + 1}`, { fs: 12, a: "start", max: 90 }); }).join("")}
  ${tx(130, 164, "cerillas = 3n + 1", { fs: 16, fam: D, c: "var(--red)" })}`, 176);

const traducir = cajas("Del lenguaje habitual al algebraico: el doble de un número, un número más cinco, la mitad y el siguiente", [
  ["El doble", ["2x"]], ["Un número + 5", ["x + 5"]], ["La mitad", ["x/2"]], ["El siguiente", ["x + 1"]],
  ["El triple menos 4", ["3x − 4"]], ["El cuadrado", ["x²"]],
], "Traducir");

const valor = pasos("Valor numérico de 3x al cuadrado menos 2x más 1 cuando x vale 2: sustituir y operar", ["3x² − 2x + 1, con x = 2", "Sustituir: 3 · 2² − 2 · 2 + 1", "Potencia: 3 · 4 − 4 + 1", "= 12 − 4 + 1 = 9"], "Valor numérico");

const monomio = lienzo("Partes de un monomio: coeficiente, parte literal y grado; en menos cinco x al cuadrado y el grado es 3", `
  ${tx(76, 78, "−5", { fs: 34, c: "var(--red)", fam: D })}${tx(150, 78, "x²y", { fs: 34, c: "var(--pen)", fam: D })}
  ${tx(76, 110, "coeficiente", { fs: 12, c: "var(--red)" })}${tx(150, 110, "parte literal", { fs: 12, c: "var(--pen)" })}
  ${tx(130, 146, "grado = 2 + 1 = 3", { fs: 15, fam: D, c: "var(--leaf)" })}${tx(130, 168, "suma de los exponentes de las letras", { fs: 11, c: "var(--muted)" })}`);

const semejantes = comparar("Monomios semejantes tienen la misma parte literal y se pueden sumar; los no semejantes no", [
  ["Semejantes", ["3x² y −7x²", "3x² − 7x²", "= −4x²"], "var(--leaf)"],
  ["No semejantes", ["3x² y 5x", "3x² + 5x", "no se juntan"], "var(--red)"],
], "Sumar monomios");

const fichas = lienzo("Fichas de álgebra: 2x más 3 más x más 1 es 3x más 4; se juntan las barras con las barras y las unidades con las unidades", `
  ${[0, 1].map((i) => `<rect x="${20 + i * 22}" y="26" width="16" height="50" rx="3" fill="var(--pen)" fill-opacity=".6"/>`).join("")}${[0, 1, 2].map((i) => `<rect x="${70 + i * 18}" y="58" width="14" height="14" rx="2" fill="var(--sun)"/>`).join("")}
  ${tx(130, 56, "+", { fs: 20 })}<rect x="150" y="26" width="16" height="50" rx="3" fill="var(--pen)" fill-opacity=".6"/><rect x="176" y="58" width="14" height="14" rx="2" fill="var(--sun)"/>
  ${tx(60, 98, "2x + 3", { fs: 13, fam: D })}${tx(170, 98, "x + 1", { fs: 13, fam: D })}
  ${tx(130, 136, "= 3x + 4", { fs: 20, fam: D, c: "var(--leaf)" })}${tx(130, 162, "barras con barras, cuadrados con cuadrados", { fs: 10.5, c: "var(--muted)" })}`, 176);

const producto = formula("Multiplicar monomios: se multiplican los coeficientes y se suman los exponentes de cada letra", "3x² · 4x³ = 12x⁵", ["Coeficientes: 3 · 4 = 12", "Letras: x² · x³ = x⁵"], "var(--inf)");

const distributiva = lienzo("Propiedad distributiva con un rectángulo: 3 por x más 2 es 3x más 6", `
  <rect x="24" y="40" width="130" height="66" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><rect x="154" y="40" width="66" height="66" fill="var(--sun)" fill-opacity=".3" stroke="var(--sun)" stroke-width="2"/>
  ${tx(89, 32, "x", { fs: 14, c: "var(--pen)" })}${tx(187, 32, "2", { fs: 14, c: "var(--sun)" })}${tx(14, 78, "3", { fs: 14, c: "var(--red)" })}
  ${tx(89, 78, "3x", { fs: 18, fam: D, c: "var(--pen)" })}${tx(187, 78, "6", { fs: 18, fam: D, c: "var(--sun)" })}
  ${tx(130, 140, "3(x + 2) = 3x + 6", { fs: 17, fam: D })}${tx(130, 164, "y al revés: sacar factor común", { fs: 11.5, c: "var(--muted)" })}`, 176);

const igualdades = comparar("Identidad frente a ecuación: la identidad se cumple siempre y la ecuación solo para algunos valores", [
  ["Identidad", ["2(x + 1) = 2x + 2", "cierta para todo x", "x = 5: 12 = 12"], "var(--leaf)"],
  ["Ecuación", ["2x + 1 = 7", "solo si x = 3", "x = 5: 11 ≠ 7"], "var(--red)"],
], "Dos tipos de igualdades");

const bal = balanza("Una ecuación es como una balanza en equilibrio: x más 3 pesa lo mismo que 8", "x + 3", "8", "x = 5");

const formulas = cajas("Fórmulas conocidas escritas con letras: perímetro, área, velocidad y precio", [
  ["Perímetro cuadrado", ["P = 4l"]], ["Área rectángulo", ["A = b · h"]], ["Velocidad", ["v = d / t"]], ["Precio con IVA", ["P = 1,21 · p"]],
], "El álgebra en las fórmulas");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Iniciación al álgebra",
  minutos: 100,
  objetivos: [
    "Usar letras para representar números desconocidos o que varían",
    "Traducir enunciados del lenguaje habitual al algebraico y al revés",
    "Calcular el valor numérico de una expresión algebraica",
    "Reconocer monomios, sus partes y su grado",
    "Sumar, restar y multiplicar monomios y aplicar la propiedad distributiva",
    "Distinguir identidades y ecuaciones y comprobar soluciones",
  ],
  claves: ["álgebra", "expresión algebraica", "valor numérico", "monomio", "coeficiente", "parte literal", "ecuación"],
  pregunta: {
    texto: "Piensa un número, multiplícalo por 2, súmale 10, divide entre 2 y réstale el número que pensaste. ¿Por qué siempre sale 5?",
    respuesta: "Llamemos <b>x</b> al número: 2x → 2x + 10 → (2x + 10) : 2 = x + 5 → x + 5 − x = <mark>5</mark>. Con una letra demostramos que el truco funciona para <b>cualquier</b> número. Eso es el <b>álgebra</b>.",
  },
  lectura: {
    titulo: "El libro de completar y equilibrar",
    html: `<p>Hacia el año 820, en Bagdad, existía un centro de sabiduría llamado la Casa de la Sabiduría, donde se traducían y estudiaban libros de todo el mundo. Allí trabajaba el matemático persa <b>Al-Juarismi</b>, que escribió un libro con un título larguísimo: «Compendio sobre el cálculo por completar y equilibrar». En árabe, «completar» se decía <i>al-jabr</i>, y de ahí viene nuestra palabra <b>álgebra</b>. Y de su propio nombre, latinizado como Algoritmi, viene la palabra «algoritmo».</p><p>Curiosamente, Al-Juarismi no usaba letras: escribía todos los problemas con palabras, como «una cosa más diez es igual a…». Las letras llegaron mucho después. En el siglo XVI, el francés François Viète empezó a usar vocales para lo desconocido y consonantes para lo conocido, y en el XVII René Descartes popularizó las últimas letras del alfabeto, x, y, z, para las incógnitas.</p><p>Gracias a las letras, podemos escribir reglas que valen para todos los números a la vez, resolver problemas en los que hay un dato escondido y expresar fórmulas como la del área de un rectángulo. En este tema darás tus primeros pasos en este idioma de las matemáticas.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Las letras en matemáticas</h3><p>En álgebra se usan <b>letras</b> para representar números. Una letra puede tener tres papeles distintos:</p><ul><li><b>Número desconocido</b> (incógnita): «x + 3 = 8» busca un número concreto.</li><li><b>Número cualquiera</b> (generalizar): «a + b = b + a» dice que la suma es conmutativa para todos los números.</li><li><b>Cantidad que varía</b> (variable): en «precio = 2 · kilos», los kilos pueden ser 1, 2, 3… y el precio cambia con ellos.</li></ul><p>En álgebra, el signo de multiplicar se suele omitir: 3 · x se escribe <mark>3x</mark>, y a · b se escribe ab. Por eso no se usa la cruz ×, que se confundiría con la letra x. Tampoco se escribe el 1: 1x es simplemente x. Y cuidado: 3x significa 3 · x, no «treinta y algo»; si x = 4, entonces 3x = 12, no 34.</p>` },
    { html: `<h3>1.2 Patrones y generalización</h3><p>Una de las grandes utilidades del álgebra es descubrir y expresar <b>patrones</b>. Observa el dibujo: con cerillas se forman cuadrados en fila. Para 1 cuadrado hacen falta 4 cerillas; para 2, 7; para 3, 10. ¿Y para 100 cuadrados?</p><p>Cada cuadrado nuevo añade 3 cerillas, y al principio hay una cerilla extra (el lado izquierdo). Por tanto, para n cuadrados hacen falta <mark>3n + 1</mark> cerillas. Para 100 cuadrados: 3 · 100 + 1 = 301. Sin la fórmula tendríamos que dibujarlos todos.</p><p>Otros patrones: los números pares son 2n; los impares, 2n + 1 (o 2n − 1); los múltiplos de 5, 5n; y los números que dan resto 1 al dividir entre 3 son 3n + 1. En la tabla de valores de un patrón, si al aumentar n en 1 la cantidad aumenta siempre lo mismo, la fórmula será de la forma «a · n + b».</p>`, svg: patron },
    { html: `<h3>1.3 Del lenguaje habitual al algebraico</h3><p>Para resolver problemas con álgebra hay que <b>traducir</b> enunciados al lenguaje algebraico. Si x es un número:</p>${tabla(["Lenguaje habitual", "Lenguaje algebraico"], [["El doble de un número", "2x"], ["El triple de un número menos 4", "3x − 4"], ["La mitad de un número", "x/2"], ["El siguiente / el anterior", "x + 1 / x − 1"], ["El cuadrado de un número", "x²"], ["Dos números consecutivos", "x y x + 1"], ["El doble de un número más 5", "2x + 5"], ["El doble de (un número más 5)", "2(x + 5)"]])}<p>Fíjate en las dos últimas filas: son distintas. En 2x + 5 se duplica el número y después se suma 5; en 2(x + 5) se suma primero y se duplica el total. Las comas y los paréntesis importan. También se traduce al revés: «x + (x + 1) + (x + 2)» es «la suma de tres números consecutivos».</p>`, svg: traducir },
    { html: `<h3>1.4 Expresiones algebraicas y valor numérico</h3><p>Una <b>expresión algebraica</b> es una combinación de números y letras unidos por operaciones: 3x − 4, a² + b², 2(x + y). Las expresiones algebraicas sirven para escribir fórmulas: el perímetro de un rectángulo de base b y altura h es 2b + 2h.</p><p>El <b>valor numérico</b> de una expresión es el número que se obtiene al <b>sustituir</b> las letras por números y hacer las operaciones respetando la jerarquía. Valor de 3x² − 2x + 1 para x = 2: 3 · 2² − 2 · 2 + 1 = 3 · 4 − 4 + 1 = <mark>9</mark>.</p><p>Al sustituir números negativos, ponlos <b>entre paréntesis</b>: para x = −1, 3x² − 2x + 1 = 3 · (−1)² − 2 · (−1) + 1 = 3 + 2 + 1 = 6. Sin paréntesis es muy fácil equivocarse con los signos. Una misma expresión tiene distintos valores numéricos según los valores de las letras.</p>`, svg: valor, video: vb("algB") },
    { html: `<h3>2.1 Los monomios</h3><p>Un <b>monomio</b> es la expresión algebraica más sencilla: un número multiplicado por una o varias letras con exponentes naturales. Por ejemplo: 7x, −5x²y, ab, x³. En cambio, x + 3 no es un monomio (hay una suma) ni 2/x tampoco (la letra está dividiendo).</p><p>Partes de un monomio:</p><ul><li>El <b>coeficiente</b>: el número. En −5x²y es −5. Si no aparece, es 1 (en x³ el coeficiente es 1) o −1 (en −ab).</li><li>La <b>parte literal</b>: las letras con sus exponentes. En −5x²y es x²y.</li><li>El <b>grado</b>: la suma de los exponentes de las letras. −5x²y tiene grado 2 + 1 = 3. Un número solo, como 8, es un monomio de grado 0.</li></ul><p>Los monomios son los «ladrillos» del álgebra: los polinomios, que estudiarás en 2º y 3º, son sumas de monomios.</p>`, svg: monomio },
    { html: `<h3>2.2 Sumar y restar monomios</h3><p>Dos monomios son <b>semejantes</b> si tienen <b>exactamente la misma parte literal</b>: 3x² y −7x² lo son; 3x² y 5x no (los exponentes son distintos); 2xy y 4yx sí (el orden de las letras no importa).</p><p>Solo se pueden sumar o restar monomios semejantes, y el resultado se obtiene <b>sumando o restando los coeficientes</b> y dejando la misma parte literal: 3x² − 7x² = <mark>−4x²</mark>. Es como sumar objetos del mismo tipo: 3 manzanas más 2 manzanas son 5 manzanas, pero 3 manzanas más 2 peras no son «5 manzanperas».</p><p>Si los monomios no son semejantes, la suma se deja indicada: 3x² + 5x no se puede simplificar más. Por eso, para simplificar una expresión larga, se agrupan los términos semejantes: 4x + 3 − x + 5 = (4x − x) + (3 + 5) = 3x + 8. Este proceso se llama <b>reducir términos semejantes</b>.</p>`, svg: semejantes },
    { html: `<h3>2.3 Reducir expresiones con fichas</h3><p>Una buena forma de «ver» el álgebra es con <b>fichas</b>: una barra representa x y un cuadradito, una unidad. La expresión 2x + 3 son dos barras y tres cuadraditos.</p><p>Para sumar 2x + 3 y x + 1 se juntan todas las fichas y se agrupan por tipos: 3 barras y 4 cuadraditos, es decir, <mark>3x + 4</mark>. Lo que nunca se puede hacer es juntar barras con cuadraditos: 3x + 4 no es 7x.</p><p>Con paréntesis precedidos de un signo menos hay que tener cuidado, como con los enteros: (5x + 2) − (3x − 4) = 5x + 2 − 3x + 4 = 2x + 6. El menos de delante cambia los signos de todo lo que hay dentro. Comprueba siempre con un valor: si x = 1, (5 + 2) − (3 − 4) = 7 + 1 = 8 y 2 · 1 + 6 = 8 ✓.</p>`, svg: fichas },
    { html: `<h3>2.4 Multiplicar monomios</h3><p>Para <b>multiplicar</b> monomios no hace falta que sean semejantes. Se multiplican los <b>coeficientes</b> entre sí y las <b>partes literales</b> entre sí, sumando los exponentes de las letras iguales (como en las potencias): 3x² · 4x³ = 12x⁵; (−2a) · 5ab = −10a²b.</p><p>Para multiplicar un número por un monomio se multiplica solo el coeficiente: 4 · 3x = 12x. Y para dividir monomios se dividen los coeficientes y se restan los exponentes: 12x⁵ : 4x² = 3x³ (si el resultado tiene exponentes negativos, ya no es un monomio).</p><p>Compara la suma y el producto de los mismos monomios: x + x = 2x, pero x · x = x². Y 3x + 2x = 5x, mientras que 3x · 2x = 6x². Confundirlos es uno de los errores más frecuentes al empezar.</p>`, svg: producto },
    { html: `<h3>2.5 La propiedad distributiva y el factor común</h3><p>La propiedad distributiva también vale con letras: <mark>a(b + c) = ab + ac</mark>. Para quitar un paréntesis multiplicado por un número o un monomio, se multiplica por <b>cada</b> término de dentro: 3(x + 2) = 3x + 6; −2(x − 5) = −2x + 10; x(x + 4) = x² + 4x.</p><p>El dibujo lo explica con áreas: un rectángulo de altura 3 y base x + 2 tiene un área igual a la suma de las áreas de sus dos partes, 3x y 6.</p><p>Leída al revés, la distributiva sirve para <b>sacar factor común</b>: se busca lo que se repite en todos los términos y se saca fuera del paréntesis. 6x + 9 = 3(2x + 3); x² + 5x = x(x + 5); 4ab − 2a = 2a(2b − 1). Sacar factor común es una herramienta que usarás muchísimo para simplificar fracciones algebraicas y resolver ecuaciones en cursos siguientes.</p>`, svg: distributiva, video: vb("algB2") },
    { html: `<h3>3.1 Igualdades: identidades y ecuaciones</h3><p>Una <b>igualdad algebraica</b> está formada por dos expresiones separadas por el signo =. Hay dos tipos:</p><ul><li>Una <b>identidad</b> es cierta para <b>cualquier</b> valor de las letras: 2(x + 1) = 2x + 2. Prueba x = 5: 12 = 12. Prueba x = 0: 2 = 2. Siempre se cumple.</li><li>Una <b>ecuación</b> solo es cierta para <b>algunos</b> valores, que se llaman <b>soluciones</b>: 2x + 1 = 7 solo se cumple para x = 3.</li></ul><p>Para <b>comprobar</b> si un número es solución de una ecuación, se sustituye y se mira si los dos lados dan lo mismo. ¿Es x = 4 solución de 3x − 2 = x + 6? Izquierda: 3 · 4 − 2 = 10. Derecha: 4 + 6 = 10. Sí, es solución.</p><p>Las identidades son las «reglas» del álgebra, y las ecuaciones son «adivinanzas» con un número escondido. En el tema siguiente aprenderás a resolverlas de forma ordenada.</p>`, svg: igualdades },
    { html: `<h3>3.2 La ecuación como balanza</h3><p>Una ecuación se puede imaginar como una <b>balanza en equilibrio</b>: lo que hay en el platillo izquierdo pesa lo mismo que lo del derecho. En x + 3 = 8, una caja misteriosa x y 3 pesas de 1 kg equilibran 8 pesas.</p><p>Para descubrir cuánto pesa la caja, podemos quitar <b>lo mismo</b> de los dos platillos sin que la balanza se desequilibre: quitamos 3 pesas de cada lado y queda x = 5. Esta idea, «hacer lo mismo en los dos lados», es exactamente lo que Al-Juarismi llamaba «equilibrar».</p><p>Algunas ecuaciones sencillas se pueden resolver mentalmente o probando: x + 7 = 12 → x = 5; 4x = 28 → x = 7; x/3 = 6 → x = 18. Para las más complicadas necesitarás el método que verás en el tema de ecuaciones.</p>`, svg: bal },
    { html: `<h3>3.3 El álgebra para generalizar y demostrar</h3><p>El álgebra permite <b>demostrar</b> que algo es cierto para todos los números, no solo para los ejemplos que probamos. Vamos a demostrar el truco de la pregunta inicial: piensa un número x, multiplícalo por 2 (2x), súmale 10 (2x + 10), divide entre 2 (x + 5) y resta el número pensado (x + 5 − x = 5). Siempre sale 5, sea cual sea x.</p><p>Otro ejemplo: «la suma de tres números consecutivos es siempre múltiplo de 3». Con letras: x + (x + 1) + (x + 2) = 3x + 3 = 3(x + 1). Es 3 multiplicado por algo, luego es múltiplo de 3.</p><p>Además, muchas fórmulas de la vida real son expresiones algebraicas: el perímetro del cuadrado (P = 4l), el área del rectángulo (A = b · h), la velocidad (v = d/t) o el precio con IVA (P = 1,21 · p). Saber leerlas y sustituir valores es una competencia básica en ciencias, tecnología y economía.</p>`, svg: formulas, video: vg("algV") },
  ],
  ejemplos: [
    { enunciado: "Traduce: «la suma de un número y su doble es 21».", pasos: ["Número: x; su doble: 2x.", "Suma: x + 2x."], resultado: "x + 2x = 21 (es decir, 3x = 21)." },
    { enunciado: "Calcula el valor numérico de 2a² − 3b para a = −2, b = 4.", pasos: ["2 · (−2)² − 3 · 4.", "2 · 4 − 12 = 8 − 12."], resultado: "−4." },
    { enunciado: "Indica coeficiente, parte literal y grado de −4a³b².", pasos: ["Coeficiente: −4.", "Parte literal: a³b².", "Grado: 3 + 2 = 5."], resultado: "−4; a³b²; grado 5." },
    { enunciado: "Reduce: 5x − 3 + 2x² − x + 7 − x².", pasos: ["x²: 2x² − x² = x².", "x: 5x − x = 4x.", "Números: −3 + 7 = 4."], resultado: "x² + 4x + 4." },
    { enunciado: "Quita paréntesis y reduce: 3(2x − 1) − 2(x + 4).", pasos: ["6x − 3 − 2x − 8.", "4x − 11."], resultado: "4x − 11." },
    { enunciado: "Saca factor común: 12x² − 8x.", pasos: ["Factor común de 12 y 8: 4. Letra común: x.", "12x² : 4x = 3x; 8x : 4x = 2."], resultado: "4x(3x − 2)." },
  ],
  errores: [
    "Pensar que 3x con x = 4 es 34: es 3 · 4 = 12.",
    "Sumar monomios no semejantes: 3x + 2 no es 5x.",
    "Confundir x + x = 2x con x · x = x².",
    "Al quitar un paréntesis con un menos delante, cambiar solo el primer signo.",
    "Olvidar multiplicar todos los términos en la distributiva: 3(x + 2) no es 3x + 2.",
    "Sustituir un número negativo sin paréntesis: −2² no es lo mismo que (−2)².",
  ],
  ejercicios: [
    { nivel: "básico", q: "Traduce al lenguaje algebraico: a) el triple de un número; b) un número menos 7; c) la mitad de un número más 1; d) el cuadrado de un número.", sol: "a) 3x b) x − 7 c) x/2 + 1 d) x²." },
    { nivel: "básico", q: "Escribe con palabras: 2x + 1; x − 3; 5(x + 2).", sol: "El doble de un número más uno; un número menos tres; el quíntuple de un número más dos (de la suma)." },
    { nivel: "básico", q: "Escribe la expresión de: tres números consecutivos; un número par; un número impar.", sol: "x, x + 1, x + 2; 2n; 2n + 1." },
    { nivel: "básico", q: "Calcula el valor numérico de 5x − 3 para x = 0, x = 2 y x = −1.", sol: "−3; 7; −8." },
    { nivel: "básico", q: "Calcula el valor de a + 2b para a = 3 y b = 5.", sol: "3 + 10 = 13." },
    { nivel: "básico", q: "¿Cuáles son monomios? 4x, x + 1, −y², 3/x, 7.", sol: "4x, −y² y 7." },
    { nivel: "básico", q: "Indica coeficiente, parte literal y grado: 6x², −ab, x³y.", sol: "6, x², 2; −1, ab, 2; 1, x³y, 4." },
    { nivel: "básico", q: "¿Son semejantes? a) 4x² y −x²; b) 3x y 3y; c) 2ab y −5ba.", sol: "a) Sí. b) No. c) Sí." },
    { nivel: "básico", q: "Calcula: 5x + 3x; 7a − 9a; 2x² + x² − 4x².", sol: "8x; −2a; −x²." },
    { nivel: "básico", q: "Calcula: 3x · 2x; 4a · (−5b); x² · x³.", sol: "6x²; −20ab; x⁵." },
    { nivel: "básico", q: "Aplica la distributiva: 4(x + 3); 2(5 − x).", sol: "4x + 12; 10 − 2x." },
    { nivel: "básico", q: "Comprueba si x = 3 es solución de 2x + 4 = 10.", sol: "2 · 3 + 4 = 10 ✓. Sí." },
    { nivel: "medio", q: "Con cerillas se forman triángulos en fila (comparten lado). 1 triángulo: 3 cerillas; 2: 5; 3: 7. Escribe la fórmula para n triángulos y calcula para 50.", sol: "Cada triángulo añade 2: 2n + 1. Para 50: 101 cerillas." },
    { nivel: "medio", q: "Calcula el valor de 2x² − x + 3 para x = −2.", sol: "2 · 4 − (−2) + 3 = 8 + 2 + 3 = 13." },
    { nivel: "medio", q: "Reduce: 3x + 5 − 2x + 1 − 4x.", sol: "(3 − 2 − 4)x + 6 = −3x + 6." },
    { nivel: "medio", q: "Reduce: 4a² − 2a + 3a² + 5a − 1.", sol: "7a² + 3a − 1." },
    { nivel: "medio", q: "Quita paréntesis y reduce: (6x − 2) − (4x − 7).", sol: "6x − 2 − 4x + 7 = 2x + 5." },
    { nivel: "medio", q: "Quita paréntesis y reduce: 5(x − 2) + 3(2x + 1).", sol: "5x − 10 + 6x + 3 = 11x − 7." },
    { nivel: "medio", q: "Calcula: (−2x²) · 3x · (−x).", sol: "Coeficientes: (−2) · 3 · (−1) = 6. Letras: x⁴. Resultado: 6x⁴." },
    { nivel: "medio", q: "Saca factor común: 5x + 15; 6a² − 9a; x³ + x².", sol: "5(x + 3); 3a(2a − 3); x²(x + 1)." },
    { nivel: "medio", q: "Escribe el perímetro y el área de un rectángulo de base x + 3 y altura 2.", sol: "P = 2(x + 3) + 2 · 2 = 2x + 10. A = 2(x + 3) = 2x + 6." },
    { nivel: "medio", q: "Di si es identidad o ecuación: a) 3(x + 1) = 3x + 3; b) 3x + 1 = 10.", sol: "a) Identidad (cierta siempre). b) Ecuación (solo x = 3)." },
    { nivel: "medio", q: "Resuelve mentalmente: x + 9 = 15; 5x = 35; x − 4 = 11; x/2 = 8.", sol: "6; 7; 15; 16." },
    { nivel: "avanzado", q: "Demuestra que la suma de dos números pares consecutivos más 2 es múltiplo de 4.", sol: "2n + (2n + 2) + 2 = 4n + 4 = 4(n + 1): múltiplo de 4." },
    { nivel: "avanzado", q: "Demuestra el truco: «piensa un número, súmale 3, multiplica por 2, resta 4 y divide entre 2; sale el número pensado más 1».", sol: "(2(x + 3) − 4) : 2 = (2x + 2) : 2 = x + 1." },
    { nivel: "avanzado", q: "Reduce: 2x(x − 3) − x(x + 1) + 7x.", sol: "2x² − 6x − x² − x + 7x = x²." },
    { nivel: "avanzado", q: "Un taxi cobra 3,50 € de bajada de bandera y 1,20 € por km. Escribe la expresión del precio para x km y calcula el de 12 km.", sol: "P = 3,50 + 1,20x. Para 12 km: 3,50 + 14,40 = 17,90 €." },
    { nivel: "avanzado", q: "Encuentra el error: «3x + 2x = 5x²».", sol: "Al sumar monomios semejantes se suman los coeficientes y la parte literal no cambia: 3x + 2x = 5x." },
    { nivel: "avanzado", q: "Escribe una expresión para «la suma de un número y el siguiente es 31» y encuentra el número probando o razonando.", sol: "x + (x + 1) = 31 → 2x + 1 = 31 → 2x = 30 → x = 15 (y 16)." },
    { nivel: "avanzado", q: "Halla el valor de a para que 3x + a sea igual a 3(x + 4) para todo x.", sol: "3(x + 4) = 3x + 12, así que a = 12." },
  ],
  quiz: [
    { q: "«El doble de un número» se escribe…", o: ["x²", "2x", "x + 2", "x/2"], a: 1, e: "Multiplicar por 2." },
    { q: "«El siguiente de un número» es…", o: ["x − 1", "2x", "x + 1", "x"], a: 2, e: "Uno más." },
    { q: "Si x = 4, 3x vale…", o: ["34", "7", "12", "43"], a: 2, e: "3 · 4." },
    { q: "Valor de x² + 1 para x = −3:", o: ["−8", "10", "7", "−5"], a: 1, e: "9 + 1." },
    { q: "Un número impar se puede escribir…", o: ["2n", "2n + 1", "n + 2", "n²"], a: 1, e: "Par más uno." },
    { q: "¿Cuál es un monomio?", o: ["x + 1", "3/x", "−7x²", "x − y"], a: 2, e: "Número por letras." },
    { q: "El coeficiente de −x³ es…", o: ["3", "−1", "1", "−3"], a: 1, e: "−1 · x³." },
    { q: "El grado de 5x²y³ es…", o: ["2", "3", "5", "6"], a: 2, e: "2 + 3." },
    { q: "¿Son semejantes 4xy y −yx?", o: ["Sí", "No", "Solo si x = y", "Nunca"], a: 0, e: "Misma parte literal." },
    { q: "5x − 2x =", o: ["3", "3x", "7x", "3x²"], a: 1, e: "Restar coeficientes." },
    { q: "2x + 3 =", o: ["5x", "5", "2x + 3", "6x"], a: 2, e: "No son semejantes." },
    { q: "x · x =", o: ["2x", "x²", "x", "2x²"], a: 1, e: "Se suman exponentes." },
    { q: "2a · 3a =", o: ["5a", "6a", "6a²", "5a²"], a: 2, e: "2 · 3 y a · a." },
    { q: "3(x − 2) =", o: ["3x − 2", "3x − 6", "3x + 6", "x − 6"], a: 1, e: "Distributiva." },
    { q: "−(x − 5) =", o: ["−x − 5", "−x + 5", "x + 5", "x − 5"], a: 1, e: "Cambian los dos signos." },
    { q: "Factor común de 4x + 8:", o: ["4(x + 2)", "4(x + 8)", "2(x + 4)", "x(4 + 8)"], a: 0, e: "El mayor factor común es 4." },
    { q: "2(x + 1) = 2x + 2 es…", o: ["una ecuación", "una identidad", "falsa", "un monomio"], a: 1, e: "Cierta para todo x." },
    { q: "La solución de x + 6 = 10 es…", o: ["16", "4", "−4", "60"], a: 1, e: "10 − 6." },
    { q: "¿Es x = 2 solución de 3x − 1 = 5?", o: ["Sí", "No", "Depende", "No se puede saber"], a: 0, e: "6 − 1 = 5." },
    { q: "La palabra «álgebra» viene del…", o: ["griego", "latín", "árabe", "inglés"], a: 2, e: "Al-jabr, de Al-Juarismi." },
  ],
  examen: [
    { q: "«La mitad de un número menos 3»:", o: ["x/2 − 3", "(x − 3)/2", "2x − 3", "x − 3/2"], a: 0, e: "Primero la mitad." },
    { q: "Valor de 2a − b² para a = 3, b = −2:", o: ["2", "10", "8", "−2"], a: 0, e: "6 − 4." },
    { q: "Grado de −8a²b:", o: ["−8", "2", "3", "1"], a: 2, e: "2 + 1." },
    { q: "6x − 4 + 2x + 9 =", o: ["8x + 5", "13x", "4x + 5", "8x − 13"], a: 0, e: "Agrupar." },
    { q: "(−3x) · 4x² =", o: ["−12x²", "−12x³", "x³", "12x³"], a: 1, e: "Coeficientes y exponentes." },
    { q: "2(3x + 1) − 4x =", o: ["2x + 2", "2x + 1", "10x + 2", "6x − 3"], a: 0, e: "6x + 2 − 4x." },
    { q: "9x² − 6x en factor común:", o: ["3x(3x − 2)", "3(3x − 2)", "x(9 − 6)", "9x(x − 6)"], a: 0, e: "Factor 3x." },
    { q: "La solución de 4x = 24 es…", o: ["20", "28", "6", "96"], a: 2, e: "24 : 4." },
  ],
  feynman: ["Para qué sirven las letras en matemáticas", "Qué es un monomio y cuándo se pueden sumar dos monomios", "Por qué x + x = 2x pero x · x = x²", "Qué diferencia hay entre una identidad y una ecuación"],
  figura: {
    titulo: "El álgebra en un vistazo",
    svg: resumen("Resumen del tema de iniciación al álgebra", [
      ["Traducir", "doble 2x · mitad x/2 · siguiente x + 1 · cuadrado x²", "var(--pen)"],
      ["Valor numérico", "sustituir (negativos entre paréntesis) y operar", "var(--leaf)"],
      ["Monomio", "coeficiente · parte literal · grado (suma de exponentes)", "var(--sun)"],
      ["Operar", "+ y −: solo semejantes · ·: coeficientes y exponentes", "var(--inf)"],
      ["Igualdades", "identidad: siempre · ecuación: solo la solución", "var(--red)"],
    ]),
  },
  video: vg("algV"),
  mapa: mapa("ÁLGEBRA", "var(--inf)", [
    ["Lenguaje", "traducir · patrones", "var(--pen)"],
    ["Expresiones", "valor numérico · fórmulas", "var(--leaf)"],
    ["Monomios", "semejantes · producto", "var(--sun)"],
    ["Igualdades", "identidades · ecuaciones", "var(--red)"],
  ], 250),
  glosario: [
    ["Álgebra", "Parte de las matemáticas que usa letras para representar números."],
    ["Expresión algebraica", "Combinación de números y letras unidos por operaciones."],
    ["Variable", "Letra que puede tomar distintos valores."],
    ["Incógnita", "Letra que representa un número desconocido en una ecuación."],
    ["Valor numérico", "Resultado de sustituir las letras por números y operar."],
    ["Monomio", "Producto de un número por letras con exponentes naturales."],
    ["Coeficiente", "Parte numérica de un monomio."],
    ["Parte literal", "Letras de un monomio con sus exponentes."],
    ["Grado de un monomio", "Suma de los exponentes de sus letras."],
    ["Monomios semejantes", "Los que tienen la misma parte literal."],
    ["Factor común", "Factor que se repite en todos los términos y se saca fuera del paréntesis."],
    ["Identidad", "Igualdad que se cumple para cualquier valor de las letras."],
    ["Ecuación", "Igualdad que solo se cumple para algunos valores."],
    ["Solución", "Valor que hace cierta una ecuación."],
  ],
  situacion: {
    titulo: "Magos del álgebra",
    reto: "Vais a inventar y explicar trucos de magia matemática que siempre funcionan, y a demostrar con álgebra por qué funcionan.",
    pasos: [
      "Probad varios trucos de «piensa un número» y comprobad que siempre aciertan con distintos números.",
      "Traducid cada paso del truco al lenguaje algebraico y simplificad la expresión para ver por qué funciona.",
      "Inventad un truco propio de al menos cinco pasos y demostrad que funciona con álgebra.",
      "Probad vuestro truco con compañeros de otra clase o con la familia.",
      "Preparad una explicación en la que se vea la traducción paso a paso.",
    ],
    producto: "Un vídeo corto o una presentación con el truco y su demostración algebraica.",
    evaluacion: ["Traduce correctamente cada paso al lenguaje algebraico.", "Simplifica expresiones agrupando términos semejantes.", "Justifica que el truco funciona para cualquier número.", "Comunica la explicación con claridad."],
  },
  tarjetas: [
    ["3x", "3 · x"], ["El doble / la mitad", "2x / x/2"], ["Consecutivos", "x, x + 1, x + 2"],
    ["Valor numérico", "Sustituir y operar"], ["Monomio", "Coeficiente · parte literal"], ["Grado", "Suma de exponentes"],
    ["Semejantes", "Misma parte literal"], ["Sumar monomios", "Sumar coeficientes"], ["x · x", "x²"],
    ["a(b + c)", "ab + ac"], ["Identidad", "Cierta para todo valor"], ["Ecuación", "Cierta solo para la solución"],
  ],
  familias: ["Haced juntos trucos de «piensa un número» y tratad de descubrir por qué funcionan.", "Buscad patrones en baldosas, escaleras o filas de sillas y escribid una fórmula.", "Calculad el precio de un taxi o de una tarifa de móvil con una expresión con letras.", "Jugad a traducir frases a lenguaje algebraico por turnos."],
  profesores: {
    saberes: "Sentido algebraico: patrones y generalización, uso de letras, lenguaje algebraico, expresiones algebraicas, valor numérico, monomios y operaciones básicas, igualdades e iniciación a las ecuaciones (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Patrones con cerillas, palillos o policubos para generalizar.", "Fichas de álgebra (algeblocks) para sumar y multiplicar.", "Trucos de magia con demostración algebraica.", "Balanzas virtuales o reales para introducir las ecuaciones."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): lenguaje algebraico", url: "https://proyectodescartes.org/" }, { t: "Wikipedia: Al-Juarismi", url: "https://es.wikipedia.org/wiki/Al-Juarismi" }],
  revisado: REV,
};
