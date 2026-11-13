// Religión 2º de Primaria: Jesús nace en Belén.
const P = require("./_pri2a");
const { svg, rot, nino, estrella, luna, corazon, casa, vela, suelo, flechaR, nube } = P;

// Pesebre con el niño.
const pesebre = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-24 0 L-30 -22 H30 L24 0z" fill="#a8743c" stroke="var(--ink)" stroke-width="1.5"/><path d="M-28 -22 q28 -6 56 0" stroke="var(--sun)" stroke-width="4"/><ellipse cx="0" cy="-26" rx="16" ry="7" fill="var(--card)" stroke="var(--ink)" stroke-width="1.2"/><circle cx="-10" cy="-28" r="6" fill="#f3c9a1"/><path d="M-14 -0 l-6 10 M14 0 l6 10" stroke="#7a4f22" stroke-width="3"/></g>`;
// Portal (establo).
const portal = (x, y, w = 140) => `<g><path d="M${x - w / 2} ${y} V${y - 70} L${x} ${y - 100} L${x + w / 2} ${y - 70} V${y}" fill="#c99a5b" fill-opacity=".35" stroke="#7a4f22" stroke-width="4" stroke-linejoin="round"/></g>`;
// Burro y buey sencillos.
const burro = (x, y, c = "var(--muted)") => `<g transform="translate(${x} ${y})"><ellipse rx="14" ry="9" fill="${c}"/><path d="M10 -4 l10 -10 l6 4 l-6 10z" fill="${c}"/><path d="M18 -14 l-2 -8 M22 -12 l2 -8" stroke="${c}" stroke-width="3"/><path d="M-8 8 v8 M8 8 v8" stroke="${c}" stroke-width="3"/></g>`;
// Pastor con cayado.
const pastor = (x, y, c = "var(--leaf)", s = 1) => `${nino(x, y, { c, s })}<path d="M${x + 16 * s} ${y} V${y - 64 * s} q0 -10 -8 -8" stroke="#8a5a2b" stroke-width="3" fill="none"/>`;
// Oveja.
const oveja = (x, y) => `<g transform="translate(${x} ${y})"><ellipse rx="12" ry="8" fill="var(--card)" stroke="var(--ink)" stroke-width="1.2"/><circle cx="12" cy="-4" r="5" fill="var(--ink)"/><path d="M-6 7 v6 M6 7 v6" stroke="var(--ink)" stroke-width="2"/></g>`;
// Corona de rey.
const corona = (x, y, c = "var(--sun)") => `<path d="M${x - 10} ${y} v-10 l5 5 l5 -9 l5 9 l5 -5 v10z" fill="${c}" stroke="var(--ink)" stroke-width="1"/>`;
const rey = (x, y, c) => `${nino(x, y, { c })}${corona(x, y - 72)}`;

module.exports = P.tema({
  materia: "Religión",
  titulo: "Jesús nace en Belén",
  objetivos: ["Conocer el relato del nacimiento de Jesús en Belén", "Identificar a los personajes del belén: María, José, los pastores y los Magos", "Descubrir el sentido cristiano de la Navidad y del Adviento"],
  claves: ["Navidad", "Belén", "pesebre", "pastores", "ángeles", "estrella", "Reyes Magos", "Adviento"],
  pregunta: ["Si fueras un rey muy importante, ¿dónde te gustaría nacer: en un palacio o en un establo?", "Jesús, el Hijo de Dios, nació en un <mark>establo</mark> de Belén y lo acostaron en un <b>pesebre</b>. Quiso nacer pobre para estar cerca de todos."],
  bloques: [
    ["El viaje a Belén", `<p>Cuando a María le faltaba poco para tener a su bebé, el emperador mandó que todos se apuntaran en un <b>censo</b> en el pueblo de sus antepasados.</p><p>José era de la familia del rey David, así que tuvieron que viajar de Nazaret a <mark>Belén</mark>.</p><p>Fue un camino <b>largo</b>. María iba en un burrito y José caminaba a su lado.</p>`,
      svg("María en un burro y José caminando hacia Belén", `${burro(110, 132, "var(--muted)")}${nino(106, 124, { nina: true, c: "var(--pen)", pose: "sentado", s: 0.8 })}${nino(56, 156, { c: "#8a5a2b", s: 1.1 })}${casa(214, 150, "var(--sun)")}${flechaR(140, 150, 186, 150, "var(--muted)")}${rot(214, 92, "Belén", { color: "var(--red)", size: 14 })}${suelo(156)}${rot(130, 174, "De Nazaret a Belén", { color: "var(--pen)" })}`)],
    ["No había sitio", `<p>Cuando llegaron a Belén, el pueblo estaba <b>lleno de gente</b>. José llamó a muchas puertas, pero todos decían: «<mark>No hay sitio</mark>».</p><p>Al final, encontraron un <b>establo</b>, un lugar donde dormían los animales.</p><p>Era pobre y sencillo, pero allí estaban juntos y a cubierto.</p>`,
      svg("José llama a una puerta y le dicen que no hay sitio", `${casa(70, 150, "var(--red)")}${casa(200, 150, "var(--leaf)")}${nino(130, 150, { c: "#8a5a2b" })}${P.bocadillo(70, 54, 116, "¡No hay sitio!")}${P.bocadillo(200, 54, 80, "¡Lleno!")}${suelo(150)}${rot(130, 172, "Buscan un lugar", { color: "var(--pen)" })}`)],
    ["Nace Jesús", `<p>Aquella noche, en el establo, nació <mark>Jesús</mark>. María lo envolvió en pañales y lo acostó en un <b>pesebre</b>, el cajón donde comen los animales.</p><p>A su lado estaban María y José, felices. Según la tradición, un <b>buey</b> y una <b>mula</b> le daban calor.</p><p>Los cristianos celebramos este nacimiento en <b>Navidad</b>, el <b>25 de diciembre</b>.</p>`,
      svg("Jesús en el pesebre con María y José dentro del portal", `${portal(130, 150, 180)}${pesebre(130, 150)}${nino(76, 150, { nina: true, c: "var(--pen)", pose: "agacha" })}${nino(184, 150, { c: "#8a5a2b", s: 1.05 })}${estrella(130, 28, 12)}${suelo(150)}${rot(130, 172, "Navidad: nace Jesús", { color: "var(--pen)" })}`), P.V("navB")],
    ["Los ángeles y los pastores", `<p>Cerca de Belén, unos <mark>pastores</mark> cuidaban sus ovejas de noche. De pronto, se les apareció un <b>ángel</b> con mucha luz.</p><p>Les dijo: «No tengáis miedo. Os traigo una <b>buena noticia</b>: hoy ha nacido el Salvador».</p><p>Y muchos ángeles cantaron: <b>«Gloria a Dios en el cielo y paz en la tierra»</b>.</p>`,
      svg("Un ángel en el cielo nocturno anuncia a los pastores con sus ovejas", `<rect x="10" y="10" width="240" height="100" rx="10" fill="#1c2550"/>${estrella(40, 30, 5, "#ffe9a0")}${estrella(220, 26, 5, "#ffe9a0")}${estrella(180, 60, 4, "#ffe9a0")}<circle cx="120" cy="60" r="34" fill="var(--sun)" opacity=".3"/>${nino(120, 92, { c: "var(--sun)", pose: "arriba", s: 0.85 })}${pastor(40, 156)}${pastor(80, 156, "var(--red)", 0.9)}${oveja(160, 150)}${oveja(196, 152)}${oveja(226, 148)}${suelo(158)}${rot(130, 174, "¡Gloria a Dios!", { color: "var(--pen)" })}`)],
    ["Los pastores visitan a Jesús", `<p>Los pastores fueron <mark>corriendo</mark> a Belén. Encontraron a María, a José y al niño en el pesebre, tal como les había dicho el ángel.</p><p>Se llenaron de <b>alegría</b> y contaron a todos lo que habían visto.</p><p>Los primeros en visitar a Jesús fueron gente <b>sencilla y pobre</b>. ¡Jesús vino para todos!</p>`,
      svg("Los pastores llegan al portal con una oveja", `${portal(150, 150, 150)}${pesebre(150, 150, 0.9)}${pastor(50, 156)}${oveja(86, 150)}${nino(196, 150, { nina: true, c: "var(--pen)", s: 0.9, pose: "agacha" })}${suelo(156)}${rot(130, 174, "Visita de los pastores", { color: "var(--pen)" })}`)],
    ["La estrella y los Magos", `<p>Desde Oriente, unos <mark>Magos</mark> vieron una <b>estrella</b> nueva en el cielo. Sabían que anunciaba el nacimiento de un gran rey.</p><p>La siguieron durante muchos días hasta llegar a Jesús. Le llevaron regalos: <b>oro</b>, <b>incienso</b> y <b>mirra</b>.</p><p>Lo celebramos el <b>6 de enero</b>, el día de los Reyes Magos.</p>`,
      svg("Tres reyes magos siguen una estrella con regalos", `${estrella(200, 30, 16)}<path d="M200 46 L130 80" stroke="var(--sun)" stroke-width="2" stroke-dasharray="4 4"/>${rey(60, 156, "var(--red)")}${rey(120, 156, "var(--pen)")}${rey(180, 156, "var(--leaf)")}<rect x="70" y="110" width="12" height="10" fill="var(--sun)" stroke="var(--ink)"/><rect x="130" y="110" width="12" height="10" fill="var(--inf)" stroke="var(--ink)"/><rect x="190" y="110" width="12" height="10" fill="var(--muted)" stroke="var(--ink)"/>${suelo(156)}${rot(130, 174, "Oro, incienso y mirra", { color: "var(--pen)" })}`)],
    ["Preparamos la Navidad: el Adviento", `<p>Antes de Navidad hay <b>cuatro semanas</b> para prepararnos. Se llaman <mark>Adviento</mark>, que significa «llegada».</p><p>En muchas casas e iglesias se pone una <b>corona de Adviento</b> con <b>cuatro velas</b>. Cada domingo se enciende una más.</p><p>Es tiempo de esperar con alegría y de portarnos mejor con los demás.</p>`,
      svg("Una corona de Adviento con cuatro velas, tres encendidas", `<ellipse cx="130" cy="120" rx="90" ry="26" fill="var(--leaf)" stroke="#1f6b3a" stroke-width="3"/>${[0, 1, 2, 3].map((i) => `<g transform="translate(${64 + i * 44} ${114 - (i % 3 === 0 ? 0 : 8)})"><rect x="-7" y="-40" width="14" height="40" rx="2" fill="${i === 2 ? "#f4a6b8" : "var(--bac)"}" stroke="var(--ink)" stroke-width="1.2"/>${i < 3 ? `<path d="M0 -42 q-6 -8 0 -16 q6 8 0 16z" fill="var(--sun)"/>` : ""}</g>`).join("")}${rot(130, 170, "4 semanas de Adviento", { color: "var(--pen)" })}`)],
    ["¿Para qué sirve?", `<p>La Navidad no es solo regalos y turrón. Los cristianos celebran que <mark>Dios se hizo niño</mark> para estar con nosotros.</p><p>Por eso en Navidad ponemos el <b>belén</b>, cantamos <b>villancicos</b> y nos reunimos en familia.</p><p>También es tiempo de <b>compartir</b> con quien está solo o tiene poco, como Jesús, que nació pobre.</p>`,
      svg("Una familia canta villancicos junto al belén", `${portal(70, 150, 90)}${pesebre(70, 150, 0.7)}${nino(150, 150, { c: "var(--red)", pose: "canta", boca: "abierta" })}${nino(190, 150, { nina: true, c: "var(--pen)", pose: "canta", boca: "abierta", s: 0.85 })}${nino(226, 150, { c: "var(--leaf)", s: 1.15 })}${P.nota(170, 50)}${P.nota(200, 40, "var(--red)")}${suelo(150)}${rot(130, 172, "Villancicos en familia", { color: "var(--pen)" })}`)],
    ["Juego: monta tu belén", `<p>Recorta y colorea las figuras del <b>belén</b>: María, José, el Niño Jesús, el buey, la mula, los pastores, las ovejas, el ángel, la estrella y los Reyes Magos.</p><p>Colócalas en orden: primero el portal, luego la Sagrada Familia y después los demás.</p><p>¡Los <mark>Reyes</mark> se van acercando poco a poco y llegan el 6 de enero!</p>`,
      svg("Figuras recortables del belén en fila", `${[["María", "var(--pen)", true], ["José", "#8a5a2b", false], ["Pastor", "var(--leaf)", false], ["Rey", "var(--red)", false]].map(([t, c, n], i) => `<rect x="${12 + i * 61}" y="40" width="56" height="100" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 4"/>${nino(40 + i * 61, 122, { c, nina: n, s: 0.75 })}${i === 3 ? corona(40 + i * 61, 66) : ""}${rot(40 + i * 61, 134, t, { size: 11 })}`).join("")}${rot(130, 168, "Recorta y monta tu belén", { color: "var(--pen)" })}`)],
  ],
  figura: ["El belén", `<svg viewBox="0 0 640 260" role="img" aria-label="Belén con el portal, María, José y el Niño, los pastores, el ángel, la estrella y los Reyes Magos">
    <rect width="640" height="260" rx="16" fill="#1c2550"/>
    ${estrella(320, 30, 16, "#ffe9a0")}${estrella(80, 40, 5, "#ffe9a0")}${estrella(560, 50, 6, "#ffe9a0")}${luna(600, 40, 14)}
    <path d="M0 220 H640 V260 H0z" fill="#8a5a2b"/>
    ${portal(320, 220, 200)}${pesebre(320, 220, 1.2)}${nino(260, 220, { nina: true, c: "var(--pen)", pose: "agacha", s: 1.1 })}${nino(380, 220, { c: "#c99a5b", s: 1.15 })}
    ${pastor(110, 220)}${oveja(150, 214)}${oveja(70, 216)}${nino(180, 100, { c: "var(--sun)", pose: "arriba", s: 0.8 })}
    ${rey(470, 220, "var(--red)")}${rey(520, 220, "var(--water)")}${rey(570, 220, "var(--leaf)")}
  </svg>`],
  video: P.V("navV", true),
  ejemplos: [
    ["¿Por qué Jesús nació en un establo?", ["María y José viajaron a Belén por el censo.", "El pueblo estaba lleno y no había sitio para ellos."], "porque no encontraron otro lugar donde quedarse."],
    ["¿Quiénes fueron los primeros en visitar a Jesús?", ["Un ángel avisó a unos pastores que estaban cerca.", "Fueron corriendo al establo."], "los pastores."],
    ["¿Qué regalos llevaron los Magos?", ["Siguieron la estrella desde Oriente.", "Ofrecieron tres regalos al niño."], "oro, incienso y mirra."],
  ],
  errores: [
    "Pensar que Jesús nació en Nazaret: nació en Belén, aunque creció en Nazaret.",
    "Creer que los Reyes Magos llegaron la misma noche que los pastores: la Iglesia lo celebra el 6 de enero.",
    "Pensar que la Navidad trata solo de regalos: celebra el nacimiento de Jesús.",
    "Confundir el pesebre con una cuna: es el cajón donde comen los animales.",
  ],
  ejercicios: [
    ["¿Por qué viajaron María y José a Belén?", "Para apuntarse en el censo que mandó el emperador."],
    ["¿Dónde nació Jesús?", "En un establo de Belén."],
    ["¿Dónde lo acostó María?", "En un pesebre."],
    ["¿Qué día celebramos la Navidad?", "El 25 de diciembre."],
    ["¿Qué cantaron los ángeles?", "«Gloria a Dios en el cielo y paz en la tierra»."],
    ["¿Qué siguieron los Magos?", "Una estrella."],
    ["¿Qué día celebramos a los Reyes Magos?", "El 6 de enero."],
    ["¿Cuántas velas tiene la corona de Adviento?", "Cuatro."],
    ["Nombra cinco figuras del belén.", "Por ejemplo: María, José, el Niño, los pastores y los Reyes Magos."],
    ["Di algo que puedes compartir en Navidad.", "Respuesta libre: juguetes, tiempo con los abuelos, comida para quien lo necesita…"],
  ],
  quiz: [
    ["Jesús nació en…", ["Belén", "Nazaret", "Roma"], "María y José habían viajado allí."],
    ["Lo acostaron en…", ["un pesebre", "una cama de oro", "un barco"], "El cajón donde comen los animales."],
    ["Viajaron a Belén por…", ["el censo del emperador", "unas vacaciones", "una fiesta"], "Tenían que apuntarse en su pueblo."],
    ["Los primeros en visitar a Jesús fueron…", ["los pastores", "los reyes", "los soldados"], "Un ángel les avisó."],
    ["Los ángeles cantaron…", ["«Gloria a Dios»", "«Cumpleaños feliz»", "nada"], "Y paz en la tierra."],
    ["Los Magos siguieron…", ["una estrella", "un río", "un mapa"], "La estrella los guio hasta Jesús."],
    ["Los regalos de los Magos fueron…", ["oro, incienso y mirra", "juguetes", "dulces"], "Tres regalos para un rey."],
    ["La Navidad se celebra el…", ["25 de diciembre", "6 de enero", "1 de mayo"], "Es el nacimiento de Jesús."],
    ["El Adviento dura…", ["cuatro semanas", "un día", "un año"], "Es el tiempo de preparación."],
    ["En Navidad los cristianos celebran que…", ["Dios se hizo niño", "empieza el verano", "hay vacaciones"], "Jesús, el Hijo de Dios, nace."],
  ],
  examen: [
    ["¿Quiénes estaban junto a Jesús en el establo?", ["María y José", "Noé y su familia", "Adán y Eva"], "La Sagrada Familia."],
    ["¿Qué día llegan los Reyes Magos?", ["El 6 de enero", "El 25 de diciembre", "El 31 de diciembre"], "Lo celebramos con el roscón."],
    ["¿Qué es el Adviento?", ["El tiempo para prepararnos a la Navidad", "Un villancico", "Un regalo"], "Cuatro semanas de espera."],
    ["¿Qué anunció el ángel a los pastores?", ["Que había nacido el Salvador", "Que llovería", "Que se fueran"], "Una buena noticia."],
  ],
  feynman: ["Por qué Jesús nació en un establo", "Quiénes visitaron a Jesús y cómo supieron que había nacido", "Qué celebramos en Navidad"],
  mapa: ["NAVIDAD", [
    ["Belén", "nace en un establo", "#a8743c"],
    ["Pastores", "avisados por el ángel", "var(--leaf)"],
    ["Magos", "siguen la estrella", "var(--sun)"],
    ["Adviento", "4 semanas para preparar", "var(--pen)"],
  ]],
  tarjetas: [
    ["¿Dónde nació Jesús?", "En un establo de Belén"],
    ["¿Qué es un pesebre?", "El cajón donde comen los animales"],
    ["¿Quién avisó a los pastores?", "Un ángel"],
    ["¿Qué cantaron los ángeles?", "Gloria a Dios y paz en la tierra"],
    ["Regalos de los Magos", "Oro, incienso y mirra"],
    ["Día de Navidad", "25 de diciembre"],
    ["Día de Reyes", "6 de enero"],
    ["¿Qué es el Adviento?", "Cuatro semanas para preparar la Navidad"],
  ],
  familias: [
    "Montad juntos el belén y contad la historia mientras colocáis cada figura.",
    "Encended una vela de la corona de Adviento cada domingo.",
    "Cantad un villancico tradicional y explicad lo que cuenta.",
    "Pensad un gesto para compartir en Navidad con alguien que está solo o tiene menos.",
  ],
  saberes: "El nacimiento de Jesús en Belén (Lc 2,1-20; Mt 2,1-12); personajes del belén; el Adviento y la Navidad en el año litúrgico y en la tradición",
  ideas: ["Belén de aula con figuras hechas por los alumnos.", "Corona de Adviento de clase con compromisos semanales.", "Escucha y canto de villancicos populares."],
});
