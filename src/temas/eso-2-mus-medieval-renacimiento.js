// Música 2º ESO: la música en la Edad Media y el Renacimiento. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "La música en la Edad Media y el Renacimiento",
  minutos: 55,
  objetivos: ["Situar la Edad Media y el Renacimiento en el tiempo y conocer su contexto", "Describir el canto gregoriano y el nacimiento de la notación", "Conocer la música profana de trovadores y juglares y las Cantigas de Santa María", "Explicar el desarrollo de la polifonía y los principales géneros y autores del Renacimiento"],
  claves: ["canto gregoriano", "neuma", "trovador", "Cantigas", "polifonía", "madrigal"],
  pregunta: {
    texto: "¿Cómo se aprendían las canciones antes de que existieran las partituras?",
    respuesta: "De memoria, escuchando y repitiendo: la música se transmitía por <b>tradición oral</b>. En la Edad Media los monjes inventaron unos signos, los <mark>neumas</mark>, para recordar cómo subía y bajaba la melodía. Hacia el año 1000, Guido d'Arezzo propuso usar líneas y dar nombre a las notas: así nació el pentagrama que usamos hoy.",
  },
  bloques: [
    {
      html: `<h3>La Edad Media: contexto</h3><p>La <b>Edad Media</b> va del <b>siglo V</b> (caída del Imperio romano de Occidente, 476) al <b>siglo XV</b>. La sociedad era <b>feudal</b> y la <b>Iglesia</b> tenía un enorme poder cultural: los monasterios guardaban los libros y la mayoría de la música conservada es religiosa.</p><p>La música se dividía en:</p><ul><li><b>Religiosa</b>: en latín, para la liturgia, cantada en iglesias y monasterios.</li><li><b>Profana</b>: en lenguas romances (castellano, gallego-portugués, provenzal…), con temas de amor, guerra o fiestas, cantada en castillos, plazas y ferias.</li></ul>`,
      svg: svg("Línea del tiempo: Edad Media del 476 al 1453 y Renacimiento de 1450 a 1600", `<path d="M16 120 H 244" stroke="var(--muted)" stroke-width="3"/><rect x="20" y="80" width="160" height="32" rx="6" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><rect x="180" y="80" width="62" height="32" rx="6" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>
        ${t(100, 101, "Edad Media", { c: "var(--pen)", s: 12 })}${t(211, 101, "Renac.", { c: "var(--leaf)", s: 11 })}${t(20, 138, "476", { s: 11, a: "start" })}${t(180, 138, "1450", { s: 11 })}${t(242, 138, "1600", { s: 11, a: "end" })}
        ${t(60, 62, "gregoriano", { c: "var(--pen)", s: 10 })}${t(130, 50, "trovadores", { c: "var(--pen)", s: 10 })}${t(150, 66, "Ars Nova", { c: "var(--pen)", s: 10 })}${t(211, 62, "polifonía", { c: "var(--leaf)", s: 10 })}${t(130, 164, "más de mil años de música", { s: 12 })}`),
      video: { id: "f2385C9a2nA", titulo: "La música medieval: la música de la Edad Media", canal: "Música con Historia", vistas: 80476 },
    },
    {
      html: `<h3>El canto gregoriano</h3><p>Es el canto oficial de la liturgia de la Iglesia católica. Recibe su nombre del papa <b>Gregorio Magno</b> (siglo VI), al que se atribuye su organización. Características:</p><ul><li><b>Monodia</b>: una sola línea melódica, cantada al unísono.</li><li><b>A cappella</b>: sin instrumentos.</li><li>Voces <b>masculinas</b> (monjes y clérigos).</li><li>Texto en <b>latín</b>, sacado de la Biblia o de la liturgia.</li><li><b>Ritmo libre</b>: sigue el ritmo de las palabras, sin compás.</li><li>Melodía con <b>poco ámbito</b>, por grados conjuntos, serena.</li></ul><p>Según la relación entre texto y notas puede ser <b>silábico</b> (una nota por sílaba), <b>neumático</b> (2-4 notas por sílaba) o <b>melismático</b> (muchas notas sobre una sílaba, como en el «Aleluya»).</p>`,
      video: { id: "8ftsFsScFbM", titulo: "Canto gregoriano: Kyrie, con partitura", canal: "Musicnetmaterials", vistas: 405052 },
    },
    {
      html: `<h3>El nacimiento de la notación</h3><p>Al principio se usaban <b>neumas</b>: pequeños signos sobre el texto que indicaban si la melodía subía o bajaba, pero no las notas exactas.</p><p>Hacia el año 1000, el monje <b>Guido d'Arezzo</b>:</p><ul><li>Propuso usar <b>líneas</b> para fijar la altura exacta (el <b>tetragrama</b>, de cuatro líneas, que aún se usa para el gregoriano).</li><li>Dio <b>nombre a las notas</b> con las primeras sílabas de un himno a san Juan: <i>UT queant laxis, REsonare fibris, MIra gestorum, FAmuli tuorum, SOLve polluti, LAbii reatum, Sancte Iohannes</i>. Más tarde el «ut» se cambió por «do» y se añadió el «si».</li></ul><p>Gracias a la notación, la música se pudo conservar, difundir y componer obras cada vez más complejas.</p>`,
      svg: svg("Tetragrama de cuatro líneas con neumas cuadrados y las sílabas ut, re, mi, fa, sol, la", `${[0, 1, 2, 3].map((i) => `<path d="M20 ${50 + i * 14} H 240" stroke="var(--red)" stroke-width="1.5"/>`).join("")}${[[40, 92], [76, 85], [112, 78], [148, 71], [184, 64], [220, 57]].map(([x, y]) => `<rect x="${x - 6}" y="${y - 6}" width="12" height="12" fill="var(--ink)"/>`).join("")}${["UT", "RE", "MI", "FA", "SOL", "LA"].map((s, i) => t(40 + i * 36, 134, s, { c: "var(--pen)", s: 12 })).join("")}${t(130, 30, "tetragrama y neumas cuadrados", { c: "var(--muted)", s: 11 })}${t(130, 160, "himno a san Juan · Guido d'Arezzo", { s: 11 })}`),
    },
    {
      html: `<h3>La música profana medieval</h3><ul><li>Los <b>trovadores</b> eran poetas y músicos, a menudo nobles, que componían canciones de <b>amor cortés</b> en lengua provenzal (sur de Francia, siglos XI-XIII). En el norte de Francia se llamaban <i>troveros</i>, y en Alemania, <i>Minnesänger</i>.</li><li>Los <b>juglares</b> eran artistas ambulantes de origen humilde: cantaban, tocaban, hacían malabares y recitaban poemas (como el <i>Cantar de mio Cid</i>) por plazas y castillos.</li></ul><p>Instrumentos medievales: <b>fídula</b> o viola de arco, <b>laúd</b>, <b>arpa</b>, <b>salterio</b>, <b>zanfoña</b>, <b>chirimía</b>, <b>flautas</b>, <b>órgano portativo</b>, <b>tambores</b> y <b>panderos</b>.</p>`,
      video: { id: "1dQeY7PaWgg", titulo: "Trovadores y juglares, los músicos de la Edad Media", canal: "Owland", vistas: 84699 },
    },
    {
      html: `<h3>Las Cantigas de Santa María</h3><p>Son una colección de más de <b>400 canciones</b> monódicas reunidas en la corte del rey <b>Alfonso X el Sabio</b> (siglo XIII). Tienen tres rasgos especiales:</p><ul><li>Están escritas en <b>gallego-portugués</b>, la lengua lírica de la época.</li><li>Narran <b>milagros</b> de la Virgen o la alaban, pero no son música litúrgica: se cantaban fuera de la misa.</li><li>Sus manuscritos tienen preciosas <b>miniaturas</b> en las que aparecen músicos cristianos, judíos y musulmanes con sus instrumentos, una valiosísima fuente para conocer los instrumentos medievales.</li></ul><p>Muchas tienen forma de <b>estribillo y estrofas</b>, como el virelai. Hoy las interpretan grupos de música antigua de todo el mundo.</p>`,
    },
    {
      html: `<h3>Los inicios de la polifonía</h3><p>A partir del siglo IX los músicos empezaron a añadir una segunda voz al canto gregoriano. Así nació la <b>polifonía</b>:</p><ul><li><b>Organum</b>: una voz canta la melodía gregoriana y otra la acompaña en paralelo (a distancia de 4.ª u 5.ª) o con notas largas mientras la otra hace adornos.</li><li><b>Escuela de Notre Dame</b> (París, siglos XII-XIII): <b>Leonín</b> y <b>Perotín</b> compusieron organa a 2, 3 y 4 voces y crearon una notación con ritmo.</li><li><b>Ars Nova</b> (siglo XIV): la música se vuelve más compleja y expresiva. Guillaume de <b>Machaut</b> compuso la primera misa polifónica completa de un solo autor.</li></ul>`,
    },
    {
      html: `<h3>El Renacimiento</h3><p>El <b>Renacimiento</b> (siglos XV-XVI) recupera la cultura grecolatina y pone al <b>ser humano</b> en el centro (humanismo). La invención de la <b>imprenta</b> permitió imprimir partituras (Ottaviano Petrucci, 1501) y difundir la música por toda Europa.</p><p>Características de la música renacentista:</p><ul><li><b>Polifonía imitativa</b> a 4 o más voces, todas igual de importantes.</li><li>Equilibrio, claridad y búsqueda de la belleza.</li><li>Importancia del <b>texto</b>: la música expresa el significado de las palabras (en el madrigal, una palabra como «suspiro» se acompaña de un silencio).</li><li>Crece la <b>música instrumental</b> independiente.</li></ul>`,
      video: { id: "Ow4SuRQl0xQ", titulo: "Historia de la Música: el Renacimiento", canal: "Pablo's Flipped Music Classroom", vistas: 273937 },
    },
    {
      html: `<h3>Géneros y autores del Renacimiento</h3>${tabla(["Tipo", "Géneros", "Autores"], [["Religiosa", "misa, motete (en latín)", "Josquin des Prez, Palestrina, Tomás Luis de Victoria, Cristóbal de Morales, Francisco Guerrero"], ["Profana vocal", "madrigal (Italia), chanson (Francia), villancico y romance (España)", "Juan del Encina, Mateo Flecha («Ensaladas»)"], ["Instrumental", "danzas, variaciones (diferencias), tientos", "Antonio de Cabezón (órgano), Luis de Milán (vihuela)"]])}<p>España vivió una edad de oro musical: <b>Tomás Luis de Victoria</b> es uno de los grandes polifonistas de la historia, y el <b>Cancionero de Palacio</b> reúne cientos de villancicos y romances de la corte de los Reyes Católicos. La <b>vihuela</b>, parecida a la guitarra, fue el instrumento estrella de la España del siglo XVI.</p>`,
    },
  ],
  figura: {
    titulo: "Edad Media y Renacimiento",
    svg: filas("Resumen: canto gregoriano monódico en latín; notación de Guido d'Arezzo; trovadores y juglares; Cantigas de Alfonso X; organum y Notre Dame; Renacimiento polifónico con Victoria", [["Gregoriano", "monodia · latín · a cappella · ritmo libre", "var(--pen)"], ["Notación", "neumas → Guido d'Arezzo", "var(--inf)"], ["Profana", "trovadores y juglares", "var(--red)"], ["Cantigas", "Alfonso X · gallego-portugués", "var(--sun)"], ["Polifonía medieval", "organum · Notre Dame · Ars Nova", "var(--ink)"], ["Renacimiento", "polifonía imitativa · Victoria", "var(--leaf)"]], 230),
  },
  video: { id: "zNkV_y-rywc", titulo: "Música del Renacimiento: resumen musical", canal: "La Salita de Música e Historia", vistas: 20584, megusta: 0, busqueda: "música en la edad media canto gregoriano" },
  quiz: mezcla([
    { q: "El canto gregoriano es…", o: ["monódico", "polifónico", "instrumental"], a: 0, e: "Una sola melodía." },
    { q: "El gregoriano se canta en…", o: ["latín", "castellano", "provenzal"], a: 0, e: "Lengua de la liturgia." },
    { q: "Muchas notas sobre una misma sílaba es un canto…", o: ["melismático", "silábico", "neumático"], a: 0, e: "Como el Aleluya." },
    { q: "Dio nombre a las notas…", o: ["Guido d'Arezzo", "Alfonso X", "Palestrina"], a: 0, e: "Himno a san Juan." },
    { q: "Los poetas-músicos nobles del amor cortés eran los…", o: ["trovadores", "juglares", "monjes"], a: 0, e: "Sur de Francia." },
    { q: "Las Cantigas de Santa María están en…", o: ["gallego-portugués", "latín", "árabe"], a: 0, e: "Lengua lírica." },
    { q: "Leonín y Perotín pertenecen a la escuela de…", o: ["Notre Dame", "Montserrat", "Viena"], a: 0, e: "París." },
    { q: "La textura típica del Renacimiento es la…", o: ["polifonía imitativa", "monodia", "melodía acompañada"], a: 0, e: "Voces que se imitan." },
    { q: "Un gran polifonista español es…", o: ["Tomás Luis de Victoria", "Machaut", "Mozart"], a: 0, e: "Siglo XVI." },
    { q: "La vihuela era un instrumento de…", o: ["cuerda pulsada", "viento", "percusión"], a: 0, e: "Parecida a la guitarra." },
  ]),
  examen: mezcla([
    { q: "El madrigal es un género…", o: ["profano vocal italiano", "religioso en latín", "instrumental para órgano"], a: 0, e: "Expresa el texto." },
    { q: "La imprenta musical comenzó con…", o: ["Petrucci (1501)", "Guido d'Arezzo", "Alfonso X"], a: 0, e: "Venecia." },
    { q: "Las miniaturas de las Cantigas son importantes porque…", o: ["muestran instrumentos de la época", "contienen la letra en latín", "son las primeras partituras impresas"], a: 0, e: "Fuente iconográfica." },
  ]),
  feynman: ["Diferencia entre música religiosa y profana en la Edad Media", "Las características del canto gregoriano", "Qué aportó Guido d'Arezzo", "Qué son las Cantigas de Santa María", "Cómo es la polifonía del Renacimiento"],
  mapa: mapa("MEDIEVO Y RENACIMIENTO", "var(--eso)", [
    ["Gregoriano", "monodia · latín", "var(--pen)"],
    ["Profana", "trovadores · Cantigas", "var(--red)"],
    ["Polifonía medieval", "organum · Ars Nova", "var(--sun)"],
    ["Renacimiento", "imitación · Victoria", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Canto gregoriano", "Monodia religiosa en latín, a cappella y de ritmo libre."],
    ["Neumas", "Primeros signos de notación musical."],
    ["Guido d'Arezzo", "Monje que fijó las líneas y el nombre de las notas."],
    ["Trovador", "Poeta-músico noble del amor cortés."],
    ["Juglar", "Artista ambulante que cantaba y entretenía."],
    ["Cantigas de Santa María", "Más de 400 canciones de la corte de Alfonso X."],
    ["Organum", "Primera forma de polifonía medieval."],
    ["Tomás Luis de Victoria", "Gran compositor español de polifonía religiosa."],
  ],
  familias: ["Escuchad juntos una cantiga de Alfonso X y un fragmento de canto gregoriano y comparadlos.", "Buscad en un museo o en internet las miniaturas de las Cantigas y nombrad los instrumentos.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "La música en la Edad Media y el Renacimiento: canto gregoriano, notación, música profana, Cantigas de Santa María, polifonía medieval y renacentista, géneros y autores, con especial atención al patrimonio español (RD 217/2022, Música, contextos y culturas).",
    ideas: ["Cantar el himno «Ut queant laxis» y descubrir el nombre de las notas.", "Interpretar una cantiga con flautas, panderos y bordón.", "Mapa de Europa con los centros musicales de cada época."],
  },
  fuentes: [RD, { t: "Biblioteca Digital Hispánica: Cantigas de Santa María", url: "https://bdh.bne.es/" }],
  revisado: REV,
  ejemplosTitulo: "Audiciones analizadas",
  ejemplos: [
    { enunciado: "Escuchas una melodía cantada por voces masculinas al unísono, sin instrumentos, en latín y sin compás. ¿Qué es y de qué época?", pasos: ["Monodia, a cappella, latín, ritmo libre.", "Son los rasgos del canto gregoriano.", "Música religiosa medieval."], resultado: "Canto gregoriano, Edad Media." },
    { enunciado: "Escuchas una canción con estribillo, en gallego-portugués, con flauta, fídula y pandero, que cuenta un milagro.", pasos: ["Lengua romance y temática mariana.", "Instrumentos medievales.", "Forma de estribillo y estrofas."], resultado: "Una cantiga de Alfonso X (siglo XIII)." },
    { enunciado: "Escuchas un coro a cuatro voces que se imitan, en latín, sin instrumentos, de sonido sereno y equilibrado.", pasos: ["Polifonía imitativa a 4 voces.", "Texto religioso en latín: misa o motete.", "Equilibrio y claridad: Renacimiento."], resultado: "Polifonía religiosa renacentista (por ejemplo, Victoria)." },
  ],
  errores: [
    "Pensar que el canto gregoriano tiene acompañamiento instrumental.",
    "Confundir trovador (poeta noble) con juglar (artista ambulante).",
    "Creer que las Cantigas son música litúrgica en latín.",
    "Pensar que la polifonía nace en el Renacimiento (empieza en la Edad Media).",
    "Situar a Victoria en la Edad Media.",
  ],
  ejercicios: [
    { q: "Escribe cinco características del canto gregoriano.", sol: "Monodia, a cappella, voces masculinas, latín, ritmo libre (y melodía por grados conjuntos)." },
    { q: "Explica la diferencia entre canto silábico y melismático.", sol: "Silábico: una nota por sílaba; melismático: muchas notas en una sílaba." },
    { q: "¿De dónde vienen los nombres de las notas?", sol: "De las primeras sílabas de los versos del himno «Ut queant laxis» a san Juan." },
    { q: "Nombra cuatro instrumentos medievales.", sol: "Fídula, laúd, zanfoña, salterio (o chirimía, arpa, órgano portativo…)." },
    { q: "¿Quién reunió las Cantigas de Santa María y en qué siglo?", sol: "Alfonso X el Sabio, siglo XIII." },
    { q: "¿Qué es un organum?", sol: "Una forma primitiva de polifonía que añade una voz al canto gregoriano." },
    { q: "¿Qué cambió la imprenta en la música?", sol: "Permitió imprimir partituras y difundirlas por Europa." },
    { q: "Nombra un género religioso y uno profano del Renacimiento.", sol: "Misa o motete; madrigal, chanson o villancico." },
    { q: "¿Qué instrumento tocaban Luis de Milán y qué instrumento tocaba Antonio de Cabezón?", sol: "Vihuela y órgano." },
    { q: "Compara la textura del gregoriano con la de una misa de Victoria.", sol: "El gregoriano es monodia; la misa de Victoria es polifonía imitativa." },
  ],
};
