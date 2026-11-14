// Matemáticas 1º ESO · Los números decimales. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, recta, comparar, formula, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const unidad = lienzo("Una unidad dividida en 10 décimas y en 100 centésimas: 0,37 son 37 centésimas", `
  ${[...Array(100)].map((_, i) => `<rect x="${20 + (i % 10) * 12}" y="${22 + Math.floor(i / 10) * 12}" width="12" height="12" fill="${i < 37 ? "var(--pen)" : "var(--card)"}" fill-opacity="${i < 37 ? 0.45 : 1}" stroke="var(--line)" stroke-width=".8"/>`).join("")}
  <rect x="20" y="22" width="120" height="120" fill="none" stroke="var(--ink)" stroke-width="2"/>
  ${tx(200, 60, "0,37", { fs: 24, fam: D, c: "var(--pen)" })}${tx(200, 86, "37 centésimas", { fs: 11.5, max: 100 })}${tx(200, 108, "3 décimas", { fs: 11, c: "var(--muted)", max: 100 })}${tx(200, 124, "y 7 centésimas", { fs: 11, c: "var(--muted)", max: 100 })}
  ${tx(80, 164, "1 unidad = 100 centésimas", { fs: 11.5, c: "var(--muted)", max: 150 })}`, 176);

const posiciones = lienzo("Órdenes de unidades decimales: unidades, coma, décimas, centésimas y milésimas en el número 25,307", `
  ${[["D", "2"], ["U", "5"], [",", ","], ["d", "3"], ["c", "0"], ["m", "7"]].map(([n, v], i) => `${n === "," ? "" : `<rect x="${14 + i * 39}" y="28" width="35" height="28" rx="7" fill="var(--card)" stroke="${i < 2 ? "var(--pen)" : "var(--red)"}" stroke-width="2"/>`}${tx(31.5 + i * 39, 47, n, { fs: 13, c: i < 2 ? "var(--pen)" : "var(--red)" })}${tx(31.5 + i * 39, 92, v, { fs: 26, fam: D })}`).join("")}
  ${tx(130, 128, "parte entera  |  parte decimal", { fs: 12, c: "var(--muted)" })}${tx(130, 156, "1 d = 0,1  ·  1 c = 0,01  ·  1 m = 0,001", { fs: 12 })}`);

const orden = recta("Comparar decimales en la recta: 2,3 es mayor que 2,25 aunque tenga menos cifras", {
  r: [2, 2.5], marcas: [[2, "2"], [2.1, "2,1"], [2.2, "2,2"], [2.3, "2,3"], [2.4, "2,4"], [2.5, "2,5"]], titulo: "2,25 < 2,3",
  puntos: [{ x: 2.25, t: "2,25", c: "var(--pen)" }, { x: 2.3, t: "2,3", c: "var(--red)", abajo: true }],
});

const redondeo = recta("Redondear 3,476 a las centésimas: queda 3,48 porque la cifra siguiente, 6, es mayor o igual que 5", {
  r: [3.47, 3.48], marcas: [[3.47, "3,47"], [3.475, "3,475"], [3.48, "3,48"]], titulo: "Redondeo a centésimas",
  puntos: [{ x: 3.476, t: "3,476", c: "var(--red)" }],
});

const suma = pasos("Sumar decimales: colocar las comas en columna, rellenar con ceros, operar y bajar la coma", ["12,5 + 3,47 + 0,8", "Comas en columna", "12,50 + 3,47 + 0,80", "Sumar como naturales: 1677", "Bajar la coma: 16,77"], "Suma en columna");

const mult = comparar("Multiplicar decimales: se multiplica sin comas y se separan tantas cifras decimales como tengan los dos factores juntos; por 10, 100 o 1000 se mueve la coma", [
  ["2,4 · 1,3", ["24 · 13 = 312", "1 + 1 = 2 decimales", "= 3,12"], "var(--pen)"],
  ["· 10, 100…", ["3,47 · 10 = 34,7", "3,47 · 100 = 347", "coma a la derecha"], "var(--leaf)"],
], "Multiplicar");

const div = cajas("Los tres casos de la división con decimales", [
  ["Decimal : natural", ["7,5 : 3 = 2,5", "coma al bajar decimal"], "var(--pen)"],
  ["Natural : natural", ["7 : 4 = 1,75", "añadir ,0 y seguir"], "var(--leaf)"],
  ["… : decimal", ["7,5 : 0,25", "= 750 : 25 = 30"], "var(--red)"],
  [": 10, 100…", ["34,7 : 100", "= 0,347"], "var(--sun)"],
], "Dividir");

const tipos = cajas("Tipos de decimales: exactos, periódicos puros y periódicos mixtos", [
  ["Exacto", ["3/4 = 0,75", "se acaba"], "var(--pen)"], ["Periódico puro", ["1/3 = 0,333…", "periodo: 3"], "var(--leaf)"],
  ["Periódico mixto", ["1/6 = 0,1666…", "periodo: 6"], "var(--red)"], ["No periódico", ["π = 3,14159…", "sin repetir"], "var(--sun)"],
], "Expresión decimal");

const fraccion = formula("Pasar un decimal exacto a fracción: se escribe sin coma en el numerador y una potencia de diez en el denominador", "0,45 = 45/100 = 9/20", ["Tantos ceros como decimales", "y después simplificar"], "var(--inf)");

const ticket = lienzo("Tique de la compra con decimales: precios, cantidades y el total", `
  <rect x="50" y="10" width="160" height="164" rx="6" fill="var(--card)" stroke="var(--muted)" stroke-width="1.5"/>
  ${[["2 × leche", "1,98"], ["Pan", "0,85"], ["1,5 kg × 2,40", "3,60"], ["Fruta", "2,37"]].map(([a, b], i) => `${tx(62, 36 + i * 22, a, { fs: 11, a: "start", w: 400, max: 96 })}${tx(198, 36 + i * 22, b + " €", { fs: 11, a: "end", max: 50 })}`).join("")}
  <path d="M60 126 H200" stroke="var(--ink)" stroke-dasharray="3 2"/>${tx(62, 148, "TOTAL", { fs: 13, a: "start" })}${tx(198, 148, "8,80 €", { fs: 14, a: "end", c: "var(--red)", fam: D })}
  ${tx(130, 166, "pagas 10 € → vuelta 1,20 €", { fs: 10, c: "var(--muted)", max: 150 })}`, 184);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Los números decimales",
  minutos: 100,
  objetivos: [
    "Leer, escribir y descomponer números decimales según el valor de posición",
    "Comparar, ordenar y representar decimales en la recta",
    "Redondear y truncar decimales y estimar resultados",
    "Sumar, restar, multiplicar y dividir números decimales",
    "Relacionar fracciones y decimales y reconocer decimales exactos y periódicos",
    "Resolver problemas de compras, medidas y dinero con decimales",
  ],
  claves: ["número decimal", "décima", "centésima", "milésima", "redondeo", "decimal periódico"],
  pregunta: {
    texto: "En una carrera de 100 metros, una atleta hace 10,85 s y otra 10,9 s. ¿Quién ha ganado?",
    respuesta: "Ha ganado la de <mark>10,85 s</mark>. Aunque «85» parezca mayor que «9», hay que comparar cifra a cifra: 10,85 tiene 8 décimas y 10,9 tiene 9 décimas. Por tanto 10,85 &lt; 10,9: ha tardado menos.",
  },
  lectura: {
    titulo: "Una centésima de segundo",
    html: `<p>En los Juegos Olímpicos de Pekín de 2008, el nadador Michael Phelps ganó la final de 100 metros mariposa por una diferencia increíble: <b>una centésima de segundo</b>. Su rival tocó la pared en 50,59 s y él en 50,58 s. A simple vista parecía que habían llegado a la vez, pero los marcadores electrónicos lo midieron con precisión.</p><p>Los números decimales nos permiten medir con mucha más exactitud que los números enteros. En el deporte se usan décimas, centésimas y milésimas de segundo; en las tiendas, céntimos de euro; en la farmacia, miligramos; en la ciencia, cantidades con muchísimas cifras tras la coma.</p><p>La idea de escribir partes de la unidad con una coma se popularizó en Europa en el siglo XVI gracias al ingeniero flamenco Simon Stevin, que escribió un librito para explicar a comerciantes y agrimensores lo fácil que era calcular así. En algunos países se usa el punto en lugar de la coma (10.85), como en las calculadoras; en España usamos la coma, aunque también se acepta el punto. En este tema aprenderás a manejar estos números con soltura.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es un número decimal?</h3><p>Un <b>número decimal</b> expresa una cantidad que no es entera, es decir, que tiene una parte de unidad. Tiene dos partes separadas por la <b>coma decimal</b>: la <b>parte entera</b>, a la izquierda, y la <b>parte decimal</b>, a la derecha. En 7,35 €, la parte entera son 7 euros y la decimal, 35 céntimos.</p><p>La parte decimal se basa en dividir la unidad entre 10 una y otra vez:</p><ul><li>1 <b>décima</b> (d) = 0,1 = 1/10 de unidad.</li><li>1 <b>centésima</b> (c) = 0,01 = 1/100.</li><li>1 <b>milésima</b> (m) = 0,001 = 1/1 000.</li></ul><p>En el dibujo, la unidad es el cuadrado grande, dividido en 100 cuadraditos. Cada fila es una décima y cada cuadradito una centésima. Las 37 casillas coloreadas son 0,37: 3 décimas y 7 centésimas, o lo que es lo mismo, 37 centésimas.</p>`, svg: unidad },
    { html: `<h3>1.2 Leer, escribir y descomponer decimales</h3><p>Los decimales siguen el mismo sistema posicional que los naturales: cada lugar vale diez veces menos que el de su izquierda. Así, en 25,307 hay 2 decenas, 5 unidades, 3 décimas, 0 centésimas y 7 milésimas. Se puede <b>descomponer</b>: 25,307 = 20 + 5 + 0,3 + 0,007.</p><p>Para <b>leerlo</b> hay dos formas: «veinticinco <b>coma</b> trescientos siete» (la más habitual al hablar) o «veinticinco unidades y trescientas siete <b>milésimas</b>», nombrando la parte decimal por el orden de su última cifra.</p><p>Fíjate en los ceros: 0,5 y 0,50 son el mismo número (5 décimas = 50 centésimas), así que los <b>ceros a la derecha</b> de la parte decimal se pueden añadir o quitar. Pero los ceros intermedios sí importan: 0,05 (5 centésimas) es diez veces menor que 0,5. Y 3,07 es «tres coma cero siete», no «tres coma siete».</p>`, svg: posiciones },
    { html: `<h3>1.3 Comparar y ordenar decimales</h3><p>Para comparar dos decimales, primero se mira la <b>parte entera</b>: es mayor el que la tiene mayor (12,1 &gt; 9,99). Si la parte entera es igual, se comparan las cifras decimales <b>de una en una</b>, empezando por las décimas, hasta encontrar la primera diferente.</p><p>Ejemplo: 2,3 y 2,25. La parte entera es igual. En las décimas: 3 &gt; 2. Por tanto, <mark>2,3 &gt; 2,25</mark>. Un truco para no liarse es igualar el número de decimales añadiendo ceros: 2,30 y 2,25; ahora es evidente que 230 centésimas son más que 225.</p><p>El error más común es pensar que el número con más cifras decimales es mayor. No es así: 0,9 es mayor que 0,123. Entre dos decimales cualesquiera siempre hay infinitos decimales: entre 2,2 y 2,3 están 2,21; 2,25; 2,256… Esto no pasaba con los naturales, donde entre 2 y 3 no hay ninguno.</p>`, svg: orden },
    { html: `<h3>1.4 Aproximar decimales</h3><p>Muchas veces un decimal tiene demasiadas cifras para lo que necesitamos: el precio de la gasolina es 1,579 €/L, pero pagamos en céntimos. <b>Aproximar</b> es sustituirlo por otro con menos cifras.</p><ul><li><b>Truncar</b>: se eliminan las cifras a partir del orden elegido. 3,476 truncado a las centésimas es 3,47.</li><li><b>Redondear</b>: se mira la primera cifra que se elimina. Si es <b>5 o mayor</b>, se suma 1 a la anterior; si es menor que 5, se deja igual. 3,476 redondeado a las centésimas es <mark>3,48</mark> (porque 6 ≥ 5); a las décimas, 3,5 (porque 7 ≥ 5); a las unidades, 3.</li></ul><p>Atención al «efecto dominó»: 2,996 redondeado a las centésimas es 3,00, porque al sumar 1 a la cifra 9 se convierte en 10 y se lleva una. Se escribe 3,00 para indicar que la precisión es de centésimas. El redondeo es la forma de aproximar que comete menos error.</p>`, svg: redondeo },
    { html: `<h3>2.1 Sumar y restar decimales</h3><p>Para sumar o restar decimales se colocan los números en columna de forma que <b>las comas queden alineadas</b>, es decir, unidades bajo unidades, décimas bajo décimas, etc. Si un número tiene menos decimales, se rellenan los huecos con ceros. Después se opera como con naturales y se <b>baja la coma</b> en el resultado.</p><p>Ejemplo: 12,5 + 3,47 + 0,8 → 12,50 + 3,47 + 0,80 = <b>16,77</b>. Resta: 9 − 3,26 → 9,00 − 3,26 = 5,74.</p><p>Para comprobar una resta, suma el resultado y el sustraendo: 5,74 + 3,26 = 9 ✓. Y antes de operar, <b>estima</b>: 12,5 + 3,47 + 0,8 es aproximadamente 12 + 3 + 1 = 16. Si te sale 4,82 o 160, has alineado mal. El cálculo mental también ayuda: para sumar 4,99 € suma 5 € y quita un céntimo.</p>`, svg: suma },
    { html: `<h3>2.2 Multiplicar decimales</h3><p>Para multiplicar dos decimales se multiplican <b>como si no tuvieran coma</b> y, en el resultado, se separan con la coma <b>tantas cifras decimales como tengan entre los dos factores</b>. Ejemplo: 2,4 · 1,3 → 24 · 13 = 312; hay 1 + 1 = 2 decimales → <mark>3,12</mark>.</p><p>¿Por qué funciona? Porque 2,4 = 24/10 y 1,3 = 13/10, así que el producto es 312/100 = 3,12.</p><p>Multiplicar por la <b>unidad seguida de ceros</b> es muy fácil: se desplaza la coma a la derecha tantos lugares como ceros. 3,47 · 10 = 34,7; 3,47 · 100 = 347; 3,47 · 1 000 = 3 470 (si faltan cifras, se añaden ceros).</p><p>Un detalle que sorprende: al multiplicar por un número menor que 1, el resultado es <b>más pequeño</b> que el otro factor. 50 · 0,2 = 10. Tiene sentido: es como tomar dos décimas partes de 50.</p>`, svg: mult, video: vb("decB") },
    { html: `<h3>2.3 Dividir con decimales</h3><p>Hay varios casos:</p><ul><li><b>Decimal entre natural</b>: se divide normalmente y, al bajar la primera cifra decimal, se pone la coma en el cociente. 7,5 : 3 = 2,5.</li><li><b>Natural entre natural con decimales en el cociente</b>: si la división no es exacta, se pone coma en el cociente, se añade un 0 al resto y se sigue dividiendo. 7 : 4 = 1,75.</li><li><b>Divisor decimal</b>: se quita la coma del divisor multiplicando dividendo y divisor por 10, 100… (el cociente no cambia). 7,5 : 0,25 = 750 : 25 = 30.</li></ul><p>Dividir entre 10, 100, 1 000 desplaza la coma a la <b>izquierda</b>: 34,7 : 100 = 0,347.</p><p>Igual que antes, dividir entre un número menor que 1 da un resultado <b>mayor</b>: 7,5 : 0,25 = 30, porque en 7,5 € caben 30 monedas de 25 céntimos.</p>`, svg: div },
    { html: `<h3>2.4 Operaciones combinadas y estimación</h3><p>Con decimales se aplica la misma <b>jerarquía</b> que con naturales: paréntesis, potencias, multiplicaciones y divisiones, y por último sumas y restas. Ejemplo: 2,5 + 1,2 · (4 − 1,5) = 2,5 + 1,2 · 2,5 = 2,5 + 3 = <b>5,5</b>.</p><p>Con decimales es todavía más importante <b>estimar</b> antes de calcular, porque un despiste con la coma multiplica o divide el resultado por 10. Para estimar se redondea a números cómodos: 4,92 · 19,8 ≈ 5 · 20 = 100. Si la cuenta exacta (97,416) se aleja mucho de 100, revisa la coma.</p><p>También conviene saber algunos productos de memoria: · 0,5 es la mitad, · 0,25 es la cuarta parte, · 0,1 es dividir entre 10 y · 1,5 es «uno y medio». Así, 36 · 0,25 = 36 : 4 = 9, sin hacer la cuenta.</p>` },
    { html: `<h3>3.1 Fracciones y decimales</h3><p>Toda fracción se puede escribir como decimal dividiendo el <b>numerador entre el denominador</b>: 3/4 = 3 : 4 = 0,75. Al hacerlo, pueden salir tres tipos de decimales:</p><ul><li><b>Exactos</b>: la división acaba. 3/4 = 0,75; 2/5 = 0,4.</li><li><b>Periódicos puros</b>: un grupo de cifras, el <b>periodo</b>, se repite justo después de la coma. 1/3 = 0,333… Se escribe con un arco o una raya encima del periodo: 0,<span style="text-decoration:overline">3</span>.</li><li><b>Periódicos mixtos</b>: antes del periodo hay cifras que no se repiten (el anteperiodo). 1/6 = 0,1666… = 0,1<span style="text-decoration:overline">6</span>.</li></ul><p>Una fracción simplificada da un decimal exacto solo si en su denominador no hay más factores primos que 2 y 5 (como 4, 5, 8, 20, 25…). Además, existen decimales con infinitas cifras que nunca se repiten, como π = 3,14159… o √2 = 1,41421…: no proceden de ninguna fracción y los estudiarás más adelante.</p>`, svg: tipos, video: vb("decB2") },
    { html: `<h3>3.2 De decimal exacto a fracción</h3><p>Para pasar un decimal exacto a fracción se escribe en el <b>numerador</b> el número sin la coma y en el <b>denominador</b> la unidad seguida de tantos ceros como cifras decimales tenga. Después se <b>simplifica</b>.</p><ul><li>0,45 = 45/100 = 9/20.</li><li>2,5 = 25/10 = 5/2.</li><li>0,125 = 125/1 000 = 1/8.</li></ul><p>Esta relación es útil en la vida diaria: 0,5 es la mitad, 0,25 es un cuarto, 0,75 son tres cuartos y 0,2 es un quinto. Si una oferta dice «25 % de descuento», es lo mismo que pagar 0,75 del precio, es decir, tres cuartas partes.</p><p>Los decimales periódicos también se pueden convertir en fracciones, con un método que aprenderás en 3º de ESO. Por ahora, recuerda los más típicos: 0,<span style="text-decoration:overline">3</span> = 1/3 y 0,<span style="text-decoration:overline">6</span> = 2/3.</p>`, svg: fraccion },
    { html: `<h3>3.3 Problemas con decimales</h3><p>Los decimales aparecen continuamente en problemas de dinero, medidas y tiempos. Algunos consejos:</p><ul><li>Escribe siempre las <b>unidades</b> (€, kg, m, s) y comprueba que todos los datos estén en la misma unidad.</li><li>Cuando el resultado sea dinero, <b>redondea a los céntimos</b> (dos decimales).</li><li><b>Estima</b> antes y comprueba después.</li></ul><p>Ejemplo: «Compras 2 bricks de leche a 0,99 €, una barra de pan a 0,85 €, 1,5 kg de manzanas a 2,40 €/kg y fruta por 2,37 €. Pagas con 10 €. ¿Cuánto te devuelven?». Leche: 2 · 0,99 = 1,98. Manzanas: 1,5 · 2,40 = 3,60. Total: 1,98 + 0,85 + 3,60 + 2,37 = 8,80 €. Vuelta: 10 − 8,80 = <mark>1,20 €</mark>. Estimación: 2 + 1 + 3,5 + 2,5 = 9 €, coherente.</p>`, svg: ticket, video: vg("decV") },
  ],
  ejemplos: [
    { enunciado: "Descompón 40,608 y escribe cómo se lee.", pasos: ["4 D, 0 U, 6 d, 0 c, 8 m.", "40 + 0,6 + 0,008."], resultado: "«Cuarenta coma seiscientos ocho» o «cuarenta unidades y seiscientas ocho milésimas»." },
    { enunciado: "Ordena de menor a mayor: 1,5; 1,45; 1,405; 1,054.", pasos: ["Igualar decimales: 1,500; 1,450; 1,405; 1,054.", "Comparar como milésimas."], resultado: "1,054 < 1,405 < 1,45 < 1,5." },
    { enunciado: "Redondea 7,2849 a las décimas, centésimas y milésimas.", pasos: ["Décimas: mirar 8 ≥ 5 → 7,3.", "Centésimas: mirar 4 < 5 → 7,28.", "Milésimas: mirar 9 ≥ 5 → 7,285."], resultado: "7,3; 7,28; 7,285." },
    { enunciado: "Calcula 3,25 · 0,4.", pasos: ["325 · 4 = 1 300.", "2 + 1 = 3 decimales → 1,300."], resultado: "1,3." },
    { enunciado: "Calcula 9,6 : 0,32.", pasos: ["Quitar la coma del divisor: · 100.", "960 : 32 = 30."], resultado: "30." },
    { enunciado: "Expresa 7/8 y 5/12 como decimal e indica el tipo.", pasos: ["7 : 8 = 0,875 (la división acaba).", "5 : 12 = 0,41666…"], resultado: "0,875 exacto; 0,41666… periódico mixto (periodo 6)." },
  ],
  errores: [
    "Creer que un decimal con más cifras es mayor: 0,9 > 0,123.",
    "No alinear las comas al sumar o restar.",
    "Poner en el producto los decimales de un solo factor: 2,4 · 1,3 = 3,12, no 31,2.",
    "Mover la coma hacia el lado equivocado al multiplicar o dividir por 10, 100…",
    "Olvidar el cero intermedio: 3,07 no es 3,7.",
    "Pensar que multiplicar siempre hace mayor: 50 · 0,2 = 10.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe con cifras: a) tres unidades y cuatro centésimas; b) doce milésimas; c) cinco coma ciento siete.", sol: "a) 3,04 b) 0,012 c) 5,107." },
    { nivel: "básico", q: "Indica el valor de la cifra 6 en: 6,2; 0,6; 0,06; 2,306.", sol: "6 unidades; 6 décimas; 6 centésimas; 6 milésimas." },
    { nivel: "básico", q: "Descompón: 14,25 y 0,708.", sol: "10 + 4 + 0,2 + 0,05. 0,7 + 0,008." },
    { nivel: "básico", q: "¿Cuántas centésimas hay en 1 unidad? ¿Y milésimas en 1 décima?", sol: "100 centésimas. 100 milésimas." },
    { nivel: "básico", q: "Escribe < o >: 0,7 … 0,65; 3,09 … 3,1; 12,001 … 12,01.", sol: "0,7 > 0,65; 3,09 < 3,1; 12,001 < 12,01." },
    { nivel: "básico", q: "Escribe un decimal entre 4,5 y 4,6 y otro entre 0,1 y 0,11.", sol: "Por ejemplo 4,55 y 0,105." },
    { nivel: "básico", q: "Redondea a las décimas: 2,46; 8,95; 0,349.", sol: "2,5; 9,0; 0,3." },
    { nivel: "básico", q: "Calcula: 4,7 + 12,35 + 0,08.", sol: "4,70 + 12,35 + 0,08 = 17,13." },
    { nivel: "básico", q: "Calcula: 20 − 7,45.", sol: "20,00 − 7,45 = 12,55." },
    { nivel: "básico", q: "Calcula: 5,63 · 10; 5,63 · 1 000; 5,63 : 10; 5,63 : 100.", sol: "56,3; 5 630; 0,563; 0,0563." },
    { nivel: "básico", q: "Calcula: 1,2 · 0,3 y 2,5 · 4.", sol: "0,36 y 10." },
    { nivel: "básico", q: "Pasa a fracción y simplifica: 0,5; 0,25; 0,04.", sol: "1/2; 1/4; 4/100 = 1/25." },
    { nivel: "medio", q: "Ordena de mayor a menor: 0,3; 0,303; 0,033; 0,33.", sol: "0,33 > 0,303 > 0,3 > 0,033." },
    { nivel: "medio", q: "Redondea 15,9963 a las unidades, décimas, centésimas y milésimas.", sol: "16; 16,0; 16,00; 15,996." },
    { nivel: "medio", q: "Calcula: 3,6 · 2,05.", sol: "36 · 205 = 7 380; 3 decimales → 7,380 = 7,38." },
    { nivel: "medio", q: "Calcula con dos decimales: 15 : 7.", sol: "2,14 (resto pequeño; 2,142…)." },
    { nivel: "medio", q: "Calcula: 4,5 : 0,15 y 0,72 : 0,8.", sol: "450 : 15 = 30. 7,2 : 8 = 0,9." },
    { nivel: "medio", q: "Calcula: 12,4 − 2 · (3,5 − 1,25).", sol: "3,5 − 1,25 = 2,25; 2 · 2,25 = 4,5; 12,4 − 4,5 = 7,9." },
    { nivel: "medio", q: "Expresa como decimal e indica el tipo: 3/5, 2/3, 7/30.", sol: "0,6 exacto; 0,666… periódico puro; 0,2333… periódico mixto." },
    { nivel: "medio", q: "Pasa a fracción irreducible: 1,6; 0,375; 2,25.", sol: "16/10 = 8/5; 375/1 000 = 3/8; 225/100 = 9/4." },
    { nivel: "medio", q: "Un kilo de tomates cuesta 2,35 €. ¿Cuánto cuestan 3,2 kg?", sol: "3,2 · 2,35 = 7,52 €." },
    { nivel: "medio", q: "Una botella de 1,5 L se reparte en vasos de 0,25 L. ¿Cuántos vasos se llenan?", sol: "1,5 : 0,25 = 6 vasos." },
    { nivel: "medio", q: "Estima y luego calcula: 19,8 · 5,1.", sol: "Estimación 20 · 5 = 100. Exacto: 100,98." },
    { nivel: "avanzado", q: "Cinco amigos pagan una cena de 87,45 € a partes iguales. ¿Cuánto paga cada uno? ¿Sobra algún céntimo?", sol: "87,45 : 5 = 17,49 € exactos. No sobra nada." },
    { nivel: "avanzado", q: "Un coche gasta 6,4 L cada 100 km. ¿Cuánto gasta en un viaje de 385 km? Si el litro cuesta 1,58 €, ¿cuánto cuesta el viaje?", sol: "6,4 · 3,85 = 24,64 L. 24,64 · 1,58 ≈ 38,93 €." },
    { nivel: "avanzado", q: "¿Qué número multiplicado por 0,4 da 3? ¿Y dividido entre 0,4 da 3?", sol: "3 : 0,4 = 7,5. 3 · 0,4 = 1,2." },
    { nivel: "avanzado", q: "Halla el número que redondeado a las décimas da 4,5 y truncado a las décimas da 4,4. Da dos ejemplos.", sol: "Debe estar entre 4,45 y 4,4999…: por ejemplo 4,46 y 4,48." },
    { nivel: "avanzado", q: "Sin hacer la división, ¿cuáles darán decimal exacto? 3/8, 4/15, 7/20, 5/6.", sol: "Denominadores con solo 2 y 5: 3/8 (2³) y 7/20 (2²·5) exactos. 4/15 y 5/6 periódicos." },
    { nivel: "avanzado", q: "En una carrera, los tiempos son 12,08 s, 11,95 s, 12,1 s y 11,9 s. Ordénalos del ganador al último y calcula la diferencia entre el primero y el último.", sol: "11,9 < 11,95 < 12,08 < 12,1. Diferencia: 12,1 − 11,9 = 0,2 s." },
    { nivel: "avanzado", q: "Encuentra el error: «0,3 · 0,2 = 0,6».", sol: "Hay 1 + 1 = 2 decimales: 3 · 2 = 6 → 0,06." },
  ],
  quiz: [
    { q: "Una centésima es…", o: ["0,1", "0,01", "0,001", "100"], a: 1, e: "1/100." },
    { q: "En 3,482, la cifra 8 son…", o: ["8 décimas", "8 centésimas", "8 milésimas", "8 unidades"], a: 1, e: "Segundo lugar tras la coma." },
    { q: "0,5 y 0,50 son…", o: ["distintos", "el mismo número", "0,50 mayor", "0,5 mayor"], a: 1, e: "Ceros a la derecha no cambian." },
    { q: "¿Cuál es mayor?", o: ["0,123", "0,9", "0,89", "0,099"], a: 1, e: "9 décimas." },
    { q: "Entre 2,2 y 2,3 hay…", o: ["ningún decimal", "uno", "nueve", "infinitos"], a: 3, e: "2,21; 2,215…" },
    { q: "5,368 redondeado a centésimas:", o: ["5,36", "5,37", "5,4", "5,3"], a: 1, e: "8 ≥ 5." },
    { q: "5,368 truncado a centésimas:", o: ["5,36", "5,37", "5,4", "5,3"], a: 0, e: "Se cortan las cifras." },
    { q: "3,4 + 1,25 =", o: ["4,29", "4,65", "1,59", "15,9"], a: 1, e: "3,40 + 1,25." },
    { q: "10 − 0,7 =", o: ["9,3", "3", "0,3", "9,7"], a: 0, e: "10,0 − 0,7." },
    { q: "0,3 · 0,2 =", o: ["0,6", "0,06", "6", "0,006"], a: 1, e: "Dos decimales." },
    { q: "4,56 · 100 =", o: ["0,0456", "45,6", "456", "4 560"], a: 2, e: "Coma dos lugares a la derecha." },
    { q: "4,56 : 10 =", o: ["0,456", "45,6", "4,56", "0,0456"], a: 0, e: "Coma un lugar a la izquierda." },
    { q: "6 : 0,5 =", o: ["3", "12", "0,3", "1,2"], a: 1, e: "60 : 5." },
    { q: "36 · 0,25 =", o: ["9", "144", "90", "0,9"], a: 0, e: "Es la cuarta parte." },
    { q: "3/4 en decimal:", o: ["0,34", "0,75", "1,33", "0,43"], a: 1, e: "3 : 4." },
    { q: "1/3 = 0,333… es un decimal…", o: ["exacto", "periódico puro", "periódico mixto", "entero"], a: 1, e: "Se repite desde la coma." },
    { q: "1/6 = 0,1666… es…", o: ["exacto", "periódico puro", "periódico mixto", "no periódico"], a: 2, e: "El 1 no se repite." },
    { q: "0,4 en fracción irreducible:", o: ["4/10", "2/5", "1/4", "4/100"], a: 1, e: "4/10 = 2/5." },
    { q: "Multiplicar por 0,5 es…", o: ["el doble", "la mitad", "sumar 0,5", "dividir entre 5"], a: 1, e: "0,5 = 1/2." },
    { q: "Una buena estimación de 4,9 · 20,3 es…", o: ["10", "100", "1 000", "25"], a: 1, e: "5 · 20." },
  ],
  examen: [
    { q: "Siete centésimas =", o: ["0,7", "0,07", "0,007", "7,00"], a: 1, e: "Segundo lugar decimal." },
    { q: "Ordena: 0,6; 0,06; 0,66", o: ["0,06 < 0,6 < 0,66", "0,6 < 0,06 < 0,66", "0,66 < 0,6 < 0,06", "0,06 < 0,66 < 0,6"], a: 0, e: "Igualar decimales." },
    { q: "2,996 redondeado a centésimas:", o: ["2,99", "3,00", "2,10", "3,10"], a: 1, e: "Se lleva una." },
    { q: "7,2 − 3,85 =", o: ["3,35", "4,45", "3,45", "4,35"], a: 0, e: "7,20 − 3,85." },
    { q: "1,5 · 2,4 =", o: ["3,6", "36", "0,36", "3,9"], a: 0, e: "15 · 24 = 360." },
    { q: "8,4 : 0,04 =", o: ["2,1", "21", "210", "0,21"], a: 2, e: "840 : 4." },
    { q: "0,125 =", o: ["1/8", "1/4", "1/125", "12/5"], a: 0, e: "125/1 000." },
    { q: "Compras 3 libretas a 1,85 € y pagas con 10 €. Te devuelven…", o: ["4,45 €", "5,55 €", "8,15 €", "4,55 €"], a: 0, e: "10 − 5,55." },
  ],
  feynman: ["Qué significa cada cifra después de la coma", "Por qué 0,9 es mayor que 0,123", "Cómo se sabe dónde va la coma al multiplicar dos decimales", "Por qué dividir entre 0,5 da un número mayor"],
  figura: {
    titulo: "Los números decimales en un vistazo",
    svg: resumen("Resumen del tema de los números decimales", [
      ["Órdenes", "décima 0,1 · centésima 0,01 · milésima 0,001", "var(--pen)"],
      ["Comparar", "parte entera y después cifra a cifra (igualar decimales)", "var(--leaf)"],
      ["+ y −", "comas en columna, rellenar con ceros", "var(--sun)"],
      ["· y :", "· sin coma y contar decimales · : quitar coma del divisor", "var(--inf)"],
      ["Fracciones", "a/b = a : b · exactos, periódicos puros y mixtos", "var(--red)"],
    ]),
  },
  video: vg("decV"),
  mapa: mapa("DECIMALES", "var(--inf)", [
    ["Leer y escribir", "d · c · m · descomponer", "var(--pen)"],
    ["Comparar y aproximar", "recta · redondeo", "var(--leaf)"],
    ["Operar", "+ − · : y estimar", "var(--sun)"],
    ["Fracciones", "exactos · periódicos", "var(--red)"],
  ], 250),
  glosario: [
    ["Número decimal", "Número con parte entera y parte decimal separadas por una coma."],
    ["Coma decimal", "Signo que separa la parte entera de la decimal."],
    ["Décima", "Cada una de las 10 partes iguales de la unidad: 0,1."],
    ["Centésima", "Cada una de las 100 partes iguales de la unidad: 0,01."],
    ["Milésima", "Cada una de las 1 000 partes iguales de la unidad: 0,001."],
    ["Truncar", "Eliminar las cifras a partir de un orden."],
    ["Redondear", "Aproximar al valor más cercano de un orden."],
    ["Decimal exacto", "Decimal con un número finito de cifras."],
    ["Decimal periódico puro", "Su periodo empieza justo después de la coma."],
    ["Decimal periódico mixto", "Tiene cifras que no se repiten antes del periodo."],
    ["Periodo", "Grupo de cifras que se repite indefinidamente."],
    ["Estimación", "Cálculo aproximado con números redondeados."],
  ],
  situacion: {
    titulo: "La lista de la compra más barata",
    reto: "Con un presupuesto de 25 €, vuestro grupo tiene que preparar la compra para un desayuno saludable de seis personas comparando precios reales.",
    pasos: [
      "Haced la lista de productos y cantidades necesarias para seis personas.",
      "Buscad los precios en dos supermercados (folleto o web) y anotadlos con sus unidades (€/kg, €/L).",
      "Calculad el coste de cada producto según la cantidad (multiplicar decimales) y el total en cada tienda.",
      "Estimad primero y comprobad después; redondead a los céntimos.",
      "Decidid dónde comprar, cuánto sobra del presupuesto y cuánto cuesta por persona.",
    ],
    producto: "Un tique simulado de cada supermercado con los cálculos y la decisión razonada.",
    evaluacion: ["Opera correctamente con decimales.", "Usa la estimación para controlar los resultados.", "Compara precios por unidad con criterio.", "Explica la decisión con claridad."],
  },
  tarjetas: [
    ["0,1 / 0,01 / 0,001", "Décima / centésima / milésima"], ["Comparar", "Igualar decimales con ceros"], ["Redondear", "Si la cifra eliminada es ≥ 5, se sube"],
    ["Sumar y restar", "Comas en columna"], ["Multiplicar", "Sin coma; contar decimales de los dos factores"], ["· 10, 100…", "Coma a la derecha"],
    [": 10, 100…", "Coma a la izquierda"], ["Divisor decimal", "Multiplicar los dos por 10, 100…"], ["a/b a decimal", "Dividir a : b"],
    ["0,333…", "Periódico puro (1/3)"], ["0,1666…", "Periódico mixto (1/6)"], ["0,45 a fracción", "45/100 = 9/20"],
  ],
  familias: ["Al comprar, estimad el total redondeando cada precio al euro y comparadlo con el tique.", "Medid juntos objetos de casa en metros con decimales (1,25 m).", "Comparad precios por kilo o por litro de dos marcas.", "Mirad resultados deportivos con décimas y centésimas y ordenadlos."],
  profesores: {
    saberes: "Sentido numérico: números decimales, orden, aproximación y estimación; operaciones con decimales; relación entre fracciones y decimales; resolución de problemas de consumo y medida (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Bloques multibase o cuadrícula de 100 para representar décimas y centésimas.", "Tiendas simuladas con tiques reales.", "Carreras cronometradas en Educación Física con décimas.", "Debate: ¿por qué algunas fracciones dan decimales periódicos?"],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): números decimales", url: "https://proyectodescartes.org/" }, { t: "RAE: Ortografía, el separador decimal", url: "https://www.rae.es/" }],
  revisado: REV,
};
