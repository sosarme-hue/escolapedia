// Matemáticas 2º ESO · Cuerpos geométricos: áreas y volúmenes. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, flujo, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const elementos = lienzo("Elementos de un poliedro: caras, aristas y vértices en un ortoedro", `
  <polygon points="50,60 160,60 160,140 50,140" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.2"/>
  <polygon points="50,60 90,30 200,30 160,60" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2.2"/>
  <polygon points="160,60 200,30 200,110 160,140" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2.2"/>
  <path d="M50 140 L90 110 L200 110 M90 110 V30" stroke="var(--pen)" stroke-width="1.2" stroke-dasharray="4 3" fill="none"/>
  <circle cx="160" cy="60" r="4.5" fill="var(--red)"/>${tx(150, 54, "vértice", { fs: 11, c: "var(--red)", a: "end", max: 60 })}
  <path d="M160 100 H222" stroke="var(--leaf)" stroke-width="1.2"/>${tx(226, 104, "arista", { fs: 11, c: "var(--leaf)", a: "start", max: 34 })}
  ${tx(105, 104, "cara", { fs: 13, c: "var(--pen)" })}${tx(130, 166, "6 caras · 12 aristas · 8 vértices", { fs: 12, c: "var(--muted)" })}`, 176);

const regulares = cajas("Los cinco poliedros regulares o sólidos platónicos", [
  ["Tetraedro", ["4 triángulos"], "var(--pen)"],
  ["Cubo", ["6 cuadrados"], "var(--leaf)"],
  ["Octaedro", ["8 triángulos"], "var(--sun)"],
  ["Dodecaedro", ["12 pentágonos"], "var(--red)"],
  ["Icosaedro", ["20 triángulos"], "var(--inf)"],
  ["¿Solo 5?", ["ángulos < 360°"], "var(--bac)"],
], "Sólidos platónicos");

const euler = formula("Fórmula de Euler para poliedros convexos", "C + V − A = 2", ["Cubo: 6 + 8 − 12 = 2", "Tetraedro: 4 + 4 − 6 = 2", "Prisma pentagonal: 7 + 10 − 15 = 2"], "var(--leaf)");

const prismaPir = comparar("Prismas y pirámides: diferencias", [
  ["Prisma", ["2 bases iguales", "y paralelas", "caras laterales:", "paralelogramos"], "var(--pen)"],
  ["Pirámide", ["1 base", "un vértice (cúspide)", "caras laterales:", "triángulos"], "var(--red)"],
], "Prismas y pirámides");

const desarrollo = lienzo("Desarrollo plano de un prisma: el área lateral es un rectángulo de perímetro de la base por altura", `
  <rect x="20" y="60" width="200" height="60" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2"/>
  ${[1, 2, 3].map((i) => `<path d="M${20 + i * 50} 60 V120" stroke="var(--pen)" stroke-width="1.2"/>`).join("")}
  <rect x="70" y="10" width="50" height="50" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/><rect x="70" y="120" width="50" height="50" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>
  ${tx(188, 34, "A lat = P_base · h", { fs: 12, c: "var(--pen)", max: 120 })}${tx(95, 40, "base", { fs: 10.5, c: "var(--leaf)", max: 46 })}${tx(195, 160, "A total =", { fs: 11.5, max: 100 })}${tx(195, 176, "A lat + 2 A base", { fs: 11, c: "var(--red)", max: 110 })}`, 184);

const piramide = lienzo("Área de una pirámide: base más triángulos laterales con altura igual a la apotema de la pirámide", `
  <polygon points="130,20 60,140 200,140" fill="var(--sun)" fill-opacity=".2" stroke="var(--sun)" stroke-width="2.2"/>
  <path d="M130 20 V140" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 3"/>${tx(138, 86, "apotema", { fs: 11, c: "var(--red)", a: "start", max: 70 })}
  ${tx(130, 158, "lado de la base l", { fs: 11.5, c: "var(--muted)" })}${tx(130, 176, "A lat = n · (l · ap) / 2", { fs: 13, fam: D })}`, 186);

const cilindro = lienzo("Desarrollo del cilindro: un rectángulo de base la longitud de la circunferencia y dos círculos", `
  <rect x="30" y="56" width="200" height="66" fill="var(--inf)" fill-opacity=".15" stroke="var(--inf)" stroke-width="2"/>
  <circle cx="80" cy="30" r="24" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/><circle cx="80" cy="148" r="24" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>
  ${tx(150, 94, "2πr · h", { fs: 15, fam: D, c: "var(--inf)", max: 120 })}${tx(190, 30, "A = 2πr·h + 2πr²", { fs: 11.5, c: "var(--red)", max: 120 })}<path d="M80 148 H104" stroke="var(--ink)" stroke-width="1.5"/>${tx(92, 143, "r", { fs: 11, max: 20 })}`, 180);

const unidades = pasos("Unidades de volumen y capacidad: cada unidad es 1000 veces la siguiente", ["1 m³ = 1000 dm³", "1 dm³ = 1000 cm³", "1 dm³ = 1 litro", "1 cm³ = 1 mL", "1 m³ = 1000 L"], "Volumen y capacidad");

const cavalieri = pasos("Volumen de prismas y cilindros por capas: área de la base por altura", ["Cada capa: A_base cubitos de 1 cm³", "Hay tantas capas como la altura h", "V = A_base · h", "Ortoedro 8 · 5 · 3 = 120 cm³", "Cilindro r = 3, h = 10: ≈ 282,7 cm³"], "Prismas y cilindros");

const tercio = lienzo("Una pirámide cabe tres veces en un prisma de la misma base y altura", `
  <polygon points="30,140 110,140 110,40 30,40" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2"/>
  ${[0, 1, 2].map((i) => `<polygon points="${140 + i * 38},140 ${172 + i * 38},140 ${156 + i * 38},64" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="1.8"/>`).join("")}
  ${tx(70, 94, "prisma", { fs: 12, c: "var(--pen)" })}${tx(130, 94, "=", { fs: 20 })}${tx(195, 52, "3 pirámides", { fs: 12, c: "var(--red)", max: 110 })}
  ${tx(130, 166, "V pirámide = V prisma / 3", { fs: 14, fam: D })}`, 178);

const esfera = formula("Área y volumen de la esfera", "A = 4πr² · V = 4/3 πr³", ["Esfera de radio 3 cm", "A = 4π · 9 ≈ 113,1 cm²", "V = 4/3 π · 27 ≈ 113,1 cm³"], "var(--leaf)");

const problemas = flujo("Pasos para resolver problemas de áreas y volúmenes", [
  ["Identificar el cuerpo", "ini"], ["Dibujar y anotar medidas", "proc"], ["¿Área o volumen?", "dec", "área: desarrollo", "volumen"], ["Misma unidad y fórmula", "proc"], ["Resultado con unidades", "es"],
], "Resolver problemas");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Cuerpos geométricos: áreas y volúmenes",
  minutos: 110,
  objetivos: [
    "Reconocer poliedros y cuerpos de revolución y sus elementos",
    "Clasificar prismas, pirámides y poliedros regulares y comprobar la fórmula de Euler",
    "Calcular áreas de prismas, pirámides, cilindros, conos y esferas a partir de su desarrollo",
    "Manejar las unidades de volumen y capacidad",
    "Calcular volúmenes y resolver problemas de la vida real",
  ],
  claves: ["poliedro", "cuerpo de revolución", "prisma", "pirámide", "fórmula de Euler", "desarrollo plano", "área lateral", "volumen"],
  pregunta: {
    texto: "Un brik de leche mide 6 × 9,5 × 17 cm. ¿Cabe de verdad 1 litro?",
    respuesta: "V = 6 · 9,5 · 17 = 969 cm³ ≈ 0,97 L. Parece que no llega, pero el brik se abomba al llenarse y el envase real es algo mayor. Como 1 L = 1000 cm³, las medidas exteriores dan una <mark>capacidad muy cercana a 1 litro</mark>.",
  },
  lectura: {
    titulo: "¡Eureka! El volumen de una corona",
    html: `<p>Según cuenta el arquitecto romano Vitrubio, el rey Hierón II de Siracusa encargó una corona de oro puro, pero sospechaba que el orfebre le había engañado mezclando el oro con plata. Pidió a <b>Arquímedes</b> que lo averiguara sin estropear la corona. El problema era medir su <b>volumen</b>: con una forma tan complicada, no había fórmula posible.</p><p>Un día, al meterse en una bañera llena, Arquímedes vio cómo el agua se desbordaba y comprendió que el volumen de agua desplazada era igual al de su cuerpo sumergido. Salió corriendo a la calle gritando «¡Eureka!» («¡Lo encontré!»). Sumergió la corona y un lingote de oro del mismo peso: la corona desplazó más agua, así que tenía más volumen y no era de oro puro.</p><p>Arquímedes también descubrió la relación entre la esfera y el cilindro que la contiene: el volumen de la esfera es 2/3 del cilindro. Le gustó tanto que pidió que se grabara en su tumba. En este tema aprenderás a calcular áreas y volúmenes de los cuerpos geométricos más habituales: cajas, latas, conos, pelotas y edificios.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Poliedros y cuerpos de revolución</h3><p>Los <b>cuerpos geométricos</b> son figuras de tres dimensiones que ocupan un lugar en el espacio. Se dividen en dos grandes grupos:</p><ul><li><b>Poliedros</b>: todas sus caras son <b>polígonos</b> planos. Por ejemplo, un dado, una caja de zapatos o una pirámide de Egipto.</li><li><b>Cuerpos de revolución</b> (o de redondeo): se obtienen al <b>girar</b> una figura plana alrededor de un eje. Al girar un rectángulo se obtiene un <b>cilindro</b>; un triángulo rectángulo, un <b>cono</b>; un semicírculo, una <b>esfera</b>. Tienen superficies curvas.</li></ul><p>Una lata de refresco es un cilindro, un cucurucho es un cono y un balón es una esfera. En arquitectura y diseño se combinan unos y otros: una torre puede ser un prisma con un tejado en forma de pirámide o de cono.</p>`, svg: psvg("cuerpos", 0), video: pvid("cuerpos", 0) },
    { html: `<h3>1.2 Elementos de un poliedro</h3><p>En un poliedro distinguimos:</p><ul><li><b>Caras</b>: los polígonos que lo limitan.</li><li><b>Aristas</b>: los segmentos donde se unen dos caras.</li><li><b>Vértices</b>: los puntos donde se unen tres o más aristas.</li><li><b>Diagonales</b>: segmentos que unen dos vértices que no están en la misma cara.</li></ul><p>Un ortoedro (una caja) tiene 6 caras rectangulares, 12 aristas y 8 vértices. Un poliedro es <b>convexo</b> si cualquier segmento que une dos de sus puntos queda dentro de él; si no, es <b>cóncavo</b> (como una estrella con picos).</p><p>Contar los elementos con cuidado es más difícil de lo que parece: conviene contar por capas (arriba, en medio, abajo) o usar la relación entre caras y aristas: cada arista es compartida por dos caras.</p>`, svg: elementos },
    { html: `<h3>1.3 Prismas y pirámides</h3><p>Un <b>prisma</b> es un poliedro con dos caras iguales y paralelas, las <b>bases</b>, y caras laterales que son paralelogramos. Se nombra según el polígono de la base: prisma triangular, cuadrangular, pentagonal, hexagonal… Si las caras laterales son rectángulos, es un prisma <b>recto</b>; si además la base es un polígono regular, es un prisma <b>regular</b>. El <b>ortoedro</b> es un prisma con todas las caras rectangulares, y el <b>cubo</b>, uno con todas las caras cuadradas.</p><p>Una <b>pirámide</b> tiene una sola base y caras laterales triangulares que se unen en un punto, el <b>vértice</b> o cúspide. La <b>altura</b> es la distancia del vértice a la base, y la <b>apotema</b> de una pirámide regular es la altura de cada triángulo lateral.</p><p>Un prisma de base de n lados tiene n + 2 caras; una pirámide, n + 1.</p>`, svg: prismaPir },
    { html: `<h3>1.4 Poliedros regulares y fórmula de Euler</h3><p>Un <b>poliedro regular</b> tiene todas sus caras polígonos regulares iguales y en cada vértice concurre el mismo número de caras. Solo hay <b>cinco</b>, llamados <b>sólidos platónicos</b>: tetraedro (4 triángulos), cubo (6 cuadrados), octaedro (8 triángulos), dodecaedro (12 pentágonos) e icosaedro (20 triángulos).</p><p>¿Por qué solo cinco? Porque en cada vértice deben juntarse al menos tres caras y la suma de sus ángulos debe ser menor que 360°. Con triángulos (60°) caben 3, 4 o 5; con cuadrados (90°), 3; con pentágonos (108°), 3; con hexágonos (120°), 3 · 120 = 360°: ya es plano.</p><p>En 1750, Leonhard Euler descubrió que en todo poliedro convexo se cumple <mark>C + V − A = 2</mark> (caras más vértices menos aristas). En el cubo: 6 + 8 − 12 = 2.</p>`, svg: regulares },
    { html: `<h3>1.5 Comprobar la fórmula de Euler</h3><p>La fórmula de Euler permite comprobar si hemos contado bien los elementos de un poliedro o calcular uno desconocido.</p><ul><li><b>Tetraedro</b>: 4 caras, 4 vértices, 6 aristas → 4 + 4 − 6 = 2.</li><li><b>Prisma pentagonal</b>: 7 caras, 10 vértices, 15 aristas → 7 + 10 − 15 = 2.</li><li><b>Pirámide hexagonal</b>: 7 caras, 7 vértices, 12 aristas → 7 + 7 − 12 = 2.</li><li><b>Icosaedro</b>: 20 caras, 12 vértices; ¿aristas? 20 + 12 − A = 2 → A = 30.</li></ul><p>También se pueden contar las aristas a partir de las caras: el icosaedro tiene 20 triángulos con 3 lados cada uno, 60 lados en total, pero cada arista se cuenta dos veces: 60 : 2 = 30. ✔</p><p>La fórmula no se cumple en todos los cuerpos: un poliedro con un «agujero» (como un marco) da C + V − A = 0.</p>`, svg: euler },
    { html: `<h3>2.1 Área de prismas</h3><p>El <b>área</b> de un cuerpo es la medida de su superficie. Para calcularla, lo mejor es imaginar su <b>desarrollo plano</b>: lo que obtendríamos al desplegarlo sobre la mesa.</p><p>El desarrollo de un prisma recto está formado por un rectángulo (todas las caras laterales juntas) y las dos bases:</p><ul><li><b>Área lateral</b>: <mark>A_lat = perímetro de la base · altura</mark>.</li><li><b>Área total</b>: A_total = A_lat + 2 · A_base.</li></ul><p>Ejemplo: ortoedro de 8 × 5 × 3 cm (altura 3). Perímetro de la base: 26 cm. A_lat = 26 · 3 = 78 cm². A_base = 40 cm². A_total = 78 + 80 = <b>158 cm²</b>. Para un ortoedro también se puede usar A = 2(ab + bc + ac).</p><p>El cubo de arista a tiene área 6a².</p>`, svg: desarrollo },
    { html: `<h3>2.2 Área de pirámides</h3><p>El desarrollo de una pirámide está formado por la base y tantos <b>triángulos</b> como lados tenga la base. En una pirámide regular, todos los triángulos son iguales y su altura es la <b>apotema de la pirámide</b>.</p><ul><li><b>Área lateral</b>: <mark>A_lat = n · (l · ap) / 2 = perímetro · apotema / 2</mark>.</li><li><b>Área total</b>: A_total = A_lat + A_base.</li></ul><p>Ejemplo: pirámide cuadrangular de lado 6 cm y apotema 5 cm. A_lat = 4 · 6 · 5 / 2 = 60 cm². A_base = 36 cm². A_total = <b>96 cm²</b>.</p><p>Si nos dan la altura h de la pirámide en vez de la apotema, la calculamos con <b>Pitágoras</b>: la altura, la apotema de la base y la apotema de la pirámide forman un triángulo rectángulo. Con lado 6 y altura 4: ap = √(4² + 3²) = 5.</p>`, svg: piramide },
    { html: `<h3>2.3 Área del cilindro, el cono y la esfera</h3><p><b>Cilindro</b> de radio r y altura h: su desarrollo es un rectángulo cuya base es la longitud de la circunferencia (2πr) y dos círculos. <mark>A = 2πr · h + 2πr²</mark>. Una lata de r = 3 cm y h = 10 cm: A ≈ 188,5 + 56,5 = 245 cm².</p><p><b>Cono</b> de radio r y generatriz g: su desarrollo es un sector circular y un círculo. <mark>A = πr · g + πr²</mark>. La generatriz se obtiene con Pitágoras: g = √(h² + r²). Cono de r = 3 y h = 4: g = 5, A = 15π + 9π = 24π ≈ 75,4 cm².</p><p><b>Esfera</b> de radio r: no tiene desarrollo plano (por eso los mapas del mundo deforman los continentes). Su área es <mark>A = 4πr²</mark>, exactamente cuatro veces el área de un círculo máximo. Un balón de r = 11 cm tiene unos 1520 cm² de superficie.</p>`, svg: cilindro },
    { html: `<h3>3.1 Volumen y unidades</h3><p>El <b>volumen</b> de un cuerpo es la cantidad de espacio que ocupa. Se mide en unidades cúbicas: el <b>metro cúbico</b> (m³) es el volumen de un cubo de 1 m de arista. Cada unidad es <b>1000 veces</b> mayor que la siguiente: 1 m³ = 1000 dm³; 1 dm³ = 1000 cm³.</p><p>La <b>capacidad</b> es lo que cabe dentro de un recipiente y se mide en litros. La relación clave es <mark>1 dm³ = 1 L</mark>, y por tanto 1 cm³ = 1 mL y 1 m³ = 1000 L.</p><p>Para pasar de una unidad a otra, se multiplica o divide por 1000 en cada paso: 2,5 m³ = 2500 dm³ = 2500 L; 350 cm³ = 0,35 dm³ = 0,35 L.</p><p>Un error frecuente es multiplicar por 10 o por 100, como en las unidades de longitud o de superficie. Recuerda: longitud × 10, superficie × 100, volumen × 1000.</p>`, svg: unidades },
    { html: `<h3>3.2 Volumen de prismas y cilindros</h3><p>El volumen de un ortoedro es largo · ancho · alto: es el número de cubitos de 1 cm³ que caben dentro. Si lo pensamos por capas, cada capa tiene tantos cubitos como el área de la base, y hay tantas capas como la altura. Por eso, para cualquier prisma o cilindro:</p><p><mark>V = A_base · h</mark></p><ul><li>Ortoedro de 8 × 5 × 3 cm: V = 40 · 3 = 120 cm³.</li><li>Cubo de arista a: V = a³.</li><li>Prisma hexagonal de lado 4 cm, apotema 3,46 cm y altura 10 cm: A_base = 24 · 3,46 / 2 ≈ 41,5 cm²; V ≈ 415 cm³.</li><li>Cilindro de r = 3 cm y h = 10 cm: V = π · 9 · 10 ≈ 282,7 cm³ ≈ 0,28 L.</li></ul><p>El <b>principio de Cavalieri</b> justifica que un prisma inclinado (oblicuo) tiene el mismo volumen que uno recto con igual base y altura: es como una pila de monedas desplazada.</p>`, svg: cavalieri, video: pvid("cuerpos", 6) },
    { html: `<h3>3.3 Volumen de pirámides y conos</h3><p>Si llenamos de arena una pirámide hueca y la vaciamos en un prisma de la misma base y altura, comprobaremos que hacen falta exactamente <b>tres</b> pirámides para llenarlo. Por eso:</p><p><mark>V = A_base · h / 3</mark></p><p>Lo mismo ocurre con el cono respecto al cilindro: V_cono = πr²h / 3.</p><ul><li>Pirámide cuadrangular de lado 6 cm y altura 4 cm: V = 36 · 4 / 3 = 48 cm³.</li><li>Cono de r = 3 cm y h = 4 cm: V = π · 9 · 4 / 3 = 12π ≈ 37,7 cm³.</li></ul><p>Cuidado: en el volumen se usa la <b>altura</b> del cuerpo (perpendicular a la base), no la apotema ni la generatriz. Si te dan la apotema, calcula la altura con Pitágoras. La Gran Pirámide de Keops, con base de unos 230 m de lado y altura de 146 m, tiene un volumen de unos 2,6 millones de m³.</p>`, svg: tercio },
    { html: `<h3>3.4 La esfera</h3><p>El volumen de una esfera de radio r es <mark>V = 4/3 · πr³</mark>. Arquímedes lo dedujo comparándola con el cilindro que la envuelve (de radio r y altura 2r): la esfera ocupa exactamente 2/3 del cilindro, y su área es igual al área lateral del cilindro, 4πr².</p><p>Ejemplos:</p><ul><li>Una pelota de tenis de r = 3,3 cm: V ≈ 4/3 · 3,14 · 35,9 ≈ 150,5 cm³.</li><li>Un balón de baloncesto de r = 12 cm: V ≈ 7238 cm³ ≈ 7,2 L.</li></ul><p>Fíjate en que el radio aparece al <b>cubo</b>: si el radio se duplica, el volumen se multiplica por 8. La Tierra, con un radio de unos 6371 km, tiene un volumen aproximado de 1,08 · 10¹² km³.</p><p>Una <b>semiesfera</b> tiene la mitad de volumen: 2/3 πr³.</p>`, svg: esfera },
    { html: `<h3>3.5 Problemas de áreas y volúmenes</h3><p>Para resolver problemas:</p><ol><li><b>Identifica</b> el cuerpo o los cuerpos que forman el objeto (una casa puede ser un prisma con un tejado en forma de prisma triangular).</li><li><b>Dibuja</b> el cuerpo y anota las medidas, todas en la <b>misma unidad</b>.</li><li>Decide si te piden <b>área</b> (pintar, forrar, envolver: superficie) o <b>volumen</b> (llenar, contener, ocupar: capacidad).</li><li>Aplica la fórmula y, si hace falta, calcula antes alturas o apotemas con Pitágoras.</li><li>Da el resultado con las <b>unidades</b> adecuadas (cm² o cm³, litros…).</li></ol><p>Ejemplo: una piscina de 10 × 5 m y 1,6 m de profundidad. Volumen: 80 m³ = 80 000 L. Para pintar el fondo y las paredes: 50 + 2 · (10 · 1,6) + 2 · (5 · 1,6) = 50 + 32 + 16 = 98 m². Si un bote pinta 10 m², hacen falta 10 botes.</p>`, svg: problemas },
  ],
  ejemplos: [
    { enunciado: "Comprueba la fórmula de Euler en una pirámide pentagonal.", pasos: ["Caras: 5 laterales + 1 base = 6.", "Vértices: 5 + 1 = 6. Aristas: 5 + 5 = 10.", "6 + 6 − 10 = 2."], resultado: "Se cumple." },
    { enunciado: "Calcula el área total de un prisma triangular regular de lado 6 cm y altura 10 cm (altura de la base ≈ 5,2 cm).", pasos: ["A_lat = 18 · 10 = 180 cm².", "A_base = 6 · 5,2 / 2 = 15,6 cm².", "A_total = 180 + 31,2."], resultado: "≈ 211,2 cm²." },
    { enunciado: "Calcula el área total de un cilindro de radio 5 cm y altura 12 cm.", pasos: ["A_lat = 2π · 5 · 12 = 120π.", "2 bases: 2π · 25 = 50π.", "A = 170π ≈ 534,1 cm²."], resultado: "≈ 534,1 cm²." },
    { enunciado: "¿Cuántos litros caben en un depósito cilíndrico de 1 m de radio y 2 m de altura?", pasos: ["V = π · 1² · 2 ≈ 6,28 m³.", "1 m³ = 1000 L."], resultado: "≈ 6283 L." },
    { enunciado: "Calcula el volumen de un cono de 5 cm de radio y 13 cm de generatriz.", pasos: ["h = √(13² − 5²) = 12 cm.", "V = π · 25 · 12 / 3 = 100π."], resultado: "≈ 314,2 cm³." },
    { enunciado: "Calcula el área y el volumen de una esfera de 6 cm de radio.", pasos: ["A = 4π · 36 = 144π ≈ 452,4 cm².", "V = 4/3 π · 216 = 288π ≈ 904,8 cm³."], resultado: "≈ 452,4 cm² y ≈ 904,8 cm³." },
  ],
  errores: [
    "Contar mal los elementos de un poliedro (aristas repetidas).",
    "Usar la altura en vez de la apotema para el área lateral de una pirámide.",
    "Usar la apotema o la generatriz en vez de la altura en el volumen.",
    "Olvidar dividir entre 3 en el volumen de pirámides y conos.",
    "Pasar de m³ a dm³ multiplicando por 10 o por 100 en lugar de por 1000.",
    "Mezclar unidades distintas (m y cm) en la misma fórmula.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Clasifica en poliedros o cuerpos de revolución: un dado, una lata, un cucurucho, una caja de pizza, una canica.", sol: "Poliedros: dado, caja de pizza. De revolución: lata (cilindro), cucurucho (cono), canica (esfera)." },
    { nivel: "básico", q: "Cuenta caras, vértices y aristas de un prisma hexagonal y comprueba Euler.", sol: "C = 8, V = 12, A = 18. 8 + 12 − 18 = 2." },
    { nivel: "básico", q: "¿Cuántas caras, vértices y aristas tiene una pirámide cuadrangular?", sol: "C = 5, V = 5, A = 8. 5 + 5 − 8 = 2." },
    { nivel: "básico", q: "Nombra los cinco poliedros regulares y el polígono de sus caras.", sol: "Tetraedro (triángulos), cubo (cuadrados), octaedro (triángulos), dodecaedro (pentágonos), icosaedro (triángulos)." },
    { nivel: "básico", q: "Calcula el área total de un cubo de 4 cm de arista y su volumen.", sol: "A = 6 · 16 = 96 cm². V = 64 cm³." },
    { nivel: "básico", q: "Calcula el área total y el volumen de un ortoedro de 10 × 6 × 4 cm.", sol: "A = 2(60 + 24 + 40) = 248 cm². V = 240 cm³." },
    { nivel: "básico", q: "Expresa en litros: 3 m³, 750 cm³, 4,2 dm³.", sol: "3000 L; 0,75 L; 4,2 L." },
    { nivel: "básico", q: "Expresa en cm³: 2 dm³, 0,5 L, 1,2 m³.", sol: "2000 cm³; 500 cm³; 1 200 000 cm³." },
    { nivel: "básico", q: "Calcula el volumen de un cilindro de radio 2 cm y altura 5 cm.", sol: "V = π · 4 · 5 = 20π ≈ 62,8 cm³." },
    { nivel: "básico", q: "Calcula el volumen de una pirámide de base cuadrada de 9 cm de lado y 10 cm de altura.", sol: "V = 81 · 10 / 3 = 270 cm³." },
    { nivel: "medio", q: "Calcula el área lateral y total de una pirámide cuadrangular de 8 cm de lado de la base y 6 cm de altura.", sol: "Apotema: √(6² + 4²) = √52 ≈ 7,21 cm. A_lat = 4 · 8 · 7,21 / 2 ≈ 115,4 cm². A_total ≈ 115,4 + 64 = 179,4 cm²." },
    { nivel: "medio", q: "Calcula el área total de un cono de 6 cm de radio y 8 cm de altura.", sol: "g = √(64 + 36) = 10. A = π · 6 · 10 + π · 36 = 96π ≈ 301,6 cm²." },
    { nivel: "medio", q: "Calcula el área de una esfera de 10 cm de diámetro.", sol: "r = 5. A = 4π · 25 = 100π ≈ 314,2 cm²." },
    { nivel: "medio", q: "¿Cuánto papel hace falta para forrar una lata de 7 cm de diámetro y 11 cm de altura (solo la parte lateral)?", sol: "A_lat = π · 7 · 11 ≈ 241,9 cm²." },
    { nivel: "medio", q: "Un acuario mide 60 × 30 × 40 cm. ¿Cuántos litros caben? Si se llena hasta 5 cm del borde, ¿cuántos litros tiene?", sol: "V = 72 000 cm³ = 72 L. Hasta 35 cm: 60 · 30 · 35 = 63 000 cm³ = 63 L." },
    { nivel: "medio", q: "Calcula el volumen de un cono de helado de 3 cm de radio y 10 cm de altura, y el de la semiesfera de helado que lo cubre.", sol: "Cono: π · 9 · 10 / 3 = 30π ≈ 94,2 cm³. Semiesfera: 2/3 π · 27 = 18π ≈ 56,5 cm³." },
    { nivel: "medio", q: "Un depósito cilíndrico tiene 1,5 m de diámetro y 2 m de altura. ¿Cuántos litros caben?", sol: "r = 0,75. V = π · 0,5625 · 2 ≈ 3,53 m³ ≈ 3534 L." },
    { nivel: "medio", q: "Calcula el volumen de un prisma hexagonal regular de 6 cm de lado y 15 cm de altura (apotema ≈ 5,2 cm).", sol: "A_base = 36 · 5,2 / 2 = 93,6 cm². V = 93,6 · 15 = 1404 cm³." },
    { nivel: "medio", q: "Una caja de cartón sin tapa mide 30 × 20 × 15 cm. ¿Cuánto cartón se necesita?", sol: "Base 600 + 2 · (30 · 15) + 2 · (20 · 15) = 600 + 900 + 600 = 2100 cm²." },
    { nivel: "medio", q: "Una esfera de 9 cm de radio, ¿cabe en una caja cúbica de 18 cm de arista? ¿Qué volumen queda libre?", sol: "Sí, justo (diámetro 18). Cubo 5832 cm³; esfera 4/3 π · 729 ≈ 3053,6 cm³. Libre ≈ 2778,4 cm³." },
    { nivel: "medio", q: "El icosaedro tiene 20 caras y 12 vértices. Calcula sus aristas de dos formas.", sol: "Euler: 20 + 12 − A = 2 → A = 30. Contando: 20 · 3 / 2 = 30." },
    { nivel: "medio", q: "Una habitación de 4 × 3,5 m y 2,5 m de alto se va a pintar (paredes y techo, sin contar 4 m² de puerta y ventana). ¿Cuántos m² se pintan?", sol: "Paredes: 2 · (4 + 3,5) · 2,5 = 37,5. Techo: 14. Total: 51,5 − 4 = 47,5 m²." },
    { nivel: "avanzado", q: "Compara el volumen de un cilindro, un cono y una semiesfera del mismo radio r y altura h = r.", sol: "Cilindro πr³; cono πr³/3; semiesfera 2πr³/3. Cono + semiesfera = cilindro." },
    { nivel: "avanzado", q: "Si el radio de una esfera se triplica, ¿qué ocurre con su área y su volumen?", sol: "El área se multiplica por 9 (r²) y el volumen por 27 (r³)." },
    { nivel: "avanzado", q: "Una piscina mide 25 × 12 m y su profundidad varía uniformemente de 1 m a 2 m. ¿Cuántos litros caben?", sol: "Es un prisma de base trapecio: A = (1 + 2) · 25 / 2 = 37,5 m². V = 37,5 · 12 = 450 m³ = 450 000 L." },
    { nivel: "avanzado", q: "Una lata de refresco de 33 cL tiene un diámetro de 6,6 cm. ¿Qué altura debe tener como mínimo?", sol: "330 cm³ = π · 3,3² · h → h = 330 / (π · 10,89) ≈ 9,65 cm (las latas reales miden unos 11,5 cm porque no se llenan del todo y el fondo es curvo)." },
    { nivel: "avanzado", q: "Calcula el volumen de la Gran Pirámide de Keops (base cuadrada de 230 m de lado y altura de 146 m) y compáralo con el de un estadio de 100 × 70 × 30 m.", sol: "V = 230² · 146 / 3 ≈ 2 574 467 m³. Estadio: 210 000 m³. La pirámide tiene unas 12 veces más volumen." },
    { nivel: "avanzado", q: "Una caja de 12 latas cilíndricas de 6,6 cm de diámetro y 11,5 cm de altura se empaqueta en 3 filas de 4. ¿Qué medidas tiene la caja y qué porcentaje del volumen está ocupado por las latas?", sol: "Caja: 26,4 × 19,8 × 11,5 cm = 6011,3 cm³. Latas: 12 · π · 3,3² · 11,5 ≈ 4721,7 cm³. Ocupan ≈ 78,5 %." },
    { nivel: "avanzado", q: "Con un cuadrado de cartón de 30 cm de lado se recortan cuadrados de 5 cm en las esquinas para hacer una caja sin tapa. Calcula su volumen. ¿Y si se recortan de 4 cm?", sol: "5 cm: 20 · 20 · 5 = 2000 cm³. 4 cm: 22 · 22 · 4 = 1936 cm³. Es mayor con 5 cm." },
    { nivel: "avanzado", q: "Explica por qué no puede existir un poliedro regular con caras hexagonales.", sol: "Cada ángulo de un hexágono regular mide 120°. En un vértice deben concurrir al menos 3 caras: 3 · 120° = 360°, que forma un plano, no un vértice de un poliedro." },
  ],
  quiz: baraja([
    { q: "Un cono es…", o: ["un cuerpo de revolución", "un poliedro", "un prisma", "una pirámide"], a: 0, e: "Gira un triángulo rectángulo." },
    { q: "Las caras laterales de una pirámide son…", o: ["triángulos", "rectángulos", "paralelogramos", "círculos"], a: 0, e: "Se juntan en la cúspide." },
    { q: "Un prisma pentagonal tiene… caras", o: ["7", "5", "10", "6"], a: 0, e: "5 + 2." },
    { q: "Fórmula de Euler:", o: ["C + V − A = 2", "C + A − V = 2", "C − V + A = 2", "C + V + A = 2"], a: 0, e: "Caras + vértices − aristas." },
    { q: "¿Cuántos poliedros regulares hay?", o: ["5", "4", "6", "infinitos"], a: 0, e: "Los sólidos platónicos." },
    { q: "El dodecaedro tiene caras…", o: ["pentagonales", "triangulares", "cuadradas", "hexagonales"], a: 0, e: "12 pentágonos." },
    { q: "Área total de un cubo de arista 3 cm:", o: ["54 cm²", "27 cm²", "36 cm²", "18 cm²"], a: 0, e: "6 · 9." },
    { q: "A_lat de un prisma =", o: ["perímetro de la base · altura", "área de la base · altura", "perímetro · apotema / 2", "4πr²"], a: 0, e: "Rectángulo del desarrollo." },
    { q: "El desarrollo lateral de un cilindro es…", o: ["un rectángulo", "un círculo", "un triángulo", "un sector circular"], a: 0, e: "Base 2πr." },
    { q: "Área de la esfera:", o: ["4πr²", "πr²", "4/3 πr³", "2πr"], a: 0, e: "Cuatro círculos máximos." },
    { q: "1 dm³ =", o: ["1 L", "1 mL", "10 L", "1000 L"], a: 0, e: "Equivalencia clave." },
    { q: "1 m³ =", o: ["1000 L", "100 L", "10 L", "1 L"], a: 0, e: "1000 dm³." },
    { q: "500 cm³ son…", o: ["0,5 L", "5 L", "50 L", "0,05 L"], a: 0, e: "500 mL." },
    { q: "Volumen de un prisma:", o: ["A_base · h", "A_base · h / 3", "P_base · h", "4/3 πr³"], a: 0, e: "Por capas." },
    { q: "Volumen de una pirámide:", o: ["A_base · h / 3", "A_base · h", "A_base · h / 2", "P · ap / 2"], a: 0, e: "Un tercio del prisma." },
    { q: "Volumen de un cilindro de r = 1 y h = 5:", o: ["5π", "10π", "π", "25π"], a: 0, e: "π · 1 · 5." },
    { q: "Volumen de la esfera:", o: ["4/3 πr³", "4πr²", "πr²h", "πr³"], a: 0, e: "Fórmula de Arquímedes." },
    { q: "Si el radio de una esfera se duplica, su volumen…", o: ["se multiplica por 8", "se duplica", "se multiplica por 4", "no cambia"], a: 0, e: "r³." },
    { q: "Generatriz de un cono de r = 6 y h = 8:", o: ["10", "14", "2", "48"], a: 0, e: "Pitágoras." },
    { q: "Para pintar una pared se calcula…", o: ["un área", "un volumen", "una capacidad", "un perímetro"], a: 0, e: "Superficie." },
  ]),
  examen: baraja([
    { q: "Pirámide hexagonal: aristas", o: ["12", "7", "18", "6"], a: 0, e: "6 de la base + 6 laterales." },
    { q: "Un poliedro con 8 caras y 6 vértices tiene… aristas", o: ["12", "14", "10", "16"], a: 0, e: "8 + 6 − A = 2." },
    { q: "Área total de un ortoedro 5 × 4 × 2:", o: ["76", "40", "38", "56"], a: 0, e: "2(20 + 8 + 10)." },
    { q: "A_lat de una pirámide cuadrangular de lado 4 y apotema 6:", o: ["48", "96", "64", "24"], a: 0, e: "4 · 4 · 6 / 2." },
    { q: "2,5 m³ son…", o: ["2500 L", "250 L", "25 L", "25 000 L"], a: 0, e: "· 1000." },
    { q: "Volumen de un cono de r = 3 y h = 5:", o: ["15π", "45π", "5π", "30π"], a: 0, e: "π · 9 · 5 / 3." },
    { q: "Volumen de una esfera de r = 3:", o: ["36π", "12π", "108π", "27π"], a: 0, e: "4/3 π · 27." },
    { q: "Litros en un cubo de 20 cm de arista:", o: ["8 L", "80 L", "0,8 L", "800 L"], a: 0, e: "8000 cm³." },
  ], 1),
  feynman: ["Por qué el volumen de una pirámide es la tercera parte del de un prisma", "Por qué solo existen cinco poliedros regulares", "Qué relación hay entre el dm³ y el litro", "Por qué la esfera no tiene desarrollo plano"],
  figura: {
    titulo: "Áreas y volúmenes en un vistazo",
    svg: resumen("Resumen del tema de cuerpos geométricos", [
      ["Poliedros", "prismas · pirámides · regulares · C + V − A = 2", "var(--pen)"],
      ["Áreas", "prisma P·h + 2B · pirámide P·ap/2 + B", "var(--leaf)"],
      ["Revolución", "cilindro 2πrh + 2πr² · cono πrg + πr² · esfera 4πr²", "var(--sun)"],
      ["Volúmenes", "prisma y cilindro B·h · pirámide y cono B·h/3", "var(--inf)"],
      ["Unidades", "1 m³ = 1000 dm³ · 1 dm³ = 1 L · esfera 4/3 πr³", "var(--red)"],
    ]),
  },
  video: pvg("cuerpos"),
  mapa: mapa("CUERPOS GEOMÉTRICOS", "var(--pen)", [
    ["Poliedros", "prismas · pirámides · Euler", "var(--pen)"],
    ["Revolución", "cilindro · cono · esfera", "var(--leaf)"],
    ["Áreas", "desarrollo plano", "var(--sun)"],
    ["Volúmenes", "B·h · B·h/3 · 4/3 πr³", "var(--red)"],
  ], 250),
  glosario: [
    ["Poliedro", "Cuerpo geométrico limitado por polígonos."],
    ["Cuerpo de revolución", "Cuerpo que se obtiene al girar una figura plana alrededor de un eje."],
    ["Cara", "Cada uno de los polígonos que limitan un poliedro."],
    ["Arista", "Segmento en el que se unen dos caras."],
    ["Vértice", "Punto en el que se unen varias aristas."],
    ["Prisma", "Poliedro con dos bases iguales y paralelas y caras laterales paralelogramos."],
    ["Pirámide", "Poliedro con una base y caras laterales triangulares que se unen en un vértice."],
    ["Poliedro regular", "Poliedro con caras polígonos regulares iguales y vértices iguales."],
    ["Fórmula de Euler", "En un poliedro convexo, C + V − A = 2."],
    ["Desarrollo plano", "Figura plana que se obtiene al desplegar la superficie de un cuerpo."],
    ["Apotema de una pirámide", "Altura de cada cara lateral de una pirámide regular."],
    ["Generatriz", "Segmento que genera la superficie lateral de un cono o un cilindro."],
    ["Volumen", "Espacio que ocupa un cuerpo; se mide en unidades cúbicas."],
    ["Capacidad", "Lo que cabe en un recipiente; se mide en litros."],
  ],
  situacion: {
    titulo: "Diseñamos un envase",
    reto: "Una empresa de zumos os encarga diseñar un envase de 1 litro. Vais a proponer tres formas distintas (ortoedro, cilindro y otra a elegir), calcular el material necesario de cada una y decidir cuál es la más eficiente.",
    pasos: [
      "Medid envases reales de 1 L (brik, botella, lata grande) y calculad su volumen y su área.",
      "Diseñad tres envases de 1000 cm³ con formas diferentes y elegid sus medidas.",
      "Calculad el área de cada diseño (material necesario) y comparadla.",
      "Construid en cartulina el desarrollo plano del diseño elegido y comprobad su capacidad con arroz o agua.",
      "Presentad vuestra propuesta argumentando ventajas (material, transporte, apilado, comodidad).",
    ],
    producto: "Una maqueta del envase, los desarrollos planos y un informe comparativo de áreas y volúmenes.",
    evaluacion: ["Calcula correctamente áreas y volúmenes de distintos cuerpos.", "Maneja la relación entre cm³ y litros.", "Construye desarrollos planos precisos.", "Argumenta la elección con criterios matemáticos y prácticos."],
  },
  tarjetas: [
    ["Poliedro", "Caras planas (polígonos)"], ["Cuerpo de revolución", "Gira una figura plana"], ["Euler", "C + V − A = 2"],
    ["Sólidos platónicos", "Tetraedro, cubo, octaedro, dodecaedro, icosaedro"], ["A prisma", "P_base · h + 2 A_base"], ["A pirámide", "P_base · ap / 2 + A_base"],
    ["A cilindro", "2πrh + 2πr²"], ["A cono", "πrg + πr²"], ["A esfera", "4πr²"],
    ["V prisma y cilindro", "A_base · h"], ["V pirámide y cono", "A_base · h / 3"], ["V esfera", "4/3 πr³"],
  ],
  familias: ["Buscad en casa objetos con forma de prisma, cilindro, cono y esfera.", "Comprobad con una jarra medidora si un brik de 1 L cabe exactamente en otro recipiente.", "Calculad cuánto papel hace falta para envolver un regalo con forma de caja.", "Desmontad una caja de cartón y observad su desarrollo plano."],
  profesores: {
    saberes: "Sentido espacial y de la medida: poliedros y cuerpos de revolución, fórmula de Euler, desarrollos planos, áreas y volúmenes, unidades de volumen y capacidad y resolución de problemas (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Construir poliedros con cartulina o palillos y plastilina.", "Llenar de arena una pirámide y un prisma de igual base y altura.", "Medir volúmenes de objetos irregulares por desplazamiento de agua.", "Proyecto de diseño de envases con criterios de eficiencia."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Sólidos platónicos", url: "https://es.wikipedia.org/wiki/S%C3%B3lido_plat%C3%B3nico" }, { t: "Wikipedia: Arquímedes", url: "https://es.wikipedia.org/wiki/Arqu%C3%ADmedes" }],
  revisado: REV,
};
