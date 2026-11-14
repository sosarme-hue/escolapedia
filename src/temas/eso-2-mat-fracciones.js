// Matemáticas 2º ESO · Fracciones. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, recta, comparar, formula, resumen, flujo, barra, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");
const { baraja } = require("./_eso2L2");

const significados = cajas("Los tres significados de la fracción tres cuartos: parte, cociente y operador", [
  ["Parte", ["3 de 4 trozos", "iguales"], "var(--pen)"],
  ["Cociente", ["3 : 4 = 0,75"], "var(--leaf)"],
  ["Operador", ["3/4 de 200", "= 150"], "var(--red)"],
  ["Razón", ["3 chicas por", "cada 4 alumnos"], "var(--sun)"],
], "¿Qué significa 3/4?");

const mixtos = lienzo("Siete cuartos son una unidad entera y tres cuartos", `
  ${barra(20, 30, 105, 4, 4, "var(--pen)")}${barra(135, 30, 105, 4, 3, "var(--pen)")}
  ${tx(72, 76, "4/4 = 1", { fs: 13, c: "var(--pen)", max: 100 })}${tx(187, 76, "3/4", { fs: 13, c: "var(--pen)", max: 100 })}
  ${tx(130, 116, "7/4 = 1 + 3/4 = 1 3/4", { fs: 18, fam: D, c: "var(--red)" })}${tx(130, 146, "7 : 4 = 1 y resto 3", { fs: 12, c: "var(--muted)" })}`, 166);

const irreducible = pasos("Simplificar 84 entre 120 hasta la fracción irreducible usando el mcd", ["84/120", "84 = 2²·3·7 ; 120 = 2³·3·5", "mcd = 2²·3 = 12", "84 : 12 = 7 ; 120 : 12 = 10", "7/10 es irreducible"], "Fracción irreducible");

const sumar = flujo("Pasos para sumar o restar fracciones con distinto denominador", [
  ["2/3 + 5/6 − 1/4", "ini"], ["mcm(3, 6, 4) = 12", "proc"], ["8/12 + 10/12 − 3/12", "proc"], ["Operar numeradores: 15/12", "proc"], ["Simplificar: 5/4", "es"],
], "Sumar y restar");

const producto = lienzo("Producto de fracciones como área: dos tercios por tres quintos son seis quinceavos", `
  <rect x="24" y="24" width="150" height="120" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
  <rect x="24" y="24" width="90" height="120" fill="var(--pen)" fill-opacity=".25"/><rect x="24" y="24" width="90" height="80" fill="var(--red)" fill-opacity=".35"/>
  ${[1, 2, 3, 4].map((i) => `<path d="M${24 + i * 30} 24 V144" stroke="var(--ink)" stroke-width="1"/>`).join("")}${[1, 2].map((j) => `<path d="M24 ${24 + j * 40} H174" stroke="var(--ink)" stroke-width="1"/>`).join("")}
  ${tx(99, 162, "3/5 en columnas · 2/3 en filas", { fs: 10, c: "var(--muted)", max: 150 })}${tx(218, 66, "2/3 · 3/5", { fs: 14, fam: D, max: 80 })}${tx(218, 96, "= 6/15", { fs: 14, fam: D, c: "var(--red)", max: 80 })}${tx(218, 124, "= 2/5", { fs: 16, fam: D, c: "var(--leaf)", max: 80 })}`, 176);

const potencias = formula("Potencia de una fracción: se elevan numerador y denominador", "(a/b)ⁿ = aⁿ/bⁿ", ["Ejemplos", "(2/3)³ = 8/27 · (−1/2)² = 1/4", "(3/4)⁰ = 1 · (2/5)⁻¹ = 5/2"], "var(--inf)");

const jerarquia = pasos("Orden de las operaciones combinadas con fracciones", ["Paréntesis y corchetes", "Potencias y raíces", "Productos y cocientes (izq. → der.)", "Sumas y restas (izq. → der.)", "Simplificar el resultado"], "Jerarquía");

const cantidad = comparar("Fracción de una cantidad y problema inverso", [
  ["Directo", ["3/5 de 40", "40 : 5 = 8", "8 · 3 = 24"], "var(--pen)"],
  ["Inverso", ["3/5 de x = 24", "24 : 3 = 8", "8 · 5 = 40"], "var(--red)"],
], "Dos problemas, un mismo dibujo");

const encadenadas = lienzo("Fracciones encadenadas: se gasta dos quintos y luego un tercio de lo que queda", `
  ${barra(20, 28, 220, 5, 2, "var(--red)")}${tx(64, 70, "2/5 primer gasto", { fs: 10.5, c: "var(--red)", max: 88 })}
  ${barra(108, 86, 132, 3, 1, "var(--sun)")}${tx(130, 128, "1/3 de 3/5 = 1/5", { fs: 10.5, c: "var(--sun)", max: 90 })}${tx(208, 128, "queda", { fs: 10.5, c: "var(--leaf)", max: 50 })}
  ${tx(130, 160, "Queda 3/5 − 1/5 = 2/5 del total", { fs: 13, fam: D })}`, 176);

const partes = lienzo("Problema de partes que suman la unidad: un cuarto, un tercio y lo que falta", `
  ${barra(20, 40, 220, 12, 3, "var(--pen)")}<rect x="75" y="40" width="73.3" height="24" fill="var(--leaf)" fill-opacity=".5" stroke="var(--ink)" stroke-width="1.3"/>
  ${tx(47, 84, "1/4 = 3/12", { fs: 10.5, c: "var(--pen)", max: 60 })}${tx(112, 84, "1/3 = 4/12", { fs: 10.5, c: "var(--leaf)", max: 70 })}${tx(194, 84, "resto 5/12", { fs: 10.5, c: "var(--red)", max: 80 })}
  ${tx(130, 122, "1 − (1/4 + 1/3) = 5/12", { fs: 15, fam: D })}${tx(130, 148, "Si el resto son 60 €: 1/12 = 12 €; total 144 €", { fs: 10.5, c: "var(--muted)" })}`, 166);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Fracciones",
  minutos: 110,
  objetivos: [
    "Interpretar una fracción como parte, cociente, operador y razón",
    "Obtener fracciones equivalentes y la fracción irreducible con el mcd",
    "Comparar y ordenar fracciones reduciendo a común denominador",
    "Sumar, restar, multiplicar, dividir y elevar fracciones respetando la jerarquía",
    "Resolver problemas de fracción de una cantidad, problema inverso y fracciones encadenadas",
  ],
  claves: ["numerador", "denominador", "fracción equivalente", "fracción irreducible", "mínimo común denominador", "fracción inversa", "número mixto"],
  pregunta: {
    texto: "En una pizzería te ofrecen 3/8 de una pizza o 2/5 de otra igual. ¿Qué trozo es mayor?",
    respuesta: "Para compararlas se ponen con el mismo denominador: 3/8 = 15/40 y 2/5 = 16/40. Por tanto, <mark>2/5 es un poco mayor</mark>. También se puede dividir: 3/8 = 0,375 y 2/5 = 0,4.",
  },
  lectura: {
    titulo: "Las notas musicales son fracciones",
    html: `<p>Cuando un músico lee una partitura está haciendo cuentas con <b>fracciones</b> sin darse cuenta. La redonda dura un compás entero de 4 tiempos; la blanca dura la mitad, 1/2; la negra, un cuarto, 1/4; la corchea, 1/8, y la semicorchea, 1/16. En un compás de 3/4, como el de un vals, caben exactamente tres negras, o una blanca y una negra, o seis corcheas. Si alguien escribe un compás con notas que suman más o menos de lo que indica la fracción del principio, el compás está mal y la orquesta se descuadra.</p><p>Hace casi mil años, el monje Guido d'Arezzo ya organizaba los sonidos con proporciones, y antes de él Pitágoras descubrió que una cuerda que vibra en la mitad de su longitud suena una octava más aguda, y una que vibra en sus 2/3, una quinta. La armonía de la música occidental está construida sobre fracciones sencillas.</p><p>En este tema repasarás lo que ya sabes de fracciones y darás un paso más: operaciones combinadas, potencias, problemas encadenados y estrategias para no perderte con los denominadores. Todo ello te servirá para los decimales, los porcentajes y el álgebra de los próximos temas.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 La fracción y sus términos</h3><p>Una <b>fracción</b> es una expresión <mark>a/b</mark> en la que <i>a</i> y <i>b</i> son números enteros y <i>b</i> no es cero. El número de abajo, el <b>denominador</b>, indica en cuántas partes iguales se divide la unidad; el de arriba, el <b>numerador</b>, cuántas de esas partes se toman. La raya que los separa se llama raya de fracción y equivale a una división.</p><p>Se leen nombrando el numerador y después el denominador: 1/2 «un medio», 2/3 «dos tercios», 3/4 «tres cuartos», 5/10 «cinco décimos», 7/15 «siete quinceavos». Recuerda que las partes deben ser <b>iguales</b>: si cortas una tarta en cuatro trozos desiguales, cada trozo no es un cuarto.</p><p>Las fracciones también pueden ser <b>negativas</b>: −3/4 = (−3)/4 = 3/(−4). El signo menos se suele escribir delante de la fracción, nunca en el denominador.</p>`, svg: psvg("fracciones", 0) },
    { html: `<h3>1.2 Los significados de una fracción</h3><p>Una misma fracción se puede interpretar de varias formas, y conviene reconocer cuál usa cada problema:</p><ul><li><b>Parte de un todo</b>: 3/4 de una tableta son 3 de sus 4 partes iguales.</li><li><b>Cociente</b>: 3/4 es el resultado de dividir 3 entre 4, es decir, 0,75. Si repartes 3 pizzas entre 4 personas, a cada una le tocan 3/4 de pizza.</li><li><b>Operador</b>: 3/4 actúa sobre una cantidad. Los 3/4 de 200 son 200 : 4 · 3 = 150.</li><li><b>Razón</b>: compara dos cantidades. «Hay 3 chicas por cada 4 alumnos» significa que las chicas son 3/4 de la clase.</li></ul><p>Pasar de un significado a otro es la clave para resolver problemas: lees «he gastado 2/5 del dinero» (parte), calculas cuánto es (operador) y, si te piden compararlo, lo pasas a decimal (cociente).</p>`, svg: significados },
    { html: `<h3>1.3 Fracciones propias, impropias y números mixtos</h3><p>Una fracción es <b>propia</b> si el numerador es menor que el denominador (vale menos que 1) e <b>impropia</b> si es mayor (vale más que 1). Si numerador y denominador coinciden, la fracción vale exactamente 1.</p><p>Toda fracción impropia se puede escribir como <b>número mixto</b>: un entero más una fracción propia. Se divide el numerador entre el denominador; el cociente es la parte entera y el resto, el nuevo numerador. Así, 7/4: 7 : 4 = 1 y resto 3, de modo que <mark>7/4 = 1 3/4</mark>.</p><p>Para volver a fracción se multiplica el entero por el denominador y se suma el numerador: 2 3/5 = (2 · 5 + 3)/5 = 13/5. Los números mixtos son cómodos para hacerse una idea del tamaño (casi dos pizzas), pero para operar es mejor la forma de fracción impropia.</p>`, svg: mixtos },
    { html: `<h3>2.1 Fracciones equivalentes</h3><p>Dos fracciones son <b>equivalentes</b> si representan la misma cantidad. Por ejemplo, 1/2, 2/4 y 4/8 ocupan la misma parte de una barra. Para saber si a/b y c/d son equivalentes se usan los <b>productos cruzados</b>: lo son si <mark>a · d = b · c</mark>.</p><p>Ejemplo: ¿son equivalentes 6/15 y 10/25? 6 · 25 = 150 y 15 · 10 = 150. Sí lo son.</p><p>Se obtienen fracciones equivalentes de dos maneras: <b>amplificando</b> (multiplicando numerador y denominador por el mismo número distinto de cero) o <b>simplificando</b> (dividiéndolos entre un divisor común). Los productos cruzados también permiten calcular un término desconocido: si 4/6 = x/15, entonces 6x = 60 y x = 10.</p><p>Todas las fracciones equivalentes entre sí forman un mismo <b>número racional</b>, y tienen el mismo valor decimal: 2/5 = 4/10 = 0,4.</p>`, svg: psvg("fracciones", 1), video: pvid("fracciones", 1) },
    { html: `<h3>2.2 La fracción irreducible</h3><p>Una fracción es <b>irreducible</b> cuando el numerador y el denominador no tienen ningún divisor común aparte del 1; dicho de otro modo, cuando su máximo común divisor es 1. Es la forma más sencilla de escribir un número racional.</p><p>Hay dos maneras de llegar a ella:</p><ul><li><b>Paso a paso</b>, dividiendo entre divisores comunes que se vean fácilmente (2, 3, 5…): 84/120 → 42/60 → 21/30 → 7/10.</li><li><b>De una sola vez</b>, dividiendo entre el <b>mcd</b>. Se descomponen en factores primos: 84 = 2² · 3 · 7 y 120 = 2³ · 3 · 5. El mcd son los factores comunes con el menor exponente: 2² · 3 = 12. Por tanto, 84/120 = <mark>7/10</mark>.</li></ul><p>El segundo método es más rápido con números grandes. Da siempre el resultado final de un ejercicio en forma irreducible: es como dar una respuesta «limpia».</p>`, svg: irreducible },
    { html: `<h3>2.3 Comparar y ordenar fracciones</h3><p>Para comparar fracciones hay varias estrategias, según el caso:</p><ul><li><b>Igual denominador</b>: es mayor la que tiene mayor numerador. 7/9 &gt; 4/9.</li><li><b>Igual numerador</b>: es mayor la que tiene menor denominador, porque sus partes son más grandes. 3/5 &gt; 3/7.</li><li><b>Caso general</b>: se reducen a <b>común denominador</b> usando el mcm de los denominadores. Para ordenar 3/4, 5/6 y 7/12: mcm = 12, y quedan 9/12, 10/12 y 7/12. Por tanto, <mark>7/12 &lt; 3/4 &lt; 5/6</mark>.</li></ul><p>Con fracciones negativas, el orden se invierte: −3/4 &lt; −7/12, porque −9/12 está más a la izquierda en la recta. Otra estrategia útil es comparar con números de referencia como 1/2 o 1: 4/9 es menor que la mitad, 5/9 es mayor.</p>`, svg: psvg("fracciones", 2) },
    { html: `<h3>3.1 Sumar y restar fracciones</h3><p>Si las fracciones tienen el <b>mismo denominador</b>, se suman o restan los numeradores y se mantiene el denominador: 5/9 + 2/9 = 7/9. Nunca se suman los denominadores.</p><p>Si tienen <b>distinto denominador</b>, se siguen estos pasos:</p><ol><li>Se calcula el <b>mcm</b> de los denominadores.</li><li>Se escribe cada fracción con ese denominador: se divide el mcm entre cada denominador y se multiplica por el numerador.</li><li>Se suman o restan los numeradores.</li><li>Se simplifica el resultado.</li></ol><p>Ejemplo: 2/3 + 5/6 − 1/4. mcm(3, 6, 4) = 12 → 8/12 + 10/12 − 3/12 = 15/12 = <mark>5/4</mark>. Un número entero se escribe con denominador 1: 3 − 2/5 = 15/5 − 2/5 = 13/5.</p>`, svg: sumar, video: pvid("fracciones", 3) },
    { html: `<h3>3.2 Multiplicar y dividir fracciones</h3><p>Para <b>multiplicar</b> fracciones se multiplican los numeradores entre sí y los denominadores entre sí: <mark>a/b · c/d = (a · c)/(b · d)</mark>. Conviene simplificar antes de multiplicar, tachando factores comunes en cualquier numerador y cualquier denominador: 6/35 · 14/9 = (2 · 3 · 2 · 7)/(5 · 7 · 3 · 3) = 4/15.</p><p>La <b>inversa</b> de a/b es b/a, porque su producto es 1. Para <b>dividir</b> se multiplica la primera por la inversa de la segunda: <mark>a/b : c/d = (a · d)/(b · c)</mark>. Por ejemplo, 3/4 : 9/10 = 3/4 · 10/9 = 30/36 = 5/6.</p><p>Multiplicar por una fracción menor que 1 hace el número más pequeño (es tomar una parte), y dividir entre una fracción menor que 1 lo hace más grande: 2 : 1/4 = 8, porque en 2 unidades caben 8 cuartos.</p>`, svg: psvg("fracciones", 4) },
    { html: `<h3>3.3 El producto como «fracción de una fracción»</h3><p>¿Por qué se multiplican numeradores y denominadores? Piensa en los 2/3 de 3/5 de un huerto. Dibuja un rectángulo, divídelo en 5 columnas y colorea 3: eso es 3/5. Ahora divide el rectángulo en 3 filas y, de la parte coloreada, toma 2 filas. Has marcado 2 · 3 = 6 cuadraditos de un total de 3 · 5 = 15. Es decir, <mark>2/3 · 3/5 = 6/15 = 2/5</mark>.</p><p>Este <b>modelo del área</b> explica la regla y muestra que la palabra «de» se traduce por un producto: «la mitad de los tres cuartos» es 1/2 · 3/4 = 3/8.</p><p>También ayuda a evitar un error frecuente: al multiplicar fracciones <b>no</b> hace falta buscar común denominador. Eso solo se hace para sumar y restar, porque en ese caso necesitamos que las partes sean del mismo tamaño.</p>`, svg: producto },
    { html: `<h3>3.4 Potencias de fracciones</h3><p>Para elevar una fracción a una potencia se elevan el numerador y el denominador: <mark>(a/b)ⁿ = aⁿ/bⁿ</mark>. Por ejemplo, (2/3)³ = 8/27. Es importante usar paréntesis: 2³/3 = 8/3 no es lo mismo que (2/3)³.</p><p>Se cumplen las mismas propiedades que con números enteros: (a/b)ᵐ · (a/b)ⁿ = (a/b)ᵐ⁺ⁿ, y cualquier fracción distinta de cero elevada a 0 vale 1.</p><p>Con signo negativo, si el exponente es par el resultado es positivo y si es impar, negativo: (−1/2)² = 1/4 y (−1/2)³ = −1/8.</p><p>Un adelanto que verás en el tema de potencias: un <b>exponente negativo</b> equivale a tomar la inversa. (2/5)⁻¹ = 5/2 y (1/3)⁻² = 3² = 9.</p>`, svg: potencias },
    { html: `<h3>3.5 Operaciones combinadas</h3><p>En una expresión con varias operaciones se respeta la <b>jerarquía</b>: primero paréntesis y corchetes, después potencias, luego multiplicaciones y divisiones de izquierda a derecha y, por último, sumas y restas.</p><p>Ejemplo: 1/2 + 3/4 · (2/3 − 1/6)². Primero el paréntesis: 2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2. Después la potencia: (1/2)² = 1/4. Luego el producto: 3/4 · 1/4 = 3/16. Por último la suma: 1/2 + 3/16 = 8/16 + 3/16 = <mark>11/16</mark>.</p><p>Consejos: escribe cada paso en una línea nueva, simplifica en cuanto puedas, no mezcles fracciones y decimales y vigila los signos menos delante de un paréntesis, porque cambian el signo de todo lo de dentro: 1 − (1/3 − 1/2) = 1 − 1/3 + 1/2 = 7/6.</p>`, svg: jerarquia },
    { html: `<h3>4.1 Fracción de una cantidad y problema inverso</h3><p>Calcular la <b>fracción de una cantidad</b> es usar la fracción como operador: se divide la cantidad entre el denominador y se multiplica por el numerador. Los 3/5 de 40 € son 40 : 5 · 3 = 24 €.</p><p>El <b>problema inverso</b> da la parte y pide el total: «los 3/5 de un número son 24, ¿cuál es el número?». Si 3 partes valen 24, una parte vale 24 : 3 = 8, y las 5 partes, 8 · 5 = <mark>40</mark>. Se hace al revés: dividir entre el numerador y multiplicar por el denominador.</p><p>Un buen hábito es <b>comprobar</b>: los 3/5 de 40 son 24, así que la respuesta es correcta. Y otra forma de pensarlo, que usarás en álgebra, es plantear la ecuación 3/5 · x = 24, de donde x = 24 : 3/5 = 24 · 5/3 = 40.</p>`, svg: cantidad },
    { html: `<h3>4.2 Problemas de partes y de fracciones encadenadas</h3><p>Hay dos tipos de problemas que conviene distinguir bien:</p><ul><li><b>Partes del total</b>: «gasto 1/4 en ropa y 1/3 en comida». Todas las fracciones se refieren al mismo total, así que se suman: 1/4 + 1/3 = 7/12, y queda 5/12. Si ese resto son 60 €, 1/12 son 12 € y el total, 144 €.</li><li><b>Fracciones encadenadas</b>: «gasto 2/5 y luego 1/3 de lo que me queda». La segunda fracción se aplica al <b>resto</b>, no al total. Quedan 3/5; un tercio de 3/5 es 1/5; en total gasto 2/5 + 1/5 = 3/5 y quedan <mark>2/5</mark>.</li></ul><p>La pregunta clave es: «¿de qué es esta fracción?». Si es «de lo que queda», hay que multiplicar fracciones. Dibuja una barra para cada paso: así verás enseguida qué parte se va gastando y cuál queda.</p>`, svg: encadenadas },
    { html: `<h3>4.3 Estrategias para resolver problemas</h3><p>Un problema de fracciones se resuelve mejor con un método ordenado:</p><ol><li><b>Lee</b> y localiza la unidad: ¿cuál es el total?</li><li><b>Representa</b> la situación con una barra o un rectángulo dividido.</li><li><b>Decide</b> si las fracciones se refieren al total (se suman) o al resto (se multiplican).</li><li><b>Calcula</b> la fracción que interesa y, si te dan una cantidad, el valor de una parte.</li><li><b>Comprueba</b> el resultado con los datos del enunciado y responde con una frase.</li></ol><p>Ejemplo: en un instituto, 1/4 de los alumnos va andando, 2/3 en autobús y los 45 restantes en bici. Andando o en autobús van 3/12 + 8/12 = 11/12; en bici, 1/12. Si 1/12 son 45, el total es 45 · 12 = 540 alumnos. Comprobación: 135 + 360 + 45 = 540.</p>`, svg: partes },
  ],
  ejemplos: [
    { enunciado: "Simplifica 90/150 hasta la fracción irreducible.", pasos: ["90 = 2 · 3² · 5 ; 150 = 2 · 3 · 5².", "mcd = 2 · 3 · 5 = 30.", "90 : 30 = 3 ; 150 : 30 = 5."], resultado: "90/150 = 3/5." },
    { enunciado: "Ordena de menor a mayor: 5/6, 7/9, 3/4.", pasos: ["mcm(6, 9, 4) = 36.", "5/6 = 30/36 ; 7/9 = 28/36 ; 3/4 = 27/36.", "Se comparan los numeradores: 27 < 28 < 30."], resultado: "3/4 < 7/9 < 5/6." },
    { enunciado: "Calcula 3/4 − 2/3 + 5/6.", pasos: ["mcm(4, 3, 6) = 12.", "9/12 − 8/12 + 10/12 = 11/12.", "11 y 12 no tienen divisores comunes."], resultado: "11/12." },
    { enunciado: "Calcula (1/2 − 1/3) : (2/3)² + 1/4.", pasos: ["Paréntesis: 1/2 − 1/3 = 3/6 − 2/6 = 1/6.", "Potencia: (2/3)² = 4/9.", "División: 1/6 : 4/9 = 9/24 = 3/8.", "Suma: 3/8 + 1/4 = 3/8 + 2/8 = 5/8."], resultado: "5/8." },
    { enunciado: "Los 4/7 de un depósito son 280 L. ¿Cuál es su capacidad?", pasos: ["4 partes son 280 L → 1 parte es 280 : 4 = 70 L.", "7 partes: 70 · 7 = 490 L.", "Comprobación: 4/7 de 490 = 280."], resultado: "490 litros." },
    { enunciado: "Laia gasta 1/3 de su paga en el cine y 3/4 de lo que le queda en un libro. Le sobran 5 €. ¿Cuánto era la paga?", pasos: ["Tras el cine le quedan 2/3.", "En el libro gasta 3/4 de 2/3 = 1/2.", "Le sobra 2/3 − 1/2 = 1/6 de la paga.", "1/6 son 5 € → paga = 30 €."], resultado: "30 €." },
  ],
  errores: [
    "Sumar numeradores y denominadores: 1/2 + 1/3 no es 2/5, sino 5/6.",
    "Buscar común denominador para multiplicar: en el producto no hace falta.",
    "Al dividir, dar la vuelta a la primera fracción en lugar de a la segunda.",
    "Confundir 2³/3 con (2/3)³: sin paréntesis solo se eleva el numerador.",
    "En «un tercio de lo que queda», calcular un tercio del total.",
    "Olvidar cambiar los signos al quitar un paréntesis precedido de un menos.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe con cifras y explica qué significa: a) cinco octavos; b) siete doceavos; c) tres medios.", sol: "a) 5/8: la unidad en 8 partes y se toman 5. b) 7/12: 12 partes y se toman 7. c) 3/2: 2 partes y se toman 3, es decir, más de una unidad (1 1/2)." },
    { nivel: "básico", q: "Calcula: a) 2/5 de 60; b) 3/8 de 96; c) 5/6 de 150.", sol: "a) 60 : 5 = 12; 12 · 2 = 24. b) 96 : 8 = 12; 12 · 3 = 36. c) 150 : 6 = 25; 25 · 5 = 125." },
    { nivel: "básico", q: "Pasa a número mixto: 17/5 y 23/6. Pasa a fracción: 3 2/7.", sol: "17 : 5 = 3 resto 2 → 3 2/5. 23 : 6 = 3 resto 5 → 3 5/6. 3 2/7 = (3 · 7 + 2)/7 = 23/7." },
    { nivel: "básico", q: "Comprueba si son equivalentes: a) 4/10 y 6/15; b) 3/7 y 9/20.", sol: "a) 4 · 15 = 60 y 10 · 6 = 60: sí. b) 3 · 20 = 60 y 7 · 9 = 63: no." },
    { nivel: "básico", q: "Simplifica hasta la fracción irreducible: 24/36, 45/75, 56/98.", sol: "24/36: mcd 12 → 2/3. 45/75: mcd 15 → 3/5. 56/98: mcd 14 → 4/7." },
    { nivel: "básico", q: "Halla x: a) 3/5 = x/20; b) 8/x = 2/7.", sol: "a) 5x = 60 → x = 12. b) 2x = 56 → x = 28." },
    { nivel: "básico", q: "Ordena de menor a mayor: 5/12, 1/12, 11/12, 7/12. Y también: 3/4, 3/10, 3/7.", sol: "1/12 < 5/12 < 7/12 < 11/12 (igual denominador). 3/10 < 3/7 < 3/4 (igual numerador: menor denominador, mayor fracción)." },
    { nivel: "básico", q: "Calcula: a) 3/8 + 5/8; b) 2/3 + 1/6; c) 4/5 − 1/2.", sol: "a) 8/8 = 1. b) 4/6 + 1/6 = 5/6. c) 8/10 − 5/10 = 3/10." },
    { nivel: "básico", q: "Calcula y simplifica: a) 4/9 · 3/8; b) 5 · 2/15; c) 2/7 : 4/21.", sol: "a) 12/72 = 1/6. b) 10/15 = 2/3. c) 2/7 · 21/4 = 42/28 = 3/2." },
    { nivel: "básico", q: "Calcula: (3/4)², (−2/5)³ y (7/9)⁰.", sol: "9/16; −8/125 (exponente impar, resultado negativo); 1." },
    { nivel: "medio", q: "Ordena de menor a mayor: 2/3, 5/8, 7/12, 3/4.", sol: "mcm(3, 8, 12, 4) = 24: 16/24, 15/24, 14/24, 18/24. Orden: 7/12 < 5/8 < 2/3 < 3/4." },
    { nivel: "medio", q: "Ordena: −1/2, −2/3, −3/8, −5/6.", sol: "mcm = 24: −12/24, −16/24, −9/24, −20/24. Con negativos, es menor el que tiene mayor valor absoluto: −5/6 < −2/3 < −1/2 < −3/8." },
    { nivel: "medio", q: "Calcula: 5/6 − 3/4 + 2/9.", sol: "mcm(6, 4, 9) = 36: 30/36 − 27/36 + 8/36 = 11/36." },
    { nivel: "medio", q: "Calcula: 2 − (3/5 − 1/4).", sol: "Paréntesis: 12/20 − 5/20 = 7/20. 2 − 7/20 = 40/20 − 7/20 = 33/20." },
    { nivel: "medio", q: "Calcula simplificando antes de multiplicar: 15/28 · 14/45 · 6/5.", sol: "15/45 = 1/3; 14/28 = 1/2. Queda 1/2 · 1/3 · 6/5 = 6/30 = 1/5." },
    { nivel: "medio", q: "Calcula: 3/4 + 1/2 · 5/6.", sol: "Primero el producto: 1/2 · 5/6 = 5/12. Después: 3/4 + 5/12 = 9/12 + 5/12 = 14/12 = 7/6." },
    { nivel: "medio", q: "Calcula: (2/3 + 1/6) : (1 − 3/8).", sol: "2/3 + 1/6 = 5/6. 1 − 3/8 = 5/8. 5/6 : 5/8 = 5/6 · 8/5 = 8/6 = 4/3." },
    { nivel: "medio", q: "Calcula: (1/2)³ + (3/4)² − 1/8.", sol: "1/8 + 9/16 − 1/8 = 9/16." },
    { nivel: "medio", q: "Una botella de 3/4 L se reparte en vasos de 1/8 L. ¿Cuántos vasos se llenan?", sol: "3/4 : 1/8 = 3/4 · 8 = 24/4 = 6 vasos." },
    { nivel: "medio", q: "Los 5/8 de los alumnos de un instituto son chicas. Si hay 360 chicas, ¿cuántos alumnos hay? ¿Cuántos chicos?", sol: "1/8 = 360 : 5 = 72; total = 72 · 8 = 576 alumnos. Chicos: 3/8 = 216 (576 − 360)." },
    { nivel: "medio", q: "Un ciclista recorre 2/7 de una etapa por la mañana y 1/3 por la tarde. ¿Qué fracción le falta? Si la etapa tiene 168 km, ¿cuántos km son?", sol: "2/7 + 1/3 = 6/21 + 7/21 = 13/21. Falta 8/21. 168 : 21 = 8; 8 · 8 = 64 km." },
    { nivel: "medio", q: "¿Cuál es la mitad de los dos tercios de 3/5?", sol: "1/2 · 2/3 · 3/5 = 6/30 = 1/5." },
    { nivel: "avanzado", q: "Calcula: [1/2 − (1/3)²] · 18/7 − 2/3 : 4.", sol: "(1/3)² = 1/9; 1/2 − 1/9 = 7/18; 7/18 · 18/7 = 1. 2/3 : 4 = 2/12 = 1/6. 1 − 1/6 = 5/6." },
    { nivel: "avanzado", q: "Un depósito está lleno. Se vacía 1/4 y después 2/5 de lo que queda. Si quedan 900 L, ¿cuál es la capacidad?", sol: "Tras 1/4 quedan 3/4. Se vacía 2/5 · 3/4 = 3/10. Queda 3/4 − 3/10 = 15/20 − 6/20 = 9/20. 9/20 = 900 L → 1/20 = 100 L → capacidad 2000 L." },
    { nivel: "avanzado", q: "Encuentra tres fracciones comprendidas entre 2/5 y 3/5.", sol: "Amplificando: 2/5 = 8/20 y 3/5 = 12/20. Entre ellas: 9/20, 10/20 = 1/2 y 11/20. Siempre hay infinitas fracciones entre dos fracciones." },
    { nivel: "avanzado", q: "Un grifo llena un depósito en 4 h y otro en 6 h. ¿Qué fracción llenan juntos en una hora? ¿Cuánto tardan juntos?", sol: "1/4 + 1/6 = 3/12 + 2/12 = 5/12 por hora. Tardan 12/5 h = 2,4 h = 2 h 24 min." },
    { nivel: "avanzado", q: "En una herencia, el hijo mayor recibe 1/3, el mediano 2/5 del resto y el pequeño los 24 000 € que quedan. ¿Cuánto era la herencia y cuánto recibe cada uno?", sol: "Tras el mayor queda 2/3. El mediano recibe 2/5 · 2/3 = 4/15. Queda 2/3 − 4/15 = 6/15 = 2/5. 2/5 = 24 000 € → total 60 000 €. Mayor 20 000 €, mediano 16 000 €, pequeño 24 000 €." },
    { nivel: "avanzado", q: "Comprueba que en un compás de 3/4 caben una negra con puntillo (1/4 + 1/8), una corchea y una negra.", sol: "1/4 + 1/8 + 1/8 + 1/4 = 2/8 + 1/8 + 1/8 + 2/8 = 6/8 = 3/4. Sí, el compás está completo." },
    { nivel: "avanzado", q: "Encuentra el error y corrígelo: «1 − (1/2 − 1/3) = 1 − 1/2 − 1/3 = 1/6».", sol: "Al quitar el paréntesis hay que cambiar el signo de 1/3: 1 − 1/2 + 1/3 = 6/6 − 3/6 + 2/6 = 5/6." },
    { nivel: "avanzado", q: "¿Qué fracción hay que sumar a 3/8 para obtener el inverso de 4/5?", sol: "El inverso de 4/5 es 5/4. 5/4 − 3/8 = 10/8 − 3/8 = 7/8." },
  ],
  quiz: baraja([
    { q: "En la fracción 5/8, el 8 indica…", o: ["las partes que se toman", "las partes iguales en que se divide la unidad", "el resultado", "el resto"], a: 1, e: "Es el denominador." },
    { q: "3/4 como cociente vale…", o: ["0,34", "0,75", "1,33", "0,43"], a: 1, e: "3 : 4 = 0,75." },
    { q: "Los 2/3 de 45 son…", o: ["15", "30", "67,5", "90"], a: 1, e: "45 : 3 · 2." },
    { q: "11/4 como número mixto es…", o: ["2 3/4", "3 1/4", "2 1/4", "4 3/4"], a: 0, e: "11 : 4 = 2 y resto 3." },
    { q: "¿Son equivalentes 3/9 y 5/15?", o: ["Sí", "No", "Solo si se simplifican", "No se puede saber"], a: 0, e: "3 · 15 = 45 = 9 · 5." },
    { q: "La fracción irreducible de 36/60 es…", o: ["6/10", "3/5", "18/30", "12/20"], a: 1, e: "Dividiendo entre el mcd 12." },
    { q: "Si 2/5 = x/35, x vale…", o: ["7", "14", "10", "28"], a: 1, e: "5x = 70." },
    { q: "¿Cuál es mayor?", o: ["2/7", "2/9", "2/11", "2/13"], a: 0, e: "Mismo numerador: menor denominador." },
    { q: "¿Qué fracción es mayor, 5/8 o 3/5?", o: ["5/8", "3/5", "Son iguales", "Depende"], a: 0, e: "25/40 > 24/40." },
    { q: "2/3 + 1/4 =", o: ["3/7", "11/12", "3/12", "2/12"], a: 1, e: "8/12 + 3/12." },
    { q: "1 − 3/8 =", o: ["2/8", "5/8", "−2/8", "3/8"], a: 1, e: "8/8 − 3/8." },
    { q: "3/5 · 10/9 =", o: ["2/3", "13/14", "6/14", "1/3"], a: 0, e: "30/45 = 2/3." },
    { q: "La inversa de −3/7 es…", o: ["3/7", "−7/3", "7/3", "−3/7"], a: 1, e: "Se da la vuelta y se conserva el signo." },
    { q: "4/5 : 2/15 =", o: ["8/75", "6", "2/3", "3/2"], a: 1, e: "4/5 · 15/2 = 60/10." },
    { q: "(−2/3)² =", o: ["−4/9", "4/9", "4/6", "−4/6"], a: 1, e: "Exponente par: positivo." },
    { q: "1/2 + 1/2 : 1/2 =", o: ["1", "3/2", "2", "1/2"], a: 1, e: "Primero la división: 1; luego 1/2 + 1." },
    { q: "«La mitad de los tres quintos» es…", o: ["3/10", "6/5", "1/5", "3/2"], a: 0, e: "1/2 · 3/5." },
    { q: "Gasto 1/4 y luego 1/3 de lo que me queda. Me queda…", o: ["5/12", "1/2", "2/3", "1/4"], a: 1, e: "Quedan 3/4; gasto 1/4; quedan 2/4." },
    { q: "Si los 3/8 de un número son 12, el número es…", o: ["4,5", "32", "36", "24"], a: 1, e: "12 : 3 · 8." },
    { q: "¿Cuántos cuartos de hora hay en 2 horas y media?", o: ["8", "10", "12", "5"], a: 1, e: "5/2 : 1/4 = 10." },
  ]),
  examen: baraja([
    { q: "Los 5/6 de 72 son…", o: ["60", "12", "86,4", "66"], a: 0, e: "72 : 6 · 5." },
    { q: "La fracción irreducible de 126/180 es…", o: ["7/10", "63/90", "14/20", "21/30"], a: 0, e: "mcd 18." },
    { q: "Ordena 1/3, 2/9, 1/2:", o: ["2/9 < 1/3 < 1/2", "1/3 < 2/9 < 1/2", "1/2 < 1/3 < 2/9", "2/9 < 1/2 < 1/3"], a: 0, e: "4/18, 6/18, 9/18." },
    { q: "5/6 − 1/4 + 1/3 =", o: ["11/12", "5/12", "1", "7/12"], a: 0, e: "10/12 − 3/12 + 4/12." },
    { q: "(2/3)² : 4/9 =", o: ["1", "16/81", "2/3", "4/9"], a: 0, e: "4/9 : 4/9." },
    { q: "2/5 + 3/5 · 5/9 =", o: ["11/15", "5/9", "1", "17/45"], a: 0, e: "3/5 · 5/9 = 1/3; 6/15 + 5/15." },
    { q: "Si 2/3 de un número son 50, el número es…", o: ["75", "33,3", "100", "150"], a: 0, e: "50 : 2 · 3." },
    { q: "Gasto 2/5 y luego la mitad de lo que queda. Queda…", o: ["3/10", "1/10", "1/5", "2/5"], a: 0, e: "Queda 3/5; la mitad: 3/10." },
  ], 1),
  feynman: ["Por qué para sumar fracciones hay que buscar denominador común y para multiplicar no", "Qué significa dividir entre una fracción y por qué el resultado puede ser mayor", "Cómo distinguir una fracción del total de una fracción del resto", "Por qué 2/4 y 3/6 son el mismo número"],
  figura: {
    titulo: "Las fracciones en un vistazo",
    svg: resumen("Resumen del tema de fracciones", [
      ["a/b", "b: partes iguales · a: partes que se toman", "var(--pen)"],
      ["Equivalentes", "a · d = b · c · irreducible: dividir entre el mcd", "var(--leaf)"],
      ["+ y −", "común denominador (mcm) y operar numeradores", "var(--sun)"],
      ["· y :", "(a·c)/(b·d) · multiplicar por la inversa", "var(--inf)"],
      ["Problemas", "¿del total (sumar) o del resto (multiplicar)?", "var(--red)"],
    ]),
  },
  video: pvg("fracciones"),
  mapa: mapa("FRACCIONES", "var(--sun)", [
    ["Significados", "parte · cociente · operador · razón", "var(--pen)"],
    ["Equivalencia", "amplificar · simplificar · mcd", "var(--leaf)"],
    ["Operaciones", "orden · + − · : · potencias", "var(--sun)"],
    ["Problemas", "parte · inverso · encadenadas", "var(--red)"],
  ], 250),
  glosario: [
    ["Fracción", "Expresión a/b, con b ≠ 0, que indica partes iguales de una unidad o un cociente."],
    ["Numerador", "Término de arriba: número de partes que se toman."],
    ["Denominador", "Término de abajo: número de partes iguales en que se divide la unidad."],
    ["Fracción propia", "La que tiene el numerador menor que el denominador; vale menos que 1."],
    ["Fracción impropia", "La que tiene el numerador mayor que el denominador; vale más que 1."],
    ["Número mixto", "Suma de un entero y una fracción propia: 2 1/3."],
    ["Fracciones equivalentes", "Las que representan la misma cantidad; cumplen a · d = b · c."],
    ["Amplificar", "Multiplicar numerador y denominador por el mismo número."],
    ["Simplificar", "Dividir numerador y denominador entre un divisor común."],
    ["Fracción irreducible", "La que tiene numerador y denominador primos entre sí (mcd = 1)."],
    ["Común denominador", "Denominador igual para varias fracciones; se suele usar el mcm."],
    ["Fracción inversa", "La que resulta de intercambiar numerador y denominador; su producto por la original es 1."],
    ["Número racional", "Número que se puede escribir como fracción de dos enteros."],
    ["Jerarquía de operaciones", "Orden en que se hacen las operaciones: paréntesis, potencias, productos y cocientes, sumas y restas."],
  ],
  situacion: {
    titulo: "Componemos un ritmo con fracciones",
    reto: "Por equipos, vais a escribir un ritmo de 8 compases en compás de 3/4 o 4/4 usando figuras musicales (redonda, blanca, negra, corchea, semicorchea y puntillos), comprobando con fracciones que cada compás está completo.",
    pasos: [
      "Construid una tabla con la duración de cada figura como fracción de la redonda.",
      "Elegid el compás (3/4 o 4/4) y escribid un primer borrador de 8 compases.",
      "Comprobad cada compás sumando fracciones con común denominador; corregid los que no cuadren.",
      "Calculad qué fracción del total del ritmo ocupan las corcheas y simplificadla.",
      "Interpretad el ritmo con palmas o percusión corporal y grabadlo.",
    ],
    producto: "Una partitura rítmica de 8 compases con las sumas de fracciones que demuestran que es correcta, y su grabación.",
    evaluacion: ["Suma fracciones con distinto denominador correctamente.", "Simplifica y compara fracciones.", "Relaciona las fracciones con la duración de las figuras.", "Presenta y explica el trabajo con orden y claridad."],
  },
  tarjetas: [
    ["a/b", "b partes iguales; se toman a"], ["Fracción de una cantidad", "Dividir entre b, multiplicar por a"], ["Problema inverso", "Dividir entre a, multiplicar por b"],
    ["Equivalentes", "a · d = b · c"], ["Irreducible", "Dividir entre el mcd"], ["Comparar", "Reducir a común denominador"],
    ["Sumar y restar", "mcm de denominadores; operar numeradores"], ["Multiplicar", "(a · c)/(b · d)"], ["Dividir", "Multiplicar por la inversa"],
    ["(a/b)ⁿ", "aⁿ/bⁿ"], ["«De lo que queda»", "Se multiplica por la fracción del resto"], ["Jerarquía", "( ) → potencias → · : → + −"],
  ],
  familias: ["Al cocinar, pedid que adapten una receta a más o menos comensales multiplicando fracciones.", "Repartid una pizza o una tarta y preguntad qué fracción queda tras cada reparto.", "Buscad fracciones en la vida diaria: tres cuartos de hora, medio kilo, un tercio de descuento.", "Jugad a ordenar fracciones con cartas: gana quien saque la mayor y lo justifique."],
  profesores: {
    saberes: "Sentido numérico: números racionales en forma de fracción, equivalencia, comparación y orden, operaciones y sus propiedades, jerarquía y resolución de problemas contextualizados (RD 217/2022, Matemáticas 1º-3º ESO; en Cataluña, Decret 175/2022, competencias 1, 2 y 5).",
    ideas: ["Tiras de papel y regletas para construir fracciones equivalentes.", "Modelo del área en papel cuadriculado para el producto de fracciones.", "Problemas de herencias y depósitos con barras dibujadas antes de calcular.", "Conexión con Música: compases y duraciones de las figuras."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): fracciones", url: "https://proyectodescartes.org/" }, { t: "Wikipedia: Figura musical", url: "https://es.wikipedia.org/wiki/Figura_musical" }],
  revisado: REV,
};
