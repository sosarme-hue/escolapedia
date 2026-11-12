// Matemáticas 3º ESO: cuerpos geométricos, áreas y volúmenes. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Cuerpos geométricos: áreas y volúmenes",
  minutos: 60,
  objetivos: ["Clasificar poliedros y cuerpos de revolución y comprobar la fórmula de Euler", "Reconocer los cinco poliedros regulares", "Calcular áreas de prismas, pirámides, cilindros, conos y esferas", "Calcular volúmenes y resolver problemas con unidades de capacidad"],
  claves: ["poliedro", "Euler", "prisma", "pirámide", "cuerpo de revolución", "volumen"],
  pregunta: {
    texto: "Una lata de refresco y una caja de zumo tienen 330 ml. ¿Por qué la lata es un cilindro y no un prisma?",
    respuesta: "Para un mismo volumen, el cilindro necesita <mark>menos superficie</mark> de material que un prisma alargado, y además aguanta mejor la presión del gas. Calcular áreas y volúmenes permite diseñar envases que gasten menos material, quepan en las cajas y sean resistentes.",
  },
  bloques: [
    {
      html: `<h3>Poliedros y cuerpos de revolución</h3><p>Un <b>poliedro</b> es un cuerpo limitado por polígonos, llamados <b>caras</b>. Los lados de las caras son las <b>aristas</b> y los puntos donde se juntan, los <b>vértices</b>. Ejemplos: el cubo, los prismas y las pirámides.</p><p>Los <b>cuerpos de revolución</b> se obtienen al hacer girar una figura plana alrededor de un eje: un rectángulo genera un <b>cilindro</b>; un triángulo rectángulo, un <b>cono</b>; un semicírculo, una <b>esfera</b>. Tienen superficies curvas, por eso no son poliedros.</p>`,
      svg: svg("Un rectángulo girando alrededor de un eje genera un cilindro y un triángulo rectángulo genera un cono", `<path d="M40 30 V 150" stroke="var(--red)" stroke-width="2" stroke-dasharray="6 4"/><rect x="40" y="50" width="34" height="80" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="2"/><path d="M84 90 h 16" stroke="var(--muted)" stroke-width="2"/><path d="M96 84 l 6 6 l -6 6" fill="none" stroke="var(--muted)" stroke-width="2"/>
        <ellipse cx="140" cy="50" rx="34" ry="9" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/><path d="M106 50 V 130 A 34 9 0 0 0 174 130 V 50" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>
        <path d="M212 50 L 238 130 A 26 7 0 0 1 186 130 Z" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/>
        ${t(57, 168, "giro", { c: "var(--red)", s: 11 })}${t(140, 168, "cilindro", { c: "var(--pen)", s: 12 })}${t(212, 168, "cono", { c: "var(--leaf)", s: 12 })}`),
    },
    {
      html: `<h3>La fórmula de Euler</h3><p>En todo poliedro <b>convexo</b> (sin entrantes) se cumple la relación descubierta por Leonhard Euler:</p><p><mark>C + V = A + 2</mark></p><p>donde C es el número de caras, V el de vértices y A el de aristas. Compruébalo con un cubo: 6 caras + 8 vértices = 14 = 12 aristas + 2. Con una pirámide de base cuadrada: 5 + 5 = 10 = 8 + 2. Sirve para comprobar si has contado bien o para hallar un dato que falta.</p>${tabla(["Poliedro", "C", "V", "A"], [["Cubo", "6", "8", "12"], ["Prisma triangular", "5", "6", "9"], ["Pirámide pentagonal", "6", "6", "10"]])}`,
    },
    {
      html: `<h3>Los poliedros regulares</h3><p>Un poliedro es <b>regular</b> si todas sus caras son polígonos regulares iguales y en cada vértice concurre el mismo número de caras. Solo existen <mark>cinco</mark>, los <b>sólidos platónicos</b>:</p>${tabla(["Nombre", "Caras", "C", "V", "A"], [["Tetraedro", "triángulos", "4", "4", "6"], ["Cubo (hexaedro)", "cuadrados", "6", "8", "12"], ["Octaedro", "triángulos", "8", "6", "12"], ["Dodecaedro", "pentágonos", "12", "20", "30"], ["Icosaedro", "triángulos", "20", "12", "30"]])}<p>No hay más porque en cada vértice los ángulos de las caras deben sumar menos de 360°. Los dados de rol usan las cinco formas.</p>`,
      video: { id: "BYPw_pd-xFo", titulo: "La fórmula de Euler: V − A + C = 2", canal: "Archimedes Tube", vistas: 158992, megusta: 0 },
    },
    {
      html: `<h3>Área de prismas y cilindros</h3><p>El área total de un cuerpo es la suma de las áreas de todas sus caras: se ve muy bien en su <b>desarrollo plano</b>.</p><ul><li><b>Prisma</b>: área lateral = perímetro de la base · altura. Área total = A lateral + 2 · A base.</li><li><b>Cilindro</b>: al desenrollarlo, el lateral es un rectángulo de base 2πr y altura h. <mark>A total = 2πrh + 2πr²</mark>.</li></ul><p>Una lata de r = 3,3 cm y h = 11,5 cm tiene un área de 2π · 3,3 · 11,5 + 2π · 3,3² ≈ 238 + 68 = 306 cm² de aluminio.</p>`,
      svg: svg("Desarrollo plano de un cilindro: un rectángulo de base dos pi r y altura h, con dos círculos de radio r", `<rect x="60" y="50" width="160" height="80" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/><circle cx="100" cy="27" r="22" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2.5"/><circle cx="100" cy="153" r="22" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2.5"/>
        ${t(140, 95, "2πr · h", { c: "var(--pen)", s: 14 })}${t(48, 95, "h", { c: "var(--pen)", s: 13 })}${t(170, 146, "2πr", { c: "var(--pen)", s: 12 })}${t(100, 31, "πr²", { c: "var(--leaf)", s: 11 })}${t(100, 157, "πr²", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>Área de pirámides y conos</h3><p>Las caras laterales de una <b>pirámide</b> regular son triángulos iguales. Su altura es la <b>apotema de la pirámide</b>, a′, que se calcula con Pitágoras a partir de la altura de la pirámide y la apotema de la base. Área lateral = perímetro de la base · a′ / 2.</p><p>En el <b>cono</b>, la generatriz g es la distancia del vértice a la circunferencia de la base: g = √(h² + r²). El lateral, al desarrollarlo, es un sector circular:</p><p><mark>A lateral = πrg</mark> · A total = πrg + πr²</p>`,
    },
    {
      html: `<h3>Volumen de prismas y cilindros</h3><p>El <b>volumen</b> mide el espacio que ocupa un cuerpo. Para prismas y cilindros, se apila la base tantas veces como indica la altura:</p><p><mark>V = A base · h</mark></p><ul><li>Ortoedro (caja): V = a · b · c.</li><li>Cubo: V = l³.</li><li>Cilindro: V = πr²h.</li></ul><p>La lata anterior: π · 3,3² · 11,5 ≈ 393 cm³. Recuerda que 1 dm³ = 1 litro y 1 cm³ = 1 ml: cabrían unos 393 ml (la lata no se llena del todo y su forma no es un cilindro perfecto, por eso pone 330 ml).</p>`,
      video: { id: "MdU1V7GiOlg", titulo: "Volumen de un cilindro súper fácil", canal: "Daniel Carreón", vistas: 4397169, megusta: 0 },
    },
    {
      html: `<h3>Volumen de pirámides y conos</h3><p>Una pirámide cabe <b>tres veces</b> en el prisma de la misma base y altura. Lo mismo ocurre con el cono y el cilindro. Por eso:</p><p><mark>V pirámide = A base · h / 3</mark> · <mark>V cono = πr²h / 3</mark></p><p>Se puede comprobar llenando de arena o agua un cono de cartulina y vaciándolo en un cilindro de igual base y altura: hacen falta tres conos. La Gran Pirámide de Guiza, con 230 m de lado y 146 m de altura, tiene un volumen de unos 230² · 146 / 3 ≈ 2,6 millones de m³.</p>`,
      svg: svg("Tres conos llenan un cilindro de la misma base y altura", `${[0, 1, 2].map((i) => `<path d="M${36 + i * 40} 52 L ${18 + i * 40} 120 A 18 5 0 0 0 ${54 + i * 40} 120 Z" fill="var(--leaf)" fill-opacity=".35" stroke="var(--leaf)" stroke-width="2"/>`).join("")}${t(160, 92, "=", { s: 22 })}
        <ellipse cx="210" cy="52" rx="22" ry="6" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><path d="M188 52 V 120 A 22 6 0 0 0 232 120 V 52" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>
        ${t(76, 152, "3 conos", { c: "var(--leaf)", s: 12 })}${t(210, 152, "1 cilindro", { c: "var(--pen)", s: 12 })}${t(130, 30, "V cono = V cilindro / 3", { c: "var(--ink)", s: 12 })}`),
    },
    {
      html: `<h3>La esfera</h3><p>La <b>esfera</b> es el cuerpo formado por todos los puntos a una distancia r del centro. Sus fórmulas, descubiertas por Arquímedes, son:</p><p><mark>A = 4πr²</mark> · <mark>V = 4πr³ / 3</mark></p><p>Arquímedes estaba tan orgulloso de haber descubierto que el volumen de la esfera es <b>2/3</b> del cilindro que la envuelve que pidió que lo grabaran en su tumba. Ejemplo: un balón de r = 11 cm tiene un área de 4π · 121 ≈ 1.521 cm² y un volumen de 4π · 1.331 / 3 ≈ 5.575 cm³, unos 5,6 litros de aire.</p>`,
    },
    {
      html: `<h3>Unidades de volumen y capacidad</h3><p>Cada unidad de volumen es <b>1.000 veces</b> mayor que la siguiente: 1 m³ = 1.000 dm³ = 1.000.000 cm³. La equivalencia con la capacidad es clave:</p>${tabla(["Volumen", "Capacidad"], [["1 m³", "1.000 L (1 kL)"], ["1 dm³", "1 L"], ["1 cm³", "1 mL"]])}<p>Ejemplo: una piscina de 10 m × 5 m × 1,5 m tiene 75 m³, es decir, <mark>75.000 litros</mark>. Antes de operar, pasa todas las medidas a la misma unidad.</p>`,
    },
  ],
  figura: {
    titulo: "Fórmulas de áreas y volúmenes",
    svg: `<svg viewBox="0 0 640 280" role="img" aria-label="Prisma: volumen base por altura. Cilindro: área 2 pi r h más 2 pi r cuadrado, volumen pi r cuadrado h. Pirámide y cono: un tercio. Esfera: área 4 pi r cuadrado, volumen cuatro tercios pi r al cubo">
      <rect width="640" height="280" rx="16" fill="var(--paper)"/>
      ${[["Prisma", "A = Pbase · h + 2 Abase · V = Abase · h", "var(--pen)"], ["Cilindro", "A = 2πrh + 2πr² · V = πr²h", "var(--pen)"], ["Pirámide", "A = Pbase · a′ / 2 + Abase · V = Abase · h / 3", "var(--leaf)"], ["Cono", "A = πrg + πr² · V = πr²h / 3", "var(--leaf)"], ["Esfera", "A = 4πr² · V = 4πr³ / 3", "var(--red)"]].map(([n, d, c], i) => `<rect x="20" y="${12 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${41 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="160" y="${41 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "VpOKrHNLcEM", titulo: "Volumen de pirámides: partes de las pirámides", canal: "Daniel Carreón", vistas: 2675293, megusta: 0, busqueda: "área y volumen de prismas y pirámides" },
  quiz: mezcla([
    { q: "Un poliedro tiene 8 caras y 6 vértices. ¿Cuántas aristas tiene?", o: ["12", "14", "10"], a: 0, e: "8 + 6 = A + 2." },
    { q: "¿Cuántos poliedros regulares existen?", o: ["5", "6", "Infinitos"], a: 0, e: "Los sólidos platónicos." },
    { q: "Las caras del dodecaedro son…", o: ["triángulos", "pentágonos", "hexágonos"], a: 1, e: "12 pentágonos." },
    { q: "Al girar un triángulo rectángulo sobre un cateto se obtiene…", o: ["un cilindro", "un cono", "una esfera"], a: 1, e: "Cuerpo de revolución." },
    { q: "El volumen de un cubo de 4 cm de arista es…", o: ["16 cm³", "64 cm³", "48 cm³"], a: 1, e: "4³." },
    { q: "El volumen de un cilindro de r = 2 y h = 5 es…", o: ["20π", "10π", "40π"], a: 0, e: "π · 4 · 5." },
    { q: "Un cono y un cilindro con igual base y altura: el cono tiene…", o: ["la mitad de volumen", "un tercio", "el mismo"], a: 1, e: "V cono = V cilindro / 3." },
    { q: "El área de una esfera de radio 3 es…", o: ["36π", "12π", "9π"], a: 0, e: "4π · 9." },
    { q: "1 dm³ equivale a…", o: ["1 mL", "1 L", "1 kL"], a: 1, e: "Equivalencia clave." },
    { q: "La generatriz de un cono de r = 3 y h = 4 mide…", o: ["5", "7", "√7"], a: 0, e: "√(9 + 16)." },
  ]),
  examen: mezcla([
    { q: "Una caja de 20 × 10 × 5 cm tiene una capacidad de…", o: ["1 L", "100 mL", "10 L"], a: 0, e: "1.000 cm³ = 1 L." },
    { q: "El volumen de una esfera de radio 3 cm es…", o: ["36π cm³", "12π cm³", "108π cm³"], a: 0, e: "4π · 27 / 3." },
    { q: "Si duplicas el radio de una esfera, su volumen se multiplica por…", o: ["2", "4", "8"], a: 2, e: "Depende de r³." },
  ]),
  feynman: ["Qué dice la fórmula de Euler y cómo se comprueba con un cubo", "Por qué solo hay cinco poliedros regulares", "Por qué el volumen de la pirámide lleva un /3", "Cómo pasar de cm³ a litros"],
  mapa: mapa("CUERPOS", "var(--eso)", [
    ["Poliedros", "Euler · platónicos", "var(--pen)"],
    ["Revolución", "cilindro · cono · esfera", "var(--leaf)"],
    ["Áreas", "desarrollo plano", "var(--red)"],
    ["Volúmenes", "base · h · /3 · 4πr³/3", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["Fórmula de Euler", "C + V = A + 2"],
    ["Poliedros regulares", "Tetraedro, cubo, octaedro, dodecaedro e icosaedro."],
    ["Volumen de prisma y cilindro", "Área de la base · altura."],
    ["Volumen de pirámide y cono", "Área de la base · altura / 3."],
    ["Área lateral del cilindro", "2πrh"],
    ["Área lateral del cono", "πrg, con g = √(h² + r²)."],
    ["Esfera", "A = 4πr²; V = 4πr³ / 3."],
    ["1 dm³", "1 litro."],
  ],
  familias: ["Desmontad una caja de cereales y calculad su área total y su volumen.", "Medid una lata y comprobad si la capacidad de la etiqueta coincide con πr²h.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido espacial y de la medida: poliedros, cuerpos de revolución, fórmula de Euler, áreas y volúmenes, unidades de capacidad (RD 217/2022, Matemáticas 3º).",
    ideas: ["Construir los sólidos platónicos con desarrollos de cartulina y comprobar Euler.", "Experimento del cono y el cilindro con arena o arroz.", "Reto de diseño: envase de 1 L con la menor superficie posible."],
  },
  fuentes: [RD, { t: "Proyecto Gauss (INTEF): cuerpos geométricos", url: "https://intef.es/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Calcula el área total y el volumen de un prisma hexagonal regular de 4 cm de lado de la base, 3,46 cm de apotema de la base y 10 cm de altura.",
      pasos: ["Perímetro de la base: 6 · 4 = 24 cm. A base = 24 · 3,46 / 2 = 41,52 cm².", "A lateral = 24 · 10 = 240 cm².", "A total = 240 + 2 · 41,52 = 323,04 cm².", "V = 41,52 · 10 = 415,2 cm³."],
      resultado: "A ≈ 323 cm²; V ≈ 415 cm³." },
    { enunciado: "Un cucurucho de helado es un cono de 3 cm de radio y 12 cm de altura. ¿Cuántos mL caben?",
      pasos: ["V = πr²h / 3 = π · 9 · 12 / 3 = 36π.", "36π ≈ 113,1 cm³.", "1 cm³ = 1 mL."],
      resultado: "≈ 113 mL." },
    { enunciado: "Una pelota de tenis tiene 3,3 cm de radio. Se guardan tres en un bote cilíndrico ajustado. ¿Qué porcentaje del bote ocupan?",
      pasos: ["V tres esferas = 3 · 4π · 3,3³ / 3 = 4π · 35,94 ≈ 451,6 cm³.", "Bote: r = 3,3, h = 6 · 3,3 = 19,8 cm. V = π · 10,89 · 19,8 ≈ 677,4 cm³.", "451,6 / 677,4 ≈ 0,667."],
      resultado: "Ocupan 2/3 del bote, un 66,7 %." },
  ],
  errores: [
    "Olvidar dividir entre 3 en el volumen de pirámides y conos.",
    "Usar la altura de la pirámide en vez de la apotema para el área lateral.",
    "Confundir la generatriz del cono con su altura.",
    "Sumar solo una base en el área total de prismas y cilindros.",
    "Pasar de m³ a dm³ multiplicando por 10 en lugar de por 1.000.",
    "Mezclar unidades distintas (cm y m) en la misma fórmula.",
  ],
  ejercicios: [
    { q: "Comprueba la fórmula de Euler en un prisma pentagonal.", sol: "C = 7, V = 10, A = 15. 7 + 10 = 17 = 15 + 2 ✓." },
    { q: "Un poliedro convexo tiene 12 vértices y 30 aristas. ¿Cuántas caras tiene? ¿Cuál podría ser?", sol: "C = A + 2 − V = 32 − 12 = 20. Puede ser el icosaedro." },
    { q: "Halla el área total de un ortoedro de 8 × 5 × 3 cm.", sol: "2(8 · 5 + 8 · 3 + 5 · 3) = 2(40 + 24 + 15) = 158 cm²." },
    { q: "Halla el área total y el volumen de un cilindro de r = 5 cm y h = 12 cm.", sol: "A = 2π · 5 · 12 + 2π · 25 = 170π ≈ 534,1 cm². V = π · 25 · 12 = 300π ≈ 942,5 cm³." },
    { q: "Una pirámide cuadrangular regular tiene 6 cm de lado de base y 4 cm de altura. Halla su apotema, su área total y su volumen.", sol: "a′ = √(4² + 3²) = 5 cm. A lateral = 24 · 5 / 2 = 60 cm²; A total = 60 + 36 = 96 cm². V = 36 · 4 / 3 = 48 cm³." },
    { q: "Halla el área total de un cono de r = 6 cm y h = 8 cm.", sol: "g = 10 cm. A = π · 6 · 10 + π · 36 = 96π ≈ 301,6 cm²." },
    { q: "Calcula el volumen de una esfera de 9 cm de diámetro.", sol: "r = 4,5. V = 4π · 91,125 / 3 = 121,5π ≈ 381,7 cm³." },
    { q: "¿Cuántos litros caben en un depósito cilíndrico de 1 m de diámetro y 1,5 m de altura?", sol: "V = π · 0,5² · 1,5 ≈ 1,178 m³ ≈ 1.178 L." },
    { q: "Expresa 2,5 m³ en litros y 750 cm³ en litros.", sol: "2.500 L. 0,75 L." },
    { q: "Un acuario de 60 × 30 × 40 cm se llena hasta 5 cm del borde. ¿Cuántos litros tiene?", sol: "Altura del agua: 35 cm. V = 60 · 30 · 35 = 63.000 cm³ = 63 L." },
  ],
};
