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

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer las herramientas y la vida de un pastor", "Relacionar la oveja perdida con la moneda perdida", "Conocer la historia de David, el pastorcillo", "Descubrir los pastores de hoy y los «Yo soy» de Jesús"],
  lectura: { titulo: "Lucero se ha perdido", html: `<p>El abuelo Ramón es pastor en un pueblo de la sierra de Gredos. Tiene ciento veinte ovejas, dos perros, Chispa y Tizón, y un cayado de madera de fresno que talló él mismo.</p><p>Este verano, su nieta Elena pasa unos días con él. Cada mañana salen con el rebaño al monte y por la tarde lo traen de vuelta al corral.</p><p>Una tarde, al contar las ovejas en la puerta del corral, el abuelo se para.</p><p>—Ciento diecinueve. Falta una. Falta Lucero.</p><p>—Abuelo, tienes ciento diecinueve más. ¿No da igual una?</p><p>El abuelo la mira muy serio.</p><p>—Para mí, ninguna da igual.</p><p>Cierra el corral, coge una linterna y sale con Chispa monte arriba, aunque ya empieza a oscurecer. Elena lo espera en la puerta, nerviosa.</p><p>Una hora después, ve una luz que baja por el camino. El abuelo trae a Lucero sobre los hombros, cansado pero sonriente. La oveja se había enganchado entre unas zarzas.</p><p>Esa noche, mientras cenan, Elena le dice:</p><p>—Abuelo, eres como el pastor del cuento que nos contaron en Religión.</p><p>El abuelo se ríe.</p><p>—Ese cuento lo contaba Jesús. Y los pastores lo entendemos muy bien.</p>` },
  tras: {
    "Los pastores en tiempos de Jesús": [
      ["Las cosas del pastor", `<p>Para hacer bien su trabajo, el pastor de tiempos de Jesús llevaba siempre unas <mark>herramientas</mark> muy útiles:</p><ul><li>El <b>cayado</b>: un bastón largo con la punta curvada. Servía para apoyarse al caminar por el monte, para guiar a las ovejas y para engancharlas por el cuello o la pata si caían en un agujero.</li><li>La <b>vara</b>: un palo corto y fuerte para defender el rebaño de los lobos y los ladrones.</li><li>La <b>honda</b>: una tira de cuero para lanzar piedras y espantar a los animales salvajes o hacer volver a una oveja que se alejaba.</li><li>El <b>zurrón</b>: una bolsa de piel donde llevaba la comida: pan, queso, aceitunas, higos secos.</li><li>Una <b>flauta</b> de caña, para pasar las largas horas en el campo.</li><li>Un <b>manto</b> grueso para protegerse del frío de la noche.</li></ul><p>Por la noche, los pastores metían las ovejas en el <b>redil</b>, un corral de piedras con una sola entrada. A veces varios pastores juntaban sus rebaños en el mismo redil. Por la mañana, cada pastor llamaba a sus ovejas y ellas, que conocían su voz, salían detrás de él.</p><p>El salmo 23 dice: «Tu vara y tu cayado me sosiegan», es decir, me dan tranquilidad.</p><p><b>Actividad</b>: dibuja a un pastor con todas sus herramientas y escribe para qué sirve cada una.</p>`,
        L6.filas("Pastor", [["cayado", "guiar, rescatar", cNA], ["vara", "defender", cRO], ["honda", "lanzar piedras", cAZ], ["zurrón", "comida", cVE]])],
    ],
    "Conozco a mis ovejas": [
      ["«Yo soy la puerta»", `<p>Jesús usó otra imagen relacionada con los pastores. Dijo: «<mark>Yo soy la puerta</mark> de las ovejas. El que entre por mí se salvará; podrá entrar y salir, y encontrará pastos» (Jn 10,9).</p><p>¿Qué quería decir? Para entenderlo hay que saber cómo era un <b>redil</b> en el campo: un círculo de piedras con un solo hueco para entrar. No tenía puerta de madera. Por la noche, el pastor se <b>tumbaba a dormir en el hueco</b>. Así, ninguna oveja podía salir sin que él se diera cuenta, y ningún lobo ni ladrón podía entrar sin pasar por encima de él. ¡El pastor era la puerta!</p><p>Con esta imagen, los cristianos entienden que Jesús <b>protege</b> a los suyos y que es el camino para llegar a Dios.</p><p>Jesús también habló del <b>ladrón</b>, que no entra por la puerta sino que salta la valla, y solo viene a robar. En cambio, dijo: «<b>Yo he venido para que tengan vida, y vida en abundancia</b>» (Jn 10,10).</p><p>Una puerta sirve para entrar y salir: las ovejas entran para estar seguras y salen para encontrar <b>pastos</b>, es decir, alimento y vida.</p><p><b>Actividad</b>: construye con piedrecitas o plastilina un redil con un pastor tumbado en la entrada.</p>`,
        H6.dos("Redil", ["DE NOCHE", ["dentro", "seguras", "pastor en la puerta"], cMO], ["DE DÍA", ["salen", "pastos", "siguen la voz"], cVE])],
    ],
    "¡Alegraos conmigo!": [
      ["La moneda perdida", `<p>Justo después de la parábola de la oveja perdida, el evangelio de Lucas cuenta otra muy parecida: la de la <mark>moneda perdida</mark> (Lc 15,8-10).</p><p>Una mujer tenía <b>diez monedas</b> de plata, llamadas dracmas. Una dracma era más o menos lo que se ganaba en un día de trabajo. Un día se dio cuenta de que le faltaba una.</p><p>¿Qué hizo? <b>Encendió una lámpara</b>, porque las casas tenían pocas ventanas y eran oscuras, <b>barrió toda la casa</b> y buscó con cuidado por todos los rincones hasta que la encontró.</p><p>Entonces llamó a sus amigas y vecinas y les dijo: «<b>¡Alegraos conmigo, porque he encontrado la moneda que había perdido!</b>».</p><p>Jesús terminó diciendo que hay una alegría así de grande en el cielo por cada persona que cambia y vuelve a Dios.</p><p>Esta parábola y la de la oveja enseñan lo mismo de dos maneras:</p><ul><li>Lo que se pierde <b>importa mucho</b>, aunque sea solo uno entre muchos.</li><li>Se busca con <b>esfuerzo</b> hasta encontrarlo.</li><li>Encontrarlo provoca una gran <b>alegría</b> que se comparte.</li></ul><p>Fíjate que en una el protagonista es un hombre pastor y en la otra, una mujer en su casa. Jesús quería que todos se vieran reflejados.</p><p><b>Actividad</b>: compara las dos parábolas en una tabla: quién busca, qué se pierde, cómo se busca y cómo termina.</p>`,
        H6.flujo("Moneda", ["10 monedas|falta 1", "lámpara|y escoba", "busca|rincones", "¡fiesta!|vecinas"], cNA),
        ["gD4w1giN88g", "Historias de la Biblia - La Oveja Perdida", "Saddleback Kids", 254659]],
    ],
    "El Señor es mi pastor": [
      ["David, el pastorcillo", `<p><mark>David</mark> era el hijo más pequeño de Jesé, un hombre de Belén. Mientras sus hermanos mayores iban a la guerra, él cuidaba las ovejas de su padre en el campo.</p><p>Según la Biblia, David era un pastor muy <b>valiente</b>: cuando un león o un oso se llevaba una oveja, él lo perseguía y se la quitaba de la boca (1 Sam 17,34-35). Además, tocaba muy bien el <b>arpa</b> y componía canciones.</p><p>Cuando el profeta Samuel fue a casa de Jesé a buscar a un futuro rey, vio a los hermanos mayores, altos y fuertes, pero Dios le dijo: «<b>El hombre mira las apariencias, pero Dios mira el corazón</b>» (1 Sam 16,7). Y eligió a David, el pequeño, que estaba con las ovejas.</p><p>La historia más famosa de David es su lucha contra <b>Goliat</b>, un gigante filisteo al que todos tenían miedo. David no quiso armadura: cogió su <b>honda</b> de pastor y cinco piedras lisas del río. Con una sola piedra derribó al gigante.</p><p>Con el tiempo, David llegó a ser <b>rey de Israel</b>. La Biblia cuenta que Jesús nació en Belén, la ciudad de David, y que era de su familia. Por eso a Jesús también se le llama «Hijo de David».</p><p><b>Actividad</b>: escribe por qué crees que Dios elige a un pastor pequeño para ser rey.</p>`,
        L6.filas("David", [["pastor", "en Belén", cVE], ["arpa", "canciones", cNA], ["honda", "contra Goliat", cRO], ["rey", "de Israel", cAZ]])],
    ],
    "También nosotros cuidamos": [
      ["Pastores de hoy", `<p>Hoy todavía hay <mark>pastores</mark>, también en España. Su trabajo ha cambiado algo, pero en lo importante sigue igual: cuidar del rebaño cada día.</p><ul><li>Hay pastores de <b>ovejas</b>, <b>cabras</b> y <b>vacas</b>. De ellas se obtienen leche, quesos (como el manchego o el idiazábal), carne y lana.</li><li>Los <b>perros pastores</b>, como el mastín o el carea, les ayudan a reunir el rebaño y a defenderlo del lobo.</li><li>Algunos pastores practican la <b>trashumancia</b>: en primavera llevan los rebaños andando a las montañas del norte, donde hay hierba fresca, y en otoño los bajan a las tierras más cálidas del sur. Recorren cientos de kilómetros por caminos muy antiguos llamados <b>cañadas reales</b>. La trashumancia es Patrimonio Cultural Inmaterial de la Humanidad.</li><li>Los pastores cuidan también el <b>paisaje</b>: los animales comen la hierba seca y así ayudan a prevenir los incendios.</li></ul><p>En la Iglesia, a los obispos y sacerdotes también se les llama <b>pastores</b>, porque su misión es cuidar de la comunidad. Por eso el obispo lleva un bastón curvado, el <b>báculo</b>, que recuerda al cayado.</p><p><b>Actividad</b>: busca qué quesos de tu comunidad se hacen con leche de oveja o cabra.</p>`,
        H6.rueda("Hoy", "PASTORES", [["perros", cNA], ["quesos", cVE], ["cañadas", cAZ], ["báculo", cMO]])],
    ],
  },
  final: [
    ["Los «Yo soy» de Jesús", `<p>En el evangelio de Juan, Jesús usa varias veces la expresión «<mark>Yo soy</mark>» seguida de una imagen sencilla para explicar quién es. «Yo soy el buen pastor» es una de ellas, pero hay más:</p><ul><li>«<b>Yo soy el pan de vida</b>» (Jn 6,35): igual que el pan alimenta el cuerpo, Jesús quiere alimentar a las personas por dentro.</li><li>«<b>Yo soy la luz del mundo</b>» (Jn 8,12): como una luz en la oscuridad, ayuda a ver el camino.</li><li>«<b>Yo soy la puerta</b>» (Jn 10,9): protege y deja entrar a la vida.</li><li>«<b>Yo soy el buen pastor</b>» (Jn 10,11): cuida, conoce y da la vida.</li><li>«<b>Yo soy la resurrección y la vida</b>» (Jn 11,25): se lo dijo a Marta cuando murió Lázaro.</li><li>«<b>Yo soy el camino, la verdad y la vida</b>» (Jn 14,6).</li><li>«<b>Yo soy la vid, vosotros los sarmientos</b>» (Jn 15,5): igual que las ramas reciben la savia de la cepa, sus amigos tienen que estar unidos a él.</li></ul><p>Todas estas imágenes son cosas de la vida diaria que todos conocían: pan, luz, puertas, ovejas, caminos y viñas. Así, cualquiera podía entender el mensaje.</p><p><b>Actividad</b>: elige uno de los «Yo soy» y haz un dibujo que lo explique.</p>`,
      L6.filas("Yo soy", [["pan", "alimenta", cNA], ["luz", "ilumina", cAZ], ["camino", "guía", cVE], ["vid", "une", cMO]])],
    ["Cuidar a los más débiles", `<p>El buen pastor se preocupa sobre todo por las ovejas más <mark>débiles</mark>: la que se pierde, la que está herida, la que es pequeña y no puede seguir el ritmo. El profeta Ezequiel lo describió así: «Buscaré la oveja perdida, vendaré a la herida y curaré a la enferma» (Ez 34,16).</p><p>En nuestra sociedad también hay personas que necesitan un cuidado especial:</p><ul><li><b>Personas mayores</b> que viven solas.</li><li><b>Personas enfermas</b> o con discapacidad.</li><li><b>Niños</b> que lo pasan mal en casa o en el colegio.</li><li><b>Personas</b> que han tenido que dejar su país.</li><li>Personas que no tienen casa ni trabajo.</li></ul><p>Muchas personas trabajan o hacen <b>voluntariado</b> para cuidarlas: médicos, enfermeras, educadores, cuidadores, voluntarios de asociaciones y de la Iglesia, como Cáritas.</p><p>Los niños también podemos ayudar: visitar a los abuelos, ayudar a un compañero con dificultades, incluir a quien está solo, participar en una recogida de alimentos o de juguetes.</p><p>Y también podemos cuidar de los <b>animales</b> más débiles: no abandonar a las mascotas, ayudar en un refugio o respetar a los animales del campo.</p><p><b>Actividad</b>: organizad en clase una pequeña campaña solidaria: cartas para una residencia de mayores o una recogida de material escolar.</p>`,
      H6.rueda("Cuidar", "DÉBILES", [["mayores", cAZ], ["enfermos", cRO], ["solos", cVE], ["animales", cNA]])],
  ],
  ejemplos: [
    ["¿Por qué el pastor era «la puerta» del redil?", ["El redil solo tenía un hueco de entrada.", "El pastor dormía tumbado en ese hueco."], "Porque dormía en la entrada y nadie podía pasar sin él."],
    ["¿En qué se parecen la oveja perdida y la moneda perdida?", ["En las dos se pierde uno de muchos.", "Se busca con esfuerzo y se celebra al encontrarlo."], "En que lo perdido importa, se busca y se celebra."],
  ],
  errores: ["Confundir el cayado (bastón curvado para guiar) con la vara (palo corto para defender).", "Pensar que ya no hay pastores: en España sigue habiendo pastores y trashumancia."],
  ejercicios: [
    ["b", "¿Para qué servía el cayado?", "Para apoyarse, guiar a las ovejas y rescatarlas."],
    ["b", "¿Qué es un redil?", "Un corral de piedras donde dormían las ovejas."],
    ["b", "¿Cuántas monedas tenía la mujer de la parábola?", "Diez."],
    ["b", "¿Con qué venció David a Goliat?", "Con una honda y una piedra."],
    ["b", "¿Qué es la trashumancia?", "Llevar los rebaños andando de unas tierras a otras según la estación."],
    ["m", "¿Qué hizo la mujer para encontrar la moneda?", "Encendió una lámpara, barrió la casa y buscó con cuidado."],
    ["m", "¿Qué quiere decir «Dios mira el corazón»?", "Que lo importante no es la apariencia sino cómo es la persona por dentro."],
    ["m", "¿Por qué el obispo lleva báculo?", "Porque es pastor de la comunidad y el báculo recuerda al cayado."],
    ["m", "Escribe tres «Yo soy» de Jesús.", "Pan de vida, luz del mundo, buen pastor, puerta, camino, vid…"],
    ["m", "¿Cómo ayudan los pastores a prevenir incendios?", "Los animales comen la hierba seca."],
    ["a", "En la lectura, ¿por qué el abuelo sale a buscar a Lucero si tiene muchas más?", "Porque para él ninguna oveja da igual; cada una es importante."],
    ["a", "Compara la oveja perdida y la moneda perdida en una tabla.", "Pastor/mujer, oveja/moneda, monte/casa, busca hasta encontrar, fiesta."],
    ["a", "Elige un «Yo soy» y explica su significado con tus palabras.", "Respuesta abierta."],
    ["a", "Propón una acción para cuidar a personas mayores de tu barrio.", "Respuesta abierta."],
  ],
  quiz: [
    ["La bolsa de piel del pastor se llama…", ["zurrón", "cayado", "redil"], "Pastor."],
    ["Por la noche, el pastor dormía en…", ["la entrada del redil", "una casa", "el pozo"], "Puerta."],
    ["David era hijo de…", ["Jesé", "Jacob", "Zebedeo"], "David."],
    ["Los caminos antiguos de la trashumancia son las…", ["cañadas reales", "autopistas", "calzadas"], "Hoy."],
    ["«Yo soy la vid, vosotros los…»", ["sarmientos", "pastores", "panes"], "Yo soy."],
  ],
  examen: [
    ["En la lectura, ¿dónde estaba Lucero?", ["enganchada en unas zarzas", "en el río", "en otro corral"], "Lectura."],
    ["¿Qué dijo la mujer al encontrar la moneda?", ["«¡Alegraos conmigo!»", "«No importa»", "«Ya tengo nueve»"], "Moneda."],
  ],
  tarjetas: [
    ["Herramientas", "Cayado, vara, honda, zurrón, flauta y redil."],
    ["Parábolas", "Oveja perdida y moneda perdida: buscar y celebrar."],
    ["David", "Pastor de Belén, arpa, honda, Goliat, rey."],
    ["Yo soy", "Pan, luz, puerta, buen pastor, camino, vid."],
  ],
  glosario: [
    ["Cayado", "Bastón de pastor con la punta curvada."],
    ["Vara", "Palo corto para defender el rebaño."],
    ["Honda", "Tira para lanzar piedras."],
    ["Zurrón", "Bolsa de piel del pastor."],
    ["Redil", "Corral para encerrar el ganado."],
    ["Dracma", "Moneda de plata antigua."],
    ["Goliat", "Gigante vencido por David."],
    ["Trashumancia", "Viaje de los rebaños según la estación."],
    ["Cañada real", "Camino antiguo para el ganado."],
    ["Báculo", "Bastón del obispo."],
    ["Sarmiento", "Rama de la vid."],
    ["Voluntariado", "Ayudar a otros sin cobrar."],
  ],
  situacion: {
    titulo: "Pastores que cuidan",
    reto: "La clase aprende cómo cuidan los pastores y organiza una campaña para cuidar a quienes más lo necesitan en su entorno.",
    pasos: ["Construir una maqueta de un redil con pastor, cayado y rebaño.", "Representar la oveja perdida y la moneda perdida.", "Investigar la trashumancia y los pastores de hoy.", "Organizar una acción solidaria para personas mayores o enfermas."],
    producto: "Una maqueta, una representación y una acción solidaria.",
    evaluacion: ["Explica las herramientas y el trabajo del pastor.", "Relaciona las parábolas con su enseñanza.", "Conoce la historia de David.", "Participa en una acción de cuidado de los demás."],
  },
});
