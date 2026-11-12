// Música 1º de Primaria: mi voz y las canciones.
const { mapa } = require("./_util");
const { svg, rot, big, nino, nota, corazon, suelo, bocadillo, tick, equis, PROF, FUENTES } = require("./_pri1-dib");

const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
const oso = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="-22" rx="22" ry="22" fill="#8a5a2b"/><circle cx="0" cy="-54" r="16" fill="#8a5a2b"/><circle cx="-12" cy="-66" r="6" fill="#8a5a2b"/><circle cx="12" cy="-66" r="6" fill="#8a5a2b"/><ellipse cx="0" cy="-50" rx="7" ry="5" fill="#c99a5b"/><circle cx="-5" cy="-58" r="2" fill="var(--ink)"/><circle cx="5" cy="-58" r="2" fill="var(--ink)"/></g>`;
const tarta = (x, y) => `<g><rect x="${x - 36}" y="${y - 30}" width="72" height="30" rx="4" fill="#f4a7c4"/><rect x="${x - 36}" y="${y - 18}" width="72" height="6" fill="var(--card)"/>${[-18, 0, 18].map((d) => `<rect x="${x + d - 2}" y="${y - 46}" width="4" height="16" fill="var(--water)"/><path d="M${x + d} ${y - 48} q-4 -6 0 -10 q4 4 0 10z" fill="var(--sun)"/>`).join("")}</g>`;
const ondasArriba = (x, y, c) => `<path d="M${x} ${y} q20 -30 40 -10 q20 20 40 -20 q20 -30 40 -6" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/>`;

module.exports = {
  materia: "Música",
  curso: "1-primaria",
  titulo: "Mi voz y las canciones",
  minutos: 20,
  objetivos: ["Descubrir la voz como instrumento", "Distinguir voces agudas y graves", "Cantar canciones en grupo cuidando la voz"],
  claves: ["voz", "cantar", "agudo", "grave", "canción", "coro", "respirar"],
  pregunta: {
    texto: "¿Cuál es el instrumento que llevas siempre contigo, aunque no lo veas?",
    respuesta: "¡Tu <mark>voz</mark>! Con ella hablas, ríes y cantas. Es el instrumento más antiguo del mundo.",
  },
  bloques: [
    {
      html: `<h3>Mi voz, mi instrumento</h3><p>La <mark>voz</mark> es un instrumento que llevamos dentro.</p><p>Sale de la <b>garganta</b>. Allí hay unas cuerdas pequeñitas que vibran cuando pasa el aire.</p><p>Con la voz podemos hablar, susurrar, reír, gritar y <b>cantar</b>. Cada persona tiene una voz distinta. ¡Por eso reconocemos a nuestros amigos sin verlos!</p><p>Vamos a aprender a usarla bien.</p>`,
      svg: svg("Un niño canta y de su boca salen notas musicales", `${nino(80, 150, { c: "var(--pen)", pose: "brazos", s: 1.4, boca: "abierta" })}${nota(140, 70, "var(--pen)")}${nota(176, 54, "var(--inf)")}${nota(214, 76, "var(--leaf)")}${suelo(150)}${rot(130, 172, "Mi voz es un instrumento", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>Hablar y cantar</h3><p>Al <b>hablar</b>, decimos las palabras de forma rápida y normal.</p><p>Al <mark>cantar</mark>, la voz sube y baja como en un tobogán. Alargamos algunos sonidos: «a la naaaa-naaa».</p><p>Prueba: di «buenos días» hablando. Ahora cántalo. ¿Notas la diferencia? Cantar es como hablar con música.</p><p>¡Todos podemos cantar!</p>`,
      svg: svg("Arriba una línea recta para hablar; abajo una línea que sube y baja para cantar", `${etq(40, 56, "hablo", "var(--muted)", 14)}<path d="M80 52 H230" stroke="var(--muted)" stroke-width="3" stroke-dasharray="8 6"/>${etq(40, 120, "canto", "var(--inf)", 14)}${ondasArriba(76, 128, "var(--inf)")}${nota(120, 104, "var(--inf)", false)}${nota(200, 98, "var(--inf)", false)}${rot(130, 168, "Al cantar, la voz sube y baja", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>Voces agudas y graves</h3><p>Hay voces <mark>agudas</mark>, finitas, como el pío de un pajarito.</p><p>Y hay voces <mark>graves</mark>, gordas, como el gruñido de un oso.</p><p>Los niños suelen tener la voz aguda. Muchos adultos la tienen más grave. Prueba a decir «hola» como un pajarito y luego como un oso.</p><p>¿Cómo es tu voz? ¿Y la de tu abuelo?</p>`,
      svg: svg("Un pajarito arriba con un sonido agudo y un oso abajo con un sonido grave", `<circle cx="196" cy="36" r="10" fill="var(--water)"/><path d="M205 34 l9 3 l-9 3z" fill="var(--sun)"/><circle cx="199" cy="33" r="1.8" fill="var(--ink)"/><path d="M188 36 q4 8 12 4" stroke="var(--card)" stroke-width="2" fill="none"/>${etq(190, 72, "pío, pío: agudo", "var(--water)", 13)}${oso(70, 150)}${etq(180, 140, "grrr: grave", "#8a5a2b", 14)}<path d="M130 50 L130 140" stroke="var(--line)" stroke-width="3"/><path d="M124 58 L130 48 L136 58" stroke="var(--line)" stroke-width="3" fill="none"/>${suelo(150)}${rot(130, 172, "Agudo arriba, grave abajo", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>Cómo cantar bien</h3><p>Para cantar bien, nos ponemos <mark>de pie</mark> con la espalda recta. Los hombros, relajados.</p><p>Cogemos aire por la nariz, llenando la <b>barriga</b>, como un globo.</p><p>Abrimos bien la boca y cantamos <b>sin gritar</b>. ¡Gritar no es cantar! Y escuchamos la música mientras cantamos.</p><p>Así la voz sale clara y bonita.</p>`,
      svg: svg("Una niña canta de pie con la espalda recta y la barriga llena de aire, con tres consejos", `${nino(70, 150, { c: "var(--inf)", nina: true, pose: "pie", s: 1.4, boca: "abierta" })}<ellipse cx="70" cy="110" rx="9" ry="11" fill="var(--water)" opacity=".35"/>${[["espalda recta", 50], ["aire en la barriga", 84], ["boca abierta", 118]].map(([t, y]) => `${tick(132, y)}${rot(150, y + 4, t, { size: 12, anchor: "start" })}`).join("")}${suelo(150)}${rot(130, 172, "Cantar sin gritar", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Calentar la voz</h3><p>Antes de correr calentamos los músculos. Antes de cantar, <mark>calentamos la voz</mark>.</p><p>Hacemos una <b>sirena</b>: «uuuuuu», de abajo arriba y de arriba abajo.</p><p>Hacemos «<b>mmmmm</b>» con la boca cerrada, como una abeja. Y un bostezo grande. ¡Así la voz se despierta!</p><p>Ya estamos listos para cantar.</p>`,
      svg: svg("Tres ejercicios de voz: sirena que sube y baja, una abeja que zumba y una boca que bosteza", `<path d="M20 110 Q60 30 100 110" stroke="var(--red)" stroke-width="4" fill="none" stroke-linecap="round"/>${etq(60, 130, "sirena", "var(--red)", 13)}<g transform="translate(140 80)"><ellipse rx="14" ry="10" fill="var(--sun)"/><path d="M-6 -10 v20 M2 -10 v20" stroke="var(--ink)" stroke-width="3"/><ellipse cx="-2" cy="-14" rx="8" ry="5" fill="var(--card)" stroke="var(--line)"/></g>${etq(140, 130, "mmmm", "#c48a00", 13)}<ellipse cx="214" cy="80" rx="20" ry="24" fill="#f3c9a1" stroke="var(--ink)" stroke-width="2"/><ellipse cx="214" cy="88" rx="9" ry="12" fill="var(--ink)"/>${etq(214, 130, "bostezo", "var(--muted)", 13)}${rot(130, 164, "Despertamos la voz", { color: "var(--pen)", size: 14 })}`),
    },
    {
      html: `<h3>Las canciones</h3><p>Una canción tiene <mark>letra</mark> y <mark>melodía</mark>. La letra son las palabras. La melodía es la música con la que las cantamos.</p><p>Hay canciones populares que se cantan desde hace muchos años. Por ejemplo: «<b>Los pollitos dicen</b>» o «El patio de mi casa».</p><p>También la ronda de las vocales. Primero aprendemos la letra y luego la cantamos con su melodía. ¿Cuál es tu canción favorita?</p>`,
      svg: svg("Un cancionero abierto con palabras a un lado y notas al otro", `<path d="M130 50 Q95 36 40 42 V136 Q95 130 130 144 Q165 130 220 136 V42 Q165 36 130 50z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M130 50 V144" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<path d="M56 ${66 + i * 18} H118" stroke="var(--line)" stroke-width="3"/>`).join("")}${nota(160, 100, "var(--pen)")}${nota(196, 88, "var(--inf)")}${etq(84, 164, "letra", "var(--pen)", 14)}${etq(178, 164, "melodía", "var(--inf)", 14)}`),
      video: { id: "CqTXFbnG0ag", titulo: "Ronda de las vocales", canal: "Mundo Canticuentos", vistas: 536266157 },
    },
    {
      html: `<h3>Cantar en grupo</h3><p>Cuando cantamos muchos juntos, formamos un <mark>coro</mark>.</p><p>En un coro, todos <b>empezamos</b> y <b>acabamos</b> a la vez. Nadie canta más fuerte que los demás.</p><p>Para eso, hay que <b>escuchar</b> a los compañeros mientras cantamos. Un coro suena como una sola voz grande. ¡Es precioso!</p><p>El director nos ayuda a ir juntos.</p>`,
      svg: svg("Un coro de cinco niños cantando", `${["var(--pen)", "var(--inf)", "var(--leaf)", "var(--red)", "var(--sun)"].map((c, i) => nino(40 + i * 45, i % 2 ? 120 : 150, { c, nina: i % 2 === 1, s: 0.75, boca: "abierta" })).join("")}${nota(130, 40, "var(--pen)")}${nota(160, 32, "var(--inf)")}${suelo(150)}${rot(130, 172, "El coro", { color: "var(--pen)", size: 15 })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Cantar nos alegra</h3><p>Cantamos en los <mark>cumpleaños</mark>, en las fiestas y en las excursiones.</p><p>Con canciones aprendemos cosas: los números, las letras o los días de la semana.</p><p>Cantar nos pone <b>contentos</b> y nos une. Para cuidar la voz, bebemos agua y no gritamos.</p><p>Si estamos roncos, descansamos la voz.</p>`,
      svg: svg("Una tarta de cumpleaños con velas, notas musicales y un corazón", `${tarta(130, 140)}${nota(60, 70, "var(--pen)")}${nota(200, 70, "var(--inf)")}${corazon(130, 54, 1.6)}${rot(130, 168, "¡Cumpleaños feliz!", { color: "var(--pen)", size: 15 })}`),
    },
    {
      html: `<h3>Juego: la canción escondida</h3><p>Uno <mark>tararea</mark> una canción con la boca cerrada: «mmm, mmm».</p><p>Los demás tienen que <b>adivinar</b> qué canción es.</p><p>Quien la adivina, la canta en voz alta con la letra. ¡Y todos se unen! Luego le toca a otro esconder una canción. ¿Cuántas sabes?</p><p>¡A cantar!</p>`,
      svg: svg("Una niña tararea con la boca cerrada y un niño piensa qué canción es", `${nino(70, 150, { c: "var(--inf)", nina: true, s: 1.1, boca: "cerrada" })}${bocadillo(80, 40, 110, "mmm, mmm…", 14)}${nino(190, 150, { c: "var(--pen)", s: 1.1 })}${big(222, 70, "?", "var(--red)", 40)}${suelo(150)}${rot(130, 172, "¿Qué canción es?", { color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Mi voz",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Un niño cantando en el centro y cuatro ideas: hablar y cantar, agudo y grave, cantar bien y cantar en coro">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${nino(320, 260, { c: "var(--pen)", pose: "brazos", s: 2.6, boca: "abierta" })}
      ${nota(400, 90, "var(--inf)")}${nota(440, 70, "var(--leaf)")}
      ${[["Hablar y cantar", "la voz sube y baja", 120, 70, "var(--inf)"], ["Agudo y grave", "pajarito · oso", 520, 160, "var(--water)"], ["Cantar bien", "de pie · sin gritar", 120, 200, "var(--leaf)"], ["En coro", "todos a la vez", 520, 250, "var(--red)"]].map(([t, d, x, y, c]) => `<rect x="${x - 100}" y="${y - 32}" width="200" height="58" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${rot(x, y - 6, t, { color: c, size: 17 })}${rot(x, y + 16, d, { size: 14 })}`).join("")}
    </svg>`,
  },
  video: { id: "uDzoToR32AQ", titulo: "Clase de canto para niños: sonidos saludables", canal: "Dra. Voz", vistas: 1007533, megusta: 0, busqueda: "la voz cuidar la voz para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo nos preparamos para cantar?",
      pasos: ["Nos ponemos de pie, con la espalda recta.", "Cogemos aire por la nariz y llenamos la barriga.", "Calentamos la voz con la sirena y el «mmmm»."],
      resultado: "de pie, respirando bien y con la voz calentada." },
    { enunciado: "¿La voz de un pajarito es aguda o grave?",
      pasos: ["Imitamos al pajarito: «pío, pío».", "Es un sonido finito, que suena alto.", "Los sonidos finitos son agudos."],
      resultado: "es aguda." },
    { enunciado: "¿Qué tiene una canción?",
      pasos: ["Tiene palabras que decimos: la letra.", "Tiene música con la que cantamos: la melodía.", "Juntas forman la canción."],
      resultado: "letra y melodía." },
  ],
  errores: [
    "Gritar al cantar: gritar daña la voz y no suena bonito.",
    "Cantar más fuerte que los demás en el coro: hay que escuchar al grupo.",
    "Confundir agudo con fuerte: agudo es finito; fuerte es que se oye mucho.",
    "Cantar encogido o sentado mal: de pie y recto el aire sale mejor.",
  ],
  ejercicios: [
    { q: "Pon la mano en la garganta y canta «aaaa». ¿Qué notas?", sol: "Que vibra: así suena la voz." },
    { q: "Di «buenos días» hablando y luego cantando.", sol: "Al cantar, la voz sube y baja y se alargan sonidos." },
    { q: "Di «hola» con voz aguda y luego con voz grave.", sol: "Primero finita, como un pajarito; luego gorda, como un oso." },
    { q: "Haz la sirena con la voz.", sol: "«Uuuuu» subiendo y bajando, sin gritar." },
    { q: "Haz «mmmm» como una abeja durante 5 segundos.", sol: "Con la boca cerrada." },
    { q: "Canta «Los pollitos dicen» con tu familia.", sol: "Respuesta libre: cantar juntos, empezando a la vez." },
    { q: "¿Qué es un coro?", sol: "Un grupo de personas que cantan juntas." },
    { q: "Di dos consejos para cantar bien.", sol: "Estar de pie con la espalda recta y no gritar." },
    { q: "¿Qué dos partes tiene una canción?", sol: "La letra y la melodía." },
    { q: "Tararea una canción y que alguien la adivine.", sol: "Con la boca cerrada: «mmm»." },
  ],
  quiz: [
    { q: "La voz sale de…", o: ["la garganta", "los pies", "las orejas"], a: 0, e: "Allí vibran las cuerdas vocales." },
    { q: "Al cantar, la voz…", o: ["sube y baja", "siempre igual", "no suena"], a: 0, e: "Como un tobogán." },
    { q: "Un pajarito tiene la voz…", o: ["aguda", "grave", "muda"], a: 0, e: "Finita: aguda." },
    { q: "Un oso tiene la voz…", o: ["grave", "aguda", "de pájaro"], a: 0, e: "Gorda: grave." },
    { q: "Para cantar nos ponemos…", o: ["de pie y rectos", "tumbados", "encogidos"], a: 0, e: "Así respiramos mejor." },
    { q: "Al cantar, ¿gritamos?", o: ["No", "Sí, mucho", "Solo al final"], a: 0, e: "Gritar no es cantar." },
    { q: "Antes de cantar…", o: ["calentamos la voz", "comemos chuches", "corremos"], a: 0, e: "Sirena, «mmmm» y bostezo." },
    { q: "Las palabras de una canción son…", o: ["la letra", "la melodía", "el coro"], a: 0, e: "La letra." },
    { q: "Un grupo que canta junto es…", o: ["un coro", "un equipo de fútbol", "una orquesta de tambores"], a: 0, e: "Un coro." },
    { q: "Para cuidar la voz…", o: ["bebo agua", "grito mucho", "hablo sin parar"], a: 0, e: "Agua y sin gritar." },
  ],
  examen: [
    { q: "¿Qué instrumento llevamos siempre?", o: ["La voz", "La guitarra", "El tambor"], a: 0, e: "La voz." },
    { q: "Una voz finita es…", o: ["aguda", "grave", "fuerte"], a: 0, e: "Aguda." },
    { q: "La música con la que cantamos es…", o: ["la melodía", "la letra", "el silencio"], a: 0, e: "La melodía." },
    { q: "En un coro…", o: ["empezamos y acabamos juntos", "cada uno va a su aire", "gana el que más grita"], a: 0, e: "Como una sola voz." },
  ],
  feynman: ["Cómo suena la voz", "Qué diferencia hay entre voz aguda y grave", "Cómo se canta bien en un coro"],
  mapa: mapa("MI VOZ", "var(--pri)", [
    ["Voz", "vibra en la garganta", "var(--pen)"],
    ["Agudo y grave", "pajarito · oso", "var(--water)"],
    ["Cantar bien", "de pie · respirar · sin gritar", "var(--leaf)"],
    ["Canciones", "letra · melodía · coro", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["¿De dónde sale la voz?", "De la garganta."],
    ["¿Qué diferencia hay entre hablar y cantar?", "Al cantar, la voz sube y baja."],
    ["¿Cómo es una voz aguda?", "Finita, como un pajarito."],
    ["¿Cómo es una voz grave?", "Gorda, como un oso."],
    ["¿Cómo me pongo para cantar?", "De pie, con la espalda recta."],
    ["¿Cómo caliento la voz?", "Con la sirena, «mmmm» y un bostezo."],
    ["¿Qué partes tiene una canción?", "Letra y melodía."],
    ["¿Qué es un coro?", "Un grupo que canta junto."],
  ],
  familias: [
    "Cantad juntos canciones populares de cuando erais pequeños.",
    "Jugad a la canción escondida: uno tararea y los demás adivinan.",
    "Haced juntos la sirena y el «mmmm» antes de cantar en el coche.",
    "Recordadle beber agua y no gritar para cuidar la voz.",
  ],
  profesores: PROF("Música: la voz como instrumento, diferencia entre voz hablada y cantada, altura (agudo y grave), postura, respiración y cuidado de la voz; canto colectivo de canciones populares infantiles", ["Rutina de calentamiento vocal (sirena, zumbido, bostezo) al inicio de cada sesión.", "Repertorio de canciones populares con gestos.", "Juego de la canción escondida para trabajar la memoria auditiva."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
