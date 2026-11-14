// Matemáticas 1º ESO · Divisibilidad. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const multiplos = lienzo("Los múltiplos de 3 son los resultados de la tabla del 3: 0, 3, 6, 9, 12, 15… y no se acaban nunca", `
  ${tx(130, 24, "Múltiplos de 3", { fs: 13, c: "var(--muted)" })}
  ${[0, 3, 6, 9, 12, 15, 18, 21].map((n, i) => `<circle cx="${28 + i * 29}" cy="64" r="13" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2"/>${tx(28 + i * 29, 69, n, { fs: 11.5, c: "var(--pen)", max: 24 })}`).join("")}
  ${tx(130, 110, "3 · 0, 3 · 1, 3 · 2, 3 · 3…", { fs: 14, fam: D })}${tx(130, 140, "infinitos múltiplos", { fs: 12, c: "var(--red)" })}${tx(130, 160, "pero solo unos pocos divisores", { fs: 12, c: "var(--muted)" })}`);

const relacion = comparar("Relación de divisibilidad: 24 es múltiplo de 6 y 6 es divisor de 24 porque 24 entre 6 es exacta", [
  ["24 es múltiplo de 6", ["24 = 6 · 4", "está en la tabla del 6", "24 ⋮ 6"], "var(--pen)"],
  ["6 es divisor de 24", ["24 : 6 = 4 resto 0", "6 divide a 24", "6 | 24"], "var(--leaf)"],
], "La misma relación, dos nombres");

const divisores = lienzo("Rectángulos con 12 cuadrados: 1 por 12, 2 por 6 y 3 por 4; los divisores de 12 son 1, 2, 3, 4, 6 y 12", `
  ${[...Array(12)].map((_, i) => `<rect x="${12 + i * 17}" y="18" width="15" height="15" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)"/>`).join("")}
  ${[...Array(12)].map((_, i) => `<rect x="${14 + (i % 6) * 19}" y="${52 + Math.floor(i / 6) * 19}" width="17" height="17" fill="var(--leaf)" fill-opacity=".35" stroke="var(--leaf)"/>`).join("")}
  ${[...Array(12)].map((_, i) => `<rect x="${150 + (i % 4) * 19}" y="${52 + Math.floor(i / 4) * 19}" width="17" height="17" fill="var(--sun)" fill-opacity=".45" stroke="var(--sun)"/>`).join("")}
  ${tx(70, 106, "2 · 6", { fs: 12, c: "var(--leaf)" })}${tx(188, 126, "3 · 4", { fs: 12, c: "var(--sun)" })}${tx(250, 30, "1·12", { fs: 10.5, c: "var(--pen)", a: "end", max: 34 })}
  ${tx(130, 154, "Div(12) = {1, 2, 3, 4, 6, 12}", { fs: 14, fam: D })}`);

const criterios = cajas("Criterios de divisibilidad por 2, 3, 5, 10, 9 y 11", [
  ["Por 2", ["acaba en 0, 2, 4, 6, 8"]], ["Por 3", ["suma de cifras ⋮ 3"]], ["Por 5", ["acaba en 0 o 5"]],
  ["Por 10", ["acaba en 0"]], ["Por 9", ["suma de cifras ⋮ 9"]], ["Por 11", ["pares − impares ⋮ 11"]],
], "Criterios rápidos");

const criba = lienzo("Criba de Eratóstenes del 1 al 30: los números que no se tachan son primos", `
  ${[...Array(30)].map((_, i) => { const n = i + 1, p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].includes(n); return `<rect x="${16 + (i % 10) * 23}" y="${20 + Math.floor(i / 10) * 30}" width="21" height="26" rx="4" fill="${p ? "var(--leaf)" : "var(--card)"}" fill-opacity="${p ? 0.3 : 1}" stroke="${p ? "var(--leaf)" : "var(--line)"}" stroke-width="1.5"/>${tx(26.5 + (i % 10) * 23, 38 + Math.floor(i / 10) * 30, n, { fs: 11, c: p ? "var(--ink)" : "var(--muted)", w: p ? 700 : 400, max: 19 })}`; }).join("")}
  ${tx(130, 132, "primos hasta 30:", { fs: 12, c: "var(--muted)" })}${tx(130, 154, "2 3 5 7 11 13 17 19 23 29", { fs: 13, c: "var(--leaf)", fam: D })}`);

const arbolFact = lienzo("Descomposición de 60 en factores primos: 60 es 2 al cuadrado por 3 por 5", `
  ${tx(130, 26, "60", { fs: 20, fam: D })}<path d="M122 32 L86 54 M138 32 L172 54" stroke="var(--muted)" stroke-width="2"/>
  ${tx(80, 70, "2", { fs: 17, c: "var(--red)", fam: D })}${tx(176, 70, "30", { fs: 17, fam: D })}<path d="M170 76 L140 98 M182 76 L210 98" stroke="var(--muted)" stroke-width="2"/>
  ${tx(136, 114, "2", { fs: 17, c: "var(--red)", fam: D })}${tx(214, 114, "15", { fs: 17, fam: D })}<path d="M208 120 L186 140 M220 120 L240 140" stroke="var(--muted)" stroke-width="2"/>
  ${tx(184, 156, "3", { fs: 17, c: "var(--red)", fam: D })}${tx(240, 156, "5", { fs: 17, c: "var(--red)", fam: D })}
  ${tx(70, 140, "60 = 2² · 3 · 5", { fs: 14, c: "var(--pen)", fam: D, max: 120 })}`);

const columna = pasos("Método de la columna para descomponer 360: se divide entre el menor primo posible hasta llegar a 1", ["360 : 2 = 180", "180 : 2 = 90", "90 : 2 = 45", "45 : 3 = 15 · 15 : 3 = 5", "5 : 5 = 1 → 360 = 2³ · 3² · 5"], "Método de la columna");

const mcm = lienzo("Mínimo común múltiplo de 4 y 6: el primer múltiplo que aparece en las dos listas es 12", `
  ${tx(30, 36, "4:", { fs: 13, c: "var(--pen)" })}${[4, 8, 12, 16, 20, 24].map((n, i) => tx(64 + i * 32, 36, n, { fs: 13, c: n % 12 === 0 ? "var(--red)" : "var(--ink)", max: 28 })).join("")}
  ${tx(30, 70, "6:", { fs: 13, c: "var(--leaf)" })}${[6, 12, 18, 24, 30, 36].map((n, i) => tx(64 + i * 32, 70, n, { fs: 13, c: n % 12 === 0 ? "var(--red)" : "var(--ink)", max: 28 })).join("")}
  <circle cx="128" cy="31" r="14" fill="none" stroke="var(--red)" stroke-width="2"/><circle cx="96" cy="65" r="14" fill="none" stroke="var(--red)" stroke-width="2"/>
  ${tx(130, 116, "mcm(4, 6) = 12", { fs: 18, c: "var(--red)", fam: D })}${tx(130, 146, "el más pequeño de los comunes", { fs: 12, c: "var(--muted)" })}${tx(130, 164, "(sin contar el 0)", { fs: 11, c: "var(--muted)", w: 400 })}`);

const mcd = lienzo("Máximo común divisor de 12 y 18: el mayor divisor que aparece en las dos listas es 6", `
  ${tx(30, 36, "12:", { fs: 13, c: "var(--pen)" })}${[1, 2, 3, 4, 6, 12].map((n, i) => tx(66 + i * 30, 36, n, { fs: 13, c: n === 6 ? "var(--red)" : [1, 2, 3].includes(n) ? "var(--leaf)" : "var(--ink)", max: 26 })).join("")}
  ${tx(30, 70, "18:", { fs: 13, c: "var(--leaf)" })}${[1, 2, 3, 6, 9, 18].map((n, i) => tx(66 + i * 30, 70, n, { fs: 13, c: n === 6 ? "var(--red)" : [1, 2, 3].includes(n) ? "var(--leaf)" : "var(--ink)", max: 26 })).join("")}
  ${tx(130, 112, "comunes: 1, 2, 3, 6", { fs: 13, c: "var(--leaf)" })}${tx(130, 142, "mcd(12, 18) = 6", { fs: 18, c: "var(--red)", fam: D })}`);

const factoriza = comparar("Calcular mcm y mcd con factores primos: el mcm toma comunes y no comunes al mayor exponente, el mcd solo comunes al menor", [
  ["mcm", ["comunes y no comunes", "mayor exponente", "2³ · 3² · 5 = 360"], "var(--red)"],
  ["mcd", ["solo comunes", "menor exponente", "2² · 3 = 12"], "var(--leaf)"],
], "72 = 2³·3²   60 = 2²·3·5");

const cual = comparar("Cómo saber si un problema es de mcm o de mcd", [
  ["mcm", ["coincidir otra vez", "«cada cuánto…»", "el menor número que…", "resultado ≥ datos"], "var(--red)"],
  ["mcd", ["repartir sin sobras", "trozos lo más grandes", "el mayor número que…", "resultado ≤ datos"], "var(--leaf)"],
], "¿mcm o mcd?");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Divisibilidad",
  minutos: 100,
  objetivos: [
    "Reconocer la relación de divisibilidad y calcular múltiplos y divisores",
    "Aplicar los criterios de divisibilidad por 2, 3, 5, 9, 10 y 11",
    "Distinguir números primos y compuestos y descomponer en factores primos",
    "Calcular el mínimo común múltiplo y el máximo común divisor por distintos métodos",
    "Decidir si un problema se resuelve con el mcm o con el mcd y resolverlo",
  ],
  claves: ["múltiplo", "divisor", "criterio de divisibilidad", "número primo", "factorización", "mcm", "mcd"],
  pregunta: {
    texto: "Un faro se enciende cada 12 segundos y otro cada 18. Si acaban de encenderse a la vez, ¿cuándo volverán a coincidir?",
    respuesta: "Hay que buscar el primer número que esté en la tabla del 12 y en la del 18: el <b>mínimo común múltiplo</b>. Múltiplos de 12: 12, 24, <b>36</b>… Múltiplos de 18: 18, <b>36</b>… Coinciden a los <mark>36 segundos</mark>.",
  },
  lectura: {
    titulo: "Las cigarras que saben contar",
    html: `<p>En los bosques del este de Estados Unidos vive una cigarra muy especial. Pasa casi toda su vida bajo tierra, alimentándose de las raíces de los árboles, y solo sale a la superficie cada <b>13</b> o cada <b>17</b> años, según la especie. Cuando por fin aparece, lo hace a la vez que millones de compañeras: el ruido es ensordecedor durante unas semanas.</p><p>¿Por qué 13 y 17, y no 12 o 16? Los biólogos tienen una hipótesis muy matemática. Los depredadores de la cigarra también tienen ciclos: algunos aumentan cada 2, 3, 4 o 6 años. Si la cigarra saliera cada 12 años, coincidiría a menudo con los depredadores de ciclo 2, 3, 4 y 6, porque todos ellos <b>dividen</b> a 12. Pero 13 y 17 son números <b>primos</b>: solo se pueden dividir entre 1 y entre sí mismos. Una cigarra de 17 años solo coincide con un depredador de ciclo 4 cada 68 años.</p><p>Sin saber matemáticas, la evolución ha «elegido» números primos para sobrevivir. En este tema aprenderás qué son los múltiplos y los divisores, cómo se reconocen los números primos y cómo se calcula cuándo coinciden dos ciclos, una herramienta que se usa en horarios, engranajes, calendarios y hasta en la seguridad de internet.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Múltiplos de un número</h3><p>Los <b>múltiplos</b> de un número son los que se obtienen al multiplicarlo por 0, 1, 2, 3, 4… Es decir, son los resultados de su «tabla de multiplicar», que nunca se acaba. Los múltiplos de 3 son 0, 3, 6, 9, 12, 15, 18… y se escriben así: <mark>m(3) = {0, 3, 6, 9, 12…}</mark>, aunque a menudo se escribe con un punto encima: 3̇.</p><p>Algunas propiedades: el 0 es múltiplo de todos los números (porque n · 0 = 0), todo número es múltiplo de sí mismo (n · 1 = n) y un número tiene <b>infinitos</b> múltiplos. Además, si sumas dos múltiplos de 3 (por ejemplo, 12 + 21 = 33), el resultado también es múltiplo de 3.</p><p>Para saber si un número es múltiplo de otro, basta con dividir: 84 es múltiplo de 7 porque 84 : 7 = 12 es exacta. Y 85 no lo es, porque la división da resto 1.</p>`, svg: multiplos },
    { html: `<h3>1.2 Divisores de un número</h3><p>Un número a es <b>divisor</b> de otro número b si la división b : a es <b>exacta</b>. Por ejemplo, 6 es divisor de 24 porque 24 : 6 = 4 con resto 0. Es la misma relación que la de múltiplo, vista al revés: <mark>si 24 es múltiplo de 6, entonces 6 es divisor de 24</mark>. También se dice que 24 es <b>divisible</b> entre 6.</p><p>Los divisores de un número son <b>pocos</b> y siempre <b>menores o iguales</b> que él. El 1 es divisor de todos, y todo número es divisor de sí mismo. Para encontrarlos todos se divide entre 1, 2, 3, 4… y se apuntan por <b>parejas</b>: 1 · 24, 2 · 12, 3 · 8, 4 · 6. Cuando las parejas empiezan a repetirse, has terminado: Div(24) = {1, 2, 3, 4, 6, 8, 12, 24}.</p><p>Una forma de verlo es con rectángulos: los divisores de 12 son las medidas de todos los rectángulos que se pueden formar con 12 cuadraditos.</p>`, svg: divisores },
    { html: `<h3>1.3 La relación de divisibilidad</h3><p>«Ser múltiplo» y «ser divisor» son dos caras de la misma moneda. Entre 24 y 6 se pueden decir cuatro frases equivalentes: 24 es múltiplo de 6; 6 es divisor de 24; 24 es divisible entre 6; 6 divide a 24. Todas significan que <b>24 = 6 · 4</b>, sin que sobre nada.</p><p>Esta relación tiene propiedades útiles. Si un número divide a otros dos, también divide a su suma y a su diferencia: como 5 divide a 35 y a 20, divide a 55 y a 15. Y si a divide a b y b divide a c, entonces a divide a c: como 3 divide a 9 y 9 divide a 72, 3 divide a 72.</p><p>Una advertencia sobre el 0: el 0 es múltiplo de todos, pero no es divisor de ninguno, porque no se puede dividir entre 0. En los ejercicios de divisores, por tanto, el 0 nunca aparece en la lista.</p>`, svg: relacion },
    { html: `<h3>1.4 Criterios de divisibilidad</h3><p>Los <b>criterios de divisibilidad</b> son reglas para saber si un número es divisible entre otro <b>sin hacer la división</b>. Los más útiles son:</p>${tabla(["Entre", "Es divisible si…", "Ejemplo"], [["2", "acaba en 0 o en cifra par", "358"], ["3", "la suma de sus cifras es múltiplo de 3", "471: 4+7+1 = 12"], ["5", "acaba en 0 o en 5", "2 735"], ["9", "la suma de sus cifras es múltiplo de 9", "6 381: 18"], ["10, 100…", "acaba en 0, en 00…", "4 500"], ["11", "(cifras de lugar impar) − (de lugar par), contando desde la derecha, es 0 o múltiplo de 11", "2 728: (8+7) − (2+2) = 11"]])}<p>También hay atajos para el 4 (las dos últimas cifras forman un múltiplo de 4: 1 316 porque 16 lo es) y para el 6 (si es divisible entre 2 <b>y</b> entre 3 a la vez).</p>`, svg: criterios },
    { html: `<h3>1.5 Usar los criterios con soltura</h3><p>Los criterios se usan continuamente: para simplificar fracciones, para descomponer números o para repartir. Veamos el número 5 940. Acaba en 0, así que es divisible entre <b>2</b>, entre <b>5</b> y entre <b>10</b>. La suma de sus cifras es 5 + 9 + 4 + 0 = 18, múltiplo de 9, así que es divisible entre <b>3</b> y entre <b>9</b>. Y como es divisible entre 2 y 3, también entre <b>6</b>.</p><p>Con los criterios se pueden completar cifras que faltan: ¿qué cifra va en 4_2 para que sea múltiplo de 3? Las cifras conocidas suman 6, así que la que falta debe hacer que la suma sea 6, 9, 12 o 15: puede ser 0, 3, 6 o 9.</p><p>¿Por qué funciona el criterio del 3? Porque 10, 100, 1 000… dan resto 1 al dividirlos entre 3 (y entre 9). Así, el resto de 471 entre 3 es el mismo que el de 4 + 7 + 1. Es una pequeña demostración que podrás entender del todo en cursos siguientes.</p>`, video: vb("divB") },
    { html: `<h3>2.1 Números primos y compuestos</h3><p>Un número <b>primo</b> es un número natural mayor que 1 que solo tiene <b>dos divisores</b>: el 1 y él mismo. Por ejemplo, 7 es primo porque solo se puede dividir de forma exacta entre 1 y 7. Un número <b>compuesto</b> tiene más de dos divisores: 9 es compuesto porque se divide entre 1, 3 y 9. El número 1 no es ni primo ni compuesto (solo tiene un divisor).</p><p>Los primos menores que 50 son: <mark>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47</mark>. El 2 es el único primo par: todos los demás pares son divisibles entre 2.</p><p>Hace más de 2 000 años, el griego Euclides demostró que <b>hay infinitos números primos</b>. Hoy se buscan primos gigantes con ordenadores, y son la base de los sistemas que protegen tus contraseñas y compras en internet: multiplicar dos primos enormes es fácil, pero descubrir cuáles eran a partir del resultado es dificilísimo.</p>` },
    { html: `<h3>2.2 La criba de Eratóstenes</h3><p>Para encontrar todos los primos hasta un número, el sabio griego Eratóstenes ideó un método llamado <b>criba</b> (un colador). Se escriben los números del 2 al 100 y:</p><ol><li>Se rodea el 2 y se tachan todos sus múltiplos (4, 6, 8…).</li><li>Se rodea el siguiente número sin tachar, el 3, y se tachan sus múltiplos.</li><li>Se repite con el 5, el 7… Los números que quedan sin tachar son <b>primos</b>.</li></ol><p>Para saber si un número concreto es primo, basta con dividirlo entre los primos 2, 3, 5, 7, 11… hasta que el cociente sea <b>menor</b> que el divisor. ¿Es primo 97? No es divisible entre 2, 3, 5 ni 7, y 97 : 11 da cociente 8, menor que 11. Así que no hace falta probar más: <mark>97 es primo</mark>.</p><p>Este truco ahorra mucho trabajo: para un número menor que 121 solo hay que probar con 2, 3, 5 y 7.</p>`, svg: criba },
    { html: `<h3>2.3 Descomponer en factores primos</h3><p>Todo número compuesto se puede escribir como un <b>producto de números primos</b>, y además de una sola forma (sin contar el orden). Es lo que se llama <b>teorema fundamental de la aritmética</b>: los primos son los «ladrillos» con los que se construyen todos los números.</p><p>Para descomponer se puede hacer un <b>árbol</b>: se parte el número en dos factores cualesquiera y se sigue partiendo cada rama hasta llegar a primos. 60 = 2 · 30 = 2 · 2 · 15 = 2 · 2 · 3 · 5. Agrupando con potencias: <mark>60 = 2² · 3 · 5</mark>.</p><p>Da igual cómo empieces: si partes 60 = 6 · 10 = (2 · 3) · (2 · 5), llegas al mismo resultado. Esa es la gracia del teorema: la descomposición es única, como un DNI del número.</p>`, svg: arbolFact },
    { html: `<h3>2.4 El método de la columna</h3><p>El método más ordenado para descomponer es el de la <b>columna</b>. Se traza una raya vertical; a la izquierda se escribe el número y a la derecha el <b>menor primo</b> que lo divide. Se divide, se escribe el cociente debajo y se repite hasta llegar a 1.</p><p>Por ejemplo, 360: 360 : 2 = 180; 180 : 2 = 90; 90 : 2 = 45; 45 : 3 = 15; 15 : 3 = 5; 5 : 5 = 1. Los primos de la columna derecha son la descomposición: <mark>360 = 2³ · 3² · 5</mark>.</p><p>Consejos: usa los criterios de divisibilidad para elegir el primo, empieza siempre por el 2 y no pases al siguiente primo hasta que el actual ya no divida. Comprueba al final multiplicando: 8 · 9 · 5 = 360 ✓. La descomposición sirve para calcular el mcm y el mcd, simplificar fracciones y hallar raíces.</p>`, svg: columna },
    { html: `<h3>3.1 El mínimo común múltiplo (mcm)</h3><p>Los <b>múltiplos comunes</b> de dos números son los que están en las dos listas de múltiplos. El <b>mínimo común múltiplo</b> es el menor de ellos, sin contar el 0. Para 4 y 6: m(4) = 4, 8, <b>12</b>, 16, 20, <b>24</b>… y m(6) = 6, <b>12</b>, 18, <b>24</b>… Los comunes son 12, 24, 36… y <mark>mcm(4, 6) = 12</mark>.</p><p>Con números pequeños basta con escribir las listas. Con números grandes es mejor usar la <b>descomposición</b>: el mcm es el producto de los factores primos <b>comunes y no comunes</b>, cada uno elevado al <b>mayor exponente</b>. Por ejemplo, 72 = 2³ · 3² y 60 = 2² · 3 · 5, así que mcm(72, 60) = 2³ · 3² · 5 = 360.</p><p>Una comprobación rápida: el mcm es múltiplo de los dos números, así que debe ser mayor o igual que el mayor de ellos. Si uno es múltiplo del otro, el mcm es el mayor: mcm(5, 20) = 20.</p>`, svg: mcm },
    { html: `<h3>3.2 El máximo común divisor (mcd)</h3><p>Los <b>divisores comunes</b> de dos números son los que dividen a ambos, y el <b>máximo común divisor</b> es el mayor de ellos. Para 12 y 18: Div(12) = {1, 2, 3, 4, 6, 12} y Div(18) = {1, 2, 3, 6, 9, 18}. Los comunes son 1, 2, 3 y 6, así que <mark>mcd(12, 18) = 6</mark>.</p><p>Con la descomposición, el mcd es el producto de los factores primos <b>comunes</b> elevados al <b>menor exponente</b>. Para 72 = 2³ · 3² y 60 = 2² · 3 · 5: mcd(72, 60) = 2² · 3 = 12.</p><p>El mcd es siempre menor o igual que el menor de los números. Si dos números no tienen ningún factor primo común, su mcd es 1 y se dicen <b>primos entre sí</b>: mcd(8, 15) = 1, aunque ni 8 ni 15 son primos. Una curiosidad útil: el producto de dos números es igual al producto de su mcm por su mcd: 72 · 60 = 360 · 12 = 4 320.</p>`, svg: mcd, video: vb("divB2") },
    { html: `<h3>3.3 Calcular a la vez mcm y mcd</h3><p>Cuando hay que calcular los dos, lo más eficaz es descomponer una sola vez y aplicar las dos reglas. Resúmelas así:</p><ul><li><b>mcm</b>: <b>todos</b> los factores (comunes y no comunes), con el <b>mayor</b> exponente.</li><li><b>mcd</b>: solo los factores <b>comunes</b>, con el <b>menor</b> exponente.</li></ul><p>Con tres números funciona igual. Para 12 = 2² · 3, 18 = 2 · 3² y 30 = 2 · 3 · 5: mcm = 2² · 3² · 5 = 180 y mcd = 2 · 3 = 6.</p><p>Hay otro método antiguo muy rápido para el mcd, el <b>algoritmo de Euclides</b>: se divide el mayor entre el menor, luego el divisor entre el resto, y así hasta que el resto sea 0. El último divisor es el mcd. Para 72 y 60: 72 : 60 da resto 12; 60 : 12 da resto 0. Así que mcd = 12. ¡Tiene más de 2 300 años y todavía lo usan los ordenadores!</p>`, svg: factoriza },
    { html: `<h3>3.4 ¿mcm o mcd? Resolver problemas</h3><p>Lo más difícil no es calcular, sino saber <b>cuál de los dos</b> usar. Pregúntate qué buscas:</p><ul><li>Si algo se repite y quieres saber cuándo <b>vuelve a coincidir</b> (autobuses, alarmas, turnos), buscas un múltiplo común: es un problema de <b>mcm</b>. El resultado es <b>mayor</b> que los datos.</li><li>Si quieres <b>repartir o cortar</b> en partes iguales, lo más grandes posible y sin que sobre nada, buscas un divisor común: es un problema de <b>mcd</b>. El resultado es <b>menor</b> que los datos.</li></ul><p>Ejemplo de mcd: tienes cintas de 72 cm y 60 cm y quieres cortarlas en trozos iguales lo más largos posible. Trozo = mcd(72, 60) = <mark>12 cm</mark>; salen 6 + 5 = 11 trozos. Ejemplo de mcm: un autobús pasa cada 72 minutos y otro cada 60. Si coinciden a las 8:00, volverán a coincidir a los mcm(72, 60) = 360 minutos, es decir, a las <mark>14:00</mark>.</p>`, svg: cual, video: vg("divV") },
  ],
  ejemplos: [
    { enunciado: "Halla todos los divisores de 36.", pasos: ["Parejas: 1 · 36, 2 · 18, 3 · 12, 4 · 9, 6 · 6.", "Al llegar a 6 · 6, las parejas se repiten."], resultado: "Div(36) = {1, 2, 3, 4, 6, 9, 12, 18, 36}." },
    { enunciado: "¿Es 2 574 divisible entre 2, 3, 5, 9 y 11?", pasos: ["Acaba en 4: divisible entre 2, no entre 5.", "Suma de cifras: 2 + 5 + 7 + 4 = 18 → divisible entre 3 y entre 9.", "Lugares impares 4 + 5 = 9; pares 7 + 2 = 9; 9 − 9 = 0 → divisible entre 11."], resultado: "Sí entre 2, 3, 9 y 11; no entre 5." },
    { enunciado: "¿Es primo 133?", pasos: ["No es divisible entre 2, 3 ni 5.", "133 : 7 = 19 exacta."], resultado: "No: 133 = 7 · 19 es compuesto." },
    { enunciado: "Descompón 840 en factores primos.", pasos: ["840 : 2 = 420; : 2 = 210; : 2 = 105.", "105 : 3 = 35; 35 : 5 = 7; 7 : 7 = 1."], resultado: "840 = 2³ · 3 · 5 · 7." },
    { enunciado: "Calcula mcm y mcd de 48 y 180.", pasos: ["48 = 2⁴ · 3; 180 = 2² · 3² · 5.", "mcm = 2⁴ · 3² · 5 = 720.", "mcd = 2² · 3 = 12."], resultado: "mcm = 720; mcd = 12." },
    { enunciado: "Se quieren poner baldosas cuadradas lo más grandes posible, sin cortar, en un suelo de 360 cm por 280 cm. ¿De qué lado y cuántas?", pasos: ["Repartir sin sobras y lo más grande: mcd.", "360 = 2³ · 3² · 5; 280 = 2³ · 5 · 7 → mcd = 2³ · 5 = 40.", "360 : 40 = 9 y 280 : 40 = 7 → 9 · 7 = 63."], resultado: "Baldosas de 40 cm de lado; hacen falta 63." },
  ],
  errores: [
    "Confundir múltiplo y divisor: 3 es divisor de 12, no múltiplo.",
    "Pensar que el 1 es primo: solo tiene un divisor.",
    "Creer que todos los impares son primos: 9, 15, 21 o 27 son compuestos.",
    "Dejar números compuestos en la descomposición: 60 = 4 · 15 no está terminada.",
    "Tomar el menor exponente en el mcm o el mayor en el mcd: es al revés.",
    "Usar el mcm en un problema de reparto o el mcd en uno de coincidencias.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe los ocho primeros múltiplos de 7 (sin el 0).", sol: "7, 14, 21, 28, 35, 42, 49, 56." },
    { nivel: "básico", q: "Escribe todos los divisores de 30 y de 17.", sol: "Div(30) = {1, 2, 3, 5, 6, 10, 15, 30}. Div(17) = {1, 17}: 17 es primo." },
    { nivel: "básico", q: "¿Es 96 múltiplo de 8? ¿Es 7 divisor de 96? Justifícalo.", sol: "96 : 8 = 12 exacta: sí. 96 : 7 = 13 resto 5: no." },
    { nivel: "básico", q: "Completa con «múltiplo» o «divisor»: 45 es … de 9; 6 es … de 54.", sol: "45 es múltiplo de 9; 6 es divisor de 54." },
    { nivel: "básico", q: "De estos números, ¿cuáles son divisibles entre 3? 124, 402, 5 511, 1 000 002.", sol: "Sumas: 7, 6, 12, 3. Divisibles entre 3: 402, 5 511 y 1 000 002." },
    { nivel: "básico", q: "¿Cuáles son divisibles entre 5 y entre 2 a la vez? 35, 70, 115, 300, 408.", sol: "Deben acabar en 0: 70 y 300." },
    { nivel: "básico", q: "Escribe los números primos entre 50 y 80.", sol: "53, 59, 61, 67, 71, 73, 79." },
    { nivel: "básico", q: "Clasifica en primos y compuestos: 21, 23, 27, 29, 51, 53.", sol: "Primos: 23, 29, 53. Compuestos: 21 = 3 · 7; 27 = 3³; 51 = 3 · 17." },
    { nivel: "básico", q: "Descompón en factores primos: 24, 45, 100.", sol: "24 = 2³ · 3; 45 = 3² · 5; 100 = 2² · 5²." },
    { nivel: "básico", q: "Calcula con listas: mcm(6, 8) y mcd(6, 8).", sol: "m(6): 6, 12, 18, 24; m(8): 8, 16, 24 → mcm = 24. Div(6) = {1,2,3,6}, Div(8) = {1,2,4,8} → mcd = 2." },
    { nivel: "básico", q: "¿Qué número es 2³ · 3 · 5²?", sol: "8 · 3 · 25 = 600." },
    { nivel: "básico", q: "Calcula mcm(5, 20) y mcd(5, 20) sin hacer cuentas largas.", sol: "20 es múltiplo de 5: mcm = 20 y mcd = 5." },
    { nivel: "medio", q: "Completa la cifra que falta en 7_8 para que sea divisible entre 9.", sol: "7 + 8 = 15; la suma debe ser 18: la cifra es 3 (738)." },
    { nivel: "medio", q: "Comprueba con el criterio del 11 si 8 294 y 9 548 son divisibles entre 11.", sol: "8 294: (4 + 2) − (9 + 8) = −11 → sí. 9 548: (8 + 5) − (4 + 9) = 0 → sí." },
    { nivel: "medio", q: "Decide si 143 y 151 son primos, explicando hasta qué primo pruebas.", sol: "143 = 11 · 13: compuesto. 151 no es divisible entre 2, 3, 5, 7, 11; 151 : 13 da cociente 11 < 13: es primo." },
    { nivel: "medio", q: "Descompón 1 260 por el método de la columna.", sol: "1 260 : 2 = 630; : 2 = 315; : 3 = 105; : 3 = 35; : 5 = 7; : 7 = 1. 1 260 = 2² · 3² · 5 · 7." },
    { nivel: "medio", q: "Calcula mcm y mcd de 90 y 84.", sol: "90 = 2 · 3² · 5; 84 = 2² · 3 · 7. mcm = 2² · 3² · 5 · 7 = 1 260. mcd = 2 · 3 = 6." },
    { nivel: "medio", q: "Calcula mcm(12, 15, 20) y mcd(12, 15, 20).", sol: "12 = 2² · 3; 15 = 3 · 5; 20 = 2² · 5. mcm = 2² · 3 · 5 = 60. mcd = 1." },
    { nivel: "medio", q: "¿Son 25 y 36 primos entre sí? ¿Y 21 y 35?", sol: "mcd(25, 36) = 1: sí. mcd(21, 35) = 7: no." },
    { nivel: "medio", q: "Laura va a la piscina cada 6 días y Marcos cada 8. Hoy han coincidido. ¿Dentro de cuántos días volverán a coincidir?", sol: "Coincidencia → mcm(6, 8) = 24 días." },
    { nivel: "medio", q: "Tenemos 48 bombones y 60 caramelos para hacer bolsas iguales, con el mayor número de bolsas posible y sin que sobre nada. ¿Cuántas bolsas y qué lleva cada una?", sol: "Reparto → mcd(48, 60) = 12 bolsas, con 4 bombones y 5 caramelos cada una." },
    { nivel: "medio", q: "Calcula el mcd de 252 y 198 con el algoritmo de Euclides.", sol: "252 : 198 resto 54; 198 : 54 resto 36; 54 : 36 resto 18; 36 : 18 resto 0. mcd = 18." },
    { nivel: "avanzado", q: "Halla el menor número que al dividirlo entre 4, 6 y 9 da siempre resto 1.", sol: "mcm(4, 6, 9) = 36; el número es 36 + 1 = 37." },
    { nivel: "avanzado", q: "Una alarma suena cada 15 min, otra cada 20 y otra cada 25. Si suenan juntas a las 9:00, ¿a qué hora vuelven a sonar juntas?", sol: "mcm(15, 20, 25) = 2² · 3 · 5² = 300 min = 5 h. A las 14:00." },
    { nivel: "avanzado", q: "El mcd de dos números es 6 y su mcm es 72. Uno de ellos es 18. ¿Cuál es el otro?", sol: "a · b = mcm · mcd = 432. El otro: 432 : 18 = 24. Comprobación: mcd(18, 24) = 6 y mcm = 72 ✓." },
    { nivel: "avanzado", q: "¿Cuántos divisores tiene 72 = 2³ · 3²? Escríbelos.", sol: "(3 + 1) · (2 + 1) = 12 divisores: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72." },
    { nivel: "avanzado", q: "Explica por qué un número que termina en 5 nunca puede ser primo, salvo el propio 5.", sol: "Todo número que acaba en 5 es divisible entre 5; si no es el 5, tiene al menos tres divisores (1, 5 y él mismo)." },
    { nivel: "avanzado", q: "Dos engranajes tienen 24 y 36 dientes. ¿Cuántas vueltas da cada uno hasta que vuelven a estar en la posición inicial?", sol: "Dientes que pasan: mcm(24, 36) = 72. El primero da 72 : 24 = 3 vueltas y el segundo 72 : 36 = 2." },
    { nivel: "avanzado", q: "Un patio de 84 m por 60 m se va a rodear de árboles a la misma distancia, la mayor posible, con un árbol en cada esquina. ¿Cada cuántos metros y cuántos árboles?", sol: "mcd(84, 60) = 12 m. Perímetro 288 m : 12 = 24 árboles." },
    { nivel: "avanzado", q: "Busca el error: «mcm(8, 12) = 2² · 3 = 12, porque tomo los factores con menor exponente».", sol: "Para el mcm hay que tomar el mayor exponente: 8 = 2³, 12 = 2² · 3 → mcm = 2³ · 3 = 24. Lo calculado (12 = 2² · 3) no es múltiplo de 8." },
  ],
  quiz: [
    { q: "Un múltiplo de 9 es…", o: ["3", "18", "19", "1"], a: 1, e: "9 · 2." },
    { q: "Un divisor de 20 es…", o: ["3", "40", "5", "6"], a: 2, e: "20 : 5 = 4." },
    { q: "¿Cuántos múltiplos tiene un número?", o: ["Ninguno", "Diez", "Infinitos", "Los mismos que divisores"], a: 2, e: "La tabla no se acaba." },
    { q: "El 0 es…", o: ["divisor de todos", "múltiplo de todos", "primo", "compuesto"], a: 1, e: "n · 0 = 0." },
    { q: "738 es divisible entre…", o: ["5", "9", "10", "4"], a: 1, e: "7 + 3 + 8 = 18." },
    { q: "Un número que acaba en 0 es divisible entre…", o: ["2 y 5", "solo 10", "3", "9"], a: 0, e: "Y entre 10." },
    { q: "Para que 5_1 sea múltiplo de 3, la cifra puede ser…", o: ["1", "2", "3", "4"], a: 2, e: "5 + 3 + 1 = 9." },
    { q: "¿Cuál es primo?", o: ["21", "27", "31", "33"], a: 2, e: "Solo divisible entre 1 y 31." },
    { q: "El único primo par es…", o: ["0", "2", "4", "no hay"], a: 1, e: "Los demás pares son divisibles entre 2." },
    { q: "El 1 es…", o: ["primo", "compuesto", "ni primo ni compuesto", "par"], a: 2, e: "Solo tiene un divisor." },
    { q: "La descomposición de 18 es…", o: ["2 · 9", "2 · 3²", "3 · 6", "2² · 3"], a: 1, e: "Todos los factores primos." },
    { q: "2² · 3 · 5 =", o: ["30", "60", "120", "45"], a: 1, e: "4 · 15." },
    { q: "mcm(3, 4) =", o: ["1", "7", "12", "24"], a: 2, e: "No tienen factores comunes." },
    { q: "mcd(16, 24) =", o: ["4", "8", "48", "2"], a: 1, e: "8 divide a ambos." },
    { q: "Para el mcm se toman…", o: ["solo los comunes", "comunes y no comunes, mayor exponente", "comunes, menor exponente", "los no comunes"], a: 1, e: "Regla del mcm." },
    { q: "Para el mcd se toman…", o: ["comunes con menor exponente", "todos", "los no comunes", "comunes con mayor exponente"], a: 0, e: "Regla del mcd." },
    { q: "Dos números son primos entre sí si…", o: ["los dos son primos", "su mcd es 1", "su mcm es 1", "son consecutivos"], a: 1, e: "Sin factores comunes." },
    { q: "«¿Cuándo vuelven a coincidir?» se resuelve con…", o: ["mcd", "mcm", "una resta", "la media"], a: 1, e: "Múltiplos comunes." },
    { q: "«Trozos iguales lo más grandes posible» se resuelve con…", o: ["mcd", "mcm", "una suma", "la criba"], a: 0, e: "Divisores comunes." },
    { q: "Si mcd(a, b) = 4 y mcm(a, b) = 60, a · b =", o: ["64", "240", "15", "56"], a: 1, e: "a · b = mcm · mcd." },
  ],
  examen: [
    { q: "Div(15) =", o: ["{1, 3, 5, 15}", "{3, 5}", "{15, 30, 45}", "{1, 15}"], a: 0, e: "Parejas 1·15 y 3·5." },
    { q: "¿Qué número es divisible entre 6?", o: ["124", "216", "320", "415"], a: 1, e: "Par y suma 9." },
    { q: "¿Cuál es compuesto?", o: ["41", "43", "47", "49"], a: 3, e: "49 = 7²." },
    { q: "300 =", o: ["2² · 3 · 5²", "2 · 3 · 5²", "3 · 10²", "2² · 3² · 5"], a: 0, e: "4 · 3 · 25." },
    { q: "mcm(10, 15) =", o: ["5", "30", "150", "60"], a: 1, e: "2 · 3 · 5." },
    { q: "mcd(28, 42) =", o: ["7", "14", "84", "2"], a: 1, e: "2 · 7." },
    { q: "Un tren sale cada 20 min y otro cada 30. Si salen juntos, coinciden a los…", o: ["10 min", "50 min", "60 min", "600 min"], a: 2, e: "mcm(20, 30) = 60." },
    { q: "Con 24 rosas y 36 margaritas se hacen ramos iguales, los máximos posibles. ¿Cuántos ramos?", o: ["6", "12", "72", "4"], a: 1, e: "mcd(24, 36) = 12." },
  ],
  feynman: ["Qué diferencia hay entre múltiplo y divisor de un número", "Por qué el 1 no es primo y el 2 sí", "Cómo se calcula el mcm y el mcd con factores primos", "Cómo saber si un problema pide el mcm o el mcd"],
  figura: {
    titulo: "La divisibilidad en un vistazo",
    svg: resumen("Resumen del tema de divisibilidad", [
      ["Relación", "a es divisor de b ⇔ b es múltiplo de a ⇔ b : a exacta", "var(--pen)"],
      ["Criterios", "2: par · 3 y 9: suma de cifras · 5: 0 o 5 · 11: alternada", "var(--sun)"],
      ["Primos", "solo dos divisores: 2, 3, 5, 7, 11, 13… (infinitos)", "var(--leaf)"],
      ["mcm", "comunes y no comunes, mayor exponente · coincidir", "var(--red)"],
      ["mcd", "solo comunes, menor exponente · repartir", "var(--inf)"],
    ]),
  },
  video: vg("divV"),
  mapa: mapa("DIVISIBILIDAD", "var(--leaf)", [
    ["Múltiplos y divisores", "b = a · n · división exacta", "var(--pen)"],
    ["Criterios", "2, 3, 5, 9, 10, 11", "var(--sun)"],
    ["Primos", "criba · factorización", "var(--leaf)"],
    ["mcm y mcd", "coincidir · repartir", "var(--red)"],
  ], 250),
  glosario: [
    ["Múltiplo", "Número que se obtiene al multiplicar otro por un natural."],
    ["Divisor", "Número que divide a otro de forma exacta."],
    ["Divisible", "Que se puede dividir de forma exacta entre otro número."],
    ["Criterio de divisibilidad", "Regla para saber si un número es divisible sin dividir."],
    ["Número primo", "Natural mayor que 1 con solo dos divisores: 1 y él mismo."],
    ["Número compuesto", "Natural que tiene más de dos divisores."],
    ["Criba de Eratóstenes", "Método para encontrar los primos tachando múltiplos."],
    ["Factorización", "Escritura de un número como producto de primos."],
    ["Múltiplo común", "Número que es múltiplo de varios números a la vez."],
    ["mcm", "El menor múltiplo común (distinto de 0)."],
    ["Divisor común", "Número que divide a varios números a la vez."],
    ["mcd", "El mayor divisor común."],
    ["Primos entre sí", "Números cuyo mcd es 1."],
    ["Algoritmo de Euclides", "Método de divisiones sucesivas para calcular el mcd."],
  ],
  situacion: {
    titulo: "El horario de los autobuses del barrio",
    reto: "Vais a estudiar dos o tres líneas de autobús (o de metro) cercanas al instituto para averiguar cuándo coinciden en una parada y proponer un horario mejor.",
    pasos: [
      "Buscad la frecuencia real de dos o tres líneas que compartan parada (en la web de la empresa o preguntando).",
      "Calculad con el mcm cada cuánto coinciden y a qué horas ocurrirá a lo largo de una mañana.",
      "Representadlo en una línea del tiempo con un color por línea.",
      "Proponed frecuencias nuevas que hagan coincidir los autobuses más a menudo (o menos, si molesta) y justificadlo con el mcm.",
      "Inventad un problema de reparto relacionado (por ejemplo, de plazas o billetes) que se resuelva con el mcd.",
    ],
    producto: "Un póster con la línea del tiempo, los cálculos y la propuesta de horario.",
    evaluacion: ["Identifica correctamente cuándo se necesita el mcm o el mcd.", "Calcula el mcm y el mcd por factorización sin errores.", "Representa los datos de forma clara.", "Argumenta la propuesta con razonamientos matemáticos."],
  },
  tarjetas: [
    ["Múltiplo de a", "a · 0, a · 1, a · 2… (infinitos)"], ["Divisor de b", "Divide a b de forma exacta"], ["Criterio del 3", "Suma de cifras múltiplo de 3"],
    ["Criterio del 11", "Lugares impares − pares: 0 o múltiplo de 11"], ["Número primo", "Solo dos divisores"], ["¿Es el 1 primo?", "No"],
    ["Primos < 30", "2, 3, 5, 7, 11, 13, 17, 19, 23, 29"], ["Factorizar", "Producto de primos (único)"], ["mcm", "Comunes y no comunes, mayor exponente"],
    ["mcd", "Solo comunes, menor exponente"], ["Primos entre sí", "mcd = 1"], ["a · b", "= mcm(a, b) · mcd(a, b)"],
  ],
  familias: ["Buscad en casa ciclos que coincidan (pastillas, riego de plantas, turnos) y calculad cuándo vuelven a juntarse.", "Jugad a «¿primo o compuesto?» con las matrículas de los coches.", "Al repartir comida o cromos, preguntad cuál es el reparto más grande sin que sobre nada.", "Haced juntos la criba de Eratóstenes hasta 100 en una hoja cuadriculada."],
  profesores: {
    saberes: "Sentido numérico: relaciones de divisibilidad, múltiplos y divisores, criterios, números primos y compuestos, descomposición factorial, mcm y mcd y su aplicación a problemas (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Construir rectángulos con fichas para descubrir divisores y números primos.", "Criba de Eratóstenes colectiva en una cuadrícula de 100.", "Engranajes de cartón para comprobar el mcm.", "Debate: ¿por qué las cigarras periódicas usan números primos?"],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): divisibilidad", url: "https://proyectodescartes.org/" }, { t: "Wikipedia: Criba de Eratóstenes", url: "https://es.wikipedia.org/wiki/Criba_de_Eratóstenes" }],
  revisado: REV,
};
