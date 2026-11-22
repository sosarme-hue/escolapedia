// Ciencias de la Naturaleza 2º de Primaria: materiales y objetos. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, silla, botella, lata, caja, contenedor, tijeras, ladrillo, arbol, vaca, chip, flechaR, tick, equis, pino, nino, suelo, hierba } = require("./_pri2b");

const roca = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M-22 0 Q-26 -16 -10 -20 Q6 -28 18 -16 Q28 -6 20 0Z" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/>`;
const oveja = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">${[-14, -4, 6, 14].map((a) => `<circle cx="${a}" cy="-20" r="10" fill="#fff" stroke="var(--line)"/>`).join("")}<circle cx="22" cy="-24" r="7" fill="#1b2235"/><path d="M-10 -10 V0 M10 -10 V0" stroke="#1b2235" stroke-width="3"/></g>`;
const jersey = (x, y, c = "var(--red)") => `<path transform="translate(${x} ${y})" d="M-14 -24 L-30 -14 L-24 -2 L-16 -8 V20 H16 V-8 L24 -2 L30 -14 L14 -24 q-14 8 -28 0Z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>`;
const goma = (x, y) => `<rect x="${x - 18}" y="${y - 8}" width="36" height="16" rx="4" fill="#f4b6c2" stroke="var(--ink)" stroke-width="1.5"/>`;
const clavo = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-8" y="-30" width="16" height="4" fill="#9aa3b5"/><path d="M-2 -26 V4 L0 10 L2 4 V-26Z" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1"/></g>`;
const papel = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-16 -22 H10 L16 -16 V22 H-16Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/>${[-12, -4, 4, 12].map((yy) => `<path d="M-10 ${yy} H10" stroke="var(--line)"/>`).join("")}</g>`;

module.exports = tema({
  materia: "Ciencias de la Naturaleza",
  titulo: "Materiales y objetos",
  objetivos: ["Distinguir entre objeto y material", "Conocer de dónde vienen los materiales: naturales y artificiales", "Describir propiedades de los materiales y aprender a reciclar"],
  claves: ["objeto", "material", "natural", "artificial", "duro", "flexible", "reciclar"],
  pregunta: {
    texto: "Una mesa del cole y un lápiz son objetos distintos. ¿Tienen algo en común?",
    respuesta: "¡Sí! Los dos pueden estar hechos del mismo <mark>material</mark>: la <b>madera</b>. La madera viene de los árboles. Un <b>objeto</b> es la cosa; el <b>material</b> es aquello de lo que está hecha.",
  },
  bloques: [
    {
      html: `<h3>Objetos y materiales</h3><p>Todo lo que nos rodea son <mark>objetos</mark>: una silla, una botella, un cuaderno o un balón.</p><p>Los objetos están hechos de <mark>materiales</mark>. La silla puede ser de madera; la botella, de vidrio o de plástico; el cuaderno, de papel. Un mismo objeto se puede hacer con materiales distintos.</p>`,
      svg: svg("Una silla de madera, una botella de vidrio y un cuaderno de papel", `${suelo(140)}${silla(50, 140, 1.1)}${botella(130, 140, 1.4, "var(--leaf)")}${papel(206, 116)}${chip(50, 164, 72, "madera", "#8a5a2b", 12)}${chip(130, 164, 72, "vidrio", "var(--leaf)", 12)}${chip(206, 164, 72, "papel", "var(--pen)", 12)}${big(130, 30, "objeto → material", "var(--ink)", 16)}`),
    },
    {
      html: `<h3>Materiales naturales</h3><p>Algunos materiales los sacamos directamente de la <mark>naturaleza</mark>. Son <b>materiales naturales</b>.</p><p>La <b>madera</b> viene de los árboles. La <b>lana</b>, de las ovejas. El <b>algodón</b>, de una planta. La <b>piedra</b> y la <b>arena</b>, de la tierra. Y el cuero, de la piel de los animales.</p>`,
      svg: svg("Un árbol da madera, una oveja da lana y una roca da piedra", `${hierba(130)}${arbol(48, 130, 1.3)}${oveja(130, 128, 1.2)}${roca(212, 128, 1.4)}${txt(48, 156, "madera", "#8a5a2b", 13)}${txt(130, 156, "lana", "var(--pen)", 13)}${txt(212, 156, "piedra", "var(--muted)", 13)}${big(130, 30, "De la naturaleza", "var(--leaf)", 17)}`),
    },
    {
      html: `<h3>Materiales artificiales</h3><p>Otros materiales los <mark>fabrican las personas</mark> en las fábricas, cambiando los naturales. Son <b>materiales artificiales</b>.</p><p>El <b>plástico</b> se hace con petróleo. El <b>vidrio</b>, con arena muy caliente. El <b>papel</b>, con madera triturada. Y el metal se saca de las rocas y se funde.</p>`,
      svg: svg("La arena se convierte en vidrio y la madera en papel en la fábrica", `${roca(36, 80, 0.8)}<path d="M20 80 h32 l-4 -8 h-24z" fill="#e8d29a"/>${flechaR(60, 74, 96, 74)}${botella(120, 96, 1, "var(--leaf)")}${arbol(36, 150, 0.8)}${flechaR(60, 134, 96, 134)}${papel(120, 136)}<g transform="translate(206 120)"><rect x="-34" y="-40" width="68" height="48" fill="#9aa3b5" stroke="var(--ink)"/><path d="M-34 -40 l17 -14 v14 l17 -14 v14 l17 -14 v14" fill="#9aa3b5" stroke="var(--ink)"/><rect x="18" y="-74" width="10" height="26" fill="#6b7385"/></g>${txt(206, 160, "fábrica", "var(--muted)", 13)}`),
    },
    {
      html: `<h3>Duro o blando</h3><p>Los materiales tienen <mark>propiedades</mark>: son sus características. Una es la <b>dureza</b>.</p><p>Los materiales <b>duros</b> no se rayan ni se doblan fácilmente, como la piedra, el metal o la madera. Los materiales <b>blandos</b> se aplastan con los dedos, como la plastilina, la goma o la esponja.</p>`,
      svg: svg("Un clavo y una piedra son duros; una esponja y una goma son blandas", `${clavo(40, 100)}${roca(96, 104, 1.1)}<rect x="146" y="80" width="40" height="26" rx="4" fill="var(--sun)" stroke="var(--ink)"/>${[154, 166, 178].map((a) => `<circle cx="${a}" cy="93" r="3" fill="#e0b000"/>`).join("")}${goma(222, 94)}${chip(68, 144, 90, "duros", "var(--muted)", 13)}${chip(186, 144, 90, "blandos", "var(--red)", 13)}`),
      video: V("zJdu0iIiAsU"),
    },
    {
      html: `<h3>Más propiedades</h3><p>Hay materiales <mark>transparentes</mark>, que dejan ver a través de ellos, como el vidrio de la ventana. Otros son <b>opacos</b> y no dejan pasar la luz, como la madera.</p><p>Hay materiales <b>flexibles</b>, que se doblan sin romperse, como la goma. Y otros <b>rígidos</b>, que no se doblan. Algunos son <b>impermeables</b> y no dejan pasar el agua, como el plástico del chubasquero.</p>`,
      svg: svg("Una ventana transparente, una puerta opaca y una goma que se dobla", `<rect x="20" y="40" width="60" height="70" rx="4" fill="var(--water)" opacity=".25" stroke="var(--ink)" stroke-width="2"/><path d="M50 40 V110 M20 75 H80" stroke="var(--ink)" stroke-width="2"/><circle cx="64" cy="58" r="8" fill="var(--sun)"/><rect x="100" y="40" width="50" height="70" rx="4" fill="#a0662f" stroke="var(--ink)" stroke-width="2"/><circle cx="140" cy="78" r="3" fill="var(--sun)"/><path d="M178 100 q20 -50 60 -20" stroke="#f4b6c2" stroke-width="10" fill="none" stroke-linecap="round"/>${txt(50, 134, "transparente", "var(--water)", 12)}${txt(125, 134, "opaco", "#8a5a2b", 12)}${txt(210, 134, "flexible", "var(--red)", 12)}`),
    },
    {
      html: `<h3>Cada material para su uso</h3><p>Elegimos el material según para qué sirve el objeto. Las <mark>ventanas</mark> son de vidrio para ver a través. Los <b>chubasqueros</b>, de plástico para no mojarnos.</p><p>Las <b>tijeras</b> son de metal para que corten bien. Los <b>jerséis</b>, de lana o algodón para abrigar. ¡Imagina una sartén de papel o un jersey de piedra! No servirían.</p>`,
      svg: svg("Unas tijeras de metal y un jersey de lana; un jersey de piedra no sirve", `${tijeras(54, 100, 1.4)}${jersey(130, 92, "var(--red)")}${tick(130, 136)}<g transform="translate(212 92) scale(.8)"><path d="M-14 -24 L-30 -14 L-24 -2 L-16 -8 V20 H16 V-8 L24 -2 L30 -14 L14 -24 q-14 8 -28 0Z" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/></g>${equis(212, 136)}${txt(54, 160, "metal", "var(--muted)", 13)}${txt(130, 160, "lana", "var(--red)", 13)}${txt(212, 160, "¿de piedra?", "var(--muted)", 13)}`),
    },
    {
      html: `<h3>Reducir, reutilizar y reciclar</h3><p>Fabricar materiales gasta mucha energía y produce basura. Por eso seguimos <mark>las tres erres</mark>.</p><p><b>Reducir</b>: comprar y tirar menos. <b>Reutilizar</b>: usar las cosas otra vez, como un bote de cristal para guardar lápices. <b>Reciclar</b>: separar la basura para hacer materiales nuevos con la vieja.</p>`,
      svg: svg("Las tres erres: reducir, reutilizar y reciclar", `${["Reducir", "Reutilizar", "Reciclar"].map((t, i) => `<circle cx="${50 + i * 80}" cy="84" r="34" fill="var(--card)" stroke="var(--leaf)" stroke-width="3"/>${txt(50 + i * 80, 144, t, "var(--leaf)", 14)}`).join("")}<path d="M38 84 h24" stroke="var(--leaf)" stroke-width="5" stroke-linecap="round"/><g transform="translate(130 96)"><path d="M-12 -20 H12 V8 H-12Z" fill="var(--water)" opacity=".4" stroke="var(--ink)"/>${["var(--red)", "var(--pen)", "var(--sun)"].map((c, i) => `<path d="M${-6 + i * 6} -18 L${-8 + i * 6} -36" stroke="${c}" stroke-width="3"/>`).join("")}</g><g transform="translate(210 84)">${[0, 120, 240].map((a) => `<path transform="rotate(${a})" d="M0 -20 a20 20 0 0 1 17 10" stroke="var(--leaf)" stroke-width="5" fill="none"/><path transform="rotate(${a})" d="M13 -14 l6 5 l2 -8z" fill="var(--leaf)"/>`).join("")}</g>${big(130, 30, "Las tres erres", "var(--leaf)", 17)}`),
      video: V("YgES1DyjeGs"),
    },
    {
      html: `<h3>¿Para qué sirve? Separar la basura</h3><p>En casa y en el cole separamos la basura en <mark>contenedores de colores</mark>.</p><p>En el <b>amarillo</b>, plásticos, latas y briks. En el <b>azul</b>, papel y cartón. En el <b>verde</b>, botellas y botes de vidrio. Y la comida que sobra va al contenedor <b>marrón</b> (orgánico).</p>`,
      svg: svg("Contenedores amarillo, azul, verde y marrón", `${contenedor(36, 130, "#e0b000", "envases")}${contenedor(98, 130, "#1f6feb", "papel")}${contenedor(160, 130, "#2f9e44", "vidrio")}${contenedor(222, 130, "#8a5a2b", "orgánico")}${lata(36, 64, 0.8)}${caja(98, 70, 0.7)}${botella(160, 70, 0.7, "var(--leaf)")}<path transform="translate(222 62)" d="M-12 0 q0 -14 12 -14 q12 0 12 14z" fill="#f2c94c"/>${txt(130, 166, "cada cosa en su sitio", "var(--leaf)", 13)}`),
    },
    {
      html: `<h3>Juego: ¿de qué está hecho?</h3><p>Busca objetos en tu clase y di de qué <mark>material</mark> están hechos.</p><p>La mesa: <b>madera</b>. La ventana: <b>vidrio</b>. El estuche: <b>tela</b> o plástico. La papelera: <b>metal</b> o plástico. ¿Hay algún objeto hecho de varios materiales? ¡El lápiz! Madera por fuera y mina por dentro.</p>`,
      svg: svg("Un lápiz por dentro: madera por fuera y mina por dentro", `<g transform="translate(130 90) rotate(-15)"><rect x="-90" y="-14" width="140" height="28" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/><path d="M50 -14 L84 0 L50 14Z" fill="#e8c9a0" stroke="var(--ink)" stroke-width="2"/><path d="M74 -4 L84 0 L74 4Z" fill="#1b2235"/><rect x="-104" y="-14" width="14" height="28" fill="#f4b6c2" stroke="var(--ink)" stroke-width="2"/></g>${flechaR(196, 140, 210, 84, "var(--muted)")}${txt(196, 156, "mina", "var(--ink)", 14)}${txt(70, 150, "madera", "#8a5a2b", 14)}${txt(30, 50, "goma", "var(--red)", 14)}`),
    },
  ],
  figura: {
    titulo: "Materiales naturales y artificiales",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Naturales: madera, lana, piedra. Artificiales: plástico, vidrio, papel">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <rect x="20" y="24" width="290" height="212" rx="14" fill="var(--leaf)" opacity=".12"/><rect x="330" y="24" width="290" height="212" rx="14" fill="var(--pen)" opacity=".1"/>
      ${rot(165, 56, "Naturales", { size: 22, color: "var(--leaf)", w: 800 })}${rot(475, 56, "Artificiales", { size: 22, color: "var(--pen)", w: 800 })}
      ${arbol(70, 170, 1.2)}${oveja(165, 166, 1.3)}${roca(260, 166, 1.5)}
      ${botella(380, 170, 1.4, "var(--leaf)")}${lata(475, 170, 1.4)}${papel(570, 146)}
      ${[["madera", 70], ["lana", 165], ["piedra", 260], ["vidrio", 380], ["metal", 475], ["papel", 570]].map(([t, x]) => rot(x, 214, t, { size: 15, color: "var(--ink)" })).join("")}
    </svg>`,
  },
  video: V("_a0OxAKSz_Y", "origen de los materiales para niños"),
  ejemplos: [
    { enunciado: "¿El jersey es un objeto o un material?", pasos: ["Un jersey es una cosa que usamos.", "Las cosas que usamos son objetos.", "Está hecho de lana, que es su material."], resultado: "el jersey es un objeto; la lana es su material." },
    { enunciado: "¿El vidrio es natural o artificial?", pasos: ["El vidrio no está así en la naturaleza.", "Se fabrica con arena muy caliente.", "Lo hacen las personas en fábricas."], resultado: "es un material artificial." },
    { enunciado: "¿Dónde tiro una botella de agua de plástico?", pasos: ["Es un envase de plástico.", "Los envases de plástico van al contenedor amarillo.", "Antes la vacío."], resultado: "al contenedor amarillo." },
  ],
  errores: [
    "Confundir objeto con material: la mesa es el objeto; la madera, el material.",
    "Pensar que el papel es natural porque viene de los árboles: se fabrica, es artificial.",
    "Tirar las botellas de vidrio al contenedor amarillo: van al verde.",
    "Creer que reciclar es tirar a la basura: es separar para fabricar cosas nuevas.",
  ],
  ejercicios: [
    { q: "Di tres objetos de tu clase y su material.", sol: "Por ejemplo: mesa (madera), ventana (vidrio), papelera (plástico)." },
    { q: "¿De dónde viene la lana?", sol: "De las ovejas." },
    { q: "¿De dónde viene la madera?", sol: "De los árboles." },
    { q: "Di dos materiales artificiales.", sol: "Por ejemplo: el plástico y el vidrio." },
    { q: "¿Es transparente el vidrio de la ventana?", sol: "Sí, deja ver a través de él." },
    { q: "Di un material flexible.", sol: "Por ejemplo: la goma o la tela." },
    { q: "¿Por qué los chubasqueros son de plástico?", sol: "Porque el plástico es impermeable y no deja pasar el agua." },
    { q: "Escribe las tres erres.", sol: "Reducir, reutilizar y reciclar." },
    { q: "Une: periódico, bote de vidrio, lata → azul, verde, amarillo.", sol: "Periódico: azul. Bote de vidrio: verde. Lata: amarillo." },
    { q: "Inventa un uso nuevo para un tarro de cristal.", sol: "Respuesta libre: guardar lápices, botones o hacer un farolillo." },
  ],
  quiz: [
    { q: "La mesa es un…", o: ["objeto", "material", "animal"], a: 0, e: "Su material puede ser madera." },
    { q: "La madera viene de…", o: ["los árboles", "las ovejas", "el mar"], a: 0, e: "Es un material natural." },
    { q: "El plástico es un material…", o: ["natural", "artificial", "vivo"], a: 1, e: "Se fabrica con petróleo." },
    { q: "El vidrio se fabrica con…", o: ["arena", "lana", "madera"], a: 0, e: "Arena muy caliente." },
    { q: "Un material que deja ver a través es…", o: ["opaco", "transparente", "blando"], a: 1, e: "Como el vidrio." },
    { q: "La goma es…", o: ["flexible", "rígida", "transparente"], a: 0, e: "Se dobla sin romperse." },
    { q: "El contenedor azul es para…", o: ["papel y cartón", "vidrio", "comida"], a: 0, e: "Papel y cartón." },
    { q: "Las latas van al contenedor…", o: ["verde", "amarillo", "azul"], a: 1, e: "Con plásticos y briks." },
    { q: "Usar un bote otra vez es…", o: ["reducir", "reutilizar", "romper"], a: 1, e: "Le damos otro uso." },
    { q: "Para cortar papel, las tijeras son de…", o: ["metal", "lana", "papel"], a: 0, e: "El metal es duro." },
  ],
  examen: [
    { q: "¿Cuál es un material natural?", o: ["La lana", "El plástico", "El vidrio"], a: 0, e: "Viene de las ovejas." },
    { q: "Las botellas de vidrio se tiran al contenedor…", o: ["verde", "azul", "amarillo"], a: 0, e: "El verde es para el vidrio." },
    { q: "Un material impermeable…", o: ["no deja pasar el agua", "se rompe con agua", "es transparente"], a: 0, e: "Como el chubasquero." },
    { q: "Separar la basura sirve para…", o: ["reciclar", "ensuciar", "nada"], a: 0, e: "Se fabrican cosas nuevas." },
  ],
  feynman: ["La diferencia entre objeto y material", "Materiales naturales y artificiales", "Las tres erres y los contenedores"],
  mapaT: ["LOS MATERIALES", [
    ["Naturales", "madera · lana · piedra", "var(--leaf)"],
    ["Artificiales", "plástico · vidrio · papel", "var(--pen)"],
    ["Propiedades", "duro · flexible · transparente", "var(--red)"],
    ["Tres erres", "reducir · reutilizar · reciclar", "var(--sun)"],
  ]],
  tarjetas: [
    ["¿Qué es un material?", "Aquello de lo que está hecho un objeto"],
    ["Un material natural", "La madera"],
    ["Un material artificial", "El plástico"],
    ["¿De qué se hace el vidrio?", "De arena muy caliente"],
    ["Material que se dobla sin romperse", "Flexible"],
    ["Contenedor del papel", "Azul"],
    ["Contenedor del vidrio", "Verde"],
    ["Las tres erres", "Reducir, reutilizar y reciclar"],
  ],
  familias: [
    "Jugad a «¿de qué está hecho?» con objetos de la cocina.",
    "Encargadle separar la basura de un día en los contenedores de colores.",
    "Reutilizad juntos un envase: un tarro como lapicero o una caja como joyero.",
    "Mirad las etiquetas de la ropa: ¿es de algodón, lana o poliéster?",
  ],
  saberes: "Materiales: objetos y materiales, origen natural o artificial, propiedades básicas, uso adecuado y consumo responsable (reducir, reutilizar y reciclar)",
  ideas: ["Caja de materiales para clasificar por propiedades (duro/blando, transparente/opaco).", "Punto limpio de clase con papeleras de colores.", "Taller de reutilización: juguetes con envases."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer de dónde vienen el papel y el vidrio", "Distinguir materiales que dejan pasar la luz", "Saber qué materiales atraen los imanes", "Reutilizar objetos para darles una segunda vida"],
  lectura: { titulo: "Los tres cerditos modernos", html: `<p>Había una vez tres cerditos que querían construir sus casas en el siglo XXI.</p><p>El primero hizo su casa con <b>cartón</b>, porque era barato y ligero. Pero llegó la lluvia, el cartón se empapó y la casa se deshizo como una galleta en la leche.</p><p>El segundo la hizo con <b>plástico</b>, porque no se moja. Pero en verano el sol calentó tanto que dentro hacía un calor horrible, y el plástico se deformó.</p><p>El tercero era el más pensativo. Usó <b>ladrillos</b> y <b>piedra</b> para las paredes, porque son duros y resistentes. Puso <b>madera</b> en las puertas, <b>vidrio</b> en las ventanas para que entrara la luz, y <b>tejas</b> de barro en el tejado para que resbalara la lluvia.</p><p>Cuando llegó el lobo y sopló, la casa ni se movió.</p><p>—Cada material tiene su trabajo —explicó el cerdito a sus hermanos—. Hay que elegir el adecuado para cada parte.</p><p>Y los tres vivieron juntos, secos y fresquitos, en la casa de ladrillo.</p>` },
  tras: {
    "Materiales naturales": [
      ["De dónde vienen el papel y el vidrio", `<p>Muchos materiales que usamos se fabrican a partir de <mark>materiales naturales</mark>:</p><ul><li>El <b>papel</b> se hace con la madera de los árboles. Se tritura, se mezcla con agua hasta formar una pasta y se seca en láminas finas.</li><li>El <b>vidrio</b> se hace con <b>arena</b> calentada a muchísima temperatura hasta que se derrite. Luego se le da forma y se enfría.</li><li>El <b>plástico</b> se fabrica con <b>petróleo</b>, un líquido negro que hay bajo la tierra.</li><li>La <b>tela</b> de algodón viene de una planta; la de lana, de las ovejas.</li><li>Los <b>ladrillos</b> se hacen con barro cocido en un horno.</li></ul><p>Por eso es tan importante reciclar el papel: así se cortan menos árboles.</p><p><b>Actividad</b>: elige tres objetos de clase y averigua de qué material natural vienen.</p>`,
        L6.filas("Origen", [["papel", "árboles", cVE], ["vidrio", "arena", cAZ], ["plástico", "petróleo", cMO], ["ladrillo", "barro", cRO]]),
        ["fZN0OuroJzM", "Los Materiales | Tipos y Características", "Aula chachi", 540328]],
    ],
    "Más propiedades": [
      ["¿Deja pasar la luz?", `<p>Según cómo dejan pasar la luz, los materiales pueden ser:</p><ul><li><mark>Transparentes</mark>: dejan pasar la luz y vemos claramente a través de ellos. El vidrio de una ventana, el agua limpia, el plástico de una botella.</li><li><mark>Translúcidos</mark>: dejan pasar algo de luz, pero no vemos bien lo de detrás. El papel de cebolla, el cristal de la ducha, una cortina fina.</li><li><mark>Opacos</mark>: no dejan pasar la luz. No vemos nada a través. La madera, el metal, el cartón, una pared.</li></ul><p>Elegimos uno u otro según lo que necesitemos: ventanas transparentes para ver fuera, cristales translúcidos en el baño para tener intimidad y persianas opacas para dormir a oscuras.</p><p><b>Actividad</b>: con una linterna, prueba qué materiales de clase son transparentes, translúcidos u opacos.</p>`,
        H6.flujo("Luz", ["transparente|vidrio", "translúcido|papel fino", "opaco|madera", "linterna|¡prueba!"], cAZ)],
    ],
    "Cada material para su uso": [
      ["Materiales e imanes", `<p>Los <mark>imanes</mark> atraen algunos materiales, pero no todos.</p><ul><li><b>Sí atraen</b>: el <b>hierro</b> y el <b>acero</b>. Por ejemplo, clips, clavos, tornillos, tijeras y la puerta de la nevera.</li><li><b>No atraen</b>: la madera, el plástico, el papel, el vidrio, la tela… ¡ni tampoco el aluminio de las latas de refresco!</li></ul><p>Los imanes tienen dos extremos llamados <b>polos</b>. Si acercamos dos imanes, a veces se atraen y a veces se empujan.</p><p>Usamos imanes en:</p><ul><li>Los imanes de la <b>nevera</b>.</li><li>La <b>brújula</b>, que tiene una aguja imantada que señala el norte.</li><li>Los cierres de algunos bolsos y estuches.</li><li>Las fábricas de reciclaje, para separar el hierro de la basura.</li></ul><p><b>Actividad</b>: con un imán, descubre qué objetos de tu estuche atrae.</p>`,
        H6.dos("Imán", ["ATRAE", ["hierro", "acero", "clips"], cRO], ["NO ATRAE", ["madera", "plástico", "aluminio"], cAZ])],
    ],
    "Reducir, reutilizar y reciclar": [
      ["Segunda vida para los objetos", `<p><mark>Reutilizar</mark> es darle otro uso a un objeto en lugar de tirarlo. ¡Con imaginación, casi todo sirve!</p><ul><li>Un <b>bote de cristal</b> puede ser un lapicero o un tarro para guardar botones.</li><li>Una <b>caja de zapatos</b> puede ser una casita de muñecas o un archivador.</li><li>Los <b>rollos de papel</b> sirven para hacer prismáticos o marionetas.</li><li>Una <b>botella de plástico</b> cortada puede ser una maceta o un comedero de pájaros.</li><li>La <b>ropa</b> que se nos queda pequeña puede ser para un primo o donarse.</li><li>Los <b>libros</b> que ya hemos leído podemos intercambiarlos.</li></ul><p>Reutilizar ahorra materiales y dinero, y además genera menos basura.</p><p>También podemos <b>reparar</b>: coser un botón o pegar un juguete roto en lugar de comprar otro.</p><p><b>Actividad</b>: trae a clase un envase vacío y transfórmalo en algo útil.</p>`,
        H6.rueda("Reutilizar", "2.ª VIDA", [["bote", cNA], ["caja", cAZ], ["rollo", cVE], ["botella", cRO]]),
        ["P3yOGuLcODk", "Las 4 R's | Canciones Infantiles", "El Payaso Plim Plim", 6485770]],
    ],
  },
  final: [
    ["Materiales en la historia", `<p>A lo largo de la historia, las personas han usado <mark>materiales distintos</mark>:</p><ul><li>En la <b>Prehistoria</b> usaban piedra, hueso, madera y pieles. Hacían herramientas de piedra afilada.</li><li>Después aprendieron a hacer <b>cerámica</b> con barro y a fundir <b>metales</b> como el cobre, el bronce y el hierro.</li><li>Los romanos usaban mucho la <b>piedra</b>, el ladrillo y el hormigón para construir puentes y acueductos que todavía siguen en pie.</li><li>Hace unos cien años se inventó el <b>plástico</b>, que hoy está en todas partes.</li><li>Hoy se inventan materiales nuevos, como tejidos que no se mojan o plásticos que se deshacen solos.</li></ul><p>Cada nuevo material ha cambiado la forma de vivir de las personas.</p><p><b>Actividad</b>: pregunta a tus abuelos de qué material eran sus juguetes cuando eran pequeños.</p>`,
      L6.filas("Historia", [["Prehistoria", "piedra, hueso", cMO], ["Antigüedad", "barro, metal", cNA], ["Romanos", "piedra, ladrillo", cAZ], ["Hoy", "plástico", cRO]])],
    ["Repaso: los tres cerditos", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>El <b>cartón</b> es ligero y barato, pero se moja y se deshace: no sirve para una casa.</li><li>El <b>plástico</b> no se moja, pero con calor se deforma: tampoco es el mejor.</li><li>Los <b>ladrillos</b> y la <b>piedra</b> son duros y resistentes: perfectos para las paredes.</li><li>La <b>madera</b>: buena para las puertas.</li><li>El <b>vidrio</b> es transparente: deja entrar la luz por las ventanas.</li><li>Las <b>tejas</b> de barro son impermeables: la lluvia resbala.</li></ul><p>El tercer cerdito eligió cada material según sus <b>propiedades</b>. ¡Eso hacen los arquitectos de verdad!</p><p><b>Actividad</b>: diseña tu casa ideal y escribe qué material usarías en cada parte y por qué.</p>`,
      H6.dos("Casa", ["MAL", ["cartón: se moja", "plástico: calor"], cRO], ["BIEN", ["ladrillo, piedra", "vidrio, tejas"], cVE])],
  ],
  ejemplos: [
    ["¿El vidrio es transparente u opaco?", ["Vemos a través de él."], "Transparente."],
    ["¿Un imán atrae una lata de aluminio?", ["El aluminio no es hierro ni acero."], "No."],
  ],
  errores: ["Pensar que los imanes atraen todos los metales.", "Tirar objetos que podrían reutilizarse."],
  ejercicios: [
    ["b", "¿De qué se hace el papel?", "De la madera de los árboles."],
    ["b", "¿De qué se hace el vidrio?", "De arena."],
    ["b", "Di un material opaco.", "Madera, metal, cartón…"],
    ["b", "¿Qué atrae un imán?", "Hierro y acero."],
    ["b", "Di una forma de reutilizar un bote.", "Como lapicero."],
    ["m", "¿Qué diferencia hay entre transparente y translúcido?", "En el transparente se ve bien; en el translúcido, no."],
    ["m", "¿De dónde viene el plástico?", "Del petróleo."],
    ["m", "¿Para qué sirve la brújula?", "Para saber dónde está el norte."],
    ["m", "¿Por qué reciclar papel ayuda a los bosques?", "Porque se cortan menos árboles."],
    ["m", "Di dos materiales que usaban en la Prehistoria.", "Piedra, hueso, madera…"],
    ["a", "En la lectura, ¿por qué se deshace la casa de cartón?", "Porque el cartón se empapa con la lluvia."],
    ["a", "¿Por qué ponemos cristal translúcido en el baño?", "Para que entre luz pero no se vea dentro."],
    ["a", "Inventa un objeto reutilizando una caja de zapatos.", "Respuesta libre."],
    ["a", "Elige un material para un paraguas y explica por qué.", "Tela impermeable o plástico, porque no deja pasar el agua."],
  ],
  quiz: [
    ["El vidrio se fabrica con…", ["arena", "madera", "petróleo"], "Origen."],
    ["Un material que no deja pasar la luz es…", ["opaco", "transparente", "translúcido"], "Luz."],
    ["Un imán atrae un…", ["clip de acero", "lápiz de madera", "vaso de vidrio"], "Imanes."],
    ["Usar un bote como lapicero es…", ["reutilizar", "reciclar", "tirar"], "Segunda vida."],
    ["El plástico se inventó hace unos…", ["cien años", "mil años", "diez años"], "Historia."],
  ],
  examen: [
    ["En la lectura, ¿qué material se deforma con el calor?", ["el plástico", "el ladrillo", "la piedra"], "Lectura."],
    ["Las tejas sirven para que…", ["resbale la lluvia", "entre la luz", "se abra la puerta"], "Repaso."],
  ],
  tarjetas: [
    ["Luz", "Transparente, translúcido y opaco."],
    ["Imán", "Atrae hierro y acero; no madera, plástico ni aluminio."],
  ],
  glosario: [
    ["Transparente", "Que deja ver a través de él."],
    ["Translúcido", "Que deja pasar algo de luz."],
    ["Opaco", "Que no deja pasar la luz."],
    ["Imán", "Objeto que atrae el hierro."],
    ["Brújula", "Aparato con una aguja que señala el norte."],
    ["Petróleo", "Líquido negro del que se hace el plástico."],
    ["Reutilizar", "Usar otra vez algo para otro fin."],
    ["Cerámica", "Objetos de barro cocido."],
    ["Impermeable", "Que no deja pasar el agua."],
    ["Propiedad", "Característica de un material."],
  ],
  situacion: {
    titulo: "Taller de la segunda vida",
    reto: "La clase investiga materiales con linternas e imanes y crea objetos útiles con envases reutilizados.",
    pasos: ["Clasificar materiales en transparentes, translúcidos y opacos.", "Probar qué materiales atrae un imán.", "Diseñar un objeto útil con envases usados.", "Exponer los objetos explicando de qué materiales están hechos."],
    producto: "Una exposición de objetos reutilizados con fichas de materiales.",
    evaluacion: ["Sabe de dónde vienen algunos materiales.", "Clasifica según la luz.", "Predice qué atrae un imán.", "Reutiliza objetos con creatividad."],
  },
});
