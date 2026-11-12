// Religión 1º ESO. Dibujos propios en SVG.
const { tema, H, tabla } = require("./_eso1d");
const V = require("./_eso1d-videos");

// Rueda del año litúrgico con sus colores (dibujo propio).
const ruedaLiturgica = (() => {
  const tramos = [["Adviento", 4, "#7b4aa6"], ["Navidad", 3, "#f3f3f3"], ["Ordinario", 7, "#3f8f4e"], ["Cuaresma", 6, "#7b4aa6"], ["Pascua", 7, "#f3f3f3"], ["Ordinario", 25, "#3f8f4e"]];
  const total = tramos.reduce((a, t) => a + t[1], 0), cx = 130, cy = 90, r = 66, ri = 30;
  let ang = -Math.PI / 2, out = "";
  for (const [t, n, c] of tramos) {
    const a2 = ang + (n / total) * Math.PI * 2, big = a2 - ang > Math.PI ? 1 : 0;
    const p = (rr, a) => `${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`;
    out += `<path d="M${p(ri, ang)} L${p(r, ang)} A${r} ${r} 0 ${big} 1 ${p(r, a2)} L${p(ri, a2)} A${ri} ${ri} 0 ${big} 0 ${p(ri, ang)} Z" fill="${c}" stroke="var(--line)" stroke-width="1.5"/>`;
    const am = (ang + a2) / 2, lx = cx + (r + 10) * Math.cos(am), ly = cy + (r + 10) * Math.sin(am);
    if (n >= 3) out += `<text x="${lx.toFixed(1)}" y="${(ly + 4).toFixed(1)}" text-anchor="${Math.cos(am) > 0.2 ? "start" : Math.cos(am) < -0.2 ? "end" : "middle"}" font-size="10.5" font-weight="700" fill="var(--ink)">${t}</text>`;
    ang = a2;
  }
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Rueda del año litúrgico: Adviento y Cuaresma en morado, Navidad y Pascua en blanco, Tiempo ordinario en verde">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <g font-family="system-ui,sans-serif">${out}
  <text x="${cx}" y="${cy - 2}" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">AÑO</text>
  <text x="${cx}" y="${cy + 10}" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">LITÚRGICO</text></g>
</svg>`;
})();

module.exports = tema({
  materia: "Religión",
  titulo: "Las fiestas cristianas",
  objetivos: ["Explicar qué es el año litúrgico y sus tiempos", "Conocer el sentido del domingo, la Navidad, la Semana Santa y la Pascua", "Relacionar los colores y símbolos litúrgicos con cada tiempo", "Reconocer las fiestas cristianas en el calendario y la cultura popular"],
  claves: ["año litúrgico", "domingo", "Adviento", "Navidad", "Epifanía", "Cuaresma", "Miércoles de Ceniza", "Semana Santa", "Triduo pascual", "Pascua de Resurrección", "Pentecostés", "Tiempo ordinario", "colores litúrgicos", "fiestas de la Virgen", "santos"],
  pregunta: [
    "¿Te has preguntado por qué tenemos vacaciones en Navidad y en Semana Santa, por qué el domingo es festivo o por qué la fecha de la Semana Santa cambia cada año?",
    "Porque nuestro calendario está marcado por las <mark>fiestas cristianas</mark>. La Navidad celebra el nacimiento de Jesús; la Semana Santa y la Pascua, su muerte y resurrección; y el domingo es el día en que resucitó. La Pascua cambia de fecha porque se calcula según la <b>luna</b>, como la Pascua judía: es el domingo siguiente a la primera luna llena de primavera. Por eso puede caer entre el 22 de marzo y el 25 de abril.",
  ],
  bloques: [
    ["El año litúrgico", `<p>Los cristianos organizan el año según la vida de Jesús. Es el <mark>año litúrgico</mark>, que no empieza el 1 de enero, sino el <b>primer domingo de Adviento</b>, a finales de noviembre o principios de diciembre. A lo largo del año se recorren los grandes momentos de la vida de Jesús, desde la espera de su nacimiento hasta la venida del Espíritu Santo.</p><p>Tiene dos grandes ciclos: el de <b>Navidad</b> (Adviento y Navidad) y el de <b>Pascua</b> (Cuaresma, Semana Santa y tiempo pascual). Entre ellos está el <b>Tiempo ordinario</b>, el más largo, en el que se van leyendo las palabras y los hechos de Jesús domingo a domingo. Cada tiempo tiene su <b>color</b>, que se ve en la ropa del sacerdote y en los adornos de la iglesia.</p>`,
      ruedaLiturgica],
    ["El domingo, la fiesta semanal", `<p>La fiesta cristiana más antigua no es la Navidad, sino el <mark>domingo</mark>. Su nombre viene del latín <i>dies Dominicus</i>, «día del Señor», porque fue el día en que Jesús resucitó. Desde el principio, los cristianos se reunían cada domingo para celebrar la <b>Eucaristía</b> o misa: escuchar la palabra de Dios y compartir el pan, como Jesús en la Última Cena.</p><p>Por eso el domingo es como una pequeña Pascua cada semana. Es un día de <b>descanso</b>, de <b>encuentro</b> con la familia y los amigos, y de <b>ayuda</b> a los demás. Los judíos celebran el sábado (sabbat), el día en que, según el Génesis, Dios descansó; los musulmanes se reúnen el viernes para la oración comunitaria.</p>`,
      H.filas("El domingo", [["Día del Señor", "Jesús resucitó en domingo", "var(--sun)"], ["Eucaristía", "palabra y pan compartido", "var(--pen)"], ["Descanso", "familia y amigos", "var(--leaf)"], ["Pascua", "una pequeña Pascua semanal", "var(--red)"]])],
    ["Adviento y Navidad", `<p>El <mark>Adviento</mark> («venida») son las cuatro semanas antes de Navidad: un tiempo de <b>espera</b> y preparación, con color morado. Es típica la <b>corona de Adviento</b>, con cuatro velas que se encienden una cada domingo. Se recuerda a los profetas que anunciaron al Mesías, a Juan el Bautista y a María, que esperaba a su hijo.</p><p>La <b>Navidad</b> celebra el <b>nacimiento de Jesús</b> en Belén, con color blanco o dorado, que significa alegría. La noche del 24 de diciembre es la <b>Nochebuena</b>, con la «misa del gallo», y el 25, el día de Navidad. Son tradiciones muy españolas el <b>belén</b> o nacimiento (una costumbre que se atribuye a san Francisco de Asís) y los <b>villancicos</b>. El tiempo de Navidad incluye la fiesta de la Sagrada Familia y termina con el Bautismo del Señor.</p>`,
      H.flujo("Del Adviento a la Navidad", ["4 domingos|de espera", "velas de|la corona", "misa del|gallo", "Navidad|25 dic."], "var(--bac)")],
    ["La Epifanía y otras fiestas de Navidad", `<p>El <b>6 de enero</b> se celebra la <mark>Epifanía</mark>, que significa «manifestación». Recuerda la visita de los <b>magos de Oriente</b>, que siguieron una estrella para adorar al niño Jesús y le ofrecieron oro, incienso y mirra. Los magos venían de lejos y no eran judíos: representan a todos los pueblos de la tierra, a quienes Jesús se manifiesta. La tradición posterior los llamó Melchor, Gaspar y Baltasar.</p><p>En España es costumbre la <b>cabalgata</b> de la tarde del 5 de enero y los regalos de Reyes, que recuerdan los dones de los magos. Otras fiestas del tiempo de Navidad son la de <b>Santa María, Madre de Dios</b> (1 de enero) y la de los <b>Santos Inocentes</b> (28 de diciembre), aunque en España este día se ha convertido en jornada de bromas.</p>`,
      tabla(["Fecha", "Fiesta"], [["24-25 de diciembre", "Nochebuena y Navidad"], ["28 de diciembre", "Santos Inocentes"], ["1 de enero", "Santa María, Madre de Dios"], ["6 de enero", "Epifanía (Reyes)"]])],
    ["Cuaresma y Semana Santa", `<p>La <mark>Cuaresma</mark> son cuarenta días de preparación para la Pascua, que recuerdan los cuarenta días de Jesús en el desierto. Empieza el <b>Miércoles de Ceniza</b>, cuando se pone ceniza en la frente como signo de conversión. Su color es el morado. Se invita a tres prácticas: la <b>oración</b>, el <b>ayuno</b> (renunciar a algo) y la <b>limosna</b> (compartir con los necesitados).</p><p>La <b>Semana Santa</b> empieza el <b>Domingo de Ramos</b>, que recuerda la entrada de Jesús en Jerusalén con ramos de olivo y palmas. El <b>Jueves Santo</b> se celebra la Última Cena y el lavatorio de los pies; el <b>Viernes Santo</b>, la pasión y la muerte de Jesús en la cruz (color rojo); y el <b>Sábado Santo</b> es un día de silencio y espera. En muchas ciudades españolas salen <b>procesiones</b> con pasos que representan escenas de la pasión.</p>`,
      H.linea("La Semana Santa", [["Domingo", "Ramos:|entrada"], ["Jueves", "Última|Cena"], ["Viernes", "pasión|y cruz"], ["Domingo", "Pascua de|Resurrección"]], "var(--red)"), V.re6b],
    ["La Pascua y Pentecostés", `<p>La <mark>Pascua de Resurrección</mark> es la fiesta más importante del cristianismo: celebra que Jesús ha <b>resucitado</b> y que la vida vence a la muerte. Empieza con la <b>Vigilia pascual</b>, la noche del sábado: se enciende el <b>cirio pascual</b> con un fuego nuevo, se canta el aleluya y se renuevan las promesas del bautismo. Su color es el blanco.</p><p>La alegría de la Pascua dura <b>cincuenta días</b>, el tiempo pascual. A los cuarenta días se celebra la <b>Ascensión</b> de Jesús al cielo, y a los cincuenta, <b>Pentecostés</b>, la venida del Espíritu Santo (color rojo, como el fuego). La Cuaresma, la Semana Santa y el tiempo pascual forman el centro del año cristiano: los tres días de la pasión, muerte y resurrección se llaman <b>Triduo pascual</b>.</p>`,
      H.flujo("El ciclo de Pascua", ["Cuaresma|40 días", "Semana|Santa", "Pascua", "Ascensión|(40 días)", "Espíritu|(50 días)"], "var(--sun)")],
    ["Colores y símbolos", `<p>Cada tiempo y cada fiesta tiene un <mark>color litúrgico</mark> con un significado. El <b>morado</b> se usa en Adviento y Cuaresma: espera, preparación y conversión. El <b>blanco</b> (o dorado) en Navidad, Pascua y fiestas de Jesús, de la Virgen y de los santos no mártires: alegría y luz. El <b>rojo</b>, el Domingo de Ramos, el Viernes Santo, Pentecostés y las fiestas de los mártires: la sangre, el amor y el fuego del Espíritu. Y el <b>verde</b> en el Tiempo ordinario: esperanza y crecimiento.</p><p>También hay <b>símbolos</b> propios: la corona y las velas de Adviento, el belén y la estrella en Navidad, la ceniza en Cuaresma, los ramos y la cruz en Semana Santa, el cirio y el agua en Pascua, y el fuego y la paloma en Pentecostés.</p>`,
      H.filas("Colores litúrgicos", [["Morado", "Adviento, Cuaresma: espera", "var(--bac)"], ["Blanco", "Navidad, Pascua: alegría", "var(--muted)"], ["Rojo", "Viernes Santo, Pentecostés", "var(--red)"], ["Verde", "Tiempo ordinario: esperanza", "var(--leaf)"]])],
    ["María, los santos y las fiestas populares", `<p>La Iglesia celebra también a <mark>María</mark>, la madre de Jesús, en varias fiestas: la <b>Inmaculada Concepción</b> (8 de diciembre, festivo en España), la <b>Asunción</b> (15 de agosto) y muchas advocaciones locales, como la Virgen del Pilar (12 de octubre). Y celebra a los <b>santos</b>, cristianos que vivieron el Evangelio de forma ejemplar: el 1 de noviembre es la fiesta de <b>Todos los Santos</b>, y el 2, el día de los <b>Fieles Difuntos</b>.</p><p>Muchas <b>fiestas populares</b> españolas tienen origen cristiano: las fiestas patronales de cada pueblo, el Corpus Christi con sus alfombras de flores, las hogueras de <b>San Juan</b> (24 de junio), los Sanfermines, las romerías como la del Rocío o el Camino de Santiago en honor del apóstol <b>Santiago</b> (25 de julio). También el Carnaval, la fiesta antes de que empiece la Cuaresma.</p>`,
      tabla(["Fecha", "Fiesta"], [["1 de noviembre", "Todos los Santos"], ["8 de diciembre", "Inmaculada Concepción"], ["24 de junio", "San Juan"], ["25 de julio", "Santiago apóstol"], ["15 de agosto", "Asunción de María"]])],
  ],
  ejemplos: [
    ["¿Por qué la Semana Santa cambia de fecha cada año y la Navidad no?", ["La Navidad tiene fecha fija: 25 de diciembre.", "La Pascua se calcula con la luna: el domingo después de la primera luna llena de primavera."], "Porque la Pascua depende del calendario lunar y la Navidad, del solar."],
    ["Un sacerdote lleva ropa morada. ¿En qué tiempos del año podemos estar?", ["El morado indica espera y preparación.", "Se usa en Adviento y en Cuaresma."], "En Adviento o en Cuaresma."],
    ["Ordena: Pentecostés, Miércoles de Ceniza, Domingo de Ramos, Pascua, Ascensión.", ["Ceniza abre la Cuaresma.", "Ramos abre la Semana Santa.", "Pascua: resurrección.", "Ascensión: a los 40 días.", "Pentecostés: a los 50 días."], "Ceniza, Ramos, Pascua, Ascensión, Pentecostés."],
  ],
  errores: [
    "Pensar que el año litúrgico empieza el 1 de enero: empieza el primer domingo de Adviento.",
    "Creer que la Navidad es la fiesta cristiana más importante: lo es la Pascua de Resurrección.",
    "Confundir Epifanía y Navidad: la Epifanía (6 de enero) celebra la visita de los magos.",
    "Pensar que el Viernes Santo termina la historia: el centro es la resurrección del domingo.",
    "Creer que los colores litúrgicos son decorativos: cada uno tiene un significado.",
  ],
  ejercicios: [
    ["¿Qué es el año litúrgico y cuándo empieza?", "La organización del año según la vida de Jesús; empieza el primer domingo de Adviento."],
    ["¿Por qué el domingo es fiesta para los cristianos?", "Porque es el día en que Jesús resucitó: el día del Señor."],
    ["¿Qué es el Adviento y cuánto dura?", "Las cuatro semanas de espera y preparación para la Navidad."],
    ["¿Qué celebra la Epifanía?", "La visita de los magos de Oriente: Jesús se manifiesta a todos los pueblos."],
    ["¿Qué tres prácticas propone la Cuaresma?", "Oración, ayuno y limosna."],
    ["¿Qué se recuerda el Jueves Santo y el Viernes Santo?", "La Última Cena y la pasión y muerte de Jesús."],
    ["¿Cuál es la fiesta más importante del cristianismo y por qué?", "La Pascua de Resurrección, porque celebra que Jesús venció a la muerte."],
    ["¿Qué se celebra en Pentecostés y cuándo?", "La venida del Espíritu Santo, cincuenta días después de Pascua."],
    ["¿Qué significan el morado y el verde?", "Morado: espera y conversión; verde: esperanza y crecimiento."],
    ["Nombra tres fiestas populares españolas de origen cristiano.", "San Juan, Corpus Christi, el Rocío, Sanfermines, fiestas patronales (otras válidas)."],
  ],
  figura: ["El año de los cristianos", H.figCols("El año litúrgico", [["Navidad", ["Adviento", "Nochebuena", "Navidad", "Epifanía"], "var(--bac)"], ["Pascua", ["Cuaresma", "Semana Santa", "Resurrección", "Pentecostés"], "var(--red)"], ["Ordinario", ["el más largo", "domingo a domingo", "color verde", "esperanza"], "var(--leaf)"], ["María y santos", ["Inmaculada", "Asunción", "Todos los Santos", "patronos"], "var(--sun)"]])],
  video: V.re6v,
  quiz: [
    ["El año litúrgico empieza…", ["el primer domingo de Adviento", "el 1 de enero", "el Domingo de Ramos"], "Finales de noviembre."],
    ["«Domingo» significa…", ["día del Señor", "día de descanso", "séptimo día"], "Dies Dominicus."],
    ["La corona de Adviento tiene…", ["cuatro velas", "siete velas", "una vela"], "Una por domingo."],
    ["La Epifanía se celebra el…", ["6 de enero", "25 de diciembre", "1 de noviembre"], "Magos de Oriente."],
    ["La Cuaresma empieza el…", ["Miércoles de Ceniza", "Domingo de Ramos", "Jueves Santo"], "Ceniza en la frente."],
    ["El Domingo de Ramos recuerda…", ["la entrada de Jesús en Jerusalén", "su nacimiento", "su bautismo"], "Palmas y olivos."],
    ["La fiesta más importante del cristianismo es…", ["la Pascua de Resurrección", "la Navidad", "Todos los Santos"], "Vence a la muerte."],
    ["Pentecostés se celebra a los…", ["50 días de Pascua", "40 días de Navidad", "7 días de Ramos"], "Espíritu Santo."],
    ["El color del Tiempo ordinario es…", ["verde", "morado", "rojo"], "Esperanza."],
    ["Santiago apóstol se celebra el…", ["25 de julio", "24 de junio", "15 de agosto"], "Camino de Santiago."],
  ],
  examen: [
    ["La Pascua se calcula según…", ["la luna llena de primavera", "el solsticio de invierno", "el año nuevo"], "Domingo tras la luna llena."],
    ["El Triduo pascual son…", ["los tres días de pasión, muerte y resurrección", "tres semanas de Adviento", "tres fiestas de la Virgen"], "Centro del año."],
    ["El rojo se usa en…", ["Viernes Santo y Pentecostés", "Adviento", "Tiempo ordinario"], "Sangre y fuego."],
  ],
  feynman: ["Qué es el año litúrgico y cómo se organiza", "Qué celebran el domingo, la Navidad y la Epifanía", "Qué se vive en Cuaresma, Semana Santa y Pascua", "Qué significan los colores y qué fiestas populares son cristianas"],
  mapa: ["FIESTAS CRISTIANAS", "var(--sun)", [["Año litúrgico", "Adviento a Cristo Rey", "var(--leaf)"], ["Navidad", "Adviento · Epifanía", "var(--bac)"], ["Pascua", "Cuaresma · Semana Santa", "var(--red)"], ["Populares", "santos · patronos", "var(--sun)"]], 240],
  tarjetas: [
    ["Año litúrgico", "El año organizado según la vida de Jesús."],
    ["Domingo", "Día del Señor: pequeña Pascua semanal."],
    ["Adviento", "Cuatro semanas de espera (morado)."],
    ["Epifanía", "6 de enero: los magos, Jesús para todos."],
    ["Cuaresma", "40 días: oración, ayuno y limosna."],
    ["Semana Santa", "Ramos, Jueves y Viernes Santo."],
    ["Pascua", "Resurrección: la fiesta más importante."],
    ["Colores litúrgicos", "Morado, blanco, rojo y verde."],
  ],
  familias: ["Mirad juntos el calendario y marcad las fiestas cristianas y las patronales de vuestro pueblo o ciudad.", "Preparad en casa una corona de Adviento o un belén y explicad su sentido."],
  saberes: "El año litúrgico y las fiestas cristianas: domingo, ciclo de Navidad, ciclo de Pascua, colores y símbolos litúrgicos, fiestas de María y de los santos, y su presencia en la cultura popular (RD 217/2022; enseñanzas de Religión católica de la ESO).",
  ideas: ["Calendario litúrgico de clase con los colores de cada tiempo.", "Investigar el origen de la fiesta patronal del pueblo.", "Exposición de fotos de procesiones, belenes y romerías."],
  fuentes: [["Conferencia Episcopal Española: calendario litúrgico", "https://www.conferenciaepiscopal.es/"], ["Catecismo de la Iglesia Católica (n.º 1163-1173)", "https://www.vatican.va/archive/catechism_sp/index_sp.html"]],
});
