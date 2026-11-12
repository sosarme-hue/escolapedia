// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Esqueleto simplificado (de frente).
const esqueleto = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round">
  <ellipse cx="0" cy="0" rx="14" ry="17" fill="var(--card)"/>
  <path d="M0 17 V 96"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M-${16 - i} ${36 + i * 9} Q 0 ${30 + i * 9} ${16 - i} ${36 + i * 9}"/>`).join("")}
  <path d="M-22 26 H 22"/><path d="M-22 26 L -28 64 L -32 100 M22 26 L 28 64 L 32 100"/>
  <path d="M-18 96 Q 0 108 18 96 Q 0 90 -18 96 Z" fill="var(--card)"/>
  <path d="M-10 102 L -12 150 L -12 196 M10 102 L 12 150 L 12 196"/><path d="M-12 196 H -22 M12 196 H 22"/>
</g>`;

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El aparato locomotor",
  minutos: 50,
  objetivos: ["Describir las funciones del sistema óseo y del muscular", "Reconocer los principales huesos, su estructura y los tipos de articulaciones", "Explicar la contracción muscular y el trabajo de los músculos antagonistas", "Prevenir lesiones y cuidar la postura"],
  claves: ["hueso", "médula ósea", "articulación", "ligamento", "músculo esquelético", "tendón", "antagonista", "osteoporosis"],
  pregunta: {
    texto: "Un bebé nace con unos 300 huesos y un adulto tiene 206. ¿Dónde se han ido casi cien huesos?",
    respuesta: "No se pierden: <mark>se sueldan</mark>. Muchos huesos del bebé son piezas de cartílago separadas que, al crecer, se osifican y se unen. Le pasa al cráneo, cuyas «fontanelas» se cierran, y al sacro, que nace como cinco vértebras y acaba siendo un solo hueso.",
  },
  bloques: [
    {
      html: `<h3>Qué es el aparato locomotor</h3><p>El <b>aparato locomotor</b> nos permite movernos y mantener la forma del cuerpo. Tiene dos partes que trabajan juntas: el <mark>sistema óseo</mark> o esqueleto, formado por huesos, cartílagos y ligamentos, que es la parte <b>pasiva</b>; y el <mark>sistema muscular</mark>, la parte <b>activa</b>, porque los músculos se contraen y tiran de los huesos. Las órdenes las da el sistema nervioso. Además de movernos, el esqueleto sostiene el cuerpo, protege los órganos delicados (el cráneo guarda el encéfalo y las costillas, el corazón y los pulmones), fabrica células de la sangre y almacena calcio y fósforo.</p>`,
    },
    {
      html: `<h3>El esqueleto</h3><p>El esqueleto humano adulto tiene <b>206 huesos</b> y se divide en tres regiones. La <b>cabeza</b> incluye los huesos del cráneo, soldados entre sí, y los de la cara, entre ellos la mandíbula, el único que se mueve. El <b>tronco</b> lo forman la <mark>columna vertebral</mark> (33 vértebras), las 12 parejas de costillas y el esternón, que juntos forman la caja torácica, además de la cintura escapular (clavículas y omóplatos) y la pelvis. Las <b>extremidades</b> son los brazos y las piernas. El hueso más largo es el fémur; el más pequeño, el estribo del oído.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esqueleto simplificado con cráneo, columna, costillas, pelvis, húmero, fémur y tibia">${BG}
        ${esqueleto(100, 26, 0.72)}
        ${[["cráneo", 26], ["costillas", 56], ["columna", 80], ["pelvis", 102], ["fémur", 128], ["tibia y peroné", 156]].map(([n, y], i) => `${t(150, y, n, { size: 11, anchor: "start" })}<path d="M146 ${y - 4} L ${[112, 112, 102, 112, 110, 110][i]} ${[24, 56, 80, 100, 128, 156][i]}" stroke="var(--muted)" stroke-width="1"/>`).join("")}
        ${t(40, 70, "húmero", { size: 11 })}<path d="M58 66 L 80 58" stroke="var(--muted)" stroke-width="1"/></svg>`,
    },
    {
      html: `<h3>Los huesos por dentro</h3><p>Los huesos son órganos vivos: tienen células, vasos sanguíneos y nervios, y se reparan si se rompen. Están hechos de <b>tejido óseo</b>, que combina fibras de proteína (que dan flexibilidad) con sales de calcio (que dan dureza). Hay dos tipos: el <mark>tejido compacto</mark>, macizo, en la capa externa, y el <mark>tejido esponjoso</mark>, con huecos, en el interior. Dentro de muchos huesos está la <b>médula ósea roja</b>, que fabrica glóbulos rojos, blancos y plaquetas.</p>${tabla(["Tipo de hueso", "Forma", "Ejemplos"], [["Largos", "más largos que anchos", "fémur, húmero, falanges"], ["Cortos", "parecidos a cubos", "huesos de la muñeca, vértebras"], ["Planos", "anchos y delgados", "cráneo, omóplato, esternón"]])}`,
      video: { id: "wD6QXREmRrg", titulo: "SISTEMA ÓSEO (esquelético): tipos de huesos, clasificación, función", canal: "Anatomía Fácil por Juan José Sánchez", vistas: 1353465 },
    },
    {
      html: `<h3>Las articulaciones</h3><p>Una <b>articulación</b> es la unión entre dos huesos. Según cuánto se mueven, pueden ser <mark>fijas</mark> (sin movimiento, como las suturas del cráneo), <mark>semimóviles</mark> (poco movimiento, como las de las vértebras, separadas por discos de cartílago) o <mark>móviles</mark> (mucho movimiento, como la rodilla, el codo o el hombro). En las móviles, los extremos de los huesos están cubiertos de <b>cartílago</b> liso y bañados en el <b>líquido sinovial</b>, que lubrica. Unos cordones muy resistentes, los <b>ligamentos</b>, mantienen los huesos en su sitio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Articulación móvil de la rodilla: fémur y tibia con cartílago, líquido sinovial y ligamentos">${BG}
        <path d="M100 14 H 160 V 70 Q 160 92 130 92 Q 100 92 100 70 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M100 166 H 160 V 116 Q 160 104 130 104 Q 100 104 100 116 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M103 76 Q 130 96 157 76" stroke="var(--water)" stroke-width="6" fill="none"/><path d="M103 112 Q 130 100 157 112" stroke="var(--water)" stroke-width="6" fill="none"/>
        <ellipse cx="130" cy="98" rx="26" ry="5" fill="var(--sun)" fill-opacity=".6"/>
        <path d="M96 60 Q 88 98 96 136 M164 60 Q 172 98 164 136" stroke="var(--red)" stroke-width="4" fill="none"/>
        ${t(130, 46, "fémur", { size: 12 })}${t(130, 146, "tibia", { size: 12 })}
        ${t(20, 98, "ligamento", { size: 10, anchor: "start", color: "var(--red)" })}${t(240, 76, "cartílago", { size: 10, anchor: "end", color: "var(--inf)" })}${t(244, 124, "líquido", { size: 10, anchor: "end", color: "#b8860b" })}${t(244, 136, "sinovial", { size: 10, anchor: "end", color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>Los músculos</h3><p>Tenemos más de <b>600 músculos</b>, que suponen alrededor del 40 % del peso del cuerpo. Los <mark>músculos esqueléticos</mark> se unen a los huesos mediante los <b>tendones</b>, cordones blancos y muy resistentes; son voluntarios y de contracción rápida. Hay además músculo liso en las vísceras y músculo cardiaco en el corazón, que funcionan de forma involuntaria. Los músculos esqueléticos también mantienen la postura y producen calor: por eso tiritamos cuando tenemos frío.</p>${tabla(["Músculo", "Dónde", "Qué hace"], [["Bíceps", "parte delantera del brazo", "dobla el codo"], ["Tríceps", "parte trasera del brazo", "estira el codo"], ["Pectoral", "pecho", "acerca el brazo al cuerpo"], ["Abdominales", "vientre", "doblan el tronco, sujetan vísceras"], ["Cuádriceps", "parte delantera del muslo", "estira la rodilla"], ["Gemelos", "pantorrilla", "ponerse de puntillas"]])}`,
    },
    {
      html: `<h3>Cómo se contrae un músculo</h3><p>Un músculo está formado por haces de <b>fibras musculares</b>, células muy largas con muchos núcleos. Dentro de cada fibra hay unos filamentos de dos proteínas, la <mark>actina</mark> y la <mark>miosina</mark>, colocados como los dedos de dos manos entrelazadas. Cuando llega un impulso nervioso, la miosina tira de la actina y los filamentos se deslizan unos sobre otros: la fibra se acorta y el músculo se <b>contrae</b>. Para ello necesita energía, que obtiene de la glucosa con oxígeno. Cuando falta oxígeno, se produce ácido láctico.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Filamentos de actina y miosina: relajados, separados; contraídos, deslizados y más solapados">${BG}
        ${[[40, "relajado", 0], [120, "contraído", 22]].map(([y, n, d]) => `<path d="M${20 + d} ${y} V ${y + 50} M${240 - d} ${y} V ${y + 50}" stroke="var(--ink)" stroke-width="4"/>${[10, 25, 40].map((k) => `<path d="M${20 + d} ${y + k} H ${110 + d}" stroke="var(--pen)" stroke-width="3"/><path d="M${240 - d} ${y + k} H ${150 - d}" stroke="var(--pen)" stroke-width="3"/>`).join("")}${[17, 32].map((k) => `<path d="M${90} ${y + k} H ${170}" stroke="var(--red)" stroke-width="6"/>`).join("")}${t(130, y - 6, n, { size: 11, color: "var(--muted)" })}`).join("")}
        ${t(24, 112, "actina", { size: 10, anchor: "start", color: "var(--pen)" })}${t(236, 112, "miosina", { size: 10, anchor: "end", color: "var(--red)" })}</svg>`,
      video: { id: "C4fmTtO1bbo", titulo: "Mecanismo de la contracción muscular", canal: "Dr. Luca Merlini", vistas: 3965529 },
    },
    {
      html: `<h3>Músculos antagonistas</h3><p>Un músculo solo puede <b>tirar</b>, nunca empujar. Por eso los músculos trabajan por parejas que hacen movimientos opuestos: son los <mark>músculos antagonistas</mark>. Para doblar el brazo, el <b>bíceps</b> se contrae y el <b>tríceps</b> se relaja; para estirarlo, ocurre al revés. Lo mismo pasa con el cuádriceps y los isquiotibiales en la pierna. Los huesos actúan como <b>palancas</b>, las articulaciones como puntos de apoyo y los músculos aplican la fuerza. Gracias a este sistema, una contracción pequeña produce un movimiento amplio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Brazo doblado: el bíceps contraído y el tríceps relajado, unidos a los huesos por tendones">${BG}
        <path d="M70 30 L 90 120" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/><path d="M90 120 L 196 72" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/>
        <path d="M80 44 Q 116 70 108 112" stroke="var(--red)" stroke-width="16" fill="none" stroke-linecap="round" stroke-opacity=".85"/>
        <path d="M66 50 Q 60 90 80 128" stroke="var(--red)" stroke-width="8" fill="none" stroke-linecap="round" stroke-opacity=".45"/>
        <path d="M108 112 L 112 116 M80 128 L 88 124" stroke="#ddd" stroke-width="4"/>
        <circle cx="90" cy="120" r="7" fill="var(--sun)"/>
        ${t(150, 46, "bíceps: se contrae", { size: 11, color: "var(--red)" })}${t(36, 160, "tríceps: se relaja", { size: 11, anchor: "start", color: "#c06060" })}${t(110, 146, "codo", { size: 10, anchor: "start", color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>Lesiones del aparato locomotor</h3><p>Las lesiones más frecuentes son la <b>fractura</b> (rotura de un hueso), el <b>esguince</b> (estiramiento o rotura de un ligamento, típico del tobillo), la <b>luxación</b> (un hueso se sale de su articulación), la <b>contractura</b> (un músculo se queda contraído y duele) y la <b>tendinitis</b> (inflamación de un tendón por sobreesfuerzo). Ante un golpe con sospecha de fractura hay que <mark>inmovilizar</mark> la zona y no intentar colocarla. En los esguinces y contracturas ayudan el reposo, el frío local en las primeras horas y elevar la zona. Siempre conviene que lo revise un profesional sanitario.</p>`,
    },
    {
      html: `<h3>Cuidar huesos y músculos</h3><p>El <b>ejercicio</b> regular fortalece los músculos y hace los huesos más densos; en la adolescencia se forma casi toda la masa ósea que tendremos de adultos. Una dieta con <b>calcio</b> (lácteos, legumbres, frutos secos) y <b>vitamina D</b> (que fabrica la piel con el sol) es esencial. Con la edad aparece la <mark>osteoporosis</mark>: los huesos pierden calcio, se vuelven porosos y se rompen con facilidad. Una buena <b>postura</b> al sentarse, levantar pesos doblando las rodillas y llevar la mochila con las dos asas y con menos del 10 % del peso corporal previenen el dolor de espalda. Calentar y estirar evita lesiones.</p>`,
    },
  ],
  figura: {
    titulo: "El movimiento, paso a paso",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cadena del movimiento: cerebro da la orden, nervio la lleva, el músculo se contrae, el tendón tira del hueso y el hueso gira en la articulación">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["cerebro", "da la orden", "var(--pen)"], ["nervio", "lleva el impulso", "var(--pen)"], ["músculo", "se contrae", "var(--red)"], ["tendón", "tira del hueso", "#8a8a8a"], ["hueso", "palanca que gira", "var(--ink)"]].map(([n, d, c], i) => { const x = 20 + i * 122; return `<rect x="${x}" y="60" width="110" height="100" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${t(x + 55, 104, n, { size: 18, color: c, font: D })}${t(x + 55, 130, d, { size: 12, weight: 400 })}${i < 4 ? fl(x + 111, 110, x + 121, 110, "var(--muted)") : ""}`; }).join("")}
      ${t(320, 40, "parte activa (músculos) + parte pasiva (huesos y articulaciones)", { size: 14, color: "var(--muted)" })}
      ${t(320, 196, "los músculos solo tiran: trabajan por parejas antagonistas", { size: 14, color: "var(--red)" })}
    </svg>`,
  },
  video: { id: "zBj34cis3SU", titulo: "El sistema locomotor | El sistema óseo y muscular", canal: "Smile and Learn - Español", vistas: 2876946, megusta: 0, busqueda: "aparato locomotor huesos y músculos" },
  ejemplos: [
    { enunciado: "Al chutar un balón, ¿qué músculo de la pierna se contrae para estirar la rodilla y cuál se relaja?",
      pasos: ["Estirar la rodilla es el movimiento de extensión.", "Lo hace el cuádriceps, en la parte delantera del muslo.", "Su antagonista, en la parte trasera (isquiotibiales), se relaja."],
      resultado: "se contrae el cuádriceps y se relajan los isquiotibiales." },
    { enunciado: "Clasifica estas articulaciones: suturas del cráneo, rodilla, unión entre dos vértebras, hombro.",
      pasos: ["Suturas del cráneo: no se mueven, son fijas.", "Rodilla y hombro: mucho movimiento, son móviles.", "Vértebras: poco movimiento gracias a los discos, son semimóviles."],
      resultado: "fijas: suturas; semimóvil: vértebras; móviles: rodilla y hombro." },
    { enunciado: "Lucía pesa 50 kg. ¿Cuánto debería pesar como máximo su mochila?",
      pasos: ["Se recomienda no superar el 10 % del peso corporal.", "10 % de 50 kg = 0,10 · 50 = 5 kg."],
      resultado: "unos 5 kg como máximo." },
  ],
  errores: [
    "Pensar que los huesos son estructuras muertas: son órganos vivos que crecen y se reparan.",
    "Confundir tendón y ligamento: el tendón une músculo con hueso; el ligamento une hueso con hueso.",
    "Creer que un músculo puede empujar: solo tira, por eso trabajan por parejas.",
    "Decir que la médula ósea es lo mismo que la médula espinal: una fabrica sangre y la otra es nerviosa.",
    "Intentar colocar una fractura o una luxación: hay que inmovilizar y pedir ayuda.",
  ],
  ejercicios: [
    { q: "Cita cuatro funciones del esqueleto.", sol: "Sostener el cuerpo, proteger órganos, permitir el movimiento junto con los músculos, fabricar células sanguíneas y almacenar calcio." },
    { q: "¿Qué huesos forman la caja torácica y qué protegen?", sol: "Las costillas, el esternón y las vértebras dorsales. Protegen el corazón y los pulmones." },
    { q: "Diferencia el tejido óseo compacto del esponjoso.", sol: "El compacto es macizo y forma la capa externa; el esponjoso tiene huecos, está en el interior y en él se encuentra la médula ósea roja." },
    { q: "Pon un ejemplo de hueso largo, corto y plano.", sol: "Largo: fémur. Corto: hueso de la muñeca (carpo). Plano: omóplato." },
    { q: "¿Qué estructuras facilitan el movimiento en una articulación móvil?", sol: "El cartílago, que es liso, y el líquido sinovial, que lubrica. Los ligamentos mantienen unidos los huesos." },
    { q: "Explica con tus palabras cómo se contrae una fibra muscular.", sol: "Con el impulso nervioso, la miosina tira de la actina; los filamentos se deslizan, se solapan más y la fibra se acorta." },
    { q: "¿Qué son los músculos antagonistas? Pon un ejemplo.", sol: "Parejas de músculos que hacen movimientos opuestos: cuando uno se contrae, el otro se relaja. Ejemplo: bíceps y tríceps." },
    { q: "Diferencia esguince, luxación y fractura.", sol: "Esguince: lesión de un ligamento. Luxación: un hueso se sale de la articulación. Fractura: rotura de un hueso." },
    { q: "¿Qué es la osteoporosis y cómo se previene?", sol: "Pérdida de calcio que vuelve los huesos frágiles. Se previene con ejercicio, calcio, vitamina D y sin tabaco ni alcohol, sobre todo formando huesos fuertes en la juventud." },
    { q: "Da tres consejos para cuidar la espalda en clase.", sol: "Sentarse con la espalda apoyada, levantar la mochila doblando las rodillas y llevarla con las dos asas y poco peso." },
  ],
  quiz: [
    { q: "Un adulto tiene…", o: ["150 huesos", "206 huesos", "300 huesos"], a: 1, e: "206." },
    { q: "El tendón une…", o: ["hueso con hueso", "músculo con hueso", "músculo con músculo"], a: 1, e: "Músculo con hueso." },
    { q: "La médula ósea roja fabrica…", o: ["células de la sangre", "impulsos nerviosos", "hormonas"], a: 0, e: "Glóbulos y plaquetas." },
    { q: "El hueso más largo es…", o: ["el húmero", "el fémur", "la tibia"], a: 1, e: "El fémur." },
    { q: "La rodilla es una articulación…", o: ["fija", "semimóvil", "móvil"], a: 2, e: "Móvil." },
    { q: "Las proteínas de la contracción son…", o: ["actina y miosina", "insulina y glucagón", "queratina"], a: 0, e: "Actina y miosina." },
    { q: "Para doblar el codo se contrae…", o: ["el tríceps", "el bíceps", "el gemelo"], a: 1, e: "El bíceps." },
    { q: "El esguince afecta a…", o: ["un ligamento", "un hueso", "un nervio"], a: 0, e: "A un ligamento." },
    { q: "La vitamina que ayuda a fijar el calcio es…", o: ["la C", "la D", "la K"], a: 1, e: "La vitamina D." },
    { q: "La parte activa del aparato locomotor son…", o: ["los huesos", "los músculos", "los ligamentos"], a: 1, e: "Los músculos." },
  ],
  examen: [
    { q: "Los discos de cartílago entre vértebras forman articulaciones…", o: ["fijas", "semimóviles", "móviles"], a: 1, e: "Permiten poco movimiento." },
    { q: "Un músculo puede…", o: ["solo tirar", "solo empujar", "tirar y empujar"], a: 0, e: "Solo tira." },
    { q: "La osteoporosis es…", o: ["pérdida de masa ósea", "una infección", "un tipo de fractura"], a: 0, e: "Huesos porosos y frágiles." },
  ],
  feynman: ["Qué funciones tiene el esqueleto además de movernos", "Cómo se contrae un músculo y por qué trabajan por parejas", "Qué lesiones son frecuentes y cómo se previenen"],
  mapa: mapa("APARATO LOCOMOTOR", "var(--eso)", [
    ["Huesos", "206 · compacto · esponjoso · médula", "var(--ink)"],
    ["Articulaciones", "fijas · semimóviles · móviles", "var(--sun)"],
    ["Músculos", "tendones · actina · miosina", "var(--red)"],
    ["Salud", "ejercicio · calcio · postura", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Funciones del esqueleto", "Sostén, protección, movimiento, fabricar sangre y almacenar calcio."],
    ["Médula ósea roja", "Tejido del interior de los huesos que fabrica células de la sangre."],
    ["Articulación móvil", "Con cartílago, líquido sinovial y ligamentos; por ejemplo, la rodilla."],
    ["Ligamento", "Une hueso con hueso."],
    ["Tendón", "Une músculo con hueso."],
    ["Actina y miosina", "Proteínas que se deslizan para contraer el músculo."],
    ["Antagonistas", "Pareja de músculos con acciones opuestas, como bíceps y tríceps."],
    ["Osteoporosis", "Pérdida de calcio que hace los huesos frágiles."],
  ],
  familias: ["Pesad la mochila y comprobad que no pasa del 10 % del peso de quien la lleva.", "Tocad juntos el bíceps y el tríceps mientras se dobla y se estira el brazo.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cuerpo humano: sistema óseo y muscular, articulaciones, contracción muscular, lesiones frecuentes y hábitos posturales (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Hueso de pollo en vinagre una semana frente a otro calcinado: papel de las sales y de las proteínas.", "Maqueta de brazo con cartón, gomas y cuerdas para ver los antagonistas.", "Coordinación con Educación Física para analizar el calentamiento."],
  },
  fuentes: [RD, wiki("Aparato locomotor", "Aparato_locomotor"), wiki("Articulación (anatomía)", "Articulaci%C3%B3n_(anatom%C3%ADa)")],
  revisado: "2026-11-12",
};
