// Artes Escénicas I, 1º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ae");
const { marco, t, ln, rc, ci, pa } = B;

// Las partes de la ópera: obertura, recitativo, aria, coro y conjunto, en orden de función.
const partes = B.rejilla("Partes de la ópera", ["Parte", "Qué es", "Para qué"], [["Obertura", "pieza orquestal", "abrir la obra"], ["Recitativo", "canto hablado", "avanzar la acción"], ["Aria", "canto solista", "expresar emociones"], ["Dúo, trío…", "varias voces", "diálogo cantado"], ["Coro", "grupo de voces", "el pueblo, la masa"]]);

// Foso, escena y voces: dónde está cada intérprete en un teatro de ópera.
const foso = marco("Teatro de ópera: escena, foso de la orquesta y público",
  `${rc(30, 30, 200, 70, 'rx="6" fill="var(--pen)" fill-opacity=".14" stroke="var(--pen)" stroke-width="2"')}
  ${pa("M40 104 H220 V132 Q130 150 40 132 Z", 'fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="2"')}
  ${[0, 1, 2, 3, 4].map((i) => ci(70 + i * 30, 70, 7, 'fill="var(--pen)"')).join("")}
  ${ci(130, 124, 6, 'fill="var(--red)"')}${[0, 1, 2, 3, 4, 5].map((i) => ci(66 + i * 26, 116 + (i % 2) * 6, 4, 'fill="var(--sun)"')).join("")}
  ${[0, 1, 2, 3, 4, 5, 6].map((i) => rc(30 + i * 30, 160, 20, 8, 'rx="3" fill="var(--muted)" fill-opacity=".45"')).join("")}
  ${t(130, 22, "Escena: cantantes y coro", { bold: 1, color: "var(--pen)", maxW: 200 })}${t(130, 94, "solistas y coro", { fs: 9, color: "var(--muted)" })}
  ${t(196, 152, "director", { fs: 9, color: "var(--red)" })}${t(70, 152, "foso: orquesta", { fs: 9, bold: 1, color: "var(--sun)", maxW: 90 })}
  ${t(248, 178, "público", { fs: 9, color: "var(--muted)", anchor: "end", maxW: 50 })}`);

module.exports = B.tema({
  titulo: "El espectáculo musical",
  minutos: 60,
  objetivos: [
    "Reconocer los géneros del espectáculo musical: ópera, zarzuela, musical, ballet y otros",
    "Identificar las partes de la ópera y las tesituras vocales",
    "Conocer el origen y los rasgos de la zarzuela y del teatro musical",
    "Valorar la colaboración entre música, texto, danza y escena",
  ],
  claves: ["ópera", "libreto", "aria", "recitativo", "zarzuela", "musical", "tesitura", "Broadway"],
  pregunta: {
    texto: "¿Por qué en algunas obras los personajes, en lugar de hablar, cantan?",
    respuesta: "Porque la <mark>música</mark> expresa emociones que las palabras solas no alcanzan. En el <b>espectáculo musical</b> el canto, la orquesta y a veces la danza son el lenguaje principal de la historia.",
  },
  lectura: {
    titulo: "Ocho minutos para llegar a la nota",
    html: `<p>Mario canta en el coro de su instituto y le han regalado una entrada para ver <i>La flauta mágica</i> de Mozart. No sabe qué esperar: piensa que la ópera es algo antiguo y aburrido. Pero la orquesta empieza en el foso, se abre el telón y aparece un príncipe perseguido por una serpiente gigante.</p>
    <p>En el segundo acto, la Reina de la Noche canta un aria furiosa que sube a notas altísimas sin micrófono. El público contiene la respiración y estalla en aplausos. Al salir, Mario busca el aria en el móvil: tiene más de ochenta millones de visualizaciones. Ha descubierto que el <b>espectáculo musical</b> puede ser tan emocionante como una película de acción.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es el espectáculo musical",
      html: `<p>Llamamos <b>espectáculo musical</b> a toda obra escénica en la que la <b>música</b> es un elemento esencial de la narración: los personajes cantan, la orquesta acompaña y subraya la acción y, a menudo, se baila. Es un arte <b>total</b> que une texto, música, danza, escenografía y vestuario.</p>
      <p>Sus principales géneros son la <b>ópera</b>, la <b>zarzuela</b>, la <b>opereta</b>, el <b>musical</b> y el <b>ballet</b> de argumento. Se diferencian por el peso del canto, de la palabra hablada y del baile, y por el estilo de la música.</p>`,
      svg: B.estrella("Géneros del espectáculo musical", "Escena + música", ["Ópera", "Zarzuela", "Opereta", "Musical", "Ballet", "Revista"]),
    },
    {
      h: "La ópera: origen y elementos",
      html: `<p>La <b>ópera</b> nace en Florencia hacia 1600, cuando un grupo de humanistas quiso recuperar la tragedia griega cantada. El <i>Orfeo</i> de <b>Monteverdi</b> (1607) es la primera gran ópera. Se canta de principio a fin y la historia está escrita en un <b>libreto</b>, el texto que pone música el <b>compositor</b>.</p>
      <p>Los cantantes de ópera usan la técnica del <b>canto lírico</b>: proyectan la voz sin micrófono por encima de una orquesta completa. La orquesta toca en el <b>foso</b>, delante del escenario, guiada por el director musical.</p>`,
      svg: foso,
      video: { id: "zFC8iqISH5o", titulo: "¿Qué es la ópera?", canal: "Arte Mayor", vistas: 83273 },
    },
    {
      h: "Las partes de la ópera",
      html: `<p>Una ópera alterna varias formas. La <b>obertura</b> es la pieza orquestal inicial. El <b>recitativo</b> es un canto cercano al habla que hace <b>avanzar la acción</b>. El <b>aria</b> es un canto solista melódico en el que el personaje se detiene a <b>expresar lo que siente</b>; es el momento de lucimiento del cantante.</p>
      <p>También hay <b>números de conjunto</b> (dúos, tríos, cuartetos) donde varias voces dialogan a la vez, y <b>coros</b> que representan al pueblo, soldados o invitados.</p>`,
      svg: partes,
    },
    {
      h: "Las voces",
      html: `<p>Las voces se clasifican por su <b>tesitura</b>, la extensión de notas que cantan con comodidad. En las mujeres, de más aguda a más grave: <b>soprano</b>, <b>mezzosoprano</b> y <b>contralto</b>. En los hombres: <b>tenor</b>, <b>barítono</b> y <b>bajo</b>.</p>
      <p>En la ópera la voz define al personaje: el tenor suele ser el héroe enamorado; la soprano, la heroína; el barítono, el rival o el padre; el bajo, el rey, el sacerdote o el villano. La mezzosoprano interpreta a veces papeles de joven varón.</p>`,
      svg: B.capas("Tesituras de agudo a grave", [["Soprano", "heroína"], ["Mezzo", "rival, joven"], ["Tenor", "héroe"], ["Barítono", "padre, rival"], ["Bajo", "rey, villano"]]),
      video: { id: "nMRa0loMvgw", titulo: "¿Por qué la ópera se canta así? Diferencias entre canto lírico y canto moderno", canal: "Ping Pang Pong Ópera", vistas: 178926 },
    },
    {
      h: "Grandes momentos de la ópera",
      html: `<p>En el <b>Barroco</b> brillan Monteverdi y Händel. En el <b>Clasicismo</b>, <b>Mozart</b> (<i>Las bodas de Fígaro</i>, <i>La flauta mágica</i>). El siglo XIX es la gran época: el <b>bel canto</b> de Rossini; <b>Verdi</b> (<i>La traviata</i>, <i>Aida</i>); <b>Wagner</b>, que buscó la «obra de arte total»; y <b>Puccini</b> (<i>La bohème</i>, <i>Tosca</i>).</p>
      <p>Una ópera muy representada es <i>Carmen</i> de Bizet, ambientada en Sevilla. Hoy los grandes teatros, como el <b>Teatro Real</b> de Madrid o el <b>Liceu</b> de Barcelona, emiten funciones en directo a cines de todo el mundo.</p>`,
      svg: B.epocas("Momentos de la ópera", [["1607", "Monteverdi"], ["s. XVIII", "Mozart"], ["s. XIX", "Verdi · Wagner"], ["1900", "Puccini"], ["hoy", "Real · Liceu"]]),
    },
    {
      h: "La zarzuela",
      html: `<p>La <b>zarzuela</b> es el teatro musical español: alterna partes <b>habladas</b> y partes <b>cantadas</b>. Su nombre viene del palacio de la Zarzuela, cerca de Madrid, donde en el siglo XVII se representaban estas obras para la corte de Felipe IV.</p>
      <p>Vive su edad de oro en el siglo XIX con el <b>género chico</b>: piezas de un acto, con personajes populares y ambiente castizo, como <i>La verbena de la Paloma</i>. También hay zarzuela grande, en tres actos, como <i>Doña Francisquita</i> o <i>La rosa del azafrán</i>. El Teatro de la Zarzuela de Madrid la mantiene viva.</p>`,
      svg: B.comparar("Ópera frente a zarzuela", ["Ópera", ["todo cantado", "origen italiano", "recitativos", "temas variados"]], ["Zarzuela", ["hablado y cantado", "origen español", "diálogos hablados", "ambiente popular"]]),
    },
    {
      h: "El musical",
      html: `<p>El <b>musical</b> nace a finales del siglo XIX en los teatros de <b>Broadway</b> (Nueva York) y del <b>West End</b> (Londres). Mezcla diálogo hablado, <b>canciones</b> de estilo popular (jazz, pop, rock) y mucho <b>baile</b>. Sus intérpretes deben dominar las tres disciplinas: actuar, cantar y bailar.</p>
      <p>Títulos como <i>West Side Story</i>, <i>Los Miserables</i>, <i>El rey león</i> o <i>Hamilton</i> llevan años en cartel. Madrid es hoy una de las capitales europeas del musical, con producciones propias y adaptaciones de grandes títulos.</p>`,
      svg: B.cajas("El intérprete de musical", [["Actúa", "texto y personaje"], ["Canta", "estilo popular"], ["Baila", "coreografías"], ["Con micro", "sonido amplificado"]]),
      video: { id: "mSdXhsqHIjI", titulo: "Top 10 mejores musicales de Broadway", canal: "Alonso Donayre", vistas: 309102 },
    },
    {
      h: "Un trabajo de equipo",
      html: `<p>Un espectáculo musical reúne a muchos creadores: el <b>compositor</b> y el <b>libretista</b> (o letrista), el <b>director musical</b>, el <b>director de escena</b>, el <b>coreógrafo</b>, los cantantes, la orquesta, el coro y todo el equipo técnico.</p>
      <p>Por eso suele ser el género escénico más caro y complejo de producir. A cambio, ofrece una experiencia muy completa al público, que disfruta a la vez del canto, la música en directo, el baile y la imagen escénica.</p>`,
      svg: B.flujo("Quién crea un espectáculo musical", ["Libretista: escribe el texto", "Compositor: pone la música", "Director de escena y coreógrafo", "Cantantes, orquesta y coro"]),
    },
  ],
  figura: {
    titulo: "El espectáculo musical en cuatro claves",
    items: [["Ópera", "♪", "todo", "cantado"], ["Zarzuela", "♫", "hablado y", "cantado"], ["Musical", "★", "canta, actúa", "y baila"], ["Equipo", "♣", "música, texto", "y escena"]],
  },
  video: { id: "fh9KFqd76nw", titulo: "¿Qué es la ópera? Rita Gasalla en TEDxYouth@Torrelodones", canal: "TEDx Talks", vistas: 54410 },
  quiz: [
    ["En la ópera, el libreto es…", ["la partitura de la orquesta", "el texto de la obra", "el programa de mano", "el decorado"], 1, "Texto al que pone música el compositor."],
    ["La ópera nace hacia 1600 en…", ["Viena", "Florencia", "Madrid", "Londres"], 1, "Monteverdi, Orfeo (1607)."],
    ["La parte de la ópera que hace avanzar la acción es…", ["el aria", "el recitativo", "la obertura", "el coro"], 1, "Canto cercano al habla."],
    ["En un aria, el personaje…", ["sale de escena", "expresa sus sentimientos", "habla sin música", "presenta la obra"], 1, "Momento lírico y de lucimiento."],
    ["La voz femenina más aguda es…", ["contralto", "mezzosoprano", "soprano", "barítono"], 2, "Soprano."],
    ["La voz masculina más grave es…", ["tenor", "barítono", "bajo", "soprano"], 2, "Bajo."],
    ["La zarzuela se diferencia de la ópera porque…", ["no tiene música", "alterna partes habladas y cantadas", "es solo danza", "se canta en italiano"], 1, "Mezcla habla y canto."],
    ["El género chico de la zarzuela son…", ["óperas largas", "obras de un acto, populares", "ballets", "musicales de Broadway"], 1, "Siglo XIX."],
    ["El musical nace en…", ["Broadway y el West End", "Florencia", "Atenas", "Sevilla"], 0, "Nueva York y Londres."],
    ["La orquesta en un teatro de ópera se sitúa en…", ["el foso", "el telar", "el palco", "el vestíbulo"], 0, "Delante y por debajo del escenario."],
  ],
  examen: [
    ["Un personaje canta solo y detiene la acción para lamentar la muerte de su amada. Es…", ["un recitativo", "un aria", "una obertura", "un coro"], 1, "Expresión de sentimientos."],
    ["Una obra española con diálogos hablados, canciones y ambiente madrileño es probablemente…", ["una ópera", "una zarzuela", "un ballet", "un musical de Broadway"], 1, "Género chico."],
    ["En una ópera, el héroe enamorado suele ser…", ["bajo", "tenor", "contralto", "barítono"], 1, "Convención clásica."],
    ["¿Qué compositor buscó la «obra de arte total»?", ["Mozart", "Wagner", "Rossini", "Monteverdi"], 1, "Gesamtkunstwerk."],
    ["Una intérprete de musical necesita sobre todo…", ["solo cantar lírico", "actuar, cantar y bailar", "tocar un instrumento", "dirigir la orquesta"], 1, "Triple disciplina."],
  ],
  feynman: ["Qué es un espectáculo musical y qué géneros tiene", "Diferencia entre recitativo y aria", "Cómo se clasifican las voces", "En qué se diferencian ópera, zarzuela y musical"],
  mapa: ["EL ESPECTÁCULO MUSICAL", [["Ópera", "libreto · aria · recitativo · coro"], ["Voces", "soprano · mezzo · tenor · barítono · bajo"], ["Zarzuela", "hablado + cantado, género chico"], ["Musical", "Broadway · canto, baile y texto"]]],
  tarjetas: [
    ["Ópera", "Obra escénica cantada de principio a fin con orquesta."],
    ["Libreto", "Texto de una ópera o zarzuela."],
    ["Aria", "Canto solista melódico que expresa sentimientos."],
    ["Recitativo", "Canto cercano al habla que hace avanzar la acción."],
    ["Tesitura", "Extensión de notas que una voz canta con comodidad."],
    ["Zarzuela", "Teatro musical español con partes habladas y cantadas."],
    ["Musical", "Género con diálogo, canciones populares y baile, nacido en Broadway."],
    ["Foso", "Espacio ante el escenario donde toca la orquesta."],
  ],
  ejemplos: [
    ["Clasifica: una obra todo cantada en italiano; otra con canciones pop, baile y diálogos; otra española con partes habladas y cantadas.", ["Todo cantado, con orquesta: ópera.", "Canciones pop, baile y diálogo: musical.", "Habla y canto, española: zarzuela."], "Ópera, musical y zarzuela."],
    ["Asigna voz a estos personajes de ópera: joven héroe, rey anciano, heroína.", ["Joven héroe enamorado: tenor.", "Rey anciano y autoritario: bajo.", "Heroína: soprano."], "Tenor, bajo y soprano."],
    ["Ordena las partes de un acto típico: aria, obertura, recitativo.", ["La obra empieza con la obertura de la orquesta.", "Un recitativo cuenta qué ocurre.", "Después, un aria expresa la emoción del personaje."], "Obertura → recitativo → aria."],
  ],
  errores: [
    "Confundir ópera y zarzuela: en la zarzuela hay partes habladas.",
    "Pensar que el aria hace avanzar la historia: eso lo hace el recitativo.",
    "Creer que el musical es solo cantar: también se actúa y se baila.",
    "Clasificar las voces por lo fuerte que suenan y no por su tesitura.",
  ],
  ejercicios: {
    b: [
      ["Nombra cuatro géneros de espectáculo musical.", "Ópera, zarzuela, opereta, musical, ballet."],
      ["¿Qué es el libreto?", "El texto de una ópera o zarzuela, al que pone música el compositor."],
      ["Ordena de aguda a grave las voces femeninas.", "Soprano, mezzosoprano y contralto."],
      ["¿Dónde nació el musical?", "En Broadway (Nueva York) y el West End (Londres)."],
    ],
    m: [
      ["Diferencia aria y recitativo.", "El recitativo es casi hablado y hace avanzar la acción; el aria es melódica y expresa sentimientos."],
      ["Explica el origen del nombre «zarzuela».", "Viene del palacio de la Zarzuela, cerca de Madrid, donde se representaban estas obras para la corte en el siglo XVII."],
      ["Compara ópera y musical en tres rasgos.", "Ópera: todo cantado, canto lírico sin micro, orquesta clásica. Musical: diálogo y canciones, estilo popular, sonido amplificado y baile."],
      ["¿Por qué el espectáculo musical es un trabajo de equipo?", "Reúne a libretista, compositor, directores musical y de escena, coreógrafo, cantantes, orquesta, coro y técnicos."],
    ],
    a: [
      ["Escucha un aria (por ejemplo, de la Reina de la Noche) y describe qué emoción expresa y cómo lo consigue la música.", "Respuesta abierta. Se valora relacionar emoción con altura, velocidad, intensidad y acompañamiento."],
      ["Propón una escena de musical sobre la vida del instituto: situación, canción y coreografía.", "Respuesta abierta. Debe integrar texto, canción y baile con sentido dramático."],
    ],
  },
  glosario: [
    ["Obertura", "Pieza orquestal que abre una ópera."],
    ["Bel canto", "Estilo de canto italiano de gran belleza y agilidad."],
    ["Canto lírico", "Técnica vocal de la ópera, proyectada sin micrófono."],
    ["Opereta", "Ópera ligera y cómica con partes habladas."],
    ["Género chico", "Zarzuela breve, de un acto y tema popular."],
    ["Director musical", "Quien dirige a la orquesta y los cantantes."],
    ["Letrista", "Autor de las letras de las canciones de un musical."],
    ["West End", "Barrio de teatros de Londres."],
  ],
  situacion: {
    titulo: "Nuestro minimusical",
    reto: "Crear en grupo una escena musical de tres minutos.",
    pasos: [
      "Elegid una situación con un conflicto sencillo.",
      "Escribid un diálogo breve que desemboque en una canción (podéis adaptar una conocida).",
      "Añadid una coreografía sencilla para el estribillo.",
      "Representadla ante la clase.",
    ],
    producto: "Escena musical de tres minutos con diálogo, canción y baile.",
    evaluacion: [
      "La canción nace de la situación dramática.",
      "La voz se oye y es expresiva.",
      "La coreografía está coordinada.",
      "Se integran bien los tres lenguajes.",
    ],
  },
  familias: [
    "Ved juntos un musical o una ópera, en el teatro, el cine o en vídeo.",
    "Escuchad un aria famosa y una canción de un musical y comparadlas.",
    "Preguntad a los abuelos qué zarzuelas conocen.",
    "Cantad juntos una canción de un musical.",
  ],
  saberes: "El espectáculo musical: ópera (origen, libreto, partes: obertura, recitativo, aria, conjuntos, coro), tesituras vocales, grandes compositores; zarzuela y género chico; el musical de Broadway y el West End; equipos creativos del espectáculo musical.",
  ideas: [
    "Audición comparada de recitativo y aria.",
    "Clasificar voces escuchando fragmentos de ópera.",
    "Visionado de una escena de zarzuela y otra de musical.",
    "Pequeño taller de canto y coreografía de un número musical.",
  ],
  fuentes: [
    { t: "Ópera, Wikipedia en español", url: "https://es.wikipedia.org/wiki/%C3%93pera" },
    { t: "Teatro de la Zarzuela", url: "https://teatrodelazarzuela.inaem.gob.es" },
  ],
});
