// Matemáticas 1º ESO: ecuaciones de primer grado. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, caja, vb, vg } = require("./_eso1c");

// Balanza: platillo izquierdo y derecho con contenido.
const balanza = (izq, der, y = 92) => `<path d="M130 ${y - 50} V ${y + 50} M100 ${y + 50} H 160" stroke="var(--ink)" stroke-width="3"/><path d="M40 ${y - 50} H 220" stroke="var(--ink)" stroke-width="3"/><path d="M40 ${y - 50} L 30 ${y} H 110 L 100 ${y - 50} M220 ${y - 50} L 160 ${y} H 240 L 230 ${y - 50}" fill="none" stroke="var(--muted)" stroke-width="1.5"/>${izq}${der}`;

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Ecuaciones de primer grado",
  minutos: 60,
  objetivos: ["Reconocer los elementos de una ecuación y comprobar si un número es solución", "Transformar ecuaciones en otras equivalentes con las reglas de la suma y del producto", "Resolver ecuaciones de primer grado con paréntesis", "Plantear y resolver problemas mediante ecuaciones"],
  claves: ["ecuación", "incógnita", "miembro", "solución", "transponer términos", "ecuación equivalente"],
  pregunta: {
    texto: "Piensa un número, multiplícalo por 3 y súmale 4. Si te ha salido 25, ¿qué número habías pensado?",
    respuesta: "Llamamos x al número: <b>3x + 4 = 25</b>. Es una <b>ecuación</b>. Para resolverla deshacemos los pasos al revés: quitamos el 4 (3x = 21) y dividimos entre 3: <mark>x = 7</mark>. Comprobación: 3 · 7 + 4 = 25. ✔",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una ecuación?</h3><p>Una <b>ecuación</b> es una igualdad con letras que solo se cumple para ciertos valores. La letra es la <b>incógnita</b>.</p><p>En <b>2x + 3 = x + 8</b>:</p><ul><li><b>Primer miembro</b>: lo que está a la izquierda del igual (2x + 3).</li><li><b>Segundo miembro</b>: lo de la derecha (x + 8).</li><li><b>Términos</b>: cada sumando (2x, 3, x, 8).</li><li><b>Grado</b>: el mayor exponente de la incógnita. Aquí es 1: ecuación de <b>primer grado</b>.</li></ul><p>La <b>solución</b> es el valor que hace cierta la igualdad. Para x = 5: 2 · 5 + 3 = 13 y 5 + 8 = 13. ✔ Por tanto, x = 5 es solución.</p>`,
    },
    {
      html: `<h3>La ecuación como una balanza</h3><p>Una ecuación es como una <b>balanza en equilibrio</b>. Si haces lo mismo en los dos platillos, sigue equilibrada. Así se obtienen <b>ecuaciones equivalentes</b> (con la misma solución) cada vez más sencillas:</p><ul><li><b>Regla de la suma</b>: se puede sumar o restar el mismo número a los dos miembros.</li><li><b>Regla del producto</b>: se pueden multiplicar o dividir los dos miembros por el mismo número (distinto de 0).</li></ul><p>En la balanza: 3 cajas y 2 pesas de 1 kg equilibran 8 kg. Quito 2 kg de cada lado: 3 cajas = 6 kg. Divido entre 3: <mark>cada caja pesa 2 kg</mark>.</p>`,
      svg: svg("Balanza en equilibrio: tres cajas x y dos pesas de 1 frente a ocho pesas de 1. Cada caja vale 2", balanza(`${[0, 1, 2].map((i) => caja(36 + i * 22, 70, 20, 20, "x", "var(--pen)", { s: 11 })).join("")}${[0, 1].map((i) => `<circle cx="${50 + i * 22}" cy="62" r="7" fill="var(--sun)"/>`).join("")}`, `${[...Array(8)].map((_, i) => `<circle cx="${172 + (i % 4) * 16}" cy="${84 - Math.floor(i / 4) * 15}" r="7" fill="var(--sun)"/>`).join("")}`) + t(130, 170, "3x + 2 = 8 → x = 2", { s: 13 }), 180),
    },
    {
      html: `<h3>Transponer términos</h3><p>En la práctica, las dos reglas se aplican con un atajo: <b>transponer</b> (pasar) términos de un miembro a otro.</p><ul><li>Lo que está <b>sumando</b> pasa al otro lado <b>restando</b>, y al revés.</li><li>Lo que está <b>multiplicando</b> pasa al otro lado <b>dividiendo</b>, y al revés.</li></ul><p>Ejemplo: x + 9 = 15 → x = 15 − 9 → <b>x = 6</b>.</p><p>Ejemplo: 4x = 28 → x = 28 : 4 → <b>x = 7</b>.</p><p>Ejemplo: x/5 = 3 → x = 3 · 5 → <b>x = 15</b>.</p><p>Fíjate: el signo del número <b>no</b> cambia al pasar dividiendo. −2x = 10 → x = 10 : (−2) = <b>−5</b>.</p>`,
      svg: svg("Esquema de transponer: lo que suma pasa restando y lo que multiplica pasa dividiendo", `${t(130, 46, "x + 9 = 15", { s: 17, d: true })}${t(130, 72, "x = 15 − 9", { s: 15, c: "var(--leaf)" })}${t(130, 116, "4x = 28", { s: 17, d: true })}${t(130, 142, "x = 28 : 4", { s: 15, c: "var(--red)" })}${t(40, 60, "+ → −", { c: "var(--leaf)", s: 11 })}${t(40, 130, "· → :", { c: "var(--red)", s: 11 })}`),
    },
    {
      html: `<h3>Pasos para resolver una ecuación</h3><ol><li><b>Quitar paréntesis</b> con la propiedad distributiva.</li><li><b>Agrupar</b>: los términos con x en un miembro y los números en el otro.</li><li><b>Reducir</b>: sumar los términos semejantes de cada miembro.</li><li><b>Despejar</b> la x dividiendo entre su coeficiente.</li><li><b>Comprobar</b> sustituyendo en la ecuación inicial.</li></ol><p>Ejemplo: 5x − 4 = 2x + 11 → 5x − 2x = 11 + 4 → 3x = 15 → <mark>x = 5</mark>. Comprobación: 25 − 4 = 21 y 10 + 11 = 21. ✔</p>`,
    },
    {
      html: `<h3>Ecuaciones con paréntesis</h3><p>Primero se eliminan los paréntesis. Cuidado con el signo de delante:</p><p>3(x − 2) − (x + 4) = 10<br>→ 3x − 6 − x − 4 = 10 (el − cambia los signos de dentro)<br>→ 3x − x = 10 + 6 + 4<br>→ 2x = 20 → <b>x = 10</b>.</p><p>Comprobación: 3 · 8 − 14 = 24 − 14 = 10. ✔</p>${tabla(["Si delante del paréntesis hay…", "al quitarlo…"], [["un número", "multiplica a todos los términos"], ["un signo +", "los signos no cambian"], ["un signo −", "cambian todos los signos"]])}`,
    },
    {
      html: `<h3>Casos especiales</h3><p>Al resolver puede pasar algo curioso:</p><ul><li><b>Sin solución</b>: x + 3 = x + 5 → 0x = 2. Ningún número cumple 0 = 2. La ecuación <b>no tiene solución</b>.</li><li><b>Infinitas soluciones</b>: 2(x + 1) = 2x + 2 → 0x = 0. Cualquier número sirve: es una <b>identidad</b>.</li></ul><p>Y no te asustes si la solución es negativa o decimal: 4x = −6 → x = <b>−1,5</b>. Es una solución perfectamente válida (aunque si el problema pregunta por personas, una solución así indicaría un error).</p>`,
    },
    {
      html: `<h3>Plantear problemas con ecuaciones</h3><ol><li><b>Lee</b> y decide qué es la incógnita: «llamo x a…».</li><li><b>Traduce</b> el enunciado a una ecuación.</li><li><b>Resuelve</b> la ecuación.</li><li><b>Responde</b> con una frase y <b>comprueba</b> que tiene sentido.</li></ol><p>Ejemplo: «Entre Pablo y su hermana tienen 34 cromos. Ella tiene 6 más que él». Llamo x a los de Pablo; ella tiene x + 6. Ecuación: x + (x + 6) = 34 → 2x = 28 → x = 14. <mark>Pablo tiene 14 y su hermana 20.</mark> Suman 34. ✔</p>`,
      video: vb("ecuB"),
    },
    {
      html: `<h3>Problemas típicos</h3>${tabla(["Tipo", "Planteamiento"], [["Números consecutivos que suman 45", "x + (x + 1) + (x + 2) = 45 → x = 14"], ["Edades: un padre tiene 30 años más que su hijo y entre los dos suman 50", "x + (x + 30) = 50 → x = 10"], ["Perímetro: rectángulo de largo doble que el ancho y perímetro 36 cm", "2x + 2 · 2x = 36 → x = 6"], ["Dinero: gasto 1/3 y me quedan 20 €", "x − x/3 = 20 → x = 30"]])}<p>Hacer un <b>dibujo</b> o una tabla con los datos antes de escribir la ecuación ayuda muchísimo.</p>`,
      video: vb("ecuB2"),
    },
  ],
  figura: {
    titulo: "Ecuaciones en un vistazo",
    svg: filas("Resumen: ecuación con incógnita, miembros y solución; balanza; transponer términos; pasos de resolución; casos especiales; problemas", [["Ecuación", "igualdad con incógnita x", "var(--pen)"], ["Balanza", "lo mismo en los dos lados", "var(--inf)"], ["Transponer", "+ ↔ −   · ↔ :", "var(--sun)"], ["Pasos", "( ) → agrupar → reducir → despejar", "var(--leaf)"], ["Especiales", "0x = 2 nada · 0x = 0 todo", "var(--red)"], ["Problemas", "x = … → ecuación → respuesta", "var(--ink)"]], 200),
  },
  video: vg("ecuV"),
  quiz: mezcla([
    { q: "En 3x − 2 = 10, el segundo miembro es…", o: ["10", "3x − 2", "x"], a: 0, e: "A la derecha del igual." },
    { q: "¿Es x = 4 solución de 2x + 1 = 9?", o: ["sí", "no", "depende"], a: 0, e: "8 + 1 = 9." },
    { q: "x − 7 = 12 →", o: ["x = 19", "x = 5", "x = −5"], a: 0, e: "El 7 pasa sumando." },
    { q: "5x = 35 →", o: ["x = 7", "x = 30", "x = 175"], a: 0, e: "Pasa dividiendo." },
    { q: "x/4 = 6 →", o: ["x = 24", "x = 1,5", "x = 10"], a: 0, e: "Pasa multiplicando." },
    { q: "−3x = 12 →", o: ["x = −4", "x = 4", "x = 15"], a: 0, e: "12 : (−3)." },
    { q: "2x + 3 = x + 8 →", o: ["x = 5", "x = 11", "x = 3"], a: 0, e: "2x − x = 8 − 3." },
    { q: "−(x − 4) es…", o: ["−x + 4", "−x − 4", "x + 4"], a: 0, e: "Cambian los signos." },
    { q: "x + 2 = x + 5 tiene…", o: ["ninguna solución", "una solución", "infinitas"], a: 0, e: "0 = 3." },
    { q: "La suma de un número y su triple es 28. El número es…", o: ["7", "9", "4"], a: 0, e: "4x = 28." },
  ]),
  examen: mezcla([
    { q: "4(x − 1) = 2x + 6 →", o: ["x = 5", "x = 3,5", "x = 1"], a: 0, e: "4x − 4 = 2x + 6." },
    { q: "Tres consecutivos suman 51. El mayor es…", o: ["18", "17", "16"], a: 0, e: "x = 16; 16, 17, 18." },
    { q: "2(x + 3) = 2x + 6 tiene…", o: ["infinitas soluciones", "ninguna", "x = 0"], a: 0, e: "Identidad." },
  ]),
  feynman: ["Qué es la solución de una ecuación", "Por qué una ecuación se parece a una balanza", "Qué significa transponer términos", "Cómo se quita un paréntesis con un signo menos delante", "Cómo se plantea un problema con una ecuación"],
  mapa: mapa("ECUACIONES DE 1.er GRADO", "var(--eso)", [
    ["Elementos", "miembros · términos · incógnita", "var(--pen)"],
    ["Reglas", "suma y producto", "var(--sun)"],
    ["Resolver", "( ) → agrupar → despejar", "var(--leaf)"],
    ["Problemas", "plantear y comprobar", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Ecuación", "Igualdad que solo se cumple para algunos valores."],
    ["Incógnita", "La letra cuyo valor buscamos."],
    ["Solución", "Valor que hace cierta la igualdad."],
    ["Regla de la suma", "Sumar o restar lo mismo en los dos miembros."],
    ["Regla del producto", "Multiplicar o dividir los dos miembros por lo mismo (≠ 0)."],
    ["Transponer", "Lo que suma pasa restando; lo que multiplica, dividiendo."],
    ["−( … )", "Al quitarlo cambian todos los signos."],
    ["Comprobar", "Sustituir la solución en la ecuación inicial."],
  ],
  familias: ["Jugad a «piensa un número» y averiguad el número del otro con una ecuación.", "Inventad problemas de edades de la familia y resolvedlos juntos.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Ecuaciones de primer grado: elementos, ecuaciones equivalentes, resolución con paréntesis, casos especiales y resolución de problemas (RD 217/2022, Matemáticas, sentido algebraico).",
    ideas: ["Balanza de dos platillos o applet de balanza algebraica.", "Problemas inventados por el alumnado para que los resuelvan los compañeros.", "Escape room con candados cuyas claves son soluciones de ecuaciones."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): ecuaciones de primer grado", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Resuelve: 7x − 3 = 4x + 9.", pasos: ["Agrupo: 7x − 4x = 9 + 3.", "3x = 12.", "x = 4. Comprobación: 28 − 3 = 25 y 16 + 9 = 25."], resultado: "x = 4" },
    { enunciado: "Resuelve: 2(3x − 1) − 5 = 3(x + 2) + 2.", pasos: ["Paréntesis: 6x − 2 − 5 = 3x + 6 + 2.", "6x − 3x = 8 + 7 → 3x = 15.", "x = 5."], resultado: "x = 5" },
    { enunciado: "Una entrada de adulto cuesta el doble que la de niño. Dos adultos y tres niños pagan 35 €. ¿Cuánto cuesta cada entrada?", pasos: ["Niño: x; adulto: 2x.", "2 · 2x + 3x = 35 → 7x = 35.", "x = 5; adulto 10 €. Comprobación: 20 + 15 = 35."], resultado: "Niño 5 €, adulto 10 €." },
  ],
  errores: [
    "Pasar un término al otro miembro sin cambiarle el signo.",
    "Cambiar el signo de un número que pasa dividiendo: en −2x = 8, x = −4, no 4.",
    "No multiplicar todos los términos al quitar un paréntesis.",
    "Olvidar cambiar los signos al quitar un paréntesis con − delante.",
    "No comprobar la solución ni responder a la pregunta del problema.",
  ],
  ejercicios: [
    { q: "Comprueba si x = −2 es solución de 3x + 10 = 4.", sol: "3 · (−2) + 10 = 4. Sí." },
    { q: "Resuelve: x + 15 = 6.", sol: "x = −9." },
    { q: "Resuelve: 9x = 63 y x/3 = −4.", sol: "x = 7; x = −12." },
    { q: "Resuelve: 6x − 5 = 2x + 15.", sol: "4x = 20 → x = 5." },
    { q: "Resuelve: 10 − 3x = x − 6.", sol: "−4x = −16 → x = 4." },
    { q: "Resuelve: 5(x − 2) = 3x + 4.", sol: "5x − 10 = 3x + 4 → 2x = 14 → x = 7." },
    { q: "Resuelve: 4 − (2x − 3) = 3(x − 1).", sol: "4 − 2x + 3 = 3x − 3 → −5x = −10 → x = 2." },
    { q: "El doble de un número menos 8 es igual a 20. ¿Cuál es?", sol: "2x − 8 = 20 → x = 14." },
    { q: "La edad de una madre es el triple que la de su hija y entre las dos suman 48. ¿Qué edad tiene cada una?", sol: "x + 3x = 48 → x = 12. Hija 12 y madre 36." },
    { q: "Un rectángulo mide 4 cm más de largo que de ancho y su perímetro es 32 cm. Halla sus lados.", sol: "2x + 2(x + 4) = 32 → x = 6. Ancho 6 cm, largo 10 cm." },
  ],
};
