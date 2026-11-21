// Cultura Audiovisual, 1º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ca");

module.exports = B.tema({
  titulo: "Historia del cine",
  minutos: 60,
  objetivos: [
    "Conocer los precursores y el nacimiento del cine a finales del siglo XIX",
    "Situar las grandes etapas: cine mudo, vanguardias, sonoro, Hollywood clásico y nuevos cines",
    "Relacionar los movimientos cinematográficos con su contexto histórico",
    "Reconocer las aportaciones del cine español y del cine digital contemporáneo",
  ],
  claves: ["cinematógrafo", "Lumière", "Méliès", "cine mudo", "expresionismo", "sistema de estudios", "neorrealismo", "nouvelle vague", "cine digital"],
  pregunta: {
    texto: "Las primeras películas duraban menos de un minuto y no tenían sonido, color ni argumento. ¿Cómo llegó el cine a ser el gran arte del siglo XX?",
    respuesta: "Inventando, generación tras generación, su propio lenguaje: el <mark>montaje</mark>, el sonido, el color, los géneros y los estilos de autor. Cada época usó el cine para contar sus sueños y sus miedos, y por eso su historia es también la historia del mundo contemporáneo.",
  },
  lectura: {
    titulo: "Un viaje a la Luna en 1902",
    html: `<p>Georges Méliès era mago antes que cineasta. Un día, mientras filmaba una calle de París, la cámara se atascó unos segundos. Al proyectar la película, un autobús se convirtió de pronto en un coche fúnebre. Méliès comprendió que el cine podía hacer magia.</p>
    <p>En 1902 rodó <i>Viaje a la Luna</i>: unos sabios disparados en una bala de cañón aterrizan en el ojo de una Luna con cara humana. Con decorados pintados, trucos y fantasía, inventó el cine de ciencia ficción y demostró que el cine no solo podía registrar la realidad, sino también <b>imaginar</b> mundos.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Precursores y nacimiento del cine",
      html: `<p>Antes del cine hubo juguetes ópticos que aprovechaban la <b>persistencia retiniana</b>: el ojo retiene una imagen una fracción de segundo, y si se suceden rápido parecen moverse. La linterna mágica, el zoótropo o las series fotográficas de Muybridge sobre un caballo al galope abrieron el camino.</p>
      <p>En 1891, Edison creó el <b>kinetoscopio</b>, que solo podía ver una persona. El 28 de diciembre de 1895, los hermanos <b>Lumière</b> hicieron en París la primera proyección pública de pago con su <b>cinematógrafo</b>, que filmaba y proyectaba. Esa fecha se considera el nacimiento del cine.</p>`,
      svg: B.cronologia("Del juguete óptico al cine", [["1834", "zoótropo"], ["1878", "Muybridge"], ["1891", "kinetoscopio"], ["1895", "Lumière"], ["1902", "Méliès"]]),
      video: { id: "LNorpMtgaVY", titulo: "El nacimiento del cine | Historia del cine", canal: "ZEPfilms", vistas: 1570881 },
    },
    {
      h: "Lumière y Méliès: realidad y fantasía",
      html: `<p>Los Lumière filmaban la <b>realidad</b>: obreros saliendo de una fábrica, un tren llegando a la estación. Son los padres del documental. Méliès, en cambio, apostó por la <b>fantasía</b>: trucos de cámara, decorados y escenas de ficción. Es el padre de los efectos especiales.</p>
      <p>Estas dos tendencias, mostrar el mundo o inventar otros, recorren toda la historia del cine.</p>`,
      svg: B.comparar("Dos caminos del cine: Lumière y Méliès", ["Lumière", ["realidad", "cámara fija", "exteriores", "documental"]], ["Méliès", ["fantasía", "trucos", "decorados", "ficción y efectos"]]),
    },
    {
      h: "El cine mudo y su lenguaje",
      html: `<p>Durante unos treinta años el cine fue mudo, aunque se acompañaba de un pianista u orquesta en la sala y de <b>intertítulos</b> con los diálogos. D. W. Griffith sistematizó el montaje y la escala de planos (<i>El nacimiento de una nación</i>, 1915), con un gran avance técnico y un contenido racista hoy muy criticado.</p>
      <p>La comedia vivió su edad de oro con <b>Charles Chaplin</b> y su personaje Charlot, y con Buster Keaton. En la Unión Soviética, <b>Eisenstein</b> convirtió el montaje en un arma de ideas (<i>El acorazado Potemkin</i>, 1925).</p>`,
      svg: B.cajas("Grandes figuras del cine mudo", [["Griffith", "montaje narrativo"], ["Chaplin", "comedia y crítica"], ["Eisenstein", "montaje de ideas"], ["Keaton", "acción y humor"]]),
    },
    {
      h: "Las vanguardias y el expresionismo",
      html: `<p>En los años veinte, el cine se unió a las vanguardias artísticas. El <b>expresionismo alemán</b> usó decorados deformados, sombras violentas y personajes inquietantes para expresar la angustia de la posguerra: <i>El gabinete del doctor Caligari</i> (1920), <i>Nosferatu</i> (1922) o <i>Metrópolis</i> (1927), de Fritz Lang.</p>
      <p>El <b>surrealismo</b> llevó a la pantalla los sueños y el inconsciente: Luis Buñuel y Salvador Dalí rodaron <i>Un perro andaluz</i> (1929), con imágenes tan impactantes como un ojo cortado por una navaja.</p>`,
      svg: B.cajas("Cine de vanguardia", [["Expresionismo", "sombras, angustia|Caligari, Nosferatu"], ["Surrealismo", "sueños|Buñuel y Dalí"]], { cols: 2 }),
      video: { id: "Klv4kDQ0IO4", titulo: "El expresionismo alemán | Historia del cine", canal: "ZEPfilms", vistas: 497800 },
    },
    {
      h: "El sonoro y el Hollywood clásico",
      html: `<p>En 1927, <i>El cantante de jazz</i> introdujo diálogos sincronizados y el sonido se impuso en pocos años. Hollywood organizó el <b>sistema de estudios</b> (Paramount, MGM, Warner…), con actores contratados, el <b>star system</b>, y una producción en cadena basada en los <b>géneros</b>: western, musical, cine negro, comedia, melodrama, terror.</p>
      <p>Llegó el color con el Technicolor (<i>Lo que el viento se llevó</i>, 1939) y obras maestras como <i>Ciudadano Kane</i> (1941) de Orson Welles, que renovó la profundidad de campo y la narración. Alfred Hitchcock se convirtió en el maestro del suspense.</p>`,
      svg: B.estrella("Géneros del Hollywood clásico", "Géneros", ["Western", "Musical", "Cine negro", "Comedia", "Melodrama", "Terror"]),
    },
    {
      h: "Los nuevos cines",
      html: `<p>Tras la Segunda Guerra Mundial, el <b>neorrealismo italiano</b> rodó en las calles, con actores no profesionales y temas sociales: <i>Ladrón de bicicletas</i> (1948) de De Sica.</p>
      <p>En los años sesenta, la <b>nouvelle vague</b> francesa (Godard, Truffaut) defendió el cine de autor, la cámara ligera y la libertad de montaje. Después llegaron el <b>nuevo Hollywood</b> (Coppola, Scorsese, Spielberg), el cine de Japón (Kurosawa), de la India (Bollywood) y de muchos otros países que ampliaron la mirada del cine.</p>`,
      svg: B.cronologia("Los nuevos cines tras 1945", [["1945", "neorrealismo"], ["1959", "nouvelle vague"], ["1967", "nuevo Hollywood"], ["1977", "taquillazos"]]),
    },
    {
      h: "El cine español",
      html: `<p>El cine español nace en 1896. Segundo de Chomón fue un pionero de los trucos comparable a Méliès. <b>Luis Buñuel</b> es una figura universal (<i>Viridiana</i>, 1961). Durante el franquismo, la censura condicionó el cine, pero directores como Berlanga (<i>Bienvenido, Mister Marshall</i>, 1953) o Bardem hicieron crítica con humor e ironía.</p>
      <p>Con la democracia, Pedro <b>Almodóvar</b> se convirtió en referente internacional; Alejandro Amenábar, Isabel Coixet, J. A. Bayona o Carla Simón (<i>Alcarràs</i>, Oso de Oro 2022) muestran la diversidad del cine actual. Los premios <b>Goya</b> lo celebran desde 1987.</p>`,
      svg: B.cajas("Hitos del cine español", [["Buñuel", "surrealismo, Viridiana"], ["Berlanga", "humor crítico"], ["Almodóvar", "dos Óscar"], ["Carla Simón", "Oso de Oro 2022"]]),
    },
    {
      h: "Del celuloide al streaming",
      html: `<p>Desde los años noventa, la <b>tecnología digital</b> transformó el cine: efectos generados por ordenador (<i>Parque Jurásico</i>, 1993), animación 3D (<i>Toy Story</i>, 1995), cámaras digitales y proyección sin película. Hoy cualquiera puede rodar en alta calidad con un móvil.</p>
      <p>Las <b>plataformas de streaming</b> han cambiado cómo vemos y producimos películas y series, y la <b>inteligencia artificial</b> abre nuevos debates sobre autoría y empleo. Aun así, la experiencia colectiva de la sala oscura sigue siendo única.</p>`,
      svg: B.flujo("Cambios del cine digital", ["Efectos por ordenador (1993)", "Animación 3D (1995)", "Cámaras y proyección digital", "Plataformas de streaming e IA"]),
    },
  ],
  figura: {
    titulo: "El cine en cuatro épocas",
    items: [["Orígenes", "1895", "Lumière", "Méliès"], ["Mudo", "1915-27", "Chaplin, Griffith", "expresionismo"], ["Clásico", "1927-60", "sonoro, estudios", "géneros"], ["Moderno", "1945-hoy", "nuevos cines", "digital"]],
  },
  video: { id: "WLzaRpo1loM", titulo: "La historia del cine en 8 minutos", canal: "MurdockPresenta", vistas: 258436 },
  quiz: [
    ["El fenómeno que permite ver movimiento en imágenes sucesivas se llama…", ["iconicidad", "persistencia retiniana", "raccord", "montaje"], 1, "El ojo retiene la imagen una fracción de segundo."],
    ["¿Cuándo se hizo la primera proyección pública de los Lumière?", ["1891", "1895", "1902", "1927"], 1, "28 de diciembre de 1895, en París."],
    ["Méliès es considerado el padre de…", ["el documental", "los efectos especiales", "el sonoro", "el neorrealismo"], 1, "Trucos y fantasía, como Viaje a la Luna."],
    ["Los textos que aparecían entre planos en el cine mudo se llaman…", ["subtítulos", "intertítulos", "cartelas de cómic", "créditos"], 1, "Contenían diálogos o explicaciones."],
    ["Nosferatu y El gabinete del doctor Caligari pertenecen al…", ["neorrealismo", "expresionismo alemán", "surrealismo", "western"], 1, "Sombras y decorados deformados."],
    ["Un perro andaluz fue obra de…", ["Chaplin", "Buñuel y Dalí", "Eisenstein", "Hitchcock"], 1, "Película surrealista de 1929."],
    ["La primera gran película sonora fue…", ["Metrópolis", "El cantante de jazz", "Ciudadano Kane", "Toy Story"], 1, "Estrenada en 1927."],
    ["El neorrealismo italiano se caracteriza por…", ["grandes estudios", "rodaje en la calle y temas sociales", "superhéroes", "animación"], 1, "Ladrón de bicicletas es su ejemplo."],
    ["La nouvelle vague fue un movimiento…", ["español", "francés", "estadounidense", "japonés"], 1, "Godard y Truffaut."],
    ["¿Qué película de 1995 fue el primer largometraje de animación 3D?", ["Parque Jurásico", "Toy Story", "Avatar", "Shrek"], 1, "Producida por Pixar."],
  ],
  examen: [
    ["La diferencia principal entre Lumière y Méliès es que…", ["Lumière usaba color", "Lumière registraba la realidad y Méliès creaba fantasía", "Méliès era estadounidense", "no hay diferencia"], 1, "Documental frente a ficción."],
    ["El sistema de estudios de Hollywood se basaba en…", ["actores no profesionales", "producción en cadena, estrellas y géneros", "rodar sin guion", "cine de autor"], 1, "Era una industria muy organizada."],
    ["¿Qué contexto explica el expresionismo alemán?", ["La prosperidad", "La angustia de la posguerra tras la Primera Guerra Mundial", "La Guerra Fría", "La llegada del sonido"], 1, "Reflejaba miedo e inestabilidad."],
    ["¿Qué director español usó el humor para criticar la España franquista?", ["Almodóvar", "Berlanga", "Amenábar", "Bayona"], 1, "Bienvenido, Mister Marshall."],
    ["Un rasgo de la nouvelle vague es…", ["grandes decorados de estudio", "cámara ligera y libertad de montaje", "solo cine mudo", "efectos digitales"], 1, "Defendía el cine de autor."],
  ],
  feynman: ["Por qué se considera 1895 el nacimiento del cine", "Dos caminos: Lumière y Méliès", "Qué aportó el expresionismo alemán", "Cómo ha cambiado el cine con lo digital"],
  mapa: ["HISTORIA DEL CINE", [["Orígenes", "Lumière · Méliès"], ["Mudo", "Griffith · Chaplin · vanguardias"], ["Clásico", "sonoro · estudios · géneros"], ["Moderno", "nuevos cines · digital"]]],
  tarjetas: [
    ["Cinematógrafo", "Aparato de los Lumière que filmaba y proyectaba (1895)."],
    ["Méliès", "Pionero de la ficción y los efectos especiales: Viaje a la Luna (1902)."],
    ["Cine mudo", "Cine sin sonido sincronizado, con intertítulos y música en directo (hasta 1927)."],
    ["Expresionismo alemán", "Sombras, decorados deformados y angustia: Caligari, Nosferatu."],
    ["Star system", "Sistema de Hollywood basado en estrellas bajo contrato."],
    ["Neorrealismo", "Cine italiano de posguerra rodado en la calle con temas sociales."],
    ["Nouvelle vague", "Cine francés de autor de los años sesenta."],
    ["Cine digital", "Producción y proyección con medios digitales y efectos por ordenador."],
  ],
  ejemplos: [
    ["Ordena cronológicamente: nouvelle vague, Viaje a la Luna, El cantante de jazz, Toy Story, Nosferatu.", ["Viaje a la Luna (1902).", "Nosferatu (1922).", "El cantante de jazz (1927).", "Nouvelle vague (finales de los cincuenta y sesenta).", "Toy Story (1995)."], "Méliès → expresionismo → sonoro → nouvelle vague → digital."],
    ["Explica por qué el neorrealismo rodaba en la calle con actores no profesionales.", ["Italia salía de la guerra, con estudios destruidos y poco dinero.", "Los cineastas querían mostrar la realidad social: pobreza, paro.", "La calle y la gente real daban autenticidad."], "Por necesidad económica y por voluntad de mostrar la verdad social."],
    ["Relaciona cada movimiento con su rasgo: expresionismo, surrealismo, cine clásico.", ["Expresionismo: sombras y decorados deformados para expresar angustia.", "Surrealismo: lógica de los sueños e imágenes impactantes.", "Cine clásico: narración clara, géneros y estrellas."], "Cada estilo responde a una forma distinta de entender el cine."],
  ],
  errores: [
    "Pensar que el cine mudo era silencioso: se acompañaba de música en directo.",
    "Atribuir la invención del cine solo a Edison: el kinetoscopio no proyectaba en público.",
    "Creer que el cine clásico es «antiguo y aburrido» sin conocer su influencia actual.",
    "Confundir neorrealismo (Italia) con nouvelle vague (Francia).",
  ],
  ejercicios: {
    b: [
      ["¿Qué es la persistencia retiniana?", "La capacidad del ojo de retener una imagen una fracción de segundo, lo que permite percibir movimiento en imágenes sucesivas."],
      ["¿Qué pasó el 28 de diciembre de 1895?", "Los hermanos Lumière hicieron en París la primera proyección pública de pago con el cinematógrafo."],
      ["Cita tres géneros del Hollywood clásico.", "Western, musical y cine negro (también comedia, melodrama, terror)."],
      ["Nombra tres directores españoles y una película de cada uno.", "Buñuel (Viridiana), Berlanga (Bienvenido, Mister Marshall), Almodóvar (Todo sobre mi madre)."],
    ],
    m: [
      ["Compara el cine mudo y el sonoro: ¿qué ganó y qué perdió el cine con el sonido?", "Ganó diálogos, música y efectos sincronizados y más realismo; al principio perdió libertad de cámara y parte de la expresividad visual y de la comedia física."],
      ["¿Por qué el expresionismo usaba decorados deformados?", "Para expresar visualmente estados de ánimo como la angustia, la locura o el miedo, más que representar la realidad."],
      ["Explica qué aportó Eisenstein al lenguaje del cine.", "El montaje de atracciones o intelectual: unir planos para producir ideas y emociones en el espectador."],
      ["¿Cómo ha cambiado el streaming la forma de ver cine?", "Se ve a la carta en casa o en el móvil, con series y películas producidas por las plataformas, menos visitas a la sala y nuevas formas de financiar."],
    ],
    a: [
      ["Elige un movimiento cinematográfico y relaciónalo con su contexto histórico con ejemplos.", "Respuesta abierta. Por ejemplo, neorrealismo: posguerra italiana, pobreza y estudios destruidos; temas sociales, rodaje en la calle, Ladrón de bicicletas."],
      ["Ve Viaje a la Luna (1902) y analiza sus trucos y su puesta en escena.", "Respuesta abierta: cámara fija como en el teatro, decorados pintados, sustituciones por parada de cámara, sobreimpresiones y fantasía narrativa."],
    ],
  },
  glosario: [
    ["Kinetoscopio", "Aparato de Edison para ver películas de forma individual."],
    ["Intertítulo", "Rótulo con texto entre planos en el cine mudo."],
    ["Vanguardias", "Movimientos artísticos de ruptura de principios del siglo XX."],
    ["Technicolor", "Sistema de color usado por Hollywood desde los años treinta."],
    ["Sistema de estudios", "Organización industrial de Hollywood en grandes productoras."],
    ["Cine de autor", "Cine que refleja el estilo personal del director."],
    ["Taquillazo", "Película de gran presupuesto pensada para el éxito masivo."],
    ["Streaming", "Emisión de vídeo por internet sin necesidad de descargarlo."],
    ["Premios Goya", "Premios anuales de la Academia de Cine de España."],
  ],
  situacion: {
    titulo: "Cinefórum de la historia del cine",
    reto: "Organizar en clase un cinefórum con fragmentos de cinco épocas del cine.",
    pasos: [
      "Formad grupos y asignad a cada uno una época (orígenes, mudo, clásico, nuevos cines, digital).",
      "Elegid un fragmento de tres a cinco minutos y preparad su contexto.",
      "Presentad el fragmento señalando dos rasgos de estilo y uno del contexto.",
      "Debatid entre todos qué época os ha sorprendido más y por qué.",
    ],
    producto: "Presentación breve con fragmento, ficha y debate.",
    evaluacion: [
      "La ficha sitúa con precisión obra, autor y fecha.",
      "Se identifican rasgos de estilo con vocabulario del tema.",
      "Se relaciona el fragmento con su contexto histórico.",
      "Se participa en el debate con argumentos.",
    ],
  },
  familias: [
    "Ved juntos una película de Chaplin y comentad si el humor sigue funcionando.",
    "Contadle cuál fue la primera película que visteis en el cine.",
    "Buscad una película española premiada en los Goya y vedla en familia.",
    "Comparad una película clásica con su versión moderna.",
  ],
  saberes: "Historia del cine: precursores y nacimiento, Lumière y Méliès, cine mudo y su lenguaje, vanguardias (expresionismo, surrealismo, cine soviético), sonoro y Hollywood clásico, nuevos cines, cine español y transformación digital.",
  ideas: [
    "Construir un zoótropo de papel para explicar la persistencia retiniana.",
    "Línea del tiempo mural con un fotograma por movimiento.",
    "Proyectar La llegada de un tren y Viaje a la Luna y comparar.",
    "Investigar la historia de los cines del propio pueblo o barrio.",
  ],
  fuentes: [
    { t: "Historia del cine, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Historia_del_cine" },
    { t: "Filmoteca Española", url: "https://www.cultura.gob.es/cultura/areas/cine/mc/fe/portada.html" },
  ],
});
