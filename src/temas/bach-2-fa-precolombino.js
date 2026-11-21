// Fundamentos Artísticos 2º Bachillerato · Tema 4. Arte precolombino y arte africano precolonial. Dibujos propios en SVG.
const { tema, OBRA, cajas, flujo, versus, rueda, cuadro, crono, linea, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Arte precolombino y arte africano precolonial",
  saber: ["B"],
  objetivos: [
    "Situar en el tiempo y el espacio las principales culturas precolombinas",
    "Reconocer las obras más representativas de Mesoamérica y los Andes",
    "Describir los reinos y las tradiciones artísticas del África precolonial",
    "Explicar la función religiosa, política y social de este arte",
    "Valorar su influencia en las vanguardias y el debate actual sobre la restitución",
  ],
  claves: ["Mesoamérica", "olmecas", "mayas", "aztecas", "Andes", "incas", "orfebrería", "Ife", "Benín", "máscara", "Nok", "primitivismo", "restitución"],
  pregunta: {
    texto: "¿Por qué Picasso llenó su taller de máscaras africanas en 1907?",
    respuesta: "Porque en ellas descubrió una manera de representar el rostro que no copiaba la apariencia, sino que la <b>reconstruía</b> con formas geométricas, planos y volúmenes rotundos. Aquellas máscaras, hechas para ceremonias y no para museos, inspiraron <i>Las señoritas de Avignon</i> y el cubismo. Pero las piezas habían llegado a Europa por el <mark>colonialismo</mark>, y los europeos ignoraban su significado. Este tema estudia el arte de América antes de Colón y de África antes de la colonización por sí mismo, no solo como inspiración para otros.",
  },
  lectura: {
    titulo: "Las cabezas de Ife",
    html: `<p>En 1938, unos obreros que cavaban los cimientos de una casa en Ife, en el suroeste de la actual Nigeria, encontraron trece cabezas de latón. Eran retratos de una naturalidad asombrosa: rostros serenos, finas líneas paralelas en la piel, labios carnosos, una expresión de calma.</p><p>Algunos europeos de la época se negaron a creer que fueran africanas. Pensaron en artistas griegos perdidos o en una Atlántida legendaria. Se equivocaban: las cabezas fueron fundidas entre los siglos XII y XV por artistas yoruba, con la técnica de la cera perdida, para representar a reyes divinos. Su descubrimiento obligó a revisar muchos prejuicios sobre el arte africano.</p>`,
  },
  bloques: [
    { h: "Qué entendemos por arte precolombino", p: [
      "Llamamos <mark>arte precolombino</mark> al creado en América antes de la llegada de Colón en 1492. Abarca más de tres mil años y culturas muy distintas. Los historiadores distinguen dos grandes áreas: <b>Mesoamérica</b> (sur de México y Centroamérica) y la zona <b>andina</b> (Perú, Bolivia, Ecuador y norte de Chile).",
      "Estas culturas no conocían el hierro ni la rueda para el transporte, pero construyeron ciudades enormes, calendarios precisos y una orfebrería excepcional. Su arte tenía casi siempre una función <b>religiosa y política</b>: honrar a los dioses, legitimar a los gobernantes, acompañar a los muertos. La palabra «arte», como objeto para contemplar, es una idea europea posterior.",
    ], svg: versus("Dos grandes áreas", ["Mesoamérica", ["olmecas", "Teotihuacán", "mayas", "aztecas (mexicas)"]], ["Andes", ["Chavín", "Paracas y Nazca", "Moche", "incas"]]) },
    { h: "Mesoamérica: olmecas, Teotihuacán y mayas", p: [
      "Los <b>olmecas</b> (1200-400 a. C.), en el golfo de México, tallaron <mark>cabezas colosales</mark> de basalto de hasta tres metros, probablemente retratos de gobernantes. En el centro de México, <b>Teotihuacán</b> (siglos I-VII) fue una de las mayores ciudades del mundo, con las pirámides del Sol y de la Luna alineadas en una gran avenida.",
      "Los <b>mayas</b>, en Yucatán, Guatemala y Honduras, levantaron ciudades como Tikal, Palenque y Copán, con pirámides escalonadas coronadas por templos y con <b>estelas</b> talladas con relieves y escritura jeroglífica. Usaban la falsa bóveda o arco maya. Sus pinturas murales de Bonampak muestran con colores vivos batallas, ceremonias y músicos.",
    ], svg: crono("Mesoamérica", [["1200 a. C.", "cabezas olmecas"], ["100", "Teotihuacán"], ["250-900", "mayas clásicos"], ["790", "Bonampak"], ["1325", "Tenochtitlan"], ["1521", "conquista"]]) },
    { h: "Los aztecas o mexicas", p: [
      "Los <b>mexicas</b> fundaron en 1325 <b>Tenochtitlan</b>, sobre un lago, donde hoy está Ciudad de México. En el centro se alzaba el <mark>Templo Mayor</mark>, una pirámide doble dedicada a Huitzilopochtli, dios de la guerra, y a Tláloc, dios de la lluvia. Se reconstruyó siete veces, cada una más grande, encerrando la anterior.",
      "Su escultura en piedra es monumental y simbólica. La llamada <b>Piedra del Sol</b>, de casi cuatro metros de diámetro, resume su visión del tiempo y de las eras del mundo. La enorme <b>Coatlicue</b>, diosa madre, con falda de serpientes y collar de manos y corazones, impresionó tanto a los españoles que fue enterrada de nuevo. Los códices pintados y el arte plumario completan su producción.",
    ], extra: OBRA("Piedra del Sol", "Arte mexica", "h. 1500, basalto, Museo Nacional de Antropología, México"), svg: cajas("Arte mexica", [["Templo Mayor", "pirámide doble"], ["Piedra del Sol", "tiempo y eras"], ["Coatlicue", "diosa madre"], ["Códices", "libros pintados"]]) },
    { h: "Los Andes: de Chavín a los incas", p: [
      "En los Andes, la cultura <b>Chavín</b> (900-200 a. C.) creó templos con galerías subterráneas y cabezas clavas. En la costa sur de Perú, los <b>nazca</b> trazaron en el desierto las <mark>líneas de Nazca</mark>, enormes figuras de animales visibles desde el aire, y los <b>paracas</b> tejieron mantos de lana de colores. En la costa norte, los <b>moche</b> modelaron cerámicas retrato y vasijas con escenas de la vida cotidiana.",
      "Los <b>incas</b> (siglos XV-XVI) dominaron un imperio desde Ecuador hasta Chile. Su arquitectura destaca por los muros de piedras pulidas encajadas sin argamasa, resistentes a los terremotos, como en Cuzco o en <b>Machu Picchu</b>. Su orfebrería en oro y plata fue casi toda fundida por los conquistadores. El textil, con diseños geométricos llamados <i>tocapus</i>, era su arte más valorado.",
    ], svg: cuadro("Culturas andinas", [["Cultura", "Obra clave"], ["Chavín", "templo y cabezas clavas"], ["Nazca", "líneas en el desierto"], ["Moche", "cerámica retrato"], ["Inca", "Machu Picchu"]]) },
    { h: "El arte del África precolonial", p: [
      "África es un continente inmenso con miles de pueblos y tradiciones. Su arte es muy antiguo: la cultura <b>Nok</b>, en Nigeria (hacia 500 a. C.), modeló cabezas de terracota con ojos de forma triangular. Más tarde surgieron reinos con cortes refinadas: <b>Ife</b> fundió cabezas de latón naturalistas, y el reino de <mark>Benín</mark> decoró su palacio con cientos de placas de bronce en relieve.",
      "Otras culturas destacaron en la arquitectura: en <b>Malí</b>, la Gran Mezquita de Djenné, de adobe, se rehace cada año en una fiesta comunitaria; en el sur, <b>Gran Zimbabue</b> levantó murallas de piedra seca. En Etiopía, las iglesias de <b>Lalibela</b> se excavaron en la roca en el siglo XIII.",
    ], svg: crono("África precolonial", [["500 a. C.", "terracotas Nok"], ["1100-1400", "cabezas de Ife"], ["1200", "iglesias de Lalibela"], ["1300", "Gran Zimbabue"], ["1500-1700", "bronces de Benín"], ["1907", "Djenné reconstruida"]]) },
    { h: "Máscaras y esculturas: función y significado", p: [
      "La mayor parte de la escultura africana tradicional es de <b>madera</b>, a veces con fibras, conchas, metal o pigmentos. Las <mark>máscaras</mark> no se hacían para colgar en la pared: formaban parte de un traje completo y cobraban vida en la <b>danza</b>, con música, en ritos de iniciación, funerales o fiestas agrícolas. Representaban espíritus, antepasados o fuerzas de la naturaleza.",
      "Las figuras de antepasados, como las <b>reliquias fang</b> de Gabón o las esculturas <b>dogón</b> de Malí, protegían a la comunidad. Las figuras <i>nkisi</i> del Congo, erizadas de clavos, servían para sellar pactos o curar. Las formas son geométricas y simplificadas no por falta de habilidad, sino por una elección: representar la idea y la fuerza del ser, no su apariencia.",
    ], v: ["pre-b", "El arte africano y su impacto en el arte moderno"], svg: rueda("MÁSCARA AFRICANA", ["danza", "música", "traje completo", "antepasados", "iniciación", "espíritus"]) },
    { h: "Influencia en las vanguardias europeas", p: [
      "Hacia 1905, artistas como Matisse, Derain, Vlaminck y <b>Picasso</b> empezaron a coleccionar máscaras y figuras africanas y de Oceanía, que veían en el Museo de Etnografía del Trocadero de París. Les fascinó su libertad: rostros convertidos en planos, ojos cilíndricos, proporciones expresivas. Esta admiración se llamó <mark>primitivismo</mark>.",
      "En <i>Las señoritas de Avignon</i> (1907), Picasso pintó dos rostros como máscaras, abriendo el camino al cubismo. Los expresionistas alemanes de Die Brücke se inspiraron en tallas africanas y oceánicas; Modigliani y Brancusi, en sus cabezas alargadas; Diego Rivera y otros muralistas mexicanos, en el arte precolombino. Hoy se critica que aquellos artistas usaron estas formas sin conocer su significado y con prejuicios sobre lo «primitivo».",
    ], svg: flujo("De la máscara al cubismo", ["Llegan a Europa por el colonialismo", "Se exponen en museos etnográficos", "Picasso y Matisse las coleccionan", "Las señoritas de Avignon (1907)", "Nace el cubismo"]) },
    { h: "Expolio, museos y restitución", p: [
      "Muchas obras africanas y americanas llegaron a Europa por el <b>saqueo</b>. En 1897, una expedición británica arrasó la ciudad de Benín y se llevó miles de piezas, los llamados <mark>bronces de Benín</mark>, hoy repartidos por museos de Londres, Berlín o Nueva York. El tesoro de Moctezuma o el oro inca corrieron una suerte parecida.",
      "Desde 2017, varios países europeos han empezado a <b>restituir</b> objetos. Alemania devolvió a Nigeria cientos de bronces de Benín en 2022, y Francia devolvió a Benín (el país actual) 26 tesoros del reino de Dahomey en 2021. El debate continúa: ¿a quién pertenece el patrimonio?, ¿cómo deben exponerlo los museos? Estudiar este arte hoy implica también conocer cómo llegó a nuestras vitrinas.",
    ], svg: linea("Del expolio a la restitución", [["1897", "saqueo de Benín"], ["1907", "primitivismo"], ["2017", "debate en Francia"], ["2022", "Alemania devuelve bronces"]]) },
  ],
  figura: { titulo: "Arte precolombino y africano de un vistazo", aria: "Resumen de Mesoamérica, los Andes, África precolonial e influencia en las vanguardias", cols: [
    ["Mesoamérica", ["cabezas olmecas", "Teotihuacán", "mayas: estelas", "mexicas: Piedra del Sol"]],
    ["Andes", ["Chavín", "líneas de Nazca", "cerámica moche", "Machu Picchu"]],
    ["África", ["terracotas Nok", "cabezas de Ife", "bronces de Benín", "máscaras rituales"]],
    ["Legado", ["primitivismo", "Picasso, cubismo", "expolio", "restitución"]],
  ] },
  video: ["pre-a", "Umbrales: arte precolombino"],
  ejemplos: [
    ["Analiza una cabeza de Ife.", ["Latón fundido a la cera perdida, siglos XII-XV.", "Rostro naturalista y sereno con escarificaciones.", "Representa a un rey divino (oni).", "Función política y religiosa."], "Retrato idealizado de un gobernante sagrado yoruba."],
    ["Explica la función de una máscara africana.", ["Forma parte de un traje completo.", "Se activa en la danza con música.", "Encarna a un espíritu o antepasado.", "Se usa en iniciaciones, funerales o fiestas."], "Objeto ritual vivo, no pieza decorativa."],
    ["Compara la arquitectura maya con la inca.", ["Maya: pirámides escalonadas con templo y falsa bóveda.", "Relieves y escritura en estelas.", "Inca: muros de piedras encajadas sin argamasa.", "Adaptada a montaña y terremotos."], "Mayas: monumentalidad decorada; incas: ingeniería precisa y sobria."],
  ],
  errores: [
    "Llamar «primitivo» a este arte como si fuera torpe o inferior.",
    "Creer que las máscaras se hacían para colgarlas como adorno.",
    "Mezclar mayas, aztecas e incas como si fueran una sola cultura.",
    "Olvidar que muchas piezas llegaron a Europa por el saqueo colonial.",
  ],
  ejercicios: {
    b: [
      ["¿Qué dos grandes áreas culturales distingue el arte precolombino?", "Mesoamérica (sur de México y Centroamérica: olmecas, Teotihuacán, mayas, mexicas) y los Andes (Chavín, Nazca, Moche, incas)."],
      ["¿Qué son las cabezas colosales olmecas?", "Grandes esculturas de basalto de hasta tres metros, probablemente retratos de gobernantes, talladas entre 1200 y 400 a. C."],
      ["Nombra tres reinos o culturas del África precolonial con su obra más conocida.", "Nok (terracotas), Ife (cabezas de latón), Benín (placas de bronce); también Malí (mezquita de Djenné), Lalibela o Gran Zimbabue."],
      ["¿Qué es el primitivismo?", "La admiración e inspiración de los artistas europeos de vanguardia por el arte africano, oceánico y de otras culturas no europeas, hacia 1905-1915."],
    ],
    m: [
      ["Explica el significado de la Coatlicue.", "Es la diosa madre mexica de la tierra, la vida y la muerte. Su falda de serpientes y su collar de manos y corazones expresan la idea de que la tierra da la vida y recibe a los muertos."],
      ["¿Por qué la arquitectura inca resistía los terremotos?", "Porque usaba piedras pulidas encajadas con precisión sin argamasa, muros ligeramente inclinados y vanos trapezoidales: los bloques se movían y volvían a su sitio."],
      ["¿Por qué las formas de la escultura africana son geométricas?", "Por una elección cultural: buscaban representar la fuerza espiritual, el carácter o la idea del ser, no copiar su apariencia. No es falta de habilidad, como muestra el naturalismo de Ife."],
      ["¿Qué pasó en Benín en 1897?", "Una expedición militar británica saqueó la ciudad y se llevó miles de piezas de bronce y marfil, hoy dispersas por museos occidentales."],
    ],
    a: [
      ["Argumenta a favor o en contra de que los museos europeos devuelvan los bronces de Benín.", "Respuesta abierta argumentada. A favor: fueron robados, son patrimonio de Nigeria y de su memoria. En contra o con matices: problemas de conservación, acuerdos de préstamo o copias. Debe citar el caso de Alemania en 2022."],
      ["Compara una máscara africana con un retrato de Picasso de 1907.", "Respuesta abierta. Puntos: rostro geometrizado, planos, ojos simplificados; pero la máscara es ritual y colectiva, y el cuadro es una experimentación formal individual que ignoraba el significado original."],
    ],
  },
  quiz: [
    ["El arte precolombino es el anterior a…", ["1492", "1325", "1521", "1810"], "Llegada de Colón."],
    ["Las cabezas colosales son…", ["olmecas", "incas", "moches", "dogón"], "Basalto, golfo de México."],
    ["Teotihuacán tiene las pirámides…", ["del Sol y de la Luna", "de Giza", "de Tikal", "de Machu Picchu"], "Centro de México."],
    ["El arco maya es…", ["una falsa bóveda", "un arco de medio punto", "un arco apuntado", "una cúpula"], "Hiladas que avanzan hasta cerrarse."],
    ["El Templo Mayor está dedicado a…", ["Huitzilopochtli y Tláloc", "Zeus y Apolo", "Inti y Viracocha", "Ra y Osiris"], "Guerra y lluvia."],
    ["Las líneas de Nazca están en…", ["Perú", "México", "Malí", "Guatemala"], "Desierto de la costa sur."],
    ["Las cabezas de Ife son de…", ["latón fundido", "madera", "terracota", "piedra"], "Cera perdida."],
    ["La Gran Mezquita de Djenné es de…", ["adobe", "mármol", "hierro", "ladrillo cocido"], "Se rehace cada año."],
    ["Picasso se inspiró en máscaras africanas para…", ["Las señoritas de Avignon", "Guernica", "La Celestina", "El viejo guitarrista"], "1907."],
    ["En 2022, Alemania devolvió bronces a…", ["Nigeria", "México", "Perú", "Egipto"], "Bronces de Benín."],
  ],
  examen: [
    ["Las terracotas Nok son de…", ["Nigeria, hacia 500 a. C.", "Perú, s. XV", "México, s. XIV", "Etiopía, s. XIII"], "Arte africano muy antiguo."],
    ["Los tocapus son…", ["diseños geométricos textiles incas", "esculturas mayas", "máscaras fang", "pirámides"], "Textil inca."],
    ["Las iglesias excavadas en la roca están en…", ["Lalibela", "Djenné", "Benín", "Ife"], "Etiopía, s. XIII."],
    ["Una figura nkisi sirve para…", ["sellar pactos o curar", "decorar un palacio", "medir el tiempo", "enterrar a un rey"], "Congo, con clavos."],
  ],
  feynman: ["Mesoamérica y Andes", "función ritual de las máscaras", "reinos de Ife y Benín", "primitivismo y restitución"],
  mapa: ["ARTE NO EUROPEO", [["Mesoamérica", "olmecas, mayas, mexicas"], ["Andes", "Nazca, moche, incas"], ["África", "Nok, Ife, Benín, máscaras"], ["Hoy", "vanguardias, restitución"]]],
  tarjetas: [
    ["Cabezas olmecas", "Basalto colosal, gobernantes."],
    ["Estela maya", "Losa con relieves y jeroglíficos."],
    ["Piedra del Sol", "Calendario y eras mexicas."],
    ["Machu Picchu", "Ciudad inca de piedra encajada."],
    ["Cabezas de Ife", "Latón naturalista, reyes yoruba."],
    ["Bronces de Benín", "Placas del palacio, saqueadas en 1897."],
    ["Máscara africana", "Objeto ritual vivo en la danza."],
    ["Primitivismo", "Vanguardias inspiradas en arte no europeo."],
  ],
  glosario: [
    ["Mesoamérica", "Área cultural del sur de México y Centroamérica."],
    ["Estela", "Losa de piedra vertical con relieves e inscripciones."],
    ["Códice", "Libro pintado de las culturas mesoamericanas."],
    ["Orfebrería", "Trabajo artístico del oro y la plata."],
    ["Terracota", "Barro cocido usado en escultura."],
    ["Escarificación", "Marcas en la piel con valor social o estético."],
    ["Expolio", "Robo o saqueo de bienes culturales."],
    ["Restitución", "Devolución de obras a su país o comunidad de origen."],
  ],
  situacion: SIT(
    "La vitrina descolonizada",
    "Un museo os pide rediseñar la cartela y el montaje de una máscara africana o de una pieza precolombina para contar su historia completa.",
    ["Elegid una pieza real y buscad su origen", "Investigad su función y significado original", "Averiguad cómo llegó al museo", "Diseñad la nueva cartela y el montaje"],
    "Cartela y boceto de vitrina que explique uso, significado y procedencia.",
    ["Rigor histórico y cultural", "Respeto y precisión al explicar la función", "Claridad del diseño"],
  ),
  familias: [
    "Visitad el Museo de América de Madrid o su web y elegid juntos una pieza.",
    "Buscad en un mapa dónde estaban los mayas, los incas y el reino de Benín.",
    "Hablad sobre si los museos deben devolver las obras robadas.",
  ],
  saberes: "introducción al arte precolombino y al arte africano precolonial; aspectos históricos, geográficos y sociales del arte.",
  ideas: [
    "Comparar una máscara africana y un rostro de Las señoritas de Avignon en pantalla dividida.",
    "Trabajar la noticia de la devolución de los bronces de Benín como texto de debate.",
    "Coordinar con Geografía e Historia para situar las culturas en el mapa.",
  ],
  fuentes: [WIKI("Arte precolombino", "Arte_precolombino"), WIKI("Bronces de Benín", "Bronces_de_Benín"), { t: "Museo de América (Madrid)", url: "https://www.culturaydeporte.gob.es/museodeamerica/home.html" }],
});
