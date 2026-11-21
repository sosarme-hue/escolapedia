// Diseño, 2º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "La identidad visual corporativa",
  minutos: 60,
  objetivos: [
    "Distinguir marca, identidad corporativa e identidad visual",
    "Reconocer los tipos de signo de marca: logotipo, isotipo, imagotipo e isologo",
    "Definir los elementos de una identidad: signo, colores, tipografías y aplicaciones",
    "Elaborar un manual de identidad sencillo y valorar un rediseño de marca",
  ],
  claves: ["marca", "identidad corporativa", "logotipo", "isotipo", "imagotipo", "isologo", "manual de identidad", "rebranding"],
  pregunta: {
    texto: "¿Reconocerías una marca famosa solo por su color o por un trozo de su símbolo?",
    respuesta: "Seguramente sí. Eso es una <mark>identidad visual</mark> bien construida: un sistema de signos, colores y letras repetido con coherencia hasta quedar grabado en la memoria.",
  },
  lectura: {
    titulo: "El sol de Miró",
    html: `<p>En 1983, la Secretaría de Estado de Turismo encargó a Joan Miró un símbolo para promocionar España en el extranjero. El pintor entregó un sol rojo y amarillo, una estrella negra y la palabra «España» escrita con su trazo libre y alegre.</p>
    <p>No era un logotipo de manual: parecía un cuadro. Pero funcionó durante décadas porque transmitía lo que se quería contar del país (luz, color, creatividad) y se aplicó con coherencia en carteles, folletos y anuncios. Una identidad visual no es solo un dibujo bonito: es una promesa que se repite y se cumple en cada contacto con el público.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "Marca e identidad",
      html: `<p>La <b>marca</b> es mucho más que un logotipo: es la idea que las personas tienen en la cabeza sobre una empresa, un producto, una ciudad o una persona. Se construye con todo lo que hace: sus productos, su trato, su publicidad, sus valores.</p>
      <p>La <b>identidad corporativa</b> es cómo la organización quiere ser percibida: su misión, su personalidad y sus valores. La <b>identidad visual</b> es la traducción gráfica de esa identidad: el signo, los colores, las tipografías y las normas que los aplican. El diseñador trabaja sobre esta última, pero debe entender bien la primera.</p>`,
      svg: B.capas("Tres niveles", [["Marca", "lo que piensa el público"], ["Identidad corporativa", "quién quiere ser"], ["Identidad visual", "cómo se ve"]]),
      video: { id: "Sx9MBLCe4cc", titulo: "¿Qué es la identidad corporativa?", canal: "Iconografics", vistas: 159469 },
    },
    {
      h: "Funciones de la identidad visual",
      html: `<p>Una identidad visual cumple varias funciones. <b>Identifica</b>: permite saber quién habla. <b>Diferencia</b>: distingue de la competencia en un mercado lleno de mensajes. <b>Comunica</b> valores: seriedad, cercanía, innovación, tradición. Y <b>genera confianza</b> y recuerdo gracias a la repetición coherente.</p>
      <p>Por eso debe ser coherente en todos los soportes, desde una tarjeta hasta un camión o un perfil en redes. Una empresa que cambia de colores y letras en cada folleto transmite desorden, aunque sus productos sean buenos. La coherencia se consigue con normas claras y con paciencia: una identidad tarda años en consolidarse.</p>`,
      svg: B.cajas("Funciones", [["Identificar", "saber|quién habla"], ["Diferenciar", "de la|competencia"], ["Comunicar", "valores|y carácter"], ["Recordar", "confianza por|repetición"]]),
    },
    {
      h: "Tipos de signo de marca",
      html: `<p>El signo principal de una identidad puede ser de varios tipos. El <b>logotipo</b> es solo texto tipográfico, el nombre escrito de forma característica. El <b>isotipo</b> es solo un símbolo, sin palabras, reconocible por sí mismo. El <b>imagotipo</b> combina símbolo y texto que pueden funcionar por separado.</p>
      <p>El <b>isologo</b> funde símbolo y texto en una sola pieza que no se puede separar, como un nombre dentro de un escudo. En el lenguaje diario se llama «logo» a todos, pero el diseñador debe saber distinguirlos para elegir el más adecuado al encargo.</p>`,
      svg: B.marcas("Logotipo, isotipo, imagotipo e isologo"),
    },
    {
      h: "Cualidades de un buen signo",
      html: `<p>Un buen signo de marca es <b>sencillo</b> (se recuerda y se dibuja de memoria), <b>legible</b> y <b>reconocible</b> a cualquier tamaño, desde el icono de una app hasta una fachada. Es <b>versátil</b>: funciona en color, en negro y en blanco sobre fondo oscuro. Es <b>pertinente</b>: transmite el carácter de quien representa. Y es <b>duradero</b>: no depende de modas pasajeras.</p>
      <p>En su construcción se usan retículas, proporciones y pruebas de reducción para comprobar hasta qué tamaño mínimo se lee bien. También se revisa que no se parezca demasiado a otras marcas registradas, algo que se consulta en la Oficina Española de Patentes y Marcas antes de presentarlo al cliente.</p>`,
      svg: B.estrella("Un buen signo es…", "Buen signo", ["Sencillo", "Legible", "Versátil", "Pertinente", "Duradero"]),
    },
    {
      h: "Colores y tipografías corporativas",
      html: `<p>Los <b>colores corporativos</b> se definen con precisión en todos los modelos: Pantone para tintas planas, CMYK para imprenta, RGB y hexadecimal para pantallas. Así el rojo de una marca es igual en un folleto, en una camiseta y en una web. Muchas marcas se reconocen solo por su color.</p>
      <p>Las <b>tipografías corporativas</b> son una o dos familias que se usan siempre en titulares y textos. A veces se diseña una tipografía exclusiva para la marca. Junto a ellas se pueden definir <b>elementos gráficos</b> complementarios (formas, iconos, estilo fotográfico) que dan unidad a todas las piezas.</p>`,
      svg: B.rejilla("Definir un color", ["Uso", "Modelo", "Ejemplo"], [["Tinta plana", "Pantone", "485 C"], ["Imprenta", "CMYK", "0 95 100 0"], ["Pantalla", "RGB", "218 41 28"], ["Web", "Hexadecimal", "#DA291C"]]),
    },
    {
      h: "El manual de identidad",
      html: `<p>El <b>manual de identidad visual</b> es el documento que recoge las normas para usar la marca. Incluye el signo y sus versiones (principal, horizontal, vertical, monocroma), el <b>área de respeto</b> (espacio libre a su alrededor), el <b>tamaño mínimo</b>, los colores con sus códigos, las tipografías, los <b>usos incorrectos</b> (deformar, cambiar colores, poner sobre fondos que no contrastan) y las <b>aplicaciones</b>.</p>
      <p>Las aplicaciones son los soportes donde aparece la marca: papelería, web y redes, señalética, uniformes, vehículos, envases. El manual garantiza que cualquier persona aplique la identidad sin romper su coherencia.</p>`,
      svg: B.flujo("Índice de un manual", ["Signo y versiones", "Área de respeto y tamaño mínimo", "Colores y tipografías", "Usos incorrectos", "Aplicaciones"]),
    },
    {
      h: "Rediseño de marca",
      html: `<p>Las marcas cambian con el tiempo. El <b>rediseño</b> o <i>rebranding</i> puede ser una actualización ligera (simplificar trazos, adaptar a pantallas pequeñas) o un cambio profundo cuando la empresa cambia de actividad o de valores. La tendencia reciente ha sido la <b>simplificación</b>: signos planos, sin sombras ni relieves, que funcionan como icono de app.</p>
      <p>Un rediseño debe conservar los elementos que el público reconoce (el <b>capital de marca</b>) y justificar cada cambio. Algunos rediseños polémicos han tenido que dar marcha atrás por las críticas de los clientes, que sentían que habían perdido algo suyo.</p>`,
      svg: B.comparar("Rediseñar sí, pero…", ["Conservar", ["el color clave", "la forma reconocible", "el nombre", "los valores"]], ["Actualizar", ["trazo más simple", "versión para pantalla", "tipografía legible", "sistema flexible"]]),
    },
  ],
  figura: {
    titulo: "Identidad visual en cuatro claves",
    items: [["Signo", "◉", "logotipo, isotipo", "imagotipo"], ["Color", "■", "Pantone, CMYK", "RGB, hex"], ["Letra", "Aa", "una o dos", "familias"], ["Manual", "📘", "normas y", "aplicaciones"]],
  },
  video: { id: "eFRioIPJRdc", titulo: "Logos: marca vs logo y tipos de logos: logotipo, isotipo, imagotipo e isologo", canal: "Hey Jaime", vistas: 170095 },
  quiz: [
    ["La marca es…", ["solo el logotipo", "la idea que el público tiene de una organización", "el nombre legal", "el color"], 1, "Se construye con todo lo que hace."],
    ["La identidad visual es…", ["la misión de la empresa", "la traducción gráfica de la identidad", "la publicidad en televisión", "el precio"], 1, "Signo, colores, letras y normas."],
    ["Un signo formado solo por texto es un…", ["isotipo", "logotipo", "imagotipo", "pictograma"], 1, "Nombre escrito."],
    ["Un símbolo reconocible sin palabras es un…", ["isotipo", "logotipo", "isologo", "eslogan"], 0, "Solo imagen."],
    ["En el isologo, símbolo y texto…", ["se pueden separar", "están fundidos y no se separan", "no existen", "son de colores distintos"], 1, "Una sola pieza."],
    ["Un buen signo debe funcionar…", ["solo en grande", "a cualquier tamaño y en una sola tinta", "solo en color", "solo en papel"], 1, "Versatilidad."],
    ["El código hexadecimal de un color se usa para…", ["imprenta", "pantallas y web", "bordados", "pintura de pared"], 1, "#DA291C, por ejemplo."],
    ["El área de respeto es…", ["el tamaño máximo", "el espacio libre alrededor del signo", "el precio de la marca", "el registro legal"], 1, "Nada debe invadirla."],
    ["Un uso incorrecto típico es…", ["usar la versión monocroma", "deformar el signo estirándolo", "respetar el tamaño mínimo", "usar los colores corporativos"], 1, "Se pierde la proporción."],
    ["El capital de marca es…", ["el dinero de la empresa", "lo que el público ya reconoce y valora de la marca", "el logo antiguo", "el manual"], 1, "Se conserva al rediseñar."],
  ],
  examen: [
    ["Una cafetería usa su nombre escrito con letra manuscrita y nada más. ¿Qué tipo de signo es?", ["Isotipo", "Logotipo", "Isologo", "Imagotipo"], 1, "Solo texto."],
    ["El logo de un club se ve bien en la camiseta pero ilegible como icono de la app. ¿Qué falta?", ["Más colores", "Una versión reducida y simplificada", "Un eslogan", "Más detalle"], 1, "Pruebas de reducción."],
    ["En la web el azul corporativo sale distinto que en los folletos. ¿Qué falla?", ["El diseñador", "No se definieron bien los códigos para cada modelo de color", "El papel", "Nada"], 1, "Pantone, CMYK, RGB y hex."],
    ["Una marca con 80 años quiere modernizarse. ¿Qué recomiendas?", ["Cambiarlo todo", "Simplificar conservando los rasgos reconocibles", "No tocar nada nunca", "Copiar a la competencia"], 1, "Proteger el capital de marca."],
    ["Un socio coloca el logo sobre una foto oscura sin contraste. ¿Qué documento debería haber consultado?", ["El briefing", "El manual de identidad", "La factura", "El moodboard"], 1, "Usos incorrectos y versiones."],
  ],
  feynman: ["Diferencia entre marca, identidad corporativa e identidad visual", "Los cuatro tipos de signo con un ejemplo inventado", "Qué incluye un manual de identidad", "Qué hay que conservar al rediseñar una marca"],
  mapa: ["IDENTIDAD VISUAL", [["Concepto", "marca · identidad · imagen"], ["Signo", "logotipo · isotipo · imagotipo"], ["Sistema", "colores · tipografías · elementos"], ["Manual", "versiones · respeto · usos · aplicaciones"]]],
  tarjetas: [
    ["Marca", "Idea que el público tiene de una organización o producto."],
    ["Identidad visual", "Conjunto de signos, colores y letras que representan a una organización."],
    ["Logotipo", "Signo de marca formado solo por texto."],
    ["Isotipo", "Signo de marca formado solo por un símbolo."],
    ["Imagotipo", "Símbolo y texto que pueden usarse por separado."],
    ["Isologo", "Símbolo y texto fundidos en una sola pieza."],
    ["Área de respeto", "Espacio libre obligatorio alrededor del signo."],
    ["Manual de identidad", "Documento con las normas de uso de la marca."],
  ],
  ejemplos: [
    ["Define la identidad corporativa de una librería de barrio antes de diseñar su signo.", ["Misión: acercar la lectura a todas las edades.", "Personalidad: cercana, tranquila, curiosa.", "Valores: comunidad, cultura, comercio local."], "Base para elegir signo, colores y tipografía."],
    ["Propón un imagotipo para la librería.", ["Símbolo: un libro abierto que forma un tejado (casa del barrio).", "Texto: nombre en romana cálida.", "Colores: verde oscuro y crema."], "Símbolo y nombre separables para usos distintos."],
    ["Detecta tres usos incorrectos en un cartel de la librería.", ["El logo está estirado en horizontal.", "Se ha cambiado el verde por un azul.", "Un texto invade el área de respeto."], "Hay que corregirlos según el manual."],
  ],
  errores: [
    "Confundir la marca con el logotipo.",
    "Diseñar signos con tantos detalles que no se leen en pequeño.",
    "Definir el color solo en RGB y no en Pantone o CMYK.",
    "Rediseñar una marca sin conservar lo que el público reconoce.",
  ],
  ejercicios: {
    b: [
      ["Define logotipo, isotipo, imagotipo e isologo.", "Logotipo: texto. Isotipo: símbolo. Imagotipo: símbolo y texto separables. Isologo: símbolo y texto fundidos."],
      ["Cita cuatro funciones de la identidad visual.", "Identificar, diferenciar, comunicar valores y generar recuerdo y confianza."],
      ["¿Qué es el área de respeto?", "El espacio libre alrededor del signo que ningún otro elemento puede invadir."],
      ["Nombra cinco aplicaciones de una identidad visual.", "Papelería, web, redes sociales, señalética, uniformes, vehículos, envases."],
    ],
    m: [
      ["Busca tres marcas conocidas y clasifica su signo.", "Respuesta abierta: identificar tipo de signo y justificarlo."],
      ["Explica por qué un signo debe funcionar en una sola tinta.", "Porque se usará en sellos, fax, bordados, grabados o fondos oscuros donde no hay color; si depende del color, pierde reconocimiento."],
      ["Analiza el rediseño reciente de una marca: qué conserva y qué cambia.", "Respuesta abierta: comparar versiones y valorar si mantiene el capital de marca."],
      ["Define los colores corporativos de un club deportivo en Pantone, CMYK, RGB y hex.", "Respuesta abierta: códigos coherentes entre sí, comprobados con una herramienta de conversión."],
    ],
    a: [
      ["Diseña la identidad visual de una asociación juvenil: signo, versiones, colores y tipografías.", "Respuesta abierta. Se valora la pertinencia, la sencillez y la versatilidad."],
      ["Elabora un manual de identidad de cuatro páginas para tu propuesta.", "Respuesta abierta: signo y versiones, respeto y tamaño mínimo, color y tipografía, usos incorrectos y dos aplicaciones."],
    ],
  },
  glosario: [
    ["Identidad corporativa", "Personalidad, misión y valores de una organización."],
    ["Imagen de marca", "Percepción que el público tiene de la marca."],
    ["Versión monocroma", "Variante del signo en un solo color."],
    ["Tamaño mínimo", "Medida por debajo de la cual el signo no debe usarse."],
    ["Tinta plana", "Color impreso con una tinta ya mezclada, como Pantone."],
    ["Aplicación", "Soporte donde se usa la identidad."],
    ["Rebranding", "Rediseño de la identidad de una marca."],
    ["Marca registrada", "Signo protegido legalmente para su uso exclusivo."],
  ],
  situacion: {
    titulo: "Una marca para el instituto",
    reto: "Proponer una identidad visual para un proyecto del centro (radio, revista, club o huerto).",
    pasos: [
      "Entrevistad a los responsables y redactad el briefing y la identidad corporativa.",
      "Bocetad al menos veinte signos y elegid tres con una matriz.",
      "Desarrollad el elegido con versiones, colores y tipografías.",
      "Preparad un manual breve y dos aplicaciones en mockup.",
    ],
    producto: "Identidad visual con manual básico y aplicaciones simuladas.",
    evaluacion: [
      "El signo es pertinente, sencillo y versátil.",
      "Colores y tipografías están bien definidos.",
      "El manual es claro y útil para otros.",
    ],
  },
  familias: [
    "Jugad a reconocer marcas tapando su nombre.",
    "Buscad en casa productos de una marca y comprobad si usan siempre los mismos colores.",
    "Preguntadle qué marca cree que tiene la mejor identidad y por qué.",
    "Comparad logos antiguos y actuales de marcas que conocéis desde hace años.",
  ],
  saberes: "La identidad visual corporativa: marca, identidad e imagen; funciones; tipología de signos (logotipo, isotipo, imagotipo, isologo); cualidades del signo; colores y tipografías corporativas; manual de identidad y aplicaciones; rediseño de marca; protección legal de la marca",
  ideas: [
    "Análisis comparativo de identidades de empresas de la comunidad.",
    "Concurso de identidad para un proyecto real del centro.",
    "Pruebas de reducción de signos en la pantalla del móvil.",
    "Estudio de manuales de identidad públicos de instituciones.",
  ],
  fuentes: [
    { t: "Identidad corporativa, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Identidad_corporativa" },
    { t: "Oficina Española de Patentes y Marcas", url: "https://www.oepm.es/" },
  ],
});
