// Artes Escénicas II, 2º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ae");

module.exports = B.tema({
  titulo: "Las artes escénicas en los siglos XX y XXI",
  minutos: 60,
  objetivos: [
    "Situar las grandes transformaciones de la escena desde finales del siglo XIX hasta hoy",
    "Reconocer el papel de las vanguardias, el teatro de grupo y la escena posdramática",
    "Conocer los hitos del teatro y la danza en España en el siglo XX",
    "Analizar un espectáculo actual relacionándolo con su contexto",
  ],
  claves: ["director de escena", "vanguardia", "teatro del absurdo", "creación colectiva", "teatro independiente", "posdramático", "multidisciplinar", "contexto"],
  pregunta: {
    texto: "¿Desde cuándo existe la figura del director de escena?",
    respuesta: "Aunque siempre hubo alguien que organizaba los ensayos, el <mark>director como creador</mark> nace a finales del siglo XIX. Desde entonces, la escena del siglo XX se convierte en un gran laboratorio en el que cada generación <b>reinventa</b> qué es el teatro.",
  },
  lectura: {
    titulo: "Un escenario vacío en Aviñón",
    html: `<p>Julio, festival de Aviñón. Una alumna de 2º de Bachillerato entra con su grupo en el patio de un palacio medieval convertido en teatro. No hay telón ni decorado: solo una pantalla enorme, unos micrófonos y una docena de personas mayores sentadas en sillas. No son actores profesionales; cuentan su propia vida mientras una cámara proyecta sus caras.</p>
    <p>A la salida, el grupo discute: «¿Esto es teatro?». La profesora sonríe y les recuerda que hace cien años alguien hizo la misma pregunta ante un escenario lleno de cubos y figuras mecánicas, y hace setenta ante dos vagabundos que esperaban a un tal Godot. La historia de la escena contemporánea es la historia de esa pregunta.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "El nacimiento de la escena moderna",
      html: `<p>A finales del siglo XIX el <b>naturalismo</b> quiere mostrar la vida tal como es. André Antoine funda en París el <b>Théâtre Libre</b> (1887) con decorados reales y actores que dan la espalda al público, y Stanislavski y Nemiróvich-Dánchenko crean en 1898 el <b>Teatro de Arte de Moscú</b>.</p>
      <p>En ese momento aparece el <b>director de escena</b> como autor del espectáculo: ya no basta con colocar a los actores, hay que dar una <b>lectura</b> única a la obra y unificar interpretación, espacio, luz y sonido.</p>`,
      svg: B.epocas("Hitos de la escena contemporánea", [["1887", "Théâtre Libre"], ["1922", "Bauhaus y vanguardias"], ["1953", "Esperando a Godot"], ["1964", "teatro de grupo"], ["1999", "posdramático"]]),
    },
    {
      h: "Las vanguardias en escena",
      html: `<p>Frente al naturalismo, los <b>simbolistas</b> buscan sugerir. Adolphe Appia y Edward Gordon Craig proponen espacios arquitectónicos de escaleras y volúmenes y una <b>luz</b> que esculpe y crea atmósferas.</p>
      <p>Las vanguardias llevan la ruptura más lejos: el <b>futurismo</b> celebra la máquina, el <b>dadaísmo</b> provoca con veladas absurdas, el <b>expresionismo</b> deforma la realidad para mostrar la angustia y la <b>Bauhaus</b> estudia el cuerpo como forma geométrica en el <i>Ballet triádico</i> de Oskar Schlemmer (1922). En la danza, los <b>Ballets Rusos</b> de Diáguilev reúnen a Stravinski, Picasso y Nijinski.</p>`,
      svg: B.estrella("Las vanguardias en la escena", "Ruptura", ["Simbolismo", "Futurismo", "Dadaísmo", "Expresionismo", "Surrealismo", "Bauhaus"]),
    },
    {
      h: "Después de 1945: el teatro del absurdo",
      html: `<p>Tras la Segunda Guerra Mundial, autores como Samuel Beckett (<i>Esperando a Godot</i>, 1953) o Eugène Ionesco (<i>La cantante calva</i>, 1950) llevan a escena la falta de sentido de la existencia. Es el <b>teatro del absurdo</b>: acciones que se repiten, diálogos que no comunican, personajes atrapados en un espacio casi vacío.</p>
      <p>A la vez, el teatro político de Brecht y Piscator sigue vivo y aparece el <b>teatro documental</b>, que lleva a escena juicios, informes y testimonios reales.</p>`,
      svg: B.comparar("Teatro tradicional frente a teatro del absurdo", ["Tradicional", ["trama con causa y efecto", "diálogo que avanza", "personajes definidos", "final que cierra"]], ["Absurdo", ["acciones circulares", "lenguaje que falla", "personajes sin identidad", "final abierto"]]),
      video: { id: "tLkpknStQdE", titulo: "Proyecto Teatro Independiente en España, 1962-1980. Centro de Documentación Teatral", canal: "Ministerio de Cultura", vistas: 2086 },
    },
    {
      h: "Los años sesenta y setenta: el teatro de grupo",
      html: `<p>En los sesenta muchos colectivos rechazan el teatro comercial y trabajan como <b>compañías estables</b> que investigan y crean juntas. El <b>Living Theatre</b> de Judith Malina y Julian Beck, el <b>Théâtre du Soleil</b> de Ariane Mnouchkine (1964) y el <b>Odin Teatret</b> de Eugenio Barba (1964) practican la <b>creación colectiva</b>: la obra nace de improvisaciones y no de un texto previo.</p>
      <p>Se sale de los teatros a la calle, a fábricas y plazas; el público participa, y el <b>happening</b> mezcla arte, vida y acción.</p>`,
      svg: B.cajas("Rasgos del teatro de grupo", [["Colectivo", "todos crean"], ["Investigación", "entrenamiento diario"], ["Nuevos espacios", "calle, fábrica, plaza"], ["Compromiso", "política y sociedad"]]),
    },
    {
      h: "Las artes escénicas en España en el siglo XX",
      html: `<p>En el primer tercio del siglo destacan Valle-Inclán y <b>García Lorca</b>, que recorre los pueblos con el grupo universitario <b>La Barraca</b> (1932), y la actriz Margarita Xirgu. Tras la Guerra Civil, la censura limita la escena, pero desde los sesenta surge el <b>teatro independiente</b>: Els Joglars (1962), Tábano, La Cuadra de Sevilla o Els Comediants.</p>
      <p>Con la democracia se crean el <b>Centro Dramático Nacional</b> (1978), redes de teatros públicos y festivales como Almagro o Mérida, y compañías como <b>La Fura dels Baus</b> (1979) llevan el lenguaje escénico español a todo el mundo.</p>`,
      svg: B.epocas("La escena en España", [["1932", "La Barraca"], ["1962", "Els Joglars"], ["1978", "CDN"], ["1979", "La Fura dels Baus"], ["hoy", "festivales y redes"]]),
    },
    {
      h: "La escena del siglo XXI",
      html: `<p>El teórico Hans-Thies Lehmann llamó <b>teatro posdramático</b> (1999) a una escena en la que el texto ya no manda: la imagen, el cuerpo, el sonido y la presencia real de los intérpretes valen tanto como la historia. Hoy conviven el teatro de texto, la danza, el circo, la performance y el vídeo en espectáculos <b>multidisciplinares</b>.</p>
      <p>Creadores como Robert Lepage, Romeo Castellucci, Rimini Protokoll o Angélica Liddell exploran la tecnología, el documento real y la experiencia del público, y crecen las propuestas <b>inclusivas</b>, sostenibles y participativas.</p>`,
      svg: B.comparar("Teatro dramático frente a posdramático", ["Dramático", ["el texto manda", "historia y personajes", "ficción cerrada", "público que observa"]], ["Posdramático", ["texto, imagen y cuerpo", "situaciones y presencias", "mezcla de real y ficción", "público que vive la experiencia"]]),
    },
    {
      h: "Nuevos espacios y nuevos públicos",
      html: `<p>La escena actual no se limita a la sala a la italiana. Hay espectáculos de <b>sitio específico</b> creados para un lugar concreto (una estación, un museo, un bosque), funciones <b>inmersivas</b> en las que el público recorre el espacio y montajes para una sola persona o para miles en un estadio.</p>
      <p>También cambian los públicos: programas para escolares, accesibilidad con audiodescripción y subtítulos, y obras que se ven en <b>directo por internet</b>. La pregunta sigue siendo la misma: qué ocurre cuando un grupo de personas se reúne para mirar a otras.</p>`,
      svg: B.escenarios("Espacios escénicos: a la italiana, de tres lados y circular"),
    },
    {
      h: "Cómo situar un espectáculo en su época",
      html: `<p>Para analizar un espectáculo contemporáneo conviene seguir cuatro pasos: el <b>contexto</b> (cuándo y dónde se estrena, qué ocurre en la sociedad), la <b>propuesta</b> (qué quiere contar o provocar), los <b>lenguajes</b> que usa (texto, cuerpo, espacio, luz, sonido, tecnología) y la <b>recepción</b> (cómo reaccionaron público y crítica).</p>
      <p>Así se descubre que cada estética responde a su tiempo: la crisis de las certezas, las guerras, la lucha por las libertades o la vida digital.</p>`,
      svg: B.flujo("Analizar un espectáculo en su contexto", ["Contexto: época y sociedad", "Propuesta: qué quiere contar", "Lenguajes: texto, cuerpo, espacio, luz", "Recepción: público y crítica"]),
    },
  ],
  figura: {
    titulo: "Un siglo de escena en cuatro claves",
    items: [["Director", "◎", "autor del", "espectáculo"], ["Vanguardia", "✶", "romper", "las reglas"], ["Grupo", "♣", "crear", "en colectivo"], ["Posdrama", "◇", "imagen, cuerpo", "y presencia"]],
  },
  video: { id: "nIxTWJG6utk", titulo: "Una mirada al Teatro Independiente. Centro de Documentación Teatral", canal: "Ministerio de Cultura", vistas: 1895 },
  quiz: [
    ["El Théâtre Libre de André Antoine (1887) es un hito del…", ["simbolismo", "naturalismo", "dadaísmo", "teatro del absurdo"], 1, "Decorados reales y verdad en escena."],
    ["La figura del director como creador del espectáculo aparece…", ["en Grecia", "en el Siglo de Oro", "a finales del siglo XIX", "en el siglo XXI"], 2, "Con el naturalismo y Stanislavski."],
    ["Appia y Craig renovaron sobre todo…", ["el vestuario", "el espacio y la luz", "el texto", "la taquilla"], 1, "Espacios arquitectónicos y luz que esculpe."],
    ["El Ballet triádico de Oskar Schlemmer se asocia a…", ["la Bauhaus", "el Romanticismo", "el Barroco", "el realismo"], 0, "Cuerpo y geometría."],
    ["Esperando a Godot (1953) pertenece al…", ["teatro épico", "teatro del absurdo", "naturalismo", "musical"], 1, "Beckett."],
    ["La creación colectiva consiste en…", ["copiar una obra", "crear la obra en grupo desde improvisaciones", "que el director lo decida todo", "leer en voz alta"], 1, "Teatro de grupo de los sesenta."],
    ["Ariane Mnouchkine fundó…", ["el Odin Teatret", "el Living Theatre", "el Théâtre du Soleil", "La Barraca"], 2, "En 1964."],
    ["La Barraca era…", ["un teatro romano", "el grupo universitario de Lorca", "una compañía de danza", "un festival"], 1, "Llevaba los clásicos a los pueblos."],
    ["El Centro Dramático Nacional se creó en…", ["1932", "1962", "1978", "2000"], 2, "Con la democracia."],
    ["En el teatro posdramático…", ["el texto lo decide todo", "imagen, cuerpo y presencia pesan tanto como el texto", "no hay público", "solo hay danza"], 1, "Lehmann, 1999."],
  ],
  examen: [
    ["Un montaje con decorado de escaleras y cubos y una luz que cambia las atmósferas sigue a…", ["Antoine", "Appia y Craig", "Beckett", "Brecht"], 1, "Escena simbolista y arquitectónica."],
    ["Una compañía estrena en una fábrica abandonada una obra creada por sus miembros en dos años de improvisaciones. Es un ejemplo de…", ["teatro de grupo y creación colectiva", "teatro del Siglo de Oro", "ópera barroca", "teatro naturalista"], 0, "Sitio no convencional y creación colectiva."],
    ["Una obra en la que vecinos reales cuentan su vida con vídeo en directo se relaciona con…", ["el teatro documental y posdramático", "el ballet clásico", "la zarzuela", "el naturalismo de Antoine"], 0, "Lo real entra en escena."],
    ["Els Joglars, Tábano y La Cuadra de Sevilla son ejemplos de…", ["teatro barroco", "teatro independiente español", "danza clásica", "ópera"], 1, "Desde los años sesenta."],
    ["Para analizar un espectáculo en su época, el primer paso es…", ["el contexto", "la taquilla", "el vestuario", "el aplauso"], 0, "Cuándo, dónde y en qué sociedad."],
  ],
  feynman: ["Por qué nace el director de escena", "Qué aportaron las vanguardias", "Qué es la creación colectiva", "Qué significa teatro posdramático"],
  mapa: ["ESCENA DE LOS SIGLOS XX Y XXI", [["Inicios", "naturalismo · director · Appia y Craig"], ["Vanguardias", "futurismo · dadá · Bauhaus · absurdo"], ["Grupo", "creación colectiva · independiente"], ["Hoy", "posdramático · multidisciplinar · inmersivo"]]],
  tarjetas: [
    ["Director de escena", "Creador que da una lectura única al espectáculo y unifica sus lenguajes."],
    ["Naturalismo", "Estética que reproduce la vida real en escena."],
    ["Vanguardias", "Movimientos de ruptura de principios del siglo XX."],
    ["Teatro del absurdo", "Teatro de posguerra que muestra la falta de sentido de la existencia."],
    ["Creación colectiva", "Obra elaborada por el grupo a partir de improvisaciones."],
    ["Teatro independiente", "Grupos españoles al margen del teatro comercial desde los años sesenta."],
    ["Posdramático", "Escena en la que imagen, cuerpo y presencia pesan tanto como el texto."],
    ["Sitio específico", "Espectáculo creado para un lugar concreto."],
  ],
  ejemplos: [
    ["Ordena cronológicamente: La Fura dels Baus, Théâtre Libre, Esperando a Godot, Ballet triádico.", ["Théâtre Libre: 1887.", "Ballet triádico: 1922.", "Esperando a Godot: 1953.", "La Fura dels Baus: 1979."], "Théâtre Libre → Ballet triádico → Esperando a Godot → La Fura dels Baus."],
    ["Explica por qué una obra con actores no profesionales que cuentan su vida es posdramática.", ["El texto no es una ficción previa, sino testimonio real.", "Importa la presencia de las personas, no el personaje.", "Mezcla vídeo, palabra y espacio."], "Rompe la ficción dramática y da valor a la presencia real."],
    ["Sitúa en su contexto el teatro independiente español.", ["Contexto: dictadura y censura (años sesenta y setenta).", "Propuesta: libertad, crítica y nuevas formas.", "Lenguajes: creación colectiva, cuerpo, calle.", "Recepción: público joven y universitario."], "Respuesta de una generación a la falta de libertades."],
  ],
  errores: [
    "Pensar que el teatro del siglo XX abandona el texto por completo.",
    "Confundir teatro del absurdo con comedia disparatada.",
    "Creer que la creación colectiva significa improvisar el día del estreno.",
    "Analizar un espectáculo sin tener en cuenta su contexto.",
  ],
  ejercicios: {
    b: [
      ["¿Quién fundó el Théâtre Libre y en qué año?", "André Antoine, en París, en 1887."],
      ["Nombra tres vanguardias que influyeron en la escena.", "Futurismo, dadaísmo, expresionismo (también surrealismo, simbolismo o Bauhaus)."],
      ["Cita dos autores del teatro del absurdo.", "Samuel Beckett y Eugène Ionesco."],
      ["Nombra dos compañías del teatro independiente español.", "Els Joglars, Tábano, La Cuadra de Sevilla, Els Comediants (o La Fura dels Baus, posterior)."],
    ],
    m: [
      ["Explica qué aportaron Appia y Craig a la escena.", "Sustituyeron el decorado pintado por espacios tridimensionales y dieron a la luz un papel expresivo, creador de atmósferas."],
      ["¿Qué diferencia una compañía de teatro de grupo de una compañía comercial?", "El grupo trabaja de forma estable, investiga y crea colectivamente; la comercial monta obras para la taquilla con elencos contratados."],
      ["Define teatro posdramático y pon un ejemplo.", "Escena en la que el texto deja de ser el centro y valen igual imagen, cuerpo y presencia; por ejemplo, los montajes documentales de Rimini Protokoll."],
      ["¿Qué cambió en la escena española con la democracia?", "Desapareció la censura, se crearon el CDN, teatros públicos y festivales, y las compañías independientes se profesionalizaron."],
    ],
    a: [
      ["Analiza un espectáculo actual que hayas visto (o en vídeo) con los cuatro pasos: contexto, propuesta, lenguajes y recepción.", "Respuesta abierta. Debe aplicar los cuatro pasos con datos concretos."],
      ["Elabora una línea del tiempo ilustrada de la escena entre 1887 y hoy con ocho hitos.", "Respuesta abierta. Se valora la exactitud de las fechas y la variedad de disciplinas (teatro y danza)."],
    ],
  },
  glosario: [
    ["Naturalismo", "Estética que busca reproducir la vida real en escena."],
    ["Simbolismo", "Corriente que sugiere en lugar de mostrar."],
    ["Futurismo", "Vanguardia que exalta la máquina y la velocidad."],
    ["Happening", "Acción artística espontánea en la que participa el público."],
    ["Teatro documental", "Teatro construido con documentos y testimonios reales."],
    ["Multidisciplinar", "Que mezcla varias artes en un mismo espectáculo."],
    ["Teatro inmersivo", "Propuesta en la que el público recorre y habita el espacio."],
    ["Festival", "Programación intensa de espectáculos en un tiempo y lugar concretos."],
  ],
  situacion: {
    titulo: "Nuestro museo de la escena",
    reto: "Crear una exposición en el centro sobre la escena de los siglos XX y XXI.",
    pasos: [
      "Repartid en parejas un movimiento, una compañía o un creador.",
      "Buscad imágenes, un vídeo breve y tres datos clave.",
      "Diseñad un panel y una acción en directo de un minuto que lo represente.",
      "Organizad la visita guiada para otro grupo.",
    ],
    producto: "Exposición con paneles, código QR al vídeo y acciones breves en directo.",
    evaluacion: [
      "Los datos son correctos y están bien situados en el tiempo.",
      "El panel es claro y visual.",
      "La acción en directo expresa la estética estudiada.",
      "La visita guiada se explica con claridad.",
    ],
  },
  familias: [
    "Id juntos a ver un espectáculo contemporáneo y comentadlo después.",
    "Consultad la programación de los festivales cercanos.",
    "Pedidle que os explique qué es el teatro posdramático.",
    "Ved en familia una grabación de una obra clásica del siglo XX.",
  ],
  saberes: "Patrimonio escénico de los siglos XX y XXI: naturalismo y nacimiento del director; simbolismo y vanguardias; teatro del absurdo y documental; teatro de grupo y creación colectiva; teatro y danza en España (La Barraca, teatro independiente, CDN, festivales); escena posdramática, multidisciplinar, de sitio específico e inmersiva; análisis de espectáculos en su contexto.",
  ideas: [
    "Ver fragmentos de tres épocas y compararlos en una tabla.",
    "Línea del tiempo colectiva en la pared del aula.",
    "Debate «¿esto es teatro?» a partir de una performance.",
    "Visitar un festival o la programación de un teatro público.",
  ],
  fuentes: [
    { t: "Centro de Documentación de las Artes Escénicas y de la Música (INAEM)", url: "https://www.teatro.es" },
    { t: "Teatro posdramático, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Teatro_posdram%C3%A1tico" },
  ],
});
