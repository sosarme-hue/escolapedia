// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · Grabado en relieve: monotipia, xilografía y linóleo (tema ampliado). Dibujos propios en SVG.
const { tema, OBRA, TRUCO, matrices, cajas, flujo, versus, crono, rueda, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "Grabado en relieve: monotipia, xilografía y linóleo",
  minutos: 60,
  bloque: "D",
  objetivos: [
    "Diferenciar monoimpresión y reproducción múltiple y conocer el vocabulario de la obra gráfica",
    "Realizar una monotipia plana",
    "Explicar el proceso de la xilografía y del linograbado",
    "Planificar una estampa a varios colores por planchas o por reducción",
  ],
  claves: ["matriz", "estampa", "estampación", "tirada", "monotipia", "grabado en relieve", "xilografía", "madera a hilo", "madera a testa", "linóleo", "gubia", "rodillo", "baren", "plancha perdida", "registro"],
  pregunta: {
    texto: "¿Por qué en un grabado el dibujo sale al revés?",
    respuesta: "Porque la estampa es una <b>impresión</b>: el papel se coloca boca abajo sobre la <mark>matriz</mark> entintada y recibe la imagen como en un espejo, igual que un sello. Por eso los grabadores dibujan la imagen invertida sobre la plancha, sobre todo cuando hay letras, o la calcan dándole la vuelta al papel.",
  },
  bloques: [
    { h: "Qué es el grabado y la estampación", p: [
      "El <mark>grabado</mark> es el conjunto de técnicas que crean una imagen en una <b>matriz</b> (madera, linóleo, metal, piedra, pantalla) para después <b>estamparla</b> sobre papel u otro soporte. La <b>estampa</b> es cada impresión obtenida. Su gran novedad es la <b>reproducción múltiple</b>: de una matriz salen muchas estampas iguales, la <b>tirada</b> o edición.",
      "Según dónde queda la tinta en la matriz se distinguen tres grandes métodos: <b>relieve</b>, cuando se entinta lo que sobresale; <b>hueco</b>, cuando la tinta queda en los surcos; y <b>plano</b>, cuando imagen y fondo están a la misma altura. A ellos se suma la <b>monoimpresión</b>, que solo da una estampa.",
    ], svg: matrices("Tres métodos de estampación") },
    { h: "Un vocabulario propio", p: [
      "La obra gráfica tiene términos precisos. La <b>prueba de estado</b> sirve para ver cómo va la matriz durante el trabajo. El <b>bon à tirer</b> (BAT) es la prueba que el artista aprueba como modelo de la tirada. Las estampas se <b>numeran</b> (5/20) y se <b>firman</b> a lápiz en el margen. Las <b>pruebas de artista</b> (P/A) quedan fuera de la numeración.",
      "Otros términos: <b>entintar</b> es cargar la matriz de tinta con un rodillo; el <b>registro</b> es el sistema para que el papel caiga siempre en el mismo sitio, imprescindible al estampar varios colores; la <b>huella</b> es la marca que deja la plancha en el papel; y el <b>tórculo</b> es la prensa de estampación.",
    ], svg: flujo("Del taller a la edición", ["Pruebas de estado", "Bon à tirer: modelo aprobado", "Tirada numerada y firmada", "Matriz inutilizada"]) },
    { h: "La monotipia", p: [
      "La <mark>monotipia</mark> o monotipo es una técnica de <b>monoimpresión</b>: se pinta o se entinta una superficie lisa (cristal, metacrilato, metal) y se estampa una sola vez. Es la <b>monotipia plana</b> del programa: no hay surcos ni relieves, la imagen está solo en la tinta.",
      "Hay dos formas básicas. En la <b>aditiva</b> se pinta la imagen con tinta o pintura sobre la plancha. En la <b>sustractiva</b> se cubre toda la plancha con un rodillo y se retira tinta con trapos, pinceles o bastoncillos para crear las luces. Otra variante es el <b>monotipo por traspaso</b>: se coloca el papel sobre una plancha entintada y se dibuja por detrás con un lápiz. Degas hizo cientos de monotipos y los retocó con pastel.",
    ], extra: TRUCO("usa tinta de grabado al agua y estampa con una cuchara de madera haciendo círculos: no necesitas tórculo."), svg: versus("Monotipia", ["Aditiva", ["pintar sobre la plancha", "imagen en positivo", "manchas de color", "una estampa"]], ["Sustractiva", ["plancha toda entintada", "quitar tinta para las luces", "como dibujar con goma", "una estampa"]]), v: ["rel-c", "Monotipia: dos formas"] },
    { h: "La xilografía", p: [
      "La <mark>xilografía</mark> es el grabado en madera, la técnica de grabado más antigua: en China se imprimían textos con ella en el siglo VIII y en Europa aparece hacia 1400 con estampas religiosas y naipes. Se dibuja sobre la plancha y se <b>vacía con gubias</b> lo que debe quedar en blanco; la imagen es lo que queda en relieve.",
      "Hay dos tipos. La <b>madera a hilo</b>, cortada en el sentido de la veta (peral, cerezo, contrachapado), se talla con cuchillos y gubias y su veta puede verse en la estampa. La <b>madera a testa</b>, cortada perpendicular al tronco, es muy dura y permite líneas finísimas con buril; la perfeccionó Thomas Bewick en el siglo XVIII para ilustrar libros.",
    ], extra: OBRA("Los cuatro jinetes del Apocalipsis", "Alberto Durero", "1498, xilografía"), svg: crono("Historia de la xilografía", [["s. VIII", "China: textos impresos"], ["1400", "estampas en Europa"], ["1498", "Apocalipsis de Durero"], ["1790", "madera a testa de Bewick"], ["1830", "Hokusai, ukiyo-e"], ["1905", "expresionismo alemán"]]), v: ["rel-a", "Proceso de una xilografía"] },
    { h: "El linóleo", p: [
      "El <mark>linóleo</mark> es un material de suelos hecho de aceite de linaza, harina de corcho y resinas sobre una base de tela de yute. Es blando, homogéneo y sin veta, por eso se corta con facilidad en cualquier dirección. El <b>linograbado</b> se popularizó en el siglo XX: lo usaron Matisse y, sobre todo, Picasso, que inventó la técnica de reducción.",
      "Se talla con <b>gubias</b> en forma de V, para líneas, y de U, para vaciar zonas. Si se calienta un poco, el linóleo se vuelve más blando. Hoy también se usan planchas de goma o de caucho, aún más fáciles de cortar y muy útiles en el aula.",
    ], svg: cajas("Herramientas del relieve", [["Gubia en V", "líneas finas"], ["Gubia en U", "vaciar zonas"], ["Cuchilla", "contornos"], ["Rodillo", "entintar"], ["Baren", "estampar a mano"], ["Tórculo", "prensa"]]) },
    { h: "Proceso de un grabado en relieve", p: [
      "Primero se hace el <b>boceto</b> con zonas claras de blanco y negro, porque el relieve no admite grises, salvo con texturas y líneas. El dibujo se pasa a la plancha <b>invertido</b>. Se tallan las zonas blancas siempre con la gubia alejada de la mano que sujeta, o con un tope de seguridad.",
      "Después se <b>entinta</b> con rodillo una capa fina y uniforme de tinta, se coloca el papel encima y se estampa con el <b>baren</b>, una cuchara o el tórculo. Se levanta el papel con cuidado y se deja secar. Las primeras pruebas sirven para corregir la plancha: siempre se puede quitar, pero nunca añadir.",
    ], svg: flujo("Pasos del linograbado", ["Boceto en blanco y negro", "Pasar el dibujo invertido", "Tallar los blancos con gubias", "Entintar con rodillo", "Estampar y secar"]) },
    { h: "Estampar a varios colores", p: [
      "Para obtener estampas en color hay dos métodos. Con <b>varias planchas</b>, se talla una matriz por color y se estampan una tras otra sobre el mismo papel, usando un buen <b>registro</b> para que coincidan. Es el método del grabado japonés <b>ukiyo-e</b>, que llegó a usar más de diez planchas.",
      "Con la <mark>plancha perdida</mark> o por reducción, inventada por Picasso con su impresor Arnéra, se usa una sola plancha: se talla y se estampa el color más claro en toda la tirada, se vuelve a tallar la misma plancha y se estampa el siguiente color, y así hasta el más oscuro. Al final la plancha queda destruida, por lo que no se puede ampliar la edición.",
    ], svg: versus("Grabar en color", ["Varias planchas", ["una por color", "registro preciso", "se pueden reimprimir", "ukiyo-e"]], ["Plancha perdida", ["una sola plancha", "de claro a oscuro", "edición cerrada", "Picasso"]]) },
    { h: "El relieve en el arte", p: [
      "El grabado en relieve ha sido una herramienta de expresión y de difusión. Durero lo elevó a gran arte; los grabados de <b>Hokusai</b> e <b>Hiroshige</b> influyeron en los impresionistas; los expresionistas alemanes del grupo <b>Die Brücke</b> aprovecharon la madera para imágenes violentas y sinceras; y <b>Käthe Kollwitz</b> la usó para denunciar la guerra y la pobreza.",
      "En Latinoamérica, el <b>Taller de Gráfica Popular</b> de México y los grabadores de la literatura de cordel en Brasil hicieron del relieve un arte político y popular. Hoy está muy vivo en la ilustración, los carteles, las camisetas y las editoriales independientes.",
    ], svg: rueda("RELIEVE", ["Durero", "Hokusai", "Die Brücke", "Kollwitz", "Taller de Gráfica Popular", "Picasso"]) },
  ],
  figura: { titulo: "El grabado en relieve de un vistazo", aria: "Resumen del vocabulario, la monotipia, la xilografía y el linóleo y el color", cols: [
    ["Conceptos", ["matriz y estampa", "tirada numerada", "registro", "P/A"]],
    ["Monotipia", ["una sola estampa", "aditiva", "sustractiva", "por traspaso"]],
    ["Xilografía y linóleo", ["madera a hilo", "madera a testa", "gubias", "baren"]],
    ["Color", ["varias planchas", "plancha perdida", "ukiyo-e", "Picasso"]],
  ] },
  video: ["rel-b", "Proceso completo de linograbado en casa"],
  ejemplos: [
    ["Haz una monotipia sustractiva.", ["Entinta un metacrilato con rodillo.", "Retira tinta con trapo y bastoncillos para las luces.", "Coloca el papel encima.", "Frota con una cuchara y levanta."], "Una estampa única con luces sacadas de la tinta."],
    ["Graba un linóleo con texto.", ["Escribe el texto en un papel.", "Dale la vuelta y cálcalo en la plancha.", "Talla los blancos.", "Al estampar, el texto se lee bien."], "El texto se graba invertido."],
    ["Planifica una plancha perdida a tres colores.", ["Talla los blancos y estampa amarillo en todos los papeles.", "Talla lo que quedará amarillo y estampa rojo.", "Talla lo que quedará rojo y estampa negro."], "Tres colores con una sola plancha; edición cerrada."],
  ],
  errores: [
    "Olvidar invertir el dibujo, sobre todo los textos.",
    "Tallar hacia la mano que sujeta la plancha.",
    "Entintar con demasiada tinta: se empastan las líneas finas.",
    "Pensar que una fotocopia firmada es obra gráfica original.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es una matriz?", "La superficie grabada (madera, linóleo, metal…) desde la que se estampa."],
      ["¿Qué se entinta en el grabado en relieve?", "Las zonas que sobresalen."],
      ["¿Cuántas estampas da una monotipia?", "Una sola."],
      ["¿Qué herramienta se usa para tallar el linóleo?", "Las gubias."],
    ],
    m: [
      ["Diferencia madera a hilo y madera a testa.", "La de hilo se corta en el sentido de la veta y se talla con gubias; la de testa, perpendicular, es más dura y admite buril y líneas finas."],
      ["¿Qué es el registro y por qué es importante?", "Un sistema para colocar el papel siempre en el mismo sitio; sin él, los colores no coinciden."],
      ["Explica la diferencia entre monotipia aditiva y sustractiva.", "En la aditiva se pinta la imagen; en la sustractiva se entinta todo y se quita tinta."],
      ["¿Qué es el bon à tirer?", "La prueba aprobada por el artista como modelo de la tirada."],
    ],
    a: [
      ["Compara el método de varias planchas con la plancha perdida.", "Varias planchas permiten reeditar y exigen registro; la plancha perdida usa una plancha y cierra la edición."],
      ["Analiza un grabado de Die Brücke.", "Respuesta abierta: talla tosca, contrastes de blanco y negro, veta visible, expresividad."],
      ["Diseña un cartel en linograbado a dos colores.", "Respuesta abierta: boceto, inversión, separación de colores, registro y tirada."],
    ],
  },
  quiz: [
    ["En el grabado en relieve la tinta está…", ["en lo que sobresale", "en los surcos", "a la misma altura", "en el papel"], "Como un sello."],
    ["La técnica de grabado más antigua es la…", ["xilografía", "serigrafía", "litografía", "aguafuerte"], "Madera."],
    ["La monotipia da…", ["una sola estampa", "cien estampas", "estampas en relieve", "copias digitales"], "Monoimpresión."],
    ["La madera a testa la perfeccionó…", ["Thomas Bewick", "Durero", "Picasso", "Hokusai"], "Siglo XVIII."],
    ["El linóleo está hecho de…", ["linaza, corcho y yute", "madera de peral", "cobre", "piedra caliza"], "Suelos."],
    ["La plancha perdida la inventó…", ["Picasso", "Durero", "Degas", "Goya"], "Reducción."],
    ["El baren sirve para…", ["estampar a mano", "tallar", "entintar", "cortar papel"], "Japón."],
    ["P/A significa…", ["prueba de artista", "papel adecuado", "plancha antigua", "primera actuación"], "Fuera de tirada."],
    ["Los cuatro jinetes del Apocalipsis es de…", ["Durero", "Kollwitz", "Munch", "Hokusai"], "1498."],
    ["La gubia en V sirve para…", ["líneas finas", "vaciar grandes zonas", "entintar", "estampar"], "Corte."],
  ],
  examen: [
    ["El dibujo se pasa a la plancha…", ["invertido", "igual", "a escala doble", "en color"], "Espejo."],
    ["En la monotipia sustractiva…", ["se quita tinta para las luces", "se talla la plancha", "se usan ácidos", "se pinta en positivo"], "Retirar."],
    ["Para estampar varios colores con varias planchas es clave…", ["el registro", "el ácido", "el fijador", "el barniz"], "Coincidencia."],
    ["La tirada es…", ["el conjunto de estampas de una edición", "la plancha", "el boceto", "la gubia"], "Edición."],
  ],
  feynman: ["matriz, estampa y tirada", "tres métodos de estampación", "monotipia", "xilografía y linóleo", "color por planchas o reducción"],
  mapa: ["GRABADO EN RELIEVE", [["Conceptos", "matriz, tirada"], ["Monotipia", "una estampa"], ["Xilografía y linóleo", "gubias"], ["Color", "planchas o reducción"]]],
  tarjetas: [
    ["Matriz", "Superficie grabada para estampar."],
    ["Relieve", "Se entinta lo que sobresale."],
    ["Monotipia", "Monoimpresión sobre superficie lisa."],
    ["Xilografía", "Grabado en madera."],
    ["Madera a testa", "Corte perpendicular, líneas finas."],
    ["Linóleo", "Material blando sin veta."],
    ["Plancha perdida", "Varios colores con una plancha que se destruye."],
    ["Registro", "Colocar el papel siempre igual."],
  ],
  glosario: [
    ["Estampa", "Cada impresión obtenida de una matriz."],
    ["Tirada", "Número de estampas de una edición."],
    ["Bon à tirer", "Prueba aprobada como modelo de la tirada."],
    ["Gubia", "Herramienta de corte con hoja en V o en U."],
    ["Baren", "Disco para frotar el papel al estampar a mano."],
    ["Registro", "Sistema para colocar el papel en la misma posición."],
    ["Huella", "Marca de la plancha en el papel."],
    ["Ukiyo-e", "Grabado japonés en madera a varios colores."],
  ],
  situacion: SIT(
    "Una carpeta de grabados del curso",
    "La clase editará una carpeta colectiva de linograbados sobre el entorno del centro, con una tirada para cada participante.",
    [
      "Cada alumno diseña un linograbado de formato común.",
      "Tallad y haced pruebas de estado.",
      "Estampad una tirada numerada igual al número de participantes.",
      "Montad las carpetas con portada e índice.",
    ],
    "Carpeta de grabados numerados y firmados.",
    [
      "Calidad del diseño y de la talla.",
      "Limpieza y homogeneidad de la tirada.",
      "Uso correcto de numeración y firma.",
    ],
  ),
  familias: [
    "Haced un sello con media patata y pintura: es un grabado en relieve.",
    "Buscad en casa algo con texto impreso al revés, como un tampón.",
    "Mirad grabados de Hokusai y contad cuántos colores tienen.",
    "Probad una monotipia con un plástico, pintura y una cuchara.",
  ],
  saberes: "materiales, útiles, maquinaria y soportes del grabado; monoimpresión y reproducción múltiple; la obra gráfica; monotipia plana; estampación en relieve: xilografía y linóleo.",
  ideas: [
    "Monotipias aditivas y sustractivas sobre metacrilato.",
    "Sellos de goma de borrar para practicar la talla.",
    "Linograbado de plancha perdida a tres colores.",
    "Comparar una xilografía de Durero y una de Kirchner.",
  ],
  fuentes: [
    WIKI("Xilografía", "Xilograf%C3%ADa"),
    WIKI("Linograbado", "Linograbado"),
    { t: "Calcografía Nacional, Real Academia de Bellas Artes de San Fernando", url: "https://www.realacademiabellasartessanfernando.com/es/calcografia-nacional" },
  ],
});
