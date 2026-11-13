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
