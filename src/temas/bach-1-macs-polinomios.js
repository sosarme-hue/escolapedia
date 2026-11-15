// Matemáticas Aplicadas a las Ciencias Sociales I · Tema 3. Nivel libro. Dibujos propios en SVG.
const { tema, ficha, tabla, G, cadena, compara, flujo, lienzo, t, ft, wiki } = require("./_bach1-macs");

// Esquema de Ruffini: coeficientes, raíz a, fila de productos y fila de resultados.
function ruffini(aria, coef, a, titulo) {
  const n = coef.length, prod = [""], res = [coef[0]];
  for (let i = 1; i < n; i++) { const p = res[i - 1] * a; prod.push(p); res.push(coef[i] + p); }
  const f = (v) => (v === "" ? "" : String(v).replace("-", "−"));
  const cw = 196 / n, x0 = 52;
  let s = ft(130, 22, titulo, 236, { s: 12, b: 1 });
  s += `<path d="M${x0 - 6} 40 V 136 M${x0 - 6} 108 H 248" stroke="var(--ink)" stroke-width="2"/>`;
  s += t(x0 - 16, 102, f(a), { s: 14, b: 1, c: "var(--red)" });
  coef.forEach((c, i) => {
    const x = x0 + cw * (i + 0.5);
    s += t(x, 62, f(c), { s: 14, b: 1 }) + t(x, 96, f(prod[i]), { s: 13, c: "var(--red)" });
    s += t(x, 130, f(res[i]), { s: 14, b: 1, c: i === n - 1 ? "var(--leaf)" : "var(--pen)" });
  });
  s += ft(130, 162, `cociente: ${res.slice(0, -1).map(f).join(", ")} · resto ${f(res[n - 1])}`, 236, { s: 11.5, b: 1, c: "var(--muted)" });
  return lienzo(aria, s);
}

module.exports = tema({
  n: 3,
  titulo: "Polinomios y fracciones algebraicas",
  minutos: 110,
  objetivos: [
    "Traducir situaciones económicas (costes, ingresos, beneficios) al lenguaje algebraico",
    "Operar con polinomios y utilizar las identidades notables y el binomio de Newton",
    "Dividir polinomios con el algoritmo general y con la regla de Ruffini",
    "Aplicar los teoremas del resto y del factor para hallar raíces y umbrales de rentabilidad",
    "Factorizar polinomios y calcular su máximo común divisor y mínimo común múltiplo",
    "Simplificar y operar fracciones algebraicas e interpretar el coste medio",
  ],
  claves: ["polinomio", "grado", "valor numérico", "identidad notable", "binomio de Newton", "regla de Ruffini", "teorema del resto", "raíz", "factorización", "fracción algebraica"],
  lectura: {
    titulo: "La fórmula del beneficio",
    html: `<p>Irene y Pau han montado una pequeña empresa que fabrica mochilas con lonas recicladas. Cada mochila les cuesta 40 € en materiales y mano de obra, y además pagan 500 € al mes de alquiler del taller. Han observado que, si ponen un precio alto, venden pocas, y que cada euro que bajan el precio les permite vender una mochila más: venden x mochilas al mes si el precio es de 100 − x euros.</p>
    <p>¿Cuántas mochilas les conviene fabricar? Para responder necesitan escribir sus ingresos, sus costes y su beneficio como expresiones algebraicas. Los ingresos son el precio por la cantidad, (100 − x) · x; los costes, 40x + 500; y el beneficio, la diferencia: −x² + 60x − 500. Es un <b>polinomio</b>. Al factorizarlo, −(x − 10)(x − 50), descubren que solo ganan dinero si venden entre 10 y 50 mochilas: fuera de ese intervalo, pierden.</p>
    <p>Este tipo de razonamiento, que los economistas llaman análisis de costes y beneficios, se apoya en el álgebra que vas a estudiar en este tema: operar, dividir y factorizar polinomios, encontrar sus raíces y trabajar con fracciones algebraicas, como el coste medio de cada unidad producida.</p>`,
  },
  pregunta: {
    texto: "Si el beneficio de una empresa es B(x) = −(x − 10)(x − 50), ¿para qué cantidades x deja de tener pérdidas?",
    respuesta: "Para x entre <mark>10 y 50</mark>. Los valores 10 y 50 son las <b>raíces</b> del polinomio, los puntos en los que el beneficio es cero (umbrales de rentabilidad); entre ellos, el producto de los dos factores es negativo y, con el signo menos delante, el beneficio es positivo.",
  },
  bloques: [
    {
      h: "Expresiones algebraicas y modelos económicos",
      html: `<p>Una <b>expresión algebraica</b> combina números y letras (variables) mediante operaciones. Sirve para describir relaciones generales que valen para cualquier valor de la variable. En economía es la herramienta básica para escribir modelos:</p><ul><li><b>Coste total</b>: C(x) = CF + CV · x, donde CF son los costes fijos (alquiler, seguros) y CV el coste variable de cada unidad.</li><li><b>Ingresos</b>: I(x) = p · x, el precio por la cantidad vendida.</li><li><b>Beneficio</b>: B(x) = I(x) − C(x).</li></ul><p>Con los datos de la lectura, C(x) = 40x + 500. Si el precio fuera fijo, de 70 €, los ingresos serían I(x) = 70x y el beneficio B(x) = 70x − (40x + 500) = 30x − 500. Cada mochila deja un <b>margen</b> de 30 €, y hacen falta 500/30 ≈ 16,7, es decir, 17 mochilas para cubrir los costes fijos.</p><p>Traducir enunciados es la primera destreza. «El doble de un número menos su cuadrado» es 2x − x²; «el 15 % de los ingresos» es 0,15 · I; «el precio aumentado un 21 %» es 1,21p; «la media de dos notas» es (a + b)/2. Conviene definir siempre qué representa cada letra y en qué unidades se mide.</p>`,
      svg: G("Rectas de ingresos 70x y costes 40x más 500: se cortan hacia las 17 unidades, el punto muerto", { x0: -3, x1: 32, y0: -150, y1: 2300, paso: 5, pasoY: 500, etiquetas: true, pasoEt: 10, pasoEtY: 1000 }, (E) => `${E.curva((x) => 70 * x, "var(--leaf)", 0, 32)}${E.curva((x) => 40 * x + 500, "var(--red)", 0, 32)}${E.area([[16.67, 1166.7], [32, 2240], [32, 1780]], "var(--leaf)", 0.18)}${E.area([[0, 0], [16.67, 1166.7], [0, 500]], "var(--red)", 0.15)}${E.punto(16.67, 1166.7, "var(--ink)", "x ≈ 16,7", 6, 14)}${t(E.X(0.5), E.Y(2050), "I = 70x", { c: "var(--leaf)", s: 11, b: 1, a: "start" })}${t(E.X(0.5), E.Y(1780), "C = 40x + 500", { c: "var(--red)", s: 11, b: 1, a: "start" })}`),
    },
    {
      h: "Polinomios: grado y valor numérico",
      html: `<p>Un <b>monomio</b> es el producto de un número (coeficiente) por una o varias letras con exponentes naturales: −3x², 0,5xy. Un <b>polinomio</b> es una suma de monomios. En una variable se escribe ordenado de mayor a menor grado:</p><div class="formula"><span>P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀</span></div><p>El <b>grado</b> es el mayor exponente con coeficiente no nulo; aₙ es el <b>coeficiente principal</b> y a₀ el <b>término independiente</b>. Los polinomios de grado 1 dan relaciones lineales (costes con coste unitario constante), y los de grado 2 aparecen cuando el precio depende de la cantidad, como en B(x) = −x² + 60x − 500.</p><p>El <b>valor numérico</b> de P(x) en x = a, que se escribe P(a), es el número que resulta al sustituir x por a. En los modelos económicos tiene un significado concreto: B(20) = −400 + 1.200 − 500 = 300 € es el beneficio si se venden 20 mochilas, y B(5) = −25 + 300 − 500 = −225 € indica pérdidas con 5. Calcular valores numéricos es lo que hace una hoja de cálculo al rellenar una tabla.</p><p>Dos polinomios son <b>iguales</b> si tienen el mismo grado y los mismos coeficientes. Esta idea permite, por ejemplo, hallar parámetros: si 3x² + bx + c = 3x² − 6x + 1 para todo x, entonces b = −6 y c = 1.</p>`,
      svg: tabla("Tabla de valores del beneficio B(x) igual a menos x cuadrado más 60x menos 500 para distintas cantidades", [["x (mochilas)", "B(x) (€)"], ["5", "−225"], ["10", "0"], ["20", "300"], ["30", "400"], ["50", "0"]], { titulo: "B(x) = −x² + 60x − 500", marca: [[2, 1], [5, 1]], cab: "var(--leaf)" }),
    },
    {
      h: "Suma, resta y producto de polinomios",
      html: `<p>Para <b>sumar o restar</b> polinomios se agrupan los monomios semejantes (del mismo grado). Al restar hay que cambiar el signo de todos los términos del sustraendo:</p><div class="formula"><span>(−x² + 100x) − (40x + 500) = −x² + 60x − 500</span></div><p>Para <b>multiplicar</b> se aplica la propiedad distributiva: cada monomio del primer factor por cada monomio del segundo, y después se agrupan semejantes. El grado del producto es la suma de los grados.</p><p>En economía el producto aparece al calcular ingresos cuando el precio depende de la cantidad. Si la demanda indica que a un precio p = 100 − x se venden x unidades, los ingresos son I(x) = (100 − x) · x = 100x − x². Si una academia cobra 120 − 2x euros a cada alumno cuando tiene x alumnos (descuento por grupo) y le cuesta 30x + 200 euros, su beneficio es</p><div class="formula"><span>B(x) = (120 − 2x)x − (30x + 200) = −2x² + 90x − 200</span></div><p>Un ejemplo con más términos: (2x − 3)(x² + x − 4) = 2x³ + 2x² − 8x − 3x² − 3x + 12 = 2x³ − x² − 11x + 12. Para no olvidar ningún producto conviene disponer la multiplicación en columnas, como con los números, o contar que deben salir 2 · 3 = 6 productos antes de agrupar.</p>`,
      svg: cadena("Construcción del beneficio a partir de ingresos y costes: ingresos menos costes da el polinomio de beneficio", [["I(x)", "(100 − x) · x", "= 100x − x²"], ["C(x)", "40x + 500"], ["B(x)", "I − C", "= −x² + 60x − 500"]], "beneficio = ingresos − costes", "Del modelo al polinomio"),
    },
    {
      h: "Identidades notables y binomio de Newton",
      html: `<p>Algunos productos aparecen tanto que conviene recordarlos, porque permiten desarrollar y factorizar con rapidez:</p><div class="formula"><span>(a + b)² = a² + 2ab + b²   ·   (a − b)² = a² − 2ab + b²   ·   (a + b)(a − b) = a² − b²</span></div><p>Para potencias mayores se usa el <b>binomio de Newton</b>. Los coeficientes de (a + b)ⁿ son los números combinatorios, que forman el <b>triángulo de Tartaglia</b> (o de Pascal): cada número es la suma de los dos que tiene encima.</p><div class="formula"><span>(a + b)³ = a³ + 3a²b + 3ab² + b³   ·   (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴</span></div><p>El binomio explica una aproximación muy usada en finanzas. Si r es pequeño, (1 + r)ⁿ = 1 + nr + (términos con r², r³…), y los términos con potencias de r son muy pequeños. Por ejemplo, 1,02³ = 1 + 3 · 0,02 + 3 · 0,0004 + 0,000008 = 1,061208, muy cerca de 1 + 0,06. Por eso, para plazos cortos y tipos bajos, el interés compuesto y el simple dan resultados parecidos, y la diferencia (el término 3r², los «intereses de los intereses») crece con el plazo.</p><p>Las identidades también sirven para calcular mentalmente: 49 · 51 = (50 − 1)(50 + 1) = 2.500 − 1 = 2.499, y 98² = (100 − 2)² = 10.000 − 400 + 4 = 9.604.</p>`,
      svg: lienzo("Triángulo de Tartaglia con las cinco primeras filas: cada número es la suma de los dos de encima", (() => { const F = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]; let s = ft(130, 20, "Triángulo de Tartaglia: coeficientes de (a + b)ⁿ", 236, { s: 11.5, b: 1 }); F.forEach((f, i) => f.forEach((v, j) => { const x = 130 + (j - i / 2) * 36, y = 40 + i * 26; s += `<circle cx="${x}" cy="${y}" r="12" fill="${i === 3 ? "var(--red)" : "var(--pen)"}" fill-opacity="${i === 3 ? 0.25 : 0.14}" stroke="${i === 3 ? "var(--red)" : "var(--pen)"}" stroke-width="1.6"/>` + t(x, y + 4, String(v), { s: 12, b: 1 }); }) ); s += t(18, 40 + 3 * 26 + 4, "n = 3", { s: 10, b: 1, c: "var(--red)", a: "start" }); return s + ft(130, 172, "(1 + r)³ = 1 + 3r + 3r² + r³", 236, { s: 11.5, b: 1, c: "var(--red)" }); })()),
    },
    {
      h: "División de polinomios",
      html: `<p>Dividir polinomios es análogo a dividir números. Dados el <b>dividendo</b> D(x) y el <b>divisor</b> d(x), se obtienen un <b>cociente</b> c(x) y un <b>resto</b> r(x) de grado menor que el divisor, que cumplen la <b>prueba de la división</b>:</p><div class="formula"><span>D(x) = d(x) · c(x) + r(x),   grado r &lt; grado d</span></div><p>El algoritmo se repite hasta que el resto tiene grado menor que el divisor: se divide el primer término del dividendo entre el primero del divisor, se multiplica el resultado por todo el divisor, se resta y se baja el siguiente término.</p><p>Ejemplo: (2x³ − 3x² + 4x − 5) : (x² − x + 1).</p><ul><li>2x³ : x² = 2x. Se resta 2x(x² − x + 1) = 2x³ − 2x² + 2x y queda −x² + 2x − 5.</li><li>−x² : x² = −1. Se resta −(x² − x + 1) y queda x − 4.</li></ul><p>Cociente 2x − 1 y resto x − 4. Comprobación: (x² − x + 1)(2x − 1) + x − 4 = 2x³ − 3x² + 4x − 5. Si falta algún grado en el dividendo, conviene escribirlo con coeficiente 0 para no descolocar las columnas.</p><p>Cuando el resto es 0, la división es <b>exacta</b>, y el divisor es un factor del dividendo. Esta idea es la base de la factorización.</p>`,
      svg: flujo("Pasos de la división de 2x al cubo menos 3x cuadrado más 4x menos 5 entre x cuadrado menos x más 1", ["2x³ : x² = 2x → restar 2x³ − 2x² + 2x", "Queda −x² + 2x − 5; −x² : x² = −1", "Restar −x² + x − 1 → resto x − 4", "Cociente 2x − 1 · resto x − 4"], "D = d · c + r"),
    },
    {
      h: "La regla de Ruffini",
      html: `<p>Cuando el divisor es de la forma x − a, la división se hace de forma muy rápida con la <b>regla de Ruffini</b>, que trabaja solo con los coeficientes:</p><ul><li>Se escriben los coeficientes del dividendo ordenados, con ceros en los grados que falten, y a la izquierda el número a.</li><li>Se baja el primer coeficiente.</li><li>Se multiplica por a, se coloca debajo del siguiente coeficiente y se suma. Se repite hasta el final.</li><li>El último número es el <b>resto</b>; los anteriores son los coeficientes del <b>cociente</b>, que tiene un grado menos.</li></ul><p>Ejemplo: (x³ − 6x² + 11x − 6) : (x − 2). Coeficientes 1, −6, 11, −6 y a = 2. Bajamos 1; 1 · 2 = 2 y −6 + 2 = −4; −4 · 2 = −8 y 11 − 8 = 3; 3 · 2 = 6 y −6 + 6 = 0. Cociente x² − 4x + 3 y resto 0.</p><p>Si el divisor es x + 3, entonces a = −3, porque x + 3 = x − (−3). Es uno de los fallos más habituales usar 3 en lugar de −3.</p><p>Ruffini es en realidad un modo eficiente de calcular valores numéricos, que es lo que hacen internamente las calculadoras y los programas (el llamado esquema de Horner): evaluar un polinomio de grado n así requiere solo n multiplicaciones.</p>`,
      svg: ruffini("Esquema de Ruffini para dividir x al cubo menos 6x cuadrado más 11x menos 6 entre x menos 2", [1, -6, 11, -6], 2, "(x³ − 6x² + 11x − 6) : (x − 2)"),
      video: { id: "hL2JpTc1XkQ", titulo: "Regla de Ruffini: división de polinomios", canal: "Matemáticas con Juan", vistas: 251027, busqueda: "polinomios operaciones división Ruffini" },
    },
    {
      h: "Teorema del resto y raíces",
      html: `<p>El <b>teorema del resto</b> afirma que el resto de dividir P(x) entre x − a es igual al valor numérico P(a). Se demuestra con la prueba de la división: P(x) = (x − a) · c(x) + r, y sustituyendo x = a, P(a) = 0 · c(a) + r = r.</p><p>Así, el resto de (x³ + 2x² − 5x + 1) : (x − 2) es P(2) = 8 + 8 − 10 + 1 = 7, sin necesidad de dividir.</p><p>Un número a es una <b>raíz</b> (o cero) de P(x) si P(a) = 0. El <b>teorema del factor</b> dice que a es raíz si y solo si x − a es un factor de P(x), es decir, si la división es exacta. Además:</p><ul><li>Un polinomio de grado n tiene como mucho n raíces reales.</li><li>Si los coeficientes son enteros, las raíces enteras son <b>divisores del término independiente</b>. Para x³ − 6x² + 11x − 6, los candidatos son ±1, ±2, ±3, ±6, y de ellos 1, 2 y 3 son raíces.</li></ul><p>En los modelos económicos, las raíces del beneficio son los <b>umbrales de rentabilidad</b> o puntos muertos: las cantidades con beneficio nulo. Para B(x) = −x² + 60x − 500, B(10) = −100 + 600 − 500 = 0, así que x = 10 es raíz y x − 10 es factor. Dividiendo se obtiene el otro factor y la segunda raíz, 50.</p>`,
      svg: G("Gráfica del beneficio menos x cuadrado más 60x menos 500 con raíces en 10 y 50 y zona de ganancias entre ellas", { x0: -4, x1: 64, y0: -700, y1: 560, paso: 10, pasoY: 200, etiquetas: true, pasoEt: 20, pasoEtY: 400 }, (E) => `${E.area([[10, 0], ...Array.from({ length: 41 }, (_, k) => [10 + k, -((10 + k) ** 2) + 60 * (10 + k) - 500]), [50, 0]], "var(--leaf)", 0.2)}${E.curva((x) => -x * x + 60 * x - 500, "var(--pen)", 0, 62)}${E.punto(10, 0, "var(--red)", "10", -4, 16)}${E.punto(50, 0, "var(--red)", "50", 4, 16)}${t(E.X(30), E.Y(150), "ganancias", { c: "var(--leaf)", s: 11, b: 1 })}${t(E.X(57), E.Y(-480), "pérdidas", { c: "var(--red)", s: 10, b: 1, a: "end" })}`),
    },
    {
      h: "Factorización de polinomios",
      html: `<p><b>Factorizar</b> un polinomio es escribirlo como producto de polinomios del menor grado posible, igual que se descompone un número en factores primos. Se combinan cuatro técnicas, en este orden:</p><ul><li><b>Sacar factor común</b>: 2x³ − 8x = 2x(x² − 4).</li><li><b>Identidades notables</b>: x² − 4 = (x − 2)(x + 2); x² − 6x + 9 = (x − 3)².</li><li><b>Ruffini</b> con los divisores del término independiente, para polinomios de grado 3 o más.</li><li><b>Ecuación de segundo grado</b> para el último factor cuadrático: si ax² + bx + c tiene raíces r₁ y r₂, entonces ax² + bx + c = a(x − r₁)(x − r₂).</li></ul><p>Ejemplo: x³ − 3x² − 4x + 12. Probando x = 2 con Ruffini, la división es exacta y el cociente es x² − x − 6, cuyas raíces son 3 y −2. Resultado: (x − 2)(x + 2)(x − 3). También se podía agrupar: x²(x − 3) − 4(x − 3) = (x² − 4)(x − 3).</p><p>Si el factor de segundo grado tiene discriminante negativo, como x² + x + 1, no se puede descomponer más en ℝ: es <b>irreducible</b>. Una raíz que aparece varias veces es <b>múltiple</b>: en (x − 3)²(x + 1), el 3 es raíz doble.</p><p>Factorizar el beneficio, B(x) = −(x − 10)(x − 50), permite leer de un vistazo los umbrales de rentabilidad y estudiar su signo.</p>`,
      svg: flujo("Orden de las técnicas para factorizar: factor común, identidades notables, Ruffini y ecuación de segundo grado", ["1. Factor común: 2x³ − 8x = 2x(x² − 4)", "2. Identidades: x² − 4 = (x − 2)(x + 2)", "3. Ruffini con divisores del término independiente", "4. Segundo grado: a(x − r₁)(x − r₂)"], "Cómo factorizar"),
      video: { id: "j5AfFpeUBEs", titulo: "Factorización por evaluación o Ruffini", canal: "julioprofe", vistas: 2479014, busqueda: "factorizar polinomios" },
    },
    {
      h: "Máximo común divisor y mínimo común múltiplo",
      html: `<p>Igual que con los números, una vez factorizados los polinomios se pueden calcular su <b>máximo común divisor</b> (m.c.d.) y su <b>mínimo común múltiplo</b> (m.c.m.):</p><ul><li><b>m.c.d.</b>: producto de los factores <b>comunes</b> elevados al <b>menor</b> exponente.</li><li><b>m.c.m.</b>: producto de los factores comunes y no comunes elevados al <b>mayor</b> exponente.</li></ul><p>Ejemplo: P(x) = x² − 1 = (x − 1)(x + 1) y Q(x) = x² − 2x + 1 = (x − 1)². El m.c.d. es x − 1 y el m.c.m. es (x − 1)²(x + 1).</p><p>Otro: P(x) = 2x³ − 8x = 2x(x − 2)(x + 2) y Q(x) = x² + 4x + 4 = (x + 2)². m.c.d. = x + 2; m.c.m. = 2x(x − 2)(x + 2)².</p><p>El m.c.d. sirve para <b>simplificar</b> fracciones algebraicas, dividiendo numerador y denominador entre él, y el m.c.m. para <b>reducir a común denominador</b> antes de sumar o restar. Si dos polinomios no tienen factores comunes (salvo constantes), se dice que son <b>primos entre sí</b>, y entonces su m.c.m. es su producto.</p><p>Se cumple, como con los números, que P · Q = m.c.d. · m.c.m. (salvo un factor constante), lo que permite comprobar los resultados: en el primer ejemplo, (x − 1) · (x − 1)²(x + 1) = (x − 1)³(x + 1) = (x² − 1)(x − 1)².</p>`,
      svg: compara("Comparación entre el máximo común divisor y el mínimo común múltiplo de x cuadrado menos 1 y x menos 1 al cuadrado", ["m.c.d.", "var(--pen)", ["factores comunes", "menor exponente", "x − 1", "→ simplificar"]], ["m.c.m.", "var(--red)", ["comunes y no comunes", "mayor exponente", "(x − 1)²(x + 1)", "→ sumar fracciones"]], "P = (x − 1)(x + 1) · Q = (x − 1)²"),
    },
    {
      h: "Fracciones algebraicas y coste medio",
      html: `<p>Una <b>fracción algebraica</b> es un cociente de dos polinomios P(x)/Q(x), con Q(x) no nulo. Solo tiene sentido para los valores de x que no anulan el denominador. Dos fracciones son <b>equivalentes</b> si P · S = Q · R, y para <b>simplificar</b> se factorizan numerador y denominador y se dividen entre los factores comunes:</p><div class="formula"><span>(x² − 9)/(x² + 6x + 9) = (x − 3)(x + 3)/(x + 3)² = (x − 3)/(x + 3)</span></div><p>Solo se pueden simplificar <b>factores</b>, nunca sumandos: en (x + 3)/(x + 5) no se puede «tachar» la x.</p><p>En economía la fracción algebraica más importante es el <b>coste medio</b> o coste por unidad: CMe(x) = C(x)/x. Para C(x) = 40x + 500,</p><div class="formula"><span>CMe(x) = (40x + 500)/x = 40 + 500/x</span></div><p>Con 10 unidades cada una cuesta 90 €; con 100, 45 €; con 1.000, 40,50 €. El coste fijo se reparte entre más unidades y el coste medio se acerca a 40 €: son las <b>economías de escala</b>. Si el coste es C(x) = x² + 10x + 400 (los costes variables crecen más deprisa al producir mucho), CMe(x) = x + 10 + 400/x, que primero baja y luego sube; su mínimo, en x = 20, es 50 €. Encontrarlo exactamente será un problema de derivadas.</p>`,
      svg: G("Coste medio 40 más 500 entre x: decrece al aumentar la producción y se acerca a 40 euros", { x0: -5, x1: 105, y0: -10, y1: 160, paso: 20, pasoY: 40, etiquetas: true }, (E) => `${E.curva((x) => 40 + 500 / x, "var(--pen)", 3.4, 104)}${E.seg(0, 40, 105, 40, "var(--red)", 1.4, 'stroke-dasharray="5 4"')}${E.punto(10, 90, "var(--pen)", "(10, 90)", 6, -4)}${E.punto(100, 45, "var(--pen)", "(100, 45)", -4, -10)}${t(E.X(103), E.Y(30), "asíntota 40 €", { c: "var(--red)", s: 10, b: 1, a: "end" })}${t(E.X(55), E.Y(140), "CMe = 40 + 500/x", { c: "var(--pen)", s: 11, b: 1 })}`),
    },
    {
      h: "Operaciones con fracciones algebraicas",
      html: `<p>Las fracciones algebraicas se operan con las mismas reglas que las numéricas:</p><ul><li><b>Suma y resta</b>: se reduce a común denominador con el m.c.m. de los denominadores. 2/(x − 1) + 3/(x + 1) = [2(x + 1) + 3(x − 1)]/(x² − 1) = (5x − 1)/(x² − 1).</li><li><b>Producto</b>: numerador por numerador y denominador por denominador, simplificando antes de multiplicar si es posible.</li><li><b>Cociente</b>: se multiplica por la fracción inversa.</li></ul><p>Ejemplo de producto y cociente: [(x² − 4)/(3x)] · [6x²/(x + 2)] = (x − 2)(x + 2) · 6x² / [3x(x + 2)] = 2x(x − 2).</p><p>Al terminar conviene simplificar siempre el resultado y recordar para qué valores no está definido: aunque 2x(x − 2) sea un polinomio, la expresión original no tiene sentido para x = 0 ni x = −2.</p><p>Estas operaciones aparecen al combinar magnitudes por unidad. Si un grupo de x amigos alquila una casa rural por 600 € y una furgoneta por 180 €, pero dos de ellos no usan la furgoneta, cada uno de los demás paga 600/x + 180/(x − 2) euros. Sumando, [600(x − 2) + 180x]/[x(x − 2)] = (780x − 1.200)/(x² − 2x). Con 8 amigos son 75 + 30 = 105 €.</p>`,
      svg: ficha("Reglas para sumar, multiplicar y dividir fracciones algebraicas con un ejemplo", "Operar fracciones", ["Suma: común denominador (m.c.m.)", "2/(x − 1) + 3/(x + 1) = (5x − 1)/(x² − 1)", "Producto: (P·R)/(Q·S)", "Cociente: (P/Q) : (R/S) = (P·S)/(Q·R)", ["¡Simplificar solo factores!", "var(--red)"]], "var(--leaf)"),
      video: { id: "pjq4eQzEHbg", titulo: "Simplificación de fracciones algebraicas", canal: "Matemáticas profe Alex", vistas: 1160593, busqueda: "fracciones algebraicas simplificar" },
    },
    {
      h: "Álgebra al servicio de las decisiones",
      html: `<p>Las técnicas de este tema se combinan para analizar problemas económicos completos. Volvamos a la empresa de mochilas, con ingresos I(x) = 100x − x² y costes C(x) = 40x + 500:</p><ul><li><b>Beneficio</b>: B(x) = −x² + 60x − 500 (operar polinomios).</li><li><b>Umbrales de rentabilidad</b>: B(10) = 0 por el teorema del factor, y factorizando, B(x) = −(x − 10)(x − 50).</li><li><b>Signo</b>: el beneficio es positivo entre 10 y 50 mochilas y negativo fuera (lo estudiarás con inecuaciones).</li><li><b>Beneficio por unidad</b>: B(x)/x = −x + 60 − 500/x (fracción algebraica). Con 25 mochilas, −25 + 60 − 20 = 15 € por mochila.</li></ul><p>Además, la gráfica de B es una parábola con vértice en el punto medio de las raíces, x = 30, donde el beneficio es máximo: B(30) = 400 €. Al precio de 100 − 30 = 70 €, les conviene vender 30 mochilas al mes.</p><p>El mismo esquema sirve para un concierto, una cooperativa escolar o un servicio público: escribir el modelo, operar, factorizar e interpretar. El álgebra no da la decisión hecha, porque los modelos simplifican la realidad (suponen, por ejemplo, que la demanda es exactamente lineal), pero ordena el razonamiento y permite discutir con datos qué ocurre si cambian los costes o los precios.</p>`,
      svg: cadena("Proceso de análisis: modelo, operar, factorizar e interpretar el beneficio de la empresa", [["Modelo", "I(x), C(x)"], ["Operar", "B = I − C"], ["Factorizar", "−(x − 10)(x − 50)"], ["Decidir", "x = 30: 400 €"]], "rentable entre 10 y 50 unidades", "Del enunciado a la decisión"),
    },
  ],
  ejemplos: [
    ["Una academia cobra 120 − 2x euros a cada alumno si hay x alumnos y le cuesta 30x + 200 euros. Escribe su beneficio y calcúlalo para 15 alumnos.", ["I(x) = (120 − 2x)x = 120x − 2x².", "B(x) = 120x − 2x² − 30x − 200 = −2x² + 90x − 200.", "B(15) = −450 + 1.350 − 200."], "B(x) = −2x² + 90x − 200; con 15 alumnos, 700 €."],
    ["Desarrolla (1 + r)⁴ con el binomio de Newton y calcula 1,03⁴.", ["Fila 4 de Tartaglia: 1, 4, 6, 4, 1.", "(1 + r)⁴ = 1 + 4r + 6r² + 4r³ + r⁴.", "1 + 0,12 + 0,0054 + 0,000108 + 0,00000081."], "1,03⁴ = 1,12550881."],
    ["Divide (3x⁴ − 2x² + x − 5) : (x + 1) por Ruffini.", ["Coeficientes 3, 0, −2, 1, −5 (falta x³); a = −1.", "Bajamos 3; −3 → −3; 3 → 1; −1 → 0; 0 → −5.", "Cociente 3x³ − 3x² + x + 0; resto −5."], "Cociente 3x³ − 3x² + x; resto −5 (= P(−1))."],
    ["Halla k para que x³ − kx² + 3x − 6 sea divisible entre x − 2.", ["Por el teorema del factor, P(2) = 0.", "8 − 4k + 6 − 6 = 0 → 8 − 4k = 0."], "k = 2."],
    ["Factoriza P(x) = x⁴ − x³ − 7x² + x + 6.", ["Divisores de 6: probamos 1: 1 − 1 − 7 + 1 + 6 = 0. Cociente x³ − 7x − 6.", "Probamos −1: −1 + 7 − 6 = 0. Cociente x² − x − 6.", "x² − x − 6 = (x − 3)(x + 2)."], "P(x) = (x − 1)(x + 1)(x − 3)(x + 2)."],
    ["Simplifica (x³ − 4x)/(x² + x − 6).", ["Numerador: x(x − 2)(x + 2).", "Denominador: raíces 2 y −3 → (x − 2)(x + 3).", "Dividimos entre x − 2."], "x(x + 2)/(x + 3), con x ≠ 2 y x ≠ −3."],
  ],
  errores: [
    "Al restar polinomios, cambiar el signo solo del primer término del sustraendo.",
    "Escribir (a + b)² = a² + b², olvidando el doble producto 2ab.",
    "En Ruffini con divisor x + 3, usar a = 3 en vez de a = −3, o no poner 0 en los grados que faltan.",
    "Pensar que las raíces enteras pueden ser cualquier número: solo los divisores del término independiente.",
    "Simplificar sumandos en una fracción: (x + 3)/(x + 5) ≠ 3/5.",
    "Olvidar el coeficiente principal al factorizar: 2x² − 2 = 2(x − 1)(x + 1), no (x − 1)(x + 1).",
  ],
  ejercicios: {
    b: [
      ["Expresa algebraicamente: a) el triple de un número menos 5; b) el precio p con un 21 % de IVA; c) el coste de x cafés a 1,20 € más 3 € de propina.", "a) 3x − 5; b) 1,21p; c) 1,20x + 3."],
      ["Indica grado, coeficiente principal y término independiente de P(x) = 4 − 3x² + x⁵ − 2x.", "Ordenado: x⁵ − 3x² − 2x + 4. Grado 5; coeficiente principal 1; término independiente 4."],
      ["Calcula P(−2) para P(x) = 2x³ − x² + 5.", "2(−8) − 4 + 5 = −16 − 4 + 5 = −15."],
      ["Con P(x) = 3x² − 2x + 1 y Q(x) = x² + 4x − 3, calcula P + Q y P − Q.", "P + Q = 4x² + 2x − 2. P − Q = 2x² − 6x + 4."],
      ["Multiplica (x − 2)(x² + 2x + 4).", "x³ + 2x² + 4x − 2x² − 4x − 8 = x³ − 8."],
      ["Desarrolla: a) (2x + 3)²; b) (x − 5)²; c) (3x − 1)(3x + 1).", "a) 4x² + 12x + 9; b) x² − 10x + 25; c) 9x² − 1."],
      ["Divide por Ruffini (x³ − 2x² − 5x + 6) : (x − 3).", "Coeficientes 1, −2, −5, 6; a = 3: 1; 1; −2; 0. Cociente x² + x − 2; resto 0."],
      ["Calcula sin dividir el resto de (x⁴ − 3x + 2) : (x + 1).", "P(−1) = 1 + 3 + 2 = 6."],
      ["Factoriza: a) 5x² − 20; b) x² + 8x + 16; c) x³ − x.", "a) 5(x − 2)(x + 2); b) (x + 4)²; c) x(x − 1)(x + 1)."],
      ["Simplifica (x² − 25)/(x² − 5x).", "(x − 5)(x + 5)/[x(x − 5)] = (x + 5)/x, con x ≠ 0 y x ≠ 5."],
    ],
    m: [
      ["Una empresa tiene costes fijos de 2.400 € y un coste variable de 15 € por unidad, y vende cada unidad a 35 €. Escribe C(x), I(x) y B(x) y calcula el umbral de rentabilidad.", "C(x) = 15x + 2.400; I(x) = 35x; B(x) = 20x − 2.400. B(x) = 0 para x = 120 unidades."],
      ["Calcula (x² − 3x + 2)(2x² + x − 1).", "2x⁴ + x³ − x² − 6x³ − 3x² + 3x + 4x² + 2x − 2 = 2x⁴ − 5x³ + 0x² + 5x − 2 = 2x⁴ − 5x³ + 5x − 2."],
      ["Desarrolla (x − 2)⁵ con el binomio de Newton.", "Fila 5: 1, 5, 10, 10, 5, 1. x⁵ − 10x⁴ + 40x³ − 80x² + 80x − 32."],
      ["Divide (4x³ − 2x² + 3) : (2x² + 1) e indica cociente y resto.", "4x³ : 2x² = 2x → resta 4x³ + 2x: queda −2x² − 2x + 3. −2x² : 2x² = −1 → resta −2x² − 1: queda −2x + 4. Cociente 2x − 1; resto −2x + 4."],
      ["Halla m para que el resto de (2x³ + mx² − 4) : (x − 2) sea 8.", "P(2) = 16 + 4m − 4 = 8 → 4m = −4 → m = −1."],
      ["Comprueba que x = −3 es raíz de x³ + 2x² − 5x − 6 y factoriza el polinomio.", "P(−3) = −27 + 18 + 15 − 6 = 0. Ruffini con −3: 1, −1, −2, 0 → cociente x² − x − 2 = (x − 2)(x + 1). P(x) = (x + 3)(x − 2)(x + 1)."],
      ["Factoriza x⁴ − 13x² + 36.", "Es bicuadrado: con t = x², t² − 13t + 36 = (t − 4)(t − 9). Luego (x² − 4)(x² − 9) = (x − 2)(x + 2)(x − 3)(x + 3)."],
      ["Calcula m.c.d. y m.c.m. de P = x³ − 4x y Q = x² − 4x + 4.", "P = x(x − 2)(x + 2); Q = (x − 2)². m.c.d. = x − 2. m.c.m. = x(x + 2)(x − 2)²."],
      ["Calcula y simplifica: 3/(x − 2) − 1/x − 6/(x² − 2x).", "Común denominador x(x − 2): [3x − (x − 2) − 6]/[x(x − 2)] = (2x − 4)/[x(x − 2)] = 2(x − 2)/[x(x − 2)] = 2/x."],
      ["Calcula [(x² − 1)/(x + 3)] : [(x − 1)/(x² + 3x)].", "= (x² − 1)(x² + 3x)/[(x + 3)(x − 1)] = (x − 1)(x + 1)x(x + 3)/[(x + 3)(x − 1)] = x(x + 1)."],
      ["El coste de producir x toneladas es C(x) = 2x² + 30x + 800. Escribe el coste medio y calcúlalo para 10 y 20 toneladas.", "CMe(x) = 2x + 30 + 800/x. CMe(10) = 20 + 30 + 80 = 130 €/t; CMe(20) = 40 + 30 + 40 = 110 €/t."],
      ["Un viaje de fin de curso cuesta 3.600 € de autobús, a repartir entre x alumnos, más 85 € de alojamiento por alumno. Escribe el coste por alumno como una sola fracción y calcúlalo para 40 alumnos.", "3.600/x + 85 = (85x + 3.600)/x. Para 40: 90 + 85 = 175 €."],
    ],
    a: [
      ["El beneficio de un festival es B(x) = −x³ + 21x² − 80x − 300 (miles de euros), con x en miles de entradas. Comprueba que x = 10 es un umbral de rentabilidad y halla el otro (x &gt; 0).", "B(10) = −1.000 + 2.100 − 800 − 300 = 0. Ruffini con 10: −1, 11, 30, 0 → cociente −x² + 11x + 30 = −(x² − 11x − 30). Raíces: x = (11 ± √(121 + 120))/2 = (11 ± 15,52)/2 → 13,26 o −2,26. Otro umbral ≈ 13.260 entradas; la raíz negativa no tiene sentido."],
      ["Halla a y b para que P(x) = x³ + ax² + bx − 6 sea divisible entre x − 1 y entre x + 2.", "P(1) = 1 + a + b − 6 = 0 → a + b = 5. P(−2) = −8 + 4a − 2b − 6 = 0 → 4a − 2b = 14 → 2a − b = 7. Sumando: 3a = 12 → a = 4, b = 1. P(x) = x³ + 4x² + x − 6 = (x − 1)(x + 2)(x + 3)."],
      ["Demuestra que (1 + r)ⁿ ≥ 1 + nr para r &gt; 0 y n natural, y explica qué significa en términos de interés simple y compuesto.", "Por el binomio, (1 + r)ⁿ = 1 + nr + C(n,2)r² + … y todos los términos añadidos son positivos, luego (1 + r)ⁿ ≥ 1 + nr. Significa que, con el mismo tipo, el capital compuesto C₀(1 + r)ⁿ nunca es menor que el simple C₀(1 + nr)."],
      ["Factoriza completamente 2x⁴ − 2x³ − 14x² + 2x + 12.", "Factor común 2: 2(x⁴ − x³ − 7x² + x + 6). Del ejemplo resuelto: 2(x − 1)(x + 1)(x − 3)(x + 2)."],
      ["Simplifica [x/(x − 1) − 1/(x + 1)] · (x² − 1)/(x² + 1).", "Paréntesis: [x(x + 1) − (x − 1)]/(x² − 1) = (x² + 1)/(x² − 1). Multiplicando por (x² − 1)/(x² + 1) se obtiene 1 (para x ≠ ±1)."],
      ["Una cooperativa escolar vende camisetas. Si cobra 20 − 0,05x euros por camiseta vende x, y cada una le cuesta 6 € más 210 € de diseño. Escribe el beneficio, factorízalo y di entre qué cantidades hay ganancias.", "B(x) = (20 − 0,05x)x − 6x − 210 = −0,05x² + 14x − 210 = −0,05(x² − 280x + 4.200). Raíces: x = (280 ± √(78.400 − 16.800))/2 = (280 ± 248,2)/2 → 15,9 y 264,1. B(x) = −0,05(x − 15,9)(x − 264,1): hay ganancias entre 16 y 264 camisetas."],
      ["Con C(x) = x² + 10x + 400, comprueba que el coste medio en x = 20 es menor que en x = 19 y en x = 21. ¿Qué sugiere?", "CMe(x) = x + 10 + 400/x. CMe(19) = 29 + 21,05 = 50,05; CMe(20) = 30 + 20 = 50; CMe(21) = 31 + 19,05 = 50,05. Sugiere que el coste medio mínimo está en x = 20 (se demostrará con derivadas)."],
      ["Halla un polinomio de grado 3 con raíces 1, 2 y −4 tal que P(0) = 16.", "P(x) = a(x − 1)(x − 2)(x + 4). P(0) = a(−1)(−2)(4) = 8a = 16 → a = 2. P(x) = 2(x − 1)(x − 2)(x + 4) = 2x³ + 2x² − 20x + 16."],
    ],
  },
  quiz: [
    ["El grado de 3x² − x⁴ + 7 es…", ["4", "2", "3", "7"], "Mayor exponente."],
    ["Si C(x) = 25x + 300, el coste fijo es…", ["300", "25", "325", "25x"], "No depende de x."],
    ["P(x) = x² − 3x; P(−1) =", ["4", "−2", "2", "−4"], "1 + 3."],
    ["(x + 4)² =", ["x² + 8x + 16", "x² + 16", "x² + 4x + 16", "x² + 8x + 8"], "Doble producto 8x."],
    ["(2x − 5)(2x + 5) =", ["4x² − 25", "4x² + 25", "4x² − 20x − 25", "2x² − 25"], "Suma por diferencia."],
    ["Los coeficientes de (a + b)³ son…", ["1, 3, 3, 1", "1, 2, 1", "1, 3, 1", "1, 4, 6, 4, 1"], "Fila 3 de Tartaglia."],
    ["En la división, se cumple…", ["D = d · c + r", "D = d · r + c", "d = D · c + r", "D = c + r"], "Prueba de la división."],
    ["Para dividir entre x + 2 por Ruffini se usa a =", ["−2", "2", "1/2", "0"], "x + 2 = x − (−2)."],
    ["El resto de (x³ − 1) : (x − 1) es…", ["0", "1", "−2", "2"], "P(1) = 0."],
    ["Si P(3) = 0, entonces…", ["x − 3 es factor de P", "x + 3 es factor de P", "P no tiene raíces", "3 es el término independiente"], "Teorema del factor."],
    ["Las posibles raíces enteras de x³ + 2x − 6 son divisores de…", ["6", "2", "1", "3"], "Término independiente."],
    ["Un polinomio de grado 4 tiene como mucho…", ["4 raíces reales", "3 raíces", "8 raíces", "infinitas raíces"], "Tantas como el grado."],
    ["x² − 10x + 25 se factoriza como…", ["(x − 5)²", "(x + 5)²", "(x − 5)(x + 5)", "(x − 25)(x − 1)"], "Cuadrado de una diferencia."],
    ["3x² − 12 factorizado es…", ["3(x − 2)(x + 2)", "(3x − 2)(x + 6)", "3(x − 4)", "(x − 2)(x + 2)"], "Factor común y suma por diferencia."],
    ["El m.c.d. de (x − 1)²(x + 2) y (x − 1)(x + 2)² es…", ["(x − 1)(x + 2)", "(x − 1)²(x + 2)²", "x − 1", "1"], "Comunes, menor exponente."],
    ["(x² − x)/x simplificado es…", ["x − 1", "x² − 1", "−x", "x"], "x(x − 1)/x."],
    ["La fracción (x + 1)/(x − 4) no está definida para…", ["x = 4", "x = −1", "x = 0", "x = 1"], "Anula el denominador."],
    ["1/x + 1/(x + 1) =", ["(2x + 1)/(x² + x)", "2/(2x + 1)", "2/(x² + x)", "1/(2x + 1)"], "Común denominador x(x + 1)."],
    ["El coste medio de C(x) = 10x + 200 es…", ["10 + 200/x", "10x + 200/x", "10", "210/x"], "C(x)/x."],
    ["Si B(x) = −(x − 20)(x − 80), hay beneficios para…", ["20 &lt; x &lt; 80", "x &lt; 20", "x &gt; 80", "ningún x"], "Entre las raíces."],
  ],
  examen: [
    ["El resto de dividir x⁴ − 2x³ + x − 3 entre x − 2 es…", ["−1", "3", "−3", "1"], "16 − 16 + 2 − 3."],
    ["El valor de k para que x² + kx − 8 sea divisible entre x − 2 es…", ["2", "−2", "4", "−4"], "4 + 2k − 8 = 0."],
    ["x³ − 7x + 6 factorizado es…", ["(x − 1)(x − 2)(x + 3)", "(x + 1)(x + 2)(x − 3)", "(x − 1)(x + 2)(x − 3)", "(x − 6)(x² + 1)"], "Raíces 1, 2 y −3."],
    ["El m.c.m. de x² − 9 y x² + 3x es…", ["x(x − 3)(x + 3)", "x + 3", "(x² − 9)(x² + 3x)", "x(x + 3)²"], "(x − 3)(x + 3) y x(x + 3)."],
    ["(x² − 6x + 9)/(x² − 9) simplificado es…", ["(x − 3)/(x + 3)", "(x + 3)/(x − 3)", "−6x", "1"], "(x − 3)²/[(x − 3)(x + 3)]."],
    ["2/(x − 3) − 1/(x + 3) =", ["(x + 9)/(x² − 9)", "1/(x² − 9)", "(x − 9)/(x² − 9)", "1/6"], "2(x + 3) − (x − 3)."],
    ["Con costes C(x) = 12x + 900 y precio 30 €, el umbral de rentabilidad es…", ["50 unidades", "30 unidades", "75 unidades", "900 unidades"], "18x = 900."],
    ["1,01⁵ con dos términos del binomio vale aproximadamente…", ["1,05", "1,01", "1,10", "1,5"], "1 + 5 · 0,01."],
  ],
  feynman: ["Cómo se pasa de un enunciado económico a los polinomios de ingresos, costes y beneficio", "Por qué el resto de dividir entre x − a es P(a)", "Qué relación hay entre las raíces del beneficio y los umbrales de rentabilidad", "Por qué solo se pueden simplificar factores en una fracción algebraica", "Por qué el coste medio baja al producir más cuando hay costes fijos"],
  glosario: [
    ["Expresión algebraica", "Combinación de números y letras mediante operaciones."],
    ["Polinomio", "Suma de monomios; en una variable, aₙxⁿ + … + a₁x + a₀."],
    ["Grado", "Mayor exponente de la variable con coeficiente no nulo."],
    ["Valor numérico", "Número que se obtiene al sustituir la variable por un valor concreto."],
    ["Coste fijo", "Parte del coste que no depende de la cantidad producida."],
    ["Coste variable", "Parte del coste que depende de la cantidad producida."],
    ["Identidad notable", "Igualdad algebraica de uso frecuente, como (a + b)² = a² + 2ab + b²."],
    ["Binomio de Newton", "Fórmula para desarrollar (a + b)ⁿ con los números combinatorios."],
    ["Regla de Ruffini", "Procedimiento abreviado para dividir un polinomio entre x − a."],
    ["Teorema del resto", "El resto de dividir P(x) entre x − a es P(a)."],
    ["Raíz", "Valor a que anula el polinomio: P(a) = 0."],
    ["Umbral de rentabilidad", "Cantidad para la que el beneficio es cero (punto muerto)."],
    ["Factorizar", "Escribir un polinomio como producto de factores del menor grado posible."],
    ["Polinomio irreducible", "El que no se puede descomponer en factores de menor grado con coeficientes reales."],
    ["Fracción algebraica", "Cociente de dos polinomios con denominador no nulo."],
    ["Coste medio", "Coste por unidad producida: CMe(x) = C(x)/x."],
  ],
  situacion: {
    titulo: "El plan de negocio de la cooperativa",
    reto: "La cooperativa escolar quiere vender un producto propio (tazas, bolsas, agendas) en la feria del centro. Vuestro grupo elaborará el modelo algebraico de costes, ingresos y beneficios y decidirá precio y cantidad con argumentos matemáticos.",
    pasos: [
      "Investigad los costes reales: fijos (diseño, puesto, publicidad) y variables (material por unidad).",
      "Haced una pequeña encuesta para estimar cuántas unidades se venderían a tres precios distintos y ajustad una demanda lineal p = a − bx.",
      "Escribid los polinomios C(x), I(x) y B(x) y el coste medio CMe(x).",
      "Factorizad el beneficio para hallar los umbrales de rentabilidad y calculad el beneficio en varios casos con una hoja de cálculo.",
      "Proponed el precio y la cantidad a fabricar y presentad el plan a la cooperativa.",
    ],
    producto: "Un plan de negocio de una página con el modelo algebraico, la tabla de valores, los umbrales de rentabilidad y la propuesta razonada.",
    evaluacion: [
      "Construye correctamente los polinomios de costes, ingresos y beneficio.",
      "Factoriza e interpreta las raíces como umbrales de rentabilidad.",
      "Usa el coste medio para argumentar sobre la escala de producción.",
      "Justifica la decisión y reconoce las limitaciones del modelo.",
    ],
  },
  figura: ["Polinomios de un vistazo", "Resumen de operaciones, división, raíces y fracciones algebraicas", [
    ["Modelos", ["C(x) = CF + CV·x", "I(x) = p · x", "B(x) = I − C", "valor numérico P(a)"]],
    ["Operar", ["(a ± b)² · (a + b)(a − b)", "Tartaglia: 1 3 3 1", "D = d · c + r", "Ruffini: x − a"]],
    ["Raíces", ["resto = P(a)", "P(a) = 0 ⇔ (x − a) factor", "divisores de a₀", "umbral: B(x) = 0"]],
    ["Fracciones", ["simplificar factores", "m.c.m. para sumar", "CMe = C(x)/x", "x ≠ raíces del denom."]],
  ]],
  video: { id: "63y_SGwAoV4", titulo: "División de polinomios: Horner, Ruffini y teorema del resto", canal: "Álgebra con LALO", vistas: 494556, busqueda: "división de polinomios Ruffini teorema del resto" },
  mapa: ["POLINOMIOS", [
    ["Modelos", "costes · ingresos · beneficio"],
    ["Operaciones", "identidades · Newton · división"],
    ["Raíces", "Ruffini · resto · factorización"],
    ["Fracciones", "simplificar · operar · coste medio"],
  ]],
  tarjetas: [
    ["Beneficio", "B(x) = I(x) − C(x)"],
    ["Valor numérico P(a)", "Sustituir x por a."],
    ["(a − b)²", "a² − 2ab + b²"],
    ["(a + b)(a − b)", "a² − b²"],
    ["(1 + r)³", "1 + 3r + 3r² + r³"],
    ["Prueba de la división", "D = d · c + r, grado r &lt; grado d"],
    ["Teorema del resto", "Resto de P(x) : (x − a) = P(a)"],
    ["Teorema del factor", "P(a) = 0 ⇔ x − a divide a P(x)"],
    ["Raíces enteras posibles", "Divisores del término independiente."],
    ["ax² + bx + c factorizado", "a(x − r₁)(x − r₂)"],
    ["m.c.d. y m.c.m.", "Comunes al menor exponente · todos al mayor."],
    ["Coste medio", "CMe(x) = C(x)/x"],
  ],
  familias: ["Pensad en un pequeño negocio (un puesto de limonada, una venta de pasteles) y escribid juntos sus costes fijos y variables.", "Calculad el coste medio de una suscripción familiar a una plataforma según cuántas personas la usan.", "Jugad a calcular mentalmente con identidades notables: 49 · 51, 99², 102².", "Repasad las tarjetas del paso 6 dos minutos al día."],
  saberes: "Sentido algebraico: expresiones algebraicas y modelos de costes, ingresos y beneficios; operaciones con polinomios, identidades notables y binomio de Newton; división, regla de Ruffini, teoremas del resto y del factor; factorización, m.c.d. y m.c.m.; fracciones algebraicas y su aplicación al coste medio (RD 243/2022, Matemáticas Aplicadas a las Ciencias Sociales I, saberes básicos D. Sentido algebraico; Decret 171/2022, Matemàtiques aplicades a les ciències socials I, sentit algebraic).",
  ideas: ["Plan de negocio de la cooperativa del centro con polinomios de beneficio.", "Hoja de cálculo con tablas de valores de C(x), I(x), B(x) y CMe(x).", "Puzle de factorizaciones por parejas.", "GeoGebra: deslizadores para ver cómo cambian los umbrales al variar el coste fijo."],
  fuentes: [wiki("Polinomio", "Polinomio"), wiki("Regla de Ruffini", "Regla de Ruffini"), wiki("Punto muerto (economía)", "Punto muerto (economía)")],
});
