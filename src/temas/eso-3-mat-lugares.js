// Matemáticas 3º ESO: lugares geométricos y figuras planas. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Lugares geométricos y figuras planas",
  minutos: 60,
  objetivos: ["Reconocer la mediatriz, la bisectriz y la circunferencia como lugares geométricos", "Construir las rectas y puntos notables de un triángulo", "Aplicar el teorema de Pitágoras en problemas planos", "Calcular perímetros y áreas de polígonos y figuras circulares"],
  claves: ["lugar geométrico", "mediatriz", "bisectriz", "circuncentro", "Pitágoras", "área"],
  pregunta: {
    texto: "Tres pueblos quieren construir un depósito de agua que quede exactamente a la misma distancia de los tres. ¿Dónde lo ponen?",
    respuesta: "En el <mark>circuncentro</mark> del triángulo que forman los pueblos: el punto donde se cortan las mediatrices de sus lados. Cada mediatriz reúne los puntos que están a igual distancia de dos pueblos, y su cruce está a igual distancia de los tres.",
  },
  bloques: [
    {
      html: `<h3>Qué es un lugar geométrico</h3><p>Un <b>lugar geométrico</b> es el conjunto de todos los puntos del plano que cumplen una misma propiedad. Los tres más importantes son:</p><ul><li><b>Circunferencia</b>: puntos a la misma distancia (el radio) de un punto fijo, el centro.</li><li><b>Mediatriz</b> de un segmento: puntos que están a la misma distancia de sus dos extremos.</li><li><b>Bisectriz</b> de un ángulo: puntos que están a la misma distancia de sus dos lados.</li></ul><p>Pensar en «qué puntos cumplen la condición» ayuda a resolver muchos problemas de ubicación.</p>`,
    },
    {
      html: `<h3>Mediatriz de un segmento</h3><p>La <b>mediatriz</b> de un segmento AB es la recta <mark>perpendicular</mark> a AB que pasa por su <b>punto medio</b>. Cualquier punto P de la mediatriz cumple PA = PB.</p><p>Se construye con compás: con centro en A y luego en B, y un radio mayor que la mitad de AB, se trazan dos arcos que se cortan en dos puntos. La recta que los une es la mediatriz. Sirve, por ejemplo, para decidir dónde poner una parada de autobús a igual distancia de dos colegios.</p>`,
      svg: svg("Segmento AB con su mediatriz perpendicular por el punto medio; un punto P de la mediatriz está a igual distancia de A y de B", `<path d="M50 120 H 210" stroke="var(--ink)" stroke-width="3"/><circle cx="50" cy="120" r="5" fill="var(--ink)"/><circle cx="210" cy="120" r="5" fill="var(--ink)"/>
        <path d="M130 20 V 165" stroke="var(--pen)" stroke-width="3"/><path d="M130 50 L 50 120 M130 50 L 210 120" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/><circle cx="130" cy="50" r="5" fill="var(--red)"/>
        <path d="M130 108 h 12 v 12" fill="none" stroke="var(--pen)" stroke-width="1.5"/>
        ${t(40, 140, "A", { s: 14 })}${t(220, 140, "B", { s: 14 })}${t(142, 46, "P", { c: "var(--red)", s: 14, a: "start" })}${t(84, 76, "PA", { c: "var(--red)", s: 11 })}${t(178, 76, "PB", { c: "var(--red)", s: 11 })}${t(150, 160, "mediatriz", { c: "var(--pen)", s: 11, a: "start" })}`),
    },
    {
      html: `<h3>Bisectriz de un ángulo</h3><p>La <b>bisectriz</b> de un ángulo es la semirrecta que lo divide en <mark>dos ángulos iguales</mark>. Sus puntos están a la misma distancia de los dos lados del ángulo.</p><p>Construcción: con centro en el vértice se traza un arco que corte los dos lados; desde esos dos puntos de corte, con el mismo radio, se trazan dos arcos que se cruzan dentro del ángulo. La recta que une el vértice con ese cruce es la bisectriz.</p>`,
      video: { id: "eNcWfiCY-AU", titulo: "Cómo construir la bisectriz de un ángulo y la mediatriz de un segmento", canal: "julioprofe", vistas: 559218, megusta: 0 },
    },
    {
      html: `<h3>Rectas y puntos notables del triángulo</h3>${tabla(["Rectas", "Se cortan en", "Propiedad"], [["Mediatrices", "<b>circuncentro</b>", "centro de la circunferencia que pasa por los 3 vértices"], ["Bisectrices", "<b>incentro</b>", "centro de la circunferencia inscrita (toca los 3 lados)"], ["Medianas (vértice → punto medio del lado opuesto)", "<b>baricentro</b>", "centro de gravedad; está a 2/3 de cada vértice"], ["Alturas (perpendicular desde un vértice al lado opuesto)", "<b>ortocentro</b>", "puede quedar fuera si el triángulo es obtusángulo"]])}<p>Un triángulo de cartón se sostiene en equilibrio sobre la punta de un lápiz si lo apoyas en su <mark>baricentro</mark>.</p>`,
      svg: svg("Triángulo con sus tres mediatrices cortándose en el circuncentro y la circunferencia circunscrita que pasa por los tres vértices", `<circle cx="130" cy="95" r="70" fill="none" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="6 4"/>
        <path d="M60 95 L 179.5 45.5 L 165 155.6 Z" fill="var(--pen)" fill-opacity=".1" stroke="var(--ink)" stroke-width="2.5"/>
        ${[[60, 95, 179.5, 45.5], [179.5, 45.5, 165, 155.6], [165, 155.6, 60, 95]].map(([x1, y1, x2, y2]) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; return `<path d="M130 95 L ${mx + (mx - 130) * 0.5} ${my + (my - 95) * 0.5}" stroke="var(--pen)" stroke-width="1.8"/>`; }).join("")}
        <circle cx="130" cy="95" r="5" fill="var(--red)"/>${t(122, 88, "circuncentro", { c: "var(--red)", s: 11, a: "end" })}${t(236, 20, "R", { c: "var(--leaf)", s: 12 })}`),
    },
    {
      html: `<h3>El teorema de Pitágoras</h3><p>En todo triángulo <b>rectángulo</b>, el cuadrado de la hipotenusa (el lado opuesto al ángulo recto) es igual a la suma de los cuadrados de los catetos:</p><p><mark>a² = b² + c²</mark></p><p>Si los catetos miden 6 y 8, la hipotenusa es √(36 + 64) = √100 = 10. Para hallar un cateto se resta: c = √(a² − b²). El teorema también sirve al revés: si a² = b² + c², el triángulo es rectángulo. Los albañiles lo usan con la «regla 3-4-5» para comprobar ángulos rectos.</p>`,
      svg: svg("Triángulo rectángulo de catetos 3 y 4 con cuadrados sobre cada lado: 9 más 16 es igual a 25", `<path d="M60 110 L 120 110 L 60 65 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M60 100 h 10 v 10" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
        <rect x="60" y="110" width="60" height="60" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><rect x="15" y="65" width="45" height="45" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/><path d="M60 65 L 120 110 L 165 50 L 105 5 Z" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="2"/>
        ${t(90, 145, "b² = 16", { c: "var(--pen)", s: 12 })}${t(37, 92, "c² = 9", { c: "var(--leaf)", s: 10 })}${t(112, 62, "a² = 25", { c: "var(--red)", s: 12 })}${t(210, 110, "9 + 16 = 25", { c: "var(--ink)", s: 13 })}`),
      video: { id: "w6nh99v3r4A", titulo: "Teorema de Pitágoras: fórmula, demostración y ejemplos", canal: "Susi Profe", vistas: 2072787, megusta: 0 },
    },
    {
      html: `<h3>Pitágoras en otras figuras</h3><p>Muchas figuras esconden triángulos rectángulos:</p><ul><li><b>Diagonal de un rectángulo</b> de lados a y b: d = √(a² + b²).</li><li><b>Altura de un triángulo equilátero</b> de lado l: h = √(l² − (l/2)²).</li><li><b>Apotema de un polígono regular</b>: con el radio y la mitad del lado.</li><li><b>Altura de un trapecio isósceles</b>: con el lado oblicuo y la diferencia de bases entre 2.</li></ul><p>Un televisor de 55 pulgadas mide 55" de <mark>diagonal</mark>, no de ancho: con Pitágoras se calculan sus medidas reales.</p>`,
    },
    {
      html: `<h3>Áreas de polígonos</h3>${tabla(["Figura", "Área"], [["Triángulo", "b · h / 2"], ["Rectángulo", "b · h"], ["Rombo", "D · d / 2"], ["Romboide", "b · h"], ["Trapecio", "(B + b) · h / 2"], ["Polígono regular", "perímetro · apotema / 2"]])}<p>Un polígono irregular se descompone en triángulos y cuadriláteros conocidos y se suman sus áreas. El perímetro, en cambio, es simplemente la suma de los lados. No confundas unidades: el perímetro va en cm y el área en <mark>cm²</mark>.</p>`,
    },
    {
      html: `<h3>Circunferencia y círculo</h3><p>La <b>circunferencia</b> es la línea; el <b>círculo</b>, la superficie que encierra. Con radio r:</p><ul><li>Longitud de la circunferencia: <mark>L = 2πr</mark>.</li><li>Área del círculo: <mark>A = πr²</mark>.</li><li>Longitud de un arco de n°: 2πr · n / 360.</li><li>Área de un sector circular de n°: πr² · n / 360.</li><li>Área de una corona circular: π(R² − r²).</li></ul><p>Una pizza de 30 cm de diámetro tiene un área de π · 15² ≈ 707 cm², más del doble que una de 20 cm (≈ 314 cm²).</p>`,
      svg: svg("Círculo con un sector de 90 grados y una corona circular", `<circle cx="72" cy="85" r="50" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/><path d="M72 85 L 122 85 A 50 50 0 0 0 72 35 Z" fill="var(--red)" fill-opacity=".5" stroke="var(--red)" stroke-width="2"/>
        <circle cx="190" cy="85" r="50" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2.5"/><circle cx="190" cy="85" r="26" fill="var(--paper)" stroke="var(--leaf)" stroke-width="2.5"/>
        ${t(72, 160, "sector 90°", { c: "var(--red)", s: 12 })}${t(190, 160, "corona", { c: "var(--leaf)", s: 12 })}${t(72, 106, "πr²·n/360", { s: 10 })}${t(190, 90, "π(R²−r²)", { s: 10 })}`),
    },
    {
      html: `<h3>Áreas de figuras compuestas</h3><p>Para calcular el área de una figura compleja hay dos estrategias:</p><ol><li><b>Sumar</b>: descomponerla en figuras sencillas y sumar sus áreas.</li><li><b>Restar</b>: tomar una figura grande que la contenga y restar las partes que sobran.</li></ol><p>Ejemplo: una ventana formada por un rectángulo de 1 m × 1,2 m coronado por un semicírculo de radio 0,5 m tiene un área de 1,2 + π · 0,5² / 2 ≈ <mark>1,59 m²</mark>. Haz siempre un esquema con las medidas antes de calcular.</p>`,
    },
  ],
  figura: {
    titulo: "Fórmulas clave del tema",
    svg: `<svg viewBox="0 0 640 280" role="img" aria-label="Resumen: Pitágoras, longitud de la circunferencia, área del círculo, área del trapecio, área del polígono regular">
      <rect width="640" height="280" rx="16" fill="var(--paper)"/>
      ${[["Pitágoras", "a² = b² + c² (triángulo rectángulo)", "var(--red)"], ["Circunferencia", "L = 2πr", "var(--pen)"], ["Círculo", "A = πr² · sector: πr² · n / 360", "var(--pen)"], ["Trapecio", "A = (B + b) · h / 2", "var(--leaf)"], ["Polígono regular", "A = perímetro · apotema / 2", "var(--inf)"]].map(([n, d, c], i) => `<rect x="20" y="${12 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${41 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="230" y="${41 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "HLPTYRB1wPI", titulo: "Rectas notables de un triángulo: bisectriz, mediana, mediatriz y altura", canal: "Matemáticas profe Alex", vistas: 1606045, megusta: 0, busqueda: "rectas y puntos notables del triángulo" },
  quiz: mezcla([
    { q: "Los puntos que están a igual distancia de A y de B forman…", o: ["la mediatriz de AB", "la bisectriz", "una circunferencia"], a: 0, e: "Definición de mediatriz." },
    { q: "Las bisectrices de un triángulo se cortan en el…", o: ["baricentro", "incentro", "ortocentro"], a: 1, e: "Centro de la circunferencia inscrita." },
    { q: "El baricentro es el corte de las…", o: ["alturas", "medianas", "mediatrices"], a: 1, e: "Es el centro de gravedad." },
    { q: "Si los catetos miden 5 y 12, la hipotenusa mide…", o: ["13", "17", "√119"], a: 0, e: "√(25 + 144) = 13." },
    { q: "¿Es rectángulo un triángulo de lados 7, 8 y 10?", o: ["Sí", "No", "Depende"], a: 1, e: "49 + 64 = 113 ≠ 100." },
    { q: "El área de un rombo de diagonales 10 y 6 es…", o: ["60", "30", "16"], a: 1, e: "10 · 6 / 2." },
    { q: "La longitud de una circunferencia de radio 5 es…", o: ["10π", "25π", "5π"], a: 0, e: "2πr." },
    { q: "El área de un círculo de diámetro 8 es…", o: ["64π", "16π", "8π"], a: 1, e: "r = 4 → π · 16." },
    { q: "El área de un trapecio de bases 8 y 4 y altura 3 es…", o: ["18", "36", "15"], a: 0, e: "(8 + 4) · 3 / 2." },
    { q: "El área de un sector de 90° es del círculo…", o: ["la mitad", "la cuarta parte", "un tercio"], a: 1, e: "90 / 360 = 1/4." },
  ]),
  examen: mezcla([
    { q: "La diagonal de un rectángulo de 9 × 12 mide…", o: ["15", "21", "√63"], a: 0, e: "√(81 + 144)." },
    { q: "El circuncentro equidista de…", o: ["los tres vértices", "los tres lados", "el baricentro"], a: 0, e: "Es el centro de la circunscrita." },
    { q: "Un hexágono regular de lado 4 y apotema 3,46 tiene área…", o: ["41,5", "83", "24"], a: 0, e: "24 · 3,46 / 2 ≈ 41,5." },
  ]),
  feynman: ["Qué es un lugar geométrico, con dos ejemplos", "Por qué el circuncentro está a igual distancia de los tres vértices", "Cómo sabes si un triángulo es rectángulo conociendo sus lados", "Diferencia entre circunferencia y círculo"],
  mapa: mapa("FIGURAS PLANAS", "var(--eso)", [
    ["Lugares", "mediatriz · bisectriz · circunferencia", "var(--pen)"],
    ["Triángulo", "circuncentro · incentro · baricentro", "var(--leaf)"],
    ["Pitágoras", "a² = b² + c²", "var(--red)"],
    ["Áreas", "polígonos · círculo · sector", "var(--inf)"],
  ], 260),
  tarjetas: [
    ["Mediatriz", "Puntos a igual distancia de los extremos de un segmento."],
    ["Bisectriz", "Puntos a igual distancia de los lados de un ángulo."],
    ["Circuncentro", "Corte de las mediatrices; centro de la circunferencia circunscrita."],
    ["Incentro", "Corte de las bisectrices; centro de la circunferencia inscrita."],
    ["Baricentro", "Corte de las medianas; centro de gravedad."],
    ["Teorema de Pitágoras", "a² = b² + c², con a la hipotenusa."],
    ["Área del círculo", "πr²"],
    ["Área del polígono regular", "perímetro · apotema / 2"],
  ],
  familias: ["Comprobad con una cinta métrica la regla 3-4-5 en una esquina de casa.", "Comparad el área de dos pizzas de distinto tamaño y su precio por cm².", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido espacial: lugares geométricos, rectas y puntos notables, teorema de Pitágoras, perímetros y áreas de figuras planas (RD 217/2022, Matemáticas 3º).",
    ideas: ["Construcciones con regla y compás o GeoGebra para descubrir los puntos notables.", "Equilibrar triángulos de cartón sobre su baricentro.", "Medir superficies reales del centro (pistas, ventanas) y calcular áreas."],
  },
  fuentes: [RD, { t: "GeoGebra: puntos notables del triángulo", url: "https://www.geogebra.org/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Una escalera de 5 m se apoya en una pared con el pie a 1,4 m de ella. ¿A qué altura llega?",
      pasos: ["La escalera es la hipotenusa: a = 5; un cateto: b = 1,4.", "h² = 5² − 1,4² = 25 − 1,96 = 23,04.", "h = √23,04 = 4,8 m."],
      resultado: "4,8 m." },
    { enunciado: "Calcula el área de un triángulo equilátero de 6 cm de lado.",
      pasos: ["La altura divide la base en dos mitades de 3 cm.", "h = √(6² − 3²) = √27 ≈ 5,20 cm.", "Área = 6 · 5,20 / 2 ≈ 15,6 cm²."],
      resultado: "≈ 15,6 cm²." },
    { enunciado: "Un parterre circular de 4 m de radio tiene un camino alrededor de 1 m de ancho. Halla el área del camino.",
      pasos: ["Es una corona circular con R = 5 m y r = 4 m.", "A = π(R² − r²) = π(25 − 16) = 9π.", "9π ≈ 28,27 m²."],
      resultado: "≈ 28,27 m²." },
  ],
  errores: [
    "Aplicar Pitágoras a triángulos que no son rectángulos.",
    "Sumar los cuadrados para hallar un cateto en lugar de restar.",
    "Confundir mediatriz (perpendicular por el punto medio) con mediana (vértice al punto medio).",
    "Usar el diámetro en vez del radio en πr².",
    "Olvidar dividir entre 2 en el área del triángulo o del rombo.",
    "Expresar el área en cm en vez de cm².",
  ],
  ejercicios: [
    { q: "Describe el lugar geométrico de los puntos que están a 3 cm de un punto O.", sol: "Una circunferencia de centro O y radio 3 cm." },
    { q: "¿Qué punto notable usarías para colocar una fuente a igual distancia de tres casas? ¿Y para colocar un círculo de césped lo más grande posible dentro de un jardín triangular?", sol: "El circuncentro (corte de mediatrices). El incentro (corte de bisectrices), centro de la circunferencia inscrita." },
    { q: "Halla la hipotenusa de un triángulo rectángulo de catetos 8 y 15.", sol: "√(64 + 225) = √289 = 17." },
    { q: "La hipotenusa mide 26 y un cateto 10. Halla el otro.", sol: "√(676 − 100) = √576 = 24." },
    { q: "¿Es rectángulo el triángulo de lados 20, 21 y 29?", sol: "20² + 21² = 400 + 441 = 841 = 29². Sí." },
    { q: "Calcula la diagonal de un cuadrado de 10 cm de lado.", sol: "√(100 + 100) = √200 = 10√2 ≈ 14,14 cm." },
    { q: "Un trapecio isósceles tiene bases de 14 y 8 cm y lados oblicuos de 5 cm. Halla su altura y su área.", sol: "Diferencia de bases entre 2: 3 cm. h = √(25 − 9) = 4 cm. Área = (14 + 8) · 4 / 2 = 44 cm²." },
    { q: "Halla la longitud y el área de una circunferencia y círculo de radio 7 cm.", sol: "L = 14π ≈ 43,98 cm. A = 49π ≈ 153,94 cm²." },
    { q: "Calcula el área de un sector circular de 60° y radio 12 cm.", sol: "π · 144 · 60/360 = 24π ≈ 75,40 cm²." },
    { q: "Una pantalla de 16:9 tiene 80 cm de ancho. ¿Cuánto mide su diagonal?", sol: "Alto = 80 · 9/16 = 45 cm. Diagonal = √(6.400 + 2.025) = √8.425 ≈ 91,8 cm (unas 36 pulgadas)." },
  ],
};
