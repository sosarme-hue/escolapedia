// Fundamentos Artísticos 2º Bachillerato · Tema 11. La proyección clásica: del Neoclasicismo a la pintura metafísica. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "La proyección clásica: del Neoclasicismo a la pintura metafísica",
  saber: ["C"],
  objetivos: [
    "Explicar el Neoclasicismo como retorno a la Antigüedad en el siglo de la Ilustración",
    "Reconocer la arquitectura, escultura y pintura neoclásicas, con ejemplos españoles",
    "Analizar la pervivencia del ideal clásico en el academicismo del siglo XIX",
    "Explicar el «retorno al orden» de las vanguardias tras la Primera Guerra Mundial",
    "Caracterizar la pintura metafísica de De Chirico y su influencia",
  ],
  claves: ["Neoclasicismo", "Ilustración", "Winckelmann", "Pompeya", "David", "Canova", "Villanueva", "academicismo", "historicismo", "retorno al orden", "pintura metafísica", "De Chirico", "Novecento"],
  pregunta: {
    texto: "¿Qué tienen en común un museo del siglo XVIII, una revolución, un emperador y una plaza vacía pintada en 1914?",
    respuesta: "Todos miran a la <b>Antigüedad clásica</b>. El Museo del Prado se diseñó como un templo de las ciencias; la Revolución francesa buscó modelos en las virtudes de la república romana; Napoleón se hizo representar como un césar; y Giorgio de Chirico pintó plazas italianas con estatuas y arquerías clásicas, inmóviles y misteriosas. El clasicismo no desapareció con Roma: reaparece una y otra vez, con significados distintos, como un <mark>lenguaje</mark> de orden, de razón o de nostalgia.",
  },
  lectura: {
    titulo: "Una ciudad bajo la ceniza",
    html: `<p>En 1738, unos obreros que trabajaban para el rey de Nápoles, el futuro Carlos III de España, encontraron bajo metros de lava solidificada los restos de Herculano. Diez años después empezaron las excavaciones de Pompeya, sepultada por el Vesubio en el año 79.</p><p>Aparecieron casas completas con pinturas murales, mosaicos, muebles, objetos cotidianos y hasta panes carbonizados. Toda Europa quiso conocerlas. Viajeros, artistas y coleccionistas hicieron el Grand Tour por Italia, copiaron columnas y vasijas y llevaron a sus países la moda «a la griega». De aquella fascinación por la Antigüedad recién descubierta nació el Neoclasicismo.</p>`,
  },
  bloques: [
    { h: "El Neoclasicismo y la Ilustración", p: [
      "El <mark>Neoclasicismo</mark> (hacia 1750-1830) fue la respuesta de la Ilustración al Rococó, un estilo considerado frívolo y recargado. Los ilustrados creían en la razón, la ciencia y la educación, y encontraron en el arte griego y romano un modelo de <b>orden, claridad y virtud moral</b>.",
      "Las excavaciones de Herculano y Pompeya, los viajes del Grand Tour y los escritos de <b>Johann Joachim Winckelmann</b> difundieron el ideal clásico. Winckelmann definió el arte griego por su «noble sencillez y serena grandeza». Las academias de bellas artes, como la de San Fernando de Madrid (1752), impusieron sus normas: dibujo preciso, composición equilibrada y temas de historia antigua.",
    ], extra: CITA("La noble sencillez y la serena grandeza.", "Johann Joachim Winckelmann, sobre el arte griego, 1755 (traducción propia)"), svg: crono("Del Rococó al Neoclasicismo", [["1738", "Herculano"], ["1748", "Pompeya"], ["1752", "Academia de San Fernando"], ["1755", "Winckelmann"], ["1784", "Juramento de los Horacios"], ["1785", "Museo del Prado"]]) },
    { h: "Arquitectura neoclásica", p: [
      "La arquitectura neoclásica imita el <mark>templo clásico</mark>: pórticos de columnas, frontones, cúpulas y volúmenes puros. Se usa sobre todo en edificios públicos al servicio de la sociedad: museos, bibliotecas, teatros, bolsas, parlamentos. En París, el Panteón de Soufflot; en Berlín, la Puerta de Brandeburgo; en Washington, el Capitolio.",
      "En España, Carlos III impulsó un Madrid ilustrado. <b>Juan de Villanueva</b> diseñó el edificio del <b>Museo del Prado</b> (desde 1785), pensado como Gabinete de Ciencias Naturales, con un pórtico dórico central; también el Observatorio Astronómico. <b>Francesco Sabatini</b> levantó la Puerta de Alcalá, y Ventura Rodríguez proyectó las fuentes de Cibeles y Neptuno.",
    ], svg: cuadro("Neoclasicismo en Madrid", [["Obra", "Autor"], ["Museo del Prado", "Villanueva"], ["Observatorio", "Villanueva"], ["Puerta de Alcalá", "Sabatini"], ["Cibeles y Neptuno", "Ventura Rodríguez"]]) },
    { h: "Escultura: Canova y el mármol blanco", p: [
      "La escultura neoclásica buscó la belleza ideal griega a través del <b>mármol blanco</b> (aunque, como sabemos, las estatuas antiguas estaban pintadas). El gran maestro fue el italiano <mark>Antonio Canova</mark> (1757-1822), con superficies pulidas, contornos suaves y gestos serenos.",
      "Su <i>Psique reanimada por el beso del Amor</i> combina elegancia y emoción contenida. Retrató a Paulina Bonaparte, hermana de Napoleón, desnuda y recostada como una Venus, y al propio Napoleón como un dios guerrero. El danés Thorvaldsen siguió un clasicismo aún más frío. En España destacaron José Álvarez Cubero, con <i>La defensa de Zaragoza</i>, y Damià Campeny, con <i>Lucrecia muerta</i>.",
    ], extra: OBRA("Psique reanimada por el beso del Amor", "Antonio Canova", "1787-1793, mármol, Louvre"), svg: cajas("Escultura neoclásica", [["Canova", "Psique y Amor"], ["Thorvaldsen", "clasicismo frío"], ["Álvarez Cubero", "Defensa de Zaragoza"], ["Campeny", "Lucrecia muerta"]]) },
    { h: "Pintura: David y la virtud republicana", p: [
      "<b>Jacques-Louis David</b> (1748-1825) fue el pintor del Neoclasicismo y de la Revolución francesa. En <i>El juramento de los Horacios</i> (1784) tres hermanos juran a su padre defender Roma hasta la muerte: composición en friso, como un relieve, luz clara, dibujo nítido y un mensaje de <mark>virtud cívica</mark> y sacrificio por la patria.",
      "Durante la Revolución pintó <i>La muerte de Marat</i>, convirtiendo a un revolucionario asesinado en un mártir laico. Después fue pintor de Napoleón, a quien retrató cruzando los Alpes y coronándose emperador. Su discípulo <b>Ingres</b> llevó el neoclasicismo al siglo XIX con un dibujo de línea pura y desnudos sensuales como <i>La gran odalisca</i>.",
    ], svg: flujo("El juramento de los Horacios", ["Tema: historia de Roma", "Composición en friso, como un relieve", "Arcos y columnas al fondo", "Mensaje: virtud y patria"]) },
    { h: "Academicismo e historicismo en el siglo XIX", p: [
      "A lo largo del siglo XIX, el clasicismo se convirtió en la norma oficial de las academias y de los Salones: el llamado <mark>academicismo</mark> o arte pompier, con desnudos idealizados de superficie lisa y grandes cuadros de historia, como los de Bouguereau o Cabanel. Contra ese arte reaccionarían los realistas y los impresionistas.",
      "En arquitectura, el clasicismo fue uno de los estilos del <b>historicismo</b>, que imitaba todos los estilos del pasado: neogriego, neogótico, neomudéjar. Muchos bancos, teatros y palacios de justicia de las ciudades europeas y americanas, como la Biblioteca Nacional de Madrid o el Congreso de los Diputados, adoptaron el lenguaje de columnas y frontones para transmitir solidez y prestigio.",
    ], svg: versus("Dos usos del clasicismo en el XIX", ["Academicismo", ["norma oficial", "desnudo ideal", "pintura de historia", "Salón"]], ["Historicismo", ["imitar estilos", "neogriego, neogótico", "bancos y parlamentos", "prestigio"]]) },
    { h: "El retorno al orden", p: [
      "Tras la destrucción de la Primera Guerra Mundial (1914-1918), muchos artistas de vanguardia sintieron la necesidad de volver a la tradición, a la figura sólida y a la armonía. Se llamó <mark>retorno al orden</mark>, por el título de un libro de Jean Cocteau. El propio <b>Picasso</b> pintó en los años veinte mujeres monumentales de aire clásico, como estatuas griegas.",
      "En Italia surgió el grupo <b>Novecento</b>, que defendía un arte moderno con raíces en el Renacimiento italiano y que acabó vinculado al fascismo. En Alemania, la Nueva Objetividad; en Francia, el purismo de Le Corbusier y Ozenfant; en Cataluña, el <b>Noucentisme</b>, con la escultura mediterránea de Aristide Maillol o la <i>Mediterrània</i> idealizada de Joaquim Sunyer y Josep Clarà.",
    ], svg: rueda("RETORNO AL ORDEN", ["Picasso clásico", "Novecento", "purismo", "Nueva Objetividad", "Noucentisme", "Maillol"]) },
    { h: "La pintura metafísica", p: [
      "La <mark>pintura metafísica</mark> nació en Italia hacia 1911-1917 con <b>Giorgio de Chirico</b>, y la siguieron Carlo Carrà y Giorgio Morandi. De Chirico pintó plazas italianas vacías, con arquerías clásicas en perspectivas exageradas, sombras largas, estatuas antiguas, trenes lejanos y relojes, bajo una luz de atardecer. Todo parece inmóvil, como en un sueño.",
      "Los elementos clásicos, sacados de su contexto, provocan una sensación de <b>enigma</b> y melancolía: es la «metafísica», lo que está más allá de las apariencias. Más tarde aparecieron los <b>maniquíes</b> sin rostro, como en <i>Las musas inquietantes</i> (1917). Para De Chirico, el mundo clásico ya no era un modelo de orden racional, sino un escenario extraño de la memoria.",
    ], v: ["neo-b", "Las pinturas de Giorgio de Chirico"], extra: OBRA("Las musas inquietantes", "Giorgio de Chirico", "1917, óleo sobre lienzo"), svg: cajas("Claves metafísicas", [["Plazas vacías", "soledad"], ["Arquerías", "clasicismo"], ["Sombras largas", "melancolía"], ["Maniquíes", "sin rostro"], ["Estatuas", "memoria antigua"], ["Perspectiva", "exagerada"]]) },
    { h: "Influencia y legado de lo metafísico", p: [
      "La pintura metafísica influyó directamente en el <b>surrealismo</b>: Magritte decidió hacerse pintor al ver un cuadro de De Chirico, y Dalí tomó de él las perspectivas profundas y los espacios desiertos. En España, la influencia se nota en pintores como Maruja Mallo o Ángel Planells, y en la arquitectura racionalista de algunas plazas de los años treinta.",
      "Su huella llega al <mark>cine</mark>, la fotografía, la escenografía y la arquitectura posmoderna, que volvió a usar arcos y columnas con ironía, como el Palacio de la Civilización Italiana de Roma o edificios de Aldo Rossi. El recorrido de este tema muestra que lo clásico es un lenguaje vivo: unas veces significa razón y virtud; otras, poder; otras, nostalgia y misterio.",
    ], svg: flujo("De Chirico y después", ["Pintura metafísica (1911-1919)", "Surrealismo: Magritte, Dalí", "Cine y escenografía", "Arquitectura posmoderna"]) },
  ],
  figura: { titulo: "La proyección clásica de un vistazo", aria: "Resumen del Neoclasicismo, el academicismo, el retorno al orden y la pintura metafísica", cols: [
    ["Neoclasicismo", ["Ilustración", "Pompeya, Winckelmann", "Villanueva, Prado", "David, Canova"]],
    ["Siglo XIX", ["academicismo", "Ingres", "historicismo", "bancos y parlamentos"]],
    ["Retorno al orden", ["tras 1918", "Picasso clásico", "Novecento", "Noucentisme"]],
    ["Metafísica", ["De Chirico", "plazas vacías", "maniquíes", "hacia el surrealismo"]],
  ] },
  video: ["neo-a", "El Neoclasicismo"],
  ejemplos: [
    ["Comenta El juramento de los Horacios.", ["Tema de la historia romana.", "Composición en friso y tres arcos al fondo.", "Contraste: hombres rectos y mujeres abatidas.", "Mensaje de deber cívico antes de la Revolución."], "Manifiesto pictórico del Neoclasicismo (1784)."],
    ["Explica por qué el Museo del Prado es neoclásico.", ["Pórtico dórico central.", "Volúmenes claros y simétricos.", "Función ilustrada: ciencias naturales.", "Proyecto de Villanueva para Carlos III."], "Arquitectura neoclásica al servicio del saber."],
    ["Analiza Las musas inquietantes de De Chirico.", ["Maniquíes con aspecto de estatuas.", "Plaza con perspectiva exagerada.", "Castillo de Ferrara al fondo.", "Ambiente inmóvil y enigmático."], "Pintura metafísica: lo clásico como misterio."],
  ],
  errores: [
    "Confundir el Neoclasicismo con el Renacimiento: el primero es del siglo XVIII y es ilustrado.",
    "Creer que el retorno al orden fue un abandono total de la vanguardia.",
    "Pensar que la pintura metafísica es surrealista: es anterior y la inspira.",
    "Olvidar que el uso de lo clásico cambia de significado según la época.",
  ],
  ejercicios: {
    b: [
      ["¿Qué descubrimientos impulsaron el Neoclasicismo?", "Las excavaciones de Herculano (1738) y Pompeya (1748), junto con los viajes del Grand Tour y los escritos de Winckelmann."],
      ["Nombra tres obras neoclásicas de Madrid y sus autores.", "Museo del Prado y Observatorio (Juan de Villanueva), Puerta de Alcalá (Sabatini), fuentes de Cibeles y Neptuno (Ventura Rodríguez)."],
      ["¿Quién es el gran escultor neoclásico y qué material prefería?", "Antonio Canova, que trabajó el mármol blanco pulido."],
      ["¿Qué pintaba De Chirico?", "Plazas italianas vacías con arquerías, estatuas, sombras largas, trenes y maniquíes: la pintura metafísica."],
    ],
    m: [
      ["¿Por qué la Ilustración prefirió el arte clásico al Rococó?", "Porque veía en lo clásico orden, claridad, razón y virtud moral, frente a un Rococó considerado frívolo, decorativo y propio de la aristocracia."],
      ["Explica el significado político de David.", "Usó la historia de Roma para exaltar la virtud republicana y el sacrificio por la patria, apoyó la Revolución (Muerte de Marat) y luego sirvió a la propaganda de Napoleón."],
      ["¿Qué fue el retorno al orden?", "La vuelta de muchos artistas de vanguardia, tras la Primera Guerra Mundial, a la figura sólida, la tradición y la armonía clásica (Picasso, Novecento, Noucentisme)."],
      ["¿Cómo influyó la pintura metafísica en el surrealismo?", "Le dio los espacios vacíos, las perspectivas profundas, los objetos fuera de contexto y la atmósfera de sueño; Magritte y Dalí la tomaron como punto de partida."],
    ],
    a: [
      ["Compara el significado de lo clásico en David y en De Chirico.", "En David, lo clásico es modelo de razón, orden y virtud cívica. En De Chirico, es memoria descontextualizada, inmóvil y misteriosa que produce extrañeza y melancolía."],
      ["Fotografía un espacio de tu ciudad que pueda parecer una pintura metafísica y explica por qué.", "Respuesta abierta. Debe señalar soportales o arcos, luz rasante y sombras largas, ausencia de personas, perspectiva y algún objeto o estatua aislado."],
    ],
  },
  quiz: [
    ["El Neoclasicismo reacciona contra…", ["el Rococó", "el Renacimiento", "el gótico", "el impresionismo"], "Ilustración."],
    ["«Noble sencillez y serena grandeza» es de…", ["Winckelmann", "David", "Canova", "Kant"], "Sobre el arte griego."],
    ["El Museo del Prado lo diseñó…", ["Juan de Villanueva", "Sabatini", "Juan de Herrera", "Ventura Rodríguez"], "Desde 1785."],
    ["La Puerta de Alcalá es de…", ["Sabatini", "Villanueva", "Gaudí", "Herrera"], "Madrid."],
    ["Psique reanimada por el beso del Amor es de…", ["Canova", "Thorvaldsen", "Campeny", "Bernini"], "Mármol."],
    ["El juramento de los Horacios es de…", ["David", "Ingres", "Goya", "Delacroix"], "1784."],
    ["El academicismo del XIX se llama también…", ["arte pompier", "art nouveau", "arte povera", "op art"], "Bouguereau, Cabanel."],
    ["«Retorno al orden» procede de un libro de…", ["Jean Cocteau", "Breton", "Winckelmann", "Apollinaire"], "Años veinte."],
    ["La pintura metafísica la funda…", ["De Chirico", "Magritte", "Dalí", "Carrà solo"], "Hacia 1911-1917."],
    ["Los maniquíes sin rostro aparecen en…", ["Las musas inquietantes", "El juramento de los Horacios", "La gran odalisca", "La muerte de Marat"], "1917."],
  ],
  examen: [
    ["Carlos III impulsó antes, como rey de Nápoles, las excavaciones de…", ["Herculano y Pompeya", "Atenas", "Mérida", "Troya"], "Siglo XVIII."],
    ["El Noucentisme es…", ["un clasicismo mediterráneo catalán", "un estilo gótico", "un grupo surrealista", "arte abstracto"], "Maillol, Sunyer."],
    ["Magritte decidió ser pintor al ver una obra de…", ["De Chirico", "David", "Canova", "Picasso"], "Influencia metafísica."],
    ["El historicismo consiste en…", ["imitar estilos del pasado", "pintar al aire libre", "romper la figura", "usar objetos reales"], "Neogriego, neogótico."],
  ],
  feynman: ["Neoclasicismo e Ilustración", "David y Canova", "retorno al orden", "pintura metafísica"],
  mapa: ["LO CLÁSICO VUELVE", [["Neoclasicismo", "razón, Pompeya, David"], ["Siglo XIX", "academia, historicismo"], ["Tras 1918", "retorno al orden"], ["Metafísica", "De Chirico, enigma"]]],
  tarjetas: [
    ["Neoclasicismo", "Vuelta a lo clásico, s. XVIII."],
    ["Winckelmann", "Teórico del ideal griego."],
    ["Villanueva", "Arquitecto del Prado."],
    ["Canova", "Mármol pulido, belleza ideal."],
    ["David", "Horacios, virtud republicana."],
    ["Academicismo", "Clasicismo oficial del XIX."],
    ["Retorno al orden", "Vuelta a la figura tras 1918."],
    ["Pintura metafísica", "Plazas vacías de De Chirico."],
  ],
  glosario: [
    ["Ilustración", "Movimiento del siglo XVIII que confía en la razón."],
    ["Grand Tour", "Viaje de formación por Italia de jóvenes europeos."],
    ["Rococó", "Estilo decorativo y ligero de mediados del XVIII."],
    ["Composición en friso", "Figuras alineadas en un plano, como un relieve."],
    ["Arte pompier", "Pintura académica pulida y grandilocuente del XIX."],
    ["Novecento", "Grupo italiano de clasicismo moderno de los años veinte."],
    ["Noucentisme", "Movimiento catalán de orden clásico y mediterráneo."],
    ["Metafísica", "Lo que está más allá de lo físico; en pintura, el enigma."],
  ],
  situacion: SIT(
    "La plaza enigmática",
    "Un festival de cine de vuestra ciudad os pide el cartel y una fotografía inspirada en la pintura metafísica.",
    ["Estudiad tres cuadros de De Chirico", "Fotografiad un espacio con arcos o soportales a última hora", "Componed el cartel con un elemento clásico fuera de contexto", "Explicad en 100 palabras la referencia"],
    "Cartel y fotografía con texto explicativo.",
    ["Uso de los recursos metafísicos", "Calidad compositiva", "Explicación del vínculo con lo clásico"],
  ),
  familias: [
    "Paseando por Madrid u otra ciudad, buscad edificios neoclásicos con pórtico y frontón.",
    "Ved en la web del Louvre el Psique y Amor de Canova desde varios ángulos.",
    "Buscad juntos un cuadro de De Chirico y contad qué historia os sugiere.",
  ],
  saberes: "la proyección clásica en la edad contemporánea: del Neoclasicismo a la pintura metafísica.",
  ideas: [
    "Comparar en pantalla un relieve romano y El juramento de los Horacios.",
    "Mostrar el recorrido del Paseo del Prado como ejemplo urbano ilustrado.",
    "Taller de fotografía metafísica en el patio a última hora de la tarde.",
  ],
  fuentes: [WIKI("Neoclasicismo", "Neoclasicismo"), WIKI("Pintura metafísica", "Pintura_metafísica")],
});
