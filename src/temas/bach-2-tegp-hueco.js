// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · Grabado en hueco: la calcografía (tema ampliado). Dibujos propios en SVG.
const { tema, OBRA, TRUCO, matrices, cajas, flujo, versus, cuadro, rueda, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "Grabado en hueco: la calcografía",
  minutos: 60,
  bloque: "D",
  objetivos: [
    "Explicar cómo funciona la estampación en hueco y el papel del tórculo",
    "Distinguir técnicas directas (buril, punta seca, manera negra) e indirectas (aguafuerte, aguatinta)",
    "Describir el proceso de entintado, limpieza y estampación de una plancha calcográfica",
    "Reconocer las técnicas en obras de Rembrandt, Goya y artistas actuales",
  ],
  claves: ["calcografía", "grabado en hueco", "tórculo", "buril", "punta seca", "rebaba", "manera negra", "aguafuerte", "barniz", "mordiente", "aguatinta", "resina", "tarlatana", "técnica aditiva"],
  pregunta: {
    texto: "Si la tinta está en los surcos, ¿cómo llega al papel?",
    respuesta: "Gracias a la <mark>presión</mark>. Se entinta toda la plancha, se limpia la superficie con una gasa para que la tinta quede solo en los surcos y se pasa por el <b>tórculo</b> con un papel humedecido encima. Los rodillos aprietan tanto que el papel se mete en los surcos y «chupa» la tinta. Por eso los grabados en hueco tienen la <b>huella</b> de la plancha marcada en el papel.",
  },
  bloques: [
    { h: "Qué es la calcografía", p: [
      "La <mark>calcografía</mark> (del griego <i>chalkós</i>, cobre) es el grabado en hueco sobre planchas de metal: tradicionalmente <b>cobre</b>, también cinc, latón o acero, y hoy plásticos como el metacrilato o el acetato. La imagen está formada por <b>surcos y zonas rebajadas</b> que retienen la tinta, al contrario que en el relieve.",
      "Nació en el siglo XV entre orfebres y armeros que decoraban metales, y pronto se convirtió en el medio ideal para la reproducción de imágenes de gran detalle: mapas, retratos, ilustraciones científicas y obras de arte. En España, la <b>Calcografía Nacional</b> conserva las planchas originales de Goya.",
    ], svg: matrices("La tinta en el hueco") },
    { h: "Técnicas directas: el buril", p: [
      "En las <b>técnicas directas</b> el artista abre los surcos con una herramienta, sin productos químicos. El <b>buril</b> es una barra de acero de sección cuadrada o romboidal con la punta afilada en bisel. Se empuja con la palma de la mano y levanta una viruta de metal limpia, dejando un surco en forma de V de bordes nítidos.",
      "Su línea es precisa, elegante y se ensancha o adelgaza según la profundidad. Es una técnica lenta y difícil, que exige años de práctica. Durero la llevó a la perfección; después se usó para la reproducción de cuadros y en los billetes y sellos, por lo difícil que es de falsificar.",
    ], extra: OBRA("Melancolía I", "Alberto Durero", "1514, grabado a buril"), svg: cajas("Técnicas directas", [["Buril", "línea limpia y precisa"], ["Punta seca", "línea con rebaba"], ["Manera negra", "de negro a blanco"], ["Ruleta", "texturas de puntos"]]) },
    { h: "La punta seca y la manera negra", p: [
      "En la <mark>punta seca</mark> se raya la plancha con una punta de acero o diamante, como si se dibujara. El metal desplazado forma a ambos lados del surco una <b>rebaba</b> que retiene tinta y da una línea aterciopelada y cálida. Pero la rebaba se aplasta en el tórculo, así que las tiradas son cortas. Rembrandt la combinó con aguafuerte. Hoy se practica mucho sobre acetato o tetrabrik reciclado.",
      "La <b>manera negra</b> o <i>mezzotinta</i> trabaja al revés: con un <b>graneador</b> se pica toda la plancha hasta que estampa un negro profundo y aterciopelado, y luego se aplanan con <b>rascador</b> y <b>bruñidor</b> las zonas que deben ser grises o blancas. Fue la técnica preferida para reproducir retratos pictóricos en el siglo XVIII.",
    ], extra: TRUCO("prueba la punta seca sobre la cara plateada de un brik limpio: corta, raya, entinta y estampa con el tórculo o con mucha presión."), svg: versus("Dos técnicas directas", ["Punta seca", ["rayar el metal", "rebaba", "línea aterciopelada", "tiradas cortas"]], ["Manera negra", ["granear toda la plancha", "parte del negro", "bruñir las luces", "tonos suaves"]]), v: ["hue-c", "El grabado a punta seca"] },
    { h: "Técnicas indirectas: el aguafuerte", p: [
      "En las <b>técnicas indirectas</b> el surco lo abre un <b>ácido</b> o <b>mordiente</b>. En el <mark>aguafuerte</mark> se cubre la plancha con un <b>barniz</b> protector y se dibuja sobre él con una punta, descubriendo el metal sin rayarlo. Después se sumerge en el mordiente, que solo ataca las líneas descubiertas.",
      "El tiempo de inmersión controla la profundidad: más tiempo, líneas más negras. Se pueden hacer <b>mordidas sucesivas</b> tapando las líneas que deben quedar finas. La línea del aguafuerte es libre y suelta, como la del dibujo, por eso atrajo a pintores como Rembrandt, Goya o Picasso. Hoy se usa <b>percloruro de hierro</b> para el cobre, menos peligroso que el ácido nítrico.",
    ], svg: flujo("Pasos del aguafuerte", ["Desengrasar la plancha", "Aplicar el barniz", "Dibujar con la punta", "Morder en el mordiente", "Quitar el barniz y estampar"]), v: ["hue-b", "Técnicas de grabado: aguafuerte y aguatinta"] },
    { h: "La aguatinta y otras indirectas", p: [
      "El aguafuerte solo hace líneas. Para conseguir <b>manchas</b> de tono se usa la <mark>aguatinta</mark>: se espolvorea <b>resina</b> en polvo sobre la plancha y se calienta para que se funda en granitos. Al morder, el ácido ataca alrededor de los granos y crea una superficie porosa que retiene la tinta. Tapando zonas con barniz y mordiendo varias veces se logran escalas de grises.",
      "Otras técnicas indirectas son el <b>barniz blando</b>, que recoge texturas de telas u hojas presionadas sobre él; el <b>azúcar</b> o lavis, que permite pintar con pincel; y la <b>fotoincisión</b>, que transfiere fotografías con barnices fotosensibles. Goya combinó aguafuerte y aguatinta en los <b>Caprichos</b> y los <b>Desastres de la guerra</b>.",
    ], extra: OBRA("El sueño de la razón produce monstruos", "Francisco de Goya", "1799, aguafuerte y aguatinta, serie Los Caprichos"), svg: cuadro("Técnicas indirectas", [["Técnica", "Da", "Cómo"], ["Aguafuerte", "líneas", "barniz y punta"], ["Aguatinta", "manchas", "resina y ácido"], ["Barniz blando", "texturas", "presionar objetos"], ["Azúcar", "pincelada", "reserva soluble"]]) },
    { h: "Entintar y estampar", p: [
      "La estampación calcográfica es un oficio en sí. Se calienta un poco la plancha y se extiende la tinta con una espátula o un tampón, presionando para que entre en todos los surcos. Después se <b>limpia la superficie</b> con <b>tarlatana</b>, una gasa almidonada, con movimientos circulares, y se termina con papel de seda o la palma de la mano para dejar blancos limpios.",
      "El papel de grabado, grueso y de algodón, se <b>humedece</b> antes para que se ablande. La plancha se coloca en la platina del <b>tórculo</b>, encima el papel y unas mantillas de fieltro, y se pasa entre los rodillos con presión alta. Al levantar el papel aparece la estampa con su huella. Se seca plana, entre cartones.",
    ], svg: flujo("Estampar en hueco", ["Entintar en todos los surcos", "Limpiar con tarlatana", "Papel humedecido", "Pasar por el tórculo", "Secar plano"]) },
    { h: "Seguridad y técnicas no tóxicas", p: [
      "El grabado tradicional usa ácidos, barnices con disolventes y resinas en polvo. En el aula se trabaja con <b>ventilación</b>, gafas y guantes, y siempre se añade el ácido al agua, nunca al revés. Por eso se han desarrollado técnicas de <b>grabado no tóxico</b>: mordientes salinos como el <b>percloruro de hierro</b> o el sulfato de cobre, barnices acrílicos que se quitan con agua y tintas lavables con aceite vegetal y jabón.",
      "También se puede grabar en hueco sin ácidos con <b>técnicas aditivas</b>, como la <b>colagrafía</b>, que construye la plancha pegando materiales y texturas sobre un cartón, o con punta seca sobre acetato.",
    ], svg: rueda("GRABADO MÁS SEGURO", ["ventilación", "gafas y guantes", "ácido sobre agua", "percloruro", "barniz acrílico", "colagrafía"]) },
    { h: "Grandes grabadores en hueco", p: [
      "<b>Durero</b> y <b>Marcantonio Raimondi</b> dominaron el buril. <b>Rembrandt</b> hizo del aguafuerte y la punta seca un medio de luz y emoción. <b>Piranesi</b> grabó vistas monumentales de Roma y sus fantásticas <i>Cárceles</i>. <b>Goya</b> convirtió el grabado en crítica social y testimonio de la guerra.",
      "En el siglo XX, <b>Picasso</b> grabó la <i>Suite Vollard</i>; <b>Joan Miró</b> y <b>Antoni Tàpies</b> experimentaron con texturas y collages en la plancha; y artistas actuales siguen usando la calcografía junto con medios digitales. Visitar la Calcografía Nacional o el Museo del Grabado Español Contemporáneo de Marbella permite verlo de cerca.",
    ], svg: cajas("Maestros", [["Durero", "buril"], ["Rembrandt", "aguafuerte y punta seca"], ["Piranesi", "vistas de Roma"], ["Goya", "Caprichos, Desastres"], ["Picasso", "Suite Vollard"], ["Tàpies", "texturas"]]) },
  ],
  figura: { titulo: "La calcografía de un vistazo", aria: "Resumen de la estampación en hueco, técnicas directas, indirectas y estampación", cols: [
    ["Hueco", ["tinta en surcos", "planchas de metal", "tórculo", "huella"]],
    ["Directas", ["buril", "punta seca", "manera negra", "rebaba"]],
    ["Indirectas", ["aguafuerte", "aguatinta", "barniz blando", "mordiente"]],
    ["Estampar", ["entintar", "tarlatana", "papel húmedo", "presión"]],
  ] },
  video: ["hue-a", "Técnicas artísticas: grabado calcográfico"],
  ejemplos: [
    ["Haz una punta seca sobre acetato.", ["Coloca el dibujo debajo del acetato.", "Raya con una punta, más fuerte en las sombras.", "Entinta y limpia con tarlatana.", "Estampa en el tórculo con papel húmedo."], "Línea aterciopelada gracias a la rebaba."],
    ["Planifica un aguafuerte con dos mordidas.", ["Dibuja todas las líneas en el barniz.", "Muerde unos minutos.", "Tapa las líneas que deben quedar finas.", "Vuelve a morder para oscurecer el resto."], "Dos intensidades de línea."],
    ["Explica las manchas de El sueño de la razón.", ["Los fondos grises y negros no son líneas.", "Son granos de resina mordidos: aguatinta.", "Las figuras están dibujadas con aguafuerte."], "Goya combina aguafuerte y aguatinta."],
  ],
  errores: [
    "Confundir punta seca con aguafuerte: en la punta seca no hay ácido.",
    "Echar agua sobre el ácido en vez de ácido sobre el agua.",
    "Limpiar la plancha tanto que se saca la tinta de los surcos.",
    "Estampar con el papel seco: no recoge la tinta.",
    "Pensar que la manera negra parte del blanco: parte del negro.",
  ],
  ejercicios: {
    b: [
      ["¿Qué significa calcografía?", "Grabado en hueco sobre metal; de chalkós, cobre."],
      ["¿Qué herramienta se empuja con la palma para abrir surcos limpios?", "El buril."],
      ["¿Qué es la rebaba?", "El metal levantado a los lados del surco de la punta seca."],
      ["¿Para qué sirve la tarlatana?", "Para limpiar la superficie de la plancha dejando la tinta en los surcos."],
    ],
    m: [
      ["Diferencia técnicas directas e indirectas.", "En las directas el artista abre el surco con herramientas; en las indirectas lo hace un mordiente."],
      ["¿Cómo se consiguen manchas en calcografía?", "Con la aguatinta: resina fundida en granos y mordida por el ácido."],
      ["¿Por qué las tiradas de punta seca son cortas?", "Porque la rebaba se aplasta con la presión del tórculo."],
      ["¿Por qué se humedece el papel?", "Para que se ablande y penetre en los surcos al recibir la presión."],
    ],
    a: [
      ["Analiza un grabado de Los desastres de la guerra.", "Respuesta abierta: técnicas (aguafuerte, aguatinta, punta seca), composición, contraste, denuncia de la violencia."],
      ["Compara el relieve y el hueco en proceso y resultado.", "Relieve: se tallan blancos, presión suave, sin huella marcada. Hueco: surcos con tinta, presión fuerte, huella y línea fina."],
      ["Diseña un protocolo de grabado no tóxico para el aula.", "Respuesta abierta: percloruro, barniz acrílico, tintas lavables, colagrafía, EPI y gestión de residuos."],
    ],
  },
  quiz: [
    ["En la calcografía la tinta queda…", ["en los surcos", "en lo alto", "a la misma altura", "solo en los bordes"], "Hueco."],
    ["El buril deja un surco…", ["limpio en V", "con rebaba", "granulado", "difuso"], "Viruta."],
    ["La rebaba es propia de la…", ["punta seca", "aguafuerte", "xilografía", "serigrafía"], "Directa."],
    ["La manera negra parte de…", ["una plancha que estampa negro", "una plancha lisa", "el ácido", "el barniz blando"], "Graneador."],
    ["En el aguafuerte el surco lo abre…", ["el mordiente", "el buril", "el rodillo", "el tórculo"], "Ácido."],
    ["La aguatinta usa…", ["resina en polvo", "cera", "linóleo", "seda"], "Manchas."],
    ["Los Caprichos son de…", ["Goya", "Rembrandt", "Durero", "Piranesi"], "1799."],
    ["El tórculo…", ["aplica gran presión", "calienta la cera", "corta el papel", "seca la tinta"], "Prensa."],
    ["Melancolía I es un…", ["buril de Durero", "aguafuerte de Goya", "linóleo de Picasso", "monotipo de Degas"], "1514."],
    ["La colagrafía es una técnica…", ["aditiva", "con ácido", "de buril", "de piedra"], "Pegar texturas."],
  ],
  examen: [
    ["Con el ácido siempre se añade…", ["el ácido al agua", "el agua al ácido", "alcohol", "nada"], "Seguridad."],
    ["Un mordiente menos peligroso para el cobre es…", ["el percloruro de hierro", "el ácido nítrico", "la trementina", "el alcohol"], "Sal."],
    ["La huella de la plancha aparece porque…", ["la presión hunde el papel", "se pinta a mano", "es un error", "se dibuja después"], "Tórculo."],
    ["Las vistas de Roma y las Cárceles son de…", ["Piranesi", "Goya", "Miró", "Durero"], "Siglo XVIII."],
  ],
  feynman: ["qué es la calcografía", "buril, punta seca y manera negra", "aguafuerte y aguatinta", "entintar y estampar", "grabado no tóxico"],
  mapa: ["CALCOGRAFÍA", [["Hueco", "tinta en surcos"], ["Directas", "buril, punta seca"], ["Indirectas", "aguafuerte, aguatinta"], ["Estampar", "tarlatana y tórculo"]]],
  tarjetas: [
    ["Calcografía", "Grabado en hueco sobre metal."],
    ["Buril", "Surco limpio empujado a mano."],
    ["Punta seca", "Raya con rebaba aterciopelada."],
    ["Manera negra", "Del negro al blanco bruñendo."],
    ["Aguafuerte", "Barniz, dibujo y ácido."],
    ["Aguatinta", "Resina y ácido para manchas."],
    ["Tarlatana", "Gasa para limpiar la plancha."],
    ["Tórculo", "Prensa de rodillos."],
  ],
  glosario: [
    ["Mordiente", "Sustancia que corroe el metal descubierto."],
    ["Barniz de grabado", "Capa que protege la plancha del ácido."],
    ["Mordida", "Cada inmersión de la plancha en el mordiente."],
    ["Graneador", "Herramienta dentada para picar la plancha en la manera negra."],
    ["Bruñidor", "Herramienta pulida que alisa el metal para aclarar."],
    ["Barniz blando", "Barniz que no endurece y recoge texturas."],
    ["Colagrafía", "Grabado con una plancha hecha de materiales pegados."],
    ["Mantilla", "Fieltro que reparte la presión del tórculo."],
  ],
  situacion: SIT(
    "Desastres de hoy",
    "Inspirándoos en Goya, cada alumno grabará una estampa sobre un problema actual (guerra, migraciones, crisis climática) con punta seca o aguafuerte.",
    [
      "Investigad Los desastres de la guerra y su contexto.",
      "Elegid un tema actual y haced bocetos en blanco y negro.",
      "Grabad la plancha con punta seca o aguafuerte y aguatinta.",
      "Estampad una pequeña tirada y exponedla con un texto.",
    ],
    "Serie de estampas con textos de contexto.",
    [
      "Dominio técnico de la calcografía.",
      "Fuerza expresiva y claridad del mensaje.",
      "Calidad y limpieza de la estampación.",
    ],
  ),
  familias: [
    "Mirad un billete con lupa: algunas líneas están grabadas en hueco y se notan al tacto.",
    "Visitad en línea la Calcografía Nacional y buscad las planchas de Goya.",
    "Comentad juntos un grabado de Los desastres de la guerra.",
    "Probad a rayar la cara interior de un brik con un clavo y entintarla con betún.",
  ],
  saberes: "estampación en hueco: calcografía; técnicas directas e indirectas; materiales, útiles, maquinaria y soportes.",
  ideas: [
    "Punta seca sobre acetato o tetrabrik reciclado.",
    "Colagrafía con texturas pegadas en cartón.",
    "Aguafuerte con percloruro de hierro en cobre.",
    "Comparar Durero, Rembrandt y Goya con lupa.",
  ],
  fuentes: [
    WIKI("Calcografía", "Calcograf%C3%ADa"),
    WIKI("Aguafuerte", "Aguafuerte"),
    { t: "Calcografía Nacional, Real Academia de Bellas Artes de San Fernando", url: "https://www.realacademiabellasartessanfernando.com/es/calcografia-nacional" },
  ],
});
