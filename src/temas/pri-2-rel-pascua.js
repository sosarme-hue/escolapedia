// Religión 2º de Primaria: la Pascua y la alegría.
const P = require("./_pri2a");
const { svg, rot, nino, sol, flor, cruz, vela, corazon, paloma, suelo, estrella, arbol, flechaR } = P;

// Jesús: túnica blanca con manto rojo.
const jesus = (x, y, s = 1, pose = "pie") => `<g><path transform="translate(${x} ${y}) scale(${s})" d="M-9 -50 L9 -50 L14 0 H-14z" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/><path transform="translate(${x} ${y}) scale(${s})" d="M-9 -50 L4 -50 L-12 0 H-15z" fill="var(--red)" opacity=".8"/>${nino(x, y, { c: "#8a5a2b", s, pose, pelo: "#5a3a1a" })}</g>`;
// Rama de palma.
const palma = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 Q4 -30 0 -60" stroke="var(--leaf)" stroke-width="3" fill="none"/>${[...Array(7)].map((_, i) => `<path d="M${(i * 0.6).toFixed(1)} ${-10 - i * 7} q-14 -4 -18 4 M${(i * 0.6).toFixed(1)} ${-10 - i * 7} q14 -4 18 4" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>`).join("")}</g>`;
// Sepulcro con la piedra corrida.
const sepulcro = (x, y, abierto = true) => `<g><path d="M${x - 60} ${y} V${y - 50} q60 -50 120 0 V${y}z" fill="var(--muted)" opacity=".55" stroke="var(--ink)" stroke-width="2"/><path d="M${x - 22} ${y} V${y - 34} q22 -22 44 0 V${y}z" fill="#1c2550"/><circle cx="${abierto ? x + 58 : x}" cy="${y - 22}" r="24" fill="#a3a3a3" stroke="var(--ink)" stroke-width="2"/></g>`;
// Huevo de Pascua decorado.
const huevo = (x, y, c = "var(--sun)") => `<g><ellipse cx="${x}" cy="${y}" rx="12" ry="16" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><path d="M${x - 12} ${y} q6 -5 12 0 t12 0" stroke="var(--card)" stroke-width="2" fill="none"/></g>`;
// Pan y cáliz.
const caliz = (x, y) => `<path d="M${x - 12} ${y - 40} h24 q0 18 -12 22 v14 h10 v4 h-24 v-4 h10 v-14 q-12 -4 -12 -22z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>`;

module.exports = P.tema({
  materia: "Religión",
  titulo: "La Pascua y la alegría",
  objetivos: ["Recordar lo que pasó en la Semana Santa", "Descubrir que Jesús resucitó y está vivo", "Entender por qué la Pascua es la fiesta más alegre de los cristianos"],
  claves: ["Semana Santa", "Domingo de Ramos", "Última Cena", "cruz", "resurrección", "Pascua", "alegría", "cirio pascual"],
  pregunta: ["¿Cuál crees que es la fiesta más importante para los cristianos: Navidad o Pascua?", "¡La <mark>Pascua</mark>! En Navidad celebramos que Jesús nace. En Pascua celebramos que Jesús <b>resucitó</b>: venció a la muerte y está vivo. ¡Es la mayor alegría!"],
  bloques: [
    ["Jesús entra en Jerusalén", `<p>Jesús llegó a la ciudad de <mark>Jerusalén</mark> montado en un burrito. La gente lo recibió con mucha alegría.</p><p>Movían <b>ramas de palmera y de olivo</b> y gritaban: <b>«¡Hosanna! ¡Bendito el que viene en nombre del Señor!»</b>.</p><p>Lo recordamos el <mark>Domingo de Ramos</mark>, el primer día de la Semana Santa.</p>`,
      svg("Jesús entra en Jerusalén en un burro y la gente agita palmas", `<g transform="translate(130 136)"><ellipse rx="22" ry="12" fill="var(--muted)"/><path d="M18 -6 l14 -14 l8 6 l-8 14z" fill="var(--muted)"/><path d="M-14 10 v14 M14 10 v14" stroke="var(--muted)" stroke-width="4"/></g>${jesus(126, 128, 0.85, "sentado")}${nino(40, 156, { c: "var(--leaf)", pose: "arriba" })}${palma(28, 96, 0.6)}${nino(220, 156, { nina: true, c: "var(--sun)", pose: "arriba" })}${palma(232, 96, 0.6)}${suelo(160)}${rot(130, 176, "Domingo de Ramos", { color: "var(--pen)" })}`), P.V("pasB")],
    ["La Última Cena", `<p>El <b>Jueves Santo</b>, Jesús cenó con sus <mark>doce apóstoles</mark>. Fue su <b>Última Cena</b>.</p><p>Tomó el <b>pan</b> y dijo: «Esto es mi cuerpo». Tomó el <b>vino</b> y dijo: «Esta es mi sangre». Así empezó la <b>Eucaristía</b>, que se celebra en la misa.</p><p>También les lavó los pies para enseñarles a <b>servir</b> y les dijo: «Amaos unos a otros».</p>`,
      svg("Una mesa con pan y un cáliz, y amigos alrededor", `${[0, 1, 2, 3, 4].map((i) => nino(46 + i * 42, 128, { c: ["var(--pen)", "var(--leaf)", "#8a5a2b", "var(--sun)", "var(--inf)"][i], s: i === 2 ? 0.95 : 0.85 })).join("")}<rect x="30" y="110" width="200" height="14" rx="3" fill="#a8743c" stroke="var(--ink)" stroke-width="1.5"/>${caliz(150, 110)}<ellipse cx="104" cy="104" rx="16" ry="7" fill="#d9a85b" stroke="var(--ink)" stroke-width="1.2"/>${estrella(130, 24, 8)}${rot(130, 150, "«Amaos unos a otros»", { color: "var(--pen)" })}`)],
    ["Jesús muere en la cruz", `<p>Algunas personas no querían a Jesús. Lo apresaron y, el <b>Viernes Santo</b>, lo condenaron a morir en una <mark>cruz</mark>.</p><p>Jesús sufrió mucho, pero no dejó de amar. Incluso <b>perdonó</b> a los que le hacían daño.</p><p>Fue un día muy triste. Su madre, María, estaba allí, junto a la cruz. Después pusieron a Jesús en un <b>sepulcro</b>.</p>`,
      svg("Una cruz sobre un monte en un día gris, con María al pie", `<rect x="10" y="10" width="240" height="140" rx="10" fill="var(--muted)" opacity=".18"/><path d="M60 150 Q130 90 200 150z" fill="var(--leaf)" opacity=".5"/>${cruz(130, 104, 1.8)}${nino(96, 150, { nina: true, c: "var(--pen)", s: 0.75, pose: "reza", boca: "cerrada" })}${corazon(186, 60, 1)}${rot(130, 172, "Viernes Santo", { color: "var(--pen)" })}`)],
    ["¡Jesús ha resucitado!", `<p>El <b>domingo</b> muy temprano, unas mujeres fueron al sepulcro. ¡La piedra estaba <mark>corrida</mark> y el sepulcro, vacío!</p><p>Un ángel les dijo: «No está aquí. <b>¡Ha resucitado!</b>».</p><p><mark>Resucitar</mark> es volver a la vida para siempre. Jesús venció a la muerte. ¡Es la noticia más feliz de todas!</p>`,
      svg("El sepulcro abierto y vacío con el sol saliendo", `${sol(210, 40, 18)}${sepulcro(110, 150)}${flor(40, 150)}${flor(56, 150, "var(--sun)")}${suelo(150)}${rot(130, 172, "¡Ha resucitado!", { color: "var(--leaf)" })}`)],
    ["Jesús se aparece a sus amigos", `<p>Después, Jesús <b>se apareció</b> a <mark>María Magdalena</mark> y la llamó por su nombre. Ella corrió a contárselo a los demás.</p><p>También se apareció a los apóstoles. Les dijo: <b>«Paz a vosotros»</b>. Ellos se llenaron de alegría.</p><p>Jesús les pidió que contaran a todo el mundo la buena noticia.</p>`,
      svg("Jesús resucitado con luz alrededor saluda a sus amigos", `<circle cx="130" cy="96" r="54" fill="var(--sun)" opacity=".25"/>${jesus(130, 156, 1.25, "brazos")}${nino(50, 156, { nina: true, c: "var(--red)", pose: "arriba" })}${nino(210, 156, { c: "var(--pen)", pose: "arriba" })}${suelo(156)}${rot(130, 174, "«Paz a vosotros»", { color: "var(--pen)" })}`)],
    ["La Pascua: fiesta de alegría", `<p>La <mark>Pascua de Resurrección</mark> es la fiesta <b>más importante</b> de los cristianos. Dura <b>cincuenta días</b>.</p><p>En la iglesia se enciende el <b>cirio pascual</b>, una vela grande que significa que Jesús es la <b>luz</b> que vence a la oscuridad.</p><p>Se canta <b>«¡Aleluya!»</b>, que quiere decir «¡alabad a Dios!».</p>`,
      svg("Un cirio pascual encendido con la palabra Aleluya", `<rect x="112" y="50" width="36" height="110" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${cruz(130, 110, 0.9, "var(--red)")}<path d="M130 46 q-12 -14 0 -32 q12 18 0 32z" fill="var(--sun)"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M${130 + Math.cos(i * 0.6 - 2.8) * 30} ${30 + Math.sin(i * 0.6 - 2.8) * 30} l${Math.cos(i * 0.6 - 2.8) * 10} ${Math.sin(i * 0.6 - 2.8) * 10}" stroke="var(--sun)" stroke-width="2"/>`).join("")}${rot(56, 100, "¡Aleluya!", { color: "var(--leaf)", size: 18 })}${rot(206, 100, "¡Aleluya!", { color: "var(--leaf)", size: 18 })}`)],
    ["Señales de vida nueva", `<p>La Pascua llega en <b>primavera</b>, cuando todo vuelve a la vida: brotan las flores, nacen los pollitos y los árboles se llenan de hojas.</p><p>Por eso usamos <mark>señales de vida nueva</mark>: el <b>huevo</b>, la <b>luz</b>, las <b>flores</b>.</p><p>En muchos lugares se regala la <b>mona de Pascua</b> o se pintan huevos de colores.</p>`,
      svg("Huevos de Pascua de colores, flores y un pollito", `${huevo(50, 110, "var(--red)")}${huevo(80, 116, "var(--sun)")}${huevo(110, 110, "var(--pen)")}<g transform="translate(176 118)"><ellipse rx="16" ry="13" fill="var(--sun)"/><circle cx="10" cy="-14" r="9" fill="var(--sun)"/><path d="M18 -14 l7 2 l-7 3z" fill="var(--inf)"/><circle cx="12" cy="-16" r="1.5" fill="var(--ink)"/></g>${flor(220, 140, "var(--inf)")}${flor(236, 140)}${arbol(30, 70, 0.6)}${suelo(140)}${rot(130, 168, "Vida nueva", { color: "var(--leaf)" })}`)],
    ["¿Para qué sirve?", `<p>La Pascua nos enseña que el <mark>amor es más fuerte</mark> que la tristeza y que la muerte.</p><p>Aunque a veces estemos tristes, los cristianos tienen <b>esperanza</b>: Jesús está vivo y los acompaña.</p><p>Por eso podemos llevar <b>alegría</b> a los demás: sonreír, perdonar y ayudar. ¡Ser «testigos» de la Pascua!</p>`,
      svg("Una niña sonríe y da una flor a un abuelo", `${nino(80, 156, { nina: true, c: "var(--red)", pose: "lanza" })}${flor(108, 108, "var(--sun)")}${nino(180, 156, { c: "var(--muted)", s: 1.2, pelo: "var(--muted)" })}${corazon(130, 50, 1.6)}${suelo(156)}${rot(130, 174, "Llevamos alegría", { color: "var(--pen)" })}`)],
    ["Juego: el sepulcro vacío", `<p>Prepara una caja de cartón como si fuera el <b>sepulcro</b>, con una «piedra» de papel en la entrada.</p><p>Dentro, esconde una tarjeta que diga: <mark>«¡Ha resucitado!»</mark>.</p><p>Por turnos, cada uno aparta la piedra, lee la tarjeta en voz alta y dice algo que le dé <b>alegría</b>. ¡Terminad cantando «¡Aleluya!»!</p>`,
      svg("Una caja de cartón con una piedra de papel y una tarjeta que dice Ha resucitado", `<rect x="50" y="70" width="110" height="80" rx="4" fill="#c99a5b" stroke="var(--ink)" stroke-width="2"/><path d="M80 150 V110 q25 -24 50 0 V150z" fill="#1c2550"/><circle cx="190" cy="132" r="20" fill="#a3a3a3" stroke="var(--ink)" stroke-width="2"/>${flechaR(170, 112, 186, 108)}<rect x="88" y="30" width="110" height="30" rx="6" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${rot(143, 50, "¡Ha resucitado!", { color: "var(--leaf)", size: 12 })}${rot(130, 172, "El sepulcro vacío", { color: "var(--pen)" })}`)],
  ],
  figura: ["De la Semana Santa a la Pascua", `<svg viewBox="0 0 640 260" role="img" aria-label="Domingo de Ramos, Jueves Santo, Viernes Santo y Domingo de Resurrección">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${[["Domingo de Ramos", "var(--leaf)"], ["Jueves Santo", "var(--sun)"], ["Viernes Santo", "var(--muted)"], ["¡Resurrección!", "var(--red)"]].map(([t, c], i) => `<rect x="${24 + i * 152}" y="24" width="136" height="210" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${rot(92 + i * 152, 220, t, { size: 14, color: c })}`).join("")}
    ${palma(92, 180, 1.4)}${caliz(244, 170)}<ellipse cx="244" cy="186" rx="34" ry="8" fill="#a8743c"/>${cruz(396, 160, 2.6)}${sol(548, 80, 20)}${sepulcro(548, 190)}
  </svg>`],
  video: P.V("pasV", true),
  ejemplos: [
    ["¿Qué celebramos el Domingo de Ramos?", ["Jesús llegó a Jerusalén en un burrito.", "La gente lo recibió con palmas y ramas de olivo."], "la entrada de Jesús en Jerusalén."],
    ["¿Qué encontraron las mujeres el domingo en el sepulcro?", ["La piedra estaba corrida.", "El sepulcro estaba vacío y un ángel les habló."], "que Jesús había resucitado."],
    ["¿Por qué la Pascua es tan alegre?", ["Jesús venció a la muerte.", "Está vivo y nos acompaña siempre."], "porque Jesús ha resucitado."],
  ],
  errores: [
    "Pensar que la historia de Jesús termina en la cruz: termina con la resurrección.",
    "Creer que la Pascua es solo la mona o los huevos: celebra que Jesús está vivo.",
    "Confundir el Jueves Santo con el Viernes Santo: el jueves fue la Última Cena; el viernes, la cruz.",
    "Pensar que la Navidad es la fiesta más importante: es la Pascua.",
  ],
  ejercicios: [
    ["¿Cómo entró Jesús en Jerusalén?", "Montado en un burrito, entre palmas y ramas de olivo."],
    ["¿Qué gritaba la gente?", "«¡Hosanna! ¡Bendito el que viene en nombre del Señor!»."],
    ["¿Qué pasó el Jueves Santo?", "La Última Cena de Jesús con sus apóstoles."],
    ["¿Qué pidió Jesús en la Última Cena?", "Que nos amemos unos a otros."],
    ["¿Qué pasó el Viernes Santo?", "Jesús murió en la cruz."],
    ["¿Qué encontraron las mujeres el domingo?", "El sepulcro vacío: Jesús había resucitado."],
    ["¿Qué significa resucitar?", "Volver a la vida para siempre."],
    ["¿Qué significa «aleluya»?", "«¡Alabad a Dios!»."],
    ["¿Qué es el cirio pascual?", "Una vela grande que significa que Jesús es la luz."],
    ["Dibuja una señal de vida nueva de la Pascua.", "Por ejemplo: un huevo, una flor o una vela encendida."],
  ],
  quiz: [
    ["La Semana Santa empieza el…", ["Domingo de Ramos", "Viernes Santo", "Día de Reyes"], "Jesús entra en Jerusalén."],
    ["Jesús entró en Jerusalén montado en…", ["un burrito", "un caballo", "un carro"], "La gente le recibió con palmas."],
    ["En la Última Cena, Jesús compartió…", ["el pan y el vino", "turrón", "nada"], "Así empezó la Eucaristía."],
    ["Jesús murió en la cruz el…", ["Viernes Santo", "Jueves Santo", "Domingo de Ramos"], "Fue un día muy triste."],
    ["Resucitar significa…", ["volver a la vida para siempre", "dormir", "irse de viaje"], "Jesús venció a la muerte."],
    ["El sepulcro el domingo estaba…", ["vacío", "cerrado", "lleno de flores"], "¡Jesús había resucitado!"],
    ["La fiesta más importante para los cristianos es…", ["la Pascua", "Halloween", "el cumpleaños"], "Celebra la resurrección."],
    ["«Aleluya» quiere decir…", ["¡Alabad a Dios!", "¡Adiós!", "¡Buenas noches!"], "Se canta mucho en Pascua."],
    ["El cirio pascual significa que Jesús es…", ["la luz", "la noche", "el agua"], "La luz vence a la oscuridad."],
    ["El huevo de Pascua es señal de…", ["vida nueva", "tristeza", "invierno"], "De él nace un pollito."],
  ],
  examen: [
    ["¿Qué pasó el Jueves Santo?", ["La Última Cena", "La resurrección", "La entrada en Jerusalén"], "Jesús cenó con los apóstoles."],
    ["¿Qué dijo el ángel a las mujeres?", ["¡Ha resucitado!", "Volved mañana", "Nada"], "El sepulcro estaba vacío."],
    ["¿A quién se apareció primero Jesús según el Evangelio de Juan?", ["A María Magdalena", "A Noé", "Al emperador"], "La llamó por su nombre."],
    ["¿Por qué la Pascua es una fiesta alegre?", ["Porque Jesús está vivo", "Porque hay vacaciones", "Porque hace calor"], "Venció a la muerte."],
  ],
  feynman: ["Qué pasó en cada día de la Semana Santa", "Qué significa que Jesús resucitó", "Por qué la Pascua es la fiesta más alegre"],
  mapa: ["PASCUA", [
    ["Ramos", "entrada en Jerusalén", "var(--leaf)"],
    ["Jueves", "Última Cena", "var(--sun)"],
    ["Viernes", "muere en la cruz", "var(--muted)"],
    ["Domingo", "¡resucita!", "var(--red)"],
  ]],
  tarjetas: [
    ["¿Qué recordamos el Domingo de Ramos?", "La entrada de Jesús en Jerusalén"],
    ["¿Qué pasó el Jueves Santo?", "La Última Cena"],
    ["¿Qué pasó el Viernes Santo?", "Jesús murió en la cruz"],
    ["¿Qué pasó el Domingo de Resurrección?", "Jesús resucitó"],
    ["¿Qué es resucitar?", "Volver a la vida para siempre"],
    ["¿Qué significa aleluya?", "¡Alabad a Dios!"],
    ["¿Qué es el cirio pascual?", "La vela que recuerda que Jesús es la luz"],
    ["La fiesta más importante de los cristianos", "La Pascua"],
  ],
  familias: [
    "Contad juntos lo que pasó cada día de la Semana Santa con un calendario.",
    "Pintad huevos de colores o preparad la mona y explicad que son señal de vida nueva.",
    "Si podéis, ved juntos una procesión o la celebración del Domingo de Ramos.",
    "Pensad cómo llevar alegría a un familiar o vecino durante la Pascua.",
  ],
  saberes: "La Semana Santa y la Pascua: entrada en Jerusalén, Última Cena, muerte y resurrección de Jesús (Mc 11; Lc 22-24; Jn 20); signos pascuales y la alegría cristiana",
  ideas: ["Línea del tiempo de la Semana Santa con dibujos de cada día.", "Cirio pascual de aula decorado por los alumnos.", "Juego del sepulcro vacío con mensajes de alegría."],
});
