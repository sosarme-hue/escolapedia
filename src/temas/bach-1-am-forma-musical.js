// Análisis Musical I, 1º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-am");

module.exports = B.tema({
  titulo: "La forma musical",
  minutos: 60,
  objetivos: [
    "Explicar qué es la forma musical y sus principios: repetición, contraste y variación",
    "Representar la estructura de una obra con letras y minutaje",
    "Reconocer las formas binaria, ternaria, rondó, tema con variaciones y sonata",
    "Identificar la estructura de la canción popular actual",
  ],
  claves: ["forma", "sección", "repetición", "contraste", "variación", "rondó", "forma sonata", "estribillo"],
  pregunta: {
    texto: "¿Por qué sabes, sin que nadie te lo diga, que una canción está a punto de llegar al estribillo?",
    respuesta: "Porque la música tiene <mark>forma</mark>: una arquitectura de partes que se repiten y contrastan. Tu oído aprende el esquema (estrofa, preestribillo, estribillo) y anticipa lo que viene. Los compositores juegan con esa expectativa para emocionarte o sorprenderte.",
  },
  lectura: {
    titulo: "Seis minutos que rompieron las reglas",
    html: `<p>En 1975, la discográfica de Queen se negó a publicar como sencillo una canción de casi seis minutos que empezaba como una balada, seguía con un solo de guitarra, se convertía en una ópera cómica, estallaba en rock duro y terminaba en un susurro. Ninguna radio la pondría, decían.</p>
    <p><i>Bohemian Rhapsody</i> fue número uno durante nueve semanas. Su secreto no es la falta de forma, sino una forma distinta: una sucesión de secciones contrastantes, como una suite o una ópera en miniatura. En este tema aprenderás a ver la arquitectura de la música.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es la forma",
      html: `<p>La <b>forma</b> es la organización de una obra en el tiempo: cómo se divide en partes y cómo se relacionan entre sí. Igual que un edificio tiene planta, pisos y fachada, una obra tiene <b>secciones</b>, <b>frases</b> y <b>motivos</b>.</p>
      <p>Conocer la forma ayuda al oyente a orientarse («ahora vuelve el principio») y al intérprete a entender lo que toca. Para el compositor es la manera de dar <mark>unidad y variedad</mark> a la vez.</p>
      <p>Algunas formas son <b>fijas</b>, con un esquema heredado que muchos compositores comparten (el minueto, el rondó, la sonata). Otras son <b>libres</b>: siguen un texto, una historia o una idea poética, como el poema sinfónico o la fantasía. Incluso una obra «libre» se apoya siempre en repeticiones y contrastes que el oído reconoce.</p>`,
      svg: B.capas("Niveles de la forma, del mayor al menor", [["Obra", "movimientos"], ["Sección", "A, B, C…"], ["Frase", "8 compases"], ["Motivo", "2-5 notas"]]),
    },
    {
      h: "Repetición, contraste y variación",
      html: `<p>Toda forma se construye con tres principios. La <b>repetición</b> vuelve a presentar un material igual: da unidad y ayuda a recordar. El <b>contraste</b> introduce algo nuevo (otra melodía, otro carácter, otra tonalidad): da variedad y evita el aburrimiento. La <b>variación</b> repite un material cambiándolo en parte: une ambas cosas.</p>
      <p>Una obra con solo repetición resulta monótona; con solo contraste, caótica. El equilibrio entre los tres es la clave de una buena forma.</p>`,
      svg: B.formas("Repetición, contraste y variación con letras", [["Repetición", "A A"], ["Contraste", "A B"], ["Variación", "A A'"]]),
    },
    {
      h: "Cómo se representa la forma",
      html: `<p>Para analizar la forma se usan <b>letras mayúsculas</b>: cada sección nueva recibe una letra (A, B, C) y, si vuelve, se repite la letra. Si vuelve con cambios se añade una prima: <b>A′</b>. Las secciones breves de inicio y cierre se llaman <b>introducción</b> y <b>coda</b>; los fragmentos de enlace, <b>puentes</b> o transiciones.</p>
      <p>Conviene anotar el <b>minutaje</b> de cada sección y algún rasgo que la distinga (instrumentos, carácter, dinámica). Un musicograma con colores hace visible el esquema.</p>`,
      svg: B.formas("Esquema con introducción, secciones y coda", [["Esquema", "Intro A B A' Coda"]], "Intro · A · B · A′ · Coda"),
    },
    {
      h: "Formas binaria y ternaria",
      html: `<p>La <b>forma binaria</b> (A B) tiene dos secciones contrastantes, a menudo repetidas (AA BB). Es típica de las danzas barrocas, como las de las suites de Bach.</p>
      <p>La <b>forma ternaria</b> (A B A) presenta una sección, se aleja con otra contrastante y vuelve a la primera. Es una de las formas más naturales: salir de casa y regresar. La usan el minueto con trío, el aria <i>da capo</i> de la ópera barroca y muchas piezas románticas para piano.</p>`,
      svg: B.formas("Forma binaria y forma ternaria", [["Binaria", "A A B B"], ["Ternaria", "A B A"]]),
    },
    {
      h: "Rondó y tema con variaciones",
      html: `<p>El <b>rondó</b> alterna un estribillo que siempre vuelve (A) con secciones diferentes llamadas <b>coplas</b> o episodios: A B A C A. Es alegre y fácil de seguir; <i>Para Elisa</i> de Beethoven es un pequeño rondó.</p>
      <p>En el <b>tema con variaciones</b> se presenta un tema y después se repite varias veces transformado: cambia el ritmo, la armonía, el modo, la textura o la instrumentación (A A′ A″ A‴…). Las variaciones de Mozart sobre «Estrellita, ¿dónde estás?» son un ejemplo famoso.</p>`,
      svg: B.formas("Rondó y tema con variaciones", [["Rondó", "A B A C A"], ["Variaciones", "A A' A'' A'''"]]),
      video: { id: "HD3ApJmKxA4", titulo: "Beethoven. Para Elisa. Bagatela. Análisis musical. Rondó", canal: "Musicnetmaterials", vistas: 70786 },
    },
    {
      h: "La forma sonata",
      html: `<p>La <b>forma sonata</b> es la gran forma del Clasicismo (Haydn, Mozart, Beethoven) y se usa en el primer movimiento de sonatas, sinfonías y cuartetos. Tiene tres partes. En la <b>exposición</b> se presentan dos temas contrastantes, el segundo en otra tonalidad.</p>
      <p>En el <b>desarrollo</b> esos temas se fragmentan, se combinan y pasan por varias tonalidades, creando tensión. En la <b>reexposición</b> vuelven los dos temas, ahora en la tonalidad principal. Puede cerrar con una <b>coda</b>. Es, en el fondo, una forma ternaria muy ampliada.</p>`,
      svg: B.flujo("Partes de la forma sonata", ["Exposición: tema 1 y tema 2", "Desarrollo: transformación y tensión", "Reexposición: vuelven los temas", "Coda: cierre"]),
      video: { id: "vghUx7TefYA", titulo: "¿Qué es una sonata? Su historia", canal: "Raquel Aller", vistas: 94890 },
    },
    {
      h: "La forma de la canción popular",
      html: `<p>La mayoría de canciones pop, rock o urbanas siguen la forma <b>estrofa-estribillo</b>. La <b>estrofa</b> (verso) cuenta la historia y cambia de letra; el <b>estribillo</b> (coro) repite letra y melodía y es el gancho. Suelen añadirse <b>introducción</b>, <b>preestribillo</b> (que prepara el estribillo), <b>puente</b> (una sección distinta hacia el final) y <b>outro</b>.</p>
      <p>Un esquema típico es: Intro · E · Pe · Es · E · Pe · Es · Puente · Es · Outro. Es, en realidad, un pariente del rondó.</p>`,
      svg: B.formas("Estructura típica de una canción pop", [["Canción", "In E Pe Es E Pe Es P Es"]], "Intro, estrofa, preestribillo, estribillo, puente"),
      video: { id: "JvEM2Mfe69Q", titulo: "¿Cómo haces una canción? Estructura", canal: "Kike Yompian", vistas: 272081 },
    },
    {
      h: "Cómo analizar la forma",
      html: `<p>Sigue estos pasos: <b>1.</b> Escucha la obra entera e intenta notar dónde hay cambios importantes. <b>2.</b> Anota el minutaje de cada cambio. <b>3.</b> Asigna letras a las secciones según se repitan o contrasten. <b>4.</b> Describe qué distingue cada sección (melodía, instrumentos, dinámica, tonalidad). <b>5.</b> Compara el esquema con las formas conocidas.</p>
      <p>Las señales de un cambio de sección suelen ser una cadencia clara, un silencio, la entrada o salida de instrumentos, un cambio de dinámica o de tonalidad.</p>`,
      svg: B.flujo("Cinco pasos para analizar la forma", ["Escuchar y notar cambios", "Anotar el minutaje", "Poner letras", "Describir cada sección", "Comparar con formas tipo"]),
    },
  ],
  figura: {
    titulo: "Formas musicales básicas",
    items: [["Binaria", "A B", "dos secciones", "danzas barrocas"], ["Ternaria", "A B A", "ida y vuelta", "minueto, aria"], ["Rondó", "A B A C A", "estribillo", "y coplas"], ["Sonata", "E · D · R", "exposición, desarrollo", "reexposición"]],
  },
  video: { id: "S_y_gIqtmBU", titulo: "Cómo componen los profesionales (la estructura de un hit)", canal: "Nico Astegiano", vistas: 303989 },
  quiz: [
    ["La forma musical es…", ["el instrumento principal", "la organización de una obra en partes a lo largo del tiempo", "el tempo", "la letra"], 1, "Es la arquitectura de la obra."],
    ["El principio que da unidad y ayuda a recordar es la…", ["repetición", "modulación", "disonancia", "síncopa"], 0, "Volver a presentar el mismo material."],
    ["A′ indica…", ["una sección nueva", "una sección A que vuelve con cambios", "la coda", "un silencio"], 1, "La prima señala variación."],
    ["El esquema A B A corresponde a la forma…", ["binaria", "ternaria", "rondó", "sonata"], 1, "Ida, contraste y vuelta."],
    ["El esquema A B A C A es un…", ["rondó", "canon", "minueto", "coral"], 0, "Estribillo que alterna con coplas."],
    ["En el tema con variaciones…", ["cada sección es distinta", "un tema se repite transformado", "no hay tema", "se canta en canon"], 1, "A A′ A″…"],
    ["Las tres partes de la forma sonata son…", ["intro, estrofa y estribillo", "exposición, desarrollo y reexposición", "A, B y C", "allegro, adagio y presto"], 1, "Más una coda opcional."],
    ["En la forma sonata, ¿en qué parte se transforman los temas y se crea tensión?", ["Exposición", "Desarrollo", "Reexposición", "Coda"], 1, "Fragmentación y modulaciones."],
    ["En una canción, la sección que repite letra y melodía y es el gancho es…", ["la estrofa", "el estribillo", "el puente", "la intro"], 1, "Es lo que todo el mundo canta."],
    ["La sección final que cierra una obra se llama…", ["coda", "copla", "puente", "estribillo"], 0, "Del italiano «cola»."],
  ],
  examen: [
    ["Una danza barroca con dos secciones repetidas tiene forma…", ["AA BB (binaria)", "A B A", "rondó", "sonata"], 0, "Es la binaria típica de las suites."],
    ["En la reexposición de una forma sonata, el segundo tema aparece…", ["en otra tonalidad", "en la tonalidad principal", "no aparece", "en canon"], 1, "Así se resuelve la tensión tonal."],
    ["La sección de una canción que prepara la llegada del estribillo es el…", ["outro", "preestribillo", "puente", "coda"], 1, "Aumenta la expectativa."],
    ["¿Por qué la forma canción estrofa-estribillo se parece al rondó?", ["Porque es binaria", "Porque un estribillo vuelve alternando con secciones distintas", "Porque es polifónica", "Porque no se repite nada"], 1, "Como A B A C A."],
    ["Una obra que solo repite y nunca contrasta resulta…", ["caótica", "monótona", "polifónica", "atonal"], 1, "Hace falta equilibrio."],
  ],
  feynman: ["Los tres principios de la forma musical", "Cómo se representa la forma con letras", "La diferencia entre rondó y tema con variaciones", "Las partes de la forma sonata"],
  mapa: ["LA FORMA MUSICAL", [["Principios", "repetición · contraste · variación"], ["Simples", "binaria · ternaria"], ["Compuestas", "rondó · variaciones · sonata"], ["Popular", "estrofa · estribillo · puente"]]],
  tarjetas: [
    ["Forma", "Organización de una obra en partes a lo largo del tiempo."],
    ["Forma binaria", "Dos secciones contrastantes: A B."],
    ["Forma ternaria", "Sección, contraste y vuelta: A B A."],
    ["Rondó", "Estribillo que alterna con coplas: A B A C A."],
    ["Tema con variaciones", "Un tema que se repite transformado: A A′ A″."],
    ["Forma sonata", "Exposición, desarrollo y reexposición."],
    ["Estribillo", "Sección que se repite con la misma letra y melodía."],
    ["Coda", "Sección final que cierra la obra."],
  ],
  ejemplos: [
    ["Una pieza presenta una melodía (0:00), una sección distinta en tono menor (0:40) y vuelve a la primera melodía (1:20). Indica su forma.", ["0:00 sección A.", "0:40 contraste: sección B.", "1:20 regresa A."], "Forma ternaria A B A."],
    ["Escribe el esquema de una canción: intro, estrofa, estribillo, estrofa, estribillo, puente, estribillo.", ["Intro: In.", "Estrofa = A; estribillo = B; puente = C.", "Ordena: In A B A B C B."], "In · A · B · A · B · C · B."],
    ["Explica por qué Para Elisa es un rondó.", ["Su tema principal (A) aparece al inicio.", "Le sigue un episodio distinto (B) y vuelve A.", "Después llega otro episodio (C) y vuelve de nuevo A."], "Esquema A B A C A: un estribillo que alterna con dos coplas."],
  ],
  errores: [
    "Asignar una letra nueva a una sección que solo cambia un poco: es A′, no B.",
    "Confundir la forma sonata (estructura de un movimiento) con la sonata (obra completa en varios movimientos).",
    "Analizar la forma sin anotar el minutaje.",
    "Pensar que la música popular no tiene forma.",
  ],
  ejercicios: {
    b: [
      ["Define forma musical y sus tres principios.", "La organización de una obra en partes; se basa en la repetición, el contraste y la variación."],
      ["Escribe el esquema de la forma binaria, la ternaria y el rondó.", "Binaria: A B. Ternaria: A B A. Rondó: A B A C A."],
      ["¿Qué significa A′?", "Una sección A que vuelve con algún cambio."],
      ["Nombra las partes de una canción pop.", "Introducción, estrofa, preestribillo, estribillo, puente y outro."],
    ],
    m: [
      ["Explica las tres partes de la forma sonata.", "Exposición: presenta dos temas contrastantes, el segundo en otra tonalidad. Desarrollo: los transforma y modula creando tensión. Reexposición: vuelven los temas en la tonalidad principal."],
      ["¿Qué diferencia hay entre un rondó y un tema con variaciones?", "En el rondó un estribillo igual alterna con coplas nuevas; en las variaciones el mismo tema vuelve siempre, pero transformado."],
      ["¿Por qué se dice que la forma sonata es una ternaria ampliada?", "Porque presenta material (exposición), se aleja (desarrollo) y vuelve a él (reexposición), como A B A."],
      ["¿Qué función tiene el puente en una canción?", "Aportar contraste antes del último estribillo, para renovar el interés y dar más fuerza al final."],
    ],
    a: [
      ["Analiza la forma de una canción actual con los cinco pasos y representa el esquema en un musicograma.", "Respuesta abierta: secciones con minutaje, letras correctas, descripción de cada sección y comparación con la forma estrofa-estribillo o el rondó."],
      ["Escucha el primer movimiento de la Sinfonía n.º 40 de Mozart y señala dónde empiezan exposición, desarrollo y reexposición.", "Respuesta abierta (según la grabación): la exposición presenta el tema inicial en sol menor y un segundo tema más lírico; el desarrollo fragmenta el motivo inicial con modulaciones; la reexposición vuelve al tema inicial en sol menor."],
    ],
  },
  glosario: [
    ["Sección", "Parte grande de una obra con unidad propia."],
    ["Introducción", "Fragmento inicial que prepara la obra."],
    ["Puente", "Sección o enlace que aporta contraste o une partes."],
    ["Coda", "Sección final que cierra la obra."],
    ["Copla", "Sección diferente que alterna con el estribillo en el rondó."],
    ["Exposición", "Primera parte de la forma sonata, con los temas."],
    ["Desarrollo", "Parte central de la forma sonata donde se transforman los temas."],
    ["Reexposición", "Vuelta de los temas en la tonalidad principal."],
    ["Aria da capo", "Aria barroca en forma A B A."],
    ["Estrofa", "Sección de una canción que cambia de letra."],
  ],
  situacion: {
    titulo: "Rayos X de una canción",
    reto: "Hacer la «radiografía» formal de tres canciones de distintas épocas y comparar sus estructuras.",
    pasos: [
      "Elegid una canción de los años 60, una de los 90 y una actual.",
      "Analizad la forma de cada una con minutaje y letras.",
      "Dibujad los tres esquemas con colores en una misma lámina.",
      "Sacad conclusiones: ¿ha cambiado la duración, el número de estribillos o la intro?",
    ],
    producto: "Una lámina comparativa de tres esquemas formales con conclusiones.",
    evaluacion: [
      "Los esquemas son correctos y tienen minutaje.",
      "Usa bien la notación con letras y primas.",
      "Compara con argumentos.",
      "La presentación es clara y visual.",
    ],
  },
  familias: [
    "Escuchad una canción y levantad la mano cada vez que llegue el estribillo.",
    "Comparad la estructura de una canción de vuestra juventud con una actual.",
    "Escuchad Para Elisa y contad cuántas veces vuelve el tema.",
    "Buscad canciones sin estribillo y comentad qué sensación dan.",
  ],
  saberes: "Análisis Musical I: la forma musical y sus principios (repetición, contraste, variación); representación con letras y minutaje; formas binaria, ternaria, rondó, tema con variaciones y forma sonata; la forma de la canción popular.",
  ideas: [
    "Representar la forma con el cuerpo: cada grupo se levanta en «su» sección.",
    "Construir musicogramas colaborativos en la pizarra.",
    "Comparar el aria da capo con la forma canción actual.",
    "Analizar la estructura de los éxitos de la semana.",
  ],
  fuentes: [
    { t: "Bohemian Rhapsody, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Bohemian_Rhapsody" },
    { t: "Forma sonata, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Forma_sonata" },
  ],
});
