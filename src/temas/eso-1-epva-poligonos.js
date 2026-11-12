// Educación Plástica, Visual y Audiovisual 1º ESO: formas poligonales. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, poligono, arco, vb, vg } = require("./_eso1c");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Formas poligonales",
  minutos: 55,
  objetivos: ["Reconocer los elementos de un polígono y clasificar los polígonos", "Construir triángulos y cuadriláteros a partir de sus datos", "Inscribir en una circunferencia el triángulo, el cuadrado, el hexágono, el octógono y el dodecágono", "Crear polígonos estrellados y diseños modulares"],
  claves: ["polígono", "polígono regular", "inscrito", "radio", "polígono estrellado", "red modular"],
  pregunta: {
    texto: "¿Por qué las abejas construyen sus panales con celdas hexagonales y no redondas?",
    respuesta: "Porque los <b>hexágonos regulares</b> encajan unos con otros <mark>sin dejar huecos</mark> y, de todas las formas que lo consiguen, son los que encierran más espacio con menos pared. Los círculos dejarían huecos y gastarían cera. La geometría es también una cuestión de eficiencia.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un polígono?</h3><p>Un <b>polígono</b> es una figura plana limitada por una línea poligonal <b>cerrada</b> (segmentos rectos unidos por sus extremos). Sus elementos son:</p><ul><li><b>Lados</b>: los segmentos que lo forman.</li><li><b>Vértices</b>: los puntos donde se unen dos lados.</li><li><b>Ángulos</b> interiores: los que forman dos lados consecutivos.</li><li><b>Diagonales</b>: segmentos que unen dos vértices no consecutivos.</li></ul><p>Se nombran por el número de lados: triángulo (3), cuadrilátero (4), pentágono (5), hexágono (6), heptágono (7), octógono (8), eneágono (9), decágono (10), dodecágono (12).</p>`,
      svg: svg("Pentágono con sus elementos: un lado, un vértice, un ángulo interior y una diagonal", `${poligono(110, 92, 64, 5, { c: "var(--pen)", fill: "var(--pen)", op: 0.1 })}<path d="M110 28 L 147.6 143.8" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 3"/><circle cx="110" cy="28" r="4" fill="var(--ink)"/>${t(124, 24, "vértice", { s: 11, a: "start" })}${t(150, 100, "diagonal", { c: "var(--red)", s: 11, a: "start" })}${t(60, 140, "lado", { c: "var(--pen)", s: 11, a: "end" })}${t(218, 60, "5 lados", { s: 12 })}${t(218, 80, "5 vértices", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Clasificación de los polígonos</h3>${tabla(["Según…", "Tipos"], [["sus lados y ángulos", "<b>regulares</b> (todos los lados y ángulos iguales) e <b>irregulares</b>"], ["sus ángulos", "<b>convexos</b> (todos los ángulos menores de 180°) y <b>cóncavos</b> (alguno mayor de 180°, tienen una «entrada»)"], ["su relación con una circunferencia", "<b>inscritos</b> (sus vértices están en la circunferencia) y <b>circunscritos</b> (sus lados tocan la circunferencia por dentro)"]])}<p>Los polígonos regulares tienen <b>centro</b>, <b>radio</b> (distancia del centro a un vértice) y <b>apotema</b> (distancia del centro al punto medio de un lado). Todo polígono regular se puede <b>inscribir</b> en una circunferencia, y eso facilita mucho su construcción.</p>`,
      video: vb("polB2"),
    },
    {
      html: `<h3>Construir triángulos</h3><ul><li><b>Conocidos los tres lados</b> (a, b, c): se dibuja el lado a. Con centro en un extremo y radio b se traza un arco; con centro en el otro extremo y radio c, otro arco. Donde se cortan está el tercer vértice.</li><li><b>Equilátero</b> de lado l: igual, pero con los tres radios iguales a l.</li><li><b>Isósceles</b> conocidos la base y la altura: se dibuja la base, su mediatriz, se lleva la altura sobre ella y se unen los extremos.</li><li><b>Rectángulo</b> conocidos los catetos: se trazan dos perpendiculares y se llevan las medidas.</li></ul><p>Recuerda: para que exista el triángulo, <mark>cada lado debe ser menor que la suma de los otros dos</mark>.</p>`,
      svg: svg("Construcción de un triángulo dados sus tres lados con dos arcos de compás desde los extremos de la base", `<path d="M50 140 H 210" stroke="var(--ink)" stroke-width="2.5"/>${arco(50, 140, 110, 20, 50, "var(--pen)")}${arco(210, 140, 90, 120, 155, "var(--red)")}<path d="M50 140 L 142.5 80.5 L 210 140" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2.2"/>${t(130, 160, "a", { s: 12 })}${t(84, 104, "b", { s: 12, c: "var(--pen)" })}${t(190, 104, "c", { s: 12, c: "var(--red)" })}`),
    },
    {
      html: `<h3>Inscribir el hexágono y el triángulo</h3><p>El <b>hexágono regular</b> tiene una propiedad mágica: <mark>su lado mide lo mismo que el radio</mark> de la circunferencia en la que está inscrito.</p><ol><li>Traza una circunferencia y un diámetro vertical.</li><li>Sin cambiar la abertura del compás (el radio), pincha en un extremo del diámetro y marca dos arcos sobre la circunferencia; repite en el otro extremo.</li><li>Tienes 6 puntos: únelos de forma consecutiva.</li></ol><p>Si unes los vértices <b>alternos</b> (uno sí, uno no) obtienes un <b>triángulo equilátero</b>. Y si haces las mediatrices de los lados del hexágono, obtienes 12 puntos: el <b>dodecágono</b>.</p>`,
      svg: svg("Hexágono regular inscrito en una circunferencia con un triángulo equilátero formado por sus vértices alternos", `<circle cx="90" cy="90" r="64" fill="none" stroke="var(--muted)" stroke-width="1.5"/>${poligono(90, 90, 64, 6, { c: "var(--pen)", fill: "var(--pen)", op: 0.08 })}${poligono(90, 90, 64, 3, { c: "var(--red)", sw: 2 })}<path d="M90 90 L 90 26" stroke="var(--leaf)" stroke-width="2"/>${t(98, 60, "r", { c: "var(--leaf)", s: 12, a: "start" })}${t(205, 70, "lado = radio", { s: 12, c: "var(--pen)" })}${t(205, 94, "alternos →", { s: 11, c: "var(--red)" })}${t(205, 112, "triángulo", { s: 11, c: "var(--red)" })}`),
      video: vb("polB"),
    },
    {
      html: `<h3>Inscribir el cuadrado y el octógono</h3><ol><li>Traza una circunferencia y <b>dos diámetros perpendiculares</b> (con escuadra y cartabón o con la mediatriz).</li><li>Los 4 puntos donde cortan la circunferencia son los vértices del <b>cuadrado</b>. Únelos.</li><li>Traza las <b>bisectrices</b> de los ángulos rectos (o las mediatrices de los lados del cuadrado). Cortan la circunferencia en 4 puntos más.</li><li>Con los 8 puntos tienes el <b>octógono</b> regular.</li></ol><p>Repitiendo las bisectrices obtienes 16 puntos, y así sucesivamente. Las señales de STOP son octógonos regulares.</p>`,
      svg: svg("Cuadrado y octógono regulares inscritos en la misma circunferencia con dos diámetros perpendiculares", `<circle cx="90" cy="90" r="64" fill="none" stroke="var(--muted)" stroke-width="1.5"/><path d="M26 90 H 154 M90 26 V 154" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/>${poligono(90, 90, 64, 4, { c: "var(--sun)", sw: 2.2 })}${poligono(90, 90, 64, 8, { giro: -67.5, c: "var(--pen)", fill: "var(--pen)", op: 0.08 })}${t(205, 76, "cuadrado", { s: 12, c: "var(--sun)" })}${t(205, 100, "octógono", { s: 12, c: "var(--pen)" })}`),
    },
    {
      html: `<h3>El pentágono regular</h3><p>El pentágono es algo más complicado, pero se puede inscribir con este método:</p><ol><li>Traza una circunferencia con dos diámetros perpendiculares (vertical y horizontal).</li><li>Halla el <b>punto medio</b> M del radio horizontal derecho (con su mediatriz).</li><li>Con centro en M y radio hasta el extremo superior A del diámetro vertical, traza un arco que corte el diámetro horizontal en un punto N.</li><li>La distancia <b>A–N</b> es el <mark>lado del pentágono</mark>. Llévala con el compás 5 veces sobre la circunferencia desde A.</li></ol><p>Uniendo los vértices alternos de un pentágono se obtiene la <b>estrella de cinco puntas</b>.</p>`,
    },
    {
      html: `<h3>Polígonos estrellados</h3><p>Un <b>polígono estrellado</b> se obtiene al unir los puntos de una circunferencia dividida en partes iguales <b>saltando</b> siempre el mismo número de puntos:</p><ul><li>5 puntos, saltando de 2 en 2 → <b>estrella de 5 puntas</b> (pentagrama).</li><li>8 puntos, de 3 en 3 → <b>estrella de 8 puntas</b>, muy usada en el arte islámico.</li><li>6 puntos, de 2 en 2 → dos triángulos superpuestos (estrella de 6 puntas).</li></ul><p>Los estrellados se usan en <b>rosetones</b>, azulejos, logotipos y banderas.</p>`,
      svg: svg("Estrella de cinco puntas y estrella de ocho puntas dentro de sus circunferencias", (() => { const est = (cx, cy, r, n, k, c) => { const P = (i) => [(cx + r * Math.cos(-Math.PI / 2 + (2 * Math.PI * i) / n)).toFixed(1), (cy + r * Math.sin(-Math.PI / 2 + (2 * Math.PI * i) / n)).toFixed(1)]; let d = ""; for (let i = 0; i <= n; i++) { const [x, y] = P((i * k) % n); d += `${i ? "L" : "M"}${x} ${y} `; } return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--muted)" stroke-width="1.2"/><path d="${d}" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2.2"/>`; }; return `${est(70, 84, 54, 5, 2, "var(--red)")}${est(190, 84, 54, 8, 3, "var(--pen)")}${t(70, 160, "5 puntas (2 en 2)", { s: 10, c: "var(--red)" })}${t(190, 160, "8 puntas (3 en 3)", { s: 10, c: "var(--pen)" })}` ; })()),
    },
    {
      html: `<h3>Redes modulares y mosaicos</h3><p>Un <b>módulo</b> es una forma que se repite. Al repetirla sobre una <b>red</b> (una cuadrícula de triángulos, cuadrados o hexágonos) se crean <b>mosaicos</b> que cubren el plano sin huecos.</p><p>Solo tres polígonos regulares forman mosaicos por sí solos: el <b>triángulo equilátero</b>, el <b>cuadrado</b> y el <b>hexágono</b>, porque sus ángulos (60°, 90° y 120°) caben exactamente en 360°.</p><p>Los artistas de <b>al-Ándalus</b> llenaron la <b>Alhambra</b> de Granada de mosaicos geométricos asombrosos, y <b>M. C. Escher</b> se inspiró en ellos para crear sus mosaicos de animales que encajan como un puzle.</p>`,
    },
  ],
  figura: {
    titulo: "Formas poligonales en un vistazo",
    svg: filas("Resumen: elementos del polígono; regulares e irregulares; triángulo con tres arcos; hexágono con el radio; cuadrado con diámetros perpendiculares; estrellados saltando puntos; mosaicos", [["Elementos", "lados · vértices · ángulos · diagonales", "var(--pen)"], ["Regular", "lados y ángulos iguales", "var(--inf)"], ["Triángulo", "tres lados → dos arcos", "var(--sun)"], ["Hexágono", "lado = radio", "var(--leaf)"], ["Estrellados", "unir saltando puntos", "var(--red)"], ["Mosaicos", "triángulo · cuadrado · hexágono", "var(--ink)"]], 200),
  },
  video: vg("polV"),
  quiz: mezcla([
    { q: "Un polígono de 8 lados es un…", o: ["octógono", "heptágono", "decágono"], a: 0, e: "Oct = 8." },
    { q: "Un polígono regular tiene…", o: ["lados y ángulos iguales", "solo lados iguales", "ángulos rectos"], a: 0, e: "Ambas cosas." },
    { q: "Un polígono con un ángulo mayor de 180° es…", o: ["cóncavo", "convexo", "regular"], a: 0, e: "Tiene una entrada." },
    { q: "Un polígono inscrito tiene sus vértices…", o: ["sobre la circunferencia", "fuera", "en el centro"], a: 0, e: "Dentro y tocando." },
    { q: "En el hexágono regular, el lado mide…", o: ["lo mismo que el radio", "el doble del radio", "la mitad del radio"], a: 0, e: "Propiedad clave." },
    { q: "Uniendo vértices alternos del hexágono se obtiene un…", o: ["triángulo equilátero", "cuadrado", "pentágono"], a: 0, e: "Uno sí, uno no." },
    { q: "Con dos diámetros perpendiculares se inscribe un…", o: ["cuadrado", "pentágono", "triángulo"], a: 0, e: "4 puntos." },
    { q: "La estrella de 5 puntas se obtiene saltando…", o: ["de 2 en 2", "de 3 en 3", "de 1 en 1"], a: 0, e: "Pentagrama." },
    { q: "¿Qué polígono regular NO forma mosaico solo?", o: ["el pentágono", "el hexágono", "el cuadrado"], a: 0, e: "108° no cabe en 360°." },
    { q: "Los mosaicos geométricos de la Alhambra son de arte…", o: ["nazarí (andalusí)", "románico", "gótico"], a: 0, e: "Granada." },
  ]),
  examen: mezcla([
    { q: "¿Se puede construir un triángulo de lados 2, 3 y 7 cm?", o: ["no", "sí", "solo si es isósceles"], a: 0, e: "7 > 2 + 3." },
    { q: "Si haces las mediatrices de los lados de un hexágono inscrito obtienes un…", o: ["dodecágono", "octógono", "decágono"], a: 0, e: "12 puntos." },
    { q: "Un polígono cuyos lados tocan la circunferencia por dentro está…", o: ["circunscrito", "inscrito", "estrellado"], a: 0, e: "Rodea la circunferencia." },
  ]),
  feynman: ["Elementos de un polígono", "Diferencia entre regular e irregular, cóncavo y convexo", "Cómo se construye un triángulo conociendo sus lados", "Por qué el hexágono se construye con el radio", "Qué polígonos forman mosaicos y por qué"],
  mapa: mapa("FORMAS POLIGONALES", "var(--eso)", [
    ["Polígonos", "elementos · tipos", "var(--pen)"],
    ["Triángulos", "construcción con compás", "var(--sun)"],
    ["Inscritos", "hexágono · cuadrado · pentágono", "var(--leaf)"],
    ["Estrellas y mosaicos", "saltos · redes", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Polígono", "Figura plana cerrada por segmentos."],
    ["Diagonal", "Une dos vértices no consecutivos."],
    ["Polígono regular", "Lados y ángulos iguales."],
    ["Cóncavo", "Tiene algún ángulo mayor de 180°."],
    ["Inscrito", "Sus vértices están en la circunferencia."],
    ["Hexágono regular", "Su lado es igual al radio."],
    ["Estrellado", "Se forma uniendo puntos saltando siempre igual."],
    ["Mosaico", "Formas que cubren el plano sin huecos."],
  ],
  familias: ["Buscad hexágonos, octógonos y estrellas en la calle (señales, baldosas, tapas, logotipos).", "Construid juntos un mosaico de cartulina con un módulo inventado.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Formas poligonales: clasificación, construcción de triángulos y cuadriláteros, polígonos regulares inscritos, estrellados y redes modulares (RD 217/2022, Educación Plástica, Visual y Audiovisual, geometría).",
    ideas: ["Láminas de polígonos inscritos con líneas auxiliares.", "Mosaicos inspirados en la Alhambra o en Escher.", "Rosetones estrellados coloreados con armonías de color."],
  },
  fuentes: [RD, { t: "Patronato de la Alhambra y Generalife", url: "https://www.alhambra-patronato.es/" }],
  revisado: REV,
  ejemplosTitulo: "Lo hacemos paso a paso",
  ejemplos: [
    { enunciado: "Construye un triángulo de lados 6, 5 y 4 cm.", pasos: ["Dibuja el lado de 6 cm.", "Arco de radio 5 cm desde un extremo y arco de radio 4 cm desde el otro.", "Une el punto de corte con los dos extremos."], resultado: "Triángulo escaleno de lados 6, 5 y 4 cm." },
    { enunciado: "Inscribe un dodecágono en una circunferencia de 4 cm de radio.", pasos: ["Divide la circunferencia en 6 partes con la abertura del radio.", "Traza las mediatrices de dos lados contiguos del hexágono: cortan la circunferencia en los puntos intermedios.", "Completa los 12 puntos y únelos."], resultado: "Dodecágono regular." },
    { enunciado: "Dibuja una estrella de 8 puntas.", pasos: ["Inscribe un octógono: diámetros perpendiculares y sus bisectrices.", "Numera los 8 puntos.", "Une 1-4-7-2-5-8-3-6-1 (saltando de 3 en 3)."], resultado: "Estrella de 8 puntas de una sola línea." },
  ],
  errores: [
    "Cambiar la abertura del compás al dividir la circunferencia en 6 partes.",
    "Unir los vértices en orden equivocado al trazar un estrellado.",
    "Confundir inscrito (dentro) con circunscrito (fuera).",
    "Pensar que todos los polígonos regulares forman mosaicos.",
    "Trazar las líneas auxiliares tan marcadas como el resultado final.",
  ],
  ejercicios: [
    { q: "Dibuja un hexágono irregular y uno regular. ¿Cuántas diagonales tiene un hexágono?", sol: "Respuesta práctica; 9 diagonales." },
    { q: "Dibuja un polígono cóncavo y señala el ángulo mayor de 180°.", sol: "Respuesta práctica (por ejemplo, una forma de flecha)." },
    { q: "Construye un triángulo equilátero de 5 cm de lado.", sol: "Lado de 5 cm y dos arcos de 5 cm desde sus extremos." },
    { q: "Construye un triángulo isósceles de base 4 cm y altura 6 cm.", sol: "Base, mediatriz, llevar 6 cm sobre ella y unir." },
    { q: "Inscribe un hexágono regular en una circunferencia de 3,5 cm de radio. ¿Cuánto mide su lado?", sol: "3,5 cm." },
    { q: "Inscribe un cuadrado y un octógono en la misma circunferencia con colores distintos.", sol: "Respuesta práctica." },
    { q: "Inscribe un pentágono regular siguiendo el método del tema.", sol: "Respuesta práctica: lado = distancia A–N." },
    { q: "Dibuja la estrella de 5 puntas a partir del pentágono.", sol: "Uniendo los vértices alternos." },
    { q: "Explica por qué los hexágonos forman mosaicos y los pentágonos no.", sol: "3 · 120° = 360°; 108° no cabe un número entero de veces en 360°." },
    { q: "Diseña un módulo sobre una red de cuadrados y repítelo 9 veces formando un mosaico.", sol: "Respuesta práctica." },
  ],
};
