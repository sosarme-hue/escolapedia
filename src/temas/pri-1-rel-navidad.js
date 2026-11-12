// Religión 1º de Primaria: la Navidad.
const { mapa } = require("./_util");
const { svg, rot, big, nino, estrella, corazon, vela, nota, suelo, PROF, FUENTES } = require("./_pri1-dib");

const MADERA = "#8a5a2b";
const maria = (x, y, s = 1, pose = "pie") => nino(x, y, { c: "var(--water)", nina: true, pelo: "#5b3a1e", s, pose });
const jose = (x, y, s = 1, pose = "pie") => nino(x, y, { c: MADERA, pelo: "#3b2a1a", s, pose });
const bebe = (x, y) => `<g><path d="M${x - 20} ${y} l6 -16 h28 l6 16z" fill="#c99a5b"/><path d="M${x - 14} ${y - 16} h28" stroke="var(--sun)" stroke-width="4"/><ellipse cx="${x}" cy="${y - 20}" rx="12" ry="6" fill="var(--card)" stroke="var(--line)"/><circle cx="${x - 7}" cy="${y - 22}" r="5" fill="#f3c9a1"/></g>`;
const oveja = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="-12" rx="14" ry="9" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><circle cx="13" cy="-16" r="5" fill="var(--muted)"/><path d="M-8 -4 V0 M8 -4 V0" stroke="var(--muted)" stroke-width="3"/></g>`;
const corona = (x, y, c) => `<path d="M${x - 16} ${y} V${y - 18} l8 8 l8 -12 l8 12 l8 -8 V${y}z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>`;
const regalo = (x, y, c = "var(--red)", w = 36) => `<g><rect x="${x - w / 2}" y="${y - w}" width="${w}" height="${w}" rx="3" fill="${c}"/><path d="M${x} ${y - w} V${y} M${x - w / 2} ${y - w / 2} H${x + w / 2}" stroke="var(--sun)" stroke-width="4"/><path d="M${x} ${y - w} q-10 -10 -12 0 M${x} ${y - w} q10 -10 12 0" stroke="var(--sun)" stroke-width="3" fill="none"/></g>`;
const abeto = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-5" y="-12" width="10" height="12" fill="${MADERA}"/><path d="M-32 -12 L0 -40 L32 -12z M-26 -34 L0 -60 L26 -34z M-18 -54 L0 -76 L18 -54z" fill="var(--leaf)"/><circle cx="-12" cy="-22" r="3.5" fill="var(--red)"/><circle cx="10" cy="-40" r="3.5" fill="var(--sun)"/><circle cx="-4" cy="-58" r="3.5" fill="var(--water)"/></g>`;

module.exports = {
  materia: "Religión",
  curso: "1-primaria",
  titulo: "La Navidad",
  minutos: 20,
  objetivos: ["Saber que en Navidad celebramos el nacimiento de Jesús", "Conocer los personajes del belén: María, José, los pastores y los Reyes Magos", "Vivir la Navidad compartiendo y con alegría"],
  claves: ["Navidad", "Adviento", "Belén", "pastores", "Reyes Magos", "belén"],
  pregunta: {
    texto: "En diciembre las calles se llenan de luces. ¿Sabes qué fiesta celebramos?",
    respuesta: "Celebramos la <mark>Navidad</mark>: el cumpleaños de Jesús. Por eso estamos alegres y nos hacemos regalos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la Navidad?</h3><p>En Navidad celebramos que <mark>nació Jesús</mark>.</p><p>Es como su <b>cumpleaños</b>. Lo celebramos el <b>25 de diciembre</b>.</p><p>Los cristianos creemos que Jesús es el Hijo de Dios. Vino al mundo como un bebé pequeño y pobre. Vino para enseñarnos a querernos. Por eso la Navidad es una fiesta de <mark>alegría</mark> y de paz.</p><p>¡Feliz Navidad!</p>`,
      svg: svg("Una hoja de calendario con el 25 de diciembre y una estrella", `<rect x="80" y="30" width="100" height="110" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><rect x="80" y="30" width="100" height="30" rx="10" fill="var(--red)"/><rect x="80" y="50" width="100" height="10" fill="var(--red)"/>${rot(130, 52, "DICIEMBRE", { color: "#fff", size: 13 })}${big(130, 116, "25", "var(--red)", 46)}${estrella(210, 50, 16)}${estrella(48, 110, 10)}${rot(130, 168, "¡Nace Jesús!", { color: "var(--pen)", size: 15 })}`),
    },
    {
      html: `<h3>El Adviento: nos preparamos</h3><p>Antes de Navidad hay <b>cuatro semanas</b> para prepararnos. Se llaman <mark>Adviento</mark>.</p><p>En muchas casas se pone una <b>corona de Adviento</b>. Tiene cuatro velas.</p><p>Cada domingo se enciende una vela más. Cuando están las cuatro, ¡ya llega la Navidad! Es como esperar a un amigo que viene de visita.</p><p>Nos preparamos portándonos bien y ayudando a los demás.</p>`,
      svg: svg("Corona de Adviento verde con cuatro velas, tres encendidas", `<ellipse cx="130" cy="120" rx="96" ry="26" fill="none" stroke="var(--leaf)" stroke-width="14"/>${[0, 1, 2, 3].map((i) => i < 3 ? vela(64 + i * 44, 118, ["var(--bac, #7b3fc4)", "var(--bac, #7b3fc4)", "#f4a7c4"][i]) : `<rect x="${58 + i * 44}" y="88" width="12" height="30" rx="2" fill="var(--bac, #7b3fc4)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}${rot(130, 168, "3 velas: ¡queda una semana!", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>El viaje a Belén</h3><p>María esperaba un bebé. José y María tuvieron que hacer un <mark>largo viaje</mark> a Belén.</p><p>María iba montada en un <b>burrito</b>.</p><p>Al llegar, buscaron un sitio para dormir. Pero todo estaba lleno: <b>no había sitio</b> para ellos. Al final, encontraron un establo con animales.</p><p>Fue un camino largo y cansado, pero confiaban en Dios.</p>`,
      svg: svg("María montada en un burro y José caminando a su lado por un camino", `<g transform="translate(110 150)"><ellipse cx="0" cy="-30" rx="34" ry="14" fill="var(--muted)"/><path d="M-24 -20 V0 M-12 -20 V0 M12 -20 V0 M24 -20 V0" stroke="var(--muted)" stroke-width="5" stroke-linecap="round"/><path d="M26 -36 l14 -18 l10 4 l-8 14z" fill="var(--muted)"/><path d="M40 -56 l-2 -10 M46 -54 l2 -10" stroke="var(--muted)" stroke-width="3"/></g>${maria(110, 112, 0.8, "sentado")}${jose(200, 150, 1, "pie")}${suelo(150)}${estrella(40, 34, 10)}${rot(130, 172, "Camino de Belén", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Jesús nace en un pesebre</h3><p>En el establo, por la noche, <mark>nació Jesús</mark>.</p><p>María lo envolvió en pañales. Lo acostó en un <b>pesebre</b>, donde comían los animales.</p><p>Un buey y una mula le daban calor. No había lujos, pero sí mucho <b>amor</b>. Dios quiso nacer en un lugar sencillo y pobre.</p><p>María y José estaban muy felices con su bebé.</p>`,
      svg: svg("María y José junto al niño Jesús en el pesebre, dentro de un establo", `<path d="M30 150 V70 L130 34 L230 70 V150" fill="none" stroke="${MADERA}" stroke-width="5" stroke-linejoin="round"/>${estrella(130, 22, 11)}${maria(80, 150, 0.8, "reza")}${jose(180, 150, 0.85, "pie")}${bebe(130, 150)}${suelo(150)}${rot(130, 172, "El niño Jesús en el pesebre", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>Los pastores y los ángeles</h3><p>Cerca de allí, unos <b>pastores</b> cuidaban sus ovejas.</p><p>De pronto apareció un <mark>ángel</mark>. Les dijo: «¡Os traigo una gran alegría! Ha nacido el Salvador».</p><p>Muchos ángeles cantaban: «<b>Gloria a Dios</b> y paz a los hombres». Los pastores corrieron a Belén para ver al niño.</p><p>Fueron los primeros en visitarlo. Después lo contaron a todo el mundo.</p>`,
      svg: svg("Un pastor con dos ovejas mira a un ángel en el cielo", `<g transform="translate(180 76)"><path d="M-6 -48 q-24 -8 -28 14 q14 -4 26 0z M6 -48 q24 -8 28 14 q-14 -4 -26 0z" fill="var(--card)" stroke="var(--line)" stroke-width="2"/></g>${nino(180, 76, { c: "var(--sun)", pose: "arriba", pelo: "#e8b84a", s: 0.7 })}${nino(70, 150, { c: "var(--leaf)", s: 0.95 })}<path d="M84 150 V82 q0 -10 8 -10" stroke="${MADERA}" stroke-width="3" fill="none"/>${oveja(130, 150)}${oveja(170, 150)}${suelo(150)}${rot(130, 172, "«¡Gloria a Dios!»", { color: "var(--inf)" })}`),
    },
    {
      html: `<h3>Los Reyes Magos</h3><p>Desde Oriente llegaron unos <mark>Magos</mark>. Seguían una <b>estrella</b> que brillaba mucho.</p><p>La estrella los llevó hasta Jesús. Le ofrecieron regalos: <b>oro, incienso y mirra</b>.</p><p>En España los llamamos Melchor, Gaspar y Baltasar. Los recordamos el <mark>6 de enero</mark>. Ese día los niños reciben regalos.</p><p>Así nos acordamos de los regalos que llevaron a Jesús.</p>`,
      svg: svg("Tres coronas de reyes bajo una estrella grande con un regalo cada una", `${estrella(130, 32, 18)}<path d="M130 50 L60 88 M130 50 L130 88 M130 50 L200 88" stroke="var(--sun)" stroke-width="2" stroke-dasharray="4 4"/>${[["var(--sun)", "oro"], ["var(--red)", "incienso"], ["var(--leaf)", "mirra"]].map(([c, t], i) => `${corona(60 + i * 70, 108, c)}${regalo(60 + i * 70, 148, c, 26)}${rot(60 + i * 70, 170, t, { size: 13, color: "var(--muted)" })}`).join("")}`),
      video: { id: "6RWb0M_okSw", titulo: "Cuentos Infantiles: Los 3 reyes magos", canal: "Cuentos Infantiles", vistas: 6095677 },
    },
    {
      html: `<h3>Cómo celebramos la Navidad</h3><p>En Navidad muchas familias ponen el <mark>belén</mark>. Con figuritas recuerdan cómo nació Jesús.</p><p>También cantamos <b>villancicos</b>, adornamos un árbol y nos reunimos para comer.</p><p>Muchos cristianos van a la <b>misa</b> de Nochebuena. Es una fiesta para estar en familia y dar gracias a Dios.</p><p>Las calles se llenan de luces y todos estamos más contentos.</p>`,
      svg: svg("Un árbol de Navidad adornado y notas musicales de un villancico", `${abeto(80, 150, 1.4)}${nota(170, 80, "var(--red)")}${nota(200, 60, "var(--pen)")}${nota(226, 92, "var(--leaf)", false)}${regalo(150, 150, "var(--water)", 28)}${regalo(190, 150, "var(--red)", 22)}${suelo(150)}${rot(130, 172, "Belén · villancicos · árbol", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Compartir</h3><p>Jesús nació <b>pobre</b>. Por eso en Navidad pensamos en quien tiene menos.</p><p>Podemos <mark>compartir</mark>: llevar comida a una recogida o regalar un juguete.</p><p>También podemos visitar a los abuelos o llamar a quien está solo. El mejor regalo es el <mark>cariño</mark>.</p><p>Así la Navidad llega a todos.</p>`,
      svg: svg("Dos niños llevan cajas de regalo y comida a una caja grande con un corazón", `${nino(50, 150, { c: "var(--pen)", pose: "palmas" })}${regalo(50, 120, "var(--red)", 20)}${nino(110, 150, { c: "var(--inf)", nina: true, pose: "palmas" })}${regalo(110, 120, "var(--leaf)", 20)}<rect x="160" y="96" width="80" height="54" rx="6" fill="#c99a5b"/>${corazon(200, 126, 1.5)}${suelo(150)}${rot(130, 172, "El mejor regalo: compartir", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>Juego: monta tu belén</h3><p>¿Qué figuras <mark>no pueden faltar</mark> en un belén?</p><p>Dilas en voz alta. El niño Jesús, María y José. El buey y la mula. Los pastores y las ovejas. El ángel y la estrella. Y los tres Reyes Magos.</p><p>¡Ahora dibuja tu belén! Puedes añadir casitas, un río y palmeras.</p><p>Enséñaselo a tu familia y cuéntales la historia.</p>`,
      svg: svg("Tarjetas con figuras del belén: estrella, ángel, niño Jesús, pastor y corona de rey", `${[["estrella", estrella(36, 62, 14)], ["oveja", oveja(84, 76)], ["Jesús", bebe(132, 80)], ["pastor", nino(180, 86, { c: "var(--leaf)", s: 0.45 })], ["rey", corona(226, 76, "var(--sun)")]].map(([t, d], i) => `<rect x="${14 + i * 48}" y="34" width="44" height="66" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${d}${rot(36 + i * 48, 118, t, { size: 11, color: "var(--muted)" })}`).join("")}${rot(130, 156, "¿Qué falta en tu belén?", { color: "var(--pen)", size: 15 })}`),
    },
  ],
  figura: {
    titulo: "El belén",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Belén con el establo, María, José y el niño, un pastor con ovejas a un lado y los Reyes Magos al otro, con la estrella encima">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${estrella(320, 36, 22)}
      <path d="M210 250 V130 L320 80 L430 130 V250" fill="none" stroke="${MADERA}" stroke-width="7" stroke-linejoin="round"/>
      ${maria(270, 250, 1.3, "reza")}${jose(370, 250, 1.35)}${bebe(320, 250)}
      ${nino(110, 250, { c: "var(--leaf)", s: 1.2 })}${oveja(60, 250)}${oveja(160, 250)}
      ${[0, 1, 2].map((i) => `${nino(480 + i * 46, 250, { c: ["var(--sun)", "var(--red)", "var(--pen)"][i], s: 0.95, pelo: i === 2 ? "#222" : "var(--ink)" })}${corona(480 + i * 46, 180, ["var(--sun)", "var(--sun)", "var(--sun)"][i])}`).join("")}
      <path d="M30 250 H610" stroke="var(--line)" stroke-width="4"/>
      ${rot(110, 280, "pastores", { color: "var(--leaf)", size: 16 })}${rot(320, 280, "la Sagrada Familia", { color: "var(--pen)", size: 16 })}${rot(526, 280, "Reyes Magos", { color: "var(--inf)", size: 16 })}
    </svg>`,
  },
  video: { id: "F-en55HPxOM", titulo: "Un Cuento de Navidad para Niños - El Nacimiento de Jesús", canal: "lunacreciente", vistas: 13892121, megusta: 26677, busqueda: "la navidad nacimiento de jesús para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué celebramos en Navidad?",
      pasos: ["Pensamos en lo que pasó en Belén.", "Allí nació un bebé muy especial.", "Era Jesús, el Hijo de Dios."],
      resultado: "celebramos el nacimiento de Jesús." },
    { enunciado: "Ordena: llegan los Reyes Magos · nace Jesús · viaje a Belén.",
      pasos: ["Primero, María y José viajan a Belén.", "Después nace Jesús en el establo.", "Más tarde llegan los Reyes Magos siguiendo la estrella."],
      resultado: "viaje a Belén → nace Jesús → llegan los Reyes." },
    { enunciado: "¿Cómo puedo compartir en Navidad?",
      pasos: ["Recordamos que Jesús nació pobre.", "Pensamos en quién tiene menos o está solo.", "Elegimos algo que podemos dar: un juguete, comida o una visita."],
      resultado: "puedo regalar un juguete o visitar a los abuelos." },
  ],
  errores: [
    "Pensar que la Navidad es solo recibir regalos: celebramos el nacimiento de Jesús.",
    "Creer que Jesús nació en un palacio: nació en un establo sencillo.",
    "Confundir a los pastores con los Reyes Magos: los pastores llegaron primero; los Magos siguieron una estrella.",
    "Pensar que el Adviento es una fiesta: es el tiempo para prepararse antes de Navidad.",
  ],
  ejercicios: [
    { q: "¿Qué día celebramos el nacimiento de Jesús?", sol: "El 25 de diciembre." },
    { q: "¿Cuántas velas tiene la corona de Adviento?", sol: "Cuatro, una por cada domingo." },
    { q: "¿Dónde nació Jesús?", sol: "En un establo de Belén, y lo acostaron en un pesebre." },
    { q: "¿Quién avisó a los pastores?", sol: "Un ángel." },
    { q: "Di los nombres de los tres Reyes Magos.", sol: "Melchor, Gaspar y Baltasar." },
    { q: "¿Qué regalos llevaron los Magos?", sol: "Oro, incienso y mirra." },
    { q: "¿Qué siguieron los Reyes Magos para llegar a Jesús?", sol: "Una estrella." },
    { q: "Dibuja el pesebre con el niño Jesús.", sol: "Debe aparecer el bebé en un pesebre; pueden añadir a María y José." },
    { q: "Canta un villancico que conozcas.", sol: "Por ejemplo, «Los peces en el río» o «Campana sobre campana»." },
    { q: "Di una forma de compartir en Navidad.", sol: "Por ejemplo, llevar comida a una recogida o regalar un juguete." },
  ],
  quiz: [
    { q: "En Navidad celebramos…", o: ["el nacimiento de Jesús", "el verano", "el fin del cole"], a: 0, e: "Es el cumpleaños de Jesús." },
    { q: "¿Qué día es Navidad?", o: ["El 25 de diciembre", "El 1 de mayo", "El 6 de agosto"], a: 0, e: "El 25 de diciembre." },
    { q: "¿Cómo se llama el tiempo para prepararnos?", o: ["Verano", "Adviento", "Carnaval"], a: 1, e: "El Adviento dura cuatro semanas." },
    { q: "¿En qué viajaba María?", o: ["En un burrito", "En coche", "En barco"], a: 0, e: "María iba en un burrito." },
    { q: "¿Dónde acostaron a Jesús?", o: ["En una cama grande", "En un pesebre", "En un barco"], a: 1, e: "En el pesebre del establo." },
    { q: "¿Quién avisó a los pastores?", o: ["Un rey", "Un ángel", "Un pez"], a: 1, e: "Un ángel les dio la gran noticia." },
    { q: "¿Qué siguieron los Reyes Magos?", o: ["Un río", "Una estrella", "Un mapa"], a: 1, e: "Una estrella los guió." },
    { q: "¿Qué regaló uno de los Magos?", o: ["Oro", "Una pelota", "Un libro"], a: 0, e: "Oro, incienso y mirra." },
    { q: "¿Qué día vienen los Reyes Magos?", o: ["El 6 de enero", "El 25 de julio", "El 1 de enero"], a: 0, e: "El 6 de enero." },
    { q: "El mejor regalo de Navidad es…", o: ["el cariño", "el más caro", "el más grande"], a: 0, e: "Compartir y querer es lo más importante." },
  ],
  examen: [
    { q: "¿Dónde nació Jesús?", o: ["En Belén", "En Roma", "En París"], a: 0, e: "En un establo de Belén." },
    { q: "¿Qué ponemos en casa para recordar el nacimiento?", o: ["Un belén", "Una tienda", "Un columpio"], a: 0, e: "El belén con sus figuritas." },
    { q: "¿Quiénes llegaron primero a ver a Jesús?", o: ["Los pastores", "Los Reyes Magos", "Los apóstoles"], a: 0, e: "Los pastores fueron corriendo esa noche." },
    { q: "¿Cuántos Reyes Magos hay?", o: ["Dos", "Tres", "Cinco"], a: 1, e: "Melchor, Gaspar y Baltasar." },
  ],
  feynman: ["Qué celebramos en Navidad", "Quiénes fueron a ver al niño Jesús", "Qué es el Adviento"],
  mapa: mapa("LA NAVIDAD", "var(--pri)", [
    ["Adviento", "4 semanas para prepararnos", "var(--bac, #7b3fc4)"],
    ["Nace Jesús", "Belén · 25 de diciembre", "var(--red)"],
    ["Visitas", "pastores · Reyes Magos", "var(--inf)"],
    ["Celebramos", "belén · villancicos · compartir", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["¿Qué celebramos en Navidad?", "El nacimiento de Jesús."],
    ["¿Qué día es Navidad?", "El 25 de diciembre."],
    ["¿Qué es el Adviento?", "Cuatro semanas para prepararnos."],
    ["¿Dónde nació Jesús?", "En un establo de Belén."],
    ["¿Quién avisó a los pastores?", "Un ángel."],
    ["¿Cómo se llaman los Reyes Magos?", "Melchor, Gaspar y Baltasar."],
    ["¿Qué regalaron los Magos?", "Oro, incienso y mirra."],
    ["¿Qué es un villancico?", "Una canción de Navidad."],
  ],
  familias: [
    "Montad juntos el belén y que el niño o la niña coloque las figuras mientras contáis la historia.",
    "Haced una corona de Adviento sencilla con cartulina y encended una vela de papel cada domingo.",
    "Cantad un villancico en familia y aprended uno nuevo.",
    "Elegid juntos un juguete o alimento para donar a una recogida solidaria.",
  ],
  profesores: PROF("Religión Católica, primer ciclo: el Adviento y la Navidad como celebración del nacimiento de Jesús (Lc 2; Mt 2), sus personajes y tradiciones, y el compartir como expresión cristiana. Área de opción dentro del marco del RD 157/2022", ["Belén de clase con figuras hechas por el alumnado.", "Calendario de Adviento con una buena acción por día.", "Recogida solidaria de alimentos o juguetes en el aula."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
