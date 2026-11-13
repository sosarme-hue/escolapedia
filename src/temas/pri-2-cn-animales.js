// Ciencias de la Naturaleza 2º de Primaria: los animales, cómo son y cómo viven. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, perro, gato, vaca, gallina, pez, ave, rana, serpiente, mariposa, caracol, arana, huevo, chip, flechaR, tick, hierba, mar, arbol, monte, sol, suelo, nino } = require("./_pri2b");

const conejo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cy="-14" rx="18" ry="12" fill="#e9e3d6" stroke="var(--muted)"/><circle cx="16" cy="-24" r="9" fill="#e9e3d6" stroke="var(--muted)"/><ellipse cx="13" cy="-42" rx="3.5" ry="11" fill="#e9e3d6" stroke="var(--muted)"/><ellipse cx="20" cy="-42" rx="3.5" ry="11" fill="#e9e3d6" stroke="var(--muted)"/><circle cx="19" cy="-25" r="1.8" fill="#1b2235"/><circle cx="-18" cy="-14" r="5" fill="#fff"/></g>`;
const leon = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cy="-18" rx="24" ry="12" fill="var(--sun)"/><circle cx="24" cy="-30" r="15" fill="#c97a3a"/><circle cx="24" cy="-30" r="10" fill="var(--sun)"/><circle cx="21" cy="-32" r="1.8" fill="#1b2235"/><circle cx="28" cy="-32" r="1.8" fill="#1b2235"/><path d="M-16 -8 V0 M-6 -8 V0 M8 -8 V0 M16 -8 V0" stroke="var(--sun)" stroke-width="5" stroke-linecap="round"/><path d="M-24 -18 q-10 0 -12 10" stroke="var(--sun)" stroke-width="3" fill="none"/></g>`;

module.exports = tema({
  materia: "Ciencias de la Naturaleza",
  titulo: "Los animales: cómo son y cómo viven",
  objetivos: ["Distinguir animales vertebrados e invertebrados", "Clasificar animales por cómo nacen, cómo se mueven y qué comen", "Conocer dónde viven los animales y cómo cuidarlos"],
  claves: ["vertebrado", "invertebrado", "vivíparo", "ovíparo", "herbívoro", "carnívoro", "omnívoro"],
  pregunta: {
    texto: "Un perro y un caracol son animales. ¿En qué se parecen? ¿Y en qué son diferentes?",
    respuesta: "Los dos <mark>nacen, comen y crecen</mark>. Pero el perro tiene <b>huesos</b> y nace de la tripa de su madre. El caracol <b>no tiene huesos</b> y nace de un huevo.",
  },
  bloques: [
    {
      html: `<h3>Los animales son seres vivos</h3><p>Los animales <mark>nacen, se alimentan, crecen, tienen crías y mueren</mark>, como todos los seres vivos.</p><p>A diferencia de las plantas, los animales <b>se mueven</b> de un sitio a otro para buscar comida. Y no fabrican su alimento: tienen que comer plantas u otros animales.</p>`,
      svg: svg("Un perro, un pájaro y un pez: los animales se mueven", `${hierba(146)}${perro(60, 146, 1.2)}${ave(140, 96, 1.3, "var(--water)")}${flechaR(162, 84, 204, 66, "var(--muted)")}${pez(200, 130, 1, "var(--inf)")}${big(130, 30, "Se mueven", "var(--pen)", 18)}`),
    },
    {
      html: `<h3>Vertebrados</h3><p>Los <mark>vertebrados</mark> son los animales que tienen <b>huesos</b> y columna vertebral, como nosotros.</p><p>Hay cinco grupos: <b>mamíferos</b> (pelo), <b>aves</b> (plumas), <b>peces</b> (escamas), <b>reptiles</b> (escamas duras) y <b>anfibios</b> (piel fina y húmeda). Un perro, una gallina, un pez, una serpiente y una rana son vertebrados.</p>`,
      svg: svg("Perro, gallina, pez, serpiente y rana: los cinco grupos de vertebrados", `${perro(28, 92, 0.7)}${gallina(82, 92, 0.85)}${pez(130, 86, 0.75, "var(--inf)")}${serpiente(178, 88, 0.55)}${rana(230, 90, 0.85)}${["mamífero", "ave", "pez", "reptil", "anfibio"].map((t, i) => txt([32, 82, 130, 180, 230][i], 120, t, "var(--pen)", 12)).join("")}${big(130, 30, "Con huesos", "var(--pen)", 18)}${txt(130, 160, "pelo · plumas · escamas · piel", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>Invertebrados</h3><p>Los <mark>invertebrados</mark> son los animales que <b>no tienen huesos</b>. ¡Son la mayoría de los animales!</p><p>Algunos tienen el cuerpo blando, como el <b>gusano</b> o el <b>pulpo</b>. Otros tienen una <b>concha</b> que los protege, como el caracol. Los <b>insectos</b>, como la mariposa o la hormiga, tienen seis patas.</p>`,
      svg: svg("Caracol, mariposa, araña y gusano: animales sin huesos", `${hierba(146)}${caracol(52, 140, 1.1)}${mariposa(120, 82, 1.2)}${arana(186, 120, 1)}<path d="M206 140 q8 -10 16 0 t16 0" stroke="#d98a8a" stroke-width="7" fill="none" stroke-linecap="round"/>${big(130, 30, "Sin huesos", "var(--leaf)", 18)}`),
    },
    {
      html: `<h3>¿Cómo nacen?</h3><p>Algunos animales crecen dentro de la tripa de su madre y nacen ya formados. Son <mark>vivíparos</mark>, como el perro, la vaca o las personas.</p><p>Otros nacen de un <b>huevo</b> que pone la madre. Son <mark>ovíparos</mark>, como la gallina, el pez, la tortuga o la mariposa.</p>`,
      svg: svg("Una vaca con su ternero es vivípara; una gallina con huevos es ovípara", `${suelo(144)}${vaca(56, 144, 1)}${vaca(108, 144, 0.6)}${gallina(184, 144, 1)}${huevo(218, 136, 0.8)}${huevo(236, 138, 0.8)}${chip(76, 166, 82, "vivíparos", "var(--red)", 13)}${chip(200, 166, 82, "ovíparos", "var(--pen)", 13)}`),
      video: V("qVfoISF7eec"),
    },
    {
      html: `<h3>¿Cómo se mueven?</h3><p>Los animales se mueven de muchas formas. Los que tienen <mark>patas</mark> andan, corren o saltan, como el perro o la rana.</p><p>Los que tienen <b>alas</b> vuelan, como los pájaros. Los que tienen <b>aletas</b> nadan, como los peces. Y otros <b>reptan</b>, arrastrándose por el suelo, como la serpiente o el caracol.</p>`,
      svg: svg("Un pájaro vuela, un pez nada, un conejo salta y una serpiente repta", `${mar(118, 52)}${ave(54, 52, 1.2)}${txt(54, 80, "vuela", "var(--pen)", 13)}${conejo(138, 104, 1)}${txt(150, 40, "salta", "var(--pen)", 13)}<path d="M120 104 q10 -30 30 -40" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" fill="none"/>${serpiente(212, 104, 0.8)}${txt(212, 76, "repta", "var(--pen)", 13)}${pez(80, 150, 0.9, "var(--inf)")}${txt(140, 158, "nada", "#fff", 13)}`),
    },
    {
      html: `<h3>¿Qué comen?</h3><p>Los <mark>herbívoros</mark> comen solo plantas, como la vaca o el conejo. Los <mark>carnívoros</mark> comen otros animales, como el león o el lobo.</p><p>Los <mark>omnívoros</mark> comen de todo: plantas y animales. El cerdo, el oso y las personas somos omnívoros.</p>`,
      svg: svg("Un conejo come hierba, un león come carne y un oso come de todo", `${hierba(132)}${conejo(48, 132, 1.1)}<path d="M74 132 l3 -10 l3 10 l3 -12 l3 12" stroke="var(--leaf)" stroke-width="2" fill="none"/>${leon(128, 132, 0.9)}<g transform="translate(212 112)"><ellipse cy="0" rx="22" ry="16" fill="#7a4a1f"/><circle cx="16" cy="-16" r="11" fill="#7a4a1f"/><circle cx="10" cy="-26" r="4" fill="#7a4a1f"/><circle cx="22" cy="-26" r="4" fill="#7a4a1f"/><circle cx="19" cy="-17" r="1.8" fill="#fff"/></g>${chip(48, 160, 74, "herbívoro", "var(--leaf)", 11)}${chip(130, 160, 74, "carnívoro", "var(--red)", 11)}${chip(212, 160, 74, "omnívoro", "var(--pen)", 11)}`),
    },
    {
      html: `<h3>¿Dónde viven?</h3><p>Cada animal vive en el lugar que mejor le va. Unos viven en la <mark>tierra</mark>: en el bosque, en la montaña o en el campo. Otros viven en el <mark>agua</mark>: en el mar o en los ríos.</p><p>Hay animales que viven en los dos sitios, como la <b>rana</b>. Y algunos viven con nosotros: son los animales <b>domésticos</b>, como el perro y el gato.</p>`,
      svg: svg("Un bosque con un pájaro, el mar con peces y una casa con un gato", `${arbol(40, 120, 1)}${arbol(74, 124, 0.8)}${ave(58, 62, 0.8)}<rect x="104" y="80" width="70" height="60" rx="8" fill="var(--water)" opacity=".5"/>${pez(140, 116, 0.8, "var(--inf)")}<g transform="translate(220 128)"><rect x="-26" y="-36" width="52" height="36" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-32 -36 L0 -58 L32 -36Z" fill="var(--red)"/></g>${gato(214, 126, 0.6)}${txt(56, 160, "bosque", "var(--leaf)", 13)}${txt(140, 160, "agua", "var(--water)", 13)}${txt(220, 160, "casa", "var(--red)", 13)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer a los animales nos ayuda a <mark>cuidarlos y respetarlos</mark>.</p><p>Una mascota necesita comida, agua, un sitio limpio, paseos y visitas al <b>veterinario</b>. Los animales salvajes deben vivir libres en la naturaleza: no los molestamos, no les damos de comer y no destruimos sus casas.</p>`,
      svg: svg("Una niña pasea a su perro con correa", `${suelo(150)}${nino(80, 150, { nina: true, c: "var(--red)", pose: "brazos" })}<path d="M100 104 Q130 112 150 122" stroke="var(--ink)" stroke-width="2" fill="none"/>${perro(170, 150, 1.2)}${txt(130, 36, "Cuidar y respetar", "var(--leaf)", 16)}`),
    },
    {
      html: `<h3>Juego: adivina el animal</h3><p>Lee las pistas: «Tengo <b>plumas</b>, pongo <b>huevos</b> y digo kikirikí». ¿Quién soy? ¡El <mark>gallo</mark>!</p><p>Ahora tú: «No tengo huesos, llevo mi casa a cuestas y voy muy despacio». ¡El <mark>caracol</mark>! Inventa tus propias adivinanzas con tres pistas: cómo es, cómo nace y qué come.</p>`,
      svg: svg("Una gallina y un caracol con signos de interrogación", `${hierba(146)}${gallina(76, 146, 1.4)}${caracol(190, 144, 1.4)}${big(76, 52, "?", "var(--red)", 36)}${big(190, 70, "?", "var(--red)", 36)}`),
    },
  ],
  figura: {
    titulo: "Cómo clasificamos a los animales",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Vertebrados e invertebrados; vivíparos y ovíparos; herbívoros, carnívoros y omnívoros">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["¿Tiene huesos?", "vertebrado · invertebrado", "var(--pen)"], ["¿Cómo nace?", "vivíparo · ovíparo", "var(--red)"], ["¿Qué come?", "plantas · carne · de todo", "var(--leaf)"]].map(([t, d, c], i) => `<rect x="${18 + i * 206}" y="30" width="194" height="204" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${rot(115 + i * 206, 62, t, { size: 20, color: c, w: 800 })}${rot(115 + i * 206, 214, d, { size: 12.5, color: "var(--muted)" })}`).join("")}
      ${perro(80, 170, 1.1)}${caracol(160, 168, 1)}${vaca(300, 170, 1.2)}${gallina(370, 170, 1.2)}${conejo(470, 170, 1)}${leon(550, 172, 0.8)}
    </svg>`,
  },
  video: V("eDRJMi6tAMk", "animales vertebrados e invertebrados para niños"),
  ejemplos: [
    { enunciado: "Clasifica la vaca.", pasos: ["¿Tiene huesos? Sí: es vertebrada (mamífero).", "¿Cómo nace? De la tripa de su madre: vivípara.", "¿Qué come? Hierba: herbívora."], resultado: "vertebrada, vivípara y herbívora." },
    { enunciado: "Clasifica la mariposa.", pasos: ["¿Tiene huesos? No: es invertebrada (insecto).", "¿Cómo nace? De un huevo: ovípara.", "¿Cómo se mueve? Vuela con sus alas."], resultado: "invertebrada, ovípara y voladora." },
    { enunciado: "¿El oso es herbívoro, carnívoro u omnívoro?", pasos: ["El oso come frutos, miel y raíces: plantas.", "También come peces: animales.", "Come de todo."], resultado: "es omnívoro." },
  ],
  errores: [
    "Pensar que la ballena es un pez: es un mamífero, respira aire y nace de su madre.",
    "Creer que el murciélago es un ave porque vuela: es un mamífero con pelo.",
    "Pensar que todos los animales tienen huesos: la mayoría son invertebrados.",
    "Dar de comer a los animales salvajes: les hace daño y cambia sus costumbres.",
  ],
  ejercicios: [
    { q: "¿Qué es un animal vertebrado?", sol: "Un animal que tiene huesos y columna vertebral." },
    { q: "Di tres animales invertebrados.", sol: "Por ejemplo: caracol, mariposa y araña." },
    { q: "¿Qué quiere decir ovíparo?", sol: "Que nace de un huevo." },
    { q: "Di dos animales vivíparos.", sol: "Por ejemplo: perro y vaca." },
    { q: "¿Qué come un animal herbívoro?", sol: "Solo plantas." },
    { q: "Une: león, conejo, cerdo con herbívoro, carnívoro, omnívoro.", sol: "León: carnívoro. Conejo: herbívoro. Cerdo: omnívoro." },
    { q: "¿Cómo se mueven los peces?", sol: "Nadan con sus aletas." },
    { q: "¿Qué animal vive en el agua y en la tierra?", sol: "La rana (anfibio)." },
    { q: "Escribe tres cosas que necesita una mascota.", sol: "Comida, agua y un sitio limpio (también paseos y veterinario)." },
    { q: "Inventa una adivinanza de un animal con tres pistas.", sol: "Respuesta libre: cómo es, cómo nace y qué come." },
  ],
  quiz: [
    { q: "Los vertebrados tienen…", o: ["huesos", "concha siempre", "alas siempre"], a: 0, e: "Y columna vertebral." },
    { q: "¿Cuál es invertebrado?", o: ["El perro", "El caracol", "La gallina"], a: 1, e: "No tiene huesos." },
    { q: "Un animal que nace de un huevo es…", o: ["vivíparo", "ovíparo", "herbívoro"], a: 1, e: "Ovíparo viene de «huevo»." },
    { q: "La vaca es…", o: ["vivípara", "ovípara", "invertebrada"], a: 0, e: "Nace de su madre." },
    { q: "El león come carne: es…", o: ["herbívoro", "carnívoro", "omnívoro"], a: 1, e: "Come otros animales." },
    { q: "Las personas somos…", o: ["herbívoras", "carnívoras", "omnívoras"], a: 2, e: "Comemos de todo." },
    { q: "Las aves tienen el cuerpo cubierto de…", o: ["pelo", "plumas", "escamas"], a: 1, e: "Y ponen huevos." },
    { q: "¿Cómo se mueve la serpiente?", o: ["Vuela", "Repta", "Nada siempre"], a: 1, e: "Se arrastra por el suelo." },
    { q: "Un animal doméstico es…", o: ["el gato", "el lobo", "el tiburón"], a: 0, e: "Vive con las personas." },
    { q: "La ballena es…", o: ["un pez", "un mamífero", "un insecto"], a: 1, e: "Nace de su madre y respira aire." },
  ],
  examen: [
    { q: "¿Qué animal es vertebrado y ovíparo?", o: ["La gallina", "El perro", "La araña"], a: 0, e: "Tiene huesos y pone huevos." },
    { q: "El conejo come hierba: es…", o: ["herbívoro", "carnívoro", "omnívoro"], a: 0, e: "Solo plantas." },
    { q: "Los insectos tienen…", o: ["seis patas", "cuatro patas", "huesos"], a: 0, e: "Son invertebrados." },
    { q: "Con los animales salvajes debemos…", o: ["respetarlos", "darles chuches", "llevarlos a casa"], a: 0, e: "Deben vivir libres." },
  ],
  feynman: ["La diferencia entre vertebrados e invertebrados", "Vivíparos y ovíparos con ejemplos", "Herbívoros, carnívoros y omnívoros"],
  mapaT: ["LOS ANIMALES", [
    ["Huesos", "vertebrados · invertebrados", "var(--pen)"],
    ["Cómo nacen", "vivíparos · ovíparos", "var(--red)"],
    ["Qué comen", "herbívoros · carnívoros · omnívoros", "var(--leaf)"],
    ["Cómo se mueven", "andan · vuelan · nadan · reptan", "var(--sun)"],
  ]],
  tarjetas: [
    ["¿Qué es un vertebrado?", "Un animal con huesos"],
    ["¿Qué es un invertebrado?", "Un animal sin huesos"],
    ["¿Qué es un ovíparo?", "Un animal que nace de un huevo"],
    ["¿Qué es un vivíparo?", "Un animal que nace de su madre"],
    ["¿Qué come un herbívoro?", "Solo plantas"],
    ["¿Qué come un carnívoro?", "Otros animales"],
    ["¿Qué es un omnívoro?", "Un animal que come de todo"],
    ["¿La ballena es un pez?", "No, es un mamífero"],
  ],
  familias: [
    "En el parque o el zoo, jugad a clasificar cada animal: ¿huesos?, ¿cómo nace?, ¿qué come?",
    "Haced adivinanzas de animales con tres pistas durante un viaje en coche.",
    "Si tenéis mascota, apuntad en una tabla quién le da de comer y de beber cada día.",
    "Buscad bichos en el jardín (sin hacerles daño) y contad sus patas con una lupa.",
  ],
  saberes: "Los animales: características, clasificación (vertebrados e invertebrados; vivíparos y ovíparos; según su alimentación), hábitat y respeto por los seres vivos",
  ideas: ["Clasificación de fichas de animales en tablas de doble entrada.", "Terrario temporal de caracoles o gusanos para observar y devolverlos.", "Juego de «¿quién soy?» con tres pistas por animal."],
});
