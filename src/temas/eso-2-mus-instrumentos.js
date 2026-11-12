// Música 2º ESO: los instrumentos y las agrupaciones. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "Los instrumentos y las agrupaciones",
  minutos: 55,
  objetivos: ["Clasificar los instrumentos según cómo producen el sonido", "Reconocer los instrumentos de cuerda, viento y percusión de la orquesta", "Conocer los instrumentos eléctricos y electrónicos", "Distinguir las principales agrupaciones instrumentales y la disposición de la orquesta"],
  claves: ["cordófono", "aerófono", "idiófono", "membranófono", "orquesta sinfónica", "agrupación"],
  pregunta: {
    texto: "¿Por qué el piano se clasifica a veces como instrumento de cuerda y otras como de percusión?",
    respuesta: "Porque el sonido lo producen <b>cuerdas</b> que vibran, pero se ponen en marcha <b>golpeándolas</b> con macillos al pulsar las teclas. En la clasificación científica es un <mark>cordófono</mark> (lo que vibra es la cuerda), aunque en la orquesta tradicional se le llama de «cuerda percutida» o se coloca con los teclados.",
  },
  bloques: [
    {
      html: `<h3>¿Cómo se clasifican los instrumentos?</h3><p>La clasificación más usada hoy (de Hornbostel y Sachs, 1914) se fija en <mark>qué es lo que vibra</mark> para producir el sonido:</p>${tabla(["Grupo", "Qué vibra", "Ejemplos"], [["Cordófonos", "una cuerda tensa", "violín, guitarra, arpa, piano"], ["Aerófonos", "una columna de aire", "flauta, clarinete, trompeta, gaita"], ["Membranófonos", "una membrana tensa (parche)", "timbal, tambor, pandero, bombo"], ["Idiófonos", "el propio cuerpo del instrumento", "castañuelas, xilófono, triángulo, platillos"], ["Electrófonos", "el sonido se genera o amplifica con electricidad", "guitarra eléctrica, sintetizador"]])}<p>En la orquesta se usa una clasificación más sencilla: <b>cuerda</b>, <b>viento</b> (madera y metal) y <b>percusión</b>.</p>`,
      svg: svg("Cinco familias: cordófonos, aerófonos, membranófonos, idiófonos y electrófonos con un icono cada una", `${[["cordófonos", "var(--red)"], ["aerófonos", "var(--pen)"], ["membranófonos", "var(--sun)"], ["idiófonos", "var(--leaf)"], ["electrófonos", "var(--inf)"]].map(([n, c], i) => `<circle cx="${30 + i * 50}" cy="70" r="20" fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="2.5"/>${t(30 + i * 50, 110 + (i % 2) * 18, n, { c, s: 10 })}`).join("")}
        <path d="M22 60 V 80 M28 58 V 82 M34 58 V 82 M40 60 V 80" stroke="var(--red)" stroke-width="1.5"/><path d="M66 70 h 28 M70 66 v 8 M78 66 v 8 M86 66 v 8" stroke="var(--pen)" stroke-width="2"/><ellipse cx="130" cy="66" rx="14" ry="5" fill="var(--sun)" fill-opacity=".5" stroke="var(--sun)" stroke-width="1.5"/><path d="M116 66 V 80 M144 66 V 80 M116 80 A 14 5 0 0 0 144 80" fill="none" stroke="var(--sun)" stroke-width="1.5"/><path d="M168 82 L 180 58 L 192 82 Z" fill="none" stroke="var(--leaf)" stroke-width="2"/><path d="M226 62 l -6 10 h 10 l -6 10" fill="none" stroke="var(--inf)" stroke-width="2.5"/>${t(130, 26, "¿qué vibra?", { s: 13 })}`),
      video: { id: "0cXfbb39VQ4", titulo: "Aprende los instrumentos musicales: viento, cuerda y percusión", canal: "Smile and Learn - Español", vistas: 7482148 },
    },
    {
      html: `<h3>Instrumentos de cuerda</h3><p>Según cómo se hace vibrar la cuerda:</p><ul><li><b>Frotada</b> (con arco): violín, viola, violonchelo y contrabajo, de más agudo a más grave. Forman la base de la orquesta. También se pueden pulsar con los dedos (<i>pizzicato</i>).</li><li><b>Pulsada</b> (con los dedos o una púa): guitarra, arpa, laúd, bandurria, ukelele, clave.</li><li><b>Percutida</b> (golpeada): piano, salterio.</li></ul><p>Cuanto <b>más larga y gruesa</b> es la cuerda, más <b>grave</b> suena; por eso el contrabajo es tan grande. Para cambiar de nota se acorta la cuerda presionándola contra el mástil.</p>`,
    },
    {
      html: `<h3>Instrumentos de viento</h3><p>Suenan al hacer vibrar el aire de su interior. En la orquesta se dividen en:</p><ul><li><b>Viento madera</b>: flauta travesera y flautín (el aire choca con un bisel), clarinete y saxofón (una <b>lengüeta</b> simple), oboe, corno inglés y fagot (lengüeta <b>doble</b>). Se llaman «de madera» por su origen, aunque la flauta hoy sea de metal.</li><li><b>Viento metal</b>: trompeta, trompa, trombón y tuba. El sonido se produce con la <b>vibración de los labios</b> en una boquilla. Cambian de nota con pistones, cilindros o una vara.</li></ul><p>También son aerófonos el órgano, el acordeón, la armónica y la gaita.</p>`,
    },
    {
      html: `<h3>Instrumentos de percusión</h3><p>Suenan al ser golpeados, sacudidos o raspados. Se dividen en:</p><ul><li><b>De altura determinada</b>: producen notas concretas y pueden tocar melodías: <b>timbales</b>, xilófono, marimba, vibráfono, campanas tubulares, celesta.</li><li><b>De altura indeterminada</b>: solo producen ritmos: caja, bombo, platillos, triángulo, pandereta, castañuelas, maracas, güiro.</li></ul><p>La percusión es la familia más antigua y variada: casi cualquier objeto puede convertirse en un instrumento. Grupos como Stomp o los «cajoneros» flamencos lo demuestran.</p>`,
    },
    {
      html: `<h3>Instrumentos eléctricos y electrónicos</h3><ul><li><b>Eléctricos</b>: producen el sonido de forma tradicional, pero una <b>pastilla</b> lo convierte en señal eléctrica que se amplifica: guitarra eléctrica, bajo eléctrico, piano eléctrico.</li><li><b>Electrónicos</b>: el sonido se <b>genera</b> mediante circuitos o programas: sintetizador, theremín (se toca sin tocarlo, moviendo las manos en el aire), caja de ritmos, sampler.</li></ul><p>Hoy un ordenador o una tableta puede imitar casi cualquier instrumento. Los electrófonos son fundamentales en el pop, el rock, la electrónica, el hip hop y las bandas sonoras.</p>`,
    },
    {
      html: `<h3>La orquesta sinfónica</h3><p>La <b>orquesta sinfónica</b> es la gran agrupación de la música culta, con 60 a 100 músicos dirigidos por un <b>director</b>. Su disposición habitual coloca delante los instrumentos de sonido más suave y detrás los más potentes:</p><ul><li><b>Delante</b>: la cuerda (violines primeros y segundos, violas, violonchelos y, detrás, contrabajos).</li><li><b>En el centro</b>: el viento madera.</li><li><b>Detrás</b>: el viento metal.</li><li><b>Al fondo</b>: la percusión.</li></ul><p>El primer violín, el <b>concertino</b>, afina la orquesta y hace de enlace con el director.</p>`,
      svg: svg("Disposición de la orquesta en semicírculos: cuerda delante, madera en el centro, metal detrás y percusión al fondo, con el director", `${[[118, "var(--inf)", "percusión"], [96, "var(--sun)", "metal"], [72, "var(--leaf)", "madera"], [48, "var(--red)", "cuerda"]].map(([r, c]) => `<path d="M${130 - r} 150 A ${r} ${r} 0 0 1 ${130 + r} 150" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="2"/>`).join("")}${[[118, "var(--inf)", "percusión"], [96, "var(--sun)", "metal"], [72, "var(--leaf)", "madera"], [48, "var(--red)", "cuerda"]].map(([r, c, n]) => t(130, 160 - r + 16, n, { c, s: 11 })).join("")}<circle cx="130" cy="162" r="6" fill="var(--ink)"/>${t(130, 178, "director", { s: 10 })}`, 180),
      video: { id: "_DzYNdlb4pw", titulo: "Los instrumentos de la orquesta sinfónica. Ejemplos de sonido", canal: "Trasgo educacion", vistas: 359169 },
    },
    {
      html: `<h3>Otras agrupaciones</h3>${tabla(["Agrupación", "Componentes", "Música típica"], [["Orquesta de cámara", "unos 15-30 músicos, sobre todo cuerda", "Barroco y Clasicismo"], ["Cuarteto de cuerda", "2 violines, viola y violonchelo", "música de cámara"], ["Banda", "viento y percusión", "desfiles, fiestas, procesiones"], ["Big band", "saxos, trompetas, trombones y sección rítmica", "jazz, swing"], ["Grupo de rock o pop", "voz, guitarras, bajo, batería, teclados", "música popular urbana"], ["Rondalla / tuna", "bandurrias, laúdes, guitarras", "música tradicional española"], ["Coro", "voces: soprano, contralto, tenor y bajo", "música vocal"]])}<p>Según el número de intérpretes se habla de <b>solo</b> (1), <b>dúo</b> (2), <b>trío</b> (3), <b>cuarteto</b> (4), <b>quinteto</b> (5)…</p>`,
    },
    {
      html: `<h3>Escuchar y reconocer instrumentos</h3><p>Para reconocer un instrumento al escucharlo, fíjate en:</p><ol><li>Su <b>timbre</b>: brillante (trompeta), cálido (violonchelo), metálico (platillos), nasal (oboe).</li><li>Su <b>registro</b>: agudo (flautín, violín) o grave (tuba, contrabajo, fagot).</li><li>Cómo empieza y acaba el sonido: ¿se mantiene (arco, viento) o se apaga solo (piano, guitarra, percusión)?</li></ol><p>Obras ideales para practicar: <b>«Pedro y el lobo»</b> de Prokófiev, donde cada personaje es un instrumento, y la <b>«Guía de orquesta para jóvenes»</b> de Britten, que presenta las familias una a una.</p>`,
      video: { id: "RHAklmqlvRI", titulo: "Jaime Altozano y la orquesta", canal: "Academia Play", vistas: 938324 },
    },
  ],
  figura: {
    titulo: "Instrumentos y agrupaciones",
    svg: filas("Resumen: cordófonos, aerófonos, membranófonos, idiófonos y electrófonos; orquesta sinfónica y otras agrupaciones", [["Cordófonos", "cuerda frotada, pulsada o percutida", "var(--red)"], ["Aerófonos", "viento madera y viento metal", "var(--pen)"], ["Membranófonos", "parche: timbal, tambor, bombo", "var(--sun)"], ["Idiófonos", "el cuerpo vibra: xilófono, castañuelas", "var(--leaf)"], ["Electrófonos", "eléctricos y electrónicos", "var(--inf)"], ["Agrupaciones", "orquesta · banda · cuarteto · grupo", "var(--ink)"]], 220),
  },
  video: { id: "IeqnskE-dpg", titulo: "Los instrumentos y sus familias", canal: "Pipalupa", vistas: 1499981, megusta: 0, busqueda: "familias de instrumentos de la orquesta" },
  quiz: mezcla([
    { q: "En un cordófono vibra…", o: ["una cuerda", "una membrana", "el aire"], a: 0, e: "Violín, guitarra." },
    { q: "El timbal es un…", o: ["membranófono", "idiófono", "aerófono"], a: 0, e: "Tiene parche." },
    { q: "Las castañuelas son…", o: ["idiófonos", "membranófonos", "cordófonos"], a: 0, e: "Vibra el propio cuerpo." },
    { q: "El clarinete es viento…", o: ["madera", "metal", "electrónico"], a: 0, e: "Lengüeta simple." },
    { q: "En el viento metal el sonido nace…", o: ["de la vibración de los labios", "de una lengüeta", "de un bisel"], a: 0, e: "En la boquilla." },
    { q: "El instrumento más grave de la cuerda frotada es el…", o: ["contrabajo", "violín", "violonchelo"], a: 0, e: "Cuerdas más largas." },
    { q: "El sintetizador es un instrumento…", o: ["electrónico", "de viento", "de cuerda pulsada"], a: 0, e: "Genera el sonido." },
    { q: "En la orquesta, la percusión se sitúa…", o: ["al fondo", "delante", "junto al director"], a: 0, e: "Suena muy fuerte." },
    { q: "Un cuarteto de cuerda tiene…", o: ["2 violines, viola y violonchelo", "4 violines", "violín, piano, flauta y voz"], a: 0, e: "Formación clásica." },
    { q: "Una banda está formada por…", o: ["viento y percusión", "solo cuerda", "solo voces"], a: 0, e: "Sin cuerda frotada." },
  ]),
  examen: mezcla([
    { q: "El oboe y el fagot tienen lengüeta…", o: ["doble", "simple", "de metal"], a: 0, e: "Dos cañas." },
    { q: "El xilófono es un instrumento de percusión de altura…", o: ["determinada", "indeterminada", "variable eléctrica"], a: 0, e: "Da notas." },
    { q: "El primer violín de la orquesta se llama…", o: ["concertino", "director", "solista"], a: 0, e: "Afina y coordina." },
  ]),
  feynman: ["En qué se basa la clasificación de Hornbostel y Sachs", "Diferencia entre viento madera y viento metal", "Percusión de altura determinada e indeterminada", "Diferencia entre instrumento eléctrico y electrónico", "Cómo se coloca la orquesta y por qué"],
  mapa: mapa("INSTRUMENTOS", "var(--eso)", [
    ["Cuerda", "frotada · pulsada · percutida", "var(--red)"],
    ["Viento", "madera · metal", "var(--pen)"],
    ["Percusión", "membranas · idiófonos", "var(--sun)"],
    ["Agrupaciones", "orquesta · banda · grupo", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Cordófono", "Instrumento en el que vibra una cuerda."],
    ["Aerófono", "Instrumento en el que vibra una columna de aire."],
    ["Membranófono", "Instrumento con parche o membrana."],
    ["Idiófono", "Vibra el propio cuerpo del instrumento."],
    ["Electrófono", "Usa la electricidad para producir o amplificar el sonido."],
    ["Viento madera", "Flauta, oboe, clarinete, fagot, saxofón."],
    ["Viento metal", "Trompeta, trompa, trombón, tuba."],
    ["Concertino", "Primer violín de la orquesta."],
  ],
  familias: ["Escuchad juntos «Pedro y el lobo» de Prokófiev y adivinad qué instrumento es cada personaje.", "Fabricad un instrumento con materiales de casa y clasificadlo.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Clasificación de los instrumentos; familias de la orquesta; instrumentos eléctricos y electrónicos; agrupaciones instrumentales y vocales (RD 217/2022, Música, escucha y percepción; contextos y culturas).",
    ideas: ["Taller de construcción de instrumentos con material reciclado.", "Audición de la «Guía de orquesta para jóvenes» de Britten con fichas.", "Visita virtual o real a un ensayo de orquesta o banda."],
  },
  fuentes: [RD, { t: "Orquesta y Coro Nacionales de España: recursos educativos", url: "https://ocne.mcu.es/" }],
  revisado: REV,
  ejemplosTitulo: "Clasificaciones resueltas",
  ejemplos: [
    { enunciado: "Clasifica la gaita gallega según Hornbostel y Sachs y explica por qué.", pasos: ["El sonido se produce al vibrar el aire en el puntero y los roncones.", "Tiene lengüetas, como el oboe.", "El aire viene de un fuelle (el odre)."], resultado: "Aerófono." },
    { enunciado: "¿Qué tienen en común el violonchelo y la guitarra? ¿En qué se diferencian?", pasos: ["Ambos son cordófonos: vibra una cuerda.", "El violonchelo se toca con arco (cuerda frotada).", "La guitarra se pulsa con los dedos o con púa."], resultado: "Cordófonos; frotada frente a pulsada." },
    { enunciado: "Ordena de más agudo a más grave: tuba, trompeta, trombón, trompa.", pasos: ["La trompeta es la más aguda del metal.", "Le siguen la trompa y el trombón.", "La tuba es la más grave."], resultado: "Trompeta, trompa, trombón, tuba." },
  ],
  errores: [
    "Pensar que el saxofón es de viento metal porque está hecho de metal (es de madera por su lengüeta).",
    "Clasificar el piano solo como percusión.",
    "Confundir instrumento eléctrico (amplifica) con electrónico (genera el sonido).",
    "Creer que todos los instrumentos de percusión solo hacen ritmos.",
    "Colocar el viento metal delante de la cuerda en la orquesta.",
  ],
  ejercicios: [
    { q: "Clasifica: arpa, trompeta, pandero, triángulo, theremín.", sol: "Cordófono, aerófono, membranófono, idiófono, electrófono." },
    { q: "Ordena de agudo a grave la cuerda frotada.", sol: "Violín, viola, violonchelo, contrabajo." },
    { q: "Nombra dos instrumentos de cuerda pulsada y uno de percutida.", sol: "Guitarra, arpa; piano." },
    { q: "¿Qué diferencia hay entre el clarinete y el oboe?", sol: "El clarinete tiene lengüeta simple y el oboe, doble." },
    { q: "Nombra tres instrumentos de percusión de altura indeterminada.", sol: "Caja, bombo, platillos (o triángulo, maracas…)." },
    { q: "¿Por qué la percusión se coloca al fondo de la orquesta?", sol: "Porque suena con mucha intensidad y taparía a la cuerda." },
    { q: "¿Qué agrupación toca normalmente en las procesiones y fiestas de los pueblos?", sol: "La banda de música." },
    { q: "Explica qué hace una pastilla en una guitarra eléctrica.", sol: "Convierte la vibración de las cuerdas en una señal eléctrica que se amplifica." },
    { q: "¿Cuántos músicos tiene un quinteto? ¿Y un trío?", sol: "Cinco y tres." },
    { q: "Escucha «Pedro y el lobo» e indica el instrumento del pájaro, el gato y el lobo.", sol: "Flauta, clarinete y trompas." },
  ],
};
