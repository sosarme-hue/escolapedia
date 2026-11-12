// Matemáticas 3º ESO: números decimales y aproximaciones. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Números decimales y aproximaciones",
  minutos: 60,
  objetivos: ["Clasificar los decimales en exactos, periódicos puros, periódicos mixtos y no periódicos", "Hallar la fracción generatriz de un decimal exacto o periódico", "Aproximar por truncamiento y redondeo y calcular errores", "Escribir y operar números en notación científica"],
  claves: ["decimal periódico", "período", "fracción generatriz", "redondeo", "error absoluto", "notación científica"],
  pregunta: {
    texto: "Si divides 1 entre 3 en la calculadora sale 0,3333333. ¿Se acaban alguna vez los treses?",
    respuesta: "No: 1/3 = <mark>0,333…</mark> es un decimal <b>periódico</b> con infinitas cifras. La calculadora solo enseña unas pocas y redondea la última. Saber aproximar y medir el error que cometes es clave en ciencia, en economía y en ingeniería.",
  },
  bloques: [
    {
      html: `<h3>Tipos de números decimales</h3><p>Un número decimal tiene una <b>parte entera</b> y una <b>parte decimal</b>, separadas por la coma. Según sus cifras decimales puede ser:</p>${tabla(["Tipo", "Ejemplo", "¿Racional?"], [["Exacto", "2,375", "Sí"], ["Periódico puro", "0,454545… = 0,(45)", "Sí"], ["Periódico mixto", "1,8333… = 1,8(3)", "Sí"], ["No periódico", "π = 3,14159…", "No"]])}<p>El grupo de cifras que se repite es el <mark>período</mark> y se marca con un arco encima o entre paréntesis. En un periódico mixto, las cifras entre la coma y el período forman el <b>anteperíodo</b>.</p>`,
    },
    {
      html: `<h3>De fracción a decimal</h3><p>Basta dividir el numerador entre el denominador. Si la fracción es irreducible, el denominador decide el tipo de decimal:</p><ul><li>Solo factores <b>2 y 5</b>: decimal <b>exacto</b>. 7/8 = 0,875.</li><li>Ningún factor 2 ni 5: <b>periódico puro</b>. 5/11 = 0,(45).</li><li>Factores 2 o 5 <mark>y otros</mark>: <b>periódico mixto</b>. 7/12 = 0,58(3).</li></ul><p>La división siempre acaba repitiéndose, porque los restos posibles son finitos: si divides entre 7, solo hay restos de 0 a 6, y en cuanto uno se repite, se repiten las cifras.</p>`,
      svg: svg("División de 5 entre 11: los restos 5, 6, 5, 6 se repiten y por eso las cifras 4 y 5 se repiten", `${t(130, 28, "5 : 11 = 0,4545…", { c: "var(--pen)", s: 16 })}
        ${[["50 : 11", "4", "resto 6"], ["60 : 11", "5", "resto 5"], ["50 : 11", "4", "resto 6"], ["60 : 11", "5", "resto 5"]].map(([a, b, c], i) => `<rect x="20" y="${42 + i * 28}" width="220" height="24" rx="6" fill="${i > 1 ? "var(--hl)" : "var(--card)"}" stroke="var(--line)" stroke-width="1.5"/>${t(70, 59 + i * 28, a, { s: 12 })}${t(130, 59 + i * 28, "→ " + b, { s: 12, c: "var(--pen)" })}${t(196, 59 + i * 28, c, { s: 12, c: "var(--red)" })}`).join("")}
        ${t(130, 172, "el resto se repite → período", { c: "var(--hl-ink)", s: 12 })}`),
    },
    {
      html: `<h3>Fracción generatriz</h3><p>Es la fracción irreducible que genera un decimal. Reglas prácticas:</p><ul><li><b>Exacto</b>: el número sin coma entre 1 seguido de tantos ceros como decimales. 2,35 = 235/100 = 47/20.</li><li><b>Periódico puro</b>: el número sin coma menos la parte entera, entre tantos <b>9</b> como cifras tiene el período. 2,(4) = (24 − 2)/9 = 22/9.</li><li><b>Periódico mixto</b>: el número sin coma menos el número formado por la parte entera y el anteperíodo, entre tantos 9 como cifras del período seguidos de tantos 0 como cifras del anteperíodo. 1,2(3) = (123 − 12)/90 = 111/90 = <mark>37/30</mark>.</li></ul>`,
      video: { id: "caQrZ4l5Nzg", titulo: "Fracción generatriz. Decimal limitado, periódico puro y periódico mixto", canal: "EL PROFESOR LUNAR", vistas: 1701387, megusta: 0 },
    },
    {
      html: `<h3>Por qué funciona la regla</h3><p>Llamemos x = 0,(7) = 0,777… Si multiplicamos por 10, el período se desplaza: 10x = 7,777… Al restar, las colas infinitas se anulan: 10x − x = 7, así que 9x = 7 y <mark>x = 7/9</mark>.</p><p>Con un mixto, primero se lleva el anteperíodo a la parte entera. Si x = 0,1(6): 10x = 1,666… y 100x = 16,666… Restando, 90x = 15 y x = 15/90 = 1/6. Este razonamiento explica también un resultado curioso: <b>0,999… = 1</b>, porque 10x − x = 9 da 9x = 9.</p>`,
    },
    {
      html: `<h3>Aproximar: truncar y redondear</h3><p>Aproximar es sustituir un número por otro cercano y más sencillo. Hay dos métodos:</p><ul><li><b>Truncamiento</b>: se cortan las cifras a partir de un orden. π truncado a centésimas es 3,14.</li><li><b>Redondeo</b>: se mira la primera cifra que se suprime. Si es <mark>5 o más</mark>, se suma 1 a la anterior; si es menor que 5, se deja igual. 2,4768 redondeado a centésimas es 2,48.</li></ul><p>Se puede aproximar a cualquier orden: 1.586 redondeado a las centenas es 1.600, y a las decenas, 1.590. El redondeo suele dar un resultado más cercano que el truncamiento.</p>`,
      svg: svg("En la recta entre 2,47 y 2,48, el número 2,4768 está más cerca de 2,48: el redondeo da 2,48 y el truncamiento 2,47", `<path d="M20 90 H 240" stroke="var(--ink)" stroke-width="2.5"/><path d="M40 78 V 102 M220 78 V 102" stroke="var(--ink)" stroke-width="2.5"/><path d="M130 84 V 96" stroke="var(--muted)" stroke-width="2"/>
        ${t(40, 122, "2,47", { s: 13 })}${t(220, 122, "2,48", { s: 13 })}${t(130, 122, "2,475", { s: 11, c: "var(--muted)" })}<circle cx="178" cy="90" r="7" fill="var(--red)"/>${t(178, 66, "2,4768", { c: "var(--red)", s: 13 })}
        ${t(60, 154, "truncar → 2,47", { c: "var(--pen)", s: 12 })}${t(196, 154, "redondear → 2,48", { c: "var(--leaf)", s: 12 })}`),
    },
    {
      html: `<h3>Error absoluto y error relativo</h3><p>Al aproximar se comete un error. El <b>error absoluto</b> es la diferencia, en valor absoluto, entre el valor real y la aproximación: <mark>Eₐ = |valor real − aproximación|</mark>. El <b>error relativo</b> es el cociente entre el error absoluto y el valor real: <mark>Eᵣ = Eₐ / |valor real|</mark>, que se suele expresar en porcentaje.</p><p>El error relativo dice si un error es grande o pequeño <b>en proporción</b>. Equivocarse en 1 cm al medir una mesa de 100 cm es un 1 %; equivocarse en 1 cm al medir una moneda de 2 cm es un 50 %. Cuanto menor es el error relativo, más <b>precisa</b> es la medida.</p>`,
    },
    {
      html: `<h3>Cifras significativas</h3><p>Las <b>cifras significativas</b> son las que aportan información sobre la precisión de un número. Son significativas todas las cifras distintas de cero, los ceros entre ellas y los ceros finales de la parte decimal. Los ceros a la izquierda <b>no</b> lo son: 0,0050 tiene dos cifras significativas (5 y el último 0).</p><p>Cuando un resultado procede de medidas, no tiene sentido dar más cifras de las que permiten los datos. Si mides 2,3 m y 1,7 m, el área no es 3,91 m² «exacta»: lo razonable es dar <mark>3,9 m²</mark>.</p>`,
    },
    {
      html: `<h3>Notación científica</h3><p>Sirve para escribir números muy grandes o muy pequeños de forma corta. Un número está en notación científica si es <mark>a · 10ⁿ</mark>, con 1 ≤ |a| &lt; 10 y n entero.</p><ul><li>Distancia Tierra–Sol: 150.000.000 km = 1,5 · 10⁸ km.</li><li>Tamaño de una bacteria: 0,000002 m = 2 · 10⁻⁶ m.</li></ul><p>El exponente cuenta cuántos lugares se mueve la coma: positivo si el número es grande y negativo si es menor que 1. El número a, llamado <b>mantisa</b>, contiene todas las cifras significativas.</p>`,
      svg: svg("Escala de potencias de diez: una bacteria de 10 elevado a menos 6 metros, una persona de 1 metro y la distancia al Sol de 10 elevado a 11 metros", `<path d="M20 100 H 240" stroke="var(--ink)" stroke-width="2.5"/>
        ${[[30, "10⁻⁶ m", "bacteria", "var(--leaf)"], [100, "10⁰ m", "persona", "var(--pen)"], [170, "10⁷ m", "Tierra", "var(--inf)"], [230, "10¹¹ m", "al Sol", "var(--red)"]].map(([x, p, n, c]) => `<circle cx="${x}" cy="100" r="7" fill="${c}"/>${t(x, 78, p, { c, s: 12 })}${t(x, 126, n, { s: 11 })}`).join("")}
        ${t(130, 40, "a · 10ⁿ con 1 ≤ a < 10", { c: "var(--pen)", s: 14 })}${t(130, 160, "cada paso multiplica por 10", { c: "var(--muted)", s: 11 })}`),
      video: { id: "qjX4wKUoK7E", titulo: "Notación científica: introducción", canal: "Matemáticas profe Alex", vistas: 3811318, megusta: 0 },
    },
    {
      html: `<h3>Operar en notación científica</h3><p>Para <b>multiplicar</b> o <b>dividir</b>, se operan las mantisas y se suman o restan los exponentes: (3 · 10⁵) · (4 · 10³) = 12 · 10⁸ = <mark>1,2 · 10⁹</mark>. Al final hay que reajustar para que la mantisa quede entre 1 y 10.</p><p>Para <b>sumar</b> o <b>restar</b>, hay que igualar antes los exponentes: 5 · 10⁴ + 3 · 10³ = 50 · 10³ + 3 · 10³ = 53 · 10³ = 5,3 · 10⁴. En la calculadora científica se usa la tecla <b>×10ˣ</b> o <b>EXP</b>.</p>`,
    },
  ],
  figura: {
    titulo: "Del decimal a la fracción",
    svg: `<svg viewBox="0 0 640 180" role="img" aria-label="Exacto: entre 10, 100 o 1000. Periódico puro: entre tantos nueves como cifras del período. Periódico mixto: nueves seguidos de ceros">
      <rect width="640" height="180" rx="16" fill="var(--paper)"/>
      ${[["Exacto", "2,35 = 235/100 = 47/20", "var(--pen)"], ["Periódico puro", "2,(4) = (24 − 2)/9 = 22/9", "var(--leaf)"], ["Periódico mixto", "1,2(3) = (123 − 12)/90 = 37/30", "var(--red)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 54}" width="600" height="46" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${43 + i * 54}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="230" y="${43 + i * 54}" font-size="16" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "1JJgHZg9CeE", titulo: "Convertir decimal periódico a fracción", canal: "Daniel Carreón", vistas: 1427443, megusta: 0, busqueda: "fracción generatriz" },
  quiz: mezcla([
    { q: "¿Qué tipo de decimal es 3,1252525…?", o: ["Periódico puro", "Periódico mixto", "Exacto"], a: 1, e: "El 1 es anteperíodo y 25 el período." },
    { q: "La fracción generatriz de 0,(3) es…", o: ["3/10", "1/3", "3/90"], a: 1, e: "3/9 = 1/3." },
    { q: "¿Qué fracción da un decimal exacto?", o: ["5/6", "9/40", "2/9"], a: 1, e: "40 = 2³ · 5." },
    { q: "7,385 redondeado a centésimas es…", o: ["7,38", "7,39", "7,4"], a: 1, e: "La cifra suprimida es 5: se suma 1." },
    { q: "7,385 truncado a décimas es…", o: ["7,3", "7,4", "7,39"], a: 0, e: "Se cortan las cifras." },
    { q: "Si el valor real es 2,45 y aproximo por 2,5, el error absoluto es…", o: ["0,05", "0,5", "2 %"], a: 0, e: "|2,45 − 2,5| = 0,05." },
    { q: "0,00034 en notación científica es…", o: ["3,4 · 10⁻⁴", "34 · 10⁻⁵", "3,4 · 10⁴"], a: 0, e: "La coma se mueve 4 lugares a la derecha." },
    { q: "(2 · 10³) · (4 · 10⁵) =", o: ["8 · 10⁸", "8 · 10¹⁵", "6 · 10⁸"], a: 0, e: "2 · 4 = 8 y 3 + 5 = 8." },
    { q: "¿Cuántas cifras significativas tiene 0,0408?", o: ["5", "3", "2"], a: 1, e: "4, 0 y 8." },
    { q: "0,999… es igual a…", o: ["casi 1", "1", "0,9"], a: 1, e: "10x − x = 9, así que x = 1." },
  ]),
  examen: mezcla([
    { q: "La generatriz de 1,2(5) es…", o: ["113/90", "125/99", "23/18"], a: 0, e: "(125 − 12)/90 = 113/90." },
    { q: "¿Qué medida es más precisa: 1 g de error en 50 g o 1 kg de error en 1.000 kg?", o: ["La primera", "La segunda", "Igual"], a: 1, e: "2 % frente a 0,1 %." },
    { q: "6 · 10⁵ + 4 · 10⁴ =", o: ["6,4 · 10⁵", "10 · 10⁹", "1 · 10⁶"], a: 0, e: "60 · 10⁴ + 4 · 10⁴ = 64 · 10⁴." },
  ]),
  feynman: ["Cómo distinguir a simple vista un periódico puro de uno mixto", "Por qué al multiplicar por 10 y restar desaparece el período", "Qué diferencia hay entre error absoluto y relativo, con un ejemplo", "Para qué sirve la notación científica"],
  mapa: mapa("DECIMALES", "var(--eso)", [
    ["Tipos", "exacto · puro · mixto · no periódico", "var(--pen)"],
    ["Generatriz", "decimal → fracción", "var(--leaf)"],
    ["Aproximar", "truncar · redondear · errores", "var(--red)"],
    ["Notación científica", "a · 10ⁿ", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["Período", "Grupo de cifras decimales que se repite indefinidamente."],
    ["Anteperíodo", "Cifras decimales que hay entre la coma y el período."],
    ["Generatriz de un periódico puro", "(número sin coma − parte entera) / tantos 9 como cifras del período."],
    ["Regla del redondeo", "Si la primera cifra suprimida es 5 o más, se suma 1 a la anterior."],
    ["Error absoluto", "|valor real − aproximación|."],
    ["Error relativo", "Error absoluto / valor real; se da a menudo en %."],
    ["Notación científica", "a · 10ⁿ con 1 ≤ |a| < 10."],
    ["¿Qué decimales son racionales?", "Los exactos y los periódicos."],
  ],
  familias: ["Buscad en el tique de la compra precios redondeados y calculad el error que se comete.", "Mirad datos de astronomía o de biología y escribidlos en notación científica.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido numérico: decimales y fracciones, fracción generatriz, aproximaciones, errores, notación científica (RD 217/2022, Matemáticas 3º).",
    ideas: ["Medir el aula entre varios grupos y comparar errores relativos.", "Escala del universo en notación científica en una tira de papel.", "Investigar por qué 0,999… = 1 con distintos argumentos."],
  },
  fuentes: [RD, { t: "Real Academia de Ciencias: notación científica y cifras significativas", url: "https://rac.es/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Halla la fracción generatriz de 2,1(36).",
      pasos: ["Es periódico mixto: anteperíodo 1 (una cifra) y período 36 (dos cifras).", "Número sin coma: 2136. Parte entera con anteperíodo: 21.", "Denominador: dos 9 y un 0 → 990.", "(2136 − 21)/990 = 2115/990. Simplificando entre 45: 47/22."],
      resultado: "47/22." },
    { enunciado: "Aproxima √2 = 1,41421… a milésimas y calcula los errores absoluto y relativo (usa 1,41421 como valor real).",
      pasos: ["La cifra siguiente a las milésimas es 2 (menor que 5): redondeo 1,414.", "Eₐ = |1,41421 − 1,414| = 0,00021.", "Eᵣ = 0,00021 / 1,41421 ≈ 0,00015, es decir, 0,015 %."],
      resultado: "1,414; Eₐ = 0,00021; Eᵣ ≈ 0,015 %." },
    { enunciado: "Calcula y expresa en notación científica: (6 · 10⁻³) : (1,5 · 10⁻⁷).",
      pasos: ["Mantisas: 6 : 1,5 = 4.", "Exponentes: −3 − (−7) = 4.", "Resultado: 4 · 10⁴, que ya tiene mantisa entre 1 y 10."],
      resultado: "4 · 10⁴." },
  ],
  errores: [
    "En la generatriz de un mixto, restar solo la parte entera en vez de la parte entera con el anteperíodo.",
    "Poner ceros en el denominador de un periódico puro en lugar de nueves.",
    "Redondear en cadena (2,445 → 2,45 → 2,5) en vez de mirar solo la primera cifra suprimida.",
    "Dar el error relativo sin dividir entre el valor real.",
    "Dejar la mantisa fuera del intervalo de 1 a 10: 12 · 10⁸ no está en notación científica.",
    "Sumar en notación científica sin igualar antes los exponentes.",
  ],
  ejercicios: [
    { q: "Clasifica: 4,25; 0,(81); 3,2(7); √5.", sol: "4,25 exacto; 0,(81) periódico puro; 3,2(7) periódico mixto; √5 = 2,236… no periódico (irracional)." },
    { q: "Sin dividir, indica qué tipo de decimal dan 3/16, 4/15 y 2/7.", sol: "3/16: 16 = 2⁴, exacto. 4/15: 15 = 3 · 5, periódico mixto. 2/7: periódico puro." },
    { q: "Halla la generatriz de 0,48.", sol: "48/100 = 12/25." },
    { q: "Halla la generatriz de 1,(27).", sol: "(127 − 1)/99 = 126/99 = 14/11." },
    { q: "Halla la generatriz de 0,4(6).", sol: "(46 − 4)/90 = 42/90 = 7/15." },
    { q: "Redondea 15,6748 a las décimas, a las centésimas y a las unidades.", sol: "Décimas: 15,7. Centésimas: 15,67. Unidades: 16." },
    { q: "Una pieza mide 12,35 cm y se aproxima a 12,4 cm. Calcula Eₐ y Eᵣ.", sol: "Eₐ = 0,05 cm. Eᵣ = 0,05 / 12,35 ≈ 0,004 = 0,4 %." },
    { q: "Escribe en notación científica: 72.000.000 y 0,0000105.", sol: "7,2 · 10⁷ y 1,05 · 10⁻⁵." },
    { q: "Calcula: (3,5 · 10⁶) · (2 · 10⁻⁴).", sol: "7 · 10² = 700." },
    { q: "La masa de la Tierra es 5,97 · 10²⁴ kg y la de la Luna, 7,35 · 10²² kg. ¿Cuántas veces es mayor la de la Tierra?", sol: "5,97 · 10²⁴ / 7,35 · 10²² ≈ 0,812 · 10² ≈ 81 veces." },
  ],
};
