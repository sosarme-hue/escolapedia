// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "La comunicación y sus elementos",
  minutos: 45,
  objetivos: ["Identificar los seis elementos de la comunicación en cualquier situación", "Distinguir signos verbales y no verbales", "Reconocer las funciones del lenguaje según la intención del emisor"],
  claves: ["emisor", "receptor", "mensaje", "canal", "código", "contexto", "signo", "funciones del lenguaje"],
  pregunta: {
    texto: "Un semáforo en rojo, un emoji de pulgar arriba y la frase «¡Para!». ¿Qué tienen en común?",
    respuesta: "Los tres son <b>signos</b> que transmiten información de alguien a alguien. Solo el último usa palabras, pero todos son <mark>comunicación</mark>: hay un emisor, un receptor, un mensaje, un canal y un código que ambos conocen.",
  },
  bloques: [
    {
      html: `<h3>Qué es comunicarse</h3><p>Comunicarse es <mark>transmitir información</mark> de un emisor a un receptor. No basta con hablar: si el receptor no recibe o no entiende el mensaje, la comunicación no se ha completado. Los seres humanos nos comunicamos con palabras, pero también con gestos, imágenes, sonidos y colores.</p>`,
      svg: L.filas("La comunicación va del emisor al receptor a través de un mensaje", [
        ["Emisor", "quien envía el mensaje", "var(--pen)"],
        ["Mensaje", "la información que se transmite", "var(--leaf)"],
        ["Receptor", "quien lo recibe e interpreta", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Los seis elementos</h3><p>En todo acto de comunicación hay: <b>emisor</b> (quien produce el mensaje), <b>receptor</b> (quien lo recibe), <b>mensaje</b> (lo que se dice), <b>canal</b> (el medio físico: el aire, el papel, una pantalla), <b>código</b> (el sistema de signos que comparten, como el español) y <b>contexto</b> o situación (las circunstancias que rodean al mensaje).</p>`,
      svg: L.tabla("Los seis elementos en un mensaje de WhatsApp", ["Elemento", "Ejemplo"], [
        ["Emisor", "Lucía"], ["Receptor", "su madre"], ["Mensaje", "«Llego tarde»"], ["Canal", "el móvil"], ["Código", "español escrito"],
      ]),
    },
    {
      html: `<h3>El signo y sus clases</h3><p>Un <b>signo</b> es algo que percibimos y que representa otra cosa. Los signos pueden ser <mark>verbales</mark> (las palabras, orales o escritas) o <mark>no verbales</mark>: visuales (señales de tráfico, emojis), acústicos (una sirena, un timbre), gestuales (asentir con la cabeza) o táctiles (el braille).</p>`,
      svg: L.filas("Clases de signos según el sentido con que se perciben", [
        ["Verbales", "palabras habladas o escritas", "var(--pen)"],
        ["Visuales", "señal, emoji, semáforo", "var(--leaf)"],
        ["Acústicos", "sirena, timbre, silbato", "var(--inf)"],
        ["Gestuales", "asentir, saludar con la mano", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Las funciones del lenguaje</h3><p>Según la <b>intención</b> del emisor, el lenguaje cumple distintas funciones. Si informa, es <b>representativa</b>; si expresa sentimientos, <b>expresiva</b>; si quiere que el receptor haga algo, <b>apelativa</b>; si cuida la forma bella, <b>poética</b>; si comprueba que el canal funciona («¿Me oyes?»), <b>fática</b>; y si habla de la propia lengua, <b>metalingüística</b>.</p>`,
      svg: L.filas("Las seis funciones del lenguaje y el elemento en que se centran", [
        ["Representativa", "informa", "var(--pen)"],
        ["Expresiva", "siente", "var(--red)"],
        ["Apelativa", "ordena o pide", "var(--leaf)"],
        ["Poética", "embellece", "var(--inf)"],
        ["Fática", "comprueba el canal", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>El ruido y los malentendidos</h3><p>Llamamos <b>ruido</b> a todo lo que <mark>dificulta la comunicación</mark>: un sonido fuerte, una mala cobertura, una letra ilegible o una palabra que el receptor no conoce. Para evitarlo, el emisor puede repetir, cambiar de canal o explicar con otras palabras. La <b>retroalimentación</b> (la respuesta del receptor) indica si el mensaje ha llegado bien.</p>`,
      svg: L.frase("Una llamada con mala cobertura: el ruido corta el mensaje", [
        ["¿Me…", "emisor", "var(--pen)"], ["*ruido*", "interferencia", "var(--red)"], ["…oyes?", "mensaje", "var(--pen)"], ["¿Qué?", "retroalimentación", "var(--leaf)"],
      ], "el ruido impide que el mensaje llegue entero"),
    },
  ],
  figura: {
    titulo: "Los elementos de la comunicación",
    svg: L.pasos("Esquema: emisor, mensaje por un canal con un código, receptor, dentro de un contexto", [
      ["Emisor", ["codifica", "el mensaje"], "var(--pen)"],
      ["Mensaje", ["por un canal", "con un código"], "var(--leaf)"],
      ["Receptor", ["descodifica", "e interpreta"], "var(--red)"],
      ["Contexto", ["situación que", "da sentido"], "var(--inf)"],
    ]),
  },
  video: { id: "KujFJsEOPTs", titulo: "¿Qué es la comunicación? Proceso y elementos de la comunicación", canal: "Profe Marilin", vistas: 1774369, megusta: 0, busqueda: "elementos de la comunicación" },
  quiz: [
    { q: "En una clase, el profesor que explica es…", o: ["el emisor", "el receptor", "el canal"], a: 0, e: "Es quien produce el mensaje." },
    { q: "El aire por el que viaja la voz es…", o: ["el código", "el canal", "el contexto"], a: 1, e: "El canal es el medio físico." },
    { q: "Una señal de «Stop» es un signo…", o: ["verbal oral", "no verbal visual", "acústico"], a: 1, e: "Se percibe por la vista (aunque lleve una palabra, funciona como imagen)." },
    { q: "«¡Cierra la puerta!» cumple la función…", o: ["expresiva", "apelativa", "fática"], a: 1, e: "Busca que el receptor actúe." },
    { q: "«¿Me oyes bien?» por teléfono cumple la función…", o: ["fática", "poética", "metalingüística"], a: 0, e: "Comprueba que el canal funciona." },
  ],
  examen: [
    { q: "El sistema de signos que comparten emisor y receptor es…", o: ["el mensaje", "el código", "el canal"], a: 1, e: "Por ejemplo, la lengua española." },
    { q: "«¡Qué miedo he pasado!» tiene función…", o: ["expresiva", "representativa", "apelativa"], a: 0, e: "Expresa sentimientos del emisor." },
    { q: "«“Casa” es un sustantivo» tiene función…", o: ["poética", "metalingüística", "fática"], a: 1, e: "Usa la lengua para hablar de la lengua." },
  ],
  feynman: ["Los seis elementos de la comunicación con un ejemplo propio", "La diferencia entre signos verbales y no verbales", "Las funciones del lenguaje y cómo reconocerlas", "Qué es el ruido y cómo se evita"],
  mapa: mapa("COMUNICACIÓN", "var(--eso)", [
    ["Elementos", "emisor · receptor · mensaje…", "var(--pen)"],
    ["Signos", "verbales · no verbales", "var(--leaf)"],
    ["Funciones", "según la intención", "var(--red)"],
    ["Ruido", "lo que la dificulta", "var(--inf)"],
  ]),
  tarjetas: [
    ["Emisor", "Quien produce y envía el mensaje."],
    ["Canal", "El medio físico por el que viaja el mensaje: aire, papel, pantalla…"],
    ["Código", "El sistema de signos que emisor y receptor comparten."],
    ["Función apelativa", "La que busca que el receptor haga algo: órdenes, ruegos, preguntas."],
    ["Ruido", "Cualquier cosa que dificulta que el mensaje llegue bien."],
  ],
  familias: ["Cuando veáis un anuncio, preguntadle quién es el emisor, a quién se dirige y qué quiere conseguir.", "Jugad a comunicar una frase solo con gestos y comentad qué se pierde.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: elementos de la comunicación, intención comunicativa y funciones del lenguaje; signos verbales y no verbales (RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Analizar en grupos los elementos de mensajes reales: un cartel, un audio, un correo.", "Teléfono escacharrado para hablar del ruido.", "Clasificar enunciados de una conversación grabada según su función."],
  },
  fuentes: [
    L.BOE,
    { t: "Comunicación, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n" },
    { t: "Funciones del lenguaje (Jakobson), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Funciones_del_lenguaje" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Explicar la codificación y la descodificación del mensaje", "Distinguir comunicación oral y escrita, y la importancia del contexto"],
  bloques: [
    { tras: "Qué es comunicarse", html: `<h3>Codificar y descodificar</h3><p>Cuando el emisor tiene una idea, la convierte en signos: eso es <b>codificar</b>. El receptor hace el proceso contrario y transforma los signos en una idea: eso es <b>descodificar</b>. Si emisor y receptor no comparten el mismo código (por ejemplo, uno habla japonés y el otro no), el mensaje llega, pero no se entiende.</p><p>Por eso la comunicación es un <mark>proceso de ida y vuelta</mark>: el receptor responde, se convierte en emisor y los papeles se intercambian continuamente, como en una conversación.</p>` },
    { tras: "Los seis elementos", html: `<h3>La importancia del contexto</h3><p>Una misma frase puede significar cosas muy distintas según la situación. «¡Qué bonito!» puede ser un elogio sincero o una ironía, según el tono y el momento. El contexto incluye el <b>lugar</b> y el <b>momento</b>, la <b>relación</b> entre los hablantes y lo que ambos <b>saben</b> previamente.</p><p>El contexto también decide el <mark>registro</mark>: no hablamos igual a un amigo que a la directora del instituto. Usar un registro coloquial («¿Qué pasa, tío?») en una situación formal es un fallo de adecuación, aunque la frase sea correcta.</p>${L.tb(["Situación", "Registro", "Ejemplo"], [["Con amigos", "coloquial", "¿Quedamos luego?"], ["Correo a un profesor", "formal", "¿Podría revisar mi trabajo?"], ["Examen", "formal y preciso", "El emisor codifica el mensaje."]])}` },
    { tras: "El signo y sus clases", html: `<h3>Comunicación oral y escrita</h3><p>La <b>comunicación oral</b> es inmediata, usa el canal auditivo, se apoya en la entonación y en los gestos y permite corregir sobre la marcha. Suele ser más espontánea y repetitiva. La <b>comunicación escrita</b> es duradera, usa el canal visual, se puede planificar y revisar, y necesita más precisión porque el lector no puede preguntar.</p><p>Hoy muchos mensajes mezclan ambas: un chat es escrito, pero se parece a una conversación oral (frases cortas, emojis que sustituyen a los gestos, respuestas rápidas).</p>` },
    { tras: "Las funciones del lenguaje", html: `<h3>Reconocer las funciones en un texto</h3><p>Un texto suele combinar varias funciones, aunque una predomina. Pistas para reconocerlas:</p><ul><li><b>Representativa</b>: datos objetivos, tercera persona, modo indicativo. «El agua hierve a 100 °C».</li><li><b>Expresiva</b>: primera persona, exclamaciones, interjecciones. «¡Ay, qué daño!».</li><li><b>Apelativa</b>: segunda persona, imperativos, vocativos, preguntas. «Lucía, ven».</li><li><b>Poética</b>: rima, metáforas, juegos de palabras. Típica de la literatura y la publicidad.</li><li><b>Fática</b>: fórmulas para abrir, mantener o cerrar el contacto. «¿Diga?», «Vale, vale».</li><li><b>Metalingüística</b>: definiciones y explicaciones sobre palabras. «“Pez” se escribe con zeta».</li></ul>` },
    { tras: "El ruido y los malentendidos", html: `<h3>La comunicación no verbal acompaña a las palabras</h3><p>Cuando hablamos, el cuerpo también comunica. La <b>kinésica</b> estudia los gestos, la postura y la mirada; la <b>proxémica</b>, la distancia que guardamos con los demás; y la <b>paralingüística</b>, el tono, el volumen y las pausas de la voz.</p><p>Si las palabras dicen una cosa y el cuerpo otra («Estoy bien», con los brazos cruzados y la mirada baja), el receptor suele creer al cuerpo. Por eso, en una exposición oral, cuidar la postura y mirar al público es tan importante como lo que se dice.</p>` },
    { html: `<h3>Comunicar en la era digital</h3><p>Las redes sociales, los chats y el correo electrónico han cambiado la forma de comunicarnos. Un solo emisor puede llegar a miles de receptores en segundos, y los mensajes quedan <b>guardados</b>, aunque creamos que se borran. Por eso conviene pensar antes de publicar: ¿quién puede leerlo?, ¿se entenderá sin mi tono de voz?, ¿podría ofender a alguien?</p><p>Los emojis, los GIF y los audios intentan suplir los gestos y la entonación que se pierden al escribir. Aun así, los malentendidos son frecuentes: una respuesta seca («Vale.») puede parecer un enfado. En los mensajes formales (a un profesor, a una empresa) conviene saludar, escribir frases completas y despedirse.</p>` },
  ],
  videos: [
    ["Las funciones del lenguaje", L.vid("_7sIvY80YPM", "Las funciones del lenguaje de Jakobson", "Blog de Lengua", 646152)],
    ["La comunicación no verbal acompaña", L.vid("Bw4ZLVTarSA", "La comunicación. Elementos. Comunicación verbal y no verbal", "Aula chachi", 206947)],
  ],
  ejemplos: [
    ["Identifica los elementos: «En el andén, una voz anuncia por megafonía: “El tren con destino a Girona sale por la vía 3”».", ["Emisor: la empresa de trenes (a través de la persona o la grabación).", "Receptor: los viajeros del andén.", "Mensaje: el tren a Girona sale por la vía 3.", "Canal: el aire (ondas sonoras a través de los altavoces).", "Código: lengua española oral. Contexto: una estación, antes de la salida del tren."], "todos los elementos están presentes; la función principal es representativa."],
    ["¿Qué función predomina en «¡No te pierdas las rebajas! Corre a tu tienda»?", ["Va dirigido a un «tú»: segunda persona.", "Usa imperativos: «no te pierdas», «corre».", "Busca que el receptor haga algo: comprar."], "función apelativa (típica de la publicidad)."],
    ["Un turista pregunta en alemán una dirección a un vecino que no sabe alemán. ¿Qué falla?", ["Hay emisor, receptor, mensaje y canal.", "El vecino recibe los sonidos, pero no puede descodificarlos.", "El problema está en el código, que no es compartido."], "falla el código: la comunicación no se completa."],
  ],
  errores: [
    "Confundir canal y código: el canal es el medio físico (aire, papel), el código es el sistema de signos (el español).",
    "Pensar que solo hay comunicación cuando se usan palabras.",
    "Creer que un texto tiene una sola función: suele haber una predominante y otras secundarias.",
    "Olvidar el contexto: la misma frase cambia de sentido según la situación.",
    "Confundir la función fática (mantener el contacto) con la apelativa (pedir algo).",
  ],
  ejercicios: [
    ["Señala los seis elementos en: «La profesora escribe en la pizarra: “Examen el lunes”».", "Emisor: la profesora. Receptor: los alumnos. Mensaje: hay examen el lunes. Canal: la pizarra (visual). Código: español escrito. Contexto: el aula, en horario de clase."],
    ["Clasifica estos signos: un silbato del árbitro, un emoji 😂, la palabra «hola», un apretón de manos.", "Silbato: acústico. Emoji: visual. «Hola»: verbal. Apretón de manos: gestual o táctil."],
    ["¿Qué función predomina en «Madrid es la capital de España»?", "Representativa: transmite un dato objetivo."],
    ["¿Qué función predomina en «¡Qué ilusión me hace verte!»?", "Expresiva: manifiesta los sentimientos del emisor."],
    ["¿Qué función predomina en «“Cantar” es un verbo de la primera conjugación»?", "Metalingüística: habla de la propia lengua."],
    ["Escribe un ejemplo de función fática.", "Por ejemplo: «¿Hola? ¿Se me oye?» al empezar una videollamada."],
    ["Pon dos ejemplos de ruido en una conversación por videollamada.", "Por ejemplo: la conexión se corta y la imagen se congela; hay un perro ladrando cerca del micrófono."],
    ["Explica por qué «Estoy bien», dicho llorando, puede no creerse.", "Porque el mensaje no verbal (llanto, gesto) contradice al verbal, y el receptor suele confiar más en el no verbal."],
    ["Reescribe en registro formal: «Profe, ¿me pasas el examen que no fui?».", "«Disculpe, ¿podría darme el examen del día que falté?»."],
    ["¿Qué diferencias hay entre un mensaje de voz y una carta?", "El de voz es oral, inmediato, con entonación y más espontáneo. La carta es escrita, duradera, planificada y más precisa."],
  ],
  quiz: [
    ["Convertir una idea en signos se llama…", ["codificar", "descodificar", "retroalimentar"], 0, "Lo hace el emisor."],
    ["La distancia entre los hablantes la estudia la…", ["proxémica", "kinésica", "fonética"], 0, "Proxémica: espacio y distancia."],
    ["«Señores pasajeros, abróchense el cinturón» es sobre todo…", ["apelativa", "expresiva", "poética"], 0, "Pide una acción."],
    ["Un eslogan con rima («Calidad y sabor, lo mejor») tiene función…", ["poética", "fática", "metalingüística"], 0, "Cuida la forma del mensaje."],
    ["Si el receptor no conoce el código…", ["no puede descodificar", "no oye el mensaje", "cambia el canal"], 0, "Recibe los signos, pero no los entiende."],
  ],
  tarjetas: [
    ["Codificar", "Convertir una idea en signos de un código."],
    ["Contexto", "La situación (lugar, momento, relación) que da sentido al mensaje."],
    ["Kinésica", "Lo que comunican los gestos, la postura y la mirada."],
  ],
});
