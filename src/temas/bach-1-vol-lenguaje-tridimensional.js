// Volumen, 1º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-vol");

module.exports = B.tema({
  titulo: "El lenguaje tridimensional",
  minutos: 60,
  objetivos: [
    "Reconocer los elementos del lenguaje tridimensional: punto, línea, plano y volumen",
    "Distinguir tipos de forma, textura y acabado",
    "Comprender el papel de la luz, el color, el equilibrio y el movimiento",
    "Analizar una obra en volumen con vocabulario adecuado",
  ],
  claves: ["forma", "plano", "textura", "luz", "equilibrio", "ritmo", "movimiento", "composición"],
  pregunta: {
    texto: "¿Cómo puede parecer blanda y viva una figura tallada en mármol, una piedra durísima?",
    respuesta: "Gracias al <mark>lenguaje tridimensional</mark>: el escultor controla la forma, la textura, la luz que resbala por la superficie y la sensación de movimiento. Bernini hizo que unos dedos de mármol parecieran hundirse en la piel.",
  },
  lectura: {
    titulo: "Una piedra que se mueve",
    html: `<p>En la Galería Borghese de Roma, Apolo persigue a Dafne. Ella empieza a convertirse en laurel: de sus dedos brotan hojas y sus pies se vuelven raíces. Todo es mármol, pero el grupo que Gian Lorenzo Bernini talló entre 1622 y 1625 parece capturar un instante de una carrera.</p>
    <p>¿Cómo lo consiguió? Con diagonales que empujan la mirada, superficies pulidas que brillan como piel y otras rugosas como corteza, y huecos que dejan pasar la luz. Ese es el <b>lenguaje tridimensional</b>: unos elementos que, bien combinados, hacen hablar a la materia.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Punto, línea, plano y volumen",
      html: `<p>Igual que el dibujo, el volumen tiene sus elementos básicos, pero en el espacio real. El <b>punto</b> es una pieza pequeña o un lugar de atención. La <b>línea</b> es un alambre, una varilla o una arista: «dibuja en el aire». El <b>plano</b> es una superficie delgada, como una chapa o un cartón, que encierra o divide el espacio.</p>
      <p>El <b>volumen</b> es la masa que ocupa espacio. Muchas obras combinan los cuatro: Julio González y Pablo Gargallo construían figuras con varillas y chapas recortadas, mezclando líneas, planos y vacíos.</p>`,
      svg: B.cajas("Elementos del lenguaje tridimensional", [["Punto", "pieza pequeña|foco de atención"], ["Línea", "alambre, varilla|dibujo en el aire"], ["Plano", "chapa, cartón|superficie"], ["Volumen", "masa|ocupa espacio"]]),
    },
    {
      h: "La forma",
      html: `<p>La <b>forma</b> es la configuración externa de la obra. Puede ser <b>geométrica</b> (cubos, esferas, cilindros, con aristas y superficies regulares) u <b>orgánica</b> (curvas suaves, como cuerpos, piedras o plantas). También puede ser <b>figurativa</b>, si representa algo reconocible, o <b>abstracta</b>, si no imita la realidad.</p>
      <p>Hablamos de forma <b>cerrada</b> cuando es compacta y apenas se abre al espacio, y de forma <b>abierta</b> cuando se extiende con brazos, huecos y salientes. La forma cerrada transmite quietud y solidez; la abierta, dinamismo.</p>`,
      svg: B.comparar("Formas geométricas y orgánicas", ["Geométrica", ["aristas, rectas", "regular", "cubo, cilindro", "orden"]], ["Orgánica", ["curvas suaves", "irregular", "cuerpo, piedra", "vida"]]),
    },
    {
      h: "Textura y acabado",
      html: `<p>La <b>textura</b> es el aspecto de la superficie: lisa, rugosa, áspera, estriada, porosa. En volumen es <b>táctil</b>, porque se puede tocar, y también <b>visual</b>, porque cambia cómo refleja la luz. Una superficie pulida brilla y hace la forma más continua; una rugosa absorbe la luz y crea vibración.</p>
      <p>El <b>acabado</b> es el último tratamiento: pulido, lijado, pátina en los metales, policromía en la madera. Los escultores combinan texturas para diferenciar materiales, como la piel y el cabello, o para expresar emociones: Rodin dejaba partes sin acabar para dar fuerza a sus figuras.</p>`,
      svg: B.capas("Texturas y acabados", [["Pulida", "brilla, forma continua"], ["Lijada", "mate y suave"], ["Rugosa", "vibra con la luz"], ["Policromada", "color sobre la forma"]]),
    },
    {
      h: "La luz modela el volumen",
      html: `<p>Sin luz no vemos el volumen. Cada forma tiene zonas <b>iluminadas</b>, <b>sombras propias</b> (en la parte que no recibe luz) y <b>sombras arrojadas</b> (sobre el suelo o el fondo). Una luz <b>lateral</b> marca los relieves; una luz <b>frontal</b> los aplana; una luz desde <b>abajo</b> dramatiza.</p>
      <p>Los escultores piensan en la luz del lugar: Bernini diseñó capillas con ventanas ocultas para iluminar sus obras, y hoy los museos estudian cómo colocar los focos. Cuando fotografíes tus trabajos, usa luz lateral para que se lea su volumen.</p>`,
      svg: B.flujo("Cómo se ve el volumen con la luz", ["Zona iluminada: hacia la luz", "Sombra propia: lado opuesto", "Sombra arrojada: sobre el suelo", "Luz lateral: marca el relieve"]),
    },
    {
      h: "El color en la escultura",
      html: `<p>Se suele imaginar la escultura blanca, pero las estatuas griegas y romanas estaban <b>pintadas</b>; con el tiempo perdieron el color. La <b>imaginería</b> española del Barroco es policromada: Gregorio Fernández o Martínez Montañés trabajaban con pintores que daban carnaciones a la piel y técnicas como el <b>estofado</b> para imitar tejidos con oro.</p>
      <p>Otras veces el color es el del propio material: el blanco del mármol, el verde de la pátina del bronce o el óxido del acero corten. En la escultura contemporánea, el color puede ser intenso y plano, como en los móviles de Calder o en las figuras de Niki de Saint Phalle.</p>`,
      svg: B.cajas("Origen del color en el volumen", [["Material", "mármol, bronce|acero corten"], ["Policromía", "pintura sobre|la forma"], ["Pátina", "capa sobre|el metal"], ["Color plano", "Calder|Saint Phalle"]]),
    },
    {
      h: "Equilibrio y composición",
      html: `<p>Una obra en volumen tiene que <b>sostenerse</b> de verdad: su centro de gravedad debe caer sobre la base. Por eso muchas estatuas de mármol tienen un tronco o una tela junto a las piernas, que hacen de apoyo. Además existe el <b>equilibrio visual</b>: la sensación de estabilidad o de tensión.</p>
      <p>La <b>composición</b> organiza las masas. Puede ser <b>simétrica</b>, estable y solemne, o <b>asimétrica</b>, más dinámica. Las líneas <b>verticales</b> transmiten firmeza; las <b>horizontales</b>, reposo; las <b>diagonales</b> y las espirales, movimiento. El <b>contrapposto</b> griego, con el peso en una pierna, dio vida a la figura de pie.</p>`,
      svg: B.estrella("Recursos de composición", "Composición", ["Simetría", "Asimetría", "Diagonal", "Espiral", "Contrapposto"]),
    },
    {
      h: "Movimiento real y sugerido",
      html: `<p>El <b>movimiento sugerido</b> es una ilusión: las diagonales, los paños al viento y los cuerpos en torsión hacen creer que la obra se mueve, como en <i>Apolo y Dafne</i> de Bernini. El <b>ritmo</b>, la repetición de formas o intervalos, también guía la mirada por la obra.</p>
      <p>El <b>movimiento real</b> llegó en el siglo XX con la escultura <b>cinética</b>. Alexander Calder creó los <b>móviles</b>, piezas colgadas que giran con el aire, a partir de los años treinta. Hoy hay obras con motores, agua, luz o sensores que reaccionan al público.</p>`,
      svg: B.comparar("Movimiento en la escultura", ["Sugerido", ["diagonales", "torsión", "paños al viento", "Bernini"]], ["Real", ["piezas que giran", "aire, motor", "escultura cinética", "Calder"]]),
      video: { id: "Bd9X8J0wUZE", titulo: "Alexander Calder y sus esculturas móviles", canal: "Jesica Britos", vistas: 34661 },
    },
    {
      h: "Analizar una obra en volumen",
      html: `<p>Para comentar una obra tridimensional sigue un orden. Primero, la <b>identificación</b>: autor, fecha, material, técnica, tamaño y lugar. Después, el <b>análisis formal</b>: tipo (bulto redondo o relieve), forma, textura, luz, color, composición, movimiento y relación con el espacio.</p>
      <p>Por último, la <b>interpretación</b>: qué representa o expresa, por qué se hizo así y qué sientes ante ella. Recuerda que una buena descripción usa el vocabulario de este tema y se apoya en lo que se ve, no solo en opiniones.</p>`,
      svg: B.flujo("Guía para analizar una escultura", ["Identificación: autor, material, lugar", "Tipo, forma y textura", "Luz, color y composición", "Movimiento y espacio", "Interpretación personal"]),
      video: { id: "NjKR0ZK5oM8", titulo: "Lo que debes saber sobre el David de Miguel Ángel", canal: "Pichi Snack de Arte", vistas: 147611 },
    },
  ],
  figura: {
    titulo: "El lenguaje tridimensional en cuatro claves",
    items: [["Elementos", "· — ▭ ■", "punto, línea", "plano, volumen"], ["Forma", "◆ ●", "geométrica", "u orgánica"], ["Superficie", "≈", "textura, luz", "y color"], ["Dinamismo", "↻", "equilibrio", "y movimiento"]],
  },
  video: { id: "bdnPdZMZ9PU", titulo: "Bernini, Apolo y Dafne", canal: "Smarthistory", vistas: 384174 },
  quiz: [
    ["En volumen, un alambre o una varilla funcionan como…", ["punto", "línea", "plano", "masa"], 1, "Dibujan en el aire."],
    ["Una forma con curvas suaves, como un canto rodado, es…", ["geométrica", "orgánica", "plana", "lineal"], 1, "Recuerda a la naturaleza."],
    ["Una forma compacta, sin brazos ni huecos, es…", ["abierta", "cinética", "cerrada", "abstracta"], 2, "Transmite quietud."],
    ["La sombra que una escultura proyecta sobre el suelo es la…", ["sombra propia", "sombra arrojada", "penumbra", "textura"], 1, "Cae fuera del objeto."],
    ["Para que se lea bien el relieve de una obra conviene una luz…", ["frontal", "lateral", "nula", "difusa total"], 1, "Marca entrantes y salientes."],
    ["La técnica que imita tejidos con oro en la imaginería es el…", ["estofado", "vaciado", "modelado", "soldado"], 0, "Se raspa la pintura sobre el oro."],
    ["Las estatuas griegas originalmente eran…", ["siempre blancas", "pintadas", "de plástico", "de cera"], 1, "Perdieron el color con el tiempo."],
    ["La postura con el peso en una pierna se llama…", ["contrapposto", "frontalidad", "simetría", "estofado"], 0, "La usaron los griegos clásicos."],
    ["Los móviles que giran con el aire son de…", ["Bernini", "Calder", "Rodin", "Miguel Ángel"], 1, "Escultura cinética."],
    ["Las líneas diagonales en una composición transmiten…", ["reposo", "movimiento", "solemnidad", "frío"], 1, "Rompen la estabilidad."],
  ],
  examen: [
    ["Una escultura de chapas recortadas y soldadas se basa sobre todo en…", ["planos", "puntos", "relieve", "modelado"], 0, "Como las de Gargallo."],
    ["Un escultor deja la piel pulida y el pelo rugoso para…", ["ahorrar tiempo", "diferenciar materiales y crear contraste", "que pese menos", "evitar la luz"], 1, "La textura distingue zonas."],
    ["Una figura de mármol tiene un tronco junto a la pierna porque…", ["es un adorno obligatorio", "ayuda a sostener el peso", "es de otro autor", "imita a Calder"], 1, "Equilibrio físico."],
    ["Una composición simétrica y vertical transmite…", ["movimiento", "estabilidad y solemnidad", "caos", "velocidad"], 1, "Firmeza y orden."],
    ["En un comentario, «material: bronce; 1,80 m; Museo del Prado» corresponde a la…", ["interpretación", "identificación", "composición", "textura"], 1, "Primer paso del análisis."],
  ],
  feynman: ["Los cuatro elementos del lenguaje tridimensional", "Forma geométrica y orgánica, abierta y cerrada", "Cómo la luz y la textura modifican el volumen", "Diferencia entre movimiento sugerido y real"],
  mapa: ["EL LENGUAJE TRIDIMENSIONAL", [["Elementos", "punto · línea · plano · volumen"], ["Forma", "geométrica · orgánica · abierta"], ["Superficie", "textura · luz · color"], ["Dinamismo", "equilibrio · ritmo · movimiento"]]],
  tarjetas: [
    ["Plano", "Superficie delgada que divide o encierra el espacio."],
    ["Forma orgánica", "Forma de curvas suaves que recuerda a la naturaleza."],
    ["Forma abierta", "Forma que se extiende al espacio con huecos y salientes."],
    ["Textura", "Aspecto táctil y visual de la superficie."],
    ["Sombra arrojada", "Sombra que la obra proyecta sobre otra superficie."],
    ["Policromía", "Pintura aplicada sobre la escultura."],
    ["Contrapposto", "Postura con el peso del cuerpo en una pierna."],
    ["Escultura cinética", "Obra con movimiento real."],
  ],
  ejemplos: [
    ["Analiza brevemente Apolo y Dafne de Bernini.", ["Identificación: Bernini, mármol, 1622-1625, Galería Borghese.", "Forma abierta con diagonales y torsión.", "Texturas: piel pulida, corteza y hojas rugosas.", "Movimiento sugerido: captura el instante de la transformación."], "Una obra barroca que hace parecer vivo y ligero el mármol."],
    ["Explica qué elementos usa un móvil de Calder.", ["Líneas: varillas de alambre.", "Planos: chapas pintadas de colores planos.", "Equilibrio: cada brazo compensa el peso del otro.", "Movimiento real: gira con el aire."], "Línea, plano, color y equilibrio en movimiento real."],
    ["Fotografía una figura con luz frontal y lateral. ¿Qué cambia?", ["Luz frontal: pocas sombras, el volumen se aplana.", "Luz lateral: sombras propias marcadas.", "Los relieves y la textura se leen mejor de lado."], "La luz lateral revela el volumen."],
  ],
  errores: [
    "Describir una escultura solo diciendo si gusta o no.",
    "Pensar que la escultura clásica era blanca.",
    "Olvidar la sombra y la luz al presentar una obra.",
    "Confundir el equilibrio visual con el físico.",
  ],
  ejercicios: {
    b: [
      ["Nombra los cuatro elementos del lenguaje tridimensional con un material para cada uno.", "Punto (bolita), línea (alambre), plano (cartón o chapa) y volumen (bloque de barro)."],
      ["Diferencia forma geométrica y orgánica.", "Geométrica: regular, con aristas. Orgánica: curvas irregulares, como la naturaleza."],
      ["¿Qué es la policromía?", "La pintura aplicada sobre una escultura, típica de la imaginería."],
      ["Explica qué es una sombra propia y una arrojada.", "Propia: en la cara del objeto que no recibe luz. Arrojada: la que proyecta sobre el suelo o el fondo."],
    ],
    m: [
      ["¿Por qué Rodin dejaba partes de sus obras sin acabar?", "Para contrastar texturas y dar fuerza expresiva, como si la figura saliera de la materia."],
      ["Describe el contrapposto y su efecto.", "Una pierna soporta el peso y la otra se relaja; caderas y hombros se inclinan en sentido opuesto y la figura parece viva y natural."],
      ["Explica cómo puede sugerir movimiento una obra inmóvil.", "Con diagonales, torsiones, paños al viento, formas abiertas y ritmo de repeticiones."],
      ["Compara el color del mármol con el de una imagen policromada.", "El mármol tiene el color del material; la policromía añade pintura para imitar piel, ropa y oro."],
    ],
    a: [
      ["Comenta una escultura de tu elección siguiendo la guía de cinco pasos.", "Respuesta abierta: identificación, tipo y forma, superficie y luz, composición y movimiento, interpretación."],
      ["Construye una pequeña obra que combine punto, línea, plano y volumen.", "Respuesta abierta: por ejemplo, un bloque de plastilina con varillas de alambre y planos de cartón, fotografiado con luz lateral."],
    ],
  },
  glosario: [
    ["Arista", "Línea donde se encuentran dos planos."],
    ["Abstracto", "Que no representa algo reconocible."],
    ["Acabado", "Tratamiento final de la superficie."],
    ["Pátina", "Capa de color sobre los metales, natural o aplicada."],
    ["Estofado", "Técnica que imita tejidos raspando pintura sobre oro."],
    ["Carnación", "Color que imita la piel en una imagen."],
    ["Ritmo", "Repetición ordenada de formas o intervalos."],
    ["Móvil", "Escultura colgada cuyas piezas se mueven con el aire."],
  ],
  situacion: {
    titulo: "La luz cuenta otra historia",
    reto: "Demostrar cómo la luz y la textura cambian la lectura de una forma.",
    pasos: [
      "Modelad dos formas iguales en plastilina, una lisa y otra con textura.",
      "Fotografiadlas con luz frontal, lateral y desde abajo.",
      "Comparad cómo se ven el volumen y la textura en cada foto.",
      "Montad un panel con las seis fotos y conclusiones.",
    ],
    producto: "Un panel fotográfico comparativo con texto explicativo.",
    evaluacion: [
      "Las fotos muestran con claridad los tres tipos de luz.",
      "Se usa bien el vocabulario de luz, sombra y textura.",
      "Las conclusiones se apoyan en lo que se ve.",
      "El panel está ordenado y es legible.",
    ],
  },
  familias: [
    "Con una linterna, iluminad un objeto de varios lados y observad cómo cambian las sombras.",
    "Tocad con los ojos cerrados objetos de distintas texturas y describidlas.",
    "Buscad en internet imágenes de reconstrucciones de estatuas griegas pintadas.",
    "Construid un pequeño móvil con alambre y cartulina.",
  ],
  saberes: "Elementos del lenguaje tridimensional: punto, línea, plano y volumen; forma geométrica y orgánica, abierta y cerrada; textura, acabado, luz y color; equilibrio físico y visual, composición, ritmo, movimiento sugerido y real; análisis de obras.",
  ideas: [
    "Galería de texturas con impresiones de objetos en plastilina.",
    "Comparar la misma escultura con distintas iluminaciones.",
    "Comentario guiado de obras de Bernini, Rodin y Calder.",
    "Construir un móvil en equipo atendiendo al equilibrio.",
  ],
  fuentes: [
    { t: "Galleria Borghese, Apolo y Dafne", url: "https://galleriaborghese.beniculturali.it/" },
  ],
});
