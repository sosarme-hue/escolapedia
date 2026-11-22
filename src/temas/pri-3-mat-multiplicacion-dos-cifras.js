// Matemáticas 3º de Primaria: la multiplicación por dos cifras. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Multiplicación por dos cifras en columna: filas [número, color], con signo × en la segunda y rayas tras la 2.ª y la 4.ª.
const mult = (x, y, filas, o = {}) => {
  const paso = o.paso || 18, s = o.s || 18, h = s + 7;
  let out = "";
  filas.forEach(([n, c, desp = 0], i) => {
    const yy = y + i * h + (i >= 2 ? 8 : 0) + (i >= 4 ? 8 : 0);
    [...String(n)].reverse().forEach((d, k) => { out += t(x - (k + desp) * paso, yy, d, { s, d: true, c }); });
    if (i === 1) out += t(x - 3 * paso - 4, yy, "×", { s, c: AZ });
    if (i === 3) out += t(x - 4 * paso - 4, yy, "+", { s, c: AZ });
    if (i === 1 || i === 3) out += `<path d="M${x - 4.5 * paso} ${yy + 8} H ${x + paso / 2 + 2}" stroke="var(--ink)" stroke-width="2"/>`;
  });
  return out;
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "La multiplicación por dos cifras",
  minutos: 50,
  objetivos: ["Multiplicar por decenas completas (20, 30, 40…)", "Multiplicar en columna por un número de dos cifras paso a paso", "Colocar bien los productos parciales y sumarlos", "Estimar el resultado y resolver problemas"],
  claves: ["factor de dos cifras", "decenas completas", "producto parcial", "hueco", "suma de productos", "descomponer", "estimar", "columna"],
  pregunta: ["Un cine tiene 23 filas con 14 butacas cada una. ¿Cuántas butacas tiene?", "Hay que calcular <b>23 × 14</b>, ¡una multiplicación por dos cifras! El truco es partirla en dos más fáciles: 23 × 4 = 92 y 23 × 10 = 230. Después las sumamos: 92 + 230 = <mark>322 butacas</mark>."],
  bloques: [
    ["Repaso: multiplicar por una cifra", `<p>Antes de multiplicar por dos cifras, recordemos cómo se multiplica por una: se multiplica la cifra de abajo por <b>cada cifra</b> de arriba, de derecha a izquierda, sumando lo que nos llevamos.</p><p>Ejemplo: 47 × 6. U: 7 × 6 = 42, pongo 2 y me llevo 4. D: 4 × 6 = 24, + 4 = 28. Producto: <mark>282</mark>.</p><p>Y recuerda el truco del cero: multiplicar por <b>10</b> es añadir un 0 (47 × 10 = 470). Con estas dos cosas, ¡ya sabes casi todo lo que necesitas!</p>`,
      svg("Repaso: 47 por 6 igual a 282 y 47 por 10 igual a 470", `${mult(90, 56, [["47", "var(--ink)"], ["6", "var(--ink)"], ["282", VE]], { s: 20, paso: 20 })}${t(72, 32, "4", { s: 11, c: RO })}${mult(220, 56, [["47", "var(--ink)"], ["10", "var(--ink)"], ["470", VE]], { s: 20, paso: 20 })}${t(130, 166, "× 10: añade un 0", { s: 13, c: RO })}`)],
    ["Multiplicar por decenas completas", `<p>Las <b>decenas completas</b> son 10, 20, 30, 40… Para multiplicar por ellas hay un truco en dos pasos:</p><ol><li>Multiplica por la cifra de las <b>decenas</b>, sin el cero.</li><li>Añade un <b>cero</b> al final.</li></ol><p>Ejemplo: 12 × 30 → 12 × 3 = 36 → <mark>360</mark>.</p><p>¿Por qué funciona? Porque 30 = 3 × 10. Multiplicar por 30 es multiplicar por 3 y después por 10. Lo mismo con 200, 300…: 4 × 200 → 4 × 2 = 8 → 800.</p>`,
      P.filas("Multiplicar por decenas completas", [["12 × 30", "12 × 3 = 36 → 360", AZ], ["25 × 20", "25 × 2 = 50 → 500", VE], ["7 × 40", "7 × 4 = 28 → 280", RO], ["4 × 200", "4 × 2 = 8 → 800", SO]]),
      P.V("mu2B")],
    ["Partir el número en dos", `<p>Para multiplicar por un número de dos cifras lo <b>descomponemos</b> en decenas y unidades: 14 = 10 + 4.</p><p>Entonces 23 × 14 es lo mismo que hacer <mark>dos multiplicaciones</mark> y sumarlas:</p><ul><li>23 × 4 = 92 (las unidades).</li><li>23 × 10 = 230 (la decena).</li><li>92 + 230 = 322.</li></ul><p>Lo vemos en el dibujo: un rectángulo de 23 × 14 cuadraditos se puede partir en dos trozos, uno de 23 × 10 y otro de 23 × 4. Juntos forman el rectángulo entero.</p>`,
      svg("Rectángulo de 23 por 14 partido en un trozo de 23 por 10 y otro de 23 por 4", `<rect x="30" y="20" width="184" height="80" fill="${AZ}" fill-opacity=".22" stroke="${AZ}" stroke-width="2"/><rect x="30" y="100" width="184" height="32" fill="${RO}" fill-opacity=".22" stroke="${RO}" stroke-width="2"/>${t(122, 66, "23 × 10 = 230", { s: 14, c: AZ })}${t(122, 122, "23 × 4 = 92", { s: 13, c: RO })}${t(122, 14, "23", { s: 11, c: "var(--muted)" })}${t(232, 64, "10", { s: 11, c: AZ })}${t(232, 120, "4", { s: 11, c: RO })}${t(122, 160, "230 + 92 = 322", { s: 16, d: true, c: VE })}`)],
    ["Paso 1: multiplicar por las unidades", `<p>Ahora lo hacemos en <b>columna</b>. Colocamos 23 arriba y 14 abajo, unidades debajo de unidades.</p><p><b>Paso 1</b>: multiplicamos 23 por la cifra de las <b>unidades</b> de abajo (el <b>4</b>), como si fuera una multiplicación por una cifra:</p><ul><li>3 × 4 = 12. Pongo 2 y me llevo 1.</li><li>2 × 4 = 8, + 1 = 9.</li></ul><p>Escribimos <mark>92</mark> debajo de la raya. Este resultado se llama <b>primer producto parcial</b>. «Parcial» quiere decir que es solo una parte del resultado.</p>`,
      svg("Paso uno: 23 por 4 igual a 92, el primer producto parcial", `${mult(150, 50, [["23", "var(--ink)"], ["14", "var(--ink)"], ["92", RO]], { s: 20, paso: 20 })}<rect x="140" y="62" width="20" height="26" rx="5" fill="none" stroke="${RO}" stroke-width="2"/>${t(214, 56, "23 × 4", { s: 12, c: RO })}${t(214, 106, "= 92", { s: 12, c: RO })}${t(130, 160, "primer producto parcial", { s: 13, c: RO })}`)],
    ["Paso 2: multiplicar por las decenas", `<p><b>Paso 2</b>: multiplicamos 23 por la cifra de las <b>decenas</b> de abajo (el <b>1</b>, que en realidad vale 10).</p><p>Como estamos multiplicando por decenas, el resultado se empieza a escribir <mark>una columna a la izquierda</mark>, debajo de las decenas. En el hueco de las unidades podemos poner un <b>0</b> o dejarlo vacío.</p><ul><li>3 × 1 = 3 (va en las decenas).</li><li>2 × 1 = 2 (va en las centenas).</li></ul><p>Escribimos <b>230</b> (o 23_ con el hueco). Es el <b>segundo producto parcial</b>.</p>`,
      svg("Paso dos: 23 por 1 decena igual a 230, desplazado una columna", `${mult(150, 44, [["23", "var(--ink)"], ["14", "var(--ink)"], ["92", RO], ["230", AZ]], { s: 20, paso: 20 })}<rect x="120" y="56" width="20" height="26" rx="5" fill="none" stroke="${AZ}" stroke-width="2"/><path d="M150 136 V 148" stroke="${AZ}" stroke-width="2"/>${t(214, 106, "23 × 10", { s: 12, c: AZ })}${t(214, 122, "= 230", { s: 12, c: AZ })}${t(150, 166, "hueco o cero", { s: 11, c: AZ })}`, 180)],
    ["Paso 3: sumar los productos parciales", `<p><b>Paso 3</b>: trazamos otra raya y <mark>sumamos</mark> los dos productos parciales, columna a columna:</p><p style="text-align:center">92 + 230 = 322</p><p>¡Ya está! 23 × 14 = <b>322</b>.</p><p>Resumen de los tres pasos:</p><ol><li>Multiplica por las <b>unidades</b>.</li><li>Multiplica por las <b>decenas</b>, empezando una columna a la izquierda.</li><li><b>Suma</b> los productos parciales.</li></ol>`,
      svg("Multiplicación completa 23 por 14 igual a 322", `${mult(150, 30, [["23", "var(--ink)"], ["14", "var(--ink)"], ["92", RO], ["230", AZ], ["322", VE]], { s: 18, paso: 20 })}${t(214, 76, "1.º × 4", { s: 11, c: RO, a: "start" })}${t(214, 101, "2.º × 10", { s: 11, c: AZ, a: "start" })}${t(214, 142, "3.º suma", { s: 11, c: VE, a: "start" })}`, 180)],
    ["Otro ejemplo, con llevadas", `<p>Vamos a calcular <b>156 × 32</b>.</p><ul><li><b>Paso 1</b> (× 2): 6 × 2 = 12, pongo 2 y me llevo 1; 5 × 2 = 10, + 1 = 11, pongo 1 y me llevo 1; 1 × 2 = 2, + 1 = 3. → <b>312</b>.</li><li><b>Paso 2</b> (× 3 decenas): 6 × 3 = 18, pongo 8 y me llevo 1; 5 × 3 = 15, + 1 = 16, pongo 6 y me llevo 1; 1 × 3 = 3, + 1 = 4. → <b>468</b>, empezando en las decenas: 4.680.</li><li><b>Paso 3</b>: 312 + 4.680 = <mark>4.992</mark>.</li></ul><p>Cuando hay llevadas, tacha las del paso 1 antes de empezar el paso 2 para no confundirlas.</p>`,
      svg("Multiplicación 156 por 32 igual a 4992", `${mult(160, 30, [["156", "var(--ink)"], ["32", "var(--ink)"], ["312", RO], ["4680", AZ], ["4992", VE]], { s: 18, paso: 19 })}${t(222, 76, "156 × 2", { s: 10.5, c: RO })}${t(222, 101, "156 × 30", { s: 10.5, c: AZ })}${t(222, 142, "suma", { s: 10.5, c: VE })}`, 180)],
    ["Estimar para comprobar", `<p>Las multiplicaciones por dos cifras son largas y es fácil equivocarse. Por eso conviene <b>estimar</b> antes el resultado.</p><p>Redondeamos los factores a números fáciles y multiplicamos:</p><ul><li>23 × 14 → 20 × 15 = 300. El resultado exacto, 322, está cerca. ✔</li><li>156 × 32 → 150 × 30 = 4.500. El resultado exacto, 4.992, está cerca. ✔</li></ul><p>Si al estimar sale 300 y a ti te ha salido 3.220 o 32, ¡algo ha ido mal! Seguramente has colocado mal un producto parcial. <mark>Estimar te avisa del error.</mark></p>`,
      P.filas("Estimar el resultado de una multiplicación", [["23 × 14", "≈ 20 × 15 = 300 → 322 ✔", AZ], ["156 × 32", "≈ 150 × 30 = 4.500 → 4.992 ✔", VE], ["23 × 14 = 3.220", "¡lejos de 300! ✘", RO]])],
    ["Problemas con multiplicaciones grandes", `<p><b>Problema:</b> una granja envasa huevos en cajas de 12. Hoy ha llenado 45 cajas. ¿Cuántos huevos ha envasado?</p><ol><li><b>Datos</b>: 12 huevos por caja; 45 cajas.</li><li><b>Operación</b>: grupos iguales → 12 × 45 (o 45 × 12, da lo mismo).</li><li><b>Cálculo</b>: 45 × 2 = 90; 45 × 10 = 450; 90 + 450 = 540.</li><li><b>Estimación</b>: 45 × 10 = 450, algo más → tiene sentido.</li><li><b>Solución</b>: <mark>540 huevos</mark>.</li></ol><p>Truco: pon abajo el número que sea más cómodo. Aquí, 12 es más fácil (tiene un 1 en las decenas).</p>`,
      svg("Cajas de doce huevos: 45 cajas por 12 huevos igual a 540", `${[0, 1, 2].map((b) => `<rect x="${20 + b * 76}" y="36" width="68" height="40" rx="8" fill="${SO}" fill-opacity=".2" stroke="${SO}" stroke-width="2"/>${[...Array(12)].map((_, i) => `<ellipse cx="${29 + b * 76 + (i % 6) * 10}" cy="${48 + Math.floor(i / 6) * 16}" rx="4" ry="5.5" fill="var(--card)" stroke="${NA}" stroke-width="1.4"/>`).join("")}`).join("")}${t(130, 100, "… 45 cajas", { s: 12, c: "var(--muted)" })}${t(130, 148, "12 × 45 = 540 huevos", { s: 16, d: true, c: AZ })}`)],
  ],
  figura: ["La multiplicación por dos cifras", P.pasos("Pasos para multiplicar por dos cifras", [["× UNIDADES", ["23 × 4", "= 92"], RO], ["× DECENAS", ["23 × 10", "= 230"], AZ], ["SUMAR", ["92 + 230", "= 322"], VE], ["ESTIMAR", ["20 × 15", "≈ 300 ✔"], SO]])],
  video: P.V("mu2V", true),
  ejemplos: [
    ["Calcula 35 × 20.", ["35 × 2 = 70.", "Añado un cero."], "700"],
    ["Calcula 42 × 13.", ["Paso 1: 42 × 3 = 126.", "Paso 2: 42 × 1 decena = 420.", "Paso 3: 126 + 420 = 546."], "546"],
    ["En un teatro hay 18 filas de 25 asientos. ¿Cuántos asientos hay?", ["25 × 18: 25 × 8 = 200.", "25 × 10 = 250.", "200 + 250 = 450.", "Estimo: 20 × 25 = 500, cerca."], "450 asientos"],
  ],
  errores: [
    "No desplazar una columna a la izquierda el segundo producto parcial.",
    "Mezclar las llevadas del primer paso con las del segundo.",
    "Multiplicar unidades por unidades y decenas por decenas solamente (23 × 14 no es 2 × 1 y 3 × 4).",
    "Olvidar sumar los productos parciales al final.",
    "No estimar y dar por buenos resultados absurdos.",
  ],
  ejercicios: [
    ["Calcula 24 × 30 y 15 × 40.", "720 y 600."],
    ["Descompón 26 en decenas y unidades y calcula 12 × 26 por partes.", "26 = 20 + 6; 12 × 6 = 72; 12 × 20 = 240; 72 + 240 = 312."],
    ["Calcula 31 × 12.", "372."],
    ["Calcula 54 × 21.", "1.134."],
    ["Calcula 68 × 15.", "1.020."],
    ["Calcula 123 × 24.", "2.952."],
    ["Estima 49 × 21 y después calcúlalo.", "50 × 20 = 1.000; exacto: 1.029."],
    ["¿Dónde se escribe el segundo producto parcial? ¿Por qué?", "Una columna a la izquierda, porque estamos multiplicando por decenas."],
    ["Una caja tiene 24 latas. ¿Cuántas latas hay en 16 cajas?", "384 latas."],
    ["Un autobús hace 32 viajes al mes y lleva 45 personas en cada uno. ¿Cuántas personas lleva al mes?", "1.440 personas."],
  ],
  quiz: [
    ["13 × 20 =", ["260", "26", "2.600"], "13 × 2 = 26 → 260."],
    ["14 se descompone en…", ["10 + 4", "1 + 4", "7 + 7 solamente"], "1 decena y 4 unidades."],
    ["En 23 × 14, el primer paso es…", ["23 × 4", "23 × 1", "2 × 1"], "Primero las unidades."],
    ["El segundo producto parcial se escribe…", ["una columna a la izquierda", "debajo de las unidades", "arriba"], "Son decenas."],
    ["El resultado se obtiene…", ["sumando los productos parciales", "restándolos", "multiplicándolos"], "Paso 3."],
    ["21 × 11 =", ["231", "221", "211"], "21 + 210."],
    ["30 × 30 =", ["900", "90", "9.000"], "3 × 3 = 9 y dos ceros."],
    ["La mejor estimación de 39 × 21 es…", ["40 × 20 = 800", "30 × 20 = 600", "40 × 30 = 1.200"], "Redondeamos a la decena."],
    ["Si 25 × 12 = 300, entonces 12 × 25 =", ["300", "250", "120"], "Conmutativa."],
    ["22 × 12 =", ["264", "244", "2.640"], "44 + 220."],
  ],
  examen: [
    ["32 × 13 =", ["416", "396", "426"], "96 + 320."],
    ["15 × 50 =", ["750", "75", "7.500"], "15 × 5 = 75 → 750."],
    ["¿Qué resultado es imposible para 48 × 22?", ["105", "1.056", "≈ 1.000"], "50 × 20 = 1.000."],
    ["Hay 12 bolsas con 35 caramelos. ¿Cuántos caramelos?", ["420", "47", "385"], "35 × 12."],
  ],
  feynman: ["Cómo se multiplica por 20, 30 o 40", "Por qué 23 × 14 es lo mismo que 23 × 4 más 23 × 10", "Qué es un producto parcial", "Por qué el segundo producto parcial se corre una columna", "Cómo me ayuda estimar a encontrar errores"],
  mapa: ["MULTIPLICAR POR DOS CIFRAS", [["× decenas", "12 × 30: × 3 y un 0", AZ], ["Paso 1", "por las unidades", RO], ["Paso 2", "por las decenas, corrido", VE], ["Paso 3", "sumar y estimar", SO]]],
  tarjetas: [
    ["Decenas completas", "10, 20, 30, 40…: multiplica por la cifra y añade un 0."],
    ["Descomponer", "14 = 10 + 4: se multiplica por cada parte y se suma."],
    ["Producto parcial", "Cada uno de los resultados intermedios antes de sumar."],
    ["Primer producto parcial", "El número de arriba por las unidades de abajo."],
    ["Segundo producto parcial", "El número de arriba por las decenas; se escribe una columna a la izquierda."],
    ["Hueco o cero", "En el segundo producto, el lugar de las unidades queda vacío o con un 0."],
    ["Producto final", "La suma de los productos parciales."],
    ["Estimar", "Redondear los factores para saber más o menos el resultado."],
  ],
  familias: ["Calculad cuántos días tienen 12 meses de unos 30 días (12 × 30).", "Buscad cajas con filas y columnas (huevos, bombones) y multiplicad.", "Pedid que expliquen en voz alta los tres pasos mientras resuelven.", "Comprobad las multiplicaciones de los deberes estimando antes."],
  saberes: "Sentido numérico y operaciones: multiplicación por decenas completas; algoritmo de la multiplicación por dos cifras con productos parciales; descomposición aditiva y propiedad distributiva intuitiva; estimación de productos; resolución de problemas",
  ideas: ["Modelo de área con papel cuadriculado para ver los productos parciales.", "Multiplicaciones «con fallo» para descubrir dónde está el error.", "Calcular asientos del salón de actos o baldosas del patio."],
});

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Multiplicar con el método de la cuadrícula", "Usar el truco para multiplicar por 11", "Encontrar errores en multiplicaciones", "Conocer la multiplicación rusa y multiplicar con el tiempo"],
  lectura: { titulo: "La pizzería de Gianni", html: `<p>Cada sábado, Clara ayuda a su tío Gianni en la pizzería del barrio. Su trabajo favorito es preparar las cajas para los pedidos a domicilio.</p><p>Aquel sábado, a primera hora, sonó el teléfono. Era la directora de un colegio.</p><p>—Queremos pizzas para la fiesta de fin de curso —dijo—. Son 24 clases y cada clase quiere 13 porciones.</p><p>Gianni colgó y se rascó la cabeza.</p><p>—Clara, tú que estás en tercero, ¿cuántas porciones son?</p><p>Clara cogió un papel y escribió 24 × 13 en columna. Primero multiplicó por el 3: 72. Luego por el 1, que en realidad era un 10: 240. Al final sumó: 72 + 240 = 312.</p><p>—¡312 porciones!</p><p>—¿Y cuántas pizzas son, si cada pizza tiene 8 porciones?</p><p>—Eso es dividir —dijo Clara—, y todavía lo estamos aprendiendo… Pero puedo probar: 8 × 40 = 320. Un poco menos de 40 pizzas.</p><p>—Exactamente 39 —dijo Gianni, después de hacer la cuenta—. ¡Qué buena estimación!</p><p>Esa tarde, el horno no paró ni un minuto. Cuando llegó la furgoneta del colegio, Clara contó las cajas una a una. Treinta y nueve. Ni una más ni una menos.</p><p>—Socia —le dijo su tío, chocándole la mano—, el sábado que viene te subo el sueldo: dos porciones en vez de una.</p>` },
  tras: {
    "Partir el número en dos": [
      ["El método de la cuadrícula", `<p>Hay una forma muy visual de multiplicar por dos cifras: el <mark>método de la cuadrícula</mark> (o del rectángulo). Consiste en descomponer los <b>dos</b> factores y multiplicar cada parte por cada parte.</p><p><b>Ejemplo</b>: 23 × 14.</p><ul><li><b>1.</b> Descomponemos: 23 = 20 + 3 y 14 = 10 + 4.</li><li><b>2.</b> Dibujamos una cuadrícula de 2 × 2. Arriba escribimos 20 y 3; a la izquierda, 10 y 4.</li><li><b>3.</b> Rellenamos cada casilla multiplicando su fila por su columna: 20 × 10 = <b>200</b>; 3 × 10 = <b>30</b>; 20 × 4 = <b>80</b>; 3 × 4 = <b>12</b>.</li><li><b>4.</b> Sumamos todas las casillas: 200 + 30 + 80 + 12 = <b>322</b>.</li></ul><p>¡Es el mismo resultado que en columna! De hecho, en la multiplicación en columna hacemos lo mismo, pero más resumido: el primer producto parcial (92) es 80 + 12, y el segundo (230) es 200 + 30.</p><p>¿Por qué se llama del rectángulo? Porque si dibujas un rectángulo de 23 cuadraditos de largo y 14 de alto y lo partes en cuatro trozos, cada casilla de la cuadrícula es uno de esos trozos. Contar todos los cuadraditos es lo mismo que multiplicar.</p><p>Este método es muy útil para entender la multiplicación y para comprobar resultados.</p>`,
        L6.filas("23 × 14", [["20 × 10", "200", cAZ], ["3 × 10", "30", cVE], ["20 × 4", "80", cNA], ["3 × 4", "12 → 322", cRO]]), ["A5ZtV-cQCsg", "Método Singapur. La multiplicación en 3º y 4º de primaria", "Merlion Maths", 46349]],
    ],
    "Otro ejemplo, con llevadas": [
      ["El truco del 11", `<p>Multiplicar un número de dos cifras <mark>por 11</mark> tiene un truco que parece magia:</p><ul><li><b>1.</b> Separa las dos cifras del número, dejando un hueco en medio. Para 23 × 11 → 2 _ 3.</li><li><b>2.</b> Suma las dos cifras: 2 + 3 = 5.</li><li><b>3.</b> Pon la suma en el hueco: <b>253</b>.</li></ul><p>Más ejemplos: 41 × 11 → 4 (4 + 1) 1 = <b>451</b>. 62 × 11 → 6 (6 + 2) 2 = <b>682</b>.</p><p>¿Y si la suma de las cifras es 10 o más? Entonces <b>nos llevamos una</b> a la izquierda. 68 × 11 → 6 + 8 = 14 → escribimos el 4 en el hueco y sumamos 1 al 6 → <b>748</b>.</p><p>¿Por qué funciona? Porque multiplicar por 11 es multiplicar por 10 y por 1, y sumar: 23 × 11 = 230 + 23 = 253. Al sumar en columna, la cifra del medio es justo la suma de las dos cifras de 23.</p><p>Compruébalo en columna con 35 × 11. ¿Te sale 385?</p><p><b>Reto con amigos</b>: pide a un compañero que diga un número de dos cifras y que lo multiplique por 11 con la calculadora. Mientras tanto, tú lo calculas de cabeza con el truco. ¿Quién termina antes? Con un poco de práctica, ¡ganarás tú a la calculadora!</p>`,
        H6.flujo("23 × 11", ["separa|2 _ 3", "suma|2 + 3 = 5", "pon en|el hueco", "= 253|"], cMO), ["TMYMEuouwek", "TRUCO para MULTIPLICAR por 11 RÁPIDO 🤔 CÁLCULO MENTAL para niños 🚀 Episodio 7", "Smile and Learn - Español", 48093]],
    ],
    "Estimar para comprobar": [
      ["Detectives de errores", `<p>Cuando una multiplicación por dos cifras sale mal, casi siempre es por uno de estos <mark>errores típicos</mark>. Aprender a encontrarlos te ayudará a no cometerlos.</p><ul><li><b>Olvidar el hueco</b> (o el cero) en el segundo producto parcial. Al multiplicar por las decenas, el resultado empieza en la columna de las decenas. Si lo escribes debajo de las unidades, el resultado sale mucho más pequeño. En 23 × 14, el segundo producto es 230, no 23.</li><li><b>Olvidar las llevadas</b> o sumarlas antes de multiplicar. Primero se multiplica y después se suma lo que te llevabas.</li><li><b>Mezclar las llevadas</b> de los dos pasos. Consejo: tacha las llevadas del primer paso antes de empezar el segundo.</li><li><b>Sumar mal</b> los productos parciales al final.</li><li><b>Desordenar las columnas</b>: escribe con letra clara y en cuadrícula.</li></ul><p><b>Caso para detectives</b>: Leo ha calculado 32 × 21 así: 32 × 1 = 32; 32 × 2 = 64; 32 + 64 = 96. ¿Dónde está el error? Ha olvidado que el 2 vale 2 decenas: el segundo producto es 640. El resultado correcto es 32 + 640 = <b>672</b>.</p><p>La estimación lo habría descubierto: 30 × 20 = 600. ¡96 está demasiado lejos!</p>`,
        H6.rueda("Errores", "¡OJO!", [["hueco", cRO], ["llevadas", cAZ], ["suma final", cVE], ["columnas", cNA]])],
    ],
  },
  final: [
    ["Multiplicar el tiempo", `<p>La multiplicación es muy útil para calcular <mark>tiempos largos</mark>:</p><ul><li>Un día tiene <b>24 horas</b>. ¿Cuántas horas tiene una semana? 24 × 7 = <b>168 horas</b>.</li><li>Una hora tiene <b>60 minutos</b>. ¿Cuántos minutos tiene un día? 60 × 24 = <b>1.440 minutos</b>.</li><li>Un minuto tiene <b>60 segundos</b>. ¿Cuántos segundos tiene una hora? 60 × 60 = <b>3.600 segundos</b>.</li><li>Un año tiene <b>52 semanas</b> y un día (o dos, si es bisiesto): 52 × 7 = 364, más 1 = <b>365 días</b>.</li><li>Si duermes <b>10 horas</b> cada noche, en un año duermes 10 × 365 = <b>3.650 horas</b>. ¡Más de 150 días enteros!</li></ul><p><b>Investiga sobre ti</b>:</p><ul><li>¿Cuántos minutos estás en el colegio cada semana? (Ejemplo: 5 horas al día × 5 días = 25 horas; 25 × 60 = 1.500 minutos).</li><li>¿Cuántos meses tienes? Multiplica tus años por 12 y suma los meses desde tu último cumpleaños.</li><li>¿Cuántas veces late tu corazón en una hora? Cuenta los latidos en un minuto (unos 80) y multiplica por 60.</li></ul>`,
      L6.filas("Tiempo", [["semana", "24 × 7 = 168 h", cAZ], ["día", "60 × 24 = 1.440 min", cVE], ["hora", "60 × 60 = 3.600 s", cNA], ["año", "52 × 7 + 1 = 365", cMO]])],
    ["La multiplicación rusa", `<p>Hay una forma antigua de multiplicar en la que solo hace falta saber <b>calcular el doble</b>, <b>calcular la mitad</b> y <b>sumar</b>. Se llama <mark>multiplicación rusa</mark> o «del campesino», porque se cuenta que la usaban campesinos que no se sabían las tablas.</p><p><b>Ejemplo</b>: 13 × 12.</p><ul><li><b>1.</b> Escribe los dos números en dos columnas: 13 y 12.</li><li><b>2.</b> En la columna de la <b>izquierda</b>, calcula la <b>mitad</b> (sin decimales: si sobra algo, se ignora) hasta llegar a 1: 13, 6, 3, 1.</li><li><b>3.</b> En la columna de la <b>derecha</b>, calcula el <b>doble</b> cada vez: 12, 24, 48, 96.</li><li><b>4.</b> Tacha las filas en las que el número de la izquierda es <b>par</b>: la fila del 6 (con el 24).</li><li><b>5.</b> Suma los números de la derecha que quedan: 12 + 48 + 96 = <b>156</b>.</li></ul><p>Comprueba en columna: 13 × 12 = 156. ¡Funciona!</p><p>Funciona porque descompone uno de los números en dobles: 13 = 8 + 4 + 1, y por eso 13 × 12 = 8 × 12 + 4 × 12 + 1 × 12. Los ordenadores usan una idea parecida para multiplicar.</p>`,
      H6.dos("13 × 12", ["MITAD", ["13 · 6", "3 · 1", "tacha pares"], cAZ], ["DOBLE", ["12 · 24", "48 · 96", "suma: 156"], cRO]), ["GQhACsR4Sp0", "Multiplicación rusa en pocos pasos", "Yo Soy Tu Profe", 21232]],
  ],
  ejemplos: [
    ["Calcula 31 × 12 con la cuadrícula.", ["30 × 10 = 300; 1 × 10 = 10; 30 × 2 = 60; 1 × 2 = 2.", "300 + 10 + 60 + 2."], "372."],
    ["Calcula 54 × 11 con el truco.", ["5 + 4 = 9.", "Se pone el 9 entre el 5 y el 4."], "594."],
  ],
  errores: ["En el truco del 11, olvidar llevarse una cuando la suma de las cifras pasa de 9.", "No dejar el hueco en el segundo producto parcial."],
  ejercicios: [
    ["b", "Calcula 72 × 11.", "792."],
    ["b", "¿Cuántas horas tiene una semana?", "168."],
    ["b", "¿Cuántos segundos tiene una hora?", "3.600."],
    ["b", "En la cuadrícula de 23 × 14, ¿cuánto vale 3 × 4?", "12."],
    ["b", "¿Qué cálculos necesita la multiplicación rusa?", "Doble, mitad y sumar."],
    ["m", "Calcula 15 × 13 con la cuadrícula.", "195."],
    ["m", "Calcula 47 × 11.", "517."],
    ["m", "Encuentra el error: 41 × 12 = 82 + 41 = 123.", "El segundo producto es 410: 82 + 410 = 492."],
    ["m", "¿Cuántos minutos hay en 3 horas?", "180."],
    ["m", "Calcula 9 × 16 con la multiplicación rusa.", "144."],
    ["a", "Calcula 89 × 11.", "979."],
    ["a", "¿Cuántas horas duermes en un mes si duermes 10 horas cada noche?", "Unas 300."],
    ["a", "En la lectura, comprueba con la cuadrícula que 24 × 13 = 312.", "200 + 40 + 60 + 12 = 312."],
    ["a", "Explica por qué funciona el truco del 11.", "Porque × 11 es × 10 + × 1."],
  ],
  quiz: [
    ["En la cuadrícula se suman…", ["todas las casillas", "solo la diagonal", "la primera fila"], "Cuadrícula."],
    ["36 × 11 = …", ["396", "336", "369"], "Truco del 11."],
    ["El error más típico es olvidar…", ["el hueco del segundo producto", "el signo ×", "la raya"], "Errores."],
    ["Un día tiene… minutos", ["1.440", "240", "3.600"], "Tiempo."],
    ["En la multiplicación rusa se tachan las filas con número…", ["par a la izquierda", "impar", "mayor"], "Rusa."],
  ],
  examen: [
    ["En la lectura, ¿cuántas porciones pidió el colegio?", ["312", "240", "39"], "Lectura."],
    ["¿Cuánto es 25 × 11?", ["275", "255", "225"], "Truco del 11."],
  ],
  tarjetas: [
    ["Cuadrícula", "Descompón los dos factores y suma las cuatro casillas."],
    ["Truco del 11", "Separa las cifras y pon su suma en medio."],
    ["Detectives de errores", "Hueco, llevadas, suma final, columnas; estima."],
    ["Tiempo y rusa", "24 × 7 = 168 h; mitad, doble y tachar pares."],
  ],
  glosario: [
    ["Cuadrícula", "Dibujo de filas y columnas de casillas."],
    ["Factor", "Cada número que se multiplica."],
    ["Producto parcial", "Resultado de cada paso de la multiplicación."],
    ["Hueco", "Espacio que se deja al multiplicar por las decenas."],
    ["Llevada", "Cifra que pasa a la columna siguiente."],
    ["Truco", "Forma ingeniosa de calcular más rápido."],
    ["Estimación", "Resultado aproximado."],
    ["Doble", "Multiplicar por 2."],
    ["Mitad", "Dividir entre 2."],
    ["Multiplicación rusa", "Método con dobles y mitades."],
    ["Año bisiesto", "Año de 366 días."],
    ["Latido", "Cada golpe del corazón."],
  ],
  situacion: {
    titulo: "La pizzería de la clase",
    reto: "La clase monta una pizzería imaginaria y calcula pedidos grandes, tiempos de horneado y precios.",
    pasos: ["Calcular pedidos grandes con la cuadrícula y en columna.", "Usar el truco del 11 para los pedidos de 11 cajas.", "Revisar los cálculos de otro grupo como detectives de errores.", "Calcular cuántos minutos funciona el horno en una semana."],
    producto: "Un libro de pedidos de la pizzería con todos los cálculos.",
    evaluacion: ["Multiplica con la cuadrícula.", "Aplica el truco del 11.", "Encuentra y corrige errores.", "Multiplica con unidades de tiempo."],
  },
});
