// Religión 4º Primaria. Tema ampliado. Pasajes bíblicos contados con nuestras palabras. Dibujos propios en SVG.
const P = require("./_pri4a");
const { svg, t, persona, H, AZ, RO, VE, NA, SO, MO, AG } = P;

// Rueda del año litúrgico: sectores [ángulo inicio, fin, color, texto].
const sector = (cx, cy, r, a1, a2, c) => {
  const p = (a) => [cx + r * Math.cos(((a - 90) * Math.PI) / 180), cy + r * Math.sin(((a - 90) * Math.PI) / 180)].map((v) => v.toFixed(1));
  const [x1, y1] = p(a1), [x2, y2] = p(a2);
  return `<path d="M${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${x2} ${y2} Z" fill="${c}" fill-opacity=".75" stroke="var(--paper)" stroke-width="2"/>`;
};

module.exports = P.tema({
  materia: "Religión",
  titulo: "Las fiestas cristianas",
  minutos: 45,
  objetivos: ["Conocer el año litúrgico y sus tiempos principales", "Explicar qué celebran los cristianos en Adviento, Navidad, Cuaresma, Semana Santa, Pascua y Pentecostés", "Relacionar cada fiesta con un momento de la vida de Jesús", "Reconocer el domingo y las fiestas de la Virgen y los santos en el calendario"],
  claves: ["año litúrgico", "Adviento", "corona de Adviento", "Navidad", "Epifanía", "Cuaresma", "Miércoles de Ceniza", "Semana Santa", "Domingo de Ramos", "Jueves Santo", "Viernes Santo", "Pascua", "resurrección", "Pentecostés", "Espíritu Santo", "Tiempo Ordinario", "domingo", "colores litúrgicos"],
  pregunta: ["Las vacaciones de Navidad y de Semana Santa coinciden con fiestas cristianas. ¿Sabes qué se celebra en cada una?", "En <b>Navidad</b> los cristianos celebran el <mark>nacimiento de Jesús</mark>, y en <b>Semana Santa</b> recuerdan su muerte y celebran su <mark>resurrección</mark>. Estas fiestas forman parte de un calendario especial, el <b>año litúrgico</b>, que recorre cada año la vida de Jesús."],
  bloques: [
    ["El año litúrgico", `<p>Además del calendario normal, que empieza el 1 de enero, la Iglesia tiene su propio calendario: el <mark>año litúrgico</mark>. Empieza el primer domingo de <b>Adviento</b>, a finales de noviembre o principios de diciembre.</p><p>A lo largo del año, los cristianos recuerdan y celebran los momentos más importantes de la vida de Jesús: su nacimiento, su vida, su muerte y su resurrección. Es como volver a leer cada año el mismo libro favorito: siempre descubres algo nuevo.</p><p>Cada tiempo tiene un <b>color</b>, que se ve en la ropa del sacerdote en misa.</p>`,
      svg("Rueda del año litúrgico con Adviento, Navidad, Tiempo Ordinario, Cuaresma, Pascua y Tiempo Ordinario", `${sector(130, 92, 76, 0, 30, MO)}${sector(130, 92, 76, 30, 60, SO)}${sector(130, 92, 76, 60, 110, VE)}${sector(130, 92, 76, 110, 150, MO)}${sector(130, 92, 76, 150, 200, SO)}${sector(130, 92, 76, 200, 360, VE)}<circle cx="130" cy="92" r="30" fill="var(--paper)"/>${t(130, 89, "año", { s: 11, d: true })}${t(130, 103, "litúrgico", { s: 10, d: true })}${t(208, 26, "Adviento", { s: 10, c: MO })}${t(232, 66, "Navidad", { s: 10, c: NA })}${t(236, 128, "Ordinario", { s: 10, c: VE })}${t(190, 174, "Cuaresma", { s: 10, c: MO })}${t(76, 174, "Pascua", { s: 10, c: NA })}${t(28, 60, "Ordinario", { s: 10, c: VE })}`)],
    ["Adviento: esperar a Jesús", `<p><mark>Adviento</mark> significa «venida» o «llegada». Son las <b>cuatro semanas</b> antes de Navidad. Es un tiempo de <b>espera</b> alegre, como cuando preparas tu casa porque viene alguien a quien quieres mucho.</p><p>En muchas casas e iglesias se pone la <b>corona de Adviento</b>: un círculo de ramas verdes con cuatro velas. Cada domingo se enciende una vela más. La luz va creciendo hasta que llega Jesús, «la luz del mundo».</p><p>En Adviento se recuerda a personajes que esperaron a Jesús: el profeta <b>Isaías</b>, <b>Juan el Bautista</b> y, sobre todo, la Virgen <b>María</b>. El color es el <b>morado</b>.</p>`,
      svg("Corona de Adviento con cuatro velas, una por cada domingo", `<ellipse cx="130" cy="130" rx="96" ry="28" fill="${VE}" fill-opacity=".35" stroke="${VE}" stroke-width="3"/>${[[56, 124, 1], [100, 138, 2], [160, 138, 3], [204, 124, 4]].map(([x, y, n]) => `<rect x="${x - 8}" y="${y - 62}" width="16" height="60" rx="3" fill="${n === 3 ? RO : MO}" fill-opacity=".7"/><path d="M${x} ${y - 64} q -6 -10 0 -18 q 6 8 0 18 Z" fill="${SO}"/>${t(x, 174, `${n}º`, { s: 10, c: "var(--muted)" })}`).join("")}${t(130, 26, "un domingo, una vela", { s: 13, d: true, c: MO })}`), P.V("fieB")],
    ["Navidad: Dios con nosotros", `<p>El <b>25 de diciembre</b> los cristianos celebran la <mark>Navidad</mark>: el nacimiento de Jesús en <b>Belén</b>. Los Evangelios cuentan que María y José no encontraron sitio en la posada y Jesús nació en un establo y fue acostado en un pesebre. Unos <b>pastores</b> fueron los primeros en visitarlo, avisados por los ángeles (Lc 2,1-20).</p><p>Para los cristianos, en Navidad Dios se hace niño para estar cerca de todos: por eso a Jesús se le llama <b>Emmanuel</b>, «Dios con nosotros».</p><p>El <b>6 de enero</b> es la <b>Epifanía</b>: la visita de los <b>Magos</b> de Oriente con oro, incienso y mirra (Mt 2). El color de Navidad es el <b>blanco</b>.</p>`,
      svg("Belén: un establo con el pesebre, María y José, y la estrella encima", `<path d="M40 160 V 80 L 130 30 L 220 80 V 160" fill="${NA}" fill-opacity=".15" stroke="${NA}" stroke-width="3"/><path d="M130 6 l 4 10 l 10 0 l -8 7 l 3 10 l -9 -6 l -9 6 l 3 -10 l -8 -7 l 10 0 Z" fill="${SO}"/>${persona(84, 96, AZ, { brazos: [[-10, 14], [14, 10]] })}${persona(176, 96, NA, { brazos: [[-14, 10], [10, 14]] })}<path d="M110 150 l 8 -18 h 24 l 8 18 Z" fill="${NA}" fill-opacity=".5" stroke="${NA}" stroke-width="2"/><ellipse cx="130" cy="130" rx="14" ry="6" fill="var(--card)" stroke="${SO}" stroke-width="2"/><circle cx="122" cy="128" r="5" fill="${SO}" fill-opacity=".4"/>${t(84, 176, "María", { s: 10, c: AZ })}${t(176, 176, "José", { s: 10, c: NA })}`)],
    ["Cuaresma: preparar el corazón", `<p>La <mark>Cuaresma</mark> son los <b>cuarenta días</b> antes de la Semana Santa. Recuerda los cuarenta días que Jesús pasó en el desierto rezando y ayunando.</p><p>Empieza el <b>Miércoles de Ceniza</b>: el sacerdote pone un poco de ceniza en la frente y dice «Conviértete y cree en el Evangelio». Es un tiempo para <b>cambiar</b> lo que no hacemos bien y prepararnos para la Pascua. Se proponen tres cosas:</p><ul><li><b>Oración</b>: hablar más con Dios.</li><li><b>Ayuno</b>: renunciar a algo (golosinas, pantallas…).</li><li><b>Limosna</b>: compartir con quien lo necesita.</li></ul><p>Su color es el <b>morado</b>.</p>`,
      H.rueda("Las tres claves de la Cuaresma", "40|días", [["oración", AZ], ["ayuno", NA], ["limosna", VE], ["ceniza", "var(--muted)"]], MO)],
    ["La Semana Santa", `<p>La <mark>Semana Santa</mark> es la semana más importante para los cristianos. Recuerda los últimos días de Jesús:</p><ul><li><b>Domingo de Ramos</b>: Jesús entra en Jerusalén montado en un burrito y la gente lo aclama con ramos de olivo y palmas.</li><li><b>Jueves Santo</b>: la <b>Última Cena</b>. Jesús lava los pies a sus discípulos y comparte con ellos el pan y el vino.</li><li><b>Viernes Santo</b>: Jesús muere en la <b>cruz</b>. Es un día de silencio y oración.</li><li><b>Sábado Santo</b>: espera junto al sepulcro.</li></ul><p>En muchos pueblos y ciudades de España hay <b>procesiones</b> con imágenes que recuerdan estos momentos.</p>`,
      H.flujo("Los días de la Semana Santa", ["Ramos", "Última|Cena", "Cruz", "silencio", "¡Resucitó!"], RO), P.V("fieB2")],
    ["Pascua: ¡Jesús ha resucitado!", `<p>El <b>Domingo de Resurrección</b> es la fiesta más grande del año cristiano. Los Evangelios cuentan que unas mujeres fueron muy temprano al sepulcro y lo encontraron <b>vacío</b>. Un ángel les dijo: «No está aquí. ¡Ha resucitado!» (Mc 16,1-7).</p><p>Los cristianos creen que Jesús venció a la muerte y vive para siempre. Por eso la <mark>Pascua</mark> es una fiesta de alegría que dura <b>cincuenta días</b>. Se canta el <i>Aleluya</i> («alabad a Dios») y se enciende el <b>cirio pascual</b>, una vela grande que simboliza a Jesús resucitado.</p><p>Su fecha cambia cada año: es el domingo después de la primera luna llena de primavera. Su color es el <b>blanco</b>.</p>`,
      svg("El sepulcro vacío con la piedra corrida y el sol de la mañana de Pascua", `<circle cx="210" cy="40" r="20" fill="${SO}" fill-opacity=".8"/><path d="M20 160 V 100 a 60 60 0 0 1 120 0 V 160 Z" fill="var(--muted)" fill-opacity=".25" stroke="var(--muted)" stroke-width="2"/><path d="M56 160 V 116 a 24 24 0 0 1 48 0 V 160 Z" fill="var(--paper)" stroke="var(--muted)" stroke-width="2"/><circle cx="168" cy="134" r="26" fill="var(--muted)" fill-opacity=".5" stroke="var(--muted)" stroke-width="2"/>${t(80, 144, "vacío", { s: 12, c: "var(--muted)" })}${t(196, 92, "¡Aleluya!", { s: 16, d: true, c: SO })}`)],
    ["Pentecostés: llega el Espíritu Santo", `<p>Cincuenta días después de la Pascua se celebra <mark>Pentecostés</mark>, que significa «día cincuenta». Los Hechos de los Apóstoles cuentan que los discípulos estaban reunidos con María, con las puertas cerradas por miedo. De pronto se oyó un ruido como de un viento fuerte y aparecieron sobre ellos como <b>lenguas de fuego</b>. Era el <b>Espíritu Santo</b> (Hch 2).</p><p>Los discípulos perdieron el miedo, salieron a la calle y empezaron a anunciar a Jesús. ¡La gente de distintos países les entendía en su propio idioma! Por eso se dice que Pentecostés es el «cumpleaños» de la <b>Iglesia</b>. Su color es el <b>rojo</b>, como el fuego.</p>`,
      svg("Los discípulos reunidos con lenguas de fuego sobre sus cabezas en Pentecostés", `${[40, 85, 130, 175, 220].map((x, i) => `${persona(x, 80, i === 2 ? AZ : NA)}<path d="M${x} 66 q -6 -10 0 -20 q 6 10 0 20 Z" fill="${RO}"/>`).join("")}<path d="M20 30 q 30 -16 60 0 q 30 16 60 0 q 30 -16 60 0" fill="none" stroke="${AG}" stroke-width="2.5"/>${t(130, 164, "el Espíritu Santo", { s: 14, d: true, c: RO })}`), P.V("fieB3")],
    ["El domingo y el Tiempo Ordinario", `<p>El resto del año es el <mark>Tiempo Ordinario</mark>, el más largo. Su color es el <b>verde</b>, como la esperanza y las plantas que crecen. En él se leen en misa las enseñanzas y los milagros de Jesús.</p><p>Pero la fiesta más repetida es el <b>domingo</b>. Cada domingo es como una «pequeña Pascua»: los cristianos se reúnen para celebrar la <b>misa</b> o Eucaristía, escuchar la Palabra de Dios y compartir el pan. «Domingo» viene del latín <i>dies Domini</i>, «día del Señor».</p><p>El domingo también es un día para <b>descansar</b> y estar con la familia y los amigos.</p>`,
      H.filas("Los colores del año litúrgico", [["Morado", "Adviento y Cuaresma", MO], ["Blanco", "Navidad y Pascua", SO], ["Rojo", "Pentecostés y mártires", RO], ["Verde", "Tiempo Ordinario", VE]])],
    ["La Virgen y los santos", `<p>Durante el año también hay fiestas dedicadas a la <b>Virgen María</b> y a los <b>santos</b>:</p><ul><li><b>8 de diciembre</b>: la Inmaculada Concepción.</li><li><b>15 de agosto</b>: la Asunción de María.</li><li><b>1 de noviembre</b>: Todos los Santos, en que se recuerda a todas las personas buenas que ya están con Dios.</li><li><b>25 de julio</b>: Santiago Apóstol, patrón de España.</li></ul><p>Muchos pueblos celebran las <mark>fiestas patronales</mark> en honor de su santo o de la Virgen, con misa, procesión, música y comidas. ¿Cuál es el patrón o la patrona de tu localidad?</p>`,
      H.linea("Algunas fiestas de la Virgen y los santos", [["25 jul", "Santiago"], ["15 ago", "Asunción"], ["1 nov", "Todos los|Santos"], ["8 dic", "Inmaculada"]], MO)],
  ],
  figura: ["Las fiestas cristianas", H.figCols("El año litúrgico", [["Adviento", ["4 semanas", "esperar", "corona", "morado"], MO], ["Navidad", ["25 de diciembre", "nace Jesús", "Epifanía", "blanco"], SO], ["Cuaresma y S. Santa", ["40 días", "Ramos, Cena", "Viernes Santo", "morado y rojo"], RO], ["Pascua", ["resurrección", "50 días", "Pentecostés", "blanco y rojo"], VE]])],
  video: P.V("fieV", true),
  ejemplos: [
    ["Ordena estos tiempos según el año litúrgico: Pascua, Adviento, Cuaresma, Navidad.", ["El año litúrgico empieza en Adviento.", "Navidad va antes que la Cuaresma, y la Cuaresma antes que la Pascua."], "Adviento → Navidad → Cuaresma → Pascua."],
    ["¿Por qué la corona de Adviento tiene cuatro velas?", ["Adviento dura cuatro semanas.", "Cada domingo se enciende una."], "Porque hay cuatro domingos de Adviento; la luz crece hasta Navidad."],
    ["¿Qué tienen en común el domingo y la Pascua?", ["Jesús resucitó en domingo.", "Cada domingo se celebra la misa."], "Que el domingo es una «pequeña Pascua»: recuerda cada semana la resurrección."],
  ],
  errores: [
    "Pensar que el año litúrgico empieza el 1 de enero: empieza el primer domingo de Adviento.",
    "Creer que la Semana Santa solo recuerda la muerte de Jesús: culmina en la resurrección.",
    "Pensar que la Pascua tiene fecha fija: cambia cada año según la luna.",
    "Confundir la Navidad (nacimiento) con la Epifanía (visita de los Magos).",
    "Creer que Pentecostés es una fiesta de Moisés: celebra la venida del Espíritu Santo.",
  ],
  ejercicios: [
    ["¿Cuándo empieza el año litúrgico?", "El primer domingo de Adviento."],
    ["¿Qué significa Adviento y cuánto dura?", "«Venida» o «llegada»; cuatro semanas."],
    ["¿Qué se celebra el 25 de diciembre?", "El nacimiento de Jesús, la Navidad."],
    ["¿Qué regalos llevaron los Magos?", "Oro, incienso y mirra."],
    ["¿Qué recuerda la Cuaresma y cuántos días dura?", "Los cuarenta días de Jesús en el desierto; cuarenta días."],
    ["Nombra las tres claves de la Cuaresma.", "Oración, ayuno y limosna."],
    ["¿Qué pasó el Jueves Santo?", "La Última Cena: Jesús lavó los pies y compartió el pan y el vino."],
    ["¿Qué encontraron las mujeres el domingo de Pascua?", "El sepulcro vacío: Jesús había resucitado."],
    ["¿Qué se celebra en Pentecostés?", "La venida del Espíritu Santo sobre los discípulos."],
    ["¿Qué color se usa en el Tiempo Ordinario?", "El verde."],
  ],
  quiz: [
    ["El año litúrgico empieza en…", ["Adviento", "enero", "Pascua"], "Finales de noviembre."],
    ["La corona de Adviento tiene…", ["cuatro velas", "siete velas", "una vela"], "Una por domingo."],
    ["Jesús nació en…", ["Belén", "Nazaret", "Jerusalén"], "Lc 2."],
    ["La Epifanía es el…", ["6 de enero", "25 de diciembre", "1 de noviembre"], "Los Magos."],
    ["La Cuaresma empieza el…", ["Miércoles de Ceniza", "Domingo de Ramos", "Jueves Santo"], "Ceniza en la frente."],
    ["El Domingo de Ramos recuerda…", ["la entrada en Jerusalén", "la Última Cena", "la resurrección"], "Ramos y palmas."],
    ["El Viernes Santo recuerda…", ["la muerte de Jesús en la cruz", "su nacimiento", "Pentecostés"], "Día de silencio."],
    ["La fiesta más importante es…", ["la Pascua de Resurrección", "la Epifanía", "Todos los Santos"], "Jesús vive."],
    ["Pentecostés significa…", ["día cincuenta", "día de fiesta", "fuego"], "50 días después de Pascua."],
    ["El color de Adviento y Cuaresma es…", ["morado", "verde", "rojo"], "Preparación."],
  ],
  examen: [
    ["En Navidad celebramos…", ["el nacimiento de Jesús", "la resurrección", "el Espíritu Santo"], "25 de diciembre."],
    ["Pascua dura…", ["cincuenta días", "un día", "cuarenta días"], "Hasta Pentecostés."],
    ["El domingo es…", ["el día del Señor", "el primer día de Cuaresma", "una fiesta de la Virgen"], "Dies Domini."],
    ["El patrón de España es…", ["Santiago", "san Francisco", "san José"], "25 de julio."],
  ],
  feynman: ["Qué es el año litúrgico y cuándo empieza", "Qué se hace en Adviento y qué es la corona", "Qué se celebra en Navidad y en la Epifanía", "Qué días forman la Semana Santa y qué recuerda cada uno", "Por qué la Pascua y Pentecostés son fiestas tan importantes"],
  mapa: ["FIESTAS CRISTIANAS", [["Adviento y Navidad", "esperar y nace Jesús", MO], ["Cuaresma", "40 días, cambiar", NA], ["Semana Santa y Pascua", "muerte y resurrección", RO], ["Pentecostés", "Espíritu Santo, Iglesia", VE]]],
  tarjetas: [
    ["Año litúrgico", "Calendario de la Iglesia; empieza en Adviento"],
    ["Adviento", "Cuatro semanas de espera antes de Navidad"],
    ["Navidad", "Nacimiento de Jesús en Belén"],
    ["Epifanía", "Visita de los Magos, 6 de enero"],
    ["Cuaresma", "40 días: oración, ayuno y limosna"],
    ["Semana Santa", "Ramos, Última Cena, cruz y resurrección"],
    ["Pascua", "Jesús resucita; la fiesta más grande"],
    ["Pentecostés", "Llega el Espíritu Santo; nace la Iglesia"],
  ],
  familias: ["Haced juntos una corona de Adviento en casa.", "Buscad en el calendario la fecha de la Pascua de este año.", "Averiguad cuál es el patrón o patrona de vuestro pueblo.", "En Cuaresma, elegid un pequeño gesto de compartir en familia."],
  saberes: "El año litúrgico y sus tiempos; Adviento, Navidad y Epifanía; Cuaresma y Semana Santa; la Pascua de Resurrección y Pentecostés; el domingo; los colores litúrgicos; fiestas de la Virgen y de los santos",
  ideas: ["Gran calendario litúrgico de aula con los colores de cada tiempo.", "Corona de Adviento de clase con un propósito por semana.", "Investigar una fiesta patronal de la comunidad y presentarla."],
});

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer el origen del belén y de los villancicos", "Describir la Semana Santa en España", "Explicar por qué la Pascua cambia de fecha", "Conocer fiestas de otras religiones con respeto"],
  lectura: { titulo: "El belén de la abuela Pilar", html: `<p>Cada año, el primer domingo de Adviento, Martina y su hermano Leo van a casa de la abuela Pilar a montar el belén. Es un ritual: la abuela baja del altillo tres cajas de cartón viejas, atadas con cuerda, y las abre con mucho cuidado.</p><p>—Esta figura del pastor con la oveja al hombro me la regaló mi madre cuando tenía vuestra edad —dice siempre, levantándola como si fuera un tesoro.</p><p>Leo se encarga del río, hecho con papel de plata. Martina coloca el musgo y las casitas de corcho. La abuela pone a la Virgen y a San José en el portal, pero deja el pesebre vacío.</p><p>—¿Y el Niño Jesús? —pregunta Leo, como todos los años, aunque ya sabe la respuesta.</p><p>—El Niño no se pone hasta la Nochebuena —contesta la abuela—. Ahora estamos esperando. Eso es el Adviento.</p><p>También dejan a los Reyes Magos muy lejos, en una esquina de la mesa. Cada día los acercan un poquito al portal, y llegan justo el 6 de enero.</p><p>Este año, Martina ha hecho una figura nueva de arcilla: una niña con una bufanda roja que lleva una barra de pan.</p><p>—¿Quién es? —pregunta la abuela.</p><p>—Soy yo —dice Martina—. Yo también quiero ir a verlo.</p><p>La abuela sonríe y le busca el mejor sitio, junto al portal.</p>` },
  tras: {
    "Navidad: Dios con nosotros": [
      ["El belén y los villancicos", `<p>En muchas casas, colegios e iglesias se monta un <mark>belén</mark> (también llamado nacimiento o pesebre): una representación del nacimiento de Jesús con figuras.</p><p>La tradición la empezó <b>san Francisco de Asís</b> en la Navidad de <b>1223</b>, en un pueblo de Italia llamado <b>Greccio</b>. Quería que la gente sencilla entendiera lo pobre que había nacido Jesús. Preparó en una cueva un pesebre con paja, un buey y un burro de verdad, y allí se celebró la misa de Nochebuena. Fue el primer <b>belén viviente</b>.</p><ul><li>Con los siglos se empezaron a hacer belenes con <b>figuras</b> de barro, madera o corcho. Son famosos los belenes de <b>Nápoles</b> y, en España, los de Murcia y Cataluña. En Cataluña es tradicional el <b>caganer</b>, una figura graciosa escondida.</li><li>Hoy muchos pueblos hacen <b>belenes vivientes</b>, con vecinos disfrazados de pastores, panaderos o lavanderas.</li></ul><p>Los <mark>villancicos</mark> son canciones populares de Navidad. Al principio eran canciones de las villas (los pueblos), y de ahí viene su nombre. Algunos muy conocidos son <i>Los peces en el río</i>, <i>Campana sobre campana</i> o <i>Noche de paz</i>, que se compuso en Austria en 1818 y se ha traducido a cientos de idiomas.</p>`,
        H6.flujo("El belén", ["Greccio|1223", "figuras|de barro", "belenes|vivientes", "villancicos|y canto"], cNA), ["KqUoCvH0sGs", "A San Francisco de Asís, debemos la más bella de las tradiciones cristianas: El Pesebre", "Historias de Adelina", 26428]],
    ],
    "La Semana Santa": [
      ["La Semana Santa en España", `<p>En España, la Semana Santa se vive en la calle con <mark>procesiones</mark>: desfiles en los que se sacan imágenes de Jesús y de la Virgen que recuerdan su pasión.</p><ul><li>Las imágenes van sobre los <b>pasos</b>, grandes plataformas decoradas con flores y velas. Algunos pesan más de una tonelada y los llevan a hombros los <b>costaleros</b> o portadores.</li><li>Las procesiones las organizan las <b>cofradías</b> o <b>hermandades</b>, grupos de personas que se reúnen todo el año para preparar la Semana Santa y ayudar a los necesitados.</li><li>Los <b>nazarenos</b> visten túnica y algunos llevan un gorro alto y puntiagudo llamado <b>capirote</b>. Recuerda a los penitentes antiguos, que querían rezar sin ser reconocidos.</li><li>En Andalucía, a veces alguien canta desde un balcón una <b>saeta</b>, un canto flamenco dedicado a la imagen.</li></ul><p>Cada lugar tiene su estilo: las de <b>Sevilla</b> y <b>Málaga</b> son muy alegres y luminosas; las de <b>Valladolid</b> y <b>Zamora</b>, más silenciosas y austeras, con esculturas de gran valor artístico. En pueblos de Aragón como <b>Calanda</b>, miles de personas tocan los <b>tambores</b> sin parar: las tamboradas son Patrimonio Cultural Inmaterial de la Humanidad.</p>`,
        L6.filas("Procesión", [["pasos", "imágenes", cMO], ["costaleros", "llevan el paso", cNA], ["cofradías", "organizan", cAZ], ["nazarenos", "túnica", cRO]]), ["9VmUUb__4nM", "Procesiones y Semana Santa. Nivel A2", "VideoEle", 384574]],
    ],
    "Pascua: ¡Jesús ha resucitado!": [
      ["¿Por qué la Pascua cambia de fecha?", `<p>La Navidad siempre cae el 25 de diciembre, pero la Pascua cambia cada año: unas veces es en marzo y otras en abril. ¿Por qué?</p><p>Jesús murió y resucitó en los días de la <b>Pascua judía</b>, que se celebraba con la primera <b>luna llena</b> de primavera. Por eso, los cristianos quisieron que la Pascua dependiera también de la luna.</p><p>En el año <b>325</b>, en el <b>Concilio de Nicea</b>, se acordó la regla que todavía se sigue:</p><ul><li><b>1.</b> Se busca el comienzo de la <b>primavera</b> (el 21 de marzo).</li><li><b>2.</b> Se busca la primera <b>luna llena</b> después de esa fecha.</li><li><b>3.</b> El <b>domingo siguiente</b> a esa luna llena es el Domingo de Resurrección.</li></ul><p>Por eso la Pascua puede caer entre el <b>22 de marzo</b> y el <b>25 de abril</b>. Y como la Pascua se mueve, se mueven con ella muchas otras fechas: el Miércoles de Ceniza (46 días antes), el Domingo de Ramos (una semana antes) y Pentecostés (50 días después, contando el propio domingo de Pascua).</p><p>Las Iglesias ortodoxas usan un calendario antiguo diferente, el juliano, así que muchas veces celebran la Pascua otro domingo.</p><p><b>Investiga</b>: busca en un calendario la fecha de la Pascua de este año y comprueba la luna llena anterior.</p>`,
        H6.flujo("Fecha", ["21 de|marzo", "luna|llena", "domingo|siguiente", "¡Pascua!|"], cAZ)],
    ],
  },
  final: [
    ["Las fiestas también se comen", `<p>Muchas fiestas cristianas tienen sus <mark>dulces y comidas tradicionales</mark>. En España hay muchísimos:</p><ul><li><b>Navidad</b>: turrón, mazapán, polvorones y, en algunos lugares, cordero o pavo en la cena de Nochebuena.</li><li><b>Reyes</b> (6 de enero): el <b>roscón de Reyes</b>, un bollo redondo con frutas escarchadas. Dentro esconde una figurita y un haba: a quien le sale la figurita, ¡le toca la corona!; a quien le sale el haba, le toca pagar el roscón.</li><li><b>Cuaresma y Semana Santa</b>: como antes no se comía carne, nacieron platos de bacalao y verduras, como el potaje de vigilia, y dulces como las <b>torrijas</b> y los <b>pestiños</b>.</li><li><b>Pascua</b>: en Cataluña y la Comunidad Valenciana, los padrinos regalan a sus ahijados la <b>mona de Pascua</b>, un bizcocho o rosca decorado con huevos o figuras de chocolate.</li><li><b>Todos los Santos</b> (1 de noviembre): <b>huesos de santo</b>, buñuelos y, en Cataluña, <b>panellets</b> con castañas asadas.</li></ul><p>Compartir estas comidas en familia es una forma de celebrar. Por eso muchas fiestas se viven alrededor de la mesa.</p><p><b>Investiga</b>: pregunta en casa qué dulce es típico de tu pueblo o ciudad en alguna fiesta y comparte la receta con la clase.</p>`,
      L6.filas("Dulces", [["Navidad", "turrón, polvorón", cRO], ["Reyes", "roscón", cNA], ["Semana Santa", "torrijas", cMO], ["Todos los Santos", "huesos de santo", cAZ]])],
    ["Fiestas de otras religiones", `<p>Los cristianos no son los únicos que celebran fiestas. Otras religiones también tienen las suyas, y conocerlas nos ayuda a respetar a nuestros vecinos y compañeros:</p><ul><li><b>Judaísmo</b>: el <b>Pésaj</b> recuerda la salida de Egipto con Moisés y se celebra en primavera con una cena especial. En <b>Janucá</b>, en invierno, se encienden durante ocho noches las velas de un candelabro llamado <b>janukiá</b>. Cada semana guardan el <b>Shabat</b>, el sábado, día de descanso.</li><li><b>Islam</b>: durante el mes de <b>Ramadán</b>, los musulmanes adultos no comen ni beben desde que sale el sol hasta que se pone. Al terminar celebran una gran fiesta, el <b>Eid al-Fitr</b>, con dulces, ropa nueva y visitas a la familia. Como su calendario sigue la luna, el Ramadán cae cada año unos once días antes.</li><li><b>Hinduismo</b>: <b>Diwali</b> es la fiesta de las luces. Se encienden lamparitas de aceite, se decoran las casas y se celebra la victoria de la luz sobre la oscuridad.</li></ul><p>Fíjate en lo que tienen en común muchas fiestas: la <b>luz</b>, la <b>comida compartida</b>, la <b>familia</b> y el <b>agradecimiento</b>.</p><p>Si en tu clase hay compañeros de otras religiones, pídeles que os cuenten cómo celebran sus fiestas.</p>`,
      H6.rueda("Fiestas", "FIESTA", [["Pésaj", cAZ], ["Janucá", cMO], ["Ramadán", cVE], ["Diwali", cNA]])],
  ],
  ejemplos: [
    ["Este año la primera luna llena de primavera cae en martes, 25 de marzo. ¿Cuándo es la Pascua?", ["Se busca el domingo siguiente a la luna llena.", "Después del martes 25 viene el domingo 30."], "El domingo 30 de marzo."],
    ["¿Por qué se dice que san Francisco inventó el belén?", ["En 1223 preparó un pesebre en Greccio.", "Fue el primer belén viviente."], "Porque en Greccio, en 1223, hizo el primer belén viviente."],
  ],
  errores: ["Pensar que la Pascua cae siempre el mismo día: depende de la luna llena de primavera.", "Creer que solo los cristianos celebran fiestas religiosas: todas las religiones tienen las suyas."],
  ejercicios: [
    ["b", "¿Quién hizo el primer belén viviente?", "San Francisco de Asís."],
    ["b", "¿Quiénes llevan los pasos en las procesiones?", "Los costaleros o portadores."],
    ["b", "¿Qué dulce se come el 6 de enero?", "El roscón de Reyes."],
    ["b", "¿Cómo se llama la fiesta de las luces hindú?", "Diwali."],
    ["b", "¿Qué es un villancico?", "Una canción popular de Navidad."],
    ["m", "¿Qué es una cofradía?", "Un grupo que organiza las procesiones y ayuda a los necesitados."],
    ["m", "Explica la regla para calcular la fecha de la Pascua.", "Domingo siguiente a la primera luna llena de primavera."],
    ["m", "¿Entre qué fechas puede caer la Pascua?", "Entre el 22 de marzo y el 25 de abril."],
    ["m", "¿Qué hacen los musulmanes durante el Ramadán?", "Ayunan desde que sale el sol hasta que se pone."],
    ["m", "¿Qué es la mona de Pascua?", "Un bizcocho decorado que los padrinos regalan a sus ahijados."],
    ["a", "Compara la Semana Santa de Sevilla y la de Valladolid.", "Sevilla, más alegre; Valladolid, más silenciosa y austera."],
    ["a", "Busca la fecha de la Pascua de este año y explica cómo se calcula.", "Respuesta abierta."],
    ["a", "Haz un calendario con fiestas de tres religiones.", "Respuesta abierta."],
    ["a", "Diseña una figura nueva para el belén de clase.", "Respuesta abierta."],
  ],
  quiz: [
    ["El primer belén viviente fue en…", ["Greccio", "Belén", "Sevilla"], "Belén."],
    ["El gorro alto de los nazarenos se llama…", ["capirote", "boina", "mitra"], "Semana Santa."],
    ["La regla de la fecha de Pascua se acordó en…", ["el Concilio de Nicea", "Roma en 1900", "Greccio"], "Fecha."],
    ["Las torrijas son típicas de…", ["Semana Santa", "verano", "Halloween"], "Dulces."],
    ["La janukiá es un…", ["candelabro", "pan", "vestido"], "Otras religiones."],
  ],
  examen: [
    ["En la lectura, ¿cuándo pone la abuela al Niño Jesús?", ["en Nochebuena", "en Adviento", "el 6 de enero"], "Lectura."],
    ["¿Qué tienen en común muchas fiestas de distintas religiones?", ["la luz, la comida y la familia", "el mismo día", "los mismos dulces"], "Otras religiones."],
  ],
  tarjetas: [
    ["Belén y villancicos", "San Francisco, Greccio 1223; Noche de paz."],
    ["Semana Santa en España", "Pasos, costaleros, cofradías, nazarenos, saetas."],
    ["Fecha de la Pascua", "Domingo tras la luna llena de primavera; 22 mar–25 abr."],
    ["Dulces y otras fiestas", "Roscón, torrijas, mona; Pésaj, Ramadán, Diwali."],
  ],
  glosario: [
    ["Belén", "Representación del nacimiento de Jesús."],
    ["Villancico", "Canción popular de Navidad."],
    ["Paso", "Plataforma con imágenes que se saca en procesión."],
    ["Costalero", "Persona que lleva un paso."],
    ["Cofradía", "Grupo de fieles que organiza las procesiones."],
    ["Nazareno", "Persona con túnica que acompaña la procesión."],
    ["Saeta", "Canto flamenco dedicado a una imagen."],
    ["Concilio", "Gran reunión de obispos."],
    ["Roscón de Reyes", "Bollo redondo del 6 de enero."],
    ["Ramadán", "Mes de ayuno de los musulmanes."],
    ["Janucá", "Fiesta judía de las luces."],
    ["Diwali", "Fiesta hindú de las luces."],
  ],
  situacion: {
    titulo: "El calendario de las fiestas",
    reto: "La clase crea un gran calendario mural con las fiestas cristianas y de otras religiones, sus tradiciones y sus dulces.",
    pasos: ["Marcar los tiempos litúrgicos y calcular la fecha de la Pascua.", "Montar un pequeño belén con figuras hechas por la clase.", "Investigar la Semana Santa y los dulces de la propia localidad.", "Añadir fiestas de otras religiones y compartir lo que tienen en común."],
    producto: "Un calendario mural de fiestas.",
    evaluacion: ["Conoce el origen del belén.", "Describe la Semana Santa en España.", "Calcula la fecha de la Pascua.", "Respeta fiestas de otras religiones."],
  },
});
