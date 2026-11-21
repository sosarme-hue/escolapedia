// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · El lenguaje gráfico-plástico (tema ampliado). Dibujos propios en SVG.
const { tema, OBRA, TRUCO, escala, muestras, cajas, flujo, versus, rueda, crono, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "El lenguaje gráfico-plástico: forma, color, textura y composición",
  minutos: 60,
  bloque: "A",
  objetivos: [
    "Reconocer los elementos del lenguaje gráfico-plástico: punto, línea, forma, valor, color y textura",
    "Usar el valor y el color para crear volumen, profundidad y ambiente",
    "Analizar la composición de una obra: peso visual, equilibrio, ritmo y recorrido de la mirada",
    "Relacionar la evolución histórica de las técnicas con los cambios del lenguaje visual",
  ],
  claves: ["punto", "línea", "forma", "valor", "claroscuro", "tono", "saturación", "colores complementarios", "textura visual", "textura táctil", "composición", "peso visual", "regla de los tercios", "ritmo"],
  pregunta: {
    texto: "¿Por qué una mancha negra pequeña puede «pesar» más que una gran zona gris en un cuadro?",
    respuesta: "Porque en una imagen no pesan los kilos, sino la <b>atención</b>. Un elemento muy contrastado, de color intenso, aislado o con forma reconocible atrae la mirada y desequilibra la composición aunque sea pequeño. A eso lo llamamos <mark>peso visual</mark>. Aprender a controlarlo es lo que permite a un artista decidir por dónde entra nuestra mirada, dónde se detiene y por dónde sale del cuadro.",
  },
  bloques: [
    { h: "Un lenguaje que se ve y se toca", p: [
      "Igual que la lengua tiene letras, palabras y frases, las imágenes tienen sus propios elementos y reglas. Llamamos <mark>lenguaje gráfico-plástico</mark> al conjunto de recursos con los que el dibujo, la pintura y el grabado construyen significado: el <b>punto</b>, la <b>línea</b>, la <b>forma</b>, el <b>valor</b> (luz y sombra), el <b>color</b> y la <b>textura</b>, organizados mediante la <b>composición</b>.",
      "En esta materia el lenguaje no es teórico: cada elemento depende del material. Una línea de carboncillo es ancha y se difumina; la de una plumilla es nítida y vibra con la presión; la de un buril en el cobre es limpia y afilada. Por eso el estudio de las técnicas y el del lenguaje van juntos: elegir una técnica es elegir cómo va a hablar la obra.",
    ], svg: rueda("LENGUAJE PLÁSTICO", ["punto", "línea", "forma", "valor", "color", "textura"]) },
    { h: "Punto, línea y forma", p: [
      "El <b>punto</b> es la unidad mínima: concentra la atención y, repetido, crea tramas, texturas y degradados, como en el puntillismo de Seurat o en el punteado de la ilustración científica. La <b>línea</b> es un punto en movimiento: puede ser de contorno, que separa la figura del fondo; de estructura, que encaja proporciones; o expresiva, cargada de gesto y energía.",
      "La línea cambia de carácter con su grosor, su continuidad y su dirección: las horizontales transmiten calma, las verticales estabilidad y las diagonales movimiento y tensión. Cuando una línea se cierra genera una <b>forma</b>. Distinguimos formas <b>geométricas</b> y <b>orgánicas</b>, y también la relación entre figura y fondo: el espacio vacío, o <i>espacio negativo</i>, es tan importante como la figura.",
    ], svg: cajas("Tipos de línea", [["Contorno", "separa figura y fondo"], ["Estructura", "encaja proporciones"], ["Expresiva", "gesto y energía"], ["Horizontal", "calma"], ["Vertical", "estabilidad"], ["Diagonal", "movimiento"]]) },
    { h: "El valor: luz, sombra y volumen", p: [
      "El <mark>valor</mark> es el grado de claridad u oscuridad de una zona, sin importar su color. Con una escala de valores, del blanco del papel al negro más intenso, el artista modela el volumen: la <b>luz</b>, la <b>media tinta</b>, la <b>sombra propia</b>, el <b>reflejo</b> y la <b>sombra arrojada</b>. Esta forma de construir el relieve con luz y sombra se llama <b>claroscuro</b>.",
      "Leonardo da Vinci suavizó los pasos hasta hacerlos invisibles (<i>sfumato</i>); Caravaggio y Ribera, en cambio, enfrentaron luces y sombras violentas (<i>tenebrismo</i>). Un buen ejercicio para cualquier técnica es entornar los ojos ante el modelo: desaparecen los detalles y se ven solo grandes masas de valor, que son la base de un dibujo sólido.",
    ], extra: TRUCO("haz una escala de nueve pasos con grafito y otra con carboncillo antes de empezar un dibujo; así conocerás el registro de cada material."), svg: escala("Escala de valores", ["luz", "media tinta", "reflejo", "sombra propia", "sombra arrojada"]) },
    { h: "El color y sus dimensiones", p: [
      "Todo color tiene tres dimensiones: el <b>tono</b> o matiz (rojo, azul, amarillo…), la <b>luminosidad</b> o valor (claro u oscuro) y la <b>saturación</b> o pureza (intenso o agrisado). En los materiales artísticos trabajamos con la <b>síntesis sustractiva</b>: cada pigmento absorbe parte de la luz, y al mezclarlos el resultado se oscurece. Los primarios de la impresión y de la pintura actual son <b>cian, magenta y amarillo</b>.",
      "Los <b>colores complementarios</b> son los opuestos en el círculo cromático (azul y naranja, rojo y verde, violeta y amarillo): uno junto al otro se intensifican, y mezclados se neutralizan hacia el gris. También hablamos de <b>gamas cálidas</b>, que parecen avanzar, y <b>gamas frías</b>, que parecen alejarse. Van Gogh y los fauvistas usaron estas leyes para expresar emociones más que para copiar la realidad.",
    ], svg: muestras("Complementarios y gamas", [["Azul", "#1f5fbf", "frío"], ["Naranja", "#f08a24", "cálido"], ["Rojo", "#d62828", "cálido"], ["Verde", "#2f9e44", "frío"], ["Violeta", "#7b3fc4", "frío"], ["Amarillo", "#f5c400", "cálido"]]) },
    { h: "La textura", p: [
      "La <mark>textura</mark> es la cualidad de una superficie. Puede ser <b>táctil</b>, cuando se percibe con la mano (el empaste grueso de un óleo, la arena mezclada con acrílico, el relieve de un papel de acuarela de grano grueso), o <b>visual</b>, cuando solo se ve pero no se toca (el pelo dibujado a lápiz, la imitación de madera o mármol).",
      "Cada técnica tiene texturas propias: la <b>frotación</b> o <i>frottage</i> que inventó Max Ernst al pasar el lápiz sobre maderas y hojas; el <b>esgrafiado</b>, que raspa una capa para descubrir la de debajo; la <b>sal</b> o las <b>reservas</b> en la acuarela; el <b>pincel seco</b> en la témpera. Las texturas enriquecen la superficie, pero deben estar al servicio de la idea, no ser un simple adorno.",
    ], svg: versus("Dos tipos de textura", ["Táctil", ["empastes", "arena y cargas", "collage", "papel de grano grueso"]], ["Visual", ["frottage", "tramas y rayados", "imitación de materiales", "esgrafiado"]]) },
    { h: "La composición", p: [
      "<mark>Componer</mark> es organizar los elementos dentro del formato para que la obra funcione como un todo. Primero se elige el <b>formato</b>: horizontal, que sugiere calma y paisaje; vertical, que sugiere elevación y retrato; o cuadrado, más estático. Después se distribuye el <b>peso visual</b> buscando el <b>equilibrio</b>, que puede ser <b>simétrico</b>, solemne y estable, o <b>asimétrico</b>, más dinámico.",
      "Herramientas útiles son la <b>regla de los tercios</b>, que divide el formato en tres partes en cada dirección y sitúa los puntos de interés en sus cruces; las <b>líneas de fuerza</b> que guían la mirada; el <b>ritmo</b>, que repite formas o colores con variaciones; y el <b>centro de interés</b>, donde se concentra el mayor contraste. La composición no es una receta: a veces se rompe a propósito para crear tensión.",
    ], svg: cajas("Claves de la composición", [["Formato", "horizontal, vertical, cuadrado"], ["Peso visual", "contraste, color, aislamiento"], ["Equilibrio", "simétrico o asimétrico"], ["Tercios", "puntos fuertes"], ["Ritmo", "repetición con cambios"], ["Centro de interés", "máximo contraste"]]), v: ["len-b", "Tres reglas para mejorar la composición"] },
    { h: "Un lenguaje con historia", p: [
      "El lenguaje gráfico-plástico ha cambiado con los materiales. Las pinturas de <b>Altamira</b> usaron tierras y carbón; la Edad Media pintó al <b>temple</b> sobre tabla con fondos de oro; el <b>óleo</b>, perfeccionado en Flandes en el siglo XV, permitió veladuras y transparencias; la <b>imprenta</b> y el <b>grabado</b> multiplicaron las imágenes; y los tubos de pintura del siglo XIX sacaron a los impresionistas al aire libre.",
      "En el siglo XX las vanguardias liberaron la forma y el color, el <b>collage</b> introdujo materiales reales y la <b>serigrafía</b> llevó al arte la estética de la publicidad. Hoy la <b>imagen digital</b> convive con las técnicas tradicionales. Conocer esta evolución ayuda a entender que cada técnica nació para resolver un problema expresivo concreto.",
    ], extra: OBRA("Bisonte del techo de los Policromos", "Cueva de Altamira (Cantabria)", "hacia 15.000 a. C., ocre, óxidos de hierro y carbón sobre roca"), svg: crono("Técnicas y lenguaje en el tiempo", [["Prehistoria", "tierras y carbón"], ["Edad Media", "temple y oro"], ["s. XV", "óleo flamenco"], ["s. XV", "grabado e imprenta"], ["s. XIX", "tubos de pintura"], ["1912", "collage cubista"], ["1960", "serigrafía pop"], ["s. XXI", "imagen digital"]]) },
    { h: "Cómo analizar una obra gráfico-plástica", p: [
      "Para analizar una obra sigue un orden. Primero, los <b>datos</b>: autor, fecha, técnica, soporte y medidas. Después, la <b>descripción</b> de lo que se ve. Luego, el <b>análisis formal</b>: qué líneas dominan, cómo se distribuyen los valores, qué gama de color se usa, qué texturas aparecen y cómo está compuesta. Por último, la <b>interpretación</b>: qué transmite y por qué el artista eligió esos recursos.",
      "Lo importante es relacionar siempre la forma con el significado. No basta con decir «hay una diagonal»; hay que explicar que «la diagonal dirige la mirada hacia el rostro y crea sensación de caída». Este método sirve también para revisar tus propios trabajos con espíritu crítico.",
    ], svg: flujo("Pasos del análisis", ["Datos: autor, fecha, técnica, soporte", "Descripción: qué se ve", "Análisis formal: línea, valor, color, textura, composición", "Interpretación: qué transmite y por qué"]) },
  ],
  figura: { titulo: "El lenguaje gráfico-plástico de un vistazo", aria: "Resumen de los elementos, el valor y el color, la textura y la composición", cols: [
    ["Elementos", ["punto", "línea", "forma", "figura y fondo"]],
    ["Valor y color", ["claroscuro", "tono, luz, saturación", "complementarios", "cálidos y fríos"]],
    ["Textura", ["táctil", "visual", "frottage", "esgrafiado"]],
    ["Composición", ["formato", "peso y equilibrio", "regla de los tercios", "ritmo"]],
  ] },
  video: ["len-a", "El curso de composición más corto del mundo"],
  ejemplos: [
    ["Analiza el peso visual de un paisaje con un pequeño barco rojo en un mar gris.", ["El mar gris ocupa casi todo el formato pero tiene poco contraste.", "El barco es pequeño, pero rojo y aislado: atrae la mirada.", "Si está en un punto fuerte de los tercios, equilibra la composición."], "Equilibrio asimétrico: un elemento pequeño e intenso compensa una gran masa neutra."],
    ["Elige colores para un cartel que transmita calma.", ["Gama fría: azules y verdes.", "Saturación media o baja para evitar tensión.", "Formato horizontal y líneas horizontales.", "Poco contraste de valores."], "Una armonía fría, de valores próximos y composición horizontal."],
    ["Crea volumen en una esfera solo con valor.", ["Decide la dirección de la luz.", "Deja el brillo en blanco y gradúa la media tinta.", "Oscurece la sombra propia y deja un reflejo suave.", "Dibuja la sombra arrojada en el suelo."], "Claroscuro completo: luz, media tinta, sombra propia, reflejo y sombra arrojada."],
  ],
  errores: [
    "Confundir valor y color: dos colores distintos pueden tener el mismo valor y, en blanco y negro, verse iguales.",
    "Pensar que los primarios de pintura son rojo, azul y amarillo «puros»: hoy se usan cian, magenta y amarillo.",
    "Colocar siempre el motivo principal en el centro: suele dar composiciones estáticas.",
    "Usar texturas como adorno sin relación con la idea de la obra.",
    "Describir una obra sin explicar qué aporta cada recurso al significado.",
  ],
  ejercicios: {
    b: [
      ["Nombra los elementos del lenguaje gráfico-plástico.", "Punto, línea, forma, valor, color y textura, organizados por la composición."],
      ["¿Qué es el valor?", "El grado de claridad u oscuridad de una zona, independiente del color."],
      ["Cita tres parejas de complementarios.", "Azul y naranja, rojo y verde, violeta y amarillo."],
      ["Diferencia textura táctil y visual.", "La táctil se percibe al tocar (empaste, arena); la visual solo se ve (rayados, imitación de madera)."],
    ],
    m: [
      ["Explica la diferencia entre sfumato y tenebrismo.", "El sfumato funde suavemente luces y sombras (Leonardo); el tenebrismo las enfrenta con contraste violento (Caravaggio)."],
      ["¿Por qué se mezclan los colores de forma sustractiva en pintura?", "Porque cada pigmento absorbe parte de la luz; al mezclarlos se absorbe más y el resultado se oscurece."],
      ["¿Qué es la regla de los tercios y para qué sirve?", "Divide el formato en tres partes horizontales y verticales; los cruces son puntos fuertes donde colocar los centros de interés para lograr composiciones dinámicas."],
      ["Explica cómo cambió el óleo el lenguaje pictórico.", "Su secado lento y transparencia permitieron veladuras, fundidos y una representación muy realista de la luz y las texturas."],
    ],
    a: [
      ["Analiza un cuadro de tu elección siguiendo los cuatro pasos del método.", "Respuesta abierta: datos, descripción, análisis formal (línea, valor, color, textura, composición) e interpretación relacionando forma y significado."],
      ["Diseña dos versiones de la misma imagen, una en equilibrio simétrico y otra asimétrico, y compara su efecto.", "La simétrica resulta estable y solemne; la asimétrica, dinámica y tensa. Se valora la justificación."],
      ["¿Puede una obra abstracta comunicar sin figuras? Argumenta con el lenguaje plástico.", "Sí: la línea, el color, el valor, la textura y la composición transmiten ritmo, tensión o calma por sí mismos, como en Kandinsky o Rothko."],
    ],
  },
  quiz: [
    ["La unidad mínima del lenguaje plástico es…", ["el punto", "la línea", "el plano", "la textura"], "Concentra la atención."],
    ["Las líneas diagonales transmiten…", ["movimiento y tensión", "calma", "estabilidad", "silencio"], "Dinamismo."],
    ["El grado de claridad u oscuridad es el…", ["valor", "tono", "matiz", "pigmento"], "Escala de grises."],
    ["El tenebrismo se asocia a…", ["Caravaggio", "Leonardo", "Monet", "Kandinsky"], "Contraste violento."],
    ["El complementario del azul es el…", ["naranja", "verde", "violeta", "rojo"], "Opuestos en el círculo."],
    ["Los primarios sustractivos actuales son…", ["cian, magenta y amarillo", "rojo, verde y azul", "blanco y negro", "naranja, verde y violeta"], "Pigmentos e impresión."],
    ["El frottage lo popularizó…", ["Max Ernst", "Picasso", "Warhol", "Goya"], "Frotar sobre superficies."],
    ["Un equilibrio sin eje de simetría es…", ["asimétrico", "simétrico", "radial", "nulo"], "Más dinámico."],
    ["La repetición de formas con variaciones crea…", ["ritmo", "textura táctil", "sfumato", "perspectiva"], "Composición."],
    ["Los colores cálidos parecen…", ["avanzar", "alejarse", "desaparecer", "agrisarse"], "Gamas."],
  ],
  examen: [
    ["Un elemento pequeño puede tener mucho peso visual si…", ["está muy contrastado o aislado", "es gris", "está en el borde y borroso", "es transparente"], "Atención."],
    ["La sombra que un objeto proyecta sobre el suelo es la…", ["sombra arrojada", "sombra propia", "media tinta", "luz"], "Claroscuro."],
    ["Mezclar dos complementarios produce…", ["un gris o pardo neutro", "un color más saturado", "blanco", "un primario"], "Neutralización."],
    ["En el análisis, la interpretación consiste en…", ["explicar qué transmite la obra y por qué", "medir el soporte", "copiar la obra", "decir la fecha"], "Último paso."],
  ],
  feynman: ["los seis elementos del lenguaje plástico", "valor y claroscuro", "tono, luminosidad y saturación", "textura táctil y visual", "peso visual y equilibrio"],
  mapa: ["LENGUAJE GRÁFICO-PLÁSTICO", [["Elementos", "punto, línea, forma"], ["Valor y color", "claroscuro, complementarios"], ["Textura", "táctil y visual"], ["Composición", "peso, tercios, ritmo"]]],
  tarjetas: [
    ["¿Qué es el valor?", "Claridad u oscuridad de una zona."],
    ["Claroscuro", "Modelar el volumen con luz y sombra."],
    ["Tres dimensiones del color", "Tono, luminosidad y saturación."],
    ["Complementarios", "Colores opuestos en el círculo cromático."],
    ["Textura táctil", "La que se percibe al tocar."],
    ["Peso visual", "Capacidad de un elemento para atraer la mirada."],
    ["Regla de los tercios", "Puntos fuertes en los cruces de una cuadrícula de 3 × 3."],
    ["Espacio negativo", "El vacío alrededor de la figura."],
  ],
  glosario: [
    ["Valor", "Grado de claridad u oscuridad de una zona."],
    ["Claroscuro", "Representación del volumen mediante la luz y la sombra."],
    ["Sfumato", "Paso suave e imperceptible entre luces y sombras."],
    ["Saturación", "Pureza o intensidad de un color."],
    ["Síntesis sustractiva", "Mezcla de pigmentos que oscurece el color al absorber luz."],
    ["Frottage", "Textura obtenida frotando un lápiz sobre un papel apoyado en una superficie rugosa."],
    ["Peso visual", "Fuerza con que un elemento atrae la atención."],
    ["Ritmo", "Repetición organizada de elementos con variaciones."],
  ],
  situacion: SIT(
    "Un abecedario visual",
    "Vais a crear un abecedario visual para los alumnos de 1º de Bachillerato: una serie de láminas que expliquen, con ejemplos propios, cada elemento del lenguaje gráfico-plástico.",
    [
      "Repartid los elementos (punto, línea, forma, valor, color, textura, composición) entre los grupos.",
      "Cada grupo hace tres pequeñas obras que muestren su elemento con técnicas distintas.",
      "Añadid un texto breve con la definición y un ejemplo de la historia del arte.",
      "Montad la serie en el aula o en la web del centro.",
    ],
    "Abecedario visual de siete láminas con ejemplos propios y textos.",
    [
      "Cada lámina muestra con claridad el elemento elegido.",
      "Se usan al menos dos técnicas diferentes.",
      "Los textos definen con precisión y citan un referente.",
    ],
  ),
  familias: [
    "Al ver una foto o un anuncio, preguntad: «¿qué es lo primero que miras y por qué?».",
    "Buscad en casa objetos con texturas táctiles distintas y haced un frottage con lápiz.",
    "Comentad juntos qué colores elegiríais para pintar una habitación tranquila y cuáles para una alegre.",
    "Visitad en línea la colección del Museo del Prado y buscad un cuadro con mucho contraste de luz.",
  ],
  saberes: "el lenguaje gráfico-plástico: forma, color, textura y composición; su evolución histórica; estrategias de análisis, interpretación y valoración crítica.",
  ideas: [
    "Escala de valores de nueve pasos con tres técnicas secas distintas.",
    "Análisis de una obra en grupo con plantilla de los cuatro pasos.",
    "Recomponer una misma imagen recortada siguiendo la regla de los tercios y rompiéndola a propósito.",
    "Colección de texturas de frottage para usar después en collages.",
  ],
  fuentes: [
    WIKI("Composición (artes visuales)", "Composici%C3%B3n_(artes_visuales)"),
    WIKI("Claroscuro", "Claroscuro"),
    { t: "Museo Nacional del Prado, colección en línea", url: "https://www.museodelprado.es/coleccion" },
  ],
});
