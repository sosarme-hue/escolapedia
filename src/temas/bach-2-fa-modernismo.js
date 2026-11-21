// Fundamentos Artísticos 2º Bachillerato · Tema 14. Modernismo, Bauhaus y Movimiento Moderno. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Modernismo, Bauhaus y Movimiento Moderno",
  saber: ["E"],
  objetivos: [
    "Explicar la arquitectura del hierro y el vidrio del siglo XIX",
    "Caracterizar el Modernismo y la arquitectura orgánica, con Gaudí como referente",
    "Analizar la Bauhaus como escuela que unió arte, artesanía y función",
    "Reconocer el Art Déco y su estética del lujo moderno",
    "Explicar los principios del Movimiento Moderno y sus grandes maestros",
  ],
  claves: ["hierro y vidrio", "Palacio de Cristal", "Arts and Crafts", "Modernismo", "Art Nouveau", "arquitectura orgánica", "Gaudí", "Bauhaus", "diseño", "función", "Art Déco", "Movimiento Moderno", "planta libre", "muro cortina"],
  pregunta: {
    texto: "¿Qué tienen en común la Sagrada Familia, una silla de tubo de acero y un rascacielos de cristal?",
    respuesta: "Todos responden a la misma pregunta: ¿cómo debe ser el entorno de la vida moderna? La <b>industria</b> había traído nuevos materiales (hierro, acero, vidrio, hormigón armado) y la producción en serie. El <mark>Modernismo</mark> respondió con formas orgánicas y artesanía; la <b>Bauhaus</b>, con un diseño funcional para fabricar en serie; el <b>Movimiento Moderno</b>, con edificios de volúmenes puros, acero y cristal. Las tres propuestas siguen marcando cómo son nuestras casas, objetos y ciudades.",
  },
  lectura: {
    titulo: "Un palacio en seis meses",
    html: `<p>Londres, 1850. Faltan pocos meses para la primera Exposición Universal y ninguno de los 245 proyectos presentados sirve: todos son lentos y caros. Entonces, un jardinero llamado Joseph Paxton, que había diseñado invernaderos, dibuja en un papel secante un enorme edificio de hierro y vidrio.</p><p>Se fabrican en serie miles de piezas iguales de hierro fundido y casi trescientos mil paneles de vidrio, que se montan en el Hyde Park como un mecano gigante. El Palacio de Cristal, de 564 metros de largo, se levanta en unos seis meses y deja a todos asombrados. Era el primer gran edificio prefabricado: una catedral de luz construida por la industria.</p>`,
  },
  bloques: [
    { h: "La arquitectura del hierro y el vidrio", p: [
      "La Revolución Industrial puso a disposición de los constructores nuevos materiales: el <b>hierro</b> fundido y laminado, después el <b>acero</b>, y el <b>vidrio</b> plano en grandes cantidades. Los ingenieros los usaron en puentes, estaciones de ferrocarril, mercados, invernaderos y pabellones de exposiciones. Es la <mark>arquitectura de los ingenieros</mark>.",
      "Las obras emblemáticas son el <b>Palacio de Cristal</b> de Paxton (Londres, 1851), primer gran edificio prefabricado, y la <b>Torre Eiffel</b> (París, 1889), de 300 metros, criticada por muchos artistas en su día. En España se levantaron el Palacio de Cristal del Retiro (1887), la estación de Atocha o los mercados de hierro de muchas ciudades. Al principio, el hierro se ocultaba tras fachadas de piedra historicistas; poco a poco se mostró sin complejos.",
    ], svg: crono("Hierro y vidrio", [["1779", "puente de Coalbrookdale"], ["1851", "Palacio de Cristal"], ["1887", "Cristal del Retiro"], ["1889", "Torre Eiffel"], ["1892", "estación de Atocha"]]) },
    { h: "Arts and Crafts y el Modernismo", p: [
      "Frente a los objetos industriales baratos y feos, el inglés <b>William Morris</b> impulsó el movimiento <b>Arts and Crafts</b>: recuperar la artesanía bien hecha y unir arte y vida cotidiana en muebles, papeles pintados y libros. Esta idea alimentó el <mark>Modernismo</mark> (hacia 1890-1910), un estilo internacional que recibió nombres distintos: Art Nouveau en Francia y Bélgica, Jugendstil en Alemania, Secesión en Viena, Liberty en Italia.",
      "Sus rasgos son la <b>línea curva</b> y el «latigazo», la inspiración en la <b>naturaleza</b> (flores, tallos, insectos), la asimetría y la unión de todas las artes en un mismo proyecto: arquitectura, vidrieras, forja, cerámica, mobiliario y joyería. Victor Horta en Bruselas, Héctor Guimard con las entradas del metro de París, Charles Rennie Mackintosh en Glasgow o Gustav Klimt en Viena son sus nombres clave.",
    ], svg: cajas("Rasgos del Modernismo", [["Línea curva", "latigazo"], ["Naturaleza", "flores e insectos"], ["Asimetría", "movimiento"], ["Artes aplicadas", "forja, vidrio, cerámica"], ["Obra total", "del edificio a la cuchara"], ["Nombres", "Art Nouveau, Jugendstil"]]) },
    { h: "Gaudí y la arquitectura orgánica", p: [
      "En Cataluña, el Modernismo fue también un símbolo de identidad y de una burguesía próspera. Lluís Domènech i Montaner construyó el <b>Palau de la Música Catalana</b> y Josep Puig i Cadafalch, la Casa Amatller. Pero la figura genial fue <mark>Antoni Gaudí</mark> (1852-1926), que creó una arquitectura <b>orgánica</b>, inspirada en las estructuras de la naturaleza.",
      "Gaudí estudió el equilibrio con maquetas de cuerdas y pesos colgados, de las que obtenía <b>arcos catenarios</b> y columnas inclinadas que trabajan como árboles. En la <b>Casa Batlló</b> la fachada ondula como el mar; en <b>La Pedrera</b> (Casa Milà) no hay un solo muro de carga recto; en el <b>Park Güell</b> usó el trencadís, mosaico de cerámica rota. La <b>Sagrada Familia</b>, en construcción desde 1882, es un bosque de piedra lleno de símbolos.",
    ], extra: OBRA("Casa Milà, La Pedrera", "Antoni Gaudí", "1906-1912, Barcelona"), svg: cuadro("Obras de Gaudí", [["Obra", "Aportación"], ["Casa Batlló", "fachada ondulante"], ["La Pedrera", "planta libre, sin muros rectos"], ["Park Güell", "trencadís"], ["Sagrada Familia", "columnas arbóreas"]]) },
    { h: "La arquitectura orgánica en el siglo XX", p: [
      "La idea de una arquitectura en armonía con la naturaleza siguió viva. El estadounidense <mark>Frank Lloyd Wright</mark> la llamó arquitectura orgánica: edificios que crecen desde el lugar, con materiales naturales y espacios abiertos que fluyen hacia el paisaje. Su obra maestra es la <b>Casa de la Cascada</b> (1936-1939), con terrazas de hormigón que vuelan sobre un salto de agua.",
      "También diseñó el Museo Guggenheim de Nueva York (1959), una rampa en espiral. En Finlandia, <b>Alvar Aalto</b> usó la madera y las curvas para humanizar la arquitectura moderna. Esta corriente inspira hoy la arquitectura sostenible y la biomimética, que copia soluciones de la naturaleza.",
    ], svg: versus("Dos caminos modernos", ["Orgánico", ["naturaleza y lugar", "materiales naturales", "curvas", "Wright, Aalto"]], ["Racionalista", ["función y geometría", "acero, vidrio, hormigón", "volúmenes puros", "Gropius, Le Corbusier"]]) },
    { h: "La Bauhaus: arte y función", p: [
      "En 1919, el arquitecto <b>Walter Gropius</b> fundó en Weimar la <mark>Bauhaus</mark>, una escuela que quería unir de nuevo arte, artesanía y técnica. Los alumnos hacían un curso preliminar sobre forma, color y materiales, y después trabajaban en talleres (metal, madera, textil, cerámica, tipografía) con dos maestros: un artista y un artesano. Allí enseñaron <b>Kandinsky</b>, <b>Paul Klee</b>, Johannes Itten o László Moholy-Nagy.",
      "Pronto la escuela se orientó al <b>diseño para la industria</b>: objetos sencillos, funcionales y fabricables en serie. «La forma sigue a la función». En 1925 se trasladó a Dessau, a un edificio de Gropius con fachada de vidrio. Marcel Breuer diseñó sillas de tubo de acero; Marianne Brandt, lámparas y teteras; Anni Albers, tejidos. Los nazis la cerraron en 1933, y sus profesores emigraron, extendiendo sus ideas por el mundo.",
    ], v: ["mod-b", "Bauhaus, la escuela que revolucionó el mundo"], extra: CITA("Arquitectos, escultores, pintores: todos debemos volver a la artesanía.", "Walter Gropius, Manifiesto de la Bauhaus, 1919 (traducción propia)"), svg: crono("La Bauhaus", [["1919", "Weimar, Gropius"], ["1923", "arte y técnica"], ["1925", "Dessau"], ["1925", "silla Wassily"], ["1930", "Mies, director"], ["1933", "cierre nazi"]]) },
    { h: "El Art Déco", p: [
      "El <mark>Art Déco</mark> recibe su nombre de la Exposición Internacional de Artes Decorativas de París de 1925. Fue el estilo del lujo moderno en los años veinte y treinta: formas geométricas, líneas escalonadas y en zigzag, simetría, materiales caros (lacas, maderas exóticas, cromados, mármoles) y la influencia del cubismo, del antiguo Egipto y de las máquinas.",
      "Se aplicó a todo: joyas de Cartier, carteles de Cassandre, muebles, transatlánticos, cines y rascacielos como el <b>Chrysler Building</b> de Nueva York (1930), con su aguja de acero. En España, muchos edificios de la Gran Vía de Madrid o el Palacio de la Prensa son Art Déco. Al contrario que la Bauhaus, que buscaba objetos para todos, el Art Déco era artesanal y para élites, aunque se popularizó en el cine de Hollywood.",
    ], svg: versus("Bauhaus frente a Art Déco", ["Bauhaus", ["función", "producción en serie", "sin ornamento", "para todos"]], ["Art Déco", ["lujo y decoración", "materiales caros", "geometría y zigzag", "para élites"]]) },
    { h: "El Movimiento Moderno", p: [
      "En los años veinte se formó el <mark>Movimiento Moderno</mark> o estilo internacional, con edificios de hormigón armado, acero y vidrio, sin ornamento, de volúmenes blancos y geométricos. <b>Le Corbusier</b> resumió sus principios en los <b>cinco puntos</b> de la nueva arquitectura: pilotes que elevan el edificio, planta libre, fachada libre, ventana corrida y terraza jardín, todos visibles en la <b>Villa Savoye</b> (1929).",
      "<b>Mies van der Rohe</b>, último director de la Bauhaus, resumió su idea en «menos es más»: el Pabellón de Alemania en Barcelona (1929), con muros que no cierran y materiales nobles, y después los rascacielos de <b>muro cortina</b> de vidrio, como el Seagram de Nueva York. En España, el GATEPAC, con Josep Lluís Sert, defendió esta arquitectura racionalista en los años treinta.",
    ], svg: flujo("Los cinco puntos de Le Corbusier", ["Pilotes: el edificio se eleva", "Planta libre sin muros de carga", "Fachada libre y ventana corrida", "Terraza jardín en la cubierta"]) },
    { h: "Legado: arte, artesanía y diseño hoy", p: [
      "El debate entre <b>arte y artesanía</b>, entre el objeto hecho a mano y el fabricado en serie, sigue abierto. La herencia de la Bauhaus está en los muebles de montaje que tenemos en casa, en la tipografía sin adornos de las pantallas y en las escuelas de diseño de todo el mundo. La del Modernismo, en el gusto por lo hecho a mano, los oficios y la decoración integrada.",
      "Desde los años setenta, la arquitectura <b>posmoderna</b> criticó la frialdad del Movimiento Moderno y recuperó el color, la ironía y las referencias históricas. Hoy, la arquitectura busca la <mark>sostenibilidad</mark>: materiales locales, eficiencia energética, rehabilitación de edificios y diálogo con la naturaleza, recuperando en parte las ideas orgánicas de Gaudí, Wright y Aalto.",
    ], svg: rueda("LEGADO", ["diseño en serie", "tipografía", "oficios y artesanía", "posmodernidad", "rehabilitación", "sostenibilidad"]) },
  ],
  figura: { titulo: "Del hierro al Movimiento Moderno de un vistazo", aria: "Resumen de la arquitectura del hierro, el Modernismo, la Bauhaus y Art Déco, y el Movimiento Moderno", cols: [
    ["Hierro y vidrio", ["Palacio de Cristal", "Torre Eiffel", "estaciones", "prefabricación"]],
    ["Modernismo", ["curva y naturaleza", "Horta, Guimard", "Gaudí", "orgánico: Wright"]],
    ["Diseño", ["Bauhaus", "forma y función", "Art Déco", "lujo geométrico"]],
    ["Moderno", ["Le Corbusier", "cinco puntos", "Mies: menos es más", "muro cortina"]],
  ] },
  video: ["mod-a", "Las obras de Gaudí"],
  ejemplos: [
    ["Analiza la Casa Batlló.", ["Fachada ondulada con trencadís de colores.", "Balcones como máscaras y tejado como dragón.", "Formas inspiradas en el mar y la naturaleza.", "Integra forja, vidrio, cerámica y carpintería."], "Modernismo orgánico de Gaudí (1904-1906)."],
    ["Explica por qué la silla Wassily es un objeto Bauhaus.", ["Tubo de acero curvado, como un manillar.", "Asiento y respaldo de tela tensa.", "Ligera y fabricable en serie.", "Sin ornamento: la forma muestra la estructura."], "Diseño funcional de Breuer (1925)."],
    ["Identifica los cinco puntos en la Villa Savoye.", ["Se apoya en pilotes.", "Planta libre interior.", "Fachada libre con ventana corrida.", "Terraza jardín en la cubierta."], "Manifiesto construido de Le Corbusier."],
  ],
  errores: [
    "Confundir el Modernismo artístico (1890-1910) con el Movimiento Moderno (desde 1920).",
    "Pensar que Gaudí solo hacía decoración: sus innovaciones son estructurales.",
    "Creer que la Bauhaus era un estilo: era una escuela con una manera de enseñar.",
    "Mezclar Art Déco (lujo decorativo) con Bauhaus (función sin ornamento).",
  ],
  ejercicios: {
    b: [
      ["Nombra dos edificios de hierro y vidrio del siglo XIX.", "Palacio de Cristal de Londres (1851), Torre Eiffel (1889), Palacio de Cristal del Retiro o estación de Atocha."],
      ["¿Qué nombres recibió el Modernismo en Europa?", "Art Nouveau (Francia y Bélgica), Jugendstil (Alemania), Secesión (Viena), Liberty (Italia), Modernismo (España)."],
      ["¿Quién fundó la Bauhaus, dónde y cuándo?", "Walter Gropius, en Weimar, en 1919."],
      ["Enumera los cinco puntos de Le Corbusier.", "Pilotes, planta libre, fachada libre, ventana corrida y terraza jardín."],
    ],
    m: [
      ["¿Qué es la arquitectura orgánica? Pon dos ejemplos.", "La que se inspira en las formas y estructuras de la naturaleza y se integra en el lugar: Gaudí (columnas arbóreas de la Sagrada Familia) y Wright (Casa de la Cascada)."],
      ["Explica la frase «la forma sigue a la función».", "El diseño de un objeto o edificio debe partir de su uso; la forma resulta de la función y del material, sin añadir ornamento innecesario."],
      ["¿Qué relación hay entre Arts and Crafts y el Modernismo?", "Arts and Crafts defendió la artesanía y la unión del arte con la vida cotidiana; el Modernismo heredó la integración de todas las artes aplicadas en un mismo proyecto."],
      ["¿Por qué el hierro permitió una nueva arquitectura?", "Era resistente, se fabricaba en serie y permitía estructuras ligeras, grandes luces y fachadas de vidrio, construidas muy rápido."],
    ],
    a: [
      ["Diseña un objeto cotidiano con los principios de la Bauhaus y explica sus decisiones.", "Respuesta práctica. Debe incluir boceto, material, función, cómo se fabricaría en serie y por qué se elimina el ornamento."],
      ["Compara la Casa Batlló y la Villa Savoye como dos ideas de la vida moderna.", "Batlló: curvas, naturaleza, artesanía, ornamento integrado, identidad local. Savoye: geometría pura, hormigón, funcionalidad, industria, estilo internacional. Ambas usan técnicas nuevas para una burguesía moderna."],
    ],
  },
  quiz: [
    ["El Palacio de Cristal de Londres es de…", ["Paxton", "Eiffel", "Gaudí", "Gropius"], "1851."],
    ["William Morris impulsó…", ["Arts and Crafts", "la Bauhaus", "el Art Déco", "el GATEPAC"], "Artesanía."],
    ["Las entradas del metro de París son de…", ["Guimard", "Horta", "Gaudí", "Mackintosh"], "Art Nouveau."],
    ["El trencadís es…", ["mosaico de cerámica rota", "un arco catenario", "una silla", "un tipo de vidrio"], "Park Güell."],
    ["El Palau de la Música Catalana es de…", ["Domènech i Montaner", "Gaudí", "Puig i Cadafalch", "Sert"], "Barcelona."],
    ["La Casa de la Cascada es de…", ["Frank Lloyd Wright", "Le Corbusier", "Mies van der Rohe", "Aalto"], "Orgánica."],
    ["La Bauhaus se trasladó en 1925 a…", ["Dessau", "Berlín", "Múnich", "Viena"], "Edificio de Gropius."],
    ["La silla de tubo de acero Wassily es de…", ["Marcel Breuer", "Gropius", "Gaudí", "Wright"], "1925."],
    ["El Chrysler Building es…", ["Art Déco", "modernista", "Bauhaus", "orgánico"], "1930."],
    ["«Menos es más» es de…", ["Mies van der Rohe", "Le Corbusier", "Gaudí", "Morris"], "Pabellón de Barcelona."],
  ],
  examen: [
    ["Gaudí obtenía arcos catenarios con…", ["maquetas de cuerdas y pesos", "cálculo por ordenador", "moldes de yeso", "planos de hierro"], "Equilibrio natural."],
    ["Enseñaron en la Bauhaus…", ["Kandinsky y Klee", "Picasso y Braque", "Dalí y Miró", "Monet y Renoir"], "Talleres."],
    ["El Art Déco toma su nombre de una exposición de…", ["1925", "1851", "1889", "1919"], "Artes Decorativas, París."],
    ["El grupo racionalista español fue el…", ["GATEPAC", "El Paso", "Equipo Crónica", "Dau al Set"], "Josep Lluís Sert."],
  ],
  feynman: ["arquitectura del hierro", "Modernismo y Gaudí", "Bauhaus y función", "Movimiento Moderno"],
  mapa: ["ARQUITECTURA Y DISEÑO", [["Hierro", "Paxton, Eiffel"], ["Modernismo", "curva, Gaudí"], ["Bauhaus", "función, Art Déco"], ["Moderno", "Le Corbusier, Mies"]]],
  tarjetas: [
    ["Palacio de Cristal", "Hierro y vidrio prefabricado, 1851."],
    ["Arts and Crafts", "Artesanía frente a industria."],
    ["Modernismo", "Curva, naturaleza, artes unidas."],
    ["Gaudí", "Arquitectura orgánica, catenarias."],
    ["Bauhaus", "Escuela de arte y diseño, 1919."],
    ["Art Déco", "Lujo geométrico de los años veinte."],
    ["Le Corbusier", "Cinco puntos, Villa Savoye."],
    ["Muro cortina", "Fachada de vidrio colgada."],
  ],
  glosario: [
    ["Prefabricación", "Fabricar piezas en serie para montarlas en obra."],
    ["Latigazo", "Línea curva nerviosa del Art Nouveau."],
    ["Arco catenario", "Arco con la forma de una cadena colgada invertida."],
    ["Trencadís", "Mosaico de trozos de cerámica rota."],
    ["Diseño industrial", "Proyecto de objetos para fabricar en serie."],
    ["Hormigón armado", "Hormigón con barras de acero en su interior."],
    ["Planta libre", "Interior sin muros de carga, con soportes puntuales."],
    ["Estilo internacional", "Otro nombre del Movimiento Moderno."],
  ],
  situacion: SIT(
    "Rediseñar el aula",
    "El centro quiere renovar un aula y os pide una propuesta de mobiliario e iluminación con los principios de la Bauhaus.",
    ["Analizad las funciones del aula y sus usuarios", "Haced bocetos de una mesa, una silla y una lámpara", "Elegid materiales y explicad la fabricación", "Presentad maquetas o modelos 3D"],
    "Propuesta con bocetos, maqueta y memoria de diseño.",
    ["Coherencia entre forma y función", "Viabilidad de materiales y fabricación", "Calidad de la presentación"],
  ),
  familias: [
    "Si visitáis Barcelona, recorred el paseo de Gràcia con este tema.",
    "Buscad en casa un objeto de diseño funcional y otro decorativo y comparadlos.",
    "Visitad un mercado de hierro o una estación antigua de vuestra ciudad.",
  ],
  saberes: "el Modernismo, arquitectura y artes aplicadas, la arquitectura orgánica; la Bauhaus, arte y función, diseño y artes aplicadas, el Art Déco, arte y artesanía; la arquitectura del vidrio y hierro y el Movimiento Moderno.",
  ideas: [
    "Construir una maqueta de catenaria con cadenas y cartón como Gaudí.",
    "Taller de diseño de una silla con cartón reciclado.",
    "Comparar fotos de Gran Vía (Art Déco) y de un edificio racionalista.",
  ],
  fuentes: [WIKI("Bauhaus", "Bauhaus"), WIKI("Modernismo catalán", "Modernismo_catalán"), WIKI("Movimiento moderno", "Movimiento_moderno")],
});
