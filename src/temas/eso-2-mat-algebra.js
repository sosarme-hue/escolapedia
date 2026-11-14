// Matemáticas 2º ESO · Expresiones algebraicas. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, flujo, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const traducir = cajas("Traducir del lenguaje habitual al algebraico", [
  ["El doble de un número", ["2x"], "var(--pen)"],
  ["Un número más 5", ["x + 5"], "var(--leaf)"],
  ["La mitad de un número", ["x/2"], "var(--sun)"],
  ["Dos números consecutivos", ["x y x + 1"], "var(--inf)"],
  ["El cuadrado de un número", ["x²"], "var(--red)"],
  ["Un número par", ["2x"], "var(--bac)"],
], "Lenguaje algebraico");

const valor = pasos("Valor numérico de 3x² − 2x + 1 para x = −2", ["3x² − 2x + 1 con x = −2", "3 · (−2)² − 2 · (−2) + 1", "3 · 4 + 4 + 1", "12 + 4 + 1 = 17"], "Valor numérico");

const semejantes = comparar("Monomios semejantes: misma parte literal; solo esos se pueden sumar", [
  ["Semejantes", ["3x²y y −5x²y", "misma parte literal", "suma: −2x²y"], "var(--leaf)"],
  ["No semejantes", ["3x²y y 3xy²", "parte literal distinta", "no se reducen"], "var(--red)"],
], "¿Se pueden sumar?");

const opMonomios = cajas("Operaciones con monomios: suma, producto, cociente y potencia", [
  ["Suma", ["4x³ + 2x³ = 6x³", "solo semejantes"], "var(--pen)"],
  ["Producto", ["3x² · 5x⁴ = 15x⁶", "coef. · y exp. +"], "var(--leaf)"],
  ["Cociente", ["12x⁵ : 4x² = 3x³", "coef. : y exp. −"], "var(--sun)"],
  ["Potencia", ["(2x³)² = 4x⁶", "todo al exponente"], "var(--red)"],
], "Monomios");

const polinomio = lienzo("Elementos de un polinomio: términos, grado, coeficiente principal y término independiente", `
  ${tx(130, 52, "P(x) = 4x³ − 2x² + x − 7", { fs: 19, fam: D })}
  <path d="M60 62 V82 M205 62 V82" stroke="var(--muted)" stroke-width="1.5"/>
  ${tx(60, 98, "grado 3", { fs: 11.5, c: "var(--pen)", max: 90 })}${tx(60, 114, "coef. principal 4", { fs: 11.5, c: "var(--pen)", max: 110 })}
  ${tx(200, 98, "término", { fs: 11.5, c: "var(--red)", max: 80 })}${tx(200, 114, "independiente −7", { fs: 11.5, c: "var(--red)", max: 96 })}
  ${tx(130, 150, "4 términos · polinomio completo y ordenado", { fs: 12, c: "var(--muted)" })}`, 168);

const sumaPol = lienzo("Suma de polinomios colocando en columna los términos semejantes", `
  ${tx(220, 40, "3x³ − 2x² + 5x − 1", { fs: 15, fam: D, a: "end", max: 200 })}${tx(220, 66, "+    x³ + 4x² −  x + 6", { fs: 15, fam: D, a: "end", max: 200 })}
  <path d="M40 76 H224" stroke="var(--ink)" stroke-width="2"/>${tx(220, 100, "4x³ + 2x² + 4x + 5", { fs: 15, fam: D, a: "end", c: "var(--red)", max: 200 })}
  ${tx(130, 136, "se suman los coeficientes de cada grado", { fs: 12, c: "var(--muted)" })}${tx(130, 156, "restar: cambiar los signos del segundo y sumar", { fs: 11, c: "var(--muted)" })}`, 170);

const notables = lienzo("Cuadrado de una suma: el área de un cuadrado de lado a más b es a² + 2ab + b²", `
  <rect x="30" y="20" width="90" height="90" fill="var(--pen)" fill-opacity=".3" stroke="var(--ink)" stroke-width="1.6"/><rect x="120" y="20" width="40" height="90" fill="var(--leaf)" fill-opacity=".3" stroke="var(--ink)" stroke-width="1.6"/>
  <rect x="30" y="110" width="90" height="40" fill="var(--leaf)" fill-opacity=".3" stroke="var(--ink)" stroke-width="1.6"/><rect x="120" y="110" width="40" height="40" fill="var(--red)" fill-opacity=".3" stroke="var(--ink)" stroke-width="1.6"/>
  ${tx(75, 70, "a²", { fs: 16, fam: D })}${tx(140, 70, "ab", { fs: 13, fam: D })}${tx(75, 135, "ab", { fs: 13, fam: D })}${tx(140, 135, "b²", { fs: 13, fam: D })}
  ${tx(75, 14, "a", { fs: 11, c: "var(--muted)" })}${tx(140, 14, "b", { fs: 11, c: "var(--muted)" })}
  ${tx(210, 70, "(a + b)²", { fs: 14, fam: D, max: 90 })}${tx(210, 96, "= a² + 2ab + b²", { fs: 11.5, c: "var(--red)", max: 92 })}`, 168);

const tresIdent = cajas("Las tres identidades notables", [
  ["(a + b)²", ["a² + 2ab + b²"], "var(--pen)"],
  ["(a − b)²", ["a² − 2ab + b²"], "var(--red)"],
  ["(a + b)(a − b)", ["a² − b²"], "var(--leaf)"],
  ["Ejemplo", ["(x + 3)² =", "x² + 6x + 9"], "var(--sun)"],
], "Identidades notables");

const factorComun = flujo("Sacar factor común: buscar el mcd de los coeficientes y las letras comunes con menor exponente", [
  ["6x³ − 9x² + 3x", "ini"], ["mcd(6, 9, 3) = 3", "proc"], ["Letra común: x (menor exp.)", "proc"], ["Factor común: 3x", "proc"], ["3x(2x² − 3x + 1)", "es"],
], "Factor común");

const factorizar = pasos("Factorizar usando las identidades notables al revés", ["x² − 25 = (x + 5)(x − 5)", "x² + 10x + 25 = (x + 5)²", "4x² − 12x + 9 = (2x − 3)²", "Comprobar multiplicando"], "Identidades al revés");

const fracAlg = pasos("Simplificar una fracción algebraica factorizando numerador y denominador", ["(x² − 9) / (2x + 6)", "x² − 9 = (x + 3)(x − 3)", "2x + 6 = 2(x + 3)", "Se simplifica (x + 3)", "= (x − 3)/2"], "Fracciones algebraicas");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Expresiones algebraicas",
  minutos: 110,
  objetivos: [
    "Traducir enunciados al lenguaje algebraico y calcular valores numéricos",
    "Reconocer monomios y polinomios y sus elementos",
    "Sumar, restar, multiplicar y dividir monomios y operar con polinomios",
    "Desarrollar y reconocer las identidades notables",
    "Sacar factor común, factorizar y simplificar fracciones algebraicas sencillas",
  ],
  claves: ["expresión algebraica", "valor numérico", "monomio", "monomios semejantes", "polinomio", "grado", "identidad notable", "factor común"],
  pregunta: {
    texto: "Piensa un número, súmale 3, multiplícalo por 2, réstale 6 y divide entre el número pensado. ¿Por qué siempre da 2?",
    respuesta: "Si el número es x: (x + 3) · 2 = 2x + 6; 2x + 6 − 6 = 2x; 2x : x = <mark>2</mark>. El álgebra demuestra que el truco funciona con cualquier número (salvo el 0).",
  },
  lectura: {
    titulo: "Al-Juarismi y el arte de restaurar",
    html: `<p>Hacia el año 820, en la Casa de la Sabiduría de Bagdad, el matemático persa <b>Al-Juarismi</b> escribió un libro titulado <i>Compendio de cálculo por restauración y comparación</i>. «Restauración» en árabe se dice <i>al-jabr</i>, y de esa palabra viene <b>álgebra</b>. Su propio nombre, latinizado como <i>Algoritmi</i>, dio lugar a la palabra <b>algoritmo</b>.</p><p>Curiosamente, Al-Juarismi no usaba letras ni símbolos: escribía todo con palabras, como «una cosa más diez dirhams es igual a…». Las letras llegaron mucho después. En 1591 el francés François Viète empezó a usar vocales para las incógnitas, y en 1637 René Descartes popularizó la costumbre de llamar x, y, z a lo desconocido y a, b, c a lo conocido, que es la que usamos hoy.</p><p>El álgebra es un lenguaje que permite escribir de forma breve y general relaciones entre números: fórmulas de áreas, precios, velocidades… Con él se generalizan patrones, se demuestran trucos de magia matemáticos y se resuelven ecuaciones. En este tema aprenderás su vocabulario y su gramática: monomios, polinomios, identidades notables y factorización.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 El lenguaje algebraico</h3><p>El <b>lenguaje algebraico</b> usa letras y números unidos por operaciones para expresar cantidades desconocidas o generales. Una <b>expresión algebraica</b> es, por ejemplo, 2x + 5 o a · b / 2.</p><p>Las letras pueden representar:</p><ul><li>Un número <b>desconocido</b> que queremos averiguar: «un número más 7 es 12» → x + 7 = 12.</li><li>Un número <b>cualquiera</b>, para expresar una propiedad general: a + b = b + a.</li><li>Una <b>variable</b> en una fórmula: el área de un rectángulo es A = b · h.</li></ul><p>Para traducir del lenguaje habitual conviene conocer las expresiones típicas: «el doble» (2x), «el triple» (3x), «la mitad» (x/2), «el cuadrado» (x²), «el siguiente» (x + 1), «el anterior» (x − 1), «un número par» (2x), «un número impar» (2x + 1). Atención: «el doble de un número, más 3» es 2x + 3, pero «el doble de la suma de un número y 3» es 2(x + 3). Los paréntesis cambian el significado.</p>`, svg: traducir, video: pvid("algebra", 0) },
    { html: `<h3>1.2 Valor numérico</h3><p>El <b>valor numérico</b> de una expresión algebraica es el número que se obtiene al <b>sustituir</b> las letras por números concretos y hacer las operaciones.</p><p>Ejemplo: el valor de 3x² − 2x + 1 para x = −2 es 3 · (−2)² − 2 · (−2) + 1 = 3 · 4 + 4 + 1 = <mark>17</mark>.</p><p>Consejos importantes:</p><ul><li>Al sustituir un número negativo, escríbelo <b>entre paréntesis</b>: (−2)² = 4, mientras que −2² = −4.</li><li>Respeta la jerarquía de operaciones: primero potencias, luego productos y después sumas.</li><li>Recuerda que 3x significa 3 · x: si x = 5, 3x = 15, no 35.</li></ul><p>El valor numérico se usa en las fórmulas: el área de un círculo de radio 3 cm es π · 3² ≈ 28,27 cm². También sirve para comprobar si dos expresiones son iguales: si dan valores distintos para algún número, no lo son.</p>`, svg: valor },
    { html: `<h3>2.1 Monomios</h3><p>Un <b>monomio</b> es una expresión algebraica formada por el producto de un número y una o varias letras con exponentes naturales. Por ejemplo, −5x²y es un monomio. Sus partes son:</p><ul><li><b>Coeficiente</b>: el número, −5.</li><li><b>Parte literal</b>: las letras con sus exponentes, x²y.</li><li><b>Grado</b>: la suma de los exponentes de las letras, 2 + 1 = 3.</li></ul><p>Si no aparece coeficiente, es 1: x³ = 1 · x³. Si no aparece exponente, es 1: y = y¹. Un número solo, como 7, es un monomio de grado 0.</p><p>No son monomios las expresiones con letras en el denominador (3/x) ni con exponentes negativos o fraccionarios.</p><p>Dos monomios son <b>semejantes</b> si tienen la <b>misma parte literal</b>: 3x²y y −5x²y lo son; 3x²y y 3xy² no, porque los exponentes de cada letra son distintos.</p>`, svg: psvg("algebra", 2) },
    { html: `<h3>2.2 Sumar y restar monomios</h3><p>Solo se pueden sumar o restar <b>monomios semejantes</b>. Se suman o restan los coeficientes y se deja la misma parte literal: <mark>4x³ + 2x³ − x³ = 5x³</mark>.</p><p>Piensa en objetos: 4 manzanas más 2 manzanas son 6 manzanas, pero 4 manzanas más 2 peras no son 6 «manzaperas». Del mismo modo, 3x + 2y no se puede simplificar: se deja indicado.</p><p>Cuando hay muchos términos, se agrupan los semejantes: 5x² + 3x − 2x² + 7 − x + 1 = (5 − 2)x² + (3 − 1)x + (7 + 1) = 3x² + 2x + 8. Este proceso se llama <b>reducir términos semejantes</b>.</p><p>Error frecuente: sumar también los exponentes. x² + x² = 2x², no x⁴. Los exponentes solo cambian al multiplicar, nunca al sumar.</p>`, svg: semejantes },
    { html: `<h3>2.3 Multiplicar, dividir y elevar monomios</h3><p>Para <b>multiplicar</b> monomios se multiplican los coeficientes y las partes literales, sumando los exponentes de las letras iguales (propiedad de las potencias): <mark>3x²y · 5x⁴y³ = 15x⁶y⁴</mark>. Aquí no hace falta que sean semejantes.</p><p>Para <b>dividir</b> se dividen los coeficientes y se restan los exponentes: 12x⁵ : 4x² = 3x³. Si la letra del divisor tiene más exponente, el resultado no es un monomio: x² : x⁵ = 1/x³.</p><p>Para elevar un monomio a una <b>potencia</b>, se eleva el coeficiente y se multiplican los exponentes: (−2x³y)² = 4x⁶y².</p><p>Compara: 2x · 3x = 6x², pero 2x + 3x = 5x. Confundir la suma con el producto es uno de los errores más habituales en álgebra; vale la pena pararse a mirar qué operación aparece.</p>`, svg: opMonomios, video: pvid("algebra", 3) },
    { html: `<h3>3.1 Polinomios</h3><p>Un <b>polinomio</b> es una suma de monomios no semejantes, que se llaman sus <b>términos</b>. Según el número de términos hablamos de <b>binomio</b> (2 términos), <b>trinomio</b> (3) o polinomio en general.</p><p>En P(x) = 4x³ − 2x² + x − 7:</p><ul><li>El <b>grado</b> es el del término de mayor grado: 3.</li><li>El <b>coeficiente principal</b> es el del término de mayor grado: 4.</li><li>El <b>término independiente</b> es el que no tiene letra: −7.</li></ul><p>Un polinomio está <b>ordenado</b> si sus términos aparecen de mayor a menor grado, y es <b>completo</b> si tiene todos los grados desde el mayor hasta el 0. 3x³ + 5x − 1 no es completo: le falta el término en x² (su coeficiente es 0).</p><p>El valor numérico de un polinomio se escribe P(a): si P(x) = x² − 3x, entonces P(2) = 4 − 6 = −2.</p>`, svg: polinomio },
    { html: `<h3>3.2 Sumar y restar polinomios</h3><p>Para <b>sumar</b> polinomios se suman los términos semejantes. Se puede hacer en línea o colocándolos en columna, con los términos del mismo grado uno debajo de otro (dejando hueco si falta alguno).</p><p>Ejemplo: P(x) = 3x³ − 2x² + 5x − 1 y Q(x) = x³ + 4x² − x + 6. Entonces P + Q = <mark>4x³ + 2x² + 4x + 5</mark>.</p><p>Para <b>restar</b>, se suma el opuesto: se cambian los signos de <b>todos</b> los términos del segundo polinomio. P − Q = 3x³ − 2x² + 5x − 1 − x³ − 4x² + x − 6 = 2x³ − 6x² + 6x − 7.</p><p>El error más frecuente es cambiar solo el signo del primer término de Q. Para evitarlo, escribe primero −(x³ + 4x² − x + 6) y quita el paréntesis con cuidado, igual que con los números enteros.</p>`, svg: sumaPol },
    { html: `<h3>3.3 Multiplicar polinomios</h3><p>Para multiplicar un <b>monomio por un polinomio</b> se aplica la propiedad distributiva: se multiplica el monomio por cada término. 3x · (2x² − 5x + 1) = 6x³ − 15x² + 3x.</p><p>Para multiplicar <b>dos polinomios</b> se multiplica cada término del primero por cada término del segundo y después se reducen los términos semejantes:</p><p>(2x + 3)(x − 4) = 2x² − 8x + 3x − 12 = <mark>2x² − 5x − 12</mark>.</p><p>Con polinomios más largos, conviene hacerlo en columnas, como una multiplicación de números, colocando los resultados parciales según su grado.</p><p>El grado del producto es la <b>suma</b> de los grados de los factores: un polinomio de grado 2 por otro de grado 3 da uno de grado 5. Es una buena comprobación rápida.</p>`, svg: psvg("algebra", 5) },
    { html: `<h3>3.4 Identidades notables</h3><p>Algunos productos aparecen tan a menudo que conviene saber su resultado de memoria. Son las <b>identidades notables</b>:</p><ul><li><b>Cuadrado de una suma</b>: (a + b)² = a² + 2ab + b².</li><li><b>Cuadrado de una diferencia</b>: (a − b)² = a² − 2ab + b².</li><li><b>Suma por diferencia</b>: (a + b)(a − b) = a² − b².</li></ul><p>Se pueden comprobar multiplicando. Por ejemplo, (a + b)² = (a + b)(a + b) = a² + ab + ba + b² = a² + 2ab + b².</p><p>Ejemplos: (x + 3)² = x² + 6x + 9; (2x − 5)² = 4x² − 20x + 25; (3x + 1)(3x − 1) = 9x² − 1.</p><p>Error clásico: escribir (x + 3)² = x² + 9. ¡Falta el doble producto 6x! Para comprobarlo, da un valor: si x = 1, (1 + 3)² = 16, mientras que 1 + 9 = 10.</p>`, svg: tresIdent, video: pvid("algebra", 6) },
    { html: `<h3>3.5 Interpretación geométrica de las identidades</h3><p>Las identidades notables tienen una explicación muy visual. Dibuja un cuadrado de lado a + b. Su área es (a + b)². Pero el cuadrado se puede dividir en cuatro piezas: un cuadrado de lado a (área a²), otro de lado b (área b²) y dos rectángulos de lados a y b (área ab cada uno). Sumando: <mark>(a + b)² = a² + 2ab + b²</mark>.</p><p>Los antiguos griegos, como Euclides, razonaban así: no tenían álgebra con letras, pero demostraban estas igualdades con figuras geométricas.</p><p>La identidad suma por diferencia también tiene interpretación: a² − b² es lo que queda de un cuadrado de lado a al quitarle uno de lado b, y esa pieza en forma de L se puede recolocar formando un rectángulo de lados a + b y a − b.</p><p>Las identidades sirven además para calcular mentalmente: 51² = (50 + 1)² = 2500 + 100 + 1 = 2601, y 49 · 51 = 50² − 1 = 2499.</p>`, svg: notables },
    { html: `<h3>4.1 Sacar factor común</h3><p><b>Sacar factor común</b> es la operación inversa de la propiedad distributiva: se busca lo que se repite en todos los términos y se escribe fuera de un paréntesis.</p><ol><li>Se calcula el <b>mcd de los coeficientes</b>.</li><li>Se toman las <b>letras comunes</b> a todos los términos, con su <b>menor exponente</b>.</li><li>Se divide cada término entre ese factor común y se escribe el resultado dentro del paréntesis.</li></ol><p>Ejemplo: 6x³ − 9x² + 3x. El mcd de 6, 9 y 3 es 3, y la letra común es x (menor exponente 1). Factor común: 3x. Resultado: <mark>3x(2x² − 3x + 1)</mark>.</p><p>Cuidado: si un término coincide con el factor común, dentro queda un 1, no un 0. Compruébalo siempre multiplicando: 3x · 2x² − 3x · 3x + 3x · 1 = 6x³ − 9x² + 3x. ✔</p>`, svg: factorComun },
    { html: `<h3>4.2 Factorizar con identidades notables</h3><p><b>Factorizar</b> un polinomio es escribirlo como producto de factores más sencillos. Además del factor común, las identidades notables leídas «al revés» son una herramienta muy potente:</p><ul><li>Una <b>diferencia de cuadrados</b> es suma por diferencia: x² − 25 = (x + 5)(x − 5).</li><li>Un <b>trinomio cuadrado perfecto</b> es el cuadrado de un binomio: x² + 10x + 25 = (x + 5)², y 4x² − 12x + 9 = (2x − 3)².</li></ul><p>Para reconocer un trinomio cuadrado perfecto, mira si dos términos son cuadrados (a² y b²) y si el otro es su doble producto (2ab). En 4x² − 12x + 9: 4x² = (2x)², 9 = 3² y 2 · 2x · 3 = 12x. ✔</p><p>A veces hay que combinar: 3x² − 12 = 3(x² − 4) = 3(x + 2)(x − 2). Saca siempre primero el factor común.</p>`, svg: factorizar },
    { html: `<h3>4.3 Fracciones algebraicas</h3><p>Una <b>fracción algebraica</b> es un cociente de polinomios, como (x² − 9)/(2x + 6). Se simplifican igual que las fracciones numéricas: dividiendo numerador y denominador entre un <b>factor común</b>.</p><p>Por eso primero hay que <b>factorizar</b>: x² − 9 = (x + 3)(x − 3) y 2x + 6 = 2(x + 3). El factor (x + 3) está arriba y abajo, así que se simplifica: <mark>(x − 3)/2</mark>.</p><p>Error gravísimo: «tachar» sumandos. En (x + 3)/3 no se puede tachar el 3, porque no es un factor del numerador, sino un sumando. Solo se simplifican <b>factores</b>, es decir, cosas que multiplican a todo lo demás.</p><p>Comprueba el resultado con un valor numérico: si x = 5, (25 − 9)/(10 + 6) = 16/16 = 1, y (5 − 3)/2 = 1. ✔ Estas técnicas te servirán en 3.º y 4.º para resolver ecuaciones más complejas.</p>`, svg: fracAlg },
  ],
  ejemplos: [
    { enunciado: "Expresa en lenguaje algebraico: «la suma de tres números consecutivos».", pasos: ["Si el primero es x, los siguientes son x + 1 y x + 2.", "Suma: x + (x + 1) + (x + 2) = 3x + 3."], resultado: "3x + 3 = 3(x + 1)." },
    { enunciado: "Calcula el valor numérico de 2a² − 3ab + b para a = −1 y b = 4.", pasos: ["2 · (−1)² − 3 · (−1) · 4 + 4.", "2 · 1 + 12 + 4."], resultado: "18." },
    { enunciado: "Reduce: 4x² − 3x + 7 − x² + 5x − 10.", pasos: ["x²: 4 − 1 = 3.", "x: −3 + 5 = 2.", "Números: 7 − 10 = −3."], resultado: "3x² + 2x − 3." },
    { enunciado: "Multiplica: (x² − 2x + 3)(2x − 1).", pasos: ["x² · 2x − x² − 4x² + 2x + 6x − 3.", "2x³ − x² − 4x² + 2x + 6x − 3.", "Reducir: 2x³ − 5x² + 8x − 3."], resultado: "2x³ − 5x² + 8x − 3." },
    { enunciado: "Desarrolla (3x − 2)² y (x + 4)(x − 4).", pasos: ["(3x)² − 2 · 3x · 2 + 2² = 9x² − 12x + 4.", "x² − 16."], resultado: "9x² − 12x + 4 y x² − 16." },
    { enunciado: "Factoriza 2x³ − 8x.", pasos: ["Factor común: 2x → 2x(x² − 4).", "x² − 4 es diferencia de cuadrados: (x + 2)(x − 2)."], resultado: "2x(x + 2)(x − 2)." },
  ],
  errores: [
    "Sumar monomios no semejantes: 3x + 2y no es 5xy.",
    "Sumar los exponentes al sumar monomios: x² + x² no es x⁴.",
    "Olvidar el doble producto: (x + 3)² no es x² + 9.",
    "Al restar polinomios, cambiar solo el signo del primer término.",
    "Sustituir un negativo sin paréntesis: para x = −3, x² no es −9.",
    "Tachar sumandos en una fracción algebraica: (x + 3)/3 no es x.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Traduce al lenguaje algebraico: a) el triple de un número menos 4; b) la mitad de un número más su cuadrado; c) dos números pares consecutivos.", sol: "a) 3x − 4. b) x/2 + x². c) 2x y 2x + 2." },
    { nivel: "básico", q: "Calcula el valor numérico de 5x − 3 para x = 2, x = 0 y x = −1.", sol: "7; −3; −8." },
    { nivel: "básico", q: "Calcula el valor de x² − 4x + 1 para x = −3.", sol: "(−3)² − 4 · (−3) + 1 = 9 + 12 + 1 = 22." },
    { nivel: "básico", q: "Indica coeficiente, parte literal y grado: −7x³; 2/3 ab²; x; 5.", sol: "−7, x³, 3. 2/3, ab², 3. 1, x, 1. 5, ninguna, 0." },
    { nivel: "básico", q: "Agrupa los monomios semejantes: 3x², −2xy, 5x, x², 4xy, −x.", sol: "{3x², x²}, {−2xy, 4xy}, {5x, −x}." },
    { nivel: "básico", q: "Reduce: a) 5x + 3x − 9x; b) 2a² − 7a² + a².", sol: "a) −x. b) −4a²." },
    { nivel: "básico", q: "Calcula: a) 4x³ · (−2x²); b) 15a⁴b : 5a²b; c) (3x²)³.", sol: "a) −8x⁵. b) 3a². c) 27x⁶." },
    { nivel: "básico", q: "Indica grado, coeficiente principal y término independiente de P(x) = −2x⁴ + x² − 3x + 8.", sol: "Grado 4; coeficiente principal −2; término independiente 8. No es completo (falta x³)." },
    { nivel: "básico", q: "Si P(x) = 2x² − x + 3, calcula P(1), P(−2) y P(0).", sol: "P(1) = 4; P(−2) = 8 + 2 + 3 = 13; P(0) = 3." },
    { nivel: "básico", q: "Calcula: 2x · (3x² − 4x + 5).", sol: "6x³ − 8x² + 10x." },
    { nivel: "medio", q: "Con P(x) = 3x³ − x + 2 y Q(x) = x³ + 2x² − 5, calcula P + Q y P − Q.", sol: "P + Q = 4x³ + 2x² − x − 3. P − Q = 2x³ − 2x² − x + 7." },
    { nivel: "medio", q: "Multiplica: (3x − 2)(2x + 5).", sol: "6x² + 15x − 4x − 10 = 6x² + 11x − 10." },
    { nivel: "medio", q: "Multiplica: (x² + x − 1)(x − 3).", sol: "x³ − 3x² + x² − 3x − x + 3 = x³ − 2x² − 4x + 3." },
    { nivel: "medio", q: "Desarrolla: (x + 5)², (2a − 3)², (4x + 1)(4x − 1).", sol: "x² + 10x + 25; 4a² − 12a + 9; 16x² − 1." },
    { nivel: "medio", q: "Desarrolla: (x/2 + 2)².", sol: "x²/4 + 2x + 4." },
    { nivel: "medio", q: "Saca factor común: a) 12x² − 8x; b) 5a³b − 10a²b² + 15ab.", sol: "a) 4x(3x − 2). b) 5ab(a² − 2ab + 3)." },
    { nivel: "medio", q: "Factoriza: x² − 49; 9x² − 1; x² − 6x + 9.", sol: "(x + 7)(x − 7); (3x + 1)(3x − 1); (x − 3)²." },
    { nivel: "medio", q: "Simplifica: (x + 2)² − (x − 2)².", sol: "x² + 4x + 4 − (x² − 4x + 4) = 8x." },
    { nivel: "medio", q: "Expresa el perímetro y el área de un rectángulo de lados x + 3 y 2x.", sol: "Perímetro: 2(x + 3) + 2 · 2x = 6x + 6. Área: 2x(x + 3) = 2x² + 6x." },
    { nivel: "medio", q: "Calcula mentalmente con identidades: 101², 99², 98 · 102.", sol: "(100 + 1)² = 10 201; (100 − 1)² = 9801; 100² − 2² = 9996." },
    { nivel: "medio", q: "Comprueba con x = 2 que (x + 1)² ≠ x² + 1.", sol: "(2 + 1)² = 9 y 2² + 1 = 5. Son distintos: falta el término 2x." },
    { nivel: "medio", q: "Escribe un polinomio de grado 3, completo y ordenado, con término independiente −4 y coeficiente principal 2.", sol: "Por ejemplo: 2x³ − x² + 5x − 4." },
    { nivel: "avanzado", q: "Factoriza al máximo: 3x³ − 12x² + 12x.", sol: "3x(x² − 4x + 4) = 3x(x − 2)²." },
    { nivel: "avanzado", q: "Simplifica la fracción: (x² − 4) / (x² + 4x + 4).", sol: "(x + 2)(x − 2) / (x + 2)² = (x − 2)/(x + 2)." },
    { nivel: "avanzado", q: "Simplifica: (2x² − 6x) / (x² − 9).", sol: "2x(x − 3) / ((x + 3)(x − 3)) = 2x/(x + 3)." },
    { nivel: "avanzado", q: "Demuestra que la suma de tres números consecutivos es siempre múltiplo de 3.", sol: "x + (x + 1) + (x + 2) = 3x + 3 = 3(x + 1): es 3 por un entero." },
    { nivel: "avanzado", q: "Demuestra que la diferencia entre los cuadrados de dos números consecutivos es igual a su suma.", sol: "(x + 1)² − x² = 2x + 1 = x + (x + 1)." },
    { nivel: "avanzado", q: "Explica el truco de la pregunta inicial con álgebra y crea otro truco parecido.", sol: "((x + 3) · 2 − 6) : x = 2x : x = 2. Otro: piensa un número, multiplícalo por 4, súmale 8, divide entre 4 y réstale el número: (4x + 8)/4 − x = x + 2 − x = 2." },
    { nivel: "avanzado", q: "Halla a para que x² + ax + 16 sea un trinomio cuadrado perfecto.", sol: "x² + ax + 16 = (x ± 4)² → a = 8 o a = −8." },
    { nivel: "avanzado", q: "Calcula: (x + 1)(x − 1)(x² + 1).", sol: "(x² − 1)(x² + 1) = x⁴ − 1." },
  ],
  quiz: baraja([
    { q: "«El doble de un número menos 5» es…", o: ["2x − 5", "2(x − 5)", "x² − 5", "x/2 − 5"], a: 0, e: "Primero el doble, luego se resta." },
    { q: "Dos números consecutivos:", o: ["x y x + 1", "x y 2x", "x y x²", "x y −x"], a: 0, e: "Se diferencian en 1." },
    { q: "Valor de 3x − 1 para x = −2:", o: ["−7", "5", "−5", "7"], a: 0, e: "−6 − 1." },
    { q: "Valor de x² para x = −4:", o: ["16", "−16", "8", "−8"], a: 0, e: "(−4)² = 16." },
    { q: "El grado de −2x³y² es…", o: ["5", "3", "2", "−2"], a: 0, e: "3 + 2." },
    { q: "¿Cuál es semejante a 4ab²?", o: ["−ab²", "4a²b", "4ab", "4a²b²"], a: 0, e: "Misma parte literal." },
    { q: "3x + 5x =", o: ["8x", "8x²", "15x", "15x²"], a: 0, e: "Se suman coeficientes." },
    { q: "3x · 5x =", o: ["15x²", "8x", "15x", "8x²"], a: 0, e: "Se multiplican y se suman exponentes." },
    { q: "x² + x² =", o: ["2x²", "x⁴", "2x⁴", "x²"], a: 0, e: "Semejantes." },
    { q: "10x⁶ : 2x² =", o: ["5x⁴", "5x³", "8x⁴", "5x⁸"], a: 0, e: "Exponentes se restan." },
    { q: "(−3x²)² =", o: ["9x⁴", "−9x⁴", "9x²", "6x⁴"], a: 0, e: "Todo al cuadrado." },
    { q: "El grado de 5x⁴ − x⁶ + 2 es…", o: ["6", "4", "10", "2"], a: 0, e: "Mayor exponente." },
    { q: "(x + 2) − (x − 3) =", o: ["5", "−1", "2x + 5", "2x − 1"], a: 0, e: "x + 2 − x + 3." },
    { q: "(x + 1)(x + 2) =", o: ["x² + 3x + 2", "x² + 2", "x² + 2x + 2", "2x + 3"], a: 0, e: "x² + 2x + x + 2." },
    { q: "(a + b)² =", o: ["a² + 2ab + b²", "a² + b²", "a² − 2ab + b²", "2a + 2b"], a: 0, e: "Cuadrado de una suma." },
    { q: "(x − 5)² =", o: ["x² − 10x + 25", "x² − 25", "x² + 25", "x² − 5x + 25"], a: 0, e: "Doble producto −10x." },
    { q: "(x + 6)(x − 6) =", o: ["x² − 36", "x² + 36", "x² − 12x + 36", "x² − 6"], a: 0, e: "Suma por diferencia." },
    { q: "Factor común de 4x² + 6x:", o: ["2x(2x + 3)", "2(2x² + 3)", "4x(x + 2)", "4x(x + 6)"], a: 0, e: "mcd 2 y letra x." },
    { q: "x² − 16 factorizado:", o: ["(x + 4)(x − 4)", "(x − 4)²", "(x + 4)²", "(x − 8)(x + 2)"], a: 0, e: "Diferencia de cuadrados." },
    { q: "(x² − 1)/(x − 1) =", o: ["x + 1", "x − 1", "x", "1"], a: 0, e: "(x + 1)(x − 1)/(x − 1)." },
  ]),
  examen: baraja([
    { q: "Valor de 2x² − x para x = −3:", o: ["21", "15", "−21", "33"], a: 0, e: "18 + 3." },
    { q: "5x² − 2x + 3x² + 4x =", o: ["8x² + 2x", "10x³", "8x² − 6x", "8x⁴ + 2x"], a: 0, e: "Reducir semejantes." },
    { q: "−2a²b · 3ab³ =", o: ["−6a³b⁴", "6a³b⁴", "a³b⁴", "−6a²b³"], a: 0, e: "Coeficientes y exponentes." },
    { q: "(2x − 1)(x + 3) =", o: ["2x² + 5x − 3", "2x² − 3", "2x² + 7x − 3", "2x² + 5x + 3"], a: 0, e: "2x² + 6x − x − 3." },
    { q: "(3x + 2)² =", o: ["9x² + 12x + 4", "9x² + 4", "9x² + 6x + 4", "3x² + 12x + 4"], a: 0, e: "Identidad notable." },
    { q: "(2x + 5)(2x − 5) =", o: ["4x² − 25", "4x² + 25", "4x² − 10", "2x² − 25"], a: 0, e: "Suma por diferencia." },
    { q: "6x³ − 3x² factorizado:", o: ["3x²(2x − 1)", "3x(2x² − 1)", "3x²(2x + 1)", "x²(6x − 1)"], a: 0, e: "mcd 3 y x²." },
    { q: "x² + 8x + 16 =", o: ["(x + 4)²", "(x + 8)²", "(x + 4)(x − 4)", "(x + 2)(x + 8)"], a: 0, e: "Trinomio cuadrado perfecto." },
  ], 1),
  feynman: ["Por qué solo se pueden sumar monomios semejantes", "Por qué (a + b)² no es a² + b², con un dibujo", "Qué es sacar factor común y cómo se comprueba", "Por qué en una fracción algebraica solo se simplifican factores"],
  figura: {
    titulo: "Expresiones algebraicas en un vistazo",
    svg: resumen("Resumen del tema de expresiones algebraicas", [
      ["Lenguaje", "doble 2x · consecutivo x + 1 · valor numérico", "var(--pen)"],
      ["Monomios", "coeficiente · parte literal · grado · semejantes", "var(--leaf)"],
      ["Polinomios", "+ −: semejantes · ·: cada término por cada término", "var(--sun)"],
      ["Identidades", "(a ± b)² = a² ± 2ab + b² · (a+b)(a−b) = a² − b²", "var(--inf)"],
      ["Factorizar", "factor común · identidades al revés", "var(--red)"],
    ]),
  },
  video: pvg("algebra"),
  mapa: mapa("ÁLGEBRA", "var(--pen)", [
    ["Lenguaje algebraico", "traducir · valor numérico", "var(--pen)"],
    ["Monomios", "semejantes · + − · :", "var(--leaf)"],
    ["Polinomios", "grado · operaciones", "var(--sun)"],
    ["Identidades", "notables · factorizar", "var(--red)"],
  ], 250),
  glosario: [
    ["Expresión algebraica", "Combinación de números y letras unidos por operaciones."],
    ["Variable", "Letra que puede tomar distintos valores."],
    ["Valor numérico", "Resultado de sustituir las letras por números y operar."],
    ["Monomio", "Producto de un número por letras con exponentes naturales."],
    ["Coeficiente", "Parte numérica de un monomio."],
    ["Parte literal", "Letras de un monomio con sus exponentes."],
    ["Grado de un monomio", "Suma de los exponentes de sus letras."],
    ["Monomios semejantes", "Los que tienen la misma parte literal."],
    ["Polinomio", "Suma de monomios no semejantes."],
    ["Grado de un polinomio", "Mayor grado de sus términos."],
    ["Término independiente", "Término de un polinomio que no tiene letra."],
    ["Identidad notable", "Igualdad algebraica que se cumple siempre: (a + b)², (a − b)², (a + b)(a − b)."],
    ["Factor común", "Expresión que divide a todos los términos y se saca fuera de un paréntesis."],
    ["Factorizar", "Escribir un polinomio como producto de factores."],
    ["Fracción algebraica", "Cociente de dos polinomios."],
  ],
  situacion: {
    titulo: "Magia con álgebra",
    reto: "Vais a crear y presentar a otra clase un «número de magia» matemático en el que el público piensa un número, sigue unas instrucciones y vosotros adivináis el resultado, y después reveláis el secreto con álgebra.",
    pasos: [
      "Analizad con álgebra dos trucos conocidos (por ejemplo, el de la pregunta inicial) y explicad por qué funcionan.",
      "Inventad un truco propio con al menos cuatro operaciones que incluya multiplicar y restar el número pensado.",
      "Escribid el truco en lenguaje algebraico y simplificad la expresión hasta obtener el resultado fijo.",
      "Probadlo con varios números, incluidos negativos y decimales, y comprobad con el valor numérico.",
      "Representad el truco ante la clase y desvelad el secreto en una pizarra o cartel.",
    ],
    producto: "Un truco de magia matemático presentado en directo y su demostración algebraica por escrito.",
    evaluacion: ["Traduce correctamente las instrucciones al lenguaje algebraico.", "Simplifica la expresión operando con monomios y polinomios.", "Justifica que el truco funciona para cualquier número.", "Presenta el truco y la explicación con claridad y creatividad."],
  },
  tarjetas: [
    ["El doble / la mitad", "2x / x/2"], ["Consecutivos", "x, x + 1, x + 2"], ["Valor numérico", "Sustituir y operar (negativos con paréntesis)"],
    ["Grado de un monomio", "Suma de exponentes"], ["Semejantes", "Misma parte literal"], ["Sumar monomios", "Solo semejantes; se suman coeficientes"],
    ["Multiplicar monomios", "Coeficientes · y exponentes +"], ["Restar polinomios", "Cambiar todos los signos del segundo"], ["(a + b)²", "a² + 2ab + b²"],
    ["(a − b)²", "a² − 2ab + b²"], ["(a + b)(a − b)", "a² − b²"], ["Factor común", "mcd y letras comunes con menor exponente"],
  ],
  familias: ["Pedid que traduzca a álgebra frases como «tengo el doble de años que mi hermano más 3».", "Usad fórmulas reales (área de una habitación, precio de un taxi) y calculad valores numéricos.", "Haced juntos trucos de «piensa un número» y pedid que explique por qué funcionan.", "Calculad mentalmente cuadrados como 31² con la identidad (30 + 1)²."],
  profesores: {
    saberes: "Sentido algebraico: lenguaje algebraico, expresiones algebraicas, valor numérico, operaciones con monomios y polinomios, identidades notables y factorización sencilla; generalización de patrones (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Fichas de álgebra (algeblocks) para sumar monomios y visualizar identidades.", "Recortar cuadrados y rectángulos para demostrar (a + b)².", "Patrones con palillos o fichas para generalizar con álgebra.", "Trucos de magia matemática para motivar la simplificación."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Al-Juarismi", url: "https://es.wikipedia.org/wiki/Al-Juarismi" }, { t: "Wikipedia: Productos notables", url: "https://es.wikipedia.org/wiki/Productos_notables" }],
  revisado: REV,
};
