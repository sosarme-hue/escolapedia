// Matemáticas 3º de Primaria: las fracciones (mitad, tercio y cuarto). Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, barra, AZ, RO, VE, NA, SO, MO } = P;

// Círculo partido en n sectores iguales con k coloreados.
const tarta = (cx, cy, r, n, k, c = AZ) => [...Array(n)].map((_, i) => {
  const a1 = (i / n) * 2 * Math.PI - Math.PI / 2, a2 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
  const p = (a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  return `<path d="M${cx} ${cy} L ${p(a1)} A ${r} ${r} 0 0 1 ${p(a2)} Z" fill="${i < k ? c : "var(--card)"}" fill-opacity="${i < k ? 0.55 : 1}" stroke="var(--ink)" stroke-width="1.6"/>`;
}).join("");
// Fracción en vertical centrada en x.
const fr = (x, y, n, d, c = "var(--ink)", s = 18) => `${t(x, y, n, { s, d: true, c })}<path d="M${x - s * 0.6} ${y + 6} H ${x + s * 0.6}" stroke="${c}" stroke-width="2"/>${t(x, y + s + 6, d, { s, d: true, c })}`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Las fracciones: mitad, tercio y cuarto",
  minutos: 45,
  objetivos: ["Entender que una fracción son partes iguales de un todo", "Reconocer y representar un medio, un tercio y un cuarto", "Leer y escribir fracciones sencillas y conocer el numerador y el denominador", "Calcular la mitad, la tercera parte y la cuarta parte de un número"],
  claves: ["fracción", "unidad", "partes iguales", "mitad", "medio", "tercio", "cuarto", "numerador", "denominador", "tercera parte", "cuarta parte", "entero"],
  pregunta: ["Si partes una pizza en 4 trozos iguales y te comes 1, ¿qué parte de la pizza te has comido?", "Te has comido <b>un cuarto</b> de pizza, que se escribe <mark>1/4</mark>. El 4 de abajo dice en cuántos trozos iguales partimos la pizza y el 1 de arriba, cuántos trozos te has comido. ¡Eso es una <b>fracción</b>!"],
  bloques: [
    ["Partes iguales", `<p>Cuando partimos algo (una pizza, una hoja, una barra de pan) en <b>partes iguales</b>, cada parte es una <mark>fracción</mark> del todo. El todo se llama <b>unidad</b>.</p><p>La palabra clave es <b>iguales</b>. Si partimos un bocadillo en dos trozos, uno grande y otro pequeño, ¡eso no son mitades! Para que sean fracciones, todos los trozos deben tener <b>el mismo tamaño</b>.</p><p>Por eso, cuando repartimos un pastel entre amigos, intentamos que todos los trozos sean iguales: así el reparto es justo.</p>`,
      svg("Un cuadrado partido en dos partes iguales y otro en dos partes distintas", `<rect x="26" y="30" width="80" height="80" fill="${VE}" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/><path d="M66 30 V 110" stroke="var(--ink)" stroke-width="2"/>${t(66, 136, "iguales ✔", { s: 14, c: VE })}<rect x="154" y="30" width="80" height="80" fill="${RO}" fill-opacity=".2" stroke="var(--ink)" stroke-width="2"/><path d="M180 30 V 110" stroke="var(--ink)" stroke-width="2"/>${t(194, 136, "distintas ✘", { s: 14, c: RO })}${t(130, 166, "solo hay fracción con partes iguales", { s: 11.5, c: "var(--muted)" })}`)],
    ["La mitad o un medio", `<p>Si partimos la unidad en <b>2 partes iguales</b>, cada parte es <mark>un medio</mark> o <b>la mitad</b>. Se escribe <b>1/2</b>.</p><p>Dos medios forman la unidad entera: 1/2 + 1/2 = 2/2 = 1.</p><p>Usamos la mitad muchísimo: «media hora», «medio kilo», «medio litro de leche», «la mitad de la clase». Para partir una hoja por la mitad, la doblamos de forma que los dos lados coincidan.</p>`,
      svg("Una pizza partida en dos mitades con una coloreada: un medio", `${tarta(80, 86, 54, 2, 1, SO)}${fr(196, 70, "1", "2", RO, 28)}${t(196, 150, "un medio", { s: 14, c: RO })}`)],
    ["Un tercio", `<p>Si partimos la unidad en <b>3 partes iguales</b>, cada parte es <mark>un tercio</mark>. Se escribe <b>1/3</b>.</p><p>Si cogemos dos de esas partes, tenemos <b>dos tercios</b>: 2/3. Y tres tercios forman la unidad: 3/3 = 1.</p><p>Ejemplo: una tableta de chocolate de 3 filas. Si te comes una fila, te has comido 1/3 de la tableta. Si te comes dos filas, 2/3.</p><p>Partir en tercios es más difícil que en mitades. Un truco con una tira de papel: dóblala en forma de «Z» hasta que las tres partes coincidan.</p>`,
      svg("Una tira partida en tres partes iguales: un tercio y dos tercios", `${barra(26, 32, 150, 30, 3, 1, AZ)}${t(214, 54, "1/3", { s: 18, d: true, c: AZ })}${barra(26, 90, 150, 30, 3, 2, VE)}${t(214, 112, "2/3", { s: 18, d: true, c: VE })}${t(130, 158, "tres tercios = 1 unidad", { s: 13, c: RO })}`)],
    ["Un cuarto", `<p>Si partimos la unidad en <b>4 partes iguales</b>, cada parte es <mark>un cuarto</mark>. Se escribe <b>1/4</b>.</p><p>Con dos partes tenemos <b>dos cuartos</b> (2/4), que es lo mismo que la mitad. Con tres partes, <b>tres cuartos</b> (3/4). Y cuatro cuartos son la unidad entera: 4/4 = 1.</p><p>En la vida diaria decimos «un cuarto de hora» (15 minutos) o «un cuarto de kilo» (250 gramos). En el reloj, cuando la aguja grande da un cuarto de vuelta, ha pasado un cuarto de hora.</p>`,
      svg("Un pastel partido en cuatro cuartos: uno, dos, tres y cuatro cuartos", `${[1, 2, 3, 4].map((k, i) => `${tarta(36 + i * 62, 70, 26, 4, k, NA)}${t(36 + i * 62, 122, `${k}/4`, { s: 15, d: true, c: NA })}`).join("")}${t(130, 160, "4/4 = 1 entero", { s: 14, c: RO })}`),
      P.V("fraB")],
    ["Numerador y denominador", `<p>Las fracciones se escriben con dos números separados por una raya:</p><ul><li>El <b>denominador</b> (abajo) dice en cuántas <mark>partes iguales</mark> se ha partido la unidad.</li><li>El <b>numerador</b> (arriba) dice cuántas partes <mark>cogemos</mark>.</li></ul><p>En 3/4, la unidad se ha partido en 4 partes y cogemos 3.</p><p>Truco: el <b>d</b>enominador está <b>d</b>ebajo. ¡Las dos palabras empiezan por «d»!</p>`,
      svg("Fracción tres cuartos con el numerador arriba y el denominador abajo", `${fr(70, 74, "3", "4", AZ, 36)}${t(150, 62, "numerador:", { s: 12, a: "start", c: VE })}${t(150, 80, "partes que cojo", { s: 11, a: "start" })}${t(150, 120, "denominador:", { s: 12, a: "start", c: RO })}${t(150, 138, "partes iguales", { s: 11, a: "start" })}${barra(30, 156, 200, 16, 4, 3, AZ)}`)],
    ["Cómo se leen", `<p>Primero leemos el número de <b>arriba</b> y después el de abajo con un nombre especial:</p>${P.tb(["fracción", "se lee"], [["1/2", "un medio"], ["1/3 · 2/3", "un tercio · dos tercios"], ["1/4 · 3/4", "un cuarto · tres cuartos"], ["1/5", "un quinto"], ["1/10", "un décimo"]])}<p>Cuando el numerador es mayor que 1, el nombre va en <b>plural</b>: dos tercios, tres cuartos.</p><p>También podemos decirlo de otra forma: 1/3 es «<b>la tercera parte</b>» y 1/4 es «<b>la cuarta parte</b>».</p>`,
      P.filas("Cómo se leen las fracciones", [["1/2", "un medio · la mitad", SO], ["2/3", "dos tercios", AZ], ["3/4", "tres cuartos", NA]])],
    ["¿Qué fracción es mayor?", `<p>¿Qué es más grande, 1/2, 1/3 o 1/4 de la misma pizza? Piénsalo: si la repartes entre <b>más</b> personas, a cada una le toca un trozo <b>más pequeño</b>.</p><p style="text-align:center"><mark>1/2 &gt; 1/3 &gt; 1/4</mark></p><p>¡Cuanto mayor es el denominador, más pequeño es cada trozo!</p><p>Si los trozos son del mismo tamaño (mismo denominador), es mayor la fracción que tiene <b>más trozos</b>: 3/4 &gt; 1/4.</p>`,
      svg("Comparar un medio, un tercio y un cuarto con tiras iguales", `${[[2, AZ, "1/2"], [3, VE, "1/3"], [4, RO, "1/4"]].map(([n, c, f], i) => `${barra(30, 26 + i * 38, 160, 26, n, 1, c)}${t(220, 45 + i * 38, f, { s: 15, d: true, c })}`).join("")}${t(130, 160, "1/2 &gt; 1/3 &gt; 1/4", { s: 16, d: true, c: MO })}`)],
    ["La mitad, el tercio y el cuarto de un número", `<p>A veces no partimos una pizza, sino un <b>grupo de cosas</b>. Para calcular la fracción de un número, <mark>dividimos</mark>:</p><ul><li>La <b>mitad</b> (1/2) de 12 → 12 : 2 = <b>6</b>.</li><li>La <b>tercera parte</b> (1/3) de 12 → 12 : 3 = <b>4</b>.</li><li>La <b>cuarta parte</b> (1/4) de 12 → 12 : 4 = <b>3</b>.</li></ul><p>Ejemplo: en clase hay 24 alumnos y la mitad va al comedor. ¿Cuántos van? 24 : 2 = 12 alumnos.</p><p>¡Fíjate! Dividimos entre el <b>denominador</b>.</p>`,
      svg("Doce estrellas: la mitad son seis, la tercera parte cuatro y la cuarta parte tres", `${[[2, 6, AZ], [3, 4, VE], [4, 3, RO]].map(([d, r, c], i) => `${[...Array(12)].map((_, k) => `<circle cx="${22 + k * 12 + Math.floor(k / r) * 4}" cy="${34 + i * 42}" r="4.5" fill="${k < r ? c : "var(--line)"}"/>`).join("")}${t(232, 39 + i * 42, `1/${d} = ${r}`, { s: 12, c })}`).join("")}${t(130, 160, "12 : 2 · 12 : 3 · 12 : 4", { s: 13, c: MO })}`)],
    ["Fracciones a nuestro alrededor", `<p>Las fracciones aparecen en muchos sitios:</p><ul><li><b>En la cocina</b>: medio litro de leche, un cuarto de kilo de queso, media docena de huevos (6).</li><li><b>En el reloj</b>: media hora (30 minutos), un cuarto de hora (15 minutos).</li><li><b>En el deporte</b>: un partido de baloncesto se divide en cuatro cuartos.</li><li><b>Al compartir</b>: «partimos el bocadillo por la mitad».</li></ul><p>Juego: busca en casa algo que esté partido en partes iguales y di qué fracción es cada parte.</p>`,
      P.filas("Fracciones en la vida diaria", [["Cocina", "medio litro · un cuarto de kilo", AZ], ["Reloj", "media hora · un cuarto de hora", VE], ["Deporte", "cuatro cuartos en baloncesto", RO], ["Compartir", "la mitad del bocadillo", SO]])],
  ],
  figura: ["Las fracciones: mitad, tercio y cuarto", P.columnas("Resumen: partes iguales, medio, tercio y cuarto", [["2 partes iguales", "1/2", ["un medio", "la mitad"], SO], ["3 partes iguales", "1/3", ["un tercio", "tercera parte"], AZ], ["4 partes iguales", "1/4", ["un cuarto", "cuarta parte"], NA], ["de un número", "DIVIDIR", ["mitad de 12", "12 : 2 = 6"], RO]])],
  video: P.V("fraV", true),
  ejemplos: [
    ["Una tableta de chocolate tiene 4 trozos iguales y te comes 3. ¿Qué fracción te has comido? ¿Cuánto queda?", ["La tableta se parte en 4: denominador 4.", "Te comes 3: numerador 3.", "Quedan 4 − 3 = 1 trozo."], "Te has comido 3/4 y queda 1/4."],
    ["Calcula la tercera parte de 18.", ["Tercera parte = 1/3.", "Divido entre 3: 18 : 3 = 6."], "6"],
    ["¿Qué es más grande: 1/2 o 1/4 de la misma pizza?", ["1/2: la pizza en 2 trozos.", "1/4: la pizza en 4 trozos, más pequeños."], "1/2 es más grande."],
  ],
  errores: [
    "Llamar mitades a dos trozos de distinto tamaño.",
    "Confundir el numerador con el denominador.",
    "Pensar que 1/4 es mayor que 1/2 porque 4 es mayor que 2.",
    "Para calcular la mitad de un número, multiplicar por 2 en lugar de dividir.",
  ],
  ejercicios: [
    ["¿Qué tiene que pasar para que unos trozos sean fracciones de un todo?", "Que todos los trozos sean iguales."],
    ["Escribe con números: un medio, dos tercios y tres cuartos.", "1/2, 2/3 y 3/4."],
    ["¿Cómo se leen 1/3 y 2/4?", "Un tercio y dos cuartos."],
    ["En 2/3, ¿qué número es el denominador? ¿Qué indica?", "El 3: la unidad se parte en 3 partes iguales."],
    ["Dibuja un rectángulo y colorea 1/4.", "Respuesta abierta: se parte en 4 partes iguales y se colorea 1."],
    ["¿Cuántos cuartos forman una unidad? ¿Y cuántos tercios?", "4 cuartos y 3 tercios."],
    ["Ordena de mayor a menor: 1/4, 1/2, 1/3.", "1/2 &gt; 1/3 &gt; 1/4."],
    ["Calcula la mitad de 20, la tercera parte de 15 y la cuarta parte de 16.", "10, 5 y 4."],
    ["Una hora tiene 60 minutos. ¿Cuántos minutos son media hora? ¿Y un cuarto de hora?", "30 minutos y 15 minutos."],
    ["Hay 24 alumnos y 1/4 lleva gafas. ¿Cuántos llevan gafas?", "24 : 4 = 6 alumnos."],
  ],
  quiz: [
    ["Una fracción son partes…", ["iguales de un todo", "de cualquier tamaño", "siempre grandes"], "Tienen que ser iguales."],
    ["La mitad se escribe…", ["1/2", "2/1", "1/3"], "Un medio."],
    ["1/3 se lee…", ["un tercio", "un tercero", "uno tres"], "Denominador 3: tercios."],
    ["En 3/4, el numerador es…", ["3", "4", "7"], "Va arriba."],
    ["¿Cuántos cuartos hay en una unidad?", ["4", "2", "1"], "4/4 = 1."],
    ["¿Qué es mayor?", ["1/2", "1/3", "1/4"], "Menos partes, trozos más grandes."],
    ["La mitad de 14 es…", ["7", "28", "12"], "14 : 2."],
    ["La cuarta parte de 20 es…", ["5", "4", "80"], "20 : 4."],
    ["Media hora son…", ["30 minutos", "15 minutos", "50 minutos"], "60 : 2."],
    ["2/4 es lo mismo que…", ["1/2", "1/4", "2/2"], "Dos cuartos son la mitad."],
  ],
  examen: [
    ["Una pizza en 3 trozos iguales; te comes 2. Te has comido…", ["2/3", "1/3", "3/2"], "2 de 3 trozos."],
    ["La tercera parte de 9 es…", ["3", "27", "6"], "9 : 3."],
    ["El denominador indica…", ["en cuántas partes se divide", "cuántas partes cojo", "el resultado"], "Va debajo."],
    ["Un cuarto de hora son…", ["15 minutos", "25 minutos", "4 minutos"], "60 : 4."],
  ],
  feynman: ["Por qué las partes de una fracción tienen que ser iguales", "Qué es un medio, un tercio y un cuarto", "Qué indican el numerador y el denominador", "Por qué 1/2 es mayor que 1/4", "Cómo se calcula la mitad o la cuarta parte de un número"],
  mapa: ["LAS FRACCIONES", [["Qué son", "partes iguales de una unidad", AZ], ["1/2 · 1/3 · 1/4", "medio, tercio, cuarto", VE], ["Términos", "numerador y denominador", RO], ["De un número", "dividir entre el denominador", SO]]],
  tarjetas: [
    ["Fracción", "Partes iguales de una unidad."],
    ["Un medio (1/2)", "Cada una de las 2 partes iguales: la mitad."],
    ["Un tercio (1/3)", "Cada una de las 3 partes iguales: la tercera parte."],
    ["Un cuarto (1/4)", "Cada una de las 4 partes iguales: la cuarta parte."],
    ["Denominador", "Número de abajo: en cuántas partes iguales se divide."],
    ["Numerador", "Número de arriba: cuántas partes se cogen."],
    ["Unidad entera", "2/2 = 3/3 = 4/4 = 1."],
    ["Fracción de un número", "Mitad: dividir entre 2; tercera parte: entre 3; cuarta parte: entre 4."],
  ],
  familias: ["Al partir pizza, tortilla o fruta, poned nombre a las fracciones.", "Doblad hojas de papel por la mitad y en cuartos y coloread las partes.", "Calculad la mitad de los cromos, de las galletas o de la paga.", "Mirad el reloj: media hora, un cuarto de hora."],
  saberes: "Sentido numérico: iniciación a la fracción como parte de la unidad y de una colección; medios, tercios y cuartos; lectura y escritura; numerador y denominador; comparación de fracciones unitarias; mitad, tercera parte y cuarta parte de un número",
  ideas: ["Plegado de tiras de papel en mitades, tercios y cuartos.", "Pizzas de cartulina para componer y comparar fracciones.", "Repartos de objetos de la clase calculando la mitad o la cuarta parte."],
});
