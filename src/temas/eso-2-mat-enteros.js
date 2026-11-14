// Matemáticas 2º ESO · Números enteros. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, recta, comparar, formula, resumen, flujo, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const situaciones = cajas("Situaciones de la vida real que se expresan con números enteros", [
  ["Temperatura", ["−5 °C bajo cero", "+22 °C"], "var(--inf)"],
  ["Altitud", ["−30 m bajo el mar", "+3718 m el Teide"], "var(--leaf)"],
  ["Dinero", ["−50 € deuda", "+120 € ingreso"], "var(--sun)"],
  ["Plantas", ["sótano −2", "planta +4"], "var(--red)"],
], "¿Dónde hay enteros?");

const sumaRecta = recta("Sumar en la recta: desde −3 se avanzan 5 lugares hacia la derecha y se llega a 2", {
  r: [-5, 5], marcas: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((v) => [v, v < 0 ? "−" + -v : String(v)]), titulo: "(−3) + (+5) = +2",
  tramos: [{ de: -3, a: 2, c: "var(--leaf)", t: "+5" }], puntos: [{ x: -3, t: "", c: "var(--pen)" }, { x: 2, t: "", c: "var(--red)" }],
});

const reglasSuma = comparar("Reglas para sumar dos enteros según sus signos", [
  ["Mismo signo", ["se suman los", "valores absolutos", "y se pone ese signo", "(−4) + (−6) = −10"], "var(--pen)"],
  ["Distinto signo", ["se restan los", "valores absolutos", "y se pone el del mayor", "(−9) + (+4) = −5"], "var(--red)"],
], "Sumar enteros");

const restar = formula("Restar un entero es sumar su opuesto", "a − b = a + (−b)", ["Ejemplos", "5 − (−3) = 5 + 3 = 8", "−2 − 7 = −2 + (−7) = −9"], "var(--red)");

const parentesis = pasos("Quitar paréntesis: un signo menos delante cambia el signo de todos los términos de dentro", ["7 − (3 − 5 + 2)", "Cambian los signos: 7 − 3 + 5 − 2", "Positivos: 7 + 5 = 12", "Negativos: −3 − 2 = −5", "12 − 5 = 7"], "Quitar paréntesis");

const signos = lienzo("Regla de los signos para multiplicar y dividir enteros", `
  ${[["+", "+", "+"], ["−", "−", "+"], ["+", "−", "−"], ["−", "+", "−"]].map(([a, b, r], i) => `<rect x="40" y="${22 + i * 34}" width="180" height="28" rx="8" fill="var(--card)" stroke="${r === "+" ? "var(--leaf)" : "var(--red)"}" stroke-width="2"/>${tx(80, 42 + i * 34, `(${a}) · (${b})`, { fs: 15, fam: D, max: 80 })}${tx(140, 42 + i * 34, "=", { fs: 15 })}${tx(180, 42 + i * 34, `(${r})`, { fs: 15, fam: D, c: r === "+" ? "var(--leaf)" : "var(--red)", max: 60 })}`).join("")}
  ${tx(130, 170, "Igual signo: + · Distinto signo: −", { fs: 12, c: "var(--muted)" })}`, 182);

const potencias = comparar("Potencias de base negativa: exponente par da positivo, impar da negativo", [
  ["Exponente par", ["(−2)⁴ = +16", "(−3)² = +9", "(−1)¹⁰⁰ = 1"], "var(--leaf)"],
  ["Exponente impar", ["(−2)³ = −8", "(−5)¹ = −5", "(−1)⁹⁹ = −1"], "var(--red)"],
], "Potencias con base negativa");

const cuidado = comparar("No es lo mismo menos dos al cuadrado que menos dos entre paréntesis al cuadrado", [
  ["(−2)²", ["la base es −2", "(−2)·(−2)", "= +4"], "var(--leaf)"],
  ["−2²", ["la base es 2", "−(2·2)", "= −4"], "var(--red)"],
], "¡Cuidado con el paréntesis!");

const raiz = formula("Raíz cuadrada de un entero: los positivos tienen dos raíces y los negativos ninguna", "√49 = ±7", ["Porque 7² = 49 y (−7)² = 49", "√−49 no existe en los enteros", "√0 = 0"], "var(--inf)");

const divisibles = cajas("Divisores y múltiplos con números enteros", [
  ["Divisores de 6", ["±1, ±2, ±3, ±6"], "var(--pen)"],
  ["Múltiplos de 4", ["…, −8, −4, 0,", "4, 8, …"], "var(--leaf)"],
  ["Opuesto de −7", ["+7"], "var(--sun)"],
  ["|−7|", ["7"], "var(--red)"],
], "Más propiedades");

const problemas = lienzo("Termómetro: la temperatura pasa de menos seis a más nueve grados, una variación de quince", `
  <rect x="60" y="20" width="22" height="130" rx="11" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="71" cy="156" r="14" fill="var(--red)"/>
  <rect x="66" y="52" width="10" height="104" fill="var(--red)" opacity=".7"/>
  ${[10, 5, 0, -5, -10].map((v, i) => `<path d="M82 ${40 + i * 25} H92" stroke="var(--ink)"/>${tx(97, 44 + i * 25, v > 0 ? "+" + v : v < 0 ? "−" + -v : "0", { fs: 10.5, a: "start", c: "var(--muted)", max: 30 })}`).join("")}
  ${tx(185, 50, "máx: +9 °C", { fs: 13, c: "var(--red)", max: 120 })}${tx(185, 120, "mín: −6 °C", { fs: 13, c: "var(--inf)", max: 120 })}
  ${tx(185, 84, "9 − (−6) = 15", { fs: 15, fam: D, max: 130 })}${tx(185, 158, "variación = final − inicial", { fs: 10.5, c: "var(--muted)", max: 130 })}`, 180);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Números enteros",
  minutos: 100,
  objetivos: [
    "Reconocer situaciones que se expresan con números enteros y representarlos en la recta",
    "Comparar y ordenar enteros usando el valor absoluto y el opuesto",
    "Sumar, restar, multiplicar y dividir enteros y quitar paréntesis",
    "Aplicar la jerarquía de las operaciones en expresiones combinadas",
    "Calcular potencias y raíces cuadradas de enteros y resolver problemas",
  ],
  claves: ["número entero", "valor absoluto", "opuesto", "regla de los signos", "jerarquía", "potencia de base negativa"],
  pregunta: {
    texto: "Un submarino está a 120 m de profundidad y un helicóptero vuela 250 m por encima de él. ¿A qué altura vuela el helicóptero?",
    respuesta: "La posición del submarino es −120 m. Sumamos 250: −120 + 250 = <mark>+130 m</mark>. El helicóptero vuela a 130 m sobre el nivel del mar.",
  },
  lectura: {
    titulo: "Los números de las deudas",
    html: `<p>Durante siglos, muchos matemáticos europeos desconfiaron de los <b>números negativos</b>. ¿Cómo va a haber algo «menor que nada»? Algunos los llamaban «números absurdos» o «ficticios». Sin embargo, en China, hace más de 2000 años, el libro <i>Los nueve capítulos del arte matemático</i> ya usaba varillas rojas para las cantidades positivas y negras para las negativas, y en la India del siglo VII el matemático Brahmagupta escribió las reglas para operar con «fortunas» y «deudas»: una deuda menos una fortuna es una deuda; el producto de dos deudas es una fortuna.</p><p>Hoy los negativos nos parecen naturales: el termómetro marca −4 °C en una mañana de invierno, el ascensor baja al sótano −2, el banco muestra un saldo de −35 € y el mar Muerto está a unos 430 metros por debajo del nivel del mar. Todos estos valores, junto con los positivos y el cero, forman el conjunto de los <b>números enteros</b>.</p><p>En este tema aprenderás a ordenarlos, a operar con ellos sin liarte con los signos y a usarlos para resolver problemas de temperaturas, alturas, dinero o fechas históricas.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué son los números enteros?</h3><p>Los <b>números enteros</b> son los naturales positivos (+1, +2, +3…), sus <b>opuestos</b> negativos (−1, −2, −3…) y el <b>cero</b>. El conjunto se representa con la letra <mark>ℤ</mark>, del alemán <i>Zahlen</i> («números»).</p><p>Los enteros sirven para expresar cantidades que tienen un <b>sentido</b> respecto a un punto de referencia, que es el cero:</p><ul><li>Temperaturas sobre cero y bajo cero.</li><li>Alturas sobre el nivel del mar y profundidades.</li><li>Ganancias e ingresos frente a pérdidas y deudas.</li><li>Años después y antes de Cristo.</li><li>Plantas de un edificio y sótanos.</li></ul><p>El signo + de los positivos se puede omitir: +5 y 5 son lo mismo. El cero no es ni positivo ni negativo.</p>`, svg: situaciones },
    { html: `<h3>1.2 La recta numérica y el orden</h3><p>Los enteros se representan en una <b>recta</b>: se marca el 0, a su derecha los positivos y a su izquierda los negativos, todos a la misma distancia. En la recta, <mark>un número es mayor cuanto más a la derecha está</mark>.</p><p>De ahí salen tres reglas para comparar:</p><ul><li>Cualquier positivo es mayor que el 0 y que cualquier negativo: +1 &gt; −100.</li><li>Entre dos positivos, es mayor el de mayor valor absoluto: +8 &gt; +3.</li><li>Entre dos negativos, es mayor el que está más cerca del cero, es decir, el de <b>menor</b> valor absoluto: −3 &gt; −8.</li></ul><p>La última regla tiene sentido: −3 °C es una temperatura más alta que −8 °C, y deber 3 € es mejor que deber 8 €. Para ordenar varios enteros, colócalos mentalmente en la recta y léelos de izquierda a derecha.</p>`, svg: psvg("enteros", 1) },
    { html: `<h3>1.3 Valor absoluto y opuesto</h3><p>El <b>valor absoluto</b> de un entero es la distancia que lo separa del cero. Se escribe entre barras y siempre es positivo o cero: |−7| = 7, |+7| = 7, |0| = 0. En la práctica, es «el número sin el signo».</p><p>El <b>opuesto</b> de un entero es el que está a la misma distancia del cero pero al otro lado: op(+5) = −5 y op(−5) = +5. Se escribe poniendo un signo menos delante: −(−5) = +5. Un número y su opuesto tienen el mismo valor absoluto y su suma es <mark>cero</mark>.</p><p>Estas dos ideas son la base de todas las operaciones: para sumar enteros comparamos valores absolutos, y restar consiste en sumar el opuesto. Recuerda que el opuesto del 0 es el propio 0.</p>`, svg: psvg("enteros", 2) },
    { html: `<h3>2.1 Sumar enteros</h3><p>Sumar un número positivo es avanzar hacia la derecha en la recta, y sumar uno negativo, retroceder hacia la izquierda. Así, (−3) + (+5): desde −3 avanzo 5 y llego a +2.</p><p>Para no tener que dibujar siempre la recta, se usan dos reglas:</p><ul><li><b>Mismo signo</b>: se suman los valores absolutos y se pone el signo común. (−4) + (−6) = −10. Dos deudas forman una deuda mayor.</li><li><b>Distinto signo</b>: se restan los valores absolutos (el mayor menos el menor) y se pone el signo del que tiene mayor valor absoluto. (−9) + (+4) = −5.</li></ul><p>La suma de enteros cumple las propiedades <b>conmutativa</b> y <b>asociativa</b>, el <b>0</b> es el elemento neutro y cada número tiene un opuesto que suma 0. Con varios sumandos, lo más cómodo es agrupar positivos por un lado y negativos por otro: 8 − 3 + 5 − 7 = 13 − 10 = 3.</p>`, svg: sumaRecta, video: pvid("enteros", 3) },
    { html: `<h3>2.2 Las reglas de la suma, paso a paso</h3><p>Veamos cómo aplicar las reglas con calma, porque es donde más se falla:</p><ol><li>Mira los <b>signos</b> de los dos números.</li><li>Si coinciden, suma los valores absolutos: (+12) + (+7) = +19; (−12) + (−7) = −19.</li><li>Si son distintos, resta el menor valor absoluto del mayor: en (+12) + (−7), 12 − 7 = 5.</li><li>Pon el signo del número con <b>mayor valor absoluto</b>: como 12 &gt; 7 y el 12 era positivo, el resultado es +5. En (−12) + (+7) el resultado sería −5.</li></ol><p>Una buena forma de comprobarlo es pensar en dinero: «tengo 7 € y debo 12 €; si pago, sigo debiendo 5 €». Si la situación es de temperaturas: «hace −12 °C y sube 7 grados: −5 °C».</p>`, svg: reglasSuma },
    { html: `<h3>2.3 Restar enteros</h3><p>Restar un entero es lo mismo que <b>sumar su opuesto</b>: <mark>a − b = a + (−b)</mark>. Así, toda resta se convierte en una suma y se aplican las reglas anteriores.</p><ul><li>5 − (+3) = 5 + (−3) = 2.</li><li>5 − (−3) = 5 + (+3) = 8. Quitar una deuda equivale a ganar dinero.</li><li>−2 − 7 = −2 + (−7) = −9.</li></ul><p>La resta sirve para calcular <b>variaciones</b> y <b>distancias</b>: la variación es el valor final menos el inicial. Si por la mañana hay −6 °C y por la tarde +9 °C, la temperatura ha subido 9 − (−6) = 15 grados.</p><p>A diferencia de la suma, la resta <b>no</b> es conmutativa: 5 − 3 = 2, pero 3 − 5 = −2. Al cambiar el orden, el resultado cambia de signo.</p>`, svg: restar },
    { html: `<h3>2.4 Quitar paréntesis</h3><p>En expresiones con paréntesis hay dos caminos: operar primero dentro del paréntesis o <b>quitarlo</b>. Para quitarlo se aplica esta regla:</p><ul><li>Si delante del paréntesis hay un signo <b>+</b>, se quita y los términos de dentro conservan su signo: 4 + (−3 + 5) = 4 − 3 + 5 = 6.</li><li>Si delante hay un signo <b>−</b>, se quita y <b>todos</b> los términos de dentro cambian de signo: 7 − (3 − 5 + 2) = 7 − 3 + 5 − 2 = 7.</li></ul><p>Con corchetes y paréntesis anidados se empieza por los de dentro: 10 − [4 − (6 − 9)] = 10 − [4 − (−3)] = 10 − 7 = 3. Otra forma: 10 − [4 − 6 + 9] = 10 − 4 + 6 − 9 = 3.</p><p>Este procedimiento es exactamente el mismo que usarás en álgebra para simplificar expresiones como 5x − (2x − 3).</p>`, svg: parentesis },
    { html: `<h3>3.1 Multiplicar y dividir enteros</h3><p>Para <b>multiplicar</b> o <b>dividir</b> dos enteros se multiplican o dividen sus valores absolutos y se aplica la <b>regla de los signos</b>:</p><ul><li>Signos <b>iguales</b> → resultado <b>positivo</b>: (+4) · (+3) = +12; (−4) · (−3) = +12.</li><li>Signos <b>distintos</b> → resultado <b>negativo</b>: (+4) · (−3) = −12; (−12) : (+3) = −4.</li></ul><p>¿Por qué «menos por menos es más»? Observa la serie: (−4) · 2 = −8, (−4) · 1 = −4, (−4) · 0 = 0. Cada vez que el segundo factor baja 1, el resultado sube 4. Si seguimos: (−4) · (−1) = +4, (−4) · (−2) = +8. La regla mantiene el patrón.</p><p>Con varios factores, cuenta los negativos: si hay un número <b>par</b> de factores negativos, el resultado es positivo; si es <b>impar</b>, negativo. (−1) · (−2) · (−3) = −6.</p>`, svg: signos, video: pvid("enteros", 5) },
    { html: `<h3>3.2 Jerarquía de las operaciones</h3><p>En una expresión con varias operaciones, el orden es:</p><ol><li><b>Paréntesis</b> y corchetes, de dentro hacia fuera.</li><li><b>Potencias</b> y raíces.</li><li><b>Multiplicaciones y divisiones</b>, de izquierda a derecha.</li><li><b>Sumas y restas</b>, de izquierda a derecha.</li></ol><p>Ejemplo: −3 + 4 · (−2) − 12 : (−3). Primero productos y cocientes: 4 · (−2) = −8 y 12 : (−3) = −4. Queda −3 − 8 − (−4) = −3 − 8 + 4 = <mark>−7</mark>.</p><p>Un error típico es hacer las operaciones en el orden en que aparecen. En 6 − 2 · 3 el resultado es 0, no 12. Otro error es olvidar que un signo menos delante de un producto afecta al resultado entero: 5 − 2 · (−4) = 5 − (−8) = 13.</p>`, svg: psvg("enteros", 6) },
    { html: `<h3>3.3 Potencias de base entera</h3><p>Una <b>potencia</b> aⁿ es un producto de n factores iguales a a. Si la base es negativa, el signo del resultado depende del <b>exponente</b>:</p><ul><li>Exponente <b>par</b> → resultado <b>positivo</b>: (−2)⁴ = 16.</li><li>Exponente <b>impar</b> → resultado <b>negativo</b>: (−2)³ = −8.</li></ul><p>Hay que vigilar los <b>paréntesis</b>. En (−2)² la base es −2 y el resultado es +4. En −2² la base es solo 2, y el signo menos va delante del resultado: −2² = −4. La calculadora y el álgebra siguen esta convención.</p><p>Las propiedades de las potencias se mantienen: (−3)² · (−3)³ = (−3)⁵ = −243; (−6)⁴ : (−6)² = (−6)² = 36. Y cualquier entero distinto de cero elevado a 0 da 1: (−5)⁰ = 1.</p>`, svg: potencias },
    { html: `<h3>3.4 El signo menos y los paréntesis en las potencias</h3><p>Este apartado merece atención especial, porque es uno de los errores más frecuentes en todo el curso. Compara:</p><ul><li>(−3)² = (−3) · (−3) = +9.</li><li>−3² = −(3 · 3) = −9.</li><li>(−3)³ = −27 y −3³ = −27: aquí coinciden porque el exponente es impar.</li></ul><p>En una expresión como −2² + (−2)² − (−2)³, se calcula cada potencia por separado: −4 + 4 − (−8) = −4 + 4 + 8 = <mark>8</mark>.</p><p>Un truco para no equivocarse: pregúntate «¿qué número se repite?». Si el signo menos está dentro del paréntesis, se repite con él; si está fuera, se pone al final. Escríbelo como producto si dudas.</p>`, svg: cuidado },
    { html: `<h3>3.5 Raíces cuadradas de enteros</h3><p>La <b>raíz cuadrada</b> de un número a es otro número que, elevado al cuadrado, da a. Como 7² = 49 y también (−7)² = 49, el número 49 tiene <b>dos raíces cuadradas</b>: +7 y −7. Se escribe <mark>√49 = ±7</mark>. Cuando se habla de «la» raíz, normalmente se toma la positiva.</p><p>Los números <b>negativos no tienen raíz cuadrada entera</b> (ni real): ningún número multiplicado por sí mismo da negativo, porque «más por más» y «menos por menos» dan positivo. Así, √−16 no existe en los enteros.</p><p>Si un número no es un cuadrado perfecto, su raíz no es entera: √20 está entre 4 y 5, porque 16 &lt; 20 &lt; 25. Lo trabajarás con más detalle en el tema de potencias y raíces.</p>`, svg: raiz },
    { html: `<h3>4.1 Divisibilidad con enteros</h3><p>Las ideas de múltiplo y divisor también se aplican a los enteros. Un entero a es <b>divisor</b> de b si la división b : a es exacta. Como 6 : (−2) = −3 es exacta, −2 es divisor de 6. Por eso los divisores de 6 son ±1, ±2, ±3 y ±6.</p><p>Los <b>múltiplos</b> de un entero se obtienen multiplicándolo por todos los enteros: los múltiplos de 4 son …, −12, −8, −4, 0, 4, 8, 12, … El 0 es múltiplo de todos los números.</p><p>Al calcular el mcm y el mcd se trabaja con los valores absolutos, de modo que el resultado se da positivo: mcd(−12, 18) = 6.</p><p>Recuerda además que <b>no se puede dividir entre cero</b>, ni con naturales ni con enteros: 5 : 0 no tiene sentido. En cambio, 0 : 5 = 0.</p>`, svg: divisibles },
    { html: `<h3>4.2 Problemas con enteros</h3><p>Para resolver problemas, asigna un signo a cada cantidad respecto a una referencia y escribe la operación:</p><ul><li><b>Temperaturas</b>: la variación es final − inicial. De −6 °C a +9 °C: 9 − (−6) = +15 grados.</li><li><b>Alturas</b>: la diferencia entre la cima del Aneto (+3404 m) y el fondo de una fosa a −250 m es 3404 − (−250) = 3654 m.</li><li><b>Dinero</b>: un saldo de −40 € al que se suman tres ingresos de 25 € queda en −40 + 3 · 25 = +35 €.</li><li><b>Historia</b>: de Augusto (63 a. C.) a Carlomagno (742 d. C.) hay 742 − (−63) = 805 años, aunque como no existe el año 0, en la práctica hay que restar 1 y son 804.</li></ul><p>Después de calcular, interpreta el signo del resultado: ¿es una subida o una bajada?, ¿una ganancia o una pérdida? Y responde con una frase completa.</p>`, svg: problemas },
  ],
  ejemplos: [
    { enunciado: "Ordena de menor a mayor: −3, 5, 0, −8, 2, −1.", pasos: ["Los negativos van primero; entre ellos, menor el de mayor valor absoluto: −8 < −3 < −1.", "Después el 0 y los positivos: 0 < 2 < 5."], resultado: "−8 < −3 < −1 < 0 < 2 < 5." },
    { enunciado: "Calcula: −7 + 12 − 15 + 4 − 3.", pasos: ["Positivos: 12 + 4 = 16.", "Negativos: −7 − 15 − 3 = −25.", "16 − 25 = −9."], resultado: "−9." },
    { enunciado: "Calcula quitando paréntesis: 8 − (5 − 9) + (−2 + 6).", pasos: ["8 − 5 + 9 − 2 + 6.", "Positivos: 8 + 9 + 6 = 23; negativos: −5 − 2 = −7.", "23 − 7 = 16."], resultado: "16." },
    { enunciado: "Calcula: (−3) · (+4) · (−2) : (−6).", pasos: ["Tres factores negativos → resultado negativo.", "3 · 4 · 2 = 24; 24 : 6 = 4."], resultado: "−4." },
    { enunciado: "Calcula: 5 − 3 · (−2)² + (−12) : 4.", pasos: ["Potencia: (−2)² = 4.", "Producto y cociente: 3 · 4 = 12; (−12) : 4 = −3.", "5 − 12 − 3 = −10."], resultado: "−10." },
    { enunciado: "Un día la temperatura mínima fue −4 °C y la máxima 11 °C. ¿Cuál fue la amplitud térmica?", pasos: ["Amplitud = máxima − mínima.", "11 − (−4) = 11 + 4 = 15."], resultado: "15 °C." },
  ],
  errores: [
    "Pensar que −8 es mayor que −3 porque 8 > 3.",
    "Aplicar la regla de los signos de la multiplicación a la suma: (−3) + (−4) no es +7.",
    "Al quitar un paréntesis precedido de −, cambiar solo el primer signo de dentro.",
    "Confundir (−2)² = 4 con −2² = −4.",
    "Hacer las operaciones en el orden en que aparecen sin respetar la jerarquía.",
    "Decir que √−9 = −3: los negativos no tienen raíz cuadrada.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Expresa con un entero: a) 15 m bajo el nivel del mar; b) un ingreso de 200 €; c) el año 44 a. C.; d) 3 °C bajo cero.", sol: "a) −15. b) +200. c) −44. d) −3." },
    { nivel: "básico", q: "Escribe el valor absoluto y el opuesto de: −9, +4, 0, −15.", sol: "|−9| = 9, op = +9; |4| = 4, op = −4; |0| = 0, op = 0; |−15| = 15, op = +15." },
    { nivel: "básico", q: "Ordena de mayor a menor: −5, 3, −12, 0, 7, −1.", sol: "7 > 3 > 0 > −1 > −5 > −12." },
    { nivel: "básico", q: "Escribe todos los enteros comprendidos entre −4 y 3.", sol: "−3, −2, −1, 0, 1, 2." },
    { nivel: "básico", q: "Calcula: a) (−8) + (−5); b) (+9) + (−14); c) (−6) + (+11).", sol: "a) Mismo signo: −13. b) 14 − 9 = 5, signo del 14: −5. c) 11 − 6 = 5, signo del 11: +5." },
    { nivel: "básico", q: "Calcula: a) 7 − (−3); b) −4 − 9; c) −10 − (−10).", sol: "a) 7 + 3 = 10. b) −4 + (−9) = −13. c) −10 + 10 = 0." },
    { nivel: "básico", q: "Calcula: a) (−7) · (−6); b) (+8) · (−5); c) (−45) : (+9); d) (−36) : (−4).", sol: "a) +42. b) −40. c) −5. d) +9." },
    { nivel: "básico", q: "Calcula: (−3)², −3², (−2)³, (−1)⁷.", sol: "9; −9; −8; −1." },
    { nivel: "básico", q: "Calcula: √64, √121, √−25.", sol: "±8; ±11; no existe en los enteros." },
    { nivel: "básico", q: "Escribe todos los divisores enteros de 10.", sol: "±1, ±2, ±5, ±10." },
    { nivel: "medio", q: "Calcula agrupando: 12 − 8 + 5 − 14 − 3 + 9.", sol: "Positivos: 12 + 5 + 9 = 26. Negativos: −8 − 14 − 3 = −25. 26 − 25 = 1." },
    { nivel: "medio", q: "Quita paréntesis y calcula: 15 − (8 − 3) − (−4 + 6).", sol: "15 − 8 + 3 + 4 − 6 = 22 − 14 = 8." },
    { nivel: "medio", q: "Calcula: −[6 − (2 − 9)] + 4.", sol: "2 − 9 = −7; 6 − (−7) = 13; −13 + 4 = −9." },
    { nivel: "medio", q: "Calcula: (−2) · (−3) · (−5) · (+2).", sol: "Tres negativos → negativo. 2 · 3 · 5 · 2 = 60 → −60." },
    { nivel: "medio", q: "Calcula: 7 − 4 · (−3) + 15 : (−5).", sol: "4 · (−3) = −12; 15 : (−5) = −3. 7 + 12 − 3 = 16." },
    { nivel: "medio", q: "Calcula: (−18) : (−3) − 2 · (5 − 8).", sol: "6 − 2 · (−3) = 6 + 6 = 12." },
    { nivel: "medio", q: "Calcula: (−2)⁴ − 2⁴ + (−2)³.", sol: "16 − 16 + (−8) = −8." },
    { nivel: "medio", q: "Calcula usando las propiedades de las potencias: (−5)³ · (−5)² : (−5)⁴.", sol: "(−5)^(3+2−4) = (−5)¹ = −5." },
    { nivel: "medio", q: "Un buceador está a −18 m y sube 7 m; luego baja 12 m. ¿A qué profundidad está?", sol: "−18 + 7 − 12 = −23. Está a 23 m de profundidad." },
    { nivel: "medio", q: "Pitágoras nació hacia el 570 a. C. y murió hacia el 495 a. C. ¿Cuántos años vivió aproximadamente?", sol: "−495 − (−570) = 75 años." },
    { nivel: "medio", q: "Completa: (−4) · ___ = 28; ___ : (−6) = −5; (−56) : ___ = 8.", sol: "−7; 30; −7." },
    { nivel: "medio", q: "La cuenta de Marta tiene −60 €. Ingresa 3 veces 35 € y paga un recibo de 48 €. ¿Cuál es el saldo?", sol: "−60 + 3 · 35 − 48 = −60 + 105 − 48 = −3 €. Sigue en números rojos." },
    { nivel: "avanzado", q: "Calcula: 3 · [−2 + 4 · (−1)³] − (−6)² : (−9).", sol: "(−1)³ = −1; −2 − 4 = −6; 3 · (−6) = −18. (−6)² = 36; 36 : (−9) = −4. −18 − (−4) = −14." },
    { nivel: "avanzado", q: "Calcula: −2² · (−3) + (−2)² · 3 − [(−12) : (2 − 5)]².", sol: "−4 · (−3) = 12; 4 · 3 = 12; (−12) : (−3) = 4; 4² = 16. 12 + 12 − 16 = 8." },
    { nivel: "avanzado", q: "Encuentra dos enteros cuya suma sea −3 y cuyo producto sea −10.", sol: "−5 y 2: −5 + 2 = −3 y (−5) · 2 = −10." },
    { nivel: "avanzado", q: "Coloca paréntesis en 12 − 4 · 2 + 1 para obtener: a) 5; b) 17; c) 0; d) 24.", sol: "a) Sin paréntesis: 12 − 8 + 1 = 5. b) (12 − 4) · 2 + 1 = 17. c) 12 − 4 · (2 + 1) = 0. d) (12 − 4) · (2 + 1) = 24." },
    { nivel: "avanzado", q: "La temperatura en una ciudad baja 3 °C cada hora durante 5 horas a partir de +4 °C. Luego sube 2 °C por hora durante 4 horas. ¿Qué temperatura hay al final?", sol: "4 + 5 · (−3) + 4 · 2 = 4 − 15 + 8 = −3 °C." },
    { nivel: "avanzado", q: "¿Para qué valores enteros de n es (−1)ⁿ + (−1)ⁿ⁺¹ igual a 0? Justifícalo.", sol: "Para todos: si n es par, 1 + (−1) = 0; si n es impar, −1 + 1 = 0. Dos exponentes consecutivos siempre tienen distinta paridad." },
    { nivel: "avanzado", q: "En un concurso, cada acierto suma 5 puntos y cada fallo resta 3. Ana contesta 20 preguntas y obtiene 36 puntos. ¿Cuántas acertó?", sol: "Si acierta a, falla 20 − a: 5a − 3(20 − a) = 36 → 8a = 96 → a = 12. Comprobación: 60 − 24 = 36." },
    { nivel: "avanzado", q: "Encuentra el error: «−3² + (−3)² = 9 + 9 = 18».", sol: "−3² = −9, no 9. Lo correcto es −9 + 9 = 0." },
  ],
  quiz: baraja([
    { q: "¿Qué número es mayor?", o: ["−2", "−7", "−10", "−3"], a: 0, e: "El más cercano a 0." },
    { q: "|−12| =", o: ["12", "−12", "0", "1/12"], a: 0, e: "Distancia al 0." },
    { q: "El opuesto de −6 es…", o: ["+6", "−6", "1/6", "0"], a: 0, e: "Al otro lado del 0." },
    { q: "(−5) + (−3) =", o: ["−8", "+8", "−2", "+2"], a: 0, e: "Mismo signo: se suman." },
    { q: "(−9) + 4 =", o: ["−5", "+5", "−13", "+13"], a: 0, e: "9 − 4 con signo del 9." },
    { q: "6 − (−4) =", o: ["10", "2", "−10", "−2"], a: 0, e: "Restar es sumar el opuesto." },
    { q: "−3 − 5 =", o: ["−8", "2", "−2", "8"], a: 0, e: "−3 + (−5)." },
    { q: "(−4) · (−5) =", o: ["+20", "−20", "−9", "+9"], a: 0, e: "Iguales: positivo." },
    { q: "(−30) : 6 =", o: ["−5", "+5", "−24", "−36"], a: 0, e: "Distintos: negativo." },
    { q: "(−1) · (−1) · (−1) =", o: ["−1", "+1", "−3", "0"], a: 0, e: "Tres negativos: negativo." },
    { q: "(−2)⁴ =", o: ["16", "−16", "−8", "8"], a: 0, e: "Exponente par." },
    { q: "−2⁴ =", o: ["−16", "16", "−8", "8"], a: 0, e: "La base es 2." },
    { q: "(−3)³ =", o: ["−27", "27", "−9", "9"], a: 0, e: "Exponente impar." },
    { q: "√36 =", o: ["±6", "6 solo", "−6 solo", "18"], a: 0, e: "6² = (−6)² = 36." },
    { q: "√−36 …", o: ["no existe en los enteros", "= −6", "= 6", "= ±6"], a: 0, e: "Ningún cuadrado es negativo." },
    { q: "5 − (3 − 8) =", o: ["10", "0", "−6", "16"], a: 0, e: "5 − 3 + 8." },
    { q: "4 − 2 · (−3) =", o: ["10", "−6", "−2", "18"], a: 0, e: "Primero el producto: −6." },
    { q: "De −7 °C a +5 °C la temperatura sube…", o: ["12 °C", "2 °C", "−2 °C", "−12 °C"], a: 0, e: "5 − (−7)." },
    { q: "Un divisor de −15 es…", o: ["−3", "−4", "6", "0"], a: 0, e: "−15 : (−3) = 5." },
    { q: "(−6)⁰ =", o: ["1", "−1", "0", "−6"], a: 0, e: "Exponente 0." },
  ]),
  examen: baraja([
    { q: "Ordena: −4, 2, −9, 0", o: ["−9 < −4 < 0 < 2", "−4 < −9 < 0 < 2", "0 < 2 < −4 < −9", "2 < 0 < −4 < −9"], a: 0, e: "De izquierda a derecha en la recta." },
    { q: "−6 + 10 − 9 + 2 =", o: ["−3", "3", "−27", "−5"], a: 0, e: "12 − 15." },
    { q: "10 − (4 − 7) =", o: ["13", "7", "−1", "1"], a: 0, e: "10 − 4 + 7." },
    { q: "(−2) · 3 · (−4) =", o: ["24", "−24", "−5", "5"], a: 0, e: "Dos negativos: positivo." },
    { q: "8 + 12 : (−4) =", o: ["5", "−5", "11", "−1"], a: 0, e: "8 − 3." },
    { q: "−3² + (−3)² =", o: ["0", "18", "−18", "9"], a: 0, e: "−9 + 9." },
    { q: "(−2)³ · (−2)² =", o: ["−32", "32", "−10", "64"], a: 0, e: "(−2)⁵." },
    { q: "Un submarino a −80 m sube 35 m. Queda a…", o: ["−45 m", "−115 m", "45 m", "115 m"], a: 0, e: "−80 + 35." },
  ], 1),
  feynman: ["Por qué −3 es mayor que −8", "Por qué restar un número negativo es como sumar", "Por qué menos por menos es más", "Por qué (−2)² y −2² dan resultados distintos"],
  figura: {
    titulo: "Los números enteros en un vistazo",
    svg: resumen("Resumen del tema de números enteros", [
      ["ℤ", "… −3, −2, −1, 0, +1, +2, +3 …", "var(--pen)"],
      ["Orden", "más a la derecha, mayor · −3 > −8", "var(--leaf)"],
      ["+ y −", "mismo signo: sumar · distinto: restar · a − b = a + (−b)", "var(--sun)"],
      ["· y :", "signos iguales +, distintos −", "var(--inf)"],
      ["Potencias", "base negativa: par +, impar − · (−2)² ≠ −2²", "var(--red)"],
    ]),
  },
  video: pvg("enteros"),
  mapa: mapa("ENTEROS", "var(--inf)", [
    ["Concepto", "positivos · negativos · cero", "var(--pen)"],
    ["Orden", "recta · valor absoluto · opuesto", "var(--leaf)"],
    ["Operaciones", "+ − · : · paréntesis · jerarquía", "var(--sun)"],
    ["Potencias y raíces", "signo y exponente · ±√", "var(--red)"],
  ], 250),
  glosario: [
    ["Número entero", "Cada uno de los números positivos, negativos y el cero: ℤ."],
    ["Número negativo", "Número menor que cero; se escribe con el signo −."],
    ["Recta numérica", "Recta en la que cada punto representa un número; los mayores, a la derecha."],
    ["Valor absoluto", "Distancia de un número al cero; se escribe |a|."],
    ["Opuesto", "Número con el mismo valor absoluto y signo contrario; sumados dan 0."],
    ["Regla de los signos", "Al multiplicar o dividir, signos iguales dan + y distintos dan −."],
    ["Jerarquía de operaciones", "Orden: paréntesis, potencias, productos y cocientes, sumas y restas."],
    ["Elemento neutro", "Número que no cambia el resultado: 0 en la suma, 1 en el producto."],
    ["Potencia", "Producto de factores iguales: aⁿ."],
    ["Base", "Factor que se repite en una potencia."],
    ["Exponente", "Número de veces que se repite la base."],
    ["Raíz cuadrada", "Número que elevado al cuadrado da el radicando; los positivos tienen dos."],
    ["Variación", "Diferencia entre el valor final y el inicial."],
  ],
  situacion: {
    titulo: "El diario del clima",
    reto: "Durante dos semanas, vais a registrar las temperaturas máxima y mínima de vuestra localidad y de una ciudad muy fría (por ejemplo, en Siberia o Canadá) y a analizarlas con números enteros.",
    pasos: [
      "Elegid las ciudades y buscad cada día las temperaturas máxima y mínima en una web meteorológica fiable.",
      "Anotad los datos en una tabla con signos y calculad la amplitud térmica diaria (máxima − mínima).",
      "Calculad la variación de la mínima de un día al siguiente y señalad las subidas y bajadas.",
      "Ordenad las temperaturas mínimas de menor a mayor y calculad la media de cada ciudad.",
      "Representad los datos en un termómetro gigante o un gráfico y presentad conclusiones.",
    ],
    producto: "Un mural o diapositiva con el diario de temperaturas, las operaciones con enteros y las conclusiones.",
    evaluacion: ["Representa y ordena correctamente números enteros.", "Calcula variaciones y amplitudes con las reglas de la resta.", "Interpreta el signo de los resultados en el contexto.", "Presenta los datos con orden y claridad."],
  },
  tarjetas: [
    ["ℤ", "Positivos, negativos y el cero"], ["Comparar negativos", "Mayor el más cercano a 0"], ["|a|", "Distancia al cero"],
    ["Opuesto de a", "−a; a + (−a) = 0"], ["Sumar mismo signo", "Sumar valores y mismo signo"], ["Sumar distinto signo", "Restar valores, signo del mayor"],
    ["Restar", "Sumar el opuesto"], ["− ( … )", "Cambian todos los signos de dentro"], ["Regla de los signos", "Iguales +, distintos −"],
    ["(−a)ⁿ", "n par: +; n impar: −"], ["−a² vs (−a)²", "−a² es negativo; (−a)² positivo"], ["√ de un negativo", "No existe"],
  ],
  familias: ["Mirad el pronóstico del tiempo y calculad la diferencia entre máxima y mínima.", "En el ascensor o un parking con sótanos, preguntad cuántas plantas se suben o bajan.", "Revisad una línea del tiempo histórica con años antes y después de Cristo.", "Jugad a las cartas con rojas negativas y negras positivas: suma la mano."],
  profesores: {
    saberes: "Sentido numérico: números enteros, representación, orden, valor absoluto y opuesto, operaciones y sus propiedades, jerarquía y potencias, en contextos reales (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Termómetro gigante en el suelo para sumar y restar caminando.", "Fichas de dos colores (positivas y negativas) que se anulan por parejas.", "Líneas del tiempo con fechas a. C. y d. C.", "Detectar el patrón «menos por menos» con tablas de multiplicar extendidas."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Número entero", url: "https://es.wikipedia.org/wiki/N%C3%BAmero_entero" }, { t: "Wikipedia: Brahmagupta", url: "https://es.wikipedia.org/wiki/Brahmagupta" }],
  revisado: REV,
};
