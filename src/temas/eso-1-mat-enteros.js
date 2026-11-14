// Matemáticas 1º ESO · Los números enteros. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, recta, comparar, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const termometro = lienzo("Un termómetro marca temperaturas positivas por encima de cero y negativas por debajo", `
  <rect x="58" y="16" width="22" height="134" rx="11" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><circle cx="69" cy="156" r="15" fill="var(--red)"/><rect x="64" y="96" width="10" height="60" fill="var(--red)"/>
  ${[20, 10, 0, -10, -20].map((v, i) => `<path d="M80 ${30 + i * 26} H92" stroke="var(--ink)" stroke-width="2"/>${tx(98, 34 + i * 26, (v > 0 ? "+" : "") + v + " °C", { fs: 12, a: "start", c: v < 0 ? "var(--pen)" : v > 0 ? "var(--red)" : "var(--ink)" })}`).join("")}
  ${tx(196, 46, "sobre cero: +", { fs: 12, c: "var(--red)" })}${tx(196, 136, "bajo cero: −", { fs: 12, c: "var(--pen)" })}${tx(196, 92, "marca: −3 °C", { fs: 13, fam: D })}`);

const rectaZ = recta("Los números enteros en la recta: negativos a la izquierda del cero y positivos a la derecha; −3 y +3 son opuestos", {
  r: [-6, 6], marcas: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6], titulo: "Negativos ← 0 → Positivos",
  puntos: [{ x: -3, c: "var(--pen)" }, { x: 3, c: "var(--red)" }],
  tramos: [{ de: -3, a: 0, c: "var(--pen)", t: "3" }, { de: 0, a: 3, c: "var(--red)", t: "3" }],
});

const valorAbs = comparar("Valor absoluto: la distancia al cero, sin signo; opuesto: mismo valor absoluto y signo contrario", [
  ["Valor absoluto", ["|−7| = 7", "|+7| = 7", "|0| = 0", "distancia al 0"], "var(--leaf)"],
  ["Opuesto", ["op(+5) = −5", "op(−2) = +2", "op(0) = 0", "simétrico"], "var(--sun)"],
], "Dos ideas clave");

const orden = recta("Ordenar enteros: −8 es menor que −2 porque está más a la izquierda en la recta", {
  r: [-10, 4], marcas: [-10, -8, -6, -4, -2, 0, 2, 4], titulo: "−8 < −2 < 0 < 3",
  puntos: [{ x: -8, t: "−8", c: "var(--pen)" }, { x: -2, t: "−2", c: "var(--leaf)" }, { x: 3, t: "3", c: "var(--red)" }],
});

const sumaMismo = comparar("Sumar enteros: con el mismo signo se suman y se pone el signo; con distinto signo se restan y se pone el del mayor valor absoluto", [
  ["Mismo signo", ["(+4) + (+3) = +7", "(−4) + (−3) = −7", "se suman", "y se deja el signo"], "var(--pen)"],
  ["Distinto signo", ["(+6) + (−9) = −3", "(−2) + (+8) = +6", "se restan", "signo del mayor |n|"], "var(--red)"],
], "Sumar enteros");

const fichas = lienzo("Fichas positivas y negativas: tres positivas y cinco negativas se anulan por parejas y quedan dos negativas", `
  ${[0, 1, 2].map((i) => `<circle cx="${40 + i * 34}" cy="42" r="13" fill="var(--red)"/>${tx(40 + i * 34, 47, "+", { fs: 16, c: "#fff" })}`).join("")}
  ${[0, 1, 2, 3, 4].map((i) => `<circle cx="${40 + i * 34}" cy="84" r="13" fill="var(--pen)"/>${tx(40 + i * 34, 89, "−", { fs: 16, c: "#fff" })}`).join("")}
  ${[0, 1, 2].map((i) => `<path d="M${40 + i * 34} 56 V70" stroke="var(--muted)" stroke-width="2" stroke-dasharray="3 2"/>`).join("")}
  ${tx(220, 64, "se anulan", { fs: 11, c: "var(--muted)", max: 70 })}
  ${tx(130, 132, "(+3) + (−5) = −2", { fs: 17, fam: D })}${tx(130, 158, "cada + y − juntos valen 0", { fs: 12, c: "var(--muted)" })}`);

const restar = pasos("Restar enteros: restar es sumar el opuesto", ["(+3) − (−5)", "Cambiar a suma del opuesto", "(+3) + (+5)", "= +8"], "Restar = sumar el opuesto");

const parentesis = cajas("Quitar paréntesis: un más delante deja los signos igual y un menos delante los cambia", [
  ["+ ( + )", ["+"]], ["+ ( − )", ["−"]], ["− ( + )", ["−"]], ["− ( − )", ["+"]],
], "Signo delante del paréntesis");

const signos = lienzo("Regla de los signos para multiplicar y dividir: signos iguales dan más y signos distintos dan menos", `
  ${tx(130, 24, "Regla de los signos (· y :)", { fs: 13, c: "var(--muted)" })}
  ${[["+", "+", "+"], ["−", "−", "+"], ["+", "−", "−"], ["−", "+", "−"]].map(([a, b, r], i) => { const y = 40 + i * 30, c = r === "+" ? "var(--leaf)" : "var(--red)"; return `<rect x="50" y="${y}" width="160" height="24" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>${tx(130, y + 17, `${a}  ·  ${b}  =  ${r}`, { fs: 15, fam: D, c })}`; }).join("")}
  ${tx(130, 172, "iguales → +   distintos → −", { fs: 12 })}`, 182);

const jer = pasos("Operaciones combinadas con enteros: paréntesis, productos y cocientes, y luego sumas y restas", ["−3 + 4 · (−2) − (−12) : 3", "Productos: 4 · (−2) = −8", "Cocientes: (−12) : 3 = −4", "−3 − 8 − (−4) = −3 − 8 + 4", "= −7"], "Paso a paso");

const ascensor = lienzo("Un edificio con sótanos: la planta 0 es la calle, las plantas positivas arriba y los sótanos negativos abajo", `
  ${[3, 2, 1, 0, -1, -2].map((p, i) => `<rect x="70" y="${12 + i * 26}" width="80" height="24" rx="3" fill="${p < 0 ? "var(--pen)" : p === 0 ? "var(--leaf)" : "var(--sun)"}" fill-opacity=".25" stroke="var(--muted)" stroke-width="1.5"/>${tx(110, 29 + i * 26, p > 0 ? "+" + p : p, { fs: 13, fam: D })}`).join("")}
  <path d="M60 90 H160" stroke="var(--leaf)" stroke-width="3"/>${tx(200, 94, "calle", { fs: 12, c: "var(--leaf)" })}
  ${tx(205, 140, "de −2 a +3:", { fs: 11.5 })}${tx(205, 158, "3 − (−2) = 5", { fs: 12.5, fam: D, c: "var(--red)" })}`, 176);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Los números enteros",
  minutos: 100,
  objetivos: [
    "Reconocer situaciones en las que se usan números negativos",
    "Representar, comparar y ordenar enteros en la recta numérica",
    "Calcular el valor absoluto y el opuesto de un número entero",
    "Sumar y restar enteros y quitar paréntesis correctamente",
    "Multiplicar y dividir enteros con la regla de los signos",
    "Resolver operaciones combinadas y problemas con enteros",
  ],
  claves: ["número entero", "positivo", "negativo", "valor absoluto", "opuesto", "regla de los signos"],
  pregunta: {
    texto: "En el desierto del Sáhara se pueden pasar de 45 °C de día a −5 °C de noche. ¿Cuántos grados baja la temperatura?",
    respuesta: "Hay que calcular la diferencia entre los dos valores: 45 − (−5) = 45 + 5 = <mark>50 grados</mark>. Para describir temperaturas bajo cero, deudas, sótanos o profundidades necesitamos los <b>números enteros</b>, que incluyen los negativos.",
  },
  lectura: {
    titulo: "Los números que debían dinero",
    html: `<p>Durante siglos, muchos matemáticos europeos desconfiaron de los números negativos. ¿Cómo va a haber algo «menos que nada»? Si tienes 3 manzanas y te quitan 5, simplemente no se puede. Hasta el siglo XVII, algunos los llamaban «números absurdos» o «falsos».</p><p>Sin embargo, en China ya los usaban hace más de 2 000 años. Para hacer cuentas utilizaban palillos de bambú: los rojos para las cantidades que se tenían y los negros para las que se debían. Y en la India, en el siglo VII, el matemático Brahmagupta escribió reglas para operar con «fortunas» (positivos) y «deudas» (negativos). Una de ellas decía: «una deuda restada de la nada se convierte en una fortuna». Es decir, 0 − (−3) = +3.</p><p>Hoy usamos los negativos sin pensarlo: el termómetro marca −4 °C, el ascensor baja al sótano −2, el banco te muestra un saldo de −20 € si gastas más de lo que tienes, y un submarino está a −300 m. En este tema aprenderás a ordenar estos números, a sumarlos, restarlos, multiplicarlos y dividirlos sin liarte con los signos.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Para qué sirven los números enteros?</h3><p>Con los números naturales no podemos describir muchas situaciones: una temperatura bajo cero, una planta de sótano, una deuda o una profundidad bajo el nivel del mar. Para eso usamos números con signo: <b>positivos</b> (+) para lo que está por encima de un punto de referencia, y <b>negativos</b> (−) para lo que está por debajo.</p><p>El punto de referencia es el <b>cero</b>, y no siempre significa «nada»: 0 °C es la temperatura a la que se congela el agua, la planta 0 es la de la calle y el nivel 0 es el nivel del mar. Así, −3 °C son tres grados bajo cero y +2 345 m es la altura de una montaña.</p><p>Otros ejemplos: los goles a favor y en contra de un equipo (diferencia de goles +5 o −2), los años antes y después de Cristo, o el saldo de una cuenta. Cuando el signo es positivo se puede omitir: +7 y 7 son el mismo número.</p>`, svg: termometro },
    { html: `<h3>1.2 El conjunto de los números enteros</h3><p>Los <b>números enteros</b> son los naturales junto con sus correspondientes negativos: …, −3, −2, −1, 0, +1, +2, +3, … El conjunto se representa con la letra <mark>ℤ</mark> (del alemán <i>Zahlen</i>, «números»).</p><ul><li><b>Enteros positivos</b>: +1, +2, +3… (son los naturales sin el 0).</li><li><b>Enteros negativos</b>: −1, −2, −3…</li><li>El <b>cero</b>, que no es ni positivo ni negativo.</li></ul><p>A diferencia de los naturales, los enteros <b>no tienen primer elemento</b>: siempre hay uno más pequeño. Pero cada entero sigue teniendo un anterior y un siguiente: el siguiente de −5 es −4 (no −6, cuidado) y el anterior de −5 es −6.</p><p>Con los enteros, por fin, se pueden hacer todas las restas: 3 − 5 = −2. Por eso decimos que ℤ amplía a ℕ, igual que más adelante las fracciones y los decimales ampliarán a los enteros.</p>` },
    { html: `<h3>1.3 La recta numérica</h3><p>Para representar los enteros se dibuja una recta, se marca el 0 y se colocan los <b>positivos a la derecha</b> y los <b>negativos a la izquierda</b>, todos a la misma distancia. La recta numérica es la mejor herramienta para «ver» los enteros: sumar es avanzar a la derecha, restar es ir a la izquierda, y comparar es mirar cuál está más a la derecha.</p><p>Fíjate en que +3 y −3 están a la misma distancia del cero, uno a cada lado. Son números simétricos respecto al 0, como un número y su reflejo en un espejo.</p><p>La recta también sirve para situar acontecimientos históricos: si el año 0 es el nacimiento de Cristo, Julio César murió en el −44 (44 a. C.) y la caída de Roma fue en el +476. Entre los dos hay 476 − (−44) = 520 años.</p>`, svg: rectaZ, video: vb("entB") },
    { html: `<h3>1.4 Valor absoluto y opuesto</h3><p>El <b>valor absoluto</b> de un entero es la <b>distancia</b> que lo separa del cero, sin tener en cuenta el signo. Se escribe entre dos barras: <mark>|−7| = 7</mark> y |+7| = 7. Como es una distancia, el valor absoluto nunca es negativo: |0| = 0 y el resto son positivos.</p><p>El <b>opuesto</b> de un entero es el que tiene el mismo valor absoluto pero el <b>signo contrario</b>: el opuesto de +5 es −5, y el opuesto de −2 es +2. El opuesto de 0 es 0. Se escribe op(a) o simplemente −a. Un número y su opuesto siempre suman cero: (+5) + (−5) = 0.</p><p>Ojo con −(−4): es el opuesto de −4, que es +4. Esta idea de «el opuesto del opuesto es el número original» será clave para quitar paréntesis y para restar enteros.</p>`, svg: valorAbs },
    { html: `<h3>1.5 Comparar y ordenar enteros</h3><p>En la recta numérica, <b>un número es mayor cuanto más a la derecha está</b>. De aquí salen tres reglas sencillas:</p><ul><li>Cualquier positivo es mayor que cualquier negativo: +1 &gt; −100.</li><li>El cero es mayor que cualquier negativo y menor que cualquier positivo.</li><li>Entre dos negativos, es mayor el que tiene <b>menor valor absoluto</b>: −2 &gt; −8, porque −2 está más cerca del cero.</li></ul><p>Esta última regla confunde al principio, pero piensa en temperaturas: −2 °C es menos frío que −8 °C, así que −2 es «más» que −8. O en dinero: deber 2 € es mejor que deber 8 €.</p><p>Para ordenar varios enteros de menor a mayor, colócalos en la recta y léelos de izquierda a derecha: −8 &lt; −5 &lt; −2 &lt; 0 &lt; 3 &lt; 7.</p>`, svg: orden },
    { html: `<h3>2.1 Sumar enteros</h3><p>Para sumar dos enteros hay dos casos:</p><ul><li><b>Mismo signo</b>: se suman los valores absolutos y se pone el <b>signo común</b>. (+4) + (+3) = +7; (−4) + (−3) = −7. Si debes 4 € y luego 3 € más, debes 7 €.</li><li><b>Distinto signo</b>: se <b>restan</b> los valores absolutos (el mayor menos el menor) y se pone el signo del que tiene <b>mayor valor absoluto</b>. (+6) + (−9) = −3; (−2) + (+8) = +6. Si tienes 6 € y debes 9 €, al pagar te quedan 3 € de deuda.</li></ul><p>En la recta, sumar un positivo es avanzar hacia la derecha y sumar un negativo es retroceder hacia la izquierda. Partiendo de +6 y retrocediendo 9 lugares, llegas a −3.</p><p>La suma de enteros es conmutativa y asociativa, el 0 es el elemento neutro y cada número tiene su opuesto, que suma 0 con él.</p>`, svg: sumaMismo },
    { html: `<h3>2.2 Sumar con fichas y sumar muchos números</h3><p>Una forma de entender la suma es con <b>fichas</b>: rojas para los positivos y azules para los negativos. Una ficha roja y una azul juntas se <b>anulan</b> (valen 0). Para calcular (+3) + (−5) se ponen 3 rojas y 5 azules, se eliminan 3 parejas y quedan 2 azules: el resultado es <mark>−2</mark>.</p><p>Cuando hay que sumar muchos enteros, lo más cómodo es agrupar: se suman por un lado todos los positivos y por otro todos los negativos, y al final se hace una sola operación. Ejemplo: (+5) + (−3) + (+8) + (−6) + (−1). Positivos: 5 + 8 = 13. Negativos: 3 + 6 + 1 = 10, es decir, −10. Total: 13 − 10 = <b>+3</b>.</p><p>Este método reduce mucho los errores. Es el que usan, por ejemplo, los contables para hacer balances: ingresos por un lado, gastos por otro y la diferencia al final.</p>`, svg: fichas },
    { html: `<h3>2.3 Restar enteros</h3><p>Restar enteros parece más difícil, pero tiene un truco que lo convierte en una suma: <mark>restar un número es lo mismo que sumar su opuesto</mark>.</p><ul><li>(+3) − (+5) = (+3) + (−5) = −2.</li><li>(+3) − (−5) = (+3) + (+5) = +8.</li><li>(−4) − (−6) = (−4) + (+6) = +2.</li></ul><p>¿Por qué restar un negativo hace aumentar? Piensa en una deuda: si te «quitan» una deuda de 5 €, estás 5 € mejor que antes. O en temperaturas: la diferencia entre 3 °C y −5 °C es 3 − (−5) = 8 grados, como se ve contando en el termómetro.</p><p>La resta sirve sobre todo para calcular <b>diferencias</b> o <b>variaciones</b>: valor final menos valor inicial. Si la temperatura pasa de −2 °C a 5 °C, la variación es 5 − (−2) = +7 (sube 7 grados). Si pasa de 5 °C a −2 °C, es −2 − 5 = −7 (baja 7 grados).</p>`, svg: restar },
    { html: `<h3>2.4 Quitar paréntesis</h3><p>En la práctica, los enteros se escriben sin tantos paréntesis. Para quitarlos se mira el signo que hay <b>delante</b> del paréntesis:</p><ul><li>Si delante hay un <b>+</b>, el número queda con su signo: +(−3) = −3; +(+3) = +3.</li><li>Si delante hay un <b>−</b>, el número cambia de signo: −(−3) = +3; −(+3) = −3.</li></ul><p>Así, (+5) − (−2) + (−7) − (+4) se escribe 5 + 2 − 7 − 4 = <b>−4</b>.</p><p>Si dentro del paréntesis hay varias operaciones, puedes resolver primero el paréntesis o quitarlo cambiando todos los signos de dentro cuando delante hay un menos: 10 − (3 − 8 + 2) = 10 − (−3) = 13, o bien 10 − 3 + 8 − 2 = 13. ¡Las dos formas dan lo mismo!</p>`, svg: parentesis },
    { html: `<h3>2.5 Multiplicar y dividir: la regla de los signos</h3><p>Para multiplicar o dividir enteros se multiplican o dividen los valores absolutos, y el signo del resultado se decide con la <b>regla de los signos</b>: <mark>signos iguales dan positivo; signos distintos dan negativo</mark>.</p>${tabla(["", "(+) · (+)", "(−) · (−)", "(+) · (−)", "(−) · (+)"], [["Signo", "+", "+", "−", "−"], ["Ejemplo", "(+3) · (+4) = +12", "(−3) · (−4) = +12", "(+3) · (−4) = −12", "(−12) : (+4) = −3"]])}<p>¿Por qué menos por menos da más? Mira esta serie: (−3) · 2 = −6; (−3) · 1 = −3; (−3) · 0 = 0. Cada vez que el segundo factor baja 1, el resultado sube 3. Siguiendo el patrón, (−3) · (−1) = +3 y (−3) · (−2) = +6.</p><p>Con varios factores, cuenta los negativos: si hay un número <b>par</b> de negativos, el resultado es positivo; si es <b>impar</b>, negativo. (−1) · (−2) · (−3) = −6.</p>`, svg: signos, video: vb("entB2") },
    { html: `<h3>2.6 Operaciones combinadas con enteros</h3><p>La jerarquía de las operaciones es la misma que con naturales: <b>paréntesis</b>, después <b>potencias</b>, después <b>multiplicaciones y divisiones</b> y por último <b>sumas y restas</b>, de izquierda a derecha. La novedad es que hay que aplicar a la vez la regla de los signos.</p><p>Ejemplo: −3 + 4 · (−2) − (−12) : 3.</p><ul><li>Productos y cocientes: 4 · (−2) = −8 y (−12) : 3 = −4.</li><li>Queda: −3 + (−8) − (−4) = −3 − 8 + 4.</li><li>Sumas y restas: −11 + 4 = <b>−7</b>.</li></ul><p>Un error muy frecuente es aplicar la regla de los signos a una suma: −3 − 8 no es +11 (la regla de los signos es solo para multiplicar y dividir). Para no equivocarte, trabaja despacio y cambia un solo paso cada vez.</p>`, svg: jer },
    { html: `<h3>2.7 Problemas con números enteros</h3><p>Muchos problemas con enteros consisten en calcular una <b>variación</b> o una <b>diferencia</b> (final − inicial) o en encadenar cambios. Algunos ejemplos:</p><ul><li><b>Ascensor</b>: subes del sótano −2 a la planta +3. Recorres 3 − (−2) = 5 plantas.</li><li><b>Temperaturas</b>: a las 6:00 hay −4 °C, sube 3 °C cada hora. A las 10:00: −4 + 4 · 3 = +8 °C.</li><li><b>Dinero</b>: tienes 25 €, gastas 40 € con la tarjeta y te devuelven 10 €. Saldo: 25 − 40 + 10 = −5 € (en números rojos).</li><li><b>Historia</b>: Arquímedes nació en el 287 a. C. y murió en el 212 a. C. Vivió −212 − (−287) = 75 años.</li></ul><p>Cuando resuelvas, elige bien el cero de referencia, asigna signo a cada dato y escribe la respuesta con palabras: «la temperatura baja 7 grados» es más claro que «−7».</p>`, svg: ascensor, video: vg("entV") },
  ],
  ejemplos: [
    { enunciado: "Ordena de menor a mayor: +4, −7, 0, −1, +2, −10.", pasos: ["Negativos: el de mayor valor absoluto es el menor: −10 < −7 < −1.", "Después el 0 y los positivos."], resultado: "−10 < −7 < −1 < 0 < +2 < +4." },
    { enunciado: "Calcula: (−8) + (+5) + (−6) + (+12).", pasos: ["Positivos: 5 + 12 = 17.", "Negativos: 8 + 6 = 14 → −14.", "17 − 14."], resultado: "+3." },
    { enunciado: "Calcula: 7 − (−3) + (−9) − (+4).", pasos: ["Quitar paréntesis: 7 + 3 − 9 − 4.", "10 − 13."], resultado: "−3." },
    { enunciado: "Calcula: (−2) · (+5) · (−3) : (−6).", pasos: ["Valores absolutos: 2 · 5 · 3 : 6 = 5.", "Tres negativos (impar) → signo −."], resultado: "−5." },
    { enunciado: "Calcula: 15 − 3 · [4 − (−2)] : (−9).", pasos: ["Corchete: 4 + 2 = 6.", "3 · 6 = 18; 18 : (−9) = −2.", "15 − (−2) = 15 + 2."], resultado: "17." },
    { enunciado: "Un buzo está a −18 m y sube 7 m; después baja 12 m. ¿A qué profundidad queda?", pasos: ["−18 + 7 − 12.", "−11 − 12 = −23."], resultado: "A 23 m bajo el nivel del mar (−23 m)." },
  ],
  errores: [
    "Pensar que −8 es mayor que −2 porque 8 > 2: con negativos es al revés.",
    "Aplicar la regla de los signos a sumas y restas: −3 − 8 = −11, no +11.",
    "Olvidar cambiar el signo al restar un negativo: 5 − (−3) = 8, no 2.",
    "Creer que el valor absoluto de un número puede ser negativo.",
    "Decir que el siguiente de −5 es −6: es −4.",
    "Equivocarse con el signo en productos de varios factores: cuenta los negativos.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Expresa con un número entero: a) 6 grados bajo cero; b) segundo sótano; c) una ganancia de 30 €; d) 400 m de profundidad.", sol: "a) −6 b) −2 c) +30 d) −400." },
    { nivel: "básico", q: "Representa en una recta: −5, +3, 0, −1, +6.", sol: "De izquierda a derecha: −5, −1, 0, +3, +6, a la misma distancia por unidad." },
    { nivel: "básico", q: "Calcula: |−12|, |+9|, |0| y el opuesto de −15 y de +4.", sol: "12; 9; 0. Opuestos: +15 y −4." },
    { nivel: "básico", q: "Escribe el anterior y el siguiente de −9 y de 0.", sol: "−9: anterior −10, siguiente −8. 0: anterior −1, siguiente +1." },
    { nivel: "básico", q: "Escribe < o >: −3 … −7; 0 … −2; −10 … +1; −4 … −5.", sol: "−3 > −7; 0 > −2; −10 < +1; −4 > −5." },
    { nivel: "básico", q: "Ordena de mayor a menor: −6, +2, −11, +9, −1, 0.", sol: "+9 > +2 > 0 > −1 > −6 > −11." },
    { nivel: "básico", q: "Calcula: (+7) + (+5); (−7) + (−5); (+7) + (−5); (−7) + (+5).", sol: "+12; −12; +2; −2." },
    { nivel: "básico", q: "Calcula: (+4) − (+9); (+4) − (−9); (−4) − (+9); (−4) − (−9).", sol: "−5; +13; −13; +5." },
    { nivel: "básico", q: "Quita paréntesis: +(−8), −(+3), −(−6), +(+1).", sol: "−8; −3; +6; +1." },
    { nivel: "básico", q: "Calcula: (+6) · (−4); (−6) · (−4); (−24) : (+6); (−24) : (−4).", sol: "−24; +24; −4; +6." },
    { nivel: "básico", q: "Calcula: 8 − 15; −3 − 9; −12 + 20.", sol: "−7; −12; +8." },
    { nivel: "básico", q: "Completa: (−5) · … = +35; … : (−3) = −7.", sol: "(−5) · (−7) = +35; (+21) : (−3) = −7." },
    { nivel: "medio", q: "Calcula agrupando: 12 − 7 + 3 − 15 − 2 + 6.", sol: "Positivos 12 + 3 + 6 = 21; negativos 7 + 15 + 2 = 24. 21 − 24 = −3." },
    { nivel: "medio", q: "Calcula: (−3) + (−8) − (−10) + (+4) − (+2).", sol: "−3 − 8 + 10 + 4 − 2 = 14 − 13 = +1." },
    { nivel: "medio", q: "Calcula de dos formas: 9 − (4 − 11 + 2).", sol: "1) Paréntesis: 4 − 11 + 2 = −5; 9 − (−5) = 14. 2) Quitar: 9 − 4 + 11 − 2 = 14." },
    { nivel: "medio", q: "Calcula: (−2) · (−3) · (−5) y (−1) · (−1) · (−1) · (−1).", sol: "Tres negativos: −30. Cuatro negativos: +1." },
    { nivel: "medio", q: "Calcula: 6 + 4 · (−3) − 10 : (−2).", sol: "4 · (−3) = −12; 10 : (−2) = −5. 6 − 12 + 5 = −1." },
    { nivel: "medio", q: "Calcula: (−18) : 3 − 2 · (5 − 9).", sol: "−6 − 2 · (−4) = −6 + 8 = 2." },
    { nivel: "medio", q: "Calcula: −[8 − (3 − 10)] + 4 · (−2).", sol: "3 − 10 = −7; 8 − (−7) = 15; −15 + (−8) = −23." },
    { nivel: "medio", q: "Un día la mínima fue −6 °C y la máxima 11 °C. ¿Cuál fue la amplitud térmica?", sol: "11 − (−6) = 17 grados." },
    { nivel: "medio", q: "Platón nació en el 427 a. C. y murió en el 347 a. C. ¿Cuántos años vivió?", sol: "−347 − (−427) = 80 años." },
    { nivel: "medio", q: "Un ascensor está en la planta 4, baja 7 plantas y luego sube 2. ¿Dónde está?", sol: "4 − 7 + 2 = −1: en el primer sótano." },
    { nivel: "avanzado", q: "Halla dos enteros cuya suma sea −3 y cuyo producto sea −10.", sol: "−5 y +2: −5 + 2 = −3 y (−5) · 2 = −10." },
    { nivel: "avanzado", q: "Calcula: [(−4) · 3 − (−6)] : [2 − (−1)] + (−2)³.", sol: "−12 + 6 = −6; 2 + 1 = 3; −6 : 3 = −2; (−2)³ = −8. −2 − 8 = −10." },
    { nivel: "avanzado", q: "Una cuenta tenía 120 €. Se pagan 3 recibos de 45 € y se ingresan 2 de 20 €. ¿Cuál es el saldo?", sol: "120 − 3 · 45 + 2 · 20 = 120 − 135 + 40 = 25 €." },
    { nivel: "avanzado", q: "La temperatura baja 2 °C cada hora desde las 18:00, cuando marca 5 °C. ¿A qué hora llegará a −7 °C?", sol: "Debe bajar 5 − (−7) = 12 grados: 12 : 2 = 6 horas. A las 24:00 (medianoche)." },
    { nivel: "avanzado", q: "En un juego ganas 5 puntos por acierto y pierdes 3 por fallo. Con 12 preguntas has obtenido 20 puntos. ¿Cuántas acertaste?", sol: "Probando: 7 aciertos y 5 fallos: 35 − 15 = 20 ✓. Acertaste 7." },
    { nivel: "avanzado", q: "¿Qué signo tiene (−1)²⁰²⁶ · (−3)⁵? Explícalo.", sol: "(−1)²⁰²⁶ = +1 (exponente par); (−3)⁵ es negativo (impar). Producto: negativo." },
    { nivel: "avanzado", q: "Encuentra el error: «−3² + 5 = 9 + 5 = 14».", sol: "−3² significa −(3²) = −9, así que −9 + 5 = −4. Sería 14 si fuera (−3)² + 5." },
    { nivel: "avanzado", q: "Inventa un problema de temperaturas que se resuelva con −2 − (−9) y resuélvelo.", sol: "Ejemplo: «Por la noche había −9 °C y al amanecer −2 °C. ¿Cuánto subió?». −2 − (−9) = 7 grados." },
  ],
  quiz: [
    { q: "Tres grados bajo cero se escribe…", o: ["+3 °C", "−3 °C", "3 °C", "0,3 °C"], a: 1, e: "Bajo cero: negativo." },
    { q: "El conjunto de los enteros se llama…", o: ["ℕ", "ℤ", "ℚ", "ℝ"], a: 1, e: "Del alemán Zahlen." },
    { q: "El siguiente de −5 es…", o: ["−6", "−4", "+5", "−5,1"], a: 1, e: "Un paso a la derecha." },
    { q: "|−9| =", o: ["−9", "9", "0", "1/9"], a: 1, e: "Distancia al 0." },
    { q: "El opuesto de −12 es…", o: ["−12", "+12", "1/12", "0"], a: 1, e: "Mismo valor absoluto, signo contrario." },
    { q: "¿Qué número es mayor?", o: ["−8", "−3", "−10", "−5"], a: 1, e: "Más cerca del 0." },
    { q: "¿Cuál es cierto?", o: ["−1 < −4", "0 < −2", "−6 < −2", "+1 < −9"], a: 2, e: "−6 está más a la izquierda." },
    { q: "(−6) + (−4) =", o: ["−10", "+10", "−2", "+2"], a: 0, e: "Mismo signo: se suman." },
    { q: "(+6) + (−4) =", o: ["+10", "−2", "+2", "−10"], a: 2, e: "6 − 4, signo del 6." },
    { q: "(−6) + (+4) =", o: ["−2", "+2", "−10", "+10"], a: 0, e: "Signo del mayor |n|." },
    { q: "5 − (−3) =", o: ["2", "8", "−8", "−2"], a: 1, e: "Restar es sumar el opuesto." },
    { q: "−5 − 3 =", o: ["−8", "−2", "+8", "+2"], a: 0, e: "Se acumula: −8." },
    { q: "−(−7) =", o: ["−7", "+7", "0", "−14"], a: 1, e: "Menos delante cambia el signo." },
    { q: "(−4) · (−5) =", o: ["−20", "+20", "−9", "+9"], a: 1, e: "Signos iguales: +." },
    { q: "(+35) : (−7) =", o: ["+5", "−5", "−28", "+28"], a: 1, e: "Signos distintos: −." },
    { q: "(−1) · (−1) · (−1) =", o: ["+1", "−1", "−3", "+3"], a: 1, e: "Tres negativos: impar." },
    { q: "2 − 3 · (−4) =", o: ["4", "14", "−10", "−14"], a: 1, e: "2 + 12." },
    { q: "Las fichas: 4 rojas (+) y 7 azules (−) valen…", o: ["+3", "−3", "+11", "−11"], a: 1, e: "Se anulan 4 parejas." },
    { q: "De −3 °C a 5 °C la temperatura…", o: ["sube 2", "sube 8", "baja 8", "baja 2"], a: 1, e: "5 − (−3) = 8." },
    { q: "Un año a. C. se representa con…", o: ["un positivo", "un negativo", "el cero", "un decimal"], a: 1, e: "Antes de la referencia." },
  ],
  examen: [
    { q: "Ordena: −2, −9, 3", o: ["−2 < −9 < 3", "−9 < −2 < 3", "3 < −2 < −9", "−9 < 3 < −2"], a: 1, e: "De izquierda a derecha." },
    { q: "|−4| + |3| =", o: ["−1", "1", "7", "−7"], a: 2, e: "4 + 3." },
    { q: "−8 + 3 − 5 + 10 =", o: ["0", "−26", "26", "−10"], a: 0, e: "13 − 13." },
    { q: "(−3) − (−8) =", o: ["−11", "+5", "−5", "+11"], a: 1, e: "−3 + 8." },
    { q: "(−2) · (+6) : (−3) =", o: ["+4", "−4", "−36", "+36"], a: 0, e: "Dos negativos." },
    { q: "10 − 2 · (3 − 7) =", o: ["−32", "18", "2", "−18"], a: 1, e: "10 − 2 · (−4) = 10 + 8." },
    { q: "Un submarino a −120 m sube 45 m. Queda a…", o: ["−165 m", "−75 m", "+75 m", "−45 m"], a: 1, e: "−120 + 45." },
    { q: "Si a las 7:00 hay −5 °C y a las 13:00, 7 °C, sube…", o: ["2 grados", "12 grados", "−12 grados", "6 grados"], a: 1, e: "7 − (−5)." },
  ],
  feynman: ["Para qué sirven los números negativos y qué significa el cero en cada caso", "Por qué −2 es mayor que −8", "Por qué restar un número negativo es como sumar", "Por qué menos por menos da más"],
  figura: {
    titulo: "Los números enteros en un vistazo",
    svg: resumen("Resumen del tema de los números enteros", [
      ["ℤ", "… −3, −2, −1, 0, +1, +2, +3 …  (negativos, cero y positivos)", "var(--pen)"],
      ["|a| y −a", "valor absoluto = distancia al 0 · opuesto: cambia el signo", "var(--leaf)"],
      ["Sumar", "mismo signo: sumar · distinto: restar con signo del mayor", "var(--sun)"],
      ["Restar", "sumar el opuesto: a − (−b) = a + b", "var(--inf)"],
      ["· y :", "signos iguales → + · signos distintos → −", "var(--red)"],
    ]),
  },
  video: vg("entV"),
  mapa: mapa("ENTEROS", "var(--pen)", [
    ["Representar", "recta · |a| · opuesto", "var(--pen)"],
    ["Ordenar", "más a la derecha, mayor", "var(--leaf)"],
    ["Sumar y restar", "fichas · sumar el opuesto", "var(--sun)"],
    ["Multiplicar", "regla de los signos", "var(--red)"],
  ], 250),
  glosario: [
    ["Número entero", "Número natural, su opuesto negativo o el cero."],
    ["Número positivo", "Entero mayor que cero; lleva signo + (que se puede omitir)."],
    ["Número negativo", "Entero menor que cero; lleva signo −."],
    ["Recta numérica", "Recta en la que se representan los números ordenados."],
    ["Valor absoluto", "Distancia de un número al cero: |−5| = 5."],
    ["Opuesto", "Número con el mismo valor absoluto y signo contrario."],
    ["Elemento neutro de la suma", "El 0: sumarlo no cambia el número."],
    ["Regla de los signos", "En · y :, signos iguales dan + y distintos dan −."],
    ["Variación", "Diferencia entre el valor final y el inicial."],
    ["Amplitud térmica", "Diferencia entre la temperatura máxima y la mínima."],
    ["Saldo", "Dinero que queda en una cuenta; puede ser negativo."],
    ["Nivel del mar", "Altura 0 de referencia para alturas y profundidades."],
  ],
  situacion: {
    titulo: "El diario del tiempo de la clase",
    reto: "Vais a recoger durante dos semanas las temperaturas mínimas y máximas de vuestra ciudad y de una ciudad muy fría (por ejemplo, en Canadá, Rusia o Noruega) y a analizarlas con números enteros.",
    pasos: [
      "Anotad cada día la mínima y la máxima de las dos ciudades en una tabla (web de meteorología fiable).",
      "Calculad la amplitud térmica diaria (máxima − mínima) y la variación de un día al siguiente.",
      "Ordenad las mínimas de menor a mayor y localizad el día más frío de cada ciudad.",
      "Representad las temperaturas en una recta o en un gráfico de líneas con el 0 bien marcado.",
      "Escribid tres conclusiones usando frases con números enteros («subió 7 grados», «bajó de 3 °C a −4 °C»).",
    ],
    producto: "Un diario del tiempo (cartel o presentación) con la tabla, los cálculos y el gráfico.",
    evaluacion: ["Representa y ordena correctamente los enteros.", "Calcula diferencias y variaciones con el signo adecuado.", "Interpreta los resultados en el contexto real.", "Presenta los datos con orden y fuentes."],
  },
  tarjetas: [
    ["ℤ", "Naturales, sus opuestos y el 0"], ["|−a|", "a (distancia al 0)"], ["Opuesto de a", "−a"],
    ["¿−2 o −8?", "−2 es mayor"], ["Mismo signo (+)", "Sumar y dejar el signo"], ["Distinto signo (+)", "Restar; signo del mayor |n|"],
    ["Restar", "Sumar el opuesto"], ["−(−a)", "+a"], ["(+)·(+) y (−)·(−)", "+"],
    ["(+)·(−) y (−)·(+)", "−"], ["Varios factores", "Nº de negativos par → +, impar → −"], ["Variación", "Final − inicial"],
  ],
  familias: ["Mirad juntos el tiempo de varias ciudades del mundo y calculad diferencias de temperatura.", "En el ascensor o en un aparcamiento, preguntad cuántas plantas hay entre un sótano y una planta alta.", "Haced una línea del tiempo familiar con años antes y después de un acontecimiento.", "Jugad a las cartas con rojas positivas y negras negativas: gana quien sume más."],
  profesores: {
    saberes: "Sentido numérico: números enteros, representación, orden y valor absoluto; operaciones (suma, resta, multiplicación y división) y sus propiedades; jerarquía de operaciones y problemas en contextos reales (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Fichas de dos colores para modelizar sumas y restas.", "Recta numérica gigante en el suelo del aula para «caminar» las operaciones.", "Análisis de extractos bancarios ficticios con saldo negativo.", "Línea del tiempo histórica con años a. C. y d. C."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): números enteros", url: "https://proyectodescartes.org/" }, { t: "Wikipedia: Número entero", url: "https://es.wikipedia.org/wiki/Número_entero" }],
  revisado: REV,
};
