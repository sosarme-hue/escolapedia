// Oratoria y debate 3º ESO (optativa). Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Oratoria y debate",
  curso: "3-eso",
  titulo: "Preparar un discurso",
  minutos: 50,
  objetivos: ["Seguir las fases de preparación de un discurso: buscar, ordenar, redactar y ensayar", "Organizar un discurso en introducción, desarrollo y conclusión", "Preparar un guion de apoyo y ensayar con tiempo"],
  claves: ["inventio", "dispositio", "elocutio", "actio", "tema", "lluvia de ideas", "introducción", "desarrollo", "conclusión", "guion", "ensayo"],
  pregunta: {
    texto: "Mañana tienes que hablar cinco minutos sobre el uso del móvil en el instituto. ¿Qué haces primero: escribir el discurso entero, buscar información o pensar en tu idea principal?",
    respuesta: "Lo primero es <mark>decidir tu idea principal</mark> (tu mensaje en una frase) y después buscar información que la apoye. Escribir todo seguido sin un plan suele dar discursos desordenados. Los oradores clásicos ya seguían <b>cuatro fases</b>: buscar las ideas, ordenarlas, darles forma y ensayar.",
  },
  bloques: [
    {
      html: `<h3>Las fases de la preparación</h3><p>La retórica clásica dividía la preparación de un discurso en fases que siguen siendo útiles. En la <b>inventio</b> se buscan las ideas y los argumentos. En la <b>dispositio</b> se ordenan. En la <b>elocutio</b> se redactan con el estilo adecuado. Por último, en la <b>actio</b> se ensaya y se pronuncia el discurso ante el público, cuidando la voz y el gesto.</p>`,
      svg: L.linea("Las fases de preparación de un discurso", [
        ["1", "Inventio: buscar ideas", "var(--pen)"],
        ["2", "Dispositio: ordenarlas", "var(--leaf)"],
        ["3", "Elocutio: redactar", "var(--red)"],
        ["4", "Actio: ensayar y hablar", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Elegir el tema y el mensaje</h3><p>Si puedes elegir, escoge un tema que <b>te interese</b> y que puedas tratar en el tiempo disponible: mejor «Cómo afecta el móvil al sueño de los adolescentes» que «La tecnología». Después, escribe tu <mark>mensaje central</mark> en una sola frase: lo que quieres que el público recuerde aunque olvide todo lo demás. Todo lo que digas debe servir a ese mensaje.</p>`,
      svg: L.filas("Del tema general al mensaje central", [
        ["Tema amplio", "la tecnología", "var(--muted)"],
        ["Tema concreto", "el móvil y el sueño", "var(--pen)"],
        ["Mensaje", "apaga el móvil una hora antes", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Buscar ideas e información</h3><p>Empieza con una <b>lluvia de ideas</b>: apunta todo lo que se te ocurra sobre el tema sin juzgarlo. Después, busca información en <b>fuentes fiables</b>: libros, enciclopedias, webs de organismos oficiales, universidades o medios de comunicación reconocidos. Apunta siempre de dónde sacas cada dato. Busca también <mark>ejemplos, anécdotas y datos sorprendentes</mark>, que son lo que más recuerda el público.</p>`,
      svg: L.filas("Fuentes fiables e información útil", [
        ["Fuentes", "organismos oficiales, libros, medios", "var(--pen)"],
        ["Datos", "cifras con su fuente", "var(--leaf)"],
        ["Ejemplos", "anécdotas y casos", "var(--red)"],
      ]),
    },
    {
      html: `<h3>La estructura: introducción, desarrollo y conclusión</h3><p>Un discurso se organiza en tres partes. La <b>introducción</b> capta la atención, presenta el tema y anuncia lo que vas a decir. El <b>desarrollo</b> expone las ideas en orden, normalmente <mark>tres ideas</mark> con sus ejemplos. La <b>conclusión</b> resume lo dicho, recuerda el mensaje central y termina con un cierre memorable. Un consejo clásico: «Di lo que vas a decir, dilo y di lo que has dicho».</p>`,
      svg: L.tabla("Estructura de un discurso de cinco minutos", ["Parte", "Tiempo", "Función"], [
        ["Introducción", "1 min", "atraer"], ["Desarrollo", "3 min", "explicar"], ["Conclusión", "1 min", "recordar"],
      ]),
    },
    {
      html: `<h3>Ensayar</h3><p>Un discurso no está terminado hasta que se ha <b>ensayado en voz alta</b> varias veces. Ensaya de pie, con el tiempo cronometrado, y si puedes, ante alguien que te dé su opinión o grabándote. No lo memorices palabra por palabra: memoriza la <mark>estructura</mark> y las frases clave (el principio y el final) y deja que el resto suene natural. Si te pasas de tiempo, recorta.</p>`,
      svg: L.filas("Cómo ensayar un discurso", [
        ["En voz alta", "de pie y con gestos", "var(--pen)"],
        ["Cronometrado", "ajustar al tiempo", "var(--leaf)"],
        ["Con público", "familia, amigos o grabación", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Del tema al discurso",
    svg: L.pasos("Pasos para preparar un discurso", [
      ["Mensaje", ["tema concreto y", "una frase clave"], "var(--pen)"],
      ["Ideas", ["lluvia de ideas", "y fuentes fiables"], "var(--leaf)"],
      ["Estructura", ["introducción, desarrollo", "y conclusión"], "var(--red)"],
      ["Ensayo", ["en voz alta y", "cronometrado"], "var(--inf)"],
    ]),
  },
  video: { id: "AcL_kvK11b8", titulo: "Cómo preparar un discurso en 5 pasos", canal: "Isabel Perozo", vistas: 1040435, megusta: 0, busqueda: "cómo preparar un discurso" },
  quiz: [
    { q: "La fase en la que se buscan las ideas se llama…", o: ["inventio", "actio", "elocutio"], a: 0, e: "Del latín «encontrar»." },
    { q: "El mensaje central de un discurso debe poder decirse en…", o: ["una frase", "diez páginas", "un título de una palabra"], a: 0, e: "Lo que el público debe recordar." },
    { q: "¿Qué parte del discurso capta la atención?", o: ["La introducción", "El desarrollo", "La conclusión"], a: 0, e: "Los primeros segundos son clave." },
    { q: "Al ensayar conviene…", o: ["hablar en voz alta y cronometrarse", "leerlo en silencio", "no ensayar para ser natural"], a: 0, e: "Ensayar es imprescindible." },
    { q: "Una fuente fiable es…", o: ["la web de un organismo oficial", "un comentario anónimo", "un meme"], a: 0, e: "Se puede comprobar quién la publica." },
  ],
  examen: [
    { q: "En la dispositio se…", o: ["ordenan las ideas", "pronuncia el discurso", "eligen las palabras"], a: 0, e: "Es la fase de organización." },
    { q: "En un discurso de cinco minutos, el desarrollo ocupa aproximadamente…", o: ["tres minutos", "medio minuto", "cinco minutos"], a: 0, e: "Introducción y conclusión, un minuto cada una." },
    { q: "Conviene memorizar palabra por palabra…", o: ["solo el principio y el final", "todo el discurso", "nada"], a: 0, e: "El resto, la estructura." },
  ],
  feynman: ["Las cuatro fases de la retórica clásica", "Cómo pasar de un tema amplio a un mensaje central", "Qué debe hacer cada parte del discurso", "Cómo ensayar bien"],
  mapa: mapa("PREPARAR", "var(--eso)", [
    ["Mensaje", "una frase clave", "var(--pen)"],
    ["Ideas", "lluvia · fuentes fiables", "var(--leaf)"],
    ["Estructura", "intro · desarrollo · final", "var(--red)"],
    ["Ensayo", "en voz alta, cronometrado", "var(--inf)"],
  ]),
  tarjetas: [
    ["Inventio", "Fase de búsqueda de ideas y argumentos."],
    ["Dispositio", "Fase en la que se ordenan las ideas: introducción, desarrollo y conclusión."],
    ["Mensaje central", "La idea que el público debe recordar, resumida en una frase."],
    ["Regla de tres", "Organizar el desarrollo en tres ideas principales."],
    ["Ensayo", "Practicar en voz alta, de pie y cronometrado, preferiblemente ante alguien."],
  ],
  familias: ["Haced de público en un ensayo y cronometrad el discurso.", "Pedidle que os diga su mensaje central en una frase antes de empezar a escribir.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación oral: planificación de textos orales formales; búsqueda y selección de información; estructura del discurso (materia optativa de Oratoria y debate; relación con el RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Taller de mensajes centrales: reducir artículos a una frase.", "Preparar en grupos un discurso de 3 minutos siguiendo las cuatro fases.", "Coevaluación del ensayo con una rúbrica sencilla."],
  },
  fuentes: [
    L.BOE,
    { t: "Retórica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ret%C3%B3rica" },
    { t: "Biblioteca Nacional de España: cómo evaluar la información", url: "https://www.bne.es/" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Escribir introducciones y cierres que impacten", "Redactar para el oído y preparar un guion de apoyo"],
  bloques: [
    { tras: "La estructura: introducción", html: `<h3>Cómo empezar: el gancho</h3><p>Los primeros treinta segundos deciden si el público te escuchará. Evita empezar con «Bueno, eeeh, yo voy a hablar de…». Mejor usa un <b>gancho</b>:</p><ul><li>Una <b>pregunta</b>: «¿Cuántas horas dormisteis anoche?».</li><li>Un <b>dato sorprendente</b>: «Esta mañana he contado las veces que miraba el móvil antes de llegar al instituto: veintitrés». (Si das un dato general, di de qué fuente sale).</li><li>Una <b>anécdota</b> breve: «El lunes pasado, mi hermano se durmió en el examen…».</li><li>Una <b>cita</b> de alguien conocido.</li><li>Una <b>imagen</b> o un objeto que enseñas.</li></ul><p>Después del gancho, presenta el tema y anuncia brevemente las partes: «Hoy os hablaré de tres cosas: el problema, sus causas y una solución».</p>` },
    { tras: "La estructura: introducción", html: `<h3>Cómo terminar: el cierre</h3><p>El final es lo que más recuerda el público, así que no lo improvises. Nunca termines con «Y ya está» o «Bueno, pues eso». Un buen cierre tiene dos pasos: primero, un <b>resumen</b> breve de las ideas («Hemos visto que…»); segundo, un <mark>cierre memorable</mark>:</p><ul><li>Una <b>llamada a la acción</b>: «Esta noche, dejad el móvil fuera de la habitación».</li><li>Volver al <b>gancho</b> del principio: «¿Recordáis a mi hermano dormido en el examen?».</li><li>Una <b>frase breve y potente</b> que resuma el mensaje.</li></ul><p>Después, una pausa, una sonrisa y «Gracias». Espera al aplauso antes de moverte.</p>` },
    { tras: "La estructura: introducción", html: `<h3>Las transiciones</h3><p>Al leer, el lector ve los párrafos y los títulos; al escuchar, el público <mark>no ve la estructura</mark>. Por eso el orador debe señalarla con <b>transiciones</b>: frases que indican que se acaba una parte y empieza otra.</p>${L.tb(["Para…", "Ejemplos"], [["Anunciar", "Os voy a contar tres razones."], ["Ordenar", "La primera razón es… La segunda… Por último…"], ["Pasar de parte", "Ya hemos visto el problema; veamos ahora la solución."], ["Destacar", "Y esto es lo más importante:"], ["Concluir", "En resumen… Para terminar…"]])}<p>Las transiciones ayudan al público a seguirte y a ti a no perderte.</p>` },
    { tras: "Ensayar", html: `<h3>Escribir para el oído</h3><p>Un discurso no se lee como un texto escrito: se escucha una sola vez. Por eso hay que <b>redactar para el oído</b>: frases <mark>cortas</mark> (una idea por frase), palabras sencillas, ejemplos concretos y alguna <b>repetición</b> intencionada de la idea principal. Se puede hablar directamente al público («vosotros», «imaginad») e incluir preguntas.</p><p>Compara: «La utilización excesiva de dispositivos electrónicos en horario nocturno incide negativamente en la calidad del descanso» frente a «Si usáis el móvil por la noche, dormís peor. Así de sencillo». La segunda se entiende y se recuerda mucho mejor que la primera.</p>` },
    { tras: "Ensayar", html: `<h3>El guion de apoyo</h3><p>Leer el discurso entero te separa del público. Lo mejor es usar un <b>guion</b> con palabras clave: unas <mark>fichas</mark> pequeñas de cartulina, numeradas, con una idea por ficha, escritas con letra grande y solo con lo esencial (palabras clave, datos y la primera frase de cada parte). Así, un vistazo te basta para recordar por dónde vas.</p><p>Escribe completas solo la primera y la última frase, que conviene saber de memoria. Marca también las pausas (/) y lo que quieras destacar (subrayado). Y prepara un <b>plan B</b>: ¿qué harás si falla el proyector o si te quedas en blanco? (Respira, mira tu ficha y continúa con la siguiente idea).</p>` },
  ],
  videos: [
    ["La estructura: introducción", L.vid("zFIcZ75C91Q", "Curso de oratoria 5: las tres partes del discurso", "Nelson Cubides Salazar", 667714)],
    ["Cómo empezar: el gancho", L.vid("MTRsInkqv5E", "Cómo iniciar una exposición o presentación: impacta desde el comienzo", "ExpresArte Mejor · Oratoria y Locución", 981918)],
  ],
  ejemplos: [
    ["Concreta el tema «El deporte» para un discurso de tres minutos.", ["Es demasiado amplio para tres minutos.", "Elegir un aspecto: el deporte y la salud mental de los adolescentes.", "Escribir el mensaje: «Hacer deporte tres veces por semana nos ayuda a estar más tranquilos y felices»."], "tema concreto con mensaje central en una frase."],
    ["Escribe un gancho para un discurso sobre el desperdicio de comida.", ["Elegir un tipo de gancho: dato sorprendente.", "Buscar el dato en una fuente fiable (por ejemplo, la FAO o el Ministerio de Agricultura).", "Formularlo de forma directa y cercana."], "«Imaginad que compráis tres bolsas de comida y, al salir del súper, tiráis una a la basura. Eso es lo que hacemos en muchas casas»."],
    ["Convierte para el oído: «Es imprescindible la adopción de medidas tendentes a la reducción del consumo energético en el centro».", ["Dividir en frases cortas.", "Usar palabras sencillas y hablar al público.", "Añadir un ejemplo concreto."], "«Tenemos que gastar menos energía en el instituto. Por ejemplo, apagar las luces al salir del aula»."],
  ],
  errores: [
    "Empezar a escribir sin tener claro el mensaje central.",
    "Elegir un tema demasiado amplio para el tiempo disponible.",
    "Empezar con «Bueno, yo voy a hablar de…» y terminar con «Y ya está».",
    "Leer el discurso entero en lugar de usar un guion con palabras clave.",
    "No ensayar en voz alta ni cronometrar el tiempo.",
  ],
  ejercicios: [
    ["Ordena las fases: elocutio, actio, inventio, dispositio.", "Inventio, dispositio, elocutio, actio."],
    ["Concreta el tema «Los animales» para un discurso de cinco minutos.", "Respuesta abierta. Por ejemplo: «Por qué adoptar en lugar de comprar una mascota»."],
    ["Escribe el mensaje central de un discurso sobre la lectura.", "Respuesta abierta. Por ejemplo: «Leer veinte minutos al día te hace pensar y escribir mejor»."],
    ["Escribe tres ganchos distintos (pregunta, dato y anécdota) para un discurso sobre el ciberacoso.", "Respuesta abierta. Ejemplo de pregunta: «¿Alguna vez habéis visto un comentario cruel en un grupo y no habéis dicho nada?»."],
    ["Escribe una transición para pasar del problema a la solución.", "Por ejemplo: «Ya sabemos cuál es el problema. Ahora, la buena noticia: tiene solución»."],
    ["Escribe un cierre con llamada a la acción para un discurso sobre reciclaje.", "Por ejemplo: «Mañana, antes de tirar algo, preguntaos: ¿en qué contenedor va? El planeta os lo agradecerá. Gracias»."],
    ["¿Qué escribirías en las fichas de un discurso?", "Palabras clave, datos, la primera frase de cada parte, las pausas marcadas y la frase inicial y final completas."],
    ["Nombra tres fuentes fiables para un discurso sobre el cambio climático.", "Por ejemplo: la Agencia Estatal de Meteorología, la ONU (IPCC) y un libro de texto o un artículo de un medio reconocido."],
    ["Reparte el tiempo de un discurso de tres minutos.", "Unos 30 segundos de introducción, 2 minutos de desarrollo y 30 segundos de conclusión."],
    ["¿Qué harías si te quedas en blanco?", "Respirar, hacer una pausa, mirar la ficha y continuar con la siguiente idea, sin pedir perdón."],
  ],
  quiz: [
    ["Un gancho sirve para…", ["captar la atención al principio", "terminar el discurso", "ordenar las fuentes"], 0, "Los primeros segundos."],
    ["«Ya hemos visto el problema; veamos la solución» es una…", ["transición", "conclusión", "fuente"], 0, "Señala el paso de una parte a otra."],
    ["Para el oído, las frases deben ser…", ["cortas y sencillas", "largas y complejas", "en latín"], 0, "Una idea por frase."],
    ["En las fichas del guion conviene escribir…", ["palabras clave", "todo el discurso", "nada"], 0, "Un vistazo basta."],
    ["Un buen cierre incluye…", ["resumen y frase memorable", "«y ya está»", "una disculpa"], 0, "Lo que más se recuerda."],
  ],
  tarjetas: [
    ["Gancho", "Recurso para captar la atención al principio: pregunta, dato, anécdota, cita o imagen."],
    ["Transición", "Frase que indica el paso de una parte del discurso a otra."],
    ["Llamada a la acción", "Cierre que pide al público que haga algo concreto."],
  ],
});
