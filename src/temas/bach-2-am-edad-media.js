// Análisis Musical II, 2º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-am");

module.exports = B.tema({
  titulo: "La Edad Media: canto gregoriano, trovadores y primera polifonía",
  minutos: 60,
  objetivos: [
    "Reconocer por audición los rasgos del canto gregoriano y sus estilos de texto",
    "Diferenciar la monodia religiosa de la profana (trovadores y Cantigas)",
    "Identificar las primeras formas polifónicas: organum, conductus y motete",
    "Comentar una obra medieval con vocabulario de forma, textura y modo",
  ],
  claves: ["monodia", "gregoriano", "modo", "melisma", "trovador", "organum", "motete", "Ars Nova"],
  pregunta: {
    texto: "¿Por qué el canto gregoriano suena tan «flotante», sin pulso ni acordes?",
    respuesta: "Porque es <mark>monodia</mark> (una sola melodía) con ritmo libre que sigue el texto en latín, y usa <b>modos</b> en lugar de tonalidades mayor y menor. No hay acompañamiento ni compás: la música está al servicio de la palabra y de la oración.",
  },
  lectura: {
    titulo: "Mil años cantando sin pentagrama",
    html: `<p>Durante siglos, los monjes aprendieron cientos de cantos de memoria. Hacia el siglo IX empezaron a anotar sobre el texto unos pequeños signos, los <b>neumas</b>, que recordaban si la melodía subía o bajaba. Un monje italiano, Guido de Arezzo, añadió líneas para fijar la altura y dio nombre a las notas con las sílabas de un himno: ut, re, mi, fa, sol, la.</p>
    <p>Así nació la escritura musical que todavía usamos. En este tema analizarás aquellos cantos, las canciones de amor de los trovadores y el momento decisivo en que alguien decidió cantar dos melodías a la vez: el nacimiento de la polifonía.</p>`,
  },
  secciones: [3, 2, 3],
  bloques: [
    {
      h: "El canto gregoriano",
      html: `<p>El <b>canto gregoriano</b> es el canto oficial de la liturgia católica en latín. Sus rasgos se reconocen enseguida: <b>monodia</b> (una sola línea melódica, cantada al unísono por voces masculinas), <b>a cappella</b>, <b>ritmo libre</b> que sigue la acentuación del texto, <b>ámbito</b> reducido y movimiento por grados conjuntos.</p>
      <p>Usa los <b>modos eclesiásticos</b> (dórico, frigio, lidio, mixolidio y sus variantes), cuyo final y distribución de tonos y semitonos dan a cada canto un color propio, distinto del mayor y el menor modernos. Para identificar el modo, fíjate en la última nota (la <b>finalis</b>) y en la nota que más se repite, la <b>cuerda de recitación</b>.</p>`,
      svg: B.melodia("Perfil de un canto gregoriano: sube y baja por grados conjuntos en un ámbito pequeño", [0, 1, 2, 2, 3, 2, 1, 0], { titulo: "Grados conjuntos, ámbito estrecho" }),
    },
    {
      h: "Relación entre texto y música",
      html: `<p>Según cuántas notas se cantan en cada sílaba, hay tres estilos. <b>Silábico</b>: una nota por sílaba, típico de los salmos y del Credo, donde importa entender el texto. <b>Neumático</b>: dos a cuatro notas por sílaba. <b>Melismático</b>: muchas notas sobre una sílaba (un <b>melisma</b>), como en el Aleluya, donde la música expresa júbilo.</p>
      <p>En un comentario conviene señalar el estilo predominante con un ejemplo: «la sílaba final de <i>alleluia</i> se prolonga en un largo melisma».</p>`,
      svg: B.rejilla("Tres estilos de canto", ["Estilo", "Notas por sílaba", "Ejemplo"], [["Silábico", "1", "salmos, Credo"], ["Neumático", "2-4", "introitos"], ["Melismático", "muchas", "Aleluya"]]),
    },
    {
      h: "Las formas de la liturgia",
      html: `<p>El gregoriano se organiza en dos grandes ciclos. La <b>misa</b> tiene partes fijas, el <b>ordinario</b> (Kyrie, Gloria, Credo, Sanctus, Agnus Dei), y partes que cambian según el día, el <b>propio</b> (introito, gradual, aleluya…). El <b>oficio divino</b> reparte salmos e himnos por las horas del día.</p>
      <p>Muchos cantos usan formas de interpretación: <b>responsorial</b> (un solista y el coro se alternan) y <b>antifonal</b> (dos coros se responden). El Kyrie, por ejemplo, tiene forma ternaria: Kyrie, Christe, Kyrie.</p>`,
      svg: B.formas("Kyrie: forma ternaria con triple invocación", [["Kyrie", "A B A"], ["Antifonal", "C1 C2 C1 C2"]], "Repetición en la liturgia"),
    },
    {
      h: "Trovadores y monodia profana",
      html: `<p>Fuera de la iglesia, desde el siglo XI, los <b>trovadores</b> del sur de Francia (en lengua de oc), los <b>troveros</b> del norte y los <b>Minnesänger</b> alemanes compusieron canciones en lengua vulgar sobre el amor cortés, la guerra o la sátira. Los <b>juglares</b> las difundían por plazas y castillos.</p>
      <p>Musicalmente son también monodias, pero con <b>ritmo más regular</b>, forma estrófica con estribillo y probable acompañamiento de instrumentos (laúd, fídula, flauta, percusión), que se improvisaba porque no se escribía.</p>`,
      svg: B.comparar("Gregoriano y canción trovadoresca", ["Gregoriano", ["latín", "ritmo libre", "a cappella", "liturgia"]], ["Trovadores", ["lengua vulgar", "ritmo regular", "con instrumentos", "amor cortés"]]),
      video: { id: "1dQeY7PaWgg", titulo: "Trovadores y juglares, los músicos de la Edad Media: los trovadores", canal: "Owland", vistas: 85005 },
    },
    {
      h: "Las Cantigas de Santa María",
      html: `<p>En Castilla, el rey <b>Alfonso X el Sabio</b> reunió en el siglo XIII más de cuatrocientas <b>Cantigas de Santa María</b>, en galaicoportugués, que narran milagros de la Virgen. Los códices incluyen miniaturas con músicos que tocan instrumentos de tradición cristiana, árabe y judía.</p>
      <p>Muchas cantigas siguen la forma del <b>virelai</b> o zéjel: un <b>estribillo</b> que se repite tras cada estrofa, con un esquema del tipo A B B A. Su ritmo regular y bailable las distingue enseguida del gregoriano.</p>`,
      svg: B.formas("Esquema de una cantiga", [["Cantiga", "A B B A A"]], "Estribillo (A) y estrofa (B)"),
    },
    {
      h: "El nacimiento de la polifonía",
      html: `<p>La <b>polifonía</b> consiste en cantar varias líneas melódicas a la vez. Empezó con el <b>organum</b> (siglo IX): a una melodía gregoriana, la <b>vox principalis</b>, se le añadía una segunda voz paralela a distancia de cuarta o quinta. Después la voz añadida se hizo independiente: movimiento contrario y, en el <b>organum melismático</b>, muchas notas sobre cada nota larga del canto.</p>
      <p>En la <b>Escuela de Notre Dame</b> de París (siglos XII-XIII), Léonin y Pérotin escribieron organa a dos, tres y cuatro voces con <b>modos rítmicos</b>: por primera vez se fijó la duración de las notas.</p>`,
      svg: B.capas("Del unísono a la polifonía", [["Organum paralelo", "voces a 4.ª o 5.ª"], ["Organum melismático", "voz superior libre"], ["Notre Dame", "3-4 voces y ritmo"]]),
      video: { id: "WSsutCu8PIo", titulo: "El nacimiento de la polifonía: los diferentes tipos de organum", canal: "Keep it Classical", vistas: 106768 },
    },
    {
      h: "Conductus y motete",
      html: `<p>El <b>conductus</b> es una obra polifónica en la que todas las voces son de nueva composición y se mueven con el mismo ritmo: una textura casi <b>homofónica</b>. El <b>motete</b>, la forma más importante del siglo XIII, toma un fragmento gregoriano como <b>tenor</b> (voz grave, en notas largas) y le superpone voces con <b>textos diferentes</b>, a veces en latín y francés a la vez.</p>
      <p>Al escuchar un motete se oye una superposición densa: un bajo lento y voces superiores rápidas, cada una con su propio texto.</p>`,
      svg: B.texturas("Texturas medievales: monodia, homofonía del conductus y polifonía del motete"),
    },
    {
      h: "El Ars Nova",
      html: `<p>En el siglo XIV, el <b>Ars Nova</b> («arte nuevo») renovó la notación y permitió ritmos más variados, incluido el compás binario. Su gran figura, <b>Guillaume de Machaut</b>, compuso la <b>Misa de Notre Dame</b>, la primera misa polifónica completa de un solo autor, y numerosas canciones profanas.</p>
      <p>Una técnica típica es la <b>isorritmia</b>: un patrón rítmico (talea) que se repite en el tenor, aunque cambien las notas. Es un antecedente lejano de los ostinatos que encontrarás en épocas posteriores. Frente al Ars Antiqua del siglo XIII, el Ars Nova suena más flexible, más disonante y con más protagonismo de la canción profana.</p>`,
      svg: B.cronologia("La música medieval", [["s. IX", "neumas"], ["s. XI", "trovadores"], ["1200", "Notre Dame"], ["1260", "Cantigas"], ["1320", "Ars Nova"], ["1365", "Machaut"]]),
    },
  ],
  figura: {
    titulo: "Claves de la música medieval",
    items: [["Gregoriano", "monodia", "latín, modos", "ritmo libre"], ["Trovadores", "canción", "lengua vulgar", "amor cortés"], ["Organum", "2 voces", "sobre un", "canto llano"], ["Motete", "tenor + voces", "textos", "distintos"]],
  },
  video: { id: "7BygAXa546w", titulo: "El canto gregoriano: ¿cómo nació y de qué se trata?", canal: "BITE", vistas: 36025 },
  quiz: [
    ["El canto gregoriano es…", ["polifonía a cuatro voces", "monodia litúrgica en latín", "canción profana", "música instrumental"], 1, "Una sola melodía para la liturgia."],
    ["Su ritmo es…", ["de compás regular", "libre, según el texto", "isorrítmico", "sincopado"], 1, "Sigue los acentos de las palabras."],
    ["Muchas notas sobre una sílaba forman un…", ["neuma", "melisma", "tenor", "conductus"], 1, "Típico del Aleluya."],
    ["Las partes fijas de la misa forman el…", ["propio", "ordinario", "oficio", "motete"], 1, "Kyrie, Gloria, Credo, Sanctus, Agnus Dei."],
    ["Los trovadores cantaban en…", ["latín", "lengua vulgar", "griego", "hebreo"], 1, "Lengua de oc."],
    ["Las Cantigas de Santa María se deben a…", ["Machaut", "Alfonso X", "Pérotin", "Guido de Arezzo"], 1, "Siglo XIII, Castilla."],
    ["El organum añade a un canto gregoriano…", ["instrumentos", "una o más voces", "un estribillo", "un texto en francés"], 1, "Es la primera polifonía."],
    ["Léonin y Pérotin pertenecen a la…", ["Escuela de Notre Dame", "Ars Nova", "corte de Alfonso X", "Escuela de Viena"], 0, "París, siglos XII-XIII."],
    ["En el motete medieval, las voces superiores…", ["cantan el mismo texto", "cantan textos distintos", "no tienen texto", "son instrumentales"], 1, "A veces en latín y francés a la vez."],
    ["La isorritmia consiste en…", ["repetir un patrón rítmico", "cantar en paralelo", "improvisar", "usar acordes"], 0, "La talea se repite en el tenor."],
  ],
  examen: [
    ["Escuchas voces masculinas al unísono, en latín, sin pulso marcado. ¿Qué es?", ["Motete", "Canto gregoriano", "Cantiga", "Madrigal"], 1, "Monodia litúrgica."],
    ["Una melodía con estribillo, en galaicoportugués, con percusión y ritmo bailable es probablemente…", ["un organum", "una cantiga", "un Kyrie", "un conductus"], 1, "Cantigas de Santa María."],
    ["¿Qué textura tiene un conductus?", ["Monodia", "Casi homofónica", "Melodía acompañada", "Heterofonía"], 1, "Voces con el mismo ritmo."],
    ["La primera misa polifónica completa de un solo autor es de…", ["Pérotin", "Machaut", "Alfonso X", "Léonin"], 1, "Misa de Notre Dame, siglo XIV."],
    ["El Aleluya suele ser un canto…", ["silábico", "melismático", "isorrítmico", "homofónico"], 1, "Expresa el júbilo con melismas."],
  ],
  feynman: ["Cinco rasgos auditivos del gregoriano", "Silábico, neumático y melismático", "Qué diferencia a un trovador de un monje cantor", "Cómo pasó la música del organum al motete"],
  mapa: ["LA EDAD MEDIA", [["Monodia religiosa", "gregoriano · modos · misa"], ["Monodia profana", "trovadores · Cantigas"], ["Polifonía", "organum · Notre Dame"], ["Ars Nova", "motete · Machaut · isorritmia"]]],
  tarjetas: [
    ["Monodia", "Una sola línea melódica sin acompañamiento."],
    ["Modo", "Escala medieval con su final y su color propios."],
    ["Melisma", "Grupo de muchas notas sobre una sílaba."],
    ["Ordinario", "Partes fijas de la misa: Kyrie, Gloria, Credo, Sanctus, Agnus Dei."],
    ["Trovador", "Poeta músico medieval en lengua de oc."],
    ["Organum", "Primera polifonía: voces añadidas a un canto gregoriano."],
    ["Motete", "Polifonía sobre un tenor gregoriano con textos distintos arriba."],
    ["Ars Nova", "Estilo del siglo XIV con nueva notación rítmica."],
  ],
  ejemplos: [
    ["Escuchas un canto en latín donde una sílaba se alarga más de diez segundos. Analízalo.", ["Una melodía, voces al unísono: monodia.", "Muchas notas en una sílaba: estilo melismático.", "Latín y ritmo libre: liturgia."], "Canto gregoriano melismático, probablemente un Aleluya."],
    ["Dos voces: la grave sostiene notas larguísimas y la aguda hace adornos rápidos. ¿Qué es?", ["Voz grave = canto gregoriano alargado.", "Voz aguda libre y melismática.", "Época: siglo XII."], "Organum melismático (Escuela de Notre Dame o anterior)."],
    ["Una canción en lengua vulgar repite el mismo fragmento tras cada estrofa. Escribe su forma.", ["Estribillo = A.", "Estrofa = B.", "Se alternan."], "Forma con estribillo, A B A B A, como el virelai o la cantiga."],
  ],
  errores: [
    "Decir que el gregoriano tiene acompañamiento o compás.",
    "Confundir monodia con monofonía instrumental moderna o con homofonía.",
    "Pensar que el motete medieval es igual al motete renacentista.",
    "Llamar «tonalidad» a los modos eclesiásticos.",
  ],
  ejercicios: {
    b: [
      ["Enumera cinco rasgos del canto gregoriano.", "Monodia, latín, a cappella, ritmo libre, modos eclesiásticos (y ámbito reducido por grados conjuntos)."],
      ["Define silábico, neumático y melismático.", "Una nota por sílaba; dos a cuatro notas por sílaba; muchas notas sobre una sílaba."],
      ["¿Qué son las Cantigas de Santa María?", "Colección de más de 400 canciones en galaicoportugués reunidas por Alfonso X en el siglo XIII, sobre milagros de la Virgen."],
      ["Define organum.", "Primera forma polifónica: a un canto gregoriano se le añade una o más voces."],
    ],
    m: [
      ["Compara el canto gregoriano y la canción trovadoresca en cuatro rasgos.", "Lengua (latín / vulgar), ritmo (libre / regular), plantilla (a cappella / con instrumentos) y función (liturgia / entretenimiento cortesano)."],
      ["Explica la diferencia entre ordinario y propio de la misa.", "El ordinario tiene texto fijo todos los días; el propio cambia según la festividad."],
      ["Describe cómo evolucionó el organum.", "De voces paralelas a cuarta o quinta a voces con movimiento contrario y, después, a una voz superior melismática sobre notas largas; en Notre Dame, hasta cuatro voces con ritmo medido."],
      ["¿Qué es la isorritmia?", "Repetición de un patrón rítmico (talea) en una voz, normalmente el tenor, aunque cambien las alturas."],
    ],
    a: [
      ["Escucha un Kyrie gregoriano y otro de la Misa de Machaut. Compara textura, ritmo y plantilla.", "Respuesta abierta: el gregoriano es monodia de ritmo libre; Machaut es polifonía a cuatro voces, rítmicamente medida, con isorritmia y disonancias de la época."],
      ["Redacta el comentario de una cantiga de Alfonso X con minutaje.", "Respuesta abierta: ficha, monodia con instrumentos, ritmo ternario regular, forma de estribillo y estrofas, contexto de la corte de Alfonso X."],
    ],
  },
  glosario: [
    ["Neuma", "Signo medieval que indicaba la dirección de la melodía."],
    ["A cappella", "Sin instrumentos."],
    ["Antifonal", "Alternancia de dos coros."],
    ["Responsorial", "Alternancia de solista y coro."],
    ["Juglar", "Músico ambulante que difundía canciones."],
    ["Vox principalis", "Voz del canto original en el organum."],
    ["Tenor", "Voz que sostiene el canto gregoriano en la polifonía medieval."],
    ["Conductus", "Polifonía con todas las voces nuevas y el mismo ritmo."],
    ["Talea", "Patrón rítmico repetido en la isorritmia."],
  ],
  situacion: {
    titulo: "Un monasterio en el aula",
    reto: "Interpretar un breve canto gregoriano y convertirlo en organum paralelo.",
    pasos: [
      "Aprended de oído una antífona breve en latín.",
      "Cantadla al unísono con ritmo libre siguiendo el texto.",
      "Añadid una segunda voz a distancia de quinta.",
      "Grabad las dos versiones y explicad la diferencia de textura.",
    ],
    producto: "Dos grabaciones comentadas: monodia y organum.",
    evaluacion: [
      "Canta con afinación y unísono.",
      "Respeta el ritmo libre del texto.",
      "Mantiene la voz paralela.",
      "Explica la evolución de la textura.",
    ],
  },
  familias: [
    "Escuchad juntos un canto gregoriano y comentad qué sensación produce.",
    "Buscad una miniatura de las Cantigas y contad los instrumentos.",
    "Preguntadle qué es un melisma y pedidle que cante uno.",
    "Visitad, si podéis, un monasterio o una catedral románica.",
  ],
  saberes: "Análisis Musical II: la música medieval: canto gregoriano (monodia, modos, estilos silábico, neumático y melismático, misa y oficio), monodia profana (trovadores, Cantigas de Santa María), primeras polifonías (organum, Escuela de Notre Dame, conductus, motete) y Ars Nova.",
  ideas: [
    "Comparar dos versiones del mismo canto: monodia y organum.",
    "Analizar el estilo de texto siguiendo una partitura en notación cuadrada.",
    "Escuchar una cantiga y dibujar su forma con colores.",
    "Cantar una talea sobre distintas notas para entender la isorritmia.",
  ],
  fuentes: [
    { t: "Canto gregoriano, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Canto_gregoriano" },
    { t: "Cantigas de Santa María, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Cantigas_de_Santa_Mar%C3%ADa" },
  ],
});
