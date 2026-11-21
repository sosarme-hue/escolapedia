// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · Técnicas secas de dibujo (tema ampliado). Dibujos propios en SVG.
const { tema, OBRA, TRUCO, escala, muestras, cajas, flujo, versus, cuadro, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "Técnicas secas: grafito, carboncillo, sanguina y pasteles",
  minutos: 60,
  bloque: "B",
  objetivos: [
    "Conocer los materiales secos de dibujo, sus durezas y sus soportes",
    "Aplicar recursos de grafismo: trazo, sombreado, tramado, difuminado y borrado",
    "Distinguir carboncillo, lápices compuestos, sanguina, barras grasas, lápices de color y pasteles",
    "Fijar y conservar los dibujos hechos con técnicas secas",
  ],
  claves: ["grafito", "dureza H y B", "carboncillo", "carbón prensado", "conté", "sanguina", "tres lápices", "pastel blando", "pastel al óleo", "lápiz de color", "difumino", "goma moldeable", "fijador", "tramado"],
  pregunta: {
    texto: "¿Por qué un lápiz 6B mancha mucho más que un 2H?",
    respuesta: "Porque la mina no es solo grafito: es una mezcla de <b>grafito y arcilla</b> cocida. Cuanto más grafito, más blanda y oscura es la mina (<mark>B</mark>, de <i>black</i>); cuanto más arcilla, más dura y clara (<mark>H</mark>, de <i>hard</i>). El 2H deja una línea fina y gris, ideal para encajar; el 6B, una mancha negra y brillante para las sombras más profundas.",
  },
  bloques: [
    { h: "Qué son las técnicas secas", p: [
      "Las <mark>técnicas secas</mark> son las que se aplican directamente sobre el soporte sin agua ni disolvente: el material se desgasta por <b>frotamiento</b> y deja partículas atrapadas en el grano del papel. Por eso el <b>soporte</b> es decisivo: un papel satinado admite poco material y da trazos finos; un papel con grano, como el Ingres o el Canson Mi-Teintes, retiene más pigmento y permite capas.",
      "Sus ventajas son la inmediatez y la facilidad de corrección. Su inconveniente es la fragilidad: el polvo se emborrona y algunas necesitan <b>fijador</b>. Los útiles comunes son el <b>difumino</b> de papel prensado, los trapos, las gomas (de miga, plástica y <b>moldeable</b>), el cúter y la lija para sacar punta.",
    ], svg: cajas("Útiles de las técnicas secas", [["Papel con grano", "retiene el pigmento"], ["Difumino", "funde tonos"], ["Goma moldeable", "saca luces"], ["Cúter y lija", "afilan"], ["Trapo", "manchas amplias"], ["Fijador", "protege"]]) },
    { h: "El grafito", p: [
      "El <b>lápiz de grafito</b> es el útil más versátil. Las minas se gradúan de <b>9H</b>, muy dura, a <b>9B</b>, muy blanda, pasando por HB y F. También hay <b>barras de grafito</b> sin madera, para manchar grandes zonas, y <b>minas</b> para portaminas. El grafito tiene un brillo metálico característico que aumenta al acumular capas.",
      "Se trabaja con <b>trazos</b> de distinta presión, <b>sombreados</b> paralelos, <b>tramados</b> cruzados que se superponen para oscurecer y <b>difuminados</b> con difumino. Lo ideal es encajar con minas duras y ligeras, que casi no se ven, y avanzar hacia las blandas en las sombras. Abusar del difumino da dibujos sucios: es mejor construir el tono con el propio trazo.",
    ], svg: escala("Durezas del grafito", ["4H", "2H", "HB", "2B", "4B", "6B", "8B"]) },
    { h: "El carboncillo y el carbón prensado", p: [
      "El <mark>carboncillo</mark> es una ramita de sauce, vid o tilo carbonizada en un horno sin oxígeno. Es muy frágil y poco adherente: se borra con un trapo y permite rectificar mucho, por eso es ideal para encajar, para el apunte rápido y para trabajar en gran formato. Da negros aterciopelados y mates, sin brillo.",
      "El <b>carbón prensado</b> o compuesto se fabrica con polvo de carbón y aglutinante en barras o lápices; es más negro, más estable y menos fácil de borrar. Con ambos se puede trabajar por <b>mancha</b>: se oscurece todo el papel con polvo de carbón y luego se «dibuja» la luz con la goma moldeable, un método muy expresivo.",
    ], extra: TRUCO("sujeta el carboncillo con la mano por encima, como un pincel, y aléjate del papel: verás el conjunto y evitarás manchar con la palma."), svg: versus("Carbón", ["Carboncillo", ["rama carbonizada", "frágil y borrable", "negro mate", "encaje y apunte"]], ["Carbón prensado", ["polvo + aglutinante", "más estable", "negro intenso", "acabado final"]]), v: ["sec-a", "Técnica de dibujo con carboncillo más pictórica"] },
    { h: "Lápices compuestos y sanguina", p: [
      "Los <b>lápices compuestos</b> mezclan pigmento, arcilla y un poco de aglutinante. Los más conocidos son las barras <b>Conté</b>, inventadas por Nicolas-Jacques Conté en 1795 cuando faltaba grafito en Francia, en negro, blanco, sepia y sanguina. Son más firmes que el carboncillo y permiten trazos limpios.",
      "La <mark>sanguina</mark> es un óxido de hierro rojizo que recuerda el color de la piel, por eso la usaron Leonardo, Miguel Ángel y Watteau para estudios de figura. Combinada con piedra negra y tiza blanca sobre papel de color forma la técnica de <b>los tres lápices</b>: el papel aporta el tono medio, el negro las sombras, la sanguina la carnación y el blanco las luces.",
    ], extra: OBRA("Estudio de cabezas", "Antoine Watteau", "hacia 1716, técnica de los tres lápices sobre papel"), svg: muestras("Los tres lápices sobre papel de color", [["Papel tono medio", "#c8b89a", "medias tintas"], ["Piedra negra", "#2b2b2b", "sombras"], ["Sanguina", "#a5452c", "carnación"], ["Tiza blanca", "#f8f6f0", "luces"]]) },
    { h: "Barras grasas y lápices de color", p: [
      "Las <b>barras grasas</b> llevan cera o aceite como aglutinante: las <b>ceras</b> escolares, los lápices litográficos y los <b>pasteles al óleo</b>. Se adhieren bien, no necesitan fijador y permiten el <b>esgrafiado</b>: se cubre el papel con varias capas y se rasca para descubrir las de debajo. Se pueden fundir con aceite o con un poco de disolvente.",
      "Los <b>lápices de color</b> combinan pigmento y cera. Se trabajan por capas suaves y superpuestas, mezclando ópticamente los colores, y se pueden <b>bruñir</b> presionando con un lápiz blanco o incoloro hasta lograr superficies lisas y saturadas. Los <b>lápices acuarelables</b> se disuelven después con un pincel húmedo y enlazan con las técnicas mixtas.",
    ], svg: flujo("Lápices de color por capas", ["Capa suave del color más claro", "Superponer tonos para mezclar", "Oscurecer con complementarios", "Bruñir para unificar"]) },
    { h: "El pastel", p: [
      "El <mark>pastel</mark> es pigmento casi puro con una mínima cantidad de goma, de ahí su luminosidad: es «pintar en seco». Hay <b>pasteles blandos</b>, de color intenso y aterciopelado; <b>duros</b>, en barras más firmes para detalles; y <b>lápices pastel</b>. Se trabaja sobre papel con grano o papeles lijados que retienen mucho pigmento.",
      "Se aplica en <b>trazos</b> visibles, <b>manchas</b> con el canto de la barra, <b>difuminados</b> con los dedos y <b>superposiciones</b> de capas. Su gran maestra fue <b>Rosalba Carriera</b> en el siglo XVIII, y <b>Degas</b> lo llevó al límite en sus bailarinas, combinándolo con monotipo y vapor. Su punto débil es la fragilidad del polvo.",
    ], extra: OBRA("Bailarinas en azul", "Edgar Degas", "hacia 1899, pastel sobre papel"), svg: cuadro("Tipos de pastel", [["Tipo", "Aglutinante", "Uso"], ["Blando", "mínima goma", "manchas, color"], ["Duro", "más goma", "detalles"], ["Lápiz pastel", "goma y arcilla", "líneas"], ["Al óleo", "cera y aceite", "empaste, esgrafiado"]]), v: ["sec-b", "Empieza a pintar al pastel"] },
    { h: "Fijar y proteger", p: [
      "El <b>fijador</b> es una resina disuelta en alcohol o en un disolvente que, pulverizada, pega las partículas al papel. Se aplica en capas finas, a unos 30 cm, con buena ventilación o al aire libre. Se puede usar entre capas (fijador de trabajo) y al final, sabiendo que oscurece ligeramente los tonos, sobre todo los del pastel.",
      "Muchos pastelistas prefieren no fijar la capa final y proteger la obra enmarcándola con un <b>passe-partout</b> que separe el vidrio. Los dibujos en carpeta se guardan planos con papel de seda o cristal entre ellos. Nunca se debe usar laca de pelo: contiene aceites que amarillean.",
    ], svg: flujo("Fijar un dibujo", ["Aire libre o ventilación", "Spray a 30 cm, en horizontal", "Capas finas y cruzadas", "Dejar secar antes de seguir"]) },
    { h: "Elegir la técnica seca adecuada", p: [
      "Cada técnica seca tiene su terreno. El <b>grafito</b> es preciso, ideal para estudios detallados y dibujo técnico-artístico. El <b>carboncillo</b> sirve para encajar, para el gesto y el gran formato. La <b>sanguina</b> y los tres lápices dan calidez a la figura. Los <b>lápices de color</b> funcionan en ilustración. El <b>pastel</b> une dibujo y color con gran luminosidad.",
      "También influye el soporte, el tiempo disponible y el carácter que buscas: un retrato tranquilo pide grafito o sanguina; una escena dinámica, carboncillo; un paisaje luminoso, pastel. Hacer pequeñas pruebas antes de decidir es parte del oficio.",
    ], svg: cajas("Qué técnica para qué", [["Grafito", "precisión"], ["Carboncillo", "gesto y encaje"], ["Sanguina", "figura cálida"], ["Lápiz de color", "ilustración"], ["Pastel", "color luminoso"], ["Cera", "esgrafiado"]]) },
  ],
  figura: { titulo: "Las técnicas secas de un vistazo", aria: "Resumen de grafito, carbón, lápices compuestos y pastel", cols: [
    ["Grafito", ["de 9H a 9B", "trazo y tramado", "brillo metálico", "precisión"]],
    ["Carbón", ["carboncillo", "carbón prensado", "negro mate", "trabajo por mancha"]],
    ["Compuestos", ["Conté", "sanguina", "tres lápices", "ceras y colores"]],
    ["Pastel", ["blando y duro", "al óleo", "papel con grano", "fijador"]],
  ] },
  video: ["sec-a", "Técnica de dibujo con carboncillo más pictórica"],
  ejemplos: [
    ["Planifica un retrato a grafito.", ["Encaje con 2H, muy suave.", "Valores medios con HB y 2B.", "Sombras profundas con 4B-6B.", "Luces con goma moldeable."], "De duro a blando y de claro a oscuro."],
    ["Dibuja con los tres lápices una cabeza.", ["Papel ocre o gris claro.", "Encaje con sanguina.", "Sombras con piedra negra.", "Brillos con tiza blanca."], "El papel funciona como tono medio."],
    ["Haz un esgrafiado con ceras.", ["Cubre el papel con colores vivos.", "Cúbrelo con una capa de cera negra.", "Rasca con un punzón el dibujo.", "Aparecen los colores de debajo."], "Línea de color sobre fondo oscuro."],
  ],
  errores: [
    "Empezar a encajar con lápices blandos que luego no se borran.",
    "Difuminar todo con el dedo: ensucia y deja grasa en el papel.",
    "Usar papel satinado para pastel o carboncillo.",
    "Fijar con laca de pelo.",
  ],
  ejercicios: {
    b: [
      ["¿Qué significan H y B en un lápiz?", "H, dureza (más arcilla, más claro); B, blandura (más grafito, más oscuro)."],
      ["¿De qué está hecho el carboncillo?", "De ramitas de sauce, vid o tilo carbonizadas sin oxígeno."],
      ["¿Qué es la sanguina?", "Un lápiz de óxido de hierro rojizo, usado para la figura."],
      ["¿Para qué sirve la goma moldeable?", "Para sacar luces y aclarar sin dañar el papel."],
    ],
    m: [
      ["Explica la técnica de los tres lápices.", "Sobre papel de color se usan piedra negra para sombras, sanguina para la carnación y tiza blanca para las luces."],
      ["Diferencia carboncillo y carbón prensado.", "El carboncillo es una rama natural frágil y borrable; el prensado lleva aglutinante, es más negro y estable."],
      ["¿Por qué el pastel es tan luminoso?", "Porque es casi pigmento puro con muy poco aglutinante, sin capas que lo apaguen."],
      ["¿Cómo se trabaja el lápiz de color para lograr colores intensos?", "Por capas suaves superpuestas y bruñendo al final."],
    ],
    a: [
      ["Haz la misma naturaleza muerta con grafito, carboncillo y pastel y compara.", "Respuesta abierta: precisión del grafito, expresividad del carbón y color del pastel."],
      ["Investiga el uso del pastel por Degas.", "Combinó pastel con monotipo, aplicó vapor y fijador entre capas y lo usó para bailarinas y escenas cotidianas."],
      ["Diseña una ilustración con lápices de color y justifica la gama.", "Respuesta abierta con planificación de capas y armonía de color."],
    ],
  },
  quiz: [
    ["La mina más dura de esta lista es…", ["4H", "HB", "2B", "6B"], "H es dureza."],
    ["El carboncillo procede de…", ["ramas carbonizadas", "grafito", "arcilla", "cera"], "Sauce o vid."],
    ["La sanguina es…", ["óxido de hierro rojizo", "carbón", "cera", "grafito"], "Figura."],
    ["Los tres lápices son…", ["negro, sanguina y blanco", "rojo, verde y azul", "H, B y HB", "cian, magenta y amarillo"], "Sobre papel de color."],
    ["Las barras Conté se inventaron en…", ["1795", "1500", "1900", "1960"], "Francia."],
    ["El pastel lleva…", ["muy poco aglutinante", "mucho aceite", "yema de huevo", "resina acrílica"], "Pigmento casi puro."],
    ["El esgrafiado consiste en…", ["rascar capas para descubrir las de debajo", "mojar el papel", "fijar", "difuminar"], "Ceras."],
    ["Bruñir es…", ["presionar para unificar capas de lápiz", "borrar", "mojar", "romper la punta"], "Lápiz de color."],
    ["Gran maestro del pastel en el siglo XIX fue…", ["Degas", "Goya", "Durero", "Warhol"], "Bailarinas."],
    ["El fijador…", ["oscurece un poco los tonos", "aclara", "borra", "no cambia nada"], "Pastel."],
  ],
  examen: [
    ["Para encajar un dibujo de grafito conviene…", ["una mina dura y trazo suave", "un 8B con fuerza", "pastel", "tinta"], "Corregible."],
    ["El carboncillo da un negro…", ["mate y aterciopelado", "brillante metálico", "transparente", "graso"], "Sin brillo."],
    ["En los tres lápices, el papel aporta…", ["el tono medio", "las luces", "las sombras", "el dibujo"], "Color del soporte."],
    ["Un pastel al óleo se aglutina con…", ["cera y aceite", "goma arábiga", "huevo", "agua"], "Barra grasa."],
  ],
  feynman: ["durezas del grafito", "carboncillo y carbón prensado", "sanguina y tres lápices", "barras grasas y lápices de color", "pastel y fijado"],
  mapa: ["TÉCNICAS SECAS", [["Grafito", "H y B"], ["Carbón", "mancha y gesto"], ["Compuestos", "sanguina, Conté"], ["Pastel", "color en seco"]]],
  tarjetas: [
    ["H y B", "Dureza y blandura de la mina."],
    ["Carboncillo", "Rama carbonizada, frágil y borrable."],
    ["Sanguina", "Lápiz rojizo de óxido de hierro."],
    ["Tres lápices", "Negro, sanguina y blanco sobre papel de color."],
    ["Pastel blando", "Pigmento con mínima goma."],
    ["Esgrafiado", "Rascar capas de cera."],
    ["Goma moldeable", "Saca luces sin dañar el papel."],
    ["Fijador", "Resina en spray que pega el polvo."],
  ],
  glosario: [
    ["Técnica seca", "La que se aplica sin agua ni disolvente, por frotamiento."],
    ["Tramado", "Sombreado con líneas cruzadas superpuestas."],
    ["Difumino", "Barra de papel prensado para fundir tonos."],
    ["Carbón prensado", "Barra de polvo de carbón con aglutinante."],
    ["Conté", "Barra compuesta de pigmento y arcilla."],
    ["Pastel al óleo", "Barra de pigmento con cera y aceite."],
    ["Bruñido", "Presión que unifica y satura las capas de lápiz."],
    ["Papel Ingres", "Papel verjurado con grano, propio del carboncillo y el pastel."],
  ],
  situacion: SIT(
    "Retratos del instituto",
    "Vais a hacer una galería de retratos de personas del centro (alumnado, profesorado, personal) con técnicas secas para el día de puertas abiertas.",
    [
      "Haced apuntes rápidos con carboncillo para captar el gesto.",
      "Elegid uno y desarrolladlo con grafito o con los tres lápices.",
      "Añadid una ficha con técnica, soporte y tiempo empleado.",
      "Enmarcad con passe-partout y montad la galería.",
    ],
    "Galería de retratos con fichas técnicas.",
    [
      "Dominio de la técnica elegida y de los valores.",
      "Parecido y expresividad.",
      "Presentación cuidada y obra protegida.",
    ],
  ),
  familias: [
    "Mirad juntos un estuche y ordenad los lápices de más duro a más blando.",
    "Haced un retrato mutuo de cinco minutos con un lápiz blando.",
    "Buscad en el Museo del Prado en línea un dibujo a sanguina.",
    "Probad el esgrafiado con ceras y un palillo.",
  ],
  saberes: "materiales, útiles y soportes asociados al dibujo; técnicas secas: lápices de grafito, carboncillo, lápices compuestos, sanguinas, barras grasas, de color y pasteles.",
  ideas: [
    "Escala de durezas con siete lápices.",
    "Dibujo sustractivo: papel manchado de carbón y luces con goma.",
    "Retrato a los tres lápices sobre papel de color.",
    "Comparar papeles para pastel.",
  ],
  fuentes: [
    WIKI("Carboncillo", "Carboncillo"),
    WIKI("Pastel (pintura)", "Pastel_(pintura)"),
  ],
});
