// Comunicación y representación, Infantil 4 años: dibujar la figura humana.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, secuencia, dibujos, ic, vid, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

// Persona dibujada por partes (como la dibuja un niño): cabeza, cara, cuerpo, brazos, piernas, pelo.
// (x, y) = centro de la cabeza. «hasta» = cuántas partes se dibujan (1 a 6).
function muneco(x, y, hasta = 6, s = 1, c = "var(--pen)") {
  const p = [
    `<circle cx="0" cy="0" r="16" fill="#f3c9a1" stroke="var(--ink)" stroke-width="2"/>`,
    `<circle cx="-6" cy="-3" r="2.2" fill="var(--ink)"/><circle cx="6" cy="-3" r="2.2" fill="var(--ink)"/><path d="M-6 6 q6 6 12 0" stroke="var(--ink)" stroke-width="2" fill="none"/>`,
    `<path d="M-14 18 H14 L18 62 H-18z" fill="${c}"/>`,
    `<path d="M-14 24 L-34 48 M14 24 L34 48" stroke="${c}" stroke-width="6" stroke-linecap="round"/><circle cx="-35" cy="50" r="4" fill="#f3c9a1"/><circle cx="35" cy="50" r="4" fill="#f3c9a1"/>`,
    `<path d="M-8 62 V96 M8 62 V96" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/><path d="M-8 96 h-8 M8 96 h8" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/>`,
    `<path d="M-16 -4 q0 -16 16 -16 q16 0 16 16 q-6 -8 -16 -8 q-10 0 -16 8z" fill="#5a3a1b"/>`,
  ];
  return `<g transform="translate(${x} ${y}) scale(${s})">${p.slice(0, hasta).join("")}</g>`;
}

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "4-anos",
  titulo: "Dibujar la figura humana",
  minutos: 15,
  objetivos: ["Dibujar una persona con cabeza, cuerpo, brazos y piernas", "Poner los detalles de la cara: ojos, nariz y boca", "Dibujarse a uno mismo y a la familia"],
  claves: ["cabeza", "cuerpo", "brazos", "piernas", "cara", "dibujo"],
  pregunta: {
    texto: "Si dibujas a mamá o a papá, ¿qué pintas primero?",
    respuesta: "Casi siempre empezamos por la <mark>cabeza</mark>. Después el <b>cuerpo</b>, los <b>brazos</b> y las <b>piernas</b>. ¡Y no olvides la cara!",
  },
  bloques: [
    {
      html: `<h3>Las partes de una persona</h3><p>Una persona tiene <mark>cabeza</mark>, <mark>cuerpo</mark>, dos <b>brazos</b> y dos <b>piernas</b>.</p><p>Tócate cada parte: la cabeza arriba, el cuerpo en medio y las piernas abajo.</p><p>¡Así la dibujaremos!</p>`,
      svg: svg("Una persona con flechas que señalan la cabeza, el cuerpo, los brazos y las piernas", `${muneco(130, 38, 6, 1.15)}${rot(50, 42, "cabeza", { color: R })}<path d="M78 38 H108" stroke="var(--red)" stroke-width="2"/>${rot(215, 80, "cuerpo", { color: A })}<path d="M190 76 H150" stroke="var(--pen)" stroke-width="2"/>${rot(48, 100, "brazo", { color: V })}<path d="M70 96 H88" stroke="var(--leaf)" stroke-width="2"/>${rot(210, 150, "piernas", { color: N })}<path d="M182 146 H148" stroke="var(--inf)" stroke-width="2"/>`),
    },
    {
      html: `<h3>Paso a paso</h3><p>Primero hacemos un <mark>círculo</mark> para la cabeza.</p><p>Después, el cuerpo debajo, pegado a la cabeza.</p><p>Luego, dos brazos a los lados y dos piernas abajo.</p><p>¡Sin prisa, paso a paso!</p>`,
      svg: secuencia("Tres pasos: la cabeza; la cabeza con el cuerpo; la persona con brazos y piernas", [["", "cabeza", R, muneco(0, -20, 1, 0.55)], ["", "cuerpo", A, muneco(0, -20, 3, 0.55)], ["", "piernas", V, muneco(0, -22, 5, 0.55)]], { titulo: "Dibujamos paso a paso" }),
    },
    {
      html: `<h3>La cara</h3><p>En la cara ponemos dos <mark>ojos</mark>, una <b>nariz</b> y una <b>boca</b>.</p><p>Si la boca sonríe, la persona está contenta. Si va hacia abajo, está triste.</p><p>¡No olvides el pelo y las orejas!</p>`,
      svg: dibujos("Dos ojos, una nariz y una boca para la cara", [["ojo", "ojos", A], ["nariz", "nariz", R], ["boca", "boca", V], ["feliz", "sonrisa", N]], { titulo: "Lo que lleva la cara" }),
    },
    {
      html: `<h3>Los detalles</h3><p>Los <mark>detalles</mark> hacen el dibujo especial.</p><p>Podemos poner dedos en las manos, zapatos en los pies y ropa de colores.</p><p>¿Llevas gafas? ¿Tienes coletas? ¡Dibújalo!</p>`,
      svg: svg("Dos personas: una sencilla y otra con pelo, ropa de color y zapatos", `${muneco(70, 40, 5, 0.95, "var(--muted)")}${muneco(190, 40, 6, 0.95, "var(--red)")}<circle cx="184" cy="37" r="7" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="196" cy="37" r="7" fill="none" stroke="var(--ink)" stroke-width="2"/>${rot(70, 172, "sencilla", { color: G })}${rot(190, 172, "con detalles", { color: R })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Dibujando personas <mark>contamos cosas</mark> sin palabras.</p><p>Podemos dibujar a nuestra familia, a los amigos o lo que hicimos el domingo.</p><p>Además, aprendemos cómo es nuestro cuerpo.</p>`,
      svg: svg("Una familia dibujada: papá, mamá y un niño junto a una casa", `${muneco(60, 50, 6, 0.8, "var(--pen)")}${muneco(115, 50, 6, 0.8, "var(--red)")}${muneco(165, 82, 6, 0.5, "var(--leaf)")}${ic("casa", 222, 112, 1.6)}${suelo(132)}${rot(130, 166, "Mi familia", { color: A })}`),
    },
    {
      html: `<h3>Juego: el espejo y el autorretrato</h3><p>Mírate en un <mark>espejo</mark>. ¿De qué color son tus ojos? ¿Y tu pelo?</p><p>Ahora dibújate a ti mismo con todos los detalles.</p><p>Enséñalo y di: «¡Este soy yo!».</p>`,
      svg: svg("Un niño se mira en un espejo y al lado está su dibujo", `<rect x="22" y="22" width="80" height="120" rx="40" fill="#cfe9ff" stroke="var(--ink)" stroke-width="3"/>${nino(62, 128, { c: A, s: 1 })}<rect x="138" y="22" width="100" height="120" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${muneco(188, 46, 6, 0.75, "var(--pen)")}${rot(62, 166, "me miro", { color: A })}${rot(188, 166, "¡este soy yo!", { color: R })}`),
    },
  ],
  figura: {
    titulo: "Cómo dibujar una persona",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Cinco pasos para dibujar una persona: cabeza, cara, cuerpo, brazos y piernas">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[1, 2, 3, 4, 6].map((h, i) => `<rect x="${16 + i * 124}" y="20" width="112" height="260" rx="14" fill="var(--card)" stroke="${[R, A, V, N, M][i]}" stroke-width="3"/>${muneco(72 + i * 124, 70, h, 1)}<text x="${72 + i * 124}" y="262" text-anchor="middle" font-size="18" font-weight="800" fill="${[R, A, V, N, M][i]}">${i + 1}. ${["cabeza", "cara", "cuerpo", "brazos", "piernas"][i]}</text>`).join("")}
    </svg>`,
  },
  video: { ...vid("6AjMpA93a3w", "Cómo dibujar un niño paso a paso", "Rincón Dibujos", 5192843), busqueda: "cómo dibujar una persona para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Dibujamos a mamá.", pasos: ["Un círculo para la cabeza, con ojos, nariz y boca.", "El cuerpo debajo, con su ropa de color.", "Dos brazos, dos piernas y el pelo."], resultado: "¡mamá ya está en el papel!" },
    { enunciado: "¿Qué le falta a este dibujo: cabeza, cuerpo y piernas?", pasos: ["Contamos las partes que tiene.", "Nos tocamos nuestro cuerpo para comparar."], resultado: "le faltan los brazos." },
  ],
  errores: [
    "Pegar los brazos a la cabeza: los brazos salen del cuerpo.",
    "Olvidar la boca o los ojos: la cara necesita sus detalles.",
    "Dibujar la persona muy pequeñita en una esquina: mejor grande, en medio del papel.",
  ],
  ejercicios: [
    { q: "Dibújate a ti mismo.", sol: "Para la familia: no corrijáis; preguntad por cada parte para que la nombre." },
    { q: "Dibuja a tu familia.", sol: "Para la familia: es normal que dibuje más grande a quien siente más importante." },
    { q: "Completa una persona a la que le faltan las piernas.", sol: "Dos piernas que salen de abajo del cuerpo." },
    { q: "Haz una persona con plastilina: bola, churro y palitos.", sol: "Bola para la cabeza, churro para el cuerpo y churritos para brazos y piernas." },
    { q: "Túmbate en un papel grande y que un adulto dibuje tu silueta.", sol: "Para la familia: luego pintad juntos la cara y la ropa." },
    { q: "Dibuja una cara contenta y una cara triste.", sol: "Boca hacia arriba: contenta. Boca hacia abajo: triste." },
  ],
  quiz: [
    { q: "¿Qué dibujamos primero?", o: ["La cabeza", "Los zapatos", "El pelo"], a: 0, e: "Empezamos por un círculo para la cabeza." },
    { q: "¿Cuántas piernas tiene una persona?", o: ["Una", "Dos", "Cuatro"], a: 1, e: "Dos piernas." },
    { q: "Los brazos salen…", o: ["Del cuerpo", "De la cabeza", "De los pies"], a: 0, e: "Salen de los lados del cuerpo." },
    { q: "En la cara ponemos…", o: ["Ojos, nariz y boca", "Ruedas", "Hojas"], a: 0, e: "Son las partes de la cara." },
    { q: "Una boca hacia arriba está…", o: ["Contenta", "Triste", "Dormida"], a: 0, e: "Es una sonrisa." },
    { q: "¿Dónde está el cuerpo?", o: ["Debajo de la cabeza", "Encima de la cabeza", "Al lado"], a: 0, e: "Pegado debajo de la cabeza." },
  ],
  examen: [
    { q: "¿Cuántos ojos dibujamos?", o: ["Uno", "Dos", "Tres"], a: 1, e: "Dos ojos." },
    { q: "Las piernas van…", o: ["Abajo", "Arriba", "En la cabeza"], a: 0, e: "Debajo del cuerpo." },
    { q: "Para ver cómo soy uso…", o: ["Un espejo", "Una cuchara", "Un zapato"], a: 0, e: "En el espejo me veo." },
  ],
  feynman: ["Explica a alguien cómo se dibuja una persona", "Dibuja a alguien de tu familia y cuéntale cómo es"],
  mapa: mapa("DIBUJAR UNA PERSONA", "var(--inf)", [
    ["1. Cabeza", "un círculo", R],
    ["2. Cara", "ojos, nariz, boca", A],
    ["3. Cuerpo", "debajo de la cabeza", V],
    ["4. Brazos y piernas", "dos y dos", N],
  ], 220),
  tarjetas: [
    ["¿Qué se dibuja primero?", "La cabeza"],
    ["¿Qué va en la cara?", "Ojos, nariz y boca"],
    ["¿Cuántos brazos tiene una persona?", "Dos"],
    ["¿De dónde salen los brazos?", "Del cuerpo"],
    ["¿Dónde van las piernas?", "Debajo del cuerpo"],
    ["¿Con qué me veo la cara?", "Con un espejo"],
  ],
  familias: [
    "Guardad un dibujo suyo de una persona cada mes: veréis cómo añade detalles.",
    "Al dibujar, preguntad «¿qué le falta?» en lugar de corregir.",
    "Jugad delante del espejo a tocar y nombrar las partes del cuerpo.",
    "Haced siluetas con tiza en el suelo y completadlas juntos.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: lenguaje plástico, representación gráfica del esquema corporal, evolución del dibujo de la figura humana y expresión de vivencias", ["Autorretrato frente al espejo al principio y al final del trimestre.", "Puzle del cuerpo con piezas recortadas.", "Siluetas a tamaño real en papel continuo."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
