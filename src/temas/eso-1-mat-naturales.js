// Matemáticas 1º ESO: los números naturales. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, recta, mezcla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Los números naturales",
  minutos: 50,
  objetivos: ["Leer, escribir y descomponer números naturales en el sistema decimal", "Ordenar números naturales y representarlos en la recta", "Aproximar por redondeo y truncamiento y estimar resultados", "Operar respetando la jerarquía de las operaciones y resolver problemas"],
  claves: ["número natural", "valor posicional", "redondeo", "propiedad distributiva", "jerarquía de operaciones", "división entera"],
  pregunta: {
    texto: "Un estadio tiene 54 328 asientos. En la radio dicen que «había unas 54 000 personas». ¿Mienten?",
    respuesta: "No mienten: están <b>redondeando</b>. Para dar una idea rápida no hace falta la cifra exacta, basta con aproximar a los millares. 54 328 está más cerca de 54 000 que de 55 000, así que <mark>«unas 54 000» es una buena aproximación</mark>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué son los números naturales?</h3><p>Los <b>números naturales</b> son los que usamos para <b>contar</b> y para <b>ordenar</b>: 0, 1, 2, 3, 4… El conjunto se escribe con la letra <b>ℕ</b>. No tiene final: después de cualquier número siempre hay otro, su <b>siguiente</b>.</p><p>Tienen dos usos principales:</p><ul><li><b>Cardinal</b>: dicen cuántos hay. «En clase somos 27».</li><li><b>Ordinal</b>: dicen qué lugar ocupa algo. «Llegó el 3.º».</li></ul><p>También usamos números naturales como <b>códigos</b> (el número de un autobús, un código postal), aunque en ese caso no tiene sentido sumarlos ni compararlos.</p>`,
      svg: (() => { const r = recta(0, 8, 96, 26, 234, [[3, "3", "var(--pen)"], [4, "4", "var(--leaf)"]], { num: false }); return svg("Recta numérica del 0 al 8 con el 3 y su siguiente, el 4", `${r.s}${t(r.X(0), 120, "0", { s: 12 })}${t(r.X(8), 120, "8", { s: 12 })}${t(130, 40, "ℕ = { 0, 1, 2, 3, … }", { s: 15, c: "var(--pen)" })}${t(r.X(5.5), 70, "siguiente →", { s: 11, c: "var(--leaf)" })}${t(130, 156, "siempre hay uno más", { c: "var(--muted)", s: 11 })}`); })(),
    },
    {
      html: `<h3>El sistema de numeración decimal</h3><p>Escribimos los números con solo <b>diez cifras</b> (0 al 9). Es un sistema <b>posicional</b>: el valor de una cifra depende del <mark>lugar que ocupa</mark>. Cada diez unidades de un orden forman una del orden siguiente.</p>${tabla(["Orden", "Equivale a"], [["1 decena (D)", "10 unidades"], ["1 centena (C)", "10 decenas = 100 U"], ["1 unidad de millar (UM)", "10 centenas = 1 000 U"], ["1 decena de millar (DM)", "10 000 U"], ["1 millón", "1 000 000 U"]])}<p>En 3 737 el primer 3 vale 3 000 y el segundo, 30. Por eso <b>descomponemos</b>: 3 737 = 3 · 1 000 + 7 · 100 + 3 · 10 + 7.</p>`,
      svg: svg("Tabla de posiciones del número 54 328: decenas de millar 5, unidades de millar 4, centenas 3, decenas 2 y unidades 8", `${["DM", "UM", "C", "D", "U"].map((o, i) => `<rect x="${20 + i * 45}" y="40" width="40" height="34" rx="6" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${t(40 + i * 45, 62, o, { c: "var(--pen)", s: 12 })}<rect x="${20 + i * 45}" y="80" width="40" height="40" rx="6" fill="var(--pen)" fill-opacity=".14" stroke="var(--pen)" stroke-width="2"/>${t(40 + i * 45, 108, "54328"[i], { s: 20, d: true })}`).join("")}${t(130, 26, "54 328", { s: 14 })}${t(130, 148, "el 5 vale 50 000", { c: "var(--leaf)", s: 12 })}${t(130, 166, "el 8 vale 8", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Leer, escribir y ordenar</h3><p>Para leer números grandes se separan las cifras en <b>grupos de tres</b> desde la derecha, con un espacio: 2 405 018 se lee «dos millones cuatrocientos cinco mil dieciocho». No se usa punto para separar millares.</p><p>Para <b>comparar</b> dos naturales:</p><ol><li>Es mayor el que tiene <b>más cifras</b>.</li><li>Si tienen las mismas, se comparan cifra a cifra <b>desde la izquierda</b> hasta encontrar una distinta.</li></ol><p>Ejemplo: 47 289 &lt; 47 312, porque coinciden 4 y 7, y luego 2 &lt; 3. Los signos son <b>&lt;</b> (menor que) y <b>&gt;</b> (mayor que): la punta señala siempre al menor.</p>`,
    },
    {
      html: `<h3>Aproximar: redondeo y truncamiento</h3><p>A veces basta con un valor cercano. Hay dos formas de aproximar a un orden (decenas, centenas, millares…):</p><ul><li><b>Truncar</b>: se sustituyen por ceros las cifras de la derecha. 3 768 truncado a centenas es 3 700.</li><li><b>Redondear</b>: se mira la cifra siguiente. Si es <mark>5 o mayor, se suma 1</mark>; si es menor que 5, se deja igual. 3 768 redondeado a centenas es 3 800 (porque la cifra de las decenas es 6).</li></ul><p>El redondeo sirve para <b>estimar</b>: 498 + 307 es aproximadamente 500 + 300 = 800. Así puedes comprobar si una cuenta exacta tiene sentido.</p>`,
      svg: (() => { const r = recta(37, 38, 90, 40, 220, [[37.68, "", "var(--red)"]], { num: false }); return svg("Recta entre 3 700 y 3 800: el 3 768 está más cerca de 3 800", `${r.s}${t(40, 114, "3 700", { s: 11 })}${t(220, 114, "3 800", { s: 11, c: "var(--leaf)" })}${t(r.X(37.68), 70, "3 768", { s: 12, c: "var(--red)" })}<path d="M${r.X(37.5)} 80 V 100" stroke="var(--muted)" stroke-dasharray="3 3" stroke-width="1.5"/>${t(r.X(37.5), 132, "3 750", { c: "var(--muted)", s: 10 })}${t(130, 160, "redondeo a centenas → 3 800", { s: 12, c: "var(--leaf)" })}`); })(),
      video: vb("natB"),
    },
    {
      html: `<h3>Suma y resta</h3><p>En la <b>suma</b> los números se llaman <b>sumandos</b> y el resultado, <b>suma</b>. Cumple dos propiedades útiles para el cálculo mental:</p><ul><li><b>Conmutativa</b>: el orden no cambia el resultado. 25 + 48 = 48 + 25.</li><li><b>Asociativa</b>: puedo agrupar como quiera. 37 + 25 + 75 = 37 + (25 + 75) = 137.</li></ul><p>En la <b>resta</b>, minuendo − sustraendo = diferencia. No es conmutativa (9 − 4 no es 4 − 9) y, en los naturales, el minuendo debe ser mayor o igual que el sustraendo. Se comprueba con la <b>prueba</b>: sustraendo + diferencia = minuendo.</p>`,
    },
    {
      html: `<h3>Multiplicación y división</h3><p><b>Multiplicar</b> es sumar varias veces el mismo número: 4 · 6 = 6 + 6 + 6 + 6. Los términos son <b>factores</b> y el resultado, <b>producto</b>. Es conmutativa y asociativa, y además cumple la <b>distributiva</b>: <mark>a · (b + c) = a · b + a · c</mark>. Así, 7 · 102 = 7 · 100 + 7 · 2 = 714.</p><p>En la <b>división</b> dividendo : divisor = cociente, con un resto. Se cumple la <b>prueba de la división</b>:</p><p style="text-align:center"><b>D = d · c + r</b>, con r &lt; d</p><p>Si el resto es 0, la división es <b>exacta</b>; si no, es <b>entera</b>. Ejemplo: 85 : 6 da cociente 14 y resto 1, porque 6 · 14 + 1 = 85.</p>`,
      svg: svg("Esquema de la división 85 entre 6: cociente 14, resto 1, y la prueba 6 por 14 más 1 igual a 85", `<path d="M130 40 V 92 M130 66 H 210" stroke="var(--ink)" stroke-width="2.2"/>${t(100, 60, "85", { s: 20, d: true })}${t(170, 60, "6", { s: 20, d: true, c: "var(--pen)" })}${t(170, 88, "14", { s: 18, d: true, c: "var(--leaf)" })}${t(110, 90, "1", { s: 18, d: true, c: "var(--red)" })}${t(60, 60, "D", { c: "var(--muted)", s: 11 })}${t(230, 60, "d", { c: "var(--muted)", s: 11 })}${t(230, 88, "c", { c: "var(--muted)", s: 11 })}${t(60, 90, "r", { c: "var(--muted)", s: 11 })}${t(130, 134, "6 · 14 + 1 = 85", { s: 14 })}${t(130, 156, "resto menor que el divisor", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Jerarquía de las operaciones</h3><p>Cuando hay varias operaciones juntas se siguen siempre en este <b>orden</b>:</p><ol><li><b>Paréntesis</b> (de dentro hacia fuera).</li><li><b>Potencias y raíces</b>.</li><li><b>Multiplicaciones y divisiones</b>, de izquierda a derecha.</li><li><b>Sumas y restas</b>, de izquierda a derecha.</li></ol><p>Ejemplo: 20 − 3 · (8 − 2) : 9 → paréntesis: 8 − 2 = 6 → 3 · 6 = 18 → 18 : 9 = 2 → 20 − 2 = <mark>18</mark>.</p><p>Las calculadoras científicas respetan la jerarquía; algunas sencillas no, y calculan en el orden en que tecleas. ¡Compruébalo con la tuya!</p>`,
      video: vb("natB2"),
    },
    {
      html: `<h3>Resolver problemas</h3><p>Para no perderte en un problema sigue estos pasos:</p><ol><li><b>Lee y entiende</b>: ¿qué datos tengo y qué me piden?</li><li><b>Planifica</b>: ¿qué operaciones necesito y en qué orden? Un dibujo o un esquema ayudan.</li><li><b>Calcula</b> con cuidado.</li><li><b>Comprueba</b>: ¿tiene sentido el resultado? Estima antes con números redondos.</li></ol><p>Ejemplo: compras 3 camisetas de 12 € y unos pantalones de 25 €, y pagas con 70 €. Operación: 70 − (3 · 12 + 25) = 70 − 61 = <b>9 € de cambio</b>. Estimación rápida: 3 · 10 + 25 = 55, el cambio debe ser algo menos de 15 €. Encaja.</p>`,
    },
  ],
  figura: {
    titulo: "Los números naturales en un vistazo",
    svg: filas("Resumen: ℕ para contar y ordenar; sistema decimal posicional; redondeo con la cifra siguiente; propiedades; división D = d · c + r; jerarquía de operaciones", [["ℕ", "0, 1, 2, 3… para contar y ordenar", "var(--pen)"], ["Posicional", "el valor depende del lugar", "var(--inf)"], ["Redondear", "si la cifra siguiente es ≥ 5, se sube", "var(--sun)"], ["Propiedades", "conmutativa · asociativa · distributiva", "var(--leaf)"], ["División", "D = d · c + r (r < d)", "var(--red)"], ["Jerarquía", "( ) → potencias → · : → + −", "var(--ink)"]], 200),
  },
  video: vg("natV"),
  quiz: mezcla([
    { q: "En 47 052, ¿cuánto vale el 7?", o: ["7 000", "700", "70"], a: 0, e: "Unidades de millar." },
    { q: "¿Cuál es el mayor?", o: ["30 108", "30 099", "3 999"], a: 0, e: "Desde la izquierda: 1 > 0." },
    { q: "8 352 redondeado a centenas es…", o: ["8 400", "8 300", "8 350"], a: 0, e: "La cifra de las decenas es 5." },
    { q: "8 352 truncado a centenas es…", o: ["8 300", "8 400", "8 000"], a: 0, e: "Se ponen ceros." },
    { q: "5 + 3 · 4 =", o: ["17", "32", "60"], a: 0, e: "Primero el producto." },
    { q: "(5 + 3) · 4 =", o: ["32", "17", "20"], a: 0, e: "Primero el paréntesis." },
    { q: "En 50 : 7, el resto es…", o: ["1", "7", "3"], a: 0, e: "7 · 7 = 49." },
    { q: "La propiedad a · (b + c) = a · b + a · c es la…", o: ["distributiva", "conmutativa", "asociativa"], a: 0, e: "Reparte el factor." },
    { q: "Una división es exacta si…", o: ["el resto es 0", "el cociente es 0", "el divisor es 1"], a: 0, e: "No sobra nada." },
    { q: "¿Qué número no es natural?", o: ["2,5", "0", "1 000 000"], a: 0, e: "Tiene decimales." },
  ]),
  examen: mezcla([
    { q: "36 − 4 · (10 − 2 · 3) =", o: ["20", "128", "4"], a: 0, e: "10 − 6 = 4; 4 · 4 = 16; 36 − 16." },
    { q: "Si D = 7 · 12 + 5, entonces D es…", o: ["89", "84", "96"], a: 0, e: "84 + 5." },
    { q: "Estima 612 + 389 redondeando a centenas.", o: ["1 000", "900", "1 100"], a: 0, e: "600 + 400." },
  ]),
  feynman: ["Por qué el sistema decimal es posicional", "Cómo se redondea un número y para qué sirve", "La diferencia entre división exacta y entera", "Por qué hay que respetar la jerarquía", "Cómo comprobar el resultado de un problema"],
  mapa: mapa("NÚMEROS NATURALES", "var(--eso)", [
    ["Sistema decimal", "diez cifras · posicional", "var(--inf)"],
    ["Aproximar", "redondeo · truncamiento", "var(--sun)"],
    ["Operaciones", "+ − · : y propiedades", "var(--leaf)"],
    ["Jerarquía", "( ) → · : → + −", "var(--red)"],
  ], 230),
  tarjetas: [
    ["ℕ", "Números para contar: 0, 1, 2, 3…"],
    ["Valor posicional", "Una cifra vale distinto según su lugar."],
    ["Redondear", "Cifra siguiente ≥ 5: se suma 1."],
    ["Truncar", "Cambiar por ceros las cifras de la derecha."],
    ["Conmutativa", "El orden de los sumandos o factores no altera el resultado."],
    ["Distributiva", "a · (b + c) = a · b + a · c."],
    ["Prueba de la división", "D = d · c + r, con r < d."],
    ["Jerarquía", "Paréntesis, potencias, · y :, + y −."],
  ],
  familias: ["En el súper, estimad el total del carro redondeando cada precio antes de pagar.", "Leed en voz alta números grandes de noticias (habitantes, kilómetros…).", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Números naturales: sistema de numeración decimal, orden, aproximación y estimación, operaciones y sus propiedades, jerarquía y resolución de problemas (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Concurso de cálculo mental con propiedades.", "Detectar redondeos en titulares de prensa.", "Problemas inventados por el alumnado a partir de un ticket de compra."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): números naturales", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula: 48 : (2 + 6) + 5 · 3 − 4.", pasos: ["Paréntesis: 2 + 6 = 8.", "Divisiones y productos: 48 : 8 = 6 y 5 · 3 = 15.", "Sumas y restas de izquierda a derecha: 6 + 15 − 4 = 17."], resultado: "17" },
    { enunciado: "Redondea 6 549 a las decenas, a las centenas y a los millares.", pasos: ["Decenas: miro las unidades (9 ≥ 5) → 6 550.", "Centenas: miro las decenas (4 < 5) → 6 500.", "Millares: miro las centenas (5 ≥ 5) → 7 000."], resultado: "6 550, 6 500 y 7 000." },
    { enunciado: "Se reparten 250 cromos entre 8 amigos a partes iguales. ¿Cuántos recibe cada uno y cuántos sobran?", pasos: ["División: 250 : 8.", "8 · 31 = 248, resto 2.", "Prueba: 8 · 31 + 2 = 250."], resultado: "31 cromos cada uno y sobran 2." },
  ],
  errores: [
    "Hacer las operaciones en el orden en que aparecen, sin respetar la jerarquía.",
    "Redondear mirando la última cifra en lugar de la cifra siguiente al orden pedido.",
    "Dejar un resto mayor que el divisor en la división.",
    "Separar los millares con punto (se usa un espacio).",
    "Comparar números con distinta cantidad de cifras mirando solo la primera.",
  ],
  ejercicios: [
    { q: "Escribe con cifras: tres millones doscientos mil cuarenta y cinco.", sol: "3 200 045." },
    { q: "Descompón 70 409 según el valor de sus cifras.", sol: "7 · 10 000 + 4 · 100 + 9." },
    { q: "Ordena de menor a mayor: 9 870, 10 001, 9 807, 9 999.", sol: "9 807 < 9 870 < 9 999 < 10 001." },
    { q: "Redondea 15 649 a las centenas y trúncalo a las centenas.", sol: "Redondeo: 15 600 (decenas 4 < 5). Truncamiento: 15 600. En este caso coinciden." },
    { q: "Calcula de forma rápida con la distributiva: 9 · 105.", sol: "9 · 100 + 9 · 5 = 900 + 45 = 945." },
    { q: "Calcula: 7 + 3 · 5 − 12 : 4.", sol: "7 + 15 − 3 = 19." },
    { q: "Calcula: (18 − 6) : 3 + 2 · (5 − 1).", sol: "12 : 3 + 2 · 4 = 4 + 8 = 12." },
    { q: "En una división el divisor es 9, el cociente 23 y el resto 4. ¿Cuál es el dividendo?", sol: "D = 9 · 23 + 4 = 211." },
    { q: "Un autobús lleva 52 personas. ¿Cuántos autobuses hacen falta para 430 alumnos?", sol: "430 : 52 = 8, resto 14. Hacen falta 9 autobuses (los 14 que sobran también viajan)." },
    { q: "Estima el resultado de 1 987 + 3 012 − 498 y después calcúlalo.", sol: "Estimación: 2 000 + 3 000 − 500 = 4 500. Exacto: 4 501." },
  ],
};
