// Matemáticas 6º de Primaria: cuerpos geométricos y volumen. Dibujos propios en SVG.
const P = require("./_pri6a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Prisma rectangular (ortoedro) en perspectiva: frente w × h, fondo d.
const caja = (x, y, w, h, d, c = AZ, op = 0.2) => `<path d="M${x} ${y} h ${w} v ${h} h ${-w} Z" fill="${c}" fill-opacity="${op}" stroke="${c}" stroke-width="2"/><path d="M${x} ${y} l ${d} ${-d * 0.6} h ${w} l ${-d} ${d * 0.6} Z" fill="${c}" fill-opacity="${op * 0.6}" stroke="${c}" stroke-width="2"/><path d="M${x + w} ${y} l ${d} ${-d * 0.6} v ${h} l ${-d} ${d * 0.6} Z" fill="${c}" fill-opacity="${op * 1.4}" stroke="${c}" stroke-width="2"/>`;
// Pirámide de base cuadrada.
const piramide = (x, y, w, d, h, c = RO) => `<path d="M${x} ${y} h ${w} l ${d} ${-d * 0.6} M${x} ${y} l ${d} ${-d * 0.6} h ${w}" fill="none" stroke="${c}" stroke-width="1.6" stroke-dasharray="4 3"/><path d="M${x} ${y} h ${w} l ${d} ${-d * 0.6} L ${x + w / 2 + d / 2} ${y - h} Z M${x + w} ${y} L ${x + w / 2 + d / 2} ${y - h} M${x} ${y} L ${x + w / 2 + d / 2} ${y - h}" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="2"/><path d="M${x + d} ${y - d * 0.6} L ${x + w / 2 + d / 2} ${y - h}" stroke="${c}" stroke-width="1.4" stroke-dasharray="4 3"/>`;
// Cilindro, cono y esfera.
const cilindro = (cx, y, rx, h, c = VE) => `<path d="M${cx - rx} ${y} V ${y + h} A ${rx} ${rx * 0.35} 0 0 0 ${cx + rx} ${y + h} V ${y}" fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="2"/><ellipse cx="${cx}" cy="${y}" rx="${rx}" ry="${rx * 0.35}" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/>`;
const cono = (cx, y, rx, h, c = SO) => `<path d="M${cx - rx} ${y} L ${cx} ${y - h} L ${cx + rx} ${y} A ${rx} ${rx * 0.35} 0 0 1 ${cx - rx} ${y}" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="2"/><path d="M${cx - rx} ${y} A ${rx} ${rx * 0.35} 0 0 1 ${cx + rx} ${y}" fill="none" stroke="${c}" stroke-width="1.4" stroke-dasharray="4 3"/>`;
const esfera = (cx, cy, r, c = MO) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="2"/><ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 0.3}" fill="none" stroke="${c}" stroke-width="1.3" stroke-dasharray="4 3"/>`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Cuerpos geométricos y volumen",
  minutos: 50,
  objetivos: ["Distinguir poliedros y cuerpos redondos y nombrar sus elementos", "Clasificar prismas y pirámides y reconocer los poliedros regulares", "Comprender qué es el volumen y conocer sus unidades", "Calcular el volumen del cubo y del ortoedro y relacionarlo con la capacidad"],
  claves: ["poliedro", "cara", "arista", "vértice", "prisma", "pirámide", "cuerpo redondo", "cilindro", "cono", "esfera", "volumen", "centímetro cúbico"],
  pregunta: ["Un cartón de leche mide 6 cm × 9 cm × 19 cm. ¿Cabe de verdad 1 litro dentro?", "El volumen del cartón es 6 × 9 × 19 = <b>1 026 cm³</b>. Como 1 litro son 1 000 cm³, <mark>sí cabe un litro</mark>, y queda un poquito de espacio para que no se derrame al abrirlo."],
  bloques: [
    ["Figuras planas y cuerpos geométricos", `<p>Las figuras planas (cuadrados, círculos…) solo tienen dos dimensiones: largo y ancho. Los <b>cuerpos geométricos</b> tienen <mark>tres dimensiones</mark>: largo, ancho y alto. Ocupan un lugar en el espacio.</p><p>Se dividen en dos grandes familias:</p><ul><li><b>Poliedros</b>: todas sus caras son polígonos planos. Por ejemplo, un dado o una pirámide.</li><li><b>Cuerpos redondos</b>: tienen alguna superficie curva. Por ejemplo, una lata, un cucurucho o una pelota.</li></ul><p>Truco: si el cuerpo puede <b>rodar</b>, seguramente es un cuerpo redondo.</p>`,
      svg("Dos familias de cuerpos geométricos: poliedros, como el cubo y la pirámide, y cuerpos redondos, como el cilindro y la esfera", `${caja(22, 70, 44, 44, 20, AZ)}${piramide(84, 114, 40, 18, 66, RO)}${t(76, 150, "poliedros", { s: 12, c: AZ })}${cilindro(174, 60, 22, 52, VE)}${esfera(228, 90, 22, MO)}${t(200, 150, "redondos", { s: 12, c: VE })}<path d="M140 30 V 160" stroke="var(--line)" stroke-width="2"/>`)],
    ["Elementos de un poliedro", `<p>Todo poliedro tiene tres elementos:</p><ul><li><b>Caras</b>: los polígonos que lo limitan.</li><li><b>Aristas</b>: los segmentos donde se juntan dos caras.</li><li><b>Vértices</b>: los puntos donde se juntan varias aristas.</li></ul><p>Un cubo tiene 6 caras, 12 aristas y 8 vértices. Hay una fórmula curiosa, descubierta por el matemático <b>Euler</b>, que se cumple en los poliedros sin agujeros:</p><p style="text-align:center"><b>caras + vértices = aristas + 2</b></p><p>En el cubo: 6 + 8 = 12 + 2. ¡Compruébalo con una pirámide!</p>`,
      svg("Elementos de un cubo: cara, arista y vértice; seis caras, doce aristas y ocho vértices", `${caja(40, 64, 80, 80, 36, AZ, 0.15)}<path d="M40 144 H 120" stroke="${RO}" stroke-width="4"/><circle cx="156" cy="42.4" r="5" fill="${VE}"/>${t(80, 108, "cara", { s: 12, c: AZ })}${t(80, 164, "arista", { s: 12, c: RO })}${t(176, 36, "vértice", { s: 12, c: VE, a: "start" })}${t(206, 100, "6 caras", { s: 11 })}${t(206, 118, "12 aristas", { s: 11 })}${t(206, 136, "8 vértices", { s: 11 })}`)],
    ["Prismas", `<p>Un <b>prisma</b> es un poliedro con <mark>dos bases iguales y paralelas</mark> (polígonos) y caras laterales que son paralelogramos (normalmente rectángulos).</p><p>El nombre depende del polígono de las bases: prisma <b>triangular</b>, <b>cuadrangular</b>, <b>pentagonal</b>, <b>hexagonal</b>…</p><p>Un caso muy común es el <b>ortoedro</b>, cuyas seis caras son rectángulos: una caja de zapatos, un ladrillo o un libro. Y si las seis caras son cuadrados iguales, es un <b>cubo</b>.</p>`,
      svg("Prismas: triangular, ortoedro y cubo", `<path d="M20 120 L 70 120 L 45 80 Z M20 120 l 24 -24 M70 120 l 24 -24 M45 80 l 24 -24 M44 96 L 94 96 L 69 56 Z" fill="${SO}" fill-opacity=".15" stroke="${SO}" stroke-width="2"/>${t(56, 150, "triangular", { s: 11, c: SO })}${caja(110, 76, 54, 44, 18, AZ)}${t(146, 150, "ortoedro", { s: 11, c: AZ })}${caja(196, 82, 38, 38, 16, VE)}${t(224, 150, "cubo", { s: 11, c: VE })}`),
      P.V("cueB")],
    ["Pirámides", `<p>Una <b>pirámide</b> es un poliedro con <mark>una sola base</mark> (un polígono) y caras laterales que son <b>triángulos</b> que se juntan en un punto llamado <b>vértice</b> o <b>cúspide</b>.</p><p>También se nombran por su base: pirámide <b>triangular</b>, <b>cuadrangular</b>, <b>pentagonal</b>…</p><p>Las famosas pirámides de Egipto son pirámides cuadrangulares. La de Keops mide unos 140 metros de altura y se construyó hace más de 4 500 años.</p><p>Diferencia clave: el prisma tiene <b>dos</b> bases; la pirámide, <b>una</b>.</p>`,
      svg("Pirámide cuadrangular con su base, sus caras triangulares y la cúspide", `${piramide(50, 140, 100, 40, 120, RO)}<circle cx="120" cy="20" r="4.5" fill="var(--ink)"/>${t(140, 26, "cúspide", { s: 11, a: "start" })}${t(100, 160, "base: cuadrado", { s: 11, c: RO })}${t(222, 100, "caras:", { s: 11 })}${t(222, 116, "triángulos", { s: 11 })}`)],
    ["Poliedros regulares", `<p>Un poliedro es <b>regular</b> cuando todas sus caras son <mark>polígonos regulares iguales</mark> y en cada vértice se juntan el mismo número de caras.</p><p>Solo existen <b>cinco</b>, llamados sólidos platónicos:</p><ul><li><b>Tetraedro</b>: 4 triángulos equiláteros.</li><li><b>Cubo</b> (hexaedro): 6 cuadrados.</li><li><b>Octaedro</b>: 8 triángulos equiláteros.</li><li><b>Dodecaedro</b>: 12 pentágonos.</li><li><b>Icosaedro</b>: 20 triángulos equiláteros.</li></ul><p>Los jugadores de rol usan dados con todas estas formas: el de 20 caras es un icosaedro.</p>`,
      P.filas("Los cinco poliedros regulares y sus caras", [["Tetraedro", "4 triángulos", RO], ["Cubo", "6 cuadrados", AZ], ["Octaedro", "8 triángulos", VE], ["Dodecaedro", "12 pentágonos", SO], ["Icosaedro", "20 triángulos", MO]])],
    ["Cuerpos redondos", `<ul><li><b>Cilindro</b>: dos bases que son círculos iguales y una superficie lateral curva. Si la desenrollas, es un rectángulo. Ejemplos: una lata, un rollo de papel.</li><li><b>Cono</b>: una base circular y una superficie curva que acaba en un punto (vértice). Ejemplos: un cucurucho, un cono de tráfico.</li><li><b>Esfera</b>: todos sus puntos están a la misma distancia del centro. No tiene bases ni vértices. Ejemplos: una canica, un balón.</li></ul><p>Los cuerpos redondos se llaman también <b>cuerpos de revolución</b>, porque se obtienen al hacer girar una figura plana: un rectángulo que gira forma un cilindro.</p>`,
      svg("Cuerpos redondos: cilindro, cono y esfera", `${cilindro(46, 50, 30, 70, VE)}${t(46, 160, "cilindro", { s: 12, c: VE })}${cono(130, 126, 32, 86, SO)}${t(130, 160, "cono", { s: 12, c: SO })}${esfera(212, 90, 34, MO)}${t(212, 160, "esfera", { s: 12, c: MO })}`)],
    ["¿Qué es el volumen?", `<p>El <b>volumen</b> de un cuerpo es el <mark>espacio que ocupa</mark>. Para medirlo, contamos cuántos cubitos de una unidad caben dentro.</p><p>La unidad principal es el <b>metro cúbico</b> (m³): el volumen de un cubo de 1 m de arista. Para objetos pequeños usamos el <b>decímetro cúbico</b> (dm³) y el <b>centímetro cúbico</b> (cm³), del tamaño de un dado pequeño.</p><p>Entre dos unidades cúbicas seguidas hay <b>1 000</b>, porque en un cubo de 1 dm caben 10 × 10 × 10 = 1 000 cubitos de 1 cm: <b>1 dm³ = 1 000 cm³</b> y <b>1 m³ = 1 000 dm³</b>.</p>`,
      svg("Un decímetro cúbico contiene mil centímetros cúbicos: diez por diez por diez", `${caja(24, 64, 80, 80, 34, SO, 0.18)}${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => `<path d="M${24 + i * 8} 64 v 80 M24 ${64 + i * 8} h 80" stroke="${SO}" stroke-width=".7"/>`).join("")}${t(206, 80, "1 dm³", { s: 18, d: true })}${t(206, 104, "= 1 000 cm³", { s: 13, c: SO })}${t(206, 132, "10 × 10 × 10", { s: 11, c: "var(--muted)" })}`)],
    ["Volumen del cubo y del ortoedro", `<p>Para el <b>ortoedro</b> (una caja), multiplica sus tres dimensiones:</p><p style="text-align:center"><b>V = largo × ancho × alto</b></p><p>Es como contar los cubitos de una capa (largo × ancho) y multiplicar por el número de capas (alto).</p><p>Para el <b>cubo</b>, las tres dimensiones son iguales:</p><p style="text-align:center"><b>V = arista × arista × arista = arista³</b></p><p>Ejemplo: una caja de 5 cm × 4 cm × 3 cm tiene 5 × 4 × 3 = <mark>60 cm³</mark>. Un cubo de 2 m de arista tiene 2³ = 8 m³.</p>`,
      svg("Ortoedro de 5 por 4 por 3 cubitos: tres capas de veinte cubitos, sesenta en total", `${caja(30, 70, 100, 60, 32, AZ, 0.15)}${[1, 2, 3, 4].map((i) => `<path d="M${30 + i * 20} 70 v 60 M${30 + i * 20} 70 l 32 -19.2" stroke="${AZ}" stroke-width=".8"/>`).join("")}${[1, 2].map((j) => `<path d="M30 ${70 + j * 20} h 100 l 32 -19.2" fill="none" stroke="${AZ}" stroke-width=".8"/>`).join("")}${t(80, 150, "largo 5", { s: 11, c: AZ })}${t(14, 104, "3", { s: 11, c: AZ })}${t(160, 46, "ancho 4", { s: 11, c: AZ, a: "start" })}${t(212, 104, "V = 5 × 4 × 3", { s: 12, d: true })}${t(212, 126, "= 60 cubitos", { s: 12, c: RO })}`),
      P.V("cueB2")],
    ["Volumen y capacidad", `<p>El volumen y la capacidad están muy relacionados: la capacidad es el volumen <b>de lo que cabe dentro</b> de un recipiente.</p><p>La equivalencia más importante es:</p><p style="text-align:center"><mark>1 dm³ = 1 litro</mark> &nbsp;&nbsp; y &nbsp;&nbsp; <mark>1 cm³ = 1 mL</mark></p><p>Así, 1 m³ = 1 000 dm³ = 1 000 litros. Una piscina de 10 m × 5 m × 2 m tiene 100 m³, es decir, ¡100 000 litros de agua!</p><p>Por eso a veces verás jarabes o jeringuillas que miden en cm³ (o «cc»): 5 cm³ son 5 mL.</p>`,
      P.filas("Equivalencias entre volumen y capacidad: un decímetro cúbico es un litro, un centímetro cúbico es un mililitro y un metro cúbico son mil litros", [["1 dm³", "= 1 L", AZ], ["1 cm³", "= 1 mL", VE], ["1 m³", "= 1 000 L", RO]], "volumen ↔ capacidad")],
  ],
  figura: ["Cuerpos geométricos y volumen", P.columnas("Resumen: prismas, pirámides, cuerpos redondos y volumen", [["2 bases iguales", "PRISMAS", ["caras laterales:", "rectángulos"], AZ], ["1 base y cúspide", "PIRÁMIDES", ["caras laterales:", "triángulos"], RO], ["superficie curva", "REDONDOS", ["cilindro · cono", "esfera"], VE], ["l × a × h", "VOLUMEN", ["1 dm³ = 1 L", "1 m³ = 1 000 dm³"], SO]])],
  video: P.V("cueV", true),
  ejemplos: [
    ["Comprueba la fórmula de Euler en una pirámide cuadrangular.", ["Caras: 1 base + 4 triángulos = 5.", "Vértices: 4 de la base + 1 cúspide = 5.", "Aristas: 4 de la base + 4 laterales = 8.", "5 + 5 = 8 + 2 = 10."], "Se cumple: 10 = 10."],
    ["Calcula el volumen de una caja de 30 cm × 20 cm × 10 cm. ¿Cuántos litros caben?", ["V = 30 × 20 × 10 = 6 000 cm³.", "1 000 cm³ = 1 L.", "6 000 : 1 000 = 6."], "6 000 cm³ = 6 litros"],
    ["Un acuario tiene forma de cubo de 4 dm de arista. ¿Cuántos litros de agua caben?", ["V = 4 × 4 × 4 = 64 dm³.", "1 dm³ = 1 L."], "64 litros"],
  ],
  errores: [
    "Confundir figuras planas con cuerpos: un cuadrado es plano; un cubo, un cuerpo.",
    "Llamar pirámide a un prisma triangular (el prisma tiene dos bases).",
    "Contar las aristas dos veces: cada arista es compartida por dos caras.",
    "Multiplicar por 10 o por 100 en lugar de por 1 000 entre unidades cúbicas.",
    "Escribir el volumen en cm² en lugar de cm³.",
  ],
  ejercicios: [
    ["Clasifica en poliedro o cuerpo redondo: un dado, una naranja, un brik de zumo, un cucurucho.", "Poliedro, redondo (esfera), poliedro (ortoedro), redondo (cono)."],
    ["¿Cuántas caras, aristas y vértices tiene un prisma triangular?", "5 caras, 9 aristas y 6 vértices."],
    ["¿Qué diferencia hay entre un prisma pentagonal y una pirámide pentagonal?", "El prisma tiene dos bases pentagonales y caras rectangulares; la pirámide, una base y caras triangulares."],
    ["¿Qué poliedro regular tiene 8 caras? ¿Cómo son?", "El octaedro; 8 triángulos equiláteros."],
    ["Nombra un objeto con forma de cilindro y otro con forma de cono.", "Por ejemplo, una lata y un cucurucho."],
    ["Pasa a cm³: 3 dm³. Y a m³: 5 000 dm³.", "3 000 cm³ y 5 m³."],
    ["Calcula el volumen de un ortoedro de 8 × 5 × 2 m.", "80 m³."],
    ["Calcula el volumen de un cubo de 6 cm de arista.", "216 cm³."],
    ["¿Cuántos litros caben en un depósito de 2 m³?", "2 000 L."],
    ["Un cajón de 50 cm × 40 cm × 30 cm se llena de cubos de 10 cm de arista. ¿Cuántos caben?", "5 × 4 × 3 = 60 cubos."],
  ],
  quiz: [
    ["Un cuerpo con todas las caras planas es un…", ["poliedro", "cuerpo redondo", "polígono"], "Caras poligonales."],
    ["¿Cuántas caras tiene un cubo?", ["6", "8", "12"], "Seis cuadrados."],
    ["¿Cuántas aristas tiene un cubo?", ["12", "8", "6"], "Doce."],
    ["Las caras laterales de una pirámide son…", ["triángulos", "rectángulos", "círculos"], "Se juntan en la cúspide."],
    ["Un prisma tiene…", ["dos bases iguales", "una base", "ninguna base"], "Paralelas."],
    ["¿Cuántos poliedros regulares existen?", ["5", "6", "infinitos"], "Los sólidos platónicos."],
    ["Una lata de refresco tiene forma de…", ["cilindro", "cono", "prisma"], "Dos bases circulares."],
    ["1 dm³ son…", ["1 000 cm³", "100 cm³", "10 cm³"], "10 × 10 × 10."],
    ["El volumen de una caja de 2 × 3 × 4 es…", ["24", "9", "20"], "Se multiplican."],
    ["1 litro equivale a…", ["1 dm³", "1 cm³", "1 m³"], "Equivalencia clave."],
  ],
  examen: [
    ["Un cubo de 3 cm de arista tiene un volumen de…", ["27 cm³", "9 cm³", "18 cm³"], "3³."],
    ["La esfera tiene…", ["ninguna arista", "una base", "dos vértices"], "Solo superficie curva."],
    ["5 L son…", ["5 000 cm³", "500 cm³", "5 cm³"], "1 L = 1 000 cm³."],
    ["Fórmula de Euler…", ["caras + vértices = aristas + 2", "caras + aristas = vértices", "caras × 2 = aristas"], "C + V = A + 2."],
  ],
  feynman: ["Qué diferencia hay entre un poliedro y un cuerpo redondo", "Qué son las caras, aristas y vértices", "En qué se diferencian un prisma y una pirámide", "Qué es el volumen y por qué 1 dm³ son 1 000 cm³", "Cómo se calcula el volumen de una caja y qué relación tiene con los litros"],
  mapa: ["CUERPOS GEOMÉTRICOS", [["Poliedros", "caras · aristas · vértices", AZ], ["Prismas y pirámides", "2 bases · 1 base", RO], ["Redondos", "cilindro · cono · esfera", VE], ["Volumen", "l × a × h · 1 dm³ = 1 L", SO]]],
  tarjetas: [
    ["Poliedro", "Cuerpo limitado solo por caras planas (polígonos)."],
    ["Arista", "Segmento donde se unen dos caras."],
    ["Prisma", "Poliedro con dos bases iguales y paralelas."],
    ["Pirámide", "Poliedro con una base y caras triangulares que se unen en la cúspide."],
    ["Poliedros regulares", "Tetraedro, cubo, octaedro, dodecaedro e icosaedro."],
    ["Cuerpos redondos", "Cilindro, cono y esfera."],
    ["Volumen del ortoedro", "largo × ancho × alto."],
    ["1 dm³", "= 1 000 cm³ = 1 litro."],
  ],
  familias: ["Buscad en la cocina objetos con forma de prisma, cilindro, cono y esfera.", "Medid una caja de cereales y calculad su volumen en cm³.", "Llenad un recipiente de 1 L con agua y comprobad cuántos vasos de 250 mL salen.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido espacial y de la medida: poliedros (prismas, pirámides y poliedros regulares), cuerpos redondos, volumen del cubo y del ortoedro y relación entre volumen y capacidad",
  ideas: ["Construir poliedros con desarrollos planos de cartulina.", "Llenar cajas con cubitos de 1 cm³ para deducir la fórmula del volumen.", "Comprobar con agua que 1 dm³ es 1 litro usando un cubo hueco."],
});
