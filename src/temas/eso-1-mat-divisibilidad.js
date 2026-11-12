// Matemáticas 1º ESO: divisibilidad. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, rejilla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Divisibilidad",
  minutos: 55,
  objetivos: ["Reconocer múltiplos y divisores de un número", "Aplicar los criterios de divisibilidad por 2, 3, 5, 9, 10 y 11", "Distinguir números primos y compuestos y descomponer en factores primos", "Calcular el mcm y el mcd y usarlos en problemas"],
  claves: ["múltiplo", "divisor", "número primo", "factorización", "mínimo común múltiplo", "máximo común divisor"],
  pregunta: {
    texto: "Tienes 24 caramelos de fresa y 36 de limón y quieres hacer bolsas iguales, sin mezclar sabores y sin que sobre ninguno. ¿Cuántos caramelos como máximo puede llevar cada bolsa?",
    respuesta: "Hay que buscar el mayor número que divida a la vez a 24 y a 36: el <b>máximo común divisor</b>. mcd(24, 36) = 12, así que <mark>cada bolsa lleva 12 caramelos</mark>: 2 bolsas de fresa y 3 de limón.",
  },
  bloques: [
    {
      html: `<h3>Múltiplos y divisores</h3><p>Decimos que <b>a es múltiplo de b</b> si a se obtiene multiplicando b por un número natural. Y entonces <b>b es divisor de a</b>: la división a : b es <mark>exacta</mark>.</p><p>Ejemplo: 12 = 3 · 4, así que 12 es múltiplo de 3 y 3 es divisor de 12. También se dice que 12 «es divisible por» 3.</p><ul><li>Los <b>múltiplos</b> de un número son <b>infinitos</b>: múltiplos de 5 → 0, 5, 10, 15, 20…</li><li>Los <b>divisores</b> son <b>finitos</b>: divisores de 18 → 1, 2, 3, 6, 9, 18.</li></ul><p>El 1 es divisor de todos los números y todo número es divisor y múltiplo de sí mismo.</p>`,
      svg: svg("Doce cuadraditos ordenados en un rectángulo de 3 por 4: 12 es múltiplo de 3 y de 4", `<rect x="30" y="40" width="112" height="84" fill="var(--pen)" fill-opacity=".2"/>${rejilla(30, 40, 4, 3, 28, "var(--pen)")}${t(86, 32, "4", { c: "var(--pen)", s: 13 })}${t(20, 86, "3", { c: "var(--pen)", s: 13 })}${t(200, 74, "12 = 3 · 4", { s: 16, d: true })}${t(200, 100, "múltiplo de 3 y de 4", { c: "var(--muted)", s: 10 })}${t(130, 160, "3 y 4 son divisores de 12", { c: "var(--leaf)", s: 12 })}`),
      video: vb("divB"),
    },
    {
      html: `<h3>Criterios de divisibilidad</h3><p>Sirven para saber si un número es divisible por otro <b>sin hacer la división</b>:</p>${tabla(["Por", "Si…", "Ejemplo"], [["2", "acaba en 0, 2, 4, 6 u 8", "358"], ["3", "la suma de sus cifras es múltiplo de 3", "471 → 12"], ["5", "acaba en 0 o en 5", "2 315"], ["9", "la suma de sus cifras es múltiplo de 9", "738 → 18"], ["10", "acaba en 0", "4 560"], ["11", "(suma cifras pares) − (suma impares) es 0 o múltiplo de 11", "2 728 → 9 − 9 = 0"]])}<p>Para el 11 se suman por separado las cifras de lugar par y de lugar impar y se restan.</p>`,
    },
    {
      html: `<h3>Números primos y compuestos</h3><ul><li>Un número es <b>primo</b> si tiene <mark>exactamente dos divisores</mark>: el 1 y él mismo. 2, 3, 5, 7, 11, 13…</li><li>Es <b>compuesto</b> si tiene más de dos divisores. 12 tiene seis.</li><li>El <b>1</b> no es primo ni compuesto (solo tiene un divisor).</li></ul><p>El 2 es el único primo par. Para saber si un número es primo, se divide entre los primos 2, 3, 5, 7… hasta que el cociente sea menor que el divisor. Si ninguna división es exacta, es primo.</p><p>La <b>criba de Eratóstenes</b> los encuentra todos hasta un número: se tachan los múltiplos de 2, de 3, de 5, de 7… y lo que queda sin tachar son primos.</p>`,
      svg: (() => { const P = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]; let s = ""; for (let n = 1; n <= 30; n++) { const i = n - 1, x = 22 + (i % 10) * 22, y = 34 + Math.floor(i / 10) * 30; const p = P.includes(n); s += `<rect x="${x - 10}" y="${y - 14}" width="20" height="22" rx="4" fill="${p ? "var(--leaf)" : "var(--card)"}" fill-opacity="${p ? 0.35 : 1}" stroke="${p ? "var(--leaf)" : "var(--line)"}"/>${t(x, y + 2, String(n), { s: 10, c: p ? "var(--ink)" : "var(--muted)" })}`; } return svg("Criba de los números del 1 al 30 con los primos marcados: 2, 3, 5, 7, 11, 13, 17, 19, 23 y 29", `${s}${t(130, 140, "primos hasta 30: diez", { c: "var(--leaf)", s: 12 })}${t(130, 160, "el 1 no es primo", { c: "var(--muted)", s: 11 })}`); })(),
    },
    {
      html: `<h3>Descomponer en factores primos</h3><p>Todo número compuesto se puede escribir como <b>producto de números primos</b> de una sola manera. Es como su «DNI».</p><p>Método: se divide entre el menor primo posible, el cociente otra vez, y así hasta llegar a 1. Se suele escribir en dos columnas:</p><p style="text-align:center">60 | 2 → 30 | 2 → 15 | 3 → 5 | 5 → 1</p><p>Así, <mark>60 = 2² · 3 · 5</mark>. Se escriben los factores repetidos como potencias. Comprobación: 4 · 3 · 5 = 60.</p>`,
      svg: svg("Descomposición de 60 en dos columnas: 60, 30, 15, 5, 1 a la izquierda y 2, 2, 3, 5 a la derecha", `<path d="M130 24 V 150" stroke="var(--ink)" stroke-width="2"/>${[["60", "2"], ["30", "2"], ["15", "3"], ["5", "5"], ["1", ""]].map(([a, b], i) => `${t(110, 40 + i * 24, a, { s: 14, a: "end" })}${t(146, 40 + i * 24, b, { s: 14, a: "start", c: "var(--red)" })}`).join("")}${t(210, 90, "2² · 3 · 5", { s: 13, c: "var(--red)" })}${t(130, 170, "60 = 4 · 3 · 5", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>El mínimo común múltiplo (mcm)</h3><p>El <b>mcm</b> de varios números es el <mark>menor múltiplo común</mark> distinto de 0.</p><p>Con números pequeños se pueden listar múltiplos: de 4 → 4, 8, <b>12</b>, 16…; de 6 → 6, <b>12</b>, 18… → mcm(4, 6) = 12.</p><p>Con factores primos: se descomponen y se toman los factores <b>comunes y no comunes</b> con el <b>mayor exponente</b>.</p><p>mcm(12, 18): 12 = 2² · 3 y 18 = 2 · 3² → 2² · 3² = <b>36</b>.</p><p>Se usa cuando algo <b>se repite</b> y queremos saber cuándo <b>coincide</b> otra vez.</p>`,
    },
    {
      html: `<h3>El máximo común divisor (mcd)</h3><p>El <b>mcd</b> de varios números es el <mark>mayor divisor común</mark>.</p><p>Listando divisores: de 12 → 1, 2, 3, 4, <b>6</b>, 12; de 18 → 1, 2, 3, <b>6</b>, 9, 18 → mcd(12, 18) = 6.</p><p>Con factores primos: se toman solo los factores <b>comunes</b> con el <b>menor exponente</b>. 12 = 2² · 3 y 18 = 2 · 3² → 2 · 3 = <b>6</b>.</p><p>Si el mcd de dos números es 1, se llaman <b>primos entre sí</b> (como 8 y 15, aunque ninguno sea primo).</p><p>Se usa para <b>repartir</b> o <b>dividir</b> en partes iguales lo más grandes posible.</p>`,
      video: vb("divB2"),
    },
    {
      html: `<h3>¿mcm o mcd? Saber cuál usar</h3>${tabla(["Pista en el problema", "Se usa", "Ejemplo"], [["«cada cuánto coinciden», «la próxima vez juntos»", "mcm", "dos autobuses que salen cada 12 y 18 min"], ["«el menor número que…», «una cantidad que se pueda repartir en grupos de 4, 6…»", "mcm", "menor número de cromos que se reparte entre 4 o 6"], ["«lo más grande posible», «repartir sin que sobre»", "mcd", "cortar cuerdas de 24 y 36 m en trozos iguales"], ["«el mayor número de grupos iguales»", "mcd", "hacer equipos con 18 chicos y 24 chicas"]])}<p>Truco: el mcm suele dar un número <b>mayor</b> que los datos y el mcd, uno <b>menor</b>.</p>`,
    },
    {
      html: `<h3>Problemas resueltos de mcm y mcd</h3><p><b>Faros</b>: un faro se enciende cada 12 s y otro cada 20 s. Si coinciden ahora, ¿cuándo vuelven a coincidir? Se repiten → mcm(12, 20). 12 = 2² · 3; 20 = 2² · 5 → mcm = 2² · 3 · 5 = <b>60 s</b>, es decir, dentro de un minuto.</p><p><b>Baldosas</b>: queremos cubrir un suelo de 240 cm × 180 cm con baldosas cuadradas lo más grandes posible y sin cortar. Lado = mcd(240, 180). 240 = 2⁴ · 3 · 5; 180 = 2² · 3² · 5 → mcd = 2² · 3 · 5 = <b>60 cm</b>. Hacen falta 4 · 3 = 12 baldosas.</p>`,
    },
  ],
  figura: {
    titulo: "Divisibilidad en un vistazo",
    svg: filas("Resumen: múltiplos infinitos y divisores finitos; criterios de divisibilidad; primos con dos divisores; factorización; mcm comunes y no comunes con mayor exponente; mcd comunes con menor exponente", [["Múltiplos", "infinitos: 0, b, 2b, 3b…", "var(--pen)"], ["Divisores", "finitos; división exacta", "var(--inf)"], ["Criterios", "2, 3, 5, 9, 10 y 11", "var(--sun)"], ["Primo", "solo dos divisores: 1 y él", "var(--leaf)"], ["mcm", "comunes y no comunes, mayor exp.", "var(--red)"], ["mcd", "solo comunes, menor exp.", "var(--ink)"]], 200),
  },
  video: vg("divV"),
  quiz: mezcla([
    { q: "¿Cuál es múltiplo de 7?", o: ["63", "57", "71"], a: 0, e: "7 · 9." },
    { q: "Divisores de 15:", o: ["1, 3, 5, 15", "1, 15", "3, 5"], a: 0, e: "Todos los que dividen exacto." },
    { q: "¿Qué número es divisible por 3?", o: ["741", "742", "745"], a: 0, e: "7 + 4 + 1 = 12." },
    { q: "¿Qué número es divisible por 9?", o: ["5 418", "5 417", "5 410"], a: 0, e: "Suma 18." },
    { q: "¿Cuál es primo?", o: ["31", "33", "39"], a: 0, e: "Solo 1 y 31." },
    { q: "El 1 es…", o: ["ni primo ni compuesto", "primo", "compuesto"], a: 0, e: "Un solo divisor." },
    { q: "72 en factores primos:", o: ["2³ · 3²", "2² · 3³", "8 · 9"], a: 0, e: "8 · 9 = 2³ · 3²." },
    { q: "mcm(6, 8) =", o: ["24", "48", "2"], a: 0, e: "2³ · 3." },
    { q: "mcd(20, 30) =", o: ["10", "60", "5"], a: 0, e: "2 · 5." },
    { q: "Dos alarmas suenan cada 15 y cada 10 min. ¿Cuándo coinciden?", o: ["cada 30 min", "cada 5 min", "cada 150 min"], a: 0, e: "mcm." },
  ]),
  examen: mezcla([
    { q: "¿Es 4 829 divisible por 11?", o: ["sí", "no", "solo si es par"], a: 0, e: "(4 + 2) − (8 + 9) = −11." },
    { q: "mcm(12, 15, 20) =", o: ["60", "120", "3"], a: 0, e: "2² · 3 · 5." },
    { q: "Con 45 rosas y 60 claveles, ¿cuántos ramos iguales como máximo, sin sobrar flores?", o: ["15", "5", "180"], a: 0, e: "mcd(45, 60)." },
  ]),
  feynman: ["Diferencia entre múltiplo y divisor", "Cómo saber si un número es divisible por 3", "Por qué el 1 no es primo", "Cómo se calcula el mcm con factores primos", "Cómo distinguir un problema de mcm de uno de mcd"],
  mapa: mapa("DIVISIBILIDAD", "var(--eso)", [
    ["Múltiplos y divisores", "división exacta", "var(--pen)"],
    ["Criterios", "2 · 3 · 5 · 9 · 10 · 11", "var(--sun)"],
    ["Primos", "factorización única", "var(--leaf)"],
    ["mcm y mcd", "coincidir · repartir", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Múltiplo", "a = b · n: a es múltiplo de b."],
    ["Divisor", "b divide a a si la división es exacta."],
    ["Criterio del 3", "La suma de las cifras es múltiplo de 3."],
    ["Número primo", "Solo dos divisores: 1 y él mismo."],
    ["Compuesto", "Más de dos divisores."],
    ["mcm", "Comunes y no comunes, mayor exponente."],
    ["mcd", "Solo comunes, menor exponente."],
    ["Primos entre sí", "Su mcd es 1."],
  ],
  familias: ["Buscad en matrículas de coche números divisibles por 3 o por 9.", "Planificad turnos: si uno friega cada 2 días y otro cada 3, ¿cuándo coinciden?", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Divisibilidad: múltiplos y divisores, criterios, números primos y compuestos, descomposición factorial, mcm y mcd y resolución de problemas (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Criba de Eratóstenes en papel o en hoja de cálculo.", "Rectángulos con cuadraditos para ver divisores.", "Problemas de semáforos y autobuses con datos reales del barrio."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): divisibilidad", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Halla el mcm y el mcd de 36 y 48.", pasos: ["36 = 2² · 3² y 48 = 2⁴ · 3.", "mcm: comunes y no comunes con mayor exponente → 2⁴ · 3² = 144.", "mcd: comunes con menor exponente → 2² · 3 = 12."], resultado: "mcm = 144; mcd = 12." },
    { enunciado: "¿Es 91 un número primo?", pasos: ["No es divisible por 2, 3 ni 5.", "91 : 7 = 13, división exacta.", "Tiene más divisores que 1 y 91."], resultado: "No: 91 = 7 · 13, es compuesto." },
    { enunciado: "Ana va a la piscina cada 4 días y Luis cada 6. Hoy coinciden. ¿Dentro de cuántos días volverán a coincidir?", pasos: ["Se repiten: hay que buscar el mcm.", "4 = 2² y 6 = 2 · 3.", "mcm = 2² · 3 = 12."], resultado: "Dentro de 12 días." },
  ],
  errores: [
    "Decir que el 1 es primo.",
    "Confundir «múltiplo de» con «divisor de».",
    "En el mcm tomar solo los factores comunes, o en el mcd tomar los no comunes.",
    "Usar el mcm en un problema de repartir en partes lo más grandes posible.",
    "Olvidar escribir como potencia los factores repetidos.",
  ],
  ejercicios: [
    { q: "Escribe los cinco primeros múltiplos de 9 distintos de 0.", sol: "9, 18, 27, 36, 45." },
    { q: "Escribe todos los divisores de 36.", sol: "1, 2, 3, 4, 6, 9, 12, 18, 36." },
    { q: "Di si 2 310 es divisible por 2, 3, 5, 10 y 11.", sol: "Por 2, 3 (suma 6), 5 y 10 sí; por 11 sí: (2 + 1) − (3 + 0) = 0." },
    { q: "¿Qué cifra pondrías en 4_7 para que sea múltiplo de 3? Da todas las opciones.", sol: "4 + 7 = 11: la cifra puede ser 1, 4 o 7." },
    { q: "Escribe los números primos entre 30 y 50.", sol: "31, 37, 41, 43 y 47." },
    { q: "Descompón en factores primos 84 y 150.", sol: "84 = 2² · 3 · 7; 150 = 2 · 3 · 5²." },
    { q: "Calcula mcm(10, 15, 25).", sol: "2 · 3 · 5² = 150." },
    { q: "Calcula mcd(42, 56).", sol: "42 = 2 · 3 · 7; 56 = 2³ · 7 → 2 · 7 = 14." },
    { q: "Hay que cortar dos listones de 90 y 120 cm en trozos iguales lo más largos posible. ¿Cuánto mide cada trozo y cuántos salen?", sol: "mcd = 30 cm; 3 + 4 = 7 trozos." },
    { q: "¿Cuál es el menor número de canicas que se puede repartir en bolsas de 6, de 8 o de 10 sin que sobre ninguna?", sol: "mcm(6, 8, 10) = 120 canicas." },
  ],
};
