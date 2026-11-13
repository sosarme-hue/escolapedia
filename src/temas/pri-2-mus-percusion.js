// Música 2º de Primaria: instrumentos de percusión. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, tambor, negra, silencio, palma, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
// Instrumentos dibujados con formas sencillas.
const pandero = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle r="22" fill="${P.amarillo}" stroke="#a0522d" stroke-width="5"/>${[0, 90, 180, 270].map((a) => `<circle cx="${(Math.cos(a * Math.PI / 180) * 22).toFixed(1)}" cy="${(Math.sin(a * Math.PI / 180) * 22).toFixed(1)}" r="4" fill="${P.gris}" stroke="var(--ink)"/>`).join("")}</g>`;
const maracas = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><g transform="rotate(-20)"><ellipse cx="-8" cy="-14" rx="9" ry="12" fill="${P.rojo}" stroke="var(--ink)"/><path d="M-8 -2 V16" stroke="#a0522d" stroke-width="4"/></g><g transform="rotate(20)"><ellipse cx="8" cy="-14" rx="9" ry="12" fill="${P.verde}" stroke="var(--ink)"/><path d="M8 -2 V16" stroke="#a0522d" stroke-width="4"/></g></g>`;
const triangulo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -24 L20 12 H-18" fill="none" stroke="${P.gris}" stroke-width="4" stroke-linejoin="round"/><path d="M0 -24 V-32" stroke="var(--ink)"/><path d="M14 -16 L30 -2" stroke="var(--ink)" stroke-width="2.5"/></g>`;
const claves = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-22" y="-14" width="40" height="8" rx="4" fill="#a0522d" transform="rotate(-20)"/><rect x="-18" y="2" width="40" height="8" rx="4" fill="#cd853f" transform="rotate(15)"/></g>`;
const cajaChina = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-22" y="-10" width="44" height="20" rx="6" fill="#cd853f" stroke="var(--ink)"/><path d="M-16 0 H16" stroke="var(--ink)" stroke-width="3"/><path d="M10 -14 L28 -30" stroke="var(--ink)" stroke-width="2.5"/><circle cx="28" cy="-30" r="4" fill="var(--ink)"/></g>`;
const platillos = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="-14" cy="0" rx="6" ry="20" fill="${P.amarillo}" stroke="#c49000" stroke-width="2"/><ellipse cx="14" cy="0" rx="6" ry="20" fill="${P.amarillo}" stroke="#c49000" stroke-width="2"/><circle cx="-14" cy="0" r="3" fill="#c49000"/><circle cx="14" cy="0" r="3" fill="#c49000"/></g>`;
const xilo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-30" y="6" width="60" height="8" fill="#a0522d"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="${-28 + i * 12}" y="${-20 + i * 3}" width="9" height="${28 - i * 3}" rx="2" fill="${[P.rojo, P.naranja, P.amarillo, P.verde, P.azul][i]}" stroke="var(--ink)" stroke-width=".8"/>`).join("")}</g>`;
const caja = (x, y, n, t, c) => `<rect x="${x - 40}" y="${y - 32}" width="80" height="78" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${n}${etq(x, y + 38, t, c, 11)}`;

module.exports = {
  materia: "Música",
  curso: "2-primaria",
  titulo: "Instrumentos de percusión",
  minutos: 20,
  objetivos: ["Conocer los instrumentos de percusión del aula y cómo se tocan", "Distinguir instrumentos de madera, de metal y de parche por su sonido", "Acompañar una canción con instrumentos siguiendo el pulso"],
  claves: ["percusión", "golpear", "agitar", "frotar", "madera", "metal", "parche", "baqueta"],
  pregunta: {
    texto: "¿Qué tienen en común un tambor, unas maracas y un triángulo?",
    respuesta: "Los tres son <mark>instrumentos de percusión</mark>: suenan cuando los <b>golpeamos</b>, los <b>agitamos</b> o los <b>frotamos</b>. Son los instrumentos más antiguos que existen.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la percusión?</h3><p>Los <mark>instrumentos de percusión</mark> suenan al golpearlos, agitarlos o frotarlos.</p><p>Son los más antiguos del mundo. Hace miles de años, las personas ya golpeaban troncos, piedras y pieles para hacer música.</p><p>Nuestro propio cuerpo también es un instrumento de percusión: palmas, pitos, golpes en las piernas y pisadas.</p>`,
      svg: svg("Un niño toca un tambor y alrededor aparecen otros instrumentos de percusión", `${nino(44, 156, { c: P.azul, pose: "palmas", s: 1.3 })}${tambor(90, 156, 1.1)}${pandero(150, 60)}${maracas(214, 66)}${triangulo(150, 130)}${claves(216, 130)}`),
    },
    {
      html: `<h3>Tres formas de tocar</h3><p>Hay <mark>tres formas</mark> de hacer sonar la percusión.</p><p><b>Golpear</b>: con la mano o con una baqueta, como el tambor o el xilófono. <b>Agitar</b>: moviéndolos para que suenen las bolitas de dentro, como las maracas. <b>Frotar</b>: rascando la superficie, como el güiro, que tiene rayas.</p><p>¡Algunos, como el pandero, se pueden tocar de varias maneras!</p>`,
      svg: svg("Tres formas de tocar: golpear un tambor, agitar unas maracas y frotar un güiro", `${caja(48, 72, tambor(48, 94, 1), "golpear", P.rojo)}${caja(130, 72, maracas(130, 80, 0.85), "agitar", P.verde)}${caja(212, 72, `<rect x="186" y="76" width="52" height="20" rx="10" fill="#cd853f" stroke="var(--ink)"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${194 + i * 7} 78 v16" stroke="#8b4513" stroke-width="2"/>`).join("")}<path d="M192 66 L232 62" stroke="var(--ink)" stroke-width="3"/>`, "frotar", P.azul)}`),
    },
    {
      html: `<h3>Instrumentos de madera</h3><p>Algunos instrumentos están hechos de <mark>madera</mark>.</p><p>Las <b>claves</b> son dos palitos que se chocan. La <b>caja china</b> es un bloque hueco que se golpea con una baqueta. El <b>güiro</b> se frota.</p><p>Su sonido es <b>seco y corto</b>: «toc, toc». Parece el ruido de un caballo al trotar o de alguien llamando a la puerta.</p>`,
      svg: svg("Instrumentos de madera: claves, caja china y güiro, con el sonido toc toc", `${claves(50, 80, 1.2)}${etq(50, 128, "claves")}${cajaChina(126, 86, 1.2)}${etq(130, 128, "caja china")}<rect x="182" y="70" width="60" height="22" rx="11" fill="#cd853f" stroke="var(--ink)"/>${[0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M${190 + i * 7} 72 v18" stroke="#8b4513" stroke-width="2"/>`).join("")}${etq(212, 128, "güiro")}${etq(130, 162, "suena seco: «toc, toc»", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Instrumentos de metal</h3><p>Otros instrumentos son de <mark>metal</mark>.</p><p>El <b>triángulo</b> se golpea con una varilla. Los <b>platillos</b> se chocan entre sí. Los <b>cascabeles</b> se agitan.</p><p>Su sonido es <b>brillante y largo</b>: «tiiiiin». Sigue vibrando un rato después del golpe. Para pararlo, solo hay que tocar el metal con la mano.</p>`,
      svg: svg("Instrumentos de metal: triángulo, platillos y cascabeles, con el sonido tiiiin", `${triangulo(48, 84, 1.3)}${etq(50, 128, "triángulo")}${platillos(130, 80, 1.2)}${etq(130, 128, "platillos")}${[0, 1, 2].map((i) => `<circle cx="${198 + i * 14}" cy="${76 + (i % 2) * 10}" r="8" fill="${P.amarillo}" stroke="#c49000" stroke-width="2"/><path d="M${194 + i * 14} ${78 + (i % 2) * 10} h8" stroke="#c49000"/>`).join("")}${etq(212, 128, "cascabeles")}${etq(130, 162, "suena brillante: «tiiiin»", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Instrumentos de parche</h3><p>Los instrumentos de <mark>parche</mark> tienen una piel estirada, como la tapa de un tambor.</p><p>Al golpear el parche, vibra y suena. Son el <b>tambor</b>, el <b>bombo</b>, el <b>pandero</b> y la <b>pandereta</b>.</p><p>El bombo es grande y suena grave: «bum». El pandero es más pequeño y suena más agudo: «pam».</p>`,
      svg: svg("Instrumentos de parche: bombo grande que suena bum, tambor y pandero que suena pam", `<ellipse cx="54" cy="86" rx="36" ry="36" fill="${P.rojo}" stroke="var(--ink)" stroke-width="2"/><ellipse cx="54" cy="86" rx="26" ry="26" fill="var(--card)" stroke="var(--ink)"/>${etq(54, 140, "bombo «bum»", P.rojo, 11)}${tambor(134, 100, 1.2)}${etq(134, 140, "tambor", "var(--ink)", 11)}${pandero(214, 84, 1.1)}${etq(214, 140, "pandero «pam»", P.azul, 11)}`),
      video: V("mu5b"),
    },
    {
      html: `<h3>Láminas: xilófono y metalófono</h3><p>El <mark>xilófono</mark> tiene láminas de madera; el <b>metalófono</b>, láminas de metal.</p><p>Se tocan con dos baquetas. Cada lámina da una nota distinta.</p><p>Las láminas <b>largas</b> suenan <b>graves</b> y las <b>cortas</b> suenan <b>agudas</b>. Por eso con ellos podemos tocar melodías, no solo ritmos. ¡Son percusión que canta!</p>`,
      svg: svg("Un xilófono de colores con láminas largas a la izquierda que suenan graves y cortas a la derecha que suenan agudas", `${xilo(130, 92, 2.6)}${etq(64, 158, "largas: graves", P.rojo)}${etq(196, 158, "cortas: agudas", P.azul)}`),
    },
    {
      html: `<h3>Cómo tocar bien</h3><p>Los instrumentos se <mark>cuidan</mark>: no se tiran ni se golpean fuerte.</p><p>La baqueta se coge suelta, como un pajarito: sin apretar. Al golpear, rebota.</p><p>Cuando el profesor levanta la mano, todos los instrumentos se quedan quietos y en silencio. Y al terminar, cada uno vuelve a su caja. ¡Así duran muchos años!</p>`,
      svg: svg("Normas: coger la baqueta suelta, quietos cuando la mano está arriba y guardar en la caja", `${nino(46, 150, { c: P.verde, s: 1.2 })}<path d="M60 112 L84 90" stroke="#a0522d" stroke-width="4"/><circle cx="86" cy="88" r="5" fill="${P.rojo}"/>${etq(52, 170, "suelta")}${nino(132, 150, { c: P.morado, pose: "arriba", s: 1.2 })}${etq(132, 170, "¡silencio!")}<rect x="190" y="110" width="56" height="40" rx="4" fill="#cd853f" stroke="var(--ink)"/>${maracas(218, 104, 0.8)}${etq(218, 170, "a su caja")}`),
    },
    {
      html: `<h3>Acompañamos una canción</h3><p>Con la percusión podemos <mark>acompañar</mark> una canción.</p><p>Primero cantamos y damos palmas en el pulso. Después cambiamos las palmas por un instrumento.</p><p>Podemos repartir: los tambores tocan en el pulso, los triángulos solo en la última palabra de cada frase y las maracas en el estribillo. ¡Suena como una orquesta!</p>`,
      svg: svg("Una pequeña orquesta: tambores en el pulso, triángulos al final y maracas en el estribillo", `${tambor(50, 90, 1.1)}${etq(50, 120, "pulso")}${triangulo(130, 80, 1.1)}${etq(130, 120, "final")}${maracas(210, 84, 1.1)}${etq(210, 120, "estribillo")}${[0, 1, 2, 3].map((i) => negra(70 + i * 40, 166, P.azul)).join("")}`),
    },
    {
      html: `<h3>Jugamos a adivinar el instrumento</h3><p>Un compañero se pone detrás de un biombo y toca un <mark>instrumento escondido</mark>.</p><p>Los demás escuchamos con los ojos cerrados. ¿Es de madera, de metal o de parche? ¿Lo golpea, lo agita o lo frota?</p><p>Quien acierta, sale a tocar el siguiente. Si lo escuchamos bien, ¡acertaremos aunque no lo veamos!</p>`,
      svg: svg("Un biombo esconde un instrumento y un niño con los ojos cerrados escucha y piensa: ¿madera, metal o parche?", `<rect x="22" y="40" width="96" height="110" fill="${P.celeste}" stroke="var(--ink)" stroke-width="2"/><path d="M54 40 v110 M86 40 v110" stroke="var(--ink)"/>${etq(70, 100, "?", "var(--ink)", 36)}${nino(190, 156, { c: P.naranja, pose: "pie", s: 1.3 })}<rect x="148" y="16" width="100" height="30" rx="10" fill="var(--card)" stroke="var(--line)"/>${etq(198, 36, "¿madera, metal…?", "var(--ink)", 11)}`),
    },
  ],
  figura: {
    titulo: "Instrumentos de percusión",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Instrumentos de percusión ordenados en tres familias: madera, metal y parche"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 40, "Golpear · agitar · frotar", { size: 22, color: "var(--pen)" })}<rect x="30" y="70" width="180" height="200" rx="16" fill="var(--card)" stroke="#a0522d" stroke-width="3"/>${rot(120, 100, "Madera: «toc»", { size: 18, color: "#a0522d" })}${claves(80, 170, 1.4)}${cajaChina(160, 180, 1.2)}${rot(120, 250, "claves, caja china", { size: 14 })}<rect x="230" y="70" width="180" height="200" rx="16" fill="var(--card)" stroke="#c49000" stroke-width="3"/>${rot(320, 100, "Metal: «tiiin»", { size: 18, color: "#c49000" })}${triangulo(280, 180, 1.4)}${platillos(360, 170, 1.3)}${rot(320, 250, "triángulo, platillos", { size: 14 })}<rect x="430" y="70" width="180" height="200" rx="16" fill="var(--card)" stroke="${P.rojo}" stroke-width="3"/>${rot(520, 100, "Parche: «pum»", { size: 18, color: P.rojo })}${tambor(480, 200, 1.4)}${pandero(560, 170, 1.2)}${rot(520, 250, "tambor, pandero", { size: 14 })}</svg>`,
  },
  video: V("mu5v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo se toca cada uno: tambor, maracas, güiro?",
      pasos: ["El tambor se golpea.", "Las maracas se agitan.", "El güiro se frota."],
      resultado: "Golpear, agitar y frotar." },
    { enunciado: "Clasifica: claves, triángulo, pandero.",
      pasos: ["Las claves son de madera.", "El triángulo es de metal.", "El pandero tiene parche."],
      resultado: "Madera, metal y parche." },
    { enunciado: "En el xilófono, ¿qué lámina suena más grave?",
      pasos: ["Mira el tamaño de las láminas.", "Las largas vibran más despacio.", "Suenan más graves."],
      resultado: "La lámina más larga suena más grave." },
  ],
  errores: [
    "Golpear muy fuerte: los instrumentos se rompen y suenan mal.",
    "Apretar mucho la baqueta: hay que dejar que rebote.",
    "Seguir tocando cuando el profesor pide silencio.",
    "Pensar que el xilófono solo hace ritmo: también toca melodías.",
  ],
  ejercicios: [
    { q: "¿Qué es un instrumento de percusión?", sol: "Uno que suena al golpearlo, agitarlo o frotarlo." },
    { q: "Di las tres formas de tocar la percusión.", sol: "Golpear, agitar y frotar." },
    { q: "Nombra dos instrumentos de madera.", sol: "Claves, caja china o güiro." },
    { q: "Nombra dos instrumentos de metal.", sol: "Triángulo, platillos o cascabeles." },
    { q: "Nombra dos instrumentos de parche.", sol: "Tambor, bombo, pandero o pandereta." },
    { q: "¿Cómo suena la madera? ¿Y el metal?", sol: "La madera, seco y corto. El metal, brillante y largo." },
    { q: "¿Cómo se para el sonido del triángulo?", sol: "Tocando el metal con la mano." },
    { q: "¿Qué lámina del xilófono suena aguda?", sol: "La más corta." },
    { q: "Inventa un instrumento de percusión con cosas de casa.", sol: "Por ejemplo: un bote con arroz (maraca) o una caja con gomas." },
    { q: "Acompaña una canción con palmas en el pulso.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "Las maracas se…", o: ["agitan", "soplan", "pintan"], a: 0, e: "Se agitan." },
    { q: "El güiro se…", o: ["frota", "sopla", "pega"], a: 0, e: "Se frota." },
    { q: "El triángulo es de…", o: ["metal", "madera", "papel"], a: 0, e: "Metal." },
    { q: "Las claves son de…", o: ["madera", "metal", "plástico blando"], a: 0, e: "Madera." },
    { q: "El tambor tiene…", o: ["parche", "cuerdas", "teclas"], a: 0, e: "Un parche." },
    { q: "La madera suena…", o: ["seco y corto", "largo y brillante", "como una flauta"], a: 0, e: "«Toc»." },
    { q: "El metal suena…", o: ["brillante y largo", "muy seco", "no suena"], a: 0, e: "«Tiiin»." },
    { q: "El bombo suena…", o: ["grave", "muy agudo", "como un pájaro"], a: 0, e: "Es grande: grave." },
    { q: "En el xilófono, las láminas cortas suenan…", o: ["agudas", "graves", "igual"], a: 0, e: "Agudas." },
    { q: "La baqueta se coge…", o: ["suelta", "apretando fuerte", "con los dientes"], a: 0, e: "Para que rebote." },
  ],
  examen: [
    { q: "¿Cuál es de percusión?", o: ["la pandereta", "la flauta", "la guitarra"], a: 0, e: "Pandereta." },
    { q: "Los platillos se…", o: ["chocan", "frotan", "soplan"], a: 0, e: "Se chocan." },
    { q: "El cuerpo también es percusión con…", o: ["palmas y pisadas", "solo la voz", "nada"], a: 0, e: "Percusión corporal." },
    { q: "El metalófono tiene láminas de…", o: ["metal", "madera", "tela"], a: 0, e: "Metal." },
  ],
  feynman: ["Qué es un instrumento de percusión y cómo se toca", "Cómo suenan la madera, el metal y el parche", "Cómo acompañar una canción con instrumentos"],
  mapa: mapa("PERCUSIÓN", "var(--pri)", [
    ["Tocar", "golpear, agitar, frotar", "#e53935"],
    ["Madera", "claves, caja china", "#8d6e63"],
    ["Metal", "triángulo, platillos", "#f9a825"],
    ["Parche", "tambor, pandero", "#1e88e5"],
  ], 230),
  tarjetas: [
    ["Percusión", "Suena al golpear, agitar o frotar"],
    ["Madera", "Sonido seco: claves, caja china, güiro"],
    ["Metal", "Sonido brillante: triángulo, platillos"],
    ["Parche", "Piel estirada: tambor, bombo, pandero"],
    ["Maracas", "Se agitan"],
    ["Güiro", "Se frota"],
    ["Xilófono", "Láminas largas graves, cortas agudas"],
    ["Baqueta", "Se coge suelta y rebota"],
  ],
  familias: [
    "Buscad en casa objetos que suenen al golpearlos: ollas, botes, cucharas de madera.",
    "Haced unas maracas con un bote y arroz o lentejas.",
    "Escuchad una canción y acompañadla con palmas y golpes en la mesa.",
    "Jugad a adivinar con los ojos cerrados qué objeto suena.",
  ],
  profesores: PROF("Música: instrumentos de percusión escolar (Orff) de altura indeterminada y determinada; modos de producción del sonido; clasificación por material; técnica básica y normas de uso; acompañamiento instrumental", ["Clasificación auditiva de instrumentos tras un biombo.", "Construcción de instrumentos con material reciclado.", "Acompañamiento de una canción por secciones."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
