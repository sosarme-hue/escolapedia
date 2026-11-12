// Música 2º ESO: el sonido y sus cualidades. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

// Onda senoidal: amplitud a, número de ciclos n, entre x0 y x1 a la altura y.
const onda = (x0, x1, y, a, n, c) => `<path d="${[...Array(121)].map((_, i) => { const x = x0 + ((x1 - x0) * i) / 120; return `${i ? "L" : "M"}${x.toFixed(1)} ${(y - a * Math.sin((2 * Math.PI * n * i) / 120)).toFixed(1)}`; }).join(" ")}" fill="none" stroke="${c}" stroke-width="2.5"/>`;

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "El sonido y sus cualidades",
  minutos: 50,
  objetivos: ["Explicar cómo se produce y se propaga el sonido", "Distinguir sonido, ruido y silencio", "Reconocer las cuatro cualidades del sonido: altura, duración, intensidad y timbre", "Relacionar cada cualidad con su representación en la partitura y cuidar la salud auditiva"],
  claves: ["vibración", "frecuencia", "altura", "intensidad", "timbre", "decibelio"],
  pregunta: {
    texto: "En las películas de naves espaciales se oyen explosiones enormes. ¿Se oirían de verdad en el espacio?",
    respuesta: "No. El sonido es una <b>vibración</b> que necesita un <mark>medio material</mark> (aire, agua, un sólido) para viajar. En el espacio casi no hay materia, así que reina el silencio. Las películas añaden el sonido para emocionar al público.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el sonido?</h3><p>El <b>sonido</b> es la sensación que percibe el oído cuando le llegan las <b>vibraciones</b> de un cuerpo. Para que exista hacen falta tres elementos:</p><ul><li>Un <b>cuerpo que vibra</b> (emisor): una cuerda de guitarra, la membrana de un tambor, las cuerdas vocales.</li><li>Un <b>medio</b> que transmita la vibración: normalmente el aire.</li><li>Un <b>receptor</b>: el oído, que convierte la vibración en impulsos nerviosos que interpreta el cerebro.</li></ul><p>Las vibraciones se propagan en forma de <b>ondas</b>, como las que se forman al tirar una piedra a un estanque. En el aire viajan a unos <mark>340 metros por segundo</mark>; en el agua, a unos 1.500 m/s, y en el acero, a más de 5.000 m/s.</p>`,
      svg: svg("Un altavoz emite ondas que viajan por el aire hasta un oído", `<rect x="22" y="70" width="22" height="40" rx="4" fill="var(--ink)" opacity=".7"/><path d="M44 70 L 70 50 V 130 L 44 110 Z" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="2"/>
        ${[0, 1, 2, 3].map((i) => `<path d="M${88 + i * 26} 60 Q ${104 + i * 26} 90 ${88 + i * 26} 120" fill="none" stroke="var(--pen)" stroke-width="2.5" opacity="${1 - i * 0.18}"/>`).join("")}
        <path d="M214 66 C 244 60 246 110 222 116 C 214 118 216 104 222 100 C 230 94 226 80 216 82" fill="var(--sun)" fill-opacity=".3" stroke="var(--sun)" stroke-width="2.5"/>
        ${t(46, 152, "emisor", { c: "var(--pen)", s: 12 })}${t(138, 152, "medio (aire)", { c: "var(--muted)", s: 12 })}${t(226, 152, "receptor", { c: "var(--sun)", s: 12 })}${t(130, 30, "340 m/s en el aire", { s: 12 })}`),
      video: { id: "xQBeSWXFVd8", titulo: "El sonido: intensidad, tono y timbre", canal: "Smile and Learn - Español", vistas: 1139677 },
    },
    {
      html: `<h3>Sonido, ruido y silencio</h3><ul><li>Un <b>sonido</b> musical se produce por vibraciones <b>regulares</b> (periódicas): se puede reconocer su altura, como la nota de una flauta.</li><li>El <b>ruido</b> procede de vibraciones <b>irregulares</b>: un portazo, el tráfico, una obra. A veces se usa en música (la percusión, la música electrónica) y puede ser expresivo.</li><li>El <b>silencio</b> es la ausencia de sonido. En música es tan importante como el sonido: crea pausas, tensión y respiración. En la partitura se escribe con <b>silencios</b> de distintas duraciones.</li></ul><p>El compositor John Cage escribió en 1952 una obra famosa, <i>4′33″</i>, en la que los músicos no tocan nada: la «música» son los ruidos de la sala.</p>`,
    },
    {
      html: `<h3>La altura</h3><p>La <b>altura</b> permite distinguir los sonidos <b>agudos</b> de los <b>graves</b>. Depende de la <b>frecuencia</b>: el número de vibraciones por segundo, que se mide en <b>hercios (Hz)</b>.</p><ul><li>Más vibraciones por segundo → sonido más <b>agudo</b> (un silbato, un violín).</li><li>Menos vibraciones → sonido más <b>grave</b> (una tuba, un contrabajo).</li></ul><p>El oído humano percibe de unos <b>20 Hz a 20.000 Hz</b>. La nota <b>la</b> que usan las orquestas para afinar vibra a 440 Hz. En la partitura, la altura se indica con las <b>notas</b> (do, re, mi, fa, sol, la, si) y su posición en el <b>pentagrama</b>: cuanto más arriba, más aguda.</p>`,
      svg: svg("Dos ondas: una con muchas vibraciones, aguda, y otra con pocas, grave", `${onda(30, 230, 54, 18, 8, "var(--red)")}${onda(30, 230, 124, 18, 2, "var(--pen)")}${t(130, 22, "agudo: mucha frecuencia", { c: "var(--red)", s: 12 })}${t(130, 164, "grave: poca frecuencia", { c: "var(--pen)", s: 12 })}`),
    },
    {
      html: `<h3>La duración</h3><p>La <b>duración</b> es el tiempo que se mantiene un sonido: puede ser <b>largo</b> o <b>corto</b>. Depende de cuánto tiempo siga vibrando el cuerpo sonoro.</p><p>Algunos instrumentos pueden mantener el sonido mientras el músico quiera (el violín con el arco, la flauta mientras hay aire, el órgano); otros producen sonidos que se apagan solos (el piano, la guitarra, el triángulo).</p><p>En la partitura, la duración se representa con las <b>figuras musicales</b>: la redonda dura más que la blanca, la blanca más que la negra, y así sucesivamente. Las figuras organizan el <b>ritmo</b> de la música.</p>`,
    },
    {
      html: `<h3>La intensidad</h3><p>La <b>intensidad</b> permite distinguir los sonidos <b>fuertes</b> de los <b>débiles</b>. Depende de la <b>amplitud</b> de la vibración: cuanto más energía (más fuerte se pulsa una cuerda o se golpea un tambor), más amplitud y más fuerte suena.</p><p>Se mide en <b>decibelios (dB)</b>. En la partitura se indica con los <b>matices dinámicos</b>, palabras italianas:</p>${tabla(["Signo", "Nombre", "Significado"], [["pp", "pianissimo", "muy suave"], ["p", "piano", "suave"], ["mp", "mezzopiano", "medio suave"], ["mf", "mezzoforte", "medio fuerte"], ["f", "forte", "fuerte"], ["ff", "fortissimo", "muy fuerte"]])}<p>Los cambios graduales se indican con el <b>crescendo</b> (&lt;, aumentar) y el <b>diminuendo</b> (&gt;, disminuir).</p>`,
      svg: svg("Dos ondas con la misma frecuencia: una con poca amplitud, débil, y otra con mucha, fuerte", `${onda(30, 230, 52, 8, 4, "var(--leaf)")}${onda(30, 230, 120, 30, 4, "var(--sun)")}${t(130, 26, "p · débil: poca amplitud", { c: "var(--leaf)", s: 12 })}${t(130, 170, "f · fuerte: mucha amplitud", { c: "var(--sun)", s: 12 })}`),
    },
    {
      html: `<h3>El timbre</h3><p>El <b>timbre</b> es la cualidad que permite <mark>reconocer quién o qué produce un sonido</mark>, aunque toquen la misma nota con la misma intensidad y duración. Por el timbre distinguimos una flauta de un violín, o la voz de un amigo por teléfono.</p><p>Depende del <b>material</b> y la <b>forma</b> del instrumento y de cómo se hace sonar. Ocurre porque cada sonido es en realidad una mezcla de un sonido principal y muchos <b>armónicos</b> más agudos y débiles; la proporción de armónicos da a cada instrumento su «color».</p><p>Para describir el timbre se usan adjetivos: brillante, oscuro, metálico, aterciopelado, nasal, áspero…</p>`,
      video: { id: "f4VxDfiF4wg", titulo: "Cualidades del sonido", canal: "CREA música", vistas: 261234 },
    },
    {
      html: `<h3>Las cualidades en la partitura</h3>${tabla(["Cualidad", "Depende de", "Se escribe con"], [["Altura", "la frecuencia (Hz)", "notas en el pentagrama, claves"], ["Duración", "el tiempo de vibración", "figuras y silencios, puntillo, ligadura"], ["Intensidad", "la amplitud (dB)", "matices: p, f, crescendo…"], ["Timbre", "el material, la forma y los armónicos", "el nombre del instrumento al inicio del pentagrama"]])}<p>Cuando escuchas una obra, intenta describir las cuatro cualidades: ¿es aguda o grave?, ¿hay notas largas o cortas?, ¿suena fuerte o suave?, ¿qué instrumentos reconoces?</p>`,
    },
    {
      html: `<h3>Contaminación acústica y salud auditiva</h3><p>El oído es delicado. Exponerse a sonidos muy intensos o durante mucho tiempo puede causar <b>pérdida de audición</b> y <b>acúfenos</b> (pitidos permanentes), que no tienen cura.</p>${tabla(["Situación", "Decibelios aprox."], [["Biblioteca", "30-40 dB"], ["Conversación", "60 dB"], ["Tráfico intenso", "85 dB"], ["Auriculares a tope", "100-110 dB"], ["Concierto o discoteca", "110 dB"], ["Umbral del dolor", "130 dB"]])}<p>Consejos: usa los auriculares por debajo del <b>60 % del volumen</b> y no más de 60 minutos seguidos (regla 60/60), aléjate de los altavoces en los conciertos y descansa en silencio. Los ayuntamientos regulan el ruido con <b>ordenanzas</b> para proteger la salud de los vecinos.</p>`,
    },
  ],
  figura: {
    titulo: "Las cualidades del sonido",
    svg: filas("Resumen: el sonido es vibración en un medio; altura según la frecuencia; duración; intensidad según la amplitud; timbre según el instrumento; cuidar el oído", [["Sonido", "vibración que viaja por un medio", "var(--ink)"], ["Altura", "agudo / grave · frecuencia en Hz", "var(--red)"], ["Duración", "largo / corto · figuras", "var(--leaf)"], ["Intensidad", "fuerte / débil · amplitud en dB", "var(--sun)"], ["Timbre", "quién suena · armónicos", "var(--pen)"], ["Salud", "regla 60/60 con auriculares", "var(--inf)"]], 200),
  },
  video: { id: "f5_OOHJ4U1U", titulo: "Las cualidades del sonido: ejemplos y comparaciones", canal: "Raíces en Música - Educación Musical", vistas: 713218, megusta: 0, busqueda: "cualidades del sonido" },
  quiz: mezcla([
    { q: "El sonido no se propaga en…", o: ["el vacío", "el agua", "el aire"], a: 0, e: "Necesita materia." },
    { q: "La velocidad del sonido en el aire es de unos…", o: ["340 m/s", "3 m/s", "300.000 km/s"], a: 0, e: "La de la luz es mucho mayor." },
    { q: "La altura depende de…", o: ["la frecuencia", "la amplitud", "el material"], a: 0, e: "Vibraciones por segundo." },
    { q: "Un sonido con mucha frecuencia es…", o: ["agudo", "grave", "fuerte"], a: 0, e: "Muchas vibraciones." },
    { q: "La intensidad se mide en…", o: ["decibelios", "hercios", "segundos"], a: 0, e: "dB." },
    { q: "«ff» significa…", o: ["muy fuerte", "muy suave", "rápido"], a: 0, e: "Fortissimo." },
    { q: "La cualidad que distingue una flauta de un violín es…", o: ["el timbre", "la altura", "la duración"], a: 0, e: "El color del sonido." },
    { q: "La duración se representa con…", o: ["figuras", "matices", "claves"], a: 0, e: "Redonda, blanca…" },
    { q: "El ruido procede de vibraciones…", o: ["irregulares", "regulares", "muy agudas"], a: 0, e: "No periódicas." },
    { q: "La regla 60/60 recomienda…", o: ["60 % del volumen y 60 minutos", "60 dB y 60 horas", "60 canciones al día"], a: 0, e: "Proteger el oído." },
  ]),
  examen: mezcla([
    { q: "Un crescendo indica…", o: ["aumentar la intensidad poco a poco", "acelerar", "subir de altura"], a: 0, e: "Signo <." },
    { q: "El oído humano percibe aproximadamente de…", o: ["20 a 20.000 Hz", "0 a 100 Hz", "1.000 a 1.000.000 Hz"], a: 0, e: "Fuera de ese rango: infra y ultrasonidos." },
    { q: "El timbre depende sobre todo de…", o: ["los armónicos del sonido", "el volumen", "la duración"], a: 0, e: "Su mezcla da el color." },
  ]),
  feynman: ["Qué hace falta para que exista el sonido", "Diferencia entre sonido y ruido", "De qué depende la altura y cómo se escribe", "Cómo se indica la intensidad en la partitura", "Por qué reconocemos instrumentos distintos"],
  mapa: mapa("EL SONIDO", "var(--eso)", [
    ["Altura", "agudo · grave · Hz", "var(--red)"],
    ["Duración", "largo · corto · figuras", "var(--leaf)"],
    ["Intensidad", "fuerte · débil · dB", "var(--sun)"],
    ["Timbre", "instrumento · armónicos", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Sonido", "Vibración que se propaga por un medio y percibe el oído."],
    ["Frecuencia", "Vibraciones por segundo, en hercios (Hz)."],
    ["Altura", "Agudo o grave; depende de la frecuencia."],
    ["Duración", "Largo o corto; se escribe con figuras."],
    ["Intensidad", "Fuerte o débil; depende de la amplitud."],
    ["Timbre", "Color del sonido: quién lo produce."],
    ["Matices", "pp, p, mp, mf, f, ff, crescendo, diminuendo."],
    ["Decibelio", "Unidad de intensidad sonora."],
  ],
  familias: ["Jugad a reconocer con los ojos cerrados quién habla o qué objeto suena.", "Medid el ruido de casa y de la calle con una app de sonómetro.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "El sonido como fenómeno físico; sonido, ruido y silencio; cualidades del sonido y su grafía; contaminación acústica y salud auditiva (RD 217/2022, Música, escucha y percepción).",
    ideas: ["Experimentos con vasos de agua y gomas para la altura.", "Sonómetro en el patio y en clase: mapa de ruido del centro.", "Audición comparada de instrumentos tocando la misma nota."],
  },
  fuentes: [RD, { t: "OMS: escuchar sin riesgos", url: "https://www.who.int/es/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening" }],
  revisado: REV,
  ejemplosTitulo: "Análisis resueltos",
  ejemplos: [
    { enunciado: "Describe las cualidades de este sonido: una tuba toca una nota muy larga y muy suave.", pasos: ["Altura: grave (la tuba es un instrumento grave).", "Duración: larga.", "Intensidad: débil (pp o p). Timbre: metal, tuba."], resultado: "Grave, largo, suave y con timbre de tuba." },
    { enunciado: "Ves un relámpago y oyes el trueno 3 segundos después. ¿A qué distancia está la tormenta?", pasos: ["La luz llega casi al instante.", "El sonido recorre 340 m cada segundo.", "340 · 3 = 1.020 m."], resultado: "A unos 1.000 m (1 km)." },
    { enunciado: "Ordena de menor a mayor intensidad: mf, pp, ff, p, f.", pasos: ["pp (muy suave) es el menor.", "Después p y mf.", "Luego f y, por último, ff."], resultado: "pp, p, mf, f, ff." },
  ],
  errores: [
    "Confundir altura con intensidad: un sonido agudo no es un sonido fuerte.",
    "Decir «sube el volumen» cuando se quiere decir «más agudo».",
    "Pensar que el silencio no forma parte de la música.",
    "Creer que el sonido viaja por el vacío.",
    "Escuchar música con auriculares al máximo durante horas.",
  ],
  ejercicios: [
    { q: "¿Qué tres elementos son necesarios para que haya sonido?", sol: "Un cuerpo que vibra, un medio que lo transmita y un receptor." },
    { q: "Clasifica como sonido o ruido: nota de piano, motor de moto, canto de un pájaro, portazo.", sol: "Sonido, ruido, sonido, ruido." },
    { q: "Ordena de grave a agudo: violín, contrabajo, flauta piccolo, violonchelo.", sol: "Contrabajo, violonchelo, violín, flauta piccolo." },
    { q: "Explica la diferencia entre frecuencia y amplitud.", sol: "La frecuencia son vibraciones por segundo (altura); la amplitud es el tamaño de la vibración (intensidad)." },
    { q: "Nombra tres instrumentos que mantienen el sonido y tres en los que se apaga solo.", sol: "Mantienen: violín, flauta, órgano. Se apagan: piano, guitarra, triángulo." },
    { q: "Escribe los matices de más suave a más fuerte con su nombre.", sol: "pp pianissimo, p piano, mp mezzopiano, mf mezzoforte, f forte, ff fortissimo." },
    { q: "Describe el timbre de tres instrumentos con un adjetivo.", sol: "Ejemplo: trompeta brillante, clarinete aterciopelado, oboe nasal." },
    { q: "Un sonido de 880 Hz, ¿es más agudo o más grave que el la de 440 Hz?", sol: "Más agudo: el doble de frecuencia (la misma nota una octava arriba)." },
    { q: "¿Por qué es peligroso escuchar música a 110 dB mucho tiempo?", sol: "Puede dañar las células del oído y causar pérdida de audición o acúfenos permanentes." },
    { q: "Escucha el inicio de una canción y describe sus cuatro cualidades.", sol: "Respuesta abierta: altura, duración, intensidad y timbre de los instrumentos que se oyen." },
  ],
};
