// Fundamentos Artísticos 2º Bachillerato · Tema 13. Del fauvismo al expresionismo y de Dadá a Fluxus. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Del fauvismo al expresionismo y de Dadá a Fluxus",
  saber: ["D"],
  objetivos: [
    "Explicar el fauvismo y su uso libre y arbitrario del color",
    "Caracterizar el expresionismo alemán y sus grupos Die Brücke y Der Blaue Reiter",
    "Reconocer la pervivencia del expresionismo figurativo en el siglo XX",
    "Explicar el dadaísmo como rechazo del arte y de la sociedad de su tiempo",
    "Relacionar Dadá con el arte intermedia de Fluxus y las acciones de los años sesenta",
  ],
  claves: ["fauvismo", "color arbitrario", "expresionismo", "Die Brücke", "Der Blaue Reiter", "xilografía", "arte degenerado", "nueva figuración", "dadaísmo", "azar", "fotomontaje", "Fluxus", "intermedia", "happening"],
  pregunta: {
    texto: "¿Por qué un crítico llamó «fieras» a unos pintores, y otros artistas eligieron para su grupo una palabra sin sentido, «Dadá»?",
    respuesta: "En el Salón de Otoño de París de 1905, el crítico Louis Vauxcelles vio una escultura clásica rodeada de cuadros de colores violentos y exclamó: «¡Donatello entre las fieras!». Así nació el nombre de <mark>fauvismo</mark> (de <i>fauve</i>, fiera). Once años después, en Zúrich, en plena Primera Guerra Mundial, un grupo de artistas abrió un diccionario al azar y eligió <b>Dadá</b>, una palabra que no significaba casi nada. Si el mundo se había vuelto loco con la guerra, ellos responderían con el absurdo. El color y el escándalo fueron dos maneras de romper con todo.",
  },
  lectura: {
    titulo: "El grito",
    html: `<p>«Caminaba por un sendero con dos amigos. El sol se ponía. De repente el cielo se volvió rojo como la sangre. Me detuve, me apoyé en la valla, cansado hasta la muerte. Sobre el fiordo azul negro y la ciudad había sangre y lenguas de fuego. Mis amigos siguieron andando y yo me quedé allí, temblando de miedo. Y sentí un grito infinito que atravesaba la naturaleza.»</p><p>Así recordaba el noruego Edvard Munch el momento que le inspiró <i>El grito</i> (1893). La figura sin pelo, con las manos en la cara, bajo un cielo de remolinos naranjas, no es un retrato de nadie: es la angustia hecha imagen. Ese cuadro anunciaba el expresionismo.</p>`,
  },
  bloques: [
    { h: "El fauvismo: la libertad del color", p: [
      "El <mark>fauvismo</mark> (1905-1908) fue la primera vanguardia del siglo XX. Su líder, <b>Henri Matisse</b>, junto a André Derain y Maurice de Vlaminck, usó el color de forma <b>arbitraria</b>: un rostro con una raya verde, árboles rojos, un mar amarillo. El color ya no describe la realidad: expresa emociones y construye el cuadro.",
      "Aplicaban colores puros, directamente del tubo, en grandes manchas planas, con pinceladas visibles y contornos marcados, influidos por Van Gogh y Gauguin. Matisse buscaba un arte de equilibrio y alegría, «como un buen sillón». Sus obras posteriores, como <i>La danza</i> (1910) o los papeles recortados de su vejez, llevaron el color a una síntesis máxima.",
    ], extra: CITA("Sueño con un arte de equilibrio, de pureza y de tranquilidad, que sea como un buen sillón.", "Henri Matisse, Notas de un pintor, 1908 (traducción propia)"), svg: cajas("Rasgos fauvistas", [["Color arbitrario", "rostros verdes"], ["Color puro", "del tubo"], ["Manchas planas", "sin modelado"], ["Contornos", "marcados"], ["Emoción", "alegría"], ["Maestros", "Van Gogh, Gauguin"]]) },
    { h: "Los precursores del expresionismo", p: [
      "El <mark>expresionismo</mark> busca expresar el mundo interior del artista, sobre todo la angustia, el miedo y la soledad, deformando las formas y los colores. Sus precursores fueron <b>Van Gogh</b>, con su color y su pincelada emocional; el noruego <b>Edvard Munch</b>, con <i>El grito</i>; y el belga <b>James Ensor</b>, con multitudes de máscaras grotescas.",
      "Detrás estaba el malestar de una sociedad industrial, urbana y en crisis, la filosofía de Nietzsche y la psicología de Freud. A diferencia del fauvismo francés, alegre y decorativo, el expresionismo alemán es <b>dramático</b>: el color y la forma se ponen al servicio del grito interior y de la crítica social.",
    ], svg: versus("Fauvismo y expresionismo", ["Fauvismo", ["Francia", "alegría y equilibrio", "color decorativo", "Matisse"]], ["Expresionismo", ["Alemania", "angustia y crítica", "deformación dramática", "Kirchner, Nolde"]]) },
    { h: "Die Brücke y Der Blaue Reiter", p: [
      "En 1905, en Dresde, cuatro estudiantes de arquitectura fundaron <b>Die Brücke</b> («El Puente»), con <b>Ernst Ludwig Kirchner</b> a la cabeza. Pintaron calles de Berlín con figuras angulosas y colores ácidos, como las prostitutas de <i>Potsdamer Platz</i>, y desnudos en la naturaleza. Recuperaron la <mark>xilografía</mark>, el grabado en madera, de líneas duras y contrastes fuertes. Emil Nolde y Max Pechstein se sumaron al grupo.",
      "En 1911, en Múnich, <b>Kandinsky</b> y <b>Franz Marc</b> crearon <b>Der Blaue Reiter</b> («El Jinete Azul»), más espiritual y lírico: Marc pintó animales de colores simbólicos, como caballos azules, y Kandinsky llegó desde aquí a la abstracción. Paul Klee y August Macke participaron en sus exposiciones. La Primera Guerra Mundial dispersó el grupo: Marc y Macke murieron en el frente.",
    ], extra: OBRA("Potsdamer Platz", "Ernst Ludwig Kirchner", "1914, óleo sobre lienzo, Berlín"), svg: cuadro("Grupos expresionistas", [["Grupo", "Ciudad", "Artistas"], ["Die Brücke", "Dresde, 1905", "Kirchner, Nolde"], ["Der Blaue Reiter", "Múnich, 1911", "Kandinsky, Marc"], ["Viena", "1910", "Schiele, Kokoschka"]]) },
    { h: "El expresionismo después de la guerra", p: [
      "Tras la Primera Guerra Mundial, el expresionismo se hizo más crítico. <b>Otto Dix</b> y <b>George Grosz</b> retrataron con crueldad a los mutilados de guerra, los especuladores y la decadencia de la Alemania de Weimar. <b>Käthe Kollwitz</b> dedicó sus grabados al dolor de las madres y de los pobres. El cine expresionista, como <i>El gabinete del doctor Caligari</i> (1920), llevó sus decorados torcidos a la pantalla.",
      "En 1937, los nazis organizaron la exposición <mark>Arte degenerado</mark> para ridiculizar el arte moderno: confiscaron miles de obras de expresionistas, abstractos y dadaístas, y muchas fueron vendidas o quemadas. Muchos artistas se exiliaron. El expresionismo se había convertido en símbolo de la libertad frente al totalitarismo.",
    ], svg: crono("Expresionismo alemán", [["1893", "El grito"], ["1905", "Die Brücke"], ["1911", "Der Blaue Reiter"], ["1920", "Caligari"], ["1924", "Dix, La guerra"], ["1937", "Arte degenerado"]]) },
    { h: "El expresionismo figurativo del siglo XX", p: [
      "La actitud expresionista reapareció muchas veces a lo largo del siglo. En Londres, <b>Francis Bacon</b> pintó figuras deformadas y gritando encerradas en espacios como jaulas, y <b>Lucian Freud</b>, desnudos de una carne cruda y pesada. En los años sesenta, el grupo <b>CoBrA</b> y la <b>nueva figuración</b> volvieron al gesto y la deformación.",
      "En los ochenta, los <mark>neoexpresionistas</mark> alemanes, como Georg Baselitz (que pintaba sus figuras cabeza abajo) o Anselm Kiefer, retomaron la pintura matérica y los temas de la historia alemana; en Italia, la transvanguardia. En España, José Gutiérrez Solana, en los años veinte, y luego Antonio Saura o el Equipo Crónica dialogaron con este lenguaje. En el ámbito hispano, también el muralismo mexicano tiene un fuerte componente expresivo.",
    ], svg: rueda("EXPRESIONISMO FIGURATIVO", ["Gutiérrez Solana", "Bacon", "Lucian Freud", "CoBrA", "Baselitz", "Kiefer"]) },
    { h: "Dadá: el rechazo de todo", p: [
      "El <mark>dadaísmo</mark> nació en 1916 en el <b>Cabaret Voltaire</b> de Zúrich, en la neutral Suiza, adonde habían huido artistas de toda Europa. Hugo Ball, Tristan Tzara, Hans Arp y Sophie Taeuber recitaban poemas sin palabras, bailaban con máscaras y hacían ruido. Si la razón y la cultura europeas habían llevado a la matanza de la guerra, Dadá respondía con el <b>absurdo</b>, la provocación y la burla del arte tradicional.",
      "Dadá fue más una actitud que un estilo. Usó el <b>azar</b> (Arp dejaba caer papeles y los pegaba donde caían), el collage, los poemas fonéticos y los manifiestos. Se extendió a Berlín, donde fue político; a París, donde dio paso al surrealismo; y a Nueva York, con <b>Duchamp</b> y sus ready-mades y con Man Ray.",
    ], v: ["exp-b", "El dadaísmo en ocho minutos"], extra: CITA("Dadá no significa nada.", "Tristan Tzara, Manifiesto Dadá, 1918 (traducción propia)"), svg: flujo("Así funciona Dadá", ["La guerra destruye la fe en la razón", "Los artistas responden con absurdo", "Azar, collage, ruido y provocación", "Se burlan del arte y del público"]) },
    { h: "Dadá en Berlín y en Nueva York", p: [
      "En <b>Berlín</b>, en una Alemania derrotada y en revolución, Dadá fue muy político. <b>Hannah Höch</b> y Raoul Hausmann inventaron el <mark>fotomontaje</mark>: recortaban fotos de revistas y las combinaban para criticar a los políticos, la guerra y los roles de género. John Heartfield usó después el fotomontaje contra Hitler.",
      "En <b>Nueva York</b>, Marcel Duchamp, Francis Picabia y <b>Man Ray</b> crearon un dadaísmo irónico y conceptual: ready-mades, máquinas inútiles, fotografías experimentales (rayografías) y juegos de palabras. Duchamp dibujó bigote a una postal de <i>La Gioconda</i> (<i>L.H.O.O.Q.</i>, 1919). Hacia 1923, Dadá se disolvió, pero su espíritu siguió vivo.",
    ], svg: cuadro("Focos dadá", [["Ciudad", "Rasgo", "Artistas"], ["Zúrich", "Cabaret Voltaire", "Tzara, Arp, Ball"], ["Berlín", "fotomontaje político", "Höch, Hausmann"], ["Nueva York", "ironía, ready-made", "Duchamp, Man Ray"], ["París", "hacia el surrealismo", "Picabia, Breton"]]) },
    { h: "Fluxus y el arte intermedia", p: [
      "En los años sesenta, una nueva generación recuperó el espíritu dadá. <b>Fluxus</b> (del latín «flujo») fue una red internacional de artistas fundada en 1962 por George Maciunas, inspirada en el compositor <b>John Cage</b>. Querían borrar la frontera entre <b>arte y vida</b> y entre las disciplinas: música, poesía, acción, objeto, vídeo. El artista Dick Higgins llamó a esto <mark>intermedia</mark>.",
      "Sus obras eran a menudo partituras con instrucciones sencillas (<i>event scores</i>) que cualquiera podía realizar: «enciende una cerilla y mírala hasta que se apague». <b>Yoko Ono</b>, <b>Nam June Paik</b>, Joseph Beuys o la española <b>Esther Ferrer</b> (con el grupo ZAJ, muy cercano) participaron en este clima. Junto a los <b>happenings</b> de Allan Kaprow, Fluxus abrió el camino a la performance y al arte de acción.",
    ], svg: crono("De Dadá a Fluxus", [["1916", "Cabaret Voltaire"], ["1919", "L.H.O.O.Q."], ["1952", "4'33'' de Cage"], ["1959", "happenings de Kaprow"], ["1962", "Fluxus"], ["1964", "Cut Piece de Ono"]]) },
  ],
  figura: { titulo: "Del fauvismo a Fluxus de un vistazo", aria: "Resumen del fauvismo, el expresionismo, el dadaísmo y Fluxus", cols: [
    ["Fauvismo", ["1905, París", "color arbitrario", "Matisse", "Derain, Vlaminck"]],
    ["Expresionismo", ["Munch, El grito", "Die Brücke", "Blaue Reiter", "Bacon, Baselitz"]],
    ["Dadá", ["1916, Zúrich", "absurdo y azar", "fotomontaje", "Duchamp"]],
    ["Fluxus", ["1962", "arte y vida", "intermedia", "Ono, Paik, Beuys"]],
  ] },
  video: ["exp-a", "El expresionismo: resumen"],
  ejemplos: [
    ["Comenta El grito de Munch.", ["Figura deformada con las manos en la cara.", "Cielo de remolinos rojos y naranjas.", "Diagonal de la barandilla que acelera.", "Angustia existencial, no un retrato."], "Precursor del expresionismo (1893)."],
    ["Identifica los rasgos de un cuadro de Kirchner.", ["Figuras alargadas y angulosas.", "Colores ácidos y contrastados.", "Ciudad moderna y vida nocturna.", "Crítica a la soledad urbana."], "Expresionismo de Die Brücke."],
    ["Explica por qué L.H.O.O.Q. de Duchamp es dadá.", ["Postal barata de La Gioconda.", "Le añade bigote y perilla.", "Título con un juego de palabras grosero.", "Se burla del arte consagrado."], "Ironía dadá contra el culto al arte."],
  ],
  errores: [
    "Confundir fauvismo (color alegre, Francia) con expresionismo (angustia, Alemania).",
    "Pensar que Dadá es un estilo visual: es una actitud de rechazo y provocación.",
    "Creer que el expresionismo terminó en 1918: reaparece durante todo el siglo XX.",
    "Confundir Fluxus con un grupo de pintores: es una red de acciones e intermedia.",
  ],
  ejercicios: {
    b: [
      ["¿De dónde viene el nombre fauvismo?", "Del crítico Louis Vauxcelles, que en 1905 llamó «fieras» (fauves) a los pintores de colores violentos del Salón de Otoño."],
      ["Nombra los dos grupos del expresionismo alemán y su ciudad.", "Die Brücke (Dresde, 1905) y Der Blaue Reiter (Múnich, 1911)."],
      ["¿Dónde y cuándo nació Dadá?", "En el Cabaret Voltaire de Zúrich, en 1916, durante la Primera Guerra Mundial."],
      ["¿Qué es Fluxus?", "Una red internacional de artistas fundada en 1962 que mezclaba música, acción, poesía y objetos para unir arte y vida."],
    ],
    m: [
      ["Explica el uso del color en el fauvismo.", "Colores puros y arbitrarios que no imitan la realidad, aplicados en manchas planas, para expresar emociones y construir la composición."],
      ["¿Qué fue la exposición Arte degenerado?", "Muestra organizada por los nazis en 1937 para ridiculizar el arte moderno; confiscaron miles de obras expresionistas, abstractas y dadá."],
      ["¿Por qué Dadá usó el azar?", "Para romper con la razón, las reglas y el control del artista, que consideraban culpables de la catástrofe de la guerra."],
      ["Explica qué es el arte intermedia.", "Obras que están entre varias disciplinas (música, poesía, acción, objeto, vídeo) sin pertenecer a ninguna, término de Dick Higgins para Fluxus."],
    ],
    a: [
      ["Realiza un fotomontaje sobre un tema actual al estilo de Hannah Höch y explica tu mensaje.", "Respuesta práctica. Debe combinar recortes de prensa o imágenes, contrastes de escala, un mensaje crítico claro y una explicación de su relación con el Dadá berlinés."],
      ["Escribe una partitura Fluxus de tres instrucciones y realízala en clase.", "Respuesta práctica. Ejemplo: «1. Abre una ventana. 2. Escucha un minuto. 3. Cuenta en voz alta los sonidos». Debe ser sencilla, realizable por cualquiera y convertir un gesto cotidiano en experiencia."],
    ],
  },
  quiz: [
    ["«¡Donatello entre las fieras!» dio nombre al…", ["fauvismo", "expresionismo", "dadaísmo", "cubismo"], "1905."],
    ["El líder del fauvismo fue…", ["Matisse", "Kirchner", "Munch", "Tzara"], "Color arbitrario."],
    ["El grito es de…", ["Munch", "Ensor", "Van Gogh", "Nolde"], "1893."],
    ["Die Brücke se fundó en…", ["Dresde", "Múnich", "Zúrich", "Viena"], "1905."],
    ["Pintó caballos azules…", ["Franz Marc", "Kirchner", "Matisse", "Dix"], "Der Blaue Reiter."],
    ["La técnica de grabado que recuperó Die Brücke es…", ["la xilografía", "el aguafuerte", "la litografía", "la serigrafía"], "Grabado en madera."],
    ["El Cabaret Voltaire estaba en…", ["Zúrich", "Berlín", "París", "Nueva York"], "1916."],
    ["El fotomontaje dadá lo desarrolló…", ["Hannah Höch", "Matisse", "Munch", "Kandinsky"], "Berlín."],
    ["L.H.O.O.Q. es de…", ["Duchamp", "Man Ray", "Picabia", "Arp"], "La Gioconda con bigote."],
    ["Fluxus se inspiró en el compositor…", ["John Cage", "Stravinski", "Schönberg", "Satie"], "Azar y silencio."],
  ],
  examen: [
    ["Pintó figuras gritando en espacios como jaulas…", ["Francis Bacon", "Matisse", "Marc", "Arp"], "Expresionismo figurativo."],
    ["Baselitz pintaba sus figuras…", ["cabeza abajo", "con puntos", "en collage", "sin color"], "Neoexpresionismo."],
    ["Los happenings los impulsó…", ["Allan Kaprow", "Duchamp", "Kirchner", "Munch"], "Finales de los cincuenta."],
    ["El gabinete del doctor Caligari es…", ["cine expresionista", "un cuadro fauvista", "un poema dadá", "una obra Fluxus"], "1920."],
  ],
  feynman: ["color fauvista", "angustia expresionista y sus grupos", "absurdo y azar de Dadá", "Fluxus e intermedia"],
  mapa: ["EXPRESIÓN Y RUPTURA", [["Fauvismo", "color libre, Matisse"], ["Expresionismo", "angustia, Brücke, Blaue Reiter"], ["Dadá", "absurdo, azar, Duchamp"], ["Fluxus", "arte y vida, intermedia"]]],
  tarjetas: [
    ["Fauvismo", "Color puro y arbitrario, 1905."],
    ["Matisse", "Equilibrio y alegría del color."],
    ["Expresionismo", "Deformar para expresar angustia."],
    ["Die Brücke", "Dresde, Kirchner, xilografía."],
    ["Der Blaue Reiter", "Múnich, Kandinsky, Marc."],
    ["Dadá", "Absurdo contra la guerra, 1916."],
    ["Fotomontaje", "Collage de fotos, Höch."],
    ["Fluxus", "Arte y vida, intermedia, 1962."],
  ],
  glosario: [
    ["Color arbitrario", "Color que no corresponde al real del objeto."],
    ["Xilografía", "Grabado en madera."],
    ["Arte degenerado", "Etiqueta nazi para el arte moderno."],
    ["Neoexpresionismo", "Retorno a la pintura expresiva en los ochenta."],
    ["Poema fonético", "Poema de sonidos sin significado."],
    ["Rayografía", "Fotografía sin cámara de Man Ray."],
    ["Event score", "Partitura Fluxus con instrucciones de acción."],
    ["Happening", "Acción artística con participación del público."],
  ],
  situacion: SIT(
    "Noche Dadá",
    "El centro celebra una velada experimental en el salón de actos inspirada en el Cabaret Voltaire y en Fluxus.",
    ["Investigad poemas fonéticos, manifiestos y partituras Fluxus", "Cread un manifiesto del grupo y tres acciones breves", "Diseñad carteles con fotomontaje", "Realizad la velada y documentadla en vídeo"],
    "Velada grabada, manifiesto y carteles.",
    ["Comprensión del espíritu dadá y Fluxus", "Creatividad y trabajo en equipo", "Calidad de la documentación"],
  ),
  familias: [
    "Buscad juntos El grito y otras obras de Munch: ¿qué emoción transmiten?",
    "Haced en casa un fotomontaje con revistas viejas.",
    "Escuchad 4'33'' de John Cage y hablad de si el silencio puede ser música.",
  ],
  saberes: "el Expresionismo alemán; del Fauvismo al Expresionismo Figurativo del siglo XX; del rechazo dadaísta al arte intermedia de Fluxus.",
  ideas: [
    "Hacer xilografías sencillas con goma de grabar o linóleo.",
    "Proyectar fragmentos de El gabinete del doctor Caligari.",
    "Realizar en clase una partitura Fluxus de Yoko Ono.",
  ],
  fuentes: [WIKI("Expresionismo", "Expresionismo"), WIKI("Dadaísmo", "Dadaísmo"), WIKI("Fluxus", "Fluxus")],
});
