// Matemáticas 3º ESO · Números racionales y fracciones. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, recta, comparar, resumen, rot, C, RD, DECRET } = require("./_eso3L1");

// Barra dividida en n partes con k coloreadas.
const barra = (x, y, w, n, k, c, h = 24) => [...Array(n)].map((_, i) => `<rect x="${(x + (i * w) / n).toFixed(1)}" y="${y}" width="${(w / n).toFixed(1)}" height="${h}" fill="${i < k ? c : "var(--card)"}" stroke="var(--ink)" stroke-width="1.3"/>`).join("");

const conjuntos = lienzo("Conjuntos de números: los naturales dentro de los enteros y estos dentro de los racionales", `
  <ellipse cx="130" cy="92" rx="118" ry="78" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2.5"/>
  <ellipse cx="112" cy="104" rx="80" ry="54" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2.5"/>
  <ellipse cx="92" cy="112" rx="42" ry="30" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="2.5"/>
  ${rot([[92, 108, "ℕ", "var(--red)"], [92, 126, "0, 1, 7"], [160, 92, "ℤ", "var(--leaf)"], [162, 110, "−3, −12"], [130, 30, "ℚ", "var(--pen)"], [212, 76, "3/4"], [212, 134, "−0,5"], [196, 104, "0,3̂"]])}`);

const equivalentes = lienzo("Tres barras iguales: un medio, dos cuartos y cuatro octavos ocupan lo mismo", `
  ${barra(40, 20, 190, 2, 1, "var(--pen)")}${barra(40, 62, 190, 4, 2, "var(--leaf)")}${barra(40, 104, 190, 8, 4, "var(--red)")}
  ${rot([[22, 37, "1/2", "var(--pen)"], [22, 79, "2/4", "var(--leaf)"], [22, 121, "4/8", "var(--red)"]])}
  <path d="M135 12 V136" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/>${tx(130, 162, "1 · 8 = 2 · 4: productos cruzados iguales", { fs: 12, c: "var(--muted)" })}`);

const simplificar = pasos("Simplificar una fracción hasta la irreducible dividiendo entre el máximo común divisor", ["36/48: buscar el m.c.d.", "36 = 2²·3², 48 = 2⁴·3", "m.c.d. = 2²·3 = 12", "36:12 / 48:12 = 3/4", "3 y 4 primos entre sí ✓"], "Fracción irreducible");

const ordenar = recta("Ordenar fracciones en la recta: menos tres cuartos, un tercio, cinco sextos y siete cuartos", { r: [-1, 2], marcas: [-1, 0, 1, 2], puntos: [{ x: -0.75, t: "−3/4", c: "var(--red)" }, { x: 1 / 3, t: "1/3", c: "var(--leaf)" }, { x: 5 / 6, t: "5/6", c: "var(--pen)" }, { x: 1.75, t: "7/4", c: "var(--inf)" }], pie: "−3/4 < 1/3 < 5/6 < 7/4" });

const representar = lienzo("Representar siete cuartos: el tramo entre uno y dos se divide en cuatro partes y se cuentan tres", `
  <path d="M14 96 H246" stroke="var(--ink)" stroke-width="2.5"/>
  ${[0, 1, 2].map((n, i) => `<path d="M${30 + i * 100} 86 V106" stroke="var(--ink)" stroke-width="2.5"/>${tx(30 + i * 100, 124, n, { fs: 13 })}`).join("")}
  ${[1, 2, 3].map((k) => `<path d="M${130 + k * 25} 90 V102" stroke="var(--muted)" stroke-width="1.6"/>`).join("")}
  <circle cx="205" cy="96" r="6" fill="var(--red)"/>${tx(205, 74, "7/4 = 1 + 3/4", { fs: 13, c: "var(--red)" })}
  ${tx(130, 32, "1 entero y 3 de 4 partes", { fs: 12.5, c: "var(--muted)" })}${tx(130, 158, "entre dos racionales siempre hay otro", { fs: 11.5, w: 400 })}`);

const mixtos = lienzo("La fracción impropia once cuartos equivale al número mixto dos y tres cuartos", `
  ${barra(20, 40, 70, 4, 4, "var(--pen)")}${barra(95, 40, 70, 4, 4, "var(--pen)")}${barra(170, 40, 70, 4, 3, "var(--pen)")}
  ${tx(130, 26, "11/4: once cuartos", { fs: 13, c: "var(--muted)" })}
  ${tx(55, 86, "1", { fs: 14 })}${tx(130, 86, "1", { fs: 14 })}${tx(205, 86, "3/4", { fs: 14 })}
  ${tx(130, 122, "11 : 4 = 2, resto 3", { fs: 15, c: "var(--leaf)", fam: D })}${tx(130, 150, "11/4 = 2 y 3/4", { fs: 16, c: "var(--red)", fam: D })}`);

const sumar = pasos("Sumar y restar fracciones con distinto denominador reduciendo a común denominador con el mínimo común múltiplo", ["5/6 − 3/4 + 1/3", "m.c.m.(6, 4, 3) = 12", "10/12 − 9/12 + 4/12", "(10 − 9 + 4)/12 = 5/12", "¿Se puede simplificar? No"], "Suma y resta");

const producto = lienzo("Un rectángulo dividido en tercios y en séptimos: dos tercios de cinco séptimos son diez veintiunavos", `
  ${[...Array(21)].map((_, i) => { const c = i % 7, f = Math.floor(i / 7); const on = c < 5 && f < 2; const half = c < 5; return `<rect x="${40 + c * 26}" y="${18 + f * 34}" width="26" height="34" fill="${on ? "var(--pen)" : half ? "var(--pen)" : "var(--card)"}" fill-opacity="${on ? 0.75 : half ? 0.15 : 1}" stroke="var(--ink)" stroke-width="1.2"/>`; }).join("")}
  ${tx(130, 140, "2/3 · 5/7 = 10/21", { fs: 16, c: "var(--pen)", fam: D })}${tx(130, 164, "10 casillas de 21", { fs: 12, c: "var(--muted)" })}`);

const dividir = formula("Dividir fracciones: multiplicar por la inversa de la segunda", "a/b : c/d = a·d / b·c", ["Productos cruzados", "3/4 : 5/2 = 6/20 = 3/10", "Inversa de c/d: d/c (su producto es 1)"]);

const jerarquia = pasos("Jerarquía de las operaciones con fracciones", ["Paréntesis y corchetes (de dentro afuera)", "Potencias y raíces", "Multiplicaciones y divisiones (izq. → der.)", "Sumas y restas (izq. → der.)", "Simplificar el resultado"], "Orden de las operaciones");

const potencia = formula("Potencia de una fracción y exponente negativo", "(a/b)⁻ⁿ = (b/a)ⁿ", ["Se elevan numerador y denominador", "(2/3)³ = 8/27", "(2/3)⁻² = (3/2)² = 9/4"], "var(--red)");

const decimales = comparar("Una fracción irreducible da decimal exacto si el denominador solo tiene los factores dos y cinco; si no, periódico", [
  ["Exacto", ["7/20 = 0,35", "20 = 2²·5", "solo 2 y 5"], "var(--leaf)"],
  ["Periódico", ["5/6 = 0,83̂", "6 = 2·3", "aparece el 3"], "var(--red)"],
], "¿Qué decimal sale?");

const sueldo = lienzo("Barra del sueldo: un tercio para alquiler, un sexto para comida y la mitad restante", `
  <rect x="20" y="50" width="73" height="40" fill="var(--red)" fill-opacity=".8"/><rect x="93" y="50" width="37" height="40" fill="var(--sun)"/><rect x="130" y="50" width="110" height="40" fill="var(--leaf)" fill-opacity=".7"/>
  <rect x="20" y="50" width="220" height="40" fill="none" stroke="var(--ink)" stroke-width="2"/>
  ${rot([[130, 34, "sueldo = 1", "var(--pen)"], [56, 112, "alquiler 1/3", "var(--red)"], [112, 132, "comida 1/6"], [185, 112, "queda 1/2", "var(--leaf)"]])}
  ${tx(130, 160, "1/4 de lo que queda (2/3) = 1/6", { fs: 12, c: "var(--muted)" })}`);

const total = lienzo("Si tres quintos de un depósito son 45 litros, un quinto son 15 litros y el total 75 litros", `
  ${barra(20, 46, 220, 5, 3, "var(--inf)", 32)}
  ${tx(130, 30, "3/5 del depósito = 45 L", { fs: 13, c: "var(--muted)" })}
  ${[0, 1, 2, 3, 4].map((i) => tx(42 + i * 44, 67, "15", { fs: 12, c: i < 3 ? "#fff" : "var(--ink)" })).join("")}
  ${tx(130, 108, "1/5 = 45 : 3 = 15 L", { fs: 14, c: "var(--leaf)", fam: D })}${tx(130, 136, "total = 5 · 15 = 75 L", { fs: 15, c: "var(--red)", fam: D })}
  ${tx(130, 162, "dividir entre el numerador, multiplicar por el denominador", { fs: 11, w: 400 })}`);

const tipos = cajas("Cuatro tipos de problemas con fracciones", [
  ["Fracción de", ["un número:", "3/5 de 40 = 24"]], ["Total", ["si 3/5 son 24,", "total = 40"]],
  ["Fracción de", ["fracción:", "1/4 de 2/3"]], ["Partes", ["sumar partes,", "1 − suma = resto"]],
], "Identificar el tipo");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Números racionales y fracciones",
  minutos: 110,
  objetivos: [
    "Reconocer los números racionales y situarlos en la recta",
    "Simplificar, comparar y ordenar fracciones con criterio",
    "Operar con fracciones respetando la jerarquía de las operaciones",
    "Calcular potencias de fracciones, también con exponente negativo",
    "Relacionar fracciones y decimales",
    "Resolver problemas reales de partes, totales y fracciones de fracciones",
  ],
  claves: ["fracción", "número racional", "equivalente", "irreducible", "m.c.m.", "inversa", "número mixto", "jerarquía"],
  pregunta: {
    texto: "Una receta para 4 personas lleva 3/4 de taza de azúcar. Hoy cocinas para 6. ¿Cuánto azúcar necesitas?",
    respuesta: "Tienes que multiplicar por 6/4: <mark>3/4 · 6/4 = 18/16 = 9/8</mark> de taza, es decir, una taza y un octavo. Las fracciones están en las recetas, en las rebajas, en la música y en los mapas.",
  },
  lectura: {
    titulo: "El ojo de Horus y las fracciones de los escribas",
    html: `<p>Hace más de 3.500 años, los escribas egipcios ya repartían panes, cerveza y tierras con fracciones. Pero tenían una costumbre curiosa: casi solo usaban fracciones con numerador 1, como 1/2, 1/3 o 1/7. Para escribir 3/4 ponían 1/2 + 1/4. El papiro Rhind, que hoy se guarda en el Museo Británico, contiene una tabla enorme para expresar 2/n como suma de fracciones unitarias distintas.</p><p>Una leyenda cuenta que el ojo del dios Horus se rompió en seis trozos, y que cada trozo representaba una fracción: 1/2, 1/4, 1/8, 1/16, 1/32 y 1/64. Si las sumas, obtienes 63/64: falta un pedacito, que según el mito completaba la magia del dios Thot.</p><p>Hoy las fracciones siguen en todas partes: en la música (una negra dura 1/4 del compás), en las recetas, en las escalas de los mapas (1/50.000), en las rebajas y en las apuestas deportivas. Los números racionales son el idioma de los repartos, y aprender a manejarlos con soltura te ahorrará muchos errores de cálculo en la vida diaria. En este tema vas a repasar lo que ya sabes y a llegar más lejos: potencias con exponente negativo, operaciones combinadas largas y problemas en los que el total es la incógnita.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Qué es un número racional</h3><p>Un <b>número racional</b> es todo número que se puede escribir como una fracción <mark>a/b</mark>, donde a y b son números enteros y b es distinto de 0. El número de arriba es el <b>numerador</b> e indica cuántas partes se toman; el de abajo es el <b>denominador</b> e indica en cuántas partes iguales se divide la unidad. El conjunto de los números racionales se representa con la letra <b>ℚ</b> (de «quotient», cociente).</p><p>Todos los enteros son racionales, porque se pueden escribir con denominador 1: −5 = −5/1. Por eso los conjuntos están unos dentro de otros: ℕ ⊂ ℤ ⊂ ℚ. También son racionales los decimales exactos (0,25 = 1/4) y los periódicos (0,333… = 1/3). Lo que no es racional es un decimal con infinitas cifras <b>sin periodo</b>, como π o √2: son los números irracionales, que estudiarás a fondo en 4º.</p><p>Un detalle sobre el signo: −3/4, (−3)/4 y 3/(−4) son el mismo número. Lo habitual es escribir el signo delante de la fracción o en el numerador, y dejar el denominador positivo.</p>`, svg: conjuntos },
    { html: `<h3>1.2 Fracciones equivalentes</h3><p>Dos fracciones son <b>equivalentes</b> si representan la misma cantidad, aunque estén escritas con números distintos. Se comprueba con los <mark>productos cruzados</mark>: a/b = c/d si y solo si a · d = b · c. Por ejemplo, 2/3 = 8/12 porque 2 · 12 = 24 y 3 · 8 = 24.</p><p>Si multiplicas o divides el numerador y el denominador por el mismo número (distinto de 0), obtienes una fracción equivalente. Multiplicando se <b>amplifica</b>: 3/5 = 6/10 = 9/15. Dividiendo se <b>simplifica</b>: 18/24 = 9/12 = 3/4.</p><p>Cada número racional tiene infinitas fracciones equivalentes, y todas ellas representan el mismo punto de la recta. Por eso decimos que un número racional es, en realidad, toda una familia de fracciones equivalentes, y elegimos la más sencilla para nombrarlo.</p>`, svg: equivalentes },
    { html: `<h3>1.3 La fracción irreducible</h3><p>Una fracción es <b>irreducible</b> cuando ya no se puede simplificar más: su numerador y su denominador son <b>primos entre sí</b> (su único divisor común es 1). La forma más rápida de llegar a ella es dividir los dos términos entre su <mark>máximo común divisor</mark>.</p><p>Para 36/48: 36 = 2² · 3² y 48 = 2⁴ · 3. Los factores comunes con el menor exponente son 2² · 3 = 12. Entonces 36/48 = (36 : 12)/(48 : 12) = 3/4. También se puede simplificar en varios pasos (entre 2, luego entre 2, luego entre 3), pero hay que llegar hasta el final.</p><p>Trabajar con fracciones irreducibles tiene ventajas: los números son más pequeños, los cálculos son más cómodos y es más fácil comparar resultados. En un examen, el resultado final de una operación con fracciones se debe dar siempre <b>simplificado</b>.</p>`, svg: simplificar },
    { html: `<h3>1.4 Comparar y ordenar fracciones</h3><p>Hay tres situaciones. Si tienen el <b>mismo denominador</b>, es mayor la de mayor numerador: 5/9 &gt; 2/9. Si tienen el <b>mismo numerador</b>, es mayor la de menor denominador, porque las partes son más grandes: 3/4 &gt; 3/7. En los demás casos, se reducen a <mark>común denominador</mark> usando el m.c.m. de los denominadores y se comparan los numeradores.</p><p>Ejemplo: ordenar 5/6, 3/4 y 7/9. El m.c.m.(6, 4, 9) = 36, y las fracciones quedan 30/36, 27/36 y 28/36. Por tanto, 3/4 &lt; 7/9 &lt; 5/6.</p><p>Con números negativos, el orden se invierte: −1/2 &gt; −3/4 porque −1/2 está más cerca del 0. Un truco rápido para dos fracciones positivas es comparar los productos cruzados: a/b &gt; c/d si a · d &gt; b · c. También puedes pasar a decimal con la calculadora, aunque en los ejercicios se pide justificar el orden.</p>`, svg: ordenar, video: { id: "01RsVf7BTXA", titulo: "Ordenar fracciones de menor a mayor", canal: "Daniel Carreón", vistas: 1832451, megusta: 0 } },
    { html: `<h3>1.5 Representar fracciones en la recta</h3><p>Todo número racional ocupa un punto concreto de la recta numérica. Para situar 7/4 se pasa primero a número mixto, 7/4 = 1 + 3/4, para saber entre qué enteros está: entre 1 y 2. Después se divide ese tramo en <b>4 partes iguales</b> y se cuentan 3 desde el 1.</p><p>Si la fracción es negativa, se hace lo mismo hacia la izquierda: −5/3 = −1 − 2/3 está entre −2 y −1. Para dividir un segmento en partes exactamente iguales con regla y compás se usa el <b>teorema de Tales</b>, que verás en geometría.</p><p>Una propiedad sorprendente de los racionales es que son <b>densos</b>: entre dos racionales distintos siempre hay otro. Por ejemplo, entre 1/3 y 1/2 está su media, (1/3 + 1/2) : 2 = 5/12. Y entre 1/3 y 5/12 hay otro, y así sin fin. Por eso no tiene sentido hablar del «siguiente» racional, como sí ocurre con los enteros.</p>`, svg: representar },
    { html: `<h3>1.6 Fracciones propias, impropias y números mixtos</h3><p>Una fracción es <b>propia</b> si el numerador es menor que el denominador (vale menos que 1, como 3/5) e <b>impropia</b> si es mayor (vale más que 1, como 11/4). Una fracción impropia se puede escribir como <mark>número mixto</mark>: un entero más una fracción propia.</p><p>Para pasar 11/4 a mixto se divide 11 entre 4: cociente 2 y resto 3, así que 11/4 = 2 y 3/4. Al revés, para pasar 3 y 2/5 a fracción: 3 · 5 + 2 = 17, luego 17/5.</p><p>Los números mixtos son cómodos para medir (2 tazas y media, 3 horas y cuarto), pero para operar conviene siempre pasarlos antes a fracción impropia. Un error frecuente es multiplicar 2 y 1/2 por 2 y 1/2 como si fuera 4 y 1/4: en realidad, 5/2 · 5/2 = 25/4 = 6 y 1/4.</p>`, svg: mixtos },
    { html: `<h3>2.1 Sumar y restar fracciones</h3><p>Con el <b>mismo denominador</b>, se suman o restan los numeradores y se deja el denominador: 2/7 + 3/7 = 5/7. Con <b>distinto denominador</b>, primero se buscan fracciones equivalentes con un denominador común, que conviene que sea el <mark>m.c.m.</mark> de los denominadores para trabajar con números pequeños.</p>${tabla(["Paso", "5/6 − 3/4 + 1/3"], [["1. m.c.m.(6, 4, 3)", "12"], ["2. Equivalentes", "10/12 − 9/12 + 4/12"], ["3. Operar numeradores", "(10 − 9 + 4)/12"], ["4. Resultado", "5/12"]])}<p>Para sumar un entero y una fracción, se escribe el entero con el mismo denominador: 2 + 3/5 = 10/5 + 3/5 = 13/5. Y cuidado con los signos: −1/4 − 2/3 = −3/12 − 8/12 = −11/12.</p>`, svg: sumar },
    { html: `<h3>2.2 Multiplicar fracciones y fracción de una cantidad</h3><p>Para <b>multiplicar</b> fracciones se multiplican los numeradores entre sí y los denominadores entre sí: 2/3 · 5/7 = 10/21. El dibujo lo explica: tomar 2/3 de 5/7 de un rectángulo es quedarse con 10 casillas de 21.</p><p>Conviene <b>simplificar antes de multiplicar</b>, tachando factores comunes entre cualquier numerador y cualquier denominador: 4/9 · 3/8 = (4 · 3)/(9 · 8); el 4 y el 8 se simplifican a 1 y 2, el 3 y el 9 a 1 y 3, y queda 1/6. Así se evitan números enormes.</p><p>Calcular la <b>fracción de una cantidad</b> es multiplicar: 3/5 de 40 € = 3/5 · 40 = 120/5 = 24 €. En la práctica se divide entre el denominador y se multiplica por el numerador: 40 : 5 = 8, y 8 · 3 = 24. Del mismo modo, «la mitad de un tercio» es 1/2 · 1/3 = 1/6.</p>`, svg: producto },
    { html: `<h3>2.3 Dividir fracciones: la inversa</h3><p>La <b>inversa</b> de una fracción a/b (distinta de 0) es b/a, porque su producto es 1: 3/4 · 4/3 = 12/12 = 1. El 0 es el único racional que no tiene inversa.</p><p>Dividir entre una fracción es lo mismo que <mark>multiplicar por su inversa</mark>: 3/4 : 5/2 = 3/4 · 2/5 = 6/20 = 3/10. Por eso a menudo se dice que se multiplican «en cruz»: el numerador de la primera por el denominador de la segunda, y el denominador de la primera por el numerador de la segunda.</p><p>¿Por qué funciona? Dividir es preguntar «cuántas veces cabe». ¿Cuántas veces cabe 1/4 en 3? Cabe 12 veces, y 3 : 1/4 = 3 · 4 = 12. Por eso, dividir entre una fracción menor que 1 da un resultado <b>mayor</b> que el dividendo, algo que choca con la intuición de «dividir hace más pequeño».</p>`, svg: dividir },
    { html: `<h3>2.4 Operaciones combinadas</h3><p>Cuando hay varias operaciones, se sigue la misma <b>jerarquía</b> que con los números enteros: primero paréntesis y corchetes (de dentro hacia fuera), después potencias y raíces, luego multiplicaciones y divisiones de izquierda a derecha y, por último, sumas y restas.</p><p>Ejemplo: 1/2 + 3/4 · (2/3 − 1/6). Paréntesis: 2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2. Producto: 3/4 · 1/2 = 3/8. Suma: 1/2 + 3/8 = 4/8 + 3/8 = <mark>7/8</mark>. Si hubiéramos sumado primero 1/2 + 3/4, el resultado sería distinto y erróneo.</p><p>Consejos prácticos: escribe cada paso en una línea nueva, copia sin cambios lo que aún no operas, simplifica en cuanto puedas y vigila los signos menos delante de un paréntesis, que cambian el signo de todo lo que hay dentro. Con fracciones apiladas («fracciones de fracciones») se resuelven por separado el numerador grande y el denominador grande, y al final se dividen.</p>`, svg: jerarquia, video: { id: "LPU8VKaCZ8U", titulo: "Operaciones combinadas con fracciones: todas las operaciones", canal: "Susi Profe", vistas: 232788, megusta: 0 } },
    { html: `<h3>2.5 Potencias de fracciones</h3><p>Para elevar una fracción a una potencia se elevan el numerador y el denominador: <mark>(a/b)ⁿ = aⁿ/bⁿ</mark>. Así, (2/3)³ = 8/27. Si la fracción es negativa, el signo depende del exponente: (−1/2)² = 1/4, pero (−1/2)³ = −1/8.</p><p>Un <b>exponente negativo</b> significa «la inversa»: (a/b)⁻ⁿ = (b/a)ⁿ. Por ejemplo, (2/3)⁻² = (3/2)² = 9/4, y 5⁻¹ = 1/5. Y cualquier número distinto de 0 elevado a 0 vale 1: (7/9)⁰ = 1.</p><p>Las propiedades de las potencias siguen valiendo con fracciones: (1/2)³ · (1/2)² = (1/2)⁵ = 1/32, y [(2/5)²]³ = (2/5)⁶. Estas reglas se estudian con más detalle en el tema de potencias y raíces, pero conviene que las uses ya con soltura en las operaciones combinadas.</p>`, svg: potencia },
    { html: `<h3>3.1 Fracciones y decimales</h3><p>Toda fracción se puede convertir en un número decimal dividiendo el numerador entre el denominador. Si la fracción irreducible tiene un denominador cuyos únicos factores primos son <b>2 y 5</b>, el decimal es <b>exacto</b>: 7/20 = 0,35, porque 20 = 2² · 5. Si el denominador tiene algún otro factor primo, el decimal es <b>periódico</b>: 5/6 = 0,8333…, porque 6 = 2 · 3.</p><p>Un periódico es <b>puro</b> si el periodo empieza justo después de la coma (1/3 = 0,333…) y <b>mixto</b> si antes hay cifras que no se repiten (5/6 = 0,8333…, el 8 es el anteperiodo). Al revés, todo decimal exacto o periódico se puede escribir como fracción: es su <b>fracción generatriz</b>, que se estudia en el tema siguiente.</p><p>Por tanto, los números racionales son exactamente los que tienen expresión decimal exacta o periódica. Saberlo te permite predecir, sin hacer la división, cómo será el decimal de una fracción.</p>`, svg: decimales },
    { html: `<h3>3.2 Problemas de fracción de una fracción</h3><p>Muchos problemas reales encadenan fracciones. «Gasto 1/3 del sueldo en el alquiler y 1/4 de lo que me queda en comida. ¿Qué fracción del sueldo me queda?» La clave es darse cuenta de que el 1/4 no es del sueldo, sino <b>de lo que queda</b>.</p><p>Tras el alquiler queda 1 − 1/3 = 2/3 del sueldo. La comida es <mark>1/4 de 2/3 = 2/12 = 1/6</mark> del sueldo. En total se ha gastado 1/3 + 1/6 = 2/6 + 1/6 = 1/2, así que queda la otra mitad. Si el sueldo es de 1.500 €, quedan 750 €.</p><p>Un buen método es tomar el total como la unidad (1) y dibujar una barra, como en la figura: se ve qué parte es de qué y se evita el error clásico de sumar 1/3 + 1/4 como si las dos fracciones se refiriesen a la misma cantidad.</p>`, svg: sueldo },
    { html: `<h3>3.3 Problemas en los que se busca el total</h3><p>A veces se conoce una parte y se pregunta por el total. «Los 3/5 de un depósito son 45 litros. ¿Cuál es su capacidad?» Si 3 quintos son 45 L, un quinto son 45 : 3 = 15 L, y los 5 quintos, 15 · 5 = <mark>75 L</mark>. Es la operación inversa de calcular la fracción de un número: se divide entre el numerador y se multiplica por el denominador, que equivale a dividir entre la fracción (45 : 3/5 = 75).</p><p>Otro caso típico es el de las partes: «En una clase, 1/4 viene en bus, 2/5 andando y el resto, 7 alumnos, en bici». Las partes conocidas suman 1/4 + 2/5 = 13/20, así que la bici es 7/20 de la clase. Si 7/20 son 7 alumnos, 1/20 es 1 alumno y la clase tiene 20.</p><p>Antes de calcular, pregúntate siempre de qué cantidad es cada fracción y qué tipo de problema tienes delante. Al final, comprueba que el resultado tiene sentido.</p>`, svg: total },
    { html: `<h3>3.4 Estrategia general para problemas con fracciones</h3><p>Casi todos los problemas con fracciones se reducen a cuatro tipos. <b>Fracción de un número</b>: se multiplica (3/5 de 40 = 24). <b>Total a partir de una parte</b>: se divide entre la fracción (si 3/5 son 24, el total es 40). <b>Fracción de una fracción</b>: se multiplican las fracciones (1/4 de 2/3 = 1/6). <b>Partes de un todo</b>: se suman las partes conocidas y se resta de 1 para hallar la que falta.</p><p>Un método en cinco pasos ayuda mucho: 1) leer y subrayar los datos; 2) decidir qué es la unidad (el total); 3) hacer un dibujo o una barra; 4) operar indicando qué significa cada número; 5) comprobar que la respuesta es razonable y escribirla con una frase y sus unidades.</p><p>Las fracciones también aparecen ocultas en los porcentajes (25 % = 1/4) y en las escalas (1 : 50.000), así que lo que aprendes aquí te servirá en proporcionalidad y en geometría.</p>`, svg: tipos },
  ],
  ejemplos: [
    { enunciado: "Simplifica hasta la fracción irreducible: 84/126.", pasos: ["84 = 2² · 3 · 7; 126 = 2 · 3² · 7.", "m.c.d. = 2 · 3 · 7 = 42.", "84 : 42 = 2; 126 : 42 = 3."], resultado: "84/126 = 2/3." },
    { enunciado: "Ordena de menor a mayor: 3/8, 5/12, −1/3, 1/4.", pasos: ["La negativa es la menor: −1/3.", "m.c.m.(8, 12, 4) = 24: 9/24, 10/24, 6/24.", "6/24 < 9/24 < 10/24."], resultado: "−1/3 < 1/4 < 3/8 < 5/12." },
    { enunciado: "Calcula: 2/3 − 1/2 · (3/5 + 1/10).", pasos: ["Paréntesis: 6/10 + 1/10 = 7/10.", "Producto: 1/2 · 7/10 = 7/20.", "Resta: 2/3 − 7/20 = 40/60 − 21/60 = 19/60."], resultado: "19/60." },
    { enunciado: "Calcula: (3/4)⁻² · (1/2)³.", pasos: ["(3/4)⁻² = (4/3)² = 16/9.", "(1/2)³ = 1/8.", "16/9 · 1/8 = 16/72 = 2/9."], resultado: "2/9." },
    { enunciado: "Ana gasta 2/5 de su paga en el cine y 1/3 del resto en un libro. Le quedan 12 €. ¿Cuánto era la paga?", pasos: ["Tras el cine queda 3/5.", "Libro: 1/3 de 3/5 = 1/5. Gastado: 2/5 + 1/5 = 3/5.", "Queda 2/5 = 12 € → 1/5 = 6 €.", "Paga = 5 · 6 = 30 €."], resultado: "La paga era de 30 €." },
    { enunciado: "¿Cuántas botellas de 3/4 L se llenan con 15 L?", pasos: ["Hay que ver cuántas veces cabe 3/4 en 15.", "15 : 3/4 = 15 · 4/3 = 60/3 = 20."], resultado: "20 botellas." },
  ],
  errores: [
    "Sumar numeradores y denominadores por separado: 1/2 + 1/3 ≠ 2/5 (es 5/6).",
    "Simplificar sumandos en vez de factores: (2 + 3)/2 no es 3.",
    "Saltarse la jerarquía y sumar antes de multiplicar.",
    "Confundir el exponente negativo con un resultado negativo: 2⁻² = 1/4, no −4.",
    "En problemas encadenados, calcular la segunda fracción sobre el total y no sobre lo que queda.",
    "Dejar el resultado sin simplificar o con el signo menos en el denominador.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe tres fracciones equivalentes a 4/6 y di cuál es la irreducible.", sol: "Por ejemplo 2/3, 8/12 y 12/18. La irreducible es 2/3 (se divide entre el m.c.d., 2)." },
    { nivel: "básico", q: "Comprueba si son equivalentes: a) 6/15 y 10/25 b) 3/7 y 9/20.", sol: "a) 6 · 25 = 150 y 15 · 10 = 150: sí. b) 3 · 20 = 60 y 7 · 9 = 63: no." },
    { nivel: "básico", q: "Simplifica: a) 45/60 b) 72/96 c) −28/42.", sol: "a) m.c.d. 15 → 3/4. b) m.c.d. 24 → 3/4. c) m.c.d. 14 → −2/3." },
    { nivel: "básico", q: "Ordena de menor a mayor: 2/3, 3/5, 7/10.", sol: "m.c.m. 30: 20/30, 18/30, 21/30. Orden: 3/5 < 2/3 < 7/10." },
    { nivel: "básico", q: "Pasa a número mixto 17/5 y a fracción 2 y 3/8.", sol: "17 : 5 = 3 resto 2 → 3 y 2/5. 2 · 8 + 3 = 19 → 19/8." },
    { nivel: "básico", q: "Calcula: 3/4 + 5/6 − 1/2.", sol: "m.c.m. 12: 9/12 + 10/12 − 6/12 = 13/12." },
    { nivel: "básico", q: "Calcula: 5/8 · 4/15.", sol: "Simplificando antes: (5 · 4)/(8 · 15) = 1/(2 · 3) = 1/6." },
    { nivel: "básico", q: "Calcula: 7/9 : 14/3.", sol: "7/9 · 3/14 = 21/126 = 1/6." },
    { nivel: "básico", q: "Calcula 2/7 de 63 y 5/4 de 20.", sol: "63 : 7 · 2 = 18. 20 : 4 · 5 = 25." },
    { nivel: "básico", q: "Calcula: (2/5)², (−1/3)³ y (3/4)⁰.", sol: "4/25; −1/27; 1." },
    { nivel: "básico", q: "Sin dividir, di si el decimal será exacto o periódico: 3/8, 7/12, 9/40, 2/15.", sol: "3/8 (8 = 2³) exacto; 7/12 (12 = 2²·3) periódico; 9/40 (40 = 2³·5) exacto; 2/15 (15 = 3·5) periódico." },
    { nivel: "básico", q: "Representa en la recta 5/3 y −3/4.", sol: "5/3 = 1 y 2/3: entre 1 y 2, se divide en 3 partes y se cuentan 2. −3/4: entre −1 y 0, en 4 partes, 3 hacia la izquierda desde 0." },
    { nivel: "medio", q: "Calcula: 1/2 − 2/3 · (1/4 + 5/6).", sol: "Paréntesis: 3/12 + 10/12 = 13/12. Producto: 2/3 · 13/12 = 26/36 = 13/18. Resta: 9/18 − 13/18 = −4/18 = −2/9." },
    { nivel: "medio", q: "Calcula: (3/5 − 1)·(2 + 1/2) : 3/4.", sol: "3/5 − 1 = −2/5; 2 + 1/2 = 5/2; −2/5 · 5/2 = −1; −1 : 3/4 = −4/3." },
    { nivel: "medio", q: "Calcula: (2/3)⁻² − (1/2)⁻¹.", sol: "(3/2)² = 9/4; (1/2)⁻¹ = 2. 9/4 − 8/4 = 1/4." },
    { nivel: "medio", q: "Calcula: [1 − (1/2)²] : (1 + 1/2).", sol: "1 − 1/4 = 3/4; 1 + 1/2 = 3/2; 3/4 : 3/2 = 6/12 = 1/2." },
    { nivel: "medio", q: "Halla una fracción entre 3/7 y 4/7, y otra entre 1/3 y 1/2.", sol: "Media de 3/7 y 4/7: 7/14 = 1/2. Media de 1/3 y 1/2: 5/12. (Hay infinitas posibles.)" },
    { nivel: "medio", q: "Halla x para que x/12 = 15/20.", sol: "Productos cruzados: 20x = 180 → x = 9." },
    { nivel: "medio", q: "Un depósito está a 3/8 de su capacidad. Se añaden 150 L y queda a 5/8. ¿Cuál es su capacidad?", sol: "150 L son 5/8 − 3/8 = 2/8 = 1/4 del depósito. Capacidad = 150 · 4 = 600 L." },
    { nivel: "medio", q: "De una pizza, Luis come 1/3 y Marta 2/5 de lo que queda. ¿Qué fracción queda?", sol: "Tras Luis quedan 2/3. Marta: 2/5 de 2/3 = 4/15. Comido: 1/3 + 4/15 = 9/15 = 3/5. Quedan 2/5." },
    { nivel: "medio", q: "En una encuesta, 3/8 prefieren fútbol, 1/4 baloncesto y el resto, 30 personas, otros deportes. ¿Cuántas personas respondieron?", sol: "3/8 + 2/8 = 5/8; el resto es 3/8 = 30 → 1/8 = 10 → total 80 personas." },
    { nivel: "medio", q: "¿Cuántos vasos de 1/5 L se llenan con 3 botellas de 1,5 L?", sol: "Total 4,5 L = 9/2 L. 9/2 : 1/5 = 45/2 = 22,5. Se llenan 22 vasos completos." },
    { nivel: "medio", q: "Una receta para 6 personas usa 2/3 de kilo de harina. ¿Cuánta harina hace falta para 9 personas?", sol: "Para una persona: 2/3 : 6 = 1/9 kg. Para 9: 9/9 = 1 kg." },
    { nivel: "medio", q: "Un ciclista recorre 2/7 de una etapa por la mañana y 3/5 del resto por la tarde. Le faltan 40 km. ¿Cuánto mide la etapa?", sol: "Resto tras la mañana: 5/7. Tarde: 3/5 · 5/7 = 3/7. Recorrido: 5/7; falta 2/7 = 40 km → 1/7 = 20 km → 140 km." },
    { nivel: "medio", q: "Calcula y simplifica: (5/6 − 1/3)² · (−2)³.", sol: "5/6 − 2/6 = 1/2; (1/2)² = 1/4; (−2)³ = −8; 1/4 · (−8) = −2." },
    { nivel: "medio", q: "Escribe como suma de fracciones unitarias distintas (como los egipcios): 3/4 y 5/6.", sol: "3/4 = 1/2 + 1/4. 5/6 = 1/2 + 1/3." },
    { nivel: "avanzado", q: "Calcula: (1/2 + 1/3) / (1/2 − 1/3).", sol: "Numerador: 5/6. Denominador: 1/6. (5/6) : (1/6) = 5." },
    { nivel: "avanzado", q: "Calcula: 2 − 1/(1 + 1/(1 + 1/2)).", sol: "1 + 1/2 = 3/2; 1/(3/2) = 2/3; 1 + 2/3 = 5/3; 1/(5/3) = 3/5; 2 − 3/5 = 7/5." },
    { nivel: "avanzado", q: "Calcula: (2/3)⁻³ · (3/2)⁻¹ · (4/9)².", sol: "(3/2)³ · (2/3) · (4/9)² = 27/8 · 2/3 · 16/81 = (27 · 2 · 16)/(8 · 3 · 81) = 864/1944 = 4/9." },
    { nivel: "avanzado", q: "Un grifo llena un depósito en 6 h y otro en 3 h. ¿Cuánto tardan juntos?", sol: "En una hora llenan 1/6 + 1/3 = 1/2 del depósito. Juntos tardan 2 horas." },
    { nivel: "avanzado", q: "Una herencia se reparte así: el hijo mayor recibe 1/3, el mediano 2/5 del resto y el pequeño 1/2 de lo que queda. Sobran 12.000 € para una ONG. ¿A cuánto ascendía?", sol: "Tras el mayor: 2/3. Mediano: 2/5 · 2/3 = 4/15; queda 2/3 − 4/15 = 6/15 = 2/5. Pequeño: 1/2 · 2/5 = 1/5; queda 1/5 = 12.000 €. Herencia: 60.000 €." },
    { nivel: "avanzado", q: "Demuestra que si a/b < c/d (con b, d > 0), entonces la fracción (a + c)/(b + d) está entre las dos. Compruébalo con 1/3 y 1/2.", sol: "Con 1/3 y 1/2: (1 + 1)/(3 + 2) = 2/5 = 0,4, que está entre 0,33 y 0,5. En general, a·d < b·c; entonces a(b + d) = ab + ad < ab + bc = b(a + c), luego a/b < (a + c)/(b + d), y del mismo modo con c/d." },
    { nivel: "avanzado", q: "¿Qué fracción de una hora son 25 minutos? ¿Y qué fracción de un día son 2 h 40 min? Simplifica.", sol: "25/60 = 5/12 h. 2 h 40 min = 160 min; un día = 1.440 min; 160/1440 = 1/9." },
    { nivel: "avanzado", q: "En un compás de 3/4, una negra vale 1/4. ¿Cuántas corcheas (1/8) y semicorcheas (1/16) caben en un compás? Escribe un compás con 1 negra con puntillo (3/8) y completa con corcheas.", sol: "3/4 : 1/8 = 6 corcheas; 3/4 : 1/16 = 12 semicorcheas. 3/4 − 3/8 = 3/8 = 3 corcheas." },
    { nivel: "avanzado", q: "Si a un número le sumo sus 2/5 y le resto su mitad obtengo 18. ¿Qué número es?", sol: "x + 2x/5 − x/2 = 18 → (10x + 4x − 5x)/10 = 18 → 9x/10 = 18 → x = 20." },
    { nivel: "avanzado", q: "Explica por qué entre dos números racionales distintos siempre hay infinitos racionales.", sol: "Su media (a + b)/2 es racional y está entre los dos. Repitiendo con la media y uno de los extremos se obtiene otro, y así indefinidamente: nunca se agotan." },
  ],
  quiz: [
    { q: "¿Cuál de estos números NO es racional?", o: ["−7", "0,25", "0,333…", "π"], a: 3, e: "π tiene infinitas cifras sin periodo." },
    { q: "¿Son equivalentes 4/10 y 6/15?", o: ["Sí", "No", "Solo si se simplifican", "Depende del signo"], a: 0, e: "4 · 15 = 60 = 10 · 6." },
    { q: "La fracción irreducible de 48/64 es…", o: ["6/8", "12/16", "3/4", "24/32"], a: 2, e: "m.c.d. = 16." },
    { q: "¿Cuál es mayor?", o: ["3/7", "3/8", "3/9", "3/10"], a: 0, e: "Mismo numerador: menor denominador, mayor fracción." },
    { q: "−1/2 comparado con −2/3:", o: ["−1/2 < −2/3", "−1/2 > −2/3", "son iguales", "no se pueden comparar"], a: 1, e: "−0,5 está más cerca de 0 que −0,67." },
    { q: "13/4 como número mixto:", o: ["3 y 1/4", "4 y 1/3", "1 y 3/4", "3 y 4/1"], a: 0, e: "13 : 4 = 3, resto 1." },
    { q: "1/2 + 1/3 =", o: ["2/5", "5/6", "1/6", "2/6"], a: 1, e: "3/6 + 2/6." },
    { q: "2/3 · 9/4 =", o: ["18/7", "3/2", "11/7", "8/27"], a: 1, e: "18/12 = 3/2." },
    { q: "3/5 : 6/10 =", o: ["1", "18/50", "9/25", "2"], a: 0, e: "3/5 · 10/6 = 30/30." },
    { q: "La inversa de −2/7 es…", o: ["2/7", "−7/2", "7/2", "−2/7"], a: 1, e: "Se intercambian los términos y se mantiene el signo." },
    { q: "(2/3)⁻² =", o: ["−4/9", "4/9", "9/4", "−9/4"], a: 2, e: "Exponente negativo: la inversa al cuadrado." },
    { q: "(−1/2)³ =", o: ["1/8", "−1/8", "−1/6", "3/2"], a: 1, e: "Exponente impar: conserva el signo." },
    { q: "1 + 2 · 1/4 =", o: ["3/4", "3/2", "1/2", "5/4"], a: 1, e: "Primero el producto: 1 + 1/2." },
    { q: "¿Qué decimal da 7/40?", o: ["exacto", "periódico puro", "periódico mixto", "irracional"], a: 0, e: "40 = 2³ · 5." },
    { q: "¿Y 5/12?", o: ["exacto", "periódico puro", "periódico mixto", "entero"], a: 2, e: "12 = 2² · 3; tiene 2 (anteperiodo) y 3 (periodo)." },
    { q: "3/4 de 60 son…", o: ["45", "40", "80", "15"], a: 0, e: "60 : 4 · 3." },
    { q: "Si 2/3 de una cantidad son 40, la cantidad es…", o: ["26,7", "60", "80", "120"], a: 1, e: "40 : 2 · 3." },
    { q: "Gasto 1/2 y luego 1/3 de lo que queda. ¿Qué fracción he gastado?", o: ["5/6", "2/3", "1/6", "1/3"], a: 1, e: "1/2 + 1/3 · 1/2 = 1/2 + 1/6 = 2/3." },
    { q: "Entre 1/4 y 1/2 hay…", o: ["ninguna fracción", "solo 1/3", "infinitas fracciones", "dos fracciones"], a: 2, e: "Los racionales son densos." },
    { q: "¿Cuántas veces cabe 1/3 en 2?", o: ["2/3", "6", "3", "5"], a: 1, e: "2 : 1/3 = 6." },
  ],
  examen: [
    { q: "Simplifica 90/120:", o: ["3/4", "9/12", "2/3", "4/5"], a: 0, e: "m.c.d. = 30." },
    { q: "5/6 − 3/4 =", o: ["2/2", "1/12", "2/10", "1/6"], a: 1, e: "10/12 − 9/12." },
    { q: "4/5 : 2/15 =", o: ["8/75", "6", "2/3", "3/2"], a: 1, e: "4/5 · 15/2 = 60/10." },
    { q: "1/3 + 2/3 · 3/4 =", o: ["3/4", "5/6", "1", "7/12"], a: 1, e: "1/3 + 1/2 = 5/6." },
    { q: "(3/2)⁻¹ · (2/3)² =", o: ["8/27", "2/3", "4/9", "3/2"], a: 0, e: "2/3 · 4/9." },
    { q: "Si 3/8 de un camino son 15 km, el camino mide…", o: ["40 km", "45 km", "5,6 km", "24 km"], a: 0, e: "15 : 3 · 8." },
    { q: "Ordenadas de menor a mayor:", o: ["1/2, 2/5, 3/4", "2/5, 1/2, 3/4", "3/4, 1/2, 2/5", "1/2, 3/4, 2/5"], a: 1, e: "0,4 < 0,5 < 0,75." },
    { q: "¿Qué fracción da un decimal exacto?", o: ["1/6", "2/9", "3/25", "4/7"], a: 2, e: "25 = 5²." },
  ],
  feynman: ["Qué es un número racional y por qué los enteros también lo son", "Cómo se comparan y ordenan fracciones", "Por qué dividir entre una fracción es multiplicar por su inversa", "Cómo se resuelve un problema de fracción de lo que queda"],
  figura: {
    titulo: "Las operaciones con fracciones de un vistazo",
    svg: resumen("Resumen de las operaciones con fracciones", [
      ["Sumar y restar", "común denominador (m.c.m.) y operar numeradores", "var(--pen)"],
      ["Multiplicar", "numerador · numerador / denominador · denominador", "var(--leaf)"],
      ["Dividir", "multiplicar por la inversa: a/b · d/c", "var(--red)"],
      ["Potencia", "(a/b)ⁿ = aⁿ/bⁿ; exponente negativo → inversa", "var(--inf)"],
    ]),
  },
  video: { id: "kYyDc0XRUeg", titulo: "Introducción a los números racionales: fracciones positivas o negativas", canal: "Matemáticas profe Alex", vistas: 3118465, megusta: 0 },
  mapa: mapa("RACIONALES", "var(--pen)", [
    ["Fracciones", "equivalentes · irreducible", "var(--pen)"],
    ["Orden", "común denominador · recta", "var(--leaf)"],
    ["Operaciones", "+ − · : potencias · jerarquía", "var(--red)"],
    ["Problemas", "parte · total · resto", "var(--inf)"],
  ], 250),
  glosario: [
    ["Número racional", "Número que se puede escribir como a/b, con a y b enteros y b ≠ 0."],
    ["Numerador", "Término de arriba de una fracción: partes que se toman."],
    ["Denominador", "Término de abajo: partes iguales en que se divide la unidad."],
    ["Fracciones equivalentes", "Fracciones que representan la misma cantidad (productos cruzados iguales)."],
    ["Fracción irreducible", "Fracción que no se puede simplificar: sus términos son primos entre sí."],
    ["Amplificar", "Multiplicar numerador y denominador por el mismo número."],
    ["Simplificar", "Dividir numerador y denominador entre un divisor común."],
    ["Fracción propia", "Fracción menor que la unidad: numerador menor que denominador."],
    ["Fracción impropia", "Fracción mayor que la unidad."],
    ["Número mixto", "Entero más una fracción propia: 2 y 3/4."],
    ["Fracción inversa", "La que multiplicada por otra da 1: la inversa de a/b es b/a."],
    ["Jerarquía de operaciones", "Orden en que se hacen las operaciones: paréntesis, potencias, productos, sumas."],
    ["Densidad", "Propiedad de ℚ: entre dos racionales siempre hay otro."],
    ["Fracción unitaria", "Fracción con numerador 1, como 1/5."],
  ],
  situacion: {
    titulo: "La receta de la clase",
    reto: "La clase prepara un desayuno solidario para 75 personas. Partís de recetas familiares pensadas para 4 o 6 raciones y tenéis que adaptarlas, calcular la compra y el presupuesto usando fracciones.",
    pasos: [
      "Cada grupo trae una receta real y escribe sus cantidades como fracciones (3/4 de taza, 1/2 kg…).",
      "Calculad el factor de conversión (75/4, 75/6…) y adaptad todas las cantidades, simplificando.",
      "Pasad las cantidades a unidades de compra (paquetes de 1 kg, botellas de 3/4 L) y redondead con sentido.",
      "Buscad precios reales y calculad el coste total y el coste por ración.",
      "Presentad una ficha de compra y comprobad los cálculos de otro grupo.",
    ],
    producto: "Una ficha de receta escalada con la lista de la compra, el presupuesto y los cálculos con fracciones.",
    evaluacion: ["Opera correctamente con fracciones y simplifica.", "Interpreta los resultados y redondea con sentido práctico.", "Explica el procedimiento con claridad.", "Revisa con rigor el trabajo de otro grupo."],
  },
  tarjetas: [
    ["Número racional", "a/b con a, b enteros y b ≠ 0."],
    ["Equivalentes", "a/b = c/d si a·d = b·c."],
    ["Irreducible", "Dividir entre el m.c.d."],
    ["Comparar", "Reducir a común denominador."],
    ["Sumar", "m.c.m. de denominadores y sumar numeradores."],
    ["Multiplicar", "En línea: num·num / den·den."],
    ["Dividir", "Multiplicar por la inversa."],
    ["Exponente negativo", "(a/b)⁻ⁿ = (b/a)ⁿ."],
    ["Jerarquía", "Paréntesis → potencias → · : → + −."],
    ["Decimal exacto", "Denominador irreducible con solo 2 y 5."],
    ["Fracción de lo que queda", "Multiplicar por la fracción del resto."],
    ["Total desconocido", "Parte : fracción = total."],
  ],
  familias: ["Cocinad juntos una receta y adaptadla a más o menos comensales.", "Buscad fracciones en casa: etiquetas, recetas, partituras, relojes.", "Repartid una pizza o una tableta y preguntad qué fracción queda.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido numérico: números racionales, fracciones equivalentes, orden, representación en la recta, operaciones y potencias con exponente entero, relación con los decimales y resolución de problemas (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Regletas o barras de papel para visualizar equivalencias.", "Recta numérica en el suelo para ordenar fracciones con el cuerpo.", "Escape room de operaciones combinadas.", "Fracciones egipcias: retos de descomposición en fracciones unitarias."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: números racionales (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
