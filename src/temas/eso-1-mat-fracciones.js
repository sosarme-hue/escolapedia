// Matemáticas 1º ESO · Las fracciones. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, recta, comparar, formula, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

// Barra dividida en n partes con k coloreadas, en (x, y) con ancho w.
const barra = (x, y, w, n, k, c = "var(--pen)", h = 26) => [...Array(n)].map((_, i) => `<rect x="${(x + (i * w) / n).toFixed(1)}" y="${y}" width="${(w / n).toFixed(1)}" height="${h}" fill="${i < k ? c : "var(--card)"}" fill-opacity="${i < k ? 0.5 : 1}" stroke="var(--ink)" stroke-width="1.4"/>`).join("");

const partes = lienzo("Una pizza dividida en 8 partes iguales con 3 coloreadas: tres octavos", `
  ${[...Array(8)].map((_, i) => { const a = (i * Math.PI) / 4 - Math.PI / 2, b = ((i + 1) * Math.PI) / 4 - Math.PI / 2; return `<path d="M70 90 L${(70 + 60 * Math.cos(a)).toFixed(1)} ${(90 + 60 * Math.sin(a)).toFixed(1)} A60 60 0 0 1 ${(70 + 60 * Math.cos(b)).toFixed(1)} ${(90 + 60 * Math.sin(b)).toFixed(1)} Z" fill="${i < 3 ? "var(--sun)" : "var(--card)"}" fill-opacity="${i < 3 ? 0.7 : 1}" stroke="var(--ink)" stroke-width="1.5"/>`; }).join("")}
  ${tx(190, 70, "3", { fs: 26, fam: D, c: "var(--red)" })}<path d="M170 80 H210" stroke="var(--ink)" stroke-width="2.4"/>${tx(190, 108, "8", { fs: 26, fam: D, c: "var(--pen)" })}
  ${tx(190, 134, "numerador: partes que tomo", { fs: 10, c: "var(--red)", max: 120 })}${tx(190, 150, "denominador: partes iguales", { fs: 10, c: "var(--pen)", max: 120 })}`);

const deCantidad = lienzo("Fracción de una cantidad: tres cuartos de 20 es 15, se divide entre 4 y se multiplica por 3", `
  ${[...Array(20)].map((_, i) => `<circle cx="${30 + (i % 5) * 22 + Math.floor(i / 5) * 4}" cy="${30 + Math.floor(i / 5) * 28}" r="8" fill="${Math.floor(i / 5) < 3 ? "var(--leaf)" : "var(--card)"}" stroke="var(--leaf)" stroke-width="1.6"/>`).join("")}
  ${[0, 1, 2, 3].map((j) => `<rect x="${18 + j * 4}" y="${18 + j * 28}" width="${112}" height="24" rx="8" fill="none" stroke="var(--muted)" stroke-dasharray="3 2"/>`).join("")}
  ${tx(196, 56, "3/4 de 20", { fs: 15, fam: D, max: 110 })}${tx(196, 82, "20 : 4 = 5", { fs: 12.5, c: "var(--muted)", max: 110 })}${tx(196, 104, "5 · 3 = 15", { fs: 12.5, c: "var(--muted)", max: 110 })}${tx(196, 136, "= 15", { fs: 20, c: "var(--leaf)", fam: D })}`);

const tipos = lienzo("Fracción propia, igual a la unidad e impropia: tres cuartos, cuatro cuartos y siete cuartos", `
  ${barra(20, 24, 100, 4, 3, "var(--pen)")}${tx(170, 42, "3/4 < 1  propia", { fs: 12, c: "var(--pen)", max: 120 })}
  ${barra(20, 66, 100, 4, 4, "var(--leaf)")}${tx(170, 84, "4/4 = 1", { fs: 12, c: "var(--leaf)", max: 120 })}
  ${barra(20, 108, 100, 4, 4, "var(--red)")}${barra(126, 108, 100, 4, 3, "var(--red)")}
  ${tx(130, 156, "7/4 = 1 + 3/4 (impropia)", { fs: 13, c: "var(--red)", fam: D })}`, 172);

const equivalentes = lienzo("Fracciones equivalentes: un medio, dos cuartos y cuatro octavos ocupan lo mismo", `
  ${barra(30, 20, 200, 2, 1, "var(--pen)")}${barra(30, 58, 200, 4, 2, "var(--leaf)")}${barra(30, 96, 200, 8, 4, "var(--sun)")}
  ${tx(130, 146, "1/2 = 2/4 = 4/8", { fs: 18, fam: D })}${tx(130, 168, "multiplicar arriba y abajo por lo mismo", { fs: 11, c: "var(--muted)" })}`, 180);

const simplificar = pasos("Simplificar dividiendo numerador y denominador entre un divisor común hasta la fracción irreducible", ["36/48", "Dividir entre 2: 18/24", "Dividir entre 2: 9/12", "Dividir entre 3: 3/4 irreducible", "Atajo: mcd(36, 48) = 12"], "Simplificar");

const comparar1 = recta("Comparar fracciones en la recta: dos tercios es mayor que tres quintos", {
  r: [0, 1], marcas: [[0, "0"], [0.5, "1/2"], [1, "1"]], titulo: "3/5 < 2/3",
  puntos: [{ x: 0.6, t: "3/5", c: "var(--pen)" }, { x: 2 / 3, t: "2/3", c: "var(--red)", abajo: true }],
});

const comun = comparar("Reducir a común denominador con el mcm para comparar o sumar", [
  ["Fracciones", ["3/4 y 5/6", "mcm(4, 6) = 12"], "var(--pen)"],
  ["Común denominador", ["9/12 y 10/12", "3/4 < 5/6"], "var(--leaf)"],
], "Común denominador");

const suma = pasos("Sumar fracciones de distinto denominador: común denominador, sumar numeradores y simplificar", ["2/3 + 1/4", "mcm(3, 4) = 12", "8/12 + 3/12", "= 11/12"], "Sumar");

const producto = lienzo("Multiplicar fracciones: dos tercios de tres cuartos es seis doceavos, un medio", `
  <rect x="24" y="24" width="120" height="120" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
  <rect x="24" y="24" width="90" height="120" fill="var(--pen)" fill-opacity=".25"/><rect x="24" y="24" width="90" height="80" fill="var(--red)" fill-opacity=".35"/>
  ${[1, 2, 3].map((i) => `<path d="M${24 + i * 30} 24 V144" stroke="var(--ink)" stroke-width="1"/>`).join("")}${[1, 2].map((j) => `<path d="M24 ${24 + j * 40} H144" stroke="var(--ink)" stroke-width="1"/>`).join("")}
  ${tx(84, 162, "3/4 en vertical", { fs: 10.5, c: "var(--pen)", max: 120 })}${tx(204, 60, "2/3 · 3/4", { fs: 15, fam: D, max: 110 })}${tx(204, 90, "= 6/12", { fs: 15, fam: D, c: "var(--red)", max: 110 })}${tx(204, 118, "= 1/2", { fs: 17, fam: D, c: "var(--leaf)", max: 110 })}${tx(204, 142, "arriba · arriba", { fs: 10.5, c: "var(--muted)", max: 110 })}${tx(204, 158, "abajo · abajo", { fs: 10.5, c: "var(--muted)", max: 110 })}`, 176);

const division = formula("Dividir fracciones: multiplicar por la inversa o multiplicar en cruz", "a/b : c/d = (a·d)/(b·c)", ["Multiplicar por la inversa", "3/4 : 2/5 = 3/4 · 5/2 = 15/8"], "var(--red)");

const problema = lienzo("Problema de fracciones encadenadas: gasto un tercio y luego la mitad de lo que queda", `
  ${barra(20, 30, 220, 6, 2, "var(--red)")}${tx(56, 76, "1/3 gasto", { fs: 11, c: "var(--red)", max: 72 })}
  ${barra(93.3, 96, 146.7, 2, 1, "var(--sun)")}${tx(130, 140, "1/2 del resto", { fs: 11, c: "var(--sun)", max: 80 })}${tx(204, 140, "queda", { fs: 11, c: "var(--leaf)", max: 60 })}
  ${tx(130, 168, "queda 1/3 del total", { fs: 13, fam: D })}`, 180);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Las fracciones",
  minutos: 110,
  objetivos: [
    "Interpretar una fracción como parte de un todo, como cociente y como operador",
    "Calcular la fracción de una cantidad y resolver el problema inverso",
    "Reconocer fracciones propias, impropias y números mixtos",
    "Obtener fracciones equivalentes, simplificar y reducir a común denominador",
    "Comparar y ordenar fracciones",
    "Sumar, restar, multiplicar y dividir fracciones y resolver problemas",
  ],
  claves: ["fracción", "numerador", "denominador", "fracción equivalente", "fracción irreducible", "común denominador", "inversa"],
  pregunta: {
    texto: "Una pizza se corta en 8 trozos. Ana se come 3 y Leo, 2. ¿Qué parte de la pizza queda?",
    respuesta: "Se han comido 3/8 + 2/8 = 5/8 de la pizza. Quedan <mark>3/8</mark>, es decir, 3 de los 8 trozos. Las <b>fracciones</b> sirven para expresar partes de un todo y operar con ellas.",
  },
  lectura: {
    titulo: "El ojo de Horus",
    html: `<p>Los antiguos egipcios eran unos expertos en repartir: grano, pan, cerveza, tierras junto al Nilo. Para hacerlo necesitaban las <b>fracciones</b>, y tenían una forma muy curiosa de escribirlas. Según una leyenda, el dios Horus perdió un ojo en una batalla y el dios Thot lo reconstruyó pieza a pieza. Cada parte del ojo representaba una fracción: 1/2, 1/4, 1/8, 1/16, 1/32 y 1/64. Los escribas usaban esos símbolos para medir cantidades de grano.</p><p>Si sumas todas esas partes obtienes 63/64: falta un poquito para llegar a la unidad. Dice la leyenda que Thot añadía con magia el trocito que faltaba.</p><p>Hoy usamos fracciones a todas horas, aunque a veces no lo notemos: «media hora», «un cuarto de kilo», «tres cuartas partes de la clase», «la mitad de precio». Las recetas de cocina, las notas musicales (blanca, negra, corchea), los descuentos o las probabilidades se expresan con fracciones. En este tema aprenderás qué significan, cómo saber si dos fracciones son iguales, cómo compararlas y cómo operar con ellas.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es una fracción?</h3><p>Una <b>fracción</b> <mark>a/b</mark> representa una o varias partes iguales de una unidad. Tiene dos términos:</p><ul><li>El <b>denominador</b> (b), abajo, indica en cuántas <b>partes iguales</b> se divide la unidad. No puede ser 0.</li><li>El <b>numerador</b> (a), arriba, indica cuántas de esas partes se <b>toman</b>.</li></ul><p>Si una pizza se corta en 8 trozos iguales y tomamos 3, hemos tomado <b>3/8</b> («tres octavos»). Las fracciones se leen diciendo el numerador y el nombre del denominador: medios (2), tercios (3), cuartos (4), quintos (5)… décimos (10); y a partir de 11, se añade «-avos»: 5/12 son «cinco doceavos».</p><p>Es fundamental que las partes sean <b>iguales</b>. Si cortas una pizza en 8 trozos de distinto tamaño, un trozo no es 1/8 de pizza.</p>`, svg: partes },
    { html: `<h3>1.2 Los tres significados de una fracción</h3><p>Una misma fracción, por ejemplo 3/4, se puede entender de tres maneras:</p><ul><li><b>Parte de un todo</b>: 3 de las 4 partes iguales de una tableta de chocolate.</li><li><b>Cociente</b>: el resultado de dividir 3 entre 4. Si repartes 3 pizzas entre 4 amigos, a cada uno le tocan 3/4 de pizza, es decir, 3 : 4 = 0,75. Por eso toda fracción tiene un valor decimal.</li><li><b>Operador</b>: algo que actúa sobre una cantidad. «Los 3/4 de 20 alumnos» significa dividir 20 entre 4 y multiplicar por 3.</li></ul><p>Los tres significados están relacionados y se usan según el problema. Cuando dices «he leído 2/5 del libro» usas la fracción como parte; cuando calculas cuántas páginas son, la usas como operador; y cuando la pasas a decimal para comparar, la usas como cociente.</p>` },
    { html: `<h3>1.3 La fracción de una cantidad</h3><p>Para calcular la fracción de una cantidad se <b>divide</b> la cantidad entre el denominador y el resultado se <b>multiplica</b> por el numerador. También se puede multiplicar primero y dividir después: el resultado es el mismo.</p><p>Ejemplo: 3/4 de 20 → 20 : 4 = 5 → 5 · 3 = <mark>15</mark>. De los 20 caramelos, 15 son tres cuartas partes.</p><p>El <b>problema inverso</b> también es frecuente: «He gastado 2/5 de mi dinero, que son 12 €. ¿Cuánto tenía?». Si 2 partes son 12 €, 1 parte son 12 : 2 = 6 €, y las 5 partes (el total) son 6 · 5 = 30 €. Se hace al revés: dividir entre el numerador y multiplicar por el denominador.</p><p>Un dibujo con barras o con grupos de objetos ayuda mucho a entender estos problemas. Haz uno siempre que dudes.</p>`, svg: deCantidad },
    { html: `<h3>1.4 Propias, impropias y números mixtos</h3><ul><li>Si el numerador es <b>menor</b> que el denominador, la fracción es <b>propia</b> y vale menos que 1: 3/4.</li><li>Si numerador y denominador son <b>iguales</b>, la fracción vale exactamente <b>1</b>: 4/4 = 1.</li><li>Si el numerador es <b>mayor</b>, la fracción es <b>impropia</b> y vale más que 1: 7/4.</li></ul><p>Una fracción impropia se puede escribir como <b>número mixto</b>: una parte entera y una fracción propia. Para ello se divide el numerador entre el denominador: 7 : 4 = 1 y resto 3, así que <mark>7/4 = 1 3/4</mark> («uno y tres cuartos»).</p><p>Al revés, para pasar 2 1/3 a fracción se multiplica el entero por el denominador y se suma el numerador: (2 · 3 + 1)/3 = 7/3. Los números mixtos se usan mucho en recetas («1 ½ tazas de harina»), pero para operar es más cómodo pasarlos a fracción.</p>`, svg: tipos },
    { html: `<h3>2.1 Fracciones equivalentes</h3><p>Dos fracciones son <b>equivalentes</b> si representan la misma cantidad: 1/2, 2/4 y 4/8 ocupan lo mismo, como se ve en las barras. Se obtienen fracciones equivalentes de dos formas:</p><ul><li><b>Amplificar</b>: multiplicar numerador y denominador por el mismo número. 1/2 = 3/6 = 5/10.</li><li><b>Simplificar</b>: dividir numerador y denominador entre un divisor común. 6/9 = 2/3.</li></ul><p>Para comprobar si dos fracciones son equivalentes se usan los <b>productos cruzados</b>: a/b y c/d son equivalentes si <mark>a · d = b · c</mark>. ¿Son equivalentes 4/6 y 10/15? 4 · 15 = 60 y 6 · 10 = 60: sí.</p><p>Esta idea es la base de casi todo el tema: para comparar, sumar o restar fracciones, lo que haremos es cambiarlas por otras equivalentes que sean más cómodas.</p>`, svg: equivalentes, video: vb("fraB") },
    { html: `<h3>2.2 Simplificar: la fracción irreducible</h3><p>Una fracción es <b>irreducible</b> cuando ya no se puede simplificar más, porque numerador y denominador no tienen divisores comunes (salvo el 1). Para llegar a ella hay dos caminos:</p><ul><li><b>Poco a poco</b>: dividir entre 2, 3, 5… mientras se pueda. 36/48 → 18/24 → 9/12 → 3/4. Los criterios de divisibilidad ayudan mucho.</li><li><b>De una vez</b>: dividir entre el <b>máximo común divisor</b>. mcd(36, 48) = 12, y 36/48 = 3/4 directamente.</li></ul><p>Conviene dar siempre los resultados simplificados: 3/4 es mucho más claro que 36/48. Un error frecuente es «simplificar» restando o tachando cifras: en 16/64 no se pueden tachar los seis, aunque por casualidad dé 1/4. Simplificar es siempre <b>dividir</b> arriba y abajo entre el mismo número.</p>`, svg: simplificar },
    { html: `<h3>2.3 Comparar y ordenar fracciones</h3><p>Según cómo sean las fracciones, hay distintas estrategias:</p><ul><li><b>Mismo denominador</b>: es mayor la de mayor numerador. 5/8 &gt; 3/8.</li><li><b>Mismo numerador</b>: es mayor la de menor denominador, porque las partes son más grandes. 3/5 &gt; 3/8.</li><li><b>Distintos</b>: se <b>reducen a común denominador</b> (normalmente con el mcm de los denominadores) y se comparan los numeradores. 3/4 y 5/6: mcm(4, 6) = 12; 3/4 = 9/12 y 5/6 = 10/12, así que <mark>3/4 &lt; 5/6</mark>.</li></ul><p>También se pueden pasar a decimal (3/4 = 0,75 y 5/6 = 0,83…) o usar los productos cruzados (3 · 6 = 18 &lt; 4 · 5 = 20). Otra pista útil es comparar con 1/2 o con 1: 3/7 es menor que la mitad y 4/7 mayor.</p>`, svg: comparar1 },
    { html: `<h3>2.4 Reducir a común denominador</h3><p><b>Reducir a común denominador</b> es transformar varias fracciones en otras equivalentes que tengan el mismo denominador. El método más eficaz es:</p><ol><li>Calcular el <b>mcm</b> de los denominadores: será el nuevo denominador.</li><li>Para cada fracción, dividir el mcm entre su denominador y multiplicar el resultado por el numerador.</li></ol><p>Ejemplo: 3/4, 5/6 y 7/9. mcm(4, 6, 9) = 36. Entonces 3/4 = 27/36 (36 : 4 = 9; 9 · 3 = 27), 5/6 = 30/36 y 7/9 = 28/36. Ordenadas: 27/36 &lt; 28/36 &lt; 30/36, es decir, 3/4 &lt; 7/9 &lt; 5/6.</p><p>Se podría usar como denominador común el producto de los denominadores, pero los números salen mucho más grandes. El mcm es el denominador común más pequeño posible, y eso facilita los cálculos.</p>`, svg: comun },
    { html: `<h3>3.1 Sumar y restar fracciones</h3><p>Con el <b>mismo denominador</b>, se suman o restan los numeradores y se deja el denominador: 3/8 + 2/8 = 5/8. Tiene sentido: 3 octavos más 2 octavos son 5 octavos. ¡No se suman los denominadores! 3/8 + 2/8 no es 5/16.</p><p>Con <b>distinto denominador</b>, primero se reducen a común denominador y después se suman: 2/3 + 1/4 = 8/12 + 3/12 = <mark>11/12</mark>. Al final, se simplifica si se puede.</p><p>Para sumar un entero y una fracción, se escribe el entero como fracción de denominador 1: 2 + 3/5 = 10/5 + 3/5 = 13/5. Con números mixtos, lo más seguro es pasarlos antes a fracción impropia.</p><p>La resta funciona igual: 5/6 − 1/4 = 10/12 − 3/12 = 7/12. Y en operaciones con varias sumas y restas, se reduce todo al mismo denominador de una vez.</p>`, svg: suma },
    { html: `<h3>3.2 Multiplicar fracciones</h3><p>Para multiplicar fracciones se multiplican los <b>numeradores</b> entre sí y los <b>denominadores</b> entre sí: <mark>a/b · c/d = (a · c)/(b · d)</mark>. 2/3 · 3/4 = 6/12 = 1/2.</p><p>Multiplicar fracciones es calcular la <b>fracción de una fracción</b>: 2/3 · 3/4 son «los dos tercios de tres cuartos». En el dibujo, el cuadrado se divide en 4 columnas y se toman 3 (3/4); de esa parte se toman 2 de las 3 filas. Quedan 6 de los 12 cuadraditos: la mitad.</p><p>Un truco para no trabajar con números grandes: <b>simplificar antes de multiplicar</b>, tachando factores comunes entre cualquier numerador y cualquier denominador. 4/9 · 3/8 = (4 · 3)/(9 · 8): el 4 y el 8 se simplifican a 1 y 2, y el 3 y el 9 a 1 y 3, así que queda 1/6. Para multiplicar un entero por una fracción, se multiplica solo el numerador: 5 · 2/7 = 10/7.</p>`, svg: producto },
    { html: `<h3>3.3 Dividir fracciones</h3><p>La <b>inversa</b> de una fracción a/b es b/a: se dan la vuelta numerador y denominador. Una fracción por su inversa da 1: 3/5 · 5/3 = 15/15 = 1. El 0 no tiene inversa.</p><p>Para <b>dividir</b> fracciones se multiplica la primera por la <b>inversa</b> de la segunda: <mark>a/b : c/d = a/b · d/c</mark>. Ejemplo: 3/4 : 2/5 = 3/4 · 5/2 = 15/8. Es lo mismo que multiplicar «en cruz»: numerador de la primera por denominador de la segunda, y denominador de la primera por numerador de la segunda.</p><p>¿Qué significa dividir fracciones? Por ejemplo, 3 : 1/4 pregunta cuántos cuartos caben en 3 unidades: 3 · 4 = 12. Con una jarra de 3 litros llenas 12 vasos de 1/4 de litro. Por eso, al dividir entre una fracción menor que 1 el resultado es mayor que el dividendo.</p>`, svg: division, video: vb("fraB2") },
    { html: `<h3>3.4 Operaciones combinadas con fracciones</h3><p>Se aplica la jerarquía de siempre: <b>paréntesis</b>, <b>potencias</b>, <b>multiplicaciones y divisiones</b> (de izquierda a derecha) y, por último, <b>sumas y restas</b>.</p><p>Ejemplo: 1/2 + 2/3 · 9/4. Primero el producto: 2/3 · 9/4 = 18/12 = 3/2. Después la suma: 1/2 + 3/2 = 4/2 = <b>2</b>.</p><p>Otro: (3/4 − 1/2) : 5/8 → paréntesis: 3/4 − 2/4 = 1/4 → división: 1/4 · 8/5 = 8/20 = 2/5.</p><p>Las potencias de fracciones se calculan elevando numerador y denominador: (2/3)² = 4/9. Consejos para no perderse: simplifica en cada paso, escribe los enteros como fracción (3 = 3/1) y no mezcles decimales y fracciones en la misma cuenta: elige una forma y pásalo todo a ella.</p>` },
    { html: `<h3>3.5 Problemas con fracciones</h3><p>Hay algunos tipos de problemas que aparecen una y otra vez:</p><ul><li><b>Fracción de una cantidad</b>: «los 3/5 de 40 alumnos van en autobús» → 3/5 · 40 = 24.</li><li><b>Problema inverso</b>: «2/3 de un depósito son 120 L; ¿cuánto cabe?» → 120 : 2 · 3 = 180 L.</li><li><b>Suma de partes</b>: «gasto 1/4 en comida y 1/3 en ropa; ¿qué fracción me queda?» → 1 − (1/4 + 1/3) = 1 − 7/12 = 5/12.</li><li><b>Fracción de lo que queda</b>: «gasto 1/3 de mi dinero y luego la mitad de lo que me queda» → me quedan 2/3; gasto 1/2 de 2/3 = 1/3; queda 1/3 del total.</li></ul><p>En el último tipo hay que tener mucho cuidado: la segunda fracción no es del total, sino del <b>resto</b>. Un dibujo con una barra, como el de la derecha, evita equivocarse. Y recuerda dar la respuesta con una frase y, si se pide, con la cantidad (no solo la fracción).</p>`, svg: problema, video: vg("fraV") },
  ],
  ejemplos: [
    { enunciado: "En una clase de 28 alumnos, 3/7 practican fútbol. ¿Cuántos son?", pasos: ["28 : 7 = 4.", "4 · 3 = 12."], resultado: "12 alumnos." },
    { enunciado: "Pasa 23/5 a número mixto y 3 2/7 a fracción.", pasos: ["23 : 5 = 4 y resto 3 → 4 3/5.", "(3 · 7 + 2)/7 = 23/7."], resultado: "4 3/5 y 23/7." },
    { enunciado: "Simplifica 84/126 hasta la fracción irreducible.", pasos: ["mcd(84, 126) = 42.", "84 : 42 = 2; 126 : 42 = 3."], resultado: "2/3." },
    { enunciado: "Ordena de menor a mayor: 2/3, 5/8, 3/4.", pasos: ["mcm(3, 8, 4) = 24.", "16/24, 15/24, 18/24."], resultado: "5/8 < 2/3 < 3/4." },
    { enunciado: "Calcula: 5/6 − 1/4 + 2/3.", pasos: ["mcm(6, 4, 3) = 12.", "10/12 − 3/12 + 8/12 = 15/12.", "Simplificar: 5/4."], resultado: "5/4 = 1 1/4." },
    { enunciado: "Calcula: (1 − 2/5) : 3/10 + 1/2 · 4.", pasos: ["Paréntesis: 3/5.", "3/5 : 3/10 = 3/5 · 10/3 = 2.", "1/2 · 4 = 2.", "2 + 2."], resultado: "4." },
  ],
  errores: [
    "Sumar los denominadores: 1/2 + 1/3 no es 2/5, es 5/6.",
    "Usar partes que no son iguales al representar una fracción.",
    "Simplificar restando o tachando cifras en lugar de dividir.",
    "Pensar que la fracción con mayor denominador es mayor: 1/8 < 1/3.",
    "Al dividir, dar la vuelta a la primera fracción en lugar de a la segunda.",
    "En «la mitad de lo que queda», calcular la mitad del total.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe la fracción y cómo se lee: a) 5 partes de 9; b) 7 partes de 12; c) 1 parte de 3.", sol: "a) 5/9, cinco novenos. b) 7/12, siete doceavos. c) 1/3, un tercio." },
    { nivel: "básico", q: "Calcula: 2/5 de 35; 3/8 de 64; 5/6 de 90.", sol: "35 : 5 · 2 = 14; 64 : 8 · 3 = 24; 90 : 6 · 5 = 75." },
    { nivel: "básico", q: "Clasifica en propias e impropias: 5/7, 9/4, 6/6, 11/12, 15/8.", sol: "Propias: 5/7, 11/12. Impropias: 9/4, 15/8. 6/6 = 1." },
    { nivel: "básico", q: "Pasa a número mixto: 11/3 y 17/4.", sol: "3 2/3 y 4 1/4." },
    { nivel: "básico", q: "Escribe tres fracciones equivalentes a 2/5.", sol: "4/10, 6/15, 8/20 (amplificando por 2, 3 y 4)." },
    { nivel: "básico", q: "¿Son equivalentes 6/8 y 9/12? ¿Y 2/3 y 3/4?", sol: "6 · 12 = 72 = 8 · 9: sí. 2 · 4 = 8 ≠ 9 = 3 · 3: no." },
    { nivel: "básico", q: "Simplifica hasta la irreducible: 12/18, 25/100, 42/56.", sol: "2/3; 1/4; 3/4." },
    { nivel: "básico", q: "Compara: 4/9 y 7/9; 5/6 y 5/8.", sol: "4/9 < 7/9 (mismo denominador). 5/6 > 5/8 (mismo numerador, partes mayores)." },
    { nivel: "básico", q: "Calcula: 2/7 + 3/7; 9/10 − 4/10.", sol: "5/7; 5/10 = 1/2." },
    { nivel: "básico", q: "Calcula: 2/3 · 4/5; 3 · 2/7.", sol: "8/15; 6/7." },
    { nivel: "básico", q: "Escribe la inversa de 4/9, de 7 y de 1/5.", sol: "9/4; 1/7; 5." },
    { nivel: "básico", q: "Calcula: 2/3 : 4/5.", sol: "2/3 · 5/4 = 10/12 = 5/6." },
    { nivel: "medio", q: "Halla el número que falta: 3/4 = x/20; 5/x = 15/27.", sol: "x = 15 (4 · 5 = 20). x = 9 (5 · 27 = 15 · x → x = 9)." },
    { nivel: "medio", q: "Ordena de menor a mayor: 3/5, 7/10, 1/2, 2/3.", sol: "mcm = 30: 18/30, 21/30, 15/30, 20/30 → 1/2 < 3/5 < 2/3 < 7/10." },
    { nivel: "medio", q: "Calcula: 3/4 + 5/6 − 1/3.", sol: "9/12 + 10/12 − 4/12 = 15/12 = 5/4." },
    { nivel: "medio", q: "Calcula: 2 − 3/8 + 1 1/2.", sol: "16/8 − 3/8 + 12/8 = 25/8." },
    { nivel: "medio", q: "Calcula simplificando antes: 6/35 · 14/9.", sol: "(6 · 14)/(35 · 9): 6 y 9 → 2 y 3; 14 y 35 → 2 y 5. Resultado: 4/15." },
    { nivel: "medio", q: "Calcula: 5/6 : 10/9 y 4 : 2/3.", sol: "5/6 · 9/10 = 45/60 = 3/4. 4 · 3/2 = 6." },
    { nivel: "medio", q: "Calcula: 1/2 + 3/4 · 2/9.", sol: "3/4 · 2/9 = 6/36 = 1/6; 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3." },
    { nivel: "medio", q: "Calcula: (2/3 − 1/6) · (1 + 1/2).", sol: "(4/6 − 1/6) = 1/2; (3/2); 1/2 · 3/2 = 3/4." },
    { nivel: "medio", q: "He leído 3/8 de un libro de 240 páginas. ¿Cuántas me faltan?", sol: "3/8 de 240 = 90 leídas. Faltan 240 − 90 = 150 páginas (5/8)." },
    { nivel: "medio", q: "Los 2/5 de un número son 18. ¿Cuál es el número?", sol: "18 : 2 = 9 (un quinto); 9 · 5 = 45." },
    { nivel: "medio", q: "¿Cuántas botellas de 3/4 L se llenan con 15 L?", sol: "15 : 3/4 = 15 · 4/3 = 20 botellas." },
    { nivel: "avanzado", q: "Marta gasta 1/4 de su paga en el cine y 2/5 en un libro. Le quedan 7 €. ¿Cuánto era la paga?", sol: "Gasta 5/20 + 8/20 = 13/20; le quedan 7/20 = 7 €. 1/20 = 1 € → paga 20 €." },
    { nivel: "avanzado", q: "Un depósito está lleno. Se gasta 1/3 y luego 1/4 de lo que queda. Si quedan 300 L, ¿cuál es su capacidad?", sol: "Tras 1/3 quedan 2/3. Se gasta 1/4 de 2/3 = 1/6. Quedan 2/3 − 1/6 = 1/2. 1/2 = 300 L → 600 L." },
    { nivel: "avanzado", q: "Calcula: [1 − (1/2)²] : (3/4 − 1/8).", sol: "1 − 1/4 = 3/4; 3/4 − 1/8 = 5/8; 3/4 : 5/8 = 3/4 · 8/5 = 24/20 = 6/5." },
    { nivel: "avanzado", q: "Encuentra una fracción entre 3/7 y 4/7, y otra entre 1/3 y 1/2.", sol: "3/7 = 6/14 y 4/7 = 8/14 → 7/14 = 1/2. 1/3 = 4/12 y 1/2 = 6/12 → 5/12." },
    { nivel: "avanzado", q: "Suma las fracciones del ojo de Horus: 1/2 + 1/4 + 1/8 + 1/16 + 1/32 + 1/64. ¿Cuánto falta para 1?", sol: "32/64 + 16/64 + 8/64 + 4/64 + 2/64 + 1/64 = 63/64. Falta 1/64." },
    { nivel: "avanzado", q: "Un grifo llena una bañera en 6 minutos y otro en 3. ¿Qué fracción llenan juntos en 1 minuto? ¿Cuánto tardan juntos?", sol: "1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 por minuto. Juntos tardan 2 minutos." },
    { nivel: "avanzado", q: "Encuentra el error: «2/3 + 4/5 = 6/8 = 3/4».", sol: "No se suman los denominadores. 2/3 + 4/5 = 10/15 + 12/15 = 22/15." },
  ],
  quiz: [
    { q: "En 5/8, el denominador indica…", o: ["las partes que se toman", "las partes iguales del todo", "el resultado", "el resto"], a: 1, e: "Abajo: partes iguales." },
    { q: "«Siete doceavos» se escribe…", o: ["12/7", "7/12", "7,12", "1/7"], a: 1, e: "Numerador 7, denominador 12." },
    { q: "2/3 de 30 =", o: ["10", "20", "45", "15"], a: 1, e: "30 : 3 · 2." },
    { q: "9/4 es una fracción…", o: ["propia", "impropia", "igual a 1", "irreducible y propia"], a: 1, e: "Numerador mayor." },
    { q: "9/4 como número mixto:", o: ["2 1/4", "1 5/4", "2 4/1", "4 1/2"], a: 0, e: "9 : 4 = 2, resto 1." },
    { q: "Una fracción equivalente a 3/5 es…", o: ["5/3", "6/10", "6/8", "3/10"], a: 1, e: "Por 2 arriba y abajo." },
    { q: "18/24 simplificada:", o: ["9/12", "3/4", "6/8", "2/3"], a: 1, e: "Entre el mcd 6." },
    { q: "¿Son equivalentes 2/6 y 3/9?", o: ["Sí", "No", "Solo a veces", "No se puede saber"], a: 0, e: "2 · 9 = 6 · 3." },
    { q: "¿Cuál es mayor?", o: ["1/3", "1/5", "1/8", "1/10"], a: 0, e: "Menor denominador, partes mayores." },
    { q: "¿Cuál es mayor, 3/4 o 5/6?", o: ["3/4", "5/6", "son iguales", "no se pueden comparar"], a: 1, e: "9/12 < 10/12." },
    { q: "1/2 + 1/3 =", o: ["2/5", "5/6", "1/5", "2/6"], a: 1, e: "3/6 + 2/6." },
    { q: "3/4 − 1/4 =", o: ["2", "1/2", "2/8", "1/4"], a: 1, e: "2/4 = 1/2." },
    { q: "2/5 · 3/4 =", o: ["6/20 = 3/10", "5/9", "8/15", "6/9"], a: 0, e: "Arriba por arriba, abajo por abajo." },
    { q: "La inversa de 2/7 es…", o: ["−2/7", "7/2", "2/7", "1/7"], a: 1, e: "Se da la vuelta." },
    { q: "1/2 : 1/4 =", o: ["1/8", "2", "1/2", "4"], a: 1, e: "1/2 · 4/1." },
    { q: "3 : 1/2 =", o: ["3/2", "6", "1,5", "1/6"], a: 1, e: "¿Cuántas mitades hay en 3?" },
    { q: "(2/3)² =", o: ["4/6", "4/9", "2/9", "4/3"], a: 1, e: "Se elevan los dos términos." },
    { q: "1/2 + 1/2 · 1/2 =", o: ["1/2", "3/4", "1", "1/4"], a: 1, e: "Primero el producto: 1/4." },
    { q: "Gasto 1/3 y luego 1/2 de lo que queda. Me queda…", o: ["1/6", "1/3", "1/2", "2/3"], a: 1, e: "La mitad de 2/3 es 1/3." },
    { q: "Si 3/4 de una cantidad son 60, la cantidad es…", o: ["45", "80", "20", "240"], a: 1, e: "60 : 3 · 4." },
  ],
  examen: [
    { q: "3/5 de 45 =", o: ["27", "15", "75", "9"], a: 0, e: "45 : 5 · 3." },
    { q: "La fracción irreducible de 45/60 es…", o: ["9/12", "3/4", "15/20", "5/6"], a: 1, e: "mcd 15." },
    { q: "Ordena: 1/2, 2/5, 3/4", o: ["2/5 < 1/2 < 3/4", "1/2 < 2/5 < 3/4", "3/4 < 1/2 < 2/5", "2/5 < 3/4 < 1/2"], a: 0, e: "0,4; 0,5; 0,75." },
    { q: "2/3 + 1/6 =", o: ["3/9", "5/6", "1/2", "3/6"], a: 1, e: "4/6 + 1/6." },
    { q: "3/8 · 4/9 =", o: ["1/6", "12/17", "7/17", "1/3"], a: 0, e: "12/72." },
    { q: "5/6 : 5/3 =", o: ["1/2", "2", "25/18", "1"], a: 0, e: "5/6 · 3/5 = 15/30." },
    { q: "1 − 1/4 − 1/3 =", o: ["5/12", "1/12", "7/12", "1/2"], a: 0, e: "12/12 − 3/12 − 4/12." },
    { q: "Un bidón de 20 L está a sus 3/4. ¿Cuántos litros faltan para llenarlo?", o: ["15", "5", "4", "12"], a: 1, e: "Falta 1/4 de 20." },
  ],
  feynman: ["Qué significan el numerador y el denominador", "Por qué 1/2 y 2/4 son la misma cantidad", "Por qué para sumar fracciones hay que buscar un denominador común", "Por qué dividir entre 1/4 es lo mismo que multiplicar por 4"],
  figura: {
    titulo: "Las fracciones en un vistazo",
    svg: resumen("Resumen del tema de las fracciones", [
      ["a/b", "b: partes iguales · a: partes que se toman", "var(--pen)"],
      ["Equivalentes", "a/b = c/d si a · d = b · c · simplificar con el mcd", "var(--leaf)"],
      ["+ y −", "común denominador (mcm) y operar numeradores", "var(--sun)"],
      ["·", "a/b · c/d = (a · c)/(b · d)", "var(--inf)"],
      [":", "multiplicar por la inversa: a/b · d/c", "var(--red)"],
    ]),
  },
  video: vg("fraV"),
  mapa: mapa("FRACCIONES", "var(--sun)", [
    ["Significados", "parte · cociente · operador", "var(--pen)"],
    ["Equivalentes", "amplificar · simplificar", "var(--leaf)"],
    ["Comparar", "común denominador", "var(--sun)"],
    ["Operar", "+ − · : y problemas", "var(--red)"],
  ], 250),
  glosario: [
    ["Fracción", "Expresión a/b que indica partes iguales de una unidad."],
    ["Numerador", "Término de arriba: partes que se toman."],
    ["Denominador", "Término de abajo: partes iguales en que se divide la unidad."],
    ["Fracción propia", "La que tiene el numerador menor que el denominador (vale menos que 1)."],
    ["Fracción impropia", "La que tiene el numerador mayor que el denominador (vale más que 1)."],
    ["Número mixto", "Entero más fracción propia: 1 3/4."],
    ["Fracciones equivalentes", "Las que representan la misma cantidad."],
    ["Amplificar", "Multiplicar numerador y denominador por el mismo número."],
    ["Simplificar", "Dividir numerador y denominador entre un divisor común."],
    ["Fracción irreducible", "La que no se puede simplificar más."],
    ["Común denominador", "Denominador igual para varias fracciones equivalentes a las dadas."],
    ["Inversa", "Fracción con numerador y denominador intercambiados."],
    ["Productos cruzados", "a · d y b · c; si son iguales, a/b y c/d son equivalentes."],
  ],
  situacion: {
    titulo: "Cocinamos para toda la clase",
    reto: "Vais a adaptar una receta real (bizcocho, galletas, batido…) pensada para 4 personas para que llegue a toda la clase, trabajando con las fracciones de los ingredientes.",
    pasos: [
      "Elegid una receta que tenga cantidades con fracciones (1/2 taza, 3/4 de vaso, 1 1/2 cucharadas…).",
      "Calculad por qué número hay que multiplicar las cantidades para el número de alumnos.",
      "Multiplicad cada fracción y simplificad o pasad a número mixto los resultados.",
      "Calculad qué fracción del paquete de harina, azúcar, etc., vais a gastar.",
      "Si es posible, preparad la receta (en casa o en el aula) y comprobad el resultado.",
    ],
    producto: "Una ficha de receta «para toda la clase» con las cantidades originales, las nuevas y los cálculos.",
    evaluacion: ["Multiplica y simplifica fracciones correctamente.", "Usa números mixtos de forma adecuada.", "Interpreta la fracción de una cantidad en el contexto.", "Presenta la receta de forma clara y ordenada."],
  },
  tarjetas: [
    ["a/b", "b partes iguales, tomo a"], ["Fracción de una cantidad", "Dividir entre b y multiplicar por a"], ["Propia", "a < b, vale menos que 1"],
    ["Impropia", "a > b, vale más que 1"], ["Equivalentes", "a · d = b · c"], ["Irreducible", "Dividir entre el mcd"],
    ["Comparar", "Reducir a común denominador"], ["Sumar y restar", "Mismo denominador; operar numeradores"], ["Multiplicar", "(a · c)/(b · d)"],
    ["Inversa de a/b", "b/a"], ["Dividir", "Multiplicar por la inversa"], ["«Lo que queda»", "La fracción se aplica al resto"],
  ],
  familias: ["Al cocinar, usad recetas con fracciones y doblad o reducid las cantidades.", "Al repartir una pizza o tarta, preguntad qué fracción le toca a cada uno.", "Buscad fracciones en la vida diaria: media hora, un cuarto de kilo, tres cuartos de litro.", "Jugad a comparar fracciones con cartas: gana quien saque la mayor."],
  profesores: {
    saberes: "Sentido numérico: fracciones y sus significados, equivalencia, comparación y orden, operaciones con fracciones y resolución de problemas contextualizados (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Regletas o tiras de papel para construir fracciones equivalentes.", "Dominó de fracciones equivalentes y decimales.", "Problemas de recetas y repartos con material real.", "Representar productos de fracciones con el modelo del área (papel cuadriculado)."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): fracciones", url: "https://proyectodescartes.org/" }, { t: "Wikipedia: Ojo de Horus (fracciones)", url: "https://es.wikipedia.org/wiki/Ojo_de_Horus" }],
  revisado: REV,
};
