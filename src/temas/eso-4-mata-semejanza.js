// Matemáticas A 4º ESO · Semejanza y teorema de Tales. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, comparar, barras } = require("./_eso4L2-mata");

const pol = (pts, c, fill = "none", w = 2.5, dash = false) => `<polygon points="${pts.map((p) => p.join(",")).join(" ")}" fill="${fill}" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"${dash ? ' stroke-dasharray="5 4"' : ""}/>`;
const lin = (x1, y1, x2, y2, c = "var(--ink)", w = 2, dash = false) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}"${dash ? ' stroke-dasharray="5 4"' : ""}/>`;
const pt = (x, y, c = "var(--ink)") => `<circle cx="${x}" cy="${y}" r="3.5" fill="${c}"/>`;

const figSemejantes = lienzo("Dos figuras semejantes: un triángulo pequeño y otro el doble de grande, con los mismos ángulos y lados proporcionales", pol([[20, 140], [90, 140], [40, 90]], "var(--pen)", "var(--card)") + pol([[110, 160], [250, 160], [150, 60]], "var(--red)", "var(--card)") + tx(55, 156, "4", { c: "var(--pen)" }) + tx(180, 175, "8", { c: "var(--red)" }) + tx(22, 112, "3", { c: "var(--pen)" }) + tx(118, 108, "6", { c: "var(--red)" }) + tx(130, 22, "Misma forma, distinto tamaño", { fs: 13, c: "var(--muted)" }) + tx(130, 40, "razón k = 2", { fs: 12, c: "var(--leaf)" }), 185);

const razon = cajas("Razón de semejanza: si k es mayor que 1 es una ampliación, si es menor que 1 una reducción, y si es 1 las figuras son iguales", [
  ["k > 1", ["ampliación", "k = 3: el triple"], "var(--red)"], ["k < 1", ["reducción", "k = 1/2: la mitad"], "var(--pen)"],
  ["k = 1", ["figuras iguales", "congruentes"], "var(--leaf)"], ["k = lado'/lado", ["mismo para", "todos los lados"], "var(--inf)"],
], "Razón de semejanza k");

const escala = lienzo("Escala de un plano: 1 a 50 significa que 1 centímetro en el plano son 50 centímetros en la realidad", `<rect x="20" y="50" width="100" height="70" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>` + lin(20, 135, 120, 135, "var(--pen)") + tx(70, 150, "8 cm en el plano", { fs: 11, c: "var(--pen)" }) + tx(160, 90, "× 50 →", { fs: 13, c: "var(--red)" }) + `<rect x="196" y="56" width="50" height="35" fill="none" stroke="var(--leaf)" stroke-width="2"/>` + tx(221, 110, "4 m reales", { fs: 11, c: "var(--leaf)" }) + tx(130, 28, "Escala 1 : 50", { fs: 15, c: "var(--ink)" }) + tx(130, 172, "real = plano × 50 · plano = real ÷ 50", { fs: 11, c: "var(--muted)" }), 185);

const talesFig = lienzo("Teorema de Tales: rectas paralelas cortadas por dos secantes determinan segmentos proporcionales", lin(30, 20, 120, 170, "var(--ink)") + lin(30, 20, 240, 170, "var(--ink)") + lin(10, 70, 250, 70, "var(--pen)", 2, true) + lin(10, 120, 250, 120, "var(--red)", 2, true) + lin(10, 165, 250, 165, "var(--leaf)", 2, true) + pt(60, 70, "var(--pen)") + pt(100, 70, "var(--pen)") + pt(90, 120, "var(--red)") + pt(170, 120, "var(--red)") + pt(117, 165, "var(--leaf)") + pt(233, 165, "var(--leaf)") + tx(58, 98, "a", { c: "var(--ink)", fs: 13 }) + tx(92, 148, "b", { c: "var(--ink)", fs: 13 }) + tx(150, 92, "a'", { c: "var(--ink)", fs: 13 }) + tx(215, 140, "b'", { c: "var(--ink)", fs: 13 }) + tx(200, 40, "a/b = a'/b'", { fs: 14, c: "var(--red)" }), 185);

const posicionTales = lienzo("Triángulos en posición de Tales: un triángulo pequeño dentro de otro grande con un lado paralelo y el ángulo común", pol([[40, 160], [230, 160], [80, 30]], "var(--red)", "var(--card)") + lin(53, 117, 180, 117, "var(--pen)", 2.5) + tx(30, 172, "A", { fs: 12 }) + tx(72, 26, "C", { fs: 12 }) + tx(238, 172, "B", { fs: 12 }) + tx(44, 116, "D", { fs: 12, c: "var(--pen)" }) + tx(190, 118, "E", { fs: 12, c: "var(--pen)" }) + tx(160, 60, "DE ∥ AB", { fs: 13, c: "var(--pen)" }) + tx(130, 182, "CD/CA = CE/CB = DE/AB", { fs: 12, c: "var(--red)" }), 190);

const criterios = cajas("Criterios de semejanza de triángulos: dos ángulos iguales, tres lados proporcionales o dos lados proporcionales y el ángulo que forman igual", [
  ["AA", ["dos ángulos", "iguales"], "var(--pen)"], ["LLL", ["tres lados", "proporcionales"], "var(--red)"],
  ["LAL", ["dos lados prop. y", "ángulo comprendido igual"], "var(--leaf)"], ["Rectángulos", ["basta un ángulo", "agudo igual"], "var(--inf)"],
], "Criterios de semejanza");

const sombras = lienzo("Medir la altura de un árbol con su sombra: el árbol y un palo forman triángulos semejantes con sus sombras", lin(10, 160, 250, 160, "var(--muted)") + `<rect x="54" y="40" width="10" height="120" fill="var(--leaf)"/><circle cx="59" cy="38" r="24" fill="var(--leaf)" opacity="0.7"/>` + lin(59, 40, 170, 160, "var(--sun)", 2, true) + lin(195, 120, 235, 160, "var(--sun)", 2, true) + lin(195, 120, 195, 160, "var(--red)", 4) + tx(30, 105, "h ?", { fs: 14, c: "var(--leaf)" }) + tx(115, 176, "sombra 12 m", { fs: 11, c: "var(--ink)" }) + tx(214, 176, "1,5 m", { fs: 11 }) + tx(180, 112, "1 m", { fs: 11, c: "var(--red)" }) + tx(180, 24, "h/12 = 1/1,5 → h = 8 m", { fs: 12, c: "var(--pen)" }), 185);

const perimetros = barras("Si la razón de semejanza es 3, los perímetros se multiplican por 3, las áreas por 9 y los volúmenes por 27", [["Longitud", 3], ["Área", 9], ["Volumen", 27]], { titulo: "Con k = 3: se multiplica por…", c: "var(--red)" });

const areasFig = lienzo("Áreas de figuras semejantes: un cuadrado de lado doble contiene cuatro cuadrados iguales al pequeño", `<rect x="30" y="70" width="40" height="40" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>` + tx(50, 130, "lado 1", { fs: 11, c: "var(--pen)" }) + tx(50, 145, "área 1", { fs: 11, c: "var(--pen)" }) + [0, 1].map((i) => [0, 1].map((j) => `<rect x="${130 + i * 40}" y="${50 + j * 40}" width="40" height="40" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>`).join("")).join("") + tx(170, 150, "lado 2 · área 4", { fs: 11, c: "var(--red)" }) + tx(130, 28, "áreas: × k²", { fs: 14, c: "var(--ink)" }) + tx(130, 172, "k = 2 → área × 4", { fs: 12, c: "var(--muted)" }), 185);

const volFig = formula("Relación entre volúmenes de cuerpos semejantes", "V' = k³ · V", ["longitudes × k · áreas × k²", "maqueta 1:10 → volumen 1:1.000", "por eso un gigante no podría sostenerse"], "var(--leaf)");

const pitagoras = lienzo("Teorema de Pitágoras: en un triángulo rectángulo el cuadrado de la hipotenusa es la suma de los cuadrados de los catetos", pol([[60, 150], [180, 150], [60, 60]], "var(--pen)", "var(--card)") + `<rect x="60" y="138" width="12" height="12" fill="none" stroke="var(--ink)" stroke-width="1.5"/>` + tx(120, 168, "b = 4", { fs: 12 }) + tx(40, 110, "a = 3", { fs: 12 }) + tx(140, 96, "c = 5", { fs: 12, c: "var(--red)" }) + tx(130, 28, "c² = a² + b²", { fs: 15, c: "var(--red)" }) + tx(215, 80, "9 + 16 = 25", { fs: 12, c: "var(--leaf)" }), 185);

const alturaHip = lienzo("Teoremas del cateto y de la altura: la altura sobre la hipotenusa divide el triángulo rectángulo en dos triángulos semejantes", pol([[20, 150], [240, 150], [90, 50]], "var(--ink)", "var(--card)") + lin(90, 50, 90, 150, "var(--red)", 2.5) + `<rect x="90" y="140" width="10" height="10" fill="none" stroke="var(--red)" stroke-width="1.5"/>` + tx(55, 166, "m", { fs: 13, c: "var(--pen)" }) + tx(165, 166, "n", { fs: 13, c: "var(--leaf)" }) + tx(100, 110, "h", { fs: 13, c: "var(--red)" }) + tx(130, 24, "h² = m · n", { fs: 14, c: "var(--red)" }) + tx(200, 70, "b² = a · n", { fs: 12, c: "var(--leaf)" }) + tx(200, 90, "c² = a · m", { fs: 12, c: "var(--pen)" }), 185);

const homotecia = lienzo("Homotecia de centro O y razón 2: cada punto se aleja del centro al doble de distancia", pt(30, 160, "var(--ink)") + tx(22, 176, "O", { fs: 12 }) + pol([[70, 130], [100, 130], [80, 100]], "var(--pen)", "var(--card)") + pol([[110, 100], [170, 100], [130, 40]], "var(--red)", "none") + lin(30, 160, 110, 100, "var(--muted)", 1.2, true) + lin(30, 160, 170, 100, "var(--muted)", 1.2, true) + lin(30, 160, 130, 40, "var(--muted)", 1.2, true) + tx(205, 60, "OA' = 2·OA", { fs: 12, c: "var(--red)" }) + tx(205, 150, "razón k = 2", { fs: 12, c: "var(--pen)" }), 185);

const resolver = pasos("Pasos para resolver un problema de semejanza", ["Dibujar y localizar los triángulos", "Justificar la semejanza (criterio)", "Emparejar lados homólogos", "Plantear la proporción", "Despejar y comprobar unidades"], "Problemas de semejanza");

const aplicaciones = comparar("Aplicaciones de la semejanza en la vida real: mapas y planos, fotografía y medición de distancias inaccesibles", [
  ["Mapas", ["escala", "1 : 25.000", "distancias"], "var(--pen)"],
  ["Imagen", ["fotocopias", "pantallas", "zoom"], "var(--red)"],
  ["Medir", ["alturas", "anchura de ríos", "sombras"], "var(--leaf)"],
], "¿Dónde se usa?");

const formatoA = lienzo("Formatos de papel DIN A: cada hoja es la mitad de la anterior y todas son semejantes con razón raíz de 2", `<rect x="20" y="30" width="200" height="140" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>` + lin(120, 30, 120, 170, "var(--red)", 2) + lin(120, 100, 220, 100, "var(--leaf)", 2) + tx(70, 105, "A4", { fs: 16, c: "var(--pen)" }) + tx(170, 70, "A5", { fs: 14, c: "var(--red)" }) + tx(170, 140, "A5", { fs: 14, c: "var(--red)" }) + tx(240, 105, "√2", { fs: 13, c: "var(--leaf)" }) + tx(120, 22, "largo/ancho = √2 ≈ 1,414", { fs: 12, c: "var(--muted)" }), 185);

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Semejanza y teorema de Tales",
  minutos: 105,
  objetivos: [
    "Reconocer figuras semejantes y calcular su razón de semejanza",
    "Usar escalas en planos y mapas",
    "Aplicar el teorema de Tales y los triángulos en posición de Tales",
    "Utilizar los criterios de semejanza de triángulos",
    "Relacionar la razón de semejanza con perímetros, áreas y volúmenes",
    "Resolver problemas de medida indirecta con semejanza y Pitágoras",
  ],
  claves: ["semejanza", "razón de semejanza", "escala", "Tales", "criterios", "homotecia", "Pitágoras", "medida indirecta"],
  pregunta: {
    texto: "¿Cómo pudo medir Tales de Mileto la altura de la gran pirámide de Egipto sin subir a ella?",
    respuesta: "Clavó un bastón en el suelo y esperó al momento en que la sombra del bastón medía lo mismo que el bastón. En ese instante, la sombra de la pirámide también medía lo mismo que su altura. Los triángulos que forman el bastón y la pirámide con sus sombras son <mark>semejantes</mark>, así que sus lados son <b>proporcionales</b>.",
  },
  lectura: {
    titulo: "Medir lo que no se puede tocar",
    html: `<p>Cuenta la tradición que, hacia el año 600 a. C., el sabio griego <b>Tales de Mileto</b> viajó a Egipto y asombró a los sacerdotes midiendo la altura de la gran pirámide sin subir a ella. Solo necesitó un bastón, el sol y una idea brillante: los rayos del sol llegan paralelos, así que la pirámide y el bastón forman con sus sombras triángulos de la <b>misma forma</b>. Si la sombra del bastón es igual a su altura, la sombra de la pirámide también lo es.</p><p>Esa idea, la <b>semejanza</b>, es una de las herramientas más útiles de la geometría. Gracias a ella se dibujan mapas y planos a escala, se calcula la distancia a un barco desde la costa, se amplía una fotografía sin deformarla o se construye la maqueta de un edificio. Los topógrafos miden la anchura de un río sin cruzarlo y los astrónomos griegos estimaron el tamaño de la Luna con razonamientos parecidos.</p><p>En este tema aprenderás cuándo dos figuras son semejantes, cómo se usa la razón de semejanza para calcular longitudes, áreas y volúmenes, y por qué una maqueta diez veces menor pesa mil veces menos. También repasarás el teorema de Pitágoras, que se demuestra fácilmente con triángulos semejantes.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Figuras semejantes</h3><p>Dos figuras son <b>semejantes</b> cuando tienen la <b>misma forma</b> aunque distinto tamaño: una es una ampliación o una reducción de la otra. Matemáticamente, dos polígonos son semejantes si sus <b>ángulos correspondientes son iguales</b> y sus <b>lados correspondientes son proporcionales</b>. Los lados que se corresponden se llaman <b>lados homólogos</b>.</p><p>Una fotografía y su ampliación, un mapa y el territorio que representa o dos balones de distinto tamaño son ejemplos de figuras semejantes. En cambio, un rectángulo de 2 × 3 y otro de 4 × 5 no lo son: aunque tienen los mismos ángulos (todos rectos), 4/2 = 2 pero 5/3 ≈ 1,67, así que sus lados no son proporcionales. Fíjate en que todos los cuadrados son semejantes entre sí, igual que todas las circunferencias, pero no todos los rectángulos ni todos los triángulos.</p>`, svg: figSemejantes },
    { html: `<h3>1.2 La razón de semejanza</h3><p>El cociente entre dos lados homólogos es siempre el mismo y se llama <b>razón de semejanza</b>, k: <mark>k = a'/a = b'/b = c'/c</mark>. Si k &gt; 1 la segunda figura es una <b>ampliación</b>; si k &lt; 1, una <b>reducción</b>; y si k = 1, las figuras son <b>iguales</b> (congruentes).</p><p>Por ejemplo, si un triángulo tiene lados 3, 4 y 5 cm y otro semejante tiene 9, 12 y 15 cm, la razón es k = 3: cada lado se ha multiplicado por 3. Al revés, del grande al pequeño la razón es 1/3. Conocida la razón, cualquier lado de una figura se obtiene multiplicando el lado homólogo de la otra por k. Al ampliar una foto de 10 × 15 a 20 × 30, la razón es 2; pero si se pide 20 × 25, la foto se deformaría o habría que recortarla.</p>`, svg: razon },
    { html: `<h3>1.3 Planos, mapas y escalas</h3><p>Un plano o un mapa es una figura semejante a la realidad, reducida. La <b>escala</b> indica la razón entre las medidas del dibujo y las reales y se escribe como <mark>1 : n</mark>: 1 unidad en el plano equivale a n unidades en la realidad. En un plano 1 : 50, 8 cm del dibujo son 8 · 50 = 400 cm = 4 m reales. En un mapa 1 : 200.000, 3 cm son 600.000 cm = 6 km.</p><p>Para pasar del plano a la realidad se <b>multiplica</b> por n, y de la realidad al plano se <b>divide</b>. Es fundamental cuidar las unidades: conviene pasarlo todo a centímetros y, al final, convertir a metros o kilómetros. Muchos mapas incluyen también una <b>escala gráfica</b>, un segmento que indica cuánto representa, útil porque sigue siendo válida aunque se amplíe o reduzca el mapa. Las maquetas usan escalas de ampliación o reducción: una maqueta de tren 1 : 87 es 87 veces menor que el tren real.</p>`, svg: escala },
    { html: `<h3>1.4 El teorema de Tales</h3><p>El <b>teorema de Tales</b> dice que si dos rectas secantes son cortadas por varias <b>rectas paralelas</b>, los segmentos que determinan sobre una de ellas son <b>proporcionales</b> a los que determinan sobre la otra: <mark>a/b = a'/b'</mark>. Es decir, las paralelas «reparten» las dos rectas en la misma proporción.</p><p>Por ejemplo, si en una de las secantes los segmentos miden 2 cm y 3 cm, y en la otra el primero mide 4 cm, el segundo mide x con 2/3 = 4/x, así que x = 6 cm. El teorema permite dividir un segmento en partes iguales o proporcionales con regla y compás: se traza una semirrecta auxiliar, se marcan en ella segmentos iguales y se trazan paralelas. Es la base de todos los cálculos de semejanza de este tema.</p>`, svg: talesFig, video: { id: "ifjbo-RyfNE", titulo: "Teorema de Tales, ejercicios resueltos", canal: "Daniel Carreón", vistas: 2162768, megusta: 0 } },
    { html: `<h3>1.5 Triángulos en posición de Tales</h3><p>Si en un triángulo ABC se traza un segmento DE <b>paralelo</b> a uno de sus lados, se forma un triángulo pequeño CDE que es <b>semejante</b> al grande CAB. Se dice que están en <b>posición de Tales</b>: comparten un ángulo (el vértice C) y tienen los lados opuestos paralelos. Por eso sus lados son proporcionales: <mark>CD/CA = CE/CB = DE/AB</mark>.</p><p>Esta configuración aparece constantemente: una escalera apoyada con un travesaño horizontal, el tejado de una casa con una viga paralela al suelo o la sombra de un objeto y la de una persona. Ejemplo: en un triángulo con CA = 10 cm y AB = 8 cm, se traza DE paralelo a AB con CD = 4 cm. Entonces DE/8 = 4/10, así que DE = 3,2 cm. Siempre conviene dibujar los dos triángulos por separado para emparejar bien los lados homólogos.</p>`, svg: posicionTales },
    { html: `<h3>1.6 Criterios de semejanza de triángulos</h3><p>Para saber si dos triángulos son semejantes no hace falta comprobar los seis elementos. Basta con uno de estos <b>criterios</b>: <b>1) AA</b>: tienen <b>dos ángulos iguales</b> (y por tanto el tercero también, porque suman 180°). <b>2) LLL</b>: sus <b>tres lados son proporcionales</b>. <b>3) LAL</b>: tienen <b>dos lados proporcionales y el ángulo comprendido igual</b>.</p><p>Para triángulos <b>rectángulos</b> es aún más fácil: basta con que tengan un <b>ángulo agudo igual</b>, porque el recto ya es común. Ejemplo: los triángulos de lados 6, 8, 10 y 9, 12, 15 son semejantes por LLL, porque 9/6 = 12/8 = 15/10 = 1,5. En cambio, 4, 5, 6 y 8, 10, 11 no lo son: 6 · 2 = 12 ≠ 11. Los criterios son la justificación que se exige al resolver un problema: antes de plantear la proporción, hay que explicar por qué los triángulos son semejantes.</p>`, svg: criterios, video: { id: "HBLPCEI_r4w", titulo: "Criterios de semejanza de triángulos", canal: "math2me", vistas: 767920, megusta: 0 } },
    { html: `<h3>1.7 Medidas indirectas: sombras y alturas</h3><p>La semejanza permite medir <b>longitudes inaccesibles</b>. El método de las sombras es el más conocido: en un mismo momento, los rayos del sol llegan paralelos, así que un objeto vertical y su sombra forman un triángulo rectángulo semejante al que forma cualquier otro objeto vertical con la suya. Si un palo de 1 m da una sombra de 1,5 m y la sombra de un árbol mide 12 m, la altura del árbol es <mark>h/12 = 1/1,5 → h = 8 m</mark>.</p><p>Otros métodos usan un <b>espejo</b> en el suelo (los ángulos de incidencia y reflexión son iguales), un <b>lápiz</b> sostenido con el brazo estirado o el «bastón de Jacob» de los navegantes. Los topógrafos miden la anchura de un río formando dos triángulos en posición de Tales en la orilla. En todos los casos el esquema es el mismo: localizar dos triángulos semejantes, uno con todas sus medidas conocidas, y plantear la proporción.</p>`, svg: sombras },
    { html: `<h3>2.1 Perímetros y áreas de figuras semejantes</h3><p>Si dos figuras son semejantes con razón k, todas sus <b>longitudes</b> están en razón k: lados, alturas, diagonales y también el <b>perímetro</b>. Si un triángulo tiene perímetro 12 cm y se amplía con k = 3, el nuevo perímetro es 36 cm.</p><p>Las <b>áreas</b>, en cambio, están en razón <mark>k²</mark>. Un cuadrado de lado 2 tiene área 4 veces la de un cuadrado de lado 1: caben cuatro cuadrados pequeños en él. Esto ocurre con cualquier figura, porque el área se obtiene multiplicando dos longitudes, y cada una se multiplica por k. Así, si un mapa a escala 1 : 1.000 muestra una parcela de 6 cm², su área real es 6 · 1.000² cm² = 6.000.000 cm² = 600 m². Un error muy común es multiplicar el área por k en lugar de por k²: una pizza de 30 cm de diámetro no es el doble que una de 15 cm, ¡es cuatro veces mayor!</p>`, svg: areasFig },
    { html: `<h3>2.2 Volúmenes de cuerpos semejantes</h3><p>Dos cuerpos geométricos son semejantes si uno es una ampliación o reducción del otro. Sus longitudes están en razón k, sus áreas en razón k² y sus <b>volúmenes</b> en razón <mark>k³</mark>, porque el volumen se obtiene multiplicando tres longitudes. Un cubo de arista 3 cm tiene un volumen 27 veces mayor que uno de 1 cm.</p><p>Esta propiedad tiene consecuencias sorprendentes. Una maqueta a escala 1 : 10 tiene un volumen (y un peso, si es del mismo material) <b>mil veces</b> menor que el objeto real. Un gigante diez veces más alto que una persona pesaría mil veces más, pero sus huesos, cuya sección crece solo como k², serían cien veces más resistentes: se romperían. Por eso los animales grandes, como los elefantes, tienen patas proporcionalmente mucho más gruesas que los pequeños. Galileo ya explicó este «principio de escala» en 1638.</p>`, svg: volFig },
    { html: `<h3>2.3 La regla k, k², k³</h3><p>Resumiendo: si la razón de semejanza es k, las <b>longitudes</b> se multiplican por k, las <b>áreas</b> por k² y los <b>volúmenes</b> por k³. Con k = 3, por 3, 9 y 27; con k = 1/2, por 1/2, 1/4 y 1/8. También se puede ir al revés: si las áreas de dos figuras semejantes están en razón 25, la razón de semejanza es √25 = 5; si los volúmenes están en razón 8, k = ∛8 = 2.</p><p>Ejemplo: dos botellas semejantes miden 20 cm y 30 cm de altura. La razón es k = 1,5. Si la pequeña tiene 0,5 L, la grande tiene 0,5 · 1,5³ = 1,6875 L, más del triple aunque solo es «un poco» más alta. Y si la etiqueta de la pequeña ocupa 40 cm², la de la grande ocupa 40 · 1,5² = 90 cm². Esta regla es muy útil para comparar precios de envases de distinto tamaño.</p>${tabla(["k", "longitud", "área", "volumen"], [["2", "× 2", "× 4", "× 8"], ["3", "× 3", "× 9", "× 27"], ["1/2", "× 1/2", "× 1/4", "× 1/8"]])}`, svg: perimetros },
    { html: `<h3>2.4 El teorema de Pitágoras</h3><p>En un <b>triángulo rectángulo</b>, el lado opuesto al ángulo recto se llama <b>hipotenusa</b> y los otros dos, <b>catetos</b>. El <b>teorema de Pitágoras</b> dice que <mark>c² = a² + b²</mark>: el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos. Con catetos 3 y 4, la hipotenusa es √(9 + 16) = 5.</p><p>El teorema sirve para calcular un lado conociendo los otros dos: si la hipotenusa es 13 y un cateto 5, el otro es √(169 − 25) = 12. También permite saber si un triángulo es rectángulo: 7, 24, 25 lo es porque 49 + 576 = 625. Los albañiles lo usan para comprobar ángulos rectos con la «regla 3-4-5». Combinado con la semejanza, resuelve muchos problemas: la diagonal de una pantalla, la altura de un triángulo isósceles o la longitud de una rampa. Las ternas como (3, 4, 5), (5, 12, 13) y (8, 15, 17) se llaman <b>ternas pitagóricas</b>.</p>`, svg: pitagoras, video: { id: "eTEBvBIz8Ok", titulo: "Teorema de Pitágoras, ejercicios resueltos", canal: "Daniel Carreón", vistas: 7183522, megusta: 0 } },
    { html: `<h3>2.5 Teoremas del cateto y de la altura</h3><p>Si en un triángulo rectángulo se traza la <b>altura sobre la hipotenusa</b>, el triángulo queda dividido en dos triángulos rectángulos más pequeños, y los tres son <b>semejantes</b> entre sí (cada par comparte un ángulo agudo). De esa semejanza salen dos teoremas. Llamemos m y n a las dos partes en que la altura divide a la hipotenusa a.</p><p><b>Teorema de la altura</b>: <mark>h² = m · n</mark>. <b>Teorema del cateto</b>: cada cateto al cuadrado es igual a la hipotenusa por su proyección: b² = a · n y c² = a · m. Ejemplo: si la hipotenusa se divide en m = 4 y n = 9, la altura es h = √36 = 6, y los catetos son √(13 · 4) ≈ 7,2 y √(13 · 9) ≈ 10,8. Sumando los dos teoremas del cateto se obtiene b² + c² = a(m + n) = a², que es una demostración del teorema de Pitágoras.</p>`, svg: alturaHip },
    { html: `<h3>2.6 Homotecias</h3><p>Una <b>homotecia</b> de centro O y razón k es una transformación que lleva cada punto P a otro P' de la misma recta OP de modo que <mark>OP' = k · OP</mark>. Si k &gt; 0, P' está del mismo lado que P; si k &lt; 0, al otro lado de O. Una homotecia transforma cada figura en otra <b>semejante</b> de razón |k|, con los lados correspondientes paralelos.</p><p>Las homotecias explican cómo funciona un proyector: la lámpara es el centro, la imagen pequeña se proyecta en una pantalla más lejana y se amplía con una razón igual al cociente de las distancias. También la cámara oscura y el ojo funcionan así, aunque con razón negativa: la imagen sale invertida. Para dibujar una homotecia se trazan semirrectas desde el centro a cada vértice y se mide sobre ellas k veces la distancia. Con GeoGebra se puede comprobar que perímetros y áreas cambian según k y k².</p>`, svg: homotecia },
    { html: `<h3>2.7 Resolver problemas de semejanza</h3><p>Casi todos los problemas de semejanza siguen el mismo camino. Primero, hacer un <b>dibujo</b> claro y localizar los triángulos o figuras implicados. Segundo, <b>justificar</b> por qué son semejantes con un criterio (paralelas, ángulo común, ángulos rectos…). Tercero, emparejar los <b>lados homólogos</b>, que son los opuestos a ángulos iguales. Cuarto, escribir la <b>proporción</b> con la incógnita. Por último, <b>despejar</b> y comprobar que el resultado tiene sentido.</p><p>Ejemplo: una persona de 1,70 m está a 6 m de una farola y su sombra mide 3 m. ¿Qué altura tiene la farola? Los triángulos persona-sombra y farola-sombra total están en posición de Tales (comparten el ángulo del extremo de la sombra). La sombra total es 9 m, así que h/9 = 1,70/3 y h = 5,1 m. Un error típico es usar 6 m en lugar de 9 m: el lado homólogo de la sombra de la persona es la sombra completa de la farola.</p>`, svg: resolver },
    { html: `<h3>3.1 Semejanza en la vida real</h3><p>La semejanza está en mil situaciones cotidianas. En <b>cartografía</b>, los mapas topográficos 1 : 25.000 o 1 : 50.000 permiten planificar una ruta midiendo distancias con una regla. En <b>arquitectura</b>, los planos a escala 1 : 100 o 1 : 50 indican cómo será una casa antes de construirla. En <b>fotografía</b> y pantallas, ampliar una imagen sin deformarla exige mantener la proporción entre ancho y alto (el formato 16:9 de las televisiones, por ejemplo).</p><p>También el tamaño del papel sigue la semejanza: los formatos <b>DIN A</b> (A3, A4, A5…) son todos semejantes, y cada uno es la mitad del anterior. Para que al partir una hoja por la mitad la nueva sea semejante, la razón largo/ancho debe ser √2 ≈ 1,414. Por eso una fotocopia de A4 a A3 amplía al 141 % y de A3 a A4 reduce al 71 %. Un A4 mide 297 × 210 mm, y 297/210 ≈ 1,414.</p>`, svg: aplicaciones },
    { html: `<h3>3.2 El papel DIN A y la razón √2</h3><p>¿Por qué √2? Si una hoja mide l de largo y a de ancho, al cortarla por la mitad salen dos hojas de lados a y l/2. Para que sean semejantes a la original hace falta l/a = a/(l/2), es decir, l² = 2a², y por tanto <mark>l/a = √2</mark>. El A0 tiene un área de 1 m², y cada formato siguiente tiene la mitad de área: A1 = 1/2 m², A4 = 1/16 m².</p><p>Este razonamiento combina todo el tema: la razón de semejanza entre A4 y A5 es k = 1/√2 ≈ 0,71 y la razón entre sus áreas es k² = 1/2. Es un ejemplo excelente de cómo una idea geométrica simple tiene consecuencias prácticas: fotocopiadoras, impresoras y carpetas de todo el mundo se diseñan con esta norma, ideada en Alemania en 1922 y adoptada después como estándar internacional (ISO 216).</p>`, svg: formatoA },
  ],
  ejemplos: [
    { enunciado: "Un triángulo tiene lados 4, 6 y 7 cm. Calcula los lados de un triángulo semejante cuyo lado menor mide 10 cm.", pasos: ["k = 10/4 = 2,5.", "6 · 2,5 = 15 cm.", "7 · 2,5 = 17,5 cm."], resultado: "10, 15 y 17,5 cm." },
    { enunciado: "En un plano a escala 1 : 200, un salón mide 3 cm × 2,5 cm. ¿Cuáles son sus dimensiones y su área reales?", pasos: ["3 · 200 = 600 cm = 6 m.", "2,5 · 200 = 500 cm = 5 m.", "Área: 6 · 5 = 30 m²."], resultado: "6 m × 5 m, 30 m²." },
    { enunciado: "Dos rectas secantes cortadas por paralelas: en una, los segmentos miden 3 y 5 cm; en la otra, el primero mide 4,5 cm. Calcula el segundo.", pasos: ["Tales: 3/5 = 4,5/x.", "x = 5 · 4,5 / 3."], resultado: "x = 7,5 cm." },
    { enunciado: "Un edificio proyecta una sombra de 18 m cuando una persona de 1,6 m proyecta una de 1,2 m. Calcula la altura del edificio.", pasos: ["Triángulos semejantes (rayos paralelos, ángulo recto).", "h/18 = 1,6/1,2.", "h = 18 · 1,6 / 1,2 = 24."], resultado: "El edificio mide 24 m." },
    { enunciado: "Dos jarrones semejantes tienen alturas 15 y 25 cm. Si el pequeño tiene 0,9 L, ¿cuánto cabe en el grande? ¿En qué razón están sus superficies?", pasos: ["k = 25/15 = 5/3.", "Volumen: 0,9 · (5/3)³ = 0,9 · 125/27 ≈ 4,17 L.", "Superficies: k² = 25/9 ≈ 2,78."], resultado: "≈ 4,17 L; superficie ≈ 2,78 veces mayor." },
    { enunciado: "En un triángulo rectángulo, la altura sobre la hipotenusa la divide en 3,2 y 1,8 cm. Halla la altura y los catetos.", pasos: ["Hipotenusa: 5 cm.", "h² = 3,2 · 1,8 = 5,76 → h = 2,4 cm.", "Catetos: √(5 · 3,2) = 4 y √(5 · 1,8) = 3."], resultado: "h = 2,4 cm; catetos 4 y 3 cm." },
  ],
  errores: [
    "Emparejar mal los lados homólogos: se emparejan los opuestos a ángulos iguales, no los que «parecen» iguales.",
    "Multiplicar el área por k en lugar de por k² (o el volumen por k en lugar de por k³).",
    "Olvidar convertir unidades al usar escalas (cm del plano a m o km reales).",
    "En los problemas de sombras con farola, usar solo la distancia en lugar de la sombra total.",
    "Pensar que dos rectángulos cualesquiera son semejantes porque tienen los mismos ángulos.",
    "Aplicar Pitágoras a triángulos que no son rectángulos o sumar los lados sin elevarlos al cuadrado.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Son semejantes dos rectángulos de 4 × 6 y 6 × 9? ¿Y de 4 × 6 y 6 × 8?", sol: "Primeros sí: 6/4 = 9/6 = 1,5. Segundos no: 6/4 = 1,5 y 8/6 ≈ 1,33." },
    { nivel: "básico", q: "Un triángulo tiene lados 5, 7 y 9 cm. Calcula los lados de uno semejante con k = 3.", sol: "15, 21 y 27 cm." },
    { nivel: "básico", q: "Calcula la razón de semejanza entre dos triángulos de lados 6, 8, 10 y 3, 4, 5.", sol: "k = 1/2 (del grande al pequeño) o 2 (del pequeño al grande)." },
    { nivel: "básico", q: "En un mapa 1 : 50.000, dos pueblos están a 7 cm. ¿Qué distancia real los separa?", sol: "7 · 50.000 = 350.000 cm = 3,5 km." },
    { nivel: "básico", q: "Un campo de fútbol de 100 m × 64 m se dibuja a escala 1 : 1.000. ¿Qué medidas tiene el dibujo?", sol: "10 cm × 6,4 cm." },
    { nivel: "básico", q: "Las paralelas cortan una secante en segmentos de 2 y 6 cm y la otra en 3 cm y x. Halla x.", sol: "2/6 = 3/x → x = 9 cm." },
    { nivel: "básico", q: "Un palo de 2 m da una sombra de 3 m. ¿Cuánto mide un árbol con sombra de 15 m?", sol: "h/15 = 2/3 → h = 10 m." },
    { nivel: "básico", q: "Dos cuadrados tienen lados 3 y 6 cm. ¿En qué razón están sus perímetros y sus áreas?", sol: "Perímetros: 2. Áreas: 4 (9 cm² y 36 cm²)." },
    { nivel: "básico", q: "Dos cubos tienen aristas 2 y 6 cm. ¿Cuántas veces mayor es el volumen del grande?", sol: "k = 3, k³ = 27 veces." },
    { nivel: "básico", q: "Halla la hipotenusa de un triángulo rectángulo con catetos 6 y 8 cm.", sol: "√(36 + 64) = 10 cm." },
    { nivel: "básico", q: "Halla el cateto de un triángulo rectángulo con hipotenusa 17 y otro cateto 8.", sol: "√(289 − 64) = 15." },
    { nivel: "básico", q: "¿Es rectángulo el triángulo de lados 9, 12 y 15? ¿Y el de 5, 6 y 8?", sol: "81 + 144 = 225 ✓ sí. 25 + 36 = 61 ≠ 64, no." },
    { nivel: "medio", q: "Justifica si son semejantes los triángulos con ángulos 50° y 70° y otro con ángulos 60° y 70°.", sol: "Primero: 50°, 70°, 60°. Segundo: 60°, 70°, 50°. Tienen los mismos ángulos: semejantes por AA." },
    { nivel: "medio", q: "Triángulo ABC con CA = 12, CB = 15 y AB = 9. DE ∥ AB con CD = 4. Calcula CE y DE.", sol: "k = 4/12 = 1/3. CE = 5, DE = 3." },
    { nivel: "medio", q: "Una persona de 1,80 m está a 4 m de una farola y su sombra mide 2 m. ¿Cuánto mide la farola?", sol: "Sombra total 6 m. h/6 = 1,8/2 → h = 5,4 m." },
    { nivel: "medio", q: "Un plano de una vivienda está a 1 : 150. Un dormitorio ocupa 2 cm × 2,4 cm. ¿Cuál es su área real?", sol: "3 m × 3,6 m = 10,8 m². (O 4,8 cm² · 150² = 108.000 cm²)." },
    { nivel: "medio", q: "En un mapa, una finca ocupa 12 cm². La escala es 1 : 5.000. Halla su área real en hectáreas.", sol: "12 · 5.000² = 300.000.000 cm² = 30.000 m² = 3 ha." },
    { nivel: "medio", q: "Dos triángulos semejantes tienen áreas 18 y 50 cm². Si un lado del pequeño mide 6 cm, ¿cuánto mide el homólogo?", sol: "k² = 50/18 = 25/9 → k = 5/3. Lado: 10 cm." },
    { nivel: "medio", q: "Una maqueta de un barco a escala 1 : 50 tiene un volumen de 3 dm³. ¿Qué volumen tiene el barco?", sol: "3 · 50³ = 375.000 dm³ = 375 m³." },
    { nivel: "medio", q: "Calcula la diagonal de una pantalla de 16 × 9 dm y la de un rectángulo de 12 × 5 cm.", sol: "√(256 + 81) ≈ 18,36 dm. √(144 + 25) = 13 cm." },
    { nivel: "medio", q: "La altura de un triángulo rectángulo divide la hipotenusa en 9 y 16 cm. Calcula la altura y el área del triángulo.", sol: "h = √144 = 12 cm. Área = 25 · 12 / 2 = 150 cm²." },
    { nivel: "medio", q: "Para medir un árbol, se coloca un espejo en el suelo a 8 m de él. Una persona con los ojos a 1,6 m se aleja 2 m del espejo hasta ver la copa. ¿Altura del árbol?", sol: "h/8 = 1,6/2 → h = 6,4 m." },
    { nivel: "medio", q: "Divide gráficamente un segmento de 10 cm en 3 partes iguales con el teorema de Tales y explica el procedimiento.", sol: "Semirrecta auxiliar desde un extremo, marcar 3 segmentos iguales, unir el último con el otro extremo y trazar paralelas: cortan el segmento en 3 partes de 3,33 cm." },
    { nivel: "medio", q: "Una pizza de 30 cm de diámetro cuesta 12 € y una de 20 cm, 6 €. ¿Cuál sale mejor de precio?", sol: "Áreas en razón (3/2)² = 2,25. La grande da 2,25 veces más por el doble de precio: es mejor la grande." },
    { nivel: "avanzado", q: "Para medir el ancho de un río se mira un árbol T de la otra orilla. Desde el punto A, justo enfrente de T, se caminan 20 m por la orilla hasta B. Desde B se retroceden 4 m hacia fuera del río, perpendicularmente, hasta C, y desde C se ve el árbol alineado con un punto D de la orilla que está a 3 m de B. ¿Qué anchura tiene el río?", sol: "Los triángulos TAD y CBD son semejantes (ángulos rectos y opuestos por el vértice). AD = 17 m: anchura/17 = 4/3 → anchura ≈ 22,7 m." },
    { nivel: "avanzado", q: "Un cono de 12 cm de altura se corta con un plano paralelo a la base a 4 cm del vértice. ¿Qué fracción del volumen total tiene el cono pequeño?", sol: "k = 4/12 = 1/3; volumen (1/3)³ = 1/27 del total." },
    { nivel: "avanzado", q: "Demuestra que las alturas de dos triángulos semejantes están en la misma razón que los lados.", sol: "Cada altura forma con un lado un triángulo rectángulo; los de ambas figuras tienen un ángulo agudo igual, así que son semejantes y la razón entre alturas es k." },
    { nivel: "avanzado", q: "Una hoja A4 mide 29,7 × 21 cm. Calcula las medidas de A3 y A5 y comprueba que son semejantes.", sol: "A3: 42 × 29,7; A5: 21 × 14,85. Cocientes: 42/29,7 ≈ 29,7/21 ≈ 21/14,85 ≈ 1,414." },
    { nivel: "avanzado", q: "Un globo esférico se infla hasta que su radio se triplica. ¿Cuánto aumentan su superficie y su volumen? ¿Cuánto aire más hay que meter?", sol: "Superficie × 9, volumen × 27: hace falta 26 veces el volumen inicial adicional." },
    { nivel: "avanzado", q: "Halla la altura de un triángulo isósceles de lados 13, 13 y 10 cm y su área.", sol: "h = √(169 − 25) = 12 cm. Área = 10 · 12 / 2 = 60 cm²." },
    { nivel: "avanzado", q: "En un triángulo rectángulo un cateto mide 6 y su proyección sobre la hipotenusa mide 3,6. Calcula la hipotenusa, el otro cateto y la altura.", sol: "36 = a · 3,6 → a = 10. Otro cateto: 8. n = 6,4; h = √(3,6 · 6,4) = 4,8." },
  ],
  quiz: [
    { q: "Dos figuras semejantes tienen…", o: ["el mismo tamaño", "la misma forma", "el mismo perímetro", "la misma área"], a: 1, e: "Misma forma, tamaño distinto." },
    { q: "La razón entre lados homólogos se llama…", o: ["escala gráfica", "razón de semejanza", "pendiente", "proporción áurea"], a: 1, e: "k." },
    { q: "Si k = 0,5, la figura es…", o: ["una ampliación", "una reducción", "igual", "imposible"], a: 1, e: "k < 1." },
    { q: "Escala 1 : 100: 5 cm en el plano son…", o: ["50 cm", "5 m", "500 m", "0,5 m"], a: 1, e: "500 cm." },
    { q: "Todos los … son semejantes entre sí.", o: ["rectángulos", "triángulos", "cuadrados", "rombos"], a: 2, e: "Misma forma siempre." },
    { q: "El teorema de Tales trata de rectas…", o: ["perpendiculares", "paralelas cortadas por secantes", "tangentes", "concurrentes en un punto fijo"], a: 1, e: "Segmentos proporcionales." },
    { q: "Criterio AA: dos triángulos son semejantes si tienen…", o: ["dos lados iguales", "dos ángulos iguales", "un ángulo igual", "la misma área"], a: 1, e: "El tercero coincide." },
    { q: "Lados 3, 4, 5 y 6, 8, 10 son semejantes por…", o: ["AA", "LLL", "LAL", "no son semejantes"], a: 1, e: "Tres lados proporcionales." },
    { q: "Dos triángulos rectángulos son semejantes si tienen…", o: ["un cateto igual", "un ángulo agudo igual", "la hipotenusa igual", "el mismo perímetro"], a: 1, e: "El recto ya es común." },
    { q: "Si k = 3, las áreas se multiplican por…", o: ["3", "6", "9", "27"], a: 2, e: "k²." },
    { q: "Si k = 2, los volúmenes se multiplican por…", o: ["2", "4", "6", "8"], a: 3, e: "k³." },
    { q: "Si las áreas están en razón 16, la razón de semejanza es…", o: ["4", "8", "16", "256"], a: 0, e: "√16." },
    { q: "Palo 1 m, sombra 2 m. Torre con sombra 30 m mide…", o: ["60 m", "15 m", "30 m", "32 m"], a: 1, e: "h/30 = 1/2." },
    { q: "Hipotenusa con catetos 5 y 12:", o: ["17", "13", "√17", "60"], a: 1, e: "√169." },
    { q: "Teorema de la altura:", o: ["h = m + n", "h² = m · n", "h = m · n", "h² = m² + n²"], a: 1, e: "Media proporcional." },
    { q: "Una homotecia de razón 2 transforma un segmento de 3 cm en uno de…", o: ["5 cm", "6 cm", "1,5 cm", "9 cm"], a: 1, e: "× 2." },
    { q: "La razón largo/ancho del papel DIN A es…", o: ["1,5", "√2", "2", "1,618"], a: 1, e: "≈ 1,414." },
    { q: "Una maqueta 1 : 10 tiene un volumen … veces menor.", o: ["10", "100", "1.000", "30"], a: 2, e: "10³." },
    { q: "Los lados homólogos son los opuestos a…", o: ["los lados mayores", "ángulos iguales", "el vértice común", "la base"], a: 1, e: "Así se emparejan." },
    { q: "Una pizza de doble diámetro tiene … veces más superficie.", o: ["2", "3", "4", "8"], a: 2, e: "k² = 4." },
  ],
  examen: [
    { q: "Escala 1 : 25.000; 4 cm son…", o: ["1 km", "100 m", "10 km", "250 m"], a: 0, e: "100.000 cm." },
    { q: "Tales: 2/5 = 3/x → x =", o: ["7,5", "6", "1,2", "3,3"], a: 0, e: "15/2." },
    { q: "Triángulos con lados 2, 3, 4 y 4, 6, 7:", o: ["semejantes", "no semejantes", "iguales", "rectángulos"], a: 1, e: "8 ≠ 7." },
    { q: "Áreas 10 y 90: k =", o: ["9", "3", "81", "1/9"], a: 1, e: "√9." },
    { q: "Cateto con hipotenusa 10 y otro cateto 6:", o: ["8", "4", "√136", "16"], a: 0, e: "√64." },
    { q: "Persona 1,5 m, sombra 2 m; árbol, sombra 10 m:", o: ["7,5 m", "13,3 m", "5 m", "6 m"], a: 0, e: "10 · 1,5/2." },
    { q: "Volúmenes de esferas de radios 1 y 4 están en razón…", o: ["4", "16", "64", "12"], a: 2, e: "4³." },
    { q: "h² = m · n con m = 2, n = 8: h =", o: ["4", "16", "10", "5"], a: 0, e: "√16." },
  ],
  feynman: ["Qué significa que dos figuras sean semejantes y qué es la razón de semejanza", "Cómo se usa una escala para pasar del plano a la realidad", "Qué dice el teorema de Tales y cómo se mide una altura con sombras", "Por qué las áreas cambian con k² y los volúmenes con k³"],
  figura: {
    titulo: "Semejanza en una mirada",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen: razón de semejanza, escalas, teorema de Tales y relación k, k cuadrado, k cubo">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Razón k", "k = lado' / lado · k > 1 amplía · k < 1 reduce", "var(--pen)"], ["Escala", "1 : n · real = plano × n · cuidar unidades", "var(--leaf)"], ["Tales", "paralelas → segmentos proporcionales · a/b = a'/b'", "var(--red)"], ["k, k², k³", "longitudes × k · áreas × k² · volúmenes × k³", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="160" y="${43 + i * 50}" font-size="14.5" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "T5Bn8024LuQ", titulo: "Teorema de Tales | Ejercicio de aplicación 2", canal: "Matemáticas profe Alex", vistas: 1985290, megusta: 0, busqueda: "semejanza teorema de Tales" },
  mapa: mapa("SEMEJANZA", "var(--red)", [
    ["Razón k", "lados proporcionales", "var(--pen)"],
    ["Escalas", "planos y mapas", "var(--leaf)"],
    ["Tales", "paralelas y sombras", "var(--red)"],
    ["k² y k³", "áreas y volúmenes", "var(--inf)"],
  ], 230),
  glosario: [
    ["Figuras semejantes", "Figuras con la misma forma: ángulos iguales y lados proporcionales."],
    ["Lados homólogos", "Lados que se corresponden en dos figuras semejantes."],
    ["Razón de semejanza", "Cociente constante k entre lados homólogos."],
    ["Escala", "Razón entre una medida en el plano o mapa y la medida real (1 : n)."],
    ["Escala gráfica", "Segmento dibujado que indica a qué distancia real equivale."],
    ["Teorema de Tales", "Las paralelas que cortan a dos secantes determinan segmentos proporcionales."],
    ["Posición de Tales", "Dos triángulos con un ángulo común y lados opuestos paralelos."],
    ["Criterio de semejanza", "Condición mínima para asegurar que dos triángulos son semejantes (AA, LLL, LAL)."],
    ["Medida indirecta", "Cálculo de una longitud inaccesible a partir de figuras semejantes."],
    ["Hipotenusa", "Lado opuesto al ángulo recto en un triángulo rectángulo."],
    ["Cateto", "Cada uno de los lados que forman el ángulo recto."],
    ["Teorema de Pitágoras", "c² = a² + b² en un triángulo rectángulo."],
    ["Proyección", "Parte de la hipotenusa que queda bajo un cateto al trazar la altura."],
    ["Homotecia", "Transformación que amplía o reduce desde un centro con razón k."],
    ["Terna pitagórica", "Tres enteros que cumplen el teorema de Pitágoras, como 3, 4, 5."],
  ],
  situacion: {
    titulo: "Tales en el patio",
    reto: "El ayuntamiento quiere saber la altura de los árboles y edificios del entorno del instituto para un plan de sombras. Vuestro grupo medirá al menos tres alturas inaccesibles con métodos de semejanza y comparará su precisión.",
    pasos: [
      "Elegid tres objetos altos (un árbol, una farola, el edificio del instituto) y estimad su altura a ojo.",
      "Medid cada uno con el método de las sombras, usando un palo vertical y una cinta métrica.",
      "Repetid la medida con el método del espejo y con el del lápiz y el brazo estirado.",
      "Dibujad a escala los triángulos semejantes de cada medida y escribid las proporciones.",
      "Comparad los resultados, calculad la diferencia entre métodos y discutid las fuentes de error.",
    ],
    producto: "Un póster con los dibujos a escala, los cálculos, una tabla comparativa de métodos y una recomendación del método más fiable.",
    evaluacion: ["Identifica y justifica triángulos semejantes en situaciones reales.", "Plantea y resuelve proporciones correctamente, con unidades.", "Dibuja a escala con precisión.", "Analiza críticamente los errores de medida y comunica los resultados."],
  },
  tarjetas: [
    ["Figuras semejantes", "Ángulos iguales y lados proporcionales."],
    ["Razón de semejanza", "k = lado'/lado."],
    ["Escala 1 : n", "Real = plano × n."],
    ["Teorema de Tales", "Paralelas → segmentos proporcionales."],
    ["Posición de Tales", "Ángulo común y lado paralelo."],
    ["Criterios", "AA, LLL, LAL."],
    ["Longitudes", "× k"],
    ["Áreas", "× k²"],
    ["Volúmenes", "× k³"],
    ["Pitágoras", "c² = a² + b²"],
    ["Teorema de la altura", "h² = m · n"],
    ["DIN A", "largo/ancho = √2"],
  ],
  familias: ["Medid juntos la altura de un árbol con su sombra y un palo.", "Buscad un mapa con escala y calculad la distancia real entre dos lugares conocidos.", "Comparad el precio por superficie de dos pizzas de distinto tamaño.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido espacial y de la medida: semejanza, razón de semejanza, escalas, teorema de Tales, criterios de semejanza de triángulos, relación entre longitudes, áreas y volúmenes, teoremas de Pitágoras, del cateto y de la altura, y medida indirecta (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Medida de alturas en el patio con sombras y espejos.", "GeoGebra: homotecias con deslizador de razón.", "Planos de la propia aula a escala.", "Comparación de envases semejantes y sus precios."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "GeoGebra: semejanza y homotecias", url: "https://www.geogebra.org/" },
    { t: "Instituto Geográfico Nacional: escalas y mapas", url: "https://www.ign.es/" },
  ],
  revisado: "2026-11-13",
};
