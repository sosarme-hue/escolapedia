// Ciencias de la Naturaleza 1º de Primaria. Formato ampliado de 1º: frases cortas y un dibujo propio en cada bloque.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, arbol, check, RD } = require("./_peques");

// Objetos sencillos. (x, y) = centro.
const silla = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="#a8702e" stroke-width="5" stroke-linecap="round" fill="none"><path d="M-12 -30 V 22 M-12 0 H 14 V 22"/></g>`;
const vasoV = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M-14 -20 H 14 L 10 20 H -10 Z" fill="var(--water)" fill-opacity=".25" stroke="var(--water)" stroke-width="2.5"/>`;
const cuchara = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s}) rotate(-30)"><ellipse cy="-16" rx="8" ry="11" fill="#b8c0cf" stroke="#6b7385" stroke-width="1.5"/><rect x="-2.5" y="-6" width="5" height="30" rx="2" fill="#b8c0cf" stroke="#6b7385" stroke-width="1.5"/></g>`;
const botella = (x, y, s = 1, c = "var(--pen)") => `<path transform="translate(${x} ${y}) scale(${s})" d="M-5 -26 H 5 V -18 Q 12 -14 12 -4 V 22 H -12 V -4 Q -12 -14 -5 -18 Z" fill="${c}" fill-opacity=".8"/>`;
const libro = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -14 Q -14 -20 -26 -14 V 16 Q -14 10 0 16 Q 14 10 26 16 V -14 Q 14 -20 0 -14 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M0 -14 V 16" stroke="var(--ink)" stroke-width="1.5"/></g>`;
const ovillo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle r="16" fill="var(--red)"/><path d="M-12 -8 Q 0 -2 12 -10 M-14 2 Q 0 8 14 0 M-10 10 Q 0 14 10 10" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/></g>`;
const piedra = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M-20 10 Q -24 -6 -8 -10 Q 6 -18 16 -6 Q 26 4 18 10 Z" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/>`;
const tronco = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-22" y="-10" width="44" height="20" rx="4" fill="#a8702e"/><ellipse cx="22" cy="0" rx="6" ry="10" fill="#d9a066" stroke="#a8702e" stroke-width="1.5"/></g>`;
const pelota = (x, y, r = 14, c = "var(--red)") => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/><path d="M${x - r} ${y} H ${x + r}" stroke="#fff" stroke-width="2.5"/></g>`;
const cubo = (x, y, c, t) => `<g transform="translate(${x} ${y})"><path d="M-20 -24 H 20 L 16 22 H -16 Z" fill="${c}"/><rect x="-23" y="-30" width="46" height="8" rx="3" fill="${c}"/></g>${txt(x, y + 40, t, { size: 11 })}`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: "1-primaria",
  titulo: "Los materiales y los objetos",
  minutos: 25,
  objetivos: ["Saber que los objetos están hechos de materiales", "Distinguir materiales naturales y fabricados", "Comparar materiales: duro o blando, transparente u opaco, flota o se hunde", "Separar los residuos para reciclar"],
  claves: ["objeto", "material", "madera", "plástico", "vidrio", "reciclar"],
  pregunta: {
    texto: "¿Por qué las ventanas son de vidrio y no de madera?",
    respuesta: "Porque el vidrio es <mark>transparente</mark>: deja pasar la luz y podemos ver a través de él. La madera es <b>opaca</b>: no deja ver lo que hay detrás.",
  },
  bloques: [
    {
      html: `<h3>Objetos y materiales</h3><p>A nuestro alrededor hay muchos <mark>objetos</mark>: una silla, un vaso, una cuchara, un libro.</p><p>Cada objeto está hecho de un <mark>material</mark>. La silla es de madera. El vaso es de vidrio. La cuchara es de metal. El libro es de papel.</p><p>Algunos objetos tienen varios materiales.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una silla de madera, un vaso de vidrio, una cuchara de metal y un libro de papel">${BG}
        ${silla(40, 96, 1.3)}${vasoV(100, 96, 1.4)}${cuchara(160, 100, 1.4)}${libro(220, 96, 1.3)}
        ${txt(40, 146, "madera", { size: 12, color: "#a8702e" })}${txt(100, 146, "vidrio", { size: 12, color: "var(--water)" })}${txt(160, 146, "metal", { size: 12, color: "var(--muted)" })}${txt(220, 146, "papel", { size: 12 })}
        ${txt(130, 32, "objeto → material", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Materiales naturales</h3><p>Algunos materiales los tomamos de la <mark>naturaleza</mark>. Se llaman materiales naturales.</p><p>La <b>madera</b> viene de los árboles. La <b>lana</b> viene de las ovejas. El <b>algodón</b> viene de una planta. La <b>piedra</b> y la <b>arena</b> vienen del suelo.</p><p>Con ellos hacemos muchas cosas: muebles, jerséis, camisetas y casas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Del árbol sale madera, de la oveja sale lana y del suelo sale piedra">${BG}
        ${arbol(44, 92, 0.9)}${tronco(44, 128, 0.9)}
        <g transform="translate(130 74)"><circle r="18" fill="#f3efe6" stroke="var(--line)" stroke-width="2"/><circle cx="-12" cy="-6" r="9" fill="#f3efe6"/><circle cx="12" cy="-8" r="9" fill="#f3efe6"/><circle cx="20" cy="2" r="8" fill="var(--ink)"/><path d="M-8 16 V 26 M8 16 V 26" stroke="var(--ink)" stroke-width="3"/></g>${ovillo(130, 128, 0.8)}
        ${piedra(214, 80, 1.2)}<g fill="#e3c37a">${[...Array(8)].map((_, i) => `<circle cx="${200 + (i % 4) * 9}" cy="${124 + Math.floor(i / 4) * 7}" r="3"/>`).join("")}</g>
        ${txt(44, 160, "madera", { size: 12 })}${txt(130, 160, "lana", { size: 12 })}${txt(214, 160, "piedra y arena", { size: 12 })}
        ${txt(130, 28, "de la naturaleza", { size: 14, color: "var(--leaf)" })}</svg>`,
      video: { id: "c1lzLt2pGkc", titulo: "Materiales naturales y artificiales (para niños)", canal: "DETODOCURIOSO", vistas: 498564, megusta: 0 },
    },
    {
      html: `<h3>Materiales fabricados</h3><p>Otros materiales los <mark>fabrican las personas</mark> en las fábricas.</p><p>El <b>plástico</b> se hace con petróleo. El <b>vidrio</b> se hace con arena muy caliente. El <b>papel</b> se hace con madera.</p><p>Con estos materiales hacemos botellas, ventanas, juguetes y cuadernos.</p><p>No existen en la naturaleza tal como los usamos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una fábrica hace botellas de plástico, vasos de vidrio y papel">${BG}
        <g transform="translate(60 120)"><rect x="-44" y="-40" width="88" height="40" fill="#b8c0cf"/><path d="M-44 -40 L -26 -56 V -40 L -8 -56 V -40 L 10 -56 V -40" fill="#b8c0cf"/><rect x="24" y="-76" width="12" height="36" fill="#6b7385"/><circle cx="34" cy="-86" r="7" fill="var(--line)"/><circle cx="44" cy="-96" r="9" fill="var(--line)"/><rect x="-30" y="-26" width="14" height="14" fill="var(--sun)"/><rect x="0" y="-26" width="14" height="14" fill="var(--sun)"/></g>
        ${botella(138, 108, 1.1, "var(--pen)")}${vasoV(186, 110, 1.1)}<rect x="214" y="88" width="30" height="40" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>
        ${txt(138, 152, "plástico", { size: 12 })}${txt(186, 152, "vidrio", { size: 12 })}${txt(230, 152, "papel", { size: 12 })}
        ${txt(60, 152, "fábrica", { size: 12, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Duro o blando</h3><p>Los materiales son <mark>diferentes</mark>. Los podemos comparar con los sentidos.</p><p>Unos son <b>duros</b>, como la piedra, el metal o la madera. No cambian de forma si los apretamos.</p><p>Otros son <b>blandos</b>, como la lana, la esponja o la plastilina. Se aplastan al apretarlos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una mano aprieta una piedra que no cambia y una esponja que se aplasta">${BG}
        ${piedra(66, 106, 2)}
        <g transform="translate(190 112)"><rect x="-34" y="-12" width="68" height="24" rx="6" fill="var(--sun)"/>${[...Array(6)].map((_, i) => `<circle cx="${-24 + i * 10}" cy="${i % 2 ? -3 : 4}" r="3" fill="#c99a10"/>`).join("")}</g>
        <g stroke="var(--pen)" stroke-width="4" fill="var(--pen)"><path d="M66 36 V 62"/><path d="M58 58 L 66 70 L 74 58 Z"/><path d="M190 60 V 86"/><path d="M182 82 L 190 94 L 198 82 Z"/></g>
        ${txt(130, 30, "aprieto…", { size: 13, color: "var(--pen)" })}
        ${txt(66, 152, "duro", { size: 14, color: "var(--muted)" })}${txt(190, 152, "blando", { size: 14, color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>Transparente u opaco</h3><p>Algunos materiales dejan pasar la luz. Podemos ver a través de ellos. Son <mark>transparentes</mark>, como el vidrio o el agua.</p><p>Otros no dejan ver lo que hay detrás. Son <mark>opacos</mark>, como la madera, el cartón o el metal.</p><p>Por eso las ventanas son de vidrio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Detrás de un cristal se ve una pelota; detrás de una madera no se ve nada">${BG}
        ${pelota(60, 104, 16, "var(--red)")}<rect x="24" y="54" width="74" height="90" rx="4" fill="var(--water)" fill-opacity=".22" stroke="var(--water)" stroke-width="3"/>
        ${pelota(190, 104, 16, "var(--red)")}<rect x="152" y="54" width="74" height="90" rx="4" fill="#c98a4a"/><path d="M160 80 H 218 M160 104 H 218 M160 128 H 218" stroke="#a8702e" stroke-width="2"/>
        ${txt(61, 166, "transparente", { size: 13, color: "var(--water)" })}${txt(189, 166, "opaco", { size: 13, color: "#a8702e" })}
        ${txt(61, 40, "se ve", { size: 12, color: "var(--muted)" })}${txt(189, 40, "no se ve", { size: 12, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>¿Flota o se hunde?</h3><p>Si echamos objetos al agua, unos <mark>flotan</mark> y otros <mark>se hunden</mark>.</p><p>Un corcho, un trozo de madera o una pelota de plástico flotan. Se quedan arriba.</p><p>Una piedra, una llave o una canica de vidrio se hunden. Bajan hasta el fondo.</p><p>¡Pruébalo en la bañera!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un recipiente con agua: la madera y la pelota flotan arriba, la piedra y la llave están en el fondo">${BG}
        <rect x="24" y="60" width="212" height="100" rx="8" fill="var(--water)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>
        <path d="M24 70 q 26 -8 53 0 t 53 0 t 53 0 t 53 0" stroke="var(--water)" stroke-width="2.5" fill="none"/>
        ${tronco(70, 64, 0.8)}${pelota(150, 62, 13, "var(--sun)")}
        ${piedra(80, 146, 0.9)}<g transform="translate(170 148)"><circle cx="-12" r="7" fill="none" stroke="#b8860b" stroke-width="3"/><path d="M-5 0 H 14 M8 0 V 5 M13 0 V 5" stroke="#b8860b" stroke-width="3"/></g>
        ${txt(130, 40, "flota", { size: 14, color: "var(--pen)" })}${txt(130, 120, "se hunde", { size: 14, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Cada objeto, su material</h3><p>Elegimos el material según <mark>para qué sirve</mark> el objeto.</p><p>Las botas de agua son de goma. La goma no deja pasar el agua.</p><p>Las sartenes son de metal. El metal aguanta el fuego.</p><p>Los abrigos son de lana. La lana nos da calor.</p><p>¡Una sartén de papel no serviría!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Unas botas de goma bajo la lluvia, una sartén de metal y un abrigo de lana">${BG}
        <g fill="var(--water)">${[[30, 40], [50, 56], [70, 36], [36, 72], [76, 64]].map(([x, y]) => `<path d="M${x} ${y} l -3 8" stroke="var(--water)" stroke-width="2.5"/>`).join("")}</g>
        <path d="M34 92 H 52 V 130 H 72 V 144 H 34 Z" fill="var(--sun)" stroke="#c99a10" stroke-width="2"/>
        <g transform="translate(130 120)"><ellipse rx="28" ry="9" fill="#6b7385"/><rect x="26" y="-3" width="34" height="7" rx="3" fill="var(--ink)"/><path d="M-16 18 q 4 -8 0 -16 M0 18 q 4 -8 0 -16 M16 18 q 4 -8 0 -16" stroke="var(--inf)" stroke-width="3" fill="none" transform="translate(0 6)"/></g>
        <path d="M194 74 L 214 66 L 234 74 L 244 110 L 232 112 L 230 146 H 198 L 196 112 L 184 110 Z" fill="var(--red)"/><path d="M214 66 V 146" stroke="#a82820" stroke-width="2"/>
        ${txt(52, 166, "goma", { size: 12 })}${txt(140, 166, "metal", { size: 12 })}${txt(214, 166, "lana", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>Reducir, reutilizar y reciclar</h3><p>Muchos objetos se tiran a la basura. Podemos ayudar al planeta con <mark>tres erres</mark>.</p><p><b>Reducir</b>: usar menos cosas. <b>Reutilizar</b>: volver a usarlas, como un bote convertido en lapicero. <b>Reciclar</b>: separar la basura en contenedores.</p><p>Amarillo: plástico y latas. Azul: papel. Verde: vidrio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Contenedores amarillo para plásticos, azul para papel y verde para vidrio">${BG}
        ${cubo(56, 100, "var(--sun)", "plástico y latas")}${cubo(130, 100, "var(--pen)", "papel")}${cubo(204, 100, "var(--leaf)", "vidrio")}
        ${botella(56, 50, 0.6, "var(--water)")}<rect x="118" y="38" width="24" height="18" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>${vasoV(204, 48, 0.6)}
        ${txt(130, 24, "♻ reciclar", { size: 14, color: "var(--leaf)", font: D, weight: 800 })}</svg>`,
      video: { id: "cvakvfXj0KE", titulo: "Reducir, Reutilizar y Reciclar. Para mejorar el mundo", canal: "Happy Learning Español", vistas: 6863262, megusta: 0 },
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer los materiales nos ayuda a <mark>usar bien los objetos</mark>.</p><p>Los objetos de vidrio se rompen. Los cogemos con cuidado. Los de metal se calientan mucho al fuego. No los tocamos.</p><p>Y si separamos bien la basura, los materiales se reciclan. Así se fabrican objetos nuevos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un vaso de vidrio roto con cuidado y una cazuela de metal caliente">${BG}
        ${vasoV(64, 100, 1.6)}<path d="M54 76 L 64 92 L 58 104 L 70 120" stroke="var(--ink)" stroke-width="2" fill="none"/>
        <g transform="translate(190 112)"><rect x="-30" y="-20" width="60" height="34" rx="6" fill="#6b7385"/><rect x="-42" y="-16" width="12" height="6" rx="3" fill="var(--ink)"/><rect x="30" y="-16" width="12" height="6" rx="3" fill="var(--ink)"/><path d="M-12 -28 q 4 -8 0 -16 M0 -28 q 4 -8 0 -16 M12 -28 q 4 -8 0 -16" stroke="var(--inf)" stroke-width="3" fill="none"/></g>
        ${txt(64, 156, "¡se rompe!", { size: 13, color: "var(--water)" })}${txt(190, 156, "¡quema!", { size: 13, color: "var(--red)" })}
        ${txt(130, 30, "Con cuidado", { size: 16, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Juego: ¿de qué está hecho?</h3><p>Busca por tu casa <mark>cinco objetos</mark>.</p><p>Para cada uno, di de qué material está hecho. Después di cómo es: ¿duro o blando? ¿Transparente u opaco?</p><p>Por ejemplo: «La cuchara es de metal. Es dura y opaca».</p><p>Al final, metedlos en un barreño con agua. ¿Cuáles flotan?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una lupa sobre objetos: cuchara, botella, libro y ovillo">${BG}
        ${cuchara(50, 110, 1.2)}${botella(104, 110, 1, "var(--leaf)")}${libro(160, 112, 1.1)}${ovillo(218, 112, 1)}
        <g transform="translate(150 60)"><circle r="20" fill="var(--card)" fill-opacity=".5" stroke="var(--ink)" stroke-width="4"/><path d="M14 14 L 30 30" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/></g>
        ${txt(70, 40, "¿De qué es?", { size: 15, color: "var(--pen)", font: D, weight: 800 })}
        ${check(130, 156)}</svg>`,
    },
  ],
  figura: {
    titulo: "Los materiales y sus propiedades",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Materiales naturales y fabricados, con sus propiedades: duro o blando, transparente u opaco, flota o se hunde">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <rect x="20" y="30" width="290" height="130" rx="14" fill="var(--ok-bg)"/><rect x="330" y="30" width="290" height="130" rx="14" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
      ${txt(165, 56, "NATURALES", { size: 18, color: "var(--leaf)", font: D, weight: 800 })}${txt(475, 56, "FABRICADOS", { size: 18, color: "var(--pen)", font: D, weight: 800 })}
      ${tronco(80, 104, 1.3)}${ovillo(165, 104, 1.3)}${piedra(250, 108, 1.5)}
      ${botella(400, 104, 1.3, "var(--pen)")}${vasoV(475, 104, 1.5)}<rect x="532" y="80" width="40" height="52" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
      ${txt(80, 148, "madera", { size: 13 })}${txt(165, 148, "lana", { size: 13 })}${txt(250, 148, "piedra", { size: 13 })}${txt(400, 148, "plástico", { size: 13 })}${txt(475, 148, "vidrio", { size: 13 })}${txt(552, 148, "papel", { size: 13 })}
      ${[["duro o blando", "var(--muted)"], ["transparente u opaco", "var(--water)"], ["flota o se hunde", "var(--pen)"]].map(([t, c], i) => `<rect x="${30 + i * 200}" y="190" width="180" height="70" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>${txt(120 + i * 200, 231, t, { size: 15, color: c })}`).join("")}
    </svg>`,
  },
  video: { id: "Tx2y3BPiV6g", titulo: "¿Cuáles son las propiedades de los materiales?", canal: "FlexFlix Kids en Español", vistas: 1540707, megusta: 0, busqueda: "los materiales para niños propiedades" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿De qué material es una camiseta?",
      pasos: ["Mira la etiqueta de una camiseta.", "Muchas dicen «100 % algodón».", "El algodón sale de una planta."],
      resultado: "la camiseta es de algodón, un material natural." },
    { enunciado: "¿Dónde tiro una botella de agua vacía?",
      pasos: ["La botella es de plástico.", "El plástico va al contenedor amarillo.", "Antes, la vacío bien."],
      resultado: "la tiro al contenedor amarillo." },
    { enunciado: "¿Una llave flota o se hunde?",
      pasos: ["La llave es de metal.", "La metemos en un vaso de agua.", "Baja hasta el fondo."],
      resultado: "la llave se hunde." },
  ],
  errores: [
    "Confundir el objeto con el material: la mesa es el objeto; la madera es el material.",
    "Pensar que el vidrio y el plástico son lo mismo: el vidrio se rompe y va al contenedor verde.",
    "Creer que todo lo pequeño flota: una canica es pequeña y se hunde.",
    "Tirar todo al mismo cubo: hay que separar para poder reciclar.",
  ],
  ejercicios: [
    { q: "Di tres objetos de madera.", sol: "Por ejemplo: una mesa, un lápiz y una puerta." },
    { q: "Di dos objetos de plástico.", sol: "Por ejemplo: una botella y un cubo de playa." },
    { q: "¿De dónde viene la lana?", sol: "De las ovejas." },
    { q: "¿El papel es natural o fabricado?", sol: "Fabricado: se hace con madera." },
    { q: "Toca una esponja y una piedra. ¿Cuál es blanda?", sol: "La esponja." },
    { q: "Di un material transparente.", sol: "El vidrio (o el agua)." },
    { q: "Echa un corcho al agua. ¿Qué pasa?", sol: "Flota." },
    { q: "¿A qué contenedor va un periódico viejo?", sol: "Al azul." },
    { q: "Inventa una forma de reutilizar un bote de cristal.", sol: "Por ejemplo: como lapicero o para guardar botones." },
    { q: "¿Por qué las botas de agua son de goma?", sol: "Porque la goma no deja pasar el agua." },
  ],
  quiz: [
    { q: "La mesa está hecha de…", o: ["madera", "lana", "agua"], a: 0, e: "Muchas mesas son de madera." },
    { q: "¿Qué material viene de las ovejas?", o: ["El algodón", "La lana", "El plástico"], a: 1, e: "La lana." },
    { q: "¿Qué material es fabricado?", o: ["La piedra", "El plástico", "La madera"], a: 1, e: "Se fabrica en las fábricas." },
    { q: "El vidrio es…", o: ["transparente", "opaco", "blando"], a: 0, e: "Deja pasar la luz." },
    { q: "La esponja es…", o: ["dura", "blanda", "de vidrio"], a: 1, e: "Se aplasta al apretarla." },
    { q: "¿Qué flota en el agua?", o: ["Un corcho", "Una piedra", "Una llave"], a: 0, e: "El corcho flota." },
    { q: "Las latas van al contenedor…", o: ["azul", "verde", "amarillo"], a: 2, e: "Amarillo: plásticos y latas." },
    { q: "El papel va al contenedor…", o: ["azul", "verde", "amarillo"], a: 0, e: "Azul." },
    { q: "Las sartenes son de metal porque…", o: ["aguanta el fuego", "es transparente", "es blando"], a: 0, e: "El metal aguanta el calor." },
    { q: "Reutilizar es…", o: ["volver a usar", "tirar", "romper"], a: 0, e: "Darle otro uso." },
  ],
  examen: [
    { q: "¿De qué material es una ventana?", o: ["De vidrio", "De lana", "De papel"], a: 0, e: "Es transparente." },
    { q: "La madera viene…", o: ["de los árboles", "de las ovejas", "del petróleo"], a: 0, e: "De los árboles." },
    { q: "Una botella de vidrio va al contenedor…", o: ["amarillo", "verde", "azul"], a: 1, e: "El verde es para el vidrio." },
    { q: "La piedra es…", o: ["blanda", "dura", "transparente"], a: 1, e: "No cambia de forma." },
  ],
  feynman: ["Diferencia entre objeto y material", "Materiales naturales y fabricados", "Cómo separamos la basura para reciclar"],
  mapa: mapa("LOS MATERIALES", "var(--pri)", [
    ["Naturales", "madera · lana · piedra", "var(--leaf)"],
    ["Fabricados", "plástico · vidrio · papel", "var(--pen)"],
    ["Cómo son", "duro · blando · transparente", "var(--water)"],
    ["Reciclar", "amarillo · azul · verde", "var(--inf)"],
  ], 220),
  tarjetas: [
    ["¿De qué está hecho un objeto?", "De uno o varios materiales"],
    ["¿De dónde viene la madera?", "De los árboles"],
    ["Di un material fabricado", "Plástico, vidrio o papel"],
    ["¿Qué es transparente?", "Lo que deja pasar la luz, como el vidrio"],
    ["¿Qué es opaco?", "Lo que no deja ver lo que hay detrás"],
    ["¿El corcho flota o se hunde?", "Flota"],
    ["¿Qué va al contenedor amarillo?", "Plásticos y latas"],
    ["¿Cuáles son las tres erres?", "Reducir, reutilizar y reciclar"],
  ],
  familias: [
    "Buscad en casa objetos de madera, metal, plástico y vidrio y haced cuatro montones.",
    "En el baño, probad qué juguetes flotan y cuáles se hunden.",
    "Que ayude a separar la basura y a llevarla a cada contenedor.",
    "Convertid un envase en un objeto nuevo: un lapicero, una maceta o un juguete.",
  ],
  profesores: {
    saberes: "Ciencias, Geografía e Historia: materiales del entorno, propiedades observables y su relación con el uso de los objetos; reducción, reutilización y reciclaje (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Mesa de exploración con objetos para clasificar por material y por propiedades.", "Experimento flota o se hunde con predicción previa y registro.", "Puntos limpios de aula con tres cajas de colores."],
  },
  fuentes: [RD],
  revisado: "2026-11-12",
};
