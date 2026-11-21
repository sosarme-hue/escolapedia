// Fundamentos Artísticos 2º Bachillerato · Tema 9. La arquitectura de la romanización a la Baja Edad Media. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "La arquitectura de la romanización a la Baja Edad Media",
  saber: ["C"],
  objetivos: [
    "Reconocer la herencia de la arquitectura romana en Hispania",
    "Explicar la planta basilical paleocristiana y las aportaciones bizantinas",
    "Distinguir la arquitectura prerrománica y la hispanomusulmana",
    "Comparar los sistemas constructivos del románico y del gótico",
    "Analizar ejemplos españoles de cada etapa",
  ],
  claves: ["romanización", "basílica", "planta de cruz latina", "cúpula sobre pechinas", "arco de herradura", "mezquita", "románico", "bóveda de cañón", "gótico", "arco apuntado", "bóveda de crucería", "arbotante", "vidriera"],
  pregunta: {
    texto: "¿Por qué una iglesia románica es oscura y maciza, y una catedral gótica parece hecha de luz?",
    respuesta: "Por la manera de sostener el techo. El <b>románico</b> usa la <mark>bóveda de cañón</mark>, que empuja de forma continua sobre los muros; por eso estos deben ser muy gruesos y con ventanas pequeñas. El <b>gótico</b> combina el <mark>arco apuntado</mark> y la <b>bóveda de crucería</b>, que concentran el peso en unos pocos puntos; desde fuera, los <b>arbotantes</b> y contrafuertes lo llevan al suelo. Liberados de carga, los muros pueden abrirse con enormes vidrieras de colores. Una solución técnica cambió por completo el ambiente del templo.",
  },
  lectura: {
    titulo: "El abad que quería luz",
    html: `<p>Hacia 1140, cerca de París, el abad Suger decidió reconstruir la cabecera de su iglesia de Saint-Denis, donde se enterraban los reyes de Francia. Suger creía que Dios es luz y que la belleza material podía elevar el alma hacia lo divino.</p><p>Sus maestros de obra combinaron arcos apuntados, bóvedas de nervios y finos pilares para abrir los muros con grandes vidrieras. Cuando la nueva cabecera se consagró en 1144, la luz de colores inundaba el altar. Suger escribió con orgullo que la iglesia brillaba con «una luz maravillosa y continua». Había nacido el gótico, que en pocas décadas llegaría a Chartres, a Burgos, a León y a toda Europa.</p>`,
  },
  bloques: [
    { h: "La romanización de Hispania", p: [
      "Entre el siglo II a. C. y el V d. C., Roma transformó la península ibérica: es la <mark>romanización</mark>. Fundó ciudades con un trazado en cuadrícula (cardo y decumano), un foro en el centro, templos, teatros, anfiteatros y termas. Construyó calzadas, puentes y acueductos que todavía se usan o se conservan.",
      "Hispania conserva obras excepcionales: el <b>acueducto de Segovia</b>, de sillares de granito sin argamasa; el <b>puente de Alcántara</b>, sobre el Tajo; el <b>teatro de Mérida</b> y su anfiteatro; el templo de Vic o la torre de Hércules de La Coruña, faro romano en uso. Del mundo romano, la arquitectura posterior heredó el arco de medio punto, la bóveda, el uso del ladrillo y del mortero, y el modelo de la <b>basílica</b>.",
    ], svg: cuadro("Hispania romana", [["Obra", "Tipo", "Lugar"], ["Acueducto", "ingeniería", "Segovia"], ["Puente", "ingeniería", "Alcántara"], ["Teatro", "ocio", "Mérida"], ["Torre de Hércules", "faro", "A Coruña"]]) },
    { h: "Paleocristiano y bizantino", p: [
      "Cuando el cristianismo fue legalizado en el año 313, los cristianos necesitaron grandes templos. Tomaron el modelo de la <mark>basílica</mark> romana, un edificio civil: planta rectangular dividida en <b>naves</b> por columnas, la central más alta y con ventanas, cubierta de madera y un <b>ábside</b> semicircular al fondo, donde se coloca el altar. Delante había un patio, el atrio.",
      "En el Imperio de Oriente, el arte <b>bizantino</b> desarrolló la planta central y la cúpula. <b>Santa Sofía</b> de Constantinopla (532-537), de Antemio de Tralles e Isidoro de Mileto, tiene una cúpula de 31 metros apoyada sobre cuatro <b>pechinas</b>, triángulos curvos que permiten pasar de la planta cuadrada al círculo. Una fila de ventanas en la base hace que la cúpula parezca flotar. Su interior se cubría de mosaicos dorados.",
    ], svg: versus("Dos modelos de templo", ["Basílica", ["planta longitudinal", "naves y ábside", "cubierta de madera", "Occidente"]], ["Bizantino", ["planta central", "cúpula sobre pechinas", "mosaicos dorados", "Santa Sofía"]]) },
    { h: "El prerrománico hispano", p: [
      "Entre los siglos VI y X, en la península surgieron varias arquitecturas de pequeño tamaño pero gran originalidad: el <mark>prerrománico</mark>. Las iglesias <b>visigodas</b>, como San Juan de Baños (Palencia) o San Pedro de la Nave (Zamora), usan sillares bien tallados y el <b>arco de herradura</b>, que los musulmanes adoptarían después.",
      "En el reino de Asturias, el arte <b>asturiano</b> del siglo IX levantó Santa María del Naranco, un palacio con bóveda de cañón y arcos fajones, y San Miguel de Lillo. Los cristianos que emigraron desde al-Ándalus al norte construyeron iglesias <b>mozárabes</b> o de repoblación, como San Miguel de la Escalada (León), que combinan tradiciones cristianas e islámicas.",
    ], svg: crono("Prerrománico hispano", [["661", "San Juan de Baños"], ["h. 690", "San Pedro de la Nave"], ["842", "Santa María del Naranco"], ["913", "San Miguel de la Escalada"], ["950", "Beatos mozárabes"]]) },
    { h: "La arquitectura hispanomusulmana", p: [
      "Desde 711, al-Ándalus desarrolló una arquitectura propia. Su obra cumbre es la <mark>Mezquita de Córdoba</mark>, iniciada en 785 y ampliada durante dos siglos. Su sala de oración es un bosque de columnas con <b>arcos dobles superpuestos</b> de herradura que alternan dovelas rojas de ladrillo y blancas de piedra. La ampliación de al-Hakam II añadió un mihrab cubierto de mosaicos y cúpulas de nervios entrecruzados.",
      "Más tarde, los almohades construyeron en Sevilla la mezquita cuyo alminar es hoy la <b>Giralda</b>. En el periodo nazarí (siglos XIII-XV), la <b>Alhambra</b> de Granada llevó al extremo la delicadeza: materiales pobres (ladrillo, yeso, madera) cubiertos de yeserías, azulejos, mocárabes y versos, en torno a patios con agua, como el de los Leones.",
    ], extra: OBRA("Mezquita de Córdoba", "Abderramán I y sucesores", "785-987, Córdoba"), svg: cajas("Arte de al-Ándalus", [["Mezquita de Córdoba", "arcos bicolores"], ["Medina Azahara", "ciudad palacio"], ["Giralda", "alminar almohade"], ["Alhambra", "yeserías y agua"]]) },
    { h: "El románico", p: [
      "Hacia el año 1000, Europa vivió un renacer de la construcción: es el <mark>románico</mark> (siglos XI-XII), primer estilo común a toda la Europa cristiana, difundido por los monjes de Cluny y por el Camino de Santiago. Sus iglesias tienen planta de <b>cruz latina</b>, con naves, un crucero y una cabecera con ábsides semicirculares.",
      "Usa el <b>arco de medio punto</b> y la <b>bóveda de cañón</b>, reforzada por arcos fajones, o la de arista. Como la bóveda empuja sobre todo el muro, este es muy grueso, con <b>contrafuertes</b> adosados y pocas ventanas pequeñas. El resultado es un espacio macizo, en penumbra, que invita al recogimiento. Ejemplos: la catedral de <b>Santiago de Compostela</b>, San Martín de Frómista o San Isidoro de León.",
    ], svg: flujo("Lógica del románico", ["Bóveda de cañón pesada", "Empuja de forma continua", "Muros gruesos y contrafuertes", "Ventanas pequeñas y penumbra"]) },
    { h: "El gótico: estructura y luz", p: [
      "El <mark>gótico</mark> nació en Francia a mediados del siglo XII y se extendió hasta el XV. Es el arte de las ciudades y de las <b>catedrales</b>, que competían en altura y belleza. Su secreto es estructural: el <b>arco apuntado</b> empuja menos hacia los lados y se adapta a cualquier anchura; la <b>bóveda de crucería</b>, con nervios que se cruzan, concentra el peso en los pilares.",
      "Desde el exterior, los <b>arbotantes</b>, arcos que saltan por encima de las naves laterales, llevan el empuje hasta los <b>contrafuertes</b>, rematados por pináculos. Así los muros dejan de sostener y se convierten en grandes <b>vidrieras</b> de colores que cuentan historias sagradas con luz. En la fachada destacan los rosetones, las torres y los pórticos esculpidos.",
    ], v: ["med-b", "La construcción de las grandes catedrales"], extra: CITA("La noble obra brilla, y al brillar ilumina las mentes para que se eleven, a través de las luces verdaderas, hacia la luz verdadera.", "Abad Suger, sobre Saint-Denis, h. 1145 (traducción propia)"), svg: versus("Románico frente a gótico", ["Románico", ["medio punto", "bóveda de cañón", "muros gruesos", "penumbra"]], ["Gótico", ["arco apuntado", "bóveda de crucería", "arbotantes", "vidrieras y luz"]]) },
    { h: "El gótico en España", p: [
      "El gótico llegó a los reinos hispanos en el siglo XIII con las grandes catedrales castellanas: <b>Burgos</b> (1221), de influencia francesa y con agujas caladas; <b>Toledo</b> (1226), de cinco naves; y <b>León</b> (1255), la «pulchra leonina», con casi 1.800 metros cuadrados de vidrieras. En la Corona de Aragón, el <b>gótico mediterráneo</b> prefirió espacios amplios y horizontales, como Santa María del Mar de Barcelona, y edificios civiles: lonjas, como la de Valencia, y atarazanas.",
      "En el siglo XV, el gótico final o <b>isabelino</b> mezcló la estructura gótica con una decoración desbordante, como en San Juan de los Reyes de Toledo. Al mismo tiempo, el <mark>mudéjar</mark>, arte de los musulmanes que vivían en reinos cristianos, levantó iglesias y torres de ladrillo con decoración islámica en Aragón, Toledo o Sevilla, y techumbres de madera de lacería.",
    ], svg: cuadro("Gótico y mudéjar en España", [["Obra", "Rasgo"], ["Catedral de León", "vidrieras"], ["Catedral de Burgos", "agujas caladas"], ["Santa María del Mar", "gótico mediterráneo"], ["Torres de Teruel", "mudéjar de ladrillo"]]) },
    { h: "Cómo leer un edificio medieval", p: [
      "Para analizar un edificio medieval conviene seguir unos pasos. Primero, la <b>planta</b>: ¿basilical, de cruz latina, central? ¿Cuántas naves? ¿Hay girola, el pasillo que rodea la cabecera? Segundo, los <mark>elementos sustentantes y sustentados</mark>: tipo de arco, de bóveda, de soporte (columna, pilar compuesto) y de contrarresto (muro, contrafuerte, arbotante).",
      "Tercero, la <b>luz y el espacio</b>: ¿penumbra o claridad?, ¿horizontalidad o verticalidad? Cuarto, la <b>decoración</b>: capiteles, portadas, vidrieras, yeserías. Por último, el <b>contexto</b>: quién lo encargó, qué función tenía (monasterio, catedral, mezquita, palacio) y qué peregrinos, fieles o cortesanos lo usaban.",
    ], svg: rueda("ANALIZAR UN EDIFICIO", ["planta", "arcos", "bóvedas", "soportes", "luz y espacio", "función"]) },
  ],
  figura: { titulo: "De Roma al gótico de un vistazo", aria: "Resumen de la arquitectura romana, paleocristiana y bizantina, hispanomusulmana, románica y gótica", cols: [
    ["Roma e Hispania", ["acueducto de Segovia", "teatro de Mérida", "arco y bóveda", "basílica"]],
    ["Alta Edad Media", ["basílica cristiana", "Santa Sofía", "prerrománico", "arco de herradura"]],
    ["Al-Ándalus", ["Mezquita de Córdoba", "Giralda", "Alhambra", "mudéjar"]],
    ["Románico y gótico", ["medio punto y cañón", "arco apuntado", "crucería, arbotante", "vidrieras"]],
  ] },
  video: ["med-a", "Arte medieval: del paleocristiano al gótico"],
  ejemplos: [
    ["Identifica el estilo de una iglesia con muros gruesos, arcos de medio punto y bóveda de cañón.", ["Arco semicircular.", "Bóveda de cañón con arcos fajones.", "Contrafuertes adosados y pocas ventanas.", "Interior en penumbra."], "Románico (siglos XI-XII)."],
    ["Explica la función del arbotante.", ["La bóveda de crucería empuja hacia fuera en puntos concretos.", "El arbotante recoge ese empuje sobre las naves laterales.", "Lo lleva a un contrafuerte exterior.", "El muro queda libre para vidrieras."], "Elemento de contrarresto exterior del gótico."],
    ["Analiza la sala de oración de la Mezquita de Córdoba.", ["Bosque de columnas reutilizadas.", "Arcos de herradura superpuestos.", "Dovelas rojas y blancas alternas.", "Espacio horizontal e infinito."], "Obra cumbre del emirato y califato de Córdoba."],
  ],
  errores: [
    "Confundir el arco de herradura (visigodo e islámico) con el apuntado (gótico).",
    "Pensar que el gótico es solo «más decorado»: su novedad es estructural.",
    "Creer que la basílica nació como templo cristiano: era un edificio civil romano.",
    "Olvidar el contrarresto: sin contrafuertes ni arbotantes las bóvedas caerían.",
  ],
  ejercicios: {
    b: [
      ["Nombra tres obras romanas conservadas en España.", "Acueducto de Segovia, puente de Alcántara, teatro de Mérida, torre de Hércules (tres de ellas)."],
      ["¿Qué son las pechinas?", "Triángulos curvos situados en las esquinas de una planta cuadrada que permiten apoyar sobre ella una cúpula circular."],
      ["Di dos rasgos del románico y dos del gótico.", "Románico: arco de medio punto, bóveda de cañón, muros gruesos. Gótico: arco apuntado, bóveda de crucería, arbotantes, vidrieras."],
      ["¿Qué es el mudéjar?", "El arte hecho por musulmanes o con técnicas islámicas en los reinos cristianos: ladrillo, yeserías, azulejos y techumbres de madera."],
    ],
    m: [
      ["¿Por qué las iglesias románicas tienen pocas ventanas?", "Porque la bóveda de cañón descarga su peso de forma continua sobre los muros; abrir grandes vanos los debilitaría."],
      ["Explica por qué Santa Sofía parece tener una cúpula que flota.", "Porque la cúpula descansa en pechinas y en su base tiene una fila de cuarenta ventanas: la luz oculta los apoyos y crea un anillo luminoso."],
      ["Compara el gótico castellano con el mediterráneo.", "El castellano (Burgos, León) busca altura y verticalidad, de influencia francesa. El mediterráneo (Santa María del Mar) prefiere espacios amplios, horizontales y sobrios, y muchos edificios civiles."],
      ["¿Qué aporta la Alhambra frente a la Mezquita de Córdoba?", "Córdoba destaca por su espacio de columnas y arcos; la Alhambra, por la delicadeza decorativa de materiales pobres, los mocárabes y la integración del agua y los jardines."],
    ],
    a: [
      ["Analiza una iglesia o catedral de tu provincia siguiendo los cinco pasos del último apartado.", "Respuesta abierta. Debe incluir planta, arcos y bóvedas, soportes y contrarresto, luz y espacio, decoración y contexto, con fotos o dibujos."],
      ["Explica cómo una solución técnica (la crucería) cambió el significado espiritual del templo.", "Al concentrar el peso en pilares y llevar el empuje a arbotantes, los muros se abren a vidrieras; la luz de colores, símbolo de Dios según Suger, convierte el templo en imagen de la Jerusalén celeste."],
    ],
  },
  quiz: [
    ["El acueducto de Segovia está hecho de…", ["sillares de granito sin argamasa", "ladrillo", "hormigón", "mármol"], "Romano."],
    ["La basílica romana era originalmente…", ["un edificio civil", "un templo pagano", "un palacio", "una tumba"], "Tribunal y mercado."],
    ["Santa Sofía tiene una cúpula sobre…", ["pechinas", "trompas góticas", "arbotantes", "arcos de herradura"], "Constantinopla."],
    ["El arco de herradura aparece ya en el arte…", ["visigodo", "gótico", "románico", "neoclásico"], "San Juan de Baños."],
    ["Santa María del Naranco es…", ["prerrománico asturiano", "gótico", "mudéjar", "románico"], "Siglo IX."],
    ["Los arcos bicolores son de…", ["la Mezquita de Córdoba", "la catedral de León", "Santa Sofía", "Frómista"], "Ladrillo y piedra."],
    ["La bóveda típica del románico es…", ["de cañón", "de crucería", "de abanico", "cúpula sobre pechinas"], "Con arcos fajones."],
    ["El primer edificio gótico fue…", ["Saint-Denis", "Notre-Dame", "Burgos", "Santiago"], "Abad Suger, 1144."],
    ["La catedral famosa por sus vidrieras es…", ["León", "Toledo", "Santiago", "Córdoba"], "Pulchra leonina."],
    ["Las torres de Teruel son…", ["mudéjares", "góticas francesas", "romanas", "visigodas"], "Ladrillo y azulejo."],
  ],
  examen: [
    ["El arbotante transmite el empuje a…", ["un contrafuerte exterior", "la cúpula", "el ábside", "las columnas interiores"], "Contrarresto."],
    ["La girola es…", ["un pasillo que rodea la cabecera", "una torre", "un tipo de arco", "una ventana circular"], "Peregrinaciones."],
    ["La Giralda era el alminar de una mezquita…", ["almohade", "visigoda", "nazarí", "omeya de Córdoba"], "Sevilla."],
    ["San Juan de los Reyes es gótico…", ["isabelino", "mediterráneo", "francés temprano", "mudéjar"], "Toledo, s. XV."],
  ],
  feynman: ["herencia romana", "basílica y cúpula bizantina", "Mezquita y Alhambra", "románico frente a gótico"],
  mapa: ["ARQUITECTURA MEDIEVAL", [["Roma", "arco, bóveda, basílica"], ["Alta Edad Media", "bizantino, prerrománico"], ["Al-Ándalus", "Córdoba, Alhambra"], ["Románico y gótico", "cañón y crucería"]]],
  tarjetas: [
    ["Romanización", "Hispania adopta la cultura romana."],
    ["Basílica", "Naves y ábside, origen civil."],
    ["Pechinas", "Paso del cuadrado a la cúpula."],
    ["Arco de herradura", "Visigodo e islámico."],
    ["Mezquita de Córdoba", "Arcos dobles bicolores."],
    ["Románico", "Medio punto, cañón, muros gruesos."],
    ["Gótico", "Apuntado, crucería, arbotantes."],
    ["Mudéjar", "Arte islámico en reinos cristianos."],
  ],
  glosario: [
    ["Ábside", "Cabecera semicircular del templo donde está el altar."],
    ["Nave", "Espacio longitudinal entre filas de soportes."],
    ["Crucero", "Nave transversal que forma la cruz latina."],
    ["Dovela", "Pieza en forma de cuña que forma un arco."],
    ["Arco fajón", "Arco que refuerza una bóveda de cañón."],
    ["Contrafuerte", "Refuerzo exterior del muro que recibe empujes."],
    ["Mocárabe", "Decoración de prismas colgantes en techos islámicos."],
    ["Rosetón", "Gran ventana circular con vidriera."],
  ],
  situacion: SIT(
    "Maqueta de luz",
    "El departamento quiere explicar a los alumnos de ESO la diferencia entre románico y gótico con dos maquetas sencillas.",
    ["Dibujad la planta y la sección de cada templo", "Construid dos maquetas de cartón con sus bóvedas", "Iluminadlas con una linterna y fotografiad el interior", "Preparad una explicación de cinco minutos"],
    "Dos maquetas, fotos del interior y exposición oral.",
    ["Corrección de los elementos constructivos", "Calidad de las maquetas y de las fotos", "Claridad de la explicación"],
  ),
  familias: [
    "Visitad una iglesia románica o gótica cercana y buscad arcos y bóvedas.",
    "Comparad en fotos la catedral de León y una iglesia románica.",
    "Si viajáis al sur, visitad la Mezquita de Córdoba o la Alhambra con este tema.",
  ],
  saberes: "claves de la arquitectura a través de las diferentes épocas y estilos: de la romanización a la Baja Edad Media; terminología específica de la arquitectura.",
  ideas: [
    "Construir arcos con piezas de espuma para ver el empuje.",
    "Clasificar fotos de edificios de la comunidad autónoma por estilos.",
    "Salida al monumento medieval más cercano con ficha de análisis.",
  ],
  fuentes: [WIKI("Arquitectura gótica", "Arquitectura_gótica"), WIKI("Arquitectura románica", "Arquitectura_románica")],
});
