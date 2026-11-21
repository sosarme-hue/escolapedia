// Coro y Técnica Vocal I, 1º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ct");

module.exports = B.tema({
  titulo: "Emisión y resonancia",
  minutos: 60,
  objetivos: [
    "Explicar qué es la emisión vocal y cómo empieza un sonido (ataque)",
    "Identificar los resonadores y su papel en el timbre y la proyección",
    "Practicar la colocación de la voz en la «máscara» sin forzar",
    "Usar vocalizaciones para trabajar emisión, resonancia y afinación",
  ],
  claves: ["emisión", "ataque", "resonancia", "resonadores", "máscara", "proyección", "impostación", "vocalización"],
  pregunta: {
    texto: "Una cantante lírica llena un teatro de dos mil personas sin micrófono, por encima de una orquesta. ¿Grita?",
    respuesta: "No. Si gritara se quedaría afónica en diez minutos. Lo que hace es aprovechar la <mark>resonancia</mark>: coloca la voz para que las cavidades de su cabeza la amplifiquen, como la caja de una guitarra. Con poco esfuerzo en la garganta obtiene mucha <mark>proyección</mark>.",
  },
  lectura: {
    titulo: "La copa que se rompe",
    html: `<p>Se cuenta que algunos cantantes son capaces de romper una copa de cristal con la voz. Para lograrlo no basta con cantar fuerte: hay que dar justo la nota en la que vibra la copa, su frecuencia de resonancia, y mantenerla con mucha energía.</p>
    <p>La historia es casi una leyenda, pero explica bien una idea clave: cuando un sonido coincide con la forma de un espacio, ese espacio vibra con él y lo multiplica. Tu boca, tu faringe y tu nariz son espacios así. Aprender a usarlos es aprender a sonar más, con menos esfuerzo.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es la emisión vocal",
      html: `<p>La <b>emisión</b> es la forma en que producimos y dejamos salir el sonido de la voz. Una buena emisión es <b>libre</b> (sin tensiones en cuello, mandíbula ni lengua), <b>timbrada</b> (con un sonido claro y con «brillo») y <b>sostenida</b> por el aire.</p>
      <p>Una emisión defectuosa puede ser <b>engolada</b> (el sonido se queda atrás, en la garganta), <b>nasal</b> (todo pasa por la nariz), <b>aireada</b> (escapa aire sin sonido) o <b>apretada</b> (con la garganta tensa). Reconocer estos defectos es el primer paso para corregirlos.</p>`,
      svg: B.cajas("Emisión correcta y defectos frecuentes", [["Libre y timbrada", "sin tensión|clara y brillante"], ["Engolada", "sonido atrás|en la garganta"], ["Nasal", "todo por|la nariz"], ["Aireada", "escapa aire|sin sonido"], ["Apretada", "garganta|tensa"], ["Sostenida", "apoyada|en el aire"]], { cols: 3 }),
    },
    {
      h: "El ataque del sonido",
      html: `<p>El <b>ataque</b> es el instante en que empieza el sonido, cuando las cuerdas vocales se juntan y empiezan a vibrar. Puede ser <b>duro</b> (golpe de glotis: las cuerdas se cierran de golpe, como al toser; daña la voz si se abusa), <b>aspirado</b> (sale aire antes del sonido, como una «h») o <b>suave o equilibrado</b>.</p>
      <p>El ataque correcto es el <b>equilibrado</b>: el aire y el cierre de las cuerdas llegan a la vez y el sonido nace limpio. Se practica con vocales precedidas de una «m» o una «h» muy ligera y con notas cortas en <i>staccato</i>.</p>`,
      svg: B.comparar("Tres tipos de ataque", ["Duro / aspirado", ["golpe de glotis", "o aire antes", "del sonido", "evitar si se abusa"]], ["Equilibrado", ["aire y cierre", "a la vez", "sonido limpio", "el recomendado"]]),
    },
    {
      h: "La resonancia",
      html: `<p>La <b>resonancia</b> es el fenómeno por el que un espacio amplifica un sonido que coincide con su forma. El sonido que sale de la laringe es débil; al pasar por los <b>resonadores</b> se refuerzan unos armónicos y otros no, y la voz gana <b>volumen</b> y <b>timbre</b>.</p>
      <p>Por eso dos personas con laringes parecidas pueden sonar muy distintas: la forma de su faringe, su boca y sus fosas nasales es diferente. Y por eso, cambiando la posición de la lengua, el paladar o los labios, cambiamos el color de la voz.</p>`,
      svg: B.ondas("Altura e intensidad de una onda sonora: la resonancia aumenta la amplitud"),
      video: { id: "o2ikkZSQ6eY", titulo: "Cómo cantar con una voz potente y resonante: 4 ejercicios simples", canal: "Dra. Voz", vistas: 316313 },
    },
    {
      h: "Los resonadores",
      html: `<p>La <b>faringe</b> es el resonador más importante: un tubo que puede ensancharse (al bostezar) y dar a la voz un sonido redondo y oscuro. La <b>boca</b> es el más móvil: con la lengua, los labios y la mandíbula forma las vocales. Las <b>fosas nasales</b> y los senos de la cara añaden brillo y «punta».</p>
      <p>El <b>pecho</b> no amplifica tanto, pero en las notas graves notamos su vibración. Un buen equilibrio entre todos da una voz <b>redonda y brillante</b> a la vez, lo que los profesores llaman <i>chiaroscuro</i> (claro y oscuro).</p>`,
      svg: B.capas("Resonadores de arriba abajo", [["Fosas nasales", "brillo, punta"], ["Boca", "forma las vocales"], ["Faringe", "redondez, profundidad"], ["Pecho", "vibración en los graves"]]),
    },
    {
      h: "La colocación en la «máscara»",
      html: `<p>Los cantantes hablan de «colocar» la voz en la <b>máscara</b>: la zona de la cara alrededor de la nariz y los pómulos. No es que el sonido vaya allí, sino que, cuando la emisión es buena, se <b>sienten vibraciones</b> en esa zona.</p>
      <p>Para encontrarla, se canta un «mmm» suave, como quien saborea algo rico, y se nota el cosquilleo en labios y nariz; después se abre a una vocal («mmm-a») sin perder esa sensación. Una voz bien colocada se oye más con menos esfuerzo y protege la garganta.</p>`,
      svg: B.flujo("Encontrar la máscara", ["«Mmm» suave", "Cosquilleo en labios y nariz", "Abrir a «mmm-a»", "Mantener la vibración"]),
    },
    {
      h: "Proyección e impostación",
      html: `<p>La <b>proyección</b> es la capacidad de que la voz llegue lejos y se entienda sin gritar. La <b>impostación</b> es la técnica de colocar la voz para que aproveche al máximo los resonadores; una voz impostada suena plena y estable.</p>
      <p>Proyectar no es empujar más aire, sino combinar <b>apoyo</b>, <b>faringe abierta</b> y <b>vibración en la máscara</b>. Un truco útil es imaginar que lanzas la voz a la última fila de la sala, como una pelota que describe un arco.</p>`,
      svg: B.estrella("Ingredientes de una voz proyectada", "Proyección", ["Apoyo", "Faringe abierta", "Máscara", "Ataque limpio", "Postura"]),
      video: { id: "Uelu2CdRfk0", titulo: "Cómo impostar la voz para cantar: cómo proyectar la voz", canal: "Natalia Bliss", vistas: 293465 },
    },
    {
      h: "Las vocales y el espacio interior",
      html: `<p>Cada vocal tiene una forma propia de boca y lengua. En el canto se busca <b>igualar</b> las vocales para que la voz no cambie de color en cada sílaba: se mantiene el espacio de la faringe abierto y se modifican lo menos posible la mandíbula y los labios.</p>
      <p>La <b>«a»</b> es la más abierta; la <b>«i»</b> y la <b>«e»</b> son más brillantes y tienden a cerrarse y aplanarse; la <b>«o»</b> y la <b>«u»</b> son más oscuras y redondas. En los agudos se «modifican» ligeramente las vocales hacia formas más abiertas para no apretar.</p>`,
      svg: B.rejilla("Las cinco vocales al cantar", ["Vocal", "Boca", "Color"], [["a", "abierta", "plena"], ["e", "media", "brillante"], ["i", "estrecha", "muy brillante"], ["o", "redonda", "oscura"], ["u", "muy redonda", "muy oscura"]]),
    },
    {
      h: "Vocalizaciones",
      html: `<p>Las <b>vocalizaciones</b> son ejercicios cantados sobre vocales o sílabas para entrenar la voz. Ejemplos sencillos: escalas de cinco notas sobre «mi-me-ma-mo-mu», arpegios sobre «ño-ño», vibración de labios en escalas, sirenas en «u» y notas largas con <i>crescendo</i> y <i>diminuendo</i>.</p>
      <p>Se cantan con acompañamiento de piano subiendo de semitono en semitono y bajando después. Sirven para la emisión, la resonancia, la afinación y la agilidad, y preparan al coro para el repertorio.</p>`,
      svg: B.melodia("Vocalización de cinco notas sobre mi-me-ma-mo-mu", [-2, -1, 0, 1, 2], { nombres: ["mi", "me", "ma", "mo", "mu"], titulo: "Escala de cinco notas (y vuelta)" }),
    },
  ],
  figura: {
    titulo: "Sonar más con menos esfuerzo",
    items: [["Emisión", "◯", "libre", "y timbrada"], ["Ataque", "▶", "equilibrado", "aire + cierre"], ["Resonancia", "◎", "faringe, boca", "y nariz"], ["Proyección", "➶", "máscara", "y apoyo"]],
  },
  video: { id: "UVUwP8AqD1g", titulo: "Clases de canto 1: ejercicios de vocalización", canal: "Dra. Voz", vistas: 11031667 },
  quiz: [
    ["Una emisión en la que el sonido se queda atrás, en la garganta, es…", ["nasal", "engolada", "aireada", "timbrada"], 1, "Suena apagada y tensa."],
    ["El golpe de glotis es un ataque…", ["equilibrado", "aspirado", "duro", "suave"], 2, "Las cuerdas se cierran de golpe."],
    ["El ataque recomendado es el…", ["duro", "aspirado", "equilibrado", "gritado"], 2, "Aire y cierre llegan a la vez."],
    ["La resonancia…", ["reduce el volumen", "amplifica y da timbre al sonido", "solo ocurre en el pecho", "es un defecto"], 1, "Refuerza ciertos armónicos."],
    ["El resonador más móvil, que forma las vocales, es…", ["la boca", "el pecho", "la tráquea", "los pulmones"], 0, "Con lengua, labios y mandíbula."],
    ["Al bostezar se ensancha sobre todo…", ["la nariz", "la faringe", "el pecho", "la glotis"], 1, "Da redondez a la voz."],
    ["«Colocar la voz en la máscara» significa…", ["cantar con careta", "sentir la vibración alrededor de nariz y pómulos", "cantar muy fuerte", "cantar por la nariz"], 1, "Es una sensación de buena emisión."],
    ["Proyectar la voz es…", ["gritar", "que llegue lejos sin forzar", "cantar muy agudo", "usar micrófono"], 1, "Con apoyo y resonancia."],
    ["La vocal más brillante y estrecha es la…", ["a", "o", "i", "u"], 2, "Tiende a cerrarse; hay que darle espacio."],
    ["Las vocalizaciones se suelen cantar…", ["siempre en la misma nota", "subiendo y bajando por semitonos", "sin piano", "solo en agudos"], 1, "Recorren poco a poco el ámbito."],
  ],
  examen: [
    ["Una emisión aireada se produce cuando…", ["las cuerdas cierran demasiado", "escapa aire sin convertirse en sonido", "el sonido va por la nariz", "hay mucho apoyo"], 1, "Las cuerdas no cierran del todo."],
    ["La impostación consiste en…", ["imitar a otro cantante", "colocar la voz para aprovechar los resonadores", "cantar en falsete", "respirar por la boca"], 1, "Da una voz plena y estable."],
    ["El término chiaroscuro describe una voz…", ["solo oscura", "solo brillante", "redonda y brillante a la vez", "nasal"], 2, "Equilibrio de resonadores."],
    ["Para igualar las vocales al cantar se procura…", ["mover mucho la mandíbula", "mantener la faringe abierta y moverse poco", "cerrar la boca", "cantar todas en «i»"], 1, "Así la voz no cambia de color."],
    ["¿Qué ejercicio ayuda a encontrar la máscara?", ["Toser", "Un «mmm» suave que se abre a una vocal", "Gritar «¡ah!»", "Susurrar"], 1, "Se nota el cosquilleo en labios y nariz."],
  ],
  feynman: ["Qué es una buena emisión y sus defectos", "Los tres tipos de ataque", "Cómo funciona la resonancia y cuáles son los resonadores", "Qué significa proyectar la voz"],
  mapa: ["EMISIÓN Y RESONANCIA", [["Emisión", "libre · timbrada · sostenida"], ["Ataque", "duro · aspirado · equilibrado"], ["Resonadores", "faringe · boca · nariz · pecho"], ["Proyección", "máscara · impostación · vocalizaciones"]]],
  tarjetas: [
    ["Emisión", "Forma de producir y dejar salir la voz."],
    ["Ataque", "Inicio del sonido vocal."],
    ["Golpe de glotis", "Ataque duro, con cierre brusco de las cuerdas."],
    ["Resonancia", "Amplificación del sonido en una cavidad."],
    ["Máscara", "Zona de nariz y pómulos donde se siente la vibración."],
    ["Proyección", "Capacidad de la voz de llegar lejos sin forzar."],
    ["Impostación", "Colocación de la voz para aprovechar los resonadores."],
    ["Vocalización", "Ejercicio cantado sobre vocales o sílabas."],
  ],
  ejemplos: [
    ["Una alumna canta con un sonido muy nasal. ¿Qué le propones?", ["Comprobar tapándose la nariz: si el sonido cambia mucho, pasa demasiado aire por ella.", "Abrir la faringe como al inicio de un bostezo.", "Cantar «ga-ga-ga» para despegar el velo del paladar.", "Volver a la vocal buscando vibración en la máscara, no en la nariz."], "Equilibrar resonadores: más faringe y boca, menos nariz."],
    ["Explica la diferencia entre gritar y proyectar.", ["Gritar: mucha presión en la garganta, ataque duro y poca resonancia.", "Proyectar: apoyo del aire, faringe abierta y vibración en la máscara.", "El grito cansa la voz enseguida; la proyección se mantiene."], "Proyectar es sonar más con resonancia, no con fuerza en la garganta."],
    ["Diseña una vocalización para trabajar el ataque equilibrado.", ["Elige una nota cómoda de la zona media.", "Canta «ma-me-mi-mo-mu» cortas en staccato.", "Vigila que no haya golpe ni aire antes del sonido.", "Sube por semitonos hasta una zona aún cómoda."], "La «m» inicial ayuda a que aire y cierre lleguen juntos."],
  ],
  errores: [
    "Creer que para que se oiga más hay que empujar más aire o gritar.",
    "Confundir colocar en la máscara con cantar por la nariz.",
    "Abusar del golpe de glotis al empezar cada frase.",
    "Abrir mucho la boca y cerrar la garganta en los agudos.",
  ],
  ejercicios: {
    b: [
      ["Nombra tres defectos de emisión.", "Engolada, nasal, aireada o apretada (tres de ellos)."],
      ["¿Cuáles son los tres tipos de ataque?", "Duro (golpe de glotis), aspirado y equilibrado."],
      ["Enumera los resonadores principales.", "Faringe, boca, fosas nasales (y, en los graves, la vibración del pecho)."],
      ["Define proyección.", "Capacidad de la voz de llegar lejos y entenderse sin gritar."],
    ],
    m: [
      ["Explica por qué la resonancia permite cantar fuerte sin forzar.", "Porque las cavidades amplifican el sonido de la laringe, de modo que con poca presión en la garganta se obtiene mucho volumen."],
      ["¿Qué diferencia hay entre la «máscara» y la nasalidad?", "En la máscara se sienten vibraciones en la cara con un sonido timbrado; en la nasalidad el aire y el sonido salen sobre todo por la nariz y el timbre se vuelve gangoso."],
      ["¿Por qué se igualan las vocales en el canto?", "Para que la voz mantenga el mismo color y no cambie la emisión en cada sílaba."],
      ["Describe dos vocalizaciones y su objetivo.", "Por ejemplo: «mi-me-ma-mo-mu» en cinco notas, para igualar vocales; vibración de labios en escalas, para liberar el aire y la emisión."],
    ],
    a: [
      ["Graba la misma frase gritando, cantando aireado y cantando proyectado. Compara las grabaciones con vocabulario técnico.", "Respuesta abierta: describir ataque, presión, resonancia, timbre y sensación de esfuerzo en cada caso."],
      ["Escucha a un cantante lírico y a uno de pop con micrófono. Explica cómo usa cada uno la resonancia y por qué.", "Respuesta abierta: el lírico necesita máxima resonancia para llenar la sala; el de pop puede cantar más íntimo porque el micrófono amplifica."],
    ],
  },
  glosario: [
    ["Emisión", "Producción y salida del sonido de la voz."],
    ["Ataque", "Comienzo del sonido."],
    ["Golpe de glotis", "Cierre brusco de las cuerdas al iniciar un sonido."],
    ["Voz engolada", "Voz con el sonido retenido en la garganta."],
    ["Nasalidad", "Exceso de resonancia nasal."],
    ["Resonancia", "Amplificación natural de un sonido en una cavidad."],
    ["Máscara", "Zona facial donde se percibe la vibración de la voz bien colocada."],
    ["Impostación", "Técnica para colocar la voz y aprovechar los resonadores."],
    ["Chiaroscuro", "Equilibrio entre brillo y redondez en la voz."],
    ["Vocalización", "Ejercicio vocal sobre vocales o sílabas."],
  ],
  situacion: {
    titulo: "Que se oiga en la última fila",
    reto: "Preparar una lectura o canción corta que se entienda en el fondo del salón de actos sin micrófono.",
    pasos: [
      "Elegid un texto o una canción breve.",
      "Haced un calentamiento con ejercicios de máscara y ataque.",
      "Probad en el salón: unos interpretan y otros escuchan desde la última fila.",
      "Anotad qué funciona y repetid aplicando las mejoras.",
    ],
    producto: "Una interpretación proyectada y una ficha de autoevaluación.",
    evaluacion: [
      "La voz llega clara a la última fila.",
      "No hay signos de forzar ni gritar.",
      "El ataque es limpio y las vocales están igualadas.",
      "Se aplican las mejoras propuestas.",
    ],
  },
  familias: [
    "Escuchad juntos a un cantante de ópera y a uno de pop y comparad.",
    "Jugad a decir una frase para que se oiga en otra habitación sin gritar.",
    "Probad a tararear con la boca cerrada y notar las vibraciones.",
    "Animad a hacer vocalizaciones cortas cada día.",
  ],
  saberes: "Coro y Técnica Vocal I: la emisión vocal y sus defectos; el ataque del sonido; resonancia y resonadores; colocación e impostación de la voz; proyección; igualación de vocales; vocalizaciones.",
  ideas: [
    "Grabar a cada alumno al principio y al final del tema y comparar.",
    "Usar una app de espectro para ver cómo aumenta el brillo con la máscara.",
    "Practicar la proyección en espacios distintos (aula, pasillo, patio).",
    "Hacer vocalizaciones en pequeños grupos dirigidos por alumnos.",
  ],
  fuentes: [
    { t: "Resonancia (acústica), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Resonancia_(ac%C3%BAstica)" },
    { t: "Técnica vocal, Wikipedia en español", url: "https://es.wikipedia.org/wiki/T%C3%A9cnica_vocal" },
  ],
});
