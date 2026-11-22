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

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Usar el truco de los dedos para la tabla del 9", "Contar con filas y columnas", "Multiplicar de cabeza descomponiendo", "Descubrir patrones en la tabla pitagórica"],
  lectura: { titulo: "Las butacas del teatro", html: `<p>La clase de 3.º fue de excursión al teatro de la ciudad a ver una obra de títeres. Al entrar, Óscar se quedó con la boca abierta: el patio de butacas era enorme, con filas y filas de asientos de terciopelo rojo.</p><p>—¿Cuántas butacas habrá? —preguntó—. ¿Mil? ¿Un millón?</p><p>—Podrías contarlas una a una —le dijo su amiga Julia—, pero tardarías toda la obra.</p><p>Óscar se fijó mejor. Todas las filas eran iguales. Contó las butacas de una fila: 9. Después contó las filas: 8.</p><p>—¡Ya lo tengo! Son 8 filas de 9 butacas. Eso es 9 × 8…</p><p>Se quedó pensando. La tabla del 9 era la que peor se sabía.</p><p>Entonces Julia levantó las dos manos con los dedos estirados.</p><p>—Mira, mi abuela me enseñó un truco. Bajas el dedo número 8, contando desde la izquierda. Los dedos que quedan a la izquierda son las decenas, y los de la derecha, las unidades.</p><p>Óscar bajó el octavo dedo. A la izquierda quedaban 7 dedos; a la derecha, 2.</p><p>—¡72 butacas!</p><p>Se apagaron las luces y empezó la función. Pero Óscar pasó un buen rato mirándose las manos, probando el truco con todos los números del 1 al 10.</p>` },
  tras: {
    "Las tablas de multiplicar": [
      ["El truco de los dedos para la tabla del 9", `<p>La <b>tabla del 9</b> tiene un truco mágico que solo necesita tus <mark>diez dedos</mark>:</p><ul><li><b>1.</b> Pon las dos manos delante, con las palmas hacia ti y los dedos estirados.</li><li><b>2.</b> Numera los dedos del 1 al 10, empezando por el meñique de la mano izquierda.</li><li><b>3.</b> Para calcular 9 × 4, <b>dobla el dedo número 4</b>.</li><li><b>4.</b> Cuenta los dedos que quedan a la <b>izquierda</b> del dedo doblado: 3. Son las <b>decenas</b>.</li><li><b>5.</b> Cuenta los dedos que quedan a la <b>derecha</b>: 6. Son las <b>unidades</b>.</li><li><b>6.</b> El resultado es <b>36</b>.</li></ul><p>Funciona con todos: 9 × 7 → doblas el 7.º dedo → quedan 6 a la izquierda y 3 a la derecha → <b>63</b>.</p><p>¿Por qué funciona? Fíjate en la tabla del 9: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90. Las decenas <b>suben</b> de 1 en 1 (0, 1, 2, 3…) y las unidades <b>bajan</b> de 1 en 1 (9, 8, 7, 6…). Al doblar un dedo más a la derecha, hay un dedo más a la izquierda y uno menos a la derecha.</p><p>Otro truco: 9 × un número es lo mismo que <b>10 × ese número, menos el número</b>. 9 × 6 = 60 − 6 = 54.</p>`,
        L6.filas("9 × 4", [["dobla", "el dedo 4", cAZ], ["izquierda", "3 decenas", cVE], ["derecha", "6 unidades", cNA], ["resultado", "36", cRO]])],
    ],
    "El orden de los factores": [
      ["Contar sin contar: filas y columnas", `<p>Muchas cosas están colocadas en <mark>filas y columnas</mark>, formando un rectángulo. Para saber cuántas hay, no hace falta contarlas una a una: basta con <b>multiplicar</b> el número de filas por el número de elementos de cada fila.</p><ul><li>Un <b>cartón de huevos</b> tiene 2 filas de 6: 6 × 2 = <b>12 huevos</b> (una docena).</li><li>Una <b>tableta de chocolate</b> de 4 filas de 6 onzas tiene 6 × 4 = <b>24 onzas</b>.</li><li>Un <b>tablero de ajedrez</b> tiene 8 filas de 8 casillas: 8 × 8 = <b>64 casillas</b>.</li><li>Una caja de <b>lápices de colores</b> de 2 filas de 12 tiene 24 lápices.</li><li>Las <b>ventanas</b> de un edificio: si tiene 5 pisos con 4 ventanas cada uno, son 20 ventanas en la fachada.</li></ul><p>Esta forma de colocar las cosas se llama <b>disposición rectangular</b>. Sirve también para organizar: si en clase hay 24 alumnos, se pueden sentar en 4 filas de 6, en 6 filas de 4, en 3 filas de 8 o en 2 filas de 12.</p><p><b>Investiga</b>: busca en clase o en casa cosas colocadas en filas y columnas (azulejos, botones de un mando, teclas de la calculadora) y calcula cuántas hay con una multiplicación.</p>`,
        H6.rueda("Filas", "FILAS", [["huevos", cNA], ["chocolate", cMO], ["ajedrez", cAZ], ["ventanas", cVE]])],
    ],
    "Multiplicar por 10, 100 y 1.000": [
      ["Multiplicar de cabeza: descomponer", `<p>Para multiplicar de cabeza un número de dos cifras por una cifra, hay un truco muy útil: <mark>descomponer</mark> el número en decenas y unidades, multiplicar cada parte y después sumar.</p><p><b>Ejemplo</b>: 23 × 4.</p><ul><li>Descomponemos: 23 = 20 + 3.</li><li>Multiplicamos las decenas: 20 × 4 = 80.</li><li>Multiplicamos las unidades: 3 × 4 = 12.</li><li>Sumamos: 80 + 12 = <b>92</b>.</li></ul><p><b>Otro ejemplo</b>: 46 × 3 → 40 × 3 = 120; 6 × 3 = 18; 120 + 18 = <b>138</b>.</p><p>Se puede dibujar como un <b>rectángulo partido</b> en dos trozos: uno de 20 por 4 y otro de 3 por 4. El área total es la suma de los dos trozos.</p><p>Con números de tres cifras también funciona: 125 × 4 → 100 × 4 = 400; 20 × 4 = 80; 5 × 4 = 20; total: <b>500</b>.</p><p>Otro truco para números que están cerca de una decena: <b>redondear y quitar</b>. 19 × 5 = 20 × 5 − 5 = 100 − 5 = <b>95</b>. Y 29 × 3 = 30 × 3 − 3 = 90 − 3 = <b>87</b>.</p><p>Practica cada día un par de multiplicaciones de cabeza: es como un entrenamiento para el cerebro.</p>`,
        H6.flujo("23 × 4", ["20 + 3|", "20 × 4|= 80", "3 × 4|= 12", "80 + 12|= 92"], cVE)],
    ],
  },
  final: [
    ["La tabla pitagórica y sus secretos", `<p>La <mark>tabla pitagórica</mark> es un cuadro que reúne todas las tablas de multiplicar. Se llama así en honor a <b>Pitágoras</b>, un sabio de la antigua Grecia. En la primera fila y en la primera columna se escriben los números del 1 al 10; en cada casilla, el producto de su fila por su columna.</p><p>Si la miras bien, descubrirás <b>secretos</b>:</p><ul><li>Es <b>simétrica</b>: si la doblas por la diagonal, los números coinciden. Eso pasa porque 3 × 7 = 7 × 3 (propiedad conmutativa). ¡Así que solo hace falta aprender la mitad!</li><li>En la <b>diagonal</b> están los números que resultan de multiplicar un número por sí mismo: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Se llaman <b>números cuadrados</b>, porque con esa cantidad de puntos se puede formar un cuadrado.</li><li>La fila del 5 alterna resultados que acaban en <b>5</b> y en <b>0</b>.</li><li>La fila del 10 es como la del 1, pero con un 0 al final.</li><li>La fila del 4 es el doble de la del 2, y la del 8, el doble de la del 4.</li></ul><p><b>Actividad</b>: dibuja la tabla en una cuadrícula y colorea con un color los resultados pares y con otro los impares. ¿Qué dibujo sale?</p>`,
      L6.filas("Secretos", [["diagonal", "cuadrados", cAZ], ["simetría", "3×7 = 7×3", cVE], ["fila del 5", "acaba en 0 o 5", cNA], ["fila del 8", "doble del 4", cMO]]), ["GRhsECnnqy8", "Cómo aprender a multiplicar con la Tabla de Pitágoras | Escuela divertida para niños", "guiainfantil", 153090]],
    ["Multiplicar con rayas", `<p>Existe una forma muy curiosa de multiplicar <mark>dibujando rayas</mark>, que a veces se llama método japonés o de las líneas. No sustituye a la multiplicación en columna, pero ayuda a entender lo que pasa.</p><p><b>Ejemplo</b>: 13 × 2.</p><ul><li><b>1.</b> Dibuja el 13 con rayas <b>inclinadas hacia la derecha</b>: 1 raya (las decenas) y, separadas, 3 rayas (las unidades).</li><li><b>2.</b> Dibuja el 2 con 2 rayas <b>inclinadas hacia el otro lado</b>, cruzando todas las anteriores.</li><li><b>3.</b> Cuenta los <b>puntos de cruce</b> en cada zona. Los cruces con la raya de las decenas son decenas: 2. Los cruces con las 3 rayas de las unidades son unidades: 6.</li><li><b>4.</b> El resultado es <b>2 decenas y 6 unidades = 26</b>.</li></ul><p>Si en alguna zona hay 10 cruces o más, nos llevamos una a la zona de la izquierda, igual que en la multiplicación en columna.</p><p>Este método muestra por qué funciona multiplicar «por partes»: primero las decenas y luego las unidades.</p><p>Pruébalo con 21 × 3, 12 × 4 y 32 × 2, y comprueba los resultados en columna.</p>`,
      H6.flujo("13 × 2", ["1 raya|y 3 rayas", "cruzar|con 2", "contar|cruces", "2 D y 6 U|= 26"], cRO), ["gQcEeMjI6DM", "Cómo multiplicar usando líneas | Multiplicación japonesa | Matemáticas básicas", "ZERO MATH (Zero.Math)", 39383]],
  ],
  ejemplos: [
    ["Calcula 9 × 6 con el truco de los dedos.", ["Dobla el dedo 6.", "Quedan 5 a la izquierda y 4 a la derecha."], "54."],
    ["Calcula de cabeza 34 × 3.", ["30 × 3 = 90; 4 × 3 = 12.", "90 + 12 = 102."], "102."],
  ],
  errores: ["En el truco de los dedos, contar el dedo doblado: no se cuenta.", "Al descomponer, olvidar sumar las dos partes: 23 × 4 no es 80, es 80 + 12."],
  ejercicios: [
    ["b", "Calcula 9 × 3 con los dedos.", "27."],
    ["b", "¿Cuántos huevos hay en un cartón de 2 filas de 6?", "12."],
    ["b", "¿Cuántas casillas tiene un tablero de ajedrez?", "64."],
    ["b", "Escribe los cinco primeros números cuadrados.", "1, 4, 9, 16, 25."],
    ["b", "Calcula 9 × 5 como 10 × 5 − 5.", "45."],
    ["m", "Calcula de cabeza 42 × 3.", "126."],
    ["m", "Calcula 19 × 4 redondeando.", "76."],
    ["m", "¿De qué formas se pueden sentar 18 alumnos en filas iguales?", "1×18, 2×9, 3×6, 6×3, 9×2, 18×1."],
    ["m", "Calcula 12 × 3 con rayas y explica los cruces.", "3 decenas y 6 unidades: 36."],
    ["m", "¿Por qué la tabla pitagórica es simétrica?", "Porque el orden de los factores no cambia el producto."],
    ["a", "Un edificio tiene 7 pisos con 6 ventanas cada uno. ¿Cuántas ventanas hay?", "42."],
    ["a", "Calcula de cabeza 125 × 3.", "375."],
    ["a", "Colorea pares e impares en la tabla pitagórica y describe el dibujo.", "Respuesta abierta."],
    ["a", "Explica por qué funciona el truco de los dedos.", "Las decenas suben de 1 en 1 y las unidades bajan de 1 en 1."],
  ],
  quiz: [
    ["Con los dedos, para 9 × 8 se dobla el dedo…", ["8", "9", "1"], "Dedos."],
    ["Una tableta de 4 filas de 5 onzas tiene…", ["20 onzas", "9 onzas", "45 onzas"], "Filas."],
    ["23 × 4 = 80 + …", ["12", "3", "4"], "Descomponer."],
    ["Los números de la diagonal de la tabla pitagórica son…", ["cuadrados", "impares", "redondos"], "Tabla."],
    ["En el método de rayas se cuentan…", ["los cruces", "las rayas", "los colores"], "Rayas."],
  ],
  examen: [
    ["En la lectura, ¿cuántas butacas había?", ["72", "17", "81"], "Lectura."],
    ["29 × 3 es lo mismo que…", ["90 − 3", "30 + 3", "29 + 3"], "Descomponer."],
  ],
  tarjetas: [
    ["Dedos del 9", "Dobla el dedo; izquierda decenas, derecha unidades."],
    ["Filas y columnas", "Multiplica filas por elementos de cada fila."],
    ["Descomponer", "23 × 4 = 20 × 4 + 3 × 4."],
    ["Tabla pitagórica y rayas", "Simétrica, cuadrados en la diagonal; contar cruces."],
  ],
  glosario: [
    ["Truco", "Forma ingeniosa de hacer algo más fácil."],
    ["Fila", "Elementos colocados uno al lado de otro."],
    ["Columna", "Elementos colocados uno encima de otro."],
    ["Disposición rectangular", "Colocación en filas y columnas iguales."],
    ["Docena", "Grupo de 12."],
    ["Descomponer", "Separar un número en partes."],
    ["Redondear", "Cambiar un número por otro cercano y fácil."],
    ["Tabla pitagórica", "Cuadro con todas las tablas de multiplicar."],
    ["Diagonal", "Línea que cruza el cuadro de esquina a esquina."],
    ["Simétrico", "Que es igual a los dos lados de una línea."],
    ["Número cuadrado", "Producto de un número por sí mismo."],
    ["Cruce", "Punto donde se cortan dos rayas."],
  ],
  situacion: {
    titulo: "Organizamos el festival del cole",
    reto: "La clase organiza las sillas, los refrescos y los programas del festival usando la multiplicación.",
    pasos: ["Decidir cómo colocar las sillas en filas y columnas y calcular cuántas caben.", "Calcular de cabeza cuántas botellas hay en varias cajas iguales.", "Comprobar los cálculos con el truco de los dedos y el método de rayas.", "Hacer un cartel con la tabla pitagórica para la entrada."],
    producto: "Un plano del festival con todos los cálculos.",
    evaluacion: ["Usa trucos para la tabla del 9.", "Cuenta con filas y columnas.", "Multiplica de cabeza descomponiendo.", "Descubre patrones en la tabla."],
  },
});
