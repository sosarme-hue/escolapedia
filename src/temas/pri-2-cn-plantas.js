// Ciencias de la Naturaleza 2º de Primaria: las plantas, cómo nacen y crecen. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, planta, raices, tierra, semilla, gota, sol, nube, lluvia, arbol, pino, flor, manzana, chip, flechaR, tick, equis, hierba, nino, vaso, suelo } = require("./_pri2b");

// Planta grande con sus partes: raíz, tallo, hojas y flor. (x, y) = nivel del suelo.
const plantaPartes = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V22 M0 6 l-14 14 M0 8 l12 12 M0 14 l-8 12 M0 14 l8 12" stroke="#8a5a2b" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M0 0 V-70" stroke="var(--leaf)" stroke-width="5"/><path d="M0 -26 q-26 -4 -30 -24 q20 0 30 18z M0 -42 q26 -4 30 -24 q-20 0 -30 18z" fill="var(--leaf)"/>${[0, 72, 144, 216, 288].map((a) => `<circle cx="${(Math.cos((a * Math.PI) / 180) * 9).toFixed(1)}" cy="${(-78 + Math.sin((a * Math.PI) / 180) * 9).toFixed(1)}" r="8" fill="var(--red)"/>`).join("")}<circle cy="-78" r="6" fill="var(--sun)"/></g>`;
const brote = (x, y, h = 14) => `<path d="M${x} ${y} V${y - h}" stroke="var(--leaf)" stroke-width="3"/><path d="M${x} ${y - h} q-10 -2 -12 -10 q8 0 12 8z M${x} ${y - h} q10 -2 12 -10 q-8 0 -12 8z" fill="var(--leaf)"/>`;

module.exports = tema({
  materia: "Ciencias de la Naturaleza",
  titulo: "Las plantas: cómo nacen y crecen",
  objetivos: ["Conocer las partes de una planta y para qué sirve cada una", "Explicar cómo nace una planta a partir de una semilla", "Saber qué necesitan las plantas para vivir y cómo cuidarlas"],
  claves: ["raíz", "tallo", "hoja", "flor", "fruto", "semilla", "germinar"],
  pregunta: {
    texto: "Dentro de una manzana hay unas pepitas negras. ¿Qué pasaría si plantas una en una maceta y la riegas?",
    respuesta: "La pepita es una <mark>semilla</mark>. Con agua, tierra y calor, se abre y <b>germina</b>: sale una raíz y un tallito. Con mucho tiempo, ¡podría crecer un manzano!",
  },
  bloques: [
    {
      html: `<h3>Las plantas son seres vivos</h3><p>Las plantas <mark>nacen, se alimentan, crecen, se reproducen y mueren</mark>, como todos los seres vivos.</p><p>Pero no se mueven de sitio: viven <b>sujetas al suelo</b>. Y no comen como los animales: <b>fabrican su propio alimento</b> con la luz del sol, el agua y el aire. ¡Son las únicas que saben hacerlo!</p>`,
      svg: svg("Un árbol, una flor y un pino crecen en la tierra", `${hierba(146)}${pino(48, 146, 1.4)}${arbol(130, 146, 1.4)}${flor(212, 146, "var(--inf)")}${sol(228, 34, 14)}${big(110, 30, "Seres vivos", "var(--leaf)", 18)}`),
    },
    {
      html: `<h3>Las partes de la planta</h3><p>Casi todas las plantas tienen <mark>raíz, tallo y hojas</mark>. Muchas tienen también <b>flores</b>.</p><p>La <b>raíz</b> está bajo tierra. El <b>tallo</b> sale hacia arriba y sostiene las hojas. Las <b>hojas</b> son verdes y suelen ser planas. Las <b>flores</b> tienen colores y olores bonitos.</p>`,
      svg: svg("Una planta con flor, hojas, tallo y raíz señalados", `${tierra(130)}${plantaPartes(110, 130, 1.1)}${[["flor", 22, "var(--red)"], ["hojas", 62, "var(--leaf)"], ["tallo", 100, "var(--leaf)"], ["raíz", 150, "#8a5a2b"]].map(([t, y, c]) => `<path d="M${t === "raíz" ? 126 : 132} ${y + 6 + (t === "flor" ? 20 : 0)} H178" stroke="var(--muted)" stroke-width="1.5"/>${rot(184, y + 12 + (t === "flor" ? 20 : 0), t, { size: 15, color: c, anchor: "start" })}`).join("")}`),
    },
    {
      html: `<h3>Para qué sirve cada parte</h3><p>La <mark>raíz</mark> sujeta la planta y <b>chupa el agua</b> de la tierra. El <mark>tallo</mark> lleva el agua hasta las hojas, como una pajita.</p><p>Las <mark>hojas</mark> usan la luz del sol para <b>fabricar el alimento</b> y por ellas la planta respira. La <mark>flor</mark> sirve para hacer <b>frutos y semillas</b>.</p>`,
      svg: svg("El agua sube por la raíz y el tallo; la luz del sol llega a las hojas", `${tierra(130)}${plantaPartes(130, 130, 1.1)}${[0, 1, 2].map((i) => gota(100 + i * 10, 154 - i * 4, 0.6)).join("")}${flechaR(146, 120, 146, 64, "var(--water)")}${sol(42, 40, 14)}${flechaR(60, 52, 96, 78, "var(--sun)")}${txt(206, 80, "sube el agua", "var(--water)", 13)}${txt(42, 92, "luz", "var(--sun)", 14)}`),
    },
    {
      html: `<h3>La semilla</h3><p>Muchas plantas nacen de una <mark>semilla</mark>. Dentro de la semilla hay una <b>plantita dormida</b> y un poco de comida para ella.</p><p>Las semillas están dentro de los <b>frutos</b>: las pepitas de la manzana, las pipas del girasol o el hueso del melocotón. Las lentejas y las judías también son semillas.</p>`,
      svg: svg("Una manzana partida con sus pepitas y varias semillas", `<g transform="translate(78 92)"><circle r="40" fill="var(--red)"/><path d="M0 -40 a40 40 0 0 1 0 80z" fill="#fbe9c9"/><path d="M0 -38 q8 -10 18 -10" stroke="var(--ink)" stroke-width="2" fill="none"/><ellipse cx="14" cy="-6" rx="4" ry="7" fill="#3b2a1a"/><ellipse cx="14" cy="10" rx="4" ry="7" fill="#3b2a1a"/></g>${semilla(176, 70, 1.6)}${semilla(214, 78, 1.3)}${semilla(190, 104, 1.5)}<ellipse cx="226" cy="112" rx="10" ry="12" fill="#c9a46a" stroke="var(--ink)"/>${txt(78, 158, "fruto", "var(--red)", 15)}${txt(200, 158, "semillas", "#8a5a2b", 15)}`),
    },
    {
      html: `<h3>La germinación</h3><p>Cuando una semilla tiene <mark>agua, aire y calor</mark>, se despierta. Se hincha, se abre y sale una <b>raíz</b> hacia abajo.</p><p>Después sale un <b>tallito</b> hacia arriba con las primeras hojas. Esto se llama <mark>germinar</mark>. Si pones una lenteja en un algodón mojado, ¡lo verás en pocos días!</p>`,
      svg: svg("Cuatro pasos: semilla, sale la raíz, sale el tallo y crecen las hojas", `${tierra(110)}${semilla(36, 120, 1.4)}${semilla(96, 120, 1.4)}<path d="M96 124 q2 10 -2 20" stroke="#8a5a2b" stroke-width="2.5" fill="none"/>${semilla(156, 120, 1.4)}<path d="M156 124 q2 10 -2 20" stroke="#8a5a2b" stroke-width="2.5" fill="none"/><path d="M158 116 q2 -10 0 -16" stroke="var(--leaf)" stroke-width="3" fill="none"/>${raices(216, 116, 1)}${brote(216, 116, 34)}${["1", "2", "3", "4"].map((n, i) => big(36 + i * 60, 40, n, "var(--pen)", 22)).join("")}${[0, 1, 2].map((i) => flechaR(52 + i * 60, 70, 80 + i * 60, 70)).join("")}`),
      video: V("H-YqbBDpeq0"),
    },
    {
      html: `<h3>Qué necesitan para crecer</h3><p>Para crecer sanas, las plantas necesitan <mark>agua, luz, aire y tierra</mark> con nutrientes.</p><p>Si una planta no tiene agua, sus hojas se ponen mustias y se seca. Si no tiene luz, se pone amarilla y débil. Por eso las macetas de casa se ponen cerca de la <b>ventana</b> y se riegan.</p>`,
      svg: svg("Una planta con agua y luz está sana; otra sin agua está seca", `${suelo(150)}<g transform="translate(70 150)"><path d="M-22 0 L-18 -26 H18 L22 0Z" fill="#c2603b"/></g>${planta(70, 124, 1.1, true)}${sol(30, 40, 12)}${lluvia(96, 40, 3)}${tick(70, 168)}<g transform="translate(190 150)"><path d="M-22 0 L-18 -26 H18 L22 0Z" fill="#c2603b"/><path d="M0 -26 V-56 q0 -8 10 -12 M0 -40 q-14 4 -18 16" stroke="#b9a35a" stroke-width="3" fill="none"/></g>${equis(190, 168)}`),
    },
    {
      html: `<h3>Plantas muy distintas</h3><p>Hay plantas de muchos tamaños. Los <mark>árboles</mark> son grandes y tienen un tallo grueso y duro llamado <b>tronco</b>.</p><p>Los <mark>arbustos</mark> son medianos y tienen muchos tallos desde abajo, como el rosal. Las <mark>hierbas</mark> son pequeñas y su tallo es blandito y verde, como la margarita.</p>`,
      svg: svg("Un árbol grande, un arbusto mediano y una hierba pequeña", `${hierba(146)}${arbol(54, 146, 1.7)}<g>${[-14, 0, 14].map((a) => `<path d="M130 146 L${130 + a} 118" stroke="#8a5a2b" stroke-width="3"/>`).join("")}<ellipse cx="130" cy="108" rx="30" ry="20" fill="var(--leaf)"/><circle cx="118" cy="102" r="4" fill="var(--red)"/><circle cx="142" cy="110" r="4" fill="var(--red)"/></g>${flor(212, 146, "var(--inf)")}${txt(54, 30, "árbol", "var(--leaf)", 15)}${txt(130, 74, "arbusto", "var(--leaf)", 15)}${txt(212, 102, "hierba", "var(--leaf)", 15)}`),
    },
    {
      html: `<h3>¿Para qué sirven las plantas?</h3><p>¡Las plantas son muy importantes! Nos dan <mark>alimentos</mark>: frutas, verduras, cereales y legumbres. Y fabrican el <b>oxígeno</b> del aire que respiramos.</p><p>También nos dan <b>madera</b> para hacer muebles y papel, y <b>algodón</b> para la ropa. Además, son la casa y la comida de muchos animales. Por eso hay que cuidarlas.</p>`,
      svg: svg("Un árbol da manzanas, madera y aire limpio", `${hierba(146)}${arbol(70, 146, 1.8)}${manzana(56, 64, 7)}${manzana(84, 76, 7)}${manzana(66, 90, 7)}<g transform="translate(176 136)"><rect x="-30" y="-10" width="60" height="10" fill="#c9a46a" stroke="var(--ink)"/><rect x="-24" y="-20" width="48" height="10" fill="#c9a46a" stroke="var(--ink)"/></g><path d="M130 66 q12 -8 24 0 t24 0" stroke="var(--water)" stroke-width="3" fill="none"/>${txt(190, 50, "aire limpio", "var(--water)", 13)}${txt(176, 104, "madera", "#8a5a2b", 13)}`),
    },
    {
      html: `<h3>Juego: mi diario de la lenteja</h3><p>Pon unas lentejas en un vaso con <mark>algodón mojado</mark>, cerca de la ventana. Cada día, mira y dibuja lo que pasa.</p><p>¿Qué sale primero, la raíz o el tallo? ¡La <b>raíz</b>! ¿Hacia dónde crece el tallo? ¡Hacia la <b>luz</b>! Mantén el algodón húmedo, pero sin ahogarlo.</p>`,
      svg: svg("Un vaso con algodón y una lenteja que germina junto a la ventana", `<rect x="160" y="30" width="80" height="80" rx="6" fill="var(--water)" opacity=".2" stroke="var(--ink)" stroke-width="2"/><path d="M200 30 V110 M160 70 H240" stroke="var(--ink)" stroke-width="2"/>${sol(220, 50, 10)}<g transform="translate(90 120)"><path d="M-26 -40 H26 L20 30 H-20Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-24 -18 q12 -8 24 0 q12 -8 24 0 V0 H-24Z" fill="#fff" stroke="var(--line)"/></g>${semilla(90, 100, 1.2)}<path d="M92 104 q4 10 0 18" stroke="#8a5a2b" stroke-width="2" fill="none"/>${brote(92, 98, 34)}${flechaR(110, 60, 150, 50, "var(--sun)")}${txt(130, 170, "día 1, día 2, día 3…", "var(--pen)", 13)}`),
    },
  ],
  figura: {
    titulo: "De la semilla a la planta",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Semilla, germinación, planta con hojas, planta con flor y fruto con semillas">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <rect x="20" y="170" width="600" height="60" rx="8" fill="#8a5a2b" opacity=".3"/>
      ${semilla(70, 180, 2)}
      ${semilla(190, 180, 1.6)}<path d="M190 186 q4 14 -2 26" stroke="#8a5a2b" stroke-width="3" fill="none"/>${brote(192, 172, 30)}
      ${raices(320, 170, 1.4)}${planta(320, 170, 1.5, false)}
      ${plantaPartes(450, 170, 1.2)}
      ${manzana(570, 130, 30)}
      ${[["semilla", 70], ["germina", 190], ["crece", 320], ["flor", 450], ["fruto", 570]].map(([t, x]) => rot(x, 252, t, { size: 18, color: "var(--leaf)", w: 800 })).join("")}
      ${[130, 255, 385, 510].map((x) => flechaR(x - 18, 120, x + 14, 120)).join("")}
    </svg>`,
  },
  video: V("gQ5y5gT-Wbc", "cómo nace y crece una planta"),
  ejemplos: [
    { enunciado: "¿Qué parte de la planta chupa el agua?", pasos: ["El agua está en la tierra.", "La parte que está bajo tierra es la raíz.", "La raíz chupa el agua y la manda al tallo."], resultado: "la raíz." },
    { enunciado: "Una planta en un armario oscuro se pone amarilla. ¿Por qué?", pasos: ["Las hojas fabrican el alimento con la luz.", "En el armario no hay luz.", "Sin luz no puede hacer su alimento y se debilita."], resultado: "le falta luz; hay que ponerla cerca de la ventana." },
    { enunciado: "Ordena: flor, semilla, fruto, planta con hojas.", pasos: ["Primero está la semilla.", "Germina y crece la planta con hojas.", "Sale la flor y, de la flor, el fruto."], resultado: "semilla, planta con hojas, flor y fruto." },
  ],
  errores: [
    "Pensar que las plantas comen tierra: fabrican su alimento con luz, agua y aire.",
    "Creer que la raíz sale después del tallo: al germinar, sale primero la raíz.",
    "Regar demasiado: con mucha agua las raíces se pudren.",
    "Pensar que las plantas no son seres vivos porque no se mueven.",
  ],
  ejercicios: [
    { q: "Escribe las partes de una planta.", sol: "Raíz, tallo, hojas y flor." },
    { q: "¿Para qué sirve la raíz?", sol: "Sujeta la planta y chupa el agua de la tierra." },
    { q: "¿Para qué sirven las hojas?", sol: "Para fabricar el alimento con la luz y para respirar." },
    { q: "¿Qué necesita una semilla para germinar?", sol: "Agua, aire y calor." },
    { q: "¿Qué necesita una planta para crecer?", sol: "Agua, luz, aire y tierra." },
    { q: "Di tres frutos que tengan semillas.", sol: "Por ejemplo: manzana, sandía y naranja." },
    { q: "¿En qué se diferencia un árbol de una hierba?", sol: "El árbol es grande y tiene tronco duro; la hierba es pequeña y su tallo es blando." },
    { q: "Di tres cosas que nos dan las plantas.", sol: "Alimentos, oxígeno y madera (también algodón y papel)." },
    { q: "Dibuja una planta y escribe el nombre de sus partes.", sol: "Raíz abajo, tallo, hojas y flor arriba." },
    { q: "Planta una lenteja en algodón. ¿Qué sale primero?", sol: "La raíz." },
  ],
  quiz: [
    { q: "¿Qué parte está bajo tierra?", o: ["La flor", "La raíz", "La hoja"], a: 1, e: "Sujeta y chupa agua." },
    { q: "El tallo sirve para…", o: ["sostener y llevar el agua", "oler bien", "dar frutos"], a: 0, e: "Es como una pajita." },
    { q: "Las hojas fabrican el alimento con…", o: ["la luz del sol", "la tierra", "la oscuridad"], a: 0, e: "Usan la luz, el agua y el aire." },
    { q: "Las semillas están dentro de…", o: ["los frutos", "las raíces", "las piedras"], a: 0, e: "Como las pepitas de la manzana." },
    { q: "Germinar es…", o: ["cuando la semilla se abre y nace la planta", "cuando se seca", "cuando florece"], a: 0, e: "Sale la raíz y el tallito." },
    { q: "Al germinar sale primero…", o: ["la flor", "la raíz", "el fruto"], a: 1, e: "La raíz va hacia abajo." },
    { q: "Una planta sin agua…", o: ["crece más", "se seca", "da más flores"], a: 1, e: "Necesita agua para vivir." },
    { q: "El tallo duro de un árbol se llama…", o: ["tronco", "raíz", "pétalo"], a: 0, e: "Es grueso y de madera." },
    { q: "El rosal es…", o: ["un árbol", "un arbusto", "una hierba"], a: 1, e: "Tiene muchos tallos desde abajo." },
    { q: "Las plantas fabrican…", o: ["oxígeno", "plástico", "humo"], a: 0, e: "El aire que respiramos." },
  ],
  examen: [
    { q: "¿Qué parte de la planta da frutos y semillas?", o: ["La flor", "La raíz", "El tallo"], a: 0, e: "De la flor sale el fruto." },
    { q: "¿Qué necesita una planta para vivir?", o: ["Agua, luz, aire y tierra", "Solo chuches", "Oscuridad"], a: 0, e: "Así crece sana." },
    { q: "La lenteja es…", o: ["una semilla", "una hoja", "una raíz"], a: 0, e: "Si la plantas, germina." },
    { q: "Ordena: semilla → ___ → planta.", o: ["germina", "se cae", "se seca"], a: 0, e: "La semilla germina y crece." },
  ],
  feynman: ["Las partes de una planta y para qué sirven", "Cómo germina una semilla", "Qué necesitan las plantas para crecer"],
  mapaT: ["LAS PLANTAS", [
    ["Partes", "raíz · tallo · hojas · flor", "var(--leaf)"],
    ["Nacen", "de una semilla que germina", "#8a5a2b"],
    ["Necesitan", "agua · luz · aire · tierra", "var(--water)"],
    ["Tipos", "árbol · arbusto · hierba", "var(--pen)"],
  ]],
  tarjetas: [
    ["Partes de la planta", "Raíz, tallo, hojas y flor"],
    ["¿Qué hace la raíz?", "Sujeta y chupa agua"],
    ["¿Qué hace el tallo?", "Sostiene y lleva el agua"],
    ["¿Qué hacen las hojas?", "Fabrican el alimento con la luz"],
    ["¿Qué hace la flor?", "Da frutos y semillas"],
    ["¿Qué es germinar?", "Cuando la semilla se abre y nace la planta"],
    ["¿Qué necesita una planta?", "Agua, luz, aire y tierra"],
    ["Tipos de plantas", "Árboles, arbustos y hierbas"],
  ],
  familias: [
    "Haced el experimento de la lenteja en algodón y dibujad juntos cada día cómo cambia.",
    "Al cortar fruta, buscad las semillas: ¿cuántas tiene una manzana? ¿y un pimiento?",
    "Encargadle regar una planta de casa y comprobar si la tierra está seca con el dedo.",
    "En un paseo, buscad un árbol, un arbusto y una hierba y comparad sus tallos.",
  ],
  saberes: "Las plantas: partes y funciones, la germinación de la semilla, necesidades para su desarrollo, tipos de plantas y su importancia para la vida",
  ideas: ["Semilleros con lentejas y judías en vasos transparentes para ver las raíces.", "Experimento de una planta con luz y otra sin luz durante una semana.", "Apadrinar un árbol del patio y anotar sus cambios en cada estación."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Entender cómo fabrican su alimento las plantas", "Distinguir árboles, arbustos y hierbas", "Conocer cómo viajan las semillas", "Cuidar un huerto o una planta en clase"],
  lectura: { titulo: "El huerto del cole", html: `<p>En el patio del colegio de Iván hay un rincón con tierra que nadie usaba. Un día, la maestra propone convertirlo en un huerto.</p><p>Los niños de 2.º quitan las piedras, remueven la tierra con rastrillos y echan abono. Después siembran semillas de lechuga, rabanitos y tomates. También plantan unas fresas que trae Iván de casa.</p><p>Cada día, por turnos, riegan con una regadera. Al principio no pasa nada, y algunos se impacientan.</p><p>—¿Seguro que esto funciona? —pregunta Lola.</p><p>Una semana después aparecen unos brotes verdes diminutos. ¡Los rabanitos son los primeros!</p><p>Durante semanas, los niños quitan las malas hierbas y espantan a los caracoles. Las plantas crecen y crecen.</p><p>En junio hacen la gran cosecha. Hay rabanitos rojos, lechugas enormes y tomates brillantes. Con ellos preparan una ensalada para todo el cole.</p><p>—Nunca me habían gustado los tomates —dice Lola—. ¡Pero estos los he cuidado yo!</p>` },
  tras: {
    "Para qué sirve cada parte": [
      ["Las plantas fabrican su comida", `<p>Las plantas no comen como los animales. ¡Ellas mismas <mark>fabrican su alimento</mark>! Lo hacen en las hojas:</p><ul><li>La <b>raíz</b> toma agua y sales minerales del suelo.</li><li>El <b>tallo</b> sube esa agua hasta las hojas.</li><li>Las <b>hojas</b> atrapan la <b>luz del sol</b> gracias a su color verde y toman un gas del aire.</li><li>Con todo eso, fabrican su alimento, una especie de azúcar.</li></ul><p>Este proceso se llama <b>fotosíntesis</b>. ¡Y lo mejor es que, al hacerlo, las plantas sueltan <b>oxígeno</b>, el gas que nosotros respiramos!</p><p>Por eso las plantas sin luz se ponen amarillas y se mueren: no pueden fabricar su comida.</p><p><b>Actividad</b>: tapa una hoja de una planta con papel de aluminio durante una semana. ¿Qué color tiene al destaparla?</p>`,
        H6.flujo("Fotosíntesis", ["raíz|agua", "tallo|sube", "hoja|sol + aire", "alimento|y oxígeno"], cVE),
        ["SljwLkjPlmc", "Fotosíntesis ¡Hola Plantita! | Canciones Infantiles", "El Payaso Plim Plim", 301775851]],
    ],
    "La semilla": [
      ["Semillas viajeras", `<p>Las plantas no pueden andar, pero sus <mark>semillas viajan</mark> para crecer en otros lugares:</p><ul><li>Con el <b>viento</b>: las semillas del diente de león tienen pelitos como paracaídas, y las del arce, alas que giran.</li><li>Con los <b>animales</b>: algunas tienen ganchitos que se pegan al pelo de los perros o a nuestros calcetines. Otras están dentro de frutos que comen los pájaros, y salen con sus cacas lejos de la planta.</li><li>Con el <b>agua</b>: el coco flota en el mar y puede llegar a otra isla.</li><li>Por sí mismas: algunas plantas, como las legumbres, abren sus vainas de golpe y lanzan las semillas.</li><li>Las <b>ardillas</b> esconden bellotas para el invierno y se olvidan de algunas, ¡que se convierten en árboles!</li></ul><p><b>Actividad</b>: después de pasear por el campo, revisa tus calcetines. ¿Llevas semillas viajeras?</p>`,
        L6.filas("Viajan", [["viento", "diente de león", cAZ], ["animales", "ganchitos", cNA], ["agua", "coco", cVE], ["ardillas", "bellotas", cRO]])],
    ],
    "Plantas muy distintas": [
      ["Árboles, arbustos y hierbas", `<p>Según su tamaño y su tallo, las plantas se clasifican en tres grupos:</p><ul><li><mark>Árboles</mark>: son grandes, con un tallo duro y grueso llamado <b>tronco</b>. Las ramas salen a cierta altura. El pino, la encina, el roble, el olivo.</li><li><mark>Arbustos</mark>: son medianos y tienen tallos duros, pero las ramas salen desde el suelo. El romero, el rosal, la adelfa.</li><li><mark>Hierbas</mark>: son pequeñas y tienen el tallo blando y verde. La margarita, el trigo, la lechuga, el césped.</li></ul><p>Algunos árboles pierden las hojas en otoño: son de hoja <b>caduca</b>, como el castaño. Otros las mantienen todo el año: son de hoja <b>perenne</b>, como el pino o la encina.</p><p><b>Actividad</b>: en el patio, busca un árbol, un arbusto y una hierba, y dibújalos.</p>`,
        H6.rueda("Plantas", "TALLO", [["árbol", cVE], ["arbusto", cNA], ["hierba", cAZ], ["caduca", cRO]])],
    ],
    "¿Para qué sirven las plantas?": [
      ["Cuidamos un huerto", `<p>Tener un <mark>huerto</mark>, aunque sea en una maceta, es una forma estupenda de aprender sobre las plantas. Estos son los pasos:</p><ul><li><b>Preparar</b> la tierra: quitar piedras, removerla y añadir abono.</li><li><b>Sembrar</b> las semillas a poca profundidad, o plantar plantas pequeñas.</li><li><b>Regar</b> con frecuencia, sin encharcar.</li><li><b>Cuidar</b>: quitar las malas hierbas y vigilar los bichos que se las comen.</li><li><b>Cosechar</b>: recoger los frutos y las hortalizas cuando están maduros.</li></ul><p>En casa se pueden cultivar en macetas tomates cherry, fresas, lechugas o hierbas aromáticas como la albahaca y la menta.</p><p>Cuidar un huerto enseña paciencia y responsabilidad. ¡Y las verduras que cultivas tú saben mejor!</p><p><b>Actividad</b>: planta una semilla de tomate en un vaso de yogur y cuídala en la ventana.</p>`,
        H6.flujo("Huerto", ["preparar|tierra", "sembrar|semillas", "regar|y cuidar", "cosechar|¡a comer!"], cNA)],
    ],
  },
  final: [
    ["Plantas que comemos", `<p>Comemos muchas <mark>partes distintas</mark> de las plantas:</p><ul><li><b>Raíces</b>: la zanahoria, el rábano, la remolacha.</li><li><b>Tallos</b>: el espárrago, el apio. La patata también es un tallo que crece bajo tierra.</li><li><b>Hojas</b>: la lechuga, la espinaca, la acelga, el repollo.</li><li><b>Flores</b>: la coliflor, el brócoli y la alcachofa son flores que aún no se han abierto.</li><li><b>Frutos</b>: la manzana, el tomate, el pimiento, el calabacín.</li><li><b>Semillas</b>: los garbanzos, las lentejas, el arroz, el maíz, las nueces.</li></ul><p>¿Sabías que el tomate es un fruto y no una verdura? Tiene semillas dentro, como la manzana.</p><p><b>Actividad</b>: mira lo que comes hoy y di qué parte de la planta es cada alimento vegetal.</p>`,
      L6.filas("Comemos", [["raíz", "zanahoria", cNA], ["hoja", "lechuga", cVE], ["flor", "brócoli", cAZ], ["fruto", "tomate", cRO]])],
    ["Repaso: el huerto del cole", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Los niños <b>preparan</b> la tierra quitando piedras y echando abono.</li><li><b>Siembran</b> semillas de lechuga, rabanitos y tomates.</li><li>Las riegan cada día: las plantas necesitan <b>agua</b>.</li><li>A la semana <b>germinan</b>: salen brotes verdes.</li><li>Quitan las <b>malas hierbas</b> y espantan a los caracoles.</li><li>En junio <b>cosechan</b>.</li></ul><p>¿Qué parte de la planta comemos? Del rabanito, la <b>raíz</b>; de la lechuga, las <b>hojas</b>; del tomate, el <b>fruto</b>. ¡Y de las fresas, también el fruto!</p><p>¿Son árboles, arbustos o hierbas? Las lechugas, los rabanitos y las fresas son <b>hierbas</b>: tienen el tallo blando.</p><p><b>Actividad</b>: escribe un diario del huerto con lo que pasa cada semana.</p>`,
      H6.dos("Huerto", ["SEMBRAMOS", ["lechuga", "rabanitos", "tomates"], cVE], ["COMEMOS", ["hojas", "raíces", "frutos"], cRO])],
  ],
  ejemplos: [
    ["¿Dónde fabrican las plantas su alimento?", ["Necesitan luz del sol.", "La atrapan las hojas verdes."], "En las hojas."],
    ["¿El rosal es árbol, arbusto o hierba?", ["Tallo duro.", "Ramas desde el suelo."], "Arbusto."],
  ],
  errores: ["Pensar que las plantas comen tierra.", "Creer que el tomate es una verdura y no un fruto."],
  ejercicios: [
    ["b", "¿Cómo se llama el proceso con el que las plantas fabrican su alimento?", "Fotosíntesis."],
    ["b", "¿Qué gas sueltan las plantas?", "Oxígeno."],
    ["b", "Di un árbol.", "Pino, roble, olivo…"],
    ["b", "¿Qué parte de la zanahoria comemos?", "La raíz."],
    ["b", "¿Cómo viajan las semillas del diente de león?", "Con el viento."],
    ["m", "¿Qué diferencia hay entre árbol y arbusto?", "El árbol tiene tronco; en el arbusto las ramas salen del suelo."],
    ["m", "¿Qué es un árbol de hoja caduca?", "El que pierde las hojas en otoño."],
    ["m", "¿Qué parte de la planta es la coliflor?", "Una flor."],
    ["m", "¿Por qué una planta sin luz se pone amarilla?", "Porque no puede fabricar su alimento."],
    ["m", "Ordena: cosechar, sembrar, preparar, regar.", "Preparar, sembrar, regar, cosechar."],
    ["a", "En la lectura, ¿qué sale primero en el huerto?", "Los rabanitos."],
    ["a", "Explica cómo ayudan las ardillas a plantar árboles.", "Esconden bellotas y olvidan algunas, que germinan."],
    ["a", "¿Por qué decimos que las plantas nos ayudan a respirar?", "Porque sueltan oxígeno."],
    ["a", "Clasifica: patata, espinaca, lenteja, manzana.", "Tallo, hoja, semilla, fruto."],
  ],
  quiz: [
    ["Las plantas fabrican su alimento en las…", ["hojas", "raíces", "flores"], "Fotosíntesis."],
    ["El coco viaja con el…", ["agua", "viento", "perro"], "Semillas."],
    ["La margarita es una…", ["hierba", "árbol", "arbusto"], "Tipos."],
    ["El último paso del huerto es…", ["cosechar", "sembrar", "preparar"], "Huerto."],
    ["Las lentejas son…", ["semillas", "raíces", "hojas"], "Comemos."],
  ],
  examen: [
    ["En la lectura, ¿qué preparan con la cosecha?", ["una ensalada", "una tarta", "un zumo"], "Lectura."],
    ["Del rabanito comemos la…", ["raíz", "flor", "semilla"], "Repaso."],
  ],
  tarjetas: [
    ["Fotosíntesis", "Raíz, tallo, hoja + sol = alimento y oxígeno."],
    ["Tipos de plantas", "Árboles, arbustos y hierbas."],
  ],
  glosario: [
    ["Fotosíntesis", "Forma en que las plantas fabrican su alimento."],
    ["Oxígeno", "Gas que respiramos y sueltan las plantas."],
    ["Árbol", "Planta grande con tronco."],
    ["Arbusto", "Planta mediana con ramas desde el suelo."],
    ["Hierba", "Planta pequeña de tallo blando."],
    ["Caduca", "Hoja que cae en otoño."],
    ["Perenne", "Hoja que se mantiene todo el año."],
    ["Huerto", "Terreno donde se cultivan hortalizas."],
    ["Abono", "Sustancia que alimenta la tierra."],
    ["Cosechar", "Recoger lo que se ha cultivado."],
  ],
  situacion: {
    titulo: "Nuestro huerto en macetas",
    reto: "La clase monta un pequeño huerto en macetas, lo cuida durante semanas y lleva un diario de crecimiento.",
    pasos: ["Preparar macetas con tierra y abono.", "Sembrar semillas de rabanitos, lechugas o legumbres.", "Regar por turnos y medir lo que crecen cada semana.", "Cosechar y explicar qué parte de la planta comemos."],
    producto: "Un huerto de clase y un diario con medidas y dibujos.",
    evaluacion: ["Explica la fotosíntesis de forma sencilla.", "Clasifica árboles, arbustos y hierbas.", "Conoce cómo viajan las semillas.", "Cuida responsablemente las plantas."],
  },
});
