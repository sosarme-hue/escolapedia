// Análisis Musical II, 2º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-am");

module.exports = B.tema({
  titulo: "El análisis musical: método, audición y comentario",
  minutos: 60,
  objetivos: [
    "Aplicar un método ordenado para analizar una obra por audición o con partitura",
    "Relacionar los elementos del lenguaje musical con la forma, el género y el estilo",
    "Situar una obra en su época a partir de rasgos sonoros",
    "Redactar un comentario de audición claro, con minutaje y vocabulario técnico",
  ],
  claves: ["análisis", "audición", "partitura", "forma", "género", "estilo", "minutaje", "comentario"],
  pregunta: {
    texto: "Si escuchas tres minutos de una obra que no conoces, ¿puedes saber de qué siglo es?",
    respuesta: "Muchas veces, sí. Cada época tiene una <mark>huella sonora</mark>: la plantilla instrumental, el tipo de textura, la armonía y la forma delatan el estilo. El análisis consiste en reunir esas pistas, como un detective, y justificar la conclusión con ejemplos concretos de la audición.",
  },
  lectura: {
    titulo: "Escuchar como un detective",
    html: `<p>En los exámenes de acceso a conservatorios superiores hay una prueba que impresiona: suena una obra desconocida y hay que decir su época, su forma y, si es posible, su autor. Parece magia, pero es método. Quien analiza no adivina: escucha por capas, anota lo que oye con el minuto exacto y compara con lo que sabe de cada estilo.</p>
    <p>En 1.º aprendiste a reconocer los elementos de la música. En 2.º das un paso más: aplicarlos a las grandes <b>formas y géneros</b> de la historia, desde el canto gregoriano hasta el flamenco o la música de videojuegos. Este primer tema te da la caja de herramientas que usarás en todos los demás.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es analizar una obra",
      html: `<p><b>Analizar</b> es descomponer una obra en sus partes para entender cómo funciona y por qué produce el efecto que produce. No basta con describir («suena un violín»): hay que <b>relacionar</b> lo que se oye con la forma, el género y el estilo.</p>
      <p>Se puede analizar de dos maneras complementarias. El <b>análisis auditivo</b> parte solo de la escucha, como en la PAU. El <b>análisis con partitura</b> permite ver la armonía, los temas y las proporciones con precisión. Un buen analista combina los dos y siempre vuelve al sonido: la partitura es un mapa, no el territorio.</p>`,
      svg: B.comparar("Dos maneras de analizar", ["Por audición", ["solo la escucha", "minutaje", "rasgos generales", "como en la PAU"]], ["Con partitura", ["se ve la armonía", "compases exactos", "temas y motivos", "proporciones"]]),
    },
    {
      h: "Escuchar por capas",
      html: `<p>Nadie lo oye todo a la vez. El truco es <b>escuchar varias veces</b>, fijándose cada vez en una capa distinta. Primera escucha: impresión general, carácter y plantilla. Segunda: ritmo, tempo y compás. Tercera: melodía y textura. Cuarta: armonía y dinámica. Quinta: forma, marcando los cambios con el <b>minutaje</b> (0:00, 0:45, 1:30…).</p>
      <p>Anota en una tabla mientras escuchas. Los cambios de sección suelen coincidir con una <mark>cadencia</mark>, un cambio de instrumentación, de dinámica o la vuelta de un tema conocido. Con la práctica, varias capas se oyen a la vez, pero al principio conviene ir despacio y no saltarse ninguna.</p>`,
      svg: B.flujo("Cinco escuchas, cinco capas", ["Carácter y plantilla", "Ritmo y tempo", "Melodía y textura", "Armonía y dinámica", "Forma con minutaje"]),
    },
    {
      h: "Forma, género y estilo",
      html: `<p>Tres palabras que se confunden a menudo. La <b>forma</b> es la estructura interna: cómo se ordenan y repiten las secciones (binaria AB, ternaria ABA, rondó, sonata, variaciones). El <b>género</b> es el tipo de obra según su función y plantilla: misa, ópera, sinfonía, lied, canción pop. El <b>estilo</b> es el conjunto de rasgos de una época, un lugar o un autor: barroco, romántico, flamenco, jazz.</p>
      <p>Una misma forma aparece en géneros distintos (la sonata está en sinfonías, cuartetos y conciertos) y un mismo género cambia de estilo con los siglos.</p>`,
      svg: B.cajas("Tres niveles del análisis", [["Forma", "estructura|AB · ABA · sonata"], ["Género", "tipo de obra|misa · sinfonía · lied"], ["Estilo", "época o autor|barroco · jazz"]], { cols: 3 }),
    },
    {
      h: "Las formas básicas",
      html: `<p>Casi todas las formas nacen de dos principios: <b>repetición</b> y <b>contraste</b>. La forma <b>binaria</b> (AB) presenta dos secciones, típica de las danzas barrocas. La <b>ternaria</b> (ABA) vuelve al principio tras un contraste, como el minueto con trío o el aria da capo. El <b>rondó</b> (ABACA) alterna un estribillo con coplas. El <b>tema con variaciones</b> repite una idea transformándola (A A' A'' A''').</p>
      <p>Las formas grandes, como la sonata o la fuga, combinan estos principios con el desarrollo de motivos y el plan tonal. Para nombrarlas se usan letras mayúsculas: una letra nueva indica material nuevo, y el apóstrofo (A') una vuelta variada.</p>`,
      svg: B.formas("Formas básicas en bloques", [["Binaria", "A B"], ["Ternaria", "A B A"], ["Rondó", "A B A C A"], ["Variaciones", "A A' A'' A'''"]], "Repetición y contraste"),
    },
    {
      h: "Pistas para fechar una obra",
      html: `<p>Algunas preguntas orientan enseguida. ¿Hay <b>bajo continuo</b> (clave u órgano que rellena acordes)? Probablemente Barroco. ¿Una sola melodía vocal sin acompañamiento y en latín? Gregoriano. ¿Varias voces imitándose sin instrumentos? Renacimiento. ¿Orquesta clásica con frases simétricas y claras? Clasicismo. ¿Gran orquesta, cromatismo y contrastes extremos? Romanticismo. ¿Disonancias sin resolver, ritmos irregulares o sonidos electrónicos? Siglo XX.</p>
      <p>Son pistas, no reglas: siempre hay que confirmarlas con varios rasgos a la vez.</p>`,
      svg: B.rejilla("Rasgos que delatan la época", ["Pista", "Época probable"], [["Monodia en latín", "Edad Media"], ["Polifonía imitativa a cappella", "Renacimiento"], ["Bajo continuo", "Barroco"], ["Frases simétricas", "Clasicismo"], ["Cromatismo, gran orquesta", "Romanticismo"]]),
    },
    {
      h: "El contexto",
      html: `<p>La música no nace en el vacío. Para quién se compuso, dónde se interpretaba y con qué función explica muchas decisiones. Una misa se escribe para la liturgia; una suite, para el entretenimiento de una corte; una sinfonía, para el público burgués que paga una entrada; una canción pop, para la radio y las plataformas.</p>
      <p>En el comentario, el contexto no es una biografía del autor: es la explicación de <mark>por qué la obra suena así</mark>. Relaciona siempre el dato histórico con un rasgo que se oiga.</p>`,
      svg: B.capas("Función y lugar de la música", [["Iglesia", "misa, motete"], ["Corte y salón", "suite, lied"], ["Teatro y concierto", "ópera, sinfonía"]]),
    },
    {
      h: "El comentario de audición",
      html: `<p>El comentario sigue un orden fijo. <b>1. Ficha</b>: título, autor, año y plantilla, si se conocen. <b>2. Elementos</b>: ritmo, melodía, textura, armonía, timbre y dinámica, siempre con ejemplos y minutaje. <b>3. Forma</b>: secciones con su minutaje y su letra. <b>4. Género y estilo</b>: a qué tipo de obra y época pertenece y por qué. <b>5. Valoración</b>: importancia de la obra y opinión razonada.</p>
      <p>Usa vocabulario técnico, pero explica cada afirmación con lo que se oye.</p>`,
      svg: B.flujo("Partes del comentario", ["Ficha", "Elementos con ejemplos", "Forma con minutaje", "Género y estilo", "Valoración"]),
      video: { id: "-KadR5eHkSQ", titulo: "Cómo analizar cualquier obra musical. Una guía definitiva", canal: "Regin_arte", vistas: 15342 },
    },
    {
      h: "Errores que bajan la nota",
      html: `<p>Los más frecuentes: enumerar elementos sin ejemplos («el ritmo es variado»), contar la vida del compositor en lugar de analizar, olvidar el minutaje, confundir forma y género, y lanzar una época sin justificarla. También es un error describir solo la melodía y olvidar el acompañamiento.</p>
      <p>Un buen comentario es <b>concreto</b> («en 1:12 entra el oboe con el tema B, en menor»), <b>ordenado</b> y <b>argumentado</b>.</p>`,
      svg: B.comparar("Comentario flojo y comentario bueno", ["Flojo", ["«ritmo variado»", "biografía larga", "sin minutaje", "época sin razones"]], ["Bueno", ["ejemplo concreto", "rasgos que se oyen", "secciones con tiempo", "época argumentada"]]),
    },
  ],
  figura: {
    titulo: "Caja de herramientas del análisis",
    items: [["Escuchar", "5 capas", "una cosa", "cada vez"], ["Forma", "A B A", "repetición", "y contraste"], ["Estilo", "pistas", "rasgos", "de la época"], ["Comentario", "5 partes", "con minutaje", "y argumentos"]],
  },
  video: { id: "ObaaJF_4mtU", titulo: "5 pasos para hacer un análisis musical correcto", canal: "Sebas Gomez", vistas: 30583 },
  quiz: [
    ["Analizar una obra consiste en…", ["describir el sonido sin más", "descomponerla y relacionar sus partes", "contar la vida del autor", "copiar la partitura"], 1, "Se busca entender cómo funciona."],
    ["La estructura interna de una obra es su…", ["género", "forma", "estilo", "plantilla"], 1, "Forma: orden de secciones."],
    ["La misa, la ópera y la sinfonía son…", ["formas", "géneros", "estilos", "texturas"], 1, "Tipos de obra según función y plantilla."],
    ["La forma A B A es…", ["binaria", "ternaria", "rondó", "variación"], 1, "Vuelve al principio tras un contraste."],
    ["El rondó alterna…", ["dos temas sin repetir", "un estribillo con coplas", "solo variaciones", "voces imitativas"], 1, "A B A C A."],
    ["El minutaje sirve para…", ["medir el tempo", "situar cada sección en el tiempo", "contar compases", "afinar"], 1, "Ejemplo: B empieza en 0:48."],
    ["Si oyes un clave rellenando acordes, piensas en el…", ["Renacimiento", "Barroco", "Romanticismo", "siglo XX"], 1, "Es el bajo continuo."],
    ["Una melodía sola, vocal, en latín y sin compás marcado sugiere…", ["gregoriano", "ópera", "jazz", "lied"], 0, "Monodia litúrgica medieval."],
    ["En el comentario, el contexto debe…", ["ocupar la mitad", "explicar por qué la obra suena así", "evitarse", "ser una biografía"], 1, "Une historia y sonido."],
    ["¿Qué orden es el correcto?", ["Valoración, ficha, forma", "Ficha, elementos, forma, estilo, valoración", "Forma, ficha, elementos", "Estilo, valoración, ficha"], 1, "De lo concreto a la conclusión."],
  ],
  examen: [
    ["Una obra presenta A, luego B en otra tonalidad y termina con A. ¿Qué forma tiene?", ["Binaria", "Ternaria", "Rondó", "Variaciones"], 1, "A B A."],
    ["¿Cuál de estas frases es mejor para un comentario?", ["El ritmo es variado", "En 1:05 el ritmo pasa a corcheas y el tempo se acelera", "Me gusta mucho", "Es muy bonita"], 1, "Concreta y con minutaje."],
    ["Una sonata para piano y un cuarteto pueden compartir…", ["género", "forma", "plantilla", "función litúrgica"], 1, "La forma sonata aparece en varios géneros."],
    ["¿Qué rasgo NO ayuda a fechar una obra?", ["La plantilla", "La textura", "La duración del archivo", "La armonía"], 2, "La duración no indica época."],
    ["Las secciones suelen cambiar cuando hay…", ["una cadencia o cambio de instrumentación", "un silencio de público", "un error", "una nota larga cualquiera"], 0, "Cadencias, timbre y dinámica marcan límites."],
  ],
  feynman: ["Diferencia entre forma, género y estilo", "Cómo escuchar por capas", "Cinco pistas para fechar una obra", "Las partes de un comentario de audición"],
  mapa: ["EL ANÁLISIS MUSICAL", [["Escuchar", "capas · minutaje"], ["Organizar", "forma · género · estilo"], ["Situar", "pistas · contexto"], ["Escribir", "comentario en 5 partes"]]],
  tarjetas: [
    ["Análisis", "Estudio de una obra descomponiéndola en sus partes y relacionándolas."],
    ["Forma", "Estructura interna de una obra: orden de sus secciones."],
    ["Género", "Tipo de obra según función y plantilla: misa, ópera, sinfonía…"],
    ["Estilo", "Rasgos comunes de una época, lugar o autor."],
    ["Minutaje", "Indicación del momento exacto (min:seg) en que ocurre algo."],
    ["Forma ternaria", "A B A: exposición, contraste y vuelta."],
    ["Rondó", "Estribillo que alterna con coplas: A B A C A."],
    ["Plantilla", "Conjunto de voces e instrumentos que interpretan la obra."],
  ],
  ejemplos: [
    ["Escuchas: clave y cuerda, ritmo regular y motor, un violín solista alterna con el conjunto. ¿Época y género?", ["Clave = bajo continuo → Barroco.", "Solista que alterna con tutti → concierto.", "Ritmo motor constante → estilo barroco tardío."], "Concierto barroco (por ejemplo, de Vivaldi)."],
    ["Una canción tiene secciones: intro 0:00, estrofa 0:10, estribillo 0:40, estrofa 1:05, estribillo 1:35. Escribe su esquema.", ["Etiqueta: Intro, A (estrofa), B (estribillo).", "Orden: Intro A B A B."], "Forma estrófica con estribillo: Intro A B A B."],
    ["Redacta una frase de comentario sobre la textura de un coro a cuatro voces que se imitan.", ["Nombra la textura: polifonía imitativa.", "Da el ejemplo con minutaje.", "Relaciónalo con un estilo."], "«Desde 0:00 las cuatro voces entran sucesivamente con el mismo motivo: polifonía imitativa, propia del Renacimiento»."],
  ],
  errores: [
    "Describir elementos sin ejemplos concretos ni minutaje.",
    "Confundir forma (estructura) con género (tipo de obra).",
    "Dedicar el comentario a la biografía del compositor.",
    "Decir una época sin justificarla con rasgos que se oyen.",
  ],
  ejercicios: {
    b: [
      ["Define forma, género y estilo con un ejemplo de cada uno.", "Forma: estructura (ABA). Género: tipo de obra (sinfonía). Estilo: rasgos de época o autor (barroco)."],
      ["Escribe el esquema de una forma binaria, una ternaria y un rondó.", "Binaria: A B. Ternaria: A B A. Rondó: A B A C A (o A B A C A B A)."],
      ["Ordena las partes del comentario de audición.", "Ficha, elementos con ejemplos, forma con minutaje, género y estilo, valoración."],
      ["¿Qué es el minutaje y para qué sirve?", "Indicar el momento exacto de cada hecho musical (0:45). Permite justificar el análisis y delimitar las secciones."],
    ],
    m: [
      ["Explica por qué conviene escuchar una obra varias veces y en qué fijarse cada vez.", "Porque no se puede atender a todo a la vez. 1: carácter y plantilla; 2: ritmo y tempo; 3: melodía y textura; 4: armonía y dinámica; 5: forma con minutaje."],
      ["Indica tres señales auditivas de que empieza una sección nueva.", "Una cadencia conclusiva, un cambio de instrumentación o de dinámica y la entrada o vuelta de un tema."],
      ["Relaciona cada género con su lugar de interpretación: misa, suite, sinfonía, lied.", "Misa: iglesia. Suite: corte. Sinfonía: sala de conciertos. Lied: salón burgués."],
      ["Reescribe esta frase para que sirva en un comentario: «La melodía es bonita».", "Ejemplo: «La melodía, en registro medio y por grados conjuntos, forma frases de cuatro compases muy cantables (0:00-0:20)»."],
    ],
    a: [
      ["Escucha una obra de tu elección y redacta un comentario completo de unas 250 palabras.", "Respuesta abierta: debe incluir ficha, elementos con minutaje, esquema formal, género y estilo justificados y una valoración razonada."],
      ["Elige dos obras de épocas distintas y compara cinco rasgos que permitan diferenciarlas.", "Respuesta abierta: plantilla, textura, armonía, forma y ritmo, cada uno con un ejemplo de cada obra."],
    ],
  },
  glosario: [
    ["Audición", "Escucha atenta y dirigida de una obra."],
    ["Partitura", "Escritura de la música con todas sus partes."],
    ["Sección", "Parte de una obra con unidad propia."],
    ["Repetición", "Vuelta de un material ya escuchado."],
    ["Contraste", "Aparición de un material diferente."],
    ["Variación", "Repetición transformada de una idea."],
    ["Bajo continuo", "Bajo con acordes improvisados típico del Barroco."],
    ["Cadencia", "Final de frase o sección."],
    ["Contexto", "Circunstancias históricas y sociales de una obra."],
  ],
  situacion: {
    titulo: "El detective musical",
    reto: "Identificar la época de cinco fragmentos anónimos y defender la respuesta con pruebas sonoras.",
    pasos: [
      "El profesorado prepara cinco fragmentos de un minuto de épocas distintas.",
      "Cada grupo rellena una tabla de pistas con minutaje.",
      "Cada grupo propone época, género y forma probables.",
      "Se desvela la solución y se comentan los aciertos y las pistas engañosas.",
    ],
    producto: "Una tabla de pistas y un breve informe del grupo.",
    evaluacion: [
      "Identifica rasgos concretos con minutaje.",
      "Diferencia forma, género y estilo.",
      "Argumenta la época con varios rasgos.",
      "Usa vocabulario técnico con precisión.",
    ],
  },
  familias: [
    "Poned una canción y preguntadle qué secciones tiene y en qué minuto cambian.",
    "Escuchad juntos una obra clásica y tratad de adivinar el siglo.",
    "Pedidle que os explique la diferencia entre forma y género.",
    "Animadle a escribir un comentario breve de su canción favorita.",
  ],
  saberes: "Análisis Musical II: procedimientos de análisis auditivo y con partitura; elementos, forma, género y estilo; formas básicas (binaria, ternaria, rondó, variaciones); contexto y función; elaboración del comentario de audición con terminología adecuada.",
  ideas: [
    "Escuchas guiadas por capas con fichas de una sola pregunta.",
    "Concurso de fechar fragmentos en grupos.",
    "Corrección por pares de comentarios con una rúbrica.",
    "Modelar en la pizarra un comentario completo antes de pedirlo.",
  ],
  fuentes: [
    { t: "Forma musical, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Forma_musical" },
  ],
});
