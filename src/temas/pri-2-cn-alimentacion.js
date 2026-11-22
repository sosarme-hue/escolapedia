// Ciencias de la Naturaleza 2º de Primaria: la alimentación saludable. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, manzana, zanahoria, pan, leche, pescado, pastel, vaso, plato, huevo, chip, tick, equis, flechaR, sol, luna, suelo } = require("./_pri2b");

const platano = (x, y) => `<path transform="translate(${x} ${y})" d="M-20 -6 Q0 22 22 -8 Q24 -12 20 -12 Q2 10 -18 -10Z" fill="var(--sun)" stroke="#a37b00" stroke-width="1.2"/>`;
const brocoli = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-4 0 V16 H4 V0" fill="#8fcf7a"/><circle cx="-9" cy="-4" r="9" fill="var(--leaf)"/><circle cx="9" cy="-4" r="9" fill="var(--leaf)"/><circle cy="-12" r="10" fill="var(--leaf)"/></g>`;
const muslo = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="-4" cy="-2" rx="16" ry="11" fill="#c97a3a"/><path d="M8 4 L20 14" stroke="#f5ecd7" stroke-width="5" stroke-linecap="round"/><circle cx="22" cy="16" r="4" fill="#f5ecd7"/></g>`;
const arroz = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-20 0 Q0 22 20 0Z" fill="var(--pen)"/><ellipse cy="0" rx="20" ry="6" fill="#fff" stroke="var(--line)"/></g>`;
const caramelo = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-22 -8 L-12 0 L-22 8Z M22 -8 L12 0 L22 8Z" fill="var(--inf)"/><ellipse rx="13" ry="9" fill="var(--red)"/></g>`;
const refresco = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-10" y="-30" width="20" height="30" rx="3" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/><rect x="-10" y="-22" width="20" height="12" fill="var(--red)"/></g>`;
const aceite = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-4 -40 H4 V-32 q8 4 8 12 V0 H-8 V-20 q0 -8 8 -12z" fill="#c9b23a" opacity=".85" stroke="var(--ink)" stroke-width="1.2"/></g>`;

module.exports = tema({
  materia: "Ciencias de la Naturaleza",
  titulo: "La alimentación saludable",
  objetivos: ["Saber por qué necesitamos comer y beber agua", "Conocer los grupos de alimentos y para qué sirve cada uno", "Aprender a hacer comidas variadas y sanas"],
  claves: ["alimento", "dieta variada", "frutas y verduras", "proteínas", "desayuno", "agua"],
  pregunta: {
    texto: "Si un día solo comieras pasteles y bebieras refrescos, ¿crees que tu cuerpo estaría contento?",
    respuesta: "No. Los pasteles y los refrescos tienen mucho azúcar. El cuerpo necesita una <mark>dieta variada</mark>: frutas, verduras, pan, leche, huevos, pescado… y <b>agua</b>. Los dulces, solo de vez en cuando.",
  },
  bloques: [
    {
      html: `<h3>¿Por qué comemos?</h3><p>Los alimentos son la <mark>gasolina del cuerpo</mark>. Nos dan energía para correr, jugar, pensar y estudiar.</p><p>También nos ayudan a <b>crecer</b> y a ponernos buenos cuando estamos malitos. Por eso tenemos que comer todos los días. Pero no vale cualquier cosa: hay que comer <b>sano</b>.</p>`,
      svg: svg("Un niño come una manzana y después corre con energía", `${suelo(152)}${nino(56, 152, { c: "var(--pen)" })}${manzana(82, 104, 10)}${flechaR(98, 120, 140, 120)}${nino(196, 152, { pose: "corre", c: "var(--red)" })}<path d="M222 80 l-6 12 h8 l-6 12" stroke="var(--sun)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${txt(130, 32, "Comida = energía", "var(--leaf)", 17)}`),
    },
    {
      html: `<h3>Frutas y verduras</h3><p>Las <mark>frutas y verduras</mark> tienen <b>vitaminas</b>. Las vitaminas nos protegen de ponernos enfermos.</p><p>Hay que comer frutas y verduras <b>todos los días</b>, y de muchos colores: naranja como la zanahoria, verde como el brócoli, rojo como la fresa o amarillo como el plátano. ¡Cuantos más colores, mejor!</p>`,
      svg: svg("Manzana, plátano, zanahoria y brócoli", `${manzana(48, 92, 20)}${platano(108, 96)}${zanahoria(168, 90)}${brocoli(222, 96)}${txt(130, 150, "todos los días", "var(--leaf)", 16)}${big(130, 34, "Vitaminas", "var(--leaf)", 18)}`),
    },
    {
      html: `<h3>Pan, arroz y pasta</h3><p>El <mark>pan</mark>, el <b>arroz</b>, la <b>pasta</b> y las <b>patatas</b> nos dan mucha <b>energía</b>.</p><p>Son como las pilas del cuerpo. Los necesitamos para movernos, jugar y estudiar. Por eso es bueno comer un poco en cada comida, sobre todo en el desayuno.</p>`,
      svg: svg("Un pan y un cuenco de arroz", `${pan(76, 96)}${arroz(184, 96)}${txt(76, 140, "pan", "var(--ink)", 15)}${txt(184, 140, "arroz", "var(--ink)", 15)}${big(130, 34, "Energía", "var(--sun)", 18)}`),
    },
    {
      html: `<h3>Carne, pescado, huevos y legumbres</h3><p>La <mark>carne</mark>, el <b>pescado</b>, los <b>huevos</b> y las <b>legumbres</b> (lentejas, garbanzos, judías) tienen <b>proteínas</b>.</p><p>Las proteínas sirven para <b>crecer</b> y para que los músculos estén fuertes. Es bueno comer más pescado y legumbres, y no tanta carne roja.</p>`,
      svg: svg("Un muslo de pollo, un pescado, un huevo y lentejas", `${muslo(44, 96)}${pescado(110, 92)}${huevo(170, 94, 1.3)}<g>${[...Array(9)].map((_, i) => `<circle cx="${214 + (i % 3) * 10}" cy="${86 + Math.floor(i / 3) * 9}" r="4" fill="#b9773a"/>`).join("")}</g>${txt(130, 146, "para crecer", "var(--red)", 16)}${big(130, 34, "Proteínas", "var(--red)", 18)}`),
    },
    {
      html: `<h3>Leche, yogur y queso</h3><p>La <mark>leche</mark> y sus derivados, el <b>yogur</b> y el <b>queso</b>, tienen <b>calcio</b>.</p><p>El calcio hace que los <b>huesos y los dientes</b> estén fuertes. Por eso es bueno tomar leche en el desayuno o un yogur de postre.</p>`,
      svg: svg("Un brik de leche, un yogur y un trozo de queso", `${leche(58, 96)}<g transform="translate(130 100)"><path d="M-16 -18 H16 L12 16 H-12Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><rect x="-18" y="-24" width="36" height="7" rx="2" fill="var(--pen)"/></g><path d="M180 116 L236 116 L236 90 L180 106Z" fill="var(--sun)" stroke="#a37b00" stroke-width="1.5"/><circle cx="210" cy="106" r="3" fill="#e0b000"/><circle cx="226" cy="100" r="2.5" fill="#e0b000"/>${txt(130, 150, "huesos fuertes", "var(--pen)", 16)}${big(130, 34, "Calcio", "var(--pen)", 18)}`),
    },
    {
      html: `<h3>Dulces, solo a veces</h3><p>Los <mark>dulces</mark>, la bollería, las chucherías y los refrescos tienen mucho <b>azúcar</b> y grasa.</p><p>No son malos si los tomamos <b>de vez en cuando</b>, en una fiesta o un cumpleaños. Pero si los comemos todos los días, pueden dañar los dientes y no nos dan lo que el cuerpo necesita.</p>`,
      svg: svg("Un pastel, un caramelo y un refresco: solo a veces", `${pastel(56, 96)}${caramelo(130, 96)}${refresco(200, 110)}${txt(130, 150, "de vez en cuando", "var(--red)", 16)}${big(130, 34, "Solo a veces", "var(--red)", 18)}`),
    },
    {
      html: `<h3>El agua</h3><p>La mejor bebida es el <mark>agua</mark>. Nuestro cuerpo tiene mucha agua y la va perdiendo cuando sudamos o hacemos pis.</p><p>Por eso hay que <b>beber agua</b> varias veces al día, sobre todo si hace calor o si hacemos deporte. Lleva siempre una botella de agua al cole.</p>`,
      svg: svg("Un niño bebe un vaso de agua después de jugar", `${suelo(152)}${nino(84, 152, { pose: "canta", c: "var(--leaf)" })}${vaso(112, 92)}${sol(210, 46, 16)}${big(196, 120, "¡Agua!", "var(--water)", 22)}`),
      video: V("OkjtI6Umevk"),
    },
    {
      html: `<h3>El plato saludable</h3><p>Un plato sano tiene de todo. La <mark>mitad</mark> del plato, <b>verduras y frutas</b>. Un <b>cuarto</b>, pan, arroz, pasta o patatas. Y el otro <b>cuarto</b>, pescado, huevo, carne o legumbres.</p><p>Para beber, agua. ¡Y no olvides el <b>desayuno</b>! Es la primera comida del día y nos da fuerza para empezar.</p>`,
      svg: svg("Un plato dividido: mitad verduras, un cuarto arroz y un cuarto proteínas", `<circle cx="110" cy="94" r="62" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M110 32 V156" stroke="var(--ink)" stroke-width="2"/><path d="M110 94 H172" stroke="var(--ink)" stroke-width="2"/>${brocoli(76, 92)}${zanahoria(84, 128)}${arroz(142, 72)}${pescado(140, 110)}${vaso(206, 110)}${txt(76, 172, "mitad", "var(--leaf)", 12)}${txt(206, 150, "agua", "var(--water)", 13)}`),
    },
    {
      html: `<h3>Juego: ¿a menudo o a veces?</h3><p>Separa los alimentos en dos grupos. Los de <mark>todos los días</mark>: fruta, verdura, pan, leche, legumbres y agua.</p><p>Los de <mark>a veces</mark>: chucherías, refrescos, patatas de bolsa y bollos. ¿Dónde pondrías una manzana? ¿Y un donut? ¡Muy bien!</p>`,
      svg: svg("Manzana, leche y brócoli en el grupo de todos los días; caramelo y refresco en el de a veces", `<rect x="14" y="40" width="112" height="110" rx="12" fill="var(--leaf)" opacity=".15"/><rect x="134" y="40" width="112" height="110" rx="12" fill="var(--red)" opacity=".12"/>${manzana(40, 84, 13)}${leche(76, 92)}${brocoli(108, 92)}${caramelo(166, 86)}${refresco(220, 102)}${txt(70, 134, "todos los días", "var(--leaf)", 12)}${txt(190, 134, "a veces", "var(--red)", 13)}${tick(70, 26)}<circle cx="190" cy="28" r="8" fill="none" stroke="var(--red)" stroke-width="3"/>`),
    },
  ],
  figura: {
    titulo: "Los grupos de alimentos",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Frutas y verduras, pan y cereales, proteínas, lácteos, y dulces solo a veces">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["Frutas y verduras", "vitaminas", "var(--leaf)"], ["Pan y arroz", "energía", "var(--sun)"], ["Proteínas", "para crecer", "var(--red)"], ["Lácteos", "calcio", "var(--pen)"], ["Dulces", "solo a veces", "var(--muted)"]].map(([t, d, c], i) => `<rect x="${16 + i * 124}" y="40" width="112" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${rot(72 + i * 124, 190, t, { size: 12.5, color: c, w: 800 })}${rot(72 + i * 124, 212, d, { size: 13, color: "var(--muted)" })}`).join("")}
      ${manzana(56, 110, 18)}${zanahoria(92, 112)}${pan(196, 110)}${pescado(320, 104)}${huevo(332, 140, 1.2)}${leche(444, 120)}${pastel(568, 116)}
    </svg>`,
  },
  video: V("jeUGs-FPJbs", "comida saludable para niños"),
  ejemplos: [
    { enunciado: "Prepara un desayuno sano.", pasos: ["Elige un lácteo: un vaso de leche.", "Elige algo de energía: una tostada con aceite.", "Añade una fruta: unos trozos de plátano."], resultado: "leche, tostada y fruta: ¡un desayuno completo!" },
    { enunciado: "¿Es sano merendar todos los días un bollo y un refresco?", pasos: ["El bollo tiene mucho azúcar y grasa.", "El refresco también tiene mucho azúcar.", "Son alimentos para tomar solo a veces."], resultado: "no; mejor un bocadillo, una fruta y agua." },
    { enunciado: "Completa el plato: tengo arroz y pescado. ¿Qué falta?", pasos: ["El arroz es el cuarto de energía.", "El pescado es el cuarto de proteínas.", "Falta la mitad del plato: verduras."], resultado: "faltan verduras, por ejemplo una ensalada." },
  ],
  errores: [
    "Saltarse el desayuno: es la comida que nos da fuerza para empezar el día.",
    "Pensar que los zumos con azúcar son tan buenos como la fruta entera.",
    "Creer que comer mucho es comer sano: lo importante es comer variado.",
    "Beber refrescos en vez de agua cuando tenemos sed.",
  ],
  ejercicios: [
    { q: "Di tres frutas y tres verduras.", sol: "Por ejemplo: manzana, pera y naranja; tomate, zanahoria y lechuga." },
    { q: "¿Qué nos dan las frutas y verduras?", sol: "Vitaminas, que nos protegen de enfermar." },
    { q: "¿Qué alimentos tienen calcio?", sol: "La leche, el yogur y el queso." },
    { q: "Di dos alimentos con proteínas.", sol: "Por ejemplo: huevos y lentejas." },
    { q: "¿Qué alimentos nos dan mucha energía?", sol: "El pan, el arroz, la pasta y las patatas." },
    { q: "¿Cuál es la mejor bebida?", sol: "El agua." },
    { q: "Dibuja un plato sano y colorea la mitad de verduras.", sol: "Mitad verduras, un cuarto pan o arroz y un cuarto pescado, huevo o legumbres." },
    { q: "Rodea los alimentos de «a veces»: manzana, chuches, yogur, refresco, pan.", sol: "Chuches y refresco." },
    { q: "Escribe lo que has desayunado hoy. ¿Era completo?", sol: "Respuesta libre: completo si tiene lácteo, cereal (pan) y fruta." },
    { q: "¿Por qué hay que beber más agua cuando hace calor?", sol: "Porque al sudar perdemos agua." },
  ],
  quiz: [
    { q: "Las frutas y verduras nos dan…", o: ["vitaminas", "solo azúcar", "nada"], a: 0, e: "Nos protegen de enfermar." },
    { q: "La leche tiene…", o: ["calcio", "gasolina", "sal"], a: 0, e: "Para huesos y dientes fuertes." },
    { q: "¿Qué alimento tiene proteínas?", o: ["El huevo", "El caramelo", "El refresco"], a: 0, e: "Sirven para crecer." },
    { q: "La mejor bebida es…", o: ["el refresco", "el agua", "el batido"], a: 1, e: "Agua siempre." },
    { q: "Los dulces se comen…", o: ["todos los días", "de vez en cuando", "en cada comida"], a: 1, e: "Tienen mucho azúcar." },
    { q: "El pan y el arroz nos dan…", o: ["energía", "calcio", "agua"], a: 0, e: "Son como las pilas del cuerpo." },
    { q: "En un plato sano, la mitad son…", o: ["patatas fritas", "verduras y frutas", "dulces"], a: 1, e: "Media parte de verduras." },
    { q: "Las lentejas son…", o: ["legumbres", "frutas", "lácteos"], a: 0, e: "Como los garbanzos y las judías." },
    { q: "La primera comida del día es…", o: ["la cena", "el desayuno", "la merienda"], a: 1, e: "Nos da fuerza para empezar." },
    { q: "Comer sano es comer…", o: ["siempre lo mismo", "variado", "mucho"], a: 1, e: "Un poco de todo." },
  ],
  examen: [
    { q: "¿Qué merienda es más sana?", o: ["Bocadillo, fruta y agua", "Bollo y refresco", "Chuches"], a: 0, e: "Variada y con poco azúcar." },
    { q: "¿Para qué sirve el calcio?", o: ["Huesos y dientes fuertes", "Tener sueño", "Nada"], a: 0, e: "Lo tienen los lácteos." },
    { q: "¿Qué alimento es de «a veces»?", o: ["Lechuga", "Refresco", "Agua"], a: 1, e: "Tiene mucho azúcar." },
    { q: "¿Qué necesita el cuerpo varias veces al día?", o: ["Agua", "Caramelos", "Refrescos"], a: 0, e: "Perdemos agua al sudar." },
  ],
  feynman: ["Por qué necesitamos comer", "Los grupos de alimentos y para qué sirven", "Cómo es un plato saludable"],
  mapaT: ["COMER SANO", [
    ["Frutas y verduras", "vitaminas · cada día", "var(--leaf)"],
    ["Pan, arroz, pasta", "energía", "var(--sun)"],
    ["Proteínas y lácteos", "crecer · calcio", "var(--red)"],
    ["Agua y dulces", "agua siempre · dulces a veces", "var(--pen)"],
  ]],
  tarjetas: [
    ["¿Qué nos dan las frutas?", "Vitaminas"],
    ["¿Qué nos da el pan?", "Energía"],
    ["¿Qué nos da la leche?", "Calcio para los huesos"],
    ["¿Qué nos dan los huevos?", "Proteínas para crecer"],
    ["La mejor bebida", "El agua"],
    ["¿Cuándo comemos dulces?", "Solo de vez en cuando"],
    ["Media parte del plato sano", "Verduras y frutas"],
    ["Una legumbre", "Las lentejas"],
  ],
  familias: [
    "Haced juntos la lista de la compra separando los alimentos por grupos.",
    "Jugad al «plato de colores»: ¿cuántos colores de fruta y verdura hay hoy en la mesa?",
    "Preparad entre los dos un desayuno completo: lácteo, pan y fruta.",
    "Llevad siempre agua en la mochila y cambiad el refresco por agua en casa.",
  ],
  saberes: "Vida saludable: la alimentación equilibrada, los grupos de alimentos y la importancia del agua y del desayuno",
  ideas: ["Mural del plato saludable con recortes de folletos de supermercado.", "Registro semanal de fruta en el almuerzo con pegatinas.", "Taller de brochetas de fruta de colores."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Preparar un desayuno completo", "Conocer las cinco comidas del día", "Leer la información sencilla de una etiqueta", "Aplicar normas de higiene en la cocina y en la mesa"],
  lectura: { titulo: "El desayuno de los campeones", html: `<p>Daniela juega al baloncesto los sábados. Un sábado, llegó al partido sin desayunar porque se había dormido.</p><p>Al principio corría mucho, pero pronto empezó a sentirse cansada. Le dolía un poco la cabeza y le temblaban las piernas. Su entrenadora la sentó en el banquillo.</p><p>—¿Has desayunado hoy? —le preguntó.</p><p>—No, no me dio tiempo.</p><p>La entrenadora le dio un plátano y un vaso de agua.</p><p>—El cuerpo es como un coche —le explicó—. Si no tiene gasolina, no puede correr.</p><p>Esa semana, Daniela preparó con su padre un plan para los sábados: un vaso de leche, una tostada con tomate y aceite, y una pieza de fruta.</p><p>El sábado siguiente, Daniela desayunó bien antes del partido. Corrió, saltó y encestó tres canastas. ¡Su equipo ganó!</p><p>—Es el desayuno de los campeones —dijo su padre, guiñándole un ojo.</p>` },
  tras: {
    "¿Por qué comemos?": [
      ["Las cinco comidas del día", `<p>Para tener energía todo el día, es bueno repartir lo que comemos en <mark>cinco comidas</mark>:</p><ul><li><b>Desayuno</b>: al levantarnos. Es muy importante, porque llevamos muchas horas sin comer.</li><li><b>Almuerzo</b> o media mañana: en el recreo. Una fruta o un bocadillo pequeño.</li><li><b>Comida</b>: a mediodía. Es la comida más completa.</li><li><b>Merienda</b>: por la tarde. Fruta, yogur o un bocadillo.</li><li><b>Cena</b>: por la noche. Más ligera que la comida, para dormir bien.</li></ul><p>Es mejor comer <b>a horas parecidas</b> cada día y no picar entre horas, sobre todo chucherías.</p><p>Comer sentados, despacio y en familia también es parte de comer bien. ¡Y sin pantallas!</p><p><b>Actividad</b>: apunta qué comes en cada una de las cinco comidas de un día.</p>`,
        L6.filas("Comidas", [["desayuno", "mañana", cNA], ["almuerzo", "recreo", cAZ], ["comida", "mediodía", cVE], ["merienda y cena", "tarde, noche", cRO]]),
        ["nMmIBlRl8ls", "¡Me Gusta Comer Sano! | Alimentación Saludable", "Bebefinn en español", 312191050]],
    ],
    "Pan, arroz y pasta": [
      ["Un desayuno completo", `<p>Un <mark>buen desayuno</mark> tiene tres partes:</p><ul><li>Un <b>lácteo</b>: leche, yogur o queso. Nos da calcio para los huesos.</li><li>Un <b>cereal</b>: pan, tostadas o copos de avena. Nos da energía.</li><li>Una <b>fruta</b>: una pieza entera o un zumo natural. Nos da vitaminas.</li></ul><p>Ejemplos de desayunos completos:</p><ul><li>Leche, tostada con tomate y aceite, y una mandarina.</li><li>Yogur con copos de avena y fresas.</li><li>Leche con cacao, pan con queso y un plátano.</li></ul><p>Las galletas de chocolate, los bollos y los cereales con mucho azúcar no son un buen desayuno de cada día. Pueden ser algo especial de vez en cuando.</p><p><b>Actividad</b>: diseña tres desayunos completos para tres días distintos.</p>`,
        H6.flujo("Desayuno", ["lácteo|leche", "cereal|tostada", "fruta|plátano", "¡energía!|a correr"], cVE)],
    ],
    "Dulces, solo a veces": [
      ["Leer las etiquetas", `<p>Los alimentos que compramos envasados tienen una <mark>etiqueta</mark>. En ella hay información útil:</p><ul><li>El <b>nombre</b> del producto.</li><li>Los <b>ingredientes</b>: de qué está hecho. El que aparece primero es el que más hay.</li><li>La <b>fecha de caducidad</b> o de consumo preferente: hasta cuándo se puede comer.</li><li>El <b>peso</b> o la cantidad: 250 g, 1 litro…</li><li>Los <b>alérgenos</b>: avisos para las personas con alergia, como «contiene leche» o «contiene frutos secos».</li></ul><p>Si en una galleta el primer ingrediente es el azúcar, ¡quiere decir que tiene muchísimo!</p><p>Algunos productos tienen un <b>semáforo</b> de colores: verde es mejor y rojo, para comer muy poco.</p><p><b>Actividad</b>: busca en casa la etiqueta de un yogur y encuentra su fecha de caducidad y sus ingredientes.</p>`,
        L6.filas("Etiqueta", [["ingredientes", "de qué es", cAZ], ["caducidad", "hasta cuándo", cRO], ["peso", "cuánto", cNA], ["alérgenos", "avisos", cMO]])],
    ],
    "El agua": [
      ["Higiene en la cocina y la mesa", `<p>Para comer bien también hay que cuidar la <mark>higiene</mark>. Así evitamos que los gérmenes nos pongan enfermos:</p><ul><li><b>Lavarse las manos</b> con agua y jabón antes de comer y de cocinar.</li><li><b>Lavar</b> la fruta y la verdura antes de comerla.</li><li>Guardar en la <b>nevera</b> los alimentos que lo necesitan, como la leche, la carne o el pescado.</li><li>No comer alimentos <b>caducados</b> ni que huelan mal.</li><li>Usar <b>cubiertos y servilleta</b>, y no hablar con la boca llena.</li><li><b>Lavarse los dientes</b> después de comer.</li></ul><p>En la cocina, los niños deben ayudar siempre con un adulto, porque hay fuego, cuchillos y aparatos que queman.</p><p><b>Actividad</b>: haz un cartel con las normas de higiene para colgar en el comedor del cole.</p>`,
        H6.rueda("Higiene", "MESA", [["manos", cAZ], ["lavar fruta", cVE], ["nevera", cNA], ["dientes", cRO]])],
    ],
  },
  final: [
    ["Comidas de aquí y de allá", `<p>Cada lugar del mundo tiene sus <mark>comidas típicas</mark>, según lo que crece y se cría allí:</p><ul><li>En <b>España</b> seguimos la <b>dieta mediterránea</b>: aceite de oliva, verduras, legumbres, pescado, pan y fruta. ¡Es una de las más sanas del mundo!</li><li>En <b>Japón</b> comen mucho arroz y pescado, como el sushi.</li><li>En <b>México</b>, tortillas de maíz, frijoles y aguacate.</li><li>En <b>Italia</b>, pasta y pizza.</li><li>En <b>Marruecos</b>, cuscús y té con hierbabuena.</li></ul><p>En cada región de España también hay platos típicos: la paella en Valencia, el gazpacho en Andalucía, el cocido en Madrid, el pulpo en Galicia…</p><p>Probar comidas nuevas es una forma de conocer otras culturas.</p><p><b>Actividad</b>: pregunta en casa cuál es el plato típico de tu pueblo o del lugar de origen de tu familia.</p>`,
      L6.filas("Platos", [["España", "paella", cNA], ["Japón", "sushi", cRO], ["México", "tortillas", cVE], ["Italia", "pasta", cAZ]])],
    ["Repaso: el desayuno de Daniela", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>¿Por qué se cansa Daniela en el partido? Porque <b>no ha desayunado</b> y su cuerpo no tiene energía.</li><li>¿Qué le da la entrenadora? Un <b>plátano</b> (fruta) y <b>agua</b>.</li><li>¿A qué compara la entrenadora el cuerpo? A un <b>coche</b>: los alimentos son su gasolina.</li><li>El desayuno nuevo: <b>leche</b> (lácteo), <b>tostada</b> (cereal) y <b>fruta</b>. ¡Es un desayuno completo!</li><li>La tostada con tomate y aceite es parte de la <b>dieta mediterránea</b>.</li></ul><p>El desayuno es la comida que nos prepara para empezar el día con fuerza, igual que a Daniela para encestar.</p><p><b>Actividad</b>: escribe tu propio «desayuno de campeones» y dibújalo en un plato.</p>`,
      H6.dos("Daniela", ["SIN COMER", ["cansada", "dolor", "banquillo"], cRO], ["DESAYUNADA", ["energía", "corre", "¡3 canastas!"], cVE])],
  ],
  ejemplos: [
    ["¿Es completo un desayuno de leche y galletas?", ["Tiene lácteo y cereal.", "Falta la fruta."], "No del todo: falta fruta."],
    ["¿Qué ingrediente hay más en un producto?", ["Miro la lista.", "El primero es el que más hay."], "El primero de la lista."],
  ],
  errores: ["Saltarse el desayuno.", "Pensar que los bollos son un buen desayuno de cada día."],
  ejercicios: [
    ["b", "¿Cuántas comidas al día son recomendables?", "Cinco."],
    ["b", "Di las tres partes de un desayuno completo.", "Lácteo, cereal y fruta."],
    ["b", "¿Qué indica la fecha de caducidad?", "Hasta cuándo se puede comer."],
    ["b", "¿Qué hacemos antes de comer?", "Lavarnos las manos."],
    ["b", "¿Qué es la dieta mediterránea?", "La forma de comer típica de España, con aceite de oliva, verduras, pescado…"],
    ["m", "Escribe un desayuno completo.", "Leche, tostada y una manzana."],
    ["m", "¿Por qué la cena debe ser ligera?", "Para dormir bien."],
    ["m", "¿Qué son los alérgenos?", "Avisos de ingredientes que dan alergia."],
    ["m", "¿Por qué lavamos la fruta?", "Para quitar suciedad y gérmenes."],
    ["m", "Di un plato típico de otro país.", "Sushi, pizza, cuscús…"],
    ["a", "En la lectura, ¿a qué compara la entrenadora el cuerpo?", "A un coche que necesita gasolina."],
    ["a", "Si el primer ingrediente de unas galletas es el azúcar, ¿qué significa?", "Que tienen mucho azúcar."],
    ["a", "Planifica las cinco comidas de un día sano.", "Respuesta libre equilibrada."],
    ["a", "¿Por qué los niños deben cocinar con un adulto?", "Porque hay fuego, cuchillos y aparatos peligrosos."],
  ],
  quiz: [
    ["La comida más completa del día es la…", ["comida de mediodía", "merienda", "cena"], "Comidas."],
    ["Un desayuno completo tiene lácteo, cereal y…", ["fruta", "bollo", "refresco"], "Desayuno."],
    ["En una etiqueta, el ingrediente principal va…", ["primero", "último", "en medio"], "Etiquetas."],
    ["La leche se guarda en la…", ["nevera", "despensa caliente", "mochila"], "Higiene."],
    ["La paella es típica de…", ["Valencia", "Japón", "México"], "Platos."],
  ],
  examen: [
    ["En la lectura, ¿qué le da la entrenadora a Daniela?", ["un plátano y agua", "un bollo", "un zumo de bote"], "Lectura."],
    ["El nuevo desayuno de Daniela es…", ["completo", "solo dulce", "sin lácteo"], "Repaso."],
  ],
  tarjetas: [
    ["Cinco comidas", "Desayuno, almuerzo, comida, merienda y cena."],
    ["Desayuno completo", "Lácteo + cereal + fruta."],
  ],
  glosario: [
    ["Desayuno", "Primera comida del día."],
    ["Merienda", "Comida de la tarde."],
    ["Lácteo", "Alimento hecho con leche."],
    ["Cereal", "Trigo, arroz, avena… y alimentos hechos con ellos."],
    ["Etiqueta", "Información escrita en un envase."],
    ["Caducidad", "Fecha hasta la que se puede comer algo."],
    ["Alérgeno", "Ingrediente que puede dar alergia."],
    ["Higiene", "Limpieza para cuidar la salud."],
    ["Germen", "Ser diminuto que puede poner enfermo."],
    ["Dieta mediterránea", "Forma sana de comer de los países del Mediterráneo."],
  ],
  situacion: {
    titulo: "La semana del desayuno sano",
    reto: "La clase organiza una semana en la que cada día alguien trae y explica un desayuno o almuerzo saludable.",
    pasos: ["Diseñar desayunos completos con lácteo, cereal y fruta.", "Leer las etiquetas de los productos que traemos.", "Aplicar normas de higiene antes de comer.", "Hacer un mural con los mejores desayunos de la semana."],
    producto: "Un mural de desayunos y almuerzos saludables.",
    evaluacion: ["Conoce las cinco comidas.", "Prepara un desayuno completo.", "Lee datos sencillos de una etiqueta.", "Aplica normas de higiene."],
  },
});
