// Matemáticas 4º de Primaria: las fracciones. Dibujos propios en SVG.
const P = require("./_pri4a");
const { svg, t, barra, AZ, RO, VE, NA, SO, MO } = P;

// Círculo partido en n sectores iguales con k coloreados, centro (cx, cy) y radio r.
const tarta = (cx, cy, r, n, k, c = AZ) => [...Array(n)].map((_, i) => {
  const a1 = (i / n) * 2 * Math.PI - Math.PI / 2, a2 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
  const p = (a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  return `<path d="M${cx} ${cy} L ${p(a1)} A ${r} ${r} 0 0 1 ${p(a2)} Z" fill="${i < k ? c : "var(--card)"}" fill-opacity="${i < k ? 0.55 : 1}" stroke="var(--ink)" stroke-width="1.6"/>`;
}).join("");
// Fracción escrita en vertical centrada en x.
const fr = (x, y, n, d, c = "var(--ink)", s = 18) => `${t(x, y, n, { s, d: true, c })}<path d="M${x - s * 0.6} ${y + 6} H ${x + s * 0.6}" stroke="${c}" stroke-width="2"/>${t(x, y + s + 6, d, { s, d: true, c })}`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Las fracciones",
  minutos: 50,
  objetivos: ["Entender una fracción como partes iguales de una unidad", "Leer y escribir fracciones e identificar numerador y denominador", "Comparar fracciones con el mismo denominador o el mismo numerador", "Calcular la fracción de un número y sumar y restar fracciones de igual denominador"],
  claves: ["fracción", "unidad", "partes iguales", "numerador", "denominador", "medio", "tercio", "cuarto", "fracción equivalente", "fracción de un número", "fracción mayor que la unidad"],
  pregunta: ["Si partes una pizza en 8 trozos iguales y te comes 3, ¿qué parte de la pizza te has comido? ¿Cómo se escribe?", "Te has comido <b>tres octavos</b> de la pizza, que se escribe <mark>3/8</mark>. El 8 de abajo dice en cuántas partes iguales se partió la pizza y el 3 de arriba, cuántas partes te comiste. Eso es una <b>fracción</b>."],
  bloques: [
    ["¿Qué es una fracción?", `<p>Una <b>fracción</b> sirve para expresar una <mark>parte de algo</mark> que se ha dividido en partes <b>iguales</b>. Ese «algo» se llama <b>unidad</b>: una pizza, una tableta de chocolate, una hoja, una hora…</p><p>Si partimos un pastel en 4 trozos iguales, cada trozo es <b>un cuarto</b>: 1/4. Si cogemos 3 trozos, tenemos <b>tres cuartos</b>: 3/4.</p><p>¡Ojo con la palabra <b>iguales</b>! Si los trozos son de distinto tamaño, no podemos hablar de cuartos. Partir en fracciones es ser justos: todos los trozos deben ser exactamente iguales.</p>`,
      svg("Un pastel partido en cuatro partes iguales con tres coloreadas: tres cuartos", `${tarta(80, 86, 54, 4, 3, SO)}${fr(196, 74, "3", "4", RO, 26)}${t(196, 150, "tres cuartos", { s: 13, c: RO })}`)],
    ["Numerador y denominador", `<p>Una fracción tiene dos números separados por una raya:</p><ul><li>El <b>denominador</b> (abajo) indica en cuántas <mark>partes iguales</mark> se divide la unidad.</li><li>El <b>numerador</b> (arriba) indica cuántas de esas partes <mark>cogemos</mark>.</li></ul><p>En 5/6, la unidad se divide en 6 partes y cogemos 5.</p><p>Truco para recordarlo: el <b>d</b>enominador está <b>d</b>ebajo. Y el denominador «da nombre» a las partes: medios, tercios, cuartos…</p>`,
      svg("Fracción cinco sextos con el numerador arriba y el denominador abajo", `${fr(70, 76, "5", "6", AZ, 34)}${t(150, 64, "numerador:", { s: 11, a: "start", c: VE })}${t(150, 80, "partes que cojo", { s: 11, a: "start" })}${t(150, 118, "denominador:", { s: 11, a: "start", c: RO })}${t(150, 134, "partes iguales", { s: 11, a: "start" })}${barra(30, 150, 200, 18, 6, 5, AZ)}`)],
    ["Cómo se leen las fracciones", `<p>Primero se lee el <b>numerador</b> y después el <b>denominador</b>, con un nombre especial:</p>${P.tb(["denominador", "se lee", "ejemplo"], [["2", "medios", "1/2 un medio"], ["3", "tercios", "2/3 dos tercios"], ["4", "cuartos", "3/4 tres cuartos"], ["5 al 9", "quintos… novenos", "4/7 cuatro séptimos"], ["10", "décimos", "7/10 siete décimos"]])}<p>Si el denominador es <b>mayor que 10</b>, se añade la terminación <mark>-avos</mark>: 5/12 se lee «cinco doceavos» y 3/15, «tres quinceavos».</p><p>En la vida diaria decimos «media hora» (1/2 hora) o «un cuarto de kilo».</p>`,
      P.filas("Lectura de fracciones", [["1/2", "un medio", AZ], ["2/3", "dos tercios", VE], ["7/10", "siete décimos", SO], ["5/12", "cinco doceavos", RO]]),
      P.V("fraB")],
    ["Representar fracciones", `<p>Para <b>representar</b> una fracción con un dibujo:</p><ol><li>Dibuja la unidad: un rectángulo, un círculo, una tira…</li><li>Divídela en tantas partes iguales como diga el <b>denominador</b>.</li><li>Colorea tantas partes como diga el <b>numerador</b>.</li></ol><p>También podemos tomar como unidad un <b>grupo de objetos</b>. En una caja de 6 huevos, 2 huevos son 2/6 de la caja.</p><p>Cuando el numerador y el denominador son iguales (4/4, 8/8), hemos cogido todas las partes: la fracción vale <mark>1 unidad entera</mark>.</p>`,
      svg("Tiras que representan un medio, dos tercios, tres cuartos y cuatro cuartos", `${[[2, 1, AZ, "1/2"], [3, 2, VE, "2/3"], [4, 3, SO, "3/4"], [4, 4, RO, "4/4 = 1"]].map(([n, k, c, f], i) => `${barra(20, 24 + i * 36, 160, 24, n, k, c)}${t(220, 41 + i * 36, f, { s: 13, c })}`).join("")}`)],
    ["Comparar fracciones", `<p>¿Qué fracción es mayor? Hay dos casos fáciles:</p><ul><li><b>Mismo denominador</b>: es mayor la que tiene <mark>mayor numerador</mark>, porque cogemos más trozos del mismo tamaño. 5/8 &gt; 3/8.</li><li><b>Mismo numerador</b>: es mayor la que tiene <mark>menor denominador</mark>, porque sus trozos son más grandes. 1/3 &gt; 1/5.</li></ul><p>El segundo caso sorprende, pero piénsalo: si repartes una pizza entre 3 amigos, cada trozo es más grande que si la repartes entre 5. ¡Cuantas más partes, más pequeñas son!</p>`,
      svg("Comparar un tercio y un quinto: el trozo de un tercio es mayor", `${barra(30, 40, 200, 26, 3, 1, VE)}${t(130, 30, "1/3", { s: 13, c: VE })}${barra(30, 100, 200, 26, 5, 1, RO)}${t(130, 90, "1/5", { s: 13, c: RO })}${t(130, 156, "1/3 &gt; 1/5", { s: 16, c: AZ })}`)],
    ["Fracciones equivalentes", `<p>Dos fracciones son <b>equivalentes</b> cuando representan <mark>la misma cantidad</mark>, aunque se escriban con números distintos.</p><p>Si coloreas la mitad de una tira, da igual partirla en 2 partes y colorear 1, en 4 y colorear 2, o en 8 y colorear 4:</p><p style="text-align:center"><b>1/2 = 2/4 = 4/8</b></p><p>Se obtienen fracciones equivalentes <b>multiplicando</b> (o dividiendo) el numerador y el denominador por el <b>mismo número</b>: 1/3 → multiplicando por 2 → 2/6.</p>`,
      svg("Tres tiras con un medio, dos cuartos y cuatro octavos coloreados: son la misma cantidad", `${[[2, 1, "1/2"], [4, 2, "2/4"], [8, 4, "4/8"]].map(([n, k, f], i) => `${barra(30, 24 + i * 40, 160, 26, n, k, MO)}${t(220, 43 + i * 40, f, { s: 14, c: MO })}`).join("")}<path d="M110 18 V 140" stroke="${RO}" stroke-width="2" stroke-dasharray="4 4"/>${t(130, 164, "1/2 = 2/4 = 4/8", { s: 14, c: RO })}`)],
    ["Fracción de un número", `<p>Muchas veces tenemos que calcular una fracción de una <b>cantidad</b>: «los 3/4 de 20 alumnos van en autobús». Se hace en dos pasos:</p><ol><li><b>Divide</b> la cantidad entre el <b>denominador</b>: 20 : 4 = 5. Así sabes cuánto es 1/4.</li><li><b>Multiplica</b> el resultado por el <b>numerador</b>: 5 × 3 = 15.</li></ol><p>Por tanto, <mark>3/4 de 20 = 15</mark>. Van en autobús 15 alumnos.</p><p>Casos muy usados: la mitad (1/2) es dividir entre 2; la tercera parte (1/3), entre 3; la cuarta parte (1/4), entre 4.</p>`,
      svg("Veinte alumnos en cuatro grupos de cinco: tres grupos son tres cuartos, es decir, quince", `${[...Array(20)].map((_, i) => { const g = Math.floor(i / 5); return `<circle cx="${30 + g * 60 + (i % 5) * 10}" cy="${70 + (i % 2) * 14}" r="5.5" fill="${g < 3 ? AZ : "var(--line)"}"/>`; }).join("")}${[0, 1, 2, 3].map((g) => `<rect x="${20 + g * 60}" y="56" width="58" height="42" rx="8" fill="none" stroke="${g < 3 ? AZ : "var(--muted)"}" stroke-width="1.6"/>`).join("")}${t(130, 36, "20 : 4 = 5 en cada grupo", { s: 12, c: "var(--muted)" })}${t(130, 140, "3/4 de 20 = 5 × 3 = 15", { s: 15, c: RO })}`),
      P.V("fraB2")],
    ["Sumar y restar con igual denominador", `<p>Si dos fracciones tienen el <b>mismo denominador</b>, sumarlas y restarlas es muy fácil: se <mark>suman o restan los numeradores</mark> y se deja el mismo denominador.</p><p style="text-align:center">2/7 + 3/7 = 5/7 &nbsp;&nbsp;&nbsp; 6/9 − 4/9 = 2/9</p><p>Tiene lógica: si tengo 2 séptimos y me dan 3 séptimos más, tengo 5 séptimos. Los trozos siguen siendo del mismo tamaño (séptimos); solo cambia cuántos tengo.</p><p>¡Error frecuente! <b>No se suman los denominadores</b>: 2/7 + 3/7 no es 5/14.</p>`,
      svg("Suma de dos séptimos más tres séptimos igual a cinco séptimos", `${barra(30, 34, 200, 24, 7, 2, AZ)}${t(130, 26, "2/7", { s: 12, c: AZ })}${t(130, 76, "+", { s: 16 })}${barra(30, 84, 200, 24, 7, 3, VE)}${t(130, 122, "3/7", { s: 12, c: VE })}${t(130, 156, "= 5/7 (el denominador no cambia)", { s: 13, c: RO })}`)],
    ["Fracciones mayores que la unidad", `<p>Si comparamos el numerador con el denominador, hay tres casos:</p><ul><li><b>Numerador menor</b> que el denominador: la fracción es <b>menor que 1</b>. 3/5 (no llegamos a la unidad entera).</li><li><b>Iguales</b>: la fracción es <b>igual a 1</b>. 5/5.</li><li><b>Numerador mayor</b>: la fracción es <mark>mayor que 1</mark>. 7/5 (necesitamos más de una unidad).</li></ul><p>Por ejemplo, 7/4 de pizza son una pizza entera (4/4) y 3/4 de otra. Por eso, en una fiesta, si cada invitado come 3/4 de pizza, ¡con 2 invitados ya hace falta más de una pizza!</p>`,
      svg("Siete cuartos son una unidad entera y tres cuartos más", `${tarta(70, 84, 46, 4, 4, NA)}${t(130, 90, "+", { s: 20 })}${tarta(190, 84, 46, 4, 3, NA)}${t(70, 152, "4/4 = 1", { s: 13, c: NA })}${t(190, 152, "3/4", { s: 13, c: NA })}${t(130, 26, "7/4 &gt; 1", { s: 15, c: RO })}`)],
  ],
  figura: ["Las fracciones", P.columnas("Resumen: qué es una fracción, sus términos, cómo se comparan y la fracción de un número", [["partes iguales", "FRACCIÓN", ["de una unidad", "3/4, 1/2…"], AZ], ["arriba / abajo", "TÉRMINOS", ["numerador: cojo", "denominador: parto"], VE], ["igual denominador", "COMPARAR", ["mayor numerador", "→ mayor fracción"], RO], ["3/4 de 20", "DE UN NÚMERO", [": denominador", "× numerador"], SO]])],
  video: P.V("fraV", true),
  ejemplos: [
    ["Escribe la fracción y cómo se lee: una tableta de 12 onzas de la que se han comido 5.", ["La tableta se divide en 12 partes: denominador 12.", "Se han comido 5: numerador 5.", "Como el denominador es mayor que 10, se lee con -avos."], "5/12, cinco doceavos"],
    ["Ordena de menor a mayor: 4/9, 7/9, 2/9.", ["Las tres tienen el mismo denominador.", "Se ordenan por el numerador: 2 &lt; 4 &lt; 7."], "2/9 &lt; 4/9 &lt; 7/9"],
    ["En una clase de 24 alumnos, los 2/3 tienen mascota. ¿Cuántos alumnos tienen mascota?", ["Divido entre el denominador: 24 : 3 = 8.", "Multiplico por el numerador: 8 × 2 = 16."], "16 alumnos tienen mascota."],
  ],
  errores: [
    "Partir la unidad en trozos que no son iguales.",
    "Confundir numerador y denominador (el denominador va debajo).",
    "Pensar que 1/5 es mayor que 1/3 porque 5 es mayor que 3.",
    "Sumar los denominadores: 1/4 + 2/4 = 3/4, no 3/8.",
    "Al calcular la fracción de un número, multiplicar por el denominador en lugar de dividir.",
  ],
  ejercicios: [
    ["¿Cómo se leen 3/8, 1/2 y 9/11?", "Tres octavos, un medio y nueve onceavos."],
    ["Escribe con números: «cuatro quintos» y «siete décimos».", "4/5 y 7/10."],
    ["En la fracción 6/10, ¿qué indica el 10? ¿Y el 6?", "El 10, en cuántas partes iguales se divide la unidad; el 6, cuántas se cogen."],
    ["Escribe &gt; o &lt;: 3/7 __ 5/7 y 1/4 __ 1/6.", "3/7 &lt; 5/7; 1/4 &gt; 1/6."],
    ["Escribe dos fracciones equivalentes a 1/3.", "Por ejemplo, 2/6 y 3/9."],
    ["Calcula 1/5 de 35 y 3/5 de 35.", "7 y 21."],
    ["Calcula 2/9 + 5/9 y 8/10 − 3/10.", "7/9 y 5/10."],
    ["¿Es 9/8 mayor, menor o igual que la unidad?", "Mayor, porque el numerador es mayor que el denominador."],
    ["Una botella tiene 1 000 ml de agua y bebo 1/4. ¿Cuántos mililitros he bebido?", "1 000 : 4 = 250 ml."],
    ["Lola ha leído 3/8 de un libro por la mañana y 2/8 por la tarde. ¿Qué fracción ha leído? ¿Cuánto le falta?", "Ha leído 5/8 y le faltan 3/8."],
  ],
  quiz: [
    ["En 4/7, el denominador es…", ["7", "4", "11"], "Va debajo de la raya."],
    ["¿Cómo se lee 2/3?", ["dos tercios", "dos terceros", "tres medios"], "Denominador 3: tercios."],
    ["¿Qué fracción es mayor?", ["5/6", "2/6", "4/6"], "Mismo denominador, mayor numerador."],
    ["¿Qué fracción es mayor?", ["1/2", "1/8", "1/5"], "Mismo numerador, menor denominador."],
    ["1/2 es equivalente a…", ["3/6", "2/6", "1/4"], "3/6 es la mitad."],
    ["La mitad de 18 es…", ["9", "6", "36"], "18 : 2."],
    ["3/4 de 12 =", ["9", "3", "16"], "12 : 4 = 3; 3 × 3 = 9."],
    ["3/10 + 4/10 =", ["7/10", "7/20", "12/10"], "Se suman los numeradores."],
    ["¿Qué fracción vale exactamente 1?", ["6/6", "1/6", "6/1"], "Numerador = denominador."],
    ["5/12 se lee…", ["cinco doceavos", "cinco docenas", "cinco duodécimos"], "Más de 10: -avos."],
  ],
  examen: [
    ["Una pizza en 8 trozos; me como 3. ¿Qué fracción queda?", ["5/8", "3/8", "8/5"], "8 − 3 = 5 trozos."],
    ["¿Qué fracción es mayor que la unidad?", ["5/4", "4/5", "4/4"], "Numerador mayor."],
    ["2/5 de 40 =", ["16", "8", "20"], "40 : 5 = 8; 8 × 2."],
    ["7/9 − 2/9 =", ["5/9", "5/0", "9/9"], "Se restan los numeradores."],
  ],
  feynman: ["Qué es una fracción y por qué las partes deben ser iguales", "Qué indican el numerador y el denominador", "Por qué 1/3 es mayor que 1/5", "Cómo se calcula la fracción de un número", "Cómo se suman fracciones con el mismo denominador"],
  mapa: ["LAS FRACCIONES", [["Qué es", "partes iguales de una unidad", AZ], ["Términos", "numerador / denominador", VE], ["Comparar", "mismo denominador o numerador", RO], ["Operar", "de un número · sumar y restar", SO]]],
  tarjetas: [
    ["Fracción", "Expresa partes iguales de una unidad."],
    ["Denominador", "En cuántas partes iguales se divide la unidad (abajo)."],
    ["Numerador", "Cuántas partes se cogen (arriba)."],
    ["Fracciones equivalentes", "Representan la misma cantidad: 1/2 = 2/4."],
    ["Fracción de un número", "Dividir entre el denominador y multiplicar por el numerador."],
    ["Igual denominador", "Se suman o restan solo los numeradores."],
    ["Fracción igual a 1", "Numerador y denominador iguales."],
    ["Denominador mayor que 10", "Se lee con -avos: doceavos, quinceavos."],
  ],
  familias: ["Al partir una pizza, una tortilla o una tableta, poned nombre a las fracciones.", "En la cocina, usad medio litro, un cuarto de kilo, media taza…", "Calculad fracciones de cantidades: la mitad de la paga, un tercio de los cromos.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido numérico: la fracción como parte de la unidad y de una colección; lectura y escritura; comparación con igual numerador o denominador; fracciones equivalentes sencillas; fracción de un número; suma y resta con igual denominador",
  ideas: ["Tiras de fracciones de papel para comparar y descubrir equivalencias.", "Recetas de cocina con fracciones para calcular ingredientes.", "Juego de cartas emparejando fracciones con su dibujo."],
});

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
// Recta de 0 a 2 dividida en cuartos con marcas [cuartos, texto, color].
const rectaFr = (marcas) => `<path d="M20 92 H 240" stroke="var(--ink)" stroke-width="2"/>${[...Array(9)].map((_, i) => `<path d="M${20 + i * 27.5} ${i % 4 ? 86 : 80} V ${i % 4 ? 98 : 104}" stroke="var(--ink)" stroke-width="${i % 4 ? 1.2 : 2}"/>`).join("")}${[0, 1, 2].map((n) => t(20 + n * 110, 124, String(n), { s: 14, d: true })).join("")}${marcas.map(([k, txt, c]) => `<circle cx="${20 + k * 27.5}" cy="92" r="6" fill="${c}"/>${t(20 + k * 27.5, 68, txt, { s: 13, d: true, c })}`).join("")}`;
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Situar fracciones en la recta numérica", "Resolver problemas con fracciones de una cantidad", "Escribir fracciones mayores que la unidad como números mixtos", "Relacionar fracciones sencillas con decimales y con la vida diaria"],
  lectura: { titulo: "La pizza de los viernes", html: `<p>Los viernes, en casa de Martín, se cena pizza. Su padre siempre compra una familiar cortada en <b>8 trozos</b> iguales.</p><p>Este viernes, Martín tenía mucha hambre y se comió 3 trozos. Su hermana Sofía se comió 2. Su padre, 2 más.</p><p>—Queda un trozo —dijo Sofía—. ¿Para quién es?</p><p>—Para la abuela, que llega luego —dijo el padre.</p><p>Martín cogió una servilleta y empezó a dibujar un círculo partido en ocho.</p><p>—Yo me he comido <b>3/8</b> de la pizza, tú <b>2/8</b> y papá otros <b>2/8</b>. Entre todos, <b>7/8</b>. Y para la abuela, <b>1/8</b>.</p><p>—¿Y por qué tú te has comido más que yo? —protestó Sofía.</p><p>—Porque 3/8 es mayor que 2/8. Si el denominador es el mismo, gana el que tiene el numerador más grande.</p><p>—Pues la semana que viene —dijo Sofía— pedimos dos pizzas y me como <b>10/8</b>.</p><p>—¡Eso es más de una pizza entera! —rio el padre—. Una pizza y dos trozos de otra.</p><p>Martín sonrió y apuntó en la servilleta: 10/8 = 1 y 2/8. Las matemáticas, pensó, también saben a pizza.</p>` },
  tras: {
    "Representar fracciones": [
      ["Fracciones en la recta numérica", `<p>Las fracciones también son números, y por eso tienen su lugar en la <b>recta numérica</b>.</p><p>Para situar <b>3/4</b>:</p><ol><li>Fíjate en el <b>denominador</b>: 4. Divide el trozo de recta entre 0 y 1 en <mark>4 partes iguales</mark>.</li><li>Fíjate en el <b>numerador</b>: 3. Cuenta 3 partes desde el 0.</li><li>Marca el punto: ahí está 3/4.</li></ol><p>Si sigues contando cuartos después del 1, llegas a fracciones mayores que la unidad: 5/4, 6/4, 7/4… y al llegar a <b>8/4</b> estás justo en el 2.</p><p>La recta nos ayuda a ver cosas importantes:</p><ul><li><b>1/2 y 2/4</b> caen en el mismo punto: son fracciones equivalentes.</li><li>4/4 cae exactamente en el <b>1</b>.</li><li>Cuanto más a la derecha, mayor es la fracción: 1/4 &lt; 2/4 &lt; 3/4.</li></ul><p>Una regla, una cinta métrica o una jarra con rayitas son rectas numéricas de la vida real. En la jarra, la marca de medio litro está justo en la mitad entre 0 y 1 litro.</p>`,
        svg("Recta numérica de 0 a 2 dividida en cuartos con 3/4 y 5/4 marcados", rectaFr([[3, "3/4", cAZ], [5, "5/4", cRO]]) + t(130, 160, "cada rayita es 1/4", { s: 12, c: "var(--muted)" })), ["UiJZwbqT06U", "Ubicación de fracciones en la recta numérica", "Matemáticas profe Alex", 5251676]],
    ],
    "Fracción de un número": [
      ["Problemas con fracciones", `<p>Las fracciones aparecen en muchos problemas. Lo importante es saber <b>qué es la unidad</b> (el total) y qué parte nos piden.</p><p><b>Problema 1.</b> <i>Un libro tiene 120 páginas. Lucía ha leído 2/3. ¿Cuántas páginas ha leído? ¿Cuántas le faltan?</i></p><ol><li>1/3 de 120 = 120 : 3 = 40 páginas.</li><li>2/3 de 120 = 40 × 2 = <b>80</b> páginas leídas.</li><li>Le faltan 120 − 80 = <b>40</b> páginas. También se puede pensar que le falta 1/3, que son 40 páginas.</li></ol><p><b>Problema 2.</b> <i>En una clase de 28 alumnos, 1/4 van al colegio en bici. ¿Cuántos no van en bici?</i></p><ol><li>1/4 de 28 = 28 : 4 = 7 van en bici.</li><li>No van en bici 28 − 7 = <b>21</b> alumnos, que son los 3/4.</li></ol><p><b>Problema 3.</b> <i>Pablo tenía 36 cromos. Regaló 1/3 a su hermano y 1/4 a su prima. ¿Cuántos cromos le quedan?</i></p><ol><li>1/3 de 36 = 36 : 3 = <b>12</b> cromos al hermano.</li><li>1/4 de 36 = 36 : 4 = <b>9</b> cromos a la prima.</li><li>Ha regalado 12 + 9 = 21. Le quedan 36 − 21 = <b>15</b> cromos.</li></ol><p>Fíjate en que no podemos sumar 1/3 y 1/4 directamente, porque tienen distinto denominador. Por eso calculamos primero cada parte por separado.</p><p>Un truco muy útil: la parte que falta para completar la unidad se calcula restando del total. Si ya se ha gastado 3/5, queda <mark>2/5</mark>, porque 3/5 + 2/5 = 5/5 = 1.</p><p>Haz siempre un <b>dibujo</b>: una barra dividida en partes iguales ayuda mucho a ver qué parte es cada cosa.</p>`,
        svg("Barra de 120 páginas dividida en tercios: dos tercios leídos (80) y uno pendiente (40)", `${barra(20, 64, 220, 40, 3, 2, cVE)}${t(130, 46, "120 páginas", { s: 12, c: "var(--muted)" })}${t(93, 130, "2/3 = 80 leídas", { s: 12, c: cVE })}${t(203, 130, "1/3 = 40", { s: 12, c: cRO })}${t(130, 160, "120 : 3 = 40 → 40 × 2 = 80", { s: 12 })}`)],
    ],
    "Fracciones mayores que la unidad": [
      ["Los números mixtos", `<p>Cuando una fracción es mayor que la unidad, podemos escribirla de otra manera: separando las <b>unidades enteras</b> de la parte que sobra. Es lo que se llama un <mark>número mixto</mark>.</p><p>Por ejemplo, <b>7/4</b>: con 4 cuartos formamos una unidad entera, y sobran 3 cuartos. Entonces 7/4 = <b>1 y 3/4</b> (se lee «uno y tres cuartos»).</p><p>Para pasar de fracción a número mixto, <b>dividimos</b> el numerador entre el denominador:</p><ul><li>El <b>cociente</b> son las unidades enteras.</li><li>El <b>resto</b> es el numerador de la fracción que sobra, con el mismo denominador.</li></ul><p>11/3 → 11 : 3 = 3, resto 2 → <b>3 y 2/3</b>.</p><p>Y al revés, para pasar de número mixto a fracción: multiplicamos las unidades por el denominador y sumamos el numerador. 2 y 1/5 → 2 × 5 + 1 = 11 → <b>11/5</b>.</p><p>Los números mixtos se usan mucho en la vida diaria: «hora y media», «dos kilos y cuarto», «tres vasos y medio de harina».</p>`,
        svg("Siete cuartos como un círculo entero y tres cuartos de otro: 1 y 3/4", `${tarta(72, 80, 44, 4, 4, cAZ)}${tarta(188, 80, 44, 4, 3, cAZ)}${t(130, 86, "+", { s: 22, d: true })}${t(130, 156, "7/4 = 1 y 3/4", { s: 18, d: true, c: cRO })}`), ["iu1Cz5vI9F0", "Ubicación de números mixtos en la recta numérica", "Matemáticas profe Alex", 1162605]],
    ],
  },
  final: [
    ["Fracciones y decimales", `<p>Algunas fracciones se pueden escribir también como <b>números decimales</b>. Basta con <mark>dividir el numerador entre el denominador</mark>, o buscar una fracción equivalente con denominador 10 o 100.</p><ul><li><b>1/2</b> = 5/10 = <b>0,5</b> (la mitad).</li><li><b>1/4</b> = 25/100 = <b>0,25</b> (la cuarta parte).</li><li><b>3/4</b> = 75/100 = <b>0,75</b> (tres cuartos).</li><li><b>1/5</b> = 2/10 = <b>0,2</b>.</li><li><b>1/10</b> = <b>0,1</b> (una décima).</li></ul><p>Esto lo usamos sin darnos cuenta con el <b>dinero</b>: medio euro es 0,50 €; un cuarto de euro serían 0,25 €. Y con las <b>medidas</b>: medio litro es 0,5 L y un cuarto de kilo, 0,25 kg (250 gramos).</p><p>¿Cuándo usar cada forma? Las fracciones son muy cómodas para <b>repartir</b> («un tercio de la tarta»), y los decimales son más cómodos para <b>medir y comparar</b> («0,75 L»).</p><p>¿Y si la fracción no da un decimal sencillo? Por ejemplo, 1/3 = 1 : 3 = 0,333…, con treses que no se acaban nunca. En esos casos solemos dejar la fracción tal cual, porque es más exacta. Ya lo estudiarás en cursos siguientes.</p><p>Aprende de memoria las más usadas: medio (0,5), un cuarto (0,25) y tres cuartos (0,75). ¡Te ahorrarán muchas cuentas!</p>`,
      L6.filas("Fracción y decimal", [["1/2", "0,5", cAZ], ["1/4", "0,25", cVE], ["3/4", "0,75", cNA], ["1/10", "0,1", cRO]])],
    ["Fracciones en la vida diaria", `<p>Las fracciones están por todas partes, aunque no siempre las escribamos con números:</p><ul><li><b>En el reloj</b>: un <b>cuarto de hora</b> son 15 minutos (1/4 de 60); <b>media hora</b>, 30 minutos; y <b>tres cuartos de hora</b>, 45 minutos.</li><li><b>En la cocina</b>: las recetas piden «medio vaso de leche» o «un cuarto de kilo de azúcar».</li><li><b>En la música</b>: las figuras tienen nombres de fracciones. Una <b>blanca</b> dura la mitad que una redonda, y una <b>negra</b>, la cuarta parte.</li><li><b>En el deporte</b>: un partido de baloncesto se divide en cuatro <b>cuartos</b>; uno de fútbol, en dos <b>mitades</b> o partes.</li><li><b>En las tiendas</b>: «rebajas de la mitad de precio» o «llévate un tercio más gratis».</li><li><b>En el depósito</b> del coche, el indicador marca 1/4, 1/2, 3/4 o lleno.</li></ul><p>También en el lenguaje: decimos que alguien se ha comido «la mitad del bocadillo» o que hemos hecho «un tercio del camino».</p><p>Busca hoy tres fracciones a tu alrededor. ¡Seguro que las encuentras antes de la cena!</p>`,
      H6.rueda("Fracciones", "VIDA DIARIA", [["reloj", cAZ], ["cocina", cVE], ["música", cNA], ["deporte", cRO]])],
  ],
  ejemplos: [
    ["Escribe 13/4 como número mixto.", ["13 : 4 = 3, resto 1.", "3 unidades enteras y sobra 1/4."], "3 y 1/4."],
    ["Una botella de 1 L está llena hasta los 3/4. ¿Cuántos mililitros tiene?", ["1 L = 1 000 ml.", "1/4 de 1 000 = 250; × 3."], "750 ml."],
  ],
  errores: ["Dividir la recta en partes según el numerador en lugar del denominador.", "Al pasar a número mixto, cambiar el denominador de la parte que sobra."],
  ejercicios: [
    ["b", "Escribe 5/3 como número mixto.", "1 y 2/3."],
    ["b", "¿Cuántos minutos son tres cuartos de hora?", "45 minutos."],
    ["b", "Escribe 1/2 y 1/4 como decimales.", "0,5 y 0,25."],
    ["b", "¿En cuántas partes divides la recta entre 0 y 1 para situar 2/5?", "En 5 partes."],
    ["b", "Escribe como fracción: 1 y 1/2.", "3/2."],
    ["m", "Un libro de 90 páginas: he leído 2/3. ¿Cuántas me faltan?", "30 páginas."],
    ["m", "Escribe 17/5 como número mixto.", "3 y 2/5."],
    ["m", "Ordena: 3/4, 1/2, 5/4, 1.", "1/2, 3/4, 1, 5/4."],
    ["m", "¿Cuántos gramos son 3/4 de kilo?", "750 g."],
    ["m", "En una clase de 24, 3/8 juegan al baloncesto. ¿Cuántos no juegan?", "24 − 9 = 15."],
    ["a", "Dibuja una recta de 0 a 2 y sitúa 1/3, 4/3 y 2.", "Divide cada unidad en 3 partes."],
    ["a", "Una receta para 4 personas lleva 3/4 de kilo de harina. ¿Cuánta harina necesitas para 8?", "6/4 = 1 y 1/2 kg."],
    ["a", "Busca en casa cinco objetos o situaciones con fracciones y explica cada una.", "Respuesta abierta."],
    ["a", "Inventa un problema de pizza con números mixtos y resuélvelo.", "Respuesta abierta."],
  ],
  quiz: [
    ["9/4 como número mixto es…", ["2 y 1/4", "9 y 1/4", "1 y 4/9"], "Mixtos."],
    ["3/4 en decimal es…", ["0,75", "0,34", "3,4"], "Decimales."],
    ["Un cuarto de hora son…", ["15 minutos", "25 minutos", "4 minutos"], "Vida diaria."],
    ["En la recta, 4/4 está en…", ["el 1", "el 4", "el 0"], "Recta."],
    ["Si he gastado 2/7, me quedan…", ["5/7", "2/7", "7/2"], "Problemas."],
  ],
  examen: [
    ["En la lectura, ¿qué fracción de pizza quedó para la abuela?", ["1/8", "3/8", "7/8"], "Lectura."],
    ["2 y 3/5 como fracción es…", ["13/5", "6/5", "23/5"], "Mixtos."],
  ],
  tarjetas: [
    ["Recta numérica", "Divide de 0 a 1 según el denominador; cuenta según el numerador."],
    ["Problemas", "Fracción de un total y la parte que falta: 2/3 leídos, falta 1/3."],
    ["Números mixtos", "Divide: el cociente son enteros y el resto, la fracción. 7/4 = 1 y 3/4."],
    ["Decimales y vida", "1/2 = 0,5; 1/4 = 0,25; 3/4 = 0,75; cuarto de hora = 15 min."],
  ],
  glosario: [
    ["Fracción", "Número que expresa partes iguales de una unidad."],
    ["Numerador", "Número de arriba: partes que se toman."],
    ["Denominador", "Número de abajo: partes iguales en que se divide la unidad."],
    ["Recta numérica", "Línea donde se colocan los números en orden."],
    ["Unidad", "El total que se divide en partes."],
    ["Número mixto", "Número formado por enteros y una fracción."],
    ["Fracción equivalente", "Fracción que representa la misma cantidad."],
    ["Fracción impropia", "Fracción mayor que la unidad."],
    ["Mitad", "Una de las dos partes iguales: 1/2."],
    ["Cuarto", "Una de las cuatro partes iguales: 1/4."],
    ["Tercio", "Una de las tres partes iguales: 1/3."],
    ["Decimal", "Número con coma que expresa partes de la unidad."],
  ],
  situacion: {
    titulo: "Recetario de la clase",
    reto: "La clase crea un recetario real usando fracciones en las cantidades.",
    pasos: ["Cada grupo trae una receta sencilla de casa.", "Escribid las cantidades con fracciones y números mixtos.", "Calculad las cantidades para el doble y la mitad de personas.", "Montad el recetario con dibujos de las fracciones."],
    producto: "Un recetario ilustrado con cantidades en fracciones.",
    evaluacion: ["Representa fracciones con dibujos y en la recta.", "Calcula fracciones de cantidades.", "Usa números mixtos.", "Relaciona fracciones y decimales."],
  },
});
