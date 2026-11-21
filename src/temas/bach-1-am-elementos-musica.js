// Análisis Musical I, 1º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-am");

module.exports = B.tema({
  titulo: "Los elementos de la música",
  minutos: 60,
  objetivos: [
    "Explicar qué es analizar una obra musical y para qué sirve",
    "Reconocer las cuatro cualidades del sonido: altura, duración, intensidad y timbre",
    "Distinguir los elementos de la música: ritmo, melodía, armonía, textura, forma y timbre",
    "Aplicar una guía sencilla de audición activa a cualquier obra",
  ],
  claves: ["sonido", "silencio", "altura", "duración", "intensidad", "timbre", "audición activa", "análisis"],
  pregunta: {
    texto: "Escuchas una canción y en tres segundos sabes si te gusta. ¿Qué has oído exactamente en esos tres segundos?",
    respuesta: "Mucho más de lo que crees: un <mark>ritmo</mark> que te mueve, una <mark>melodía</mark> que se te queda, unos acordes que dan color, unos instrumentos con su timbre. El análisis musical pone nombre a todo eso para que puedas <b>escuchar con los oídos abiertos</b> y explicar por qué una música funciona.",
  },
  lectura: {
    titulo: "El silencio más famoso",
    html: `<p>En 1952, el pianista David Tudor se sentó ante un piano, abrió la tapa del teclado… y no tocó ni una nota durante cuatro minutos y treinta y tres segundos. Era el estreno de <i>4′33″</i>, de John Cage. El público se indignó, pero empezó a oír otras cosas: la lluvia en el tejado, toses, sillas que crujían.</p>
    <p>Cage quería demostrar que el silencio absoluto no existe y que <b>escuchar</b> es una actitud activa. Esa es la base del análisis musical: prestar atención a lo que suena, cómo suena y por qué. En este tema conocerás las piezas con las que se construye cualquier música, de Bach a Rosalía.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es analizar una obra musical",
      html: `<p><b>Analizar</b> una obra es descomponerla en sus elementos para entender cómo está hecha y qué efecto produce. No se trata de quitarle la magia, sino de <mark>escuchar mejor</mark>: quien sabe qué buscar descubre detalles que antes pasaban desapercibidos.</p>
      <p>El análisis puede hacerse <b>de oído</b> (análisis auditivo), leyendo la <b>partitura</b> o combinando ambos. En este curso trabajaremos sobre todo de oído, apoyándonos en partituras sencillas.</p>
      <p>Siempre se analiza con tres preguntas: <b>qué</b> suena (elementos), <b>cómo</b> se organiza (forma) y <b>para qué</b> o en qué contexto se hizo (estilo, época, función).</p>`,
      svg: B.cajas("Las tres preguntas del análisis musical", [["¿Qué suena?", "elementos|del sonido"], ["¿Cómo se organiza?", "partes|y forma"], ["¿Para qué?", "contexto|y estilo"]], { cols: 3 }),
    },
    {
      h: "Sonido, ruido y silencio",
      html: `<p>El <b>sonido</b> es una vibración que viaja por el aire en forma de ondas y que nuestro oído percibe. Cuando la vibración es regular hablamos de <b>sonido determinado</b> (una nota de flauta); cuando es irregular, de <b>ruido</b> o sonido indeterminado (un golpe de caja).</p>
      <p>La música usa ambos: la batería y muchas percusiones trabajan con ruidos organizados. Y usa también el <b>silencio</b>, que no es ausencia de música sino parte de ella: separa frases, crea tensión y deja respirar.</p>
      <p>La música es, por tanto, el arte de <mark>organizar sonidos y silencios en el tiempo</mark>.</p>`,
      svg: B.comparar("Sonido determinado frente a ruido", ["Sonido", ["vibración regular", "altura clara", "flauta, voz", "se puede cantar"]], ["Ruido", ["vibración irregular", "altura difusa", "caja, platillo", "se usa como ritmo"]]),
    },
    {
      h: "Las cuatro cualidades del sonido",
      html: `<p>Todo sonido tiene cuatro cualidades. La <b>altura</b> depende de la frecuencia de la vibración: pocas vibraciones por segundo dan sonidos <b>graves</b>; muchas, <b>agudos</b>. Se mide en hercios (Hz): el La de afinar tiene 440 Hz.</p>
      <p>La <b>duración</b> es el tiempo que se mantiene el sonido; de ella nace el ritmo. La <b>intensidad</b> depende de la amplitud de la onda: sonidos fuertes o suaves. Se mide en decibelios y en la partitura se indica con matices (<i>piano</i>, <i>forte</i>).</p>
      <p>El <b>timbre</b> es la «voz» propia de cada fuente sonora: lo que distingue un violín de una trompeta aunque toquen la misma nota con la misma fuerza.</p>`,
      svg: B.ondas("La altura depende de la frecuencia y la intensidad de la amplitud de la onda"),
      video: { id: "5JHUCYtmM_M", titulo: "Propiedades del sonido (amplitud, periodo y frecuencia)", canal: "KhanAcademyEspañol", vistas: 118641 },
    },
    {
      h: "Los elementos de la música",
      html: `<p>Con las cualidades del sonido se construyen los <b>elementos de la música</b>, que estudiaremos uno por uno en este curso:</p>
      <p><b>Ritmo</b>: cómo se organizan las duraciones en el tiempo. <b>Melodía</b>: una sucesión de alturas que percibimos como una idea. <b>Armonía</b>: sonidos simultáneos que forman acordes. <b>Textura</b>: cómo se combinan las distintas líneas. <b>Forma</b>: cómo se ordenan las partes de la obra. <b>Timbre</b>: qué instrumentos o voces suenan.</p>
      <p>En una obra real todos actúan a la vez. Analizar es aprender a <mark>separarlos con el oído</mark>, como quien distingue los ingredientes de un plato.</p>`,
      svg: B.estrella("Los seis elementos de la música", "La música", ["Ritmo", "Melodía", "Armonía", "Textura", "Forma", "Timbre"]),
    },
    {
      h: "Dinámica, tempo y carácter",
      html: `<p>Además de las notas, el compositor indica <b>cómo</b> deben sonar. La <b>dinámica</b> son los matices de intensidad: <i>pp</i> (pianísimo), <i>p</i>, <i>mf</i>, <i>f</i>, <i>ff</i> (fortísimo), y los cambios graduales: <i>crescendo</i> (aumentando) y <i>diminuendo</i> (disminuyendo).</p>
      <p>El <b>tempo</b> es la velocidad del pulso. Se indica con términos italianos (<i>Largo</i>, <i>Adagio</i>, <i>Andante</i>, <i>Allegro</i>, <i>Presto</i>) o con el metrónomo: ♩ = 120 son 120 pulsos por minuto.</p>
      <p>Dinámica y tempo, junto con la articulación (ligado, picado), definen el <b>carácter</b> de la música: alegre, solemne, misterioso, enérgico.</p>`,
      svg: B.capas("Términos de tempo, del más lento al más rápido", [["Largo", "muy lento, solemne"], ["Adagio", "lento"], ["Andante", "al paso"], ["Allegro", "rápido, alegre"], ["Presto", "muy rápido"]]),
    },
    {
      h: "La partitura",
      html: `<p>La <b>partitura</b> es la escritura de la música. Las notas se colocan en el <b>pentagrama</b>, cinco líneas y cuatro espacios; cuanto más arriba, más aguda es la nota. La <b>clave</b> del principio (de sol, de fa) indica qué nota corresponde a cada línea.</p>
      <p>La forma de la nota (redonda, blanca, negra, corchea…) indica su duración. Al inicio aparecen también el <b>compás</b> y la <b>armadura</b> (sostenidos o bemoles fijos).</p>
      <p>No hace falta leer partitura con soltura para analizar, pero ayuda a <mark>ver</mark> lo que se oye: una melodía que sube se ve subir en el papel.</p>`,
      svg: B.melodia("Escala de do mayor en clave de sol: las notas suben en el pentagrama", [-2, -1, 0, 1, 2, 3, 4, 5], { nombres: ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si", "Do"], perfil: true }),
      video: { id: "P7iC-fbdKmQ", titulo: "¿Por qué tenemos 12 notas musicales? Música y matemáticas", canal: "Lemnismath", vistas: 6065319 },
    },
    {
      h: "La audición activa",
      html: `<p>Oír es pasivo; <b>escuchar</b> es activo. La <b>audición activa</b> consiste en escuchar una obra varias veces, cada vez con un objetivo: primero la impresión general, después un elemento concreto (el ritmo, los instrumentos, las partes).</p>
      <p>Ayuda tomar notas con <b>minutaje</b> («0:45 entra el coro»), dibujar un <b>musicograma</b> (un esquema visual de la obra con colores y símbolos) y comparar versiones distintas de una misma pieza.</p>`,
      svg: B.flujo("Audición activa en cuatro escuchas", ["Impresión general", "Instrumentos y voces", "Ritmo, melodía y armonía", "Partes y minutaje"]),
    },
    {
      h: "Guía de análisis para todo el curso",
      html: `<p>Para comentar cualquier obra sigue esta guía. <b>1. Ficha</b>: título, autor, época, género y plantilla. <b>2. Elementos</b>: ritmo y compás, melodía, armonía, textura y timbre. <b>3. Forma</b>: partes, repeticiones y contrastes, con su minutaje. <b>4. Contexto y valoración</b>: estilo, función y qué te transmite.</p>
      <p>Durante el curso iremos llenando cada casilla. Al final, en el tema 8, aplicarás la guía completa a obras de estilos muy distintos.</p>`,
      svg: B.cajas("Guía de análisis musical", [["1. Ficha", "autor, época|género"], ["2. Elementos", "ritmo, melodía|armonía, textura"], ["3. Forma", "partes|y minutaje"], ["4. Contexto", "estilo|y valoración"]]),
    },
  ],
  figura: {
    titulo: "Del sonido a la música",
    items: [["Sonido", "〰", "vibración", "regular o ruido"], ["Cualidades", "4", "altura, duración", "intensidad, timbre"], ["Elementos", "6", "ritmo, melodía, armonía", "textura, forma, timbre"], ["Análisis", "👂", "escucha activa", "ficha, forma, contexto"]],
  },
  video: { id: "hM6DYAf6kl0", titulo: "¿Qué es la música en realidad?", canal: "CuriosaMente", vistas: 1251792 },
  quiz: [
    ["Analizar una obra musical es…", ["copiarla", "descomponerla en sus elementos para entender cómo está hecha", "tocarla de memoria", "cambiarle la letra"], 1, "El análisis busca entender cómo funciona la obra."],
    ["Un golpe de caja es un ejemplo de…", ["sonido determinado", "ruido o sonido indeterminado", "silencio", "melodía"], 1, "Su vibración es irregular y no tiene altura clara."],
    ["La altura de un sonido depende de…", ["la amplitud", "la frecuencia", "la duración", "el timbre"], 1, "Más vibraciones por segundo: más agudo."],
    ["La cualidad que distingue un violín de una flauta tocando la misma nota es…", ["la altura", "la intensidad", "el timbre", "la duración"], 2, "El timbre es la «voz» propia de cada instrumento."],
    ["La intensidad se indica en la partitura con…", ["matices como p y f", "la clave", "la armadura", "el compás"], 0, "Piano, forte y sus variantes."],
    ["¿Qué elemento organiza las duraciones en el tiempo?", ["La melodía", "El ritmo", "La armonía", "El timbre"], 1, "El ritmo nace de la duración."],
    ["Allegro significa…", ["muy lento", "lento", "rápido", "cada vez más fuerte"], 2, "Es un tempo rápido y alegre."],
    ["Crescendo indica…", ["acelerar", "aumentar la intensidad poco a poco", "repetir", "hacer silencio"], 1, "Es un cambio gradual de dinámica."],
    ["En el pentagrama, una nota más arriba es…", ["más larga", "más aguda", "más fuerte", "más grave"], 1, "La posición vertical indica la altura."],
    ["Un musicograma es…", ["un instrumento", "un esquema visual de una obra", "un tipo de compás", "una clave"], 1, "Ayuda a seguir la audición con colores y símbolos."],
  ],
  examen: [
    ["El La de afinar tiene 440 Hz. Una nota de 880 Hz será…", ["más grave", "más aguda", "más fuerte", "igual"], 1, "Al doble de frecuencia: la misma nota una octava más aguda."],
    ["¿Qué demuestra 4′33″ de John Cage?", ["Que el piano estaba roto", "Que el silencio absoluto no existe y escuchar es activo", "Que la música debe ser rápida", "Que no hace falta público"], 1, "El público acaba oyendo los sonidos del entorno."],
    ["Ordena de más lento a más rápido: Allegro, Adagio, Presto.", ["Presto, Allegro, Adagio", "Adagio, Allegro, Presto", "Allegro, Adagio, Presto", "Adagio, Presto, Allegro"], 1, "Adagio es lento; Presto, muy rápido."],
    ["En una audición activa, anotar «1:12 entra la trompeta» es hacer…", ["un minutaje", "una armadura", "un crescendo", "una cadencia"], 0, "El minutaje sitúa los hechos en el tiempo."],
    ["¿Qué elemento describe cómo se combinan las distintas líneas que suenan a la vez?", ["La forma", "La textura", "La dinámica", "El tempo"], 1, "La textura es el «tejido» de la música."],
  ],
  feynman: ["Qué es analizar una obra y para qué sirve", "Las cuatro cualidades del sonido con un ejemplo de cada una", "Los seis elementos de la música", "Cómo se hace una audición activa"],
  mapa: ["ELEMENTOS DE LA MÚSICA", [["Sonido", "determinado · ruido · silencio"], ["Cualidades", "altura · duración · intensidad · timbre"], ["Elementos", "ritmo · melodía · armonía · textura · forma"], ["Escucha", "audición activa · guía de análisis"]]],
  tarjetas: [
    ["Análisis musical", "Descomponer una obra en sus elementos para entender cómo está hecha."],
    ["Altura", "Grave o agudo; depende de la frecuencia (Hz)."],
    ["Duración", "Tiempo que dura un sonido; origen del ritmo."],
    ["Intensidad", "Fuerte o suave; depende de la amplitud y se indica con matices."],
    ["Timbre", "Cualidad que distingue unas fuentes sonoras de otras."],
    ["Tempo", "Velocidad del pulso: Adagio, Andante, Allegro…"],
    ["Dinámica", "Matices de intensidad: p, f, crescendo, diminuendo."],
    ["Audición activa", "Escuchar varias veces con un objetivo concreto cada vez."],
  ],
  ejemplos: [
    ["Indica qué cualidad del sonido cambia en cada caso: un cantante pasa de susurrar a gritar la misma nota; una niña y un hombre cantan «cumpleaños feliz».", ["Al pasar de susurrar a gritar cambia la amplitud de la onda.", "La niña canta más agudo que el hombre: cambia la frecuencia.", "Además, sus voces suenan distintas: también cambia el timbre."], "Primer caso: intensidad. Segundo caso: altura (y timbre)."],
    ["Una partitura indica «Adagio, p, crescendo hasta ff». Describe cómo sonará.", ["Adagio: tempo lento.", "p: empieza suave.", "Crescendo hasta ff: la intensidad aumenta poco a poco hasta muy fuerte."], "Una música lenta que empieza suave y va creciendo hasta un final muy intenso."],
    ["Planifica la audición activa de una canción de tres minutos.", ["1.ª escucha: impresión general y carácter.", "2.ª escucha: voces e instrumentos.", "3.ª escucha: ritmo, melodía y acordes.", "4.ª escucha: partes con minutaje (estrofa, estribillo…)."], "Cuatro escuchas, cada una con un objetivo, y notas con minutaje."],
  ],
  errores: [
    "Confundir altura con intensidad: «más alto» en música significa más agudo, no más fuerte.",
    "Pensar que el silencio no forma parte de la música.",
    "Analizar solo la letra de una canción y olvidar los elementos musicales.",
    "Escuchar una sola vez y querer describirlo todo a la vez.",
  ],
  ejercicios: {
    b: [
      ["Define sonido, ruido y silencio.", "Sonido: vibración regular que percibimos con altura clara. Ruido: vibración irregular, sin altura definida. Silencio: ausencia de sonido que forma parte de la música."],
      ["Enumera las cuatro cualidades del sonido y la magnitud física de cada una.", "Altura (frecuencia), duración (tiempo), intensidad (amplitud) y timbre (forma de la onda, armónicos)."],
      ["Ordena de más suave a más fuerte: f, pp, mf, p, ff.", "pp, p, mf, f, ff."],
      ["Nombra los seis elementos de la música.", "Ritmo, melodía, armonía, textura, forma y timbre."],
    ],
    m: [
      ["¿Por qué una guitarra y un piano que tocan el mismo La a la misma intensidad suenan distinto?", "Porque tienen distinto timbre: cada instrumento produce una combinación diferente de armónicos que da forma propia a la onda."],
      ["Explica la diferencia entre oír y escuchar con un ejemplo.", "Oír es percibir sin atención (la música de fondo de una tienda); escuchar es atender de forma activa (seguir la línea del bajo de una canción)."],
      ["Una música tiene ♩ = 60 y otra ♩ = 140. ¿Cuál es más rápida y qué término italiano le cuadra a cada una?", "La de 140 es más rápida (Allegro o Vivace); la de 60 es lenta (Adagio o Larghetto)."],
      ["¿Qué información da la partitura que no da una grabación?", "Las notas exactas, el compás, la armadura, los matices y las indicaciones del compositor tal como las escribió."],
    ],
    a: [
      ["Elige una canción actual y rellena la guía de análisis: ficha, elementos que reconozcas, partes con minutaje y valoración.", "Respuesta abierta: debe incluir ficha completa, al menos tres elementos descritos con vocabulario del tema, partes con minutaje y una valoración argumentada."],
      ["Dibuja un musicograma de los primeros 60 segundos de una obra instrumental que te guste.", "Respuesta abierta: línea de tiempo con minutaje, colores o símbolos para cada instrumento o sección y marcas de cambios de dinámica."],
    ],
  },
  glosario: [
    ["Sonido determinado", "Sonido de vibración regular con altura definida."],
    ["Ruido", "Sonido de vibración irregular sin altura definida."],
    ["Frecuencia", "Número de vibraciones por segundo; se mide en hercios (Hz)."],
    ["Amplitud", "Tamaño de la onda; determina la intensidad."],
    ["Matiz", "Indicación de intensidad en la partitura (p, f…)."],
    ["Tempo", "Velocidad del pulso de una obra."],
    ["Pentagrama", "Cinco líneas y cuatro espacios donde se escriben las notas."],
    ["Clave", "Signo que fija el nombre de las notas en el pentagrama."],
    ["Minutaje", "Indicación del minuto y segundo en que ocurre algo en una grabación."],
    ["Musicograma", "Representación gráfica y sencilla de una obra para seguir su audición."],
  ],
  situacion: {
    titulo: "Mi banda sonora analizada",
    reto: "Elige la canción que más has escuchado este año y preséntala a la clase con la guía de análisis.",
    pasos: [
      "Escucha la canción cuatro veces con la guía de audición activa.",
      "Anota los elementos que reconozcas con su minutaje.",
      "Dibuja un musicograma sencillo de la canción.",
      "Explica en dos minutos qué la hace funcionar, usando el vocabulario del tema.",
    ],
    producto: "Una ficha de análisis y un musicograma de la canción elegida.",
    evaluacion: [
      "Identifica correctamente las cualidades del sonido y varios elementos.",
      "Usa minutaje preciso.",
      "Emplea vocabulario técnico con corrección.",
      "Argumenta su valoración personal.",
    ],
  },
  familias: [
    "Pedidle que os explique por qué le gusta su canción favorita usando lo aprendido.",
    "Escuchad juntos una música de vuestra juventud y comparad tempo e instrumentos.",
    "Jugad a adivinar instrumentos solo por su timbre.",
    "Id a un concierto o escuchad uno en directo por internet.",
  ],
  saberes: "Análisis Musical I: el sonido y sus cualidades, el silencio, los elementos de la música (ritmo, melodía, armonía, textura, forma, timbre), dinámica y tempo, la partitura como apoyo y la audición activa como método de análisis.",
  ideas: [
    "Empezar con 4′33″ de Cage y comentar qué se oyó en clase.",
    "Comparar dos versiones de una misma canción para descubrir los elementos.",
    "Crear entre todos una guía de análisis que se use todo el curso.",
    "Usar un afinador o una app de espectro para «ver» frecuencia y amplitud.",
  ],
  fuentes: [
    { t: "4′33″ de John Cage, Wikipedia en español", url: "https://es.wikipedia.org/wiki/4%E2%80%B233%E2%80%B3" },
    { t: "Cualidades del sonido, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sonido" },
  ],
});
