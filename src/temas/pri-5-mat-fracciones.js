// Matemáticas 5º de Primaria: fracciones, comparación y operaciones. Dibujos propios en SVG.
const P = require("./_pri5a");
const { svg, t, barra, AZ, RO, VE, NA, SO, MO } = P;

// Fracción escrita en vertical: numerador, raya y denominador.
const fr = (x, y, n, d, c = "var(--ink)", s = 16) => `${t(x, y - 4, n, { s, d: true, c })}<path d="M${x - s * 0.6} ${y + 1} H ${x + s * 0.6}" stroke="${c}" stroke-width="2"/>${t(x, y + s + 2, d, { s, d: true, c })}`;

// Círculo dividido en n sectores con k coloreados.
const pastel = (cx, cy, r, n, k, c) => [...Array(n)].map((_, i) => {
  const a1 = (i / n) * 2 * Math.PI - Math.PI / 2, a2 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
  const p = (a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  return `<path d="M${cx} ${cy} L ${p(a1)} A ${r} ${r} 0 0 1 ${p(a2)} Z" fill="${i < k ? c : "var(--card)"}" fill-opacity="${i < k ? 0.5 : 1}" stroke="var(--ink)" stroke-width="1.5"/>`;
}).join("");

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Fracciones: comparación y operaciones",
  minutos: 55,
  objetivos: ["Leer, escribir y representar fracciones", "Obtener fracciones equivalentes amplificando y simplificando", "Comparar y ordenar fracciones", "Sumar y restar fracciones y calcular la fracción de un número"],
  claves: ["fracción", "numerador", "denominador", "fracción equivalente", "amplificar", "simplificar", "número mixto", "común denominador", "fracción de un número"],
  pregunta: ["Ana se ha comido 2/4 de una pizza y Leo 3/6 de otra pizza igual. ¿Quién ha comido más?", "¡Los dos han comido lo mismo! 2/4 y 3/6 son <b>fracciones equivalentes</b>: las dos son <mark>la mitad</mark> de la pizza (1/2). Aunque los números sean distintos, representan la misma cantidad. Puedes comprobarlo multiplicando en cruz: 2 × 6 = 12 y 4 × 3 = 12."],
  bloques: [
    ["¿Qué es una fracción?", `<p>Una <b>fracción</b> representa una o varias <b>partes iguales</b> de una unidad. Se escribe con dos números separados por una raya:</p><ul><li>El <b>denominador</b> (abajo) dice en cuántas partes iguales se divide la unidad.</li><li>El <b>numerador</b> (arriba) dice cuántas de esas partes tomamos.</li></ul><p>En 3/5, la unidad está dividida en 5 partes y tomamos 3. Se lee «<b>tres quintos</b>».</p><p>Para leer fracciones: con denominador 2, «medios»; 3, «tercios»; 4, «cuartos»; del 5 al 10, «quintos, sextos, séptimos, octavos, novenos, décimos»; y desde 11, se añade <b>-avos</b>: 7/12 = «siete <mark>doceavos</mark>».</p>`,
      svg("La fracción tres quintos: barra dividida en cinco partes con tres coloreadas", `${barra(30, 50, 200, 40, 5, 3, AZ)}${fr(130, 126, "3", "5", AZ, 20)}${t(206, 126, "numerador", { s: 11, c: RO })}${t(206, 152, "denominador", { s: 11, c: VE })}${t(54, 140, "tres quintos", { s: 12 })}`)],
    ["Tipos de fracciones y números mixtos", `<p>Comparando el numerador con el denominador sabemos si la fracción es menor, igual o mayor que la unidad:</p><ul><li><b>Propia</b>: numerador menor que denominador → menor que 1. Ej.: 3/4.</li><li><b>Igual a la unidad</b>: numerador y denominador iguales → vale 1. Ej.: 6/6.</li><li><b>Impropia</b>: numerador mayor que denominador → mayor que 1. Ej.: 7/4.</li></ul><p>Una fracción impropia se puede escribir como <b>número mixto</b>: un número natural y una fracción propia. Divide el numerador entre el denominador: 7 : 4 = 1 y resto 3. Entonces <mark>7/4 = 1 entero y 3/4</mark>.</p>`,
      svg("Siete cuartos son una unidad entera y tres cuartos", `${barra(20, 44, 104, 34, 4, 4, VE)}${barra(136, 44, 104, 34, 4, 3, VE)}${t(72, 98, "1 entero", { s: 12, c: VE })}${t(188, 98, "3/4", { s: 13, c: VE })}${fr(80, 140, "7", "4", RO, 18)}${t(130, 150, "=", { s: 18 })}${t(166, 150, "1 y 3/4", { s: 16, d: true, c: VE })}`)],
    ["Fracciones equivalentes", `<p>Dos fracciones son <b>equivalentes</b> si representan la <b>misma cantidad</b>, aunque se escriban con números distintos: 1/2 = 2/4 = 4/8.</p><p>Para comprobar si dos fracciones son equivalentes, <b>multiplica en cruz</b>: si los productos son iguales, lo son. ¿2/3 y 8/12? 2 × 12 = 24 y 3 × 8 = 24 → <b>sí</b>.</p><p>Para obtener fracciones equivalentes hay dos caminos:</p><ul><li><b>Amplificar</b>: multiplicar numerador y denominador por el mismo número: 2/3 → ×4 → 8/12.</li><li><b>Simplificar</b>: dividir los dos entre el mismo número: 8/12 → :4 → 2/3.</li></ul><p>Cuando ya no se puede simplificar más, decimos que es una <mark>fracción irreducible</mark>.</p>`,
      svg("Tres barras iguales con un medio, dos cuartos y cuatro octavos coloreados: fracciones equivalentes", `${barra(70, 26, 170, 30, 2, 1, MO)}${barra(70, 72, 170, 30, 4, 2, MO)}${barra(70, 118, 170, 30, 8, 4, MO)}${t(38, 46, "1/2", { s: 14 })}${t(38, 92, "2/4", { s: 14 })}${t(38, 138, "4/8", { s: 14 })}${t(130, 172, "¡la misma cantidad!", { s: 12, c: MO, d: true })}`)],
    ["Comparar fracciones", `<p>Para saber qué fracción es <b>mayor</b>, hay varios casos:</p><ul><li><b>Igual denominador</b>: es mayor la que tiene <b>mayor numerador</b>. 5/8 &gt; 3/8 (tomamos más trozos del mismo tamaño).</li><li><b>Igual numerador</b>: es mayor la que tiene <b>menor denominador</b>. 2/3 &gt; 2/5 (los tercios son trozos más grandes que los quintos).</li><li><b>Distintos los dos</b>: se buscan fracciones equivalentes con el <b>mismo denominador</b> y se comparan los numeradores.</li></ul><p>Ejemplo: ¿2/3 o 3/4? Las pasamos a doceavos: 2/3 = 8/12 y 3/4 = 9/12. Como 9 &gt; 8, <mark>3/4 &gt; 2/3</mark>.</p>`,
      svg("Comparar dos tercios y dos quintos: con el mismo numerador es mayor la de menor denominador", `${pastel(70, 82, 48, 3, 2, AZ)}${pastel(190, 82, 48, 5, 2, RO)}${t(70, 156, "2/3", { s: 16, d: true, c: AZ })}${t(190, 156, "2/5", { s: 16, d: true, c: RO })}${t(130, 160, ">", { s: 22, d: true })}`),
      P.V("fraB")],
    ["Ordenar fracciones y la recta numérica", `<p>Las fracciones también tienen su sitio en la <b>recta numérica</b>. Para colocar 3/4, divide el espacio entre 0 y 1 en <b>4 partes iguales</b> y cuenta 3.</p><p>Las fracciones propias quedan <b>entre 0 y 1</b>; las impropias, a la derecha del 1.</p><p>Para ordenar varias fracciones, lo más seguro es pasarlas todas al mismo denominador. Ordena 1/2, 3/8 y 3/4:</p><ul><li>1/2 = 4/8; 3/4 = 6/8; 3/8 se queda igual.</li><li>Comparando numeradores: 3 &lt; 4 &lt; 6.</li></ul><p>Orden: <mark>3/8 &lt; 1/2 &lt; 3/4</mark>.</p>`,
      svg("Recta numérica de cero a uno dividida en octavos con tres octavos, un medio y tres cuartos", `<path d="M20 92 H 240" stroke="var(--muted)" stroke-width="2.5"/>${[...Array(9)].map((_, i) => `<path d="M${30 + i * 25} ${i % 4 ? 86 : 80} V ${i % 4 ? 98 : 104}" stroke="var(--muted)" stroke-width="${i % 4 ? 1.4 : 2.5}"/>`).join("")}${t(30, 124, "0", { s: 13 })}${t(230, 124, "1", { s: 13 })}${[[3, "3/8", VE], [4, "1/2", AZ], [6, "3/4", RO]].map(([k, l, c], i) => `<circle cx="${30 + k * 25}" cy="92" r="6" fill="${c}"/>${t(30 + k * 25, 66 - (i % 2) * 22, l, { s: 13, c })}`).join("")}${t(130, 156, "3/8 < 1/2 < 3/4", { s: 14, d: true })}`)],
    ["Sumar y restar con igual denominador", `<p>Cuando las fracciones tienen el <b>mismo denominador</b>, los trozos son del mismo tamaño y solo hay que juntarlos o quitarlos:</p><p style="text-align:center"><b>Se suman o se restan los numeradores y se deja el mismo denominador.</b></p><ul><li>2/7 + 3/7 = <b>5/7</b></li><li>8/9 − 5/9 = <b>3/9</b> = 1/3 (simplificando)</li></ul><p>¡Nunca se suman los denominadores! Si juntas 2 séptimos y 3 séptimos, sigues teniendo séptimos, no catorceavos.</p><p>Si el resultado es impropio, pásalo a número mixto: 5/6 + 4/6 = 9/6 = <mark>1 y 3/6</mark> = 1 y 1/2.</p>`,
      svg("Dos séptimos más tres séptimos son cinco séptimos", `${barra(20, 30, 154, 28, 7, 2, AZ)}${t(214, 50, "2/7", { s: 14, c: AZ })}${barra(20, 72, 154, 28, 7, 3, VE)}${t(214, 92, "+ 3/7", { s: 14, c: VE })}<path d="M20 112 H 240" stroke="var(--ink)" stroke-width="2"/>${barra(20, 124, 154, 28, 7, 5, MO)}${t(214, 144, "= 5/7", { s: 15, d: true, c: MO })}`),
      P.V("fraB2")],
    ["Sumar y restar con distinto denominador", `<p>Si los denominadores son distintos, los trozos no son del mismo tamaño y <b>no se pueden juntar directamente</b>. Primero hay que buscar fracciones equivalentes con un <b>denominador común</b>.</p><p>Ejemplo: 1/2 + 1/3</p><ol><li>Busca un número que sea múltiplo de 2 y de 3: el <b>6</b> (su m.c.m.).</li><li>Pasa cada fracción a sextos: 1/2 = 3/6 y 1/3 = 2/6.</li><li>Suma los numeradores: 3/6 + 2/6 = <b>5/6</b>.</li></ol><p>Con la resta se hace igual: 3/4 − 1/8 = 6/8 − 1/8 = <mark>5/8</mark>.</p><p>Truco: si un denominador es múltiplo del otro (como 4 y 8), el común es el mayor.</p>`,
      svg("Un medio más un tercio: se pasan a sextos, tres sextos más dos sextos son cinco sextos", `${barra(20, 24, 108, 26, 2, 1, AZ)}${t(176, 42, "1/2 = 3/6", { s: 12, c: AZ })}${barra(20, 62, 108, 26, 3, 1, VE)}${t(176, 80, "1/3 = 2/6", { s: 12, c: VE })}${P.flecha(74, 96, 74, 112, "var(--muted)", 2)}${barra(20, 118, 108, 26, 6, 5, MO)}${t(176, 136, "= 5/6", { s: 16, d: true, c: MO })}${t(130, 170, "mismo denominador: sextos", { s: 11, c: "var(--muted)" })}`)],
    ["La fracción de un número", `<p>Muchas veces necesitamos calcular una <b>fracción de una cantidad</b>: «los 3/4 de 20 alumnos», «los 2/5 de 100 €».</p><p>Se hace en dos pasos:</p><ol><li><b>Divide</b> la cantidad entre el denominador (así sabes cuánto vale cada parte).</li><li><b>Multiplica</b> el resultado por el numerador.</li></ol><p>Ejemplo: 3/4 de 20 → 20 : 4 = 5 → 5 × 3 = <b>15</b>.</p><p>También puedes multiplicar primero y dividir después: 20 × 3 = 60 → 60 : 4 = 15.</p><p>Problema: en una clase de 25 alumnos, 2/5 van al cole andando. ¿Cuántos son? 25 : 5 = 5; 5 × 2 = <mark>10 alumnos</mark>.</p>`,
      svg("Tres cuartos de veinte: veinte puntos en cuatro grupos de cinco, tres grupos coloreados son quince", `${[...Array(4)].map((_, g) => `<rect x="${16 + g * 60}" y="30" width="48" height="74" rx="8" fill="${g < 3 ? SO : "var(--card)"}" fill-opacity="${g < 3 ? 0.3 : 1}" stroke="${NA}" stroke-width="1.8"/>${[...Array(5)].map((_, i) => `<circle cx="${30 + g * 60 + (i % 2) * 20}" cy="${46 + Math.floor(i / 2) * 22}" r="6" fill="${g < 3 ? NA : "var(--muted)"}"/>`).join("")}`).join("")}${t(130, 128, "20 : 4 = 5 en cada grupo", { s: 12 })}${t(130, 152, "3 grupos → 5 × 3 = 15", { s: 14, d: true, c: NA })}`)],
    ["Multiplicar una fracción por un número", `<p>Multiplicar una fracción por un número natural es como sumarla varias veces:</p><p style="text-align:center">3 × 2/7 = 2/7 + 2/7 + 2/7 = <b>6/7</b></p><p>Por eso la regla es: <b>se multiplica el numerador por el número y se deja el mismo denominador</b>.</p><p>Ejemplos:</p><ul><li>4 × 3/10 = 12/10 = 1 y 2/10</li><li>5 × 1/5 = 5/5 = <b>1</b></li></ul><p>Las fracciones están en la vida diaria: en las recetas («3/4 de litro de leche»), en el tiempo («un cuarto de hora» = 15 minutos), en las notas musicales o al repartir una pizza. Saber operar con ellas te ayudará a <mark>doblar una receta</mark>: 2 × 3/4 L = 6/4 L = 1 L y medio.</p>`,
      svg("Tres veces dos séptimos son seis séptimos", `${[0, 1, 2].map((i) => `${barra(20 + i * 76, 40, 70, 24, 7, 2, [AZ, VE, SO][i])}`).join("")}${t(55, 84, "2/7", { s: 12, c: AZ })}${t(131, 84, "2/7", { s: 12, c: VE })}${t(207, 84, "2/7", { s: 12, c: NA })}${t(130, 116, "3 × 2/7 =", { s: 14 })}${barra(56, 128, 148, 28, 7, 6, MO)}${t(130, 176, "6/7", { s: 13, d: true, c: MO })}`)],
  ],
  figura: ["Fracciones", P.columnas("Resumen: fracción, equivalentes, comparar y operar", [["partes iguales", "3/5", ["numerador 3", "denominador 5"], AZ], ["× o : lo mismo", "EQUIVALENTES", ["1/2 = 2/4 = 4/8", "en cruz iguales"], MO], ["mismo denominador", "COMPARAR", ["5/8 > 3/8", "2/3 > 2/5"], RO], ["denominador común", "SUMAR", ["2/7 + 3/7 = 5/7", "3/4 de 20 = 15"], VE]])],
  video: P.V("fraV", true),
  ejemplos: [
    ["Simplifica 18/24 hasta la fracción irreducible.", ["18 y 24 son pares: divide entre 2 → 9/12.", "9 y 12 son múltiplos de 3: divide entre 3 → 3/4.", "3 y 4 no tienen divisores comunes (salvo 1)."], "3/4"],
    ["Calcula 5/6 − 1/4.", ["Denominador común: m.c.m.(6, 4) = 12.", "5/6 = 10/12 y 1/4 = 3/12.", "10/12 − 3/12 = 7/12."], "7/12"],
    ["Un depósito tiene 120 litros. Se gastan los 3/8. ¿Cuántos litros quedan?", ["Cada octavo: 120 : 8 = 15 L.", "Se gastan 3 × 15 = 45 L.", "Quedan 120 − 45 = 75 L."], "75 litros"],
  ],
  errores: [
    "Sumar los denominadores: 1/4 + 1/4 no es 2/8, sino 2/4.",
    "Sumar fracciones con distinto denominador sin pasarlas antes a un denominador común.",
    "Pensar que 1/5 es mayor que 1/3 porque 5 es mayor que 3.",
    "Al amplificar o simplificar, cambiar solo el numerador o solo el denominador.",
    "Calcular la fracción de un número multiplicando por el denominador y dividiendo por el numerador.",
    "Dividir la unidad en partes que no son iguales al representar una fracción.",
  ],
  ejercicios: [
    ["Escribe cómo se leen: 5/9, 7/12 y 3/2.", "Cinco novenos, siete doceavos y tres medios."],
    ["Clasifica en propias e impropias: 4/7, 9/5, 8/8, 11/3.", "Propia: 4/7. Igual a la unidad: 8/8. Impropias: 9/5 y 11/3."],
    ["Pasa a número mixto: 13/4 y 17/5.", "3 y 1/4; 3 y 2/5."],
    ["Escribe dos fracciones equivalentes a 3/5.", "Por ejemplo, 6/10 y 9/15."],
    ["Simplifica: 15/25 y 12/18.", "3/5 y 2/3."],
    ["Ordena de menor a mayor: 5/6, 1/2, 2/3.", "1/2 = 3/6, 2/3 = 4/6, 5/6 → 1/2 < 2/3 < 5/6."],
    ["Calcula: 3/10 + 4/10 y 7/8 − 2/8.", "7/10 y 5/8."],
    ["Calcula: 1/3 + 1/6 y 3/4 − 1/2.", "2/6 + 1/6 = 3/6 = 1/2; 3/4 − 2/4 = 1/4."],
    ["Calcula los 2/3 de 45 y los 5/8 de 64.", "30 y 40."],
    ["Una receta lleva 3/4 de taza de azúcar. ¿Cuánto azúcar necesitas para hacer 3 recetas?", "3 × 3/4 = 9/4 = 2 tazas y 1/4."],
  ],
  quiz: [
    ["En 4/9, el denominador es…", ["9", "4", "13"], "El número de abajo."],
    ["7/12 se lee…", ["siete doceavos", "siete docenas", "doce séptimos"], "Desde 11 se añade -avos."],
    ["¿Cuál es impropia?", ["9/4", "4/9", "4/4"], "Numerador mayor que denominador."],
    ["Una fracción equivalente a 2/5 es…", ["4/10", "4/5", "2/10"], "Se multiplican los dos por 2."],
    ["Simplificada, 10/15 es…", ["2/3", "1/3", "5/3"], "Se dividen los dos entre 5."],
    ["¿Qué es mayor?", ["3/4", "1/4", "2/4"], "Mismo denominador: mayor numerador."],
    ["¿Qué es mayor?", ["1/3", "1/6", "1/8"], "Mismo numerador: menor denominador."],
    ["2/9 + 5/9 es…", ["7/9", "7/18", "10/9"], "Se suman los numeradores."],
    ["1/2 + 1/4 es…", ["3/4", "2/6", "2/4"], "2/4 + 1/4."],
    ["La mitad de 3/4 de 40 es…", ["15", "30", "20"], "3/4 de 40 = 30; la mitad, 15."],
  ],
  examen: [
    ["Los 3/5 de 25 son…", ["15", "5", "10"], "25 : 5 × 3."],
    ["11/4 en número mixto es…", ["2 y 3/4", "3 y 1/4", "2 y 1/4"], "11 : 4 = 2, resto 3."],
    ["5/6 − 1/3 es…", ["1/2", "4/3", "2/3"], "5/6 − 2/6 = 3/6 = 1/2."],
    ["¿Son equivalentes 3/4 y 9/12?", ["sí", "no", "solo si se suman"], "3 × 12 = 4 × 9 = 36."],
  ],
  feynman: ["Qué indican el numerador y el denominador", "Qué son las fracciones equivalentes y cómo se obtienen", "Cómo se comparan dos fracciones con distinto denominador", "Por qué no se suman los denominadores", "Cómo se calcula la fracción de un número"],
  mapa: ["FRACCIONES", [["Partes iguales", "numerador / denominador", AZ], ["Equivalentes", "amplificar · simplificar", MO], ["Comparar", "mismo denominador", RO], ["Operar", "sumar · restar · de un número", VE]]],
  tarjetas: [
    ["Numerador y denominador", "Partes que tomo / partes en que se divide la unidad."],
    ["Fracción impropia", "Numerador mayor que denominador: es mayor que 1."],
    ["Fracciones equivalentes", "Representan la misma cantidad: 1/2 = 2/4."],
    ["Amplificar / simplificar", "Multiplicar / dividir arriba y abajo por el mismo número."],
    ["Igual denominador", "Es mayor la de mayor numerador."],
    ["Igual numerador", "Es mayor la de menor denominador."],
    ["Sumar con igual denominador", "Se suman los numeradores; el denominador no cambia."],
    ["Fracción de un número", "Divide entre el denominador y multiplica por el numerador."],
  ],
  familias: ["Repartid una pizza o una tortilla en partes iguales y nombrad las fracciones.", "Usad recetas: ¿cuánto hace falta para el doble o la mitad de personas?", "Medid el tiempo en fracciones de hora: un cuarto, media hora, tres cuartos.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido numérico: fracciones propias e impropias y números mixtos; fracciones equivalentes; comparación y ordenación; suma y resta de fracciones; fracción de una cantidad; producto de una fracción por un número natural",
  ideas: ["Tiras de fracciones de cartulina para comparar y encontrar equivalencias.", "Recta numérica en el suelo para colocar fracciones con pinzas.", "Taller de recetas: escalar cantidades con fracciones."],
});
