// Análisis Musical I, 1º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-am");

module.exports = B.tema({
  titulo: "La melodía",
  minutos: 60,
  objetivos: [
    "Definir melodía y describir su perfil, ámbito y movimiento",
    "Reconocer intervalos básicos y escalas mayores, menores y otras",
    "Identificar motivo, frase, semifrase y cadencia en una melodía",
    "Explicar los procedimientos con que se desarrolla una melodía",
  ],
  claves: ["melodía", "intervalo", "escala", "perfil", "ámbito", "motivo", "frase", "tonalidad"],
  pregunta: {
    texto: "¿Por qué hay melodías que se te pegan durante días y otras que olvidas al instante?",
    respuesta: "Las melodías pegadizas suelen tener un <mark>motivo corto que se repite</mark>, un ámbito fácil de cantar, movimiento por grados conjuntos con algún salto llamativo y frases equilibradas que «preguntan» y «responden». No es magia: es arquitectura sonora, y se puede analizar.",
  },
  lectura: {
    titulo: "Cuatro notas que cambiaron la historia",
    html: `<p>Ta-ta-ta-taaam. Con solo cuatro notas, Beethoven abrió en 1808 su Quinta Sinfonía. Tres notas repetidas y un salto hacia abajo: un <b>motivo</b> tan breve que cualquiera puede cantarlo y tan fuerte que se ha usado en anuncios, películas y canciones pop.</p>
    <p>Lo genial no son solo esas cuatro notas, sino lo que Beethoven hace con ellas: las repite, las sube, las baja, las encadena y construye con ellas un movimiento entero. En este tema aprenderás cómo está hecha una melodía, por qué se recuerda y cómo se transforma sin perder su identidad.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es una melodía",
      html: `<p>Una <b>melodía</b> es una sucesión de sonidos de distinta altura y duración que percibimos como una unidad con sentido, como una frase en el lenguaje. Une dos elementos: las <b>alturas</b> (qué notas) y el <b>ritmo</b> (cuánto dura cada una).</p>
      <p>Suele ser lo que cantamos o silbamos de una obra, y por eso la reconocemos antes que cualquier otro elemento. En la mayoría de la música occidental hay una <b>melodía principal</b> y un acompañamiento.</p>
      <p>Una melodía tiene <b>carácter</b>: puede ser lírica y cantable, enérgica y rítmica, o solemne. Ese carácter depende de cómo combine notas, ritmos, tempo e intensidad, y es lo primero que conviene anotar al escucharla.</p>`,
      svg: B.melodia("Una melodía: alturas y duraciones que forman una frase", [2, 2, 3, 4, 4, 3, 2, 1, 0, 0, 1, 2]),
    },
    {
      h: "Perfil, ámbito y movimiento",
      html: `<p>El <b>perfil</b> o contorno es el dibujo que forma la melodía al subir y bajar: ascendente, descendente, en arco, ondulado o estático. Una melodía que sube suele transmitir tensión o energía; la que baja, reposo.</p>
      <p>El <b>ámbito</b> es la distancia entre la nota más grave y la más aguda. Un ámbito pequeño (como una canción infantil) es fácil de cantar; uno amplio exige técnica y resulta más expresivo.</p>
      <p>El <b>movimiento</b> puede ser por <b>grados conjuntos</b> (notas vecinas, como subir una escalera) o por <b>saltos</b> (notas separadas). Las melodías combinan ambos: los saltos llaman la atención y los grados dan fluidez.</p>`,
      svg: B.melodia("Perfil en arco: la melodía sube por grados y baja con un salto", [0, 1, 2, 3, 4, 5, 6, 4, 2, 0], { titulo: "Perfil en arco" }),
    },
    {
      h: "Los intervalos",
      html: `<p>Un <b>intervalo</b> es la distancia de altura entre dos notas. Se nombra contando las notas que abarca, incluidas ambas: de Do a Mi hay una <b>tercera</b> (Do, Re, Mi); de Do a Sol, una <b>quinta</b>; de Do al Do siguiente, una <b>octava</b>.</p>
      <p>La unidad más pequeña de la música occidental es el <b>semitono</b>; dos semitonos forman un <b>tono</b>. Los intervalos pueden ser <b>consonantes</b> (estables, como la 3.ª, la 5.ª y la 8.ª) o <b>disonantes</b> (tensos, como la 2.ª y la 7.ª).</p>
      <p>Muchas melodías famosas empiezan con un intervalo característico: el inicio de la marcha nupcial de Wagner es una cuarta ascendente.</p>`,
      svg: B.intervalos("Intervalos desde Do: segunda, tercera, quinta y octava", [["2.ª", -2, -1, "Do-Re"], ["3.ª", -2, 0, "Do-Mi"], ["5.ª", -2, 2, "Do-Sol"], ["8.ª", -2, 5, "Do-Do"]], "Intervalos sobre Do"),
      video: { id: "3tE78JZ_6Lg", titulo: "Teoría musical, clase 1: intervalos", canal: "ChordHouse", vistas: 1875093 },
    },
    {
      h: "Escalas y modos",
      html: `<p>Una <b>escala</b> es una serie ordenada de notas por grados conjuntos que sirve de «paleta» a la melodía. La <b>escala mayor</b> (Do-Re-Mi-Fa-Sol-La-Si-Do) sigue la fórmula de tonos y semitonos T-T-S-T-T-T-S y suena luminosa.</p>
      <p>La <b>escala menor</b> (La-Si-Do-Re-Mi-Fa-Sol-La) suena más oscura o melancólica. Existen además los <b>modos</b> antiguos (dórico, frigio, lidio…), la escala <b>pentatónica</b> de cinco notas (música oriental, blues, folk), la <b>escala de blues</b> y la escala andaluza del flamenco.</p>
      <p>La nota que funciona como centro y reposo es la <b>tónica</b>; la escala elegida define la <b>tonalidad</b> de la obra.</p>`,
      svg: B.melodia("Escala menor de La: más oscura que la mayor", [3, 4, 5, 6, 7, 8, 9, 10], { nombres: ["La", "Si", "Do", "Re", "Mi", "Fa", "Sol", "La"], color: "var(--red)" }),
      video: { id: "8i7K9GYzbIY", titulo: "¿Qué emociones producen las 7 escalas modales?", canal: "Jaime Altozano", vistas: 3224953 },
    },
    {
      h: "Motivo, semifrase y frase",
      html: `<p>La melodía se organiza como el lenguaje. El <b>motivo</b> es la idea mínima reconocible, de dos a cinco notas (las cuatro notas de la Quinta de Beethoven). Varios motivos forman una <b>semifrase</b>, y dos semifrases, una <b>frase</b>, normalmente de ocho compases.</p>
      <p>Muchas frases tienen estructura de <b>pregunta y respuesta</b> (antecedente y consecuente): la primera semifrase queda abierta, en suspenso; la segunda la cierra.</p>
      <p>Los puntos de reposo se llaman <b>cadencias</b>, como las comas y los puntos de un texto. Las estudiaremos con la armonía.</p>`,
      svg: B.formas("Estructura de una frase de ocho compases", [["Motivo", "A"], ["Semifrase", "A A'"], ["Frase", "A A' B A''"]]),
    },
    {
      h: "Cómo se desarrolla una melodía",
      html: `<p>Los compositores transforman los motivos para crear melodías largas sin perder unidad. Los procedimientos más habituales son la <b>repetición</b> (igual), la <b>secuencia</b> (el mismo motivo a otra altura), la <b>variación</b> (cambiando ritmo, notas o adornos), la <b>inversión</b> (lo que subía, baja) y la <b>aumentación</b> o <b>disminución</b> (más lento o más rápido).</p>
      <p>Un equilibrio entre <mark>repetición y contraste</mark> es la clave: demasiada repetición aburre; demasiado contraste desorienta.</p>`,
      svg: B.cajas("Procedimientos de desarrollo melódico", [["Repetición", "igual"], ["Secuencia", "a otra altura"], ["Variación", "cambia algo"], ["Inversión", "al revés"], ["Aumentación", "más lento"], ["Disminución", "más rápido"]], { cols: 3 }),
    },
    {
      h: "Melodía y texto",
      html: `<p>En la música vocal, la melodía se adapta a las palabras. Si a cada sílaba le corresponde una nota, el estilo es <b>silábico</b> (casi todo el pop); si una sílaba se alarga en muchas notas, es <b>melismático</b> (gregoriano, flamenco, soul).</p>
      <p>Los compositores también usan el <b>madrigalismo</b>: dibujar con la melodía el significado del texto, subir en «cielo» y bajar en «tierra». Así la melodía <mark>refuerza lo que dicen las palabras</mark>.</p>`,
      svg: B.comparar("Estilo silábico frente a melismático", ["Silábico", ["una nota por sílaba", "texto claro", "pop, rap", "himnos"]], ["Melismático", ["muchas notas por sílaba", "lucimiento vocal", "gregoriano, flamenco", "soul, R&B"]]),
    },
    {
      h: "Cómo analizar una melodía",
      html: `<p>Para describir una melodía responde: <b>1.</b> ¿Qué instrumento o voz la lleva? <b>2.</b> ¿Cómo es su perfil y su ámbito? <b>3.</b> ¿Se mueve por grados o por saltos? <b>4.</b> ¿Es mayor, menor u otra escala? <b>5.</b> ¿Qué motivo se repite y cómo se transforma?</p>
      <p>Cantarla o tararearla ayuda mucho: si puedes cantarla, puedes analizarla.</p>`,
      svg: B.flujo("Cinco preguntas para analizar una melodía", ["¿Quién la lleva?", "¿Perfil y ámbito?", "¿Grados o saltos?", "¿Qué escala?", "¿Motivo y desarrollo?"]),
    },
  ],
  figura: {
    titulo: "Claves de la melodía",
    items: [["Perfil", "↗↘", "sube y baja", "arco, onda"], ["Intervalo", "3.ª 5.ª 8.ª", "distancia", "entre notas"], ["Escala", "M / m", "mayor, menor", "pentatónica"], ["Frase", "A A' B A", "motivo", "pregunta-respuesta"]],
  },
  video: { id: "0DuXjdkAYrg", titulo: "Beethoven y el secreto de la melodía más famosa del mundo", canal: "Jaime Altozano", vistas: 3772509 },
  quiz: [
    ["Una melodía es…", ["un conjunto de notas simultáneas", "una sucesión de sonidos de distinta altura y duración con sentido", "solo el ritmo", "un instrumento"], 1, "Une alturas y ritmo en una idea."],
    ["El ámbito de una melodía es…", ["su velocidad", "la distancia entre su nota más grave y la más aguda", "su compás", "su letra"], 1, "Mide su extensión."],
    ["Moverse entre notas vecinas es hacerlo por…", ["saltos", "grados conjuntos", "acordes", "octavas"], 1, "Como subir una escalera peldaño a peldaño."],
    ["De Do a Sol hay una…", ["tercera", "cuarta", "quinta", "octava"], 2, "Do, Re, Mi, Fa, Sol: cinco notas."],
    ["Dos semitonos forman…", ["una octava", "un tono", "una quinta", "una tercera"], 1, "Tono = 2 semitonos."],
    ["La escala mayor suena, en general…", ["luminosa", "oscura", "atonal", "sin centro"], 0, "La menor suele sonar más melancólica."],
    ["La escala de cinco notas típica del blues y la música oriental es la…", ["cromática", "pentatónica", "mayor", "dórica"], 1, "Penta = cinco."],
    ["La idea mínima reconocible de una melodía es el…", ["motivo", "acorde", "compás", "ámbito"], 0, "Por ejemplo, las cuatro notas de la Quinta de Beethoven."],
    ["Repetir un motivo a otra altura es una…", ["inversión", "secuencia", "aumentación", "cadencia"], 1, "La secuencia traslada el motivo."],
    ["Muchas notas sobre una misma sílaba es estilo…", ["silábico", "melismático", "rítmico", "armónico"], 1, "Típico del gregoriano y el flamenco."],
  ],
  examen: [
    ["Una frase con pregunta abierta y respuesta conclusiva tiene estructura de…", ["ostinato", "antecedente-consecuente", "polifonía", "rondó"], 1, "Las dos semifrases se complementan."],
    ["El motivo que vuelve con las notas más lentas ha sufrido una…", ["disminución", "aumentación", "inversión", "secuencia"], 1, "Aumentación: valores más largos."],
    ["Una melodía que va de Do4 a Do6 tiene un ámbito de…", ["una octava", "dos octavas", "una quinta", "una tercera"], 1, "De Do a Do dos veces."],
    ["¿Qué intervalo es disonante?", ["Octava", "Quinta", "Segunda", "Tercera"], 2, "La 2.ª crea tensión."],
    ["Subir la melodía en la palabra «cielo» es un…", ["melisma", "madrigalismo", "contratiempo", "acorde"], 1, "La música imita el significado del texto."],
  ],
  feynman: ["Qué es una melodía y cómo se describe su perfil", "La diferencia entre escala mayor y menor", "Motivo, semifrase y frase con un ejemplo", "Tres formas de desarrollar un motivo"],
  mapa: ["LA MELODÍA", [["Rasgos", "perfil · ámbito · grados y saltos"], ["Intervalos", "tono · semitono · consonante"], ["Escalas", "mayor · menor · pentatónica"], ["Estructura", "motivo · frase · desarrollo"]]],
  tarjetas: [
    ["Melodía", "Sucesión de sonidos de distinta altura y duración con sentido."],
    ["Perfil", "Contorno que dibuja la melodía al subir y bajar."],
    ["Ámbito", "Distancia entre la nota más grave y la más aguda."],
    ["Intervalo", "Distancia de altura entre dos notas."],
    ["Escala", "Serie ordenada de notas que sirve de base a la melodía."],
    ["Tónica", "Nota central y de reposo de una tonalidad."],
    ["Motivo", "Idea musical mínima reconocible."],
    ["Secuencia", "Repetición de un motivo a otra altura."],
  ],
  ejemplos: [
    ["Calcula el intervalo de Re a La.", ["Cuenta las notas incluyendo ambas: Re, Mi, Fa, Sol, La.", "Son cinco notas."], "Una quinta."],
    ["Analiza el motivo de la Quinta Sinfonía de Beethoven.", ["Tres notas repetidas cortas y una larga.", "Salto descendente de tercera.", "Ritmo corto-corto-corto-largo muy reconocible.", "Se repite enseguida un grado más abajo (secuencia)."], "Motivo rítmico-melódico de cuatro notas desarrollado por secuencia."],
    ["Describe la melodía de «Cumpleaños feliz».", ["La lleva la voz, en estilo silábico.", "Ámbito de una octava.", "Combina grados conjuntos con saltos (el salto de octava en la tercera frase).", "Tonalidad mayor y cuatro frases cortas."], "Melodía silábica, mayor, de ámbito de octava, con grados y un salto expresivo."],
  ],
  errores: [
    "Contar los intervalos sin incluir la primera nota (Do-Mi es tercera, no segunda).",
    "Pensar que mayor significa siempre alegre y menor siempre triste: depende también del ritmo y el tempo.",
    "Confundir motivo y frase: el motivo es mucho más corto.",
    "Describir solo si la melodía «es bonita» sin usar perfil, ámbito y movimiento.",
  ],
  ejercicios: {
    b: [
      ["Define perfil y ámbito de una melodía.", "Perfil: contorno que dibuja al subir y bajar. Ámbito: distancia entre su nota más grave y la más aguda."],
      ["Nombra los intervalos Do-Re, Do-Fa y Do-Do agudo.", "Segunda, cuarta y octava."],
      ["Escribe la fórmula de tonos y semitonos de la escala mayor.", "T-T-S-T-T-T-S."],
      ["¿Qué es un motivo?", "La idea melódica o rítmica más pequeña y reconocible de una obra."],
    ],
    m: [
      ["Explica la diferencia entre movimiento por grados conjuntos y por saltos y su efecto.", "Por grados: notas vecinas, fluido y fácil de cantar. Por saltos: notas separadas, llama la atención y resulta más expresivo o tenso."],
      ["¿Por qué una frase de pregunta y respuesta suena completa?", "Porque la primera semifrase termina en suspenso (sin reposo) y la segunda resuelve en la tónica, dando sensación de cierre."],
      ["Describe secuencia e inversión con un ejemplo inventado.", "Secuencia: Do-Re-Mi repetido como Re-Mi-Fa. Inversión: Do-Re-Mi (sube) convertido en Do-Si-La (baja)."],
      ["¿Qué diferencia hay entre estilo silábico y melismático?", "En el silábico cada sílaba tiene una nota; en el melismático una sílaba se canta con muchas notas."],
    ],
    a: [
      ["Analiza la melodía principal de una canción actual con las cinco preguntas del tema.", "Respuesta abierta: indica voz o instrumento, perfil y ámbito, tipo de movimiento, escala o modo y motivo con su desarrollo, con ejemplos de minutaje."],
      ["Compón un motivo de cuatro notas y desarróllalo con repetición, secuencia e inversión hasta formar una frase de ocho compases.", "Respuesta abierta: el motivo debe reconocerse en todas sus transformaciones y la frase debe terminar en la tónica."],
    ],
  },
  glosario: [
    ["Grado conjunto", "Paso entre dos notas vecinas de la escala."],
    ["Salto", "Paso entre dos notas no vecinas."],
    ["Semitono", "Menor distancia entre dos notas en la música occidental."],
    ["Consonancia", "Intervalo que suena estable y en reposo."],
    ["Disonancia", "Intervalo que suena tenso y pide resolución."],
    ["Tonalidad", "Organización de las notas alrededor de una tónica."],
    ["Pentatónica", "Escala de cinco notas."],
    ["Frase", "Unidad melódica completa, normalmente de ocho compases."],
    ["Melisma", "Grupo de notas cantadas sobre una sola sílaba."],
    ["Madrigalismo", "Recurso que imita con la música el significado del texto."],
  ],
  situacion: {
    titulo: "El motivo de la clase",
    reto: "Componer en grupo una sintonía de 8 compases para la radio del instituto a partir de un motivo.",
    pasos: [
      "Inventad un motivo de 3 a 5 notas fácil de recordar.",
      "Desarrolladlo con repetición, secuencia y variación.",
      "Organizad la sintonía como pregunta y respuesta que acabe en la tónica.",
      "Grabadla con un instrumento o una app y explicad su análisis.",
    ],
    producto: "Una sintonía grabada y su ficha de análisis melódico.",
    evaluacion: [
      "El motivo es claro y reconocible.",
      "Usa al menos dos procedimientos de desarrollo.",
      "La frase tiene estructura de pregunta y respuesta.",
      "El análisis usa el vocabulario del tema.",
    ],
  },
  familias: [
    "Cantad juntos una canción y dibujad con la mano su perfil.",
    "Pedidle que os enseñe la diferencia entre una escala mayor y una menor.",
    "Buscad sintonías famosas y comentad por qué se recuerdan.",
    "Escuchad la Quinta de Beethoven y contad cuántas veces aparece el motivo.",
  ],
  saberes: "Análisis Musical I: la melodía, perfil, ámbito y movimiento; intervalos, tono y semitono; escalas mayor, menor, modales y pentatónica; motivo, semifrase y frase; procedimientos de desarrollo; relación entre melodía y texto.",
  ideas: [
    "Dibujar en la pizarra el perfil de melodías conocidas.",
    "Identificar de oído intervalos con canciones de referencia.",
    "Comparar una melodía en modo mayor y en modo menor.",
    "Componer motivos con apps de secuenciador.",
  ],
  fuentes: [
    { t: "Sinfonía n.º 5 (Beethoven), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sinfon%C3%ADa_n.%C2%BA_5_(Beethoven)" },
    { t: "Melodía, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Melod%C3%ADa" },
  ],
});
