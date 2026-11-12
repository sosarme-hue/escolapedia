// Música 1º de Primaria: música y movimiento.
const { mapa } = require("./_util");
const { svg, rot, big, nino, nota, corazon, suelo, flechaR, PROF, FUENTES } = require("./_pri1-dib");

const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
const cara = (x, y, tipo, c) => {
  const boca = { alegre: `<path d="M${x - 10} ${y + 6} q10 12 20 0" stroke="var(--ink)" stroke-width="3" fill="none"/>`, triste: `<path d="M${x - 10} ${y + 12} q10 -10 20 0" stroke="var(--ink)" stroke-width="3" fill="none"/>`, miedo: `<ellipse cx="${x}" cy="${y + 9}" rx="5" ry="7" fill="var(--ink)"/>` }[tipo];
  return `<circle cx="${x}" cy="${y}" r="24" fill="${c}"/><circle cx="${x - 8}" cy="${y - 6}" r="3" fill="var(--ink)"/><circle cx="${x + 8}" cy="${y - 6}" r="3" fill="var(--ink)"/>${boca}`;
};

module.exports = {
  materia: "Música",
  curso: "1-primaria",
  titulo: "Música y movimiento",
  minutos: 20,
  objetivos: ["Moverse siguiendo el pulso y el carácter de la música", "Representar con el cuerpo rápido y lento, fuerte y suave, agudo y grave", "Conocer bailes y danzas sencillas, también de Cataluña"],
  claves: ["bailar", "danza", "movimiento", "expresión", "corro", "sardana"],
  pregunta: {
    texto: "Cuando suena tu canción favorita, ¿qué le pasa a tu cuerpo?",
    respuesta: "¡Dan ganas de <mark>moverse</mark>! Los pies siguen el ritmo y los brazos bailan. La música y el movimiento van juntos.",
  },
  bloques: [
    {
      html: `<h3>La música nos mueve</h3><p>Cuando oímos música, el cuerpo quiere <mark>moverse</mark>.</p><p>Los pies dan golpecitos, la cabeza se mueve y los brazos bailan.</p><p>Moverse con la música es <b>escucharla</b> con todo el cuerpo. No hace falta saber bailar. Solo hay que escuchar y dejar que la música nos lleve.</p><p>¡Vamos a probarlo!</p>`,
      svg: svg("Tres niños bailan rodeados de notas musicales", `${nino(50, 150, { c: "var(--pen)", pose: "baila" })}${nino(130, 150, { c: "var(--inf)", nina: true, pose: "arriba" })}${nino(210, 150, { c: "var(--leaf)", pose: "baila" })}${nota(90, 50, "var(--red)")}${nota(170, 40, "var(--pen)")}${nota(236, 60, "var(--inf)")}${suelo(150)}${rot(130, 172, "¡A bailar!", { color: "var(--pen)", size: 15 })}`),
    },
    {
      html: `<h3>Nos movemos con el pulso</h3><p>La forma más fácil de bailar es seguir el <mark>pulso</mark>.</p><p>Damos un <b>paso</b> en cada pulso, como si marcháramos.</p><p>También podemos dar una palmada o saltar en cada pulso. Si todos seguimos el pulso, ¡nos movemos a la vez! Es como un ejército de soldaditos.</p><p>Si te pierdes, escucha y vuelve a entrar.</p>`,
      svg: svg("Un niño marcha con huellas regulares y corazones del pulso encima", `${[0, 1, 2, 3].map((i) => corazon(60 + i * 50, 40, 1)).join("")}${nino(70, 150, { c: "var(--pen)", pose: "corre", s: 1.1 })}${[0, 1, 2, 3].map((i) => `<ellipse cx="${110 + i * 36}" cy="${i % 2 ? 146 : 136}" rx="6" ry="10" fill="var(--pen)" opacity=".5"/>`).join("")}${suelo(150)}${rot(130, 172, "Un paso en cada pulso", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Rápido, lento, fuerte y suave</h3><p>El cuerpo puede <mark>imitar</mark> cómo es la música.</p><p>Si la música es <b>rápida</b>, nos movemos deprisa. Si es <b>lenta</b>, despacio, como en las nubes.</p><p>Si suena <b>fuerte</b>, damos pasos grandes, como un gigante. Si suena <b>suave</b>, vamos de puntillas, como un ratón. ¡Escucha y cambia!</p><p>Así el cuerpo cuenta lo que oye.</p>`,
      svg: svg("Cuatro tarjetas: un niño corriendo, otro andando despacio, otro dando pasos grandes y otro de puntillas", `${[["rápido", "corre", "var(--inf)"], ["lento", "pie", "var(--leaf)"], ["fuerte", "salta", "var(--red)"], ["suave", "arriba", "var(--water)"]].map(([t, pose, c], i) => `<rect x="${12 + i * 61}" y="22" width="54" height="120" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>${nino(39 + i * 61, 118, { c, pose, s: 0.75 })}${etq(39 + i * 61, 134, t, c, 12)}`).join("")}${rot(130, 166, "El cuerpo imita la música", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>Arriba y abajo</h3><p>Los sonidos <mark>agudos</mark> son finitos, como un pajarito. Cuando suenan, nos estiramos hacia <b>arriba</b>, de puntillas.</p><p>Los sonidos <mark>graves</mark> son gordos, como un oso. Cuando suenan, nos agachamos hacia <b>abajo</b>.</p><p>Escucha un piano: si toca a la derecha, ¡arriba! Si toca a la izquierda, ¡abajo!</p><p>Es como un ascensor de sonidos.</p>`,
      svg: svg("Una niña estirada hacia arriba con un sonido agudo y un niño agachado con un sonido grave", `${nino(80, 150, { c: "var(--water)", nina: true, pose: "arriba", s: 1.2 })}${flechaR(124, 120, 124, 40, "var(--water)")}${etq(80, 30, "agudo", "var(--water)", 15)}${nino(190, 150, { c: "#8a5a2b", pose: "agacha", s: 1.2 })}${flechaR(236, 60, 236, 140, "#8a5a2b")}${etq(190, 44, "grave", "#8a5a2b", 15)}${suelo(150)}${rot(130, 172, "Agudo arriba · grave abajo", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>Bailes y danzas</h3><p>Una <mark>danza</mark> es un baile con pasos que se repiten. Se puede bailar en <b>corro</b>, en fila o por parejas.</p><p>Hay danzas tradicionales de cada lugar. En Cataluña se baila la <b>sardana</b>: todos en corro, de la mano y con los brazos arriba.</p><p>En Aragón se baila la jota.</p><p>¿Conoces algún baile de tu pueblo?</p>`,
      svg: svg("Un corro de cinco niños de la mano con los brazos arriba bailando la sardana", `<ellipse cx="130" cy="140" rx="104" ry="18" fill="none" stroke="var(--line)" stroke-width="2"/>${["var(--pen)", "var(--inf)", "var(--leaf)", "var(--red)", "var(--sun)"].map((c, i) => nino(40 + i * 45, i % 2 ? 132 : 148, { c, nina: i % 2 === 1, pose: "arriba", s: 0.75 })).join("")}${nota(130, 44, "var(--pen)")}${suelo(156)}${rot(130, 174, "La sardana", { color: "var(--pen)", size: 15 })}`),
      video: { id: "XhK0BIZoyac", titulo: "La Sardana: danza en las calles de Barcelona", canal: "Anthony Tate", vistas: 732031 },
    },
    {
      html: `<h3>Canciones con gestos</h3><p>Algunas canciones tienen <mark>gestos</mark> para cada palabra.</p><p>En «<b>Soy una taza</b>», el brazo hace de asa de la taza. Luego como una tetera o una cuchara.</p><p>En otras, señalamos partes del cuerpo: la cabeza, los hombros, las rodillas. Los gestos nos ayudan a <b>recordar</b> la letra.</p><p>¡Y son muy divertidas!</p>`,
      svg: svg("Una niña con un brazo en la cintura como el asa de una taza y el otro arriba", `${nino(90, 150, { c: "var(--inf)", nina: true, pose: "lanza", s: 1.4 })}<path d="M90 86 q20 6 18 26 q-2 8 -12 6" stroke="var(--inf)" stroke-width="6" fill="none" stroke-linecap="round"/>${rot(186, 50, "«Soy una taza…»", { color: "var(--pen)", size: 13 })}${nota(180, 120, "var(--red)")}${nota(214, 110, "var(--leaf)")}${suelo(150)}${rot(130, 172, "Cada palabra, un gesto", { color: "var(--pen)", size: 13 })}`),
      video: { id: "cgEnBkmcpuQ", titulo: "CantaJuego - Soy una taza", canal: "CantaJuego", vistas: 2163776485 },
    },
    {
      html: `<h3>Expresar con el cuerpo</h3><p>La música también tiene <mark>emociones</mark>.</p><p>Hay músicas <b>alegres</b>, que nos hacen saltar y sonreír. Hay músicas <b>tristes</b>, que nos hacen ir despacio. Y hay músicas de <b>miedo</b>, que nos hacen escondernos.</p><p>Con la cara y el cuerpo mostramos lo que sentimos.</p><p>Escucha una música y di cómo te hace sentir.</p>`,
      svg: svg("Tres caras: alegre, triste y con miedo", `${cara(52, 84, "alegre", "var(--sun)")}${cara(130, 84, "triste", "var(--water)")}${cara(208, 84, "miedo", "#c9a7f0")}${etq(52, 130, "alegre", "#c48a00", 14)}${etq(130, 130, "triste", "var(--water)", 14)}${etq(208, 130, "miedo", "var(--bac)", 14)}${rot(130, 164, "¿Cómo suena la música?", { color: "var(--pen)", size: 14 })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Bailar nos hace bien</h3><p>Bailar es un <mark>ejercicio</mark> muy divertido: movemos todo el cuerpo.</p><p>Nos ayuda a coordinar, a tener equilibrio y a seguir el ritmo.</p><p>Además, bailar nos pone <b>contentos</b> y nos une con los demás. Por eso se baila en fiestas y bodas de todo el mundo.</p><p>¡Bailemos juntos!</p>`,
      svg: svg("Dos niños bailan por parejas de la mano en una fiesta con banderines", `<path d="M10 30 Q130 60 250 30" stroke="var(--muted)" stroke-width="1.5" fill="none"/>${[0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M${24 + i * 32} ${36 + Math.sin(i / 2) * 6} l8 16 l8 -16z" fill="${["var(--red)", "var(--sun)", "var(--leaf)", "var(--water)"][i % 4]}"/>`).join("")}${nino(100, 150, { c: "var(--pen)", pose: "baila", s: 1.1 })}${nino(170, 150, { c: "var(--red)", nina: true, pose: "baila", s: 1.1 })}${suelo(150)}${rot(130, 172, "¡Bailar nos alegra!", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Juego: el espejo</h3><p>Nos ponemos por <mark>parejas</mark>, uno enfrente del otro.</p><p>Suena una música. Uno se mueve despacio y el otro lo <b>imita</b>. Es como su reflejo en un espejo.</p><p>Si uno sube el brazo, el otro también. Cuando cambia la música, cambiamos los papeles. ¡Hay que mirarse muy bien!</p><p>Gana la pareja más coordinada.</p>`,
      svg: svg("Dos niños uno frente al otro haciendo el mismo movimiento, como en un espejo", `${nino(80, 150, { c: "var(--pen)", pose: "baila", s: 1.2 })}<path d="M130 40 V150" stroke="var(--water)" stroke-width="3" stroke-dasharray="6 5"/><g transform="translate(260 0) scale(-1 1)">${nino(80, 150, { c: "var(--inf)", pose: "baila", s: 1.2 })}</g>${suelo(150)}${rot(130, 172, "Te imito como un espejo", { color: "var(--pen)", size: 13 })}`),
    },
  ],
  figura: {
    titulo: "Mi cuerpo escucha la música",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Seis tarjetas: rápido corro, lento ando despacio, fuerte pasos de gigante, suave de puntillas, agudo me estiro y grave me agacho">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["Rápido", "corro", "corre", "var(--inf)"], ["Lento", "ando despacio", "pie", "var(--leaf)"], ["Fuerte", "pasos de gigante", "salta", "var(--red)"], ["Suave", "de puntillas", "arriba", "var(--water)"], ["Agudo", "me estiro", "arriba", "var(--pen)"], ["Grave", "me agacho", "agacha", "#8a5a2b"]].map(([t, d, pose, c], i) => {
        const x = 20 + (i % 3) * 205, y = i < 3 ? 16 : 156;
        return `<rect x="${x}" y="${y}" width="190" height="128" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>${nino(x + 48, y + 112, { c, pose, s: 1.05 })}${big(x + 128, y + 56, t, c, 21)}${rot(x + 128, y + 84, d, { size: 13 })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "z6DoPp-LkTA", titulo: "Coreokids: el baile del cuerpo", canal: "Diverplay", vistas: 445171750, megusta: 0, busqueda: "música y movimiento canción para bailar niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Suena una música muy rápida. ¿Cómo nos movemos?",
      pasos: ["Escuchamos: el pulso va deprisa.", "El cuerpo imita a la música.", "Nos movemos rápido, con pasos cortos y ágiles."],
      resultado: "nos movemos deprisa." },
    { enunciado: "Suena una nota muy aguda en el piano. ¿Qué hacemos?",
      pasos: ["Agudo es finito, como un pajarito.", "Los sonidos agudos van «arriba».", "Nos estiramos de puntillas."],
      resultado: "nos estiramos hacia arriba." },
    { enunciado: "¿Cómo se baila la sardana?",
      pasos: ["Nos ponemos en corro.", "Nos damos la mano.", "Levantamos los brazos y damos pasos cortos al ritmo."],
      resultado: "en corro, de la mano y con los brazos arriba." },
  ],
  errores: [
    "Moverse sin escuchar la música: primero escuchamos, luego nos movemos.",
    "Chocar con los compañeros: hay que mirar el espacio y no correr sin control.",
    "Pensar que solo se baila bien de una forma: cada uno puede expresarse a su manera.",
    "Confundir agudo con fuerte: agudo es finito; fuerte es que se oye mucho.",
  ],
  ejercicios: [
    { q: "Pon una canción y muévete libremente.", sol: "Respuesta libre: escuchar y moverse con la música." },
    { q: "Anda dando un paso en cada pulso.", sol: "Pasos regulares, ni más rápido ni más lento que la música." },
    { q: "Muévete rápido y luego lento.", sol: "Primero deprisa y luego muy despacio." },
    { q: "Anda como un gigante y luego como un ratón.", sol: "Pasos grandes y fuertes; luego de puntillas y suave." },
    { q: "Estírate con un sonido agudo y agáchate con uno grave.", sol: "Arriba con agudo, abajo con grave." },
    { q: "Canta «Soy una taza» con sus gestos.", sol: "Brazo en jarra como el asa de una taza." },
    { q: "Pon cara alegre, triste y de miedo.", sol: "Tres caras distintas." },
    { q: "Baila en corro con tu familia como en la sardana.", sol: "De la mano, en círculo y con los brazos arriba." },
    { q: "Juega al espejo con alguien de casa.", sol: "Uno se mueve despacio y el otro lo imita." },
    { q: "Di un lugar donde la gente baila.", sol: "En fiestas, bodas, cumpleaños o en la plaza del pueblo." },
  ],
  quiz: [
    { q: "Cuando oímos música, el cuerpo…", o: ["quiere moverse", "se duerme siempre", "se enfada"], a: 0, e: "¡Dan ganas de bailar!" },
    { q: "Para bailar juntos seguimos…", o: ["el pulso", "el silencio", "el color"], a: 0, e: "Un paso en cada pulso." },
    { q: "Con música rápida, nos movemos…", o: ["deprisa", "despacio", "nada"], a: 0, e: "El cuerpo imita la música." },
    { q: "Con música suave, vamos…", o: ["de puntillas", "pisando fuerte", "gritando"], a: 0, e: "Como un ratón." },
    { q: "Con sonidos agudos, nos…", o: ["estiramos", "agachamos", "tumbamos"], a: 0, e: "Agudo: arriba." },
    { q: "Con sonidos graves, nos…", o: ["agachamos", "estiramos", "vamos"], a: 0, e: "Grave: abajo." },
    { q: "La sardana es una danza de…", o: ["Cataluña", "Japón", "la selva"], a: 0, e: "Se baila en corro." },
    { q: "La sardana se baila…", o: ["en corro y de la mano", "solo", "sentados"], a: 0, e: "En corro con los brazos arriba." },
    { q: "Los gestos de una canción nos ayudan a…", o: ["recordar la letra", "olvidarla", "dormir"], a: 0, e: "Cada palabra, un gesto." },
    { q: "En el juego del espejo…", o: ["imitamos al compañero", "nos escondemos", "corremos"], a: 0, e: "Como su reflejo." },
  ],
  examen: [
    { q: "¿Qué es una danza?", o: ["Un baile con pasos que se repiten", "Un instrumento", "Un cuento"], a: 0, e: "Como la sardana o la jota." },
    { q: "Si la música es fuerte, damos pasos…", o: ["grandes", "de puntillas", "hacia atrás"], a: 0, e: "Como un gigante." },
    { q: "Una música alegre nos hace…", o: ["saltar y sonreír", "llorar", "escondernos"], a: 0, e: "Expresamos alegría." },
    { q: "Bailar sirve para…", o: ["hacer ejercicio y estar contentos", "aburrirse", "nada"], a: 0, e: "Y nos une con los demás." },
  ],
  feynman: ["Cómo nos movemos con música rápida y lenta", "Qué hacemos con sonidos agudos y graves", "Cómo se baila la sardana"],
  mapa: mapa("MÚSICA Y MOVIMIENTO", "var(--pri)", [
    ["Pulso", "un paso en cada pulso", "var(--red)"],
    ["Imitar", "rápido · lento · fuerte · suave", "var(--inf)"],
    ["Danzas", "corro · sardana · jota", "var(--leaf)"],
    ["Expresar", "alegría · tristeza · miedo", "var(--pen)"],
  ], 240),
  tarjetas: [
    ["¿Qué nos pasa al oír música?", "Dan ganas de movernos."],
    ["¿Cómo bailamos todos a la vez?", "Siguiendo el pulso."],
    ["Música rápida…", "nos movemos deprisa."],
    ["Música suave…", "vamos de puntillas."],
    ["Sonido agudo…", "nos estiramos hacia arriba."],
    ["Sonido grave…", "nos agachamos."],
    ["¿Qué danza se baila en Cataluña en corro?", "La sardana."],
    ["¿Qué es el juego del espejo?", "Imitar los movimientos del compañero."],
  ],
  familias: [
    "Poned música de distintos tipos y bailad juntos cambiando de velocidad.",
    "Aprended una canción con gestos y cantadla en familia.",
    "Si hay sardanas en vuestra plaza o pueblo, id a verlas y entrad en el corro.",
    "Jugad al espejo: uno se mueve y el otro imita, y luego al revés.",
  ],
  profesores: PROF("Música: movimiento y expresión corporal (pulso, tempo, intensidad y altura), canciones con gestos, danzas populares sencillas (incluida la sardana) y expresión de emociones con el cuerpo", ["Desplazamientos libres que cambian con la música del piano o la grabación.", "Canciones motrices con gestos.", "Iniciación a la sardana en corro con pasos cortos."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
