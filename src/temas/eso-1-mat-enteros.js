// Matemáticas 1º ESO: los números enteros. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, recta, mezcla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Los números enteros",
  minutos: 55,
  objetivos: ["Usar los números enteros para expresar situaciones de la vida diaria", "Representar, comparar y ordenar enteros y calcular el valor absoluto y el opuesto", "Sumar y restar enteros, también con paréntesis", "Multiplicar y dividir enteros con la regla de los signos y respetar la jerarquía"],
  claves: ["número entero", "valor absoluto", "opuesto", "recta numérica", "regla de los signos", "paréntesis"],
  pregunta: {
    texto: "Por la mañana el termómetro marca −3 °C y por la tarde ha subido 8 grados. ¿Qué temperatura hace?",
    respuesta: "Partimos de −3 y avanzamos 8 hacia la derecha en la recta: −3 + 8 = <mark>5 °C</mark>. Los números con signo, los <b>enteros</b>, sirven para medir cosas que pueden estar por encima o por debajo de un cero.",
  },
  bloques: [
    {
      html: `<h3>¿Para qué sirven los números enteros?</h3><p>Hay situaciones en las que los naturales no bastan porque hay que contar <b>por debajo de un cero</b>:</p><ul><li>Temperaturas bajo cero: −5 °C.</li><li>Plantas de un edificio por debajo de la calle: sótano −2.</li><li>Dinero que se debe: un saldo de −20 €.</li><li>Profundidades bajo el nivel del mar: −300 m.</li><li>Años antes de Cristo.</li></ul><p>Los <b>números enteros</b> (ℤ) son los <b>positivos</b> (+1, +2, +3…), el <b>cero</b> y los <b>negativos</b> (−1, −2, −3…). El 0 no es ni positivo ni negativo. Los positivos se pueden escribir sin el signo +.</p>`,
      svg: svg("Termómetro con la escala de menos 10 a más 10: el cero separa temperaturas positivas y negativas", `<rect x="110" y="20" width="20" height="130" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="120" cy="156" r="14" fill="var(--red)"/><rect x="115" y="95" width="10" height="60" fill="var(--red)"/>${[-10, -5, 0, 5, 10].map((v) => `<path d="M130 ${85 - v * 6} H 140" stroke="var(--ink)" stroke-width="1.5"/>${t(146, 89 - v * 6, (v > 0 ? "+" : "") + String(v).replace("-", "−"), { s: 11, a: "start", c: v === 0 ? "var(--ink)" : v > 0 ? "var(--red)" : "var(--pen)" })}`).join("")}${t(60, 50, "positivos", { c: "var(--red)", s: 12 })}${t(60, 130, "negativos", { c: "var(--pen)", s: 12 })}${t(214, 168, "°C", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>La recta numérica, orden y valor absoluto</h3><p>En la recta, el 0 está en el centro, los positivos a la <b>derecha</b> y los negativos a la <b>izquierda</b>. <mark>Es mayor el que está más a la derecha</mark>: −2 &gt; −7, porque −2 está más cerca del cero (hace menos frío a −2 °C que a −7 °C).</p><ul><li>El <b>valor absoluto</b> |a| es la distancia al cero, sin signo: |−6| = 6 y |+6| = 6.</li><li>El <b>opuesto</b> de un número es el que está a la misma distancia del cero, al otro lado: op(+4) = −4; op(−9) = +9.</li></ul><p>Cualquier positivo es mayor que cualquier negativo, y entre dos negativos es mayor el de menor valor absoluto.</p>`,
      svg: (() => { const r = recta(-5, 5, 90, 20, 240, [[-4, "−4", "var(--pen)"], [4, "+4", "var(--red)"]]); return svg("Recta de menos 5 a 5: menos 4 y más 4 son opuestos y están a 4 unidades del cero", `${r.s}<path d="M${r.X(-4)} 60 Q ${r.X(-2)} 44 ${r.X(0)} 60 M${r.X(0)} 60 Q ${r.X(2)} 44 ${r.X(4)} 60" fill="none" stroke="var(--sun)" stroke-width="2"/>${t(r.X(-2), 40, "4", { c: "var(--sun)", s: 12 })}${t(r.X(2), 40, "4", { c: "var(--sun)", s: 12 })}${t(130, 140, "opuestos: |−4| = |+4| = 4", { s: 12 })}${t(130, 162, "más a la derecha = mayor", { c: "var(--muted)", s: 11 })}`); })(),
    },
    {
      html: `<h3>Sumar enteros</h3><p>Imagina que los positivos son lo que <b>tienes</b> y los negativos, lo que <b>debes</b>:</p><ul><li><b>Mismo signo</b>: se suman los valores absolutos y se deja el signo. (+5) + (+3) = +8; (−5) + (−3) = −8 (debo 5 y debo 3: debo 8).</li><li><b>Distinto signo</b>: se <mark>restan</mark> los valores absolutos y se pone el signo del que tiene <b>mayor valor absoluto</b>. (+7) + (−10) = −3 (tengo 7 y debo 10: debo 3).</li></ul><p>En la recta: sumar un positivo es avanzar hacia la derecha; sumar un negativo, hacia la izquierda.</p>`,
      svg: (() => { const r = recta(-4, 4, 110, 20, 240, [[-3, "", "var(--pen)"], [2, "", "var(--leaf)"]], { s: 9 }); return svg("Salto en la recta: desde menos 3 avanzamos 5 a la derecha y llegamos a más 2", `${r.s}<path d="M${r.X(-3)} 100 Q ${r.X(-0.5)} 50 ${r.X(2)} 100" fill="none" stroke="var(--leaf)" stroke-width="2.5" marker-end="url(#fe1)"/><defs><marker id="fe1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--leaf)"/></marker></defs>${t(r.X(-0.5), 56, "+5", { c: "var(--leaf)", s: 13 })}${t(130, 30, "(−3) + (+5) = +2", { s: 14 })}${t(130, 160, "sumar positivo: a la derecha", { c: "var(--muted)", s: 11 })}`); })(),
      video: vb("entB"),
    },
    {
      html: `<h3>Restar enteros</h3><p>Restar un número es lo mismo que <mark>sumar su opuesto</mark>:</p><p style="text-align:center"><b>a − b = a + op(b)</b></p><ul><li>(+6) − (+9) = (+6) + (−9) = −3.</li><li>(−4) − (−7) = (−4) + (+7) = +3. Quitar una deuda de 7 es como ganar 7.</li></ul><p>Así toda resta se convierte en una suma y se aplican las reglas anteriores. Por eso la resta de enteros siempre se puede hacer, aunque el primero sea menor.</p>`,
    },
    {
      html: `<h3>Paréntesis y operaciones combinadas de suma y resta</h3><p>Para <b>quitar paréntesis</b>:</p><ul><li>Si delante hay un <b>+</b>, se quita y los signos de dentro <b>no cambian</b>: +(−3 + 5) = −3 + 5.</li><li>Si delante hay un <b>−</b>, se quita y los signos de dentro <b>cambian</b>: −(−3 + 5) = +3 − 5.</li></ul><p>Un método cómodo para muchas sumas y restas: se suman por un lado <b>todos los positivos</b> y por otro <b>todos los negativos</b>, y al final se restan.</p><p>Ejemplo: 7 − 12 + 4 − 3 − 1 → positivos: 7 + 4 = 11; negativos: 12 + 3 + 1 = 16 → 11 − 16 = <b>−5</b>.</p>`,
    },
    {
      html: `<h3>Multiplicar y dividir: la regla de los signos</h3><p>Se multiplican (o dividen) los valores absolutos y el signo se decide así:</p>${tabla(["·  o  :", "+", "−"], [["<b>+</b>", "+", "−"], ["<b>−</b>", "−", "+"]])}<p>Es decir: <mark>signos iguales dan +, signos distintos dan −</mark>.</p><ul><li>(−4) · (−5) = +20</li><li>(+18) : (−3) = −6</li><li>(−2) · (+3) · (−1) = +6 (dos negativos se «anulan»).</li></ul><p>Truco: si hay un número <b>par</b> de factores negativos, el resultado es positivo; si es <b>impar</b>, negativo.</p>`,
      video: vb("entB2"),
    },
    {
      html: `<h3>Jerarquía con números enteros</h3><p>Se respeta el mismo orden que con los naturales: <b>paréntesis</b>, <b>potencias</b>, <b>multiplicaciones y divisiones</b>, <b>sumas y restas</b>.</p><p>Ejemplo: −3 + 4 · (−2) − (−10) : 5 → productos y cocientes: 4 · (−2) = −8 y (−10) : 5 = −2 → −3 + (−8) − (−2) = −3 − 8 + 2 = <b>−9</b>.</p><p>Cuidado con las potencias de base negativa: (−2)² = (−2) · (−2) = +4, pero −2² = −(2 · 2) = −4. El paréntesis indica qué se eleva.</p>`,
    },
    {
      html: `<h3>Problemas con enteros</h3><p>Escribe cada dato con su signo y opera:</p><ul><li><b>Ascensor</b>: estoy en la planta 3, bajo 5 plantas y subo 1. 3 − 5 + 1 = <b>−1</b>: el primer sótano.</li><li><b>Historia</b>: Augusto nació en el año 63 a. C. y murió en el 14 d. C. Vivió 14 − (−63) = 77 años (sin año 0, en realidad 76, ¡curiosidad histórica!).</li><li><b>Temperaturas</b>: de 6 °C a −4 °C, la variación es −4 − 6 = <b>−10 °C</b> (bajó 10 grados).</li></ul><p>Una diferencia «final − inicial» positiva indica que <b>subió</b>; negativa, que <b>bajó</b>.</p>`,
    },
  ],
  figura: {
    titulo: "Los números enteros en un vistazo",
    svg: filas("Resumen: enteros positivos, cero y negativos; orden en la recta; valor absoluto y opuesto; suma; resta como suma del opuesto; regla de los signos", [["ℤ", "… −2, −1, 0, +1, +2 …", "var(--pen)"], ["Orden", "más a la derecha, mayor", "var(--inf)"], ["|a| y op(a)", "distancia al 0 · al otro lado", "var(--sun)"], ["Sumar", "mismo signo suma; distinto, resta", "var(--leaf)"], ["Restar", "a − b = a + op(b)", "var(--red)"], ["· y :", "iguales +, distintos −", "var(--ink)"]], 200),
  },
  video: vg("entV"),
  quiz: mezcla([
    { q: "Un sótano 2 se escribe…", o: ["−2", "+2", "0,2"], a: 0, e: "Por debajo de la calle." },
    { q: "¿Cuál es mayor?", o: ["−3", "−8", "−10"], a: 0, e: "Más cerca del cero." },
    { q: "|−12| =", o: ["12", "−12", "0"], a: 0, e: "Distancia al cero." },
    { q: "El opuesto de −7 es…", o: ["+7", "−7", "0"], a: 0, e: "Al otro lado." },
    { q: "(−6) + (−4) =", o: ["−10", "+10", "−2"], a: 0, e: "Mismo signo." },
    { q: "(+5) + (−9) =", o: ["−4", "+4", "−14"], a: 0, e: "Gana el de mayor valor absoluto." },
    { q: "(−3) − (−8) =", o: ["+5", "−11", "−5"], a: 0, e: "−3 + 8." },
    { q: "(−6) · (−7) =", o: ["+42", "−42", "+13"], a: 0, e: "Iguales dan +." },
    { q: "(+24) : (−4) =", o: ["−6", "+6", "−20"], a: 0, e: "Distintos dan −." },
    { q: "(−2)³ =", o: ["−8", "+8", "−6"], a: 0, e: "Tres negativos." },
  ]),
  examen: mezcla([
    { q: "−(4 − 9) + 2 =", o: ["7", "−3", "−7"], a: 0, e: "−4 + 9 + 2." },
    { q: "5 − 3 · (−2) =", o: ["11", "−4", "−1"], a: 0, e: "5 + 6." },
    { q: "De −5 °C a 7 °C la temperatura…", o: ["sube 12", "sube 2", "baja 12"], a: 0, e: "7 − (−5)." },
  ]),
  feynman: ["Para qué hacen falta los números negativos", "Por qué −2 es mayor que −7", "Cómo se suman dos enteros de distinto signo", "Por qué restar es sumar el opuesto", "La regla de los signos"],
  mapa: mapa("NÚMEROS ENTEROS", "var(--eso)", [
    ["Recta y orden", "negativos · 0 · positivos", "var(--pen)"],
    ["|a| y opuesto", "distancia al cero", "var(--sun)"],
    ["Sumar y restar", "a − b = a + op(b)", "var(--leaf)"],
    ["Multiplicar y dividir", "regla de los signos", "var(--red)"],
  ], 230),
  tarjetas: [
    ["ℤ", "Positivos, cero y negativos."],
    ["Valor absoluto", "Distancia al cero, sin signo."],
    ["Opuesto", "Mismo valor absoluto y signo contrario."],
    ["Orden", "Mayor el que está más a la derecha."],
    ["Suma con distinto signo", "Se restan y gana el signo del mayor valor absoluto."],
    ["Resta", "Sumar el opuesto."],
    ["−( … )", "Cambia todos los signos de dentro."],
    ["Regla de los signos", "Iguales +, distintos −."],
  ],
  familias: ["Mirad el pronóstico del tiempo de ciudades frías y calculad diferencias de temperatura.", "En el ascensor, decid la operación: planta 2, bajo 4 → 2 − 4 = −2.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Números enteros: representación, orden, valor absoluto y opuesto, operaciones y jerarquía, problemas de contexto (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Recta numérica en el suelo del aula para sumar con saltos.", "Juego de fichas de dos colores (tengo y debo).", "Líneas del tiempo con años a. C. y d. C."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): números enteros", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula: 8 − (5 − 11) + (−3 + 1).", pasos: ["Paréntesis: 5 − 11 = −6 y −3 + 1 = −2.", "8 − (−6) + (−2) = 8 + 6 − 2.", "= 12."], resultado: "12" },
    { enunciado: "Calcula: (−12) : (−4) − 2 · (−5) + (−3)².", pasos: ["Potencia: (−3)² = 9.", "Cociente y producto: (−12) : (−4) = 3; 2 · (−5) = −10.", "3 − (−10) + 9 = 3 + 10 + 9 = 22."], resultado: "22" },
    { enunciado: "Un submarino está a −120 m. Sube 45 m y luego baja 30 m. ¿A qué profundidad queda?", pasos: ["Posición inicial: −120.", "Sube 45: −120 + 45 = −75.", "Baja 30: −75 − 30 = −105."], resultado: "A 105 m bajo el nivel del mar (−105 m)." },
  ],
  errores: [
    "Pensar que −8 es mayor que −3 porque 8 es mayor que 3.",
    "Aplicar la regla de los signos a la suma: (−3) + (−4) no es +7.",
    "Quitar un paréntesis precedido de − sin cambiar los signos de dentro.",
    "Confundir (−2)² con −2².",
    "Olvidar que restar un negativo es sumar.",
  ],
  ejercicios: [
    { q: "Expresa con enteros: 15 m bajo el mar, 3 grados bajo cero, planta 4.", sol: "−15, −3, +4." },
    { q: "Ordena de menor a mayor: 3, −5, 0, −1, −9, 7.", sol: "−9 < −5 < −1 < 0 < 3 < 7." },
    { q: "Escribe el valor absoluto y el opuesto de −14 y de +6.", sol: "|−14| = 14, op = +14; |+6| = 6, op = −6." },
    { q: "Calcula: (−9) + (+4) + (−6) + (+10).", sol: "Positivos 14, negativos 15 → −1." },
    { q: "Calcula: (+3) − (−7) − (+12).", sol: "3 + 7 − 12 = −2." },
    { q: "Quita paréntesis y calcula: −(6 − 8) − (−4 + 1).", sol: "−6 + 8 + 4 − 1 = 5." },
    { q: "Calcula: (−5) · (+4) · (−2) y (−36) : (+9).", sol: "+40 y −4." },
    { q: "Calcula: 6 − 4 · (−3) + (−20) : 4.", sol: "6 + 12 − 5 = 13." },
    { q: "Calcula: (−1)⁷, (−1)⁸ y −3².", sol: "−1, +1 y −9." },
    { q: "Un buzo está a −18 m, baja 7 m más y luego sube la mitad de su profundidad. ¿Dónde queda?", sol: "−18 − 7 = −25; sube 12,5 → −12,5 m." },
  ],
};
