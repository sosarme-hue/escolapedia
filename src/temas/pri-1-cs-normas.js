// Ciencias Sociales 1º de Primaria. Formato ampliado de 1º: frases cortas y un dibujo propio en cada bloque.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, arbol, casa, check, RD } = require("./_peques");

const corazon = (x, y, s = 1, c = "var(--red)") => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 10 C -24 -6 -14 -26 0 -14 C 14 -26 24 -6 0 10 Z" fill="${c}"/>`;
const bocadillo = (x, y, w, h, t, size = 13, c = "var(--ink)") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${txt(x + w / 2, y + h / 2 + 5, t, { size, color: c })}`;
const semaforo = (x, y, s = 1, on = 0) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-16" y="-46" width="32" height="92" rx="8" fill="var(--ink)"/>${["var(--red)", "var(--sun)", "var(--leaf)"].map((c, i) => `<circle cy="${-28 + i * 28}" r="10" fill="${c}" ${on === -1 || on === i ? "" : 'fill-opacity=".25"'}/>`).join("")}</g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "Las normas y la convivencia",
  minutos: 25,
  objetivos: ["Saber qué es una norma y para qué sirve", "Conocer normas de casa, del colegio y de la calle", "Usar las palabras mágicas y resolver los conflictos hablando", "Conocer algunos derechos y deberes de los niños"],
  claves: ["norma", "convivir", "respeto", "derecho", "deber", "conflicto"],
  pregunta: {
    texto: "Imagina un partido de fútbol sin reglas: todos cogen el balón con la mano y nadie sabe dónde está la portería. ¿Qué pasaría?",
    respuesta: "¡Sería un lío y todos se enfadarían! Las <mark>reglas</mark> o <b>normas</b> sirven para que todos sepamos qué hacer y podamos jugar y vivir juntos a gusto.",
  },
  bloques: [
    {
      html: `<h3>Vivimos juntos</h3><p>Vivimos con otras personas: la familia, los compañeros y los vecinos. Vivir juntos se llama <mark>convivir</mark>.</p><p>Para convivir bien, nos tratamos con <b>respeto</b>. Escuchamos a los demás y compartimos.</p><p>Nadie es más que nadie. Todos somos importantes.</p><p>Así todos estamos más contentos y tranquilos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Niños distintos dados de la mano bajo un corazón">${BG}
        ${[["var(--red)", "#6b3f1f"], ["var(--pen)", "var(--ink)"], ["var(--leaf)", "#e3b04b"], ["var(--sun)", "#6b3f1f"], ["var(--inf)", "var(--ink)"]].map(([c, p], i) => persona(34 + i * 48, 160, 92, c, p)).join("")}
        <path d="M52 112 H 64 M100 112 H 112 M148 112 H 160 M196 112 H 208" stroke="#f2c9a0" stroke-width="6" stroke-linecap="round"/>
        ${corazon(130, 34, 1.2)}
        <path d="M14 162 H 246" stroke="var(--line)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>¿Qué es una norma?</h3><p>Una <mark>norma</mark> nos dice cómo debemos comportarnos. También se llama <b>regla</b>.</p><p>Hay normas en los juegos y en casa. También en el cole y en la calle.</p><p>Las normas nos ayudan a estar <b>seguros</b> y a no pelearnos. También a cuidar las cosas. Si todos las cumplimos, se vive mejor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cartel con las normas de clase y tres marcas de correcto">${BG}
        <rect x="50" y="24" width="160" height="136" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
        ${txt(130, 50, "NORMAS", { size: 17, color: "var(--pen)", font: D, weight: 800 })}
        ${["Escuchar", "Compartir", "Recoger"].map((t, i) => check(76, 78 + i * 28) + txt(94, 83 + i * 28, t, { size: 13, anchor: "start" })).join("")}</svg>`,
    },
    {
      html: `<h3>Normas en casa</h3><p>En casa también hay <mark>normas</mark>. Cada familia tiene las suyas.</p><p>Por ejemplo: lavarse las manos antes de comer. Recoger los juguetes. Ayudar a poner la mesa.</p><p>No gritar ni dar portazos. Respetar el descanso de los demás. Avisar si salimos a jugar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dentro de casa, un niño guarda los juguetes y otro se lava las manos">${BG}
        <path d="M20 56 L 130 14 L 240 56 Z" fill="var(--red)"/><rect x="28" y="56" width="204" height="110" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        ${persona(76, 160, 84, "var(--leaf)")}<rect x="96" y="134" width="30" height="26" fill="var(--sun)"/><circle cx="104" cy="132" r="5" fill="var(--pen)"/>
        ${persona(176, 160, 84, "var(--pen)", "#6b3f1f")}<rect x="192" y="118" width="32" height="10" rx="4" fill="var(--line)"/><path d="M208 108 V 116" stroke="var(--muted)" stroke-width="3"/><g fill="none" stroke="var(--water)" stroke-width="1.5"><circle cx="200" cy="112" r="3"/><circle cx="214" cy="106" r="3"/></g></svg>`,
    },
    {
      html: `<h3>Normas en el cole</h3><p>En el colegio somos <mark>muchos</mark>. Por eso las normas son muy importantes.</p><p>Levantamos la mano para hablar. Esperamos el turno. Cuidamos el material. Hacemos fila sin empujar.</p><p>En el patio jugamos sin hacer daño. Si hay un problema, avisamos a un maestro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una fila ordenada de niños detrás de la maestra">${BG}
        ${persona(40, 160, 120, "var(--red)", "#6b3f1f")}${[0, 1, 2, 3].map((i) => persona(92 + i * 44, 160, 80, ["var(--pen)", "var(--leaf)", "var(--sun)", "var(--inf)"][i])).join("")}
        <path d="M14 162 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(170, 34, "en fila, sin empujar", { size: 13, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Normas en la calle</h3><p>En la calle y en el parque compartimos el espacio con <mark>todos</mark>.</p><p>Cruzamos por el paso de peatones. Tiramos la basura a la papelera. Esperamos el turno en el columpio.</p><p>No pisamos el césped si hay un cartel. Recogemos lo que ensucia nuestro perro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un parque con un columpio, una niña esperando su turno y una papelera">${BG}
        <path d="M60 50 H 140 M68 50 L 56 150 M132 50 L 144 150" stroke="var(--pen)" stroke-width="5" fill="none"/>
        <path d="M100 50 V 110" stroke="var(--ink)" stroke-width="2"/><rect x="88" y="108" width="24" height="5" fill="var(--red)"/>${persona(100, 110, 46, "var(--leaf)")}
        ${persona(178, 156, 84, "var(--inf)", "#6b3f1f")}
        <path d="M214 156 L 210 126 H 236 L 232 156 Z" fill="var(--leaf)"/>${arbol(30, 156, 0.6)}
        <path d="M14 158 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(186, 40, "espero mi turno", { size: 12, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Las palabras mágicas</h3><p>Hay palabras que hacen que todos nos sintamos bien. Son las <mark>palabras mágicas</mark>.</p><p>Decimos <b>«buenos días»</b> al llegar. Decimos <b>«por favor»</b> al pedir algo y <b>«gracias»</b> al recibirlo.</p><p>Si nos equivocamos o hacemos daño, decimos <b>«perdón»</b>.</p><p>Al irnos, decimos «adiós» o «hasta mañana».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro bocadillos: buenos días, por favor, gracias y perdón">${BG}
        ${bocadillo(16, 20, 108, 34, "Buenos días", 13, "var(--sun)")}${bocadillo(136, 20, 108, 34, "Por favor", 13, "var(--pen)")}
        ${bocadillo(16, 70, 108, 34, "Gracias", 13, "var(--leaf)")}${bocadillo(136, 70, 108, 34, "Perdón", 13, "var(--red)")}
        <g transform="translate(130 146)"><path d="M-30 20 L 20 -20" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/><path d="M20 -20 l 4 -12 l 4 12 l 12 4 l -12 4 l -4 12 l -4 -12 l -12 -4 Z" fill="var(--sun)"/></g></svg>`,
      video: { id: "oTtHFLDwfag", titulo: "Las Palabras Mágicas | Gracias, Perdón y Por Favor", canal: "HiDino Canciones Para Niños", vistas: 269467, megusta: 1229 },
    },
    {
      html: `<h3>Derechos y deberes</h3><p>Todos los niños y niñas tienen <mark>derechos</mark>. Tienen derecho a tener una familia, una casa y comida. También a ir al colegio, a jugar y a que los cuiden.</p><p>También tenemos <b>deberes</b>: respetar a los demás, cuidar las cosas y cumplir las normas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una balanza: a un lado los derechos (casa, cole, juego) y al otro los deberes (respetar, cuidar)">${BG}
        <path d="M130 40 V 150 M96 150 H 164" stroke="var(--ink)" stroke-width="4"/><path d="M50 60 H 210" stroke="var(--ink)" stroke-width="4"/>
        <path d="M50 60 L 30 100 H 70 Z M210 60 L 190 100 H 230 Z" fill="none" stroke="var(--muted)" stroke-width="2"/>
        <path d="M24 100 H 76 M184 100 H 236" stroke="var(--ink)" stroke-width="4"/>
        ${txt(50, 124, "derechos", { size: 13, color: "var(--pen)" })}${txt(210, 124, "deberes", { size: 13, color: "var(--leaf)" })}
        ${corazon(50, 86, 0.6)}${check(210, 86)}
        ${txt(130, 30, "Los dos van juntos", { size: 13, color: "var(--muted)" })}</svg>`,
      video: { id: "3X4qwBv53iQ", titulo: "Derechos y deberes de los niños y niñas", canal: "Smile and Learn - Español", vistas: 2099629, megusta: 0 },
    },
    {
      html: `<h3>Si hay un problema</h3><p>A veces nos <mark>enfadamos</mark>. Es normal. Lo importante es cómo lo arreglamos.</p><p>Usamos el <b>semáforo</b>. Rojo: paro y respiro hondo. Amarillo: pienso qué ha pasado y qué siento. Verde: hablo con calma y busco una solución.</p><p>Nunca pegamos ni insultamos. Si no podemos solos, pedimos ayuda.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Semáforo de las emociones: rojo paro, amarillo pienso, verde hablo">${BG}
        ${semaforo(60, 94, 1.4, -1)}
        ${txt(110, 60, "Paro y respiro", { size: 14, color: "var(--red)", anchor: "start" })}${txt(110, 99, "Pienso", { size: 14, color: "#b8860b", anchor: "start" })}${txt(110, 138, "Hablo con calma", { size: 14, color: "var(--leaf)", anchor: "start" })}</svg>`,
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Cumplir las normas hace que todos estemos <mark>a gusto y seguros</mark>.</p><p>Si respetamos el turno, todos jugamos. Si cuidamos las cosas, duran más. Si hablamos con calma, hacemos más amigos.</p><p>Cuando seas mayor, ayudarás a decidir las normas de tu localidad votando.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Niños jugando juntos y contentos en el recreo">${BG}
        ${sol(220, 36, 12)}${persona(50, 156, 92, "var(--red)", "#6b3f1f")}${persona(130, 156, 92, "var(--pen)")}${persona(200, 156, 92, "var(--leaf)", "#e3b04b")}
        <circle cx="92" cy="140" r="12" fill="var(--sun)"/><path d="M80 140 H 104" stroke="#fff" stroke-width="2"/>
        <path d="M14 158 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(110, 34, "¡Así da gusto!", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Juego: ¿bien o mal?</h3><p>Escucha cada frase. Si está bien, pon <mark>cara contenta</mark>. Si está mal, pon cara triste.</p><p>1. Ana dice «gracias» al recibir un regalo.</p><p>2. Leo empuja para ser el primero de la fila.</p><p>3. Sara invita a jugar a un niño nuevo.</p><p>4. Tomás tira un papel al suelo.</p><p>Bien: 1 y 3. Mal: 2 y 4.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una cara contenta para lo que está bien y una cara triste para lo que está mal">${BG}
        <g transform="translate(76 94)"><circle r="36" fill="var(--sun)"/><circle cx="-12" cy="-8" r="4" fill="var(--ink)"/><circle cx="12" cy="-8" r="4" fill="var(--ink)"/><path d="M-16 10 Q 0 26 16 10" stroke="var(--ink)" stroke-width="4" fill="none" stroke-linecap="round"/></g>
        <g transform="translate(184 94)"><circle r="36" fill="#9aa3b5"/><circle cx="-12" cy="-8" r="4" fill="var(--ink)"/><circle cx="12" cy="-8" r="4" fill="var(--ink)"/><path d="M-16 20 Q 0 6 16 20" stroke="var(--ink)" stroke-width="4" fill="none" stroke-linecap="round"/></g>
        ${check(76, 158)}${check(184, 158, false)}
        ${txt(76, 32, "bien", { size: 15, color: "var(--ok)", font: D, weight: 800 })}${txt(184, 32, "mal", { size: 15, color: "var(--red)", font: D, weight: 800 })}</svg>`,
    },
  ],
  figura: {
    titulo: "Normas para convivir",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Normas en casa, en el cole y en la calle, con las palabras mágicas en el centro">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["EN CASA", "recoger · ayudar · no gritar", 110, "var(--red)"], ["EN EL COLE", "turno · escuchar · fila", 320, "var(--pen)"], ["EN LA CALLE", "paso de peatones · papelera", 530, "var(--leaf)"]].map(([t, d, x, c]) => `<rect x="${x - 95}" y="30" width="190" height="110" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${txt(x, 76, t, { size: 18, color: c, font: D, weight: 800 })}${txt(x, 104, d, { size: 12 })}`).join("")}
      <rect x="80" y="170" width="480" height="100" rx="20" fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="3"/>
      ${txt(320, 206, "PALABRAS MÁGICAS", { size: 18, color: "#b8860b", font: D, weight: 800 })}${txt(320, 240, "buenos días · por favor · gracias · perdón", { size: 16 })}
    </svg>`,
  },
  video: { id: "hH0J8cTaCLQ", titulo: "Historias que ayudan a crecer | Los niños que no respetan las reglas", canal: "Marie Leiner", vistas: 10873563, megusta: 0, busqueda: "normas de convivencia para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Quieres el lápiz rojo que está usando Marta. ¿Qué haces?",
      pasos: ["No se lo quito de la mano.", "Le digo: «Marta, ¿me dejas el rojo, por favor?».", "Espero a que termine y le doy las gracias."],
      resultado: "lo pido por favor, espero y doy las gracias." },
    { enunciado: "Sin querer, pisas a un compañero en la fila. ¿Qué dices?",
      pasos: ["Me doy cuenta de que le he hecho daño.", "Le miro y le pregunto si está bien.", "Le digo «perdón»."],
      resultado: "pido perdón." },
    { enunciado: "Pablo y tú queréis el mismo columpio. ¿Cómo lo resolvéis?",
      pasos: ["Rojo: paramos y no empujamos.", "Amarillo: pensamos que los dos queremos jugar.", "Verde: hablamos y contamos hasta 20 cada uno."],
      resultado: "nos turnamos para usar el columpio." },
  ],
  errores: [
    "Pensar que las normas solo sirven para regañar: sirven para que todos estemos bien.",
    "Cumplir las normas solo cuando nos ven: hay que cumplirlas siempre.",
    "Arreglar un enfado pegando o insultando: los problemas se resuelven hablando.",
    "Olvidar las palabras mágicas con la familia: también se usan en casa.",
  ],
  ejercicios: [
    { q: "Di una norma de tu casa.", sol: "Por ejemplo: recoger los juguetes." },
    { q: "Di dos normas de tu clase.", sol: "Por ejemplo: levantar la mano y esperar el turno." },
    { q: "Di una norma del parque.", sol: "Por ejemplo: esperar el turno en el tobogán." },
    { q: "Di las cuatro palabras mágicas.", sol: "Buenos días, por favor, gracias y perdón." },
    { q: "¿Qué dices cuando alguien te da un regalo?", sol: "Gracias." },
    { q: "Di un derecho de los niños.", sol: "Por ejemplo: ir al colegio o jugar." },
    { q: "Di un deber de los niños.", sol: "Por ejemplo: respetar a los demás." },
    { q: "Explica el semáforo para los enfados.", sol: "Rojo: paro. Amarillo: pienso. Verde: hablo." },
    { q: "Dibuja una norma de clase en un cartel.", sol: "Respuesta libre." },
    { q: "Inventa una norma nueva para tu casa.", sol: "Respuesta libre: que ayude a convivir mejor." },
  ],
  quiz: [
    { q: "Una norma nos dice…", o: ["cómo comportarnos", "qué comer", "qué hora es"], a: 0, e: "Cómo debemos actuar." },
    { q: "Vivir juntos se llama…", o: ["convivir", "correr", "contar"], a: 0, e: "Convivir." },
    { q: "Para hablar en clase…", o: ["grito", "levanto la mano", "me voy"], a: 1, e: "Levanto la mano." },
    { q: "Al pedir algo decimos…", o: ["por favor", "adiós", "ya"], a: 0, e: "Por favor." },
    { q: "Si hago daño sin querer, digo…", o: ["perdón", "nada", "me da igual"], a: 0, e: "Perdón." },
    { q: "La basura va…", o: ["a la papelera", "al suelo", "al columpio"], a: 0, e: "A la papelera." },
    { q: "Ir al colegio es un…", o: ["derecho", "castigo", "juego de mesa"], a: 0, e: "Un derecho de los niños." },
    { q: "Respetar a los demás es un…", o: ["deber", "regalo", "juguete"], a: 0, e: "Un deber." },
    { q: "En el semáforo, rojo significa…", o: ["paro y respiro", "grito", "corro"], a: 0, e: "Paro y me calmo." },
    { q: "Si me enfado con un amigo…", o: ["le pego", "hablamos con calma", "le insulto"], a: 1, e: "Hablamos con calma." },
  ],
  examen: [
    { q: "Las normas sirven para…", o: ["convivir mejor", "aburrirnos", "pelearnos"], a: 0, e: "Para vivir juntos a gusto." },
    { q: "¿Qué palabra mágica decimos al llegar?", o: ["Buenos días", "Gracias", "Perdón"], a: 0, e: "Buenos días." },
    { q: "En la fila…", o: ["empujamos", "esperamos sin empujar", "corremos"], a: 1, e: "Sin empujar." },
    { q: "Jugar es un…", o: ["derecho", "deber", "castigo"], a: 0, e: "Todos los niños tienen derecho a jugar." },
  ],
  feynman: ["Qué es una norma y para qué sirve", "Las palabras mágicas", "Cómo resolver un enfado"],
  mapa: mapa("CONVIVIR", "var(--pri)", [
    ["Normas", "casa · cole · calle", "var(--pen)"],
    ["Palabras mágicas", "por favor · gracias · perdón", "#b8860b"],
    ["Derechos y deberes", "jugar · aprender · respetar", "var(--leaf)"],
    ["Problemas", "parar · pensar · hablar", "var(--red)"],
  ], 230),
  tarjetas: [
    ["¿Qué es una norma?", "Una regla que dice cómo comportarnos"],
    ["¿Qué es convivir?", "Vivir juntos"],
    ["Di las palabras mágicas", "Buenos días, por favor, gracias y perdón"],
    ["¿Cómo pedimos hablar en clase?", "Levantando la mano"],
    ["Di un derecho de los niños", "Ir al colegio, jugar, tener familia"],
    ["Di un deber", "Respetar y cumplir las normas"],
    ["¿Qué hago si me enfado?", "Paro, pienso y hablo con calma"],
    ["¿Dónde tiramos la basura?", "En la papelera"],
  ],
  familias: [
    "Escribid juntos tres normas de casa y colgadlas en la nevera.",
    "Dad ejemplo usando las palabras mágicas con él o ella y con los demás.",
    "Cuando haya un conflicto, practicad el semáforo: parar, pensar y hablar.",
    "Felicitad cuando cumpla una norma sin que se lo pidáis.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: normas de convivencia en la familia, la escuela y el entorno; derechos de la infancia; resolución pacífica de conflictos (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Asamblea para acordar las normas de clase y firmarlas todos.", "Rincón de la calma con el semáforo de las emociones.", "Lectura de la Convención sobre los Derechos del Niño en versión adaptada (UNICEF)."],
  },
  fuentes: [RD],
  revisado: "2026-11-12",
};
