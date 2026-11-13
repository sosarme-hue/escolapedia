// Cultura Clásica 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "3-eso",
  titulo: "La herencia clásica hoy",
  minutos: 35,
  objetivos: ["Reconocer la herencia de Grecia y Roma en la política, el derecho y la ciencia", "Identificar expresiones latinas de uso actual", "Valorar la pervivencia de la cultura clásica en el arte, la literatura y la cultura popular"],
  claves: ["democracia", "derecho romano", "filosofía", "ciencia", "latinismos", "pervivencia", "calendario"],
  pregunta: {
    texto: "Votar en unas elecciones, firmar un contrato, ir al «currículum» de una web o celebrar el 1 de enero. ¿Qué tienen que ver con Grecia y Roma?",
    respuesta: "Todo. La <mark>democracia</mark> nació en Atenas; nuestras leyes y contratos se basan en el <b>derecho romano</b>; <i>curriculum</i> es una palabra latina («carrera de la vida»); y nuestro calendario es una reforma del <b>calendario de Julio César</b>, que empezaba el año el 1 de enero. Vivimos rodeados de herencia clásica.",
  },
  bloques: [
    {
      html: `<h3>La política: democracia y república</h3><p>La palabra <mark>democracia</mark> (<i>demos</i>, «pueblo», y <i>kratos</i>, «poder») nació en Atenas en el siglo V a. C.: los ciudadanos se reunían en la <b>asamblea</b> para votar las leyes directamente. Era una democracia limitada (no votaban mujeres, extranjeros ni esclavos), pero introdujo ideas clave: la igualdad ante la ley y el debate público. De Roma heredamos la <b>república</b> (<i>res publica</i>, «la cosa de todos»), el <b>senado</b> y la idea de <b>separar cargos</b> con mandatos limitados. Hoy el Congreso y el Senado de España llevan nombres clásicos.</p>`,
      svg: dos("Democracia ateniense y democracia actual", ["Atenas", ["directa", "en la asamblea", "solo ciudadanos", "varones"], "var(--pen)"], ["Hoy", ["representativa", "elegimos diputados", "todos los adultos", "hombres y mujeres"], "var(--leaf)"]),
    },
    {
      html: `<h3>El derecho romano</h3><p>Los romanos fueron los grandes juristas de la Antigüedad. Su <mark>derecho</mark> regulaba la propiedad, la herencia, los contratos, el matrimonio y los delitos. En el siglo VI, el emperador bizantino <b>Justiniano</b> lo reunió en una gran obra, el <i>Corpus Iuris Civilis</i>, que se estudió en las universidades europeas desde la Edad Media y es la base del <b>derecho civil</b> de España, Francia, Italia o Latinoamérica. Principios actuales como la <b>presunción de inocencia</b> o que nadie puede ser juzgado dos veces por lo mismo tienen raíz romana.</p>`,
      svg: filas("Herencias del derecho romano", [["Contratos", "compraventa, alquiler", "var(--pen)"], ["Herencia", "testamento", "var(--sun)"], ["Propiedad", "dueño y uso", "var(--leaf)"], ["Juicio", "presunción de inocencia", "var(--red)"]]),
    },
    {
      html: `<h3>Filosofía y ciencia</h3><p>Los griegos fueron los primeros en explicar el mundo con la <mark>razón</mark> en lugar de con mitos. <b>Sócrates</b> enseñaba a pensar con preguntas; <b>Platón</b> fundó la Academia; <b>Aristóteles</b> clasificó los seres vivos y estudió la lógica. En ciencia, <b>Pitágoras</b> y <b>Euclides</b> pusieron las bases de la geometría; <b>Arquímedes</b> descubrió el principio de flotación y la palanca; <b>Eratóstenes</b> calculó el tamaño de la Tierra con una sombra; e <b>Hipócrates</b> fundó la medicina científica: los médicos aún hacen el <b>juramento hipocrático</b>.</p>`,
      svg: rueda("Sabios griegos: Sócrates, Platón, Aristóteles, Pitágoras, Arquímedes e Hipócrates", "RAZÓN", [["Sócrates", "var(--pen)"], ["Platón", "var(--inf)"], ["Pitágoras", "var(--leaf)"], ["Arquímedes", "var(--sun)"]], "var(--pen)"),
    },
    {
      html: `<h3>El latín que seguimos hablando</h3><p>Usamos a diario expresiones latinas, llamadas <mark>latinismos</mark>, sin traducirlas: <b>currículum vitae</b> («carrera de la vida»), <b>ad hoc</b> («para esto»), <b>in situ</b> («en el lugar»), <b>a priori</b> («de antemano»), <b>déficit</b> y <b>superávit</b> («falta» y «sobra»), <b>ultimátum</b>, <b>referéndum</b>, <b>quórum</b>, <b>vice versa</b> o <b>grosso modo</b> (¡sin «a»!, no se dice «a grosso modo»). Muchos lemas también son latinos: <i>Citius, altius, fortius</i> («más rápido, más alto, más fuerte»), el lema olímpico.</p>`,
      svg: filas("Latinismos de uso diario", [["in situ", "en el lugar", "var(--pen)"], ["a priori", "de antemano", "var(--leaf)"], ["ad hoc", "para esto", "var(--sun)"], ["grosso modo", "a grandes rasgos", "var(--red)"]]),
    },
    {
      html: `<h3>La herencia en la cultura popular</h3><p>Grecia y Roma están en todas partes. En el <b>cine y las series</b>: películas como <i>Gladiator</i> o <i>Troya</i>, y personajes como Hércules o Wonder Woman, de inspiración amazona. En la <b>literatura juvenil</b>: Percy Jackson es hijo de Poseidón. En los <b>videojuegos</b>: sagas ambientadas en el Olimpo o en Esparta. En las <b>marcas</b>: Nike, Pandora, Ajax, Mercurio. En la <b>astronomía</b>: los planetas (Mercurio, Venus, Marte, Júpiter, Saturno) y las misiones espaciales (Apolo, Artemis). Saber de cultura clásica permite entender muchas de estas referencias.</p>`,
      svg: rueda("La herencia clásica en cine, libros, videojuegos, marcas, planetas y deporte", "HOY", [["cine", "var(--red)"], ["libros", "var(--pen)"], ["juegos", "var(--leaf)"], ["marcas", "var(--sun)"]], "var(--sun)"),
    },
  ],
  figura: {
    titulo: "Lo que debemos a Grecia y a Roma",
    svg: figCols("Herencias de Grecia y Roma en cuatro ámbitos", [["Política", ["democracia", "república", "senado", "ciudadanía"], "var(--pen)"], ["Derecho", ["Corpus Iuris", "contratos", "herencia", "presunción"], "var(--red)"], ["Saber", ["filosofía", "geometría", "medicina", "astronomía"], "var(--leaf)"], ["Lengua y arte", ["alfabeto", "latinismos", "columnas", "teatro"], "var(--sun)"]]),
  },
  video: { id: "mnxR2FYb06o", titulo: "¿Qué diferencia a los griegos de los romanos?", canal: "CuriosaMente", vistas: 1400159, megusta: 0, busqueda: "legado de grecia y roma" },
  quiz: [
    { q: "¿Dónde nació la democracia?", o: ["Roma", "Atenas", "Esparta"], a: 1, e: "En el siglo V a. C." },
    { q: "¿Qué significa «res publica»?", o: ["La cosa de todos", "El poder del rey", "La ley de Roma"], a: 0, e: "Origen de «república»." },
    { q: "¿Quién recopiló el derecho romano?", o: ["Augusto", "Justiniano", "Cicerón"], a: 1, e: "En el Corpus Iuris Civilis." },
    { q: "¿Qué significa «in situ»?", o: ["En el lugar", "De antemano", "Para esto"], a: 0, e: "Latinismo." },
    { q: "¿Quién fundó la medicina científica?", o: ["Arquímedes", "Hipócrates", "Euclides"], a: 1, e: "Juramento hipocrático." },
  ],
  examen: [
    { q: "¿Qué forma es correcta?", o: ["grosso modo", "a grosso modo", "groso modo"], a: 0, e: "Sin «a» delante." },
    { q: "La democracia ateniense era…", o: ["directa", "representativa", "universal"], a: 0, e: "Los ciudadanos votaban en la asamblea." },
    { q: "El lema olímpico «Citius, altius, fortius» está en…", o: ["latín", "griego", "francés"], a: 0, e: "Más rápido, más alto, más fuerte." },
  ],
  feynman: ["Qué heredamos de la democracia ateniense y de la república romana", "Por qué el derecho romano sigue vivo", "Qué aportaron los griegos a la filosofía y la ciencia", "Qué latinismos usamos y dónde aparece hoy lo clásico"],
  mapa: mapa("HERENCIA CLÁSICA", "var(--sun)", [
    ["Política", "democracia · república", "var(--pen)"],
    ["Derecho", "Corpus Iuris Civilis", "var(--red)"],
    ["Saber", "filosofía · ciencia", "var(--leaf)"],
    ["Cultura", "latinismos · cine · marcas", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Democracia", "«Poder del pueblo»; nació en Atenas."],
    ["Corpus Iuris Civilis", "Recopilación del derecho romano hecha por Justiniano."],
    ["Latinismo", "Expresión latina usada en nuestra lengua: in situ, a priori."],
    ["Juramento hipocrático", "Compromiso ético de los médicos, atribuido a Hipócrates."],
    ["Citius, altius, fortius", "Lema olímpico: más rápido, más alto, más fuerte."],
  ],
  familias: ["Buscad juntos latinismos en un periódico o en las noticias de la tele.", "Haced una lista de películas, series o videojuegos que conozcáis con referencias a Grecia o Roma.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Pervivencia del legado clásico en las instituciones políticas, el derecho, la ciencia, la lengua y la cultura contemporánea (Cultura Clásica, materia optativa que ofertan las comunidades autónomas en el marco del RD 217/2022).",
    ideas: ["Asamblea ateniense en clase para votar una propuesta real.", "Mural de latinismos encontrados en prensa durante una semana.", "Exposición sobre referencias clásicas en la cultura pop."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Real Academia Española: Diccionario panhispánico de dudas (latinismos)", url: "https://www.rae.es/dpd/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar el origen del calendario y de la medida del tiempo", "Relacionar la tradición clásica con la literatura y el pensamiento europeo"],
  bloques: [
    { tras: "Filosofía y ciencia", html: `<h3>Ciencia griega con nombre propio</h3>${tabla(["Sabio", "Aportación", "Lo usamos hoy en…"], [["Pitágoras", "teorema de los triángulos rectángulos", "matemáticas, construcción"], ["Euclides", "geometría ordenada en «Elementos»", "la geometría escolar"], ["Arquímedes", "principio de flotación, palanca", "barcos, física"], ["Eratóstenes", "mide la circunferencia de la Tierra", "geografía, astronomía"], ["Hipócrates", "medicina basada en la observación", "el juramento de los médicos"], ["Ptolomeo", "mapas con coordenadas, astronomía", "latitud y longitud"]])}<p>Según la tradición, Arquímedes descubrió su principio en el baño y salió gritando <mark>«¡Eureka!»</mark> («¡lo encontré!»), una palabra que todavía usamos.</p>` },
    { tras: "El derecho romano", html: `<h3>El calendario y la medida del tiempo</h3><p>Nuestro calendario es romano. <b>Julio César</b> lo reformó en el 46 a. C. (<mark>calendario juliano</mark>): 365 días, con un día más cada cuatro años, y el año empezando el 1 de enero, mes de <b>Jano</b>, el dios de las puertas y los comienzos, con dos caras, una mirando al pasado y otra al futuro. El papa Gregorio XIII lo corrigió ligeramente en 1582 (calendario gregoriano). Los meses guardan nombres romanos: <b>julio</b> por Julio César y <b>agosto</b> por Augusto; marzo por Marte; y septiembre, octubre, noviembre y diciembre eran los meses séptimo a décimo. Hasta el «siglo» viene del latín <i>saeculum</i>, «generación».</p>` },
    { tras: "El latín que seguimos hablando", html: `<h3>Más expresiones latinas</h3><p>Algunas expresiones latinas son lemas o frases célebres que aún se citan: <mark>carpe diem</mark> («aprovecha el día», del poeta Horacio); <b>veni, vidi, vici</b> («llegué, vi, vencí», de Julio César tras una victoria rapidísima); <b>alea iacta est</b> («la suerte está echada», también de César al cruzar el río Rubicón); <b>mens sana in corpore sano</b> («mente sana en cuerpo sano», de Juvenal); o <b>errare humanum est</b> («errar es humano»). En el mundo académico se usan <i>cum laude</i> («con alabanza»), <i>alma mater</i> («madre nutricia», para la universidad) o <i>honoris causa</i> («por causa de honor»).</p>`, video: { id: "a8oU7lkMW6c", titulo: "5 frases en latín que siguen vigentes", canal: "BBC Ideas", vistas: 75603, megusta: 0 } },
    { tras: "La herencia en la cultura popular", html: `<h3>La tradición clásica en la literatura y el arte</h3><p>Los autores de todas las épocas han vuelto a Grecia y Roma. <b>Dante</b> eligió al poeta romano Virgilio como guía en la <i>Divina comedia</i>; <b>Garcilaso de la Vega</b> llenó sus poemas de mitos como el de Apolo y Dafne; <b>Cervantes</b> cita a los clásicos en el <i>Quijote</i>; y <b>Shakespeare</b> escribió <i>Julio César</i> y <i>Antonio y Cleopatra</i>. Pintores como <b>Velázquez</b> (<i>La fragua de Vulcano</i>), <b>Rubens</b> o <b>Tiziano</b> pintaron escenas mitológicas, muchas hoy en el Museo del Prado. A esta pervivencia continua de temas y formas clásicas se la llama <mark>tradición clásica</mark>.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica qué significa y de dónde viene «superávit».", pasos: ["Es una forma del verbo latino superare, «sobrar, superar».", "Superavit = «sobró».", "Se usa en economía cuando los ingresos superan a los gastos."], resultado: "Exceso de ingresos sobre gastos; lo contrario de déficit («falta»)." },
    { enunciado: "¿Por qué septiembre se llama así si es el noveno mes?", pasos: ["Septem en latín es «siete».", "El calendario romano primitivo empezaba en marzo.", "Contando desde marzo, septiembre era el séptimo."], resultado: "Porque era el séptimo mes del antiguo calendario romano." },
    { enunciado: "Compara la democracia de Atenas con la de España hoy.", pasos: ["Atenas: directa; los ciudadanos votaban las leyes en la asamblea.", "España: representativa; elegimos diputados que votan las leyes.", "Atenas excluía a mujeres, extranjeros y esclavos; hoy votan todos los ciudadanos adultos."], resultado: "Atenas creó la idea; la democracia actual es representativa y mucho más inclusiva." },
  ],
  errores: [
    "Decir «a grosso modo» en vez de «grosso modo».",
    "Pensar que la democracia ateniense incluía a todos los habitantes.",
    "Creer que el derecho romano es solo historia: sigue en los códigos civiles actuales.",
    "Escribir «curriculums» como plural: lo recomendado es «currículums» o «los currículum».",
    "Pensar que la herencia clásica solo está en los museos: está en el lenguaje, las leyes y la cultura pop.",
  ],
  ejercicios: [
    { q: "Explica el significado de «democracia» y de «república».", sol: "Democracia: poder del pueblo (demos + kratos). República: res publica, la cosa de todos." },
    { q: "Cita dos diferencias entre la democracia ateniense y la actual.", sol: "La ateniense era directa y solo votaban los ciudadanos varones; la actual es representativa y votan hombres y mujeres adultos." },
    { q: "¿Qué es el Corpus Iuris Civilis?", sol: "La recopilación del derecho romano ordenada por Justiniano en el siglo VI." },
    { q: "Nombra tres sabios griegos y su aportación.", sol: "Pitágoras (geometría), Arquímedes (flotación y palanca), Hipócrates (medicina)." },
    { q: "¿Qué significan «a priori», «ad hoc» e «in situ»?", sol: "De antemano, para esto, en el lugar." },
    { q: "¿Por qué julio y agosto se llaman así?", sol: "Por Julio César y por el emperador Augusto." },
    { q: "¿Qué significa «carpe diem» y quién lo escribió?", sol: "«Aprovecha el día»; el poeta romano Horacio." },
    { q: "¿Qué significa «eureka» y a quién se atribuye?", sol: "«¡Lo encontré!»; a Arquímedes." },
    { q: "Pon dos ejemplos de herencia clásica en el cine o los videojuegos.", sol: "Por ejemplo, la película Gladiator y la saga Percy Jackson (o videojuegos ambientados en el Olimpo)." },
    { q: "¿Qué es la tradición clásica?", sol: "La pervivencia de los temas, formas e ideas de Grecia y Roma en la cultura posterior." },
  ],
  quiz: [
    { q: "El dios que da nombre a enero es…", o: ["Jano", "Júpiter", "Juno"], a: 0, e: "Dios de los comienzos, con dos caras." },
    { q: "«Veni, vidi, vici» lo dijo…", o: ["Julio César", "Augusto", "Cicerón"], a: 0, e: "Tras una victoria rápida." },
    { q: "«Mens sana in corpore sano» significa…", o: ["mente sana en cuerpo sano", "la suerte está echada", "aprovecha el día"], a: 0, e: "De Juvenal." },
    { q: "Velázquez pintó…", o: ["La fragua de Vulcano", "La escuela de Atenas", "El nacimiento de Venus"], a: 0, e: "En el Museo del Prado." },
    { q: "El calendario juliano lo creó…", o: ["Julio César", "Gregorio XIII", "Augusto"], a: 0, e: "En el 46 a. C." },
  ],
  tarjetas: [
    ["Calendario juliano", "Reforma de Julio César (46 a. C.): 365 días y año bisiesto."],
    ["Carpe diem", "«Aprovecha el día», de Horacio."],
    ["Tradición clásica", "Pervivencia de Grecia y Roma en la cultura posterior."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Un día lleno de griegos y romanos", `<p>Suena el despertador un <b>martes</b> (día de Marte) de <b>enero</b> (mes de Jano). Desayunas mirando el móvil, donde lees que el <b>Senado</b> ha aprobado una ley y que el <b>Parlamento</b> votará una reforma «<i>ad hoc</i>». En clase de matemáticas usas el teorema de <b>Pitágoras</b>; en ciencias hablas de la <b>biología</b> y de la <b>fotosíntesis</b>, palabras griegas; en educación física entrenas para una <b>maratón</b>. Por la tarde ves una película de superhéroes inspirados en dioses del Olimpo y, antes de dormir, juegas a un videojuego ambientado en la antigua Esparta.</p><p>Sin darte cuenta, has pasado el día rodeado de Grecia y Roma. No es casualidad: la democracia, el derecho, la filosofía, la ciencia, el calendario y buena parte de nuestro vocabulario son una herencia directa de aquellas civilizaciones. En este tema descubrirás de dónde vienen muchas cosas que damos por supuestas, pero también aprenderás a mirar ese legado con espíritu crítico: la democracia ateniense excluía a las mujeres y a los esclavos, y el derecho romano permitía la esclavitud. Conocer el pasado sirve para entender el presente y para mejorarlo.</p>`],
  mas: [
    ["<h3>La política: democracia y república</h3>", `<p>De Roma heredamos además la idea de que el poder debe estar <b>limitado y repartido</b>: magistrados elegidos por un tiempo fijo, cargos colegiados (dos cónsules que se vigilaban entre sí) y un Senado que aconsejaba. Muchas palabras políticas actuales son latinas: <i>senado</i>, <i>candidato</i> (de <i>candidus</i>, porque los aspirantes vestían una toga muy blanca), <i>votar</i>, <i>ciudadano</i> o <i>constitución</i>.</p>`],
    ["<h3>El calendario y la medida del tiempo</h3>", `<p>El calendario juliano tenía un pequeño error: el año solar dura unos once minutos menos que 365 días y cuarto. Con los siglos, el desfase se acumuló hasta llegar a diez días. En 1582, el papa <b>Gregorio XIII</b> lo corrigió: se saltaron diez días de golpe y se decidió que los años terminados en 00 solo son bisiestos si se dividen entre 400. Es el <b>calendario gregoriano</b> que usamos hoy.</p>`],
    ["<h3>Filosofía y ciencia</h3>", `<p>Lo más importante que nos dejaron los griegos no es una lista de descubrimientos, sino un <b>método</b>: hacerse preguntas, observar, razonar, discutir las ideas de otros y aceptar solo lo que puede demostrarse. Palabras como <i>teoría</i>, <i>problema</i>, <i>análisis</i>, <i>hipótesis</i> o <i>método</i> son griegas, y siguen siendo la base de toda la ciencia actual.</p>`],
    ["<h3>El latín que seguimos hablando</h3>", `<p>Los latinismos se escriben hoy en <b>redonda</b> y con tilde si les corresponde según nuestras reglas (<i>currículum</i>, <i>déficit</i>, <i>accésit</i>) cuando están adaptados, y en cursiva y sin tilde cuando se usan como frase latina (<i>ad hoc</i>, <i>in situ</i>, <i>grosso modo</i>). Un error frecuente es añadirles preposiciones: se dice <i>grosso modo</i>, no «a grosso modo», y <i>motu proprio</i>, no «de motu propio».</p>`],
    ["<h3>La herencia en la cultura popular</h3>", `<p>También las marcas buscan nombres clásicos porque transmiten fuerza y prestigio: <b>Nike</b> (diosa de la victoria), <b>Pandora</b>, <b>Mercurio</b> o <b>Ajax</b> (un héroe de Troya). Y la NASA bautizó sus programas espaciales como <b>Apolo</b> y <b>Artemisa</b>, hermanos gemelos en la mitología, para unir la primera llegada a la Luna con el regreso actual.</p>`],
    ["<h3>Más expresiones latinas</h3>", `<p>Otras frases latinas se usan en ámbitos concretos: en la universidad, <i>cum laude</i> («con alabanza») premia una tesis excelente; en medicina, <i>post mortem</i> («después de la muerte»); en el deporte, <i>ex aequo</i> («por igual») indica un empate en la clasificación; y en los juzgados, <i>de facto</i> («de hecho») se opone a <i>de iure</i> («de derecho»).</p>`],
  ],
  svgs: [
    ["<h3>El calendario y la medida del tiempo</h3>", "Del calendario romano al actual", [["46 a. C.", "Julio César: calendario juliano"], ["Meses", "Jano, Marte, Julio, Augusto…"], ["1582", "Gregorio XIII lo corrige"]], "nuestro calendario es romano"],
    ["<h3>Ciencia griega con nombre propio</h3>", "Sabios griegos y su legado", [["Pitágoras", "teorema del triángulo"], ["Arquímedes", "flotación y palanca"], ["Hipócrates", "medicina científica"]], "ciencia con nombre propio"],
    ["<h3>Más expresiones latinas</h3>", "Frases latinas célebres", [["Carpe diem", "aprovecha el día"], ["Veni, vidi, vici", "llegué, vi, vencí"], ["Alea iacta est", "la suerte está echada"]], "lemas que aún citamos"],
    ["<h3>La tradición clásica en la literatura y el arte</h3>", "La tradición clásica en la cultura", [["Literatura", "Dante, Garcilaso, Joyce"], ["Pintura", "Botticelli, Velázquez"], ["Hoy", "cine, novela juvenil, juegos"]], "volver a los clásicos"],
  ],
  bloques: [
    { tras: "<h3>La política: democracia y república</h3>", html: `<h3>La democracia ateniense por dentro</h3><p>La democracia de Atenas funcionaba con varias instituciones. La <mark>Ekklesía</mark> o Asamblea reunía en la colina de la Pnix a todos los ciudadanos varones mayores de 18 años, unas cuarenta veces al año: allí se votaban leyes, la guerra y la paz. La <b>Bulé</b> o Consejo de los Quinientos preparaba los temas que se iban a votar. Los tribunales populares, con cientos de jurados, juzgaban los delitos.</p><p>Los atenienses desconfiaban de los políticos profesionales, así que la mayoría de los cargos se elegía por <b>sorteo</b> y duraba un año; solo los generales (<i>estrategos</i>) se elegían por votación, porque hacía falta experiencia. Existía además el <mark>ostracismo</mark>: una vez al año, los ciudadanos podían escribir en un trozo de cerámica (<i>ostrakon</i>) el nombre de alguien que consideraran peligroso para la democracia, y el más votado debía exiliarse diez años. Era una democracia directa e intensa, pero de los aproximadamente 300.000 habitantes del Ática solo unos 30.000 eran ciudadanos con derecho a voto.</p>`, svg: ["Instituciones de la democracia ateniense", [["Ekklesía", "asamblea de ciudadanos"], ["Bulé", "consejo de los 500"], ["Tribunales", "jurados populares"]], "Atenas, siglo V a. C."], video: "democracia" },
    { tras: "<h3>El derecho romano</h3>", html: `<h3>Del derecho romano a nuestras leyes</h3><p>El derecho romano empezó con la <mark>Ley de las Doce Tablas</mark> (hacia el 450 a. C.), las primeras leyes escritas de Roma, expuestas en el foro para que todos pudieran conocerlas y nadie las interpretara a su antojo. Durante siglos, los juristas romanos crearon conceptos que seguimos usando: la <b>persona</b> como sujeto de derechos, la <b>propiedad</b>, el <b>contrato</b> (un acuerdo que obliga a las partes), el <b>testamento</b> o la diferencia entre derecho público y privado.</p><p>En la Edad Media, las universidades europeas, empezando por Bolonia, estudiaron el <i>Corpus Iuris Civilis</i> de Justiniano, y su influencia llegó al <b>Código Civil francés</b> de Napoleón (1804) y al <b>Código Civil español</b> (1889). Por eso los abogados todavía usan principios latinos como <i>in dubio pro reo</i> («en caso de duda, a favor del acusado»), <i>habeas corpus</i> (el derecho del detenido a ser llevado ante un juez) o <i>pacta sunt servanda</i> («los pactos deben cumplirse»).</p>`, svg: ["Del derecho romano a hoy", [["Doce Tablas", "hacia 450 a. C."], ["Corpus Iuris Civilis", "Justiniano, siglo VI"], ["Códigos civiles", "Francia 1804, España 1889"]], "dos mil años de derecho"], video: "derecho" },
    { tras: "<h3>Filosofía y ciencia</h3>", html: `<h3>Sócrates, Platón y Aristóteles</h3><p>Tres filósofos atenienses, maestro y discípulos, marcaron el pensamiento occidental. <mark>Sócrates</mark> (469-399 a. C.) no escribió nada: paseaba por el ágora haciendo preguntas para que sus interlocutores descubrieran sus propias contradicciones. Su lema era «solo sé que no sé nada», es decir, reconocer la propia ignorancia es el primer paso para aprender. Fue condenado a muerte acusado de corromper a los jóvenes.</p><p>Su discípulo <mark>Platón</mark> escribió diálogos en los que Sócrates es el protagonista y fundó la <b>Academia</b>, origen de la palabra académico. Pensaba que detrás del mundo que vemos existe un mundo de ideas perfectas, y lo explicó con el <b>mito de la caverna</b>. <mark>Aristóteles</mark>, alumno de Platón y maestro de Alejandro Magno, fundó el <b>Liceo</b> (de ahí liceo e instituto) y lo estudió casi todo: lógica, biología, física, política, ética y poesía. Su idea de que la virtud está en el término medio (ni cobarde ni temerario: valiente) sigue siendo útil.</p>`, svg: ["Tres grandes filósofos", [["Sócrates", "preguntar para pensar"], ["Platón", "Academia, mundo de ideas"], ["Aristóteles", "Liceo, lógica, biología"]], "maestro y discípulos"] },
    { tras: "<h3>La herencia en la cultura popular</h3>", html: `<h3>Símbolos clásicos a nuestro alrededor</h3><p>Muchos símbolos del poder y de la vida pública vienen de Grecia y Roma. La <b>corona de laurel</b>, planta de Apolo, premiaba a poetas y generales; de ahí <i>laureado</i> y la palabra <b>bachiller</b>, que algunos relacionan con <i>bacca lauri</i>, «baya de laurel». El <b>águila</b> era el emblema de las legiones y de Júpiter, y aparece en escudos de muchos países. La <b>balanza</b> y la espada de la diosa Justicia, con los ojos vendados para no favorecer a nadie, presiden los tribunales.</p><p>El <b>Capitolio</b> de Washington toma su nombre de la colina del Capitolio de Roma, y el lema de Estados Unidos, <i>E pluribus unum</i> («de muchos, uno»), es latino. Las siglas <b>SPQR</b> (<i>Senatus Populusque Romanus</i>, «el Senado y el pueblo romano») siguen en las tapas de alcantarilla de Roma. Y la <b>antorcha olímpica</b> se enciende cada cuatro años con los rayos del sol en Olimpia, como homenaje a los juegos antiguos.</p>`, svg: ["Símbolos de origen clásico", [["Laurel", "premio y victoria"], ["Águila", "Júpiter y las legiones"], ["Balanza", "la diosa Justicia"]], "símbolos que perduran"] },
    { html: `<h3>Una herencia para mirar con espíritu crítico</h3><p>Admirar el legado clásico no significa idealizarlo. La democracia ateniense convivía con la <b>esclavitud</b> y excluía a las mujeres y a los extranjeros; el derecho romano consideraba al esclavo una cosa que podía venderse; y muchos textos antiguos defienden ideas que hoy rechazamos, como la superioridad de unos pueblos sobre otros. Precisamente uno de los mejores regalos de los griegos fue la costumbre de <b>discutirlo todo</b>, también sus propias tradiciones.</p><p>A lo largo de la historia, la tradición clásica se ha reinterpretado muchas veces. Los humanistas del Renacimiento la usaron para poner al ser humano en el centro; los ilustrados del siglo XVIII, para defender la razón y la libertad; y hoy escritoras y escritores vuelven a los mitos para contarlos desde el punto de vista de personajes olvidados, como Penélope o Circe. Conocer el legado clásico nos ayuda a entender de dónde vienen nuestras instituciones, nuestras palabras y nuestras ideas, y también a decidir qué conservar y qué mejorar.</p>`, svg: ["Mirar el legado con criterio", [["Valorar", "democracia, derecho, ciencia"], ["Criticar", "esclavitud, exclusión"], ["Reinterpretar", "nuevas miradas a los mitos"]]] },
  ],
  ejemplos: [
    ["¿Por qué un gobierno que elige a sus cargos por sorteo podía considerarse más democrático que uno que los elige por votación?", ["Con el sorteo, cualquier ciudadano podía ocupar un cargo, aunque no fuera rico ni famoso.", "La votación tiende a favorecer a quienes tienen más dinero, fama o habilidad para convencer.", "Los atenienses pensaban que todos los ciudadanos eran capaces de gobernar."], "Porque daba a todos los ciudadanos la misma oportunidad de gobernar y evitaba que el poder quedara en manos de una élite."],
    ["Explica el significado y el origen de «in dubio pro reo».", ["Traducción: «en la duda, a favor del reo» (el acusado).", "Es un principio del derecho romano que pasó a los códigos modernos.", "Se relaciona con la presunción de inocencia."], "Si no hay pruebas suficientes, el juez debe absolver al acusado."],
    ["¿Es bisiesto el año 1900? ¿Y el 2000?", ["Con el calendario gregoriano, los años terminados en 00 solo son bisiestos si son divisibles entre 400.", "1900 / 400 no es exacto; 2000 / 400 = 5."], "1900 no fue bisiesto; 2000 sí."],
  ],
  errores: ["Decir «a grosso modo» o «de motu propio»: lo correcto es grosso modo y motu proprio."],
  niveles: "bmbbbbbbmm",
  ejercicios: [
    ["b", "¿Qué eran la Ekklesía y la Bulé?", "La Ekklesía era la asamblea de todos los ciudadanos de Atenas, que votaba las leyes; la Bulé, el Consejo de los Quinientos, que preparaba los asuntos que se iban a votar."],
    ["b", "¿Qué era el ostracismo?", "Un voto anual en el que los atenienses escribían en un trozo de cerámica el nombre de alguien peligroso para la democracia; el más votado se exiliaba diez años."],
    ["b", "¿Qué fueron las Doce Tablas?", "Las primeras leyes escritas de Roma (hacia el 450 a. C.), expuestas en el foro para que todos las conocieran."],
    ["b", "Asocia cada filósofo con su escuela: Platón, Aristóteles.", "Platón fundó la Academia y Aristóteles, el Liceo."],
    ["m", "¿Por qué el calendario juliano tuvo que corregirse?", "Porque el año real dura unos once minutos menos que 365 días y cuarto; con los siglos acumuló un desfase de diez días que Gregorio XIII corrigió en 1582."],
    ["m", "Explica qué significan «habeas corpus» y «pacta sunt servanda».", "Habeas corpus: derecho de una persona detenida a ser llevada ante un juez. Pacta sunt servanda: los acuerdos deben cumplirse."],
    ["m", "¿Qué quería decir Sócrates con «solo sé que no sé nada»?", "Que reconocer la propia ignorancia es el punto de partida para buscar el conocimiento; quien cree saberlo todo no se pregunta nada."],
    ["m", "Explica la idea del término medio de Aristóteles con un ejemplo.", "La virtud está entre dos extremos: el valor está entre la cobardía y la temeridad; la generosidad, entre la tacañería y el derroche."],
    ["m", "¿Por qué los atenienses elegían por votación a los estrategos y no por sorteo?", "Porque dirigir el ejército exigía experiencia y conocimientos militares; un error podía costar la guerra."],
    ["m", "Cita tres conceptos del derecho romano que siguen vigentes.", "La persona como sujeto de derechos, la propiedad, el contrato, el testamento o la distinción entre derecho público y privado."],
    ["m", "¿Qué significa SPQR y dónde se puede ver hoy?", "Senatus Populusque Romanus, «el Senado y el pueblo romano». Aparece en monumentos y en las tapas de alcantarilla de Roma."],
    ["m", "Explica el origen de la palabra «candidato».", "Viene del latín candidus, «blanco brillante», porque quienes aspiraban a un cargo en Roma vestían una toga especialmente blanca."],
    ["m", "Corrige: «Lo explicó a grosso modo y dimitió de motu propio».", "Lo explicó grosso modo y dimitió motu proprio."],
    ["a", "Compara la democracia ateniense con la democracia española actual en tres aspectos.", "Atenas: directa, los ciudadanos votan las leyes; hoy, representativa, elegimos a parlamentarios. Atenas excluía a mujeres, esclavos y extranjeros; hoy el sufragio es universal. Atenas usaba el sorteo para los cargos; hoy se usan elecciones (el sorteo solo pervive en los jurados populares y las mesas electorales)."],
    ["a", "¿Por qué crees que el derecho romano se estudió en las universidades medievales?", "Porque era un sistema completo, escrito y razonado, que ofrecía soluciones a problemas de propiedad, contratos y herencias en una Europa que necesitaba leyes comunes para el comercio y los reinos."],
    ["a", "Explica el mito de la caverna de Platón y su significado.", "Unos prisioneros encadenados en una caverna solo ven sombras y creen que son la realidad; uno se libera, sale y descubre el mundo verdadero iluminado por el sol. Significa que la educación y la razón nos liberan de las apariencias y nos acercan a la verdad."],
    ["a", "Valora críticamente esta frase: «La democracia ateniense fue perfecta».", "Es falsa: fue muy participativa y directa, pero excluía a la mayoría (mujeres, esclavos, extranjeros), se apoyaba en la esclavitud y podía tomar decisiones injustas, como la condena de Sócrates."],
    ["a", "Busca tres ejemplos de herencia clásica en tu entorno (calles, marcas, edificios) y explícalos.", "Respuesta abierta. Por ejemplo: una calle llamada Hércules (héroe), la marca Nike (diosa de la victoria) y un edificio con columnas y frontón (arquitectura clásica)."],
    ["a", "¿Por qué los escritores actuales reescriben mitos desde el punto de vista de personajes secundarios?", "Para dar voz a quienes los relatos antiguos dejaban en segundo plano (sobre todo mujeres, como Penélope o Circe), revisar los valores tradicionales y conectar los mitos con preocupaciones actuales."],
    ["a", "Explica por qué el método griego es más importante que sus descubrimientos concretos.", "Porque muchos de sus descubrimientos se han superado, pero el método (preguntar, observar, razonar, discutir y demostrar) es la base de la ciencia y del pensamiento crítico, y permite seguir descubriendo."],
    ["a", "Redacta un breve discurso (80 palabras) defendiendo que se estudie Cultura Clásica en tu centro.", "Respuesta abierta. Debe incluir argumentos como: explica el origen de nuestras palabras, instituciones y leyes; ayuda a entender el arte y la literatura; enseña a pensar críticamente; y conecta con la cultura popular actual."],
  ],
  cuartas: ["Cartago", "El dinero del Estado", "Julio César", "Fuera de lugar", "Homero", "Marte", "Nerón", "más vale tarde que nunca", "La primavera", "Nerón", "a groso modo", "monárquica", "inglés"],
  quiz: [
    ["La asamblea de ciudadanos de Atenas se llamaba…", ["Ekklesía", "Bulé", "Senado", "Liceo"], 0, "Se reunía en la colina de la Pnix."],
    ["El ostracismo consistía en…", ["exiliar diez años al más votado", "condenar a muerte", "elegir a un general", "pagar un impuesto"], 0, "Se votaba escribiendo en un ostrakon."],
    ["La mayoría de cargos atenienses se elegía…", ["por sorteo", "por herencia", "por el rey", "por la edad"], 0, "Salvo los estrategos."],
    ["Las primeras leyes escritas de Roma fueron…", ["las Doce Tablas", "el Corpus Iuris Civilis", "el Código Civil", "la Ilíada"], 0, "Hacia el 450 a. C."],
    ["«In dubio pro reo» significa…", ["en la duda, a favor del acusado", "los pactos deben cumplirse", "aprovecha el día", "de muchos, uno"], 0, "Base de la presunción de inocencia."],
    ["¿Quién fundó la Academia?", ["Platón", "Sócrates", "Aristóteles", "Pericles"], 0, "Origen de la palabra «académico»."],
    ["Aristóteles fue maestro de…", ["Alejandro Magno", "Julio César", "Pericles", "Sócrates"], 0, "Fundó el Liceo."],
    ["El calendario actual lo corrigió en 1582…", ["Gregorio XIII", "Julio César", "Augusto", "Justiniano"], 0, "Calendario gregoriano."],
    ["El lema «E pluribus unum» es de…", ["Estados Unidos", "la ONU", "Francia", "Grecia"], 0, "«De muchos, uno»."],
    ["La palabra «candidato» viene de una toga…", ["blanca", "roja", "negra", "dorada"], 0, "Candidus: blanco brillante."],
  ],
  examen: [
    ["¿Qué filósofo no escribió nada?", ["Sócrates", "Platón", "Aristóteles", "Cicerón"], 0, "Lo conocemos por sus discípulos."],
    ["¿Fue bisiesto el año 1900?", ["No", "Sí", "Solo en Roma", "Solo en España"], 0, "Los años en 00 deben dividirse entre 400."],
    ["SPQR significa…", ["el Senado y el pueblo romano", "salud para quien rece", "Roma para siempre", "soldados de Roma"], 0, "Senatus Populusque Romanus."],
    ["El Código Civil español es de…", ["1889", "1804", "476", "1582"], 0, "Inspirado en el derecho romano."],
    ["En Atenas podían votar…", ["los ciudadanos varones adultos", "todos los habitantes", "también las mujeres", "los esclavos libres"], 0, "Unos 30.000 de 300.000."],
  ],
  tarjetas: [["Ostracismo", "Exilio de diez años votado por los atenienses."], ["Doce Tablas", "Primeras leyes escritas de Roma (hacia 450 a. C.)."], ["Mito de la caverna", "Alegoría de Platón sobre la educación y la verdad."], ["Calendario gregoriano", "Corrección del juliano hecha en 1582."]],
  glosario: [["Democracia", "Gobierno del pueblo (demos + kratos)."], ["República", "Res publica: «la cosa pública», el Estado de todos."], ["Ekklesía", "Asamblea de ciudadanos de Atenas."], ["Bulé", "Consejo ateniense de los Quinientos."], ["Ostracismo", "Destierro de diez años votado en Atenas."], ["Doce Tablas", "Primeras leyes escritas de Roma."], ["Corpus Iuris Civilis", "Recopilación del derecho romano hecha por Justiniano."], ["Latinismo", "Palabra o expresión latina usada en nuestra lengua."], ["Academia", "Escuela fundada por Platón en Atenas."], ["Liceo", "Escuela fundada por Aristóteles."], ["Calendario juliano", "Calendario de Julio César (46 a. C.)."], ["Calendario gregoriano", "Reforma de 1582 que usamos hoy."], ["Tradición clásica", "Presencia de Grecia y Roma en la cultura posterior."], ["Humanismo", "Movimiento renacentista que recuperó a los clásicos."]],
  situacion: { titulo: "Detectives del legado clásico", reto: "Demostrar con pruebas que Grecia y Roma siguen presentes en nuestra vida diaria.", pasos: ["Llevar un diario de un día anotando palabras, marcas, símbolos, edificios y costumbres de origen clásico.", "Clasificar las pruebas por ámbitos: política, derecho, ciencia, lengua, calendario, cultura popular.", "Investigar el origen exacto de cinco de ellas.", "Elegir una herencia que conviene conservar y otra que hemos superado, y justificarlo.", "Presentar las conclusiones en un vídeo corto o un póster."], producto: "Un expediente con al menos 20 pruebas clasificadas y una conclusión crítica.", evaluacion: ["Las pruebas están bien clasificadas y explicadas.", "Se investiga el origen con fuentes fiables.", "La conclusión valora el legado con espíritu crítico.", "La presentación es clara y creativa."] },
  familias: ["Jugad a encontrar en las noticias de un día palabras o expresiones latinas y comentad su significado."],
  saberes: "pervivencia del legado grecolatino en las instituciones, el derecho, el pensamiento, la ciencia y la lengua.",
  minutos: 100,
});
