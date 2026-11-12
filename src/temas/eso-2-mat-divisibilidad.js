// Matemáticas 2º ESO: divisibilidad, mcm y mcd. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Divisibilidad: mcm y mcd",
  minutos: 55,
  objetivos: ["Reconocer múltiplos y divisores y aplicar los criterios de divisibilidad", "Distinguir números primos y compuestos", "Descomponer un número en factores primos", "Calcular el mcm y el mcd y usarlos para resolver problemas"],
  claves: ["múltiplo", "divisor", "número primo", "factorización", "mínimo común múltiplo", "máximo común divisor"],
  pregunta: {
    texto: "Un autobús pasa cada 12 minutos y otro cada 18. Si acaban de coincidir en la parada, ¿cuándo volverán a coincidir?",
    respuesta: "Dentro de <mark>36 minutos</mark>, que es el <b>mínimo común múltiplo</b> de 12 y 18. El primero pasa a los 12, 24, 36… y el segundo a los 18, 36… El primer número que aparece en las dos listas es el 36.",
  },
  bloques: [
    {
      html: `<h3>Múltiplos y divisores</h3><p>Un número <b>a</b> es <b>múltiplo</b> de <b>b</b> si se obtiene multiplicando b por un natural: 35 es múltiplo de 7 porque 7 · 5 = 35. Los múltiplos de un número son <mark>infinitos</mark>: los de 6 son 6, 12, 18, 24…</p><p>Al revés, <b>b</b> es <b>divisor</b> de <b>a</b> si la división a : b es <b>exacta</b> (resto 0). Los divisores de un número son <mark>finitos</mark>: los de 12 son 1, 2, 3, 4, 6 y 12. Para encontrarlos todos, se buscan por parejas: 1 · 12, 2 · 6, 3 · 4.</p><p>«7 es divisor de 35» y «35 es múltiplo de 7» dicen lo mismo; también se dice que 35 es <b>divisible</b> entre 7.</p>`,
      svg: svg("Doce cuadrados colocados en rectángulos de 1 por 12, 2 por 6 y 3 por 4: los divisores de 12", `${[...Array(12)].map((_, i) => `<rect x="${14 + i * 19}" y="24" width="17" height="17" rx="3" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)"/>`).join("")}
        ${[...Array(12)].map((_, i) => `<rect x="${20 + (i % 6) * 19}" y="${70 + Math.floor(i / 6) * 19}" width="17" height="17" rx="3" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)"/>`).join("")}
        ${[...Array(12)].map((_, i) => `<rect x="${160 + (i % 4) * 19}" y="${66 + Math.floor(i / 4) * 19}" width="17" height="17" rx="3" fill="var(--sun)" fill-opacity=".35" stroke="var(--sun)"/>`).join("")}
        ${t(130, 60, "1 × 12", { c: "var(--pen)", s: 12 })}${t(77, 128, "2 × 6", { c: "var(--leaf)", s: 12 })}${t(197, 140, "3 × 4", { c: "var(--sun)", s: 12 })}${t(130, 166, "divisores de 12: 1, 2, 3, 4, 6, 12", { s: 12 })}`),
    },
    {
      html: `<h3>Criterios de divisibilidad</h3><p>Permiten saber si una división es exacta <b>sin hacerla</b>:</p>${tabla(["Entre", "Es divisible si…", "Ejemplo"], [["2", "termina en 0 o cifra par", "348"], ["3", "la suma de sus cifras es múltiplo de 3", "471 → 4+7+1 = 12"], ["4", "sus dos últimas cifras son múltiplo de 4 o 00", "1.316 → 16"], ["5", "termina en 0 o 5", "2.045"], ["6", "es divisible entre 2 y entre 3", "534"], ["9", "la suma de sus cifras es múltiplo de 9", "3.483 → 18"], ["10", "termina en 0", "790"], ["11", "(suma cifras pares) − (suma impares) es 0 o múltiplo de 11", "2.937 → (2+3) − (9+7) = −11"]])}`,
      video: { id: "oWXy0k0xaa4", titulo: "Criterios de divisibilidad del 2 al 11", canal: "Academia Internet", vistas: 581086 },
    },
    {
      html: `<h3>Números primos y compuestos</h3><p>Un número <b>primo</b> solo tiene <mark>dos divisores</mark>: el 1 y él mismo. Los primos menores que 50 son 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 y 47. El 2 es el único primo par.</p><p>Un número <b>compuesto</b> tiene más de dos divisores: 15 = 3 · 5. El <b>1</b> no es primo ni compuesto.</p><p>Para saber si un número es primo, se divide entre los primos 2, 3, 5, 7… hasta que el cociente sea menor que el divisor. Si ninguna división es exacta, es primo. Ejemplo: 97 no es divisible entre 2, 3, 5 ni 7, y 97 : 11 da 8, menor que 11, así que <b>97 es primo</b>.</p><p>La <b>criba de Eratóstenes</b> es un método antiguo para encontrar los primos de una tabla: se tachan los múltiplos de 2, de 3, de 5, de 7…, y los que quedan sin tachar son primos.</p>`,
    },
    {
      html: `<h3>Descomposición en factores primos</h3><p>Todo número compuesto se puede escribir como <b>producto de primos</b> de una sola forma. Se divide entre el primo más pequeño posible, una y otra vez, hasta llegar a 1:</p>${tabla(["Número", "Primo"], [["360", "2"], ["180", "2"], ["90", "2"], ["45", "3"], ["15", "3"], ["5", "5"], ["1", ""]])}<p>Así, <mark>360 = 2³ · 3² · 5</mark>. Se escribe con potencias para abreviar. Comprobación: 8 · 9 · 5 = 360.</p>`,
      svg: svg("Árbol de factores de 60: 60 es 6 por 10, 6 es 2 por 3 y 10 es 2 por 5; 60 = 2² · 3 · 5", `<g stroke="var(--line)" stroke-width="2.5"><path d="M130 40 L 80 76 M130 40 L 180 76 M80 90 L 52 126 M80 90 L 108 126 M180 90 L 152 126 M180 90 L 208 126"/></g>
        <circle cx="130" cy="34" r="16" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>${t(130, 39, "60", { c: "var(--pen)", s: 13 })}
        <circle cx="80" cy="86" r="14" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>${t(80, 91, "6", { s: 13 })}<circle cx="180" cy="86" r="14" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>${t(180, 91, "10", { s: 13 })}
        ${[[52, "2"], [108, "3"], [152, "2"], [208, "5"]].map(([x, n]) => `<circle cx="${x}" cy="134" r="13" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>${t(x, 139, n, { c: "var(--leaf)", s: 13 })}`).join("")}
        ${t(130, 170, "60 = 2² · 3 · 5", { s: 14 })}`),
    },
    {
      html: `<h3>El mínimo común múltiplo (mcm)</h3><p>El <b>mcm</b> de varios números es el <mark>menor de sus múltiplos comunes</mark> (sin contar el 0). Con números pequeños se pueden escribir los múltiplos: de 4 → 4, 8, <b>12</b>, 16…; de 6 → 6, <b>12</b>, 18… mcm(4, 6) = 12.</p><p>Con números grandes se usa la <b>factorización</b>: el mcm es el producto de los factores primos <b>comunes y no comunes</b>, cada uno con su <b>mayor exponente</b>.</p><p>Ejemplo: 12 = 2² · 3 y 18 = 2 · 3². mcm = 2² · 3² = <b>36</b>.</p>`,
      video: { id: "ADcPfyt6LvY", titulo: "Mínimo común múltiplo (mcm) con descomposición en factores", canal: "Susi Profe", vistas: 1012086 },
    },
    {
      html: `<h3>El máximo común divisor (mcd)</h3><p>El <b>mcd</b> de varios números es el <mark>mayor de sus divisores comunes</mark>. Divisores de 12: 1, 2, 3, <b>4</b>… 6, 12; divisores de 20: 1, 2, <b>4</b>, 5, 10, 20. mcd(12, 20) = 4.</p><p>Con factorización: el mcd es el producto de los factores primos <b>comunes</b>, cada uno con su <b>menor exponente</b>.</p><p>Ejemplo: 48 = 2⁴ · 3 y 180 = 2² · 3² · 5. mcd = 2² · 3 = <b>12</b>.</p><p>Si el mcd de dos números es 1, se dice que son <b>primos entre sí</b>, aunque no sean primos: 8 y 15.</p>`,
    },
    {
      html: `<h3>¿mcm o mcd? Cómo elegir</h3>${tabla(["", "mcm", "mcd"], [["Pregunta típica", "¿Cuándo vuelven a coincidir?", "¿Cuál es el trozo o grupo más grande?"], ["Idea", "repetir, juntar, ir hacia delante", "repartir, cortar, dividir en partes iguales"], ["Resultado", "mayor o igual que los números", "menor o igual que los números"], ["Factores", "comunes y no comunes, mayor exponente", "solo comunes, menor exponente"]])}<p>Un dato útil: para dos números, <mark>mcm(a, b) · mcd(a, b) = a · b</mark>. Con 12 y 18: 36 · 6 = 216 = 12 · 18.</p>`,
      video: { id: "TKxOWO7o6SQ", titulo: "Cuándo usar MCM y MCD en problemas", canal: "Susi Profe", vistas: 1043840 },
    },
    {
      html: `<h3>Problemas de mcm</h3><p>Se usan cuando algo se <b>repite</b> con ritmos distintos y se busca la <b>próxima coincidencia</b>:</p><ul><li>Dos faros se encienden cada 10 y cada 15 segundos. Coinciden cada mcm(10, 15) = <b>30 s</b>.</li><li>Ana va a la biblioteca cada 4 días y Luis cada 6. Si hoy coinciden, volverán a verse dentro de mcm(4, 6) = <b>12 días</b>.</li><li>¿Cuál es el menor número de baldosas de 20 cm y de 30 cm que forman un cuadrado? El lado debe ser mcm(20, 30) = 60 cm.</li></ul>`,
    },
    {
      html: `<h3>Problemas de mcd</h3><p>Se usan para <b>repartir</b> o <b>cortar</b> en partes iguales lo más grandes posible, sin que sobre nada:</p><ul><li>Hay dos cuerdas de 24 m y 36 m. Se quieren cortar trozos iguales lo más largos posible: mcd(24, 36) = <b>12 m</b>, que dan 2 + 3 = 5 trozos.</li><li>Una sala de 6 m × 8 m se cubre con baldosas cuadradas lo más grandes posible: lado = mcd(600, 800) = <b>200 cm</b>, es decir, 2 m; harán falta 3 · 4 = 12 baldosas.</li><li>Con 30 chicos y 42 chicas se forman equipos con el mismo número de chicos y de chicas, el mayor posible: mcd(30, 42) = <b>6 equipos</b>, con 5 chicos y 7 chicas cada uno.</li></ul>`,
      svg: svg("Dos cuerdas de 24 y 36 metros cortadas en trozos de 12 metros: 2 y 3 trozos", `${[0, 1].map((i) => `<rect x="${20 + i * 72}" y="50" width="70" height="18" rx="5" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"/>`).join("")}${[0, 1, 2].map((i) => `<rect x="${20 + i * 72}" y="100" width="70" height="18" rx="5" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/>`).join("")}
        ${t(20, 40, "24 m", { c: "var(--pen)", s: 12, a: "start" })}${t(20, 92, "36 m", { c: "var(--leaf)", s: 12, a: "start" })}${t(55, 63, "12", { s: 11 })}${t(127, 63, "12", { s: 11 })}${t(55, 113, "12", { s: 11 })}${t(127, 113, "12", { s: 11 })}${t(199, 113, "12", { s: 11 })}${t(130, 156, "mcd(24, 36) = 12 m → 5 trozos", { s: 13 })}`),
    },
  ],
  figura: {
    titulo: "Divisibilidad en un vistazo",
    svg: filas("Resumen: múltiplos infinitos, divisores finitos, primo con dos divisores, factorización, mcm comunes y no comunes con mayor exponente, mcd comunes con menor exponente", [["Múltiplos", "infinitos: 6, 12, 18, 24…", "var(--pen)"], ["Divisores", "finitos: los de 12 son 1, 2, 3, 4, 6, 12", "var(--inf)"], ["Primo", "solo divisible entre 1 y él mismo", "var(--sun)"], ["Factorizar", "360 = 2³ · 3² · 5", "var(--ink)"], ["mcm", "comunes y no comunes, mayor exponente", "var(--leaf)"], ["mcd", "solo comunes, menor exponente", "var(--red)"]], 200),
  },
  video: { id: "NRJdBgOEjdI", titulo: "Mínimo común múltiplo, explicación fácil", canal: "Daniel Carreón", vistas: 5998615, megusta: 0, busqueda: "mcm y mcd descomposición factorial" },
  quiz: mezcla([
    { q: "¿Cuál es múltiplo de 7?", o: ["63", "27", "71"], a: 0, e: "7 · 9." },
    { q: "Los divisores de un número son…", o: ["finitos", "infinitos", "siempre primos"], a: 0, e: "No pasan del propio número." },
    { q: "¿Cuál es divisible entre 3?", o: ["2.517", "2.519", "1.024"], a: 0, e: "2+5+1+7 = 15." },
    { q: "¿Cuál es primo?", o: ["31", "51", "91"], a: 0, e: "51 = 3 · 17; 91 = 7 · 13." },
    { q: "El número 1 es…", o: ["ni primo ni compuesto", "primo", "compuesto"], a: 0, e: "Solo tiene un divisor." },
    { q: "La factorización de 72 es…", o: ["2³ · 3²", "2² · 3³", "2 · 36"], a: 0, e: "8 · 9." },
    { q: "mcm(8, 12) =", o: ["24", "4", "96"], a: 0, e: "2³ · 3." },
    { q: "mcd(18, 24) =", o: ["6", "72", "3"], a: 0, e: "2 · 3." },
    { q: "Para repartir en grupos iguales lo más grandes posible se usa…", o: ["el mcd", "el mcm", "la suma"], a: 0, e: "Cortar, repartir." },
    { q: "Si mcd(a, b) = 1, a y b son…", o: ["primos entre sí", "iguales", "múltiplos"], a: 0, e: "Como 8 y 15." },
  ]),
  examen: mezcla([
    { q: "Dos alarmas suenan cada 15 y 20 minutos. Si sonaron juntas a las 9:00, volverán a coincidir a las…", o: ["10:00", "9:35", "9:05"], a: 0, e: "mcm = 60 min." },
    { q: "mcd(2² · 3³ · 5, 2³ · 3 · 7) =", o: ["12", "2³ · 3³ · 5 · 7", "6"], a: 0, e: "2² · 3." },
    { q: "Si mcm(a, b) = 60, mcd(a, b) = 4 y a = 12, entonces b =", o: ["20", "15", "48"], a: 0, e: "60 · 4 : 12." },
  ]),
  feynman: ["Diferencia entre múltiplo y divisor", "Cómo saber si un número es primo", "Cómo se descompone un número en factores primos", "Cómo se calculan el mcm y el mcd", "Cuándo un problema es de mcm y cuándo de mcd"],
  mapa: mapa("DIVISIBILIDAD", "var(--eso)", [
    ["Múltiplos y divisores", "a = b · n · división exacta", "var(--pen)"],
    ["Primos", "solo 1 y él mismo", "var(--sun)"],
    ["mcm", "coincidir · mayor exponente", "var(--leaf)"],
    ["mcd", "repartir · menor exponente", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Múltiplo", "a es múltiplo de b si a = b · n."],
    ["Divisor", "b divide a a si la división es exacta."],
    ["Número primo", "Solo tiene dos divisores: 1 y él mismo."],
    ["Número compuesto", "Tiene más de dos divisores."],
    ["Factorización", "Escribir un número como producto de primos."],
    ["mcm", "Menor múltiplo común: factores comunes y no comunes, mayor exponente."],
    ["mcd", "Mayor divisor común: factores comunes, menor exponente."],
    ["Primos entre sí", "Números cuyo mcd es 1."],
  ],
  familias: ["Buscad coincidencias reales: horarios de autobuses, turnos, riegos de plantas…", "Jugad a decir si un número de matrícula es divisible entre 2, 3, 5 o 9.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Divisibilidad: múltiplos, divisores, criterios, números primos y compuestos, descomposición factorial, mcm y mcd y su aplicación a problemas (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Criba de Eratóstenes en una tabla del 1 al 100.", "Rectángulos con cuadraditos para encontrar divisores.", "Clasificar problemas en «mcm» o «mcd» antes de resolverlos."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): divisibilidad", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula el mcm y el mcd de 60 y 84.", pasos: ["60 = 2² · 3 · 5; 84 = 2² · 3 · 7.", "mcm: comunes y no comunes con mayor exponente: 2² · 3 · 5 · 7 = 420.", "mcd: comunes con menor exponente: 2² · 3 = 12."], resultado: "mcm = 420; mcd = 12." },
    { enunciado: "Tres luces parpadean cada 6, 8 y 10 segundos. Si se encienden juntas, ¿cuándo vuelven a coincidir?", pasos: ["Es un problema de coincidencia: mcm.", "6 = 2 · 3; 8 = 2³; 10 = 2 · 5.", "mcm = 2³ · 3 · 5 = 120."], resultado: "Cada 120 segundos (2 minutos)." },
    { enunciado: "Un pastelero tiene 48 magdalenas y 72 galletas y quiere hacer bandejas iguales, con el máximo número de bandejas posible y sin que sobre nada. ¿Cuántas bandejas y qué lleva cada una?", pasos: ["Repartir en grupos iguales: mcd.", "48 = 2⁴ · 3; 72 = 2³ · 3²; mcd = 2³ · 3 = 24.", "48 : 24 = 2 magdalenas y 72 : 24 = 3 galletas."], resultado: "24 bandejas con 2 magdalenas y 3 galletas." },
  ],
  errores: [
    "Confundir múltiplo con divisor: 4 es divisor de 12, no múltiplo.",
    "Considerar el 1 como número primo.",
    "Dejar números compuestos en la factorización (60 = 4 · 15).",
    "En el mcm tomar solo los factores comunes, o en el mcd tomar también los no comunes.",
    "Usar el mcm en un problema de repartir o cortar.",
    "Sumar las cifras para comprobar la divisibilidad entre 4 o entre 5.",
  ],
  ejercicios: [
    { q: "Escribe los cinco primeros múltiplos de 9 y todos los divisores de 30.", sol: "9, 18, 27, 36, 45. Divisores de 30: 1, 2, 3, 5, 6, 10, 15, 30." },
    { q: "Indica si 5.430 es divisible entre 2, 3, 5, 9 y 10.", sol: "Entre 2, 3 (suma 12), 5 y 10 sí; entre 9 no." },
    { q: "¿Son primos 87, 89 y 91?", sol: "87 = 3 · 29 no; 89 sí; 91 = 7 · 13 no." },
    { q: "Descompón en factores primos 84, 150 y 504.", sol: "2² · 3 · 7; 2 · 3 · 5²; 2³ · 3² · 7." },
    { q: "Calcula mcm(15, 25) y mcd(15, 25).", sol: "mcm = 75; mcd = 5." },
    { q: "Calcula mcm(12, 30, 45) y mcd(12, 30, 45).", sol: "mcm = 2² · 3² · 5 = 180; mcd = 3." },
    { q: "¿Son primos entre sí 14 y 25? ¿Y 21 y 35?", sol: "14 y 25 sí (mcd = 1); 21 y 35 no (mcd = 7)." },
    { q: "Un barco sale cada 8 días y otro cada 12. Si salen juntos el 1 de marzo, ¿cuándo volverán a coincidir?", sol: "mcm = 24 días: el 25 de marzo." },
    { q: "Se quieren hacer ramos iguales con 36 rosas y 60 margaritas, el mayor número de ramos posible. ¿Cuántos ramos y con qué flores?", sol: "mcd = 12 ramos con 3 rosas y 5 margaritas." },
    { q: "Comprueba con 20 y 30 que mcm · mcd = a · b.", sol: "mcm = 60, mcd = 10; 60 · 10 = 600 = 20 · 30." },
  ],
};
