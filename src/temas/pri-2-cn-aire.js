// Ciencias de la Naturaleza 2º de Primaria: el aire. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, globo, viento, molino, nube, sol, arbol, nino, barca, mar, chip, flechaR, tick, equis, planta, tierraPlaneta, suelo, hierba, coche, edificio } = require("./_pri2b");

const cometa = (x, y, c = "var(--red)") => `<g transform="translate(${x} ${y})"><path d="M0 -26 L18 0 L0 30 L-18 0Z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -26 V30 M-18 0 H18" stroke="var(--ink)" stroke-width="1"/><path d="M0 30 q-8 12 0 22 q8 10 0 20" stroke="var(--ink)" stroke-width="1.5" fill="none"/></g>`;
const molinillo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V50" stroke="#8a5a2b" stroke-width="3"/>${["var(--red)", "var(--sun)", "var(--pen)", "var(--leaf)"].map((c, i) => `<path transform="rotate(${i * 90})" d="M0 0 L0 -22 L16 -6Z" fill="${c}"/>`).join("")}<circle r="3" fill="var(--ink)"/></g>`;
const humo = (x, y) => `<g fill="#6b7385" opacity=".6"><circle cx="${x}" cy="${y}" r="8"/><circle cx="${x + 8}" cy="${y - 12}" r="10"/><circle cx="${x + 2}" cy="${y - 26}" r="12"/></g>`;

module.exports = tema({
  materia: "Ciencias de la Naturaleza",
  titulo: "El aire",
  objetivos: ["Saber que el aire existe aunque no se vea", "Conocer para qué necesitan el aire los seres vivos", "Entender qué es el viento y cómo cuidar el aire limpio"],
  claves: ["aire", "oxígeno", "respirar", "viento", "contaminación", "atmósfera"],
  pregunta: {
    texto: "No lo ves, no lo hueles y no lo tocas con la mano… pero inflas un globo y se pone gordo. ¿Qué hay dentro?",
    respuesta: "Dentro del globo hay <mark>aire</mark>. El aire es <b>invisible</b>, pero ocupa sitio. Por eso el globo se hincha cuando soplas.",
  },
  bloques: [
    {
      html: `<h3>El aire está en todas partes</h3><p>Estamos rodeados de <mark>aire</mark>. Está en la calle, en clase, en tu casa y hasta dentro de una botella vacía.</p><p>El aire es <b>invisible</b>: no tiene color. Normalmente <b>no huele</b> ni sabe a nada. Alrededor de la Tierra hay una capa enorme de aire que se llama <b>atmósfera</b>.</p>`,
      svg: svg("La Tierra rodeada por la capa de aire, la atmósfera", `<circle cx="96" cy="96" r="62" fill="var(--water)" opacity=".18"/><circle cx="96" cy="96" r="62" fill="none" stroke="var(--water)" stroke-width="2" stroke-dasharray="6 5"/>${tierraPlaneta(96, 96, 40)}${flechaR(196, 60, 150, 72, "var(--muted)")}${txt(206, 50, "atmósfera", "var(--water)", 14)}${txt(206, 120, "invisible", "var(--muted)", 14)}${txt(206, 140, "sin olor", "var(--muted)", 14)}`),
    },
    {
      html: `<h3>¿Cómo sabemos que hay aire?</h3><p>Aunque no lo vemos, podemos <mark>notar el aire</mark>. Si soplas en tu mano, lo sientes. Si inflas un globo, el aire lo llena.</p><p>Mete un vaso boca abajo en un barreño con agua: ¡el agua no entra hasta arriba! Es porque el vaso está lleno de aire. El aire <b>ocupa sitio</b>.</p>`,
      svg: svg("Un niño infla un globo y un vaso boca abajo en el agua guarda aire", `${suelo(150)}${nino(52, 150, { c: "var(--pen)", pose: "canta" })}${globo(90, 72, "var(--red)", 18)}<g><rect x="140" y="90" width="100" height="56" rx="6" fill="var(--water)" opacity=".45"/><path d="M168 72 H212 V118 H168Z" fill="var(--card)" fill-opacity=".6" stroke="var(--ink)" stroke-width="2"/><rect x="168" y="108" width="44" height="10" fill="var(--water)" opacity=".7"/></g>${txt(190, 64, "aire", "var(--muted)", 14)}`),
    },
    {
      html: `<h3>Respiramos aire</h3><p>Todos los seres vivos necesitan <mark>aire para vivir</mark>. Del aire tomamos el <b>oxígeno</b>.</p><p>Las personas y muchos animales respiramos por la <b>nariz</b> y la boca. El aire llega a los <b>pulmones</b>. Los peces toman el oxígeno que hay en el agua. Y las plantas respiran por sus hojas.</p>`,
      svg: svg("Un niño respira; el aire entra por la nariz hasta los pulmones", `<g transform="translate(100 110)"><circle cy="-56" r="20" fill="#f3c9a1"/><circle cx="-6" cy="-58" r="2" fill="#1b2235"/><circle cx="6" cy="-58" r="2" fill="#1b2235"/><path d="M-30 -32 H30 V40 H-30Z" fill="var(--pen)" opacity=".25"/><path d="M-4 -26 q-24 0 -22 34 q2 20 18 14 Z" fill="#f08a9a"/><path d="M4 -26 q24 0 22 34 q-2 20 -18 14 Z" fill="#f08a9a"/><path d="M0 -36 V-22" stroke="#d76476" stroke-width="4"/></g>${flechaR(36, 40, 92, 52, "var(--water)")}${txt(40, 30, "aire", "var(--water)", 14)}${txt(206, 66, "pulmones", "var(--red)", 15)}${flechaR(196, 76, 134, 102, "var(--red)")}`),
    },
    {
      html: `<h3>El viento</h3><p>El <mark>viento</mark> es <b>aire en movimiento</b>. A veces es suave, una brisa. Otras veces es muy fuerte, un vendaval.</p><p>No vemos el viento, pero vemos lo que hace: <b>mueve</b> las hojas de los árboles, la ropa tendida, las nubes y las cometas. Y lo notamos en la cara.</p>`,
      svg: svg("El viento mueve un árbol, una cometa y las nubes", `${hierba(150)}${viento(20, 60)}${nube(200, 36, 1)}${cometa(176, 84)}<path d="M176 114 Q160 130 130 140" stroke="var(--ink)" stroke-width="1" fill="none"/>${nino(124, 150, { c: "var(--leaf)", pose: "arriba", s: 0.8 })}<g transform="translate(56 150) rotate(-10)"><rect x="-5" y="-30" width="10" height="30" fill="#8a5a2b"/><ellipse cx="10" cy="-46" rx="26" ry="18" fill="var(--leaf)"/></g>`),
      video: V("akjkjikwVBk"),
    },
    {
      html: `<h3>¿Para qué sirve el viento?</h3><p>Las personas usamos la <mark>fuerza del viento</mark> desde hace muchísimo tiempo.</p><p>El viento empuja los <b>barcos de vela</b>. Mueve los <b>molinos</b>, que antes molían el trigo. Hoy los <b>aerogeneradores</b> (molinos gigantes) fabrican electricidad sin ensuciar el aire. ¡Y el viento seca la ropa tendida!</p>`,
      svg: svg("Un velero en el mar y dos aerogeneradores", `${mar(122, 46)}${barca(64, 124, "var(--red)")}${viento(14, 70)}${molino(170, 122, 1)}${molino(222, 122, 0.8)}${txt(64, 34, "velero", "var(--pen)", 14)}${txt(196, 34, "molinos", "var(--pen)", 14)}`),
    },
    {
      html: `<h3>El aire empuja y sostiene</h3><p>El aire tiene <mark>fuerza</mark>. Si corres con un paraguas abierto, notarás que el aire lo empuja hacia atrás.</p><p>Gracias al aire, las <b>aves</b> y los <b>aviones</b> pueden volar. Los paracaídas caen despacito porque el aire los frena. Prueba a soltar una hoja de papel plana y otra hecha una bola: ¿cuál cae antes?</p>`,
      svg: svg("Un paracaídas cae despacio; una bola de papel cae rápido", `<path d="M40 50 a40 30 0 0 1 80 0z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M40 50 L76 100 M120 50 L84 100 M80 50 V100" stroke="var(--ink)" stroke-width="1"/><rect x="72" y="100" width="16" height="16" rx="3" fill="var(--pen)"/>${txt(80, 140, "despacio", "var(--leaf)", 14)}<circle cx="196" cy="70" r="12" fill="#fff" stroke="var(--muted)" stroke-width="2"/><path d="M196 88 V128" stroke="var(--red)" stroke-width="3" stroke-dasharray="5 4"/>${flechaR(196, 120, 196, 136, "var(--red)")}${txt(196, 158, "rápido", "var(--red)", 14)}`),
    },
    {
      html: `<h3>Aire limpio y aire sucio</h3><p>El aire limpio es muy importante para la salud. Pero a veces el aire se <mark>ensucia</mark>: es la <b>contaminación</b>.</p><p>Lo ensucian el humo de los <b>coches</b>, de las fábricas y de las calefacciones, y los incendios. El aire sucio hace toser y daña a las plantas y a los animales.</p>`,
      svg: svg("Un coche y una fábrica echan humo; un bosque con aire limpio", `${suelo(150)}${coche(50, 150, "var(--muted)", 1.1)}${humo(14, 136)}<g><rect x="90" y="90" width="50" height="60" fill="#9aa3b5" stroke="var(--ink)"/><rect x="118" y="60" width="12" height="30" fill="#6b7385"/></g>${humo(120, 52)}${arbol(196, 150, 1.1)}${arbol(232, 150, 0.9)}${txt(54, 40, "aire sucio", "var(--red)", 14)}${txt(212, 30, "aire limpio", "var(--leaf)", 14)}`),
    },
    {
      html: `<h3>Cuidamos el aire</h3><p>Todos podemos ayudar a tener un <mark>aire más limpio</mark>.</p><p>Ir andando o en <b>bici</b> al cole cuando se pueda. Usar el autobús en vez del coche. <b>Plantar árboles</b>, que limpian el aire. Apagar las luces que no usamos. Y nunca hacer fuego en el campo.</p>`,
      svg: svg("Una niña va en bici y un niño planta un árbol", `${hierba(150)}<g transform="translate(70 150)"><circle cx="-20" cy="-14" r="13" fill="none" stroke="#1b2235" stroke-width="3"/><circle cx="22" cy="-14" r="13" fill="none" stroke="#1b2235" stroke-width="3"/><path d="M-20 -14 L0 -14 L12 -36 L22 -14 M0 -14 L-6 -38" stroke="var(--leaf)" stroke-width="3" fill="none"/></g>${nino(66, 120, { nina: true, c: "var(--red)", pose: "sentado", s: 0.8 })}${nino(170, 150, { c: "var(--pen)", pose: "agacha" })}${planta(206, 150, 1, false)}${tick(130, 40)}`),
    },
    {
      html: `<h3>Juego: el molinillo de papel</h3><p>Haz un <mark>molinillo</mark> con un cuadrado de papel, unas tijeras y un palito. Pide ayuda a un mayor.</p><p>Sopla flojito: el molinillo gira despacio. Sopla <b>fuerte</b>: ¡gira muy rápido! Sal a la calle un día de viento: ¿hacia dónde gira? Así descubres de dónde viene el viento.</p>`,
      svg: svg("Un molinillo de papel de colores girando con el viento", `${molinillo(130, 70, 1.6)}${viento(24, 50)}${txt(130, 166, "¡Sopla y gira!", "var(--pen)", 16)}`),
    },
  ],
  figura: {
    titulo: "El aire: invisible pero muy importante",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="El aire ocupa sitio, lo respiramos, el viento es aire que se mueve y debemos cuidarlo">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${globo(80, 100, "var(--red)", 30)}
      <g transform="translate(240 120)"><path d="M-6 -50 q-44 0 -40 60 q4 34 34 24 Z" fill="#f08a9a"/><path d="M6 -50 q44 0 40 60 q-4 34 -34 24 Z" fill="#f08a9a"/></g>
      ${molino(400, 170, 1.6)}
      ${arbol(560, 170, 2)}
      ${[["Ocupa sitio", 80], ["Respiramos", 240], ["Viento", 400], ["Aire limpio", 560]].map(([t, x]) => rot(x, 222, t, { size: 20, color: "var(--pen)", w: 800 })).join("")}
    </svg>`,
  },
  video: V("tLHk42Gp7K4", "el aire para niños"),
  ejemplos: [
    { enunciado: "¿Por qué una botella «vacía» no está vacía de verdad?", pasos: ["La botella no tiene agua ni zumo.", "Pero el aire entra en todos los huecos.", "La botella está llena de aire, aunque no se vea."], resultado: "está llena de aire." },
    { enunciado: "Las hojas del árbol se mueven. ¿Qué pasa?", pasos: ["Las hojas no se mueven solas.", "Algo invisible las empuja.", "Es el aire que se mueve: el viento."], resultado: "hace viento." },
    { enunciado: "¿Cómo puede ayudar tu familia a tener aire limpio?", pasos: ["El humo de los coches ensucia el aire.", "Andar o ir en bici no echa humo.", "Plantar árboles también ayuda."], resultado: "ir andando o en bici y plantar árboles." },
  ],
  errores: [
    "Pensar que donde no hay nada no hay aire: el aire está en todas partes.",
    "Creer que el viento es otra cosa distinta del aire: es aire que se mueve.",
    "Pensar que los peces no respiran: toman el oxígeno que hay en el agua.",
    "Creer que el humo desaparece: se queda en el aire y lo ensucia.",
  ],
  ejercicios: [
    { q: "¿De qué color es el aire?", sol: "No tiene color: es invisible." },
    { q: "Di dos formas de notar que hay aire.", sol: "Soplar en la mano e inflar un globo." },
    { q: "¿Qué tomamos del aire al respirar?", sol: "El oxígeno." },
    { q: "¿Qué es el viento?", sol: "Aire en movimiento." },
    { q: "Di tres cosas que mueve el viento.", sol: "Las hojas, las nubes y las cometas (también los barcos de vela)." },
    { q: "¿Para qué sirven los aerogeneradores?", sol: "Para fabricar electricidad con el viento." },
    { q: "Di dos cosas que ensucian el aire.", sol: "El humo de los coches y el de las fábricas." },
    { q: "Escribe dos formas de cuidar el aire.", sol: "Ir andando o en bici y plantar árboles." },
    { q: "Suelta un papel plano y otro arrugado. ¿Cuál cae antes?", sol: "El arrugado, porque el aire frena más al papel plano." },
    { q: "¿Cómo se llama la capa de aire que rodea la Tierra?", sol: "La atmósfera." },
  ],
  quiz: [
    { q: "El aire es…", o: ["azul", "invisible", "rojo"], a: 1, e: "No tiene color." },
    { q: "Del aire tomamos…", o: ["el oxígeno", "el agua", "la comida"], a: 0, e: "Lo necesitamos para vivir." },
    { q: "El viento es…", o: ["aire en movimiento", "agua", "luz"], a: 0, e: "Aire que se mueve." },
    { q: "Al respirar, el aire llega a…", o: ["los pulmones", "los pies", "el estómago"], a: 0, e: "Entra por la nariz." },
    { q: "Un globo se hincha porque…", o: ["el aire ocupa sitio", "tiene agua", "es mágico"], a: 0, e: "Lo llenamos de aire." },
    { q: "¿Qué ensucia el aire?", o: ["El humo", "Los árboles", "La lluvia"], a: 0, e: "Es la contaminación." },
    { q: "Los aerogeneradores fabrican…", o: ["electricidad", "pan", "nubes"], a: 0, e: "Con la fuerza del viento." },
    { q: "¿Qué limpia el aire?", o: ["Los árboles", "Los coches", "Las fábricas"], a: 0, e: "Las plantas fabrican oxígeno." },
    { q: "La capa de aire de la Tierra es…", o: ["la atmósfera", "el mar", "la montaña"], a: 0, e: "Rodea todo el planeta." },
    { q: "Los peces respiran…", o: ["el oxígeno del agua", "no respiran", "por la nariz"], a: 0, e: "Hay oxígeno en el agua." },
  ],
  examen: [
    { q: "¿Qué hay dentro de una botella «vacía»?", o: ["Aire", "Nada", "Agua"], a: 0, e: "El aire ocupa sitio." },
    { q: "¿Qué mueve los barcos de vela?", o: ["El viento", "La lluvia", "La luna"], a: 0, e: "El aire empuja la vela." },
    { q: "Para cuidar el aire, es mejor…", o: ["ir en bici", "quemar basura", "dejar el coche encendido"], a: 0, e: "La bici no echa humo." },
    { q: "¿Qué necesitan todos los seres vivos?", o: ["Aire", "Coches", "Juguetes"], a: 0, e: "Para respirar." },
  ],
  feynman: ["Cómo sabemos que hay aire aunque no se vea", "Por qué necesitamos el aire", "Qué es el viento y para qué lo usamos"],
  mapaT: ["EL AIRE", [
    ["Cómo es", "invisible · ocupa sitio", "var(--water)"],
    ["Respirar", "oxígeno · pulmones", "var(--red)"],
    ["Viento", "aire que se mueve", "var(--pen)"],
    ["Cuidarlo", "bici · árboles · sin humo", "var(--leaf)"],
  ]],
  tarjetas: [
    ["¿Cómo es el aire?", "Invisible y sin olor"],
    ["¿Qué tomamos del aire?", "Oxígeno"],
    ["¿Dónde va el aire al respirar?", "A los pulmones"],
    ["¿Qué es el viento?", "Aire en movimiento"],
    ["Algo que mueve el viento", "Una cometa o un velero"],
    ["¿Qué ensucia el aire?", "El humo"],
    ["¿Qué limpia el aire?", "Los árboles y las plantas"],
    ["Capa de aire de la Tierra", "La atmósfera"],
  ],
  familias: [
    "Haced juntos un molinillo de papel y probadlo un día de viento.",
    "Meted un vaso boca abajo en el lavabo lleno de agua y mirad cómo el aire no deja entrar el agua.",
    "Un día, id al cole andando o en bici y hablad de por qué ayuda al aire.",
    "Mirad la ropa tendida o los árboles y decid si hoy hay brisa o viento fuerte.",
  ],
  saberes: "Materia: el aire y sus propiedades, su importancia para los seres vivos, el viento y sus usos, y la contaminación atmosférica",
  ideas: ["Experimentos: vaso boca abajo en agua, globo en una botella, papel plano y arrugado.", "Construir una manga de viento con una bolsa y medir la dirección del viento en el patio.", "Debate sencillo: ¿cómo venimos al cole? y gráfica de la clase."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer la atmósfera, la capa de aire que rodea la Tierra", "Saber que el aire caliente sube", "Distinguir brisa, viento fuerte y huracán", "Descubrir animales y semillas que viajan con el aire"],
  lectura: { titulo: "La cometa de Nico", html: `<p>Nico y su abuela han construido una cometa con cañas, papel de colores y una cola larguísima de lazos.</p><p>El domingo suben a lo alto de una colina. Nico sujeta la cuerda y corre, pero la cometa cae al suelo una y otra vez.</p><p>—No hay viento —se queja Nico.</p><p>—Paciencia —dice la abuela—. Mira las hojas de los árboles.</p><p>Esperan un rato. De pronto, las hojas empiezan a moverse y la hierba se inclina. Nico siente el aire fresco en la cara.</p><p>—¡Ahora! —grita la abuela.</p><p>Nico corre contra el viento y suelta cuerda poco a poco. La cometa sube, sube, y se queda allí arriba bailando, sostenida por el aire.</p><p>—Abuela, ¿cómo puede volar si no tiene motor?</p><p>—El aire la empuja y la sostiene, igual que a los pájaros.</p><p>Esa tarde, la cometa de Nico es la más alta de toda la colina.</p>` },
  tras: {
    "El aire está en todas partes": [
      ["La atmósfera: una manta de aire", `<p>La Tierra está rodeada por una capa de aire muy grande. Se llama <mark>atmósfera</mark>.</p><p>La atmósfera es como una <b>manta</b> invisible que envuelve el planeta. Nos ayuda mucho:</p><ul><li>Tiene el aire que <b>respiramos</b>.</li><li>Nos <b>protege</b> de los rayos del sol más fuertes, como una sombrilla gigante.</li><li>Mantiene la Tierra <b>calentita</b>: sin ella, por la noche haría un frío terrible.</li><li>En ella se forman las <b>nubes</b>, la lluvia y el viento.</li></ul><p>Cuanto más subimos, menos aire hay. En lo alto de las montañas más altas cuesta respirar, y los alpinistas llevan botellas de oxígeno.</p><p>Fuera de la atmósfera, en el espacio, ya no hay aire. Por eso los astronautas necesitan trajes especiales.</p><p><b>Actividad</b>: dibuja la Tierra rodeada de su atmósfera, con nubes y un avión dentro.</p>`,
        H6.rueda("Atmósfera", "TIERRA", [["respirar", cAZ], ["protege", cVE], ["calor", cRO], ["nubes", cNA]]),
        ["OHpxyPURzdU", "La Eduteca - El aire y la atmósfera", "La Eduteca", 641316]],
    ],
    "¿Cómo sabemos que hay aire?": [
      ["El aire caliente sube", `<p>El aire puede estar <mark>caliente o frío</mark>, y no se comporta igual:</p><ul><li>El <b>aire caliente</b> pesa menos y <b>sube</b>.</li><li>El <b>aire frío</b> pesa más y <b>baja</b>.</li></ul><p>Lo podemos ver en muchas cosas:</p><ul><li>Los <b>globos aerostáticos</b> vuelan porque calientan el aire de dentro con un fuego. El aire caliente sube y se lleva el globo.</li><li>El <b>humo</b> de una chimenea sube porque está caliente.</li><li>En una habitación, el aire de arriba está más caliente que el de abajo, cerca del suelo.</li><li>Los <b>pájaros</b> grandes, como las águilas, suben sin mover las alas aprovechando el aire caliente.</li></ul><p>Cuando el aire caliente sube, deja un hueco que ocupa el aire frío. ¡Así se forma el <b>viento</b>!</p><p><b>Actividad</b>: con un adulto, cuelga una espiral de papel sobre un radiador y observa cómo gira.</p>`,
        H6.dos("Aire", ["CALIENTE", ["pesa menos", "sube", "globo"], cRO], ["FRÍO", ["pesa más", "baja", "suelo"], cAZ])],
    ],
    "El viento": [
      ["Brisa, vendaval y huracán", `<p>El viento puede soplar con <mark>distinta fuerza</mark>:</p><ul><li><b>Brisa</b>: viento suave. Mueve las hojas y nos refresca en verano. Es agradable.</li><li><b>Viento fuerte</b>: mueve las ramas y levanta polvo. Cuesta andar en contra.</li><li><b>Vendaval</b>: viento muy fuerte. Puede romper ramas y tirar cosas.</li><li><b>Huracán</b> o <b>tornado</b>: viento violentísimo que gira. Puede destruir casas. Son peligrosos.</li></ul><p>Para saber de dónde viene el viento usamos la <b>veleta</b>, y para medir su fuerza, el <b>anemómetro</b>, que tiene unas cazoletas que giran más rápido cuanto más fuerte sopla.</p><p>Cuando hay viento muy fuerte, debemos quedarnos en un lugar seguro y alejarnos de árboles y cornisas.</p><p><b>Actividad</b>: mira por la ventana y di si hoy hay calma, brisa o viento fuerte.</p>`,
        L6.filas("Fuerza", [["brisa", "suave", cVE], ["fuerte", "mueve ramas", cNA], ["vendaval", "rompe ramas", cMO], ["huracán", "¡peligro!", cRO]])],
    ],
    "El aire empuja y sostiene": [
      ["Viajeros del aire", `<p>Muchos seres vivos usan el aire para <mark>moverse</mark>:</p><ul><li>Las <b>aves</b> vuelan batiendo las alas. Algunas, como las cigüeñas, planean largas distancias.</li><li>Los <b>insectos</b> como mariposas, abejas y libélulas también vuelan.</li><li>Los <b>murciélagos</b> son los únicos mamíferos que vuelan de verdad.</li><li>Las <b>semillas</b> de algunas plantas viajan con el viento: el diente de león tiene una especie de paracaídas, y las semillas del arce giran como hélices.</li><li>El <b>polen</b> de muchas flores también se mueve con el aire.</li></ul><p>Las personas hemos copiado a la naturaleza para inventar <b>aviones</b>, <b>paracaídas</b>, <b>helicópteros</b> y <b>planeadores</b>.</p><p><b>Actividad</b>: sopla un diente de león y observa cómo vuelan sus semillas.</p>`,
        H6.flujo("Vuelan", ["aves|alas", "insectos|alas", "semillas|paracaídas", "avión|motor"], cAZ)],
    ],
  },
  final: [
    ["El tiempo atmosférico", `<p>El <mark>tiempo atmosférico</mark> es cómo está el aire en un momento: si hace frío o calor, si llueve, si hay nubes o viento.</p><p>Las personas que estudian el tiempo se llaman <b>meteorólogos</b>. Usan aparatos para medirlo:</p><ul><li>El <b>termómetro</b> mide la temperatura: si hace frío o calor.</li><li>El <b>pluviómetro</b> recoge la lluvia y mide cuánta ha caído.</li><li>La <b>veleta</b> señala de dónde viene el viento.</li><li>El <b>anemómetro</b> mide la fuerza del viento.</li></ul><p>Con estos datos y con fotos de satélites hacen el <b>pronóstico del tiempo</b>, que vemos en la televisión: soles, nubes, gotas y flechas de viento.</p><p>Saber qué tiempo hará nos ayuda a elegir la ropa, decidir si llevar paraguas o saber si podemos ir de excursión.</p><p><b>Actividad</b>: haz un calendario del tiempo y dibuja cada día un sol, una nube o lluvia.</p>`,
      L6.filas("Aparatos", [["termómetro", "temperatura", cRO], ["pluviómetro", "lluvia", cAZ], ["veleta", "dirección", cNA], ["anemómetro", "fuerza", cVE]])],
    ["Repaso: la cometa de Nico", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Al principio la cometa no vuela porque hay <b>calma</b>: no hay viento.</li><li>¿Cómo saben que llega el viento? Las <b>hojas se mueven</b> y la hierba se inclina: ¡el aire no se ve, pero vemos lo que hace!</li><li>Nico nota el aire fresco en la cara: lo siente con el <b>tacto</b>.</li><li>La cometa vuela porque el aire la <b>empuja y la sostiene</b>.</li><li>¿Qué viento sería mejor, brisa o huracán? Una <b>brisa</b> o viento moderado. ¡Con un huracán, la cometa se rompería!</li><li>Los pájaros vuelan igual: el aire los sostiene.</li></ul><p>Las cometas se inventaron en China hace miles de años. ¡Algunas eran enormes!</p><p><b>Actividad</b>: construye una cometa sencilla con una bolsa de plástico, dos palillos y una cuerda.</p>`,
      H6.dos("Cometa", ["SIN VIENTO", ["calma", "cae", "no vuela"], cMO], ["CON VIENTO", ["brisa", "sube", "¡vuela!"], cVE])],
  ],
  ejemplos: [
    ["¿Por qué sube un globo aerostático?", ["Calienta el aire de dentro.", "El aire caliente pesa menos."], "Porque el aire caliente sube."],
    ["¿Con qué medimos la fuerza del viento?", ["Busco el aparato de cazoletas."], "Con el anemómetro."],
  ],
  errores: ["Pensar que en el espacio hay aire.", "Creer que el aire frío sube."],
  ejercicios: [
    ["b", "¿Cómo se llama la capa de aire de la Tierra?", "Atmósfera."],
    ["b", "¿El aire caliente sube o baja?", "Sube."],
    ["b", "¿Qué es una brisa?", "Un viento suave."],
    ["b", "Di un animal que vuele.", "Pájaro, mariposa, murciélago…"],
    ["b", "¿Qué mide el termómetro?", "La temperatura."],
    ["m", "Di dos cosas que hace la atmósfera por nosotros.", "Nos da aire y nos protege del sol."],
    ["m", "¿Por qué sube el humo?", "Porque está caliente."],
    ["m", "¿Qué hacemos si hay viento muy fuerte?", "Quedarnos en un lugar seguro."],
    ["m", "¿Cómo viajan las semillas del diente de león?", "Con el viento, como paracaídas."],
    ["m", "¿Qué es el pronóstico del tiempo?", "Lo que dicen que hará."],
    ["a", "En la lectura, ¿cómo saben que llega el viento?", "Porque se mueven las hojas y la hierba."],
    ["a", "¿Por qué los astronautas llevan trajes especiales?", "Porque en el espacio no hay aire."],
    ["a", "Explica cómo se forma el viento.", "El aire caliente sube y el frío ocupa su lugar."],
    ["a", "¿Qué inventos copian a los animales que vuelan?", "Aviones, planeadores, paracaídas."],
  ],
  quiz: [
    ["La atmósfera es…", ["una capa de aire", "un mar", "una montaña"], "Atmósfera."],
    ["El aire caliente…", ["sube", "baja", "se queda quieto"], "Caliente."],
    ["El viento más peligroso es el…", ["huracán", "brisa", "calma"], "Fuerza."],
    ["El único mamífero que vuela es el…", ["murciélago", "pájaro", "gato"], "Viajeros."],
    ["La lluvia se mide con el…", ["pluviómetro", "termómetro", "anemómetro"], "Tiempo."],
  ],
  examen: [
    ["En la lectura, ¿quién ayuda a Nico con la cometa?", ["su abuela", "su padre", "su amigo"], "Lectura."],
    ["La cometa vuela porque el aire…", ["la empuja y la sostiene", "la calienta", "la moja"], "Repaso."],
  ],
  tarjetas: [
    ["Aire caliente", "Pesa menos y sube."],
    ["Atmósfera", "Capa de aire que protege la Tierra."],
  ],
  glosario: [
    ["Atmósfera", "Capa de aire que rodea la Tierra."],
    ["Oxígeno", "Parte del aire que necesitamos para respirar."],
    ["Brisa", "Viento suave."],
    ["Huracán", "Viento muy fuerte y peligroso."],
    ["Veleta", "Aparato que señala de dónde viene el viento."],
    ["Anemómetro", "Aparato que mide la fuerza del viento."],
    ["Pluviómetro", "Aparato que mide la lluvia."],
    ["Meteorólogo", "Persona que estudia el tiempo."],
    ["Globo aerostático", "Globo que vuela con aire caliente."],
    ["Planear", "Volar sin mover las alas."],
  ],
  situacion: {
    titulo: "Nuestra estación meteorológica",
    reto: "La clase construye una pequeña estación del tiempo y anota cada día cómo está el aire.",
    pasos: ["Fabricar una veleta y un pluviómetro con materiales reciclados.", "Anotar cada día la temperatura, el viento y la lluvia.", "Dibujar el tiempo en un calendario.", "Presentar el pronóstico de la clase como en la tele."],
    producto: "Una estación meteorológica y un calendario del tiempo.",
    evaluacion: ["Explica qué es la atmósfera.", "Sabe que el aire caliente sube.", "Clasifica vientos por su fuerza.", "Usa aparatos del tiempo."],
  },
});
