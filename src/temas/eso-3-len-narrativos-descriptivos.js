// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "Los textos narrativos y descriptivos",
  minutos: 45,
  objetivos: ["Reconocer los elementos de la narración: narrador, personajes, acción, espacio y tiempo", "Distinguir los tipos de narrador", "Escribir descripciones objetivas y subjetivas bien ordenadas"],
  claves: ["narración", "narrador", "personajes", "trama", "planteamiento", "nudo", "desenlace", "descripción", "retrato"],
  pregunta: {
    texto: "«Érase una vez…» y «Tenía los ojos verdes como el mar». ¿Qué hace cada frase?",
    respuesta: "La primera empieza a <b>contar hechos</b>: es una <mark>narración</mark>. La segunda se detiene a <b>mostrar cómo es</b> alguien: es una <mark>descripción</mark>. En los cuentos y novelas ambas se mezclan: se narra lo que pasa y se describe dónde y a quién le pasa.",
  },
  bloques: [
    {
      html: `<h3>Qué es narrar</h3><p>Narrar es <mark>contar hechos</mark>, reales o imaginarios, que les ocurren a unos personajes en un lugar y un tiempo. Hay narraciones literarias (cuentos, novelas, leyendas) y no literarias (noticias, anécdotas, diarios, biografías). Todas responden a las preguntas <b>qué</b> pasó, <b>a quién</b>, <b>dónde</b> y <b>cuándo</b>.</p>`,
      svg: L.filas("Elementos de la narración", [
        ["Narrador", "quién cuenta", "var(--pen)"],
        ["Personajes", "a quién le pasa", "var(--red)"],
        ["Acción", "qué pasa", "var(--leaf)"],
        ["Espacio y tiempo", "dónde y cuándo", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>La estructura: planteamiento, nudo y desenlace</h3><p>La mayoría de los relatos siguen tres partes. En el <b>planteamiento</b> se presentan los personajes y la situación inicial. En el <b>nudo</b> aparece un <mark>conflicto</mark> que rompe esa situación y la acción se complica. En el <b>desenlace</b> el conflicto se resuelve, bien o mal.</p>`,
      svg: L.linea("Estructura de un relato", [
        ["1", "Planteamiento: situación inicial", "var(--pen)"],
        ["2", "Nudo: aparece el conflicto", "var(--red)"],
        ["3", "Desenlace: se resuelve", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Los tipos de narrador</h3><p>El narrador puede estar <b>dentro</b> de la historia y hablar en <b>primera persona</b>: es <i>protagonista</i> si cuenta lo que le pasa a él, y <i>testigo</i> si cuenta lo que ve. O puede estar <b>fuera</b> y hablar en <b>tercera persona</b>: el narrador <mark>omnisciente</mark> lo sabe todo, incluso lo que piensan los personajes; el <mark>observador</mark> solo cuenta lo que se ve.</p>`,
      svg: L.tabla("Tipos de narrador", ["Narrador", "Persona", "Sabe…"], [
        ["Protagonista", "1.ª", "lo suyo"], ["Testigo", "1.ª", "lo que ve"], ["Omnisciente", "3.ª", "todo"], ["Observador", "3.ª", "lo externo"],
      ]),
    },
    {
      html: `<h3>Qué es describir</h3><p>Describir es <mark>pintar con palabras</mark> cómo es una persona, un animal, un lugar, un objeto o una situación. En la descripción abundan los <b>adjetivos</b>, las <b>comparaciones</b> y los verbos en presente o en pretérito imperfecto («era», «tenía»), porque el tiempo de la acción se detiene.</p>`,
      svg: L.frase("Descripción: el viejo faro era alto y blanco como la sal", [
        ["El viejo", "adjetivo", "var(--leaf)"], ["faro", "objeto", "var(--ink)"], ["era alto", "imperfecto", "var(--pen)"], ["y blanco", "adjetivo", "var(--leaf)"], ["como la sal", "comparación", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Descripción objetiva y subjetiva</h3><p>La <b>objetiva</b> se limita a los datos y usa un lenguaje preciso, como en un folleto o una ficha técnica: «Mide dos metros y pesa ochenta kilos». La <b>subjetiva</b> muestra la opinión y los sentimientos de quien describe: «Era un gigante bondadoso de mirada triste». Los textos literarios suelen preferir la subjetiva.</p>`,
      svg: L.filas("Descripción objetiva frente a subjetiva", [
        ["Objetiva", "datos medibles, sin opinión", "var(--pen)"],
        ["Subjetiva", "impresiones y sentimientos", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Narrar y describir",
    svg: L.columnas("Comparación entre narración y descripción", [
      ["cuenta hechos", "NARRAR", ["verbos de acción", "pretérito perfecto simple"], "var(--pen)"],
      ["muestra cómo es", "DESCRIBIR", ["adjetivos", "presente o imperfecto"], "var(--leaf)"],
      ["se mezclan en", "RELATOS", ["cuentos, novelas", "noticias, diarios"], "var(--red)"],
    ]),
  },
  video: { id: "Aqn8bEAVixI", titulo: "La narración: el texto narrativo y sus elementos", canal: "Profe Teatro", vistas: 531808, megusta: 0, busqueda: "el texto narrativo elementos" },
  quiz: [
    { q: "La parte en la que surge el conflicto es…", o: ["el planteamiento", "el nudo", "el desenlace"], a: 1, e: "El nudo complica la situación inicial." },
    { q: "«Yo lo vi todo desde la ventana»: el narrador es…", o: ["protagonista", "testigo", "omnisciente"], a: 1, e: "Habla en primera persona de lo que observa." },
    { q: "El narrador que sabe lo que piensan todos los personajes es…", o: ["observador", "omnisciente", "testigo"], a: 1, e: "Omnisciente: lo sabe todo." },
    { q: "En las descripciones abundan sobre todo…", o: ["los adjetivos", "las interjecciones", "las preposiciones"], a: 0, e: "Expresan cualidades." },
    { q: "«La mochila pesa 3 kg y es de color azul» es una descripción…", o: ["objetiva", "subjetiva", "narrativa"], a: 0, e: "Solo da datos." },
  ],
  examen: [
    { q: "¿Cuál NO es un texto narrativo?", o: ["Una noticia", "Una receta de cocina", "Una leyenda"], a: 1, e: "La receta es instructiva." },
    { q: "El tiempo verbal típico de la narración en pasado es…", o: ["el pretérito perfecto simple", "el futuro", "el imperativo"], a: 0, e: "«Llegó», «abrió», «gritó»." },
    { q: "Un retrato describe…", o: ["un lugar", "el físico y el carácter de una persona", "un proceso"], a: 1, e: "Retrato = prosopografía + etopeya." },
  ],
  feynman: ["Los elementos de una narración", "Planteamiento, nudo y desenlace con un cuento conocido", "Los cuatro tipos de narrador", "La diferencia entre descripción objetiva y subjetiva"],
  mapa: mapa("NARRAR Y DESCRIBIR", "var(--eso)", [
    ["Elementos", "narrador · personajes · acción", "var(--pen)"],
    ["Estructura", "planteamiento · nudo · desenlace", "var(--red)"],
    ["Narrador", "1.ª o 3.ª persona", "var(--leaf)"],
    ["Descripción", "objetiva · subjetiva", "var(--inf)"],
  ]),
  tarjetas: [
    ["Nudo", "Parte del relato en que aparece el conflicto y se complica la acción."],
    ["Narrador omnisciente", "Cuenta en tercera persona y lo sabe todo, incluso los pensamientos."],
    ["Narrador testigo", "Cuenta en primera persona lo que ha visto, sin ser el protagonista."],
    ["Descripción subjetiva", "La que muestra las impresiones y sentimientos de quien describe."],
    ["Rasgos de la descripción", "Adjetivos, comparaciones y verbos en presente o imperfecto."],
  ],
  familias: ["Pedidle que os cuente una película en tres frases: planteamiento, nudo y desenlace.", "Describid entre todos una foto familiar: primero con datos y después con sentimientos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: géneros discursivos; secuencias textuales narrativa y descriptiva; mecanismos de cohesión (RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Reescribir un cuento tradicional cambiando el tipo de narrador.", "Retratos cruzados: describir a un personaje famoso sin decir su nombre.", "Analizar la estructura de un cortometraje sin diálogos."],
  },
  fuentes: [
    L.BOE,
    { t: "Narrador, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Narrador" },
    { t: "Centro Virtual Cervantes: recursos de lengua", url: "https://cvc.cervantes.es/" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Reconocer el orden de los hechos y las técnicas para alterar el tiempo", "Distinguir prosopografía, etopeya, retrato, topografía y caricatura"],
  bloques: [
    { tras: "Qué es narrar", html: `<h3>Personajes: principales y secundarios</h3><p>El <b>protagonista</b> es el personaje central, en torno al que gira la historia. Muchas veces tiene un <b>antagonista</b> que se le opone. Los <b>secundarios</b> ayudan o dificultan sus planes, y los <b>personajes de ambiente</b> solo aparecen de fondo.</p><p>Según su evolución, un personaje puede ser <mark>plano</mark>, si no cambia a lo largo del relato (el lobo de los cuentos siempre es malo), o <mark>redondo</mark>, si evoluciona y nos sorprende, como ocurre con los protagonistas de las buenas novelas.</p>` },
    { tras: "La estructura: planteamiento", html: `<h3>El tiempo del relato</h3><p>Los hechos pueden contarse en <b>orden lineal</b> (del principio al final) o alterarse. Con una <b>analepsis</b> o <i>flashback</i> el narrador vuelve atrás para contar algo que pasó antes; con una <b>prolepsis</b> adelanta algo que pasará después. Algunos relatos empiezan <i>in medias res</i>, en mitad de la acción, y luego explican cómo se llegó hasta allí.</p><p>Fíjate también en el <mark>ritmo</mark>: un narrador puede resumir diez años en una línea («Pasaron diez años») o dedicar dos páginas a un minuto decisivo.</p>` },
    { tras: "Los tipos de narrador", html: `<h3>Cómo hablan los personajes</h3><p>En una narración las palabras de los personajes pueden aparecer en <b>estilo directo</b>, reproducidas tal cual con raya o comillas: —No pienso volver —dijo Marta. O en <b>estilo indirecto</b>, contadas por el narrador: Marta dijo que no pensaba volver.</p><p>En estilo directo, la <mark>raya</mark> (—) abre la intervención y separa las palabras del narrador. Cuidado: no es un guion corto (-). Los verbos que introducen las palabras (dijo, gritó, susurró, preguntó) se llaman <b>verbos de habla</b> y ayudan a mostrar cómo se dice algo.</p>` },
    { tras: "Qué es describir", html: `<h3>Clases de descripción según lo que se describe</h3>${L.tb(["Nombre", "Qué describe", "Ejemplo"], [["Prosopografía", "el aspecto físico", "Era alta, de pelo rizado."], ["Etopeya", "el carácter", "Era generosa y testaruda."], ["Retrato", "físico + carácter", "Alta, rizada y testaruda."], ["Caricatura", "exagera rasgos con humor", "Su nariz llegaba antes que él."], ["Topografía", "un lugar o paisaje", "El valle estaba cubierto de niebla."]])}<p>Para describir con orden, sigue un criterio: <mark>de lo general a lo particular</mark>, de arriba abajo, de cerca a lejos o de fuera adentro.</p>` },
    { tras: "Descripción objetiva y subjetiva", html: `<h3>Recursos para describir mejor</h3><p>Una buena descripción despierta los <b>cinco sentidos</b>: no solo lo que se ve, sino también lo que se oye, se huele, se toca y se saborea. «La cocina olía a pan recién hecho y el suelo crujía bajo los pies».</p><p>Los recursos más útiles son los <b>adjetivos precisos</b> (mejor «carmesí» que «muy rojo»), las <b>comparaciones</b> («rápido como un rayo»), las <b>metáforas</b> («un mar de trigo») y las <b>personificaciones</b> («la casa dormía»). Evita repetir siempre «tenía» y «había»: busca verbos más expresivos.</p>` },
    { html: `<h3>Narraciones de la vida diaria</h3><p>No solo narran los escritores. Narramos cuando contamos una <b>anécdota</b> a los amigos, cuando escribimos un <b>diario</b>, cuando un periodista redacta una <b>noticia</b> o cuando alguien escribe su <b>biografía</b> o un historiador explica una batalla. En estas narraciones no literarias los hechos son reales y lo importante es contarlos con <mark>claridad y en orden</mark>.</p><p>La noticia, por ejemplo, responde a las seis preguntas básicas (qué, quién, cuándo, dónde, cómo y por qué) y coloca lo más importante al principio. El diario, en cambio, usa la primera persona y mezcla los hechos con los sentimientos de quien escribe. Para que una anécdota funcione, conviene crear un poco de intriga y no desvelar el final antes de tiempo.</p>` },
  ],
  videos: [
    ["Los tipos de narrador", L.vid("_YKj8s3alEk", "Tipos de narradores… ¿Cómo se clasifican?", "Profe Teatro", 372765)],
    ["Qué es describir", L.vid("afB321wlB9s", "Texto descriptivo: ejemplos y características", "unProfesor", 279289)],
  ],
  ejemplos: [
    ["Identifica la estructura de «Caperucita Roja».", ["Planteamiento: Caperucita va a casa de su abuela por el bosque.", "Nudo: el lobo la engaña, se adelanta y se come a la abuela; después engaña a Caperucita.", "Desenlace: el cazador salva a las dos y el lobo recibe su castigo."], "planteamiento, nudo y desenlace claros; narrador omnisciente en tercera persona."],
    ["¿Qué narrador hay en «Cuando abrí la puerta, supe que algo había cambiado»?", ["Habla en primera persona (abrí, supe).", "Cuenta lo que le pasa a él mismo.", "Solo conoce sus propios pensamientos."], "narrador protagonista."],
    ["Convierte en subjetiva: «La habitación mide 3 × 4 metros y tiene una ventana».", ["Seleccionar un sentimiento: la habitación transmite calma o agobio.", "Añadir adjetivos valorativos y una comparación.", "Incluir otro sentido además de la vista."], "«Mi habitación es pequeña y acogedora como un nido; por la ventana entra el olor de los tilos»."],
  ],
  errores: [
    "Confundir al narrador con el autor: el autor es una persona real; el narrador es una voz dentro del texto.",
    "Creer que todo narrador en primera persona es protagonista: puede ser testigo.",
    "Usar el guion corto (-) en lugar de la raya (—) en los diálogos.",
    "Describir sin orden, saltando de un rasgo a otro.",
    "Abusar de «tenía» y «había» en las descripciones.",
  ],
  ejercicios: [
    ["Escribe un planteamiento de tres líneas para un relato de misterio.", "Respuesta abierta. Debe presentar personaje, lugar y tiempo; por ejemplo: «Aquella noche de invierno, Nora se quedó sola en la biblioteca del instituto…»."],
    ["¿Qué narrador hay en «Pedro pensaba que nadie lo quería, pero su hermana lo echaba de menos»?", "Omnisciente: conoce los pensamientos y sentimientos de varios personajes."],
    ["Pasa a estilo indirecto: —Mañana iré al médico —dijo Ana.", "Ana dijo que al día siguiente iría al médico."],
    ["Pasa a estilo directo: El guía nos pidió que no tocáramos nada.", "—No toquéis nada —nos pidió el guía."],
    ["Escribe una etopeya de cuatro líneas de un personaje inventado.", "Respuesta abierta. Debe describir el carácter (generoso, impaciente, tímido…) sin hablar del físico."],
    ["¿Qué es una analepsis? Pon un ejemplo.", "Un salto atrás en el tiempo. Ejemplo: «Mientras miraba la foto, recordó aquel verano de 2015 en que…»."],
    ["Clasifica: protagonista, antagonista o secundario: Harry Potter, Voldemort, Hagrid.", "Harry: protagonista. Voldemort: antagonista. Hagrid: secundario."],
    ["Describe tu calle usando al menos tres sentidos.", "Respuesta abierta. Debe incluir vista, oído y olfato u otros: «Huele a café de la panadería, se oyen motos…»."],
    ["¿Es plano o redondo un personaje que empieza cobarde y acaba siendo valiente?", "Redondo, porque evoluciona."],
    ["Señala dos rasgos lingüísticos de la descripción en: «El mar estaba en calma, azul y brillante como un espejo».", "Adjetivos (azul, brillante), comparación (como un espejo) y pretérito imperfecto (estaba)."],
  ],
  quiz: [
    ["Volver atrás en el tiempo del relato es…", ["una analepsis", "una prolepsis", "un desenlace"], 0, "También se llama flashback."],
    ["La descripción del carácter se llama…", ["etopeya", "prosopografía", "topografía"], 0, "Ethos = carácter."],
    ["En los diálogos de una novela se usa…", ["la raya (—)", "el guion (-)", "el punto y coma"], 0, "La raya abre cada intervención."],
    ["Un personaje que no cambia en toda la historia es…", ["plano", "redondo", "antagonista"], 0, "No evoluciona."],
    ["Empezar en mitad de la acción se llama…", ["in medias res", "in extremis", "ab initio"], 0, "Expresión latina: en medio del asunto."],
  ],
  tarjetas: [
    ["Analepsis", "Salto atrás en el tiempo del relato (flashback)."],
    ["Prosopografía", "Descripción del aspecto físico de una persona."],
    ["Estilo directo", "Reproduce las palabras exactas de un personaje con raya o comillas."],
  ],
});
