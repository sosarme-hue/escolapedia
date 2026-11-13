// Matemáticas 3º ESO · Sucesiones y progresiones. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar, barras, resumen, rot, C, RD, DECRET } = require("./_eso3L1");

const puntos = lienzo("Una sucesión de figuras con puntos: uno, tres, seis y diez puntos, los números triangulares", `
  ${[1, 2, 3, 4].map((n, k) => { const cx = [32, 88, 150, 218][k]; let s = ""; for (let f = 0; f < n; f++) for (let c = 0; c <= f; c++) s += `<circle cx="${cx + (c - f / 2) * 13}" cy="${48 + f * 14}" r="4.5" fill="var(--pen)"/>`; return s + tx(cx, 120, ["a₁ = 1", "a₂ = 3", "a₃ = 6", "a₄ = 10"][k], { fs: 11.5, c: "var(--red)", max: 52 }); }).join("")}
  ${tx(130, 152, "1, 3, 6, 10, 15, …", { fs: 15, fam: D })}${tx(130, 172, "cada término tiene su lugar", { fs: 11, w: 400 })}`, 182);

const general = formula("El término general permite calcular cualquier término sustituyendo n", "aₙ = 3n + 1", ["n = 1, 2, 3… → 4, 7, 10, 13…", "a₁₀₀ = 3 · 100 + 1 = 301", "¿Es 52 un término? 3n + 1 = 52 → n = 17 ✓"]);

const fibo = lienzo("Sucesión de Fibonacci: cada término es la suma de los dos anteriores; los cuadrados forman una espiral", `
  <rect x="20" y="40" width="16" height="16" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)"/><rect x="20" y="56" width="16" height="16" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)"/>
  <rect x="36" y="40" width="32" height="32" fill="var(--red)" fill-opacity=".25" stroke="var(--red)"/><rect x="20" y="72" width="48" height="48" fill="var(--sun)" fill-opacity=".3" stroke="var(--sun)"/>
  <rect x="68" y="40" width="80" height="80" fill="var(--inf)" fill-opacity=".2" stroke="var(--inf)"/>
  ${rot([[28, 52, "1"], [28, 68, "1"], [52, 60, "2"], [44, 100, "3"], [108, 84, "5"]])}
  ${tx(204, 60, "aₙ = aₙ₋₁ + aₙ₋₂", { fs: 12, c: "var(--red)", max: 100 })}${tx(204, 84, "1, 1, 2, 3, 5, 8,", { fs: 12, max: 100 })}${tx(204, 102, "13, 21, 34…", { fs: 12, max: 100 })}
  ${tx(130, 150, "ley de recurrencia", { fs: 13, c: "var(--muted)" })}`);

const monotonia = comparar("Sucesiones crecientes, decrecientes y alternadas", [
  ["Creciente", ["2, 5, 8, 11…", "aₙ₊₁ > aₙ"], "var(--leaf)"],
  ["Decreciente", ["20, 10, 5…", "aₙ₊₁ < aₙ"], "var(--red)"],
  ["Alternada", ["1, −2, 4, −8", "cambia signo"], "var(--pen)"],
], "¿Cómo evoluciona?");

const pa = lienzo("Progresión aritmética: se suma siempre la misma diferencia d igual a tres", `
  ${[2, 5, 8, 11, 14].map((v, i) => `<rect x="${12 + i * 48}" y="50" width="40" height="34" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${tx(32 + i * 48, 73, v, { fs: 15, fam: D })}`).join("")}
  ${[0, 1, 2, 3].map((i) => `<path d="M${36 + i * 48} 46 q12 -18 24 0" fill="none" stroke="var(--red)" stroke-width="2"/>${tx(48 + i * 48, 30, "+3", { fs: 11.5, c: "var(--red)" })}`).join("")}
  ${tx(130, 118, "d = aₙ₊₁ − aₙ = 3", { fs: 15, c: "var(--red)", fam: D })}${tx(130, 148, "crece al mismo ritmo: gráfica en línea recta", { fs: 11.5, w: 400 })}`);

const paGeneral = formula("Término general de una progresión aritmética", "aₙ = a₁ + (n − 1) · d", ["a₁ = 2, d = 3: aₙ = 2 + 3(n − 1) = 3n − 1", "a₂₀ = 59", "Entre dos términos: aₙ = aₖ + (n − k)d"]);

const interpolar = pasos("Hallar una progresión aritmética conociendo dos términos", ["a₃ = 10 y a₈ = 25", "De a₃ a a₈ hay 5 saltos", "5d = 25 − 10 → d = 3", "a₁ = a₃ − 2d = 4", "aₙ = 4 + 3(n − 1) = 3n + 1"], "Dos términos conocidos");

const gauss = lienzo("Suma de Gauss: emparejar el primero con el último da siempre la misma suma", `
  ${tx(130, 26, "1 + 2 + 3 + … + 100", { fs: 15, c: "var(--pen)", fam: D })}
  ${[[1, 100], [2, 99], [3, 98], [50, 51]].map(([a, b], i) => `${tx(60 + i * 46, 60, a, { fs: 12 })}${tx(60 + i * 46, 96, b, { fs: 12 })}<path d="M${60 + i * 46} 66 V84" stroke="var(--red)" stroke-width="2"/>${tx(60 + i * 46, 118, "101", { fs: 11.5, c: "var(--red)" })}`).join("")}
  ${tx(130, 146, "50 parejas · 101 = 5.050", { fs: 15, c: "var(--leaf)", fam: D })}${tx(130, 170, "Sₙ = (a₁ + aₙ) · n / 2", { fs: 13, c: "var(--muted)" })}`, 180);

const pg = lienzo("Progresión geométrica: se multiplica siempre por la misma razón r igual a dos", `
  ${[3, 6, 12, 24, 48].map((v, i) => `<rect x="${12 + i * 48}" y="50" width="40" height="34" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${tx(32 + i * 48, 73, v, { fs: 15, fam: D })}`).join("")}
  ${[0, 1, 2, 3].map((i) => `<path d="M${36 + i * 48} 46 q12 -18 24 0" fill="none" stroke="var(--red)" stroke-width="2"/>${tx(48 + i * 48, 30, "·2", { fs: 11.5, c: "var(--red)" })}`).join("")}
  ${tx(130, 118, "r = aₙ₊₁ : aₙ = 2", { fs: 15, c: "var(--red)", fam: D })}${tx(130, 148, "cada vez crece más deprisa", { fs: 11.5, w: 400 })}`);

const pgGeneral = formula("Término general de una progresión geométrica", "aₙ = a₁ · rⁿ⁻¹", ["a₁ = 3, r = 2: aₙ = 3 · 2ⁿ⁻¹", "a₁₀ = 3 · 2⁹ = 1.536", "Entre dos términos: aₙ = aₖ · rⁿ⁻ᵏ"], "var(--leaf)");

const sumaPg = formula("Suma de los n primeros términos de una progresión geométrica", "Sₙ = a₁ (rⁿ − 1) / (r − 1)", ["(r ≠ 1)", "1 + 2 + 4 + … + 2⁹ = (2¹⁰ − 1)/1", "= 1.023"], "var(--red)");

const infinita = lienzo("Suma infinita de una progresión geométrica de razón un medio: un medio más un cuarto más un octavo se acerca a uno", `
  <rect x="20" y="40" width="220" height="40" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
  <rect x="20" y="40" width="110" height="40" fill="var(--pen)" fill-opacity=".75"/><rect x="130" y="40" width="55" height="40" fill="var(--leaf)" fill-opacity=".75"/><rect x="185" y="40" width="27.5" height="40" fill="var(--red)" fill-opacity=".75"/><rect x="212.5" y="40" width="13.75" height="40" fill="var(--sun)"/><rect x="226.25" y="40" width="6.9" height="40" fill="var(--inf)"/>
  ${rot([[75, 66, "1/2", "#fff"], [157, 66, "1/4", "#fff"], [198, 66, "1/8"]])}
  ${tx(130, 26, "1/2 + 1/4 + 1/8 + … = 1", { fs: 14, c: "var(--pen)", fam: D })}
  ${tx(130, 116, "S = a₁ / (1 − r)", { fs: 17, c: "var(--red)", fam: D })}${tx(130, 146, "solo si −1 < r < 1", { fs: 13, c: "var(--muted)" })}`);

const interes = barras("Interés compuesto: mil euros al cinco por ciento anual durante cinco años", [["0", 1000], ["1", 1050], ["2", 1103], ["3", 1158], ["4", 1216], ["5", 1276]], { titulo: "Capital (€) cada año al 5 %", c: "var(--leaf)", max: 1300 });

const compara = ejes("Una progresión aritmética crece en línea recta y una geométrica de razón mayor que uno acaba superándola", { x: [0, 8], y: [0, 70], paso: 1, pasoY: 10, marcasX: [2, 4, 6, 8], marcasY: [20, 40, 60], curvas: [{ f: (x) => 10 + 6 * x, c: "var(--pen)", t: "aritmética", tx: 3.4, ty: 40 }, { f: (x) => 2 ** (x - 0.3), c: "var(--red)", t: "geométrica", tx: 7, ty: 30 }] });

const tablaTipos = cajas("Comparación entre progresiones aritméticas y geométricas", [
  ["Aritmética", ["se suma d", "aₙ = a₁ + (n−1)d"], "var(--pen)"], ["Geométrica", ["se multiplica r", "aₙ = a₁·rⁿ⁻¹"], "var(--leaf)"],
  ["Suma PA", ["(a₁ + aₙ)·n/2", "Gauss"], "var(--sun)"], ["Suma PG", ["a₁(rⁿ − 1)/(r − 1)", "∞: a₁/(1 − r)"], "var(--red)"],
], "Todo junto");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Sucesiones y progresiones",
  minutos: 110,
  objetivos: [
    "Reconocer sucesiones y obtener sus términos a partir del término general o de una ley de recurrencia",
    "Encontrar el término general de sucesiones sencillas",
    "Identificar progresiones aritméticas y geométricas y calcular su diferencia o razón",
    "Calcular cualquier término y la suma de n términos de una progresión",
    "Sumar infinitos términos de una progresión geométrica con |r| < 1",
    "Aplicar las progresiones a problemas reales como el interés compuesto",
  ],
  claves: ["sucesión", "término general", "recurrencia", "progresión aritmética", "diferencia", "progresión geométrica", "razón", "suma"],
  pregunta: {
    texto: "Te ofrecen dos trabajos de un mes: A, 100 € al día; B, 1 céntimo el primer día, 2 el segundo, 4 el tercero, y así doblando. ¿Cuál eliges?",
    respuesta: "A da 3.000 € en 30 días. B empieza ridículo, pero es una <b>progresión geométrica</b> de razón 2: el día 30 cobrarías 2²⁹ céntimos, más de 5 millones de euros, y en total <mark>más de 10 millones</mark>. ¡Elige B!",
  },
  lectura: {
    titulo: "El niño que sumó del 1 al 100",
    html: `<p>Se cuenta que, hacia 1786, un maestro alemán quiso tener a su clase entretenida un buen rato y mandó sumar todos los números del 1 al 100. Uno de los alumnos, un niño de nueve años llamado Carl Friedrich Gauss, entregó la pizarra con el resultado al cabo de unos segundos: 5.050.</p><p>Gauss no había sumado uno a uno. Se dio cuenta de que 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… y que había 50 parejas así. Por tanto, la suma era 50 · 101 = 5.050. Aquel niño llegaría a ser uno de los matemáticos más grandes de la historia, apodado «el príncipe de las matemáticas».</p><p>Su truco funciona con cualquier lista de números que avanzan de forma regular, a la que llamamos progresión aritmética. Y existen otras listas que no avanzan sumando, sino multiplicando, como los granos de trigo del ajedrez o los contagios de una epidemia: son las progresiones geométricas. En este tema aprenderás a descubrir la regla que esconde una lista de números, a calcular el término que ocupa cualquier posición sin escribir los anteriores y a sumar muchos términos, incluso infinitos, con una sola fórmula.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Qué es una sucesión</h3><p>Una <b>sucesión</b> es una lista ordenada de números que siguen una regla. Cada número es un <b>término</b> y se nombra con una letra y un subíndice que indica su lugar: a₁ es el primer término, a₂ el segundo, y aₙ el que ocupa el lugar n. Por ejemplo, en la sucesión de los números pares 2, 4, 6, 8…, a₁ = 2, a₃ = 6 y a₁₀ = 20.</p><p>El orden es fundamental: 1, 3, 5 y 5, 3, 1 son sucesiones distintas. Las sucesiones suelen ser <b>infinitas</b>, y se escriben con puntos suspensivos al final.</p><p>Muchas sucesiones nacen de dibujos. Los <b>números triangulares</b> (1, 3, 6, 10, 15…) cuentan los puntos que forman triángulos cada vez mayores, como los bolos o las bolas de billar; los <b>cuadrados</b> (1, 4, 9, 16…) cuentan los puntos de cuadrados. Descubrir la regla que siguen es un ejercicio de observación muy parecido al trabajo de un detective.</p>`, svg: puntos },
    { html: `<h3>1.2 El término general</h3><p>El <b>término general</b> aₙ es una fórmula que permite calcular cualquier término sustituyendo n por su lugar. Si aₙ = 3n + 1, entonces a₁ = 4, a₂ = 7, a₃ = 10 y, sin escribir los anteriores, a₁₀₀ = 301.</p><p>También sirve para saber si un número pertenece a la sucesión: ¿es 52 un término de aₙ = 3n + 1? Planteamos 3n + 1 = 52, de donde n = 17, que es un número natural; por tanto, sí, es el término 17. En cambio 50 no lo es, porque 3n + 1 = 50 da n = 49/3, que no es natural.</p><p>Para encontrar el término general hay que buscar la relación entre cada término y su lugar. Una tabla ayuda: en 1, 4, 9, 16…, cada término es el cuadrado de su lugar, aₙ = n². En 1/2, 2/3, 3/4…, el numerador es el lugar y el denominador, uno más: aₙ = n/(n + 1). En −1, 1, −1, 1…, el signo se alterna: aₙ = (−1)ⁿ.</p>`, svg: general, video: { id: "QHriWBCSrFY", titulo: "Sucesiones: para principiantes", canal: "Daniel Carreón", vistas: 1353641, megusta: 0 } },
    { html: `<h3>1.3 Sucesiones recurrentes</h3><p>Algunas sucesiones no se definen con un término general, sino con una <b>ley de recurrencia</b>: una regla que calcula cada término a partir de los anteriores. Hay que dar, además, los primeros términos para poder empezar.</p><p>La más famosa es la <b>sucesión de Fibonacci</b>: a₁ = 1, a₂ = 1 y aₙ = aₙ₋₁ + aₙ₋₂. Cada término es la suma de los dos anteriores: 1, 1, 2, 3, 5, 8, 13, 21, 34… Leonardo de Pisa, llamado Fibonacci, la presentó en 1202 con un problema de parejas de conejos, y aparece sorprendentemente en la naturaleza: en el número de pétalos de muchas flores, en las espirales de las piñas y de los girasoles.</p><p>Si se dibujan cuadrados cuyos lados son los términos de Fibonacci, encajan formando un rectángulo cada vez mayor, y trazando arcos se obtiene una espiral. El cociente entre dos términos consecutivos (21/13, 34/21…) se acerca cada vez más al <b>número de oro</b>, φ ≈ 1,618.</p>`, svg: fibo },
    { html: `<h3>1.4 Cómo evoluciona una sucesión</h3><p>Una sucesión es <b>creciente</b> si cada término es mayor que el anterior (aₙ₊₁ &gt; aₙ), como 2, 5, 8, 11…, y <b>decreciente</b> si cada término es menor (aₙ₊₁ &lt; aₙ), como 20, 10, 5, 2,5… Si todos los términos son iguales, es <b>constante</b>.</p><p>Hay sucesiones que no son ni crecientes ni decrecientes. Las <b>alternadas</b> cambian de signo en cada término: 1, −2, 4, −8, 16… Suelen llevar un factor (−1)ⁿ en su término general.</p><p>También interesa saber a qué valor se acercan los términos cuando n es muy grande. En aₙ = n/(n + 1) (1/2, 2/3, 3/4, 99/100…), los términos se acercan cada vez más a 1 sin llegar nunca: decimos que 1 es su <b>límite</b>. En cambio, aₙ = 2ⁿ crece sin parar. El estudio de los límites es una de las grandes ideas del Bachillerato, y aquí ya puedes intuirlo con una tabla de valores.</p>`, svg: monotonia },
    { html: `<h3>2.1 Progresiones aritméticas</h3><p>Una <b>progresión aritmética</b> es una sucesión en la que cada término se obtiene <b>sumando</b> al anterior un número fijo, llamado <b>diferencia</b> y representado por d: <mark>aₙ₊₁ = aₙ + d</mark>. Para calcular la diferencia basta con restar dos términos consecutivos: d = a₂ − a₁.</p><p>Si d &gt; 0, la progresión es creciente (2, 5, 8, 11…, d = 3); si d &lt; 0, es decreciente (20, 16, 12…, d = −4); si d = 0, es constante. Para comprobar que una sucesión es aritmética hay que verificar que <b>todas</b> las diferencias consecutivas son iguales: 1, 4, 9, 16 no lo es, porque las diferencias son 3, 5, 7.</p><p>Las progresiones aritméticas describen situaciones que avanzan a ritmo constante: los asientos de las filas de un teatro que aumentan de 2 en 2, el ahorro de una hucha a la que se añaden 5 € cada semana o la numeración de las casas de una calle. Si se representan sus puntos (n, aₙ), quedan alineados en una recta.</p>`, svg: pa },
    { html: `<h3>2.2 Término general de una progresión aritmética</h3><p>Para llegar al término n desde el primero se suma la diferencia n − 1 veces. Por eso el término general es <mark>aₙ = a₁ + (n − 1) · d</mark>. En la progresión 2, 5, 8, 11…, con a₁ = 2 y d = 3, queda aₙ = 2 + 3(n − 1) = 3n − 1. Así, a₂₀ = 59 y a₁₀₀ = 299.</p><p>La fórmula se puede generalizar para partir de cualquier término conocido: aₙ = aₖ + (n − k) · d. Si sabemos que a₁₀ = 40 y d = 3, entonces a₂₅ = 40 + 15 · 3 = 85.</p><p>La fórmula también sirve al revés, para averiguar el lugar de un término. ¿Qué lugar ocupa 143 en 3n − 1? 3n − 1 = 143, n = 48. En los problemas, n suele representar un número de días, de filas o de semanas, y por eso siempre debe salir un número natural.</p>`, svg: paGeneral, video: { id: "VUJ6d0qmO34", titulo: "Progresión aritmética: término general y suma de términos", canal: "Susi Profe", vistas: 1617409, megusta: 0 } },
    { html: `<h3>2.3 Encontrar una progresión a partir de dos términos</h3><p>Una progresión aritmética queda determinada si se conocen dos de sus términos. Si a₃ = 10 y a₈ = 25, entre el término 3 y el 8 hay 5 «saltos» de diferencia d. Por tanto, 5d = 25 − 10 = 15 y d = 3. Retrocediendo dos saltos desde a₃, a₁ = 10 − 2 · 3 = 4, y el término general es aₙ = 4 + 3(n − 1) = 3n + 1.</p><p>Un caso relacionado es <b>interpolar</b> términos: intercalar varios números entre dos dados para que todos formen una progresión aritmética. Para interpolar 3 términos entre 5 y 17, hay 4 saltos: d = (17 − 5)/4 = 3, y la progresión es 5, 8, 11, 14, 17.</p><p>Una propiedad útil: en una progresión aritmética, cada término es la <b>media</b> del anterior y el siguiente: a₄ = (a₃ + a₅)/2. Así, si 2x − 1, x + 3 y 10 son términos consecutivos, x + 3 = (2x − 1 + 10)/2, de donde x = −3.</p>`, svg: interpolar },
    { html: `<h3>2.4 Suma de los términos de una progresión aritmética</h3><p>El truco de Gauss se puede aplicar a cualquier progresión aritmética. Si escribimos la suma de dos formas, de principio a fin y de fin a principio, y sumamos columna a columna, todas las parejas dan a₁ + aₙ. Como hay n parejas y cada término se ha contado dos veces:</p><p class="formula"><span>Sₙ = (a₁ + aₙ) · n / 2</span></p><p>Ejemplo: la suma de los 20 primeros números impares. a₁ = 1, d = 2, a₂₀ = 1 + 19 · 2 = 39. S₂₀ = (1 + 39) · 20/2 = <mark>400</mark>. Curiosamente, la suma de los n primeros impares es siempre n².</p><p>Una aplicación: un teatro tiene 25 filas; la primera, 18 butacas, y cada fila tiene 2 más que la anterior. La última fila tiene 18 + 24 · 2 = 66 butacas, y en total hay (18 + 66) · 25/2 = 1.050 butacas.</p>`, svg: gauss },
    { html: `<h3>3.1 Progresiones geométricas</h3><p>Una <b>progresión geométrica</b> es una sucesión en la que cada término se obtiene <b>multiplicando</b> el anterior por un número fijo, llamado <b>razón</b> y representado por r: <mark>aₙ₊₁ = aₙ · r</mark>. La razón se calcula dividiendo dos términos consecutivos: r = a₂ : a₁.</p><p>El comportamiento depende de la razón. Si r &gt; 1 (con a₁ &gt; 0), la progresión crece cada vez más deprisa: 3, 6, 12, 24… Si 0 &lt; r &lt; 1, decrece acercándose a 0: 80, 40, 20, 10… Si r es negativa, es alternada: 1, −3, 9, −27…</p><p>Las progresiones geométricas aparecen en todo lo que se multiplica: la reproducción de bacterias, los contagios, el interés compuesto, la pérdida de valor de un coche cada año, la radiactividad o el rebote de una pelota que sube cada vez un porcentaje menor. Son la versión «paso a paso» del crecimiento exponencial que viste en el tema de potencias.</p>`, svg: pg },
    { html: `<h3>3.2 Término general de una progresión geométrica</h3><p>Para llegar al término n desde el primero se multiplica por la razón n − 1 veces. Por eso: <mark>aₙ = a₁ · rⁿ⁻¹</mark>. En 3, 6, 12…, aₙ = 3 · 2ⁿ⁻¹, y a₁₀ = 3 · 2⁹ = 1.536.</p><p>Desde cualquier término conocido: aₙ = aₖ · rⁿ⁻ᵏ. Si a₂ = 6 y a₅ = 162, entre ellos hay 3 multiplicaciones por r: r³ = 162/6 = 27, luego r = 3 y a₁ = 2. El término general es aₙ = 2 · 3ⁿ⁻¹.</p><p>Una propiedad: en una progresión geométrica de términos positivos, cada término es la <b>media geométrica</b> del anterior y el siguiente: a₄ = √(a₃ · a₅). En la vida real, la fórmula del término general permite predecir: un cultivo de 200 bacterias que se duplica cada hora tendrá 200 · 2¹² = 819.200 bacterias a las 12 horas.</p>`, svg: pgGeneral, video: { id: "qQ4FFRKSF3M", titulo: "Progresiones geométricas: ejemplo 1", canal: "julioprofe", vistas: 1422079, megusta: 0 } },
    { html: `<h3>3.3 Suma de n términos de una progresión geométrica</h3><p>Para sumar los n primeros términos de una progresión geométrica se usa otro truco: se multiplica la suma por r y se resta la suma original. Casi todos los términos se anulan y queda:</p><p class="formula"><span>Sₙ = a₁ · (rⁿ − 1) / (r − 1), con r ≠ 1</span></p><p>Ejemplo: los granos de las 10 primeras casillas del tablero: 1 + 2 + 4 + … + 2⁹ = 1 · (2¹⁰ − 1)/(2 − 1) = <mark>1.023</mark>. Para las 64 casillas: 2⁶⁴ − 1 ≈ 1,8 · 10¹⁹ granos.</p><p>Volvamos a la pregunta del principio. En el trabajo B se cobra 1, 2, 4… céntimos: en 30 días, S₃₀ = 2³⁰ − 1 = 1.073.741.823 céntimos, más de 10 millones de euros, frente a los 3.000 € del trabajo A. Si la razón es menor que 1, conviene usar la forma equivalente Sₙ = a₁(1 − rⁿ)/(1 − r), que evita los signos negativos.</p>`, svg: sumaPg },
    { html: `<h3>3.4 Suma de infinitos términos</h3><p>¿Se pueden sumar infinitos números y obtener un resultado finito? Sí, si los términos se hacen muy pequeños muy deprisa. Si te comes la mitad de una tarta, luego la mitad de lo que queda, luego la mitad de lo que queda… nunca te comerás más de una tarta: 1/2 + 1/4 + 1/8 + … = 1.</p><p>En una progresión geométrica con razón entre −1 y 1, el término rⁿ se acerca a 0 al crecer n, y la fórmula de la suma se convierte en <mark>S = a₁ / (1 − r)</mark>. Para 1/2 + 1/4 + …: S = (1/2)/(1 − 1/2) = 1. Si |r| ≥ 1, la suma infinita no tiene un valor finito.</p><p>Esta idea resuelve la paradoja de Aquiles y la tortuga, planteada por Zenón hace 2.500 años, y explica también la fracción generatriz: 0,333… = 3/10 + 3/100 + … = (3/10)/(1 − 1/10) = 1/3. Una pelota que se deja caer desde 2 m y rebota hasta la mitad cada vez recorre en total 2 + 2 · (1 + 1/2 + …) = 6 m.</p>`, svg: infinita },
    { html: `<h3>3.5 Interés compuesto</h3><p>Cuando se ahorra en un banco a <b>interés compuesto</b>, los intereses de cada año se suman al capital y producen nuevos intereses. Si se depositan 1.000 € al 5 % anual, cada año el capital se multiplica por 1,05: 1.000, 1.050, 1.102,50, 1.157,63… Es una progresión geométrica de razón r = 1 + i, donde i es el interés en tanto por uno.</p><p>El capital al cabo de n años es <mark>Cₙ = C₀ · (1 + i)ⁿ</mark>. Con 1.000 € al 5 % durante 5 años: 1.000 · 1,05⁵ ≈ 1.276,28 €. Durante 20 años: 1.000 · 1,05²⁰ ≈ 2.653,30 €. Con interés simple (siempre sobre los 1.000 €), solo se tendrían 2.000 €.</p><p>El mismo modelo, con razón menor que 1, describe la depreciación: un coche de 20.000 € que pierde un 15 % de valor al año vale 20.000 · 0,85ⁿ €; a los 5 años, unos 8.874 €. Y también funciona con las deudas: una tarjeta de crédito con intereses altos hace crecer lo que se debe de forma geométrica.</p>`, svg: interes },
    { html: `<h3>3.6 Aritméticas frente a geométricas</h3><p>Las dos progresiones son modelos muy distintos de crecimiento. En una <b>aritmética</b>, el aumento es siempre el mismo (se suma d): es un crecimiento <b>lineal</b> y sus puntos quedan sobre una recta. En una <b>geométrica</b> de razón mayor que 1, el aumento es cada vez mayor (se multiplica por r): es un crecimiento <b>exponencial</b>.</p><p>El gráfico lo muestra: aunque la aritmética empiece por delante, la geométrica acaba superándola, y después la distancia entre ambas se dispara. Por eso las cosas que crecen de forma geométrica, como una deuda, una epidemia o la población de una plaga, se subestiman con facilidad: al principio parecen inofensivas.</p><p>Para decidir qué modelo usar en un problema, pregúntate: ¿cada paso <b>añade</b> la misma cantidad o <b>multiplica</b> por el mismo factor? Si el enunciado habla de porcentajes, duplicar o reducir a la mitad, la progresión es geométrica; si habla de aumentar o disminuir una cantidad fija, es aritmética.</p>`, svg: compara },
    { html: `<h3>3.7 Resumen de fórmulas y estrategia</h3><p>Las fórmulas de las progresiones se pueden reconstruir entendiendo de dónde vienen, sin memorizarlas a ciegas. En una aritmética, del primero al término n hay n − 1 sumas de d; en una geométrica, n − 1 multiplicaciones por r. La suma aritmética se basa en las parejas de Gauss; la geométrica, en multiplicar por r y restar.</p><p>Una estrategia para los problemas: 1) escribir los primeros términos para ver la regla; 2) decidir si es aritmética (diferencias iguales) o geométrica (cocientes iguales); 3) identificar a₁ y d o r; 4) aplicar la fórmula del término o de la suma según lo que se pregunte; 5) comprobar con los primeros términos.</p><p>Cuidado con el lugar: si un problema empieza a contar en el «año 0» (el capital inicial), el año n corresponde al término n + 1. Este tipo de detalle es la causa más frecuente de errores en los exámenes.</p>`, svg: tablaTipos },
  ],
  ejemplos: [
    { enunciado: "Halla el término general de 5, 9, 13, 17… y calcula a₅₀.", pasos: ["Diferencias: 4, 4, 4. Aritmética con d = 4.", "aₙ = 5 + 4(n − 1) = 4n + 1.", "a₅₀ = 201."], resultado: "aₙ = 4n + 1; a₅₀ = 201." },
    { enunciado: "En una progresión aritmética, a₄ = 17 y a₁₀ = 41. Halla a₁ y d.", pasos: ["Del 4 al 10 hay 6 saltos: 6d = 24 → d = 4.", "a₁ = a₄ − 3d = 17 − 12 = 5."], resultado: "a₁ = 5, d = 4." },
    { enunciado: "Suma los múltiplos de 3 entre 3 y 300.", pasos: ["a₁ = 3, d = 3, aₙ = 300 → n = 100.", "S = (3 + 300) · 100/2 = 15.150."], resultado: "15.150." },
    { enunciado: "En una progresión geométrica, a₁ = 5 y r = 3. Halla a₆ y S₆.", pasos: ["a₆ = 5 · 3⁵ = 1.215.", "S₆ = 5(3⁶ − 1)/(3 − 1) = 5 · 728/2 = 1.820."], resultado: "a₆ = 1.215; S₆ = 1.820." },
    { enunciado: "Calcula 6 + 2 + 2/3 + 2/9 + …", pasos: ["Geométrica con a₁ = 6, r = 1/3 (|r| < 1).", "S = 6/(1 − 1/3) = 6 : 2/3 = 9."], resultado: "S = 9." },
    { enunciado: "Se depositan 2.000 € al 3 % anual compuesto. ¿Cuánto hay a los 10 años?", pasos: ["Razón 1,03.", "C₁₀ = 2.000 · 1,03¹⁰ ≈ 2.000 · 1,3439."], resultado: "≈ 2.687,83 €." },
  ],
  errores: [
    "Usar aₙ = a₁ + n · d en lugar de a₁ + (n − 1) · d.",
    "Confundir diferencia (restar) con razón (dividir).",
    "Decir que una sucesión es aritmética mirando solo las dos primeras diferencias.",
    "Sumar infinitos términos de una geométrica con |r| ≥ 1.",
    "Escribir a₁ · rⁿ en el término general en vez de a₁ · rⁿ⁻¹.",
    "Contar mal los términos: de 3 a 300 de 3 en 3 hay 100 términos, no 99 ni 297.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe los cinco primeros términos de aₙ = 2n² − 1.", sol: "1, 7, 17, 31, 49." },
    { nivel: "básico", q: "Halla el término general: a) 3, 6, 9, 12… b) 1/2, 1/3, 1/4… c) 1, −1, 1, −1…", sol: "a) 3n b) 1/(n + 1) c) (−1)ⁿ⁺¹." },
    { nivel: "básico", q: "¿Es 98 un término de aₙ = 5n − 2? ¿Y 100?", sol: "5n − 2 = 98 → n = 20: sí. 5n − 2 = 100 → n = 20,4: no." },
    { nivel: "básico", q: "Escribe los 8 primeros términos de la sucesión de Fibonacci.", sol: "1, 1, 2, 3, 5, 8, 13, 21." },
    { nivel: "básico", q: "Di si son aritméticas, geométricas o ninguna: a) 4, 7, 10, 13 b) 2, 6, 18, 54 c) 1, 4, 9, 16.", sol: "a) aritmética d = 3 b) geométrica r = 3 c) ninguna (cuadrados)." },
    { nivel: "básico", q: "En una progresión aritmética, a₁ = 7 y d = −2. Escribe a₁₀ y el término general.", sol: "aₙ = 7 − 2(n − 1) = 9 − 2n; a₁₀ = −11." },
    { nivel: "básico", q: "Suma los 30 primeros términos de 2, 5, 8…", sol: "a₃₀ = 2 + 29 · 3 = 89; S = (2 + 89) · 30/2 = 1.365." },
    { nivel: "básico", q: "Calcula la suma 1 + 2 + 3 + … + 200.", sol: "(1 + 200) · 200/2 = 20.100." },
    { nivel: "básico", q: "En una progresión geométrica, a₁ = 2 y r = 5. Calcula a₄ y el término general.", sol: "aₙ = 2 · 5ⁿ⁻¹; a₄ = 250." },
    { nivel: "básico", q: "Halla la razón y el término general de 81, 27, 9, 3…", sol: "r = 1/3; aₙ = 81 · (1/3)ⁿ⁻¹." },
    { nivel: "básico", q: "Suma: 1 + 3 + 9 + 27 + 81 + 243.", sol: "S₆ = (3⁶ − 1)/2 = 728/2 = 364." },
    { nivel: "básico", q: "Calcula la suma infinita: 1 + 1/2 + 1/4 + …", sol: "1/(1 − 1/2) = 2." },
    { nivel: "medio", q: "En una progresión aritmética, a₅ = 22 y a₁₂ = 50. Halla el término general y a₃₀.", sol: "7d = 28 → d = 4; a₁ = 22 − 16 = 6; aₙ = 4n + 2; a₃₀ = 122." },
    { nivel: "medio", q: "Interpola 4 términos aritméticos entre 3 y 28.", sol: "5 saltos: d = 5. 3, 8, 13, 18, 23, 28." },
    { nivel: "medio", q: "¿Cuántos términos de 4, 7, 10… hay que sumar para obtener 375?", sol: "aₙ = 3n + 1. (4 + 3n + 1)n/2 = 375 → 3n² + 5n − 750 = 0 → n = 15 (la otra solución es negativa)." },
    { nivel: "medio", q: "Halla x para que x − 1, 2x + 1 y 5x − 3 estén en progresión aritmética.", sol: "2(2x + 1) = (x − 1) + (5x − 3) → 4x + 2 = 6x − 4 → x = 3. Términos 2, 7, 12." },
    { nivel: "medio", q: "En una progresión geométrica, a₂ = 12 y a₅ = 96. Halla a₁ y r.", sol: "r³ = 8 → r = 2; a₁ = 6." },
    { nivel: "medio", q: "Suma los 8 primeros términos de 64, 32, 16…", sol: "r = 1/2: S₈ = 64(1 − (1/2)⁸)/(1/2) = 128 · 255/256 = 127,5." },
    { nivel: "medio", q: "Calcula: 9 − 3 + 1 − 1/3 + …", sol: "r = −1/3: S = 9/(1 + 1/3) = 27/4." },
    { nivel: "medio", q: "Un anfiteatro tiene 20 filas. La primera tiene 30 asientos y cada fila 3 más que la anterior. ¿Cuántos asientos hay?", sol: "a₂₀ = 30 + 57 = 87; S = (30 + 87) · 20/2 = 1.170." },
    { nivel: "medio", q: "Lucía ahorra 5 € la primera semana, 7 € la segunda, 9 € la tercera… ¿Cuánto ahorra en un año (52 semanas)?", sol: "a₅₂ = 5 + 51 · 2 = 107; S = (5 + 107) · 52/2 = 2.912 €." },
    { nivel: "medio", q: "Una pelota se deja caer desde 3 m y en cada bote sube 2/3 de la altura anterior. ¿Qué altura alcanza tras el cuarto bote?", sol: "3 · (2/3)⁴ = 3 · 16/81 = 16/27 ≈ 0,59 m." },
    { nivel: "medio", q: "Un coche de 18.000 € pierde un 20 % de su valor cada año. ¿Cuánto vale a los 4 años?", sol: "18.000 · 0,8⁴ = 18.000 · 0,4096 = 7.372,80 €." },
    { nivel: "medio", q: "Escribe la fracción generatriz de 0,7777… usando una suma infinita.", sol: "7/10 + 7/100 + … = (7/10)/(1 − 1/10) = 7/9." },
    { nivel: "avanzado", q: "Demuestra que la suma de los n primeros números impares es n².", sol: "a₁ = 1, d = 2, aₙ = 2n − 1; Sₙ = (1 + 2n − 1) · n/2 = n²." },
    { nivel: "avanzado", q: "Calcula el número total de granos de trigo del tablero y exprésalo en notación científica.", sol: "S₆₄ = 2⁶⁴ − 1 ≈ 1,84 · 10¹⁹ granos." },
    { nivel: "avanzado", q: "Una pelota cae desde 4 m y en cada bote sube la mitad. ¿Qué distancia total recorre hasta pararse?", sol: "Bajada 4 m; después sube y baja 2 + 1 + 1/2 + … dos veces: 2 · 2/(1 − 1/2) = 8. Total 12 m." },
    { nivel: "avanzado", q: "¿Cuántos años tarda en duplicarse un capital al 6 % compuesto? (Prueba con la calculadora.)", sol: "1,06ⁿ ≥ 2: 1,06¹¹ ≈ 1,898; 1,06¹² ≈ 2,012. 12 años." },
    { nivel: "avanzado", q: "Los ángulos de un pentágono están en progresión aritmética y el menor mide 90°. ¿Cuánto miden?", sol: "Suma 540° = (90 + 90 + 4d) · 5/2 → 216 = 180 + 4d → d = 9. Ángulos 90°, 99°, 108°, 117°, 126°." },
    { nivel: "avanzado", q: "Tres números en progresión geométrica tienen producto 216 y suma 26. Hállalos.", sol: "a/r, a, ar: a³ = 216 → a = 6. 6/r + 6 + 6r = 26 → 6r² − 20r + 6 = 0 → r = 3 o 1/3. Números 2, 6, 18." },
    { nivel: "avanzado", q: "Calcula el cociente entre términos consecutivos de Fibonacci 21/13, 34/21, 55/34 y compáralo con φ = (1 + √5)/2.", sol: "1,615…; 1,619…; 1,6176…; φ ≈ 1,6180. Se acercan alternando por arriba y por abajo." },
    { nivel: "avanzado", q: "Una epidemia empieza con 10 contagiados y cada 3 días se multiplica por 2. Si nadie hace nada, ¿cuántos habrá a los 30 días?", sol: "30 días = 10 periodos: 10 · 2¹⁰ = 10.240 contagiados." },
    { nivel: "avanzado", q: "Halla una progresión aritmética de 5 términos cuya suma sea 40 y cuyo producto del primero y el último sea 28.", sol: "El central es 8 (40/5). Primero 8 − 2d, último 8 + 2d: 64 − 4d² = 28 → d = 3. Progresión 2, 5, 8, 11, 14." },
    { nivel: "avanzado", q: "Explica, con la fórmula de Sₙ, por qué el trabajo B de la pregunta inicial supera los 10 millones de euros.", sol: "S₃₀ = 2³⁰ − 1 = 1.073.741.823 céntimos ≈ 10.737.418 €." },
  ],
  quiz: [
    { q: "En una sucesión, a₃ es…", o: ["el término que vale 3", "el tercer término", "3 veces a₁", "la suma de 3 términos"], a: 1, e: "El subíndice indica el lugar." },
    { q: "Si aₙ = n² + 1, a₄ =", o: ["9", "17", "16", "5"], a: 1, e: "16 + 1." },
    { q: "Término general de 2, 4, 8, 16…", o: ["2n", "n²", "2ⁿ", "n + 2"], a: 2, e: "Potencias de 2." },
    { q: "Siguiente término de Fibonacci tras 8 y 13:", o: ["18", "21", "26", "20"], a: 1, e: "8 + 13." },
    { q: "La sucesión 1, −2, 4, −8… es…", o: ["creciente", "decreciente", "alternada", "constante"], a: 2, e: "Cambia de signo." },
    { q: "En 10, 7, 4, 1… la diferencia es…", o: ["3", "−3", "1/3", "−1/3"], a: 1, e: "7 − 10." },
    { q: "Término general de una progresión aritmética:", o: ["a₁ + nd", "a₁ + (n − 1)d", "a₁ · dⁿ", "a₁ · rⁿ⁻¹"], a: 1, e: "n − 1 saltos." },
    { q: "Si a₁ = 3 y d = 5, a₁₀ =", o: ["50", "48", "53", "45"], a: 1, e: "3 + 9 · 5." },
    { q: "1 + 2 + … + 50 =", o: ["1.275", "2.550", "1.250", "2.500"], a: 0, e: "51 · 50/2." },
    { q: "La suma de una aritmética es…", o: ["(a₁ + aₙ)n/2", "a₁ · n", "a₁/(1 − r)", "aₙ · n"], a: 0, e: "Fórmula de Gauss." },
    { q: "En 5, 15, 45… la razón es…", o: ["10", "3", "1/3", "5"], a: 1, e: "15 : 5." },
    { q: "Término general de una geométrica:", o: ["a₁ + (n − 1)r", "a₁ · rⁿ", "a₁ · rⁿ⁻¹", "rⁿ⁻¹"], a: 2, e: "n − 1 multiplicaciones." },
    { q: "Si a₁ = 2 y r = 3, a₄ =", o: ["54", "18", "162", "24"], a: 0, e: "2 · 27." },
    { q: "1 + 2 + 4 + … + 2⁷ =", o: ["128", "255", "256", "127"], a: 1, e: "2⁸ − 1." },
    { q: "La suma infinita de una geométrica existe si…", o: ["r > 1", "|r| < 1", "r = 1", "siempre"], a: 1, e: "Los términos tienden a 0." },
    { q: "8 + 4 + 2 + 1 + … =", o: ["15", "16", "∞", "14"], a: 1, e: "8/(1 − 1/2)." },
    { q: "Un capital al 4 % compuesto se multiplica cada año por…", o: ["4", "0,04", "1,04", "1,4"], a: 2, e: "1 + 0,04." },
    { q: "Ahorrar 10 € más cada mes forma una progresión…", o: ["geométrica", "aritmética", "de Fibonacci", "alternada"], a: 1, e: "Se suma una cantidad fija." },
    { q: "Duplicarse cada día es una progresión…", o: ["aritmética de d = 2", "geométrica de r = 2", "constante", "decreciente"], a: 1, e: "Se multiplica por 2." },
    { q: "A largo plazo, ¿qué crece más?", o: ["aritmética con d grande", "geométrica con r > 1", "las dos igual", "depende del primer término"], a: 1, e: "El crecimiento exponencial supera al lineal." },
  ],
  examen: [
    { q: "Término general de 7, 11, 15…", o: ["4n + 3", "7n", "4n + 7", "3n + 4"], a: 0, e: "a₁ = 7, d = 4." },
    { q: "a₃ = 12 y a₇ = 28 (aritmética). d =", o: ["4", "16", "3", "7"], a: 0, e: "4d = 16." },
    { q: "Suma de los 10 primeros términos de 3, 7, 11…", o: ["210", "195", "420", "390"], a: 0, e: "a₁₀ = 39; (3 + 39) · 5." },
    { q: "Geométrica con a₁ = 1 y r = −2: a₅ =", o: ["−16", "16", "32", "−32"], a: 1, e: "(−2)⁴." },
    { q: "3 + 6 + 12 + 24 + 48 =", o: ["93", "96", "90", "45"], a: 0, e: "3(2⁵ − 1)." },
    { q: "12 + 4 + 4/3 + … =", o: ["16", "18", "36", "∞"], a: 1, e: "12/(1 − 1/3)." },
    { q: "¿Lugar que ocupa 61 en aₙ = 3n + 1?", o: ["20", "21", "19", "60"], a: 0, e: "3n = 60." },
    { q: "1.000 € al 10 % compuesto, a los 2 años:", o: ["1.200 €", "1.210 €", "1.100 €", "1.020 €"], a: 1, e: "1.000 · 1,1²." },
  ],
  feynman: ["Qué es el término general y para qué sirve", "En qué se diferencian una progresión aritmética y una geométrica", "Cómo sumó Gauss los números del 1 al 100", "Por qué una suma infinita puede dar un número finito"],
  figura: {
    titulo: "Las fórmulas de las progresiones",
    svg: resumen("Resumen de las fórmulas de progresiones aritméticas y geométricas", [
      ["Aritmética", "aₙ = a₁ + (n − 1)·d     Sₙ = (a₁ + aₙ)·n/2", "var(--pen)"],
      ["Geométrica", "aₙ = a₁·rⁿ⁻¹     Sₙ = a₁(rⁿ − 1)/(r − 1)", "var(--leaf)"],
      ["Suma infinita", "S = a₁/(1 − r) si −1 < r < 1", "var(--red)"],
      ["Interés compuesto", "Cₙ = C₀·(1 + i)ⁿ", "var(--inf)"],
    ]),
  },
  video: { id: "urD4CVZnqOc", titulo: "Progresión aritmética: suma de n términos de la sucesión", canal: "Matemáticas profe Alex", vistas: 1401577, megusta: 0 },
  mapa: mapa("SUCESIONES", "var(--inf)", [
    ["Sucesión", "término general · recurrencia", "var(--pen)"],
    ["Aritmética", "+d · aₙ = a₁ + (n−1)d", "var(--leaf)"],
    ["Geométrica", "·r · aₙ = a₁·rⁿ⁻¹", "var(--red)"],
    ["Sumas", "Gauss · a₁(rⁿ−1)/(r−1)", "var(--sun)"],
  ], 250),
  glosario: [
    ["Sucesión", "Lista ordenada de números que siguen una regla."],
    ["Término", "Cada uno de los números de una sucesión."],
    ["Término general", "Fórmula aₙ que da el término de lugar n."],
    ["Ley de recurrencia", "Regla que calcula cada término a partir de los anteriores."],
    ["Sucesión de Fibonacci", "1, 1, 2, 3, 5, 8…: cada término es la suma de los dos anteriores."],
    ["Sucesión creciente", "Cada término es mayor que el anterior."],
    ["Sucesión alternada", "Sus términos cambian de signo uno a uno."],
    ["Progresión aritmética", "Sucesión en la que se suma siempre la misma diferencia."],
    ["Diferencia", "Número fijo d que se suma en una progresión aritmética."],
    ["Progresión geométrica", "Sucesión en la que se multiplica siempre por la misma razón."],
    ["Razón", "Número fijo r por el que se multiplica en una progresión geométrica."],
    ["Interpolar", "Intercalar términos entre dos dados para formar una progresión."],
    ["Interés compuesto", "Interés que se suma al capital y genera nuevos intereses."],
    ["Número de oro", "φ ≈ 1,618, límite de los cocientes de Fibonacci."],
  ],
  situacion: {
    titulo: "Plan de ahorro para el viaje de fin de curso",
    reto: "La clase quiere reunir el dinero del viaje de fin de curso. Vais a diseñar y comparar planes de ahorro con progresiones aritméticas (aumentar una cantidad fija cada semana) y geométricas (aumentar un porcentaje) y a elegir el más realista.",
    pasos: [
      "Calculad el coste del viaje por alumno y el número de semanas que faltan.",
      "Diseñad un plan aritmético: cuánto se ahorra la primera semana y cuánto se aumenta cada semana.",
      "Diseñad un plan geométrico con un pequeño porcentaje de aumento semanal y comparad con hoja de cálculo.",
      "Calculad con las fórmulas el ahorro total de cada plan y comprobadlo con la hoja de cálculo.",
      "Decidid qué plan es más realista para una familia y presentad gráficas de los dos.",
    ],
    producto: "Un informe con los planes, las fórmulas, las gráficas y una recomendación razonada.",
    evaluacion: ["Identifica el tipo de progresión de cada plan.", "Aplica correctamente las fórmulas del término general y de la suma.", "Usa la hoja de cálculo para comprobar y representar.", "Argumenta la elección con criterios realistas."],
  },
  tarjetas: [
    ["aₙ", "Término de lugar n."], ["Recurrencia", "Cada término a partir de los anteriores."],
    ["Fibonacci", "aₙ = aₙ₋₁ + aₙ₋₂"], ["Diferencia d", "a₂ − a₁ (aritmética)."],
    ["aₙ aritmética", "a₁ + (n − 1)d"], ["Sₙ aritmética", "(a₁ + aₙ)·n/2"],
    ["Razón r", "a₂ : a₁ (geométrica)."], ["aₙ geométrica", "a₁·rⁿ⁻¹"],
    ["Sₙ geométrica", "a₁(rⁿ − 1)/(r − 1)"], ["Suma infinita", "a₁/(1 − r), |r| < 1"],
    ["Interés compuesto", "C₀(1 + i)ⁿ"], ["Lineal o exponencial", "Sumar → aritmética; multiplicar → geométrica."],
  ],
  familias: ["Buscad la sucesión de Fibonacci en flores, piñas o caracolas.", "Calculad juntos cuánto daría una cuenta de ahorro a interés compuesto.", "Proponed series de números y adivinad la regla.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico: patrones, sucesiones numéricas, término general y recurrencia, progresiones aritméticas y geométricas, suma de términos y aplicaciones como el interés compuesto (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Patrones con palillos o cubos para descubrir términos generales.", "Hoja de cálculo para comparar crecimiento lineal y exponencial.", "Teatro de Gauss: dramatizar la suma 1 + … + 100.", "Salida al patio para buscar Fibonacci en la naturaleza."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: sucesiones y progresiones (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
