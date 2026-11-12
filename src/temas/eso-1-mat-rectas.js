// Matemáticas 1º ESO: rectas, ángulos y figuras planas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, arco, poligono, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Rectas, ángulos y figuras planas",
  minutos: 60,
  objetivos: ["Distinguir recta, semirrecta y segmento y las posiciones relativas de dos rectas", "Medir, clasificar y operar con ángulos en el sistema sexagesimal", "Clasificar triángulos y cuadriláteros y conocer la suma de sus ángulos", "Reconocer polígonos regulares y los elementos de la circunferencia"],
  claves: ["segmento", "paralelas", "perpendiculares", "ángulo", "triángulo", "polígono regular"],
  pregunta: {
    texto: "¿Por qué las baldosas de muchos suelos son cuadradas o hexagonales, y nunca pentagonales?",
    respuesta: "Porque para cubrir el suelo sin huecos, los ángulos que se juntan en un punto deben sumar <b>360°</b>. Cuatro ángulos de cuadrado (4 · 90°) o tres de hexágono (3 · 120°) lo consiguen. Los del pentágono miden 108°, y <mark>108 no cabe un número exacto de veces en 360</mark>: siempre quedaría un hueco.",
  },
  bloques: [
    {
      html: `<h3>Punto, recta, semirrecta y segmento</h3><ul><li>Una <b>recta</b> es una línea sin principio ni fin. Se nombra con una letra minúscula (r) o con dos de sus puntos (AB).</li><li>Una <b>semirrecta</b> tiene origen pero no tiene fin: un punto la divide en dos semirrectas.</li><li>Un <b>segmento</b> es la parte de recta comprendida entre dos puntos, sus <b>extremos</b>. Se puede medir.</li></ul><p>El <b>punto medio</b> de un segmento lo divide en dos partes iguales. La recta perpendicular que pasa por él es la <b>mediatriz</b>: todos sus puntos están a la misma distancia de los dos extremos.</p>`,
      svg: svg("Una recta con flechas en los dos extremos, una semirrecta con origen y un segmento AB con su punto medio", `<path d="M20 40 H 240" stroke="var(--pen)" stroke-width="2.5" marker-start="url(#fr1)" marker-end="url(#fr1)"/><defs><marker id="fr1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--pen)"/></marker></defs>${t(130, 30, "recta", { c: "var(--pen)", s: 11 })}<circle cx="40" cy="90" r="4" fill="var(--leaf)"/><path d="M40 90 H 240" stroke="var(--leaf)" stroke-width="2.5" marker-end="url(#fr1)"/>${t(130, 80, "semirrecta", { c: "var(--leaf)", s: 11 })}<path d="M60 140 H 200" stroke="var(--red)" stroke-width="2.5"/><circle cx="60" cy="140" r="4" fill="var(--red)"/><circle cx="200" cy="140" r="4" fill="var(--red)"/><circle cx="130" cy="140" r="3" fill="var(--ink)"/>${t(60, 160, "A", { s: 12 })}${t(200, 160, "B", { s: 12 })}${t(130, 128, "M", { s: 11 })}${t(130, 172, "segmento", { c: "var(--red)", s: 10 })}`),
    },
    {
      html: `<h3>Posiciones de dos rectas en el plano</h3><ul><li><b>Paralelas</b>: no se cortan nunca; mantienen siempre la misma distancia. Como los raíles de un tren.</li><li><b>Secantes</b>: se cortan en un punto.</li><li><b>Perpendiculares</b>: son secantes y forman <mark>cuatro ángulos rectos</mark> (90°). Como las esquinas de una hoja.</li></ul><p>Para trazar paralelas y perpendiculares se usan la <b>escuadra</b> y el <b>cartabón</b>: se desliza una sobre la otra.</p>`,
      svg: svg("Dos rectas paralelas, dos secantes y dos perpendiculares con el ángulo recto marcado", `<path d="M14 40 L 80 40 M14 70 L 80 70" stroke="var(--pen)" stroke-width="2.5"/>${t(47, 100, "paralelas", { c: "var(--pen)", s: 10 })}<path d="M98 30 L 158 90 M98 90 L 158 40" stroke="var(--leaf)" stroke-width="2.5"/>${t(128, 110, "secantes", { c: "var(--leaf)", s: 10 })}<path d="M180 60 H 246 M213 26 V 96" stroke="var(--red)" stroke-width="2.5"/><path d="M213 50 H 223 V 60" fill="none" stroke="var(--red)" stroke-width="1.5"/>${t(213, 116, "perpendiculares", { c: "var(--red)", s: 10 })}${t(130, 156, "∥ no se cortan · ⊥ forman 90°", { s: 12 })}`),
    },
    {
      html: `<h3>Los ángulos y su medida</h3><p>Un <b>ángulo</b> es la región del plano entre dos semirrectas (<b>lados</b>) que parten del mismo punto (<b>vértice</b>). Se mide en <b>grados</b> (°) con el <b>transportador</b>.</p><p>El sistema es <b>sexagesimal</b>: 1° = 60 minutos (60′) y 1′ = 60 segundos (60″). Una vuelta completa son 360°.</p>${tabla(["Ángulo", "Medida"], [["Agudo", "menos de 90°"], ["Recto", "90°"], ["Obtuso", "entre 90° y 180°"], ["Llano", "180°"], ["Completo", "360°"]])}<p>Dos ángulos son <b>complementarios</b> si suman 90° y <b>suplementarios</b> si suman 180°. El complementario de 35° es 55°; el suplementario, 145°.</p>`,
      svg: svg("Tres ángulos: agudo de 40 grados, recto de 90 y obtuso de 130", `${[[40, 40, "agudo", "var(--leaf)"], [130, 90, "recto", "var(--pen)"], [210, 130, "obtuso", "var(--red)"]].map(([x, g, n, c]) => `<path d="M${x - 30} 110 H ${x + 30} M${x - 30} 110 L ${(x - 30 + 56 * Math.cos((g * Math.PI) / 180)).toFixed(1)} ${(110 - 56 * Math.sin((g * Math.PI) / 180)).toFixed(1)}" stroke="var(--ink)" stroke-width="2.2"/>${arco(x - 30, 110, 18, 0, g, c)}${t(x, 140, n, { c, s: 11 })}${t(x, 158, g + "°", { s: 11 })}`).join("")}`),
    },
    {
      html: `<h3>Ángulos formados por rectas</h3><ul><li><b>Opuestos por el vértice</b>: cuando dos rectas se cortan, los ángulos enfrentados son <mark>iguales</mark>.</li><li><b>Adyacentes</b>: comparten un lado y los otros dos forman una recta; suman 180°.</li><li>Si una recta corta a dos <b>paralelas</b>, se forman ángulos iguales en cada cruce (los <b>correspondientes</b>).</li></ul><p>La <b>bisectriz</b> de un ángulo es la semirrecta que lo divide en dos ángulos iguales. La bisectriz de 70° forma dos ángulos de 35°.</p><p>Para sumar ángulos en forma compleja se suman grados, minutos y segundos por separado y, si pasan de 60, se convierten: 25° 40′ + 10° 35′ = 35° 75′ = <b>36° 15′</b>.</p>`,
    },
    {
      html: `<h3>Los triángulos</h3><p>Un <b>triángulo</b> es un polígono de tres lados. Sus ángulos interiores <mark>suman siempre 180°</mark>. Si recortas las tres esquinas de un triángulo de papel y las juntas, forman un ángulo llano.</p>${tabla(["Según sus lados", "", "Según sus ángulos", ""], [["Equilátero", "3 lados iguales", "Acutángulo", "3 ángulos agudos"], ["Isósceles", "2 lados iguales", "Rectángulo", "1 ángulo recto"], ["Escaleno", "3 lados distintos", "Obtusángulo", "1 ángulo obtuso"]])}<p>Si un triángulo tiene ángulos de 50° y 70°, el tercero mide 180 − 50 − 70 = <b>60°</b>. Para construir un triángulo, cada lado debe ser menor que la suma de los otros dos.</p>`,
      video: vb("recB"),
    },
    {
      html: `<h3>Los cuadriláteros</h3><p>Tienen cuatro lados y sus ángulos <mark>suman 360°</mark> (una diagonal los parte en dos triángulos: 2 · 180°).</p><ul><li><b>Paralelogramos</b> (lados opuestos paralelos): <b>cuadrado</b> (4 lados iguales y 4 ángulos rectos), <b>rectángulo</b> (4 ángulos rectos), <b>rombo</b> (4 lados iguales) y <b>romboide</b>.</li><li><b>Trapecios</b>: solo dos lados paralelos (rectángulo, isósceles o escaleno).</li><li><b>Trapezoides</b>: ningún lado paralelo.</li></ul><p>Las <b>diagonales</b> unen vértices no consecutivos. Las del cuadrado y el rombo son perpendiculares.</p>`,
      svg: svg("Cuatro paralelogramos: cuadrado, rectángulo, rombo y romboide; y un trapecio", `<rect x="14" y="24" width="44" height="44" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>${t(36, 84, "cuadrado", { s: 9 })}<rect x="74" y="30" width="70" height="38" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>${t(109, 84, "rectángulo", { s: 9 })}<path d="M190 20 L 214 46 L 190 72 L 166 46 Z" fill="var(--sun)" fill-opacity=".2" stroke="var(--sun)" stroke-width="2"/>${t(190, 86, "rombo", { s: 9 })}<path d="M30 150 L 50 110 H 110 L 90 150 Z" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/>${t(70, 166, "romboide", { s: 9 })}<path d="M150 150 L 170 110 H 210 L 240 150 Z" fill="var(--inf)" fill-opacity=".2" stroke="var(--inf)" stroke-width="2"/>${t(195, 166, "trapecio", { s: 9 })}`),
      video: vb("recB2"),
    },
    {
      html: `<h3>Polígonos regulares</h3><p>Un <b>polígono</b> es una figura plana cerrada por segmentos. Se nombra por su número de lados: pentágono (5), hexágono (6), heptágono (7), octógono (8)…</p><p>Es <b>regular</b> si tiene <mark>todos los lados y todos los ángulos iguales</mark>. Sus elementos son el <b>centro</b>, el <b>radio</b> (del centro a un vértice) y la <b>apotema</b> (del centro al punto medio de un lado).</p><p>Los ángulos interiores de un polígono de n lados suman <b>(n − 2) · 180°</b>. En el hexágono: 4 · 180° = 720°, y cada ángulo mide 720° : 6 = 120°.</p>`,
      svg: svg("Hexágono regular con su centro, un radio hasta un vértice y la apotema hasta el punto medio de un lado", `${poligono(90, 92, 62, 6, { giro: 0, c: "var(--pen)", fill: "var(--pen)", op: 0.1 })}<circle cx="90" cy="92" r="3" fill="var(--ink)"/><path d="M90 92 L 152 92" stroke="var(--red)" stroke-width="2.2"/><path d="M90 92 L 90 38.3" stroke="var(--leaf)" stroke-width="2.2" stroke-dasharray="4 3"/>${t(124, 108, "radio", { c: "var(--red)", s: 11 })}${t(76, 66, "apotema", { c: "var(--leaf)", s: 10, a: "end" })}${t(208, 80, "6 lados", { s: 12 })}${t(208, 100, "ángulo 120°", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>La circunferencia y el círculo</h3><p>La <b>circunferencia</b> es la línea curva cerrada cuyos puntos están todos a la <b>misma distancia</b> del centro. El <b>círculo</b> es la superficie que encierra.</p><ul><li><b>Radio</b> (r): del centro a la circunferencia.</li><li><b>Diámetro</b> (d): cuerda que pasa por el centro. <mark>d = 2r</mark>.</li><li><b>Cuerda</b>: segmento que une dos puntos de la circunferencia.</li><li><b>Arco</b>: trozo de circunferencia.</li></ul><p>Una recta puede ser <b>exterior</b> (no la toca), <b>tangente</b> (la toca en un punto) o <b>secante</b> (la corta en dos). Las partes del círculo son el <b>sector</b> (como un trozo de pizza) y el <b>segmento circular</b>.</p>`,
    },
  ],
  figura: {
    titulo: "Rectas, ángulos y figuras en un vistazo",
    svg: filas("Resumen: recta, semirrecta y segmento; paralelas y perpendiculares; ángulos agudo, recto, obtuso y llano; triángulos suman 180; cuadriláteros 360; polígonos regulares y circunferencia", [["Líneas", "recta · semirrecta · segmento", "var(--pen)"], ["Posiciones", "paralelas · secantes · perpendiculares", "var(--inf)"], ["Ángulos", "agudo · recto · obtuso · llano", "var(--sun)"], ["Triángulos", "suman 180°", "var(--leaf)"], ["Cuadriláteros", "suman 360°", "var(--red)"], ["Regulares", "lados y ángulos iguales", "var(--ink)"]], 200),
  },
  video: vg("recV"),
  quiz: mezcla([
    { q: "¿Qué tiene principio y fin?", o: ["el segmento", "la recta", "la semirrecta"], a: 0, e: "Dos extremos." },
    { q: "Dos rectas que forman 4 ángulos rectos son…", o: ["perpendiculares", "paralelas", "tangentes"], a: 0, e: "90°." },
    { q: "Un ángulo de 120° es…", o: ["obtuso", "agudo", "llano"], a: 0, e: "Entre 90 y 180." },
    { q: "El complementario de 25° es…", o: ["65°", "155°", "75°"], a: 0, e: "90 − 25." },
    { q: "1° equivale a…", o: ["60′", "100′", "360′"], a: 0, e: "Sexagesimal." },
    { q: "Los ángulos de un triángulo suman…", o: ["180°", "360°", "90°"], a: 0, e: "Ángulo llano." },
    { q: "Un triángulo con dos lados iguales es…", o: ["isósceles", "equilátero", "escaleno"], a: 0, e: "Dos iguales." },
    { q: "Un rombo tiene…", o: ["4 lados iguales", "4 ángulos rectos siempre", "un solo par de paralelos"], a: 0, e: "Paralelogramo de lados iguales." },
    { q: "Cada ángulo del hexágono regular mide…", o: ["120°", "108°", "135°"], a: 0, e: "720 : 6." },
    { q: "Si el radio mide 5 cm, el diámetro mide…", o: ["10 cm", "2,5 cm", "25 cm"], a: 0, e: "d = 2r." },
  ]),
  examen: mezcla([
    { q: "Un triángulo tiene ángulos de 90° y 35°. El tercero mide…", o: ["55°", "65°", "45°"], a: 0, e: "180 − 125." },
    { q: "Los ángulos interiores de un pentágono suman…", o: ["540°", "360°", "720°"], a: 0, e: "3 · 180." },
    { q: "40° 50′ + 20° 25′ =", o: ["61° 15′", "60° 75′", "61° 75′"], a: 0, e: "75′ = 1° 15′." },
  ]),
  feynman: ["Diferencia entre recta, semirrecta y segmento", "Qué son ángulos complementarios y suplementarios", "Por qué los ángulos de un triángulo suman 180°", "Cómo se clasifican los cuadriláteros", "Qué es un polígono regular y su apotema"],
  mapa: mapa("RECTAS, ÁNGULOS Y FIGURAS", "var(--eso)", [
    ["Rectas", "paralelas · perpendiculares", "var(--pen)"],
    ["Ángulos", "sexagesimal · tipos", "var(--sun)"],
    ["Polígonos", "triángulos · cuadriláteros", "var(--leaf)"],
    ["Circunferencia", "radio · diámetro · cuerda", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Segmento", "Parte de recta entre dos puntos."],
    ["Perpendiculares", "Rectas que se cortan formando 90°."],
    ["Complementarios", "Ángulos que suman 90°."],
    ["Suplementarios", "Ángulos que suman 180°."],
    ["Bisectriz", "Divide un ángulo en dos iguales."],
    ["Triángulo", "Sus ángulos suman 180°."],
    ["Polígono regular", "Lados y ángulos iguales."],
    ["Diámetro", "El doble del radio."],
  ],
  familias: ["Buscad en casa ángulos rectos, agudos y obtusos (puertas, tijeras, relojes).", "Mirad las baldosas de la calle y contad cuántas piezas se juntan en cada vértice.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Elementos básicos de la geometría plana, ángulos y su medida, triángulos, cuadriláteros, polígonos regulares y circunferencia (RD 217/2022, Matemáticas, sentido espacial).",
    ideas: ["Recortar las esquinas de triángulos de papel para comprobar los 180°.", "Mosaicos con polígonos regulares.", "GeoGebra para medir ángulos y mover vértices."],
  },
  fuentes: [RD, { t: "GeoGebra: geometría plana", url: "https://www.geogebra.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Halla el complementario y el suplementario de 37° 20′.", pasos: ["90° = 89° 60′. 89° 60′ − 37° 20′ = 52° 40′.", "180° = 179° 60′. 179° 60′ − 37° 20′ = 142° 40′.", "Comprobación: 37° 20′ + 52° 40′ = 89° 60′ = 90°."], resultado: "52° 40′ y 142° 40′." },
    { enunciado: "En un triángulo isósceles el ángulo desigual mide 40°. ¿Cuánto miden los otros dos?", pasos: ["Suman 180°: los dos iguales suman 180 − 40 = 140°.", "Cada uno: 140 : 2 = 70°.", "Comprobación: 70 + 70 + 40 = 180."], resultado: "70° cada uno." },
    { enunciado: "¿Cuánto mide cada ángulo de un octógono regular?", pasos: ["Suma: (8 − 2) · 180° = 1 080°.", "Ocho ángulos iguales.", "1 080 : 8 = 135°."], resultado: "135°" },
  ],
  errores: [
    "Pensar que un segmento puede alargarse sin fin (eso es la recta).",
    "Confundir complementarios (90°) con suplementarios (180°).",
    "Restar ángulos en forma compleja sin pasar 1° a 60′ cuando hace falta.",
    "Creer que todos los rombos son cuadrados.",
    "Confundir el radio con el diámetro.",
  ],
  ejercicios: [
    { q: "Dibuja dos rectas secantes que no sean perpendiculares y nombra los cuatro ángulos.", sol: "Dos pares de ángulos opuestos por el vértice iguales, uno agudo y otro obtuso." },
    { q: "Clasifica: 15°, 90°, 145°, 180°.", sol: "Agudo, recto, obtuso, llano." },
    { q: "Pasa 2° 30′ a minutos y 150′ a grados y minutos.", sol: "150′; 2° 30′." },
    { q: "Calcula: 48° 35′ + 27° 40′.", sol: "75° 75′ = 76° 15′." },
    { q: "Dos ángulos adyacentes: uno mide 65°. ¿Cuánto mide el otro?", sol: "115°." },
    { q: "Clasifica por lados y ángulos un triángulo de lados 5, 5 y 5 cm.", sol: "Equilátero y acutángulo (60°, 60°, 60°)." },
    { q: "Un cuadrilátero tiene ángulos de 80°, 100° y 95°. ¿Cuánto mide el cuarto?", sol: "360 − 275 = 85°." },
    { q: "¿Qué paralelogramos tienen las diagonales perpendiculares?", sol: "El cuadrado y el rombo." },
    { q: "¿Cuántos grados suman los ángulos de un decágono? ¿Cuánto mide cada uno si es regular?", sol: "1 440°; 144°." },
    { q: "Una rueda de bici tiene 70 cm de diámetro. ¿Cuánto mide su radio?", sol: "35 cm." },
  ],
};
