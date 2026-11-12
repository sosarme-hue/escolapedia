// Música 1º de Primaria: sonido y silencio.
const { mapa } = require("./_util");
const { svg, rot, big, nino, pajaro, nube, tambor, casa, nota, suelo, bocadillo, PROF, FUENTES } = require("./_pri1-dib");

const PIEL = "#f3c9a1";
const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
// Ondas de sonido que salen de (x, y) hacia la derecha (d = 1) o la izquierda (d = -1).
const ondas = (x, y, d = 1, c = "var(--pen)", n = 3) => [...Array(n)].map((_, i) => `<path d="M${x + d * (8 + i * 9)} ${y - 8 - i * 4} q${d * 6} ${8 + i * 4} 0 ${16 + i * 8}" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`).join("");
const oreja = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M-6 -16 q14 -6 18 8 q2 10 -8 14 q-4 2 -4 8 q0 6 -6 4 q-6 -2 -6 -10 q0 -16 6 -24z" fill="${PIEL}" stroke="var(--ink)" stroke-width="2"/>`;
const silencioNegra = (x, y, c = "var(--ink)") => `<path d="M${x - 4} ${y - 22} l8 10 l-7 7 l8 9 q-8 -3 -10 4 q-4 -8 6 -9 l-7 -8 l7 -7z" fill="${c}"/>`;
const timbre = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-14 0 q0 -24 14 -24 q14 0 14 24 l4 4 h-36z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="0" cy="8" r="4" fill="var(--ink)"/></g>`;
const coche = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-28" y="-20" width="56" height="16" rx="5" fill="var(--red)"/><path d="M-16 -20 l6 -12 h20 l6 12z" fill="var(--red)"/><circle cx="-16" cy="-4" r="6" fill="var(--ink)"/><circle cx="16" cy="-4" r="6" fill="var(--ink)"/></g>`;
const perro = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="-16" rx="18" ry="9" fill="#c99a5b"/><circle cx="18" cy="-26" r="8" fill="#c99a5b"/><ellipse cx="14" cy="-30" rx="4" ry="7" fill="#8a5a2b"/><path d="M-12 -8 V0 M12 -8 V0 M-18 -18 l-8 -6" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/></g>`;
const gota = (x, y) => `<path d="M${x} ${y - 8} q6 8 0 11 q-6 -3 0 -11z" fill="var(--water)"/>`;

module.exports = {
  materia: "Música",
  curso: "1-primaria",
  titulo: "Sonido y silencio",
  minutos: 20,
  objetivos: ["Distinguir entre sonido y silencio", "Reconocer sonidos de la naturaleza, la casa, la calle y el cuerpo", "Escuchar con atención y valorar el silencio"],
  claves: ["sonido", "silencio", "escuchar", "oído", "ruido", "vibrar"],
  pregunta: {
    texto: "Cierra los ojos y quédate muy quieto un minuto. ¿Qué oyes?",
    respuesta: "Seguro que oyes <mark>sonidos</mark>: voces, un coche, un pájaro… Y cuando no se oye nada, hay <mark>silencio</mark>.",
  },
  bloques: [
    {
      html: `<h3>Escuchamos con los oídos</h3><p>Con los <mark>oídos</mark> escuchamos todo lo que suena.</p><p>Tenemos dos orejas, una a cada lado de la cabeza. Por eso sabemos de dónde viene un sonido.</p><p>Para escuchar bien, nos quedamos <b>quietos</b> y callados. A veces cerramos los ojos. ¡Así oímos mucho más!</p><p>Escuchar es el primer paso para hacer música.</p>`,
      svg: svg("Una niña con la mano en la oreja escucha un sonido que llega desde la derecha", `${nino(80, 150, { c: "var(--inf)", nina: true, pose: "canta", s: 1.4 })}${ondas(150, 74, -1, "var(--pen)")}${nota(196, 84, "var(--pen)")}${suelo(150)}${rot(130, 172, "Escuchamos con atención", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>¿Qué es el sonido?</h3><p>El <mark>sonido</mark> es todo lo que oímos.</p><p>Los sonidos se producen cuando algo <b>vibra</b>: se mueve muy deprisa, adelante y atrás.</p><p>Si golpeas un tambor, su piel vibra. Si pones la mano en tu garganta y hablas, ¡notas cómo vibra! Esa vibración viaja por el aire hasta nuestros oídos.</p><p>Sin vibración, no hay sonido.</p>`,
      svg: svg("Un tambor golpeado con ondas que viajan hasta una oreja", `${tambor(70, 130, 1.4)}<path d="M54 70 L76 92" stroke="#8a5a2b" stroke-width="4" stroke-linecap="round"/><circle cx="78" cy="94" r="5" fill="var(--red)"/>${ondas(104, 100, 1, "var(--inf)", 4)}${oreja(206, 100, 1.6)}${rot(130, 168, "Vibra → viaja → lo oímos", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>Sonidos de la naturaleza</h3><p>La naturaleza está llena de <mark>sonidos</mark>.</p><p>Los <b>pájaros</b> cantan, el <b>perro</b> ladra y el <b>viento</b> mueve las hojas.</p><p>La <b>lluvia</b> hace «plic, plic» y el trueno hace «¡brrrum!». El mar suena con sus olas. ¿Qué sonido de la naturaleza te gusta más?</p><p>Escúchalos la próxima vez que salgas al parque.</p>`,
      svg: svg("Un pájaro, una nube con lluvia y un perro ladrando", `${nube(70, 46)}${gota(56, 74)}${gota(72, 82)}${gota(88, 72)}${pajaro(180, 40)}${pajaro(210, 54)}${perro(170, 148)}${rot(214, 116, "¡guau!", { color: "#8a5a2b", size: 14 })}${rot(70, 116, "plic, plic", { color: "var(--water)", size: 13 })}${suelo(150)}${rot(130, 172, "Sonidos de la naturaleza", { color: "var(--leaf)", size: 13 })}`),
    },
    {
      html: `<h3>Sonidos de la casa y la calle</h3><p>En casa también hay <mark>muchos sonidos</mark>: el timbre, el reloj, el grifo o la lavadora.</p><p>En la calle oímos los <b>coches</b>, las bocinas y las campanas.</p><p>Algunos sonidos nos <b>avisan</b>. El timbre dice que alguien llega. La sirena de una ambulancia dice: «¡Dejad paso!».</p><p>Por eso es importante estar atentos a lo que suena.</p>`,
      svg: svg("Una casa con un timbre que suena y un coche pitando", `${casa(70, 150, "var(--inf)")}${timbre(116, 92)}${ondas(132, 82, 1, "var(--sun)", 2)}${coche(196, 150)}${rot(196, 104, "¡pi, pi!", { color: "var(--red)", size: 14 })}${suelo(150)}${rot(130, 172, "Sonidos que nos avisan", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>El silencio</h3><p>Cuando <mark>no se oye nada</mark>, hay silencio.</p><p>El silencio es tranquilo. Nos ayuda a <b>descansar</b>, a pensar y a escuchar a los demás.</p><p>En clase hacemos silencio cuando alguien habla. Ponemos un dedo en los labios: «<b>¡Chis!</b>». Escuchar en silencio es una forma de respetar.</p><p>¡Prueba a escuchar el silencio un minuto!</p>`,
      svg: svg("Un niño con el dedo en los labios pidiendo silencio", `${nino(90, 150, { c: "var(--pen)", pose: "pie", s: 1.4, boca: "cerrada" })}<path d="M90 86 L106 84 L96 74" stroke="var(--pen)" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="92" y="58" width="6" height="18" rx="3" fill="${PIEL}" stroke="var(--ink)" stroke-width="1"/>${bocadillo(186, 60, 80, "¡Chis!", 16)}${suelo(150)}${rot(130, 172, "Silencio", { color: "var(--pen)", size: 15 })}`),
      video: { id: "jr8arw17tKg", titulo: "Canción: Silencio", canal: "Mercedes Edith", vistas: 644354 },
    },
    {
      html: `<h3>El silencio en la música</h3><p>La música no suena todo el rato. Tiene <mark>pausas</mark> de silencio.</p><p>En una canción, a veces paramos un momento. Luego seguimos cantando.</p><p>Los músicos escriben el silencio con un <b>signo</b> especial. Cuando el director cierra la mano, todos <b>callan</b> a la vez. ¡El silencio también es música!</p><p>Sin silencio, la música sería un lío.</p>`,
      svg: svg("Un pentagrama con notas y un signo de silencio entre ellas", `${[0, 1, 2, 3, 4].map((i) => `<path d="M20 ${54 + i * 12} H240" stroke="var(--line)" stroke-width="2"/>`).join("")}${nota(56, 96, "var(--pen)", false)}${nota(96, 90, "var(--pen)", false)}${silencioNegra(140, 92, "var(--red)")}${nota(180, 84, "var(--pen)", false)}${nota(216, 96, "var(--pen)", false)}${etq(140, 134, "silencio", "var(--red)", 13)}${rot(130, 166, "Sonido · silencio · sonido", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>Sonidos del cuerpo</h3><p>¡Nuestro cuerpo también <mark>suena</mark>!</p><p>Podemos dar <b>palmas</b>, chasquear los dedos o dar golpes en las <b>rodillas</b>.</p><p>Con los pies podemos dar <b>pisotones</b>. Y con la <b>voz</b> hablamos, cantamos y hacemos sonidos de animales. Es como llevar un instrumento siempre encima.</p><p>Prueba a inventar un ritmo con palmas y pies.</p>`,
      svg: svg("Una niña da palmas, un niño da pisotones y otro canta", `${nino(50, 150, { c: "var(--inf)", nina: true, pose: "palmas" })}${ondas(62, 100, 1, "var(--inf)", 2)}${nino(130, 150, { c: "var(--leaf)", pose: "baila" })}${nino(210, 150, { c: "var(--pen)", pose: "canta", boca: "abierta" })}${nota(240, 70, "var(--pen)")}${suelo(150)}${etq(50, 170, "palmas")}${etq(130, 170, "pies")}${etq(210, 170, "voz")}`),
      video: { id: "FhgExRs__ro", titulo: "Juego musical con sonidos y partes del cuerpo: ¿qué suena?", canal: "Dos Cocos", vistas: 4148999 },
    },
    {
      html: `<h3>¿Para qué sirve? Escuchar y cuidar los oídos</h3><p>Escuchar bien nos ayuda <mark>cada día</mark>. Oímos al profe, a los amigos y los avisos de la calle.</p><p>Los oídos son <b>delicados</b>. Los sonidos muy fuertes pueden hacerles daño.</p><p>Por eso no gritamos sin motivo. Y con auriculares, ponemos el volumen <b>bajo</b>.</p><p>Si un ruido es muy fuerte, nos tapamos las orejas.</p>`,
      svg: svg("Unos auriculares con el volumen bajo y una oreja protegida", `<path d="M80 110 q0 -60 50 -60 q50 0 50 60" stroke="var(--ink)" stroke-width="6" fill="none"/><rect x="66" y="100" width="24" height="36" rx="8" fill="var(--pen)"/><rect x="170" y="100" width="24" height="36" rx="8" fill="var(--pen)"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="${102 + i * 12}" y="${120 - i * 6}" width="8" height="${12 + i * 6}" rx="2" fill="${i < 2 ? "var(--leaf)" : "var(--line)"}"/>`).join("")}${rot(130, 166, "Volumen bajo", { color: "var(--leaf)", size: 15 })}`),
    },
    {
      html: `<h3>Juego: ¿qué suena?</h3><p>Todos cierran los <mark>ojos</mark>. Uno hace un sonido: arruga un papel, da palmas o abre una puerta.</p><p>¿Quién adivina qué ha sonado?</p><p>Otra versión: el <b>juego del silencio</b>. Todos callados, quietos como estatuas. ¿Quién aguanta más sin hacer ningún ruido? ¡Escucha qué se oye en el silencio!</p><p>¡Shhh!</p>`,
      svg: svg("Dos niños con los ojos cerrados escuchan y un signo de interrogación", `${nino(70, 150, { c: "var(--pen)", s: 1.1, boca: "cerrada" })}<path d="M62 79 h6 M72 79 h6" stroke="var(--ink)" stroke-width="2"/>${nino(150, 150, { c: "var(--inf)", nina: true, s: 1.1, boca: "cerrada" })}<path d="M142 79 h6 M152 79 h6" stroke="var(--ink)" stroke-width="2"/>${big(220, 100, "?", "var(--red)", 60)}${suelo(150)}${rot(130, 172, "¿Qué ha sonado?", { color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Sonido y silencio",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="A la izquierda, sonidos de la naturaleza, de la calle y del cuerpo; a la derecha, el silencio con un niño pidiendo calma">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <rect x="20" y="20" width="380" height="260" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
      <rect x="420" y="20" width="200" height="260" rx="14" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>
      ${big(210, 58, "SONIDO", "var(--pen)", 26)}${big(520, 58, "SILENCIO", "var(--red)", 24)}
      ${[["naturaleza", `${pajaro(0, -30)}${perro(0, 0)}`], ["calle y casa", `${coche(0, 0)}${timbre(0, -40)}`], ["cuerpo", nino(0, 6, { c: "var(--inf)", nina: true, pose: "palmas", s: 0.9 })]].map(([t, d], i) => `<g transform="translate(${85 + i * 125} 210) scale(1.5)">${d}</g>${rot(85 + i * 125, 250, t, { size: 15 })}`).join("")}
      <g transform="translate(520 210)">${nino(0, 0, { c: "var(--pen)", pose: "canta", s: 1.6, boca: "cerrada" })}</g>
      ${rot(520, 250, "¡Chis!", { size: 16, color: "var(--red)" })}
    </svg>`,
  },
  video: { id: "-zWDkzggPUk", titulo: "El sonido | Vídeos educativos para niños", canal: "Happy Learning Español", vistas: 520280, megusta: 0, busqueda: "sonido y silencio infantil educación musical primaria" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo se produce el sonido de un tambor?",
      pasos: ["Golpeamos la piel del tambor.", "La piel vibra muy deprisa.", "La vibración viaja por el aire hasta nuestros oídos."],
      resultado: "la piel vibra y el sonido llega a los oídos." },
    { enunciado: "¿Es sonido o silencio? «La clase está callada y quieta».",
      pasos: ["Pensamos: ¿se oye algo?", "Nadie habla ni hace ruido.", "Cuando no se oye nada, es silencio."],
      resultado: "es silencio." },
    { enunciado: "Oyes una sirena por la calle. ¿Qué significa?",
      pasos: ["Escuchamos con atención.", "Es un sonido que avisa.", "Viene una ambulancia o los bomberos: hay que dejar paso."],
      resultado: "es un aviso: dejamos paso." },
  ],
  errores: [
    "Pensar que el silencio no es parte de la música: las pausas también son música.",
    "Creer que solo suenan los instrumentos: el cuerpo y la naturaleza también suenan.",
    "Escuchar con el volumen muy alto: puede hacer daño a los oídos.",
    "Hablar mientras otros hablan: para escuchar hace falta silencio.",
  ],
  ejercicios: [
    { q: "Cierra los ojos un minuto y di tres sonidos que oigas.", sol: "Respuesta libre: voces, un coche, un pájaro, el reloj…" },
    { q: "Pon la mano en tu garganta y di «aaaa». ¿Qué notas?", sol: "Que vibra: así se produce el sonido de la voz." },
    { q: "Di dos sonidos de la naturaleza.", sol: "Por ejemplo: la lluvia y el canto de un pájaro." },
    { q: "Di dos sonidos de casa.", sol: "Por ejemplo: el timbre y el grifo." },
    { q: "Haz tres sonidos con tu cuerpo.", sol: "Palmas, pisotones y chasquidos (o golpes en las rodillas)." },
    { q: "Haz silencio contando hasta 10 con la mente.", sol: "Debe estar quieto y callado." },
    { q: "Imita el sonido de un perro, una vaca y un gato.", sol: "¡Guau!, ¡muuu!, ¡miau!" },
    { q: "Dibuja algo que suena y algo que está en silencio.", sol: "Por ejemplo: un tambor y un bebé dormido." },
    { q: "¿Qué sonido nos avisa de que hay que dejar paso?", sol: "La sirena de una ambulancia o de los bomberos." },
    { q: "¿Cómo cuidamos los oídos?", sol: "Sin gritar sin motivo y con el volumen bajo." },
  ],
  quiz: [
    { q: "¿Con qué escuchamos?", o: ["Con los oídos", "Con la nariz", "Con los pies"], a: 0, e: "Los oídos captan los sonidos." },
    { q: "El sonido se produce cuando algo…", o: ["vibra", "duerme", "se pinta"], a: 0, e: "Vibrar es moverse muy deprisa." },
    { q: "Cuando no se oye nada hay…", o: ["silencio", "ruido", "música fuerte"], a: 0, e: "Silencio." },
    { q: "¿Qué es un sonido de la naturaleza?", o: ["La lluvia", "El timbre", "El coche"], a: 0, e: "La lluvia." },
    { q: "¿Qué es un sonido de la calle?", o: ["La bocina de un coche", "El canto de un grillo", "Una ola"], a: 0, e: "La bocina." },
    { q: "Las palmas son un sonido…", o: ["del cuerpo", "de un coche", "del mar"], a: 0, e: "Las hacemos con las manos." },
    { q: "Para pedir silencio decimos…", o: ["«¡Chis!»", "«¡Gol!»", "«¡Hola!»"], a: 0, e: "Con el dedo en los labios." },
    { q: "En la música, el silencio…", o: ["también es música", "está prohibido", "no existe"], a: 0, e: "Las pausas son parte de la música." },
    { q: "La sirena de una ambulancia…", o: ["nos avisa", "nos duerme", "es silencio"], a: 0, e: "Pide paso." },
    { q: "Con auriculares, el volumen…", o: ["bajo", "al máximo", "da igual"], a: 0, e: "Así cuidamos los oídos." },
  ],
  examen: [
    { q: "¿Qué es el sonido?", o: ["Todo lo que oímos", "Todo lo que vemos", "Todo lo que comemos"], a: 0, e: "Lo que llega a los oídos." },
    { q: "¿Qué notamos en la garganta al hablar?", o: ["Que vibra", "Que está fría", "Nada"], a: 0, e: "La voz hace vibrar la garganta." },
    { q: "¿Para qué sirve el silencio en clase?", o: ["Para escuchar a los demás", "Para gritar", "Para correr"], a: 0, e: "Escuchar en silencio es respetar." },
    { q: "¿Qué sonido es del cuerpo?", o: ["Un pisotón", "El viento", "Un trueno"], a: 0, e: "Lo hacemos con los pies." },
  ],
  feynman: ["Qué es el sonido y cómo se produce", "Qué es el silencio y para qué sirve", "Qué sonidos podemos hacer con el cuerpo"],
  mapa: mapa("SONIDO Y SILENCIO", "var(--pri)", [
    ["Sonido", "algo vibra y lo oímos", "var(--pen)"],
    ["Dónde", "naturaleza · casa · calle", "var(--leaf)"],
    ["Cuerpo", "palmas · pies · voz", "var(--inf)"],
    ["Silencio", "no suena nada · ¡chis!", "var(--red)"],
  ], 240),
  tarjetas: [
    ["¿Con qué escuchamos?", "Con los oídos."],
    ["¿Qué es el sonido?", "Todo lo que oímos."],
    ["¿Cómo se produce el sonido?", "Cuando algo vibra."],
    ["¿Qué es el silencio?", "Cuando no se oye nada."],
    ["Di un sonido de la naturaleza.", "La lluvia (o un pájaro, el viento…)."],
    ["Di un sonido del cuerpo.", "Las palmas (o los pies, la voz…)."],
    ["¿El silencio es música?", "Sí: las pausas son parte de la música."],
    ["¿Cómo cuido mis oídos?", "Sin gritar y con el volumen bajo."],
  ],
  familias: [
    "Dad un paseo en silencio y contad después todos los sonidos que habéis oído.",
    "Jugad a «¿qué suena?» en casa con los ojos cerrados: llaves, papel, agua…",
    "Haced juntos el juego del silencio antes de dormir: un minuto sin hablar.",
    "Revisad el volumen de tabletas y auriculares para que esté bajo.",
  ],
  profesores: PROF("Música: percepción y discriminación auditiva del sonido y el silencio; sonidos del entorno natural, urbano y corporal; escucha activa y cuidado de la salud auditiva", ["Paseo sonoro por el colegio y mapa de sonidos con dibujos.", "Juego del director: mano abierta suena, mano cerrada silencio.", "Adivinanzas sonoras con objetos cotidianos detrás de una pantalla."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
