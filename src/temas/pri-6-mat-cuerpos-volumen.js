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

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbmbbmbbma",
  objetivos: ["Comprobar la fórmula de Euler en distintos poliedros", "Reconocer y dibujar desarrollos planos de prismas y pirámides", "Calcular el volumen de prismas y cilindros", "Medir el volumen de objetos irregulares sumergiéndolos en agua"],
  lectura: { titulo: "Los cinco sólidos de Platón", html: `<p>Hace unos 2 400 años, en Atenas, el filósofo <b>Platón</b> enseñaba a sus alumnos en un jardín llamado la Academia. Dicen que en la entrada había un cartel que avisaba: «Que no entre nadie que no sepa geometría».</p><p>A Platón le fascinaban unos cuerpos muy especiales: los poliedros cuyas caras son todas polígonos regulares iguales y en cuyos vértices se juntan siempre el mismo número de caras. Solo existen <b>cinco</b>, y nadie ha podido encontrar un sexto, porque es imposible.</p><p>Platón pensaba que el mundo estaba hecho de cuatro elementos y que cada uno tenía forma de uno de estos cuerpos. El <b>fuego</b> pincha y quema, así que sería un tetraedro, con sus puntas afiladas. La <b>tierra</b> es firme y estable, como un cubo. El <b>aire</b> sería un octaedro y el <b>agua</b>, que fluye, un icosaedro, el más redondeado. Y el quinto, el dodecaedro, representaría el universo entero.</p><p>Hoy sabemos que la materia no está hecha así. Pero desde entonces estos cinco cuerpos se llaman <b>sólidos platónicos</b>, y los encontrarás en los dados de muchos juegos de mesa.</p>` },
  tras: {
    "Elementos de un poliedro": [
      ["La fórmula de Euler", `<p>En el siglo XVIII, el matemático suizo <b>Leonhard Euler</b> descubrió una relación sorprendente entre los elementos de cualquier poliedro sin agujeros. Si sumamos las <b>caras</b> y los <b>vértices</b>, obtenemos siempre las <b>aristas</b> más 2:</p><p style="text-align:center"><b>C + V = A + 2</b></p><p>Comprobémoslo:</p><ul><li><b>Cubo</b>: 6 caras, 8 vértices y 12 aristas. 6 + 8 = 14 y 12 + 2 = 14. ✔</li><li><b>Tetraedro</b>: 4 caras, 4 vértices y 6 aristas. 4 + 4 = 8 y 6 + 2 = 8. ✔</li><li><b>Pirámide cuadrangular</b>: 5 caras, 5 vértices y 8 aristas. 5 + 5 = 10 y 8 + 2 = 10. ✔</li><li><b>Prisma pentagonal</b>: 7 caras, 10 vértices y 15 aristas. 7 + 10 = 17 y 15 + 2 = 17. ✔</li></ul><p>La fórmula sirve para calcular un dato que falta. Si un poliedro tiene 8 caras y 6 vértices, sus aristas son 8 + 6 − 2 = <b>12</b>: es el octaedro.</p><p>También sirve para descubrir errores: si al contar los elementos de un poliedro la fórmula no se cumple, es que nos hemos equivocado al contar.</p>`,
        L6.filas("C + V = A + 2", [["cubo", "6 + 8 = 12 + 2", cAZ], ["tetraedro", "4 + 4 = 6 + 2", cRO], ["pirámide cuadr.", "5 + 5 = 8 + 2", cNA], ["prisma pentag.", "7 + 10 = 15 + 2", cVE]]), ["BYPw_pd-xFo", "La FÓRMULA de EULER 🎲 V - A + C = 2", "Archimedes Tube", 159501]],
    ],
    "Prismas": [
      ["Desarrollos planos", `<p>Si recortamos un poliedro por algunas de sus aristas y lo extendemos sobre la mesa, obtenemos su <b>desarrollo plano</b>: una figura de una sola pieza que, al doblarla, vuelve a formar el cuerpo.</p><ul><li>El desarrollo de un <b>prisma</b> está formado por un rectángulo grande (o varios rectángulos seguidos), que son las caras laterales, y dos polígonos iguales, que son las bases.</li><li>El desarrollo de una <b>pirámide</b> está formado por un polígono, la base, rodeado de triángulos que se juntan arriba.</li><li>El desarrollo de un <b>cilindro</b> es un rectángulo y dos círculos. El largo del rectángulo es la longitud de la circunferencia de la base.</li><li>El desarrollo de un <b>cono</b> es un sector circular y un círculo.</li></ul><p>Un mismo cuerpo puede tener varios desarrollos diferentes. El cubo, por ejemplo, tiene <b>11 desarrollos</b> distintos. Uno de los más conocidos tiene forma de cruz: cuatro cuadrados en fila y uno a cada lado.</p><p>Pero no todas las combinaciones de seis cuadrados forman un cubo: si al doblar dos caras quedan una encima de la otra, el desarrollo no sirve. Los envases de cartón, como las cajas de cereales o los tetrabriks, se fabrican a partir de desarrollos planos con pestañas para pegarlos.</p>`,
        H6.dos("Desarrollos", ["Prisma", ["rectángulos laterales", "dos bases iguales", "caja de cereales"], cAZ], ["Cilindro", ["un rectángulo", "dos círculos", "lata de refresco"], cNA])],
    ],
    "Volumen del cubo y del ortoedro": [
      ["Volumen del prisma y del cilindro", `<p>La fórmula del ortoedro (largo × ancho × alto) se puede ver de otra manera: largo × ancho es el <b>área de la base</b>, y después se multiplica por la <b>altura</b>. Esta idea sirve para <b>cualquier prisma</b> y también para el <b>cilindro</b>:</p><p style="text-align:center"><b>Volumen = área de la base × altura</b></p><ul><li><b>Prisma triangular</b>: si la base es un triángulo de 6 cm de base y 4 cm de altura, su área es 6 × 4 : 2 = 12 cm². Si el prisma mide 10 cm de alto, su volumen es 12 × 10 = <b>120 cm³</b>.</li><li><b>Cilindro</b>: la base es un círculo, de área π × r². Una lata de radio 5 cm y altura 10 cm tiene un volumen de 3,14 × 25 × 10 = <b>785 cm³</b>, es decir, 0,785 litros.</li></ul><p>¿Y las pirámides y los conos? Si una pirámide tiene la misma base y la misma altura que un prisma, cabe exactamente <b>tres veces</b> dentro de él. Por eso su volumen es la tercera parte: área de la base × altura : 3. Se puede comprobar llenando de arena o de agua una pirámide hueca y vaciándola en el prisma.</p>`,
        L6.filas("Base × altura", [["ortoedro", "largo × ancho × alto", cAZ], ["prisma triang.", "12 × 10 = 120 cm³", cNA], ["cilindro", "3,14 × 25 × 10 = 785 cm³", cVE], ["pirámide", "base × altura : 3", cRO]]), ["KF_S79SXOpo", "Volumen del Cilindro | conociendo área de la base o radio de la base", "Matemáticas profe Alex", 1490481]],
    ],
  },
  final: [
    ["Arquímedes y el volumen de lo irregular", `<p>¿Cómo se mide el volumen de una piedra, de una llave o de una corona, que no tienen forma de cubo ni de prisma? El sabio griego <b>Arquímedes</b>, que vivió en Siracusa hace más de 2 200 años, encontró la respuesta.</p><p>Según la leyenda, el rey Hierón le pidió averiguar si su corona era de oro puro o si el orfebre había mezclado plata, sin estropearla. Al meterse en la bañera, Arquímedes vio que el agua subía. Comprendió que un objeto sumergido <b>desplaza un volumen de agua igual a su propio volumen</b>, y salió gritando «¡Eureka!», que significa «¡Lo encontré!».</p><p>Puedes hacerlo tú con una <b>probeta</b> graduada:</p><ol><li>Echa agua y anota el nivel: por ejemplo, <b>200 mL</b>.</li><li>Sumerge la piedra por completo y anota el nuevo nivel: <b>250 mL</b>.</li><li>Resta: 250 − 200 = 50 mL. Como 1 mL = 1 cm³, la piedra tiene un volumen de <b>50 cm³</b>.</li></ol><p>La plata ocupa más espacio que la misma masa de oro. Por eso, si la corona tenía plata, desplazaría más agua que un lingote de oro puro que pesara lo mismo.</p>`,
      H6.flujo("Medir con agua", ["Nivel|inicial", "Sumergir", "Nivel|final", "Restar"], cAZ), ["ijj58xD5fDI", "Cómo un baño dio lugar al principio de Arquímedes - Mark Salata", "TED-Ed", 1899648]],
    ["Cuerpos geométricos en la arquitectura", `<p>Los arquitectos usan los cuerpos geométricos desde hace miles de años:</p><ul><li>La <b>Gran Pirámide de Guiza</b>, en Egipto, es una pirámide cuadrangular. Su base medía unos 230 m de lado y su altura original, unos 146 m. Fue el edificio más alto del mundo durante casi 4 000 años.</li><li>El <b>Panteón de Roma</b> tiene una enorme cúpula, que es media esfera. Su interior está pensado para que dentro cupiera una esfera completa: la cúpula mide unos 43 m de diámetro, y del suelo al techo hay también unos 43 m. En lo alto tiene un agujero circular, el óculo, por donde entra la luz.</li><li>Las <b>torres</b> y los faros suelen ser cilindros, porque resisten bien el viento venga de donde venga.</li><li>Muchos edificios modernos son ortoedros de cristal, porque es fácil aprovechar el espacio interior y amueblarlo.</li></ul><p>Los arquitectos calculan el volumen de cada sala para saber cuánto aire hay que calentar o refrigerar y cuántas personas caben con seguridad. Mira a tu alrededor: tu colegio, tu casa o el depósito de agua de tu pueblo están hechos de cuerpos geométricos.</p>`,
      L6.filas("Cuerpos en edificios", [["pirámide", "Guiza, 146 m", cNA], ["semiesfera", "cúpula del Panteón", cAZ], ["cilindro", "torres y faros", cVE], ["ortoedro", "edificios modernos", cMO]])],
  ],
  ejemplos: [
    ["Un poliedro tiene 8 caras y 6 vértices. ¿Cuántas aristas tiene?", ["Fórmula de Euler: C + V = A + 2.", "8 + 6 = A + 2, así que A = 14 − 2."], "12 aristas (es el octaedro)."],
    ["Calcula el volumen de una lata cilíndrica de 5 cm de radio y 10 cm de altura.", ["Área de la base: 3,14 × 5² = 78,5 cm².", "Volumen: 78,5 × 10."], "785 cm³ = 0,785 L."],
  ],
  errores: ["Pensar que todas las combinaciones de seis cuadrados forman un cubo.", "Olvidar que la pirámide ocupa solo la tercera parte del prisma de igual base y altura."],
  ejercicios: [
    ["b", "Comprueba la fórmula de Euler en el cubo.", "6 + 8 = 12 + 2 = 14."],
    ["b", "¿Qué figuras forman el desarrollo plano de un cilindro?", "Un rectángulo y dos círculos."],
    ["b", "¿Cuántos desarrollos planos distintos tiene el cubo?", "11."],
    ["b", "En una probeta el agua pasa de 200 mL a 250 mL al meter una piedra. ¿Qué volumen tiene la piedra?", "50 cm³."],
    ["b", "¿Qué cuerpo geométrico es la cúpula del Panteón?", "Media esfera (semiesfera)."],
    ["m", "Un poliedro tiene 5 caras y 5 vértices. ¿Cuántas aristas tiene?", "8 aristas."],
    ["m", "Calcula el volumen de un prisma triangular de base 6 cm × 4 cm (triángulo) y 10 cm de altura.", "12 × 10 = 120 cm³."],
    ["m", "Calcula el volumen de un cilindro de 5 cm de radio y 10 cm de altura.", "785 cm³."],
    ["m", "Un prisma tiene un volumen de 90 cm³. ¿Qué volumen tiene una pirámide de igual base y altura?", "30 cm³."],
    ["m", "Comprueba la fórmula de Euler en el prisma pentagonal.", "7 + 10 = 15 + 2 = 17."],
    ["a", "¿Cuántos litros caben en un cilindro de 10 cm de radio y 20 cm de altura?", "3,14 × 100 × 20 = 6 280 cm³ = 6,28 L."],
    ["a", "Un acuario de 50 × 30 × 40 cm tiene agua hasta 30 cm. Al meter una roca sube a 32 cm. ¿Qué volumen tiene la roca?", "50 × 30 × 2 = 3 000 cm³."],
    ["a", "Un poliedro tiene 12 vértices y 30 aristas. ¿Cuántas caras tiene?", "C = 30 + 2 − 12 = 20 (icosaedro)."],
    ["a", "¿Por qué la plata mezclada en la corona hacía subir más el agua?", "Porque la plata ocupa más volumen que la misma masa de oro."],
  ],
  quiz: [
    ["La fórmula de Euler dice que…", ["C + V = A + 2", "C + A = V + 2", "C × V = A"], "Euler."],
    ["El desarrollo de un cilindro tiene…", ["un rectángulo y dos círculos", "tres círculos", "un triángulo y un círculo"], "Desarrollos."],
    ["El volumen de un prisma es…", ["área de la base × altura", "suma de sus aristas", "largo + ancho + alto"], "Base × altura."],
    ["1 mL de agua ocupa…", ["1 cm³", "1 dm³", "1 m³"], "Capacidad y volumen."],
    ["Una pirámide ocupa del prisma de igual base y altura…", ["la tercera parte", "la mitad", "lo mismo"], "Pirámide."],
  ],
  examen: [
    ["Un poliedro con 6 caras y 8 vértices tiene…", ["12 aristas", "14 aristas", "10 aristas"], "6 + 8 − 2."],
    ["Si el agua sube de 200 mL a 235 mL al sumergir un objeto, su volumen es…", ["35 cm³", "235 cm³", "435 cm³"], "Restar niveles."],
  ],
  tarjetas: [
    ["Fórmula de Euler", "Caras + vértices = aristas + 2."],
    ["Desarrollo plano", "Figura plana que al doblarse forma el cuerpo. El cubo tiene 11."],
    ["Volumen de prismas y cilindros", "Área de la base × altura. Pirámide y cono: entre 3."],
    ["Método de Arquímedes", "El volumen de un objeto sumergido es el agua que desplaza."],
  ],
  glosario: [
    ["Fórmula de Euler", "C + V = A + 2, válida para los poliedros sin agujeros."],
    ["Desarrollo plano", "Figura plana que, doblada, forma un cuerpo geométrico."],
    ["Sólido platónico", "Cada uno de los cinco poliedros regulares."],
    ["Octaedro", "Poliedro regular de 8 caras triangulares."],
    ["Icosaedro", "Poliedro regular de 20 caras triangulares."],
    ["Dodecaedro", "Poliedro regular de 12 caras pentagonales."],
    ["Probeta", "Tubo graduado para medir volúmenes de líquidos."],
    ["Desplazar", "Mover de su sitio; el objeto sumergido aparta agua."],
    ["Semiesfera", "Mitad de una esfera."],
    ["Cúpula", "Techo con forma de media esfera."],
    ["Óculo", "Abertura circular en lo alto de una cúpula."],
    ["Orfebre", "Artesano que trabaja el oro y la plata."],
  ],
  situacion: {
    titulo: "Diseñamos un envase",
    reto: "La clase diseña un envase para 1 litro de zumo con la forma que consideréis mejor y lo construye en cartulina.",
    pasos: ["Comparad envases reales: cajas, latas, botellas, y medid su volumen.", "Elegid una forma (ortoedro, prisma o cilindro) y calculad medidas que den 1 000 cm³.", "Dibujad el desarrollo plano con pestañas y construid el envase.", "Comprobad su capacidad llenándolo de arroz y midiéndolo con una jarra graduada."],
    producto: "Un envase de cartulina de 1 litro con sus cálculos.",
    evaluacion: ["Calcula volúmenes con la fórmula adecuada.", "Dibuja desarrollos planos correctos.", "Relaciona volumen y capacidad.", "Comprueba y explica los resultados."],
  },
});
