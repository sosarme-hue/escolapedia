// Coro y Técnica Vocal I, 1º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ct");

module.exports = B.tema({
  titulo: "La voz y el aparato fonador",
  minutos: 60,
  objetivos: [
    "Describir las partes del aparato fonador y la función de cada una",
    "Explicar cómo se produce la voz: fuelle, vibrador y resonadores",
    "Distinguir voz hablada y voz cantada",
    "Reconocer las cualidades de la voz: altura, intensidad, timbre y duración",
  ],
  claves: ["aparato fonador", "laringe", "cuerdas vocales", "glotis", "fonación", "resonadores", "tesitura", "timbre"],
  pregunta: {
    texto: "Un violín necesita un arco, unas cuerdas y una caja de madera. ¿Dónde están el arco, las cuerdas y la caja cuando cantas?",
    respuesta: "Dentro de ti. El <mark>aire de los pulmones</mark> hace de arco, las <mark>cuerdas vocales</mark> de la laringe vibran como las cuerdas del violín y la <mark>boca, la nariz y la faringe</mark> amplifican el sonido como la caja. Tu cuerpo es el instrumento, y por eso hay que conocerlo y cuidarlo.",
  },
  lectura: {
    titulo: "Un instrumento que no se puede guardar en un estuche",
    html: `<p>Un pianista puede cambiar de piano y un guitarrista puede comprarse una guitarra mejor. Un cantante no: su instrumento es su propio cuerpo, va con él a todas partes y cambia con la edad, el cansancio, el estado de ánimo y hasta la humedad del aire.</p>
    <p>Las cuerdas vocales miden poco más de un centímetro y medio, pero cuando cantas un La agudo vibran cientos de veces por segundo. Nadie las ve mientras trabajan, y aun así puedes aprender a controlarlas con precisión. En este tema vas a abrir el «estuche» y descubrir cómo funciona tu voz por dentro.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es la voz",
      html: `<p>La <b>voz</b> es el sonido que producimos al hacer vibrar las <b>cuerdas vocales</b> con el aire que sale de los pulmones. La usamos para hablar, gritar, reír y cantar. En el canto es un instrumento musical completo: puede hacer melodías, cambiar de color y, además, decir palabras.</p>
      <p>La técnica vocal no busca «fabricar» una voz distinta, sino usar la propia de forma <b>sana, eficaz y expresiva</b>. Para eso hay que entender las tres partes del instrumento: el <b>fuelle</b>, el <b>vibrador</b> y los <b>resonadores</b>.</p>`,
      svg: B.flujo("Cómo nace la voz", ["Aire de los pulmones", "Vibran las cuerdas vocales", "Resuenan boca y nariz", "Articulan lengua y labios"]),
    },
    {
      h: "El aparato fonador y sus tres partes",
      html: `<p>El <b>aparato fonador</b> es el conjunto de órganos que intervienen en la voz. Se organiza en tres partes que trabajan a la vez:</p>
      <p>El <b>fuelle o aparato respiratorio</b> (pulmones, tráquea, diafragma y músculos del tronco) aporta el aire con la presión adecuada. El <b>vibrador</b> es la <b>laringe</b>, donde están las cuerdas vocales, que convierten el aire en sonido. Los <b>resonadores y articuladores</b> (faringe, boca, fosas nasales, lengua, labios, dientes y paladar) amplifican el sonido, le dan color y forman las vocales y consonantes.</p>`,
      svg: B.fonador("El aparato fonador: fuelle, vibrador y resonadores"),
      video: { id: "s6B2hjh3V80", titulo: "Laringe y voz", canal: "Paulina Moreano", vistas: 271108 },
    },
    {
      h: "La laringe y las cuerdas vocales",
      html: `<p>La <b>laringe</b> es un tubo de cartílagos situado en el cuello, encima de la tráquea; desde fuera notamos su parte delantera como la «nuez». En su interior están las <b>cuerdas o pliegues vocales</b>: dos repliegues de músculo y mucosa de unos 12 a 20 mm.</p>
      <p>El espacio entre ellas es la <b>glotis</b>. Al respirar, las cuerdas se separan y el aire pasa en silencio. Al hablar o cantar se juntan, y el aire que empuja desde abajo las hace vibrar muy deprisa, abriéndose y cerrándose cientos de veces por segundo. Encima de la laringe, la <b>epiglotis</b> cierra el paso al tragar para que la comida no vaya a los pulmones.</p>`,
      svg: B.glotis("Glotis abierta al respirar y cerrada al cantar"),
      video: { id: "vez5PeLL3q0", titulo: "Cómo funcionan las cuerdas vocales (movimiento en vivo y cantando)", canal: "Doc de la Voz", vistas: 151085 },
    },
    {
      h: "Cómo se produce el sonido vocal",
      html: `<p>La <b>fonación</b> sigue siempre el mismo camino. El diafragma y los músculos del tronco empujan el aire hacia arriba; las cuerdas vocales, juntas, oponen resistencia; la presión las separa un instante, el aire escapa, vuelven a cerrarse y el ciclo se repite. Esa vibración genera una onda sonora.</p>
      <p>El sonido que sale de la laringe es débil y «zumbón». Al pasar por la faringe, la boca y la nariz se <b>amplifica</b> y adquiere su timbre; la lengua, los labios y el paladar lo convierten en palabras. Por eso un buen cantante cuida a la vez el aire, la vibración y el espacio de resonancia.</p>`,
      svg: B.ciclo("El ciclo de vibración de las cuerdas vocales", "Vibración", ["Cuerdas juntas", "Sube la presión", "Se abren", "Escapa el aire", "Vuelven a cerrarse"]),
    },
    {
      h: "Las cualidades de la voz",
      html: `<p>Como cualquier sonido, la voz tiene cuatro cualidades. La <b>altura</b> (grave o aguda) depende de la frecuencia de vibración: cuerdas más tensas y finas vibran más rápido y dan notas agudas. La <b>intensidad</b> (piano o forte) depende de la presión del aire y del cierre de las cuerdas.</p>
      <p>El <b>timbre</b> es el color personal de cada voz y depende de la forma y tamaño de los resonadores. La <b>duración</b> depende del aire disponible y de cómo lo administramos. Controlar las cuatro es el objetivo de la técnica vocal.</p>`,
      svg: B.cajas("Cuatro cualidades de la voz", [["Altura", "grave o aguda|tensión de las cuerdas"], ["Intensidad", "suave o fuerte|presión del aire"], ["Timbre", "color propio|resonadores"], ["Duración", "corta o larga|control del aire"]]),
    },
    {
      h: "Voz hablada y voz cantada",
      html: `<p>Hablamos y cantamos con el mismo aparato, pero de forma distinta. Al <b>hablar</b> usamos pocas notas, cerca de un tono medio, y las sílabas son cortas. Al <b>cantar</b> sostenemos las vocales, recorremos muchas más notas, controlamos la intensidad y necesitamos más aire y más resonancia.</p>
      <p>Por eso cantar exige una <b>técnica</b>: una postura estable, una respiración controlada, una emisión sin tensiones y una buena articulación. Lo verás en los próximos temas.</p>`,
      svg: B.comparar("Voz hablada frente a voz cantada", ["Hablada", ["pocas notas", "sílabas cortas", "poco aire", "ritmo del habla"]], ["Cantada", ["muchas notas", "vocales sostenidas", "más aire y apoyo", "ritmo y afinación"]]),
    },
    {
      h: "Los registros de la voz",
      html: `<p>Un <b>registro</b> es una zona de la voz que suena con un mismo color porque las cuerdas vibran de una forma parecida. En términos sencillos se habla de <b>voz de pecho</b> (grave y media, más plena, se siente vibrar en el pecho), <b>voz de cabeza</b> (aguda, más ligera, se siente en la cabeza) y <b>falsete</b> (muy aguda y aireada, sobre todo en hombres).</p>
      <p>El paso de un registro a otro se llama <b>pasaje</b>. Al principio se nota un «salto» o un cambio brusco; con ejercicios se aprende a unir los registros para tener una voz homogénea de arriba abajo.</p>`,
      svg: B.capas("Registros de la voz, de agudo a grave", [["Falsete", "muy agudo, aireado"], ["Voz de cabeza", "aguda, ligera"], ["Pasaje", "zona de cambio"], ["Voz de pecho", "grave y media, plena"]]),
    },
    {
      h: "La voz cambia con la edad",
      html: `<p>La voz infantil es aguda porque la laringe es pequeña. En la <b>adolescencia</b>, la laringe crece: en los chicos las cuerdas se alargan mucho y la voz baja casi una octava (es la <b>muda de la voz</b>, con «gallos» y falta de control durante unos meses); en las chicas el cambio es menor, pero también existe.</p>
      <p>En la edad adulta la voz se estabiliza y en la vejez pierde algo de fuerza y agilidad. Durante la muda conviene seguir cantando, pero <b>sin forzar</b> los extremos y en la zona cómoda.</p>`,
      svg: B.barras("Longitud aproximada de las cuerdas vocales (mm)", [["Niño o niña", 8], ["Mujer adulta", 15], ["Hombre adulto", 20]], { t: "La voz crece contigo", unidad: " mm" }),
    },
  ],
  figura: {
    titulo: "El instrumento de la voz",
    items: [["Fuelle", "🫁", "pulmones", "y diafragma"], ["Vibrador", "〰", "laringe", "cuerdas vocales"], ["Resonadores", "👄", "faringe, boca", "y nariz"], ["Cualidades", "♪", "altura, intensidad", "timbre, duración"]],
  },
  video: { id: "xujxbzKFI10", titulo: "Qué es la voz y cómo funciona", canal: "Gret Rocha", vistas: 373262 },
  quiz: [
    ["¿Qué parte del aparato fonador actúa como vibrador?", ["Los pulmones", "La laringe con las cuerdas vocales", "La boca", "El diafragma"], 1, "Las cuerdas vocales convierten el aire en sonido."],
    ["El espacio entre las cuerdas vocales se llama…", ["epiglotis", "faringe", "glotis", "tráquea"], 2, "Se abre al respirar y se cierra al cantar."],
    ["Al respirar en silencio, las cuerdas vocales están…", ["juntas", "separadas", "vibrando", "tensas al máximo"], 1, "El aire pasa sin hacerlas vibrar."],
    ["La epiglotis sirve para…", ["cantar agudos", "cerrar el paso a los pulmones al tragar", "dar timbre", "respirar"], 1, "Evita que la comida vaya a las vías respiratorias."],
    ["¿Cuál de estos es un resonador?", ["La tráquea", "El diafragma", "Las fosas nasales", "Los pulmones"], 2, "Boca, faringe y nariz amplifican el sonido."],
    ["Las notas agudas se producen cuando las cuerdas vocales…", ["vibran más rápido", "vibran más despacio", "no vibran", "están separadas"], 0, "Más frecuencia, más agudo."],
    ["El color propio de cada voz es su…", ["altura", "intensidad", "timbre", "duración"], 2, "Depende sobre todo de los resonadores."],
    ["El paso de un registro a otro se llama…", ["glotis", "pasaje", "impostación", "fonación"], 1, "Con técnica se unen los registros."],
    ["En la muda de la voz de los chicos, la voz baja aproximadamente…", ["un tono", "una octava", "dos octavas", "nada"], 1, "Las cuerdas se alargan mucho en la adolescencia."],
    ["La fonación es…", ["la respiración", "la producción de la voz en la laringe", "la articulación de consonantes", "un tipo de coro"], 1, "Es el proceso de producir sonido vocal."],
  ],
  examen: [
    ["Las tres partes del aparato fonador son…", ["boca, nariz y labios", "fuelle, vibrador y resonadores", "pecho, cabeza y falsete", "soprano, tenor y bajo"], 1, "Aire, vibración y amplificación."],
    ["La intensidad de la voz depende sobre todo de…", ["la presión del aire y el cierre de las cuerdas", "el tamaño de la nariz", "la edad", "el registro"], 0, "Más presión controlada, más volumen."],
    ["La «nuez» que se nota en el cuello es parte de…", ["la tráquea", "la laringe", "la faringe", "el esófago"], 1, "Es el cartílago tiroides."],
    ["La voz de cabeza es…", ["grave y plena", "aguda y más ligera", "susurrada", "hablada"], 1, "Se siente vibrar en la cabeza."],
    ["Durante la muda de la voz conviene…", ["dejar de cantar del todo", "cantar en la zona cómoda sin forzar", "cantar solo agudos", "gritar para ejercitarla"], 1, "Seguir cantando con suavidad ayuda."],
  ],
  feynman: ["Las tres partes del aparato fonador", "Qué hacen las cuerdas vocales al respirar y al cantar", "De qué dependen la altura, la intensidad y el timbre", "Qué son los registros y el pasaje"],
  mapa: ["LA VOZ Y EL APARATO FONADOR", [["Fuelle", "pulmones · tráquea · diafragma"], ["Vibrador", "laringe · cuerdas · glotis"], ["Resonadores", "faringe · boca · nariz"], ["Cualidades", "altura · intensidad · timbre · duración"]]],
  tarjetas: [
    ["Aparato fonador", "Conjunto de órganos que producen la voz."],
    ["Laringe", "Órgano del cuello donde están las cuerdas vocales."],
    ["Cuerdas vocales", "Pliegues que vibran con el aire y producen el sonido."],
    ["Glotis", "Espacio entre las cuerdas vocales."],
    ["Resonadores", "Cavidades que amplifican y dan color a la voz."],
    ["Fonación", "Producción del sonido vocal."],
    ["Registro", "Zona de la voz con un mismo color."],
    ["Muda de la voz", "Cambio de la voz en la adolescencia."],
  ],
  ejemplos: [
    ["Explica qué ocurre en tu cuerpo desde que inspiras hasta que cantas una «a».", ["Inspiras: el diafragma baja y los pulmones se llenan.", "Las cuerdas vocales se juntan.", "El aire empuja, las cuerdas vibran y nace el sonido.", "La boca abierta y la faringe amplifican la «a»."], "Fuelle → vibrador → resonadores, por este orden."],
    ["Una compañera canta muy fuerte una nota grave y luego muy suave una aguda. ¿Qué cambia en su laringe y en el aire?", ["Nota grave: cuerdas más relajadas y vibración más lenta.", "Muy fuerte: más presión de aire y cierre firme.", "Nota aguda: cuerdas más tensas y finas, vibración más rápida.", "Muy suave: menos presión de aire."], "La altura la regula la tensión de las cuerdas; la intensidad, la presión del aire."],
    ["Pon la mano en el pecho y luego en la frente mientras cantas grave y agudo. ¿Qué notas?", ["En notas graves, la vibración se nota en el pecho.", "En notas agudas, se nota más en la cabeza.", "En medio hay una zona de cambio."], "Has sentido la voz de pecho, la voz de cabeza y el pasaje."],
  ],
  errores: [
    "Pensar que la voz sale de la garganta solo: intervienen el aire, la laringe y los resonadores.",
    "Confundir intensidad con altura: cantar más fuerte no es cantar más agudo.",
    "Creer que la nariz no participa en la voz: es un resonador importante.",
    "Dejar de cantar durante la muda de la voz en vez de cantar en la zona cómoda.",
  ],
  ejercicios: {
    b: [
      ["Nombra las tres partes del aparato fonador y un órgano de cada una.", "Fuelle: pulmones o diafragma. Vibrador: laringe o cuerdas vocales. Resonadores: boca, faringe o fosas nasales."],
      ["¿Qué es la glotis?", "El espacio entre las cuerdas vocales; se abre al respirar y se cierra al producir sonido."],
      ["Enumera las cuatro cualidades de la voz.", "Altura, intensidad, timbre y duración."],
      ["¿Para qué sirve la epiglotis?", "Para cerrar el paso a las vías respiratorias al tragar."],
    ],
    m: [
      ["Explica por qué las voces de los hombres adultos suelen ser más graves que las de las mujeres.", "Porque sus cuerdas vocales son más largas y gruesas y vibran más despacio, con menor frecuencia."],
      ["Compara voz hablada y voz cantada en tres aspectos.", "Notas: pocas al hablar, muchas al cantar. Vocales: cortas al hablar, sostenidas al cantar. Aire: poco al hablar, más control y apoyo al cantar."],
      ["¿Qué es el pasaje y por qué hay que trabajarlo?", "Es la zona donde la voz cambia de registro; se trabaja para que no haya saltos bruscos y la voz suene homogénea."],
      ["Describe el ciclo de vibración de las cuerdas vocales.", "Las cuerdas se juntan, sube la presión del aire debajo, se abren, escapa el aire, vuelven a cerrarse y el ciclo se repite cientos de veces por segundo."],
    ],
    a: [
      ["Graba tu voz diciendo y cantando la misma frase. Describe con vocabulario técnico las diferencias.", "Respuesta abierta: comparar altura (más notas), duración de vocales, intensidad, resonancia y uso del aire."],
      ["Busca tu nota más grave y más aguda cómodas con una app de afinador. Anota el ámbito y explica en qué registro está cada zona.", "Respuesta abierta: anotar las notas (por ejemplo, La2 a Mi4) e identificar zona de pecho, pasaje y zona de cabeza."],
    ],
  },
  glosario: [
    ["Aparato fonador", "Órganos que intervienen en la producción de la voz."],
    ["Laringe", "Tubo de cartílagos donde se encuentran las cuerdas vocales."],
    ["Cuerdas vocales", "Pliegues musculares que vibran para producir la voz."],
    ["Glotis", "Abertura entre las cuerdas vocales."],
    ["Epiglotis", "Cartílago que cierra la laringe al tragar."],
    ["Fonación", "Proceso de producción del sonido en la laringe."],
    ["Resonador", "Cavidad que amplifica y colorea el sonido."],
    ["Registro", "Zona de la voz con un mismo mecanismo y color."],
    ["Pasaje", "Zona de transición entre registros."],
    ["Falsete", "Registro muy agudo y ligero, sobre todo en voces masculinas."],
  ],
  situacion: {
    titulo: "Mi voz, por dentro",
    reto: "Crear una infografía o un vídeo corto que explique cómo funciona la voz a alumnos de 1.º de ESO.",
    pasos: [
      "Repasad las tres partes del aparato fonador y su función.",
      "Preparad un dibujo propio o un modelo con materiales (globo, gomas, tubo).",
      "Grabad o diseñad la explicación en un lenguaje sencillo.",
      "Presentadla a la clase y recoged preguntas.",
    ],
    producto: "Una infografía o un vídeo de 2 minutos.",
    evaluacion: [
      "Explica bien fuelle, vibrador y resonadores.",
      "Usa vocabulario técnico de forma correcta.",
      "La explicación es clara para el público elegido.",
      "Incluye un dibujo o modelo propio.",
    ],
  },
  familias: [
    "Pedid a vuestro hijo o hija que os explique dónde están sus cuerdas vocales.",
    "Comparad en casa voces de cantantes graves y agudos.",
    "Comentad cómo cambió su voz con la edad con grabaciones antiguas.",
    "Animad a cantar en casa sin gritar ni forzar.",
  ],
  saberes: "Coro y Técnica Vocal I: anatomía y fisiología del aparato fonador (respiratorio, fonador y resonador-articulador); la laringe y los pliegues vocales; producción del sonido vocal; cualidades de la voz; registros y pasaje; la muda de la voz.",
  ideas: [
    "Ver un vídeo de laringoscopia de las cuerdas vocales cantando.",
    "Construir un modelo de laringe con un globo y un tubo.",
    "Usar un afinador o una app de espectro para ver la voz de cada alumno.",
    "Notar con la mano la vibración del pecho y de la cabeza en distintas notas.",
  ],
  fuentes: [
    { t: "Aparato fonador, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Aparato_fonador" },
    { t: "Laringe, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Laringe" },
  ],
});
