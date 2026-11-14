// Matemáticas 1º ESO · Rectas, ángulos y figuras planas. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, resumen, poli, linea, punto, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

// Arco de ángulo con centro (x, y), radio r, de a1 a a2 grados (y hacia arriba).
const arco = (x, y, r, a1, a2, c = "var(--sun)") => {
  const P = (a) => [(x + r * Math.cos((a * Math.PI) / 180)).toFixed(1), (y - r * Math.sin((a * Math.PI) / 180)).toFixed(1)];
  const [x1, y1] = P(a1), [x2, y2] = P(a2);
  return `<path d="M${x1} ${y1} A${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 0 ${x2} ${y2}" fill="none" stroke="${c}" stroke-width="2.2"/>`;
};
const rayo = (x, y, a, l, c = "var(--ink)") => linea(x, y, +(x + l * Math.cos((a * Math.PI) / 180)).toFixed(1), +(y - l * Math.sin((a * Math.PI) / 180)).toFixed(1), c, { w: 2.4 });

const elementos = lienzo("Elementos básicos: punto, recta, semirrecta y segmento", `
  ${punto(30, 34, "var(--red)", 5)}${tx(54, 38, "punto A", { fs: 12, a: "start", c: "var(--red)" })}
  ${linea(14, 72, 246, 72, "var(--pen)", { w: 2.4 })}<path d="M14 72 l8 -5 v10 z M246 72 l-8 -5 v10 z" fill="var(--pen)"/>${tx(200, 64, "recta r", { fs: 12, c: "var(--pen)" })}
  ${punto(40, 110, "var(--leaf)")}${linea(40, 110, 246, 110, "var(--leaf)", { w: 2.4 })}<path d="M246 110 l-8 -5 v10 z" fill="var(--leaf)"/>${tx(200, 102, "semirrecta", { fs: 12, c: "var(--leaf)" })}
  ${punto(40, 148, "var(--sun)")}${punto(180, 148, "var(--sun)")}${linea(40, 148, 180, 148, "var(--sun)", { w: 2.4 })}${tx(110, 140, "segmento AB", { fs: 12, c: "var(--sun)" })}${tx(40, 166, "A", { fs: 11 })}${tx(180, 166, "B", { fs: 11 })}`, 176);

const posiciones = cajas("Posiciones de dos rectas en el plano: paralelas, secantes y perpendiculares", [
  ["Paralelas", ["no se cortan", "r ∥ s"], "var(--pen)"], ["Secantes", ["se cortan en 1 punto"], "var(--red)"],
  ["Perpendiculares", ["secantes a 90°", "r ⊥ s"], "var(--leaf)"], ["Coincidentes", ["todos sus puntos", "comunes"], "var(--sun)"],
], "Dos rectas");

const angulo = lienzo("Partes de un ángulo: vértice y lados; se mide en grados con el transportador", `
  ${rayo(60, 140, 0, 180, "var(--pen)")}${rayo(60, 140, 50, 150, "var(--pen)")}${arco(60, 140, 40, 0, 50)}
  ${punto(60, 140, "var(--red)", 5)}${tx(60, 162, "vértice", { fs: 11.5, c: "var(--red)" })}${tx(200, 134, "lado", { fs: 11.5, c: "var(--pen)" })}${tx(150, 40, "lado", { fs: 11.5, c: "var(--pen)" })}
  ${tx(120, 112, "50°", { fs: 15, c: "var(--sun)", fam: D })}`, 176);

const tipos = lienzo("Tipos de ángulos: agudo, recto, obtuso y llano", `
  ${[[24, 40, "agudo < 90°", "var(--leaf)"], [88, 90, "recto 90°", "var(--pen)"], [146, 130, "obtuso", "var(--sun)"], [218, 180, "llano 180°", "var(--red)"]].map(([x, a, t, c]) => `${rayo(x, 92, 0, 32, c)}${rayo(x, 92, a, 32, c)}${a === 90 ? `<path d="M${x} 82 h10 v10" fill="none" stroke="${c}" stroke-width="2"/>` : arco(x, 92, 14, 0, a, c)}${tx(a === 180 ? x : x + 14, 124, t, { fs: 10.5, c, max: 56 })}`).join("")}
  ${tx(130, 158, "completo: 360° (una vuelta)", { fs: 12, c: "var(--muted)" })}`, 176);

const relaciones = comparar("Ángulos complementarios suman 90 grados y suplementarios 180 grados", [
  ["Complementarios", ["α + β = 90°", "30° y 60°"], "var(--pen)"],
  ["Suplementarios", ["α + β = 180°", "110° y 70°"], "var(--red)"],
], "Suman 90° o 180°");

const opuestos = lienzo("Dos rectas secantes forman ángulos opuestos por el vértice iguales y ángulos adyacentes suplementarios", `
  ${linea(30, 150, 230, 30, "var(--ink)", { w: 2.4 })}${linea(30, 60, 230, 120, "var(--ink)", { w: 2.4 })}
  ${arco(130, 90, 22, -16.7, 31, "var(--red)")}${arco(130, 90, 22, 163.3, 211, "var(--red)")}${arco(130, 90, 30, 31, 163.3, "var(--pen)")}
  ${tx(164, 90, "α", { fs: 14, c: "var(--red)" })}${tx(96, 98, "α", { fs: 14, c: "var(--red)" })}${tx(130, 52, "β", { fs: 14, c: "var(--pen)" })}
  ${tx(130, 170, "α + β = 180°", { fs: 13, c: "var(--muted)" })}`, 180);

const mediatriz = lienzo("Mediatriz de un segmento: recta perpendicular por su punto medio; bisectriz de un ángulo: lo divide en dos iguales", `
  ${punto(24, 70, "var(--pen)")}${punto(116, 70, "var(--pen)")}${linea(24, 70, 116, 70, "var(--pen)", { w: 2.4 })}${linea(70, 22, 70, 122, "var(--red)", { w: 2, disc: true })}<path d="M70 62 h8 v8" fill="none" stroke="var(--red)"/>
  ${tx(70, 144, "mediatriz", { fs: 12, c: "var(--red)" })}
  ${rayo(150, 122, 0, 100, "var(--leaf)")}${rayo(150, 122, 70, 100, "var(--leaf)")}${rayo(150, 122, 35, 100, "var(--sun)")}${arco(150, 122, 30, 0, 35, "var(--sun)")}${arco(150, 122, 36, 35, 70, "var(--sun)")}
  ${tx(200, 144, "bisectriz", { fs: 12, c: "var(--sun)" })}`, 160);

const triangulos = cajas("Clasificación de triángulos según sus lados y según sus ángulos", [
  ["Equilátero", ["3 lados iguales"], "var(--pen)"], ["Isósceles", ["2 lados iguales"], "var(--leaf)"], ["Escaleno", ["3 lados distintos"], "var(--sun)"],
  ["Rectángulo", ["un ángulo de 90°"], "var(--red)"], ["Acutángulo", ["3 ángulos agudos"], "var(--inf)"], ["Obtusángulo", ["un ángulo obtuso"], "var(--bac)"],
], "Triángulos");

const suma180 = lienzo("La suma de los ángulos de un triángulo es 180 grados: al juntar las tres esquinas forman un ángulo llano", `
  ${poli([[30, 140], [200, 140], [90, 40]], { c: "var(--pen)" })}${arco(30, 140, 22, 0, 59, "var(--red)")}${arco(200, 140, 22, 137.7, 180, "var(--leaf)")}${arco(90, 40, 18, 239, 317.7, "var(--sun)")}
  ${tx(62, 130, "A", { fs: 13, c: "var(--red)" })}${tx(172, 132, "B", { fs: 13, c: "var(--leaf)" })}${tx(94, 70, "C", { fs: 13, c: "var(--sun)" })}
  ${tx(130, 166, "A + B + C = 180°", { fs: 15, fam: D })}`, 180);

const rectasNot = lienzo("Rectas y puntos notables del triángulo: alturas, medianas, mediatrices y bisectrices", `
  ${poli([[30, 150], [220, 150], [100, 30]], { c: "var(--pen)", op: 0.08 })}
  ${linea(100, 30, 100, 150, "var(--red)", { disc: true })}<path d="M100 142 h8 v8" fill="none" stroke="var(--red)"/>${linea(100, 30, 125, 150, "var(--leaf)", { disc: true })}
  ${tx(76, 110, "altura", { fs: 11, c: "var(--red)" })}${tx(150, 110, "mediana", { fs: 11, c: "var(--leaf)", a: "start" })}
  ${tx(130, 172, "ortocentro · baricentro · circuncentro · incentro", { fs: 9.5, c: "var(--muted)", max: 240 })}`, 182);

const cuadrilateros = cajas("Clasificación de los cuadriláteros: paralelogramos, trapecios y trapezoides", [
  ["Cuadrado", ["4 lados =, 4 rectos"], "var(--pen)"], ["Rectángulo", ["4 ángulos rectos"], "var(--leaf)"], ["Rombo", ["4 lados iguales"], "var(--sun)"],
  ["Romboide", ["lados paralelos 2 a 2"], "var(--inf)"], ["Trapecio", ["solo 2 lados paralelos"], "var(--red)"], ["Trapezoide", ["ningún lado paralelo"], "var(--bac)"],
], "Cuadriláteros");

const poligonos = lienzo("Polígono regular: hexágono con centro, radio, apotema y ángulo central de 60 grados", `
  ${(() => { const pts = [...Array(6)].map((_, i) => [80 + 60 * Math.cos((i * Math.PI) / 3), 92 + 60 * Math.sin((i * Math.PI) / 3)].map((v) => +v.toFixed(1))); return poli(pts, { c: "var(--pen)" }); })()}
  ${punto(80, 92, "var(--ink)", 3.5)}${linea(80, 92, 140, 92, "var(--red)", { w: 2 })}${linea(80, 92, 125, 118, "var(--leaf)", { w: 2 })}
  ${tx(110, 86, "radio", { fs: 10.5, c: "var(--red)" })}${tx(98, 122, "apotema", { fs: 10.5, c: "var(--leaf)", a: "end" })}
  ${tx(196, 56, "hexágono", { fs: 13, c: "var(--pen)", max: 110 })}${tx(196, 84, "6 lados iguales", { fs: 11, max: 110 })}${tx(196, 104, "6 ángulos iguales", { fs: 11, max: 110 })}${tx(196, 132, "central: 360° : 6", { fs: 11, c: "var(--muted)", max: 110 })}${tx(196, 150, "= 60°", { fs: 13, c: "var(--red)", fam: D, max: 110 })}`, 176);

const circ = lienzo("Elementos de la circunferencia: centro, radio, diámetro, cuerda y arco", `
  <circle cx="100" cy="92" r="66" fill="var(--leaf)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2.5"/>${punto(100, 92, "var(--ink)", 3.5)}
  ${linea(34, 92, 166, 92, "var(--red)", { w: 2 })}${linea(100, 92, 147, 45, "var(--leaf)", { w: 2 })}${linea(52, 137, 140, 144, "var(--sun)", { w: 2 })}
  <path d="M100 26 A66 66 0 0 1 147 45" fill="none" stroke="var(--inf)" stroke-width="5"/>
  ${tx(70, 86, "diámetro", { fs: 10.5, c: "var(--red)" })}${tx(132, 78, "radio", { fs: 10.5, c: "var(--leaf)", a: "start" })}${tx(96, 134, "cuerda", { fs: 10.5, c: "var(--sun)" })}${tx(140, 24, "arco", { fs: 10.5, c: "var(--inf)", a: "start" })}
  ${tx(212, 100, "d = 2r", { fs: 15, fam: D, max: 80 })}`, 176);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Rectas, ángulos y figuras planas",
  minutos: 110,
  objetivos: [
    "Reconocer y nombrar puntos, rectas, semirrectas y segmentos y sus posiciones relativas",
    "Medir, clasificar y operar con ángulos y conocer sus relaciones",
    "Trazar la mediatriz de un segmento y la bisectriz de un ángulo",
    "Clasificar triángulos y cuadriláteros y aplicar la suma de sus ángulos",
    "Reconocer polígonos regulares y sus elementos",
    "Identificar los elementos de la circunferencia y del círculo",
  ],
  claves: ["recta", "segmento", "ángulo", "paralelas", "perpendiculares", "triángulo", "polígono regular", "circunferencia"],
  pregunta: {
    texto: "¿Por qué las abejas construyen sus celdas con forma de hexágono y no de círculo o de pentágono?",
    respuesta: "Porque con hexágonos regulares se puede cubrir el plano <b>sin dejar huecos</b>, y de todas las figuras que lo consiguen (triángulos, cuadrados y hexágonos regulares) es la que encierra <mark>más superficie con menos perímetro</mark>: menos cera para guardar más miel. La geometría de los <b>polígonos</b> explica muchos diseños de la naturaleza.",
  },
  lectura: {
    titulo: "Los cinco postulados de Euclides",
    html: `<p>Hace unos 2 300 años, en Alejandría, el matemático griego <b>Euclides</b> escribió <i>Los Elementos</i>, un libro en trece partes que reunía todo lo que se sabía de geometría. Fue tan importante que se usó como libro de texto durante más de 2 000 años: después de la Biblia, es probablemente el libro más copiado y estudiado de la historia.</p><p>Euclides empezó con unas pocas ideas muy simples que aceptaba sin demostrar, llamadas <b>postulados</b>. Por ejemplo: «por dos puntos pasa una única recta», «todos los ángulos rectos son iguales» o «se puede trazar una circunferencia con cualquier centro y cualquier radio». A partir de ellas, con razonamientos rigurosos, demostró cientos de propiedades: que los ángulos de un triángulo suman 180°, que hay infinitos números primos y muchísimas cosas más.</p><p>Hoy la geometría sigue presente en todas partes: en la arquitectura, en las señales de tráfico, en los mosaicos de la Alhambra, en el diseño de piezas mecánicas y en los videojuegos. En este tema conocerás los elementos básicos con los que se construye toda la geometría plana: rectas, ángulos, polígonos y circunferencias.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Punto, recta, semirrecta y segmento</h3><p>Los elementos más simples de la geometría son:</p><ul><li>El <b>punto</b>: indica una posición y no tiene tamaño. Se nombra con una letra mayúscula: A, B, P.</li><li>La <b>recta</b>: una línea sin principio ni fin, que no se curva. Se nombra con una letra minúscula (r, s) o con dos de sus puntos (recta AB). Por dos puntos pasa una única recta.</li><li>La <b>semirrecta</b>: cada una de las dos partes en que un punto divide a una recta. Tiene principio (el <b>origen</b>) pero no tiene fin, como un rayo de luz.</li><li>El <b>segmento</b>: la parte de recta comprendida entre dos puntos, sus <b>extremos</b>. Tiene principio y fin, y por tanto se puede medir: es la distancia más corta entre dos puntos.</li></ul><p>Dos segmentos son <b>iguales</b> si tienen la misma longitud. El <b>punto medio</b> de un segmento lo divide en dos partes iguales.</p>`, svg: elementos },
    { html: `<h3>1.2 Posiciones de dos rectas en el plano</h3><p>Dos rectas en un plano pueden estar en distintas posiciones:</p><ul><li><b>Paralelas</b>: no tienen ningún punto en común, por mucho que se prolonguen. Siempre están a la misma distancia, como los raíles de un tren. Se escribe r ∥ s.</li><li><b>Secantes</b>: se cortan en un único punto.</li><li><b>Perpendiculares</b>: son secantes y forman cuatro ángulos rectos (90°), como las esquinas de un folio. Se escribe r ⊥ s.</li><li><b>Coincidentes</b>: son la misma recta; tienen todos sus puntos en común.</li></ul><p>Para trazar paralelas y perpendiculares se usan la escuadra y el cartabón, deslizando uno sobre el otro. En la calle verás muchos ejemplos: las líneas de un paso de cebra son paralelas, y las calles de un barrio como el Eixample de Barcelona son paralelas y perpendiculares entre sí.</p>`, svg: posiciones },
    { html: `<h3>1.3 Los ángulos y su medida</h3><p>Un <b>ángulo</b> es la región del plano comprendida entre dos semirrectas que tienen el mismo origen. Las semirrectas son los <b>lados</b> del ángulo y su origen común es el <b>vértice</b>. Se nombra con una letra griega (α, β), con la letra del vértice (Â) o con tres letras (AÔB, con el vértice en medio).</p><p>Los ángulos se miden en <b>grados</b> (°) con el <b>transportador</b>. Una vuelta completa tiene 360°, y cada grado se divide en 60 minutos (′), y cada minuto en 60 segundos (″), como las horas. Por ejemplo, 35° 20′ 15″.</p><p>Para medir con el transportador: se coloca su centro sobre el vértice, se alinea la marca del 0 con uno de los lados y se lee dónde corta el otro lado. ¡Cuidado con las dos escalas del transportador! Fíjate en si el ángulo es mayor o menor que 90° para elegir la correcta. La medida de un ángulo no depende de lo largos que se dibujen sus lados.</p>`, svg: angulo },
    { html: `<h3>1.4 Tipos de ángulos</h3><p>Según su medida, los ángulos se clasifican en:</p>${tabla(["Tipo", "Medida", "Ejemplo"], [["Nulo", "0°", "agujas superpuestas"], ["Agudo", "entre 0° y 90°", "45°"], ["Recto", "90°", "esquina de un folio"], ["Obtuso", "entre 90° y 180°", "120°"], ["Llano", "180°", "media vuelta"], ["Completo", "360°", "una vuelta"]])}<p>Los ángulos menores de 180° se llaman convexos, y los mayores, cóncavos. En la vida diaria puedes ver ángulos en las agujas del reloj (a las 3 forman un ángulo recto), en las tijeras al abrirse o en las rampas.</p><p>Las agujas de un reloj recorren 360° en una vuelta. La aguja de los minutos avanza 6° por minuto (360 : 60), y la de las horas, 30° por hora (360 : 12). Así puedes calcular el ángulo que forman a cualquier hora.</p>`, svg: tipos },
    { html: `<h3>1.5 Relaciones entre ángulos</h3><p>Dos ángulos pueden estar relacionados por su suma:</p><ul><li><b>Complementarios</b>: suman 90°. El complementario de 30° es 60°.</li><li><b>Suplementarios</b>: suman 180°. El suplementario de 110° es 70°.</li></ul><p>Y por su posición:</p><ul><li><b>Consecutivos</b>: tienen el vértice y un lado en común.</li><li><b>Adyacentes</b>: son consecutivos y sus lados no comunes forman una recta, así que son suplementarios.</li><li><b>Opuestos por el vértice</b>: cuando dos rectas se cortan, los ángulos enfrentados son <b>iguales</b>.</li></ul><p>Cuando dos rectas se cortan forman cuatro ángulos: dos parejas de opuestos por el vértice iguales (α y α, β y β) y, además, α + β = 180°. Así, conociendo un solo ángulo, conoces los cuatro. Si uno mide 50°, los otros miden 130°, 50° y 130°.</p>`, svg: opuestos },
    { html: `<h3>1.6 Operar con ángulos</h3><p>Los ángulos se suman y se restan como las horas, minutos y segundos, porque usan el sistema <b>sexagesimal</b> (de 60 en 60).</p><ul><li><b>Sumar</b>: se suman grados con grados, minutos con minutos y segundos con segundos. Si los segundos pasan de 60, se convierten 60″ en 1′; y si los minutos pasan de 60, 60′ en 1°. 35° 40′ + 20° 35′ = 55° 75′ = <mark>56° 15′</mark>.</li><li><b>Restar</b>: si no se puede restar, se «pide prestado»: 1° = 60′. 50° 10′ − 20° 30′ = 49° 70′ − 20° 30′ = 29° 40′.</li><li><b>Multiplicar o dividir</b> por un número: 3 · (25° 30′) = 75° 90′ = 76° 30′.</li></ul><p>Estas operaciones sirven, por ejemplo, para calcular el complementario de un ángulo: 90° − 37° 25′ = 89° 60′ − 37° 25′ = 52° 35′.</p>` },
    { html: `<h3>1.7 Mediatriz y bisectriz</h3><p>Dos construcciones geométricas fundamentales son:</p><ul><li>La <b>mediatriz</b> de un segmento es la recta <b>perpendicular</b> al segmento que pasa por su <b>punto medio</b>. Todos sus puntos están a la misma distancia de los dos extremos del segmento. Se traza con compás: dos arcos del mismo radio desde cada extremo, que se cortan en dos puntos; la recta que los une es la mediatriz.</li><li>La <b>bisectriz</b> de un ángulo es la semirrecta que lo divide en <b>dos ángulos iguales</b>. Todos sus puntos están a la misma distancia de los dos lados del ángulo.</li></ul><p>La mediatriz resuelve problemas como: «¿Dónde colocar una parada de autobús para que esté a la misma distancia de dos colegios?». Respuesta: en cualquier punto de la mediatriz del segmento que los une. Y la bisectriz, problemas como dónde poner una farola a la misma distancia de dos calles que se cruzan.</p>`, svg: mediatriz, video: vb("recB") },
    { html: `<h3>2.1 Los triángulos</h3><p>Un <b>triángulo</b> es un polígono de tres lados. Tiene tres vértices, tres lados y tres ángulos. Se clasifican:</p><ul><li><b>Según sus lados</b>: <b>equilátero</b> (tres lados iguales), <b>isósceles</b> (dos lados iguales) y <b>escaleno</b> (tres lados distintos).</li><li><b>Según sus ángulos</b>: <b>acutángulo</b> (tres ángulos agudos), <b>rectángulo</b> (un ángulo recto) y <b>obtusángulo</b> (un ángulo obtuso).</li></ul><p>Las dos clasificaciones se combinan: un triángulo puede ser rectángulo e isósceles (como la mitad de un cuadrado cortado por la diagonal), pero nunca rectángulo y equilátero.</p><p>No con cualquier tres segmentos se puede construir un triángulo. La <b>desigualdad triangular</b> dice que cada lado debe ser <b>menor que la suma de los otros dos</b>. Con 3, 4 y 5 cm sí se puede (5 &lt; 3 + 4), pero con 2, 3 y 7 cm no (7 &gt; 2 + 3): los dos lados cortos no llegan a juntarse.</p>`, svg: triangulos },
    { html: `<h3>2.2 La suma de los ángulos de un triángulo</h3><p>Una de las propiedades más importantes de la geometría es que <mark>los tres ángulos de cualquier triángulo suman 180°</mark>. Puedes comprobarlo con un experimento: recorta un triángulo de papel, arranca sus tres esquinas y júntalas por los vértices: forman un ángulo llano.</p><p>Consecuencias:</p><ul><li>Si conoces dos ángulos, el tercero es 180° menos su suma: si dos ángulos miden 50° y 70°, el tercero mide 60°.</li><li>Un triángulo solo puede tener un ángulo recto u obtuso (si tuviera dos, ya sumarían 180° o más).</li><li>En un triángulo rectángulo, los dos ángulos agudos son complementarios: suman 90°.</li><li>En un triángulo equilátero, los tres ángulos miden 180° : 3 = 60°.</li><li>En un isósceles, los dos ángulos de la base son iguales.</li></ul><p>Además, en todo triángulo, al lado mayor se opone el ángulo mayor.</p>`, svg: suma180 },
    { html: `<h3>2.3 Rectas y puntos notables del triángulo</h3><p>En todo triángulo se pueden trazar cuatro tipos de rectas notables, tres de cada tipo, y las tres se cortan siempre en un mismo punto:</p>${tabla(["Rectas", "Qué son", "Punto de corte"], [["Alturas", "perpendicular desde un vértice al lado opuesto", "ortocentro"], ["Medianas", "de un vértice al punto medio del lado opuesto", "baricentro"], ["Mediatrices", "mediatriz de cada lado", "circuncentro"], ["Bisectrices", "bisectriz de cada ángulo", "incentro"]])}<p>Cada punto tiene una propiedad curiosa. El <b>baricentro</b> es el centro de gravedad: un triángulo de cartón se sostiene en equilibrio sobre la punta de un lápiz en ese punto. El <b>circuncentro</b> es el centro de la circunferencia que pasa por los tres vértices. El <b>incentro</b> es el centro de la circunferencia que toca los tres lados por dentro.</p><p>La <b>altura</b> es también la medida que usarás para calcular el área del triángulo.</p>`, svg: rectasNot },
    { html: `<h3>2.4 Los cuadriláteros</h3><p>Un <b>cuadrilátero</b> es un polígono de cuatro lados. Sus cuatro ángulos suman siempre <mark>360°</mark>, porque una diagonal lo divide en dos triángulos (2 · 180°). Se clasifican según el paralelismo de sus lados:</p><ul><li><b>Paralelogramos</b> (lados opuestos paralelos dos a dos): <b>cuadrado</b> (4 lados iguales y 4 ángulos rectos), <b>rectángulo</b> (4 ángulos rectos), <b>rombo</b> (4 lados iguales) y <b>romboide</b> (lados y ángulos iguales dos a dos).</li><li><b>Trapecios</b>: solo dos lados paralelos, llamados bases. Pueden ser rectángulos, isósceles o escalenos.</li><li><b>Trapezoides</b>: ningún lado paralelo.</li></ul><p>En los paralelogramos, las <b>diagonales</b> se cortan en su punto medio. En el rectángulo y el cuadrado, además, son iguales; en el rombo y el cuadrado, perpendiculares. Fíjate: un cuadrado es a la vez rectángulo y rombo.</p>`, svg: cuadrilateros },
    { html: `<h3>2.5 Polígonos regulares</h3><p>Un <b>polígono</b> es una figura plana limitada por segmentos (lados). Se nombra según su número de lados: triángulo (3), cuadrilátero (4), pentágono (5), hexágono (6), heptágono (7), octógono (8), eneágono (9), decágono (10)… Un polígono es <b>regular</b> si tiene todos sus lados y todos sus ángulos iguales.</p><p>Elementos de un polígono regular: el <b>centro</b> (punto que está a la misma distancia de todos los vértices), el <b>radio</b> (distancia del centro a un vértice), la <b>apotema</b> (distancia del centro al punto medio de un lado) y el <b>ángulo central</b>, que mide <mark>360° : n</mark>.</p><p>La suma de los ángulos interiores de un polígono de n lados es <b>(n − 2) · 180°</b>, porque se puede dividir en n − 2 triángulos desde un vértice. En un hexágono regular: 4 · 180° = 720°, y cada ángulo mide 720° : 6 = 120°. Por eso tres hexágonos encajan alrededor de un punto (3 · 120° = 360°), como en un panal.</p>`, svg: poligonos, video: vb("recB2") },
    { html: `<h3>2.6 La circunferencia y el círculo</h3><p>La <b>circunferencia</b> es la línea curva cerrada cuyos puntos están todos a la misma distancia de un punto interior, el <b>centro</b>. El <b>círculo</b> es la superficie que encierra la circunferencia: la circunferencia es el borde de una moneda, y el círculo, la moneda entera.</p><p>Elementos de la circunferencia:</p><ul><li><b>Radio</b> (r): segmento que une el centro con un punto de la circunferencia.</li><li><b>Cuerda</b>: segmento que une dos puntos de la circunferencia.</li><li><b>Diámetro</b> (d): la cuerda que pasa por el centro; es la mayor de todas. <mark>d = 2r</mark>.</li><li><b>Arco</b>: parte de la circunferencia entre dos puntos.</li></ul><p>Una recta puede ser <b>exterior</b> a la circunferencia (no la toca), <b>tangente</b> (la toca en un solo punto, y es perpendicular al radio en ese punto) o <b>secante</b> (la corta en dos puntos). Las ruedas que tocan el suelo son un ejemplo de tangencia.</p>`, svg: circ, video: vg("recV") },
  ],
  ejemplos: [
    { enunciado: "Calcula el complementario y el suplementario de 38°.", pasos: ["Complementario: 90° − 38°.", "Suplementario: 180° − 38°."], resultado: "52° y 142°." },
    { enunciado: "Dos rectas se cortan y uno de los ángulos mide 65°. ¿Cuánto miden los otros tres?", pasos: ["El opuesto por el vértice: 65°.", "Los adyacentes: 180° − 65° = 115°."], resultado: "65°, 115° y 115°." },
    { enunciado: "Suma 47° 35′ 50″ + 28° 40′ 25″.", pasos: ["75° 75′ 75″.", "75″ = 1′ 15″ → 75° 76′ 15″.", "76′ = 1° 16′ → 76° 16′ 15″."], resultado: "76° 16′ 15″." },
    { enunciado: "En un triángulo, dos ángulos miden 48° y 67°. ¿Cuánto mide el tercero y cómo se clasifica?", pasos: ["180° − (48° + 67°) = 65°.", "Los tres son agudos."], resultado: "65°; triángulo acutángulo (y escaleno)." },
    { enunciado: "¿Se puede construir un triángulo con lados de 4, 6 y 11 cm?", pasos: ["Desigualdad triangular: 11 < 4 + 6?", "11 > 10."], resultado: "No: los lados cortos no llegan a juntarse." },
    { enunciado: "Calcula la suma de los ángulos de un octógono y lo que mide cada ángulo si es regular.", pasos: ["(8 − 2) · 180° = 1 080°.", "1 080° : 8."], resultado: "1 080°; cada ángulo 135°." },
  ],
  errores: [
    "Confundir recta, semirrecta y segmento: solo el segmento se puede medir.",
    "Leer la escala equivocada del transportador (por ejemplo, 130° en lugar de 50°).",
    "Confundir complementarios (90°) con suplementarios (180°).",
    "Sumar ángulos en sistema decimal: 60′ forman 1°, no 100′.",
    "Pensar que un triángulo puede tener dos ángulos obtusos.",
    "Confundir circunferencia (la línea) con círculo (la superficie).",
  ],
  ejercicios: [
    { nivel: "básico", q: "Dibuja una recta, una semirrecta y un segmento y explica la diferencia.", sol: "La recta no tiene principio ni fin; la semirrecta tiene origen pero no fin; el segmento tiene dos extremos y se puede medir." },
    { nivel: "básico", q: "¿Cuántas rectas pasan por un punto? ¿Y por dos puntos?", sol: "Por un punto, infinitas. Por dos puntos, una sola." },
    { nivel: "básico", q: "Pon un ejemplo de la vida real de rectas paralelas y de perpendiculares.", sol: "Paralelas: raíles del tren, líneas de un cuaderno. Perpendiculares: bordes de una puerta, cruces de calles." },
    { nivel: "básico", q: "Clasifica los ángulos: 35°, 90°, 145°, 180°, 89°.", sol: "Agudo, recto, obtuso, llano, agudo." },
    { nivel: "básico", q: "Calcula el complementario de 25° y el suplementario de 125°.", sol: "65° y 55°." },
    { nivel: "básico", q: "Dos rectas se cortan formando un ángulo de 40°. Halla los otros tres.", sol: "40°, 140°, 140°." },
    { nivel: "básico", q: "Clasifica el triángulo de lados 5, 5 y 8 cm y el de ángulos 90°, 45° y 45°.", sol: "Isósceles. Rectángulo isósceles." },
    { nivel: "básico", q: "Dos ángulos de un triángulo miden 30° y 100°. ¿Cuánto mide el tercero?", sol: "180° − 130° = 50°." },
    { nivel: "básico", q: "¿Cuánto mide cada ángulo de un triángulo equilátero?", sol: "60°." },
    { nivel: "básico", q: "Nombra los paralelogramos y di qué tienen en común.", sol: "Cuadrado, rectángulo, rombo y romboide: lados opuestos paralelos dos a dos." },
    { nivel: "básico", q: "Si el radio de una circunferencia es 7 cm, ¿cuánto mide el diámetro?", sol: "14 cm." },
    { nivel: "básico", q: "¿Cuántos lados tiene un decágono? ¿Y un heptágono?", sol: "10 y 7." },
    { nivel: "medio", q: "Suma: 23° 45′ + 56° 30′.", sol: "79° 75′ = 80° 15′." },
    { nivel: "medio", q: "Resta: 90° − 42° 18′.", sol: "89° 60′ − 42° 18′ = 47° 42′." },
    { nivel: "medio", q: "Multiplica: 4 · (18° 25′).", sol: "72° 100′ = 73° 40′." },
    { nivel: "medio", q: "¿Qué ángulo forman las agujas del reloj a las 3:00, a las 4:00 y a las 6:00?", sol: "90°; 120°; 180°." },
    { nivel: "medio", q: "Un ángulo y su complementario se diferencian en 20°. ¿Cuánto miden?", sol: "x + (x − 20) = 90 → x = 55°. Miden 55° y 35°." },
    { nivel: "medio", q: "En un triángulo isósceles, el ángulo desigual mide 40°. ¿Cuánto miden los otros dos?", sol: "(180° − 40°) : 2 = 70° cada uno." },
    { nivel: "medio", q: "Un triángulo rectángulo tiene un ángulo agudo de 34°. ¿Cuánto mide el otro?", sol: "90° − 34° = 56°." },
    { nivel: "medio", q: "¿Con qué ternas se puede construir un triángulo? a) 3, 5, 7; b) 2, 4, 6; c) 6, 6, 11.", sol: "a) Sí (7 < 8). b) No (6 = 6). c) Sí (11 < 12)." },
    { nivel: "medio", q: "Tres ángulos de un cuadrilátero miden 80°, 95° y 110°. ¿Cuánto mide el cuarto?", sol: "360° − 285° = 75°." },
    { nivel: "medio", q: "Calcula el ángulo central y cada ángulo interior de un pentágono regular.", sol: "Central 360° : 5 = 72°. Suma interior 540°; cada ángulo 108°." },
    { nivel: "medio", q: "Explica por qué un cuadrado es a la vez rombo y rectángulo.", sol: "Tiene los 4 lados iguales (rombo) y los 4 ángulos rectos (rectángulo)." },
    { nivel: "avanzado", q: "¿Qué ángulo forman las agujas del reloj a las 2:30?", sol: "Minutero en 180°; horario en 2,5 · 30° = 75°. Ángulo: 105°." },
    { nivel: "avanzado", q: "Los ángulos de un triángulo son x, 2x y 3x. ¿Cuánto mide cada uno? ¿Qué tipo de triángulo es?", sol: "6x = 180° → x = 30°: 30°, 60°, 90°. Rectángulo escaleno." },
    { nivel: "avanzado", q: "¿Qué polígono regular tiene ángulos interiores de 140°?", sol: "(n − 2) · 180 = 140n → 40n = 360 → n = 9: eneágono." },
    { nivel: "avanzado", q: "¿Por qué no se puede embaldosar un suelo solo con pentágonos regulares?", sol: "Cada ángulo mide 108°; alrededor de un punto 3 · 108 = 324° < 360° y 4 · 108 = 432° > 360°: no encajan sin huecos." },
    { nivel: "avanzado", q: "Dos pueblos A y B están separados por una carretera recta. ¿Dónde construir una escuela a igual distancia de ambos? ¿Hay una única opción?", sol: "En cualquier punto de la mediatriz del segmento AB: hay infinitas opciones." },
    { nivel: "avanzado", q: "Divide 100° 30′ entre 3.", sol: "100° 30′ = 99° 90′ → 33° 30′." },
    { nivel: "avanzado", q: "Encuentra el error: «un triángulo puede tener dos ángulos rectos si es muy grande».", sol: "Dos ángulos rectos ya suman 180°: el tercero mediría 0°. Ningún triángulo puede tenerlos, sea del tamaño que sea." },
  ],
  quiz: [
    { q: "Una semirrecta tiene…", o: ["dos extremos", "un origen y no tiene fin", "ni principio ni fin", "longitud medible"], a: 1, e: "Como un rayo de luz." },
    { q: "Por dos puntos pasan…", o: ["infinitas rectas", "dos rectas", "una sola recta", "ninguna"], a: 2, e: "Postulado de Euclides." },
    { q: "Dos rectas perpendiculares forman ángulos de…", o: ["45°", "90°", "180°", "60°"], a: 1, e: "Ángulos rectos." },
    { q: "Las rectas que no se cortan nunca son…", o: ["secantes", "perpendiculares", "paralelas", "oblicuas"], a: 2, e: "r ∥ s." },
    { q: "Un ángulo de 120° es…", o: ["agudo", "recto", "obtuso", "llano"], a: 2, e: "Entre 90° y 180°." },
    { q: "Una vuelta completa mide…", o: ["90°", "180°", "360°", "100°"], a: 2, e: "Ángulo completo." },
    { q: "El complementario de 70° es…", o: ["20°", "110°", "290°", "70°"], a: 0, e: "90 − 70." },
    { q: "El suplementario de 70° es…", o: ["20°", "110°", "290°", "70°"], a: 1, e: "180 − 70." },
    { q: "Los ángulos opuestos por el vértice son…", o: ["complementarios", "iguales", "suplementarios", "rectos"], a: 1, e: "Se enfrentan al cortarse dos rectas." },
    { q: "1° equivale a…", o: ["100′", "60′", "60″", "10′"], a: 1, e: "Sistema sexagesimal." },
    { q: "La recta perpendicular a un segmento por su punto medio es la…", o: ["bisectriz", "mediana", "mediatriz", "altura"], a: 2, e: "Equidista de los extremos." },
    { q: "Un triángulo con tres lados distintos es…", o: ["equilátero", "isósceles", "escaleno", "rectángulo"], a: 2, e: "Ningún lado igual." },
    { q: "Los ángulos de un triángulo suman…", o: ["90°", "180°", "270°", "360°"], a: 1, e: "Propiedad fundamental." },
    { q: "Con 2, 3 y 6 cm…", o: ["se forma un triángulo", "no se forma un triángulo", "se forma un rectángulo", "se forma un cuadrado"], a: 1, e: "6 > 2 + 3." },
    { q: "El punto de corte de las medianas es el…", o: ["ortocentro", "baricentro", "incentro", "circuncentro"], a: 1, e: "Centro de gravedad." },
    { q: "Los ángulos de un cuadrilátero suman…", o: ["180°", "360°", "540°", "720°"], a: 1, e: "Dos triángulos." },
    { q: "Un cuadrilátero con solo dos lados paralelos es un…", o: ["rombo", "trapecio", "romboide", "trapezoide"], a: 1, e: "Bases paralelas." },
    { q: "El ángulo central de un hexágono regular mide…", o: ["30°", "60°", "120°", "90°"], a: 1, e: "360 : 6." },
    { q: "El diámetro es…", o: ["la mitad del radio", "el doble del radio", "igual al radio", "la cuerda más corta"], a: 1, e: "d = 2r." },
    { q: "Una recta que toca a la circunferencia en un solo punto es…", o: ["secante", "exterior", "tangente", "un diámetro"], a: 2, e: "Tangente." },
  ],
  examen: [
    { q: "Si un ángulo mide 42°, su suplementario mide…", o: ["48°", "138°", "318°", "42°"], a: 1, e: "180 − 42." },
    { q: "35° 50′ + 14° 25′ =", o: ["49° 75′", "50° 15′", "50° 75′", "49° 15′"], a: 1, e: "75′ = 1° 15′." },
    { q: "Ángulos de 25° y 65° en un triángulo; el tercero mide…", o: ["90°", "80°", "100°", "70°"], a: 0, e: "180 − 90." },
    { q: "Un triángulo con un ángulo de 110° es…", o: ["acutángulo", "rectángulo", "obtusángulo", "equilátero"], a: 2, e: "Tiene un obtuso." },
    { q: "La suma de los ángulos de un hexágono es…", o: ["540°", "720°", "900°", "360°"], a: 1, e: "4 · 180°." },
    { q: "Un paralelogramo con 4 lados iguales y sin ángulos rectos es un…", o: ["cuadrado", "rombo", "rectángulo", "trapecio"], a: 1, e: "Rombo." },
    { q: "A las 9:00 las agujas forman…", o: ["90°", "270°", "45°", "180°"], a: 0, e: "Ángulo menor: 90°." },
    { q: "Si el diámetro mide 18 cm, el radio mide…", o: ["36 cm", "9 cm", "18 cm", "6 cm"], a: 1, e: "d : 2." },
  ],
  feynman: ["Qué diferencia hay entre recta, semirrecta y segmento", "Por qué los ángulos opuestos por el vértice son iguales", "Por qué los ángulos de un triángulo suman 180°", "Cómo se calcula la suma de los ángulos de cualquier polígono"],
  figura: {
    titulo: "Rectas, ángulos y figuras en un vistazo",
    svg: resumen("Resumen del tema de rectas, ángulos y figuras planas", [
      ["Rectas", "paralelas ∥ · secantes · perpendiculares ⊥", "var(--pen)"],
      ["Ángulos", "agudo < 90° · recto · obtuso · llano 180° · 360°", "var(--sun)"],
      ["Relaciones", "complementarios 90° · suplementarios 180° · opuestos =", "var(--leaf)"],
      ["Triángulos", "suman 180° · cada lado < suma de los otros dos", "var(--red)"],
      ["Polígonos", "suman (n − 2) · 180° · regular: central 360°/n", "var(--inf)"],
    ]),
  },
  video: vg("recV"),
  mapa: mapa("GEOMETRÍA", "var(--sun)", [
    ["Rectas", "posiciones · mediatriz", "var(--pen)"],
    ["Ángulos", "tipos · relaciones · operar", "var(--sun)"],
    ["Polígonos", "triángulos · cuadriláteros", "var(--leaf)"],
    ["Circunferencia", "radio · diámetro · tangente", "var(--red)"],
  ], 250),
  glosario: [
    ["Segmento", "Parte de recta entre dos puntos; se puede medir."],
    ["Semirrecta", "Parte de una recta con origen y sin fin."],
    ["Rectas paralelas", "Rectas que no tienen ningún punto en común."],
    ["Rectas perpendiculares", "Rectas que se cortan formando ángulos rectos."],
    ["Ángulo", "Región entre dos semirrectas con el mismo origen."],
    ["Vértice", "Punto común de los lados de un ángulo o de un polígono."],
    ["Ángulos complementarios", "Los que suman 90°."],
    ["Ángulos suplementarios", "Los que suman 180°."],
    ["Mediatriz", "Perpendicular a un segmento por su punto medio."],
    ["Bisectriz", "Semirrecta que divide un ángulo en dos iguales."],
    ["Desigualdad triangular", "Cada lado de un triángulo es menor que la suma de los otros dos."],
    ["Polígono regular", "Polígono con todos los lados y ángulos iguales."],
    ["Apotema", "Distancia del centro de un polígono regular al punto medio de un lado."],
    ["Circunferencia", "Línea cuyos puntos están a la misma distancia del centro."],
    ["Tangente", "Recta que toca la circunferencia en un solo punto."],
  ],
  situacion: {
    titulo: "Cazadores de geometría por el barrio",
    reto: "Vais a recorrer el instituto o el barrio fotografiando ejemplos de rectas, ángulos y figuras, para elaborar un catálogo geométrico del entorno.",
    pasos: [
      "Haced una lista de lo que buscáis: paralelas, perpendiculares, ángulos de cada tipo, triángulos, cuadriláteros, polígonos regulares y circunferencias.",
      "Tomad fotos (respetando la privacidad: sin personas) y anotad dónde se hizo cada una.",
      "Sobre las fotos impresas o en una app, marcad las rectas y figuras, y medid algunos ángulos con el transportador.",
      "Clasificad cada figura con el vocabulario del tema y comprobad alguna propiedad (suma de ángulos, diagonales…).",
      "Explicad por qué creéis que se usa esa forma (resistencia, estética, ahorro de material…).",
    ],
    producto: "Un catálogo o mural «La geometría de nuestro barrio» con las fotos, los trazos y las explicaciones.",
    evaluacion: ["Identifica y nombra correctamente rectas, ángulos y figuras.", "Mide ángulos con precisión y aplica sus propiedades.", "Relaciona las formas con su función en el entorno.", "Presenta el trabajo con orden y buena expresión."],
  },
  tarjetas: [
    ["Segmento", "Dos extremos; se mide"], ["r ∥ s", "Paralelas: no se cortan"], ["r ⊥ s", "Perpendiculares: 90°"],
    ["Agudo / obtuso", "< 90° / entre 90° y 180°"], ["Complementarios", "Suman 90°"], ["Suplementarios", "Suman 180°"],
    ["1°", "60′ = 3 600″"], ["Mediatriz", "⊥ por el punto medio"], ["Triángulo", "Ángulos suman 180°"],
    ["Cuadrilátero", "Ángulos suman 360°"], ["Polígono de n lados", "(n − 2) · 180°"], ["d", "2r"],
  ],
  familias: ["Buscad juntos en casa ángulos rectos, agudos y obtusos (puertas, tijeras, libros abiertos).", "Mirad la hora en un reloj de agujas y calculad el ángulo que forman.", "Recortad un triángulo de papel y comprobad que sus ángulos suman 180°.", "Fijaos en las formas de las señales de tráfico y en los mosaicos que encontréis."],
  profesores: {
    saberes: "Sentido espacial: elementos geométricos básicos, posiciones relativas de rectas, ángulos y su medida (sistema sexagesimal), mediatriz y bisectriz, clasificación y propiedades de triángulos, cuadriláteros y polígonos regulares, circunferencia y círculo (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Construcciones con regla y compás (mediatriz, bisectriz, hexágono).", "GeoGebra para comprobar la suma de ángulos y los puntos notables.", "Teselaciones con polígonos regulares: ¿cuáles encajan?", "Ruta fotográfica de geometría por el centro escolar."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): elementos geométricos", url: "https://proyectodescartes.org/" }, { t: "Wikipedia: Elementos de Euclides", url: "https://es.wikipedia.org/wiki/Elementos_de_Euclides" }],
  revisado: REV,
};
