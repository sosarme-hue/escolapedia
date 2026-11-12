// Educación Física 1º de Primaria: juegos con reglas y en equipo.
const { mapa } = require("./_util");
const { svg, rot, big, nino, pelota, estrella, corazon, suelo, flechaR, tick, equis, bocadillo, PROF, FUENTES } = require("./_pri1-dib");

const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
const silbato = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-10" y="-6" width="20" height="12" rx="6" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><rect x="8" y="-4" width="10" height="6" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/></g>`;
const copa = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-16 -40 h32 q0 24 -16 26 q-16 -2 -16 -26z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-16 -36 q-10 0 -8 8 q2 6 10 6 M16 -36 q10 0 8 8 q-2 6 -10 6" stroke="var(--ink)" stroke-width="1.5" fill="none"/><rect x="-3" y="-14" width="6" height="8" fill="var(--sun)"/><rect x="-12" y="-6" width="24" height="6" fill="#8a5a2b"/></g>`;

module.exports = {
  materia: "Educación Física",
  curso: "1-primaria",
  titulo: "Juegos con reglas y en equipo",
  minutos: 20,
  objetivos: ["Entender para qué sirven las reglas de un juego", "Jugar en equipo y cooperar con los compañeros", "Saber ganar y saber perder con juego limpio"],
  claves: ["reglas", "equipo", "cooperar", "turno", "juego limpio", "árbitro"],
  pregunta: {
    texto: "¿Qué pasaría si en un partido cada jugador hiciera lo que quisiera?",
    respuesta: "¡Sería un lío! Por eso los juegos tienen <mark>reglas</mark>. Así todos saben qué hacer y el juego es justo y divertido.",
  },
  bloques: [
    {
      html: `<h3>Las reglas del juego</h3><p>Todos los juegos tienen <mark>reglas</mark>. Las reglas dicen qué se puede hacer y qué no.</p><p>Por ejemplo, en el pilla pilla <b>se toca</b>, no se empuja.</p><p>Antes de empezar, escuchamos bien las reglas. Si no entendemos algo, <b>preguntamos</b>. Las reglas son iguales para todos los jugadores.</p><p>Si todos las cumplen, jugamos mejor.</p>`,
      svg: svg("Una pizarra con dos reglas: tocar sí, empujar no", `<rect x="40" y="24" width="180" height="110" rx="10" fill="var(--leaf)" stroke="#8a5a2b" stroke-width="6"/>${rot(130, 50, "REGLAS", { color: "#fff", size: 15, font: 'font-family="Baloo 2, sans-serif"' })}${tick(70, 76, "#fff")}${rot(140, 82, "Tocar", { color: "#fff", size: 15 })}${equis(70, 110, "#ffd1cc")}${rot(140, 116, "Empujar", { color: "#fff", size: 15 })}${rot(130, 164, "Iguales para todos", { color: "var(--pen)", size: 15 })}`),
    },
    {
      html: `<h3>¿Para qué sirven las reglas?</h3><p>Las reglas hacen que el juego sea <mark>justo</mark>: todos tienen las mismas oportunidades.</p><p>También hacen que sea <b>seguro</b>, para que nadie se haga daño.</p><p>Y hacen que sea <b>divertido</b>. Si alguien hace trampas, los demás se enfadan. Entonces el juego se estropea para todos.</p><p>Por eso cumplirlas es cosa de todos.</p>`,
      svg: svg("Tres dibujos: una balanza equilibrada, un escudo y una cara sonriente", `<g transform="translate(50 100)"><path d="M0 -40 V20 M-30 -30 H30" stroke="var(--ink)" stroke-width="3"/><path d="M-40 -10 l10 -20 l10 20z M20 -10 l10 -20 l10 20z" fill="var(--sun)"/><rect x="-14" y="20" width="28" height="6" fill="var(--ink)"/></g><path d="M110 60 h40 v30 q0 24 -20 34 q-20 -10 -20 -34z" fill="var(--water)"/>${tick(130, 88, "#fff")}<circle cx="210" cy="92" r="28" fill="var(--sun)"/><circle cx="200" cy="84" r="3.5" fill="var(--ink)"/><circle cx="220" cy="84" r="3.5" fill="var(--ink)"/><path d="M196 100 q14 14 28 0" stroke="var(--ink)" stroke-width="3" fill="none"/>${etq(50, 150, "justo", "var(--inf)", 14)}${etq(130, 150, "seguro", "var(--water)", 14)}${etq(210, 150, "divertido", "#c48a00", 14)}`),
    },
    {
      html: `<h3>Jugar en equipo</h3><p>Un <mark>equipo</mark> es un grupo que juega junto. Todos quieren lo mismo.</p><p>Los compañeros de equipo se <b>pasan</b> la pelota y se ayudan.</p><p>No hace falta ser el mejor. Cada uno <b>aporta</b> algo: uno corre, otro pasa, otro anima. ¡Juntos somos más fuertes!</p><p>Y cuando alguien falla, le damos ánimo.</p>`,
      svg: svg("Tres niños con camiseta azul se pasan una pelota formando un triángulo", `${nino(50, 150, { c: "var(--pen)", pose: "palmas" })}${nino(130, 110, { c: "var(--pen)", pose: "palmas", nina: true, s: 0.85 })}${nino(210, 150, { c: "var(--pen)", pose: "palmas" })}${pelota(92, 100, 7, "var(--sun)")}${flechaR(66, 112, 112, 74)}${flechaR(146, 74, 192, 112)}${flechaR(190, 132, 72, 132)}${suelo(150)}${rot(130, 172, "Nos pasamos la pelota", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Cooperar: todos juntos</h3><p>En algunos juegos <mark>no hay rivales</mark>. Todos jugamos juntos para conseguir algo.</p><p>Con el <b>paracaídas</b> de colores, lanzamos una pelota hacia arriba. ¡Sin que se caiga!</p><p>O llevamos un aro entre todos sin soltar las manos. A esto se le llama <b>cooperar</b>. Si uno falla, todos lo intentamos otra vez.</p>`,
      svg: svg("Cuatro niños sujetan un paracaídas de colores con una pelota encima", `<path d="M30 104 Q130 62 230 104 Q130 118 30 104z" fill="var(--water)"/><path d="M80 90 Q130 70 130 70 L130 112 Q100 110 80 90z" fill="var(--sun)"/><path d="M180 90 Q130 70 130 70 L130 112 Q160 110 180 90z" fill="var(--red)"/>${pelota(130, 54, 9, "var(--leaf)")}${nino(30, 150, { c: "var(--pen)", pose: "palmas", s: 0.85 })}${nino(90, 150, { c: "var(--inf)", nina: true, pose: "palmas", s: 0.75 })}${nino(170, 150, { c: "var(--leaf)", pose: "palmas", s: 0.75 })}${nino(230, 150, { c: "var(--red)", nina: true, pose: "palmas", s: 0.85 })}${suelo(150)}${rot(130, 172, "Cooperamos", { color: "var(--pen)" })}`),
      video: { id: "iUADZsQ08mA", titulo: "Juegos cooperativos: recopilatorio", canal: "Antonio Méndez-Giménez", vistas: 786112 },
    },
    {
      html: `<h3>Ganar y perder</h3><p>En algunos juegos un equipo <b>gana</b> y otro <b>pierde</b>. ¡Es normal!</p><p>Si ganamos, no nos burlamos. Si perdemos, no nos enfadamos.</p><p>Al final, nos damos la mano y decimos <mark>«¡Buen partido!»</mark>. Esto se llama <b>juego limpio</b>. Lo más importante es haber jugado y aprendido.</p><p>¡La próxima vez puede ser distinto!</p>`,
      svg: svg("Dos niños de equipos distintos se dan la mano junto a una copa", `${nino(80, 150, { c: "var(--pen)", s: 1.05 })}${nino(180, 150, { c: "var(--red)", nina: true, s: 1.05 })}<path d="M94 118 L130 106 L166 118" stroke="var(--muted)" stroke-width="4" stroke-linecap="round" fill="none"/>${copa(130, 70)}${suelo(150)}${rot(130, 172, "¡Buen partido!", { color: "var(--leaf)", size: 15 })}`),
    },
    {
      html: `<h3>Esperar el turno</h3><p>Muchas veces jugamos <mark>por turnos</mark>: primero uno y luego otro.</p><p>Hacemos una <b>fila</b> y esperamos sin empujar.</p><p>Mientras esperamos, miramos cómo lo hacen los demás y les <b>animamos</b>. Así aprendemos y nos toca antes de lo que pensamos. ¡Esperar también es parte del juego!</p><p>Nadie se cuela.</p>`,
      svg: svg("Cuatro niños en fila esperando su turno para saltar un aro", `${["var(--pen)", "var(--inf)", "var(--leaf)", "var(--red)"].map((c, i) => nino(40 + i * 36, 150, { c, nina: i % 2 === 1, s: 0.8 })).join("")}<ellipse cx="220" cy="146" rx="22" ry="7" fill="none" stroke="var(--red)" stroke-width="4"/>${flechaR(170, 120, 206, 130)}${big(40, 52, "1", "var(--pen)", 16)}${big(76, 52, "2", "var(--inf)", 16)}${big(112, 52, "3", "var(--leaf)", 16)}${big(148, 52, "4", "var(--red)", 16)}${suelo(150)}${rot(130, 172, "Esperamos sin empujar", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>El árbitro y las señales</h3><p>En muchos juegos hay un <mark>árbitro</mark>. En clase, suele ser el profe.</p><p>El árbitro hace que se cumplan las reglas.</p><p>Usa <b>señales</b>: un silbato o una palmada. Un pitido puede ser «¡empieza!». Dos pitidos, «¡para!». Cuando oímos la señal, paramos y escuchamos. Así jugamos seguros.</p><p>Hay que respetar sus decisiones.</p>`,
      svg: svg("Una profesora con un silbato levanta el brazo y dos niños se paran a escuchar", `${nino(70, 150, { c: "var(--water)", nina: true, pose: "lanza", s: 1.15 })}${silbato(96, 86)}<path d="M112 80 q8 -6 14 0 M114 72 q12 -10 22 0" stroke="var(--muted)" stroke-width="2" fill="none"/>${nino(170, 150, { c: "var(--pen)", s: 0.85 })}${nino(214, 150, { c: "var(--red)", nina: true, s: 0.85 })}${suelo(150)}${rot(190, 44, "¡Piii!", { color: "var(--inf)", size: 16 })}${rot(130, 172, "Escuchamos la señal", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>¿Para qué sirve? En el recreo</h3><p>En el recreo, a veces no hay árbitro. Entonces <mark>decidimos juntos</mark> las reglas.</p><p>Si hay un problema, lo <b>hablamos</b>. No gritamos ni empujamos.</p><p>Para decidir quién empieza, podemos echar a <b>piedra, papel o tijera</b>. Y siempre dejamos jugar a todos los que quieran.</p><p>Así nadie se queda fuera.</p>`,
      svg: svg("Dos niños echan a piedra, papel o tijera para decidir quién empieza", `${nino(70, 150, { c: "var(--pen)", pose: "palmas" })}${nino(190, 150, { c: "var(--inf)", nina: true, pose: "palmas" })}<circle cx="104" cy="104" r="9" fill="#f3c9a1" stroke="var(--ink)" stroke-width="1.5"/><rect x="146" y="94" width="16" height="22" rx="4" fill="#f3c9a1" stroke="var(--ink)" stroke-width="1.5"/>${bocadillo(130, 36, 200, "¡Piedra, papel o tijera!", 13)}${suelo(150)}${rot(130, 172, "Decidimos juntos", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Juego: la cadena</h3><p>Es un pilla pilla <mark>en equipo</mark>. Uno la liga.</p><p>Cuando pilla a alguien, se dan la mano y forman una <b>cadena</b>.</p><p>La cadena crece y crece. Solo pueden pillar los de las puntas. ¡Y sin soltarse! Hay que <b>ponerse de acuerdo</b> para correr hacia el mismo lado.</p><p>Gana el último en ser pillado.</p>`,
      svg: svg("Tres niños de la mano forman una cadena que persigue a una niña", `${["var(--red)", "var(--red)", "var(--red)"].map((c, i) => nino(40 + i * 40, 150, { c, pose: "brazos", s: 0.85, nina: i === 1 })).join("")}${nino(210, 150, { c: "var(--inf)", nina: true, pose: "corre", s: 0.9 })}${flechaR(150, 100, 186, 100, "var(--red)")}${suelo(150)}${rot(130, 40, "¡La cadena crece!", { color: "var(--red)", size: 15 })}${rot(130, 172, "Juego de la cadena", { color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Jugar con reglas y en equipo",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Cuatro ideas: reglas iguales para todos, jugar en equipo, esperar el turno y juego limpio">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["Reglas", "iguales para todos", "var(--leaf)", `${tick(-20, -40)}${equis(20, -38)}`], ["Equipo", "pasamos y ayudamos", "var(--pen)", pelota(0, -40, 16, "var(--sun)")], ["Turnos", "sin empujar", "var(--inf)", `${big(-24, -30, "1", "var(--inf)", 26)}${big(0, -30, "2", "var(--inf)", 26)}${big(24, -30, "3", "var(--inf)", 26)}`], ["Juego limpio", "¡buen partido!", "var(--red)", corazon(0, -40, 2.4)]].map(([t, d, c, dib], i) => {
        const x = 85 + i * 157;
        return `<rect x="${x - 75}" y="30" width="150" height="240" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><g transform="translate(${x} 150) scale(1.8)">${dib}</g>${big(x, 190, t, c, 19)}${rot(x, 222, d, { size: 13 })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "I20aNy0TkHI", titulo: "3 juegos cooperativos de Educación Física para Primaria", canal: "Cristhian Alexander Quintero Mogollon", vistas: 343636, megusta: 3819, busqueda: "juegos cooperativos en equipo para niños reglas" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Tu equipo pierde el partido. ¿Qué haces?",
      pasos: ["Respiro y no me enfado.", "Me acerco al otro equipo.", "Les doy la mano y digo «¡Buen partido!»."],
      resultado: "felicito al otro equipo: eso es juego limpio." },
    { enunciado: "Dos amigos quieren empezar a la vez. ¿Cómo se decide?",
      pasos: ["No discutimos ni empujamos.", "Proponemos echar a piedra, papel o tijera.", "Quien gana empieza; el otro va después."],
      resultado: "lo decidimos con piedra, papel o tijera." },
    { enunciado: "Suena el silbato dos veces. ¿Qué hacemos?",
      pasos: ["Recordamos la señal acordada.", "Dos pitidos significan «¡para!».", "Nos paramos y miramos al profe."],
      resultado: "paramos y escuchamos." },
  ],
  errores: [
    "Cambiar las reglas a mitad del juego porque vas perdiendo: las reglas se deciden antes.",
    "Querer la pelota solo para ti: en equipo, se pasa.",
    "Burlarse del que pierde: el juego limpio es respetar a todos.",
    "Seguir jugando cuando suena la señal de parar: hay que escuchar al árbitro.",
  ],
  ejercicios: [
    { q: "Di una regla del pilla pilla.", sol: "Por ejemplo: se pilla tocando, sin empujar." },
    { q: "¿Para qué sirven las reglas? Di dos cosas.", sol: "Para que el juego sea justo y seguro (y divertido)." },
    { q: "Pásate una pelota con dos compañeros sin que caiga.", sol: "Deben mirar a quién pasan y tener las manos preparadas." },
    { q: "¿Qué dices al final de un partido?", sol: "«¡Buen partido!», y das la mano." },
    { q: "Haz una fila con tu familia y respeta el turno para lanzar una pelota.", sol: "Cada uno lanza cuando le toca, sin colarse." },
    { q: "Juega a piedra, papel o tijera con alguien.", sol: "Piedra gana a tijera, tijera a papel y papel a piedra." },
    { q: "¿Qué es cooperar?", sol: "Jugar juntos para conseguir algo, sin rivales." },
    { q: "¿Quién hace cumplir las reglas en clase?", sol: "El árbitro, normalmente el profe." },
    { q: "¿Qué haces si un compañero no conoce las reglas?", sol: "Se las explico con paciencia." },
    { q: "Inventa un juego con una regla nueva y enséñaselo a alguien.", sol: "Respuesta libre: debe tener al menos una regla clara." },
  ],
  quiz: [
    { q: "Las reglas dicen…", o: ["qué se puede hacer y qué no", "quién es el más alto", "qué comer"], a: 0, e: "Ordenan el juego." },
    { q: "Las reglas son…", o: ["iguales para todos", "solo para algunos", "para el que gana"], a: 0, e: "Todos juegan igual." },
    { q: "Hacer trampas…", o: ["estropea el juego", "es divertido", "es una regla"], a: 0, e: "Nadie quiere jugar con trampas." },
    { q: "En un equipo, la pelota…", o: ["se pasa", "se esconde", "es de uno solo"], a: 0, e: "Nos la pasamos." },
    { q: "Cooperar es…", o: ["jugar juntos para conseguir algo", "ganar a todos", "jugar solo"], a: 0, e: "Todos en el mismo lado." },
    { q: "Si pierdo…", o: ["felicito al otro equipo", "me enfado y me voy", "lloro y grito"], a: 0, e: "Eso es juego limpio." },
    { q: "Si gano…", o: ["no me burlo", "me río del otro", "presumo sin parar"], a: 0, e: "Respetamos al que pierde." },
    { q: "En la fila…", o: ["espero sin empujar", "me cuelo", "me siento"], a: 0, e: "Respetamos el turno." },
    { q: "Al oír la señal de parar…", o: ["paramos y escuchamos", "seguimos corriendo", "nos escondemos"], a: 0, e: "La señal es una regla." },
    { q: "Para decidir quién empieza, podemos…", o: ["echar a piedra, papel o tijera", "pelearnos", "gritar más fuerte"], a: 0, e: "Es justo y rápido." },
  ],
  examen: [
    { q: "¿Para qué sirven las reglas?", o: ["Para que el juego sea justo y seguro", "Para aburrirnos", "Para que gane siempre el mismo"], a: 0, e: "Justo, seguro y divertido." },
    { q: "Un equipo es…", o: ["un grupo que juega junto", "un jugador solo", "una pelota"], a: 0, e: "Todos quieren lo mismo." },
    { q: "Juego limpio es…", o: ["respetar las reglas y a los demás", "ganar como sea", "no jugar"], a: 0, e: "Y felicitar al final." },
    { q: "En el juego de la cadena, quien es pillado…", o: ["se une a la cadena", "se va a casa", "se esconde"], a: 0, e: "La cadena crece." },
  ],
  feynman: ["Para qué sirven las reglas", "Qué es jugar en equipo y cooperar", "Qué es el juego limpio"],
  mapa: mapa("REGLAS Y EQUIPO", "var(--pri)", [
    ["Reglas", "justo · seguro · divertido", "var(--leaf)"],
    ["Equipo", "pasar · ayudar · animar", "var(--pen)"],
    ["Turnos", "fila · esperar · señales", "var(--inf)"],
    ["Juego limpio", "sin trampas · ¡buen partido!", "var(--red)"],
  ], 240),
  tarjetas: [
    ["¿Qué son las reglas?", "Lo que se puede y no se puede hacer en un juego."],
    ["¿Las reglas son para todos?", "Sí, iguales para todos."],
    ["¿Qué es un equipo?", "Un grupo que juega junto."],
    ["¿Qué es cooperar?", "Jugar juntos para conseguir algo."],
    ["¿Qué digo al acabar?", "«¡Buen partido!»"],
    ["¿Qué hago en la fila?", "Espero mi turno sin empujar."],
    ["¿Quién hace cumplir las reglas?", "El árbitro."],
    ["¿Cómo decidimos quién empieza?", "Con piedra, papel o tijera."],
  ],
  familias: [
    "Jugad en casa a juegos de mesa sencillos y practicad ganar y perder con buen humor.",
    "Antes de un juego en el parque, pedidle que explique las reglas a los demás.",
    "Jugad a juegos cooperativos, como mantener un globo en el aire entre todos.",
    "Felicitad el esfuerzo y el juego limpio más que el resultado.",
  ],
  profesores: PROF("Educación Física: juegos reglados sencillos, juegos cooperativos y de oposición, respeto a las normas, deportividad y resolución dialogada de conflictos", ["Juegos de paracaídas y transporte cooperativo de objetos.", "Asamblea al final de la sesión: ¿se cumplieron las reglas?", "Señales acordadas (silbato, palmada) para empezar y parar."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
