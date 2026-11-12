// Matemáticas 1º de Primaria: formas planas y cuerpos.
const { mapa } = require("./_util");
const { svg, txt, PROF, FUENTES } = require("./_pri1");

const cubo = (x, y, s, c = "var(--pen)") => `<g><path d="M${x} ${y} h ${s} v ${s} h ${-s} Z" fill="${c}" opacity=".85"/><path d="M${x} ${y} l ${s * 0.4} ${-s * 0.35} h ${s} l ${-s * 0.4} ${s * 0.35} Z" fill="${c}" opacity=".55"/><path d="M${x + s} ${y} l ${s * 0.4} ${-s * 0.35} v ${s} l ${-s * 0.4} ${s * 0.35} Z" fill="${c}" opacity=".7"/></g>`;
const esfera = (x, y, r, c = "var(--red)") => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/><ellipse cx="${x - r * 0.35}" cy="${y - r * 0.35}" rx="${r * 0.3}" ry="${r * 0.2}" fill="var(--card)" opacity=".6"/></g>`;
const cilindro = (x, y, w, h, c = "var(--leaf)") => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}" opacity=".85"/><ellipse cx="${x + w / 2}" cy="${y + h}" rx="${w / 2}" ry="${w / 6}" fill="${c}"/><ellipse cx="${x + w / 2}" cy="${y}" rx="${w / 2}" ry="${w / 6}" fill="${c}" opacity=".55" stroke="var(--ink)" stroke-width="1"/></g>`;
const cono = (x, y, w, h, c = "var(--sun)") => `<g><path d="M${x + w / 2} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z" fill="${c}"/><ellipse cx="${x + w / 2}" cy="${y + h}" rx="${w / 2}" ry="${w / 6}" fill="${c}" stroke="var(--ink)" stroke-width="1"/></g>`;

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "Formas planas y cuerpos",
  minutos: 20,
  objetivos: ["Reconocer el círculo, el cuadrado, el triángulo y el rectángulo", "Distinguir formas planas y cuerpos", "Reconocer la esfera, el cubo, el cilindro y el cono en objetos"],
  claves: ["círculo", "cuadrado", "triángulo", "rectángulo", "lado", "esfera", "cubo"],
  pregunta: {
    texto: "Mira una pelota y una moneda. Las dos son redondas. ¿En qué se diferencian?",
    respuesta: "La moneda es casi <mark>plana</mark>: se parece a un círculo. La pelota tiene volumen, la puedes coger con la mano entera: es un <mark>cuerpo</mark>, una esfera.",
  },
  bloques: [
    {
      html: `<h3>El círculo</h3><p>El <mark>círculo</mark> es redondo. No tiene lados ni esquinas: su borde es una línea curva.</p><p>Tienen forma de círculo las monedas, la cara de un reloj, las ruedas vistas de lado y el sol cuando lo dibujamos.</p>`,
      svg: svg("Un círculo y objetos redondos: reloj y moneda", `<circle cx="70" cy="85" r="45" fill="var(--red)" opacity=".85"/><circle cx="170" cy="70" r="26" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/><path d="M170 70 V 55 M170 70 H 182" stroke="var(--ink)" stroke-width="3"/><circle cx="215" cy="125" r="18" fill="var(--sun)" stroke="var(--ink)"/>${txt(70, 160, "círculo", "var(--red)", 16)}`),
    },
    {
      html: `<h3>El cuadrado y el rectángulo</h3><p>El <mark>cuadrado</mark> tiene <b>4 lados iguales</b> y 4 esquinas.</p><p>El <mark>rectángulo</mark> también tiene 4 lados y 4 esquinas, pero <b>dos lados son más largos</b>. Una ventana puede ser cuadrada; una puerta suele ser un rectángulo.</p>`,
      svg: svg("Un cuadrado de cuatro lados iguales y un rectángulo con dos lados largos", `<rect x="25" y="40" width="80" height="80" fill="var(--pen)" opacity=".85"/><rect x="135" y="55" width="105" height="55" fill="var(--leaf)" opacity=".85"/>${txt(65, 150, "cuadrado", "var(--pen)", 15)}${txt(188, 150, "rectángulo", "var(--leaf)", 15)}`),
      video: { id: "SXONzObzFk0", titulo: "Las figuras geométricas planas para niños", canal: "Smile and Learn - Español", vistas: 3017811, megusta: 0 },
    },
    {
      html: `<h3>El triángulo</h3><p>El <mark>triángulo</mark> tiene <b>3 lados</b> y 3 esquinas. Su nombre lo dice: «tri» quiere decir tres.</p><p>Hay triángulos en el tejado de una casa, en una señal de tráfico o en un trozo de pizza o de sándwich.</p>`,
      svg: svg("Un triángulo y una casa con tejado triangular", `<path d="M70 35 L 120 125 L 20 125 Z" fill="var(--sun)"/><path d="M165 80 L 205 45 L 245 80 Z" fill="var(--red)"/><rect x="172" y="80" width="66" height="50" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="198" y="100" width="16" height="30" fill="var(--pen)"/>${txt(70, 155, "triángulo", "var(--sun)", 15)}${txt(205, 155, "tejado", "var(--muted)", 13)}`),
    },
    {
      html: `<h3>Lados y esquinas</h3><p>Para reconocer una forma, <mark>contamos sus lados</mark> y sus esquinas (también se llaman vértices).</p><p>Triángulo: 3 lados. Cuadrado y rectángulo: 4 lados. El círculo no tiene lados rectos. Pasa el dedo por el borde y cuenta.</p>`,
      svg: svg("Triángulo con 3, cuadrado con 4 y círculo con 0 lados, con las esquinas marcadas", `<path d="M45 50 L 75 110 L 15 110 Z" fill="none" stroke="var(--sun)" stroke-width="4"/>${[[45, 50], [75, 110], [15, 110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--red)"/>`).join("")}<rect x="100" y="55" width="55" height="55" fill="none" stroke="var(--pen)" stroke-width="4"/>${[[100, 55], [155, 55], [155, 110], [100, 110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--red)"/>`).join("")}<circle cx="210" cy="82" r="30" fill="none" stroke="var(--red)" stroke-width="4"/>${txt(45, 145, "3", "var(--sun)", 20)}${txt(128, 145, "4", "var(--pen)", 20)}${txt(210, 145, "0", "var(--red)", 20)}`),
    },
    {
      html: `<h3>Formas planas y cuerpos</h3><p>Las <mark>formas planas</mark> se pueden dibujar en un papel: son lisas, como una pegatina.</p><p>Los <mark>cuerpos</mark> ocupan sitio: se pueden coger, tienen delante, detrás y grosor. Un dibujo de un cuadrado es plano; un dado es un cuerpo.</p>`,
      svg: svg("Un cuadrado plano dibujado en un papel y un dado que es un cuerpo", `<rect x="20" y="45" width="100" height="90" rx="4" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><rect x="45" y="65" width="50" height="50" fill="var(--pen)" opacity=".6"/>${cubo(160, 70, 55, "var(--red)")}${txt(70, 160, "plano", "var(--pen)", 15)}${txt(195, 160, "cuerpo", "var(--red)", 15)}`),
    },
    {
      html: `<h3>La esfera y el cubo</h3><p>La <mark>esfera</mark> es totalmente redonda y <b>rueda</b> hacia todos los lados, como una pelota o una canica.</p><p>El <mark>cubo</mark> tiene 6 caras cuadradas iguales. No rueda: se queda quieto. Un dado y muchas cajas son cubos.</p>`,
      svg: svg("Una esfera como una pelota y un cubo como un dado", `${esfera(70, 85, 42)}${cubo(150, 70, 60, "var(--pen)")}${txt(70, 160, "esfera", "var(--red)", 15)}${txt(192, 160, "cubo", "var(--pen)", 15)}`),
      video: { id: "5GLduNQ5kA4", titulo: "Los cuerpos geométricos para niños", canal: "Smile and Learn - Español", vistas: 4795292, megusta: 0 },
    },
    {
      html: `<h3>El cilindro y el cono</h3><p>El <mark>cilindro</mark> tiene dos caras redondas, una arriba y otra abajo. Rueda si lo tumbas. Una lata y un rollo de papel son cilindros.</p><p>El <mark>cono</mark> tiene una cara redonda y una punta. Un cucurucho de helado y un gorro de fiesta son conos.</p>`,
      svg: svg("Un cilindro como una lata y un cono como un cucurucho", `${cilindro(35, 45, 70, 85)}${cono(150, 35, 80, 95)}${txt(70, 165, "cilindro", "var(--leaf)", 15)}${txt(190, 165, "cono", "var(--sun)", 15)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Las formas nos ayudan a <b>describir</b> las cosas y a construir. Las ruedas son redondas para rodar. Las cajas son cubos para apilarlas.</p><p>Los arquitectos usan <mark>formas y cuerpos</mark> para hacer casas, puentes y torres. Mira a tu alrededor: ¡están en todas partes!</p>`,
      svg: svg("Una torre hecha con un cubo, un cilindro y un cono encima", `${cubo(95, 110, 55, "var(--pen)")}${cilindro(100, 62, 45, 45, "var(--leaf)")}${cono(98, 15, 50, 45, "var(--red)")}${txt(215, 90, "¡una torre!", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>Juego: el monstruo de las formas</h3><p>Dibuja un <mark>monstruo con formas</mark>: la cabeza un círculo, el cuerpo un rectángulo, las orejas triángulos y los pies cuadrados.</p><p>Después cuenta: ¿cuántos círculos has usado? ¿Y cuántos triángulos? Enseña tu monstruo y pide que adivinen las formas.</p>`,
      svg: svg("Un monstruo dibujado con un círculo de cabeza, un rectángulo de cuerpo, triángulos de orejas y cuadrados de pies", `<path d="M105 35 L 112 15 L 120 35 Z M140 35 L 148 15 L 155 35 Z" fill="var(--sun)"/><circle cx="130" cy="52" r="26" fill="var(--leaf)"/><circle cx="120" cy="48" r="5" fill="var(--card)"/><circle cx="140" cy="48" r="5" fill="var(--card)"/><rect x="100" y="80" width="60" height="55" fill="var(--pen)" opacity=".85"/><rect x="100" y="138" width="22" height="22" fill="var(--red)"/><rect x="138" y="138" width="22" height="22" fill="var(--red)"/>`),
    },
  ],
  figura: {
    titulo: "Formas planas y cuerpos",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Arriba las formas planas: círculo, cuadrado, triángulo y rectángulo. Abajo los cuerpos: esfera, cubo, cilindro y cono">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${txt(60, 30, "Planas", "var(--muted)", 14)}${txt(60, 175, "Cuerpos", "var(--muted)", 14)}
      <circle cx="170" cy="80" r="35" fill="var(--red)" opacity=".85"/><rect x="255" y="45" width="70" height="70" fill="var(--pen)" opacity=".85"/><path d="M420 45 L 460 115 L 380 115 Z" fill="var(--sun)"/><rect x="510" y="55" width="100" height="55" fill="var(--leaf)" opacity=".85"/>
      ${["círculo", "cuadrado", "triángulo", "rectángulo"].map((t, i) => txt([170, 290, 420, 560][i], 140, t, "var(--ink)", 14)).join("")}
      ${esfera(170, 220, 35)}${cubo(260, 200, 55, "var(--pen)")}${cilindro(390, 185, 60, 55)}${cono(525, 180, 70, 65)}
      ${["esfera", "cubo", "cilindro", "cono"].map((t, i) => txt([170, 290, 420, 560][i], 285, t, "var(--ink)", 14)).join("")}
    </svg>`,
  },
  video: { id: "XPRSONHI-bQ", titulo: "Las figuras y los cuerpos geométricos", canal: "FlexFlix Kids en Español", vistas: 4332598, megusta: 0, busqueda: "figuras planas y cuerpos geométricos para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué forma tiene una señal de «ceda el paso»?", pasos: ["Mira la señal y pasa el dedo por el borde.", "Cuenta los lados: 1, 2, 3.", "Tres lados es un triángulo."], resultado: "es un triángulo." },
    { enunciado: "¿Una lata de tomate es una esfera o un cilindro?", pasos: ["Tiene una cara redonda arriba y otra abajo.", "Si la tumbas, rueda; de pie, no.", "Eso es un cilindro."], resultado: "es un cilindro." },
    { enunciado: "¿Cuántos lados hay en total en un cuadrado y un triángulo?", pasos: ["El cuadrado tiene 4 lados.", "El triángulo tiene 3 lados.", "Sumo: 4 + 3 = 7."], resultado: "hay 7 lados." },
  ],
  errores: [
    "Llamar cuadrado a cualquier forma de 4 lados: si dos lados son más largos, es un rectángulo.",
    "Pensar que un triángulo girado ya no es un triángulo: lo que importa son sus 3 lados.",
    "Confundir el círculo (plano) con la esfera (cuerpo).",
    "Decir que el cono tiene dos caras redondas: solo tiene una y una punta.",
  ],
  ejercicios: [
    { q: "¿Cuántos lados tiene un triángulo?", sol: "3 lados." },
    { q: "¿Cuántos lados tiene un rectángulo?", sol: "4 lados." },
    { q: "Dibuja un círculo, un cuadrado y un triángulo.", sol: "Comprobad: el círculo sin esquinas, el cuadrado con 4 lados iguales y el triángulo con 3." },
    { q: "Nombra dos cosas de casa con forma de rectángulo.", sol: "Por ejemplo, una puerta, un libro o la tele." },
    { q: "¿Qué cuerpo es una pelota?", sol: "Una esfera." },
    { q: "¿Qué cuerpo es un dado?", sol: "Un cubo." },
    { q: "¿Qué cuerpo es un gorro de cumpleaños?", sol: "Un cono." },
    { q: "¿Qué rueda mejor, una esfera o un cubo?", sol: "La esfera." },
    { q: "¿Cuántas caras tiene un cubo?", sol: "6 caras." },
    { q: "Busca en clase algo con forma de cilindro.", sol: "Por ejemplo, un bote de lápices, un rotulador o una papelera." },
  ],
  quiz: [
    { q: "¿Qué forma no tiene esquinas?", o: ["cuadrado", "círculo", "triángulo"], a: 1, e: "El círculo es redondo." },
    { q: "Un triángulo tiene…", o: ["3 lados", "4 lados", "5 lados"], a: 0, e: "«Tri» es tres." },
    { q: "Una forma con 4 lados iguales es un…", o: ["rectángulo", "cuadrado", "círculo"], a: 1, e: "Cuadrado." },
    { q: "Una puerta suele tener forma de…", o: ["rectángulo", "triángulo", "círculo"], a: 0, e: "Dos lados largos y dos cortos." },
    { q: "Una pelota es…", o: ["un cilindro", "una esfera", "un cubo"], a: 1, e: "Redonda por todas partes." },
    { q: "Un dado es…", o: ["un cubo", "un cono", "un círculo"], a: 0, e: "6 caras cuadradas." },
    { q: "Una lata de refresco es…", o: ["una esfera", "un cilindro", "un cono"], a: 1, e: "Dos caras redondas." },
    { q: "Un cucurucho de helado es…", o: ["un cono", "un cubo", "un rectángulo"], a: 0, e: "Una cara redonda y una punta." },
    { q: "¿Cuál es una forma plana?", o: ["el dado", "el cuadrado", "la pelota"], a: 1, e: "Se puede dibujar en un papel." },
    { q: "¿Cuál rueda?", o: ["el cubo", "la esfera", "el cuadrado"], a: 1, e: "La esfera rueda hacia todos lados." },
  ],
  examen: [
    { q: "¿Cuántas esquinas tiene un cuadrado?", o: ["3", "4", "0"], a: 1, e: "4 esquinas." },
    { q: "¿Qué forma tiene una moneda?", o: ["círculo", "triángulo", "cuadrado"], a: 0, e: "Redonda y plana." },
    { q: "Un rollo de papel de cocina es…", o: ["un cono", "un cilindro", "un cubo"], a: 1, e: "Dos caras redondas." },
    { q: "La esfera es…", o: ["una forma plana", "un cuerpo", "un lado"], a: 1, e: "Ocupa sitio." },
  ],
  feynman: ["En qué se diferencian el cuadrado y el rectángulo", "Qué diferencia hay entre una forma plana y un cuerpo", "Qué cuerpos ruedan y cuáles no"],
  mapa: mapa("FORMAS Y CUERPOS", "var(--pri)", [
    ["Planas", "se dibujan en un papel", "var(--pen)"],
    ["Lados", "triángulo 3 · cuadrado 4", "var(--sun)"],
    ["Cuerpos", "esfera · cubo · cilindro · cono", "var(--red)"],
    ["Ruedan", "esfera · cilindro · cono", "var(--leaf)"],
  ], 220),
  tarjetas: [
    ["Forma redonda y plana", "Círculo"],
    ["3 lados", "Triángulo"],
    ["4 lados iguales", "Cuadrado"],
    ["4 lados, dos más largos", "Rectángulo"],
    ["Una pelota es…", "Una esfera"],
    ["Un dado es…", "Un cubo"],
    ["Una lata es…", "Un cilindro"],
    ["Un cucurucho es…", "Un cono"],
  ],
  familias: [
    "Jugad a «veo veo una forma»: algo redondo, algo con 3 lados…",
    "Buscad cuerpos en la cocina: latas (cilindros), naranjas (esferas), cajas (cubos).",
    "Recortad formas de papel de colores y haced un dibujo con ellas.",
    "Construid torres con cajas y botes y hablad de qué cuerpos se apilan mejor.",
  ],
  profesores: PROF("Sentido espacial: reconocimiento, descripción y clasificación de figuras planas (círculo, cuadrado, rectángulo, triángulo) y cuerpos geométricos (esfera, cubo, cilindro, cono) en el entorno", ["Bolsa misteriosa: tocar un cuerpo sin verlo y adivinarlo.", "Caza de formas por el colegio con fotos.", "Construcciones con bloques lógicos y materiales reciclados."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
