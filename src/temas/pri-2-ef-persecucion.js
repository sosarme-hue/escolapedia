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
