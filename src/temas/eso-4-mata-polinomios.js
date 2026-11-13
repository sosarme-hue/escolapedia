// Matemáticas A 4º ESO · Polinomios. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar } = require("./_eso4L2-mata");

const lenguaje = cajas("Traducir del lenguaje común al algebraico: el doble de un número, un número más cinco, el cuadrado y números consecutivos", [
  ["El doble", ["de un número", "2x"]], ["Un número", ["más 5", "x + 5"]],
  ["El cuadrado", ["menos 3", "x² − 3"]], ["Consecutivos", ["dos números", "x, x + 1"]],
], "Del español al álgebra");

const monomio = lienzo("Partes de un monomio: coeficiente menos 5, parte literal x al cuadrado y, grado 3", `
  ${tx(130, 82, "−5 x² y", { fs: 40, c: "var(--ink)", fam: D })}
  <path d="M62 96 V112 H96 V96" fill="none" stroke="var(--red)" stroke-width="2"/>${tx(79, 130, "coeficiente", { fs: 12, c: "var(--red)" })}
  <path d="M112 96 V112 H196 V96" fill="none" stroke="var(--pen)" stroke-width="2"/>${tx(154, 130, "parte literal", { fs: 12, c: "var(--pen)" })}
  ${tx(130, 32, "grado: 2 + 1 = 3", { fs: 13, c: "var(--leaf)" })}${tx(130, 160, "semejantes: igual parte literal", { fs: 11.5, w: 400, c: "var(--muted)" })}`);

const polinomio = lienzo("Un polinomio de grado 3 ordenado: 4x al cubo menos 2x más 7, con su coeficiente principal y su término independiente", `
  ${tx(130, 70, "P(x) = 4x³ + 0x² − 2x + 7", { fs: 19, c: "var(--ink)", fam: D, max: 236 })}
  <path d="M84 84 V96" stroke="var(--red)" stroke-width="2"/>${tx(84, 112, "coef. principal 4", { fs: 11, c: "var(--red)", max: 100 })}
  <path d="M225 84 V96" stroke="var(--leaf)" stroke-width="2"/>${tx(215, 112, "término indep. 7", { fs: 11, c: "var(--leaf)", max: 90 })}
  ${tx(130, 30, "grado 3 · ordenado y completo", { fs: 12.5, c: "var(--muted)" })}${tx(130, 146, "4 términos (con el hueco de x² a 0)", { fs: 11.5, w: 400 })}`);

const valor = ejes("Valor numérico: el polinomio x al cuadrado menos 2x menos 3 vale menos 3 en x igual a 0 y 0 en x igual a 3, que es una raíz", { x: [-2, 4], y: [-5, 6], paso: 1, pasoY: 1, marcasX: [-1, 1, 2, 3], marcasY: [-4, 4], curvas: [{ f: (x) => x * x - 2 * x - 3, c: "var(--pen)", t: "P(x) = x² − 2x − 3", tx: 1.4, ty: 4.4 }], puntos: [[0, -3, "P(0) = −3", "var(--red)", "o"], [3, 0, "P(3) = 0", "var(--leaf)", "se"], [-1, 0, "", "var(--leaf)"]] });

const suma = pasos("Sumar polinomios agrupando términos semejantes", ["(3x² − 2x + 5) + (x² + 4x − 1)", "x²: 3 + 1 = 4", "x: −2 + 4 = 2", "números: 5 − 1 = 4", "= 4x² + 2x + 4"], "Sumar = juntar semejantes");

const area = lienzo("Producto de binomios como área de un rectángulo: x más 3 por x más 2 es x al cuadrado más 5x más 6", `
  <rect x="40" y="30" width="100" height="100" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/>
  <rect x="140" y="30" width="60" height="100" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>
  <rect x="40" y="130" width="100" height="36" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>
  <rect x="140" y="130" width="60" height="36" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2"/>
  ${tx(90, 86, "x²", { fs: 16, c: "var(--pen)" })}${tx(170, 86, "3x", { fs: 15, c: "var(--leaf)" })}${tx(90, 153, "2x", { fs: 14, c: "var(--leaf)" })}${tx(170, 153, "6", { fs: 14, c: "var(--red)" })}
  ${tx(90, 22, "x", { fs: 12 })}${tx(170, 22, "3", { fs: 12 })}${tx(28, 84, "x", { fs: 12 })}${tx(28, 153, "2", { fs: 12 })}${tx(230, 100, "x²+5x+6", { fs: 11, c: "var(--ink)", max: 56 })}`);

const cuadradoSuma = lienzo("Cuadrado de una suma como área: a más b al cuadrado es a al cuadrado más dos ab más b al cuadrado", `
  <rect x="40" y="20" width="100" height="100" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/>
  <rect x="140" y="20" width="44" height="100" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>
  <rect x="40" y="120" width="100" height="44" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>
  <rect x="140" y="120" width="44" height="44" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2"/>
  ${tx(90, 76, "a²", { fs: 17, c: "var(--pen)" })}${tx(162, 76, "ab", { fs: 13, c: "var(--leaf)" })}${tx(90, 147, "ab", { fs: 13, c: "var(--leaf)" })}${tx(162, 147, "b²", { fs: 13, c: "var(--red)" })}
  ${tx(222, 70, "(a + b)²", { fs: 12, c: "var(--ink)", max: 70 })}${tx(222, 92, "= a² + 2ab", { fs: 11, w: 400, max: 70 })}${tx(222, 110, "+ b²", { fs: 11, w: 400, max: 70 })}`);

const identidades = cajas("Las tres identidades notables", [
  ["(a + b)²", ["a² + 2ab + b²", "(x+3)² = x²+6x+9"], "var(--pen)"], ["(a − b)²", ["a² − 2ab + b²", "(x−4)² = x²−8x+16"], "var(--red)"],
  ["(a+b)(a−b)", ["a² − b²", "(x+5)(x−5) = x²−25"], "var(--leaf)"], ["¡Ojo!", ["(a + b)² ≠ a² + b²", "falta el 2ab"], "var(--sun)"],
], "Identidades notables");

const division = pasos("División de polinomios en caja: dividir primeros términos, multiplicar, restar y bajar", ["(x² + 5x + 7) : (x + 2)", "x² : x = x → x(x+2) = x²+2x", "restar: 3x + 7", "3x : x = 3 → 3(x+2) = 3x+6", "C = x + 3, R = 1"], "Dividir como con números");

const ruffini = lienzo("Regla de Ruffini para dividir x al cubo menos 2x al cuadrado menos 5x más 6 entre x menos 1: cociente x al cuadrado menos x menos 6 y resto 0", `
  <path d="M50 46 V140 M38 112 H240" stroke="var(--ink)" stroke-width="2"/>
  ${["1", "−2", "−5", "6"].map((c, i) => tx(80 + i * 46, 62, c, { fs: 15, w: 700 })).join("")}
  ${tx(36, 96, "1", { fs: 15, c: "var(--red)" })}
  ${["", "1", "−1", "−6"].map((c, i) => c && tx(80 + i * 46, 96, c, { fs: 14, c: "var(--muted)", w: 400 })).join("")}
  ${["1", "−1", "−6", "0"].map((c, i) => tx(80 + i * 46, 132, c, { fs: 15, c: i === 3 ? "var(--leaf)" : "var(--pen)" })).join("")}
  <rect x="200" y="116" width="32" height="24" rx="6" fill="none" stroke="var(--leaf)" stroke-width="2"/>
  ${tx(130, 26, "(x³ − 2x² − 5x + 6) : (x − 1)", { fs: 12.5, c: "var(--muted)" })}${tx(110, 162, "C = x² − x − 6", { fs: 12.5, c: "var(--pen)" })}${tx(216, 162, "R = 0", { fs: 12.5, c: "var(--leaf)" })}`);

const resto = formula("Teorema del resto: el resto de dividir P de x entre x menos a es P de a", "R = P(a)", ["al dividir P(x) entre (x − a)", "si P(a) = 0, a es raíz", "y (x − a) es un factor de P(x)"], "var(--leaf)");

const raices = ejes("Raíces de un polinomio: los puntos donde su gráfica corta al eje x, en menos 2, 1 y 3", { x: [-3, 4], y: [-8, 10], paso: 1, pasoY: 2, marcasX: [-2, 1, 3], marcasY: [], curvas: [{ f: (x) => (x + 2) * (x - 1) * (x - 3), c: "var(--pen)", t: "(x+2)(x−1)(x−3)", tx: 2.3, ty: 8.4 }], puntos: [[-2, 0, "", "var(--red)"], [1, 0, "", "var(--red)"], [3, 0, "", "var(--red)"]] });

const factorizar = pasos("Pasos para factorizar un polinomio: factor común, identidades notables, Ruffini con divisores del término independiente y ecuación de segundo grado", ["¿Factor común? Sácalo", "¿Identidad notable? Úsala", "Ruffini: prueba divisores del t. indep.", "Grado 2: fórmula o identidad", "Escribe el producto final"], "Estrategia para factorizar");

const fracciones = comparar("Simplificar fracciones algebraicas factorizando: solo se tachan factores, nunca sumandos", [
  ["Bien", ["(x² − 9)/(x + 3)", "= (x+3)(x−3)/(x+3)", "= x − 3"], "var(--leaf)"],
  ["Mal", ["(x + 9)/(x + 3)", "tachar las x", "→ 9/3 ✗"], "var(--red)"],
], "Tachar solo factores");

const aplic = cajas("Polinomios en la vida real: área de un marco, volumen de una caja, ingresos y trayectoria", [
  ["Marco", ["área: (x+4)² − x²", "= 8x + 16"]], ["Caja", ["V = x(20−2x)²", "grado 3"]],
  ["Ingresos", ["I = p · (100 − 2p)", "grado 2"]], ["Balón", ["h = −5t² + 12t", "grado 2"]],
], "Fórmulas que son polinomios");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Polinomios",
  minutos: 110,
  objetivos: [
    "Traducir enunciados al lenguaje algebraico y reconocer monomios y polinomios",
    "Calcular el valor numérico de un polinomio e interpretarlo",
    "Sumar, restar, multiplicar y dividir polinomios",
    "Usar las identidades notables para desarrollar y factorizar",
    "Aplicar la regla de Ruffini y el teorema del resto para hallar raíces",
    "Factorizar polinomios sencillos y simplificar fracciones algebraicas",
  ],
  claves: ["monomio", "polinomio", "grado", "valor numérico", "identidad notable", "Ruffini", "teorema del resto", "raíz", "factorizar"],
  pregunta: {
    texto: "Piensa un número, súmale 3, multiplica por 2, réstale 6 y divide entre 2. ¿Por qué siempre sale el número que has pensado?",
    respuesta: "Con álgebra se ve enseguida. Si el número es x: (x + 3) · 2 = 2x + 6; menos 6 es <b>2x</b>; entre 2 es <mark>x</mark>. Las operaciones con <b>polinomios</b> explican por qué funciona el truco con cualquier número.",
  },
  lectura: {
    titulo: "La «cosa» de los matemáticos árabes",
    html: `<p>En el siglo IX, en la Casa de la Sabiduría de Bagdad, el matemático persa al-Juarismi escribió un libro sobre cómo resolver problemas de herencias, comercio y medición de terrenos. Su título incluía la palabra <i>al-jabr</i>, «recomponer», de la que viene nuestra palabra <b>álgebra</b>. Y de su nombre procede la palabra «algoritmo».</p><p>Al-Juarismi no usaba letras: escribía todo con palabras. A la cantidad desconocida la llamaba «la cosa», y a su cuadrado, «el bien». Hicieron falta siglos para llegar a la notación actual: los signos + y − se popularizaron en el siglo XV, el signo = lo inventó Robert Recorde en 1557 y la costumbre de usar x para la incógnita se extendió con Descartes en el XVII.</p><p>Hoy los polinomios están en todas partes: describen la trayectoria de un balón, el beneficio de una empresa según el precio, la forma de las curvas de una carretera o los gráficos de los videojuegos, que usan curvas polinómicas para dibujar formas suaves. En este tema aprenderás a operar con ellos con soltura, la base de las ecuaciones y las funciones que vienen después.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 El lenguaje algebraico</h3><p>El <b>lenguaje algebraico</b> usa letras para representar números desconocidos o que pueden cambiar. Así, «el doble de un número» se escribe 2x; «un número aumentado en 5», x + 5; «la mitad de un número menos 3», x/2 − 3; y «dos números consecutivos», x y x + 1. Traducir bien es el primer paso para resolver cualquier problema con ecuaciones.</p><p>Las letras permiten escribir <b>fórmulas</b> generales: el área de un rectángulo es A = b · h, el precio de n entradas a 8 € es 8n, y el perímetro de un cuadrado de lado l es 4l. Al usar letras hay que decir siempre qué representan («x = número de entradas»), porque una letra sin significado no sirve para resolver nada.</p>`, svg: lenguaje },
    { html: `<h3>1.2 Monomios</h3><p>Un <b>monomio</b> es una expresión algebraica formada por un número multiplicado por letras con exponentes naturales, como −5x²y. El número es el <b>coeficiente</b> (−5) y las letras con sus exponentes forman la <b>parte literal</b> (x²y). El <b>grado</b> es la suma de los exponentes de las letras: 2 + 1 = 3.</p><p>Dos monomios son <b>semejantes</b> si tienen la misma parte literal: 3x² y −7x² lo son, pero 3x² y 3x no. Solo los monomios semejantes se pueden <b>sumar o restar</b>, y se hace sumando los coeficientes: 3x² − 7x² = −4x². En cambio, cualquier par se puede <b>multiplicar</b>, multiplicando coeficientes y sumando exponentes de la misma letra: (2x³) · (−4x) = −8x⁴.</p>`, svg: monomio },
    { html: `<h3>1.3 Polinomios: grado y términos</h3><p>Un <b>polinomio</b> es una suma de monomios no semejantes, llamados <b>términos</b>. Por ejemplo, P(x) = 4x³ − 2x + 7. El <b>grado</b> del polinomio es el mayor grado de sus términos (aquí, 3); el coeficiente del término de mayor grado es el <b>coeficiente principal</b> (4) y el término sin letra es el <b>término independiente</b> (7).</p><p>Un polinomio está <b>ordenado</b> si sus términos van de mayor a menor grado, y está <b>completo</b> si aparecen todos los grados, aunque sea con coeficiente 0: 4x³ + 0x² − 2x + 7. Ordenar y completar es imprescindible para dividir y para aplicar la regla de Ruffini. Los polinomios de grado 1 se llaman lineales; los de grado 2, cuadráticos; los de grado 3, cúbicos.</p>`, svg: polinomio },
    { html: `<h3>1.4 Valor numérico</h3><p>El <b>valor numérico</b> de un polinomio para x = a es el número que se obtiene al sustituir la x por a y operar. Si P(x) = x² − 2x − 3, entonces P(0) = −3, P(2) = 4 − 4 − 3 = −3 y P(3) = 9 − 6 − 3 = 0. Al sustituir números negativos hay que usar <b>paréntesis</b>: P(−1) = (−1)² − 2(−1) − 3 = 1 + 2 − 3 = 0.</p><p>Calcular valores numéricos es lo que hacemos al usar una fórmula: si la altura de un balón es h(t) = −5t² + 12t, a los 2 segundos está a h(2) = −20 + 24 = 4 m. Los valores de x que hacen <mark>P(x) = 0</mark> se llaman <b>raíces</b> del polinomio; en el ejemplo, 3 y −1. En la gráfica, las raíces son los puntos donde la curva corta al eje horizontal.</p>`, svg: valor },
    { html: `<h3>2.1 Suma y resta de polinomios</h3><p>Para <b>sumar</b> polinomios se agrupan los términos semejantes y se suman sus coeficientes: (3x² − 2x + 5) + (x² + 4x − 1) = 4x² + 2x + 4. Es útil colocar un polinomio debajo de otro, alineando los términos del mismo grado, como en las sumas en columna.</p><p>Para <b>restar</b>, se suma el <b>opuesto</b>: se cambian los signos de todos los términos del polinomio que resta. (3x² − 2x + 5) − (x² + 4x − 1) = 3x² − 2x + 5 − x² − 4x + 1 = 2x² − 6x + 6. El error más frecuente es cambiar solo el signo del primer término del sustraendo: el paréntesis precedido de un menos afecta a todo lo que hay dentro.</p>`, svg: suma },
    { html: `<h3>2.2 Multiplicación de polinomios</h3><p>Para multiplicar un monomio por un polinomio se aplica la <b>propiedad distributiva</b>: 3x · (2x² − x + 4) = 6x³ − 3x² + 12x. Para multiplicar dos polinomios, se multiplica <b>cada término del primero por cada término del segundo</b> y después se reducen los semejantes: (x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6.</p><p>Hay una interpretación geométrica muy clara: el producto (x + 3)(x + 2) es el <b>área</b> de un rectángulo de lados x + 3 y x + 2, que se divide en cuatro trozos: x², 3x, 2x y 6. El grado del producto es la suma de los grados de los factores. Comprueba siempre el número de productos: un binomio por un trinomio da 2 · 3 = 6 productos antes de agrupar.</p>`, svg: area, video: { id: "6-1NJt3-lTg", titulo: "Multiplicación de polinomios: polinomio por polinomio, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 0, megusta: 0 } },
    { html: `<h3>2.3 Identidades notables</h3><p>Algunos productos aparecen tanto que conviene saberlos de memoria. Son las <b>identidades notables</b>: el <b>cuadrado de una suma</b> (a + b)² = a² + 2ab + b², el <b>cuadrado de una diferencia</b> (a − b)² = a² − 2ab + b² y la <b>suma por diferencia</b> (a + b)(a − b) = a² − b².</p><p>El dibujo explica la primera: un cuadrado de lado a + b se divide en un cuadrado a², otro b² y dos rectángulos ab. Por eso <mark>(a + b)² no es a² + b²</mark>: faltan los dos rectángulos. Ejemplos: (x + 3)² = x² + 6x + 9; (2x − 1)² = 4x² − 4x + 1; (x + 5)(x − 5) = x² − 25. También sirven para calcular de cabeza: 51² = (50 + 1)² = 2.500 + 100 + 1 = 2.601.</p>${tabla(["Identidad", "Desarrollo", "Ejemplo"], [["(a + b)²", "a² + 2ab + b²", "(x + 4)² = x² + 8x + 16"], ["(a − b)²", "a² − 2ab + b²", "(3x − 2)² = 9x² − 12x + 4"], ["(a + b)(a − b)", "a² − b²", "(x + 7)(x − 7) = x² − 49"]])}`, svg: cuadradoSuma, video: { id: "G-ym95yl3Es", titulo: "Productos notables, conceptos previos", canal: "Matemáticas profe Alex", vistas: 3992139, megusta: 0 } },
    { html: `<h3>2.4 Identidades notables al revés</h3><p>Las identidades también se usan <b>de derecha a izquierda</b>, para escribir un polinomio como producto. Si reconoces un trinomio cuadrado perfecto, como x² + 10x + 25, puedes escribirlo como (x + 5)². Para comprobarlo, mira si el primer y el último término son cuadrados (x² y 5²) y si el término central es el doble de su producto (2 · x · 5 = 10x).</p><p>Una diferencia de cuadrados se factoriza como suma por diferencia: x² − 16 = (x + 4)(x − 4) y 9x² − 1 = (3x + 1)(3x − 1). En cambio, una <b>suma</b> de cuadrados como x² + 16 no se puede factorizar con números reales. Esta habilidad es la clave para simplificar fracciones algebraicas y resolver ecuaciones rápidamente.</p>`, svg: identidades },
    { html: `<h3>2.5 División de polinomios</h3><p>La división de polinomios se hace igual que la división larga de números. Se ordenan y completan dividendo y divisor. Se divide el primer término del dividendo entre el primero del divisor, se multiplica el resultado por todo el divisor, se resta y se «baja» el siguiente término. Se repite hasta que el resto tenga grado menor que el divisor.</p><p>Al dividir x² + 5x + 7 entre x + 2 se obtiene cociente C(x) = x + 3 y resto R = 1. Igual que con números, se cumple la <b>prueba de la división</b>: <mark>D(x) = d(x) · C(x) + R(x)</mark>. En efecto, (x + 2)(x + 3) + 1 = x² + 5x + 6 + 1 = x² + 5x + 7. Si el resto es 0, la división es exacta y el divisor es un factor del dividendo.</p>`, svg: division },
    { html: `<h3>2.6 La regla de Ruffini</h3><p>Cuando el divisor es de la forma <b>x − a</b>, la división se hace más rápido con la <b>regla de Ruffini</b>, que solo usa los coeficientes. Se escriben los coeficientes del dividendo ordenado y completo; a la izquierda, el número a. Se baja el primer coeficiente, se multiplica por a, se suma con el siguiente, y así hasta el final. El último número es el <b>resto</b>; los anteriores, los coeficientes del cociente, que tiene un grado menos.</p><p>Para dividir x³ − 2x² − 5x + 6 entre x − 1: coeficientes 1, −2, −5, 6 y a = 1. Se obtiene 1, −1, −6 y resto 0. El cociente es x² − x − 6. Cuidado con el signo: si se divide entre x + 3, entonces a = −3. Y no olvides los <b>ceros</b> de los términos que faltan.</p>`, svg: ruffini, video: { id: "vzi21Dcf_lI", titulo: "Regla de Ruffini", canal: "Gominol Tree Matemáticas", vistas: 1517002, megusta: 0 } },
    { html: `<h3>2.7 El teorema del resto</h3><p>El <b>teorema del resto</b> dice que el resto de dividir P(x) entre x − a es igual al valor numérico <mark>P(a)</mark>. Así se puede saber el resto sin hacer la división: el resto de dividir x³ − 4x + 1 entre x − 2 es P(2) = 8 − 8 + 1 = 1.</p><p>La consecuencia más útil es esta: si P(a) = 0, la división es exacta y <b>(x − a) es un factor</b> de P(x); además, a es una <b>raíz</b>. Para encontrar raíces enteras se prueban los <b>divisores del término independiente</b>: en x³ − 2x² − 5x + 6 se prueban ±1, ±2, ±3, ±6. P(1) = 0, así que x = 1 es raíz. Esta idea se usa en el bloque siguiente para factorizar.</p>`, svg: resto },
    { html: `<h3>3.1 Raíces y factores</h3><p>Un número a es <b>raíz</b> de un polinomio si P(a) = 0. Cada raíz da un factor (x − a), y un polinomio de grado n tiene <b>como máximo n raíces</b> reales. Si conocemos todas las raíces, el polinomio se escribe como producto: x³ − 2x² − 5x + 6 = (x − 1)(x + 2)(x − 3), porque sus raíces son 1, −2 y 3.</p><p>Gráficamente, las raíces son los <b>cortes con el eje X</b>. Esta conexión entre álgebra y gráficas es muy potente: al factorizar un polinomio sabemos dónde su gráfica cruza el eje, y al ver una gráfica podemos adivinar sus factores. Las ecuaciones de segundo grado que verás en el tema siguiente son, en el fondo, búsquedas de raíces de polinomios de grado 2.</p>`, svg: raices },
    { html: `<h3>3.2 Factorizar paso a paso</h3><p><b>Factorizar</b> un polinomio es escribirlo como producto de polinomios de grado lo más bajo posible, igual que 60 = 2² · 3 · 5. Una estrategia ordenada: 1) sacar <b>factor común</b> si lo hay: 2x³ − 8x = 2x(x² − 4); 2) reconocer <b>identidades notables</b>: x² − 4 = (x + 2)(x − 2); 3) si no, aplicar <b>Ruffini</b> con los divisores del término independiente; 4) cuando quede un polinomio de grado 2, resolver la ecuación de segundo grado para hallar sus raíces.</p><p>Resultado del ejemplo: 2x³ − 8x = 2x(x + 2)(x − 2). Si un polinomio de grado 2 no tiene raíces reales, como x² + 1, se deja tal cual: es <b>irreducible</b>. Comprueba siempre multiplicando los factores: debes recuperar el polinomio inicial.</p>`, svg: factorizar },
    { html: `<h3>3.3 Fracciones algebraicas</h3><p>Una <b>fracción algebraica</b> es un cociente de polinomios, como (x² − 9)/(x + 3). Se simplifica igual que una fracción numérica: se <b>factorizan</b> numerador y denominador y se tachan los <b>factores</b> comunes: (x + 3)(x − 3)/(x + 3) = x − 3 (para x ≠ −3).</p><p>Lo que nunca se puede hacer es tachar <b>sumandos</b>: en (x + 9)/(x + 3) no se pueden tachar las x, igual que en (2 + 9)/(2 + 3) = 11/5 no se pueden tachar los 2. Antes de simplificar, pregúntate siempre: «¿está multiplicando todo lo demás?». Las fracciones algebraicas aparecen en fórmulas de física (velocidad media, resistencias) y en problemas de trabajo conjunto.</p>`, svg: fracciones },
    { html: `<h3>3.4 Los polinomios en la vida real</h3><p>Muchas situaciones se describen con polinomios. El área de un marco de 2 cm de ancho alrededor de una foto cuadrada de lado x es (x + 4)² − x² = 8x + 16. Una caja sin tapa hecha con una cartulina de 20 cm de lado, cortando cuadrados de lado x en las esquinas, tiene un volumen V(x) = x(20 − 2x)², un polinomio de grado 3.</p><p>En economía, si una tienda vende 100 − 2p unidades a un precio p, sus ingresos son I(p) = p(100 − 2p) = 100p − 2p². En física, la altura de un objeto lanzado hacia arriba es h(t) = −5t² + v₀t + h₀. Saber operar, evaluar y factorizar estos polinomios permite responder preguntas como «¿cuándo toca el suelo?» o «¿qué precio da más ingresos?».</p>`, svg: aplic },
  ],
  ejemplos: [
    { enunciado: "Dados P(x) = 2x³ − x + 4 y Q(x) = x² + 3x − 2, calcula P(x) − Q(x).", pasos: ["Cambiamos los signos de Q: −x² − 3x + 2.", "Sumamos: 2x³ − x² + (−x − 3x) + (4 + 2).", "Reducimos: 2x³ − x² − 4x + 6."], resultado: "P(x) − Q(x) = 2x³ − x² − 4x + 6." },
    { enunciado: "Multiplica (2x − 3)(x² + x − 1).", pasos: ["2x · (x² + x − 1) = 2x³ + 2x² − 2x.", "−3 · (x² + x − 1) = −3x² − 3x + 3.", "Sumamos semejantes: 2x³ + (2x² − 3x²) + (−2x − 3x) + 3."], resultado: "2x³ − x² − 5x + 3." },
    { enunciado: "Desarrolla (3x − 2)² y (x + 2y)(x − 2y).", pasos: ["(3x − 2)² = (3x)² − 2 · 3x · 2 + 2² = 9x² − 12x + 4.", "(x + 2y)(x − 2y) = x² − (2y)² = x² − 4y²."], resultado: "9x² − 12x + 4 y x² − 4y²." },
    { enunciado: "Divide x³ + 2x² − 5x − 6 entre x + 1 por Ruffini.", pasos: ["Coeficientes: 1, 2, −5, −6. Como x + 1 = x − (−1), a = −1.", "Bajamos 1. 1 · (−1) = −1; 2 − 1 = 1.", "1 · (−1) = −1; −5 − 1 = −6.", "−6 · (−1) = 6; −6 + 6 = 0."], resultado: "Cociente x² + x − 6, resto 0: x = −1 es raíz." },
    { enunciado: "Factoriza P(x) = x³ − 7x + 6.", pasos: ["Completamos: 1, 0, −7, 6. Divisores de 6: ±1, ±2, ±3, ±6.", "P(1) = 1 − 7 + 6 = 0 → Ruffini con 1: cociente x² + x − 6.", "x² + x − 6 = 0 → x = 2 o x = −3.", "Factores: (x − 1)(x − 2)(x + 3)."], resultado: "x³ − 7x + 6 = (x − 1)(x − 2)(x + 3)." },
    { enunciado: "Simplifica (x² − 6x + 9)/(x² − 9).", pasos: ["Numerador: trinomio cuadrado perfecto, (x − 3)².", "Denominador: diferencia de cuadrados, (x + 3)(x − 3).", "Tachamos un factor (x − 3)."], resultado: "(x − 3)/(x + 3), para x ≠ ±3." },
  ],
  errores: [
    "Sumar monomios no semejantes: 3x² + 2x no es 5x³.",
    "Al restar un polinomio, cambiar solo el signo del primer término.",
    "Escribir (a + b)² = a² + b², olvidando el doble producto 2ab.",
    "En Ruffini, olvidar los ceros de los términos que faltan o usar el signo cambiado de a.",
    "Al sustituir un valor negativo, no poner paréntesis: −2² ≠ (−2)².",
    "Simplificar fracciones algebraicas tachando sumandos en lugar de factores.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Traduce: a) el triple de un número menos 4; b) la suma de dos números consecutivos; c) el cuadrado de un número más su mitad.", sol: "a) 3x − 4. b) x + (x + 1) = 2x + 1. c) x² + x/2." },
    { nivel: "básico", q: "Indica coeficiente, parte literal y grado: −7x³y², (2/3)ab, 9.", sol: "−7x³y²: coeficiente −7, parte literal x³y², grado 5. (2/3)ab: coeficiente 2/3, parte ab, grado 2. 9: coeficiente 9, sin parte literal, grado 0." },
    { nivel: "básico", q: "Opera: 4x² − 7x² + x², (3x)(−5x³) y 12x⁵ : 4x².", sol: "4x² − 7x² + x² = −2x². (3x)(−5x³) = −15x⁴. 12x⁵ : 4x² = 3x³." },
    { nivel: "básico", q: "Di el grado, el coeficiente principal y el término independiente de P(x) = 5 − 3x² + x⁴.", sol: "Ordenado: x⁴ − 3x² + 5. Grado 4; coeficiente principal 1; término independiente 5." },
    { nivel: "básico", q: "Calcula P(2), P(−1) y P(0) si P(x) = x³ − 3x + 2.", sol: "P(2) = 8 − 6 + 2 = 4. P(−1) = −1 + 3 + 2 = 4. P(0) = 2." },
    { nivel: "básico", q: "Suma y resta P(x) = 3x² − x + 2 y Q(x) = −x² + 4x − 5.", sol: "P + Q = 2x² + 3x − 3. P − Q = 3x² − x + 2 + x² − 4x + 5 = 4x² − 5x + 7." },
    { nivel: "básico", q: "Multiplica: −2x(x² − 3x + 1) y (x + 4)(x − 1).", sol: "−2x³ + 6x² − 2x. (x + 4)(x − 1) = x² − x + 4x − 4 = x² + 3x − 4." },
    { nivel: "básico", q: "Desarrolla: (x + 6)², (x − 1)² y (x + 2)(x − 2).", sol: "x² + 12x + 36; x² − 2x + 1; x² − 4." },
    { nivel: "básico", q: "Saca factor común: 6x² + 9x, 4x³ − 2x² + 8x.", sol: "6x² + 9x = 3x(2x + 3). 4x³ − 2x² + 8x = 2x(2x² − x + 4)." },
    { nivel: "básico", q: "Usa el teorema del resto para hallar el resto de (x² + 3x − 1) : (x − 2).", sol: "R = P(2) = 4 + 6 − 1 = 9." },
    { nivel: "básico", q: "¿Es x = 3 raíz de P(x) = x² − 5x + 6? ¿Y x = 1?", sol: "P(3) = 9 − 15 + 6 = 0: sí. P(1) = 1 − 5 + 6 = 2 ≠ 0: no." },
    { nivel: "básico", q: "La altura de una pelota es h(t) = −5t² + 20t. Calcula h(1), h(2) y h(4) e interpreta h(4).", sol: "h(1) = 15 m; h(2) = 20 m; h(4) = −80 + 80 = 0 m: a los 4 s la pelota vuelve al suelo." },
    { nivel: "medio", q: "Calcula (2x − 1)(3x² + x − 4) y di el grado del resultado.", sol: "6x³ + 2x² − 8x − 3x² − x + 4 = 6x³ − x² − 9x + 4. Grado 3." },
    { nivel: "medio", q: "Desarrolla (2x + 5)², (3x − 4y)² y (5 − x²)(5 + x²).", sol: "4x² + 20x + 25; 9x² − 24xy + 16y²; 25 − x⁴." },
    { nivel: "medio", q: "Escribe como identidad notable: x² − 14x + 49, 4x² + 4x + 1 y x² − 100.", sol: "(x − 7)²; (2x + 1)²; (x + 10)(x − 10)." },
    { nivel: "medio", q: "Calcula de cabeza con identidades notables: 99², 101² y 52 · 48.", sol: "99² = (100 − 1)² = 9.801. 101² = (100 + 1)² = 10.201. 52 · 48 = (50 + 2)(50 − 2) = 2.500 − 4 = 2.496." },
    { nivel: "medio", q: "Divide (2x³ − 3x² + x − 5) entre (x² − 1) y haz la prueba.", sol: "2x³ : x² = 2x → resta 2x³ − 2x: queda −3x² + 3x − 5. −3x² : x² = −3 → resta −3x² + 3: queda 3x − 8. C = 2x − 3, R = 3x − 8. Prueba: (x² − 1)(2x − 3) + 3x − 8 = 2x³ − 3x² − 2x + 3 + 3x − 8 = 2x³ − 3x² + x − 5 ✓." },
    { nivel: "medio", q: "Divide por Ruffini (x⁴ − 3x² + 2x − 4) entre (x − 2).", sol: "Coeficientes 1, 0, −3, 2, −4 y a = 2: 1, 2, 1, 4, resto 4. Cociente x³ + 2x² + x + 4; resto 4." },
    { nivel: "medio", q: "Divide por Ruffini (2x³ + 5x² − 4x − 3) entre (x + 3).", sol: "a = −3. Coeficientes 2, 5, −4, −3: 2; 5 − 6 = −1; −4 + 3 = −1; −3 + 3 = 0. Cociente 2x² − x − 1, resto 0." },
    { nivel: "medio", q: "Halla k para que P(x) = x³ + kx − 6 sea divisible entre x − 2.", sol: "Debe ser P(2) = 0: 8 + 2k − 6 = 0 → 2k = −2 → k = −1." },
    { nivel: "medio", q: "Factoriza: 3x² − 12, x³ − 6x² + 9x y 2x² − 8x + 8.", sol: "3(x² − 4) = 3(x + 2)(x − 2). x(x² − 6x + 9) = x(x − 3)². 2(x² − 4x + 4) = 2(x − 2)²." },
    { nivel: "medio", q: "Factoriza x³ − 4x² + x + 6 buscando raíces enteras.", sol: "Divisores de 6. P(−1) = −1 − 4 − 1 + 6 = 0. Ruffini con −1: x² − 5x + 6 = (x − 2)(x − 3). Resultado: (x + 1)(x − 2)(x − 3)." },
    { nivel: "medio", q: "Simplifica: (x² − 4)/(x² + 2x) y (3x + 6)/(x² + 4x + 4).", sol: "(x + 2)(x − 2)/[x(x + 2)] = (x − 2)/x. 3(x + 2)/(x + 2)² = 3/(x + 2)." },
    { nivel: "medio", q: "Expresa con un polinomio el área de un rectángulo cuya base mide 3 cm más que la altura x, y calcula el área si x = 5.", sol: "A(x) = x(x + 3) = x² + 3x. A(5) = 25 + 15 = 40 cm²." },
    { nivel: "avanzado", q: "Demuestra con álgebra el truco: «piensa un número, multiplícalo por 4, súmale 10, divide entre 2 y réstale el doble del número pensado: siempre sale 5».", sol: "(4x + 10)/2 − 2x = 2x + 5 − 2x = 5. El resultado no depende de x." },
    { nivel: "avanzado", q: "Demuestra que el producto de dos números consecutivos más el mayor es el cuadrado del mayor.", sol: "Números x y x + 1: x(x + 1) + (x + 1) = x² + x + x + 1 = x² + 2x + 1 = (x + 1)²." },
    { nivel: "avanzado", q: "Factoriza completamente x⁴ − 5x² + 4.", sol: "Raíces: probando ±1, ±2 se obtiene P(1) = P(−1) = P(2) = P(−2) = 0. Resultado: (x − 1)(x + 1)(x − 2)(x + 2). También: x⁴ − 5x² + 4 = (x² − 1)(x² − 4)." },
    { nivel: "avanzado", q: "Halla a y b para que P(x) = x³ + ax² + bx − 6 tenga raíces 1 y 2.", sol: "P(1) = 1 + a + b − 6 = 0 → a + b = 5. P(2) = 8 + 4a + 2b − 6 = 0 → 4a + 2b = −2 → 2a + b = −1. Restando: a = −6, b = 11. P(x) = x³ − 6x² + 11x − 6." },
    { nivel: "avanzado", q: "De una cartulina cuadrada de 20 cm se cortan cuadrados de lado x en las esquinas para hacer una caja sin tapa. Escribe el volumen como polinomio y calcúlalo para x = 3 y x = 5.", sol: "V(x) = x(20 − 2x)² = x(400 − 80x + 4x²) = 4x³ − 80x² + 400x. V(3) = 3 · 14² = 588 cm³. V(5) = 5 · 10² = 500 cm³." },
    { nivel: "avanzado", q: "Simplifica (x³ − x)/(x² + x) · (x + 2)/(x − 1).", sol: "x³ − x = x(x + 1)(x − 1); x² + x = x(x + 1). Primera fracción: x − 1. Producto: (x − 1)(x + 2)/(x − 1) = x + 2 (para x ≠ 0, −1, 1)." },
    { nivel: "avanzado", q: "Un marco de ancho constante x rodea una foto de 20 × 30 cm. Escribe el área del marco como polinomio y calcúlala para x = 2.", sol: "Área total (20 + 2x)(30 + 2x) = 600 + 100x + 4x². Área del marco = 4x² + 100x. Para x = 2: 16 + 200 = 216 cm²." },
    { nivel: "avanzado", q: "¿Cuántas raíces reales puede tener como máximo un polinomio de grado 4? Pon un ejemplo con 4 raíces y otro con ninguna.", sol: "Como máximo 4. Con 4: (x − 1)(x − 2)(x − 3)(x − 4). Con ninguna: x⁴ + 1, que siempre es positivo." },
  ],
  quiz: [
    { q: "«El doble de un número menos 7» es…", o: ["2(x − 7)", "2x − 7", "x² − 7", "7 − 2x"], a: 1, e: "Primero el doble, luego se resta 7." },
    { q: "El grado de −3x²y⁴ es…", o: ["2", "4", "6", "−3"], a: 2, e: "2 + 4 = 6." },
    { q: "¿Qué monomios son semejantes?", o: ["3x² y 3x", "5xy y −2xy", "x³ y 3x", "2x y 2y"], a: 1, e: "Misma parte literal xy." },
    { q: "3x² + 5x² =", o: ["8x⁴", "8x²", "15x²", "15x⁴"], a: 1, e: "Se suman los coeficientes." },
    { q: "(2x³) · (4x²) =", o: ["8x⁶", "6x⁵", "8x⁵", "8x"], a: 2, e: "2 · 4 = 8 y 3 + 2 = 5." },
    { q: "Si P(x) = x² − 3x, P(−2) vale…", o: ["−2", "10", "2", "−10"], a: 1, e: "4 + 6 = 10." },
    { q: "El término independiente de 4x³ − x + 9 es…", o: ["4", "−1", "9", "3"], a: 2, e: "Es el término sin x." },
    { q: "(x + 5)² =", o: ["x² + 25", "x² + 10x + 25", "x² + 5x + 25", "2x + 10"], a: 1, e: "a² + 2ab + b²." },
    { q: "(x − 3)(x + 3) =", o: ["x² − 9", "x² + 9", "x² − 6x − 9", "x² − 6"], a: 0, e: "Suma por diferencia." },
    { q: "x² − 8x + 16 es igual a…", o: ["(x − 8)²", "(x − 4)²", "(x + 4)²", "(x − 4)(x + 4)"], a: 1, e: "Cuadrado de una diferencia." },
    { q: "−(2x − 5) =", o: ["−2x − 5", "2x + 5", "−2x + 5", "2x − 5"], a: 2, e: "Cambian todos los signos." },
    { q: "Al dividir P(x) entre x − 4, el resto es…", o: ["P(0)", "P(−4)", "P(4)", "4"], a: 2, e: "Teorema del resto." },
    { q: "Para dividir por Ruffini entre x + 2, se usa a =", o: ["2", "−2", "x", "1/2"], a: 1, e: "x + 2 = x − (−2)." },
    { q: "Si P(3) = 0, entonces…", o: ["x + 3 es factor", "x − 3 es factor", "3 es el resto", "P no tiene raíces"], a: 1, e: "Cada raíz a da el factor x − a." },
    { q: "Para buscar raíces enteras se prueban…", o: ["los divisores del coeficiente principal", "los divisores del término independiente", "los números del 1 al 10", "solo el 0"], a: 1, e: "Las raíces enteras dividen al término independiente." },
    { q: "Factorizar x² − 25 da…", o: ["(x − 5)²", "(x + 5)(x − 5)", "x(x − 25)", "(x − 25)(x + 1)"], a: 1, e: "Diferencia de cuadrados." },
    { q: "Factor común de 6x³ − 9x²:", o: ["3x(2x² − 3)", "3x²(2x − 3)", "x²(6x − 9)", "6x²(x − 9)"], a: 1, e: "El máximo común es 3x²." },
    { q: "(x² − 1)/(x − 1) simplificada es…", o: ["x", "x + 1", "x − 1", "x² "], a: 1, e: "(x + 1)(x − 1)/(x − 1)." },
    { q: "Un polinomio de grado 3 tiene como máximo…", o: ["2 raíces", "3 raíces", "4 raíces", "infinitas"], a: 1, e: "Tantas como su grado." },
    { q: "El grado de (x² + 1)(x³ − x) es…", o: ["5", "6", "3", "2"], a: 0, e: "Se suman los grados: 2 + 3." },
  ],
  examen: [
    { q: "(3x² − x + 2) − (x² + x − 4) =", o: ["2x² − 2x + 6", "2x² − 2", "2x² + 6", "4x² − 2x − 2"], a: 0, e: "3x² − x + 2 − x² − x + 4." },
    { q: "(2x − 3)² =", o: ["4x² − 9", "4x² − 12x + 9", "4x² + 9", "2x² − 6x + 9"], a: 1, e: "a² − 2ab + b²." },
    { q: "Resto de (x³ + 1) : (x + 1):", o: ["2", "0", "1", "−2"], a: 1, e: "P(−1) = −1 + 1 = 0." },
    { q: "Ruffini de x² + x − 6 entre x − 2 da cociente…", o: ["x + 3", "x − 3", "x + 2", "x − 2"], a: 0, e: "Coeficientes 1, 3 y resto 0." },
    { q: "x³ − 4x factorizado:", o: ["x(x − 2)²", "x(x + 2)(x − 2)", "(x − 2)(x + 2)", "x²(x − 4)"], a: 1, e: "x(x² − 4)." },
    { q: "Valor de 2x² − x para x = −3:", o: ["15", "21", "−21", "−15"], a: 1, e: "18 + 3 = 21." },
    { q: "¿Qué número NO es posible raíz entera de x³ + 2x − 10?", o: ["2", "5", "3", "−10"], a: 2, e: "3 no divide a 10." },
    { q: "51² calculado con identidades es…", o: ["2.501", "2.601", "2.551", "2.611"], a: 1, e: "2.500 + 100 + 1." },
  ],
  feynman: ["Qué es un polinomio y cómo se calcula su grado", "Cómo se multiplican dos polinomios y qué tiene que ver con el área", "Para qué sirven Ruffini y el teorema del resto", "Cómo se factoriza un polinomio y por qué las raíces dan los factores"],
  figura: {
    titulo: "Polinomios: de operar a factorizar",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen del tema: operaciones, identidades notables, Ruffini y teorema del resto, factorización">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Operar", "sumar semejantes · multiplicar todos por todos", "var(--pen)"], ["Identidades", "(a ± b)² = a² ± 2ab + b² · (a + b)(a − b) = a² − b²", "var(--red)"], ["Ruffini y resto", "dividir entre x − a · resto = P(a)", "var(--leaf)"], ["Factorizar", "factor común → identidades → Ruffini → grado 2", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="190" y="${43 + i * 50}" font-size="14.5" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "DV3C_RawfBg", titulo: "Lenguaje algebraico, parte 1", canal: "Matemáticas profe Alex", vistas: 0, megusta: 0, busqueda: "lenguaje algebraico" },
  mapa: mapa("POLINOMIOS", "var(--pen)", [
    ["Elementos", "grado · coeficientes · P(a)", "var(--pen)"],
    ["Operaciones", "+ − × ÷ · identidades", "var(--red)"],
    ["Ruffini", "dividir entre x − a · resto", "var(--leaf)"],
    ["Factorizar", "raíces → factores", "var(--inf)"],
  ], 230),
  glosario: [
    ["Expresión algebraica", "Combinación de números y letras unidos por operaciones."],
    ["Monomio", "Producto de un número por letras con exponentes naturales."],
    ["Coeficiente", "Número que multiplica a la parte literal."],
    ["Parte literal", "Letras con sus exponentes en un monomio."],
    ["Monomios semejantes", "Los que tienen la misma parte literal."],
    ["Polinomio", "Suma de monomios no semejantes."],
    ["Grado de un polinomio", "Mayor grado de sus términos."],
    ["Término independiente", "Término sin letra de un polinomio."],
    ["Valor numérico", "Resultado de sustituir la variable por un número."],
    ["Raíz", "Valor de x que hace P(x) = 0."],
    ["Identidades notables", "Productos que se desarrollan con una fórmula fija: (a ± b)², (a + b)(a − b)."],
    ["Regla de Ruffini", "Método rápido para dividir un polinomio entre x − a."],
    ["Teorema del resto", "El resto de dividir P(x) entre x − a es P(a)."],
    ["Factorizar", "Escribir un polinomio como producto de factores de menor grado."],
    ["Polinomio irreducible", "El que no se puede factorizar más con números reales."],
    ["Fracción algebraica", "Cociente de dos polinomios."],
  ],
  situacion: {
    titulo: "Diseñamos la caja perfecta",
    reto: "Una empresa de packaging necesita cajas sin tapa hechas a partir de cartulinas cuadradas de 24 cm de lado, cortando un cuadrado igual en cada esquina. Os pide el modelo matemático del volumen y una recomendación del tamaño de corte que da la caja más grande.",
    pasos: [
      "Construid con papel tres cajas con cortes de 2, 4 y 6 cm y medid sus dimensiones.",
      "Escribid el volumen como polinomio V(x) = x(24 − 2x)² y desarrolladlo.",
      "Calculad el valor numérico de V(x) para x = 1, 2, …, 11 en una tabla (o en hoja de cálculo).",
      "Representad los puntos y localizad el corte que da el mayor volumen.",
      "Factorizad V(x) y explicad qué significan sus raíces en el problema (cajas de volumen 0).",
    ],
    producto: "Un informe para la empresa con el polinomio, la tabla, la gráfica, la caja óptima construida y la recomendación.",
    evaluacion: ["Traduce correctamente la situación a un polinomio.", "Calcula valores numéricos y opera sin errores.", "Interpreta raíces y valores en el contexto del problema.", "Comunica la recomendación con claridad, apoyándose en la gráfica."],
  },
  tarjetas: [
    ["Grado de un monomio", "Suma de los exponentes de sus letras."],
    ["¿Qué se puede sumar?", "Solo monomios semejantes (misma parte literal)."],
    ["Restar polinomios", "Se cambian los signos de todo el sustraendo."],
    ["Multiplicar polinomios", "Cada término del primero por cada término del segundo."],
    ["(a + b)²", "a² + 2ab + b²"],
    ["(a − b)²", "a² − 2ab + b²"],
    ["(a + b)(a − b)", "a² − b²"],
    ["Prueba de la división", "D = d · C + R"],
    ["Ruffini", "Divide entre x − a usando solo coeficientes (¡con ceros!)."],
    ["Teorema del resto", "Resto de P(x) : (x − a) = P(a)."],
    ["Raíz", "Si P(a) = 0, (x − a) es factor."],
    ["Simplificar fracciones algebraicas", "Factorizar y tachar solo factores."],
  ],
  familias: ["Proponed trucos de «piensa un número» y descubrid juntos con álgebra por qué funcionan.", "Buscad fórmulas en casa (recetas, facturas, deporte) y escribidlas con letras.", "Construid una caja con una cartulina cortando las esquinas y calculad su volumen.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico: expresiones algebraicas, operaciones con polinomios, identidades notables, regla de Ruffini, teorema del resto, factorización y fracciones algebraicas sencillas (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Algeplano o fichas de álgebra para visualizar productos e identidades como áreas.", "Caja de volumen máximo con cartulinas (situación de aprendizaje).", "Trucos de magia numérica para motivar la generalización algebraica.", "GeoGebra: relacionar raíces y cortes con el eje X."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "GeoGebra: materiales de álgebra", url: "https://www.geogebra.org/" },
    { t: "Proyecto Descartes: polinomios (INTEF)", url: "https://proyectodescartes.org/" },
  ],
  revisado: "2026-11-13",
};
