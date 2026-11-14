// Matemáticas 1º ESO · Potencias y raíces. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, comparar, barras, ejes, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const definicion = lienzo("Potencia: dos elevado a cinco es dos por dos por dos por dos por dos, que da treinta y dos", `
  ${tx(70, 66, "2", { fs: 46, c: "var(--pen)", fam: D })}${tx(98, 38, "5", { fs: 24, c: "var(--red)", fam: D })}
  ${tx(70, 96, "base", { fs: 12, c: "var(--pen)" })}${tx(112, 24, "exponente", { fs: 11, c: "var(--red)", a: "start" })}
  ${tx(186, 66, "= 32", { fs: 26, c: "var(--leaf)", fam: D })}
  ${tx(130, 132, "2 · 2 · 2 · 2 · 2", { fs: 18, fam: D })}${tx(130, 160, "el exponente cuenta los factores", { fs: 12, c: "var(--muted)" })}`);

const cuadradoCubo = lienzo("Un cuadrado de lado 3 tiene 9 casillas, tres al cuadrado; un cubo de arista 2 tiene 8 cubitos, dos al cubo", `
  ${[...Array(9)].map((_, i) => `<rect x="${24 + (i % 3) * 26}" y="${30 + Math.floor(i / 3) * 26}" width="24" height="24" rx="3" fill="var(--leaf)" fill-opacity=".35" stroke="var(--leaf)"/>`).join("")}
  ${tx(62, 126, "3² = 9", { fs: 16, fam: D, c: "var(--leaf)" })}${tx(62, 146, "«al cuadrado»", { fs: 11, c: "var(--muted)" })}
  <g stroke="var(--pen)" stroke-width="2" fill="var(--pen)" fill-opacity=".18"><path d="M150 60 h60 v60 h-60 z"/><path d="M150 60 l22 -22 h60 l-22 22 z"/><path d="M210 60 l22 -22 v60 l-22 22 z"/></g>
  <path d="M180 60 v60 M150 90 h60 M161 49 h60 M180 60 l22 -22 M210 90 l22 -22 M221 49 v60" stroke="var(--pen)" stroke-width="1.2" fill="none"/>
  ${tx(190, 146, "2³ = 8", { fs: 16, fam: D, c: "var(--pen)" })}${tx(190, 166, "«al cubo»", { fs: 11, c: "var(--muted)" })}`);

const crece = barras("Las potencias de 2 crecen muy deprisa: 2, 4, 8, 16, 32 y 64", [["2¹", 2], ["2²", 4], ["2³", 8], ["2⁴", 16], ["2⁵", 32], ["2⁶", 64]], { titulo: "Doblar y doblar", c: "var(--red)" });

const base10 = lienzo("Potencias de 10: el exponente indica cuántos ceros lleva el número", `
  ${[["10¹", "10"], ["10²", "100"], ["10³", "1 000"], ["10⁶", "1 000 000"], ["10⁹", "mil millones"]].map(([p, v], i) => `${tx(54, 32 + i * 28, p, { fs: 15, c: "var(--pen)", fam: D })}${tx(100, 32 + i * 28, "=", { fs: 14, c: "var(--muted)" })}${tx(176, 32 + i * 28, v, { fs: 14, fam: D, max: 130 })}`).join("")}
  ${tx(130, 172, "exponente = número de ceros", { fs: 12, c: "var(--red)" })}`, 184);

const producto = cajas("Producto y cociente de potencias de la misma base: se suman o se restan los exponentes", [
  ["Producto", ["aᵐ · aⁿ = aᵐ⁺ⁿ", "2³ · 2⁴ = 2⁷"], "var(--pen)"], ["Cociente", ["aᵐ : aⁿ = aᵐ⁻ⁿ", "5⁶ : 5² = 5⁴"], "var(--red)"],
], "Misma base");

const potpot = cajas("Potencia de una potencia y potencias con el mismo exponente", [
  ["Pot. de pot.", ["(aᵐ)ⁿ = aᵐ·ⁿ", "(3²)⁴ = 3⁸"], "var(--leaf)"], ["Mismo exp. ·", ["aⁿ · bⁿ = (a·b)ⁿ", "2³ · 5³ = 10³"], "var(--inf)"],
  ["Mismo exp. :", ["aⁿ : bⁿ = (a:b)ⁿ", "12² : 4² = 3²"], "var(--sun)"], ["¡No vale!", ["2³ + 2² ≠ 2⁵", "8 + 4 = 12"], "var(--red)"],
], "Más propiedades");

const cero = lienzo("Exponente cero: al dividir una potencia entre sí misma sale uno, así que a elevado a cero es uno", `
  ${[["2⁴", "16"], ["2³", "8"], ["2²", "4"], ["2¹", "2"], ["2⁰", "1"]].map(([p, v], i) => `<rect x="${16 + i * 46}" y="36" width="42" height="58" rx="8" fill="var(--card)" stroke="${i === 4 ? "var(--red)" : "var(--pen)"}" stroke-width="2"/>${tx(37 + i * 46, 60, p, { fs: 15, fam: D, max: 36 })}${tx(37 + i * 46, 84, v, { fs: 14, c: "var(--muted)", max: 36 })}`).join("")}
  ${tx(130, 24, "cada paso: dividir entre 2", { fs: 12, c: "var(--muted)" })}${tx(130, 128, "a⁰ = 1", { fs: 22, c: "var(--red)", fam: D })}${tx(130, 154, "(si a no es 0)", { fs: 12, w: 400 })}`);

const raiz = lienzo("Raíz cuadrada: un cuadrado de área 25 tiene lado 5, por eso la raíz de 25 es 5", `
  <rect x="34" y="28" width="100" height="100" rx="4" fill="var(--pen)" fill-opacity=".16" stroke="var(--pen)" stroke-width="2.5"/>
  ${tx(84, 84, "25 m²", { fs: 17, c: "var(--pen)", fam: D })}${tx(84, 148, "lado = ?", { fs: 12, c: "var(--red)" })}
  ${tx(200, 72, "√25 = 5", { fs: 19, fam: D })}${tx(200, 98, "porque 5² = 25", { fs: 12, c: "var(--muted)", max: 110 })}${tx(200, 132, "√ radical", { fs: 11.5, c: "var(--leaf)", max: 110 })}`);

const cuadrados = barras("Cuadrados perfectos del 1 al 8: 1, 4, 9, 16, 25, 36, 49 y 64", [["1²", 1], ["2²", 4], ["3²", 9], ["4²", 16], ["5²", 25], ["6²", 36], ["7²", 49], ["8²", 64]], { titulo: "Cuadrados perfectos", c: "var(--inf)" });

const entera = formula("Raíz entera: la raíz de 40 es 6 con resto 4, porque 6 al cuadrado es 36 y 40 menos 36 es 4", "√40 ≈ 6, resto 4", ["6² = 36 ≤ 40 < 49 = 7²", "radicando = raíz² + resto", "40 = 36 + 4"], "var(--leaf)");

const jer = pasos("Potencias y raíces en la jerarquía: van después de los paréntesis y antes de multiplicar", ["3 + 2 · 4² − √36", "Potencias y raíces: 16 y 6", "Producto: 2 · 16 = 32", "3 + 32 − 6 = 29"], "Jerarquía");

const curva = ejes("Comparación de y igual a dos por x y y igual a dos elevado a x: la potencia crece mucho más rápido", { x: [0, 6], y: [0, 40], paso: 1, pasoY: 10, marcasX: [1, 2, 3, 4, 5], marcasY: [10, 20, 30], curvas: [{ f: (x) => 2 ** x, c: "var(--red)", t: "2ˣ", tx: 4.6, ty: 34 }, { f: (x) => 2 * x, c: "var(--pen)", t: "2 · x", tx: 5.3, ty: 15 }] });

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Potencias y raíces",
  minutos: 100,
  objetivos: [
    "Expresar un producto de factores iguales como potencia y calcular su valor",
    "Reconocer cuadrados y cubos y relacionarlos con áreas y volúmenes",
    "Usar las potencias de base 10 para escribir y descomponer números grandes",
    "Aplicar las propiedades de las potencias de la misma base o del mismo exponente",
    "Calcular raíces cuadradas exactas y enteras",
    "Incluir potencias y raíces en operaciones combinadas",
  ],
  claves: ["potencia", "base", "exponente", "cuadrado", "cubo", "raíz cuadrada", "cuadrado perfecto"],
  pregunta: {
    texto: "Si cada persona reenvía un mensaje a 3 amigos, y estos a otros 3, y así sucesivamente, ¿cuántas personas lo reciben en el sexto reenvío?",
    respuesta: "En cada paso se multiplica por 3: 3 · 3 · 3 · 3 · 3 · 3. Eso se escribe <b>3⁶</b>, una <b>potencia</b>, y vale <mark>729 personas</mark>. Las potencias crecen muy deprisa: en el décimo reenvío serían 59 049.",
  },
  lectura: {
    titulo: "Doblar una hoja hasta la Luna",
    html: `<p>Coge una hoja de papel normal y dóblala por la mitad. Ahora tiene 2 capas. Dóblala otra vez: 4 capas. Otra más: 8. Si pudieras seguir, a la décima vez tendrías 1 024 capas, el grosor de un libro gordo. Inténtalo: verás que a partir del séptimo u octavo doblez ya es imposible, porque el papel se vuelve durísimo.</p><p>Lo sorprendente viene si imaginamos que se pudiera seguir doblando. Una hoja mide aproximadamente una décima de milímetro de grosor. Con 23 dobleces, el taco tendría casi un kilómetro de alto. Con 42 dobleces, ¡llegaría a la Luna, a unos 384 000 km de distancia!</p><p>¿Cómo puede ser? Porque en cada doblez <b>se multiplica</b> el número de capas por 2, y multiplicar una y otra vez por el mismo número hace crecer las cantidades a una velocidad que nuestra intuición no espera. Para escribir estas multiplicaciones repetidas sin llenar la hoja de «· 2 · 2 · 2» usamos las <b>potencias</b>: 2⁴² es «dos multiplicado por sí mismo 42 veces». En este tema aprenderás a calcularlas, a operar con ellas y a deshacerlas con las <b>raíces</b>.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es una potencia?</h3><p>Una <b>potencia</b> es una forma abreviada de escribir un <b>producto de factores iguales</b>:</p><p style="text-align:center"><b>aⁿ = a · a · a · … · a</b> (n veces)</p><ul><li>La <b>base</b> (a) es el factor que se repite.</li><li>El <b>exponente</b> (n) indica cuántas veces se repite.</li></ul><p>Ejemplo: 2⁵ = 2 · 2 · 2 · 2 · 2 = 32. Se lee «dos elevado a cinco» o «dos a la quinta». Cuidado con el error más típico: 2⁵ <b>no</b> es 2 · 5 = 10. El exponente no multiplica a la base, sino que dice cuántas veces aparece.</p><p>Para calcular una potencia se multiplica paso a paso: 3⁴ = 3 · 3 · 3 · 3 = 9 · 3 · 3 = 27 · 3 = 81. Por convenio, un número elevado a 1 es él mismo: a¹ = a. Y una potencia de base 1 siempre vale 1, por grande que sea el exponente: 1¹⁰⁰ = 1.</p>`, svg: definicion },
    { html: `<h3>1.2 Cuadrados y cubos</h3><p>Las potencias de exponente 2 y 3 tienen nombre propio porque nacen de la geometría:</p><ul><li><b>a²</b> se lee «a <b>al cuadrado</b>»: es el área de un cuadrado de lado a. Un cuadrado de 3 cm de lado tiene 3² = 9 cm².</li><li><b>a³</b> se lee «a <b>al cubo</b>»: es el volumen de un cubo de arista a. Un cubo de 2 cm de arista tiene 2³ = 8 cm³.</li></ul>${tabla(["n", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], [["n²", "1", "4", "9", "16", "25", "36", "49", "64", "81", "100"], ["n³", "1", "8", "27", "64", "125", "216", "343", "512", "729", "1 000"]])}<p>Los números de la fila n² se llaman <b>cuadrados perfectos</b>, y los de la fila n³, <b>cubos perfectos</b>. Conviene saberse los cuadrados de memoria hasta 15² = 225 (11² = 121, 12² = 144, 13² = 169, 14² = 196).</p>`, svg: cuadradoCubo },
    { html: `<h3>1.3 Potencias que crecen muy deprisa</h3><p>Cuando una cantidad se multiplica por el mismo número en cada paso, su valor se calcula con una potencia. Las potencias de 2 son las del papel doblado: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1 024… Cada una es el doble de la anterior.</p><p>Este crecimiento se llama <b>exponencial</b> y aparece en muchas situaciones: las bacterias que se dividen en dos cada 20 minutos, un rumor que cada persona cuenta a otras tres, o los seguidores de un vídeo viral. Al principio parece lento, pero enseguida se dispara.</p><p>Compara sumar 2 cada vez con multiplicar por 2 cada vez. Sumando: 2, 4, 6, 8, 10, 12. Multiplicando: 2, 4, 8, 16, 32, 64. A los diez pasos, uno va por 20 y el otro por 1 024. En la gráfica lo verás claramente: la potencia «despega» hacia arriba. Por eso las potencias se usan también en informática, donde la memoria se mide en potencias de 2 (1 KB son 2¹⁰ = 1 024 bytes).</p>`, svg: crece },
    { html: `<h3>1.4 Potencias de base 10</h3><p>Las potencias de 10 son muy fáciles: el exponente dice <mark>cuántos ceros</mark> lleva el resultado. 10³ = 1 000; 10⁶ = 1 000 000 (un millón); 10⁹ son mil millones y 10¹² es un billón.</p><p>Sirven para escribir de forma corta números enormes: la distancia de la Tierra al Sol es de unos 150 000 000 km = <b>15 · 10⁷ km</b>. Así lo hacen científicos y calculadoras.</p><p>Además, cualquier número se puede <b>descomponer</b> con potencias de 10, lo que se llama <b>forma polinómica</b>:</p><p style="text-align:center">7 305 = 7 · 10³ + 3 · 10² + 0 · 10¹ + 5</p><p>Cada cifra se multiplica por la potencia de 10 que corresponde a su posición. Esto conecta con el valor de posición que viste en el tema de los números naturales. Y multiplicar por 10ⁿ es muy sencillo: se añaden n ceros. 46 · 10⁴ = 460 000.</p>`, svg: base10 },
    { html: `<h3>1.5 Potencias de base negativa</h3><p>La base de una potencia puede ser un número negativo, y entonces hay que escribirla entre paréntesis. El signo del resultado depende del exponente:</p><ul><li>Exponente <b>par</b> → resultado <b>positivo</b>: (−2)⁴ = (−2) · (−2) · (−2) · (−2) = +16, porque los signos menos se emparejan.</li><li>Exponente <b>impar</b> → resultado <b>negativo</b>: (−2)³ = −8.</li></ul><p>Hay que distinguir bien (−3)² = 9 de −3² = −9. En el segundo caso, sin paréntesis, el exponente afecta solo al 3, y el signo menos se pone después: −(3 · 3) = −9.</p><p>Este detalle es una fuente de errores muy común, también en la calculadora. Si escribes «−3 x² =» en muchas calculadoras sale −9. Si quieres elevar el número negativo, escribe el paréntesis.</p>` },
    { html: `<h3>2.1 Producto y cociente de potencias de la misma base</h3><ul><li><b>Producto</b>: se deja la base y se <b>suman</b> los exponentes. <mark>aᵐ · aⁿ = aᵐ⁺ⁿ</mark>. 2³ · 2⁴ = 2⁷, porque son 3 + 4 = 7 doses multiplicados.</li><li><b>Cociente</b>: se deja la base y se <b>restan</b> los exponentes. <mark>aᵐ : aⁿ = aᵐ⁻ⁿ</mark> (con m ≥ n). 5⁶ : 5² = 5⁴, porque al simplificar se van dos cincos de arriba y dos de abajo.</li></ul><p>No hace falta memorizar estas reglas: basta con pensar en los factores. Si tienes (2 · 2 · 2) · (2 · 2 · 2 · 2), cuentas siete doses.</p><p>Estas reglas <b>solo</b> valen cuando la base es la misma. 2³ · 3² no se puede escribir como una única potencia. A veces, sin embargo, se puede conseguir la misma base: 2³ · 4² = 2³ · (2²)² = 2³ · 2⁴ = 2⁷, porque 4 = 2².</p>`, svg: producto, video: vb("potB") },
    { html: `<h3>2.2 Potencia de una potencia y mismo exponente</h3><ul><li><b>Potencia de una potencia</b>: se <b>multiplican</b> los exponentes. (aᵐ)ⁿ = aᵐ·ⁿ. (3²)⁴ = 3² · 3² · 3² · 3² = 3⁸.</li><li><b>Producto con el mismo exponente</b>: aⁿ · bⁿ = (a · b)ⁿ. 2³ · 5³ = 10³ = 1 000. ¡Muy útil para calcular mentalmente!</li><li><b>Cociente con el mismo exponente</b>: aⁿ : bⁿ = (a : b)ⁿ. 12² : 4² = 3² = 9.</li></ul><p><b>No hay regla</b> para sumar o restar potencias: 2³ + 2² no es 2⁵. Hay que calcular cada una y luego sumar: 8 + 4 = 12. Tampoco se reparte una potencia sobre una suma: (2 + 3)² = 25, pero 2² + 3² = 13.</p><p>Con estas propiedades se simplifican expresiones largas antes de calcular: (2⁵ · 2³) : (2²)³ = 2⁸ : 2⁶ = 2² = 4.</p>`, svg: potpot },
    { html: `<h3>2.3 El exponente cero</h3><p>¿Qué significa 5⁰? No se puede multiplicar el 5 «cero veces», así que se define para que las propiedades sigan funcionando. Por la regla del cociente, 5³ : 5³ = 5³⁻³ = 5⁰. Pero cualquier número dividido entre sí mismo es 1. Por tanto:</p><p style="text-align:center"><mark>a⁰ = 1</mark> (para cualquier a distinto de 0)</p><p>El dibujo lo muestra de otra manera: en la lista 2⁴ = 16, 2³ = 8, 2² = 4, 2¹ = 2, cada vez que el exponente baja una unidad el resultado se divide entre 2. El siguiente paso es 2 : 2 = 1, que corresponde a 2⁰.</p><p>Así, 7⁰ = 1, 100⁰ = 1 y (−3)⁰ = 1. Pero 0⁰ no tiene un valor definido en este curso. En 3º de ESO aprenderás también qué significan los exponentes negativos, siguiendo la misma lista hacia abajo: 2⁻¹ = 1/2.</p>`, svg: cero },
    { html: `<h3>3.1 La raíz cuadrada</h3><p>La <b>raíz cuadrada</b> es la operación <b>inversa</b> de elevar al cuadrado. La raíz cuadrada de un número a es otro número b que, elevado al cuadrado, da a:</p><p style="text-align:center"><b>√a = b</b> porque <b>b² = a</b></p><p>√49 = 7 porque 7² = 49. Geométricamente, <mark>√a es el lado de un cuadrado de área a</mark>: si una habitación cuadrada mide 25 m², su lado mide √25 = 5 m.</p><p>El símbolo √ se llama <b>radical</b> y el número de dentro, <b>radicando</b>. Hay un detalle: también (−7)² = 49, así que −7 es otra raíz de 49. Por eso se dice que un número positivo tiene dos raíces cuadradas, +7 y −7. Con el símbolo √ se indica la positiva. Los números negativos no tienen raíz cuadrada entre los números que conoces, porque ningún número al cuadrado da negativo.</p>`, svg: raiz, video: vb("potB2") },
    { html: `<h3>3.2 Cuadrados perfectos y raíces exactas</h3><p>Si el radicando es un <b>cuadrado perfecto</b> (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144…), la raíz es <b>exacta</b>: √81 = 9, √144 = 12.</p><p>Con números más grandes, la descomposición en factores primos ayuda: un número es cuadrado perfecto si todos los exponentes de su factorización son <b>pares</b>. Por ejemplo, 3 600 = 2⁴ · 3² · 5², así que √3 600 = 2² · 3 · 5 = 60. En cambio, 72 = 2³ · 3² no es cuadrado perfecto, porque el 2 tiene exponente impar.</p><p>Un truco para descartar: los cuadrados perfectos nunca acaban en 2, 3, 7 u 8. Así que 1 237 o 5 898 no pueden ser cuadrados perfectos. Además, si un cuadrado acaba en 0, acaba en un número par de ceros: 100, 3 600, 490 000.</p>`, svg: cuadrados },
    { html: `<h3>3.3 Raíz entera y resto</h3><p>Si el radicando no es un cuadrado perfecto, calculamos la <b>raíz entera</b>: el mayor número cuyo cuadrado no pasa del radicando. El <b>resto</b> es lo que sobra.</p><p>Ejemplo: √40. Como 6² = 36 y 7² = 49, la raíz entera es <b>6</b> y el resto es 40 − 36 = <b>4</b>. Se cumple siempre: <mark>radicando = raíz² + resto</mark>. Es como la prueba de la división.</p><p>Para números grandes, compara con cuadrados conocidos: √300 está entre 17 (17² = 289) y 18 (18² = 324), así que su raíz entera es 17 y el resto es 11. Con la calculadora, √300 ≈ 17,32: tiene infinitos decimales sin repetición. Estimar bien antes de usar la calculadora te permite descubrir errores: si la pantalla dice que √300 ≈ 173, sabes que algo has hecho mal.</p>`, svg: entera },
    { html: `<h3>3.4 Potencias y raíces en la jerarquía</h3><p>En las operaciones combinadas, las potencias y raíces se hacen <b>después de los paréntesis</b> y <b>antes</b> de las multiplicaciones, divisiones, sumas y restas.</p><p>Ejemplo: 3 + 2 · 4² − √36 → potencias y raíces: 4² = 16 y √36 = 6 → producto: 2 · 16 = 32 → 3 + 32 − 6 = <b>29</b>.</p><p>Fíjate en la diferencia: 2 · 4² = 2 · 16 = 32, pero (2 · 4)² = 8² = 64. El paréntesis cambia lo que se eleva. Y lo mismo ocurre con la raíz: √(9 + 16) = √25 = 5, mientras que √9 + √16 = 3 + 4 = 7. La raíz <b>no</b> se reparte sobre una suma.</p><p>Si dentro de una raíz hay operaciones, se hacen primero: √(5 · 20) = √100 = 10. Con estas reglas podrás calcular el área de figuras, el lado de un cuadrado conocida su área o, en 2º de ESO, aplicar el teorema de Pitágoras.</p>`, svg: jer },
    { html: `<h3>3.5 Potencias y raíces en la vida real</h3><p>Las potencias y las raíces están más presentes de lo que parece:</p><ul><li><b>Informática</b>: la memoria se mide en potencias de 2. Un byte son 2³ = 8 bits, y 1 KB son 2¹⁰ = 1 024 bytes.</li><li><b>Contraseñas</b>: un PIN de 4 cifras tiene 10⁴ = 10 000 combinaciones; si añades una cifra, 10⁵ = 100 000.</li><li><b>Superficies</b>: el área de un cuadrado es l², y para saber el lado de una parcela cuadrada de 400 m² se calcula √400 = 20 m.</li><li><b>Volúmenes</b>: una caja cúbica de 30 cm de arista tiene 30³ = 27 000 cm³, es decir, 27 litros.</li><li><b>Ciencias</b>: las bacterias y las epidemias crecen como potencias, y los números astronómicos se escriben con potencias de 10.</li></ul><p>Cada vez que veas una cantidad que se multiplica una y otra vez por el mismo número, o un cuadrado del que quieres saber el lado, piensa en este tema.</p>`, svg: curva, video: vg("potV") },
  ],
  ejemplos: [
    { enunciado: "Calcula 4³, (−2)⁵, −2⁴ y 10⁵.", pasos: ["4³ = 4 · 4 · 4 = 64.", "(−2)⁵: exponente impar → −32.", "−2⁴ = −(16) = −16.", "10⁵ = 100 000."], resultado: "64; −32; −16; 100 000." },
    { enunciado: "Escribe 60 207 en forma polinómica.", pasos: ["6 DM, 0 UM, 2 C, 0 D, 7 U.", "6 · 10⁴ + 2 · 10² + 7."], resultado: "60 207 = 6 · 10⁴ + 2 · 10² + 7." },
    { enunciado: "Expresa como una sola potencia: (7⁵ · 7³) : 7⁶.", pasos: ["Producto: 7⁵⁺³ = 7⁸.", "Cociente: 7⁸⁻⁶ = 7²."], resultado: "7² = 49." },
    { enunciado: "Calcula mentalmente 4³ · 25³.", pasos: ["Mismo exponente: (4 · 25)³.", "100³ = 1 000 000."], resultado: "1 000 000." },
    { enunciado: "Calcula la raíz entera y el resto de √130.", pasos: ["11² = 121 ≤ 130 < 144 = 12².", "Resto: 130 − 121 = 9."], resultado: "Raíz entera 11, resto 9 (130 = 11² + 9)." },
    { enunciado: "Calcula: 5² − 3 · √49 + 2³ · 10⁰.", pasos: ["Potencias y raíces: 25, √49 = 7, 2³ = 8, 10⁰ = 1.", "Productos: 3 · 7 = 21; 8 · 1 = 8.", "25 − 21 + 8."], resultado: "12." },
  ],
  errores: [
    "Multiplicar base por exponente: 2⁵ es 32, no 10.",
    "Confundir (−3)² = 9 con −3² = −9.",
    "Sumar potencias sumando exponentes: 2³ + 2² = 12, no 2⁵.",
    "Aplicar las reglas a bases distintas: 2³ · 3² no es 6⁵.",
    "Pensar que a⁰ = 0: en realidad a⁰ = 1.",
    "Repartir la raíz en una suma: √(9 + 16) = 5, no 3 + 4.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe como potencia: a) 6 · 6 · 6 · 6; b) 10 · 10 · 10; c) (−5) · (−5).", sol: "a) 6⁴ b) 10³ c) (−5)²." },
    { nivel: "básico", q: "Calcula: 2⁶, 3⁴, 5³, 1⁹, 9¹.", sol: "64; 81; 125; 1; 9." },
    { nivel: "básico", q: "Indica base y exponente y calcula: 7², 4³, 0⁵.", sol: "Base 7, exp. 2: 49. Base 4, exp. 3: 64. Base 0, exp. 5: 0." },
    { nivel: "básico", q: "Calcula el área de un cuadrado de 12 cm de lado y el volumen de un cubo de 5 cm de arista.", sol: "12² = 144 cm². 5³ = 125 cm³." },
    { nivel: "básico", q: "Escribe como potencia de 10: 10 000; un millón; mil millones.", sol: "10⁴; 10⁶; 10⁹." },
    { nivel: "básico", q: "Calcula: (−3)², −3², (−1)⁷, (−2)⁴.", sol: "9; −9; −1; 16." },
    { nivel: "básico", q: "Expresa como una sola potencia: a) 3² · 3⁵; b) 8⁷ : 8³; c) (5²)³.", sol: "a) 3⁷ b) 8⁴ c) 5⁶." },
    { nivel: "básico", q: "Calcula: 6⁰, 125⁰, (−4)⁰.", sol: "Todas valen 1." },
    { nivel: "básico", q: "Calcula: √64, √100, √169, √0.", sol: "8; 10; 13; 0." },
    { nivel: "básico", q: "¿Cuáles son cuadrados perfectos? 49, 50, 81, 120, 144, 200.", sol: "49 = 7², 81 = 9², 144 = 12²." },
    { nivel: "básico", q: "Un cuadrado tiene 81 m² de área. ¿Cuánto mide su lado y su perímetro?", sol: "Lado √81 = 9 m. Perímetro 4 · 9 = 36 m." },
    { nivel: "básico", q: "Calcula 2 · 5² y (2 · 5)².", sol: "2 · 25 = 50; 10² = 100." },
    { nivel: "medio", q: "Escribe en forma polinómica: 4 090 y 305 600.", sol: "4 · 10³ + 9 · 10. 3 · 10⁵ + 5 · 10³ + 6 · 10²." },
    { nivel: "medio", q: "Simplifica: (2⁴ · 2⁵) : (2³)².", sol: "2⁹ : 2⁶ = 2³ = 8." },
    { nivel: "medio", q: "Expresa como una sola potencia: 5⁴ · 2⁴ y 18³ : 6³.", sol: "(5 · 2)⁴ = 10⁴. (18 : 6)³ = 3³." },
    { nivel: "medio", q: "Escribe 8 · 4² · 2 como una potencia de base 2.", sol: "2³ · (2²)² · 2 = 2³ · 2⁴ · 2¹ = 2⁸." },
    { nivel: "medio", q: "Calcula la raíz entera y el resto: √55, √90, √200.", sol: "√55: 7, resto 6. √90: 9, resto 9. √200: 14, resto 4." },
    { nivel: "medio", q: "Calcula: 4² + 3 · 2³ − √25.", sol: "16 + 24 − 5 = 35." },
    { nivel: "medio", q: "Calcula: (10 − 2³)⁴ + √(36 + 64).", sol: "(10 − 8)⁴ = 16; √100 = 10. Total 26." },
    { nivel: "medio", q: "Calcula: 3 · (5 − 3)³ − (2² + 1)².", sol: "3 · 8 − 5² = 24 − 25 = −1." },
    { nivel: "medio", q: "¿Es 1 296 un cuadrado perfecto? Usa la factorización.", sol: "1 296 = 2⁴ · 3⁴: exponentes pares. Sí: √1 296 = 2² · 3² = 36." },
    { nivel: "medio", q: "Una caja cúbica tiene 4 dm de arista. ¿Cuántos litros caben? (1 dm³ = 1 L)", sol: "4³ = 64 dm³ = 64 litros." },
    { nivel: "avanzado", q: "Una colonia de bacterias se duplica cada hora. Si empieza con 5 bacterias, ¿cuántas hay a las 8 horas?", sol: "5 · 2⁸ = 5 · 256 = 1 280 bacterias." },
    { nivel: "avanzado", q: "Un PIN tiene 4 cifras. ¿Cuántos PIN distintos hay? ¿Y si fueran 6 cifras? ¿Cuántas veces más?", sol: "10⁴ = 10 000; 10⁶ = 1 000 000. 10⁶ : 10⁴ = 10² = 100 veces más." },
    { nivel: "avanzado", q: "Halla el número que falta: 3ˣ = 243; x² = 196; 2ˣ = 1 024.", sol: "3⁵ = 243 → x = 5. 14² = 196 → x = 14. 2¹⁰ = 1 024 → x = 10." },
    { nivel: "avanzado", q: "Sin calcular, ¿qué es mayor, 2¹⁰ o 10²? ¿Y 3⁴ o 4³?", sol: "2¹⁰ = 1 024 > 100. 3⁴ = 81 > 64 = 4³." },
    { nivel: "avanzado", q: "Explica por qué ningún cuadrado perfecto puede acabar en 7.", sol: "La última cifra de n² depende solo de la última de n: 0²→0, 1→1, 2→4, 3→9, 4→6, 5→5, 6→6, 7→9, 8→4, 9→1. Nunca sale 7." },
    { nivel: "avanzado", q: "Un jardín cuadrado tiene 2 025 m². Quieres vallarlo. ¿Cuántos metros de valla necesitas?", sol: "Lado √2 025 = 45 m (45² = 2 025). Valla: 4 · 45 = 180 m." },
    { nivel: "avanzado", q: "Encuentra el error: «(2 + 3)² = 2² + 3² = 13».", sol: "La potencia no se reparte en la suma. (2 + 3)² = 5² = 25." },
    { nivel: "avanzado", q: "Un mensaje se reenvía a 4 personas cada día, empezando por ti. ¿Cuántas personas lo reciben el quinto día? ¿Cuántas en total en esos 5 días?", sol: "El quinto día: 4⁵ = 1 024. Total: 4 + 16 + 64 + 256 + 1 024 = 1 364." },
  ],
  quiz: [
    { q: "3⁴ =", o: ["12", "81", "64", "7"], a: 1, e: "3 · 3 · 3 · 3." },
    { q: "En 7², la base es…", o: ["7", "2", "49", "14"], a: 0, e: "El factor que se repite." },
    { q: "2⁵ significa…", o: ["2 · 5", "2 + 5", "2 · 2 · 2 · 2 · 2", "5 · 5"], a: 2, e: "Cinco factores 2." },
    { q: "«Al cubo» es exponente…", o: ["2", "3", "4", "10"], a: 1, e: "Volumen del cubo." },
    { q: "El área de un cuadrado de lado 6 es…", o: ["12", "24", "36", "216"], a: 2, e: "6²." },
    { q: "10⁵ tiene… ceros", o: ["4", "5", "10", "50"], a: 1, e: "100 000." },
    { q: "(−2)³ =", o: ["8", "−8", "−6", "6"], a: 1, e: "Exponente impar: negativo." },
    { q: "−4² =", o: ["16", "−16", "8", "−8"], a: 1, e: "El exponente solo afecta al 4." },
    { q: "2³ · 2⁴ =", o: ["2⁷", "2¹²", "4⁷", "4¹²"], a: 0, e: "Se suman exponentes." },
    { q: "6⁸ : 6³ =", o: ["6⁵", "6¹¹", "1⁵", "6²⁴"], a: 0, e: "Se restan." },
    { q: "(4²)³ =", o: ["4⁵", "4⁶", "4⁸", "12²"], a: 1, e: "Se multiplican." },
    { q: "2³ · 5³ =", o: ["10³", "7³", "10⁶", "7⁶"], a: 0, e: "Mismo exponente." },
    { q: "5⁰ =", o: ["0", "1", "5", "no existe"], a: 1, e: "a⁰ = 1." },
    { q: "2³ + 2² =", o: ["2⁵", "32", "12", "4⁵"], a: 2, e: "8 + 4." },
    { q: "√64 =", o: ["8", "32", "6", "16"], a: 0, e: "8² = 64." },
    { q: "¿Cuál es cuadrado perfecto?", o: ["50", "90", "121", "200"], a: 2, e: "11²." },
    { q: "La raíz entera de 30 es…", o: ["5", "6", "15", "4"], a: 0, e: "25 ≤ 30 < 36." },
    { q: "En √30, el resto es…", o: ["5", "6", "0", "1"], a: 0, e: "30 − 25." },
    { q: "√(16 + 9) =", o: ["7", "5", "25", "12"], a: 1, e: "√25." },
    { q: "2 + 3 · 2² =", o: ["20", "14", "38", "10"], a: 1, e: "2 + 3 · 4." },
  ],
  examen: [
    { q: "4³ =", o: ["12", "64", "16", "81"], a: 1, e: "4 · 4 · 4." },
    { q: "9³ · 9² : 9⁴ =", o: ["9", "9⁹", "9²", "1"], a: 0, e: "9⁵ : 9⁴." },
    { q: "(3²)² · 3 =", o: ["3⁵", "3⁴", "3⁶", "3⁷"], a: 0, e: "3⁴ · 3¹." },
    { q: "20⁰ + 20¹ =", o: ["20", "21", "40", "1"], a: 1, e: "1 + 20." },
    { q: "40 503 =", o: ["4 · 10⁴ + 5 · 10² + 3", "4 · 10³ + 5 · 10 + 3", "4 · 10⁵ + 5 · 10³ + 3", "40 · 10³ + 53"], a: 0, e: "Valor de posición." },
    { q: "Raíz entera y resto de √75:", o: ["8 y 11", "8 y 9", "9 y 6", "7 y 26"], a: 0, e: "64 + 11." },
    { q: "10 − 2 · 3² + √16 =", o: ["−4", "68", "76", "12"], a: 0, e: "10 − 18 + 4." },
    { q: "Un cuadrado de 225 m² tiene lado…", o: ["15 m", "25 m", "112,5 m", "56,25 m"], a: 0, e: "√225." },
  ],
  feynman: ["Qué es una potencia y por qué 2⁵ no es 10", "Por qué al multiplicar potencias de la misma base se suman los exponentes", "Por qué a⁰ vale 1", "Qué relación hay entre el cuadrado de un número y su raíz cuadrada"],
  figura: {
    titulo: "Potencias y raíces en un vistazo",
    svg: resumen("Resumen del tema de potencias y raíces", [
      ["Potencia", "aⁿ = a · a · … · a  (n factores)", "var(--pen)"],
      ["Base 10", "10ⁿ = 1 seguido de n ceros", "var(--sun)"],
      ["Misma base", "aᵐ · aⁿ = aᵐ⁺ⁿ   aᵐ : aⁿ = aᵐ⁻ⁿ   (aᵐ)ⁿ = aᵐ·ⁿ", "var(--leaf)"],
      ["Casos", "a¹ = a   a⁰ = 1   (−a)ⁿ: + si n par", "var(--inf)"],
      ["Raíz", "√a = b si b² = a · radicando = raíz² + resto", "var(--red)"],
    ]),
  },
  video: vg("potV"),
  mapa: mapa("POTENCIAS", "var(--red)", [
    ["Potencia", "base · exponente · a⁰ = 1", "var(--pen)"],
    ["Base 10", "ceros · forma polinómica", "var(--sun)"],
    ["Propiedades", "sumar · restar · multiplicar exp.", "var(--leaf)"],
    ["Raíz cuadrada", "exacta · entera y resto", "var(--inf)"],
  ], 250),
  glosario: [
    ["Potencia", "Producto de factores iguales: aⁿ."],
    ["Base", "Factor que se repite en una potencia."],
    ["Exponente", "Número de veces que se repite la base."],
    ["Cuadrado", "Potencia de exponente 2; área de un cuadrado."],
    ["Cubo", "Potencia de exponente 3; volumen de un cubo."],
    ["Cuadrado perfecto", "Número que es el cuadrado de un natural: 1, 4, 9, 16…"],
    ["Forma polinómica", "Descomposición de un número con potencias de 10."],
    ["Crecimiento exponencial", "Crecimiento que multiplica por el mismo número en cada paso."],
    ["Raíz cuadrada", "Número que elevado al cuadrado da el radicando."],
    ["Radical", "El símbolo √."],
    ["Radicando", "Número que está dentro de la raíz."],
    ["Raíz entera", "Mayor número cuyo cuadrado no supera al radicando."],
    ["Resto de una raíz", "Radicando menos el cuadrado de la raíz entera."],
  ],
  situacion: {
    titulo: "¿Cuánto crece un rumor?",
    reto: "Vais a simular cómo se extiende un rumor (o un vídeo viral) en el instituto y a comparar lo que pasa en la realidad con lo que predicen las potencias.",
    pasos: [
      "Decidid una regla: cada persona que conoce el «rumor» (una palabra secreta inofensiva) se lo cuenta a 2 o 3 compañeros nuevos cada recreo.",
      "Haced una tabla con la predicción: 3, 3², 3³… personas nuevas en cada ronda, y calculad el total acumulado.",
      "Calculad en qué ronda se superaría el número de alumnos del instituto.",
      "Si se puede, haced la prueba real en clase durante unas rondas y comparad con la predicción.",
      "Explicad por qué la realidad se frena (gente repetida, gente que no lo cuenta…).",
    ],
    producto: "Un informe breve o infografía con la tabla, la gráfica de barras y las conclusiones.",
    evaluacion: ["Expresa correctamente las cantidades como potencias.", "Calcula potencias y sumas sin errores.", "Interpreta la gráfica y compara predicción y realidad.", "Comunica las conclusiones con claridad."],
  },
  tarjetas: [
    ["aⁿ", "a · a · … · a (n veces)"], ["a²", "Al cuadrado: área del cuadrado"], ["a³", "Al cubo: volumen del cubo"],
    ["10ⁿ", "1 seguido de n ceros"], ["aᵐ · aⁿ", "aᵐ⁺ⁿ"], ["aᵐ : aⁿ", "aᵐ⁻ⁿ"],
    ["(aᵐ)ⁿ", "aᵐ·ⁿ"], ["aⁿ · bⁿ", "(a · b)ⁿ"], ["a⁰", "1 (a ≠ 0)"],
    ["(−a)ⁿ", "+ si n par, − si n impar"], ["√a = b", "b² = a"], ["Raíz entera", "Radicando = raíz² + resto"],
  ],
  familias: ["Haced el experimento de doblar una hoja y contad las capas en cada doblez.", "Calculad cuántas baldosas cuadradas hay en una habitación y si el número es un cuadrado perfecto.", "Jugad a recitar los cuadrados del 1 al 15 por turnos.", "Buscad potencias de 2 en el móvil o el ordenador (8, 16, 32, 64, 128 GB…)."],
  profesores: {
    saberes: "Sentido numérico: potencias de exponente natural, propiedades, potencias de base 10 y forma polinómica, raíz cuadrada exacta y entera, jerarquía de operaciones; sentido algebraico: crecimiento exponencial como patrón (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Plegar papel y registrar capas en una tabla.", "Construir cuadrados y cubos con policubos para visualizar a² y a³.", "Leyenda del ajedrez y los granos de trigo como problema abierto.", "Juego de estimación de raíces con calculadora tapada."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): potencias y raíces", url: "https://proyectodescartes.org/" }, { t: "Wikipedia: Potenciación", url: "https://es.wikipedia.org/wiki/Potenciación" }],
  revisado: REV,
};
