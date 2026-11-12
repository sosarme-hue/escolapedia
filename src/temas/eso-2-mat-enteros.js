// Matemáticas 2º ESO: números enteros. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, recta, chips, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Números enteros",
  minutos: 55,
  objetivos: ["Representar y ordenar números enteros en la recta", "Calcular el valor absoluto y el opuesto de un entero", "Sumar, restar, multiplicar y dividir enteros con la regla de los signos", "Resolver operaciones combinadas respetando la jerarquía y los paréntesis"],
  claves: ["número entero", "valor absoluto", "opuesto", "regla de los signos", "jerarquía de operaciones", "paréntesis"],
  pregunta: {
    texto: "En Burgos amanece a −6 °C y a mediodía el termómetro marca 9 °C. ¿Cuántos grados ha subido la temperatura?",
    respuesta: "Ha subido <mark>15 grados</mark>: 9 − (−6) = 9 + 6 = 15. Para pasar de −6 a 0 sube 6 grados y de 0 a 9, otros 9. Los números enteros sirven para medir cantidades que pueden estar por debajo de un punto de referencia: temperaturas bajo cero, deudas, plantas de un sótano o profundidades bajo el nivel del mar.",
  },
  bloques: [
    {
      html: `<h3>¿Qué son los números enteros?</h3><p>Los <b>números enteros</b> (ℤ) son los naturales, el cero y los <b>negativos</b>: …, −3, −2, −1, 0, 1, 2, 3, … Los positivos se escriben con o sin el signo + (+5 = 5) y los negativos siempre con el signo −.</p><p>Se usan cuando hay un <b>punto de referencia</b> que vale cero: el nivel del mar (una fosa a −200 m), el 0 °C del termómetro, la planta baja de un edificio (el garaje en la planta −2) o el saldo de una cuenta (si debes 30 €, tu saldo es −30 €). También en la historia: el año 50 a. C. se puede pensar como −50.</p>`,
    },
    {
      html: `<h3>La recta numérica y el orden</h3><p>Los enteros se colocan en una <b>recta</b>: el 0 en el centro, los positivos a la derecha y los negativos a la izquierda, a la misma distancia unos de otros.</p><p>De dos enteros, es <mark>mayor el que está más a la derecha</mark>. Por eso:</p><ul><li>Cualquier positivo es mayor que cualquier negativo: 1 &gt; −100.</li><li>Entre dos negativos, es mayor el que está más cerca del cero: −2 &gt; −7. Piensa en temperaturas: −2 °C es menos frío que −7 °C.</li></ul><p>Ordenados de menor a mayor: −7 &lt; −2 &lt; 0 &lt; 3 &lt; 5.</p>`,
      svg: (() => { const r = recta(-6, 6, 96, 24, 236, [[-5, "", "var(--red)"], [-2, "", "var(--red)"], [3, "", "var(--leaf)"]]); return svg("Recta numérica de −6 a 6 con los puntos −5, −2 y 3; los negativos a la izquierda y los positivos a la derecha", `${r.s}${t(70, 40, "negativos", { c: "var(--red)", s: 12 })}${t(190, 40, "positivos", { c: "var(--leaf)", s: 12 })}${t(130, 150, "−5 < −2 < 3", { s: 14 })}`); })(),
    },
    {
      html: `<h3>Valor absoluto y opuesto</h3><p>El <b>valor absoluto</b> de un entero es su <mark>distancia al cero</mark>, sin tener en cuenta el signo. Se escribe entre barras: |−8| = 8, |5| = 5, |0| = 0. Siempre es positivo o cero.</p><p>El <b>opuesto</b> de un número es el que tiene el mismo valor absoluto y signo contrario: op(4) = −4 y op(−9) = 9. Un número y su opuesto están a la misma distancia del cero, uno a cada lado, y su suma es 0: 4 + (−4) = 0.</p><p>Fíjate: −(−9) significa «el opuesto de −9», que es 9.</p>`,
      svg: (() => { const r = recta(-5, 5, 110, 24, 236, [[-4, "", "var(--red)"], [4, "", "var(--leaf)"]]); return svg("−4 y 4 están a 4 unidades del cero: son opuestos y su valor absoluto es 4", `${r.s}<path d="M${r.X(-4)} 84 Q ${r.X(-2)} 60 ${r.X(0)} 84" fill="none" stroke="var(--red)" stroke-width="2"/><path d="M${r.X(0)} 84 Q ${r.X(2)} 60 ${r.X(4)} 84" fill="none" stroke="var(--leaf)" stroke-width="2"/>${t(r.X(-2), 56, "4 pasos", { c: "var(--red)", s: 11 })}${t(r.X(2), 56, "4 pasos", { c: "var(--leaf)", s: 11 })}${t(130, 160, "|−4| = |4| = 4", { s: 14 })}${t(130, 28, "opuestos: −4 y 4", { c: "var(--pen)", s: 12 })}`); })(),
    },
    {
      html: `<h3>Suma y resta de enteros</h3><ul><li><b>Mismo signo</b>: se suman los valores absolutos y se deja el signo común. (−3) + (−5) = −8; 4 + 6 = 10.</li><li><b>Distinto signo</b>: se restan los valores absolutos (el mayor menos el menor) y se pone el signo del que tiene mayor valor absoluto. (−9) + 4 = −5; 7 + (−2) = 5.</li></ul><p><b>Restar es sumar el opuesto</b>: <mark>a − b = a + (−b)</mark>. Así, 3 − 8 = 3 + (−8) = −5 y 5 − (−2) = 5 + 2 = 7.</p><p>Un truco: piensa en dinero. Lo positivo es lo que <i>tienes</i> y lo negativo lo que <i>debes</i>. Si tienes 4 € y debes 9 €, en total debes 5 €: −5.</p>`,
      video: { id: "Rs6Qyei7XY0", titulo: "SUMA y RESTA de Números Enteros", canal: "Susi Profe", vistas: 1279908 },
    },
    {
      html: `<h3>Quitar paréntesis</h3><p>Cuando hay varios sumandos con signos, conviene <b>quitar los paréntesis</b> antes de operar:</p>${tabla(["Signos", "Resultado", "Ejemplo"], [["+ (+a)", "+a", "5 + (+3) = 5 + 3"], ["+ (−a)", "−a", "5 + (−3) = 5 − 3"], ["− (+a)", "−a", "5 − (+3) = 5 − 3"], ["− (−a)", "+a", "5 − (−3) = 5 + 3"]])}<p>Si delante de un paréntesis hay un <b>signo −</b>, se cambian <b>todos</b> los signos de dentro: −(4 − 7 + 2) = −4 + 7 − 2. Después se agrupan positivos y negativos: 8 − 3 + 2 − 6 = (8 + 2) − (3 + 6) = 10 − 9 = 1.</p>`,
    },
    {
      html: `<h3>Multiplicación y división: la regla de los signos</h3><p>Se multiplican o dividen los valores absolutos y el signo se decide así:</p>${tabla(["×  o  :", "+", "−"], [["<b>+</b>", "+", "−"], ["<b>−</b>", "−", "+"]])}<p>Es decir, <mark>signos iguales dan +, signos distintos dan −</mark>. Ejemplos: (−6) · (−3) = 18; (−20) : 4 = −5; 12 : (−3) = −4.</p><p>Con varios factores, cuenta los negativos: si hay un número <b>par</b> de signos −, el resultado es positivo; si es <b>impar</b>, negativo. (−1) · (−2) · (−3) = −6.</p>`,
      video: { id: "RxX-JhmxLG4", titulo: "Cómo multiplicar números enteros", canal: "Matemáticas profe Alex", vistas: 1599700 },
    },
    {
      html: `<h3>Jerarquía de las operaciones</h3><p>En una operación combinada se sigue siempre este <b>orden</b>:</p><ol><li><b>Paréntesis</b> y corchetes, de dentro hacia fuera.</li><li><b>Potencias</b> y raíces.</li><li><b>Multiplicaciones y divisiones</b>, de izquierda a derecha.</li><li><b>Sumas y restas</b>, de izquierda a derecha.</li></ol><p>Ejemplo: 8 − 3 · (−4) + 10 : (−2) = 8 + 12 − 5 = <b>15</b>. Si se hiciera de izquierda a derecha sin respetar la jerarquía (8 − 3 = 5, 5 · (−4)…), el resultado sería otro y estaría mal.</p>`,
      svg: svg("Orden de las operaciones: 1 paréntesis, 2 potencias, 3 multiplicaciones y divisiones, 4 sumas y restas", chips([["1.º Paréntesis", "( ) y [ ], de dentro hacia fuera", "var(--red)"], ["2.º Potencias", "y raíces", "var(--sun)"], ["3.º · y :", "de izquierda a derecha", "var(--pen)"], ["4.º + y −", "de izquierda a derecha", "var(--leaf)"]], 10, 34), 180),
    },
    {
      html: `<h3>Potencias de base entera</h3><p>Una potencia es una multiplicación de factores iguales: (−2)³ = (−2) · (−2) · (−2). Con base negativa, el signo depende del exponente:</p><ul><li>Exponente <b>par</b> → resultado <b>positivo</b>: (−3)² = 9; (−2)⁴ = 16.</li><li>Exponente <b>impar</b> → resultado <b>negativo</b>: (−2)³ = −8; (−1)⁵ = −1.</li></ul><p>¡Cuidado con los paréntesis! <mark>(−3)² = 9, pero −3² = −9</mark>, porque en −3² solo se eleva el 3 y después se pone el signo.</p>`,
    },
    {
      html: `<h3>Problemas con enteros</h3><p>Para resolver un problema, decide qué vale cero y qué es positivo o negativo:</p><ul><li><b>Temperaturas</b>: la variación es «final − inicial». De −4 °C a 7 °C: 7 − (−4) = 11 °C de subida.</li><li><b>Alturas</b>: un submarino a −120 m sube 45 m: −120 + 45 = −75 m.</li><li><b>Dinero</b>: saldo de 50 €, pagas 80 € y cobras 20 €: 50 − 80 + 20 = −10 € (números rojos).</li><li><b>Historia</b>: Augusto nació en el 63 a. C. (−63) y murió en el 14 d. C.: 14 − (−63) = 77 años.</li></ul><p>Comprueba siempre que el resultado tiene sentido en el contexto.</p>`,
    },
  ],
  figura: {
    titulo: "Los números enteros de un vistazo",
    svg: filas("Resumen: orden en la recta, valor absoluto, suma con distinto signo, restar es sumar el opuesto, regla de los signos y jerarquía", [["Orden", "mayor el que está más a la derecha", "var(--pen)"], ["Valor absoluto", "distancia al cero: |−7| = 7", "var(--inf)"], ["Sumar", "mismo signo: se suman · distinto: se restan", "var(--leaf)"], ["Restar", "a − b = a + (−b)", "var(--sun)"], ["× y :", "iguales +  ·  distintos −", "var(--red)"], ["Jerarquía", "( ) → potencias → · : → + −", "var(--ink)"]], 220),
  },
  video: { id: "9xCbQMdQ2S4", titulo: "Operaciones con paréntesis: suma y resta", canal: "Matemáticas profe Alex", vistas: 3008244, megusta: 0, busqueda: "números enteros suma resta 2 eso" },
  quiz: mezcla([
    { q: "¿Cuál es mayor?", o: ["−3", "−8", "−10"], a: 0, e: "Está más cerca del cero." },
    { q: "|−12| es…", o: ["12", "−12", "0"], a: 0, e: "Distancia al cero." },
    { q: "El opuesto de −6 es…", o: ["6", "−6", "1/6"], a: 0, e: "Mismo valor absoluto, signo contrario." },
    { q: "(−7) + 3 =", o: ["−4", "4", "−10"], a: 0, e: "Se restan y gana el signo del 7." },
    { q: "5 − (−4) =", o: ["9", "1", "−9"], a: 0, e: "Restar −4 es sumar 4." },
    { q: "(−6) · (−5) =", o: ["30", "−30", "−11"], a: 0, e: "Signos iguales: +." },
    { q: "(−24) : 6 =", o: ["−4", "4", "−18"], a: 0, e: "Signos distintos: −." },
    { q: "(−2)⁴ =", o: ["16", "−16", "−8"], a: 0, e: "Exponente par." },
    { q: "En 6 + 4 · (−2) se hace primero…", o: ["la multiplicación", "la suma", "da igual"], a: 0, e: "Jerarquía." },
    { q: "−(3 − 5) =", o: ["2", "−2", "8"], a: 0, e: "−3 + 5." },
  ]),
  examen: mezcla([
    { q: "10 − 2 · (−3) + (−8) : 4 =", o: ["14", "22", "−14"], a: 0, e: "10 + 6 − 2." },
    { q: "Un buzo a −18 m baja 7 m más. ¿Dónde está?", o: ["−25 m", "−11 m", "25 m"], a: 0, e: "−18 − 7." },
    { q: "−5² =", o: ["−25", "25", "−10"], a: 0, e: "Solo se eleva el 5." },
  ]),
  feynman: ["Por qué −2 es mayor que −7", "Qué son el valor absoluto y el opuesto", "Cómo se suman enteros de distinto signo", "Por qué restar es sumar el opuesto", "La regla de los signos y la jerarquía"],
  mapa: mapa("NÚMEROS ENTEROS", "var(--eso)", [
    ["Recta y orden", "negativos · 0 · positivos", "var(--pen)"],
    ["|a| y −a", "valor absoluto · opuesto", "var(--inf)"],
    ["+ y −", "restar = sumar el opuesto", "var(--leaf)"],
    ["· y :", "regla de los signos", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Número entero", "Naturales, cero y negativos: …, −2, −1, 0, 1, 2, …"],
    ["Orden", "Es mayor el que está más a la derecha en la recta."],
    ["Valor absoluto", "Distancia al cero: |−5| = 5."],
    ["Opuesto", "Mismo valor absoluto y signo contrario. Suman 0."],
    ["Restar", "a − b = a + (−b)."],
    ["Regla de los signos", "Iguales dan +, distintos dan −."],
    ["Jerarquía", "Paréntesis, potencias, · y :, + y −."],
    ["(−a)ⁿ", "Exponente par: +; impar: −."],
  ],
  familias: ["Mirad juntos la previsión del tiempo de una ciudad fría y calculad cuánto varía la temperatura.", "Inventad problemas de dinero: «tengo 10 €, debo 15 €…».", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Números enteros: representación, orden, valor absoluto y opuesto; operaciones y regla de los signos; jerarquía de operaciones; resolución de problemas en contextos reales (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Termómetro gigante en el suelo del aula para sumar y restar caminando.", "Juego de cartas rojas (negativas) y negras (positivas).", "Línea del tiempo de la Antigüedad con años negativos."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): números enteros", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula: 7 − (3 − 9) + (−4 + 2).", pasos: ["Paréntesis: 3 − 9 = −6; −4 + 2 = −2.", "7 − (−6) + (−2) = 7 + 6 − 2.", "= 11."], resultado: "11" },
    { enunciado: "Calcula: (−3) · 4 − 20 : (−5) + (−2)³.", pasos: ["Potencia: (−2)³ = −8.", "Productos y cocientes: (−3) · 4 = −12; 20 : (−5) = −4.", "−12 − (−4) + (−8) = −12 + 4 − 8 = −16."], resultado: "−16" },
    { enunciado: "Arquímedes nació en el 287 a. C. y murió en el 212 a. C. ¿Cuántos años vivió?", pasos: ["Nacimiento: −287; muerte: −212.", "Años = −212 − (−287) = −212 + 287.", "= 75."], resultado: "Vivió unos 75 años." },
  ],
  errores: [
    "Pensar que −8 es mayor que −2 porque 8 es mayor que 2.",
    "Olvidar cambiar todos los signos al quitar un paréntesis con − delante.",
    "Aplicar la regla de los signos de la multiplicación a la suma: (−3) + (−4) no es +7.",
    "Operar de izquierda a derecha sin respetar la jerarquía.",
    "Confundir (−3)² = 9 con −3² = −9.",
  ],
  ejercicios: [
    { q: "Ordena de menor a mayor: 4, −6, 0, −1, 9, −10.", sol: "−10 < −6 < −1 < 0 < 4 < 9." },
    { q: "Escribe el valor absoluto y el opuesto de −15 y de 8.", sol: "|−15| = 15, op = 15; |8| = 8, op = −8." },
    { q: "Calcula: (−8) + (−5); 12 + (−20); −7 − 6; −3 − (−11).", sol: "−13; −8; −13; 8." },
    { q: "Quita paréntesis y calcula: 5 − (2 − 8) − (−3 + 4).", sol: "5 − 2 + 8 + 3 − 4 = 10." },
    { q: "Calcula: (−4) · (−9); 36 : (−4); (−2) · 3 · (−5) · (−1).", sol: "36; −9; −30 (tres negativos)." },
    { q: "Calcula: 15 − 4 · (−2) + (−18) : 3.", sol: "15 + 8 − 6 = 17." },
    { q: "Calcula: (−1)¹⁰⁰, (−1)⁹⁹, (−5)², −5².", sol: "1; −1; 25; −25." },
    { q: "Calcula: [6 − (−2)] · (3 − 7) : (−8).", sol: "8 · (−4) : (−8) = −32 : (−8) = 4." },
    { q: "Un ascensor está en la planta −3, sube 7 plantas y baja 2. ¿En qué planta está?", sol: "−3 + 7 − 2 = 2: segunda planta." },
    { q: "La temperatura máxima fue 4 °C y la mínima −9 °C. ¿Cuál fue la amplitud térmica?", sol: "4 − (−9) = 13 °C." },
  ],
};
