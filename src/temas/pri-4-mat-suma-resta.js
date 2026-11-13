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
  mapa: ["SUMA Y RESTA", [["Suma", "sumandos → total · llevadas", AZ], ["Resta", "minuendo − sustraendo = diferencia", RO], ["Propiedades", "conmutativa · asociativa", VE], ["Problemas", "comprendo · pienso · calculo · compruebo", SO]]],
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
