// Religión 3º Primaria. Jesús, el buen pastor (Jn 10; Lc 15; Sal 23). Pasajes bíblicos contados con nuestras palabras. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, persona, H, AZ, RO, VE, NA, SO, MO, AG } = P;

// Oveja sencilla.
const oveja = (x, y, c = "var(--muted)") => `<ellipse cx="${x}" cy="${y}" rx="14" ry="9" fill="#fff" stroke="${c}" stroke-width="1.8"/><circle cx="${x + 14}" cy="${y - 4}" r="5" fill="${c}"/><path d="M${x - 7} ${y + 8} v 7 M${x + 7} ${y + 8} v 7" stroke="${c}" stroke-width="2"/>`;
// Pastor con una oveja sobre los hombros (la oveja detrás, la cabeza del pastor visible).
const cargada = (x, y, c) => `<ellipse cx="${x}" cy="${y + 14}" rx="30" ry="10" fill="#fff" stroke="var(--muted)" stroke-width="1.8"/><circle cx="${x + 30}" cy="${y + 8}" r="5.5" fill="var(--muted)"/>${persona(x, y, c, { brazos: [[-24, -2], [24, -2]] })}`;
// Pastor con cayado.
const pastor = (x, y, c) => `${persona(x, y, c)}<path d="M${x + 18} ${y + 70} V ${y + 6} q 0 -12 -10 -10" stroke="${NA}" stroke-width="3" fill="none"/>`;

module.exports = P.tema({
  materia: "Religión",
  titulo: "Jesús, el buen pastor",
  minutos: 45,
  objetivos: ["Conocer cómo era el trabajo de los pastores en tiempos de Jesús", "Comprender por qué Jesús dice «Yo soy el buen pastor»", "Conocer la parábola de la oveja perdida y el salmo 23", "Descubrir que Dios nos conoce, nos cuida y nos busca siempre"],
  claves: ["pastor", "rebaño", "oveja", "cayado", "redil", "buen pastor", "parábola", "oveja perdida", "salmo 23", "conocer", "cuidar", "buscar", "alegría", "Palestina"],
  pregunta: ["¿Qué hace un pastor con sus ovejas?", "Las lleva a buscar hierba y agua, las <b>protege</b> de los lobos, las cura si se hacen daño y, si una se pierde, <mark>sale a buscarla</mark>. Jesús dijo: «Yo soy el buen pastor». Hoy descubrirás qué quería decir con esas palabras."],
  bloques: [
    ["Los pastores en tiempos de Jesús", `<p>En la tierra de Jesús, <b>Palestina</b>, había muchos <mark>pastores</mark>. Cuidaban rebaños de ovejas y cabras en los campos y montes.</p><p>El trabajo de un pastor era duro:</p><ul><li>Caminaba muchos kilómetros buscando <b>hierba</b> y <b>agua</b>.</li><li>Dormía al aire libre para vigilar el rebaño.</li><li>Llevaba un bastón curvado, el <b>cayado</b>, para guiar a las ovejas y defenderlas.</li><li>Por la noche las metía en el <b>redil</b>, un corral de piedras.</li></ul>`,
      svg("Un pastor con su cayado y su rebaño junto al redil", `${pastor(46, 50, NA)}${[[110, 110], [142, 120], [174, 108], [130, 140]].map(([x, y]) => oveja(x, y)).join("")}<path d="M196 150 V 96 H 250 V 150" fill="none" stroke="${AG}" stroke-width="5" stroke-dasharray="10 3"/>${t(222, 168, "el redil", { s: 11, d: true, c: AG })}${t(46, 168, "el cayado", { s: 11, d: true, c: NA })}${t(150, 30, "el rebaño", { s: 12.5, d: true })}`)],
    ["«Yo soy el buen pastor»", `<p>Jesús hablaba con ejemplos que la gente conocía. Un día dijo: «<i>Yo soy el <mark>buen pastor</mark>. El buen pastor da la vida por sus ovejas</i>» (Jn 10,11).</p><p>Con estas palabras Jesús quería decir que él cuida de nosotros como un buen pastor cuida de su rebaño:</p><ul><li>Nos <b>conoce</b>.</li><li>Nos <b>guía</b> por el buen camino.</li><li>Nos <b>protege</b> y nos <b>defiende</b>.</li><li>Nos quiere tanto que da su vida por nosotros.</li></ul>`,
      svg("Jesús, el buen pastor, con una oveja sobre los hombros", `${cargada(130, 54, AZ)}${t(130, 22, "«Yo soy el buen pastor»", { s: 12.5, d: true, c: MO })}${t(130, 160, "Jn 10,11", { s: 11, c: "var(--muted)" })}`),
      P.V("pasB")],
    ["Conozco a mis ovejas", `<p>Jesús añadió: «<i>Conozco a mis ovejas y ellas me conocen a mí</i>» (Jn 10,14). Y también: «<i>Mis ovejas <mark>escuchan mi voz</mark></i>» (Jn 10,27).</p><p>Los pastores de entonces llamaban a cada oveja por su nombre, y las ovejas reconocían su voz: si las llamaba otra persona, no le seguían.</p><p>Esto quiere decir que, para Jesús, ninguno de nosotros es «uno más»: <b>nos conoce a cada uno</b>, con nuestro nombre, lo que nos gusta y lo que nos preocupa.</p>`,
      svg("Cada oveja tiene su nombre y reconoce la voz del pastor", `${pastor(40, 50, AZ)}<path d="M66 60 q 20 -10 34 0" stroke="${MO}" stroke-width="2" fill="none"/><path d="M66 74 q 26 -12 40 0" stroke="${MO}" stroke-width="2" fill="none"/>${[["Lola", 140, 60], ["Blanca", 196, 74], ["Copo", 150, 118], ["Nube", 210, 132]].map(([n, x, y]) => `${oveja(x, y)}${t(x, y - 16, n, { s: 10.5, d: true, c: VE })}`).join("")}${t(130, 168, "«conozco a mis ovejas»", { s: 12, d: true, c: MO })}`)],
    ["La oveja perdida", `<p>Jesús contó una <b>parábola</b>, una historia con enseñanza (Lc 15,4-7):</p><p>Un pastor tenía <mark>cien ovejas</mark>. Al contar por la noche vio que faltaba una. ¿Qué hizo? Dejó las <b>noventa y nueve</b> en un lugar seguro y salió a buscar la que se había perdido.</p><p>Buscó entre las piedras, por los barrancos… hasta que la encontró. No la regañó: se la puso sobre los hombros, muy contento, y volvió a casa.</p>`,
      H.flujo("La parábola de la oveja perdida", ["100|ovejas", "falta|una", "sale a|buscarla", "la|encuentra", "¡fiesta!"], VE)],
    ["¡Alegraos conmigo!", `<p>Cuando el pastor llegó a casa con la oveja, llamó a sus amigos y vecinos: «<i>¡Alegraos conmigo, porque he encontrado la oveja que se me había perdido!</i>».</p><p>Jesús explicó: así de contento se pone <mark>Dios</mark> cuando alguien que se había alejado vuelve a Él (Lc 15,7).</p><p>Esta parábola nos dice que para Dios <b>cada persona es importante</b>. Si nos alejamos o nos equivocamos, Dios no se olvida de nosotros: nos busca y se alegra cuando volvemos.</p>`,
      svg("El pastor vuelve con la oveja y celebra con sus vecinos", `${cargada(70, 54, VE)}${[160, 200, 236].map((x, i) => persona(x, 62, [AZ, RO, SO][i], { brazos: [[-14, -14], [14, -14]] })).join("")}${t(130, 24, "«¡Alegraos conmigo!»", { s: 13, d: true, c: MO })}${t(130, 166, "Dios se alegra cuando volvemos", { s: 11, c: "var(--muted)" })}`)],
    ["El Señor es mi pastor", `<p>Mucho antes que Jesús, el rey <b>David</b>, que de niño había sido pastor, escribió una oración muy famosa: el <mark>salmo 23</mark>. Empieza así:</p><p style="text-align:center"><i>«El Señor es mi pastor, nada me falta.<br>En verdes praderas me hace recostar,<br>me conduce hacia fuentes tranquilas».</i></p><p>Y más adelante dice: «<i>Aunque camine por cañadas oscuras, nada temo, porque tú vas conmigo</i>».</p><p>Es una oración de <b>confianza</b>: con Dios a nuestro lado no tenemos que tener miedo.</p>`,
      svg("Pradera verde con un arroyo tranquilo: el salmo 23", `<path d="M0 120 Q 70 96 130 116 T 260 108 V 180 H 0 Z" fill="${VE}" fill-opacity=".25"/><path d="M0 150 Q 60 136 120 152 T 260 144" stroke="${AZ}" stroke-width="7" fill="none" opacity=".6"/>${oveja(70, 110)}${oveja(170, 116)}<circle cx="220" cy="40" r="14" fill="${SO}" opacity=".8"/>${t(110, 34, "«El Señor es mi pastor,", { s: 12, d: true, c: MO })}${t(110, 52, "nada me falta»", { s: 12, d: true, c: MO })}${t(130, 176, "Salmo 23", { s: 10.5, c: "var(--muted)" })}`)],
    ["El pastor bueno y el que no lo es", `<p>Jesús comparó al buen pastor con un <b>asalariado</b>, alguien a quien solo le pagan por cuidar las ovejas, pero que no las quiere (Jn 10,12-13).</p><p>Cuando viene el lobo, el asalariado <b>huye</b> y deja a las ovejas solas. En cambio, el buen pastor se queda y las <mark>defiende</mark>, aunque sea peligroso.</p><p>La diferencia está en el <b>amor</b>: quien quiere de verdad no abandona en los momentos difíciles.</p>`,
      H.dos("Buen pastor y asalariado", ["Buen pastor", ["conoce", "cuida", "se queda", "defiende"], VE], ["Asalariado", ["no conoce", "no le importan", "huye", "abandona"], RO])],
    ["También nosotros cuidamos", `<p>Jesús es el buen pastor, pero nosotros también podemos <mark>cuidar</mark> de los demás:</p><ul><li>Fijarnos en quien está <b>solo</b> en el recreo e invitarle a jugar.</li><li>Ir a buscar a un amigo que se ha enfadado y hacer las paces.</li><li>Ayudar a un hermano pequeño.</li><li>Cuidar de los animales y de la naturaleza.</li></ul><p>Cada vez que cuidamos a alguien, nos parecemos un poco al buen pastor.</p>`,
      P.filas("Cuidar como el buen pastor", [["En el recreo", "invitar al que está solo", AZ], ["Con los amigos", "hacer las paces", VE], ["En casa", "ayudar al pequeño", NA], ["Con la naturaleza", "cuidar los animales", RO]])],
    ["Una imagen muy antigua", `<p>La imagen del buen pastor es una de las <b>más antiguas</b> del arte cristiano. Los primeros cristianos de Roma la pintaban en las paredes de las <b>catacumbas</b> hace casi dos mil años.</p><p>Aparece un joven pastor con una oveja sobre los hombros. Era una forma de decir: «<i>Jesús nos lleva y nos cuida</i>».</p><p>Hoy la puedes encontrar en vidrieras, cuadros y estampas. ¡Busca alguna en la iglesia de tu barrio!</p>`,
      svg("Pintura antigua del buen pastor en una catacumba", `<path d="M40 170 V 70 Q 130 -6 220 70 V 170" fill="${SO}" fill-opacity=".14" stroke="${NA}" stroke-width="3"/>${cargada(130, 70, AZ)}${t(130, 22, "catacumbas de Roma", { s: 12, d: true, c: NA })}`)],
  ],
  figura: ["El buen pastor", H.figCols("Jesús, el buen pastor", [["Pastor", ["hierba y agua", "cayado", "redil", "vigila"], NA], ["Jesús", ["«Yo soy el", "buen pastor»", "conoce", "da la vida"], AZ], ["Parábola", ["100 ovejas", "una perdida", "la busca", "¡fiesta!"], VE], ["Salmo 23", ["«El Señor es", "mi pastor»", "nada me falta", "confianza"], MO]])],
  video: P.V("pasV", true),
  ejemplos: [
    ["¿Por qué Jesús se llama a sí mismo «buen pastor»?", ["Un buen pastor conoce, guía y protege a sus ovejas.", "Jesús hace lo mismo con nosotros."], "Porque nos conoce, nos cuida y nos quiere tanto que da la vida por nosotros."],
    ["¿Qué enseña la parábola de la oveja perdida?", ["El pastor deja las 99 y busca la que falta.", "Al encontrarla hace fiesta."], "Que para Dios cada persona es importante y se alegra cuando alguien vuelve a Él."],
    ["Un compañero está solo en el recreo. ¿Qué harías como buen pastor?", ["El buen pastor se fija en la oveja que falta.", "Va a buscarla."], "Acercarme, hablar con él e invitarle a jugar."],
  ],
  errores: [
    "Pensar que el pastor se enfada con la oveja perdida: se alegra al encontrarla.",
    "Creer que la parábola habla solo de animales: habla de cómo nos quiere Dios.",
    "Confundir el salmo 23 con un evangelio: es una oración del Antiguo Testamento.",
    "Pensar que solo importan las 99 ovejas: Dios busca a cada una.",
  ],
  ejercicios: [
    ["¿Qué hacía un pastor en tiempos de Jesús?", "Llevaba las ovejas a buscar hierba y agua, las vigilaba y las protegía."],
    ["¿Qué es el cayado?", "El bastón curvado del pastor."],
    ["¿Qué es el redil?", "El corral donde se guardan las ovejas por la noche."],
    ["Completa: «Yo soy el buen pastor. El buen pastor da la ___ por sus ovejas».", "Vida."],
    ["¿Cuántas ovejas tenía el pastor de la parábola?", "Cien."],
    ["¿Qué hizo el pastor cuando faltó una oveja?", "Dejó las otras noventa y nueve y salió a buscarla."],
    ["¿Qué hizo al encontrarla?", "Se la puso sobre los hombros y hizo fiesta con sus vecinos."],
    ["¿Cómo empieza el salmo 23?", "«El Señor es mi pastor, nada me falta»."],
    ["¿Qué hace el asalariado cuando viene el lobo?", "Huye y abandona a las ovejas."],
    ["Escribe una forma de cuidar a los demás como el buen pastor.", "Por ejemplo: invitar a jugar a un compañero que está solo."],
  ],
  quiz: [
    ["Jesús dijo: «Yo soy el…»", ["buen pastor", "rey del mundo", "gran maestro"], "Jn 10,11."],
    ["El bastón del pastor se llama…", ["cayado", "redil", "cántaro"], "Curvado."],
    ["El redil es…", ["el corral de las ovejas", "un lobo", "un pozo"], "De noche."],
    ["El pastor de la parábola tenía…", ["cien ovejas", "diez ovejas", "mil ovejas"], "Lc 15."],
    ["Cuando falta una oveja, el pastor…", ["sale a buscarla", "se olvida", "compra otra"], "Deja las 99."],
    ["Al encontrarla, el pastor…", ["hace fiesta", "la regaña", "la vende"], "«¡Alegraos conmigo!»."],
    ["Las ovejas reconocen…", ["la voz del pastor", "el color del cielo", "el ruido del río"], "Jn 10,27."],
    ["«El Señor es mi pastor» es…", ["el salmo 23", "un evangelio", "una carta"], "De David."],
    ["Cuando viene el lobo, el asalariado…", ["huye", "defiende las ovejas", "llama a Jesús"], "No las quiere."],
    ["Los primeros cristianos pintaban al buen pastor en…", ["las catacumbas", "los barcos", "las monedas"], "Roma."],
  ],
  examen: [
    ["El buen pastor da… por sus ovejas.", ["la vida", "dinero", "comida"], "Jn 10,11."],
    ["La parábola de la oveja perdida enseña que…", ["Dios busca a cada persona", "las ovejas se pierden siempre", "hay que tener muchas ovejas"], "Lc 15."],
    ["El salmo 23 es una oración de…", ["confianza", "enfado", "queja"], "Nada temo."],
    ["El salmo 23 lo atribuimos a…", ["David", "Moisés", "José"], "Fue pastor."],
  ],
  feynman: ["Cómo trabajaban los pastores en tiempos de Jesús", "Qué quería decir Jesús con «Yo soy el buen pastor»", "Qué pasa en la parábola de la oveja perdida", "Qué dice el salmo 23", "Cómo podemos cuidar a los demás"],
  mapa: ["EL BUEN PASTOR", [["Pastor", "guía, cuida, protege", NA], ["Jesús", "conoce y da la vida", AZ], ["Oveja perdida", "Dios busca y se alegra", VE], ["Salmo 23", "nada me falta", MO]]],
  tarjetas: [
    ["Pastor", "Cuida, guía y protege el rebaño"],
    ["Cayado", "Bastón curvado del pastor"],
    ["Redil", "Corral de las ovejas"],
    ["Buen pastor", "Jesús, que da la vida por sus ovejas"],
    ["Oveja perdida", "Parábola: el pastor la busca y hace fiesta"],
    ["99 y 1", "Cada persona es importante para Dios"],
    ["Salmo 23", "«El Señor es mi pastor, nada me falta»"],
    ["Asalariado", "Huye cuando viene el lobo"],
  ],
  familias: ["Leed juntos la parábola de la oveja perdida (Lc 15,4-7).", "Aprended de memoria el comienzo del salmo 23.", "Pensad a quién podéis cuidar esta semana.", "Buscad una imagen del buen pastor en una iglesia o en internet."],
  saberes: "Jesús, el buen pastor (Jn 10,1-18. 27): el oficio de pastor en Palestina, Jesús conoce, guía y da la vida por los suyos; la parábola de la oveja perdida (Lc 15,4-7) y la alegría de Dios; el salmo 23 como oración de confianza; el cuidado de los demás; la imagen del buen pastor en el arte paleocristiano",
  ideas: ["Mural de un rebaño con una oveja por alumno y su nombre.", "Dramatización de la parábola de la oveja perdida.", "Oración de clase con el salmo 23."],
});
