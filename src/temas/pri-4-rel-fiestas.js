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
