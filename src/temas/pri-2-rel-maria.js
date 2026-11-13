// Religión 2º de Primaria: María, la madre de Jesús.
const P = require("./_pri2a");
const { svg, rot, nino, sol, estrella, corazon, flor, casa, iglesia, vela, suelo, arbol } = P;

// María con manto azul (figura de palitos con manto).
const maria = (x, y, s = 1, pose = "pie") => `<g><path transform="translate(${x} ${y}) scale(${s})" d="M-13 -64 q13 -20 26 0 l9 64 h-44z" fill="var(--water)" opacity=".4"/>${nino(x, y, { nina: true, c: "var(--pen)", s, pose })}<path transform="translate(${x} ${y}) scale(${s})" d="M-12 -64 q12 -18 24 0" stroke="var(--pen)" stroke-width="3" fill="none"/></g>`;
// Ángel sencillo con alas.
const angel = (x, y, s = 1) => `<g><path transform="translate(${x} ${y}) scale(${s})" d="M-4 -46 q-26 -12 -22 14 q10 -6 22 -4z M4 -46 q26 -12 22 14 q-10 -6 -22 -4z" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${nino(x, y, { c: "var(--sun)", s })}<ellipse cx="${x}" cy="${y - 76 * s}" rx="${9 * s}" ry="${3 * s}" fill="none" stroke="var(--sun)" stroke-width="2"/></g>`;
// Rosario sencillo.
const rosario = (x, y, r = 34) => `${[...Array(20)].map((_, i) => { const a = (i / 20) * Math.PI * 2; return `<circle cx="${(x + Math.cos(a) * r).toFixed(1)}" cy="${(y + Math.sin(a) * r * 0.8).toFixed(1)}" r="${i % 5 === 0 ? 4 : 2.6}" fill="var(--pen)"/>`; }).join("")}<path d="M${x} ${y + r * 0.8} v22" stroke="var(--pen)" stroke-width="2"/>${P.cruz(x, y + r * 0.8 + 46, 0.6, "var(--pen)")}`;

module.exports = P.tema({
  materia: "Religión",
  titulo: "María, la madre de Jesús",
  objetivos: ["Conocer quién es María y dónde vivía", "Recordar el relato de la Anunciación", "Descubrir por qué los cristianos quieren a María y cómo la recuerdan"],
  claves: ["María", "Nazaret", "Anunciación", "ángel Gabriel", "Ave María", "madre", "Virgen", "fiestas de María"],
  pregunta: ["¿Por qué crees que tantas iglesias, colegios y niñas se llaman María?", "Porque <mark>María</mark> es la <b>madre de Jesús</b>. Los cristianos la quieren mucho y la llaman también «madre nuestra»."],
  bloques: [
    ["Una joven de Nazaret", `<p><mark>María</mark> era una joven que vivía en <b>Nazaret</b>, un pueblo pequeño de un país que hoy llamamos <b>Israel</b>.</p><p>Era sencilla y buena. Ayudaba en casa, iba a buscar agua al pozo y rezaba cada día.</p><p>María estaba prometida con un carpintero llamado <b>José</b>.</p>`,
      svg("María con un cántaro junto a las casas blancas de Nazaret", `${[0, 1, 2].map((i) => `<rect x="${20 + i * 40}" y="${70 - (i % 2) * 10}" width="34" height="${40 + (i % 2) * 10}" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><rect x="${32 + i * 40}" y="96" width="10" height="14" fill="#8a5a2b"/>`).join("")}${maria(190, 156, 1.2)}<path d="M212 96 q8 -2 10 10 q-2 10 -10 8z" fill="#c99a5b" stroke="var(--ink)" stroke-width="1.2"/>${sol(40, 30, 12)}${suelo(156)}${P.rot(130, 174, "María vivía en Nazaret", { color: "var(--pen)" })}`)],
    ["La visita del ángel", `<p>Un día, Dios envió al <mark>ángel Gabriel</mark> a casa de María.</p><p>El ángel le dijo: <b>«Alégrate, María, llena de gracia. El Señor está contigo»</b>.</p><p>María se quedó muy sorprendida. ¡Un ángel de Dios hablaba con ella! Esta visita se llama la <mark>Anunciación</mark>, porque el ángel le anunció una gran noticia.</p>`,
      svg("El ángel Gabriel saluda a María", `${angel(70, 150, 1.1)}${maria(180, 150, 1.15, "reza")}${P.bocadillo(110, 30, 150, "¡Alégrate, María!")}${suelo(150)}${rot(130, 172, "La Anunciación", { color: "var(--pen)" })}`), P.V("marB")],
    ["La gran noticia", `<p>El ángel le explicó: «Vas a tener un <b>hijo</b> y le pondrás por nombre <mark>Jesús</mark>. Será el <b>Hijo de Dios</b>».</p><p>María preguntó cómo podía ser. El ángel le dijo que el <b>Espíritu Santo</b> lo haría posible, porque «para Dios <b>no hay nada imposible</b>».</p><p>¡Era la noticia más grande del mundo!</p>`,
      svg("Una estrella brillante y un corazón con el nombre de Jesús", `${estrella(130, 50, 30)}${corazon(130, 116, 2.4)}${rot(130, 112, "Jesús", { color: "var(--card)", size: 16 })}${rot(130, 166, "Hijo de Dios", { color: "var(--pen)" })}`)],
    ["El «sí» de María", `<p>María confió en Dios y respondió: <mark>«Aquí está la esclava del Señor. Hágase en mí según tu palabra»</mark>.</p><p>Con estas palabras, María dijo <b>«sí»</b> a Dios. No sabía todo lo que iba a pasar, pero se fio de Él.</p><p>Por su sí, Jesús vino al mundo. María nos enseña a <b>escuchar</b> a Dios y a confiar.</p>`,
      svg("María con las manos juntas dice sí", `${maria(90, 156, 1.35, "reza")}${P.bocadillo(184, 50, 110, "¡Sí!")}${corazon(184, 110, 1.6)}${suelo(156)}${rot(130, 174, "María confía en Dios", { color: "var(--pen)" })}`)],
    ["María ayuda a su prima Isabel", `<p>Poco después, María supo que su prima <mark>Isabel</mark>, que era mayor, también esperaba un bebé.</p><p>Enseguida se puso en camino para <b>ayudarla</b>. ¡El viaje era largo y por las montañas!</p><p>Isabel se alegró mucho al verla. María se quedó con ella <b>tres meses</b>. María piensa siempre en los demás.</p>`,
      svg("María abraza a su prima Isabel junto a una casa", `${casa(210, 150, "var(--red)")}${maria(110, 150, 1.1)}${nino(150, 150, { nina: true, c: "var(--inf)", s: 1.1, pelo: "var(--muted)" })}<path d="M118 100 Q130 92 142 100" stroke="var(--muted)" stroke-width="3" fill="none"/>${arbol(36, 150, 0.8)}${suelo(150)}${rot(130, 172, "María e Isabel", { color: "var(--pen)" })}`)],
    ["Una madre que cuida", `<p>María fue una <mark>madre</mark> muy buena. Cuidó de Jesús cuando era bebé, le enseñó a andar, a hablar y a rezar.</p><p>Junto a <b>José</b>, formaron la <b>Sagrada Familia</b>.</p><p>María acompañó a Jesús <b>siempre</b>, en los momentos alegres y también en los tristes. ¡Nunca lo dejó solo!</p>`,
      svg("María, José y Jesús niño de la mano", `${maria(80, 156, 1.25)}${nino(130, 156, { c: "var(--red)", s: 0.75 })}${nino(182, 156, { c: "#8a5a2b", s: 1.3 })}<path d="M94 110 L118 122 M142 122 L166 112" stroke="var(--muted)" stroke-width="3"/>${estrella(130, 40, 12)}${suelo(156)}${rot(130, 174, "La Sagrada Familia", { color: "var(--pen)" })}`)],
    ["Madre de todos", `<p>Los cristianos creen que María es también <mark>nuestra madre</mark>. Jesús se la regaló a todos.</p><p>Por eso le rezamos y le contamos nuestras cosas, como a una madre.</p><p>La oración más conocida es el <b>Ave María</b>, que empieza con las palabras del ángel: <b>«Dios te salve, María, llena eres de gracia…»</b>.</p>`,
      svg("Un rosario y una vela encendida", `${rosario(90, 70, 40)}${vela(196, 140)}${vela(222, 140, "var(--water)")}${rot(196, 166, "Ave María", { color: "var(--pen)" })}`)],
    ["¿Para qué sirve?", `<p>María nos enseña a <mark>decir sí</mark> a lo bueno, aunque cueste, y a confiar.</p><p>También nos enseña a <b>ayudar</b> sin que nos lo pidan, como hizo con su prima Isabel.</p><p>En España hay muchas fiestas de María: la <b>Virgen del Pilar</b>, la <b>Virgen de Montserrat</b>, la <b>Inmaculada</b>… ¿Cuál se celebra en tu pueblo o ciudad?</p>`,
      svg("Una iglesia con flores y una estrella: fiesta de la Virgen", `${iglesia(130, 150)}${flor(70, 150)}${flor(84, 150, "var(--sun)")}${flor(176, 150, "var(--inf)")}${flor(190, 150)}${estrella(214, 40, 10)}${suelo(150)}${rot(130, 172, "Fiestas de María", { color: "var(--pen)" })}`)],
    ["Juego: el mensaje del ángel", `<p>Jugad al <b>teléfono</b>: el primero hace de ángel Gabriel y dice al oído: <mark>«Alégrate, María, el Señor está contigo»</mark>.</p><p>El mensaje pasa de oído en oído. ¿Llega igual al final?</p><p>Después, cada uno dibuja una <b>flor para María</b> y escribe en ella una cosa en la que puede decir «sí» esta semana.</p>`,
      svg("Una fila de niños se pasan un mensaje al oído", `${[0, 1, 2, 3].map((i) => nino(40 + i * 60, 150, { c: ["var(--sun)", "var(--pen)", "var(--red)", "var(--leaf)"][i], nina: i % 2 === 1 })).join("")}${[0, 1, 2].map((i) => `<path d="M${54 + i * 60} 86 q16 -14 30 0" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`).join("")}${P.bocadillo(130, 36, 160, "¡Alégrate, María!")}${suelo(150)}${rot(130, 172, "El teléfono del ángel", { color: "var(--pen)" })}`)],
  ],
  figura: ["La vida de María", `<svg viewBox="0 0 640 260" role="img" aria-label="María en Nazaret, la Anunciación, el sí de María y María madre de Jesús">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${["Nazaret", "La Anunciación", "El sí de María", "Madre de Jesús"].map((t, i) => `<rect x="${24 + i * 152}" y="24" width="136" height="210" rx="14" fill="var(--card)" stroke="var(--water)" stroke-width="3"/>${rot(92 + i * 152, 220, t, { size: 14 })}`).join("")}
    ${maria(92, 190, 1.2)}${angel(220, 190, 0.9)}${maria(268, 190, 0.9, "reza")}${maria(396, 190, 1.2, "reza")}${corazon(396, 60, 1.4)}${maria(530, 190, 1.2)}${nino(570, 190, { c: "var(--red)", s: 0.7 })}
  </svg>`],
  video: P.V("marV", true),
  ejemplos: [
    ["¿Qué le dijo el ángel Gabriel a María?", ["La saludó: «Alégrate, llena de gracia».", "Le anunció que tendría un hijo, Jesús, el Hijo de Dios."], "que sería la madre de Jesús."],
    ["¿Qué respondió María?", ["Se fio de Dios aunque no lo entendiera todo.", "Dijo: «Hágase en mí según tu palabra»."], "dijo que sí a Dios."],
    ["Tu compañero se ha caído y llora. ¿Qué haría María?", ["María ayudó enseguida a su prima Isabel.", "Ella piensa siempre en los demás."], "me acercaría a ayudarle y consolarle."],
  ],
  errores: [
    "Confundir a María con su prima Isabel: María es la madre de Jesús.",
    "Pensar que el ángel que visitó a María se llamaba Miguel: se llamaba Gabriel.",
    "Creer que María vivía en Belén: vivía en Nazaret.",
    "Pensar que María solo está en el pasado: los cristianos la sienten como madre de todos hoy.",
  ],
  ejercicios: [
    ["¿Dónde vivía María?", "En Nazaret."],
    ["¿Cómo se llamaba el ángel que la visitó?", "Gabriel."],
    ["¿Cómo se llama esa visita?", "La Anunciación."],
    ["¿Qué nombre debía poner María a su hijo?", "Jesús."],
    ["¿Qué contestó María al ángel?", "Que sí: «Hágase en mí según tu palabra»."],
    ["¿A quién fue a ayudar María?", "A su prima Isabel."],
    ["¿Con quién estaba prometida María?", "Con José, el carpintero."],
    ["¿Cómo empieza el Ave María?", "«Dios te salve, María, llena eres de gracia»."],
    ["Nombra una fiesta de la Virgen en España.", "Por ejemplo: el Pilar, Montserrat o la Inmaculada."],
    ["Dibuja una flor para María con un «sí» tuyo.", "Respuesta libre: por ejemplo, «sí a ayudar en casa»."],
  ],
  quiz: [
    ["María es la madre de…", ["Jesús", "Noé", "Isabel"], "Así lo anunció el ángel."],
    ["María vivía en…", ["Nazaret", "Roma", "Egipto"], "Un pueblo pequeño de Galilea."],
    ["El ángel que visitó a María se llamaba…", ["Gabriel", "Rafael", "Pedro"], "Fue enviado por Dios."],
    ["La visita del ángel se llama…", ["Anunciación", "Navidad", "Pascua"], "Le anunció una gran noticia."],
    ["María respondió al ángel…", ["que sí", "que no", "nada"], "Confió en Dios."],
    ["María fue a ayudar a…", ["su prima Isabel", "Noé", "un rey"], "Isabel esperaba un bebé."],
    ["El esposo de María era…", ["José", "Gabriel", "Adán"], "Era carpintero."],
    ["La oración a María más conocida es…", ["el Ave María", "el Génesis", "el Cántico de las criaturas"], "Empieza con el saludo del ángel."],
    ["Jesús, María y José forman…", ["la Sagrada Familia", "un equipo", "los Reyes Magos"], "Así la llamamos los cristianos."],
    ["María nos enseña a…", ["confiar y ayudar", "enfadarnos", "no escuchar"], "Dijo sí y ayudó a Isabel."],
  ],
  examen: [
    ["¿Qué anunció el ángel a María?", ["Que sería la madre de Jesús", "Que iba a llover", "Que se mudaba"], "Jesús, el Hijo de Dios."],
    ["¿Qué hizo María al saber que Isabel esperaba un bebé?", ["Fue a ayudarla", "Se quedó en casa", "Se enfadó"], "Viajó por las montañas."],
    ["¿Por qué los cristianos llaman a María «madre nuestra»?", ["Porque Jesús nos la dio como madre", "Porque era rica", "Porque era reina"], "Es madre de Jesús y de todos."],
    ["«Hágase en mí según tu palabra» lo dijo…", ["María", "Noé", "Gabriel"], "Fue su sí a Dios."],
  ],
  feynman: ["Quién es María y dónde vivía", "Qué pasó en la Anunciación", "Por qué los cristianos quieren tanto a María"],
  mapa: ["MARÍA", [
    ["Nazaret", "allí vivía", "var(--sun)"],
    ["Anunciación", "el ángel Gabriel", "var(--water)"],
    ["Su «sí»", "confía en Dios", "var(--red)"],
    ["Madre", "de Jesús y de todos", "var(--pen)"],
  ]],
  tarjetas: [
    ["¿Dónde vivía María?", "En Nazaret"],
    ["¿Quién visitó a María?", "El ángel Gabriel"],
    ["¿Qué es la Anunciación?", "La visita del ángel para anunciar que sería madre de Jesús"],
    ["¿Qué respondió María?", "Sí: «Hágase en mí según tu palabra»"],
    ["¿A quién ayudó María?", "A su prima Isabel"],
    ["El esposo de María", "José"],
    ["Oración a María", "El Ave María"],
    ["Una fiesta de la Virgen", "El Pilar, la Inmaculada, Montserrat…"],
  ],
  familias: [
    "Buscad juntos qué fiesta de la Virgen se celebra en vuestro pueblo o ciudad.",
    "Contadle cómo os cuidó a él o a ella de bebé, como María cuidó de Jesús.",
    "Aprended juntos el comienzo del Ave María.",
    "Pensad cada uno un «sí» a algo bueno para esta semana.",
  ],
  saberes: "María, madre de Jesús y madre de los creyentes; la Anunciación (Lc 1,26-38) y la Visitación (Lc 1,39-56); oraciones y fiestas marianas",
  ideas: ["Dramatización de la Anunciación y la Visitación.", "Mural de las advocaciones marianas de las comunidades de España.", "Aprendizaje del Ave María con gestos."],
});
