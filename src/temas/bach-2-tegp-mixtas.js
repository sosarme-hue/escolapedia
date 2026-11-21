// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · Técnicas mixtas, alternativas e imagen digital (tema ampliado). Dibujos propios en SVG.
const { tema, OBRA, TRUCO, cajas, flujo, versus, cuadro, rueda, crono, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "Técnicas mixtas, alternativas e imagen digital",
  minutos: 60,
  bloque: "E",
  objetivos: [
    "Experimentar con técnicas alternativas: collage, frottage, decollage, transferencias y materiales no artísticos",
    "Combinar técnicas de forma coherente en una obra mixta",
    "Conocer los fundamentos de la imagen digital: píxel, resolución, vector y color",
    "Usar herramientas digitales de dibujo y pintura y valorar el arte digital",
  ],
  claves: ["técnica mixta", "collage", "papier collé", "fotomontaje", "decollage", "frottage", "transferencia", "assemblage", "píxel", "resolución", "mapa de bits", "vector", "RGB", "CMYK", "capas"],
  pregunta: {
    texto: "¿Qué tienen en común un periódico pegado en un cuadro de Picasso y una tableta gráfica?",
    respuesta: "Que ambos ampliaron lo que puede ser una obra gráfico-plástica. En 1912 Picasso y Braque pegaron papeles reales en sus cuadros y nació el <mark>collage</mark>: cualquier material podía entrar en el arte. Hoy la <b>imagen digital</b> amplía de nuevo las herramientas: pinceles que imitan la acuarela, capas, deshacer infinito. En los dos casos, lo importante sigue siendo la idea y la composición.",
  },
  bloques: [
    { h: "Más allá de las técnicas tradicionales", p: [
      "Desde las vanguardias, los artistas han usado <b>otras técnicas, materiales y procedimientos</b>: papeles de periódico, telas, arena, fotografías, objetos encontrados, plásticos, luz, fotocopias o pantallas. Llamamos <mark>técnicas mixtas</mark> a las obras que combinan varios procedimientos, y <b>técnicas alternativas</b> a las que usan materiales o procesos no convencionales.",
      "Su interés no es solo la novedad: cada material aporta un <b>significado</b>. Un recorte de prensa trae la actualidad; un tejido, la memoria; un plástico reciclado, una reflexión sobre el consumo. Por eso elegir materiales es también una decisión expresiva.",
    ], svg: rueda("TÉCNICAS ALTERNATIVAS", ["collage", "frottage", "decollage", "transferencia", "assemblage", "materiales reciclados"]) },
    { h: "El collage y el fotomontaje", p: [
      "El <mark>collage</mark> consiste en pegar papeles u otros materiales sobre un soporte. Picasso y Braque inventaron el <b>papier collé</b> en 1912; los dadaístas como <b>Hannah Höch</b> crearon el <b>fotomontaje</b> con fotografías de revistas para criticar la sociedad; Matisse pintó con tijeras sus <b>gouaches recortados</b>.",
      "Para hacer un collage duradero hay que elegir bien el <b>adhesivo</b>: médium acrílico, cola de encuadernar o cola blanca de pH neutro, nunca pegamentos que amarillean. Se pueden rasgar o recortar los papeles, superponerlos con transparencias y unificarlos después con pintura o veladuras.",
    ], extra: OBRA("Corte con el cuchillo de cocina dadá", "Hannah Höch", "1919-1920, fotomontaje y collage"), svg: crono("Collage y montaje", [["1912", "papier collé cubista"], ["1919", "fotomontaje dadá"], ["1925", "frottage de Ernst"], ["1950", "decollage"], ["1953", "gouaches recortados de Matisse"], ["1956", "collage pop de Hamilton"]]), v: ["mix-a", "El collage"] },
    { h: "Frottage, decollage, grattage y transferencias", p: [
      "El <b>frottage</b>, de Max Ernst, consiste en frotar un lápiz o una cera sobre un papel apoyado en una superficie con textura. Su pariente pictórico es el <b>grattage</b>: raspar la pintura fresca de un lienzo colocado sobre objetos. El <b>decollage</b> hace lo contrario que el collage: arranca capas de carteles pegados, como hicieron Mimmo Rotella o los <i>affichistes</i> franceses.",
      "Las <b>transferencias</b> pasan una imagen impresa a otro soporte: con médium acrílico, con disolvente sobre fotocopias de tóner o con calor. Otras técnicas alternativas son la <b>decalcomanía</b> (apretar pintura entre dos superficies y separarlas), el <b>dripping</b> o goteo de Pollock y la <b>cianotipia</b>, una impresión azul a la luz del sol con productos fotosensibles.",
    ], extra: TRUCO("para transferir una fotocopia, pon la copia boca abajo sobre el papel, empápala de médium acrílico, deja secar y frota con el dedo mojado hasta retirar el papel: queda solo el tóner."), svg: cuadro("Técnicas alternativas", [["Técnica", "Qué se hace"], ["Frottage", "frotar sobre textura"], ["Grattage", "raspar pintura"], ["Decollage", "arrancar carteles"], ["Decalcomanía", "aplastar pintura"], ["Cianotipia", "imprimir con el sol"]]) },
    { h: "Materiales no artísticos y assemblage", p: [
      "El <b>assemblage</b> lleva el collage a las tres dimensiones con objetos encontrados. En España, <b>Antoni Tàpies</b> mezcló pintura con arena, polvo de mármol, paja y objetos cotidianos para crear superficies como muros, y <b>Manolo Millares</b> usó arpillera quemada y cosida para hablar de la violencia. <b>Robert Rauschenberg</b> llamó <i>combines</i> a sus cuadros con objetos.",
      "Hoy muchos artistas trabajan con <b>materiales reciclados</b>, plásticos recuperados del mar o tejidos usados, uniendo creación y sostenibilidad, como el ghanés El Anatsui con sus tapices de tapones metálicos. Hay que asegurar que el material esté limpio, que no sea tóxico y que se fije bien al soporte.",
    ], svg: cajas("Materia como lenguaje", [["Tàpies", "arena y polvo de mármol"], ["Millares", "arpillera"], ["Rauschenberg", "combines"], ["El Anatsui", "tapones metálicos"]]) },
    { h: "Combinar técnicas con sentido", p: [
      "Una obra mixta funciona cuando las técnicas <b>dialogan</b>. Algunas reglas prácticas: trabajar de lo <b>húmedo a lo seco</b> y de lo <b>magro a lo graso</b>; usar un <b>soporte rígido</b> si hay mucho peso o agua; fijar cada capa antes de la siguiente; y probar las combinaciones en una muestra.",
      "También importa la <b>coherencia</b>: no se trata de acumular técnicas, sino de que cada una aporte algo. Por ejemplo, un fondo de acuarela para la atmósfera, collage para la textura y línea de tinta para el dibujo. Al final se puede proteger el conjunto con un barniz acrílico.",
    ], svg: flujo("Construir una obra mixta", ["Soporte rígido e imprimado", "Fondos húmedos: acuarela, acrílico", "Collage y texturas", "Técnicas secas y línea", "Barniz protector"]) },
    { h: "La imagen digital: fundamentos", p: [
      "Una <mark>imagen digital</mark> puede ser de dos tipos. La de <b>mapa de bits</b> está formada por <b>píxeles</b>, pequeños cuadrados de color; su calidad depende de la <b>resolución</b>, que se mide en píxeles por pulgada (ppp): 72 ppp bastan para pantalla, 300 ppp para imprimir. Si se amplía demasiado, se pixela. La imagen <b>vectorial</b> está hecha de fórmulas matemáticas (líneas, curvas, rellenos) y se puede ampliar sin perder calidad: es ideal para logotipos e ilustración plana.",
      "El color se describe en <b>RGB</b> (rojo, verde, azul), modelo aditivo de las pantallas, o en <b>CMYK</b> (cian, magenta, amarillo, negro), modelo sustractivo de la imprenta. Una imagen que se imprimirá debe prepararse en CMYK para que los colores no cambien.",
    ], svg: versus("Dos tipos de imagen", ["Mapa de bits", ["píxeles", "depende de la resolución", "fotografía y pintura digital", "JPG, PNG"]], ["Vectorial", ["curvas matemáticas", "escalable sin pérdida", "logos e ilustración", "SVG, PDF"]]) },
    { h: "Dibujar y pintar en digital", p: [
      "El arte digital se hace con una <b>tableta gráfica</b> o una pantalla táctil y un lápiz sensible a la presión, con programas de pintura (Krita, GIMP, Procreate, Photoshop) o de vectores (Inkscape, Illustrator). Las <b>capas</b> permiten separar fondo, figura, línea y color; los <b>modos de fusión</b> y las máscaras, combinarlos; y los <b>pinceles digitales</b> imitan grafito, acuarela u óleo.",
      "Su gran ventaja es la flexibilidad: deshacer, probar variaciones, cambiar colores o tamaños. Su riesgo es depender de la herramienta: los fundamentos del dibujo, el valor, el color y la composición son los mismos. Muchas obras actuales son <b>híbridas</b>: bocetos a mano escaneados y coloreados en digital, o imágenes digitales estampadas en serigrafía.",
    ], svg: cajas("Herramientas digitales", [["Tableta", "lápiz con presión"], ["Capas", "separar elementos"], ["Pinceles", "imitan técnicas"], ["Modos de fusión", "combinar capas"], ["Software libre", "Krita, GIMP, Inkscape"], ["Exportar", "RGB o CMYK"]]), v: ["mix-b", "Cómo empezar en dibujo digital"] },
    { h: "El arte digital hoy", p: [
      "El <b>arte digital</b> va desde la ilustración y el cómic hasta el arte generativo programado con código, la animación, la realidad virtual o las instalaciones interactivas. Pioneras como <b>Vera Molnár</b> dibujaron con ordenador desde los años sesenta, y hoy artistas como <b>Refik Anadol</b> crean obras con grandes cantidades de datos.",
      "La <b>inteligencia artificial</b> generativa plantea nuevas preguntas sobre autoría, originalidad y derechos de los artistas cuyas obras se usan para entrenarla. Como creador, conviene conocerla con espíritu crítico, citar las herramientas usadas y no presentar como propio lo que no lo es.",
    ], svg: rueda("ARTE DIGITAL", ["ilustración", "arte generativo", "animación", "realidad virtual", "instalación interactiva", "IA y debate"]) },
  ],
  figura: { titulo: "Técnicas mixtas e imagen digital de un vistazo", aria: "Resumen de collage, técnicas alternativas, obra mixta e imagen digital", cols: [
    ["Collage", ["papier collé", "fotomontaje", "adhesivos neutros", "Höch, Matisse"]],
    ["Alternativas", ["frottage", "decollage", "transferencia", "assemblage"]],
    ["Obra mixta", ["húmedo a seco", "magro a graso", "soporte rígido", "coherencia"]],
    ["Digital", ["píxel y vector", "resolución", "RGB y CMYK", "capas"]],
  ] },
  video: ["mix-a", "El collage"],
  ejemplos: [
    ["Prepara una ilustración digital para imprimir en A4.", ["A4 a 300 ppp son unos 2480 × 3508 píxeles.", "Trabaja en capas: boceto, línea, color, luces.", "Convierte a CMYK antes de imprimir.", "Exporta en PDF o TIFF."], "Archivo listo para imprenta sin pixelado."],
    ["Crea una obra mixta sobre la memoria familiar.", ["Fondo de acrílico en tonos sepia.", "Transferencia de fotos antiguas.", "Collage de cartas o tejidos.", "Línea de tinta y barniz final."], "Cada material aporta significado."],
    ["Haz un frottage para un collage.", ["Recoge texturas con cera: madera, monedas, hojas.", "Recorta los papeles texturados.", "Compón un paisaje con ellos.", "Pégalos con médium acrílico."], "Collage de texturas al modo de Max Ernst."],
  ],
  errores: [
    "Acumular técnicas sin relación con la idea.",
    "Usar pegamentos que amarillean en collages.",
    "Imprimir una imagen de 72 ppp en gran formato.",
    "Preparar en RGB un archivo para imprenta.",
    "Creer que el arte digital no necesita saber dibujar.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es una técnica mixta?", "Una obra que combina dos o más técnicas o materiales."],
      ["¿Quiénes inventaron el papier collé?", "Picasso y Braque, en 1912."],
      ["¿Qué es un píxel?", "El cuadrado mínimo de color de una imagen de mapa de bits."],
      ["¿Qué modelo de color usan las pantallas?", "El RGB."],
    ],
    m: [
      ["Diferencia collage y decollage.", "El collage añade y pega materiales; el decollage arranca capas de carteles."],
      ["¿Por qué un logotipo debe hacerse en vectorial?", "Porque se puede ampliar sin perder calidad."],
      ["Explica la regla de húmedo a seco en una obra mixta.", "Las técnicas con agua van primero para no disolver ni manchar las secas."],
      ["¿Qué aportó Tàpies a las técnicas alternativas?", "Usó arena, polvo de mármol y objetos para crear superficies matéricas como muros."],
    ],
    a: [
      ["Diseña una obra híbrida: boceto manual, color digital y estampación.", "Respuesta abierta: escaneado, capas, separación de colores, fotolito y serigrafía."],
      ["Debate sobre el uso de la IA en un proyecto escolar.", "Respuesta abierta: transparencia, autoría, derechos, aprendizaje propio."],
      ["Crea una obra con materiales reciclados y justifica su mensaje.", "Respuesta abierta: elección del material, técnica de fijación, relación con el consumo o el medio ambiente."],
    ],
  },
  quiz: [
    ["El papier collé nació en…", ["1912", "1800", "1960", "2000"], "Cubismo."],
    ["El fotomontaje dadá se asocia a…", ["Hannah Höch", "Rembrandt", "Monet", "Durero"], "Berlín."],
    ["Frotar un lápiz sobre una textura es…", ["frottage", "decollage", "grattage", "dripping"], "Max Ernst."],
    ["Arrancar capas de carteles es…", ["decollage", "collage", "assemblage", "giclée"], "Affichistes."],
    ["La cianotipia imprime con…", ["luz solar", "un tórculo", "una pantalla", "ácido"], "Azul."],
    ["Usó arpillera quemada…", ["Manolo Millares", "Tàpies", "Mondrian", "Matisse"], "El Paso."],
    ["Para imprimir se recomiendan…", ["300 ppp", "72 ppp", "10 ppp", "1 ppp"], "Resolución."],
    ["La imagen vectorial…", ["se amplía sin perder calidad", "se pixela", "solo es foto", "no tiene color"], "Fórmulas."],
    ["El modelo de color de la imprenta es…", ["CMYK", "RGB", "HSL", "Pantone solo"], "Sustractivo."],
    ["En pintura digital, separar fondo y figura se hace con…", ["capas", "píxeles", "ppp", "vectores"], "Organización."],
  ],
  examen: [
    ["Un adhesivo adecuado para collage es…", ["médium acrílico", "celo", "pegamento instantáneo", "cola que amarillea"], "Conservación."],
    ["El assemblage es…", ["collage con objetos tridimensionales", "un grabado", "un tipo de píxel", "una acuarela"], "Objetos."],
    ["Una imagen ampliada en exceso se…", ["pixela", "vectoriza", "convierte a CMYK", "barniza"], "Mapa de bits."],
    ["Vera Molnár es pionera del…", ["arte por ordenador", "temple", "grabado a buril", "fresco"], "Años sesenta."],
  ],
  feynman: ["técnica mixta y alternativa", "collage y fotomontaje", "frottage, decollage y transferencias", "mapa de bits y vector", "arte digital e IA"],
  mapa: ["MIXTAS Y DIGITAL", [["Collage", "papel, foto"], ["Alternativas", "frottage, assemblage"], ["Obra mixta", "orden y coherencia"], ["Digital", "píxel, vector, capas"]]],
  tarjetas: [
    ["Collage", "Pegar materiales sobre un soporte."],
    ["Fotomontaje", "Collage con fotografías."],
    ["Frottage", "Frotar sobre una textura."],
    ["Decollage", "Arrancar capas de carteles."],
    ["Assemblage", "Collage con objetos."],
    ["Píxel", "Unidad de la imagen de mapa de bits."],
    ["Vectorial", "Imagen escalable sin pérdida."],
    ["CMYK", "Colores de la imprenta."],
  ],
  glosario: [
    ["Papier collé", "Collage con papeles pegados del cubismo."],
    ["Grattage", "Raspado de pintura fresca sobre una textura."],
    ["Transferencia", "Paso de una imagen impresa a otro soporte."],
    ["Cianotipia", "Proceso fotográfico que da imágenes azules con la luz solar."],
    ["Resolución", "Número de píxeles por pulgada de una imagen."],
    ["Mapa de bits", "Imagen formada por píxeles."],
    ["Modo de fusión", "Forma en que una capa digital se combina con las de debajo."],
    ["Arte generativo", "Arte creado mediante reglas o programas."],
  ],
  situacion: SIT(
    "Archivo de la memoria",
    "El centro celebra su aniversario. Cada alumno creará una obra mixta sobre la historia del barrio o de su familia, y la clase hará una versión digital para la web.",
    [
      "Reunid fotos, documentos y objetos (con permiso).",
      "Cread la obra combinando transferencias, collage y pintura.",
      "Digitalizad la obra y cread una versión interactiva o animada.",
      "Exponed las obras físicas y publicad las digitales.",
    ],
    "Serie de obras mixtas y galería digital.",
    [
      "Uso coherente y técnicamente correcto de varias técnicas.",
      "Calidad de la versión digital (resolución, color).",
      "Fuerza del mensaje sobre la memoria.",
    ],
  ),
  familias: [
    "Haced juntos un collage con revistas viejas sobre un tema familiar.",
    "Probad el frottage con monedas y hojas.",
    "Mirad una foto en el móvil ampliándola hasta ver los píxeles.",
    "Probad un programa de dibujo libre como Krita.",
  ],
  saberes: "otras técnicas, materiales y procedimientos en la expresión gráfico-plástica; la imagen digital; arte digital.",
  ideas: [
    "Muestrario de técnicas alternativas en tarjetas.",
    "Transferencias con médium acrílico.",
    "Cianotipias con objetos del entorno.",
    "Ilustración digital por capas a partir de un boceto escaneado.",
  ],
  fuentes: [
    WIKI("Collage", "Collage"),
    WIKI("Arte digital", "Arte_digital"),
    { t: "Krita, programa libre de pintura digital", url: "https://krita.org/es/" },
  ],
});
