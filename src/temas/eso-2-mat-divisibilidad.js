// Matemáticas 2º ESO · Divisibilidad: mcm y mcd. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, flujo, tabla, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const criterios = cajas("Criterios de divisibilidad por 2, 3, 5, 9, 10 y 11", [
  ["Entre 2", ["acaba en cifra par"], "var(--pen)"],
  ["Entre 3", ["Σ cifras: múlt. de 3"], "var(--leaf)"],
  ["Entre 5", ["acaba en 0 o 5"], "var(--sun)"],
  ["Entre 9", ["Σ cifras: múlt. de 9"], "var(--inf)"],
  ["Entre 10", ["acaba en 0"], "var(--red)"],
  ["Entre 11", ["alterna: 0 o múlt. 11"], "var(--bac)"],
], "Criterios");

const criba = lienzo("Criba de Eratóstenes del 2 al 50: los números que quedan sin tachar son primos", `
  ${[...Array(49)].map((_, k) => { const n = k + 2, x = 14 + (k % 10) * 23.5, y = 18 + Math.floor(k / 10) * 28; const p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47].includes(n); return `<rect x="${x}" y="${y}" width="21" height="24" rx="4" fill="${p ? "var(--leaf)" : "var(--card)"}" fill-opacity="${p ? 0.3 : 1}" stroke="${p ? "var(--leaf)" : "var(--line)"}" stroke-width="1.4"/>${tx(x + 10.5, y + 16.5, n, { fs: 10.5, c: p ? "var(--ink)" : "var(--muted)", max: 19 })}`; }).join("")}
  ${tx(130, 166, "15 primos menores que 50", { fs: 12, c: "var(--leaf)" })}`, 176);

const primos = comparar("Números primos y compuestos", [
  ["Primos", ["solo 2 divisores:", "1 y él mismo", "2, 3, 5, 7, 11…", "el 2 es el único par"], "var(--leaf)"],
  ["Compuestos", ["más de 2 divisores", "4, 6, 8, 9, 10…", "12 = 2² · 3", "el 1 no es ni uno ni otro"], "var(--red)"],
], "Primos y compuestos");

const esPrimo = flujo("Cómo saber si un número es primo: dividir entre los primos hasta su raíz cuadrada", [
  ["¿Es primo 113?", "ini"], ["√113 ≈ 10,6", "proc"], ["Probar 2, 3, 5, 7", "proc"], ["¿Alguna división exacta?", "dec", "sí: compuesto", "no"], ["113 es primo", "es"],
], "¿Es primo?");

const mcmPasos = pasos("Cálculo del mcm de 12, 18 y 20 con la descomposición factorial", ["12 = 2²·3 ; 18 = 2·3² ; 20 = 2²·5", "Todos los factores: 2, 3 y 5", "Con el mayor exponente: 2², 3², 5", "mcm = 4 · 9 · 5 = 180"], "Mínimo común múltiplo");

const mcdPasos = pasos("Cálculo del mcd de 60, 84 y 132 con la descomposición factorial", ["60 = 2²·3·5 ; 84 = 2²·3·7", "132 = 2²·3·11", "Solo factores comunes: 2 y 3", "Con el menor exponente: 2², 3", "mcd = 4 · 3 = 12"], "Máximo común divisor");

const euclides = lienzo("Algoritmo de Euclides para el mcd de 252 y 198: se divide hasta que el resto es cero", `
  ${[["252 = 198 · 1 + 54", 0], ["198 = 54 · 3 + 36", 1], ["54 = 36 · 1 + 18", 2], ["36 = 18 · 2 + 0", 3]].map(([t, i]) => `<rect x="30" y="${18 + i * 32}" width="200" height="26" rx="7" fill="var(--card)" stroke="${i === 3 ? "var(--leaf)" : "var(--pen)"}" stroke-width="2"/>${tx(130, 36 + i * 32, t, { fs: 14, fam: D, max: 190 })}`).join("")}
  ${tx(130, 162, "último resto no nulo: mcd = 18", { fs: 13, c: "var(--leaf)" })}`, 176);

const relacion = formula("Relación entre el mcm y el mcd de dos números", "mcm(a,b) · mcd(a,b) = a · b", ["Ejemplo con 12 y 18", "mcm = 36 ; mcd = 6", "36 · 6 = 216 = 12 · 18"], "var(--inf)");

const elegir = comparar("Cómo saber si un problema es de mcm o de mcd", [
  ["mcm", ["coincidir de nuevo", "«cada cuánto»", "repetir ciclos", "resultado ≥ datos"], "var(--pen)"],
  ["mcd", ["repartir o trocear", "«lo más grande posible»", "sin que sobre nada", "resultado ≤ datos"], "var(--red)"],
], "¿mcm o mcd?");

const ciclo = lienzo("Problema de mcm: dos autobuses salen juntos y vuelven a coincidir a los 36 minutos", `
  ${[0, 12, 24, 36].map((v) => `<circle cx="${30 + v * 5.5}" cy="50" r="7" fill="var(--pen)"/>`).join("")}${[0, 18, 36].map((v) => `<circle cx="${30 + v * 5.5}" cy="100" r="7" fill="var(--red)"/>`).join("")}
  <path d="M30 50 H228 M30 100 H228" stroke="var(--line)" stroke-width="2"/>
  ${tx(18, 54, "A", { fs: 12, c: "var(--pen)", a: "end" })}${tx(18, 104, "B", { fs: 12, c: "var(--red)", a: "end" })}
  ${[0, 12, 18, 24, 36].map((v) => tx(30 + v * 5.5, 130, v, { fs: 10, c: "var(--muted)", max: 20 })).join("")}
  <path d="M228 36 V114" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="4 3"/>${tx(130, 160, "cada 12 y cada 18 min → mcm = 36 min", { fs: 12, c: "var(--leaf)" })}`, 176);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Divisibilidad: mcm y mcd",
  minutos: 105,
  objetivos: [
    "Reconocer múltiplos y divisores y aplicar los criterios de divisibilidad",
    "Distinguir números primos y compuestos y descomponer en factores primos",
    "Calcular el mcm y el mcd por descomposición y por el algoritmo de Euclides",
    "Decidir si un problema se resuelve con el mcm o con el mcd y resolverlo",
  ],
  claves: ["múltiplo", "divisor", "número primo", "número compuesto", "factorización", "mcm", "mcd", "primos entre sí"],
  pregunta: {
    texto: "Dos faros se encienden a la vez: uno cada 12 segundos y otro cada 18. ¿Cuándo vuelven a encenderse juntos?",
    respuesta: "Hay que buscar el primer múltiplo común: 12 = 2² · 3 y 18 = 2 · 3², así que el mcm es 2² · 3² = <mark>36 segundos</mark>.",
  },
  lectura: {
    titulo: "Las cigarras y los números primos",
    html: `<p>En Norteamérica viven unas cigarras muy especiales del género <i>Magicicada</i>. Pasan casi toda su vida bajo tierra, alimentándose de las raíces de los árboles, y salen a la superficie todas a la vez, por millones, solo cada <b>13 o 17 años</b>. Después de unas semanas de cantos ensordecedores, se reproducen y mueren.</p><p>¿Por qué 13 y 17, y no 12 o 16? Los biólogos tienen una hipótesis matemática. Los dos números son <b>primos</b>. Si un depredador apareciera cada 2, 3, 4 o 6 años, coincidiría muy pocas veces con una cigarra de ciclo 17: solo cada 34, 51, 68 o 102 años, que son los <b>mínimos comunes múltiplos</b>. En cambio, una cigarra de ciclo 12 coincidiría con depredadores de ciclo 2, 3, 4 o 6 cada 12 años. Los ciclos primos minimizan los encuentros con enemigos.</p><p>Los números primos son los «átomos» de la aritmética: todos los demás se construyen multiplicándolos. En este tema aprenderás a reconocerlos, a descomponer números en factores y a usar el mcm y el mcd para resolver problemas de ciclos, repartos y medidas.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Múltiplos y divisores</h3><p>Decimos que <b>a es múltiplo de b</b> si a se obtiene multiplicando b por un número natural; es decir, si la división a : b es <b>exacta</b>. En ese caso también decimos que <b>b es divisor de a</b> o que a es divisible entre b. Como 24 : 6 = 4 con resto 0, 24 es múltiplo de 6 y 6 es divisor de 24.</p><p>Propiedades importantes:</p><ul><li>Los múltiplos de un número son <b>infinitos</b>: 6, 12, 18, 24… El 0 es múltiplo de todos.</li><li>Los divisores de un número son <b>finitos</b> y van del 1 al propio número. Se encuentran por parejas: 24 = 1 · 24 = 2 · 12 = 3 · 8 = 4 · 6, así que sus divisores son 1, 2, 3, 4, 6, 8, 12 y 24.</li><li>El 1 es divisor de todos los números, y todo número es divisor y múltiplo de sí mismo.</li></ul><p>Si a y b son múltiplos de c, su suma y su diferencia también lo son: 24 y 18 son múltiplos de 6, y 42 y 6 también.</p>`, svg: psvg("divisibilidad", 0) },
    { html: `<h3>1.2 Criterios de divisibilidad</h3><p>Los <b>criterios de divisibilidad</b> permiten saber si una división es exacta sin hacerla:</p><ul><li><b>Entre 2</b>: si acaba en 0, 2, 4, 6 u 8.</li><li><b>Entre 3</b>: si la suma de sus cifras es múltiplo de 3. 471: 4 + 7 + 1 = 12 → sí.</li><li><b>Entre 4</b>: si sus dos últimas cifras forman un múltiplo de 4. 1324: 24 → sí.</li><li><b>Entre 5</b>: si acaba en 0 o en 5.</li><li><b>Entre 6</b>: si lo es entre 2 y entre 3 a la vez.</li><li><b>Entre 9</b>: si la suma de sus cifras es múltiplo de 9. 5832: 18 → sí.</li><li><b>Entre 10</b>: si acaba en 0.</li><li><b>Entre 11</b>: si la diferencia entre la suma de las cifras de lugar impar y la de lugar par es 0 o múltiplo de 11. 2728: (2 + 2) − (7 + 8) = −11 → sí.</li></ul><p>Combinándolos se puede ir más lejos: un número es divisible entre 15 si lo es entre 3 y entre 5.</p>`, svg: criterios, video: pvid("divisibilidad", 1) },
    { html: `<h3>1.3 Números primos y compuestos</h3><p>Un número natural mayor que 1 es <b>primo</b> si solo tiene dos divisores: el 1 y él mismo. Los primeros son 2, 3, 5, 7, 11, 13, 17, 19, 23, 29… El 2 es el único primo par.</p><p>Un número es <b>compuesto</b> si tiene más de dos divisores, como 12 (1, 2, 3, 4, 6, 12). El <b>1 no es ni primo ni compuesto</b>: solo tiene un divisor.</p><p>Hace más de 2200 años, Euclides demostró que hay <b>infinitos números primos</b>. Su razonamiento es muy elegante: si hubiera una lista finita de primos, al multiplicarlos todos y sumar 1 obtendríamos un número que no es divisible entre ninguno de ellos, de modo que la lista estaría incompleta.</p><p>Hoy los primos son esenciales en la <b>criptografía</b>: las compras por internet se protegen con números que son el producto de dos primos enormes, muy fáciles de multiplicar pero casi imposibles de descomponer.</p>`, svg: primos },
    { html: `<h3>1.4 La criba de Eratóstenes y cómo reconocer un primo</h3><p>El sabio griego Eratóstenes ideó un método para encontrar todos los primos hasta un número: se escriben los números en una tabla, se deja el 2 y se tachan todos sus múltiplos; se deja el 3 y se tachan sus múltiplos; y así con el 5, el 7… Los números que no quedan tachados son <b>primos</b>. Hasta 50 hay 15.</p><p>Para saber si un número concreto es primo, se divide entre los primos 2, 3, 5, 7, 11… <mark>hasta llegar a su raíz cuadrada</mark>. Si ninguna división es exacta, el número es primo. ¿Por qué basta con llegar a la raíz? Porque si un número tuviera un divisor mayor que su raíz, tendría que tener también otro menor, y ya lo habríamos encontrado.</p><p>Ejemplo: 113. √113 ≈ 10,6. No es divisible entre 2, 3, 5 ni 7. Por tanto, 113 es primo.</p>`, svg: criba },
    { html: `<h3>1.5 Comprobar primos sin calculadora</h3><p>El método de la raíz cuadrada se puede organizar como un pequeño algoritmo, que es lo que haría un ordenador:</p><ol><li>Calcula aproximadamente la raíz cuadrada del número.</li><li>Prueba a dividir entre cada primo menor o igual que esa raíz.</li><li>Si alguna división es exacta, el número es <b>compuesto</b> y ya tienes un divisor.</li><li>Si ninguna lo es, el número es <b>primo</b>.</li></ol><p>Ejemplo: ¿es primo 221? √221 ≈ 14,9. Probamos 2 (no, es impar), 3 (2 + 2 + 1 = 5, no), 5 (no acaba en 0 o 5), 7 (221 : 7 = 31,57…, no), 11 (2 − 2 + 1 = 1, no) y 13: 221 : 13 = 17. ¡Exacta! Así que 221 = 13 · 17 es <b>compuesto</b>.</p><p>Fíjate en que los criterios de divisibilidad ahorran mucho trabajo en los primeros pasos.</p>`, svg: esPrimo },
    { html: `<h3>2.1 Descomposición en factores primos</h3><p>El <b>teorema fundamental de la aritmética</b> dice que todo número compuesto se puede escribir como producto de factores primos, y que esa descomposición es <b>única</b> (salvo el orden). Por ejemplo, 360 = 2³ · 3² · 5.</p><p>Para descomponer se divide el número entre el menor primo posible, el cociente otra vez entre el menor primo posible, y así hasta llegar a 1. Se suele escribir en dos columnas:</p><p>360 | 2 → 180 | 2 → 90 | 2 → 45 | 3 → 15 | 3 → 5 | 5 → 1.</p><p>Después se agrupan los factores repetidos en potencias: <mark>360 = 2³ · 3² · 5</mark>.</p><p>La descomposición permite conocer todos los divisores de un número: son los productos de sus factores con exponentes iguales o menores. Por ejemplo, 12 = 2² · 3 tiene (2 + 1) · (1 + 1) = 6 divisores: 1, 2, 4, 3, 6, 12.</p>`, svg: psvg("divisibilidad", 3) },
    { html: `<h3>2.2 El mínimo común múltiplo</h3><p>El <b>mínimo común múltiplo</b> de varios números, mcm, es el menor de sus múltiplos comunes distinto de cero. Para 4 y 6: múltiplos de 4: 4, 8, <b>12</b>, 16, 20, <b>24</b>…; de 6: 6, <b>12</b>, 18, <b>24</b>… Los comunes son 12, 24, 36… y el mínimo es <mark>12</mark>.</p><p>Con números grandes, se usa la descomposición factorial:</p><ol><li>Se descompone cada número en factores primos.</li><li>Se toman <b>todos los factores</b>, comunes y no comunes.</li><li>Cada uno con su <b>mayor exponente</b>.</li></ol><p>Ejemplo: 12 = 2² · 3, 18 = 2 · 3², 20 = 2² · 5. mcm = 2² · 3² · 5 = 180.</p><p>El mcm siempre es mayor o igual que el mayor de los números. Si uno es múltiplo de los demás, él mismo es el mcm: mcm(5, 15) = 15.</p>`, svg: mcmPasos, video: pvid("divisibilidad", 4) },
    { html: `<h3>2.3 El máximo común divisor</h3><p>El <b>máximo común divisor</b> de varios números, mcd, es el mayor de sus divisores comunes. Para 12 y 18: divisores de 12: 1, 2, 3, 4, 6, 12; de 18: 1, 2, 3, 6, 9, 18. Los comunes son 1, 2, 3 y 6, y el máximo es <mark>6</mark>.</p><p>Con la descomposición factorial:</p><ol><li>Se descompone cada número en factores primos.</li><li>Se toman <b>solo los factores comunes</b>.</li><li>Cada uno con su <b>menor exponente</b>.</li></ol><p>Ejemplo: 60 = 2² · 3 · 5, 84 = 2² · 3 · 7, 132 = 2² · 3 · 11. mcd = 2² · 3 = 12.</p><p>El mcd siempre es menor o igual que el menor de los números. Si dos números no tienen factores comunes, su mcd es 1 y se dice que son <b>primos entre sí</b>: 8 y 15 lo son, aunque ninguno de los dos sea primo.</p>`, svg: mcdPasos },
    { html: `<h3>2.4 El algoritmo de Euclides</h3><p>Hay otro método para el mcd que no necesita factorizar y es muy útil con números grandes: el <b>algoritmo de Euclides</b>. Se basa en que el mcd de dos números es el mismo que el del menor y el resto de dividirlos.</p><ol><li>Se divide el mayor entre el menor.</li><li>Se divide el divisor entre el resto.</li><li>Se repite hasta que el resto sea 0.</li><li>El <b>último resto distinto de cero</b> es el mcd.</li></ol><p>Ejemplo: mcd(252, 198). 252 = 198 · 1 + 54; 198 = 54 · 3 + 36; 54 = 36 · 1 + 18; 36 = 18 · 2 + 0. Por tanto, <mark>mcd = 18</mark>.</p><p>Este algoritmo, de hace más de 2300 años, es uno de los más antiguos que se siguen usando, y los ordenadores lo aplican millones de veces al día.</p>`, svg: euclides },
    { html: `<h3>2.5 Relación entre el mcm y el mcd</h3><p>Para dos números a y b se cumple una relación muy útil: <mark>mcm(a, b) · mcd(a, b) = a · b</mark>. Por ejemplo, con 12 y 18: mcm = 36, mcd = 6 y 36 · 6 = 216 = 12 · 18.</p><p>¿Por qué ocurre? Porque en el mcm entra cada factor con el mayor exponente y en el mcd con el menor; entre los dos, cada factor aparece exactamente con los exponentes de a y de b juntos.</p><p>Esta relación permite calcular uno a partir del otro: si sabemos que mcd(24, 40) = 8, entonces mcm(24, 40) = 24 · 40 : 8 = 120.</p><p>Consecuencia: si dos números son primos entre sí (mcd = 1), su mcm es su producto. mcm(8, 15) = 120. Atención: esta fórmula sirve para <b>dos</b> números, no para tres o más.</p>`, svg: relacion },
    { html: `<h3>3.1 ¿mcm o mcd? Cómo elegir</h3><p>La mayor dificultad de los problemas no es calcular, sino saber <b>qué</b> calcular. Algunas pistas:</p><ul><li>Es un problema de <b>mcm</b> cuando hay fenómenos que se repiten con periodos distintos y se pregunta cuándo vuelven a <b>coincidir</b>, o cuando se busca la menor cantidad que se puede formar con paquetes de varios tamaños. El resultado es <b>mayor</b> que los datos.</li><li>Es un problema de <b>mcd</b> cuando se quiere <b>dividir o repartir</b> varias cantidades en partes iguales lo más grandes posible, sin que sobre nada. El resultado es <b>menor</b> que los datos.</li></ul><p>Una comprobación de sentido común: si te sale un mcd mayor que alguno de los números, o un mcm menor, algo ha fallado. Pregúntate también qué unidades tiene la respuesta (minutos, centímetros, alumnos…).</p>`, svg: elegir, video: pvid("divisibilidad", 6) },
    { html: `<h3>3.2 Problemas de mcm</h3><p>Ejemplo 1: dos autobuses salen de la misma parada a las 8:00; uno pasa cada 12 minutos y otro cada 18. ¿Cuándo vuelven a coincidir? mcm(12, 18) = 36, así que coinciden a las <b>8:36</b>, y luego a las 9:12, 9:48…</p><p>Ejemplo 2: ¿cuál es el menor número de caramelos que se puede repartir exactamente en bolsas de 6, de 8 o de 10? mcm(6, 8, 10) = 2³ · 3 · 5 = 120 caramelos.</p><p>Ejemplo 3: un cometa pasa cada 15 años y otro cada 25. Si pasaron juntos en 2010, la próxima vez será en 2010 + mcm(15, 25) = 2010 + 75 = <mark>2085</mark>.</p><p>Fíjate en que la respuesta muchas veces no es el mcm, sino algo que se calcula con él: una hora, un año, un número de vueltas…</p>`, svg: ciclo },
    { html: `<h3>3.3 Problemas de mcd</h3><p>Ejemplo 1: tenemos una cartulina de 60 cm por 84 cm y queremos cortarla en cuadrados iguales lo más grandes posible, sin que sobre nada. El lado debe dividir a 60 y a 84, y ser el mayor: mcd(60, 84) = 12 cm. Salen 5 · 7 = <b>35 cuadrados</b>.</p><p>Ejemplo 2: queremos hacer lotes iguales con 48 bolígrafos, 72 lápices y 120 gomas, con el mayor número posible de lotes y sin que sobre nada. mcd(48, 72, 120) = 24 lotes, cada uno con 2 bolígrafos, 3 lápices y 5 gomas.</p><p>Ejemplo 3: se quieren plantar árboles igualmente espaciados en el borde de un terreno de 150 m por 90 m, con uno en cada esquina y a la mayor distancia posible. mcd(150, 90) = 30 m; el perímetro es 480 m, así que hacen falta 480 : 30 = <mark>16 árboles</mark>.</p>`, svg: psvg("divisibilidad", 8) },
  ],
  ejemplos: [
    { enunciado: "Aplica los criterios: ¿es 7425 divisible entre 2, 3, 5, 9 y 11?", pasos: ["Acaba en 5: no entre 2; sí entre 5.", "Suma de cifras: 7 + 4 + 2 + 5 = 18: sí entre 3 y entre 9.", "Entre 11: (7 + 2) − (4 + 5) = 0: sí."], resultado: "Divisible entre 3, 5, 9 y 11; no entre 2." },
    { enunciado: "¿Es primo 127?", pasos: ["√127 ≈ 11,3: probar 2, 3, 5, 7 y 11.", "Impar; 1 + 2 + 7 = 10; no acaba en 0 o 5.", "127 : 7 = 18,1…; 127 : 11 = 11,5…"], resultado: "127 es primo." },
    { enunciado: "Descompón 540 en factores primos.", pasos: ["540 : 2 = 270; : 2 = 135.", "135 : 3 = 45; : 3 = 15; : 3 = 5; : 5 = 1."], resultado: "540 = 2² · 3³ · 5." },
    { enunciado: "Calcula mcm y mcd de 36, 48 y 60.", pasos: ["36 = 2² · 3²; 48 = 2⁴ · 3; 60 = 2² · 3 · 5.", "mcm: todos con mayor exponente: 2⁴ · 3² · 5 = 720.", "mcd: comunes con menor exponente: 2² · 3 = 12."], resultado: "mcm = 720; mcd = 12." },
    { enunciado: "Calcula mcd(462, 1071) con el algoritmo de Euclides.", pasos: ["1071 = 462 · 2 + 147.", "462 = 147 · 3 + 21.", "147 = 21 · 7 + 0."], resultado: "mcd = 21." },
    { enunciado: "Un suelo de 360 cm × 480 cm se quiere cubrir con baldosas cuadradas enteras lo más grandes posible. ¿Qué lado tienen y cuántas hacen falta?", pasos: ["Es de mcd: repartir sin que sobre.", "360 = 2³ · 3² · 5; 480 = 2⁵ · 3 · 5 → mcd = 2³ · 3 · 5 = 120.", "360 : 120 = 3; 480 : 120 = 4 → 12 baldosas."], resultado: "Baldosas de 120 cm; 12 baldosas." },
  ],
  errores: [
    "Considerar el 1 como número primo.",
    "En el mcm, tomar solo los factores comunes; en el mcd, tomar todos.",
    "Confundir los exponentes: el mcm lleva el mayor y el mcd el menor.",
    "Usar mcm cuando el problema pide repartir en partes lo más grandes posible.",
    "Pensar que dos números primos entre sí tienen que ser primos (8 y 15 no lo son).",
    "Dar el mcm o el mcd como respuesta final sin interpretarlo (horas, número de piezas…).",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe los cinco primeros múltiplos de 7 y todos los divisores de 30.", sol: "Múltiplos de 7: 7, 14, 21, 28, 35. Divisores de 30: 1, 2, 3, 5, 6, 10, 15, 30." },
    { nivel: "básico", q: "Indica si es verdadero o falso: a) 56 es múltiplo de 8; b) 9 es divisor de 84; c) 1 es divisor de todos los números.", sol: "a) V (8 · 7). b) F (84 : 9 = 9,33…). c) V." },
    { nivel: "básico", q: "Aplica los criterios: ¿es 2310 divisible entre 2, 3, 5, 10 y 11?", sol: "Acaba en 0: sí entre 2, 5 y 10. 2 + 3 + 1 + 0 = 6: sí entre 3. (2 + 1) − (3 + 0) = 0: sí entre 11." },
    { nivel: "básico", q: "Escribe los números primos entre 30 y 60.", sol: "31, 37, 41, 43, 47, 53, 59." },
    { nivel: "básico", q: "Clasifica en primos y compuestos: 51, 53, 57, 59, 91.", sol: "Primos: 53, 59. Compuestos: 51 = 3 · 17, 57 = 3 · 19, 91 = 7 · 13." },
    { nivel: "básico", q: "Descompón en factores primos: 84, 126, 200.", sol: "84 = 2² · 3 · 7; 126 = 2 · 3² · 7; 200 = 2³ · 5²." },
    { nivel: "básico", q: "Calcula el mcm de 8 y 12 escribiendo sus múltiplos.", sol: "Múltiplos de 8: 8, 16, 24…; de 12: 12, 24… mcm = 24." },
    { nivel: "básico", q: "Calcula el mcd de 18 y 24 escribiendo sus divisores.", sol: "Divisores de 18: 1, 2, 3, 6, 9, 18; de 24: 1, 2, 3, 4, 6, 8, 12, 24. mcd = 6." },
    { nivel: "básico", q: "Calcula mcm y mcd de 15 y 20 por descomposición.", sol: "15 = 3 · 5; 20 = 2² · 5. mcm = 2² · 3 · 5 = 60; mcd = 5." },
    { nivel: "básico", q: "¿Son primos entre sí 14 y 25? ¿Y 21 y 35?", sol: "14 = 2 · 7, 25 = 5²: mcd = 1, sí. 21 = 3 · 7, 35 = 5 · 7: mcd = 7, no." },
    { nivel: "medio", q: "Halla la cifra que falta para que 4_2 sea divisible entre 3. Da todas las soluciones.", sol: "4 + x + 2 = 6 + x múltiplo de 3 → x = 0, 3, 6, 9: 402, 432, 462, 492." },
    { nivel: "medio", q: "¿Es primo 143? ¿Y 149?", sol: "√143 ≈ 11,96: 143 : 11 = 13 → compuesto. √149 ≈ 12,2: no es divisible entre 2, 3, 5, 7, 11 → primo." },
    { nivel: "medio", q: "Calcula mcm y mcd de 72, 90 y 120.", sol: "72 = 2³ · 3²; 90 = 2 · 3² · 5; 120 = 2³ · 3 · 5. mcm = 2³ · 3² · 5 = 360. mcd = 2 · 3 = 6." },
    { nivel: "medio", q: "Calcula el mcd de 1260 y 1050 con el algoritmo de Euclides.", sol: "1260 = 1050 · 1 + 210; 1050 = 210 · 5 + 0. mcd = 210." },
    { nivel: "medio", q: "El mcd de dos números es 6 y su producto es 432. ¿Cuál es su mcm?", sol: "mcm = 432 : 6 = 72." },
    { nivel: "medio", q: "¿Cuántos divisores tiene 72? Escríbelos.", sol: "72 = 2³ · 3² → (3 + 1)(2 + 1) = 12 divisores: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72." },
    { nivel: "medio", q: "Tres semáforos cambian cada 30, 45 y 60 segundos. Si cambian a la vez, ¿cuándo vuelven a coincidir?", sol: "mcm(30, 45, 60) = 2² · 3² · 5 = 180 s = 3 minutos." },
    { nivel: "medio", q: "Laura va a la piscina cada 4 días y Jordi cada 6. Coinciden el 1 de marzo. ¿Qué día vuelven a coincidir?", sol: "mcm(4, 6) = 12 días → 13 de marzo." },
    { nivel: "medio", q: "Se quieren repartir 120 naranjas y 84 manzanas en cajas iguales, sin mezclar, con el mayor número posible de frutas por caja. ¿Cuántas frutas tiene cada caja y cuántas cajas hay?", sol: "mcd(120, 84) = 12 frutas por caja. 120 : 12 = 10 cajas de naranjas y 84 : 12 = 7 de manzanas: 17 cajas." },
    { nivel: "medio", q: "¿Cuál es el menor número de alumnos que se pueden agrupar exactamente de 3 en 3, de 4 en 4 y de 5 en 5?", sol: "mcm(3, 4, 5) = 60 alumnos." },
    { nivel: "medio", q: "Una cuerda de 180 cm y otra de 240 cm se cortan en trozos iguales lo más largos posible. ¿Cuánto mide cada trozo y cuántos salen?", sol: "mcd(180, 240) = 60 cm. 3 + 4 = 7 trozos." },
    { nivel: "medio", q: "Escribe dos números compuestos que sean primos entre sí.", sol: "Por ejemplo, 9 = 3² y 10 = 2 · 5: mcd = 1. (Otros: 8 y 15, 4 y 9…)" },
    { nivel: "avanzado", q: "¿Cuál es el menor número que al dividirlo entre 6, 8 y 15 da siempre resto 1?", sol: "mcm(6, 8, 15) = 120. El número es 120 + 1 = 121." },
    { nivel: "avanzado", q: "Halla el menor número de 4 cifras que es múltiplo de 12, de 18 y de 30.", sol: "mcm(12, 18, 30) = 180. 180 · 6 = 1080 (180 · 5 = 900 tiene 3 cifras). Respuesta: 1080." },
    { nivel: "avanzado", q: "Un terreno rectangular mide 210 m × 126 m. Se quiere vallar con postes a la misma distancia, uno en cada esquina, con la mayor separación posible. ¿Cuántos postes hacen falta?", sol: "mcd(210, 126) = 42 m. Perímetro = 2 · (210 + 126) = 672 m. Postes = 672 : 42 = 16." },
    { nivel: "avanzado", q: "Dos ruedas dentadas engranan: una tiene 24 dientes y otra 36. Si marcamos los dientes que se tocan, ¿cuántas vueltas da cada una hasta que vuelven a tocarse los mismos?", sol: "mcm(24, 36) = 72 dientes. La primera da 72 : 24 = 3 vueltas y la segunda 72 : 36 = 2." },
    { nivel: "avanzado", q: "Las cigarras de 13 años y las de 17 salieron juntas en 2015 en una región. ¿Cuándo volverán a coincidir? ¿Y una cigarra de 12 años con depredadores de ciclo 4?", sol: "mcm(13, 17) = 221 → año 2236. mcm(12, 4) = 12: coincidirían cada 12 años, en cada salida." },
    { nivel: "avanzado", q: "Demuestra que el producto de tres números naturales consecutivos siempre es múltiplo de 6.", sol: "Entre tres consecutivos siempre hay al menos un par (múltiplo de 2) y exactamente un múltiplo de 3. El producto es divisible entre 2 y entre 3, por tanto entre 6." },
    { nivel: "avanzado", q: "Encuentra dos números cuyo mcd sea 12 y cuyo mcm sea 72 (hay más de una solución).", sol: "a · b = 12 · 72 = 864, ambos múltiplos de 12 y divisores de 72: 12 y 72, o 24 y 36. Comprobación: mcd(24, 36) = 12 y mcm = 72." },
    { nivel: "avanzado", q: "¿Por qué si un número es divisible entre 9 también lo es entre 3, pero no al revés? Pon un ejemplo.", sol: "9 = 3 · 3: si 9 divide al número, 3 también. Al revés no: 12 es divisible entre 3 (suma 3) pero no entre 9." },
  ],
  quiz: baraja([
    { q: "¿Cuál es múltiplo de 9?", o: ["243", "245", "249", "250"], a: 0, e: "2 + 4 + 3 = 9." },
    { q: "Divisores de 15:", o: ["1, 3, 5, 15", "3, 5", "1, 15", "15, 30, 45"], a: 0, e: "Todos los que dividen exactamente." },
    { q: "Un número es divisible entre 3 si…", o: ["la suma de sus cifras es múltiplo de 3", "acaba en 3", "es impar", "acaba en 0 o 3"], a: 0, e: "Criterio del 3." },
    { q: "¿Cuál es divisible entre 11?", o: ["3586", "3585", "3587", "3588"], a: 0, e: "(3 + 8) − (5 + 6) = 0." },
    { q: "El 1 es…", o: ["ni primo ni compuesto", "primo", "compuesto", "par"], a: 0, e: "Solo tiene un divisor." },
    { q: "¿Cuál es primo?", o: ["37", "39", "51", "57"], a: 0, e: "Los otros son múltiplos de 3." },
    { q: "El único primo par es…", o: ["2", "4", "0", "no hay"], a: 0, e: "Los demás pares son múltiplos de 2." },
    { q: "¿Cuántos números primos hay?", o: ["infinitos", "100", "25", "1000"], a: 0, e: "Lo demostró Euclides." },
    { q: "Para saber si 97 es primo basta probar primos hasta…", o: ["9", "48", "97", "3"], a: 0, e: "√97 ≈ 9,8." },
    { q: "180 descompuesto es…", o: ["2² · 3² · 5", "2 · 3 · 5", "2³ · 3 · 5", "4 · 45"], a: 0, e: "180 = 4 · 9 · 5." },
    { q: "mcm(6, 9) =", o: ["18", "3", "54", "36"], a: 0, e: "2 · 3²." },
    { q: "mcd(6, 9) =", o: ["3", "18", "1", "54"], a: 0, e: "Factor común 3." },
    { q: "En el mcm se toman…", o: ["todos los factores con mayor exponente", "los comunes con menor exponente", "los comunes con mayor", "todos con menor"], a: 0, e: "Regla del mcm." },
    { q: "En el mcd se toman…", o: ["los comunes con menor exponente", "todos con mayor exponente", "todos con menor", "los no comunes"], a: 0, e: "Regla del mcd." },
    { q: "8 y 9 son…", o: ["primos entre sí", "primos", "múltiplos", "divisores uno del otro"], a: 0, e: "mcd = 1." },
    { q: "mcm(7, 11) =", o: ["77", "1", "18", "7"], a: 0, e: "Primos entre sí: producto." },
    { q: "Si mcd(a, b) = 4 y a · b = 96, el mcm es…", o: ["24", "384", "100", "92"], a: 0, e: "96 : 4." },
    { q: "«¿Cuándo vuelven a coincidir?» es de…", o: ["mcm", "mcd", "suma", "resta"], a: 0, e: "Ciclos que coinciden." },
    { q: "«Trozos iguales lo más grandes posible» es de…", o: ["mcd", "mcm", "producto", "potencia"], a: 0, e: "Repartir sin que sobre." },
    { q: "En el algoritmo de Euclides el mcd es…", o: ["el último resto no nulo", "el primer cociente", "el primer resto", "el último cociente"], a: 0, e: "Se divide hasta resto 0." },
  ]),
  examen: baraja([
    { q: "¿Cuál es divisible entre 6?", o: ["534", "535", "538", "542"], a: 0, e: "Par y 5 + 3 + 4 = 12." },
    { q: "¿Cuál es compuesto?", o: ["91", "89", "97", "83"], a: 0, e: "91 = 7 · 13." },
    { q: "252 descompuesto es…", o: ["2² · 3² · 7", "2 · 3 · 7", "2³ · 3 · 7", "2² · 3 · 21"], a: 0, e: "4 · 9 · 7." },
    { q: "mcm(12, 30) =", o: ["60", "6", "360", "120"], a: 0, e: "2² · 3 · 5." },
    { q: "mcd(48, 72) =", o: ["24", "12", "144", "8"], a: 0, e: "2³ · 3." },
    { q: "mcd(14, 45) =", o: ["1", "7", "5", "630"], a: 0, e: "No tienen factores comunes." },
    { q: "Dos luces parpadean cada 8 y 12 s. Coinciden cada…", o: ["24 s", "4 s", "96 s", "20 s"], a: 0, e: "mcm(8, 12)." },
    { q: "Cuadrados lo más grandes posible en una placa de 45 × 75 cm. Lado:", o: ["15 cm", "5 cm", "225 cm", "3 cm"], a: 0, e: "mcd(45, 75)." },
  ], 1),
  feynman: ["Por qué el 1 no es primo", "Por qué basta con probar divisores hasta la raíz cuadrada", "Cómo distinguir un problema de mcm de uno de mcd", "Por qué mcm · mcd es el producto de los dos números"],
  figura: {
    titulo: "Divisibilidad en un vistazo",
    svg: resumen("Resumen del tema de divisibilidad", [
      ["Múltiplos", "infinitos · a = b · n · el 0 es múltiplo de todos", "var(--pen)"],
      ["Divisores", "finitos · criterios del 2, 3, 4, 5, 9, 10, 11", "var(--leaf)"],
      ["Primos", "solo 1 y él mismo · infinitos · el 1 no lo es", "var(--sun)"],
      ["mcm", "todos los factores, mayor exponente · coincidir", "var(--inf)"],
      ["mcd", "factores comunes, menor exponente · repartir", "var(--red)"],
    ]),
  },
  video: pvg("divisibilidad"),
  mapa: mapa("DIVISIBILIDAD", "var(--leaf)", [
    ["Múltiplos y divisores", "criterios de divisibilidad", "var(--pen)"],
    ["Primos", "criba · factorización única", "var(--leaf)"],
    ["mcm y mcd", "descomposición · Euclides", "var(--sun)"],
    ["Problemas", "coincidir (mcm) · repartir (mcd)", "var(--red)"],
  ], 250),
  glosario: [
    ["Múltiplo", "Número que se obtiene multiplicando otro por un natural."],
    ["Divisor", "Número que divide a otro de forma exacta."],
    ["Criterio de divisibilidad", "Regla para saber si un número es divisible entre otro sin dividir."],
    ["Número primo", "Natural mayor que 1 con solo dos divisores: 1 y él mismo."],
    ["Número compuesto", "Natural con más de dos divisores."],
    ["Criba de Eratóstenes", "Método para obtener los primos tachando los múltiplos de cada primo."],
    ["Factorización", "Escritura de un número como producto de factores primos."],
    ["Teorema fundamental de la aritmética", "Todo compuesto se descompone de forma única en factores primos."],
    ["mcm", "Mínimo común múltiplo: el menor múltiplo común, distinto de 0, de varios números."],
    ["mcd", "Máximo común divisor: el mayor divisor común de varios números."],
    ["Primos entre sí", "Números cuyo mcd es 1."],
    ["Algoritmo de Euclides", "Método de divisiones sucesivas para calcular el mcd."],
    ["Resto", "Lo que sobra en una división entera; si es 0, la división es exacta."],
  ],
  situacion: {
    titulo: "Diseñamos un mosaico",
    reto: "Vais a diseñar el suelo de una sala real del instituto (aula, pasillo, vestíbulo) con baldosas cuadradas iguales lo más grandes posible y un friso decorativo con motivos que se repiten con distintos periodos.",
    pasos: [
      "Medid el largo y el ancho de la sala en centímetros (redondead a un múltiplo de 5).",
      "Calculad con el mcd el lado de la mayor baldosa cuadrada que encaja sin cortar piezas.",
      "Calculad cuántas baldosas hacen falta y su coste aproximado con precios reales.",
      "Diseñad un friso con dos motivos que se repiten cada cierto número de baldosas y calculad con el mcm dónde coinciden.",
      "Dibujad el plano a escala en papel cuadriculado o con un programa y presentadlo.",
    ],
    producto: "El plano del mosaico con los cálculos de mcd, mcm, número de baldosas y presupuesto.",
    evaluacion: ["Descompone en factores y calcula mcm y mcd correctamente.", "Elige con criterio entre mcm y mcd.", "Interpreta los resultados en la situación real.", "Presenta un plano claro y cuidado."],
  },
  tarjetas: [
    ["a múltiplo de b", "a : b es exacta"], ["Criterio del 3 y del 9", "Suma de cifras"], ["Criterio del 11", "(impares) − (pares) = 0 o múlt. de 11"],
    ["Número primo", "Solo dos divisores"], ["El 1", "Ni primo ni compuesto"], ["¿Es primo n?", "Probar primos hasta √n"],
    ["Factorizar", "Dividir entre el menor primo posible"], ["mcm", "Todos los factores, mayor exponente"], ["mcd", "Comunes, menor exponente"],
    ["Primos entre sí", "mcd = 1"], ["mcm · mcd", "= a · b (dos números)"], ["mcm o mcd", "Coincidir → mcm; repartir → mcd"],
  ],
  familias: ["Buscad números primos en las matrículas de los coches o en los números de las casas.", "Calculad cada cuántos días coinciden dos actividades de la familia (entrenos, compras…).", "Al repartir golosinas en bolsas iguales, preguntad cuántas bolsas se pueden hacer como máximo.", "Jugad a «primo o no primo» con números al azar del 1 al 100."],
  profesores: {
    saberes: "Sentido numérico: divisibilidad, criterios, números primos y compuestos, factorización, mcm y mcd y su aplicación a problemas de la vida cotidiana (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Criba de Eratóstenes colectiva en una tabla de 100.", "Rectángulos con cuadraditos para visualizar divisores.", "Problemas de engranajes y calendarios para el mcm.", "Programar el algoritmo de Euclides en Scratch o una hoja de cálculo."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Magicicada", url: "https://es.wikipedia.org/wiki/Magicicada" }, { t: "Wikipedia: Algoritmo de Euclides", url: "https://es.wikipedia.org/wiki/Algoritmo_de_Euclides" }],
  revisado: REV,
};
