// Diseño, 2º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "Historia del diseño: del estilo internacional a hoy",
  minutos: 60,
  objetivos: [
    "Reconocer el Art Déco, el estilo internacional y el diseño orgánico de mediados del siglo XX",
    "Explicar la escuela de Ulm, el estilo suizo y el buen diseño de Braun",
    "Distinguir el pop y la posmodernidad (Memphis) del funcionalismo",
    "Situar el diseño español contemporáneo y las tendencias actuales",
  ],
  claves: ["Art Déco", "streamline", "diseño orgánico", "estilo suizo", "Ulm", "pop", "Memphis", "diseño español"],
  pregunta: {
    texto: "¿Por qué los objetos de tus abuelos, tus padres y los tuyos tienen aspectos tan distintos?",
    respuesta: "Porque cada época tiene sus <mark>materiales, técnicas y valores</mark>: el plástico de los sesenta, la ironía de los ochenta o la pantalla táctil de hoy cambian la forma de las cosas.",
  },
  lectura: {
    titulo: "Una silla para todos",
    html: `<p>En 1950 los diseñadores estadounidenses Charles y Ray Eames presentaron una silla de una sola pieza de plástico reforzado con fibra de vidrio, con formas suaves que se adaptaban al cuerpo. Era cómoda, ligera, apilable y barata de fabricar.</p>
    <p>Aquella silla resumía el sueño de la posguerra: que el buen diseño moderno llegara a millones de hogares gracias a los materiales nuevos. Setenta años después se sigue fabricando y la has visto en cafeterías y oficinas. A lo largo del siglo XX ese sueño se cumplió, se discutió y se volvió del revés varias veces. Este tema cuenta cómo.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "Art Déco y aerodinamismo (1920-1940)",
      html: `<p>Mientras la Bauhaus defendía la sobriedad, el <b>Art Déco</b> triunfó en el lujo de entreguerras. Tras la Exposición de Artes Decorativas de París (1925) se extendió una estética de formas geométricas, simetría, rayos de sol escalonados y materiales caros: lacas, cromados, maderas exóticas. Se ve en rascacielos como el Chrysler, en transatlánticos y en los carteles de Cassandre.</p>
      <p>En Estados Unidos, durante la crisis de 1929, los diseñadores industriales usaron el <b>streamline</b> o aerodinamismo: formas redondeadas y alargadas que sugerían velocidad, aplicadas a trenes, pero también a neveras y sacapuntas, para hacer más atractivos los productos y vender más. Nace el diseñador como profesional al servicio del mercado (Raymond Loewy).</p>`,
      svg: B.comparar("Dos estilos de entreguerras", ["Art Déco", ["geometría y lujo", "simetría y rayos", "cromados y lacas", "París, 1925"]], ["Streamline", ["formas aerodinámicas", "sugiere velocidad", "trenes y neveras", "EE. UU., años 30"]]),
    },
    {
      h: "Estilo internacional y diseño orgánico (1945-1960)",
      html: `<p>Tras la Segunda Guerra Mundial, el funcionalismo de la Bauhaus se convirtió en <b>estilo internacional</b>: edificios de vidrio y acero y muebles de líneas puras para empresas y oficinas en todo el mundo.</p>
      <p>A la vez surgió un <b>diseño orgánico</b> más cálido, que aprovechó la madera curvada, el contrachapado y los primeros plásticos. Destacan los <b>Eames</b>, Eero Saarinen (silla Tulip) y el <b>diseño escandinavo</b> de Arne Jacobsen y Alvar Aalto, con formas suaves, materiales naturales y vocación democrática. En Italia, empresas como Olivetti o Vespa unieron industria, cultura y belleza.</p>`,
      svg: B.cajas("Posguerra", [["Internacional", "vidrio, acero|y línea pura"], ["Orgánico", "curva suave|contrachapado"], ["Escandinavo", "madera, calidez|para todos"], ["Italiano", "Olivetti, Vespa|belleza industrial"]]),
    },
    {
      h: "Ulm, el estilo suizo y el buen diseño",
      html: `<p>En 1953 se fundó en Alemania la <b>Escuela de Ulm</b>, heredera racional de la Bauhaus. Defendía un diseño basado en la ciencia, la ergonomía y el método, y colaboró con la empresa <b>Braun</b>, donde <b>Dieter Rams</b> creó radios y tocadiscos de una sobriedad ejemplar.</p>
      <p>En el diseño gráfico triunfó el <b>estilo tipográfico internacional</b> o <b>estilo suizo</b>: retícula, tipografía de palo seco (Helvetica, Univers), composición asimétrica y fotografía objetiva. Josef Müller-Brockmann es su gran referente. En los mismos años nació la <b>identidad corporativa</b> moderna: IBM, Lufthansa o los Juegos Olímpicos de 1972.</p>`,
      svg: B.estrella("El estilo suizo", "Estilo suizo", ["Retícula", "Palo seco", "Asimetría", "Fotografía", "Claridad"]),
      video: { id: "4Cxr2h_wE34", titulo: "Los 10 principios del buen diseño", canal: "Daniel Titchener", vistas: 120436 },
    },
    {
      h: "Pop y diseño de los sesenta",
      html: `<p>En los años sesenta, la sociedad de consumo y la cultura juvenil rompieron con la seriedad funcionalista. El <b>pop</b> llevó al diseño colores vivos, plástico brillante, objetos de usar y tirar, muebles hinchables y referencias al cómic y la publicidad.</p>
      <p>Diseñadores como Verner Panton (silla de plástico de una sola pieza) o el italiano Joe Colombo imaginaron espacios futuristas inspirados en la carrera espacial. En gráfica destacaron los carteles psicodélicos y el estudio Push Pin. El diseño empezó a valorar la <b>diversión y la emoción</b> tanto como la función.</p>`,
      svg: B.cajas("Rasgos del pop", [["Color", "vivo y|saturado"], ["Plástico", "brillante|y barato"], ["Juego", "humor|y sorpresa"], ["Efímero", "usar|y tirar"]]),
    },
    {
      h: "Posmodernidad y Memphis",
      html: `<p>En 1981 el italiano <b>Ettore Sottsass</b> fundó en Milán el grupo <b>Memphis</b>. Sus muebles mezclaban formas geométricas sin lógica funcional, colores chillones y laminados con estampados; una estantería podía parecer un muñeco. Era una provocación contra la frase «la forma sigue a la función».</p>
      <p>La <b>posmodernidad</b> defendía que el diseño es un lenguaje que comunica, y que puede citar la historia, usar la ironía y el ornamento. En gráfica, el diseño se volvió más libre y desordenado, ayudado por los primeros ordenadores personales. La respuesta llegó en los noventa con el <b>minimalismo</b>, que volvió a la forma esencial, aunque ya sin la fe absoluta en una única verdad.</p>`,
      svg: B.comparar("Dos actitudes opuestas", ["Funcionalismo", ["forma sigue a función", "sin adornos", "neutralidad", "una sola verdad"]], ["Posmodernidad", ["forma que comunica", "ornamento e ironía", "color y cita", "muchas verdades"]]),
    },
    {
      h: "El diseño español",
      html: `<p>En España el diseño moderno se desarrolló con fuerza desde los años cincuenta en Barcelona, con la asociación ADI-FAD y los premios Delta. Destacan <b>André Ricard</b> (la antorcha olímpica de 1992), <b>Miguel Milá</b> (lámpara TMC), <b>Óscar Tusquets</b> y, en gráfica, <b>Cruz Novillo</b> (logotipos de Correos, Renfe o Repsol) y <b>Javier Mariscal</b> (Cobi).</p>
      <p>Los Juegos Olímpicos de Barcelona 1992 fueron un gran escaparate. Hoy brillan nombres como <b>Patricia Urquiola</b>, Jaime Hayón o Martí Guixé, y en moda Balenciaga, Zara o Desigual. El Premio Nacional de Diseño reconoce cada año a profesionales y empresas.</p>`,
      svg: B.cronologia("Diseño español", [["1960", "ADI-FAD"], ["1961", "lámpara TMC"], ["1977", "logo de Correos"], ["1988", "Cobi"], ["1992", "Barcelona 92"]]),
    },
    {
      h: "Tendencias actuales",
      html: `<p>Desde el año 2000 el diseño se ha <b>digitalizado</b>: interfaces, apps, tipografías variables, impresión 3D y diseño generativo con inteligencia artificial. El diseñador ya no solo da forma a objetos, sino a <b>experiencias</b> y servicios.</p>
      <p>Al mismo tiempo crecen la <b>sostenibilidad</b> (ecodiseño, economía circular), la <b>inclusión</b> (diseño para todos), el diseño social y la recuperación de la artesanía local. Conviven el minimalismo de las grandes marcas tecnológicas con estéticas retro y maximalistas en redes sociales. La historia sigue escribiéndose y, en parte, la escribirás tú.</p>`,
      svg: B.estrella("Hoy", "Diseño actual", ["Digital", "Sostenible", "Inclusivo", "Social", "Artesanía", "IA"]),
    },
  ],
  figura: {
    titulo: "Un siglo de estilos",
    items: [["Déco", "◆", "geometría", "y lujo"], ["Orgánico", "◠", "curva y", "plástico"], ["Suizo", "▦", "retícula y", "Helvetica"], ["Memphis", "✱", "color e", "ironía"]],
  },
  video: { id: "8fWGibiazpM", titulo: "Historia del diseño gráfico: lo que todo creativo debe conocer", canal: "Edutin Academy", vistas: 14472 },
  quiz: [
    ["El Art Déco se caracteriza por…", ["curvas vegetales", "geometría, simetría y materiales lujosos", "plástico barato", "retículas suizas"], 1, "París, 1925."],
    ["El streamline aplicaba formas aerodinámicas…", ["solo a aviones", "también a objetos quietos como neveras, para vender más", "a carteles", "a la ropa"], 1, "Estética de la velocidad."],
    ["Los Eames son conocidos por…", ["sus carteles", "sus muebles de contrachapado y plástico moldeado", "fundar la Bauhaus", "Memphis"], 1, "Diseño orgánico estadounidense."],
    ["La Escuela de Ulm colaboró con…", ["Braun", "Zara", "Apple", "Olivetti"], 0, "Dieter Rams."],
    ["El estilo suizo usa…", ["letras decoradas", "retícula y tipografía de palo seco", "colores fluorescentes", "ilustración ingenua"], 1, "Helvetica, Univers."],
    ["El pop introdujo en el diseño…", ["sobriedad", "color, plástico, humor y objetos efímeros", "madera noble", "la retícula"], 1, "Años sesenta."],
    ["Memphis fue fundado por…", ["Ettore Sottsass", "Dieter Rams", "Arne Jacobsen", "Cruz Novillo"], 0, "Milán, 1981."],
    ["La posmodernidad defendía que…", ["la forma sigue siempre a la función", "el diseño es un lenguaje que puede usar ironía y ornamento", "hay que prohibir el color", "solo vale la industria"], 1, "Rechazo del dogma funcionalista."],
    ["¿Quién diseñó el logotipo de Correos?", ["Javier Mariscal", "Cruz Novillo", "Patricia Urquiola", "André Ricard"], 1, "1977."],
    ["Una tendencia actual del diseño es…", ["abandonar la sostenibilidad", "el diseño de experiencias digitales y sostenibles", "volver solo al Art Déco", "dejar de pensar en el usuario"], 1, "UX, ecodiseño, inclusión."],
  ],
  examen: [
    ["Un mueble de 1982 con patas de colores distintos y laminado con estampado de manchas es…", ["Bauhaus", "Memphis", "escandinavo", "suizo"], 1, "Posmodernidad."],
    ["Un cartel de 1960 con retícula clara, Helvetica y una foto en blanco y negro pertenece al…", ["estilo suizo", "Art Nouveau", "pop psicodélico", "Art Déco"], 0, "Müller-Brockmann."],
    ["Ordena: Memphis, Bauhaus, Ulm.", ["Bauhaus, Ulm, Memphis", "Ulm, Bauhaus, Memphis", "Memphis, Ulm, Bauhaus", "Bauhaus, Memphis, Ulm"], 0, "1919, 1953, 1981."],
    ["¿Qué acontecimiento fue un escaparate del diseño español?", ["La Expo de 1929", "Los Juegos Olímpicos de Barcelona 1992", "El Mundial de 2010", "Ninguno"], 1, "Cobi y la antorcha."],
    ["¿Qué tienen en común el streamline y el pop?", ["Ambos rechazan vender", "Ambos ligan el diseño al consumo y al atractivo comercial", "Ambos usan solo madera", "Nada"], 1, "Diseño y mercado."],
  ],
  feynman: ["Qué diferencia el Art Déco del streamline", "Qué es el estilo suizo y por qué sigue vigente", "Por qué Memphis fue una provocación", "Tres nombres del diseño español y su obra"],
  mapa: ["DE 1920 A HOY", [["Entreguerras", "Art Déco · streamline"], ["Posguerra", "internacional · orgánico · Ulm · suizo"], ["Pop y posmoderno", "plástico · Memphis · ironía"], ["Hoy", "digital · sostenible · inclusivo · España"]]],
  tarjetas: [
    ["Art Déco", "Estilo de entreguerras de geometría, simetría y lujo."],
    ["Streamline", "Estética aerodinámica aplicada a productos en EE. UU."],
    ["Diseño orgánico", "Formas suaves y materiales nuevos de posguerra (Eames, Saarinen)."],
    ["Escuela de Ulm", "Escuela racionalista alemana (1953) ligada a Braun."],
    ["Estilo suizo", "Diseño gráfico de retícula, palo seco y claridad."],
    ["Pop", "Diseño de los sesenta: color, plástico, humor y consumo."],
    ["Memphis", "Grupo posmoderno de Sottsass (1981) de color e ironía."],
    ["Cruz Novillo", "Diseñador gráfico español, autor de logotipos como Correos o Renfe."],
  ],
  ejemplos: [
    ["Clasifica una radio de 1958 de caja blanca, rejilla perforada y mandos mínimos.", ["Forma geométrica y sobria.", "Sin adornos; cada elemento tiene una función.", "Época de posguerra en Alemania."], "Buen diseño de Braun y la Escuela de Ulm (Dieter Rams)."],
    ["Analiza por qué una tostadora streamline de 1935 tiene forma de bala.", ["La forma aerodinámica no mejora tostar.", "Sugiere modernidad y velocidad.", "Busca hacer el producto más deseable en plena crisis."], "La forma sirve al marketing, no a la función."],
    ["Compara la silla Panton (1967) y la silla Tulip (1957).", ["Ambas de formas curvas y sin patas tradicionales.", "Tulip: pie central, estética orgánica y elegante.", "Panton: una pieza de plástico, color vivo, espíritu pop."], "Del orgánico de posguerra al pop."],
  ],
  errores: [
    "Confundir Art Déco (geometría) con Art Nouveau (curva).",
    "Pensar que el funcionalismo desapareció: sigue vivo en el minimalismo.",
    "Creer que Memphis buscaba la comodidad: buscaba provocar y comunicar.",
    "Olvidar el diseño español y sus figuras.",
  ],
  ejercicios: {
    b: [
      ["Cita dos rasgos del Art Déco y un ejemplo.", "Geometría y simetría, materiales lujosos; el edificio Chrysler o los carteles de Cassandre."],
      ["¿Qué es el estilo suizo?", "Diseño gráfico de los años 50-60 basado en la retícula, la tipografía de palo seco, la asimetría y la claridad."],
      ["¿Qué grupo fundó Sottsass y en qué año?", "Memphis, en Milán, en 1981."],
      ["Nombra tres diseñadores españoles.", "André Ricard, Miguel Milá, Cruz Novillo, Javier Mariscal, Patricia Urquiola."],
    ],
    m: [
      ["Explica la relación entre la Bauhaus y la Escuela de Ulm.", "Ulm continuó la Bauhaus con un enfoque más científico y metodológico; su primer director, Max Bill, fue alumno de la Bauhaus."],
      ["¿Por qué se dice que el pop y la posmodernidad reaccionaron contra el funcionalismo?", "Rechazaron la idea de una forma neutra y única: añadieron color, humor, ornamento y significado."],
      ["Relaciona el diseño orgánico con los materiales de su época.", "El contrachapado moldeado y el plástico reforzado permitieron curvas que se adaptan al cuerpo."],
      ["Describe dos tendencias actuales del diseño.", "Digitalización (UX, IA, impresión 3D) y sostenibilidad (ecodiseño, economía circular); también inclusión y diseño social."],
    ],
    a: [
      ["Busca un objeto que tengas en casa y razona a qué corriente se parece más.", "Respuesta abierta: rasgos formales, materiales y época argumentados."],
      ["Diseña el cartel de un concierto en dos versiones: estilo suizo y Memphis.", "Respuesta abierta: retícula y palo seco frente a color, formas libres e ironía."],
    ],
  },
  glosario: [
    ["Contrachapado", "Tablero de láminas de madera encoladas que puede curvarse."],
    ["Palo seco", "Tipografía sin remates o serifas."],
    ["Retícula", "Estructura de columnas y filas que ordena una página."],
    ["Minimalismo", "Tendencia a reducir la forma a lo esencial."],
    ["Laminado plástico", "Material de revestimiento usado por Memphis con estampados."],
    ["Diseño generativo", "Diseño creado con algoritmos a partir de reglas."],
    ["Premios Delta", "Premios de diseño industrial de la ADI-FAD de Barcelona."],
    ["Diseño escandinavo", "Diseño nórdico de formas suaves, madera y vocación social."],
  ],
  situacion: {
    titulo: "La silla del siglo",
    reto: "Elegir la silla más representativa de cada década desde 1920 y defenderla.",
    pasos: [
      "Cada grupo investiga dos décadas y elige una silla por década.",
      "Analizad forma, material, autor y relación con su época.",
      "Preparad una ficha visual con imagen y dibujo propio.",
      "Votad entre todos «la silla del siglo» tras escuchar las defensas.",
    ],
    producto: "Galería de sillas por décadas con fichas y una votación final argumentada.",
    evaluacion: [
      "La silla elegida representa bien su época.",
      "El análisis relaciona forma, material y contexto.",
      "La defensa oral es clara y argumentada.",
    ],
  },
  familias: [
    "Buscad en casa algún objeto de los años 60, 70 u 80 y contad su historia.",
    "Comparad el logo de una marca antigua con su versión actual.",
    "Mirad juntos un catálogo de muebles y descubrid estilos del tema.",
    "Visitad el Museu del Disseny de Barcelona o una exposición de diseño.",
  ],
  saberes: "Evolución del diseño en los siglos XX y XXI: Art Déco y streamline; estilo internacional, diseño orgánico y escandinavo; Escuela de Ulm y estilo tipográfico internacional; pop, posmodernidad y Memphis; diseño español; tendencias actuales (digital, sostenible, inclusivo)",
  ideas: [
    "Completar la línea del tiempo mural del tema anterior.",
    "Juego de identificación de estilos con imágenes de objetos.",
    "Visita virtual al Museu del Disseny de Barcelona.",
    "Investigación sobre un diseñador español premiado.",
  ],
  fuentes: [
    { t: "Historia del diseño industrial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dise%C3%B1o_industrial" },
    { t: "Museu del Disseny de Barcelona", url: "https://ajuntament.barcelona.cat/museudeldisseny/es" },
  ],
});
