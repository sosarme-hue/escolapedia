// Oratoria y debate 3º ESO (optativa). Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Oratoria y debate",
  curso: "3-eso",
  titulo: "Las falacias y la manipulación",
  minutos: 50,
  objetivos: ["Reconocer las falacias más frecuentes", "Detectar técnicas de manipulación en la publicidad, la política y las redes", "Verificar informaciones antes de creerlas o compartirlas"],
  claves: ["falacia", "ad hominem", "hombre de paja", "falso dilema", "generalización", "pendiente resbaladiza", "ad populum", "bulo", "verificación", "pensamiento crítico"],
  pregunta: {
    texto: "«¿Cómo vas a tener razón sobre el medio ambiente si vas al instituto en coche?» ¿Es un buen argumento contra lo que dice esa persona?",
    respuesta: "No. Ataca a la <b>persona</b> en vez de responder a sus <b>razones</b>. Lo que dice puede ser verdad aunque ella no sea coherente. Es una <mark>falacia</mark>: un razonamiento que parece válido pero no lo es. Saber detectarlas te protege de quien quiere convencerte con trampas.",
  },
  bloques: [
    {
      html: `<h3>Qué es una falacia</h3><p>Una <b>falacia</b> es un <mark>razonamiento incorrecto</mark> que parece convincente. A veces se usa sin querer, por descuido; otras, a propósito, para manipular. Las falacias son muy frecuentes en discusiones, anuncios, discursos políticos y redes sociales, porque suelen apelar a las emociones o a atajos mentales en lugar de a los datos. Muchas tienen nombres latinos que vienen de la lógica clásica.</p>`,
      svg: L.filas("Un argumento frente a una falacia", [
        ["Argumento", "razones válidas y pruebas", "var(--leaf)"],
        ["Falacia", "parece válido, pero es una trampa", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Falacias contra la persona y contra la postura</h3><p>El <b>ataque personal</b> (<i>ad hominem</i>) critica a quien habla en lugar de a lo que dice: «No le hagas caso, que suspendió Mates». El <b>hombre de paja</b> deforma la postura del otro para que sea más fácil atacarla: «Quieres menos deberes, o sea, que no quieres estudiar nada». Las dos evitan el debate real.</p>`,
      svg: L.filas("Falacias contra la persona y la postura", [
        ["Ad hominem", "ataca a la persona", "var(--red)"],
        ["Hombre de paja", "deforma lo que dijo el otro", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Falacias de razonamiento</h3><p>La <b>generalización apresurada</b> saca una regla de pocos casos: «Dos chicos de ese instituto son maleducados; todos lo son». El <b>falso dilema</b> presenta solo dos opciones cuando hay más: «O estás conmigo o contra mí». La <b>pendiente resbaladiza</b> afirma que algo pequeño llevará sin remedio a una catástrofe: «Si te dejo salir hoy, mañana querrás irte de casa».</p>`,
      svg: L.tabla("Falacias de razonamiento", ["Falacia", "Ejemplo"], [
        ["Generalización", "dos son así: todos"], ["Falso dilema", "o conmigo o contra mí"], ["Pendiente", "hoy esto, mañana el caos"],
      ]),
    },
    {
      html: `<h3>Falacias que apelan a otros</h3><p>La falacia <b>ad populum</b> o de la mayoría da algo por cierto porque mucha gente lo cree o lo hace: «Todo el mundo lo tiene, así que es bueno». La <b>falsa autoridad</b> cita a alguien que no es experto en el tema: un actor anunciando un medicamento. Y la <b>apelación al miedo</b> busca asustar en lugar de convencer: «Si no compras esta alarma, entrarán a robarte».</p>`,
      svg: L.filas("Falacias que apelan a otros", [
        ["Ad populum", "lo hace todo el mundo", "var(--pen)"],
        ["Falsa autoridad", "lo dice un famoso", "var(--leaf)"],
        ["Miedo", "asusta en vez de razonar", "var(--red)"],
      ]),
    },
    {
      html: `<h3>La manipulación y los bulos</h3><p>Un <b>bulo</b> es una <mark>noticia falsa</mark> que se difunde a propósito, a menudo por redes y mensajería. Suele tener titulares alarmistas, ninguna fuente o fuentes inventadas, faltas de ortografía, fotos sacadas de contexto y la petición de «¡compártelo!». Antes de creer o compartir una información, comprueba <b>quién</b> la publica, <b>cuándo</b>, <b>qué fuentes</b> cita y si la recogen medios fiables o los servicios de verificación.</p>`,
      svg: L.filas("Señales de alarma de un bulo", [
        ["Titular", "alarmista o increíble", "var(--red)"],
        ["Fuente", "ninguna o inventada", "var(--pen)"],
        ["Petición", "¡compártelo ya!", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Antes de creer, comprueba",
    svg: L.pasos("Pasos para verificar una información", [
      ["¿Quién lo dice?", ["autor y medio", "reconocibles"], "var(--pen)"],
      ["¿Cuándo?", ["fecha actual", "o noticia vieja"], "var(--leaf)"],
      ["¿Qué fuentes?", ["datos y enlaces", "comprobables"], "var(--red)"],
      ["¿Otros lo dicen?", ["medios fiables y", "verificadores"], "var(--inf)"],
    ]),
  },
  video: { id: "qYxeSGMw7t0", titulo: "¿Cómo detectar mentiras? Las falacias (parte 1)", canal: "CuriosaMente", vistas: 1122627, megusta: 0, busqueda: "falacias lógicas" },
  quiz: [
    { q: "Una falacia es…", o: ["un razonamiento incorrecto que parece válido", "un dato estadístico", "una cita literal"], a: 0, e: "Parece convincente, pero es una trampa." },
    { q: "«No le hagas caso, que lleva una ropa horrible» es…", o: ["ad hominem", "falso dilema", "ad populum"], a: 0, e: "Ataca a la persona." },
    { q: "«O apruebas todo o eres un fracasado» es…", o: ["un falso dilema", "una pendiente resbaladiza", "un hombre de paja"], a: 0, e: "Hay más opciones." },
    { q: "«Millones de personas lo usan, así que funciona» es…", o: ["ad populum", "ad hominem", "falsa autoridad"], a: 0, e: "Que lo haga mucha gente no lo hace verdad." },
    { q: "Un bulo es…", o: ["una noticia falsa difundida a propósito", "un argumento de datos", "un tipo de debate"], a: 0, e: "Desinformación." },
  ],
  examen: [
    { q: "Deformar la postura del otro para atacarla es…", o: ["el hombre de paja", "la generalización", "la concesión"], a: 0, e: "Se ataca una versión falsa." },
    { q: "«Si dejamos el móvil en clase un día, acabaremos sin aprender nada» es…", o: ["pendiente resbaladiza", "argumento de autoridad", "ad hominem"], a: 0, e: "Exagera las consecuencias." },
    { q: "Ante una noticia sorprendente, lo primero es…", o: ["comprobar la fuente", "compartirla rápido", "creerla"], a: 0, e: "Verificar antes de difundir." },
  ],
  feynman: ["Qué es una falacia y por qué funciona", "La diferencia entre ad hominem y hombre de paja", "Tres falacias de razonamiento con ejemplos", "Cómo reconocer y verificar un bulo"],
  mapa: mapa("FALACIAS", "var(--eso)", [
    ["Persona", "ad hominem · hombre de paja", "var(--red)"],
    ["Razonamiento", "generalización · falso dilema", "var(--pen)"],
    ["Apelación", "mayoría · famoso · miedo", "var(--leaf)"],
    ["Bulos", "verificar antes de compartir", "var(--inf)"],
  ]),
  tarjetas: [
    ["Ad hominem", "Atacar a la persona en vez de a sus argumentos."],
    ["Hombre de paja", "Deformar la postura del otro para que sea más fácil de atacar."],
    ["Falso dilema", "Presentar solo dos opciones cuando hay más."],
    ["Ad populum", "Dar algo por cierto porque lo cree o lo hace mucha gente."],
    ["Bulo", "Noticia falsa que se difunde a propósito."],
  ],
  familias: ["Cuando llegue un mensaje alarmante al grupo familiar, comprobadlo juntos antes de reenviarlo.", "Jugad a cazar falacias en anuncios o tertulias de televisión.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Alfabetización mediática e informacional: detección de falacias, sesgos y desinformación; contraste de fuentes (materia optativa de Oratoria y debate; relación con el RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Bingo de falacias durante el visionado de un debate televisivo.", "Taller de verificación con noticias reales y falsas.", "Crear un anuncio lleno de falacias y que el resto las descubra."],
  },
  fuentes: [
    L.BOE,
    { t: "Falacia, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Falacia" },
    { t: "Maldita.es: verificación de bulos", url: "https://maldita.es/" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Reconocer los sesgos que nos hacen creer bulos", "Responder a una falacia en un debate"],
  bloques: [
    { tras: "Qué es una falacia", html: `<h3>Por qué caemos en las falacias</h3><p>Nuestro cerebro usa <b>atajos</b> para decidir rápido, y eso a veces nos engaña. Son los <b>sesgos cognitivos</b>. El más conocido es el <mark>sesgo de confirmación</mark>: tendemos a creer lo que confirma lo que ya pensábamos y a ignorar lo que lo contradice. Por eso compartimos sin comprobar las noticias que «nos dan la razón».</p><p>También influyen las <b>emociones</b>: si algo nos indigna, nos asusta o nos hace gracia, lo creemos y lo difundimos más deprisa. Los creadores de bulos lo saben y buscan provocar esas reacciones. La mejor defensa es <b>parar y pensar</b>: cuando una noticia te provoque una emoción fuerte, ese es justo el momento de comprobarla.</p>` },
    { tras: "Falacias de razonamiento", html: `<h3>Más falacias frecuentes</h3><ul><li><b>Falsa causa</b> (<i>post hoc</i>): como una cosa ocurre después de otra, se cree que es su causa. «Me puse los calcetines rojos y aprobé: son de la suerte».</li><li><b>Tu quoque</b> («tú también»): se rechaza una crítica porque quien la hace también lo hace. «¿Me dices que no use tanto el móvil? ¡Si tú también lo usas!».</li><li><b>Pregunta compleja</b>: una pregunta que da por hecho algo no demostrado. «¿Ya has dejado de copiar en los exámenes?».</li><li><b>Apelación a la tradición</b>: «Siempre se ha hecho así».</li><li><b>Apelación a la ignorancia</b>: «Nadie ha demostrado que no existan los fantasmas, así que existen».</li></ul>` },
    { tras: "Falacias que apelan a otros", html: `<h3>Las falacias en la publicidad</h3><p>La publicidad no siempre miente, pero a menudo <mark>persuade con atajos</mark> en lugar de con razones. Algunas técnicas habituales:</p>${L.tb(["Técnica", "Ejemplo"], [["Famoso que lo recomienda", "un futbolista anuncia una bebida"], ["Todo el mundo lo usa", "«el más vendido»"], ["Miedo o urgencia", "«¡solo hoy!», «quedan pocas unidades»"], ["Asociar a emociones", "familias felices, paisajes bonitos"], ["Datos sin fuente", "«el 9 de cada 10 lo prefieren»"]])}<p>Al ver un anuncio, pregúntate: ¿qué me dice realmente del producto? ¿Qué prueba aporta? ¿Qué emoción quiere provocar?</p>` },
    { tras: "La manipulación y los bulos", html: `<h3>Cómo verificar paso a paso</h3><ol><li><b>Lee más allá del titular</b>: muchos titulares exageran o no coinciden con la noticia.</li><li><b>Comprueba la fuente</b>: ¿es un medio conocido? ¿La web tiene un nombre parecido a otro famoso para engañar?</li><li><b>Mira la fecha</b>: noticias antiguas vuelven a circular como si fueran nuevas.</li><li><b>Busca la información en otros medios</b> fiables. Si algo tan importante solo aparece en un sitio, desconfía.</li><li><b>Busca la imagen</b>: con un buscador de imágenes puedes ver si la foto es antigua o de otro lugar.</li><li><b>Consulta a los verificadores</b> (como Maldita.es, Newtral o EFE Verifica).</li></ol><p>Y, ante la duda, <mark>no compartas</mark>.</p>` },
    { tras: "La manipulación y los bulos", html: `<h3>Cómo responder a una falacia en un debate</h3><p>Si tu oponente usa una falacia, no te enfades: señálala con calma y vuelve al tema. Algunas respuestas útiles:</p><ul><li>Ante un <b>ad hominem</b>: «Puedes opinar lo que quieras de mí, pero no has respondido a mi argumento: …».</li><li>Ante un <b>hombre de paja</b>: «Yo no he dicho eso. Lo que he dicho es…».</li><li>Ante un <b>falso dilema</b>: «No son las únicas opciones; también podríamos…».</li><li>Ante una <b>generalización</b>: «Esos casos existen, pero no demuestran que siempre sea así. Los datos dicen…».</li></ul><p>Y, sobre todo, revisa tus propios argumentos: es fácil ver las falacias de los demás y no las nuestras. Un buen orador gana credibilidad cuando <b>argumenta limpio</b>.</p>` },
  ],
  videos: [
    ["Falacias de razonamiento", L.vid("snrFBHVNTk0", "¿Qué son las falacias y cómo identificarlas? Tipos de falacias y ejemplos", "Astraway", 218388)],
    ["Cómo verificar paso a paso", L.vid("YLWUyrK6coQ", "¿Cómo se crean y viralizan los bulos en redes sociales?", "RTVE Noticias", 5030)],
  ],
  ejemplos: [
    ["Identifica la falacia: «Los videojuegos son malos. Mi vecino juega mucho y saca malas notas».", ["Se saca una conclusión general de un solo caso.", "Además, se supone que los videojuegos son la causa de las malas notas, sin pruebas.", "Podría haber otras causas."], "generalización apresurada (y falsa causa)."],
    ["Identifica la falacia: «Si permitimos un día sin uniforme, al final nadie respetará ninguna norma».", ["Parte de algo pequeño (un día sin uniforme).", "Predice una consecuencia extrema sin demostrar los pasos intermedios.", "Busca asustar."], "pendiente resbaladiza."],
    ["Un mensaje de WhatsApp dice: «¡URGENTE! Mañana cierran todos los colegios por un virus. Compártelo». ¿Qué harías?", ["Señales de alarma: mayúsculas, urgencia, ninguna fuente, petición de compartir.", "Buscar la noticia en medios fiables y en la web oficial de Educación.", "Consultar un verificador."], "no compartirlo hasta comprobarlo; probablemente es un bulo."],
  ],
  errores: [
    "Creer que una información es cierta porque la ha compartido mucha gente.",
    "Responder a un ataque personal con otro ataque personal.",
    "Compartir noticias solo por el titular.",
    "Pensar que solo los demás usan falacias.",
    "Confundir una crítica legítima a una idea con un ataque a la persona.",
  ],
  ejercicios: [
    ["Escribe un ejemplo de ad hominem.", "Por ejemplo: «¿Qué vas a saber tú de deporte, si eres un patoso?»."],
    ["Escribe un ejemplo de falso dilema.", "Por ejemplo: «O vienes a mi fiesta o no eres mi amigo»."],
    ["Identifica: «Este champú es el mejor porque lo anuncia una actriz famosa».", "Falsa autoridad: una actriz no es experta en el cuidado del pelo."],
    ["Identifica: «Siempre hemos tenido exámenes en papel, ¿por qué cambiar?».", "Apelación a la tradición."],
    ["Identifica: «Después de poner la antena, me dolió la cabeza: la antena causa dolores».", "Falsa causa (post hoc)."],
    ["Escribe tres señales de alarma de un bulo.", "Titular alarmista, ninguna fuente o fuente desconocida, petición urgente de compartir (también faltas de ortografía o fotos sin contexto)."],
    ["¿Qué es el sesgo de confirmación?", "La tendencia a creer lo que confirma lo que ya pensamos y a ignorar lo contrario."],
    ["Responde a este hombre de paja: «¿Así que quieres prohibir todos los coches?» (tú solo propusiste una calle peatonal).", "«No he dicho eso. Lo que propongo es que la calle del instituto sea peatonal en horario escolar»."],
    ["Analiza un anuncio que hayas visto: ¿qué técnica usa?", "Respuesta abierta. Debe identificar una técnica (famoso, urgencia, mayoría, emociones, datos sin fuente) y explicar por qué no es una prueba."],
    ["Nombra dos servicios de verificación de noticias en español.", "Por ejemplo: Maldita.es, Newtral o EFE Verifica."],
  ],
  quiz: [
    ["«¡Tú también lo haces!» es la falacia…", ["tu quoque", "ad populum", "hombre de paja"], 0, "Rechaza la crítica por quién la hace."],
    ["Creer solo lo que confirma lo que ya pensamos es…", ["el sesgo de confirmación", "un argumento de autoridad", "una concesión"], 0, "Un atajo mental."],
    ["«¿Ya has dejado de mentir?» es una…", ["pregunta compleja", "pregunta retórica", "concesión"], 0, "Da por hecho algo no demostrado."],
    ["«¡Solo hoy! ¡Quedan pocas unidades!» usa…", ["urgencia y miedo", "datos verificados", "autoridad experta"], 0, "Presiona para decidir sin pensar."],
    ["Ante una noticia dudosa, lo mejor es…", ["no compartirla hasta comprobarla", "compartirla por si acaso", "reenviarla a todos"], 0, "Verificar primero."],
  ],
  tarjetas: [
    ["Sesgo de confirmación", "Tendencia a creer lo que confirma nuestras ideas previas."],
    ["Falsa causa", "Creer que algo es causa de otra cosa solo porque ocurrió antes."],
    ["Verificar", "Comprobar fuente, fecha y otros medios antes de creer o compartir."],
  ],
});
