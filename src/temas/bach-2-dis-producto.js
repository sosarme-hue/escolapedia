// Diseño, 2º de Bachillerato. Tema 10 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "Diseño de producto: forma, función, materiales y ergonomía",
  minutos: 60,
  objetivos: [
    "Analizar un producto industrial según sus requisitos de uso, forma, fabricación y coste",
    "Aplicar criterios de ergonomía y antropometría al diseño de objetos",
    "Relacionar materiales y procesos de fabricación con la forma del producto",
    "Representar un producto con bocetos, vistas y maqueta para comunicar la propuesta",
  ],
  claves: ["diseño industrial", "producto", "ergonomía", "antropometría", "materiales", "fabricación", "ciclo de vida", "semántica del producto"],
  pregunta: {
    texto: "¿Por qué un cepillo de dientes tiene esa forma y no otra?",
    respuesta: "Porque cada curva responde a algo: la <mark>mano</mark> que lo sujeta, la boca donde entra, el plástico que se inyecta en un molde y el precio al que se vende. El diseño de producto equilibra todo eso.",
  },
  lectura: {
    titulo: "Un pelador para unas manos cansadas",
    html: `<p>A finales de los años ochenta, el estadounidense Sam Farber vio que a su esposa, que tenía artritis, le dolían las manos al usar un pelador de verduras de metal. Pensó que si un utensilio era cómodo para ella, lo sería para todo el mundo.</p>
    <p>Encargó a un estudio de diseño un pelador con un mango grueso de goma blanda y con aletas para el pulgar y los dedos, que no resbalaba ni con las manos mojadas. Fue el primer producto de una marca de utensilios de cocina que hoy vende millones de unidades. La ergonomía, pensada para una persona concreta, mejoró la vida de muchas.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "El diseño de producto",
      html: `<p>El <b>diseño de producto</b> o <b>diseño industrial</b> proyecta objetos que se fabrican en serie: muebles, electrodomésticos, herramientas, juguetes, vehículos, dispositivos electrónicos. El diseñador trabaja con ingenieros, fabricantes y especialistas en marketing.</p>
      <p>Un producto debe cumplir <b>requisitos</b> de varios tipos: de <b>uso</b> (función, ergonomía, seguridad), <b>formales</b> (estética, coherencia con la marca), <b>técnicos</b> (materiales, procesos, montaje), <b>económicos</b> (coste, precio de venta) y <b>ambientales</b> (consumo, reparación, reciclaje). El buen diseño encuentra el equilibrio entre todos, porque mejorar uno suele empeorar otro: un material más resistente puede encarecer el producto.</p>`,
      svg: B.requisitos("Requisitos de un producto", "Producto", ["Uso", "Forma", "Técnica", "Coste", "Planeta"]),
      video: { id: "z6iHXRrqUPY", titulo: "Qué es el diseño industrial (para principiantes)", canal: "Diseño industrial y estratégico con Irene Ramos", vistas: 176836 },
    },
    {
      h: "La semántica del producto",
      html: `<p>Los objetos también <b>comunican</b>. La <b>semántica del producto</b> estudia cómo la forma indica el uso: un asa invita a agarrar, un botón hundido invita a pulsar, una ranura indica dónde introducir algo. Cuando la forma lo explica, no hace falta manual. El psicólogo Donald Norman llamó a estas pistas <b>affordances</b> o «invitaciones al uso».</p>
      <p>La forma también transmite carácter: una herramienta profesional suele ser robusta y sobria; un juguete, redondeado y de colores vivos. Una puerta con un tirador que hay que empujar es el ejemplo clásico de mala semántica: la mano tira por instinto y la puerta no se abre.</p>`,
      svg: B.cajas("La forma explica el uso", [["Asa", "agarrar"], ["Botón", "pulsar"], ["Ranura", "introducir"], ["Placa plana", "empujar"]]),
    },
    {
      h: "Ergonomía y antropometría",
      html: `<p>La <b>ergonomía</b> adapta los objetos y los espacios a las personas para que se usen con comodidad, seguridad y eficacia. Se apoya en la <b>antropometría</b>, que mide el cuerpo humano: alturas, alcances, tamaño de la mano. Como las personas son distintas, se diseña para un rango amplio, normalmente del <b>percentil 5 al 95</b> de la población.</p>
      <p>Por ejemplo, la altura de una mesa de trabajo, el diámetro de un mango o la distancia entre los botones de un mando se deciden con estos datos. La ergonomía también tiene en cuenta la postura, la fuerza necesaria, la vista y el oído, y el esfuerzo mental.</p>`,
      svg: B.barras("Altura de un asiento según el usuario (cm, aproximada)", [["Infantil 3-5 años", 26], ["Primaria", 35], ["Adolescente", 42], ["Adulto", 45], ["Taburete de barra", 75]], { unidad: " cm" }),
      video: { id: "k-5gQJvA5v8", titulo: "Ergonomía y usabilidad en el diseño industrial", canal: "AIDIA Design Center", vistas: 16488 },
    },
    {
      h: "Materiales",
      html: `<p>Elegir el <b>material</b> condiciona la forma, el peso, el precio y la duración. La <b>madera</b> es cálida y renovable; se trabaja en macizo o en tableros. Los <b>metales</b> (acero, aluminio) son resistentes y reciclables. Los <b>plásticos</b> permiten formas complejas, ligeras y baratas, pero muchos son difíciles de reciclar. El <b>vidrio</b> y la <b>cerámica</b> son duros y frágiles. Los <b>textiles</b> son flexibles.</p>
      <p>Hoy crecen los materiales <b>reciclados</b> y de origen biológico: bioplásticos, micelio de hongos, corcho o residuos agrícolas. El diseñador debe conocer sus propiedades: resistencia, peso, tacto, comportamiento con el calor y el agua, y su impacto ambiental a lo largo de toda su vida.</p>`,
      svg: B.rejilla("Materiales y propiedades", ["Material", "Ventaja", "Inconveniente"], [["Madera", "cálida, renovable", "humedad"], ["Acero", "resistente", "pesado"], ["Aluminio", "ligero, reciclable", "energía"], ["Plástico", "formas, barato", "residuos"], ["Vidrio", "limpio, reciclable", "frágil"]]),
    },
    {
      h: "Procesos de fabricación",
      html: `<p>La forma de un producto depende de cómo se fabrica. El <b>moldeo por inyección</b> introduce plástico fundido en un molde de acero: el molde es caro, pero cada pieza sale muy barata, ideal para grandes series. El <b>termoformado</b> calienta una lámina y la adapta a un molde (bandejas, envases).</p>
      <p>Los metales se <b>cortan</b> (láser, plasma), se <b>doblan</b>, se <b>funden</b> o se <b>sueldan</b>. La madera se corta, se torna y se ensambla, o se curva al vapor. La <b>fabricación digital</b> (impresión 3D, corte láser, fresadora CNC) permite prototipos rápidos y series cortas personalizadas.</p>`,
      svg: B.flujo("Moldeo por inyección", ["Diseño de la pieza en 3D", "Fabricación del molde", "Plástico fundido a presión", "Enfriado y desmoldeo", "Miles de piezas iguales"]),
    },
    {
      h: "Representar un producto",
      html: `<p>El diseñador de producto comunica con <b>bocetos</b> rápidos en perspectiva, a menudo con sombras y color para entender el volumen. Después dibuja <b>vistas</b> (alzado, planta, perfil) con medidas y, si es necesario, <b>despieces</b> que muestran cómo se monta.</p>
      <p>Las <b>maquetas</b> de cartón, espuma o madera sirven para comprobar el tamaño y el tacto, y los <b>prototipos</b> funcionales para probar el uso. Los programas de modelado 3D permiten crear imágenes realistas (renders), calcular resistencias y preparar los archivos para la fabricación, aunque el dibujo a mano sigue siendo la forma más rápida de pensar.</p>`,
      svg: B.flujo("Del boceto a la fábrica", ["Bocetos en perspectiva", "Vistas acotadas", "Maqueta de volumen", "Modelo 3D y render", "Prototipo funcional"]),
    },
    {
      h: "El ciclo de vida del producto",
      html: `<p>Todo producto tiene un <b>ciclo de vida</b>: extracción de materias primas, fabricación, transporte, uso y fin de vida. El diseñador decide en gran parte su impacto. Un producto que se puede <b>reparar</b>, <b>desmontar</b> y <b>reciclar</b> genera menos residuos.</p>
      <p>Lo contrario es la <b>obsolescencia programada</b>: diseñar productos para que duren poco o no se puedan arreglar. La Unión Europea impulsa el derecho a reparar y el pasaporte digital de producto. Diseñar pensando en todo el ciclo de vida es una de las grandes responsabilidades del diseño actual.</p>`,
      svg: B.ciclo("Ciclo de vida", "Producto", ["Materias", "Fabricación", "Transporte", "Uso", "Fin de vida"]),
    },
  ],
  figura: {
    titulo: "Diseño de producto en cuatro claves",
    items: [["Requisitos", "✓", "uso, forma,", "técnica y coste"], ["Ergonomía", "✋", "medidas del", "cuerpo"], ["Materiales", "▦", "propiedades", "y procesos"], ["Ciclo de vida", "↻", "reparar", "y reciclar"]],
  },
  video: { id: "ssJhxsjhYGo", titulo: "Sketch para diseñadores industriales: ¿boceto vs dibujo?", canal: "AIDIA Design Center", vistas: 92011 },
  quiz: [
    ["El diseño industrial proyecta objetos…", ["únicos y hechos a mano", "fabricados en serie", "solo de lujo", "solo digitales"], 1, "Producción industrial."],
    ["Una affordance es…", ["un material", "una pista de la forma que indica cómo usar algo", "un molde", "un precio"], 1, "Donald Norman."],
    ["La antropometría mide…", ["los materiales", "el cuerpo humano", "el precio", "la luz"], 1, "Base de la ergonomía."],
    ["Se suele diseñar para el rango de percentiles…", ["50", "5 a 95", "0 a 10", "99"], 1, "La gran mayoría de usuarios."],
    ["El moldeo por inyección conviene para…", ["una sola pieza", "grandes series de piezas de plástico", "madera maciza", "vidrio soplado"], 1, "Molde caro, pieza barata."],
    ["Un material ligero y muy reciclable es…", ["el aluminio", "el hormigón", "el plomo", "la porcelana"], 0, "Aunque producirlo consume energía."],
    ["Las vistas de un producto son…", ["fotografías", "alzado, planta y perfil acotados", "anuncios", "bocetos de color"], 1, "Dibujo técnico."],
    ["Un render es…", ["un molde", "una imagen realista generada a partir de un modelo 3D", "un tipo de plástico", "un boceto a lápiz"], 1, "Visualización."],
    ["La obsolescencia programada es…", ["diseñar para que dure mucho", "diseñar productos para que duren poco", "reciclar", "reparar"], 1, "Mala práctica."],
    ["Diseñar para reparar y desmontar ayuda a…", ["gastar más", "reducir residuos", "subir el precio", "nada"], 1, "Ciclo de vida."],
  ],
  examen: [
    ["Una puerta tiene un tirador grande pero se abre empujando. ¿Qué falla?", ["El color", "La semántica: la forma invita a tirar", "El material", "El precio"], 1, "Mala affordance."],
    ["Un mango de herramienta resbala y causa dolor. ¿Qué aspecto se debe mejorar?", ["La ergonomía", "El logotipo", "El envase", "La tipografía"], 0, "Agarre, diámetro y material."],
    ["Vas a fabricar 200.000 tapones de plástico. ¿Qué proceso eliges?", ["Impresión 3D", "Moldeo por inyección", "Tallado a mano", "Soplado de vidrio"], 1, "Grandes series."],
    ["Un móvil tiene la batería pegada y no se puede cambiar. ¿Qué principio incumple?", ["Diseño para la reparación", "Usabilidad", "Estética", "Semántica"], 0, "Derecho a reparar."],
    ["Quieres comprobar el tamaño de un mando en la mano antes de modelarlo en 3D. ¿Qué haces?", ["Un render", "Una maqueta de espuma", "Un manual", "Un logotipo"], 1, "Volumen y tacto."],
  ],
  feynman: ["Los requisitos que debe cumplir un producto", "Qué es una affordance con dos ejemplos", "Para qué sirven la ergonomía y los percentiles", "Qué es el ciclo de vida y la obsolescencia programada"],
  mapa: ["DISEÑO DE PRODUCTO", [["Requisitos", "uso · forma · técnica · coste · planeta"], ["Personas", "semántica · ergonomía"], ["Fabricación", "materiales · procesos"], ["Vida", "reparar · desmontar · reciclar"]]],
  tarjetas: [
    ["Diseño industrial", "Proyecto de objetos que se fabrican en serie."],
    ["Semántica del producto", "Estudio de cómo la forma comunica el uso y el carácter."],
    ["Affordance", "Pista de la forma que invita a un uso concreto."],
    ["Ergonomía", "Adaptación de objetos y espacios a las personas."],
    ["Antropometría", "Medición del cuerpo humano para diseñar."],
    ["Moldeo por inyección", "Fabricación de piezas de plástico en un molde a presión."],
    ["Ciclo de vida", "Etapas de un producto desde la materia prima hasta el residuo."],
    ["Obsolescencia programada", "Diseño de productos para que duren poco."],
  ],
  ejemplos: [
    ["Define los requisitos de una lámpara de escritorio para estudiantes.", ["Uso: luz regulable, brazo orientable, base estable.", "Técnica: LED, aluminio y plástico reciclado, montaje con tornillos.", "Coste y planeta: precio asequible, piezas reemplazables."], "Lista de requisitos que guía el diseño."],
    ["Decide el diámetro del mango de un cepillo para personas mayores.", ["Consultar datos antropométricos de la mano.", "Un mango fino exige más fuerza de agarre.", "Elegir unos 30-35 mm, con goma antideslizante."], "Mango grueso y blando, más cómodo."],
    ["Mejora el fin de vida de un juguete de plástico.", ["Usar un solo tipo de plástico identificado.", "Unir piezas con encajes en vez de pegamento.", "Ofrecer recambios de las piezas que se rompen."], "Juguete reparable y reciclable."],
  ],
  errores: [
    "Pensar solo en la estética y olvidar la fabricación y el coste.",
    "Diseñar para uno mismo en lugar de para un rango de usuarios.",
    "Elegir el material sin conocer sus propiedades ni su impacto.",
    "Olvidar qué pasará con el producto cuando deje de usarse.",
  ],
  ejercicios: {
    b: [
      ["Cita cinco tipos de requisitos de un producto.", "De uso, formales, técnicos, económicos y ambientales."],
      ["Define ergonomía y antropometría.", "Ergonomía: adaptar objetos a las personas. Antropometría: medir el cuerpo humano para diseñar."],
      ["Nombra tres materiales y una propiedad de cada uno.", "Madera: cálida y renovable. Aluminio: ligero y reciclable. Vidrio: duro y frágil."],
      ["¿Qué es la obsolescencia programada?", "Diseñar productos para que duren poco o no se puedan reparar."],
    ],
    m: [
      ["Busca dos objetos con buena semántica y uno con mala y explica por qué.", "Respuesta abierta: describir qué indica la forma y si coincide con el uso real."],
      ["Mide a cinco compañeros la altura del codo sentado y propón la altura de una mesa.", "Respuesta abierta: tabla de datos, rango y una altura razonada (o regulable)."],
      ["Explica por qué el moldeo por inyección no conviene para hacer diez piezas.", "El molde de acero es muy caro; solo compensa si se reparte entre miles de piezas. Para diez es mejor impresión 3D o mecanizado."],
      ["Dibuja el ciclo de vida de una botella de agua y señala dónde intervendrías.", "Respuesta abierta: materias, fabricación, transporte, uso y fin de vida, con mejoras como reutilizable o monomaterial."],
    ],
    a: [
      ["Rediseña un objeto del aula con criterios de ergonomía: bocetos, vistas acotadas y maqueta.", "Respuesta abierta. Se valora la investigación previa, el uso de medidas y la maqueta de comprobación."],
      ["Analiza un electrodoméstico de casa con todos los requisitos del tema y propón tres mejoras.", "Respuesta abierta: análisis estructurado y propuestas justificadas."],
    ],
  },
  glosario: [
    ["Percentil", "Valor que deja por debajo un porcentaje de la población."],
    ["Molde", "Pieza hueca que da forma a un material."],
    ["Termoformado", "Moldeo de una lámina de plástico caliente."],
    ["CNC", "Máquina de control numérico que corta o fresa con un programa."],
    ["Despiece", "Dibujo que muestra las piezas separadas y su montaje."],
    ["Bioplástico", "Plástico de origen biológico."],
    ["Derecho a reparar", "Principio que exige productos que se puedan arreglar."],
    ["Pasaporte digital de producto", "Ficha digital europea con información de materiales y reparación."],
  ],
  situacion: {
    titulo: "Un objeto para alguien",
    reto: "Diseñar un utensilio que facilite una tarea cotidiana a una persona con dificultades de movilidad.",
    pasos: [
      "Entrevistad a una persona mayor o con movilidad reducida sobre sus dificultades.",
      "Elegid una tarea y definid los requisitos del objeto.",
      "Bocetad, haced una maqueta y probadla con esa persona.",
      "Presentad la propuesta final con vistas, materiales y fabricación.",
    ],
    producto: "Maqueta probada, planos básicos y panel de presentación.",
    evaluacion: [
      "Parte de una necesidad real y de datos ergonómicos.",
      "Los materiales y la fabricación son coherentes.",
      "La prueba con el usuario mejora la propuesta.",
    ],
  },
  familias: [
    "Buscad en casa el utensilio más cómodo y el más incómodo y comparadlos.",
    "Intentad reparar juntos algún objeto en lugar de tirarlo.",
    "Leed las etiquetas de materiales de muebles o juguetes.",
    "Visitad un taller, una carpintería o un espacio maker.",
  ],
  saberes: "Diseño de producto: requisitos de uso, formales, técnicos, económicos y ambientales; semántica del producto; ergonomía y antropometría; materiales y procesos de fabricación; representación (boceto, vistas, maqueta, modelo 3D, prototipo); ciclo de vida y diseño para la reparación",
  ideas: [
    "Análisis de objetos con un kit de medición antropométrica.",
    "Maquetas rápidas con espuma y cartón.",
    "Visita a una empresa o fab lab de la zona.",
    "Taller de reparación de pequeños objetos.",
  ],
  fuentes: [
    { t: "Diseño industrial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dise%C3%B1o_industrial" },
    { t: "Ergonomía, Instituto Nacional de Seguridad y Salud en el Trabajo", url: "https://www.insst.es/" },
  ],
});
