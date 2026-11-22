// Educación Física 2º de Primaria: juegos de persecución. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, flechaR, cono, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const peto = (x, y, c, s = 1) => `<rect x="${x - 7 * s}" y="${y - 50 * s}" width="${14 * s}" height="${22 * s}" rx="${3 * s}" fill="${c}" opacity=".9"/>`;
const casa = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}" opacity=".25" stroke="${c}" stroke-width="2" stroke-dasharray="6 4"/>`;

module.exports = {
  materia: "Educación Física",
  curso: "2-primaria",
  titulo: "Juegos de persecución",
  minutos: 20,
  objetivos: ["Jugar a juegos de persecución respetando las normas", "Esquivar, cambiar de dirección y frenar a tiempo", "Pillar con suavidad y aceptar ser pillado"],
  claves: ["perseguir", "huir", "pillar", "esquivar", "casa", "liberar", "normas", "juego limpio"],
  pregunta: {
    texto: "¿Te gusta más perseguir o que te persigan?",
    respuesta: "En los <mark>juegos de persecución</mark> hacemos las dos cosas: unos <b>persiguen</b> y otros <b>huyen</b>. Luego cambiamos. Son juegos muy antiguos que nos ayudan a correr, esquivar y pensar rápido.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un juego de persecución?</h3><p>En un <mark>juego de persecución</mark>, uno o varios jugadores intentan <b>pillar</b> a los demás.</p><p>Los que huyen corren, esquivan y se esconden detrás de los compañeros. Cuando alguien es pillado, cambia de papel o queda quieto.</p><p>El clásico es <b>«el pilla-pilla»</b>: quien la «lleva» toca a otro y le pasa la tarea. ¡Fácil y muy divertido!</p>`,
      svg: svg("Un niño con un peto rojo persigue a dos niños que huyen", `${nino(60, 156, { c: P.rojo, pose: "corre", s: 1.4 })}${peto(60, 156, P.rojo, 1.4)}${etq(60, 174, "la lleva", P.rojo, 12)}${flechaR(96, 90, 130, 90, P.rojo)}${nino(160, 156, { c: P.azul, pose: "corre", s: 1.2 })}${nino(220, 156, { c: P.verde, pose: "corre", s: 1.2, nina: true })}${etq(190, 174, "huyen", P.azul, 12)}${suelo(158)}`),
      video: V("ef5b"),
    },
    {
      html: `<h3>Las normas</h3><p>Todo juego necesita <mark>normas</mark> claras que todos conocemos antes de empezar.</p><p>Se juega dentro del <b>campo</b>: salir de él es como ser pillado. Para pillar, basta con <b>tocar suave</b> en la espalda o el hombro: nunca empujar, agarrar ni tirar de la ropa.</p><p>Cuando suena el silbato, todos paramos y escuchamos.</p>`,
      svg: svg("Un campo marcado con conos, una mano que toca suave el hombro y un silbato", `<rect x="16" y="26" width="120" height="120" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6 4"/>${[[16, 26], [136, 26], [16, 146], [136, 146]].map(([x, y]) => cono(x, y + 12)).join("")}${etq(76, 168, "dentro del campo")}<path d="M176 80 q10 -20 26 -6 l14 -12 q6 4 0 10 l-10 12 q2 14 -14 16 z" fill="${P.piel}" stroke="var(--ink)"/>${etq(200, 120, "tocar suave", P.verde, 12)}<circle cx="200" cy="152" r="8" fill="${P.gris}" stroke="var(--ink)"/><rect x="206" y="146" width="22" height="10" rx="3" fill="${P.gris}" stroke="var(--ink)"/>`),
    },
    {
      html: `<h3>Esquivar</h3><p>Para que no nos pillen, hay que saber <mark>esquivar</mark>.</p><p>Esquivar es apartar el cuerpo justo cuando el otro va a tocarnos. Podemos hacer un <b>quiebro</b>: amagar hacia un lado y salir por el otro. O <b>frenar</b> en seco y cambiar de dirección.</p><p>Miramos siempre dónde está el que persigue, sin chocarnos con los compañeros.</p>`,
      svg: svg("Una niña hace un quiebro: amaga a un lado y sale por el otro mientras el perseguidor sigue de largo", `${nino(50, 156, { c: P.rojo, pose: "corre", s: 1.2 })}${peto(50, 156, P.rojo, 1.2)}<path d="M80 104 L130 100" stroke="${P.rojo}" stroke-width="3" stroke-dasharray="5 4"/>${flechaR(130, 100, 146, 99, P.rojo)}${nino(176, 156, { c: P.morado, pose: "corre", s: 1.2, nina: true })}<path d="M200 96 Q224 100 232 126" stroke="${P.verde}" stroke-width="3" fill="none"/>${flechaR(230, 120, 236, 140, P.verde)}${etq(130, 34, "amago y ¡quiebro!", P.verde, 14)}${suelo(158)}`),
    },
    {
      html: `<h3>Las casas o refugios</h3><p>En muchos juegos hay <mark>casas</mark>: zonas donde no te pueden pillar.</p><p>Pueden ser un aro, una línea o una esquina del patio. Pero no podemos quedarnos ahí para siempre: solo se aguanta contando hasta cinco.</p><p>Las casas hacen el juego más justo. Los que huyen pueden descansar un poco, y el que persigue tiene que buscar a otro.</p>`,
      svg: svg("Dos zonas de casa en las esquinas donde los niños están a salvo contando hasta cinco", `${casa(14, 30, 70, 60, P.verde)}${casa(176, 100, 70, 60, P.verde)}${nino(48, 86, { c: P.azul, pose: "arriba", s: 0.8 })}${nino(210, 156, { c: P.naranja, pose: "arriba", s: 0.8, nina: true })}${nino(130, 150, { c: P.rojo, pose: "corre", s: 1 })}${peto(130, 150, P.rojo)}${etq(48, 108, "1, 2, 3, 4, 5", P.verde, 11)}${etq(130, 30, "¡a salvo en casa!", P.verde, 13)}`),
    },
    {
      html: `<h3>Liberar a los compañeros</h3><p>En algunos juegos, quien es pillado se queda <mark>congelado</mark>, quieto como una estatua.</p><p>Los compañeros que siguen libres pueden <b>liberarlo</b>: por ejemplo, pasando por debajo de sus piernas o dándole la mano.</p><p>Así todos colaboran. El que persigue debe ser rápido, y los que huyen, valientes y buenos compañeros.</p>`,
      svg: svg("Un niño congelado con las piernas abiertas y una niña que pasa por debajo para liberarlo", `${nino(100, 156, { c: P.celeste, pose: "brazos", s: 1.6 })}<path d="M60 40 l6 6 M140 40 l-6 6 M100 28 v8" stroke="${P.azul}" stroke-width="3"/>${etq(100, 30, "congelado", P.azul, 12)}<g transform="translate(200 154) scale(1.3)"><path d="M-26 0 H10 M-26 0 L-30 10 M10 0 L14 10 M-6 0 L-14 -14" stroke="${P.rosa}" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="18" cy="-4" r="9" fill="${P.piel}"/></g>${flechaR(170, 140, 130, 150, P.rosa)}${etq(204, 176, "¡te libero!", P.rosa, 12)}${suelo(158)}`),
    },
    {
      html: `<h3>Juegos de equipos</h3><p>También hay juegos de persecución <mark>por equipos</mark>.</p><p>En <b>«policías y ladrones»</b>, un equipo persigue y otro huye. Los ladrones pillados van a la cárcel, y sus compañeros pueden rescatarlos.</p><p>En <b>«cortahílos»</b>, si alguien cruza entre el perseguidor y el perseguido, el perseguidor tiene que cambiar y perseguir al que ha cruzado.</p>`,
      svg: svg("Policías con peto azul persiguen a ladrones con peto amarillo y una zona de cárcel", `${[0, 1].map((i) => `${nino(40 + i * 44, 156, { c: P.azul, pose: "corre", s: 1 })}${peto(40 + i * 44, 156, P.azul)}`).join("")}${etq(62, 174, "policías", P.azul, 12)}${[0, 1].map((i) => `${nino(150 + i * 44, 156, { c: P.amarillo, pose: "corre", s: 1 })}${peto(150 + i * 44, 156, P.amarillo)}`).join("")}${etq(172, 174, "ladrones", "#a07800", 12)}<rect x="200" y="22" width="52" height="46" fill="none" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<path d="M${210 + i * 12} 22 V68" stroke="var(--ink)" stroke-width="2"/>`).join("")}${etq(226, 84, "cárcel", "var(--ink)", 11)}${suelo(158)}`),
    },
    {
      html: `<h3>Juego limpio</h3><p>Lo más importante es el <mark>juego limpio</mark>.</p><p>Si te pillan, lo aceptas sin enfadarte y cambias de papel. No vale decir «¡no me has tocado!» si sí te tocó. Tampoco vale salir del campo para escapar.</p><p>Y si alguien se cae, paramos y le ayudamos. Ganar no es lo más importante: lo importante es que todos nos divirtamos.</p>`,
      svg: svg("Un niño ayuda a levantarse a otro que se ha caído, y una mano con el pulgar arriba", `${nino(70, 156, { c: P.verde, pose: "palmas", s: 1.4 })}<g transform="translate(130 150)"><path d="M-10 0 L10 -6 M0 -3 L-6 -20 M0 -3 L10 6" stroke="${P.naranja}" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="-10" cy="-26" r="9" fill="${P.piel}"/></g><path d="M90 108 L116 120" stroke="${P.verde}" stroke-width="4"/><g transform="translate(206 92)"><rect x="-14" y="-6" width="26" height="28" rx="6" fill="${P.piel}" stroke="var(--ink)"/><rect x="-6" y="-30" width="10" height="28" rx="5" fill="${P.piel}" stroke="var(--ink)"/></g>${etq(206, 150, "¡juego limpio!", P.verde, 13)}${suelo(158)}`),
    },
    {
      html: `<h3>¿Para qué sirven?</h3><p>Los juegos de persecución nos hacen <mark>más rápidos y ágiles</mark>.</p><p>Entrenamos la velocidad de reacción: salir corriendo justo al oír la señal. Aprendemos a mirar a nuestro alrededor y a calcular distancias para no chocar.</p><p>Además, el corazón trabaja, los músculos se fortalecen y, sobre todo, ¡nos reímos mucho!</p>`,
      svg: svg("Cuatro beneficios: velocidad, reacción, mirar alrededor y corazón fuerte", `${[["velocidad", P.rojo], ["reacción", P.naranja], ["mirar alrededor", P.azul], ["corazón fuerte", P.verde]].map(([t, c], i) => `<rect x="${16 + (i % 2) * 122}" y="${30 + Math.floor(i / 2) * 66}" width="108" height="50" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${etq(70 + (i % 2) * 122, 60 + Math.floor(i / 2) * 66, t, c, 13)}`).join("")}`),
    },
    {
      html: `<h3>Jugamos a «la cadena»</h3><p>Empieza un solo jugador que <mark>la lleva</mark>. Cuando pilla a alguien, se dan la mano y persiguen juntos.</p><p>Cada nuevo pillado se une a la cadena. La cadena se va haciendo larga y solo pueden pillar los de los extremos.</p><p>Si la cadena se rompe, no vale pillar hasta unirse otra vez. ¡Gana el último que queda libre!</p>`,
      svg: svg("Una cadena de cuatro niños de la mano persigue a dos niños que quedan libres", `${[0, 1, 2, 3].map((i) => nino(30 + i * 36, 156, { c: P.rojo, pose: "brazos", s: 1 })).join("")}<path d="M30 110 H138" stroke="${P.rojo}" stroke-width="3"/>${etq(84, 174, "la cadena", P.rojo, 12)}${nino(200, 156, { c: P.azul, pose: "corre", s: 1 })}${nino(238, 156, { c: P.verde, pose: "corre", s: 1, nina: true })}${etq(218, 174, "libres", P.azul, 12)}${flechaR(150, 96, 180, 96, P.rojo)}${suelo(158)}`),
    },
  ],
  figura: {
    titulo: "Juegos de persecución",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Un perseguidor con peto rojo, niños que huyen y esquivan, y una casa donde están a salvo"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 40, "Perseguir · huir · esquivar", { size: 22, color: "var(--pen)" })}${casa(470, 80, 140, 180, P.verde)}${rot(540, 110, "casa", { size: 18, color: P.verde })}${nino(110, 262, { c: P.rojo, pose: "corre", s: 2 })}${peto(110, 262, P.rojo, 2)}${flechaR(170, 170, 230, 170, P.rojo)}${nino(300, 262, { c: P.azul, pose: "corre", s: 1.8 })}${nino(400, 262, { c: P.morado, pose: "corre", s: 1.8, nina: true })}${nino(540, 252, { c: P.naranja, pose: "arriba", s: 1.6 })}${suelo(264)}</svg>`,
  },
  video: V("ef5v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Juega al pilla-pilla con casas.",
      pasos: ["Uno la lleva, con un peto.", "Las casas son aros: dentro, a salvo hasta cinco.", "Si te pillan, te pones el peto."],
      resultado: "Todos corren, esquivan y descansan en casa." },
    { enunciado: "Te persiguen y tienes un compañero delante.",
      pasos: ["Mira dónde está el perseguidor.", "Haz un quiebro hacia el lado libre.", "No te choques con tu compañero."],
      resultado: "Esquivas sin chocar." },
    { enunciado: "Te pillan pero dices que no te tocaron.",
      pasos: ["Piensa: ¿me tocó de verdad?", "Si te tocó, acéptalo.", "Cambia de papel con buena cara."],
      resultado: "Eso es juego limpio." },
  ],
  errores: [
    "Empujar o agarrar de la ropa para pillar: solo se toca suave.",
    "Salir del campo para escapar.",
    "Quedarse en casa todo el rato: solo hasta cinco.",
    "Enfadarse al ser pillado: es parte del juego.",
  ],
  ejercicios: [
    { q: "¿Qué es un juego de persecución?", sol: "Un juego en que unos intentan pillar a otros que huyen." },
    { q: "¿Cómo se pilla correctamente?", sol: "Tocando suave en la espalda o el hombro." },
    { q: "¿Qué es esquivar?", sol: "Apartar el cuerpo para que no nos toquen." },
    { q: "¿Qué es un quiebro?", sol: "Amagar hacia un lado y salir por el otro." },
    { q: "¿Para qué sirven las casas?", sol: "Para estar a salvo un momento; hacen el juego más justo." },
    { q: "¿Cómo se libera a un compañero congelado?", sol: "Pasando bajo sus piernas o dándole la mano, según el juego." },
    { q: "Explica «policías y ladrones».", sol: "Un equipo persigue y otro huye; los pillados van a la cárcel y pueden ser rescatados." },
    { q: "¿Qué es el juego limpio?", sol: "Respetar las normas, aceptar ser pillado y ayudar a los demás." },
    { q: "Pregunta en casa a qué juegos de persecución jugaban de pequeños.", sol: "Respuesta libre." },
    { q: "Inventa una norma nueva para el pilla-pilla.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "Quien persigue en el pilla-pilla…", o: ["la lleva", "descansa", "es el árbitro"], a: 0, e: "La lleva." },
    { q: "Para pillar…", o: ["tocamos suave", "empujamos", "agarramos la ropa"], a: 0, e: "Suave." },
    { q: "Salir del campo es…", o: ["como ser pillado", "una buena idea", "obligatorio"], a: 0, e: "No vale." },
    { q: "Un quiebro sirve para…", o: ["esquivar", "pillar más fuerte", "parar el juego"], a: 0, e: "Esquivar." },
    { q: "En la casa estamos…", o: ["a salvo un momento", "pillados", "eliminados para siempre"], a: 0, e: "Hasta cinco." },
    { q: "Un compañero congelado se puede…", o: ["liberar", "empujar", "olvidar"], a: 0, e: "Liberar." },
    { q: "En «la cadena» pillan los de…", o: ["los extremos", "el medio", "nadie"], a: 0, e: "Extremos." },
    { q: "Si alguien se cae…", o: ["paramos y ayudamos", "seguimos corriendo", "nos reímos"], a: 0, e: "Ayudamos." },
    { q: "Al oír el silbato…", o: ["paramos y escuchamos", "corremos más", "gritamos"], a: 0, e: "Paramos." },
    { q: "Lo más importante es…", o: ["divertirnos todos", "ganar siempre", "no correr"], a: 0, e: "Divertirnos." },
  ],
  examen: [
    { q: "Los juegos de persecución mejoran la…", o: ["velocidad de reacción", "caligrafía", "vista nocturna"], a: 0, e: "Reacción." },
    { q: "En «cortahílos», si alguien cruza…", o: ["el perseguidor le persigue a él", "se acaba el juego", "todos paran"], a: 0, e: "Cambia de perseguido." },
    { q: "Aceptar ser pillado es…", o: ["juego limpio", "hacer trampa", "aburrido"], a: 0, e: "Juego limpio." },
    { q: "Las normas se explican…", o: ["antes de empezar", "al final", "nunca"], a: 0, e: "Antes." },
  ],
  feynman: ["Qué es un juego de persecución y sus normas", "Cómo esquivar y para qué sirven las casas", "Qué es el juego limpio"],
  mapa: mapa("PERSECUCIÓN", "var(--pri)", [
    ["Perseguir", "pillar tocando suave", "#e53935"],
    ["Huir", "esquivar, quiebro", "#1e88e5"],
    ["Casas", "a salvo hasta cinco", "#43a047"],
    ["Juego limpio", "normas, aceptar, ayudar", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Pillar", "Tocar suave a otro jugador"],
    ["La lleva", "Quien persigue"],
    ["Esquivar", "Apartarse para no ser tocado"],
    ["Quiebro", "Amagar a un lado y salir por el otro"],
    ["Casa", "Zona a salvo un momento"],
    ["Congelado", "Quieto hasta que te liberan"],
    ["La cadena", "Los pillados se dan la mano"],
    ["Juego limpio", "Respetar normas y compañeros"],
  ],
  familias: [
    "Jugad al pilla-pilla en el parque con casas en los árboles.",
    "Preguntad a los abuelos a qué juegos de persecución jugaban.",
    "Jugad a «la cadena» en familia.",
    "Hablad de qué hacer si alguien hace trampa en un juego.",
  ],
  profesores: PROF("Educación Física: juegos de persecución individuales y por equipos; esquivas, fintas y cambios de dirección; velocidad de reacción; percepción espacial; normas, juego limpio y aceptación de roles", ["Pilla-pilla con zonas de refugio.", "Policías y ladrones con rescate.", "La cadena y cortahílos."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Jugar a juegos de persecución con distintos roles", "Usar estrategias sencillas para pillar y escapar", "Jugar al pañuelo con atención y velocidad", "Gestionar la victoria y la derrota"],
  lectura: { titulo: "Los zorros y las gallinas", html: `<p>En el recreo, la clase de segundo jugaba a «zorros y gallinas». Tres zorros intentaban pillar a las gallinas, que podían refugiarse en el gallinero: un círculo pintado en el suelo.</p><p>Lucas era zorro. Corría muy rápido, pero siempre perseguía a la misma gallina y nunca la pillaba.</p><p>—¡Así no! —le dijo Irene, que también era zorro—. Vamos a hacer un plan.</p><p>Irene explicó la estrategia: uno espera cerca del gallinero, otro empuja a las gallinas desde lejos y el tercero las rodea por un lado.</p><p>¡Funcionó! En dos minutos pillaron a cinco gallinas.</p><p>Pero entonces las gallinas también hicieron un plan: salieron todas a la vez por lados diferentes. ¡Los zorros no sabían a quién perseguir!</p><p>Al final, sonó el timbre. Nadie sabía quién había ganado, y no importaba. Todos estaban sudando, colorados y muertos de risa.</p><p>—¡Mañana yo quiero ser zorro! —gritó Mateo.</p><p>—¡Y yo gallina! —dijo Irene.</p><p>Y se fueron a clase charlando de sus próximos planes.</p>` },
  tras: {
    "Las normas": [
      ["Los roles del juego", `<p>En los juegos de persecución, cada jugador tiene un <mark>rol</mark> (un papel):</p><ul><li><b>Perseguidor</b> o «el que se la queda»: intenta pillar a los demás.</li><li><b>Perseguido</b>: intenta escapar sin que le pillen.</li><li><b>Salvador</b>: en algunos juegos, puede liberar a los compañeros pillados.</li><li><b>Pillado</b>: espera quieto, en la cárcel o como estatua, hasta que le salven o cambie el juego.</li></ul><p>Los roles <b>cambian</b> durante el juego o entre partidas, para que todos prueben todos los papeles.</p><p>Para que se note quién persigue, muchas veces lleva un <b>peto</b>, un pañuelo en la mano o una pelota blanda.</p><p>Es importante aceptar el rol que te toca: ser perseguidor también es divertido.</p><p><b>Actividad</b>: juega a «zorros y gallinas» y cambia de rol en cada partida.</p>`,
        L6.filas("Roles", [["perseguidor", "pilla", cRO], ["perseguido", "escapa", cAZ], ["salvador", "libera", cVE], ["pillado", "espera", cNA]])],
    ],
    "Esquivar": [
      ["Estrategias para pillar y escapar", `<p>En los juegos de persecución, pensar es tan importante como correr. Usamos <mark>estrategias</mark>:</p><p><b>Para pillar</b>:</p><ul><li>Elegir a un jugador que esté <b>cerca</b> y distraído.</li><li>Empujarlo hacia una <b>esquina</b> o una línea.</li><li>Ponerse de acuerdo con otros perseguidores para <b>rodear</b>.</li><li>No perseguir siempre al más rápido.</li></ul><p><b>Para escapar</b>:</p><ul><li>Estar <b>atento</b> y mirar dónde están los perseguidores.</li><li>Hacer <b>fintas</b>: amagar hacia un lado y salir por el otro.</li><li>Buscar los <b>espacios libres</b>.</li><li>Cambiar de <b>ritmo</b>: parar y salir de repente.</li></ul><p>Planear con el equipo hace que el juego sea más interesante y que todos participen.</p><p><b>Actividad</b>: antes de jugar, reúnete con tu equipo y decidid una estrategia.</p>`,
        H6.dos("Estrategia", ["PILLAR", ["cerca", "esquina", "rodear"], cRO], ["ESCAPAR", ["atento", "finta", "espacio"], cAZ]),
        ["12QfSiUzdvc", "3 juegos recreativos para Educación Física", "Edufisica", 291653]],
    ],
    "Liberar a los compañeros": [
      ["El pañuelo", `<p>El <mark>pañuelo</mark> es un juego tradicional de velocidad y atención.</p><ul><li>Se hacen <b>dos equipos</b>, uno a cada lado del campo, en fila.</li><li>Cada jugador tiene un <b>número</b>; los dos equipos tienen los mismos números.</li><li>En el centro, una persona sujeta un <b>pañuelo</b> con el brazo estirado.</li><li>Dice un número, por ejemplo «¡El tres!».</li><li>Los dos «treses» salen corriendo a por el pañuelo.</li><li>Quien lo coge debe volver a su campo sin que el otro le pille.</li><li>Si lo pillan, pierde. Si llega, gana un punto.</li></ul><p>También se puede hacer más difícil: decir sumas («¡dos más dos!») o que salgan dos números a la vez.</p><p>No se puede pasar la línea del centro sin el pañuelo.</p><p><b>Actividad</b>: jugad al pañuelo con sumas sencillas para saber quién sale.</p>`,
        H6.flujo("Pañuelo", ["número|«¡el 3!»", "correr|al centro", "coger|pañuelo", "volver|sin que pillen"], cNA)],
    ],
    "Juego limpio": [
      ["Ganar y perder", `<p>En todos los juegos unos <b>ganan</b> y otros <b>pierden</b>. Lo importante es saber hacer las dos cosas bien.</p><p><b>Cuando ganamos</b>:</p><ul><li>Nos alegramos <b>sin burlarnos</b> de nadie.</li><li>Damos la mano o felicitamos al otro equipo: «¡Buen partido!».</li><li>Reconocemos que todos han jugado.</li></ul><p><b>Cuando perdemos</b>:</p><ul><li>Es normal sentirse <b>triste</b> o un poco enfadado. Respiramos hondo.</li><li>Felicitamos al ganador.</li><li>Pensamos qué podemos <b>mejorar</b> la próxima vez.</li><li>No echamos la culpa a los compañeros ni al árbitro.</li></ul><p>Recuerda: lo más importante no es ganar, sino <mark>divertirse</mark>, aprender y jugar juntos. ¡Mañana hay otra partida!</p><p><b>Actividad</b>: al terminar cada juego, dad la mano a los del otro equipo diciendo «¡buen juego!».</p>`,
        H6.rueda("Juego", "RESPETO", [["felicitar", cVE], ["sin burlas", cAZ], ["mejorar", cNA], ["divertirse", cRO]])],
    ],
  },
  final: [
    ["Juegos de persecución del mundo", `<p>En todo el mundo los niños juegan a perseguirse. Algunos ejemplos:</p><ul><li><b>Inglaterra</b>: <i>tag</i> o <i>tig</i>, el pilla-pilla. Quien pilla dice «You're it!» (¡te la quedas!).</li><li><b>India</b>: el <b>kho-kho</b>. Los jugadores se sientan en fila mirando a lados distintos y el perseguidor solo puede cambiar de dirección dando la vuelta a un poste.</li><li><b>Brasil</b>: <b>pega-pega</b>, con muchas variantes.</li><li><b>Japón</b>: <b>onigokko</b>, «el juego del ogro». El que persigue es el oni (ogro).</li><li><b>España</b>: el <b>pilla-pilla</b>, el <b>tú la llevas</b>, la <b>cadena</b>, el <b>polis y cacos</b>.</li></ul><p>Aunque tengan nombres distintos, todos se parecen: correr, esquivar y reír.</p><p><b>Actividad</b>: jugad al «onigokko»: el ogro se pone una máscara de papel.</p>`,
      L6.filas("Mundo", [["Inglaterra", "tag", cAZ], ["India", "kho-kho", cNA], ["Japón", "onigokko", cRO], ["España", "pilla-pilla", cVE]])],
    ["Repaso: los zorros y las gallinas", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Los <b>zorros</b> son perseguidores; las <b>gallinas</b>, perseguidas.</li><li>El <b>gallinero</b> es el refugio: allí no te pueden pillar.</li><li>Lucas perseguía siempre a la misma: no usaba <b>estrategia</b>.</li><li>Irene propone un <b>plan</b>: esperar, empujar y rodear.</li><li>Las gallinas responden saliendo <b>todas a la vez</b> por lados diferentes.</li><li>Nadie sabe quién ha ganado… ¡y <b>no importa</b>!</li><li>Al día siguiente quieren <b>cambiar de rol</b>.</li></ul><p>Pensar en equipo hace que el juego sea mucho más divertido.</p><p><b>Actividad</b>: inventa un plan para las gallinas y otro para los zorros.</p>`,
      H6.flujo("Plan", ["esperar|gallinero", "empujar|lejos", "rodear|lado", "gallinas|a la vez"], cMO)],
  ],
  ejemplos: [
    ["¿Qué estrategia ayuda a pillar?", ["Trabajar con otros perseguidores."], "Rodear entre varios al jugador."],
    ["Has perdido el partido. ¿Qué haces?", ["Juego limpio."], "Felicito al ganador y pienso en mejorar."],
  ],
  errores: ["Perseguir siempre al más rápido sin estrategia.", "Burlarse del equipo que pierde."],
  ejercicios: [
    ["b", "¿Qué hace el perseguidor?", "Intenta pillar a los demás."],
    ["b", "¿Qué es un refugio?", "Un lugar donde no te pueden pillar."],
    ["b", "¿Qué se dice al otro equipo al terminar?", "¡Buen juego!"],
    ["b", "¿Cómo se llama el pilla-pilla en inglés?", "Tag."],
    ["b", "En el pañuelo, ¿qué tiene cada jugador?", "Un número."],
    ["m", "¿Qué es una finta?", "Amagar hacia un lado y salir por el otro."],
    ["m", "¿Por qué los roles cambian?", "Para que todos prueben todos los papeles."],
    ["m", "Di dos normas del pañuelo.", "Salir con tu número; no pasar la línea sin el pañuelo."],
    ["m", "¿Qué haces si te enfadas al perder?", "Respirar hondo y felicitar al ganador."],
    ["m", "¿Qué es el kho-kho?", "Un juego de persecución de la India."],
    ["a", "En la lectura, ¿qué error cometía Lucas?", "Perseguía siempre a la misma gallina."],
    ["a", "¿Qué plan hacen las gallinas?", "Salir todas a la vez por lados diferentes."],
    ["a", "Inventa un juego de persecución con un refugio.", "Respuesta libre."],
    ["a", "¿Por qué no importa quién gana en la lectura?", "Porque lo importante es divertirse juntos."],
  ],
  quiz: [
    ["El que libera a los pillados es el…", ["salvador", "perseguidor", "árbitro"], "Roles."],
    ["Amagar a un lado y salir por otro es una…", ["finta", "falta", "fila"], "Estrategia."],
    ["En el pañuelo gana quien…", ["vuelve sin que le pillen", "corre más lejos", "grita más"], "Pañuelo."],
    ["Al ganar hay que…", ["felicitar al otro", "burlarse", "irse"], "Deportividad."],
    ["El onigokko es de…", ["Japón", "India", "Brasil"], "Mundo."],
  ],
  examen: [
    ["En la lectura, ¿quién propone el plan?", ["Irene", "Lucas", "Mateo"], "Lectura."],
    ["¿Qué es el gallinero?", ["el refugio", "la cárcel", "la meta"], "Repaso."],
  ],
  tarjetas: [
    ["Roles", "Perseguidor, perseguido, salvador, pillado."],
    ["Juego limpio", "Ganar sin burlas, perder felicitando."],
  ],
  glosario: [
    ["Persecución", "Correr detrás de alguien para pillarle."],
    ["Rol", "Papel que tiene cada jugador."],
    ["Refugio", "Lugar seguro donde no te pillan."],
    ["Estrategia", "Plan para conseguir algo."],
    ["Finta", "Engaño con el cuerpo para despistar."],
    ["Rodear", "Ponerse alrededor."],
    ["Peto", "Camiseta sin mangas para distinguir equipos."],
    ["Deportividad", "Jugar con respeto y juego limpio."],
    ["Árbitro", "Persona que hace cumplir las normas."],
    ["Pañuelo", "Juego de correr a por un pañuelo."],
  ],
  situacion: {
    titulo: "Liga de persecución",
    reto: "La clase organiza una liga de juegos de persecución con equipos, estrategias y un premio a la deportividad.",
    pasos: ["Elegir cuatro juegos: zorros y gallinas, pañuelo, cadena y onigokko.", "Formar equipos y preparar estrategias.", "Jugar cambiando de rol y apuntar los resultados.", "Votar al equipo más deportivo."],
    producto: "Una liga de juegos con premio a la deportividad.",
    evaluacion: ["Asume distintos roles.", "Usa estrategias para pillar y escapar.", "Juega al pañuelo con atención.", "Gana y pierde con deportividad."],
  },
});
