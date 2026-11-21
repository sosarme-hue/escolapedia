// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · Estampación plana: litografía, serigrafía y copy art (tema ampliado). Dibujos propios en SVG.
const { tema, OBRA, TRUCO, matrices, cajas, flujo, versus, crono, rueda, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "Estampación plana: litografía, serigrafía y copy art",
  minutos: 60,
  bloque: "D",
  objetivos: [
    "Explicar el método planográfico de la litografía basado en el rechazo entre grasa y agua",
    "Describir el método permeográfico de la serigrafía y sus formas de hacer la pantalla",
    "Conocer el método electrónico: copy art, impresión digital y técnicas híbridas",
    "Elegir el sistema de estampación más adecuado para cada proyecto",
  ],
  claves: ["método planográfico", "litografía", "piedra litográfica", "lápiz graso", "goma arábiga", "método permeográfico", "serigrafía", "pantalla", "rasqueta", "emulsión fotosensible", "plantilla", "copy art", "giclée", "riso"],
  pregunta: {
    texto: "¿Cómo se puede imprimir desde una piedra completamente lisa?",
    respuesta: "Con química, no con relieve. La <mark>litografía</mark> se basa en que <b>el agua y la grasa se repelen</b>. Se dibuja sobre una piedra caliza con un lápiz graso, se trata la piedra y se humedece: el agua se queda en las zonas sin dibujo y la tinta grasa del rodillo solo se pega al dibujo. Así, desde una superficie plana, el papel recibe la imagen.",
  },
  bloques: [
    { h: "La estampación plana", p: [
      "En la <mark>estampación plana</mark> la imagen y el fondo de la matriz están <b>a la misma altura</b>: no hay surcos ni relieves. El RD 243/2022 distingue tres métodos. El <b>planográfico</b>, en el que la imagen se separa del fondo por un fenómeno químico, como en la litografía. El <b>permeográfico</b>, en el que la tinta atraviesa una pantalla permeable en unas zonas y no en otras, como en la serigrafía. Y el <b>electrónico</b>, que usa fotocopiadoras e impresoras: el copy art y la obra gráfica digital.",
      "Estos métodos, nacidos entre los siglos XIX y XX, permitieron tiradas grandes, mucho color y la unión entre arte, publicidad y diseño gráfico.",
    ], svg: matrices("Relieve, hueco y plano") },
    { h: "La litografía: historia", p: [
      "La litografía la inventó <b>Alois Senefelder</b> en Múnich en 1796, buscando una forma barata de imprimir partituras. Usó la <b>piedra caliza</b> de Solnhofen, porosa y capaz de absorber tanto grasa como agua. En pocos años se extendió por Europa: Goya hizo en Burdeos su serie de <i>Los toros de Burdeos</i> (1825) y Daumier publicó miles de caricaturas en la prensa.",
      "A finales del siglo XIX la <b>cromolitografía</b> a varios colores llenó las calles de carteles: <b>Toulouse-Lautrec</b>, Jules Chéret o Alfons Mucha convirtieron el cartel en arte. Más tarde la piedra se sustituyó por planchas de cinc y aluminio, y de ahí nació el <b>offset</b>, el sistema de impresión de libros y revistas.",
    ], extra: OBRA("Moulin Rouge, La Goulue", "Henri de Toulouse-Lautrec", "1891, litografía en color, cartel"), svg: crono("Estampación plana", [["1796", "litografía de Senefelder"], ["1825", "Toros de Burdeos de Goya"], ["1891", "carteles de Toulouse-Lautrec"], ["1904", "offset"], ["1960", "serigrafía pop"], ["1970", "copy art"], ["s. XXI", "giclée y riso"]]) },
    { h: "El proceso litográfico", p: [
      "Primero se <b>granea</b> la piedra frotándola con otra piedra y arena para limpiarla y darle textura. Se dibuja con <b>lápices y barras litográficas</b> grasos o con <b>tinta litográfica</b> (tusche) a pluma o pincel, que permite aguadas. Después se <b>prepara</b> la piedra con una mezcla de <b>goma arábiga</b> y un poco de ácido nítrico, que fija la grasa del dibujo y hace las zonas limpias más receptivas al agua.",
      "Para estampar se <b>humedece</b> la piedra con una esponja, se pasa el rodillo con tinta grasa —que se pega solo al dibujo—, se coloca el papel y se pasa por la <b>prensa litográfica</b>, que arrastra una rasqueta sobre el papel. Cada estampa exige volver a mojar y a entintar.",
    ], extra: TRUCO("puedes practicar la «litografía de cocina» sobre papel de aluminio: dibuja con lápiz graso, trata con cola de refresco, moja y entinta con tinta al aceite."), svg: flujo("Pasos de la litografía", ["Granear la piedra", "Dibujar con lápiz graso", "Preparar con goma y ácido", "Humedecer y entintar", "Estampar en la prensa"]), v: ["pla-a", "Litografía sobre piedra"] },
    { h: "La serigrafía", p: [
      "La <mark>serigrafía</mark> es el método <b>permeográfico</b>: una <b>pantalla</b> de tejido fino tensado en un marco deja pasar la tinta por unas zonas y la bloquea en otras. Con una <b>rasqueta</b> de goma se arrastra la tinta sobre la pantalla y esta atraviesa la malla hasta el papel o la tela de debajo. Su origen está en las plantillas de estarcido japonesas y chinas; la malla original era de seda, de ahí su nombre.",
      "Es muy versátil: imprime sobre papel, tela, madera, vidrio, metal o plástico, con tintas opacas de colores intensos y planos. Por eso se usa en camisetas, carteles y envases, y fue la técnica preferida del <b>pop art</b>: Warhol la empleó para repetir sus Marilyn y sus latas Campbell.",
    ], svg: rueda("SERIGRAFÍA", ["pantalla", "rasqueta", "tinta opaca", "papel y tela", "repetición", "pop art"]), v: ["pla-b", "Proceso completo de estampado en serigrafía"] },
    { h: "Cómo se hace la pantalla", p: [
      "Hay varias maneras de bloquear la malla. La más sencilla es la <b>plantilla</b> de papel o acetato recortado colocada bajo la pantalla. También se puede pintar directamente con un <b>bloqueador</b> (cola o laca) las zonas que no deben imprimir, o usar el <b>método de reserva</b>: dibujar con cera o lápiz graso, cubrir con bloqueador y disolver luego el dibujo.",
      "El método profesional es el <b>fotográfico</b>: se cubre la pantalla con <b>emulsión fotosensible</b>, se coloca encima un <b>fotolito</b> (el dibujo en negro sobre transparencia) y se expone a la luz ultravioleta. La emulsión se endurece donde recibe luz; donde estaba el dibujo queda blanda y se lava con agua, dejando la malla abierta. Para cada color se prepara una pantalla y se estampa con <b>registro</b>.",
    ], svg: cajas("Bloquear la pantalla", [["Plantilla", "papel recortado"], ["Bloqueador", "pintado a mano"], ["Reserva", "cera y lavado"], ["Fotográfico", "emulsión + fotolito + UV"]]) },
    { h: "El método electrónico: el copy art", p: [
      "El <mark>copy art</mark> o electrografía usa la <b>fotocopiadora</b> como herramienta de creación. Desde los años sesenta y setenta, artistas como <b>Sonia Sheridan</b>, que fundó un taller en Chicago, o Bruno Munari colocaron sobre el cristal manos, objetos, telas o collages, movieron el original durante la copia, alteraron el contraste o copiaron la copia muchas veces hasta degradar la imagen.",
      "La fotocopia permitía obras baratas, rápidas y repetibles, y fue clave en los <b>fanzines</b>, el punk, el arte postal y los carteles de conciertos. Además, las copias de tóner se pueden <b>transferir</b> a otros papeles con disolvente o calor, una técnica muy usada en técnicas mixtas.",
    ], svg: flujo("Experimentar con la fotocopiadora", ["Objetos o collage en el cristal", "Mover el original al copiar", "Copiar la copia", "Ampliar, reducir, contrastar", "Transferir el tóner"]) },
    { h: "La obra gráfica digital", p: [
      "Hoy el método electrónico incluye la <b>impresión digital</b>. La impresión <b>giclée</b> (del francés «rociar») es una impresión de inyección de tinta con pigmentos de alta calidad sobre papel de algodón, usada para ediciones de arte digital y fotografía. La <b>risografía</b> es un sistema de impresión por esténcil, a medio camino entre la serigrafía y la fotocopia, con colores planos muy vivos, muy popular entre ilustradores.",
      "Muchos artistas combinan métodos: dibujan en digital y estampan en serigrafía, o hacen fotolitos con la impresora. La edición sigue las mismas reglas que la obra gráfica tradicional: tirada limitada, numeración y firma.",
    ], svg: versus("Digital frente a tradicional", ["Digital", ["giclée", "risografía", "archivo digital", "tiradas flexibles"]], ["Tradicional", ["piedra o pantalla", "tinta grasa", "proceso manual", "cada estampa única"]]) },
    { h: "Elegir el método", p: [
      "Para un dibujo con matices de lápiz y aguadas, la <b>litografía</b>. Para colores planos, opacos e intensos, o para imprimir sobre tela, la <b>serigrafía</b>. Para un fanzine barato y experimental, el <b>copy art</b> o la <b>riso</b>. Para una edición fiel de una obra digital, la <b>giclée</b>.",
      "Todas comparten la lógica del grabado: una matriz, una tirada, una huella del proceso. Y todas pueden ser obra gráfica original si el artista crea la matriz y controla la edición. Los carteles de Toulouse-Lautrec o las serigrafías de Warhol muestran que la frontera entre arte y comunicación es, a veces, muy fina.",
    ], svg: cajas("Qué método para qué", [["Litografía", "dibujo con matices"], ["Serigrafía", "color plano, tela"], ["Copy art", "fanzine experimental"], ["Riso", "ilustración a tintas"], ["Giclée", "obra digital"]]) },
  ],
  figura: { titulo: "La estampación plana de un vistazo", aria: "Resumen del método planográfico, permeográfico, electrónico y usos", cols: [
    ["Planográfico", ["litografía", "agua y grasa", "piedra caliza", "Senefelder"]],
    ["Permeográfico", ["serigrafía", "pantalla", "rasqueta", "emulsión"]],
    ["Electrónico", ["copy art", "transferencia", "giclée", "risografía"]],
    ["Usos", ["carteles", "camisetas", "fanzines", "pop art"]],
  ] },
  video: ["pla-b", "Proceso completo de estampado en serigrafía"],
  ejemplos: [
    ["Estampa una camiseta con serigrafía de plantilla.", ["Recorta la plantilla en papel.", "Colócala bajo la pantalla sobre la camiseta.", "Pon tinta textil y pasa la rasqueta con fuerza.", "Fija la tinta con calor."], "Estampado de color plano y opaco."],
    ["Explica por qué la tinta solo se pega al dibujo litográfico.", ["El dibujo es graso.", "La preparación hace el fondo receptivo al agua.", "Al mojar, el agua se queda en el fondo.", "La tinta grasa se repele del agua y va al dibujo."], "Rechazo entre grasa y agua."],
    ["Crea una portada de fanzine con copy art.", ["Monta un collage de recortes y objetos.", "Copia moviendo el original en una zona.", "Copia la copia para endurecer el contraste.", "Añade el título a mano y vuelve a copiar."], "Imagen experimental, barata y reproducible."],
  ],
  errores: [
    "Pensar que la litografía tiene relieve: es plana y química.",
    "Usar tinta al agua sobre una pantalla con bloqueador soluble en agua.",
    "Olvidar el registro al estampar varios colores.",
    "Considerar original cualquier impresión digital firmada sin edición controlada.",
  ],
  ejercicios: {
    b: [
      ["¿Quién inventó la litografía y cuándo?", "Alois Senefelder, en 1796."],
      ["¿En qué principio se basa la litografía?", "En que el agua y la grasa se repelen."],
      ["¿Qué herramienta arrastra la tinta en serigrafía?", "La rasqueta."],
      ["¿Qué es el copy art?", "El arte creado con la fotocopiadora."],
    ],
    m: [
      ["Diferencia método planográfico y permeográfico.", "En el planográfico la imagen se separa por química (litografía); en el permeográfico la tinta atraviesa una pantalla (serigrafía)."],
      ["Explica el método fotográfico de la serigrafía.", "Emulsión fotosensible, fotolito y luz UV: lo expuesto endurece y lo tapado se lava y deja pasar la tinta."],
      ["¿Por qué usó Warhol la serigrafía?", "Para repetir imágenes de los medios de forma mecánica, como un producto industrial."],
      ["¿Qué es una impresión giclée?", "Una impresión de inyección de tinta pigmentada de calidad de archivo para ediciones de arte."],
    ],
    a: [
      ["Analiza un cartel de Toulouse-Lautrec como litografía.", "Respuesta abierta: colores planos, siluetas, tipografía integrada, influencia del ukiyo-e, función publicitaria."],
      ["Planifica una serigrafía a tres colores.", "Respuesta abierta: separación de colores, tres pantallas, orden de claro a oscuro, registro y secado."],
      ["Debate: ¿es arte una obra hecha con fotocopiadora?", "Respuesta abierta: intención, proceso creativo, control del artista, ejemplos de Sheridan o fanzines."],
    ],
  },
  quiz: [
    ["La litografía se hace sobre…", ["piedra caliza", "madera", "cobre", "linóleo"], "Solnhofen."],
    ["Agua y grasa…", ["se repelen", "se mezclan", "se evaporan juntas", "son iguales"], "Principio."],
    ["El lápiz litográfico es…", ["graso", "de grafito", "de agua", "de tiza"], "Dibujo."],
    ["La cromolitografía llenó las calles de…", ["carteles", "murales", "esculturas", "mosaicos"], "Siglo XIX."],
    ["El offset deriva de la…", ["litografía", "xilografía", "serigrafía", "punta seca"], "Planchas de metal."],
    ["En serigrafía la tinta…", ["atraviesa una malla", "queda en surcos", "va en lo alto", "se graba con ácido"], "Permeográfico."],
    ["El fotolito es…", ["el dibujo en negro sobre transparencia", "una piedra", "una rasqueta", "una tinta"], "Insolado."],
    ["Las Marilyn de Warhol son…", ["serigrafías", "aguafuertes", "xilografías", "monotipos"], "Pop."],
    ["El copy art usa…", ["la fotocopiadora", "el tórculo", "el buril", "la piedra"], "Electrografía."],
    ["La risografía es popular entre…", ["ilustradores", "escultores", "restauradores", "arquitectos"], "Colores planos."],
  ],
  examen: [
    ["El método electrónico incluye…", ["copy art e impresión digital", "buril", "linóleo", "temple"], "RD 243/2022."],
    ["Para imprimir sobre una camiseta lo más adecuado es…", ["la serigrafía", "la litografía", "el aguafuerte", "la manera negra"], "Tela."],
    ["La preparación de la piedra se hace con…", ["goma arábiga y ácido", "aceite", "cera", "resina"], "Fija la grasa."],
    ["Los toros de Burdeos de Goya son…", ["litografías", "serigrafías", "xilografías", "fotocopias"], "1825."],
  ],
  feynman: ["estampación plana", "litografía y su principio", "serigrafía y la pantalla", "copy art", "impresión digital"],
  mapa: ["ESTAMPACIÓN PLANA", [["Planográfico", "litografía"], ["Permeográfico", "serigrafía"], ["Electrónico", "copy art, digital"], ["Usos", "carteles, textil, fanzines"]]],
  tarjetas: [
    ["Litografía", "Piedra, grasa y agua."],
    ["Senefelder", "Inventor de la litografía, 1796."],
    ["Serigrafía", "Tinta a través de una pantalla."],
    ["Rasqueta", "Arrastra la tinta en la pantalla."],
    ["Emulsión fotosensible", "Endurece con luz UV."],
    ["Copy art", "Arte con fotocopiadora."],
    ["Giclée", "Impresión digital de calidad de archivo."],
    ["Offset", "Impresión industrial derivada de la litografía."],
  ],
  glosario: [
    ["Planográfico", "Método de estampación en el que imagen y fondo están al mismo nivel."],
    ["Permeográfico", "Método en el que la tinta atraviesa una matriz permeable."],
    ["Granear", "Pulir la piedra litográfica para limpiarla y darle textura."],
    ["Tusche", "Tinta litográfica grasa para pluma o pincel."],
    ["Pantalla", "Malla tensada en un marco para serigrafía."],
    ["Bloqueador", "Producto que tapa la malla para que no pase la tinta."],
    ["Transferencia", "Paso de una imagen impresa a otro soporte."],
    ["Fanzine", "Publicación independiente y de bajo coste."],
  ],
  situacion: SIT(
    "Camisetas y carteles de la semana cultural",
    "La semana cultural del instituto necesita carteles y camisetas. La clase diseñará y estampará una identidad visual con serigrafía y un fanzine con copy art.",
    [
      "Diseñad un logotipo y un cartel en dos colores.",
      "Preparad las pantallas por plantilla o por el método fotográfico.",
      "Estampad carteles en papel y camisetas en tela.",
      "Haced un fanzine de programa con fotocopias y collage.",
    ],
    "Carteles, camisetas serigrafiadas y fanzine.",
    [
      "Diseño eficaz y coherente.",
      "Calidad de la estampación y del registro.",
      "Creatividad del fanzine.",
    ],
  ),
  familias: [
    "Mirad la etiqueta de una camiseta estampada: ¿es serigrafía o impresión digital?",
    "Buscad juntos carteles de Toulouse-Lautrec o Mucha.",
    "Haced un fanzine familiar con fotocopias y recortes.",
    "Probad a dibujar con una cera y pintar encima con acuarela: la cera repele el agua, como en la litografía.",
  ],
  saberes: "estampación plana: método planográfico (litografía), método permeográfico (serigrafía) y método electrónico (copy art).",
  ideas: [
    "Litografía de cocina sobre papel de aluminio.",
    "Serigrafía con plantilla de papel en un marco casero.",
    "Taller de copy art con objetos y fotocopiadora.",
    "Comparar una serigrafía, una risografía y una impresión digital.",
  ],
  fuentes: [
    WIKI("Litografía", "Litograf%C3%ADa"),
    WIKI("Serigrafía", "Serigraf%C3%ADa"),
    WIKI("Fotocopiadora", "Fotocopiadora"),
  ],
});
