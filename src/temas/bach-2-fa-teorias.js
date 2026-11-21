// Fundamentos Artísticos 2º Bachillerato · Tema 2. Qué es el arte: teorías, arte conceptual y arte objeto. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, linea, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Qué es el arte: teorías, arte conceptual y arte objeto",
  saber: ["A"],
  objetivos: [
    "Conocer cómo ha cambiado la definición de arte a lo largo de la historia",
    "Distinguir las teorías de la imitación, la expresión, la forma y la institucional",
    "Relacionar la belleza y la estética con las distintas épocas",
    "Explicar el ready-made y el arte objeto a partir de Duchamp",
    "Analizar obras de arte conceptual y valorar el debate que provocan",
  ],
  claves: ["mímesis", "téchne", "bellas artes", "estética", "expresión", "formalismo", "teoría institucional", "ready-made", "arte objeto", "arte conceptual", "idea", "desmaterialización"],
  pregunta: {
    texto: "Si un urinario firmado puede ser una de las obras más influyentes del siglo XX, ¿qué hace que algo sea arte?",
    respuesta: "No hay una única respuesta, y precisamente por eso existen las <mark>teorías del arte</mark>. Para los griegos, el arte imitaba la naturaleza; para los románticos, expresaba los sentimientos del artista; para los formalistas, era una organización especial de líneas y colores. Cuando <b>Marcel Duchamp</b> envió en 1917 un urinario con el título <i>Fuente</i> a una exposición, mostró que la decisión del artista y el contexto del museo también pueden convertir un objeto en arte. Desde entonces, la pregunta sigue abierta.",
  },
  lectura: {
    titulo: "Una caja de detergente en la galería",
    html: `<p>Nueva York, 1964. En la Stable Gallery se amontonan cajas de madera pintadas y serigrafiadas por Andy Warhol para que parezcan las cajas de cartón del estropajo Brillo, que cualquiera podía ver en un supermercado.</p><p>El filósofo Arthur Danto entró, miró y se quedó pensando: si a simple vista no hay diferencia entre la caja de la tienda y la caja de la galería, ¿por qué una es arte y la otra no? Su respuesta cambió la filosofía del arte: la diferencia no está en lo que se ve, sino en las ideas y en el «mundo del arte» que rodea a la obra. Este tema recorre esa pregunta desde los griegos hasta hoy.</p>`,
  },
  bloques: [
    { h: "El arte como técnica e imitación", p: [
      "En la Grecia antigua no existía nuestra palabra «arte». Los griegos hablaban de <mark>téchne</mark>, que significaba cualquier saber hacer con reglas: la escultura, pero también la medicina o la navegación. Los romanos la tradujeron como <i>ars</i>. El escultor era un artesano cualificado, no un genio inspirado.",
      "Platón y Aristóteles definieron la pintura y la escultura como <b>mímesis</b>, es decir, imitación de la naturaleza. Platón desconfiaba de ellas, porque copiaban apariencias y alejaban de la verdad; Aristóteles, en cambio, pensaba que imitar es natural en el ser humano y que nos enseña. Esta idea de que el arte imita la realidad dominó durante siglos y todavía hoy está en la expresión popular «parece de verdad».",
    ], svg: versus("Dos visiones de la mímesis", ["Platón", ["copia de una copia", "aleja de la verdad", "engaña los sentidos", "desconfianza"]], ["Aristóteles", ["imitar es natural", "enseña y agrada", "mejora la realidad", "valoración positiva"]]) },
    { h: "Belleza, bellas artes y estética", p: [
      "En el Renacimiento, pintores como Leonardo reclamaron que su oficio era una <b>actividad intelectual</b>, no solo manual. En 1563 se fundó en Florencia la primera Academia de Dibujo. En el siglo XVIII, el término <mark>bellas artes</mark> agrupó la pintura, la escultura, la arquitectura, la música y la poesía, separadas de las artes útiles o artesanías.",
      "En esa época nació la <b>estética</b> como rama de la filosofía, con Baumgarten. <b>Kant</b> explicó que el juicio de belleza es desinteresado: algo nos parece bello sin que deseemos poseerlo ni usarlo. También distinguió lo bello, armonioso y sereno, de lo <b>sublime</b>, lo grandioso que nos sobrecoge, como una tormenta en el mar. Estas categorías serán claves para el arte romántico.",
    ], extra: CITA("Lo bello es lo que place universalmente sin concepto.", "Immanuel Kant, Crítica del juicio, 1790 (traducción propia)"), svg: crono("Del oficio a las bellas artes", [["s. V a. C.", "téchne y mímesis"], ["1435", "Alberti, Sobre la pintura"], ["1563", "Academia de Florencia"], ["1746", "Batteux: bellas artes"], ["1750", "Baumgarten: estética"], ["1790", "Kant: juicio del gusto"]]) },
    { h: "El arte como expresión y como forma", p: [
      "Con el Romanticismo, en el siglo XIX, el centro pasó al artista. Según la <mark>teoría de la expresión</mark>, el arte comunica emociones: el escritor ruso Tolstói lo definió como transmitir a otros un sentimiento vivido. El artista se convierte en un genio original que no sigue reglas, sino su propia voz interior.",
      "A comienzos del siglo XX, con la llegada de la abstracción, surgió el <b>formalismo</b>. El crítico inglés Clive Bell afirmó que lo común a todas las obras de arte es la «forma significante»: combinaciones de líneas y colores que provocan una emoción estética, al margen de lo que representen. Más tarde, el crítico Clement Greenberg defendió que cada arte debía centrarse en lo propio de su medio; en la pintura, la superficie plana.",
    ], svg: cuadro("Grandes teorías del arte", [["Teoría", "El arte es…", "Época"], ["Mímesis", "imitación", "Antigüedad"], ["Expresión", "emoción del artista", "Romanticismo"], ["Formalismo", "forma significante", "s. XX"], ["Institucional", "lo que acepta el mundo del arte", "desde 1960"]]) },
    { h: "Duchamp y el ready-made", p: [
      "En 1913, <b>Marcel Duchamp</b> fijó una rueda de bicicleta sobre un taburete. Poco después empezó a elegir objetos fabricados en serie, como un portabotellas, y a presentarlos como obras: los llamó <mark>ready-made</mark>, «ya hecho». En 1917 envió a una exposición neoyorquina un urinario de porcelana girado y firmado «R. Mutt», titulado <i>Fuente</i>. Fue rechazado y el original se perdió, pero su fotografía dio la vuelta al mundo.",
      "Con estos gestos, Duchamp atacaba la idea de que el arte depende de la habilidad manual y de la belleza visual. Lo importante era la <b>elección</b> del artista, el cambio de contexto y la nueva mirada que provoca. Él lo llamaba un arte «para la mente» y no para la retina. En 2004, quinientos expertos votaron <i>Fuente</i> como la obra de arte moderno más influyente.",
    ], v: ["teo-a", "La filosofía y el arte"], extra: OBRA("Fuente", "Marcel Duchamp", "1917, urinario de porcelana (réplicas de 1964)"), svg: flujo("Cómo funciona un ready-made", ["Objeto común fabricado en serie", "El artista lo elige", "Le da título y firma", "Lo expone en un espacio artístico", "Cambia la mirada del público"]) },
    { h: "El arte objeto", p: [
      "El <mark>arte objeto</mark> utiliza cosas reales, encontradas o fabricadas, como materia de la obra. Los surrealistas crearon objetos inquietantes: Meret Oppenheim forró en 1936 una taza, un plato y una cuchara con piel de gacela. Picasso unió un sillín y un manillar de bicicleta para hacer una <i>Cabeza de toro</i> (1942).",
      "Después de 1950, el arte objeto se multiplicó: los <i>combines</i> de Robert Rauschenberg mezclan pintura y objetos; el nuevo realismo francés acumuló basura y productos; el pop art reprodujo marcas. En España, artistas como Joan Brossa crearon <b>poemas objeto</b> que unen palabras y cosas con humor. El objeto cotidiano entra en el museo y obliga a mirar de nuevo lo que usamos cada día.",
    ], svg: cajas("Formas del arte objeto", [["Ready-made", "Duchamp"], ["Objeto surrealista", "Oppenheim"], ["Ensamblaje", "Picasso"], ["Combine", "Rauschenberg"], ["Acumulación", "Arman"], ["Poema objeto", "Brossa"]]) },
    { h: "El arte conceptual", p: [
      "A finales de los años sesenta, el <mark>arte conceptual</mark> llevó al extremo la idea de Duchamp: lo esencial de la obra es la <b>idea</b>, y su realización material puede ser secundaria o incluso no existir. Sol LeWitt escribió en 1967 que «la idea se convierte en una máquina que hace el arte». Muchas obras eran instrucciones, textos, fotografías o documentos.",
      "Un ejemplo clásico es <i>Una y tres sillas</i> (1965) de <b>Joseph Kosuth</b>: una silla real, una fotografía de esa silla y la definición de «silla» copiada del diccionario. ¿Cuál es la verdadera silla? La obra plantea cómo representamos y nombramos las cosas. Se habló de la <b>desmaterialización</b> del arte: menos objetos para vender y más pensamiento, a veces con crítica a las galerías y al mercado.",
    ], extra: OBRA("Una y tres sillas", "Joseph Kosuth", "1965, silla, fotografía y texto"), svg: rueda("ARTE CONCEPTUAL", ["la idea manda", "instrucciones", "texto y foto", "lenguaje", "crítica al mercado", "desmaterialización"]) },
    { h: "La teoría institucional y el mundo del arte", p: [
      "Si cualquier objeto puede ser arte, ¿qué lo decide? Arthur Danto habló del <mark>mundo del arte</mark>: una atmósfera de teorías e historia que permite ver una caja de Warhol como obra. El filósofo George Dickie propuso la <b>teoría institucional</b>: es arte aquello que una persona del mundo del arte (artistas, museos, críticos, galerías) presenta como candidato a ser apreciado.",
      "Esta teoría explica bien el arte contemporáneo, pero tiene críticas: parece que el valor depende solo del poder de unos pocos. Por eso hoy se combinan varias perspectivas. Se habla de una <b>definición abierta</b> de arte, que cambia con la historia, y se valoran también la experiencia del público, el contexto cultural y el arte de otras culturas que nunca separaron arte y vida cotidiana.",
    ], svg: rueda("MUNDO DEL ARTE", ["artistas", "museos", "galerías", "críticos", "coleccionistas", "público"]) },
    { h: "¿Qué es el arte hoy?", p: [
      "La perspectiva actual acepta que no existe una definición cerrada. El filósofo Morris Weitz dijo que «arte» es un <mark>concepto abierto</mark>: las obras se parecen entre sí como los miembros de una familia, sin un rasgo común a todas. Pinturas, instalaciones, acciones, vídeos, sonidos o códigos pueden formar parte de esa familia.",
      "Para orientarse, ayudan algunas preguntas: ¿qué intención tiene la obra?, ¿qué experiencia provoca?, ¿qué ideas plantea?, ¿cómo se relaciona con la historia del arte? Ante una obra difícil, la reacción «eso lo hace mi hermano pequeño» es comprensible, pero el reto es preguntarse por qué está ahí y qué propone. Juzgar con argumentos, y no solo con el gusto, es una de las metas de esta materia.",
    ], svg: linea("De la mímesis al concepto abierto", [["Grecia", "imitar"], ["1790", "belleza y gusto"], ["1917", "ready-made"], ["1965", "idea"], ["Hoy", "concepto abierto"]]) },
  ],
  figura: { titulo: "Las definiciones del arte de un vistazo", aria: "Resumen de las teorías clásicas, modernas, el arte objeto y el arte conceptual", cols: [
    ["Clásica", ["téchne", "mímesis", "reglas", "belleza"]],
    ["Moderna", ["estética de Kant", "expresión", "formalismo", "genio"]],
    ["Objeto", ["ready-made", "Duchamp", "Oppenheim", "Brossa"]],
    ["Concepto", ["la idea manda", "Kosuth", "mundo del arte", "concepto abierto"]],
  ] },
  video: ["teo-b", "Arte conceptual: características y tipos"],
  ejemplos: [
    ["Explica por qué Fuente de Duchamp se considera arte.", ["Es un objeto industrial sin intervención manual.", "El artista lo elige, lo gira, lo titula y lo firma.", "Lo presenta en una exposición: cambia el contexto.", "Hace pensar qué es el arte."], "Es arte por la elección, el contexto y la idea, no por la habilidad."],
    ["Analiza Una y tres sillas de Kosuth.", ["Silla real: el objeto.", "Fotografía: la imagen.", "Definición: la palabra.", "Pregunta cuál es la silla verdadera."], "Obra conceptual sobre representación y lenguaje."],
    ["Compara la teoría de la mímesis con el formalismo ante un cuadro abstracto.", ["La mímesis busca parecido con la realidad.", "Un cuadro abstracto no imita nada.", "El formalismo valora líneas y colores.", "Solo el formalismo lo justifica."], "El formalismo explica la abstracción; la mímesis no."],
  ],
  errores: [
    "Pensar que el arte siempre debe ser bello o realista: muchas épocas no lo han buscado.",
    "Creer que el ready-made es «cualquier cosa»: depende de la elección, el contexto y la idea.",
    "Confundir arte objeto (usa objetos reales) con arte conceptual (prioriza la idea).",
    "Juzgar el arte contemporáneo solo por la habilidad manual del artista.",
  ],
  ejercicios: {
    b: [
      ["¿Qué significaba téchne para los griegos?", "Cualquier saber hacer con reglas: escultura, medicina, navegación. No distinguía entre arte y artesanía."],
      ["Define mímesis.", "Imitación de la naturaleza. Para Platón y Aristóteles, era la esencia de la pintura, la escultura y la poesía."],
      ["¿Qué es un ready-made? Pon un ejemplo.", "Un objeto fabricado en serie que el artista elige y presenta como obra. Ejemplo: Rueda de bicicleta (1913) o Fuente (1917) de Duchamp."],
      ["Nombra tres agentes del mundo del arte.", "Artistas, museos, galerías, críticos, coleccionistas o público (tres de ellos)."],
    ],
    m: [
      ["Explica la diferencia entre lo bello y lo sublime según Kant.", "Lo bello agrada por su armonía y serenidad; lo sublime nos sobrecoge por su grandeza o su fuerza (una tormenta, una montaña) y mezcla placer y temor."],
      ["¿Por qué el formalismo encaja con la abstracción?", "Porque valora la obra por sus líneas, colores y composición, no por lo que representa. Un cuadro abstracto no imita nada, pero puede tener «forma significante»."],
      ["Explica qué quiere decir desmaterialización del arte.", "Que en el arte conceptual el objeto pierde importancia frente a la idea: la obra puede ser un texto, unas instrucciones o un documento, difícil de vender como objeto."],
      ["¿Qué crítica se hace a la teoría institucional?", "Que hace depender el valor del arte del poder de unos pocos (museos, galerías, críticos) y no explica por qué aceptan unas obras y no otras."],
    ],
    a: [
      ["Escoge un objeto de tu casa y escribe cómo lo convertirías en arte objeto: título, contexto y idea.", "Respuesta abierta. Debe incluir el objeto elegido, una transformación o recontextualización, un título que oriente la lectura, el lugar donde se expondría y la idea que quiere provocar en el público."],
      ["Argumenta a favor o en contra de la frase «eso lo hace mi hermano pequeño» ante una obra conceptual.", "Respuesta abierta argumentada. Por ejemplo: la ejecución puede ser sencilla, pero la obra vale por la idea, su momento histórico y su diálogo con la historia del arte; lo difícil fue pensarla primero."],
    ],
  },
  quiz: [
    ["Para Platón, la pintura era…", ["una copia de apariencias que aleja de la verdad", "la más alta forma de saber", "pura expresión del genio", "forma significante"], "Desconfiaba de la mímesis."],
    ["El término «bellas artes» se generalizó en el siglo…", ["XVIII", "V a. C.", "XII", "XX"], "Batteux, 1746."],
    ["Para Kant, el juicio de belleza es…", ["desinteresado", "útil", "científico", "religioso"], "Agrada sin desear poseer."],
    ["La teoría de la expresión nace con…", ["el Romanticismo", "el gótico", "el Renacimiento", "el arte griego"], "El artista como genio que comunica emociones."],
    ["La «forma significante» la defendió…", ["Clive Bell", "Platón", "Duchamp", "Tolstói"], "Formalismo de principios del siglo XX."],
    ["Fuente de Duchamp es…", ["un urinario de porcelana", "una rueda de bicicleta", "un portabotellas", "una taza de piel"], "Firmado R. Mutt, 1917."],
    ["La taza forrada de piel es de…", ["Meret Oppenheim", "Picasso", "Kosuth", "Warhol"], "Objeto surrealista de 1936."],
    ["Una y tres sillas es de…", ["Joseph Kosuth", "Sol LeWitt", "Duchamp", "Brossa"], "Arte conceptual de 1965."],
    ["La teoría institucional fue propuesta por…", ["George Dickie", "Kant", "Clive Bell", "Aristóteles"], "El mundo del arte decide."],
    ["Weitz dijo que «arte» es…", ["un concepto abierto", "solo pintura", "imitación", "belleza"], "Parecidos de familia."],
  ],
  examen: [
    ["Danto reflexionó a partir de…", ["las cajas Brillo de Warhol", "las Meninas", "el Partenón", "la Gioconda"], "1964, Stable Gallery."],
    ["En el arte conceptual lo esencial es…", ["la idea", "el material noble", "la belleza", "la técnica manual"], "LeWitt: la idea es la máquina."],
    ["Los poemas objeto son de…", ["Joan Brossa", "Gaudí", "Dalí", "Miró"], "Poeta y artista catalán."],
    ["El ready-made ataca la idea de que el arte depende de…", ["la habilidad manual", "el contexto", "la idea", "el título"], "Arte para la mente, no para la retina."],
  ],
  feynman: ["mímesis", "estética y belleza", "ready-made de Duchamp", "arte conceptual y mundo del arte"],
  mapa: ["¿QUÉ ES EL ARTE?", [["Clásico", "téchne y mímesis"], ["Moderno", "belleza, expresión, forma"], ["Objeto", "ready-made, Duchamp"], ["Hoy", "idea, institución, concepto abierto"]]],
  tarjetas: [
    ["Téchne", "Saber hacer con reglas (Grecia)."],
    ["Mímesis", "Imitación de la naturaleza."],
    ["Estética", "Filosofía de la belleza y el arte."],
    ["Sublime", "Lo grandioso que sobrecoge."],
    ["Ready-made", "Objeto industrial presentado como arte."],
    ["Arte objeto", "Obra hecha con objetos reales."],
    ["Arte conceptual", "La idea por encima del objeto."],
    ["Teoría institucional", "Es arte lo que acepta el mundo del arte."],
  ],
  glosario: [
    ["Bellas artes", "Pintura, escultura, arquitectura, música y poesía, frente a las artes útiles."],
    ["Juicio de gusto", "Valoración de algo como bello, según Kant desinteresada."],
    ["Teoría de la expresión", "El arte comunica emociones del artista al público."],
    ["Formalismo", "Valora la obra por su forma: líneas, colores y composición."],
    ["Combine", "Obra de Rauschenberg que une pintura y objetos."],
    ["Desmaterialización", "Pérdida de importancia del objeto en el arte conceptual."],
    ["Mundo del arte", "Red de artistas, museos, críticos y teorías que da sentido a las obras."],
    ["Concepto abierto", "Definición que cambia y no tiene un rasgo común a todo."],
  ],
  situacion: SIT(
    "¿Es arte o no?",
    "La clase organiza un debate público con obras polémicas del siglo XX y XXI para la jornada cultural del centro.",
    ["Elegid cuatro obras polémicas (ready-made, conceptual, objeto)", "Preparad argumentos a favor y en contra según cada teoría", "Celebrad el debate con turnos y moderación", "Redactad unas conclusiones de 150 palabras"],
    "Debate grabado y documento de conclusiones.",
    ["Uso correcto de las teorías del arte", "Calidad de los argumentos y respeto en el debate", "Claridad de las conclusiones"],
  ),
  familias: [
    "Preguntad en casa: ¿qué tiene que tener algo para ser arte? Comparad respuestas.",
    "Buscad juntos una imagen de Fuente de Duchamp y comentad qué os provoca.",
    "Visitad un museo de arte contemporáneo y elegid la obra más rara y la más bonita.",
  ],
  saberes: "teorías del arte, definición de arte a lo largo de la historia y perspectiva actual; arte conceptual y arte objeto.",
  ideas: [
    "Empezar con una votación anónima: ¿es arte? ante cinco imágenes, y repetirla al final.",
    "Pedir que cada alumno traiga un objeto y lo presente como ready-made con título.",
    "Leer fragmentos breves de Kant, Danto o LeWitt y debatirlos.",
  ],
  fuentes: [WIKI("Arte conceptual", "Arte_conceptual"), WIKI("Ready-made", "Ready-made")],
});
