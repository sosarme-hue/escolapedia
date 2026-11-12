// Educación Plástica, Visual y Audiovisual 3º ESO: polígonos y formas modulares. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

const M = "Educación Plástica, Visual y Audiovisual";
// Polígono regular de n lados, centro (cx, cy), radio r, girado g grados.
const poli = (n, cx, cy, r, g = -90) => [...Array(n)].map((_, i) => { const a = ((g + (i * 360) / n) * Math.PI) / 180; return `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(" ") + " Z";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Polígonos y formas modulares",
  minutos: 50,
  objetivos: ["Clasificar polígonos y reconocer sus elementos", "Construir triángulos, cuadriláteros y polígonos regulares inscritos en una circunferencia", "Comprender qué son los módulos, las redes modulares y las estructuras de repetición", "Diseñar composiciones modulares y mosaicos"],
  claves: ["polígono regular", "inscrito", "apotema", "módulo", "red modular", "mosaico"],
  pregunta: {
    texto: "¿Por qué las abejas construyen sus panales con hexágonos y no con círculos o pentágonos?",
    respuesta: "Porque el hexágono regular <mark>encaja sin dejar huecos</mark> y, de las formas que lo hacen, es la que encierra más espacio con menos cera. Los hexágonos son un ejemplo perfecto de forma modular: una pieza que se repite y llena una superficie.",
  },
  bloques: [
    {
      html: `<h3>Polígonos: elementos y clasificación</h3><p>Un <b>polígono</b> es una figura plana limitada por segmentos llamados <b>lados</b>. Sus elementos son los lados, los <b>vértices</b>, los <b>ángulos</b> y las <b>diagonales</b> (segmentos que unen vértices no consecutivos).</p><p>Se nombran por su número de lados: triángulo (3), cuadrilátero (4), pentágono (5), hexágono (6), heptágono (7), octógono (8), eneágono (9), decágono (10)… Son <b>regulares</b> si tienen todos los lados y ángulos iguales e <b>irregulares</b> si no. También pueden ser <b>convexos</b> (todos los ángulos menores de 180°) o <b>cóncavos</b> (con algún entrante).</p>`,
      svg: svg("Polígonos regulares: triángulo, cuadrado, pentágono, hexágono y octógono", `${[[3, "var(--red)"], [4, "var(--pen)"], [5, "var(--leaf)"], [6, "var(--hl-ink)"], [8, "var(--inf)"]].map(([n, c], i) => `<path d="${poli(n, 30 + i * 50, 80, 22, n === 4 ? -45 : -90)}" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="2.5"/>${t(30 + i * 50, 126, n + " lados", { s: 10, c })}`).join("")}
        ${t(130, 30, "polígonos regulares", { s: 13 })}${t(130, 156, "lados y ángulos iguales", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Triángulos y cuadriláteros</h3>${tabla(["Según", "Tipos"], [["Lados del triángulo", "equilátero (3 iguales), isósceles (2 iguales), escaleno (ninguno igual)"], ["Ángulos del triángulo", "acutángulo, rectángulo (uno de 90°), obtusángulo (uno mayor de 90°)"], ["Cuadriláteros", "paralelogramos (cuadrado, rectángulo, rombo, romboide), trapecios (dos lados paralelos) y trapezoides (ninguno)"]])}<p>Un triángulo se construye con compás si conocemos sus <b>tres lados</b>: se traza uno y, desde sus extremos, arcos con la medida de los otros dos; donde se cortan está el tercer vértice. Solo es posible si cada lado es menor que la suma de los otros dos.</p>`,
    },
    {
      html: `<h3>Polígonos regulares inscritos</h3><p>Un polígono está <b>inscrito</b> en una circunferencia si todos sus vértices están sobre ella. Sus elementos: <b>centro</b>, <b>radio</b> (del centro a un vértice), <b>apotema</b> (del centro al punto medio de un lado, perpendicular a él) y <b>ángulo central</b> (360° / n).</p><p>Construcciones con compás a partir del radio:</p><ul><li><b>Hexágono</b>: el lado es <mark>igual al radio</mark>. Se lleva el radio seis veces sobre la circunferencia.</li><li><b>Triángulo equilátero</b>: se unen vértices alternos del hexágono.</li><li><b>Cuadrado</b>: se trazan dos diámetros perpendiculares y se unen sus extremos.</li><li><b>Octógono</b>: se trazan las bisectrices de los ángulos rectos del cuadrado.</li></ul>`,
      svg: svg("Hexágono inscrito en una circunferencia: el lado es igual al radio, marcado con arcos de compás; triángulo equilátero uniendo vértices alternos", `<circle cx="90" cy="90" r="64" fill="none" stroke="var(--muted)" stroke-width="2"/><path d="${poli(6, 90, 90, 64, 0)}" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2.5"/><path d="${poli(3, 90, 90, 64, 0)}" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/>
        <path d="M90 90 L 154 90" stroke="var(--leaf)" stroke-width="2"/><circle cx="90" cy="90" r="3" fill="var(--ink)"/>
        ${t(122, 84, "r", { c: "var(--leaf)", s: 12 })}${t(206, 60, "lado = radio", { c: "var(--pen)", s: 11 })}${t(206, 80, "6 veces", { c: "var(--pen)", s: 11 })}${t(206, 120, "vértices", { c: "var(--red)", s: 11 })}${t(206, 136, "alternos →", { c: "var(--red)", s: 11 })}${t(206, 152, "triángulo", { c: "var(--red)", s: 11 })}`),
      video: { id: "oGydboC9LDI", titulo: "Hexágono inscrito en una circunferencia", canal: "PDD Profesor de Dibujo", vistas: 1448779, megusta: 0 },
    },
    {
      html: `<h3>El pentágono y el método general</h3><p>El <b>pentágono</b> regular inscrito tiene una construcción exacta: se trazan dos diámetros perpendiculares, se halla el punto medio M de un radio horizontal y, con centro en M y radio hasta el extremo superior del diámetro vertical, se traza un arco que corta el diámetro horizontal en N. La distancia del extremo superior a N es el <mark>lado del pentágono</mark>. Uniendo vértices alternos se obtiene la <b>estrella de cinco puntas</b>.</p><p>Para cualquier número de lados existe un <b>método general</b> aproximado: se divide el diámetro en tantas partes como lados (con Tales) y se usa un arco auxiliar. Con el transportador también se puede repartir el ángulo central (72° para el pentágono, 51,4° para el heptágono).</p>`,
      video: { id: "OwsPSXQZNr4", titulo: "Pentágono regular inscrito en una circunferencia", canal: "PDD Profesor de Dibujo", vistas: 3216735, megusta: 0 },
    },
    {
      html: `<h3>Polígonos estrellados</h3><p>Al unir los vértices de un polígono regular <b>saltando</b> uno o varios, se obtienen <b>polígonos estrellados</b>. Se nombran por cuántos vértices hay y cada cuántos se une: la estrella de cinco puntas es el pentágono estrellado 5/2 (se une cada 2 vértices).</p><p>No todos los saltos dan estrella: en el hexágono, uniendo cada 2 salen dos triángulos superpuestos (la estrella de seis puntas no es un trazo continuo). En el octógono, el salto 8/3 da una estrella continua. Los polígonos estrellados aparecen en <mark>rosetones, banderas y mosaicos</mark>, especialmente en el arte islámico.</p>`,
      svg: svg("Pentágono estrellado de cinco puntas y octógono estrellado de ocho puntas", `${(() => { const pts = [...Array(5)].map((_, i) => { const a = ((-90 + i * 144) * Math.PI) / 180; return `${(70 + 55 * Math.cos(a)).toFixed(1)} ${(85 + 55 * Math.sin(a)).toFixed(1)}`; }); return `<path d="M${pts.join(" L ")} Z" fill="var(--hl)" stroke="var(--hl-ink)" stroke-width="2.5"/>`; })()}
        ${(() => { const pts = [...Array(8)].map((_, i) => { const a = ((-90 + i * 135) * Math.PI) / 180; return `${(190 + 55 * Math.cos(a)).toFixed(1)} ${(85 + 55 * Math.sin(a)).toFixed(1)}`; }); return `<path d="M${pts.join(" L ")} Z" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>`; })()}
        ${t(70, 164, "estrella 5/2", { c: "var(--hl-ink)", s: 12 })}${t(190, 164, "estrella 8/3", { c: "var(--pen)", s: 12 })}`),
    },
    {
      html: `<h3>Módulos y redes modulares</h3><p>Un <b>módulo</b> es una forma que se repite para construir una composición. Puede ser una figura simple o un dibujo complejo. Si el módulo se descompone en partes más pequeñas iguales, estas se llaman <b>submódulos</b>.</p><p>Para organizar la repetición se usa una <b>red modular</b>: una cuadrícula de líneas que sirve de estructura. Las redes básicas son:</p><ul><li><b>Cuadrada</b>: cuadrados iguales (como el papel cuadriculado).</li><li><b>Triangular</b>: triángulos equiláteros.</li><li><b>Hexagonal</b>: hexágonos regulares (como el panal).</li></ul><p>A partir de ellas se crean redes <b>compuestas</b> (superponiendo dos) o <b>deformadas</b> (curvando las líneas), que dan efectos de volumen o movimiento.</p>`,
    },
    {
      html: `<h3>Movimientos del módulo</h3><p>Sobre la red, el módulo se repite aplicando movimientos que cambian el resultado:</p>${tabla(["Movimiento", "Efecto"], [["<b>Traslación</b>", "el módulo se repite igual, desplazado"], ["<b>Giro</b>", "el módulo rota 90°, 180°… alrededor de un punto"], ["<b>Simetría</b>", "el módulo se refleja como en un espejo"], ["<b>Cambio de color</b>", "se alternan colores para crear ritmos"], ["<b>Cambio de tamaño</b>", "el módulo crece o decrece (ritmo creciente)"]])}<p>Con un solo módulo cuadrado con una diagonal pintada (el <mark>módulo de Truchet</mark>) y giros de 90° se obtienen decenas de diseños distintos.</p>`,
      svg: svg("Composición modular con un módulo cuadrado dividido en dos triángulos, girado de distintas formas sobre una red cuadrada", `${[...Array(24)].map((_, i) => { const c = i % 6, f = Math.floor(i / 6), x = 22 + c * 36, y = 18 + f * 36, g = [0, 90, 180, 270][(c * 2 + f * 3 + (c * f) % 3) % 4]; return `<g transform="rotate(${g} ${x + 18} ${y + 18})"><rect x="${x}" y="${y}" width="36" height="36" fill="var(--card)" stroke="var(--line)" stroke-width="1"/><path d="M${x} ${y} L ${x + 36} ${y} L ${x} ${y + 36} Z" fill="${(c + f) % 2 ? "var(--pen)" : "var(--red)"}" fill-opacity=".8"/></g>`; }).join("")}
        ${t(130, 174, "un módulo + giros = composición", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Mosaicos y teselaciones</h3><p>Un <b>mosaico</b> o teselación es una composición modular que cubre el plano <mark>sin huecos ni superposiciones</mark>. Solo tres polígonos regulares lo hacen por sí solos: el triángulo equilátero, el cuadrado y el hexágono, porque sus ángulos dividen exactamente los 360° de cada vértice.</p><p>Combinando varios polígonos regulares se obtienen <b>mosaicos semirregulares</b> (octógonos y cuadrados, hexágonos y triángulos). Y deformando un polígono que tesela (cortando un trozo de un lado y pegándolo en el opuesto) se crean teselas con forma de animales, como hizo <b>M. C. Escher</b> tras visitar la <b>Alhambra</b>, cuyos alicatados son una enciclopedia de mosaicos.</p>`,
    },
    {
      html: `<h3>Formas modulares en el diseño y la arquitectura</h3><p>La modularidad está en todas partes:</p><ul><li><b>Arquitectura</b>: ladrillos, baldosas y fachadas prefabricadas; la arquitectura modular construye viviendas con piezas repetidas.</li><li><b>Diseño textil</b>: estampados que se repiten (<i>pattern design</i>), cuadros escoceses, pata de gallo.</li><li><b>Diseño gráfico</b>: retículas para maquetar páginas web y revistas.</li><li><b>Juguetes y mobiliario</b>: bloques de construcción, estanterías modulares.</li><li><b>Naturaleza</b>: panales, escamas, piñas o cristales de nieve.</li></ul><p>La ventaja de lo modular es que con pocas piezas se consiguen infinitas combinaciones, se ahorra material y se facilita la producción.</p>`,
    },
  ],
  figura: {
    titulo: "Polígonos y módulos en resumen",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Polígonos regulares inscritos: hexágono lado igual al radio; estrellados uniendo vértices saltados; módulo y red modular; mosaicos sin huecos con triángulos, cuadrados o hexágonos">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Inscritos", "hexágono: lado = radio · ángulo central 360° / n", "var(--pen)"], ["Estrellados", "unir vértices saltando: 5/2, 8/3…", "var(--hl-ink)"], ["Módulo + red", "repetición con traslación, giro, simetría", "var(--leaf)"], ["Mosaicos", "sin huecos: triángulo, cuadrado, hexágono", "var(--red)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="200" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "9t0BymZifc4", titulo: "Redes modulares I: trazado", canal: "Carmen López Rey Artist", vistas: 45636, megusta: 0, busqueda: "redes modulares diseño" },
  quiz: mezcla([
    { q: "Un polígono de 9 lados se llama…", o: ["eneágono", "nonágono", "decágono"], a: 0, e: "También se acepta nonágono, pero el término clásico es eneágono." },
    { q: "Un triángulo con dos lados iguales es…", o: ["equilátero", "isósceles", "escaleno"], a: 1, e: "Dos lados iguales." },
    { q: "En un hexágono regular inscrito, el lado es igual…", o: ["al diámetro", "al radio", "a la apotema"], a: 1, e: "Se lleva el radio 6 veces." },
    { q: "El ángulo central de un pentágono regular mide…", o: ["72°", "60°", "108°"], a: 0, e: "360° / 5." },
    { q: "La apotema va del centro…", o: ["a un vértice", "al punto medio de un lado", "a otro vértice"], a: 1, e: "Perpendicular al lado." },
    { q: "La estrella de cinco puntas se obtiene uniendo los vértices del pentágono…", o: ["consecutivos", "de 2 en 2", "de 3 en 3 en el hexágono"], a: 1, e: "Pentágono estrellado 5/2." },
    { q: "Una forma que se repite en una composición es un…", o: ["módulo", "vector", "boceto"], a: 0, e: "Base de la composición modular." },
    { q: "¿Qué polígono regular no tesela el plano solo?", o: ["Hexágono", "Octógono", "Cuadrado"], a: 1, e: "135° no divide a 360°." },
    { q: "El artista famoso por sus teselas de animales es…", o: ["Escher", "Mondrian", "Dalí"], a: 0, e: "Inspirado por la Alhambra." },
    { q: "La estructura de líneas que organiza la repetición es…", o: ["la red modular", "el submódulo", "el boceto"], a: 0, e: "Cuadrada, triangular o hexagonal." },
  ]),
  examen: mezcla([
    { q: "¿Se puede construir un triángulo de lados 3, 4 y 9 cm?", o: ["No", "Sí", "Solo si es rectángulo"], a: 0, e: "9 > 3 + 4." },
    { q: "Uniendo vértices alternos de un hexágono inscrito se obtiene…", o: ["un triángulo equilátero", "un cuadrado", "un pentágono"], a: 0, e: "Vértices 1, 3 y 5." },
    { q: "Octógonos y cuadrados forman un mosaico…", o: ["semirregular", "regular", "imposible"], a: 0, e: "135 + 135 + 90 = 360." },
  ]),
  feynman: ["Diferencia entre polígono regular e irregular", "Cómo se construye un hexágono inscrito y por qué funciona", "Qué es un módulo y qué es una red modular", "Por qué solo tres polígonos regulares forman mosaicos solos"],
  mapa: mapa("POLÍGONOS Y MÓDULOS", "var(--eso)", [
    ["Polígonos", "lados · regulares · estrellados", "var(--pen)"],
    ["Inscritos", "radio · apotema · compás", "var(--leaf)"],
    ["Módulo", "red · movimientos", "var(--red)"],
    ["Mosaicos", "teselas · Alhambra · Escher", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Polígono regular", "Tiene todos los lados y ángulos iguales."],
    ["Polígono inscrito", "Sus vértices están sobre una circunferencia."],
    ["Apotema", "Segmento del centro al punto medio de un lado."],
    ["Lado del hexágono inscrito", "Igual al radio de la circunferencia."],
    ["Polígono estrellado", "Se obtiene uniendo vértices de forma salteada."],
    ["Módulo", "Forma que se repite en una composición."],
    ["Red modular", "Estructura de líneas (cuadrada, triangular, hexagonal) que organiza la repetición."],
    ["Mosaicos regulares", "Solo con triángulos equiláteros, cuadrados o hexágonos."],
  ],
  familias: ["Buscad en casa o en la calle baldosas, tejidos y fachadas modulares y fotografiad los módulos.", "Construid juntos un hexágono con compás y convertidlo en una estrella.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Geometría plana y diseño: polígonos, construcción de polígonos regulares, polígonos estrellados, módulos, redes modulares y mosaicos (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Crear una tesela al estilo Escher a partir de un cuadrado o un hexágono.", "Proyecto colectivo: mural modular con un módulo por alumno.", "Análisis de alicatados de la Alhambra con fotografías."],
  },
  fuentes: [RD, { t: "Patronato de la Alhambra y Generalife", url: "https://www.alhambra-patronato.es/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Construcciones paso a paso",
  ejemplos: [
    { enunciado: "Construye un hexágono y un triángulo equilátero inscritos en una circunferencia de 4 cm de radio.",
      pasos: ["Traza la circunferencia y un diámetro.", "Desde un extremo del diámetro, con el mismo radio (4 cm), marca arcos sucesivos sobre la circunferencia: obtienes 6 puntos.", "Une los 6 puntos consecutivos: hexágono.", "Une los puntos 1, 3 y 5: triángulo equilátero."],
      resultado: "Hexágono de lado 4 cm y triángulo equilátero inscritos." },
    { enunciado: "Construye un octógono regular inscrito.",
      pasos: ["Traza dos diámetros perpendiculares: obtienes 4 puntos (cuadrado).", "Traza las bisectrices de los cuatro ángulos rectos.", "Cortan la circunferencia en 4 puntos más.", "Une los 8 puntos consecutivos."],
      resultado: "Octógono regular inscrito." },
    { enunciado: "Diseña una composición modular con un módulo de Truchet.",
      pasos: ["Dibuja una red cuadrada de 6 × 6.", "Diseña el módulo: un cuadrado dividido por la diagonal con una mitad coloreada.", "Colócalo en cada celda girándolo 0°, 90°, 180° o 270° siguiendo un patrón.", "Prueba a alternar dos colores para crear ritmo."],
      resultado: "Una composición con formas de rombos, zigzags o flechas según los giros." },
  ],
  errores: [
    "Cambiar la abertura del compás al llevar el radio sobre la circunferencia del hexágono.",
    "Confundir radio y apotema de un polígono regular.",
    "Pensar que cualquier polígono regular tesela el plano.",
    "Dejar huecos o solapes al repetir un módulo por no usar una red.",
    "Trazar el polígono estrellado uniendo vértices consecutivos.",
  ],
  ejercicios: [
    { q: "Clasifica por sus lados y por sus ángulos un triángulo de lados 3, 4 y 5 cm.", sol: "Escaleno (los tres lados distintos) y rectángulo, porque 3² + 4² = 5²." },
    { q: "Construye con compás un triángulo de lados 6, 5 y 4 cm.", sol: "Respuesta gráfica: se traza el lado de 6 cm y desde sus extremos arcos de 5 y 4 cm; el corte es el tercer vértice." },
    { q: "Calcula el ángulo central de un hexágono, un octógono y un decágono regulares.", sol: "60°, 45° y 36°." },
    { q: "Construye un cuadrado inscrito en una circunferencia de 3 cm de radio.", sol: "Dos diámetros perpendiculares y se unen sus cuatro extremos." },
    { q: "Dibuja un pentágono estrellado a partir de un pentágono regular.", sol: "Se unen los vértices de 2 en 2: 1-3-5-2-4-1." },
    { q: "¿Por qué el hexágono 6/2 no es un polígono estrellado de trazo continuo?", sol: "Porque al unir de 2 en 2 se vuelve al punto de partida tras tres vértices: salen dos triángulos separados." },
    { q: "Explica la diferencia entre módulo y submódulo.", sol: "El módulo es la forma que se repite; los submódulos son las partes iguales en que se puede dividir el módulo." },
    { q: "¿Qué tres redes modulares básicas existen?", sol: "Cuadrada, triangular y hexagonal." },
    { q: "Comprueba con los ángulos si triángulos y hexágonos juntos pueden formar un mosaico.", sol: "Sí: por ejemplo, en cada vértice 2 triángulos (60 + 60) y 2 hexágonos (120 + 120) suman 360°." },
    { q: "Diseña un módulo propio y repítelo sobre una red con traslación, giro y simetría. Compara los tres resultados.", sol: "Respuesta abierta. Se valora la precisión y la explicación de cómo cambia el ritmo con cada movimiento." },
  ],
};
