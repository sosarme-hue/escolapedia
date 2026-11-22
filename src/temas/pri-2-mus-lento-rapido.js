// Música 2º de Primaria: escuchar música, lento y rápido. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, negra, corcheas, altavoz, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
// Tortuga y liebre sencillas.
const tortuga = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="-12" rx="22" ry="14" fill="${P.verde}" stroke="var(--ink)" stroke-width="1.5"/><path d="M-12 -14 h24 M0 -24 v20" stroke="#2e7d32" stroke-width="1.5"/><circle cx="26" cy="-10" r="7" fill="#9ccc65" stroke="var(--ink)"/><circle cx="28" cy="-12" r="1.5" fill="var(--ink)"/><rect x="-16" y="-2" width="7" height="6" fill="#9ccc65"/><rect x="9" y="-2" width="7" height="6" fill="#9ccc65"/></g>`;
const liebre = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="-14" rx="20" ry="11" fill="${P.marron}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="20" cy="-22" r="8" fill="${P.marron}" stroke="var(--ink)"/><ellipse cx="18" cy="-40" rx="3.5" ry="11" fill="${P.marron}" stroke="var(--ink)"/><ellipse cx="25" cy="-38" rx="3.5" ry="11" fill="${P.marron}" stroke="var(--ink)" transform="rotate(15 25 -38)"/><circle cx="23" cy="-23" r="1.5" fill="var(--ink)"/><path d="M-14 -6 L-24 2 M10 -6 L22 2" stroke="var(--ink)" stroke-width="2.5"/></g>`;
const flechaVel = (x, y, w, c, t) => `<path d="M${x} ${y} h${w}" stroke="${c}" stroke-width="5" stroke-linecap="round"/><path d="M${x + w} ${y} l-10 -7 v14z" fill="${c}"/>${etq(x + w / 2, y - 12, t, c, 12)}`;

module.exports = {
  materia: "Música",
  curso: "2-primaria",
  titulo: "Escuchar música: lento y rápido",
  minutos: 20,
  objetivos: ["Escuchar música con atención y en silencio", "Distinguir si una música va lenta o rápida, y si acelera o frena", "Moverse según la velocidad de la música"],
  claves: ["escuchar", "velocidad", "lento", "rápido", "acelerar", "frenar", "audición", "musicograma"],
  pregunta: {
    texto: "¿Una canción de cuna va lenta o rápida? ¿Y la música de una carrera?",
    respuesta: "La canción de cuna va <mark>lenta</mark>, para dormir. La música de una carrera va <mark>rápida</mark>, para emocionarnos. La <b>velocidad</b> de la música cambia cómo nos sentimos.",
  },
  bloques: [
    {
      html: `<h3>Escuchar con atención</h3><p><mark>Escuchar</mark> música no es lo mismo que oírla de fondo.</p><p>Para escuchar bien, nos sentamos cómodos, en silencio, y cerramos los ojos si queremos.</p><p>Prestamos atención a lo que pasa: qué instrumentos suenan, si es fuerte o suave, si va despacio o deprisa. ¡Cada vez que la escuchamos descubrimos algo nuevo!</p>`,
      svg: svg("Una niña sentada con los ojos cerrados escucha música de un altavoz", `${nino(80, 156, { c: P.morado, pose: "sentado", s: 1.5, nina: true })}${altavoz(190, 96, 3, P.azul)}${negra(150, 50, P.verde)}${negra(124, 40, P.naranja)}${suelo(158)}`),
    },
    {
      html: `<h3>Lento y rápido</h3><p>La música puede ir <mark>lenta</mark> o <mark>rápida</mark>. Eso se llama <b>velocidad</b> o tempo.</p><p>La música <b>lenta</b> va despacio, como una tortuga. Nos calma y nos ayuda a descansar.</p><p>La música <b>rápida</b> va deprisa, como una liebre. Nos da energía y ganas de saltar y bailar.</p>`,
      svg: svg("Una tortuga para la música lenta y una liebre para la música rápida", `${tortuga(70, 110, 1.4)}${etq(70, 146, "lenta", P.verde, 15)}${liebre(196, 110, 1.4)}${etq(196, 146, "rápida", P.rojo, 15)}`),
      video: V("mu6b"),
    },
    {
      html: `<h3>¿Cómo lo notamos?</h3><p>Para saber si la música es lenta o rápida, nos fijamos en el <mark>pulso</mark>.</p><p>Damos palmas siguiendo la música. Si las palmas van separadas, despacio, la música es <b>lenta</b>. Si las palmas van seguidas, deprisa, es <b>rápida</b>.</p><p>También podemos caminar: pasos largos y tranquilos o pasitos rápidos.</p>`,
      svg: svg("Pulsos separados para la música lenta y pulsos juntos para la música rápida", `${etq(40, 58, "lenta", P.verde, 13)}${[0, 1, 2].map((i) => negra(84 + i * 64, 66, P.verde)).join("")}${etq(40, 136, "rápida", P.rojo, 13)}${[0, 1, 2, 3, 4, 5, 6].map((i) => negra(80 + i * 24, 144, P.rojo)).join("")}`),
    },
    {
      html: `<h3>Acelerar y frenar</h3><p>A veces la música <mark>cambia de velocidad</mark> en mitad de la canción.</p><p><b>Acelerar</b> es ir cada vez más rápido, como un tren que arranca. <b>Frenar</b> es ir cada vez más lento, como un tren que llega a la estación.</p><p>Muchas canciones acaban frenando poco a poco, para que sepamos que terminan.</p>`,
      svg: svg("Un tren que acelera con flechas que crecen y otro que frena con flechas que se acortan", `${flechaVel(20, 64, 36, P.rojo, "")}${flechaVel(68, 64, 60, P.rojo, "")}${flechaVel(140, 64, 96, P.rojo, "")}${etq(130, 40, "acelerar: cada vez más rápido", P.rojo, 12)}${flechaVel(20, 140, 96, P.azul, "")}${flechaVel(128, 140, 60, P.azul, "")}${flechaVel(200, 140, 36, P.azul, "")}${etq(130, 116, "frenar: cada vez más lento", P.azul, 12)}`),
    },
    {
      html: `<h3>Música que cuenta</h3><p>Los compositores usan la velocidad para <mark>contar cosas</mark> sin palabras.</p><p>Una música lenta puede ser un elefante caminando, una noche tranquila o alguien triste. Una música rápida puede ser un caballo galopando, una persecución o una fiesta.</p><p>Cuando escuches, imagina: ¿qué historia te cuenta esta música?</p>`,
      svg: svg("Un elefante caminando despacio y un caballo galopando deprisa, imaginados al escuchar música", `<g transform="translate(70 120)"><ellipse cx="0" cy="-28" rx="34" ry="22" fill="${P.gris}" stroke="var(--ink)"/><circle cx="-34" cy="-38" r="14" fill="${P.gris}" stroke="var(--ink)"/><path d="M-44 -30 q-6 20 4 30" stroke="${P.gris}" stroke-width="7" fill="none"/>${[-22, -6, 10, 24].map((x) => `<rect x="${x}" y="-10" width="9" height="20" fill="${P.gris}" stroke="var(--ink)" stroke-width=".8"/>`).join("")}<circle cx="-38" cy="-42" r="2" fill="var(--ink)"/></g>${etq(70, 150, "lento: elefante", P.verde, 12)}<g transform="translate(196 116)"><ellipse cx="0" cy="-26" rx="28" ry="14" fill="${P.marron}" stroke="var(--ink)"/><path d="M18 -34 L30 -56 L40 -52 L30 -30z" fill="${P.marron}" stroke="var(--ink)"/><ellipse cx="42" cy="-54" rx="13" ry="7" fill="${P.marron}" stroke="var(--ink)" transform="rotate(25 42 -54)"/><path d="M30 -60 l2 -8 l4 6" fill="${P.marron}" stroke="var(--ink)"/><circle cx="40" cy="-57" r="1.6" fill="var(--ink)"/><path d="M26 -54 l-6 8 M22 -46 l-6 8" stroke="var(--ink)" stroke-width="2"/><path d="M-20 -16 L-34 -2 M-10 -16 L-14 4 M14 -16 L28 0 M22 -18 L38 -10" stroke="${P.marron}" stroke-width="5" stroke-linecap="round"/><path d="M-28 -32 q-14 -4 -18 8" stroke="var(--ink)" stroke-width="3" fill="none"/></g>${etq(196, 150, "rápido: caballo", P.rojo, 12)}`),
    },
    {
      html: `<h3>El musicograma</h3><p>Un <mark>musicograma</mark> es un dibujo que nos guía mientras escuchamos.</p><p>Cada dibujo representa una parte de la música. Seguimos los dibujos con el dedo, al ritmo, de izquierda a derecha.</p><p>Si la música es rápida, el dedo va deprisa. Si es lenta, va despacio. Así «vemos» la música con los ojos. ¡Es como leer una historia!</p>`,
      svg: svg("Un musicograma con dibujos en fila: tortugas, liebres y un dedo que los sigue", `<rect x="16" y="44" width="228" height="80" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${tortuga(48, 96, 0.6)}${tortuga(90, 96, 0.6)}${liebre(140, 96, 0.55)}${liebre(176, 96, 0.55)}${liebre(212, 96, 0.55)}<path d="M30 140 H230" stroke="var(--pen)" stroke-width="3" stroke-dasharray="6 5"/><path d="M230 140 l-10 -6 v12z" fill="var(--pen)"/>${etq(130, 164, "seguimos con el dedo", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>Nos movemos con la música</h3><p>Una forma divertida de escuchar es <mark>moverse</mark> según la velocidad.</p><p>Con música lenta, caminamos como gigantes, despacio y con pasos grandes. Con música rápida, corremos de puntillas como ratoncitos.</p><p>Cuando la música para, ¡nos quedamos como estatuas! Hay que escuchar muy bien para no equivocarse.</p>`,
      svg: svg("Un niño camina despacio como un gigante y una niña corre de puntillas como un ratón", `${nino(70, 156, { c: P.verde, pose: "pie", s: 1.6 })}${etq(70, 172, "lento: gigante", P.verde, 12)}${nino(196, 156, { c: P.rojo, pose: "corre", s: 1, nina: true })}${etq(196, 172, "rápido: ratón", P.rojo, 12)}${suelo(158)}`),
    },
    {
      html: `<h3>Lento, rápido y emociones</h3><p>La velocidad cambia <mark>cómo nos sentimos</mark>.</p><p>La música lenta puede darnos calma, sueño o un poco de pena. La música rápida puede darnos alegría, nervios o ganas de correr.</p><p>No hay respuestas buenas o malas: cada persona siente la música a su manera. Lo importante es escucharla y contar qué sentimos.</p>`,
      svg: svg("Caras: tranquila y dormida para la música lenta, alegre y nerviosa para la rápida", `${[["calma", P.celeste, "M-8 6 q8 5 16 0"], ["sueño", P.morado, "M-6 8 h12"], ["alegría", P.amarillo, "M-10 4 q10 10 20 0"], ["nervios", P.naranja, "M-8 8 q4 -4 8 0 q4 4 8 0"]].map(([t, c, b], i) => `<g transform="translate(${40 + i * 60} 80)"><circle r="22" fill="${c}" stroke="var(--ink)"/><circle cx="-7" cy="-5" r="2.5" fill="var(--ink)"/><circle cx="7" cy="-5" r="2.5" fill="var(--ink)"/><path d="${b}" stroke="var(--ink)" stroke-width="2" fill="none"/></g>${etq(40 + i * 60, 124, t)}`).join("")}${etq(70, 156, "lenta", P.verde, 13)}${etq(190, 156, "rápida", P.rojo, 13)}`),
    },
    {
      html: `<h3>Jugamos a las estatuas musicales</h3><p>El profesor pone <mark>músicas distintas</mark>: unas lentas y otras rápidas.</p><p>Con música lenta, nadamos despacio como peces. Con música rápida, volamos deprisa como abejas.</p><p>Cuando la música se para, todos quietos como estatuas. ¡El que se mueve, ayuda al profesor a elegir la siguiente música!</p>`,
      svg: svg("Niños que bailan y se quedan quietos como estatuas cuando la música se para", `${nino(50, 154, { c: P.azul, pose: "baila", s: 1.1 })}${nino(110, 154, { c: P.rojo, pose: "arriba", s: 1.1, nina: true })}${nino(170, 154, { c: P.verde, pose: "equilibrio", s: 1.1 })}<rect x="200" y="30" width="50" height="40" rx="8" fill="var(--card)" stroke="var(--ink)"/><rect x="214" y="40" width="7" height="20" fill="${P.rojo}"/><rect x="229" y="40" width="7" height="20" fill="${P.rojo}"/>${etq(225, 88, "¡quietos!", P.rojo, 12)}${suelo(156)}`),
    },
  ],
  figura: {
    titulo: "Lento y rápido",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Una tortuga para la música lenta con pulsos separados y una liebre para la rápida con pulsos juntos"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 40, "¿A qué velocidad va la música?", { size: 22, color: "var(--pen)" })}<rect x="30" y="64" width="280" height="210" rx="16" fill="var(--card)" stroke="${P.verde}" stroke-width="3"/>${tortuga(150, 170, 2.4)}${rot(100, 100, "LENTA", { size: 22, color: P.verde })}${[0, 1, 2].map((i) => negra(90 + i * 80, 250, P.verde)).join("")}<rect x="330" y="64" width="280" height="210" rx="16" fill="var(--card)" stroke="${P.rojo}" stroke-width="3"/>${liebre(500, 200, 1.8)}${rot(400, 100, "RÁPIDA", { size: 22, color: P.rojo })}${[0, 1, 2, 3, 4, 5, 6].map((i) => negra(380 + i * 34, 250, P.rojo)).join("")}</svg>`,
  },
  video: V("mu6v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Escucha una nana. ¿Va lenta o rápida?",
      pasos: ["Da palmas siguiendo la música.", "Las palmas van separadas y tranquilas.", "Te da sueño y calma."],
      resultado: "La nana es lenta." },
    { enunciado: "La música empieza despacio y cada vez va más deprisa.",
      pasos: ["Al principio, pasos tranquilos.", "Luego, pasos más seguidos.", "Al final, corremos."],
      resultado: "La música acelera." },
    { enunciado: "¿Qué animal pondrías a una música rápida?",
      pasos: ["Piensa en animales que se mueven deprisa.", "Liebre, caballo, abeja, ratón…", "Elige el que más te guste."],
      resultado: "Por ejemplo, un caballo galopando." },
  ],
  errores: [
    "Confundir rápido con fuerte: una música puede ser rápida y suave.",
    "Hablar mientras escuchamos: así no se oyen los detalles.",
    "Moverse siempre igual, sin escuchar si la música cambia.",
    "Pensar que solo hay una forma correcta de sentir una música.",
  ],
  ejercicios: [
    { q: "¿Qué es la velocidad en la música?", sol: "Si va despacio (lenta) o deprisa (rápida). También se llama tempo." },
    { q: "Nombra un animal para la música lenta.", sol: "Tortuga, elefante, caracol…" },
    { q: "Nombra un animal para la música rápida.", sol: "Liebre, caballo, abeja, ratón…" },
    { q: "¿Qué significa acelerar?", sol: "Ir cada vez más rápido." },
    { q: "¿Qué significa frenar?", sol: "Ir cada vez más lento." },
    { q: "¿Cómo podemos saber si una música es rápida?", sol: "Dando palmas o caminando: si las palmas o pasos van seguidos, es rápida." },
    { q: "¿Qué es un musicograma?", sol: "Un dibujo que nos guía mientras escuchamos la música." },
    { q: "¿Cómo te sientes con una música lenta?", sol: "Respuesta libre: calma, sueño, tranquilidad…" },
    { q: "Canta una canción primero lenta y luego rápida.", sol: "Respuesta libre." },
    { q: "Escucha una música y dibuja lo que te imaginas.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "Una nana suele ser…", o: ["lenta", "rapidísima", "muy fuerte"], a: 0, e: "Para dormir." },
    { q: "La música de una carrera suele ser…", o: ["rápida", "lenta", "silenciosa"], a: 0, e: "Rápida." },
    { q: "La tortuga representa la música…", o: ["lenta", "rápida", "aguda"], a: 0, e: "Lenta." },
    { q: "Ir cada vez más rápido es…", o: ["acelerar", "frenar", "parar"], a: 0, e: "Acelerar." },
    { q: "Ir cada vez más lento es…", o: ["frenar", "acelerar", "gritar"], a: 0, e: "Frenar." },
    { q: "Si las palmas van muy seguidas, la música es…", o: ["rápida", "lenta", "grave"], a: 0, e: "Rápida." },
    { q: "Para escuchar bien estamos…", o: ["en silencio", "hablando", "saltando"], a: 0, e: "En silencio." },
    { q: "Un musicograma se sigue con…", o: ["el dedo", "los pies", "una tijera"], a: 0, e: "Con el dedo." },
    { q: "Con música rápida corremos como…", o: ["ratoncitos", "gigantes", "estatuas"], a: 0, e: "Ratoncitos." },
    { q: "Muchas canciones terminan…", o: ["frenando", "acelerando siempre", "gritando"], a: 0, e: "Frenando poco a poco." },
  ],
  examen: [
    { q: "La velocidad de la música también se llama…", o: ["tempo", "color", "volumen"], a: 0, e: "Tempo." },
    { q: "Una música rápida puede ser…", o: ["suave", "solo fuerte", "siempre triste"], a: 0, e: "Rápido no es fuerte." },
    { q: "Un elefante caminando sería música…", o: ["lenta", "rápida", "aguda"], a: 0, e: "Lenta." },
    { q: "Al escuchar música, cada persona siente…", o: ["a su manera", "lo mismo", "nada"], a: 0, e: "A su manera." },
  ],
  feynman: ["Cómo escuchar música con atención", "Cómo saber si una música es lenta o rápida", "Qué es acelerar y frenar"],
  mapa: mapa("LENTO Y RÁPIDO", "var(--pri)", [
    ["Escuchar", "en silencio, atentos", "#1e88e5"],
    ["Lento", "tortuga, calma", "#43a047"],
    ["Rápido", "liebre, energía", "#e53935"],
    ["Cambios", "acelerar, frenar", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Escuchar", "En silencio y con atención"],
    ["Velocidad", "Lo deprisa o despacio que va la música"],
    ["Lento", "Despacio, como una tortuga"],
    ["Rápido", "Deprisa, como una liebre"],
    ["Acelerar", "Cada vez más rápido"],
    ["Frenar", "Cada vez más lento"],
    ["Musicograma", "Dibujo que guía la escucha"],
    ["Estatuas", "Quietos cuando la música para"],
  ],
  familias: [
    "Escuchad juntos una nana y una música de fiesta, y comparad la velocidad.",
    "Jugad a las estatuas musicales en casa.",
    "Cantad una canción conocida cada vez más rápido y luego frenando.",
    "Preguntad qué animal se imagina al escuchar una música.",
  ],
  profesores: PROF("Música: escucha activa; tempo (lento, rápido) y agógica (accelerando, ritardando); musicograma; respuesta corporal al tempo; emociones asociadas a la música", ["Audición activa con musicograma.", "Desplazamientos según el tempo.", "Juego de estatuas musicales."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir fuerte y suave además de lento y rápido", "Conocer obras famosas lentas y rápidas", "Reconocer el director de orquesta y sus gestos", "Comportarse bien en un concierto"],
  lectura: { titulo: "El concierto de Martina", html: `<p>Martina fue por primera vez a un concierto de verdad, en un gran auditorio. Llevaba su vestido favorito y estaba muy nerviosa.</p><p>Las luces se apagaron y apareció la <b>orquesta</b>: más de cincuenta músicos con violines, flautas, trompetas y tambores. Al final entró el <b>director</b>, y todo el público aplaudió.</p><p>El director levantó la batuta y… ¡empezó la música!</p><p>Primero sonó una música <b>lenta</b> y <b>suave</b>, como un río tranquilo. Martina cerró los ojos e imaginó un cisne nadando.</p><p>De pronto, la música se volvió <b>rápida</b> y <b>fuerte</b>. Los tambores retumbaban y los violines corrían. ¡Parecía una tormenta! Martina abrió los ojos de golpe.</p><p>Al final, la música fue frenando poco a poco, cada vez más suave… hasta el silencio.</p><p>Martina quiso aplaudir, pero su madre le susurró:</p><p>—Espera a que el director baje los brazos.</p><p>Cuando el director se giró hacia el público, todo el auditorio aplaudió. Martina, la que más.</p>` },
  tras: {
    "Lento y rápido": [
      ["Fuerte y suave", `<p>Además de <b>lenta</b> o <b>rápida</b>, la música puede ser <mark>fuerte</mark> o <mark>suave</mark>. ¡No es lo mismo!</p><ul><li><b>Lento</b> y <b>rápido</b> hablan de la <b>velocidad</b>.</li><li><b>Fuerte</b> y <b>suave</b> hablan del <b>volumen</b> (la intensidad).</li></ul><p>Una música puede ser:</p><ul><li><b>Lenta y suave</b>: una nana.</li><li><b>Lenta y fuerte</b>: una marcha solemne con tambores.</li><li><b>Rápida y suave</b>: unos ratoncitos corriendo de puntillas.</li><li><b>Rápida y fuerte</b>: una tormenta o una carrera.</li></ul><p>En las partituras, los músicos escriben <b><i>f</i></b> (forte) para fuerte y <b><i>p</i></b> (piano) para suave.</p><p>Cuando la música se va haciendo más fuerte poco a poco se llama <b>crescendo</b>.</p><p><b>Actividad</b>: tocad un tambor de las cuatro formas: lento-suave, lento-fuerte, rápido-suave y rápido-fuerte.</p>`,
        L6.filas("Música", [["lenta + suave", "nana", cAZ], ["lenta + fuerte", "marcha", cMO], ["rápida + suave", "ratones", cVE], ["rápida + fuerte", "tormenta", cRO]])],
    ],
    "Acelerar y frenar": [
      ["El director de orquesta", `<p>El <mark>director</mark> de orquesta no toca ningún instrumento, pero es muy importante: dirige a todos los músicos con sus <b>gestos</b>.</p><ul><li>Usa una <b>batuta</b>: un palito fino y blanco.</li><li>Con la mano derecha marca el <b>pulso</b> y la velocidad.</li><li>Con la izquierda indica el <b>volumen</b>: si la sube, más fuerte; si la baja, más suave.</li><li>Si mueve la batuta <b>deprisa</b>, la música va rápida; si la mueve <b>despacio</b>, va lenta.</li><li>Con la mirada indica a cada grupo cuándo debe <b>entrar</b>.</li><li>Cuando cierra la mano, la música <b>para</b>.</li></ul><p>Todos los músicos le miran de vez en cuando para tocar juntos y a la vez.</p><p><b>Actividad</b>: haz de director con un lápiz y dirige a la clase mientras canta: más rápido, más lento, más fuerte y más suave.</p>`,
        H6.rueda("Director", "BATUTA", [["rápido", cRO], ["lento", cAZ], ["fuerte", cNA], ["suave", cVE]])],
    ],
    "Música que cuenta": [
      ["Obras lentas y rápidas", `<p>Algunas obras de música clásica son famosas por ser muy <mark>lentas</mark> o muy <mark>rápidas</mark>:</p><p><b>Lentas</b>:</p><ul><li><b>El cisne</b>, de Saint-Saëns: un violonchelo suave como un cisne deslizándose por el lago.</li><li><b>Claro de luna</b>, de Debussy: tranquila como una noche.</li><li><b>La canción de cuna</b>, de Brahms.</li></ul><p><b>Rápidas</b>:</p><ul><li><b>El vuelo del moscardón</b>, de Rimski-Kórsakov: notas rapidísimas que imitan el zumbido de un insecto.</li><li><b>En la gruta del rey de la montaña</b>, de Grieg: empieza lenta y va acelerando hasta ser frenética.</li><li><b>La marcha turca</b>, de Mozart.</li></ul><p>Escuchar estas obras nos ayuda a imaginar historias y a reconocer la velocidad.</p><p><b>Actividad</b>: escucha El vuelo del moscardón y vuela por la clase como un moscardón.</p>`,
        H6.dos("Obras", ["LENTAS", ["El cisne", "Claro de luna", "Brahms"], cAZ], ["RÁPIDAS", ["Moscardón", "Grieg", "Mozart"], cRO]),
        ["M93qXQWaBdE", "El vuelo del moscardón - Rimski-Kórsakov", "Rousseau", 28391170]],
    ],
    "Lento, rápido y emociones": [
      ["En el concierto", `<p>Ir a un <mark>concierto</mark> es una experiencia especial. Hay que saber comportarse:</p><ul><li><b>Llegar puntuales</b>, antes de que empiece.</li><li><b>Apagar</b> los móviles.</li><li><b>No hablar</b> ni hacer ruido mientras suena la música.</li><li><b>No comer</b> en la sala.</li><li><b>Aplaudir</b> al principio, cuando sale el director, y al final de la obra.</li><li>Esperar a que el director <b>baje los brazos</b> antes de aplaudir: a veces hay silencios en medio de la obra.</li><li>Si la música dura mucho, cerrar los ojos e <b>imaginar</b> una historia.</li></ul><p>Los músicos han ensayado muchísimas horas. Escucharles con atención es una forma de respetar su trabajo.</p><p>Hay conciertos especiales para familias y niños en muchos auditorios.</p><p><b>Actividad</b>: organizad un concierto en clase y practicad cómo ser un buen público.</p>`,
        H6.flujo("Concierto", ["llegar|puntual", "silencio|escuchar", "brazos abajo|esperar", "¡aplaudir!|final"], cNA)],
    ],
  },
  final: [
    ["Dibujar la música", `<p>Mientras escuchamos música, podemos <mark>dibujar</mark> lo que sentimos:</p><ul><li>Música <b>lenta</b>: líneas largas, onduladas y suaves, como olas.</li><li>Música <b>rápida</b>: líneas cortas, puntos, zigzags.</li><li>Música <b>fuerte</b>: trazos gruesos, colores oscuros o intensos, apretando el lápiz.</li><li>Música <b>suave</b>: trazos finos, colores claros, sin apretar.</li><li>Música <b>alegre</b>: colores cálidos como el amarillo o el naranja.</li><li>Música <b>triste</b>: colores fríos como el azul o el gris.</li></ul><p>No hay dibujos correctos o incorrectos: cada persona siente la música a su manera.</p><p>Algunos pintores famosos, como Kandinsky, pintaban escuchando música. Decía que veía los colores de los sonidos.</p><p><b>Actividad</b>: escucha dos obras, una lenta y otra rápida, y dibuja cada una con ceras.</p>`,
      L6.filas("Dibujar", [["lenta", "olas", cAZ], ["rápida", "zigzag", cRO], ["fuerte", "trazo grueso", cMO], ["suave", "trazo fino", cVE]])],
    ["Repaso: el concierto de Martina", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Martina va a un <b>auditorio</b>: un lugar para conciertos.</li><li>La <b>orquesta</b> tiene más de cincuenta músicos.</li><li>El <b>director</b> entra el último y levanta la <b>batuta</b>.</li><li>Primero, música <b>lenta y suave</b>: un cisne.</li><li>Después, <b>rápida y fuerte</b>: una tormenta.</li><li>Al final, frena y se hace <b>suave</b> hasta el <b>silencio</b>.</li><li>Hay que esperar a que el director <b>baje los brazos</b> para aplaudir.</li></ul><p>La música puede hacernos imaginar historias y sentir emociones, sin necesidad de palabras.</p><p><b>Actividad</b>: inventa qué historia imaginarías tú con una música lenta y otra rápida.</p>`,
      H6.flujo("Martina", ["lenta|cisne", "rápida|tormenta", "frena|silencio", "brazos|¡aplauso!"], cMO)],
  ],
  ejemplos: [
    ["Una nana, ¿cómo es?", ["Para dormir a un bebé."], "Lenta y suave."],
    ["¿Qué indica el director subiendo la mano izquierda?", ["La izquierda marca el volumen."], "Que toquen más fuerte."],
  ],
  errores: ["Confundir fuerte con rápido y suave con lento.", "Aplaudir en mitad de una obra, en un silencio."],
  ejercicios: [
    ["b", "¿Qué es más rápido, una nana o una tormenta?", "Una tormenta."],
    ["b", "¿Qué usa el director para dirigir?", "La batuta."],
    ["b", "¿Cómo se escribe fuerte en la partitura?", "f (forte)."],
    ["b", "Di una norma del concierto.", "No hablar, apagar el móvil…"],
    ["b", "¿Cómo es El vuelo del moscardón?", "Muy rápido."],
    ["m", "¿Qué diferencia hay entre rápido y fuerte?", "Rápido es velocidad; fuerte es volumen."],
    ["m", "¿Qué es un crescendo?", "Cuando la música se hace más fuerte poco a poco."],
    ["m", "¿Qué hace el director si cierra la mano?", "Parar la música."],
    ["m", "¿Con qué instrumento suena El cisne?", "Con el violonchelo."],
    ["m", "¿Cómo dibujas una música rápida?", "Con líneas cortas, puntos y zigzags."],
    ["a", "En la lectura, ¿qué imagina Martina con la música lenta?", "Un cisne nadando."],
    ["a", "¿Por qué la madre le dice que espere para aplaudir?", "Porque hay que esperar a que el director baje los brazos."],
    ["a", "Describe una música rápida y suave que te imagines.", "Respuesta libre."],
    ["a", "¿Cómo empieza y cómo acaba En la gruta del rey de la montaña?", "Empieza lenta y acaba muy rápida."],
  ],
  quiz: [
    ["Fuerte y suave hablan del…", ["volumen", "tamaño", "color"], "Volumen."],
    ["La batuta la usa el…", ["director", "violinista", "público"], "Director."],
    ["El vuelo del moscardón es…", ["rápido", "lento", "silencioso"], "Obras."],
    ["En el concierto se aplaude…", ["al final", "en cada nota", "nunca"], "Concierto."],
    ["Música suave se dibuja con trazo…", ["fino", "grueso", "negro"], "Dibujar."],
  ],
  examen: [
    ["En la lectura, ¿dónde es el concierto?", ["en un auditorio", "en la playa", "en el colegio"], "Lectura."],
    ["¿Qué parece la música rápida y fuerte?", ["una tormenta", "un cisne", "una nana"], "Repaso."],
  ],
  tarjetas: [
    ["Velocidad y volumen", "Lento/rápido es velocidad; fuerte/suave es volumen."],
    ["Director", "Batuta: derecha marca el pulso, izquierda el volumen."],
  ],
  glosario: [
    ["Volumen", "Lo fuerte o suave que suena algo."],
    ["Forte", "Fuerte, en las partituras: f."],
    ["Piano", "Suave, en las partituras: p."],
    ["Crescendo", "Ir haciéndose más fuerte poco a poco."],
    ["Director", "Persona que dirige una orquesta."],
    ["Batuta", "Palito que usa el director."],
    ["Auditorio", "Sala grande para conciertos."],
    ["Orquesta", "Grupo grande de músicos."],
    ["Obra", "Pieza de música compuesta por alguien."],
    ["Moscardón", "Insecto grande que zumba."],
  ],
  situacion: {
    titulo: "Pequeños directores",
    reto: "La clase hace una orquesta de instrumentos sencillos y por turnos cada alumno la dirige con una batuta.",
    pasos: ["Repartir instrumentos de percusión.", "Practicar los gestos del director: rápido, lento, fuerte, suave y parar.", "Cada alumno dirige un minuto a la orquesta.", "Hacer un concierto final y practicar ser buen público."],
    producto: "Un concierto dirigido por los alumnos.",
    evaluacion: ["Distingue lento-rápido y fuerte-suave.", "Conoce obras lentas y rápidas.", "Entiende los gestos del director.", "Se comporta bien en un concierto."],
  },
});
