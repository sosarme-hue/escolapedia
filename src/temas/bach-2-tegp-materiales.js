// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · Soportes, pigmentos, aglutinantes y disolventes (tema ampliado). Dibujos propios en SVG.
const { tema, TRUCO, muestras, capas, cajas, flujo, versus, cuadro, rueda, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "Soportes, pigmentos, aglutinantes y disolventes",
  minutos: 60,
  bloque: "A",
  objetivos: [
    "Distinguir los componentes de una pintura: pigmento, aglutinante, disolvente y cargas",
    "Clasificar los soportes y las imprimaciones según la técnica",
    "Elegir útiles (pinceles, espátulas, papeles) adecuados a cada procedimiento",
    "Prever la interacción entre materiales para evitar grietas, manchas o desprendimientos",
  ],
  claves: ["pigmento", "colorante", "aglutinante", "disolvente", "diluyente", "carga", "soporte", "imprimación", "gesso", "gramaje", "pH neutro", "graso sobre magro", "pincel de pelo natural", "espátula"],
  pregunta: {
    texto: "Si la acuarela, el óleo y el pastel pueden llevar el mismo pigmento azul, ¿por qué son técnicas tan diferentes?",
    respuesta: "Porque una pintura no es solo color. El <b>pigmento</b> es el mismo polvo coloreado, pero lo que cambia es lo que lo une al soporte: goma arábiga en la acuarela, aceite de linaza en el óleo y muy poca goma en el pastel. Ese <mark>aglutinante</mark> decide si la pintura es transparente u opaca, si se diluye con agua o con esencia, si seca en minutos o en días y cómo envejece.",
  },
  bloques: [
    { h: "Anatomía de una pintura", p: [
      "Toda pintura tiene tres componentes básicos. El <mark>pigmento</mark> es una sustancia en polvo, insoluble, que aporta el color: puede ser mineral (tierras, óxidos), orgánico o sintético. El <mark>aglutinante</mark> es el medio que envuelve las partículas de pigmento y las fija al soporte al secar. El <mark>disolvente</mark> o <b>diluyente</b> rebaja la consistencia para que la pintura fluya y después se evapora.",
      "Muchas pinturas llevan además <b>cargas</b> (creta, caolín) que abaratan o dan cuerpo, y <b>aditivos</b> como secativos, conservantes o retardantes. No hay que confundir pigmento con <b>colorante</b>: el colorante se disuelve en el líquido y tiñe, como las tintas de rotulador o las anilinas, mientras que el pigmento queda en suspensión.",
    ], svg: flujo("Componentes de una pintura", ["Pigmento: aporta el color", "Aglutinante: une y fija", "Disolvente: diluye y se evapora", "Cargas y aditivos: cuerpo, secado, conservación"]), v: ["mat-a", "¿De qué está hecha la pintura?"] },
    { h: "Los pigmentos", p: [
      "Los primeros pigmentos fueron <b>tierras</b> naturales: ocres, sienas y sombras, ricas en óxidos de hierro, junto con el negro de <b>carbón</b> y el blanco de cal. Otros eran muy valiosos, como el <b>azul ultramar</b>, obtenido moliendo lapislázuli de Afganistán, tan caro que en la Edad Media se reservaba para el manto de la Virgen.",
      "Desde el siglo XIX la química creó pigmentos sintéticos estables y baratos: el azul cobalto, el ultramar artificial, los amarillos de cadmio o el blanco de titanio, y en el siglo XX las ftalocianinas y las quinacridonas. Al elegirlos importan su <b>solidez a la luz</b>, que indica si se decoloran, su <b>poder cubriente</b> u opacidad, su <b>poder tintóreo</b> y su <b>toxicidad</b>, que veremos en el tema siguiente.",
    ], svg: muestras("Pigmentos históricos", [["Ocre", "#c99a3b", "tierra"], ["Siena tostada", "#8a4b2a", "tierra"], ["Ultramar", "#2a3fa8", "lapislázuli"], ["Bermellón", "#d8432d", "cinabrio"], ["Verde tierra", "#7a8a5a", "arcilla"], ["Negro carbón", "#222", "hueso o vid"]]) },
    { h: "Los aglutinantes, el corazón de cada técnica", p: [
      "El aglutinante define la técnica. La <b>goma arábiga</b>, una resina de acacia soluble en agua, es la base de la acuarela y del gouache. La <b>yema de huevo</b> es el aglutinante del temple tradicional. El <b>aceite secante</b>, sobre todo de linaza, forma el óleo al oxidarse con el aire. La <b>cera de abeja</b> fundida da la encáustica. La <b>resina acrílica</b> en emulsión acuosa forma el acrílico, y la <b>cola animal</b> se usa en imprimaciones y témperas.",
      "Cada aglutinante seca de forma distinta: por <b>evaporación</b> del agua (acuarela, acrílico), por <b>oxidación</b> (óleo) o por <b>enfriamiento</b> (encáustica). Eso explica tiempos, brillos y comportamientos: un óleo puede trabajarse durante días, mientras que un acrílico queda fijo en minutos y ya no se redisuelve.",
    ], svg: cuadro("Aglutinante y técnica", [["Aglutinante", "Técnica", "Seca por"], ["Goma arábiga", "acuarela, gouache", "evaporación"], ["Yema de huevo", "temple", "evaporación"], ["Aceite de linaza", "óleo", "oxidación"], ["Cera", "encáustica", "enfriamiento"], ["Resina acrílica", "acrílico", "evaporación"]]) },
    { h: "Disolventes y diluyentes", p: [
      "El <b>agua</b> es el disolvente de la acuarela, el gouache, la témpera, el temple y el acrílico mientras están frescos. El óleo tradicional se diluye con <b>trementina</b> (aguarrás de origen vegetal) o con <b>esencias minerales</b> inodoras, y se enriquece con <b>médiums</b> de aceite y resina. Los barnices y algunas resinas usan <b>alcohol</b>.",
      "Los disolventes orgánicos son volátiles y pueden ser tóxicos e inflamables, por eso hoy se prefieren alternativas: <b>óleos miscibles al agua</b>, esencias de cítricos o la limpieza de pinceles con aceite y jabón. Una regla básica: nunca se vierten disolventes ni restos de pintura por el desagüe.",
    ], svg: versus("Disolventes", ["Al agua", ["acuarela y gouache", "temple y témpera", "acrílico fresco", "limpieza con jabón"]], ["Orgánicos", ["trementina", "esencia mineral", "alcohol para barnices", "volátiles e inflamables"]]) },
    { h: "Los soportes", p: [
      "El <mark>soporte</mark> es la superficie que recibe la obra. El <b>papel</b> es el soporte del dibujo, la acuarela y el grabado; se elige por su <b>gramaje</b> (gramos por metro cuadrado), su <b>grano</b> (satinado, fino o grueso), su composición (algodón o celulosa) y su acidez: los papeles de <b>pH neutro</b> no amarillean.",
      "Para la pintura se usan la <b>tabla</b> de madera, base de la pintura medieval y hoy sustituida por tableros de contrachapado o DM; el <b>lienzo</b> de lino o algodón tensado en un bastidor, ligero y fácil de transportar desde el Renacimiento veneciano; el <b>cartón</b> entelado; el <b>muro</b> en la pintura mural; y soportes contemporáneos como el metal, el plástico o los tejidos reciclados.",
    ], extra: TRUCO("para acuarela usa papel de al menos 300 g/m² o tensa el papel con cinta engomada; si no, se ondulará."), svg: cajas("Soportes", [["Papel", "gramaje, grano, pH"], ["Tabla", "madera o DM"], ["Lienzo", "lino o algodón"], ["Cartón", "entelado o pluma"], ["Muro", "pintura mural"], ["Otros", "metal, tela, plástico"]]) },
    { h: "Preparar el soporte: la imprimación", p: [
      "Antes de pintar, muchos soportes necesitan una <mark>imprimación</mark>: una capa que sella los poros, iguala la superficie y hace que la pintura agarre bien. En la tabla y el lienzo tradicionales se aplicaba primero <b>cola animal</b> y después un aparejo de yeso o creta con cola, el <b>gesso</b>, lijado hasta quedar liso.",
      "Hoy se usa sobre todo el <b>gesso acrílico</b>, que sirve para acrílico y óleo. El orden de las capas es importante: soporte, encolado, imprimación, capas de pintura y, al final, <b>barniz</b> protector. Si se pinta óleo directamente sobre tela sin preparar, el aceite pudre las fibras con el tiempo.",
    ], svg: capas("Capas de un cuadro", [["Soporte", "tabla o lienzo"], ["Encolado", "sella las fibras"], ["Imprimación", "gesso"], ["Pintura", "de magro a graso"], ["Barniz", "protege y unifica"]]) },
    { h: "Útiles y herramientas", p: [
      "Los <b>pinceles</b> se distinguen por el pelo y la forma. El pelo <b>natural</b> suave (marta, ardilla) retiene mucha agua y es ideal para acuarela; la cerda es dura y arrastra el óleo espeso; el pelo <b>sintético</b> es económico, resistente y apto para acrílico. Por la forma hay redondos, planos, de lengua de gato y abanicos.",
      "Completan el taller las <b>espátulas</b>, para mezclar y aplicar empastes; la <b>paleta</b>, de madera para el óleo o de plástico y porcelana para el agua; los <b>difuminos</b>, gomas y cúters para el dibujo; las <b>gubias</b> y <b>buriles</b> para el grabado; y el <b>tórculo</b>, la prensa de estampación. Mantenerlos limpios alarga su vida y mejora los resultados.",
    ], svg: rueda("ÚTILES", ["pinceles", "espátulas", "paleta", "difuminos", "gubias y buriles", "tórculo"]) },
    { h: "Cuando los materiales interactúan", p: [
      "Los materiales no siempre se llevan bien. En el óleo rige la regla de <mark>graso sobre magro</mark>: cada capa debe tener más aceite que la de debajo, porque si una capa magra seca sobre una grasa se agrieta. El acrílico puede ir debajo del óleo, pero nunca el óleo debajo del acrílico, ya que este no se adhiere a una superficie grasa.",
      "Otras interacciones: el agua levanta la acuarela seca; los rotuladores con alcohol disuelven algunas tintas; el pastel necesita <b>fijador</b> pero el fijador oscurece los tonos; y el papel ácido mancha las obras que toca. Probar siempre en una muestra antes de la obra definitiva es la mejor costumbre de un artista.",
    ], svg: cajas("Reglas de compatibilidad", [["Graso sobre magro", "evita grietas"], ["Acrílico bajo óleo", "sí"], ["Óleo bajo acrílico", "no"], ["Fijador", "oscurece el pastel"], ["Papel ácido", "amarillea"], ["Prueba antes", "siempre"]]), v: ["mat-b", "Cómo se hace la pintura artística"] },
  ],
  figura: { titulo: "Los materiales de un vistazo", aria: "Resumen de componentes de la pintura, soportes, imprimación y útiles", cols: [
    ["Pintura", ["pigmento", "aglutinante", "disolvente", "cargas"]],
    ["Aglutinantes", ["goma arábiga", "huevo", "aceite", "cera, acrílico"]],
    ["Soportes", ["papel", "tabla", "lienzo", "muro"]],
    ["Preparación", ["encolado", "gesso", "graso sobre magro", "barniz"]],
  ] },
  video: ["mat-a", "¿De qué está hecha la pintura?"],
  ejemplos: [
    ["Elige soporte y preparación para un retrato al óleo.", ["Lienzo de lino o tabla de DM.", "Encolado y dos o tres capas de gesso.", "Primeras capas magras, últimas más grasas.", "Barniz final cuando la pintura esté seca."], "Lienzo imprimado con gesso y pintura de magro a graso."],
    ["Fabrica una acuarela casera.", ["Mezcla goma arábiga disuelta en agua con un poco de glicerina.", "Añade pigmento en polvo.", "Muele con una moleta sobre cristal.", "Guarda la pasta en un godet."], "Pigmento + goma arábiga: acuarela."],
    ["Explica por qué se agrietó un cuadro.", ["El pintor puso capas con mucha esencia sobre capas con mucho aceite.", "La capa superior secó antes y se contrajo.", "La inferior seguía moviéndose."], "Se incumplió la regla de graso sobre magro."],
  ],
  errores: [
    "Confundir pigmento y colorante: el pigmento no se disuelve, el colorante sí.",
    "Pintar óleo sobre una capa de acrílico mal seca o acrílico sobre óleo.",
    "Usar papel fino para técnicas con mucha agua.",
    "Tirar disolventes y restos de pintura por el fregadero.",
    "Pensar que el aglutinante es solo un «pegamento»: decide brillo, transparencia y secado.",
  ],
  ejercicios: {
    b: [
      ["Nombra los tres componentes básicos de una pintura.", "Pigmento, aglutinante y disolvente."],
      ["¿Qué aglutinante tiene la acuarela?", "La goma arábiga."],
      ["¿Qué es el gramaje de un papel?", "Su peso en gramos por metro cuadrado, que indica su grosor."],
      ["¿Para qué sirve la imprimación?", "Para sellar el soporte, igualarlo y hacer que la pintura agarre."],
    ],
    m: [
      ["Explica por qué el óleo seca lentamente.", "Porque su aglutinante, el aceite de linaza, seca por oxidación con el aire, un proceso que dura días o semanas."],
      ["¿Por qué el ultramar natural era tan caro?", "Se obtenía moliendo lapislázuli importado de Afganistán mediante un proceso largo de purificación."],
      ["¿Qué pincel elegirías para acuarela y para óleo empastado? ¿Por qué?", "Pelo natural suave para acuarela, porque retiene agua; cerda para óleo espeso, porque arrastra la pasta."],
      ["Explica la regla de graso sobre magro.", "Cada capa de óleo debe tener más aceite que la anterior para que sea más flexible y no se agriete."],
    ],
    a: [
      ["Diseña una tabla de pruebas para comparar tres pigmentos azules.", "Respuesta abierta: muestras de cada pigmento en masa y diluido, sobre blanco y negro, para ver opacidad, poder tintóreo y transparencia; parte tapada para comprobar solidez a la luz."],
      ["Argumenta qué soporte elegirías para una obra que va a viajar mucho.", "Lienzo en bastidor o papel en carpeta: son ligeros; la tabla pesa y el muro es fijo. Se valoran la conservación y el embalaje."],
      ["Propón una paleta de materiales con menor impacto ambiental.", "Acrílicos o óleos miscibles al agua, pigmentos sin metales pesados, papel reciclado de pH neutro, limpieza con jabón y recogida de residuos."],
    ],
  },
  quiz: [
    ["La sustancia en polvo que aporta el color es el…", ["pigmento", "aglutinante", "disolvente", "barniz"], "Insoluble."],
    ["El aglutinante del óleo es…", ["el aceite de linaza", "la goma arábiga", "la yema de huevo", "la cera"], "Oxidación."],
    ["La encáustica seca por…", ["enfriamiento de la cera", "oxidación", "evaporación del agua", "presión"], "Cera caliente."],
    ["El azul ultramar natural procede del…", ["lapislázuli", "cobalto", "índigo", "carbón"], "Afganistán."],
    ["El gesso tradicional lleva…", ["yeso o creta con cola", "aceite y cera", "goma arábiga", "trementina"], "Imprimación."],
    ["Un papel de pH neutro…", ["no amarillea con el tiempo", "es más barato", "es impermeable", "no admite tinta"], "Conservación."],
    ["La trementina es un…", ["disolvente del óleo", "pigmento", "soporte", "aglutinante del temple"], "Esencia."],
    ["El acrílico seco…", ["ya no se redisuelve en agua", "se redisuelve siempre", "nunca seca", "necesita fuego"], "Resina."],
    ["La prensa de estampación se llama…", ["tórculo", "bastidor", "godet", "difumino"], "Grabado."],
    ["El colorante, a diferencia del pigmento…", ["se disuelve en el líquido", "es un polvo insoluble", "no tiñe", "solo es blanco"], "Tintas."],
  ],
  examen: [
    ["Pintar acrílico sobre óleo…", ["es incorrecto: no se adhiere", "es lo habitual", "mejora el secado", "es la regla de graso sobre magro"], "Compatibilidad."],
    ["El lienzo se popularizó en…", ["la Venecia del Renacimiento", "la Prehistoria", "el Imperio romano", "el siglo XX"], "Ligereza."],
    ["El pincel de pelo natural suave es ideal para…", ["la acuarela", "el óleo empastado", "el grabado", "la encáustica"], "Retiene agua."],
    ["La solidez a la luz indica…", ["si un pigmento se decolora", "su precio", "su olor", "su peso"], "Permanencia."],
  ],
  feynman: ["pigmento, aglutinante y disolvente", "aglutinantes de cada técnica", "tipos de soporte", "imprimación y capas", "graso sobre magro"],
  mapa: ["MATERIALES", [["Pintura", "pigmento + aglutinante"], ["Disolventes", "agua u orgánicos"], ["Soportes", "papel, tabla, lienzo"], ["Interacción", "graso sobre magro"]]],
  tarjetas: [
    ["Pigmento", "Polvo insoluble que da color."],
    ["Aglutinante", "Medio que une el pigmento al soporte."],
    ["Goma arábiga", "Aglutinante de la acuarela."],
    ["Aceite de linaza", "Aglutinante del óleo."],
    ["Gesso", "Imprimación de yeso o creta con cola (o acrílica)."],
    ["Gramaje", "Peso del papel en g/m²."],
    ["Graso sobre magro", "Más aceite en cada capa superior."],
    ["Tórculo", "Prensa para estampar grabados."],
  ],
  glosario: [
    ["Pigmento", "Sustancia coloreada en polvo, insoluble en el medio."],
    ["Aglutinante", "Sustancia que fija el pigmento al soporte al secar."],
    ["Disolvente", "Líquido que diluye la pintura y se evapora."],
    ["Carga", "Material inerte que da cuerpo a una pintura."],
    ["Imprimación", "Preparación del soporte antes de pintar."],
    ["Gesso", "Aparejo blanco de yeso o creta para tablas y lienzos."],
    ["Bastidor", "Marco de madera sobre el que se tensa el lienzo."],
    ["Médium", "Mezcla que modifica la textura, el brillo o el secado de una pintura."],
  ],
  situacion: SIT(
    "El laboratorio del color",
    "El departamento quiere un muestrario de materiales para el aula. Vuestro grupo fabricará pinturas con un mismo pigmento y aglutinantes distintos y documentará sus diferencias.",
    [
      "Elegid un pigmento seguro (un óxido de hierro o un ocre).",
      "Fabricad acuarela con goma arábiga, temple con yema y una pintura con cola o acrílico.",
      "Aplicad cada una sobre papel, cartón imprimado y tabla, y anotad secado, brillo y opacidad.",
      "Presentad un panel con las muestras y una ficha técnica de cada pintura.",
    ],
    "Muestrario de pinturas caseras con fichas técnicas.",
    [
      "Las pinturas están bien elaboradas y etiquetadas.",
      "Las fichas describen con precisión las diferencias.",
      "Se respetan las normas de seguridad y limpieza.",
    ],
  ),
  familias: [
    "Mirad la etiqueta de una pintura de manualidades y buscad qué aglutinante lleva.",
    "En la cocina, probad a mezclar una pizca de cacao con agua, con aceite y con huevo: ¿qué cambia?",
    "Comparad juntos un folio, una cartulina y un papel de acuarela al mojarlos.",
    "Visitad una tienda de bellas artes y fijaos en los tipos de pinceles.",
  ],
  saberes: "soportes, utensilios, pigmentos, aglutinantes y disolventes asociados a las diferentes técnicas gráfico-plásticas; interacción entre materiales.",
  ideas: [
    "Fabricar acuarela, temple y pintura de cola con el mismo pigmento.",
    "Comparar la absorción de cinco papeles con la misma aguada.",
    "Preparar un pequeño soporte con encolado y gesso.",
    "Prueba de solidez a la luz: tapar media muestra y dejarla un mes al sol.",
  ],
  fuentes: [
    WIKI("Pigmento", "Pigmento"),
    WIKI("Aglutinante", "Aglutinante"),
    { t: "Museo Nacional del Prado, técnicas artísticas", url: "https://www.museodelprado.es/" },
  ],
});
