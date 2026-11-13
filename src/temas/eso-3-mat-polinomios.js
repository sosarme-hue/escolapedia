// Matemáticas 3º ESO · Expresiones algebraicas y polinomios. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, comparar, resumen, rot, C, RD, DECRET } = require("./_eso3L1");

const lenguaje = cajas("Del lenguaje verbal al lenguaje algebraico", [
  ["El doble", ["de un número", "2x"]], ["Un número", ["más 5", "x + 5"]],
  ["Consecutivos", ["dos números", "x, x + 1"]], ["Área", ["rectángulo", "b · h"]],
], "Traducir al álgebra");

const valor = pasos("Valor numérico: sustituir las letras por números y operar", ["P(x) = 2x² − 3x + 1", "x = −2", "2·(−2)² − 3·(−2) + 1", "= 8 + 6 + 1", "P(−2) = 15"], "Valor numérico");

const monomio = lienzo("Partes de un monomio: coeficiente, parte literal y grado", `
  ${tx(84, 74, "−5", { fs: 34, c: "var(--red)", fam: D })}${tx(160, 74, "x²y", { fs: 34, c: "var(--pen)", fam: D })}
  ${tx(84, 104, "coeficiente", { fs: 12, c: "var(--red)" })}${tx(160, 104, "parte literal", { fs: 12, c: "var(--pen)" })}
  ${tx(130, 140, "grado = 2 + 1 = 3", { fs: 15, c: "var(--leaf)", fam: D })}${tx(130, 164, "suma de los exponentes de las letras", { fs: 11, w: 400 })}`);

const opMon = cajas("Operaciones con monomios", [
  ["Sumar", ["solo semejantes:", "3x² + 5x² = 8x²"], "var(--pen)"], ["Multiplicar", ["coef · coef, letras:", "2x³·4x² = 8x⁵"], "var(--leaf)"],
  ["Dividir", ["6x⁵ : 2x² = 3x³", "(puede no ser monomio)"], "var(--red)"], ["Potencia", ["(3x²)³", "= 27x⁶"], "var(--inf)"],
], "Monomios");

const poli = lienzo("Partes de un polinomio: términos, grado, coeficiente principal y término independiente", `
  ${tx(130, 52, "P(x) = 4x³ − 2x² + 7", { fs: 22, c: "var(--pen)", fam: D })}
  ${rot([[62, 84, "grado 3", "var(--red)"], [198, 84, "término indep.: 7", "var(--leaf)"], [130, 108, "falta el término en x → incompleto", "var(--muted)"]], 11.5)}
  ${tx(130, 136, "coeficiente principal: 4", { fs: 13 })}${tx(130, 162, "términos ordenados de mayor a menor grado", { fs: 11, w: 400 })}`);

const suma = lienzo("Sumar polinomios colocando en columna los términos semejantes", `
  ${[["", "3x³", "− 2x²", "+ 5x", "− 1"], ["+", "x³", "+ 4x²", "", "+ 6"], ["", "4x³", "+ 2x²", "+ 5x", "+ 5"]].map((f, i) => f.map((s, j) => tx([22, 66, 122, 178, 228][j], 40 + i * 38 + (i === 2 ? 10 : 0), s, { fs: 15, c: i === 2 ? "var(--leaf)" : "var(--ink)", fam: D, max: 52 })).join("")).join("")}
  <path d="M30 100 H246" stroke="var(--ink)" stroke-width="2"/>${tx(130, 166, "cada columna, un grado", { fs: 12, c: "var(--muted)" })}`);

const producto = lienzo("Multiplicar polinomios con un rectángulo de áreas: x más dos por x más tres", `
  <rect x="40" y="30" width="100" height="100" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><rect x="140" y="30" width="60" height="100" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>
  <rect x="40" y="130" width="100" height="40" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/><rect x="140" y="130" width="60" height="40" fill="var(--sun)" fill-opacity=".35" stroke="var(--sun)" stroke-width="2"/>
  ${rot([[90, 22, "x"], [170, 22, "3"], [28, 84, "x"], [28, 154, "2"], [90, 84, "x²", "var(--pen)"], [170, 84, "3x", "var(--leaf)"], [90, 154, "2x", "var(--red)"], [170, 154, "6"]], 13)}
  ${tx(228, 90, "x² + 5x + 6", { fs: 11, c: "var(--ink)", max: 58 })}`, 182);

const cuadSuma = lienzo("Cuadrado de una suma: a más b al cuadrado es a cuadrado más dos a b más b cuadrado", `
  <rect x="30" y="20" width="96" height="96" fill="var(--pen)" fill-opacity=".22" stroke="var(--pen)" stroke-width="2"/><rect x="126" y="20" width="44" height="96" fill="var(--leaf)" fill-opacity=".22" stroke="var(--leaf)" stroke-width="2"/>
  <rect x="30" y="116" width="96" height="44" fill="var(--leaf)" fill-opacity=".22" stroke="var(--leaf)" stroke-width="2"/><rect x="126" y="116" width="44" height="44" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2"/>
  ${rot([[78, 72, "a²", "var(--pen)"], [148, 72, "ab", "var(--leaf)"], [78, 142, "ab", "var(--leaf)"], [148, 142, "b²", "var(--red)"]], 14)}
  ${tx(214, 80, "(a + b)² =", { fs: 12, max: 80 })}${tx(214, 100, "a² + 2ab + b²", { fs: 12, c: "var(--pen)", max: 80 })}`, 176);

const cuadDif = formula("Cuadrado de una diferencia", "(a − b)² = a² − 2ab + b²", ["(x − 3)² = x² − 6x + 9", "¡No es x² − 9!", "Comprobar con x = 5: 4 = 25 − 30 + 9 ✓"], "var(--red)");

const sumaDif = lienzo("Suma por diferencia: a más b por a menos b es a cuadrado menos b cuadrado", `
  ${tx(130, 46, "(a + b)(a − b) = a² − b²", { fs: 19, c: "var(--leaf)", fam: D })}
  ${tx(130, 82, "(x + 5)(x − 5) = x² − 25", { fs: 15, fam: D })}
  ${tx(130, 112, "los términos 5x y −5x se anulan", { fs: 12, c: "var(--muted)" })}
  ${tx(130, 146, "cálculo mental: 21 · 19 = 400 − 1 = 399", { fs: 12.5, c: "var(--red)" })}`);

const factorComun = pasos("Factorizar con factor común e identidades notables", ["6x³ − 9x² = 3x²(2x − 3)", "x² − 16 = (x + 4)(x − 4)", "x² + 10x + 25 = (x + 5)²", "4x² − 12x + 9 = (2x − 3)²", "Comprobar multiplicando"], "Factorizar");

const division = lienzo("División de polinomios: el dividendo es igual al divisor por el cociente más el resto", `
  ${tx(130, 34, "D(x) = d(x) · c(x) + r(x)", { fs: 18, c: "var(--pen)", fam: D })}
  ${tx(130, 66, "grado de r < grado de d", { fs: 13, c: "var(--red)" })}
  ${tx(130, 100, "(x² + 5x + 7) : (x + 2)", { fs: 14, fam: D })}${tx(130, 128, "c(x) = x + 3,   r = 1", { fs: 14, c: "var(--leaf)", fam: D })}
  ${tx(130, 158, "(x + 2)(x + 3) + 1 = x² + 5x + 7 ✓", { fs: 12, w: 400 })}`);

const ruffini = lienzo("Regla de Ruffini para dividir dos x al cubo menos tres x más cinco entre x menos dos", `
  ${tx(130, 20, "(2x³ + 0x² − 3x + 5) : (x − 2)", { fs: 12.5, c: "var(--muted)" })}
  <path d="M60 32 V128 M40 98 H230" stroke="var(--ink)" stroke-width="2"/>
  ${[2, 0, -3, 5].map((v, i) => tx(90 + i * 44, 52, v, { fs: 15, fam: D })).join("")}${tx(46, 82, "2", { fs: 15, c: "var(--red)", fam: D })}
  ${[4, 8, 10].map((v, i) => tx(134 + i * 44, 82, v, { fs: 15, c: "var(--muted)", fam: D })).join("")}
  ${[2, 4, 5].map((v, i) => tx(90 + i * 44, 120, v, { fs: 15, c: "var(--leaf)", fam: D })).join("")}${tx(222, 120, "15", { fs: 15, c: "var(--red)", fam: D })}
  <rect x="204" y="102" width="36" height="26" rx="5" fill="none" stroke="var(--red)" stroke-width="2"/>
  ${tx(130, 156, "c(x) = 2x² + 4x + 5   r = 15", { fs: 13, c: "var(--pen)" })}`, 172);

const resto = comparar("Teorema del resto y raíces de un polinomio", [
  ["Teorema del resto", ["resto de P(x) : (x − a)", "= P(a)", "P(2) = 15"], "var(--pen)"],
  ["Raíz", ["P(a) = 0", "↔ (x − a) divide", "a P(x)"], "var(--leaf)"],
], "Sin dividir");

const usos = cajas("Para qué sirven los polinomios", [
  ["Áreas", ["x(x + 3)", "= x² + 3x"]], ["Costes", ["C = 50 + 2x", "fijo + variable"]],
  ["Física", ["h = 20t − 5t²", "lanzamiento"]], ["Demostrar", ["(n+1)² − n²", "= 2n + 1"]],
], "Polinomios en la vida real");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Expresiones algebraicas y polinomios",
  minutos: 110,
  objetivos: [
    "Traducir enunciados al lenguaje algebraico y calcular valores numéricos",
    "Reconocer monomios y polinomios, su grado y sus elementos",
    "Sumar, restar, multiplicar y dividir polinomios",
    "Aplicar las identidades notables para desarrollar y factorizar",
    "Dividir por (x − a) con la regla de Ruffini y usar el teorema del resto",
    "Usar el álgebra para modelizar situaciones y demostrar propiedades",
  ],
  claves: ["monomio", "polinomio", "grado", "valor numérico", "identidades notables", "factor común", "Ruffini", "teorema del resto"],
  pregunta: {
    texto: "Piensa un número, súmale 3, multiplícalo por 2, réstale 4 y divide entre 2. Ahora resta el número que pensaste. ¿Te ha salido 1?",
    respuesta: "Siempre sale 1. Con álgebra se ve por qué: si el número es x, queda <mark>(2(x + 3) − 4) / 2 − x = (2x + 2) / 2 − x = x + 1 − x = 1</mark>. Las letras permiten demostrar que algo funciona para todos los números a la vez.",
  },
  lectura: {
    titulo: "De las palabras a las letras",
    html: `<p>Durante siglos, los problemas de álgebra se escribían enteros con palabras. Un matemático árabe del siglo IX, al-Juarismi, escribió un libro titulado <i>Al-kitab al-mukhtasar fi hisab al-jabr wa-l-muqabala</i>. De la palabra <i>al-jabr</i>, que significa «restablecer» (pasar un término al otro lado de la igualdad), viene nuestra palabra «álgebra». Y de su nombre viene «algoritmo». Pero en su libro no aparece ni una sola letra como incógnita: todo se explicaba con frases larguísimas.</p><p>Tuvieron que pasar más de 700 años hasta que el francés François Viète, a finales del siglo XVI, empezó a usar letras para representar tanto las incógnitas como los datos. Poco después, Descartes popularizó la costumbre de llamar x, y, z a las incógnitas y a, b, c a los datos conocidos, la misma que usamos hoy.</p><p>Aquel cambio parece pequeño, pero transformó las matemáticas: con letras se pueden escribir reglas generales en una línea, operar con ellas y demostrar que algo es cierto para todos los números a la vez. En este tema aprenderás a manejar ese lenguaje: los monomios y polinomios, sus operaciones, las identidades notables y la división, que serán imprescindibles para resolver ecuaciones.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 El lenguaje algebraico</h3><p>Una <b>expresión algebraica</b> es una combinación de números y letras unidos por operaciones. Las letras representan números desconocidos o que pueden variar, y se llaman <b>variables</b>. Traducir del lenguaje verbal al algebraico es el primer paso para resolver muchos problemas.</p>${tabla(["Enunciado", "Expresión"], [["El triple de un número menos 4", "3x − 4"], ["La mitad de un número más su cuadrado", "x/2 + x²"], ["Dos números consecutivos", "x, x + 1"], ["Un número par cualquiera", "2n"], ["La edad de Ana dentro de 5 años", "x + 5"]])}<p>Hay que tener cuidado con los paréntesis: «el doble de la suma de un número y 3» es 2(x + 3), mientras que «la suma del doble de un número y 3» es 2x + 3. Entre un número y una letra no se suele escribir el signo de multiplicar: 3 · x se escribe 3x.</p>`, svg: lenguaje },
    { html: `<h3>1.2 Valor numérico</h3><p>El <b>valor numérico</b> de una expresión algebraica es el número que se obtiene al <b>sustituir</b> las letras por valores concretos y operar. Para P(x) = 2x² − 3x + 1 y x = −2: P(−2) = 2 · (−2)² − 3 · (−2) + 1 = 8 + 6 + 1 = 15.</p><p>Al sustituir números negativos hay que ponerlos <b>entre paréntesis</b>; si no, es fácil equivocarse con el signo de la potencia. También hay que respetar la jerarquía: primero potencias, después productos, al final sumas y restas.</p><p>El valor numérico tiene muchas aplicaciones: calcular el área de un cuadrado de lado x = 7 con la fórmula x², el precio de un taxi con la fórmula 3 + 1,2k para k kilómetros, o la altura de una pelota lanzada a los t segundos con h = 20t − 5t². Además, comprobar el valor numérico es una forma rápida de verificar si dos expresiones son iguales: si dan distinto para algún valor, no lo son.</p>`, svg: valor },
    { html: `<h3>1.3 Monomios</h3><p>Un <b>monomio</b> es una expresión algebraica formada por el producto de un número y una o varias letras con exponentes naturales, como −5x²y. El número es el <b>coeficiente</b> (−5) y las letras con sus exponentes forman la <b>parte literal</b> (x²y). El <b>grado</b> de un monomio es la suma de los exponentes de sus letras: −5x²y tiene grado 3. Un número solo, como 7, es un monomio de grado 0.</p><p>Dos monomios son <b>semejantes</b> si tienen la misma parte literal, aunque los coeficientes sean distintos: 3x²y y −8x²y son semejantes; 3x²y y 3xy² no lo son.</p><p>No son monomios las expresiones con letras en el denominador (3/x) o con exponentes negativos o fraccionarios (√x). Cuando un monomio tiene coeficiente 1 no se escribe (x³ en lugar de 1x³), y con coeficiente −1 solo se pone el signo (−x³).</p>`, svg: monomio },
    { html: `<h3>1.4 Operaciones con monomios</h3><p>Solo se pueden <b>sumar y restar monomios semejantes</b>: se suman los coeficientes y se deja la misma parte literal. 3x² + 5x² = 8x², y 4ab − 7ab = −3ab. Si no son semejantes, la suma se deja indicada: 3x² + 5x no se puede simplificar (como no se suman manzanas y peras).</p><p>Para <b>multiplicar</b> monomios se multiplican los coeficientes y las partes literales, sumando los exponentes de las letras iguales: 2x³ · 4x² = 8x⁵ y (−3ab) · (2a²) = −6a³b. Para <b>dividir</b>, se dividen los coeficientes y se restan los exponentes: 6x⁵ : 2x² = 3x³. Si algún exponente queda negativo, el resultado ya no es un monomio: 4x : 2x³ = 2/x².</p><p>Para elevar un monomio a una potencia, se eleva el coeficiente y se multiplican los exponentes: (3x²)³ = 27x⁶ y (−2ab²)² = 4a²b⁴. Son las mismas propiedades de las potencias que ya conoces.</p>`, svg: opMon },
    { html: `<h3>1.5 Polinomios</h3><p>Un <b>polinomio</b> es una suma de monomios no semejantes, cada uno de los cuales es un <b>término</b>. Se nombran con una letra mayúscula y la variable entre paréntesis: P(x) = 4x³ − 2x² + 7. El <b>grado</b> del polinomio es el mayor grado de sus términos (aquí, 3). El coeficiente del término de mayor grado es el <b>coeficiente principal</b> (4), y el término sin letra es el <b>término independiente</b> (7).</p><p>Un polinomio está <b>ordenado</b> si sus términos van de mayor a menor grado, y es <b>completo</b> si tiene términos de todos los grados, desde el mayor hasta 0. P(x) es incompleto, porque le falta el término en x. Con dos términos se llama binomio (x + 3) y con tres, trinomio (x² + 2x + 1).</p><p>Ordenar y, cuando hace falta, completar con ceros (4x³ − 2x² + 0x + 7) es el primer paso para operar sin errores, sobre todo al dividir.</p>`, svg: poli },
    { html: `<h3>1.6 Sumar y restar polinomios</h3><p>Para <b>sumar</b> polinomios se agrupan los términos semejantes y se suman sus coeficientes. Es cómodo colocarlos en columnas, un grado en cada columna, como en las sumas de números de varias cifras. Si P(x) = 3x³ − 2x² + 5x − 1 y Q(x) = x³ + 4x² + 6, entonces P(x) + Q(x) = 4x³ + 2x² + 5x + 5.</p><p>Para <b>restar</b>, se suma al primero el <b>opuesto</b> del segundo, que se obtiene cambiando el signo de todos sus términos: P(x) − Q(x) = 3x³ − 2x² + 5x − 1 − x³ − 4x² − 6 = 2x³ − 6x² + 5x − 7.</p><p>El error más frecuente al restar es cambiar el signo solo del primer término del sustraendo. Por eso conviene escribir el paréntesis y quitarlo con cuidado: −(x³ + 4x² + 6) = −x³ − 4x² − 6. El grado de una suma es, como mucho, el mayor de los grados, pero puede ser menor si los términos principales se anulan.</p>`, svg: suma, video: { id: "sqSzkXrbmtA", titulo: "Suma, resta, multiplicación y división de polinomios", canal: "podemos aprobar matemáticas", vistas: 1413427, megusta: 0 } },
    { html: `<h3>1.7 Multiplicar polinomios</h3><p>Para multiplicar un <b>monomio por un polinomio</b> se aplica la propiedad distributiva: 3x(2x² − x + 4) = 6x³ − 3x² + 12x. Para multiplicar <b>dos polinomios</b>, se multiplica cada término del primero por cada término del segundo y se reducen los términos semejantes: (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.</p><p>El dibujo da una interpretación geométrica: un rectángulo de lados x + 2 y x + 3 se divide en cuatro trozos de áreas x², 3x, 2x y 6. Su suma es el área total.</p><p>Con polinomios más largos se puede multiplicar en columna, como con números. El grado del producto es la <b>suma de los grados</b>: un polinomio de grado 2 por otro de grado 3 da uno de grado 5. Una buena comprobación es el valor numérico: si x = 1, (1 + 2)(1 + 3) = 12 y 1 + 5 + 6 = 12 ✓.</p>`, svg: producto },
    { html: `<h3>2.1 Identidades notables: cuadrado de una suma</h3><p>Algunos productos aparecen tan a menudo que conviene saber su resultado de memoria. Se llaman <b>identidades notables</b> o productos notables. La primera es el <b>cuadrado de una suma</b>:</p><p class="formula"><span>(a + b)² = a² + 2ab + b²</span></p><p>Se lee: «el cuadrado del primero, más el doble del primero por el segundo, más el cuadrado del segundo». Se comprueba multiplicando (a + b)(a + b) = a² + ab + ab + b². El dibujo lo muestra con áreas: un cuadrado de lado a + b se divide en un cuadrado a², otro b² y dos rectángulos ab.</p><p>Ejemplos: (x + 3)² = x² + 6x + 9; (2x + 5)² = 4x² + 20x + 25. También sirve para calcular mentalmente: 31² = (30 + 1)² = 900 + 60 + 1 = 961. El error típico es olvidar el doble producto: (x + 3)² no es x² + 9.</p>`, svg: cuadSuma, video: { id: "zmz0RjoIl0Y", titulo: "Cuadrado de la suma de dos cantidades: productos notables", canal: "Matemáticas profe Alex", vistas: 1235325, megusta: 0 } },
    { html: `<h3>2.2 Cuadrado de una diferencia</h3><p>La segunda identidad es el <b>cuadrado de una diferencia</b>: <mark>(a − b)² = a² − 2ab + b²</mark>. Es igual que la anterior, pero el doble producto va con signo menos; los dos cuadrados siempre son positivos.</p><p>Ejemplos: (x − 3)² = x² − 6x + 9; (3x − 2)² = 9x² − 12x + 4; (x/2 − 1)² = x²/4 − x + 1. Para el cálculo mental: 49² = (50 − 1)² = 2.500 − 100 + 1 = 2.401.</p><p>Fíjate en que (a − b)² = (b − a)², porque un número y su opuesto tienen el mismo cuadrado: (3 − x)² = 9 − 6x + x². Cuando dudes de si has aplicado bien la fórmula, comprueba con un número: si x = 5, (5 − 3)² = 4 y 25 − 30 + 9 = 4 ✓.</p>`, svg: cuadDif },
    { html: `<h3>2.3 Suma por diferencia</h3><p>La tercera identidad es el producto de una <b>suma por una diferencia</b> de los mismos términos: <mark>(a + b)(a − b) = a² − b²</mark>. Al multiplicar, los dobles productos +ab y −ab se anulan, y solo quedan los cuadrados con un signo menos entre ellos: una <b>diferencia de cuadrados</b>.</p><p>Ejemplos: (x + 5)(x − 5) = x² − 25; (2x + 3)(2x − 3) = 4x² − 9; (1 − x²)(1 + x²) = 1 − x⁴.</p><p>Es muy útil para el cálculo mental: 21 · 19 = (20 + 1)(20 − 1) = 400 − 1 = 399; 102 · 98 = 10.000 − 4 = 9.996. Y al revés, permite factorizar: x² − 49 = (x + 7)(x − 7). En 4º la usarás para racionalizar denominadores con raíces, multiplicando por el «conjugado».</p>`, svg: sumaDif },
    { html: `<h3>2.4 Factorizar: factor común e identidades</h3><p><b>Factorizar</b> un polinomio es escribirlo como un <b>producto</b> de polinomios más sencillos, igual que 12 = 2² · 3. Es el camino inverso de multiplicar, y resulta imprescindible para simplificar fracciones algebraicas y resolver ecuaciones.</p><p>El primer recurso es <b>sacar factor común</b>: si todos los términos tienen un factor en común, se extrae fuera de un paréntesis usando la propiedad distributiva al revés. En 6x³ − 9x², el m.c.d. de los coeficientes es 3 y la menor potencia de x es x²: 6x³ − 9x² = 3x²(2x − 3).</p><p>El segundo recurso es reconocer una <b>identidad notable</b>: x² − 16 = (x + 4)(x − 4); x² + 10x + 25 = (x + 5)²; 4x² − 12x + 9 = (2x − 3)². Para reconocer un trinomio cuadrado perfecto, comprueba que dos términos son cuadrados y que el tercero es su doble producto. A veces hay que combinar los dos recursos: 2x³ − 8x = 2x(x² − 4) = 2x(x + 2)(x − 2).</p>`, svg: factorComun },
    { html: `<h3>2.5 Dividir polinomios</h3><p>Dividir polinomios se parece mucho a la división de números. Se ordenan y completan con ceros el dividendo D(x) y el divisor d(x). Se divide el primer término del dividendo entre el primero del divisor, se multiplica el resultado por todo el divisor, se resta y se repite hasta que el resto tenga <b>menor grado que el divisor</b>.</p><p>Ejemplo: (x² + 5x + 7) : (x + 2). x² : x = x; x(x + 2) = x² + 2x; restando queda 3x + 7. 3x : x = 3; 3(x + 2) = 3x + 6; restando queda 1. Cociente c(x) = x + 3, resto r = 1.</p><p>Como con los números, se cumple la <b>prueba de la división</b>: <mark>D(x) = d(x) · c(x) + r(x)</mark>. Aquí: (x + 2)(x + 3) + 1 = x² + 5x + 6 + 1 ✓. Si el resto es 0, la división es <b>exacta</b>, y el divisor es un factor del dividendo. El grado del cociente es la diferencia de grados.</p>`, svg: division },
    { html: `<h3>2.6 La regla de Ruffini</h3><p>Cuando el divisor es de la forma <b>x − a</b>, la división se puede hacer con un método mucho más rápido: la <b>regla de Ruffini</b>. Se escriben los coeficientes del dividendo, ordenado y completo (¡sin olvidar los ceros!), y el número a a la izquierda.</p><p>Para (2x³ − 3x + 5) : (x − 2): coeficientes 2, 0, −3, 5 y a = 2. Se baja el primer coeficiente (2); se multiplica por a (4) y se suma al siguiente (0 + 4 = 4); se multiplica 4 · 2 = 8 y se suma (−3 + 8 = 5); se multiplica 5 · 2 = 10 y se suma (5 + 10 = 15). Los primeros números de la fila de abajo son los coeficientes del cociente, c(x) = 2x² + 4x + 5, y el último es el resto, r = 15.</p><p>Si el divisor es x + 3, entonces a = −3, porque x + 3 = x − (−3). El cociente siempre tiene un grado menos que el dividendo. Ruffini se usará mucho en 4º para factorizar polinomios de grado alto.</p>`, svg: ruffini, video: { id: "5CDZEfaU0Kg", titulo: "División por Ruffini: división de polinomios", canal: "Matemóvil", vistas: 845133, megusta: 0 } },
    { html: `<h3>2.7 Teorema del resto y raíces</h3><p>El <b>teorema del resto</b> dice que el resto de dividir P(x) entre (x − a) es igual al valor numérico <mark>P(a)</mark>. En el ejemplo anterior, P(2) = 2 · 8 − 6 + 5 = 15, que coincide con el resto obtenido por Ruffini. Así se puede saber el resto sin dividir.</p><p>Un número a es una <b>raíz</b> del polinomio si P(a) = 0. Por el teorema del resto, eso significa que la división entre (x − a) es exacta, y por tanto (x − a) es un factor de P(x). Por ejemplo, P(x) = x² − 5x + 6 cumple P(2) = 4 − 10 + 6 = 0, así que x − 2 es un factor: P(x) = (x − 2)(x − 3).</p><p>Las raíces enteras de un polinomio con coeficientes enteros hay que buscarlas entre los <b>divisores del término independiente</b>. Para x³ − 7x + 6, se prueba con ±1, ±2, ±3, ±6: P(1) = 0, P(2) = 0 y P(−3) = 0, de modo que x³ − 7x + 6 = (x − 1)(x − 2)(x + 3).</p>`, svg: resto },
    { html: `<h3>3.1 El álgebra en acción</h3><p>Los polinomios permiten expresar relaciones del mundo real. El área de un jardín rectangular cuyo largo mide 3 m más que el ancho es x(x + 3) = x² + 3x. El coste de fabricar x camisetas con 50 € de gastos fijos y 2 € por unidad es C(x) = 50 + 2x. La altura de una pelota lanzada hacia arriba a 20 m/s, a los t segundos, es aproximadamente h(t) = 20t − 5t².</p><p>Pero la gran potencia del álgebra es <b>demostrar</b>. ¿Por qué la diferencia entre los cuadrados de dos números consecutivos es siempre impar? Porque (n + 1)² − n² = n² + 2n + 1 − n² = 2n + 1, que es impar para todo n. ¿Por qué el truco de la pregunta inicial siempre da 1? Lo demostramos simplificando la expresión.</p><p>Con estas herramientas puedes inventar tus propios «trucos de magia» numéricos y descubrir por qué funcionan. Es la misma idea que usan los matemáticos para probar que una propiedad se cumple para infinitos números sin tener que comprobarlos uno a uno.</p>`, svg: usos },
  ],
  ejemplos: [
    { enunciado: "Calcula el valor numérico de 3x² − 2xy + y² para x = −1, y = 2.", pasos: ["3·(−1)² − 2·(−1)·2 + 2²", "= 3 + 4 + 4"], resultado: "11." },
    { enunciado: "Si P(x) = 2x³ − x + 4 y Q(x) = x² − 3x + 1, calcula P(x) − 2Q(x).", pasos: ["2Q(x) = 2x² − 6x + 2.", "P − 2Q = 2x³ − x + 4 − 2x² + 6x − 2.", "Ordenamos: 2x³ − 2x² + 5x + 2."], resultado: "2x³ − 2x² + 5x + 2." },
    { enunciado: "Multiplica (2x − 1)(x² + 3x − 2).", pasos: ["2x · (x² + 3x − 2) = 2x³ + 6x² − 4x.", "−1 · (x² + 3x − 2) = −x² − 3x + 2.", "Sumando: 2x³ + 5x² − 7x + 2."], resultado: "2x³ + 5x² − 7x + 2." },
    { enunciado: "Desarrolla: (3x + 2)² − (x − 4)(x + 4).", pasos: ["(3x + 2)² = 9x² + 12x + 4.", "(x − 4)(x + 4) = x² − 16.", "9x² + 12x + 4 − x² + 16."], resultado: "8x² + 12x + 20." },
    { enunciado: "Factoriza: 3x³ − 12x.", pasos: ["Factor común 3x: 3x(x² − 4).", "Diferencia de cuadrados: x² − 4 = (x + 2)(x − 2)."], resultado: "3x(x + 2)(x − 2)." },
    { enunciado: "Divide por Ruffini (x³ − 4x² + x + 6) : (x + 1) y di si −1 es raíz.", pasos: ["Coeficientes 1, −4, 1, 6; a = −1.", "Bajo 1; 1·(−1) = −1 → −5; −5·(−1) = 5 → 6; 6·(−1) = −6 → 0.", "Cociente x² − 5x + 6, resto 0."], resultado: "c(x) = x² − 5x + 6, r = 0: −1 es raíz." },
  ],
  errores: [
    "Sumar monomios no semejantes: 3x² + 2x ≠ 5x³.",
    "Al restar polinomios, cambiar el signo solo del primer término.",
    "Olvidar el doble producto: (x + 3)² ≠ x² + 9.",
    "Al sustituir un valor negativo, no ponerlo entre paréntesis: −2² ≠ (−2)².",
    "En Ruffini, olvidar los ceros de los términos que faltan o usar a con el signo equivocado.",
    "Al multiplicar potencias de x, multiplicar los exponentes en vez de sumarlos: x²·x³ = x⁵.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Traduce: a) el cuadrado de un número menos su triple b) la suma de tres números consecutivos c) el 20 % de un precio.", sol: "a) x² − 3x b) x + (x + 1) + (x + 2) = 3x + 3 c) 0,2x." },
    { nivel: "básico", q: "Calcula el valor numérico de P(x) = x³ − 2x + 5 para x = 2 y x = −1.", sol: "P(2) = 8 − 4 + 5 = 9. P(−1) = −1 + 2 + 5 = 6." },
    { nivel: "básico", q: "Indica coeficiente, parte literal y grado: −7a³b², x/4, 9.", sol: "−7, a³b², 5; 1/4, x, 1; 9, sin parte literal, 0." },
    { nivel: "básico", q: "Simplifica: 5x² − 3x + 2x² + 8x − 1.", sol: "7x² + 5x − 1." },
    { nivel: "básico", q: "Calcula: a) (−3x²)·(4x³) b) 12a⁴b : 3a²b c) (2x³)².", sol: "a) −12x⁵ b) 4a² c) 4x⁶." },
    { nivel: "básico", q: "Di el grado, el coeficiente principal y el término independiente de P(x) = 3 − 2x⁴ + x². ¿Es completo?", sol: "Grado 4, coef. principal −2, término independiente 3. No es completo (faltan x³ y x)." },
    { nivel: "básico", q: "Suma y resta P(x) = x² + 3x − 2 y Q(x) = 2x² − x + 5.", sol: "P + Q = 3x² + 2x + 3. P − Q = −x² + 4x − 7." },
    { nivel: "básico", q: "Multiplica: 2x(3x² − x + 4).", sol: "6x³ − 2x² + 8x." },
    { nivel: "básico", q: "Multiplica: (x + 4)(x − 1).", sol: "x² − x + 4x − 4 = x² + 3x − 4." },
    { nivel: "básico", q: "Desarrolla: (x + 5)², (x − 2)², (x + 6)(x − 6).", sol: "x² + 10x + 25; x² − 4x + 4; x² − 36." },
    { nivel: "básico", q: "Saca factor común: 4x² + 8x y 15a³ − 10a².", sol: "4x(x + 2); 5a²(3a − 2)." },
    { nivel: "básico", q: "Calcula mentalmente con identidades: 41², 59² y 32 · 28.", sol: "1.600 + 80 + 1 = 1.681; 3.600 − 120 + 1 = 3.481; 900 − 4 = 896." },
    { nivel: "medio", q: "Multiplica: (x² − 2x + 3)(2x − 1).", sol: "2x³ − x² − 4x² + 2x + 6x − 3 = 2x³ − 5x² + 8x − 3." },
    { nivel: "medio", q: "Desarrolla: (2x − 3y)² y (x/2 + 4)².", sol: "4x² − 12xy + 9y²; x²/4 + 4x + 16." },
    { nivel: "medio", q: "Simplifica: (x + 3)² − (x − 3)².", sol: "x² + 6x + 9 − x² + 6x − 9 = 12x." },
    { nivel: "medio", q: "Factoriza: a) x² − 81 b) x² − 14x + 49 c) 9x² + 12x + 4.", sol: "a) (x + 9)(x − 9) b) (x − 7)² c) (3x + 2)²." },
    { nivel: "medio", q: "Factoriza: 5x³ − 20x² + 20x.", sol: "5x(x² − 4x + 4) = 5x(x − 2)²." },
    { nivel: "medio", q: "Divide (x³ − 2x² + 4) : (x² + 1) y haz la prueba.", sol: "Cociente x − 2, resto −x + 6. (x² + 1)(x − 2) + (−x + 6) = x³ − 2x² + x − 2 − x + 6 = x³ − 2x² + 4 ✓." },
    { nivel: "medio", q: "Divide por Ruffini: (3x³ − 5x + 2) : (x − 1).", sol: "Coef. 3, 0, −5, 2: 3, 3, −2 | 0. Cociente 3x² + 3x − 2, resto 0." },
    { nivel: "medio", q: "Divide por Ruffini: (x⁴ − 16) : (x + 2).", sol: "Coef. 1, 0, 0, 0, −16; a = −2: 1, −2, 4, −8 | 0. Cociente x³ − 2x² + 4x − 8, resto 0." },
    { nivel: "medio", q: "Sin dividir, halla el resto de (x³ + 2x² − 3) : (x + 3).", sol: "P(−3) = −27 + 18 − 3 = −12." },
    { nivel: "medio", q: "Halla k para que P(x) = x² + kx − 6 sea divisible entre x − 2.", sol: "P(2) = 4 + 2k − 6 = 0 → k = 1." },
    { nivel: "medio", q: "Expresa el área de un marco cuadrado de lado exterior x + 4 y lado interior x.", sol: "(x + 4)² − x² = 8x + 16." },
    { nivel: "medio", q: "Una empresa tiene un coste C(x) = 200 + 3x e ingresos I(x) = 8x por x unidades. Escribe el beneficio y calcúlalo para 100 unidades.", sol: "B(x) = 8x − 200 − 3x = 5x − 200. B(100) = 300 €." },
    { nivel: "avanzado", q: "Factoriza buscando raíces entre los divisores del término independiente: x³ − 6x² + 11x − 6.", sol: "P(1) = 0, P(2) = 0, P(3) = 0. x³ − 6x² + 11x − 6 = (x − 1)(x − 2)(x − 3)." },
    { nivel: "avanzado", q: "Demuestra que el producto de dos impares consecutivos más 1 es un cuadrado perfecto.", sol: "(2n − 1)(2n + 1) + 1 = 4n² − 1 + 1 = 4n² = (2n)²." },
    { nivel: "avanzado", q: "Demuestra que la suma de tres números consecutivos es siempre múltiplo de 3.", sol: "n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)." },
    { nivel: "avanzado", q: "Simplifica: (x² − 9)/(x² + 6x + 9).", sol: "(x + 3)(x − 3)/(x + 3)² = (x − 3)/(x + 3), con x ≠ −3." },
    { nivel: "avanzado", q: "Halla a y b para que P(x) = x³ + ax² + bx − 6 tenga raíces 1 y 2.", sol: "P(1) = 1 + a + b − 6 = 0 → a + b = 5. P(2) = 8 + 4a + 2b − 6 = 0 → 2a + b = −1. a = −6, b = 11." },
    { nivel: "avanzado", q: "Desarrolla (a + b)³ multiplicando (a + b)²(a + b).", sol: "(a² + 2ab + b²)(a + b) = a³ + 3a²b + 3ab² + b³." },
    { nivel: "avanzado", q: "Explica el truco de la pregunta inicial con otro procedimiento: piensa un número, multiplícalo por 4, súmale 10, divide entre 2 y resta el doble del número. ¿Qué sale siempre?", sol: "(4x + 10)/2 − 2x = 2x + 5 − 2x = 5. Siempre 5." },
    { nivel: "avanzado", q: "Una caja sin tapa se hace con una lámina de 30 × 20 cm cortando cuadrados de lado x en las esquinas. Escribe su volumen como polinomio.", sol: "V(x) = x(30 − 2x)(20 − 2x) = 4x³ − 100x² + 600x." },
    { nivel: "avanzado", q: "Comprueba que x² + x + 1 no tiene raíces enteras y que, sin embargo, x³ − 1 = (x − 1)(x² + x + 1).", sol: "Los divisores de 1 son ±1: P(1) = 3, P(−1) = 1, ninguno es 0. (x − 1)(x² + x + 1) = x³ + x² + x − x² − x − 1 = x³ − 1 ✓." },
    { nivel: "avanzado", q: "Halla el polinomio de grado 2 con coeficiente principal 1 cuyas raíces son −4 y 3.", sol: "(x + 4)(x − 3) = x² + x − 12." },
  ],
  quiz: [
    { q: "«El doble de un número menos 7» es…", o: ["2(x − 7)", "2x − 7", "x² − 7", "7 − 2x"], a: 1, e: "Primero el doble, después se resta." },
    { q: "Valor de x² − 3x para x = −2:", o: ["−2", "10", "2", "−10"], a: 1, e: "4 + 6." },
    { q: "Grado de 4x³y²:", o: ["3", "4", "5", "6"], a: 2, e: "3 + 2." },
    { q: "¿Son semejantes 2x²y y −5yx²?", o: ["Sí", "No", "Solo si se ordena", "Depende del coeficiente"], a: 0, e: "Misma parte literal." },
    { q: "3x² · (−2x⁴) =", o: ["−6x⁸", "−6x⁶", "x⁶", "−5x⁶"], a: 1, e: "Se suman exponentes." },
    { q: "8x⁶ : 2x² =", o: ["4x³", "4x⁴", "6x⁴", "4x⁸"], a: 1, e: "Se restan exponentes." },
    { q: "Grado de 5 − x + 3x⁴:", o: ["1", "4", "5", "3"], a: 1, e: "El mayor exponente." },
    { q: "(x² + 2x) − (x² − 3x) =", o: ["−x", "5x", "2x² + 5x", "−x + 2x²"], a: 1, e: "2x + 3x." },
    { q: "Grado del producto de dos polinomios de grados 2 y 3:", o: ["5", "6", "3", "1"], a: 0, e: "Se suman los grados." },
    { q: "(x + 4)² =", o: ["x² + 16", "x² + 8x + 16", "x² + 4x + 16", "2x + 8"], a: 1, e: "Doble producto 8x." },
    { q: "(x − 1)² =", o: ["x² − 1", "x² − 2x + 1", "x² + 1", "x² − 2x − 1"], a: 1, e: "Cuadrado de una diferencia." },
    { q: "(x + 7)(x − 7) =", o: ["x² − 49", "x² + 49", "x² − 14x − 49", "x² − 7"], a: 0, e: "Diferencia de cuadrados." },
    { q: "Factorizar 4x² − 25:", o: ["(4x − 5)²", "(2x + 5)(2x − 5)", "(2x − 5)²", "4(x − 5)"], a: 1, e: "a² − b²." },
    { q: "x² − 6x + 9 =", o: ["(x − 3)²", "(x + 3)²", "(x − 9)²", "(x − 3)(x + 3)"], a: 0, e: "Trinomio cuadrado perfecto." },
    { q: "Factor común de 6x³ + 9x:", o: ["3x", "3x²", "6x", "x³"], a: 0, e: "3x(2x² + 3)." },
    { q: "En la división de polinomios, el resto…", o: ["tiene mayor grado que el divisor", "tiene menor grado que el divisor", "es siempre 0", "es el cociente"], a: 1, e: "Se para cuando el grado es menor." },
    { q: "En Ruffini, para dividir entre x + 2 se usa…", o: ["2", "−2", "x", "1/2"], a: 1, e: "x + 2 = x − (−2)." },
    { q: "El resto de P(x) : (x − 3) es…", o: ["P(0)", "P(3)", "P(−3)", "3"], a: 1, e: "Teorema del resto." },
    { q: "Si P(5) = 0, entonces…", o: ["5 es el término independiente", "x − 5 es factor de P(x)", "x + 5 es factor", "P no tiene raíces"], a: 1, e: "División exacta." },
    { q: "Las raíces enteras de x³ − 2x² − x + 2 se buscan entre…", o: ["±1, ±2", "±3", "0 y 1", "cualquier número"], a: 0, e: "Divisores del término independiente 2." },
  ],
  examen: [
    { q: "Valor de 2x³ − x para x = −1:", o: ["−1", "−3", "1", "3"], a: 0, e: "−2 + 1." },
    { q: "(2x − 3)(x + 4) =", o: ["2x² + 5x − 12", "2x² − 12", "2x² + 11x − 12", "2x² − 5x − 12"], a: 0, e: "8x − 3x = 5x." },
    { q: "(3x + 1)² =", o: ["9x² + 1", "9x² + 6x + 1", "3x² + 6x + 1", "9x² + 3x + 1"], a: 1, e: "Doble producto 6x." },
    { q: "x² − 100 =", o: ["(x − 10)²", "(x + 10)(x − 10)", "(x − 50)(x + 2)", "x(x − 100)"], a: 1, e: "Diferencia de cuadrados." },
    { q: "Cociente de (x² + 7x + 10) : (x + 2):", o: ["x + 5", "x + 2", "x − 5", "x + 7"], a: 0, e: "Exacta: (x + 2)(x + 5)." },
    { q: "Resto de (x³ − 1) : (x − 2):", o: ["7", "−9", "1", "0"], a: 0, e: "P(2) = 8 − 1." },
    { q: "2x³ − 8x factorizado:", o: ["2x(x² − 4)", "2x(x + 2)(x − 2)", "2(x − 2)³", "x(2x − 8)"], a: 1, e: "Factor común y diferencia de cuadrados." },
    { q: "¿Qué número es raíz de x² + x − 6?", o: ["1", "2", "−2", "6"], a: 1, e: "4 + 2 − 6 = 0." },
  ],
  feynman: ["Qué son los monomios semejantes y por qué solo ellos se suman", "Cómo se multiplica y se divide un polinomio", "De dónde salen las identidades notables", "Qué dice el teorema del resto y para qué sirve"],
  figura: {
    titulo: "Las identidades notables",
    svg: resumen("Resumen de identidades notables y división", [
      ["Cuadrado suma", "(a + b)² = a² + 2ab + b²", "var(--pen)"],
      ["Cuadrado diferencia", "(a − b)² = a² − 2ab + b²", "var(--red)"],
      ["Suma por diferencia", "(a + b)(a − b) = a² − b²", "var(--leaf)"],
      ["División", "D = d · c + r     resto de P : (x − a) = P(a)", "var(--inf)"],
    ], 230),
  },
  video: { id: "R58oWfchP5c", titulo: "Productos notables: suma y resta de un binomio al cuadrado y binomios conjugados", canal: "Matemáticas con Juan", vistas: 368374, megusta: 0 },
  mapa: mapa("POLINOMIOS", "var(--pen)", [
    ["Monomios", "coeficiente · grado · semejantes", "var(--pen)"],
    ["Operaciones", "+ − · : polinomios", "var(--leaf)"],
    ["Identidades", "(a ± b)² · (a + b)(a − b)", "var(--red)"],
    ["Ruffini", "teorema del resto · raíces", "var(--inf)"],
  ], 250),
  glosario: [
    ["Expresión algebraica", "Combinación de números y letras con operaciones."],
    ["Valor numérico", "Resultado de sustituir las letras por números y operar."],
    ["Monomio", "Producto de un número por letras con exponentes naturales."],
    ["Coeficiente", "Número que multiplica a la parte literal."],
    ["Grado de un monomio", "Suma de los exponentes de sus letras."],
    ["Monomios semejantes", "Monomios con la misma parte literal."],
    ["Polinomio", "Suma de monomios no semejantes."],
    ["Término independiente", "Término de grado 0 de un polinomio."],
    ["Polinomio completo", "Tiene términos de todos los grados, del mayor a 0."],
    ["Identidad notable", "Producto de resultado conocido: (a + b)², (a − b)², (a + b)(a − b)."],
    ["Factorizar", "Escribir un polinomio como producto de factores."],
    ["Regla de Ruffini", "Método rápido para dividir entre x − a."],
    ["Teorema del resto", "El resto de P(x) : (x − a) es P(a)."],
    ["Raíz de un polinomio", "Número a que cumple P(a) = 0."],
  ],
  situacion: {
    titulo: "Magia con álgebra",
    reto: "Vais a preparar un espectáculo de «magia matemática» para alumnos de 1º: trucos de adivinar números cuyo secreto se explica con polinomios.",
    pasos: [
      "Probad varios trucos clásicos (piensa un número, súmale, multiplica…) y comprobad que funcionan con distintos números.",
      "Traducid cada truco al lenguaje algebraico y simplificad la expresión para descubrir el secreto.",
      "Inventad un truco nuevo usando identidades notables (por ejemplo, con el cuadrado de un número).",
      "Escribid una ficha que explique cada truco paso a paso con álgebra.",
      "Representad el espectáculo y, al final, desvelad el secreto al público.",
    ],
    producto: "Un espectáculo breve y unas fichas con la explicación algebraica de cada truco.",
    evaluacion: ["Traduce correctamente los pasos al lenguaje algebraico.", "Opera y simplifica polinomios sin errores.", "Usa identidades notables en el truco inventado.", "Explica el razonamiento con claridad a otras personas."],
  },
  tarjetas: [
    ["Monomio", "Coeficiente · parte literal."], ["Grado", "Mayor suma de exponentes."],
    ["Semejantes", "Misma parte literal: se suman."], ["Restar polinomios", "Cambiar el signo de TODO el sustraendo."],
    ["Multiplicar", "Cada término por cada término."], ["(a + b)²", "a² + 2ab + b²"],
    ["(a − b)²", "a² − 2ab + b²"], ["(a + b)(a − b)", "a² − b²"],
    ["Factor común", "Distributiva al revés."], ["D = d·c + r", "Prueba de la división."],
    ["Ruffini", "Divisor x − a; completar con ceros."], ["Teorema del resto", "Resto = P(a)."],
  ],
  familias: ["Haced juntos el truco de magia del principio con distintos números.", "Calculad mentalmente productos como 21 · 19 con la suma por diferencia.", "Traducid frases cotidianas («el doble de tu edad más 5») a álgebra.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico: expresiones algebraicas, polinomios y operaciones, identidades notables, factorización sencilla, regla de Ruffini y teorema del resto; el álgebra como herramienta de generalización y demostración (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Algeblocks o fichas de áreas para ver los productos e identidades.", "Trucos de magia numérica (situación de aprendizaje).", "Dominó de identidades notables.", "Comparar la división larga de números con la de polinomios."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: polinomios (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
