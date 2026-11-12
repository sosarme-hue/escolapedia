// Matemáticas 2º ESO: números decimales. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, recta, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Números decimales",
  minutos: 55,
  objetivos: ["Leer, ordenar y redondear números decimales", "Operar con decimales: sumar, restar, multiplicar y dividir", "Clasificar decimales en exactos, periódicos puros y mixtos", "Pasar de fracción a decimal y de decimal a fracción"],
  claves: ["parte entera", "décima", "centésima", "redondeo", "decimal periódico", "fracción generatriz"],
  pregunta: {
    texto: "Si divides 1 entre 3 con la calculadora sale 0,3333333. ¿Se acaba alguna vez ese número?",
    respuesta: "No: es un <b>decimal periódico</b>, el 3 se repite <mark>infinitas veces</mark> y se escribe 0,3̂ (con un arco sobre el 3). La calculadora corta porque no tiene sitio. Ese número es exactamente la fracción 1/3, que se llama su <b>fracción generatriz</b>.",
  },
  bloques: [
    {
      html: `<h3>Las cifras decimales</h3><p>Un número decimal tiene una <b>parte entera</b> y una <b>parte decimal</b>, separadas por una coma. Cada cifra decimal vale diez veces menos que la de su izquierda:</p>${tabla(["Unidades", "décimas", "centésimas", "milésimas"], [["1", "0,1", "0,01", "0,001"], ["3", "4", "0", "7"]])}<p>El número 3,407 se lee «3 unidades y 407 milésimas». Añadir ceros a la derecha de la última cifra decimal <b>no cambia</b> el número: 2,5 = 2,50 = 2,500.</p>`,
    },
    {
      html: `<h3>Ordenar y redondear</h3><p>Para <b>comparar</b> decimales se mira primero la parte entera; si es igual, las décimas, después las centésimas… Truco: iguala el número de cifras decimales con ceros. 2,4 y 2,38 → 2,40 &gt; 2,38.</p><p>Para <b>redondear</b> a una cifra, se mira la siguiente: si es <b>5 o más</b>, se sube una unidad; si es menor que 5, se deja igual.</p><ul><li>3,746 a las décimas → 3,7 (la siguiente es 4).</li><li>3,746 a las centésimas → 3,75 (la siguiente es 6).</li></ul><p>El <b>truncamiento</b>, en cambio, corta sin mirar: 3,746 truncado a las décimas es 3,7. El error que se comete al aproximar es la diferencia con el valor exacto.</p>`,
      svg: (() => { const r = recta(3, 4, 96, 30, 230, [[3.746, "", "var(--red)"]], { num: false }); let s = r.s; for (let i = 0; i <= 10; i++) s += `<path d="M${r.X(3 + i / 10)} 90 V 102" stroke="var(--muted)" stroke-width="1"/>`; return svg("Recta de 3 a 4 dividida en décimas; 3,746 está más cerca de 3,7 que de 3,8", `${s}${t(r.X(3), 122, "3", { s: 12 })}${t(r.X(4), 122, "4", { s: 12 })}${t(r.X(3.7), 122, "3,7", { c: "var(--leaf)", s: 11 })}${t(r.X(3.8), 122, "3,8", { c: "var(--muted)", s: 11 })}${t(r.X(3.746), 72, "3,746", { c: "var(--red)", s: 12 })}${t(130, 158, "redondeo a décimas: 3,7", { s: 13 })}`); })(),
    },
    {
      html: `<h3>Sumar y restar decimales</h3><p>Se colocan los números <mark>con las comas en columna</mark> (unidades bajo unidades, décimas bajo décimas…), se rellenan con ceros si hace falta y se opera como con naturales. La coma del resultado va en la misma columna.</p>${tabla(["", "", ""], [["", "12,50", "← se añade un 0"], ["+", "3,78", ""], ["=", "16,28", ""]])}<p>Ejemplo de resta: 7 − 2,35 = 7,00 − 2,35 = 4,65.</p>`,
    },
    {
      html: `<h3>Multiplicar decimales</h3><p>Se multiplica como si no hubiera comas y, al final, se separan en el resultado <mark>tantas cifras decimales como tengan entre los dos factores</mark>. 2,3 · 1,25: 23 · 125 = 2.875; hay 1 + 2 = 3 decimales → <b>2,875</b>.</p><p>Multiplicar por 10, 100, 1.000… desplaza la coma 1, 2, 3… lugares a la <b>derecha</b>: 4,567 · 100 = 456,7. Dividir por la unidad seguida de ceros la desplaza a la <b>izquierda</b>: 45,2 : 1.000 = 0,0452.</p>`,
      video: { id: "shXj-YCWWeM", titulo: "Multiplicación con decimales", canal: "Daniel Carreón", vistas: 9110388 },
    },
    {
      html: `<h3>Dividir decimales</h3><ul><li><b>Decimal entre entero</b>: se divide normalmente y se pone la coma en el cociente al bajar la primera cifra decimal. 7,5 : 3 = 2,5.</li><li><b>Divisor decimal</b>: se multiplican dividendo y divisor por la unidad seguida de tantos ceros como decimales tenga el divisor, para que el divisor sea entero. 4,2 : 0,06 → 420 : 6 = <b>70</b>.</li></ul><p>Si la división no es exacta, se pueden sacar decimales añadiendo ceros al resto. Fíjate: dividir entre un número menor que 1 da un resultado <b>mayor</b> que el dividendo.</p>`,
      video: { id: "zB9nPRg4fp0", titulo: "Cómo dividir números decimales", canal: "academia JAF", vistas: 5203908 },
    },
    {
      html: `<h3>Tipos de números decimales</h3><p>Al dividir el numerador de una fracción entre su denominador se obtiene un decimal de uno de estos tipos:</p>${tabla(["Tipo", "Cómo es", "Ejemplo"], [["Exacto", "tiene un número finito de cifras decimales", "3/4 = 0,75"], ["Periódico puro", "el periodo empieza justo tras la coma", "4/11 = 0,363636… = 0,3̂6̂"], ["Periódico mixto", "hay cifras antes del periodo (anteperiodo)", "1/6 = 0,1666… = 0,16̂"]])}<p>Una fracción irreducible da un decimal exacto solo si su denominador tiene como factores primos únicamente <b>2 y 5</b>: 7/20 = 0,35 (20 = 2² · 5), pero 7/15 es periódico (15 = 3 · 5).</p>`,
      svg: svg("Clasificación de los decimales: exactos y periódicos, que pueden ser puros o mixtos", `${t(130, 30, "decimales de una fracción", { s: 13 })}<path d="M130 38 L 70 62 M130 38 L 190 62 M190 86 L 150 112 M190 86 L 230 112" stroke="var(--line)" stroke-width="2.5"/>
        <rect x="24" y="62" width="92" height="26" rx="8" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>${t(70, 80, "exactos", { c: "var(--leaf)", s: 12 })}
        <rect x="144" y="62" width="92" height="26" rx="8" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>${t(190, 80, "periódicos", { c: "var(--pen)", s: 12 })}
        <rect x="112" y="112" width="70" height="26" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/>${t(147, 130, "puros", { c: "var(--sun)", s: 12 })}<rect x="192" y="112" width="62" height="26" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>${t(223, 130, "mixtos", { c: "var(--red)", s: 12 })}
        ${t(70, 112, "0,75", { s: 12 })}${t(147, 160, "0,3636…", { s: 11 })}${t(223, 160, "0,1666…", { s: 11 })}`),
    },
    {
      html: `<h3>De decimal a fracción: la fracción generatriz</h3><ul><li><b>Exacto</b>: en el numerador, el número sin coma; en el denominador, un 1 seguido de tantos ceros como cifras decimales. 0,35 = 35/100 = 7/20.</li><li><b>Periódico puro</b>: numerador = número sin coma hasta el final del periodo menos la parte entera; denominador = tantos <b>9</b> como cifras tenga el periodo. 2,4̂ = (24 − 2)/9 = 22/9.</li><li><b>Periódico mixto</b>: numerador = número sin coma hasta el final del periodo menos el número sin coma hasta antes del periodo; denominador = tantos <b>9</b> como cifras del periodo seguidos de tantos <b>0</b> como cifras del anteperiodo. 0,16̂ = (16 − 1)/90 = 15/90 = 1/6.</li></ul><p>Curiosidad: 0,9̂ = 9/9 = 1.</p>`,
      video: { id: "HgLY1hHF1JQ", titulo: "Convertir decimal periódico puro a fracción", canal: "Matemáticas profe Alex", vistas: 2929578 },
    },
    {
      html: `<h3>Decimales en la vida diaria</h3><p>Los decimales están en los <b>precios</b> (1,95 €), las <b>medidas</b> (1,68 m), los <b>tiempos</b> deportivos (9,58 s) y las <b>notas</b>. Al trabajar con ellos conviene:</p><ul><li><b>Estimar</b> antes de calcular: 3,9 · 2,1 debe dar cerca de 4 · 2 = 8 (sale 8,19).</li><li>Redondear el resultado a una precisión con sentido: los euros, a céntimos; un precio unitario de 2,3333… € se deja en 2,33 €.</li><li>Recordar que en muchos países se usa el <b>punto</b> en lugar de la coma (3.5 = 3,5) y que las calculadoras y hojas de cálculo pueden usar cualquiera de los dos.</li></ul>`,
    },
  ],
  figura: {
    titulo: "Decimales en un vistazo",
    svg: filas("Resumen: comas en columna para sumar, contar decimales para multiplicar, divisor entero para dividir, exactos y periódicos, fracción generatriz con nueves y ceros", [["+ y −", "comas en columna", "var(--pen)"], ["·", "se cuentan los decimales de los factores", "var(--leaf)"], [":", "se hace entero el divisor", "var(--sun)"], ["Redondear", "si la siguiente es 5 o más, se sube", "var(--inf)"], ["Tipos", "exactos · periódicos puros · mixtos", "var(--red)"], ["Generatriz", "nueves por el periodo, ceros por el anteperiodo", "var(--ink)"]], 200),
  },
  video: { id: "PZOgxa-gJ90", titulo: "Clasificación de los decimales", canal: "Daniel Carreón", vistas: 2064899, megusta: 0, busqueda: "decimal periódico a fracción" },
  quiz: mezcla([
    { q: "En 5,382 la cifra 8 son…", o: ["centésimas", "décimas", "milésimas"], a: 0, e: "Segunda cifra decimal." },
    { q: "¿Cuál es mayor?", o: ["0,7", "0,69", "0,099"], a: 0, e: "0,70 > 0,69." },
    { q: "6,48 redondeado a las décimas es…", o: ["6,5", "6,4", "6"], a: 0, e: "La siguiente es 8." },
    { q: "1,2 · 0,3 =", o: ["0,36", "3,6", "0,036"], a: 0, e: "Dos decimales." },
    { q: "5,7 · 100 =", o: ["570", "57", "0,057"], a: 0, e: "Dos lugares a la derecha." },
    { q: "3 : 0,5 =", o: ["6", "1,5", "0,6"], a: 0, e: "30 : 5." },
    { q: "1/8 en decimal es…", o: ["0,125 (exacto)", "0,8", "0,125125… (periódico)"], a: 0, e: "8 = 2³." },
    { q: "0,272727… es un decimal…", o: ["periódico puro", "periódico mixto", "exacto"], a: 0, e: "El periodo empieza tras la coma." },
    { q: "La fracción generatriz de 0,4 es…", o: ["2/5", "4/9", "1/4"], a: 0, e: "4/10." },
    { q: "La fracción generatriz de 0,5̂ es…", o: ["5/9", "1/2", "5/90"], a: 0, e: "Un nueve por una cifra de periodo." },
  ]),
  examen: mezcla([
    { q: "La fracción generatriz de 1,23̂ (periodo 3) es…", o: ["111/90", "123/99", "122/99"], a: 0, e: "(123 − 12)/90." },
    { q: "7/12 da un decimal…", o: ["periódico mixto", "exacto", "periódico puro"], a: 0, e: "12 = 2² · 3: 0,58333…" },
    { q: "Tres cuadernos cuestan 7 €. Un cuaderno cuesta…", o: ["2,33 €", "2,30 €", "2,34 €"], a: 0, e: "2,333… redondeado." },
  ]),
  feynman: ["Qué valor tiene cada cifra decimal", "Cómo se redondea un decimal", "Dónde se pone la coma al multiplicar", "Qué hay que hacer si el divisor es decimal", "Cómo se calcula la fracción generatriz de un periódico"],
  mapa: mapa("DECIMALES", "var(--eso)", [
    ["Cifras", "décimas · centésimas · milésimas", "var(--pen)"],
    ["Operar", "comas en columna · contar decimales", "var(--leaf)"],
    ["Tipos", "exactos · periódicos", "var(--red)"],
    ["Generatriz", "nueves y ceros", "var(--sun)"],
  ], 250),
  tarjetas: [
    ["Décima", "0,1: la unidad dividida en 10 partes."],
    ["Redondear", "Si la cifra siguiente es 5 o más, se sube una unidad."],
    ["Multiplicar decimales", "El resultado tiene tantas cifras decimales como los factores juntos."],
    ["Divisor decimal", "Se multiplican los dos por 10, 100… hasta que el divisor sea entero."],
    ["Decimal exacto", "Número finito de cifras decimales."],
    ["Periódico puro", "El periodo empieza justo después de la coma."],
    ["Periódico mixto", "Tiene anteperiodo antes del periodo."],
    ["Fracción generatriz", "Fracción de la que sale un decimal."],
  ],
  familias: ["En el súper, estimad el total de la compra antes de pagar y comparadlo con el tique.", "Calculad el precio por kilo de dos envases distintos para ver cuál sale mejor.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Números decimales: orden, aproximación y error; operaciones; decimales exactos y periódicos; fracción generatriz (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Tiques de compra reales para sumar y estimar.", "Investigar con la calculadora qué denominadores dan decimales exactos.", "Tiempos de atletismo ordenados por décimas y centésimas."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): números decimales", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula: 12,6 − 3,45 · 2 + 1,8 : 0,6.", pasos: ["Productos y cocientes: 3,45 · 2 = 6,9; 1,8 : 0,6 = 18 : 6 = 3.", "12,6 − 6,9 + 3.", "= 8,7."], resultado: "8,7" },
    { enunciado: "Halla la fracción generatriz de 2,15̂ (solo se repite el 5).", pasos: ["Número hasta el final del periodo: 215; antes del periodo: 21.", "Una cifra de periodo (9) y una de anteperiodo (0): 90.", "(215 − 21)/90 = 194/90 = 97/45."], resultado: "97/45" },
    { enunciado: "Un coche gasta 6,4 litros cada 100 km. ¿Cuánto cuesta un viaje de 350 km si el litro vale 1,62 €?", pasos: ["Litros: 6,4 · 3,5 = 22,4 L.", "Coste: 22,4 · 1,62 = 36,288 €.", "Redondeado a céntimos: 36,29 €."], resultado: "Unos 36,29 €." },
  ],
  errores: [
    "Pensar que 0,15 es mayor que 0,8 porque 15 es mayor que 8.",
    "Sumar decimales sin alinear las comas.",
    "Al multiplicar, poner en el resultado las mismas cifras decimales que un solo factor.",
    "Dividir entre un decimal sin multiplicar también el dividendo.",
    "En la generatriz de un periódico mixto, olvidar los ceros del denominador.",
    "Redondear mirando todas las cifras en cadena en lugar de solo la siguiente.",
  ],
  ejercicios: [
    { q: "Ordena de menor a mayor: 2,05; 2,5; 2,055; 2,49.", sol: "2,05 < 2,055 < 2,49 < 2,5." },
    { q: "Redondea 15,3851 a las unidades, décimas, centésimas y milésimas.", sol: "15; 15,4; 15,39; 15,385." },
    { q: "Calcula: 8,07 + 12,9 − 5,346.", sol: "15,624." },
    { q: "Calcula: 4,25 · 0,8 y 0,03 · 0,7.", sol: "3,4 y 0,021." },
    { q: "Calcula: 9,36 : 4 y 2,52 : 0,12.", sol: "2,34 y 252 : 12 = 21." },
    { q: "Clasifica: 5/8, 2/9, 5/6, 13/25.", sol: "Exacto (0,625), periódico puro (0,2̂), mixto (0,83̂), exacto (0,52)." },
    { q: "Halla la fracción generatriz de 0,48 y de 3,7̂.", sol: "48/100 = 12/25; (37 − 3)/9 = 34/9." },
    { q: "Halla la fracción generatriz de 0,52̂1̂ (periodo 21).", sol: "(521 − 5)/990 = 516/990 = 86/165." },
    { q: "Un kilo de tomates cuesta 2,35 €. ¿Cuánto cuestan 1,6 kg?", sol: "2,35 · 1,6 = 3,76 €." },
    { q: "Una botella de 1,5 L cuesta 0,96 € y un pack de 6 latas de 0,33 L cuesta 2,40 €. ¿Qué sale más barato por litro?", sol: "Botella: 0,64 €/L. Latas: 1,98 L, 1,21 €/L. La botella." },
  ],
};
