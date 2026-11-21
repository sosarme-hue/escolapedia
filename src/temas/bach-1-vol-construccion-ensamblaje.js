// Volumen, 1º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-vol");

module.exports = B.tema({
  titulo: "Construcción y ensamblaje",
  minutos: 60,
  objetivos: [
    "Entender la construcción como tercera vía del volumen, junto al modelado y la talla",
    "Pasar del plano al volumen con cartón, papel y alambre",
    "Conocer la escultura en hierro, el constructivismo y el ensamblaje",
    "Elegir uniones adecuadas y lograr estabilidad",
  ],
  claves: ["construcción", "ensamblaje", "plano", "alambre", "soldadura", "constructivismo", "ready-made", "objeto encontrado"],
  pregunta: {
    texto: "¿Puede ser escultura una cabeza de toro hecha con un sillín y un manillar de bicicleta?",
    respuesta: "Sí. Picasso lo hizo en 1942. Es un <mark>ensamblaje</mark>: unir objetos o piezas ya existentes para crear una forma nueva. En el siglo XX la escultura dejó de ser solo modelar o tallar y empezó también a <b>construirse</b>.",
  },
  lectura: {
    titulo: "Dibujar en el espacio",
    html: `<p>Hacia 1928, en un taller de París, el escultor barcelonés Julio González enseñó a su amigo Pablo Picasso a soldar hierro. Juntos crearon figuras hechas de varillas y chapas que parecían dibujos flotando en el aire. González lo llamó «dibujar en el espacio».</p>
    <p>Fue una revolución: la escultura ya no tenía que ser una masa pesada. Podía ser una estructura abierta, hecha de piezas unidas, llena de vacíos. Desde entonces, cartón, alambre, chapa, listones y objetos de la vida diaria se convirtieron en materiales artísticos. En este tema aprenderás a construir.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Construir el volumen",
      html: `<p>Además de modelar (añadir) y tallar (quitar), el volumen se puede <b>construir</b>: cortar, doblar y unir piezas de distintos materiales. Es un procedimiento parecido al de la arquitectura o la carpintería: se parte de elementos lineales (varillas, alambre, listones) o planos (cartón, chapa, madera contrachapada) y se ensamblan.</p>
      <p>La construcción permite obras <b>abiertas</b>, ligeras y de gran tamaño, en las que el vacío es protagonista. Es la técnica más usada en la escultura contemporánea, en el diseño, en las maquetas y en la escenografía.</p>`,
      svg: B.cajas("Tres caminos del volumen", [["Modelar", "añadir|material blando"], ["Tallar", "quitar|de un bloque"], ["Construir", "cortar, doblar|y unir piezas"]], { cols: 3 }),
      video: { id: "Hdb8APl1WgY", titulo: "Ensamblaje artístico", canal: "Somos Artes Visuales", vistas: 34113 },
    },
    {
      h: "Del plano al volumen",
      html: `<p>Con <b>cartón</b>, cartulina o papel se generan volúmenes a partir de planos. Se puede <b>plegar</b> (marcando antes la línea de doblez), <b>ranurar</b> (cortes que encajan unas piezas en otras sin pegamento), <b>curvar</b> o superponer capas, como en las maquetas por secciones.</p>
      <p>El <b>desarrollo</b> de un cuerpo geométrico, es decir, su plantilla plana con pestañas, permite construir cubos, prismas y pirámides. El cartón ondulado es resistente si se coloca con las ondas en vertical. El <b>papel maché</b>, tiras de papel con cola sobre una estructura, añade una piel continua.</p>`,
      svg: B.cajas("Del plano al volumen", [["Plegar", "marcar y doblar"], ["Ranurar", "encajar sin cola"], ["Capas", "secciones apiladas"], ["Papel maché", "piel sobre estructura"]]),
      video: { id: "H4P6j23oLF0", titulo: "Cómo hacer un animal 3D de cartón", canal: "Angelica Sensei", vistas: 294445 },
    },
    {
      h: "La línea en el espacio: el alambre",
      html: `<p>El <b>alambre</b> es una línea que se puede doblar en tres dimensiones. Con alicates de punta y de corte se construyen figuras transparentes que son puro contorno, como los retratos de alambre de Alexander Calder en los años veinte. También sirve de <b>armazón</b> para el modelado o el papel maché.</p>
      <p>Para una figura humana se empieza por un esqueleto sencillo: un lazo para la cabeza, un eje para la columna y lazos para hombros y caderas, y se tuercen los extremos para unir. Hay que limar o doblar las puntas para no cortarse.</p>`,
      svg: B.flujo("Figura de alambre", ["Medir con el canon de cabezas", "Cabeza y columna en un solo trazo", "Hombros, brazos, cadera y piernas", "Torcer uniones y fijar a una base"]),
    },
    {
      h: "Hierro y chapa soldados",
      html: `<p>En el siglo XX el hierro entró en la escultura gracias a la <b>soldadura</b>. Julio González construyó figuras abiertas como <i>Mujer peinándose</i> y la dramática <i>Montserrat</i> (1937). <b>Pablo Gargallo</b> recortó y curvó chapas en las que el hueco dibuja la forma, como en su <i>Profeta</i> (1933).</p>
      <p>Después, escultores como David Smith, Chillida o Martín Chirino trabajaron el hierro forjado y el acero. El trabajo del metal necesita taller, máscara de soldar, guantes y ropa de protección; en el aula se puede imitar con latas, alambre grueso y chapas finas recortadas con tijeras de chapa.</p>`,
      svg: B.cronologia("Escultura en hierro en España", [["1928", "González suelda"], ["1933", "Profeta"], ["1937", "Montserrat"], ["1977", "Peine del viento"]]),
    },
    {
      h: "El constructivismo",
      html: `<p>El <b>constructivismo</b> ruso (hacia 1915-1930) defendió un arte construido con materiales industriales y formas geométricas, al servicio de la nueva sociedad. Vladímir <b>Tatlin</b> hizo «contrarrelieves» con madera, metal y cristal, y proyectó su <i>Monumento a la III Internacional</i>, una espiral gigante que nunca se construyó.</p>
      <p>Los hermanos <b>Naum Gabo</b> y Antoine Pevsner usaron plástico transparente, hilos tensados y planos que se cruzan para mostrar el espacio interior de las formas. Sus ideas llegaron a la Bauhaus y al diseño moderno.</p>`,
      svg: B.estrella("Constructivismo", "Construir", ["Geometría", "Industria", "Transparencia", "Tatlin", "Gabo"]),
    },
    {
      h: "Ensamblaje y objeto encontrado",
      html: `<p>El <b>ensamblaje</b> une objetos ya existentes para crear una obra nueva. Marcel Duchamp fue más lejos con el <b>ready-made</b>: presentó un objeto industrial como obra de arte, como su <i>Rueda de bicicleta</i> (1913). Picasso unió un sillín y un manillar en <i>Cabeza de toro</i> (1942).</p>
      <p>Louise Nevelson apiló cajas de madera llenas de restos pintados de negro, y muchos artistas actuales trabajan con <b>objetos encontrados</b> y residuos. El objeto conserva su historia y su significado, y la obra juega con ese recuerdo: un juguete, una llave o un zapato hablan de quien los usó.</p>`,
      svg: B.comparar("Ready-made y ensamblaje", ["Ready-made", ["un solo objeto", "se presenta como arte", "casi sin cambios", "Duchamp"]], ["Ensamblaje", ["varios objetos", "se unen y combinan", "forma nueva", "Picasso, Nevelson"]]),
    },
    {
      h: "Uniones",
      html: `<p>En la construcción, la unión es tan importante como la forma. Hay uniones <b>adhesivas</b> (cola blanca, cola caliente, cinta), <b>mecánicas</b> (tornillos, clavos, remaches, bridas, encajes y ranuras), por <b>atado</b> (alambre, hilo, cuerda) y por <b>calor</b> (soldadura en metal).</p>
      <p>La unión elegida depende del material, del peso y de si la obra debe desmontarse. A veces la unión se esconde; otras se deja a la vista como parte de la estética: tornillos, cuerdas o costuras pueden ser un recurso expresivo.</p>`,
      svg: B.cajas("Tipos de unión", [["Adhesivas", "colas, cinta"], ["Mecánicas", "tornillos, encajes|bridas"], ["Atado", "alambre, cuerda"], ["Calor", "soldadura"]]),
    },
    {
      h: "Estructura y equilibrio",
      html: `<p>Una construcción debe <b>sostenerse</b>. Los triángulos son indeformables y dan rigidez; las bases anchas dan estabilidad; un centro de gravedad bajo evita vuelcos. Las piezas largas en voladizo necesitan contrapeso o tirantes.</p>
      <p>Los <b>móviles</b> de Calder son un caso especial: cada brazo cuelga en equilibrio y el conjunto se mueve con el aire. Para hacer uno se trabaja de abajo arriba, equilibrando primero los brazos inferiores. Antes de la obra final conviene probar la estructura con una maqueta.</p>`,
      svg: B.capas("Claves de una estructura estable", [["Triángulos", "dan rigidez"], ["Base ancha", "evita vuelcos"], ["Peso abajo", "centro de gravedad bajo"], ["Contrapeso", "equilibra voladizos"]]),
      video: { id: "EpTlhkN4900", titulo: "Móviles inspirados en Calder", canal: "UnitedArtAndEd", vistas: 172926 },
    },
  ],
  figura: {
    titulo: "Construcción y ensamblaje en cuatro claves",
    items: [["Plano", "▱", "cartón, chapa", "plegar, ranurar"], ["Línea", "⌇", "alambre, varilla", "dibujar en el aire"], ["Objeto", "⚙", "ensamblaje", "y ready-made"], ["Unión", "＋", "colas, encajes", "soldadura"]],
  },
  video: { id: "bfdspKhEvZA", titulo: "Cómo hacer un cuerpo de alambre paso a paso", canal: "Mi mundo de Plastilina", vistas: 1173733 },
  quiz: [
    ["Construir un volumen consiste en…", ["añadir barro", "quitar materia", "cortar, doblar y unir piezas", "fundir metal"], 2, "Tercera vía del volumen."],
    ["Encajar dos cartones mediante cortes sin pegamento es…", ["plegar", "ranurar", "soldar", "modelar"], 1, "Uniones por ranura."],
    ["La plantilla plana de un cubo con pestañas es su…", ["armazón", "desarrollo", "molde", "boceto"], 1, "Se pliega para formar el cuerpo."],
    ["¿Quién llamó a su obra «dibujar en el espacio»?", ["Julio González", "Bernini", "Rodin", "Donatello"], 0, "Hierro soldado."],
    ["Pablo Gargallo trabajó sobre todo con…", ["mármol", "chapa recortada", "barro cocido", "cera"], 1, "El hueco dibuja la forma."],
    ["Tatlin pertenece al…", ["Barroco", "constructivismo ruso", "Renacimiento", "Impresionismo"], 1, "Materiales industriales."],
    ["Un objeto industrial presentado como obra de arte es un…", ["relieve", "ready-made", "móvil", "bizcocho"], 1, "Duchamp."],
    ["Cabeza de toro de Picasso está hecha con…", ["mármol", "sillín y manillar de bicicleta", "barro", "papel maché"], 1, "1942."],
    ["La figura geométrica que da rigidez a una estructura es el…", ["círculo", "triángulo", "cuadrado", "óvalo"], 1, "Es indeformable."],
    ["Un móvil se equilibra empezando por…", ["arriba", "los brazos inferiores", "el centro", "el color"], 1, "De abajo arriba."],
  ],
  examen: [
    ["Una obra con cajas llenas de restos de madera pintadas de negro recuerda a…", ["Louise Nevelson", "Miguel Ángel", "Gregorio Fernández", "Fidias"], 0, "Ensamblaje."],
    ["Una escultura de cartón debe poder desmontarse para transportarla. Conviene usar…", ["cola caliente", "uniones por ranura o bridas", "soldadura", "barbotina"], 1, "Uniones mecánicas reversibles."],
    ["Una torre de listones se tambalea. Lo mejor es añadir…", ["más altura", "triángulos y una base ancha", "color", "peso arriba"], 1, "Rigidez y estabilidad."],
    ["Las obras con hilos tensados y plástico transparente son típicas de…", ["Naum Gabo", "Rodin", "Bernini", "Juan de Mesa"], 0, "Constructivismo."],
    ["La diferencia entre ready-made y ensamblaje es que el ensamblaje…", ["usa un solo objeto", "combina varios objetos en una forma nueva", "es de mármol", "no tiene vacío"], 1, "Une y combina."],
  ],
  feynman: ["Qué es construir frente a modelar y tallar", "Cómo pasar del plano al volumen", "Aportación de Julio González y Gargallo", "Diferencia entre ready-made y ensamblaje"],
  mapa: ["CONSTRUCCIÓN Y ENSAMBLAJE", [["Plano y línea", "cartón · chapa · alambre"], ["Hierro", "González · Gargallo"], ["Movimientos", "constructivismo · ready-made"], ["Técnica", "uniones · estructura"]]],
  tarjetas: [
    ["Construcción", "Técnica de cortar, doblar y unir piezas."],
    ["Ranurar", "Hacer cortes para encajar piezas planas."],
    ["Desarrollo", "Plantilla plana de un cuerpo geométrico."],
    ["Papel maché", "Tiras de papel con cola sobre una estructura."],
    ["Constructivismo", "Movimiento ruso de arte geométrico e industrial."],
    ["Ready-made", "Objeto cotidiano presentado como arte."],
    ["Ensamblaje", "Obra hecha uniendo objetos o piezas existentes."],
    ["Móvil", "Escultura colgada en equilibrio que se mueve."],
  ],
  ejemplos: [
    ["Construye un animal de cartón sin pegamento.", ["Dibujar el perfil y las patas en piezas separadas.", "Hacer ranuras de la mitad del ancho en cada cruce.", "Encajar las piezas en perpendicular."], "Volumen por ranurado: estable y desmontable."],
    ["Analiza Cabeza de toro de Picasso.", ["Materiales: sillín y manillar encontrados.", "Ensamblaje mínimo, casi un ready-made.", "Metáfora visual: objetos que se convierten en animal."], "Muestra que mirar de otra forma ya es crear."],
    ["Diseña la estructura de una torre de 1 m con varillas.", ["Base cuadrada ancha.", "Caras trianguladas con diagonales.", "Peso concentrado abajo."], "Triangulación y base ancha garantizan la estabilidad."],
  ],
  errores: [
    "Doblar cartón sin marcar antes la línea.",
    "Usar uniones débiles para piezas pesadas.",
    "Olvidar la estabilidad y la base.",
    "Dejar puntas de alambre o chapa sin proteger.",
  ],
  ejercicios: {
    b: [
      ["Explica las tres formas de hacer volumen: modelar, tallar y construir.", "Modelar: añadir material blando. Tallar: quitar de un bloque. Construir: cortar, doblar y unir piezas."],
      ["Nombra cuatro maneras de dar volumen al cartón.", "Plegar, ranurar, curvar y apilar capas (también papel maché)."],
      ["¿Qué es un ready-made? Cita un ejemplo.", "Un objeto cotidiano presentado como arte; la Rueda de bicicleta de Duchamp."],
      ["Clasifica: tornillo, cola blanca, cuerda, soldadura.", "Mecánica, adhesiva, atado y calor."],
    ],
    m: [
      ["¿Qué aportó Julio González a la escultura?", "Introdujo el hierro soldado y la escultura abierta, «dibujar en el espacio»."],
      ["Explica las ideas del constructivismo ruso.", "Arte geométrico con materiales industriales, al servicio de la sociedad; Tatlin, Gabo y Pevsner."],
      ["¿Por qué los triángulos dan rigidez a una estructura?", "Porque no pueden deformarse sin cambiar la longitud de sus lados."],
      ["Diferencia ready-made y ensamblaje.", "Ready-made: un objeto presentado casi sin cambios. Ensamblaje: varios objetos o piezas unidos en una forma nueva."],
    ],
    a: [
      ["Construye una figura humana de alambre en movimiento sobre una base.", "Respuesta abierta: proporciones con el canon, postura dinámica, uniones firmes, base estable."],
      ["Crea un ensamblaje con objetos encontrados que cuente una historia.", "Respuesta abierta: selección justificada de objetos, uniones adecuadas, título y texto breve."],
    ],
  },
  glosario: [
    ["Listón", "Pieza larga y estrecha de madera."],
    ["Contrachapado", "Tablero de láminas de madera encoladas."],
    ["Pestaña", "Solapa que se pega para unir planos."],
    ["Alicates", "Herramienta para doblar y cortar alambre."],
    ["Soldadura", "Unión de metales por calor."],
    ["Contrarrelieve", "Obra de Tatlin con materiales que salen al espacio."],
    ["Objeto encontrado", "Objeto ya existente usado en una obra."],
    ["Voladizo", "Parte que sobresale sin apoyo debajo."],
  ],
  situacion: {
    titulo: "Escultura con lo que sobra",
    reto: "Construir en equipo una escultura con materiales reciclados del centro.",
    pasos: [
      "Recoged cartón, tapones, alambre, listones y objetos en desuso.",
      "Haced bocetos y una maqueta para probar la estructura.",
      "Construid la obra eligiendo bien las uniones.",
      "Instaladla en un espacio del centro con una cartela explicativa.",
    ],
    producto: "Una escultura construida y su cartela.",
    evaluacion: [
      "La obra es estable y segura.",
      "Las uniones son adecuadas a cada material.",
      "Se aprovechan con intención los objetos reciclados.",
      "La cartela explica la idea con claridad.",
    ],
  },
  familias: [
    "Guardad cajas, tubos de cartón y tapones para construir en casa.",
    "Buscad juntos imágenes de las obras de Gargallo y Julio González.",
    "Construid un móvil con alambre, hilo y cartulina para una habitación.",
    "Mirad objetos cotidianos y jugad a imaginar en qué animal se podrían convertir.",
  ],
  saberes: "Técnicas de construcción: del plano al volumen (plegado, ranurado, capas, papel maché), alambre, hierro y chapa soldados (Julio González, Gargallo), constructivismo, ready-made, ensamblaje y objeto encontrado, tipos de uniones, estructura y equilibrio.",
  ideas: [
    "Animales de cartón por ranurado.",
    "Retratos de perfil en alambre.",
    "Ensamblaje colectivo con objetos encontrados.",
    "Móvil de equipo equilibrado de abajo arriba.",
  ],
  fuentes: [
    { t: "IVAM, colección Julio González", url: "https://www.ivam.es/" },
    { t: "Museo Pablo Gargallo (Zaragoza)", url: "https://www.zaragoza.es/sede/servicio/museo/gargallo" },
  ],
});
