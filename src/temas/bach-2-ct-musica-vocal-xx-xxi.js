// Coro y Técnica Vocal II, 2º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ct");

module.exports = B.tema({
  titulo: "La música vocal de los siglos XX y XXI",
  minutos: 60,
  objetivos: [
    "Conocer las principales corrientes de la música vocal y coral desde 1900",
    "Identificar técnicas vocales extendidas y grafías nuevas",
    "Reconocer obras y autores clave, incluidas compositoras y autores españoles",
    "Escuchar y comentar una obra coral contemporánea",
  ],
  claves: ["técnicas extendidas", "Sprechgesang", "micropolifonía", "tintinnabuli", "minimalismo", "cluster", "grafía no convencional", "nuevo coralismo"],
  pregunta: {
    texto: "¿Qué tienen en común la banda sonora de «2001: Una odisea del espacio» y muchos coros escolares de hoy?",
    respuesta: "Que cantan <mark>música coral contemporánea</mark>. Kubrick usó <i>Lux aeterna</i> de György Ligeti, una nube de voces que se mueven muy despacio. Y muchos coros escolares cantan hoy obras de autores vivos como Eric Whitacre o Arvo Pärt, con <mark>acordes de notas muy juntas</mark> que suenan luminosos.",
  },
  lectura: {
    titulo: "Un coro de 120 países",
    html: `<p>En 2010, el compositor Eric Whitacre colgó en internet un vídeo en el que dirigía su obra <i>Sleep</i> e invitó a cantantes de todo el mundo a grabarse en casa. Llegaron más de dos mil voces de decenas de países, que se montaron en un único coro virtual. El vídeo se hizo viral.</p>
    <p>Fue una muestra de que la música coral está más viva que nunca. Desde 1900 los compositores han explorado sonidos nuevos: voces que hablan, susurran o gritan, nubes de notas, acordes que vibran durante minutos y obras con partituras dibujadas. En este tema verás las principales corrientes y aprenderás a escucharlas.</p>`,
  },
  secciones: [3, 2, 2],
  bloques: [
    {
      h: "Un siglo de cambios",
      html: `<p>A principios del siglo XX la música rompe con la tonalidad tradicional y la voz busca nuevos caminos. En la música coral, autores como <b>Igor Stravinsky</b> (<i>Sinfonía de los Salmos</i>, 1930), <b>Carl Orff</b> (<i>Carmina Burana</i>, 1937), <b>Francis Poulenc</b> y <b>Benjamin Britten</b> (<i>Ceremony of Carols</i>, 1942; <i>War Requiem</i>, 1962) combinan tradición y lenguaje moderno.</p>
      <p>A mitad de siglo llega la <b>vanguardia</b>, con obras experimentales; y desde los años setenta, una vuelta a la consonancia, la espiritualidad y la sencillez con el <b>minimalismo</b>. En el siglo XXI conviven todos estos caminos, y un mismo coro puede cantar en un concierto obras de estilos muy distintos.</p>`,
      svg: B.cronologia("La música coral desde 1900", [["1912", "Pierrot lunaire"], ["1937", "Carmina Burana"], ["1966", "Lux aeterna"], ["1976", "Pärt: tintinnabuli"], ["2010", "Coro virtual"]]),
    },
    {
      h: "Las técnicas vocales extendidas",
      html: `<p>Las <b>técnicas extendidas</b> amplían lo que se considera «cantar»: hablar con ritmo, susurrar, gritar, reír, chasquear la lengua, cantar con la boca cerrada, hacer <i>glissandi</i> o respirar de forma audible. Arnold Schoenberg usó en <i>Pierrot lunaire</i> (1912) el <b><i>Sprechgesang</i></b>, un «canto hablado» a medio camino entre la voz hablada y la cantada.</p>
      <p>Luciano Berio escribió <i>Sequenza III</i> (1966) para la cantante <b>Cathy Berberian</b>, que podía cambiar de un sonido a otro en segundos. Estas técnicas necesitan una <b>grafía no convencional</b>: símbolos, líneas y dibujos que el compositor explica al inicio de la partitura.</p>`,
      svg: B.cajas("Técnicas vocales extendidas", [["Sprechgesang", "canto|hablado"], ["Susurro y aire", "sonido|sin nota"], ["Glissando", "deslizar|la voz"], ["Sonidos de boca", "chasquidos|y percusión"]]),
    },
    {
      h: "Ligeti y las nubes de sonido",
      html: `<p>El húngaro <b>György Ligeti</b> creó la <b>micropolifonía</b>: muchas voces cantan líneas muy parecidas, con pequeñas diferencias de ritmo, y entran y salen tan despacio que el oyente no distingue melodías sino una <b>nube</b> o textura que cambia lentamente de color. Su obra <i>Lux aeterna</i> (1966), para 16 voces, es el ejemplo más famoso.</p>
      <p>Otro autor de esta época, el polaco <b>Krzysztof Penderecki</b>, usó también <i>clusters</i> y sonidos extremos en obras corales religiosas. Para cantar esta música hace falta una afinación muy precisa y una gran independencia de cada cantante.</p>`,
      svg: B.capas("Micropolifonía: una nube de voces", [["Voz 1", "entra y se mueve muy despacio"], ["Voz 2", "la imita con otro ritmo"], ["Voz 3", "y otra más, desplazada"], ["Resultado", "textura que cambia de color"]]),
      video: { id: "vcx-4olgf10", titulo: "Ligeti: «Lux aeterna» (con partitura)", canal: "Kjelden Breidenbach", vistas: 179723 },
    },
    {
      h: "Arvo Pärt y el minimalismo espiritual",
      html: `<p>El estonio <b>Arvo Pärt</b> inventó a mediados de los años setenta el estilo <b><i>tintinnabuli</i></b> («campanitas»): una voz canta una melodía por grados conjuntos y otra la acompaña solo con las notas del acorde de tónica, como si sonaran campanas. El resultado es sencillo, sereno y muy espiritual.</p>
      <p>Junto a autores como Henryk Górecki o John Tavener, Pärt forma parte del llamado <b>minimalismo sacro</b>: pocas notas, repetición, silencios y una sensación de tiempo detenido. Sus obras, como <i>The Deer's Cry</i> o el <i>Magnificat</i>, se cantan hoy en todo el mundo.</p>`,
      svg: B.comparar("Las dos voces del tintinnabuli", ["Voz M (melodía)", ["grados conjuntos", "sube y baja", "alrededor de una nota", "lleva el texto"]], ["Voz T (campana)", ["solo notas del acorde", "tónica, 3.ª y 5.ª", "acompaña", "suena como campanas"]]),
    },
    {
      h: "El nuevo coralismo",
      html: `<p>Desde los años noventa, muchos compositores escriben música coral <b>tonal</b>, muy cantable y de gran belleza sonora, pensada para coros amateurs y profesionales. Usan acordes con notas añadidas y <i>clusters</i> suaves que «brillan». Destacan el estadounidense <b>Morten Lauridsen</b> (<i>O magnum mysterium</i>, 1994), <b>Eric Whitacre</b> (<i>Lux aurumque</i>, <i>Sleep</i>) y el noruego <b>Ola Gjeilo</b>.</p>
      <p>Whitacre popularizó además los <b>coros virtuales</b>, que reúnen a miles de cantantes grabados por separado. Este repertorio se ha convertido en uno de los más interpretados por coros juveniles y universitarios.</p>`,
      svg: B.cajas("Rasgos del nuevo coralismo", [["Tonal", "consonante|y cantable"], ["Clusters suaves", "acordes|que brillan"], ["Divisi", "8 o más|voces"], ["Texto", "poesía|y espiritualidad"]]),
      video: { id: "GeLW43SqqbA", titulo: "VOCES8: «Sleep», de Eric Whitacre", canal: "VOCES8", vistas: 2612521 },
    },
    {
      h: "Compositoras y autores españoles",
      html: `<p>La música vocal contemporánea tiene grandes <b>compositoras</b>. <b>Meredith Monk</b> crea desde los años sesenta obras para voz, movimiento y escena con técnicas extendidas. <b>Caroline Shaw</b> ganó en 2013 el Premio Pulitzer con <i>Partita for 8 Voices</i>, escrita para el grupo Roomful of Teeth, que mezcla canto, habla, respiraciones y estilos del mundo.</p>
      <p>En España, la música coral contemporánea tiene autores muy cantados por los coros, como el vasco <b>Javier Busto</b>, con obras tonales de gran expresividad, o el catalán <b>Josep Vila i Casañas</b>. Los concursos y encuentros corales encargan cada año obras nuevas, y muchos coros escolares estrenan piezas escritas para ellos.</p>`,
      svg: B.rejilla("Algunas voces de hoy", ["Autor/a", "País", "Rasgo"], [["Meredith Monk", "EE. UU.", "voz y escena"], ["Caroline Shaw", "EE. UU.", "Pulitzer 2013"], ["Javier Busto", "España", "coral tonal"], ["Vila i Casañas", "España", "coral catalana"]]),
      video: { id: "oEhYY1mgyEI", titulo: "Roomful of Teeth: «Partita for 8 Voices» de Caroline Shaw (fragmento)", canal: "Carnegie Hall", vistas: 73747 },
    },
    {
      h: "Cómo escuchar una obra contemporánea",
      html: `<p>La música contemporánea puede desconcertar la primera vez. Ayuda escucharla con preguntas concretas: ¿qué <b>textura</b> hay (melodía con acompañamiento, nube, bloques)? ¿Hay <b>técnicas extendidas</b>? ¿Cómo se trata el <b>texto</b>: se entiende, se repite, se rompe en sílabas? ¿Qué sensación de <b>tiempo</b> transmite?</p>
      <p>Después conviene situar la obra: autor, año, corriente y qué buscaba. Comparar dos obras de corrientes distintas (por ejemplo, Ligeti y Whitacre) es un buen ejercicio para entender la variedad de la música actual y formarse una opinión propia.</p>`,
      svg: B.flujo("Guía de audición", ["Textura: ¿nube, bloques, melodía?", "Técnicas: ¿extendidas o tradicionales?", "Texto: ¿se entiende o se rompe?", "Contexto: autor, año y corriente"]),
    },
  ],
  figura: {
    titulo: "Caminos de la música vocal actual",
    items: [["Vanguardia", "✳", "técnicas", "extendidas"], ["Ligeti", "☁", "micro-", "polifonía"], ["Pärt", "🔔", "tintinnabuli", "minimalismo"], ["Hoy", "✨", "nuevo coralismo", "coros virtuales"]],
  },
  video: { id: "Ir3htl3UlBk", titulo: "VOCES8: «The Deer's Cry», de Arvo Pärt", canal: "VOCES8", vistas: 1656561 },
  quiz: [
    ["El Sprechgesang es…", ["un canto hablado", "un tipo de coro", "una danza", "un instrumento"], 0, "Schoenberg lo usó en Pierrot lunaire."],
    ["Lux aeterna de Ligeti es un ejemplo de…", ["minimalismo", "micropolifonía", "góspel", "canto gregoriano"], 1, "Una nube de voces."],
    ["Lux aeterna se hizo famosa por aparecer en…", ["Star Wars", "2001: Una odisea del espacio", "Titanic", "El rey león"], 1, "Película de Kubrick de 1968."],
    ["El estilo tintinnabuli lo creó…", ["Arvo Pärt", "Eric Whitacre", "Carl Orff", "Britten"], 0, "Compositor estonio."],
    ["En el tintinnabuli, la voz T canta…", ["una melodía libre", "solo notas del acorde de tónica", "clusters", "glissandi"], 1, "Suena como campanas."],
    ["Eric Whitacre es conocido por…", ["los coros virtuales", "el Sprechgesang", "la ópera barroca", "el canto difónico"], 0, "Desde 2010."],
    ["Caroline Shaw ganó el Pulitzer con…", ["Carmina Burana", "Partita for 8 Voices", "Lux aurumque", "Sequenza III"], 1, "En 2013."],
    ["Las técnicas extendidas incluyen…", ["susurros, glissandi y sonidos de boca", "solo cantar afinado", "solo vibrato", "cantar con piano"], 0, "Amplían la idea de cantar."],
    ["Carmina Burana es de…", ["Carl Orff", "Ligeti", "Pärt", "Busto"], 0, "Estrenada en 1937."],
    ["Un autor coral español contemporáneo es…", ["Javier Busto", "Ola Gjeilo", "Penderecki", "Tavener"], 0, "Compositor vasco."],
  ],
  examen: [
    ["La grafía no convencional es…", ["un tipo de letra", "una notación con símbolos y dibujos nuevos", "la notación del gregoriano", "la clave de fa"], 1, "Se explica al inicio de la partitura."],
    ["El minimalismo sacro se caracteriza por…", ["muchas notas y ruido", "pocas notas, repetición y calma", "improvisación jazzística", "gritos"], 1, "Tiempo detenido."],
    ["Para cantar micropolifonía hace falta…", ["mucho volumen", "afinación precisa e independencia", "micrófono", "baile"], 1, "Cada voz es distinta."],
    ["El nuevo coralismo es en general…", ["atonal y ruidoso", "tonal y muy cantable", "solo instrumental", "improvisado"], 1, "Con clusters suaves."],
    ["Cathy Berberian fue…", ["una compositora barroca", "una cantante especialista en música contemporánea", "una directora de orquesta", "una pianista"], 1, "Berio le dedicó Sequenza III."],
  ],
  feynman: ["Qué corrientes de música vocal hay desde 1900", "Qué son las técnicas extendidas", "Qué hacen Ligeti y Pärt con las voces", "Qué es el nuevo coralismo y quién lo representa"],
  mapa: ["MÚSICA VOCAL XX Y XXI", [["Vanguardia", "Sprechgesang · técnicas extendidas"], ["Texturas", "micropolifonía · clusters"], ["Minimalismo", "Pärt · tintinnabuli"], ["Hoy", "Whitacre · Shaw · Busto"]]],
  tarjetas: [
    ["Técnicas extendidas", "Formas no tradicionales de usar la voz."],
    ["Sprechgesang", "Canto hablado de Schoenberg."],
    ["Micropolifonía", "Muchas voces que forman una nube sonora."],
    ["Cluster", "Acorde de notas muy próximas."],
    ["Tintinnabuli", "Estilo de Pärt: melodía y notas de campana."],
    ["Minimalismo sacro", "Pocas notas, repetición y espiritualidad."],
    ["Nuevo coralismo", "Música coral tonal actual muy cantable."],
    ["Coro virtual", "Cantantes grabados por separado y montados juntos."],
  ],
  ejemplos: [
    ["Escucha Lux aeterna de Ligeti y comenta su textura.", ["Muchas voces cantan líneas parecidas con ritmos distintos.", "Entran y salen lentamente.", "No se distinguen melodías, sino una nube que cambia de color."], "Textura de micropolifonía."],
    ["Explica cómo construirías una frase al estilo tintinnabuli en la menor.", ["Voz M: melodía por grados alrededor de la (la-sol-fa-mi…).", "Voz T: solo las notas la, do y mi.", "Cada nota de la voz M se acompaña de la nota del acorde más cercana."], "Melodía por grados + notas del acorde de tónica."],
    ["Compara Sleep de Whitacre con Sequenza III de Berio.", ["Sleep: coro, tonal, clusters suaves, texto comprensible.", "Sequenza III: voz sola, técnicas extendidas, texto fragmentado.", "Ambas son de la segunda mitad del siglo XX o del XXI."], "Dos caminos opuestos de la música vocal actual."],
  ],
  errores: [
    "Pensar que toda la música contemporánea es ruido o atonal.",
    "Creer que la música coral dejó de componerse después del Romanticismo.",
    "Confundir el minimalismo de Pärt con la micropolifonía de Ligeti.",
    "Olvidar a las compositoras al estudiar el repertorio actual.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es el Sprechgesang?", "Un canto hablado, entre la voz hablada y la cantada, usado por Schoenberg."],
      ["Nombra dos obras corales de la primera mitad del siglo XX.", "Por ejemplo: Sinfonía de los Salmos de Stravinsky y Carmina Burana de Orff."],
      ["¿Quién creó el estilo tintinnabuli?", "Arvo Pärt, compositor estonio."],
      ["Cita dos autores del nuevo coralismo.", "Por ejemplo: Eric Whitacre y Morten Lauridsen (también Ola Gjeilo)."],
    ],
    m: [
      ["Explica en qué consiste la micropolifonía.", "Muchas voces cantan líneas parecidas con pequeñas diferencias de ritmo que forman una textura o nube que cambia lentamente."],
      ["¿Por qué la música con técnicas extendidas necesita grafías nuevas?", "Porque la notación tradicional no tiene símbolos para susurros, glissandi, ruidos o sonidos de boca."],
      ["Explica las dos voces del tintinnabuli.", "La voz M canta una melodía por grados; la voz T solo canta notas del acorde de tónica, como campanas."],
      ["¿Qué aportó Caroline Shaw a la música vocal?", "Mezcló canto, habla, respiraciones y estilos del mundo en Partita for 8 Voices, premiada con el Pulitzer en 2013."],
    ],
    a: [
      ["Elige una obra coral compuesta después de 1950 y haz un comentario de audición con la guía del tema.", "Respuesta abierta: textura, técnicas, tratamiento del texto, tiempo y contexto, con opinión razonada."],
      ["Componed en grupo una pieza breve de un minuto con técnicas extendidas y una partitura gráfica con su leyenda.", "Respuesta abierta: partitura gráfica con símbolos explicados e interpretación grabada."],
    ],
  },
  glosario: [
    ["Vanguardia", "Corriente que busca romper con lo anterior."],
    ["Técnicas extendidas", "Usos no tradicionales de la voz."],
    ["Sprechgesang", "Canto hablado."],
    ["Micropolifonía", "Textura de muchas líneas casi iguales."],
    ["Cluster", "Agrupación de notas muy próximas."],
    ["Tintinnabuli", "Estilo de Arvo Pärt basado en melodía y acorde."],
    ["Minimalismo", "Música de pocos elementos que se repiten."],
    ["Grafía no convencional", "Notación con símbolos nuevos."],
    ["Coro virtual", "Coro formado por grabaciones individuales."],
  ],
  situacion: {
    titulo: "Estreno mundial en el aula",
    reto: "Componer e interpretar una obra vocal breve con técnicas contemporáneas para presentarla en un concierto del centro.",
    pasos: [
      "Escuchar y comentar tres obras de corrientes distintas.",
      "Elegir un texto breve y una corriente de referencia.",
      "Escribir una partitura (tradicional o gráfica) por grupos.",
      "Ensayar, grabar y presentar la obra con una explicación.",
    ],
    producto: "Una obra breve compuesta por el grupo, con partitura y grabación.",
    evaluacion: [
      "Se usan recursos de la corriente elegida.",
      "La partitura es clara y legible.",
      "La interpretación es cuidada y afinada.",
      "La presentación sitúa la obra en su contexto.",
    ],
  },
  familias: [
    "Ved juntos un coro virtual de Eric Whitacre.",
    "Escuchad una obra de Arvo Pärt en un momento tranquilo.",
    "Asistid a un concierto de música contemporánea o a un estreno.",
    "Hablad de qué os parece «música» y qué no, y por qué.",
  ],
  saberes: "Coro y Técnica Vocal II: repertorio vocal y coral de los siglos XX y XXI; técnicas vocales extendidas; grafías contemporáneas; corrientes (vanguardia, micropolifonía, minimalismo, nuevo coralismo); compositoras y compositores actuales, incluidos españoles; audición crítica.",
  ideas: [
    "Comparar en una misma sesión Ligeti, Pärt y Whitacre.",
    "Leer una partitura gráfica y cantarla en grupo.",
    "Participar en un coro virtual o crear uno del centro.",
    "Contactar con un compositor actual para un encargo o una charla.",
  ],
  fuentes: [
    { t: "Arvo Pärt, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Arvo_P%C3%A4rt" },
    { t: "György Ligeti, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Gy%C3%B6rgy_Ligeti" },
    { t: "Eric Whitacre, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Eric_Whitacre" },
  ],
});
