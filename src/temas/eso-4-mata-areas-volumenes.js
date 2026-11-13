// Matemáticas A 4º ESO · Geometría: áreas y volúmenes. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, comparar, barras } = require("./_eso4L2-mata");

const ln = (x1, y1, x2, y2, c = "var(--ink)", w = 2, dash = false) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}"${dash ? ' stroke-dasharray="5 4"' : ""}/>`;
const pg = (pts, c, fill = "var(--card)", w = 2.5) => `<polygon points="${pts.map((p) => p.join(",")).join(" ")}" fill="${fill}" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;
const el = (cx, cy, rx, ry, c, fill = "none", dash = false) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${c}" stroke-width="2.2"${dash ? ' stroke-dasharray="5 4"' : ""}/>`;
// Cilindro de centro x, base en y0, alto h, radio r.
const cil = (x, y0, h, r, c) => `<path d="M${x - r} ${y0 - h} V ${y0} A ${r} ${r * 0.3} 0 0 0 ${x + r} ${y0} V ${y0 - h}" fill="var(--card)" stroke="${c}" stroke-width="2.4"/>` + el(x, y0 - h, r, r * 0.3, c, "var(--card)") + `<path d="M${x - r} ${y0} A ${r} ${r * 0.3} 0 0 1 ${x + r} ${y0}" fill="none" stroke="${c}" stroke-width="1.4" stroke-dasharray="4 4"/>`;
const cono = (x, y0, h, r, c) => `<path d="M${x - r} ${y0} L ${x} ${y0 - h} L ${x + r} ${y0} A ${r} ${r * 0.3} 0 0 1 ${x - r} ${y0} Z" fill="var(--card)" stroke="${c}" stroke-width="2.4"/>` + `<path d="M${x - r} ${y0} A ${r} ${r * 0.3} 0 0 1 ${x + r} ${y0}" fill="none" stroke="${c}" stroke-width="1.4" stroke-dasharray="4 4"/>`;
// Ortoedro con esquina frontal inferior izquierda (x, y), ancho a, alto h, fondo p (en perspectiva).
const caja = (x, y, a, h, p, c) => pg([[x, y], [x + a, y], [x + a, y - h], [x, y - h]], c) + pg([[x, y - h], [x + a, y - h], [x + a + p, y - h - p * 0.6], [x + p, y - h - p * 0.6]], c) + pg([[x + a, y], [x + a + p, y - p * 0.6], [x + a + p, y - h - p * 0.6], [x + a, y - h]], c);

const planas = cajas("Fórmulas de las áreas de las figuras planas más usadas", [
  ["Rectángulo", ["A = b · h"], "var(--pen)"], ["Triángulo", ["A = b · h / 2"], "var(--red)"],
  ["Trapecio", ["A = (B + b) · h / 2"], "var(--leaf)"], ["Rombo", ["A = D · d / 2"], "var(--inf)"],
  ["Polígono regular", ["A = P · ap / 2"], "var(--bac)"], ["Círculo", ["A = π · r²"], "var(--sun)"],
], "Áreas planas");

const pit3d = lienzo("Diagonal de un ortoedro de aristas a, b y c: se aplica Pitágoras dos veces", caja(40, 150, 120, 70, 60, "var(--pen)") + ln(40, 150, 220, 44, "var(--red)", 2.5) + ln(40, 150, 220, 114, "var(--leaf)", 2, true) + tx(100, 168, "a", { fs: 13, c: "var(--pen)" }) + tx(206, 140, "b", { fs: 13, c: "var(--pen)" }) + tx(236, 82, "c", { fs: 13, c: "var(--pen)" }) + tx(130, 22, "D = √(a² + b² + c²)", { fs: 14, c: "var(--red)" }), 185);

const prismas = lienzo("Prismas: el área total es el área lateral más las dos bases, y el volumen el área de la base por la altura", caja(30, 155, 80, 90, 40, "var(--pen)") + tx(70, 175, "ortoedro", { fs: 11, c: "var(--muted)" }) + pg([[175, 155], [235, 155], [250, 140], [205, 128], [160, 140]], "var(--red)") + pg([[175, 75], [235, 75], [250, 60], [205, 48], [160, 60]], "var(--red)") + ln(160, 60, 160, 140, "var(--red)") + ln(175, 75, 175, 155, "var(--red)") + ln(235, 75, 235, 155, "var(--red)") + ln(250, 60, 250, 140, "var(--red)") + tx(200, 175, "prisma pentagonal", { fs: 11, c: "var(--muted)" }) + tx(130, 22, "V = A_base · h", { fs: 14, c: "var(--ink)" }), 185);

const desarrolloCil = lienzo("Desarrollo plano del cilindro: un rectángulo de base 2 pi r y altura h, y dos círculos de radio r", `<rect x="40" y="62" width="180" height="70" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>` + `<circle cx="90" cy="38" r="22" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/><circle cx="90" cy="156" r="22" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>` + tx(130, 102, "A_lat = 2πr · h", { fs: 13, c: "var(--pen)" }) + tx(232, 100, "h", { fs: 13, c: "var(--muted)" }) + tx(180, 150, "2πr", { fs: 13, c: "var(--muted)" }) + tx(90, 42, "πr²", { fs: 11, c: "var(--red)" }) + tx(90, 160, "πr²", { fs: 11, c: "var(--red)" }) + tx(190, 34, "A_T = 2πrh + 2πr²", { fs: 11.5, c: "var(--ink)", max: 120 }), 185);

const cilFig = lienzo("Cilindro de radio r y altura h: volumen pi r cuadrado por h", cil(80, 150, 100, 45, "var(--pen)") + ln(80, 50, 125, 50, "var(--red)", 2) + tx(102, 44, "r", { fs: 13, c: "var(--red)" }) + ln(135, 50, 135, 150, "var(--muted)", 1.5, true) + tx(146, 104, "h", { fs: 13, c: "var(--muted)" }) + tx(205, 80, "V = πr²h", { fs: 14, c: "var(--pen)", max: 100 }) + tx(205, 110, "A_T = 2πr(h + r)", { fs: 11, c: "var(--ink)", max: 100 }), 185);

const piramide = lienzo("Pirámide de base cuadrada: la apotema de la pirámide, la altura y la mitad del lado forman un triángulo rectángulo", pg([[40, 150], [160, 150], [200, 120], [80, 120]], "var(--leaf)") + ln(40, 150, 120, 30, "var(--leaf)") + ln(160, 150, 120, 30, "var(--leaf)") + ln(200, 120, 120, 30, "var(--leaf)") + ln(80, 120, 120, 30, "var(--leaf)", 1.5, true) + ln(120, 30, 120, 135, "var(--red)", 2, true) + ln(120, 135, 100, 150, "var(--muted)", 1.5, true) + ln(120, 30, 100, 150, "var(--pen)", 2) + tx(130, 90, "h", { fs: 13, c: "var(--red)" }) + tx(92, 96, "ap", { fs: 12, c: "var(--pen)" }) + tx(205, 40, "V = A_b · h / 3", { fs: 12, c: "var(--ink)", max: 100 }) + tx(205, 62, "ap² = h² + (l/2)²", { fs: 11, c: "var(--pen)", max: 100 }), 185);

const conoFig = lienzo("Cono de radio r, altura h y generatriz g: g al cuadrado es h al cuadrado más r al cuadrado", cono(80, 150, 110, 50, "var(--red)") + ln(80, 40, 80, 150, "var(--muted)", 1.5, true) + ln(80, 150, 130, 150, "var(--pen)", 2) + tx(105, 166, "r", { fs: 13, c: "var(--pen)" }) + tx(70, 104, "h", { fs: 13, c: "var(--muted)" }) + tx(115, 90, "g", { fs: 13, c: "var(--red)" }) + tx(200, 60, "V = πr²h / 3", { fs: 13, c: "var(--ink)", max: 100 }) + tx(200, 86, "A_lat = πrg", { fs: 12, c: "var(--red)", max: 100 }) + tx(200, 112, "g² = h² + r²", { fs: 12, c: "var(--pen)", max: 100 }), 185);

const unTercio = lienzo("Un cono cabe exactamente tres veces en el cilindro de la misma base y altura", cil(70, 150, 100, 40, "var(--pen)") + cono(70, 150, 100, 40, "var(--red)") + tx(70, 172, "V_cono = V_cil / 3", { fs: 11, c: "var(--ink)", max: 110 }) + [0, 1, 2].map((i) => cono(160 + i * 34, 120, 50, 15, "var(--red)")).join("") + tx(194, 150, "× 3 = cilindro", { fs: 12, c: "var(--red)", max: 100 }) + tx(194, 40, "lo mismo: pirámide", { fs: 10.5, c: "var(--muted)", max: 110 }) + tx(194, 56, "= prisma / 3", { fs: 10.5, c: "var(--muted)", max: 110 }), 185);

const esfera = lienzo("Esfera de radio r: área 4 pi r cuadrado y volumen cuatro tercios de pi r al cubo", `<circle cx="80" cy="95" r="60" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>` + el(80, 95, 60, 16, "var(--pen)", "none", true) + ln(80, 95, 140, 95, "var(--red)", 2) + tx(110, 88, "r", { fs: 13, c: "var(--red)" }) + tx(200, 75, "A = 4πr²", { fs: 14, c: "var(--pen)", max: 100 }) + tx(200, 110, "V = 4πr³/3", { fs: 14, c: "var(--red)", max: 100 }), 185);

const troncoFig = lienzo("Tronco de cono: se obtiene restando a un cono grande el cono pequeño que se le corta por arriba", cono(130, 140, 120, 80, "var(--muted)") + `<path d="M50 140 L 98 68 M210 140 L 162 68" stroke="var(--red)" stroke-width="2.5"/>` + el(130, 68, 32, 9.6, "var(--red)", "var(--card)") + `<path d="M50 140 A 80 24 0 0 0 210 140" fill="none" stroke="var(--red)" stroke-width="2.5"/>` + tx(130, 178, "V = V_grande − V_pequeño", { fs: 12, c: "var(--red)", max: 200 }) + tx(16, 30, "cono cortado", { fs: 11, c: "var(--muted)", a: "start" }), 185);

const compuesto = lienzo("Cuerpo compuesto: un silo formado por un cilindro y un cono encima; el volumen es la suma de los dos", cono(90, 70, 50, 50, "var(--red)") + cil(90, 160, 90, 50, "var(--pen)") + `<path d="M40 70 L 90 20 L 140 70" fill="var(--card)" stroke="var(--red)" stroke-width="2.4"/>` + tx(200, 50, "cono", { fs: 13, c: "var(--red)" }) + tx(200, 115, "cilindro", { fs: 13, c: "var(--pen)" }) + tx(200, 160, "V = V₁ + V₂", { fs: 13, c: "var(--ink)" }), 185);

const unidades = pasos("Escalera de unidades: en las de área cada paso es por 100 y en las de volumen por 1.000; un decímetro cúbico es un litro", ["km² · hm² · dam² · m² · dm² · cm²: × 100", "km³ · … · m³ · dm³ · cm³: × 1.000", "1 dm³ = 1 L", "1 cm³ = 1 mL", "1 m³ = 1.000 L"], "Unidades");

const semejanzaVol = barras("Si se duplican todas las medidas de un cuerpo, su área se multiplica por 4 y su volumen por 8", [["Longitud", 2], ["Área", 4], ["Volumen", 8]], { titulo: "Duplicar las medidas (k = 2)", c: "var(--leaf)" });

const resolver = pasos("Pasos para resolver un problema de áreas y volúmenes", ["Identificar el cuerpo (o cuerpos)", "Dibujar y anotar los datos", "Hallar con Pitágoras lo que falte", "Aplicar la fórmula adecuada", "Unidades y respuesta con sentido"], "Problemas de cuerpos");

const terrestre = lienzo("Coordenadas geográficas: paralelos horizontales y meridianos que van de polo a polo; el ecuador mide unos 40.000 kilómetros", `<circle cx="90" cy="95" r="70" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>` + el(90, 95, 70, 18, "var(--red)") + el(90, 60, 60, 14, "var(--muted)", "none", true) + el(90, 130, 60, 14, "var(--muted)", "none", true) + el(90, 95, 30, 70, "var(--leaf)") + ln(90, 25, 90, 165, "var(--leaf)", 1.5) + tx(212, 80, "ecuador", { fs: 12, c: "var(--red)", max: 100 }) + tx(212, 100, "≈ 40.000 km", { fs: 12, c: "var(--red)", max: 100 }) + tx(212, 130, "meridianos", { fs: 12, c: "var(--leaf)", max: 100 }) + tx(212, 50, "paralelos", { fs: 12, c: "var(--muted)", max: 100 }), 185);

const resumen = comparar("Resumen de volúmenes: prismas y cilindros, pirámides y conos, y esfera", [
  ["Prisma/cilindro", ["V = A_b · h"], "var(--pen)"],
  ["Pirámide/cono", ["V = A_b · h / 3"], "var(--red)"],
  ["Esfera", ["V = 4πr³/3"], "var(--leaf)"],
], "Volúmenes");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Geometría: áreas y volúmenes",
  minutos: 115,
  objetivos: [
    "Calcular áreas de figuras planas y aplicar Pitágoras en el plano y el espacio",
    "Calcular áreas laterales y totales de prismas, pirámides, cilindros, conos y esferas",
    "Calcular volúmenes de cuerpos geométricos simples y compuestos",
    "Trabajar con unidades de área, volumen y capacidad",
    "Relacionar la semejanza con el cambio de áreas y volúmenes",
    "Resolver problemas reales de envases, depósitos y construcciones",
  ],
  claves: ["área lateral", "área total", "volumen", "prisma", "cilindro", "cono", "esfera", "Pitágoras en el espacio"],
  pregunta: {
    texto: "Una lata de refresco mide 6,6 cm de diámetro y 11,5 cm de alto. ¿Caben de verdad los 33 cl que pone en la etiqueta?",
    respuesta: "Es un <mark>cilindro</mark>: V = π · r² · h = π · 3,3² · 11,5 ≈ 393 cm³ = 39,3 cl. Caben los 33 cl y queda <b>espacio para el gas y la dilatación</b>. Con las fórmulas de volumen se puede comprobar cualquier envase.",
  },
  lectura: {
    titulo: "De Arquímedes a los envases del supermercado",
    html: `<p>El matemático griego <b>Arquímedes</b> (siglo III a. C.) estaba tan orgulloso de uno de sus descubrimientos que pidió que lo grabaran en su tumba: una <b>esfera</b> dentro de un <b>cilindro</b> que la envuelve justo. Había demostrado que el volumen de la esfera es exactamente <b>dos tercios</b> del volumen de ese cilindro, y que lo mismo ocurre con sus superficies. Siglos después, Cicerón encontró la tumba abandonada en Sicilia gracias a ese dibujo.</p><p>Hoy las fórmulas de áreas y volúmenes están detrás de muchas decisiones cotidianas. Los fabricantes diseñan latas, briks y botellas para gastar el mínimo de material con la capacidad deseada. Los arquitectos calculan cuánta pintura, cuántos azulejos o cuánto hormigón necesita un edificio. Los agricultores calculan la capacidad de un silo y los ingenieros, la de un embalse o una piscina.</p><p>En este tema repasarás las fórmulas de las figuras planas, aprenderás a calcular el área y el volumen de prismas, pirámides, cilindros, conos y esferas, y usarás el teorema de Pitágoras para encontrar las medidas que faltan. Al final sabrás comprobar si un envase dice la verdad.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Áreas de figuras planas</h3><p>Para calcular áreas de cuerpos necesitamos dominar las de las figuras planas. Las principales: <b>rectángulo</b> b · h; <b>triángulo</b> b · h / 2; <b>trapecio</b> (B + b) · h / 2; <b>rombo</b> D · d / 2; <b>polígono regular</b> P · ap / 2 (perímetro por apotema entre dos); <b>círculo</b> <mark>π · r²</mark>, y longitud de la circunferencia 2πr.</p><p>También conviene recordar el <b>sector circular</b>, una porción del círculo de ángulo α: A = πr² · α/360°. Las figuras irregulares se descomponen en otras conocidas: un terreno en forma de L se divide en dos rectángulos, y una ventana con un arco se descompone en rectángulo más semicírculo. Al resolver un problema, lo primero es identificar qué figuras componen la forma y qué datos faltan.</p>`, svg: planas },
    { html: `<h3>1.2 Pitágoras en el plano y en el espacio</h3><p>El teorema de Pitágoras, c² = a² + b², permite calcular las medidas que faltan: la altura de un triángulo equilátero (con lado l, h = l√3/2), la apotema de un hexágono regular (ap = l√3/2), la diagonal de un rectángulo o la altura de un trapecio isósceles.</p><p>En el <b>espacio</b> se aplica dos veces. La diagonal de un ortoedro de aristas a, b y c es <mark>D = √(a² + b² + c²)</mark>: primero se calcula la diagonal de la base, √(a² + b²), y luego se usa con la altura. En un cubo de arista a, D = a√3. Por ejemplo, ¿cabe un palo de 1,2 m en una caja de 80 × 60 × 70 cm? La diagonal es √(6.400 + 3.600 + 4.900) ≈ 122 cm: sí, justo en diagonal. También se usa en pirámides y conos para relacionar altura, apotema y generatriz.</p>`, svg: pit3d },
    { html: `<h3>1.3 Prismas: área y volumen</h3><p>Un <b>prisma</b> tiene dos bases poligonales iguales y paralelas, y caras laterales que son rectángulos (si es recto). Su <b>área lateral</b> es el perímetro de la base por la altura, A_lat = P_b · h; el <b>área total</b> suma las dos bases, A_T = A_lat + 2 · A_b. El <b>ortoedro</b> (caja de zapatos) y el <b>cubo</b> son prismas especiales.</p><p>El <b>volumen</b> de cualquier prisma es <mark>V = A_b · h</mark>: el área de la base por la altura. Se puede imaginar como apilar capas iguales a la base. Un ortoedro de 2 × 3 × 4 m tiene un volumen de 24 m³, y un prisma hexagonal regular de lado 2 cm, apotema 1,73 cm y altura 10 cm tiene base 12 · 1,73 / 2 ≈ 10,4 cm² y volumen ≈ 104 cm³. Esta misma fórmula sirve para el cilindro, que es como un prisma de base circular.</p>`, svg: prismas, video: { id: "4A23ycIyLe4", titulo: "Área y volumen de prismas y cilindros", canal: "Susi Profe", vistas: 673175, megusta: 0 } },
    { html: `<h3>1.4 El cilindro: desarrollo y área</h3><p>Si se abre un cilindro y se extiende sobre la mesa, se obtiene su <b>desarrollo plano</b>: un <b>rectángulo</b> (la superficie lateral) y dos <b>círculos</b> (las bases). La base del rectángulo es la longitud de la circunferencia, 2πr, y su altura es h. Por tanto, <mark>A_lat = 2πr · h</mark> y A_T = 2πrh + 2πr² = 2πr(h + r).</p><p>Ejemplo: una lata de 4 cm de radio y 12 cm de altura tiene un área lateral de 2π · 4 · 12 ≈ 301,6 cm² (la etiqueta) y un área total de 301,6 + 2 · π · 16 ≈ 402,1 cm² (la chapa necesaria). Los desarrollos planos son útiles para construir cuerpos con cartulina y para entender de dónde salen las fórmulas: el área de un cuerpo siempre es la suma de las áreas de todas sus caras.</p>`, svg: desarrolloCil },
    { html: `<h3>1.5 El volumen del cilindro</h3><p>Como en el prisma, el volumen del cilindro es el área de la base por la altura: <mark>V = π · r² · h</mark>. Es la fórmula de las latas, los depósitos cilíndricos, las tuberías y las columnas. Un depósito de 1,5 m de radio y 4 m de altura contiene π · 2,25 · 4 ≈ 28,3 m³ = 28.300 litros.</p><p>Muchos problemas piden el dato inverso: ¿qué altura debe tener una lata de 3 cm de radio para contener 330 mL? Se despeja h = V/(πr²) = 330/(π · 9) ≈ 11,7 cm. Hay que tener cuidado con el <b>radio y el diámetro</b>: si dan el diámetro, se divide entre 2 antes de elevar al cuadrado. Un error en ese paso multiplica el resultado por 4. Otro detalle: en los problemas de capacidad es útil recordar que 1 cm³ = 1 mL.</p>`, svg: cilFig },
    { html: `<h3>1.6 Pirámides</h3><p>Una <b>pirámide</b> tiene una base poligonal y caras laterales triangulares que se unen en un vértice. La altura de cada triángulo lateral es la <b>apotema de la pirámide</b>. El área lateral es la suma de esos triángulos: en una pirámide regular, <mark>A_lat = P_b · ap / 2</mark>; el área total añade la base.</p><p>La altura h, la apotema de la pirámide ap y la apotema de la base forman un <b>triángulo rectángulo</b>, así que se relacionan con Pitágoras. En una pirámide de base cuadrada de lado l: ap² = h² + (l/2)². Ejemplo: la Gran Pirámide de Guiza tenía una base de unos 230 m de lado y una altura de 146 m. Su apotema era √(146² + 115²) ≈ 186 m y su área lateral ≈ 4 · 230 · 186 / 2 ≈ 85.560 m²: más de ocho hectáreas de piedra pulida.</p>`, svg: piramide },
    { html: `<h3>1.7 Conos</h3><p>Un <b>cono</b> tiene una base circular y una superficie lateral curva que acaba en un vértice. La distancia del vértice a un punto de la circunferencia de la base es la <b>generatriz</b> g. Altura, radio y generatriz forman un triángulo rectángulo: <mark>g² = h² + r²</mark>.</p><p>El desarrollo de la superficie lateral es un <b>sector circular</b> de radio g, cuyo arco mide 2πr. Su área es <b>A_lat = π · r · g</b>, y el área total es πrg + πr². Ejemplo: un cucurucho de helado de radio 3 cm y altura 10 cm tiene g = √109 ≈ 10,44 cm y un área lateral de π · 3 · 10,44 ≈ 98,4 cm² de galleta. Los gorros de fiesta, los conos de tráfico y las puntas de los lápices son conos o casi conos.</p>`, svg: conoFig },
    { html: `<h3>2.1 Volumen de pirámides y conos</h3><p>Una pirámide tiene exactamente <b>un tercio</b> del volumen del prisma con la misma base y altura, y un cono, un tercio del cilindro correspondiente: <mark>V = A_b · h / 3</mark>. Para el cono, V = πr²h/3. Se puede comprobar experimentalmente llenando de arena o agua un cono y vaciándolo en el cilindro: hacen falta tres conos.</p><p>Ejemplo: un cono de 6 cm de radio y 8 cm de altura tiene un volumen de π · 36 · 8 / 3 ≈ 301,6 cm³. Una pirámide cuadrangular de lado 6 m y altura 4 m tiene 36 · 4 / 3 = 48 m³. Si el problema da la generatriz o la apotema en lugar de la altura, primero hay que calcular h con Pitágoras: un cono con g = 13 y r = 5 tiene h = 12. Olvidar dividir entre 3 es uno de los errores más frecuentes.</p>`, svg: unTercio, video: { id: "Cal94N065cA", titulo: "Volumen del cono, súper fácil", canal: "Daniel Carreón", vistas: 2069531, megusta: 0 } },
    { html: `<h3>2.2 La esfera</h3><p>La <b>esfera</b> es el cuerpo formado por todos los puntos que están a la misma distancia r (el radio) de un centro. Su área es <mark>A = 4πr²</mark>, cuatro veces el área de su círculo máximo, y su volumen es <mark>V = 4πr³/3</mark>. Un balón de 11 cm de radio tiene un área de 4π · 121 ≈ 1.521 cm² y un volumen de 4π · 1.331 / 3 ≈ 5.575 cm³ ≈ 5,6 L.</p><p>Arquímedes descubrió que la esfera ocupa los <b>dos tercios</b> del cilindro que la contiene (de radio r y altura 2r): 2πr³ · 2/3 = 4πr³/3. Con media esfera, la <b>semiesfera</b>, se trabaja dividiendo entre 2 el volumen (y el área curva). Como el radio aparece al cubo, pequeños cambios en el radio producen grandes cambios en el volumen: si el radio de un globo se duplica, su volumen se multiplica por 8.</p>`, svg: esfera },
    { html: `<h3>2.3 Troncos de pirámide y de cono</h3><p>Si a una pirámide o a un cono se le corta la punta con un plano paralelo a la base, lo que queda es un <b>tronco</b>. Su volumen se calcula como la <b>diferencia</b> entre el cuerpo grande y el pequeño que se ha quitado: <mark>V = V_grande − V_pequeño</mark>. Como los dos conos (o pirámides) son semejantes, las medidas que faltan se obtienen con el teorema de Tales.</p><p>Ejemplo: un cono de radio 6 cm y altura 12 cm se corta a 6 cm de la base. El cono pequeño tiene altura 6 y radio 3 (razón 1/2). V_grande = π · 36 · 12 / 3 ≈ 452,4 cm³ y V_pequeño = π · 9 · 6 / 3 ≈ 56,5 cm³. El tronco tiene unos 395,9 cm³. Fíjate en que el cono pequeño, de la mitad de altura, tiene solo un octavo del volumen. Los vasos, los cubos de agua y muchas macetas tienen forma de tronco de cono.</p>`, svg: troncoFig },
    { html: `<h3>2.4 Cuerpos compuestos</h3><p>Muchos objetos reales combinan varios cuerpos: un silo es un cilindro con un cono encima; una cápsula, un cilindro con dos semiesferas; una casa, un prisma con un tejado en forma de prisma triangular. El <b>volumen</b> total es la <b>suma</b> (o la resta, si hay huecos) de los volúmenes de cada parte.</p><p>Para el <b>área</b>, en cambio, hay que pensar qué superficies quedan por fuera: en el silo, la base del cono y la tapa superior del cilindro están pegadas y no se cuentan. Ejemplo: un silo con cilindro de radio 3 m y altura 8 m y cono de altura 4 m: V = π · 9 · 8 + π · 9 · 4 / 3 = 72π + 12π = 84π ≈ 263,9 m³. El área exterior es la lateral del cilindro, la lateral del cono y la base: 48π + 15π + 9π = 72π ≈ 226,2 m² (con g = 5 m).</p>`, svg: compuesto },
    { html: `<h3>2.5 Unidades de área, volumen y capacidad</h3><p>En las unidades de <b>área</b>, cada escalón multiplica o divide por <mark>100</mark>: 1 m² = 100 dm² = 10.000 cm². En las de <b>volumen</b>, por <mark>1.000</mark>: 1 m³ = 1.000 dm³ = 1.000.000 cm³. Las unidades de <b>capacidad</b> (litros) se relacionan con las de volumen: <b>1 dm³ = 1 L</b>, 1 cm³ = 1 mL y 1 m³ = 1.000 L.</p><p>Ejemplo: una piscina de 10 × 5 × 1,6 m tiene 80 m³ = 80.000 L. Si un grifo echa 20 L por minuto, tardará 4.000 minutos (más de 66 horas) en llenarse. Para las superficies agrarias se usan la <b>hectárea</b> (1 ha = 10.000 m²) y el área (1 a = 100 m²). Muchos errores en los problemas no son de fórmula sino de unidades: conviene pasar todos los datos a la misma unidad antes de calcular.</p>`, svg: unidades },
    { html: `<h3>2.6 Semejanza y volumen</h3><p>Si un cuerpo se amplía o reduce con razón k, sus longitudes se multiplican por k, sus <b>áreas por k²</b> y sus <b>volúmenes por k³</b>. Duplicar todas las medidas de una caja multiplica por 4 la cantidad de cartón y por 8 su capacidad. Por eso los envases grandes suelen ser más económicos: el material crece menos que el contenido.</p><p>Esta relación explica fenómenos naturales: los animales pequeños pierden calor más deprisa porque tienen mucha superficie para su volumen, y por eso los ratones comen proporcionalmente mucho más que los elefantes. También sirve para cálculos rápidos: una naranja con el doble de diámetro tiene 8 veces más zumo, pero solo 4 veces más piel. El cociente área/volumen se reduce a la mitad al duplicar el tamaño.</p>`, svg: semejanzaVol, video: { id: "GNcFjFmqEc8", titulo: "¿Por qué la superficie de una esfera es cuatro veces su sombra?", canal: "3Blue1Brown", vistas: 8830505, megusta: 0 } },
    { html: `<h3>2.7 Resolver problemas de cuerpos geométricos</h3><p>Un buen método evita la mayoría de errores: 1) <b>identificar</b> el cuerpo o los cuerpos que forman el objeto; 2) <b>dibujarlos</b> y anotar los datos; 3) calcular con <b>Pitágoras</b> las medidas que falten (altura, apotema, generatriz); 4) aplicar la <b>fórmula</b> adecuada, distinguiendo si se pide área lateral, área total o volumen; 5) revisar las <b>unidades</b> y que la respuesta tenga sentido.</p><p>Preguntas clave: ¿se pide cuánto material hace falta (área) o cuánto cabe (volumen)? Para pintar una habitación se usa el área de las paredes y el techo menos puertas y ventanas; para llenar un depósito, el volumen. Si el resultado de una lata da 3.000 litros o el de una habitación da 2 m², algo ha fallado: estimar el orden de magnitud antes de calcular ayuda a detectar errores.</p>`, svg: resolver },
    { html: `<h3>3.1 La esfera terrestre</h3><p>La Tierra es aproximadamente una esfera de radio unos 6.371 km. La longitud del <b>ecuador</b> es 2π · 6.371 ≈ 40.030 km, su superficie 4π · 6.371² ≈ 510 millones de km² y su volumen unos 1,08 billones de km³. Los <b>paralelos</b> son circunferencias paralelas al ecuador, cada vez menores hacia los polos, y los <b>meridianos</b> son semicircunferencias que van de polo a polo.</p><p>Cada punto se localiza con dos coordenadas: la <b>latitud</b> (ángulo norte o sur desde el ecuador) y la <b>longitud</b> (ángulo este u oeste desde el meridiano de Greenwich). Un grado de meridiano mide unos 40.000/360 ≈ 111 km. Así, Madrid (40° N) está a unos 4.450 km del ecuador. En el siglo III a. C., Eratóstenes calculó la circunferencia terrestre midiendo sombras en dos ciudades de Egipto, con un error de solo un pequeño porcentaje.</p>`, svg: terrestre },
    { html: `<h3>3.2 Resumen de fórmulas</h3><p>Todas las fórmulas de volumen se agrupan en tres familias. <b>Prismas y cilindros</b>: V = A_b · h. <b>Pirámides y conos</b>: V = A_b · h / 3. <b>Esfera</b>: V = 4πr³/3. Para las áreas, la idea es siempre sumar las caras: prisma P · h + 2A_b; cilindro 2πrh + 2πr²; pirámide P · ap / 2 + A_b; cono πrg + πr²; esfera 4πr².</p><p>No hace falta memorizarlo todo de golpe: si entiendes de dónde sale cada fórmula (desarrollo plano, apilar capas, un tercio, Pitágoras), podrás reconstruirlas. La tabla siguiente resume las más usadas y es un buen punto de partida para hacer tus propias tarjetas de repaso.</p>${tabla(["Cuerpo", "Área total", "Volumen"], [["Prisma", "P·h + 2A_b", "A_b·h"], ["Cilindro", "2πr(h + r)", "πr²h"], ["Pirámide", "P·ap/2 + A_b", "A_b·h/3"], ["Cono", "πr(g + r)", "πr²h/3"], ["Esfera", "4πr²", "4πr³/3"]])}`, svg: resumen },
  ],
  ejemplos: [
    { enunciado: "Calcula la diagonal de un ortoedro de 3 × 4 × 12 cm.", pasos: ["Diagonal de la base: √(9 + 16) = 5.", "Diagonal del ortoedro: √(25 + 144) = 13."], resultado: "D = 13 cm." },
    { enunciado: "Halla el área total y el volumen de un cilindro de 5 cm de radio y 10 cm de altura.", pasos: ["A_lat = 2π · 5 · 10 = 100π ≈ 314,2 cm².", "A_bases = 2π · 25 = 50π ≈ 157,1 cm².", "A_T = 150π ≈ 471,2 cm².", "V = π · 25 · 10 = 250π ≈ 785,4 cm³."], resultado: "A_T ≈ 471,2 cm²; V ≈ 785,4 cm³ ≈ 0,785 L." },
    { enunciado: "Una pirámide cuadrangular regular tiene base de lado 10 m y altura 12 m. Calcula su área total y su volumen.", pasos: ["ap = √(12² + 5²) = 13 m.", "A_lat = 40 · 13 / 2 = 260 m²; A_T = 260 + 100 = 360 m².", "V = 100 · 12 / 3 = 400 m³."], resultado: "360 m² y 400 m³." },
    { enunciado: "Un cono tiene generatriz 10 cm y radio 6 cm. Calcula su área total y su volumen.", pasos: ["h = √(100 − 36) = 8 cm.", "A_T = π · 6 · 10 + π · 36 = 96π ≈ 301,6 cm².", "V = π · 36 · 8 / 3 = 96π ≈ 301,6 cm³."], resultado: "≈ 301,6 cm² y ≈ 301,6 cm³ (coinciden numéricamente por casualidad)." },
    { enunciado: "Calcula el volumen de una pelota de 12 cm de diámetro y la cantidad de cuero que la recubre.", pasos: ["r = 6 cm.", "V = 4π · 216 / 3 = 288π ≈ 904,8 cm³.", "A = 4π · 36 = 144π ≈ 452,4 cm²."], resultado: "≈ 905 cm³ de aire y ≈ 452 cm² de cuero." },
    { enunciado: "Un depósito cilíndrico de 2 m de diámetro y 3 m de altura está al 70 %. ¿Cuántos litros contiene?", pasos: ["V = π · 1² · 3 ≈ 9,42 m³.", "70 %: 6,60 m³.", "6,60 m³ = 6.600 L."], resultado: "Unos 6.600 litros." },
  ],
  errores: [
    "Usar el diámetro en lugar del radio en las fórmulas del círculo, el cilindro o la esfera.",
    "Olvidar dividir entre 3 el volumen de pirámides y conos.",
    "Confundir la altura de la pirámide o el cono con la apotema o la generatriz.",
    "Pasar de m³ a dm³ multiplicando por 100 en lugar de por 1.000.",
    "Sumar en un cuerpo compuesto superficies que están pegadas y no se ven.",
    "Calcular el área cuando se pregunta la capacidad, o al revés.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Calcula el área de un trapecio de bases 12 y 8 cm y altura 5 cm.", sol: "(12 + 8) · 5 / 2 = 50 cm²." },
    { nivel: "básico", q: "Calcula la longitud y el área de un círculo de 7 cm de radio.", sol: "L = 14π ≈ 44 cm. A = 49π ≈ 153,9 cm²." },
    { nivel: "básico", q: "Halla la diagonal de un cubo de 5 cm de arista.", sol: "5√3 ≈ 8,66 cm." },
    { nivel: "básico", q: "Calcula el área total y el volumen de un cubo de 4 cm de arista.", sol: "A = 6 · 16 = 96 cm². V = 64 cm³." },
    { nivel: "básico", q: "Volumen de un ortoedro de 30 × 20 × 15 cm en litros.", sol: "9.000 cm³ = 9 L." },
    { nivel: "básico", q: "Calcula el volumen de un cilindro de 3 cm de radio y 8 cm de altura.", sol: "72π ≈ 226,2 cm³." },
    { nivel: "básico", q: "Calcula el área lateral de un cilindro de 10 cm de diámetro y 20 cm de altura.", sol: "2π · 5 · 20 = 200π ≈ 628,3 cm²." },
    { nivel: "básico", q: "Volumen de un cono de radio 4 cm y altura 9 cm.", sol: "π · 16 · 9 / 3 = 48π ≈ 150,8 cm³." },
    { nivel: "básico", q: "Volumen de una pirámide de base rectangular 6 × 4 m y altura 5 m.", sol: "24 · 5 / 3 = 40 m³." },
    { nivel: "básico", q: "Área y volumen de una esfera de 3 cm de radio.", sol: "A = 36π ≈ 113,1 cm². V = 36π ≈ 113,1 cm³." },
    { nivel: "básico", q: "Expresa en litros: a) 2,5 m³ b) 750 cm³ c) 4 dm³.", sol: "a) 2.500 L b) 0,75 L c) 4 L." },
    { nivel: "básico", q: "Expresa en m²: a) 3 ha b) 45.000 cm² c) 0,2 km².", sol: "a) 30.000 m² b) 4,5 m² c) 200.000 m²." },
    { nivel: "medio", q: "Calcula la generatriz de un cono de altura 15 cm y radio 8 cm, y su área lateral.", sol: "g = √(225 + 64) = 17 cm. A_lat = π · 8 · 17 = 136π ≈ 427,3 cm²." },
    { nivel: "medio", q: "Una pirámide hexagonal regular tiene lado de base 4 cm y apotema de la pirámide 10 cm. Calcula su área lateral.", sol: "P = 24. A_lat = 24 · 10 / 2 = 120 cm²." },
    { nivel: "medio", q: "Calcula el área total de un prisma hexagonal regular de lado 6 cm y altura 10 cm.", sol: "ap base = 6√3/2 ≈ 5,2. A_b = 36 · 5,2 / 2 ≈ 93,5 cm². A_lat = 360 cm². A_T ≈ 547 cm²." },
    { nivel: "medio", q: "¿Qué altura debe tener una lata de 3,2 cm de radio para contener 330 mL?", sol: "h = 330/(π · 10,24) ≈ 10,3 cm." },
    { nivel: "medio", q: "Un balón tiene 22 cm de diámetro. ¿Cuántos litros de aire contiene?", sol: "r = 11. V = 4π · 1.331/3 ≈ 5.575 cm³ ≈ 5,6 L." },
    { nivel: "medio", q: "Calcula el volumen de una semiesfera de 10 cm de radio.", sol: "(4π · 1.000/3)/2 ≈ 2.094,4 cm³." },
    { nivel: "medio", q: "¿Cabe un paraguas de 90 cm en una maleta de 70 × 40 × 30 cm?", sol: "D = √(4.900 + 1.600 + 900) = √7.400 ≈ 86 cm. No cabe." },
    { nivel: "medio", q: "Una piscina de 12 × 6 m tiene 1,8 m de profundidad. ¿Cuánto cuesta llenarla si el m³ de agua cuesta 1,5 €? ¿Y pintar su interior a 8 €/m²?", sol: "V = 129,6 m³ → 194,40 €. Área: 72 + 2 · 12 · 1,8 + 2 · 6 · 1,8 = 136,8 m² → 1.094,40 €." },
    { nivel: "medio", q: "Halla la altura de una pirámide cuadrangular regular de lado 8 cm y apotema 5 cm, y su volumen.", sol: "h = √(25 − 16) = 3 cm. V = 64 · 3 / 3 = 64 cm³." },
    { nivel: "medio", q: "Si se triplica el radio de una esfera, ¿cuánto aumenta su área? ¿Y su volumen?", sol: "Área × 9, volumen × 27." },
    { nivel: "medio", q: "Una cápsula está formada por un cilindro de radio 2 cm y altura 6 cm y dos semiesferas en los extremos. Calcula su volumen.", sol: "Cilindro 24π + esfera 32π/3 ≈ 75,4 + 33,5 = 108,9 cm³." },
    { nivel: "medio", q: "Calcula el volumen de un cubo de agua con forma de tronco de cono de radios 15 y 10 cm y altura 24 cm, sabiendo que el cono completo tendría 72 cm de alto.", sol: "V = π·225·72/3 − π·100·48/3 = 5.400π − 1.600π = 3.800π ≈ 11.938 cm³ ≈ 11,9 L." },
    { nivel: "avanzado", q: "Un silo es un cilindro de 4 m de diámetro y 10 m de alto con un cono de 1,5 m de altura encima. Calcula su volumen y la chapa necesaria (sin la base).", sol: "V = π·4·10 + π·4·1,5/3 = 40π + 2π = 42π ≈ 131,9 m³. g = 2,5 m. Chapa: 2π·2·10 + π·2·2,5 = 45π ≈ 141,4 m²." },
    { nivel: "avanzado", q: "Se funde una esfera de plomo de 6 cm de radio para hacer cilindros de 1 cm de radio y 4 cm de altura. ¿Cuántos salen?", sol: "V esfera = 288π. V cilindro = 4π. Salen 72." },
    { nivel: "avanzado", q: "Una esfera está inscrita en un cilindro (r y altura 2r). Comprueba que el volumen de la esfera es 2/3 del del cilindro.", sol: "V_cil = πr² · 2r = 2πr³. (4/3)πr³ / 2πr³ = 2/3 ✓ (descubrimiento de Arquímedes)." },
    { nivel: "avanzado", q: "Un vaso cónico de 8 cm de altura y 4 cm de radio se llena de agua hasta la mitad de su altura. ¿Qué fracción del volumen contiene?", sol: "El agua forma un cono semejante con k = 1/2: (1/2)³ = 1/8 del volumen." },
    { nivel: "avanzado", q: "¿Qué ocupa menos material: un brik de 1 L con forma de cubo o una lata cilíndrica de 1 L con h = 2r?", sol: "Cubo: arista 10 cm, área 600 cm². Cilindro: 2πr³ = 1.000 → r ≈ 5,42; área = 6πr² ≈ 553,6 cm². La lata gasta menos." },
    { nivel: "avanzado", q: "Calcula la superficie de la Tierra y la fracción cubierta por océanos (71 %) sabiendo que r ≈ 6.371 km.", sol: "A = 4π · 6.371² ≈ 510 millones km². Océanos ≈ 362 millones km²." },
    { nivel: "avanzado", q: "Un embudo es un cono de 10 cm de diámetro y 12 cm de altura. Si el líquido sale a 5 mL/s, ¿cuánto tarda en vaciarse lleno?", sol: "V = π · 25 · 12/3 = 100π ≈ 314 mL. Tarda ≈ 63 s." },
  ],
  quiz: [
    { q: "Área de un triángulo de base 10 y altura 6:", o: ["60", "30", "16", "36"], a: 1, e: "b · h / 2." },
    { q: "Área del círculo de radio 2:", o: ["4π", "2π", "8π", "π"], a: 0, e: "πr²." },
    { q: "Diagonal de un cubo de arista a:", o: ["a√2", "a√3", "3a", "a²"], a: 1, e: "√(3a²)." },
    { q: "Volumen de cualquier prisma:", o: ["A_b · h / 3", "A_b · h", "P · h", "A_lat · h"], a: 1, e: "Base por altura." },
    { q: "Área lateral del cilindro:", o: ["πr²h", "2πrh", "πrg", "4πr²"], a: 1, e: "Rectángulo 2πr × h." },
    { q: "Volumen del cilindro de r = 2 y h = 5:", o: ["10π", "20π", "40π", "20"], a: 1, e: "π · 4 · 5." },
    { q: "La generatriz del cono cumple…", o: ["g = h + r", "g² = h² + r²", "g = 2r", "g² = h² − r²"], a: 1, e: "Pitágoras." },
    { q: "Área lateral del cono:", o: ["πrg", "2πrg", "πr²", "πrh"], a: 0, e: "Sector circular." },
    { q: "Un cono es … del cilindro de igual base y altura.", o: ["la mitad", "un tercio", "dos tercios", "un cuarto"], a: 1, e: "V = πr²h/3." },
    { q: "Volumen de la esfera:", o: ["4πr²", "4πr³/3", "πr³", "2πr³"], a: 1, e: "Arquímedes." },
    { q: "Área de la esfera:", o: ["πr²", "2πr²", "4πr²", "4πr³/3"], a: 2, e: "Cuatro círculos máximos." },
    { q: "1 m³ equivale a…", o: ["100 L", "1.000 L", "10 L", "10.000 L"], a: 1, e: "1 dm³ = 1 L." },
    { q: "1 m² son…", o: ["100 cm²", "1.000 cm²", "10.000 cm²", "100.000 cm²"], a: 2, e: "× 100 dos veces." },
    { q: "1 hectárea son…", o: ["100 m²", "1.000 m²", "10.000 m²", "1 km²"], a: 2, e: "1 hm²." },
    { q: "Si se duplican las medidas de un cuerpo, su volumen…", o: ["× 2", "× 4", "× 6", "× 8"], a: 3, e: "k³." },
    { q: "Apotema de pirámide de lado 6 y altura 4:", o: ["5", "7", "10", "√52"], a: 0, e: "√(16 + 9)." },
    { q: "El volumen de un tronco de cono se halla…", o: ["sumando dos conos", "restando dos conos", "con 4πr²", "con πrg"], a: 1, e: "Grande − pequeño." },
    { q: "Volumen de un ortoedro 2 × 3 × 5:", o: ["10", "30", "31", "60"], a: 1, e: "Producto." },
    { q: "Para saber cuánta pintura hace falta, se calcula…", o: ["el volumen", "el área", "el perímetro", "la diagonal"], a: 1, e: "Superficie." },
    { q: "La longitud del ecuador terrestre es aproximadamente…", o: ["4.000 km", "12.700 km", "40.000 km", "400.000 km"], a: 2, e: "2π · 6.371." },
  ],
  examen: [
    { q: "Volumen de un cubo de arista 3 cm:", o: ["9 cm³", "27 cm³", "18 cm³", "54 cm³"], a: 1, e: "3³." },
    { q: "Diagonal de un ortoedro 2 × 3 × 6:", o: ["7", "11", "√13", "6"], a: 0, e: "√49." },
    { q: "Volumen del cono r = 3, h = 4:", o: ["12π", "36π", "4π", "9π"], a: 0, e: "π · 9 · 4 / 3." },
    { q: "Área de la esfera de r = 5:", o: ["100π", "25π", "500π/3", "50π"], a: 0, e: "4π · 25." },
    { q: "2.500 cm³ son…", o: ["25 L", "2,5 L", "0,25 L", "250 L"], a: 1, e: "2,5 dm³." },
    { q: "Altura del cono con g = 5 y r = 3:", o: ["4", "8", "2", "√34"], a: 0, e: "√(25 − 9)." },
    { q: "Área total del cilindro r = 1, h = 4:", o: ["8π", "10π", "4π", "6π"], a: 1, e: "8π + 2π." },
    { q: "Esfera de radio doble: su área es…", o: ["el doble", "4 veces", "8 veces", "igual"], a: 1, e: "k²." },
  ],
  feynman: ["Cómo se obtiene la fórmula del área del cilindro a partir de su desarrollo", "Por qué el volumen del cono es un tercio del del cilindro", "Cómo se usa Pitágoras en pirámides y conos", "Qué relación hay entre m³, dm³ y litros"],
  figura: {
    titulo: "Áreas y volúmenes en una mirada",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen: volúmenes de prisma y cilindro, pirámide y cono, esfera, y unidades">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Prisma · cilindro", "V = A_base · h · cilindro: πr²h · A_lat = 2πrh", "var(--pen)"], ["Pirámide · cono", "V = A_base · h / 3 · g² = h² + r² · A_lat = πrg", "var(--red)"], ["Esfera", "A = 4πr² · V = 4πr³/3", "var(--leaf)"], ["Unidades", "área × 100 · volumen × 1.000 · 1 dm³ = 1 L", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="15" font-weight="700" fill="${c}" ${D}>${n}</text><text x="210" y="${43 + i * 50}" font-size="14" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "Qi-eedxIlJc", titulo: "Volumen de una esfera conociendo radio o diámetro", canal: "Matemáticas profe Alex", vistas: 966673, megusta: 0, busqueda: "volumen esfera" },
  mapa: mapa("ÁREAS Y VOLÚMENES", "var(--pen)", [
    ["Planas", "áreas y Pitágoras", "var(--leaf)"],
    ["Prismas · cilindros", "A_b · h", "var(--pen)"],
    ["Pirámides · conos", "A_b · h / 3", "var(--red)"],
    ["Esfera", "4πr² · 4πr³/3", "var(--inf)"],
  ], 230),
  glosario: [
    ["Área lateral", "Suma de las áreas de las caras laterales de un cuerpo."],
    ["Área total", "Área lateral más el área de las bases."],
    ["Volumen", "Espacio que ocupa un cuerpo."],
    ["Capacidad", "Cantidad de líquido que cabe en un recipiente; 1 dm³ = 1 L."],
    ["Prisma", "Cuerpo con dos bases poligonales iguales y paralelas y caras laterales paralelogramos."],
    ["Ortoedro", "Prisma cuyas caras son todas rectángulos."],
    ["Pirámide", "Cuerpo con una base poligonal y caras triangulares que se unen en un vértice."],
    ["Apotema de la pirámide", "Altura de cada cara lateral triangular de una pirámide regular."],
    ["Cilindro", "Cuerpo de revolución con dos bases circulares."],
    ["Cono", "Cuerpo de revolución con una base circular y un vértice."],
    ["Generatriz", "Segmento del vértice del cono a la circunferencia de la base."],
    ["Esfera", "Cuerpo formado por los puntos a distancia r de un centro."],
    ["Tronco", "Parte de una pirámide o cono que queda al cortar la punta con un plano paralelo a la base."],
    ["Desarrollo plano", "Figura que se obtiene al abrir un cuerpo y extenderlo sobre un plano."],
    ["Hectárea", "Unidad de superficie igual a 10.000 m²."],
  ],
  situacion: {
    titulo: "El envase perfecto",
    reto: "Una cooperativa de zumos quiere lanzar un envase de 500 mL que use el mínimo material posible. Vuestro grupo estudiará varios diseños (ortoedro, cilindro, prisma hexagonal) y propondrá el más eficiente y atractivo.",
    pasos: [
      "Medid tres envases reales de supermercado y calculad su volumen y su superficie; comparad con la capacidad que indican.",
      "Diseñad tres envases de 500 mL con formas distintas y calculad sus dimensiones.",
      "Calculad la superficie de cada diseño y el cociente superficie/volumen.",
      "Construid los desarrollos planos en cartulina y montad las maquetas.",
      "Elegid el mejor diseño valorando material, comodidad y transporte, y preparad una presentación.",
    ],
    producto: "Tres maquetas de cartulina, una tabla comparativa y una presentación de dos minutos defendiendo el envase elegido.",
    evaluacion: ["Aplica correctamente las fórmulas de área y volumen.", "Usa Pitágoras y las unidades de capacidad sin errores.", "Construye desarrollos planos precisos.", "Argumenta la decisión con datos y criterios de sostenibilidad."],
  },
  tarjetas: [
    ["Área del círculo", "πr²"],
    ["Diagonal del ortoedro", "√(a² + b² + c²)"],
    ["Volumen del prisma", "A_b · h"],
    ["Área lateral del cilindro", "2πrh"],
    ["Volumen del cilindro", "πr²h"],
    ["Volumen de pirámide o cono", "A_b · h / 3"],
    ["Generatriz del cono", "g² = h² + r²"],
    ["Área lateral del cono", "πrg"],
    ["Área de la esfera", "4πr²"],
    ["Volumen de la esfera", "4πr³/3"],
    ["1 dm³", "1 litro"],
    ["Semejanza", "áreas × k², volúmenes × k³"],
  ],
  familias: ["Medid juntos una lata y comprobad si la capacidad de la etiqueta es correcta.", "Calculad cuánta pintura haría falta para pintar una habitación de casa.", "Comparad el precio por litro de envases de distinto tamaño.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido de la medida y espacial: áreas de figuras planas, teorema de Pitágoras en el plano y el espacio, áreas y volúmenes de prismas, pirámides, cilindros, conos y esferas, cuerpos compuestos y troncos, unidades de superficie, volumen y capacidad (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Experimento de llenar un cilindro con tres conos de arena.", "Construcción de desarrollos planos en cartulina.", "Medición de envases reales y comparación con la etiqueta.", "GeoGebra 3D para visualizar desarrollos y secciones."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "GeoGebra 3D: cuerpos geométricos", url: "https://www.geogebra.org/3d" },
    { t: "Instituto Geográfico Nacional: la forma de la Tierra", url: "https://www.ign.es/" },
  ],
  revisado: "2026-11-13",
};
