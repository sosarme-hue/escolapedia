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

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Tres minutos para el concurso", `<p>El ayuntamiento ha convocado un concurso: el alumno o alumna que mejor explique en tres minutos «Qué cambiaría de mi barrio» presentará su propuesta en el pleno municipal. Nerea se apunta. Su primer borrador es una lista de doce cosas: más parques, menos coches, una biblioteca, contenedores, carril bici, fiestas… Lo lee en voz alta cronometrándose: siete minutos, y al terminar ni ella misma recuerda la mitad.</p><p>Entonces decide trabajar como los oradores clásicos. Primero elige <b>una sola idea</b>: convertir el solar abandonado de su calle en un huerto y zona de juegos. Busca datos en la web del ayuntamiento, pregunta a veinte vecinos y saca fotos del solar. Ordena su discurso en tres partes, empieza con una foto llamativa y termina con una frase que la gente pueda repetir. Ensaya cinco veces, recorta, cambia frases largas por cortas y prepara tres fichas con palabras clave. El día del concurso habla dos minutos y cincuenta segundos y gana. En este tema aprenderás ese mismo método paso a paso: elegir el tema y el mensaje, buscar información, ordenarla, escribir para el oído, empezar y terminar con fuerza y ensayar.</p>`],
  mas: [
    ["<h3>Elegir el tema y el mensaje</h3>", `<p>Una técnica útil para encontrar el mensaje es la del <b>ascensor</b>: imagina que coincides en el ascensor con la persona a la que quieres convencer y solo tienes treinta segundos. ¿Qué le dirías? Esa frase es tu mensaje central, y todo el discurso debe servir para apoyarla. Si no eres capaz de formularla, todavía no tienes claro qué quieres decir.</p>`],
    ["<h3>Ensayar</h3>", `<p>Es buena idea ensayar al menos una vez <b>ante alguien</b> (familia o amigos) y pedirle que te diga cuál es, para él, la idea principal. Si no coincide con tu mensaje central, algo falla en el orden o en la claridad. También ayuda <b>grabarse</b>: verás si hablas demasiado deprisa, si usas muletillas o si miras demasiado las fichas.</p>`],
    ["<h3>Cómo terminar: el cierre</h3>", `<p>Una técnica muy eficaz es el <b>cierre circular</b>: volver al final a la imagen, la pregunta o la historia del principio, pero ahora con un sentido nuevo. Si empezaste con la foto del solar abandonado, termina mostrando cómo podría ser el huerto. El público percibe que el discurso está completo y lo recuerda mejor.</p>`],
    ["<h3>Buscar ideas e información</h3>", `<p>Mientras investigas, anota siempre la <b>fuente</b> de cada dato (quién lo dice, dónde y cuándo), porque luego la necesitarás para citarla en el discurso. Una forma sencilla es usar una ficha por idea, con el dato, la fuente y un ejemplo. Y no olvides las fuentes cercanas: una entrevista a un vecino, a un profesor o a un experto local puede darte la anécdota que haga vivo tu discurso.</p>`],
    ["<h3>Cómo empezar: el gancho</h3>", `<p>El gancho debe estar <b>relacionado</b> con el tema: una broma o un vídeo espectacular sin conexión con tu mensaje capta la atención un segundo, pero luego desconcierta. Después del gancho, preséntate si el público no te conoce y anuncia de qué vas a hablar; así el público sabe hacia dónde va el discurso.</p>`],
    ["<h3>El guion de apoyo</h3>", `<p>Escribe las fichas con letra grande, en una sola cara y con colores o símbolos para las partes (por ejemplo, una estrella para los datos que no puedes olvidar). Numéralas por si se te caen.</p>`],
  ],
  svgs: [
    ["<h3>Cómo empezar: el gancho</h3>", "Tipos de gancho", [["Pregunta", "¿Sabíais que…?"], ["Dato", "una cifra sorprendente"], ["Historia", "una anécdota breve"]], "los primeros 30 segundos"],
    ["<h3>Cómo terminar: el cierre</h3>", "Un buen cierre", [["Resumen", "las ideas clave"], ["Frase final", "memorable"], ["Acción", "qué pides al público"]], "lo que más se recuerda"],
    ["<h3>Las transiciones</h3>", "Transiciones útiles", [["Anunciar", "Os hablaré de tres cosas"], ["Pasar", "Ya hemos visto…; ahora…"], ["Resumir", "En resumen…"]], "el público no ve el esquema"],
    ["<h3>Escribir para el oído</h3>", "Escribir para el oído", [["Frases", "cortas y sencillas"], ["Palabras", "concretas y conocidas"], ["Repetición", "las ideas clave"]], "se escucha una sola vez"],
    ["<h3>El guion de apoyo</h3>", "El guion de apoyo", [["Fichas", "numeradas"], ["Palabras clave", "no frases completas"], ["Inicio y final", "escritos enteros"]], "no leer el discurso"],
  ],
  bloques: [
    { tras: "<h3>Las fases de la preparación</h3>", html: `<h3>Tipos de discurso</h3><p>Antes de preparar un discurso conviene saber de qué <b>tipo</b> es, porque cada uno tiene sus reglas. El <mark>discurso informativo</mark> o expositivo explica un tema (una exposición sobre los volcanes, una charla sobre cómo funciona un móvil): lo esencial es la claridad, el orden y los ejemplos. El <mark>discurso persuasivo</mark> quiere convencer o mover a la acción (pedir un carril bici, animar a donar sangre): necesita una tesis clara, argumentos, pruebas y una llamada a la acción final.</p><p>Los <mark>discursos de ocasión</mark> se pronuncian en momentos especiales: una graduación, una despedida, una boda, un homenaje o la entrega de un premio. Suelen ser breves, personales y emotivos, con anécdotas y agradecimientos sinceros. También hay discursos de <b>presentación</b> (presentar a un invitado antes de que hable) y de <b>agradecimiento</b> (al recibir un premio). Un error frecuente es tratarlos todos igual: un discurso de graduación lleno de datos aburre, y una exposición científica llena de emociones resulta poco fiable.</p>`, svg: ["Tipos de discurso", [["Informativo", "explicar con claridad"], ["Persuasivo", "convencer y mover"], ["De ocasión", "celebrar, despedir, agradecer"]], "cada uno con sus reglas"], video: "discurso" },
    { tras: "<h3>Buscar ideas e información</h3>", html: `<h3>Organizar las ideas</h3><p>Después de la lluvia de ideas y la búsqueda de información tendrás mucho material, y casi siempre <b>sobrará</b>. El paso siguiente es seleccionar y ordenar. Un buen recurso es el <mark>mapa mental</mark>: escribe el mensaje central en el centro de una hoja y dibuja ramas con las ideas principales; de cada rama salen los datos, ejemplos y anécdotas que la apoyan. Así ves de un vistazo qué ideas están bien apoyadas y cuáles no.</p><p>Después, quédate con <b>tres ideas principales</b> como máximo para un discurso corto. El número tres funciona muy bien: es suficiente para dar sensación de algo completo y fácil de recordar. Descarta sin pena todo lo que no apoye directamente tu mensaje, aunque sea interesante: un buen discurso no es el que dice más cosas, sino el que hace que el público recuerde las importantes. Por último, convierte el mapa en un <b>esquema numerado</b> (1, 1.1, 1.2, 2…), que será la base de tu guion.</p>`, svg: ["Del caos al esquema", [["Lluvia de ideas", "todo vale"], ["Mapa mental", "ramas y apoyos"], ["Esquema", "tres ideas principales"]], "seleccionar y ordenar"] },
    { tras: "<h3>La estructura: introducción, desarrollo y conclusión</h3>", html: `<h3>Modelos para ordenar el desarrollo</h3><p>Hay varios modelos para ordenar el desarrollo, y elegir el adecuado facilita mucho el trabajo. El orden <mark>cronológico</mark> sigue el tiempo (antes, durante, después) y es útil para contar una historia o un proceso. El modelo <mark>problema, causas y solución</mark> es ideal para discursos persuasivos: presentas un problema, explicas por qué ocurre y propones cómo resolverlo. La <b>comparación</b> enfrenta dos opciones (ventajas e inconvenientes). Y el modelo de lo <b>general a lo particular</b> parte de una idea amplia y baja a ejemplos concretos.</p><p>Para persuadir y mover a la acción existe además una secuencia muy eficaz en cinco pasos: <b>1)</b> captar la atención; <b>2)</b> mostrar una necesidad o un problema que afecta al público; <b>3)</b> presentar la solución; <b>4)</b> ayudar a imaginar cómo sería el futuro con esa solución (y sin ella); y <b>5)</b> pedir una acción concreta. Es la estructura que siguen muchos anuncios y campañas, y la que usó Nerea en su discurso sobre el solar.</p>`, svg: ["Modelos de desarrollo", [["Cronológico", "antes, durante, después"], ["Problema-solución", "problema, causas, propuesta"], ["Comparación", "ventajas e inconvenientes"]], "ordenar el desarrollo"] },
    { tras: "<h3>Escribir para el oído</h3>", html: `<h3>Recursos para que se recuerde</h3><p>El público olvida rápido gran parte de lo que oye, así que el orador debe usar recursos que ayuden a la memoria. La <mark>regla de tres</mark> agrupa las ideas en tríos («rápido, barato y seguro»). La <b>repetición</b> de una frase clave a lo largo del discurso actúa como un estribillo. Las <b>anécdotas</b> y las historias se recuerdan mucho mejor que los datos sueltos, porque el cerebro está hecho para las narraciones.</p><p>Las <b>imágenes verbales</b> convierten una idea abstracta en algo que se puede ver: en lugar de decir «se tiran muchos alimentos», di «cada año tiramos a la basura comida suficiente para llenar este instituto diez veces». Las <b>preguntas al público</b> lo mantienen activo. Y una <b>frase eslogan</b>, corta y rítmica, resume el mensaje y puede repetirse al final («Un solar vacío, un barrio vacío; un huerto, un barrio vivo»). No hace falta usarlos todos: dos o tres bien elegidos bastan para que tu discurso deje huella.</p>`, svg: ["Recursos de memoria", [["Regla de tres", "ideas en tríos"], ["Anécdota", "una historia breve"], ["Eslogan", "frase corta y rítmica"]], "para que se recuerde"] },
    { html: `<h3>Ajustar el tiempo</h3><p>Al hablar en público solemos pronunciar entre <b>120 y 150 palabras por minuto</b>. Eso permite calcular la extensión: un discurso de tres minutos tiene unas 400 palabras, y uno de cinco, unas 650. Si te pasas, no hables más deprisa: <b>recorta</b>. Elimina primero lo que no apoya el mensaje central, después los ejemplos repetidos y, por último, los detalles. Nunca recortes la introducción ni el cierre.</p><p>Prepara también un <b>plan B</b> por si el tiempo cambia: marca en tus fichas qué partes puedes saltar si te piden que acortes, y ten preparado algún ejemplo extra por si te sobra tiempo o surgen preguntas. Durante el discurso, controla el tiempo con un reloj discreto o con alguien que te haga una señal. Respetar el tiempo es una muestra de respeto al público y a los demás oradores, y en concursos y debates pasarse puede restar puntos o hacer que te corten justo antes de lo más importante: el final.</p>`, svg: ["Calcular el tiempo", [["Ritmo", "120-150 palabras por minuto"], ["3 minutos", "unas 400 palabras"], ["Si sobra texto", "recorta, no aceleres"]]] },
  ],
  ejemplos: [
    ["Elige el modelo de desarrollo adecuado para: a) contar la historia de tu equipo; b) pedir fuentes de agua en el patio.", ["a) Una historia con etapas en el tiempo: orden cronológico.", "b) Un problema (calor y sed) que necesita una medida: problema, causas y solución."], "a) Cronológico; b) problema, causas y solución."],
    ["¿Cuántas palabras debe tener un discurso de 4 minutos?", ["Se hablan unas 120-150 palabras por minuto.", "4 × 120 = 480; 4 × 150 = 600."], "Entre unas 480 y 600 palabras; unas 500 es una buena referencia."],
    ["Convierte en imagen verbal: «El instituto consume mucho papel».", ["Busca una medida que el público pueda imaginar.", "Compárala con algo conocido del entorno.", "Formúlala en una frase corta."], "«Cada curso gastamos tanto papel que, apilado, sería más alto que el edificio del instituto»."],
  ],
  errores: ["Querer decirlo todo: un discurso con demasiadas ideas hace que el público no recuerde ninguna."],
  niveles: "bbmmmmbbmb",
  ejercicios: [
    ["b", "Cita tres tipos de discurso con un ejemplo de cada uno.", "Informativo (exposición sobre los volcanes), persuasivo (pedir un carril bici) y de ocasión (despedida de fin de curso)."],
    ["b", "¿Para qué sirve un mapa mental al preparar un discurso?", "Para organizar el material alrededor del mensaje central y ver qué ideas están bien apoyadas."],
    ["b", "¿Cuántas ideas principales conviene usar en un discurso corto?", "Como máximo tres."],
    ["b", "¿Cuántas palabras por minuto se pronuncian al hablar en público?", "Entre 120 y 150 aproximadamente."],
    ["b", "¿Qué es un cierre circular?", "Terminar volviendo a la imagen, pregunta o historia del principio con un sentido nuevo."],
    ["b", "Escribe un eslogan para un discurso sobre el reciclaje.", "Respuesta abierta. Ejemplo: «Separa hoy, respira mañana»."],
    ["m", "Explica la técnica del ascensor.", "Imaginar que tienes treinta segundos para convencer a alguien; lo que dirías es tu mensaje central."],
    ["m", "Describe la secuencia de cinco pasos para persuadir.", "Captar la atención, mostrar la necesidad, presentar la solución, ayudar a imaginar el futuro y pedir una acción concreta."],
    ["m", "Tu discurso de 3 minutos dura 4 y medio. ¿Qué recortas y en qué orden?", "Primero lo que no apoya el mensaje central, luego los ejemplos repetidos y por último los detalles; nunca la introducción ni el cierre."],
    ["m", "¿Por qué las anécdotas se recuerdan mejor que los datos?", "Porque el cerebro está preparado para las narraciones: tienen personajes, emoción y secuencia, lo que facilita recordarlas."],
    ["m", "¿En qué se diferencia un discurso de graduación de una exposición informativa?", "El de graduación es breve, personal y emotivo, con anécdotas y agradecimientos; la exposición busca claridad, orden y datos."],
    ["m", "Escribe un plan B para un discurso al que de repente le quitan un minuto.", "Marcar en las fichas las partes que se pueden saltar (un ejemplo, un dato secundario) y mantener la introducción, las ideas principales y el cierre."],
    ["m", "Aplica la regla de tres al tema «Ventajas de ir en bici al instituto».", "«Es más sano, más barato y más limpio»."],
    ["a", "Prepara el esquema completo (introducción, tres ideas y cierre) de un discurso persuasivo de 3 minutos sobre un tema de tu elección.", "Respuesta abierta. Debe incluir gancho, mensaje central, tres ideas con sus apoyos, transiciones y cierre con llamada a la acción."],
    ["a", "Reescribe para el oído: «Considerando la problemática actual derivada del incremento exponencial de residuos plásticos, resulta imprescindible implementar medidas».", "«Cada vez tiramos más plástico. Y eso es un problema. Tenemos que actuar ya»."],
    ["a", "Analiza el discurso de Nerea de la lectura: tipo, modelo de desarrollo y recursos.", "Discurso persuasivo; modelo problema-solución con la secuencia de cinco pasos; recursos: foto llamativa como gancho, datos y encuesta a vecinos, imagen del futuro y frase final memorable."],
    ["a", "Escribe un discurso de ocasión de 150 palabras para despedir a un profesor que se jubila.", "Respuesta abierta. Debe ser breve, personal y sincero, con una anécdota, agradecimientos concretos y un buen deseo final."],
    ["a", "Compara los cuatro modelos de desarrollo y di cuál usarías para explicar la Revolución francesa y por qué.", "El cronológico, porque se trata de una sucesión de hechos en el tiempo; podría combinarse con causas y consecuencias."],
    ["a", "Graba tu discurso, cuenta las palabras y calcula tu ritmo por minuto. ¿Hablas demasiado deprisa?", "Respuesta abierta. Si supera las 150 palabras por minuto, conviene hacer más pausas y recortar texto."],
    ["a", "Escribe tres ganchos distintos para un discurso sobre el sueño adolescente y di cuál elegirías ante tu clase.", "Respuesta abierta. Ejemplo: pregunta («¿Cuántos habéis dormido hoy ocho horas?»), dato (la mayoría de adolescentes duerme menos de lo recomendado, según los pediatras) y anécdota (un examen en blanco tras una noche de videojuegos). Se elige el que más conecte con el público."],
    ["a", "¿Por qué crees que es más difícil hacer un discurso corto que uno largo?", "Porque obliga a seleccionar lo esencial, eliminar lo accesorio y formular las ideas con precisión; como dijo un escritor, «si hubiera tenido más tiempo, habría escrito una carta más corta»."],
  ],
  cuartas: ["memoria", "un índice", "Los agradecimientos", "improvisarlo sin ensayo", "un rumor de clase", "rellenar tiempo", "muletilla", "con muchas subordinadas", "dibujos sin relación", "una queja", "memoriza el discurso", "cuatro minutos y medio", "solo el desarrollo"],
  quiz: [
    ["Un discurso para convencer de que se ponga un carril bici es…", ["persuasivo", "informativo", "de ocasión", "de presentación"], 0, "Quiere mover a la acción."],
    ["El mapa mental sirve para…", ["organizar las ideas", "ensayar la voz", "medir el tiempo", "elegir la ropa"], 0, "Mensaje en el centro y ramas."],
    ["Para un discurso corto, el número ideal de ideas principales es…", ["tres", "diez", "una docena", "ninguna"], 0, "Completo y fácil de recordar."],
    ["El modelo «problema, causas y solución» es ideal para…", ["persuadir", "contar una biografía", "presentar a alguien", "agradecer"], 0, "Propone cómo resolver algo."],
    ["La técnica del ascensor ayuda a encontrar…", ["el mensaje central", "el título", "las fuentes", "la ropa"], 0, "Treinta segundos para convencer."],
    ["Agrupar ideas en tríos es la…", ["regla de tres", "falacia de tres", "estructura homérica", "técnica del ascensor"], 0, "Fácil de recordar."],
    ["Un discurso de 3 minutos tiene unas…", ["400 palabras", "100 palabras", "1.500 palabras", "50 palabras"], 0, "120-150 por minuto."],
    ["Si te pasas de tiempo debes…", ["recortar", "hablar más rápido", "saltarte el cierre", "ignorarlo"], 0, "Nunca acelerar."],
    ["Volver al final a la imagen inicial es un cierre…", ["circular", "abierto", "abrupto", "doble"], 0, "Da sensación de completo."],
    ["Una imagen verbal sirve para…", ["hacer visible una idea abstracta", "decorar las diapositivas", "llenar tiempo", "citar fuentes"], 0, "El público puede imaginarla."],
  ],
  examen: [
    ["Un discurso de despedida es…", ["de ocasión", "informativo", "persuasivo", "científico"], 0, "Breve, personal y emotivo."],
    ["El último paso de la secuencia persuasiva es…", ["pedir una acción", "captar la atención", "mostrar la necesidad", "presentar la solución"], 0, "Qué debe hacer el público."],
    ["Al recortar un discurso nunca se elimina…", ["la introducción ni el cierre", "un ejemplo repetido", "un detalle", "un dato secundario"], 0, "Son lo que más se recuerda."],
    ["El orden cronológico es útil para…", ["contar una historia o proceso", "comparar dos opciones", "pedir algo", "agradecer"], 0, "Antes, durante, después."],
    ["Ensayar ante alguien sirve para comprobar…", ["si entiende el mensaje central", "si le gusta tu ropa", "si se aburre siempre", "nada"], 0, "Y recibir comentarios."],
  ],
  tarjetas: [["Discurso de ocasión", "Discurso breve y emotivo para un momento especial."], ["Mapa mental", "Esquema en ramas alrededor del mensaje central."], ["Problema-solución", "Modelo que presenta un problema, sus causas y una propuesta."], ["120-150", "Palabras por minuto al hablar en público."]],
  glosario: [["Discurso", "Exposición oral ordenada ante un público."], ["Inventio", "Fase de búsqueda de ideas."], ["Dispositio", "Fase de ordenación de las ideas."], ["Elocutio", "Fase de redacción y elección de palabras."], ["Actio", "Fase de pronunciación del discurso."], ["Mensaje central", "Idea principal que se resume en una frase."], ["Gancho", "Recurso inicial para captar la atención."], ["Transición", "Frase que une las partes del discurso."], ["Cierre circular", "Final que retoma el inicio."], ["Mapa mental", "Organización gráfica de las ideas."], ["Regla de tres", "Agrupación de ideas en tríos."], ["Imagen verbal", "Comparación que hace visible una idea."], ["Eslogan", "Frase breve y rítmica que resume el mensaje."], ["Guion de apoyo", "Fichas con palabras clave."]],
  situacion: { titulo: "Mi barrio en tres minutos", reto: "Preparar y pronunciar un discurso persuasivo de tres minutos con una propuesta para mejorar tu barrio o pueblo.", pasos: ["Elegir una sola propuesta y formular el mensaje central con la técnica del ascensor.", "Buscar información: datos oficiales, una pequeña encuesta y fotos.", "Organizar las ideas con un mapa mental y la secuencia persuasiva de cinco pasos.", "Redactar para el oído unas 400 palabras con gancho, transiciones y cierre circular.", "Preparar las fichas, ensayar cronometrando y pronunciarlo ante la clase."], producto: "Discurso persuasivo de tres minutos con su esquema y sus fichas.", evaluacion: ["El mensaje es claro y la propuesta está bien apoyada.", "La estructura sigue un modelo adecuado y las transiciones son claras.", "Usa recursos para que se recuerde.", "Respeta el tiempo y habla con naturalidad apoyándose en fichas."] },
  familias: ["Haced de público y cronometrad el discurso; después, pedidle que os diga en una frase su mensaje central."],
  saberes: "planificación del discurso oral: tipos de discurso, selección y ordenación de ideas, modelos de desarrollo, recursos de memoria y control del tiempo.",
  minutos: 100,
});
