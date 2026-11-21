// Volumen, 1º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-vol");

module.exports = B.tema({
  titulo: "Los materiales",
  minutos: 60,
  objetivos: [
    "Clasificar los materiales del volumen según su comportamiento",
    "Conocer las propiedades de la arcilla, la escayola, la piedra, la madera y los metales",
    "Descubrir materiales nuevos y reciclados",
    "Usar herramientas con seguridad y criterio sostenible",
  ],
  claves: ["arcilla", "escayola", "piedra", "madera", "metal", "resina", "herramientas", "seguridad"],
  pregunta: {
    texto: "¿Por qué Miguel Ángel eligió mármol para el David y no barro?",
    respuesta: "Porque cada material tiene <mark>su carácter</mark>: el mármol es duro, duradero y se pule hasta brillar como la piel, pero no admite errores. El barro es blando y fácil de corregir, pero frágil si no se cuece. Elegir material es ya una decisión artística.",
  },
  lectura: {
    titulo: "Escuchar al material",
    html: `<p>Los escultores dicen a menudo que el material «habla». Un tronco tiene vetas y nudos que marcan por dónde se puede tallar. Un bloque de piedra puede esconder una grieta. El barro se seca si no lo cubres con un plástico húmedo. El hierro necesita fuego para doblarse.</p>
    <p>Por eso, antes de empezar una obra, el artista se pregunta qué quiere expresar y qué material lo dirá mejor: ligereza o peso, calidez o frialdad, permanencia o fragilidad. En este tema conocerás los materiales tradicionales y los nuevos, y aprenderás a trabajar con ellos de forma <b>segura</b> y <b>responsable</b>.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Cómo se clasifican los materiales",
      html: `<p>Los materiales del volumen se agrupan según cómo se trabajan. Los <b>blandos o plásticos</b> (arcilla, plastilina, cera) se moldean con las manos y permiten añadir y quitar. Los <b>duros</b> (piedra, madera) se tallan quitando materia. Los que se <b>vierten</b> en estado líquido y luego endurecen (escayola, resina, bronce fundido) se usan con moldes.</p>
      <p>Por último, los materiales de <b>construcción</b> se cortan, doblan y unen: cartón, alambre, chapa, madera en listones, plásticos y objetos encontrados. Cada grupo se relaciona con una técnica que verás en los temas siguientes.</p>`,
      svg: B.cajas("Materiales según cómo se trabajan", [["Blandos", "arcilla, cera|se modelan"], ["Duros", "piedra, madera|se tallan"], ["Que se vierten", "escayola, resina|bronce"], ["De construcción", "cartón, alambre|chapa, objetos"]]),
    },
    {
      h: "Arcilla, plastilina y cera",
      html: `<p>La <b>arcilla</b> o barro es el material de modelado más antiguo. Húmeda es plástica; al secar se vuelve frágil, y al <b>cocerla</b> en un horno (unos 900-1.000 °C) se convierte en <b>terracota</b> o cerámica, dura y duradera. Las piezas gruesas deben vaciarse por dentro para que no se rompan al cocer.</p>
      <p>La <b>plastilina</b> no se seca, por lo que sirve para bocetos y maquetas y para la animación. La <b>cera</b> se ablanda con el calor y se usa para modelar originales que luego se funden en bronce. También existen pastas de modelar que secan al aire.</p>`,
      svg: B.flujo("Del barro a la terracota", ["Amasar y modelar húmedo", "Vaciar las partes gruesas", "Secar despacio, tapado", "Cocer en el horno: terracota"]),
      video: { id: "KCtRv4CMsfw", titulo: "Materiales de modelado", canal: "Tomas Barcelo", vistas: 80917 },
    },
    {
      h: "Escayola y yeso",
      html: `<p>La <b>escayola</b> es un yeso muy fino. Se espolvorea sobre agua (nunca al revés), se deja empapar y se remueve hasta lograr una papilla. En pocos minutos <b>fragua</b>: se calienta ligeramente y se endurece. Es barata, fácil de tallar mientras está tierna y copia muy bien los detalles.</p>
      <p>Se usa para hacer <b>moldes</b> y <b>vaciados</b>, para tallar bloques blandos y para reproducir esculturas: muchos museos tienen copias en escayola de obras clásicas. Su punto débil es la fragilidad. Hay que trabajar rápido, con guantes y mascarilla al lijar, y no tirar los restos por el desagüe.</p>`,
      svg: B.flujo("Preparar escayola", ["Agua en el recipiente", "Espolvorear la escayola encima", "Dejar empapar y remover", "Verter antes de que fragüe"]),
    },
    {
      h: "La piedra",
      html: `<p>La piedra es el material de la permanencia. El <b>mármol</b>, roca caliza transformada, se puede pulir hasta brillar; el más famoso es el de Carrara, en Italia. El <b>alabastro</b> es blando y translúcido; la <b>caliza</b> y la <b>arenisca</b> se tallan con facilidad; el <b>granito</b> es durísimo.</p>
      <p>Se trabaja con <b>maceta</b> (martillo) y herramientas de acero: <b>puntero</b> para desbastar, <b>gradina</b> (cincel dentado) para aproximarse a la forma, <b>cincel</b> plano para definir y escofinas y lijas para acabar. Es un trabajo lento que exige protección para los ojos, los oídos y las vías respiratorias.</p>`,
      svg: B.capas("Herramientas de talla en piedra", [["Puntero", "desbastar el bloque"], ["Gradina", "aproximar la forma"], ["Cincel", "definir planos"], ["Lija", "acabar y pulir"]]),
    },
    {
      h: "La madera",
      html: `<p>La madera es cálida, ligera y viva: tiene <b>vetas</b>, nudos y anillos que hay que respetar. Se talla <b>a favor de la veta</b> para que no se astille. Las maderas blandas, como el pino o el tilo, son fáciles de trabajar; las duras, como el nogal, el boj o el roble, permiten más detalle y duran más.</p>
      <p>Las herramientas principales son las <b>gubias</b> (de filo curvo), los <b>formones</b> (de filo recto) y el <b>mazo</b>. La imaginería española del Barroco usó sobre todo madera policromada, con piezas ensambladas para formar figuras grandes. La madera debe estar bien seca para no agrietarse.</p>`,
      svg: B.comparar("Maderas para tallar", ["Blandas", ["pino, tilo", "fáciles de tallar", "menos detalle", "para empezar"]], ["Duras", ["nogal, boj, roble", "más esfuerzo", "mucho detalle", "más duraderas"]]),
      video: { id: "oWSzA4QXhlQ", titulo: "Cristo resucitado tallado en madera: así trabaja un imaginero", canal: "Eugenio Monesma - Documentales", vistas: 120100 },
    },
    {
      h: "Los metales",
      html: `<p>El <b>bronce</b>, aleación de cobre y estaño, es el gran metal de la escultura desde la Antigüedad: se funde y se vierte en moldes, y con el tiempo adquiere una <b>pátina</b> verdosa u oscura. El <b>hierro</b> y el <b>acero</b> se forjan, se cortan y se <b>sueldan</b>; Julio González fue pionero en soldar hierro hacia 1930.</p>
      <p>El <b>acero corten</b> se oxida en superficie con un color anaranjado que lo protege; lo usaron Chillida y Richard Serra en obras al aire libre. El <b>aluminio</b> es ligero y no se oxida. Trabajar metal exige taller, gafas, guantes y mucho cuidado con el fuego.</p>`,
      svg: B.cajas("Metales en el volumen", [["Bronce", "cobre + estaño|se funde"], ["Hierro", "se forja|y se suelda"], ["Acero corten", "óxido protector|exterior"], ["Aluminio", "ligero|no se oxida"]]),
    },
    {
      h: "Materiales nuevos y reciclados",
      html: `<p>El siglo XX amplió la lista sin límite. Las <b>resinas</b> y la <b>fibra de vidrio</b> permiten obras ligeras y resistentes; las <b>siliconas</b> copian con fidelidad la piel; los <b>plásticos</b>, el neón, la luz led y los tejidos entraron en los talleres. La <b>impresión 3D</b> fabrica piezas a partir de un modelo digital.</p>
      <p>También se usan <b>materiales reciclados</b> y objetos encontrados: cartón, botellas, chatarra, maderas viejas. Trabajar con residuos no es solo económico, también es un mensaje sobre el consumo. Muchos artistas actuales buscan materiales <b>sostenibles</b> y procesos con menos residuos tóxicos.</p>`,
      svg: B.estrella("Materiales actuales", "Nuevos", ["Resinas", "Silicona", "Impresión 3D", "Luz y neón", "Reciclados"]),
      video: { id: "paFVXrrrA2I", titulo: "10 consejos para escultores ahorradores", canal: "DibujAme Un...", vistas: 342635 },
    },
    {
      h: "Herramientas, seguridad y orden",
      html: `<p>En el taller de volumen hay herramientas de <b>modelado</b> (palillos de madera, vaciadores de alambre, espátulas), de <b>talla</b> (gubias, cinceles, escofinas), de <b>construcción</b> (cúter, tijeras, alicates, pistola de cola, sierra) y de <b>medida</b> (regla, compás, calibre).</p>
      <p>Normas básicas: cortar siempre <b>alejando</b> la herramienta del cuerpo, usar gafas y mascarilla cuando hay polvo, guantes con resinas y escayola, ventilar el espacio y no comer en el taller. Al terminar, limpiar y guardar cada herramienta en su sitio. El orden también es seguridad.</p>`,
      svg: B.flujo("Normas básicas del taller", ["Ropa y pelo recogidos", "Gafas, guantes y mascarilla", "Cortar alejando la herramienta", "Ventilar y no comer", "Limpiar y guardar"]),
    },
  ],
  figura: {
    titulo: "Los materiales en cuatro claves",
    items: [["Blandos", "✋", "arcilla, cera", "se modelan"], ["Duros", "⛏", "piedra, madera", "se tallan"], ["Vertidos", "⟿", "escayola, bronce", "con moldes"], ["Nuevos", "♻", "resinas, 3D", "y reciclados"]],
  },
  video: { id: "f3UXMmvwOyE", titulo: "Conocimientos para comenzar en la escultura: materiales y herramientas", canal: "Cristina Stucchi Art", vistas: 23503 },
  quiz: [
    ["La arcilla cocida en horno se llama…", ["escayola", "terracota", "resina", "alabastro"], 1, "Se vuelve dura y duradera."],
    ["¿Qué material no se seca y sirve para maquetas?", ["arcilla", "plastilina", "escayola", "bronce"], 1, "Se puede reutilizar."],
    ["Para preparar escayola…", ["se echa agua sobre la escayola", "se espolvorea la escayola sobre el agua", "se calienta en el horno", "se mezcla con aceite"], 1, "Así no se forman grumos."],
    ["Una piedra blanda y translúcida es el…", ["granito", "alabastro", "basalto", "mármol de Carrara"], 1, "Deja pasar algo de luz."],
    ["La gradina es…", ["un cincel dentado", "una gubia curva", "un martillo de madera", "un horno"], 0, "Sirve para aproximar la forma."],
    ["La madera se talla…", ["contra la veta", "a favor de la veta", "solo con sierra", "mojada"], 1, "Así no se astilla."],
    ["El bronce es una aleación de…", ["hierro y carbono", "cobre y estaño", "aluminio y zinc", "plomo y plata"], 1, "El gran metal de la escultura."],
    ["El acero corten se caracteriza por…", ["no oxidarse nunca", "una capa de óxido que lo protege", "ser transparente", "fundirse a baja temperatura"], 1, "Color anaranjado, para exterior."],
    ["¿Quién fue pionero en soldar hierro en la escultura?", ["Julio González", "Bernini", "Donatello", "Fidias"], 0, "Hacia 1930, en París."],
    ["Al cortar con un cúter hay que…", ["cortar hacia uno mismo", "alejar la hoja del cuerpo", "no usar regla", "cortar sin mirar"], 1, "Norma básica de seguridad."],
  ],
  examen: [
    ["Quieres una obra para exterior, ligera y que no se oxide. Eliges…", ["escayola", "aluminio", "plastilina", "arcilla sin cocer"], 1, "Ligero y resistente a la intemperie."],
    ["Una pieza gruesa de barro estalla en el horno. Probablemente…", ["era muy fina", "no se vació por dentro o tenía aire", "se coció a poca temperatura", "era terracota"], 1, "Las piezas gruesas se vacían."],
    ["Para hacer un molde que copie bien los detalles y sea barato se usa…", ["granito", "escayola", "acero", "madera dura"], 1, "Fragua rápido y copia el detalle."],
    ["Una obra con botellas y chatarra se relaciona con…", ["los materiales reciclados", "la talla en mármol", "la policromía barroca", "la terracota"], 0, "Objetos encontrados y sostenibilidad."],
    ["¿Qué herramienta es de talla en madera?", ["vaciador", "gubia", "pistola de cola", "calibre"], 1, "Filo curvo."],
  ],
  feynman: ["Los cuatro grupos de materiales según su trabajo", "Del barro húmedo a la terracota", "Herramientas para la piedra y la madera", "Normas de seguridad del taller"],
  mapa: ["LOS MATERIALES", [["Blandos", "arcilla · plastilina · cera"], ["Duros", "piedra · madera"], ["Vertidos y metales", "escayola · bronce · acero"], ["Nuevos", "resinas · 3D · reciclados"]]],
  tarjetas: [
    ["Terracota", "Arcilla cocida en horno."],
    ["Escayola", "Yeso fino que fragua en minutos; para moldes y vaciados."],
    ["Fraguar", "Endurecerse un material que se ha mezclado con agua."],
    ["Mármol", "Roca caliza metamórfica que se puede pulir."],
    ["Gubia", "Herramienta de talla con filo curvo."],
    ["Veta", "Dibujo de las fibras de la madera."],
    ["Bronce", "Aleación de cobre y estaño que se funde."],
    ["Acero corten", "Acero con óxido superficial protector."],
  ],
  ejemplos: [
    ["Elige material para una figura que vaya a estar al aire libre en una plaza.", ["Descartar escayola y arcilla sin cocer: frágiles.", "Valorar piedra, bronce o acero corten: resisten la intemperie.", "Considerar peso, coste y mantenimiento."], "Bronce, piedra o acero corten son las opciones habituales."],
    ["Explica por qué un imaginero barroco eligió madera y no mármol.", ["La madera es ligera: la imagen podía salir en procesión.", "Admite policromía con naturalidad.", "Hay maderas buenas y abundantes en España."], "Ligereza, policromía y tradición local."],
    ["Organiza un puesto de trabajo para tallar un bloque de escayola.", ["Mesa protegida y bloque bien sujeto.", "Herramientas: escofina, cuchillo de modelar, lija.", "Mascarilla y gafas por el polvo.", "Recoger el polvo en seco, sin tirarlo por el desagüe."], "Seguridad, orden y respeto al medio."],
  ],
  errores: [
    "Echar agua sobre la escayola y crear grumos.",
    "Dejar secar el barro destapado y sin vaciar.",
    "Tallar la madera contra la veta.",
    "Trabajar sin gafas ni mascarilla con polvo o resinas.",
  ],
  ejercicios: {
    b: [
      ["Clasifica: mármol, cera, cartón, bronce, arcilla, alambre.", "Blandos: cera, arcilla. Duros: mármol. Vertido: bronce. Construcción: cartón, alambre."],
      ["¿Qué diferencia hay entre arcilla y plastilina?", "La arcilla se seca y puede cocerse; la plastilina no se seca y se reutiliza."],
      ["Nombra tres herramientas de talla en piedra.", "Puntero, gradina y cincel (también maceta, escofina y lija)."],
      ["Escribe tres normas de seguridad del taller.", "Usar gafas y mascarilla, cortar alejando la herramienta, ventilar y no comer."],
    ],
    m: [
      ["Explica el proceso para preparar escayola.", "Poner agua, espolvorear la escayola encima, dejar que empape, remover sin hacer burbujas y verter antes de que fragüe."],
      ["¿Por qué se vacían las piezas gruesas de barro?", "Para que sequen de forma uniforme y no estallen en el horno por la humedad y el aire atrapados."],
      ["Compara mármol y madera como materiales de escultura.", "Mármol: duro, pesado, frío, duradero y pulible. Madera: cálida, ligera, con vetas, admite policromía; más sensible a la humedad."],
      ["¿Qué aportan los materiales reciclados además del ahorro?", "Un mensaje sobre el consumo y la sostenibilidad, y nuevas texturas y significados."],
    ],
    a: [
      ["Elige una obra contemporánea y explica por qué su material es importante para su significado.", "Respuesta abierta: por ejemplo, el acero corten de Chillida, que envejece con el mar y dialoga con la roca."],
      ["Diseña una ficha de seguridad ilustrada para el taller de Volumen.", "Respuesta abierta: equipos de protección, uso de herramientas, gestión de residuos y orden."],
    ],
  },
  glosario: [
    ["Plástico", "Que se deforma y conserva la forma dada."],
    ["Cocción", "Proceso de endurecer la arcilla en el horno."],
    ["Desbastar", "Quitar el material sobrante de un bloque."],
    ["Maceta", "Martillo del escultor de piedra."],
    ["Formón", "Herramienta de talla de filo recto."],
    ["Aleación", "Mezcla de metales fundidos."],
    ["Soldar", "Unir metales con calor."],
    ["Resina", "Material sintético líquido que endurece."],
    ["Escofina", "Lima de dientes gruesos."],
  ],
  situacion: {
    titulo: "Muestrario de materiales",
    reto: "Crear un muestrario táctil con los materiales del taller y sus propiedades.",
    pasos: [
      "Reunid muestras pequeñas de al menos seis materiales.",
      "Probad con cada uno una acción: modelar, tallar, doblar o unir.",
      "Anotad dureza, peso, textura y herramientas adecuadas.",
      "Montad un panel con las muestras y una ficha de cada una.",
    ],
    producto: "Un muestrario táctil con fichas técnicas.",
    evaluacion: [
      "Las muestras están bien clasificadas.",
      "Las fichas describen propiedades y herramientas.",
      "Se incluyen normas de seguridad y de reciclaje.",
      "La presentación es ordenada y clara.",
    ],
  },
  familias: [
    "Buscad en casa objetos de cerámica, madera, metal y plástico y comparad su peso y su tacto.",
    "Fijaos en las esculturas de vuestra ciudad: ¿de qué material son?",
    "Guardad cartón, tapones y alambre limpio para los trabajos de clase.",
    "Visitad un taller de cerámica o de carpintería si tenéis ocasión.",
  ],
  saberes: "Materiales y herramientas del volumen: clasificación (blandos, duros, que se vierten, de construcción), arcilla, plastilina y cera, escayola, piedra, madera, metales, materiales nuevos y reciclados; normas de seguridad, orden y sostenibilidad en el taller.",
  ideas: [
    "Muestrario de materiales con fichas técnicas.",
    "Demostración guiada de preparación de escayola.",
    "Recogida de materiales reciclados para el curso.",
    "Normas del taller en carteles hechos por el alumnado.",
  ],
  fuentes: [
    { t: "Museo Nacional de Escultura: técnicas de la escultura policromada", url: "https://www.culturaydeporte.gob.es/mnescultura/inicio.html" },
  ],
});
