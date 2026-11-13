// Matemáticas A 4º ESO · Potencias, raíces y notación científica. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, comparar, barras } = require("./_eso4L2-mata");

const cuadros = lienzo("Dos elevado a cuatro como cuatro factores iguales que dan 16", `
  ${tx(130, 30, "2⁴ = 2 · 2 · 2 · 2 = 16", { fs: 17, c: "var(--pen)" })}
  ${[0, 1, 2, 3].map((i) => `<rect x="${28 + i * 54}" y="56" width="42" height="42" rx="8" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2"/>${tx(49 + i * 54, 84, "2", { fs: 18, c: "var(--pen)" })}`).join("")}
  <path d="M28 112 H232" stroke="var(--muted)" stroke-width="2"/>${tx(130, 132, "base 2 · exponente 4", { fs: 12.5, c: "var(--muted)" })}${tx(130, 156, "el exponente cuenta los factores", { fs: 12, w: 400 })}`);

const props = cajas("Propiedades de las potencias de la misma base: producto suma exponentes, cociente los resta, potencia de potencia los multiplica y exponente cero da uno", [
  ["Producto", ["aᵐ · aⁿ = aᵐ⁺ⁿ", "2³ · 2⁴ = 2⁷"]], ["Cociente", ["aᵐ : aⁿ = aᵐ⁻ⁿ", "5⁶ : 5² = 5⁴"]],
  ["Potencia", ["(aᵐ)ⁿ = aᵐ·ⁿ", "(3²)³ = 3⁶"]], ["Exponente 0", ["a⁰ = 1", "7⁰ = 1"]],
], "Misma base: se opera con exponentes");

const negativos = barras("Potencias de 2 desde dos elevado a menos dos hasta dos elevado a dos: un cuarto, un medio, 1, 2 y 4", [["2⁻²", 0.25], ["2⁻¹", 0.5], ["2⁰", 1], ["2¹", 2], ["2²", 4]], { titulo: "Cada paso a la izquierda divide entre 2", fmt: (v) => ({ 0.25: "1/4", 0.5: "1/2" }[v] || v), c: "var(--leaf)" });

const signos = comparar("Signo de las potencias de base negativa: exponente par da positivo, exponente impar da negativo", [
  ["Exponente par", ["(−2)⁴ = +16", "(−1)¹⁰ = +1", "resultado +"], "var(--leaf)"],
  ["Exponente impar", ["(−2)³ = −8", "(−1)⁷ = −1", "resultado −"], "var(--red)"],
], "Base negativa");

const productoBase = cajas("Potencia de un producto y de un cociente: el exponente se reparte entre los factores", [
  ["(a · b)ⁿ", ["= aⁿ · bⁿ", "(2·5)³ = 1000"]], ["(a / b)ⁿ", ["= aⁿ / bⁿ", "(2/3)² = 4/9"]],
  ["(a / b)⁻ⁿ", ["= (b / a)ⁿ", "(2/3)⁻² = 9/4"]], ["¡Ojo!", ["(a + b)² ≠ a² + b²", "(1+2)² = 9"], "var(--red)"],
], "Repartir el exponente");

const jerarquia = pasos("Orden de las operaciones con potencias: paréntesis, potencias y raíces, multiplicaciones y divisiones, sumas y restas", ["Paréntesis: (3 + 1)² = 4²", "Potencias y raíces: 4² = 16", "× y ÷: 2 · 16 = 32", "+ y −: 5 + 32 = 37"], "5 + 2 · (3 + 1)² = 37");

const raizArea = lienzo("Un cuadrado de área 49 tiene lado 7 y un cubo de volumen 8 tiene arista 2", `
  ${[...Array(7)].map((_, i) => [...Array(7)].map((_, j) => `<rect x="${18 + i * 14}" y="${36 + j * 14}" width="13" height="13" fill="var(--pen)" fill-opacity="${(i + j) % 2 ? 0.22 : 0.4}"/>`).join("")).join("")}
  ${tx(67, 26, "área 49 → lado 7", { fs: 11.5, c: "var(--pen)", max: 110 })}${tx(67, 152, "√49 = 7", { fs: 15, c: "var(--pen)" })}
  <g stroke="var(--red)" stroke-width="2" fill="var(--red)" fill-opacity=".15"><path d="M160 70 h50 v50 h-50 z"/><path d="M160 70 l20 -20 h50 l-20 20 z"/><path d="M210 70 l20 -20 v50 l-20 20 z"/></g>
  ${tx(196, 26, "volumen 8 → arista 2", { fs: 11.5, c: "var(--red)", max: 110 })}${tx(196, 152, "∛8 = 2", { fs: 15, c: "var(--red)" })}`);

const radicalPot = formula("Un radical como potencia de exponente fraccionario", "ⁿ√aᵐ = aᵐ/ⁿ", ["Ejemplos", "√5 = 5^(1/2)   ·   ∛(x²) = x^(2/3)", "8^(2/3) = (∛8)² = 2² = 4"], "var(--inf)");

const radOps = pasos("Operaciones con radicales: extraer factores, sumar semejantes, multiplicar y racionalizar", ["√72 = √(36·2) = 6√2", "6√2 − √2 = 5√2", "√3 · √12 = √36 = 6", "√50 : √2 = √25 = 5", "3/√3 = 3√3/3 = √3"], "Radicales paso a paso");

const potencias10 = lienzo("Potencias de 10: positivas para números grandes y negativas para números pequeños, con ejemplos", `
  <path d="M14 96 H246" stroke="var(--ink)" stroke-width="2"/>
  ${[-6, -3, 0, 3, 6, 9].map((e, i) => `<path d="M${24 + i * 42} 90 V102" stroke="var(--ink)" stroke-width="2"/>${tx(24 + i * 42, 120, `10${{ "-6": "⁻⁶", "-3": "⁻³", 0: "⁰", 3: "³", 6: "⁶", 9: "⁹" }[e]}`, { fs: 13, c: e < 0 ? "var(--red)" : "var(--pen)", max: 40 })}`).join("")}
  ${[["virus", 24], ["mm", 66], ["1 m", 108], ["km", 150], ["Madrid", 192], ["Sol", 234]].map(([t, x]) => tx(x, 78, t, { fs: 10.5, w: 400, max: 40 })).join("")}
  ${tx(70, 148, "← pequeños: exponente −", { fs: 11.5, c: "var(--red)", max: 115 })}${tx(195, 148, "grandes: exponente + →", { fs: 11.5, c: "var(--pen)", max: 115 })}${tx(130, 32, "Cada marca multiplica por 1.000", { fs: 12, c: "var(--muted)" })}`);

const notacion = formula("Forma de un número en notación científica", "a · 10ⁿ", ["con 1 ≤ a < 10 y n entero", "150.000.000 = 1,5 · 10⁸", "0,00042 = 4,2 · 10⁻⁴"], "var(--pen)");

const opNot = pasos("Multiplicar en notación científica: multiplicar las mantisas, sumar exponentes y ajustar la mantisa", ["(3 · 10⁵) · (4 · 10⁻²)", "3 · 4 = 12", "10⁵ · 10⁻² = 10³", "12 · 10³ (no válido: 12 ≥ 10)", "= 1,2 · 10⁴"], "Multiplicar y ajustar");

const sumaNot = pasos("Sumar en notación científica: igualar exponentes, sumar y ajustar", ["2,5 · 10⁶ + 4 · 10⁵", "4 · 10⁵ = 0,4 · 10⁶", "2,5 + 0,4 = 2,9", "= 2,9 · 10⁶"], "Sumar: primero igualar");

const calcula = cajas("Cómo introducir notación científica en la calculadora con la tecla EXP o por diez elevado a x", [
  ["Tecla", ["EXP · ×10ˣ · EE", "no escribir ×10"]], ["Teclear", ["3,2 EXP 8", "= 3,2 · 10⁸"]],
  ["Negativo", ["5 EXP (−) 4", "= 5 · 10⁻⁴"]], ["Pantalla", ["1.2E+04", "= 1,2 · 10⁴"]],
], "La calculadora y la notación");

const ordenes = barras("Órdenes de magnitud en metros como exponentes de 10: célula, persona, Everest y diámetro de la Tierra", [["célula", 1, "var(--leaf)"], ["persona", 7, "var(--pen)"], ["Everest", 10.9, "var(--inf)"], ["Tierra", 14.1, "var(--red)"]], { titulo: "Tamaño en metros: cada barra, más ceros", fmt: (v) => ({ 1: "10⁻⁵", 7: "10⁰", 10.9: "10⁴", 14.1: "10⁷" }[v]) });

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Potencias, raíces y notación científica",
  minutos: 110,
  objetivos: [
    "Calcular potencias de exponente natural y entero, incluidas las de base negativa",
    "Aplicar las propiedades de las potencias para simplificar expresiones",
    "Calcular raíces, relacionarlas con las potencias y operar con radicales sencillos",
    "Escribir números muy grandes y muy pequeños en notación científica",
    "Operar en notación científica a mano y con calculadora",
    "Estimar órdenes de magnitud en situaciones reales",
  ],
  claves: ["potencia", "base", "exponente negativo", "raíz", "radical", "notación científica", "mantisa", "orden de magnitud"],
  pregunta: {
    texto: "La distancia de la Tierra al Sol es de unos 150.000.000 km y un virus mide 0,0000001 m. ¿Hay una forma más cómoda de escribir estos números?",
    respuesta: "Sí, la <mark>notación científica</mark>: 1,5 · 10⁸ km y 1 · 10⁻⁷ m. El exponente de 10 dice cuántos lugares se mueve la coma. Así se escriben los números en ciencia y en las calculadoras.",
  },
  lectura: {
    titulo: "Del grano de arena a las galaxias",
    html: `<p>Hace más de 2.200 años, Arquímedes se propuso un reto curioso: calcular cuántos granos de arena cabrían en todo el universo conocido. En su época los números griegos no permitían escribir cantidades tan enormes, así que inventó un sistema de «órdenes» de números, una idea muy parecida a las potencias de 10 que usamos hoy. Su resultado fue un número con más de 60 ceros.</p><p>Hoy manejamos números todavía más extremos. Un móvil tiene unos 15.000.000.000 transistores; la luz recorre 300.000 km cada segundo; un glóbulo rojo mide 0,000007 m; y la memoria de un centro de datos se mide en petabytes, 10¹⁵ bytes. Escribir y leer tantos ceros es lento y provoca errores: basta con olvidar uno para equivocarse diez veces.</p><p>Las <b>potencias</b> nos dan un lenguaje compacto para todo eso, las <b>raíces</b> nos permiten deshacer las potencias (por ejemplo, saber el lado de un terreno cuadrado conociendo su área) y la <b>notación científica</b> es el idioma común de ingenieros, médicos y astrónomos. Al terminar el tema podrás comparar el tamaño de un virus con el de una galaxia sin perderte entre los ceros.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Qué es una potencia</h3><p>Una <b>potencia</b> es una forma abreviada de escribir una multiplicación de factores iguales: aⁿ = a · a · … · a (n veces). El número que se repite, a, es la <b>base</b>, y el que indica cuántas veces se repite, n, es el <b>exponente</b>. Así, 2⁴ = 2 · 2 · 2 · 2 = 16 y 10³ = 1.000.</p><p>Hay algunos casos que conviene recordar: a¹ = a, 1ⁿ = 1 y 0ⁿ = 0 (si n > 0). El exponente 2 se lee «al cuadrado» porque 5² es el área de un cuadrado de lado 5, y el exponente 3 se lee «al cubo» porque 5³ es el volumen de un cubo de arista 5. Las potencias crecen muy deprisa: 2¹⁰ ya es 1.024, y por eso un kilobyte de informática tiene aproximadamente mil bytes.</p>`, svg: cuadros },
    { html: `<h3>1.2 Propiedades de las potencias de igual base</h3><p>Cuando las potencias tienen la <b>misma base</b>, se puede operar mirando solo los exponentes. Para <b>multiplicar</b> se suman: 2³ · 2⁴ = 2⁷, porque son 3 + 4 factores iguales. Para <b>dividir</b> se restan: 5⁶ : 5² = 5⁴. Para elevar una <b>potencia a otra potencia</b> se multiplican: (3²)³ = 3⁶.</p><p>De la regla de la división sale una consecuencia importante: 7³ : 7³ = 7⁰, pero también es 1 (un número entre sí mismo). Por eso <mark>a⁰ = 1</mark> para cualquier base distinta de cero. Estas reglas <b>solo funcionan con la misma base</b>: 2³ · 3⁴ no se puede simplificar así, aunque sí se puede calcular (8 · 81 = 648). Antes de aplicar las reglas, a veces conviene escribir todas las bases iguales: 4³ · 2⁵ = (2²)³ · 2⁵ = 2⁶ · 2⁵ = 2¹¹.</p>${tabla(["Operación", "Regla", "Ejemplo"], [["Producto", "aᵐ · aⁿ = aᵐ⁺ⁿ", "10² · 10⁵ = 10⁷"], ["Cociente", "aᵐ : aⁿ = aᵐ⁻ⁿ", "4⁹ : 4⁶ = 4³"], ["Potencia de potencia", "(aᵐ)ⁿ = aᵐ·ⁿ", "(2⁵)² = 2¹⁰"]])}`, svg: props, video: { id: "ainnlQ_Owq8", titulo: "Todas las leyes de los exponentes", canal: "Daniel Carreón", vistas: 2080331, megusta: 0 } },
    { html: `<h3>1.3 Exponentes negativos</h3><p>¿Qué significa 2⁻³? Si seguimos la regla del cociente, 2² : 2⁵ = 2⁻³, y a la vez 4 : 32 = 1/8. Por tanto, un exponente negativo indica el <b>inverso</b>: <mark>a⁻ⁿ = 1/aⁿ</mark>. Así, 2⁻³ = 1/2³ = 1/8 y 10⁻² = 1/100 = 0,01.</p><p>Fíjate en la tabla de potencias de 2: cada vez que el exponente baja una unidad, el valor se divide entre 2: 4, 2, 1, 1/2, 1/4… Un exponente negativo <b>no hace negativo el número</b>, lo hace pequeño. Con fracciones, el exponente negativo «da la vuelta» a la fracción: (2/3)⁻² = (3/2)² = 9/4. Todas las propiedades anteriores siguen funcionando con exponentes negativos: 5⁻² · 5⁶ = 5⁴.</p>`, svg: negativos },
    { html: `<h3>1.4 Potencias de base negativa</h3><p>Cuando la base es negativa, el <b>signo del resultado</b> depende del exponente. Si el exponente es <b>par</b>, los signos menos se emparejan y el resultado es positivo: (−2)⁴ = 16. Si es <b>impar</b>, sobra un signo menos y el resultado es negativo: (−2)³ = −8.</p><p>Hay que fijarse mucho en los <b>paréntesis</b>: (−3)² = 9, porque se eleva el −3 completo, pero −3² = −9, porque solo se eleva el 3 y después se pone el signo. Este detalle provoca muchos errores en exámenes y también al usar la calculadora, que respeta exactamente lo que escribes. Si dudas, escribe la multiplicación desarrollada.</p>`, svg: signos },
    { html: `<h3>1.5 Potencia de un producto y de un cociente</h3><p>Si la base es un producto o un cociente, el exponente se <b>reparte</b> entre sus factores: (a · b)ⁿ = aⁿ · bⁿ y (a / b)ⁿ = aⁿ / bⁿ. Por ejemplo, (2 · 5)³ = 2³ · 5³ = 8 · 125 = 1.000, y (2/3)² = 4/9. Esta propiedad sirve también al revés para agrupar: 4³ · 25³ = (4 · 25)³ = 100³ = 1.000.000, mucho más rápido que multiplicar 64 por 15.625.</p><p>Pero cuidado: el exponente <b>no se reparte en sumas ni restas</b>. (1 + 2)² = 3² = 9, mientras que 1² + 2² = 5. Este es uno de los errores más frecuentes en álgebra y volverá a aparecer en el tema de polinomios con las identidades notables.</p>`, svg: productoBase },
    { html: `<h3>1.6 El orden de las operaciones</h3><p>En una expresión con varias operaciones se respeta siempre la <b>jerarquía</b>: primero los <b>paréntesis</b>, después las <b>potencias y raíces</b>, luego las <b>multiplicaciones y divisiones</b> (de izquierda a derecha) y, por último, las <b>sumas y restas</b>. Así, 5 + 2 · (3 + 1)² = 5 + 2 · 16 = 37, mientras que sin paréntesis 5 + 2 · 3 + 1² = 5 + 6 + 1 = 12.</p><p>Las calculadoras científicas y las hojas de cálculo aplican esta misma jerarquía, por eso hay que escribir los paréntesis con cuidado. Un truco útil es <mark>subrayar primero la operación que toca</mark> y reescribir la expresión en cada paso, sin intentar hacerlo todo de cabeza. Con fracciones elevadas, el paréntesis decide si se eleva solo el numerador (2²/3 = 4/3) o la fracción completa ((2/3)² = 4/9). En las fórmulas de física y de economía aparecen expresiones de este tipo constantemente, y un paréntesis olvidado cambia por completo el resultado.</p>`, svg: jerarquia },
    { html: `<h3>2.1 Raíces: la operación inversa</h3><p>La <b>raíz n-ésima</b> de un número a es otro número b tal que bⁿ = a. Se escribe ⁿ√a; n es el <b>índice</b> y a, el <b>radicando</b>. La raíz cuadrada (índice 2, que no se escribe) responde a «¿qué lado tiene un cuadrado de área a?»: √49 = 7. La raíz cúbica responde a «¿qué arista tiene un cubo de volumen a?»: ∛8 = 2.</p><p>Un número positivo tiene <b>dos raíces cuadradas</b>, una positiva y otra negativa (7 y −7, porque las dos al cuadrado dan 49); el símbolo √ indica la positiva. Los números negativos <b>no tienen raíz cuadrada real</b>, porque ningún número al cuadrado es negativo. En cambio, las raíces de índice impar sí existen para negativos: ∛(−8) = −2. Cuando la raíz no es exacta (√2, √10) el resultado es irracional y se aproxima.</p>`, svg: raizArea },
    { html: `<h3>2.2 Raíces como potencias</h3><p>Una raíz se puede escribir como una potencia de <b>exponente fraccionario</b>: el índice pasa al denominador. Así, √5 = 5^(1/2), ∛7 = 7^(1/3) y, en general, <mark>ⁿ√aᵐ = a^(m/n)</mark>. Esta forma es muy útil porque permite aplicar todas las propiedades de las potencias a las raíces.</p><p>Por ejemplo, 8^(2/3) = (∛8)² = 2² = 4, y √2 · ∛2 = 2^(1/2) · 2^(1/3) = 2^(5/6). En la calculadora, las raíces de índice alto se hacen con la tecla de potencia: ⁵√32 se escribe 32^(1/5) y da 2. Es la manera en que trabajan internamente las calculadoras y las hojas de cálculo.</p>`, svg: radicalPot },
    { html: `<h3>2.3 Operaciones con radicales</h3><p>Para <b>simplificar</b> un radical se descompone el radicando y se sacan los factores que formen potencias del índice: √72 = √(36 · 2) = 6√2. Solo se pueden <b>sumar o restar</b> radicales <b>semejantes</b>: 6√2 − √2 = 5√2. Para <b>multiplicar o dividir</b> radicales del mismo índice, se multiplican o dividen los radicandos: √3 · √12 = √36 = 6.</p><p>Si queda una raíz en el denominador, se <b>racionaliza</b> multiplicando numerador y denominador por esa raíz: 3/√3 = 3√3/3 = √3. Así el resultado es más fácil de comparar y de aproximar. Estas técnicas aparecen al aplicar el teorema de Pitágoras o al calcular la diagonal de un cuadrado o la altura de un triángulo equilátero.</p>`, svg: radOps, video: { id: "Cfl8HcObbGA", titulo: "Radicales: propiedades, simplificación y operaciones con raíces", canal: "Susi Profe", vistas: 2985266, megusta: 0 } },
    { html: `<h3>3.1 Potencias de 10</h3><p>Las potencias de 10 son especialmente cómodas: 10ⁿ es un 1 seguido de n ceros (10⁶ = 1.000.000) y 10⁻ⁿ es un 1 situado n lugares detrás de la coma (10⁻³ = 0,001). <b>Multiplicar por 10ⁿ</b> mueve la coma n lugares a la derecha; multiplicar por 10⁻ⁿ, n lugares a la izquierda.</p><p>Los prefijos del Sistema Internacional son potencias de 10 con nombre propio: kilo (10³), mega (10⁶), giga (10⁹), tera (10¹²) para lo grande; mili (10⁻³), micro (10⁻⁶), nano (10⁻⁹) para lo pequeño. Por eso un gigabyte son 10⁹ bytes y un nanómetro, 10⁻⁹ m. Entenderlos ayuda a comparar tarifas de datos, tamaños de archivos o medidas en el laboratorio.</p>${tabla(["Prefijo", "Símbolo", "Potencia"], [["giga", "G", "10⁹"], ["mega", "M", "10⁶"], ["kilo", "k", "10³"], ["mili", "m", "10⁻³"], ["micro", "µ", "10⁻⁶"], ["nano", "n", "10⁻⁹"]])}`, svg: potencias10 },
    { html: `<h3>3.2 Notación científica</h3><p>Un número está en <b>notación científica</b> si se escribe como <mark>a · 10ⁿ</mark>, donde a (la <b>mantisa</b>) cumple 1 ≤ a &lt; 10 y n es un entero. Para escribirlo, se coloca la coma detrás de la primera cifra distinta de cero y se cuenta cuántos lugares se ha movido: 150.000.000 = 1,5 · 10⁸ (8 lugares a la izquierda, exponente positivo) y 0,00042 = 4,2 · 10⁻⁴ (4 lugares a la derecha, exponente negativo).</p><p>Para pasar de notación científica a número normal se hace al revés: 3,07 · 10⁵ = 307.000 y 6 · 10⁻³ = 0,006. Una forma de comprobar: si el exponente es positivo, el número es grande (mayor que 10); si es negativo, es menor que 1. No vale escribir 25 · 10³ ni 0,4 · 10⁻²: la mantisa debe estar entre 1 y 10.</p>`, svg: notacion, video: { id: "fYBFpz3ly28", titulo: "Notación científica, súper fácil", canal: "Daniel Carreón", vistas: 4991004, megusta: 0 } },
    { html: `<h3>3.3 Multiplicar y dividir en notación científica</h3><p>Para <b>multiplicar</b> se multiplican las mantisas y se suman los exponentes; para <b>dividir</b> se dividen las mantisas y se restan los exponentes. Después, si la mantisa no está entre 1 y 10, se <b>ajusta</b>. Ejemplo: (3 · 10⁵) · (4 · 10⁻²) = 12 · 10³ = 1,2 · 10⁴.</p><p>División: (6 · 10⁸) : (2 · 10³) = 3 · 10⁵. Y si sale una mantisa pequeña: (2 · 10⁴) : (5 · 10⁷) = 0,4 · 10⁻³ = 4 · 10⁻⁴. Al ajustar, si la coma se mueve a la izquierda, el exponente sube; si se mueve a la derecha, baja. Es la forma de hacer cálculos astronómicos «a mano»: por ejemplo, el tiempo que tarda la luz del Sol en llegar, (1,5 · 10⁸ km) : (3 · 10⁵ km/s) = 0,5 · 10³ = 500 s, algo más de 8 minutos.</p>`, svg: opNot },
    { html: `<h3>3.4 Sumar y restar en notación científica</h3><p>Para <b>sumar o restar</b> es necesario que los números tengan el <b>mismo exponente</b>. Se reescribe uno de ellos y después se suman las mantisas: 2,5 · 10⁶ + 4 · 10⁵ = 2,5 · 10⁶ + 0,4 · 10⁶ = 2,9 · 10⁶. Si los exponentes son muy distintos, el número pequeño apenas influye: 3 · 10⁸ + 5 · 10² ≈ 3 · 10⁸.</p><p>Este último hecho es importante para <b>estimar</b>: en la población mundial, unos 8 · 10⁹ habitantes, sumar o restar un pueblo de mil personas no cambia el resultado redondeado. En la práctica, con números de órdenes muy distintos se suele hacer la suma con calculadora y redondear con sentido.</p>`, svg: sumaNot },
    { html: `<h3>3.5 Notación científica con calculadora</h3><p>Las calculadoras científicas tienen una tecla especial (<b>EXP</b>, <b>EE</b> o <b>×10ˣ</b>) para introducir la potencia de 10. Para escribir 3,2 · 10⁸ se pulsa 3,2 EXP 8; para 5 · 10⁻⁴, 5 EXP (−) 4. <mark>No hay que teclear «× 10»</mark>, porque la tecla ya lo incluye y se multiplicaría dos veces.</p><p>Cuando el resultado es muy grande o muy pequeño, la calculadora lo muestra en notación científica, a veces con una «E»: 1.2E+04 significa 1,2 · 10⁴. Las hojas de cálculo usan la misma notación (1,2E+04). Saber leerla evita confundir, por ejemplo, 1,2E−04 (0,00012) con un número negativo.</p>`, svg: calcula },
    { html: `<h3>3.6 Órdenes de magnitud y estimaciones</h3><p>El <b>orden de magnitud</b> de una cantidad es la potencia de 10 más cercana: una célula mide del orden de 10⁻⁵ m, una persona 10⁰ m, el Everest 10⁴ m y la Tierra 10⁷ m. Comparar órdenes de magnitud dice «cuántas veces más grande» es algo: la Tierra es unas 10⁷ veces más alta que una persona.</p><p>Con los órdenes de magnitud se hacen <b>estimaciones</b> rápidas, llamadas problemas de Fermi: ¿cuántos latidos da un corazón en una vida? Unos 70 por minuto · 60 · 24 · 365 · 80 años ≈ 3 · 10⁹ latidos. No buscamos la cifra exacta, sino un valor razonable que permita tomar decisiones o detectar errores (si sale 10³ o 10²⁰, algo está mal).</p>`, svg: ordenes },
  ],
  ejemplos: [
    { enunciado: "Simplifica (2⁵ · 2⁻²) : (2³)².", pasos: ["Numerador: 2⁵ · 2⁻² = 2⁵⁺⁽⁻²⁾ = 2³.", "Denominador: (2³)² = 2⁶.", "Cociente: 2³ : 2⁶ = 2³⁻⁶ = 2⁻³.", "2⁻³ = 1/2³ = 1/8."], resultado: "2⁻³ = 1/8 = 0,125." },
    { enunciado: "Calcula (−2)⁴ − 2⁴ + (−1)⁷ + 3⁰.", pasos: ["(−2)⁴ = 16 (exponente par).", "2⁴ = 16.", "(−1)⁷ = −1 (exponente impar).", "3⁰ = 1.", "16 − 16 − 1 + 1 = 0."], resultado: "0." },
    { enunciado: "Simplifica 2√18 + √50 − √8.", pasos: ["√18 = 3√2, así que 2√18 = 6√2.", "√50 = 5√2.", "√8 = 2√2.", "6√2 + 5√2 − 2√2 = 9√2."], resultado: "9√2 ≈ 12,73." },
    { enunciado: "Escribe en notación científica 0,000 003 7 y 48.000.000.000.", pasos: ["0,0000037: la coma va detrás del 3; se mueve 6 lugares a la derecha → 3,7 · 10⁻⁶.", "48.000.000.000: la coma va detrás del 4; se mueve 10 lugares a la izquierda → 4,8 · 10¹⁰."], resultado: "3,7 · 10⁻⁶ y 4,8 · 10¹⁰." },
    { enunciado: "La masa de la Tierra es 5,97 · 10²⁴ kg y la de la Luna 7,35 · 10²² kg. ¿Cuántas veces es mayor la Tierra?", pasos: ["Dividimos: (5,97 · 10²⁴) : (7,35 · 10²²).", "Mantisas: 5,97 : 7,35 ≈ 0,812.", "Exponentes: 10²⁴⁻²² = 10².", "0,812 · 10² = 81,2."], resultado: "La Tierra tiene unas 81 veces la masa de la Luna." },
    { enunciado: "Calcula (4,5 · 10⁷) + (3 · 10⁶) y da el resultado en notación científica.", pasos: ["Igualamos exponentes: 3 · 10⁶ = 0,3 · 10⁷.", "Sumamos mantisas: 4,5 + 0,3 = 4,8.", "Resultado: 4,8 · 10⁷."], resultado: "4,8 · 10⁷." },
  ],
  errores: [
    "Multiplicar base por exponente: 2³ no es 6, es 8.",
    "Sumar exponentes con bases distintas: 2³ · 3² no es 6⁵.",
    "Creer que un exponente negativo da un número negativo: 2⁻² = 1/4, positivo.",
    "Confundir (−3)² = 9 con −3² = −9.",
    "Repartir el exponente en una suma: (a + b)² ≠ a² + b².",
    "Dejar la mantisa fuera de rango, como 25 · 10³ o 0,7 · 10⁻⁵, o teclear «× 10» además de EXP.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Calcula: 3⁴, (−2)⁵, (−5)², −5², 10⁰ y 1²⁰.", sol: "3⁴ = 81; (−2)⁵ = −32; (−5)² = 25; −5² = −25; 10⁰ = 1; 1²⁰ = 1." },
    { nivel: "básico", q: "Expresa como una sola potencia: a) 7² · 7⁵ b) 9⁸ : 9³ c) (4³)⁵ d) 2⁶ · 2⁻⁴.", sol: "a) 7⁷. b) 9⁵. c) 4¹⁵. d) 2²." },
    { nivel: "básico", q: "Calcula: 2⁻¹, 5⁻², 10⁻³ y (1/3)⁻².", sol: "2⁻¹ = 1/2; 5⁻² = 1/25; 10⁻³ = 1/1.000 = 0,001; (1/3)⁻² = 3² = 9." },
    { nivel: "básico", q: "Calcula las raíces: √81, √0,25, ∛27, ∛(−64) y ⁴√16.", sol: "√81 = 9; √0,25 = 0,5; ∛27 = 3; ∛(−64) = −4; ⁴√16 = 2." },
    { nivel: "básico", q: "¿Tiene solución real √(−16)? ¿Y ∛(−27)? Explica.", sol: "√(−16) no, porque ningún número al cuadrado da negativo. ∛(−27) = −3, porque (−3)³ = −27: las raíces de índice impar de negativos existen." },
    { nivel: "básico", q: "Escribe en notación científica: 5.600.000, 0,0081, 720 y 0,5.", sol: "5,6 · 10⁶; 8,1 · 10⁻³; 7,2 · 10²; 5 · 10⁻¹." },
    { nivel: "básico", q: "Escribe en forma decimal: 3,4 · 10⁵, 9 · 10⁻⁴, 1,08 · 10³ y 2,5 · 10⁻¹.", sol: "340.000; 0,0009; 1.080; 0,25." },
    { nivel: "básico", q: "¿Están en notación científica? 12 · 10⁴; 3,5 · 10⁻²; 0,8 · 10⁵; 1 · 10⁹.", sol: "12 · 10⁴ no (mantisa ≥ 10): sería 1,2 · 10⁵. 3,5 · 10⁻² sí. 0,8 · 10⁵ no (mantisa &lt; 1): 8 · 10⁴. 1 · 10⁹ sí." },
    { nivel: "básico", q: "Calcula (2 · 10³) · (4 · 10⁵) y (9 · 10⁸) : (3 · 10²).", sol: "8 · 10⁸ y 3 · 10⁶." },
    { nivel: "básico", q: "Simplifica √12, √75 y √200.", sol: "√12 = 2√3; √75 = 5√3; √200 = 10√2." },
    { nivel: "básico", q: "Un cuadrado tiene 144 m² de área. ¿Cuánto mide el lado? ¿Y la arista de un cubo de 125 cm³?", sol: "Lado = √144 = 12 m. Arista = ∛125 = 5 cm." },
    { nivel: "básico", q: "Escribe con prefijos: 3 · 10⁹ bytes, 5 · 10⁻³ m y 2 · 10⁶ W.", sol: "3 GB (gigabytes); 5 mm (milímetros); 2 MW (megavatios)." },
    { nivel: "medio", q: "Simplifica: (3⁴ · 3⁻²)³ : 3⁵.", sol: "3⁴ · 3⁻² = 3². (3²)³ = 3⁶. 3⁶ : 3⁵ = 3¹ = 3." },
    { nivel: "medio", q: "Simplifica escribiendo como potencias de 2: 8³ · 4⁻² : 16.", sol: "8³ = (2³)³ = 2⁹; 4⁻² = 2⁻⁴; 16 = 2⁴. 2⁹ · 2⁻⁴ : 2⁴ = 2⁹⁻⁴⁻⁴ = 2¹ = 2." },
    { nivel: "medio", q: "Calcula aplicando propiedades: 5³ · 2³ y 12⁴ : 4⁴.", sol: "5³ · 2³ = (5 · 2)³ = 10³ = 1.000. 12⁴ : 4⁴ = (12 : 4)⁴ = 3⁴ = 81." },
    { nivel: "medio", q: "Calcula (2/5)⁻² y (−1/2)⁻³.", sol: "(2/5)⁻² = (5/2)² = 25/4. (−1/2)⁻³ = (−2)³ = −8." },
    { nivel: "medio", q: "Escribe como potencia y calcula: 27^(2/3), 16^(3/4) y 100^(1/2).", sol: "27^(2/3) = (∛27)² = 3² = 9. 16^(3/4) = (⁴√16)³ = 2³ = 8. 100^(1/2) = √100 = 10." },
    { nivel: "medio", q: "Opera: 3√20 − √45 + 2√5.", sol: "3√20 = 3 · 2√5 = 6√5; √45 = 3√5. 6√5 − 3√5 + 2√5 = 5√5." },
    { nivel: "medio", q: "Racionaliza: 10/√5 y 6/(2√3).", sol: "10/√5 = 10√5/5 = 2√5. 6/(2√3) = 3/√3 = 3√3/3 = √3." },
    { nivel: "medio", q: "Calcula y da en notación científica: (6,4 · 10⁻³) · (5 · 10⁸).", sol: "6,4 · 5 = 32; 10⁻³ · 10⁸ = 10⁵. 32 · 10⁵ = 3,2 · 10⁶." },
    { nivel: "medio", q: "Calcula: (1,2 · 10⁵) : (4 · 10⁹).", sol: "1,2 : 4 = 0,3; 10⁵⁻⁹ = 10⁻⁴. 0,3 · 10⁻⁴ = 3 · 10⁻⁵." },
    { nivel: "medio", q: "Calcula: 7,2 · 10⁸ − 5 · 10⁷.", sol: "5 · 10⁷ = 0,5 · 10⁸. 7,2 − 0,5 = 6,7. Resultado: 6,7 · 10⁸." },
    { nivel: "medio", q: "La luz viaja a 3 · 10⁵ km/s. ¿Qué distancia recorre en un año (3,15 · 10⁷ s)? Es el «año luz».", sol: "3 · 10⁵ · 3,15 · 10⁷ = 9,45 · 10¹² km." },
    { nivel: "medio", q: "Un glóbulo rojo mide 7 · 10⁻⁶ m. ¿Cuántos cabrían en fila en 1 cm?", sol: "1 cm = 10⁻² m. 10⁻² : (7 · 10⁻⁶) ≈ 0,143 · 10⁴ ≈ 1.430 glóbulos." },
    { nivel: "medio", q: "Ordena de menor a mayor: 3 · 10⁻⁴; 2,9 · 10⁻³; 5 · 10⁻⁵; 1 · 10⁻⁴.", sol: "Comparando exponentes y mantisas: 5 · 10⁻⁵ &lt; 1 · 10⁻⁴ &lt; 3 · 10⁻⁴ &lt; 2,9 · 10⁻³." },
    { nivel: "medio", q: "Tu móvil tiene 128 GB. Si una foto ocupa 4 MB, ¿cuántas fotos caben aproximadamente?", sol: "128 GB = 1,28 · 10¹¹ B; 4 MB = 4 · 10⁶ B. 1,28 · 10¹¹ : 4 · 10⁶ = 0,32 · 10⁵ = 32.000 fotos." },
    { nivel: "avanzado", q: "Simplifica: (a³ · b⁻²)² · (a⁻¹ · b)³.", sol: "(a³b⁻²)² = a⁶b⁻⁴. (a⁻¹b)³ = a⁻³b³. Producto: a⁶⁻³ · b⁻⁴⁺³ = a³ · b⁻¹ = a³/b." },
    { nivel: "avanzado", q: "Halla x: a) 2ˣ = 32 b) 3ˣ = 1/9 c) 10ˣ = 0,001.", sol: "a) 32 = 2⁵, x = 5. b) 1/9 = 3⁻², x = −2. c) 0,001 = 10⁻³, x = −3." },
    { nivel: "avanzado", q: "Calcula exactamente la diagonal de un cubo de arista 2 cm y racionaliza si hace falta.", sol: "Diagonal de una cara: √(2² + 2²) = √8 = 2√2. Diagonal del cubo: √(2² + (2√2)²) = √(4 + 8) = √12 = 2√3 ≈ 3,46 cm." },
    { nivel: "avanzado", q: "Opera: (√3 + 1)(√3 − 1) y (√2 + 3)².", sol: "(√3 + 1)(√3 − 1) = 3 − 1 = 2. (√2 + 3)² = 2 + 6√2 + 9 = 11 + 6√2." },
    { nivel: "avanzado", q: "Calcula y da el resultado en notación científica: (3 · 10⁴ · 6 · 10⁻⁷) : (9 · 10⁻⁵).", sol: "Numerador: 18 · 10⁻³ = 1,8 · 10⁻². Cociente: 1,8 : 9 = 0,2; 10⁻²⁻⁽⁻⁵⁾ = 10³. 0,2 · 10³ = 2 · 10²." },
    { nivel: "avanzado", q: "Estima cuántas veces late un corazón en 80 años (70 latidos por minuto). Da el orden de magnitud.", sol: "70 · 60 · 24 · 365 · 80 ≈ 2,94 · 10⁹ latidos. Orden de magnitud: 10⁹ (miles de millones)." },
    { nivel: "avanzado", q: "La deuda de un país es 1,5 · 10¹² € y tiene 4,8 · 10⁷ habitantes. ¿Cuánto toca por habitante?", sol: "1,5 · 10¹² : 4,8 · 10⁷ ≈ 0,3125 · 10⁵ = 3,125 · 10⁴ ≈ 31.250 € por habitante." },
    { nivel: "avanzado", q: "Una bacteria se divide en dos cada 20 minutos. Empezando con una, ¿cuántas habrá en 10 horas? Da el resultado como potencia y en notación científica.", sol: "10 h = 600 min = 30 periodos de 20 min. Bacterias: 2³⁰ = 1.073.741.824 ≈ 1,07 · 10⁹." },
    { nivel: "avanzado", q: "Demuestra con un ejemplo numérico que √(a + b) ≠ √a + √b.", sol: "Con a = 9 y b = 16: √(9 + 16) = √25 = 5, pero √9 + √16 = 3 + 4 = 7. No son iguales: la raíz no se reparte en sumas." },
  ],
  quiz: [
    { q: "2⁵ es igual a…", o: ["10", "25", "32", "7"], a: 2, e: "2 · 2 · 2 · 2 · 2 = 32." },
    { q: "3⁴ · 3² =", o: ["3⁸", "3⁶", "9⁶", "3²"], a: 1, e: "Misma base: se suman los exponentes." },
    { q: "(5²)³ =", o: ["5⁵", "5⁶", "5⁸", "25³ = 5⁹"], a: 1, e: "Potencia de potencia: 2 · 3 = 6." },
    { q: "7⁰ vale…", o: ["0", "7", "1", "no existe"], a: 2, e: "Cualquier número distinto de 0 elevado a 0 es 1." },
    { q: "4⁻² es…", o: ["−16", "−8", "1/16", "1/8"], a: 2, e: "1/4² = 1/16." },
    { q: "(−2)³ =", o: ["8", "−8", "−6", "6"], a: 1, e: "Exponente impar: resultado negativo." },
    { q: "−4² =", o: ["16", "−16", "8", "−8"], a: 1, e: "Solo se eleva el 4: −(16)." },
    { q: "(2/3)⁻¹ =", o: ["−2/3", "3/2", "2/3", "−3/2"], a: 1, e: "El exponente −1 da el inverso." },
    { q: "∛(−125) =", o: ["5", "−5", "no existe", "−25"], a: 1, e: "(−5)³ = −125." },
    { q: "√50 simplificada es…", o: ["25√2", "5√2", "2√5", "10√5"], a: 1, e: "√(25 · 2) = 5√2." },
    { q: "8^(1/3) =", o: ["2", "8/3", "24", "4"], a: 0, e: "Es ∛8 = 2." },
    { q: "√2 · √18 =", o: ["√20", "6", "36", "2√5"], a: 1, e: "√36 = 6." },
    { q: "0,00056 en notación científica es…", o: ["56 · 10⁻⁵", "5,6 · 10⁻⁴", "5,6 · 10⁴", "0,56 · 10⁻³"], a: 1, e: "La coma se mueve 4 lugares a la derecha." },
    { q: "3,2 · 10⁶ es…", o: ["320.000", "3.200.000", "32.000.000", "0,0000032"], a: 1, e: "La coma se mueve 6 lugares a la derecha." },
    { q: "(2 · 10⁴) · (3 · 10⁵) =", o: ["6 · 10⁹", "6 · 10²⁰", "5 · 10⁹", "6 · 10¹"], a: 0, e: "2 · 3 = 6 y 4 + 5 = 9." },
    { q: "(8 · 10⁶) : (4 · 10⁻²) =", o: ["2 · 10⁴", "2 · 10⁸", "4 · 10⁸", "2 · 10⁻¹²"], a: 1, e: "8 : 4 = 2 y 6 − (−2) = 8." },
    { q: "¿Qué prefijo equivale a 10⁶?", o: ["kilo", "mega", "giga", "micro"], a: 1, e: "Mega = un millón." },
    { q: "En la calculadora, 4.5E−03 significa…", o: ["−4,5", "4.500", "0,0045", "4,5 − 3"], a: 2, e: "4,5 · 10⁻³." },
    { q: "Para sumar en notación científica hay que…", o: ["sumar exponentes", "multiplicar mantisas", "igualar exponentes", "restar exponentes"], a: 2, e: "Solo se suman mantisas con la misma potencia de 10." },
    { q: "¿Cuántas veces es 10⁹ mayor que 10⁶?", o: ["3", "15", "1.000", "10³⁹"], a: 2, e: "10⁹ : 10⁶ = 10³ = 1.000." },
  ],
  examen: [
    { q: "(2³)² · 2⁻⁴ =", o: ["2²", "2¹", "2⁵", "2⁻²"], a: 0, e: "2⁶ · 2⁻⁴ = 2²." },
    { q: "5² · 2² =", o: ["10⁴", "100", "7⁴", "20"], a: 1, e: "(5 · 2)² = 10² = 100." },
    { q: "√12 + √27 =", o: ["√39", "5√3", "6√3", "13√3"], a: 1, e: "2√3 + 3√3 = 5√3." },
    { q: "1/√5 racionalizado es…", o: ["√5", "√5/5", "5/√5", "1/5"], a: 1, e: "Multiplicando por √5 arriba y abajo." },
    { q: "47.000.000 =", o: ["4,7 · 10⁶", "4,7 · 10⁷", "47 · 10⁶", "4,7 · 10⁸"], a: 1, e: "7 lugares." },
    { q: "6 · 10⁵ + 4 · 10⁴ =", o: ["10 · 10⁹", "6,4 · 10⁵", "1 · 10⁵", "6,04 · 10⁵"], a: 1, e: "4 · 10⁴ = 0,4 · 10⁵." },
    { q: "El orden de magnitud de 0,0008 es…", o: ["10⁻³", "10⁻⁴", "10⁴", "10³"], a: 0, e: "8 · 10⁻⁴ está más cerca de 10⁻³." },
    { q: "¿Cuál es negativo?", o: ["(−3)²", "3⁻²", "(−3)³", "(−1)⁴"], a: 2, e: "Base negativa y exponente impar." },
  ],
  feynman: ["Qué significan el exponente cero y el exponente negativo", "Por qué las propiedades solo valen con la misma base", "Qué relación hay entre raíces y potencias", "Cómo se escribe un número en notación científica y cómo se opera"],
  figura: {
    titulo: "Potencias, raíces y notación científica en una imagen",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen: propiedades de las potencias, raíces como potencias y notación científica">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Potencias", "aᵐ·aⁿ = aᵐ⁺ⁿ · aᵐ:aⁿ = aᵐ⁻ⁿ · (aᵐ)ⁿ = aᵐⁿ", "var(--pen)"], ["Exponentes especiales", "a⁰ = 1 · a⁻ⁿ = 1/aⁿ", "var(--leaf)"], ["Raíces", "ⁿ√aᵐ = aᵐ/ⁿ · √(a·b) = √a·√b", "var(--red)"], ["Notación científica", "a · 10ⁿ con 1 ≤ a < 10", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="250" y="${43 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "a_8MdRema-k", titulo: "Potencia de potencias, súper fácil", canal: "Daniel Carreón", vistas: 0, megusta: 0, busqueda: "propiedades de las potencias" },
  mapa: mapa("POTENCIAS Y RAÍCES", "var(--pen)", [
    ["Propiedades", "misma base: ± exponentes", "var(--pen)"],
    ["Exponente −", "a⁻ⁿ = 1/aⁿ", "var(--leaf)"],
    ["Raíces", "ⁿ√a = a^(1/n) · radicales", "var(--red)"],
    ["Notación científica", "a · 10ⁿ, 1 ≤ a < 10", "var(--inf)"],
  ], 240),
  glosario: [
    ["Potencia", "Producto de factores iguales: aⁿ."],
    ["Base", "Factor que se repite en una potencia."],
    ["Exponente", "Número de veces que se repite la base."],
    ["Exponente negativo", "Indica el inverso: a⁻ⁿ = 1/aⁿ."],
    ["Raíz n-ésima", "Número b tal que bⁿ = a; se escribe ⁿ√a."],
    ["Índice", "Número n de la raíz ⁿ√a; si es 2 no se escribe."],
    ["Radicando", "Número que está dentro de la raíz."],
    ["Radical", "Expresión con una raíz, como 3√5."],
    ["Radicales semejantes", "Los que tienen el mismo índice y el mismo radicando."],
    ["Racionalizar", "Quitar las raíces del denominador de una fracción."],
    ["Notación científica", "Forma a · 10ⁿ con 1 ≤ a &lt; 10 y n entero."],
    ["Mantisa", "Número a de la notación científica."],
    ["Orden de magnitud", "Potencia de 10 más cercana a una cantidad."],
    ["Prefijo del SI", "Nombre de una potencia de 10: kilo, mega, mili, micro…"],
  ],
  situacion: {
    titulo: "Del átomo a la galaxia: el pasillo de las escalas",
    reto: "El instituto quiere decorar un pasillo con una línea del tamaño de las cosas, desde un átomo hasta una galaxia. Vuestro equipo debe investigar las medidas, expresarlas en notación científica y diseñar la línea para que sea correcta y comprensible.",
    pasos: [
      "Buscad en fuentes fiables el tamaño de 12 objetos (átomo, virus, célula, hormiga, persona, edificio, montaña, país, Tierra, Sol, sistema solar, galaxia).",
      "Expresad cada medida en metros y en notación científica, redondeando la mantisa a dos cifras.",
      "Ordenadlos y colocad cada objeto según su orden de magnitud en una línea dividida en potencias de 10.",
      "Calculad 4 comparaciones del tipo «¿cuántas veces más grande es…?» dividiendo en notación científica.",
      "Diseñad el cartel (a mano o digital) con dibujos, medidas y una breve explicación de las potencias de 10.",
    ],
    producto: "Una línea de escalas para el pasillo con 12 objetos, sus medidas en notación científica y 4 comparaciones calculadas.",
    evaluacion: ["Escribe correctamente las medidas en notación científica.", "Opera con potencias de 10 al comparar tamaños.", "Organiza la información con claridad y cita las fuentes.", "Trabaja en equipo repartiendo tareas y revisando los cálculos."],
  },
  tarjetas: [
    ["aᵐ · aⁿ", "aᵐ⁺ⁿ (misma base: se suman exponentes)."],
    ["aᵐ : aⁿ", "aᵐ⁻ⁿ"],
    ["(aᵐ)ⁿ", "aᵐ·ⁿ"],
    ["a⁰", "1 (si a ≠ 0)."],
    ["a⁻ⁿ", "1/aⁿ"],
    ["Base negativa", "Exponente par: positivo. Impar: negativo."],
    ["ⁿ√aᵐ", "a^(m/n)"],
    ["Sumar radicales", "Solo si son semejantes: 2√3 + 5√3 = 7√3."],
    ["Racionalizar 1/√a", "√a / a"],
    ["Notación científica", "a · 10ⁿ con 1 ≤ a &lt; 10."],
    ["Multiplicar en notación científica", "Mantisas por mantisas y se suman exponentes; luego se ajusta."],
    ["Sumar en notación científica", "Primero igualar exponentes."],
  ],
  familias: ["Buscad en etiquetas y noticias números muy grandes o muy pequeños y escribidlos en notación científica.", "Calculad juntos cuántos segundos habéis vivido y expresadlo como potencia de 10.", "Mirad los gigas de la tarifa del móvil y calculad cuántas fotos o canciones caben.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido numérico: potencias de exponente entero y fraccionario, radicales, notación científica y estimación de órdenes de magnitud en contextos reales (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Línea de escalas del universo en el pasillo (situación de aprendizaje).", "Problemas de Fermi en grupo: estimar y comparar órdenes de magnitud.", "Hoja de cálculo para ver cómo muestra la notación E.", "Debate sobre noticias con cifras grandes (deuda, población, datos móviles)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Sistema Internacional de Unidades: prefijos (Centro Español de Metrología)", url: "https://www.cem.es/" },
    { t: "Proyecto Descartes: potencias y radicales (INTEF)", url: "https://proyectodescartes.org/" },
  ],
  revisado: "2026-11-13",
};
