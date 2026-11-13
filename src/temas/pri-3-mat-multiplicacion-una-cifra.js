// Matemáticas 3º de Primaria: la multiplicación por una cifra. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Matriz de puntos: f filas y c columnas desde (x, y) con separación d.
const puntos = (x, y, f, c, d = 14, col = AZ) => [...Array(f * c)].map((_, i) => `<circle cx="${x + (i % c) * d}" cy="${y + Math.floor(i / c) * d}" r="${d * 0.32}" fill="${col}"/>`).join("");
// Operación en columna de dos filas (multiplicación).
const col2 = (x, y, a, b, r, o = {}) => {
  const paso = 20, cif = (n, yy, c) => [...String(n)].reverse().map((d, i) => t(x - i * paso, yy, d, { s: 20, d: true, c })).join("");
  const w = Math.max(String(a).length, String(b).length + 1, String(r).length);
  return `${(o.llevadas || []).map(([k, v]) => t(x - k * paso + 2, y - 24, v, { s: 11, c: RO })).join("")}${cif(a, y)}${cif(b, y + 28)}${t(x - String(b).length * paso - 4, y + 28, "×", { s: 20, c: AZ })}<path d="M${x - w * paso - 4} ${y + 38} H ${x + 12}" stroke="var(--ink)" stroke-width="2.2"/>${cif(r, y + 64, VE)}`;
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "La multiplicación por una cifra",
  minutos: 50,
  objetivos: ["Entender la multiplicación como una suma de sumandos iguales", "Conocer los términos de la multiplicación y repasar las tablas", "Multiplicar en columna por una cifra, sin llevar y llevando", "Usar las propiedades de la multiplicación para calcular mejor"],
  claves: ["multiplicación", "suma repetida", "factores", "producto", "tablas de multiplicar", "doble", "triple", "llevar", "propiedad conmutativa", "veces"],
  pregunta: ["En el cole hay 4 autobuses con 36 niños cada uno. ¿Cuántos niños van de excursión?", "Podríamos sumar 36 + 36 + 36 + 36, pero es más rápido <b>multiplicar</b>: <mark>36 × 4 = 144</mark>. La multiplicación es una forma corta de hacer una suma en la que todos los números son iguales. ¡Van 144 niños!"],
  bloques: [
    ["Multiplicar es sumar el mismo número", `<p>Cuando sumamos varias veces el <b>mismo número</b>, podemos usar una multiplicación:</p><p style="text-align:center">5 + 5 + 5 = <mark>5 × 3</mark> = 15</p><p>Se lee «cinco por tres» y quiere decir «<b>3 veces</b> 5». El signo de multiplicar es <b>×</b> (una cruz pequeña) o, a veces, un punto: 5 · 3.</p><p>Las multiplicaciones están por todas partes: las ruedas de 6 coches (4 × 6), los huevos de 3 docenas (12 × 3) o las patas de 5 arañas (8 × 5).</p>`,
      svg("Tres grupos de cinco manzanas: cinco más cinco más cinco es cinco por tres", `${[0, 1, 2].map((g) => `<rect x="${14 + g * 80}" y="30" width="72" height="58" rx="10" fill="none" stroke="${VE}" stroke-width="2"/>${[0, 1, 2, 3, 4].map((i) => `<circle cx="${30 + g * 80 + (i % 3) * 20}" cy="${48 + Math.floor(i / 3) * 22}" r="7.5" fill="${RO}" fill-opacity=".75"/>`).join("")}`).join("")}${t(130, 120, "5 + 5 + 5 = 15", { s: 15, c: VE })}${t(130, 150, "5 × 3 = 15", { s: 20, d: true, c: AZ })}`)],
    ["Los términos de la multiplicación", `<p>Los números que se multiplican se llaman <b>factores</b> y el resultado se llama <mark>producto</mark>.</p><p style="text-align:center">7 × 4 = 28</p><ul><li>7 y 4 son los <b>factores</b>.</li><li>28 es el <b>producto</b>.</li></ul><p>Palabras que nos avisan de que hay que multiplicar: «<b>veces</b>», «<b>cada uno</b>», «el <b>doble</b>» (× 2), «el <b>triple</b>» (× 3)… Por ejemplo: «el triple de 9» es 9 × 3 = 27.</p>`,
      svg("Siete por cuatro igual a veintiocho: factores y producto", `${t(50, 70, "7", { s: 40, d: true, c: AZ })}${t(90, 70, "×", { s: 32, c: "var(--muted)" })}${t(130, 70, "4", { s: 40, d: true, c: AZ })}${t(170, 70, "=", { s: 32, c: "var(--muted)" })}${t(220, 70, "28", { s: 40, d: true, c: VE })}<path d="M40 90 H 140" stroke="${AZ}" stroke-width="2.5"/>${t(90, 112, "factores", { s: 14, c: AZ })}<path d="M196 90 H 244" stroke="${VE}" stroke-width="2.5"/>${t(220, 112, "producto", { s: 14, c: VE })}${t(130, 156, "doble = × 2 · triple = × 3", { s: 13, c: RO })}`)],
    ["Las tablas de multiplicar", `<p>Para multiplicar rápido necesitamos saber las <b>tablas</b> del 1 al 10 de memoria. Algunos trucos ayudan:</p><ul><li>Tabla del <b>2</b>: es el doble. Tabla del <b>4</b>: el doble del doble.</li><li>Tabla del <b>5</b>: los resultados acaban en 0 o en 5.</li><li>Tabla del <b>9</b>: las cifras del resultado suman 9 (18, 27, 36…).</li><li>Tabla del <b>10</b>: se añade un 0 (7 × 10 = 70).</li></ul><p>Y siempre: cualquier número × 1 da el mismo número, y cualquier número × 0 da <mark>0</mark>.</p>`,
      P.tabla("Trucos para algunas tablas de multiplicar", ["tabla", "truco", "ejemplo"], [["× 2", "el doble", "8 × 2 = 16"], ["× 5", "acaba en 0 o 5", "7 × 5 = 35"], ["× 9", "cifras suman 9", "6 × 9 = 54"], ["× 10", "añade un 0", "4 × 10 = 40"]]),
      P.V("mu1B")],
    ["El orden de los factores", `<p>¿Es lo mismo 3 × 5 que 5 × 3? ¡Sí! Fíjate en esta matriz de puntos: si la miras por filas, son 3 filas de 5 (5 × 3); si la miras por columnas, son 5 columnas de 3 (3 × 5). En los dos casos hay <b>15</b> puntos.</p><p>Es la <mark>propiedad conmutativa</mark>: el orden de los factores no cambia el producto.</p><p>Nos ahorra mucho trabajo: si no recuerdas 8 × 3, piensa en 3 × 8, que quizá te sabes mejor. ¡Así, aprendiendo una tabla, sabes también la mitad de las otras!</p>`,
      svg("Matriz de tres filas y cinco columnas: cinco por tres es igual a tres por cinco", `${puntos(70, 40, 3, 5, 26, MO)}<path d="M54 26 V 108" stroke="${RO}" stroke-width="2"/>${t(36, 72, "3", { s: 16, c: RO })}<path d="M60 120 H 186" stroke="${AZ}" stroke-width="2"/>${t(123, 138, "5", { s: 16, c: AZ })}${t(130, 168, "5 × 3 = 3 × 5 = 15", { s: 16, d: true, c: MO })}`)],
    ["Multiplicar en columna sin llevar", `<p>Para multiplicar un número grande por una cifra, lo colocamos en <b>columna</b>: el número grande arriba y la cifra debajo, a la derecha, debajo de las unidades.</p><p>Multiplicamos la cifra de abajo por <b>cada cifra</b> de arriba, empezando por las <b>unidades</b>:</p><p>Ejemplo: 231 × 3.</p><ul><li>U: 1 × 3 = 3.</li><li>D: 3 × 3 = 9.</li><li>C: 2 × 3 = 6.</li></ul><p>Producto: <mark>693</mark>. Es como hacer tres multiplicaciones pequeñas, una por columna.</p>`,
      svg("Multiplicación en columna sin llevar: 231 por 3 igual a 693", `${col2(150, 56, "231", "3", "693")}${t(214, 56, "1 × 3 = 3", { s: 11, c: SO })}${t(214, 72, "3 × 3 = 9", { s: 11, c: SO })}${t(214, 88, "2 × 3 = 6", { s: 11, c: SO })}${t(130, 160, "de derecha a izquierda", { s: 12, c: SO })}`)],
    ["Multiplicar llevando", `<p>Si al multiplicar una cifra el resultado es <b>10 o más</b>, escribimos las unidades y <mark>nos llevamos las decenas</mark> a la columna siguiente. Allí, primero multiplicamos y después sumamos lo que nos llevábamos.</p><p>Ejemplo: 36 × 4.</p><ul><li>U: 6 × 4 = 24. Escribo 4 y me llevo 2.</li><li>D: 3 × 4 = 12, más 2 que me llevaba = 14. Escribo 14.</li></ul><p>Producto: <b>144</b>. ¡Cuidado! Lo que te llevas se <b>suma</b> después de multiplicar, no se multiplica.</p>`,
      svg("Multiplicación llevando: 36 por 4 igual a 144", `${col2(130, 60, "36", "4", "144", { llevadas: [[1, "2"]] })}${t(208, 54, "6 × 4 = 24", { s: 11, c: RO })}${t(208, 70, "pongo 4,", { s: 11, c: RO })}${t(208, 86, "me llevo 2", { s: 11, c: RO })}${t(208, 112, "3 × 4 + 2", { s: 11, c: AZ })}${t(208, 128, "= 14", { s: 11, c: AZ })}`)],
    ["Números más grandes", `<p>Con números de tres o cuatro cifras se hace igual, columna a columna, sin olvidar las llevadas.</p><p>Ejemplo: 1.257 × 3.</p><ul><li>U: 7 × 3 = 21. Pongo 1 y me llevo 2.</li><li>D: 5 × 3 = 15, + 2 = 17. Pongo 7 y me llevo 1.</li><li>C: 2 × 3 = 6, + 1 = 7. Pongo 7.</li><li>UM: 1 × 3 = 3. Pongo 3.</li></ul><p>Producto: <mark>3.771</mark>. Para comprobar, podemos <b>estimar</b>: 1.257 es casi 1.300, y 1.300 × 3 = 3.900. ¡Está cerca!</p>`,
      svg("Multiplicación llevando: 1257 por 3 igual a 3771", `${col2(150, 60, "1257", "3", "3771", { llevadas: [[1, "2"], [2, "1"]] })}${t(214, 60, "estimo:", { s: 11, c: MO })}${t(214, 76, "1.300 × 3", { s: 11, c: MO })}${t(214, 92, "= 3.900", { s: 11, c: MO })}`)],
    ["Multiplicar por 10, 100 y 1.000", `<p>Hay un truco muy útil:</p><ul><li>Para multiplicar por <b>10</b>, añadimos <b>un cero</b>: 45 × 10 = 450.</li><li>Por <b>100</b>, añadimos <b>dos ceros</b>: 45 × 100 = 4.500.</li><li>Por <b>1.000</b>, añadimos <b>tres ceros</b>: 7 × 1.000 = 7.000.</li></ul><p>¿Por qué? Porque al multiplicar por 10 cada unidad se convierte en una decena: todas las cifras <mark>suben un lugar</mark> en la tabla de valor posicional, y el hueco de las unidades se llena con un 0.</p><p>Con este truco también se calcula fácil 30 × 4: 3 × 4 = 12 y añadimos el cero: 120.</p>`,
      P.filas("Multiplicar por 10, 100 y 1000", [["× 10", "45 → 450 (un cero)", AZ], ["× 100", "45 → 4.500 (dos ceros)", VE], ["× 1.000", "7 → 7.000 (tres ceros)", RO], ["30 × 4", "3 × 4 = 12 → 120", SO]])],
    ["Problemas de multiplicar", `<p>Multiplicamos cuando tenemos <b>varios grupos iguales</b> y queremos saber el total.</p><p><b>Problema:</b> una caja de lápices tiene 24 lápices. ¿Cuántos lápices hay en 5 cajas?</p><ol><li><b>Datos</b>: 24 lápices en cada caja; 5 cajas.</li><li><b>Operación</b>: grupos iguales → multiplicación: 24 × 5.</li><li><b>Cálculo</b>: 4 × 5 = 20, pongo 0 y me llevo 2; 2 × 5 = 10, + 2 = 12.</li><li><b>Solución</b>: <mark>120 lápices</mark>.</li></ol><p>Revisa siempre que el resultado tenga sentido: 5 cajas de unos 20 lápices son unos 100. ¡120 es razonable!</p>`,
      svg("Cinco cajas de veinticuatro lápices: veinticuatro por cinco igual a ciento veinte", `${[0, 1, 2, 3, 4].map((i) => `<rect x="${14 + i * 48}" y="34" width="42" height="56" rx="6" fill="${SO}" fill-opacity=".25" stroke="${SO}" stroke-width="2"/>${[0, 1, 2, 3].map((k) => `<path d="M${22 + i * 48 + k * 8} 84 V 46 l 3 -6 l 3 6" fill="none" stroke="${[AZ, RO, VE, MO][k]}" stroke-width="2.5"/>`).join("")}${t(35 + i * 48, 106, "24", { s: 12 })}`).join("")}${t(130, 150, "24 × 5 = 120 lápices", { s: 16, d: true, c: AZ })}`)],
  ],
  figura: ["La multiplicación por una cifra", P.columnas("Resumen: multiplicar es sumar iguales, términos, multiplicar llevando y por 10, 100 y 1000", [["5 + 5 + 5", "QUÉ ES", ["suma repetida", "5 × 3 = 15"], AZ], ["7 × 4 = 28", "TÉRMINOS", ["factores", "producto"], VE], ["6 × 4 = 24", "LLEVANDO", ["pongo 4", "me llevo 2"], RO], ["45 × 100", "TRUCO", ["añade ceros", "= 4.500"], SO]])],
  video: P.V("mu1V", true),
  ejemplos: [
    ["Escribe como multiplicación y calcula: 8 + 8 + 8 + 8 + 8.", ["Se suma 5 veces el 8.", "8 × 5 = 40."], "8 × 5 = 40"],
    ["Calcula 263 × 4.", ["U: 3 × 4 = 12; pongo 2 y me llevo 1.", "D: 6 × 4 = 24, + 1 = 25; pongo 5 y me llevo 2.", "C: 2 × 4 = 8, + 2 = 10; pongo 10."], "1.052"],
    ["Un tren tiene 6 vagones con 48 asientos cada uno. ¿Cuántos asientos tiene?", ["Grupos iguales: 48 × 6.", "8 × 6 = 48; pongo 8 y me llevo 4.", "4 × 6 = 24, + 4 = 28."], "288 asientos"],
  ],
  errores: [
    "Olvidar sumar lo que me llevo en la columna siguiente.",
    "Multiplicar la llevada en lugar de sumarla después.",
    "Colocar la cifra de abajo debajo de la primera cifra de la izquierda.",
    "Pensar que un número por 0 da el mismo número (da 0).",
    "No saberse bien las tablas y contar con los dedos cada vez.",
  ],
  ejercicios: [
    ["Escribe como multiplicación: 7 + 7 + 7 + 7.", "7 × 4 = 28."],
    ["En 9 × 6 = 54, ¿cuáles son los factores y cuál el producto?", "Factores 9 y 6; producto 54."],
    ["Calcula el doble de 35 y el triple de 20.", "70 y 60."],
    ["Calcula 312 × 3.", "936."],
    ["Calcula 58 × 7.", "406."],
    ["Calcula 1.426 × 2.", "2.852."],
    ["Calcula 64 × 10, 64 × 100 y 9 × 1.000.", "640, 6.400 y 9.000."],
    ["Si 6 × 8 = 48, ¿cuánto es 8 × 6? ¿Por qué?", "48, porque el orden de los factores no cambia el producto."],
    ["Una entrada de cine cuesta 7 €. ¿Cuánto pagan 9 amigos?", "63 €."],
    ["Un libro tiene 125 páginas. ¿Cuántas páginas tienen 4 libros iguales?", "500 páginas."],
  ],
  quiz: [
    ["6 + 6 + 6 es lo mismo que…", ["6 × 3", "6 + 3", "3 × 3"], "Tres veces seis."],
    ["El resultado de una multiplicación se llama…", ["producto", "factor", "suma"], "Los factores se multiplican."],
    ["7 × 8 =", ["56", "54", "63"], "Tabla del 7."],
    ["El triple de 9 es…", ["27", "18", "12"], "9 × 3."],
    ["Cualquier número × 0 =", ["0", "el mismo número", "1"], "Cero veces nada."],
    ["Si 4 × 9 = 36, entonces 9 × 4 =", ["36", "49", "13"], "Propiedad conmutativa."],
    ["23 × 3 =", ["69", "66", "96"], "Sin llevar."],
    ["En 47 × 2, en las unidades pongo… y me llevo…", ["4 y 1", "14", "1 y 4"], "7 × 2 = 14."],
    ["52 × 100 =", ["5.200", "520", "52.000"], "Dos ceros."],
    ["¿Qué palabra suele indicar multiplicar?", ["cada uno", "quedan", "repartir"], "Grupos iguales."],
  ],
  examen: [
    ["125 × 3 =", ["375", "365", "355"], "5 × 3 = 15, llevo 1."],
    ["8 × 1.000 =", ["8.000", "800", "80.000"], "Tres ceros."],
    ["Hay 7 cajas con 15 huevos. ¿Cuántos huevos?", ["105", "22", "75"], "15 × 7."],
    ["¿Qué tabla tiene resultados que acaban en 0 o 5?", ["la del 5", "la del 2", "la del 9"], "5, 10, 15…"],
  ],
  feynman: ["Por qué multiplicar es sumar el mismo número varias veces", "Qué son los factores y el producto", "Qué hacemos con lo que nos llevamos", "Por qué al multiplicar por 10 se añade un cero", "Cómo sé que un problema se resuelve multiplicando"],
  mapa: ["LA MULTIPLICACIÓN", [["Qué es", "suma de sumandos iguales", AZ], ["Términos", "factores y producto", VE], ["En columna", "por cada cifra, llevando", RO], ["Trucos", "conmutativa · × 10, 100", SO]]],
  tarjetas: [
    ["Multiplicación", "Suma de varios sumandos iguales: 4 × 3 = 4 + 4 + 4."],
    ["Factores", "Los números que se multiplican."],
    ["Producto", "El resultado de la multiplicación."],
    ["Doble y triple", "Multiplicar por 2 y por 3."],
    ["Propiedad conmutativa", "El orden de los factores no cambia el producto."],
    ["Llevar", "Si sale 10 o más, escribo las unidades y sumo las decenas en la columna siguiente."],
    ["× 10, × 100, × 1.000", "Se añaden uno, dos o tres ceros."],
    ["× 0", "Cualquier número por 0 es 0."],
  ],
  familias: ["Repasad una tabla cada día cantando o con juegos de cartas.", "Buscad multiplicaciones en casa: patas de las sillas, huevos de las hueveras.", "En el súper, calculad el precio de varios productos iguales.", "Jugad a «el doble y el triple» con números que digan los niños."],
  saberes: "Sentido numérico y operaciones: la multiplicación como suma de sumandos iguales; términos; tablas de multiplicar; propiedad conmutativa; algoritmo de la multiplicación por una cifra con y sin llevadas; multiplicación por 10, 100 y 1.000; resolución de problemas",
  ideas: ["Matrices con gomets o piezas para descubrir la propiedad conmutativa.", "Bingo de las tablas de multiplicar.", "Tienda de clase: comprar varias unidades del mismo producto."],
});
