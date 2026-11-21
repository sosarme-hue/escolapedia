// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · Pintura al agua: acuarela, témpera y acrílico (tema ampliado). Dibujos propios en SVG.
const { tema, OBRA, TRUCO, cajas, flujo, versus, cuadro, rueda, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "Pintura al agua: acuarela, témpera y acrílico",
  minutos: 60,
  bloque: "C",
  objetivos: [
    "Diferenciar acuarela, gouache, témpera y acrílico por su aglutinante y comportamiento",
    "Aplicar las técnicas básicas de la acuarela: aguadas, húmedo sobre húmedo, veladuras y reservas",
    "Pintar con témpera y gouache por manchas planas y opacas",
    "Aprovechar la versatilidad del acrílico: veladuras, empastes y médiums",
  ],
  claves: ["acuarela", "transparencia", "aguada plana", "degradado", "húmedo sobre húmedo", "veladura", "reserva", "gouache", "témpera", "opacidad", "acrílico", "médium", "empaste", "retardante"],
  pregunta: {
    texto: "¿Por qué en la acuarela no se usa pintura blanca para las luces?",
    respuesta: "Porque la acuarela es <mark>transparente</mark>: la luz atraviesa la capa de color, rebota en el papel blanco y vuelve a nuestros ojos. El blanco de la obra es el propio <b>papel</b>, y las zonas más luminosas se dejan sin pintar o se protegen con <b>reservas</b>. Si añadieras blanco, la pintura se volvería opaca y perdería su luminosidad: dejaría de ser acuarela y pasaría a ser gouache.",
  },
  bloques: [
    { h: "Tres familias de pintura al agua", p: [
      "Las pinturas al agua se diluyen con agua mientras están frescas. Se distinguen por su <b>aglutinante</b> y su <b>opacidad</b>. La <mark>acuarela</mark>, de goma arábiga, es transparente. El <b>gouache</b>, también de goma arábiga pero con más pigmento y cargas blancas, es opaco y mate. La <b>témpera</b> escolar es una pintura opaca, más económica, con aglutinantes de cola o goma.",
      "El <mark>acrílico</mark>, de resina sintética en emulsión, se diluye con agua pero al secar forma una película plástica insoluble. Esta diferencia es fundamental: la acuarela y el gouache se pueden reactivar con agua; el acrílico, no.",
    ], svg: cuadro("Pinturas al agua", [["Pintura", "Aglutinante", "Aspecto"], ["Acuarela", "goma arábiga", "transparente"], ["Gouache", "goma + cargas", "opaco, mate"], ["Témpera", "cola o goma", "opaca"], ["Acrílico", "resina", "opaco o velado"]]) },
    { h: "La acuarela: materiales", p: [
      "La acuarela se vende en <b>pastillas</b> o <b>tubos</b>. Necesita un papel específico, de algodón o celulosa, de al menos 300 g/m², con grano fino, medio o grueso; para que no se ondule, se tensa mojándolo y pegándolo con cinta engomada a un tablero. Los pinceles ideales son los de pelo suave que retienen mucha agua, redondos de punta fina y planos anchos.",
      "La paleta de acuarela suele ser limitada: con un amarillo, un rojo, un azul y algún tierra se mezcla casi todo. Se mezclan los colores en la paleta o directamente en el papel, y se controla siempre la cantidad de agua, que es la verdadera clave de la técnica.",
    ], extra: TRUCO("trabaja con dos botes de agua: uno para limpiar el pincel y otro limpio para diluir. Así los colores no se ensucian."), svg: cajas("Para pintar acuarela", [["Papel", "300 g/m², tensado"], ["Pinceles", "pelo suave"], ["Paleta", "limitada"], ["Dos botes", "limpiar y diluir"], ["Esponja", "absorber"], ["Cinta", "engomada"]]) },
    { h: "Técnicas básicas de la acuarela", p: [
      "La <b>aguada plana</b> es una mancha uniforme hecha en franjas horizontales que se van uniendo antes de secar. La <b>aguada degradada</b> añade agua en cada franja para aclarar. El <mark>húmedo sobre húmedo</mark> aplica color sobre papel mojado: los colores se expanden y se funden, ideal para cielos y fondos. El <b>húmedo sobre seco</b> da bordes nítidos y detalles.",
      "La <b>veladura</b> superpone capas transparentes cuando la anterior está seca: un azul sobre un amarillo produce un verde luminoso. También se puede <b>levantar</b> color con un pincel húmedo o una esponja, y crear texturas con <b>sal</b>, que absorbe el pigmento y deja estrellas, o con pincel seco.",
    ], svg: cajas("Técnicas de acuarela", [["Aguada plana", "mancha uniforme"], ["Degradado", "de oscuro a claro"], ["En húmedo", "fundidos"], ["En seco", "bordes nítidos"], ["Veladura", "capas transparentes"], ["Sal", "textura"]]), v: ["agu-a", "Ocho técnicas básicas de acuarela"] },
    { h: "Reservas y orden de trabajo", p: [
      "Como no hay blanco, los blancos se <b>planifican</b>. La <mark>reserva</mark> puede hacerse dejando zonas sin pintar, con <b>líquido enmascarador</b> (una goma que se retira al final), con <b>cera</b> o vela, que repele el agua, o con cinta de pintor para bordes rectos.",
      "El orden lógico es pintar de <b>claro a oscuro</b> y de lo <b>general al detalle</b>: primero las grandes aguadas de fondo, después las masas de color medio y por último las sombras y detalles. Los acuarelistas como Turner, Sargent o, en España, Fortuny y Sorolla en sus apuntes, demostraron que la acuarela es rápida, luminosa y exige decisión.",
    ], extra: OBRA("El Rigi azul, amanecer", "J. M. W. Turner", "1842, acuarela sobre papel, Tate Britain"), svg: flujo("Orden de una acuarela", ["Dibujo suave y reservas", "Aguadas de fondo claras", "Masas de color medio", "Sombras y detalles"]) },
    { h: "Gouache y témpera", p: [
      "El <b>gouache</b> y la <b>témpera</b> son opacos: un color claro cubre a uno oscuro, así que se puede corregir pintando encima y se usa el blanco. Secan rápido y quedan <b>mates</b>, con un aspecto aterciopelado muy apreciado en ilustración, diseño gráfico y carteles. Matisse pintó con gouache los papeles que luego recortaba en sus <i>gouaches découpés</i>.",
      "Se trabajan por <b>tintas planas</b>, manchas de color uniforme, que exigen la consistencia adecuada: ni tan líquida que transparente, ni tan espesa que se agriete. También admiten degradados rápidos y el <b>pincel seco</b> para texturas. Como se reactivan con agua, al superponer capas hay que pintar con decisión para no levantar la de debajo.",
    ], svg: versus("Acuarela frente a gouache", ["Acuarela", ["transparente", "blanco del papel", "de claro a oscuro", "luminosa"]], ["Gouache", ["opaco", "pintura blanca", "se corrige encima", "mate y plano"]]), v: ["agu-c", "Pintar con témpera o gouache: nociones básicas"] },
    { h: "El acrílico", p: [
      "El <mark>acrílico</mark> apareció en los años cincuenta y se popularizó con artistas como Rothko, Hockney o Warhol. Sus ventajas son el <b>secado rápido</b>, la <b>resistencia</b> al agua una vez seco, la flexibilidad de su película y la posibilidad de pintar sobre casi cualquier soporte imprimado: lienzo, papel grueso, madera, cartón, muro.",
      "Puede usarse muy diluido, como una acuarela, para <b>veladuras</b>; con su consistencia normal, de forma opaca; o espeso, en <b>empastes</b> con espátula. Su punto débil es que seca tan rápido que dificulta los fundidos y se estropean los pinceles si no se lavan enseguida. Por eso se usan paletas húmedas y <b>retardantes</b>.",
    ], svg: rueda("ACRÍLICO", ["veladura", "opaco", "empaste", "secado rápido", "cualquier soporte", "resistente"]) },
    { h: "Los médiums del acrílico", p: [
      "Los <mark>médiums</mark> modifican la pintura acrílica sin cambiar su color. El <b>médium brillante</b> o <b>mate</b> controla el acabado. El <b>gel</b> espesa la pintura para empastes y conserva las huellas de la espátula. El <b>retardante</b> alarga el tiempo de secado para fundir colores. Las <b>pastas de modelar</b> y las cargas como arena o fibras crean relieves.",
      "Además, el médium acrílico es un excelente adhesivo para el <b>collage</b>: pega papeles, telas y objetos y los protege. Esta versatilidad convierte al acrílico en el material más usado en las técnicas mixtas contemporáneas.",
    ], svg: cajas("Médiums acrílicos", [["Brillante / mate", "acabado"], ["Gel", "empaste"], ["Retardante", "más tiempo"], ["Pasta de modelar", "relieve"], ["Cargas", "arena, fibras"], ["Adhesivo", "collage"]]), v: ["agu-b", "Seis técnicas principales para pintar con acrílicos"] },
    { h: "Elegir la pintura al agua", p: [
      "Para un apunte rápido y luminoso del natural, la <b>acuarela</b>. Para una ilustración de colores planos y mates o un cartel, el <b>gouache</b>. Para trabajos escolares económicos de mucha superficie, la <b>témpera</b>. Para una obra duradera de formato grande, con texturas o técnicas mixtas, el <b>acrílico</b>.",
      "Y recuerda la regla de compatibilidad: el acrílico puede servir de base para el óleo, pero no al revés; y la acuarela o el gouache no deben barnizarse con productos al agua, porque se reactivarían. Elegir bien el material es el primer paso de una buena obra.",
    ], svg: cajas("Qué pintura elegir", [["Acuarela", "apunte luminoso"], ["Gouache", "ilustración plana"], ["Témpera", "grandes superficies escolares"], ["Acrílico", "obra duradera y mixta"]]) },
  ],
  figura: { titulo: "La pintura al agua de un vistazo", aria: "Resumen de acuarela, gouache y témpera, acrílico y médiums", cols: [
    ["Acuarela", ["transparente", "blanco del papel", "húmedo sobre húmedo", "veladuras"]],
    ["Gouache y témpera", ["opacos", "mates", "tintas planas", "se corrigen"]],
    ["Acrílico", ["resina", "secado rápido", "insoluble seco", "veladura y empaste"]],
    ["Médiums", ["gel", "retardante", "pasta de modelar", "adhesivo"]],
  ] },
  video: ["agu-a", "Ocho técnicas básicas de acuarela"],
  ejemplos: [
    ["Pinta un cielo de atardecer a la acuarela.", ["Moja el papel del cielo.", "Aplica amarillo abajo y rosa y azul arriba.", "Deja que se fundan sin tocar.", "Cuando seque, pinta la silueta del paisaje en húmedo sobre seco."], "Fondo fundido y primer plano nítido."],
    ["Diseña un cartel con gouache.", ["Boceto con zonas de color cerradas.", "Mezcla cada color en cantidad suficiente.", "Rellena por tintas planas, de fondo a figura.", "Corrige bordes con color opaco encima."], "Colores planos, mates y limpios."],
    ["Crea una textura en relieve con acrílico.", ["Mezcla pasta de modelar con arena.", "Aplica con espátula y marca huellas.", "Deja secar.", "Pinta encima con veladuras para resaltar el relieve."], "Superficie táctil con color en capas."],
  ],
  errores: [
    "Usar blanco para aclarar la acuarela: la vuelve opaca.",
    "Pintar acuarela en papel fino sin tensar.",
    "Dejar los pinceles con acrílico secándose: se estropean.",
    "Trabajar el gouache demasiado aguado: transparenta y queda irregular.",
    "Repasar sin parar una zona húmeda de acuarela: se ensucia.",
  ],
  ejercicios: {
    b: [
      ["¿Qué aglutinante tienen la acuarela y el gouache?", "Goma arábiga."],
      ["¿Qué es una veladura?", "Una capa transparente de color sobre otra seca."],
      ["¿Cómo se consiguen los blancos en acuarela?", "Dejando el papel sin pintar o con reservas."],
      ["¿Qué ocurre con el acrílico cuando seca?", "Forma una película plástica insoluble en agua."],
    ],
    m: [
      ["Diferencia húmedo sobre húmedo y húmedo sobre seco.", "El primero funde los colores en el papel mojado; el segundo da bordes nítidos sobre papel seco."],
      ["¿Por qué el gouache permite corregir y la acuarela no?", "Porque el gouache es opaco y cubre lo de debajo; la acuarela es transparente."],
      ["¿Para qué sirve el retardante?", "Para alargar el tiempo de secado del acrílico y poder fundir colores."],
      ["Nombra tres formas de hacer reservas.", "Líquido enmascarador, cera o vela y cinta adhesiva."],
    ],
    a: [
      ["Pinta el mismo motivo en acuarela, gouache y acrílico y compara.", "Respuesta abierta: luminosidad, opacidad, tiempo de trabajo y acabado de cada técnica."],
      ["Analiza una acuarela de Turner o Sargent.", "Respuesta abierta: uso del blanco del papel, aguadas, velocidad del trazo, atmósfera."],
      ["Propón una obra mixta con acrílico y collage.", "Respuesta abierta: soporte, médium como adhesivo, capas, texturas y protección final."],
    ],
  },
  quiz: [
    ["La acuarela es…", ["transparente", "opaca", "grasa", "insoluble seca"], "Luz del papel."],
    ["El gouache se diferencia de la acuarela por ser…", ["opaco", "transparente", "graso", "de huevo"], "Cargas blancas."],
    ["El aglutinante del acrílico es…", ["una resina sintética", "goma arábiga", "aceite", "cera"], "Emulsión."],
    ["Para fundidos en el cielo se usa…", ["húmedo sobre húmedo", "empaste", "esgrafiado", "tramado"], "Papel mojado."],
    ["La sal sobre la acuarela húmeda crea…", ["texturas", "reservas permanentes", "brillo", "relieve"], "Estrellas."],
    ["El líquido enmascarador sirve para…", ["reservar blancos", "diluir", "barnizar", "fijar"], "Se retira."],
    ["En acuarela se pinta…", ["de claro a oscuro", "de oscuro a claro", "solo en negro", "con espátula"], "Orden."],
    ["Matisse recortó papeles pintados con…", ["gouache", "óleo", "temple", "pastel"], "Gouaches découpés."],
    ["El gel acrílico sirve para…", ["empastes", "fijar pastel", "grabar", "diluir óleo"], "Médium."],
    ["La pintura que puede ir debajo del óleo es…", ["el acrílico", "la acuarela sin fijar", "el pastel", "la cera"], "Compatibilidad."],
  ],
  examen: [
    ["Una pintura que se reactiva con agua al secar es…", ["el gouache", "el acrílico", "el óleo", "la encáustica"], "Goma arábiga."],
    ["El papel de acuarela recomendado tiene al menos…", ["300 g/m²", "80 g/m²", "20 g/m²", "1000 g/m²"], "Gramaje."],
    ["Las tintas planas son típicas de…", ["gouache y témpera", "acuarela húmeda", "sanguina", "grabado"], "Opacas."],
    ["El acrílico se popularizó en…", ["los años cincuenta", "el Renacimiento", "el Barroco", "la Edad Media"], "Siglo XX."],
  ],
  feynman: ["acuarela, gouache, témpera y acrílico", "transparencia y opacidad", "técnicas de acuarela", "reservas", "médiums acrílicos"],
  mapa: ["PINTURA AL AGUA", [["Acuarela", "transparente"], ["Gouache y témpera", "opacos y mates"], ["Acrílico", "resina, versátil"], ["Médiums", "gel, retardante"]]],
  tarjetas: [
    ["Acuarela", "Pigmento + goma arábiga, transparente."],
    ["Gouache", "Acuarela opaca con cargas."],
    ["Acrílico", "Resina sintética, insoluble seca."],
    ["Húmedo sobre húmedo", "Color en papel mojado: fundidos."],
    ["Veladura", "Capa transparente sobre otra seca."],
    ["Reserva", "Zona protegida para mantener el blanco."],
    ["Tinta plana", "Mancha de color uniforme."],
    ["Retardante", "Médium que alarga el secado."],
  ],
  glosario: [
    ["Aguada plana", "Mancha uniforme de acuarela."],
    ["Degradado", "Paso gradual de un tono intenso a uno claro."],
    ["Levantar color", "Retirar pigmento con pincel húmedo o esponja."],
    ["Líquido enmascarador", "Goma líquida que protege zonas del papel."],
    ["Opacidad", "Capacidad de una pintura para cubrir lo de debajo."],
    ["Médium", "Producto que modifica la pintura sin cambiar su color."],
    ["Empaste", "Capa gruesa de pintura con relieve."],
    ["Paleta húmeda", "Paleta con esponja mojada que mantiene fresco el acrílico."],
  ],
  situacion: SIT(
    "Ilustrar un cuento",
    "Una editorial escolar os pide ilustrar un cuento corto para alumnado de Primaria. Cada uno elegirá la técnica al agua más adecuada para su escena.",
    [
      "Leed el cuento y repartid las escenas.",
      "Haced bocetos y pruebas con acuarela, gouache y acrílico.",
      "Elegid una técnica justificada y pintad la ilustración final.",
      "Montad el libro impreso o digital.",
    ],
    "Libro ilustrado con fichas de técnica.",
    [
      "Dominio de la técnica elegida.",
      "Adecuación de la técnica a la escena.",
      "Coherencia visual del libro.",
    ],
  ),
  familias: [
    "Pintad juntos un cielo mojando antes el papel.",
    "Comparad un dibujo de acuarela y otro de témpera: ¿cuál deja ver el papel?",
    "Probad a reservar un dibujo con una vela antes de pintar encima.",
    "Mirad acuarelas de Sorolla o Fortuny en la web del Museo del Prado.",
  ],
  saberes: "técnicas de pintura: materiales, útiles y soportes; técnicas al agua: acuarela, témpera y acrílico.",
  ideas: [
    "Muestrario de las seis técnicas básicas de acuarela.",
    "Cartel con gouache por tintas planas.",
    "Textura con médiums acrílicos y arena.",
    "Comparativa de opacidad sobre una línea negra.",
  ],
  fuentes: [
    WIKI("Acuarela", "Acuarela"),
    WIKI("Pintura acrílica", "Pintura_acr%C3%ADlica"),
  ],
});
