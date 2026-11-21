// Fundamentos Artísticos 2º Bachillerato · Tema 15. Arte y comunicación: del cartel al arte digital. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Arte y comunicación: del cartel al arte digital",
  saber: ["E"],
  objetivos: [
    "Explicar el nacimiento del cartel moderno y su relación con el arte",
    "Reconocer el uso del cartel en las vanguardias, la propaganda y la publicidad",
    "Relacionar el pop art con los medios de comunicación de masas",
    "Caracterizar el videoarte, el arte en las redes y el arte digital",
    "Analizar el uso de la luz como elemento plástico en el arte contemporáneo",
  ],
  claves: ["cartel", "litografía en color", "Toulouse-Lautrec", "Mucha", "constructivismo", "propaganda", "publicidad", "pop art", "videoarte", "net art", "arte digital", "arte generativo", "luz", "instalación"],
  pregunta: {
    texto: "¿Puede un anuncio colgado en la calle ser una obra de arte que hoy vale miles de euros?",
    respuesta: "Sí. A finales del siglo XIX, pintores como <b>Toulouse-Lautrec</b> o <b>Alfons Mucha</b> diseñaron carteles para cabarés, teatros y marcas de galletas o bicicletas. La gente los arrancaba de las paredes para coleccionarlos, y hoy están en los museos. El <mark>cartel</mark> fue el primer gran encuentro entre el arte y la comunicación de masas. Después llegaron la propaganda, la publicidad, la televisión, el vídeo e internet, y los artistas no han dejado de usar cada nuevo medio para crear, criticar y comunicar.",
  },
  lectura: {
    titulo: "Un televisor como lienzo",
    html: `<p>En 1963, en una galería de Wuppertal, en Alemania, el coreano Nam June Paik colocó trece televisores de segunda mano por el suelo y manipuló sus circuitos con imanes. Las imágenes de los programas se retorcían, se partían en líneas, se convertían en manchas de luz que el público podía alterar.</p><p>Dos años después compró una de las primeras cámaras de vídeo portátiles, la Portapak de Sony, y grabó desde un taxi la visita del papa a Nueva York. Esa misma noche la proyectó en un café. Muchos consideran ese momento el nacimiento del videoarte. Paik decía que, igual que el collage sustituyó al óleo, el tubo de rayos catódicos sustituiría al lienzo.</p>`,
  },
  bloques: [
    { h: "El nacimiento del cartel moderno", p: [
      "El <mark>cartel</mark> moderno nació en París en la década de 1870, gracias a la <b>litografía en color</b>, que permitía imprimir grandes tiradas de imágenes llamativas. <b>Jules Chéret</b> fue el pionero, con figuras femeninas alegres y colores vivos. Las calles de las ciudades se llenaron de imágenes: se hablaba de la «galería de arte de la calle».",
      "<b>Henri de Toulouse-Lautrec</b> diseñó carteles para el Moulin Rouge y para artistas de cabaré como Aristide Bruant, con siluetas planas, colores intensos, encuadres atrevidos y tipografía integrada, influido por las estampas japonesas. <b>Alfons Mucha</b> creó el estilo del cartel Art Nouveau, con mujeres de largas melenas entre flores y arabescos, para la actriz Sarah Bernhardt y para marcas comerciales.",
    ], v: ["com-a", "Historia del cartel"], extra: OBRA("Moulin Rouge, La Goulue", "Henri de Toulouse-Lautrec", "1891, litografía en color"), svg: cajas("Pioneros del cartel", [["Chéret", "color y alegría"], ["Toulouse-Lautrec", "siluetas planas"], ["Mucha", "Art Nouveau"], ["Ramon Casas", "Anís del Mono"]]) },
    { h: "El cartel en las vanguardias y la propaganda", p: [
      "Las vanguardias llevaron al cartel sus nuevos lenguajes. En la Rusia revolucionaria, los <b>constructivistas</b> Aleksandr Ródchenko y El Lissitzky diseñaron carteles con diagonales, fotomontaje y tipografía de palo seco para difundir la revolución. La Bauhaus impulsó una tipografía y una composición funcionales. El francés <b>Cassandre</b> hizo carteles Art Déco de trenes y barcos con formas geométricas monumentales.",
      "En las dos guerras mundiales y en la Guerra Civil española, el cartel fue un arma de <mark>propaganda</mark>: alistamiento, ahorro, enemigos caricaturizados. En España, artistas como Josep Renau crearon carteles republicanos de gran calidad, y <b>Picasso</b> pintó el <i>Guernica</i> para el pabellón de la República en la Exposición de París de 1937, una denuncia que se difundió por todo el mundo como imagen de la guerra.",
    ], svg: crono("Arte y cartel", [["1891", "Moulin Rouge"], ["1896", "Mucha"], ["1920", "constructivismo"], ["1927", "Cassandre"], ["1937", "Renau, Guernica"], ["1962", "pop art"]]) },
    { h: "Publicidad y pop art", p: [
      "Tras la Segunda Guerra Mundial, la sociedad de consumo, la <b>televisión</b> y la <b>publicidad</b> crearon un nuevo paisaje visual. El <mark>pop art</mark> lo convirtió en tema del arte: Andy Warhol repitió latas de sopa y rostros de estrellas con la serigrafía, una técnica comercial; Roy Lichtenstein amplió viñetas de cómic con sus puntos de impresión.",
      "Warhol, que había trabajado como ilustrador publicitario, borró la frontera entre arte y anuncio. A la vez, la publicidad aprendió del arte: del surrealismo, la sorpresa; del pop, el color plano y la repetición. Desde entonces, artistas críticos como <b>Barbara Kruger</b> usan el lenguaje de los anuncios, con frases en letras blancas sobre fondo rojo, para cuestionar el consumo y el poder.",
    ], svg: versus("Arte y publicidad", ["El arte toma de la publicidad", ["imágenes de marcas", "serigrafía", "repetición", "eslóganes"]], ["La publicidad toma del arte", ["sorpresa surrealista", "color pop", "composición vanguardista", "prestigio cultural"]]) },
    { h: "El videoarte", p: [
      "El <mark>videoarte</mark> nació en los años sesenta, cuando aparecieron las cámaras de vídeo portátiles. Los artistas usaron la imagen en movimiento y el televisor como material: <b>Nam June Paik</b>, considerado su padre, manipuló televisores y construyó esculturas con ellos, como la gigantesca <i>Electronic Superhighway</i> (1995), un mapa de Estados Unidos hecho con 336 pantallas y neón.",
      "Otros artistas usaron el vídeo para grabar acciones, cuestionar la televisión o explorar el tiempo. <b>Bill Viola</b> creó videoinstalaciones a cámara muy lenta sobre el nacimiento, la muerte y el agua, con una intensidad casi religiosa. <b>Pipilotti Rist</b> proyecta imágenes de colores en espacios inmersivos. En España, Antoni Muntadas analizó críticamente los medios de comunicación.",
    ], svg: flujo("Nace el videoarte", ["Televisores manipulados (1963)", "Cámara portátil Portapak (1965)", "Grabar acciones y tiempo", "Videoinstalaciones y proyecciones"]) },
    { h: "Arte en las redes", p: [
      "Con la llegada de <b>internet</b> en los años noventa surgió el <mark>net art</mark>: obras que solo existen en la red, hechas con páginas web, enlaces, códigos y la participación de los usuarios. Artistas como Olia Lialina o el colectivo JODI jugaron con los errores, los navegadores y la estética de la pantalla.",
      "Hoy el arte circula y se crea en <b>redes sociales</b>, donde artistas como Amalia Ulman han hecho performances en Instagram que cuestionaban la identidad digital y la imagen perfecta. Las redes democratizan la difusión, pero también plantean problemas: los algoritmos deciden qué se ve, la imagen se consume en segundos y se debate sobre derechos de autor, apropiación y desinformación.",
    ], svg: rueda("ARTE EN RED", ["net art", "código", "participación", "redes sociales", "algoritmos", "derechos de autor"]) },
    { h: "El arte digital", p: [
      "El <mark>arte digital</mark> usa el ordenador como herramienta o como medio. Ya en los años sesenta, pioneras como Vera Molnar crearon dibujos con programas informáticos: es el <b>arte generativo</b>, en el que el artista escribe reglas y el ordenador produce la obra, a veces con azar. Después llegaron la imagen 3D, la animación, la realidad virtual y aumentada y los videojuegos como lenguaje artístico.",
      "En la actualidad, la <b>inteligencia artificial</b> genera imágenes a partir de textos, y artistas como Refik Anadol crean enormes instalaciones con datos. Esto abre preguntas que ya conocemos de temas anteriores: ¿quién es el autor?, ¿qué es la originalidad?, ¿qué valor tiene una obra que puede copiarse sin límite? El arte digital también exige conservar obras que dependen de máquinas y programas que envejecen.",
    ], svg: cuadro("Arte digital", [["Tipo", "Ejemplo"], ["Generativo", "Vera Molnar, 1968"], ["Realidad virtual", "obras inmersivas"], ["Datos", "Refik Anadol"], ["IA", "imagen desde texto"]]) },
    { h: "La luz como elemento plástico", p: [
      "La luz ha sido siempre clave en la pintura, pero en el siglo XX se convirtió en <mark>material</mark> de la obra. László Moholy-Nagy, en la Bauhaus, construyó un modulador de luz; Dan Flavin hizo instalaciones solo con tubos fluorescentes de colores, y Bruce Nauman escribió frases con neón.",
      "<b>James Turrell</b> crea espacios en los que el espectador percibe la luz como una sustancia, y abre techos al cielo en sus <i>Skyspaces</i>. <b>Olafur Eliasson</b> instaló en la Tate Modern de Londres un enorme sol artificial en niebla, <i>The Weather Project</i> (2003), que visitaron dos millones de personas. Festivales de luz, como los de Lyon o Madrid, llevan hoy estas propuestas a la calle.",
    ], extra: OBRA("The Weather Project", "Olafur Eliasson", "2003, lámparas de monofrecuencia, espejo y niebla, Tate Modern"), svg: cajas("Artistas de la luz", [["Moholy-Nagy", "modulador de luz"], ["Dan Flavin", "fluorescentes"], ["Bruce Nauman", "neón"], ["James Turrell", "Skyspaces"], ["Olafur Eliasson", "sol artificial"], ["Festivales", "luz en la ciudad"]]) },
    { h: "Analizar una imagen de los medios", p: [
      "Vivimos rodeados de imágenes que buscan informarnos, convencernos o vendernos algo. Para analizarlas, sirven los métodos de la historia del arte. Primero, el <b>emisor</b> y el <b>receptor</b>: ¿quién la ha hecho y para quién? Segundo, el <mark>mensaje</mark> y su función: informar, persuadir, criticar, emocionar.",
      "Tercero, los recursos visuales: composición, color, tipografía, encuadre, relación entre texto e imagen. Cuarto, el <b>medio</b>: un cartel, un anuncio de televisión, una publicación en redes o una instalación cambian cómo se recibe el mensaje. Por último, la mirada crítica: ¿qué muestra y qué oculta?, ¿qué estereotipos usa? Esta alfabetización visual es una de las competencias más necesarias hoy.",
    ], svg: flujo("Analizar una imagen", ["¿Quién emite y para quién?", "¿Qué mensaje y función?", "¿Qué recursos visuales usa?", "¿Qué muestra y qué oculta?"]) },
  ],
  figura: { titulo: "Arte y comunicación de un vistazo", aria: "Resumen del cartel, la publicidad y el pop, el vídeo y el arte digital, y la luz", cols: [
    ["Cartel", ["litografía", "Toulouse-Lautrec", "Mucha", "propaganda"]],
    ["Medios de masas", ["publicidad", "pop art", "Warhol", "Barbara Kruger"]],
    ["Pantallas", ["videoarte, Paik", "Bill Viola", "net art", "arte digital e IA"]],
    ["Luz", ["Flavin", "Turrell", "Eliasson", "festivales"]],
  ] },
  video: ["com-b", "Qué es el videoarte"],
  ejemplos: [
    ["Analiza un cartel de Toulouse-Lautrec.", ["Siluetas planas y colores intensos.", "Encuadre cortado, influencia japonesa.", "Texto integrado en la imagen.", "Función: anunciar un espectáculo."], "Cartel como arte de la calle (1891)."],
    ["Explica Electronic Superhighway de Paik.", ["Mapa de Estados Unidos con neón.", "336 televisores con vídeos de cada estado.", "Título que anticipa la autopista de la información.", "Reflexión sobre medios y país."], "Escultura de videoarte (1995)."],
    ["Analiza una obra de Barbara Kruger.", ["Fotografía en blanco y negro.", "Frase en letras blancas sobre franja roja.", "Imita el lenguaje publicitario.", "Critica el consumo y el poder."], "Arte crítico con el lenguaje de la publicidad."],
  ],
  errores: [
    "Pensar que el cartel es «arte menor»: muchos grandes artistas lo practicaron.",
    "Confundir videoarte con cine: el videoarte suele exponerse como instalación y no narra una historia.",
    "Creer que el arte digital empezó con la inteligencia artificial: hay arte por ordenador desde los años sesenta.",
    "Analizar una imagen de los medios sin preguntarse quién la emite y con qué intención.",
  ],
  ejercicios: {
    b: [
      ["¿Qué técnica permitió el cartel moderno?", "La litografía en color, que permitía imprimir grandes tiradas de imágenes de colores."],
      ["Nombra dos cartelistas de finales del siglo XIX.", "Jules Chéret, Toulouse-Lautrec, Alfons Mucha o Ramon Casas (dos de ellos)."],
      ["¿Quién es considerado el padre del videoarte?", "Nam June Paik."],
      ["¿Qué es el net art?", "Arte que solo existe en internet, hecho con páginas web, enlaces, código y participación de los usuarios."],
    ],
    m: [
      ["¿Cómo usaron el cartel los constructivistas rusos?", "Para difundir la revolución con diagonales, fotomontaje, colores planos (rojo y negro) y tipografía de palo seco."],
      ["Explica la relación entre pop art y publicidad.", "El pop tomó imágenes, técnicas (serigrafía) y estrategias (repetición) de la publicidad; la publicidad, a su vez, adoptó el color y el lenguaje del pop."],
      ["¿Qué preguntas plantea la IA al arte?", "Quién es el autor, qué es la originalidad, cómo se protegen los derechos de los artistas cuyas obras sirven de entrenamiento y qué valor tiene una imagen reproducible sin límite."],
      ["¿Cómo usa la luz James Turrell?", "Como materia de la obra: crea espacios donde la luz parece sólida y aberturas al cielo (Skyspaces) para que el espectador perciba la luz misma."],
    ],
    a: [
      ["Analiza un anuncio actual siguiendo los cuatro pasos del último apartado.", "Respuesta abierta. Debe identificar emisor y receptor, mensaje y función, recursos visuales (color, tipografía, encuadre) y una valoración crítica de lo que muestra y oculta."],
      ["Diseña un cartel para un evento del centro con lenguaje de vanguardia.", "Respuesta práctica. Debe elegir una referencia (Toulouse-Lautrec, constructivismo, Cassandre, pop), aplicarla a la composición, la tipografía y el color, y explicar las decisiones."],
    ],
  },
  quiz: [
    ["El pionero del cartel en color fue…", ["Jules Chéret", "Warhol", "Paik", "Kruger"], "París, 1870."],
    ["Los carteles del Moulin Rouge son de…", ["Toulouse-Lautrec", "Mucha", "Cassandre", "Ródchenko"], "1891."],
    ["El cartel Art Nouveau tiene como referente a…", ["Alfons Mucha", "Ródchenko", "Lichtenstein", "Turrell"], "Sarah Bernhardt."],
    ["El Guernica se expuso en el pabellón de la República en…", ["París, 1937", "Madrid, 1936", "Nueva York, 1939", "Londres, 1937"], "Exposición Internacional."],
    ["Warhol usó la técnica de la…", ["serigrafía", "xilografía", "acuarela", "fresco"], "Técnica comercial."],
    ["Las frases blancas sobre fondo rojo son de…", ["Barbara Kruger", "Paik", "Mucha", "Flavin"], "Crítica al consumo."],
    ["Electronic Superhighway es de…", ["Nam June Paik", "Bill Viola", "Turrell", "Warhol"], "1995."],
    ["El arte generativo lo inició, entre otros,…", ["Vera Molnar", "Toulouse-Lautrec", "Cassandre", "Renau"], "Años sesenta."],
    ["Hizo instalaciones con tubos fluorescentes…", ["Dan Flavin", "Bill Viola", "Mucha", "Kruger"], "Luz."],
    ["The Weather Project se instaló en…", ["la Tate Modern", "el MoMA", "el Prado", "el Pompidou"], "2003."],
  ],
  examen: [
    ["Josep Renau es conocido por sus…", ["carteles republicanos", "videoinstalaciones", "esculturas de neón", "obras de net art"], "Guerra Civil."],
    ["Bill Viola trabaja con…", ["vídeo a cámara lenta", "carteles", "litografía", "serigrafía"], "Videoinstalación."],
    ["Amalia Ulman hizo una performance en…", ["Instagram", "televisión", "un cartel", "la radio"], "Identidad digital."],
    ["Cassandre diseñó carteles…", ["Art Déco", "dadá", "barrocos", "impresionistas"], "Trenes y barcos."],
  ],
  feynman: ["el cartel moderno", "pop y publicidad", "videoarte y net art", "luz como material"],
  mapa: ["ARTE Y MEDIOS", [["Cartel", "Lautrec, Mucha, propaganda"], ["Masas", "publicidad y pop"], ["Pantallas", "vídeo, red, digital"], ["Luz", "Flavin, Turrell, Eliasson"]]],
  tarjetas: [
    ["Cartel moderno", "Litografía en color, París 1870."],
    ["Toulouse-Lautrec", "Carteles del Moulin Rouge."],
    ["Propaganda", "Imagen al servicio de una causa."],
    ["Pop art", "Arte con imágenes de consumo."],
    ["Videoarte", "Vídeo y televisor como material, Paik."],
    ["Net art", "Arte que solo existe en internet."],
    ["Arte generativo", "Reglas y ordenador crean la obra."],
    ["Luz como material", "Flavin, Turrell, Eliasson."],
  ],
  glosario: [
    ["Litografía", "Grabado sobre piedra basado en el rechazo entre agua y grasa."],
    ["Tipografía", "Diseño y uso de las letras."],
    ["Serigrafía", "Impresión con tinta a través de una malla."],
    ["Fotomontaje", "Imagen hecha combinando fotografías."],
    ["Videoinstalación", "Obra que dispone vídeos en un espacio."],
    ["Realidad aumentada", "Capa digital superpuesta a la realidad."],
    ["Instalación", "Obra que ocupa y transforma un espacio."],
    ["Alfabetización visual", "Capacidad de leer críticamente las imágenes."],
  ],
  situacion: SIT(
    "Campaña con arte",
    "Una ONG local os pide una campaña sobre un problema de vuestro barrio que combine cartel, vídeo breve y publicación en redes.",
    ["Elegid el problema y el público", "Diseñad un cartel con referencias de la historia del cartel", "Grabad un vídeo de 30 segundos con lenguaje de videoarte", "Publicad o simulad la campaña en redes y analizad la respuesta"],
    "Cartel, vídeo y publicación con memoria de análisis.",
    ["Claridad y eficacia del mensaje", "Uso de referentes artísticos", "Reflexión crítica sobre el medio"],
  ),
  familias: [
    "Fijaos en los carteles de vuestra calle: ¿cuál os llama más la atención y por qué?",
    "Buscad juntos un cartel de Toulouse-Lautrec y otro actual y comparadlos.",
    "Hablad sobre cómo os llegan los anuncios en las redes y quién decide lo que veis.",
  ],
  saberes: "arte y medios de comunicación: del cartel al Pop Art; el arte en pantalla: el videoarte, arte en las redes, arte digital; la luz como elemento plástico.",
  ideas: [
    "Analizar en grupo tres anuncios con la ficha del último apartado.",
    "Realizar un vídeo de un minuto a cámara lenta al estilo de Bill Viola.",
    "Crear una instalación de luz sencilla con linternas y papel de celofán.",
  ],
  fuentes: [WIKI("Cartel", "Cartel"), WIKI("Videoarte", "Videoarte"), WIKI("Arte digital", "Arte_digital")],
});
