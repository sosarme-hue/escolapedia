// Coro y Técnica Vocal I, 1º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ct");

module.exports = B.tema({
  titulo: "Articulación y dicción",
  minutos: 60,
  objetivos: [
    "Identificar los órganos articuladores y su función",
    "Pronunciar con claridad vocales y consonantes al cantar",
    "Aplicar las normas básicas de dicción en castellano, latín y otras lenguas del repertorio",
    "Relacionar la dicción con la expresión del texto",
  ],
  claves: ["articulación", "dicción", "articuladores", "vocales", "consonantes", "diptongo", "fraseo", "trabalenguas"],
  pregunta: {
    texto: "¿Te ha pasado escuchar una canción mil veces y descubrir años después que la letra decía otra cosa?",
    respuesta: "Pasa muchísimo, y la causa suele ser una <mark>dicción</mark> poco clara. Al cantar, las vocales se alargan y las consonantes se pierden con facilidad. En un coro el problema se multiplica: si cada cantante pronuncia a su manera, el texto se vuelve un murmullo. Por eso la <mark>articulación</mark> se entrena tanto como la afinación.",
  },
  lectura: {
    titulo: "Treinta bocas, una sola palabra",
    html: `<p>En un ensayo, el director para al coro: «No se entiende nada». Treinta voces acaban de cantar «Gloria» y en la sala solo ha sonado algo parecido a «Oooiaaa». Las «g», las «l» y las «r» se han perdido en el camino.</p>
    <p>Repiten la frase exagerando las consonantes, todos a la vez, y de pronto la palabra aparece clara, como si alguien hubiera enfocado una foto borrosa. La dicción no es un detalle: es lo que convierte un sonido bonito en un mensaje. En este tema aprenderás a dar forma a cada sílaba sin perder la belleza de la voz.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Articulación y dicción",
      html: `<p>La <b>articulación</b> es el movimiento de los órganos de la boca que transforma el sonido de la voz en vocales y consonantes. La <b>dicción</b> es la manera de pronunciar las palabras: clara, correcta y comprensible.</p>
      <p>En el canto buscamos una dicción <b>inteligible</b> (que se entienda el texto), <b>natural</b> (sin exageraciones ridículas) y <b>unificada</b> (todo el coro pronuncia igual). Una buena dicción, además, ayuda a la emisión: las consonantes bien hechas impulsan el sonido y las vocales limpias suenan mejor.</p>`,
      svg: B.estrella("Una buena dicción en el canto", "Dicción", ["Inteligible", "Natural", "Unificada", "Expresiva"]),
      video: { id: "YxjOKyU2rss", titulo: "Ejercicios de dicción para la lengua", canal: "Como Aprender A Cantar Bien", vistas: 374637 },
    },
    {
      h: "Los órganos articuladores",
      html: `<p>Hay articuladores <b>móviles</b> y <b>fijos</b>. Los móviles son los <b>labios</b>, la <b>lengua</b> (el más importante y ágil), la <b>mandíbula</b> y el <b>velo del paladar</b>, que sube o baja para que el aire vaya por la boca o también por la nariz. Los fijos son los <b>dientes</b>, los <b>alvéolos</b> (justo detrás de los dientes de arriba) y el <b>paladar duro</b>.</p>
      <p>Las consonantes se forman cuando un articulador móvil se acerca o toca uno fijo. Por ejemplo, la «t» la forma la punta de la lengua contra los alvéolos; la «p», los dos labios.</p>`,
      svg: B.comparar("Articuladores móviles y fijos", ["Móviles", ["labios", "lengua", "mandíbula", "velo del paladar"]], ["Fijos", ["dientes", "alvéolos", "paladar duro", "(punto de apoyo)"]]),
    },
    {
      h: "La mandíbula, la lengua y los labios sin tensión",
      html: `<p>Para articular bien hay que <b>soltar</b> las tensiones. La <b>mandíbula</b> debe caer por su propio peso, sin empujarla hacia delante. La <b>lengua</b> descansa con la punta tocando los dientes de abajo en las vocales y se mueve rápida y precisa en las consonantes. Los <b>labios</b> deben ser activos y flexibles.</p>
      <p>Ejercicios útiles: masticar en el aire, hacer vibrar los labios, sacar y meter la lengua, dibujar círculos con ella dentro de la boca y repetir «la-le-li-lo-lu» cada vez más rápido sin mover la mandíbula.</p>`,
      svg: B.flujo("Gimnasia de los articuladores", ["Mandíbula suelta: masticar", "Labios: vibración «brrr»", "Lengua: círculos y estiramientos", "«La-le-li-lo-lu» rápido"]),
    },
    {
      h: "Las vocales: el cuerpo del canto",
      html: `<p>Al cantar, más del 90 % del tiempo sonamos en <b>vocales</b>: son las que llevan la música. Deben ser <b>puras</b> (sin mezclarse con otras), <b>estables</b> durante toda la nota y <b>homogéneas</b> en todo el coro.</p>
      <p>En castellano hay cinco vocales claras, una ventaja frente a otros idiomas. Los <b>diptongos</b> se cantan alargando la vocal principal y dejando la otra para el final de la nota: en «cielo», se canta «cie-eee-lo», no «ci-iii-elo».</p>`,
      svg: B.barras("Tiempo aproximado que sostenemos vocales y consonantes en el canto", [["Vocales", 90], ["Consonantes", 10]], { t: "El canto es casi todo vocal", unidad: " %" }),
    },
    {
      h: "Las consonantes: el esqueleto del texto",
      html: `<p>Las <b>consonantes</b> dan sentido a las palabras. Si las vocales son el cuerpo, las consonantes son el esqueleto. En el canto deben ser <b>rápidas, precisas y enérgicas</b>, sin robar tiempo a la vocal: se colocan justo antes del pulso para que la vocal caiga a tiempo.</p>
      <p>Hay consonantes <b>sonoras</b> (m, n, l, b, d, g), que se pueden cantar con nota, y <b>sordas</b> (p, t, k, s, f), que son solo ruido de aire. Las consonantes finales («amor», «Dios», «paz») se pronuncian todas a la vez en el coro, en el momento que indique el director.</p>`,
      svg: B.cajas("Clases de consonantes para el canto", [["Sonoras", "m, n, l, b, d, g|se pueden entonar"], ["Sordas", "p, t, k, s, f|solo aire"], ["Iniciales", "antes del pulso|para que la vocal llegue a tiempo"], ["Finales", "todos a la vez|cuando marca el director"]]),
    },
    {
      h: "Fraseo y expresión del texto",
      html: `<p>La dicción no consiste solo en pronunciar bien cada sílaba, sino en <b>decir el texto con sentido</b>. Las sílabas tónicas se apoyan más y las átonas se aligeran; las palabras importantes se destacan; las frases se agrupan sin cortes que rompan el significado.</p>
      <p>Un buen ejercicio es <b>leer el texto en voz alta</b>, como un actor, antes de cantarlo. Después se recita con el ritmo de la partitura y, por último, se canta respetando ese sentido. Así la música y la palabra van juntas.</p>`,
      svg: B.flujo("Del texto a la canción", ["Leer y entender el texto", "Recitarlo con expresión", "Recitarlo con el ritmo", "Cantarlo con sentido"]),
      video: { id: "N1XsRsdyl8I", titulo: "Pronuncia mejor con este ejercicio de dicción", canal: "Fernando Suarez Teatro", vistas: 4798409 },
    },
    {
      h: "Cantar en latín y en otras lenguas",
      html: `<p>Gran parte del repertorio coral está en <b>latín</b>. En los coros se usa sobre todo la pronunciación <b>italiana o eclesiástica</b>: «c» delante de «e» o «i» suena como «ch» (<i>caelum</i> → «chelum»), «g» delante de «e» o «i» suena como la «y» suave inglesa, «ae» y «oe» se pronuncian «e», y «j» como «i» (<i>Jesu</i> → «Iesu»).</p>
      <p>Para el <b>inglés</b>, el <b>alemán</b>, el <b>catalán</b> o el <b>euskera</b> hay que escuchar grabaciones de nativos y anotar la pronunciación en la partitura. El objetivo es siempre el mismo: que se entienda y que todo el coro diga lo mismo.</p>`,
      svg: B.rejilla("Latín eclesiástico: algunas reglas", ["Se escribe", "Se canta", "Ejemplo"], [["ce, ci", "che, chi", "caelum"], ["ge, gi", "ye, yi", "regina"], ["ae, oe", "e", "Kyrie, caeli"], ["j", "i", "Jesu"], ["gn", "ñ", "agnus"]]),
    },
    {
      h: "Ejercicios de dicción",
      html: `<p>Los <b>trabalenguas</b> son el entrenamiento clásico: «Tres tristes tigres tragaban trigo en un trigal», «Pablito clavó un clavito» o «El perro de San Roque no tiene rabo». Se dicen primero despacio y exagerando, después rápido y, por último, cantados sobre una escala.</p>
      <p>Otros ejercicios: repetir sílabas con consonantes distintas («pa-ta-ka», «la-da-na») acelerando con el metrónomo, cantar con un lápiz entre los dientes para obligar a la lengua y los labios a trabajar y leer el texto de la obra en voz alta todo el coro a la vez.</p>`,
      svg: B.barras("Trabalenguas con metrónomo: tempo de práctica (pulsos por minuto)", [["Despacio", 60], ["Medio", 90], ["Rápido", 120], ["Cantado", 100]], { t: "Del lento al rápido", unidad: "" }),
    },
  ],
  figura: {
    titulo: "Decir cantando",
    items: [["Articuladores", "👄", "labios, lengua", "mandíbula, velo"], ["Vocales", "a e i o u", "puras", "y estables"], ["Consonantes", "p t k", "rápidas", "y precisas"], ["Texto", "❝", "con sentido", "y expresión"]],
  },
  video: { id: "gFnzovdUeJw", titulo: "El secreto del canto está en tu lengua", canal: "Las Noches De Dorian", vistas: 267127 },
  quiz: [
    ["La articulación es…", ["la respiración", "el movimiento de los órganos de la boca que forma vocales y consonantes", "la afinación", "la resonancia en el pecho"], 1, "Da forma al sonido."],
    ["El articulador más ágil e importante es…", ["el diente", "la lengua", "el paladar duro", "la nariz"], 1, "Participa en casi todas las consonantes."],
    ["Los alvéolos son…", ["móviles", "un punto fijo detrás de los dientes de arriba", "parte de la laringe", "una vocal"], 1, "Ahí apoya la lengua en «t», «d», «n», «l»."],
    ["Al cantar, la mayor parte del tiempo sonamos en…", ["consonantes", "vocales", "silencios", "respiraciones"], 1, "Las vocales llevan la música."],
    ["En el diptongo de «cielo», se alarga…", ["la «i»", "la «e»", "la «l»", "la «o»"], 1, "Se alarga la vocal principal."],
    ["Una consonante sorda es…", ["m", "l", "t", "n"], 2, "Es solo ruido de aire, sin nota."],
    ["Las consonantes iniciales se colocan…", ["después del pulso", "justo antes del pulso", "en cualquier momento", "solo al final"], 1, "Para que la vocal caiga a tiempo."],
    ["En latín eclesiástico, «caelum» se canta…", ["«kelum»", "«chelum»", "«selum»", "«caelum»"], 1, "«c» + e suena «ch»."],
    ["«Agnus» se canta…", ["«ag-nus»", "«a-ñus»", "«a-gus»", "«an-yus»"], 1, "«gn» suena «ñ»."],
    ["Antes de cantar un texto conviene…", ["no leerlo", "leerlo y recitarlo con sentido", "cantarlo muy rápido", "aprenderlo solo de oído"], 1, "Así se entiende y se expresa mejor."],
  ],
  examen: [
    ["El velo del paladar sirve para…", ["formar la «p»", "dirigir el aire hacia la boca o también la nariz", "afinar", "tragar solo"], 1, "Sube en sonidos orales y baja en nasales."],
    ["Las consonantes finales en el coro se pronuncian…", ["cada uno cuando quiere", "todos a la vez cuando indica el director", "nunca", "antes de la vocal"], 1, "Así suenan limpias y juntas."],
    ["Una dicción unificada significa que…", ["cada uno pronuncia a su modo", "todo el coro pronuncia igual", "solo se cantan vocales", "se canta en latín"], 1, "Es esencial en el canto coral."],
    ["En latín eclesiástico, «Jesu» se canta…", ["«Jesu» con jota", "«Iesu»", "«Yesu» con y fuerte", "«Chesu»"], 1, "La «j» suena como «i»."],
    ["Cantar con un lápiz entre los dientes sirve para…", ["relajar la laringe", "obligar a trabajar lengua y labios", "respirar mejor", "afinar"], 1, "Al quitarlo, la dicción es más clara."],
  ],
  feynman: ["Qué diferencia hay entre articulación y dicción", "Qué articuladores son móviles y cuáles fijos", "Cómo se cantan las vocales y las consonantes", "Cómo se pronuncia el latín en el coro"],
  mapa: ["ARTICULACIÓN Y DICCIÓN", [["Articuladores", "labios · lengua · mandíbula · velo"], ["Vocales", "puras · estables · homogéneas"], ["Consonantes", "rápidas · antes del pulso · finales juntas"], ["Texto", "sentido · latín · otras lenguas"]]],
  tarjetas: [
    ["Articulación", "Movimiento de los órganos que forma los sonidos del habla."],
    ["Dicción", "Manera de pronunciar las palabras."],
    ["Articuladores", "Labios, lengua, mandíbula, velo, dientes, paladar."],
    ["Diptongo", "Dos vocales en una sílaba; se alarga la principal."],
    ["Consonante sonora", "La que se puede entonar (m, n, l)."],
    ["Consonante sorda", "La que solo es aire (p, t, k, s)."],
    ["Latín eclesiástico", "Pronunciación italiana del latín en el coro."],
    ["Trabalenguas", "Frase difícil para entrenar la dicción."],
  ],
  ejemplos: [
    ["El coro canta «Amor» y el final suena «Amorrrr» desigual. ¿Cómo se corrige?", ["Se sostiene la «o» toda la nota.", "El director marca con un gesto el momento de la «r».", "Todo el coro la pronuncia a la vez, breve."], "Consonante final rápida y unificada."],
    ["Escribe la pronunciación cantada de «Agnus Dei, qui tollis peccata mundi».", ["«gn» → «ñ»: «Añus».", "«Dei» se canta «De-i».", "«qui» → «kui»; «peccata» → «pekata».", "«mundi» como en castellano."], "«Áñus Déi, kui tólis pekáta múndi»."],
    ["Prepara la frase «Cielo de un solo color» para cantarla con buena dicción.", ["Leerla en voz alta con sentido: palabras clave «cielo» y «color».", "Diptongo «cie»: alargar la «e».", "Consonantes «l» y «d» claras y antes del pulso.", "«r» final breve y todos a la vez."], "Texto comprensible y fraseo natural."],
  ],
  errores: [
    "Alargar la vocal débil del diptongo («ci-iii-elo»).",
    "Pronunciar las consonantes tarde y retrasar la vocal.",
    "Apretar la mandíbula para «articular más».",
    "Cantar el latín como se escribe, sin las reglas de pronunciación.",
  ],
  ejercicios: {
    b: [
      ["Define articulación y dicción.", "Articulación: movimiento de los órganos de la boca que forma vocales y consonantes. Dicción: manera de pronunciar las palabras con claridad y corrección."],
      ["Clasifica en móviles y fijos: lengua, dientes, labios, paladar duro.", "Móviles: lengua y labios. Fijos: dientes y paladar duro."],
      ["Escribe tres consonantes sonoras y tres sordas.", "Sonoras: m, n, l (o b, d, g). Sordas: p, t, k (o s, f)."],
      ["Di un trabalenguas y explica para qué sirve.", "Por ejemplo, «Tres tristes tigres…»; sirve para agilizar la lengua y practicar consonantes."],
    ],
    m: [
      ["¿Por qué en el canto se dice que las vocales son el cuerpo y las consonantes el esqueleto?", "Porque las vocales llevan el sonido y la música durante casi todo el tiempo, y las consonantes, aunque breves, dan la forma y el sentido a las palabras."],
      ["Explica cómo se canta un diptongo con un ejemplo.", "Se alarga la vocal principal y la débil se deja para el final o el principio breve; en «tierra», «tie-eee-rra»."],
      ["Escribe cómo se pronuncia en el coro «Regina caeli».", "«Reyina cheli»: «gi» suena «yi» suave y «cae» suena «che»."],
      ["¿Por qué conviene recitar el texto antes de cantarlo?", "Para comprenderlo, encontrar las palabras importantes y los acentos, y así cantarlo con sentido y buena dicción."],
    ],
    a: [
      ["Graba una canción en dos versiones: con dicción descuidada y con dicción cuidada. Pide a alguien que escriba la letra que entiende en cada una y comenta los resultados.", "Respuesta abierta: comparar el número de palabras entendidas y explicar qué consonantes o vocales cambiaron."],
      ["Elige una obra coral en latín o en otra lengua y prepara una guía de pronunciación para tu coro.", "Respuesta abierta: texto original, transcripción fonética sencilla, traducción y audio de referencia."],
    ],
  },
  glosario: [
    ["Articulación", "Formación de los sonidos con los órganos de la boca."],
    ["Dicción", "Forma de pronunciar las palabras."],
    ["Velo del paladar", "Parte blanda y móvil del fondo del paladar."],
    ["Alvéolos", "Zona de las encías detrás de los dientes superiores."],
    ["Diptongo", "Unión de dos vocales en una misma sílaba."],
    ["Consonante sonora", "Consonante que hace vibrar las cuerdas vocales."],
    ["Consonante sorda", "Consonante sin vibración de las cuerdas vocales."],
    ["Fraseo", "Forma de agrupar y dar sentido a las frases musicales."],
    ["Latín eclesiástico", "Pronunciación del latín a la italiana usada en los coros."],
    ["Trabalenguas", "Texto difícil de pronunciar que entrena la dicción."],
  ],
  situacion: {
    titulo: "Que se entienda cada palabra",
    reto: "Conseguir que el público entienda el 100 % del texto de una canción del coro.",
    pasos: [
      "Elegid una canción del repertorio y analizad su texto.",
      "Marcad en la partitura diptongos, consonantes finales y respiraciones.",
      "Ensayad con trabalenguas y recitado antes de cantar.",
      "Cantadla ante otra clase, que escribirá la letra que entiende.",
    ],
    producto: "Una partitura anotada y la interpretación de la canción.",
    evaluacion: [
      "El público entiende la mayor parte del texto.",
      "Las consonantes finales son simultáneas.",
      "Las vocales son puras y homogéneas.",
      "La partitura está bien anotada.",
    ],
  },
  familias: [
    "Jugad en casa a decir trabalenguas cada vez más rápido.",
    "Escuchad canciones y comprobad juntos si se entiende la letra.",
    "Leed en voz alta poemas con expresión.",
    "Preguntad por el significado de las obras en latín que cante el coro.",
  ],
  saberes: "Coro y Técnica Vocal I: órganos articuladores; articulación y dicción en el canto; vocales y consonantes; diptongos; fraseo y expresión del texto; pronunciación del latín y de otras lenguas del repertorio coral; ejercicios de dicción.",
  ideas: [
    "Empezar cada ensayo con un trabalenguas cantado.",
    "Grabar al coro y pedir a otra clase que transcriba la letra.",
    "Elaborar entre todos una tabla de pronunciación del latín.",
    "Invitar a un hablante nativo a corregir la pronunciación de una obra.",
  ],
  fuentes: [
    { t: "Dicción, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dicci%C3%B3n" },
    { t: "Pronunciación del latín, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pronunciaci%C3%B3n_del_lat%C3%ADn" },
  ],
});
