// Matemáticas 4º de Primaria: suma y resta, propiedades y problemas. Dibujos propios en SVG.
const P = require("./_pri4a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Operación en vertical: filas de números alineadas a la derecha en x, con línea y resultado.
const vertical = (x, y, filas, res, signo, c = AZ, lleva = []) => {
  let s = filas.map((n, i) => t(x, y + i * 26, n, { s: 18, d: true, a: "end" })).join("");
  s += t(x - 86, y + 26, signo, { s: 18, d: true, c });
  s += `<path d="M${x - 92} ${y + 36} H ${x + 4}" stroke="var(--ink)" stroke-width="2.4"/>`;
  s += t(x, y + 62, res, { s: 18, d: true, a: "end", c });
  s += lleva.map(([dx, v]) => t(x - dx, y - 22, v, { s: 11, c: RO })).join("");
  return s;
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Suma y resta: propiedades y problemas",
  minutos: 50,
  objetivos: ["Sumar y restar números de hasta seis cifras con llevadas", "Conocer las propiedades conmutativa y asociativa de la suma", "Comprobar una resta con la prueba de la resta", "Resolver problemas de una y dos operaciones siguiendo unos pasos"],
  claves: ["sumandos", "suma o total", "minuendo", "sustraendo", "diferencia", "llevar", "propiedad conmutativa", "propiedad asociativa", "prueba de la resta", "estimar", "problema"],
  pregunta: ["En la biblioteca del cole hay 3 485 libros. Este año han llegado 1 260 nuevos, pero se han estropeado 145. ¿Cuántos libros hay ahora? ¿Qué operaciones necesitas?", "Necesitas <b>dos operaciones</b>: primero una suma (3 485 + 1 260 = 4 745) y después una resta (4 745 − 145 = 4 600). Ahora hay <mark>4 600 libros</mark>. Sumamos cuando algo <b>se junta o aumenta</b> y restamos cuando algo <b>se quita, disminuye o comparamos</b>."],
  bloques: [
    ["Los términos de la suma y de la resta", `<p>Cada número de una operación tiene un nombre.</p><p>En la <b>suma</b>, los números que se suman son los <b>sumandos</b> y el resultado es la <b>suma</b> o el <b>total</b>: 2 340 + 1 525 = <mark>3 865</mark>.</p><p>En la <b>resta</b>:</p><ul><li>El <b>minuendo</b> es el número del que se quita (el mayor).</li><li>El <b>sustraendo</b> es lo que se quita.</li><li>La <b>diferencia</b> es el resultado: lo que queda.</li></ul><p>8 750 − 2 300 = 6 450. Aquí 8 750 es el minuendo, 2 300 el sustraendo y 6 450 la diferencia.</p>`,
      svg("Términos de la suma y de la resta en dos operaciones en vertical", `${vertical(100, 50, ["2 340", "1 525"], "3 865", "+", AZ)}${t(150, 50, "sumando", { s: 10, a: "start", c: "var(--muted)" })}${t(150, 76, "sumando", { s: 10, a: "start", c: "var(--muted)" })}${t(150, 112, "suma", { s: 11, a: "start", c: AZ })}${t(130, 160, "sumandos + sumandos = suma", { s: 11, c: "var(--muted)" })}`)],
    ["Sumar con llevadas", `<p>Para sumar números grandes, los colocamos <mark>en columna</mark>: unidades debajo de unidades, decenas debajo de decenas, y así con todos los órdenes. Empezamos siempre por la <b>derecha</b>.</p><p>Si al sumar una columna sale 10 o más, escribimos las unidades y <b>nos llevamos</b> una al orden siguiente:</p><p style="text-align:center">4 678 + 2 547 = <b>7 225</b></p><ul><li>U: 8 + 7 = 15 → escribo 5 y me llevo 1.</li><li>D: 7 + 4 + 1 = 12 → escribo 2 y me llevo 1.</li><li>C: 6 + 5 + 1 = 12 → escribo 2 y me llevo 1.</li><li>UM: 4 + 2 + 1 = 7.</li></ul>`,
      svg("Suma en vertical con llevadas: 4 678 más 2 547 igual a 7 225", `${vertical(160, 64, ["4 678", "2 547"], "7 225", "+", AZ, [[14, "1"], [26, "1"], [38, "1"]])}${t(214, 64, "U: 8+7=15", { s: 10, c: "var(--muted)" })}${t(214, 82, "llevo 1", { s: 10, c: RO })}${t(130, 166, "en rojo, las llevadas", { s: 11, c: RO })}`)],
    ["Restar con llevadas", `<p>En la resta también colocamos los números en columna y empezamos por las <b>unidades</b>. Arriba va siempre el número mayor, el minuendo.</p><p>Si la cifra de arriba es más pequeña que la de abajo, <mark>no se puede restar</mark> directamente. Entonces le sumamos 10 a la de arriba y nos llevamos 1, que se suma a la cifra de abajo de la columna siguiente:</p><p style="text-align:center">5 362 − 1 847 = <b>3 515</b></p><ul><li>U: 2 − 7 no se puede → 12 − 7 = 5 y me llevo 1.</li><li>D: 6 − (4 + 1) = 1.</li><li>C: 3 − 8 no se puede → 13 − 8 = 5 y me llevo 1.</li><li>UM: 5 − (1 + 1) = 3.</li></ul>`,
      svg("Resta en vertical con llevadas: 5 362 menos 1 847 igual a 3 515", `${vertical(160, 64, ["5 362", "1 847"], "3 515", "−", RO, [[14, "+10"], [38, "+10"]])}${t(214, 64, "12 − 7 = 5", { s: 10, c: "var(--muted)" })}${t(214, 82, "llevo 1", { s: 10, c: RO })}${t(130, 166, "si no se puede, +10 y me llevo 1", { s: 11, c: RO })}`)],
    ["La propiedad conmutativa", `<p>Las propiedades son «reglas» que siempre se cumplen y nos ayudan a calcular más rápido.</p><p>La <b>propiedad conmutativa</b> de la suma dice que <mark>el orden de los sumandos no cambia el resultado</mark>:</p><p style="text-align:center">350 + 1 200 = 1 200 + 350 = 1 550</p><p>Es útil para calcular de cabeza: es más fácil sumar 1 200 + 350 empezando por el número grande.</p><p>¡Atención! En la <b>resta no se cumple</b>: 50 − 20 = 30, pero 20 − 50 no se puede hacer con los números que conocemos. En la resta, el orden importa mucho.</p>`,
      svg("Propiedad conmutativa: tres bolas más cinco es igual que cinco más tres", `${[0, 1, 2].map((i) => `<circle cx="${30 + i * 18}" cy="56" r="7" fill="${AZ}"/>`).join("")}${t(92, 61, "+", { s: 16 })}${[0, 1, 2, 3, 4].map((i) => `<circle cx="${110 + i * 18}" cy="56" r="7" fill="${VE}"/>`).join("")}${t(222, 61, "= 8", { s: 14 })}${[0, 1, 2, 3, 4].map((i) => `<circle cx="${30 + i * 18}" cy="112" r="7" fill="${VE}"/>`).join("")}${t(128, 117, "+", { s: 16 })}${[0, 1, 2].map((i) => `<circle cx="${146 + i * 18}" cy="112" r="7" fill="${AZ}"/>`).join("")}${t(222, 117, "= 8", { s: 14 })}${t(130, 160, "a + b = b + a", { s: 14, c: RO })}`)],
    ["La propiedad asociativa", `<p>La <b>propiedad asociativa</b> dice que, cuando sumamos tres números o más, <mark>podemos agruparlos como queramos</mark> y el resultado es el mismo. Los paréntesis indican qué se suma primero:</p><p style="text-align:center">(25 + 75) + 48 = 100 + 48 = 148<br>25 + (75 + 48) = 25 + 123 = 148</p><p>El truco es buscar parejas que formen números <b>redondos</b>: 25 y 75 suman 100; 340 y 60 suman 400; 1 800 y 200 suman 2 000. Con números redondos el cálculo mental es mucho más sencillo.</p>`,
      P.frase("Propiedad asociativa: se suman primero 25 y 75 para formar 100", [["(25 + 75)", "100", VE], ["+", "", "var(--muted)"], ["48", "", AZ], ["= 148", "", RO]], "busca parejas que formen números redondos"),
      P.V("sumB")],
    ["La prueba de la resta", `<p>¿Cómo saber si una resta está bien hecha? Con la <b>prueba de la resta</b>: <mark>sustraendo + diferencia = minuendo</mark>.</p><p>Es lógico: si de 8 000 quito 2 500 y me quedan 5 500, al volver a juntar lo que quité y lo que me quedó debo tener otra vez 8 000.</p><p style="text-align:center">8 000 − 2 500 = 5 500 → 2 500 + 5 500 = 8 000 ✔</p><p>Si al sumar no sale el minuendo, hay un error en la resta y hay que repasarla. La suma y la resta son <b>operaciones inversas</b>: una deshace lo que hace la otra.</p>`,
      svg("Prueba de la resta: la resta y la suma son operaciones inversas", `<rect x="20" y="60" width="64" height="44" rx="10" fill="${AZ}" fill-opacity=".2" stroke="${AZ}" stroke-width="2"/>${t(52, 87, "8 000", { s: 13 })}<rect x="176" y="60" width="64" height="44" rx="10" fill="${VE}" fill-opacity=".2" stroke="${VE}" stroke-width="2"/>${t(208, 87, "5 500", { s: 13 })}<path d="M88 66 Q 130 30 172 66" fill="none" stroke="${RO}" stroke-width="2.5"/>${t(130, 38, "− 2 500", { s: 12, c: RO })}<path d="M172 100 Q 130 136 88 100" fill="none" stroke="${VE}" stroke-width="2.5"/>${t(130, 142, "+ 2 500", { s: 12, c: VE })}${t(130, 168, "la suma deshace la resta", { s: 11, c: "var(--muted)" })}`),
      P.V("sumB2")],
    ["Estimar sumas y restas", `<p><b>Estimar</b> es calcular un resultado <mark>aproximado</mark> redondeando los números antes de operar. Sirve para hacer cálculos rápidos y para comprobar si un resultado es razonable.</p><p>Ejemplo: 4 870 + 3 120. Redondeo a los millares: 5 000 + 3 000 = <b>8 000</b>. El resultado exacto es 7 990, muy cerca.</p><p>Si al hacer la operación te hubiera salido 79 900, la estimación te avisa: ¡algo no cuadra! Probablemente has colocado mal las columnas. Estimar antes de calcular es una costumbre de los buenos matemáticos.</p>`,
      P.filas("Estimación de 4 870 más 3 120 redondeando al millar", [["4 870", "≈ 5 000", AZ], ["3 120", "≈ 3 000", VE], ["Estimación", "≈ 8 000 (exacto: 7 990)", RO]])],
    ["Resolver problemas paso a paso", `<p>Para resolver un problema sin perderse, sigue estos <b>cuatro pasos</b>:</p><ol><li><b>Comprende</b>: lee despacio. ¿Qué datos me dan? ¿Qué me preguntan?</li><li><b>Piensa</b>: ¿qué operación necesito? ¿Se junta algo (suma) o se quita o se compara (resta)?</li><li><b>Calcula</b>: haz las operaciones con cuidado.</li><li><b>Comprueba</b>: ¿tiene sentido el resultado? Escribe la <mark>solución con una frase</mark> y con las unidades (libros, euros, km…).</li></ol><p>Palabras pista: «en total», «más», «ganó» suelen indicar suma; «quedan», «perdió», «cuántos más que» suelen indicar resta.</p>`,
      P.filas("Cuatro pasos para resolver un problema", [["1. Comprendo", "datos y pregunta", AZ], ["2. Pienso", "¿suma o resta?", VE], ["3. Calculo", "operaciones", SO], ["4. Compruebo", "solución con frase", RO]])],
    ["Problemas de dos operaciones", `<p>Algunos problemas necesitan <b>dos operaciones</b>. Lo importante es saber qué hay que calcular primero.</p><p><i>Lucía tenía 1 250 € ahorrados para un viaje. Su abuela le da 300 € y gasta 875 € en el billete. ¿Cuánto dinero le queda?</i></p><ol><li>Primero, lo que tiene después del regalo: 1 250 + 300 = 1 550 €.</li><li>Después, lo que le queda tras pagar: 1 550 − 875 = <mark>675 €</mark>.</li></ol><p>También puede escribirse en una sola expresión: 1 250 + 300 − 875 = 675. <b>Solución:</b> a Lucía le quedan 675 €.</p>`,
      svg("Problema de dos operaciones: primero se suma el regalo y después se resta el gasto", `<rect x="14" y="66" width="64" height="40" rx="10" fill="var(--card)" stroke="${AZ}" stroke-width="2"/>${t(46, 91, "1 250 €", { s: 12 })}${P.flecha(80, 86, 104, 86, VE)}<rect x="106" y="66" width="64" height="40" rx="10" fill="var(--card)" stroke="${VE}" stroke-width="2"/>${t(138, 91, "1 550 €", { s: 12 })}${P.flecha(172, 86, 194, 86, RO)}<rect x="196" y="66" width="52" height="40" rx="10" fill="${RO}" fill-opacity=".2" stroke="${RO}" stroke-width="2"/>${t(222, 91, "675 €", { s: 12 })}${t(92, 56, "+300", { s: 11, c: VE })}${t(183, 56, "−875", { s: 11, c: RO })}${t(130, 146, "1.º sumo · 2.º resto", { s: 13, c: "var(--muted)" })}`)],
  ],
  figura: ["Suma y resta", P.columnas("Resumen: suma con llevadas, resta con llevadas, propiedades y prueba de la resta", [["sumando + sumando", "SUMA", ["en columna", "me llevo 1"], AZ], ["minuendo − sustraendo", "RESTA", ["diferencia", "+10 y llevo 1"], RO], ["a + b = b + a", "PROPIEDADES", ["conmutativa", "asociativa"], VE], ["sustraendo + diferencia", "PRUEBA", ["= minuendo", "operaciones inversas"], SO]])],
  video: P.V("sumV", true),
  ejemplos: [
    ["Calcula 36 458 + 27 865.", ["U: 8 + 5 = 13 → 3, llevo 1.", "D: 5 + 6 + 1 = 12 → 2, llevo 1. C: 4 + 8 + 1 = 13 → 3, llevo 1.", "UM: 6 + 7 + 1 = 14 → 4, llevo 1. DM: 3 + 2 + 1 = 6."], "64 323"],
    ["Calcula 70 004 − 25 678 y haz la prueba.", ["Resta con llevadas columna a columna: 14 − 8 = 6; 10 − 8 = 2; 10 − 7 = 3; 10 − 6 = 4; 7 − 3 = 4.", "Diferencia: 44 326.", "Prueba: 25 678 + 44 326 = 70 004 ✔."], "44 326"],
    ["Un tren lleva 812 viajeros. En una estación bajan 234 y suben 159. ¿Cuántos viajeros lleva ahora?", ["Bajan: 812 − 234 = 578.", "Suben: 578 + 159 = 737.", "Comprueba que tiene sentido: bajan más de los que suben, así que hay menos que al principio."], "El tren lleva 737 viajeros."],
  ],
  errores: [
    "Colocar mal los números en columna, sin alinear las unidades a la derecha.",
    "Olvidar sumar la llevada en la columna siguiente.",
    "En la resta, restar la cifra pequeña de la grande aunque esté abajo (7 − 2 en lugar de 12 − 7).",
    "Pensar que la resta también es conmutativa: 50 − 20 no es lo mismo que 20 − 50.",
    "Dar la solución de un problema sin frase ni unidades.",
  ],
  ejercicios: [
    ["Calcula 45 386 + 18 927.", "64 313."],
    ["Calcula 90 000 − 36 452.", "53 548."],
    ["Haz la prueba de la resta 6 250 − 1 875 = 4 375.", "1 875 + 4 375 = 6 250: está bien."],
    ["Calcula de cabeza aplicando la propiedad asociativa: 65 + 35 + 240.", "(65 + 35) + 240 = 100 + 240 = 340."],
    ["Completa: 1 300 + ___ = 2 500 + 1 300.", "2 500 (propiedad conmutativa)."],
    ["Estima redondeando al millar: 6 820 − 2 190.", "7 000 − 2 000 = 5 000 (exacto: 4 630)."],
    ["Escribe el nombre de cada término en 9 500 − 3 200 = 6 300.", "Minuendo 9 500, sustraendo 3 200 y diferencia 6 300."],
    ["Un camión lleva 4 650 kg de fruta y otro 3 980 kg. ¿Cuántos kilos llevan entre los dos?", "4 650 + 3 980 = 8 630 kg."],
    ["En un estadio caben 45 000 personas y han entrado 38 765. ¿Cuántos asientos quedan libres?", "45 000 − 38 765 = 6 235 asientos libres."],
    ["Marcos tenía 2 400 cromos, regaló 650 y compró 1 120. ¿Cuántos tiene ahora?", "2 400 − 650 = 1 750; 1 750 + 1 120 = 2 870 cromos."],
  ],
  quiz: [
    ["El resultado de una resta se llama…", ["diferencia", "suma", "producto"], "Es lo que queda."],
    ["En 500 − 200 = 300, el sustraendo es…", ["200", "500", "300"], "Es lo que se quita."],
    ["¿Qué propiedad dice que 7 + 3 = 3 + 7?", ["conmutativa", "asociativa", "prueba de la resta"], "El orden no cambia el resultado."],
    ["La prueba de la resta es…", ["sustraendo + diferencia = minuendo", "minuendo + diferencia = sustraendo", "minuendo − diferencia = 0"], "Se suma lo quitado y lo que queda."],
    ["3 458 + 1 642 =", ["5 100", "4 090", "5 000"], "Con llevadas en todas las columnas."],
    ["6 000 − 1 250 =", ["4 750", "5 250", "4 850"], "Comprueba: 1 250 + 4 750 = 6 000."],
    ["¿Es conmutativa la resta?", ["no", "sí", "solo con números pares"], "El orden importa."],
    ["«¿Cuántos quedan?» suele indicar…", ["una resta", "una suma", "ninguna operación"], "Se quita algo."],
    ["Estima 2 960 + 4 020 redondeando al millar.", ["7 000", "6 000", "8 000"], "3 000 + 4 000."],
    ["(18 + 82) + 45 =", ["145", "135", "100"], "18 + 82 = 100."],
  ],
  examen: [
    ["Si 1 200 − 450 = 750, entonces 450 + 750 =", ["1 200", "750", "300"], "Prueba de la resta."],
    ["Al sumar las unidades sale 16. Escribo…", ["6 y me llevo 1", "16", "1 y me llevo 6"], "Las unidades y la decena pasa."],
    ["¿Qué pareja forma un número redondo?", ["375 + 25", "375 + 35", "375 + 52"], "375 + 25 = 400."],
    ["Un libro cuesta 18 € y pago con 50 €. ¿Cuánto me devuelven?", ["32 €", "68 €", "22 €"], "50 − 18 = 32."],
  ],
  feynman: ["Cómo se colocan los números para sumar o restar en columna", "Qué significa «me llevo una»", "Qué dicen las propiedades conmutativa y asociativa", "Cómo se comprueba una resta", "Qué pasos sigues para resolver un problema"],
  mapa: ["SUMA Y RESTA", [["Suma", "sumandos → total · llevadas", AZ], ["Resta", "minuendo − sustraendo = diferencia", RO], ["Propiedades", "conmutativa · asociativa", VE], ["Problemas", "4 pasos: comprendo… compruebo", SO]]],
  tarjetas: [
    ["Sumandos", "Los números que se suman."],
    ["Minuendo", "En la resta, el número del que se quita."],
    ["Sustraendo", "En la resta, lo que se quita."],
    ["Diferencia", "El resultado de la resta."],
    ["Propiedad conmutativa", "El orden de los sumandos no cambia la suma."],
    ["Propiedad asociativa", "Se pueden agrupar los sumandos como se quiera."],
    ["Prueba de la resta", "Sustraendo + diferencia = minuendo."],
    ["Estimar", "Calcular un resultado aproximado redondeando."],
  ],
  familias: ["En la compra, estimad juntos cuánto costará todo redondeando los precios.", "Inventad problemas de dos operaciones con situaciones de casa (cromos, kilómetros de un viaje, ahorro).", "Pedid que haga la prueba de cada resta de los deberes.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido numérico y de las operaciones: suma y resta de números naturales con llevadas, propiedades conmutativa y asociativa, prueba de la resta, estimación y resolución de problemas de una y dos operaciones",
  ideas: ["Cálculo mental diario buscando parejas que formen decenas o centenas redondas.", "Problemas escritos por los alumnos e intercambiados con otra pareja.", "Detectives del error: operaciones mal resueltas para encontrar el fallo."],
});

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
// Cuadrado mágico de 3 × 3 (suma 15).
const magico = () => [[2, 7, 6], [9, 5, 1], [4, 3, 8]].map((f, i) => f.map((n, j) => `<rect x="${80 + j * 34}" y="${22 + i * 34}" width="32" height="32" rx="5" fill="${n === 5 ? cNA : "var(--card)"}" fill-opacity="${n === 5 ? 0.3 : 1}" stroke="${cAZ}" stroke-width="2"/>${t(96 + j * 34, 44 + i * 34, String(n), { s: 16, d: true })}`).join("")).join("") + t(130, 148, "filas, columnas y diagonales: 15", { s: 12, c: cRO });
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Restar cuando el minuendo tiene ceros", "Sumar y restar de cabeza con estrategias de cálculo mental", "Inventar problemas a partir de datos", "Resolver cuadrados mágicos y hacer un presupuesto de ingresos y gastos"],
  lectura: { titulo: "La hucha del viaje", html: `<p>La clase de 4.º quería ir de excursión al parque de las ciencias de su ciudad, pero el autobús y las entradas costaban <b>1 200 euros</b> en total.</p><p>—¡Es muchísimo dinero! —dijo Martina.</p><p>—Vamos a organizarnos —propuso el tutor, Gabriel—. Haremos una tabla con lo que ganamos y lo que gastamos.</p><p>En noviembre organizaron un mercadillo de libros usados: ganaron <b>285 €</b>. En diciembre vendieron tarjetas navideñas dibujadas por ellos: <b>340 €</b>. En marzo, una carrera solidaria con patrocinadores: <b>415 €</b>.</p><p>Cada mes, Leo, el encargado de las cuentas, sumaba en la pizarra: 285 + 340 = 625; 625 + 415 = 1 040.</p><p>—¿Cuánto nos falta? —preguntó Martina.</p><p>Leo escribió la resta: 1 200 − 1 040. Se quedó un momento mirando los ceros.</p><p>—Cero menos cero, cero. Cero menos cuatro… no se puede. Tengo que pedir prestado a las centenas…</p><p>—¡160 euros! —dijo al fin—. Nos faltan 160.</p><p>En abril, las familias organizaron una merienda y recaudaron 210 €. Habían conseguido el dinero y, además, sobraron 50 € para un helado al final de la excursión.</p><p>—Las cuentas claras —dijo el tutor— y el viaje, asegurado.</p>` },
  tras: {
    "Restar con llevadas": [
      ["Restar cuando hay ceros", `<p>Las restas en las que el minuendo tiene <b>ceros</b>, como <b>5 000 − 1 237</b>, asustan un poco, pero se hacen igual que las demás: columna a columna, llevándonos cuando hace falta.</p><ul><li><b>Unidades</b>: 0 − 7 no se puede. Hago 10 − 7 = <b>3</b> y me llevo 1.</li><li><b>Decenas</b>: 0 − (3 + 1) = 0 − 4 no se puede. Hago 10 − 4 = <b>6</b> y me llevo 1.</li><li><b>Centenas</b>: 0 − (2 + 1) = 0 − 3 no se puede. Hago 10 − 3 = <b>7</b> y me llevo 1.</li><li><b>Millares</b>: 5 − (1 + 1) = <b>3</b>.</li></ul><p>Resultado: <mark>3 763</mark>.</p><p>Hay otro truco muy útil cuando el minuendo es un número redondo: <b>restar 1 a los dos números</b>. La diferencia no cambia, y así desaparecen las llevadas:</p><p style="text-align:center">5 000 − 1 237 = 4 999 − 1 236 = <b>3 763</b></p><p>Ahora cada columna se resta sin llevar: 9 − 6 = 3, 9 − 3 = 6, 9 − 2 = 7, 4 − 1 = 3.</p><p>Y no olvides hacer la <b>prueba</b>: 1 237 + 3 763 = 5 000. ¡Correcto!</p>`,
        L6.filas("5 000 − 1 237", [["truco", "− 1 a los dos", cAZ], ["queda", "4 999 − 1 236", cVE], ["resultado", "3 763", cNA], ["prueba", "1 237 + 3 763", cRO]]), ["WwrPxhfZBYg", "Cómo restar a ceros", "matemáticas express monina", 685488]],
    ],
    "Estimar sumas y restas": [
      ["Cálculo mental: sumar y restar de cabeza", `<p>Con unas cuantas estrategias puedes sumar y restar de cabeza números bastante grandes:</p><ul><li><b>Descomponer</b>: separa el número en partes. 456 + 230 → 456 + 200 = 656 → 656 + 30 = <b>686</b>.</li><li><b>Redondear y compensar</b>: si sumas 99, suma 100 y quita 1. 347 + 99 = 447 − 1 = <b>446</b>. Si restas 98, resta 100 y suma 2. 520 − 98 = 420 + 2 = <b>422</b>.</li><li><b>Buscar parejas que hacen 10 o 100</b>: 25 + 38 + 75 → 25 + 75 = 100 → 100 + 38 = <b>138</b>. La propiedad conmutativa te deja cambiar el orden.</li><li><b>Contar hacia delante para restar</b>: para 1 000 − 680, piensa cuánto le falta a 680 para llegar a 1 000: 20 hasta 700 y 300 hasta 1 000. Total: <b>320</b>. Así dan las vueltas en las tiendas.</li><li><b>Dobles</b>: 250 + 250 = 500, así que 250 + 260 = <b>510</b>.</li></ul><p>El cálculo mental se entrena: practica unos minutos cada día, por ejemplo calculando de cabeza lo que cuesta la compra o los puntos de un partido.</p>`,
        H6.rueda("Cálculo mental", "DE CABEZA", [["descomponer", cAZ], ["compensar", cVE], ["parejas", cNA], ["contar", cRO]])],
    ],
    "Problemas de dos operaciones": [
      ["Inventar problemas", `<p>Una forma estupenda de entender los problemas es <b>inventarlos</b>. Cuando escribes un problema, tienes que pensar qué datos hacen falta y qué pregunta tiene sentido.</p><p>Para inventar un buen problema:</p><ol><li><b>Elige una situación real</b>: una compra, un viaje, un partido, una colección.</li><li><b>Escribe los datos</b> con números razonables. Un bocadillo no cuesta 500 € ni un viaje 3 km si es a otro país.</li><li><b>Haz la pregunta</b> al final, de forma clara: «¿cuánto…?», «¿cuántos…?».</li><li><b>Resuélvelo tú</b> antes de dárselo a otro, para comprobar que tiene solución.</li></ol><p>Ejemplo inventado: <i>En la biblioteca del colegio hay 2 350 libros. Este año han llegado 480 nuevos y se han retirado 125 muy estropeados. ¿Cuántos libros hay ahora?</i></p><p>Solución: 2 350 + 480 − 125 = <b>2 705</b> libros.</p><p>Otra actividad: a partir de una operación, imagina la historia. Para <mark>800 − 350 = 450</mark> podría ser: «Tenía 800 cromos y regalé 350. ¿Cuántos me quedan?».</p><p>Intercambia tus problemas con un compañero y corregid juntos las soluciones.</p>`,
        H6.flujo("Inventar", ["situación|real", "datos|razonables", "pregunta|clara", "resolver|comprobar"], cMO)],
    ],
  },
  final: [
    ["Cuadrados mágicos", `<p>Un <b>cuadrado mágico</b> es una cuadrícula de números en la que <mark>todas las filas, todas las columnas y las dos diagonales suman lo mismo</mark>. Ese número se llama <b>suma mágica</b>.</p><p>El más famoso es el de 3 × 3 con los números del 1 al 9, cuya suma mágica es <b>15</b>:</p><ul><li>Filas: 2 + 7 + 6 = 15; 9 + 5 + 1 = 15; 4 + 3 + 8 = 15.</li><li>Columnas: 2 + 9 + 4 = 15; 7 + 5 + 3 = 15; 6 + 1 + 8 = 15.</li><li>Diagonales: 2 + 5 + 8 = 15; 6 + 5 + 4 = 15.</li></ul><p>Fíjate en que el <b>5</b>, el número del medio, siempre va en el <b>centro</b>.</p><p>Los cuadrados mágicos son muy antiguos. Según una leyenda china, el primero apareció dibujado en el caparazón de una tortuga que salió de un río, hace miles de años.</p><p>En España hay uno muy famoso en la fachada de la <b>Sagrada Familia</b> de Barcelona, obra de Gaudí: es de 4 × 4 y todas sus líneas suman <b>33</b>.</p><p>Resolver cuadrados mágicos es una forma divertida de practicar sumas y restas: si conoces dos números de una línea y la suma mágica, puedes averiguar el tercero restando.</p>`,
      svg("Cuadrado mágico de tres por tres con suma 15", magico()), ["iEdqHucT88Q", "Cómo resolver cualquier cuadrado mágico de 3x3", "Matemáticas profe Alex", 544727]],
    ["Ingresos y gastos: el presupuesto", `<p>Un <b>presupuesto</b> es un plan para organizar el dinero: cuánto vamos a <b>ingresar</b> (el dinero que entra) y cuánto vamos a <b>gastar</b> (el dinero que sale).</p><ul><li>Si los ingresos son mayores que los gastos, hay <b>ahorro</b>: ingresos − gastos.</li><li>Si los gastos son mayores que los ingresos, falta dinero: hay <b>déficit</b>, y habrá que gastar menos o conseguir más.</li></ul><p>Ejemplo: una familia ingresa en un mes 2 400 €. Gasta 750 € en la vivienda, 520 € en comida, 180 € en luz, agua e internet, 260 € en transporte y 290 € en otras cosas.</p><ol><li>Gastos totales: 750 + 520 + 180 + 260 + 290 = <b>2 000 €</b>.</li><li>Ahorro: 2 400 − 2 000 = <b>400 €</b>.</li></ol><p>Tú también puedes hacer tu presupuesto: anota la paga o el dinero que te regalan, y lo que te gastas en cromos, chucherías o regalos. Al final de mes, haz la resta.</p><p>Una buena costumbre es <mark>ahorrar una parte antes de gastar</mark>: así, poco a poco, puedes conseguir algo que cueste más, como un libro especial o una bicicleta.</p>`,
      L6.filas("Presupuesto", [["ingresos", "2 400 €", cVE], ["gastos", "2 000 €", cRO], ["ahorro", "400 €", cAZ], ["consejo", "ahorrar primero", cNA]])],
  ],
  ejemplos: [
    ["Calcula 4 003 − 1 865.", ["U: 13 − 5 = 8, me llevo 1. D: 10 − 7 = 3, me llevo 1.", "C: 10 − 9 = 1, me llevo 1. UM: 4 − 2 = 2."], "2 138."],
    ["Calcula de cabeza 638 + 199.", ["Sumo 200: 838.", "Quito 1."], "837."],
  ],
  errores: ["Al restar con ceros, olvidar sumar la llevada a la cifra de abajo de la columna siguiente.", "Inventar problemas con datos imposibles o sin pregunta."],
  ejercicios: [
    ["b", "Calcula 3 000 − 1 456.", "1 544."],
    ["b", "Calcula de cabeza 245 + 99.", "344."],
    ["b", "Calcula de cabeza 700 − 98.", "602."],
    ["b", "¿Cuál es la suma mágica del cuadrado de 3 × 3 con números del 1 al 9?", "15."],
    ["b", "Si ingreso 50 € y gasto 32 €, ¿cuánto ahorro?", "18 €."],
    ["m", "Calcula 10 000 − 4 387 y haz la prueba.", "5 613; 4 387 + 5 613 = 10 000."],
    ["m", "Calcula de cabeza 35 + 47 + 65.", "147."],
    ["m", "Completa la fila de un cuadrado mágico de suma 15: 8, __, 4.", "3."],
    ["m", "Inventa un problema para 1 500 − 640 = 860.", "Respuesta abierta."],
    ["m", "¿Cuánto falta de 375 € para llegar a 1 000 €? Cuenta hacia delante.", "625 €."],
    ["a", "Haz el presupuesto de una fiesta de cumpleaños con 100 € y comprueba que no te pasas.", "Respuesta abierta."],
    ["a", "Construye un cuadrado mágico de 3 × 3 con los números del 2 al 10. ¿Cuál es la suma mágica?", "18."],
    ["a", "Una familia ingresa 1 950 € y gasta 650, 480, 210 y 395 €. ¿Ahorra o le falta dinero? ¿Cuánto?", "Gasta 1 735 €; ahorra 215 €."],
    ["a", "Inventa un problema de dos operaciones con datos de tu clase e intercámbialo.", "Respuesta abierta."],
  ],
  quiz: [
    ["6 000 − 2 345 =", ["3 655", "4 345", "3 765"], "Restar con ceros."],
    ["Para sumar 99 de cabeza…", ["sumo 100 y quito 1", "sumo 9 y 9", "resto 1"], "Cálculo mental."],
    ["En un cuadrado mágico suman lo mismo…", ["filas, columnas y diagonales", "solo las filas", "solo las esquinas"], "Cuadrados mágicos."],
    ["Si los gastos superan los ingresos hay…", ["déficit", "ahorro", "suma mágica"], "Presupuesto."],
    ["El cuadrado mágico de la Sagrada Familia suma…", ["33", "15", "100"], "Cuadrados mágicos."],
  ],
  examen: [
    ["En la lectura, ¿cuánto les faltaba después de la carrera solidaria?", ["160 €", "1 040 €", "50 €"], "Lectura."],
    ["7 000 − 1 = 6 999. Por eso 7 000 − 2 518 = 6 999 − …", ["2 517", "2 519", "2 518"], "Restar con ceros."],
  ],
  tarjetas: [
    ["Restar con ceros", "Columna a columna con llevadas, o restar 1 a los dos: 4 999 − 1 236."],
    ["Cálculo mental", "Descomponer, compensar (+99 = +100 − 1), parejas que hacen 100, contar hacia delante."],
    ["Inventar problemas", "Situación real, datos razonables, pregunta clara y resolverlo."],
    ["Mágicos y presupuesto", "Suma mágica 15 con el 5 en el centro; ingresos − gastos = ahorro."],
  ],
  glosario: [
    ["Minuendo", "Número del que se resta."],
    ["Sustraendo", "Número que se resta."],
    ["Diferencia", "Resultado de una resta."],
    ["Llevada", "Unidad que pasa a la columna siguiente."],
    ["Compensar", "Ajustar un cálculo después de redondear."],
    ["Cálculo mental", "Hacer operaciones de cabeza."],
    ["Cuadrado mágico", "Cuadrícula en la que todas las líneas suman lo mismo."],
    ["Suma mágica", "Número que suman todas las líneas de un cuadrado mágico."],
    ["Presupuesto", "Plan de ingresos y gastos."],
    ["Ingreso", "Dinero que entra."],
    ["Gasto", "Dinero que sale."],
    ["Déficit", "Lo que falta cuando se gasta más de lo que se ingresa."],
  ],
  situacion: {
    titulo: "La tienda de la clase",
    reto: "La clase monta una tienda simulada y lleva las cuentas de ingresos y gastos.",
    pasos: ["Fabricad billetes y productos con precios.", "Por turnos, unos compran y otros venden calculando de cabeza las vueltas.", "Anotad en una tabla todo lo que entra y sale de la caja.", "Al final, sumad, restad y comprobad que la caja cuadra."],
    producto: "Un libro de cuentas de la tienda con el balance final.",
    evaluacion: ["Suma y resta con llevadas y con ceros.", "Calcula de cabeza las vueltas.", "Organiza datos en una tabla.", "Comprueba resultados con la prueba."],
  },
});
