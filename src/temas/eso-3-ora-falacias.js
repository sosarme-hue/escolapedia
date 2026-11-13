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

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["El vídeo que todos compartieron", `<p>Un martes por la noche empieza a circular por los grupos de clase un vídeo: un supuesto médico, con bata blanca, asegura que beber agua fría después de comer «provoca cáncer». En pocas horas lo han reenviado decenas de personas. Algunos comentan «¡Por si acaso!»; otros, «Mi tía dice que es verdad». Nadie se pregunta quién es ese médico, de dónde salen sus datos o por qué el vídeo termina recomendando unas pastillas que se venden en una web.</p><p>Al día siguiente, en clase de Oratoria, la profesora lo analiza con el grupo: hay una <b>falsa autoridad</b> (nadie sabe si es médico), una <b>apelación al miedo</b>, una <b>falsa causa</b> (dos cosas que ocurren juntas no se causan necesariamente) y un <b>interés económico</b> oculto. Ninguna organización sanitaria seria respalda esa afirmación. Las falacias y los bulos no engañan solo a personas ingenuas: aprovechan atajos de nuestro cerebro que todos tenemos. En este tema aprenderás a reconocer los razonamientos tramposos más frecuentes, a detectar la manipulación con datos y en las redes, a verificar la información y a responder con calma cuando alguien intenta engañarte en un debate.</p>`],
  mas: [
    ["<h3>Qué es una falacia</h3>", `<p>La palabra viene del latín <i>fallacia</i>, «engaño». Ya Aristóteles, en el siglo IV a. C., escribió un tratado, las <i>Refutaciones sofísticas</i>, en el que clasificaba los razonamientos tramposos que usaban algunos oradores para ganar discusiones. Muchas falacias conservan todavía su nombre latino: <i>ad hominem</i>, <i>ad populum</i>, <i>post hoc</i>, <i>tu quoque</i>.</p>`],
    ["<h3>Falacias contra la persona y contra la postura</h3>", `<p>Hay que distinguir el ataque personal de una crítica legítima a la <b>credibilidad</b>. Si un experto en salud cobra de una empresa cuyo producto recomienda, señalarlo no es un <i>ad hominem</i>: es un dato relevante para valorar su opinión. Lo falaz es rechazar un argumento por rasgos que no tienen nada que ver con él, como el aspecto, la edad o el origen de quien lo dice.</p>`],
    ["<h3>Cómo responder a una falacia en un debate</h3>", `<p>Evita además el error contrario, la llamada <b>falacia de la falacia</b>: pensar que, si alguien usa una falacia, su conclusión es necesariamente falsa. Una idea verdadera puede defenderse con un mal argumento. Señalar la falacia demuestra que ese razonamiento no sirve, no que la tesis sea errónea.</p>`],
    ["<h3>Falacias de razonamiento</h3>", `<p>Para evitar la generalización apresurada, pregúntate siempre cuántos casos has visto y si son representativos. Tres opiniones en un foro no dicen nada sobre lo que piensa la mayoría, y una mala experiencia en un restaurante no demuestra que toda una cadena sea mala. Las afirmaciones con «todos», «nadie», «siempre» y «nunca» suelen esconder generalizaciones.</p>`],
    ["<h3>La manipulación y los bulos</h3>", `<p>Los bulos suelen seguir un patrón: titular alarmante, ausencia de fuente o fuente vaga («un médico», «un estudio»), petición de difusión urgente («¡Compártelo antes de que lo borren!») y apelación a emociones fuertes como el miedo o la indignación. Cuantas más de estas señales tenga un mensaje, más motivos hay para desconfiar.</p>`],
  ],
  svgs: [
    ["<h3>Por qué caemos en las falacias</h3>", "Sesgos que nos hacen caer", [["Confirmación", "creemos lo que ya pensamos"], ["Disponibilidad", "lo reciente parece frecuente"], ["Grupo", "seguimos a la mayoría"]], "atajos del cerebro"],
    ["<h3>Más falacias frecuentes</h3>", "Más falacias frecuentes", [["Post hoc", "después, luego por eso"], ["Pendiente resbaladiza", "una cosa lleva al desastre"], ["Pregunta compleja", "trampa en la pregunta"]], "reconócelas"],
    ["<h3>Las falacias en la publicidad</h3>", "Trucos de la publicidad", [["Famosos", "falsa autoridad"], ["Todos lo usan", "ad populum"], ["Solo hoy", "urgencia y miedo"]], "persuadir con atajos"],
    ["<h3>Cómo verificar paso a paso</h3>", "Verificar una noticia", [["Fuente", "¿quién lo publica?"], ["Fecha", "¿es actual?"], ["Contraste", "¿lo dicen otros medios?"]], "antes de compartir"],
    ["<h3>Cómo responder a una falacia en un debate</h3>", "Responder a una falacia", [["Calma", "sin enfadarse"], ["Señalar", "nombrar el error"], ["Volver", "al argumento real"]], "en un debate"],
  ],
  bloques: [
    { tras: "<h3>Qué es una falacia</h3>", html: `<h3>Falacias formales e informales</h3><p>Las falacias se dividen en dos grandes grupos. Las <mark>falacias formales</mark> son errores en la <b>estructura lógica</b> del razonamiento, independientemente de su contenido. La más conocida es la <b>afirmación del consecuente</b>: «Si llueve, el suelo está mojado. El suelo está mojado. Por tanto, ha llovido». Parece correcto, pero no lo es: el suelo puede estar mojado porque alguien lo ha fregado o porque ha pasado el camión de limpieza. La regla dice qué pasa si llueve, no que la lluvia sea la única causa posible.</p><p>Las <mark>falacias informales</mark> son las más frecuentes en la vida diaria: el error no está en la forma, sino en el <b>contenido</b> o en el uso del lenguaje. Atacan a la persona en lugar del argumento, apelan a las emociones o a la mayoría, sacan conclusiones de muy pocos casos o confunden lo que va antes con lo que causa. Son peligrosas porque resultan muy persuasivas: conectan con nuestras emociones y con atajos mentales que usamos sin darnos cuenta.</p>`, svg: ["Dos grandes grupos de falacias", [["Formales", "error en la estructura"], ["Ejemplo", "afirmar el consecuente"], ["Informales", "error en el contenido"]], "clasificación"] },
    { tras: "<h3>Falacias que apelan a otros</h3>", html: `<h3>Tradición, novedad, naturaleza e ignorancia</h3><p>Otras falacias muy frecuentes apelan a valores en lugar de a pruebas. La <mark>apelación a la tradición</mark> defiende algo solo porque siempre se ha hecho así: «Las chicas no juegan al fútbol porque nunca han jugado». Que una costumbre sea antigua no demuestra que sea buena. La <b>apelación a la novedad</b> hace lo contrario: «Este móvil es mejor porque es el último modelo». Lo nuevo no siempre es mejor.</p><p>La <mark>apelación a la naturaleza</mark> da por bueno lo natural y por malo lo artificial: «Este remedio es natural, así que no puede hacer daño». Pero el veneno de las setas también es natural, y muchos medicamentos de laboratorio salvan vidas. Por último, la <b>apelación a la ignorancia</b> (<i>ad ignorantiam</i>) afirma que algo es verdad porque no se ha demostrado que sea falso: «Nadie ha probado que los fantasmas no existan, así que existen». La carga de la prueba la tiene siempre quien afirma algo extraordinario.</p>`, svg: ["Falacias que apelan a valores", [["Tradición", "siempre se ha hecho así"], ["Naturaleza", "natural = bueno"], ["Ignorancia", "no probado falso = cierto"]], "sin pruebas reales"] },
    { tras: "<h3>Las falacias en la publicidad</h3>", html: `<h3>Engañar con números y gráficos</h3><p>Los datos parecen objetivos, pero también se pueden manipular. Un truco frecuente es el <mark>eje cortado</mark>: si un gráfico de barras empieza en 95 en lugar de en 0, una diferencia de 96 a 98 parece enorme. Otro es dar <b>porcentajes sin la base</b>: «Los robos han aumentado un 100 %» suena alarmante, pero puede significar que se ha pasado de uno a dos en todo un año. También se engaña con <b>muestras pequeñas</b> o poco representativas: «El 90 % de los encuestados prefiere nuestra marca» (¿cuántos?, ¿quiénes?, ¿los clientes de la propia tienda?).</p><p>El error más importante es confundir <mark>correlación</mark> con <b>causalidad</b>. Que dos cosas aumenten a la vez no significa que una cause la otra: en verano suben las ventas de helados y también los ahogamientos, pero los helados no ahogan a nadie; ambas cosas dependen del calor. Ante un dato, pregunta siempre: ¿de dónde sale?, ¿cuál es la cifra total?, ¿cómo se ha medido? y ¿puede haber otra explicación?</p>`, svg: ["Trucos con datos", [["Eje cortado", "exagera diferencias"], ["Porcentaje sin base", "100 % de 1 a 2"], ["Correlación", "no es causalidad"]], "preguntas ante un dato"] },
    { tras: "<h3>La manipulación y los bulos</h3>", html: `<h3>Desinformación en la era digital</h3><p>Internet ha multiplicado la desinformación por varias razones. Los <mark>algoritmos</mark> de las redes sociales nos muestran sobre todo contenidos parecidos a los que ya nos gustan, y así acabamos en una <b>burbuja de filtro</b> en la que casi todo confirma lo que pensamos. Además, los mensajes que provocan indignación o miedo se comparten mucho más, y los algoritmos los premian con más visibilidad.</p><p>El <b>clickbait</b> o «cebo de clics» usa titulares exagerados o misteriosos («No creerás lo que pasó después…») para conseguir visitas. Las <mark>ultrafalsificaciones</mark> o <i>deepfakes</i> son vídeos, audios o imágenes creados con inteligencia artificial que hacen parecer que alguien dijo o hizo algo que nunca ocurrió. Y muchas cuentas falsas o automatizadas (<b>bots</b>) difunden a la vez el mismo mensaje para que parezca que mucha gente lo apoya. Frente a todo esto, la mejor defensa es pararse antes de compartir, buscar la fuente original y consultar servicios de verificación.</p>`, svg: ["Desinformación digital", [["Burbuja de filtro", "solo vemos lo que nos gusta"], ["Deepfake", "vídeo falso con IA"], ["Bots", "cuentas automáticas"]], "en las redes"] },
    { html: `<h3>Una caja de herramientas para pensar</h3><p>El <mark>pensamiento crítico</mark> no consiste en desconfiar de todo, sino en <b>valorar las razones</b> antes de aceptar una idea. Puedes usar siempre las mismas preguntas: ¿Quién lo dice y qué sabe del tema? ¿Qué pruebas aporta? ¿Qué falta, qué no se dice? ¿A quién beneficia que lo crea? ¿Hay otras explicaciones posibles? ¿Lo confirman fuentes independientes?</p><p>También hay que aplicar esas preguntas a uno mismo. Todos tenemos sesgos y todos podemos equivocarnos, así que conviene practicar la <b>humildad intelectual</b>: estar dispuesto a cambiar de opinión cuando aparecen mejores pruebas. Ser crítico no es lo mismo que ser cínico: el cínico no cree en nada y rechaza cualquier dato que no le guste; la persona crítica acepta lo que está bien demostrado, aunque no le guste, y desconfía de lo que no lo está, aunque le encante. Esta actitud protege contra la manipulación y es la base de la ciencia y de la democracia.</p>`, svg: ["Preguntas del pensamiento crítico", [["¿Quién lo dice?", "y qué sabe"], ["¿Qué pruebas hay?", "¿qué falta?"], ["¿A quién beneficia?", "¿otra explicación?"]]] },
  ],
  videos: [["<h3>Falacias contra la persona y contra la postura</h3>", "hombrePaja"]],
  ejemplos: [
    ["Analiza: «Si estudio, apruebo. He aprobado. Luego he estudiado».", ["La regla dice qué pasa si estudio.", "Aprobar puede tener otras causas (un examen fácil, suerte, saber el tema de antes).", "Es la estructura de la afirmación del consecuente."], "Falacia formal: afirmación del consecuente."],
    ["Un anuncio dice: «El 80 % de los dentistas recomienda este chicle». ¿Qué preguntarías?", ["¿Cuántos dentistas se encuestaron y cómo se eligieron?", "¿Qué se les preguntó exactamente? ¿Podían recomendar varias marcas?", "¿Quién pagó la encuesta?"], "Sin conocer la muestra, la pregunta y quién la financió, el dato no permite concluir nada."],
    ["Responde a: «Las vacunas son artificiales; lo natural es pasar la enfermedad».", ["Identifica la falacia: apelación a la naturaleza.", "Señala el error: que algo sea natural no lo hace seguro; muchas enfermedades naturales son mortales.", "Vuelve a las pruebas: las vacunas han reducido enfermedades graves según datos de organismos sanitarios."], "Es una apelación a la naturaleza; lo relevante son las pruebas de seguridad y eficacia, no si algo es natural."],
  ],
  errores: ["Pensar que si alguien usa una falacia su conclusión es falsa: solo demuestra que ese argumento no sirve."],
  niveles: "bbmmmbbaab",
  ejercicios: [
    ["b", "¿Qué diferencia hay entre una falacia formal y una informal?", "La formal es un error en la estructura lógica; la informal, en el contenido o el uso del lenguaje."],
    ["b", "Escribe un ejemplo de apelación a la tradición.", "«En mi familia siempre se ha estudiado Derecho, así que tú también debes estudiarlo»."],
    ["b", "¿Qué es una burbuja de filtro?", "La situación en la que los algoritmos nos muestran sobre todo contenidos que confirman lo que ya pensamos."],
    ["b", "¿Qué es un deepfake?", "Un vídeo, audio o imagen falso creado con inteligencia artificial que imita a una persona real."],
    ["b", "¿Qué significa que «correlación no es causalidad»?", "Que dos cosas que ocurren a la vez no tienen por qué causarse; puede haber otra causa común o ser casualidad."],
    ["m", "Identifica: «Nadie ha demostrado que este amuleto no funcione, así que funciona».", "Apelación a la ignorancia (ad ignorantiam): la carga de la prueba la tiene quien afirma que funciona."],
    ["m", "Explica el truco del eje cortado con un ejemplo.", "Si un gráfico de notas empieza en 6 en lugar de en 0, la diferencia entre un 6,5 y un 7 parece enorme. Hay que mirar siempre dónde empieza el eje."],
    ["m", "¿Qué falla en «Los accidentes de patinete han subido un 200 %»?", "Falta la base: puede pasar de 1 a 3 accidentes. Hay que conocer las cifras absolutas, el período y el lugar."],
    ["m", "Identifica: «Este champú es mejor porque es 100 % natural».", "Apelación a la naturaleza: que sea natural no prueba que sea mejor ni más seguro."],
    ["m", "¿Por qué los mensajes de indignación se difunden más en redes?", "Porque provocan emociones fuertes que nos empujan a reaccionar y compartir, y los algoritmos premian los contenidos que generan más interacción."],
    ["m", "¿Es un ad hominem decir que un estudio sobre azúcar lo pagó una empresa de refrescos? Razona.", "No necesariamente: el conflicto de intereses es relevante para valorar su credibilidad. Sería ad hominem rechazarlo solo por eso sin examinar sus datos."],
    ["m", "Explica qué es la falacia de la falacia.", "Creer que una conclusión es falsa porque se ha defendido con una falacia; una idea verdadera puede argumentarse mal."],
    ["m", "¿Qué es el clickbait y cómo reconocerlo?", "Titulares exagerados o misteriosos para conseguir clics; se reconoce por frases como «No creerás…», signos de exclamación y falta de información concreta."],
    ["a", "Analiza las falacias del vídeo de la lectura inicial.", "Falsa autoridad (médico desconocido), apelación al miedo (cáncer), falsa causa (agua fría y enfermedad), interés económico oculto (venta de pastillas) y ad populum implícito (lo comparte mucha gente)."],
    ["a", "Busca un gráfico en una noticia o anuncio y valora si está bien construido.", "Respuesta abierta. Debe revisar el eje, la escala, las cifras absolutas, la fuente y si el título del gráfico corresponde a lo que muestra."],
    ["a", "Explica la diferencia entre ser crítico y ser cínico con un ejemplo.", "El crítico acepta lo bien demostrado aunque no le guste y duda de lo no demostrado; el cínico rechaza todo. Ante un estudio sobre el cambio climático, el crítico revisa la fuente y lo acepta si es sólido; el cínico dice «todos mienten»."],
    ["a", "En verano aumentan las ventas de helados y las quemaduras solares. ¿Qué conclusión es correcta?", "Que ambas dependen de una causa común, el calor y el sol, no que los helados causen quemaduras."],
    ["a", "Diseña cinco preguntas para verificar un vídeo viral antes de compartirlo.", "¿Quién lo publicó primero? ¿Cuándo y dónde se grabó? ¿Lo recogen medios fiables? ¿Hay signos de edición o IA? ¿Qué gana quien lo difunde?"],
    ["a", "¿Por qué los bots pueden hacer que una idea parezca más popular de lo que es?", "Porque muchas cuentas automáticas publican a la vez el mismo mensaje, crean tendencias artificiales y aprovechan la falacia ad populum: la gente cree que si mucha gente lo dice, será cierto."],
    ["a", "Escribe una respuesta calmada a alguien que dice: «Si no apoyas esta idea, eres cómplice del problema».", "«Creo que plantearlo así es un falso dilema: se puede estar preocupado por el problema y discrepar de esta solución. ¿Podemos hablar de los datos concretos de la propuesta?»."],
    ["a", "Valora qué medidas podrían tomar las redes sociales contra la desinformación y sus riesgos.", "Etiquetar contenidos dudosos, colaborar con verificadores, frenar la difusión masiva y eliminar bots. Riesgos: censura de opiniones legítimas, errores y concentración de poder en las empresas."],
  ],
  cuartas: ["una pregunta", "post hoc", "un argumento de autoridad", "tu quoque", "una canción", "falso dilema", "la escucha activa", "una tesis", "razonamientos lógicos", "inventar otra versión", "la pregunta compleja", "tu quoque", "contestar con un insulto"],
  quiz: [
    ["Un error en la estructura lógica es una falacia…", ["formal", "informal", "de autoridad", "publicitaria"], 0, "Como la afirmación del consecuente."],
    ["«Siempre se ha hecho así» es una apelación a…", ["la tradición", "la novedad", "la ignorancia", "la mayoría"], 0, "Lo antiguo no es por eso bueno."],
    ["«Es natural, así que no hace daño» es una apelación a…", ["la naturaleza", "la autoridad", "la piedad", "la fuerza"], 0, "Hay venenos naturales."],
    ["Un gráfico que no empieza en 0 puede…", ["exagerar las diferencias", "ser siempre falso", "ser más exacto", "no tener datos"], 0, "Truco del eje cortado."],
    ["Dos cosas que suben a la vez muestran…", ["una correlación", "siempre una causa", "una falacia formal", "una mentira"], 0, "No necesariamente causalidad."],
    ["Un deepfake es…", ["un vídeo falso hecho con IA", "un tipo de debate", "un gráfico", "una fuente fiable"], 0, "Imita a personas reales."],
    ["La burbuja de filtro la crean…", ["los algoritmos", "los profesores", "los periódicos en papel", "los jurados"], 0, "Nos muestran lo que nos gusta."],
    ["«No creerás lo que pasó después» es típico del…", ["clickbait", "logos", "debate académico", "silogismo"], 0, "Cebo de clics."],
    ["La carga de la prueba la tiene…", ["quien afirma algo", "quien duda", "el público", "nadie"], 0, "Contra el ad ignorantiam."],
    ["Ser crítico significa…", ["valorar las razones antes de aceptar", "no creer nada", "creer todo", "llevar la contraria"], 0, "No es cinismo."],
  ],
  examen: [
    ["«Si llueve, se moja el suelo; está mojado; ha llovido» es…", ["afirmación del consecuente", "ad hominem", "ad populum", "un silogismo correcto"], 0, "Falacia formal."],
    ["«Han subido un 100 %» sin dar la base es un truco con…", ["porcentajes", "emociones", "autoridad", "tradición"], 0, "Puede ser de 1 a 2."],
    ["Las cuentas automáticas que difunden mensajes son…", ["bots", "fuentes", "jurados", "moderadores"], 0, "Simulan apoyo masivo."],
    ["Si alguien usa una falacia, su conclusión…", ["no queda demostrada, pero podría ser verdad", "es falsa siempre", "es verdad", "no importa"], 0, "Falacia de la falacia."],
    ["La humildad intelectual consiste en…", ["estar dispuesto a cambiar de opinión con pruebas", "no opinar nunca", "dudar de todo", "callar"], 0, "Base del pensamiento crítico."],
  ],
  tarjetas: [["Falacia formal", "Error en la estructura lógica del razonamiento."], ["Apelación a la naturaleza", "Creer que lo natural es siempre bueno."], ["Correlación", "Relación entre dos datos que no implica causa."], ["Burbuja de filtro", "Efecto de los algoritmos que solo muestran lo afín."]],
  glosario: [["Falacia", "Razonamiento incorrecto que parece válido."], ["Falacia formal", "Error en la estructura lógica."], ["Falacia informal", "Error en el contenido o el lenguaje."], ["Ad hominem", "Ataque a la persona en lugar de al argumento."], ["Hombre de paja", "Deformar la postura del otro para atacarla."], ["Ad populum", "Creer algo porque lo cree la mayoría."], ["Post hoc", "Confundir lo que va antes con la causa."], ["Ad ignorantiam", "Dar algo por cierto porque no se ha probado lo contrario."], ["Sesgo cognitivo", "Atajo mental que nos lleva a errores."], ["Bulo", "Noticia falsa difundida a propósito."], ["Deepfake", "Falsificación audiovisual hecha con IA."], ["Clickbait", "Titular exagerado para conseguir clics."], ["Correlación", "Relación estadística entre dos variables."], ["Pensamiento crítico", "Hábito de valorar las razones antes de aceptar una idea."]],
  situacion: { titulo: "Cazafalacias", reto: "Crear una campaña para ayudar al alumnado del centro a detectar falacias y bulos.", pasos: ["Recoger durante una semana ejemplos reales de falacias en anuncios, redes, noticias y conversaciones.", "Clasificarlos e identificar el tipo de falacia o de manipulación con datos.", "Verificar dos bulos con servicios de verificación y explicar el proceso.", "Diseñar carteles o vídeos breves con ejemplos y consejos.", "Presentar la campaña a otra clase y recoger sus dudas."], producto: "Campaña de carteles o vídeos cortos «Cazafalacias» con una guía de verificación.", evaluacion: ["Identifica y nombra correctamente las falacias.", "Explica con claridad por qué cada razonamiento falla.", "Aplica un método de verificación riguroso.", "Los materiales son claros, atractivos y útiles para otros alumnos."] },
  familias: ["Antes de reenviar un mensaje sorprendente en el grupo familiar, comprobadlo juntos en un servicio de verificación."],
  saberes: "falacias formales e informales, sesgos cognitivos, manipulación con datos, desinformación digital y verificación de la información.",
  minutos: 100,
});
