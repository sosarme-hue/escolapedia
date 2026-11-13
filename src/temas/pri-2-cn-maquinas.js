// Ciencias de la Naturaleza 2º de Primaria: máquinas sencillas. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, balancin, rampa, polea, cubo, carretilla, engranaje, tornillo, tijeras, caja, rueda, bici, chip, flechaR, tick, equis, suelo } = require("./_pri2b");

const abrelatas = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-40" y="-6" width="60" height="12" rx="6" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/><circle cx="24" cy="0" r="10" fill="#6b7385" stroke="var(--ink)" stroke-width="1.5"/></g>`;
const cuchillo = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-36" y="-5" width="26" height="10" rx="3" fill="#8a5a2b"/><path d="M-10 -6 H30 L36 0 L30 4 H-10Z" fill="#cfd5df" stroke="var(--ink)" stroke-width="1.2"/></g>`;
const lavadora = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-26" y="-60" width="52" height="60" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cy="-26" r="16" fill="var(--water)" opacity=".5" stroke="var(--ink)" stroke-width="2"/><rect x="-20" y="-56" width="20" height="6" rx="2" fill="var(--muted)"/></g>`;
const enchufe = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-12" y="-12" width="24" height="24" rx="5" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="-5" cy="0" r="2.5" fill="var(--ink)"/><circle cx="5" cy="0" r="2.5" fill="var(--ink)"/></g>`;
const rayo = (x, y) => `<path transform="translate(${x} ${y})" d="M4 -16 L-8 2 H0 L-4 16 L8 -2 H0Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1"/>`;

module.exports = tema({
  materia: "Ciencias de la Naturaleza",
  titulo: "Máquinas sencillas",
  objetivos: ["Saber qué es una máquina y para qué sirve", "Reconocer máquinas simples: palanca, rueda, polea, plano inclinado y cuña", "Usar las máquinas con seguridad"],
  claves: ["máquina", "palanca", "rueda", "polea", "rampa", "cuña", "esfuerzo"],
  pregunta: {
    texto: "Tienes que subir una caja muy pesada a un camión. ¿Es más fácil levantarla en brazos o empujarla por una rampa?",
    respuesta: "Es más fácil con la <mark>rampa</mark>. La rampa es una <b>máquina simple</b>: hace que el trabajo cueste menos esfuerzo, aunque el camino sea un poco más largo.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una máquina?</h3><p>Una <mark>máquina</mark> es un objeto que inventaron las personas para <b>hacer el trabajo más fácil</b> y con menos esfuerzo.</p><p>Hay máquinas muy sencillas, con pocas piezas, como unas tijeras o un balancín. Son las <b>máquinas simples</b>. Y hay máquinas <b>complejas</b>, con muchas piezas, como la bicicleta o la lavadora.</p>`,
      svg: svg("Unas tijeras son una máquina simple; una bicicleta es una máquina compleja", `${suelo(146)}${tijeras(64, 110, 1.6)}${bici(186, 146, 1.4)}${chip(64, 166, 80, "simple", "var(--leaf)", 13)}${chip(186, 166, 90, "compleja", "var(--pen)", 13)}${big(130, 30, "Máquinas", "var(--pen)", 18)}`),
    },
    {
      html: `<h3>La palanca</h3><p>Una <mark>palanca</mark> es una barra que se apoya en un punto y gira. Sirve para <b>levantar</b> cosas pesadas con poca fuerza.</p><p>El <b>balancín</b> del parque es una palanca. Si empujas hacia abajo en un lado, el otro sube. Otras palancas son el abrebotellas, las tijeras o una cuchara para abrir una lata de pintura.</p>`,
      svg: svg("Un balancín con un niño abajo y una niña arriba", `${suelo(152)}${balancin(130, 152, -14, 200)}${nino(48, 154, { c: "var(--red)", pose: "sentado", s: 0.8 })}${nino(214, 104, { c: "var(--pen)", pose: "sentado", s: 0.8, nina: true })}${flechaR(48, 60, 48, 90, "var(--red)")}${flechaR(214, 46, 214, 20, "var(--leaf)")}${txt(130, 172, "punto de apoyo", "var(--muted)", 12)}`),
      video: V("XndsWEBRebM"),
    },
    {
      html: `<h3>La rueda</h3><p>La <mark>rueda</mark> es uno de los inventos más importantes de la historia. Sirve para <b>mover cosas rodando</b> en vez de arrastrarlas.</p><p>Las ruedas giran sobre un palo llamado <b>eje</b>. Las usan los coches, las bicis, los carritos de la compra, los patines y las maletas. ¡Arrastrar una maleta sin ruedas cuesta mucho más!</p>`,
      svg: svg("Una caja arrastrada cuesta mucho; una carretilla con rueda cuesta poco", `${suelo(146)}${caja(70, 146, 1.2)}${nino(26, 146, { c: "var(--red)", pose: "brazos" })}<path d="M58 140 h-8 m8 -8 h-8" stroke="var(--muted)" stroke-width="2"/>${equis(70, 70)}${carretilla(190, 146, 1.1)}${nino(146, 146, { c: "var(--leaf)", pose: "brazos" })}${tick(190, 70)}${txt(190, 166, "rueda", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>La polea</h3><p>Una <mark>polea</mark> es una rueda con una cuerda por encima. Sirve para <b>subir cosas pesadas</b> tirando hacia abajo, que es más cómodo.</p><p>Antes se usaba en los <b>pozos</b> para sacar el cubo de agua. Hoy la ves en las grúas de la obra, en las persianas y en el mástil de la bandera.</p>`,
      svg: svg("Una polea sube un cubo mientras un niño tira de la cuerda", `${suelo(160)}${polea(110, 40, 100)}${cubo(123, 116, "var(--pen)")}${nino(97, 160, { c: "var(--red)", pose: "arriba" })}${flechaR(150, 110, 150, 70, "var(--leaf)")}${flechaR(70, 70, 70, 110, "var(--red)")}${txt(196, 94, "sube", "var(--leaf)", 14)}${txt(40, 60, "tiro", "var(--red)", 14)}`),
    },
    {
      html: `<h3>El plano inclinado</h3><p>El <mark>plano inclinado</mark> es una <b>rampa</b>. Sirve para subir cosas pesadas empujándolas, sin tener que levantarlas.</p><p>Las rampas ayudan a las sillas de ruedas y a los carritos de bebé a subir aceras. Los camiones de mudanza usan rampas. ¡Y un tobogán también es un plano inclinado!</p>`,
      svg: svg("Un niño empuja una caja por una rampa", `${suelo(150)}${rampa(60, 150, 160, 70)}<g transform="translate(156 108) rotate(-23.6)"><rect x="-16" y="-28" width="32" height="28" fill="#c9a46a" stroke="var(--ink)" stroke-width="1.5"/></g>${nino(104, 131, { c: "var(--pen)", pose: "brazos", s: 0.9 })}${txt(196, 60, "rampa", "#8a5a2b", 15)}`),
    },
    {
      html: `<h3>La cuña y el tornillo</h3><p>La <mark>cuña</mark> es una pieza acabada en <b>punta o filo</b> que sirve para <b>cortar o separar</b>. El cuchillo, el hacha y los dientes son cuñas.</p><p>El <mark>tornillo</mark> es como una rampa enrollada. Al girarlo, entra en la madera y sujeta las piezas con fuerza. ¡Las tapas de los botes también tienen rosca!</p>`,
      svg: svg("Un cuchillo corta un pan y un tornillo con su rosca", `${cuchillo(70, 70)}<path d="M40 110 Q40 90 70 88 Q100 90 100 110Z" fill="#d9a25f" stroke="#8a5a2b" stroke-width="1.5"/>${tornillo(190, 120, 2)}${txt(70, 150, "cuña: corta", "var(--red)", 14)}${txt(190, 150, "tornillo", "var(--pen)", 14)}`),
    },
    {
      html: `<h3>Máquinas complejas</h3><p>Las <mark>máquinas complejas</mark> juntan muchas máquinas simples. La <b>bicicleta</b> tiene ruedas, palancas (los frenos y los pedales) y engranajes.</p><p>Muchas máquinas complejas necesitan <b>energía</b> para funcionar: electricidad, como la lavadora, o gasolina, como algunos coches. Otras funcionan con la fuerza de nuestro cuerpo, como la bici.</p>`,
      svg: svg("Una lavadora enchufada y unos engranajes", `${suelo(150)}${lavadora(70, 150, 1.4)}${enchufe(130, 110)}<path d="M106 120 q10 -2 12 -10" stroke="var(--ink)" stroke-width="2" fill="none"/>${rayo(130, 80)}${engranaje(190, 86, 20, "var(--muted)")}${engranaje(222, 120, 14, "var(--pen)")}${txt(206, 166, "engranajes", "var(--muted)", 13)}`),
    },
    {
      html: `<h3>Con seguridad</h3><p>Las máquinas nos ayudan, pero hay que <mark>usarlas con cuidado</mark>.</p><p>No toques los <b>enchufes</b> ni los cables. Usa las tijeras de punta redonda y nunca corras con ellas. No metas los dedos en las ruedas ni en los engranajes. Y si una máquina es peligrosa, la usa una persona mayor.</p>`,
      svg: svg("No tocar el enchufe; tijeras de punta redonda", `${enchufe(70, 80)}<path d="M50 104 q8 -10 14 -14" stroke="#f3c9a1" stroke-width="8" stroke-linecap="round"/>${equis(110, 70)}${tijeras(190, 96, 1.4)}${tick(234, 70)}${txt(70, 150, "¡enchufes no!", "var(--red)", 14)}${txt(190, 150, "punta redonda", "var(--ok)", 14)}`),
    },
    {
      html: `<h3>Juego: ¿qué máquina es?</h3><p>Une cada objeto con su máquina simple. Las <b>tijeras</b>: <mark>palanca</mark> (y cuña). El <b>tobogán</b>: <mark>plano inclinado</mark>.</p><p>El <b>carrito de la compra</b>: <mark>rueda</mark>. La <b>persiana</b>: <mark>polea</mark>. El <b>hacha</b>: <mark>cuña</mark>. ¿Encuentras otra máquina simple en tu casa?</p>`,
      svg: svg("Cinco máquinas simples: palanca, rueda, polea, rampa y cuña", `${["palanca", "rueda", "polea", "rampa", "cuña"].map((t, i) => chip(30 + i * 50, 150, 48, t, "var(--pen)", 10)).join("")}${balancin(30, 120, -12, 50)}${rueda(80, 106, 14)}${polea(130, 82, 30)}${rampa(160, 124, 40, 26)}<path d="M216 124 L244 124 L230 90Z" fill="#9aa3b5" stroke="var(--ink)"/>${big(130, 36, "¿Cuál es cuál?", "var(--ink)", 18)}`),
    },
  ],
  figura: {
    titulo: "Las máquinas simples",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Palanca, rueda, polea, plano inclinado y cuña">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${balancin(70, 170, -12, 110)}
      ${rueda(190, 140, 34)}<path d="M190 140 h0" stroke="var(--ink)"/>
      ${polea(320, 70, 90)}${cubo(333, 156, "var(--pen)")}
      ${rampa(400, 170, 110, 70)}
      <path d="M545 170 L605 170 L575 90Z" fill="#9aa3b5" stroke="var(--ink)" stroke-width="2"/>
      ${[["Palanca", 70], ["Rueda", 190], ["Polea", 320], ["Rampa", 455], ["Cuña", 575]].map(([t, x]) => rot(x, 220, t, { size: 21, color: "var(--pen)", w: 800 })).join("")}
      ${[["levanta", 70], ["rueda", 190], ["sube", 320], ["empuja", 455], ["corta", 575]].map(([t, x]) => rot(x, 244, t, { size: 14, color: "var(--muted)" })).join("")}
    </svg>`,
  },
  video: V("ixH0OqAPanY", "máquinas simples para niños"),
  ejemplos: [
    { enunciado: "¿Qué máquina simple es el tobogán?", pasos: ["El tobogán es una superficie en cuesta.", "Una superficie en cuesta es una rampa.", "La rampa se llama plano inclinado."], resultado: "un plano inclinado." },
    { enunciado: "¿Por qué el carrito de la compra tiene ruedas?", pasos: ["El carrito lleva mucho peso.", "Arrastrarlo por el suelo costaría mucho.", "Las ruedas lo hacen rodar con poco esfuerzo."], resultado: "para moverlo con menos esfuerzo." },
    { enunciado: "¿La bicicleta es una máquina simple o compleja?", pasos: ["Tiene ruedas.", "Tiene palancas en los frenos y en los pedales.", "Tiene engranajes y cadena: muchas piezas."], resultado: "es una máquina compleja." },
  ],
  errores: [
    "Pensar que solo son máquinas las que llevan motor: unas tijeras también son una máquina.",
    "Creer que la máquina hace el trabajo sola: las simples necesitan nuestra fuerza.",
    "Pensar que la rampa acorta el camino: es más larga, pero cuesta menos esfuerzo.",
    "Jugar con enchufes o engranajes: puede ser muy peligroso.",
  ],
  ejercicios: [
    { q: "¿Para qué sirven las máquinas?", sol: "Para hacer el trabajo más fácil y con menos esfuerzo." },
    { q: "Escribe cinco máquinas simples.", sol: "Palanca, rueda, polea, plano inclinado y cuña." },
    { q: "¿Qué máquina simple es el balancín?", sol: "Una palanca." },
    { q: "Di tres objetos con ruedas.", sol: "Por ejemplo: bicicleta, carrito y maleta." },
    { q: "¿Para qué servía la polea en los pozos?", sol: "Para subir el cubo con agua." },
    { q: "¿Qué es un plano inclinado?", sol: "Una rampa." },
    { q: "Di dos cuñas que uses en casa.", sol: "Por ejemplo: el cuchillo y el tenedor (también el hacha)." },
    { q: "¿Por qué la lavadora es una máquina compleja?", sol: "Porque tiene muchas piezas y necesita electricidad." },
    { q: "Escribe dos normas de seguridad con las máquinas.", sol: "No tocar enchufes y no correr con tijeras." },
    { q: "Busca en casa una máquina simple y dibújala.", sol: "Respuesta libre: abrebotellas, pinzas, tijeras, rampa…" },
  ],
  quiz: [
    { q: "Las máquinas sirven para…", o: ["trabajar con menos esfuerzo", "ensuciar", "hacer ruido"], a: 0, e: "Facilitan el trabajo." },
    { q: "El balancín es…", o: ["una palanca", "una polea", "una cuña"], a: 0, e: "Gira sobre un punto." },
    { q: "Las ruedas giran sobre un…", o: ["eje", "clavo", "botón"], a: 0, e: "El eje es el palo del centro." },
    { q: "La polea sirve para…", o: ["subir cosas", "cortar", "pegar"], a: 0, e: "Tirando de una cuerda." },
    { q: "Una rampa es…", o: ["un plano inclinado", "una rueda", "un tornillo"], a: 0, e: "Superficie en cuesta." },
    { q: "El cuchillo es una…", o: ["cuña", "polea", "rueda"], a: 0, e: "Tiene filo para cortar." },
    { q: "La bicicleta es una máquina…", o: ["simple", "compleja", "invisible"], a: 1, e: "Tiene muchas piezas." },
    { q: "La lavadora funciona con…", o: ["electricidad", "agua de lluvia", "la luna"], a: 0, e: "Se enchufa." },
    { q: "El tobogán es…", o: ["un plano inclinado", "una palanca", "una polea"], a: 0, e: "Una rampa para deslizarse." },
    { q: "Con las tijeras debemos…", o: ["no correr", "correr", "jugar a espadas"], a: 0, e: "Pueden hacer daño." },
  ],
  examen: [
    { q: "¿Qué máquina simple usa una cuerda y una rueda?", o: ["La polea", "La cuña", "La rampa"], a: 0, e: "Como la del pozo." },
    { q: "¿Cuál es una máquina compleja?", o: ["El coche", "El balancín", "Un cuchillo"], a: 0, e: "Tiene muchas piezas." },
    { q: "Para subir una silla de ruedas a la acera usamos…", o: ["una rampa", "una cuña", "unas tijeras"], a: 0, e: "El plano inclinado." },
    { q: "¿Qué NO debemos hacer?", o: ["Tocar enchufes", "Usar tijeras de punta redonda", "Pedir ayuda a un mayor"], a: 0, e: "Es peligroso." },
  ],
  feynman: ["Qué es una máquina y para qué sirve", "Las cinco máquinas simples con un ejemplo", "Diferencia entre máquina simple y compleja"],
  mapaT: ["LAS MÁQUINAS", [
    ["Simples", "pocas piezas", "var(--leaf)"],
    ["Ejemplos", "palanca · rueda · polea", "var(--pen)"],
    ["Y también", "rampa · cuña · tornillo", "var(--sun)"],
    ["Complejas", "bici · lavadora · coche", "var(--red)"],
  ]],
  tarjetas: [
    ["¿Qué es una máquina?", "Un invento para trabajar con menos esfuerzo"],
    ["Ejemplo de palanca", "El balancín"],
    ["¿Sobre qué gira una rueda?", "Sobre un eje"],
    ["¿Para qué sirve la polea?", "Para subir cosas tirando de una cuerda"],
    ["Otro nombre de la rampa", "Plano inclinado"],
    ["Ejemplo de cuña", "El cuchillo"],
    ["Máquina compleja", "La bicicleta"],
    ["Una norma de seguridad", "No tocar los enchufes"],
  ],
  familias: [
    "Buscad juntos máquinas simples en la cocina: abrebotellas, pinzas, cuchillo, tijeras.",
    "En el parque, probad el balancín: ¿qué pasa si el más pesado se acerca al centro?",
    "Construid una rampa con un libro y comprobad qué cuesta menos: levantar o empujar un coche de juguete.",
    "Repasad las normas de seguridad con los enchufes y los electrodomésticos de casa.",
  ],
  saberes: "Tecnología: máquinas simples (palanca, rueda, polea, plano inclinado y cuña), máquinas complejas y uso seguro de objetos y aparatos",
  ideas: ["Construir una polea con un carrete de hilo y un cubo pequeño.", "Rampas con distintos ángulos y coches de juguete para medir distancias.", "Caza de máquinas simples por el colegio con fotos."],
});
