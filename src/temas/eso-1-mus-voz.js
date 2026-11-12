// Música 1º ESO: la voz humana. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "La voz humana",
  minutos: 50,
  objetivos: ["Explicar cómo se produce la voz: respiración, emisión y resonancia", "Clasificar las voces por su tesitura", "Conocer las agrupaciones vocales", "Aplicar hábitos de higiene vocal y técnica básica de canto"],
  claves: ["aparato fonador", "cuerdas vocales", "tesitura", "soprano", "coro", "muda de la voz"],
  pregunta: {
    texto: "¿Por qué a muchos chicos de tu edad «se les rompe» la voz y de repente les salen gallos?",
    respuesta: "Por la <b>muda de la voz</b>. En la adolescencia la laringe crece y las <b>cuerdas vocales</b> se alargan y engrosan, sobre todo en los chicos. Mientras se adaptan, el control es inestable y aparecen los <b>gallos</b>. <mark>Al final la voz baja casi una octava</mark>. A las chicas también les cambia, aunque menos.",
  },
  bloques: [
    {
      html: `<h3>La voz, el primer instrumento</h3><p>La <b>voz humana</b> es el instrumento más antiguo y el único que todos llevamos siempre encima. Sirve para hablar, pero también para cantar, y en todas las culturas del mundo existe el canto.</p><p>Para producir la voz trabajan juntos tres sistemas del cuerpo, que forman el <b>aparato fonador</b>:</p><ol><li><b>Respiratorio</b>: los pulmones y el diafragma dan el aire (la «energía»).</li><li><b>Emisor</b>: la laringe y las cuerdas vocales vibran (el «sonido»).</li><li><b>Resonador</b>: la boca, la nariz y la garganta amplifican y dan color (el «timbre»).</li></ol><p>Además, la lengua, los labios y los dientes (<b>articuladores</b>) convierten el sonido en palabras.</p>`,
      svg: svg("Esquema del aparato fonador: pulmones y diafragma abajo, laringe con cuerdas vocales en el cuello y cavidades de resonancia en la cabeza", `<path d="M130 24 C 96 24 90 60 104 74 L 116 84 V 112 M130 24 C 164 24 170 60 156 74 L 144 84 V 112" fill="none" stroke="var(--ink)" stroke-width="2"/><ellipse cx="128" cy="52" rx="20" ry="12" fill="var(--sun)" fill-opacity=".35" stroke="var(--sun)" stroke-width="2"/><rect x="122" y="88" width="16" height="16" rx="4" fill="var(--red)" fill-opacity=".45" stroke="var(--red)" stroke-width="2"/><path d="M106 118 C 80 120 80 160 100 160 C 118 160 124 140 124 120 Z M154 118 C 180 120 180 160 160 160 C 142 160 136 140 136 120 Z" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"/><path d="M84 166 Q 130 152 176 166" fill="none" stroke="var(--leaf)" stroke-width="3"/>${t(24, 56, "resonadores", { s: 10, a: "start", c: "var(--sun)" })}${t(236, 100, "laringe", { s: 10, a: "end", c: "var(--red)" })}${t(24, 136, "pulmones", { s: 10, a: "start", c: "var(--pen)" })}${t(236, 172, "diafragma", { s: 10, a: "end", c: "var(--leaf)" })}`),
      video: vb("vozB"),
    },
    {
      html: `<h3>La respiración</h3><p>Para cantar bien hay que respirar bien. La respiración más eficaz es la <b>diafragmática</b> o costo-abdominal:</p><ul><li>El <b>diafragma</b> es un músculo con forma de cúpula bajo los pulmones. Al inspirar baja y deja que los pulmones se llenen por la parte de abajo: la tripa y las costillas se expanden, los hombros no suben.</li><li>Al cantar, el aire sale <b>despacio y controlado</b>, como cuando soplas una vela sin apagarla.</li></ul><p>Ejercicio: túmbate boca arriba con un libro sobre el ombligo. Al inspirar, el libro debe subir; al espirar con una «sss» larga, debe bajar lentamente. Así se entrena el apoyo.</p>`,
    },
    {
      html: `<h3>Las cuerdas vocales</h3><p>Dentro de la <b>laringe</b> (la «nuez») hay dos pequeños pliegues musculares: las <b>cuerdas vocales</b>. Al respirar están separadas; al hablar o cantar se juntan y el aire que sale de los pulmones las hace <b>vibrar</b> cientos de veces por segundo.</p><ul><li>Cuerdas <b>cortas y finas</b>: vibran más rápido, voz más <b>aguda</b> (niños, mujeres).</li><li>Cuerdas <b>largas y gruesas</b>: vibran más despacio, voz más <b>grave</b> (hombres adultos).</li><li>Al <b>tensarlas</b> más, la nota sube; al relajarlas, baja.</li></ul><p>Miden apenas 1 o 2 centímetros, y son delicadas: gritar mucho puede irritarlas e incluso formar <b>nódulos</b>.</p>`,
    },
    {
      html: `<h3>Las voces por su tesitura</h3><p>La <b>tesitura</b> es el conjunto de notas que una voz puede cantar con comodidad. Según ella, las voces adultas se clasifican en:</p>${tabla(["Voces femeninas", "Voces masculinas"], [["<b>Soprano</b>: la más aguda", "<b>Tenor</b>: la más aguda"], ["<b>Mezzosoprano</b>: intermedia", "<b>Barítono</b>: intermedia"], ["<b>Contralto</b>: la más grave", "<b>Bajo</b>: la más grave"]])}<p>Las voces de niños y niñas antes de la muda se llaman <b>voces blancas</b> y suenan en un registro parecido al de las sopranos y contraltos. El <b>contratenor</b> es un hombre que canta en el registro de contralto usando una técnica especial (falsete).</p>`,
      svg: svg("Barras de tesitura de grave a agudo: bajo, barítono, tenor, contralto, mezzosoprano y soprano, solapadas entre sí", `${[["bajo", 0, "var(--pen)"], ["barítono", 1, "var(--pen)"], ["tenor", 2, "var(--pen)"], ["contralto", 3, "var(--red)"], ["mezzo", 4, "var(--red)"], ["soprano", 5, "var(--red)"]].map(([n, i, c]) => `<rect x="${86 + i * 18}" y="${20 + i * 22}" width="${70}" height="14" rx="7" fill="${c}" fill-opacity=".4" stroke="${c}" stroke-width="1.5"/>${t(80 + i * 18, 31 + i * 22, n, { s: 10, a: "end", c })}`).join("")}<path d="M86 158 H 250" stroke="var(--muted)" stroke-width="1.5"/>${t(90, 172, "grave", { s: 10, a: "start", c: "var(--muted)" })}${t(250, 172, "agudo", { s: 10, a: "end", c: "var(--muted)" })}`),
      video: vb("vozB2"),
    },
    {
      html: `<h3>La muda de la voz</h3><p>Entre los <b>11 y los 15 años</b>, las hormonas de la pubertad hacen crecer la laringe:</p><ul><li>En los <b>chicos</b>, las cuerdas vocales crecen mucho (hasta un 60 %) y la voz baja alrededor de una <b>octava</b>. Por eso aparece la nuez marcada.</li><li>En las <b>chicas</b>, el cambio es menor: la voz baja unos pocos tonos y gana cuerpo.</li></ul><p>Durante la muda es normal que la voz suene <b>ronca</b>, que aparezcan <b>gallos</b> o que algunas notas que antes salían ya no salgan. Consejos: no forzar los agudos ni los graves, cantar en una tesitura cómoda, beber agua y tener paciencia. ¡Nadie debe burlarse de un compañero por ello!</p>`,
    },
    {
      html: `<h3>Las agrupaciones vocales</h3><ul><li><b>Solista</b>: una voz sola, acompañada o no por instrumentos.</li><li><b>Dúo, trío, cuarteto</b>: dos, tres o cuatro cantantes.</li><li><b>Coro</b>: grupo grande de cantantes organizados por voces. El más habitual es el <b>coro mixto</b> a cuatro voces (soprano, contralto, tenor y bajo: <b>SATB</b>).</li><li><b>Coro de voces blancas</b>: niños y niñas.</li><li><b>Escolanía</b>: coro infantil ligado a una iglesia o monasterio, como la de Montserrat, una de las más antiguas de Europa.</li></ul><p>Se llama canto <b>a cappella</b> al que se hace sin acompañamiento instrumental. Y hoy son muy populares los grupos que imitan con la boca todos los instrumentos (<b>beatbox</b> y grupos vocales).</p>`,
    },
    {
      html: `<h3>Técnica básica para cantar</h3><ol><li><b>Postura</b>: de pie, pies separados a la anchura de las caderas, rodillas sin bloquear, espalda recta y hombros relajados.</li><li><b>Respiración</b>: diafragmática, sin subir los hombros.</li><li><b>Calentamiento</b>: relajar cuello y mandíbula, hacer vibrar los labios («brrr»), sirenas suaves de grave a agudo.</li><li><b>Articulación</b>: abrir bien la boca en las vocales y pronunciar claras las consonantes.</li><li><b>Afinación</b>: escuchar a los demás y al instrumento antes de cantar.</li></ol><p>Igual que un deportista calienta antes de correr, un cantante calienta la voz antes de cantar.</p>`,
    },
    {
      html: `<h3>Cuidar la voz</h3><p>La voz es tu herramienta para comunicarte toda la vida. Hábitos de <b>higiene vocal</b>:</p><ul><li><b>Bebe agua</b> a menudo: las cuerdas necesitan estar hidratadas.</li><li><b>No grites</b> ni hables por encima del ruido; acércate a quien te escucha.</li><li>Evita <b>carraspear</b>: mejor tragar saliva o beber.</li><li>Descansa la voz cuando estés afónico o resfriado.</li><li>Duerme lo suficiente y evita el humo del tabaco.</li></ul><p>Profesiones como docente, cantante, actor o locutor dependen de la voz, y cuidarla es parte de su trabajo.</p>`,
    },
  ],
  figura: {
    titulo: "La voz humana en un vistazo",
    svg: filas("Resumen: aparato fonador con respiración, emisión y resonancia; cuerdas vocales; voces femeninas soprano, mezzo y contralto; masculinas tenor, barítono y bajo; muda; coros; higiene vocal", [["Respiración", "pulmones · diafragma", "var(--leaf)"], ["Emisión", "laringe · cuerdas vocales", "var(--red)"], ["Resonancia", "boca · nariz · garganta", "var(--sun)"], ["Femeninas", "soprano · mezzo · contralto", "var(--red)"], ["Masculinas", "tenor · barítono · bajo", "var(--pen)"], ["Coro", "SATB · voces blancas", "var(--inf)"]], 200),
  },
  video: vg("vozV"),
  quiz: mezcla([
    { q: "Las cuerdas vocales están en la…", o: ["laringe", "tráquea", "boca"], a: 0, e: "La nuez." },
    { q: "La voz femenina más aguda es la…", o: ["soprano", "contralto", "mezzosoprano"], a: 0, e: "Femeninas." },
    { q: "La voz masculina más grave es el…", o: ["bajo", "tenor", "barítono"], a: 0, e: "Masculinas." },
    { q: "La voz masculina intermedia es el…", o: ["barítono", "tenor", "contralto"], a: 0, e: "Entre tenor y bajo." },
    { q: "La tesitura es…", o: ["las notas que una voz canta con comodidad", "el volumen de la voz", "un tipo de coro"], a: 0, e: "Registro cómodo." },
    { q: "El músculo clave para respirar al cantar es el…", o: ["diafragma", "bíceps", "corazón"], a: 0, e: "Respiración diafragmática." },
    { q: "Cantar sin instrumentos es cantar…", o: ["a cappella", "a dúo", "en falsete"], a: 0, e: "Solo voces." },
    { q: "SATB significa…", o: ["soprano, contralto, tenor y bajo", "solo, alto, trío, banda", "sonido, altura, timbre, banda"], a: 0, e: "Coro mixto." },
    { q: "Las voces de niños antes de la muda se llaman…", o: ["voces blancas", "voces graves", "barítonos"], a: 0, e: "Voces infantiles." },
    { q: "Para cuidar la voz conviene…", o: ["beber agua y no gritar", "carraspear a menudo", "hablar por encima del ruido"], a: 0, e: "Higiene vocal." },
  ]),
  examen: mezcla([
    { q: "¿Por qué la voz de un hombre adulto es más grave que la de un niño?", o: ["sus cuerdas vocales son más largas y gruesas", "sus pulmones son más pequeños", "respira peor"], a: 0, e: "Vibran más despacio." },
    { q: "En la muda, la voz de los chicos baja alrededor de…", o: ["una octava", "una nota", "dos octavas"], a: 0, e: "Por el crecimiento de la laringe." },
    { q: "¿Qué parte del aparato fonador da el timbre?", o: ["los resonadores", "el diafragma", "los pulmones"], a: 0, e: "Boca, nariz, garganta." },
  ]),
  feynman: ["Cómo se produce la voz", "Qué hacen las cuerdas vocales", "Cómo se clasifican las voces", "Qué ocurre en la muda de la voz", "Cómo cuidar la voz"],
  mapa: mapa("LA VOZ", "var(--eso)", [
    ["Aparato fonador", "respirar · emitir · resonar", "var(--red)"],
    ["Voces", "S · Mz · A · T · Bar · B", "var(--pen)"],
    ["Agrupaciones", "solista · coro · a cappella", "var(--leaf)"],
    ["Higiene vocal", "agua · no gritar", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Aparato fonador", "Respiración, emisión y resonancia que producen la voz."],
    ["Cuerdas vocales", "Pliegues de la laringe que vibran al pasar el aire."],
    ["Diafragma", "Músculo que controla la respiración al cantar."],
    ["Tesitura", "Notas que una voz canta con comodidad."],
    ["Soprano", "Voz femenina más aguda."],
    ["Bajo", "Voz masculina más grave."],
    ["Muda de la voz", "Cambio de la voz en la pubertad."],
    ["A cappella", "Canto sin acompañamiento instrumental."],
  ],
  familias: ["Probad la respiración con el libro sobre el ombligo.", "Comparad las voces de la familia y clasificadlas de más aguda a más grave.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "La voz: aparato fonador, clasificación de las voces, agrupaciones vocales, técnica y cuidado de la voz; interpretación vocal individual y en grupo (RD 217/2022, Música, interpretación y creación).",
    ideas: ["Calentamiento vocal de cinco minutos al inicio de cada sesión.", "Clasificar voces conocidas (del cine, la ópera o la música actual) en tesituras.", "Canon sencillo a tres voces compuesto en clase."],
  },
  fuentes: [RD, { t: "Escolanía de Montserrat", url: "https://www.escolania.cat/es/" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "Ordena de más grave a más aguda: tenor, contralto, bajo, soprano.", pasos: ["Masculinas: bajo (grave) y tenor (aguda).", "Femeninas: contralto (grave) y soprano (aguda).", "Las masculinas son en general más graves que las femeninas."], resultado: "Bajo, tenor, contralto, soprano." },
    { enunciado: "Explica por qué una persona afónica no debe susurrar mucho.", pasos: ["Al susurrar, las cuerdas no vibran pero se tensan para dejar pasar el aire.", "Eso las fuerza aunque no lo parezca.", "Lo mejor es el reposo vocal y beber agua."], resultado: "Porque susurrar también cansa las cuerdas vocales." },
    { enunciado: "Diseña un calentamiento vocal de tres pasos.", pasos: ["Relajación: girar hombros y cuello suavemente.", "Respiración: inspirar en 4 tiempos, espirar con «sss» en 8.", "Voz: vibración de labios en sirena de grave a agudo."], resultado: "Relajar, respirar y activar la voz." },
  ],
  errores: [
    "Pensar que solo los chicos tienen muda de voz.",
    "Creer que respirar bien es subir los hombros y llenar el pecho.",
    "Confundir tesitura (registro de notas) con intensidad (volumen).",
    "Pensar que el contralto es una voz masculina.",
    "Creer que carraspear limpia la garganta sin dañar la voz.",
  ],
  ejercicios: [
    { q: "Nombra los tres sistemas del aparato fonador y su función.", sol: "Respiratorio (aire), emisor (vibración de las cuerdas), resonador (amplificación y timbre)." },
    { q: "¿Qué es la tesitura?", sol: "El conjunto de notas que una voz canta con comodidad." },
    { q: "Escribe las seis voces adultas ordenadas de grave a agudo.", sol: "Bajo, barítono, tenor, contralto, mezzosoprano, soprano." },
    { q: "¿Qué significa SATB?", sol: "Soprano, contralto (alto), tenor y bajo." },
    { q: "Explica qué ocurre en la muda de la voz.", sol: "La laringe crece, las cuerdas se alargan y la voz se hace más grave, con gallos mientras se adapta." },
    { q: "Describe la postura correcta para cantar.", sol: "De pie, pies a la anchura de las caderas, rodillas sueltas, espalda recta, hombros relajados." },
    { q: "Cita cuatro hábitos de higiene vocal.", sol: "Beber agua, no gritar, no carraspear, descansar la voz." },
    { q: "¿Qué es cantar a cappella?", sol: "Cantar sin acompañamiento de instrumentos." },
    { q: "Nombra tres profesiones que dependen de la voz.", sol: "Docente, cantante, actor, locutor, teleoperador." },
    { q: "Graba tu voz hablando y cantando y descríbela: ¿aguda o grave? ¿Qué timbre tiene?", sol: "Respuesta personal." },
  ],
};
