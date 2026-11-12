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
